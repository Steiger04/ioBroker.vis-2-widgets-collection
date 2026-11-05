/**
 * Zustandszeilen-Operationen: every action of the Zustandseditor as one vis-2 patch.
 *
 * @module lib/stateRows
 * @remarks
 * A Zustandszeile is the set of keys sharing one Feldnummer `n` (CONTEXT.md): every per-state
 * field name with the suffix `n`, plus the legacy keys {@link LEGACY_STATE_ROW_KEYS}
 * (ADR-0104 §2). React-free on purpose — the Zustandseditor's list, toolbar, detail fields, the
 * OID pick and the multi-selection gate all build on it.
 *
 * - Every action yields one vis-2 custom-field patch (`null` deletes a key, an unnamed key keeps
 *   its value) carrying `values_count` and `ignoreCommonStates: false`.
 * - The rows an action works on are the Zustandsmenge ({@link stateRowCount}): a widget saved
 *   with `ignoreCommonStates` on (`values_count` 0, rows filled) shows the rows its runtime
 *   shows; its first action writes that count explicitly, so the runtime keeps showing them.
 * - Under multi-selection the editor applies an action to the first widget's data and writes
 *   the patch to all of them — only where {@link stateRowOperationAllowed} says so.
 */
import effectiveStateCount from './effectiveStateCount';

import type { AllowedType } from './allowedOidTypes';

import type { WidgetData } from '@iobroker/types-vis-2';

/** Keys of former per-state editor fields (02/2025–02/2026) a row still carries; Gauge reads two of them. */
export const LEGACY_STATE_ROW_KEYS = ['iconHover', 'backgroundColor', 'frameBackgroundColor'] as const;

/** The keys of a Zustandszeile (without Feldnummer) and the value each one gets in a new row. */
export type StateRowSchema = {
    /** Base names in field order, legacy keys last. */
    keys: readonly string[];
    /** Per base name the field's declared `default`, `null` where it declares none. */
    defaults: Readonly<Record<string, unknown>>;
};

/** The part of a field definition the schema reads. */
type FieldLike = { name?: string; default?: unknown };

/**
 * Derives the row schema from the per-state field definitions — the single source of the
 * per-state fields (`commonFields({ perState: true, allFields: false })`).
 *
 * @param fields The per-state field list; unnamed entries (dividers) carry no key.
 * @returns The schema: every named field plus the legacy keys.
 */
export const stateRowSchema = (fields: readonly FieldLike[]): StateRowSchema => {
    const defaults: Record<string, unknown> = {};

    for (const field of fields) {
        if (field.name) {
            defaults[field.name] = field.default ?? null;
        }
    }
    for (const key of LEGACY_STATE_ROW_KEYS) {
        defaults[key] ??= null;
    }

    return { keys: Object.keys(defaults), defaults };
};

/** The OID object as the OID pick stores it in `<oidProperty>Object` (`commonObjectFields`). */
type StoredOidObject = { type?: string; commonStates?: Record<string, unknown> | null } | null | undefined;

/** Which widget a Zustandseditor edits: its row schema and the OID property its rows belong to. */
export type StateRowsConfig = {
    schema: StateRowSchema;
    /** Data property of the OID the rows describe — `oid`, Light2 `colorLightSwitchOid`. */
    oidProperty: string;
    /**
     * The widget always has exactly two rows (Light2's switch rows), whatever its OID type —
     * add/clone/delete are refused as on a boolean OID.
     */
    fixedRows?: boolean;
};

/** A Zustandseditor action; rows are addressed by Feldnummer (1-based). */
export type StateRowOperation =
    /** Moves row `from` to position `to` (drag-and-drop, up/down, Alt+↑/↓). */
    | { kind: 'move'; from: number; to: number }
    /** Appends a row whose keys carry their field default (or are deleted). */
    | { kind: 'add' }
    /** Inserts a copy of `row` directly behind it. */
    | { kind: 'clone'; row: number }
    /** Removes `row`; the following rows close up. */
    | { kind: 'delete'; row: number }
    /** Zeile leeren: deletes every style key of `row`; `value{n}`/`alias{n}` stay. */
    | { kind: 'clear'; row: number }
    /** Aus common.states neu anlegen: one row per state of the OID, in its order; all rows replaced. */
    | { kind: 'recreate' }
    /** Aus common.states ergänzen: appends the states no row carries yet; existing rows stay. */
    | { kind: 'supplement' };

/** Actions a boolean OID refuses: its two rows are fixed (ADR-0104 §3). */
const FIXED_ROW_KINDS: readonly StateRowOperation['kind'][] = ['add', 'clone', 'delete'];

/** The keys „Zeile leeren" keeps: without its value a row is skipped at runtime (ADR-0104 §3). */
const STATE_KEYS: readonly string[] = ['value', 'alias'];

