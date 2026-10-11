/**
 * Unit tests for the title/legend presentation builders (ADR-0009 + ADR-0021):
 * {@link buildTitleOption}, {@link buildLegend}, {@link normalizeLegendPos}, {@link decodeLegendConfig}.
 *
 * @module EchartsCollectionWidget/presentation.test
 */
import { describe, expect, it } from 'vitest';

import { encodeBlob } from '../lib/encoding';
import {
    buildLegend,
    buildTitleOption,
    decodeLegendConfig,
    decodeMarkLines,
    markBoundOids,
    normalizeLegendPos,
    resolveMarkLines,
    PALETTE_PRESETS,
    resolvePalette,
    toPresentationConfig,
    type TitleOptionInput,
} from './presentation';
import { THEME_PALETTES } from './themePalettes';
import type { PresentationConfig } from './optionBuilders/types';

/** Run buildTitleOption on an empty option object and return the resulting `title`. */
const title = (opts: TitleOptionInput): Record<string, unknown> => {
    const merged: Record<string, unknown> = {};
    buildTitleOption(merged, opts);
    return merged.title as Record<string, unknown>;
};

describe('buildTitleOption — placement', () => {
    describe('top row', () => {
        it('topLeft no offset → left edge', () => {
            expect(title({ text: 'T', titlePos: 'topLeft', dx: 0, dy: 0 })).toEqual({
                text: 'T',
                left: 'left',
                top: 'top',
            });
        });
        it('topCenter → center anchor', () => {
            expect(title({ text: 'T', titlePos: 'topCenter', dx: 0, dy: 0 })).toEqual({
                text: 'T',
                left: 'center',
                top: 'top',
            });
        });
        it('topRight → right anchor', () => {
            expect(title({ text: 'T', titlePos: 'topRight', dx: 0, dy: 0 })).toEqual({
                text: 'T',
                left: 'right',
                top: 'top',
            });
        });
    });

    describe('bottom row (ADR-0021)', () => {
        it('bottomLeft → left + bottom edge', () => {
            expect(title({ text: 'T', titlePos: 'bottomLeft', dx: 0, dy: 0 })).toEqual({
                text: 'T',
                left: 'left',
                bottom: 'bottom',
            });
        });
        it('bottomCenter → bottom center', () => {
            expect(title({ text: 'T', titlePos: 'bottomCenter', dx: 0, dy: 0 })).toEqual({
                text: 'T',
                left: 'center',
                bottom: 'bottom',
            });
        });
        it('bottomRight → bottom right', () => {
            expect(title({ text: 'T', titlePos: 'bottomRight', dx: 0, dy: 0 })).toEqual({
                text: 'T',
                left: 'right',
                bottom: 'bottom',
            });
        });
    });
});

describe('buildTitleOption — offsets', () => {
    it('topLeft dx → numeric left + textAlign (measurement-free)', () => {
        expect(title({ text: 'T', titlePos: 'topLeft', dx: 12, dy: 0 })).toEqual({
            text: 'T',
            left: 12,
            top: 'top',
            textAlign: 'left',
        });
    });
    it('topLeft dy → numeric top', () => {
        expect(title({ text: 'T', titlePos: 'topLeft', dx: 0, dy: 7 })).toEqual({
            text: 'T',
            left: 'left',
            top: 7,
        });
    });
    it('topCenter ignores dx (named anchor kept, ADR-0009 addendum)', () => {
        expect(title({ text: 'T', titlePos: 'topCenter', dx: 10, dy: 0 })).toEqual({
            text: 'T',
            left: 'center',
            top: 'top',
        });
    });
    it('bottomLeft dx → numeric left (left-edge offset extends to the bottom row)', () => {
        expect(title({ text: 'T', titlePos: 'bottomLeft', dx: 5, dy: 0 })).toEqual({
            text: 'T',
            left: 5,
            bottom: 'bottom',
            textAlign: 'left',
        });
    });
    it('bottom dy is down-positive → negative bottom (past the edge)', () => {
        expect(title({ text: 'T', titlePos: 'bottomCenter', dx: 0, dy: 5 })).toEqual({
            text: 'T',
            left: 'center',
            bottom: -5,
        });
    });
    it('non-finite dx/dy are ignored', () => {
        expect(title({ text: 'T', titlePos: 'topCenter', dx: Number.NaN, dy: 0 })).toEqual({
            text: 'T',
            left: 'center',
            top: 'top',
        });
    });
});

