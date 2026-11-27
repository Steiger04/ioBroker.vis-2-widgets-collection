/**
 * The Raumthermostat's arrangement plan at its interface (ADR-0122 Nachtrag K7).
 *
 * @module HeatingThermostatCollectionWidget/thermostatStages.plan.test
 * @remarks
 * One pure function from the drawn stage, the box and whether the set-point is writable to the
 * whole plan: arrangement, the operating-mode segment in Quer, dial size and font, the set-point
 * font and the tile's parts. The set-point font of Einfach and the tile from 3.6 px of width per px
 * of font and a 1.2 line, at most 48 and at least 12 px (pinned at the thresholds in
 * `thermostatStages.test`). The tile's plan computes in the area the size-stage module's hull leaves it
 * (`tileArea`); its cases stay in Content-Box sizes.
 *
 * Every plan names its Maßstab and the sizes of all parts it draws with (ADR-0122 Nachtrag „Maßstab
 * und Anordnungswahl“). Voll draws at the largest Maßstab its box holds — between the least, where ±
 * keep 40 px, and 2.0 — its ring filling the room the other parts leave. At Maßstab 1 the sizes are
 * the design's, as the parts drew them before the plan named them: ± 52 px (44 px in the tile) with the theme's 24 px icon, the Kartenkopf's 19 / 12.5 px
 * lines, its 44 px symbol box with a 22 px symbol and its 30 px chip, the hint line's 13 px (12 px in
 * the tile's footer), the pills 44 px high in 13.5 px, the readings' 16 / 11.5 px, the actual
 * temperature in the surrounding text's size and the gaps in the theme's spacing units.
 */
import { describe, expect, it } from 'vitest';

import { tileArea } from '../lib/heating/SizeStages';
import { thermostatPlan } from './thermostatStages';

describe('thermostatPlan: Voll fills its box (ADR-0122 Nachtrag „Maßstab und Anordnungswahl“)', () => {
    it('gives a tall, narrow Voll box (380 × 800 px outer, 332 × 752 px inside the Inhaltsabstand) a ring as wide as the middle', () => {
        // Before: Mittel with the ring at width − 52 = 280 px.
        expect(thermostatPlan('voll', { width: 332, height: 752 }, true)).toMatchObject({ dial: { size: 332 } });
    });

    it('lets the ring grow past the design’s 380 px with the room', () => {
        expect(thermostatPlan('voll', { width: 600, height: 900 }, true).dial.size).toBeGreaterThan(380);
    });

    it('draws at most at Maßstab 2.0: ring 640 px, ± 104 px, the set-point 96 px in a very large box', () => {
        expect(thermostatPlan('voll', { width: 2000, height: 2000 }, true)).toMatchObject({
            sizes: { scale: 2, step: 104 },
            dial: { size: 640, font: 96, step: 104 },
        });
    });

    it('draws Mittel at its least box at the least Maßstab: ± keep 40 px, its texts 11 px', () => {
        const plan = thermostatPlan('voll', { width: 247, height: 317 }, true);

        expect(plan.arrangement).toBe('mittel');
        expect(plan.sizes.step).toBeGreaterThanOrEqual(40);
        expect(plan.sizes.step).toBeCloseTo(40, 0);
        expect(plan.dial.step).toBeGreaterThanOrEqual(40);
        expect(plan.dial.step).toBeCloseTo(40, 0);
        expect(plan.sizes.pills.font).toBe(11);
        expect(plan.sizes.readings.label).toBe(11);
    });

    it('damps the Kartenkopf and the hint line: about 1.3 times at Maßstab 2.0', () => {
        const { sizes } = thermostatPlan('voll', { width: 2000, height: 2000 }, true);

        expect(sizes.head.name).toBeCloseTo(19 * 1.3, 6);
        expect(sizes.hint.font).toBeCloseTo(13 * 1.3, 6);
        expect(sizes.pills.height).toBe(88);
    });

    it("keeps Groß's pills, operating modes and readings in a centred column of 392 px × Maßstab", () => {
        const plan = thermostatPlan('voll', { width: 900, height: 800 }, true);

        expect(plan.arrangement).toBe('gross');
        expect(plan).toMatchObject({ column: 392 * plan.sizes.scale });
        expect((plan as { column: number }).column).toBeLessThan(900);
    });

    it('lets the ring take the room beside a narrow column: the instrument follows the ring', () => {
        // 332 px wide: the column holds Groß at 332 / 392 = 0.847, the ring the whole width.
        const plan = thermostatPlan('voll', { width: 332, height: 752 }, true);

        expect(plan.sizes.scale).toBeCloseTo(332 / 392, 2);
        expect(plan).toMatchObject({ arrangement: 'gross', dial: { size: 332, step: 52 * (332 / 320) } });
    });

    it('lays a wide, low Voll box (800 × 520 px outer, 752 × 472 px inside the Inhaltsabstand) out as Breit', () => {
        // Before: Mittel, the pills, operating modes and readings left out.
        expect(thermostatPlan('voll', { width: 752, height: 472 }, true).arrangement).toBe('breit');
    });

    it('does not depend on writability', () => {
        expect(thermostatPlan('voll', { width: 396, height: 636 }, false)).toEqual(
            thermostatPlan('voll', { width: 396, height: 636 }, true),
        );
    });
});

