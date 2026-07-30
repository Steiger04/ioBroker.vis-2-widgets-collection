/**
 * Echarts Collection widget body (v2 multi-type, ADR-0007/0008).
 *
 * @module EchartsCollectionWidget/EchartsCollection
 * @remarks
 * Resolves the chart per **family** and builds the generated option (G):
 *  - `cartesian` / `pie` — share the time-series pipeline (`history` = socket.getHistory via
 *    {@link useHistory}; `live` = rolling buffer of subscribed values; `json` = a JSON-valued
 *    OID parsed via {@link parseJsonState}). Pie collapses each series to one slice in the builder.
 *  - `gauge` — the single scalar OID (`oid1`) current value, drawn within the configured range.
 *  - `radar` — the indicator OIDs (`oid1..oidN`) current values, one polygon.
 *
 * The family G is merged with the theme base (palette overridden from the resolved series
 * palette) and the demoted Advanced JSON (U), then `title.text` (live titleText) and
 * `backgroundColor` (bgColor) are injected. The data-wins force-set (series + legend.data)
 * lives in {@link mergeOptionForEcharts}.
 */
import { useContext, useEffect, useMemo, useRef } from 'react';
import type React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

import CollectionBase from '../components/CollectionBase';
import { CollectionContext } from '../components/CollectionProvider';
import useData from '../hooks/useData';
import useOidValue from '../hooks/useOidValue';
import type { EchartsCollectionContextProps } from '../types';
import { decodeBlob } from '../lib/encoding';

import EChart from './EChart';
import { buildEchartsTheme, echartsPalette } from './echartsTheme';
import { createHistoryFetcher } from './historyFetcher';
import { buildGeneratedOption, familyOf, parseJsonState, parseSeriesConfig, parseUserJson } from './optionBuilder';
import {
    resolvePalette,
    toPresentationConfig,
    decodeChartConfig,
    decodeMarkLines,
    TITLE_PLACEMENT,
} from './presentation';
import { mergeOptionForEcharts } from './utils/mergeOption';
import { useHistory } from './useHistory';
import { useLiveBuffer } from './useLiveBuffer';

/** Relative time range → milliseconds (cartesian/pie history mode). */
const RANGE_MS: Record<string, number> = {
    '24h': 86_400_000,
    '7d': 7 * 86_400_000,
    '30d': 30 * 86_400_000,
};

type ValuesMap = Record<string, ioBroker.StateValue | undefined>;

/** Hard ceiling on fetched points per series — protects against absurd history volumes. */
const MAX_HISTORY_POINTS = 5000;

const toNum = (raw: unknown): number | null => (typeof raw === 'number' && Number.isFinite(raw) ? raw : null);

