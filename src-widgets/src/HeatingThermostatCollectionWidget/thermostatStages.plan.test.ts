/**
 * The Raumthermostat's arrangement plan at its interface (ADR-0122 Nachtrag K7).
 *
 * @module HeatingThermostatCollectionWidget/thermostatStages.plan.test
 * @remarks
 * One pure function from the drawn stage, the box and whether the set-point is writable to the
 * whole plan: arrangement, the operating-mode segment in Quer, dial size and font, the set-point
 * font and the tile's parts. The values are those of the earlier separate helpers (pinned at the
 * thresholds in `thermostatStages.test`): the dial edge from the design's dial size taken back to
 * the Content-Box (Groß: width − 76, height − 316 within 240…380; Mittel: width − 52, height − 168
 * within 200…320), the set-point font from 3.6 px of width per px of font and a 1.2 line, at most 48
 * and at least 12 px. The tile's plan computes in the area the size-stage module's hull leaves it
 * (`tileArea`); its cases stay in Content-Box sizes.
 *
 * Every plan names its Maßstab and the sizes of all parts it draws with (ADR-0122 Nachtrag „Maßstab
 * und Anordnungswahl“); at Maßstab 1 they are the design's, as the parts drew them before the plan
 * named them: ± 52 px (44 px in the tile) with the theme's 24 px icon, the Kartenkopf's 19 / 12.5 px
 * lines, its 44 px symbol box with a 22 px symbol and its 30 px chip, the hint line's 13 px (12 px in
 * the tile's footer), the pills 44 px high in 13.5 px, the readings' 16 / 11.5 px, the actual
 * temperature in the surrounding text's size and the gaps in the theme's spacing units.
 */
import { describe, expect, it } from 'vitest';

import { tileArea } from '../lib/heating/SizeStages';
import { thermostatPlan } from './thermostatStages';

describe('thermostatPlan: Voll', () => {
    it.each([
        // 396 − 76 = 636 − 316 = 320: the design's dial with its 48 px set-point.
        ['Groß at the start box', 396, 636, { arrangement: 'gross', dial: { size: 320, font: 48 } }],
        // min(300, 260) = 260; the set-point shrinks to stay inside the ring.
        ['Groß at its least box', 376, 576, { arrangement: 'gross', dial: { size: 260, font: 41 } }],
        ['Groß at its largest dial', 600, 900, { arrangement: 'gross', dial: { size: 380, font: 48 } }],
        // One px too narrow for Groß: Mittel, min(323, 408) capped at 320.
        ['Mittel one px too narrow for Groß', 375, 576, { arrangement: 'mittel', dial: { size: 320, font: 48 } }],
        ['Mittel one px too low for Groß', 376, 575, { arrangement: 'mittel', dial: { size: 320, font: 48 } }],
        // min(220, 208) = 208.
        ['Mittel at its least box', 272, 376, { arrangement: 'mittel', dial: { size: 208, font: 31 } }],
    ])('%s (%i × %i px)', (_case, width, height, plan) => {
        expect(thermostatPlan('voll', { width, height }, true)).toMatchObject(plan);
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
    it.each([
        // ± from 196 × 68: the set-point beside them (196 − 100) / 3.6 = 26.
        ['± at their least box', 196, 68, true, { buttons: true, footer: false, setpointFont: 26 }],
        // Not writable: no ±, the height (68 − 24) / 1.2 = 36 limits.
        [
            'no ± while the set-point is not writable',
            196,
            68,
            false,
            { buttons: false, footer: false, setpointFont: 36 },
        ],
        ['no ± one px too narrow', 195, 68, true, { buttons: false, footer: false, setpointFont: 36 }],
        ['± and the footer at their least box', 196, 100, true, { buttons: true, footer: true, setpointFont: 26 }],
        ['no footer beside ± one px lower', 196, 99, true, { buttons: true, footer: false, setpointFont: 26 }],
        // (80 − 24 − 32) / 1.2 = 20 above the footer.
        ['the footer at its least height', 156, 80, true, { buttons: false, footer: true, setpointFont: 20 }],
        ['no footer one px lower', 156, 79, false, { buttons: false, footer: false, setpointFont: 43 }],
        ['240 × 110 px outer', 214, 84, true, { buttons: true, footer: false, setpointFont: 31 }],
        ['220 × 110 px outer', 194, 84, true, { buttons: false, footer: true, setpointFont: 23 }],
    ])('%s (%i × %i px)', (_case, width, height, writable, tile) => {
        expect(thermostatPlan('mini', tileArea({ width, height }), writable)).toMatchObject({
            arrangement: 'mini',
            tile,
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
        ['Groß', 396, 636],
        ['Mittel', 272, 376],
    ])('draws %s at Maßstab 1 with the design sizes (%i × %i px)', (_case, width, height) => {
        expect(thermostatPlan('voll', { width, height }, true).sizes).toEqual(DESIGN_SIZES);
    });

    it.each([
        ['Quer', 457, 101],
        ['Kompakt', 301, 140],
    ])('draws %s at Maßstab 1 with the design sizes where its parts just fit (%i × %i px)', (_case, width, height) => {
        expect(thermostatPlan('einfach', { width, height }, true).sizes).toEqual(DESIGN_SIZES);
    });

    it("draws the tile at Maßstab 1 with its ± of 44 px and its footer's hint line", () => {
        expect(thermostatPlan('mini', tileArea({ width: 214, height: 100 }), true).sizes).toEqual({
            ...DESIGN_SIZES,
            step: 44,
            hint: { font: 12, sign: 14, gapUnits: 0.75, padXUnits: 0.75, padYUnits: 0.25, radius: 10 },
        });
    });

    it("lays Groß's pills, operating modes and readings across the whole width", () => {
        expect(thermostatPlan('voll', { width: 900, height: 800 }, true)).toMatchObject({
            arrangement: 'gross',
            column: null,
        });
    });
});
