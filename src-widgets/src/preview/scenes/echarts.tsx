/**
 * Echarts widget preview fixture.
 *
 * @module preview/scenes/echarts
 * @remarks
 * Demo story: a two-series 24h time-series fed via json mode (a JSON-valued OID), themed from
 * the host palette — the canonical preview for the line template. Run
 * `npm run gen-previews -- --only echarts` (after `npm run build`) to (re)generate the palette
 * thumbnail `prev-collection-echarts.png` referenced by the widget's visPrev.
 *
 * The rest of the CollectionContext (host theme, socket stub, getPropertyValue, …) is supplied
 * by {@link module:preview/mockContext.buildPreviewContext}.
 */
import EchartsCollection from '../../EchartsCollectionWidget/EchartsCollection';

import type { PreviewScene } from '../types';

const OID = 'echarts.preview.json';
const HOUR = 3_600_000;
// Deterministic points (module-load time, no Math.random) so the thumbnail is stable.
const points = (offset: number): [number, number][] =>
    Array.from({ length: 24 }, (_, i) => {
        const ts = Date.now() - (23 - i) * HOUR;
        const val = 18 + offset + Math.sin(i / 3) * 4 + i * 0.3;
        return [ts, Number(val.toFixed(2))];
    });

const payload = JSON.stringify({
    series: [
        { name: 'Temperature', data: points(0) },
        { name: 'Humidity', data: points(6) },
    ],
});

const echartsScene: PreviewScene = {
    slug: 'echarts',
    component: EchartsCollection,
    size: { width: 640, height: 320 },
    context: {
        widget: {
            data: {
                mode: 'json',
                jsonOid: OID,
                titleText: 'Preview',
                noHeader: true,
                noFooter: true,
            },
            style: {},
        },
        values: {
            [`${OID}.val`]: payload,
        },
        mode: 'light',
        wrappedContent: true,
    },
};

export default echartsScene;
