/**
 * Slider Collection widget.
 *
 * @module widgets/SliderCollectionWidget
 */

import React from 'react';
import Generic from '../Generic';

import commonFields from '../lib/commonFields';
import { stateEditorGroup } from '../lib/stateEditorFields';
import commonObjectFields from '../lib/commonObjectFields';
import delayFields from '../lib/delayFields';
import sliderFields from '../lib/sliderFields';
import SliderCollection from './SliderCollection';

import type { RxWidgetInfo, RxRenderWidgetProps } from '@iobroker/types-vis-2';
import type { WidgetRegistry } from '../types';

class SliderCollectionWidget extends Generic<WidgetRegistry['tplSliderCollectionWidget']> {
    static getWidgetInfo(): RxWidgetInfo {
        return {
            id: 'tplSliderCollectionWidget',
            visSet: 'vis-2-widgets-collection',
            visSetLabel: 'widgets_collection',
            visName: 'SliderCollectionWidget',
            visWidgetLabel: 'slider_collection_widget',
            visOrder: 5,
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
                stateEditorGroup({ markerLayer: true }),
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
    // eslint-disable-next-line class-methods-use-this
    onRxDataChanged(): void {
        // this.propertiesUpdate();
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
        // this.propertiesUpdate();
    }

    renderWidgetBody(props: RxRenderWidgetProps): React.JSX.Element | React.JSX.Element[] | null {
        super.renderWidgetBody(props);

        return this.renderWithProvider(<SliderCollection />, props);
    }
}

export default SliderCollectionWidget;
