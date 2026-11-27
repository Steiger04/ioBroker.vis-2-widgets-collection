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
 * the size-stage module takes off before the rule (ADR-0122 Nachtrag 2026-11-27). Every threshold is
 * pinned with a value just before and just behind it; Einfach's follow from its parts at the least
 * Maßstab (ADR-0122 Nachtrag „Maßstab und Anordnungswahl“ Nr. 6). The tile
 * computes in the area the size-stage module's hull leaves it (`tileArea`); its cases stay in
 * Content-Box sizes.
 */
import { describe, expect, it } from 'vitest';

import {
    thermostatArrangement,
    thermostatPlan,
    thermostatSetpointFont,
    thermostatStage,
    thermostatTile,
} from './thermostatStages';
import { headScale } from '../lib/heating/scaleRule';
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

    /*
     * Breit's need at the least Maßstab: the dial (246.2 px), a gap (9.2) and the column
     * (392 × 0.769 = 301.5) — 556.9 px wide; high the column's Kartenkopf (41.2), hint line (24.9),
     * pills (33.8), operating modes with the Urlaub row (73.8), readings (49.0) and four gaps (36.9) —
     * 259.7 px. A wide, low box too low for Mittel holds Voll as Breit.
     */
    it.each([
        ['Voll as Breit at its least box', 557, 260, 'voll'],
        ['not Voll one px too narrow for Breit', 556, 260, 'einfach'],
        ['not Voll one px too low for Breit', 557, 259, 'einfach'],
    ])('%s (%i × %i px)', (_case, width, height, stage) => {
        expect(stageOf(width, height)).toBe(stage);
    });
});

describe('Größenstufen: the thresholds of the rule', () => {
    it.each([
        // Einfach as Quer: its parts at the least Maßstab (± 40 px) need 370.5 × 90.1 px.
        ['Einfach (Quer) at its least box', 371, 91, 'einfach'],
        ['not Quer one px too low', 371, 90, 'mini'],
        ['not Quer one px too narrow, too low for Kompakt', 370, 91, 'mini'],
        // Einfach as Kompakt: 231.4 × 115.3 px at the least Maßstab.
        ['Einfach (Kompakt) at its least box', 232, 116, 'einfach'],
        ['not Kompakt one px too narrow', 231, 116, 'mini'],
        ['not Kompakt one px too low', 232, 115, 'mini'],
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
        ['Breit at its least box', 557, 260, 'breit'],
        // 852 px wide: Breit draws at 852 / 724 = 1.176; Groß reaches that Maßstab from 759 px high.
        ['Breit while it draws larger than Groß', 852, 758, 'breit'],
        ['Groß once it draws larger than Breit', 852, 760, 'gross'],
    ])('Voll: %s (%i × %i px)', (_case, width, height, arrangement) => {
        expect(thermostatArrangement('voll', { width, height })).toBe(arrangement);
    });

    it.each([
        // The larger Maßstab wins: at 160 px of height Kompakt draws at 1.169, Quer from 519 px on
        // at more (without its segment; with it, it draws at 1.028).
        ['Quer at its least box', 371, 91, 'quer'],
        ['Kompakt one px before Quer draws larger', 518, 160, 'kompakt'],
        ['Quer where it draws larger than Kompakt', 519, 160, 'quer'],
        ['Kompakt in a box too narrow for Quer', 370, 300, 'kompakt'],
        ['Quer in a box too low for Kompakt', 600, 115, 'quer'],
        // Capped by `ansicht` or floored in the dialog: a Voll-sized box draws Einfach.
        ['Kompakt for the start box', 396, 636, 'kompakt'],
        ['Kompakt for a wide Voll box: it draws at 2.0, Quer at 1.4', 600, 636, 'kompakt'],
    ])('Einfach: %s (%i × %i px)', (_case, width, height, arrangement) => {
        expect(thermostatArrangement('einfach', { width, height })).toBe(arrangement);
    });
});

describe('Kachel: the parts of the Raumthermostat tile', () => {
    it.each([
        // ± at 40 px (Maßstab 0.909) beside a set-point of 32 × 0.909 px with the hull's 6 px gaps:
        // 196.7 px wide (about the spec's 220 px outer), 40 px high below head row and gap (24 px).
        ['± at their least box', 197, 64, true],
        ['no ± one px too narrow', 196, 64, false],
        ['no ± one px too low', 197, 63, false],
    ])('%s (%i × %i px)', (_case, width, height, buttons) => {
        expect(thermostatTile(tileArea({ width, height })).buttons).toBe(buttons);
    });

    it.each([
        // The footer line at its least Maßstab (12 px of text keep 11 px: 0.917) below the set-point
        // line, 4 px apart: 64.9 px of area.
        ['the footer at its least height', 156, 89, true],
        ['no footer one px lower', 156, 88, false],
        // Beside ± the main row is the ± edge at 0.917: 69.9 px of area, 198.3 px of width.
        ['the footer beside ± at its least box', 199, 94, true],
        ['no footer beside ± one px lower', 199, 93, false],
        ['no footer beside ± one px narrower', 198, 94, false],
    ])('%s (%i × %i px)', (_case, width, height, footer) => {
        expect(thermostatTile(tileArea({ width, height })).footer).toBe(footer);
    });

    it('needs no ± room without ±: the footer stands where only the set-point and the line fit', () => {
        expect(thermostatTile(tileArea({ width: 156, height: 89 }), false)).toMatchObject({
            buttons: false,
            footer: true,
        });
    });
});

