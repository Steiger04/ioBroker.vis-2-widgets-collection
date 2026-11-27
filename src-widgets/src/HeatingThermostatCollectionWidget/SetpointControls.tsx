/**
 * The Raumthermostat's set-point controls: the ring of the dial and the ± buttons (stage-1 spec
 * „Bedienen → Sollwert“).
 *
 * @module HeatingThermostatCollectionWidget/SetpointControls
 * @remarks
 * The ring draws the scale (`lib/heating/setpointScale`) with its ticks, the track and the arc up to
 * the shown value and its handle. Dragging along the ring shows the value under the pointer
 * (`onPreview`) and hands it over once on release (`onCommit`); a cancelled pointer writes nothing.
 * The ring is a slider for the keyboard: the arrow keys step like ±. While the ring is off (the
 * set-point has not reported yet) it neither reacts nor takes the focus; ± are disabled then.
 * Ring (arc, handle, track) and ± take the Bedienakzent (`lib/heating/tones`, ADR-0124 Nachtrag
 * 2026-11-27): a setting, not a state, so the ring looks the same with a window open.
 */
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import { Box, IconButton, useTheme } from '@mui/material';
import { useRef, type KeyboardEvent, type PointerEvent, type ReactElement, type ReactNode } from 'react';

import { useReducedMotion } from '../lib/heating/motion';
import { fractionOf, RING_START, RING_SWEEP, valueAtAngle, type SetpointScale } from '../lib/heating/setpointScale';
import { accentColors, neutralColors } from '../lib/heating/tones';
import { translate } from '../lib/translate';
import { DIAL_LABEL } from './thermostatStages';

/** Props of {@link StepButton}. */
export interface StepButtonProps {
    /** − lowers, + raises the set-point. */
    readonly direction: 'down' | 'up';
    /** Disabled: not reported yet, or at the limit. */
    readonly disabled: boolean;
    /** Edge length in px. */
    readonly size: number;
    /** The symbol's size in px, drawn in the theme's rem. */
    readonly iconSize: number;
    readonly onClick: () => void;
}

/**
 * One round ± button.
 *
 * @param props - Component props, see {@link StepButtonProps}.
 * @param props.direction - − or +.
 * @param props.disabled - Whether it is disabled.
 * @param props.size - Edge length in px.
 * @param props.iconSize - The symbol's size in px.
 * @param props.onClick - Steps the set-point.
 * @returns The button.
 */
export function StepButton({ direction, disabled, size, iconSize, onClick }: StepButtonProps): ReactElement {
    const reducedMotion = useReducedMotion();
    const theme = useTheme();
    const accent = accentColors(theme);
    const iconSx = { fontSize: theme.typography.pxToRem(iconSize) };
    return (
        <IconButton
            data-heating-step={direction}
            aria-label={translate(direction === 'up' ? 'heating_soll_erhoehen' : 'heating_soll_senken')}
            disabled={disabled}
            disableRipple={reducedMotion}
            onClick={onClick}
            sx={{
                flex: 'none',
                width: size,
                height: size,
                border: 1,
                borderColor: 'transparent',
                bgcolor: accent.surface,
                color: accent.text,
                transition: reducedMotion ? 'none' : undefined,
                '&:hover': { bgcolor: accent.hover },
            }}
        >
            {direction === 'up' ? <Add sx={iconSx} /> : <Remove sx={iconSx} />}
        </IconButton>
    );
}

/** The SVG's coordinate box and the ring's geometry in it (the design's). */
const VIEW = 320;
const CENTRE = VIEW / 2;
const RADIUS = 118;
const STROKE = 14;
/** The ring takes a pointer between these distances from the centre. */
const GRAB = { inner: 92, outer: 158 } as const;

/** A point on a circle around the centre. */
const pointAt = (degrees: number, radius: number): [number, number] => {
    const angle = (degrees * Math.PI) / 180;
    return [CENTRE + radius * Math.cos(angle), CENTRE + radius * Math.sin(angle)];
};

/** The angle of a value on the ring. */
const angleOf = (value: number, scale: SetpointScale): number => RING_START + fractionOf(value, scale) * RING_SWEEP;

