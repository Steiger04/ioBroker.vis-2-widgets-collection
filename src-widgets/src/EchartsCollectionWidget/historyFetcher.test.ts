/**
 * historyFetcher — Auto instance resolution (pickAutoInstance).
 *
 * @module EchartsCollectionWidget/historyFetcher.test
 */
import { describe, expect, it } from 'vitest';

import { pickAutoInstance } from './historyFetcher';

describe('pickAutoInstance', () => {
    it('picks the first history adapter configured on the datapoint', () => {
        expect(
            pickAutoInstance({
                _id: 'hm-rpc.0.ABC.1.TEMPERATURE',
                common: { custom: { 'sql.0': { enabled: true }, 'influxdb.0': { enabled: true } } },
            }),
        ).toBe('sql.0');
    });

    it('returns null when the datapoint has no custom history config', () => {
        expect(pickAutoInstance({ _id: 'x', common: {} })).toBeNull();
        expect(pickAutoInstance({ _id: 'x', common: { custom: {} } })).toBeNull();
    });

    it('returns null for a missing/unreadable object', () => {
        expect(pickAutoInstance(null)).toBeNull();
        expect(pickAutoInstance(undefined)).toBeNull();
    });
});
