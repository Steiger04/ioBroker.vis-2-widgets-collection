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
 * places stay empty until their parts are built. Filled so far: the set-point in the dial and big
 * set-point places, the actual temperature below it in the dial, in the Einfach hint place and in
 * the tile's footer, and the readings bar of Groß (`ThermostatReadings`). Every value reads
 * honestly (`lib/heating/meaningReading`): „–“ while bound without a value or not yet reported.
 */
import { Box, Typography } from '@mui/material';
import { useContext, type ReactElement } from 'react';

import CollectionBase from '../components/CollectionBase';
import { CollectionContext } from '../components/CollectionProvider';
import useData from '../hooks/useData';
import useValueState from '../hooks/useValueState';
import { meaningKeys } from '../lib/heating/meaningCatalog';
import { readMeaning } from '../lib/heating/meaningReading';
import { formatReading, NO_VALUE } from '../lib/heating/readingFormat';
import SizeStages, { type TileStatus } from '../lib/heating/SizeStages';
import { setpointNoticeKey } from '../lib/heating/setpointNotice';
import { translate } from '../lib/translate';
import ThermostatStage, { thermostatTileContent, type ThermostatParts } from './ThermostatStage';
import { ActualTemperature, actualTemperatureText, ReadingsBar, thermostatReadings } from './ThermostatReadings';
import {
    thermostatArrangement,
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

/** The status until the Kartenkopf's status logic reports it: neutral, no Meldung. */
const NEUTRAL_STATUS: TileStatus = { tone: 'neutral' };

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
    const { value } = useValueState(setpointKeys.field);
    const unit = widgetData[setpointKeys.object]?.unit as string | undefined;
    const name = widgetData[`bezeichnung${entry ?? ''}`] as string | undefined;
    // The set-point shows only once reported, never the device's substitute value (ADR-0119).
    const setpointReported = readMeaning(widgetData, values, 'soll', entry).kind === 'reported';

    const noticeKey = setpointNoticeKey(widgetData, entry);

    const setpoint = (
        <Typography
            variant="h3"
            component="span"
            data-heating-setpoint=""
            sx={{ whiteSpace: 'nowrap' }}
        >
            {setpointReported && typeof value === 'number' ? formatReading(value, 'temperature', lang, unit) : NO_VALUE}
        </Typography>
    );

    const actualText = actualTemperatureText(widgetData, values, lang, entry);
    const actual = actualText === undefined ? null : <ActualTemperature text={actualText} />;
    const readings = thermostatReadings(widgetData, values, lang, entry);

    // Until the Kartenkopf's hint line: Einfach shows the actual temperature in its hint place, Voll in the dial.
    const partsFor = (arrangement: ThermostatArrangement | 'mini'): ThermostatParts => ({
        head: () => null,
        dial: (
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                {setpoint}
                {actual}
            </Box>
        ),
        setpoint,
        pills: null,
        modes: null,
        readings: readings.length ? <ReadingsBar readings={readings} /> : null,
        hint: arrangement === 'quer' || arrangement === 'kompakt' ? actual : null,
        tile: { main: setpoint, decrease: null, increase: null, line: actual },
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
                            parts={partsFor(arrangement)}
                        />
                    );
                }}
                renderTile={box => thermostatTileContent(partsFor('mini'), box)}
                name={name}
                typeName={translate('heating_thermostat_collection_widget')}
                status={NEUTRAL_STATUS}
                fullSize={FULL_SIZE}
            />
        </CollectionBase>
    );
}

export default HeatingThermostatCollection;
