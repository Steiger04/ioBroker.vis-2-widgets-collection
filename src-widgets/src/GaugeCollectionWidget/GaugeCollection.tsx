/**
 * Gauge collection renderer.
 *
 * @module widgets/GaugeCollection
 * @remarks
 * Owns everything the Options-Builder cannot know: the canvas size (the
 * frame's Content-Box, ADR-0098), the current value and the states useData
 * publishes. Range, value coercion, Highlight-Zones and icon fit live behind the
 * builder's two entries (ADR-0107 Nr. 4): the canvas-gauges option object comes
 * from {@link module:GaugeCollectionWidget/gaugeOptions.buildGaugeOptions} inside
 * the frame, the active zone's style and the icon fit from
 * {@link module:GaugeCollectionWidget/gaugeOptions.resolveGaugeZone} outside it.
 * The active zone's styling is pre-composed into the `data` CollectionBase
 * renders — no imperative DOM writes (K3).
 */

import { Box } from '@mui/material';
import React, { useCallback, useContext, useMemo, useState } from 'react';
import CollectionBase from '../components/CollectionBase';
import { CollectionContext } from '../components/CollectionProvider';
import type { GaugeCollectionContextProps } from '../types';
import useData from '../hooks/useData';
import useContentBox from '../hooks/useContentBox';
import useStyles from '../hooks/useStyles';
import Gauge from './Gauge';
import SafeImg from '../components/SafeImg';
import gaugeFields from '../lib/gaugeFields';
import { getIconColorStyles } from '../lib/helper/getIconColorStyles';
import { buildGaugeOptions, resolveGaugeZone } from './gaugeOptions';

import type { GaugeOptions } from 'canvas-gauges';

/** Builds the complete option set for a canvas size in px and the widget's CSS colour resolver. */
type BuildGaugeOptions = (input: {
    width: number;
    height: number;
    resolveCssColor: ((value: string) => string | null) | undefined;
}) => GaugeOptions;

/** Colour of the probe's parent: a probe that still shows it took no colour from its value. */
const UNRESOLVED = 'rgb(1, 2, 3)';

/** Colour keywords whose value comes from the element or its colour scheme, not from the text. */
const CONTEXT_KEYWORDS = new Set([
    'inherit',
    'initial',
    'unset',
    'revert',
    'revert-layer',
    'currentcolor',
    'canvas',
    'canvastext',
    'linktext',
    'visitedtext',
    'activetext',
    'buttonface',
    'buttontext',
    'buttonborder',
    'field',
    'fieldtext',
    'highlight',
    'highlighttext',
    'selecteditem',
    'selecteditemtext',
    'mark',
    'marktext',
    'graytext',
    'accentcolor',
    'accentcolortext',
]);

