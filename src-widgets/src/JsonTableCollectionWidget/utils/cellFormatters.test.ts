import { describe, expect, it } from 'vitest';
import {
    applyConditionalStyle,
    buildCellContent,
    buildImageContent,
    FORMATTERS,
    type CellColumn,
    type FormatterDescriptor,
} from './cellFormatters';
import { dateReader, type DateDetection } from '../dateReader';
import type { ColumnConfigEntry, ColumnFormatConfig } from '../types';

// Minimal helpers — column config only needs format/cellStyle for these tests.
const fmt = (patch: Partial<ColumnFormatConfig>): ColumnFormatConfig => ({ type: 'number', ...patch });
const cfg = (patch: Partial<ColumnConfigEntry>): ColumnConfigEntry => patch as ColumnConfigEntry;
/** A Column whose Effektiver Typ is `date`, read as its detection says. */
const dateColumn = (detected?: DateDetection): CellColumn => ({ type: 'date', readDate: dateReader(detected) });
const stringColumn: CellColumn = { type: 'string', readDate: dateReader() };
/** The format context of a non-date format type (the reader is unused there). */
const ctx = (fmtConfig: ColumnFormatConfig, defaultDisplay: string): Parameters<FormatterDescriptor['format']>[1] => ({
    fmt: fmtConfig,
    defaultDisplay,
    readDate: dateReader(),
});

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
        const r = FORMATTERS.number.format(
            1234.5,
            ctx(fmt({ type: 'number', numberDecimals: 2, numberThousandsSeparator: true }), '1234.5'),
        );
        expect(r.displayValue).toBe('1,234.50');
    });

    it('returns no displayValue for non-numeric input (caller keeps the default)', () => {
        const blank = FORMATTERS.number.format('', ctx(fmt({ type: 'number' }), ''));
        expect(blank.displayValue).toBeUndefined();
        const r = FORMATTERS.number.format('abc', ctx(fmt({ type: 'number' }), 'abc'));
        expect(r.displayValue).toBeUndefined();
    });
});

describe('FORMATTERS.boolean', () => {
    it('uses custom true/false labels', () => {
        const r = FORMATTERS.boolean.format(
            true,
            ctx(fmt({ type: 'boolean', booleanTrue: 'yes', booleanFalse: 'no' }), ''),
        );
        expect(r.displayValue).toBe('yes');
    });
});

describe('FORMATTERS.string', () => {
    it('applies transforms and produces static text styles', () => {
        const r = FORMATTERS.string.format(
            'hello',
            ctx(
                fmt({
                    type: 'string',
                    stringCase: 'upper',
                    stringFontWeight: 'bold',
                    stringFontSize: 14,
                    stringTextColor: '#f00',
                }),
                'hello',
            ),
        );
        expect(r.displayValue).toBe('HELLO');
        expect(r.textSx).toEqual({ fontWeight: 'bold', fontSize: '14px', color: '#f00' });
    });
});

describe('FORMATTERS.image', () => {
    it('builds an image descriptor for a renderable URL', () => {
        const r = FORMATTERS.image.format('https://example.com/a.png', ctx(fmt({ type: 'image' }), ''));
        expect(r.image).toMatchObject({ src: 'https://example.com/a.png' });
        expect(r.displayValue).toBe('');
    });

    it('returns empty displayValue for null', () => {
        const r = FORMATTERS.image.format(null, ctx(fmt({ type: 'image' }), ''));
        expect(r.displayValue).toBe('');
        expect(r.image).toBeUndefined();
    });

    it('falls back to text for a non-renderable value', () => {
        const r = FORMATTERS.image.format('not a url or glyph', ctx(fmt({ type: 'image' }), 'not a url or glyph'));
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
            stringColumn,
        );
        expect(bgSx.backgroundColor).toBe('#eee');
        expect(textSx.fontWeight).toBe('bold');
    });

    it('produces nothing when no rule matches', () => {
        const { bgSx, textSx } = applyConditionalStyle(
            cfg({ cellStyle: [{ ...matchX, fontWeight: 'bold' }] }),
            'y',
            stringColumn,
        );
        expect(bgSx).toEqual({});
        expect(textSx).toEqual({});
    });
});

