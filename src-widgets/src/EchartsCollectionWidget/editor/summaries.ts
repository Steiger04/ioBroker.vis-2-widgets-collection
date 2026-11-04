/**
 * Summary lines for the v3 configurator sections (ADR-0010).
 *
 * @module EchartsCollectionWidget/editor/summaries
 * @remarks
 * A collapsed section shows a one-line digest of its effective values, so the rail stays scannable
 * without expanding anything. Pure functions over the working state; values are joined with ` · `
 * and truncated with ellipsis. A section that cannot say anything useful collapsed does not
 * deserve to be a section.
 */
import { hasAggregateOverride } from '../seriesDataOverrides';
import { editorialOf } from '../families/editorial';
import type { EditorState } from './editorState';
import type { SectionKey } from './validation';

/** Translate function signature (Generic.t). */
export type TFunc = (key: string, ...args: string[]) => string;

const trunc = (s: string, n: number): string => (s.length > n ? `${s.slice(0, Math.max(0, n - 1))}…` : s);

/**
 * The series count over the data path's own sight: serien-förmig JSON counts its visible payload
 * names (the payload owns the series, `state.series` stays empty); history and the table family
 * count the configured series (table rows map onto `state.series`).
 */
const visibleSeriesCount = (state: EditorState, visibleJsonNames: readonly string[]): number =>
    state.mode === 'json' && state.jsonKind !== 'table' ? visibleJsonNames.length : state.series.length;

/** „1 Serie" / „N Serien". */
const seriesCountLabel = (count: number, t: TFunc): string =>
    count === 1 ? t('echarts_sum_series_one') : t('echarts_sum_series', String(count));

/**
 * The preview header digest „{count} · {mode} · {renderer}" — what the preview currently shows.
 *
 * @param state - Current editor state.
 * @param visibleJsonNames - Serien-förmig JSON: the payload names the chart draws (hidden ones removed).
 * @param t - Translation function (Generic.t).
 */
export const previewHeaderMeta = (state: EditorState, visibleJsonNames: readonly string[], t: TFunc): string =>
    [
        seriesCountLabel(visibleSeriesCount(state, visibleJsonNames), t),
        t(`echarts_mode_${state.mode}`),
        t(`echarts_renderer_${state.renderer}`),
    ].join(' · ');

/** The problems counter of the modal footer — „1 Problem" / „N Probleme". */
export const issueCountLabel = (count: number, t: TFunc): string =>
    count === 1 ? t('theme_studio_problems_one') : t('theme_studio_problems', String(count));

/**
 * Compute the summary line per section.
 *
 * @param state - Current editor state.
 * @param t - Translation function (Generic.t).
 * @param jsonSeriesNames - Serien-förmig JSON: the payload's series names (the payload owns the
 *  series there, `state.series` stays empty) — the Series digest counts the visible ones.
 * @returns Map of section key → summary text (empty string = nothing useful to say).
 */
export const sectionSummaries = (
    state: EditorState,
    t: TFunc,
    jsonSeriesNames: readonly string[] = [],
): Partial<Record<SectionKey, string>> => {
    const out: Partial<Record<SectionKey, string>> = {};

    // series (B8, review 2026-11-03): the visible series count over the data path's own sight —
    // serien-förmig JSON counts the payload names minus the hidden ones.
    out.series = seriesCountLabel(
        visibleSeriesCount(
            state,
            jsonSeriesNames.filter(n => !state.jsonHidden.includes(n)),
        ),
        t,
    );

    // data source (cartesian/pie only) — the chart-level Voreinstellung digest (ADR-0072):
    // series with their own aggregate-cluster overrides append a counter; the line itself
    // keeps showing the DEFAULT every inheriting series uses.
    if (state.mode === 'history') {
        const own = state.series.filter(s => hasAggregateOverride(s)).length;
        out.dataSource = `${state.timeRange} · ${t(`echarts_agg_${state.aggregate}`)} · ${state.count}${
            own ? ` · ${t('echarts_datasource_own_count', String(own))}` : ''
        }`;
    } else if (state.mode === 'json' && state.jsonKind === 'table') {
        // Tabellarisch (ADR-0075): the Zuordnung digest — the family, the bound Y columns,
        // the X column (or the row index when unset).
        const n = state.series.filter(s => s.yPath).length;
        out.dataSource = `${t('echarts_json_kind_table')} · ${n} ${t('echarts_series')}${
            state.jsonXPath ? ` · X: ${state.jsonXPath}` : ''
        }`;
    } else {
        out.dataSource = 'JSON';
    }

    // title (ADR-0021: its own section)
    const title = state.titleText.trim();
    out.title = title ? trunc(title, 24) : t('echarts_sum_off');

    // legend (ADR-0021: its own section; position + symbol digest, or "off") — the icon by its
    // option label (B8), not the echarts symbol id
    if (state.legendShow) {
        const posLabel = t(`echarts_pos_${state.legendPos.replace(/([A-Z])/g, '_$1').toLowerCase()}`);
        out.legend = state.legend.icon ? `${posLabel} · ${t(`echarts_legend_icon_${state.legend.icon}`)}` : posLabel;
    } else {
        out.legend = t('echarts_sum_off');
    }

    // tooltip (the trigger label reuses the Tooltip section's own option keys)
    out.tooltip =
        state.tooltipTrigger === 'none'
            ? t('echarts_sum_off')
            : `${t(`echarts_tooltip_${state.tooltipTrigger}`)}${state.tooltipUnits ? ` · ${state.tooltipUnits}` : ''}`;

    // family slots (ADR-0083): the profile owns its rail slots' summary lines — the former
    // axes & zoom (cartesian) and family options (pie) branches.
    for (const slot of editorialOf(state.chartType).railSlots) {
        out[slot.key] = slot.summarize(state, t);
    }

    // colours
    const paletteLabel =
        state.paletteSource === 'custom'
            ? t('echarts_palette_custom')
            : state.paletteSource === 'preset'
              ? state.palettePreset
              : t('echarts_palette_theme');
    out.colors = paletteLabel + (state.darkMode !== 'auto' ? ` · ${t(`echarts_dark_${state.darkMode}`)}` : '');

    // behaviour (B8): „Animation aus · Canvas" — the switch named, the renderer by its label
    const animation = state.animation
        ? t('echarts_sum_animation', String(state.animationDuration))
        : t('echarts_sum_animation_off');
    out.behavior = `${animation} · ${t(`echarts_renderer_${state.renderer}`)}`;

    // toolbox (ADR-0045): "off", or "on · n features · position"
    if (state.toolbox.show) {
        const features = state.toolbox.features ?? {};
        const n = Object.values(features).filter(f => f?.show).length;
        const posLabel = t(`echarts_pos_${(state.toolbox.pos ?? 'topRight').replace(/([A-Z])/g, '_$1').toLowerCase()}`);
        out.toolbox = `${t('echarts_sum_on')} · ${n} ${t('echarts_toolbox_features')} · ${posLabel}`;
    } else {
        out.toolbox = t('echarts_sum_off');
    }

    return out;
};
