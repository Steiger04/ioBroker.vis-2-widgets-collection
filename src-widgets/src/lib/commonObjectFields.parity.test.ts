/**
 * Parity test: which widgets seed the root range on a main-OID pick.
 *
 * @module lib/commonObjectFields.parity_test
 * @remarks
 * Introspects each widget's `getWidgetInfo()` like `allowedOidTypes.parity.test.ts` and runs its
 * real `oid` field against an object without a range. The Input draws no range and takes only a
 * real one; Slider and Gauge draw one and keep the seed (ADR-0109 Nr. 8).
 *
 * Runs in the dom project: the widget modules import Generic, whose base class is
 * `window.visRxWidget`.
 */
import { describe, expect, it, vi } from 'vitest';

import type { Connection } from '@iobroker/gui-components';
import type {
    RxWidgetInfo,
    RxWidgetInfoAttributesField,
    RxWidgetInfoFieldChangeHandler,
    WidgetData,
} from '@iobroker/types-vis-2';

const OID = 'zigbee.0.lamp.no_range';

const fakeSocket = {
    getObject: (): Promise<unknown> =>
        Promise.resolve({
            _id: OID,
            type: 'state',
            common: { name: 'No range', type: 'number', role: 'level', read: true, write: true },
        }),
} as unknown as Connection;

const CASES = [
    {
        name: 'Input',
        load: () => import('../InputCollectionWidget/InputCollectionWidget'),
        minValue: undefined,
        maxValue: undefined,
    },
    {
        name: 'Slider',
        load: () => import('../SliderCollectionWidget/SliderCollectionWidget'),
        minValue: 0,
        maxValue: 100,
    },
    {
        name: 'Gauge',
        load: () => import('../GaugeCollectionWidget/GaugeCollectionWidget'),
        minValue: 0,
        maxValue: 100,
    },
] as const;

describe('root range of a main-OID pick without a range (per widget)', () => {
    for (const testCase of CASES) {
        // The dynamic import pays the widget module chain's cold Vite transform.
        it(`${testCase.name}: the oid field writes ${testCase.minValue}..${testCase.maxValue}`, async () => {
            const mod = await testCase.load();
            const info = (mod.default as { getWidgetInfo: () => RxWidgetInfo }).getWidgetInfo();
            const field = (info.visAttrs ?? [])
                .flatMap(group => group.fields as RxWidgetInfoAttributesField[])
                .find(f => (f as { name?: string }).name === 'oid');

            let emitted: WidgetData | undefined;
            await (field as { onChange: RxWidgetInfoFieldChangeHandler }).onChange(
                field as RxWidgetInfoAttributesField,
                { oid: OID, minValue: 3, maxValue: 9 },
                newData => {
                    emitted = newData;
                },
                fakeSocket,
            );

            await vi.waitFor(() => expect(emitted).toBeDefined());
            expect(emitted?.minValue).toBe(testCase.minValue);
            expect(emitted?.maxValue).toBe(testCase.maxValue);
        }, 30_000);
    }
});
