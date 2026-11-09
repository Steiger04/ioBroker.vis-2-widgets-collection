/**
 * Button-group collection widget.
 *
 * @module widgets/ButtonGroupCollectionWidget
 */

import React from 'react';
import Generic from '../Generic';
import buttonGroupFields from '../lib/buttonGroupFields';
import commonFields from '../lib/commonFields';
import { stateEditorGroup } from '../lib/stateEditorFields';
import commonObjectFields from '../lib/commonObjectFields';
import delayFields from '../lib/delayFields';
import { ANY_VALUE_TYPES } from '../lib/allowedOidTypes';
import ButtonGroupCollection from './ButtonGroupCollection';

import type { RxRenderWidgetProps, RxWidgetInfo, RxWidgetInfoAttributesField } from '@iobroker/types-vis-2';
import type { WidgetRegistry } from '../types';

class ButtonGroupCollectionWidget extends Generic<WidgetRegistry['tplButtonGroupCollectionWidget']> {
    static getWidgetInfo(): RxWidgetInfo {
        return {
            id: 'tplButtonGroupCollectionWidget',
            visSet: 'vis-2-widgets-collection', // Widget set name in which this widget is located
            visSetLabel: 'widgets_collection', // Widget set translated label (should be defined only in one widget of a set)
            visName: 'ButtonGroupCollectionWidget', // Name of widget
            visWidgetLabel: 'button_group_collection_widget', // Label for widget
            visOrder: 7,
            visAttrs: [
                {
                    name: 'common', // group name
                    fields: [...commonFields()],
                },
                {
                    name: 'buttonGroup',
                    label: 'button_group',
                    fields: [
                        ...commonObjectFields(ANY_VALUE_TYPES),
                        ...delayFields(),
                        ...buttonGroupFields(),
                    ] as RxWidgetInfoAttributesField[],
                },
                {
                    name: 'active',
                    label: 'group_active',
                    // No aliasActive: the alias resolver has no Active stage, a stored value stays without effect.
                    fields: commonFields({ groupName: 'Active', allFields: false }).filter(
                        field => field.name !== 'aliasActive',
                    ),
                },
                stateEditorGroup(),
                // check here all possible types https://github.com/ioBroker/ioBroker.vis/blob/react/src/src/Attributes/Widget/SCHEMA.md
            ],
            visDefaultStyle: {
                width: '100%',
                height: '100px',
                position: 'relative',
            },
            visPrev: 'widgets/vis-2-widgets-collection/img/prev-collection-button-group.png',
        };
    }

    renderWidgetBody(props: RxRenderWidgetProps): React.JSX.Element | React.JSX.Element[] | null {
        super.renderWidgetBody(props);

        return this.renderWithProvider(<ButtonGroupCollection />, props);
    }
}

export default ButtonGroupCollectionWidget;
