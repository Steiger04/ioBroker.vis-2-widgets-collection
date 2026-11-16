/**
 * vis-2 field generator for the settings of a Theme-Auftrag (ADR-0115).
 *
 * @module ThemeConfigWizard/themeOrderFields
 * @remarks
 * The fields are what the vis-2 assistant reads of a Theme-Auftrag in the type description:
 * name, type, label and the values to pick from. No person edits them — every field is hidden
 * whatever the data, so the attribute panel never becomes a second theme editor — and none
 * has a default: only what the assistant sets changes the theme.
 *
 * One field per entry of {@link module:ThemeConfigWizard/themeOrder.THEME_ORDER_SETTINGS}, the
 * one list of what an order can set. Each label is the Theme Studio's label of the same
 * control, so the assistant reads the name the user knows from the studio — except a
 * Rahmenvorgabe's, which is the label of the widget field it stands in for (it keeps that field's
 * name and sense, ADR-0117). The fields are the
 * host's plain kinds (`checkbox`, `select`, `color`, `number`): the kind is all the type
 * description tells the assistant besides the label, and no editing row is ever drawn.
 */
import { alwaysHidden } from '../lib/fieldFactories';
import { THEME_ORDER_SETTINGS } from './themeOrder';

import type { RxWidgetInfoAttributesField } from '@iobroker/types-vis-2';

const themeOrderFields = (): RxWidgetInfoAttributesField[] =>
    THEME_ORDER_SETTINGS.map(({ name, labelKey, input }): RxWidgetInfoAttributesField =>
        input.type === 'select'
            ? {
                  name,
                  label: labelKey,
                  type: 'select',
                  options: [...input.options],
                  // The option values are what the order stores; no person reads them as labels.
                  noTranslation: true,
                  hidden: alwaysHidden,
              }
            : { name, label: labelKey, type: input.type, hidden: alwaysHidden },
    );

export default themeOrderFields;
