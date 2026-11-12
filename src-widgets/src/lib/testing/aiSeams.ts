/**
 * The rosters and lists the two KI-Integration test seams share (ADR-0114).
 *
 * @module lib/testing/aiSeams
 * @remarks
 * Naht 1 (`lib/aiCatalogView.parity.test.ts`) projects every placeable widget's `getWidgetInfo()`
 * the way the vis-2 host hands it to the Bauzeit-KI; Naht 2 (`lib/aiRawDataRender.test.tsx`)
 * renders the widgets from raw data an assistant may write. Both check every placeable widget,
 * so a new widget without `visHelp` or without a structured-empty default fails them.
 *
 * - The shared field modules ({@link SHARED_FIELD_NAMES}) are told apart from a widget's own fields.
 * - A named `custom` field that stores nothing under its name goes on
 *   {@link UI_ONLY_CUSTOM_FIELDS}, with the reason.
 */

import commonFields from '../commonFields';
import commonObjectFields from '../commonObjectFields';
import delayFields from '../delayFields';
import { createOnlyDisplayField } from '../fieldFactories';
import { stateEditorGroup } from '../stateEditorFields';
import { widgets } from '../../widgetsRegistry';

import type { RxWidgetInfoGroup } from '@iobroker/types-vis-2';

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

/** A bound of an indexed group as vis-2 reads it: a number, or the name of the data key holding one. */
const groupBound = (bound: number | string | undefined, data: Record<string, unknown>): number =>
    Number.isInteger(bound) ? (bound as number) : parseInt(String(data[(bound as string | undefined) || 1]), 10);

/**
 * The data the vis-2 palette stores for a widget dropped from it (vis-2 2.20.8 `Editor.tsx` addWidget
 * with `applyDefaultsOfNewFields` of `Vis/visWidgetsCatalog.tsx`), rebuilt from the widget's
 * `visAttrs` for the test seams — the reference an assistant-inserted widget is measured against.
 *
 * - A field named `oid` starts as `'nothing_selected'`; `data` (what the assistant would set) is
 *   assigned over it before the defaults, as vis-2 does for the data it is handed.
 * - Every field with a `default` (not `null`/`undefined`) whose key is still `undefined` gets it,
 *   hidden or not, together with the group's `g_<group>` flag; an indexed group expands to
 *   `name{indexFrom}`…`name{indexTo}` from the data so far, in up to three rounds (a default may be
 *   the count that opens a group).
 *
 * @param visAttrs - The widget's `getWidgetInfo().visAttrs`.
 * @param data - The data the widget is inserted with.
 * @returns A new object; `data` stays as it is.
 */
export const paletteInsertData = (
    visAttrs: readonly RxWidgetInfoGroup[],
    data: Record<string, unknown> = {},
): Record<string, unknown> => {
    const inserted: Record<string, unknown> = {};
    if (visAttrs.some(group => group.indexFrom === undefined && group.fields?.some(field => field.name === 'oid'))) {
        inserted.oid = 'nothing_selected';
    }
    Object.assign(inserted, data);

    for (let round = 0; round < 3; round++) {
        let written = false;
        for (const group of visAttrs) {
            const copies =
                group.indexFrom === undefined
                    ? [{ name: group.name, suffix: '' }]
                    : Array.from(
                          {
                              length: Math.max(
                                  0,
                                  groupBound(group.indexTo, inserted) - groupBound(group.indexFrom, inserted) + 1,
                              ),
                          },
                          (_, i) => {
                              const index = groupBound(group.indexFrom, inserted) + i;
                              return { name: `${group.name}-${index}`, suffix: String(index) };
                          },
                      );
            for (const copy of copies) {
                for (const field of (group.fields ?? []) as { name?: string; default?: unknown }[]) {
                    const key = field.name && `${field.name}${copy.suffix}`;
                    if (key && field.default != null && inserted[key] === undefined) {
                        inserted[key] = field.default;
                        inserted[`g_${copy.name}`] = true;
                        written = true;
                    }
                }
            }
        }
        if (!written) {
            break;
        }
    }
    return inserted;
};
