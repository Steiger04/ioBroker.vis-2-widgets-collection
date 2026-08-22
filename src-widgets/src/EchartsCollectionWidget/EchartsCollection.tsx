/**
 * Echarts Collection widget body (v2 multi-type, ADR-0007/0008; pipeline seam ADR-0046).
 *
 * @module EchartsCollectionWidget/EchartsCollection
 * @remarks
 * The body is a thin ADAPTER over {@link module:EchartsCollectionWidget/useChartPipeline}: it
 * supplies vis-2's subscribed values (normalised from the `${oid}.val` keying to plain OIDs),
 * the socket-bound history fetcher, and the stabilised theme trio — the anti-churn keying
 * (`dataKey`/`valuesKey`/`themeSig` content signatures) lives HERE because ref-churn is a
 * property of the value source. Everything the data mode owns (Verlauf/Live/JSON acquisition,
 * family dispatch, merge, error/hasData) is pipeline-owned.
 */
import { useContext, useMemo } from 'react';
import type React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

import CollectionBase from '../components/CollectionBase';
import { CollectionContext } from '../components/CollectionProvider';
import Generic from '../Generic';
import useData from '../hooks/useData';
import type { EchartsCollectionContextProps } from '../types';

import EChart from './EChart';
import { buildEchartsTheme, echartsPalette, effectiveDarkMode, resolveThemeTokens } from './echartsTheme';
import { createHistoryFetcher } from './historyFetcher';
import { familyOf, parseJsonHidden, parseJsonSeriesStyle, parseSeriesConfig } from './optionBuilder';
import { decodeAxes, decodeChartConfig, decodeMarkLines, resolvePalette } from './presentation';
import {
    isUsableOid,
    usableSeries,
    useChartPipeline,
    type ChartPipelineSeries,
    type ChartPipelineTheme,
} from './useChartPipeline';
import { emptyPlaceholderReason, PLACEHOLDER_I18N_KEY } from './emptyPlaceholder';

type ValuesMap = Record<string, ioBroker.StateValue | undefined>;

