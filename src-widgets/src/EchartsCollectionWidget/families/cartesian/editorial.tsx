/**
 * Cartesian family editorial (ADR-0083 ticket 02) — rail slot, picker, validation, heal.
 *
 * @module EchartsCollectionWidget/families/cartesian/editorial
 * @remarks
 * The cartesian profile's editor half: the Axes & Zoom rail slot (the fat slot — its needs
 * define RailSlotProps), the line/bar/scatter picker glyphs, the cartesian validation branch
 * (stale series→axis bindings, Y min≥max — pushed onto series and the own slot), and the legacy chart-type heal ('cartesian' derives from the first series,
 * 'area'/'gauge'/'radar' become line).
 */
import type { FC } from 'react';

import type {
    EchartsCartesianType,
    EchartsChartType,
    LegacyChartType,
} from '../../../types/field-definitions/echarts-fields';
import AxesZoomSection from '../../editor/sections/AxesZoomSection';
import { effectiveCartesianType, effectiveStackName } from '../../stackMode';
import type { EditorState } from '../../editor/editorState';
import type { IssueMap } from '../../editor/issueTabs';
import { seriesMetaIssues } from '../../editor/seriesIssues';
import type { ValidateEditorInputs } from '../../editor/validation';
import type { TFunc } from '../../editor/summaries';
import type { FamilyEditorial } from '../editorial';

// The cartesian picker glyphs — hand-drawn monochrome SVG at currentColor so they theme with
// the editor and stay quiet (the one signature element; ADR-0008 r4).
const Glyph: FC<{ children: React.ReactNode }> = ({ children }) => (
    <svg
        viewBox="0 0 24 24"
        width={22}
        height={22}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
    >
        {children}
    </svg>
);
const LineGlyph: FC = () => (
    <Glyph>
        <polyline points="3,17 9,11 13,14 21,6" />
    </Glyph>
);
const BarGlyph: FC = () => (
    <Glyph>
        <line
            x1="6"
            y1="20"
            x2="6"
            y2="11"
        />
        <line
            x1="12"
            y1="20"
            x2="12"
            y2="5"
        />
        <line
            x1="18"
            y1="20"
            x2="18"
            y2="14"
        />
    </Glyph>
);
const ScatterGlyph: FC = () => (
    <Glyph>
        <circle
            cx="5"
            cy="16"
            r="1.4"
        />
        <circle
            cx="11"
            cy="8"
            r="1.4"
        />
        <circle
            cx="16"
            cy="13"
            r="1.4"
        />
        <circle
            cx="20"
            cy="5"
            r="1.4"
        />
    </Glyph>
);

/** The cartesian validation branch (ADR-0083: the family share of validateEditor). */
const validateCartesian = (state: EditorState, inputs?: ValidateEditorInputs): IssueMap => {
    const issues: IssueMap = {};
    const push = (section: string, key: string, ...args: string[]): void => {
        (issues[section] ??= []).push({ key, args: args.length ? args : undefined });
    };
    // Stale series→axis binding (Q6): a stored `yAxisIndex` beyond the axis array (reachable
    // via hand-edit blobs or an axis-delete race) silently renders on axis 1 — the builder
    // clamps `yi >= total` to 0, and the card's dropdown display clamps the same way. The
    // warning says WHY the dropdown disagrees with the stored value. Deliberately NO warning
    // in the 0-axes state: deleting every axis is legal, the builder's empty-fallback catches
    // it, and a chorus of per-series warnings would drown the real cases.
    if (state.yAxes.length) {
        state.series.forEach((s, i) => {
            if (typeof s.yAxisIndex === 'number' && s.yAxisIndex >= state.yAxes.length) {
                push('series', 'echarts_val_stale_yaxis', s.name || `${i + 1}`);
            }
        });
    }
    // Farbskala input error (ADR-0101 ticket 05): an entered Min ≥ Max — per series, on the
    // card's Stil tab. Serien-förmig JSON keeps the config in the name-keyed overlay: only the
    // visible payload series have a card (hidden ones render nothing, stale entries no card).
    const seriesFound =
        state.mode === 'json' && state.jsonKind !== 'table'
            ? (inputs?.jsonSeriesNames ?? Object.keys(state.jsonSeriesStyle))
                  .filter(name => !state.jsonHidden.includes(name))
                  .flatMap(name => {
                      const m = state.jsonSeriesStyle[name];
                      return m ? seriesMetaIssues(m, m.name || name) : [];
                  })
            : state.series.flatMap((s, i) => seriesMetaIssues(s, s.name || s.yPath || `${i + 1}`));
    if (seriesFound.length) {
        (issues.series ??= []).push(...seriesFound);
    }
    if (state.yAxes.some(ax => typeof ax.min === 'number' && typeof ax.max === 'number' && ax.min >= ax.max)) {
        push('axesZoom', 'echarts_val_yminmax');
    }
    // Balken-Stapelmodus Zeitachsen-Fall (ADR-0084 decision 6): ECharts staples by DATA INDEX as
    // soon as the base axis carries no category measure — on our time-axis path
    // (barInterval 'auto', raw [ts, value] pairs) series with diverging timestamps can draw
    // misaligned stacks, silently. NO hard lock (the alignment can be wanted) and no silent
    // rewrite: ONE advisory issue with the Ein-Klick-Fix „Balken-Intervall setzen" (the Data
    // source section owns the button — it dies with the issue once an interval or none is set).
    // Scoped like the bar cluster itself (Verlauf, effective bar chart); the effective-stacking
    // check mirrors the builder's resolution via the SHARED stackMode resolver.
    if (
        state.mode === 'history' &&
        state.chartType === 'bar' &&
        state.stackMode !== 'none' &&
        state.barInterval === 'auto' &&
        state.series.some(
            s =>
                effectiveCartesianType(s.type, 'bar') === 'bar' &&
                effectiveStackName(s.stack, state.stackMode, 0) !== undefined,
        )
    ) {
        push('dataSource', 'echarts_val_stack_timeaxis');
    }
    return issues;
};

