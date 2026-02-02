/**
 * Gauge collection widget.
 *
 * @module widgets/GaugeCollectionWidget
 */

import type { GaugeCollectionContextProps, WidgetRegistry } from '../types';
import Generic from '../Generic';
import withCollectionProvider from '../components/withCollectionProvider';

import commonFields from '../lib/commonFields';
import commonObjectFields from '../lib/commonObjectFields';
import gaugeFields from '../lib/gaugeFields';
import GaugeCollection from './GaugeCollection';

import type { RxWidgetInfo, RxRenderWidgetProps, RxWidgetInfoAttributesField } from '@iobroker/types-vis-2';

/**
 * Widget entry (vis-2 runtime).
 *
 * @remarks
 * Defines the widget schema and provides the collection context consumed by
 * {@link GaugeCollection}.
 */
class GaugeCollectionWidget extends Generic<WidgetRegistry['tplGaugeCollectionWidget']> {
    static getWidgetInfo(): RxWidgetInfo {
        return {
            id: 'tplGaugeCollectionWidget',
            visSet: 'vis-2-widgets-collection', // Widget set name in which this widget is located
            visSetLabel: 'widgets_collection', // Widget set translated label (should be defined only in one widget of a set)
            visName: 'GaugeCollectionWidget', // Name of widget
            visWidgetLabel: 'gauge_collection_widget', // Label for widget
            visOrder: 9,
            visAttrs: [
                {
                    name: 'common', // group name
                    fields: [...commonFields({ groupName: '', allFields: true })],
                },
                {
                    name: 'gauge', // group name
                    label: 'group_gauge',
                    fields: [...commonObjectFields(['number']), ...gaugeFields()] as RxWidgetInfoAttributesField[],
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
            visPrev: 'widgets/vis-2-widgets-collection/img/prev-collection-gauge.png',
        };
    }

    // Do not delete this method. It is used by vis to read the widget configuration.
    // eslint-disable-next-line class-methods-use-this
    getWidgetInfo(): RxWidgetInfo {
        return GaugeCollectionWidget.getWidgetInfo();
    }

    // eslint-disable-next-line class-methods-use-this
    propertiesUpdate(): void {
        // Intentionally empty.
        // Kept as a hook for future state/object initialization.

        console.log('this.state.rxData in propertiesUpdate:', this.state.rxData);
    }

    // This function is called every time when rxData is changed
    onRxDataChanged(): void {
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
        // Update data
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
            // oidObject: this.state.oidObject,
            values: this.state.values,
            isSignalVisible: this.isSignalVisible.bind(this),
            getPropertyValue: this.getPropertyValue.bind(this),
            mode: this.props.context.themeType,
            socket: this.props.context.socket,
            theme: this.props.context.theme,

            wrappedContent: this.wrappedCollectionContent,
        } as GaugeCollectionContextProps;

        if (props.widget.data.noCard || props.widget.usedInWidget) {
            this.wrappedCollectionContent = false;
        } else {
            this.wrappedCollectionContent = true;
        }

        return withCollectionProvider(this.wrapContent(<GaugeCollection />), collectionContext);
    }
}

export default GaugeCollectionWidget;
