/**
 * Erb-Adapter — renders a frame setting of the Widget-Rahmen (`createWidgetFrameField`) in the
 * vis-2 attribute panel (ADR-0117).
 *
 * @module components/WidgetFrameField
 * @remarks
 * A frame setting without an own value erbt: the widget renders the Rahmenvorgabe of the collection
 * theme, else the built-in standard (`lib/widgetFrame`). The adapter names that state and the value
 * it yields — read through the same theme hook as the Vertrags-Adapter of the colour fields
 * (`ContractColorField`), so it shows what the widget renders:
 * - a boolean as a choice "As theme (on|off)" / "On" / "Off" — "On" and "Off" store the value even
 *   where it equals the inherited one;
 * - a number as a slider with its number, "inherits · Theme: n" (or "Standard: n" without a
 *   Rahmenvorgabe) while unset, and × while an own value is stored.
 *
 * "As theme" and × report `null`, which vis-2 turns into deleting the key in every selected widget;
 * a value is reported for every selected widget at once. vis-2 hands a custom field the first
 * selected widget's data (`commonValues`, order dependent) and no `isDifferent`, so the adapter reads
 * each selected widget's own value from the project in its props (`context.views`) and shows a mixed
 * state where they differ — inheriting against an own value included. vis-2 writes the project for
 * every patch of a custom field without comparing, so a choice that changes nothing reports nothing.
 * An own value counts by the field's Rückfall-Regel (`lib/usableWidgetData`): a value the widget
 * cannot use reads as inheriting, as the widget reads it.
 *
 * The row renders under the vis-2 HOST theme, in the look of vis-2's own select and slider rows: the
 * attribute panel is a vis-2 surface.
 */

import CloseIcon from '@mui/icons-material/Close';
import { Box, IconButton, Input, MenuItem, Select, Slider, ThemeProvider, Typography } from '@mui/material';
import { useMemo, useState } from 'react';
import type React from 'react';
import type { RxWidgetInfoCustomComponentProperties, VisTheme, WidgetData } from '@iobroker/types-vis-2';
import useCollectionTheme from '../hooks/useCollectionTheme';
import optionalNumber from '../lib/helper/optionalNumber';
import { translate } from '../lib/translate';
import { fieldRulesOf, usableWidgetData } from '../lib/usableWidgetData';
import {
    snapToSetting,
    storedFrameValue,
    WIDGET_FRAME_SETTINGS,
    widgetFramePresetsOf,
    type WidgetFrameKey,
    type WidgetFrameSetting,
} from '../lib/widgetFrame';
import type { ExtendedField } from '../types/field-definitions/extended-field';

/** Props for {@link WidgetFrameField} — the vis-2 custom-field contract plus the setting. */
export interface WidgetFrameFieldProps {
    /** The frame setting the field stores (its name may carry a group suffix). */
    setting: WidgetFrameKey;
    /** Field definition (name, label, storedValue). */
    field: ExtendedField;
    /** Current editor data map: the first selected widget's, under multi-selection vis-2's `commonValues`. */
    data: WidgetData;
    /** Receives one-field patches (`{ [field.name]: value | null }`). */
    onDataChange: (patch: WidgetData) => void;
    /** vis-2 editor context (socket, theme, views, selected widgets, …). */
    props: RxWidgetInfoCustomComponentProperties;
}

/** What the selected widgets hold of a frame setting. */
type FrameSelection<V> =
    /** No selected widget has an own value: all erben. */
    | { kind: 'inherit' }
    /** Every selected widget has the same own value. */
    | { kind: 'own'; value: V }
    /** The selected widgets differ, inheriting against an own value included. */
    | { kind: 'mixed' };

/** The stored data of every selected widget, else the data vis-2 handed the field. */
function selectedWidgetDatas(data: WidgetData, props: RxWidgetInfoCustomComponentProperties): WidgetData[] {
    const views = props.context.views as unknown as
        Record<string, { widgets?: Record<string, { data?: WidgetData }> }> | undefined;
    const ids = (props.selectedWidgets?.length ? props.selectedWidgets : [props.selectedWidget]) as string[];
    const datas = ids.map(id => (id ? views?.[props.selectedView]?.widgets?.[id]?.data : undefined));
    return datas.length > 0 && datas.every(one => one !== undefined) ? datas : [data];
}