describe('buildTitleOption — textStyle (ADR-0021)', () => {
    it('no styling → no textStyle key', () => {
        expect(title({ text: 'T', titlePos: 'topCenter', dx: 0, dy: 0 })).not.toHaveProperty('textStyle');
    });
    it('colour override → textStyle.color', () => {
        expect(title({ text: 'T', titlePos: 'topCenter', dx: 0, dy: 0, color: '#f00' })).toEqual({
            text: 'T',
            left: 'center',
            top: 'top',
            textStyle: { color: '#f00' },
        });
    });
    it('deep-merges onto the theme textStyle (size-only keeps theme colour)', () => {
        const merged: Record<string, unknown> = { title: { textStyle: { color: '#theme' } } };
        buildTitleOption(merged, { text: 'T', titlePos: 'topCenter', dx: 0, dy: 0, fontSize: 18 });
        expect(merged.title).toEqual({
            textStyle: { color: '#theme', fontSize: 18 },
            text: 'T',
            left: 'center',
            top: 'top',
        });
    });
    it('fontWeight override', () => {
        const r = title({ text: 'T', titlePos: 'topCenter', dx: 0, dy: 0, fontWeight: 'bold' });
        expect((r.textStyle as Record<string, unknown>).fontWeight).toBe('bold');
    });
    it('numeric fontWeight override — preserved as a number (ADR-0029)', () => {
        const r = title({ text: 'T', titlePos: 'topCenter', dx: 0, dy: 0, fontWeight: 600 });
        const fw = (r.textStyle as Record<string, unknown>).fontWeight;
        expect(fw).toBe(600);
        expect(typeof fw).toBe('number');
    });
    it('fontStyle override (ADR-0029)', () => {
        const r = title({ text: 'T', titlePos: 'topCenter', dx: 0, dy: 0, fontStyle: 'italic' });
        expect((r.textStyle as Record<string, unknown>).fontStyle).toBe('italic');
    });
});

/** Minimal presentation config for legend tests (only legend-relevant fields are read). */
/** Minimal theme tokens for buildLegend / toPresentationConfig tests (ADR-0027). */
const TOKENS = {
    primary: '#p',
    secondary: '#s',
    success: '#su',
    warning: '#w',
    error: '#e',
    info: '#i',
    divider: '#d',
    textPrimary: '#tp',
    textSecondary: '#ts',
} as const;

const legendP = (
    over: {
        legendShow?: boolean;
        legendPos?: PresentationConfig['legendPos'];
        legend?: PresentationConfig['legend'];
    } = {},
): PresentationConfig =>
    ({
        legendShow: over.legendShow ?? true,
        legendPos: over.legendPos ?? 'topCenter',
        legend: over.legend,
        themeTokens: TOKENS,
    }) as unknown as PresentationConfig;

describe('buildLegend — placement (3×3 grid, orient auto)', () => {
    it('top row → top edge, horizontal, aligns by cell (left/right numeric edges)', () => {
        expect(buildLegend(legendP({ legendPos: 'topLeft' }), ['a', 'b'])).toMatchObject({
            show: true,
            data: ['a', 'b'],
            top: 4,
            left: 4,
            orient: 'horizontal',
        });
        expect(buildLegend(legendP({ legendPos: 'topRight' }), ['a'])).toMatchObject({
            top: 4,
            right: 4,
            orient: 'horizontal',
        });
    });
    it('bottom row → bottom edge, horizontal', () => {
        expect(buildLegend(legendP({ legendPos: 'bottomCenter' }), ['a'])).toMatchObject({
            bottom: 4,
            left: 'center',
            orient: 'horizontal',
        });
    });
    it('left column → vertical, vertically centred at the left edge', () => {
        expect(buildLegend(legendP({ legendPos: 'middleLeft' }), ['a'])).toMatchObject({
            top: 'center',
            left: 4,
            orient: 'vertical',
        });
    });
    it('right column → vertical, vertically centred at the right edge', () => {
        expect(buildLegend(legendP({ legendPos: 'middleRight' }), ['a'])).toMatchObject({
            top: 'center',
            right: 4,
            orient: 'vertical',
        });
    });
    it('middleCenter → centred horizontal', () => {
        expect(buildLegend(legendP({ legendPos: 'middleCenter' }), ['a'])).toMatchObject({
            top: 'center',
            left: 'center',
            orient: 'horizontal',
        });
    });
    it('show false → show:false, names still carried', () => {
        expect(buildLegend(legendP({ legendShow: false }), ['a'])).toMatchObject({ show: false, data: ['a'] });
    });
});

