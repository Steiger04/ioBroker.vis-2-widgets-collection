import { describe, expect, it, vi } from 'vitest';

import type { Theme } from '@mui/material/styles';

import { resolveEffectiveColor } from '../lib/helper/resolveEffectiveColor';
import { jsonTableColorContracts } from '../lib/jsonTableColorContracts';
import type { ExtendedField } from '../types/field-definitions/extended-field';
import { buildTableChrome } from './chrome';
import type { TableChromeSettings } from './chrome';

// The field list renders CollectionDivider / CollectionGradientColorPicker / the column
// editor, which pull Generic (extends window.visRxWidget, absent outside vis-2). The
// parity test reads only the field data.
vi.mock('../components/CollectionGradientColorPicker', () => ({ default: () => null }));
vi.mock('../components/CollectionDivider', () => ({ default: () => null }));
vi.mock('./JsonTableColumnEditor', () => ({ default: () => null }));

import jsonTableFields from '../lib/jsonTableFields';

const DIVIDER = 'rgba(0, 0, 0, 0.12)';
const PAPER = '#fafafa';

/** Minimal theme: the chrome reads the shadow ladder and the contract terminals (divider, paper, text). */
const theme = {
    shadows: Array.from({ length: 25 }, (_, i) => (i === 0 ? 'none' : `shadow-${i}`)),
    palette: { divider: DIVIDER, background: { paper: PAPER }, text: { primary: '#2f3e51' } },
} as unknown as Theme;

const chrome = (settings: TableChromeSettings = {}): ReturnType<typeof buildTableChrome> =>
    buildTableChrome(settings, theme);

describe('buildTableChrome — density heights', () => {
    it.each([
        // density, row height, header height
        [undefined, 52, 56],
        ['compact', 36, 36],
        ['standard', 52, 56],
        ['comfortable', 68, 68],
    ] as const)('density %s → rows %i px, header %i px', (tableDensity, rowHeight, headerHeight) => {
        const resolved = chrome({ tableDensity });

        expect(resolved.rowHeight).toBe(rowHeight);
        expect(resolved.headerCellSx.height).toBe(headerHeight);
    });

    it('lets explicit heights override the density, a 0 or unreadable value falling back to it', () => {
        const explicit = chrome({ tableDensity: 'compact', tableRowHeight: 44, tableHeaderHeight: 60 });
        expect(explicit.rowHeight).toBe(44);
        expect(explicit.headerCellSx.height).toBe(60);

        // vis-2 may hand numbers over as strings
        expect(chrome({ tableRowHeight: '30' as unknown as number }).rowHeight).toBe(30);

        const zero = chrome({ tableDensity: 'comfortable', tableRowHeight: 0, tableHeaderHeight: 0 });
        expect(zero.rowHeight).toBe(68);
        expect(zero.headerCellSx.height).toBe(68);
    });

    it('treats an unknown density like standard', () => {
        const resolved = chrome({ tableDensity: 'roomy' as unknown as 'standard' });

        expect(resolved.rowHeight).toBe(52);
        expect(resolved.headerCellSx.height).toBe(56);
        expect(resolved.tableSize).toBe('medium');
    });

    it('draws the MUI table small only in the compact density', () => {
        expect(chrome({ tableDensity: 'compact' }).tableSize).toBe('small');
        expect(chrome({ tableDensity: 'standard' }).tableSize).toBe('medium');
        expect(chrome({ tableDensity: 'comfortable' }).tableSize).toBe('medium');
        expect(chrome().tableSize).toBe('medium');
    });
});

