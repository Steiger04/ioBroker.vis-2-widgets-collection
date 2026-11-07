/**
 * Table tests for the Options-Builder coercion policy and special cases.
 *
 * @module GaugeCollectionWidget/gaugeOptions.test
 * @remarks
 * Runs in the node project with SYNTHETIC field arrays (the builder takes its
 * fields by injection — that is what keeps it testable here without importing
 * editor modules). The real `gaugeFields()` coverage is pinned separately in
 * `gaugeFields.parity.test.ts`.
 */

import { describe, it, expect } from 'vitest';

import type { GaugeOptions } from 'canvas-gauges';
import type { Theme } from '@mui/material';

import { buildGaugeOptions, resolveGaugeZone, type BuilderField, type GaugeOptionsContext } from './gaugeOptions';
import { solidOf } from '../lib/helper/colorDerivation';
import type { StateStyleData } from '../hooks/useData/types';

/** Minimal fake theme (same pattern as SliderCollectionWidget/chrome.test.ts). */
const theme = {
    palette: {
        primary: { main: '#1976d2' },
        text: { primary: 'rgba(0,0,0,0.87)' },
        background: { paper: '#ffffff' },
    },
} as unknown as Theme;

/** One field per branch of the builder's type switch + all special fields. */
const FIELDS: BuilderField[] = [
    { name: 'gaugeType', type: 'select', default: 'linear' },
    { name: 'gaugeBarWidth', type: 'number', default: 20 },
    { name: 'gaugeNeedleStart', type: 'number', default: 5 },
    { name: 'gaugeBarBeginCircle', type: 'number', default: 30 },
    { name: 'gaugeColorPlate', type: 'color', default: 'rgba(0,0,0,0)' },
    { name: 'gaugeNeedle', type: 'checkbox', default: true },
    { name: 'gaugeAnimation', type: 'checkbox', default: true },
    { name: 'gaugeFontValue', type: 'fontname', default: 'Arial, sans-serif' },
    { name: 'gaugeValueText', type: 'text', default: '' },
    { name: 'gaugeAnimationRule', type: 'select', default: 'cycle' },
    // Specials (prefix-strip does not apply)
    { name: 'gaugeIconFit', type: 'select', default: 'contain' },
    { name: 'gaugePadding', type: 'number', default: 8 },
    { name: 'gaugeMinValue', type: 'number' },
    { name: 'gaugeMaxValue', type: 'number' },
    { name: 'gaugeMajorTicks', type: 'number', default: 10 },
    // Editor-only custom field (divider) — must not become an option
    { name: 'allFieldsDivider', type: 'custom' },
    // Color-contract fields (createColorField products, ADR-0004)
    {
        name: 'gaugeColorTitle',
        type: 'custom',
        terminal: 'text',
        inheritTextStyle: true,
    },
    { name: 'gaugeColorNeedle', type: 'custom', terminal: 'primary' },
    // Schlichtes Farbfeld (createPlainColorField product, ADR-0102): custom-rendered, no contract
    { name: 'gaugeColorBar', type: 'custom', plainColor: true, default: '#ccc' },
];

const CTX: GaugeOptionsContext = {
    width: 300,
    height: 150,
    value: 42,
    unit: '°C',
    header: 'Title',
    states: [],
    theme,
    textStyles: undefined,
};

const build = (data: Record<string, unknown>, ctx = CTX): GaugeOptions => buildGaugeOptions(FIELDS, data, ctx);

/** A state as useData publishes it, tagged by its frame background (see gaugeSegments.test.ts). */
const state = (value: number, style: Partial<StateStyleData> = {}): StateStyleData => ({
    fieldNumber: 1,
    active: false,
    value,
    alias: undefined,
    textColor: undefined,
    icon: undefined,
    iconSize: undefined,
    iconSizeOnly: undefined,
    iconXOffset: undefined,
    iconYOffset: undefined,
    iconColor: undefined,
    forceColorMask: undefined,
    valueSize: undefined,
    background: undefined,
    frameBackground: `zone-${value}`,
    ...style,
});

