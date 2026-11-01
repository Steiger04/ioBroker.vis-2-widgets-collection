/**
 * Dialog collection widget.
 *
 * @module widgets/DialogCollectionWidget
 */

import React from 'react';
import type { WidgetRegistry } from '../types';
import Generic from '../Generic';

import commonFields from '../lib/commonFields';
import dialogFields from '../lib/dialogFields';
import DialogCollection from './DialogCollection';

import type { RxWidgetInfo, RxRenderWidgetProps } from '@iobroker/types-vis-2';

/**
 * Widget entry (vis-2 runtime).
 *
 * @remarks
 * Defines the widget schema and provides the collection context consumed by
 * {@link DialogCollection}.
 */
class DialogCollectionWidget extends Generic<WidgetRegistry['tplDialogCollectionWidget']> {
    static getWidgetInfo(): RxWidgetInfo {
        return {
            id: 'tplDialogCollectionWidget',
            visSet: 'vis-2-widgets-collection', // Widget set name in which this widget is located
            visSetLabel: 'widgets_collection', // Widget set translated label (should be defined only in one widget of a set)
            visName: 'DialogCollectionWidget', // Name of widget
            visWidgetLabel: 'dialog_collection_widget', // Label for widget
            visOrder: 9,
            visAttrs: [
                {
                    name: 'common', // group name
                    fields: [...commonFields({ groupName: '', allFields: true })],
                },
                {
                    name: 'dialog', // group name
                    label: 'group_dialog',
                    fields: [...dialogFields()],
                },
                // check here all possible types https://github.com/ioBroker/ioBroker.vis/blob/react/src/src/Attributes/Widget/SCHEMA.md
            ],
            visDefaultStyle: {
                width: '100%',
                height: '100px',
                position: 'relative',
            },
            visPrev: 'widgets/vis-2-widgets-collection/img/prev-collection-dialog.png',
        };
    }

    // Do not delete this method. It is used by vis to read the widget configuration.
    // eslint-disable-next-line class-methods-use-this
    getWidgetInfo(): RxWidgetInfo {
        return DialogCollectionWidget.getWidgetInfo();
    }

    renderWidgetBody(props: RxRenderWidgetProps): React.JSX.Element {
        super.renderWidgetBody(props);

        return this.renderWithProvider(<DialogCollection />, props, {
            getWidgetView: this.getWidgetView.bind(this),
        });
    }
}

export default DialogCollectionWidget;
