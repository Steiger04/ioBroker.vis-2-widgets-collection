/**
 * Raumthermostat renderer.
 *
 * @module HeatingThermostatCollectionWidget/HeatingThermostatCollection
 * @remarks
 * The body inside the Collection frame (ADR-0123): the frame draws the card and its general lines
 * `header` / `footer` without a main OID (`useData('')`, as Light2), no corner icon. Without a usable
 * set-point the frame shows the type's own notice (`lib/heating/setpointNotice`), never its OID
 * hint. Otherwise the size-stage module (`lib/heating/SizeStages`, ADR-0122) decides by the measured
 * Content-Box: the type's rule (`thermostatStages`) gives Voll, Einfach or Mini, the arrangements
 * (`ThermostatStage`) place the parts, Mini is the module's tile filled with the set-point. The
 * places stay empty until their parts are built. Filled so far: the Kartenkopf (`lib/heating/
 * Kartenkopf`: symbol, Bezeichnung, Unterzeile and status chip in Groß; name and chip in Mittel and
 * Kompakt; stacked in Quer), the set-point in the dial and big set-point places, the actual
 * temperature below it in the dial, the hint line (`HintLine`: always in Groß, only for a Meldung
 * in Mittel; in Quer, Kompakt and the tile's footer a Meldung replaces the actual temperature) and
 * the readings bar of Groß (`ThermostatReadings`). The status (`thermostatStatus`) also names the
 * tile's sign; an unreachable device is drawn dimmed and stays operable. Every value reads honestly
 * through the Heizzonen-Lesung (`lib/heating/zoneReading`), bound once to the entry number: „–“
 * while bound without a value or not yet reported.
 *
 * Operating (stage-1 spec „Bedienen“): the ring of the dial (Voll) and ± (dial, big set-point, tile)
 * step the set-point on its scale (`lib/heating/setpointScale`); they are off while the set-point
 * has not reported yet, and absent while it is not writable. A drag shows its value and writes once
 * on release. The pills of Groß (`lib/heating/PillRow`) write absolute values even while the
 * set-point has not reported: Absenk and Komfort the widget's temperatures into the set-point, Aus
 * the way `thermostatOff` names. Every action writes exactly one state through the write chain
 * (`lib/heating/useMeaningWrite`), never into a target the Heizzonen-Lesung reads as not writable; a
 * pill exists only for a writable target. The operating-mode segment (`thermostatModes`: Auto,
 * Manuell, Boost, and the Urlaub pill with its end in a row of its own while Urlaub runs) stands in
 * Groß and in Quer from sufficient height.
 */
import ThermostatOutlined from '@mui/icons-material/ThermostatOutlined';
import { Box, Typography } from '@mui/material';
import { useContext, useState, type ReactElement, type ReactNode } from 'react';

import CollectionBase from '../components/CollectionBase';
import { CollectionContext } from '../components/CollectionProvider';
import useData from '../hooks/useData';
import { useClock } from '../lib/heating/clock';
import Kartenkopf, { type KartenkopfForm } from '../lib/heating/Kartenkopf';
import { headerKeys, NEUTRAL_LABELS } from '../lib/heating/meaningCatalog';
import { formatReading, formatUntil, NO_VALUE } from '../lib/heating/readingFormat';
import { useReducedMotion } from '../lib/heating/motion';
import PillRow, { type Pill } from '../lib/heating/PillRow';
import { setpointScale, stepDown, stepUp } from '../lib/heating/setpointScale';
import SizeStages from '../lib/heating/SizeStages';
import type { MeasuredBox } from '../lib/heating/stageRule';
import { useMeaningWrite, type MeaningWrite } from '../lib/heating/useMeaningWrite';
import { setpointNoticeKey } from '../lib/heating/setpointNotice';
import { readZone } from '../lib/heating/zoneReading';
import { translate } from '../lib/translate';
import ThermostatStage, { thermostatTileContent, type ThermostatParts } from './ThermostatStage';
import { ActualTemperature, actualTemperatureText, ReadingsBar, thermostatReadings } from './ThermostatReadings';
import HintLine from './HintLine';
import { SetpointDial, StepButton } from './SetpointControls';
import { thermostatModeActions, type ModeWriteField } from './thermostatModes';
import { thermostatOff } from './thermostatOff';
import { thermostatStatus } from './thermostatStatus';
import {
    thermostatArrangement,
    thermostatDialFont,
    thermostatDialSize,
    thermostatQuerModes,
    thermostatSetpointFont,
    thermostatStage,
    thermostatTile,
    SETPOINT_FIT,
    type ThermostatArrangement,
} from './thermostatStages';
import type { HeatingThermostatCollectionContextProps } from '../types';

