import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { analyzeSource } from "./treeSitter";
import type { CodeAnalysis } from "./types";
import type { WorkspaceFile } from "@/features/workspace/workspace";
import { reportError } from "@/lib/logger";

interface UseAnalysisControllerArgs {
  activeFile: WorkspaceFile | null;
  autoAnalyze: boolean;
  pushToast: (tone: "info" | "error" | "success", message: string) => void;
}

export function useAnalysisController({
  activeFile,
  autoAnalyze,
  pushToast
}: UseAnalysisControllerArgs): {
  analysis: CodeAnalysis | null;
  isAnalyzing: boolean;
  resetAnalysis: () => void;
  handleAnalyze: () => void;
} {
  const [analysis, setAnalysis] = useState<CodeAnalysis | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisKey, setAnalysisKey] = useState<string | null>(null);
  const analysisCache = useRef(new Map<string, CodeAnalysis>());
  const analysisAbort = useRef<AbortController | null>(null);

  const activeFileCacheKey = useMemo(
    () =>
      activeFile ? `${activeFile.path}:${activeFile.updatedAt}:${activeFile.content.length}` : null,
    [activeFile]
  );

  const resetAnalysis = useCallback(() => {
    analysisAbort.current?.abort();
    analysisAbort.current = null;
    setIsAnalyzing(false);
    setAnalysis(null);
    setAnalysisKey(null);
  }, []);

  const runAnalysis = useCallback(
    (announce: boolean) => {
      if (!activeFile || !activeFileCacheKey) {
        if (announce) {
          pushToast("error", "Select a file before analyzing.");
        }
        return;
      }

      const cached = analysisCache.current.get(activeFileCacheKey);
      if (cached) {
        setAnalysis(cached);
        setAnalysisKey(activeFileCacheKey);
        if (announce) {
          pushToast(
            "success",
            `Reused ${cached.fileShape} analysis with ${cached.confidence.label} confidence.`
          );
        }
        return;
      }

      analysisAbort.current?.abort();
      const controller = new AbortController();
      analysisAbort.current = controller;
      setIsAnalyzing(true);

      void analyzeSource(activeFile.content, activeFile.path, { signal: controller.signal })
        .then((nextAnalysis) => {
          if (controller.signal.aborted || analysisAbort.current !== controller) {
            return;
          }
          analysisCache.current.set(activeFileCacheKey, nextAnalysis);
          setAnalysis(nextAnalysis);
          setAnalysisKey(activeFileCacheKey);
          if (announce) {
            pushToast(
              "success",
              `Detected ${nextAnalysis.fileShape} with ${nextAnalysis.confidence.label} confidence.`
            );
          }
        })
        .catch((error) => {
          if (error instanceof DOMException && error.name === "AbortError") {
            if (announce) {
              pushToast("info", "Analysis cancelled. Previous result kept.");
            }
            return;
          }
          pushToast("error", reportError(error));
        })
        .finally(() => {
          if (analysisAbort.current === controller) {
            analysisAbort.current = null;
            setIsAnalyzing(false);
          }
        });
    },
    [activeFile, activeFileCacheKey, pushToast]
  );

  const handleAnalyze = useCallback(() => {
    if (isAnalyzing) {
      analysisAbort.current?.abort();
      analysisAbort.current = null;
      setIsAnalyzing(false);
      pushToast("info", "Analysis cancelled. Previous result kept.");
      return;
    }

    runAnalysis(true);
  }, [isAnalyzing, pushToast, runAnalysis]);

  useEffect(() => {
    if (
      !activeFile ||
      !activeFileCacheKey ||
      !autoAnalyze ||
      isAnalyzing ||
      analysisKey === activeFileCacheKey
    ) {
      return undefined;
    }

    const timer = window.setTimeout(() => runAnalysis(false), 250);
    return () => window.clearTimeout(timer);
  }, [activeFile, activeFileCacheKey, analysisKey, autoAnalyze, isAnalyzing, runAnalysis]);

  useEffect(
    () => () => {
      analysisAbort.current?.abort();
    },
    []
  );

  return { analysis, isAnalyzing, resetAnalysis, handleAnalyze };
}