/** The ticks: one per whole degree, a long one with its label per multiple of five. */
function ticksOf(scale: SetpointScale): { minor: string; major: string; labels: [number, number, number][] } {
    let minor = '';
    let major = '';
    const labels: [number, number, number][] = [];
    for (let degree = Math.ceil(scale.min); degree <= Math.floor(scale.max); degree++) {
        const angle = angleOf(degree, scale);
        const big = degree % 5 === 0;
        const [x1, y1] = pointAt(angle, big ? 134 : 136);
        const [x2, y2] = pointAt(angle, big ? 143 : 141);
        const segment = `M${x1.toFixed(1)} ${y1.toFixed(1)}L${x2.toFixed(1)} ${y2.toFixed(1)}`;
        if (big) {
            major += segment;
            const [x, y] = pointAt(angle, 152);
            labels.push([degree, x, y]);
        } else {
            minor += segment;
        }
    }
    return { minor, major, labels };
}

/** Props of {@link SetpointDial}. */
export interface SetpointDialProps {
    /** Edge length in px. */
    readonly size: number;
    readonly scale: SetpointScale;
    /** The shown set-point; none draws no arc and no handle. */
    readonly value: number | undefined;
    /** Off: the ring neither reacts nor takes the focus. */
    readonly disabled: boolean;
    /** Shows a value while dragging; `undefined` ends the preview. */
    readonly onPreview: (value: number | undefined) => void;
    /** Takes the value on release. */
    readonly onCommit: (value: number) => void;
    /** Steps like ± (the arrow keys). */
    readonly onStep: (direction: 'down' | 'up') => void;
    /** The centre: set-point and actual temperature. */
    readonly children: ReactNode;
    /** The ± below the centre; none for a set-point that is not writable. */
    readonly buttons: ReactNode;
    /** The gap between set-point and actual temperature in the centre, in spacing units. */
    readonly gap: number;
    /** Whether the scale labels show (the plan's: while they keep 11 px). */
    readonly labels: boolean;
    /** The plan's layout in px: the centre's bottom padding, ± from the bottom edge and their gap. */
    readonly layout: { readonly padding: number; readonly stepsBottom: number; readonly stepsGap: number };
}

/**
 * The dial: ring, centre and ±.
 *
 * @param props - Component props, see {@link SetpointDialProps}.
 * @param props.size - Edge length in px.
 * @param props.scale - The set-point's scale.
 * @param props.value - The shown set-point.
 * @param props.disabled - Whether the ring is off.
 * @param props.onPreview - Shows a value while dragging.
 * @param props.onCommit - Takes the value on release.
 * @param props.onStep - Steps like ±.
 * @param props.children - The centre.
 * @param props.buttons - The ± below the centre.
 * @param props.gap - The gap in the centre.
 * @param props.labels - Whether the scale labels show.
 * @param props.layout - The plan's layout of centre and ±.
 * @returns The dial.
 */
