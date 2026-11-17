/**
 * The reading of the selected widgets for custom fields — shared by the Erb-Adapter
 * (`WidgetFrameField`), the Vertrags-Adapter (`ContractColorField`, also the colour rows of the
 * JSON table's column editor) and the Zustandseditor (ADR-0117, addendum 2026-11-17).
 *
 * @module components/selectedWidgets
 * @remarks
 * vis-2 hands a custom field the first selected widget's data, under a multi-selection its
 * `commonValues`, where every key that differs by `!==` is `null` — an object such as `oidObject`
 * or `bindings` always does (vis-2 `Attributes/Widget/index.tsx`, `commonValues`) — and no
 * `isDifferent`. A field that must tell the selected widgets apart reads them from the project in
 * its props (`context.views[selectedView].widgets[id]`): `selectedWidgets`, else the single
 * `selectedWidget`. Where the project does not hold the data of every selected widget, the field
 * data stands for the selection.
 */

import type { RxWidgetInfoCustomComponentProperties, WidgetData } from '@iobroker/types-vis-2';
import type { WidgetStyleState } from '@iobroker/types-vis-2/visBaseWidget';

/** A selected widget as a custom field reads it. */
export interface SelectedWidget {
    /** Its stored data; the field data where the project does not hold every selected widget's data. */
    data: WidgetData;
    /** Its vis-2 widget style (CSS `color` …); undefined where the project does not hold it. */
    style: WidgetStyleState | undefined;
}

/** The project map of the custom-field context, as far as the selection reading reads it. */
type StoredViews = Record<
    string,
    { widgets?: Record<string, { data?: WidgetData; style?: WidgetStyleState } | undefined> } | undefined
>;

/**
 * Reads the selected widgets of a custom field.
 *
 * @param data - The data vis-2 hands the field (`commonValues` under a multi-selection).
 * @param props - The vis-2 editor context.
 * @returns One entry per selected widget, in selection order, each with its stored data and style;
 *   where the project does not hold the data of every selected widget, the field data alone, with
 *   the first selected widget's style.
 */
export function readSelectedWidgets(data: WidgetData, props: RxWidgetInfoCustomComponentProperties): SelectedWidget[] {
    const widgets = (props.context?.views as unknown as StoredViews | undefined)?.[props.selectedView]?.widgets;
    const ids = (props.selectedWidgets?.length ? props.selectedWidgets : [props.selectedWidget]) as unknown[];
    const stored = ids.map(id => (typeof id === 'string' && id ? widgets?.[id] : undefined));
    if (stored.length > 0 && stored.every(one => one?.data)) {
        return stored.map(one => ({ data: one!.data!, style: one!.style }));
    }
    return [{ data, style: stored[0]?.style }];
}

/**
 * Reads the stored data of the selected widgets of a custom field (see {@link readSelectedWidgets}).
 *
 * @param data - The data vis-2 hands the field (`commonValues` under a multi-selection).
 * @param props - The vis-2 editor context.
 * @returns One data object per selected widget, in selection order; the field data alone where the
 *   project does not hold the data of every selected widget.
 */
export function readSelectedWidgetDatas(data: WidgetData, props: RxWidgetInfoCustomComponentProperties): WidgetData[] {
    return readSelectedWidgets(data, props).map(one => one.data);
}

/**
 * Reads the first selected widget of a custom field (see {@link readSelectedWidgets}) — the one
 * whose vis-2 widget style and stored frame a field reads where it shows one value for the
 * selection (the Vertrags-Adapter's swatch, the colour rows of the JSON table's column editor).
 *
 * @param data - The data vis-2 hands the field (`commonValues` under a multi-selection).
 * @param props - The vis-2 editor context.
 * @returns The first selected widget with its stored data and style; the field data where the
 *   project does not hold the data of every selected widget.
 */
export function readFirstSelectedWidget(
    data: WidgetData,
    props: RxWidgetInfoCustomComponentProperties,
): SelectedWidget {
    return readSelectedWidgets(data, props)[0];
}
