/**
 * Template Collection widget (example/skeleton).
 *
 * @module widgets/TemplateCollectionWidget
 */

import React from 'react';
import type { WidgetRegistry } from '../types';
import Generic from '../Generic';
import commonFields from '../lib/commonFields';
import { stateEditorGroup } from '../lib/stateEditorFields';
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
                stateEditorGroup({ fixedRows: true }),
            ],
            visDefaultStyle: {
                width: '100%',
                height: '100px',
                position: 'relative',
            },
            visPrev: 'widgets/vis-2-widgets-collection/img/prev-collection-light.png',
        };
    }

    renderWidgetBody(props: RxRenderWidgetProps): React.JSX.Element | React.JSX.Element[] | null {
        super.renderWidgetBody(props);

        return this.renderWithProvider(<TemplateCollection />, props);
    }
}

export default TemplateCollectionWidget;