/** A vis-2 custom-field patch: `null` deletes a key, a key not named keeps its value. */
export type StateRowPatch = Record<string, unknown>;

/** One Zustandszeile: its values per base key and the base keys bound in `data.bindings`. */
type Row = { values: Record<string, unknown>; bound: Set<string> };

const oidObjectOf = (data: WidgetData, config: StateRowsConfig): StoredOidObject =>
    data[`${config.oidProperty}Object`] as StoredOidObject;

/** Whether the widget's rows are fixed: a boolean OID, or a widget declaring fixed rows. */
const hasFixedRows = (data: WidgetData, config: StateRowsConfig): boolean =>
    !!config.fixedRows || oidObjectOf(data, config)?.type === 'boolean';

/**
 * The number of Zustandszeilen the editor shows: the Zustandsmenge the runtime walks.
 *
 * @param data The widget data.
 * @param config Schema and OID property of the widget.
 * @returns The row count — for a widget saved with `ignoreCommonStates` on (`values_count` 0,
 *   rows filled) the OID's `common.states` count, exactly the rows the runtime shows.
 */
export const stateRowCount = (data: WidgetData, config: StateRowsConfig): number =>
    effectiveStateCount({
        valuesCount: data.values_count as number | undefined,
        commonStatesCount: Object.keys(oidObjectOf(data, config)?.commonStates || {}).length,
        ignoreCommonStates: data.ignoreCommonStates as boolean | undefined,
    });

/**
 * Converts a `common.states` key to the value an OID of `type` carries.
 *
 * @param value The state key (object keys are always strings).
 * @param type The OID's value type.
 * @returns The typed value; `mixed` takes `true`/`false`/numbers literally, else the string.
 */
export const convertValueByType = (value: string, type: AllowedType): boolean | number | string => {
    switch (type) {
        case 'boolean':
            return value === 'true';
        case 'number':
            return Number(value);
        case 'string':
            return String(value);
        case 'mixed':
            if (value === 'true') {
                return true;
            }
            if (value === 'false') {
                return false;
            }
            if (!isNaN(Number(value)) && value !== '') {
                return Number(value);
            }
            return String(value);
        default:
            return String(value);
    }
};

/**
 * The states rows are made from: the OID's `common.states`; a boolean OID without them gets
 * TRUE/FALSE, as the OID picks seed it (`commonObjectFields`, Light2's switch OID).
 */
const sourceStates = (oidObject: StoredOidObject): [string, unknown][] => {
    const states = Object.entries(oidObject?.commonStates || {});
    if (states.length === 0 && oidObject?.type === 'boolean') {
        return [
            ['true', 'TRUE'],
            ['false', 'FALSE'],
        ];
    }
    return states;
};

const stateRow = (config: StateRowsConfig, oidObject: StoredOidObject, [key, label]: [string, unknown]): Row => ({
    values: {
        ...config.schema.defaults,
        value: convertValueByType(key, oidObject?.type as AllowedType),
        alias: String(label),
    },
    bound: new Set(),
});

const readRows = (data: WidgetData, config: StateRowsConfig, count: number): Row[] => {
    const bindings = new Set<string>(data.bindings || []);

    return Array.from({ length: count }, (_, i) => {
        const row: Row = { values: {}, bound: new Set() };
        for (const key of config.schema.keys) {
            const name = `${key}${i + 1}`;
            row.values[key] = data[name];
            if (bindings.has(name)) {
                row.bound.add(key);
            }
        }
        return row;
    });
};

/** Whether two name lists hold the same entries, in any order. */
export const sameItems = (a: readonly string[], b: readonly string[]): boolean =>
    a.length === b.length && [...a].sort().join('\n') === [...b].sort().join('\n');

/**
 * Writes `rows` back for the Feldnummern `first..last` (default: up to the old or new end,
 * whichever is further): every key of a row (`null` where it has no value), `null` for every
 * key of a row past the new end, and the bindings of those rows renamed with their row. Keys
 * in `keep` are neither named nor rebound — they stay as they are.
 */
const rewriteRows = (
    data: WidgetData,
    config: StateRowsConfig,
    rows: Row[],
    first: number,
    last = Math.max(stateRowCount(data, config), rows.length),
    keep: readonly string[] = [],
): StateRowPatch => {
    const patch: StateRowPatch = {};
    const touched = new Set<string>();
    const rebound: string[] = [];

    for (let n = first; n <= last; n++) {
        const row = rows[n - 1];
        for (const key of config.schema.keys) {
            if (keep.includes(key)) {
                continue;
            }
            const name = `${key}${n}`;
            touched.add(name);
            patch[name] = row?.values[key] ?? null;
            if (row?.bound.has(key)) {
                rebound.push(name);
            }
        }
    }

    const bindings = data.bindings || [];
    const nextBindings = [...bindings.filter(name => !touched.has(name)), ...rebound];
    if (!sameItems(bindings, nextBindings)) {
        patch.bindings = nextBindings;
    }

    patch.values_count = rows.length;
    patch.ignoreCommonStates = false;
    return patch;
};

