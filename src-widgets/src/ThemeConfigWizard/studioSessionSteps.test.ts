/**
 * Studio session — the pure decisions behind the draft lifecycle.
 *
 * @module ThemeConfigWizard/studioSessionSteps.test
 * @remarks
 * Pins the policy the session hook only wires (ADR-0020 addendum 2026-11-02): when the stored
 * theme may replace the draft, when the draft counts as dirty, when Save is allowed and which
 * drafts count as valid. The wiring (load, canvas mirror, end invariant) is pinned in
 * useStudioSession.hook.test.ts; how a stored state value becomes a draft is pinned in
 * lib/theme/storedTheme.test.ts.
 */
import { describe, expect, it } from 'vitest';

import type { UserTheme } from '../lib/theme/themeTypes';
import { setNestedValue } from '../lib/theme/themeUtils';
import { canSave, isDirty, shouldRebase, validateDraft } from './studioSessionSteps';

const SEED: UserTheme = { palette: { primary: { main: '#ff0000' } } };

describe('shouldRebase', () => {
    const STORED: UserTheme = { palette: { primary: { main: '#0000ff' } } };

    it('rebases an untouched draft onto the theme that arrived', () => {
        expect(shouldRebase({ palette: { primary: { main: '#ff0000' } } }, SEED, STORED)).toBe(true);
    });

    it('keeps a draft the user already touched', () => {
        expect(shouldRebase({ palette: { primary: { main: '#00ff00' } } }, SEED, STORED)).toBe(false);
    });

    it('rebases the empty draft when there was no seed', () => {
        expect(shouldRebase({}, {}, STORED)).toBe(true);
    });

    it('keeps an edit made while waiting for the first load without a seed', () => {
        expect(shouldRebase({ spacing: 4 }, {}, STORED)).toBe(false);
    });

    it('leaves an untouched draft alone when the theme that arrived is the one it already shows', () => {
        expect(shouldRebase({ palette: { primary: { main: '#ff0000' } } }, SEED, SEED)).toBe(false);
    });
});

describe('isDirty', () => {
    it('is clean when the draft equals the snapshot', () => {
        expect(isDirty({ palette: { primary: { main: '#ff0000' } } }, SEED)).toBe(false);
    });

    it('is clean when the draft holds the values of the snapshot in another sequence', () => {
        const draft = { spacing: 4, corners: { topLeft: 8, topRight: 8, bottomRight: 8, bottomLeft: 8 } };
        const snapshot = { corners: { bottomLeft: 8, bottomRight: 8, topLeft: 8, topRight: 8 }, spacing: 4 };

        expect(isDirty(draft, snapshot)).toBe(false);
    });

    it('is dirty when a list of the draft holds its entries in another sequence', () => {
        // Shortened lists: the type asks for all 25 shadows.
        const draft = { shadows: ['none', '0 1px 2px #000'] } as unknown as UserTheme;
        const snapshot = { shadows: ['0 1px 2px #000', 'none'] } as unknown as UserTheme;

        expect(isDirty(draft, snapshot)).toBe(true);
    });

    it('is dirty when the draft differs from the snapshot', () => {
        expect(isDirty({}, SEED)).toBe(true);
    });
});

describe('canSave', () => {
    it('allows a valid, dirty draft that is not being saved', () => {
        expect(canSave({ valid: true, dirty: true, saving: false })).toBe(true);
    });

    it.each([
        ['invalid', { valid: false, dirty: true, saving: false }],
        ['clean', { valid: true, dirty: false, saving: false }],
        ['already saving', { valid: true, dirty: true, saving: true }],
    ])('refuses a draft that is %s', (_label, input) => {
        expect(canSave(input)).toBe(false);
    });
});

describe('validateDraft', () => {
    it('accepts a draft the schema and the resolution both keep', () => {
        const draft = { palette: { primary: { main: '#ff0000' }, divider: 'rgba(0, 0, 0, 0.12)' } };
        expect(validateDraft(draft)).toEqual({ isValid: true, theme: draft, issues: [] });
    });

    // A slot's error names the slot (it has alternative shapes); the Studio shows it at the
    // slot's field (studioColorFields.colorFieldForIssuePath).
    it.each([
        ['a named colour', 'primary', 'red'],
        ['transparent', 'success', 'transparent'],
    ])('reports %s as an accent colour the widgets cannot compute with', (_label, slot, main) => {
        const result = validateDraft({ palette: { [slot]: { main } } });
        expect(result.isValid).toBe(false);
        expect(result.theme).toBeUndefined();
        expect(result.issues).toEqual([
            expect.objectContaining({
                path: `palette.${slot}`,
                severity: 'error',
                code: 'uncomputable-color',
            }),
        ]);
    });

    // MUI computes with text, surfaces and the divider as well (alpha, lighten, darken): a
    // colour name saved there took the widgets down.
    it.each([
        'palette.text.primary',
        'palette.text.secondary',
        'palette.background.default',
        'palette.background.paper',
        'palette.divider',
    ])('reports a colour name at %s, at that field', path => {
        const result = validateDraft(setNestedValue({ palette: { primary: { main: '#ff0000' } } }, path, 'white'));
        expect(result.isValid).toBe(false);
        expect(result.issues).toEqual([
            expect.objectContaining({ path, severity: 'error', code: 'uncomputable-color' }),
        ]);
    });

    it('reports a colour name in a variant of an accent colour', () => {
        expect(validateDraft({ palette: { primary: { main: '#ff0000', light: 'red' } } }).isValid).toBe(false);
    });

    it("keeps the schema's own issues", () => {
        const result = validateDraft({ corners: { topLeft: -1 }, palette: { info: { main: 'red' } } });
        expect(result.issues.map(issue => [issue.path, issue.code])).toEqual([
            ['corners.topLeft', 'number-out-of-range'],
            ['palette.info', 'uncomputable-color'],
        ]);
    });
    // The vis-2 editor owns `--mui-*` on `:root` (spec B17).
    it('rejects the CSS variables prefix mui, reserved by the vis-2 editor', () => {
        const result = validateDraft({ cssVariables: { cssVarPrefix: 'mui' } });
        expect(result.isValid).toBe(false);
        expect(result.issues).toEqual([
            expect.objectContaining({
                path: 'cssVariables.cssVarPrefix',
                severity: 'error',
                code: 'reserved-css-var-prefix',
            }),
        ]);
    });

    it.each<[string, UserTheme]>([
        ['cssVariables: true', { cssVariables: true }],
        ['an own prefix', { cssVariables: { cssVarPrefix: 'my' } }],
        ['the default prefix vis2c', { cssVariables: { cssVarPrefix: 'vis2c' } }],
    ])('accepts %s', (_label, draft) => {
        expect(validateDraft(draft).isValid).toBe(true);
    });
});
