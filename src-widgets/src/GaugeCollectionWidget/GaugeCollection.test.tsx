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

describe('GaugeCollection Highlight-Zone (frame colour, canvas arcs)', () => {
    /** Base frame colour plus two zones with their own frame colour; the scene value is 21. */
    const zoneScene = (firstZoneStart: number): PreviewScene =>
        scene({
            frameBackground: '#112233',
            gaugeMaxValue: 100,
            values_count: 2,
            value1: firstZoneStart,
            textColor1: '#00ff00',
            frameBackground1: '#445566',
            value2: firstZoneStart + 20,
            textColor2: '#ff0000',
            frameBackground2: '#336699',
            icon2: 'warm.svg',
        });

    /** The background colour the frame (BASE-PAPER-0) paints. */
    const frameColor = (container: HTMLElement): string => {
        const frame = container.querySelector('.BASE-PAPER-0');
        expect(frame).not.toBeNull();
        return getComputedStyle(frame!).backgroundColor;
    };

    it("paints the frame in the active zone's own frame colour", () => {
        // Zones 0–20 and 20–100: the value 21 lies in the second.
        const { container } = mountBody(GaugeCollection, zoneScene(0));

        expect(frameColor(container)).toBe('#336699');
    });

    it('keeps the base frame colour when the value lies in no zone', () => {
        // Zones 50–70 and 70–100: the value 21 lies below both.
        const { container } = mountBody(GaugeCollection, zoneScene(50));

        expect(frameColor(container)).toBe('#112233');
    });

    it('hands the canvas bare arcs — from, to and colour only', () => {
        handedOver.options.length = 0;
        mountBody(GaugeCollection, zoneScene(0));

        expect(lastOptions()?.highlights).toStrictEqual([
            { from: 0, to: 20, color: '#00ff00' },
            { from: 20, to: 100, color: '#ff0000' },
        ]);
    });
});

describe('GaugeCollection zone icon', () => {
    it('fits the zone icon with the schema default contain when the widget data lacks the key', () => {
        // One zone from 0 with an icon; the value 21 lies in it. `gaugeIconFit` is absent (import, script).
        const { container } = mountBody(
            GaugeCollection,
            scene({ gaugeMaxValue: 100, values_count: 1, value1: 0, icon1: 'warm.svg' }),
        );

        const zoneIcon = [...container.querySelectorAll('img')].at(-1);
        expect(zoneIcon?.getAttribute('src')).toBe('warm.svg');
        expect(zoneIcon?.style.objectFit).toBe('contain');
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

    it("hands the canvas the colour a zone's var(…) text colour resolves to in the widget", () => {
        document.documentElement.style.setProperty('--gauge-test-zone', 'rgb(40, 50, 60)');
        try {
            handedOver.options.length = 0;
            mountBody(
                GaugeCollection,
                scene({ gaugeMaxValue: 100, values_count: 1, value1: 0, textColor1: 'var(--gauge-test-zone)' }),
            );
            expect(lastOptions()?.highlights).toStrictEqual([{ from: 0, to: 100, color: 'rgb(40, 50, 60)' }]);
        } finally {
            document.documentElement.style.removeProperty('--gauge-test-zone');
        }
    });
});

describe('GaugeCollection probe (cost of the Canvas-Farbe)', () => {
    /** Whether an element is the hidden probe: the span inside the sentinel-coloured hidden span. */
    const isProbe = (element: Element): boolean => {
        const parent = element.parentElement;
        return !!parent && parent.hidden && parent.style.color === 'rgb(1, 2, 3)';
    };

    /** Mounts the scene and counts the getComputedStyle calls that hit the probe. */
    const probeCallsFor = (data: Record<string, unknown>): number => {
        const spy = vi.spyOn(window, 'getComputedStyle');
        try {
            handedOver.options.length = 0;
            mountBody(GaugeCollection, scene(data));
            return spy.mock.calls.filter(([element]) => isProbe(element)).length;
        } finally {
            spy.mockRestore();
        }
    };

    it('paints colours the canvas reads as written without asking the probe', () => {
        // The shape vis-2 stores: schema defaults in every Schlichtes Farbfeld, plus a name and hsl().
        const calls = probeCallsFor({
            gaugeColorBorderOuter: '#ddd',
            gaugeColorPlate: 'rgba(0,0,0,0)',
            gaugeColorNeedle: 'red',
            gaugeColorBar: 'hsl(0, 100%, 50%)',
            gaugeMaxValue: 100,
            values_count: 1,
            value1: 0,
            textColor1: '#00ff00',
        });

        expect(calls).toBe(0);
        expect(lastOptions()).toMatchObject({
            colorBorderOuter: '#ddd',
            colorPlate: 'rgba(0,0,0,0)',
            colorNeedle: 'red',
            colorBar: 'hsl(0, 100%, 50%)',
        });
        expect(lastOptions()?.highlights).toStrictEqual([{ from: 0, to: 100, color: '#00ff00' }]);
    });

    it('treats a colour the browser rejects as unset — the schema default paints', () => {
        // happy-dom accepts everything; the stub plays the browser's colour parser. happy-dom hands
        // out a new CSS object per access, so the stub sits on the shared prototype.
        const parser = Object.getPrototypeOf(CSS) as { supports: (property: string, value?: string) => boolean };
        const supports = vi
            .spyOn(parser, 'supports')
            .mockImplementation((_property: string, value?: string) => value !== 'not a colour');
        try {
            const calls = probeCallsFor({ gaugeColorPlate: 'not a colour' });

            expect(calls).toBe(0);
            expect(lastOptions()?.colorPlate).toBe('rgba(0,0,0,0)');
        } finally {
            supports.mockRestore();
        }
    });

    it('asks the probe for colours that depend on the widget context', () => {
        // Their value is only known inside the widget (happy-dom does not compute currentColor;
        // a browser computes it to the inherited sentinel → unresolved → schema default).
        const calls = probeCallsFor({
            gaugeColorPlate: 'currentColor',
            gaugeColorBar: 'var(--gauge-test-none)',
            gaugeColorNeedle: 'inherit',
            gaugeColorBorderOuter: 'color-mix(in srgb, red 50%, blue)',
        });

        expect(calls).toBe(4);
    });
});

describe('GaugeCollection options per value change', () => {
    it('builds one option set from the new value, none from the old one', () => {
        const first = withContentBox(scene(), { width: 300, height: 200 });
        const { rerender } = mountBody(GaugeCollection, first);
        handedOver.options.length = 0;

        rerender({ ...first, context: { ...first.context, values: { [`${OID}.val`]: 22 } } });

        expect([...new Set(handedOver.options)].map(options => options.value)).toStrictEqual([22]);
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
