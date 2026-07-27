/**
 * echarts v6 tree-shaken registration (comfortable set).
 *
 * @module EchartsCollectionWidget/echartsRegistration
 * @remarks
 * Side-effect module: importing it registers the chart / component / feature / renderer
 * set on the global echarts core. `use()` is global and idempotent, so importing this once
 * anywhere in the widget bundle is enough — it is imported once by `EChart.tsx`.
 *
 * The set is the "comfortable" tier (map decision 01): the line time-series plus the
 * presentation components users typically reach for via the Advanced JSON escape hatch
 * (dataZoom, mark lines/points, toolbox, aria). This keeps Advanced JSON working out of
 * the box without dragging in the full ~1 MB bundle.
 *
 * HARD RULE: never `import * as echarts from 'echarts'` anywhere in the widget source —
 * one stray full import silently restores the full bundle and undoes the tree-shaking.
 */
import { use } from 'echarts/core';
import { LineChart } from 'echarts/charts';
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
    MarkPointComponent,
    ToolboxComponent,
    AriaComponent,
} from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

// echarts' `use` registers components on the global core — NOT React's use() hook,
// so the react-hooks/rules-of-hooks lint rule does not apply here.
// eslint-disable-next-line react-hooks/rules-of-hooks
use([
    LineChart,
    GridComponent,
    TooltipComponent,
    LegendComponent,
    TitleComponent,
    AxisPointerComponent,
    DataZoomComponent,
    DataZoomSliderComponent,
    DataZoomInsideComponent,
    MarkLineComponent,
    MarkPointComponent,
    ToolboxComponent,
    AriaComponent,
    LabelLayout,
    UniversalTransition,
    CanvasRenderer,
]);

export {}; // side-effect only
