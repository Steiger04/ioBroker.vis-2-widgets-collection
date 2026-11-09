import { describe, expect, it } from 'vitest';
import type { Theme } from '@mui/material';
import type { WidgetStyleState } from '@iobroker/types-vis-2/visBaseWidget';
import type { OidObject } from '../../types/utility-types';
import { createPropertyResolvers, resolveStyleEntry, type PropertyResolvers } from './propertyResolvers';
import type { MarkerLayer, StyleData } from './types';

// Characterization tests pinning the resolver layer's de-facto contract
// (params -> createPropertyResolvers -> resolveStyleEntry -> StyleData). The chain is
// fully pure — runtime seams live only in useData.tsx, which passes everything in
// as plain values — so we build a CreatePropertyResolversParams literal with
// hand-rolled getDataValue/formatSize closures. No vi.mock needed.
//
// Purpose: the marker layer is passed in explicitly (`markerLayer`, supplied by
// the widget via useData's options — no type detection). These tests pin its one
// position in every chain carrying it (CONTEXT "Marker-Ebene"), with and without it.

interface ResolverOpts {
    rxData?: Record<string, any>;
    markerLayer?: MarkerLayer;
    oidObject?: { unit?: string };
    oidName?: string;
    textStyles?: { color?: string };
    fontStyles?: { 'font-size'?: string };
    backgroundStyles?: { 'background-color'?: string; background?: string };
}

const THEME_PRIMARY = '#pri';
const THEME_TEXT = '#txt';
const THEME_PAPER = '#pap';

function buildResolvers(opts: ResolverOpts = {}): PropertyResolvers {
    const rxData = opts.rxData ?? {};
    const getDataValue = <T>(key: string, ext: string): T | undefined => rxData[`${key}${ext}`] as T | undefined;
    return createPropertyResolvers({
        rxData,
        oidObject: opts.oidObject as OidObject | undefined,
        oidName: opts.oidName,
        theme: {
            palette: {
                primary: { main: THEME_PRIMARY },
                text: { primary: THEME_TEXT },
                background: { paper: THEME_PAPER, default: THEME_PAPER },
            },
        } as unknown as Theme,
        fontStyles: opts.fontStyles as WidgetStyleState | undefined,
        textStyles: opts.textStyles as WidgetStyleState | undefined,
        backgroundStyles: opts.backgroundStyles as WidgetStyleState | undefined,
        formatSize: (n: number | string | undefined): string | undefined => (n == null ? undefined : `${n}%`),
        getDataValue,
        markerLayer: opts.markerLayer ?? {},
    });
}

const resolve = (r: PropertyResolvers, ext: string | number = '', includeActive = false): StyleData =>
    resolveStyleEntry(r, ext, includeActive);

describe('resolveStyleEntry — empty rxData resolves to known defaults', () => {
    it('returns the full default StyleData shape for an empty non-slider widget', () => {
        const r = buildResolvers();
        expect(resolve(r)).toEqual({
            icon: '',
            iconSizeCm: '24px',
            iconSize: '24px',
            iconSizeOnly: '100%',
            iconWidth: 100,
            iconHeight: 100,
            forceColorMaskCm: false,
            forceColorMask: false,
            iconColor: THEME_PRIMARY,
            iconXOffsetCm: '0px',
            iconYOffsetCm: '0px',
            iconXOffset: '0px',
            iconYOffset: '0px',
            textColorActive: undefined,
            textColorCm: THEME_TEXT,
            textColor: THEME_TEXT,
            header: '',
            headerSize: null,
            footer: '',
            footerSize: null,
            alias: '',
            value: undefined,
            valueSize: null,
            backgroundColor: '',
            background: '',
            frameBackgroundColor: '',
            frameBackground: THEME_PAPER,
        });
    });
});

