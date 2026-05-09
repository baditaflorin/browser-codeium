import { useCallback, useState } from "react";
import type { ToastMessage } from "@/components/ToastRegion";

export function useToasts(): {
  toasts: ToastMessage[];
  pushToast: (tone: ToastMessage["tone"], message: string) => void;
  dismissToast: (id: string) => void;
} {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const pushToast = useCallback((tone: ToastMessage["tone"], message: string) => {
    const id = crypto.randomUUID();
    setToasts((current) => [...current, { id, tone, message }].slice(-4));
    window.setTimeout(() => {
      setToasts((current) => current.filter((toast) => toast.id !== id));
    }, 4800);
  }, []);

  const dismissToast = useCallback((id: string) => {
    setToasts((current) => current.filter((toast) => toast.id !== id));
  }, []);

  return { toasts, pushToast, dismissToast };
}
