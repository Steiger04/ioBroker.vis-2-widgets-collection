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
 * (`lib/heating/meaningReading`): „–“ while bound without a value or not yet reported.
 *
 * Operating (stage-1 spec „Bedienen“): the ring of the dial (Voll) and ± (dial, big set-point, tile)
 * step the set-point on its scale (`lib/heating/setpointScale`); they are off while the set-point
 * has not reported yet, and absent while it is not writable. A drag shows its value and writes once
 * on release. The pills of Groß (`lib/heating/PillRow`) write absolute values even while the
 * set-point has not reported: Absenk and Komfort the widget's temperatures into the set-point, Aus
 * the way `thermostatOff` names. Every action writes exactly one state through the write chain
 * (`lib/heating/useMeaningWrite`), never into a target that is not writable; a pill exists only for
 * a writable target. The operating-mode segment (`thermostatModes`: Auto, Manuell, Boost, and the
 * Urlaub pill with its end in a row of its own while Urlaub runs) stands in Groß and in Quer from
 * sufficient height.
 */
import ThermostatOutlined from '@mui/icons-material/ThermostatOutlined';
import { Box, Typography } from '@mui/material';
import { useContext, useState, type ReactElement, type ReactNode } from 'react';

import CollectionBase from '../components/CollectionBase';
import { CollectionContext } from '../components/CollectionProvider';
import useData from '../hooks/useData';
import { useClock } from '../lib/heating/clock';
import Kartenkopf, { type KartenkopfForm } from '../lib/heating/Kartenkopf';
import { meaningKeys } from '../lib/heating/meaningCatalog';
import { readMeaning } from '../lib/heating/meaningReading';
import { formatReading, formatUntil, NO_VALUE } from '../lib/heating/readingFormat';
import { useReducedMotion } from '../lib/heating/motion';
import PillRow, { type Pill } from '../lib/heating/PillRow';
import { setpointScale, stepDown, stepUp } from '../lib/heating/setpointScale';
import SizeStages from '../lib/heating/SizeStages';
import type { MeasuredBox } from '../lib/heating/stageRule';
import { useMeaningWrite } from '../lib/heating/useMeaningWrite';
import { setpointNoticeKey } from '../lib/heating/setpointNotice';
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
    thermostatDialSize,
    thermostatQuerModes,
    thermostatStage,
    type ThermostatArrangement,
} from './thermostatStages';
import type { HeatingThermostatCollectionContextProps } from '../types';

import type { WidgetData } from '@iobroker/types-vis-2';

/** Props of {@link HeatingThermostatCollection}. */
export interface HeatingThermostatCollectionProps {
    /**
     * The entry number whose binding the content reads (`soll3`, `soll3Object`): the seam for the
     * house types' list entries (ADR-0121); none for the Raumthermostat itself.
     */
    entry?: number;
}

/** The Voll design size of the content (the Mini-Dialog's size, ADR-0122 Nr. 7). */
const FULL_SIZE = { width: 420, height: 700 } as const;

/** The opacity of an unreachable device's set-point and dial (the design's dimming). */
const DIMMED_OPACITY = 0.4;

/** The ± edge length beside the big set-point and in the tile (the design's). */
const STEP_BUTTON = { flat: 52, tile: 44 } as const;

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

    const setpointKeys = meaningKeys('soll', entry);
    const unit = widgetData[setpointKeys.object]?.unit as string | undefined;
    const name = widgetData[`bezeichnung${entry ?? ''}`] as string | undefined;
    const subLine = widgetData[`unterzeile${entry ?? ''}`] as string | undefined;
    // The set-point shows only once reported, never the device's substitute value (ADR-0119).
    const setpointReading = readMeaning(widgetData, values, 'soll', entry);
    const reported = setpointReading.kind === 'reported' ? numberOf(setpointReading.value) : undefined;

    // One write per Bedeutung that an action of the content writes (ADR-0120: one state per action).
    const setpointWrite = useMeaningWrite('soll', entry);
    const modeWrites: Record<ModeWriteField, ReturnType<typeof useMeaningWrite>> = {
        betriebsart: useMeaningWrite('betriebsart', entry),
        betriebsartSetzen: useMeaningWrite('betriebsartSetzen', entry),
        boost: useMeaningWrite('boost', entry),
        boostBeenden: useMeaningWrite('boostBeenden', entry),
        urlaub: useMeaningWrite('urlaub', entry),
    };
    const scale = setpointScale(widgetData[setpointKeys.object]);
    // The value under the pointer while the ring is dragged: shown, written on release.
    const [preview, setPreview] = useState<number | undefined>(undefined);
    const shown = preview ?? reported;

    const noticeKey = setpointNoticeKey(widgetData, entry);

    const setpoint = (
        <Typography
            variant="h3"
            component="span"
            data-heating-setpoint=""
            sx={{ whiteSpace: 'nowrap' }}
        >
            {shown === undefined ? NO_VALUE : formatReading(shown, 'temperature', lang, unit)}
        </Typography>
    );

    const actualText = actualTemperatureText(widgetData, values, lang, entry);
    const actual = actualText === undefined ? null : <ActualTemperature text={actualText} />;
    const readings = thermostatReadings(widgetData, values, lang, entry);

    // The Boost remaining time counts on between two reports: every second while it shows.
    const [counting, setCounting] = useState(false);
    const now = useClock(counting);
    const status = thermostatStatus(widgetData, values, { now, lang, entry });
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
            const target = numberOf(widgetData[`${key}${entry ?? ''}`]);
            if (target !== undefined) {
                pills.push({
                    key,
                    label: translate(`heating_pill_${key}`),
                    detail: formatReading(target, 'temperature', lang, unit),
                    active: reported === target,
                    onClick: () => setpointWrite.write(target, { immediate: true }),
                });
            }
        }
    }
    const off = thermostatOff(widgetData, entry);
    const offWrite = off?.kind === 'mode' ? modeWrites[off.field] : setpointWrite;
    if (off && offWrite.writable) {
        pills.push({
            key: 'aus',
            label: translate('heating_neutral_aus'),
            active: status.off,
            onClick: () => offWrite.write(off.value, { immediate: true }),
        });
    }

    // The operating-mode segment: Auto, Manuell, Boost; the running Urlaub in a row of its own.
    const modePills: Pill[] = thermostatModeActions(widgetData, status, field => modeWrites[field].writable, entry).map(
        action => {
            const { write } = action;
            return {
                key: action.key,
                label: translate(`heating_neutral_${action.key}`),
                ...(action.end === undefined
                    ? {}
                    : { detail: translate('heating_pill_bis', formatUntil(action.end, lang)) }),
                active: action.active,
                ...(write ? { onClick: () => modeWrites[write.field].write(write.value, { immediate: true }) } : {}),
            };
        },
    );
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
            {setpoint}
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
                {setpoint}
                {stepButton('up', STEP_BUTTON.flat)}
            </Box>,
        ),
        pills: arrangement === 'gross' ? <PillRow pills={pills} /> : null,
        modes: arrangement === 'gross' || arrangement === 'quer' ? modes : null,
        readings: readings.length ? <ReadingsBar readings={readings} /> : null,
        hint: arrangement === 'mini' ? null : hintFor(arrangement),
        tile: {
            main: dimmed(setpoint),
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
