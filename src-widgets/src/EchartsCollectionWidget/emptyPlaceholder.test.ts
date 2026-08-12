import { describe, it, expect } from 'vitest';

import { emptyPlaceholderReason } from './emptyPlaceholder';

/**
 * ADR-0031 — the Live empty-state honesty fix. A Live chart with series configured but the rolling
 * buffer still empty used to show "Configure series to see data" (the user HAD configured series);
 * it must instead say it is waiting for incoming values. The decision is pure and lives here so the
 * runtime canvas can map the reason to a string without branching logic inline.
 */
describe('emptyPlaceholderReason', () => {
    it('gauge always asks for a scalar value OID', () => {
        expect(emptyPlaceholderReason({ family: 'gauge', mode: 'history', seriesCount: 0 })).toBe('selectValueOid');
        expect(emptyPlaceholderReason({ family: 'gauge', mode: 'live', seriesCount: 1 })).toBe('selectValueOid');
    });

    it('radar always asks for indicator OIDs', () => {
        expect(emptyPlaceholderReason({ family: 'radar', mode: 'history', seriesCount: 0 })).toBe('addIndicators');
        expect(emptyPlaceholderReason({ family: 'radar', mode: 'json', seriesCount: 3 })).toBe('addIndicators');
    });

    it('json (cartesian/pie) asks for the JSON OID', () => {
        expect(emptyPlaceholderReason({ family: 'cartesian', mode: 'json', seriesCount: 0 })).toBe('selectJsonOid');
        expect(emptyPlaceholderReason({ family: 'pie', mode: 'json', seriesCount: 5 })).toBe('selectJsonOid');
    });

    it('live with series configured is WAITING (the honesty fix), not unconfigured', () => {
        expect(emptyPlaceholderReason({ family: 'cartesian', mode: 'live', seriesCount: 3 })).toBe('waitingForValues');
        expect(emptyPlaceholderReason({ family: 'pie', mode: 'live', seriesCount: 1 })).toBe('waitingForValues');
    });

    it('live with no series configured still asks to configure series', () => {
        expect(emptyPlaceholderReason({ family: 'cartesian', mode: 'live', seriesCount: 0 })).toBe('configureSeries');
    });

    it('history asks to configure series regardless of count (out of ADR-0031 scope)', () => {
        expect(emptyPlaceholderReason({ family: 'cartesian', mode: 'history', seriesCount: 0 })).toBe(
            'configureSeries',
        );
        expect(emptyPlaceholderReason({ family: 'cartesian', mode: 'history', seriesCount: 4 })).toBe(
            'configureSeries',
        );
    });
});
