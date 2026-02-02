/**
 * State Collection widget.
 *
 * @module widgets/StateCollectionWidget
 */

import type { StateCollectionContextProps, WidgetRegistry } from '../types';
import Generic from '../Generic';
import withCollectionProvider from '../components/withCollectionProvider';

import commonFields from '../lib/commonFields';
import commonObjectFields from '../lib/commonObjectFields';
import delayFields from '../lib/delayFields';
import stateFields from '../lib/stateFields';
import StateCollection from './StateCollection';

import type { RxWidgetInfo, RxRenderWidgetProps, RxWidgetInfoAttributesField } from '@iobroker/types-vis-2';

/**
 * StateCollectionWidget - Displays and monitors ioBroker state values in a collection layout.
 *
 * Supports string, number, boolean, and mixed state types with optional icon display,
 * configurable delays, and flexible styling for multiple states in a single widget.
 *
 * Required props:
 * - oid: string - Object ID of the state to display
 *
 * Optional props:
 * - delay: number - Delay in milliseconds before state update (default: 0)
 * - delayEnabled: boolean - Enable/disable delay behavior (default: false)
 * - onlyStates: boolean - Show only state values, hide icons (default: false)
 * - showIcon: boolean - Display state icon if available (default: true)
 * - values_count: number - Number of additional values to display (default: 0)
 *
 * @example
 * <StateCollectionWidget
 *   oid="sensor.temperature"
 *   showIcon={true}
 *   values_count={3}
 * />
 */
class StateCollectionWidget extends Generic<WidgetRegistry['tplStateCollectionWidget']> {
    // private lastRxData: string | null = null;

    static getWidgetInfo(): RxWidgetInfo {
        return {
            id: 'tplStateCollectionWidget',
            visSet: 'vis-2-widgets-collection',
            visSetLabel: 'widgets_collection',
            visSetColor: '#0C0A43',
            visName: 'StateCollectionWidget',
            visWidgetLabel: 'state_collection_widget',
            visOrder: 3,
            visAttrs: [
                {
                    name: 'common', // group name
                    fields: [...commonFields()],
                },
                {
                    name: 'button', // group name
                    label: 'group_button',
                    fields: [
                        ...commonObjectFields(['string', 'number', 'boolean', 'mixed']),
                        ...delayFields(),
                        ...stateFields(),
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
                height: '100px',
                position: 'relative',
            },
            visPrev: 'widgets/vis-2-widgets-collection/img/prev-collection-state.png',
        };
    }

    // Do not delete this method. It is used by vis to read the widget configuration.
    // eslint-disable-next-line class-methods-use-this
    getWidgetInfo(): RxWidgetInfo {
        // console.log('StateCollectionWidget.getWidgetInfo() called');
        return StateCollectionWidget.getWidgetInfo();
    }

    // eslint-disable-next-line class-methods-use-this
    propertiesUpdate(): void {
        // Intentionally empty: the State widget has no derived runtime state.
    }

    // This function is called every time when rxData is changed
    onRxDataChanged(): void {
        // console.log('StateCollectionWidget.onRxDataChanged() called');
        this.propertiesUpdate();
    }

    // This function is called every time when rxStyle is changed
    // eslint-disable-next-line class-methods-use-this
    onRxStyleChanged(): void {}

    // This function is called every time when some Object State updated, but all changes lands into this.state.values too
    // eslint-disable-next-line class-methods-use-this
    onStateUpdated(_id: string, _state: ioBroker.State): void {}

    componentDidMount(): void {
        super.componentDidMount();
        this.propertiesUpdate();
    }

    renderWidgetBody(props: RxRenderWidgetProps): React.JSX.Element | React.JSX.Element[] | null {
        super.renderWidgetBody(props);

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
        } as StateCollectionContextProps;

        if (props.widget.data.noCard || props.widget.usedInWidget) {
            this.wrappedCollectionContent = false;
        } else {
            this.wrappedCollectionContent = true;
        }

        return withCollectionProvider(this.wrapContent(<StateCollection />), collectionContext);
    }
}

export default StateCollectionWidget;
