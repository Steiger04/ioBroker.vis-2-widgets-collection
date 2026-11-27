/**
 * The Raumthermostat's size-stage rule at its interface (ADR-0122 Nr. 1, 9).
 *
 * @module HeatingThermostatCollectionWidget/thermostatStages.test
 * @remarks
 * The design's thresholds (`layout()` of the design canvas) are outer sizes; the rule works on the
 * Content-Box. The start-step test derives the box from the outer 420 × 700 px with the grid test's
 * frame arithmetic (`lib/aiCatalogView.parity.test.ts`, `frameHeightOf`): the card inset of 8 px, the
 * header and the footer line flat at 20 px each and the base padding of 8 px on both sides — about
 * 416 × 636 px from 440 × 700 px —, and the standard Inhaltsabstand of 12 px on every side, which
 * the size-stage module takes off before the rule (ADR-0122 Nachtrag 2026-11-27). Every threshold is pinned with a value just before and just behind it. The tile
 * computes in the area the size-stage module's hull leaves it (`tileArea`); its cases stay in
 * Content-Box sizes.
 */
import { describe, expect, it } from 'vitest';

import {
    thermostatArrangement,
    thermostatPlan,
    thermostatQuerModes,
    thermostatSetpointFont,
    thermostatStage,
    thermostatTile,
} from './thermostatStages';
import { tileArea } from '../lib/heating/SizeStages';

/**
 * The drawn sizes the fit counts with, measured in the browser (acceptance, vis-2 :3000): the
 * set-point „21,0 °C“ is 161 px wide at 48 px of font, its line 1.2 × the font; ± 52 px beside the
 * big set-point with 12 px of gap.
 */
const MEASURED = {
    glyphsPerFontPx: 161 / 48,
    lineHeight: 1.2,
    stepFlat: 52,
    flatGap: 12,
    /** The tile: its head row, ± 44 px with 6 px of gap, the footer line, 4 px between its rows. */
    tileHead: 20,
    stepTile: 44,
    tileGap: 6,
    tileLine: 28,
    tileRowGap: 4,
} as const;

/** The card's inset (`Generic.wrapContent`, `calc(100% - 8px)`). */
const CARD_INSET = 8;
/** One `body2` line: the frame's header and footer, counted flat. */
const FRAME_LINE = 20;
/** The standard base padding (1 unit of 8 px) on both sides. */
const BASE_PADDING = 2 * 8;

/** The standard Inhaltsabstand (1.5 units of 8 px) on both sides. */
const INHALTSABSTAND = 2 * 12;

/** The Content-Box of an outer widget size in the standard configuration. */
const contentBoxOf = (width: number, height: number): { width: number; height: number } => ({
    width: width - CARD_INSET - BASE_PADDING,
    height: height - CARD_INSET - 2 * FRAME_LINE - BASE_PADDING,
});

/** The rule with the Raumthermostat's standard data (it reads none). */
const stageOf = (width: number, height: number): string => thermostatStage({ width, height }, {});

describe('Startstufe: the Raumthermostat starts in Voll (ADR-0122 Nr. 9, Nachtrag 2026-11-27)', () => {
    it('derives about 416 × 636 px of Content-Box from the outer 440 × 700 px', () => {
        expect(contentBoxOf(440, 700)).toEqual({ width: 416, height: 636 });
    });

    it('reaches Voll from the start size inside the standard Inhaltsabstand, in the arrangement Groß', () => {
        const box = contentBoxOf(440, 700);
        const content = { width: box.width - INHALTSABSTAND, height: box.height - INHALTSABSTAND };

        expect(content).toEqual({ width: 392, height: 612 });
        expect(stageOf(content.width, content.height)).toBe('voll');
        expect(thermostatArrangement('voll', content)).toBe('gross');
    });

    it('reaches Groß from the former 420 px too: the column narrows with the Maßstab', () => {
        const box = contentBoxOf(420, 700);
        const content = { width: box.width - INHALTSABSTAND, height: box.height - INHALTSABSTAND };

        expect(thermostatArrangement('voll', content)).toBe('gross');
    });

    it('holds Voll at 11 grid rows (632 px) and in the narrowest section (296 px), inside the standard Inhaltsabstand', () => {
        expect(stageOf(416 - INHALTSABSTAND, 632 - INHALTSABSTAND)).toBe('voll');
        expect(stageOf(296, 632)).toBe('voll');
        // The narrowest section inside the standard Inhaltsabstand: 296 − 24 = 272 px, Mittel.
        expect(stageOf(296 - INHALTSABSTAND, 632 - INHALTSABSTAND)).toBe('voll');
        expect(thermostatArrangement('voll', { width: 296 - INHALTSABSTAND, height: 632 - INHALTSABSTAND })).toBe(
            'mittel',
        );
    });
});

