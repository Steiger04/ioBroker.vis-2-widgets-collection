/**
 * The core fields of a heating type: `commonFields()` with the fields its frame never reads hidden
 * (ADR-0123 Nr. 3–4).
 *
 * @module lib/heating/heatingCommonFields
 * @remarks
 * A heating type draws its Kartenkopf, readings and hint line in the content; the frame keeps its
 * general lines `header` and `footer` (with their sizes, empty by default) and the eight frame
 * settings, and draws the card. What the frame would read beyond that has no consumer:
 * - the icon block and the corner-icon switch `noHeaderIcon` — no corner icon
 *   (`CollectionBase` with `cornerIcon={false}`);
 * - alias, value and value size — the main Bedeutung is no `oid`, so the frame shows no value text;
 * - the geometry square / ellipse / circle — the size stages measure a rectangular Content-Box, a
 *   round frame would cut off Kartenkopf and hint line.
 *
 * The ECharts pattern (`EchartsCollectionWidget`): hidden, not removed, so the fields stay declared
 * (all eight frame settings among them) and stored values stay in the widget data untouched; a
 * section divider is hidden with its section when every field of the section is inert.
 */
import commonFields from '../commonFields';

import type { RxWidgetInfoAttributesField } from '@iobroker/types-vis-2';

/** The core fields a heating type's frame never reads. */
export const INERT_HEATING_COMMON_FIELDS: ReadonlySet<string> = new Set([
    'icon',
    'iconSmall',
    'iconSize',
    'enableIconColorMask',
    'iconColor',
    'iconXOffset',
    'iconYOffset',
    'noHeaderIcon',
    'alias',
    'value',
    'valueSize',
    'square',
    'ellipse',
    'circle',
]);

/** `hidden` callback of an inert core field: hidden in every widget state (vis-2 calls it with the widget data). */
const HIDDEN_IN_EVERY_STATE = (): boolean => true;

/** A core-block section divider: a custom field without a data name (or the `allFieldsDivider` rule). */
const isSectionDivider = (field: RxWidgetInfoAttributesField): boolean =>
    'type' in field && field.type === 'custom' && (field.name === undefined || field.name === 'allFieldsDivider');

/** Whether a field is one of {@link INERT_HEATING_COMMON_FIELDS}. */
const isInert = (field: RxWidgetInfoAttributesField): boolean =>
    field.name !== undefined && INERT_HEATING_COMMON_FIELDS.has(field.name);

/**
 * Builds the core fields of a heating type.
 *
 * @returns `commonFields()` with the inert fields and their wholly inert sections hidden.
 */
export function heatingCommonFields(): RxWidgetInfoAttributesField[] {
    const fields = commonFields() as RxWidgetInfoAttributesField[];

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
}
