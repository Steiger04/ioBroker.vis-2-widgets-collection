/**
 * Select collection widget.
 *
 * @module widgets/SelectCollectionWidget
 */

import React from 'react';
import Generic from '../Generic';
import commonFields from '../lib/commonFields';
import { stateEditorGroup } from '../lib/stateEditorFields';
import commonObjectFields from '../lib/commonObjectFields';
import delayFields from '../lib/delayFields';
import selectFields from '../lib/selectFields';
import { ANY_VALUE_TYPES } from '../lib/allowedOidTypes';
import SelectCollection from './SelectCollection';

import type { RxWidgetInfo, RxRenderWidgetProps, RxWidgetInfoAttributesField } from '@iobroker/types-vis-2';
import type { WidgetRegistry } from '../types';

class SelectCollectionWidget extends Generic<WidgetRegistry['tplSelectCollectionWidget']> {
    static getWidgetInfo(): RxWidgetInfo {
        return {
            id: 'tplSelectCollectionWidget',
            visSet: 'vis-2-widgets-collection', // Widget set name in which this widget is located
            visSetLabel: 'widgets_collection', // Widget set translated label (should be defined only in one widget of a set)
            visName: 'SelectCollectionWidget', // Name of widget
            visWidgetLabel: 'select_collection_widget', // Label for widget
            visOrder: 8,
            visAttrs: [
                {
                    name: 'common', // group name
                    fields: [...commonFields({ groupName: '' })],
                },
                {
                    name: 'select_collection', // group name
                    label: 'group_select_collection',
                    fields: [
                        ...commonObjectFields(ANY_VALUE_TYPES),
                        ...delayFields(),
                        ...selectFields(),
                    ] as RxWidgetInfoAttributesField[],
                },
                stateEditorGroup(),
                // check here all possible types https://github.com/ioBroker/ioBroker.vis/blob/react/src/src/Attributes/Widget/SCHEMA.md
            ],
            visDefaultStyle: {
                width: '100%',
                height: '100px',
                position: 'relative',
            },
            visPrev: 'widgets/vis-2-widgets-collection/img/prev-collection-select.png',
        };
    }

    // Do not delete this method. It is used by vis to read the widget configuration.
    // eslint-disable-next-line class-methods-use-this
    getWidgetInfo(): RxWidgetInfo {
        return SelectCollectionWidget.getWidgetInfo();
    }

    // eslint-disable-next-line class-methods-use-this
    propertiesUpdate(): void {
        // Intentionally empty.
        // Kept as a hook for future state/object initialization.
    }

    // This function is called every time when rxData is changed
    // eslint-disable-next-line class-methods-use-this
    onRxDataChanged(): void {
        // this.propertiesUpdate();
    }

    // This function is called every time when rxStyle is changed
    // eslint-disable-next-line class-methods-use-this
    onRxStyleChanged(): void {}

    // This function is called every time when some Object State updated, but all changes lands into this.state.values too
    // eslint-disable-next-line class-methods-use-this
    onStateUpdated(_id: string, _state: ioBroker.State): void {}

    componentDidMount(): void {
        super.componentDidMount();
        // Update data
        // this.propertiesUpdate();
    }

    renderWidgetBody(props: RxRenderWidgetProps): React.JSX.Element | React.JSX.Element[] | null {
        super.renderWidgetBody(props);

        return this.renderWithProvider(<SelectCollection />, props);
    }
}

export default SelectCollectionWidget;