describe('thermostatPlan: Einfach', () => {
    it('shows the operating-mode segment in a flat Quer of 741 × 194 px (the former threshold was 236 px)', () => {
        expect(thermostatPlan('einfach', { width: 741, height: 194 }, true)).toMatchObject({
            arrangement: 'quer',
            modes: true,
        });
    });

    it.each([
        // The segment from the least Maßstab of its pills (0.815): 137.9 px of height.
        ['Quer one px below the segment', 741, 137, { arrangement: 'quer', modes: false }],
        ['Quer with the segment from 138 px', 741, 138, { arrangement: 'quer', modes: true }],
        ['Quer without the segment at its least box', 371, 91, { arrangement: 'quer', modes: false }],
    ])('%s (%i × %i px)', (_case, width, height, plan) => {
        expect(thermostatPlan('einfach', { width, height }, true)).toMatchObject(plan);
    });

    it.each([
        // Width-limited: the head column (140 px damped), the gap and the set-point row hold 1.638.
        ['a flat Quer fills its width', 741, 137, 1.638],
        // With the segment the head block and the pills share the height: the Maßstab follows it.
        ['Quer with the segment at its least height', 741, 138, 0.815],
        ['Quer with the segment, 56 px higher', 741, 194, 1.326],
        ['Quer at its least box', 371, 91, 0.77],
    ])("%s: Quer's Maßstab and its set-point in the theme's h3 (%i × %i px)", (_case, width, height, scale) => {
        expect(thermostatPlan('einfach', { width, height }, true)).toMatchObject({
            arrangement: 'quer',
            sizes: { scale, step: 52 * scale },
            setpointFont: { variant: 'h3', factor: scale },
        });
    });

    it('caps the Maßstab at 2.0', () => {
        expect(thermostatPlan('einfach', { width: 2000, height: 1000 }, true).sizes.scale).toBe(2);
    });

    it.each([
        // Width-limited: (256 px) / 300.8 px of set-point row → 0.851, the set-point 48 × 0.851.
        ['Kompakt in a narrow box beside ±', 256, 150, true, 0.851, 40.848],
        // Without ± the row is shorter: the height limits at 1.086.
        ['Kompakt without ±', 256, 150, false, 1.086, 52.128],
        // Height-limited: head row, set-point row and line below in 150 px.
        ['Kompakt in a wide, low box', 400, 150, true, 1.086, 52.128],
        ['Kompakt in a narrow, tall box', 280, 300, true, 0.93, 44.64],
        // Capped by `ansicht` or floored in the dialog.
        ['Kompakt for the start box', 396, 636, true, 1.316, 63.168],
    ])('%s (%i × %i px)', (_case, width, height, writable, scale, setpointFont) => {
        const plan = thermostatPlan('einfach', { width, height }, writable);

        expect(plan).toMatchObject({ arrangement: 'kompakt', sizes: { scale } });
        expect(plan.arrangement === 'kompakt' && plan.setpointFont).toBeCloseTo(setpointFont, 6);
    });

    it('draws a box too small for Einfach — floored in the dialog — at the least Maßstab', () => {
        expect(thermostatPlan('einfach', { width: 156, height: 66 }, true)).toMatchObject({
            arrangement: 'kompakt',
            sizes: { scale: 40 / 52, step: 40 },
        });
    });
});