/** Colour functions a canvas paints as written — the only ones that skip the probe. */
const PLAIN_FUNCTION = /^(?:rgba?|hsla?)\(/;

/** Text inside a colour that ties it to the widget context: a variable, `currentColor`, a scheme. */
const CONTEXT_TEXT = /var\(|env\(|attr\(|currentcolor|light-dark\(/;

/**
 * Whether a colour's value is only known inside the widget: a `var(…)`, a CSS-wide or system
 * keyword, `currentColor`, or any colour function beyond rgb/hsl (color-mix, light-dark, …).
 * Hex, names and plain rgb/hsl paint as written.
 */
function dependsOnContext(value: string): boolean {
    const text = value.trim().toLowerCase();
    if (CONTEXT_KEYWORDS.has(text) || CONTEXT_TEXT.test(text)) {
        return true;
    }
    return text.includes('(') && !PLAIN_FUNCTION.test(text);
}

/**
 * Computes a CSS colour for the canvas (the builder's Canvas-Farbe). A colour that depends on
 * the widget context is computed at a probe inside the widget, so the variables of view and
 * widget apply; an unresolvable value — rejected by the parser, or invalid at computed-value
 * time — leaves the probe on the parent's sentinel colour. Every other colour skips the probe
 * (a forced style recalculation per value): the parser decides, and a valid one passes as
 * written.
 *
 * @param probe - Hidden element inside the widget.
 * @param value - CSS colour text.
 * @returns The colour to paint, or null when it does not resolve.
 */
function resolveCssColorAt(probe: HTMLElement, value: string): string | null {
    if (!dependsOnContext(value)) {
        return typeof CSS === 'undefined' || CSS.supports('color', value) ? value : null;
    }
    probe.style.setProperty('color', value);
    const computed = getComputedStyle(probe).color;
    probe.style.removeProperty('color');
    return computed && computed !== UNRESOLVED ? computed : null;
}

/**
 * The canvas, sized by the frame's Content-Box — a child of CollectionBase, where the box is
 * published. An unmeasured box counts as 0 × 0 (the adapter draws nothing below its minimum).
 * A hidden probe next to it computes the colours for the canvas (canvas-gauges paints no
 * `var(…)`); until it is mounted a `var(…)` falls back like an unset colour.
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

    const { data, states, oidValue } = useData('oid');
    const { textStyles } = useStyles(widget.style);

    const oidType = oidObject?.type;

    const isValidType = oidType === 'number';

    // Field definitions are the Options-Builder's contract — created once per widget.
    const fields = useMemo(() => gaugeFields(), []);

    // Body-Einstieg of the builder: the active zone's style and the zone icon's fit, resolved
    // over the same range and value the canvas sees.
    const { active, iconFit } = useMemo(
        () => resolveGaugeZone(fields, widget.data, states, oidValue),
        [fields, widget.data, states, oidValue],
    );

    // Active-zone styling, declaratively: the zone's colors are composed INTO the style
    // data CollectionBase renders through its sx cascade — the replacement for the retired
    // paper0/paper1 imperative handle writes. Without an active zone (or where the zone
    // value is empty) the base data passes through unchanged, exactly like every other
    // Collection widget.
    const baseData = useMemo(() => {
        if (!active) {
            return data;
        }
        return {
            ...data,
            frameBackground: active.frameBackground || data.frameBackground,
            frameBackgroundInherited: active.frameBackground
                ? active.frameBackgroundInherited
                : data.frameBackgroundInherited,
            background: active.background || data.background,
        };
    }, [data, active]);

    // Canvas-Einstieg: the complete canvas-gauges option set — coercion, defaults, the color
    // contract (ADR-0004) and computed options (min/max, major ticks, dimensions minus
    // padding, value/unit/title, Highlight-Zone arcs) live behind this seam. The canvas size
    // joins inside the frame (SizedGauge).
    const buildOptions = useCallback<BuildGaugeOptions>(
        ({ width, height, resolveCssColor }) =>
            buildGaugeOptions(fields, widget.data, {
                width,
                height,
                resolveCssColor,
                value: oidValue,
                unit: oidObject?.unit,
                header: data.header,
                states,
                theme,
                textStyles,
            }),
        [fields, widget.data, oidValue, oidObject?.unit, data.header, states, theme, textStyles],
    );

    // Zone icon, positioned per state row. It renders BEHIND the canvas (the absolutely
    // positioned canvas follows it in DOM order), so it shows through the default transparent
    // plate as a background icon; a plate colour covers it.
    const iconColorStyles = getIconColorStyles(active?.icon, active?.iconColor, active?.forceColorMask ?? false);

    return (
        <CollectionBase
            isValidType={isValidType}
            data={baseData}
            oidValue={oidValue}
            cornerIcon={{ ...data, icon: active?.icon, iconColor: active?.iconColor }}
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
                    src={active?.icon}
                    style={{
                        position: 'relative',

                        width: active?.iconSizeOnly,
                        height: active?.iconSizeOnly,

                        boxSizing: 'border-box',
                        objectFit: iconFit,

                        top: `calc(0px - ${active?.iconYOffset})`,
                        left: `calc(0px + ${active?.iconXOffset})`,

                        ...iconColorStyles,
                    }}
                />
                <SizedGauge buildOptions={buildOptions} />
            </Box>
        </CollectionBase>
    );
}

export default GaugeCollection;