describe('buildGaugeOptions — numeric coercion (schema-default policy)', () => {
    it('falls back to the schema default for unset, empty and non-finite values', () => {
        const options = build({});
        expect(options.barWidth).toBe(20);
        expect(options.needleStart).toBe(5);
    });

    it("treats an empty string as unset, never as 0 (retired Number('') === 0 bug)", () => {
        const options = build({ gaugeNeedleStart: '', gaugeBarWidth: '' });
        expect(options.needleStart).toBe(5);
        expect(options.barWidth).toBe(20);
    });

    it('parses numeric strings and passes numbers through', () => {
        const options = build({ gaugeNeedleStart: '42', gaugeBarWidth: 30 });
        expect(options.needleStart).toBe(42);
        expect(options.barWidth).toBe(30);
    });

    it('falls back to the default for non-numeric strings', () => {
        const options = build({ gaugeNeedleStart: 'abc' });
        expect(options.needleStart).toBe(5);
    });

    it('keeps an explicit 0 (no silent remap — the retired barBeginCircle <12 → 30 rule)', () => {
        const options = build({ gaugeBarBeginCircle: 0 });
        expect(options.barBeginCircle).toBe(0);
    });
});

describe('buildGaugeOptions — string and boolean coercion', () => {
    it('resolves color fields with their schema default', () => {
        expect(build({}).colorPlate).toBe('rgba(0,0,0,0)');
        expect(build({ gaugeColorPlate: '#ff0000' }).colorPlate).toBe('#ff0000');
        expect(build({ gaugeColorPlate: '' }).colorPlate).toBe('rgba(0,0,0,0)');
    });

    it('keeps an explicit false checkbox and defaults only genuinely unset ones', () => {
        expect(build({ gaugeAnimation: false }).animation).toBe(false);
        expect(build({}).needle).toBe(true);
    });

    it('resolves select/fontname fields to their default when unset', () => {
        expect(build({}).animationRule).toBe('cycle');
        expect(build({ gaugeAnimationRule: '' }).animationRule).toBe('cycle');
        expect(build({ gaugeAnimationRule: 'elastic' }).animationRule).toBe('elastic');
        expect(build({}).fontValue).toBe('Arial, sans-serif');
    });

    it('keeps an empty text default as empty string', () => {
        expect(build({}).valueText).toBe('');
        expect(build({ gaugeValueText: 'ON' }).valueText).toBe('ON');
    });

    it('hands a numeric schema default of a string field over as a string', () => {
        const fields: BuilderField[] = [
            { name: 'gaugeSomeSelect', type: 'select', default: 3 },
            { name: 'gaugeSomeText', type: 'text', default: 0 },
        ];
        const options = buildGaugeOptions(fields, {}, CTX) as Record<string, unknown>;
        expect(options.someSelect).toBe('3');
        expect(options.someText).toBe('0');
    });
});

describe('buildGaugeOptions — color contract fields (ADR-0004)', () => {
    it('lets an explicit valid color win', () => {
        expect(build({ gaugeColorTitle: '#ff0000' }).colorTitle).toBe('#ff0000');
        expect(build({ gaugeColorNeedle: 'rgba(240,128,128,1)' }).colorNeedle).toBe('rgba(240,128,128,1)');
    });

    it('resolves unset contract fields to their terminal color (dark-theme fix)', () => {
        expect(build({}).colorTitle).toBe('rgba(0,0,0,0.87)');
        expect(build({}).colorNeedle).toBe('#1976d2');
    });

    it('inherits the vis-2 widget text color before the terminal', () => {
        const options = build({}, { ...CTX, textStyles: { color: '#00ff00' } });
        expect(options.colorTitle).toBe('#00ff00');
        // Without inheritTextStyle the widget color is NOT picked up:
        expect(options.colorNeedle).toBe('#1976d2');
    });

    it('falls through an invalid explicit value to the cascade', () => {
        expect(build({ gaugeColorTitle: 'not-a-color' }).colorTitle).toBe('rgba(0,0,0,0.87)');
    });
});

describe('buildGaugeOptions — Schlichte Farbfelder (ADR-0102)', () => {
    it('resolve to their schema default while unset or empty', () => {
        expect(build({}).colorBar).toBe('#ccc');
        expect(build({ gaugeColorBar: '' }).colorBar).toBe('#ccc');
    });

    it('pass a stored value through as stored — no cascade', () => {
        expect(build({ gaugeColorBar: 'transparent' }).colorBar).toBe('transparent');
    });
});

