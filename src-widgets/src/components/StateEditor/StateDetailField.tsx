/**
 * A detail field of the Zustandseditor: one per-state field of the selected Zustandszeile, as a
 * native vis-2 attribute row (ADR-0104 Nachtrag Ticket 03).
 *
 * @module components/StateEditor/StateDetailField
 * @remarks
 * Each per-state field definition (`commonFields({ perState: true })`, the single source) gets a
 * custom-field wrapper, the Detail-Hülle, in the values group (`lib/stateEditorFields`). vis-2
 * renders the wrapper's label in the native label cell; the wrapper renders the definition under
 * the indexed name `name{n}` of the selected row through vis-2's `Editor` prop — so the field
 * looks and behaves exactly like in the former group "Value [n]", colour fields inherit through
 * their own `fallbackFields` (Marker-Ebene included), and every change is written by vis-2 into
 * all selected widgets. A row switch only changes the shared selection: no `onDataChange`, no vis-2
 * recalculation.
 *
 * vis-2's `Editor` (fork `Attributes/Widget/WidgetField.tsx`, custom branch) is
 * `(editorProps: { field, disabled?, error? }) => <WidgetField {...props} field disabled error />`
 * — it renders any field type, reads `widget.data[field.name]` and writes through `applyValue`
 * (all selected widgets, the field's own `onChange` included); `hidden` of the passed field is
 * not evaluated there. It is a new function on every vis-2 render, so it is CALLED here, not
 * mounted: mounted, its changing identity would remount the field (focus and typing state lost)
 * after every edit. The call sits in a component of its own, keyed by the indexed name, so a row
 * switch starts the field fresh (vis-2's field caches what was typed until its value changes).
 *
 * A per-state `hidden` rule that reads the Feldnummer (`enableIconColorMask`: neither URL icon nor
 * colour) cannot hide a row any more — it would make the layout jump between rows — so it locks
 * the field instead; rules on widget level hide the wrapper through vis-2 (no index there).
 *
 * The binding switch of `name{n}` (`StateBindingSwitch`) opens the value cell; a
 * bound field is rendered as a plain text field through the same `Editor`.
 */
import { Box } from '@mui/material';
import { useLayoutEffect, useMemo, useRef } from 'react';
import type React from 'react';
import { createPortal } from 'react-dom';

import type { RxWidgetInfoAttributesField, RxWidgetInfoCustomComponentProperties } from '@iobroker/types-vis-2';
import { stateRowKeyDiffers } from '../../lib/stateRows';
import type { StateFieldDefinition } from '../../lib/stateEditorConfig';
import StateBindingSwitch, { stateBindingTextField, useStateFieldBinding } from './StateBindingSwitch';
import { StateDifferentMark } from './StateDifferentMark';
import { useLabelCell } from './useLabelCell';
import { selectedWidgetDatas, useStateEditor, type StateEditorFieldProps } from './useStateEditor';

/** What vis-2's `Editor` takes (fork `WidgetField.tsx`; `data`/`onChange` it declares are unused). */
export type Vis2EditorProps = {
    /** The field to render — any vis-2 field type, read from and written to `data[field.name]`. */
    field: RxWidgetInfoAttributesField;
    /** Renders the control disabled. */
    disabled?: boolean;
    /** Renders the control in its error state. */
    error?: boolean;
};

/** vis-2's `Editor`: renders a field definition as the attribute panel does. */
export type Vis2Editor = (props: Vis2EditorProps) => React.ReactNode;

/**
 * The `Editor` vis-2 hands a custom field — passed at runtime, missing in `@iobroker/types-vis-2`.
 *
 * @param props The custom-field props.
 * @returns The Editor, or `undefined` in a host that does not pass one.
 */
export const vis2EditorOf = (props: RxWidgetInfoCustomComponentProperties): Vis2Editor | undefined =>
    (props as RxWidgetInfoCustomComponentProperties & { Editor?: Vis2Editor }).Editor;

/** Per-state predicate as `commonFields` declares it (`index` = Feldnummer). */
type IndexedPredicate = (data: Record<string, unknown>, index?: number) => boolean;

/**
 * The per-state field definition under the indexed name of a row, as vis-2's indexed group
 * cloned it (`visWidgetsCatalog.tsx` parseAttributes: `name{n}`, everything else carried over).
 *
 * @param definition The per-state field definition.
 * @param n The Feldnummer.
 * @returns The field of row `n` (without `hidden`, which the wrapper owns).
 */
export const stateRowField = (definition: StateFieldDefinition, n: number): RxWidgetInfoAttributesField => {
    const { hidden: _hidden, ...rest } = definition;
    return { ...rest, name: `${definition.name}${n}` } as RxWidgetInfoAttributesField;
};

/**
 * Calls vis-2's Editor (see the module remarks: called, not mounted).
 *
 * @param props The Editor and what it renders.
 * @param props.Editor vis-2's Editor of the current render.
 * @returns The vis-2 field element.
 */
