/**
 * Registry of the theme studio's colour fields (spec A4).
 *
 * @module ThemeConfigWizard/studioColorFields
 * @remarks
 * The ONE declaration of the 11 palette colours the studio edits. Everything that used to list
 * them separately derives from it: the colour groups of PaletteSection and StatusTextSection
 * (one shared renderer), the routing of a validation error to its field and section, the set
 * of paths whose errors render at a field, and the pickers' swatch row. The array order is the
 * swatch-row order; a group renders its fields in the same order. The non-colour studio
 * controls (font family, Google Fonts, corners, spacing, CSS variables) are special UIs and stay
 * outside — a registry for them would be shallow.
 */

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
    /** Translation key of the label suffix shown while the field inherits. */
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
    },
    {
        path: 'palette.secondary.main',
        section: 'palette',
        group: 'accents',
        labelKey: 'theme_wizard_palette_secondary',
        markerKey: 'theme_studio_secondary_derived',
    },
    { path: 'palette.error.main', section: 'statusText', group: 'status', labelKey: 'theme_wizard_palette_error' },
    {
        path: 'palette.warning.main',
        section: 'statusText',
        group: 'status',
        labelKey: 'theme_wizard_palette_warning',
    },
    { path: 'palette.info.main', section: 'statusText', group: 'status', labelKey: 'theme_wizard_palette_info' },
    {
        path: 'palette.success.main',
        section: 'statusText',
        group: 'status',
        labelKey: 'theme_wizard_palette_success',
    },
    {
        path: 'palette.text.primary',
        section: 'statusText',
        group: 'text',
        labelKey: 'theme_wizard_palette_text_primary',
    },
    {
        path: 'palette.text.secondary',
        section: 'statusText',
        group: 'text',
        labelKey: 'theme_wizard_palette_text_secondary',
    },
    {
        path: 'palette.background.default',
        section: 'palette',
        group: 'surface',
        labelKey: 'theme_wizard_palette_background_default',
    },
    {
        path: 'palette.background.paper',
        section: 'palette',
        group: 'surface',
        labelKey: 'theme_wizard_palette_background_paper',
    },
    { path: 'palette.divider', section: 'palette', group: 'surface', labelKey: 'theme_wizard_palette_divider' },
];

/** The fields of one group, in registry order. */
export function colorFieldsOfGroup(group: StudioColorGroup): StudioColorField[] {
    return STUDIO_COLOR_FIELDS.filter(field => field.group === group);
}

/** The fields of one section, in registry order. */
export function colorFieldsOfSection(section: StudioColorSection): StudioColorField[] {
    return STUDIO_COLOR_FIELDS.filter(field => field.section === section);
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
