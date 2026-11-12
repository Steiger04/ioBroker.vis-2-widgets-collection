/**
 * TableCellRenderer — the image graphic of an image-format cell.
 *
 * @module widgets/JsonTableCollectionWidget/components/TableCellRenderer.test
 * @remarks
 * A glyph renders as a MUI `Avatar` without an image, which MUI paints in its placeholder
 * colour `palette.background.default`. Without a tint the glyph must take the cell's text
 * colour instead (same meaning as an untinted image: the graphic in its natural colour).
 */
import { describe, expect, it } from 'vitest';
import { act, createElement } from 'react';
import { createTestRoot } from '../../lib/testing/testRoots';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import type { CellImageContent, ColumnConfigEntry } from '../types';
import { dateReader } from '../dateReader';
import { ImageGraphic, TableCellRenderer, type RenderedColumn } from './TableCellRenderer';

/** Distinct page background so the MUI avatar placeholder colour is recognisable. */
const PAGE_BG = 'rgb(250, 240, 230)';
/** The cell's text colour the glyph sits in. */
const CELL_TEXT = 'rgb(10, 20, 30)';

const theme = createTheme({ palette: { background: { default: PAGE_BG } } });

const glyph = (tint?: string): CellImageContent => ({
    src: '★',
    size: 24,
    objectFit: 'contain',
    variant: 'square',
    tint,
    showBroken: true,
});

/**
 * The glyph takes the cell's text colour: a browser resolves `inherit` to the cell colour,
 * happy-dom reports the declared `inherit` unresolved — both mean "inherits".
 */
const INHERITS = [CELL_TEXT, 'inherit'];

/** Render the graphic inside a cell with {@link CELL_TEXT}; returns the avatar element. */
const mountGraphic = (descriptor: CellImageContent): HTMLElement => {
    const cell = document.createElement('div');
    cell.style.color = CELL_TEXT;
    document.body.appendChild(cell);
    act(() => {
        createTestRoot(cell).render(
            createElement(ThemeProvider, { theme }, createElement(ImageGraphic, { descriptor })),
        );
    });
    const avatar = cell.querySelector<HTMLElement>('.MuiAvatar-root');
    expect(avatar).not.toBeNull();
    return avatar!;
};

describe('ImageGraphic glyph colour', () => {
    it('inherits the cell text colour without a tint, not the avatar placeholder colour', () => {
        const avatar = mountGraphic(glyph());
        const { color } = getComputedStyle(avatar);
        expect(color).not.toBe(PAGE_BG);
        expect(INHERITS).toContain(color);
    });

    it('treats an empty tint as no tint', () => {
        const avatar = mountGraphic(glyph(''));
        expect(INHERITS).toContain(getComputedStyle(avatar).color);
    });

    it('paints the glyph in the tint when one is set', () => {
        const avatar = mountGraphic(glyph('rgb(200, 0, 0)'));
        expect(getComputedStyle(avatar).color).toBe('rgb(200, 0, 0)');
    });
});

/**
 * A row grows when one of its cells wraps (an object cell's JSON text). The other cells then keep
 * their content in the row's first band — the height of one row, read from the cell's
 * `--json-table-row-height` (chrome) — instead of the middle of the tall row, where the visible
 * part of the table looks empty. A row of single-line cells looks as before: the band is the whole
 * cell there (`min(100%, …)`), its content centred in it. A browser resolves the cell box's 100 %
 * against the final row height, so only the band places the content; happy-dom has no layout, so
 * the styles carry the contract.
 */
describe('TableCellRenderer row band', () => {
    const column = (cellConfig: Partial<ColumnConfigEntry>): RenderedColumn => ({
        type: 'string',
        readDate: dateReader(),
        cellConfig: cellConfig as ColumnConfigEntry,
    });

    /** Render one cell; returns its outer box (the cell surface) and its band. */
    const mountCell = (
        value: unknown,
        cellConfig: Partial<ColumnConfigEntry> = {},
    ): { surface: HTMLElement; band: HTMLElement } => {
        const cell = document.createElement('div');
        // The row height the chrome sets on every body cell
        cell.style.setProperty('--json-table-row-height', '52px');
        document.body.appendChild(cell);
        act(() => {
            createTestRoot(cell).render(
                createElement(
                    ThemeProvider,
                    { theme },
                    createElement(TableCellRenderer, { value, column: column(cellConfig) }),
                ),
            );
        });
        const surface = cell.firstElementChild as HTMLElement;
        return { surface, band: surface.firstElementChild as HTMLElement };
    };

    it.each([
        ['text', 'short', {}],
        ['object', { a: 1 }, {}],
        ['image', '★', { format: { type: 'image' } }],
    ])(
        'keeps a %s cell in the first row band of a tall row, its surface over the whole cell',
        (_case, value, cellConfig) => {
            const { surface, band } = mountCell(value, cellConfig as Partial<ColumnConfigEntry>);
            const surfaceStyle = getComputedStyle(surface);
            const bandStyle = getComputedStyle(band);

            expect(surfaceStyle.height).toBe('100%');
            expect(surfaceStyle.alignItems).toBe('flex-start');
            expect(bandStyle.alignItems).toBe('center');
            expect(bandStyle.minHeight).toBe('min(100%, 52px)');
        },
    );
});
