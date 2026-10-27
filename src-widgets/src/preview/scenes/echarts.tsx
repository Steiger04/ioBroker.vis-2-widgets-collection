/**
 * Echarts widget preview fixture.
 *
 * @module preview/scenes/echarts
 * @remarks
 * Demo story: a three-series 24h climate day (temperature, humidity, dew point
 * with a gradient area) fed via json mode (a JSON-valued OID), themed from the
 * host palette — the canonical preview for the line template. Full-bleed: the
 * scene padding is 0 and the widget paints its own paper surface, so the plot
 * owns the whole image (the curves must stay recognisable at picker-thumbnail
 * size). `animation: false` is load-bearing — an animated chart photographs
 * mid-flight, with the lines crammed into the left edge. Run
 * `npm run gen-previews -- --only echarts` to (re)generate the palette
 * thumbnail `prev-collection-echarts.png` referenced by the widget's visPrev.
 *
 * The rest of the CollectionContext (host theme, socket stub, getPropertyValue, …) is supplied
 * by {@link module:preview/mockContext.buildPreviewContext}.
 */
import EchartsCollection from '../../EchartsCollectionWidget/EchartsCollection';

import type { PreviewScene } from '../types';

const OID = 'echarts.preview.json';
const HOUR = 3_600_000;

// Deterministic clock-aligned day curves (module-load time, no Math.random) so
// the thumbnail is stable AND the arches sit where the hour ticks say they
// should: temperature peaks in the afternoon, humidity at dawn, dew point low
// beneath them with a soft gradient fill.
const points = (curve: (hour: number) => number): [number, number][] =>
    Array.from({ length: 24 }, (_, i) => {
        const ts = Date.now() - (23 - i) * HOUR;
        return [ts, Number(curve(new Date(ts).getHours()).toFixed(1))];
    });

const temperature = (h: number): number => 14 + 5 * Math.sin(((h - 4) / 24) * Math.PI * 2) + 0.6 * Math.sin(h * 2.7);
const humidity = (h: number): number => 56 + 14 * Math.cos(((h - 4) / 24) * Math.PI * 2);
const dewPoint = (h: number): number => 7.5 + 2.5 * Math.sin(((h - 6) / 24) * Math.PI * 2);

const payload = JSON.stringify({
    series: [
        { name: 'Temperatur', data: points(temperature) },
        { name: 'Luftfeuchte', data: points(humidity) },
        { name: 'Taupunkt', data: points(dewPoint) },
    ],
});

// Name-keyed json overlay (plain JSON passes decodeBlob): bold smooth lines so
// the curves read at picker size; the dew point carries the gradient area.
const seriesStyle = JSON.stringify({
    Temperatur: { lineWidth: 3, smooth: true },
    Luftfeuchte: { lineWidth: 3, smooth: true },
    Taupunkt: { lineWidth: 2.5, smooth: true, area: 'gradient', areaOpacity: 0.18 },
});

const echartsScene: PreviewScene = {
    slug: 'echarts',
    component: EchartsCollection,
    size: { width: 640, height: 320 },
    // Full-bleed: no host-side margin, the chart surface IS the image.
    padding: 0,
    context: {
        widget: {
            data: {
                mode: 'json',
                jsonOid: OID,
                jsonSeriesStyle: seriesStyle,
                animation: false,
                noHeader: true,
                noFooter: true,
                // Square paper corners — rounded ones would clip the plot's
                // corners against the image border.
                squaredCorner: true,
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