export function SetpointDial({
    size,
    scale,
    value,
    disabled,
    onPreview,
    onCommit,
    onStep,
    children,
    buttons,
    gap,
    labels,
    layout,
}: SetpointDialProps): ReactElement {
    const theme = useTheme();
    const quiet = neutralColors(theme);
    const reducedMotion = useReducedMotion();
    // The value under the pointer while a drag runs; none while no drag runs.
    const dragRef = useRef<number | undefined>(undefined);
    const interactive = !disabled && buttons != null;

    const valueAt = (event: PointerEvent<SVGSVGElement>, strict: boolean): number | undefined => {
        const rect = event.currentTarget.getBoundingClientRect();
        if (!rect.width || !rect.height) {
            return undefined;
        }
        const x = ((event.clientX - rect.left) / rect.width) * VIEW - CENTRE;
        const y = ((event.clientY - rect.top) / rect.height) * VIEW - CENTRE;
        const distance = Math.hypot(x, y);
        if (strict && (distance < GRAB.inner || distance > GRAB.outer)) {
            return undefined;
        }
        return valueAtAngle((Math.atan2(y, x) * 180) / Math.PI, scale);
    };

    const onPointerDown = (event: PointerEvent<SVGSVGElement>): void => {
        if (!interactive) {
            return;
        }
        const next = valueAt(event, true);
        if (next === undefined) {
            return;
        }
        event.currentTarget.setPointerCapture?.(event.pointerId);
        dragRef.current = next;
        onPreview(next);
    };
    const onPointerMove = (event: PointerEvent<SVGSVGElement>): void => {
        if (dragRef.current === undefined) {
            return;
        }
        const next = valueAt(event, false);
        if (next !== undefined && next !== dragRef.current) {
            dragRef.current = next;
            onPreview(next);
        }
    };
    const onPointerUp = (): void => {
        const committed = dragRef.current;
        dragRef.current = undefined;
        onPreview(undefined);
        if (committed !== undefined) {
            onCommit(committed);
        }
    };
    const onPointerCancel = (): void => {
        dragRef.current = undefined;
        onPreview(undefined);
    };
    const onKeyDown = (event: KeyboardEvent<SVGSVGElement>): void => {
        if (!interactive) {
            return;
        }
        if (event.key === 'ArrowUp' || event.key === 'ArrowRight') {
            event.preventDefault();
            onStep('up');
        } else if (event.key === 'ArrowDown' || event.key === 'ArrowLeft') {
            event.preventDefault();
            onStep('down');
        }
    };

    const ticks = ticksOf(scale);
    const accent = accentColors(theme);
    const circumference = 2 * Math.PI * RADIUS;
    const sweep = (RING_SWEEP / 360) * circumference;
    const shown = value === undefined ? undefined : fractionOf(value, scale);
    const [hx, hy] = value === undefined ? [0, 0] : pointAt(angleOf(value, scale), RADIUS);
    const transition = reducedMotion ? 'none' : 'stroke 0.3s';

    return (
        <Box
            data-heating-dial=""
            sx={{ position: 'relative', width: size, height: size, mx: 'auto', flex: 'none' }}
        >
            <svg
                viewBox={`0 0 ${VIEW} ${VIEW}`}
                role="slider"
                aria-label={translate('heating_soll_ring')}
                aria-valuemin={scale.min}
                aria-valuemax={scale.max}
                aria-valuenow={value}
                aria-disabled={!interactive}
                tabIndex={interactive ? 0 : -1}
                data-heating-ring=""
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                onPointerCancel={onPointerCancel}
                onKeyDown={onKeyDown}
                style={{
                    display: 'block',
                    width: size,
                    height: size,
                    overflow: 'visible',
                    touchAction: interactive ? 'none' : 'auto',
                    cursor: interactive ? 'grab' : 'default',
                    outlineColor: theme.palette.primary.main,
                }}
            >
                <path
                    d={ticks.minor}
                    style={{
                        fill: 'none',
                        stroke: quiet.tick,
                        strokeWidth: 1.5,
                        strokeLinecap: 'round',
                        opacity: 0.45,
                    }}
                />
                <path
                    d={ticks.major}
                    style={{
                        fill: 'none',
                        stroke: quiet.tick,
                        strokeWidth: 2,
                        strokeLinecap: 'round',
                    }}
                />
                {(labels ? ticks.labels : []).map(([degree, x, y]) => (
                    <text
                        key={degree}
                        x={x}
                        y={y}
                        style={{
                            fill: quiet.label,
                            // In the ring's units: the labels grow and shrink with the dial.
                            fontSize: `${DIAL_LABEL}px`,
                            textAnchor: 'middle',
                            dominantBaseline: 'central',
                        }}
                    >
                        {degree}
                    </text>
                ))}
                <circle
                    cx={CENTRE}
                    cy={CENTRE}
                    r={RADIUS}
                    transform={`rotate(${RING_START} ${CENTRE} ${CENTRE})`}
                    style={{
                        fill: 'none',
                        stroke: accent.surface,
                        strokeWidth: STROKE,
                        strokeLinecap: 'round',
                        strokeDasharray: `${sweep.toFixed(2)} ${circumference.toFixed(2)}`,
                    }}
                />
                {shown === undefined ? null : (
                    <>
                        <circle
                            data-heating-arc=""
                            cx={CENTRE}
                            cy={CENTRE}
                            r={RADIUS}
                            transform={`rotate(${RING_START} ${CENTRE} ${CENTRE})`}
                            style={{
                                fill: 'none',
                                stroke: accent.line,
                                strokeWidth: STROKE,
                                strokeLinecap: 'round',
                                strokeDasharray: `${(shown * sweep).toFixed(2)} ${circumference.toFixed(2)}`,
                                transition,
                            }}
                        />
                        <circle
                            cx={hx}
                            cy={hy}
                            r={11}
                            style={{
                                fill: theme.palette.background.paper,
                                stroke: accent.line,
                                strokeWidth: 4,
                                transition,
                            }}
                        />
                    </>
                )}
            </svg>
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    pb: `${layout.padding}px`,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap,
                    pointerEvents: 'none',
                }}
            >
                {children}
            </Box>
            {buttons == null ? null : (
                <Box
                    sx={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        bottom: `${layout.stepsBottom}px`,
                        display: 'flex',
                        justifyContent: 'center',
                        gap: `${layout.stepsGap}px`,
                    }}
                >
                    {buttons}
                </Box>
            )}
        </Box>
    );
}