const isRow = (n: number, count: number): boolean => Number.isInteger(n) && n >= 1 && n <= count;

/**
 * Translates one Zustandseditor action into the vis-2 patch that performs it.
 *
 * @param data The widget data the action applies to.
 * @param op The action.
 * @param config Schema and OID property of the widget.
 * @returns The patch — always with `values_count` and `ignoreCommonStates: false` — or `null`
 *   when the action is refused: a Feldnummer outside the rows, add/clone/delete on a boolean
 *   OID or a widget with fixed rows, recreate without states to recreate from.
 */
export const applyStateRowOperation = (
    data: WidgetData,
    op: StateRowOperation,
    config: StateRowsConfig,
): StateRowPatch | null => {
    const oidObject = oidObjectOf(data, config);
    if (FIXED_ROW_KINDS.includes(op.kind) && hasFixedRows(data, config)) {
        return null;
    }
    const count = stateRowCount(data, config);
    const rows = readRows(data, config, count);

    switch (op.kind) {
        case 'move': {
            if (!isRow(op.from, count) || !isRow(op.to, count)) {
                return null;
            }
            const [moved] = rows.splice(op.from - 1, 1);
            rows.splice(op.to - 1, 0, moved);
            return rewriteRows(data, config, rows, Math.min(op.from, op.to), Math.max(op.from, op.to));
        }
        case 'add': {
            rows.push({ values: { ...config.schema.defaults }, bound: new Set() });
            return rewriteRows(data, config, rows, rows.length);
        }
        case 'clone': {
            if (!isRow(op.row, count)) {
                return null;
            }
            const source = rows[op.row - 1];
            rows.splice(op.row, 0, { values: { ...source.values }, bound: new Set(source.bound) });
            return rewriteRows(data, config, rows, op.row + 1);
        }
        case 'delete': {
            if (!isRow(op.row, count)) {
                return null;
            }
            rows.splice(op.row - 1, 1);
            return rewriteRows(data, config, rows, op.row);
        }
        case 'clear': {
            if (!isRow(op.row, count)) {
                return null;
            }
            const row = rows[op.row - 1];
            for (const key of config.schema.keys) {
                if (!STATE_KEYS.includes(key)) {
                    row.values[key] = undefined;
                    row.bound.delete(key);
                }
            }
            return rewriteRows(data, config, rows, op.row, op.row, STATE_KEYS);
        }
        case 'recreate': {
            const states = sourceStates(oidObject);
            if (states.length === 0) {
                return null;
            }
            return rewriteRows(
                data,
                config,
                states.map(state => stateRow(config, oidObject, state)),
                1,
            );
        }
        case 'supplement': {
            // A row carries a state when its value's string form is the state key — the
            // match the runtime makes (useData).
            const carried = new Set(rows.map(row => String(row.values.value)));
            const missing = sourceStates(oidObject).filter(([key]) => !carried.has(key));
            rows.push(...missing.map(state => stateRow(config, oidObject, state)));
            return rewriteRows(data, config, rows, count + 1);
        }
    }
};

/**
 * Applies a patch the way vis-2 applies a custom field's `onDataChange`
 * (`WidgetField.tsx`): `null` deletes the key, every other named key is set.
 *
 * @param data The widget data.
 * @param patch The patch.
 * @returns A new data object; `data` stays untouched.
 */
export const mergeStateRowPatch = (data: WidgetData, patch: StateRowPatch): WidgetData => {
    const next: WidgetData = { ...data };
    for (const [key, value] of Object.entries(patch)) {
        if (value === null) {
            delete next[key];
        } else {
            next[key] = value;
        }
    }
    return next;
};

/** Equal as stored values; an absent key equals `null` (a patch's `null` deletes it). */
const sameValue = (a: unknown, b: unknown): boolean =>
    (a ?? null) === (b ?? null) || (typeof a === 'object' && JSON.stringify(a) === JSON.stringify(b));

/**
 * Whether a data attribute name is a row key — a base key of the schema with a Feldnummer
 * (`header2`, also past the rows).
 *
 * @param name A data attribute name, e.g. an entry of `data.bindings`.
 * @param config Schema and OID property of the widget.
 * @returns `true` for `<row key><n>`.
 */
export const isStateRowKey = (name: string, config: StateRowsConfig): boolean => {
    const match = /^(\D+)\d+$/.exec(name);
    return !!match && config.schema.keys.includes(match[1]);
};

