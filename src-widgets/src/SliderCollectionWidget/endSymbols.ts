/**
 * Endsymbol resolution for the Slider collection widget.
 *
 * @module widgets/SliderCollectionWidget/endSymbols
 * @remarks
 * Implements the CONTEXT rule "Endsymbol": everything follows the SOURCE icon
 * (min = `iconMin`/`iconSmallMin` with `startIconColor`/`iconSizeStart`, max =
 * `iconMax`/`iconSmallMax` with `endIconColor`/`iconSizeEnd`); only the rendered
 * position swaps with the orientation (start = min in horizontal, max in vertical).
 * Not part of the slider chrome — CONTEXT counts thumb, track, rail and marks as
 * chrome (ADR-0106, decision 7).
 */

import type { Theme } from '@mui/material';

import { isBase64Icon } from '../lib/helper/isBase64Icon';
import { resolveStoredChromeColor, type ColorFieldContract } from '../lib/helper/resolveEffectiveColor';
import { sliderColorContracts } from '../lib/sliderColorContract';
import type { SliderFieldsRxData } from '../types';

/** Icon size when the source icon's size field is unset. */
const DEFAULT_ICON_SIZE = '24px';

/** One resolved end symbol. */
export interface EndSymbol {
    /** The source icon (Base64 or image URL/path); `undefined` when none is configured. */
    icon: string | undefined;
    /** The colour for the forced icon mask; `undefined` paints the icon uncoloured. */
    color: string | undefined;
    /** CSS width of the icon. */
    size: string;
}

/** Both resolved end symbols, by rendered position. */
export interface EndSymbols {
    start: EndSymbol;
    end: EndSymbol;
}

/**
 * Resolves the end symbol of one source icon.
 *
 * The colour runs through the field contract with `resolveStoredChromeColor`: the
 * stored value raw, as stored, else the terminal `primary`. On top sits the documented
 * Base64 rule (ADR-0004, pattern Select arrow): only a Base64 icon takes the terminal —
 * an image icon without a value stays uncoloured and keeps its own colours.
 */
const resolveSource = (
    icon: string | undefined,
    contract: ColorFieldContract,
    size: string | undefined,
    data: Record<string, unknown>,
    theme: Theme,
): EndSymbol => ({
    icon,
    color:
        resolveStoredChromeColor(isBase64Icon(icon) ? contract : { ...contract, terminal: undefined }, data, theme) ||
        undefined,
    size: size || DEFAULT_ICON_SIZE,
});

/**
 * Resolves icon, colour and size of both slider end symbols.
 *
 * @param rxData - Widget data (slider icon fields).
 * @param theme - Effective MUI theme (for the `primary` terminal).
 * @param orientation - Slider orientation; swaps only the rendered position.
 * @returns The end symbols at the start and the end of the rail.
 */
export function resolveEndSymbols(
    rxData: SliderFieldsRxData,
    theme: Theme,
    orientation: 'horizontal' | 'vertical',
): EndSymbols {
    const data = rxData as Record<string, unknown>;

    const min = resolveSource(
        rxData.iconMin || rxData.iconSmallMin,
        sliderColorContracts.startIconColor,
        rxData.iconSizeStart,
        data,
        theme,
    );
    const max = resolveSource(
        rxData.iconMax || rxData.iconSmallMax,
        sliderColorContracts.endIconColor,
        rxData.iconSizeEnd,
        data,
        theme,
    );

    return orientation === 'horizontal' ? { start: min, end: max } : { start: max, end: min };
}
