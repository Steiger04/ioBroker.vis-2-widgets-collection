/**
 * Slider collection renderer.
 *
 * @module widgets/SliderCollection
 */

import { Box, Slider, type SliderProps, styled } from '@mui/material';
import { useState, useMemo, useContext, useEffect, useRef, useCallback, type FC } from 'react';
import CollectionBase from '../components/CollectionBase';
import { CollectionContext } from '../components/CollectionProvider';
import useData from '../hooks/useData';
import useValueState from '../hooks/useValueState';
import CollectionMark from './CollectionMark';
import CollectionBaseImage from '../components/CollectionBaseImage';
import { formatSizeRem } from '../lib/helper/formatSizeRem';
import { getIconColorStyles } from '../lib/helper/getIconColorStyles';

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
    shouldForwardProp: prop => prop !== 'data' && prop !== 'thumbColor',
})<CollectionSliderProps>(({ theme, thumbColor, data }) => ({
    '&.MuiSlider-root': {
        //height: '16px',
    },
    '& .MuiSlider-thumb': {
        width: '96px',
        height: '96px',
        color: thumbColor || theme.palette.primary.main,

        '&:hover, &.Mui-focusVisible': {},
    },
    '& .MuiSlider-track': {
        height: data?.sliderOrientation === 'horizontal' ? '72px' : 'auto',
        width: data?.sliderOrientation === 'vertical' ? '72px' : 'auto',

        borderColor: thumbColor || theme.palette.primary.main,
        backgroundColor: thumbColor || theme.palette.primary.main,
    },
    '& .MuiSlider-rail': {
        height: data?.sliderOrientation === 'horizontal' ? '24px' : '100%',
        width: data?.sliderOrientation === 'vertical' ? '24px' : '100%',

        backgroundColor: thumbColor || theme.palette.primary.main,
    },
    '& .MuiSlider-mark': {
        width: data?.sliderOrientation === 'horizontal' ? '3px' : '16px',
        height: data?.sliderOrientation === 'horizontal' ? '16px' : '3px',
        backgroundColor: thumbColor || theme.palette.primary.main,
    },
    '& .MuiSlider-markActive': {
        width: data?.sliderOrientation === 'horizontal' ? '3px' : '16px',
        height: data?.sliderOrientation === 'horizontal' ? '16px' : '3px',

        backgroundColor: thumbColor || theme.palette.primary.main,
        '&.MuiSlider-markActive': {
            backgroundColor: thumbColor || theme.palette.primary.main,
        },
    },
}));

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

    // const startIconColor = widget.data.startIconColor || widget.data.sliderColor || data.iconColor || data.textColor;
    // const endIconColor = widget.data.endIconColor || widget.data.sliderColor || data.iconColor || data.textColor;

    const startIconColor = widget.data.startIconColor || data.iconColor || theme.palette.primary.main;
    const endIconColor = widget.data.endIconColor || data.iconColor || theme.palette.primary.main;

    const startIcon =
        widget.data.sliderOrientation === 'horizontal'
            ? widget.data.iconMin || widget.data.iconSmallMin
            : widget.data.iconMax || widget.data.iconSmallMax;

    const endIcon =
        widget.data.sliderOrientation === 'horizontal'
            ? widget.data.iconMax || widget.data.iconSmallMax
            : widget.data.iconMin || widget.data.iconSmallMin;

    const oidType = oidObject?.type;

    const isValidType = oidType === 'number';

    const formatSize = useCallback(formatSizeRem, []);

    const sliderMinValue = useMemo(
        () => (!widget.data.onlyStates && widget.data.minValue !== undefined ? Number(widget.data.minValue) : minValue),
        [widget.data.onlyStates, widget.data.minValue, minValue],
    );

    const sliderMaxValue = useMemo(
        () => (!widget.data.onlyStates && widget.data.maxValue !== undefined ? Number(widget.data.maxValue) : maxValue),
        [widget.data.onlyStates, widget.data.maxValue, maxValue],
    );

    const sliderMarks = useMemo(() => {
        // Convert states to SliderMark format, preserving the existing labels (which contain aliases if available)
        const _sliderMarks = states.map(state => ({
            value: Number(state.value),
            label: state.label, // Use the existing label which contains alias or value+unit
            fontSize: state.fontSize,
            textColor: state.textColor,
            icon: state.icon,
            iconWidth: state.iconWidth,
            iconHeight: state.iconHeight,
            iconXOffset: state.iconXOffset,
            iconYOffset: state.iconYOffset,
            iconColor: state.iconColor,
        }));

        if (widget.data.onlyStates) {
            return _sliderMarks.sort((a, b) => a.value - b.value);
        }
        // Ensure minimum and maximum values are included
        const minValue = sliderMinValue;
        const maxValue = sliderMaxValue;

        if (_sliderMarks && minValue !== null && !_sliderMarks.some(state => state.value === minValue)) {
            _sliderMarks.push({
                value: minValue,
                label: `${minValue}${oidObject?.unit || ''}`,
                fontSize: undefined,
                textColor: undefined,
                icon: '',
                iconWidth: 100,
                iconHeight: 100,
                iconXOffset: '0px',
                iconYOffset: '0px',
                iconColor: undefined,
            });
        }

        if (_sliderMarks && maxValue !== null && !_sliderMarks.some(state => state.value === maxValue)) {
            _sliderMarks.push({
                value: maxValue,
                label: `${maxValue}${oidObject?.unit || ''}`,
                fontSize: undefined,
                textColor: undefined,
                icon: '',
                iconWidth: 100,
                iconHeight: 100,
                iconXOffset: '0px',
                iconYOffset: '0px',
                iconColor: undefined,
            });
        }

        // Add step divisions
        const step = Number(widget.data.markStep) || 1;
        if (minValue !== null && maxValue !== null) {
            for (let i = minValue + step; i < maxValue; i += step) {
                if (!_sliderMarks.some(state => state.value === i)) {
                    _sliderMarks.push({
                        value: i,
                        label: `${i}${oidObject?.unit || ''}`,
                        fontSize: undefined,
                        textColor: undefined,
                        icon: '',
                        iconWidth: 100,
                        iconHeight: 100,
                        iconXOffset: '0px',
                        iconYOffset: '0px',
                        iconColor: undefined,
                    });
                }
            }
        }

        // Sort the states by value
        _sliderMarks.sort((a, b) => a.value - b.value);

        return _sliderMarks;
    }, [states, sliderMinValue, sliderMaxValue, widget.data.markStep, oidObject?.unit, widget.data.onlyStates]);

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
        >
            <CollectionBaseImage
                data={data}
                widget={widget}
            />
            {isValidType ? (
                <Box
                    ref={sliderContainerRef}
                    sx={{
                        display: 'flex',
                        flexDirection: widget.data.sliderOrientation === 'horizontal' ? 'row' : 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        height: '100%',

                        pl:
                            widget.data.sliderOrientation === 'horizontal' &&
                            (widget.data.iconMin || widget.data.iconSmallMin)
                                ? 0.5
                                : 2,
                        pr:
                            widget.data.sliderOrientation === 'horizontal' &&
                            (widget.data.iconMax || widget.data.iconSmallMax)
                                ? 0.5
                                : 2,
                        pt:
                            widget.data.sliderOrientation === 'vertical' &&
                            (widget.data.iconMax || widget.data.iconSmallMax)
                                ? 0.5
                                : 2,

                        pb:
                            widget.data.sliderOrientation === 'vertical' &&
                            (widget.data.iconMin || widget.data.iconSmallMin)
                                ? 0.5
                                : 2,

                        gap: 1.5, // Spacing between icons and slider
                    }}
                >
                    {/* Start icon - in normal layout flow */}
                    {((widget.data.sliderOrientation === 'horizontal' &&
                        (widget.data.iconMin || widget.data.iconSmallMin)) ||
                        (widget.data.sliderOrientation === 'vertical' &&
                            (widget.data.iconMax || widget.data.iconSmallMax))) && (
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexShrink: 0, // Icon should not shrink
                                // Dynamic alignment to track center with transform
                                ...(widget.data.sliderOrientation === 'horizontal'
                                    ? {
                                          // Horizontal slider: align icon vertically to track center
                                          transform: `translateY(${trackOffset.y}px)`,
                                      }
                                    : {
                                          // Vertical slider: align icon horizontally to track center
                                          transform: `translateX(${trackOffset.x}px)`,
                                      }),
                            }}
                        >
                            <img
                                alt=""
                                src={startIcon}
                                style={{
                                    width:
                                        widget.data.sliderOrientation === 'horizontal'
                                            ? widget.data.iconSizeStart || '24px'
                                            : widget.data.iconSizeEnd || '24px',
                                    /* height:
                                        widget.data.sliderOrientation === 'horizontal'
                                            ? widget.data.iconSizeStart || '24px'
                                            : widget.data.iconSizeEnd || '24px', */
                                    ...getIconColorStyles(
                                        startIcon,
                                        widget.data.sliderOrientation === 'horizontal' ? startIconColor : endIconColor,
                                    ),
                                }}
                            />
                        </Box>
                    )}

                    {/* Slider container - takes available space */}
                    <Box
                        sx={{
                            display: 'flex',
                            flex: 1, // Takes available space between icons
                            justifyContent: 'center',
                            alignItems: 'center',
                            minWidth: widget.data.sliderOrientation === 'horizontal' ? '200px' : 'auto',
                            minHeight: widget.data.sliderOrientation === 'vertical' ? '200px' : 'auto',
                        }}
                    >
                        {typeof sliderValue === 'number' && (
                            <CollectionSlider
                                data={widget.data}
                                thumbColor="rgba(255, 0, 0, 0.3)"
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
                                onChange={(_, value) => {
                                    if (typeof value === 'number') {
                                        setSliderValue(value);
                                        setOidValueState(value);
                                    }
                                }}
                                sx={{
                                    mb:
                                        widget.data.marks && widget.data.sliderOrientation === 'horizontal'
                                            ? '20px'
                                            : '0px',
                                    mr:
                                        widget.data.marks && widget.data.sliderOrientation === 'vertical'
                                            ? '44px'
                                            : '0px',
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
                                            formatSize(widget.data.valueSizeActive) ||
                                            data.valueSizeActive ||
                                            // (widget.data.markerTextSize && `${widget.data.markerTextSize}%`) ||
                                            (activeIndex &&
                                                widget.data.markerTextSize &&
                                                formatSize(widget.data.markerTextSize)) ||
                                            data.valueSize ||
                                            '1rem',

                                        color:
                                            widget.data.textColorActive ||
                                            data.textColorActive ||
                                            (activeIndex && widget.data.markerTextColor) ||
                                            data.textColor,

                                        bgcolor: 'transparent',

                                        top:
                                            widget.data.sliderOrientation === 'horizontal'
                                                ? widget.data.labelPosition
                                                : undefined,

                                        right:
                                            widget.data.sliderOrientation === 'vertical'
                                                ? widget.data.labelPosition
                                                : undefined,
                                    },
                                    // Global styles for all marks (fallback)
                                    // IMPORTANT: These styles are overridden by individual styles in CollectionMark.
                                    // Priority: CollectionMark (individual) > MuiSlider-markLabel (global)
                                    '& .MuiSlider-markLabel': {
                                        fontSize: data.valueSize || '1rem',
                                        color: widget.data.markerTextColor || data.textColor,
                                        top:
                                            widget.data.sliderOrientation === 'horizontal'
                                                ? widget.data.markPosition
                                                : undefined,
                                        left:
                                            widget.data.sliderOrientation === 'vertical'
                                                ? widget.data.markPosition
                                                : undefined,
                                    },
                                    '& .MuiSlider-markLabelActive': {
                                        [`&[data-index='${sliderMarksIndex}']`]: {
                                            "& div[data-font='active']": {
                                                color: widget.data.textColorActive
                                                    ? `${widget.data.textColorActive} !important`
                                                    : undefined,
                                                fontSize:
                                                    /* typeof widget.data.valueSizeActive === 'number'
                                                        ? `${widget.data.valueSizeActive}% !important`
                                                        : undefined, */
                                                    typeof widget.data.valueSizeActive === 'number'
                                                        ? `${formatSize(widget.data.valueSizeActive)} !important`
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
                    {((widget.data.sliderOrientation === 'horizontal' &&
                        (widget.data.iconMax || widget.data.iconSmallMax)) ||
                        (widget.data.sliderOrientation === 'vertical' &&
                            (widget.data.iconMin || widget.data.iconSmallMin))) && (
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexShrink: 0, // Icon should not shrink
                                // Dynamic alignment to track center with transform
                                ...(widget.data.sliderOrientation === 'horizontal'
                                    ? {
                                          // Horizontal slider: align icon vertically to track center
                                          transform: `translateY(${trackOffset.y}px)`,
                                      }
                                    : {
                                          // Vertical slider: align icon horizontally to track center
                                          transform: `translateX(${trackOffset.x}px)`,
                                      }),
                            }}
                        >
                            <img
                                alt=""
                                src={endIcon}
                                style={{
                                    width:
                                        widget.data.sliderOrientation === 'horizontal'
                                            ? widget.data.iconSizeEnd || '24px'
                                            : widget.data.iconSizeStart || '24px',
                                    /* height:
                                        widget.data.sliderOrientation === 'horizontal'
                                            ? widget.data.iconSizeEnd || '24px'
                                            : widget.data.iconSizeStart || '24px', */
                                    ...getIconColorStyles(
                                        endIcon,
                                        widget.data.sliderOrientation === 'horizontal' ? endIconColor : startIconColor,
                                    ),
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
