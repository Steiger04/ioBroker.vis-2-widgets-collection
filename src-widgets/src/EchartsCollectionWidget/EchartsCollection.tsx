/**
 * Echarts Collection widget body.
 *
 * @module EchartsCollectionWidget/EchartsCollection
 * @remarks
 * P1 scaffold: renders the chart frame via CollectionBase and a static themed line chart to
 * prove the wrapper + theme bridge render inside vis-2. The real data modes
 * (history / live / json) and the data-wins option builder land in P2; the editor shell in P3.
 */
import { useMemo } from 'react';
import type React from 'react';
import type { EChartsOption } from 'echarts';

import CollectionBase from '../components/CollectionBase';
import useData from '../hooks/useData';

import EChart from './EChart';

/**
 * Static preview option (P1 only). Replaced by the data-wins builder in P2,
 * fed by useHistory / live buffer / parsed JSON state.
 */
const buildPreviewOption = (): EChartsOption => {
    const HOUR = 3_600_000;
    const now = Date.now();
    const data: [number, number][] = Array.from({ length: 24 }, (_, i) => {
        const ts = now - (23 - i) * HOUR;
        const val = 18 + Math.sin(i / 3) * 4 + i * 0.3;
        return [ts, Number(val.toFixed(2))];
    });
    return {
        title: { text: 'ECharts', left: 'center' },
        tooltip: { trigger: 'axis' },
        legend: { data: ['Preview'], top: 28 },
        grid: { left: 48, right: 24, top: 64, bottom: 32 },
        xAxis: { type: 'time' },
        yAxis: { type: 'value' },
        series: [{ name: 'Preview', type: 'line', smooth: true, areaStyle: {}, data }],
    };
};

function EchartsCollection(): React.ReactElement {
    const { data } = useData('oid');
    const option = useMemo(() => buildPreviewOption(), []);

    return (
        <CollectionBase
            isValidType
            data={data}
        >
            <EChart option={option} />
        </CollectionBase>
    );
}

export default EchartsCollection;
