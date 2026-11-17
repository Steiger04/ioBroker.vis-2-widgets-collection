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
 *   Rahmenvorgabe) while unset, and × while an own value is stored. A drag shows every move at
 *   once and reports the latest value 150 ms after the first unreported move, and at once on
 *   release (configurator-design: slider moves debounce), so a drag does not write the project
 *   on every step.
 *
 * "As theme" and × report `null`, which vis-2 turns into deleting the key in every selected widget;
 * a value is reported for every selected widget at once. vis-2 hands a custom field the first
 * selected widget's data (`commonValues`, order dependent) and no `isDifferent`, so the adapter reads
 * each selected widget's own value from the project in its props (`context.views`) and shows a mixed
 * state where they differ — inheriting against an own value included. vis-2 writes the project for
 * every patch of a custom field without comparing, so a choice that changes nothing reports nothing.
 * Each selected widget is read through lib/widgetFrame (`storedFrameSetting`), as the widget renders
 * it: an own value counts by the setting's Rückfall-Regel, a value the widget cannot use reads as
 * inheriting.
 *
 * The row renders under the vis-2 HOST theme, in the look of vis-2's own select and slider rows: the
 * attribute panel is a vis-2 surface.
 */

import CloseIcon from '@mui/icons-material/Close';
import { Box, IconButton, Input, MenuItem, Select, Slider, ThemeProvider, Typography } from '@mui/material';
import { useCallback, useEffect, useRef, useState } from 'react';
import type React from 'react';
import type { RxWidgetInfoCustomComponentProperties, VisTheme, WidgetData } from '@iobroker/types-vis-2';
import useCollectionTheme from '../hooks/useCollectionTheme';
import optionalNumber from '../lib/helper/optionalNumber';
import { translate } from '../lib/translate';
import {
    snapToSetting,
    storedFrameSetting,
    WIDGET_FRAME_SETTINGS,
    widgetFramePresetsOf,
    type NumberFrameSetting,
    type WidgetFrameKey,
    type WidgetFrameSetting,
} from '../lib/widgetFrame';

