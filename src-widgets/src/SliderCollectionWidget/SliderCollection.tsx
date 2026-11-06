/**
 * Slider collection renderer.
 *
 * @module widgets/SliderCollection
 */

import { Box, Slider, type SliderProps, styled } from '@mui/material';
import { useMemo, useContext, type FC } from 'react';
import CollectionBase from '../components/CollectionBase';
import { CollectionContext } from '../components/CollectionProvider';
import useData from '../hooks/useData';
import CollectionMark, { type CollectionMarkSlotProps } from './CollectionMark';
import { buildSliderMarks } from './marks';
import { buildSliderChromeStyles, type SliderChromeStyles } from './chrome';
import { resolveEndSymbols, type EndSymbol } from './endSymbols';
import useOptimisticNumber from './useOptimisticNumber';
import { MARK_LABEL_SPACE, railOffset } from './railOffset';
import { alphaOf } from '../lib/helper/colorDerivation';
import { formatSizeRem } from '../lib/helper/formatSizeRem';
import { getIconColorStyles } from '../lib/helper/getIconColorStyles';

import type { SliderCollectionContextProps } from '../types';
import SafeImg from '../components/SafeImg';

type CollectionSliderProps = SliderProps & {
    data?: SliderCollectionContextProps['widget']['data'];
    chrome: SliderChromeStyles;
    slots: {
        markLabel: typeof CollectionMark;
    };
    slotProps: {
        markLabel: CollectionMarkSlotProps;
    };
};