describe('buildGaugeOptions — CSS variables the canvas cannot paint', () => {
    const views: Record<string, string> = { 'var(--accent)': 'rgb(1, 2, 3)', 'var(--text)': 'rgb(4, 5, 6)' };
    const resolveCssColor = (value: string): string | null => views[value] ?? null;
    const withResolver = { ...CTX, resolveCssColor };

    it('hands the resolved colour of a var(…) to the canvas', () => {
        const options = build({ gaugeColorNeedle: 'var(--accent)', gaugeColorBar: 'var(--accent)' }, withResolver);
        expect(options.colorNeedle).toBe('rgb(1, 2, 3)');
        expect(options.colorBar).toBe('rgb(1, 2, 3)');
    });

    it('falls back as for an unset field when the variable does not resolve', () => {
        const options = build({ gaugeColorNeedle: 'var(--missing)', gaugeColorBar: 'var(--missing)' }, withResolver);
        // Contract field: the cascade goes on to its terminal; Schlichtes Farbfeld: its schema default.
        expect(options.colorNeedle).toBe('#1976d2');
        expect(options.colorBar).toBe('#ccc');
    });

    it('falls back without a resolver (no widget element yet)', () => {
        const options = build({ gaugeColorNeedle: 'var(--accent)', gaugeColorBar: 'var(--accent)' });
        expect(options.colorNeedle).toBe('#1976d2');
        expect(options.colorBar).toBe('#ccc');
    });

    it('resolves a var(…) inherited from the vis-2 widget text colour', () => {
        expect(build({}, { ...withResolver, textStyles: { color: 'var(--text)' } }).colorTitle).toBe('rgb(4, 5, 6)');
        expect(build({}, { ...withResolver, textStyles: { color: 'var(--missing)' } }).colorTitle).toBe(
            'rgba(0,0,0,0.87)',
        );
    });

    it('hands every colour that is no gradient to the probe — the canvas paints what it computes', () => {
        const resolver = (): string => 'rgb(9, 9, 9)';
        const options = build(
            { gaugeColorNeedle: '#123456', gaugeColorBar: 'red' },
            { ...CTX, resolveCssColor: resolver },
        );
        expect(options.colorNeedle).toBe('rgb(9, 9, 9)');
        expect(options.colorBar).toBe('rgb(9, 9, 9)');
    });
});

describe('buildGaugeOptions — Canvas-Farbe for option fields and zone arcs (ADR-0107 Nr. 3)', () => {
    const GRADIENT = 'linear-gradient(90deg, #ff0000 0%, #0000ff 100%)';
    /** Probe stub: the colours a browser computes; anything else does not resolve. */
    const computed: Record<string, string> = {
        red: 'rgb(255, 0, 0)',
        'hsl(120, 100%, 50%)': 'rgb(0, 255, 0)',
        'var(--x)': 'rgb(10, 20, 30)',
        transparent: 'rgba(0, 0, 0, 0)',
    };
    const resolveCssColor = (value: string): string | null => computed[value] ?? null;
    const withProbe = { ...CTX, resolveCssColor };

    /** The colour the canvas paints for one zone whose state carries `textColor`. */
    const arcColor = (textColor: string, ctx: GaugeOptionsContext): string | undefined =>
        build({}, { ...ctx, states: [state(0, { textColor })] }).highlights?.[0]?.color;

    it('takes the Repräsentative Vollfarbe of a gradient', () => {
        expect(solidOf(GRADIENT)).toBeDefined();
    });

    it.each([
        // label, stored text colour, painted with probe, painted without probe
        ['a colour name', 'red', 'rgb(255, 0, 0)', 'red'],
        ['hsl()', 'hsl(120, 100%, 50%)', 'rgb(0, 255, 0)', 'hsl(120, 100%, 50%)'],
        ['a CSS variable', 'var(--x)', 'rgb(10, 20, 30)', 'transparent'],
        ['a gradient', GRADIENT, solidOf(GRADIENT), solidOf(GRADIENT)],
        ['transparent', 'transparent', 'rgba(0, 0, 0, 0)', 'transparent'],
        ['an unresolvable value', 'some text', 'transparent', 'some text'],
    ])('arc in %s', (_label, textColor, withProbeColor, withoutProbeColor) => {
        expect(arcColor(textColor, withProbe)).toBe(withProbeColor);
        expect(arcColor(textColor, CTX)).toBe(withoutProbeColor);
    });

    it.each([
        // label, stored value, Schlichtes Farbfeld with probe, without probe
        ['invalid free text → the schema default', 'not a colour', '#ccc', 'not a colour'],
        ['a colour name → computed', 'red', 'rgb(255, 0, 0)', 'red'],
        ['hsl() → computed', 'hsl(120, 100%, 50%)', 'rgb(0, 255, 0)', 'hsl(120, 100%, 50%)'],
        ['a CSS variable → computed, unset without probe', 'var(--x)', 'rgb(10, 20, 30)', '#ccc'],
        ['a gradient → its Repräsentative Vollfarbe', GRADIENT, solidOf(GRADIENT), solidOf(GRADIENT)],
    ])('Schlichtes Farbfeld with %s', (_label, gaugeColorBar, withProbeColor, withoutProbeColor) => {
        expect(build({ gaugeColorBar }, withProbe).colorBar).toBe(withProbeColor);
        expect(build({ gaugeColorBar }).colorBar).toBe(withoutProbeColor);
    });

    it('lets a contract field with invalid free text or an unresolvable value fall through to its cascade', () => {
        expect(build({ gaugeColorNeedle: 'not a colour' }, withProbe).colorNeedle).toBe('#1976d2');
        expect(build({ gaugeColorTitle: 'red' }, withProbe).colorTitle).toBe('rgb(255, 0, 0)');
        expect(build({ gaugeColorNeedle: GRADIENT }).colorNeedle).toBe(solidOf(GRADIENT));
    });
});

