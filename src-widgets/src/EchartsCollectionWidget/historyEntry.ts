/**
 * The Verlauf request entry and its value types — a neutral leaf module: the history logic
 * (`historyLogic`, the fetch) and the Erben-Override module (`seriesDataOverrides`, which maps a
 * series onto its entry) both read these types, so neither has to import the other for them.
 *
 * @module EchartsCollectionWidget/historyEntry
 */
import type { EchartsOffsetKey } from '../types/field-definitions/echarts-fields';

export type IgnoreNull = 'keep' | 'forward' | 'zero';

/** A series' authored raw-value mapping — the intake stage before numeric coercion (ticket 02). */
export type SeriesValueMap = Record<string, number | null>;

export interface HistoryEntry {
    oid: string;
    name?: string;
    /** Pinned history instance for THIS OID (ADR-0039); absent = Auto (datapoint config, else server). */
    instance?: string;
    /**
     * This series' request-window shift as SPEC (ADR-0059 numeric seconds, ADR-0072 calendar
     * keys): numeric values shift start/end by −offset·1000 ms, {@link EchartsOffsetKey} values
     * resolve PER FETCH via setMonth/setFullYear against the resolved window (adapter `addTime`
     * parity — the caller must NOT precompute static ms for the keys, a relative window's
     * resolved bounds move every fetch). Absent/0 = the shared window.
     */
    xOffset?: number | EchartsOffsetKey;
    /**
     * This series' aggregate override (ADR-0072) — reshapes THIS entry's request; absent =
     * inherit the shared options' aggregate.
     */
    aggregate?: ioBroker.GetHistoryOptions['aggregate'];
    /** Percentile level — emitted only under this entry's effective 'percentile' aggregate (ADR-0072). */
    percentile?: number;
    /** Integral unit in seconds — emitted only under this entry's effective 'integral' aggregate (ADR-0072). */
    integralUnit?: number;
    /** Integral interpolation — emitted only under this entry's effective 'integral' aggregate (ADR-0072). */
    integralInterpolation?: 'none' | 'linear';
    /**
     * This series' NULL handling (ADR-0059) — overrides the chart-level `ignoreNull` argument
     * for this entry's data; absent = inherit the chart-level setting.
     */
    ignoreNull?: IgnoreNull;
    /**
     * This series' raw-value mapping (ticket 02) — applied at the intake, BEFORE numeric
     * coercion (exact `String(raw)` match, authored-empty target = a fill-immune gap); absent =
     * the plain numeric intake.
     */
    valueMap?: SeriesValueMap;
}