describe('resolveStyleEntry — populated base tier (ext="", includeActive=false)', () => {
    const r = buildResolvers({
        rxData: {
            icon: 'base-icon',
            iconSmall: 'base-icon-small',
            iconSize: 200,
            iconColor: '#basecolor',
            iconXOffset: '5px',
            iconYOffset: '7px',
            enableIconColorMask: true,
            textColor: '#text',
            header: 'My Header',
            headerSize: 14,
            footer: 'My Footer',
            footerSize: 12,
            alias: 'My Alias',
            value: 42,
            valueSize: 16,
            background: 'grad(x)',
            frameBackground: 'grad(y)',
        },
        oidObject: { unit: '°C' },
    });

    it('resolves every field from its base rxData tier', () => {
        expect(resolve(r)).toEqual({
            icon: 'base-icon',
            iconSizeCm: 'calc(24px * 200 / 100)',
            iconSize: 'calc(24px * 200 / 100)',
            iconSizeOnly: '200%',
            iconWidth: 200,
            iconHeight: 200,
            forceColorMaskCm: true,
            forceColorMask: true,
            iconColor: '#basecolor',
            iconXOffsetCm: '5px',
            iconYOffsetCm: '7px',
            iconXOffset: '5px',
            iconYOffset: '7px',
            textColorActive: undefined,
            textColorCm: '#text',
            textColor: '#text',
            header: 'My Header',
            headerSize: '14%',
            footer: 'My Footer',
            footerSize: '12%',
            alias: 'My Alias',
            value: '42°C',
            valueSize: '16%',
            backgroundColor: '',
            background: 'grad(x)',
            frameBackgroundColor: '',
            frameBackground: 'grad(y)',
        });
    });

    it('active tier wins when includeActive and an *Active value is set (ext=1)', () => {
        const ra = buildResolvers({
            rxData: {
                icon: 'base',
                iconActive: 'act-icon',
                iconColor: '#base',
                iconColorActive: '#act',
                textColor: '#txt',
                textColorActive: '#acttxt',
                background: 'grad',
                backgroundActive: 'actgrad',
            },
        });
        const sd = resolve(ra, 1, true);
        expect(sd.icon).toBe('act-icon');
        expect(sd.iconColor).toBe('#act');
        expect(sd.textColor).toBe('#acttxt');
        expect(sd.background).toBe('actgrad');
    });
});

describe('style-object fallbacks apply when the rxData tier is absent', () => {
    it('falls back to textStyles.color, font-size and background-color', () => {
        const r = buildResolvers({
            textStyles: { color: '#tsColor' },
            fontStyles: { 'font-size': '13px' },
            backgroundStyles: { 'background-color': '#bsColor' },
        });
        const sd = resolve(r);
        expect(sd.textColorCm).toBe('#tsColor');
        expect(sd.textColor).toBe('#tsColor');
        expect(sd.headerSize).toBe('13px');
        expect(sd.valueSize).toBe('13px');
        expect(sd.backgroundColor).toBe('#bsColor');
        expect(sd.frameBackgroundColor).toBe('#bsColor');
    });

    it('takes the background colours from the CSS alone — a value stored before 2026-02-12 no longer wins', () => {
        // The base fields backgroundColor/frameBackgroundColor were retired on 2026-02-12: a stored
        // value is invisible in the configurator, so it must not override the widget's CSS.
        const r = buildResolvers({
            rxData: { backgroundColor: '#stored', frameBackgroundColor: '#stored' },
            backgroundStyles: { 'background-color': '#bsColor' },
        });
        const sd = resolve(r);
        expect(sd.backgroundColor).toBe('#bsColor');
        expect(sd.frameBackgroundColor).toBe('#bsColor');
    });
});

/** One chain carrying the marker layer: its three tiers and the value each one resolves to. */
interface MarkerChainCase {
    /** The marker layer carrying a value for this chain. */
    marker: MarkerLayer;
    /** The base tier (`ext=''`) in the widget data. */
    base: Record<string, unknown>;
    /** The per-state tier of Feldnummer 1. */
    perState: Record<string, unknown>;
    /** Reads the chain for a state extension. */
    read: (r: PropertyResolvers, ext: string | number) => unknown;
    /** What each tier resolves to. */
    resolved: { marker: unknown; base: unknown; perState: unknown };
}

