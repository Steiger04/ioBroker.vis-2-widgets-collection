/**
 * CollectionColorPicker — the input row HEX · R · G · B · A, tested over the Farbwähler's
 * interface (ADR-0102, Seam 1).
 *
 * @module components/colorPicker/CollectionColorPicker.inputRow.test
 * @remarks
 * Props in (value · commit · close), typing into the row's fields, commits and closes out. The
 * picker library is the fake of `testing/fakeColorPickerLibrary` (its buttons emit fixed picks);
 * the row runs on the library's real `useColorPicker` hook, which the fake passes on.
 */
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock(
    'react-best-gradient-color-picker',
    async () => (await import('./testing/fakeColorPickerLibrary')).fakeColorPickerLibrary,
);

import { ThemeProvider, createTheme } from '@mui/material';
import { act } from 'react';
import type React from 'react';

import { renderComponent, type RenderComponentHandle } from '../../lib/testing/testHarness';
import CollectionColorPicker, { type CollectionColorPickerProps } from './CollectionColorPicker';
import { lastLibraryProps, resetFakeLibrary, type FAKE_PICKS } from './testing/fakeColorPickerLibrary';

type Channel = 'hex' | 'r' | 'g' | 'b' | 'a';

const theme = createTheme({ palette: { mode: 'light' } });

function Host(props: CollectionColorPickerProps): React.JSX.Element {
    return (
        <ThemeProvider theme={theme}>
            <CollectionColorPicker {...props} />
        </ThemeProvider>
    );
}

let handle: RenderComponentHandle<CollectionColorPickerProps> | null = null;
let anchor: HTMLElement;

beforeEach(() => {
    resetFakeLibrary();
    anchor = document.createElement('button');
    document.body.appendChild(anchor);
    vi.stubGlobal('CSS', { supports: (): boolean => true });
    vi.useFakeTimers();
});

afterEach(() => {
    handle?.unmount();
    handle = null;
    anchor.remove();
    vi.useRealTimers();
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
});

/** Mounts an open Farbwähler; returns the close and commit spies. */
const mount = (
    props: Partial<CollectionColorPickerProps> = {},
): { onClose: ReturnType<typeof vi.fn>; onCommit: ReturnType<typeof vi.fn> } => {
    const onClose = vi.fn();
    const onCommit = vi.fn();
    handle = renderComponent<CollectionColorPickerProps>(Host, {
        anchorEl: anchor,
        onClose,
        value: '#112233',
        onCommit,
        allowGradient: true,
        ...props,
    });
    return { onClose, onCommit };
};

const paper = (): HTMLElement => {
    const el = document.body.querySelector<HTMLElement>('.MuiPopover-paper');
    if (!el) {
        throw new Error('the Farbwähler is not open');
    }
    return el;
};

/** The text input of one channel of the input row. */
const field = (channel: Channel): HTMLInputElement => {
    const el = paper().querySelector<HTMLInputElement>(`input[data-channel="${channel}"]`);
    if (!el) {
        throw new Error(`no ${channel} field`);
    }
    return el;
};

/** Visible label of one channel field. */
const labelOf = (channel: Channel): string | null | undefined =>
    field(channel).closest('.MuiFormControl-root')?.querySelector('label')?.textContent;

const pick = (name: keyof typeof FAKE_PICKS): void => {
    act(() => paper().querySelector<HTMLElement>(`button[data-pick="${name}"]`)?.click());
};

const advance = (ms: number): void => {
    act(() => {
        vi.advanceTimersByTime(ms);
    });
};

/** Focuses a field and types text into it, as React sees a user typing (one change per call). */
const type = (channel: Channel, text: string): void => {
    const input = field(channel);
    act(() => {
        input.focus();
    });
    act(() => {
        const setter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')?.set;
        setter?.call(input, text);
        input.dispatchEvent(new Event('input', { bubbles: true }));
    });
};

const press = (target: Element, key: string): void => {
    act(() => {
        target.dispatchEvent(new KeyboardEvent('keydown', { key, bubbles: true }));
    });
};

const blur = (channel: Channel): void => {
    act(() => {
        field(channel).blur();
    });
};

