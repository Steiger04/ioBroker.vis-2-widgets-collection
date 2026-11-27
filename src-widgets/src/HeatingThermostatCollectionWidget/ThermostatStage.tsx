/**
 * The Raumthermostat's arrangements: where each part of its content sits per size stage
 * (ADR-0122 Nr. 1, Nachtrag K7; ADR-0123 Nr. 2).
 *
 * @module HeatingThermostatCollectionWidget/ThermostatStage
 * @remarks
 * The content hands over all of its parts, drawn at the plan's sizes, whatever the arrangement; the
 * plan of the box (`thermostatPlan`) names the arrangement and its sizes, and the placement here
 * alone decides which part stands where — its gaps and Groß's column from the plan too. The
 * Kartenkopf and the hint line stand while the middle scrolls. A place without content draws
 * nothing.
 * - Groß: Kartenkopf (row, with symbol and Unterzeile); dial; hint line; pills, operating-mode
 *   segment, readings.
 * - Mittel: Kartenkopf (row); dial; the hint line only for a Meldung.
 * - Quer: the head block at the top — Kartenkopf (stacked) with a Meldung, else the actual
 *   temperature, beside the big set-point in the theme's h3 at the Maßstab; the operating-mode
 *   segment flush at the bottom, where it fits.
 * - Kompakt: Kartenkopf (row); big set-point at the Maßstab; a Meldung, else the actual
 *   temperature.
 * - The tile: the set-point sized to the tile, ± and the footer line (a Meldung, else the actual
 *   temperature) where they fit.
 */
import { Box } from '@mui/material';
import type { ReactElement, ReactNode } from 'react';

import type { SetpointFont, ThermostatDial, ThermostatStagePlan, ThermostatTilePlan } from './thermostatStages';
import type { KartenkopfForm } from '../lib/heating/Kartenkopf';
import type { TileContent } from '../lib/heating/SizeStages';
import type { HintLineProps } from './HintLine';

/** How the Meldung's hint line looks in a place (its sizes come with the parts). */
export type MessageLook = Omit<HintLineProps, 'hint' | 'sizes'>;

/** All parts of the Raumthermostat's content at the plan's sizes, for every arrangement alike. */
export interface ThermostatParts {
    /** The Kartenkopf in a form; `full` adds the type symbol and the Unterzeile. */
    head: (form: KartenkopfForm, full?: boolean) => ReactNode;
    /** The dial in the plan's size. */
    dial: (dial: ThermostatDial) => ReactNode;
    /** The big set-point with its ±, at the plan's font (px or the theme's h3 at a factor). */
    setpoint: (font: SetpointFont) => ReactNode;
    /** The pills Absenk / Komfort / Aus. */
    pills: ReactNode;
    /** The operating-mode segment. */
    modes: ReactNode;
    /** The readings bar. */
    readings: ReactNode;
    /** The hint line: the current state or a Meldung. */
    hint: ReactNode;
    /** The hint line of a Meldung; nothing without one. */
    message: (look?: MessageLook) => ReactNode;
    /** The actual temperature. */
    actual: ReactNode;
    /** The tile's parts below the hull's head. */
    tile: {
        /** The main value at the plan's font size. */
        main: (font: number) => ReactNode;
        /** The − beside it. */
        decrease: ReactNode;
        /** The + beside it. */
        increase: ReactNode;
    };
}

/** Props of {@link ThermostatStage}. */
export interface ThermostatStageProps {
    /** The plan of a drawn stage. */
    plan: ThermostatStagePlan;
    /** The parts at the plan's sizes. */
    parts: ThermostatParts;
}

/**
 * A place with content, else nothing.
 *
 * @param name - The place's name.
 * @param content - Its content.
 * @returns The place.
 */
const slot = (name: string, content: ReactNode): ReactNode =>
    content == null || content === false ? null : (
        <Box
            data-heating-slot={name}
            sx={{ minWidth: 0 }}
        >
            {content}
        </Box>
    );

/** A region that stands while the middle scrolls, `gap` spacing units between its places; a column narrows it. */
const fixedRegion = (name: string, gap: number, children: ReactNode, column: number | null = null): ReactElement => (
    <Box
        data-heating-region={name}
        sx={{
            flex: 'none',
            minWidth: 0,
            display: 'flex',
            flexDirection: 'column',
            gap,
            ...(column === null ? {} : { width: column, maxWidth: '100%', alignSelf: 'center' }),
        }}
    >
        {children}
    </Box>
);

