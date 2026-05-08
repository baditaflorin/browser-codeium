import type { ReactNode } from "react";

interface StatusPillProps {
  tone?: "neutral" | "good" | "warn" | "bad";
  children: ReactNode;
}

const tones = {
  neutral: "border-line bg-panelSoft text-mist",
  good: "border-green/50 bg-green/10 text-green",
  warn: "border-amber/60 bg-amber/10 text-amber",
  bad: "border-coral/60 bg-coral/10 text-coral"
};

export function StatusPill({ tone = "neutral", children }: StatusPillProps): JSX.Element {
  return (
    <span
      className={`inline-flex min-h-7 items-center rounded-md border px-2.5 py-1 text-xs font-medium ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
