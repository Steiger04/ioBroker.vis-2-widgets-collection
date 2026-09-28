/**
 * Resolve the series NAMES a JSON-mode payload currently defines (ADR-0011).
 *
 * @module EchartsCollectionWidget/editor/useJsonSeriesNames
 * @remarks
 * In json mode the payload owns series identity (count + data); the Series section renders one
 * editable card per payload series, keyed by name. This hook subscribes the single `jsonOid` and
 * parses its value via {@link parseJsonState}, returning the live list of series names plus any
 * parse error — so the cards track the payload as it changes. Disabled (returns `[]`) when the
 * family/mode does not use the json pipeline (gauge / radar / non-json).
 */
import { useMemo } from 'react';
import type { Connection } from '@iobroker/adapter-react-v5';

import { parseJsonState } from '../optionBuilder';
import { useSubscribedValues } from './useSubscribedValues';

export interface JsonSeriesPreview {
    /** Payload series names, in payload order. Drives the Series-section card list. */
    names: string[];
    /** Parse error surfaced instead of a silent blank (ADR-0011). */
    error?: string;
}

/**
 * @param jsonOid - The bound JSON-state OID (`state.jsonOid`).
 * @param enabled - True only for cartesian/pie + json mode.
 * @param socket - The Connection drilled into the editor.
 */
export function useJsonSeriesNames(jsonOid: string, enabled: boolean, socket: Connection): JsonSeriesPreview {
    const oids = useMemo(() => (enabled && jsonOid ? [jsonOid] : []), [enabled, jsonOid]);
    const values = useSubscribedValues(oids, socket);
    return useMemo(() => {
        if (!enabled || !jsonOid) {
            return { names: [] };
        }
        const raw = values[jsonOid];
        const parsed = parseJsonState(raw === null || raw === undefined ? '' : String(raw));
        return { names: parsed.series.map(s => s.name), error: parsed.error };
    }, [enabled, jsonOid, values]);
}
