/**
 * Zustandszeilen-Operationen (T1): what patch each Zustandseditor action hands to vis-2.
 *
 * @module lib/stateRows.test
 * @remarks
 * Observed through the module's public contract: the patch (vis-2 custom-field contract —
 * `null` deletes a key, an unnamed key keeps its value) and the widget data that results from
 * applying it the way vis-2 does. The row keys are derived from the real per-state field list.
 */
import { describe, expect, it, vi } from 'vitest';

import type { WidgetData } from '@iobroker/types-vis-2';

// The field list renders CollectionDivider / colour fields, which pull Generic (extends
// window.visRxWidget, absent outside vis-2). The module reads only the field data.
vi.mock('../components/ContractColorField', () => ({ default: () => null }));
vi.mock('../components/PlainColorField', () => ({ default: () => null }));
vi.mock('../components/CollectionDivider', () => ({ default: () => null }));

import commonFields from './commonFields';
import {
    applyStateRowOperation,
    mergeStateRowPatch,
    stateRowCount,
    stateRowDiffers,
    stateRowKeyDiffers,
    stateRowOperationAllowed,
    stateRowSchema,
    stateRowsDifference,
    stateRowsIdentical,
} from './stateRows';
import type { StateRowOperation, StateRowPatch, StateRowsConfig } from './stateRows';

/** The per-state field list exactly as the 11 state widgets declare their `values` group. */
const PER_STATE_FIELDS = commonFields({ groupName: '', allFields: false, perState: true });
const SCHEMA = stateRowSchema(PER_STATE_FIELDS);

/** The 17 per-state fields the runtime reads with a Feldnummer, plus the three legacy keys (ADR-0104 §2). */
const ROW_KEYS = [
    'icon',
    'iconSmall',
    'iconSize',
    'enableIconColorMask',
    'iconColor',
    'iconXOffset',
    'iconYOffset',
    'header',
    'headerSize',
    'alias',
    'value',
    'valueSize',
    'footer',
    'footerSize',
    'textColor',
    'background',
    'frameBackground',
    'iconHover',
    'backgroundColor',
    'frameBackgroundColor',
];

describe('stateRowSchema — the keys of a Zustandszeile', () => {
    it('are the named per-state fields plus the three legacy keys', () => {
        expect(SCHEMA.keys).toEqual(ROW_KEYS);
    });

    it('do not depend on the Marker-Ebene (the slider only changes fallback fields)', () => {
        expect(
            stateRowSchema(commonFields({ groupName: '', allFields: false, perState: true, markerLayer: true })).keys,
        ).toEqual(ROW_KEYS);
    });

    it("carry each field's declared default, null where it declares none", () => {
        expect(SCHEMA.defaults).toMatchObject({
            icon: '',
            iconSize: null,
            enableIconColorMask: false,
            iconColor: '',
            value: '',
            alias: '',
            iconHover: null,
            backgroundColor: null,
            frameBackgroundColor: null,
        });
    });
});

const CONFIG: StateRowsConfig = { schema: SCHEMA, oidProperty: 'oid' };

const MODES = { 0: 'Off', 1: 'Eco', 2: 'Comfort' };
const NUMBER_OID = { type: 'number', commonStates: MODES };

/** Three authored rows, each with its own style, a legacy key and a binding. */
const THREE_ROWS: WidgetData = {
    oid: 'zigbee.0.lamp.mode',
    oidObject: NUMBER_OID,
    ignoreCommonStates: false,
    values_count: 3,
    value1: 0,
    alias1: 'Off',
    iconColor1: 'red',
    value2: 1,
    alias2: 'Eco',
    iconColor2: 'green',
    backgroundColor2: '#020202',
    header2: '{lamp.eco}',
    value3: 2,
    alias3: 'Comfort',
    iconColor3: 'blue',
    bindings: ['header2', 'header'],
};

/** The patch of `op` on `data`; fails the test when the module refuses it. */
const patchOf = (data: WidgetData, op: StateRowOperation, config = CONFIG): StateRowPatch => {
    const patch = applyStateRowOperation(data, op, config);
    if (!patch) {
        throw new Error(`${op.kind} was refused`);
    }
    return patch;
};

/** The widget data after vis-2 applied the patch of `op`. */
const after = (data: WidgetData, op: StateRowOperation, config = CONFIG): WidgetData =>
    mergeStateRowPatch(data, patchOf(data, op, config));

