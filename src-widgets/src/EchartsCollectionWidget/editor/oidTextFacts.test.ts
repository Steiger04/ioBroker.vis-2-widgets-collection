/**
 * Unit tests for the OID → text-facts resolution (ADR-0058, parity Build B issue 06) — the pure
 * half of the adapter's `Line.onIdChanged`: kind detection, `common.states` prefill, override
 * survival and type-change cleanup.
 *
 * @module EchartsCollectionWidget/editor/oidTextFacts.test
 */
import { describe, expect, it } from 'vitest';

import { applyOidTextFacts, oidTextPrefill } from './oidTextFacts';
import type { EchartsSeriesMeta } from '../../types/field-definitions/echarts-fields';

const boolObj = { common: { type: 'boolean' } };
const boolObjWithStates = { common: { type: 'boolean', states: { 0: 'AUS', 1: 'EIN' } } };
const enumObj = { common: { type: 'number', states: { 0: 'AUS', 1: 'AUTO', 2: 'AN' } } };
const numericObj = { common: { type: 'number', unit: 'kWh' } };
const numericObjWithStates = { common: { type: 'number', unit: 'kWh', states: { 0: 'X' } } };

describe('oidTextPrefill — kind detection (adapter onIdChanged rules)', () => {
    it('a boolean object is a boolean; common.states {0,1} prefill the texts', () => {
        expect(oidTextPrefill(boolObj)).toEqual({ kind: 'boolean' });
        expect(oidTextPrefill(boolObjWithStates)).toEqual({
            kind: 'boolean',
            trueText: 'EIN',
            falseText: 'AUS',
        });
    });

    it('a states-carrying object WITHOUT a unit is an enum (states copied)', () => {
        expect(oidTextPrefill(enumObj)).toEqual({
            kind: 'enum',
            states: { 0: 'AUS', 1: 'AUTO', 2: 'AN' },
        });
    });

    it('a unit-carrying object is numeric — states are IGNORED (adapter rule), no kind', () => {
        expect(oidTextPrefill(numericObj)).toEqual({});
        expect(oidTextPrefill(numericObjWithStates)).toEqual({});
    });

    it('string-form / array states are not a mapping (adapter excludes them); empty values drop', () => {
        expect(oidTextPrefill({ common: { type: 'number', states: '0:AUS;1:EIN' } } as never)).toEqual({});
        expect(oidTextPrefill({ common: { type: 'number', states: ['a', 'b'] } } as never)).toEqual({});
        expect(oidTextPrefill({ common: { type: 'number', states: { 0: '', 1: 'AN', 2: null } } } as never)).toEqual({
            kind: 'enum',
            states: { 1: 'AN' },
        });
    });

    it("boolean-ish keys normalize to '1'/'0' (the adapter's _readOneLine remap — the data is numeric by then)", () => {
        expect(oidTextPrefill({ common: { type: 'number', states: { false: 'AUS', true: 'EIN' } } } as never)).toEqual({
            kind: 'enum',
            states: { 0: 'AUS', 1: 'EIN' },
        });
    });

    it('a missing object is no kind', () => {
        expect(oidTextPrefill(null)).toEqual({});
        expect(oidTextPrefill(undefined)).toEqual({});
    });
});

describe('applyOidTextFacts — prefill, override survival, cleanup', () => {
    it('enum: common.states prefill MERGED UNDER the user-authored keys (adapter Object.assign order)', () => {
        const out = applyOidTextFacts({ states: { 1: 'RUN' } } as EchartsSeriesMeta, oidTextPrefill(enumObj));
        expect(out.oidType).toBe('enum');
        expect(out.states).toEqual({ 0: 'AUS', 1: 'RUN', 2: 'AN' }); // RUN wins, siblings add
    });

    it('enum: stale bool texts are cleaned up', () => {
        const out = applyOidTextFacts(
            { trueText: 'AN', falseText: 'AUS' } as EchartsSeriesMeta,
            oidTextPrefill(enumObj),
        );
        expect(out.trueText).toBeUndefined();
        expect(out.falseText).toBeUndefined();
    });

    it('boolean: prefill fills only EMPTY text fields — an authored override survives', () => {
        const prefilled = applyOidTextFacts({} as EchartsSeriesMeta, oidTextPrefill(boolObjWithStates));
        expect(prefilled).toEqual({ oidType: 'boolean', trueText: 'EIN', falseText: 'AUS' });

        const overridden = applyOidTextFacts(
            { trueText: 'ON' } as EchartsSeriesMeta,
            oidTextPrefill(boolObjWithStates),
        );
        expect(overridden.trueText).toBe('ON');
        expect(overridden.falseText).toBe('AUS'); // still prefilled (empty field)
        expect(overridden.states).toBeUndefined(); // stale enum mapping cleaned
    });

    it('numeric: a type change clears every text field (bool→number cleanup)', () => {
        const out = applyOidTextFacts(
            { oidType: 'boolean', trueText: 'AN', falseText: 'AUS', states: { 0: 'X' } },
            oidTextPrefill(numericObj),
        );
        expect(out.oidType).toBeUndefined();
        expect(out.trueText).toBeUndefined();
        expect(out.falseText).toBeUndefined();
        expect(out.states).toBeUndefined();
    });

    it('foreign meta fields pass through untouched', () => {
        const out = applyOidTextFacts({ unit: '°C', decimals: 1, name: 'T' } as EchartsSeriesMeta, {
            kind: 'enum',
            states: { 0: 'AUS' },
        });
        expect(out.unit).toBe('°C');
        expect(out.decimals).toBe(1);
        expect(out.name).toBe('T');
    });

    it("IDEMPOTENT: a stored oidType of the same kind is the user's truth — reference-equal no-op", () => {
        const settled: EchartsSeriesMeta = {
            oidType: 'enum',
            states: { 1: 'RUN' }, // the deleted prefill rows STAY deleted on re-open
        };
        expect(applyOidTextFacts(settled, oidTextPrefill(enumObj))).toBe(settled);

        const boolSettled: EchartsSeriesMeta = { oidType: 'boolean', trueText: 'AN' };
        expect(applyOidTextFacts(boolSettled, oidTextPrefill(boolObjWithStates))).toBe(boolSettled);

        const numericSettled: EchartsSeriesMeta = {}; // numeric, already clean — no churn either
        expect(applyOidTextFacts(numericSettled, oidTextPrefill(numericObj))).toBe(numericSettled);
    });
});
