/**
 * Slider collection renderer.
 *
 * @module widgets/SliderCollection
 */

import { alpha, Box, Slider, type SliderProps, styled } from '@mui/material';
import { useState, useMemo, useContext, useEffect, useRef, type FC } from 'react';
import CollectionBase from '../components/CollectionBase';
import { CollectionContext } from '../components/CollectionProvider';
import useData from '../hooks/useData';
import useValueState from '../hooks/useValueState';
import CollectionMark from './CollectionMark';
import CollectionBaseImage from '../components/CollectionBaseImage';
import { formatSizeRem } from '../lib/helper/formatSizeRem';
import { getIconColorStyles } from '../lib/helper/getIconColorStyles';
import { extractColorFromValue } from '../lib/helper/extractColorFromValue';

import type { SliderCollectionContextProps } from '../types';

type CollectionSliderProps = SliderProps & {
    thumbColor?: string;
    data?: SliderCollectionContextProps['widget']['data'];
    slots: {
        markLabel: typeof CollectionMark;
    };
    slotProps: {
        markLabel: SliderMarkLabelProps;
    };
};

const CollectionSlider = styled(Slider, {
    shouldForwardProp: prop => prop !== 'data',
})<CollectionSliderProps>(({ theme, data }) => {
    const extractedColor = useMemo(
        () => extractColorFromValue(data?.thumbColor || data?.sliderColor || theme.palette.primary.main),
        [data?.thumbColor, data?.sliderColor, theme.palette.primary.main],
    );

    const shadowBase = useMemo(
        () => extractedColor || theme.palette.primary.main,
        [extractedColor, theme.palette.primary.main],
    );

    // Calculate border width and color with fallback chain
    const borderWidth = data?.thumbBorderWidth ?? 0;
    const borderColor = useMemo(
        () =>
            extractColorFromValue(
                data?.thumbBorderColor || data?.thumbColor || data?.sliderColor || theme.palette.primary.main,
            ),
        [data?.thumbBorderColor, data?.thumbColor, data?.sliderColor, theme.palette.primary.main],
    );

    return {
        '& .MuiSlider-thumb': {
            width: `${data?.thumbWidth ?? 20}px`,
            height: `${data?.thumbHeight ?? 20}px`,
            background: data?.thumbColor || data?.sliderColor || theme.palette.primary.main,
            // Apply border only when borderWidth > 0
            ...(borderWidth > 0 && {
                border: `${borderWidth}px solid ${borderColor || theme.palette.primary.main}`,
            }),
            '&:hover': {
                boxShadow: `0px 0px 0px 8px ${alpha(shadowBase, 0.32)}`,
            },
            '&:active': {
                boxShadow: `0px 0px 0px 14px ${alpha(shadowBase, 0.32)}`,
            },
        },
        '& .MuiSlider-track': {
            height: data?.sliderOrientation === 'horizontal' ? `${data?.trackLength ?? 4}px` : 'auto',
            width: data?.sliderOrientation === 'vertical' ? `${data?.trackLength ?? 4}px` : 'auto',
            borderColor: extractColorFromValue(
                data?.trackBorderColor || data?.sliderColor || theme.palette.primary.main,
            ),
            background: data?.trackBackgroundColor || data?.sliderColor || theme.palette.primary.main,

            borderWidth: data?.trackBorderWidth ? `${data.trackBorderWidth}px` : '0px',
            borderStyle: 'solid',
        },
        '& .MuiSlider-rail': {
            height: data?.sliderOrientation === 'horizontal' ? `${data?.railLength ?? 4}px` : '100%',
            width: data?.sliderOrientation === 'vertical' ? `${data?.railLength ?? 4}px` : '100%',
            background: data?.railBackgroundColor || data?.sliderColor || theme.palette.primary.main,

            borderWidth: data?.railBorderWidth ? `${data.railBorderWidth}px` : '0px',
            borderStyle: 'solid',
            borderColor: extractColorFromValue(
                data?.railBorderColor || data?.sliderColor || theme.palette.primary.main,
            ),
        },
        '& .MuiSlider-mark': {
            width:
                data?.sliderOrientation === 'horizontal' ? `${data?.markWidth ?? 2}px` : `${data?.markHeight ?? 16}px`,
            height:
                data?.sliderOrientation === 'horizontal' ? `${data?.markHeight ?? 2}px` : `${data?.markWidth ?? 3}px`,
            background: data?.markBackgroundColor || data?.sliderColor || theme.palette.primary.main,
        },
        '& .MuiSlider-markActive': {
            width:
                data?.sliderOrientation === 'horizontal' ? `${data?.markWidth ?? 2}px` : `${data?.markHeight ?? 16}px`,
            height:
                data?.sliderOrientation === 'horizontal' ? `${data?.markHeight ?? 2}px` : `${data?.markWidth ?? 3}px`,
            backgroundColor: data?.markBackgroundColor || data?.sliderColor || theme.palette.primary.main,
            '&.MuiSlider-markActive': {
                background: data?.markBackgroundColor || data?.sliderColor || theme.palette.primary.main,
            },
        },
    };
});