/** The rows 1..values_count as `[value, alias, iconColor]` — what the runtime walks. */
const rowsOf = (data: WidgetData): unknown[][] =>
    Array.from({ length: data.values_count as number }, (_, i) => [
        data[`value${i + 1}`],
        data[`alias${i + 1}`],
        data[`iconColor${i + 1}`],
    ]);

/** `data.bindings` in a stable order — a patch may reorder the array. */
const sortedBindings = (data: WidgetData): string[] => [...(data.bindings ?? [])].sort();

describe('stateRowCount — the rows the Zustandseditor shows are the Zustandsmenge', () => {
    it('counts the authored rows', () => {
        expect(stateRowCount(THREE_ROWS, CONFIG)).toBe(3);
    });

    it('counts the common.states of a widget saved with ignoreCommonStates on (values_count 0)', () => {
        expect(stateRowCount({ ...THREE_ROWS, ignoreCommonStates: undefined, values_count: 0 }, CONFIG)).toBe(3);
    });

    it('reads the OID object of the configured OID property (Light2: colorLightSwitchOid)', () => {
        const light2 = { colorLightSwitchOidObject: { type: 'boolean' }, values_count: 2 };
        expect(stateRowCount(light2, { ...CONFIG, oidProperty: 'colorLightSwitchOid' })).toBe(2);
    });
});

describe('move — reorders rows with everything they carry', () => {
    it('moves a row with its style, legacy key and binding; the others close up', () => {
        const moved = after(THREE_ROWS, { kind: 'move', from: 2, to: 3 });

        expect(rowsOf(moved)).toEqual([
            [0, 'Off', 'red'],
            [2, 'Comfort', 'blue'],
            [1, 'Eco', 'green'],
        ]);
        expect(moved.backgroundColor3).toBe('#020202');
        expect(moved.header3).toBe('{lamp.eco}');
        expect(moved).not.toHaveProperty('backgroundColor2');
        expect(moved).not.toHaveProperty('header2');
        expect(sortedBindings(moved)).toEqual(['header', 'header3']);
    });

    it('deletes the keys a row no longer has at its new place with null', () => {
        const patch = patchOf(THREE_ROWS, { kind: 'move', from: 2, to: 3 });

        expect(patch).toMatchObject({ backgroundColor2: null, header2: null, value2: 2, alias2: 'Comfort' });
    });

    it('moves upwards like drag-and-drop to the top', () => {
        expect(rowsOf(after(THREE_ROWS, { kind: 'move', from: 3, to: 1 }))).toEqual([
            [2, 'Comfort', 'blue'],
            [0, 'Off', 'red'],
            [1, 'Eco', 'green'],
        ]);
    });

    it('writes values_count and ignoreCommonStates false', () => {
        expect(patchOf(THREE_ROWS, { kind: 'move', from: 1, to: 2 })).toMatchObject({
            values_count: 3,
            ignoreCommonStates: false,
        });
    });

    it('takes over a widget saved with ignoreCommonStates on, rows unchanged for the runtime', () => {
        const legacy = { ...THREE_ROWS, ignoreCommonStates: undefined, values_count: 0 };

        expect(rowsOf(after(legacy, { kind: 'move', from: 1, to: 2 }))).toEqual([
            [1, 'Eco', 'green'],
            [0, 'Off', 'red'],
            [2, 'Comfort', 'blue'],
        ]);
    });

    it('leaves bindings out of the patch when no bound row moves', () => {
        // 1 → 2 touches rows 1 and 2 only; the bound row 3 stays where it is.
        const boundThird = { ...THREE_ROWS, header2: undefined, header3: '{lamp.comfort}', bindings: ['header3'] };

        expect(patchOf(boundThird, { kind: 'move', from: 1, to: 2 })).not.toHaveProperty('bindings');
    });

    it.each([
        { from: 0, to: 1 },
        { from: 1, to: 4 },
    ])('refuses a Feldnummer outside the rows ($from → $to)', ({ from, to }) => {
        expect(applyStateRowOperation(THREE_ROWS, { kind: 'move', from, to }, CONFIG)).toBeNull();
    });
});