describe('buildLegend — styling', () => {
    it('no styling → only show/data/placement (no textStyle/icon/frame keys)', () => {
        const l = buildLegend(legendP(), ['a']);
        expect(l).not.toHaveProperty('textStyle');
        expect(l).not.toHaveProperty('icon');
        expect(l).not.toHaveProperty('backgroundColor');
        expect(l).not.toHaveProperty('borderWidth');
    });
    it('text colour/size/weight → textStyle', () => {
        expect(
            buildLegend(legendP({ legend: { color: '#f00', fontSize: 12, fontWeight: 'bold' } }), ['a']),
        ).toMatchObject({
            textStyle: { color: '#f00', fontSize: 12, fontWeight: 'bold' },
        });
    });
    it('fontStyle → textStyle.fontStyle (ADR-0029)', () => {
        expect(buildLegend(legendP({ legend: { fontStyle: 'italic' } }), ['a'])).toMatchObject({
            textStyle: { fontStyle: 'italic' },
        });
    });
    it('numeric fontWeight — preserved as a number (ADR-0029)', () => {
        const l = buildLegend(legendP({ legend: { fontWeight: 600 } }), ['a']);
        const fw = (l.textStyle as Record<string, unknown> | undefined)?.fontWeight;
        expect(fw).toBe(600);
        expect(typeof fw).toBe('number');
    });
    it('icon + item sizing/gap', () => {
        expect(
            buildLegend(legendP({ legend: { icon: 'circle', itemWidth: 20, itemHeight: 12, itemGap: 5 } }), ['a']),
        ).toMatchObject({ icon: 'circle', itemWidth: 20, itemHeight: 12, itemGap: 5 });
    });
    it('inactive colour', () => {
        expect(buildLegend(legendP({ legend: { inactiveColor: '#ccc' } }), ['a'])).toMatchObject({
            inactiveColor: '#ccc',
        });
    });
    it('inactive colour defaults to the theme divider token when unset (not echarts fixed #ccc)', () => {
        // ADR-0027: deselected legend items stay theme-aware (esp. dark mode); the swatch shows the
        // divider token, so the builder emits it instead of deferring to echarts' fixed #ccc.
        expect(buildLegend(legendP({ legend: {} }), ['a'])).toMatchObject({
            inactiveColor: '#d', // TOKENS.divider
        });
    });
    it('background emitted only when not transparent', () => {
        expect(buildLegend(legendP({ legend: { bgColor: 'transparent' } }), ['a'])).not.toHaveProperty(
            'backgroundColor',
        );
        expect(buildLegend(legendP({ legend: { bgColor: '#eee' } }), ['a'])).toMatchObject({ backgroundColor: '#eee' });
    });
    it('border emitted only when width > 0', () => {
        expect(buildLegend(legendP({ legend: { borderColor: '#000' } }), ['a'])).not.toHaveProperty('borderWidth');
        expect(buildLegend(legendP({ legend: { borderWidth: 2, borderColor: '#000' } }), ['a'])).toMatchObject({
            borderWidth: 2,
            borderColor: '#000',
        });
    });
    it('border colour defaults to the theme divider token when unset (ADR-0027)', () => {
        expect(buildLegend(legendP({ legend: { borderWidth: 2 } }), ['a'])).toMatchObject({
            borderWidth: 2,
            borderColor: '#d',
        });
    });
    it('radius + padding', () => {
        expect(buildLegend(legendP({ legend: { borderRadius: 4, padding: 6 } }), ['a'])).toMatchObject({
            borderRadius: 4,
            padding: 6,
        });
    });
});

