/**
 * Input Collection widget.
 *
 * @module widgets/InputCollectionWidget
 */

import React from 'react';
import type { WidgetRegistry } from '../types';
import Generic from '../Generic';

import commonFields from '../lib/commonFields';
import { stateEditorGroup } from '../lib/stateEditorFields';
import commonObjectFields from '../lib/commonObjectFields';
import delayFields from '../lib/delayFields';
import inputFields from '../lib/inputFields';
import stateFields from '../lib/stateFields';
import { INPUT_ENTRY_TYPES } from '../lib/allowedOidTypes';
import InputCollection from './InputCollection';

import type { RxWidgetInfo, RxRenderWidgetProps, RxWidgetInfoAttributesField } from '@iobroker/types-vis-2';

class InputCollectionWidget extends Generic<WidgetRegistry['tplInputCollectionWidget']> {
    static getWidgetInfo(): RxWidgetInfo {
        return {
            id: 'tplInputCollectionWidget',
            visSet: 'vis-2-widgets-collection',
            visSetLabel: 'widgets_collection',
            visSetColor: '#0C0A43',
            visName: 'InputCollectionWidget',
            visWidgetLabel: 'input_collection_widget',
            visOrder: 1,
            visAttrs: [
                {
                    name: 'common', // group name
                    fields: [...commonFields()],
                },
                {
                    name: 'input', // group name
                    label: 'group_input',
                    fields: [
                        ...commonObjectFields(INPUT_ENTRY_TYPES),
                        ...delayFields(),
                        ...inputFields(),
                        ...stateFields({ onlyStates: false }),
                    ] as RxWidgetInfoAttributesField[],
                },
                stateEditorGroup(),
            ],
            visDefaultStyle: {
                width: '100%',
                height: '80px',
                position: 'relative',
            },
            visPrev: 'widgets/vis-2-widgets-collection/img/prev-collection-input.png',
        };
    }

    // Do not delete this method. It is used by vis to read the widget configuration.
    // eslint-disable-next-line class-methods-use-this
    getWidgetInfo(): RxWidgetInfo {
        return InputCollectionWidget.getWidgetInfo();
    }

    // eslint-disable-next-line class-methods-use-this
    propertiesUpdate(): void {
        // Intentionally empty: the Input widget has no derived runtime state.
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
        // this.propertiesUpdate();
    }

    renderWidgetBody(props: RxRenderWidgetProps): React.JSX.Element | React.JSX.Element[] | null {
        super.renderWidgetBody(props);

        return this.renderWithProvider(<InputCollection />, props);
    }
}

export default InputCollectionWidget;
