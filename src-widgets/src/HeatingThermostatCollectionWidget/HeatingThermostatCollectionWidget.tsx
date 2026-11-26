/**
 * Raumthermostat — the first heating type (ADR-0118).
 *
 * @module HeatingThermostatCollectionWidget/HeatingThermostatCollectionWidget
 */

import type { WidgetRegistry } from '../types';
import Generic from '../Generic';
import { createAiGuideField } from '../lib/fieldFactories';
import { heatingCommonFields } from '../lib/heating/heatingCommonFields';
import { thermostatBindingFields, thermostatValueFields } from '../lib/heating/thermostatFields';
import { HEATING_SET } from '../widgetsRegistry';

import HeatingThermostatCollection from './HeatingThermostatCollection';

import type { RxWidgetInfo, RxRenderWidgetProps } from '@iobroker/types-vis-2';

/**
 * Widget entry (vis-2 runtime).
 *
 * @remarks
 * A type of the heating set (`HEATING_SET`, second `common.visWidgets` entry), bound per
 * Thermostat-Bedeutung with `soll` as its main Bedeutung (ADR-0119, ADR-0123 Nr. 5). It starts in its
 * Voll stage at a fixed 420 × 700 px, whatever the view's width (ADR-0122 Nr. 9); in a grid section
 * it takes one section column and the rows of that height — no `visDefaultGrid.rows`, since the
 * assistant inserts with `visDefaultStyle` only.
 */
class HeatingThermostatCollectionWidget extends Generic<WidgetRegistry['tplHeatingThermostatCollectionWidget']> {
    static getWidgetInfo(): RxWidgetInfo {
        return {
            id: 'tplHeatingThermostatCollectionWidget',
            ...HEATING_SET,
            visName: 'HeatingThermostatCollectionWidget',
            visWidgetLabel: 'heating_thermostat_collection_widget',
            // Palette tooltip and the vis-2 assistant's set listing; the host prefixes it like the label.
            visHelp: 'heating_thermostat_collection_widget_help',
            visOrder: 1,
            visAttrs: [
                {
                    name: 'common',
                    // The KI-Leitfaden leads the field list the assistant reads; the panel never shows it.
                    fields: [
                        createAiGuideField('heating_thermostat_collection_widget_ai_guide'),
                        ...heatingCommonFields(),
                    ],
                },
                {
                    name: 'binding',
                    label: 'heating_group_binding',
                    fields: thermostatBindingFields(),
                },
                {
                    name: 'thermostat',
                    label: 'heating_group_thermostat',
                    fields: thermostatValueFields(),
                },
            ],
            visDefaultStyle: {
                width: '420px',
                height: '700px',
                position: 'relative',
            },
            visDefaultGrid: { columns: 12 },
            visPrev: 'widgets/vis-2-widgets-collection/img/prev-collection-heating-thermostat.png',
        };
    }

    renderWidgetBody(props: RxRenderWidgetProps): React.JSX.Element | React.JSX.Element[] | null {
        super.renderWidgetBody(props);

        return this.renderWithProvider(<HeatingThermostatCollection />, props);
    }
}

export default HeatingThermostatCollectionWidget;
