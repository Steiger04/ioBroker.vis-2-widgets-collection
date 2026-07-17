/**
 * Schema DSL describing the allowed structure of a MUI `ThemeOptions` object.
 *
 * @module lib/theme/themeSchema
 * @remarks
 * The deep validator ({@link module:lib/theme/validateTheme}) walks this schema
 * tree recursively instead of hand-coding nested checks. The tree mirrors the
 * authoritative MUI type definitions found in
 * `@mui/material/styles/createPalette.d.ts`, `createTypography.d.ts` and
 * `createThemeNoVars.d.ts`.
 *
 * Design notes:
 * - `object` nodes use `allowUnknown` to model MUI's module augmentation: an
 *   unknown top-level (or palette) key is a warning, not an error.
 * - `color` is a dedicated leaf kind so the validator applies CSS-color logic
 *   (and rejects gradients), not just `typeof === 'string'`.
 * - `union` models e.g. `PaletteColorOptions = SimplePaletteColorOptions | ColorPartial`
 *   and `cssVariables = boolean | object`.
 * - `record` models `Record<string, X>` shapes (color shade scales, `zIndex`).
 * - `cssObject` models `CSSProperties` leaves (strings, numbers, nested rules).
 * - Functions / symbols are rejected everywhere (non-serializable).
 */

/** How to treat keys not declared in an `object` schema node's `properties`. */
export type UnknownKeyPolicy = 'warn' | 'error' | 'ignore';

/** Common flags available on every schema node. */
type SchemaNodeBase = {
    /** When `true`, a present-but-empty check is skipped (informational for the form). */
    optional?: boolean;
    /** When `true` (as an object property), a missing value is reported as an error. */
    required?: boolean;
};

/** Variant union — discriminated by `kind`. */
type SchemaNodeVariant =
    | {
          kind: 'object';
          properties: Record<string, SchemaNode>;
          allowUnknown?: UnknownKeyPolicy;
      }
    | { kind: 'string' }
    | { kind: 'number'; min?: number; max?: number }
    | { kind: 'boolean' }
    | { kind: 'color' }
    | { kind: 'literal'; values: readonly (string | number)[] }
    | { kind: 'union'; options: SchemaNode[] }
    | { kind: 'array'; items: SchemaNode }
    | { kind: 'record'; values: SchemaNode }
    | { kind: 'cssObject' };

/** One node in the validation schema tree. */
export type SchemaNode = SchemaNodeVariant & SchemaNodeBase;

/** A solid CSS color (hex / rgb / hsl / named / transparent / currentColor …). */
const color: SchemaNode = { kind: 'color', optional: true };

/** A free-form CSS object (used for typography variants and style overrides). */
const cssObject: SchemaNode = { kind: 'cssObject', optional: true };

/**
 * A single palette color slot.
 *
 * @remarks
 * `PaletteColorOptions = SimplePaletteColorOptions | ColorPartial`.
 * `SimplePaletteColorOptions` requires `main`; `ColorPartial` is a record of
 * shade keys (50…900, A100…) each holding a color.
 */
const paletteColor: SchemaNode = {
    kind: 'union',
    optional: true,
    options: [
        {
            kind: 'object',
            optional: true,
            allowUnknown: 'warn',
            properties: {
                light: color,
                main: { kind: 'color', required: true },
                dark: color,
                contrastText: color,
            },
        },
        { kind: 'record', optional: true, values: color },
    ],
};

/** The `palette` branch of `ThemeOptions`. */
const paletteSchema: SchemaNode = {
    kind: 'object',
    optional: true,
    allowUnknown: 'warn',
    properties: {
        mode: { kind: 'literal', values: ['light', 'dark'], optional: true },
        primary: paletteColor,
        secondary: paletteColor,
        error: paletteColor,
        warning: paletteColor,
        info: paletteColor,
        success: paletteColor,
        text: {
            kind: 'object',
            optional: true,
            allowUnknown: 'warn',
            properties: {
                primary: color,
                secondary: color,
                disabled: color,
            },
        },
        background: {
            kind: 'object',
            optional: true,
            allowUnknown: 'warn',
            properties: {
                default: color,
                paper: color,
            },
        },
        common: {
            kind: 'object',
            optional: true,
            allowUnknown: 'warn',
            properties: {
                black: color,
                white: color,
            },
        },
        grey: { kind: 'record', optional: true, values: color },
        divider: color,
        contrastThreshold: { kind: 'number', optional: true },
        tonalOffset: {
            kind: 'union',
            optional: true,
            options: [
                { kind: 'number' },
                {
                    kind: 'object',
                    optional: true,
                    allowUnknown: 'warn',
                    properties: {
                        light: { kind: 'number', optional: true },
                        dark: { kind: 'number', optional: true },
                    },
                },
            ],
        },
        action: {
            kind: 'object',
            optional: true,
            allowUnknown: 'warn',
            properties: {
                active: color,
                hover: color,
                hoverOpacity: { kind: 'number', optional: true, min: 0, max: 1 },
                selected: color,
                selectedOpacity: { kind: 'number', optional: true, min: 0, max: 1 },
                disabled: color,
                disabledOpacity: { kind: 'number', optional: true, min: 0, max: 1 },
                disabledBackground: color,
                focus: color,
                focusOpacity: { kind: 'number', optional: true, min: 0, max: 1 },
                activatedOpacity: { kind: 'number', optional: true, min: 0, max: 1 },
            },
        },
    },
};

