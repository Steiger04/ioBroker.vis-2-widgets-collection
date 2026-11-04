/**
 * Type pins for the section slices (ADR-0049) — the machine-readable field-ownership
 * inventory of every rendering surface over the working copy.
 *
 * @module EchartsCollectionWidget/editor/slices.test
 * @remarks
 * Three pin kinds per slice: (1) an EQUALITY pin with the key list written out — growing a
 * slice forces a test touch, so ownership cannot drift silently; (2) an `@ts-expect-error`
 * NEGATIVE proving a foreign write no longer compiles (if the error ever disappears, tsc
 * flags the unused directive — the guard is self-checking); (3) the rail-pass-through
 * POSITIVE: the full-state `SetEditor` satisfies every slice setter via parameter
 * contravariance, and the full `EditorState` satisfies every slice. These bite through the
 * tsc gate; at vitest runtime `expectTypeOf` is inert. Component-mount tests are
 * consciously deferred (ADR-0049).
 */
import { describe, expectTypeOf, it } from 'vitest';

import type { EditorState, SetEditor } from './editorState';
import type { EditorThemeSource } from './useEditorTheme';
import type { AxesZoomSlice } from './sections/AxesZoomSection';
import type { BehaviorSlice } from './sections/BehaviorSection';
import type { ColorsSlice } from './sections/ColorsSection';
import type { DataSourceSlice } from './sections/DataSourceSection';
import type { PieOptionsSlice } from './sections/FamilySections';
import type { LegendSlice } from './sections/LegendSection';
import type { SeriesSlice } from './sections/SeriesSection';
import type { HistorySeriesListSlice } from './sections/series/sources/history';
import type { JsonSeriesListSlice } from './sections/series/sources/json';
import type { PieSliceRowsSlice } from './sections/series/PieSliceRows';
import type { BoundaryPickerSlice } from './controls';
import type { TitleSlice } from './sections/TitleSection';
import type { ToolboxSlice } from './sections/ToolboxSection';
import type { TooltipSlice } from './sections/TooltipSection';