/**
 * The cartesian axes & zoom summary line (ADR-0010; readable form B8, review 2026-11-03):
 * „Y auto · 3 Achsen · Zoom" — the first axis' bounds („auto" when neither is set), the axis
 * count from two axes on, and a zoom marker when either zoom mode is on.
 */
const summarizeAxesZoom = (state: EditorState, t: TFunc): string => {
    const ax0 = state.yAxes[0];
    const yBounds =
        ax0 && (ax0.min !== undefined || ax0.max !== undefined) ? `${ax0.min ?? 'auto'}–${ax0.max ?? 'auto'}` : 'auto';
    const axesN = state.yAxes.length > 1 ? ` · ${t('echarts_summary_axes', String(state.yAxes.length))}` : '';
    const zoom = state.dataZoomSlider || state.dataZoomInside ? ` · ${t('echarts_tab_zoom')}` : '';
    return `Y ${yBounds}${axesN}${zoom}`;
};

/**
 * Normalize legacy chartType values (ADR-0008 r4 + ADR-0071): the family-only 'cartesian'
 * derives its concrete type from the first series (default line); the removed 'area' type
 * maps to 'line' (area is a per-series fill mode now); the removed gauge/radar families
 * (ADR-0071) heal to 'line' — their oidN series (the gauge's scalar OID, the radar's
 * indicator OIDs) become ordinary cartesian line series downstream. In-memory only —
 * rewritten to a concrete type on save.
 */
const healCartesianChartType = (
    chartType: Exclude<LegacyChartType, undefined>,
    firstSeriesType?: EchartsCartesianType,
): EchartsChartType =>
    chartType === 'cartesian'
        ? (firstSeriesType ?? 'line')
        : chartType === 'area' || chartType === 'gauge' || chartType === 'radar'
          ? 'line'
          : chartType;

/** The cartesian family's editorial half. */
export const CARTESIAN_EDITORIAL: FamilyEditorial<'axesZoom'> = {
    // The series card (ADR-0100): every tab, type/colour/axis authored.
    seriesCard: {
        tabs: ['basis', 'daten', 'stil', 'format', 'json'],
        type: true,
        color: true,
        axis: true,
        ring: false,
    },
    railSlots: [
        {
            key: 'axesZoom',
            titleKey: 'echarts_sec_axes_zoom',
            render: props => <AxesZoomSection {...props} />,
            summarize: summarizeAxesZoom,
        },
    ],
    picker: [
        { value: 'line', label: 'echarts_type_line', icon: <LineGlyph /> },
        { value: 'bar', label: 'echarts_type_bar', icon: <BarGlyph /> },
        { value: 'scatter', label: 'echarts_type_scatter', icon: <ScatterGlyph /> },
    ],
    validate: validateCartesian,
    healChartType: healCartesianChartType,
};
