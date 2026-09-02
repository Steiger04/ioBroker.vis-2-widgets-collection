import { describe, it, expect } from 'vitest';

import { emptyPlaceholderReason, PLACEHOLDER_I18N_KEY } from './emptyPlaceholder';

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

describe('emptyPlaceholderReason — the table Leerfall-CTA (ADR-0075 decision 6, ticket 07)', () => {
    it('an UNCONFIGURED tabellarisch widget points at the Zuordnung — never auto-maps', () => {
        expect(emptyPlaceholderReason('json', 'table', false)).toBe('configureTableMapping');
        // no yPath binding at all (fresh family switch — series were reset)
        expect(emptyPlaceholderReason('json', 'table')).toBe('configureTableMapping');
    });

    it('a bound yPath series renders data again — the plain json placeholder returns', () => {
        expect(emptyPlaceholderReason('json', 'table', true)).toBe('selectJsonOid');
    });

    it('the legacy call sites stay byte-stable (absent kind = serien-förmig)', () => {
        expect(emptyPlaceholderReason('json')).toBe('selectJsonOid');
        expect(emptyPlaceholderReason('json', 'series', false)).toBe('selectJsonOid');
        expect(emptyPlaceholderReason('history', 'table', false)).toBe('configureSeries');
    });

    it('every reason carries its i18n key — the mapping is total', () => {
        expect(PLACEHOLDER_I18N_KEY.configureTableMapping).toBe('echarts_preview_configure_table');
        expect(Object.keys(PLACEHOLDER_I18N_KEY)).toHaveLength(3);
    });
});