describe('CollectionColorPicker input row', () => {
    it('shows HEX, R, G, B and A of the current colour', () => {
        mount({ value: '#112233' });
        expect(field('hex').value).toBe('#112233');
        expect(field('r').value).toBe('17');
        expect(field('g').value).toBe('34');
        expect(field('b').value).toBe('51');
        expect(field('a').value).toBe('100');
        expect(labelOf('hex')).toBe('HEX');
    });

    it('keeps the raw text while typing and commits nothing yet', () => {
        const { onCommit } = mount({ value: '#112233' });
        type('r', '30');
        expect(field('r').value).toBe('30');
        type('r', '300');
        // No clamping per keystroke.
        expect(field('r').value).toBe('300');
        advance(500);
        expect(onCommit).not.toHaveBeenCalled();
    });

    it('applies on Enter and commits like a pick', () => {
        const { onCommit } = mount({ value: '#112233' });
        type('r', '255');
        press(field('r'), 'Enter');
        expect(field('r').value).toBe('255');
        expect(field('hex').value).toBe('#ff2233');
        advance(150);
        expect(onCommit).toHaveBeenCalledExactlyOnceWith('#ff2233');
    });

    it('applies on blur', () => {
        const { onCommit } = mount({ value: '#112233' });
        type('b', '0');
        blur('b');
        advance(150);
        expect(onCommit).toHaveBeenCalledExactlyOnceWith('#112200');
    });

    it('clamps an out-of-range number when applied', () => {
        const { onCommit } = mount({ value: '#112233' });
        type('g', '300');
        press(field('g'), 'Enter');
        expect(field('g').value).toBe('255');
        advance(150);
        expect(onCommit).toHaveBeenCalledExactlyOnceWith('#11ff33');
    });

    it('keeps "1" as 1 in R and in A', () => {
        const { onCommit } = mount({ value: '#112233' });
        type('r', '1');
        press(field('r'), 'Enter');
        expect(field('r').value).toBe('1');
        type('a', '1');
        press(field('a'), 'Enter');
        expect(field('a').value).toBe('1');
        advance(150);
        // A is percent: 1 % opacity, alpha byte 03.
        expect(onCommit).toHaveBeenLastCalledWith('#01223303');
    });

    it('does not take a cleared field as 0', () => {
        const { onCommit } = mount({ value: '#112233' });
        type('r', '');
        expect(field('r').value).toBe('');
        press(field('r'), 'Enter');
        expect(field('r').value).toBe('17');
        type('hex', '');
        blur('hex');
        expect(field('hex').value).toBe('#112233');
        advance(500);
        expect(onCommit).not.toHaveBeenCalled();
    });

    it('does not apply invalid text and shows the current value again', () => {
        const { onCommit } = mount({ value: '#112233' });
        type('hex', '#12345');
        press(field('hex'), 'Enter');
        expect(field('hex').value).toBe('#112233');
        type('g', 'abc');
        blur('g');
        expect(field('g').value).toBe('34');
        advance(500);
        expect(onCommit).not.toHaveBeenCalled();
    });

    it('applies a typed hex, with or without # and in short form', () => {
        const { onCommit } = mount({ value: '#112233' });
        type('hex', 'ABCDEF');
        press(field('hex'), 'Enter');
        expect(field('r').value).toBe('171');
        type('hex', '#f00');
        press(field('hex'), 'Enter');
        advance(150);
        expect(onCommit).toHaveBeenLastCalledWith('#ff0000');
    });

    it('labels the hex field HEXA only while alpha < 1', () => {
        mount({ value: '#112233' });
        expect(labelOf('hex')).toBe('HEX');
        pick('translucent');
        expect(labelOf('hex')).toBe('HEXA');
        expect(field('hex').value).toBe('#0080ff66');
        expect(field('a').value).toBe('40');
        pick('solid');
        expect(labelOf('hex')).toBe('HEX');
        expect(field('hex').value).toBe('#ff0000');
    });

    it('shows a nearly opaque colour as the hex the Farbwähler stores', () => {
        // Alpha 0.999 rounds to the byte ff: stored as #112233 (Regeln für Farbeingaben), so shown so.
        mount({ value: 'rgba(17, 34, 51, 0.999)' });
        expect(field('hex').value).toBe('#112233');
        expect(labelOf('hex')).toBe('HEX');
    });

    it('leaves the fields empty for a value it cannot read, and a typed hex replaces it', () => {
        const { onCommit } = mount({ value: 'var(--accent)' });
        expect(field('hex').value).toBe('');
        expect(field('r').value).toBe('');
        expect(field('a').value).toBe('');
        // A single channel cannot build a colour on an unreadable one (it would start from black).
        expect(field('r').disabled).toBe(true);
        type('hex', '#336699');
        press(field('hex'), 'Enter');
        advance(150);
        expect(onCommit).toHaveBeenCalledExactlyOnceWith('#336699');
        expect(field('r').value).toBe('51');
        expect(field('r').disabled).toBe(false);
    });

    it('still shows a black value and a colour name it can read', () => {
        mount({ value: 'black' });
        expect(field('hex').value).toBe('#000000');
        expect(field('r').disabled).toBe(false);
        handle?.unmount();
        mount({ value: 'red' });
        expect(field('hex').value).toBe('#ff0000');
    });

    it('takes the alpha from an 8-digit hex and keeps it with a 6-digit one', () => {
        const { onCommit } = mount({ value: '#11223380' });
        expect(field('a').value).toBe('50');
        type('hex', '#445566');
        press(field('hex'), 'Enter');
        expect(field('a').value).toBe('50');
        advance(150);
        expect(onCommit).toHaveBeenLastCalledWith('#44556680');
        type('hex', '#445566ff');
        press(field('hex'), 'Enter');
        expect(labelOf('hex')).toBe('HEX');
        advance(150);
        expect(onCommit).toHaveBeenLastCalledWith('#445566');
    });

    it('edits the selected stop of a gradient', () => {
        const { onCommit } = mount({ value: '#112233' });
        pick('gradient');
        // The fake's gradient selects its red first stop.
        expect(field('r').value).toBe('255');
        expect(field('b').value).toBe('0');
        advance(150);
        onCommit.mockClear();
        type('g', '128');
        press(field('g'), 'Enter');
        advance(150);
        expect(onCommit).toHaveBeenCalledTimes(1);
        const committed = String(onCommit.mock.calls[0][0]);
        const compact = committed.replace(/\s+/g, '');
        expect(compact.startsWith('linear-gradient(90deg,')).toBe(true);
        // The selected (first) stop changed, the second stays blue.
        expect(compact).toContain('RGBA(255,128,0,1)0%');
        expect(compact).toContain('rgba(0,0,255,1)100%');
        expect(lastLibraryProps().value).toBe(committed);
    });
});

