import { describe, expect, it } from 'vitest';
import type { Theme } from '@mui/material';
import type { WidgetStyleState } from '@iobroker/types-vis-2/visBaseWidget';
import type { OidObject } from '../../types/utility-types';
import { createPropertyResolvers } from './propertyResolvers';
import { getStyleData } from './styleDataResolver';
import type { PropertyResolvers, SliderProperties } from './types';

// Characterization tests pinning the resolver layer's de-facto contract
// (params -> createPropertyResolvers -> getStyleData -> StyleData). The chain is
// fully pure — runtime seams live only in useData.tsx, which passes everything in
// as plain values — so we build a CreatePropertyResolversParams literal with
// hand-rolled getDataValue/formatSize closures. No vi.mock needed.
//
// Purpose: F1 Stufe 2 removed the redundant isSlider flag (slider-ness is now
// carried solely by `widgetResolver`). These tests prove the marker resolution is
// unchanged for slider and non-slider widgets alike.

interface ResolverOpts {
    rxData?: Record<string, any>;
    widgetResolver?: SliderProperties | Record<string, never>;
    oidObject?: { unit?: string };
    oidName?: string;
    textStyles?: { color?: string };
    fontStyles?: { 'font-size'?: string };
    backgroundStyles?: { 'background-color'?: string };
}

const THEME_PRIMARY = '#pri';