import type { WidgetData } from '@iobroker/types-vis-2';

/** Props of {@link HeatingThermostatCollection}. */
export interface HeatingThermostatCollectionProps {
    /**
     * The entry number whose binding the content reads (`soll3`, `soll3Object`, `bezeichnung3`): the
     * seam for the house types' list entries (ADR-0121); none for the Raumthermostat itself. The
     * widget values (`komfort`, `absenk`, `ansicht`) stay unnumbered.
     */
    entry?: number;
}

/** The label keys of the temperature pills (literal keys). */
const PILL_LABELS = { absenk: 'heating_pill_absenk', komfort: 'heating_pill_komfort' } as const;

/** The Voll design size of the content (the Mini-Dialog's size, ADR-0122 Nr. 7). */
const FULL_SIZE = { width: 420, height: 700 } as const;

/** The opacity of an unreachable device's set-point and dial (the design's dimming). */
const DIMMED_OPACITY = 0.4;

/** The ± edge length beside the big set-point and in the tile (the design's). */
const STEP_BUTTON = { flat: SETPOINT_FIT.stepFlat, tile: SETPOINT_FIT.stepTile } as const;

/** A stored number, if it is one. */
const numberOf = (value: unknown): number | undefined =>
    typeof value === 'number' && Number.isFinite(value) ? value : undefined;

/**
 * The Raumthermostat in its frame.
 *
 * @param props - Component props.
 * @param props.entry - The entry number of the binding; none for the unnumbered binding.
 * @returns The frame with the notice or the content by size stage.
 */
