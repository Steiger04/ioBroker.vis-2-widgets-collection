/**
 * The Raumthermostat-Inhalt: the Raumthermostat without the Collection frame (ADR-0122 Nr. 10,
 * Nachtrag K1).
 *
 * @module HeatingThermostatCollectionWidget/ThermostatContent
 * @remarks
 * Takes the entry number and renders nothing of the frame: the Raumthermostat widget shows it inside
 * its frame, a house type shows it for one of its entries in the Mini-Dialog
 * (`lib/heating/MiniDialog`). The size-stage module (`lib/heating/SizeStages`, ADR-0122) decides by
 * the Content-Box it finds — the frame's, or the dialog's own box, where the module's dialog
 * context gives the dialog's stage (never below Einfach, no dialog in the dialog): the type's rule
 * (`thermostatStages`) gives Voll, Einfach or Mini, the plan of the box (`thermostatPlan`) the
 * arrangement and its sizes; the content hands over all of its parts alike and the arrangements
 * (`ThermostatStage`) alone place them, Mini is the module's tile filled with the set-point. The parts: the Kartenkopf
 * (`lib/heating/Kartenkopf`: symbol, Bezeichnung, Unterzeile and status chip in Groß; name and chip
 * in Mittel and Kompakt; stacked in Quer), the set-point in the dial and big set-point places, the
 * actual temperature below it in the dial, the hint line (`HintLine`: always in Groß, only for a
 * Meldung in Mittel; in Quer, Kompakt and the tile's footer a Meldung replaces the actual
 * temperature) and the readings bar of Groß (`ThermostatReadings`). The status (`thermostatStatus`)
 * also names the tile's sign; an unreachable device is drawn dimmed and stays operable. Every value
 * reads honestly through the Heizzonen-Lesung (`lib/heating/zoneReading`), bound once to the entry
 * number: „–" while bound without a value or not yet reported.
 *
 * Operating (stage-1 spec „Bedienen"): what each key writes where, and whether it may, is the
 * action module's answer (`thermostatActions`): ± (dial, big set-point, tile) and the ring of the
 * dial (Voll) step the set-point on its scale, the pills of Groß (`lib/heating/PillRow`) are
 * Absenk, Komfort and Aus, the operating-mode segment Auto, Manuell, Boost and the running Urlaub
 * (with its end, in a row of its own). The content only draws them and hangs the write of each
 * action's target on it (`useThermostatWrites`): exactly one state per action through the write
 * chain (`lib/heating/useMeaningWrite`), never into a target the Heizzonen-Lesung reads as not
 * writable. A drag of the ring shows its value and writes it once on release into its target.
 * The segment stands in Groß and in Quer from sufficient height.
 */
import ThermostatOutlined from '@mui/icons-material/ThermostatOutlined';
import { Box, Typography } from '@mui/material';
import { useContext, useState, type ReactElement, type ReactNode } from 'react';

import { CollectionContext } from '../components/CollectionProvider';
import { useClock } from '../lib/heating/clock';
import Kartenkopf from '../lib/heating/Kartenkopf';
import { headerKeys, NEUTRAL_LABELS } from '../lib/heating/meaningCatalog';
import { formatReading, formatUntil, NO_VALUE } from '../lib/heating/readingFormat';
import { useReducedMotion } from '../lib/heating/motion';
import PillRow, { type Pill } from '../lib/heating/PillRow';
import { setpointScale } from '../lib/heating/setpointScale';
import SizeStages from '../lib/heating/SizeStages';
import { readZone } from '../lib/heating/zoneReading';
import { translate } from '../lib/translate';
import ThermostatStage, { thermostatTileContent, type ThermostatParts } from './ThermostatStage';
import { ActualTemperature, actualTemperatureText, ReadingsBar, thermostatReadings } from './ThermostatReadings';
import HintLine from './HintLine';
import { SetpointDial, StepButton } from './SetpointControls';
import { thermostatActions, type StepKey, type ThermostatAction } from './thermostatActions';
import { thermostatStatus } from './thermostatStatus';
import { useThermostatWrites } from './useThermostatWrites';
import { thermostatPlan, thermostatStage, SETPOINT_FIT } from './thermostatStages';
import type { HeatingThermostatCollectionContextProps } from '../types';

