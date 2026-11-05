/**
 * vis-2's attribute-panel group body for component tests of custom fields.
 *
 * @module lib/testing/vis2GroupBody
 * @remarks
 * Plays vis-2's `renderGroupBody` / `renderFieldRow` (fork `Attributes/Widget/index.tsx`): every
 * field becomes a table row — the native label cell, then the value cell with
 * `field.component(field, data, onDataChange, props)` — and a field whose `hidden` predicate holds
 * for every selected widget (`checkFunction`, no index outside an indexed group) is left out.
 * The tests keep their own hosts (stored widgets, patch handling, a fake `Editor`); this module
 * owns only what vis-2 does the same for all of them.
 */
import { createTheme } from '@mui/material';
import type React from 'react';

import type {
    RxWidgetInfoAttributesField,
    RxWidgetInfoCustomComponentProperties,
    WidgetData,
} from '@iobroker/types-vis-2';

/** A field as the group body reads it: label, `hidden` predicate and custom `component`. */
export type Vis2PanelField = RxWidgetInfoAttributesField & {
    label?: string;
    hidden?: unknown;
    component?: (
        field: unknown,
        data: WidgetData,
        onDataChange: (patch: WidgetData) => void,
        props: RxWidgetInfoCustomComponentProperties,
    ) => React.JSX.Element;
};

/** A light MUI theme with the `name` vis-2's themes carry. */
export const vis2HostTheme = Object.assign(createTheme(), { name: 'light' });

/**
 * vis-2's `commonValues` of several widgets (`Attributes/Widget/index.tsx` recalculateFields):
 * the first widget's keys, every key that differs by `!==` in another widget set to `null` — an
 * object (`bindings`, `oidObject`) always does.
 *
 * @param widgets The stored data per selected widget.
 * @returns The merged data vis-2 hands a custom field.
 */
export const vis2CommonValues = (widgets: Record<string, WidgetData>): WidgetData => {
    const [first, ...others] = Object.values(widgets);
    const common: WidgetData = { ...first };
    for (const other of others) {
        for (const key of Object.keys(common)) {
            if (common[key] !== other[key]) {
                common[key] = null;
            }
        }
    }
    return common;
};

/** Props of {@link Vis2GroupBody}. */
export type Vis2GroupBodyProps = {
    /** The group's fields. */
    fields: readonly Vis2PanelField[];
    /** The data vis-2 hands the fields: the widget's data, under multi-selection its `commonValues`. */
    data: WidgetData;
    /** The stored data of every selected widget — what a `hidden` predicate is evaluated on. */
    stored: readonly WidgetData[];
    /** Receives every patch a field writes. */
    onDataChange: (patch: WidgetData) => void;
    /** The custom-field context (`context`, `selectedWidgets`, `Editor` …). */
    props: RxWidgetInfoCustomComponentProperties;
};

/**
 * Renders a group body as vis-2 does.
 *
 * @param props See {@link Vis2GroupBodyProps}.
 * @param props.fields The group's fields.
 * @param props.data The data vis-2 hands the fields.
 * @param props.stored The stored data of every selected widget.
 * @param props.onDataChange Receives every patch.
 * @param props.props The custom-field context.
 * @returns A table with one row per visible field; each row carries `data-field` (the field
 *   name, `#index` for unnamed fields).
 */
export function Vis2GroupBody({ fields, data, stored, onDataChange, props }: Vis2GroupBodyProps): React.JSX.Element {
    return (
        <table>
            <tbody>
                {fields.map((field, index) =>
                    typeof field.hidden === 'function' &&
                    stored.every(d => (field.hidden as (d: WidgetData, i?: number) => boolean)(d, undefined)) ? null : (
                        <tr
                            key={index}
                            data-field={field.name ?? `#${index}`}
                        >
                            <td>
                                <span>{field.label}</span>
                            </td>
                            <td>{field.component?.(field, data, onDataChange, props)}</td>
                        </tr>
                    ),
                )}
            </tbody>
        </table>
    );
}
