/**
 * The reckoning of a Theme-Auftrag: what an order may set, and the theme that results (ADR-0115).
 *
 * @module ThemeConfigWizard/themeOrder
 * @remarks
 * A Theme-Auftrag is the one-time instruction of the Bauzeit-KI to change the user theme. It
 * names only what should change and is worked into the stored theme: what it does not name
 * stays. This module is the one list of what an order can name ({@link THEME_ORDER_SETTINGS})
 * — the fields the assistant fills are built from it ({@link module:lib/themeOrderFields}) —
 * and the pure step from a theme and an order's data to the next theme
 * ({@link applyThemeOrder}). When an order is carried out, and what happens to it afterwards,
 * is not decided here ({@link module:ThemeConfigWizard/carryOutThemeOrder}).
 *
 * - **One source per value.** The settings are built from the stocks of the Theme Studio and
 *   keep no list of their own: one colour setting per entry of the colour register
 *   ({@link module:ThemeConfigWizard/studioColorFields}), the presets and their palette-only
 *   merge ({@link module:lib/theme/presets}), the font catalogue
 *   ({@link module:lib/theme/fontCatalogue}). A setting writes what the studio writes for the
 *   same control: a font's stack, one radius into all four corners.
 * - **Sequence.** The settings are worked in in the order of the list: the reset first (the
 *   empty theme as the start), then the preset (the colours only), then the single values — a
 *   single colour lies on top of a preset.
 * - **Rückfall-Regel.** A value that cannot be used is skipped, the rest holds. A setting reads
 *   the form of its value (a catalogue name, a number of the studio's range); whether the resulting theme is usable is
 *   decided by the theme validator ({@link module:lib/theme/validateTheme.validateThemeOptions}),
 *   as it is when the stored theme is read ({@link module:lib/theme/storedTheme}) and when the
 *   studio saves — so an order writes no colour the widgets cannot compute with, in any of the
 *   colour settings.
 * - **Repeatable.** The same order on the same theme yields the same theme, and on its own
 *   result changes nothing.
 * - Not in the list, and so never touched without a reset: Google fonts, component overrides,
 *   CSS variables.
 */

import { FONT_CATALOGUE } from '../lib/theme/fontCatalogue';
import { applyPreset, THEME_PRESETS } from '../lib/theme/presets';
import type { UserTheme } from '../lib/theme/themeTypes';
import { setNestedValue, THEME_CONTROL_RANGES, THEME_MODES } from '../lib/theme/themeUtils';
import { validateThemeOptions } from '../lib/theme/validateTheme';
import { STUDIO_COLOR_FIELDS } from './studioColorFields';

/** How the assistant fills a setting: the kind of field, and for a selection its values. */
export type ThemeOrderInput =
    { type: 'checkbox' } | { type: 'select'; options: readonly string[] } | { type: 'color' } | { type: 'number' };

/** One thing a Theme-Auftrag can set. */
export interface ThemeOrderSetting {
    /** The key in the order's data, and the name of the field the assistant fills. */
    name: string;
    /** Translation key of the field's label — the Theme Studio's label of the same control. */
    labelKey: string;
    /** The field the assistant fills. */
    input: ThemeOrderInput;
    /**
     * Works a set value into a theme.
     *
     * @param theme - The theme so far; never changed.
     * @param value - The value as the order holds it, unchecked.
     * @returns The theme with the value — whether it is usable is checked on the result — or
     *   `undefined` for a value that has not the form of this setting.
     */
    apply: (theme: UserTheme, value: unknown) => UserTheme | undefined;
}

/** A number as an order may hold it: a number, or a text that is nothing but one. */
const numberOf = (value: unknown): number | undefined => {
    const number = typeof value === 'string' && value.trim() !== '' ? Number(value) : value;
    return typeof number === 'number' && Number.isFinite(number) ? number : undefined;
};

/**
 * A setting that stores a number of the studio's range of that name
 * ({@link module:lib/theme/themeUtils.THEME_CONTROL_RANGES}): an order takes what the studio's
 * control would save. The theme itself may hold more (a hand-written one) — that is the
 * validator's range, and not what an order is promised to take.
 */
