/**
 * What every field of the Zustandseditor reads: its rows and the shared selection.
 *
 * @module components/StateEditor/useStateEditor
 * @remarks
 * The list, the Kopfzeile, the toolbar (Ticket 04) and the detail fields (Ticket 03) are
 * separate vis-2 custom fields of the „Werte" group; each one calls this hook with the props
 * vis-2 hands it, so they agree on rows and selected row without talking to each other.
 */
import { useMemo } from 'react';

import { stateRowCount } from '../../lib/stateRows';
import { stateRowSelectionKey, useStateRowSelection } from './stateRowSelection';

import type { StateEditorSpec } from '../../lib/stateEditorConfig';
import type { RxWidgetInfoCustomComponentProperties, WidgetData } from '@iobroker/types-vis-2';

/** The props vis-2 hands a Zustandseditor field (custom-field contract), plus its widget's spec. */
export type StateEditorFieldProps = {
    /** The widget's Zustandseditor parameters, per-state fields and row config. */
    spec: StateEditorSpec;
    /** The data of the (first) selected widget. */
    data: WidgetData;
    /** Writes one patch into every selected widget (`null` deletes a key). */
    onDataChange: (patch: WidgetData) => void;
    /** vis-2 editor context: theme, views, selected view and widgets. */
    props: RxWidgetInfoCustomComponentProperties;
};

/** One Zustandszeile as the list and the Kopfzeile show it. */
export type StateRowSummary = {
    /** Feldnummer (1-based). */
    n: number;
    /** `value{n}` as text. */
    value: string;
    /** `alias{n}` as text. */
    alias: string;
    /** The row has an icon (`icon{n}` or `iconSmall{n}`). */
    hasIcon: boolean;
};

/** A row key as list text; values and aliases are scalars (objects only through odd data). */
const text = (value: unknown): string => {
    if (value === undefined || value === null) {
        return '';
    }
    if (typeof value === 'string') {
        return value;
    }
    if (typeof value === 'number' || typeof value === 'boolean') {
        return String(value);
    }
    return JSON.stringify(value) ?? '';
};

/**
 * Summarises the Zustandszeilen of a widget.
 *
 * @param data The widget data.
 * @param count The row count (the Zustandsmenge).
 * @returns One summary per row, in Feldnummer order.
 */
export const stateRowSummaries = (data: WidgetData, count: number): StateRowSummary[] =>
    Array.from({ length: count }, (_, i) => {
        const n = i + 1;
        return {
            n,
            value: text(data[`value${n}`]),
            alias: text(data[`alias${n}`]),
            hasIcon: !!data[`icon${n}`] || !!data[`iconSmall${n}`],
        };
    });

/** The state every Zustandseditor field works from. */
export type StateEditorState = {
    /** The OID object of the widget's OID property is known (the pick has run). */
    hasOidObject: boolean;
    /** The rows, in Feldnummer order. */
    rows: StateRowSummary[];
    /** The selected Feldnummer — `0` without rows. */
    selected: number;
    /** Selects a row; writes no project data. */
    select: (row: number) => void;
};

/**
 * Reads the rows and the shared selection of one Zustandseditor.
 *
 * @param fieldProps The props of the field (see {@link StateEditorFieldProps}).
 * @param fieldProps.spec The widget's Zustandseditor spec.
 * @param fieldProps.data The widget data.
 * @param fieldProps.props The vis-2 editor context.
 * @returns Rows, selected row and the selection function.
 */
export const useStateEditor = ({
    spec,
    data,
    props,
}: Omit<StateEditorFieldProps, 'onDataChange'>): StateEditorState => {
    const count = stateRowCount(data, spec.config);
    const rows = useMemo(() => stateRowSummaries(data, count), [data, count]);
    const key = stateRowSelectionKey(props.selectedView, (props.selectedWidgets ?? []) as string[]);
    const [selected, select] = useStateRowSelection(key, count);

    return {
        hasOidObject: !!data[`${spec.config.oidProperty}Object`],
        rows,
        selected,
        select,
    };
};