function buildResolvers(opts: ResolverOpts = {}): PropertyResolvers {
    const rxData = opts.rxData ?? {};
    const getDataValue = <T>(key: string, ext: string): T | undefined => rxData[`${key}${ext}`] as T | undefined;
    return createPropertyResolvers({
        rxData,
        oidObject: opts.oidObject as OidObject | undefined,
        oidName: opts.oidName,
        theme: { palette: { primary: { main: THEME_PRIMARY } } } as unknown as Theme,
        fontStyles: opts.fontStyles as WidgetStyleState | undefined,
        textStyles: opts.textStyles as WidgetStyleState | undefined,
        backgroundStyles: opts.backgroundStyles as WidgetStyleState | undefined,
        formatSize: (n: number | string | undefined): string | undefined => (n == null ? undefined : `${n}%`),
        getDataValue,
        widgetResolver: opts.widgetResolver ?? {},
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
            iconHover: '',
            iconHoverActive: undefined,
            iconXOffsetCm: '0px',
            iconYOffsetCm: '0px',
            iconXOffset: '0px',
            iconYOffset: '0px',
            iconXOffsetActive: '0px',
            iconYOffsetActive: '0px',
            textColorActive: undefined,
            textColorCm: '',
            textColor: '',
            header: '',
            headerSize: null,
            footer: '',
            footerSize: null,
            alias: '',
            value: undefined,
            valueSize: null,
            valueSizeActive: null,
            backgroundColor: '',
            backgroundColorActive: undefined,
            background: '',
            backgroundActive: undefined,
            frameBackgroundColor: '',
            frameBackgroundColorActive: undefined,
            frameBackground: '',
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
            iconHover: 50,
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
            backgroundColor: '#bgcol',
            background: 'grad(x)',
            frameBackgroundColor: '#frbgcol',
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
            iconHover: '50%',
            iconHoverActive: undefined,
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
            backgroundColor: '#bgcol',
            backgroundColorActive: undefined,
            background: 'grad(x)',
            backgroundActive: undefined,
            frameBackgroundColor: '#frbgcol',
            frameBackgroundColorActive: undefined,
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
});

describe('isSlider — marker values slot into the fallback chain at the correct tier', () => {
    // The contract an "extract isSlider" refactor most easily breaks: each marker
    // value is inserted at a SPECIFIC position relative to the active/ext/base
    // tiers. These cases pin that position by populating multiple tiers at once.
    const marker: SliderProperties = {
        markerIconSize: 50,
        markerTextColor: '#mtxt',
        markerTextSize: 18,
        markerIconColor: '#mcol',
    };

    it('iconSize: marker beats base, but ext (iconSize1) beats marker', () => {
        // No base, no ext -> marker wins
        const markerOnly = buildResolvers({ widgetResolver: marker });
        expect(resolve(markerOnly).iconSize).toBe('calc(24px * 50 / 100)');
        // Base present -> marker still wins (inserted before base)
        const withBase = buildResolvers({ widgetResolver: marker, rxData: { iconSize: 200 } });
        expect(resolve(withBase).iconSize).toBe('calc(24px * 50 / 100)');
        // Ext present -> ext wins (inserted before marker)
        const withExt = buildResolvers({ widgetResolver: marker, rxData: { iconSize1: 300 } });
        expect(resolve(withExt, '1').iconSize).toBe('calc(24px * 300 / 100)');
    });

    it('iconWidth/iconHeight: ext/iconSize tier beats marker; marker wins only when that tier is empty', () => {
        // Note the contrast with iconSize above: here the ext-tier option reads
        // `iconSize` directly, so with ext="" it already sees rxData.iconSize and
        // shadows the marker (the marker sits one position later).
        const r = buildResolvers({ widgetResolver: marker });
        expect(resolve(r).iconWidth).toBe(50);
        expect(resolve(r).iconHeight).toBe(50);
        // rxData.iconSize set -> the ext="" tier reads it and wins over the marker
        const withBase = buildResolvers({ widgetResolver: marker, rxData: { iconSize: 200 } });
        expect(resolve(withBase).iconWidth).toBe(200);
        // A real ext index with a value also wins over the marker
        const withExt = buildResolvers({ widgetResolver: marker, rxData: { iconSize1: 300 } });
        expect(resolve(withExt, '1').iconWidth).toBe(300);
        // ext index absent and base absent -> marker wins
        const extAbsent = buildResolvers({ widgetResolver: marker, rxData: { other: 1 } });
        expect(resolve(extAbsent, '1').iconWidth).toBe(50);
    });

    it('iconColor: marker beats base; theme is the last resort', () => {
        const r = buildResolvers({ widgetResolver: marker });
        expect(resolve(r).iconColor).toBe('#mcol');
        const withBase = buildResolvers({ widgetResolver: marker, rxData: { iconColor: '#base' } });
        expect(resolve(withBase).iconColor).toBe('#mcol');
        // Non-slider, no color anywhere -> theme primary
        expect(resolve(buildResolvers()).iconColor).toBe(THEME_PRIMARY);
    });

    it('textColor: marker is inserted only when non-empty', () => {
        const r = buildResolvers({ widgetResolver: marker });
        expect(resolve(r, '', true).textColor).toBe('#mtxt');
        expect(resolve(r).textColor).toBe('#mtxt');
        // Empty marker -> skipped, falls through
        const emptyMarker = buildResolvers({
            widgetResolver: { ...marker, markerTextColor: '' },
            textStyles: { color: '#tsColor' },
        });
        expect(resolve(emptyMarker).textColor).toBe('#tsColor');
    });

    it('valueSize: markerTextSize (via formatSize) beats base, before fontStyles', () => {
        const r = buildResolvers({
            widgetResolver: marker,
            fontStyles: { 'font-size': '13px' },
        });
        expect(resolve(r).valueSize).toBe('18%');
        // fontSize resolver (not surfaced in StyleData) follows the same chain
        expect(r.fontSize('', false)).toBe('18%');
    });
});

describe('isSlider — marker resolvers expose raw marker values', () => {
    const marker: SliderProperties = {
        markerIconSize: 50,
        markerTextColor: '#mtxt',
        markerTextSize: 18,
        markerIconColor: '#mcol',
    };

    it('returns undefined when not a slider', () => {
        const r = buildResolvers({ widgetResolver: {} }); // empty widgetResolver = non-slider
        expect(r.markerIconSize('', false)).toBeUndefined();
        expect(r.markerTextColor('', false)).toBeUndefined();
        expect(r.markerTextSize('', false)).toBeUndefined();
        expect(r.markerIconColor('', false)).toBeUndefined();
    });

    it('returns the raw marker values when isSlider', () => {
        const r = buildResolvers({ widgetResolver: marker });
        expect(r.markerIconSize('', false)).toBe(50);
        expect(r.markerTextColor('', false)).toBe('#mtxt');
        expect(r.markerTextSize('', false)).toBe(18);
        expect(r.markerIconColor('', false)).toBe('#mcol');
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
