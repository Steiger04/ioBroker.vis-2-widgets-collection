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
 *
 * `resolveEffectiveSolidColor` walks the same cascade for slots that can only
 * draw a solid color (borders, separators, shadows) and accepts a stage only
 * with its Repräsentative Vollfarbe (`lib/helper/colorDerivation`).
 */

import type { Theme } from '@mui/material';
import type { WidgetStyleState } from '@iobroker/types-vis-2/visBaseWidget';
import type { ColorTerminal, ExtendedField } from '../../types/field-definitions/extended-field';
import { solidOf } from './colorDerivation';
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
        case 'divider':
            return theme.palette.divider;
        case 'textSecondary':
            return theme.palette.text.secondary;
        case 'transparent':
        case undefined:
        default:
            return '';
    }
}

/** A stored color value as the picker validates it (trimmed), or undefined when unset/invalid. */
function validColor(value: unknown): string | undefined {
    if (typeof value !== 'string' || value.trim() === '') {
        return undefined;
    }
    const validation = validateColorInput(value);
    return validation.isValid && validation.normalizedValue.trim() !== '' ? validation.normalizedValue : undefined;
}

/**
 * The stages of the Auflösungskaskade as candidates, most specific first — the
 * one cascade both resolvers walk. Lazy, so a resolver stops at the first
 * candidate it accepts:
 * 1. explicit override (`data[field.name]`), if valid
 * 2. each valid `fallbackFields` value, in order (empty-string entries — the
 *    legacy `fallbackFields: ['']` convention — and invalid values are skipped)
 * 3. vis-2 widget CSS `color` (only when `field.inheritTextStyle`)
 * 4. terminal default ({@link terminalColor}) — always yielded, last
 *
 * @yields Each stage's color, most specific first; the last one is the terminal (`''` for transparent/none).
 */
function* cascadeCandidates(
    field: ColorFieldContract,
    data: Record<string, unknown>,
    theme: Theme,
    textStyles: StyleColor,
): Generator<string, void, undefined> {
    const explicit = validColor(field.name ? data[field.name] : undefined);
    if (explicit !== undefined) {
        yield explicit;
    }

    for (const name of field.fallbackFields ?? []) {
        const fallback = name ? validColor(data[name]) : undefined;
        if (fallback !== undefined) {
            yield fallback;
        }
    }

    if (field.inheritTextStyle === true) {
        const styleColor = textStyles?.color;
        if (typeof styleColor === 'string' && styleColor.trim() !== '') {
            yield styleColor;
        }
    }

    yield terminalColor(field.terminal, theme);
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
    const first = cascadeCandidates(field, data, theme, textStyles).next();
    return first.done ? '' : first.value;
}

/**
 * Resolves the effective color of a slot that can only draw a solid color —
 * borders, separators, shadows, hover tints.
 *
 * Same Auflösungskaskade as {@link resolveEffectiveColor} (override → fallback
 * fields → vis-2 style → terminal), but each stage counts only with its
 * Repräsentative Vollfarbe (`docs/context/color-theme.md`): a gradient yields
 * its midpoint color, and a stage without one (a color name, `transparent`,
 * `var(…)`, a gradient without hex/rgb stops) counts as inheriting (the
 * glossary state "Erben") — the cascade continues.
 *
 * @param contract - Field contract (name, fallbackFields, terminal, inheritTextStyle).
 * @param data  - Widget data map (explicit values + fallback sources).
 * @param theme - Effective MUI theme (for the terminal default).
 * @param textStyles - vis-2 widget style fragment carrying `color` (may be undefined).
 * @returns The solid color (hex or rgb(a)), or `undefined` when no stage has one —
 *   always for the `transparent` terminal or no terminal, unless a more specific stage has one.
 */
export function resolveEffectiveSolidColor(
    contract: ColorFieldContract,
    data: Record<string, unknown>,
    theme: Theme,
    textStyles: StyleColor,
): string | undefined {
    for (const candidate of cascadeCandidates(contract, data, theme, textStyles)) {
        const solid = solidOf(candidate);
        if (solid !== undefined) {
            return solid;
        }
    }
    return undefined;
}