function EchartsCollection(): React.ReactElement {
    const context = useContext(CollectionContext) as EchartsCollectionContextProps;
    const { widget, socket, values, theme } = context;
    const data = widget.data;
    const { data: styleData } = useData('oid');
    const jsonValue = useOidValue('jsonOid');

    const chartType = data.chartType ?? 'cartesian';
    const family = familyOf(chartType);
    const mode = data.mode ?? 'history';

    const meta = useMemo(() => parseSeriesConfig(data.seriesConfig), [data.seriesConfig]);
    const chartConfig = useMemo(() => decodeChartConfig(data.chartConfig), [data.chartConfig]);
    const markLines = useMemo(() => decodeMarkLines(data.markLines), [data.markLines]);
    const overrides = useMemo(() => {
        const r = parseUserJson(decodeBlob(data.chartOverrides));
        return r.ok ? r.value : {};
    }, [data.chartOverrides]);

    // Resolved series palette: theme default, a named preset, or a custom list.
    const palette = useMemo(
        () => resolvePalette(data.paletteSource, data.palettePreset, data.paletteCustom, echartsPalette(theme)),
        [data.paletteSource, data.palettePreset, data.paletteCustom, theme],
    );
    const presentation = useMemo(
        () =>
            toPresentationConfig({
                src: data as unknown as Record<string, unknown>,
                palette,
                family,
                chartConfig,
                markLines,
            }),
        [data, palette, family, chartConfig, markLines],
    );

    // Theme base, with its series `color` overridden by the resolved palette.
    const themeBase = useMemo(() => {
        const base = buildEchartsTheme(theme, data.darkMode);
        base.color = palette;
        return base;
    }, [theme, palette, data.darkMode]);

    // Gather the indexed series OIDs (oid1..oidN), auto-subscribed by vis-2. For cartesian/pie
    // these are the series; for gauge it is the scalar (oid1); for radar the indicator OIDs.
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

    const getHistory = useMemo(() => createHistoryFetcher(socket), [socket]);

    const history = useHistory(getHistory, entries, {
        rangeMs: RANGE_MS[data.timeRange ?? '24h'] ?? RANGE_MS['24h'],
        aggregate: data.aggregate,
        count: Math.min(data.count ?? 500, MAX_HISTORY_POINTS),
        instance: data.instance,
        refreshMs: data.refreshMs,
        ignoreNull: data.ignoreNull,
        enabled: (family === 'cartesian' || family === 'pie') && mode === 'history' && entries.length > 0,
    });

    const liveBuffers = useLiveBuffer(
        entries,
        values as ValuesMap,
        (family === 'cartesian' || family === 'pie') && mode === 'live',
    );

    // Debounced early refresh (map decision 02): re-fetch soon when a subscribed value changes in
    // history mode, instead of waiting for the periodic refresh. Driven from the values map the
    // widget already receives on every state update — no class ↔ body bridge needed.
    const firstValuesRef = useRef(true);
    useEffect(() => {
        if (mode !== 'history' || (family !== 'cartesian' && family !== 'pie') || entries.length === 0) {
            firstValuesRef.current = true;
            return;
        }
        if (firstValuesRef.current) {
            firstValuesRef.current = false;
            return; // the mount fetch already covers the initial load
        }
        const h = setTimeout(() => history.refresh(), 1500);
        return (): void => clearTimeout(h);
        // Fire only on value updates; gating conditions are read at fire-time.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [values]);

    // Resolve the generated option per family.
    const option = useMemo(() => {
        let g;
        if (family === 'gauge') {
            const value = toNum((values as ValuesMap)[`${entries[0]?.oid}.val`]);
            g = buildGeneratedOption({ family: 'gauge', value, meta, p: presentation });
        } else if (family === 'radar') {
            const count = typeof data.series_count === 'number' ? data.series_count : 0;
            const vals: (number | null)[] = [];
            for (let i = 0; i < count; i++) {
                const oid = data[`oid${i + 1}`];
                vals.push(oid ? toNum((values as ValuesMap)[`${oid}.val`]) : null);
            }
            g = buildGeneratedOption({ family: 'radar', values: vals, meta, p: presentation });
        } else {
            // cartesian / pie share the time-series pipeline.
            let series;
            if (mode === 'history') {
                series = history.series.map(s => ({ name: s.name, data: s.data }));
            } else if (mode === 'live') {
                series = entries.map((e, i) => ({
                    name: meta[i]?.name || e.oid,
                    data: liveBuffers[e.oid] ?? [],
                }));
            } else {
                const raw = jsonValue === null || jsonValue === undefined ? '' : String(jsonValue);
                series = parseJsonState(raw);
            }
            g = buildGeneratedOption({
                family: family === 'pie' ? 'pie' : 'cartesian',
                series,
                meta,
                p: presentation,
            });
        }

        const merged = mergeOptionForEcharts(g, overrides, themeBase);
        // Live title text (may hold {oid.val} bindings vis-2 resolved) wins over any U title.text.
        const titleText = typeof data.titleText === 'string' ? data.titleText.trim() : '';
        if (titleText) {
            merged.title = {
                ...((merged.title as Record<string, unknown> | undefined) ?? {}),
                text: titleText,
                ...TITLE_PLACEMENT[data.titlePos ?? 'topCenter'],
            };
        }
        // Background colour (transparent default).
        if (presentation.bgColor && presentation.bgColor !== 'transparent') {
            merged.backgroundColor = presentation.bgColor;
        }
        return merged;
    }, [
        family,
        mode,
        entries,
        meta,
        data,
        values,
        history.series,
        liveBuffers,
        jsonValue,
        presentation,
        overrides,
        themeBase,
    ]);

    const loading = (family === 'cartesian' || family === 'pie') && mode === 'history' && history.loading;
    const seriesError =
        family !== 'gauge' && family !== 'radar' && mode === 'history'
            ? history.series.find(s => s.error)?.error
            : undefined;
    const error =
        mode === 'history' && family !== 'gauge' && family !== 'radar' ? (history.error ?? seriesError ?? null) : null;

    // hasData differs by family.
    const hasData = useMemo(() => {
        if (family === 'gauge') {
            return toNum((values as ValuesMap)[`${entries[0]?.oid}.val`]) !== null;
        }
        if (family === 'radar') {
            return entries.some(e => toNum((values as ValuesMap)[`${e.oid}.val`]) !== null);
        }
        const series = (option.series as unknown[] | undefined) ?? [];
        return series.some(
            s =>
                Array.isArray((s as Record<string, unknown>).data) &&
                ((s as Record<string, unknown>).data as unknown[]).length > 0,
        );
    }, [family, entries, values, option.series]);

    const placeholder =
        family === 'gauge'
            ? 'Select a value OID'
            : family === 'radar'
              ? 'Add indicator OIDs'
              : mode === 'json'
                ? 'Select a JSON OID'
                : 'Configure series to see data';

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
                    <EChart
                        option={option}
                        renderer={data.renderer}
                    />
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
                            {placeholder}
                        </Typography>
                    </Box>
                )}
            </Box>
        </CollectionBase>
    );
}

export default EchartsCollection;
