/**
 * Cartesian family core (ADR-0083) — data-path share, option build, echarts registration.
 *
 * @module EchartsCollectionWidget/families/cartesian/core
 * @remarks
 * The cartesian profile (line/bar/scatter — per-series render modes of one coordinate
 * system). The data-path share counts its markings in every boundary loss (markLines anchor
 * on cartesian Y-axes, F10); the G build delegates to the cartesian family builder; the
 * presentation fragment assembles the cartesian share of the presentation; the echarts
 * registration covers the cartesian coordinate system plus dataZoom, marks and the
 * value→colour scale.
 */
import { use } from 'echarts/core';
import { BarChart, LineChart, ScatterChart } from 'echarts/charts';
import {
    DataZoomComponent,
    DataZoomInsideComponent,
    DataZoomSliderComponent,
    GridComponent,
    MarkAreaComponent,
    MarkLineComponent,
    MarkPointComponent,
    VisualMapComponent,
} from 'echarts/components';

import { familyDataPath } from '../dataPath';
import type { FamilyCoreOf } from '../types';
import type { CartesianFragment, PresentationBase } from '../../optionBuilders/types';
import { buildCartesianOption } from '../../optionBuilders/cartesian';
import { cartesianPresentationFragment } from './fragment';

/** The cartesian family's runtime core. */
export const CARTESIAN_CORE: FamilyCoreOf<'cartesian'> = {
    dataPath: familyDataPath(state => state.markLines.length),
    // The dispatch guarantees the cartesian arm — the narrowing cast is that invariant.
    buildOption: input =>
        buildCartesianOption(input.series, input.meta, input.p as PresentationBase & CartesianFragment),
    presentationFragment: cartesianPresentationFragment,
    echartsUse: () => {
        // echarts' `use` registers components on the global core — NOT React's use() hook,
        // so the react-hooks/rules-of-hooks lint rule does not apply here.
        // eslint-disable-next-line react-hooks/rules-of-hooks
        use([
            // Charts (cartesian line/bar/scatter; gauge/radar removed by ADR-0071)
            LineChart,
            BarChart,
            ScatterChart,
            // The cartesian coordinate system
            GridComponent,
            // Interaction
            DataZoomComponent,
            DataZoomSliderComponent,
            DataZoomInsideComponent,
            MarkLineComponent,
            MarkAreaComponent,
            MarkPointComponent,
            // value→colour scales
            VisualMapComponent,
        ]);
    },
};
