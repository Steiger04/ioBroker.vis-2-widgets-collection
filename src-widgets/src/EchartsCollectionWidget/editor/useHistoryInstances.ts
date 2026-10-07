/**
 * List ioBroker history-adapter instances for the editor's instance dropdown.
 *
 * @module EchartsCollectionWidget/editor/useHistoryInstances
 * @remarks
 * Mirrors the filter vis-2 uses for its native `'history'` field type: adapters whose
 * `common.getHistory` is truthy (history / sql / influxdb / …). Lets the user pin a concrete
 * instance, which is the standard fix when `getHistory` hangs without `instance` because the
 * server cannot auto-route.
 */
import { useEffect, useState } from 'react';
import type { Connection } from '@iobroker/adapter-react-v5';

/** The hook's sight — the list plus its load state (an empty list before `loaded` is LOADING, not „none installed"). */
export interface HistoryInstancesSight {
    /** Sorted adapter-instance IDs without the `system.adapter.` prefix (e.g. `sql.0`). */
    instances: string[];
    /** True once the socket answered (or failed) — gates the „no adapter" hint. */
    loaded: boolean;
}

/**
 * @param socket - The Connection drilled into the editor.
 * @returns The {@link HistoryInstancesSight} — the list plus whether it has loaded.
 */
export function useHistoryInstances(socket: Connection): HistoryInstancesSight {
    const [instances, setInstances] = useState<string[]>([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        let active = true;
        socket
            .getAdapterInstances('')
            .then(all => {
                if (!active) {
                    return;
                }
                const list = (all as { _id: string; common?: { getHistory?: boolean } }[])
                    .filter(o => o.common?.getHistory)
                    .map(o => o._id.replace('system.adapter.', ''))
                    .sort((a, b) => a.localeCompare(b));
                setInstances(list);
                setLoaded(true);
            })
            .catch(() => {
                /* leave empty — the Auto option still works; count as answered (no hint flash) */
                if (active) {
                    setLoaded(true);
                }
            });
        return () => {
            active = false;
        };
    }, [socket]);

    return { instances, loaded };
}
