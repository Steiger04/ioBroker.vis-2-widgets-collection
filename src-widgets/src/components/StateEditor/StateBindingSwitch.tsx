/**
 * The binding switch of a Zustandseditor detail field (ADR-0104 Nachtrag Ticket 06).
 *
 * @module components/StateEditor/StateBindingSwitch
 * @remarks
 * Copies vis-2's binding switch of an attribute row (fork `Attributes/Widget/index.tsx`
 * `renderFieldRow`): the `@mui/icons-material` Link icon at 16 px (`styles.bindIcon`) with the
 * tooltip "use field as binding", LinkOff with "deactivate binding" while the field is bound.
 * vis-2 floats it to the right end of the label cell; here it sits at the start of the value
 * cell, the closest place a custom field owns. A bound field is edited as a plain text field,
 * as vis-2's `WidgetBindingField` (a standard `TextField`) does — here through vis-2's own
 * `Editor` with the field type `text`, so it reads and writes `name{n}` in every selected widget
 * like any native field. Toggling writes `data.bindings` (`lib/stateFieldBinding`) — on a widget
 * saved with `ignoreCommonStates` on also its row count, as every Zustandseditor action
 * (`stateRowConversion`); the value stays, as in vis-2.
 */
import { Box, IconButton, Tooltip } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import LinkOffIcon from '@mui/icons-material/LinkOff';
import type React from 'react';

import { translate } from '../../lib/translate';
import { stateFieldBindable, stateFieldBindingPatch, stateFieldBound } from '../../lib/stateFieldBinding';
import { stateRowConversion } from '../../lib/stateRows';
import { selectedWidgetDatas, type StateEditorFieldProps } from './useStateEditor';

import type { RxWidgetInfoAttributesField } from '@iobroker/types-vis-2';

/** vis-2's `styles.bindIcon`. */
const BIND_ICON_SIZE = { width: 16, height: 16 } as const;

/** The binding of one detail field. */
export type StateFieldBinding = {
    /** The switch is shown: vis-2 offered one for the field, or `name{n}` is bound anyway. */
    shown: boolean;
    /** `name{n}` is bound in one of the selected widgets. */
    bound: boolean;
    /** The switch can toggle — the selected widgets hold the same bindings. */
    canToggle: boolean;
    /** Binds or unbinds `name{n}` in one patch. */
    toggle: () => void;
};

/**
 * The binding of one detail field of the selected row.
 *
 * @param fieldProps The wrapper's custom-field props.
 * @param definition The per-state field definition.
 * @param name The indexed name `name{n}` of the selected row; `null` without a row.
 * @returns See {@link StateFieldBinding}; bindings are read from the stored widgets — under
 *   multi-selection vis-2's `commonValues` hold `bindings: null` (`useStateEditor`).
 */
export const useStateFieldBinding = (
    fieldProps: Pick<StateEditorFieldProps, 'spec' | 'data' | 'props' | 'onDataChange'>,
    definition: RxWidgetInfoAttributesField,
    name: string | null,
): StateFieldBinding => {
    const { spec, data, props, onDataChange } = fieldProps;
    const datas = selectedWidgetDatas({ data, props });
    const bound = name !== null && stateFieldBound(datas, name);
    const bindingPatch = name === null ? null : stateFieldBindingPatch(datas, name);
    const patch = bindingPatch && { ...bindingPatch, ...stateRowConversion(datas, spec.config) };
    // No useCallback: the patch is a new object on every render, and the switch is no memo.
    const toggle = (): void => {
        if (patch) {
            onDataChange(patch);
        }
    };

    return {
        shown: name !== null && (bound || stateFieldBindable(definition)),
        bound,
        canToggle: patch !== null,
        toggle,
    };
};

/**
 * The field vis-2's `Editor` renders for a bound attribute: a plain text field.
 *
 * @param field The field of the selected row (`name{n}`).
 * @returns A `text` field of the same name — label, `onChange` and the rest of the definition
 *   do not apply to the binding text.
 */
export const stateBindingTextField = (field: RxWidgetInfoAttributesField): RxWidgetInfoAttributesField =>
    ({ name: field.name, type: 'text' }) as RxWidgetInfoAttributesField;

/** Props of {@link StateBindingSwitch}. */
export type StateBindingSwitchProps = Pick<StateFieldBinding, 'bound' | 'canToggle' | 'toggle'>;

/**
 * The switch itself.
 *
 * @param props See {@link StateBindingSwitchProps}.
 * @param props.bound The field is bound (LinkOff) or not (Link).
 * @param props.canToggle Otherwise disabled, its tooltip says why.
 * @param props.toggle Binds or unbinds.
 * @returns The 16-px icon button with its tooltip; the span keeps the tooltip on a disabled button.
 */
function StateBindingSwitch({ bound, canToggle, toggle }: StateBindingSwitchProps): React.JSX.Element {
    const label = bound ? translate('state_editor_binding_off') : translate('state_editor_binding_on');
    return (
        <Tooltip
            title={canToggle ? label : translate('state_editor_binding_differs')}
            slotProps={{ popper: { sx: { pointerEvents: 'none' } } }}
        >
            <Box
                component="span"
                sx={{ display: 'inline-flex', marginRight: '3px', flex: '0 0 auto' }}
            >
                <IconButton
                    data-binding-switch
                    aria-label={label}
                    aria-pressed={bound}
                    disabled={!canToggle}
                    onClick={toggle}
                    sx={{ p: 0, color: 'inherit' }}
                >
                    {bound ? <LinkOffIcon sx={BIND_ICON_SIZE} /> : <LinkIcon sx={BIND_ICON_SIZE} />}
                </IconButton>
            </Box>
        </Tooltip>
    );
}

export default StateBindingSwitch;