describe('normalizeLegendPos (legacy 4-edge → 3×3 grid)', () => {
    it('maps legacy edges', () => {
        expect(normalizeLegendPos('top')).toBe('topCenter');
        expect(normalizeLegendPos('bottom')).toBe('bottomCenter');
        expect(normalizeLegendPos('left')).toBe('middleLeft');
        expect(normalizeLegendPos('right')).toBe('middleRight');
    });
    it('passes 9-grid values through', () => {
        expect(normalizeLegendPos('bottomRight')).toBe('bottomRight');
        expect(normalizeLegendPos('middleCenter')).toBe('middleCenter');
        expect(normalizeLegendPos('topLeft')).toBe('topLeft');
    });
    it('falls back to topCenter for invalid input', () => {
        expect(normalizeLegendPos(undefined)).toBe('topCenter');
        expect(normalizeLegendPos('nonsense')).toBe('topCenter');
        expect(normalizeLegendPos(42)).toBe('topCenter');
    });
});

describe('decodeLegendConfig', () => {
    it('empty/invalid → {}', () => {
        expect(decodeLegendConfig(undefined)).toEqual({});
        expect(decodeLegendConfig('not-a-blob')).toEqual({});
    });
    it('round-trips a legendConfig blob', () => {
        const blob = encodeBlob(JSON.stringify({ color: '#f00', icon: 'circle', itemGap: 8 }));
        expect(decodeLegendConfig(blob)).toEqual({ color: '#f00', icon: 'circle', itemGap: 8 });
    });
});

describe('buildLegend — orient override', () => {
    it('auto: a top row derives horizontal', () => {
        expect(buildLegend(legendP({ legendPos: 'topCenter' }), ['a'])).toMatchObject({ orient: 'horizontal' });
    });
    it('auto: a left column derives vertical', () => {
        expect(buildLegend(legendP({ legendPos: 'middleLeft' }), ['a'])).toMatchObject({ orient: 'vertical' });
    });
    it('explicit vertical overrides the edge-derived horizontal', () => {
        expect(buildLegend(legendP({ legendPos: 'topCenter', legend: { orient: 'vertical' } }), ['a'])).toMatchObject({
            orient: 'vertical',
        });
    });
    it('explicit horizontal overrides the edge-derived vertical', () => {
        expect(
            buildLegend(legendP({ legendPos: 'middleLeft', legend: { orient: 'horizontal' } }), ['a']),
        ).toMatchObject({
            orient: 'horizontal',
        });
    });
});

describe('buildLegend — edge offsets (ADR-0021)', () => {
    it('top-left: offsetX adds to the left edge, offsetY to the top', () => {
        expect(buildLegend(legendP({ legendPos: 'topLeft', legend: { offsetX: 10 } }), ['a'])).toMatchObject({
            left: 14,
            top: 4,
        });
        expect(buildLegend(legendP({ legendPos: 'topLeft', legend: { offsetY: 8 } }), ['a'])).toMatchObject({
            top: 12,
            left: 4,
        });
    });
    it('bottom-right: offsetX/Y subtract from the right/bottom edges (right-/down-positive)', () => {
        expect(
            buildLegend(legendP({ legendPos: 'bottomRight', legend: { offsetX: 6, offsetY: 6 } }), ['a']),
        ).toMatchObject({
            right: -2,
            bottom: -2,
        });
    });
    it('centre column ignores offsetX (kept responsive)', () => {
        expect(buildLegend(legendP({ legendPos: 'topCenter', legend: { offsetX: 20 } }), ['a'])).toMatchObject({
            left: 'center',
            top: 4,
        });
    });
    it('middle row ignores offsetY (kept responsive)', () => {
        expect(buildLegend(legendP({ legendPos: 'middleLeft', legend: { offsetY: 20 } }), ['a'])).toMatchObject({
            top: 'center',
            left: 4,
        });
    });
    it('middle-left: offsetX still nudges horizontally', () => {
        expect(buildLegend(legendP({ legendPos: 'middleLeft', legend: { offsetX: 10 } }), ['a'])).toMatchObject({
            left: 14,
            top: 'center',
        });
    });
    it('middle-center: both offsets ignored', () => {
        expect(
            buildLegend(legendP({ legendPos: 'middleCenter', legend: { offsetX: 30, offsetY: 30 } }), ['a']),
        ).toMatchObject({
            top: 'center',
            left: 'center',
        });
    });
});