const numberSetting = (
    name: keyof typeof THEME_CONTROL_RANGES,
    labelKey: string,
    store: (theme: UserTheme, value: number) => UserTheme,
): ThemeOrderSetting => ({
    name,
    labelKey,
    input: { type: 'number' },
    apply: (theme, value) => {
        const number = numberOf(value);
        const { min, max } = THEME_CONTROL_RANGES[name];
        return number === undefined || number < min || number > max ? undefined : store(theme, number);
    },
});

/**
 * The name of a colour setting, from the colour's path in the theme: the palette's parts in
 * camel case, without the `main` of a colour slot (`palette.primary.main` → `primary`,
 * `palette.text.primary` → `textPrimary`).
 */
const colorSettingName = (path: string): string =>
    path
        .split('.')
        .filter((segment, index, all) => index > 0 && !(segment === 'main' && index === all.length - 1))
        .map((segment, index) => (index === 0 ? segment : segment[0].toUpperCase() + segment.slice(1)))
        .join('');

/** What a Theme-Auftrag can set, in the order the settings are worked in. */
export const THEME_ORDER_SETTINGS: readonly ThemeOrderSetting[] = [
    {
        name: 'reset',
        labelKey: 'theme_wizard_reset',
        input: { type: 'checkbox' },
        // Only a plain `true` empties the theme: a reset by mistake loses everything.
        apply: (_theme, value) => (value === true ? {} : undefined),
    },
    {
        name: 'preset',
        labelKey: 'theme_studio_presets',
        input: { type: 'select', options: THEME_PRESETS.map(preset => preset.id) },
        apply: (theme: UserTheme, value: unknown): UserTheme | undefined => {
            const preset = THEME_PRESETS.find(one => one.id === value);
            return preset && applyPreset(theme, preset);
        },
    },
    {
        name: 'mode',
        labelKey: 'theme_wizard_palette_mode',
        input: { type: 'select', options: THEME_MODES },
        apply: (theme, value) => setNestedValue(theme, 'palette.mode', value),
    },
    ...STUDIO_COLOR_FIELDS.map((field): ThemeOrderSetting => ({
        name: colorSettingName(field.path),
        labelKey: field.labelKey,
        input: { type: 'color' },
        apply: (theme, value) => setNestedValue(theme, field.path, value),
    })),
    {
        name: 'fontFamily',
        labelKey: 'theme_wizard_typography_font_family',
        // The catalogue's names; stored is the entry's font stack, as the studio stores it.
        input: { type: 'select', options: FONT_CATALOGUE.map(font => font.label) },
        apply: (theme: UserTheme, value: unknown): UserTheme | undefined => {
            const font = FONT_CATALOGUE.find(one => one.label === value);
            return font && setNestedValue(theme, 'typography.fontFamily', font.value);
        },
    },
    numberSetting('fontSize', 'theme_wizard_typography_font_size', (theme, size) =>
        setNestedValue(theme, 'typography.fontSize', size),
    ),
    // One radius for all four corners, as the studio's linked radius writes it.
    numberSetting('cornerRadius', 'theme_wizard_layout_border_radius', (theme, radius) =>
        setNestedValue(theme, 'corners', {
            topLeft: radius,
            topRight: radius,
            bottomRight: radius,
            bottomLeft: radius,
        }),
    ),
    numberSetting('spacing', 'theme_wizard_layout_spacing', (theme, spacing) =>
        setNestedValue(theme, 'spacing', spacing),
    ),
];

/**
 * Works the data of a Theme-Auftrag into a theme.
 *
 * @param theme - A valid user theme (the stored theme as read); never changed.
 * @param order - The order's data as the assistant wrote it: unchecked, with keys that are no
 *   setting (the host adds `bindings`).
 * @returns The theme with every usable setting of the order. A setting the order does not name
 *   (`undefined`, `null`), a value that has not the setting's form and a value the theme
 *   validator rejects leave the theme as it was. Applying the same order to the result again
 *   yields the same theme.
 */
export function applyThemeOrder(theme: UserTheme, order: Readonly<Record<string, unknown>>): UserTheme {
    let next = theme;
    for (const setting of THEME_ORDER_SETTINGS) {
        const value = order[setting.name];
        if (value === undefined || value === null) {
            continue;
        }
        const candidate = setting.apply(next, value);
        // `next` is valid, so an error in the candidate comes from this value: it is skipped.
        if (candidate && validateThemeOptions(candidate).isValid) {
            next = candidate;
        }
    }
    return next;
}
