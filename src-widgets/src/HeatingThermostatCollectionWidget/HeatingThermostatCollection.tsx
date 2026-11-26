/**
 * Raumthermostat renderer.
 *
 * @module HeatingThermostatCollectionWidget/HeatingThermostatCollection
 * @remarks
 * The body inside the Collection frame (ADR-0123): the frame draws the card and its general lines
 * `header` / `footer` without a main OID (`useData('')`, as Light2), no corner icon. Without a usable
 * set-point the frame shows the type's own notice (`lib/heating/setpointNotice`), never its OID
 * hint. Otherwise a provisional content shows the set-point; the size stages, the Kartenkopf and
 * the controls replace it.
 */
import { Box, Typography } from '@mui/material';
import { useContext } from 'react';

import CollectionBase from '../components/CollectionBase';
import { CollectionContext } from '../components/CollectionProvider';
import useData from '../hooks/useData';
import useValueState from '../hooks/useValueState';
import { meaningKeys } from '../lib/heating/meaningCatalog';
import { setpointNoticeKey } from '../lib/heating/setpointNotice';
import { translate } from '../lib/translate';
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

/**
 * The Raumthermostat in its frame.
 *
 * @param props - Component props.
 * @param props.entry - The entry number of the binding; none for the unnumbered binding.
 * @returns The frame with the notice or the set-point.
 */
function HeatingThermostatCollection({ entry }: HeatingThermostatCollectionProps): React.ReactElement {
    const {
        widget: { data: rxData },
    } = useContext(CollectionContext) as HeatingThermostatCollectionContextProps;

    // Header and footer without a main OID: the main Bedeutung is no `oid` (ADR-0123 Nr. 5).
    const { data } = useData('');

    const setpoint = meaningKeys('soll', entry);
    const { value } = useValueState(setpoint.field);
    const unit = (rxData as WidgetData)[setpoint.object]?.unit as string | undefined;

    const noticeKey = setpointNoticeKey(rxData as WidgetData, entry);

    return (
        <CollectionBase
            data={data}
            notice={noticeKey === undefined ? undefined : translate(noticeKey)}
            cornerIcon={false}
        >
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography
                    variant="h3"
                    component="span"
                    data-heating-setpoint=""
                >
                    {typeof value === 'number' ? `${value}${unit ? ` ${unit}` : ''}` : '–'}
                </Typography>
            </Box>
        </CollectionBase>
    );
}

export default HeatingThermostatCollection;