const ICON_TIERS = { marker: { iconSize: 50 }, base: { iconSize: 200 }, perState: { iconSize1: 300 } };
const ICON_COLOR_TIERS = {
    marker: { iconColor: '#mcol' },
    base: { iconColor: '#base' },
    perState: { iconColor1: '#state' },
};
const TEXT_COLOR_TIERS = {
    marker: { textColor: '#mtxt' },
    base: { textColor: '#base' },
    perState: { textColor1: '#state' },
};
const TEXT_SIZE_TIERS = { marker: { textSize: 18 }, base: { valueSize: 16 }, perState: { valueSize1: 30 } };

const MARKER_CHAINS: [string, MarkerChainCase][] = [
    [
        'iconSize',
        {
            ...ICON_TIERS,
            read: (r, ext) => r.iconSize(ext, false),
            resolved: {
                marker: 'calc(24px * 50 / 100)',
                base: 'calc(24px * 200 / 100)',
                perState: 'calc(24px * 300 / 100)',
            },
        },
    ],
    [
        'iconWidth',
        {
            ...ICON_TIERS,
            read: (r, ext) => r.iconWidth(ext, false),
            resolved: { marker: 50, base: 200, perState: 300 },
        },
    ],
    [
        'iconHeight',
        {
            ...ICON_TIERS,
            read: (r, ext) => r.iconHeight(ext, false),
            resolved: { marker: 50, base: 200, perState: 300 },
        },
    ],
    [
        'iconColor',
        {
            ...ICON_COLOR_TIERS,
            read: (r, ext) => r.iconColor(ext, false),
            resolved: { marker: '#mcol', base: '#base', perState: '#state' },
        },
    ],
    [
        'textColor',
        {
            ...TEXT_COLOR_TIERS,
            read: (r, ext) => r.textColor(ext, false),
            resolved: { marker: '#mtxt', base: '#base', perState: '#state' },
        },
    ],
    [
        'textColorActive',
        {
            ...TEXT_COLOR_TIERS,
            read: (r, ext) => r.textColorActive(ext, true),
            resolved: { marker: '#mtxt', base: '#base', perState: '#state' },
        },
    ],
    [
        'valueSize',
        {
            ...TEXT_SIZE_TIERS,
            read: (r, ext) => r.valueSize(ext, false),
            resolved: { marker: '18%', base: '16%', perState: '30%' },
        },
    ],
];

describe('marker layer applies to marks only, between per-state and base', () => {
    // Every chain carrying the marker layer places it at the SAME position — behind
    // the per-state tier, before the base — the base resolution of a mark (ext='')
    // included. Without the layer (the active style `data`), the chain resolves as
    // if the tier did not exist.
    it.each(MARKER_CHAINS)('%s: per-state → marker → base', (_property, chain) => {
        const { marker, base, perState, read, resolved } = chain;

        // Base resolution for marks: the marker beats the base.
        expect(read(buildResolvers({ markerLayer: marker, rxData: base }), '')).toBe(resolved.marker);
        // A state without its own value takes the marker, not the base.
        expect(read(buildResolvers({ markerLayer: marker, rxData: base }), 1)).toBe(resolved.marker);
        // The state's own value beats the marker.
        expect(read(buildResolvers({ markerLayer: marker, rxData: { ...base, ...perState } }), 1)).toBe(
            resolved.perState,
        );
        // Without the layer the base wins.
        expect(read(buildResolvers({ rxData: base }), '')).toBe(resolved.base);
    });

    it('textColor: an empty marker text colour counts as unset', () => {
        const emptyMarker = buildResolvers({
            markerLayer: { textColor: '' },
            textStyles: { color: '#tsColor' },
        });
        expect(resolve(emptyMarker).textColor).toBe('#tsColor');
    });
});