describe('toPresentationConfig — legend source (ADR-0021 fix)', () => {
    // The editor preview passes the editor state as `src` (legend styling is the `legend` OBJECT);
    // the live body passes rxData (legend styling is the `legendConfig` base64 BLOB). Both must resolve.
    const base = { palette: ['#1'], family: 'cartesian' as const, themeTokens: TOKENS, themeDark: false };
    it('reads the editor-state legend OBJECT when present', () => {
        const p = toPresentationConfig({ ...base, src: { legend: { color: '#f00', orient: 'vertical' } } });
        expect(p.legend).toEqual({ color: '#f00', orient: 'vertical' });
    });
    it('decodes the rxData legendConfig BLOB when no object is present', () => {
        const blob = encodeBlob(JSON.stringify({ icon: 'circle' }));
        const p = toPresentationConfig({ ...base, src: { legendConfig: blob } });
        expect(p.legend).toEqual({ icon: 'circle' });
    });
    it('stamps the resolved themeTokens through (ADR-0027)', () => {
        const p = toPresentationConfig({ ...base, src: {} });
        expect(p.themeTokens).toEqual(TOKENS);
    });
});

describe('toPresentationConfig — xAxis source (ADR-0035)', () => {
    // Same dual-source contract as legend: the editor preview passes the editor state as `src`
    // (xAxis is the OBJECT); the live body passes rxData (xAxis is the base64 BLOB); a legacy
    // widget has only the `xSplit` boolean → synthesised into splitLine.
    const base = { palette: ['#1'], family: 'cartesian' as const, themeTokens: TOKENS, themeDark: false };
    it('reads the editor-state xAxis OBJECT when present', () => {
        const p = toPresentationConfig({ ...base, src: { xAxis: { format: '{HH}:{mm}' } } });
        expect(p.xAxis).toEqual({ format: '{HH}:{mm}' });
    });
    it('decodes the rxData xAxis BLOB when no object is present', () => {
        const blob = encodeBlob(JSON.stringify({ name: 'Zeit', splitLine: true }));
        const p = toPresentationConfig({ ...base, src: { xAxis: blob } });
        expect(p.xAxis).toEqual({ name: 'Zeit', splitLine: true });
    });
    it('synthesises the legacy xSplit boolean into splitLine (legacy widgets render unchanged)', () => {
        const p = toPresentationConfig({ ...base, src: { xSplit: true } });
        expect(p.xAxis).toEqual({ splitLine: true });
    });
    it('defaults to an empty config (plain time axis) when nothing is set', () => {
        const p = toPresentationConfig({ ...base, src: {} });
        expect(p.xAxis).toEqual({});
    });
    it('the blob wins over a stale legacy xSplit', () => {
        const blob = encodeBlob(JSON.stringify({ splitLine: false }));
        const p = toPresentationConfig({ ...base, src: { xAxis: blob, xSplit: true } });
        expect(p.xAxis).toEqual({ splitLine: false });
    });
});

describe('toPresentationConfig — toolbox source (ADR-0045)', () => {
    // The legend dual-source contract applied to the toolbox: the editor preview passes the
    // editor state as `src` (toolbox is the OBJECT); the live body passes rxData (toolbox is the
    // `toolboxConfig` base64 BLOB). Both must resolve.
    const base = { palette: ['#1'], family: 'cartesian' as const, themeTokens: TOKENS, themeDark: false };
    it('reads the editor-state toolbox OBJECT when present', () => {
        const p = toPresentationConfig({
            ...base,
            src: { toolbox: { show: true, features: { restore: { show: true } } } },
        });
        expect(p.toolbox).toEqual({ show: true, features: { restore: { show: true } } });
    });
    it('decodes the rxData toolboxConfig BLOB when no object is present', () => {
        const blob = encodeBlob(JSON.stringify({ show: true, itemSize: 18 }));
        const p = toPresentationConfig({ ...base, src: { toolboxConfig: blob } });
        expect(p.toolbox).toEqual({ show: true, itemSize: 18 });
    });
    it('empty/absent → {} (master off — the builder emits no toolbox block)', () => {
        expect(toPresentationConfig({ ...base, src: {} }).toolbox).toEqual({});
        expect(toPresentationConfig({ ...base, src: { toolboxConfig: '' } }).toolbox).toEqual({});
    });
    it('stamps the resolved themeDark through (the toolbox token literal input)', () => {
        const p = toPresentationConfig({ ...base, themeDark: true, src: {} });
        expect(p.themeDark).toBe(true);
    });
});

