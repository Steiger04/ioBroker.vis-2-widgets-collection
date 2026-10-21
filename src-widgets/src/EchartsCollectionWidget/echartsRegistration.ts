/**
 * echarts v6 tree-shaken registration (v2 multi-type set).
 *
 * @module EchartsCollectionWidget/echartsRegistration
 * @remarks
 * Side-effect module: importing it registers the chart / component / feature / renderer set
 * on the global echarts core. `use()` is global and idempotent, so importing this once
 * anywhere in the widget bundle is enough — it is imported once by `EChart.tsx`.
 *
 * Since ADR-0083 the registration is split: this module owns the chart-wide BASIS set (every
 * family's presentation components + both renderers); each family core registers its own
 * charts and coordinate systems (`echartsUse` — cartesian: line/bar/scatter, grid, dataZoom,
 * marks, visualMap · pie: PieChart). The registered result is globally identical to the
 * former flat list.
 *
 * HARD RULE: never `import * as echarts from 'echarts'` anywhere in the widget source —
 * one stray full import silently restores the full bundle and undoes the tree-shaking.
 */
import { use } from 'echarts/core';
import {
    TooltipComponent,
    LegendComponent,
    TitleComponent,
    AxisPointerComponent,
    GraphicComponent,
    ToolboxComponent,
    AriaComponent,
} from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer, SVGRenderer } from 'echarts/renderers';

import { FAMILY_CORES } from './families/cores';

// echarts' `use` registers components on the global core — NOT React's use() hook,
// so the react-hooks/rules-of-hooks lint rule does not apply here.
// eslint-disable-next-line react-hooks/rules-of-hooks
use([
    // Presentation components (GUI + Advanced JSON) — the chart-wide basis every family reaches
    TooltipComponent,
    LegendComponent,
    TitleComponent,
    AxisPointerComponent,
    GraphicComponent,
    ToolboxComponent,
    AriaComponent,
    // Features + renderer
    LabelLayout,
    UniversalTransition,
    CanvasRenderer,
    SVGRenderer,
]);

// The families' own charts + coordinate systems (ADR-0083): cartesian line/bar/scatter, grid,
// dataZoom, marks and visualMap · pie. GaugeChart/RadarChart died with their families (ADR-0071).
for (const core of Object.values(FAMILY_CORES)) {
    core.echartsUse();
}

export {}; // side-effect only
