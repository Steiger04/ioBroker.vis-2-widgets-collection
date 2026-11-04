/**
 * Options-Builder for the Gauge widget.
 *
 * @module GaugeCollectionWidget/gaugeOptions
 * @remarks
 * Single seam between the widget's field definitions (`lib/gaugeFields.tsx`) and
 * the canvas-gauges instance: it derives the complete option object from the
 * injected fields + rxData, so the option surface exists exactly once. Field
 * names follow the `gauge` + capitalized-option-name convention
 * (`gaugeColorPlate` → `colorPlate`); the few fields that cannot be derived by
 * prefix-strip are handled in the special cases below (protected by the parity
 * test in `gaugeFields.parity.test.ts`).
 *
 * Coercion policy (all types): an unset field (`undefined` / `null` / `''`) or a
 * non-finite number falls back to the SCHEMA DEFAULT from the field definition —
 * never to a canvas-gauges library default (those are invisible to users and
 * diverge from the editor) and never to `0` (the retired
 * `typeof x === 'number' ? x : Number(x)` pattern turned `''` into `0`,
 * overriding library defaults).
 */

import type { GaugeOptions } from 'canvas-gauges';
import type { Theme } from '@mui/material';

import { resolveEffectiveColor, type ColorFieldContract, type StyleColor } from '../lib/helper/resolveEffectiveColor';
// Type-only (erased at runtime): keeps the builder free of editor imports in the node test env.
import type { ColorTerminal } from '../types/field-definitions/extended-field';

/**
 * Field slice the builder reads. Structurally satisfied by both plain schema
 * fields and `createColorField` products (color contract, ADR-0004). `name` and
 * `type` are optional because editor chrome in the field list (dividers,
 * custom components) carries neither.
 */
export interface BuilderField {
    name?: string | undefined;
    type?: string | undefined;
    default?: unknown;
    /** Color-contract marker (set by `createColorField`); absent on plain fields. */
    terminal?: ColorTerminal | undefined;
    /** Schlichtes-Farbfeld marker (set by `createPlainColorField`): read like a `type: 'color'` field. */
    plainColor?: boolean | undefined;
    fallbackFields?: string[] | undefined;
    inheritTextStyle?: boolean | undefined;
}

/** Inputs the widget body owns (measured dimensions, current value, highlight zones). */
export interface GaugeOptionsContext {
    /** Measured content width of the gauge area (px). */
    width: number;
    /** Measured content height of the gauge area (px). */
    height: number;
    /** Current OID value (raw — normalized here). */
    value: unknown;
    /** Unit of the bound object (rendered next to the value). */
    unit?: string;
    /** Header text (becomes the gauge title). */
    header?: string;
    /** Pre-built highlight zones from the widget's state rows. */
    highlights: GaugeOptions['highlights'];
    /** Effective MUI theme (terminal defaults of the color contract). */
    theme: Theme;
    /** vis-2 widget style fragment (cascade level 3: inherit the widget text color). */
    textStyles: StyleColor;
    /**
     * Resolves a CSS colour the canvas cannot paint (`var(…)`) in the widget's context; `null`
     * when it does not resolve. Without it such colours count as unset (fallback/default).
     */
    resolveCssColor?: (value: string) => string | null;
}

/** Effective value range (explicit gauge fields win over the bound object's min/max). */
export interface GaugeRange {
    minValue: number;
    maxValue: number;
}

/**
 * Fields the prefix-strip cannot map:
 * - `gaugeType`      → included as `gaugeType` (class selector, not an option key)
 * - `gaugeIconFit`   → consumed by the icon overlay, not the gauge instance
 * - `gaugePadding`   → subtracted from width/height
 * - `gaugeMinValue`  → `minValue` (with object min/max fallback, see resolveGaugeRange)
 * - `gaugeMaxValue`  → `maxValue` (ditto)
 * - `gaugeMajorTicks`→ `majorTicks` (count → computed tick array)
 */
const SPECIAL_FIELDS = new Set([
    'gaugeType',
    'gaugeIconFit',
    'gaugePadding',
    'gaugeMinValue',
    'gaugeMaxValue',
    'gaugeMajorTicks',
]);

