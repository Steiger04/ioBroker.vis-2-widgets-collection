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

    // Do not delete this method. It is used by vis to read the widget configuration.
    // eslint-disable-next-line class-methods-use-this
    getWidgetInfo(): RxWidgetInfo {
        return StateCollectionWidget.getWidgetInfo();
    }

    // This function is called every time when rxData is changed
    // eslint-disable-next-line class-methods-use-this
    onRxDataChanged(): void {}

    // This function is called every time when rxStyle is changed
    // eslint-disable-next-line class-methods-use-this
    onRxStyleChanged(): void {}

    // This function is called every time when some Object State updated, but all changes lands into this.state.values too
    // eslint-disable-next-line class-methods-use-this
    onStateUpdated(_id: string, _state: ioBroker.State): void {}

    componentDidMount(): void {
        super.componentDidMount();
    }

    renderWidgetBody(props: RxRenderWidgetProps): React.JSX.Element | React.JSX.Element[] | null {
        super.renderWidgetBody(props);

        return this.renderWithProvider(<StateCollection />, props);
    }
}

export default StateCollectionWidget;
