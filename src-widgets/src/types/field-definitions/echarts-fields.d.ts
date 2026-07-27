/**
 * Echarts widget field definitions for vis-2 Collection.
 *
 * @remarks
 * Configures an Apache ECharts (v6) line-chart time-series widget with three data modes
 * (history / live / json). The widget is the collection's first multi-OID widget: series
 * OIDs live as indexed `oid1..oidN` rxData fields (auto-subscribed by vis-2), while the
 * per-series rendering metadata and the user's Advanced presentation overrides are stored as
 * Base64-encoded JSON blobs (`seriesConfig`, `chartOverrides`) — see map decision 04.
 *
 * Scalar chart settings (mode, range, aggregate, …) are edited through the modal editor
 * (P3) and written to these fields via `onDataChange`; the vis-2 attribute panel only shows
 * the "Edit chart configuration" trigger plus the common fields.
 */

/**
 * Shared value-union types for the echarts widget. Single source of truth — the editor state
 * and option builder import these so a new value (e.g. a new aggregate) lands in one place.
 */
export type EchartsTemplate = 'line';
export type EchartsMode = 'history' | 'live' | 'json';
export type EchartsTimeRange = '24h' | '7d' | '30d';
export type EchartsAggregate = 'average' | 'minmax' | 'min' | 'max' | 'total' | 'count' | 'onchange' | 'none';
export type EchartsIgnoreNull = 'keep' | 'forward' | 'zero';

export interface EchartsFieldsRxData {
    // ── Template & data mode ────────────────────────────────────────

    /** Chart template. v1 ships only the line time-series template. @default 'line' */
    template?: EchartsTemplate;

    /** Data source mode. @default 'history' */
    mode?: EchartsMode;

    // ── History-mode options (shared across all series) ─────────────

    /** Time range to fetch. @default '24h' */
    timeRange?: EchartsTimeRange;

    /** Aggregation for getHistory. @default 'average' */
    aggregate?: EchartsAggregate;

    /** Maximum number of points per series. @default 500 */
    count?: number;

    /** Periodic refresh interval in ms (0 = no periodic refresh). @default 60000 */
    refreshMs?: number;

    /** History adapter instance (optional; auto-detected when omitted). */
    instance?: string;

    /** How null gaps in the fetched history are handled. @default 'keep' */
    ignoreNull?: EchartsIgnoreNull;

    // ── JSON mode ───────────────────────────────────────────────────

    /**
     * Single OID whose JSON value supplies the chart data (json mode only).
     *
     * @remarks
     * Auto-detects the payload shape: `{ series: [{ name?, data: [[ts, val], ...] }] }`,
     * a bare `[[ts, val], ...]` array (single series), or `{ data: [[ts, val], ...] }`.
     */
    jsonOid?: string;

    /**
     * Chart title text — may contain vis-2 `{oid.val}` bindings.
     *
     * @remarks
     * vis-2 resolves the bindings into rxData, so the widget reads the live-resolved string
     * and injects it as `title.text` (a data-wins force-back: U cannot override the title text).
     * Title STYLING (`title.textStyle`) stays on the U side. Edited via the modal Data tab.
     */
    titleText?: string;

    // ── Multi-OID series (indexed, auto-subscribed) ─────────────────

    /**
     * Number of configured series. Drives the indexed `series` group expansion
     * (`indexFrom: 1, indexTo: 'series_count'`). Managed by the modal editor.
     */
    series_count?: number;

    /**
     * Series OIDs as indexed rxData fields `oid1..oidN`.
     *
     * @remarks
     * Auto-subscribed by vis-2 because the names match `startsWith('oid')`. The modal editor
     * writes them directly (the panel field is hidden), so the non-index-aware OID change
     * handler is not involved.
     */
    [key: `oid${number}`]: string | undefined;

    /**
     * Base64-encoded per-series rendering config.
     *
     * @remarks
     * JSON array `[{ name, color, type, yAxisIndex }, ...]` aligned by index with `oidN`.
     * The `b64:` prefix avoids vis-2's extractBinding regex on curly braces (JsonTable
     * precedent). Edited via the modal editor (P3).
     */
    seriesConfig?: string;

    /**
     * Base64-encoded user presentation overrides (the "U" side of the data-wins seam).
     *
     * @remarks
     * JSON object of echarts presentation keys (tooltip, grid, animation, …). Data-owned
     * keys (`series`, axes, `legend.data`) are generated and cannot be overridden here.
     * Edited via the Advanced tab of the modal editor (P3).
     */
    chartOverrides?: string;
}
