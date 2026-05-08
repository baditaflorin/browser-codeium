import { Sparkles } from "lucide-react";
import type { AssistantDraft } from "./assistant";

interface AssistantPanelProps {
  prompt: string;
  draft: AssistantDraft | null;
  onPromptChange: (value: string) => void;
  onGenerate: () => void;
}

export function AssistantPanel({
  prompt,
  draft,
  onPromptChange,
  onGenerate
}: AssistantPanelProps): JSX.Element {
  return (
    <section className="panel-section">
      <div className="panel-heading">
        <div>
          <h2>Assistant</h2>
          <p>Local coding draft, ready for BYO-key providers later.</p>
        </div>
        <button
          type="button"
          className="icon-button"
          title="Generate local assistant draft"
          aria-label="Generate local assistant draft"
          onClick={onGenerate}
        >
          <Sparkles size={18} aria-hidden="true" />
        </button>
      </div>

      <label className="block text-xs font-medium uppercase tracking-wide text-muted" htmlFor="assistant-prompt">
        Prompt
      </label>
      <textarea
        id="assistant-prompt"
        className="mt-2 min-h-24 w-full resize-y rounded-md border border-line bg-ink p-3 text-sm text-mist outline-none focus:border-cyan"
        value={prompt}
        onChange={(event) => onPromptChange(event.target.value)}
        placeholder="Ask for a review, refactor direction, or test idea."
      />

      {draft ? (
        <div className="mt-4 space-y-3 rounded-md border border-line bg-ink p-3">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-sm font-semibold text-white">{draft.title}</h3>
            <span className="rounded-md border border-line px-2 py-1 text-xs text-muted">
              {draft.risk} risk
            </span>
          </div>
          <ul className="space-y-2 text-sm text-muted">
            {draft.summary.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="rounded-md border border-green/40 bg-green/10 p-3 text-sm text-green">
            {draft.suggestedEdit}
          </div>
        </div>
      ) : (
        <p className="mt-3 text-sm text-muted">
          Generate a local draft after editing or analyzing the active file.
        </p>
      )}
    </section>
  );
}
