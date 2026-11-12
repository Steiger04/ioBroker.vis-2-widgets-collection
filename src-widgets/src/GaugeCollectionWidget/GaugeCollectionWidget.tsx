/**
 * Gauge collection widget.
 *
 * @module widgets/GaugeCollectionWidget
 */

import type { WidgetRegistry } from '../types';
import Generic from '../Generic';

import commonFields from '../lib/commonFields';
import { stateEditorGroup } from '../lib/stateEditorFields';
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
            // Palette tooltip and the vis-2 assistant's set listing; the host prefixes it like the label.
            visHelp: 'gauge_collection_widget_help',
            visOrder: 10,
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
                stateEditorGroup(),
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

    renderWidgetBody(props: RxRenderWidgetProps): React.JSX.Element | React.JSX.Element[] | null {
        super.renderWidgetBody(props);

        return this.renderWithProvider(<GaugeCollection />, props);
    }
}

export default GaugeCollectionWidget;
