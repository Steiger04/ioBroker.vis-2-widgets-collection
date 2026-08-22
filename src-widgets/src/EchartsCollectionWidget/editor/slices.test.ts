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
import type { GaugeOptionsSlice, PieOptionsSlice, RadarOptionsSlice } from './sections/FamilySections';
import type { LegendSlice } from './sections/LegendSection';
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
                | 'tooltipTemplate'
                | 'tooltipRaw'
                | 'tooltipSnippets'
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
                | 'mode'
                | 'series'
                | 'yAxes'
                | 'xAxis'
                | 'markLines'
                | 'dataZoomSlider'
                | 'dataZoomInside'
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
                | 'legendShow'
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
            Pick<EditorState, 'mode' | 'timeRange' | 'aggregate' | 'count' | 'refreshMs' | 'ignoreNull' | 'jsonOid'>
        >();
    });

    it('ColorsSlice equals the colours section ownership', () => {
        expectTypeOf<ColorsSlice>().toEqualTypeOf<
            Pick<
                EditorState,
                'chartType' | 'paletteSource' | 'palettePreset' | 'paletteCustom' | 'bgColor' | 'darkMode' | 'visualMap'
            >
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

    it('the family options slices equal their sections ownership', () => {
        expectTypeOf<GaugeOptionsSlice>().toEqualTypeOf<Pick<EditorState, 'gauge'>>();
        expectTypeOf<PieOptionsSlice>().toEqualTypeOf<Pick<EditorState, 'pie'>>();
        expectTypeOf<RadarOptionsSlice>().toEqualTypeOf<Pick<EditorState, 'radar' | 'radarRaw' | 'radarSnippets'>>();
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

        const gauge: SetEditor<GaugeOptionsSlice> = () => undefined;
        // @ts-expect-error pie is not the gauge options section's field
        gauge({ pie: {} as PieOptionsSlice['pie'] });

        const radar: SetEditor<RadarOptionsSlice> = () => undefined;
        // @ts-expect-error gauge is not the radar options section's field
        radar({ gauge: {} as GaugeOptionsSlice['gauge'] });
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
        const asGauge: SetEditor<GaugeOptionsSlice> = railSet;
        const asPie: SetEditor<PieOptionsSlice> = railSet;
        const asRadar: SetEditor<RadarOptionsSlice> = railSet;
        const railState = {} as EditorState;
        const tooltipState: TooltipSlice = railState;
        const titleState: TitleSlice = railState;
        const axesState: AxesZoomSlice = railState;
        const legendState: LegendSlice = railState;
        const dataSourceState: DataSourceSlice = railState;
        const colorsState: ColorsSlice = railState;
        const behaviorState: BehaviorSlice = railState;
        const toolboxState: ToolboxSlice = railState;
        const gaugeState: GaugeOptionsSlice = railState;
        const pieState: PieOptionsSlice = railState;
        const radarState: RadarOptionsSlice = railState;
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
            asGauge,
            asPie,
            asRadar,
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
            gaugeState,
            pieState,
            radarState,
        ]).not.toBeAny();
    });
});
