import { describe, expect, it } from 'vitest';

import { buildTableChrome } from './chrome';
import type { TableChromeSettings, TableChromeTheme } from './chrome';

/** Minimal theme: the chrome only reads the shadow ladder and the divider colour. */
const theme: TableChromeTheme = {
    shadows: Array.from({ length: 25 }, (_, i) => (i === 0 ? 'none' : `shadow-${i}`)),
    palette: { divider: 'rgba(0, 0, 0, 0.12)' },
};

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
    it('sticks to the top as an elevated paper card by default (elevation 6)', () => {
        const bar = chrome().headerBarSx;

        expect(bar.position).toBe('sticky');
        expect(bar.top).toBe(0);
        expect(bar.zIndex).toBe(2);
        expect(bar.backgroundColor).toBe('background.paper');
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

    it('paints a solid header colour as backgroundColor, a gradient as background over the card', () => {
        const solid = chrome({ tableHeaderBgColor: '#123456' }).headerBarSx;
        expect(solid.backgroundColor).toBe('#123456');
        expect(solid.background).toBeUndefined();

        const gradient = 'linear-gradient(90deg, #ff0000 0%, #0000ff 100%)';
        const graded = chrome({ tableHeaderBgColor: gradient }).headerBarSx;
        expect(graded.background).toBe(gradient);
        expect(graded.backgroundColor).toBe('background.paper');

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
        expect(line(undefined).backgroundColor).toBe('rgba(0, 0, 0, 0.12)');
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

        expect(cells(sx)).toEqual({ borderBottom: '1px solid', borderBottomColor: 'divider' });
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
            borderBottomColor: 'divider',
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
            borderRightColor: 'divider',
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

describe('buildTableChrome — outer frame and padding', () => {
    it('frames nothing by default: a clipping flex column without border', () => {
        expect(chrome().frameSx).toEqual({ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' });
        expect(chrome({ borderWidth: 0, borderColor: '#ff0000' }).frameSx.border).toBeUndefined();
    });

    it('draws the frame in the configured width, style and colour, the divider without colour', () => {
        const solid = chrome({ borderWidth: 2 }).frameSx;
        expect(solid.border).toBe('2px solid');
        expect(solid.borderColor).toBe('divider');

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
