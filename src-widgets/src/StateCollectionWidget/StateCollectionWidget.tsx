import type { StateCollectionContextProps, WidgetRegistry } from '../newTypes';
import Generic from '../Generic';
import withCollectionProvider from '../components/withCollectionProvider';

import commonFields from '../lib/commonFields';
import commonObjectFields from '../lib/commonObjectFields';
import delayFields from '../lib/delayFields';
import stateFields from '../lib/stateFields';
import StateCollection from './StateCollection';

import type { RxWidgetInfo, RxRenderWidgetProps, RxWidgetInfoAttributesField } from '@iobroker/types-vis-2';

class StateCollectionWidget extends Generic<WidgetRegistry['tplStateCollectionWidget']> {
    // private lastRxData: string | null = null;

    static getWidgetInfo(): RxWidgetInfo {
        return {
            id: 'tplStateCollectionWidget',
            visSet: 'vis-2-widgets-collection', // Widget set name in which this widget is located
            visSetLabel: 'widgets_collection', // Widget set translated label (should be defined only in one widget of a set)
            visSetColor: '#0C0A43', // Color of a widget set. it is enough to set color only in one widget of a set
            visName: 'StateCollectionWidget', // Name of widget
            visWidgetLabel: 'state_collection_widget', // Label for widget
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
                    ] as RxWidgetInfoAttributesField[], // muss optimiert werden
                },
                {
                    name: 'values',
                    label: 'values',
                    indexFrom: 1,
                    indexTo: 'values_count',
                    fields: [...commonFields({ groupName: '', allFields: false })],
                },
                // check here all possible types https://github.com/ioBroker/ioBroker.vis/blob/react/src/src/Attributes/Widget/SCHEMA.md
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
        // console.log('StateCollectionWidget.propertiesUpdate() called --> this', this);
        // console.log('StateCollectionWidget.propertiesUpdate() called');
        // The widget has 3 important states
        // 1. this.state.values - contains all state values, that are used in widget (automatically collected from widget info).
        //                        So you can use `this.state.values[this.state.rxData.oid + '.val']` to get the value of state with id this.state.rxData.oid
        // 2. this.state.rxData - contains all widget data with replaced bindings. E.g. if this.state.data.type is `{system.adapter.admin.0.alive}`,
        //                        then this.state.rxData.type will have state value of `system.adapter.admin.0.alive`
        // 3. this.state.rxStyle - contains all widget styles with replaced bindings. E.g. if this.state.styles.width is `{javascript.0.width}px`,
        //                        then this.state.rxData.type will have state value of `javascript.0.width` + 'px
        /* const actualRxData = JSON.stringify(this.state.rxData);
        if (this.lastRxData === actualRxData) {
            return;
        }
        this.lastRxData = actualRxData;

        await this.createStateObjectAsync('oid');
        console.log('StateCollectionWidget.propertiesUpdate() --> this', this); */
    }

    // This function is called every time when rxData is changed
    onRxDataChanged(): void {
        // console.log('StateCollectionWidget.onRxDataChanged() called');
        this.propertiesUpdate();
    }

    // This function is called every time when rxStyle is changed
    // eslint-disable-next-line class-methods-use-this
    onRxStyleChanged(): void {
        // console.log('StateCollectionWidget.onRxStyleChanged() called');
        // You can do something with styles here, but usually you do not need it
    }

    // This function is called every time when some Object State updated, but all changes lands into this.state.values too
    // eslint-disable-next-line class-methods-use-this
    onStateUpdated(_id: string, _state: ioBroker.State): void {
        // console.log('StateCollectionWidget.onStateUpdated() called');
        // You can do something with state here, but usually you do not need it
        // For example, you can update some state value in this.state.values
        // this.setState({ values: { ...this.state.values, [id]: state.val } });
    }

    componentDidMount(): void {
        // console.log('StateCollectionWidget.componentDidMount() called');
        super.componentDidMount();
        // Update data
        this.propertiesUpdate();
    }

    renderWidgetBody(props: RxRenderWidgetProps): React.JSX.Element | React.JSX.Element[] | null {
        // console.log('StateCollectionWidget.renderWidgetBody() called');
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
            // oidObject: this.state.oidObject,
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
