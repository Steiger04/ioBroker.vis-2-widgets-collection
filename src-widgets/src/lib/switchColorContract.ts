/**
 * The Switch's colour rules — the thumb contracts, declared once for the fields and the
 * runtime, plus the Sperre state rule the renderer applies on top.
 *
 * @module lib/switchColorContract
 * @remarks
 * ADR-0004 (Nachtrag 2026-11 general rule, Nachtrag 2026-11-04), pattern
 * `selectColorContract` / `radioColorContract`: the switch colour fields (switchFields)
 * spread their contract, so the editor swatch resolves it, and the Switch renderer
 * (`MaterialUISwitch`) resolves the same contract at runtime. For a chrome slot the field
 * follows the runtime: without a value the thumbs have always drawn MUI's Switch defaults,
 * so the contracts declare exactly these as terminals — thumb on `primary`, thumb off
 * `switchThumbOff` (`common.white` light / `grey[300]` dark). No fallback field and no
 * `inheritTextStyle`: the runtime reads neither another field nor the vis-2 CSS colour.
 *
 * `resolveSwitchColors` keeps all of the Switch's colour rules in one place. The explicit
 * value is drawn raw, as stored (ADR-0004 review fix P2: colour names, `transparent`,
 * gradients); only the swatch reads it with the Regeln für Farbeingaben.
 *
 * Kept free of components: the field list pulls editor components (Generic), which the
 * runtime and its node tests must not import.
 */
import type { Theme } from '@mui/material';
import { darken, lighten } from '@mui/material/styles';
import { terminalColor } from './helper/resolveEffectiveColor';
import type { ColorFieldContract } from './helper/resolveEffectiveColor';
import type { SwitchFieldsRxData } from '../types/field-definitions/switch-fields';

/**
 * The Switch colour contracts, keyed by field name. For the swatch an invalid explicit
 * colour counts as unset; the runtime draws it raw ({@link resolveSwitchColors}).
 */
export const switchColorContracts = {
    /** Thumb while on: explicit `thumbColorTrue` → theme primary (MUI's checked thumb). */
    thumbColorTrue: {
        name: 'thumbColorTrue',
        fallbackFields: [],
        terminal: 'primary',
    },
    /** Thumb while off: explicit `thumbColorFalse` → MUI's Switch thumb default. */
    thumbColorFalse: {
        name: 'thumbColorFalse',
        fallbackFields: [],
        terminal: 'switchThumbOff',
    },
} satisfies Record<string, ColorFieldContract>;

/** The widget data the switch colour rules read. */
export type SwitchColorData = Pick<SwitchFieldsRxData, 'thumbColorTrue' | 'thumbColorFalse'>;

/** The colours of one switch state, as CSS values. */
export interface SwitchStateColors {
    /** The thumb: the explicit value as stored, else the contract's terminal (or the Sperre grey). */
    thumb: string;
}

/** The switch colours per state. */
export interface SwitchColors {
    /** Checked. */
    on: SwitchStateColors;
    /** Unchecked. */
    off: SwitchStateColors;
}

/**
 * The raw value of the first set stage — the field itself, then its fallback fields, as
 * stored (never validated away) — or `undefined` when none is set.
 */
function rawStage(contract: ColorFieldContract, data: Record<string, unknown>): string | undefined {
    for (const name of [contract.name, ...(contract.fallbackFields ?? [])]) {
        const value = name ? data[name] : undefined;
        if (typeof value === 'string' && value !== '') {
            return value;
        }
    }
    return undefined;
}

/**
 * The thumb colours MUI 6.5.0 paints while the switch is disabled (Switch.js, non-`vars`
 * branch — the collection theme carries no CSS variables, ADR-0078): off `grey[100]` /
 * `grey[600]`, on the `primary` colour variant's `lighten(main, 0.62)` / `darken(main, 0.55)`.
 * Re-check on a MUI upgrade.
 */
function lockedThumbDefaults(theme: Theme): { on: string; off: string } {
    const { mode, grey, primary } = theme.palette;
    return mode === 'light'
        ? { on: lighten(primary.main, 0.62), off: grey[100] }
        : { on: darken(primary.main, 0.55), off: grey[600] };
}

/**
 * Resolves the switch colours.
 *
 * Enabled, each thumb is its contract: the explicit value as stored, else the terminal. The
 * Sperre is a documented state rule on top (pattern Radio disabled): it reproduces MUI's own
 * disabled look explicitly — an unset thumb draws MUI's disabled grey instead of the
 * terminal, an explicit thumb colour keeps winning. The swatch shows the enabled state.
 *
 * @param data - Widget data carrying the explicit switch colours.
 * @param theme - Effective MUI theme (the collection theme).
 * @param locked - Whether the switch is locked (Sperre: only display, or not writable).
 * @returns The colours per switch state.
 */
export function resolveSwitchColors(data: SwitchColorData, theme: Theme, locked: boolean): SwitchColors {
    const lockedDefaults = locked ? lockedThumbDefaults(theme) : undefined;
    const stage = (contract: ColorFieldContract, lockedDefault: string | undefined): string =>
        rawStage(contract, data) ?? lockedDefault ?? terminalColor(contract.terminal, theme);
    return {
        on: { thumb: stage(switchColorContracts.thumbColorTrue, lockedDefaults?.on) },
        off: { thumb: stage(switchColorContracts.thumbColorFalse, lockedDefaults?.off) },
    };
}
