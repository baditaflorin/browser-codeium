import { Cpu, GitCommit, Github, HeartHandshake, Star } from "lucide-react";
import { buildInfo, commitUrl } from "@/lib/buildInfo";
import { StatusPill } from "./StatusPill";

interface TopBarProps {
  webGpuLabel: string;
}

export function TopBar({ webGpuLabel }: TopBarProps): JSX.Element {
  return (
    <header className="border-b border-line bg-ink/95 px-4 py-3">
      <div className="mx-auto flex max-w-[1500px] flex-wrap items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <img src={`${import.meta.env.BASE_URL}icon.svg`} alt="" className="h-9 w-9 rounded-md" />
          <div className="min-w-0">
            <h1 className="truncate text-lg font-semibold text-white">browser-codeium</h1>
            <p className="truncate text-xs text-muted">Static IDE workspace on GitHub Pages</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <StatusPill>
            <Cpu size={14} aria-hidden="true" />
            <span className="ml-1">{webGpuLabel}</span>
          </StatusPill>
          <a
            href={commitUrl()}
            className="inline-flex min-h-7 items-center rounded-md border border-line bg-panelSoft px-2.5 py-1 text-xs font-medium text-mist hover:border-cyan"
          >
            <GitCommit size={14} aria-hidden="true" />
            <span className="ml-1">
              v{buildInfo.version} · {buildInfo.commit}
            </span>
          </a>
          <a
            href={buildInfo.repositoryUrl}
            className="inline-flex min-h-9 items-center rounded-md border border-cyan/50 bg-cyan/10 px-3 py-2 text-sm font-semibold text-cyan hover:bg-cyan/20"
          >
            <Github size={17} aria-hidden="true" />
            <span className="ml-2">GitHub</span>
            <Star size={15} className="ml-2" aria-hidden="true" />
          </a>
          <a
            href={buildInfo.paypalUrl}
            className="inline-flex min-h-9 items-center rounded-md border border-amber/50 bg-amber/10 px-3 py-2 text-sm font-semibold text-amber hover:bg-amber/20"
          >
            <HeartHandshake size={17} aria-hidden="true" />
            <span className="ml-2">PayPal</span>
          </a>
        </div>
      </div>
    </header>
  );
}
