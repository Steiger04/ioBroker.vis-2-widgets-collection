/**
 * The value cell of the valve list (`ventilAnzahl`): one native id field per valve with a remove
 * button, then the add button (`lib/heating/valveListFields`).
 *
 * @module lib/heating/ValveList
 * @remarks
 * Each valve's id field is rendered through vis-2's `Editor`, so it looks and picks like every id
 * field of the panel; vis-2 writes the id into all selected widgets and runs the field's own
 * `onChange` (the shared pick). `Editor` is a new function on every vis-2 render, so it is called,
 * not mounted (see `components/StateEditor/StateDetailField`), in a component keyed by the valve's
 * name.
 *
 * The buttons copy vis-2's group-head buttons (24 × 24 small `IconButton` with a tooltip, as the
 * Zustandseditor's toolbar). One patch goes into every selected widget, so add and remove are
 * locked while the selected widgets hold different valve lists; an InfoBox says why.
 */
import { Box, IconButton, Tooltip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import type React from 'react';

import { InfoBox } from '../../components/controls';
import { readSelectedWidgetDatas } from '../../components/selectedWidgets';
import { vis2EditorOf } from '../../components/StateEditor/StateDetailField';
import { translate } from '../translate';
import { VALVE_LIST } from './meaningCatalog';
import { addValvePatch, removeValvePatch, valveCountOf, valveIdField } from './valveListShape';

import type { Vis2Editor, Vis2EditorProps } from '../../components/StateEditor/StateDetailField';
import type { RxWidgetInfoCustomComponentProperties, WidgetData } from '@iobroker/types-vis-2';

/** vis-2's group-head button box (`styles.groupButton`). */
const GROUP_BUTTON_SIZE = { width: 24, height: 24 } as const;

/** Props of {@link ValveList}: what vis-2 hands the custom field. */
export type ValveListProps = {
    /** The data vis-2 hands the field (`commonValues` under a multi-selection). */
    data: WidgetData;
    /** Writes a patch into every selected widget (`null` deletes a key). */
    onDataChange: (patch: WidgetData) => void;
    /** The vis-2 editor context. */
    props: RxWidgetInfoCustomComponentProperties;
};

/**
 * Calls vis-2's Editor (called, not mounted).
 *
 * @param props The Editor and what it renders.
 * @param props.Editor vis-2's Editor of the current render.
 * @returns The vis-2 field element.
 */
function EditorSlot({ Editor, ...editorProps }: Vis2EditorProps & { Editor: Vis2Editor }): React.ReactNode {
    return Editor(editorProps);
}

/**
 * One button as vis-2 draws a group-head button.
 *
 * @param props The button props.
 * @param props.label The translated tooltip and accessible name.
 * @param props.disabled The action is locked.
 * @param props.onClick Runs the action.
 * @param props.children The icon.
 * @returns The button with its tooltip; the span keeps the tooltip on a disabled button.
 */
function ListButton({
    label,
    disabled,
    onClick,
    children,
}: {
    label: string;
    disabled: boolean;
    onClick: () => void;
    children: React.ReactNode;
}): React.JSX.Element {
    return (
        <Tooltip
            title={label}
            describeChild
            slotProps={{ popper: { sx: { pointerEvents: 'none' } } }}
        >
            <Box
                component="span"
                sx={{ display: 'inline-flex' }}
            >
                <IconButton
                    aria-label={label}
                    size="small"
                    sx={GROUP_BUTTON_SIZE}
                    disabled={disabled}
                    onClick={onClick}
                >
                    {children}
                </IconButton>
            </Box>
        </Tooltip>
    );
}

/** The valve list of one widget as a comparable text: count and ids. */
const valveListSignature = (data: WidgetData): string => {
    const count = valveCountOf(data);
    return JSON.stringify(Array.from({ length: count }, (_, i) => data[`${VALVE_LIST.field}${i + 1}`] ?? ''));
};

/**
 * Renders the valve list.
 *
 * @param fieldProps See {@link ValveListProps}.
 * @param fieldProps.data The data vis-2 hands the field.
 * @param fieldProps.onDataChange Writes a patch into every selected widget.
 * @param fieldProps.props The vis-2 editor context.
 * @returns The valve rows and the add button.
 */
function ValveList({ data, onDataChange, props }: ValveListProps): React.JSX.Element {
    const widgets = readSelectedWidgetDatas(data, props);
    const first = widgets[0];
    const count = valveCountOf(first);
    const differs = new Set(widgets.map(valveListSignature)).size > 1;
    const Editor = vis2EditorOf(props);
    const fields = Array.from({ length: count }, (_, i) => valveIdField(i + 1));
    const removeLabel = translate('heating_ventil_entfernen');

    return (
        <Box data-valve-list>
            {fields.map((field, i) => (
                <Box
                    key={field.name}
                    sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
                >
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                        {Editor && (
                            <EditorSlot
                                Editor={Editor}
                                field={field}
                            />
                        )}
                    </Box>
                    <ListButton
                        label={removeLabel}
                        disabled={differs}
                        onClick={() => onDataChange(removeValvePatch(first, i + 1))}
                    >
                        <DeleteIcon />
                    </ListButton>
                </Box>
            ))}
            <ListButton
                label={translate('heating_ventil_hinzufuegen')}
                disabled={differs || count >= VALVE_LIST.max}
                onClick={() => onDataChange(addValvePatch(first))}
            >
                <AddIcon />
            </ListButton>
            {differs && <InfoBox text={translate('heating_ventile_verschieden')} />}
        </Box>
    );
}

export default ValveList;
