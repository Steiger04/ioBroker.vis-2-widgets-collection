/**
 * The one `window.visRxWidget` of the dom test project, a `setupFiles` entry of `vitest.config.ts`.
 *
 * @module lib/testing/visRxWidgetStub
 * @remarks
 * `Generic` extends `window.visRxWidget`, which only the vis-2 host provides. This stub keeps
 * the one trait of the host's `t` that decides whether a call survives: it reads `this`. A
 * bare `Generic.t` handed on as a callback therefore throws here with the host's own error.
 * It returns the key, so assertions read keys.
 *
 * A test that needs other text sets its own class in a `vi.hoisted` block, which runs after
 * this file. The node project stays without a stub: it has no `window`.
 */

(window as unknown as { visRxWidget: unknown }).visRxWidget = class {
    static getI18nPrefix(): string {
        return '';
    }

    static t(key: string): string {
        // The host starts with the same read (VisRxWidget.t), which is what an unbound call dies on.
        void this.getI18nPrefix;
        return key;
    }
};
