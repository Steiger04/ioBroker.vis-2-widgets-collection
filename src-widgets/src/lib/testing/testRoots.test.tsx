/**
 * The self-cleaning test roots: a root made in one test is gone before the next one starts —
 * its effects cleaned up, its container out of the document.
 *
 * @module lib/testing/testRoots.test
 */
import { describe, expect, it } from 'vitest';
import { act, createElement, useEffect } from 'react';
import { createTestRoot } from './testRoots';

let cleanedUp = 0;
let container: HTMLElement | null = null;

const Probe = (): null => {
    useEffect(
        () => () => {
            cleanedUp += 1;
        },
        [],
    );
    return null;
};

describe('createTestRoot', () => {
    it('mounts like createRoot', () => {
        container = document.createElement('div');
        document.body.appendChild(container);
        act(() => {
            createTestRoot(container!).render(createElement(Probe));
        });
        expect(cleanedUp).toBe(0);
        expect(document.body.contains(container)).toBe(true);
    });

    it('unmounted the previous test root and removed its container', () => {
        expect(cleanedUp).toBe(1);
        expect(document.body.contains(container)).toBe(false);
    });

    it('tolerates a root the test already unmounted itself', () => {
        const el = document.createElement('div');
        document.body.appendChild(el);
        const root = createTestRoot(el);
        act(() => {
            root.render(createElement(Probe));
        });
        act(() => {
            root.unmount();
        });
        expect(cleanedUp).toBe(2);
    });
});