describe('CollectionColorPicker input row and Escape', () => {
    it('a first Escape takes back the open edit and keeps the Farbwähler open, a second one closes it', () => {
        const { onClose, onCommit } = mount({ value: '#112233' });
        type('r', '99');
        press(field('r'), 'Escape');
        expect(field('r').value).toBe('17');
        expect(onClose).not.toHaveBeenCalled();
        press(field('r'), 'Escape');
        expect(onClose).toHaveBeenCalledTimes(1);
        advance(500);
        expect(onCommit).not.toHaveBeenCalled();
    });

    it('Escape after an applied edit closes the Farbwähler and flushes the commit', () => {
        const { onClose, onCommit } = mount({ value: '#112233' });
        type('r', '255');
        press(field('r'), 'Enter');
        press(field('r'), 'Escape');
        expect(onCommit).toHaveBeenCalledExactlyOnceWith('#ff2233');
        expect(onClose).toHaveBeenCalledTimes(1);
    });
});

describe('CollectionColorPicker with a gradient the library cannot parse', () => {
    beforeEach(() => {
        // React reports the caught render error on the console.
        vi.spyOn(console, 'error').mockImplementation(() => undefined);
    });

    // CSS reads the first one, the regeln store all three as typed, the library's parser throws on them.
    it.each([
        ['an angle in another unit', 'linear-gradient(0.25turn, red, blue)'],
        ['an angle unit in upper case', 'linear-gradient(90DEG, red, blue)'],
        ['no colour stop', 'linear-gradient(90deg)'],
    ])('opens without a colour on %s, and stores nothing', (_what, value) => {
        const { onCommit } = mount({ value });

        expect(lastLibraryProps().value).toBe('transparent');
        expect(field('a').value).toBe('0');
        advance(1000);
        expect(onCommit).not.toHaveBeenCalled();
    });

    it('reads the next value again', () => {
        mount({ value: 'linear-gradient(90deg)' });

        act(() => {
            handle?.rerender({
                anchorEl: anchor,
                onClose: (): void => undefined,
                onCommit: (): void => undefined,
                allowGradient: true,
                value: 'linear-gradient(90deg, rgba(0, 128, 255, 1) 0%, rgba(0, 0, 255, 1) 100%)',
            });
        });

        expect(field('g').value).toBe('128');
    });

    it('stores a pick made from there', () => {
        const { onCommit } = mount({ value: 'linear-gradient(90deg)' });

        pick('solid');
        advance(150);

        expect(onCommit).toHaveBeenCalledExactlyOnceWith('#ff0000');
    });
});