describe('Passform: every arrangement holds its parts in its box', () => {
    it.each([
        ['at its least box', 232, 116],
        ['300 × 190 px outer (acceptance repro)', 274, 164],
        ['282 × 180 px outer (acceptance repro)', 256, 154],
        ['320 × 190 px outer', 294, 164],
        ['a tall box', 300, 500],
    ])('Kompakt with ± %s (%i × %i px)', (_case, width, height) => {
        const plan = thermostatPlan('einfach', { width, height }, true);
        if (plan.arrangement !== 'kompakt') {
            throw new Error(`expected Kompakt, got ${plan.arrangement}`);
        }
        const font = plan.setpointFont;
        const step = MEASURED.stepFlat * plan.sizes.scale;
        const row = 2 * step + 2 * MEASURED.flatGap * plan.sizes.scale + MEASURED.glyphsPerFontPx * font;

        expect(step).toBeGreaterThanOrEqual(40);
        expect(row).toBeLessThanOrEqual(width);
        expect(Math.max(step, MEASURED.lineHeight * font)).toBeLessThanOrEqual(height);
    });

    it.each([
        ['at its least box', 371, 91, false],
        ['a flat, wide box', 741, 137, false],
        ['with the segment', 741, 194, true],
        ['with the segment at its least height', 741, 138, true],
    ])('Quer with ± %s (%i × %i px)', (_case, width, height, modes) => {
        const plan = thermostatPlan('einfach', { width, height }, true);
        if (plan.arrangement !== 'quer') {
            throw new Error(`expected Quer, got ${plan.arrangement}`);
        }
        const { scale } = plan.sizes;
        // The set-point row: the theme's h3 (48 px in the standard theme) at the Maßstab, ± beside it.
        const row = 2 * (MEASURED.stepFlat + MEASURED.flatGap) * scale + MEASURED.glyphsPerFontPx * 48 * scale;
        // The segment's pills: 44 px below a gap of 12 px at the design.
        const segment = modes ? 56 * scale : 0;

        expect(plan.modes).toBe(modes);
        expect(MEASURED.stepFlat * scale).toBeGreaterThanOrEqual(40);
        expect(row).toBeLessThan(width);
        expect(MEASURED.lineHeight * 48 * scale + segment).toBeLessThanOrEqual(height);
    });
});

describe('Passform: the tile holds what it shows', () => {
    it.each([
        ['220 × 110 px outer (acceptance repro)', 194, 84],
        ['240 × 110 px outer (acceptance repro)', 214, 84],
        ['240 × 80 px outer (acceptance repro)', 214, 54],
        ['160 × 110 px outer (acceptance repro)', 134, 84],
        ['± at their least box', 197, 64],
        ['± and the footer at their least box', 199, 94],
        ['the footer at its least box', 156, 89],
        ['a large tile', 230, 140],
        ['a tall tile', 230, 400],
        ['a tiny tile', 100, 40],
    ])('%s (%i × %i px)', (_case, width, height) => {
        const box = { width, height };
        const area = tileArea(box);
        const tile = thermostatTile(area);
        const font = thermostatSetpointFont(area, tile);
        const step = MEASURED.stepTile * tile.scale;
        // The hull's head row grows damped, never below its 20 px.
        const head = MEASURED.tileHead * Math.max(1, headScale(tile.scale));
        const setpointWidth = MEASURED.glyphsPerFontPx * font;
        const buttons = tile.buttons ? 2 * step + 2 * MEASURED.tileGap : 0;
        const mainRow = Math.max(tile.buttons ? step : 0, MEASURED.lineHeight * font);
        const footer = tile.footer ? MEASURED.tileRowGap + MEASURED.tileLine * tile.scale : 0;

        expect(thermostatStage(box, {})).toBe('mini');
        expect(tile.buttons ? step : 40).toBeGreaterThanOrEqual(40);
        expect(setpointWidth + buttons).toBeLessThanOrEqual(width);
        expect(head + MEASURED.tileRowGap + mainRow + footer).toBeLessThanOrEqual(height + 1e-9);
    });

    it('shows ± in the tile at 240 × 110 px outer and the footer beside them from 199 × 94 px', () => {
        expect(thermostatTile(tileArea({ width: 214, height: 84 })).buttons).toBe(true);
        expect(thermostatTile(tileArea({ width: 199, height: 94 }))).toMatchObject({ buttons: true, footer: true });
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
