/**
 * Single source of truth for a color field's effective (base-layer) color.
 *
 * @module lib/helper/resolveEffectiveColor
 * @remarks
 * Declared by the field contract (`ExtendedField.terminal` /
 * `inheritTextStyle` / `fallbackFields`). The editor swatch
 * (`ContractColorField`, the Vertrags-Adapter), the Gauge's color options and most chrome
 * contracts at runtime walk the whole cascade here; the state resolvers
 * (`propertyResolvers`) and the chrome slots that paint a raw explicit value
 * build their own chains and take only the terminal mapping (`terminalColor`) —
 * who does which: `ExtendedField`'s module remarks.
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
import { readStoredColor } from './colorInputRules';

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
        case 'onBackground':
            // MUI's `common.onBackground` (the contrast colour on the background, e.g. the
            // Switch track), computed from the mode — no CSS variables (ADR-0078).
            return theme.palette.mode === 'light' ? theme.palette.common.black : theme.palette.common.white;
        case 'switchThumbOff':
            // MUI 6.5.0 Switch default (SwitchSwitchBase `color`), computed from the mode — the
            // collection theme carries no CSS variables (ADR-0078). Re-check on a MUI upgrade.
            return theme.palette.mode === 'light' ? theme.palette.common.white : theme.palette.grey[300];
        case 'transparent':
        case undefined:
        default:
            return '';
    }
}

/**
 * A stored color value read with the Regeln für Farbeingaben (`colorInputRules`, as typed,
 * gradients allowed) — trimmed —, or undefined when unset or no colour. So every value the
 * editor stores also takes effect: hex, `rgb()`, gradients and every CSS colour the browser
 * accepts (`red`, `hsl()`, `var(--…)`, `transparent`). Where the field forbids gradients the
 * editor never stores one; the cascade does not know `noGradient`.
 */
function validColor(value: unknown): string | undefined {
    return readStoredColor(value) ?? undefined;
}

/**
 * The stages of the Auflösungskaskade as candidates — the one place they are
 * spelled out. The cascade is layered general → specific (CONTEXT.md); the
 * candidates come most specific first, so the first one a resolver accepts is
 * the most specific set value. Lazy, so a resolver stops there. Both resolvers
 * below walk it:
 * 1. explicit override (`data[field.name]`), if valid
 * 2. each valid `fallbackFields` value, in order (empty-string entries — the
 *    legacy `fallbackFields: ['']` convention — and invalid values are skipped)
 * 3. vis-2 widget CSS `color`, only when `field.inheritTextStyle` — not
 *    validated, only skipped when empty
 * 4. terminal default ({@link terminalColor}) — always yielded, last
 *
 * "Valid" is the editor's rule (Regeln für Farbeingaben, `colorInputRules`): any CSS
 * colour the browser accepts, or a complete gradient; empty or invalid values count as
 * unset (Erben).
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
 * Resolves the effective (base-layer) color for a color field: the first
 * stage of {@link cascadeCandidates}, i.e. the most specific one set.
 *
 * @param field - Field contract (name, fallbackFields, terminal, inheritTextStyle).
 * @param data  - Widget data map (explicit values + fallback sources).
 * @param theme - Effective MUI theme (for the terminal default).
 * @param textStyles - vis-2 widget style fragment carrying `color`; omitted where the slot never inherits it.
 * @returns The effective color string (never null; `''` for transparent/inherit).
 */
export function resolveEffectiveColor(
    field: ColorFieldContract,
    data: Record<string, unknown>,
    theme: Theme,
    textStyles?: StyleColor,
): string {
    const first = cascadeCandidates(field, data, theme, textStyles).next();
    return first.done ? '' : first.value;
}

/**
 * Resolves the effective color of a slot that can only draw a solid color —
 * borders, separators, shadows, hover tints.
 *
 * Same Auflösungskaskade as {@link resolveEffectiveColor} ({@link cascadeCandidates}),
 * but each stage counts only with its
 * Repräsentative Vollfarbe (`CONTEXT.md`, Farb- & Theme-Auflösung): a gradient
 * yields its midpoint color, and a stage without one (a color name, `transparent`,
 * `var(…)`, a gradient without hex/rgb stops) counts as inheriting (the
 * glossary state "Erben") — the cascade continues.
 *
 * @param contract - Field contract (name, fallbackFields, terminal, inheritTextStyle).
 * @param data  - Widget data map (explicit values + fallback sources).
 * @param theme - Effective MUI theme (for the terminal default).
 * @param textStyles - vis-2 widget style fragment carrying `color`; omitted where the slot never inherits it.
 * @returns The solid color as a color calculation reads it (`solidOf`), or `undefined` when no stage has one —
 *   always for the `transparent` terminal or no terminal, unless a more specific stage has one.
 */
export function resolveEffectiveSolidColor(
    contract: ColorFieldContract,
    data: Record<string, unknown>,
    theme: Theme,
    textStyles?: StyleColor,
): string | undefined {
    for (const candidate of cascadeCandidates(contract, data, theme, textStyles)) {
        const solid = solidOf(candidate);
        if (solid !== undefined) {
            return solid;
        }
    }
    return undefined;
}
