/**
 * SwitchCollection — the height budget, rendered.
 *
 * @module widgets/SwitchCollection.test
 * @remarks
 * DOM contract of the body on the preview context: the thumb is capped by the height
 * budget, the frame's Content-Box height (ADR-0098, injected through the test scene).
 * The travel math behind the cap is pinned as pure data in geometry.test.ts.
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

import {
    collectionScene,
    installInertResizeObserver,
    testScopedMount,
    withContentBox,
} from '../lib/testing/collectionScene';
import SwitchCollection from './SwitchCollection';
import type { PreviewScene } from '../preview/types';

installInertResizeObserver();

const OID = 'demo.0.power';

const mountBody = testScopedMount();

const scene = (data: Record<string, unknown> = {}): PreviewScene =>
    collectionScene(
        'switch-collection-test',
        {
            oid: OID,
            oidObject: { _id: OID, type: 'boolean' },
            thumbSize: 40,
            noHeader: true,
            noFooter: true,
            noHeaderIcon: true,
            ...data,
        },
        true,
    );

/** The switch thumb. */
const thumb = (container: HTMLElement): HTMLElement => {
    const element = container.querySelector<HTMLElement>('.MuiSwitch-thumb');
    if (!element) {
        throw new Error('switch thumb not rendered');
    }
    return element;
};

describe('SwitchCollection height budget (Content-Box)', () => {
    it('caps the thumb at the Content-Box height when the thumb size exceeds it', () => {
        const { container } = mountBody(SwitchCollection, withContentBox(scene(), { width: 200, height: 24 }));

        const { maxWidth, maxHeight } = getComputedStyle(thumb(container));
        expect([maxWidth, maxHeight]).toEqual(['24px', '24px']);
    });

    it('leaves the thumb uncapped until the box is measured', () => {
        const { container } = mountBody(SwitchCollection, scene());

        const { height, maxHeight } = getComputedStyle(thumb(container));
        expect(height).toBe('40px');
        // No cap rule at all ('' or the initial 'none', whichever happy-dom reports).
        expect(['', 'none']).toContain(maxHeight);
    });
});
