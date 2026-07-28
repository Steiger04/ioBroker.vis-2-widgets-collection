/**
 * echarts v6 tree-shaken registration (v2 multi-type set).
 *
 * @module EchartsCollectionWidget/echartsRegistration
 * @remarks
 * Side-effect module: importing it registers the chart / component / feature / renderer
 * set on the global echarts core. `use()` is global and idempotent, so importing this once
 * anywhere in the widget bundle is enough — it is imported once by `EChart.tsx`.
 *
 * The v2 set (ADR-0008) covers every shipped chart family — cartesian (line/bar/area via
 * LineChart+BarChart), PieChart, GaugeChart, RadarChart — plus the presentation components
 * the GUI and the Advanced JSON escape hatch reach for: the cartesian coordinate system
 * (GridComponent), dataZoom, mark lines/areas/points, toolbox, visualMap (value→colour
 * scales), the radar coordinate system (RadarComponent), graphic (custom U shapes), and
 * aria. Scatter is deferred (ADR-0008) and therefore not registered.
 *
 * HARD RULE: never `import * as echarts from 'echarts'` anywhere in the widget source —
 * one stray full import silently restores the full bundle and undoes the tree-shaking.
 */
import { use } from 'echarts/core';
import { BarChart, GaugeChart, LineChart, PieChart, RadarChart } from 'echarts/charts';
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
    RadarComponent,
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
    // Charts (cartesian line/bar/area use LineChart + BarChart; area is line + areaStyle)
    LineChart,
    BarChart,
    PieChart,
    GaugeChart,
    RadarChart,
    // Coordinate systems
    GridComponent,
    RadarComponent,
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