function HeatingThermostatCollection({ entry }: HeatingThermostatCollectionProps): ReactElement {
    const {
        widget: { data: rxData },
        values,
        lang,
    } = useContext(CollectionContext) as HeatingThermostatCollectionContextProps;
    const widgetData = rxData as WidgetData;

    // Header and footer without a main OID: the main Bedeutung is no `oid` (ADR-0123 Nr. 5).
    const { data } = useData('');

    // The zone's data, read once for the entry number (ADR-0121 Nachtrag 2026-11-27).
    const zone = readZone(widgetData, values, entry);
    const setpointReading = zone.meaning('soll');
    const { unit } = setpointReading;
    const header = headerKeys(entry);
    const name = widgetData[header.name] as string | undefined;
    const subLine = widgetData[header.subLine] as string | undefined;
    // The set-point shows only once reported, never the device's substitute value (ADR-0119).
    const reported = setpointReading.number;

    // One write per Bedeutung that an action of the content writes (ADR-0120: one state per action).
    const setpointWrite = { writable: setpointReading.writable, write: useMeaningWrite(setpointReading) };
    const modeWrites: Record<ModeWriteField, MeaningWrite> = {
        betriebsart: useMeaningWrite(zone.meaning('betriebsart')),
        betriebsartSetzen: useMeaningWrite(zone.meaning('betriebsartSetzen')),
        boost: useMeaningWrite(zone.meaning('boost')),
        boostBeenden: useMeaningWrite(zone.meaning('boostBeenden')),
        urlaub: useMeaningWrite(zone.meaning('urlaub')),
    };
    const scale = setpointScale(setpointReading.object);
    // The value under the pointer while the ring is dragged: shown, written on release.
    const [preview, setPreview] = useState<number | undefined>(undefined);
    const shown = preview ?? reported;

    const noticeKey = setpointNoticeKey(zone);

    // The set-point in the theme's h3; a place that sizes it by its box passes the font size.
    const setpointAt = (fontSize?: number): ReactElement => (
        <Typography
            variant="h3"
            component="span"
            data-heating-setpoint=""
            sx={{
                whiteSpace: 'nowrap',
                ...(fontSize === undefined ? {} : { fontSize: `${fontSize}px`, lineHeight: SETPOINT_FIT.lineHeight }),
            }}
        >
            {shown === undefined ? NO_VALUE : formatReading(shown, 'temperature', lang, unit)}
        </Typography>
    );
    const setpoint = setpointAt();

    const actualText = actualTemperatureText(zone, lang);
    const actual = actualText === undefined ? null : <ActualTemperature text={actualText} />;
    const readings = thermostatReadings(zone, lang);

    // The Boost remaining time counts on between two reports: every second while it shows.
    const [counting, setCounting] = useState(false);
    const now = useClock(counting);
    const status = thermostatStatus(zone, { now, lang });
    if (status.counting !== counting) {
        setCounting(status.counting);
    }
    const reducedMotion = useReducedMotion();
    const message = status.hint?.message ? status.hint : undefined;

    // An unreachable device is drawn dimmed and stays operable (no pointer or focus change).
    const dimmed = (content: ReactNode): ReactNode => (
        <Box
            data-heating-dimmed={status.unreachable ? '' : undefined}
            sx={{
                display: 'contents',
                '& > *': {
                    opacity: status.unreachable ? DIMMED_OPACITY : 1,
                    transition: reducedMotion ? 'none' : 'opacity 0.3s',
                },
            }}
        >
            {content}
        </Box>
    );

    // ± and the ring step the reported set-point; off until it has reported, absent while not writable.
    const step = (direction: 'down' | 'up'): void => {
        if (reported === undefined) {
            return;
        }
        const next = direction === 'up' ? stepUp(reported, scale) : stepDown(reported, scale);
        if (next !== reported) {
            setpointWrite.write(next);
        }
    };
    const commit = (next: number): void => {
        if (next !== reported) {
            setpointWrite.write(next, { immediate: true });
        }
    };
    const stepButton = (direction: 'down' | 'up', size: number): ReactNode =>
        setpointWrite.writable ? (
            <StepButton
                direction={direction}
                size={size}
                disabled={
                    reported === undefined || (direction === 'up' ? reported >= scale.max : reported <= scale.min)
                }
                onClick={() => step(direction)}
            />
        ) : null;

    // The pills of Groß: absolute values, also while the set-point has not reported yet.
    const pills: Pill[] = [];
    if (setpointWrite.writable) {
        for (const key of ['absenk', 'komfort'] as const) {
            // A widget value, unnumbered like its declaration (`entryKey`): only the binding is per entry.
            const target = numberOf(widgetData[key]);
            if (target !== undefined) {
                pills.push({
                    key,
                    label: translate(PILL_LABELS[key]),
                    detail: formatReading(target, 'temperature', lang, unit),
                    active: reported === target,
                    onClick: () => setpointWrite.write(target, { immediate: true }),
                });
            }
        }
    }
    const off = thermostatOff(zone);
    const offTarget = off?.kind === 'mode' ? off.field : 'soll';
    if (off && zone.meaning(offTarget).writable) {
        const writeOff = off.kind === 'mode' ? modeWrites[off.field] : setpointWrite.write;
        pills.push({
            key: 'aus',
            label: translate('heating_neutral_aus'),
            active: status.off,
            onClick: () => writeOff(off.value, { immediate: true }),
        });
    }

    // The operating-mode segment: Auto, Manuell, Boost; the running Urlaub in a row of its own.
    const modePills: Pill[] = thermostatModeActions(zone, status).map(action => {
        const { write } = action;
        return {
            key: action.key,
            label: translate(NEUTRAL_LABELS[action.key]),
            ...(action.end === undefined
                ? {}
                : { detail: translate('heating_pill_bis', formatUntil(action.end, lang)) }),
            active: action.active,
            ...(write ? { onClick: () => modeWrites[write.field](write.value, { immediate: true }) } : {}),
        };
    });
    const holidayPills = modePills.filter(pill => pill.key === 'urlaub');
    const segmentPills = modePills.filter(pill => pill.key !== 'urlaub');
    const modes =
        modePills.length > 0 ? (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <PillRow
                    pills={segmentPills}
                    label={translate('heating_betriebsart')}
                />
                <PillRow pills={holidayPills} />
            </Box>
        ) : null;

    const dial = (arrangement: 'gross' | 'mittel', box: MeasuredBox): ReactNode => (
        <SetpointDial
            size={thermostatDialSize(arrangement, box)}
            scale={scale}
            value={shown}
            disabled={reported === undefined}
            cool={status.chip?.tone === 'kühl'}
            onPreview={setPreview}
            onCommit={commit}
            onStep={step}
            buttons={
                setpointWrite.writable ? (
                    <>
                        {stepButton('down', STEP_BUTTON.flat)}
                        {stepButton('up', STEP_BUTTON.flat)}
                    </>
                ) : null
            }
        >
            {setpointAt(thermostatDialFont(thermostatDialSize(arrangement, box)))}
            {actual}
        </SetpointDial>
    );

    const head = (arrangement: ThermostatArrangement, form: KartenkopfForm): ReactNode => (
        <Kartenkopf
            form={form}
            name={name}
            chips={status.chip ? [status.chip] : []}
            // The full arrangement: the fixed type symbol and the Unterzeile (ADR-0123 Nr. 1, 7).
            {...(arrangement === 'gross'
                ? { symbol: <ThermostatOutlined sx={{ fontSize: 22 }} />, secondLine: subLine }
                : {})}
        />
    );

    /** The hint place: Groß always, Mittel only for a Meldung, Einfach a Meldung or the actual temperature. */
    const hintFor = (arrangement: ThermostatArrangement): ReactNode => {
        switch (arrangement) {
            case 'gross':
                return status.hint ? <HintLine hint={status.hint} /> : null;
            case 'mittel':
                return message ? <HintLine hint={message} /> : null;
            default:
                return message ? (
                    <HintLine
                        hint={message}
                        align={arrangement === 'kompakt' ? 'center' : 'start'}
                    />
                ) : (
                    actual
                );
        }
    };

    const partsFor = (arrangement: ThermostatArrangement | 'mini', box: MeasuredBox): ThermostatParts => ({
        head: form => (arrangement === 'mini' ? null : head(arrangement, form)),
        dial: arrangement === 'gross' || arrangement === 'mittel' ? dimmed(dial(arrangement, box)) : null,
        setpoint: dimmed(
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1.5 }}>
                {stepButton('down', STEP_BUTTON.flat)}
                {/* Quer keeps the h3; Kompakt sizes the set-point to its row beside ±. */}
                {arrangement === 'kompakt'
                    ? setpointAt(thermostatSetpointFont('kompakt', box, setpointWrite.writable))
                    : setpoint}
                {stepButton('up', STEP_BUTTON.flat)}
            </Box>,
        ),
        pills: arrangement === 'gross' ? <PillRow pills={pills} /> : null,
        modes: arrangement === 'gross' || arrangement === 'quer' ? modes : null,
        readings: readings.length ? <ReadingsBar readings={readings} /> : null,
        hint: arrangement === 'mini' ? null : hintFor(arrangement),
        tile: {
            // The tile sizes the set-point to the room ± and the footer line leave.
            main: dimmed(
                setpointAt(thermostatSetpointFont('tile', box, thermostatTile(box, setpointWrite.writable).buttons)),
            ),
            decrease: stepButton('down', STEP_BUTTON.tile),
            increase: stepButton('up', STEP_BUTTON.tile),
            line: message ? (
                <HintLine
                    hint={message}
                    size="tile"
                    align="start"
                />
            ) : (
                actual
            ),
        },
    });

    return (
        <CollectionBase
            data={data}
            notice={noticeKey === undefined ? undefined : translate(noticeKey)}
            cornerIcon={false}
        >
            <SizeStages
                rule={thermostatStage}
                data={widgetData}
                ansicht={widgetData.ansicht}
                renderStage={(stage, box) => {
                    const arrangement = thermostatArrangement(stage, box);
                    return (
                        <ThermostatStage
                            arrangement={arrangement}
                            querModes={thermostatQuerModes(box)}
                            parts={partsFor(arrangement, box)}
                        />
                    );
                }}
                renderTile={box => thermostatTileContent(partsFor('mini', box), box)}
                name={name}
                typeName={translate('heating_thermostat_collection_widget')}
                status={status.tile}
                fullSize={FULL_SIZE}
            />
        </CollectionBase>
    );
}

export default HeatingThermostatCollection;
