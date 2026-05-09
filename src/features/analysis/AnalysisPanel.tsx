import { Braces, CircleAlert, FileSearch } from "lucide-react";
import type { CodeAnalysis } from "./types";
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
          title="Analyze active file"
          aria-label="Analyze active file"
          onClick={onAnalyze}
          disabled={isAnalyzing}
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
            <StatusPill tone={analysis.hasSyntaxErrors ? "bad" : "good"}>
              {analysis.hasSyntaxErrors ? "syntax issues" : "clean parse"}
            </StatusPill>
            <StatusPill>{analysis.parseMs}ms</StatusPill>
          </div>

          {analysis.diagnostics.length > 0 ? (
            <div className="rounded-md border border-amber/40 bg-amber/10 p-3 text-sm text-amber">
              <CircleAlert size={16} className="mr-2 inline" aria-hidden="true" />
              <span>{analysis.diagnostics[0].what}</span>
              <p className="mt-1 text-xs text-amber/80">{analysis.diagnostics[0].nowWhat}</p>
            </div>
          ) : null}

          <div>
            <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold text-white">
              <Braces size={16} aria-hidden="true" />
              Symbols
            </h3>
            <div className="max-h-64 overflow-y-auto rounded-md border border-line">
              {analysis.symbols.length > 0 ? (
                analysis.symbols.map((symbol, index) => (
                  <div
                    key={`${symbol.kind}-${symbol.name}-${symbol.line}-${index}`}
                    className="grid grid-cols-[72px_1fr_auto] gap-2 border-b border-line px-3 py-2 text-xs last:border-b-0"
                  >
                    <span className="text-cyan">{symbol.kind}</span>
                    <span className="min-w-0 truncate text-mist" title={symbol.preview}>
                      {symbol.name}
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
          Run analysis to build a symbol map for the active file.
        </p>
      )}
    </section>
  );
}