describe('resolvePalette + PALETTE_PRESETS — theme palettes (ADR-0053)', () => {
    const FALLBACK = ['#fallback'];

    it('every theme palette is a preset (dropdown coverage)', () => {
        // ColorsSection builds the source dropdown from Object.keys(PALETTE_PRESETS) — a theme
        // palette missing there would be unselectable.
        for (const key of Object.keys(THEME_PALETTES)) {
            expect(PALETTE_PRESETS[key], key).toEqual(THEME_PALETTES[key]);
        }
    });

    it('the curated presets survive the merge', () => {
        for (const key of ['tableau', 'vibrant', 'pastel', 'warm', 'cool', 'accessible']) {
            expect(PALETTE_PRESETS[key], key).toBeDefined();
        }
    });

    it('resolves every theme palette by name', () => {
        for (const [key, colors] of Object.entries(THEME_PALETTES)) {
            expect(resolvePalette('preset', key, undefined, FALLBACK), key).toEqual(colors);
        }
    });

    it('a curated preset still resolves (spot check)', () => {
        expect(resolvePalette('preset', 'tableau', undefined, FALLBACK)).toEqual(PALETTE_PRESETS.tableau);
    });

    it('unknown preset name falls back to the theme palette', () => {
        expect(resolvePalette('preset', 'no-such-preset', undefined, FALLBACK)).toBe(FALLBACK);
    });
});

