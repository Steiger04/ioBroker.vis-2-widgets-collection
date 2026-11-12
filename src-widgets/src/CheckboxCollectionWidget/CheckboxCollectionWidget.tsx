/**
 * Checkbox collection widget.
 *
 * @module widgets/CheckboxCollectionWidget
 */

import React from 'react';
import Generic from '../Generic';
import checkboxFields from '../lib/checkboxFields';
import commonFields from '../lib/commonFields';
import { stateEditorGroup } from '../lib/stateEditorFields';
import commonObjectFields from '../lib/commonObjectFields';
import delayFields from '../lib/delayFields';
import type { WidgetRegistry } from '../types';
import CheckboxCollection from './CheckboxCollection';

import type { RxRenderWidgetProps, RxWidgetInfo } from '@iobroker/types-vis-2';

class CheckboxCollectionWidget extends Generic<WidgetRegistry['tplCheckboxCollectionWidget']> {
    static getWidgetInfo(): RxWidgetInfo {
        return {
            id: 'tplCheckboxCollectionWidget',
            visSet: 'vis-2-widgets-collection', // Widget set name in which this widget is located
            visSetLabel: 'widgets_collection', // Widget set translated label (should be defined only in one widget of a set)
            visName: 'CheckboxCollectionWidget', // Name of widget
            visWidgetLabel: 'checkbox_collection_widget', // Label for widget
            // Palette tooltip and the vis-2 assistant's set listing; the host prefixes it like the label.
            visHelp: 'checkbox_collection_widget_help',
            visOrder: 2,
            visAttrs: [
                {
                    name: 'common', // group name
                    fields: [...commonFields()],
                },
                {
                    name: 'checkbox', // group name
                    label: 'group_checkbox',
                    fields: [...commonObjectFields(['boolean']), ...delayFields(), ...checkboxFields()],
                },

                stateEditorGroup({ fixedRows: true }),
                // check here all possible types https://github.com/ioBroker/ioBroker.vis/blob/react/src/src/Attributes/Widget/SCHEMA.md
            ],
            visDefaultStyle: {
                width: '100%',
                height: '100px',
                position: 'relative',
            },
            visPrev: 'widgets/vis-2-widgets-collection/img/prev-collection-checkbox.png',
        };
    }

    renderWidgetBody(props: RxRenderWidgetProps): React.JSX.Element | React.JSX.Element[] | null {
        super.renderWidgetBody(props);

        return this.renderWithProvider(<CheckboxCollection />, props);
    }
}

export default CheckboxCollectionWidget;
