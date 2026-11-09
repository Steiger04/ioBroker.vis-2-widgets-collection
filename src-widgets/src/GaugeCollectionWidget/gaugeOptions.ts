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
 * The measures live behind this seam too (ADR-0107 Nr. 4): value range, value
 * coercion and the Highlight-Zones are private here and shared by the two entries.
 * {@link buildGaugeOptions} is the Canvas-Einstieg (option object, zone arcs
 * included); {@link resolveGaugeZone} is the Body-Einstieg (active zone style and
 * icon fit). Two entries because the body needs the zone style OUTSIDE the frame
 * (CollectionBase `data`), while the canvas size exists only INSIDE it (Content-Box).
 *
 * Every colour the canvas paints goes through one private rule, the Canvas-Farbe
 * (ADR-0107 Nr. 3): the colour option fields (contract fields, Schlichte Farbfelder, the
 * inherited vis-2 text colour) and the zone arcs alike. A colour the rule leaves unset falls
 * back as an unset field does — contract fields through their cascade, Schlichte Farbfelder to
 * the schema default, arcs to `transparent`.
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

import { solidOf } from '../lib/helper/colorDerivation';
import { isGradientColor } from '../lib/helper/colorValidation';
import { resolveEffectiveColor, type ColorFieldContract, type StyleColor } from '../lib/helper/resolveEffectiveColor';
import { resolveZones, type ZoneArc, type ZoneStyle, type Zones } from './gaugeSegments';
// Type-only (erased at runtime): keeps the builder free of editor imports in the node test env.
import type { ColorTerminal } from '../types/field-definitions/extended-field';
import type { GaugeFieldsRxData } from '../types/field-definitions/gauge-fields';
import type { StateStyleData } from '../hooks/useData/types';

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

/** Inputs the widget body owns (measured dimensions, current value, states of the zones). */
export interface GaugeOptionsContext {
    /** Measured content width of the gauge area (px). */
    width: number;
    /** Measured content height of the gauge area (px). */
    height: number;
    /** Current OID value (raw — normalized here). */
    value: unknown;
    /** Unit of the bound object (rendered next to the value). */
    unit?: string;
    /** Header text (becomes the gauge title as plain text, see canvasTitle). */
    header?: string;
    /** The states as useData publishes them — the builder derives the Highlight-Zone arcs. */
    states: StateStyleData[];
    /** Effective MUI theme (terminal defaults of the color contract). */
    theme: Theme;
    /** vis-2 widget style fragment (cascade level 3: inherit the widget text color). */
    textStyles: StyleColor;
    /**
     * Probe: computes a CSS colour in the widget's context (`var(…)` included); `null` when it
     * does not resolve. Without it a `var(…)` counts as unset and other colours pass as stored
     * (see canvasColor).
     */
    resolveCssColor?: (value: string) => string | null;
}

/** Result of {@link resolveGaugeZone}: what the body composes outside the frame. */
export interface GaugeZone {
    /** Style of the active Highlight-Zone, `null` when the value lies in none. */
    active: ZoneStyle | null;
    /** Object fit of the zone icon (stored value, the schema default while unset). */
    iconFit: GaugeFieldsRxData['gaugeIconFit'];
}

/** Effective value range (explicit gauge fields win over the bound object's min/max). */
interface GaugeRange {
    minValue: number;
    maxValue: number;
}

/**
 * Fields the prefix-strip cannot map:
 * - `gaugeType`      → included as `gaugeType` (class selector, not an option key)
 * - `gaugeIconFit`   → consumed by the icon overlay (resolveGaugeZone), not the gauge instance
 * - `gaugePadding`   → subtracted from width/height
 * - `gaugeMinValue`  → `minValue` (with object min/max fallback, see resolveRange)
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
 * Canvas-Farbe: a stored colour as the canvas paints it.
 *
 * @param value   - The stored colour (any type; only strings can be colours).
 * @param resolve - The injected probe ({@link GaugeOptionsContext.resolveCssColor}).
 * @returns The colour to paint, or `undefined` when the value counts as unset.
 * @remarks
 * 1. A gradient becomes its Repräsentative Vollfarbe (`solidOf`) — the canvas fills with
 *    solid colours only.
 * 2. Otherwise the probe computes the colour in the widget's context (CSS variables of view
 *    and widget apply); what it does not resolve — invalid free text — is unset.
 * 3. Without a probe (no widget element yet) a `var(…)` is unset, anything else passes as
 *    stored.
 *
 * So every value the Farbwähler stores becomes paintable (ADR-0102). An empty value is unset
 * without asking the probe.
 */
