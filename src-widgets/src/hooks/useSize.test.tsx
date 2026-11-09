/**
 * useSize — the frame size of square and circle widgets from the measured box.
 *
 * @module hooks/useSize.test
 * @remarks
 * CollectionBase measures BASE-BOX-1, which carries the base padding itself. The ResizeObserver's
 * `contentRect` already excludes that padding, so the square side is the smaller side of the
 * measured content area — the padding is not subtracted a second time (Ticket 08, measured in
 * the vis-2 editor: 16 × basePadding px were missing). The observer is fed a measurement per
 * test; anything else keeps the frame at `100%`.
 */
import { afterEach, describe, expect, it, vi } from 'vitest';
import { createElement, useEffect, useState, type FC } from 'react';

import useSize from './useSize';
import { collectionScene, installInertResizeObserver, testScopedMount } from '../lib/testing/collectionScene';

installInertResizeObserver();

const OID = 'demo.0.size';

const mountBody = testScopedMount();

/** The size of the probe's last committed render. */
let seen: { width: string; height: string } | undefined;

/** Measures its own element like CollectionBase measures BASE-BOX-1. */
const Probe: FC = () => {
    const [element, setElement] = useState<HTMLDivElement | null>(null);
    const size = useSize(element);
    useEffect(() => {
        seen = size;
    });
    return createElement('div', { ref: setElement });
};

/** Feeds every observed element the given content rect (the box minus its padding). */
const measureContentRect = (contentRect: { width: number; height: number }): void => {
    vi.stubGlobal(
        'ResizeObserver',
        class {
            private readonly callback: ResizeObserverCallback;

            constructor(callback: ResizeObserverCallback) {
                this.callback = callback;
            }

            observe(target: Element): void {
                this.callback([{ target, contentRect } as unknown as ResizeObserverEntry], this);
            }

            /* eslint-disable class-methods-use-this -- nothing to release */
            unobserve(): void {}
            disconnect(): void {}
            /* eslint-enable class-methods-use-this */
        },
    );
};

const mountProbe = (data: Record<string, unknown>): void => {
    mountBody(
        Probe,
        collectionScene('use-size-test', { oid: OID, oidObject: { _id: OID, type: 'number' }, ...data }, 0),
    );
};

describe('useSize', () => {
    afterEach(() => {
        seen = undefined;
        vi.unstubAllGlobals();
    });

    it('a square frame takes the smaller side of the content area, the padding subtracted once', () => {
        // BASE-BOX-1 at 1016 × 252 with basePadding 2 (16 px per side): content area 984 × 220.
        measureContentRect({ width: 984, height: 220 });

        mountProbe({ square: true, basePadding: 2 });

        expect(seen).toStrictEqual({ width: '220px', height: '220px' });
    });

    it('a circle frame takes the smaller side of the content area, the padding subtracted once', () => {
        // basePadding 1 (8 px per side): content area 300 × 236.
        measureContentRect({ width: 300, height: 236 });

        mountProbe({ circle: true, basePadding: 1 });

        expect(seen).toStrictEqual({ width: '236px', height: '236px' });
    });

    it('any other frame fills the box', () => {
        measureContentRect({ width: 984, height: 220 });

        mountProbe({ basePadding: 2 });

        expect(seen).toStrictEqual({ width: '100%', height: '100%' });
    });
});
