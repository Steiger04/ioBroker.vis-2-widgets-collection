/**
 * Echarts Collection widget body.
 *
 * @module EchartsCollectionWidget/EchartsCollection
 * @remarks
 * Resolves chart series from the configured data mode and renders a themed line chart:
 *  - `history` — socket.getHistory per OID via {@link useHistory} (polling + early refresh)
 *  - `live`    — rolling buffer of subscribed values (`context.values`), no history fetch
 *  - `json`    — a single JSON-valued OID parsed via {@link parseJsonState}
 *
 * The resolved series + per-series metadata become the generated option (G), merged with the
 * template defaults, the user overrides (U) and the MUI theme base through the data-wins seam
 * (map decision 03). `onStateUpdated` stays empty in the class — the body re-renders on every
 * `state.values` change, which drives live mode. History mode refreshes via the periodic
 * `refreshMs` polling inside {@link useHistory} (the value-driven early refresh was removed:
 * on chatty OIDs it cleared the fetch debounce before it could fire, leaving `loading` stuck).
 */
import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

import CollectionBase from '../components/CollectionBase';
import { CollectionContext } from '../components/CollectionProvider';
import useData from '../hooks/useData';
import useOidValue from '../hooks/useOidValue';
import type { EchartsCollectionContextProps } from '../types';
import { decodeBlob } from '../lib/encoding';

import EChart from './EChart';
import { buildEchartsTheme } from './echartsTheme';
import type { SeriesPoint } from './historyLogic';
import {
    LINE_TEMPLATE_DEFAULTS,
    buildGeneratedOption,
    parseJsonState,
    parseSeriesConfig,
    parseUserJson,
    type ChartSeries,
} from './optionBuilder';
import { mergeOptionForEcharts } from './utils/mergeOption';
import { useHistory } from './useHistory';

/** Relative time range → milliseconds (map decision 02). */
const RANGE_MS: Record<string, number> = {
    '24h': 86_400_000,
    '7d': 7 * 86_400_000,
    '30d': 30 * 86_400_000,
};

/** Maximum points retained per OID in the live rolling buffer. */
const LIVE_MAX_POINTS = 300;

/**
 * Client-side guard around `socket.getHistory`. ioBroker does not reliably honor the
 * `timeout` option, so without this a non-responding backend (or a misconfigured history
 * adapter) leaves `loading` stuck true forever — the "eternal spinner" symptom.
 */
const HISTORY_FETCH_TIMEOUT_MS = 12_000;

type ValuesMap = Record<string, ioBroker.StateValue | undefined>;

/**
 * Rolling buffer of recent live values per OID. Appends a point whenever a subscribed value
 * changes (deduped), capped to {@link LIVE_MAX_POINTS}.
 */