/** A widget's own value as the widget reads it, `undefined` where it erbt (unset, `null`, or unusable). */
function ownValueOf(setting: WidgetFrameSetting, read: unknown): boolean | number | undefined {
    if (read === undefined || read === null) {
        return undefined;
    }
    return setting.kind === 'number' ? optionalNumber(read) : (read as boolean);
}

/** What the selected widgets hold, read through each widget's own value. */
function selectionOf<V>(owns: readonly (V | undefined)[]): FrameSelection<V> {
    const [first] = owns;
    if (owns.some(one => one !== first)) {
        return { kind: 'mixed' };
    }
    return first === undefined ? { kind: 'inherit' } : { kind: 'own', value: first };
}

/** The values of the boolean choice. */
type BooleanChoice = 'inherit' | 'on' | 'off' | 'mixed';

/**
 * Renders a frame setting: the choice of a boolean, the slider of a number.
 *
 * @param props - See {@link WidgetFrameFieldProps}.
 * @param props.setting - The frame setting.
 * @param props.field - Field definition.
 * @param props.data - Current editor data map.
 * @param props.onDataChange - Receives one-field patches.
 * @param props.props - vis-2 editor context.
 * @returns The field row under the vis-2 host theme.
 */
function WidgetFrameField({ setting, field, data, onDataChange, props }: WidgetFrameFieldProps): React.JSX.Element {
    const name = field.name!;
    const frameSetting: WidgetFrameSetting = WIDGET_FRAME_SETTINGS[setting];
    const collectionTheme = useCollectionTheme(props.context.socket, props.context.theme) as VisTheme;
    // The field's Rückfall-Regel: the reading the widget gives its stored value.
    const rules = useMemo(() => fieldRulesOf([{ name: 'frame', fields: [field] }]), [field]);
    // What a widget without an own value renders: the Rahmenvorgabe, else the standard.
    const presets = widgetFramePresetsOf(collectionTheme);
    const inherited = storedFrameValue({}, setting, rules, presets);

    const datas = selectedWidgetDatas(data, props);
    const stored = datas.map(one => one[name] as unknown);
    const selection = selectionOf(
        datas.map(one => ownValueOf(frameSetting, usableWidgetData<WidgetData>(one, rules)[name])),
    );

    /** Reports `value` for every selected widget, unless every one stores it already. */
    const report = (value: boolean | number | null): void => {
        if (value === null ? stored.every(one => one === undefined) : stored.every(one => one === value)) {
            return;
        }
        onDataChange({ [name]: value });
    };

    return (
        <ThemeProvider theme={props.context.theme}>
            {frameSetting.kind === 'boolean' ? (
                <BooleanFrameChoice
                    selection={selection as FrameSelection<boolean>}
                    inherited={inherited as boolean}
                    onChoose={choice => report(choice === 'inherit' ? null : choice === 'on')}
                />
            ) : (
                <NumberFrameSlider
                    selection={selection as FrameSelection<number>}
                    inherited={inherited as number}
                    fromTheme={presets[setting] !== undefined}
                    min={frameSetting.min}
                    max={frameSetting.max}
                    step={frameSetting.step}
                    onChange={report}
                />
            )}
        </ThemeProvider>
    );
}

/**
 * The choice of a boolean frame setting: "As theme (…)" / "On" / "Off", and "Mixed" while the
 * selected widgets differ.
 *
 * @param props - The choice props.
 * @param props.selection - What the selected widgets hold.
 * @param props.inherited - The value an inheriting widget renders.
 * @param props.onChoose - Receives the choice the user makes.
 * @returns The select.
 */
function BooleanFrameChoice({
    selection,
    inherited,
    onChoose,
}: {
    selection: FrameSelection<boolean>;
    inherited: boolean;
    onChoose: (choice: Exclude<BooleanChoice, 'mixed'>) => void;
}): React.JSX.Element {
    const value: BooleanChoice =
        selection.kind === 'own'
            ? selection.value
                ? 'on'
                : 'off'
            : selection.kind === 'inherit'
              ? 'inherit'
              : 'mixed';
    const options: [BooleanChoice, string][] = [
        ['inherit', translate(inherited ? 'frame_field_as_theme_on' : 'frame_field_as_theme_off')],
        ['on', translate('frame_field_on')],
        ['off', translate('frame_field_off')],
    ];
    return (
        <Select
            variant="standard"
            fullWidth
            value={value}
            onChange={event => {
                const choice = event.target.value;
                if (choice !== 'mixed') {
                    onChoose(choice);
                }
            }}
            sx={{ '& .MuiSelect-select': { p: 0, fontSize: '80%' } }}
        >
            {options.map(([option, label]) => (
                <MenuItem
                    key={option}
                    value={option}
                    dense
                >
                    {label}
                </MenuItem>
            ))}
            {/* Shown only as the current value: no choice sets "mixed". */}
            <MenuItem
                value="mixed"
                dense
                disabled
                sx={{ display: value === 'mixed' ? undefined : 'none' }}
            >
                {translate('frame_field_mixed')}
            </MenuItem>
        </Select>
    );
}

