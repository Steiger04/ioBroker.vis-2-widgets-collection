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
            // Palette tooltip and the vis-2 assistant's set listing; the host prefixes it like the label.
            visHelp: 'slider_collection_widget_help',
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

    renderWidgetBody(props: RxRenderWidgetProps): React.JSX.Element | React.JSX.Element[] | null {
        super.renderWidgetBody(props);

        return this.renderWithProvider(<SliderCollection />, props);
    }
}

export default SliderCollectionWidget;