describe('buildTableChrome — header bar', () => {
    it('sticks to the top as an elevated card in the theme paper by default (terminal paper, elevation 6)', () => {
        const bar = chrome().headerBarSx;

        expect(bar.position).toBe('sticky');
        expect(bar.top).toBe(0);
        expect(bar.zIndex).toBe(2);
        expect(bar.backgroundColor).toBe(PAPER);
        expect(bar.boxShadow).toBe('shadow-6');
        // the resize handles only show while the bar is hovered
        expect(bar['& .resize-handle']).toEqual({ opacity: 0 });
        expect(bar['&:hover .resize-handle']).toEqual({ opacity: 1 });
    });

    it.each([
        [0, 'none'],
        [3, 'shadow-3'],
        [24, 'shadow-24'],
    ])('elevation %i → shadow %s', (tableHeaderElevation, boxShadow) => {
        expect(chrome({ tableHeaderElevation }).headerBarSx.boxShadow).toBe(boxShadow);
    });

    it('drops card surface and shadow with noCard, whatever the elevation', () => {
        const bar = chrome({ noCard: true, tableHeaderElevation: 12 }).headerBarSx;

        expect(bar.backgroundColor).toBe('transparent');
        expect(bar.boxShadow).toBe('none');
    });

    it('follows the RAW noCard, not noCard || usedInWidget: inside another widget the sticky bar keeps paper and shadow', () => {
        // Widget-im-Widget: Generic unwraps the card (wrappedContent false), but the widget
        // data the renderer hands the chrome still says noCard false — the bar stays opaque,
        // so the rows never scroll visibly underneath it.
        const widget = { usedInWidget: true, data: { noCard: false } satisfies TableChromeSettings };
        const bar = chrome(widget.data).headerBarSx;

        expect(bar.backgroundColor).toBe(PAPER);
        expect(bar.boxShadow).toBe('shadow-6');
    });

    it('paints a stored header colour the picker rejects raw, as before the spec — in the card and with noCard', () => {
        // Legacy values (red, var(), transparent, a hex padded with spaces) never crashed,
        // so their rendering stays identical: the explicit value goes into the CSS as stored.
        for (const tableHeaderBgColor of ['red', 'var(--x)', 'transparent', ' #123456 ']) {
            expect(chrome({ tableHeaderBgColor }).headerBarSx).toMatchObject({
                backgroundColor: tableHeaderBgColor,
                boxShadow: 'shadow-6',
            });
            expect(chrome({ tableHeaderBgColor }).headerBarSx.background).toBeUndefined();
            expect(chrome({ noCard: true, tableHeaderBgColor }).headerBarSx).toMatchObject({
                backgroundColor: tableHeaderBgColor,
                boxShadow: 'none',
            });
        }
    });

    it('paints a solid header colour as backgroundColor, a gradient as background over the card', () => {
        const solid = chrome({ tableHeaderBgColor: '#123456' }).headerBarSx;
        expect(solid.backgroundColor).toBe('#123456');
        expect(solid.background).toBeUndefined();

        const gradient = 'linear-gradient(90deg, #ff0000 0%, #0000ff 100%)';
        const graded = chrome({ tableHeaderBgColor: gradient }).headerBarSx;
        expect(graded.background).toBe(gradient);
        expect(graded.backgroundColor).toBe(PAPER);

        // noCard keeps its transparent base under the colour
        expect(chrome({ noCard: true, tableHeaderBgColor: gradient }).headerBarSx.backgroundColor).toBe('transparent');
        expect(chrome({ noCard: true, tableHeaderBgColor: '#123456' }).headerBarSx.backgroundColor).toBe('#123456');
    });

    it('draws the bottom line as ::after only for a width above 0', () => {
        expect(chrome().headerBarSx['&::after']).toBeUndefined();
        expect(chrome({ headerBorderWidth: 0, headerBorderColor: '#ff0000' }).headerBarSx['&::after']).toBeUndefined();

        expect(chrome({ headerBorderWidth: 2, headerBorderColor: '#ff0000' }).headerBarSx['&::after']).toEqual({
            content: '""',
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: '2px',
            backgroundColor: '#ff0000',
            pointerEvents: 'none',
        });
    });

    it('colours the bottom line with the gradient middle, else the theme divider', () => {
        const line = (headerBorderColor: string | undefined): Record<string, unknown> =>
            chrome({ headerBorderWidth: 1, headerBorderColor }).headerBarSx['&::after'] as Record<string, unknown>;

        expect(line('linear-gradient(90deg, #ff0000 0%, #0000ff 100%)').backgroundColor).toBe('rgb(128, 0, 128)');
        expect(line(undefined).backgroundColor).toBe(DIVIDER);
    });
});

