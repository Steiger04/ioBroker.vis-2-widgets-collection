/**
 * Property resolver factory for useDataNew.
 *
 * Extracts StyleData property resolution into dedicated resolvers with
 * consistent fallback behavior and active-state control.
 *
 * @module hooks/useDataNew/propertyResolvers
 * @since 2.2.0
 */

import type { Theme } from '@mui/material';
import type { WidgetStyleState } from '@iobroker/types-vis-2/visBaseWidget';
import type { OidObject } from '../../types/utility-types';
import type { PropertyResolvers, SliderProperties } from './types';
import { resolvePriority } from './priorityResolver';

interface CreatePropertyResolversParams {
    rxData: Record<string, any>;
    oidObject: OidObject | undefined;
    oidName: string | undefined;
    theme: Theme;
    fontStyles: WidgetStyleState | undefined;
    textStyles: WidgetStyleState | undefined;
    backgroundStyles: WidgetStyleState | undefined;
    formatSize: (size: number | string | undefined) => string | undefined;
    getDataValue: <T>(key: string, ext: string) => T | undefined;
    widgetResolver: SliderProperties | Record<string, never>;
    isSlider: boolean;
}

/**
 * Creates resolver functions for all widget properties.
 *
 * Each resolver accepts a state extension and an `includeActive` flag to
 * control whether active-state values participate in the fallback chain.
 *
 * @param params - Resolver dependencies derived from widget context and rxData
 * @returns PropertyResolvers with normalized fallback behavior across all properties
 * @since 2.2.2
 */
