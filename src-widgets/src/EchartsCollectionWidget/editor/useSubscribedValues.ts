/**
 * Subscribe to ioBroker state changes for a live, updating value map.
 *
 * @module EchartsCollectionWidget/editor/useSubscribedValues
 * @remarks
 * The editor preview is detached from the vis-2 widget tree, so it cannot read
 * `context.values`. This hook subscribes directly via the drilled socket
 * (`subscribeStateAsync` / `getState` / `unsubscribeState`) and returns a `{ oid: val }` map
 * that updates live while the modal is open. On unmount it unsubscribes. Used by the editor
 * preview's adapter (gauge / radar / json-current / cartesian+pie-live) AND by the runtime
 * body for the marking bound OIDs (ADR-0062 — vis-2's schema-driven subscription only covers
 * oidN, so bounds need their own socket subscription).
 */
import { useEffect, useState } from 'react';
import type { Connection } from '@iobroker/adapter-react-v5';

export type SubscribedValues = Record<string, ioBroker.StateValue | undefined>;

/**
 * @param oids - OIDs to watch (falsy filtered; de-duplicated). An empty list yields `{}`.
 * @param socket - The Connection drilled into the editor.
 */
export function useSubscribedValues(oids: string[], socket: Connection): SubscribedValues {
    const [values, setValues] = useState<SubscribedValues>({});
    // Stable dependency: sorted, unique, newline-joined.
    const key = Array.from(new Set(oids.filter(Boolean)))
        .sort()
        .join('\n');

    useEffect(() => {
        const list = key ? key.split('\n') : [];
        // Drop values for OIDs no longer in the list, so the map stays in sync with `list` even
        // if the getState seed below rejects (the `.catch` would otherwise leave stale entries).
        setValues(prev => {
            const next: SubscribedValues = {};
            for (const id of list) {
                next[id] = prev[id];
            }
            return next;
        });
        if (!list.length) {
            return;
        }
        let active = true;
        const cb: ioBroker.StateChangeHandler = (id, state) => {
            if (!active) {
                return;
            }
            setValues(prev => (prev[id] === state?.val ? prev : { ...prev, [id]: state?.val }));
        };
        // Seed with the current values, then subscribe to live changes.
        Promise.all(list.map(id => socket.getState(id).then(st => [id, st?.val] as const)))
            .then(init => {
                if (active) {
                    setValues(Object.fromEntries(init) as SubscribedValues);
                }
            })
            .catch(() => {
                /* ignore — subscription will still deliver updates */
            });
        void socket.subscribeStateAsync(list, cb);
        return () => {
            active = false;
            socket.unsubscribeState(list, cb);
        };
    }, [key, socket]);

    return values;
}
