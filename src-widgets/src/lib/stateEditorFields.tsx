/**
 * The „Werte" group of the 11 state widgets: the Zustandseditor (ADR-0104).
 *
 * @module lib/stateEditorFields
 * @remarks
 * Replaces the indexed vis-2 group `values` (`indexFrom: 1, indexTo: 'values_count'`), which
 * vis-2 cloned per Feldnummer on every recalculation. The group is not indexed; it holds:
 * 1. `values_count` — the toolbar row with the label „Zeilen (n)", or the InfoBox
 *    „erst OID wählen". The group must own this key: vis-2 renders a group's body only while
 *    one of its named fields has a value (`hasValues`); unticking the group deletes it, like
 *    any vis-2 group (0 Zustandszeilen).
 * 2. the list of Zustandszeilen (own row, empty label);
 * 3. the Kopfzeile „Gewählte Zeile" — the detail fields of the selected row follow it
 *    (Ticket 03).
 * Each widget only swaps its group entry and passes its parameters ({@link StateEditorParams}).
 * The `values_count` field mirrors the resolved spec as `stateEditor` (introspected by the
 * parity tests; vis-2 ignores unknown keys).
 */
import StateEditorRowsField from '../components/StateEditor/StateEditorRowsField';
import StateRowHeader from '../components/StateEditor/StateRowHeader';
import StateRowList from '../components/StateEditor/StateRowList';
import { guardWidgetData } from './fieldFactories';
import { stateEditorSpec } from './stateEditorConfig';
import { stateRowCount } from './stateRows';

import type { StateEditorParams, StateEditorSpec } from './stateEditorConfig';
import type { RxWidgetInfoAttributesField, RxWidgetInfoGroup, WidgetData } from '@iobroker/types-vis-2';

export type { StateEditorParams, StateEditorSpec } from './stateEditorConfig';

/** Group-level options of the „Werte" group. */
export type StateEditorGroupOptions = {
    /** When the whole group is hidden (Light2: outside the button mode). */
    hidden?: RxWidgetInfoGroup['hidden'];
};

/** The `values_count` field with its introspectable spec mirror. */
export type StateEditorRowsFieldDefinition = RxWidgetInfoAttributesField & { stateEditor: StateEditorSpec };

/**
 * Builds the „Werte" group of a state widget.
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
    const noOidObject = (data: WidgetData): boolean => !data[`${spec.config.oidProperty}Object`];
    const noRows = (data: WidgetData): boolean => noOidObject(data) || stateRowCount(data, spec.config) === 0;

    const rowsField: StateEditorRowsFieldDefinition = {
        name: 'values_count',
        type: 'custom',
        label: 'state_editor_rows',
        noBinding: true,
        default: 0,
        stateEditor: spec,
        component: guardWidgetData((_field, data, onDataChange, props) => (
            <StateEditorRowsField
                spec={spec}
                data={data}
                onDataChange={onDataChange}
                props={props}
            />
        )),
    } as StateEditorRowsFieldDefinition;

    const fields: RxWidgetInfoAttributesField[] = [
        rowsField,
        {
            type: 'custom',
            label: '',
            hidden: noOidObject,
            component: guardWidgetData((_field, data, onDataChange, props) => (
                <StateRowList
                    spec={spec}
                    data={data}
                    onDataChange={onDataChange}
                    props={props}
                />
            )),
        },
        {
            type: 'custom',
            label: 'state_editor_selected_row',
            noBinding: true,
            hidden: noRows,
            component: guardWidgetData((_field, data, onDataChange, props) => (
                <StateRowHeader
                    spec={spec}
                    data={data}
                    onDataChange={onDataChange}
                    props={props}
                />
            )),
        },
    ];

    return {
        name: 'values',
        label: 'state_editor_group',
        ...(options.hidden === undefined ? {} : { hidden: options.hidden }),
        fields,
    };
};
