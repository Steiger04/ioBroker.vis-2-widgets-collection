import { describe, expect, it } from 'vitest';
import type { Theme } from '@mui/material';
import type { WidgetStyleState } from '@iobroker/types-vis-2/visBaseWidget';
import type { OidObject } from '../../types/utility-types';
import { createPropertyResolvers } from './propertyResolvers';
import { getStyleData } from './styleDataResolver';
import type { MarkerLayer, PropertyResolvers } from './types';

// Characterization tests pinning the resolver layer's de-facto contract
// (params -> createPropertyResolvers -> getStyleData -> StyleData). The chain is
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
    backgroundStyles?: { 'background-color'?: string };
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

const resolve = (
    r: PropertyResolvers,
    ext: string | number = '',
    includeActive = false,
): ReturnType<typeof getStyleData> => getStyleData(ext, includeActive, r);

describe('getStyleData — empty rxData resolves to known defaults', () => {
    it('returns the full default StyleData shape for an empty non-slider widget', () => {
        const r = buildResolvers();
        expect(resolve(r)).toEqual({
            icon: '',
            iconActive: '',
            iconSizeCm: '24px',
            iconSize: '24px',
            iconSizeActive: '24px',
            iconSizeOnly: '100%',
            iconWidth: 100,
            iconHeight: 100,
            iconSizeActiveOnly: undefined,
            forceColorMaskCm: false,
            forceColorMask: false,
            forceColorMaskActive: false,
            iconColor: THEME_PRIMARY,
            iconColorActive: '',
            iconXOffsetCm: '0px',
            iconYOffsetCm: '0px',
            iconXOffset: '0px',
            iconYOffset: '0px',
            iconXOffsetActive: '0px',
            iconYOffsetActive: '0px',
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
            valueSizeActive: null,
            backgroundColor: '',
            background: '',
            backgroundActive: undefined,
            frameBackgroundColor: '',
            frameBackground: THEME_PAPER,
            frameBackgroundActive: undefined,
        });
    });
});

describe('getStyleData — populated base tier (ext="", includeActive=false)', () => {
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
            iconActive: '',
            iconSizeCm: 'calc(24px * 200 / 100)',
            iconSize: 'calc(24px * 200 / 100)',
            iconSizeActive: '24px',
            iconSizeOnly: '200%',
            iconWidth: 200,
            iconHeight: 200,
            iconSizeActiveOnly: undefined,
            forceColorMaskCm: true,
            forceColorMask: true,
            forceColorMaskActive: false,
            iconColor: '#basecolor',
            iconColorActive: '',
            iconXOffsetCm: '5px',
            iconYOffsetCm: '7px',
            iconXOffset: '5px',
            iconYOffset: '7px',
            iconXOffsetActive: '0px',
            iconYOffsetActive: '0px',
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
            valueSizeActive: null,
            backgroundColor: '',
            background: 'grad(x)',
            backgroundActive: undefined,
            frameBackgroundColor: '',
            frameBackground: 'grad(y)',
            frameBackgroundActive: undefined,
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
        'fontSize',
        {
            ...TEXT_SIZE_TIERS,
            read: (r, ext) => r.fontSize(ext, false),
            resolved: { marker: '18%', base: '16%', perState: '30%' },
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
        ['no value', undefined],
        ['null', null],
        ['an object', { a: 1 }],
        ['an array', [1, 2]],
        ['NaN', NaN],
    ])('has no text for %s', (_what, value) => {
        expect(rowValue(value)).toBeUndefined();
    });
});

describe('noIcon short-circuit', () => {
    it('suppresses icon and iconActive regardless of other config', () => {
        const r = buildResolvers({ rxData: { noIcon: true, icon: 'base', iconActive: 'act' } });
        expect(resolve(r).icon).toBe('');
        expect(resolve(r, 1, true).icon).toBe('');
        expect(resolve(r, 1, true).iconActive).toBe('');
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
