/**
 * Property resolver factory for useData.
 *
 * Extracts StyleData property resolution into dedicated resolvers with
 * consistent fallback behavior and active-state control.
 *
 * @module hooks/useData/propertyResolvers
 * @since 2.2.0
 */

import type { Theme } from '@mui/material';
import type { WidgetStyleState } from '@iobroker/types-vis-2/visBaseWidget';
import type { OidObject } from '../../types/utility-types';
import type { MarkerLayer, StyleData } from './types';
import { resolvePriority } from './priorityResolver';
import { valueWithUnit } from '../../lib/displayText';
import { terminalColor } from '../../lib/helper/resolveEffectiveColor';

/**
 * Whether a resolver call addresses a state (`ext` is its field number) rather than
 * the base (`ext === ''`). The per-state tier of a chain applies to states only.
 */
const isStateExt = (ext: string | number): boolean => String(ext) !== '';

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
    /** The marker layer to resolve with; `{}` resolves without the tier. */
    markerLayer: MarkerLayer;
}

/**
 * Creates resolver functions for all widget properties.
 *
 * Each resolver accepts a state extension and an `includeActive` flag to
 * control whether active-state values participate in the fallback chain.
 *
 * The chains carrying the marker layer (`iconSize`, `iconWidth`, `iconHeight`,
 * `iconColor`, `textColor`, `textColorActive`, `valueSize`) place it uniformly
 * behind the per-state tier and before the base. Their per-state tier is skipped
 * for `ext === ''`, so the base resolution of a mark takes the marker before the
 * base as well.
 *
 * The returned keys are the style entry: {@link StyleData} derives from them, so
 * a key exists here and nowhere else.
 *
 * @param params - Resolver dependencies derived from widget context and rxData
 * @returns One resolver per style key, with normalized fallback behavior
 * @since 2.2.2
 */
