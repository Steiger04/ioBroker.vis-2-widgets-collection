/**
 * JSON Table Collection widget.
 *
 * @module widgets/JsonTableCollectionWidget
 * @remarks
 * Displays a MUI X DataGrid populated from a JSON-valued ioBroker state object.
 * Columns are auto-discovered via `analyzeJsonTable()` and can be configured
 * through the {@link JsonTableColumnEditor} in the vis-2 property editor.
 */

import React from 'react';
import Generic from '../Generic';
import withCollectionProvider from '../components/withCollectionProvider';

import commonFields from '../lib/commonFields';
import commonObjectFields from '../lib/commonObjectFields';
import jsonTableFields from '../lib/jsonTableFields';
import JsonTableCollection from './JsonTableCollection';

import type { RxWidgetInfo, RxRenderWidgetProps, RxWidgetInfoAttributesField, WidgetData } from '@iobroker/types-vis-2';
import type { LegacyConnection } from '@iobroker/adapter-react-v5';
import type { JsonTableCollectionContextProps, WidgetRegistry } from '../types';

/** All JSON-table-specific data field names that should be cleared on OID deletion. */
const JSON_TABLE_DATA_FIELDS = [
    'columnConfig',
    'tableDensity',
    'tableRowHeight',
    'tableHeaderHeight',
    'tableAutoSize',
    'tablePagination',
    'tablePageSize',
    'tablePageSizeOptions',
    'tableSorting',
    'tableFiltering',
    'tableQuickFilter',
    'tableColumnMenu',
    'tableRowSelection',
    'tableShowCellBorders',
    'tableShowRowBorders',
    'tableHeaderBgColor',
    'tableHeaderTextColor',
    'tableHeaderFontSize',
    'tableStripedColor',
    'tableCellFontSize',
    'tableMaxDepth',
];

class JsonTableCollectionWidget extends Generic<WidgetRegistry['tplJsonTableCollectionWidget']> {
    /**
     * Creates OID fields with a wrapped onChange that clears JSON-table-specific
     * data when the OID is deleted.
     */
    private static createObjectFields(): RxWidgetInfoAttributesField[] {
        const fields = commonObjectFields(['string', 'mixed', 'json']);
        const oidField = fields.find(f => f.name === 'oid');

        if (oidField) {
            const oidFieldAny = oidField as Record<string, unknown>;
            const originalOnChange = oidFieldAny.onChange as
                | ((
                      field: RxWidgetInfoAttributesField,
                      data: WidgetData,
                      changeData: (newData: WidgetData) => void,
                      socket: LegacyConnection,
                  ) => Promise<void>)
                | undefined;
            oidFieldAny.onChange = async (
                field: RxWidgetInfoAttributesField,
                data: WidgetData,
                changeData: (newData: WidgetData) => void,
                socket: LegacyConnection,
            ): Promise<void> => {
                if (!data.oid) {
                    // Clear all JSON-table-specific fields when OID is removed
                    for (const key of JSON_TABLE_DATA_FIELDS) {
                        delete data[key];
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
            visOrder: 11,
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
                {
                    name: 'values',
                    label: 'values',
                    indexFrom: 1,
                    indexTo: 'values_count',
                    fields: [...commonFields({ groupName: '', allFields: false })],
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

    // Do not delete this method. It is used by vis to read the widget configuration.
    // eslint-disable-next-line class-methods-use-this
    getWidgetInfo(): RxWidgetInfo {
        return JsonTableCollectionWidget.getWidgetInfo();
    }

    // eslint-disable-next-line class-methods-use-this
    propertiesUpdate(): void {
        // Intentionally empty: JSON Table derives all state from OID value.
    }

    // eslint-disable-next-line class-methods-use-this
    onRxDataChanged(): void {}

    // eslint-disable-next-line class-methods-use-this
    onRxStyleChanged(): void {}

    // eslint-disable-next-line class-methods-use-this
    onStateUpdated(_id: string, _state: ioBroker.State | null | undefined): void {}

    renderWidgetBody(props: RxRenderWidgetProps): React.JSX.Element | React.JSX.Element[] | null {
        super.renderWidgetBody(props);

        if (props.widget.data.noCard || props.widget.usedInWidget) {
            this.wrappedCollectionContent = false;
        } else {
            this.wrappedCollectionContent = true;
        }

        const collectionContext = {
            id: props.id,
            refService: props.refService,
            style: props.style,
            widget: {
                data: this.state.rxData,
                style: this.state.rxStyle,
            },
            setValue: this.setValue,
            setState: this.setState.bind(this),
            values: this.state.values,
            isSignalVisible: this.isSignalVisible.bind(this),
            getPropertyValue: this.getPropertyValue.bind(this),
            mode: this.props.context.themeType,
            socket: this.props.context.socket,
            theme: this.props.context.theme,

            wrappedContent: this.wrappedCollectionContent,
        } as JsonTableCollectionContextProps;

        return withCollectionProvider(this.wrapContent(<JsonTableCollection />), collectionContext);
    }
}

export default JsonTableCollectionWidget;
