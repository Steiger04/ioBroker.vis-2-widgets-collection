/**
 * Switch Collection widget.
 *
 * @module widgets/SwitchCollectionWidget
 */

import React from 'react';
import Generic from '../Generic';
import commonFields from '../lib/commonFields';
import { stateEditorGroup } from '../lib/stateEditorFields';
import commonObjectFields from '../lib/commonObjectFields';
import delayFields from '../lib/delayFields';
import switchFields from '../lib/switchFields';
import SwitchCollection from './SwitchCollection';

import type { RxWidgetInfo, RxRenderWidgetProps, RxWidgetInfoAttributesField } from '@iobroker/types-vis-2';
import type { WidgetRegistry } from '../types';

class SwitchCollectionWidget extends Generic<WidgetRegistry['tplSwitchCollectionWidget']> {
    static getWidgetInfo(): RxWidgetInfo {
        return {
            id: 'tplSwitchCollectionWidget',
            visSet: 'vis-2-widgets-collection',
            visSetLabel: 'widgets_collection',
            visName: 'SwitchCollectionWidget',
            visWidgetLabel: 'switch_collection_widget',
            // Palette tooltip and the vis-2 assistant's set listing; the host prefixes it like the label.
            visHelp: 'switch_collection_widget_help',
            visOrder: 3,
            visAttrs: [
                {
                    name: 'common',
                    fields: [...commonFields()],
                },
                {
                    name: 'switch',
                    label: 'group_switch',
                    fields: [
                        ...commonObjectFields(['boolean']),
                        ...delayFields(),
                        ...switchFields(),
                    ] as RxWidgetInfoAttributesField[],
                },
                stateEditorGroup({ fixedRows: true }),
            ],
            visDefaultStyle: {
                width: '100%',
                height: '100px',
                position: 'relative',
            },
            visPrev: 'widgets/vis-2-widgets-collection/img/prev-collection-switch.png',
        };
    }

    renderWidgetBody(props: RxRenderWidgetProps): React.JSX.Element | React.JSX.Element[] | null {
        super.renderWidgetBody(props);

        return this.renderWithProvider(<SwitchCollection />, props);
    }
}

export default SwitchCollectionWidget;