interface SliderMarkLabelProps {
    marks: boolean;
    sliderOrientation: 'horizontal' | 'vertical';
    aliasActive?: string;
    activeMarkIndex?: number | null;
    defaultIconColor?: string;
}

/**
 * Renders a MUI slider which writes back to `oid`.
 *
 * @remarks
 * The mark-label renderer is overridden via the `markLabel` slot
 * (see {@link CollectionMark}) to support per-mark icons/colors and an
 * alternate label for the currently selected mark.
 */
const SliderCollection: FC = () => {
    const context = useContext(CollectionContext) as SliderCollectionContextProps;
    const {
        widget: {
            data: { oidObject },
        },
        widget,
        theme,
    } = context;
    const { data, states, minValue, maxValue, activeIndex } = useData('oid');
    const [sliderMarksIndex, setSliderMarksIndex] = useState<number | null>(null);
    const { value: oidValue, updateValue: setOidValueState, hasBackendChange: oidValueChanged } = useValueState('oid');
    const [sliderValue, setSliderValue] = useState<number | undefined>(
        typeof oidValue === 'number' ? oidValue : undefined,
    );

    // Refs used for dynamic track positioning.
    const sliderContainerRef = useRef<HTMLDivElement>(null);
    const [trackOffset, setTrackOffset] = useState({ x: 0, y: 0 });

    const startIconColor = widget.data.startIconColor || data.iconColor || theme.palette.primary.main;
    const endIconColor = widget.data.endIconColor || data.iconColor || theme.palette.primary.main;

    const isHorizontal = widget.data.sliderOrientation === 'horizontal';

    const startIcon = useMemo(
        () =>
            isHorizontal
                ? widget.data.iconMin || widget.data.iconSmallMin
                : widget.data.iconMax || widget.data.iconSmallMax,
        [isHorizontal, widget.data.iconMin, widget.data.iconSmallMin, widget.data.iconMax, widget.data.iconSmallMax],
    );

    const endIcon = useMemo(
        () =>
            isHorizontal
                ? widget.data.iconMax || widget.data.iconSmallMax
                : widget.data.iconMin || widget.data.iconSmallMin,
        [isHorizontal, widget.data.iconMax, widget.data.iconSmallMax, widget.data.iconMin, widget.data.iconSmallMin],
    );

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

    const sliderMarks = useMemo(() => {
        const marks = states.map(state => ({
            value: Number(state.value),
            label: state.label,
            fontSize: state.fontSize,
            textColor: state.textColor,
            icon: state.icon,
            iconWidth: state.iconWidth,
            iconHeight: state.iconHeight,
            iconXOffset: state.iconXOffset,
            iconYOffset: state.iconYOffset,
            iconColor: state.iconColor,
            forceColorMask: state.forceColorMask,
        }));

        if (widget.data.onlyStates) {
            return marks.sort((a, b) => a.value - b.value);
        }

        const createDefaultMark = (
            value: number,
        ): {
            value: number;
            label: string;
            fontSize: undefined;
            textColor: undefined;
            icon: string;
            iconWidth: number;
            iconHeight: number;
            iconXOffset: string;
            iconYOffset: string;
            iconColor: undefined;
            forceColorMask: undefined;
        } => ({
            value,
            label: `${value}${oidObject?.unit || ''}`,
            fontSize: undefined,
            textColor: undefined,
            icon: '',
            iconWidth: 100,
            iconHeight: 100,
            iconXOffset: '0px',
            iconYOffset: '0px',
            iconColor: undefined,
            forceColorMask: undefined,
        });

        // Ensure minimum value is included
        if (sliderMinValue !== null && !marks.some(m => m.value === sliderMinValue)) {
            marks.push(createDefaultMark(sliderMinValue));
        }

        // Ensure maximum value is included
        if (sliderMaxValue !== null && !marks.some(m => m.value === sliderMaxValue)) {
            marks.push(createDefaultMark(sliderMaxValue));
        }

        // Add step divisions
        if (sliderMinValue !== null && sliderMaxValue !== null) {
            const step = Number(widget.data.markStep) || 1;
            for (let i = sliderMinValue + step; i < sliderMaxValue; i += step) {
                if (!marks.some(m => m.value === i)) {
                    marks.push(createDefaultMark(i));
                }
            }
        }

        return marks.sort((a, b) => a.value - b.value);
    }, [states, widget.data.onlyStates, widget.data.markStep, sliderMinValue, sliderMaxValue, oidObject?.unit]);

    useEffect(() => {
        if (sliderValue === undefined && typeof oidValue === 'number') {
            setSliderValue(oidValue);
        }
    }, [oidValue, sliderValue]);

    useEffect(() => {
        if (!oidValueChanged) {
            return;
        }

        setSliderValue(typeof oidValue === 'number' ? oidValue : undefined);
    }, [oidValueChanged, oidValue]);

    // Calculates the relative offset from the container center to the slider rail center.
    const calculateTrackOffset = (): void => {
        if (!sliderContainerRef.current) {
            return;
        }

        // Find the slider rail within the container.
        const sliderElement = sliderContainerRef.current.querySelector('.MuiSlider-root');
        const railElement = sliderContainerRef.current.querySelector('.MuiSlider-rail');

        if (sliderElement && railElement) {
            const containerRect = sliderContainerRef.current.getBoundingClientRect();
            const railRect = railElement.getBoundingClientRect();

            // Compute the rail center relative to the container.
            const railCenterX = railRect.left - containerRect.left + railRect.width / 2;
            const railCenterY = railRect.top - containerRect.top + railRect.height / 2;

            // Compute container center.
            const containerCenterX = containerRect.width / 2;
            const containerCenterY = containerRect.height / 2;

            // Offset is the difference between rail center and container center.
            setTrackOffset({
                x: railCenterX - containerCenterX,
                y: railCenterY - containerCenterY,
            });
        }
    };

    // Recompute track position when layout-dependent inputs change.
    useEffect(() => {
        // Small delay to allow MUI to update the DOM.
        const timer = setTimeout(calculateTrackOffset, 100);
        return () => clearTimeout(timer);
    }, [
        widget.data.marks,
        widget.data.sliderOrientation,
        widget.data.iconSizeStart,
        widget.data.iconSizeEnd,
        sliderValue,
    ]);

    // ResizeObserver for dynamic adjustments.
    useEffect(() => {
        if (!sliderContainerRef.current) {
            return;
        }

        const resizeObserver = new ResizeObserver(calculateTrackOffset);
        resizeObserver.observe(sliderContainerRef.current);

        return () => resizeObserver.disconnect();
    }, []);

    useEffect(() => {
        if (oidValue === undefined) {
            return;
        }

        const index = sliderMarks.findIndex(mark => String(mark.value) === String(oidValue));

        if (index !== -1) {
            setSliderMarksIndex(index);
        }
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
            <CollectionBaseImage
                data={data}
                widget={widget}
            />
            {isValidType ? (
                <Box
                    ref={sliderContainerRef}
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
                            <img
                                alt=""
                                src={startIcon}
                                style={{
                                    width: isHorizontal
                                        ? widget.data.iconSizeStart || '24px'
                                        : widget.data.iconSizeEnd || '24px',
                                    ...getIconColorStyles(startIcon, isHorizontal ? startIconColor : endIconColor),
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
                                slots={{
                                    markLabel: CollectionMark,
                                }}
                                slotProps={{
                                    markLabel: {
                                        marks: widget.data.marks,
                                        sliderOrientation: widget.data.sliderOrientation,
                                        aliasActive: widget.data.aliasActive,
                                        activeMarkIndex: sliderMarksIndex,
                                        defaultIconColor: data.iconColor || theme.palette.primary.main,
                                    } as SliderMarkLabelProps,
                                }}
                                disabled={oidType !== 'number'}
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
                                        setSliderValue(newValue);
                                        setOidValueState(newValue);
                                    }
                                }}
                                sx={{
                                    mb: widget.data.marks && isHorizontal ? '20px' : '0px',
                                    mr: widget.data.marks && !isHorizontal ? '44px' : '0px',
                                    '& .MuiSlider-thumb': {
                                        color: widget.data.sliderColor,
                                    },
                                    '& .MuiSlider-rail': {
                                        color: widget.data.sliderColor || 'primary.main',
                                    },
                                    '& .MuiSlider-track': {
                                        color: widget.data.sliderColor || 'primary.main',
                                    },
                                    '& .MuiSlider-mark': {
                                        color: widget.data.sliderColor || 'primary.main',
                                    },
                                    '& .MuiSlider-markActive': {
                                        bgcolor: widget.data.sliderColor || 'primary.main',
                                        filter: 'brightness(2.5)',
                                    },
                                    '& .MuiSlider-valueLabel': {
                                        fontSize:
                                            formatSizeRem(widget.data.valueSizeActive) ||
                                            data.valueSizeActive ||
                                            (activeIndex &&
                                                widget.data.markerTextSize &&
                                                formatSizeRem(widget.data.markerTextSize)) ||
                                            data.valueSize ||
                                            '1rem',
                                        color:
                                            widget.data.textColorActive ||
                                            data.textColorActive ||
                                            (activeIndex && widget.data.markerTextColor) ||
                                            data.textColor,
                                        bgcolor: 'transparent',
                                        top: isHorizontal ? widget.data.labelPosition : undefined,
                                        right: !isHorizontal ? widget.data.labelPosition : undefined,
                                    },
                                    '& .MuiSlider-markLabel': {
                                        fontSize: data.valueSize || '1rem',
                                        color: widget.data.markerTextColor || data.textColor,
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
                                                    widget.data.iconXOffsetActive &&
                                                    widget.data.iconXOffsetActive !== '0px'
                                                        ? `${widget.data.iconXOffsetActive} !important`
                                                        : widget.data.iconXOffsetActive === ''
                                                          ? undefined
                                                          : '0px !important',
                                                bottom:
                                                    widget.data.iconYOffsetActive &&
                                                    widget.data.iconYOffsetActive !== '0px'
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
                            <img
                                alt=""
                                src={endIcon}
                                style={{
                                    width: isHorizontal
                                        ? widget.data.iconSizeEnd || '24px'
                                        : widget.data.iconSizeStart || '24px',
                                    ...getIconColorStyles(endIcon, isHorizontal ? endIconColor : startIconColor),
                                }}
                            />
                        </Box>
                    )}
                </Box>
            ) : null}
        </CollectionBase>
    );
};

export default SliderCollection;
