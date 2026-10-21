/**
 * Pie family core (ADR-0083) — data-path share, option build, echarts registration.
 *
 * @module EchartsCollectionWidget/families/pie/core
 * @remarks
 * The pie profile. The data-path share reports no markings (none exist on a pie, even when
 * markLines linger in a working copy); the G build delegates to the pie family builder; the
 * presentation fragment carries the whole-pie config; the echarts registration carries
 * PieChart alone.
 */
import { use } from 'echarts/core';
import { PieChart } from 'echarts/charts';

import { familyDataPath } from '../dataPath';
import type { FamilyCoreOf } from '../types';
import type { PieFragment, PresentationBase } from '../../optionBuilders/types';
import { buildPieOption } from '../../optionBuilders/pie';
import { piePresentationFragment } from './fragment';

/** The pie family's runtime core. */
export const PIE_CORE: FamilyCoreOf<'pie'> = {
    dataPath: familyDataPath(() => 0),
    // The dispatch guarantees the pie arm — the narrowing cast is that invariant.
    buildOption: input => buildPieOption(input.series, input.meta, input.p as PresentationBase & PieFragment),
    presentationFragment: piePresentationFragment,
    echartsUse: () => {
        // echarts' `use` registers components on the global core — NOT React's use() hook,
        // so the react-hooks/rules-of-hooks lint rule does not apply here.
        // eslint-disable-next-line react-hooks/rules-of-hooks
        use([PieChart]);
    },
};