describe('buildLegend — values + selection (ADR-0054, adapter legActual + legend.selected)', () => {
    const valuesP = (
        over: {
            legendShowValues?: boolean;
            legendValues?: Record<string, number | null>;
            decimalComma?: boolean;
        } = {},
    ): PresentationConfig =>
        ({
            ...legendP(),
            legendShowValues: over.legendShowValues ?? true,
            legendValues: over.legendValues,
            decimalComma: over.decimalComma,
        }) as PresentationConfig;

    it('no legendShowValues → no formatter key (characterisation pin)', () => {
        expect(buildLegend(legendP(), ['a'])).not.toHaveProperty('formatter');
    });

    it('renders Name [value] from the pipeline-resolved current values', () => {
        const l = buildLegend(valuesP({ legendValues: { Temp: 12.5, Hum: 40 } }), ['Temp', 'Hum']);
        const fmt = l.formatter as (name: string) => string;
        expect(fmt('Temp')).toBe('Temp [12.5]');
        expect(fmt('Hum')).toBe('Hum [40]');
    });

    it('a name without a resolved value (or null) falls back to the bare name', () => {
        const l = buildLegend(valuesP({ legendValues: { Temp: null } }), ['Temp', 'Unknown']);
        const fmt = l.formatter as (name: string) => string;
        expect(fmt('Temp')).toBe('Temp');
        expect(fmt('Unknown')).toBe('Unknown');
    });

    it('honours the chart-wide comma separator in the legend value', () => {
        const l = buildLegend(valuesP({ legendValues: { Temp: 12.5 }, decimalComma: true }), ['Temp']);
        expect((l.formatter as (name: string) => string)('Temp')).toBe('Temp [12,5]');
    });

    it('per-series facts format the legend value (ADR-0057): unit + decimals, bare without facts', () => {
        const l = buildLegend(valuesP({ legendValues: { Temp: 21.56, Hum: 40 } }), ['Temp', 'Hum'], [], {
            Temp: { unit: '°C', decimals: 1 },
        });
        const fmt = l.formatter as (name: string) => string;
        expect(fmt('Temp')).toBe('Temp [21.6 °C]');
        expect(fmt('Hum')).toBe('Hum [40]'); // no facts → the plain value text
    });

    it('the legend value NEVER inherits the chart-level tooltip units — only the comma is chart-wide there', () => {
        const l = buildLegend(
            valuesP({ legendValues: { Temp: 21.5 } }),
            ['Temp'],
            [],
            // Even if a future caller passes chart-cluster facts by mistake, the legend's own
            // chart context is comma-only — pinned so the two surfaces cannot silently unify.
            { Temp: { decimals: 1 } },
        );
        expect((l.formatter as (name: string) => string)('Temp')).toBe('Temp [21.5]');
    });

    it('the legend value maps through the bool/enum texts (ADR-0058) — a hit, never a bare number', () => {
        const l = buildLegend(valuesP({ legendValues: { Mode: 1, Pump: 0, Gap: 0.5 } }), ['Mode', 'Pump', 'Gap'], [], {
            Mode: { states: { 0: 'AUS', 1: 'AUTO' } },
            Pump: { trueText: 'AN', falseText: 'AUS' },
            Gap: { states: { 0: 'AUS', 1: 'AUTO' } },
        });
        const fmt = l.formatter as (name: string) => string;
        expect(fmt('Mode')).toBe('Mode [AUTO]');
        expect(fmt('Pump')).toBe('Pump [AUS]');
        expect(fmt('Gap')).toBe('Gap []'); // exact miss → EMPTY bracket (adapter semantics)
    });

    it('emits legend.selected ONLY when a name is hidden — the ticket-08 mechanism (adapter selected[name] = hide !== true)', () => {
        expect(buildLegend(legendP(), ['a', 'b'])).not.toHaveProperty('selected');
        const l = buildLegend(legendP(), ['a', 'b', 'c'], ['b']);
        expect(l.selected).toEqual({ a: true, b: false, c: true });
    });

    it('ADR-0074: the runtime selection authors selected per name — state wins, config (hiddenNames) is the fallback', () => {
        const p = { ...legendP(), legendSelection: { b: false, c: true } };
        // 'c' is config-hidden (hiddenNames) but the state re-enabled it; 'b' is state-hidden.
        const l = buildLegend(p, ['a', 'b', 'c'], ['c']);
        expect(l.selected).toEqual({ a: true, b: false, c: true });
        // A name unknown to the state falls to the config rule.
        const fallback = buildLegend({ ...legendP(), legendSelection: { b: false } }, ['a', 'b', 'c'], ['c']);
        expect(fallback.selected).toEqual({ a: true, b: false, c: false });
    });

    it('ADR-0074: no selected key when the state leaves everything active (the pre-0074 shape)', () => {
        expect(buildLegend({ ...legendP(), legendSelection: { a: true } }, ['a', 'b'])).not.toHaveProperty('selected');
    });
});

describe('decodeMarkLines — legacy dashed migration (parity Build C, ADR-0061)', () => {
    it('dashed true/false → lineStyle dashed/solid; the dashed key is dropped on decode', () => {
        const out = decodeMarkLines(encodeBlob(JSON.stringify([{ id: 'a', value: 5, dashed: true }])));
        expect(out[0]).toEqual({ id: 'a', upper: 5, lineStyle: 'dashed' });
        const solid = decodeMarkLines(encodeBlob(JSON.stringify([{ id: 'b', value: 7, dashed: false }])));
        expect(solid[0]).toEqual({ id: 'b', upper: 7, lineStyle: 'solid' });
        // No boolean at all → only the stage-2 value→upper migration runs: no lineStyle key is
        // stamped (the builder resolves an absent lineStyle as solid — sparse re-save).
        const bare = decodeMarkLines(encodeBlob(JSON.stringify([{ id: 'c', value: 9 }])));
        expect(bare[0]).toEqual({ id: 'c', upper: 9 });
    });

    it('an authored lineStyle wins over any legacy dashed (no double migration)', () => {
        const out = decodeMarkLines(encodeBlob(JSON.stringify([{ value: 5, dashed: true, lineStyle: 'dotted' }])));
        expect(out[0].lineStyle).toBe('dotted');
        expect(out[0].upper).toBe(5);
        expect('dashed' in out[0]).toBe(false);
        expect('value' in out[0]).toBe(false);
    });

    it('the retired one-text label cluster drops on decode (ADR-0081 green cut); colour/axis carry over', () => {
        const out = decodeMarkLines(
            encodeBlob(
                JSON.stringify([
                    {
                        value: 5,
                        dashed: true,
                        label: 'Max',
                        labelPosition: 'end',
                        labelOffset: 3,
                        labelSize: 11,
                        labelColor: '#ff0',
                        color: '#c',
                        yAxisIndex: 1,
                    },
                ]),
            ),
        );
        expect(out[0]).toEqual({ upper: 5, lineStyle: 'dashed', color: '#c', yAxisIndex: 1 });
    });

    it('already-migrated items decode unchanged (idempotent)', () => {
        const out = decodeMarkLines(encodeBlob(JSON.stringify([{ id: 'x', upper: 3, lineStyle: 'dotted' }])));
        expect(out[0]).toEqual({ id: 'x', upper: 3, lineStyle: 'dotted' });
    });
});

