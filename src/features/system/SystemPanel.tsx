import { Activity, Database, Gauge, WifiOff } from "lucide-react";
import type { CodeAnalysis } from "@/features/analysis/types";
import { buildInfo } from "@/lib/buildInfo";
import { StatusPill } from "@/components/StatusPill";
import type { WebGpuStatus } from "./webgpu";

interface SystemPanelProps {
  webGpuStatus: WebGpuStatus;
  onCheckWebGpu: () => void;
  storageState: string;
  sampleVersion: number | null;
  commit: string;
  analysis: CodeAnalysis | null;
  debugEnabled: boolean;
}

export function SystemPanel({
  webGpuStatus,
  onCheckWebGpu,
  storageState,
  sampleVersion,
  commit,
  analysis,
  debugEnabled
}: SystemPanelProps): JSX.Element {
  return (
    <section className="panel-section">
      <div className="panel-heading">
        <div>
          <h2>Runtime</h2>
          <p>Static hosting, local persistence, browser capabilities.</p>
        </div>
        <button
          type="button"
          className="icon-button"
          title="Check WebGPU"
          aria-label="Check WebGPU"
          onClick={onCheckWebGpu}
        >
          <Gauge size={18} aria-hidden="true" />
        </button>
      </div>

      <div className="space-y-3 text-sm">
        <div className="flex flex-wrap gap-2">
          <StatusPill tone="good">Mode A</StatusPill>
          <StatusPill>{sampleVersion ? `data v${sampleVersion}` : "data loading"}</StatusPill>
          <StatusPill>{storageState}</StatusPill>
        </div>

        <div className="rounded-md border border-line bg-ink p-3">
          <div className="flex items-start gap-2">
            <Activity size={17} className="mt-0.5 text-cyan" aria-hidden="true" />
            <div>
              <p className="font-medium text-white">{webGpuStatus.label}</p>
              <p className="mt-1 text-muted">{webGpuStatus.detail}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-[24px_1fr] gap-2 text-muted">
          <Database size={16} className="mt-0.5 text-green" aria-hidden="true" />
          <span>Projects are stored in this browser with IndexedDB.</span>
          <WifiOff size={16} className="mt-0.5 text-amber" aria-hidden="true" />
          <span>No analytics, no backend, no app-owned secrets.</span>
        </div>

        <div className="rounded-md border border-line bg-ink p-3 text-xs text-muted">
          <p>Version: v{buildInfo.version}</p>
          <p>Commit: {commit}</p>
          <p className="break-all">Pages: {buildInfo.pagesUrl}</p>
        </div>

        {debugEnabled ? (
          <details className="rounded-md border border-line bg-ink p-3 text-xs text-muted" open>
            <summary className="cursor-pointer text-mist">Debug analysis state</summary>
            {analysis ? (
              <dl className="mt-2 grid grid-cols-[96px_1fr] gap-1">
                <dt>Shape</dt>
                <dd>{analysis.fileShape}</dd>
                <dt>Confidence</dt>
                <dd>
                  {analysis.confidence.label} {Math.round(analysis.confidence.score * 100)}%
                </dd>
                <dt>Source hash</dt>
                <dd>{analysis.provenance.sourceHash}</dd>
                <dt>Diagnostics</dt>
                <dd>{analysis.diagnostics.map((item) => item.code).join(", ") || "none"}</dd>
                <dt>Anomalies</dt>
                <dd>{analysis.anomalies.join(", ") || "none"}</dd>
              </dl>
            ) : (
              <p className="mt-2">No analysis has completed for the active file.</p>
            )}
          </details>
        ) : null}
      </div>
    </section>
  );
}
