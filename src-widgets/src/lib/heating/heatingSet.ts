/**
 * The palette set of the heating types (ADR-0118 addendum).
 *
 * @module lib/heating/heatingSet
 * @remarks
 * Set id, label key and colour in one place: every heating type spreads {@link HEATING_SET} into its
 * `getWidgetInfo()`. The set id is stored as `widgetSet` of every placed widget and keys the second
 * `common.visWidgets` entry in io-package.json, whose components are the module roster's heating
 * widgets (`widgetsRegistry`); a registry test binds the three together. It never changes after the
 * first release; the colour and the adapter icon (no `visSetIcon`) are the collection set's.
 */
export const HEATING_SET = {
    visSet: 'vis-2-widgets-collection-heating',
    visSetLabel: 'widgets_collection_heating',
    visSetColor: '#0C0A43',
} as const;