export function createPropertyResolvers(params: CreatePropertyResolversParams): PropertyResolvers {
    const {
        rxData,
        oidObject,
        oidName,
        theme: _theme,
        fontStyles,
        textStyles,
        backgroundStyles,
        formatSize,
        getDataValue,
        widgetResolver,
        isSlider,
    } = params;

    void _theme;

    /**
     * Normalizes empty strings to undefined to allow fallback continuation.
     */
    const normalizeString = (val: string | number | undefined): string | undefined =>
        val && String(val) !== '' ? String(val) : undefined;

    return {
        // Icon Properties
        icon: (ext: string | number, includeActive: boolean) =>
            resolvePriority([
                { condition: !!rxData.noIcon, value: '' },
                { condition: includeActive, value: getDataValue<string>('icon', 'Active') },
                { condition: includeActive, value: getDataValue<string>('iconSmall', 'Active') },
                { value: getDataValue<string>('icon', String(ext)) },
                { value: getDataValue<string>('iconSmall', String(ext)) },
                { value: getDataValue<string>('icon', '') },
                { value: getDataValue<string>('iconSmall', '') },
            ]) ?? '',

        iconActive: (ext: string | number, includeActive: boolean) =>
            includeActive
                ? (resolvePriority([
                      { condition: !!rxData.noIcon, value: '' },
                      { value: getDataValue<string>('icon', String(ext)) },
                      { value: getDataValue<string>('iconSmall', String(ext)) },
                  ]) ?? '')
                : '',

        iconSizeCm: (_ext: string | number, _includeActive: boolean) =>
            resolvePriority([
                { condition: getDataValue<number | string>('iconSize', '') === 0, value: '0px' },
                {
                    condition: Boolean(getDataValue<number | string>('iconSize', '')),
                    value: `calc(24px * ${getDataValue<number | string>('iconSize', '')} / 100)`,
                },
            ]) ?? '24px',

        iconSize: (ext: string | number, includeActive: boolean) =>
            resolvePriority([
                {
                    condition: includeActive && getDataValue<number | string>('iconSize', 'Active') === 0,
                    value: '0px',
                },
                {
                    condition: includeActive && Boolean(getDataValue<number | string>('iconSize', 'Active')),
                    value: `calc(24px * ${getDataValue<number | string>('iconSize', 'Active')} / 100)`,
                },
                { condition: getDataValue<number | string>('iconSize', String(ext)) === 0, value: '0px' },
                {
                    condition: Boolean(getDataValue<number | string>('iconSize', String(ext))),
                    value: `calc(24px * ${getDataValue<number | string>('iconSize', String(ext))} / 100)`,
                },
            ]) ?? '24px',

        iconSizeActive: (ext: string | number, includeActive: boolean) =>
            includeActive
                ? (resolvePriority([
                      { condition: getDataValue<number | string>('iconSize', String(ext)) === 0, value: '0px' },
                      {
                          condition: Boolean(getDataValue<number | string>('iconSize', String(ext))),
                          value: `calc(24px * ${getDataValue<number | string>('iconSize', String(ext))} / 100)`,
                      },
                  ]) ?? '24px')
                : '24px',

        iconSizeOnly: (ext: string | number, _includeActive: boolean) =>
            resolvePriority([
                {
                    condition:
                        Boolean(getDataValue<number>('iconSize', String(ext))) ||
                        getDataValue<number>('iconSize', String(ext)) === 0,
                    value: `${getDataValue<number>('iconSize', String(ext))}%`,
                },
            ]) ?? '100%',

        iconSizeActiveOnly: (ext: string | number, includeActive: boolean) =>
            includeActive
                ? (resolvePriority([{ value: getDataValue<number>('iconSize', String(ext)) }]) ?? undefined)
                : undefined,

        iconWidth: (ext: string | number, includeActive: boolean) =>
            resolvePriority([
                { condition: includeActive, value: rxData.iconSizeActive },
                { value: getDataValue<number>('iconSize', String(ext)) },
                { condition: isSlider, value: widgetResolver.markerIconSize },
                { value: rxData.iconSize },
                { value: 100 },
            ]) ?? 100,

        iconHeight: (ext: string | number, includeActive: boolean) =>
            resolvePriority([
                { condition: includeActive, value: rxData.iconSizeActive },
                { value: getDataValue<number>('iconSize', String(ext)) },
                { condition: isSlider, value: widgetResolver.markerIconSize },
                { value: rxData.iconSize },
                { value: 100 },
            ]) ?? 100,

        forceColorMaskCm: (_ext: string | number, _includeActive: boolean) =>
            resolvePriority([{ value: getDataValue<boolean>('enableIconColorMask', '') }]) ?? false,

        forceColorMask: (ext: string | number, includeActive: boolean) =>
            resolvePriority([
                { condition: includeActive, value: getDataValue<boolean>('enableIconColorMask', 'Active') },
                { value: getDataValue<boolean>('enableIconColorMask', String(ext)) },
                {
                    condition: Boolean(getDataValue<boolean>('enableIconColorMask', String(ext))),
                    value: getDataValue<boolean>('enableIconColorMask', ''),
                },
            ]) ?? false,

        forceColorMaskActive: (ext: string | number, includeActive: boolean) =>
            includeActive
                ? (resolvePriority([{ value: getDataValue<boolean>('enableIconColorMask', String(ext)) }]) ?? false)
                : false,

        iconColor: (ext: string | number, includeActive: boolean) =>
            resolvePriority([
                { condition: includeActive, value: getDataValue<string>('iconColor', 'Active') },
                { value: getDataValue<string>('iconColor', String(ext)) },
                { value: getDataValue<string>('iconColor', '') },
            ]) ?? _theme.palette.primary.main,

        iconColorActive: (ext: string | number, includeActive: boolean) =>
            includeActive ? (resolvePriority([{ value: getDataValue<string>('iconColor', String(ext)) }]) ?? '') : '',

        iconHover: (_ext: string | number, _includeActive: boolean) =>
            resolvePriority([{ value: rxData.iconHover ? `${rxData.iconHover}%` : undefined }]) ?? '',

        iconHoverActive: (ext: string | number, includeActive: boolean) =>
            includeActive
                ? (resolvePriority([
                      {
                          value: getDataValue<number>('iconHover', String(ext))
                              ? `${getDataValue<number>('iconHover', String(ext))}%`
                              : undefined,
                      },
                  ]) ?? undefined)
                : undefined,

        iconXOffsetCm: (_ext: string | number, _includeActive: boolean) =>
            resolvePriority([{ value: getDataValue<string>('iconXOffset', '') }]) ?? '0px',

        iconYOffsetCm: (_ext: string | number, _includeActive: boolean) =>
            resolvePriority([{ value: getDataValue<string>('iconYOffset', '') }]) ?? '0px',

        iconXOffset: (ext: string | number, includeActive: boolean) =>
            resolvePriority([
                { condition: includeActive, value: getDataValue<string>('iconXOffset', 'Active') },
                { value: getDataValue<string>('iconXOffset', String(ext)) },
            ]) ?? '0px',

        iconYOffset: (ext: string | number, includeActive: boolean) =>
            resolvePriority([
                { condition: includeActive, value: getDataValue<string>('iconYOffset', 'Active') },
                { value: getDataValue<string>('iconYOffset', String(ext)) },
            ]) ?? '0px',

        iconXOffsetActive: (ext: string | number, includeActive: boolean) =>
            includeActive
                ? (resolvePriority([
                      { condition: !getDataValue<string>('iconXOffset', String(ext)), value: '0px' },
                      { value: getDataValue<string>('iconXOffset', String(ext)) },
                  ]) ?? '0px')
                : '0px',

        iconYOffsetActive: (ext: string | number, includeActive: boolean) =>
            includeActive
                ? (resolvePriority([
                      { condition: !getDataValue<string>('iconYOffset', String(ext)), value: '0px' },
                      { value: getDataValue<string>('iconYOffset', String(ext)) },
                  ]) ?? '0px')
                : '0px',

        // Text Properties
        textColorActive: (ext: string | number, includeActive: boolean) =>
            includeActive
                ? (resolvePriority([
                      {
                          value: getDataValue<string>('textColor', String(ext)),
                          condition: getDataValue<string>('textColor', String(ext)) !== '',
                      },
                      {
                          condition: isSlider,
                          value:
                              widgetResolver.markerTextColor && widgetResolver.markerTextColor !== ''
                                  ? widgetResolver.markerTextColor
                                  : undefined,
                      },
                      {
                          value: rxData.textColor && rxData.textColor !== '' ? rxData.textColor : undefined,
                      },
                  ]) ?? undefined)
                : undefined,

        textColorCm: (_ext: string | number, _includeActive: boolean) =>
            resolvePriority([
                {
                    condition: typeof getDataValue<string>('textColor', '') === 'string',
                    value: getDataValue<string>('textColor', ''),
                },
                {
                    condition: typeof textStyles?.color === 'string',
                    value: textStyles?.color,
                },
            ]) ?? '',

        textColor: (ext: string | number, includeActive: boolean) =>
            resolvePriority([
                {
                    condition: includeActive && typeof getDataValue<string>('textColor', 'Active') === 'string',
                    value: getDataValue<string>('textColor', 'Active'),
                },
                {
                    condition: typeof getDataValue<string>('textColor', String(ext)) === 'string',
                    value: getDataValue<string>('textColor', String(ext)),
                },
                {
                    condition: isSlider,
                    value:
                        widgetResolver.markerTextColor && widgetResolver.markerTextColor !== ''
                            ? widgetResolver.markerTextColor
                            : undefined,
                },
                {
                    condition: typeof getDataValue<string>('textColor', '') === 'string',
                    value: getDataValue<string>('textColor', ''),
                },
                {
                    condition: typeof textStyles?.color === 'string',
                    value: textStyles?.color,
                },
            ]) ?? '',

        // Size Properties
        fontSize: (ext: string | number, includeActive: boolean) =>
            resolvePriority([
                {
                    condition: includeActive && typeof rxData.valueSizeActive === 'number',
                    value: formatSize(rxData.valueSizeActive),
                },
                {
                    value:
                        typeof getDataValue<number>('valueSize', String(ext)) === 'number'
                            ? formatSize(getDataValue<number>('valueSize', String(ext)))
                            : undefined,
                },
                {
                    condition: isSlider && typeof widgetResolver.markerTextSize === 'number',
                    value: formatSize(widgetResolver.markerTextSize),
                },
                {
                    value: typeof rxData.valueSize === 'number' ? formatSize(rxData.valueSize) : undefined,
                },
                {
                    condition: typeof fontStyles?.['font-size'] === 'string',
                    value: fontStyles?.['font-size'],
                },
            ]) ?? null,

        headerSize: (ext: string | number, includeActive: boolean) =>
            resolvePriority([
                {
                    condition: includeActive && typeof getDataValue<number>('headerSize', 'Active') === 'number',
                    value: `${formatSize(getDataValue<number>('headerSize', 'Active'))}`,
                },
                {
                    condition: typeof getDataValue<number>('headerSize', String(ext)) === 'number',
                    value: `${formatSize(getDataValue<number>('headerSize', String(ext)))}`,
                },
                {
                    condition: typeof getDataValue<number>('headerSize', '') === 'number',
                    value: `${formatSize(getDataValue<number>('headerSize', ''))}`,
                },
                {
                    condition: typeof fontStyles?.['font-size'] === 'string',
                    value: fontStyles?.['font-size'],
                },
            ]) ?? '0.875rem',

        footerSize: (ext: string | number, includeActive: boolean) =>
            resolvePriority([
                {
                    condition: includeActive && typeof getDataValue<number>('footerSize', 'Active') === 'number',
                    value: `${formatSize(getDataValue<number>('footerSize', 'Active'))}`,
                },
                {
                    condition: typeof getDataValue<number>('footerSize', String(ext)) === 'number',
                    value: `${formatSize(getDataValue<number>('footerSize', String(ext)))}`,
                },
                {
                    condition: typeof getDataValue<number>('footerSize', '') === 'number',
                    value: `${formatSize(getDataValue<number>('footerSize', ''))}`,
                },
                {
                    condition: typeof fontStyles?.['font-size'] === 'string',
                    value: fontStyles?.['font-size'],
                },
            ]) ?? '0.875rem',

        valueSize: (ext: string | number, includeActive: boolean) =>
            resolvePriority([
                {
                    condition: includeActive && typeof getDataValue<number>('valueSize', 'Active') === 'number',
                    value: `${formatSize(getDataValue<number>('valueSize', 'Active'))}`,
                },
                {
                    condition: typeof getDataValue<number>('valueSize', String(ext)) === 'number',
                    value: `${formatSize(getDataValue<number>('valueSize', String(ext)))}`,
                },
                {
                    condition: typeof getDataValue<number>('valueSize', '') === 'number',
                    value: `${formatSize(getDataValue<number>('valueSize', ''))}`,
                },
                {
                    condition: typeof fontStyles?.['font-size'] === 'string',
                    value: fontStyles?.['font-size'],
                },
            ]) ?? '0.875rem',

        valueSizeActive: (ext: string | number, includeActive: boolean) =>
            includeActive
                ? (resolvePriority([
                      {
                          value:
                              typeof getDataValue<number>('valueSize', String(ext)) === 'number'
                                  ? formatSize(getDataValue<number>('valueSize', String(ext)))
                                  : null,
                      },
                  ]) ?? null)
                : null,

        // Content Properties
        header: (ext: string | number, includeActive: boolean) =>
            String(
                resolvePriority([
                    { condition: includeActive, value: normalizeString(getDataValue<string>('header', 'Active')) },
                    { value: normalizeString(getDataValue<string>('header', String(ext))) },
                    { value: normalizeString(getDataValue<string>('header', '')) },
                    { value: normalizeString(oidName) },
                ]) ?? '',
            ).replace(/(\r\n|\n|\r)/gm, ''),

        footer: (ext: string | number, includeActive: boolean) =>
            String(
                resolvePriority([
                    { condition: includeActive, value: normalizeString(getDataValue<string>('footer', 'Active')) },
                    { value: normalizeString(getDataValue<string>('footer', String(ext))) },
                    { value: normalizeString(getDataValue<string>('footer', '')) },
                ]) ?? '',
            ).replace(/(\r\n|\n|\r)/gm, ''),

        alias: (ext: string | number, _includeActive: boolean) =>
            String(getDataValue<string>('alias', String(ext)) || '').replace(/(\r\n|\n|\r)/gm, ''),

        value: (ext: string | number, _includeActive: boolean) => {
            const val = getDataValue<ioBroker.StateValue>('value', String(ext));
            return val !== undefined && val !== null
                ? `${val}${oidObject?.unit !== undefined ? oidObject.unit : ''}`
                : undefined;
        },

        // Background Properties
        backgroundColor: (_ext: string | number, _includeActive: boolean) =>
            resolvePriority([
                {
                    value: rxData.backgroundColor && rxData.backgroundColor !== '' ? rxData.backgroundColor : undefined,
                },
                { value: backgroundStyles?.['background-color'] },
                { value: '' },
            ]) ?? '',

        backgroundColorActive: (ext: string | number, includeActive: boolean) =>
            includeActive ? getDataValue<string>('backgroundColor', String(ext)) : undefined,

        background: (ext: string | number, includeActive: boolean) =>
            resolvePriority([
                { condition: includeActive, value: getDataValue<string>('background', 'Active') },
                { value: getDataValue<string>('background', String(ext)) },
                { value: getDataValue<string>('background', '') },
                { value: backgroundStyles?.background },
            ]) ?? '',

        backgroundActive: (ext: string | number, includeActive: boolean) =>
            includeActive ? getDataValue<string>('background', String(ext)) : undefined,

        frameBackgroundColor: (_ext: string | number, _includeActive: boolean) =>
            resolvePriority([
                {
                    value:
                        rxData.frameBackgroundColor && rxData.frameBackgroundColor !== ''
                            ? rxData.frameBackgroundColor
                            : undefined,
                },
                { value: backgroundStyles?.['background-color'] },
                { value: '' },
            ]) ?? '',

        frameBackgroundColorActive: (ext: string | number, includeActive: boolean) =>
            includeActive ? getDataValue<string>('frameBackgroundColor', String(ext)) : undefined,

        frameBackground: (ext: string | number, includeActive: boolean) =>
            resolvePriority([
                { condition: includeActive, value: getDataValue<string>('frameBackground', 'Active') },
                { value: getDataValue<string>('frameBackground', String(ext)) },
                { value: getDataValue<string>('frameBackground', '') },
                { value: backgroundStyles?.background },
            ]) ?? '',

        frameBackgroundActive: (ext: string | number, includeActive: boolean) =>
            includeActive ? getDataValue<string>('frameBackground', String(ext)) : undefined,

        // Slider Properties
        markerIconSize: (_ext: string | number, _includeActive: boolean) =>
            isSlider ? widgetResolver.markerIconSize : undefined,

        markerTextColor: (_ext: string | number, _includeActive: boolean) =>
            isSlider ? widgetResolver.markerTextColor : undefined,

        markerTextSize: (_ext: string | number, _includeActive: boolean) =>
            isSlider ? widgetResolver.markerTextSize : undefined,

        markerIconColor: (_ext: string | number, _includeActive: boolean) =>
            isSlider ? widgetResolver.markerIconColor : undefined,
    };
}
