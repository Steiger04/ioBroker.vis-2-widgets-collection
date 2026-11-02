/**
 * CollectionBase — the frame header and the Content-Box, rendered.
 *
 * @module components/CollectionBase.test
 * @remarks
 * DOM contract of the frame on the preview context: a host's `hideHeader` keeps the header out
 * of the frame exactly like the widget's own `noHeader` — the same collapsed header box, its text
 * slot left empty. The frame publishes its Content-Box (ADR-0098) to its children: the injected
 * box of the test scene, else the measured inner paper (BASE-PAPER-1); `undefined` until the
 * first measurement and outside the frame.
 */
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { createElement, type FC } from 'react';

import CollectionBase from './CollectionBase';
import useContentBox, { type ContentBox } from '../hooks/useContentBox';
import useData from '../hooks/useData/useData';
import {
    collectionScene,
    installInertResizeObserver,
    testScopedMount,
    withContentBox,
    type MountedCollectionBody,
} from '../lib/testing/collectionScene';
import type { PreviewScene } from '../preview/types';

installInertResizeObserver();

const OID = 'demo.0.frame';

const mountBody = testScopedMount();

const frameScene = (data: Record<string, unknown> = {}): PreviewScene =>
    collectionScene(
        'collection-base-test',
        { oid: OID, oidObject: { _id: OID, type: 'number' }, header: 'Küche', noFooter: true, ...data },
        0,
    );

/** Mounts the frame around the scene's widget, the host passing `hideHeader`. */
const mountFrame = (data: Record<string, unknown>, hideHeader?: boolean): MountedCollectionBody => {
    const Frame: FC = () => {
        const { data: styleData } = useData('oid');
        return createElement(CollectionBase, { data: styleData, hideHeader });
    };
    return mountBody(Frame, frameScene(data));
};

/** The frame header's box: the slot above the frame's content box. */
const headerBox = ({ container }: MountedCollectionBody): Element | null => container.querySelector('.BASE-HEADER');

describe('CollectionBase frame header', () => {
    it('shows the header text in the frame by default', () => {
        const frame = mountFrame({});

        expect(headerBox(frame)?.textContent).toBe('Küche');
    });

    it('hideHeader collapses the header like noHeader and leaves its text slot empty', () => {
        const hidden = mountFrame({}, true);
        const noHeader = mountFrame({ noHeader: true });
        const shown = mountFrame({});

        expect(headerBox(hidden)?.textContent).toBe('');
        expect(headerBox(hidden)?.outerHTML).toBe(headerBox(noHeader)?.outerHTML);
        expect(headerBox(hidden)?.className).not.toBe(headerBox(shown)?.className);
    });
});

describe('CollectionBase Content-Box (ADR-0098)', () => {
    /** The box the probe last read through useContentBox(). */
    let seen: ContentBox | undefined;

    const Probe: FC = () => {
        seen = useContentBox();
        return null;
    };

    /** The probe as the frame's child — where a widget body reads the box. */
    const FramedProbe: FC = () => {
        const { data } = useData('oid');
        return createElement(CollectionBase, { data }, createElement(Probe));
    };

    beforeEach(() => {
        seen = undefined;
    });

    afterEach(() => {
        vi.unstubAllGlobals();
    });

    it('publishes the box the test scene injects to its children', () => {
        mountBody(FramedProbe, withContentBox(frameScene(), { width: 300, height: 90 }));

        expect(seen).toStrictEqual({ width: 300, height: 90 });
    });

    it('leaves the box undefined until the first measurement', () => {
        mountBody(FramedProbe, frameScene());

        expect(seen).toStrictEqual({ width: undefined, height: undefined });
    });

    it('publishes the measured inner paper (BASE-PAPER-1), not the padded box around it', () => {
        // Reports each observed element at its own size: the inner paper differs from BASE-BOX-1.
        const sizeOf = (target: Element): { width: number; height: number } =>
            target.classList.contains('BASE-PAPER-1') ? { width: 300.4, height: 89.6 } : { width: 480, height: 120 };
        vi.stubGlobal(
            'ResizeObserver',
            class {
                private readonly callback: ResizeObserverCallback;

                constructor(callback: ResizeObserverCallback) {
                    this.callback = callback;
                }

                observe(target: Element): void {
                    this.callback(
                        [{ target, contentRect: sizeOf(target) } as unknown as ResizeObserverEntry],
                        this as unknown as ResizeObserver,
                    );
                }

                /* eslint-disable class-methods-use-this -- nothing to release */
                unobserve(): void {}
                disconnect(): void {}
                /* eslint-enable class-methods-use-this */
            },
        );

        mountBody(FramedProbe, frameScene());

        // Rounded to whole pixels, like every measurement of useElementDimensions.
        expect(seen).toStrictEqual({ width: 300, height: 90 });
    });

    it('is undefined outside the frame — an injected box stays inside CollectionBase', () => {
        mountBody(Probe, withContentBox(frameScene(), { width: 300, height: 90 }));

        expect(seen).toStrictEqual({ width: undefined, height: undefined });
    });
});