describe('buildTableChrome — header cell and text', () => {
    it('keeps the theme typography without a configured text colour or size', () => {
        const resolved = chrome();

        expect(resolved.headerCellSx).toEqual({ height: 56, padding: 0, whiteSpace: 'nowrap' });
        expect(resolved.headerTextSx).toEqual({});
    });

    it('applies text colour and size to the cell and to the text inside it', () => {
        const resolved = chrome({ tableHeaderTextColor: '#ff0000', tableHeaderFontSize: 14 });

        expect(resolved.headerCellSx).toEqual({
            height: 56,
            padding: 0,
            whiteSpace: 'nowrap',
            color: '#ff0000',
            fontSize: '14px',
        });
        expect(resolved.headerTextSx).toEqual({ color: '#ff0000', fontSize: '14px' });
    });

    it('ignores a font size of 0', () => {
        expect(chrome({ tableHeaderFontSize: 0 }).headerTextSx).toEqual({});
    });

    it('inherits the header text colour when unset: no color at runtime, the contract only drives the swatch', () => {
        const resolved = chrome({ tableHeaderFontSize: 14 });

        expect(resolved.headerCellSx).not.toHaveProperty('color');
        expect(resolved.headerTextSx).not.toHaveProperty('color');
    });
});

describe('buildTableChrome — table layout and borders', () => {
    const cells = (sx: Record<string, unknown>): unknown => sx['& .MuiTableCell-root'];
    const innerCells = (sx: Record<string, unknown>): unknown => sx['& .MuiTableCell-root:not(:last-child)'];

    it('lays the table out fixed, auto only with auto-size', () => {
        expect(chrome().tableSx.tableLayout).toBe('fixed');
        expect(chrome({ tableAutoSize: false }).tableSx.tableLayout).toBe('fixed');
        expect(chrome({ tableAutoSize: true }).tableSx.tableLayout).toBe('auto');
        expect(chrome().tableSx.width).toBe('100%');
    });

    it('draws 1 px row borders in the theme divider by default, and no cell borders', () => {
        const sx = chrome().tableSx;

        expect(cells(sx)).toEqual({ borderBottom: '1px solid', borderBottomColor: DIVIDER });
        expect(innerCells(sx)).toBeUndefined();
    });

    it('takes the row border width and colour, a gradient as its middle colour', () => {
        expect(cells(chrome({ horizontalCellBorderWidth: 3, horizontalCellBorderColor: '#00ff00' }).tableSx)).toEqual({
            borderBottom: '3px solid',
            borderBottomColor: '#00ff00',
        });
        expect(
            cells(chrome({ horizontalCellBorderColor: 'linear-gradient(90deg, #ff0000 0%, #0000ff 100%)' }).tableSx),
        ).toEqual({ borderBottom: '1px solid', borderBottomColor: 'rgb(128, 0, 128)' });
        // an unreadable colour falls back to the divider
        expect(cells(chrome({ horizontalCellBorderColor: 'nonsense' }).tableSx)).toEqual({
            borderBottom: '1px solid',
            borderBottomColor: DIVIDER,
        });
    });

    it('removes the row borders when switched off', () => {
        expect(cells(chrome({ tableShowRowBorders: false, horizontalCellBorderWidth: 3 }).tableSx)).toEqual({
            borderBottom: 'none',
        });
    });

    it('draws cell borders between the cells (not after the last) only when switched on', () => {
        expect(innerCells(chrome({ tableShowCellBorders: true }).tableSx)).toEqual({
            borderRight: '1px solid',
            borderRightColor: DIVIDER,
        });
        expect(
            innerCells(
                chrome({ tableShowCellBorders: true, verticalCellBorderWidth: 2, verticalCellBorderColor: '#0000ff' })
                    .tableSx,
            ),
        ).toEqual({ borderRight: '2px solid', borderRightColor: '#0000ff' });
        expect(innerCells(chrome({ tableShowCellBorders: false, verticalCellBorderWidth: 2 }).tableSx)).toBeUndefined();
    });
});