import type { WidgetData } from '@iobroker/types-vis-2';

/** Props of {@link ThermostatContent}. */
export interface ThermostatContentProps {
    /**
     * The entry number whose binding the content reads (`soll3`, `soll3Object`, `bezeichnung3`): the
     * seam for the house types' list entries (ADR-0121); none for the Raumthermostat itself. The
     * widget values (`komfort`, `absenk`, `ansicht`) stay unnumbered.
     */
    entry?: number;
}

/** The label keys of the pills of Groß (literal keys). */
const PILL_LABELS = {
    absenk: 'heating_pill_absenk',
    komfort: 'heating_pill_komfort',
    aus: 'heating_neutral_aus',
} as const;

/** The Voll design size of the content (the Mini-Dialog's size, ADR-0122 Nr. 7). */
const FULL_SIZE = { width: 420, height: 700 } as const;

/** The opacity of an unreachable device's set-point and dial (the design's dimming). */
const DIMMED_OPACITY = 0.4;

/** The ± edge length beside the big set-point and in the tile (the design's). */
const STEP_BUTTON = { flat: SETPOINT_FIT.stepFlat, tile: SETPOINT_FIT.stepTile } as const;

/**
 * The Raumthermostat-Inhalt of one Heizzone.
 *
 * @param props - Component props.
 * @param props.entry - The entry number of the binding; none for the unnumbered binding.
 * @returns The content by size stage (empty before the first measurement).
 */