describe('decodeMarkLines — stage-2 value→upper migration (parity Build C, ADR-0062)', () => {
    it('legacy value migrates to upper; the value key drops', () => {
        const out = decodeMarkLines(encodeBlob(JSON.stringify([{ id: 'a', value: 50, yAxisIndex: 1 }])));
        expect(out[0]).toEqual({ id: 'a', upper: 50, yAxisIndex: 1 });
    });

    it('authored upper wins over a legacy value (no double migration)', () => {
        const out = decodeMarkLines(encodeBlob(JSON.stringify([{ value: 5, upper: 9 }])));
        expect(out[0].upper).toBe(9);
        expect('value' in out[0]).toBe(false);
    });

    it('numeric-string bounds normalize to numbers; OID strings stay strings; fill passes through', () => {
        const out = decodeMarkLines(encodeBlob(JSON.stringify([{ upper: '20', lower: '0_userdata.0.x', fill: 0.4 }])));
        expect(out[0]).toEqual({ upper: 20, lower: '0_userdata.0.x', fill: 0.4 });
    });
});

describe('markBoundOids / resolveMarkLines (ADR-0062)', () => {
    it('markBoundOids collects string bounds only — numbers/numeric strings are not OIDs', () => {
        const oids = markBoundOids([
            { upper: 10, lower: 'hm-rpc.0.ABC.TEMP' },
            { upper: '0_userdata.0.soll', lower: '' },
            { upper: 'nothing_selected' },
        ]);
        expect(oids).toEqual(['hm-rpc.0.ABC.TEMP', '0_userdata.0.soll']);
    });

    it('resolveMarkLines: numbers pass, OIDs resolve from the injected values, bools coerce 1/0', () => {
        const out = resolveMarkLines([{ upper: 10, lower: '0_userdata.0.soll' }, { upper: '0_userdata.0.pump' }], {
            '0_userdata.0.soll': 18.5,
            '0_userdata.0.pump': true,
        });
        expect(out[0]).toMatchObject({ upper: 10, lower: 18.5 });
        expect(out[1].upper).toBe(1); // toPlottableNumber bool intake
    });

    it('resolveMarkLines: string values parse through the shared intake — "23,5" → 23.5, "true" → 1 (ADR-0077)', () => {
        const out = resolveMarkLines([{ upper: '0_userdata.0.text', lower: '0_userdata.0.pump' }], {
            '0_userdata.0.text': '23,5',
            '0_userdata.0.pump': 'true',
        });
        expect(out[0]).toMatchObject({ upper: 23.5, lower: 1 });
    });

    it('resolveMarkLines: a missing/unconvertible OID bound becomes undefined (drops, no crash)', () => {
        const out = resolveMarkLines(
            [
                { upper: '0_userdata.0.missing', lower: 5 },
                { upper: '0_userdata.0.text', lower: '0_userdata.0.also-missing' },
            ],
            { '0_userdata.0.text': 'not-a-number' },
        );
        expect(out[0]).toMatchObject({ upper: undefined, lower: 5 });
        expect(out[1].upper).toBeUndefined();
        expect(out[1].lower).toBeUndefined();
    });
});