describe('value — the row value with its unit', () => {
    const rowValue = (value1: unknown, unit: string | undefined = '°C'): string | undefined =>
        buildResolvers({ rxData: { value1 }, oidObject: { unit } }).value(1, false);

    it.each([
        ['a string', '21', '21°C'],
        ['a number', 21, '21°C'],
        ['a zero', 0, '0°C'],
        ['a false', false, 'false°C'],
    ])('appends the unit to %s, as a string', (_what, value, text) => {
        expect(rowValue(value)).toBe(text);
    });

    it.each([
        ['a number', 21, '21'],
        ['a zero', 0, '0'],
        ['a false', false, 'false'],
    ])('stringifies %s without a unit', (_what, value, text) => {
        expect(buildResolvers({ rxData: { value1: value } }).value(1, false)).toBe(text);
    });

    it.each([
        ['an empty string', ''],
        ['spaces', '   '],
    ])('carries no lone unit for %s', (_what, value) => {
        expect(rowValue(value)).toBe(value);
    });

    it.each([
        ['no value', undefined],
        ['null', null],
        ['an object', { a: 1 }],
        ['an array', [1, 2]],
        ['NaN', NaN],
    ])('has no text for %s', (_what, value) => {
        expect(rowValue(value)).toBeUndefined();
    });
});

/** The stages a chain can have, first wins. The terminal follows the last one. */
type StageName = 'active' | 'row' | 'marker' | 'base' | 'style';

const STAGE_ORDER: StageName[] = ['active', 'row', 'marker', 'base', 'style'];

/**
 * One chain as a table row. A stage pairs its input with what the chain then resolves to;
 * a stage left out is pinned as absent: its input, set, changes nothing.
 */
interface ChainCase {
    /** The widget-data field behind the chain: `<field>Active`, `<field>1` and `<field>`. */
    field: string;
    /** The Active tier: the raw value of `<field>Active`. */
    active?: [raw: unknown, resolved: unknown];
    /** The state's own row, here Feldnummer 1: the raw value of `<field>1`. */
    row?: [raw: unknown, resolved: unknown];
    /** The marker layer of a mark. */
    marker?: [layer: MarkerLayer, resolved: unknown];
    /** The widget-level base: the raw value of `<field>`. */
    base?: [raw: unknown, resolved: unknown];
    /** Behind the widget data: the vis-2 widget style, for the header the OID's name. */
    style?: [source: ResolverOpts, resolved: unknown];
    /** What the chain ends on with nothing set. */
    terminal: unknown;
}

const SIZE_ICON = (percent: number): string => `calc(24px * ${percent} / 100)`;

const FONT_STYLE: ResolverOpts = { fontStyles: { 'font-size': '13px' } };
const TEXT_STYLE: ResolverOpts = { textStyles: { color: '#style' } };
const BACKGROUND_STYLE: ResolverOpts = { backgroundStyles: { 'background-color': '#style' } };

/** Every source behind the widget data at once — what a chain without that stage must ignore. */
const ANY_STYLE: ResolverOpts = {
    ...FONT_STYLE,
    ...TEXT_STYLE,
    backgroundStyles: { 'background-color': '#style', background: 'style-gradient' },
    oidName: 'Lamp',
};
/** A full marker layer — what a chain without that stage must ignore. */
const ANY_MARKER: MarkerLayer = { iconSize: 50, iconColor: '#marker', textColor: '#marker', textSize: 18 };