function useLiveBuffer(entries: { oid: string }[], values: ValuesMap, enabled: boolean): Record<string, SeriesPoint[]> {
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
                const raw = values[`${e.oid}.val`];
                const num = typeof raw === 'number' && Number.isFinite(raw) ? raw : null;
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

function EchartsCollection(): React.ReactElement {
    const context = useContext(CollectionContext) as EchartsCollectionContextProps;
    const { widget, socket, values, theme } = context;
    const data = widget.data;
    const { data: styleData } = useData('oid');
    const jsonValue = useOidValue('jsonOid');

    const mode = data.mode ?? 'history';
    const meta = useMemo(() => parseSeriesConfig(data.seriesConfig), [data.seriesConfig]);
    const overrides = useMemo(() => {
        const r = parseUserJson(decodeBlob(data.chartOverrides));
        return r.ok ? r.value : {};
    }, [data.chartOverrides]);
    const themeBase = useMemo(() => buildEchartsTheme(theme), [theme]);

    // Gather the indexed series OIDs (oid1..oidN), auto-subscribed by vis-2.
    const entries = useMemo(() => {
        const count = typeof data.series_count === 'number' ? data.series_count : 0;
        const out: { oid: string; name?: string }[] = [];
        for (let i = 1; i <= count; i++) {
            const oid = data[`oid${i}`];
            if (oid && oid !== 'nothing_selected') {
                out.push({ oid, name: meta[i - 1]?.name });
            }
        }
        return out;
    }, [data, meta]);

    // context.socket is the raw LegacyConnection: getHistory(id, options) returns a Promise
    // (NOT callback-based — a 3rd-arg callback is silently ignored) and has no internal
    // timeout, so a non-responding server hangs the promise — and `loading` — forever. Race
    // the real promise against a client-side timer.
    const getHistory = useCallback(
        (
            id: string,
            options: ioBroker.GetHistoryOptions,
        ): Promise<{ ts: number; val: ioBroker.StateValue | null }[]> => {
            const real = socket.getHistory(id, { ...options, timeout: 10000 }) as Promise<
                { ts: number; val: ioBroker.StateValue | null }[]
            >;
            let timer: ReturnType<typeof setTimeout> | undefined;
            const timeout = new Promise<never>((_, reject) => {
                timer = setTimeout(
                    () => reject(new Error(`History fetch for "${id}" timed out`)),
                    HISTORY_FETCH_TIMEOUT_MS,
                );
            });
            return Promise.race([real, timeout])
                .catch(err => {
                    console.error('[echarts] getHistory failed:', { id, options, error: err });
                    throw err;
                })
                .finally(() => timer && clearTimeout(timer));
        },
        [socket],
    );

    const history = useHistory(getHistory, entries, {
        rangeMs: RANGE_MS[data.timeRange ?? '24h'] ?? RANGE_MS['24h'],
        aggregate: data.aggregate,
        count: data.count,
        instance: data.instance,
        refreshMs: data.refreshMs,
        ignoreNull: data.ignoreNull,
        enabled: mode === 'history' && entries.length > 0,
    });

    // History mode refreshes via periodic `refreshMs` polling inside useHistory (map decision
    // 02) — the value-driven early refresh was removed: on chatty OIDs it cleared the 200 ms
    // fetch debounce before it could fire, leaving `loading` stuck.

    const liveBuffers = useLiveBuffer(entries, values as ValuesMap, mode === 'live');

    // Resolve the chart series according to the active mode.
    const series: ChartSeries[] = useMemo(() => {
        if (mode === 'history') {
            return history.series.map(s => ({ name: s.name, data: s.data }));
        }
        if (mode === 'live') {
            return entries.map((e, i) => ({
                name: meta[i]?.name || e.oid,
                data: liveBuffers[e.oid] ?? [],
            }));
        }
        const raw = jsonValue === null || jsonValue === undefined ? '' : String(jsonValue);
        return parseJsonState(raw);
    }, [mode, history.series, entries, meta, liveBuffers, jsonValue]);

    const option = useMemo(() => {
        const merged = mergeOptionForEcharts(
            buildGeneratedOption(series, meta),
            LINE_TEMPLATE_DEFAULTS,
            overrides,
            themeBase,
        );
        // titleText is a dedicated live-text field (may hold {oid.val} bindings that vis-2
        // resolved into rxData). It wins over any U title.text — injected after the merge.
        const titleText = typeof data.titleText === 'string' ? data.titleText.trim() : '';
        if (titleText) {
            merged.title = { ...((merged.title as Record<string, unknown> | undefined) ?? {}), text: titleText };
        }
        return merged;
    }, [series, meta, overrides, themeBase, data.titleText]);

    const loading = mode === 'history' && history.loading;
    // Surface the first per-series failure too (e.g. a single OID that errored or timed out)
    // so the user sees a real message instead of the misleading "configure series" placeholder.
    const seriesError = mode === 'history' ? history.series.find(s => s.error)?.error : undefined;
    const error = mode === 'history' ? (history.error ?? seriesError ?? null) : null;
    const hasData = series.some(s => s.data.length > 0);

    return (
        <CollectionBase
            isValidType
            data={styleData}
        >
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                }}
            >
                {loading && (
                    <CircularProgress
                        size={24}
                        sx={{ position: 'absolute', top: 8, right: 8 }}
                    />
                )}
                {error && (
                    <Typography
                        color="error"
                        variant="caption"
                        sx={{ position: 'absolute', top: 8, left: 8, right: 40 }}
                    >
                        {error}
                    </Typography>
                )}
                {hasData ? (
                    <EChart option={option} />
                ) : error ? null : (
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
                            variant="body2"
                            color="text.secondary"
                        >
                            {mode === 'json' ? 'Select a JSON OID' : 'Configure series to see data'}
                        </Typography>
                    </Box>
                )}
            </Box>
        </CollectionBase>
    );
}

export default EchartsCollection;
