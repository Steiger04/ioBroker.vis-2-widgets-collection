/**
 * GaugeCollection — the canvas size, rendered.
 *
 * @module widgets/GaugeCollection.test
 * @remarks
 * DOM contract of the body on the preview context: the canvas is sized by the frame's
 * Content-Box (ADR-0098, injected through the test scene) minus the gauge padding. The
 * canvas adapter is replaced by a recording stub — canvas-gauges needs a real canvas, and
 * the adapter itself is pinned in Gauge.test.tsx; the stub records the option set the body
 * hands over. The frame's corner icon shows the active Highlight-Zone's icon (CONTEXT
 * "Eck-Icon").
 */
import { describe, expect, it, vi } from 'vitest';

// The fields modules in the import chain pull Generic, which extends window.visRxWidget —
// undefined outside the vis-2 host. Stubbed before the imports load.
vi.hoisted(() => {
    (window as unknown as { visRxWidget: unknown }).visRxWidget = class {
        static t(key: string): string {
            return key;
        }
    };
});
import type { GaugeOptions } from 'canvas-gauges';

import {
    collectionScene,
    installInertResizeObserver,
    testScopedMount,
    withContentBox,
} from '../lib/testing/collectionScene';
import GaugeCollection from './GaugeCollection';
import type { PreviewScene } from '../preview/types';

const handedOver = vi.hoisted(() => ({ options: [] as GaugeOptions[] }));

vi.mock('./Gauge', () => ({
    default: ({ options }: { options: GaugeOptions }): null => {
        handedOver.options.push(options);
        return null;
    },
}));

installInertResizeObserver();

const OID = 'demo.0.temperature';

const mountBody = testScopedMount();

const scene = (data: Record<string, unknown> = {}): PreviewScene =>
    collectionScene(
        'gauge-collection-test',
        {
            oid: OID,
            oidObject: { _id: OID, type: 'number' },
            gaugePadding: 8,
            noHeader: true,
            noFooter: true,
            noHeaderIcon: true,
            ...data,
        },
        21,
    );

/** The option set the canvas adapter received last. */
const lastOptions = (): GaugeOptions | undefined => handedOver.options.at(-1);

describe('GaugeCollection canvas size', () => {
    it("sizes the canvas from the frame's Content-Box minus the gauge padding", () => {
        handedOver.options.length = 0;
        mountBody(GaugeCollection, withContentBox(scene(), { width: 300, height: 200 }));

        expect(lastOptions()).toMatchObject({ width: 292, height: 192 });
    });

    it('keeps the canvas below any render size until the box is measured', () => {
        handedOver.options.length = 0;
        mountBody(GaugeCollection, scene());

        // An unmeasured box counts as 0 — minus the padding, the adapter draws nothing.
        expect(lastOptions()).toMatchObject({ width: -8, height: -8 });
    });
});

describe('GaugeCollection corner icon (Eck-Icon)', () => {
    it("shows the active Highlight-Zone's icon, not the widget's base icon", () => {
        // Two zones: 0–20 and 20–100; the value 21 lies in the second.
        const { container } = mountBody(
            GaugeCollection,
            scene({
                noHeaderIcon: false,
                icon: 'base.svg',
                gaugeMaxValue: 100,
                values_count: 2,
                value1: 0,
                icon1: 'cold.svg',
                value2: 20,
                icon2: 'warm.svg',
            }),
        );

        // The corner icon is the frame's first content element; the zone overlay sits below it.
        const icon = container.querySelector('.BASE-PAPER-1')?.firstElementChild;
        expect(icon?.tagName).toBe('IMG');
        expect(icon?.getAttribute('src')).toBe('warm.svg');
    });
});

describe('GaugeCollection CSS variables', () => {
    it('hands the canvas the colour a var(…) resolves to in the widget, the default when it does not', () => {
        document.documentElement.style.setProperty('--gauge-test-accent', 'rgb(10, 20, 30)');
        try {
            handedOver.options.length = 0;
            mountBody(
                GaugeCollection,
                scene({ gaugeColorBar: 'var(--gauge-test-accent)', gaugeColorPlate: 'var(--gauge-test-missing)' }),
            );
            expect(lastOptions()?.colorBar).toBe('rgb(10, 20, 30)');
            // Unresolvable: the schema default of the Schlichtes Farbfeld, as for an empty field.
            expect(lastOptions()?.colorPlate).toBe('rgba(0,0,0,0)');
        } finally {
            document.documentElement.style.removeProperty('--gauge-test-accent');
        }
    });
});

describe('GaugeCollection Canvas-Titel', () => {
    it('hands the header to the canvas as plain text, even with the frame header hidden', () => {
        handedOver.options.length = 0;
        // The test scene sets noHeader: the frame header is off, the Canvas-Titel stays.
        mountBody(GaugeCollection, scene({ header: '<b>Wohn</b>zimmer &amp; Bad' }));

        expect(lastOptions()?.title).toBe('Wohnzimmer & Bad');
    });
});
