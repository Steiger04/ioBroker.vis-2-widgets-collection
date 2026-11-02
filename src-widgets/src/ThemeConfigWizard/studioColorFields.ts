/**
 * Registry of the theme studio's colour fields (spec A4).
 *
 * @module ThemeConfigWizard/studioColorFields
 * @remarks
 * The ONE declaration of the 11 palette colours the studio edits. Everything that used to list
 * them separately derives from it: the colour groups of PaletteSection and StatusTextSection
 * (one shared renderer), the routing of a validation error to its field and section, the set
 * of paths whose errors render at a field, and the pickers' swatch row. The array order is the
 * swatch-row order; a group renders its fields in the same order. Each field also carries its
 * location hint (where the colour shows up) and, for the two fields the resolution derives
 * from the primary, the derivation and its label marker. The non-colour studio
 * controls (font family, Google Fonts, corners, spacing, CSS variables) are special UIs and stay
 * outside — a registry for them would be shallow.
 */

import type { Theme } from '@mui/material/styles';

import type { UserTheme } from '../lib/theme/themeTypes';
import { getNestedValue } from '../lib/theme/themeUtils';

/** Studio section that renders a colour field (the panel's section keys). */
export type StudioColorSection = 'palette' | 'statusText';

/** Colour group inside a section. */
export type StudioColorGroup = 'accents' | 'surface' | 'status' | 'text';

/** One colour field of the studio. */
export interface StudioColorField {
    /** Theme path (dot-separated) the field edits. */
    path: string;
    /** Section that renders the field. */
    section: StudioColorSection;
    /** Group inside the section. */
    group: StudioColorGroup;
    /** Translation key of the field label. */
    labelKey: string;
    /** Translation key of the field's location hint: where the colour shows up. */
    hintKey: string;
    /**
     * The field the resolution derives this one from while it inherits (spec A4). With
     * `userSourceOnly`, only a usable USER value of the source is derived from; otherwise the
     * effective source (the editor theme's value included) is followed.
     */
    derivedFrom?: { path: string; userSourceOnly: boolean };
    /** Translation key of the label suffix shown while the field is derived (needs `derivedFrom`). */
    markerKey?: string;
}

/** One colour group: its section and title. Array order is the render order. */
export interface StudioColorGroupDef {
    key: StudioColorGroup;
    section: StudioColorSection;
    titleKey: string;
}

/** The colour groups in render order. */
export const STUDIO_COLOR_GROUPS: ReadonlyArray<StudioColorGroupDef> = [
    { key: 'accents', section: 'palette', titleKey: 'theme_studio_group_accents' },
    { key: 'surface', section: 'palette', titleKey: 'theme_studio_group_surface' },
    { key: 'status', section: 'statusText', titleKey: 'theme_studio_group_status' },
    { key: 'text', section: 'statusText', titleKey: 'theme_studio_group_text' },
];

/** The studio's colour fields, in swatch-row order. */
export const STUDIO_COLOR_FIELDS: ReadonlyArray<StudioColorField> = [
    {
        path: 'palette.primary.main',
        section: 'palette',
        group: 'accents',
        labelKey: 'theme_wizard_palette_primary',
        hintKey: 'theme_studio_hint_primary',
    },
    {
        path: 'palette.secondary.main',
        section: 'palette',
        group: 'accents',
        labelKey: 'theme_wizard_palette_secondary',
        hintKey: 'theme_studio_hint_secondary',
        // withDerivedSecondary: triadic partner of a user primary only.
        derivedFrom: { path: 'palette.primary.main', userSourceOnly: true },
        markerKey: 'theme_studio_secondary_derived',
    },
    {
        path: 'palette.error.main',
        section: 'statusText',
        group: 'status',
        labelKey: 'theme_wizard_palette_error',
        hintKey: 'theme_studio_hint_error',
    },
    {
        path: 'palette.warning.main',
        section: 'statusText',
        group: 'status',
        labelKey: 'theme_wizard_palette_warning',
        hintKey: 'theme_studio_hint_warning',
    },
    {
        path: 'palette.info.main',
        section: 'statusText',
        group: 'status',
        labelKey: 'theme_wizard_palette_info',
        hintKey: 'theme_studio_hint_info',
    },
    {
        path: 'palette.success.main',
        section: 'statusText',
        group: 'status',
        labelKey: 'theme_wizard_palette_success',
        hintKey: 'theme_studio_hint_success',
    },
    {
        path: 'palette.text.primary',
        section: 'statusText',
        group: 'text',
        labelKey: 'theme_wizard_palette_text_primary',
        hintKey: 'theme_studio_hint_text_primary',
        // withPrimaryAsText: follows the effective primary (user or editor theme).
        derivedFrom: { path: 'palette.primary.main', userSourceOnly: false },
        markerKey: 'theme_studio_text_follows_primary',
    },
    {
        path: 'palette.text.secondary',
        section: 'statusText',
        group: 'text',
        labelKey: 'theme_wizard_palette_text_secondary',
        hintKey: 'theme_studio_hint_text_secondary',
    },
    {
        path: 'palette.background.default',
        section: 'palette',
        group: 'surface',
        labelKey: 'theme_wizard_palette_background_default',
        hintKey: 'theme_studio_hint_background_default',
    },
    {
        path: 'palette.background.paper',
        section: 'palette',
        group: 'surface',
        labelKey: 'theme_wizard_palette_background_paper',
        hintKey: 'theme_studio_hint_background_paper',
    },
    {
        path: 'palette.divider',
        section: 'palette',
        group: 'surface',
        labelKey: 'theme_wizard_palette_divider',
        hintKey: 'theme_studio_hint_divider',
    },
];