describe('applyConditionalStyle — follows the Effektiver Typ', () => {
    const onDay = (day: string): ColumnConfigEntry =>
        cfg({ cellStyle: [{ logic: { '==': [{ var: 'value' }, day] }, fontWeight: 'bold' }] });
    const hits = (entry: ColumnConfigEntry, raw: unknown, column: CellColumn): boolean =>
        applyConditionalStyle(entry, raw, column).textSx.fontWeight === 'bold';

    // Regression: the rule compared the UTC day while the cell shows the local day. 00:30
    // misses east of UTC, 23:30 misses west of it — together red in every zone but UTC.
    it('compares a date column at the local day of the value', () => {
        const epochColumn = dateColumn({ type: 'date', dateFormat: 'epoch-ms' });
        const dateCfg = { ...onDay('2024-12-01'), format: { type: 'date' as const } };
        expect(hits(dateCfg, new Date(2024, 11, 1, 0, 30).getTime(), epochColumn)).toBe(true);
        expect(hits(dateCfg, new Date(2024, 11, 1, 23, 30).getTime(), epochColumn)).toBe(true);
        expect(hits(dateCfg, new Date(2024, 11, 2, 0, 30).getTime(), epochColumn)).toBe(false);
    });

    // Regression: a detected date column without format got a date input in the rule
    // builder, but the rule compared the Raw value — "equals" never hit.
    it('compares a detected date column without format at its local day', () => {
        const detected = dateColumn({ type: 'date', dateFormat: 'dd.MM.yyyy' });
        expect(hits(onDay('2024-12-01'), '01.12.2024', detected)).toBe(true);
    });

    it('compares the range operators at the local day', () => {
        const entry = cfg({
            format: { type: 'date' },
            cellStyle: [{ logic: { '<': [{ var: 'value' }, '2024-12-01'] }, fontWeight: 'bold' }],
        });
        const manual = dateColumn();
        expect(hits(entry, '2024-11-30 23:59', manual)).toBe(true);
        expect(hits(entry, '2024-12-01 00:00', manual)).toBe(false);
    });

    it('counts an unreadable value in a date column as empty, as before', () => {
        const isEmpty = cfg({
            format: { type: 'date' },
            cellStyle: [{ logic: { '!': [{ '!!': [{ var: 'value' }] }] }, fontWeight: 'bold' }],
        });
        expect(hits(isEmpty, 'n/a', dateColumn())).toBe(true);
        expect(hits(isEmpty, '2024-12-01 10:00', dateColumn())).toBe(false);
    });

    it.each([
        ['0', 0, { type: 'number', readDate: dateReader() } as CellColumn],
        ['false', false, { type: 'boolean', readDate: dateReader() } as CellColumn],
    ])('does not count the value %s as empty', (_name, value, column) => {
        const isEmpty = cfg({ cellStyle: [{ logic: { '!': [{ '!!': [{ var: 'value' }] }] }, fontWeight: 'bold' }] });
        const isNotEmpty = cfg({ cellStyle: [{ logic: { '!!': [{ var: 'value' }] }, fontWeight: 'bold' }] });
        expect(hits(isEmpty, value, column)).toBe(false);
        expect(hits(isNotEmpty, value, column)).toBe(true);
    });

    it.each([
        ['null', null],
        ['the empty string', ''],
    ])('counts %s as empty', (_name, value) => {
        const isEmpty = cfg({ cellStyle: [{ logic: { '!': [{ '!!': [{ var: 'value' }] }] }, fontWeight: 'bold' }] });
        expect(hits(isEmpty, value, stringColumn)).toBe(true);
    });

    it.each([
        ['<', 5],
        ['<=', 5],
        ['>', -5],
        ['>=', -5],
    ])('keeps an empty cell out of a %s rule', (operator, limit) => {
        const rule = cfg({ cellStyle: [{ logic: { [operator]: [{ var: 'value' }, limit] }, fontWeight: 'bold' }] });
        const numberColumn: CellColumn = { type: 'number', readDate: dateReader() };
        expect(hits(rule, null, numberColumn)).toBe(false);
        expect(hits(rule, '', numberColumn)).toBe(false);
    });

    it.each([
        ['<', -5],
        ['<=', -5],
        ['>', 5],
        ['>=', 5],
    ])('keeps an empty cell out of a %s rule with the cell on the right', (operator, limit) => {
        const rule = cfg({ cellStyle: [{ logic: { [operator]: [limit, { var: 'value' }] }, fontWeight: 'bold' }] });
        const numberColumn: CellColumn = { type: 'number', readDate: dateReader() };
        expect(hits(rule, null, numberColumn)).toBe(false);
        expect(hits(rule, '', numberColumn)).toBe(false);
    });

    it('reads a comparison with three arguments as "between"', () => {
        const between = cfg({ cellStyle: [{ logic: { '<=': [1, { var: 'value' }, 10] }, fontWeight: 'bold' }] });
        const numberColumn: CellColumn = { type: 'number', readDate: dateReader() };
        expect(hits(between, 5, numberColumn)).toBe(true);
        expect(hits(between, 50, numberColumn)).toBe(false);
        expect(hits(between, 0, numberColumn)).toBe(false);
        expect(hits(between, null, numberColumn)).toBe(false);
    });

    it('keeps a value that is no date out of a date comparison', () => {
        const before = cfg({
            format: { type: 'date' },
            cellStyle: [{ logic: { '<': [{ var: 'value' }, '2024-12-01'] }, fontWeight: 'bold' }],
        });
        expect(hits(before, 'n/a', dateColumn())).toBe(false);
    });

    it('still compares a value of 0', () => {
        const below = cfg({ cellStyle: [{ logic: { '<': [{ var: 'value' }, 5] }, fontWeight: 'bold' }] });
        expect(hits(below, 0, { type: 'number', readDate: dateReader() })).toBe(true);
    });

    it('compares every other type on the Raw value', () => {
        expect(hits(onDay('2024-12-01'), '2024-12-01T10:00:00Z', stringColumn)).toBe(false);
        const above = cfg({ cellStyle: [{ logic: { '>': [{ var: 'value' }, 5] }, fontWeight: 'bold' }] });
        expect(hits(above, 7, { type: 'number', readDate: dateReader() })).toBe(true);
    });
});