/** The `typography` branch of `ThemeOptions`. */
const typographySchema: SchemaNode = {
    kind: 'object',
    optional: true,
    allowUnknown: 'warn',
    properties: {
        fontFamily: { kind: 'string', optional: true },
        fontSize: { kind: 'number', optional: true, min: 1, max: 100 },
        htmlFontSize: { kind: 'number', optional: true, min: 1, max: 100 },
        fontWeightLight: { kind: 'union', optional: true, options: [{ kind: 'string' }, { kind: 'number' }] },
        fontWeightRegular: { kind: 'union', optional: true, options: [{ kind: 'string' }, { kind: 'number' }] },
        fontWeightMedium: { kind: 'union', optional: true, options: [{ kind: 'string' }, { kind: 'number' }] },
        fontWeightBold: { kind: 'union', optional: true, options: [{ kind: 'string' }, { kind: 'number' }] },
        allVariants: cssObject,
        // Explicit variant keys so the standard set does not trip "unknown" warnings.
        h1: cssObject,
        h2: cssObject,
        h3: cssObject,
        h4: cssObject,
        h5: cssObject,
        h6: cssObject,
        subtitle1: cssObject,
        subtitle2: cssObject,
        body1: cssObject,
        body2: cssObject,
        caption: cssObject,
        button: cssObject,
        overline: cssObject,
    },
};

/** The `cssVariables` branch of `ThemeOptions` (`boolean | object`). */
const cssVariablesSchema: SchemaNode = {
    kind: 'union',
    optional: true,
    options: [
        { kind: 'boolean' },
        {
            kind: 'object',
            optional: true,
            allowUnknown: 'warn',
            properties: {
                cssVarPrefix: { kind: 'string', optional: true },
                colorSchemeSelector: { kind: 'string', optional: true },
                rootSelector: { kind: 'string', optional: true },
                disableCssColorScheme: { kind: 'boolean', optional: true },
                shouldSkipGeneratingVar: { kind: 'record', optional: true, values: { kind: 'string', optional: true } },
            },
        },
    ],
};

/** The `spacing` branch (`number | string | (number|string)[]`). */
const spacingSchema: SchemaNode = {
    kind: 'union',
    optional: true,
    options: [
        { kind: 'number' },
        { kind: 'string' },
        {
            kind: 'array',
            optional: true,
            items: { kind: 'union', options: [{ kind: 'number' }, { kind: 'string' }] },
        },
    ],
};

/** The `components` branch (`Record<componentName, options>`). */
const componentsSchema: SchemaNode = {
    kind: 'record',
    optional: true,
    values: {
        kind: 'object',
        optional: true,
        allowUnknown: 'ignore',
        properties: {
            defaultProps: { kind: 'object', optional: true, allowUnknown: 'ignore', properties: {} },
            styleOverrides: cssObject,
            variants: {
                kind: 'array',
                optional: true,
                items: { kind: 'object', optional: true, allowUnknown: 'ignore', properties: {} },
            },
        },
    },
};

/** A permissive object whose keys are all ignored (accepts any plain object). */
const permissiveObject: SchemaNode = { kind: 'object', optional: true, allowUnknown: 'ignore', properties: {} };

/**
 * The validation schema for a complete `ThemeOptions` object.
 *
 * @remarks
 * Unknown top-level keys produce warnings (MUI allows module augmentation).
 */
export const THEME_OPTIONS_SCHEMA: SchemaNode = {
    kind: 'object',
    allowUnknown: 'warn',
    properties: {
        palette: paletteSchema,
        typography: typographySchema,
        shape: {
            kind: 'object',
            optional: true,
            allowUnknown: 'warn',
            properties: {
                borderRadius: { kind: 'number', optional: true, min: 0, max: 64 },
            },
        },
        direction: { kind: 'literal', values: ['ltr', 'rtl'], optional: true },
        spacing: spacingSchema,
        cssVariables: cssVariablesSchema,
        zIndex: { kind: 'record', optional: true, values: { kind: 'number', optional: true } },
        shadows: { kind: 'array', optional: true, items: { kind: 'string' } },
        mixins: permissiveObject,
        transitions: {
            kind: 'object',
            optional: true,
            allowUnknown: 'warn',
            properties: {
                duration: permissiveObject,
                easing: permissiveObject,
            },
        },
        breakpoints: {
            kind: 'object',
            optional: true,
            allowUnknown: 'warn',
            properties: {
                values: permissiveObject,
                unit: { kind: 'string', optional: true },
                step: { kind: 'number', optional: true },
            },
        },
        components: componentsSchema,
        // Non-MUI extension: Google Fonts loaded by name, stored as inlined
        // woff2 data URIs (latin, weights 400/700). Keyed by family name.
        googleFonts: {
            kind: 'record',
            optional: true,
            values: {
                kind: 'array',
                items: {
                    kind: 'object',
                    allowUnknown: 'ignore',
                    properties: {
                        weight: { kind: 'number', optional: true },
                        data: { kind: 'string' },
                    },
                },
            },
        },
        // Non-MUI extension: per-corner border radii (see CornerRadii).
        corners: {
            kind: 'object',
            optional: true,
            allowUnknown: 'ignore',
            properties: {
                topLeft: { kind: 'number', optional: true, min: 0, max: 64 },
                topRight: { kind: 'number', optional: true, min: 0, max: 64 },
                bottomRight: { kind: 'number', optional: true, min: 0, max: 64 },
                bottomLeft: { kind: 'number', optional: true, min: 0, max: 64 },
            },
        },
        unstable_strictMode: { kind: 'boolean', optional: true },
        modularCssLayers: {
            kind: 'union',
            optional: true,
            options: [{ kind: 'boolean' }, { kind: 'string' }],
        },
    },
};
