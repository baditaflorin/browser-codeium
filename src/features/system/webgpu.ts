export interface WebGpuStatus {
  state: "supported" | "unsupported" | "blocked";
  label: string;
  detail: string;
  features: string[];
}

export async function detectWebGpu(): Promise<WebGpuStatus> {
  if (!navigator.gpu) {
    return {
      state: "unsupported",
      label: "WebGPU unavailable",
      detail: "This browser does not expose navigator.gpu.",
      features: []
    };
  }

  try {
    const adapter = await navigator.gpu.requestAdapter({ powerPreference: "high-performance" });
    if (!adapter) {
      return {
        state: "blocked",
        label: "No adapter",
        detail: "WebGPU exists, but the browser did not provide an adapter.",
        features: []
      };
    }

    const device = await adapter.requestDevice();
    device.destroy();

    const info = adapter.info?.description || adapter.info?.vendor || "browser GPU adapter";
    return {
      state: "supported",
      label: "WebGPU ready",
      detail: `Adapter available: ${info}. Local acceleration can be enabled behind user action.`,
      features: [...adapter.features].sort()
    };
  } catch (error) {
    return {
      state: "blocked",
      label: "WebGPU blocked",
      detail: error instanceof Error ? error.message : String(error),
      features: []
    };
  }
}