/**
 * The slider of a number frame setting with its number (the row of vis-2's own slider), a caption
 * while the setting erbt ("inherits · Theme: n" / "inherits · Standard: n") or the widgets differ
 * ("Mixed"), and × while an own value is stored.
 *
 * @param props - The slider props.
 * @param props.selection - What the selected widgets hold.
 * @param props.inherited - The value an inheriting widget renders.
 * @param props.fromTheme - Whether the inherited value is a Rahmenvorgabe (else the standard).
 * @param props.min - Lower bound.
 * @param props.max - Upper bound.
 * @param props.step - Slider step.
 * @param props.onChange - Receives a value to store, or `null` (×).
 * @returns The slider row.
 */
function NumberFrameSlider({
    selection,
    inherited,
    fromTheme,
    min,
    max,
    step,
    onChange,
}: {
    selection: FrameSelection<number>;
    inherited: number;
    fromTheme: boolean;
    min: number;
    max: number;
    step: number;
    onChange: (value: number | null) => void;
}): React.JSX.Element {
    // The typed text while the number field has focus; null shows the stored value.
    const [draft, setDraft] = useState<string | null>(null);
    const own = selection.kind === 'own' ? selection.value : undefined;
    const caption =
        selection.kind === 'mixed'
            ? translate('frame_field_mixed')
            : selection.kind === 'inherit'
              ? translate(fromTheme ? 'frame_field_inherits_theme' : 'frame_field_inherits_standard', String(inherited))
              : null;
    const clearLabel = translate('frame_field_clear');

    return (
        <Box sx={{ width: '100%', minWidth: 0 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                {/* Space before the slider, as vis-2's own slider row keeps it off the label. */}
                <Box sx={{ width: 5, flexShrink: 0 }} />
                <Slider
                    size="small"
                    value={own ?? inherited}
                    min={min}
                    max={max}
                    step={step}
                    onChange={(_event, value) => onChange(value)}
                    // An inheriting slider shows where the widget is, quieter than an own value.
                    sx={{ flex: 1, minWidth: 0, mr: 1, opacity: own === undefined ? 0.6 : 1 }}
                />
                <Input
                    size="small"
                    value={draft ?? (own === undefined ? '' : String(own))}
                    placeholder={selection.kind === 'inherit' ? String(inherited) : undefined}
                    onFocus={() => setDraft(own === undefined ? '' : String(own))}
                    onBlur={() => setDraft(null)}
                    onChange={event => {
                        setDraft(event.target.value);
                        const typed = optionalNumber(event.target.value);
                        if (typed !== undefined) {
                            // On the slider's step: a shadow of 2.5 would draw none.
                            onChange(snapToSetting({ min, max, step }, typed));
                        }
                    }}
                    inputProps={{ type: 'number', step, min, max }}
                    sx={{ width: 50, flexShrink: 0, fontSize: '80%' }}
                />
                {selection.kind === 'inherit' ? null : (
                    <IconButton
                        size="small"
                        aria-label={clearLabel}
                        title={clearLabel}
                        onClick={() => onChange(null)}
                        sx={{ p: 0.25, ml: 0.5 }}
                    >
                        <CloseIcon sx={{ fontSize: '1rem' }} />
                    </IconButton>
                )}
            </Box>
            {caption === null ? null : (
                <Typography
                    data-frame-caption
                    variant="caption"
                    color="textSecondary"
                    sx={{ display: 'block', pl: '5px', lineHeight: 1.2 }}
                >
                    {caption}
                </Typography>
            )}
        </Box>
    );
}

export default WidgetFrameField;
