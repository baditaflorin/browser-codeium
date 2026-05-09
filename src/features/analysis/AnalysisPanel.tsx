import { Braces, CircleAlert, FileSearch } from "lucide-react";
import type { CodeAnalysis, ConfidenceLabel, FileShape } from "./types";
import { StatusPill } from "@/components/StatusPill";

interface AnalysisPanelProps {
  analysis: CodeAnalysis | null;
  isAnalyzing: boolean;
  onAnalyze: () => void;
}

export function AnalysisPanel({
  analysis,
  isAnalyzing,
  onAnalyze
}: AnalysisPanelProps): JSX.Element {
  return (
    <section className="panel-section">
      <div className="panel-heading">
        <div>
          <h2>Structure</h2>
          <p>Tree-sitter analysis and symbol outline.</p>
        </div>
        <button
          type="button"
          className="icon-button"
          title={isAnalyzing ? "Cancel active analysis" : "Analyze active file"}
          aria-label={isAnalyzing ? "Cancel active analysis" : "Analyze active file"}
          onClick={onAnalyze}
        >
          <FileSearch size={18} aria-hidden="true" />
        </button>
      </div>

      {analysis ? (
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <StatusPill tone={analysis.engine === "tree-sitter" ? "good" : "warn"}>
              {analysis.engine}
            </StatusPill>
            <StatusPill>{analysis.language}</StatusPill>
            <StatusPill>{formatShape(analysis.fileShape)}</StatusPill>
            <StatusPill tone={confidenceTone(analysis.confidence.label)}>
              {analysis.confidence.label} {formatPercent(analysis.confidence.score)}
            </StatusPill>
            <StatusPill tone={analysis.hasSyntaxErrors ? "bad" : "good"}>
              {analysis.hasSyntaxErrors ? "syntax issues" : "clean parse"}
            </StatusPill>
            <StatusPill>{analysis.parseMs}ms</StatusPill>
          </div>

          {analysis.diagnostics.length > 0 ? (
            <div className="space-y-2 rounded-md border border-amber/40 bg-amber/10 p-3 text-sm text-amber">
              {analysis.diagnostics.map((item) => (
                <div key={item.id}>
                  <CircleAlert size={16} className="mr-2 inline" aria-hidden="true" />
                  <span>{item.what}</span>
                  <p className="mt-1 text-xs text-amber/80">{item.why}</p>
                  <p className="mt-1 text-xs text-amber/80">{item.nowWhat}</p>
                </div>
              ))}
            </div>
          ) : null}

          <details className="rounded-md border border-line bg-ink p-3 text-xs text-muted">
            <summary className="cursor-pointer text-mist">Why this guess?</summary>
            <ul className="mt-2 list-disc space-y-1 pl-4">
              {[...analysis.explanation, ...analysis.confidence.reasons].map((reason) => (
                <li key={reason}>{reason}</li>
              ))}
            </ul>
          </details>

          <div>
            <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold text-white">
              <Braces size={16} aria-hidden="true" />
              Symbols
            </h3>
            <div className="max-h-64 overflow-y-auto rounded-md border border-line">
              {analysis.symbols.length > 0 ? (
                analysis.symbols.map((symbol) => (
                  <div
                    key={symbol.id}
                    className="grid grid-cols-[72px_1fr_auto_auto] gap-2 border-b border-line px-3 py-2 text-xs last:border-b-0"
                  >
                    <span className="text-cyan">{symbol.kind}</span>
                    <span className="min-w-0 truncate text-mist" title={symbol.preview}>
                      {symbol.name}
                    </span>
                    <span className={confidenceClass(symbol.confidence.label)}>
                      {formatPercent(symbol.confidence.score)}
                    </span>
                    <span className="text-muted">L{symbol.line}</span>
                  </div>
                ))
              ) : (
                <p className="p-3 text-sm text-muted">No declarations found.</p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <p className="text-sm text-muted">
          The first useful structure guess runs automatically for the active file.
        </p>
      )}
    </section>
  );
}

function confidenceTone(label: ConfidenceLabel): "good" | "warn" | "bad" {
  if (label === "high") return "good";
  if (label === "medium") return "warn";
  return "bad";
}

function confidenceClass(label: ConfidenceLabel): string {
  if (label === "high") return "text-green";
  if (label === "medium") return "text-amber";
  return "text-coral";
}

function formatPercent(score: number): string {
  return `${Math.round(score * 100)}%`;
}

function formatShape(shape: FileShape): string {
  return shape.replace(/-/g, " ");
}
