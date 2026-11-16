/**
 * The rosters and lists the KI-Integration test seams share (ADR-0114, ADR-0115).
 *
 * @module lib/testing/aiSeams
 * @remarks
 * Naht 1 (`lib/aiCatalogView.parity.test.ts`) projects every placeable type's `getWidgetInfo()`
 * the way the vis-2 host hands it to the Bauzeit-KI; Naht 2 (`lib/aiRawDataRender.test.tsx`)
 * renders the widgets from raw data an assistant may write. Both check every placeable widget,
 * so a new widget fails them without a one-sentence `visHelp`, without exactly one KI-Leitfaden
 * field or without a structured-empty default.
 *
 * - A type the assistant places as an order ({@link ORDER_TYPES}) passes Naht 1 like a widget.
 *   It renders nothing from its data, so Naht 2 leaves it out; what it does has its own seam
 *   (`lib/aiThemeOrder.test.tsx`).
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

/** The types the Bauzeit-KI can place: every module of the registry roster. */
export const PLACEABLE_TYPES: readonly WidgetName[] = widgets;

/**
 * Types the assistant places as an order, not as a widget: the type acts once on its data and
 * leaves the view, it has no body and no field a person edits. Each with its reason; everything
 * else in `widgetsRegistry.widgets` is a placeable widget.
 */
export const ORDER_TYPES: Readonly<Partial<Record<WidgetName, string>>> = {
    // Its palette entry is the Theme Studio button (`customPalette`); placed, it is a Theme-Auftrag.
    ThemeConfigWizard: 'Theme-Auftrag: changes the user theme once and removes itself (ADR-0115)',
};

/** The widgets the Bauzeit-KI can place: the registry roster without {@link ORDER_TYPES}. */
export const PLACEABLE_WIDGETS: readonly WidgetName[] = widgets.filter(name => !(name in ORDER_TYPES));

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

/**
 * The defaults the vis-2 palette stored for the frame settings on every dropped widget before
 * ADR-0117 — what an existing widget holds. Since then the fields have none (`lib/widgetFrame`), so
 * these are literals: the reference a widget leaving them unset is measured against.
 */
export const FRAME_DEFAULTS_BEFORE_ADR_0117: Readonly<Record<string, unknown>> = { baseElevation: 4 };

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
