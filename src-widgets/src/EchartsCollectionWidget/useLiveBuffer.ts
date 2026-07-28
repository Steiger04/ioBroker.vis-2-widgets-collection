/**
 * Rolling buffer of recent live values per OID (cartesian/pie live mode).
 *
 * @module EchartsCollectionWidget/useLiveBuffer
 * @remarks
 * Appends a `[now, value]` point whenever a subscribed value changes (deduped against the last
 * point), capped to {@link LIVE_MAX_POINTS}. Shared by the live widget body and the editor
 * preview so both accumulate the same way.
 */
import { useEffect, useState } from 'react';

import type { SeriesPoint } from './historyLogic';

/** Maximum points retained per OID in the live rolling buffer. */
export const LIVE_MAX_POINTS = 300;

type ValuesMap = Record<string, ioBroker.StateValue | undefined>;

const toNum = (raw: unknown): number | null => (typeof raw === 'number' && Number.isFinite(raw) ? raw : null);

/**
 * @param entries - OIDs to track (`{ oid }`).
 * @param values - Current subscribed values map (`oid → val`).
 * @param enabled - Whether to accumulate (only in live mode).
 */
export function useLiveBuffer(
    entries: { oid: string }[],
    values: ValuesMap,
    enabled: boolean,
): Record<string, SeriesPoint[]> {
    const [buffers, setBuffers] = useState<Record<string, SeriesPoint[]>>({});
    useEffect(() => {
        if (!enabled) {
            return;
        }
        const now = Date.now();
        setBuffers(prev => {
            let changed = false;
            const next = { ...prev };
            for (const e of entries) {
                const num = toNum(values[`${e.oid}.val`] ?? values[e.oid]);
                const buf = next[e.oid] ?? [];
                const last = buf[buf.length - 1];
                if (!last || last[1] !== num) {
                    const updated = [...buf, [now, num] as SeriesPoint];
                    if (updated.length > LIVE_MAX_POINTS) {
                        updated.shift();
                    }
                    next[e.oid] = updated;
                    changed = true;
                }
            }
            return changed ? next : prev;
        });
    }, [enabled, entries, values]);
    return buffers;
}