describe('Größenstufen: Voll from the need of its content at the least Maßstab', () => {
    /*
     * The least Maßstab is where ± (52 px) keep 40 px: 0.769. Mittel's need there: the dial
     * 320 × 0.769 = 246.2 px wide; high the dial, the Kartenkopf row (its 30 px chip, damped to
     * 0.906: 27.2 px), the hint line with a Meldung (13 px × 1.5 + 2 × 4 px, damped: 24.9 px) and two
     * gaps of 12 px × 0.769 — 316.7 px.
     */
    it.each([
        ['Voll at Mittel’s least box', 247, 317, true],
        ['not Voll one px too narrow', 246, 317, false],
        ['not Voll one px too low', 247, 316, false],
    ])('%s (%i × %i px)', (_case, width, height, voll) => {
        expect(stageOf(width, height) === 'voll').toBe(voll);
    });
});

describe('Größenstufen: the thresholds of the rule', () => {
    it.each([
        // Einfach as Quer: 480 × 180 px outer.
        ['Einfach (Quer) at its least box', 456, 116, 'einfach'],
        ['not Quer one px too low', 456, 115, 'mini'],
        ['not Quer one px too narrow, too low for Kompakt', 455, 116, 'mini'],
        // Einfach as Kompakt: 280 × 210 px outer.
        ['Einfach (Kompakt) at its least box', 256, 146, 'einfach'],
        ['not Kompakt one px too narrow', 255, 146, 'mini'],
        ['not Kompakt one px too low', 256, 145, 'mini'],
        // Mini below.
        ['Mini for a tile-sized box', 156, 66, 'mini'],
        ['Mini for an empty box', 0, 0, 'mini'],
    ])('%s (%i × %i px)', (_case, width, height, stage) => {
        expect(stageOf(width, height)).toBe(stage);
    });
});

describe('Anordnungen: the arrangement within a stage', () => {
    it.each([
        // Groß at the least Maßstab: its column 392 × 0.769 = 301.5 px wide; high the dial (246.2 px),
        // the full Kartenkopf (41.2), the hint line (24.9), pills (33.8), operating modes with the
        // Urlaub row (73.8), readings (49.0) and five gaps (46.2) — 515.1 px.
        ['Groß at its least box', 302, 516, 'gross'],
        ['Mittel one px too narrow for Groß', 301, 516, 'mittel'],
        ['Mittel one px too low for Groß', 302, 515, 'mittel'],
    ])('Voll: %s (%i × %i px)', (_case, width, height, arrangement) => {
        expect(thermostatArrangement('voll', { width, height })).toBe(arrangement);
    });

    it.each([
        ['Quer at its least box', 456, 116, 'quer'],
        ['Kompakt one px too narrow for Quer', 455, 300, 'kompakt'],
        ['Kompakt one px too low for Quer', 600, 115, 'kompakt'],
        // Capped by `ansicht` or floored in the dialog: a Voll-sized box draws Einfach.
        ['Kompakt for the start box', 396, 636, 'kompakt'],
        ['Quer for a wide Voll box', 600, 636, 'quer'],
    ])('Einfach: %s (%i × %i px)', (_case, width, height, arrangement) => {
        expect(thermostatArrangement('einfach', { width, height })).toBe(arrangement);
    });
});

describe('Kachel: the parts of the Raumthermostat tile', () => {
    it.each([
        // ± from about 220 px of width (spec), and from the height of head row and ± (20 + 4 + 44 px).
        ['± at their least box', 196, 68, true],
        ['no ± one px too narrow', 195, 68, false],
        ['no ± one px too low', 196, 67, false],
    ])('%s (%i × %i px)', (_case, width, height, buttons) => {
        expect(thermostatTile(tileArea({ width, height })).buttons).toBe(buttons);
    });

    it.each([
        // The footer line below head row, a set-point of 20 px and the 28 px line (20 + 4 + 24 + 4 + 28 px).
        ['the footer at its least height', 156, 80, true],
        ['no footer one px lower', 156, 79, false],
        // With ± the main row is 44 px high.
        ['the footer beside ± at its least height', 196, 100, true],
        ['no footer beside ± one px lower', 196, 99, false],
    ])('%s (%i × %i px)', (_case, width, height, footer) => {
        expect(thermostatTile(tileArea({ width, height })).footer).toBe(footer);
    });
});

