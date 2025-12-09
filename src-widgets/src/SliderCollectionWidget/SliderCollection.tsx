import { Box, Slider } from '@mui/material';
import React, { useState, useMemo, useContext, useEffect, useRef, type FC } from 'react';
import CollectionBase from '../components/CollectionBase';
import { CollectionContext } from '../components/CollectionProvider';
import useData from '../hooks/useData';
import useValueState from '../hooks/useValueState';
import CollectionMark from './CollectionMark';

import type { SliderCollectionContextProps } from 'src';

interface SliderMarkLabelProps {
    marks: boolean;
    sliderOrientation: 'horizontal' | 'vertical';
    aliasActive?: string;
    activeMarkIndex?: number | null;
    defaultIconColor?: string;
}

const SliderCollection: FC = () => {
    const {
        widget: {
            data: { oidObject },
        },
        widget,
    } = useContext(CollectionContext) as SliderCollectionContextProps;
    const { data, states, minValue, maxValue } = useData('oid');
    const [sliderMarksIndex, setSliderMarksIndex] = useState<number | null>(null);
    const { value: oidValue, updateValue: setOidValueState, hasBackendChange: oidValueChanged } = useValueState('oid');
    const [sliderValue, setSliderValue] = useState<number | undefined>(
        typeof oidValue === 'number' ? oidValue : undefined,
    );

    // Refs für die dynamische Track-Positionierung
    const sliderContainerRef = useRef<HTMLDivElement>(null);
    const [trackOffset, setTrackOffset] = useState({ x: 0, y: 0 });

    const startIconColor = widget.data.startIconColor || widget.data.sliderColor || data.iconColor || data.textColor;
    const endIconColor = widget.data.endIconColor || widget.data.sliderColor || data.iconColor || data.textColor;

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
                icon: null,
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
                icon: null,
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
                        icon: null,
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

    // Funktion zur Berechnung der Track-Position
    const calculateTrackOffset = (): void => {
        if (!sliderContainerRef.current) {
            return;
        }

        // Suche nach dem Slider-Track innerhalb des Containers
        const sliderElement = sliderContainerRef.current.querySelector('.MuiSlider-root');
        const railElement = sliderContainerRef.current.querySelector('.MuiSlider-rail');

        if (sliderElement && railElement) {
            const containerRect = sliderContainerRef.current.getBoundingClientRect();
            const railRect = railElement.getBoundingClientRect();

            // Berechne die relative Position der Rail (Slider-Track) zum Container
            const railCenterX = railRect.left - containerRect.left + railRect.width / 2;
            const railCenterY = railRect.top - containerRect.top + railRect.height / 2;

            // Berechne die Container-Mitte
            const containerCenterX = containerRect.width / 2;
            const containerCenterY = containerRect.height / 2;

            // Offset ist die Differenz zwischen Rail-Mitte und Container-Mitte
            setTrackOffset({
                x: railCenterX - containerCenterX,
                y: railCenterY - containerCenterY,
            });
        }
    };

    // Berechne Track-Position bei Änderungen
    useEffect(() => {
        // Kleine Verzögerung, damit MUI den DOM aktualisiert hat
        const timer = setTimeout(calculateTrackOffset, 100);
        return () => clearTimeout(timer);
    }, [
        widget.data.marks,
        widget.data.sliderOrientation,
        widget.data.iconSizeStart,
        widget.data.iconSizeEnd,
        sliderValue,
    ]);

    // ResizeObserver für dynamische Anpassung
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
                        p: 2, // Padding um den gesamten Slider (MUI5 konform)
                        gap: 1.5, // Abstand zwischen Icons und Slider
                    }}
                >
                    {/* Start Icon - im normalen Layout-Fluss */}
                    {((widget.data.sliderOrientation === 'horizontal' &&
                        (widget.data.iconMin || widget.data.iconSmallMin)) ||
                        (widget.data.sliderOrientation === 'vertical' &&
                            (widget.data.iconMax || widget.data.iconSmallMax))) && (
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexShrink: 0, // Icon soll nicht schrumpfen
                                // Dynamische Ausrichtung zur Track-Mitte mit Transform
                                ...(widget.data.sliderOrientation === 'horizontal'
                                    ? {
                                          // Horizontaler Slider: Icon vertikal zur Track-Mitte ausrichten
                                          transform: `translateY(${trackOffset.y}px)`,
                                      }
                                    : {
                                          // Vertikaler Slider: Icon horizontal zur Track-Mitte ausrichten
                                          transform: `translateX(${trackOffset.x}px)`,
                                      }),
                            }}
                        >
                            <img
                                alt=""
                                src={
                                    widget.data.sliderOrientation === 'horizontal'
                                        ? widget.data.iconMin || widget.data.iconSmallMin
                                        : widget.data.iconMax || widget.data.iconSmallMax
                                }
                                style={{
                                    width:
                                        widget.data.sliderOrientation === 'horizontal'
                                            ? widget.data.iconSizeStart || '24px'
                                            : widget.data.iconSizeEnd || '24px',
                                    height:
                                        widget.data.sliderOrientation === 'horizontal'
                                            ? widget.data.iconSizeStart || '24px'
                                            : widget.data.iconSizeEnd || '24px',
                                    color:
                                        widget.data.sliderOrientation === 'horizontal' ? startIconColor : endIconColor,
                                    filter: 'drop-shadow(0px 10000px 0)',
                                    transform: 'translateY(-10000px)',
                                }}
                            />
                        </Box>
                    )}

                    {/* Slider Container - nimmt verfügbaren Raum ein */}
                    <Box
                        sx={{
                            display: 'flex',
                            flex: 1, // Nimmt den verfügbaren Raum zwischen den Icons
                            justifyContent: 'center',
                            alignItems: 'center',
                            minWidth: widget.data.sliderOrientation === 'horizontal' ? '200px' : 'auto',
                            minHeight: widget.data.sliderOrientation === 'vertical' ? '200px' : 'auto',
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
                                        aliasActive: widget.data.aliasActive,
                                        activeMarkIndex: sliderMarksIndex,
                                        defaultIconColor: widget.data.sliderColor || data.iconColor || data.textColor,
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
                                        ? null // Bei onlyStates: null bedeutet, dass nur die marks-Werte ausgewählt werden können
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
                                            data.valueSizeActive ||
                                            (widget.data.markerTextSize && `${widget.data.markerTextSize}%`) ||
                                            data.valueSize ||
                                            '1em',
                                        color: data.textColorActive || widget.data.markerTextColor || data.textColor,
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
                                    '& .MuiSlider-markLabel': {
                                        fontSize:
                                            (typeof widget.data.markerTextSize === 'number' &&
                                                `${widget.data.markerTextSize}%`) ||
                                            data.valueSize ||
                                            '1em',
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
                                                    typeof widget.data.valueSizeActive === 'number'
                                                        ? `${widget.data.valueSizeActive}% !important`
                                                        : undefined,
                                            },
                                            "& div[data-position='active']": {
                                                left:
                                                    widget.data.iconXOffsetActive &&
                                                    widget.data.iconXOffsetActive !== '0px'
                                                        ? `${widget.data.iconXOffsetActive} !important`
                                                        : '0px',
                                                bottom:
                                                    widget.data.iconYOffsetActive &&
                                                    widget.data.iconYOffsetActive !== '0px'
                                                        ? `${widget.data.iconYOffsetActive} !important`
                                                        : '0px !important',
                                            },
                                            "& img[data-img='active']": {
                                                width:
                                                    typeof widget.data.iconSizeActive === 'number'
                                                        ? `${(24 * widget.data.iconSizeActive) / 100}px !important`
                                                        : '24px !important',
                                                height:
                                                    typeof widget.data.iconSizeActive === 'number'
                                                        ? `${(24 * widget.data.iconSizeActive) / 100}px !important`
                                                        : '24px !important',
                                                color: widget.data.iconColorActive
                                                    ? `${widget.data.iconColorActive}!important`
                                                    : `${widget.data.sliderColor || data.iconColor || data.textColor}!important`,
                                                filter:
                                                    widget.data.iconColorActive ||
                                                    widget.data.sliderColor ||
                                                    data.iconColor ||
                                                    data.textColor
                                                        ? 'drop-shadow(0px 10000px 0)'
                                                        : undefined,
                                                transform:
                                                    widget.data.iconColorActive ||
                                                    widget.data.sliderColor ||
                                                    data.iconColor ||
                                                    data.textColor
                                                        ? 'translateY(-10000px)'
                                                        : undefined,
                                                pl:
                                                    widget.data.iconActive || widget.data.iconSmallActive
                                                        ? typeof widget.data.iconSizeActive === 'number'
                                                            ? `${(24 * widget.data.iconSizeActive) / 100}px !important`
                                                            : '24px'
                                                        : undefined,
                                                display:
                                                    widget.data.iconActive || widget.data.iconSmallActive
                                                        ? 'block'
                                                        : undefined,
                                                boxSizing:
                                                    widget.data.iconActive || widget.data.iconSmallActive
                                                        ? 'border-box'
                                                        : undefined,
                                                background:
                                                    widget.data.iconActive || widget.data.iconSmallActive
                                                        ? `url('${widget.data.iconSmallActive || widget.data.iconActive}') no-repeat center center`
                                                        : undefined,
                                                backgroundSize:
                                                    widget.data.iconActive || widget.data.iconSmallActive
                                                        ? `${
                                                              typeof widget.data.iconSizeActive === 'number'
                                                                  ? `${(24 * widget.data.iconSizeActive) / 100}px`
                                                                  : '24px'
                                                          } ${
                                                              typeof widget.data.iconSizeActive === 'number'
                                                                  ? `${(24 * widget.data.iconSizeActive) / 100}px`
                                                                  : '24px'
                                                          }`
                                                        : undefined,
                                            },
                                        },
                                    },
                                }}
                            />
                        )}
                    </Box>

                    {/* End Icon - im normalen Layout-Fluss */}
                    {((widget.data.sliderOrientation === 'horizontal' &&
                        (widget.data.iconMax || widget.data.iconSmallMax)) ||
                        (widget.data.sliderOrientation === 'vertical' &&
                            (widget.data.iconMin || widget.data.iconSmallMin))) && (
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexShrink: 0, // Icon soll nicht schrumpfen
                                // Dynamische Ausrichtung zur Track-Mitte mit Transform
                                ...(widget.data.sliderOrientation === 'horizontal'
                                    ? {
                                          // Horizontaler Slider: Icon vertikal zur Track-Mitte ausrichten
                                          transform: `translateY(${trackOffset.y}px)`,
                                      }
                                    : {
                                          // Vertikaler Slider: Icon horizontal zur Track-Mitte ausrichten
                                          transform: `translateX(${trackOffset.x}px)`,
                                      }),
                            }}
                        >
                            <img
                                alt=""
                                src={
                                    widget.data.sliderOrientation === 'horizontal'
                                        ? widget.data.iconMax || widget.data.iconSmallMax
                                        : widget.data.iconMin || widget.data.iconSmallMin
                                }
                                style={{
                                    width:
                                        widget.data.sliderOrientation === 'horizontal'
                                            ? widget.data.iconSizeEnd || '24px'
                                            : widget.data.iconSizeStart || '24px',
                                    height:
                                        widget.data.sliderOrientation === 'horizontal'
                                            ? widget.data.iconSizeEnd || '24px'
                                            : widget.data.iconSizeStart || '24px',
                                    color:
                                        widget.data.sliderOrientation === 'horizontal' ? endIconColor : startIconColor,
                                    filter: 'drop-shadow(0px 10000px 0)',
                                    transform: 'translateY(-10000px)',
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
