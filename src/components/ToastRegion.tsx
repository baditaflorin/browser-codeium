import { X } from "lucide-react";

export interface ToastMessage {
  id: string;
  tone: "info" | "error" | "success";
  message: string;
}

interface ToastRegionProps {
  messages: ToastMessage[];
  onDismiss: (id: string) => void;
}

const toneClass = {
  info: "border-cyan/60 bg-cyan/10 text-cyan",
  error: "border-coral/60 bg-coral/10 text-coral",
  success: "border-green/60 bg-green/10 text-green"
};

export function ToastRegion({ messages, onDismiss }: ToastRegionProps): JSX.Element {
  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="pointer-events-none fixed bottom-4 right-4 z-50 flex w-[min(420px,calc(100vw-32px))] flex-col gap-2"
    >
      {messages.map((toast) => (
        <div
          key={toast.id}
          className={`pointer-events-auto flex items-start justify-between gap-3 rounded-md border p-3 text-sm shadow-xl ${toneClass[toast.tone]}`}
        >
          <span>{toast.message}</span>
          <button
            type="button"
            title="Dismiss"
            aria-label="Dismiss message"
            className="rounded-sm p-1 hover:bg-white/10"
            onClick={() => onDismiss(toast.id)}
          >
            <X size={16} aria-hidden="true" />
          </button>
        </div>
      ))}
    </div>
  );
}