// Soll-Werte read from the chains as they are (ADR-0111 Nr. 9): the asymmetry is on purpose
// and frozen here. iconXOffset, iconYOffset, iconSizeOnly and forceColorMask have no base
// stage because their base fields carry the Eck-Icon; alias and value are the row's alone.
const CHAINS: [keyof PropertyResolvers, ChainCase][] = [
    [
        'icon',
        {
            field: 'icon',
            active: ['icon-active', 'icon-active'],
            row: ['icon-row', 'icon-row'],
            base: ['icon-base', 'icon-base'],
            terminal: '',
        },
    ],
    ['iconSizeCm', { field: 'iconSize', base: [200, SIZE_ICON(200)], terminal: '24px' }],
    [
        'iconSize',
        {
            field: 'iconSize',
            active: [70, SIZE_ICON(70)],
            row: [30, SIZE_ICON(30)],
            marker: [{ iconSize: 50 }, SIZE_ICON(50)],
            base: [200, SIZE_ICON(200)],
            terminal: '24px',
        },
    ],
    ['iconSizeOnly', { field: 'iconSize', active: [70, '70%'], row: [30, '30%'], terminal: '100%' }],
    [
        'iconWidth',
        {
            field: 'iconSize',
            active: [70, 70],
            row: [30, 30],
            marker: [{ iconSize: 50 }, 50],
            base: [200, 200],
            terminal: 100,
        },
    ],
    [
        'iconHeight',
        {
            field: 'iconSize',
            active: [70, 70],
            row: [30, 30],
            marker: [{ iconSize: 50 }, 50],
            base: [200, 200],
            terminal: 100,
        },
    ],
    ['forceColorMaskCm', { field: 'enableIconColorMask', base: [true, true], terminal: false }],
    // Active false over row true: the two stages differ although the values are booleans.
    ['forceColorMask', { field: 'enableIconColorMask', active: [false, false], row: [true, true], terminal: false }],
    [
        'iconColor',
        {
            field: 'iconColor',
            active: ['#active', '#active'],
            row: ['#row', '#row'],
            marker: [{ iconColor: '#marker' }, '#marker'],
            base: ['#base', '#base'],
            terminal: THEME_PRIMARY,
        },
    ],
    ['iconXOffsetCm', { field: 'iconXOffset', base: ['5px', '5px'], terminal: '0px' }],
    ['iconYOffsetCm', { field: 'iconYOffset', base: ['7px', '7px'], terminal: '0px' }],
    ['iconXOffset', { field: 'iconXOffset', active: ['1px', '1px'], row: ['2px', '2px'], terminal: '0px' }],
    ['iconYOffset', { field: 'iconYOffset', active: ['3px', '3px'], row: ['4px', '4px'], terminal: '0px' }],
    [
        'textColorActive',
        {
            field: 'textColor',
            row: ['#row', '#row'],
            marker: [{ textColor: '#marker' }, '#marker'],
            base: ['#base', '#base'],
            terminal: undefined,
        },
    ],
    [
        'textColorCm',
        { field: 'textColor', base: ['#base', '#base'], style: [TEXT_STYLE, '#style'], terminal: THEME_TEXT },
    ],
    [
        'textColor',
        {
            field: 'textColor',
            active: ['#active', '#active'],
            row: ['#row', '#row'],
            marker: [{ textColor: '#marker' }, '#marker'],
            base: ['#base', '#base'],
            style: [TEXT_STYLE, '#style'],
            terminal: THEME_TEXT,
        },
    ],
    [
        'headerSize',
        {
            field: 'headerSize',
            active: [14, '14%'],
            row: [12, '12%'],
            base: [10, '10%'],
            style: [FONT_STYLE, '13px'],
            terminal: null,
        },
    ],
    [
        'footerSize',
        {
            field: 'footerSize',
            active: [14, '14%'],
            row: [12, '12%'],
            base: [10, '10%'],
            style: [FONT_STYLE, '13px'],
            terminal: null,
        },
    ],
    [
        'valueSize',
        {
            field: 'valueSize',
            active: [25, '25%'],
            row: [30, '30%'],
            marker: [{ textSize: 18 }, '18%'],
            base: [16, '16%'],
            style: [FONT_STYLE, '13px'],
            terminal: null,
        },
    ],
    [
        'header',
        {
            field: 'header',
            active: ['Active', 'Active'],
            row: ['Row', 'Row'],
            base: ['Base', 'Base'],
            style: [{ oidName: 'Lamp' }, 'Lamp'],
            terminal: '',
        },
    ],
    [
        'footer',
        { field: 'footer', active: ['Active', 'Active'], row: ['Row', 'Row'], base: ['Base', 'Base'], terminal: '' },
    ],
    ['alias', { field: 'alias', row: ['Row', 'Row'], terminal: '' }],
    ['value', { field: 'value', row: [21, '21'], terminal: undefined }],
    ['backgroundColor', { field: 'backgroundColor', style: [BACKGROUND_STYLE, '#style'], terminal: '' }],
    [
        'background',
        {
            field: 'background',
            active: ['a-grad', 'a-grad'],
            row: ['r-grad', 'r-grad'],
            base: ['b-grad', 'b-grad'],
            terminal: '',
        },
    ],
    ['frameBackgroundColor', { field: 'frameBackgroundColor', style: [BACKGROUND_STYLE, '#style'], terminal: '' }],
    [
        'frameBackground',
        {
            field: 'frameBackground',
            active: ['a-grad', 'a-grad'],
            row: ['r-grad', 'r-grad'],
            base: ['b-grad', 'b-grad'],
            terminal: THEME_PAPER,
        },
    ],
];

