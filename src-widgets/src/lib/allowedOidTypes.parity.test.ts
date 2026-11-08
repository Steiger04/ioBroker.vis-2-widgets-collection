/**
 * Parity test: the editor's OID filter and the renderer's type guard share ONE source.
 *
 * @module lib/allowedOidTypes.parity_test
 * @remarks
 * The gaugeFields parity idiom applied to the allowed-types contract: each
 * widget's `getWidgetInfo()` is introspected (the oid field carries an
 * `allowedTypes` mirror emitted by commonObjectFields; the Select's control-ID
 * field `cid` and the Dialog's `dialogId` carry their own) and must equal the
 * family constant the widget passes in — the same constant its renderer guard
 * imports. A literal that drifts from the constant fails here; the renderer side
 * cannot drift at all (it imports the constant). The same field's `filter` must
 * offer exactly those types in the object dialog (ADR-0111 Nr. 4).
 *
 * Runs in the dom project: the widget modules import Generic, whose base class
 * is `window.visRxWidget` — stubbed before the dynamic imports below.
 */
import { describe, expect, it } from 'vitest';

import type { RxWidgetInfo } from '@iobroker/types-vis-2';

import { ANY_VALUE_TYPES, INPUT_ENTRY_TYPES } from './allowedOidTypes';

// Generic extends window.visRxWidget at module scope — stub it before importing widgets.
(window as unknown as { visRxWidget: unknown }).visRxWidget = class {};

interface IdFieldFragment {
    name?: string;
    allowedTypes?: readonly string[];
    filter?: unknown;
}

const findIdField = (info: RxWidgetInfo, name: string): IdFieldFragment | undefined => {
    for (const group of info.visAttrs ?? []) {
        const field = (group.fields as IdFieldFragment[]).find(f => f.name === name);
        if (field) {
            return field;
        }
    }

    return undefined;
};

const CASES = [
    {
        name: 'Input',
        field: 'oid',
        load: () => import('../InputCollectionWidget/InputCollectionWidget'),
        types: INPUT_ENTRY_TYPES,
    },
    {
        name: 'State',
        field: 'oid',
        load: () => import('../StateCollectionWidget/StateCollectionWidget'),
        types: ANY_VALUE_TYPES,
    },
    {
        name: 'Select',
        field: 'oid',
        load: () => import('../SelectCollectionWidget/SelectCollectionWidget'),
        types: ANY_VALUE_TYPES,
    },
    {
        // The control ID is the Select's write target (ADR-0090) — same value types as its oid.
        name: 'Select',
        field: 'cid',
        load: () => import('../SelectCollectionWidget/SelectCollectionWidget'),
        types: ANY_VALUE_TYPES,
    },
    {
        name: 'RadioGroup',
        field: 'oid',
        load: () => import('../RadioGroupCollectionWidget/RadioGroupCollectionWidget'),
        types: ANY_VALUE_TYPES,
    },
    {
        name: 'ButtonGroup',
        field: 'oid',
        load: () => import('../ButtonGroupCollectionWidget/ButtonGroupCollectionWidget'),
        types: ANY_VALUE_TYPES,
    },
    // Single-type widgets: one loud literal at the call site, also here.
    {
        name: 'Checkbox',
        field: 'oid',
        load: () => import('../CheckboxCollectionWidget/CheckboxCollectionWidget'),
        types: ['boolean'],
    },
    {
        name: 'Switch',
        field: 'oid',
        load: () => import('../SwitchCollectionWidget/SwitchCollectionWidget'),
        types: ['boolean'],
    },
    {
        name: 'Template',
        field: 'oid',
        load: () => import('../TemplateCollectionWidget/TemplateCollectionWidget'),
        types: ['boolean'],
    },
    {
        name: 'Slider',
        field: 'oid',
        load: () => import('../SliderCollectionWidget/SliderCollectionWidget'),
        types: ['number'],
    },
    {
        name: 'Gauge',
        field: 'oid',
        load: () => import('../GaugeCollectionWidget/GaugeCollectionWidget'),
        types: ['number'],
    },
    {
        name: 'Dialog',
        field: 'dialogId',
        load: () => import('../DialogCollectionWidget/DialogCollectionWidget'),
        types: ['boolean'],
    },
    // JsonTable is deliberately NOT introspected: its module chain (TanStack
    // table + virtualizer) does not finish importing under happy-dom within any
    // sane test budget — a pre-existing property, nothing this contract
    // introduced. Its parity holds by construction like the renderer side:
    // editor call and renderer guard both import JSON_TABLE_TYPES. Its field is
    // covered over `commonObjectFields(JSON_TABLE_TYPES)`, Light2's fields in
    // `light2Fields.test.ts`.
] as const;

describe('allowed OID types parity (editor mirror ≡ family constant)', () => {
    for (const testCase of CASES) {
        // The dynamic import pays the widget module chain's cold Vite transform
        // (MUI, TanStack, …) — well above the 5 s default on this machine.
        it(`${testCase.name}: the ${testCase.field} field's mirror and dialog filter equal the allowed types`, async () => {
            const mod = await testCase.load();
            const info = (mod.default as { getWidgetInfo: () => RxWidgetInfo }).getWidgetInfo();

            const idField = findIdField(info, testCase.field);
            expect(idField, `${testCase.name} emits a ${testCase.field} field`).toBeDefined();
            expect(idField?.allowedTypes).toEqual([...testCase.types]);
            // What the object browser filters on: a common.type list (host WidgetField → customFilter).
            expect(idField?.filter).toEqual({ common: { type: [...testCase.types] } });
        }, 30_000);
    }
});
