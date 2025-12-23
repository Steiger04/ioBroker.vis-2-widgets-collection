/**
 * Slider Collection widget.
 *
 * @module widgets/SliderCollectionWidget
 */

import React from 'react';
import Generic from '../Generic';
import withCollectionProvider from '../components/withCollectionProvider';

import commonFields from '../lib/commonFields';
import commonObjectFields from '../lib/commonObjectFields';
import delayFields from '../lib/delayFields';
import sliderFields from '../lib/sliderFields';
import SliderCollection from './SliderCollection';

import type { RxWidgetInfo, RxRenderWidgetProps } from '@iobroker/types-vis-2';
import type { SliderCollectionContextProps, WidgetRegistry } from '../types';

/**
 * SliderCollectionWidget - Controls numeric ioBroker states via interactive sliders.
 *
 * Provides horizontal/vertical slider orientation, min/max bounds, step increments,
 * and active state visualization. Ideal for brightness, volume, temperature controls.
 *
 * Required props:
 * - oid: string - Object ID of the numeric state to control
 *
 * Optional props:
 * - min: number - Minimum slider value (default: 0)
 * - max: number - Maximum slider value (default: 100)
 * - step: number - Slider step increment (default: 1)
 * - orientation: 'horizontal' | 'vertical' - Slider orientation (default: 'horizontal')
 * - delay: number - Delay in milliseconds before state update (default: 0)
 * - delayEnabled: boolean - Enable/disable delay behavior (default: false)
 * - values_count: number - Number of additional sliders (default: 0)
 *
 * @example
 * <SliderCollectionWidget
 *   oid="light.brightness"
 *   min={0}
 *   max={255}
 *   step={5}
 *   orientation="horizontal"
 * />
 */
class SliderCollectionWidget extends Generic<WidgetRegistry['tplSliderCollectionWidget']> {
    static getWidgetInfo(): RxWidgetInfo {
        return {
            id: 'tplSliderCollectionWidget',
            visSet: 'vis-2-widgets-collection',
            visSetLabel: 'widgets_collection',
            visName: 'SliderCollectionWidget',
            visWidgetLabel: 'slider_collection_widget',
            visOrder: 4,
            visAttrs: [
                {
                    name: 'common', // group name
                    fields: [...commonFields()],
                },
                {
                    name: 'slider',
                    label: 'group_slider',
                    fields: [...commonObjectFields(['number']), ...delayFields(), ...sliderFields()],
                },
                {
                    name: 'active',
                    label: 'group_active',
                    fields: [...commonFields({ groupName: 'Active', allFields: false })],
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
            visPrev: 'widgets/vis-2-widgets-collection/img/prev-collection-slider.png',
        };
    }

    // Do not delete this method. It is used by vis to read the widget configuration.
    // eslint-disable-next-line class-methods-use-this
    getWidgetInfo(): RxWidgetInfo {
        return SliderCollectionWidget.getWidgetInfo();
    }

    // eslint-disable-next-line class-methods-use-this
    propertiesUpdate(): void {
        // Intentionally empty: the Slider widget has no derived runtime state.
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
    onStateUpdated(_id: string, _state: ioBroker.State | null | undefined): void {}

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
                // ...props.widget,
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
        } as SliderCollectionContextProps;

        if (props.widget.data.noCard || props.widget.usedInWidget) {
            this.wrappedCollectionContent = false;
        } else {
            this.wrappedCollectionContent = true;
        }

        return withCollectionProvider(this.wrapContent(<SliderCollection />), collectionContext);
    }
}

export default SliderCollectionWidget;
