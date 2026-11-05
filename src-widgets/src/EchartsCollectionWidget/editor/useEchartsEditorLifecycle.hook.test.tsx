/**
 * useEchartsEditorLifecycle + useJsonAxisReconcile — the open path over a stored serien-förmig
 * JSON overlay (Bug B, `.scratch/echarts-json-achse-je-serie`).
 *
 * @module EchartsCollectionWidget/editor/useEchartsEditorLifecycle.hook.test
 * @remarks
 * Composes the two hooks exactly as the modal does (lifecycle → payload names → reconcile) and
 * drives the open: the payload names arrive AFTER the load (the jsonOid subscription resolves
 * from the loaded state).
 */
import { afterEach, describe, expect, it, vi } from 'vitest';

// DOM pool: editorState's load heal reaches the family profiles' section modules (Generic →
// window.visRxWidget, the editorState.test precedent).
vi.hoisted(() => {
    (window as unknown as { visRxWidget: unknown }).visRxWidget = class {
        static t(key: string): string {
            return key;
        }
    };
});
vi.mock('@iobroker/adapter-react-v5', () => ({ SelectID: () => null }));

import { act } from 'react';
import type { WidgetData } from '@iobroker/types-vis-2';
import { renderHook, type RenderHookHandle } from '../../lib/testing/testHarness';
import { applyStructureEvent, type StructureEvent } from './structureEvents';
import { DEFAULT_EDITOR_STATE, saveEditorState, type EditorState } from './editorState';
import {
    useEchartsEditorLifecycle,
    useJsonAxisReconcile,
    type EchartsEditorLifecycle,
} from './useEchartsEditorLifecycle';

/** A stored serien-förmig JSON widget, written through the real save path. */
const storedWidget = (patch: Partial<EditorState>): WidgetData =>
    saveEditorState(
        {
            ...DEFAULT_EDITOR_STATE,
            chartType: 'line',
            mode: 'json',
            jsonKind: 'series',
            jsonOid: '0_userdata.0.payload',
            ...patch,
        },
        0,
    ) as WidgetData;

/** Mount the modal's composition: lifecycle, then the reconcile over the given payload names. */
const mountEditor = (
    data: WidgetData,
): {
    handle: RenderHookHandle<EchartsEditorLifecycle>;
    open: (names: readonly string[]) => void;
} => {
    let names: readonly string[] = [];
    const useModalComposition = (): EchartsEditorLifecycle => {
        const lifecycle = useEchartsEditorLifecycle(true, data);
        useJsonAxisReconcile(lifecycle.state, lifecycle.state.jsonOid ? names : [], lifecycle.set);
        return lifecycle;
    };
    const handle = renderHook(useModalComposition);
    return {
        handle,
        open: next => {
            names = next;
            handle.rerender(useModalComposition);
        },
    };
};

let mounted: RenderHookHandle<EchartsEditorLifecycle> | undefined;
afterEach(() => {
    mounted?.unmount();
    mounted = undefined;
});

/** Commit one structure event through the lifecycle's write path (as a section handler does). */
const fire = (
    handle: RenderHookHandle<EchartsEditorLifecycle>,
    names: readonly string[],
    event: StructureEvent,
): void => {
    const lifecycle = handle.result.current;
    const r = applyStructureEvent({ ...lifecycle.state, payloadNames: names }, event);
    if (r.patch) {
        const patch = r.patch;
        act(() => lifecycle.set(patch));
    }
};

describe('useEchartsEditorLifecycle — opening a stored serien-förmig JSON overlay (Bug B)', () => {
    it('reopens a configurator-made 1:n binding unchanged and clean (two names on axis 0, hand-tuned offset)', () => {
        // Session 1: a fresh payload lands 1:1, B is rebound onto A's axis (1:n), the axis
        // gets a hand-tuned offset (a plain field edit), Apply.
        const first = mountEditor(storedWidget({}));
        first.open(['A', 'B']);
        fire(first.handle, ['A', 'B'], { type: 'rebindSeries', name: 'B', axis: 0 });
        const session = first.handle.result.current;
        act(() => session.set({ yAxes: session.state.yAxes.map(a => ({ ...a, offset: 30 })) }));
        const saved = first.handle.result.current.apply();
        first.handle.unmount();

        // Session 2: the reopen's first payload sight must not touch the stored structure.
        const second = mountEditor(saved);
        mounted = second.handle;
        second.open(['A', 'B']);
        const { state, hasChanges } = second.handle.result.current;
        expect(state.yAxes).toHaveLength(1);
        expect(state.yAxes[0]).toMatchObject({ owner: 'A', position: 'left', offset: 30 });
        expect(state.jsonSeriesStyle.A?.yAxisIndex).toBe(0);
        expect(state.jsonSeriesStyle.B?.yAxisIndex).toBe(0);
        expect(hasChanges).toBe(false);
    });

    it('lands a payload WITHOUT a stored binding 1:1 on the first open — the ADR-0026 fresh rule', () => {
        // A stored widget whose overlay carries no `yAxisIndex` (and no axes) never bound its
        // payload: the runtime draws every series on axis 0 only as the builder's defense, the
        // configurator's first payload sight is the birth (ADR-0026/0069). The materialised
        // bindings differ from the stored blob, so the working copy is honestly dirty — Apply
        // persists them.
        const data = storedWidget({ jsonSeriesStyle: { A: { color: '#f00' }, B: {} } });
        const editor = mountEditor(data);
        mounted = editor.handle;
        editor.open(['A', 'B']);
        const { state, hasChanges } = editor.handle.result.current;
        expect(state.yAxes).toHaveLength(2);
        expect(state.jsonSeriesStyle.A).toMatchObject({ color: '#f00', yAxisIndex: 0 });
        expect(state.jsonSeriesStyle.B?.yAxisIndex).toBe(1);
        expect(hasChanges).toBe(true);
    });
});
