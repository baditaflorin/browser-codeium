import type { ChangeEvent } from "react";
import { SlidersHorizontal } from "lucide-react";
import type { UserSettings } from "./settings";

interface SettingsPanelProps {
  settings: UserSettings;
  onSettingsChange: (next: UserSettings) => void;
}

export function SettingsPanel({ settings, onSettingsChange }: SettingsPanelProps): JSX.Element {
  const handleCheckbox =
    (key: "autoAnalyze" | "restoreLastSession") => (event: ChangeEvent<HTMLInputElement>) => {
      onSettingsChange({
        ...settings,
        [key]: event.target.checked
      });
    };

  return (
    <section className="panel-section">
      <div className="panel-heading">
        <div>
          <h2>Settings</h2>
          <p>Persisted workspace behavior and editor defaults.</p>
        </div>
        <div className="icon-button" aria-hidden="true">
          <SlidersHorizontal size={18} />
        </div>
      </div>

      <div className="space-y-3 text-sm text-mist">
        <label className="flex items-center justify-between gap-3">
          <span>Auto-analyze active file</span>
          <input
            type="checkbox"
            checked={settings.autoAnalyze}
            onChange={handleCheckbox("autoAnalyze")}
          />
        </label>
        <label className="flex items-center justify-between gap-3">
          <span>Restore last session on launch</span>
          <input
            type="checkbox"
            checked={settings.restoreLastSession}
            onChange={handleCheckbox("restoreLastSession")}
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-muted">Word wrap</span>
          <select
            className="w-full rounded-md border border-line bg-ink p-2 text-sm text-mist"
            value={settings.wordWrap}
            onChange={(event) =>
              onSettingsChange({
                ...settings,
                wordWrap: event.target.value as UserSettings["wordWrap"]
              })
            }
          >
            <option value="on">On</option>
            <option value="off">Off</option>
          </select>
        </label>
        <label className="block">
          <span className="mb-2 block text-muted">Editor font size</span>
          <input
            type="range"
            min={12}
            max={20}
            step={1}
            value={settings.fontSize}
            onChange={(event) =>
              onSettingsChange({
                ...settings,
                fontSize: Number(event.target.value)
              })
            }
            className="w-full"
          />
          <span className="mt-1 block text-xs text-muted">{settings.fontSize}px</span>
        </label>
      </div>
    </section>
  );
}