/** The entries of `data.bindings` that name a row key. */
const rowBindingsOf = (data: WidgetData, config: StateRowsConfig): string[] =>
    (data.bindings || []).filter(name => isStateRowKey(name, config));

/**
 * Whether one patch keeps every widget's bindings right: the row bindings agree, and where
 * there are any the whole arrays agree — a patch that renames one writes the whole array.
 */
const bindingsAgree = (datas: readonly WidgetData[], config: StateRowsConfig): boolean => {
    const [first, ...others] = datas;
    const rowBindings = rowBindingsOf(first, config);
    if (!others.every(data => sameItems(rowBindingsOf(data, config), rowBindings))) {
        return false;
    }
    const all = first.bindings || [];
    return rowBindings.length === 0 || others.every(data => sameItems(data.bindings || [], all));
};

/**
 * Whether the selected widgets' Zustandszeilen are identical — the condition for a structural
 * action under multi-selection: the custom-field API writes one patch to all of them
 * (ADR-0104 §4).
 *
 * @param datas The data of every selected widget.
 * @param config Schema and OID property of the widgets.
 * @returns `true` when row count, every row key of every row and the bindings agree;
 *   orphaned keys past the rows and everything outside the rows do not count.
 */
export const stateRowsIdentical = (datas: readonly WidgetData[], config: StateRowsConfig): boolean => {
    if (datas.length < 2) {
        return true;
    }
    const [first, ...others] = datas;
    const count = stateRowCount(first, config);

    return (
        others.every(data => stateRowCount(data, config) === count) &&
        others.every(data => {
            for (let n = 1; n <= count; n++) {
                for (const key of config.schema.keys) {
                    if (!sameValue(data[`${key}${n}`], first[`${key}${n}`])) {
                        return false;
                    }
                }
            }
            return true;
        }) &&
        bindingsAgree(datas, config)
    );
};

/**
 * Whether the selected widgets store different values under one key — the „unterschiedlich"
 * mark of a detail field under multi-selection.
 *
 * @param datas The data of every selected widget.
 * @param key The indexed key, e.g. `iconColor2`.
 * @returns `true` when a widget's value differs from the first one's; an absent key equals an
 *   absent one, as in {@link stateRowsIdentical}.
 */
export const stateRowKeyDiffers = (datas: readonly WidgetData[], key: string): boolean => {
    const [first, ...others] = datas;
    return others.some(data => !sameValue(data[key], first[key]));
};

/**
 * Whether row `n` differs between the selected widgets — the mark of a list row under
 * multi-selection, showing where the rows run apart (and so why structural actions are locked).
 *
 * @param datas The data of every selected widget; the list shows the first one's rows.
 * @param n The Feldnummer.
 * @param config Schema and OID property of the widgets.
 * @returns `true` when another widget has no row `n`, stores another value under one of its
 *   keys, or binds one of its keys where the first widget does not (or the other way round).
 */
export const stateRowDiffers = (datas: readonly WidgetData[], n: number, config: StateRowsConfig): boolean => {
    const [first, ...others] = datas;
    const bound = (data: WidgetData, name: string): boolean => (data.bindings || []).includes(name);

    return others.some(
        data =>
            stateRowCount(data, config) < n ||
            config.schema.keys.some(key => {
                const name = `${key}${n}`;
                return !sameValue(data[name], first[name]) || bound(data, name) !== bound(first, name);
            }),
    );
};

/**
 * Whether the Zustandseditor offers an action for the selected widgets.
 *
 * @param kind The action.
 * @param datas The data of every selected widget.
 * @param config Schema and OID property of the widgets.
 * @returns `false` for add/clone/delete on a boolean OID or fixed rows, for recreate without states to
 *   recreate from, and under multi-selection for every structural action unless the
 *   Zustandszeilen are identical — „Zeile leeren" only needs equal row counts and bindings,
 *   because its patch carries `values_count` and the bindings, not the other rows.
 */
export const stateRowOperationAllowed = (
    kind: StateRowOperation['kind'],
    datas: readonly WidgetData[],
    config: StateRowsConfig,
): boolean => {
    if (datas.length === 0) {
        return false;
    }
    if (FIXED_ROW_KINDS.includes(kind) && datas.some(data => hasFixedRows(data, config))) {
        return false;
    }
    if (kind === 'recreate' && datas.some(data => sourceStates(oidObjectOf(data, config)).length === 0)) {
        return false;
    }
    if (kind === 'clear') {
        const count = stateRowCount(datas[0], config);
        return datas.every(data => stateRowCount(data, config) === count) && bindingsAgree(datas, config);
    }
    return stateRowsIdentical(datas, config);
};