/** What sets a stage, for a raw value. */
const stageInput = (field: string, name: StageName, raw: unknown): ResolverOpts => {
    switch (name) {
        case 'active':
            return { rxData: { [`${field}Active`]: raw } };
        case 'row':
            return { rxData: { [`${field}1`]: raw } };
        case 'base':
            return { rxData: { [field]: raw } };
        case 'marker':
            return { markerLayer: raw as MarkerLayer };
        case 'style':
            return raw as ResolverOpts;
    }
};

const mergeInputs = (inputs: ResolverOpts[]): ResolverOpts =>
    inputs.reduce<ResolverOpts>((all, input) => ({ ...all, ...input, rxData: { ...all.rxData, ...input.rxData } }), {});

/** The stages a table row declares, first wins, as input and result. */
const stagesOf = (chain: ChainCase): { name: StageName; input: ResolverOpts; resolved: unknown }[] =>
    STAGE_ORDER.flatMap(name => {
        const stage = chain[name];
        return stage ? [{ name, input: stageInput(chain.field, name, stage[0]), resolved: stage[1] }] : [];
    });

/** Reads a chain for Feldnummer 1. */
const readRow = (key: keyof PropertyResolvers, input: ResolverOpts, includeActive = true): unknown =>
    buildResolvers(input)[key](1, includeActive);

