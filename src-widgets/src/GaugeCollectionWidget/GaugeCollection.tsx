/**
 * Gauge collection renderer.
 *
 * @module widgets/GaugeCollection
 * @remarks
 * Owns everything the Options-Builder cannot know: the measured dimensions,
 * the current value, the Highlight-Zones derived from the state rows (K3 will
 * extract that segment model) and the segment-driven frame styling. The
 * canvas-gauges option object itself comes from
 * {@link module:GaugeCollectionWidget/gaugeOptions.buildGaugeOptions}.
 */

import { Box } from '@mui/material';
import React, { useContext, useRef, useMemo, useEffect, useState } from 'react';
import CollectionBase, { type CollectionBaseHandle } from '../components/CollectionBase';
import { CollectionContext } from '../components/CollectionProvider';
import type { GaugeCollectionContextProps } from '../types';
import useData, { type StyleData } from '../hooks/useData';
import useOidValue from '../hooks/useOidValue';
import useElementDimensions from '../hooks/useElementDimensions';
import Gauge from './Gauge';
import CollectionBaseImage from '../components/CollectionBaseImage';
import SafeImg from '../components/SafeImg';
import gaugeFields from '../lib/gaugeFields';
import { extractColorFromValue } from '../lib/helper/extractColorFromValue';
import { getIconColorStyles } from '../lib/helper/getIconColorStyles';
import { buildGaugeOptions, resolveGaugeRange } from './gaugeOptions';

/**
 * Highlight segment for the gauge (range + styling overrides).
 */
export interface Highlight {
    from: number;
    to: number;
    color: string;
    state: Pick<
        StyleData,
        | 'textColor'
        | 'icon'
        | 'iconColor'
        | 'forceColorMask'
        | 'iconSize'
        | 'iconSizeOnly'
        | 'iconXOffset'
        | 'iconYOffset'
        | 'frameBackgroundColor'
        | 'frameBackgroundColorActive'
        | 'backgroundColor'
        | 'backgroundColorActive'
        | 'background'
        | 'backgroundActive'
        | 'frameBackground'
        | 'frameBackgroundActive'
    >;
}

/**
 * Returns the highlight segment for a given value.
 */
const findSegment = (highlights: Highlight[], value: number, maxValue: number): Highlight | null => {
    const segment = highlights.find(highlight => {
        return value >= highlight.from && (value < highlight.to || (value === highlight.to && value === maxValue));
    });
    return segment || null;
};

/**
 * Renders a canvas-gauges based gauge and updates frame/background based on the active segment.
 */
