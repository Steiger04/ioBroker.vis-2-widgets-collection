/**
 * The theme state's description (io-package.json) against the theme validator.
 *
 * @module lib/theme/themeStateDescription.test
 * @remarks
 * The description of the theme state is an AI channel (ADR-0115): an external MCP client reads
 * it from the object and has to be able to write a usable theme from that text alone. The text
 * is hand-written JSON metadata and cannot import the validator, so this test is the gate that
 * keeps it from becoming a second truth: a theme built only from what the description says —
 * its example, its stated ranges, its listed font values — must pass
 * {@link module:lib/theme/validateTheme.validateThemeOptions} and cover what the studio knows.
 * The validator wins on any disagreement; then the description is what gets corrected.
 */
import { describe, expect, it } from 'vitest';

import { STUDIO_COLOR_FIELDS } from '../../ThemeConfigWizard/studioColorFields';
import { themeStateDescription } from '../testing/themeStateDescription';
import { WIDGET_FRAME_KEYS, WIDGET_FRAME_SETTINGS } from '../widgetFrame';
import { createChromeTheme } from './chromeTheme';
import { BUNDLED_FONTS } from './fontCatalogue';
import { resolveCollectionTheme } from './resolveCollectionTheme';
import { getNestedValue, THEME_CONTROL_RANGES as RANGES } from './themeUtils';
import { isComputableColor, validateThemeOptions } from './validateTheme';

/** The description as an MCP client reads it from the theme state's object. */
const description = themeStateDescription();

/** Marker in front of the example theme, which closes the description. */
const EXAMPLE_MARKER = 'Example: ';

/** The example theme of the description: what a client copies and adapts. */
function exampleTheme(): Record<string, unknown> {
    const start = description.indexOf(EXAMPLE_MARKER);
    if (start < 0) {
        throw new Error('The description carries no example theme.');
    }
    return JSON.parse(description.slice(start + EXAMPLE_MARKER.length)) as Record<string, unknown>;
}

/** The validator's errors for a theme (warnings left out). */
const errorsOf = (theme: unknown): unknown[] =>
    validateThemeOptions(theme).issues.filter(issue => issue.severity === 'error');

describe('theme state description (AI channel for MCP clients)', () => {
    it('is a plain text on the theme state object', () => {
        expect(description).not.toBe('');
    });

    it('carries an example theme the validator accepts without any issue', () => {
        const result = validateThemeOptions(exampleTheme());

        // No error and no warning either: the example uses only keys the validator knows.
        expect(result.issues).toEqual([]);
        expect(result.isValid).toBe(true);
    });

    it('shows every colour of the studio in the example, in a form MUI can compute', () => {
        const example = exampleTheme();

        for (const field of STUDIO_COLOR_FIELDS) {
            const color = getNestedValue<string>(example, field.path);
            expect(typeof color, field.path).toBe('string');
            expect(isComputableColor(color ?? ''), field.path).toBe(true);
        }
    });

    it('shows mode, font family, font size, corner radius and spacing in the example', () => {
        const example = exampleTheme();

        expect(['light', 'dark']).toContain(getNestedValue(example, 'palette.mode'));
        expect(BUNDLED_FONTS.map(font => font.value)).toContain(getNestedValue(example, 'typography.fontFamily'));
        expect(typeof getNestedValue(example, 'typography.fontSize')).toBe('number');
        for (const corner of ['topLeft', 'topRight', 'bottomRight', 'bottomLeft']) {
            expect(typeof getNestedValue(example, `corners.${corner}`), corner).toBe('number');
        }
        expect(typeof getNestedValue(example, 'spacing')).toBe('number');
    });

    it('carries an example the widgets take over as written', () => {
        // The values are the literals of the example text, resolved onto a light host: every one
        // of them has to win over the host.
        const theme = resolveCollectionTheme(createChromeTheme('light'), {}, exampleTheme());

        expect(theme.palette.mode).toBe('dark');
        expect(theme.palette.primary.main).toBe('#38bdf8');
        expect(theme.palette.text.primary).toBe('#e6edf3');
        expect(theme.palette.background.paper).toBe('#181c23');
        expect(theme.palette.divider).toBe('#2a313c');
        expect(theme.typography.fontFamily).toBe("'Inter', system-ui, sans-serif");
        expect(theme.typography.fontSize).toBe(14);
        expect(theme.shape.borderRadius).toBe(8);
        expect(theme.spacing(1)).toBe('8px');
    });

    // The ranges as the description words them. The number ranges are the ones of the studio's
    // controls, written once (THEME_CONTROL_RANGES); the validator, which may accept more, has to
    // accept both ends.
    it.each([
        {
            wording: `typography.fontSize: number from ${RANGES.fontSize.min} to ${RANGES.fontSize.max}`,
            themes: [RANGES.fontSize.min, RANGES.fontSize.max].map(fontSize => ({ typography: { fontSize } })),
        },
        {
            wording: `each a number from ${RANGES.cornerRadius.min} to ${RANGES.cornerRadius.max}`,
            themes: [RANGES.cornerRadius.min, RANGES.cornerRadius.max].map(radius => ({
                corners: { topLeft: radius, topRight: radius, bottomRight: radius, bottomLeft: radius },
            })),
        },
        {
            wording: `spacing: number from ${RANGES.spacing.min} to ${RANGES.spacing.max}`,
            themes: [RANGES.spacing.min, RANGES.spacing.max].map(spacing => ({ spacing })),
        },
        {
            wording: 'palette.mode: "light" or "dark"',
            themes: [{ palette: { mode: 'light' } }, { palette: { mode: 'dark' } }],
        },
    ])('states a range the validator accepts at both ends: $wording', ({ wording, themes }) => {
        expect(description).toContain(wording);
        for (const theme of themes) {
            expect(errorsOf(theme), JSON.stringify(theme)).toEqual([]);
        }
    });

    it('lists exactly the bundled font values, verbatim', () => {
        // A bundled face only loads when the stored stack equals a catalogue value character by
        // character, so the description quotes the values instead of describing them.
        // The list is one sentence: from its lead-in to the next full stop.
        const start = description.indexOf('Bundled fonts');
        const end = description.indexOf('. ', start);
        const listed = [...description.slice(start, end).matchAll(/"([^"]+)"/g)].map(match => match[1]);

        expect(listed).toEqual(BUNDLED_FONTS.map(font => font.value));
    });

    it('says how to write: the whole theme, as JSON text', () => {
        // Pre-decided content (Grilling 2026-11-15): JSON text, unnamed values are lost on writing,
        // a single unusable value is ignored.
        expect(description).toContain('JSON text');
        expect(description).toContain('write the whole theme back');
        expect(description).toContain('A single invalid value is ignored');
    });

    // ADR-0124 no. 7: a client that changes a status colour learns that the heating widgets take it.
    it('says in one sentence which studio colours the heating widgets take, and that warning means warmth there', () => {
        const sentences = description.split('. ').filter(part => part.includes('heating widgets'));
        const studioPaths = STUDIO_COLOR_FIELDS.map(field => field.path);

        expect(sentences).toHaveLength(1);
        for (const slot of ['palette.error', 'palette.warning', 'palette.info']) {
            expect(studioPaths).toContain(`${slot}.main`);
            expect(sentences[0], slot).toContain(slot);
        }
        expect(sentences[0]).toContain('not a warning');
    });
});

