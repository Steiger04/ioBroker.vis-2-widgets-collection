/**
 * The notice host binds „Rückgängig" to its own step: any later change dismisses the notice.
 *
 * @module EchartsCollectionWidget/editor/useEditorNotice.test
 */
import { describe, expect, it } from 'vitest';
import { act, createElement, useState } from 'react';
import { createTestRoot } from '../../lib/testing/testRoots';

import { useEditorNotice, type EditorNoticeHost } from './useEditorNotice';

interface Probe {
    host: EditorNoticeHost;
    /** One committed step: a new working copy (+ optionally its advisory, batched like dispatch). */
    step: (withAdvisory?: boolean) => void;
}

const mount = (): Probe => {
    const probe = {} as Probe;
    const Harness = (): null => {
        const [state, setState] = useState({ n: 0 });
        const host = useEditorNotice(state);
        probe.host = host;
        probe.step = withAdvisory => {
            setState(s => ({ n: s.n + 1 }));
            if (withAdvisory) {
                host.push({ kind: 'unitMismatch' });
            }
        };
        return null;
    };
    const container = document.createElement('div');
    act(() => {
        createTestRoot(container).render(createElement(Harness));
    });
    return probe;
};

describe('useEditorNotice — the notice lives as long as its step is the latest', () => {
    it('the step that raises the notice does not dismiss it', () => {
        const p = mount();
        act(() => p.step(true));
        expect(p.host.notice?.advisory).toEqual({ kind: 'unitMismatch' });
    });

    it('a later change dismisses it — undo could otherwise revert a foreign step', () => {
        const p = mount();
        act(() => p.step(true));
        act(() => p.step());
        expect(p.host.notice).toBeNull();
    });

    it('a newer notice replaces the old one and re-keys the snackbar', () => {
        const p = mount();
        act(() => p.step(true));
        const first = p.host.notice?.token;
        act(() => p.step(true));
        expect(p.host.notice).not.toBeNull();
        expect(p.host.notice?.token).not.toBe(first);
    });

    it('clear dismisses explicitly; later changes stay quiet', () => {
        const p = mount();
        act(() => p.step(true));
        act(() => p.host.clear());
        expect(p.host.notice).toBeNull();
        act(() => p.step());
        expect(p.host.notice).toBeNull();
    });
});
