import { describe, it, expect } from 'vitest';

import { emptyPlaceholderReason } from './emptyPlaceholder';

/**
 * ADR-0031 — the Live empty-state honesty fix. A Live chart with series configured but the rolling
 * buffer still empty used to show "Configure series to see data" (the user HAD configured series);
 * it must instead say it is waiting for incoming values. The decision is pure and lives here so the
 * runtime canvas can map the reason to a string without branching logic inline.
 */
describe('emptyPlaceholderReason', () => {
    it('json asks for the JSON OID', () => {
        expect(emptyPlaceholderReason('json')).toBe('selectJsonOid');
    });

    it('history asks to configure series', () => {
        expect(emptyPlaceholderReason('history')).toBe('configureSeries');
        expect(emptyPlaceholderReason('history')).toBe('configureSeries');
    });
});
