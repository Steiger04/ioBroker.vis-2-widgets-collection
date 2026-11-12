/**
 * Light2 collection widget.
 *
 * @module Light2CollectionWidget/Light2CollectionWidget
 */

import React from 'react';
import type { WidgetRegistry } from '../types';
import Generic from '../Generic';
import commonFields from '../lib/commonFields';
import { stateEditorGroup } from '../lib/stateEditorFields';
import delayFields from '../lib/delayFields';
import light2Fields from '../lib/light2Fields';

import Light2Collection from './Light2Collection';

import type { RxWidgetInfo, RxRenderWidgetProps, RxWidgetInfoAttributesField, WidgetData } from '@iobroker/types-vis-2';

/**
 * Widget entry (vis-2 runtime).
 *
 * @remarks
 * Defines the widget schema and provides the collection context consumed by
 * {@link Light2Collection}.
 */
class Light2CollectionWidget extends Generic<WidgetRegistry['tplLight2CollectionWidget']> {
    static getWidgetInfo(): RxWidgetInfo {
        return {
            id: 'tplLight2CollectionWidget',
            visSet: 'vis-2-widgets-collection', // Widget set name in which this widget is located
            visSetLabel: 'widgets_collection', // Widget set translated label (should be defined only in one widget of a set)
            visName: 'Light2CollectionWidget', // Name of widget
            visWidgetLabel: 'light2_collection_widget', // Label for widget
            // Palette tooltip and the vis-2 assistant's set listing; the host prefixes it like the label.
            visHelp: 'light2_collection_widget_help',
            visOrder: 11,
            visAttrs: [
                {
                    name: 'common', // group name
                    fields: [...commonFields({ groupName: '', allFields: true })],
                },
                {
                    name: 'light', // group name
                    label: 'group_light',
                    fields: [
                        // ...commonObjectFields(["boolean"]),
                        ...delayFields(),
                        ...light2Fields(),
                    ] as RxWidgetInfoAttributesField[],
                },
                // The rows of the button mode belong to the switch OID, seeded TRUE/FALSE on its pick.
                stateEditorGroup(
                    { oidProperty: 'colorLightSwitchOid', fixedRows: true },
                    { hidden: (data: WidgetData) => !data.colorLightButton },
                ),
                // check here all possible types https://github.com/ioBroker/ioBroker.vis/blob/react/src/src/Attributes/Widget/SCHEMA.md
            ],
            visDefaultStyle: {
                width: '100%',
                height: '100px',
                position: 'relative',
            },
            visPrev: 'widgets/vis-2-widgets-collection/img/prev-collection-light.png',
        };
    }

    renderWidgetBody(props: RxRenderWidgetProps): React.JSX.Element | React.JSX.Element[] | null {
        super.renderWidgetBody(props);

        return this.renderWithProvider(<Light2Collection />, props);
    }
}

export default Light2CollectionWidget;
