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

    renderWidgetBody(props: RxRenderWidgetProps): React.JSX.Element | React.JSX.Element[] | null {
        super.renderWidgetBody(props);

        return this.renderWithProvider(<SelectCollection />, props);
    }
}

export default SelectCollectionWidget;
