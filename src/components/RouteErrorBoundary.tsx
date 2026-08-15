import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

/**
 * Last line of defence against a blank screen: if a route module fails to load
 * or a page throws while rendering, show a short message with a reload button
 * instead of an empty document.
 */
export default class RouteErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Route error:", error, info.componentStack);
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center gap-4 px-4 text-center">
        <h1 className="text-2xl font-semibold text-foreground">Pagina nu s-a putut încărca</h1>
        <p className="text-muted-foreground">
          A apărut o eroare temporară la încărcarea paginii. Reîncarcă pagina pentru a continua.
        </p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="rounded-md bg-primary px-5 py-2.5 font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Reîncarcă pagina
        </button>
      </div>
    );
  }
}
