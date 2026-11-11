/**
 * Self-cleaning React roots for render tests that mount by hand (`createRoot` + `act`): every
 * root made through {@link createTestRoot} is unmounted after each test and its container removed.
 *
 * @module lib/testing/testRoots
 * @remarks
 * A tree left mounted can still commit after the file's happy-dom teardown (a closing MUI menu's
 * exit transition, a pending timer); React's passive-effect flush then reads `window.event` and
 * throws `window is not defined` outside any test, which fails the whole vitest run although every
 * test passed (the v3.0.1 release run). Importing this module registers the `afterEach` on the
 * importing test file — the dom project isolates per file, so each file gets its own registry.
 * The {@link module:lib/testing/testHarness} handles keep their explicit `unmount`.
 */
import { afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';

const mounted: { root: Root; container: HTMLElement }[] = [];

/**
 * `createRoot` that the test file's `afterEach` tears down again (an explicit earlier
 * `root.unmount()` is fine — React ignores the second one).
 *
 * @param container - The element to render into; removed from the document after the test.
 */
export function createTestRoot(container: HTMLElement): Root {
    const root = createRoot(container);
    mounted.push({ root, container });
    return root;
}

afterEach(() => {
    const done = mounted.splice(0);
    act(() => {
        for (const { root } of done) {
            root.unmount();
        }
    });
    for (const { container } of done) {
        container.remove();
    }
});