describe('buildTableChrome — the four lines resolve their divider contract as a solid colour', () => {
    const gradient = 'linear-gradient(90deg, #ff0000 0%, #0000ff 100%)';
    type Line = (color: string | undefined) => unknown;
    const lines: [string, Line][] = [
        ['borderColor', color => chrome({ borderWidth: 1, borderColor: color }).frameSx.borderColor],
        [
            'headerBorderColor',
            color =>
                (
                    chrome({ headerBorderWidth: 1, headerBorderColor: color }).headerBarSx['&::after'] as Record<
                        string,
                        unknown
                    >
                ).backgroundColor,
        ],
        [
            'verticalCellBorderColor',
            color =>
                (
                    chrome({ tableShowCellBorders: true, verticalCellBorderColor: color }).tableSx[
                        '& .MuiTableCell-root:not(:last-child)'
                    ] as Record<string, unknown>
                ).borderRightColor,
        ],
        [
            'horizontalCellBorderColor',
            color =>
                (
                    chrome({ horizontalCellBorderColor: color }).tableSx['& .MuiTableCell-root'] as Record<
                        string,
                        unknown
                    >
                ).borderBottomColor,
        ],
    ];

    it.each(lines)('%s without a value → the theme palette.divider', (_, line) => {
        expect(line(undefined)).toBe(DIVIDER);
        expect(line('')).toBe(DIVIDER);
    });

    it.each(lines)('%s with a gradient → its middle colour', (_, line) => {
        expect(line(gradient)).toBe('rgb(128, 0, 128)');
    });

    it.each(lines)('%s with an unreadable colour (red, var(), nonsense) → the divider', (_, line) => {
        for (const color of ['red', 'var(--x)', 'nonsense', 'linear-gradient(red, blue)']) {
            expect(line(color)).toBe(DIVIDER);
        }
    });

    it.each(lines)('%s with a hex or rgb colour → the colour itself', (_, line) => {
        expect(line('#00ff00')).toBe('#00ff00');
        expect(line('rgba(1, 2, 3, 0.5)')).toBe('rgba(1, 2, 3, 0.5)');
    });
});

