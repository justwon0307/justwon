class ResizeObserverMock {
  private readonly callback: ResizeObserverCallback;

  constructor(callback: ResizeObserverCallback) {
    this.callback = callback;
  }

  observe() {
    // Call immediately so position calculation runs synchronously in tests,
    // matching the timing guarantees of the real ResizeObserver initial fire.
    this.callback([], this as unknown as ResizeObserver);
  }

  unobserve() {
    // No-op for testing
  }
  disconnect() {
    // No-op for testing
  }
}

globalThis.ResizeObserver = ResizeObserverMock;