describe('add — appends a row with the field defaults', () => {
    /** Row 4 was left behind when values_count dropped (vis-2 group unticked, ADR-0104 §1). */
    const WITH_ORPHAN = { ...THREE_ROWS, value4: 9, alias4: 'Stale', iconSize4: 80, iconHover4: '#444' };

    it('appends after the last row, every key at its default or deleted', () => {
        const added = after(WITH_ORPHAN, { kind: 'add' });

        expect(added.values_count).toBe(4);
        expect(rowsOf(added)[3]).toEqual(['', '', '']);
        expect(added.enableIconColorMask4).toBe(false);
        expect(added).not.toHaveProperty('iconSize4');
        expect(added).not.toHaveProperty('iconHover4');
    });

    it('names every key of the new row, so orphaned keys are overwritten', () => {
        const patch = patchOf(WITH_ORPHAN, { kind: 'add' });

        expect(Object.keys(patch).filter(key => /\D4$/.test(key))).toHaveLength(ROW_KEYS.length);
    });

    it('drops a binding orphaned on the new row', () => {
        const added = after({ ...WITH_ORPHAN, bindings: ['header4', 'header'] }, { kind: 'add' });

        expect(added.bindings).toEqual(['header']);
    });

    it('leaves the existing rows alone', () => {
        const patch = patchOf(THREE_ROWS, { kind: 'add' });

        expect(Object.keys(patch).filter(key => /\D[123]$/.test(key))).toEqual([]);
        expect(patch).toMatchObject({ values_count: 4, ignoreCommonStates: false });
    });
});

describe('clone — copies a row directly behind its source', () => {
    it('inserts the copy behind the source; the following rows move back', () => {
        const cloned = after(THREE_ROWS, { kind: 'clone', row: 2 });

        expect(rowsOf(cloned)).toEqual([
            [0, 'Off', 'red'],
            [1, 'Eco', 'green'],
            [1, 'Eco', 'green'],
            [2, 'Comfort', 'blue'],
        ]);
        expect([cloned.backgroundColor2, cloned.backgroundColor3]).toEqual(['#020202', '#020202']);
        expect(cloned).not.toHaveProperty('backgroundColor4');
    });

    it('copies the bindings of the source row', () => {
        const cloned = after(THREE_ROWS, { kind: 'clone', row: 2 });

        expect(sortedBindings(cloned)).toEqual(['header', 'header2', 'header3']);
        expect([cloned.header2, cloned.header3]).toEqual(['{lamp.eco}', '{lamp.eco}']);
    });

    it('refuses a Feldnummer outside the rows', () => {
        expect(applyStateRowOperation(THREE_ROWS, { kind: 'clone', row: 4 }, CONFIG)).toBeNull();
    });
});

describe('delete — removes a row; the following rows close up', () => {
    it('closes the gap and deletes every key of the former last row', () => {
        const deleted = after(THREE_ROWS, { kind: 'delete', row: 1 });

        expect(rowsOf(deleted)).toEqual([
            [1, 'Eco', 'green'],
            [2, 'Comfort', 'blue'],
        ]);
        expect(deleted.backgroundColor1).toBe('#020202');
        expect(Object.keys(deleted).filter(key => /\D3$/.test(key))).toEqual([]);
    });

    it('drops the bindings of the deleted row and renames the following ones', () => {
        expect(after(THREE_ROWS, { kind: 'delete', row: 2 }).bindings).toEqual(['header']);
        expect(sortedBindings(after(THREE_ROWS, { kind: 'delete', row: 1 }))).toEqual(['header', 'header1']);
    });

    it('deletes the only row down to zero rows', () => {
        const single = { oidObject: { type: 'string' }, ignoreCommonStates: false, values_count: 1, value1: 'a' };

        expect(patchOf(single, { kind: 'delete', row: 1 })).toMatchObject({ value1: null, values_count: 0 });
    });

    it('refuses a Feldnummer outside the rows', () => {
        expect(applyStateRowOperation(THREE_ROWS, { kind: 'delete', row: 0 }, CONFIG)).toBeNull();
    });
});

