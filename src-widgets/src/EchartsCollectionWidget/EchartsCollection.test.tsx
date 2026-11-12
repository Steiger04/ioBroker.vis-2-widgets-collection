/**
 * EchartsCollection — the runtime canvas's empty state, rendered (ADR-0031 honest empty-state).
 *
 * @module EchartsCollectionWidget/EchartsCollection.test
 * @remarks
 * The body maps the pure {@link emptyPlaceholderReason} to its text. These cases pin that the
 * runtime surface hands it the real inputs: a Verlauf chart with a BOUND series whose window
 * holds no plottable data names the empty window, an unbound one still asks for series. The
 * body is mounted on the real CollectionProvider; the socket answers the history fetch, echarts
 * itself (canvas) is replaced by a marker. The dom project's visRxWidget stub returns the key.
 */
import { act } from 'react';
import { describe, expect, it, vi } from 'vitest';

import { installInertResizeObserver, testScopedMount } from '../lib/testing/collectionScene';
import { buildPreviewContext } from '../preview/mockContext';
import EchartsCollection from './EchartsCollection';
import type { PreviewScene } from '../preview/types';

// echarts needs a real canvas: a marker stands in for the drawn chart.
vi.mock('./EChart', () => ({ default: () => <pre data-echart="" /> }));

installInertResizeObserver();

const mount = testScopedMount();

const OID = 'demo.0.temperature';

const sceneOf = (data: Record<string, unknown>): PreviewScene =>
    ({
        slug: 'echarts-empty-state',
        size: { width: 480, height: 240 },
        context: {
            widget: { data: { noHeader: true, noFooter: true, ...data }, style: {} },
            values: {},
            mode: 'light',
            wrappedContent: true,
        },
    }) as unknown as PreviewScene;

/** Mounts the body over the scene, the history fetch answering `history`, and lets the debounced fetch land. */
const mountVerlauf = async (
    data: Record<string, unknown>,
    history: { ts: number; val: number | null }[],
): Promise<{ text: string; getHistory: ReturnType<typeof vi.fn> }> => {
    const scene = sceneOf(data);
    const getHistory = vi.fn(() => Promise.resolve(history));
    const socket = {
        ...(buildPreviewContext(scene).socket as unknown as Record<string, unknown>),
        getObject: () => Promise.resolve(null),
        getHistory,
    };
    const { container } = mount(EchartsCollection, scene, { socket });
    // The history fetch is debounced (200 ms) — wait it out with the real clock.
    await act(() => new Promise<void>(resolve => setTimeout(resolve, 300)));
    return { text: container.textContent ?? '', getHistory };
};

describe('EchartsCollection: the honest empty state of a Verlauf chart', () => {
    it('a bound series whose window holds only null markers names the empty window, not the series setup', async () => {
        const { text, getHistory } = await mountVerlauf(
            { mode: 'history', timeRange: '1d', series_count: 1, oid1: OID },
            [
                { ts: 1_000, val: null },
                { ts: 2_000, val: null },
            ],
        );

        expect(getHistory).toHaveBeenCalledWith(OID, expect.anything());
        expect(text).toContain('echarts_preview_history_no_data');
        expect(text).not.toContain('echarts_preview_configure_series');
    });

    it('an empty window reads the same', async () => {
        const { text } = await mountVerlauf({ mode: 'history', timeRange: '1d', series_count: 1, oid1: OID }, []);

        expect(text).toContain('echarts_preview_history_no_data');
    });

    it('a chart without a bound series keeps asking to configure series', async () => {
        const { text, getHistory } = await mountVerlauf(
            { mode: 'history', timeRange: '1d', series_count: 1, oid1: 'nothing_selected' },
            [],
        );

        expect(getHistory).not.toHaveBeenCalled();
        expect(text).toContain('echarts_preview_configure_series');
    });
});
