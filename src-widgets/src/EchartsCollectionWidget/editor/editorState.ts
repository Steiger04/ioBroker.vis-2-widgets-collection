/**
 * Editor state + the rxData ↔ EditorState round-trip for the echarts configurator modal.
 *
 * @module EchartsCollectionWidget/editor/editorState
 * @remarks
 * The modal is the sole editor for every chart-specific field (map decision 06). On open it
 * reads the widget rxData (scalars + indexed `oid1..oidN` + the base64 `seriesConfig` /
 * `chartOverrides` blobs) into a single in-memory {@link EditorState}; on Apply it writes a
 * merged `onDataChange` patch back, splitting the series into indexed OIDs (auto-subscribed
 * by vis-2) and the two blobs.
 */

import { decodeBlob, encodeBlob } from '../../lib/encoding';
import type { SeriesMeta, ChartSeries } from '../optionBuilder';

export type ChartMode = 'history' | 'live' | 'json';
export type ChartTemplate = 'line';
export type TimeRange = '24h' | '7d' | '30d';
export type Aggregate = 'average' | 'minmax' | 'min' | 'max' | 'total' | 'onchange' | 'none';
export type IgnoreNull = 'keep' | 'forward' | 'zero';

/** A series as edited in the modal (metadata + its bound OID). */
export interface EditorSeries extends SeriesMeta {
    /** Indexed rxData OID (`oidN`); empty when unset. */
    oid: string;
}

/** In-memory state of the configurator modal. */
export interface EditorState {
    template: ChartTemplate;
    mode: ChartMode;
    timeRange: TimeRange;
    aggregate: Aggregate;
    count: number;
    refreshMs: number;
    instance: string;
    ignoreNull: IgnoreNull;
    jsonOid: string;
    series: EditorSeries[];
    /** Decoded Advanced JSON text (the chartOverrides / U side). */
    userText: string;
}

export type EditorPatch = Partial<EditorState>;
export type SetEditor = (patch: EditorPatch) => void;

export const DEFAULT_EDITOR_STATE: EditorState = {
    template: 'line',
    mode: 'history',
    timeRange: '24h',
    aggregate: 'average',
    count: 500,
    refreshMs: 60_000,
    instance: '',
    ignoreNull: 'keep',
    jsonOid: '',
    series: [],
    userText: '',
};

/** Parse a persisted blob (b64-prefixed JSON) into a value, or `undefined`. */
const decodeJson = (raw: unknown): unknown => {
    if (typeof raw !== 'string' || !raw) {
        return undefined;
    }
    try {
        return JSON.parse(decodeBlob(raw));
    } catch {
        return undefined;
    }
};

/**
 * Load the editor state from the widget rxData.
 *
 * @param data - Widget data map (scalars + indexed `oidN` + blobs).
 */
export const loadEditorState = (data: Record<string, unknown>): EditorState => {
    const seriesCount = typeof data.series_count === 'number' ? data.series_count : 0;
    const metaRaw = decodeJson(data.seriesConfig);
    const meta: SeriesMeta[] = Array.isArray(metaRaw) ? (metaRaw as SeriesMeta[]) : [];

    const series: EditorSeries[] = [];
    for (let i = 1; i <= seriesCount; i++) {
        const oidRaw = data[`oid${i}`];
        const oid = typeof oidRaw === 'string' && oidRaw !== 'nothing_selected' ? oidRaw : '';
        const m = meta[i - 1] ?? {};
        series.push({
            oid,
            name: m.name,
            color: m.color,
            type: m.type,
            yAxisIndex: m.yAxisIndex,
        });
    }

    const userText = typeof data.chartOverrides === 'string' ? decodeBlob(data.chartOverrides) : '';

    return {
        ...DEFAULT_EDITOR_STATE,
        mode: (data.mode as ChartMode) ?? DEFAULT_EDITOR_STATE.mode,
        timeRange: (data.timeRange as TimeRange) ?? DEFAULT_EDITOR_STATE.timeRange,
        aggregate: (data.aggregate as Aggregate) ?? DEFAULT_EDITOR_STATE.aggregate,
        count: typeof data.count === 'number' ? data.count : DEFAULT_EDITOR_STATE.count,
        refreshMs: typeof data.refreshMs === 'number' ? data.refreshMs : DEFAULT_EDITOR_STATE.refreshMs,
        instance: typeof data.instance === 'string' ? data.instance : '',
        ignoreNull: (data.ignoreNull as IgnoreNull) ?? DEFAULT_EDITOR_STATE.ignoreNull,
        jsonOid: typeof data.jsonOid === 'string' && data.jsonOid !== 'nothing_selected' ? data.jsonOid : '',
        series,
        userText,
    };
};

/**
 * Build the merged `onDataChange` patch from the editor state.
 *
 * @param state - Current editor state.
 * @param previousCount - Previously loaded series count, so stale `oidN` beyond the new
 *   count are cleared (vis-2 unsubscribes empty OIDs).
 */
export const saveEditorState = (state: EditorState, previousCount = state.series.length): Record<string, unknown> => {
    const patch: Record<string, unknown> = {
        mode: state.mode,
        timeRange: state.timeRange,
        aggregate: state.aggregate,
        count: state.count,
        refreshMs: state.refreshMs,
        instance: state.instance,
        ignoreNull: state.ignoreNull,
        jsonOid: state.jsonOid,
        series_count: state.series.length,
        // Per-series rendering metadata (oid stays out of the blob — vis-2 subscribes it).
        seriesConfig: encodeBlob(
            JSON.stringify(
                state.series.map(({ name, color, type, yAxisIndex }) => ({ name, color, type, yAxisIndex })),
            ),
        ),
        chartOverrides: encodeBlob(state.userText),
    };
    const max = Math.max(state.series.length, previousCount);
    for (let i = 1; i <= max; i++) {
        patch[`oid${i}`] = i <= state.series.length ? state.series[i - 1].oid || '' : '';
    }
    return patch;
};

/**
 * Build deterministic synthetic series for the editor live preview (no live ioBroker in the
 * modal). Mirrors the proto's stable dummy data so the preview shows coloured lines.
 */
export const buildPreviewSeries = (series: EditorSeries[], now: number): ChartSeries[] => {
    const HOUR = 3_600_000;
    return series.map((s, i) => ({
        name: s.name || `Series ${i + 1}`,
        data: Array.from({ length: 24 }, (_, k) => {
            const ts = now - (23 - k) * HOUR;
            const base = 18 + i * 6;
            const val = base + Math.sin((k + i * 2) / 3) * 4 + k * 0.3;
            return [ts, Number(val.toFixed(2))] as [number, number | null];
        }),
    }));
};
