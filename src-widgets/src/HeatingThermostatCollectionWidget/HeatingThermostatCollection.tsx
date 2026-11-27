/**
 * Raumthermostat renderer.
 *
 * @module HeatingThermostatCollectionWidget/HeatingThermostatCollection
 * @remarks
 * The body inside the Collection frame (ADR-0123): the frame draws the card and its general lines
 * `header` / `footer` without a main OID (`useData('')`, as Light2), no corner icon. Without a usable
 * set-point the frame shows the type's own notice (`lib/heating/setpointNotice`), never its OID
 * hint. Otherwise it shows the Raumthermostat-Inhalt (`ThermostatContent`, ADR-0122 Nachtrag K1),
 * which a house type also shows for one of its entries in the Mini-Dialog, without this frame.
 */
import { useContext, type ReactElement } from 'react';

import CollectionBase from '../components/CollectionBase';
import { CollectionContext } from '../components/CollectionProvider';
import useData from '../hooks/useData';
import { setpointNoticeKey } from '../lib/heating/setpointNotice';
import { readZone } from '../lib/heating/zoneReading';
import { translate } from '../lib/translate';
import ThermostatContent, { type ThermostatContentProps } from './ThermostatContent';
import type { HeatingThermostatCollectionContextProps } from '../types';

import type { WidgetData } from '@iobroker/types-vis-2';

/** Props of {@link HeatingThermostatCollection}: the content's entry number. */
export type HeatingThermostatCollectionProps = ThermostatContentProps;

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
    } = useContext(CollectionContext) as HeatingThermostatCollectionContextProps;

    // Header and footer without a main OID: the main Bedeutung is no `oid` (ADR-0123 Nr. 5).
    const { data } = useData('');
    const noticeKey = setpointNoticeKey(readZone(rxData as WidgetData, values, entry));

    return (
        <CollectionBase
            data={data}
            notice={noticeKey === undefined ? undefined : translate(noticeKey)}
            cornerIcon={false}
        >
            <ThermostatContent entry={entry} />
        </CollectionBase>
    );
}

export default HeatingThermostatCollection;
