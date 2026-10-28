/**
 * Template Collection widget (example/skeleton).
 *
 * @module widgets/TemplateCollectionWidget
 */

import React from 'react';
import type { WidgetRegistry } from '../types';
import Generic from '../Generic';
import commonFields from '../lib/commonFields';
import commonObjectFields from '../lib/commonObjectFields';
import TemplateCollection from './TemplateCollection';

import type { RxWidgetInfo, RxRenderWidgetProps } from '@iobroker/types-vis-2';

/**
 * Widget class that registers and renders the Template Collection widget.
 *
 * @remarks
 * This widget is primarily intended as a starter/example implementation.
 */
class TemplateCollectionWidget extends Generic<WidgetRegistry['tplTemplateCollectionWidget']> {
    static getWidgetInfo(): RxWidgetInfo {
        return {
            id: 'tplTemplateCollectionWidget',
            visSet: 'vis-2-widgets-collection',
            visSetLabel: 'widgets_collection',
            visName: 'TemplateCollectionWidget',
            visWidgetLabel: 'template_collection_widget',
            visAttrs: [
                {
                    name: 'common',
                    fields: [...commonFields({ groupName: '', allFields: true })],
                },
                {
                    name: 'dialog',
                    label: 'group_dialog',
                    fields: [...commonObjectFields(['boolean'])],
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
            visPrev: 'widgets/vis-2-widgets-collection/img/prev-collection-light.png',
        };
    }

    // Do not delete this method. It is used by vis to read the widget configuration.
    // eslint-disable-next-line class-methods-use-this
    getWidgetInfo(): RxWidgetInfo {
        return TemplateCollectionWidget.getWidgetInfo();
    }

    // eslint-disable-next-line class-methods-use-this
    propertiesUpdate(): void {
        // Intentionally empty: this widget does not require derived runtime state.
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

        return this.renderWithProvider(<TemplateCollection />, props);
    }
}

export default TemplateCollectionWidget;