// The inferred return type IS the style entry's type: naming it would bring back a mirror.
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/explicit-module-boundary-types
export function createPropertyResolvers(params: CreatePropertyResolversParams) {
    const {
        rxData,
        oidObject,
        oidName,
        theme,
        fontStyles,
        textStyles,
        backgroundStyles,
        formatSize,
        getDataValue,
        markerLayer,
    } = params;

    /**
     * Normalizes empty strings to undefined to allow fallback continuation.
     */
    const normalizeString = (val: string | number | undefined): string | undefined =>
        val && String(val) !== '' ? String(val) : undefined;

    return {
        // Icon Properties
        icon: (ext: string | number, includeActive: boolean) => {
            // noIcon suppresses the icon entirely. Short-circuit before resolvePriority
            // because resolvePriority skips '' — a `{ value: '' }` option never matches.
            if (rxData.noIcon) {
                return '';
            }
            return (
                resolvePriority([
                    { condition: includeActive, value: getDataValue<string>('icon', 'Active') },
                    { condition: includeActive, value: getDataValue<string>('iconSmall', 'Active') },
                    { value: getDataValue<string>('icon', String(ext)) },
                    { value: getDataValue<string>('iconSmall', String(ext)) },
                    { value: getDataValue<string>('icon', '') },
                    { value: getDataValue<string>('iconSmall', '') },
                ]) ?? ''
            );
        },

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
                {
                    condition: isStateExt(ext) && getDataValue<number | string>('iconSize', String(ext)) === 0,
                    value: '0px',
                },
                {
                    condition: isStateExt(ext) && Boolean(getDataValue<number | string>('iconSize', String(ext))),
                    value: `calc(24px * ${getDataValue<number | string>('iconSize', String(ext))} / 100)`,
                },
                {
                    condition: typeof markerLayer.iconSize === 'number',
                    value: `calc(24px * ${markerLayer.iconSize} / 100)`,
                },
                { condition: getDataValue<number | string>('iconSize', '') === 0, value: '0px' },
                {
                    condition: Boolean(getDataValue<number | string>('iconSize', '')),
                    value: `calc(24px * ${getDataValue<number | string>('iconSize', '')} / 100)`,
                },
            ]) ?? '24px',

        // No base stage: see forceColorMask.
        iconSizeOnly: (ext: string | number, _includeActive: boolean) =>
            resolvePriority([
                {
                    condition:
                        _includeActive &&
                        (Boolean(getDataValue<number>('iconSize', 'Active')) ||
                            getDataValue<number>('iconSize', 'Active') === 0),
                    value: `${getDataValue<number>('iconSize', 'Active')}%`,
                },
                {
                    condition:
                        Boolean(getDataValue<number>('iconSize', String(ext))) ||
                        getDataValue<number>('iconSize', String(ext)) === 0,
                    value: `${getDataValue<number>('iconSize', String(ext))}%`,
                },
            ]) ?? '100%',

        iconWidth: (ext: string | number, includeActive: boolean): number =>
            resolvePriority([
                { condition: includeActive, value: rxData.iconSizeActive },
                { condition: isStateExt(ext), value: getDataValue<number>('iconSize', String(ext)) },
                { value: markerLayer.iconSize },
                { value: rxData.iconSize },
                { value: 100 },
            ]) ?? 100,

        iconHeight: (ext: string | number, includeActive: boolean): number =>
            resolvePriority([
                { condition: includeActive, value: rxData.iconSizeActive },
                { condition: isStateExt(ext), value: getDataValue<number>('iconSize', String(ext)) },
                { value: markerLayer.iconSize },
                { value: rxData.iconSize },
                { value: 100 },
            ]) ?? 100,

        forceColorMaskCm: (_ext: string | number, _includeActive: boolean) =>
            resolvePriority([{ value: getDataValue<boolean>('enableIconColorMask', '') }]) ?? false,

        // No base stage, like iconXOffset, iconYOffset and iconSizeOnly: the base field also
        // carries the Eck-Icon (the Cm chains), so a base stage would move a corner setting
        // onto every content icon (ADR-0111 Nr. 9). Pinned by the chain table.
        forceColorMask: (ext: string | number, includeActive: boolean) =>
            resolvePriority([
                { condition: includeActive, value: getDataValue<boolean>('enableIconColorMask', 'Active') },
                { value: getDataValue<boolean>('enableIconColorMask', String(ext)) },
            ]) ?? false,

        iconColor: (ext: string | number, includeActive: boolean) =>
            resolvePriority([
                { condition: includeActive, value: getDataValue<string>('iconColor', 'Active') },
                { condition: isStateExt(ext), value: getDataValue<string>('iconColor', String(ext)) },
                { value: markerLayer.iconColor },
                { value: getDataValue<string>('iconColor', '') },
            ]) ?? terminalColor('primary', theme),

        iconXOffsetCm: (_ext: string | number, _includeActive: boolean) =>
            resolvePriority([{ value: getDataValue<string>('iconXOffset', '') }]) ?? '0px',

        iconYOffsetCm: (_ext: string | number, _includeActive: boolean) =>
            resolvePriority([{ value: getDataValue<string>('iconYOffset', '') }]) ?? '0px',

        // No base stage in the two offsets: see forceColorMask.
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

        // Text Properties
        textColorActive: (ext: string | number, includeActive: boolean): string | undefined =>
            includeActive
                ? (resolvePriority([
                      {
                          value: getDataValue<string>('textColor', String(ext)),
                          condition: isStateExt(ext) && getDataValue<string>('textColor', String(ext)) !== '',
                      },
                      {
                          value:
                              markerLayer.textColor && markerLayer.textColor !== '' ? markerLayer.textColor : undefined,
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
                // Terminal default must match the textColor field contract
                // (terminal: 'text') — see commonFields.tsx / ADR 0004.
            ]) ?? terminalColor('text', theme),

        textColor: (ext: string | number, includeActive: boolean) =>
            resolvePriority([
                {
                    condition: includeActive && typeof getDataValue<string>('textColor', 'Active') === 'string',
                    value: getDataValue<string>('textColor', 'Active'),
                },
                {
                    condition: isStateExt(ext) && typeof getDataValue<string>('textColor', String(ext)) === 'string',
                    value: getDataValue<string>('textColor', String(ext)),
                },
                {
                    value: markerLayer.textColor && markerLayer.textColor !== '' ? markerLayer.textColor : undefined,
                },
                {
                    condition: typeof getDataValue<string>('textColor', '') === 'string',
                    value: getDataValue<string>('textColor', ''),
                },
                {
                    condition: typeof textStyles?.color === 'string',
                    value: textStyles?.color,
                },
                // Terminal default must match the textColor field contract
                // (terminal: 'text') — see commonFields.tsx / ADR 0004.
            ]) ?? terminalColor('text', theme),

        // Size Properties
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
            ]) ?? null,

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
            ]) ?? null,

        valueSize: (ext: string | number, includeActive: boolean) =>
            resolvePriority([
                {
                    condition: includeActive && typeof getDataValue<number>('valueSize', 'Active') === 'number',
                    value: `${formatSize(getDataValue<number>('valueSize', 'Active'))}`,
                },
                {
                    condition: isStateExt(ext) && typeof getDataValue<number>('valueSize', String(ext)) === 'number',
                    value: `${formatSize(getDataValue<number>('valueSize', String(ext)))}`,
                },
                {
                    condition: typeof markerLayer.textSize === 'number',
                    value: formatSize(markerLayer.textSize),
                },
                {
                    condition: typeof getDataValue<number>('valueSize', '') === 'number',
                    value: `${formatSize(getDataValue<number>('valueSize', ''))}`,
                },
                {
                    condition: typeof fontStyles?.['font-size'] === 'string',
                    value: fontStyles?.['font-size'],
                },
            ]) ?? null,

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
            const text = valueWithUnit(val, oidObject?.unit);
            return text === undefined ? undefined : String(text);
        },

        // Background Properties
        // The widget's CSS background-color — the base field of the same name was retired on
        // 2026-02-12; a value stored before no longer counts.
        backgroundColor: (_ext: string | number, _includeActive: boolean) =>
            backgroundStyles?.['background-color'] || '',

        background: (ext: string | number, includeActive: boolean) =>
            resolvePriority([
                { condition: includeActive, value: getDataValue<string>('background', 'Active') },
                { value: getDataValue<string>('background', String(ext)) },
                { value: getDataValue<string>('background', '') },
                // { value: backgroundStyles?.background },
            ]) ?? '',

        // Like backgroundColor: the widget's CSS background-color (base field retired 2026-02-12).
        frameBackgroundColor: (_ext: string | number, _includeActive: boolean) =>
            backgroundStyles?.['background-color'] || '',

        // Terminal `paper` mirrors the frameBackground field contract
        // (commonFields): unset ⇒ the card surface follows the effective theme's
        // palette.background.paper. See ADR 0004.
        frameBackground: (ext: string | number, includeActive: boolean) =>
            resolvePriority([
                { condition: includeActive, value: getDataValue<string>('frameBackground', 'Active') },
                { value: getDataValue<string>('frameBackground', String(ext)) },
                { value: getDataValue<string>('frameBackground', '') },
            ]) ?? terminalColor('paper', theme),
    };
}

/** The resolver set {@link createPropertyResolvers} builds, one function per style key. */
export type PropertyResolvers = ReturnType<typeof createPropertyResolvers>;

/**
 * The style entry of a state or the base: every resolver of the set, called once.
 *
 * @param resolvers - The resolver set to read
 * @param ext - State extension: '' for the base, the Feldnummer for a state
 * @param includeActive - Whether the Active tier of each chain takes part
 */
export function resolveStyleEntry(
    resolvers: PropertyResolvers,
    ext: string | number,
    includeActive: boolean,
): StyleData {
    return Object.fromEntries(
        Object.entries(resolvers).map(([key, resolve]) => [key, resolve(ext, includeActive)]),
    ) as StyleData;
}