/** The fields of one group, in registry order. */
export function colorFieldsOfGroup(group: StudioColorGroup): StudioColorField[] {
    return STUDIO_COLOR_FIELDS.filter(field => field.group === group);
}

/** The fields of one section, in registry order. */
export function colorFieldsOfSection(section: StudioColorSection): StudioColorField[] {
    return STUDIO_COLOR_FIELDS.filter(field => field.section === section);
}

/**
 * The derivation marker of a field: its `markerKey` while the resolution derives the field's
 * effective colour from its source, else `undefined`.
 *
 * @remarks
 * Only an inheriting field (no own value) is derived. A `userSourceOnly` derivation also needs
 * a user value of the source that the resolution kept — an unusable one is dropped, the
 * resolved source then differs from the stored one and nothing is derived.
 * @param field - The colour field.
 * @param theme - The user theme (studio draft).
 * @param resolved - The resolved theme for `theme` (the studio's effective colours).
 * @returns The marker's translation key, or `undefined`.
 */
export function derivationMarkerKey(
    field: StudioColorField,
    theme: UserTheme,
    resolved: Theme | undefined,
): string | undefined {
    const { derivedFrom, markerKey } = field;
    if (!derivedFrom || !markerKey || getNestedValue(theme, field.path) !== undefined) {
        return undefined;
    }
    if (!derivedFrom.userSourceOnly) {
        return markerKey;
    }
    const userSource = getNestedValue<string>(theme, derivedFrom.path);
    return userSource !== undefined && getNestedValue<string>(resolved, derivedFrom.path) === userSource
        ? markerKey
        : undefined;
}

/** The palette slot of a path: its first two segments (`palette.primary`, `palette.divider`). */
const slotOf = (path: string): string => path.split('.').slice(0, 2).join('.');

/**
 * The field a validation issue at `path` belongs to (its error renders there), if any.
 *
 * @remarks
 * Besides the field path itself, a slot (`palette.<slot>`) counts when it holds exactly one
 * field: the validator reports a broken `palette.<slot>.main` at `palette.<slot>` (the slot is
 * a union, and neither option fits). A slot shared by several fields (`palette.text`) and the
 * palette itself stay unmapped.
 * @param path - Issue path as reported by the validator.
 * @returns The field the issue belongs to, or `undefined`.
 */
export function colorFieldForIssuePath(path: string): StudioColorField | undefined {
    const exact = STUDIO_COLOR_FIELDS.find(field => field.path === path);
    if (exact || slotOf(path) !== path || !path.includes('.')) {
        return exact;
    }
    const children = STUDIO_COLOR_FIELDS.filter(field => field.path.slice(0, field.path.lastIndexOf('.')) === path);
    return children.length === 1 ? children[0] : undefined;
}

/**
 * The section that renders the colour field(s) a path belongs to — the field itself, its slot
 * (`palette.primary` for a broken slot) or a slot variant without a field (`palette.error.dark`).
 *
 * @param path - Issue path as reported by the validator.
 * @returns The owning section, or `undefined` for paths outside the colour fields' slots.
 */
export function colorSectionForPath(path: string): StudioColorSection | undefined {
    if (!path.startsWith('palette.')) {
        return undefined;
    }
    const slot = slotOf(path);
    return STUDIO_COLOR_FIELDS.find(field => slotOf(field.path) === slot)?.section;
}
