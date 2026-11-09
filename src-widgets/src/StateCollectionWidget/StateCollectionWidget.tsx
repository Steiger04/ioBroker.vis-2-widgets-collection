/**
 * State Collection widget.
 *
 * @module widgets/StateCollectionWidget
 */

import type { WidgetRegistry } from '../types';
import Generic from '../Generic';

import commonFields from '../lib/commonFields';
import { stateEditorGroup } from '../lib/stateEditorFields';
import commonObjectFields from '../lib/commonObjectFields';
import delayFields from '../lib/delayFields';
import { pushButtonModeActive } from '../lib/filledStateRows';
import stateFields from '../lib/stateFields';
import { ANY_VALUE_TYPES } from '../lib/allowedOidTypes';
import StateCollection from './StateCollection';

import type { RxWidgetInfo, RxRenderWidgetProps, RxWidgetInfoAttributesField } from '@iobroker/types-vis-2';

class StateCollectionWidget extends Generic<WidgetRegistry['tplStateCollectionWidget']> {
    static getWidgetInfo(): RxWidgetInfo {
        return {
            id: 'tplStateCollectionWidget',
            visSet: 'vis-2-widgets-collection',
            visSetLabel: 'widgets_collection',
            visSetColor: '#0C0A43',
            visName: 'StateCollectionWidget',
            visWidgetLabel: 'state_collection_widget',
            visOrder: 4,
            visAttrs: [
                {
                    name: 'common', // group name
                    fields: [...commonFields()],
                },
                {
                    name: 'button', // group name
                    label: 'group_button',
                    fields: [
                        ...commonObjectFields(ANY_VALUE_TYPES),
                        // A push button writes at once: delay and sampling do not apply there.
                        ...delayFields({ hiddenWhen: pushButtonModeActive }),
                        ...stateFields(),
                    ] as RxWidgetInfoAttributesField[],
                },
                stateEditorGroup(),
            ],
            visDefaultStyle: {
                width: '100%',
                height: '100px',
                position: 'relative',
            },
            visPrev: 'widgets/vis-2-widgets-collection/img/prev-collection-state.png',
        };
    }

    renderWidgetBody(props: RxRenderWidgetProps): React.JSX.Element | React.JSX.Element[] | null {
        super.renderWidgetBody(props);

        return this.renderWithProvider(<StateCollection />, props);
    }
}

export default StateCollectionWidget;
