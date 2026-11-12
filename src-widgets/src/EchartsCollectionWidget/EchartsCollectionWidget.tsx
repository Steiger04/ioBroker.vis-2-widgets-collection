/**
 * Echarts Collection widget.
 *
 * @module widgets/EchartsCollectionWidget
 */

import type { WidgetRegistry } from '../types';
import Generic from '../Generic';

import commonFields from '../lib/commonFields';
import echartsFields from '../lib/echartsFields';
import EchartsCollection from './EchartsCollection';

import type { RxWidgetInfo, RxRenderWidgetProps, RxWidgetInfoAttributesField } from '@iobroker/types-vis-2';

/**
 * Core fields the chart frame never reads (ADR-0004: the field follows the runtime). The body
 * renders `CollectionBase` with `cornerIcon={false}` (CONTEXT "Eck-Icon") and has no value
 * text, so the icon block, the corner-icon switch and the value size have no consumer.
 */
const INERT_COMMON_FIELDS: ReadonlySet<string> = new Set([
    'icon',
    'iconSmall',
    'iconSize',
    'enableIconColorMask',
    'iconColor',
    'iconXOffset',
    'iconYOffset',
    'noHeaderIcon',
    'valueSize',
]);

/** `hidden` callback of an inert core field: hidden in every widget state (vis-2 calls it with the widget data). */
const HIDDEN_IN_EVERY_STATE = (): boolean => true;

/** A core-block section divider: a custom field without a data name (or the `allFieldsDivider` rule). */
const isSectionDivider = (field: RxWidgetInfoAttributesField): boolean =>
    'type' in field && field.type === 'custom' && (field.name === undefined || field.name === 'allFieldsDivider');

/**
 * `commonFields()` with the inert fields hidden — hidden, not removed, so the fields stay
 * declared and stored values stay in the widget data untouched. A section divider is hidden
 * with its section when every field of the section is inert (icon, value).
 */
const echartsCommonFields = (): RxWidgetInfoAttributesField[] => {
    const fields = commonFields();
    const isInert = (field: RxWidgetInfoAttributesField): boolean =>
        field.name !== undefined && INERT_COMMON_FIELDS.has(field.name);

    return fields.map((field, index) => {
        if (isInert(field)) {
            return { ...field, hidden: HIDDEN_IN_EVERY_STATE };
        }
        if (isSectionDivider(field)) {
            const next = fields.slice(index + 1);
            const end = next.findIndex(isSectionDivider);
            const section = end === -1 ? next : next.slice(0, end);
            if (section.length > 0 && section.every(isInert)) {
                return { ...field, hidden: HIDDEN_IN_EVERY_STATE };
            }
        }
        return field;
    });
};

class EchartsCollectionWidget extends Generic<WidgetRegistry['tplEchartsCollectionWidget']> {
    static getWidgetInfo(): RxWidgetInfo {
        return {
            id: 'tplEchartsCollectionWidget',
            visSet: 'vis-2-widgets-collection',
            visSetLabel: 'widgets_collection',
            visSetColor: '#0C0A43',
            visName: 'EchartsCollectionWidget',
            visWidgetLabel: 'echarts_collection_widget',
            // Palette tooltip and the vis-2 assistant's set listing; the host prefixes it like the label.
            visHelp: 'echarts_collection_widget_help',
            visOrder: 13,
            visAttrs: [
                {
                    name: 'common', // group name
                    fields: echartsCommonFields(),
                },
                {
                    name: 'chart', // group name
                    label: 'group_echarts',
                    fields: [...echartsFields()] as RxWidgetInfoAttributesField[],
                },
                {
                    name: 'series',
                    label: 'echarts_series',
                    // The whole iterable shell is hidden — series are managed solely by the
                    // configurator modal. vis-2 still expands + subscribes oid1..oidN from this
                    // declaration (parseAttributes copies group.hidden onto each indexed copy,
                    // and runtime subscription is schema-driven, not editor-driven), so hiding
                    // the group removes only the editor's "series [N]" accordions — not the data
                    // binding. (Group `hidden` is typed as string|function, not boolean.)
                    hidden: (): boolean => true,
                    indexFrom: 1,
                    indexTo: 'series_count',
                    fields: [
                        // Indexed OID — becomes oid1..oidN at runtime, auto-subscribed by vis-2.
                        // Per-series rendering metadata (name/color/type/yAxisIndex) lives in the
                        // base64 `seriesConfig` blob. The modal editor writes oidN directly.
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

    renderWidgetBody(props: RxRenderWidgetProps): React.JSX.Element | React.JSX.Element[] | null {
        super.renderWidgetBody(props);

        return this.renderWithProvider(<EchartsCollection />, props);
    }
}

export default EchartsCollectionWidget;