describe('section slices (ADR-0049)', () => {
    it('TooltipSlice equals the tooltip section ownership', () => {
        expectTypeOf<TooltipSlice>().toEqualTypeOf<
            Pick<
                EditorState,
                | 'chartType'
                | 'tooltipTrigger'
                | 'tooltipDecimals'
                | 'tooltipUnits'
                | 'tooltipBgColor'
                | 'tooltipNoInterpolate'
                | 'tooltipHideNulls'
                | 'decimalComma'
                | 'tooltipTemplate'
                | 'tooltipRaw'
                | 'tooltipSnippets'
                | 'xAxis'
                | 'paletteSource'
                | 'palettePreset'
                | 'paletteCustom'
                | 'darkMode'
            >
        >();
    });

    it('TitleSlice equals the title section ownership', () => {
        expectTypeOf<TitleSlice>().toEqualTypeOf<
            Pick<
                EditorState,
                | 'titleText'
                | 'titlePos'
                | 'titleDx'
                | 'titleDy'
                | 'titleColor'
                | 'titleFontSize'
                | 'titleWeight'
                | 'titleFontStyle'
                | 'titleRaw'
                | 'titleSnippets'
                | 'paletteSource'
                | 'palettePreset'
                | 'paletteCustom'
                | 'darkMode'
            >
        >();
    });

    it('AxesZoomSlice equals the axes & zoom section ownership', () => {
        expectTypeOf<AxesZoomSlice>().toEqualTypeOf<
            Pick<
                EditorState,
                // The structure-event view (ADR-0099) reads the family and the data point.
                | 'chartType'
                | 'jsonOid'
                | 'mode'
                | 'jsonKind'
                | 'series'
                | 'yAxes'
                | 'axisSlotMemory'
                | 'xAxis'
                | 'markLines'
                | 'dataZoomSlider'
                | 'dataZoomInside'
                | 'zoomResetAfterIdle'
                | 'jsonHidden'
                | 'jsonSeriesStyle'
                | 'paletteSource'
                | 'palettePreset'
                | 'paletteCustom'
                | 'darkMode'
            >
        >();
    });

    it('LegendSlice equals the legend section ownership', () => {
        expectTypeOf<LegendSlice>().toEqualTypeOf<
            Pick<
                EditorState,
                | 'chartType'
                | 'legendShow'
                | 'legendShowValues'
                | 'legendPos'
                | 'legend'
                | 'legendRaw'
                | 'legendSnippets'
                | 'paletteSource'
                | 'palettePreset'
                | 'paletteCustom'
                | 'darkMode'
            >
        >();
    });

    it('DataSourceSlice equals the data source section ownership', () => {
        expectTypeOf<DataSourceSlice>().toEqualTypeOf<
            Pick<
                EditorState,
                | 'mode'
                | 'chartType'
                | 'timeType'
                | 'timeRange'
                | 'relativeEnd'
                | 'staticStart'
                | 'staticEnd'
                | 'resolutionStep'
                | 'percentileValue'
                | 'integralUnit'
                | 'integralInterpolation'
                | 'barInterval'
                | 'barDiff'
                | 'aggregate'
                | 'count'
                | 'refreshMs'
                | 'ignoreNull'
                | 'jsonKind'
                | 'jsonRowPath'
                | 'jsonXPath'
                | 'jsonOid'
            >
        >();
    });

    it('ColorsSlice equals the colours section ownership', () => {
        // No chartType: with the chart-level colour scale gone (ADR-0101) the section renders
        // the same three tabs for every family — it no longer reads the chart type.
        expectTypeOf<ColorsSlice>().toEqualTypeOf<
            Pick<EditorState, 'paletteSource' | 'palettePreset' | 'paletteCustom' | 'bgColor' | 'darkMode' | 'frame'>
        >();
    });

    it('BehaviorSlice equals the behaviour section ownership', () => {
        expectTypeOf<BehaviorSlice>().toEqualTypeOf<
            Pick<EditorState, 'animation' | 'animationDuration' | 'animationEasing' | 'renderer'>
        >();
    });

    it('ToolboxSlice equals the toolbox section ownership', () => {
        expectTypeOf<ToolboxSlice>().toEqualTypeOf<
            Pick<
                EditorState,
                'chartType' | 'toolbox' | 'darkMode' | 'paletteSource' | 'palettePreset' | 'paletteCustom'
            >
        >();
    });

    it('the family options slice equals its section ownership', () => {
        expectTypeOf<PieOptionsSlice>().toEqualTypeOf<Pick<EditorState, 'pie' | 'mode' | 'jsonKind'>>();
    });

    it('SeriesSlice equals the series dispatcher ownership (own footprint + sub-view union)', () => {
        expectTypeOf<SeriesSlice>().toEqualTypeOf<
            Pick<
                EditorState,
                | 'chartType'
                | 'mode'
                | 'series'
                | 'yAxes'
                | 'axisSlotMemory'
                | 'markLines'
                | 'pie'
                | 'jsonOid'
                | 'jsonKind'
                | 'jsonHidden'
                | 'jsonSeriesStyle'
                | 'paletteSource'
                | 'palettePreset'
                | 'paletteCustom'
                | 'darkMode'
                // ADR-0072: the Daten cluster's Erben-Override inherit targets (read-only).
                | 'aggregate'
                | 'percentileValue'
                | 'integralUnit'
                | 'integralInterpolation'
                // The NULL select's inherit entry names the chart-level target (toter-Regler fix).
                | 'ignoreNull'
                // ADR-0084 addendum 3: the Stapelmodus head writes both; the cards inherit the mode.
                | 'stackMode'
                | 'stackSum'
            >
        >();
    });

    it('the series sub-view slices equal their surfaces ownership', () => {
        // ADR-0082 decision 3: the whole-pie raw left the slice rows for the family section —
        // the slice view no longer touches the pie blob.
        expectTypeOf<PieSliceRowsSlice>().toEqualTypeOf<Pick<EditorState, 'series' | 'mode'>>();
        expectTypeOf<JsonSeriesListSlice>().toEqualTypeOf<
            Pick<
                EditorState,
                'jsonOid' | 'chartType' | 'yAxes' | 'jsonHidden' | 'jsonSeriesStyle' | 'ignoreNull' | 'stackMode'
            >
        >();
        expectTypeOf<HistorySeriesListSlice>().toEqualTypeOf<
            Pick<
                EditorState,
                | 'chartType'
                | 'mode'
                | 'series'
                | 'yAxes'
                // ADR-0072: the Daten cluster reads the chart-level Voreinstellung.
                | 'aggregate'
                | 'percentileValue'
                | 'integralUnit'
                | 'integralInterpolation'
                // The NULL select's inherit entry names the chart-level target (toter-Regler fix).
                | 'ignoreNull'
                // ADR-0084: the bar card's inherit entry names the Stapelmodus resolution.
                | 'stackMode'
            >
        >();
    });

    it('the pinned rail selectors equal their ownership', () => {
        // The three boundary pickers share one slice (ADR-0099): the crossing is a structure
        // event — its view reads the structural fields, the reset writes the whole data path.
        type Boundary = Pick<
            EditorState,
            | 'chartType'
            | 'mode'
            | 'jsonKind'
            | 'series'
            | 'yAxes'
            | 'markLines'
            | 'axisSlotMemory'
            | 'jsonSeriesStyle'
            | 'jsonHidden'
            | 'jsonOid'
            | 'jsonRowPath'
            | 'jsonXPath'
        >;
        // One slice for all three boundary pickers (chart type, data mode, payload family).
        expectTypeOf<BoundaryPickerSlice>().toEqualTypeOf<Boundary>();
    });

    it('EditorThemeSource equals the theme-resolution read footprint', () => {
        expectTypeOf<EditorThemeSource>().toEqualTypeOf<
            Pick<EditorState, 'paletteSource' | 'palettePreset' | 'paletteCustom' | 'darkMode'>
        >();
    });

    it('foreign writes do not compile', () => {
        const tooltip: SetEditor<TooltipSlice> = () => undefined;
        // @ts-expect-error legendShow is not the tooltip section's field
        tooltip({ legendShow: false });

        const title: SetEditor<TitleSlice> = () => undefined;
        // @ts-expect-error tooltipTemplate is not the title section's field
        title({ tooltipTemplate: '{c}' });

        const axes: SetEditor<AxesZoomSlice> = () => undefined;
        // @ts-expect-error titleText is not the axes & zoom section's field
        axes({ titleText: 'no' });

        const legend: SetEditor<LegendSlice> = () => undefined;
        // @ts-expect-error tooltipDecimals is not the legend section's field
        legend({ tooltipDecimals: 2 });

        const dataSource: SetEditor<DataSourceSlice> = () => undefined;
        // @ts-expect-error series is not the data source section's field
        dataSource({ series: [] });

        const colors: SetEditor<ColorsSlice> = () => undefined;
        // @ts-expect-error animation is not the colours section's field
        colors({ animation: false });

        const behavior: SetEditor<BehaviorSlice> = () => undefined;
        // @ts-expect-error bgColor is not the behaviour section's field
        behavior({ bgColor: '#000' });

        const toolbox: SetEditor<ToolboxSlice> = () => undefined;
        // @ts-expect-error markLines is not the toolbox section's field
        toolbox({ markLines: [] });

        const pie: SetEditor<PieOptionsSlice> = () => undefined;
        // @ts-expect-error legendShow is not the pie options section's field
        pie({ legendShow: true });

        const series: SetEditor<SeriesSlice> = () => undefined;
        // @ts-expect-error animation is not the series dispatcher's field
        series({ animation: false });

        const pieRows: SetEditor<PieSliceRowsSlice> = () => undefined;
        // @ts-expect-error yAxes is not the pie slice rows' field
        pieRows({ yAxes: [] });

        const boundaryPicker: SetEditor<BoundaryPickerSlice> = () => undefined;
        // @ts-expect-error titleText is not a boundary picker's field
        boundaryPicker({ titleText: 'no' });
    });

    it('the read-only series surfaces reject foreign reads', () => {
        // No setter props — their honesty is the read side (writes go through dispatcher callbacks).
        expectTypeOf<JsonSeriesListSlice>().not.toHaveProperty('animation');
        expectTypeOf<HistorySeriesListSlice>().not.toHaveProperty('animation');
    });

    it('the rail pass-through compiles: full state and full setter satisfy every slice', () => {
        const railSet: SetEditor = () => undefined;
        const asTooltip: SetEditor<TooltipSlice> = railSet;
        const asTitle: SetEditor<TitleSlice> = railSet;
        const asAxes: SetEditor<AxesZoomSlice> = railSet;
        const asLegend: SetEditor<LegendSlice> = railSet;
        const asDataSource: SetEditor<DataSourceSlice> = railSet;
        const asColors: SetEditor<ColorsSlice> = railSet;
        const asBehavior: SetEditor<BehaviorSlice> = railSet;
        const asToolbox: SetEditor<ToolboxSlice> = railSet;
        const asPie: SetEditor<PieOptionsSlice> = railSet;
        const asSeries: SetEditor<SeriesSlice> = railSet;
        const asPieRows: SetEditor<PieSliceRowsSlice> = railSet;
        const asBoundaryPicker: SetEditor<BoundaryPickerSlice> = railSet;
        const railState = {} as EditorState;
        const tooltipState: TooltipSlice = railState;
        const titleState: TitleSlice = railState;
        const axesState: AxesZoomSlice = railState;
        const legendState: LegendSlice = railState;
        const dataSourceState: DataSourceSlice = railState;
        const colorsState: ColorsSlice = railState;
        const behaviorState: BehaviorSlice = railState;
        const toolboxState: ToolboxSlice = railState;
        const pieState: PieOptionsSlice = railState;
        const seriesState: SeriesSlice = railState;
        const pieRowsState: PieSliceRowsSlice = railState;
        const jsonCardsState: JsonSeriesListSlice = railState;
        const cartesianListState: HistorySeriesListSlice = railState;
        const boundaryPickerState: BoundaryPickerSlice = railState;
        // Reference everything so lint stays quiet — the assignments ARE the assertion.
        expectTypeOf([
            asTooltip,
            asTitle,
            asAxes,
            asLegend,
            asDataSource,
            asColors,
            asBehavior,
            asToolbox,
            asPie,
            asSeries,
            asPieRows,
            asBoundaryPicker,
        ]).not.toBeAny();
        expectTypeOf([
            tooltipState,
            titleState,
            axesState,
            legendState,
            dataSourceState,
            colorsState,
            behaviorState,
            toolboxState,
            pieState,
            seriesState,
            pieRowsState,
            jsonCardsState,
            cartesianListState,
            boundaryPickerState,
        ]).not.toBeAny();
    });
});