describe('chains — the stages of every key, and its terminal', () => {
    it('covers every key of the style entry', () => {
        expect(CHAINS.map(([key]) => key).sort()).toEqual(Object.keys(buildResolvers()).sort());
    });

    it.each(CHAINS)('%s: each stage beats the ones behind it', (key, chain) => {
        const stages = stagesOf(chain);

        stages.forEach((stage, position) => {
            const fromHere = mergeInputs(stages.slice(position).map(({ input }) => input));
            expect(readRow(key, fromHere)).toBe(stage.resolved);
        });
    });

    it.each(CHAINS)('%s: ends on its terminal with nothing set', (key, chain) => {
        expect(readRow(key, {})).toBe(chain.terminal);
    });

    it.each(CHAINS)('%s: a stage it does not have changes nothing', (key, chain) => {
        const probe = chain.row?.[0] ?? chain.base?.[0] ?? chain.active?.[0] ?? 'probe';
        const absent = STAGE_ORDER.filter(name => !chain[name]);

        for (const name of absent) {
            const raw = name === 'marker' ? ANY_MARKER : name === 'style' ? ANY_STYLE : probe;
            expect(readRow(key, stageInput(chain.field, name, raw)), name).toBe(chain.terminal);
        }
    });

    it.each(CHAINS.filter(([, chain]) => chain.active))(
        '%s: the Active stage only takes part with includeActive',
        (key, chain) => {
            const [, ...behindActive] = stagesOf(chain);
            const everything = mergeInputs(stagesOf(chain).map(({ input }) => input));
            const expected = behindActive.length ? behindActive[0].resolved : chain.terminal;

            expect(readRow(key, everything, false)).toBe(expected);
        },
    );

    it('textColorActive: resolves nothing without includeActive', () => {
        expect(
            readRow('textColorActive', { rxData: { textColor1: '#row', textColor: '#base' } }, false),
        ).toBeUndefined();
    });

    it('icon: within a stage the icon beats the small icon, which then fills in', () => {
        const rxData = { iconSmallActive: 'small-active', iconSmall1: 'small-row', iconSmall: 'small-base' };

        expect(readRow('icon', { rxData })).toBe('small-active');
        expect(readRow('icon', { rxData: { ...rxData, iconActive: 'icon-active' } })).toBe('icon-active');
        expect(readRow('icon', { rxData: { iconSmall1: 'small-row', iconSmall: 'small-base' } })).toBe('small-row');
        expect(readRow('icon', { rxData: { iconSmall: 'small-base' } })).toBe('small-base');
    });
});

describe('chains — a field without a base stage still resolves for the base itself', () => {
    // At ext='' the row stage reads the unsuffixed field: the base resolution sees what no
    // row falls back on. That is what the Eck-Icon reads through the Cm chains too.
    it.each([
        ['iconXOffset', { iconXOffset: '5px' }, '5px', '0px'],
        ['iconYOffset', { iconYOffset: '7px' }, '7px', '0px'],
        ['iconSizeOnly', { iconSize: 200 }, '200%', '100%'],
        ['forceColorMask', { enableIconColorMask: true }, true, false],
        ['alias', { alias: 'Base' }, 'Base', ''],
        ['value', { value: 21 }, '21', undefined],
    ] as [keyof PropertyResolvers, Record<string, unknown>, unknown, unknown][])(
        '%s: the base field counts at ext="", not for a row',
        (key, rxData, atBase, atRow) => {
            const resolvers = buildResolvers({ rxData });

            expect(resolvers[key]('', false)).toBe(atBase);
            expect(resolvers[key](1, false)).toBe(atRow);
        },
    );
});

describe('noIcon short-circuit', () => {
    it('suppresses the icon regardless of other config', () => {
        const r = buildResolvers({ rxData: { noIcon: true, icon: 'base', iconActive: 'act', icon1: 'row' } });
        expect(resolve(r).icon).toBe('');
        expect(resolve(r, 1, true).icon).toBe('');
    });
});

describe('legacy state-row keys (LEGACY_STATE_ROW_KEYS)', () => {
    it('resolves none of them into the style data — no renderer reads them', () => {
        // The former per-state editor fields a row still carries for data preservation only.
        const r = buildResolvers({
            rxData: { value1: 1, iconHover1: 150, backgroundColor1: '#f00', frameBackgroundColor1: '#0f0' },
        });
        const sd = resolve(r, 1, true);

        expect(sd).not.toHaveProperty('iconHoverActive');
        expect(sd).not.toHaveProperty('backgroundColorActive');
        expect(sd).not.toHaveProperty('frameBackgroundColorActive');
    });
});

describe('retired icon hover field', () => {
    it('resolves no iconHover — the field is gone (2026-02-12) and no renderer reads it', () => {
        const r = buildResolvers({ rxData: { iconHover: 150, value1: 1, iconHover1: 150 } });

        expect(resolve(r)).not.toHaveProperty('iconHover');
        expect(resolve(r, 1, true)).not.toHaveProperty('iconHover');
    });
});
