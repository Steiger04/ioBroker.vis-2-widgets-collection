/**
 * Bindings of the Zustandseditor's detail fields: which field offers vis-2's binding switch,
 * whether `name{n}` is bound and the patch that toggles it (ADR-0104 Nachtrag Ticket 06).
 *
 * @module lib/stateFieldBinding
 * @remarks
 * vis-2 keeps the bound data attributes of a widget in `data.bindings`, an array of attribute
 * names; a bound attribute is edited as a plain text field for `{…}` bindings (fork
 * `Attributes/Widget/index.tsx` `changeBinding`, `renderFieldRow` → `WidgetBindingField`). The
 * detail wrappers are custom fields with `noBinding`, so vis-2 shows no switch for them — the
 * Zustandseditor maintains `data.bindings` for `name{n}` itself. Moving, cloning and deleting
 * rows rename these entries in the Zustandszeilen-Operationen (`lib/stateRows`).
 *
 * vis-2 toggles the name in each selected widget's own array; the custom-field API writes ONE
 * patch into all selected widgets, so the toggle writes the whole array — and is offered only
 * while every selected widget holds the same bindings, otherwise one widget would lose or gain
 * bindings of other fields.
 */
import sameItems from './helper/sameItems';

import type { RxWidgetInfoAttributesField, WidgetData } from '@iobroker/types-vis-2';

/** The part of a field definition vis-2's binding rule reads. */
type BindableField = { type?: string; label?: string; noBinding?: boolean };

/**
 * Whether vis-2 offers the binding switch for a field — its rule in `renderFieldRow`: a custom
 * field only with a label; a checkbox only with `noBinding: false` (a binding delivers strings,
 * the widget must accept `'true'`); every other field unless `noBinding`.
 *
 * @param definition The per-state field definition.
 * @returns `true` when the field had a binding switch in vis-2's group "Value [n]".
 */
export const stateFieldBindable = (definition: RxWidgetInfoAttributesField): boolean => {
    const { type, label, noBinding } = definition as BindableField;
    if (type === 'custom' && !label) {
        return false;
    }
    return type === 'checkbox' ? noBinding === false : !noBinding;
};

/**
 * Whether a data attribute is bound — as vis-2 marks it: in any selected widget.
 *
 * @param datas The stored data of every selected widget.
 * @param name The data attribute (`header2`).
 * @returns `true` when `data.bindings` of one of them names it.
 */
export const stateFieldBound = (datas: readonly WidgetData[], name: string): boolean =>
    datas.some(data => (data.bindings || []).includes(name));

/**
 * The patch that binds or unbinds a data attribute in every selected widget.
 *
 * @param datas The stored data of every selected widget.
 * @param name The data attribute (`header2`).
 * @returns `{ bindings }` with `name` removed when bound, else appended — the value of the
 *   attribute stays, as in vis-2; `null` when the selected widgets hold different bindings
 *   (one patch cannot keep each of them right) or there is no widget.
 */
export const stateFieldBindingPatch = (datas: readonly WidgetData[], name: string): { bindings: string[] } | null => {
    if (datas.length === 0) {
        return null;
    }
    const bindings: string[] = datas[0].bindings || [];
    if (!datas.every(data => sameItems(data.bindings || [], bindings))) {
        return null;
    }
    return {
        bindings: bindings.includes(name) ? bindings.filter(entry => entry !== name) : [...bindings, name],
    };
};
