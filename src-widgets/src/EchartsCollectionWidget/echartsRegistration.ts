/**
 * echarts v6 tree-shaken registration (v2 multi-type set).
 *
 * @module EchartsCollectionWidget/echartsRegistration
 * @remarks
 * Side-effect module: importing it registers the chart / component / feature / renderer
 * set on the global echarts core. `use()` is global and idempotent, so importing this once
 * anywhere in the widget bundle is enough — it is imported once by `EChart.tsx`.
 *
 * The set (ADR-0008, widened by ADR-0060/0071) covers every shipped chart family — cartesian
 * (line/bar/scatter via LineChart+BarChart+ScatterChart) and PieChart — plus the presentation
 * components the GUI and the raw escape hatches reach for: the cartesian coordinate system
 * (GridComponent), dataZoom, mark lines/areas/points, toolbox, visualMap (value→colour
 * scales), graphic (custom shapes), and aria. (GaugeChart/RadarChart died with their
 * families, ADR-0071.)
 *
 * HARD RULE: never `import * as echarts from 'echarts'` anywhere in the widget source —
 * one stray full import silently restores the full bundle and undoes the tree-shaking.
 */
import { use } from 'echarts/core';
import { BarChart, LineChart, PieChart, ScatterChart } from 'echarts/charts';
import {
    GridComponent,
    TooltipComponent,
    LegendComponent,
    TitleComponent,
    AxisPointerComponent,
    DataZoomComponent,
    DataZoomSliderComponent,
    DataZoomInsideComponent,
    MarkLineComponent,
    MarkAreaComponent,
    MarkPointComponent,
    VisualMapComponent,
    GraphicComponent,
    ToolboxComponent,
    AriaComponent,
} from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer, SVGRenderer } from 'echarts/renderers';

// echarts' `use` registers components on the global core — NOT React's use() hook,
// so the react-hooks/rules-of-hooks lint rule does not apply here.
// eslint-disable-next-line react-hooks/rules-of-hooks
use([
    // Charts (cartesian line/bar/scatter + pie; gauge/radar removed by ADR-0071)
    LineChart,
    BarChart,
    ScatterChart,
    PieChart,
    // Coordinate systems
    GridComponent,
    // Presentation components (GUI + Advanced JSON)
    TooltipComponent,
    LegendComponent,
    TitleComponent,
    AxisPointerComponent,
    VisualMapComponent,
    GraphicComponent,
    // Interaction
    DataZoomComponent,
    DataZoomSliderComponent,
    DataZoomInsideComponent,
    MarkLineComponent,
    MarkAreaComponent,
    MarkPointComponent,
    ToolboxComponent,
    AriaComponent,
    // Features + renderer
    LabelLayout,
    UniversalTransition,
    CanvasRenderer,
    SVGRenderer,
]);

export {}; // side-effect only
