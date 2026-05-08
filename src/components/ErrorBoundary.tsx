import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  message: string | null;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { message: null };

  static getDerivedStateFromError(error: unknown): State {
    return { message: error instanceof Error ? error.message : String(error) };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    if (import.meta.env.DEV) {
      console.error(error, info);
    }
  }

  render(): ReactNode {
    if (this.state.message) {
      return (
        <main className="min-h-screen bg-ink p-8 text-mist">
          <div className="mx-auto max-w-2xl rounded-md border border-coral/60 bg-panel p-6">
            <h1 className="text-xl font-semibold text-white">browser-codeium hit a render error</h1>
            <p className="mt-3 text-sm text-muted">{this.state.message}</p>
            <button
              type="button"
              className="mt-5 rounded-md bg-cyan px-4 py-2 text-sm font-semibold text-ink"
              onClick={() => this.setState({ message: null })}
            >
              Try again
            </button>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}