const CollectionSlider = styled(Slider, {
    shouldForwardProp: prop => prop !== 'data' && prop !== 'chrome',
})<CollectionSliderProps>(({ data, chrome }) => {
    // Calculate border width with fallback chain
    const borderWidth = data?.thumbBorderWidth ?? 0;
    // Hover/active halo; none when the thumb cascade has no Repräsentative Vollfarbe.
    const thumbShadow = alphaOf(chrome.thumbShadowBase, 0.32);

    return {
        '& .MuiSlider-thumb': {
            width: `${data?.thumbWidth ?? 20}px`,
            height: `${data?.thumbHeight ?? 20}px`,
            background: chrome.thumbBackground,
            // Apply border only when borderWidth > 0; without a solid border
            // color it draws in currentColor, the CSS default of the shorthand.
            ...(borderWidth > 0 && {
                border: `${borderWidth}px solid ${chrome.thumbBorder ?? 'currentColor'}`,
            }),
            '&:hover': {
                boxShadow: thumbShadow && `0px 0px 0px 8px ${thumbShadow}`,
            },
            '&:active': {
                boxShadow: thumbShadow && `0px 0px 0px 14px ${thumbShadow}`,
            },
        },
        '& .MuiSlider-track': {
            height: data?.sliderOrientation === 'horizontal' ? `${data?.trackLength ?? 4}px` : 'auto',
            width: data?.sliderOrientation === 'vertical' ? `${data?.trackLength ?? 4}px` : 'auto',
            borderColor: chrome.trackBorder,
            background: chrome.trackBackground,

            borderWidth: data?.trackBorderWidth ? `${data.trackBorderWidth}px` : '0px',
            borderStyle: 'solid',
        },
        '& .MuiSlider-rail': {
            height: data?.sliderOrientation === 'horizontal' ? `${data?.railLength ?? 4}px` : '100%',
            width: data?.sliderOrientation === 'vertical' ? `${data?.railLength ?? 4}px` : '100%',
            background: chrome.railBackground,

            borderWidth: data?.railBorderWidth ? `${data.railBorderWidth}px` : '0px',
            borderStyle: 'solid',
            borderColor: chrome.railBorder,
        },
        '& .MuiSlider-mark': {
            width:
                data?.sliderOrientation === 'horizontal' ? `${data?.markWidth ?? 2}px` : `${data?.markHeight ?? 16}px`,
            height:
                data?.sliderOrientation === 'horizontal' ? `${data?.markHeight ?? 2}px` : `${data?.markWidth ?? 3}px`,
            background: chrome.markBackground,
        },
        // Single styling source for the active mark (the legacy double layer —
        // styled cascade + sx bgcolor — collapsed into this one; the sx
        // brightness filter lives on here).
        '& .MuiSlider-markActive': {
            width:
                data?.sliderOrientation === 'horizontal' ? `${data?.markWidth ?? 2}px` : `${data?.markHeight ?? 16}px`,
            height:
                data?.sliderOrientation === 'horizontal' ? `${data?.markHeight ?? 2}px` : `${data?.markWidth ?? 3}px`,
            backgroundColor: chrome.markBackground,
            background: chrome.markBackground,
            filter: 'brightness(2.5)',
        },
    };
});

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

    // The end icons follow the rail axis, which the mark-label space shifts off center.
    const trackOffset = railOffset(!!widget.data.marks, isHorizontal ? 'horizontal' : 'vertical');

    // Chrome-Farbvertrag: the color cascade of thumb/track/rail/mark comes from
    // the slider colour contracts (lib/sliderColorContract), resolved in one place.
    const chrome = useMemo(() => buildSliderChromeStyles(widget.data, theme), [widget.data, theme]);

    // Endsymbol rule (CONTEXT "Endsymbol"): icon, colour and size follow the source icon;
    // only the position swaps with the orientation.
    const endSymbols = resolveEndSymbols(widget.data, theme, isHorizontal ? 'horizontal' : 'vertical');
    const endSymbolTransform = isHorizontal ? `translateY(${trackOffset.y}px)` : `translateX(${trackOffset.x}px)`;

    const oidType = oidObject?.type;

    const isValidType = oidType === 'number';

    const sliderMinValue = useMemo(
        () => (!widget.data.onlyStates && widget.data.minValue !== undefined ? Number(widget.data.minValue) : minValue),
        [widget.data.onlyStates, widget.data.minValue, minValue],
    );

    const sliderMaxValue = useMemo(
        () => (!widget.data.onlyStates && widget.data.maxValue !== undefined ? Number(widget.data.maxValue) : maxValue),
        [widget.data.onlyStates, widget.data.maxValue, maxValue],
    );

    const sliderMarks = useMemo(
        () =>
            buildSliderMarks({
                states,
                minValue: sliderMinValue,
                maxValue: sliderMaxValue,
                markStep: widget.data.markStep,
                onlyStates: widget.data.onlyStates,
                unit: oidObject?.unit,
                oidValue,
                baseStyle: markBaseStyle.inactive,
                activeStyle: markBaseStyle.active,
                iconColorActive: widget.data.iconColorActive,
                aliasActive: widget.data.aliasActive,
                iconXOffsetActive: widget.data.iconXOffsetActive,
                iconYOffsetActive: widget.data.iconYOffsetActive,
            }),
        [
            states,
            widget.data.onlyStates,
            widget.data.markStep,
            sliderMinValue,
            sliderMaxValue,
            oidObject?.unit,
            oidValue,
            markBaseStyle,
            widget.data.iconColorActive,
            widget.data.aliasActive,
            widget.data.iconXOffsetActive,
            widget.data.iconYOffsetActive,
        ],
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
                    transform={endSymbolTransform}
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
                        <CollectionSlider
                            data={widget.data}
                            chrome={chrome}
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
                            min={sliderMinValue ?? undefined}
                            max={sliderMaxValue ?? undefined}
                            marks={sliderMarks}
                            step={
                                widget.data.onlyStates
                                    ? null // For onlyStates: null means only mark values can be selected
                                    : widget.data.step !== undefined
                                      ? Number(widget.data.step)
                                      : undefined
                            }
                            size={widget.data.sliderSize}
                            value={sliderValue}
                            onChange={(_, newValue: number | number[]) => {
                                if (typeof newValue === 'number') {
                                    commitSliderValue(newValue);
                                }
                            }}
                            sx={{
                                mb: widget.data.marks && isHorizontal ? `${MARK_LABEL_SPACE.horizontal}px` : '0px',
                                mr: widget.data.marks && !isHorizontal ? `${MARK_LABEL_SPACE.vertical}px` : '0px',
                                '& .MuiSlider-valueLabel': {
                                    fontSize:
                                        formatSizeRem(widget.data.valueSizeActive) ||
                                        data.valueSizeActive ||
                                        data.valueSize,
                                    // No marker layer: the value label is not a mark.
                                    color:
                                        widget.data.textColorActive ||
                                        data.textColorActive ||
                                        data.textColor ||
                                        theme.palette.text.primary,
                                    bgcolor: 'transparent',
                                    top: isHorizontal ? widget.data.labelPosition : undefined,
                                    right: !isHorizontal ? widget.data.labelPosition : undefined,
                                },
                                '& .MuiSlider-markLabel': {
                                    // Not the text size (CollectionMark's Typography sets its
                                    // own): the inherited size sets the line box of the icon
                                    // row, so it moves the mark icon. No colour here: the mark
                                    // text paints its own resolved colour, and an inherited
                                    // colour never tints the icon — the <img> shows its image as
                                    // is unless getIconColorStyles applies its colour mask.
                                    fontSize: data.valueSize,
                                    top: isHorizontal ? widget.data.markPosition : undefined,
                                    left: !isHorizontal ? widget.data.markPosition : undefined,
                                },
                            }}
                        />
                    )}
                </Box>

                <EndSymbolIcon
                    symbol={endSymbols.end}
                    transform={endSymbolTransform}
                />
            </Box>
        </CollectionBase>
    );
};

export default SliderCollection;
