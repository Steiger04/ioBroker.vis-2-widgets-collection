/**
 * The values group of the 11 state widgets: the Zustandseditor (ADR-0104).
 *
 * @module lib/stateEditorFields
 * @remarks
 * Replaces the indexed vis-2 group `values` (`indexFrom: 1, indexTo: 'values_count'`), which
 * vis-2 cloned per Feldnummer on every recalculation. The group is not indexed; it holds:
 * 1. `values_count` — the toolbar row with the label "Rows (n)", or the InfoBox
 *    "pick an OID first". The group must own this key: vis-2 renders a group's body only while
 *    one of its named fields has a value (`hasValues`); unticking the group deletes it, like
 *    any vis-2 group (0 Zustandszeilen).
 * 2. the list of Zustandszeilen (own row, empty label);
 * 3. the Gewählte Zeile row;
 * 4. the detail of the selected row: per per-state field (`stateEditorSpec().perStateFields`, the
 *    single source) a wrapper rendering `name{n}` of the selected row as a native row
 *    (`StateDetailField`), the section dividers as they are — all hidden without a row.
 * Each widget only swaps its group entry and passes its parameters ({@link StateEditorParams}).
 * Every field but `values_count` and the per-state dividers carries a `stateEditor:` name no
 * data key has: with several widgets selected, vis-2 keeps a field only when
 * `${group}.${field.name}` was counted once per widget (`visWidgetsCatalog.tsx`
 * parseAttributes, `Attributes/Widget/index.tsx` recalculateFields), so two unnamed fields of
 * one group (both `undefined`) would vanish. The names are never written by the Zustandseditor;
 * vis-2's group checkbox sets them to `null` like every field of a group it ticks.
 */
import StateDetailField from '../components/StateEditor/StateDetailField';
import StateEditorRowsField from '../components/StateEditor/StateEditorRowsField';
import SelectedStateRow from '../components/StateEditor/SelectedStateRow';
import StateRowList from '../components/StateEditor/StateRowList';
import { guardWidgetData } from './fieldFactories';
import { stateEditorSpec } from './stateEditorConfig';
import { stateRowCount, stateRowOidObject } from './stateRows';

import type { StateEditorFieldProps } from '../components/StateEditor/useStateEditor';
import type { StateEditorParams, StateEditorSpec } from './stateEditorConfig';
import type { HiddenPredicate } from './fieldFactories';
import type { ExtendedField } from '../types/field-definitions/extended-field';
import type { RxWidgetInfoAttributesField, RxWidgetInfoGroup, WidgetData } from '@iobroker/types-vis-2';
import type React from 'react';

/** Group-level options of the values group. */
export type StateEditorGroupOptions = {
    /** When the whole group is hidden (Light2: outside the button mode). */
    hidden?: RxWidgetInfoGroup['hidden'];
};

/**
 * The custom-field `component` of a Zustandseditor field: hands `render` the widget's spec and
 * the props vis-2 passes (data guarded, see `guardWidgetData`).
 *
 * @param spec The widget's Zustandseditor spec.
 * @param render Renders the field from its {@link StateEditorFieldProps}.
 * @returns The `component` of the field definition.
 */
const stateEditorComponent = (
    spec: StateEditorSpec,
    render: (fieldProps: StateEditorFieldProps) => React.JSX.Element,
): ReturnType<typeof guardWidgetData<unknown, React.JSX.Element>> =>
    guardWidgetData((_field: unknown, data, onDataChange, props) => render({ spec, data, onDataChange, props }));

/**
 * Adds the "no row" rule to a per-state field's own widget-level `hidden` rule.
 *
 * @param noRows Hides while there is no row to show.
 * @param hidden The definition's own rule (vis-2 calls it without an index here).
 * @returns The combined predicate.
 * @throws {Error} When the rule is a vis-2 string condition — it cannot be combined without `eval`;
 *   `commonFields` declares predicates.
 */