describe('Quer: the operating-mode segment', () => {
    it.each([
        ['from 300 px outer height on', 236, true],
        ['not one px lower', 235, false],
    ])('%s (%i px)', (_case, height, modes) => {
        expect(thermostatQuerModes({ width: 456, height })).toBe(modes);
    });
});

describe('Passform: every arrangement holds its parts in its box', () => {
    it.each([
        ['at its least box', 256, 146],
        ['300 × 190 px outer (acceptance repro)', 274, 164],
        ['282 × 180 px outer (acceptance repro)', 256, 154],
        ['320 × 190 px outer', 294, 164],
    ])('Kompakt with ± %s (%i × %i px)', (_case, width, height) => {
        const box = { width, height };
        const font = thermostatSetpointFont('kompakt', box, true);
        const row = 2 * MEASURED.stepFlat + 2 * MEASURED.flatGap + MEASURED.glyphsPerFontPx * font;

        expect(thermostatArrangement('einfach', box)).toBe('kompakt');
        expect(row).toBeLessThanOrEqual(width);
    });

    it('keeps the design size of 48 px in Kompakt while the box has room for it', () => {
        expect(thermostatSetpointFont('kompakt', { width: 396, height: 636 }, true)).toBe(48);
    });

    it('gives the set-point the whole row in Kompakt without ±', () => {
        expect(thermostatSetpointFont('kompakt', { width: 256, height: 146 }, false)).toBeGreaterThan(
            thermostatSetpointFont('kompakt', { width: 256, height: 146 }, true),
        );
    });
});

describe('Passform: the tile holds what it shows', () => {
    it.each([
        ['220 × 110 px outer (acceptance repro)', 194, 84],
        ['240 × 110 px outer (acceptance repro)', 214, 84],
        ['240 × 80 px outer (acceptance repro)', 214, 54],
        ['160 × 110 px outer (acceptance repro)', 134, 84],
        ['± at their least box', 196, 68],
        ['± and the footer at their least box', 196, 100],
        ['the footer at its least box', 156, 80],
        ['a large tile', 260, 140],
    ])('%s (%i × %i px)', (_case, width, height) => {
        const box = { width, height };
        const parts = thermostatTile(tileArea(box));
        const font = thermostatSetpointFont('tile', tileArea(box), parts);
        const setpointWidth = MEASURED.glyphsPerFontPx * font;
        const buttons = parts.buttons ? 2 * MEASURED.stepTile + 2 * MEASURED.tileGap : 0;
        const mainRow = Math.max(parts.buttons ? MEASURED.stepTile : 0, MEASURED.lineHeight * font);
        const footer = parts.footer ? MEASURED.tileRowGap + MEASURED.tileLine : 0;

        expect(thermostatStage(box, {})).toBe('mini');
        expect(setpointWidth + buttons).toBeLessThanOrEqual(width);
        expect(MEASURED.tileHead + MEASURED.tileRowGap + mainRow + footer).toBeLessThanOrEqual(height);
    });

    it('shows ± in the tile at 240 × 110 px outer and the footer at 220 × 110 px outer', () => {
        expect(thermostatTile(tileArea({ width: 214, height: 84 })).buttons).toBe(true);
        expect(thermostatTile(tileArea({ width: 194, height: 84 })).footer).toBe(true);
    });
});

describe('Passform: the set-point stays inside the ring of the dial', () => {
    /**
     * The dial's geometry (320-unit box, `SetpointControls`): the ring's inner edge at 118 − 7 units;
     * the set-point line, the gap of 4 px and the actual line of 28 px — both at the dial's factor —
     * stand centred above a bottom padding of 26 units. The set-point's far corner must stay inside
     * the inner edge.
     */
    const cornerInside = (size: number, font: number): boolean => {
        const k = size / 320;
        const block = MEASURED.lineHeight * font + (4 + 28) * k;
        const top = 13 * k + block / 2;
        const half = (MEASURED.glyphsPerFontPx * font) / 2;
        return Math.hypot(half, top) <= 111 * k;
    };

    it.each([
        ['Mittel at its least box', 247, 317],
        ['Mittel at 330 × 450 px outer (acceptance)', 304, 424],
        ['Groß at its least box', 302, 516],
        ['Groß at the start box', 392, 612],
        ['Groß at its largest dial', 2000, 2000],
    ] as const)('%s', (_case, width, height) => {
        const { dial } = thermostatPlan('voll', { width, height }, true);

        expect(cornerInside(dial.size, dial.font)).toBe(true);
    });

    it('draws the set-point at the design’s 48 px times the dial’s factor: 96 px in the largest dial', () => {
        expect(thermostatPlan('voll', { width: 2000, height: 2000 }, true)).toMatchObject({
            dial: { size: 640, font: 96 },
        });
    });
});
