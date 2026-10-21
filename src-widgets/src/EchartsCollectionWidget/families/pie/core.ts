/**
 * Pie family core (ADR-0083) — data-path share, option build, echarts registration.
 *
 * @module EchartsCollectionWidget/families/pie/core
 * @remarks
 * The pie profile. The data-path share reports no markings (none exist on a pie, even when
 * markLines linger in a working copy); the G build delegates to the pie family builder; the
 * echarts registration carries PieChart alone. The presentation fragment joins in ticket 03.
 */
import { use } from 'echarts/core';
import { PieChart } from 'echarts/charts';

import { familyDataPath } from '../dataPath';
import type { FamilyCore } from '../types';
import { buildPieOption } from '../../optionBuilders/pie';

/** The pie family's runtime core. */
export const PIE_CORE: FamilyCore = {
    dataPath: familyDataPath(() => 0),
    buildOption: input => buildPieOption(input.series, input.meta, input.p),
    echartsUse: () => {
        // echarts' `use` registers components on the global core — NOT React's use() hook,
        // so the react-hooks/rules-of-hooks lint rule does not apply here.
        // eslint-disable-next-line react-hooks/rules-of-hooks
        use([PieChart]);
    },
};