describe('clear — Zeile leeren removes the styles, keeps the state', () => {
    it('deletes every style key of the row, legacy keys included; value and alias stay', () => {
        const cleared = after(THREE_ROWS, { kind: 'clear', row: 2 });

        expect(rowsOf(cleared)[1]).toEqual([1, 'Eco', undefined]);
        expect(cleared).not.toHaveProperty('backgroundColor2');
        expect(cleared).not.toHaveProperty('header2');
    });

    it('names value and alias not at all, and every style key with null', () => {
        const patch = patchOf(THREE_ROWS, { kind: 'clear', row: 2 });
        const rowKeys = Object.keys(patch).filter(key => /\D2$/.test(key));

        expect(rowKeys.sort()).toEqual(
            ROW_KEYS.filter(key => key !== 'value' && key !== 'alias')
                .map(key => `${key}2`)
                .sort(),
        );
        expect(rowKeys.every(key => patch[key] === null)).toBe(true);
    });

    it('drops the bindings of the style keys and leaves the other rows alone', () => {
        const patch = patchOf(THREE_ROWS, { kind: 'clear', row: 2 });

        expect(patch.bindings).toEqual(['header']);
        expect(Object.keys(patch).filter(key => /\D[13]$/.test(key))).toEqual([]);
        expect(patch).toMatchObject({ values_count: 3, ignoreCommonStates: false });
    });

    it('refuses a Feldnummer outside the rows', () => {
        expect(applyStateRowOperation(THREE_ROWS, { kind: 'clear', row: 4 }, CONFIG)).toBeNull();
    });
});

/** A boolean OID's two rows as the OID pick seeds them (`commonObjectFields`). */
const BOOLEAN_ROWS: WidgetData = {
    oidObject: { type: 'boolean', commonStates: { true: 'TRUE', false: 'FALSE' } },
    ignoreCommonStates: false,
    values_count: 2,
    value1: true,
    alias1: 'TRUE',
    iconColor1: 'green',
    value2: false,
    alias2: 'FALSE',
    iconColor2: 'red',
};

describe('boolean OIDs — exactly two rows', () => {
    it.each<StateRowOperation>([{ kind: 'add' }, { kind: 'clone', row: 1 }, { kind: 'delete', row: 2 }])(
        'refuses $kind',
        op => {
            expect(applyStateRowOperation(BOOLEAN_ROWS, op, CONFIG)).toBeNull();
        },
    );

    it('allows reordering and Zeile leeren', () => {
        expect(rowsOf(after(BOOLEAN_ROWS, { kind: 'move', from: 2, to: 1 }))).toEqual([
            [false, 'FALSE', 'red'],
            [true, 'TRUE', 'green'],
        ]);
        expect(rowsOf(after(BOOLEAN_ROWS, { kind: 'clear', row: 1 }))[0]).toEqual([true, 'TRUE', undefined]);
    });

    it("judges the configured OID property's object (Light2's switch OID)", () => {
        const light2 = { colorLightSwitchOidObject: { type: 'boolean' }, values_count: 2, value1: true, value2: false };

        expect(
            applyStateRowOperation(light2, { kind: 'add' }, { ...CONFIG, oidProperty: 'colorLightSwitchOid' }),
        ).toBeNull();
    });

    it('a widget with fixed rows keeps its two rows whatever the OID type (Light2 on a number switch)', () => {
        const fixed: StateRowsConfig = { ...CONFIG, fixedRows: true };
        const numberRows = { ...BOOLEAN_ROWS, oidObject: { type: 'number' } };

        for (const kind of ['add', 'clone', 'delete'] as const) {
            const op = (kind === 'add' ? { kind } : { kind, row: 1 }) as StateRowOperation;
            expect(applyStateRowOperation(numberRows, op, fixed), kind).toBeNull();
            expect(stateRowOperationAllowed(kind, [numberRows], fixed), kind).toBe(false);
        }
        expect(stateRowOperationAllowed('move', [numberRows], fixed)).toBe(true);
        expect(rowsOf(after(numberRows, { kind: 'move', from: 2, to: 1 }, fixed))).toHaveLength(2);
    });
});