describe('buildGaugeOptions — prefix strip and specials', () => {
    it('maps gaugeX → x and skips editor-only custom fields', () => {
        const options = build({}) as Record<string, unknown>;
        expect(Object.keys(options)).toContain('colorPlate');
        expect(Object.keys(options)).toContain('animationRule');
        expect(Object.keys(options)).not.toContain('allFieldsDivider');
        expect(Object.keys(options)).not.toContain('iconFit');
        expect(Object.keys(options)).not.toContain('padding');
    });

    it('normalizes gaugeType into the options object', () => {
        expect(build({}).gaugeType).toBe('linear');
        expect(build({ gaugeType: 'radial' }).gaugeType).toBe('radial');
        expect(build({ gaugeType: 'bogus' }).gaugeType).toBe('linear');
    });

    it('subtracts the padding from the measured dimensions (schema default when unset)', () => {
        expect(build({})).toMatchObject({ width: 292, height: 142 });
        expect(build({ gaugePadding: 0 })).toMatchObject({ width: 300, height: 150 });
        expect(build({ gaugePadding: '' })).toMatchObject({ width: 292, height: 142 });
        expect(build({}, { ...CTX, width: 0, height: 0 })).toMatchObject({ width: -8, height: -8 });
    });

    it('clamps barWidth to 50 (schema max is editor-side only)', () => {
        expect(build({ gaugeBarWidth: 80 }).barWidth).toBe(50);
        expect(build({ gaugeBarWidth: 30 }).barWidth).toBe(30);
    });

    it('normalizes the value (0 stays 0, non-finite becomes 0)', () => {
        expect(build({}, { ...CTX, value: 0 }).value).toBe(0);
        expect(build({}, { ...CTX, value: '37.4' }).value).toBe(37.4);
        expect(build({}, { ...CTX, value: undefined }).value).toBe(0);
    });

    it('passes unit and header through', () => {
        const options = build({});
        expect(options.units).toBe('°C');
        expect(options.title).toBe('Title');
    });

    it('builds the Highlight-Zone arcs from the states, the last one stretched to the effective max', () => {
        const states = [state(0, { textColor: '#00ff00' }), state(20, { textColor: '#ff0000' })];
        expect(build({ gaugeMaxValue: 50 }, { ...CTX, states }).highlights).toStrictEqual([
            { from: 0, to: 20, color: '#00ff00' },
            { from: 20, to: 50, color: '#ff0000' },
        ]);
        expect(build({}).highlights).toStrictEqual([]);
    });

    it('paints an arc whose colour is unset transparent', () => {
        // No text colour; a CSS variable without a probe counts as unset (Canvas-Farbe).
        const states = [state(0), state(10, { textColor: 'var(--x)' })];
        expect(build({}, { ...CTX, states }).highlights?.map(arc => arc.color)).toStrictEqual([
            'transparent',
            'transparent',
        ]);
    });
});

