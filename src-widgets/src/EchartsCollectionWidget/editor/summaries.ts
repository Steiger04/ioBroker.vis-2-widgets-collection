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
import { familyOf } from '../optionBuilder';
import type { EditorState } from './editorState';
import type { SectionKey } from './validation';

/** Translate function signature (Generic.t). */
export type TFunc = (key: string, ...args: string[]) => string;

const trunc = (s: string, n: number): string => (s.length > n ? `${s.slice(0, Math.max(0, n - 1))}…` : s);

const joinNames = (names: (string | undefined)[], max = 2): string => {
    const shown = names.filter(Boolean).slice(0, max);
    const rest = names.filter(Boolean).length - shown.length;
    return shown.join(', ') + (rest > 0 ? ` +${rest}` : '');
};

/**
 * Compute the summary line per section.
 *
 * @param state - Current editor state.
 * @param t - Translation function (Generic.t).
 * @returns Map of section key → summary text (empty string = nothing useful to say).
 */
export const sectionSummaries = (state: EditorState, t: TFunc): Partial<Record<SectionKey, string>> => {
    const family = familyOf(state.chartType);
    const out: Partial<Record<SectionKey, string>> = {};

    // series
    if (family === 'radar') {
        out.series = joinNames(state.radar.indicators.map(i => i.name));
    } else {
        out.series = joinNames(state.series.map(s => s.name));
    }

    // data source (cartesian/pie only)
    if (state.mode === 'history') {
        out.dataSource = `${state.timeRange} · ${state.aggregate} · ${state.count}`;
    } else if (state.mode === 'live') {
        out.dataSource = t('echarts_mode_live');
    } else {
        out.dataSource = 'JSON';
    }

    // title (ADR-0021: its own section)
    const title = state.titleText.trim();
    out.title = title ? trunc(title, 24) : '';

    // legend (ADR-0021: its own section; position + symbol digest, or "off")
    if (state.legendShow) {
        const posLabel = t(`echarts_pos_${state.legendPos.replace(/([A-Z])/g, '_$1').toLowerCase()}`);
        out.legend = state.legend.icon ? `${posLabel} · ${state.legend.icon}` : posLabel;
    } else {
        out.legend = t('echarts_sum_off');
    }

    // tooltip
    out.tooltip =
        state.tooltipTrigger === 'none'
            ? t('echarts_sum_off')
            : `${state.tooltipTrigger}${state.tooltipUnits ? ` · ${state.tooltipUnits}` : ''}`;

    // axes & zoom (cartesian only)
    const ax0 = state.yAxes[0];
    const yBounds = ax0 ? `${ax0.min ?? 'auto'}–${ax0.max ?? 'auto'}` : 'auto–auto';
    const axesN = state.yAxes.length > 1 ? ` · ${state.yAxes.length} axes` : '';
    const zoom = [state.dataZoomSlider ? 'slider' : '', state.dataZoomInside ? 'inside' : ''].filter(Boolean).join('+');
    out.axesZoom = yBounds + axesN + (zoom ? ` · ${zoom}` : '');

    // family options
    if (family === 'gauge') {
        out.family = `${state.gauge.min ?? 0}–${state.gauge.max ?? 100}${state.gauge.unit ? ` ${state.gauge.unit}` : ''}`;
    } else if (family === 'pie') {
        out.family = state.pie.innerRadius
            ? `donut ${Math.round((state.pie.innerRadius ?? 0) * 100)}%`
            : state.pie.rose !== 'none'
              ? `rose · ${state.pie.rose}`
              : '';
    } else if (family === 'radar') {
        out.family = `${state.radar.shape ?? 'polygon'} · ${state.radar.splitNumber ?? 5}`;
    }

    // colours
    const paletteLabel =
        state.paletteSource === 'custom'
            ? t('echarts_palette_custom')
            : state.paletteSource === 'preset'
              ? state.palettePreset
              : t('echarts_palette_theme');
    out.colors = paletteLabel + (state.darkMode !== 'auto' ? ` · ${state.darkMode}` : '');

    // behaviour
    out.behavior = state.animation
        ? `${state.renderer} · ${state.animationDuration}ms`
        : `${state.renderer} · ${t('echarts_sum_off')}`;

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
