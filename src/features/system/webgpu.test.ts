import { afterEach, describe, expect, it, vi } from "vitest";
import { detectWebGpu } from "./webgpu";

describe("detectWebGpu", () => {
  const originalGpu = navigator.gpu;

  afterEach(() => {
    Object.defineProperty(navigator, "gpu", {
      configurable: true,
      value: originalGpu
    });
  });

  it("reports unsupported when navigator.gpu is missing", async () => {
    Object.defineProperty(navigator, "gpu", {
      configurable: true,
      value: undefined
    });

    await expect(detectWebGpu()).resolves.toMatchObject({ state: "unsupported" });
  });

  it("reports supported when an adapter and device are available", async () => {
    Object.defineProperty(navigator, "gpu", {
      configurable: true,
      value: {
        requestAdapter: vi.fn().mockResolvedValue({
          features: new Set(["shader-f16"]),
          limits: {},
          info: { vendor: "test" },
          requestDevice: vi.fn().mockResolvedValue({ destroy: vi.fn() })
        })
      }
    });

    await expect(detectWebGpu()).resolves.toMatchObject({
      state: "supported",
      features: ["shader-f16"]
    });
  });
});