/** Whether canvas-gauges cannot paint a colour as it stands: a CSS variable needs resolving. */
const needsResolving = (value: unknown): value is string => typeof value === 'string' && /var\(/i.test(value);

/**
 * Widget data and widget text style with every `var(…)` colour resolved for the canvas — an
 * unresolvable one is unset, so the cascade (contract fields) or the schema default (Schlichte
 * Farbfelder) applies as before the Farbwähler accepted typed CSS variables.
 */
function canvasColors(
    fields: readonly BuilderField[],
    data: Record<string, unknown>,
    textStyles: StyleColor,
    resolve: GaugeOptionsContext['resolveCssColor'],
): { data: Record<string, unknown>; textStyles: StyleColor } {
    const resolved = (value: string): string | undefined => resolve?.(value) ?? undefined;
    const names = new Set<string>();
    for (const field of fields) {
        if (field.name && (field.terminal !== undefined || field.plainColor === true)) {
            names.add(field.name);
            field.fallbackFields?.forEach(name => names.add(name));
        }
    }
    let result = data;
    for (const name of names) {
        const value = data[name];
        if (needsResolving(value)) {
            result = result === data ? { ...data } : result;
            result[name] = resolved(value);
        }
    }
    const textColor = textStyles?.color;
    return {
        data: result,
        textStyles: needsResolving(textColor) ? { ...textStyles, color: resolved(textColor) } : textStyles,
    };
}

/** Schema default of a field, read from the injected definitions (single source). */
function fieldDefault(fields: readonly BuilderField[], name: string): unknown {
    return fields.find(field => field.name === name)?.default;
}

/** True for values the coercion policy treats as "unset". */
const isUnset = (value: unknown): boolean => value === undefined || value === null || value === '';

/**
 * Numeric resolution: unset/non-finite → fallback (the schema default, or the
 * bound object's min/max for the range fields).
 */
function resolveNumeric(value: unknown, fallback: number): number {
    if (isUnset(value)) {
        return fallback;
    }
    const parsed = typeof value === 'number' ? value : Number(value);
    return Number.isFinite(parsed) ? parsed : fallback;
}

/** String resolution: unset → schema default. */
function resolveString(value: unknown, fallback: string): string {
    return typeof value === 'string' && value !== '' ? value : fallback;
}

/** Schema default as a string ('' for non-string defaults — none exist today). */
function stringDefault(value: unknown): string {
    return typeof value === 'string' ? value : value === 'number' ? String(value) : '';
}

/** Boolean resolution: only genuinely unset falls back (false is a valid choice). */
function resolveBoolean(value: unknown, fallback: boolean): boolean {
    return typeof value === 'boolean' ? value : fallback;
}

/** `gaugeColorPlate` → `colorPlate` (field names without the prefix pass through). */
function stripGaugePrefix(name: string): string {
    return name.startsWith('gauge') ? name.charAt(5).toLowerCase() + name.slice(6) : name;
}

/**
 * Effective gauge range. An explicitly configured `gaugeMinValue`/`gaugeMaxValue`
 * always wins; otherwise the min/max auto-detected from the bound object
 * (`rxData.minValue`/`maxValue`, set by oidChangeHandlerAsync from
 * `common.min`/`common.max`) applies, and finally the hardcoded fallback.
 */
export function resolveGaugeRange(widgetData: object): GaugeRange {
    const data = widgetData as Record<string, unknown>;
    return {
        minValue: resolveNumeric(data.gaugeMinValue, typeof data.minValue === 'number' ? data.minValue : 0),
        maxValue: resolveNumeric(data.gaugeMaxValue, typeof data.maxValue === 'number' ? data.maxValue : 100),
    };
}

/**
 * Major tick values, evenly spaced across the effective range and rounded to two
 * decimals. A count of 0 or less yields no ticks; a degenerate range
 * (max === min) falls back to step 1.
 */
function buildMajorTicks(count: number, minValue: number, maxValue: number): number[] {
    if (!(count > 0)) {
        return [];
    }
    const step = (maxValue - minValue) / count || 1;
    const ticks: number[] = [];
    for (let i = 0; i <= count; i++) {
        ticks.push(Math.round((minValue + step * i) * 100) / 100);
    }
    return ticks;
}

/**
 * Builds the complete canvas-gauges option object.
 *
 * @param fields - Field definitions (injected — `gaugeFields()` at runtime,
 *                 synthetic arrays in tests; keeps this module node-testable).
 * @param widgetData - Widget rxData (values + schema-default-merged fields).
 * @param ctx    - Body-owned inputs: dimensions, value, unit, header, highlight zones.
 * @returns The option object, including `gaugeType` (the Canvas-Adapter's class selector).
 */
export function buildGaugeOptions(
    fields: readonly BuilderField[],
    widgetData: object,
    ctx: GaugeOptionsContext,
): GaugeOptions {
    const { data, textStyles } = canvasColors(
        fields,
        widgetData as Record<string, unknown>,
        ctx.textStyles,
        ctx.resolveCssColor,
    );
    const options: Record<string, unknown> = {
        gaugeType: resolveString(data.gaugeType, 'linear') === 'radial' ? 'radial' : 'linear',
    };

    for (const field of fields) {
        // Editor chrome (dividers, custom components without a data field) carries no option.
        if (!field.name || !field.type) {
            continue;
        }
        // Dividers and editor-only custom components carry no option (color-contract
        // fields from createColorField re-enter through their terminal marker, Schlichte
        // Farbfelder from createPlainColorField through theirs).
        if (field.type === 'custom' && field.terminal === undefined && field.plainColor !== true) {
            continue;
        }
        if (SPECIAL_FIELDS.has(field.name)) {
            continue;
        }

        const key = stripGaugePrefix(field.name);

        // Color-contract fields (createColorField, ADR-0004): resolved through the
        // shared cascade, stages at `cascadeCandidates` (lib/helper/resolveEffectiveColor).
        if (field.terminal !== undefined) {
            const contract: ColorFieldContract = {
                name: field.name,
                fallbackFields: field.fallbackFields,
                terminal: field.terminal,
                inheritTextStyle: field.inheritTextStyle,
            };
            options[key] = resolveEffectiveColor(contract, data, ctx.theme, textStyles);
            continue;
        }

        // Schlichte Farbfelder (ADR-0102) resolve like a colour field: stored value, else default.
        switch (field.plainColor === true ? 'color' : field.type) {
            case 'number':
                options[key] = resolveNumeric(data[field.name], Number(field.default ?? 0));
                break;
            case 'color':
                options[key] = resolveString(data[field.name], stringDefault(field.default));
                break;
            case 'checkbox':
                options[key] = resolveBoolean(data[field.name], field.default === true);
                break;
            default:
                // select / fontname / text — string passthrough with schema default.
                options[key] = resolveString(data[field.name], stringDefault(field.default));
                break;
        }
    }

    // Special cases (see SPECIAL_FIELDS).
    const { minValue, maxValue } = resolveGaugeRange(data);
    const padding = resolveNumeric(data.gaugePadding, Number(fieldDefault(fields, 'gaugePadding') ?? 0));
    const majorTickCount = resolveNumeric(data.gaugeMajorTicks, Number(fieldDefault(fields, 'gaugeMajorTicks') ?? 10));

    options.minValue = minValue;
    options.maxValue = maxValue;
    options.majorTicks = buildMajorTicks(majorTickCount, minValue, maxValue);
    options.width = (ctx.width || 0) - padding;
    options.height = (ctx.height || 0) - padding;
    options.value = Number(ctx.value) || 0;
    options.units = ctx.unit;
    options.title = ctx.header;
    options.highlights = ctx.highlights;

    // Defense in depth: the schema caps gaugeBarWidth at 50 (editor-side only);
    // stored values can exceed it, so the builder enforces it too.
    if (typeof options.barWidth === 'number') {
        options.barWidth = Math.min(options.barWidth, 50);
    }

    return options as GaugeOptions;
}
