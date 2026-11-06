/**
 * Slider collection renderer.
 *
 * @module widgets/SliderCollection
 */

import { Box, Slider } from '@mui/material';
import { useMemo, useContext, type FC } from 'react';
import CollectionBase from '../components/CollectionBase';
import { CollectionContext } from '../components/CollectionProvider';
import useData from '../hooks/useData';
import CollectionMark from './CollectionMark';
import { buildScale } from './scale';
import { buildSliderChrome } from './chrome';
import { resolveEndSymbols, type EndSymbol } from './endSymbols';
import useOptimisticNumber from './useOptimisticNumber';
import { getIconColorStyles } from '../lib/helper/getIconColorStyles';

import type { SliderCollectionContextProps } from '../types';
import SafeImg from '../components/SafeImg';

/**
 * One end symbol in the normal layout flow beside the slider; nothing without a source icon.
 * The transform moves it onto the rail axis.
 */
const EndSymbolIcon: FC<{ symbol: EndSymbol; transform: string }> = ({ symbol, transform }) =>
    symbol.icon ? (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexShrink: 0,
                transform,
            }}
        >
            <SafeImg
                alt=""
                src={symbol.icon}
                style={{
                    width: symbol.size,
                    ...getIconColorStyles(symbol.icon, symbol.color, true),
                }}
            />
        </Box>
    ) : null;

const SliderCollection: FC = () => {
    const context = useContext(CollectionContext) as SliderCollectionContextProps;
    const {
        widget: {
            data: { oidObject },
        },
        widget,
        theme,
    } = context;
    // The slider's marker layer (CONTEXT "Marker-Ebene"): useData applies it to the
    // marks only — `states` and `markBaseStyle`, never the active style `data`. A plain
    // literal: useData keys the layer by its content, not by this reference.
    const { data, states, markBaseStyle, minValue, maxValue } = useData('oid', {
        markerLayer: {
            iconSize: widget.data.markerIconSize,
            iconColor: widget.data.markerIconColor,
            textColor: widget.data.markerTextColor,
            textSize: widget.data.markerTextSize,
        },
    });

    // One optimistic truth for the controlled slider: local copy + debounced
    // backend write behind one interface (init/echo/non-numeric documented on
    // the hook).
    const {
        backendValue: oidValue,
        value: sliderValue,
        setValue: commitSliderValue,
        locked,
    } = useOptimisticNumber('oid');

    const isHorizontal = widget.data.sliderOrientation === 'horizontal';

    // Slider-Chrome (CONTEXT "Slider-Chrome"): the whole presentation of the MUI Slider as sx —
    // colours from the slider colour contracts, geometry, label space and positions — plus the
    // end symbols' rail offset. The label containers take the resolved active style.
    const { valueSize, textColor } = data;
    const chrome = useMemo(
        () => buildSliderChrome({ data: widget.data, label: { valueSize, textColor }, theme }),
        [widget.data, valueSize, textColor, theme],
    );

    // Endsymbol rule (CONTEXT "Endsymbol"): icon, colour and size follow the source icon;
    // only the position swaps with the orientation.
    const endSymbols = resolveEndSymbols(widget.data, theme, isHorizontal ? 'horizontal' : 'vertical');

    const oidType = oidObject?.type;

    const isValidType = oidType === 'number';

    // Skala (CONTEXT "Skala"): range, grid, marks and the selected mark in one pure
    // module. Reference-keyed like the chrome memo: a move in the editor churns
    // widget.data, states and markBaseStyle alike, and the recompute is pure and
    // cheap — a content key on the mark style alone would not stop it.
    const scale = useMemo(
        () =>
            buildScale({
                fields: widget.data,
                states,
                stateMin: minValue,
                stateMax: maxValue,
                markBaseStyle,
                unit: oidObject?.unit,
                oidValue,
            }),
        [widget.data, states, minValue, maxValue, markBaseStyle, oidObject?.unit, oidValue],
    );

    return (
        <CollectionBase
            isValidType={isValidType}
            data={data}
            oidValue={oidValue}
            sx={{
                p: Number(widget.data.sliderPadding),
            }}
        >
            <Box
                sx={{
                    gap: Number(widget.data.sliderGap) || 0,
                    display: 'flex',
                    flexDirection: isHorizontal ? 'row' : 'column',
                    justifyContent: 'center',
                    alignItems: 'center',

                    width: '100%',
                    height: '100%',
                }}
            >
                <EndSymbolIcon
                    symbol={endSymbols.start}
                    transform={chrome.endSymbolTransform}
                />

                {/* Slider container - takes available space */}
                <Box
                    sx={{
                        display: 'flex',
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        minWidth: isHorizontal ? '200px' : 'auto',
                        minHeight: isHorizontal ? 'auto' : '200px',
                    }}
                >
                    {typeof sliderValue === 'number' && (
                        <Slider
                            slots={{
                                markLabel: CollectionMark,
                            }}
                            slotProps={{
                                markLabel: {
                                    marks: widget.data.marks,
                                    sliderOrientation: widget.data.sliderOrientation,
                                },
                            }}
                            disabled={locked}
                            valueLabelDisplay={widget.data.valueLabelDisplay}
                            orientation={widget.data.sliderOrientation}
                            min={scale.min ?? undefined}
                            max={scale.max ?? undefined}
                            marks={scale.marks}
                            step={scale.step}
                            size={widget.data.sliderSize}
                            value={sliderValue}
                            onChange={(_, newValue: number | number[]) => {
                                if (typeof newValue === 'number') {
                                    commitSliderValue(newValue);
                                }
                            }}
                            sx={chrome.sx}
                        />
                    )}
                </Box>

                <EndSymbolIcon
                    symbol={endSymbols.end}
                    transform={chrome.endSymbolTransform}
                />
            </Box>
        </CollectionBase>
    );
};

export default SliderCollection;
