/**
 * Single source of truth for a color field's effective (base-layer) color.
 *
 * @module lib/helper/resolveEffectiveColor
 * @remarks
 * Declared by the field contract (`ExtendedField.terminal` /
 * `inheritTextStyle` / `fallbackFields`) and consumed by BOTH the editor
 * (`CollectionGradientColorPicker`, for the swatch) and the widget runtime
 * (`propertyResolvers`, for the terminal mapping via `terminalColor`).
 *
 * This is the FIELD CONTRACT (base layer) only — it knows nothing about
 * active/state/marker layers, which the widget resolvers apply on top. See
 * ADR 0004.
 */

import type { Theme } from '@mui/material';
import type { WidgetStyleState } from '@iobroker/types-vis-2/visBaseWidget';
import type { ColorTerminal, ExtendedField } from '../../types/field-definitions/extended-field';
import { validateColorInput } from './colorValidation';

/** Minimal shape needed to read the vis-2 widget CSS `color`. */
export type StyleColor = Pick<WidgetStyleState, 'color'> | undefined;

/** Field-contract slice consumed by {@link resolveEffectiveColor}. */
export type ColorFieldContract = Pick<ExtendedField, 'name' | 'fallbackFields' | 'terminal' | 'inheritTextStyle'>;

/**
 * Maps a terminal category to its concrete theme color.
 *
 * Shared by the picker (via `resolveEffectiveColor`) and the widget resolvers so
 * the terminal → color mapping has exactly one source. See ADR 0004.
 */
export function terminalColor(terminal: ColorTerminal | undefined, theme: Theme): string {
    switch (terminal) {
        case 'primary':
            return theme.palette.primary.main;
        case 'text':
            return theme.palette.text.primary;
        case 'paper':
            return theme.palette.background.paper;
        case 'transparent':
        case undefined:
        default:
            return '';
    }
}

/**
 * Returns the first valid color among the field's `fallbackFields`, or undefined.
 *
 * Empty-string entries (the legacy `fallbackFields: ['']` convention) and
 * non-string / invalid values are skipped.
 */
function firstValidFallback(data: Record<string, unknown>, fallbackFields: string[] | undefined): string | undefined {
    if (!fallbackFields || fallbackFields.length === 0) {
        return undefined;
    }
    for (const name of fallbackFields) {
        if (!name) {
            continue;
        }
        const value = data[name];
        if (typeof value !== 'string' || value.trim() === '') {
            continue;
        }
        const validation = validateColorInput(value);
        if (validation.isValid && validation.normalizedValue.trim() !== '') {
            return validation.normalizedValue;
        }
    }
    return undefined;
}

/**
 * Resolves the effective (base-layer) color for a color field.
 *
 * Cascade (general → specific; most specific set value wins):
 * 1. explicit override (`data[field.name]`)
 * 2. first valid `fallbackFields` value
 * 3. vis-2 widget CSS `color` (only when `field.inheritTextStyle`)
 * 4. terminal default ({@link terminalColor})
 *
 * @param field - Field contract (name, fallbackFields, terminal, inheritTextStyle).
 * @param data  - Widget data map (explicit values + fallback sources).
 * @param theme - Effective MUI theme (for the terminal default).
 * @param textStyles - vis-2 widget style fragment carrying `color` (may be undefined).
 * @returns The effective color string (never null; `''` for transparent/inherit).
 */
export function resolveEffectiveColor(
    field: ColorFieldContract,
    data: Record<string, unknown>,
    theme: Theme,
    textStyles: StyleColor,
): string {
    const explicit = field.name ? data[field.name] : undefined;

    // 1. Explicit override
    if (typeof explicit === 'string' && explicit.trim() !== '') {
        const validation = validateColorInput(explicit);
        if (validation.isValid && validation.normalizedValue.trim() !== '') {
            return validation.normalizedValue;
        }
    }

    // 2. First valid fallback field
    const fallback = firstValidFallback(data, field.fallbackFields);
    if (fallback !== undefined) {
        return fallback;
    }

    // 3. vis-2 widget CSS color (text-bearing fields only)
    if (field.inheritTextStyle === true) {
        const styleColor = textStyles?.color;
        if (typeof styleColor === 'string' && styleColor.trim() !== '') {
            return styleColor;
        }
    }

    // 4. Terminal default
    return terminalColor(field.terminal, theme);
}
