/**
 * The colour rows of the JsonTable column editors show the inherited colour.
 *
 * @module JsonTableCollectionWidget/components/editors/inheritedColorRows.test
 * @remarks
 * Six label rows (`ColorPickerField`) across three editors: conditional background and text,
 * image background, border and tint, string text colour. Without a value each swatch shows
 * what the table paints then — the cell's text colour (vis-2 widget CSS `color`, else the
 * Collection theme's `text.primary`), for a conditional text first the string format's text
 * colour, and `transparent` (the checkerboard) where the table paints nothing. The stored
 * value stays empty until a colour is picked; the reset writes `undefined` (inherit again).
 */
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

// happy-dom has no canvas: the picker library is replaced by the shared fake.
vi.mock(
    'react-best-gradient-color-picker',
    async () => (await import('../../../components/colorPicker/testing/fakeColorPickerLibrary')).fakeColorPickerLibrary,
);

import { createTheme } from '@mui/material';
import { act, type ComponentProps } from 'react';
import type React from 'react';

import { renderComponent, type RenderComponentHandle } from '../../../lib/testing/testHarness';
import { resetFakeLibrary } from '../../../components/colorPicker/testing/fakeColorPickerLibrary';
import type { CellColorInheritance } from '../../utils/cellColors';
import ConditionalStyleEditor from './ConditionalStyleEditor';
import ImageFormatEditor from './ImageFormatEditor';
import StringFormatEditor from './StringFormatEditor';

/** The Collection theme's text colour — what an untouched cell paints. */
const THEME_TEXT = '#102030';
/** A vis-2 widget CSS `color` — wins over the theme text. */
const STYLE_TEXT = '#a0b0c0';
/** A string format's text colour — the base a conditional text colour overrides. */
const STRING_TEXT = '#00aa00';

const theme = createTheme({ palette: { text: { primary: THEME_TEXT } } });
const plain: CellColorInheritance = { theme, styleColor: undefined };
const styled: CellColorInheritance = { theme, styleColor: { color: STYLE_TEXT } };

let unmount: (() => void) | null = null;

beforeEach(() => {
    resetFakeLibrary();
});

afterEach(() => {
    unmount?.();
    unmount = null;
});

/** Mounts a component; returns its container. */
function mount<P extends object>(type: React.FC<P>, props: P): HTMLElement {
    const handle: RenderComponentHandle<P> = renderComponent<P>(type, props);
    unmount = handle.unmount;
    return handle.container;
}

/** The label row whose label is the translation key `label` (the Generic.t stub returns keys). */
function row(container: HTMLElement, label: string): HTMLElement {
    const labelEl = Array.from(container.querySelectorAll('p, span')).find(el => el.textContent === label);
    if (!labelEl?.parentElement) {
        throw new Error(`no colour row "${label}"`);
    }
    return labelEl.parentElement;
}

/** The colour the row's swatch shows. */
function swatch(container: HTMLElement, label: string): string | null {
    return row(container, label).querySelector('[data-swatch-color]')?.getAttribute('data-swatch-color') ?? null;
}

/** Clicks the row's reset (trash can) button. */
function reset(container: HTMLElement, label: string): void {
    const button = row(container, label).querySelector('button');
    if (!button) {
        throw new Error(`no reset button in "${label}"`);
    }
    act(() => {
        button.click();
    });
}

type StringProps = ComponentProps<typeof StringFormatEditor>;
type ConditionalProps = ComponentProps<typeof ConditionalStyleEditor>;
type ImageProps = ComponentProps<typeof ImageFormatEditor>;

