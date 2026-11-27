/**
 * The Raumthermostat's arrangements: where each part of its content sits per size stage
 * (ADR-0122 Nr. 1, ADR-0123 Nr. 2).
 *
 * @module HeatingThermostatCollectionWidget/ThermostatStage
 * @remarks
 * Each arrangement has its places — Kartenkopf, dial or big set-point, pills, operating-mode
 * segment, readings, hint line — that the body fills. The Kartenkopf and the hint line stand while
 * the middle scrolls. A place without content draws nothing.
 * - Groß: Kartenkopf (row); dial; hint line; pills, operating-mode segment, readings.
 * - Mittel: Kartenkopf (row); dial; hint line.
 * - Quer: Kartenkopf (stacked) with the hint line beside the big set-point; the operating-mode
 *   segment below, from sufficient height.
 * - Kompakt: Kartenkopf (row); big set-point; hint line.
 */
import { Box } from '@mui/material';
import type { ReactElement, ReactNode } from 'react';

import { thermostatTile, type ThermostatArrangement } from './thermostatStages';
import type { KartenkopfForm } from '../lib/heating/Kartenkopf';
import type { TileContent } from '../lib/heating/SizeStages';
import type { MeasuredBox } from '../lib/heating/stageRule';

/** The content of the Raumthermostat's places. */
export interface ThermostatParts {
    /** The Kartenkopf in the arrangement's form. */
    head: (form: KartenkopfForm) => ReactNode;
    /** The dial (Voll). */
    dial: ReactNode;
    /** The big set-point with its ± (Einfach). */
    setpoint: ReactNode;
    /** The pills Absenk / Komfort / Aus (Groß). */
    pills: ReactNode;
    /** The operating-mode segment (Groß; Quer from sufficient height). */
    modes: ReactNode;
    /** The readings bar (Groß). */
    readings: ReactNode;
    /** The hint line. */
    hint: ReactNode;
    /** The tile's parts below the hull's head. */
    tile: {
        /** The main value. */
        main: ReactNode;
        /** The − beside it, from sufficient width. */
        decrease: ReactNode;
        /** The + beside it, from sufficient width. */
        increase: ReactNode;
        /** The footer line (actual temperature or Meldung), from sufficient height. */
        line: ReactNode;
    };
}

/** Props of {@link ThermostatStage}. */
export interface ThermostatStageProps {
    arrangement: ThermostatArrangement;
    /** Quer shows the operating-mode segment. */
    querModes: boolean;
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
 * @param props.arrangement - The arrangement to draw.
 * @param props.querModes - Whether Quer shows the operating-mode segment.
 * @param props.parts - The content of the places.
 * @returns The arrangement.
 */
export default function ThermostatStage({ arrangement, querModes, parts }: ThermostatStageProps): ReactElement {
    let regions: ReactNode;

    switch (arrangement) {
        case 'gross':
            regions = (
                <>
                    {fixedRegion('head', slot('head', parts.head('zeile')))}
                    {middleRegion(slot('dial', parts.dial))}
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
                    {middleRegion(slot('dial', parts.dial))}
                    {fixedRegion('hint', slot('hint', parts.hint))}
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
                                {slot('hint', parts.hint)}
                            </Box>
                        </Box>
                        {slot('setpoint', parts.setpoint)}
                    </Box>
                    {middleRegion(querModes ? slot('modes', parts.modes) : null, false)}
                </>
            );
            break;
        default:
            regions = (
                <>
                    {fixedRegion('head', slot('head', parts.head('zeile')))}
                    {middleRegion(slot('setpoint', parts.setpoint))}
                    {fixedRegion('hint', slot('hint', parts.hint))}
                </>
            );
    }

    return (
        <Box
            data-heating-arrangement={arrangement}
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
 * The Raumthermostat tile for a box: the set-point, ± and the footer line where they fit.
 *
 * @param parts - The content of the places.
 * @param box - The measured Content-Box.
 * @returns What the tile hull shows below its head.
 */
export function thermostatTileContent(parts: ThermostatParts, box: MeasuredBox): TileContent {
    const fits = thermostatTile(box, parts.tile.decrease != null);
    return {
        main: parts.tile.main,
        start: fits.buttons ? parts.tile.decrease : null,
        end: fits.buttons ? parts.tile.increase : null,
        line: fits.footer ? parts.tile.line : null,
    };
}
