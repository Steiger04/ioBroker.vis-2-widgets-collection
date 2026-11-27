/**
 * The Raumthermostat's arrangements: where each part of its content sits per size stage
 * (ADR-0122 Nr. 1, Nachtrag K7; ADR-0123 Nr. 2).
 *
 * @module HeatingThermostatCollectionWidget/ThermostatStage
 * @remarks
 * The content hands over all of its parts, whatever the arrangement; the plan of the box
 * (`thermostatPlan`) names the arrangement and its sizes, and the placement here alone decides which
 * part stands where. The Kartenkopf and the hint line stand while the middle scrolls. A place
 * without content draws nothing.
 * - Groß: Kartenkopf (row, with symbol and Unterzeile); dial; hint line; pills, operating-mode
 *   segment, readings.
 * - Mittel: Kartenkopf (row); dial; the hint line only for a Meldung.
 * - Quer: Kartenkopf (stacked) with a Meldung, else the actual temperature, beside the big
 *   set-point; the operating-mode segment below, from sufficient height.
 * - Kompakt: Kartenkopf (row); big set-point sized to its row; a Meldung, else the actual
 *   temperature.
 * - The tile: the set-point sized to the tile, ± and the footer line (a Meldung, else the actual
 *   temperature) where they fit.
 */
import { Box } from '@mui/material';
import type { ReactElement, ReactNode } from 'react';

import type { ThermostatDial, ThermostatStagePlan, ThermostatTilePlan } from './thermostatStages';
import type { KartenkopfForm } from '../lib/heating/Kartenkopf';
import type { TileContent } from '../lib/heating/SizeStages';
import type { HintLineProps } from './HintLine';

/** How the Meldung's hint line looks in a place. */
export type MessageLook = Omit<HintLineProps, 'hint'>;

/** All parts of the Raumthermostat's content, for every arrangement alike. */
export interface ThermostatParts {
    /** The Kartenkopf in a form; `full` adds the type symbol and the Unterzeile. */
    head: (form: KartenkopfForm, full?: boolean) => ReactNode;
    /** The dial in the plan's size. */
    dial: (dial: ThermostatDial) => ReactNode;
    /** The big set-point with its ±, in the theme's h3 or at a font size of the plan. */
    setpoint: (font?: number) => ReactNode;
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

/** A region that stands while the middle scrolls. */
const fixedRegion = (name: string, children: ReactNode): ReactElement => (
    <Box
        data-heating-region={name}
        sx={{ flex: 'none', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 1.5 }}
    >
        {children}
    </Box>
);

/** The middle region: takes the rest and scrolls. */
const middleRegion = (children: ReactNode, centred = true): ReactElement => (
    <Box
        data-heating-region="middle"
        sx={{
            flex: 1,
            minHeight: 0,
            minWidth: 0,
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: centred ? 'center' : 'flex-start',
            alignItems: 'stretch',
            gap: 1.5,
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

    switch (plan.arrangement) {
        case 'gross':
            regions = (
                <>
                    {fixedRegion('head', slot('head', parts.head('zeile', true)))}
                    {middleRegion(slot('dial', parts.dial(plan.dial)))}
                    {fixedRegion('hint', slot('hint', parts.hint))}
                    {fixedRegion(
                        'controls',
                        <>
                            {slot('pills', parts.pills)}
                            {slot('modes', parts.modes)}
                            {slot('readings', parts.readings)}
                        </>,
                    )}
                </>
            );
            break;
        case 'mittel':
            regions = (
                <>
                    {fixedRegion('head', slot('head', parts.head('zeile')))}
                    {middleRegion(slot('dial', parts.dial(plan.dial)))}
                    {fixedRegion('hint', slot('hint', parts.message()))}
                </>
            );
            break;
        case 'quer':
            regions = (
                <>
                    <Box
                        data-heating-region="head"
                        sx={{ flex: 'none', minWidth: 0, display: 'flex', alignItems: 'center', gap: 2 }}
                    >
                        <Box sx={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 1 }}>
                            {slot('head', parts.head('gestapelt'))}
                            <Box
                                data-heating-region="hint"
                                sx={{ minWidth: 0 }}
                            >
                                {slot('hint', parts.message({ align: 'start' }) ?? parts.actual)}
                            </Box>
                        </Box>
                        {/* Quer keeps the set-point in the theme's h3. */}
                        {slot('setpoint', parts.setpoint())}
                    </Box>
                    {middleRegion(plan.modes ? slot('modes', parts.modes) : null, false)}
                </>
            );
            break;
        default:
            regions = (
                <>
                    {fixedRegion('head', slot('head', parts.head('zeile')))}
                    {middleRegion(slot('setpoint', parts.setpoint(plan.setpointFont)))}
                    {fixedRegion('hint', slot('hint', parts.message({ align: 'center' }) ?? parts.actual))}
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
                gap: 1.5,
            }}
        >
            {regions}
        </Box>
    );
}

/**
 * The Raumthermostat tile by its plan: the set-point, ± and the footer line where they fit.
 *
 * @param parts - The content's parts.
 * @param tile - The tile's plan.
 * @returns What the tile hull shows below its head.
 */
export function thermostatTileContent(parts: ThermostatParts, tile: ThermostatTilePlan): TileContent {
    return {
        main: parts.tile.main(tile.setpointFont),
        start: tile.buttons ? parts.tile.decrease : null,
        end: tile.buttons ? parts.tile.increase : null,
        line: tile.footer ? (parts.message({ size: 'tile', align: 'start' }) ?? parts.actual) : null,
    };
}