function canvasColor(value: unknown, resolve: GaugeOptionsContext['resolveCssColor']): string | undefined {
    if (typeof value !== 'string' || value.trim() === '') {
        return undefined;
    }
    if (isGradientColor(value)) {
        return solidOf(value);
    }
    if (resolve) {
        return resolve(value) ?? undefined;
    }
    return needsResolving(value) ? undefined : value;
}

/**
 * Widget data and widget text style with the Canvas-Farbe applied to every colour the option
 * fields read: the contract fields and Schlichte Farbfelder, their fallback fields and the
 * inherited vis-2 text colour. An unset result lets the cascade (contract fields) or the schema
 * default (Schlichte Farbfelder) apply, exactly as for an empty field.
 */
function canvasColors(
    fields: readonly BuilderField[],
    data: Record<string, unknown>,
    textStyles: StyleColor,
    resolve: GaugeOptionsContext['resolveCssColor'],
): { data: Record<string, unknown>; textStyles: StyleColor } {
    const result = { ...data };
    for (const field of fields) {
        if (field.name && (field.terminal !== undefined || field.plainColor === true)) {
            for (const name of [field.name, ...(field.fallbackFields ?? [])]) {
                result[name] = canvasColor(data[name], resolve);
            }
        }
    }
    return {
        data: result,
        textStyles: textStyles && { ...textStyles, color: canvasColor(textStyles.color, resolve) },
    };
}

/**
 * The Highlight-Zone arcs with the Canvas-Farbe applied to the raw state colour the zone model
 * hands — an arc whose colour is unset paints `transparent`.
 */
function canvasArcs(
    arcs: readonly ZoneArc[],
    resolve: GaugeOptionsContext['resolveCssColor'],
): Array<ZoneArc & { color: string }> {
    return arcs.map(({ from, to, color }) => ({
        from,
        to,
        color: canvasColor(color, resolve) ?? 'transparent',
    }));
}

/**
 * Editor chrome without an option: dividers and editor-only custom components. Custom fields
 * that carry data re-enter through their marker — contract colour fields (`terminal`, from
 * `createColorField`) and Schlichte Farbfelder (`plainColor`, from `createPlainColorField`).
 *
 * @param field - A field of the list.
 * @returns Whether the field carries no gauge option.
 */