function EchartsCollection(): React.ReactElement {
    const context = useContext(CollectionContext) as EchartsCollectionContextProps;
    const { widget, socket, theme } = context;

    // Stabilize data + values by content, not reference. vis-2 hands out NEW content-identical
    // refs on a pure editor move: getDerivedStateFromProps clones rxData on every style change
    // (even though only top/left differ), and the applyBindings → onStateChanged → setState path
    // re-clones values (rxStyle genuinely differs on a move, so the host's deep-equal guard still
    // fires setState). Left raw, that referential churn invalidates the pipeline's memos →
    // chart.setOption fires → the chart redraws on a mere move. Keying on serialized content
    // keeps the ref stable when nothing changed (useHistory.ts convention); a real data/value
    // change alters the key → new ref → the option recomputes → setOption redraws, as intended.
    const dataKey = JSON.stringify(widget.data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const data = useMemo(() => widget.data, [dataKey]);
    const valuesKey = JSON.stringify(context.values);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const values = useMemo(() => context.values, [valuesKey]);
    const { data: styleData } = useData('oid');

    const chartType = data.chartType ?? 'line';
    const family = familyOf(chartType);
    const mode = data.mode ?? 'history';

    const meta = useMemo(() => parseSeriesConfig(data.seriesConfig), [data.seriesConfig]);
    const chartConfig = useMemo(() => decodeChartConfig(data.chartConfig), [data.chartConfig]);
    const markLines = useMemo(() => decodeMarkLines(data.markLines), [data.markLines]);

    // JSON mode: the name-keyed per-series style overlay (ADR-0011). Empty when absent — JSON
    // series then render with defaults (palette slot, inherited type).
    const jsonStyle = useMemo(() => parseJsonSeriesStyle(data.jsonSeriesStyle), [data.jsonSeriesStyle]);
    // JSON-mode deny-list of hidden payload series names (Problem-2). Empty when absent.
    const jsonHidden = useMemo(() => parseJsonHidden(data.jsonHidden), [data.jsonHidden]);

    // Content signature of the chart-relevant theme fields. vis-2 rebuilds the MUI theme on a
    // mere editor move (moving changes `widget.style` top/left → `useStyles` recomputes → the
    // `overrides`-layered theme gets a new ref), so keying `palette`/`themeBase` on the `theme`
    // REFERENCE would churn them on every move → `presentation` → `option` → a pointless chart
    // redraw. The chart consumes only these primitive fields (palette colours + mode + text/
    // divider colours + font family), all strings — safe to serialize. A move leaves them
    // identical, so the signature is stable → `palette`/`themeBase` stay referentially stable →
    // no redraw. A real theme change alters the signature → recomputes, as intended.
    const themeSig = useMemo(() => {
        const p = theme.palette;
        return JSON.stringify({
            mode: p.mode,
            primary: p.primary.main,
            secondary: p.secondary.main,
            warning: p.warning.main,
            success: p.success.main,
            info: p.info.main,
            error: p.error.main,
            textPrimary: p.text.primary,
            textSecondary: p.text.secondary,
            divider: p.divider,
            fontFamily: theme.typography.fontFamily,
        });
    }, [theme]);

    // Resolved series palette: theme default, a named preset, or a custom list.
    // Keyed on `themeSig` (content), not the `theme` ref — see themeSig comment.
    const palette = useMemo(
        () => resolvePalette(data.paletteSource, data.palettePreset, data.paletteCustom, echartsPalette(theme)),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [data.paletteSource, data.palettePreset, data.paletteCustom, themeSig],
    );
    // Semantic theme tokens for the theme-derived defaults (ADR-0027). Same content-keying as palette.
    const themeTokens = useMemo(
        () => resolveThemeTokens(theme, data.darkMode),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [themeSig, data.darkMode],
    );
    // The effective chart dark mode, resolved like themeSig/themeBase (content-keyed inputs) —
    // drives the toolbox token literals (ADR-0045).
    const themeDark = effectiveDarkMode(data.darkMode, theme.palette.mode) === 'dark';
    // Theme base, with its series `color` overridden by the resolved palette.
    // Keyed on `themeSig` (content), not the `theme` ref — see themeSig comment.
    const themeBase = useMemo(() => {
        const base = buildEchartsTheme(theme, data.darkMode);
        base.color = palette;
        return base;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [themeSig, palette, data.darkMode]);
    // The stabilised theme trio the pipeline adapter hands over (ADR-0046) — content-keyed
    // inputs only, so a mere editor move never invalidates it.
    const pipelineTheme = useMemo<ChartPipelineTheme>(
        () => ({ palette, themeTokens, themeBase, themeDark }),
        [palette, themeTokens, themeBase, themeDark],
    );

    const getHistory = useMemo(() => createHistoryFetcher(socket), [socket]);

    // The body adapter's value normalisation (ADR-0046): vis-2 keys context.values by
    // `${oid}.val`; the pipeline expects plain OID keys. Keyed on the joined OID list + the
    // content-keyed values map, so a move-stable values ref never re-projection.
    const useValues = (oids: string[]): Record<string, unknown> => {
        // Stable dependency: the joined OID list (the useSubscribedValues convention) — the array
        // identity churns per render, the key does not.
        const key = oids.join('\n');
        return useMemo(() => {
            const list = key ? key.split('\n') : [];
            return Object.fromEntries(list.map(o => [o, (values as ValuesMap)[`${o}.val`]]));
            // `values` is the component's content-keyed memo (outer scope by construction — this
            // is the adapter closure); it IS the dependency that re-runs the projection.
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [key, values]);
    };

    // The body's series list for the pipeline (ADR-0046): the indexed OIDs (oid1..oidN,
    // auto-subscribed by vis-2) joined with the seriesConfig meta — the per-series pinned
    // history instance (ADR-0039) rides along in the meta.
    const pipelineSeries = useMemo<ChartPipelineSeries[]>(() => {
        const count = typeof data.series_count === 'number' ? data.series_count : 0;
        const out: ChartPipelineSeries[] = [];
        for (let i = 1; i <= count; i++) {
            const oid = data[`oid${i}`];
            out.push({ ...(meta[i - 1] ?? {}), oid: isUsableOid(oid) ? oid : '' });
        }
        return out;
    }, [data, meta]);

    const oidAt = (i: number): string => {
        const v = data[`oid${i + 1}`];
        return typeof v === 'string' && isUsableOid(v) ? v : '';
    };
    // Radar indicator OID backfill (loadEditorState parity, ADR-0046): older blobs carry the
    // indicator list without oids — the indexed oidN fields are the source of truth. The old
    // body read the radar values straight from oidN; the pipeline reads indicator oids, so the
    // backfill keeps those widgets rendering. Extra keys on an indicator are ignored by echarts
    // (the preview has always passed id+oid through).
    const companionsChartConfig = useMemo(() => {
        const indicators = chartConfig.radar?.indicators;
        if (family === 'radar' && indicators?.some(ind => !ind.oid)) {
            return {
                ...chartConfig,
                radar: {
                    ...chartConfig.radar,
                    indicators: indicators.map((ind, i) => ({ ...ind, oid: ind.oid || oidAt(i) })),
                },
            };
        }
        return chartConfig;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [chartConfig, dataKey, family]);

    const yAxes = useMemo(() => decodeAxes(data.yAxes as string), [data]);
    const companions = useMemo(
        () => ({
            chartConfig: companionsChartConfig,
            yAxes,
            markLines,
            jsonSeriesStyle: jsonStyle,
            jsonHidden,
            series: pipelineSeries,
        }),
        [companionsChartConfig, yAxes, markLines, jsonStyle, jsonHidden, pipelineSeries],
    );

    // The pipeline (ADR-0046) — one data-mode decision tree, shared with the preview. The body
    // opts into the debounced early refresh (map decision 02); its point ceiling stays 5000.
    const { option, loading, hasData, error } = useChartPipeline(
        { useValues, getHistory, theme: pipelineTheme },
        data as unknown as Record<string, unknown>,
        companions,
        { earlyRefresh: true },
    );

    const placeholder = Generic.t(
        PLACEHOLDER_I18N_KEY[
            emptyPlaceholderReason({
                family,
                mode,
                seriesCount: usableSeries(pipelineSeries).length,
            })
        ],
    );

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
                            sx={{ color: 'primary.main', textAlign: 'center' }}
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