/**
 * The middle region: takes the rest and scrolls, `gap` spacing units between its places — centred,
 * or at its bottom: the rest of the height stands above its first place, which still scrolls from
 * the top when the region is too low (a margin, not the flex alignment, which would cut it off).
 */
const middleRegion = (gap: number, children: ReactNode, place: 'center' | 'end' = 'center'): ReactElement => (
    <Box
        data-heating-region="middle"
        sx={{
            flex: 1,
            minHeight: 0,
            minWidth: 0,
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: place === 'center' ? 'center' : 'flex-start',
            alignItems: 'stretch',
            gap,
            ...(place === 'end' ? { '& > :first-of-type': { marginTop: 'auto' } } : {}),
        }}
    >
        {children}
    </Box>
);

/**
 * The Raumthermostat in one arrangement.
 *
 * @param props - Component props.
 * @param props.plan - The plan of the box: the arrangement and its sizes.
 * @param props.parts - The content's parts.
 * @returns The arrangement.
 */
export default function ThermostatStage({ plan, parts }: ThermostatStageProps): ReactElement {
    let regions: ReactNode;
    const { gaps } = plan.sizes;

    switch (plan.arrangement) {
        case 'gross':
            regions = (
                <>
                    {fixedRegion('head', gaps.region, slot('head', parts.head('zeile', true)))}
                    {middleRegion(gaps.region, slot('dial', parts.dial(plan.dial)))}
                    {fixedRegion('hint', gaps.region, slot('hint', parts.hint))}
                    {fixedRegion(
                        'controls',
                        gaps.region,
                        <>
                            {slot('pills', parts.pills)}
                            {slot('modes', parts.modes)}
                            {slot('readings', parts.readings)}
                        </>,
                        plan.column,
                    )}
                </>
            );
            break;
        case 'mittel':
            regions = (
                <>
                    {fixedRegion('head', gaps.region, slot('head', parts.head('zeile')))}
                    {middleRegion(gaps.region, slot('dial', parts.dial(plan.dial)))}
                    {fixedRegion('hint', gaps.region, slot('hint', parts.message()))}
                </>
            );
            break;
        case 'quer':
            regions = (
                <>
                    <Box
                        data-heating-region="head"
                        sx={{ flex: 'none', minWidth: 0, display: 'flex', alignItems: 'center', gap: gaps.querHead }}
                    >
                        <Box
                            sx={{
                                flex: 1,
                                minWidth: 0,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: gaps.querText,
                            }}
                        >
                            {slot('head', parts.head('gestapelt'))}
                            <Box
                                data-heating-region="hint"
                                sx={{ minWidth: 0 }}
                            >
                                {slot('hint', parts.message({ align: 'start' }) ?? parts.actual)}
                            </Box>
                        </Box>
                        {slot('setpoint', parts.setpoint(plan.setpointFont))}
                    </Box>
                    {middleRegion(gaps.region, plan.modes ? slot('modes', parts.modes) : null, 'end')}
                </>
            );
            break;
        default:
            regions = (
                <>
                    {fixedRegion('head', gaps.region, slot('head', parts.head('zeile')))}
                    {middleRegion(gaps.region, slot('setpoint', parts.setpoint(plan.setpointFont)))}
                    {fixedRegion('hint', gaps.region, slot('hint', parts.message({ align: 'center' }) ?? parts.actual))}
                </>
            );
    }

    return (
        <Box
            data-heating-arrangement={plan.arrangement}
            sx={{
                width: '100%',
                height: '100%',
                minWidth: 0,
                minHeight: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: gaps.region,
            }}
        >
            {regions}
        </Box>
    );
}

/**
 * The Raumthermostat tile by its plan: the set-point, ± and the footer line where they fit.
 *
 * @param parts - The content's parts at the tile plan's sizes.
 * @param tile - The tile's plan.
 * @returns What the tile hull shows below its head.
 */
export function thermostatTileContent(parts: ThermostatParts, tile: ThermostatTilePlan): TileContent {
    return {
        main: parts.tile.main(tile.setpointFont),
        start: tile.buttons ? parts.tile.decrease : null,
        end: tile.buttons ? parts.tile.increase : null,
        line: tile.footer ? (parts.message({ align: 'start' }) ?? parts.actual) : null,
    };
}
