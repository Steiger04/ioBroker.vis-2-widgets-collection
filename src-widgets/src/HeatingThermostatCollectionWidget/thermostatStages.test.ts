/**
 * The Raumthermostat's size-stage rule at its interface (ADR-0122 Nr. 1, 9).
 *
 * @module HeatingThermostatCollectionWidget/thermostatStages.test
 * @remarks
 * The design's thresholds (`layout()` of the design canvas) are outer sizes; the rule works on the
 * Content-Box. The start-step test derives the box from the outer 420 × 700 px with the grid test's
 * frame arithmetic (`lib/aiCatalogView.parity.test.ts`, `frameHeightOf`): the card inset of 8 px, the
 * header and the footer line flat at 20 px each and the base padding of 8 px on both sides — about
 * 396 × 636 px. Every threshold is pinned with a value just before and just behind it.
 */
import { describe, expect, it } from 'vitest';

import {
    thermostatArrangement,
    thermostatQuerModes,
    thermostatSetpointFont,
    thermostatStage,
    thermostatTile,
} from './thermostatStages';

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
} as const;

/** The card's inset (`Generic.wrapContent`, `calc(100% - 8px)`). */
const CARD_INSET = 8;
/** One `body2` line: the frame's header and footer, counted flat. */
const FRAME_LINE = 20;
/** The standard base padding (1 unit of 8 px) on both sides. */
const BASE_PADDING = 2 * 8;

/** The Content-Box of an outer widget size in the standard configuration. */
const contentBoxOf = (width: number, height: number): { width: number; height: number } => ({
    width: width - CARD_INSET - BASE_PADDING,
    height: height - CARD_INSET - 2 * FRAME_LINE - BASE_PADDING,
});

/** The rule with the Raumthermostat's standard data (it reads none). */
const stageOf = (width: number, height: number): string => thermostatStage({ width, height }, {});

describe('Startstufe: the Raumthermostat starts in Voll (ADR-0122 Nr. 9)', () => {
    it('derives about 396 × 636 px of Content-Box from the outer 420 × 700 px', () => {
        expect(contentBoxOf(420, 700)).toEqual({ width: 396, height: 636 });
    });

    it('reaches Voll from the start size, in the arrangement Groß of the design', () => {
        const box = contentBoxOf(420, 700);

        expect(stageOf(box.width, box.height)).toBe('voll');
        expect(thermostatArrangement('voll', box)).toBe('gross');
    });

    it('holds Voll at 632 px of height (11 grid rows) and at 296 px of width (the narrowest section)', () => {
        expect(stageOf(396, 632)).toBe('voll');
        expect(stageOf(296, 636)).toBe('voll');
        expect(stageOf(296, 632)).toBe('voll');
    });
});

describe('Größenstufen: the thresholds of the rule', () => {
    it.each([
        // Voll begins with the arrangement Mittel: 300 × 440 px outer.
        ['Voll at its least box', 276, 376, 'voll'],
        ['not Voll one px too narrow', 275, 376, 'einfach'],
        ['not Voll one px too low', 276, 375, 'einfach'],
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
        // Groß: 400 × 640 px outer.
        ['Groß at its least box', 376, 576, 'gross'],
        ['Mittel one px too narrow for Groß', 375, 576, 'mittel'],
        ['Mittel one px too low for Groß', 376, 575, 'mittel'],
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
        // ± from 220 × 110 px outer.
        ['± at their least box', 196, 46, true],
        ['no ± one px too narrow', 195, 46, false],
        ['no ± one px too low', 196, 45, false],
    ])('%s (%i × %i px)', (_case, width, height, buttons) => {
        expect(thermostatTile({ width, height }).buttons).toBe(buttons);
    });

    it.each([
        // The footer line from 130 px outer height.
        ['the footer at its least height', 66, true],
        ['no footer one px lower', 65, false],
    ])('%s (%i px)', (_case, height, footer) => {
        expect(thermostatTile({ width: 156, height }).footer).toBe(footer);
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
