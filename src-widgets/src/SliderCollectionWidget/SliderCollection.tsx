/**
 * Slider collection renderer.
 *
 * @module widgets/SliderCollection
 */

import { Box, Slider, type SliderProps, styled } from '@mui/material';
import { useMemo, useContext, type FC } from 'react';
import CollectionBase from '../components/CollectionBase';
import { CollectionContext } from '../components/CollectionProvider';
import useData, { sameStateValue } from '../hooks/useData';
import CollectionMark from './CollectionMark';
import { buildSliderMarks } from './marks';
import { buildSliderChromeStyles, type SliderChromeStyles } from './chrome';
import useOptimisticNumber from './useOptimisticNumber';
import { MARK_LABEL_SPACE, railOffset } from './railOffset';
import { alphaOf } from '../lib/helper/colorDerivation';
import { formatSizeRem } from '../lib/helper/formatSizeRem';
import { getIconColorStyles } from '../lib/helper/getIconColorStyles';
import { isBase64Icon } from '../lib/helper/isBase64Icon';

import type { SliderCollectionContextProps } from '../types';
import { type Mark } from '@mui/material/Slider/useSlider.types';
import SafeImg from '../components/SafeImg';

type CollectionSliderProps = SliderProps & {
    data?: SliderCollectionContextProps['widget']['data'];
    chrome: SliderChromeStyles;
    slots: {
        markLabel: typeof CollectionMark;
    };
    slotProps: {
        markLabel: SliderMarkLabelProps;
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

interface SliderMarkLabelProps {
    marks: boolean;
    sliderOrientation: 'horizontal' | 'vertical';
    aliasActive?: string;
    activeMarkIndex?: number | null;
}

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
    // the field contracts (sliderColorContracts), resolved in one place.
    const chrome = useMemo(() => buildSliderChromeStyles(widget.data, theme), [widget.data, theme]);

    // The mark label is part of the mark, so it reads the marks' base style.
    const markLabelFallbackColor = markBaseStyle.inactive.textColor || theme.palette.text.primary;

    // Source icons (orientation-independent).
    const minIcon = widget.data.iconMin || widget.data.iconSmallMin;
    const maxIcon = widget.data.iconMax || widget.data.iconSmallMax;

    // Color follows the SOURCE icon, not the rendered position: startIconColor is
    // the color of iconMin, endIconColor of iconMax — in BOTH orientations. The
    // default-primary fallback is checked against the source icon, so a single
    // configured icon keeps its color when orientation swaps its position.
    const minIconColor = widget.data.startIconColor || (isBase64Icon(minIcon) ? theme.palette.primary.main : undefined);
    const maxIconColor = widget.data.endIconColor || (isBase64Icon(maxIcon) ? theme.palette.primary.main : undefined);

    // Positions (and their colors) swap by orientation: start = min in horizontal,
    // max in vertical. The color travels with its source icon.
    const startIcon = isHorizontal ? minIcon : maxIcon;
    const endIcon = isHorizontal ? maxIcon : minIcon;
    const startIconColor = isHorizontal ? minIconColor : maxIconColor;
    const endIconColor = isHorizontal ? maxIconColor : minIconColor;

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
        ],
    );
    // Derive the index of the mark corresponding to the current oidValue
    const sliderMarksIndex = useMemo(() => {
        if (oidValue === undefined) {
            return null;
        }

        const index = sliderMarks.findIndex(mark => sameStateValue(mark.value, oidValue));
        return index !== -1 ? index : null;
    }, [oidValue, sliderMarks]);

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
                {/* Start icon - in normal layout flow */}
                {startIcon && (
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexShrink: 0,
                            transform: isHorizontal
                                ? `translateY(${trackOffset.y}px)`
                                : `translateX(${trackOffset.x}px)`,
                        }}
                    >
                        <SafeImg
                            alt=""
                            src={startIcon}
                            style={{
                                width: isHorizontal
                                    ? widget.data.iconSizeStart || '24px'
                                    : widget.data.iconSizeEnd || '24px',
                                ...getIconColorStyles(startIcon, startIconColor, true),
                            }}
                        />
                    </Box>
                )}

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
                                    aliasActive: widget.data.aliasActive,
                                    activeMarkIndex: sliderMarksIndex,
                                } as SliderMarkLabelProps,
                            }}
                            disabled={locked}
                            valueLabelDisplay={widget.data.valueLabelDisplay}
                            orientation={widget.data.sliderOrientation}
                            min={sliderMinValue ?? undefined}
                            max={sliderMaxValue ?? undefined}
                            marks={sliderMarks as Mark[]}
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
                                    fontSize: data.valueSize,
                                    color: markLabelFallbackColor,
                                    top: isHorizontal ? widget.data.markPosition : undefined,
                                    left: !isHorizontal ? widget.data.markPosition : undefined,
                                },
                                '& .MuiSlider-markLabelActive': {
                                    [`&[data-index='${sliderMarksIndex}']`]: {
                                        "& div[data-font='active']": {
                                            color: widget.data.textColorActive
                                                ? `${widget.data.textColorActive} !important`
                                                : undefined,
                                            fontSize:
                                                typeof widget.data.valueSizeActive === 'number'
                                                    ? `${formatSizeRem(widget.data.valueSizeActive)} !important`
                                                    : undefined,
                                        },
                                        "& div[data-position='active']": {
                                            left:
                                                widget.data.iconXOffsetActive && widget.data.iconXOffsetActive !== '0px'
                                                    ? `${widget.data.iconXOffsetActive} !important`
                                                    : widget.data.iconXOffsetActive === ''
                                                      ? undefined
                                                      : '0px !important',
                                            bottom:
                                                widget.data.iconYOffsetActive && widget.data.iconYOffsetActive !== '0px'
                                                    ? `${widget.data.iconYOffsetActive} !important`
                                                    : widget.data.iconYOffsetActive === ''
                                                      ? undefined
                                                      : '0px !important',
                                        },
                                    },
                                },
                            }}
                        />
                    )}
                </Box>

                {/* End icon - in normal layout flow */}
                {endIcon && (
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexShrink: 0,
                            transform: isHorizontal
                                ? `translateY(${trackOffset.y}px)`
                                : `translateX(${trackOffset.x}px)`,
                        }}
                    >
                        <SafeImg
                            alt=""
                            src={endIcon}
                            style={{
                                width: isHorizontal
                                    ? widget.data.iconSizeEnd || '24px'
                                    : widget.data.iconSizeStart || '24px',
                                ...getIconColorStyles(endIcon, endIconColor, true),
                            }}
                        />
                    </Box>
                )}
            </Box>
        </CollectionBase>
    );
};

export default SliderCollection;
