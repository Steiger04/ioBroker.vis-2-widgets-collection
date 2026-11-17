/**
 * The harness mounts clean up after themselves: a component or hook mounted in one test and
 * never unmounted by it is gone before the next test starts — its effects cleaned up, its
 * container out of the document.
 *
 * @module lib/testing/testHarness.test
 */
import { describe, expect, it } from 'vitest';
import { useEffect } from 'react';
import { renderComponent, renderHook } from './testHarness';

let cleanedUp = 0;
let componentContainer: HTMLElement | null = null;

const useCleanupProbe = (): void => {
    useEffect(
        () => () => {
            cleanedUp += 1;
        },
        [],
    );
};

const Probe = (): null => {
    useCleanupProbe();
    return null;
};

describe('renderComponent', () => {
    it('mounts the component and leaves it mounted for the test', () => {
        componentContainer = renderComponent(Probe, {}).container;
        expect(cleanedUp).toBe(0);
        expect(document.body.contains(componentContainer)).toBe(true);
    });

    it('unmounted the previous test mount and removed its container', () => {
        expect(cleanedUp).toBe(1);
        expect(document.body.contains(componentContainer)).toBe(false);
    });

    it('tolerates a mount the test already unmounted itself', () => {
        renderComponent(Probe, {}).unmount();
        expect(cleanedUp).toBe(2);
    });
});

describe('renderHook', () => {
    it('mounts the hook and leaves it mounted for the test', () => {
        renderHook(useCleanupProbe);
        expect(cleanedUp).toBe(2);
    });

    it('unmounted the previous test mount', () => {
        expect(cleanedUp).toBe(3);
    });

    it('tolerates a mount the test already unmounted itself', () => {
        renderHook(useCleanupProbe).unmount();
        expect(cleanedUp).toBe(4);
    });
});
