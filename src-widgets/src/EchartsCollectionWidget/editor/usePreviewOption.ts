/**
 * Build the real, mode-aware editor preview option (ADR-0007/0008, Q6).
 *
 * @module EchartsCollectionWidget/editor/usePreviewOption
 * @remarks
 * Mirrors the live widget body's family resolution but operates on the editor's working
 * {@link EditorState} plus a drilled socket — so the persistent preview shows the user's
 * ACTUAL data instead of synthetic fixtures:
 *  - cartesian/pie `history` — a real `getHistory` sample (point count capped for speed).
 *  - cartesian/pie `live` — a rolling buffer over the subscribed OIDs (ticks while the modal
 *    is open).
 *  - `json` — the live `jsonOid` value parsed via {@link parseJsonState}.
 *  - `gauge` — the scalar OID's current value.
 *  - `radar` — the indicator OIDs' current values.
 *
 * No data bound → `hasData` is false (the panel shows an honest empty state, never a fake
 * curve). Presentation edits (legend/tooltip/palette/…) react live via the data-wins merge.
 */
import { useMemo } from 'react';
import type { Theme } from '@mui/material/styles';
import type { LegacyConnection } from '@iobroker/adapter-react-v5';

import { buildEchartsTheme, echartsPalette } from '../echartsTheme';
import { createHistoryFetcher } from '../historyFetcher';
import { buildGeneratedOption, familyOf, parseJsonState, parseUserJson } from '../optionBuilder';
import { resolvePalette, TITLE_PLACEMENT, toPresentationConfig } from '../presentation';
import { mergeOptionForEcharts } from '../utils/mergeOption';
import { useHistory } from '../useHistory';
import { useLiveBuffer } from '../useLiveBuffer';

import { useSubscribedValues } from './useSubscribedValues';
import type { EditorState } from './editorState';

const RANGE_MS: Record<string, number> = {
    '24h': 86_400_000,
    '7d': 7 * 86_400_000,
    '30d': 30 * 86_400_000,
};
/** Preview history is capped for responsiveness (the live widget uses the full count). */
const PREVIEW_MAX_POINTS = 200;

const toNum = (raw: unknown): number | null => (typeof raw === 'number' && Number.isFinite(raw) ? raw : null);

/** Flatten editor-state visualMap + string yMin/yMax into the scalar keys toPresentationConfig reads. */
const editorSrc = (state: EditorState): Record<string, unknown> => ({
    ...(state as unknown as Record<string, unknown>),
    visualMapEnabled: state.visualMap.enabled,
    visualMapMin: state.visualMap.min,
    visualMapMax: state.visualMap.max,
    visualMapColors: state.visualMap.colors,
    yMin: state.yMin === '' ? undefined : Number(state.yMin),
    yMax: state.yMax === '' ? undefined : Number(state.yMax),
});

export interface PreviewResult {
    option: ReturnType<typeof buildGeneratedOption> | null;
    loading: boolean;
    hasData: boolean;
}

/**
 * @param state - The editor working state.
 * @param socket - The LegacyConnection drilled into the editor.
 * @param theme - The MUI theme (for the theme base + palette).
 */
