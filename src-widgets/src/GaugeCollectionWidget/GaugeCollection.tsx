/**
 * Gauge collection renderer.
 *
 * @module widgets/GaugeCollection
 * @remarks
 * Owns everything the Options-Builder cannot know: the canvas size (the
 * frame's Content-Box, ADR-0098), the current value and the Highlight-Zones
 * derived from the state rows ({@link module:GaugeCollectionWidget/gaugeSegments}).
 * The canvas-gauges option object comes from
 * {@link module:GaugeCollectionWidget/gaugeOptions.buildGaugeOptions}; the
 * active zone's styling is pre-composed into the `data` CollectionBase
 * renders — no imperative DOM writes (K3).
 */

import { Box } from '@mui/material';
import React, { useCallback, useContext, useMemo, useState } from 'react';
import CollectionBase from '../components/CollectionBase';
import { CollectionContext } from '../components/CollectionProvider';
import type { GaugeCollectionContextProps } from '../types';
import useData from '../hooks/useData';
import useOidValue from '../hooks/useOidValue';
import useContentBox from '../hooks/useContentBox';
import useStyles from '../hooks/useStyles';
import Gauge from './Gauge';
import SafeImg from '../components/SafeImg';
import gaugeFields from '../lib/gaugeFields';
import { getIconColorStyles } from '../lib/helper/getIconColorStyles';
import { buildGaugeOptions, resolveGaugeRange } from './gaugeOptions';
import { buildHighlights, findSegment, resolveSegmentBackground, resolveSegmentFrame } from './gaugeSegments';

import type { GaugeOptions } from 'canvas-gauges';

/** Builds the complete option set for a canvas size in px and the widget's CSS colour resolver. */
type BuildGaugeOptions = (input: {
    width: number;
    height: number;
    resolveCssColor: ((value: string) => string | null) | undefined;
}) => GaugeOptions;

/** Colour of the probe's parent: a probe that still shows it took no colour from its value. */
const UNRESOLVED = 'rgb(1, 2, 3)';

/**
 * Resolves a CSS colour the canvas cannot paint (`var(…)`) at a probe inside the widget, so the
 * variables of view and widget apply. An unresolvable value is invalid at computed-value time
 * and inherits the parent's sentinel colour.
 *
 * @param probe - Hidden element inside the widget.
 * @param value - CSS colour text.
 * @returns The computed colour, or null when it does not resolve.
 */
function resolveCssColorAt(probe: HTMLElement, value: string): string | null {
    probe.style.setProperty('color', value);
    const computed = getComputedStyle(probe).color;
    probe.style.removeProperty('color');
    return computed && computed !== UNRESOLVED ? computed : null;
}

/**
 * The canvas, sized by the frame's Content-Box — a child of CollectionBase, where the box is
 * published. An unmeasured box counts as 0 × 0 (the adapter draws nothing below its minimum).
 * A hidden probe next to it resolves CSS variables for the canvas (canvas-gauges paints no
 * `var(…)`); until it is mounted such colours fall back like unset ones.
 */
function SizedGauge({ buildOptions }: { buildOptions: BuildGaugeOptions }): React.JSX.Element {
    const { width, height } = useContentBox();
    const [probe, setProbe] = useState<HTMLElement | null>(null);
    const resolveCssColor = useMemo(
        () => (probe ? (value: string): string | null => resolveCssColorAt(probe, value) : undefined),
        [probe],
    );
    const options = useMemo(
        () => buildOptions({ width: width || 0, height: height || 0, resolveCssColor }),
        [buildOptions, width, height, resolveCssColor],
    );

    return (
        <>
            <span
                hidden
                style={{ color: UNRESOLVED }}
            >
                <span ref={setProbe} />
            </span>
            <Gauge options={options} />
        </>
    );
}

/**
 * Renders a canvas-gauges based gauge; the active Highlight-Zone restyles
 * frame and content through the pre-composed style data.
 */
function GaugeCollection(): React.JSX.Element {
    const context = useContext(CollectionContext) as GaugeCollectionContextProps;
    const {
        theme,
        widget: {
            data: { oidObject },
        },
        widget,
    } = context;

    const { data, states } = useData('oid');
    const oidValue = useOidValue('oid');
    const { textStyles } = useStyles(widget.style);

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

    const highlights = useMemo(() => buildHighlights(states, effectiveMaxValue), [states, effectiveMaxValue]);

    const segment = useMemo(
        () => findSegment(highlights, Number(oidValue) || 0, effectiveMaxValue),
        [highlights, oidValue, effectiveMaxValue],
    );

    // Active-zone styling, declaratively: the resolved segment colors are composed INTO
    // the style data CollectionBase renders through its sx cascade — the replacement for
    // the retired paper0/paper1 imperative handle writes. Without an active zone (or when
    // the zone sets nothing) the base data passes through unchanged, exactly like every
    // other Collection widget.
    const baseData = useMemo(() => {
        if (!segment) {
            return data;
        }
        return {
            ...data,
            frameBackground: resolveSegmentFrame(segment) ?? data.frameBackground,
            background: resolveSegmentBackground(segment) ?? data.background,
        };
    }, [data, segment]);

    // Complete canvas-gauges option set — coercion, defaults, the color contract
    // (ADR-0004) and computed options (min/max, major ticks, dimensions minus
    // padding, value/unit/title) live behind this seam. The canvas size joins
    // inside the frame (SizedGauge).
    const buildOptions = useCallback<BuildGaugeOptions>(
        ({ width, height, resolveCssColor }) =>
            buildGaugeOptions(fields, widget.data, {
                width,
                height,
                resolveCssColor,
                value: oidValue,
                unit: oidObject?.unit,
                header: data.header,
                highlights,
                theme,
                textStyles,
            }),
        [fields, widget.data, oidValue, oidObject?.unit, data.header, highlights, theme, textStyles],
    );

    // Segment icon overlay (rendered above the canvas, positioned per state row).
    const iconColorStyles = getIconColorStyles(
        segment?.state.icon,
        segment?.state.iconColor,
        segment?.state.forceColorMask ?? false,
    );

    return (
        <CollectionBase
            isValidType={isValidType}
            data={baseData}
            oidValue={oidValue}
            cornerIcon={{ ...data, icon: segment?.state.icon, iconColor: segment?.state.iconColor }}
        >
            <Box
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
                <SizedGauge buildOptions={buildOptions} />
            </Box>
        </CollectionBase>
    );
}

export default GaugeCollection;
