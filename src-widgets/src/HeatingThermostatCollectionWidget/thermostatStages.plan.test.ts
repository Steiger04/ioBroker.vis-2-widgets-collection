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
        // min(224, 208) = 208.
        ['Mittel at its least box', 276, 376, { arrangement: 'mittel', dial: { size: 208, font: 31 } }],
    ])('%s (%i × %i px)', (_case, width, height, plan) => {
        expect(thermostatPlan('voll', { width, height }, true)).toEqual(plan);
    });

    it('does not depend on writability', () => {
        expect(thermostatPlan('voll', { width: 396, height: 636 }, false)).toEqual(
            thermostatPlan('voll', { width: 396, height: 636 }, true),
        );
    });
});

describe('thermostatPlan: Einfach', () => {
    it.each([
        ['Quer at its least box, without the segment', 456, 116, { arrangement: 'quer', modes: false }],
        ['Quer one px below the segment', 456, 235, { arrangement: 'quer', modes: false }],
        ['Quer with the segment from 236 px', 456, 236, { arrangement: 'quer', modes: true }],
        ['Quer for a wide Voll box', 600, 636, { arrangement: 'quer', modes: true }],
    ])('%s (%i × %i px)', (_case, width, height, plan) => {
        expect(thermostatPlan('einfach', { width, height }, true)).toEqual(plan);
    });

    it.each([
        // (256 − 2 × 52 − 2 × 12) / 3.6 = 35.5 beside ±.
        ['Kompakt at its least box beside ±', 256, 146, true, 35],
        // 256 / 3.6 = 71, capped at the design's 48 px without ±.
        ['Kompakt at its least box without ±', 256, 146, false, 48],
        ['Kompakt one px too narrow for Quer', 455, 300, true, 48],
        // Capped by `ansicht` or floored in the dialog.
        ['Kompakt for the start box', 396, 636, true, 48],
    ])('%s (%i × %i px)', (_case, width, height, writable, setpointFont) => {
        expect(thermostatPlan('einfach', { width, height }, writable)).toEqual({
            arrangement: 'kompakt',
            setpointFont,
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
        expect(thermostatPlan('mini', tileArea({ width, height }), writable)).toEqual({ arrangement: 'mini', tile });
    });
});