describe('recreate — aus common.states neu anlegen', () => {
    /** The user reordered, renamed and styled the rows; Eco was deleted. */
    const EDITED = {
        ...THREE_ROWS,
        values_count: 2,
        value1: 2,
        alias1: 'Warm',
        iconColor1: 'blue',
        value2: 0,
        alias2: 'Off',
        iconColor2: 'red',
        header2: '{lamp.off}',
        bindings: ['header2'],
        value3: undefined,
        alias3: undefined,
        iconColor3: undefined,
    };

    it('replaces all rows with the common.states in their order, styles reset', () => {
        const recreated = after(EDITED, { kind: 'recreate' });

        expect(rowsOf(recreated)).toEqual([
            [0, 'Off', ''],
            [1, 'Eco', ''],
            [2, 'Comfort', ''],
        ]);
        expect(recreated.header2).toBe('');
        expect(recreated.bindings).toEqual([]);
    });

    it('deletes the rows past the new end', () => {
        const many = { ...THREE_ROWS, values_count: 4, value4: 7, alias4: 'Extra', iconColor4: 'pink' };

        expect(Object.keys(after(many, { kind: 'recreate' })).filter(key => /\D4$/.test(key))).toEqual([]);
    });

    it('refuses an OID without common.states', () => {
        const noStates = { ...THREE_ROWS, oidObject: { type: 'number' } };

        expect(applyStateRowOperation(noStates, { kind: 'recreate' }, CONFIG)).toBeNull();
    });

    it('seeds TRUE/FALSE for a boolean OID without common.states', () => {
        const light2 = { colorLightSwitchOidObject: { type: 'boolean' }, values_count: 0 };

        expect(rowsOf(after(light2, { kind: 'recreate' }, { ...CONFIG, oidProperty: 'colorLightSwitchOid' }))).toEqual([
            [true, 'TRUE', ''],
            [false, 'FALSE', ''],
        ]);
    });
});

describe('fixed rows — recreate and supplement yield exactly the rows true and false', () => {
    const LIGHT2: StateRowsConfig = { ...CONFIG, oidProperty: 'colorLightSwitchOid', fixedRows: true };
    /** Light2 on a number switch that declares states of its own. */
    const NUMBER_SWITCH = {
        colorLightSwitchOidObject: { type: 'number', commonStates: { 0: 'Off', 1: 'On', 2: 'Blink' } },
        ignoreCommonStates: false,
        values_count: 0,
    };

    it('recreates true/false, never the states of a non-boolean switch', () => {
        expect(rowsOf(after(NUMBER_SWITCH, { kind: 'recreate' }, LIGHT2))).toEqual([
            [true, 'TRUE', ''],
            [false, 'FALSE', ''],
        ]);
    });

    it('supplements only true/false', () => {
        const half = { ...NUMBER_SWITCH, values_count: 1, value1: false, alias1: 'Aus' };

        expect(rowsOf(after(half, { kind: 'supplement' }, LIGHT2))).toEqual([
            [false, 'Aus', undefined],
            [true, 'TRUE', ''],
        ]);
    });

    it('takes the alias from common.states[true|false] where the OID declares it', () => {
        const partial = { ...NUMBER_SWITCH, colorLightSwitchOidObject: { type: 'boolean', commonStates: { true: 'An' } } };

        expect(rowsOf(after(partial, { kind: 'recreate' }, LIGHT2))).toEqual([
            [true, 'An', ''],
            [false, 'FALSE', ''],
        ]);
    });

    it('keeps the order of common.states when it declares both', () => {
        const checkbox = { oidObject: { type: 'boolean', commonStates: { false: 'Zu', true: 'Offen' } } };

        expect(rowsOf(after(checkbox, { kind: 'recreate' }, { ...CONFIG, fixedRows: true }))).toEqual([
            [false, 'Zu', ''],
            [true, 'Offen', ''],
        ]);
    });

    it('offers recreate as soon as the OID object exists, whatever its common.states', () => {
        expect(stateRowOperationAllowed('recreate', [NUMBER_SWITCH], LIGHT2)).toBe(true);
        expect(stateRowOperationAllowed('recreate', [{ values_count: 0 }], LIGHT2)).toBe(false);
    });
});