function EditorSlot({ Editor, ...editorProps }: Vis2EditorProps & { Editor: Vis2Editor }): React.ReactNode {
    return Editor(editorProps);
}

/**
 * The small preview of an image field in its label cell, as vis-2 draws it for `type: 'image'`
 * (`renderFieldRow`, `smallImageDiv`).
 *
 * @param props The preview props.
 * @param props.src The stored image path.
 * @param props.context The vis-2 editor context (project path of `_PRJ_NAME/`).
 * @returns The preview.
 */
function ImagePreview({
    src,
    context,
}: {
    src: string;
    context: RxWidgetInfoCustomComponentProperties['context'];
}): React.JSX.Element {
    const url = src.startsWith('_PRJ_NAME/')
        ? src.replace('_PRJ_NAME/', `../${context.adapterName}.${context.instance}/${context.projectName}/`)
        : src;
    return (
        <Box
            data-state-detail-preview
            sx={{ width: 30, height: 30, display: 'inline-block', float: 'right' }}
        >
            <Box
                component="img"
                src={url}
                alt=""
                sx={{ maxWidth: '100%', maxHeight: '100%' }}
                onError={(event: React.SyntheticEvent<HTMLImageElement>) => {
                    event.currentTarget.style.display = 'none';
                }}
            />
        </Box>
    );
}

/** Props of {@link StateDetailField}: the custom-field props plus the per-state definition. */
export type StateDetailFieldProps = StateEditorFieldProps & {
    /** The per-state field definition (base name, e.g. `iconColor`). */
    definition: StateFieldDefinition;
};

/**
 * Renders one per-state field of the selected Zustandszeile.
 *
 * @param fieldProps See {@link StateDetailFieldProps}.
 * @param fieldProps.definition The per-state field definition.
 * @returns The value cell content of the wrapper.
 */
function StateDetailField({ definition, ...fieldProps }: StateDetailFieldProps): React.JSX.Element {
    const { selected } = useStateEditor(fieldProps);
    const { data, props } = fieldProps;
    const Editor = vis2EditorOf(props);
    const field = useMemo(() => (selected > 0 ? stateRowField(definition, selected) : null), [definition, selected]);
    const rule = definition.hidden;
    // Evaluated on every selected widget's stored data, locked only when it holds for all — as
    // vis-2 hid the row in "Value [n]" (`checkFunction`). The field data is vis-2's merged
    // `commonValues` under multi-selection, where differing keys (two URL icons) are `null`.
    const stored = selectedWidgetDatas({ data, props });
    const locked =
        field !== null &&
        typeof rule === 'function' &&
        stored.every(widgetData => (rule as IndexedPredicate)(widgetData, selected));
    const differs = field !== null && stateRowKeyDiffers(stored, field.name as string);
    const anchor = useRef<HTMLDivElement>(null);
    const labelCell = useLabelCell(anchor);
    // A locked row looks like a disabled vis-2 row (`fieldTitleDisabled`: opacity 0.8); vis-2
    // cannot grey the label itself — its `disabled` rule knows no selected row.
    useLayoutEffect(() => {
        if (!labelCell || !locked) {
            return undefined;
        }
        labelCell.style.opacity = '0.8';
        return () => {
            labelCell.style.opacity = '';
        };
    }, [labelCell, locked]);
    const binding = useStateFieldBinding(fieldProps, definition, field ? (field.name as string) : null);
    // The field data on purpose: vis-2 draws the preview from the first widget unless the values
    // differ (`!isDifferent`), and the merged `commonValues` hold exactly that (`null` if they differ).
    const image = field && definition.type === 'image' ? data[field.name as string] : undefined;

    return (
        <Box
            ref={anchor}
            data-state-detail={definition.name}
            data-locked={locked || undefined}
            data-different={differs || undefined}
            sx={{ display: 'flex', alignItems: 'center', width: '100%', minWidth: 0 }}
        >
            {field && binding.shown ? (
                <StateBindingSwitch
                    bound={binding.bound}
                    canToggle={binding.canToggle}
                    toggle={binding.toggle}
                />
            ) : null}
            <Box sx={{ display: 'flex', alignItems: 'center', flex: '1 1 auto', width: '100%', minWidth: 0 }}>
                {Editor && field ? (
                    <EditorSlot
                        // A bound field is a text field of its own: the toggle starts it fresh.
                        key={binding.bound ? `${field.name}|binding` : field.name}
                        Editor={Editor}
                        field={binding.bound ? stateBindingTextField(field) : field}
                        disabled={locked}
                    />
                ) : null}
            </Box>
            {differs ? <StateDifferentMark /> : null}
            {labelCell && typeof image === 'string' && image
                ? createPortal(
                      <ImagePreview
                          src={image}
                          context={props.context}
                      />,
                      labelCell,
                  )
                : null}
        </Box>
    );
}

export default StateDetailField;