describe('buildTableChrome — outer frame and padding', () => {
    it('frames nothing by default: a clipping flex column without border', () => {
        expect(chrome().frameSx).toEqual({ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' });
        expect(chrome({ borderWidth: 0, borderColor: '#ff0000' }).frameSx.border).toBeUndefined();
    });

    it('draws the frame in the configured width, style and colour, the divider without colour', () => {
        const solid = chrome({ borderWidth: 2 }).frameSx;
        expect(solid.border).toBe('2px solid');
        expect(solid.borderColor).toBe(DIVIDER);

        const dashed = chrome({ borderWidth: 3, borderStyle: 'dashed', borderColor: '#00ff00' }).frameSx;
        expect(dashed.border).toBe('3px dashed');
        expect(dashed.borderColor).toBe('#00ff00');
    });

    it('rounds the frame even without a border', () => {
        expect(chrome({ borderRadius: '8px' }).frameSx.borderRadius).toBe('8px');
        expect(chrome().frameSx.borderRadius).toBeUndefined();
    });

    it('scrolls the table inside the frame', () => {
        expect(chrome().scrollSx).toEqual({ flex: 1, overflow: 'auto' });
    });

    it('pads the whole widget body by jsonTablePadding (MUI spacing units), 0 when unset', () => {
        expect(chrome().bodySx).toEqual({
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            p: 0,
        });
        expect(chrome({ jsonTablePadding: 2 }).bodySx.p).toBe(2);
        expect(chrome({ jsonTablePadding: '3' as unknown as number }).bodySx.p).toBe(3);
    });
});

describe('buildTableChrome — body rows and cells', () => {
    const gradient = 'linear-gradient(90deg, #ff0000 0%, #0000ff 100%)';

    it('sizes every row and cell to the row height, cells unpadded and clipped', () => {
        const resolved = chrome({ tableDensity: 'compact' });

        expect(resolved.rowSx(0)).toEqual({ height: 36 });
        expect(resolved.cellSx).toEqual({
            overflow: 'hidden',
            height: 36,
            maxHeight: 36,
            padding: 0,
            verticalAlign: 'middle',
        });
    });

    it('stripes even rows (0, 2, …) and odd rows (1, 3, …) with their own colour', () => {
        const resolved = chrome({ evenRowColor: '#eeeeee', oddRowColor: '#dddddd' });

        expect(resolved.rowSx(0)).toEqual({ height: 52, backgroundColor: '#eeeeee' });
        expect(resolved.rowSx(1)).toEqual({ height: 52, backgroundColor: '#dddddd' });
        expect(resolved.rowSx(2)).toEqual({ height: 52, backgroundColor: '#eeeeee' });
        expect(resolved.rowSx(7)).toEqual({ height: 52, backgroundColor: '#dddddd' });
    });

    it('paints a gradient row colour as background, for even and odd rows alike', () => {
        expect(chrome({ evenRowColor: gradient }).rowSx(0)).toEqual({ height: 52, background: gradient });
        expect(chrome({ oddRowColor: gradient }).rowSx(1)).toEqual({ height: 52, background: gradient });
    });

    it('leaves a row without its colour transparent', () => {
        const evenOnly = chrome({ evenRowColor: '#eeeeee' });

        expect(evenOnly.rowSx(1)).toEqual({ height: 52 });
        expect(chrome({ oddRowColor: '#dddddd' }).rowSx(0)).toEqual({ height: 52 });
        expect(chrome({ evenRowColor: '' }).rowSx(0)).toEqual({ height: 52 });
    });
});

describe('table colour fields — each declares the contract the chrome resolves (ADR-0004)', () => {
    const fieldOf = (name: string): ExtendedField =>
        jsonTableFields().find(candidate => (candidate as { name?: string }).name === name) as ExtendedField;

    it.each([
        // field, terminal, inheritTextStyle, noGradient (as the field set it before the contract)
        ['borderColor', 'divider', undefined, true],
        ['headerBorderColor', 'divider', undefined, true],
        ['verticalCellBorderColor', 'divider', undefined, true],
        ['horizontalCellBorderColor', 'divider', undefined, true],
        ['tableHeaderBgColor', 'paper', undefined, undefined],
        ['tableHeaderTextColor', 'text', true, true],
    ] as const)(
        '%s spreads exactly its contract: terminal %s, no fallback field',
        (name, terminal, inherit, noGradient) => {
            const field = fieldOf(name);
            const contract = jsonTableColorContracts[name];

            expect(contract).toEqual({
                name,
                fallbackFields: [],
                terminal,
                ...(inherit !== undefined && { inheritTextStyle: inherit }),
            });
            expect({
                name: field.name,
                fallbackFields: field.fallbackFields,
                terminal: field.terminal,
                inheritTextStyle: field.inheritTextStyle,
            }).toEqual(contract);
            expect(field.noGradient).toBe(noGradient);
        },
    );

    it('without a value, the swatches show the terminals: divider for the lines, paper for the header bar', () => {
        for (const name of [
            'borderColor',
            'headerBorderColor',
            'verticalCellBorderColor',
            'horizontalCellBorderColor',
        ]) {
            expect(resolveEffectiveColor(fieldOf(name), { textColor: '#00aa00' }, theme, { color: '#0000aa' })).toBe(
                DIVIDER,
            );
        }
        expect(resolveEffectiveColor(fieldOf('tableHeaderBgColor'), {}, theme, { color: '#0000aa' })).toBe(PAPER);
    });

    it('without a value, the header text swatch shows the vis-2 CSS colour, else the theme text', () => {
        const field = fieldOf('tableHeaderTextColor');

        expect(resolveEffectiveColor(field, { textColor: '#00aa00' }, theme, { color: '#0000aa' })).toBe('#0000aa');
        expect(resolveEffectiveColor(field, { textColor: '#00aa00' }, theme, undefined)).toBe('#2f3e51');
    });
});