function GaugeCollection(): React.JSX.Element {
    const baseRef = useRef<CollectionBaseHandle>(null);
    const [gaugeElement, setGaugeElement] = useState<HTMLDivElement | null>(null);
    const { width: gaugeWidth, height: gaugeHeight } = useElementDimensions(gaugeElement);

    const context = useContext(CollectionContext) as GaugeCollectionContextProps;
    const {
        wrappedContent,
        widget: {
            data: { oidObject },
        },
        widget,
    } = context;

    const { data, states } = useData('oid');
    const oidValue = useOidValue('oid');

    const oidType = oidObject?.type;

    const isValidType = oidType === 'number';

    // Field definitions are the Options-Builder's contract — created once per widget.
    const fields = useMemo(() => gaugeFields(), []);

    // Resolve effective min/max: an explicitly configured gaugeMinValue/gaugeMaxValue always
    // wins, otherwise fall back to the min/max auto-detected from the bound object
    // (widget.data.minValue/maxValue, set by oidChangeHandlerAsync from common.min/common.max).
    // (minValue feeds the Options-Builder internally; the Highlight-Zones need the max.)
    const { gaugeMinValue, minValue, gaugeMaxValue, maxValue } = widget.data;
    const { maxValue: effectiveMaxValue } = useMemo(
        () => resolveGaugeRange({ gaugeMinValue, minValue, gaugeMaxValue, maxValue }),
        [gaugeMinValue, minValue, gaugeMaxValue, maxValue],
    );

    const highlights = useMemo(() => {
        const _highlights = states.map((state, index) => {
            // `??` (not `||`): a next boundary of exactly 0 is a real limit, not "unset".
            const nextValue = states[index + 1]?.value ?? effectiveMaxValue;

            return {
                from: Number(state.value),
                to: Number(nextValue),
                color: extractColorFromValue(state.textColor) || 'transparent',
                state: { ...state },
            };
        });

        // Set the last highlight to maxValue if the last state value is less than maxValue
        if (states.length > 0 && Number(states[states.length - 1].value) < effectiveMaxValue) {
            _highlights[_highlights.length - 1].to = effectiveMaxValue;
        }

        return _highlights;
    }, [states, effectiveMaxValue]);

    const segment = useMemo(
        () => findSegment(highlights, Number(oidValue) || 0, effectiveMaxValue),
        [highlights, oidValue, effectiveMaxValue],
    );

    // Complete canvas-gauges option set — coercion, defaults and computed options
    // (min/max, major ticks, dimensions minus padding, value/unit/title) live behind this seam.
    const gaugeOptions = useMemo(
        () =>
            buildGaugeOptions(fields, widget.data, {
                width: gaugeWidth || 0,
                height: gaugeHeight || 0,
                value: oidValue,
                unit: oidObject?.unit,
                header: data.header,
                highlights,
            }),
        [fields, widget.data, gaugeWidth, gaugeHeight, oidValue, oidObject?.unit, data.header, highlights],
    );

    // Segment icon overlay (rendered above the canvas, positioned per state row).
    const iconColorStyles = getIconColorStyles(
        segment?.state.icon,
        segment?.state.iconColor,
        segment?.state.forceColorMask ?? false,
    );

    const paper0 = baseRef.current?.paper0;
    const paper1 = baseRef.current?.paper1;

    useEffect(() => {
        if (paper0 && paper1) {
            if (segment) {
                paper0.style.borderColor =
                    (!wrappedContent &&
                        (segment?.state.frameBackgroundColorActive || segment?.state.frameBackgroundColor || null)) ||
                    '';

                paper0.style.background =
                    segment?.state.frameBackgroundColorActive ||
                    segment?.state.frameBackgroundColor ||
                    segment?.state.frameBackgroundActive ||
                    segment?.state.frameBackground ||
                    null ||
                    '';
                // ----------------------------------------------------------
                paper1.style.borderColor =
                    (!wrappedContent &&
                        (segment?.state.backgroundColorActive || segment?.state.backgroundColor || null)) ||
                    '';

                paper1.style.background =
                    segment?.state.backgroundColorActive ||
                    segment?.state.backgroundColor ||
                    segment?.state.backgroundActive ||
                    segment?.state.background ||
                    null ||
                    '';
            } else {
                paper0.style.borderColor = '';

                paper0.style.background = data.frameBackgroundColor || data.frameBackground || null || '';
                // ----------------------------------------------------------
                paper1.style.borderColor = '';

                paper1.style.background = data.backgroundColor || data.background || null || '';
            }
        }
    }, [
        paper0,
        paper1,
        wrappedContent,
        segment,
        widget.data,
        data.frameBackgroundColor,
        data.frameBackground,
        data.backgroundColor,
        data.background,
    ]);

    return (
        <CollectionBase
            ref={baseRef}
            isValidType={isValidType}
            data={data}
            oidValue={oidValue}
        >
            <CollectionBaseImage
                data={{
                    ...data,
                    icon: segment?.state.icon,
                    iconColor: segment?.state.iconColor,
                    forceColorMask: segment?.state.forceColorMask,
                }}
                widget={widget}
            />
            <Box
                ref={setGaugeElement}
                sx={{
                    width: '100%',
                    height: '100%',

                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <SafeImg
                    alt=""
                    src={segment?.state.icon}
                    style={{
                        position: 'relative',

                        width: segment?.state.iconSizeOnly,
                        height: segment?.state.iconSizeOnly,

                        boxSizing: 'border-box',
                        objectFit: widget.data.gaugeIconFit,

                        top: `calc(0px - ${segment?.state.iconYOffset})`,
                        left: `calc(0px + ${segment?.state.iconXOffset})`,

                        ...iconColorStyles,
                    }}
                />
                <Gauge options={gaugeOptions} />
            </Box>
        </CollectionBase>
    );
}

export default GaugeCollection;