function ThermostatContent({ entry }: ThermostatContentProps): ReactElement {
    const {
        widget: { data: rxData },
        values,
        lang,
    } = useContext(CollectionContext) as HeatingThermostatCollectionContextProps;
    const widgetData = rxData as WidgetData;

    // The zone's data, read once for the entry number (ADR-0121 Nachtrag 2026-11-27).
    const zone = readZone(widgetData, values, entry);
    const setpointReading = zone.meaning('soll');
    const { unit } = setpointReading;
    const header = headerKeys(entry);
    const name = widgetData[header.name] as string | undefined;
    const subLine = widgetData[header.subLine] as string | undefined;
    // The set-point shows only once reported, never the device's substitute value (ADR-0119).
    const reported = setpointReading.number;

    // The write of every Bedeutung an action targets (ADR-0120: one state per action).
    const writes = useThermostatWrites(zone);
    const scale = setpointScale(setpointReading.object);
    // The value under the pointer while the ring is dragged: shown, written on release.
    const [preview, setPreview] = useState<number | undefined>(undefined);
    const shown = preview ?? reported;

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

    // What each key writes where, and whether it may (`thermostatActions`); the content only draws.
    const actions = thermostatActions(zone, status, { komfort: widgetData.komfort, absenk: widgetData.absenk });
    const { steps, ring } = actions;
    /** A discrete tap: one state, past the debounce; nothing for a locked action or one without a value. */
    const tapOf = ({ field, value, locked }: ThermostatAction): (() => void) | undefined =>
        value === undefined || locked ? undefined : () => writes[field](value, { immediate: true });

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

    // ± and the ring step the reported set-point (debounced); a step without a value writes nothing.
    const step = (direction: StepKey): void => {
        const action = steps?.[direction];
        if (action?.value !== undefined) {
            writes[action.field](action.value);
        }
    };
    // The ring's drag writes the value under the pointer on release into its action's target —
    // only a value other than the reported one.
    const commit = (next: number): void => {
        if (ring && !ring.locked && next !== reported) {
            writes[ring.field](next, { immediate: true });
        }
    };
    const stepButton = (direction: StepKey, size: number): ReactNode =>
        steps ? (
            <StepButton
                direction={direction}
                size={size}
                disabled={steps[direction].locked}
                onClick={() => step(direction)}
            />
        ) : null;

    // The pills of Groß (Absenk, Komfort, Aus) and the operating-mode segment.
    const pillOf = (action: ThermostatAction, label: string, detail?: string): Pill => {
        const onClick = tapOf(action);
        return {
            key: action.key,
            label,
            ...(detail === undefined ? {} : { detail }),
            active: action.active,
            ...(onClick ? { onClick } : {}),
        };
    };
    // Absenk and Komfort name the temperature they write; Aus names nothing.
    const pills: Pill[] = actions.pills.map(action =>
        pillOf(
            action,
            translate(PILL_LABELS[action.key]),
            action.key === 'aus' || typeof action.value !== 'number'
                ? undefined
                : formatReading(action.value, 'temperature', lang, unit),
        ),
    );
    const modePills: Pill[] = actions.modes.map(action =>
        pillOf(
            action,
            translate(NEUTRAL_LABELS[action.key]),
            action.end === undefined ? undefined : translate('heating_pill_bis', formatUntil(action.end, lang)),
        ),
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

    // All parts for every arrangement alike: the plan of the box sizes them, the arrangement
    // (`ThermostatStage`) alone decides which part stands where (ADR-0122 Nachtrag K7).
    const parts: ThermostatParts = {
        head: (form, full) => (
            <Kartenkopf
                form={form}
                name={name}
                chips={status.chip ? [status.chip] : []}
                // The full arrangement: the fixed type symbol and the Unterzeile (ADR-0123 Nr. 1, 7).
                {...(full ? { symbol: <ThermostatOutlined sx={{ fontSize: 22 }} />, secondLine: subLine } : {})}
            />
        ),
        dial: ({ size, font }) =>
            dimmed(
                <SetpointDial
                    size={size}
                    scale={scale}
                    value={shown}
                    disabled={!ring || ring.locked}
                    cool={status.chip?.tone === 'kühl'}
                    onPreview={setPreview}
                    onCommit={commit}
                    onStep={step}
                    buttons={
                        steps ? (
                            <>
                                {stepButton('down', STEP_BUTTON.flat)}
                                {stepButton('up', STEP_BUTTON.flat)}
                            </>
                        ) : null
                    }
                >
                    {setpointAt(font)}
                    {actual}
                </SetpointDial>,
            ),
        setpoint: font =>
            dimmed(
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1.5 }}>
                    {stepButton('down', STEP_BUTTON.flat)}
                    {setpointAt(font)}
                    {stepButton('up', STEP_BUTTON.flat)}
                </Box>,
            ),
        pills: <PillRow pills={pills} />,
        modes,
        readings: readings.length ? <ReadingsBar readings={readings} /> : null,
        hint: status.hint ? <HintLine hint={status.hint} /> : null,
        message: look =>
            message ? (
                <HintLine
                    hint={message}
                    {...look}
                />
            ) : null,
        actual,
        tile: {
            main: font => dimmed(setpointAt(font)),
            decrease: stepButton('down', STEP_BUTTON.tile),
            increase: stepButton('up', STEP_BUTTON.tile),
        },
    };
    // The set-point is writable exactly when it has ± (`thermostatActions`).
    const writable = steps !== undefined;

    return (
        <SizeStages
            rule={thermostatStage}
            data={widgetData}
            ansicht={widgetData.ansicht}
            renderStage={(stage, box) => (
                <ThermostatStage
                    plan={thermostatPlan(stage, box, writable)}
                    parts={parts}
                />
            )}
            renderTile={area => thermostatTileContent(parts, thermostatPlan('mini', area, writable).tile)}
            name={name}
            typeName={translate('heating_thermostat_collection_widget')}
            status={status.tile}
            fullSize={FULL_SIZE}
        />
    );
}

export default ThermostatContent;