describe('FORMATTERS.date', () => {
    it("formats through the Column's Datums-Leser", () => {
        const ms = new Date(2024, 11, 1, 10, 30).getTime();
        const r = FORMATTERS.date.format(String(ms / 1000), {
            fmt: { type: 'date', dateFormat: 'dd.MM.yyyy HH:mm' },
            defaultDisplay: String(ms / 1000),
            readDate: dateReader(),
        });
        expect(r.displayValue).toBe('01.12.2024 10:30');
    });

    it('shows an unreadable value as its Raw value', () => {
        const r = FORMATTERS.date.format('1.12.2024', {
            fmt: { type: 'date' },
            defaultDisplay: '1.12.2024',
            readDate: dateReader(),
        });
        expect(r.displayValue).toBe('1.12.2024');
    });
});

describe('buildCellContent — date column', () => {
    it('formats and styles through the same Column reading', () => {
        const c = buildCellContent(
            '01.12.2024',
            cfg({
                format: { type: 'date', dateFormat: 'yyyy/MM/dd' },
                cellStyle: [{ logic: { '==': [{ var: 'value' }, '2024-12-01'] }, backgroundColor: '#eee' }],
            }),
            dateColumn({ type: 'date', dateFormat: 'dd.MM.yyyy' }),
        );
        expect(c.displayValue).toBe('2024/12/01');
        expect(c.bgSx.backgroundColor).toBe('#eee');
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
