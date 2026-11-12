/**
 * The rosters and lists the two KI-Integration test seams share (ADR-0114).
 *
 * @module lib/testing/aiSeams
 * @remarks
 * Naht 1 (`lib/aiCatalogView.parity.test.ts`) projects every placeable widget's `getWidgetInfo()`
 * the way the vis-2 host hands it to the Bauzeit-KI; Naht 2 (`aiRawData.render.test.tsx`)
 * renders the widgets from raw data an assistant may write. Both read their roster and their
 * open lists from here, so a widget group leaves both seams with one edit.
 *
 * How a follow-up ticket uses this module:
 * - a widget it finishes leaves {@link STILL_OPEN} (Naht 1 and the widget's own fields in Naht 2);
 * - the shared field modules ({@link SHARED_FIELD_NAMES}) are checked at every widget (ticket 02);
 * - a named `custom` field that stores nothing under its name goes on
 *   {@link UI_ONLY_CUSTOM_FIELDS}, with the reason.
 */

import commonFields from '../commonFields';
import commonObjectFields from '../commonObjectFields';
import delayFields from '../delayFields';
import { createOnlyDisplayField } from '../fieldFactories';
import { stateEditorGroup } from '../stateEditorFields';
import { widgets } from '../../widgetsRegistry';

/** A module of the widget roster. */
export type WidgetName = (typeof widgets)[number];

/**
 * Registry modules that are not widget types the assistant can place. Each with its reason;
 * everything else in `widgetsRegistry.widgets` is a placeable widget.
 */
export const NOT_PLACEABLE: Readonly<Partial<Record<WidgetName, string>>> = {
    // `customPalette` replaces its palette entry with the theme button; no fields, no body.
    ThemeConfigWizard: 'theme wizard button in the palette, not a widget',
};

/** The widgets the Bauzeit-KI can place: the registry roster without {@link NOT_PLACEABLE}. */
export const PLACEABLE_WIDGETS: readonly WidgetName[] = widgets.filter(name => !(name in NOT_PLACEABLE));

/**
 * Widgets not yet checked by the seams: no `visHelp` and no default rule asserted (Naht 1), their
 * own fields not rendered from broken data (Naht 2). Emptied by the widget tickets; ticket 10
 * removes the list.
 */
export const STILL_OPEN: readonly WidgetName[] = ['JsonTableCollectionWidget', 'EchartsCollectionWidget'];

/**
 * The names of the fields the shared field modules declare: the common block, its Active variant,
 * the OID block, the delay block, the Zustandseditor group and `onlyDisplay`. The per-state keys
 * `name{n}` of the Zustandszeilen come from `commonFields({ perState: true })` as well.
 */
export const SHARED_FIELD_NAMES: ReadonlySet<string> = new Set(
    [
        ...commonFields(),
        ...commonFields({ allFields: false }),
        ...commonFields({ groupName: 'Active', allFields: false }),
        ...commonObjectFields(['mixed']),
        ...delayFields(),
        ...stateEditorGroup().fields,
        createOnlyDisplayField(),
    ].flatMap(field => (field.name ? [field.name] : [])),
);

/** An exception from the default rule: a named `custom` field that stores no value under its name. */
export interface UiOnlyCustomField {
    /** The field's name, or a name prefix ending in `:` for a family of fields. */
    name: string;
    /** Why the field stores nothing under its name. */
    reason: string;
}

/**
 * Named `custom` fields that store no value under their own name, so they need no
 * strukturiert-leerer Default. Unnamed `custom` fields (dividers) store nothing by definition and
 * are not listed.
 */
export const UI_ONLY_CUSTOM_FIELDS: readonly UiOnlyCustomField[] = [
    { name: 'allFieldsDivider', reason: 'section divider of commonFields, named only to be filtered' },
    {
        name: 'stateEditor:',
        reason: 'Zustandseditor list, selected row and detail fields: the rows are stored as name1..nameN',
    },
];

/** Whether a field name is covered by {@link UI_ONLY_CUSTOM_FIELDS}. */
export const isUiOnlyCustomField = (name: string): boolean =>
    UI_ONLY_CUSTOM_FIELDS.some(entry => (entry.name.endsWith(':') ? name.startsWith(entry.name) : name === entry.name));