describe('StringFormatEditor text colour row', () => {
    const LABEL = 'json_table_string_text_color';

    it('shows the theme text colour without a value', () => {
        const c = mount<StringProps>(StringFormatEditor, {
            format: { type: 'string' },
            onChange: vi.fn(),
            inheritance: plain,
        });
        expect(swatch(c, LABEL)).toBe(THEME_TEXT);
    });

    it('shows the vis-2 widget CSS colour over the theme text', () => {
        const c = mount<StringProps>(StringFormatEditor, {
            format: { type: 'string' },
            onChange: vi.fn(),
            inheritance: styled,
        });
        expect(swatch(c, LABEL)).toBe(STYLE_TEXT);
    });

    it('shows a stored colour and resets it to inherit (undefined)', () => {
        const onChange = vi.fn();
        const c = mount<StringProps>(StringFormatEditor, {
            format: { type: 'string', stringTextColor: '#ff0000' },
            onChange,
            inheritance: styled,
        });
        expect(swatch(c, LABEL)).toBe('#ff0000');
        reset(c, LABEL);
        expect(onChange).toHaveBeenCalledWith({ type: 'string', stringTextColor: undefined });
    });

    it('writes nothing while only showing the inherited colour', () => {
        const onChange = vi.fn();
        mount<StringProps>(StringFormatEditor, { format: { type: 'string' }, onChange, inheritance: plain });
        expect(onChange).not.toHaveBeenCalled();
    });
});

describe('ConditionalStyleEditor colour rows', () => {
    const BG = 'json_table_bg_color';
    const TEXT = 'json_table_text_color';
    const emptyRule = { id: 'r1', backgroundColor: '', textColor: '' };

    const base = (props: Partial<ConditionalProps>): ConditionalProps => ({
        cellStyle: [emptyRule],
        cellStyleMode: 'first-match',
        columnType: 'string',
        onStyleChange: vi.fn(),
        onModeChange: vi.fn(),
        format: undefined,
        inheritance: plain,
        ...props,
    });

    it('shows transparent for the background and the theme text colour for the text', () => {
        const c = mount<ConditionalProps>(ConditionalStyleEditor, base({}));
        expect(swatch(c, BG)).toBe('transparent');
        expect(swatch(c, TEXT)).toBe(THEME_TEXT);
    });

    it('shows the vis-2 widget CSS colour for the text', () => {
        const c = mount<ConditionalProps>(ConditionalStyleEditor, base({ inheritance: styled }));
        expect(swatch(c, TEXT)).toBe(STYLE_TEXT);
    });

    it("shows the string format's text colour first", () => {
        const c = mount<ConditionalProps>(
            ConditionalStyleEditor,
            base({ inheritance: styled, format: { type: 'string', stringTextColor: STRING_TEXT } }),
        );
        expect(swatch(c, TEXT)).toBe(STRING_TEXT);
    });

    it('ignores a string text colour the format type does not paint', () => {
        const c = mount<ConditionalProps>(
            ConditionalStyleEditor,
            base({ inheritance: styled, format: { type: 'number', stringTextColor: STRING_TEXT } }),
        );
        expect(swatch(c, TEXT)).toBe(STYLE_TEXT);
    });

    it('shows stored colours and resets them to inherit (undefined)', () => {
        const onStyleChange = vi.fn();
        const rule = { id: 'r1', backgroundColor: '#111111', textColor: '#222222' };
        const c = mount<ConditionalProps>(ConditionalStyleEditor, base({ cellStyle: [rule], onStyleChange }));
        expect(swatch(c, BG)).toBe('#111111');
        expect(swatch(c, TEXT)).toBe('#222222');
        reset(c, TEXT);
        expect(onStyleChange).toHaveBeenLastCalledWith([{ ...rule, textColor: undefined }]);
    });
});

describe('ImageFormatEditor colour rows', () => {
    const ROWS = ['json_table_image_bg_color', 'json_table_image_border_color', 'json_table_image_tint'];

    it('shows transparent (the checkerboard) for background, border and tint without a value', () => {
        const c = mount<ImageProps>(ImageFormatEditor, { format: { type: 'image' }, onChange: vi.fn() });
        for (const label of ROWS) {
            expect(swatch(c, label)).toBe('transparent');
        }
    });

    it('shows stored colours and resets the tint to inherit (undefined)', () => {
        const onChange = vi.fn();
        const c = mount<ImageProps>(ImageFormatEditor, {
            format: { type: 'image', imageBgColor: '#010101', imageBorderColor: '#020202', imageTint: '#030303' },
            onChange,
        });
        expect(ROWS.map(label => swatch(c, label))).toEqual(['#010101', '#020202', '#030303']);
        reset(c, 'json_table_image_tint');
        expect(onChange).toHaveBeenCalledWith({ type: 'image', imageTint: undefined });
    });
});
