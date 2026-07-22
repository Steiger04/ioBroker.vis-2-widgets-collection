import { describe, expect, it } from 'vitest';
import { applyConditionalStyle, buildCellContent, buildImageContent, FORMATTERS } from './cellFormatters';
import type { ColumnConfigEntry, ColumnFormatConfig } from '../types';

// Minimal helpers — column config only needs format/cellStyle for these tests.
const fmt = (patch: Partial<ColumnFormatConfig>): ColumnFormatConfig => ({ type: 'number', ...patch });
const cfg = (patch: Partial<ColumnConfigEntry>): ColumnConfigEntry => patch as ColumnConfigEntry;

describe('buildImageContent', () => {
    it('applies defaults for unset image options', () => {
        const d = buildImageContent('src', fmt({ type: 'image' }));
        expect(d.src).toBe('src');
        expect(d.size).toBe(64);
        expect(d.objectFit).toBe('contain');
        expect(d.variant).toBe('square');
        expect(d.bgColor).toBeUndefined();
        expect(d.borderColor).toBeUndefined();
        expect(d.tooltip).toBe('src');
        expect(d.showBroken).toBe(true);
    });

    it('maps configured image options through', () => {
        const d = buildImageContent(
            's',
            fmt({ type: 'image', imageSize: 32, imageVariant: 'circular', imageTint: '#f00', imageTooltip: false }),
        );
        expect(d.size).toBe(32);
        expect(d.variant).toBe('circular');
        expect(d.tint).toBe('#f00');
        expect(d.tooltip).toBeUndefined();
    });
});

describe('FORMATTERS.number', () => {
    it('formats a numeric value', () => {
        const r = FORMATTERS.number.format(1234.5, {
            fmt: fmt({ type: 'number', numberDecimals: 2, numberThousandsSeparator: true }),
            defaultDisplay: '1234.5',
        });
        expect(r.displayValue).toBe('1,234.50');
    });

    it('returns no displayValue for non-numeric input (caller keeps the default)', () => {
        const r = FORMATTERS.number.format('abc', { fmt: fmt({ type: 'number' }), defaultDisplay: 'abc' });
        expect(r.displayValue).toBeUndefined();
    });
});

describe('FORMATTERS.boolean', () => {
    it('uses custom true/false labels', () => {
        const r = FORMATTERS.boolean.format(true, {
            fmt: fmt({ type: 'boolean', booleanTrue: 'yes', booleanFalse: 'no' }),
            defaultDisplay: '',
        });
        expect(r.displayValue).toBe('yes');
    });
});

describe('FORMATTERS.string', () => {
    it('applies transforms and produces static text styles', () => {
        const r = FORMATTERS.string.format('hello', {
            fmt: fmt({
                type: 'string',
                stringCase: 'upper',
                stringFontWeight: 'bold',
                stringFontSize: 14,
                stringTextColor: '#f00',
            }),
            defaultDisplay: 'hello',
        });
        expect(r.displayValue).toBe('HELLO');
        expect(r.textSx).toEqual({ fontWeight: 'bold', fontSize: '14px', color: '#f00' });
    });
});

describe('FORMATTERS.image', () => {
    it('builds an image descriptor for a renderable URL', () => {
        const r = FORMATTERS.image.format('https://example.com/a.png', {
            fmt: fmt({ type: 'image' }),
            defaultDisplay: '',
        });
        expect(r.image).toMatchObject({ src: 'https://example.com/a.png' });
        expect(r.displayValue).toBe('');
    });

    it('returns empty displayValue for null', () => {
        const r = FORMATTERS.image.format(null, { fmt: fmt({ type: 'image' }), defaultDisplay: '' });
        expect(r.displayValue).toBe('');
        expect(r.image).toBeUndefined();
    });

    it('falls back to text for a non-renderable value', () => {
        const r = FORMATTERS.image.format('not a url or glyph', {
            fmt: fmt({ type: 'image' }),
            defaultDisplay: 'not a url or glyph',
        });
        expect(r.image).toBeUndefined();
        expect(r.displayValue).toBeUndefined();
    });
});

describe('applyConditionalStyle', () => {
    const matchX = { logic: { '==': [{ var: 'value' }, 'x'] } };

    it('applies a matching rule', () => {
        const { bgSx, textSx } = applyConditionalStyle(
            cfg({ cellStyle: [{ ...matchX, backgroundColor: '#eee', fontWeight: 'bold' }] }),
            'x',
        );
        expect(bgSx.backgroundColor).toBe('#eee');
        expect(textSx.fontWeight).toBe('bold');
    });

    it('produces nothing when no rule matches', () => {
        const { bgSx, textSx } = applyConditionalStyle(cfg({ cellStyle: [{ ...matchX, fontWeight: 'bold' }] }), 'y');
        expect(bgSx).toEqual({});
        expect(textSx).toEqual({});
    });
});

describe('buildCellContent — conditional overrides static', () => {
    const matchX = { logic: { '==': [{ var: 'value' }, 'x'] } };

    it('static string style applies when no conditional rule matches', () => {
        const c = buildCellContent('x', cfg({ format: { type: 'string', stringFontWeight: 'bold' } }));
        expect(c.textSx.fontWeight).toBe('bold');
    });

    it('conditional rule overrides the static string style', () => {
        const c = buildCellContent(
            'x',
            cfg({
                format: { type: 'string', stringFontWeight: 'bold' },
                cellStyle: [{ ...matchX, fontWeight: 'normal' }],
            }),
        );
        expect(c.textSx.fontWeight).toBe('normal');
    });
});

describe('buildCellContent — shape', () => {
    it('returns unstyled default display when no config is given', () => {
        const c = buildCellContent('hi');
        expect(c.displayValue).toBe('hi');
        expect(c.textSx).toEqual({});
        expect(c.bgSx).toEqual({});
        expect(c.image).toBeUndefined();
    });

    it('flags object values as truncated and JSON-stringifies them', () => {
        const c = buildCellContent({ a: 1 }, cfg({ format: { type: 'string' } }));
        expect(c.isTruncated).toBe(true);
        expect(c.displayValue).toBe(JSON.stringify({ a: 1 }));
    });
});