// ADR-0117: the Rahmenvorgaben are a key of the same theme; an MCP client learns their shape here.
describe('ticket 07: the Rahmenvorgaben in the theme state description', () => {
    const numberKeys = ['basePadding', 'baseElevation'] as const;
    const booleanKeys = WIDGET_FRAME_KEYS.filter(key => WIDGET_FRAME_SETTINGS[key].kind === 'boolean');

    it('names every boolean Rahmenvorgabe as true or false, and the validator accepts both', () => {
        const sentence = description.split('. ').find(part => part.includes('true or false')) ?? '';

        expect(booleanKeys.filter(key => !sentence.includes(`widgetFrame.${key}`))).toEqual([]);
        for (const key of booleanKeys) {
            for (const value of [true, false]) {
                expect(errorsOf({ widgetFrame: { [key]: value } }), `${key} ${value}`).toEqual([]);
            }
        }
    });

    it('knows every number Rahmenvorgabe', () => {
        expect(WIDGET_FRAME_KEYS.filter(key => WIDGET_FRAME_SETTINGS[key].kind === 'number')).toEqual([...numberKeys]);
    });

    it.each(numberKeys)('states the range of %s, which the validator accepts at both ends', key => {
        const setting = WIDGET_FRAME_SETTINGS[key];
        const whole = Number.isInteger(setting.step);

        expect(description).toContain(
            `widgetFrame.${key}: ${whole ? 'whole number' : 'number'} from ${setting.min} to ${setting.max}`,
        );
        for (const value of [setting.min, setting.max]) {
            expect(errorsOf({ widgetFrame: { [key]: value } }), `${key} ${value}`).toEqual([]);
        }
        expect(errorsOf({ widgetFrame: { [key]: setting.max + 1 } })).not.toEqual([]);
        if (whole) {
            expect(errorsOf({ widgetFrame: { [key]: setting.min + 0.5 } })).not.toEqual([]);
        }
    });

    it('names the standard an unset Rahmenvorgabe falls back to', () => {
        expect(description).toContain(
            `padding ${WIDGET_FRAME_SETTINGS.basePadding.standard}, elevation ${WIDGET_FRAME_SETTINGS.baseElevation.standard} and false for the rest`,
        );
        expect(booleanKeys.every(key => WIDGET_FRAME_SETTINGS[key].standard === false)).toBe(true);
    });
});