export function isEditorChrome(field: Pick<BuilderField, 'type' | 'terminal' | 'plainColor'>): boolean {
    return field.type === 'custom' && field.terminal === undefined && field.plainColor !== true;
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

/** Schema default as a string: numbers are stringified, any other non-string default yields ''. */
function stringDefault(value: unknown): string {
    return typeof value === 'string' ? value : typeof value === 'number' ? String(value) : '';
}

/** The basic entities the Canvas-Titel decodes; `&amp;` runs last so `&amp;lt;` stays `&lt;`. */
const TITLE_ENTITIES: ReadonlyArray<[RegExp, string]> = [
    [/&lt;/g, '<'],
    [/&gt;/g, '>'],
    [/&quot;/g, '"'],
    [/&#39;/g, "'"],
    [/&nbsp;/g, ' '],
    [/&amp;/g, '&'],
];

/**
 * Canvas-Titel: the resolved header as plain text.
 *
 * @param header - Resolved header text (may carry HTML).
 * @returns The plain text; `''` when nothing but markup remains.
 * @remarks
 * The canvas paints text, not HTML: tags go, the basic entities are decoded and whitespace
 * collapses into single spaces. An empty result means no title — canvas-gauges draws one
 * only for a truthy `title`, and the key stays present so `update()` clears a previous one.
 * Regex-based by design (no DOMParser): the builder stays node-testable.
 */
function canvasTitle(header: string | undefined): string {
    let text = (header ?? '').replace(/<[^>]*>/g, '');
    for (const [entity, char] of TITLE_ENTITIES) {
        text = text.replace(entity, char);
    }
    return text.replace(/\s+/g, ' ').trim();
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
function resolveRange(data: Record<string, unknown>): GaugeRange {
    return {
        minValue: resolveNumeric(data.gaugeMinValue, typeof data.minValue === 'number' ? data.minValue : 0),
        maxValue: resolveNumeric(data.gaugeMaxValue, typeof data.maxValue === 'number' ? data.maxValue : 100),
    };
}

/** Value coercion: the raw OID value as a number, non-finite (and unset) → 0. */
const coerceValue = (value: unknown): number => Number(value) || 0;

/** The measures both entries share: range, coerced value and the Highlight-Zones over them. */
interface Measures {
    range: GaugeRange;
    value: number;
    zones: Zones;
}

/**
 * Resolves the measures once for an entry, so canvas and body see the same range and value.
 *
 * @param data   - Widget rxData.
 * @param states - The states as useData publishes them.
 * @param value  - The raw OID value.
 * @returns Range, coerced value and the zones (zone max = effective max).
 */
function resolveMeasures(data: Record<string, unknown>, states: StateStyleData[], value: unknown): Measures {
    const range = resolveRange(data);
    const coerced = coerceValue(value);
    return { range, value: coerced, zones: resolveZones(states, range.maxValue, coerced) };
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
 * Canvas-Einstieg: builds the complete canvas-gauges option object.
 *
 * @param fields - Field definitions (injected — `gaugeFields()` at runtime,
 *                 synthetic arrays in tests; keeps this module node-testable).
 * @param widgetData - Widget rxData (values + schema-default-merged fields).
 * @param ctx    - Body-owned inputs: dimensions, value, unit, header, states of the zones.
 * @returns The option object, including `gaugeType` (the Canvas-Adapter's class selector)
 *          and the Highlight-Zone arcs as the computed `highlights` key.
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
        if (isEditorChrome(field)) {
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
    const {
        range: { minValue, maxValue },
        value,
        zones,
    } = resolveMeasures(data, ctx.states, ctx.value);
    const padding = resolveNumeric(data.gaugePadding, Number(fieldDefault(fields, 'gaugePadding') ?? 0));
    const majorTickCount = resolveNumeric(data.gaugeMajorTicks, Number(fieldDefault(fields, 'gaugeMajorTicks') ?? 10));

    options.minValue = minValue;
    options.maxValue = maxValue;
    options.majorTicks = buildMajorTicks(majorTickCount, minValue, maxValue);
    options.width = (ctx.width || 0) - padding;
    options.height = (ctx.height || 0) - padding;
    options.value = value;
    options.units = ctx.unit;
    options.title = canvasTitle(ctx.header);
    options.highlights = canvasArcs(zones.arcs, ctx.resolveCssColor);

    // Defense in depth: the schema caps gaugeBarWidth at 50 (editor-side only);
    // stored values can exceed it, so the builder enforces it too.
    if (typeof options.barWidth === 'number') {
        options.barWidth = Math.min(options.barWidth, 50);
    }

    // canvas-gauges honours `borders: false` only in its constructor (zeroing the ring widths);
    // the adapter's update() would bring the rings back from the widths it hands over.
    if (options.borders === false) {
        options.borderOuterWidth = 0;
        options.borderMiddleWidth = 0;
        options.borderInnerWidth = 0;
    }

    return options;
}

/**
 * Body-Einstieg: what the body composes outside the frame — the active zone's style (for
 * `baseData`, the Eck-Icon and the zone icon) and the zone icon's object fit.
 *
 * @param fields     - Field definitions (injected, as for {@link buildGaugeOptions}).
 * @param widgetData - Widget rxData.
 * @param states     - The states as useData publishes them.
 * @param value      - The raw OID value.
 * @returns The active zone style (or `null`) and the icon fit.
 * @remarks
 * Range and value are resolved exactly as in the Canvas-Einstieg, so the active zone always
 * matches the arcs the canvas paints. The icon fit follows the coercion policy like every
 * other string field: unset falls back to its schema default (`contain`), not to CSS `fill`.
 */
export function resolveGaugeZone(
    fields: readonly BuilderField[],
    widgetData: object,
    states: StateStyleData[],
    value: unknown,
): GaugeZone {
    const data = widgetData as Record<string, unknown>;
    return {
        active: resolveMeasures(data, states, value).zones.active,
        iconFit: resolveString(
            data.gaugeIconFit,
            stringDefault(fieldDefault(fields, 'gaugeIconFit')),
        ) as GaugeZone['iconFit'],
    };
}
