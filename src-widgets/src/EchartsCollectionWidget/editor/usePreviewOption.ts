/**
 * The editor preview's pipeline composition (ADR-0046) — a thin adapter over
 * {@link module:EchartsCollectionWidget/useChartPipeline}. All data-mode logic (entries,
 * subscriptions, Verlauf/Live/JSON acquisition, family dispatch, merge, error/hasData) is
 * pipeline-owned; this hook only supplies the editor-side sources.
 *
 * @module EchartsCollectionWidget/editor/usePreviewOption
 * @remarks
 * The ADAPTER (ADR-0046): the configurator is detached from the vis-2 widget tree, so it cannot
 * read `context.values` — it subscribes directly via the drilled socket (plain-OID keyed,
 * {@link useSubscribedValues}) and resolves the COLLECTION theme itself (ADR-0027 — the theme the
 * canvas renders under, not the vis-2 host theme the editor chrome uses). The preview honours
 * `refreshMs` and surfaces the pipeline's unified `error` (ADR-0046 parity decisions) — the
 * preview shows what the canvas does.
 */
import { useMemo } from 'react';
import type { Connection } from '@iobroker/adapter-react-v5';
import type { Theme } from '@mui/material/styles';

import { buildEchartsTheme, effectiveDarkMode } from '../echartsTheme';
import { createHistoryFetcher } from '../historyFetcher';
import { useChartPipeline, type ChartPipelineResult } from '../useChartPipeline';
import { useEditorTheme } from './useEditorTheme';
import type { EditorState } from './editorState';
import { useSubscribedValues } from './useSubscribedValues';

/** Preview history is capped for responsiveness (the live widget uses the full count). */
const PREVIEW_MAX_POINTS = 200;

/** Flatten editor-state visualMap into the scalar keys toPresentationConfig reads (yAxes passed separately). */
const editorSrc = (state: EditorState): Record<string, unknown> => ({
    ...(state as unknown as Record<string, unknown>),
    visualMapEnabled: state.visualMap.enabled,
    visualMapMin: state.visualMap.min,
    visualMapMax: state.visualMap.max,
    visualMapColors: state.visualMap.colors,
});

/** The pipeline return IS the preview result since ADR-0046 (option/loading/hasData/error). */
export type PreviewResult = ChartPipelineResult;

/**
 * @param state - The editor working state.
 * @param socket - The Connection drilled into the editor.
 * @param theme - The MUI theme (for the theme base + palette).
 * @param legendSelection - The preview's runtime legend selection (ADR-0074 Legenden-Folge) —
 *   the preview owns its own local state, exactly like the live body.
 */
export function usePreviewOption(
    state: EditorState,
    socket: Connection,
    theme: Theme,
    legendSelection?: Record<string, boolean>,
): PreviewResult {
    // Resolve the COLLECTION theme + derived palette + tokens (ADR-0027).
    const { theme: collectionTheme, palette, themeTokens } = useEditorTheme(state, socket, theme);
    // The effective chart dark mode — resolved from the COLLECTION theme exactly like the live body.
    const themeDark = effectiveDarkMode(state.darkMode, collectionTheme.palette.mode) === 'dark';
    const themeBase = useMemo(() => {
        const base = buildEchartsTheme(collectionTheme, state.darkMode);
        base.color = palette;
        return base;
    }, [collectionTheme, palette, state.darkMode]);
    const pipelineTheme = useMemo(
        () => ({ palette, themeTokens, themeBase, themeDark }),
        [palette, themeTokens, themeBase, themeDark],
    );

    const getHistory = useMemo(() => createHistoryFetcher(socket), [socket]);

    // Values via direct socket subscription (plain-OID keyed) — the adapter's normalisation.
    const useValues = (oids: string[]): Record<string, unknown> => useSubscribedValues(oids, socket);

    const src = useMemo(() => editorSrc(state), [state]);
    const companions = useMemo(
        () => ({
            chartConfig: {
                pie: state.pie,
                // The section raws (ADR-0044) must ride along or the pipeline would silently
                // drop raw content the runtime folds (the ADR-0044 spec-review catch).
                titleRaw: state.titleRaw || undefined,
                legendRaw: state.legendRaw || undefined,
                tooltipRaw: state.tooltipRaw || undefined,
            },
            yAxes: state.yAxes,
            markLines: state.markLines,
            jsonSeriesStyle: state.jsonSeriesStyle,
            jsonHidden: state.jsonHidden,
            series: state.series,
        }),
        [state],
    );

    return useChartPipeline({ useValues, getHistory, theme: pipelineTheme }, src, companions, {
        maxPoints: PREVIEW_MAX_POINTS,
        legendSelection,
    });
}