describe('supplement — aus common.states ergänzen (re-picking the OID)', () => {
    it('appends the missing states; the existing rows keep order, alias and styles', () => {
        const edited = { ...THREE_ROWS, values_count: 2, value1: 2, alias1: 'Warm', value2: 0, alias2: 'Aus' };
        const supplemented = after(edited, { kind: 'supplement' });

        expect(rowsOf(supplemented)).toEqual([
            [2, 'Warm', 'red'],
            [0, 'Aus', 'green'],
            [1, 'Eco', ''],
        ]);
        expect(supplemented.backgroundColor2).toBe('#020202');
        expect(supplemented.header2).toBe('{lamp.eco}');
        expect(supplemented.bindings).toEqual(['header2', 'header']);
    });

    it('leaves complete rows alone and still writes the explicit row count', () => {
        const legacy = { ...THREE_ROWS, ignoreCommonStates: undefined, values_count: 0 };

        expect(patchOf(legacy, { kind: 'supplement' })).toEqual({ values_count: 3, ignoreCommonStates: false });
    });

    it('keeps own rows the OID does not declare', () => {
        const own = { ...THREE_ROWS, values_count: 1, value1: 'custom', alias1: 'Own' };

        expect(rowsOf(after(own, { kind: 'supplement' })).map(([value]) => value)).toEqual(['custom', 0, 1, 2]);
    });

    it.each([
        { type: 'number', states: { 1: 'One' }, value: 1 },
        { type: 'string', states: { 1: 'One' }, value: '1' },
        // Integer-like keys come first in a JS object — the order Object.entries hands out.
        { type: 'mixed', states: { true: 'Yes', 2: 'Two', x: 'X' }, value: [2, true, 'x'] },
    ])('converts a $type state key to the value the OID carries', ({ type, states, value }) => {
        const data = { oidObject: { type, commonStates: states }, ignoreCommonStates: false, values_count: 0 };
        const values = rowsOf(after(data, { kind: 'supplement' })).map(([v]) => v);

        expect(values).toEqual(Array.isArray(value) ? value : [value]);
    });

    it('appends no row for a state an existing row already carries as another type', () => {
        // The runtime matches a row to a common state by its string form (useData).
        const data = { ...THREE_ROWS, values_count: 1, value1: '1' };

        expect(rowsOf(after(data, { kind: 'supplement' })).map(([value]) => value)).toEqual(['1', 0, 2]);
    });
});

describe('stateRowsIdentical — may one patch restructure all selected widgets?', () => {
    it('a single widget always is', () => {
        expect(stateRowsIdentical([THREE_ROWS], CONFIG)).toBe(true);
    });

    it('widgets with the same rows are, whatever else differs', () => {
        expect(stateRowsIdentical([THREE_ROWS, { ...THREE_ROWS, header: 'Other', oid: 'other.0.mode' }], CONFIG)).toBe(
            true,
        );
    });

    it('a widget saved with ignoreCommonStates on has the same rows as its edited twin', () => {
        const legacy = { ...THREE_ROWS, ignoreCommonStates: undefined, values_count: 0 };

        expect(stateRowsIdentical([THREE_ROWS, legacy], CONFIG)).toBe(true);
    });

    it.each([
        ['a style', { iconColor3: 'pink' }],
        ['a legacy key', { iconHover1: '#111' }],
        ['the order', { value1: 1, alias1: 'Eco', value2: 0, alias2: 'Off' }],
        ['the row count', { values_count: 2 }],
    ])('widgets differing in %s are not', (_what, change) => {
        expect(stateRowsIdentical([THREE_ROWS, { ...THREE_ROWS, ...change }], CONFIG)).toBe(false);
    });

    it('ignores orphaned keys past the rows', () => {
        expect(stateRowsIdentical([THREE_ROWS, { ...THREE_ROWS, value4: 9 }], CONFIG)).toBe(true);
    });

    it('widgets binding different row fields are not (the binding moves with the patch)', () => {
        expect(stateRowsIdentical([THREE_ROWS, { ...THREE_ROWS, bindings: ['header'] }], CONFIG)).toBe(false);
    });

    it('with a bound row field the other bindings must agree too — the patch writes the whole array', () => {
        expect(stateRowsIdentical([THREE_ROWS, { ...THREE_ROWS, bindings: ['header2'] }], CONFIG)).toBe(false);
        expect(stateRowsIdentical([THREE_ROWS, { ...THREE_ROWS, bindings: ['header', 'header2'] }], CONFIG)).toBe(true);
    });

    it('without a bound row field the other bindings may differ — the patch leaves them out', () => {
        const unbound = { ...THREE_ROWS, bindings: ['header'] };

        expect(stateRowsIdentical([unbound, { ...unbound, bindings: ['footer'] }], CONFIG)).toBe(true);
    });
});

describe('stateRowKeyDiffers — the „unterschiedlich" mark of a detail field', () => {
    it('a single widget never differs', () => {
        expect(stateRowKeyDiffers([THREE_ROWS], 'iconColor1')).toBe(false);
    });

    it('differs where one selected widget stores another value', () => {
        const other = { ...THREE_ROWS, iconColor3: 'pink' };

        expect(stateRowKeyDiffers([THREE_ROWS, THREE_ROWS, other], 'iconColor3')).toBe(true);
        expect(stateRowKeyDiffers([THREE_ROWS, other], 'iconColor1')).toBe(false);
    });

    it('a key one widget lacks differs from a set one, an absent key equals an absent one', () => {
        expect(stateRowKeyDiffers([THREE_ROWS, { ...THREE_ROWS, footer1: 'x' }], 'footer1')).toBe(true);
        expect(stateRowKeyDiffers([THREE_ROWS, { ...THREE_ROWS }], 'footer1')).toBe(false);
    });
});

