/**
 * Subscribe to ioBroker state changes for a live, updating value map.
 *
 * @module EchartsCollectionWidget/useSubscribedValues
 * @remarks
 * The editor preview is detached from the vis-2 widget tree, so it cannot read
 * `context.values`. This hook subscribes directly via the drilled socket
 * (`subscribeStateAsync` / `getState` / `unsubscribeState`) and returns a `{ oid: val }` map
 * that updates live while the modal is open. On unmount it unsubscribes. Used by the editor
 * preview's adapter (gauge / radar / json-current / cartesian+pie-live) AND by the runtime
 * body for the marking bound OIDs (ADR-0062 — vis-2's schema-driven subscription only covers
 * oidN, so bounds need their own socket subscription). It lives on the runtime side (ADR-0083
 * import direction: the body never imports from `editor/`); `editor/useSubscribedValues`
 * re-exports it for the editor modules (ADR-0103 K4).
 */
import { useEffect, useState } from 'react';
import type { Connection } from '@iobroker/gui-components';

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

    // Drop values for OIDs no longer in the list while rendering, so the map stays in sync with
    // the list even if the getState seed below rejects (the `.catch` would otherwise leave stale
    // entries). Unset on mount: the first render lists every OID, still without a value.
    const [prunedFor, setPrunedFor] = useState<string | undefined>(undefined);
    if (prunedFor !== key) {
        setPrunedFor(key);
        const kept = key ? key.split('\n') : [];
        setValues(prev => {
            const next: SubscribedValues = {};
            for (const id of kept) {
                next[id] = prev[id];
            }
            return next;
        });
    }

    useEffect(() => {
        const list = key ? key.split('\n') : [];
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
                    setValues(Object.fromEntries<ioBroker.StateValue | undefined>(init));
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
