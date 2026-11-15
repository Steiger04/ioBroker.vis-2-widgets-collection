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
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

import { describe, expect, it } from 'vitest';

import { STUDIO_COLOR_FIELDS } from '../../ThemeConfigWizard/studioColorFields';
import { createChromeTheme } from './chromeTheme';
import { BUNDLED_FONTS } from './fontCatalogue';
import { resolveCollectionTheme } from './resolveCollectionTheme';
import { getNestedValue } from './themeUtils';
import { isComputableColor, validateThemeOptions } from './validateTheme';

// vitest is launched with cwd = src-widgets, so the repo root is one level up.
const ioPackage = JSON.parse(readFileSync(resolve(process.cwd(), '..', 'io-package.json'), 'utf8')) as {
    instanceObjects: { _id: string; common: { desc?: unknown } }[];
};

/** The description as an MCP client reads it from the theme state's object. */
const description = ((): string => {
    const desc = ioPackage.instanceObjects.find(object => object._id === 'theme')?.common.desc;
    return typeof desc === 'string' ? desc : '';
})();

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

    // The ranges exactly as the description words them; the bounds in `themes` are read off that
    // wording, not off the schema — the test must be able to disagree with the code.
    it.each([
        {
            wording: 'typography.fontSize: number from 8 to 24',
            themes: [{ typography: { fontSize: 8 } }, { typography: { fontSize: 24 } }],
        },
        {
            wording: 'each a number from 0 to 96',
            themes: [
                { corners: { topLeft: 0, topRight: 0, bottomRight: 0, bottomLeft: 0 } },
                { corners: { topLeft: 96, topRight: 96, bottomRight: 96, bottomLeft: 96 } },
            ],
        },
        {
            wording: 'spacing: number from 0 to 16',
            themes: [{ spacing: 0 }, { spacing: 16 }],
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
});