describe('stateRowDiffers — the mark of a list row', () => {
    it('a single widget never differs', () => {
        expect(stateRowDiffers([THREE_ROWS], 1, CONFIG)).toBe(false);
    });

    it('marks only the rows whose keys differ', () => {
        const other = { ...THREE_ROWS, iconHover3: '#333' };

        expect([1, 2, 3].map(n => stateRowDiffers([THREE_ROWS, other], n, CONFIG))).toEqual([false, false, true]);
    });

    it('marks a row another widget does not have', () => {
        const shorter = { ...THREE_ROWS, values_count: 2 };

        expect([1, 2, 3].map(n => stateRowDiffers([THREE_ROWS, shorter], n, CONFIG))).toEqual([false, false, true]);
    });

    it('marks a row whose field is bound in one widget only', () => {
        const unbound = { ...THREE_ROWS, bindings: ['header'] };

        expect([1, 2, 3].map(n => stateRowDiffers([THREE_ROWS, unbound], n, CONFIG))).toEqual([false, true, false]);
    });
});

describe('stateRowsDifference — what the InfoBox can point to', () => {
    it('is null on identical rows', () => {
        expect(stateRowsDifference([THREE_ROWS, { ...THREE_ROWS, header: 'x' }], CONFIG)).toBeNull();
    });

    it('is rows when a shown row differs', () => {
        expect(stateRowsDifference([THREE_ROWS, { ...THREE_ROWS, alias2: 'Warm' }], CONFIG)).toBe('rows');
    });

    it('is count when only another widget has more rows', () => {
        expect(stateRowsDifference([{ ...THREE_ROWS, values_count: 2 }, THREE_ROWS], CONFIG)).toBe('count');
    });

    it('is bindings when only bindings outside the rows disagree', () => {
        expect(stateRowsDifference([THREE_ROWS, { ...THREE_ROWS, bindings: ['header2', 'title'] }], CONFIG)).toBe(
            'bindings',
        );
    });
});

describe('stateRowOperationAllowed — what the toolbar offers', () => {
    it('offers every action on one widget with common.states', () => {
        for (const kind of ['move', 'add', 'clone', 'delete', 'clear', 'recreate', 'supplement'] as const) {
            expect(stateRowOperationAllowed(kind, [THREE_ROWS], CONFIG)).toBe(true);
        }
    });

    it('withholds add, clone and delete on a boolean OID', () => {
        expect(
            ['move', 'add', 'clone', 'delete', 'clear'].filter(kind =>
                stateRowOperationAllowed(kind as StateRowOperation['kind'], [BOOLEAN_ROWS], CONFIG),
            ),
        ).toEqual(['move', 'clear']);
    });

    it('withholds recreate while the OID has no common.states', () => {
        expect(stateRowOperationAllowed('recreate', [{ ...THREE_ROWS, oidObject: { type: 'string' } }], CONFIG)).toBe(
            false,
        );
        expect(stateRowOperationAllowed('recreate', [{ ...THREE_ROWS, oidObject: undefined }], CONFIG)).toBe(false);
    });

    it('withholds the structural actions when the selected widgets differ', () => {
        const other = { ...THREE_ROWS, iconColor3: 'pink' };

        for (const kind of ['move', 'add', 'clone', 'delete', 'recreate', 'supplement'] as const) {
            expect(stateRowOperationAllowed(kind, [THREE_ROWS, other], CONFIG)).toBe(false);
        }
    });

    it('offers Zeile leeren across differing styles, as long as the row counts and bindings agree', () => {
        expect(stateRowOperationAllowed('clear', [THREE_ROWS, { ...THREE_ROWS, iconColor3: 'pink' }], CONFIG)).toBe(
            true,
        );
        expect(stateRowOperationAllowed('clear', [THREE_ROWS, { ...THREE_ROWS, values_count: 4 }], CONFIG)).toBe(false);
        expect(stateRowOperationAllowed('clear', [THREE_ROWS, { ...THREE_ROWS, bindings: [] }], CONFIG)).toBe(false);
    });

    it('offers nothing without a widget', () => {
        expect(stateRowOperationAllowed('move', [], CONFIG)).toBe(false);
    });
});
