/**
 * Echarts Collection widget.
 *
 * @module widgets/EchartsCollectionWidget
 */

import type { EchartsCollectionContextProps, WidgetRegistry } from '../types';
import Generic from '../Generic';
import withCollectionProvider from '../components/withCollectionProvider';

import commonFields from '../lib/commonFields';
import echartsFields from '../lib/echartsFields';
import EchartsCollection from './EchartsCollection';

import type { RxWidgetInfo, RxRenderWidgetProps, RxWidgetInfoAttributesField } from '@iobroker/types-vis-2';

class EchartsCollectionWidget extends Generic<WidgetRegistry['tplEchartsCollectionWidget']> {
    static getWidgetInfo(): RxWidgetInfo {
        return {
            id: 'tplEchartsCollectionWidget',
            visSet: 'vis-2-widgets-collection',
            visSetLabel: 'widgets_collection',
            visSetColor: '#0C0A43',
            visName: 'EchartsCollectionWidget',
            visWidgetLabel: 'echarts_collection_widget',
            visOrder: 13,
            visAttrs: [
                {
                    name: 'common', // group name
                    fields: [...commonFields()],
                },
                {
                    name: 'chart', // group name
                    label: 'group_echarts',
                    fields: [...echartsFields()] as RxWidgetInfoAttributesField[],
                },
                {
                    name: 'series',
                    label: 'echarts_series',
                    indexFrom: 1,
                    indexTo: 'series_count',
                    fields: [
                        // Indexed OID — becomes oid1..oidN at runtime, auto-subscribed by vis-2.
                        // Per-series rendering metadata (name/color/type/yAxisIndex) lives in the
                        // base64 `seriesConfig` blob. Hidden: the modal editor (P3) writes oidN
                        // directly, so this field exists only as a subscription vehicle.
                        {
                            name: 'oid',
                            label: 'oid',
                            type: 'id',
                            hidden: (): boolean => true,
                        },
                    ],
                },
            ],
            visDefaultStyle: {
                width: '100%',
                height: '300px',
                position: 'relative',
            },
            visPrev: 'widgets/vis-2-widgets-collection/img/prev-collection-echarts.png',
        };
    }

    // Do not delete this method. It is used by vis to read the widget configuration.
    // eslint-disable-next-line class-methods-use-this
    getWidgetInfo(): RxWidgetInfo {
        return EchartsCollectionWidget.getWidgetInfo();
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

    renderWidgetBody(props: RxRenderWidgetProps): React.JSX.Element | React.JSX.Element[] | null {
        super.renderWidgetBody(props);

        // Set wrappedCollectionContent BEFORE building the context so the context carries the
        // current value (not the previous render's). wrapContent reads it at render time too.
        if (props.widget.data.noCard || props.widget.usedInWidget) {
            this.wrappedCollectionContent = false;
        } else {
            this.wrappedCollectionContent = true;
        }

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
        } as EchartsCollectionContextProps;

        return withCollectionProvider(this.wrapContent(<EchartsCollection />), collectionContext);
    }
}

export default EchartsCollectionWidget;