export function usePreviewOption(state: EditorState, socket: LegacyConnection, theme: Theme): PreviewResult {
    const family = familyOf(state.chartType);
    const mode = state.mode;

    const palette = useMemo(
        () => resolvePalette(state.paletteSource, state.palettePreset, state.paletteCustom, echartsPalette(theme)),
        [state.paletteSource, state.palettePreset, state.paletteCustom, theme],
    );
    const presentation = useMemo(
        () =>
            toPresentationConfig({
                src: editorSrc(state),
                palette,
                family,
                chartConfig: { gauge: state.gauge, radar: state.radar, pie: state.pie },
                markLines: state.markLines,
            }),
        [state, palette, family],
    );
    const themeBase = useMemo(() => {
        const base = buildEchartsTheme(theme, state.darkMode);
        base.color = palette;
        return base;
    }, [theme, palette, state.darkMode]);
    const overrides = useMemo(() => {
        const r = parseUserJson(state.userText);
        return r.ok ? r.value : {};
    }, [state.userText]);

    // cartesian/pie entries (used by history fetch + live buffer).
    const entries = useMemo(
        () => state.series.filter(s => s.oid && s.oid !== 'nothing_selected').map(s => ({ oid: s.oid, name: s.name })),
        [state.series],
    );

    // OIDs whose CURRENT value the preview needs (everything except cartesian/pie history mode).
    const subscribedOids = useMemo(() => {
        if (family === 'gauge') {
            return [state.series[0]?.oid].filter(Boolean);
        }
        if (family === 'radar') {
            return state.radar.indicators.map(i => i.oid).filter(Boolean);
        }
        // cartesian / pie
        if (mode === 'json') {
            return [state.jsonOid].filter(Boolean);
        }
        if (mode === 'live') {
            return entries.map(e => e.oid);
        }
        return []; // history mode fetches; no subscription needed
    }, [family, mode, state.series, state.radar.indicators, state.jsonOid, entries]);

    const values = useSubscribedValues(subscribedOids, socket);

    const getHistory = useMemo(() => createHistoryFetcher(socket), [socket]);
    const history = useHistory(getHistory, entries, {
        rangeMs: RANGE_MS[state.timeRange] ?? RANGE_MS['24h'],
        aggregate: state.aggregate,
        count: Math.min(state.count || PREVIEW_MAX_POINTS, PREVIEW_MAX_POINTS),
        instance: state.instance,
        ignoreNull: state.ignoreNull,
        enabled: (family === 'cartesian' || family === 'pie') && mode === 'history' && entries.length > 0,
    });
    const liveBuffers = useLiveBuffer(entries, values, (family === 'cartesian' || family === 'pie') && mode === 'live');

    const built = useMemo<PreviewResult>(() => {
        let g: ReturnType<typeof buildGeneratedOption>;
        if (family === 'gauge') {
            const oid = state.series[0]?.oid;
            g = buildGeneratedOption({
                family: 'gauge',
                value: oid ? toNum(values[oid]) : null,
                meta: state.series,
                p: presentation,
            });
        } else if (family === 'radar') {
            const vals = state.radar.indicators.map(ind => toNum(values[ind.oid]));
            g = buildGeneratedOption({ family: 'radar', values: vals, meta: state.series, p: presentation });
        } else {
            let series;
            if (mode === 'history') {
                series = history.series.map(s => ({ name: s.name, data: s.data }));
            } else if (mode === 'live') {
                series = entries.map((e, i) => ({
                    name: state.series[i]?.name || e.oid,
                    data: liveBuffers[e.oid] ?? [],
                }));
            } else {
                const raw = values[state.jsonOid];
                series = parseJsonState(raw === null || raw === undefined ? '' : String(raw));
            }
            g = buildGeneratedOption({
                family: family === 'pie' ? 'pie' : 'cartesian',
                series,
                meta: state.series,
                p: presentation,
            });
        }

        const merged = mergeOptionForEcharts(g, overrides, themeBase);
        const titleText = state.titleText.trim();
        if (titleText) {
            merged.title = {
                ...((merged.title as Record<string, unknown> | undefined) ?? {}),
                text: titleText,
                ...TITLE_PLACEMENT[state.titlePos ?? 'topCenter'],
            };
        }
        if (presentation.bgColor && presentation.bgColor !== 'transparent') {
            merged.backgroundColor = presentation.bgColor;
        }

        // hasData by family.
        let hasData: boolean;
        if (family === 'gauge') {
            hasData = toNum(values[state.series[0]?.oid ?? '']) !== null;
        } else if (family === 'radar') {
            hasData = state.radar.indicators.some(ind => toNum(values[ind.oid]) !== null);
        } else if (mode === 'history') {
            hasData = history.series.some(s => s.data.length > 0);
        } else if (mode === 'live') {
            hasData = entries.some(e => (liveBuffers[e.oid]?.length ?? 0) > 0);
        } else {
            const series = (g.series as unknown[] | undefined) ?? [];
            hasData = series.some(
                s =>
                    Array.isArray((s as Record<string, unknown>).data) &&
                    ((s as Record<string, unknown>).data as unknown[]).length > 0,
            );
        }

        return { option: merged, loading: history.loading && mode === 'history', hasData };
    }, [
        family,
        mode,
        state,
        values,
        entries,
        history.series,
        history.loading,
        liveBuffers,
        presentation,
        overrides,
        themeBase,
    ]);

    return built;
}
