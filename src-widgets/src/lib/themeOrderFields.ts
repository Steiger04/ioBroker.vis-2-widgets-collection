/**
 * vis-2 field generator for the settings of a Theme-Auftrag (ADR-0115).
 *
 * @module lib/themeOrderFields
 * @remarks
 * The fields are what the vis-2 assistant reads of a Theme-Auftrag in the type description:
 * name, label and the values to pick from. No person edits them — every field is hidden
 * whatever the data, so the attribute panel never becomes a second theme editor — and none
 * has a default: only what the assistant sets changes the theme.
 *
 * One field per entry of {@link module:lib/theme/themeOrder.THEME_ORDER_SETTINGS}, the one
 * list of what an order can set. Each label is the Theme Studio's label of the same setting,
 * so the assistant reads the name the user knows from the studio.
 */
import { alwaysHidden } from './fieldFactories';
import { THEME_ORDER_SETTINGS } from './theme/themeOrder';

import type { RxWidgetInfoAttributesField } from '@iobroker/types-vis-2';

const themeOrderFields = (): RxWidgetInfoAttributesField[] =>
    THEME_ORDER_SETTINGS.map(setting => ({
        name: setting.name,
        label: setting.labelKey,
        type: 'select',
        options: [...setting.options],
        // The option values are what the order stores; no person reads them as labels.
        noTranslation: true,
        hidden: alwaysHidden,
    }));

export default themeOrderFields;