/** Props for {@link WidgetFrameField} — the vis-2 custom-field contract plus the setting. */
export interface WidgetFrameFieldProps {
    /** The frame setting the field stores; also the field's name (`createWidgetFrameField`). */
    setting: WidgetFrameKey;
    /** Current editor data map: the first selected widget's, under multi-selection vis-2's `commonValues`. */
    data: WidgetData;
    /** Receives one-field patches (`{ [setting]: value | null }`). */
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

/** What the selected widgets hold, read through each widget's own value. */
function selectionOf<V>(owns: readonly (V | undefined)[]): FrameSelection<V> {
    const [first] = owns;
    if (owns.some(one => one !== first)) {
        return { kind: 'mixed' };
    }
    return first === undefined ? { kind: 'inherit' } : { kind: 'own', value: first };
}

/** How long a slider move waits for the next before it is reported (the Farbwähler's commit delay). */
const MOVE_REPORT_MS = 150;

/**
 * Reports slider moves delayed: the latest move 150 ms after the first unreported one — not
 * restarted, so a long drag reports at least every 150 ms —, a value at once through `now`, and a
 * move still waiting on unmount.
 *
 * @param report - Receives a value to store.
 */
function useDelayedReport(report: (value: number) => void): {
    move: (value: number) => void;
    now: (value: number) => void;
} {
    const reportRef = useRef(report);
    useEffect(() => {
        reportRef.current = report;
    });
    const pendingRef = useRef<{ timer: ReturnType<typeof setTimeout>; value: number } | null>(null);

    /** Drops the waiting move and reports `value`. */
    const now = useCallback((value: number): void => {
        if (pendingRef.current !== null) {
            clearTimeout(pendingRef.current.timer);
            pendingRef.current = null;
        }
        reportRef.current(value);
    }, []);

    const move = useCallback(
        (value: number): void => {
            if (pendingRef.current !== null) {
                pendingRef.current.value = value;
                return;
            }
            const timer = setTimeout(() => {
                const waiting = pendingRef.current;
                if (waiting !== null) {
                    now(waiting.value);
                }
            }, MOVE_REPORT_MS);
            pendingRef.current = { value, timer };
        },
        [now],
    );

    useEffect(
        () => () => {
            if (pendingRef.current !== null) {
                now(pendingRef.current.value);
            }
        },
        [now],
    );

    return { move, now };
}

/** The values of the boolean choice. */
type BooleanChoice = 'inherit' | 'on' | 'off' | 'mixed';

/**
 * Renders a frame setting: the choice of a boolean, the slider of a number.
 *
 * @param props - See {@link WidgetFrameFieldProps}.
 * @param props.setting - The frame setting.
 * @param props.data - Current editor data map.
 * @param props.onDataChange - Receives one-field patches.
 * @param props.props - vis-2 editor context.
 * @returns The field row under the vis-2 host theme.
 */
function WidgetFrameField({ setting, data, onDataChange, props }: WidgetFrameFieldProps): React.JSX.Element {
    const frameSetting: WidgetFrameSetting = WIDGET_FRAME_SETTINGS[setting];
    const collectionTheme = useCollectionTheme(props.context.socket, props.context.theme) as VisTheme;
    const presets = widgetFramePresetsOf(collectionTheme);

    const datas = selectedWidgetDatas(data, props);
    const stored = datas.map(one => one[setting] as unknown);
    // Each selected widget read as it renders: its own value, else what it inherits.
    const readings = datas.map(one => storedFrameSetting(one, setting, presets));
    // What a widget without an own value renders: the Rahmenvorgabe, else the standard.
    const { inherited } = readings[0];
    const selection = selectionOf(readings.map(reading => reading.own));

    /** Reports `value` for every selected widget, unless every one stores it already. */
    const report = (value: boolean | number | null): void => {
        if (value === null ? stored.every(one => one === undefined) : stored.every(one => one === value)) {
            return;
        }
        onDataChange({ [setting]: value });
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
                    setting={frameSetting}
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
 * @param props.setting - The number setting: its bounds and step.
 * @param props.onChange - Receives a value to store, or `null` (×).
 * @returns The slider row.
 */
function NumberFrameSlider({
    selection,
    inherited,
    fromTheme,
    setting,
    onChange,
}: {
    selection: FrameSelection<number>;
    inherited: number;
    fromTheme: boolean;
    setting: NumberFrameSetting;
    onChange: (value: number | null) => void;
}): React.JSX.Element {
    // The typed text while the number field has focus; null shows the stored value.
    const [draft, setDraft] = useState<string | null>(null);
    // The slider position while a drag has moves not reported yet; null shows the stored value.
    const [moving, setMoving] = useState<number | null>(null);
    const delayed = useDelayedReport(onChange);
    const own = selection.kind === 'own' ? selection.value : undefined;
    const shown = moving ?? own;
    const { min, max, step } = setting;
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
                    value={shown ?? inherited}
                    min={min}
                    max={max}
                    step={step}
                    onChange={(_event, value) => {
                        setMoving(value);
                        delayed.move(value);
                    }}
                    onChangeCommitted={(_event, value) => {
                        setMoving(null);
                        delayed.now(value);
                    }}
                    // An inheriting slider shows where the widget is, quieter than an own value.
                    sx={{ flex: 1, minWidth: 0, mr: 1, opacity: shown === undefined ? 0.6 : 1 }}
                />
                <Input
                    size="small"
                    value={draft ?? (shown === undefined ? '' : String(shown))}
                    placeholder={selection.kind === 'inherit' ? String(inherited) : undefined}
                    onFocus={() => setDraft(own === undefined ? '' : String(own))}
                    onBlur={() => setDraft(null)}
                    onChange={event => {
                        setDraft(event.target.value);
                        const typed = optionalNumber(event.target.value);
                        if (typed !== undefined) {
                            // On the slider's step: a shadow of 2.5 would draw none.
                            onChange(snapToSetting(setting, typed));
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
