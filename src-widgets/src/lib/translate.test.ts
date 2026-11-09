/**
 * The texts of this widget set, seen from outside: what arrives at the host's `t`.
 *
 * @module lib/translate.test
 * @remarks
 * Runs in the node project on purpose: there is no `window` here unless a test sets one, which
 * is how the claim "loads without the host, only a call needs it" stays checkable.
 */
import { afterEach, describe, expect, it, vi } from 'vitest';

/** Spells out what vis-2's `VisRxWidget.t` does with its `this` (Vis/visRxWidget.tsx:290). */
class HostWidget {
    static getI18nPrefix(): string {
        return '';
    }

    static t(this: { getI18nPrefix?(): string } | undefined, key: string, ...args: string[]): string {
        const text = this!.getI18nPrefix ? `${this!.getI18nPrefix()}${key}` : key;
        return args.length ? `${text}(${args.join(',')})` : text;
    }
}

afterEach(() => {
    vi.unstubAllGlobals();
    vi.resetModules();
});

describe('translate', () => {
    it('loads without the host, and only a call needs it', async () => {
        vi.stubGlobal('window', undefined);
        vi.resetModules();

        const { translate } = await import('./translate');

        expect(() => translate('some_key')).toThrow(TypeError);
    });

    it('reaches the host at call time, whichever host is there by then', async () => {
        vi.stubGlobal('window', {});
        vi.resetModules();
        const { translate } = await import('./translate');

        vi.stubGlobal('window', { visRxWidget: HostWidget });

        expect(translate('some_key')).toBe('vis_2_widgets_collection_some_key');
    });

    it('hands the prefix to the host as the receiver of its t, arguments included', async () => {
        vi.stubGlobal('window', { visRxWidget: HostWidget });
        const { translate } = await import('./translate');

        expect(translate('some_key', 'first', 'second')).toBe('vis_2_widgets_collection_some_key(first,second)');
    });

    it('survives being handed on as a callback', async () => {
        vi.stubGlobal('window', { visRxWidget: HostWidget });
        const { translate } = await import('./translate');

        // Detached on purpose: the call a bare Generic.t does not survive.
        const handedOn: (key: string) => string = translate;

        expect(handedOn('some_key')).toBe('vis_2_widgets_collection_some_key');
    });
});

describe('translateFieldLabel', () => {
    it.each([
        ['a label the host catalog has prefixed already', 'vis_2_widgets_collection_color_x'],
        ['a bare label', 'color_x'],
    ])('adds the prefix exactly once to %s', async (_name, label) => {
        vi.stubGlobal('window', { visRxWidget: HostWidget });
        const { translateFieldLabel } = await import('./translate');

        expect(translateFieldLabel(label)).toBe('vis_2_widgets_collection_color_x');
    });
});