describe('buildGaugeOptions — Canvas-Titel as plain text (ADR-0107 Nr. 6)', () => {
    const titleOf = (header: string | undefined): string | undefined => build({}, { ...CTX, header }).title;

    it.each([
        ['strips tags', '<b>Wohn</b>zimmer', 'Wohnzimmer'],
        ['decodes &amp;', 'A &amp; B', 'A & B'],
        ['decodes &lt; and &gt;', '&lt;5 &gt;3', '<5 >3'],
        ['decodes &quot; and &#39;', '&quot;x&quot; &#39;y&#39;', '"x" \'y\''],
        ['turns &nbsp; into a space', 'A&nbsp;B', 'A B'],
        ['decodes &amp; only once', '&amp;lt;', '&lt;'],
        ['collapses repeated whitespace into one space', '  Wohn   \t zimmer  ', 'Wohn zimmer'],
        ['leaves plain text unchanged', 'Wohnzimmer', 'Wohnzimmer'],
    ])('%s', (_label, header, expected) => {
        expect(titleOf(header)).toBe(expected);
    });

    it('draws no title when nothing but markup remains', () => {
        expect(titleOf('<br/><span style="color:red"></span>&nbsp;')).toBe('');
        expect(titleOf('')).toBe('');
        expect(titleOf(undefined)).toBe('');
    });
});

describe('buildGaugeOptions — major ticks', () => {
    it('spreads the configured count across the effective range', () => {
        const options = build({ gaugeMajorTicks: 2 });
        expect(options.majorTicks).toEqual([0, 50, 100]);
    });

    it('uses the schema default count when unset', () => {
        const options = build({});
        expect(options.majorTicks).toHaveLength(11);
        expect(options.majorTicks![0]).toBe(0);
        expect(options.majorTicks![10]).toBe(100);
    });

    it('falls back to step 1 on a degenerate range', () => {
        const options = build({ gaugeMinValue: 5, gaugeMaxValue: 5, gaugeMajorTicks: 2 });
        expect(options.majorTicks).toEqual([5, 6, 7]);
    });
});

describe('resolveGaugeZone — Body-Einstieg', () => {
    it("returns the active zone's style", () => {
        const states = [state(0), state(20, { icon: 'warm.svg', background: '#123456' })];
        const { active } = resolveGaugeZone(FIELDS, {}, states, 21);
        expect(active).toMatchObject({ frameBackground: 'zone-20', icon: 'warm.svg', background: '#123456' });
        expect(resolveGaugeZone(FIELDS, {}, [state(50)], 21).active).toBeNull();
    });

    it.each([
        // label, stored icon fit, expected
        ['unset → the schema default', undefined, 'contain'],
        ['empty → the schema default', '', 'contain'],
        ['set → as stored', 'cover', 'cover'],
    ])('resolves the icon fit like every other field: %s', (_label, gaugeIconFit, expected) => {
        expect(resolveGaugeZone(FIELDS, { gaugeIconFit }, [], 0).iconFit).toBe(expected);
    });
});

describe('Canvas- and Body-Einstieg — one range, one value', () => {
    /** Zones 0–60 and 60–max; the active one is identified by its frame background. */
    const states = [state(0), state(60)];

    it.each([
        // label, widget data, raw value, expected range + value, expected active zone
        ['unset range: 0..100', {}, 100, { minValue: 0, maxValue: 100, value: 100 }, 'zone-60'],
        [
            'set range: the explicit fields',
            { gaugeMinValue: -10, gaugeMaxValue: 80 },
            100,
            { minValue: -10, maxValue: 80, value: 100 },
            null,
        ],
        [
            'unset range: the bound object min/max',
            { minValue: 7, maxValue: 77 },
            77,
            { minValue: 7, maxValue: 77, value: 77 },
            'zone-60',
        ],
        [
            'an explicit field wins over the object, an empty one counts as unset',
            { gaugeMinValue: -10, minValue: 7, gaugeMaxValue: '', maxValue: 77 },
            77,
            { minValue: -10, maxValue: 77, value: 77 },
            'zone-60',
        ],
        ['a non-numeric value counts as 0', {}, 'abc', { minValue: 0, maxValue: 100, value: 0 }, 'zone-0'],
        ['a numeric string is parsed', {}, '61', { minValue: 0, maxValue: 100, value: 61 }, 'zone-60'],
    ])('%s', (_label, data, value, expected, activeZone) => {
        const options = build(data, { ...CTX, states, value });
        const { active } = resolveGaugeZone(FIELDS, data, states, value);

        expect(options).toMatchObject(expected);
        // The zone max is the canvas max: the last arc ends where the options end.
        expect(options.highlights?.at(-1)?.to).toBe(expected.maxValue);
        expect(active?.frameBackground ?? null).toBe(activeZone);
    });
});