const unlessRows = (noRows: (data: WidgetData) => boolean, hidden: unknown): HiddenPredicate => {
    if (hidden === undefined) {
        return noRows;
    }
    if (typeof hidden !== 'function') {
        throw new Error(`stateEditorGroup: a per-state hidden rule must be a predicate, got ${JSON.stringify(hidden)}`);
    }
    const rule = hidden as HiddenPredicate;
    return (data, index) => noRows(data) || !!rule(data, index);
};

/**
 * The detail of the selected row: a wrapper per per-state field, the dividers as they are.
 *
 * @param spec The widget's Zustandseditor spec.
 * @param noRows Hides the detail while there is no row.
 * @returns The detail fields, in the order of the per-state definitions.
 */
const stateDetailFields = (
    spec: StateEditorSpec,
    noRows: (data: WidgetData) => boolean,
): RxWidgetInfoAttributesField[] =>
    spec.perStateFields.map(definition => {
        const { hidden, label, tooltip } = definition;
        if (!definition.name) {
            // A section divider: unchanged, only gone without a row.
            return { ...definition, hidden: unlessRows(noRows, hidden) };
        }
        // A rule reading the Feldnummer locks the field instead (StateDetailField); only rules on
        // widget level hide the row — vis-2 passes no index outside an indexed group, so for
        // `enableIconColorMask` the rule yields "visible".
        return {
            name: `stateEditor:${definition.name}`,
            type: 'custom',
            label: label ?? '',
            ...(tooltip === undefined ? {} : { tooltip }),
            noBinding: true,
            hidden: unlessRows(noRows, hidden),
            // The keys it stores, `name{n}`, read with the definition's rule (lib/usableWidgetData).
            perStateField: definition,
            component: stateEditorComponent(spec, fieldProps => (
                <StateDetailField
                    {...fieldProps}
                    definition={definition}
                />
            )),
        };
    });

/**
 * Builds the values group of a state widget.
 *
 * @param params The widget's parameters: OID property, Marker-Ebene, fixed two rows.
 * @param options Group-level options (visibility).
 * @returns The group entry for the widget's `visAttrs`.
 * @example stateEditorGroup({ oidProperty: 'colorLightSwitchOid', fixedRows: true }, { hidden: … })
 */
export const stateEditorGroup = (
    params: StateEditorParams = {},
    options: StateEditorGroupOptions = {},
): RxWidgetInfoGroup => {
    const spec = stateEditorSpec(params);
    const noOidObject = (data: WidgetData): boolean => !stateRowOidObject(data, spec.config);
    const noRows = (data: WidgetData): boolean => noOidObject(data) || stateRowCount(data, spec.config) === 0;

    const fields: RxWidgetInfoAttributesField[] = [
        {
            name: 'values_count',
            type: 'custom',
            label: 'state_editor_rows',
            noBinding: true,
            default: 0,
            // The number of Zustandszeilen; anything else reads as unset (lib/usableWidgetData).
            storedValue: 'number',
            component: stateEditorComponent(spec, fieldProps => <StateEditorRowsField {...fieldProps} />),
        } as ExtendedField,
        {
            name: 'stateEditor:list',
            type: 'custom',
            label: '',
            noBinding: true,
            hidden: noOidObject,
            component: stateEditorComponent(spec, fieldProps => <StateRowList {...fieldProps} />),
        },
        {
            name: 'stateEditor:selectedRow',
            type: 'custom',
            label: 'state_editor_selected_row',
            noBinding: true,
            hidden: noRows,
            component: stateEditorComponent(spec, fieldProps => <SelectedStateRow {...fieldProps} />),
        },
        ...stateDetailFields(spec, noRows),
    ];

    return {
        name: 'values',
        label: 'state_editor_group',
        ...(options.hidden === undefined ? {} : { hidden: options.hidden }),
        fields,
    };
};