describe('thermostatPlan: the tile', () => {
    it('grows ± with the Maßstab of a larger tile', () => {
        expect(thermostatPlan('mini', tileArea({ width: 230, height: 130 }), true)).toMatchObject({
            tile: { buttons: true },
            sizes: { scale: 1.072, step: 44 * 1.072 },
        });
    });

    it.each([
        // ± from 197 × 64 at 40 px (Maßstab 0.909): the set-point beside them as large as the row holds.
        ['± at their least box', 197, 64, true, 0.909, { buttons: true, footer: false, setpointFont: 29 }],
        // Not writable: no ±, the set-point alone fills the area.
        [
            'no ± while the set-point is not writable',
            197,
            64,
            false,
            1.034,
            { buttons: false, footer: false, setpointFont: 33 },
        ],
        ['no ± one px too narrow', 196, 64, true, 1.034, { buttons: false, footer: false, setpointFont: 33 }],
        [
            '± and the footer at their least box',
            199,
            94,
            true,
            0.9167,
            { buttons: true, footer: true, setpointFont: 29 },
        ],
        ['no footer beside ± one px lower', 199, 93, true, 0.92, { buttons: true, footer: false, setpointFont: 29 }],
        // The footer at its least Maßstab 0.917; one px lower the set-point takes the whole area.
        ['the footer at its least height', 156, 89, true, 0.918, { buttons: false, footer: true, setpointFont: 29 }],
        ['no footer one px lower', 156, 88, false, 1.354, { buttons: false, footer: false, setpointFont: 43 }],
        ['240 × 110 px outer', 214, 84, true, 0.994, { buttons: true, footer: false, setpointFont: 31 }],
        ['a larger tile', 230, 130, true, 1.072, { buttons: true, footer: true, setpointFont: 34 }],
        // The set-point never below 12 px.
        ['a tiny tile', 100, 40, true, 0.416, { buttons: false, footer: false, setpointFont: 13 }],
    ])('%s (%i × %i px)', (_case, width, height, writable, scale, tile) => {
        const plan = thermostatPlan('mini', tileArea({ width, height }), writable);

        expect(plan).toMatchObject({ arrangement: 'mini', tile });
        expect(plan.sizes.scale).toBeCloseTo(scale, 3);
        expect(plan.sizes.step).toBeCloseTo(44 * scale, 2);
    });

    it.each([
        // The head row damped at the tile's Maßstab, never below the hull's design.
        ['a larger tile', 230, 130, 1.0267],
        ['a tile below the design', 197, 64, 1],
        ['a tall tile without ±', 156, 88, 1.1216],
    ])("draws the hull's head row damped in %s (%i × %i px)", (_case, width, height, headScale) => {
        expect(thermostatPlan('mini', tileArea({ width, height }), true).tile.headScale).toBeCloseTo(headScale, 3);
    });

    it('lets the footer line grow with the Maßstab', () => {
        expect(thermostatPlan('mini', tileArea({ width: 230, height: 130 }), true).sizes.hint).toMatchObject({
            font: 12 * 1.072,
            sign: 14 * 1.072,
        });
    });
});

/** The design's part sizes beside the big set-point and the dial (Maßstab 1). */
const DESIGN_SIZES = {
    scale: 1,
    step: 52,
    stepIcon: 24,
    actual: 1,
    head: {
        name: 19,
        second: 12.5,
        textGapUnits: 0.25,
        rowGapUnits: 1.5,
        stackGapUnits: 1.25,
        symbol: 44,
        icon: 22,
        chipHeight: 30,
        chipFont: 12.5,
        chipGap: 7,
        chipPadUnits: 1.5,
        chipMarkWidth: 9,
        chipMarkHeight: 8,
        chipRowGapUnits: 1,
    },
    hint: { font: 13, sign: 16, gapUnits: 0.75, padXUnits: 1.25, padYUnits: 0.5, radius: 10 },
    pills: { height: 44, font: 13.5, gap: 7, padUnits: 1, radius: 14, rowGapUnits: 1 },
    readings: {
        value: 16,
        icon: 16,
        label: 11.5,
        gapUnits: 1,
        topUnits: 1.75,
        itemGapUnits: 0.375,
        valueGapUnits: 0.75,
        markPadUnits: 1,
    },
    gaps: { region: 1.5, step: 1.5, querHead: 2, querText: 1, modes: 1, dial: 0.5, actual: 1 },
};

describe('thermostatPlan: Maßstab and part sizes', () => {
    it.each([
        ['Quer', 457, 101],
        ['Kompakt', 301, 140],
    ])('draws %s at Maßstab 1 with the design sizes where its parts just fit (%i × %i px)', (_case, width, height) => {
        expect(thermostatPlan('einfach', { width, height }, true).sizes).toEqual(DESIGN_SIZES);
    });

    it("draws the tile at Maßstab 1 with its ± of 44 px and its footer's hint line where they just fit", () => {
        expect(thermostatPlan('mini', tileArea({ width: 216, height: 100 }), true).sizes).toEqual({
            ...DESIGN_SIZES,
            step: 44,
            hint: { font: 12, sign: 14, gapUnits: 0.75, padXUnits: 0.75, padYUnits: 0.25, radius: 10 },
        });
    });
});
