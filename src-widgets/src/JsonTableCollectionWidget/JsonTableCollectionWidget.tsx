/**
 * JSON Table Collection widget.
 *
 * @module widgets/JsonTableCollectionWidget
 * @remarks
 * Displays a TanStack Table v8 (headless) populated from a JSON-valued ioBroker state object.
 * Columns are discovered from the data and merged with the saved configuration (Spalten-Merge,
 * `./columns`); they can be configured
 * through the {@link JsonTableColumnEditor} in the vis-2 property editor.
 */

import React from 'react';
import Generic from '../Generic';

import commonFields from '../lib/commonFields';
import commonObjectFields from '../lib/commonObjectFields';
import jsonTableFields from '../lib/jsonTableFields';
import { JSON_TABLE_TYPES } from '../lib/allowedOidTypes';
import JsonTableCollection from './JsonTableCollection';

import type { RxWidgetInfo, RxRenderWidgetProps, RxWidgetInfoAttributesField, WidgetData } from '@iobroker/types-vis-2';
import type { Connection } from '@iobroker/gui-components';
import type { WidgetRegistry } from '../types';

/**
 * All JSON-table-specific data field names that are cleared on OID deletion: every named
 * field of {@link jsonTableFields}, so a new setting can never be forgotten here.
 */
const JSON_TABLE_DATA_FIELDS: readonly string[] = jsonTableFields()
    .map(field => (field as { name?: string }).name)
    .filter((name): name is string => typeof name === 'string' && name.length > 0);

class JsonTableCollectionWidget extends Generic<WidgetRegistry['tplJsonTableCollectionWidget']> {
    /**
     * Creates OID fields with a wrapped onChange that clears JSON-table-specific
     * data when the OID is deleted.
     */
    private static createObjectFields(): RxWidgetInfoAttributesField[] {
        // JSON table renders columns from the JSON data (Spalten-Merge, ./columns), not from
        // Zustandszeilen, and has no use for a unit override — drop the unit section.
        const fields = commonObjectFields(JSON_TABLE_TYPES, { unit: false });
        const oidField = fields.find(f => f.name === 'oid');

        if (oidField) {
            const oidFieldAny = oidField as Record<string, unknown>;
            const originalOnChange = oidFieldAny.onChange as
                | ((
                      field: RxWidgetInfoAttributesField,
                      data: WidgetData,
                      changeData: (newData: WidgetData) => void,
                      socket: Connection,
                  ) => Promise<void>)
                | undefined;
            oidFieldAny.onChange = async (
                field: RxWidgetInfoAttributesField,
                data: WidgetData,
                changeData: (newData: WidgetData) => void,
                socket: Connection,
            ): Promise<void> => {
                if (!data.oid) {
                    // Clear all JSON-table-specific fields when OID is removed
                    for (const key of JSON_TABLE_DATA_FIELDS) {
                        delete data[key];
                    }
                    // Persist the cleared data when there is no originalOnChange to do it
                    if (!originalOnChange) {
                        changeData(data);
                    }
                }
                if (originalOnChange) {
                    await originalOnChange(field, data, changeData, socket);
                }
            };
        }

        return fields;
    }

    static getWidgetInfo(): RxWidgetInfo {
        return {
            id: 'tplJsonTableCollectionWidget',
            visSet: 'vis-2-widgets-collection',
            visSetLabel: 'widgets_collection',
            visName: 'JsonTableCollectionWidget',
            visWidgetLabel: 'json_table_collection_widget',
            visOrder: 12,
            visAttrs: [
                {
                    name: 'common',
                    fields: [...commonFields()],
                },
                {
                    name: 'jsonTable',
                    label: 'group_json_table',
                    fields: [
                        ...JsonTableCollectionWidget.createObjectFields(),
                        ...jsonTableFields(),
                    ] as RxWidgetInfoAttributesField[],
                },
            ],
            visDefaultStyle: {
                width: '100%',
                height: '400px',
                position: 'relative',
            },
            visPrev: 'widgets/vis-2-widgets-collection/img/prev-collection-json-table.png',
        };
    }

    renderWidgetBody(props: RxRenderWidgetProps): React.JSX.Element | React.JSX.Element[] | null {
        super.renderWidgetBody(props);

        return this.renderWithProvider(<JsonTableCollection />, props);
    }
}

export default JsonTableCollectionWidget;
