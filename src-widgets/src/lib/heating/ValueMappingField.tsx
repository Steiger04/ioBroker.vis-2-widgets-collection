/**
 * The value cell of a Bedeutung's Wertezuordnung in the attribute panel (ADR-0120 „Panel“):
 * one row per neutral value, the switch „Wert umkehren“ for a boolean data point, one row for unit
 * or time format, and an InfoBox while the Bedeutung has no mapping (`lib/heating/mappingField`).
 *
 * @module lib/heating/ValueMappingField
 * @remarks
 * A neutral value's row is a multiple choice with chips: the device values in stored order (the
 * first is the write value), „nicht vorhanden“ (an empty list) first among the options. With a
 * value list (`commonStates` of the stored object) the row chooses from it, without one it takes
 * free input; a value is stored in the data point's type (`convertToOidType`, the write chain's
 * conversion). Taking the last chip out takes the neutral value out („noch nicht zugeordnet“).
 *
 * The rows show the effective mapping — what the widget reads: the stored one, else for a bound
 * Bedeutung without its stored object (inserted by the AI assistant) the one the pick of that field
 * derives (the Lese-Naht, read through the same hook as the widget, `hooks/usePickedWidgetData`;
 * its derived object supplies the value list). Showing it writes nothing; the first change stores
 * the whole effective mapping.
 *
 * Every change reports the whole `<bedeutung>Zuordnung` in one patch (`null` for an emptied one):
 * vis-2 keeps a missing key's old value. Under a multi-selection the field reads the first selected
 * widget, as the other custom fields do, and its patch goes into every selected widget.
 */
import { Autocomplete, Box, FormControlLabel, Switch, TextField } from '@mui/material';
import { useMemo, useState } from 'react';
import type React from 'react';

import { InfoBox } from '../../components/controls';
import { readSelectedWidgetDatas } from '../../components/selectedWidgets';
import usePickedWidgetData from '../../hooks/usePickedWidgetData';
import { convertToOidType } from '../../hooks/useValueState';
import { NO_FIELD_DEFAULTS } from '../fieldDefaults';
import { translate } from '../translate';
import { MEANINGS, meaningKeys } from './meaningCatalog';
import { meaningPickField } from './meaningPick';
import {
    booleanMapping,
    isInvertedMapping,
    NAMED_TIME_FORMATS,
    readValueMapping,
    UNITS,
    valueMappingPatch,
    withAddition,
    withNeutralValues,
} from './valueMapping';

import type { MappingShape, MeaningField, NeutralKey } from './meaningCatalog';
import type { DeviceValue, MappingAdditionValue, ValueMapping } from './valueMapping';
import type { OidType } from '../../types';
import type { WidgetDataReading } from '../pickedWidgetData';
import type { RxWidgetInfoCustomComponentProperties, WidgetData } from '@iobroker/types-vis-2';

/** The stored object of a Bedeutung's pick, as far as the field reads it. */
type StoredObject = { type?: string; commonStates?: unknown } | null | undefined;

/** One option of a neutral value's row: „nicht vorhanden“ or a device value. */
type ValueOption =
    { readonly none: true; readonly label: string } | { readonly value: DeviceValue; readonly label: string };

/** Props of {@link ValueMappingField}: the Bedeutung and what vis-2 hands the custom field. */
export type ValueMappingFieldProps = {
    /** The Bedeutung. */
    field: MeaningField;
    /** The entry number of a list entry (ADR-0121); none for a single-room type. */
    entry?: number;
    /** The data vis-2 hands the field (`commonValues` under a multi-selection). */
    data: WidgetData;
    /** Writes a patch into every selected widget (`null` deletes a key). */
    onDataChange: (patch: WidgetData) => void;
    /** The vis-2 editor context. */
    props: RxWidgetInfoCustomComponentProperties;
};

/** The data point's type as the write chain converts to it; none without a stored object. */
const oidTypeOf = (object: StoredObject): OidType | undefined =>
    typeof object?.type === 'string' ? (object.type as OidType) : undefined;

/**
 * A text in the data point's type: the write chain's conversion.
 *
 * @returns The value; `undefined` for a text that is no value of the type (no number).
 */
const asDeviceValue = (text: string, type: OidType | undefined): DeviceValue | undefined =>
    convertToOidType(text, type);

/**
 * The device values a row chooses from: the stored object's value list in the data point's type, for a
 * boolean data point without one `true` and `false`.
 *
 * @returns The options; `undefined` for free input.
 */
const deviceOptionsOf = (object: StoredObject): ValueOption[] | undefined => {
    const type = oidTypeOf(object);
    const states = object?.commonStates;
    if (states !== null && typeof states === 'object' && !Array.isArray(states) && Object.keys(states).length > 0) {
        return Object.entries(states as Record<string, unknown>).flatMap(([key, label]) => {
            const value = asDeviceValue(key, type) ?? key;
            return [{ value, label: typeof label === 'string' && label ? label : key }];
        });
    }
    return type === 'boolean' ? [true, false].map(value => ({ value, label: String(value) })) : undefined;
};

/**
 * Whether an option and a chosen value are the same (type included); typed free input arrives as
 * a text before the row converts it.
 */
const sameValue = (a: ValueOption | string, b: ValueOption | string): boolean =>
    typeof a === 'string' || typeof b === 'string'
        ? a === b
        : 'none' in a
          ? 'none' in b
          : !('none' in b) && a.value === b.value;

/** The props a row hands its control. */
type RowProps = {
    shape: MappingShape;
    mapping: ValueMapping | undefined;
    object: StoredObject;
    commit: (next: ValueMapping) => void;
};

/**
 * One neutral value's row.
 *
 * @param props - The row.
 * @param props.neutral - Its neutral value.
 * @param props.mapping - The current mapping.
 * @param props.object - The stored object of the pick.
 * @param props.commit - Stores a new mapping.
 * @returns The labelled multiple choice.
 */
function NeutralRow({ neutral, mapping, object, commit }: RowProps & { neutral: NeutralKey }): React.JSX.Element {
    const type = oidTypeOf(object);
    const deviceOptions = deviceOptionsOf(object);
    const none: ValueOption = { none: true, label: translate('heating_zuordnung_nicht_vorhanden') };
    const stored = mapping?.[neutral];
    const selected: ValueOption[] =
        stored === undefined
            ? []
            : stored.length === 0
              ? [none]
              : stored.map(
                    value =>
                        deviceOptions?.find(option => !('none' in option) && option.value === value) ?? {
                            value,
                            label: String(value),
                        },
                );
    const [input, setInput] = useState('');

    /** Stores the row's device values; `undefined` takes the neutral value out. */
    const store = (values: readonly DeviceValue[] | undefined): void => {
        if (JSON.stringify(values) !== JSON.stringify(stored)) {
            commit(withNeutralValues(mapping, neutral, values));
        }
    };

    /** Adds a typed device value (free input): Enter or leaving the field. */
    const addTyped = (text: string): void => {
        const value = text.trim() ? asDeviceValue(text.trim(), type) : undefined;
        setInput('');
        if (value !== undefined && !(stored ?? []).includes(value)) {
            store([...(stored ?? []), value]);
        }
    };

    const onChange = (
        next: readonly (ValueOption | string)[],
        reason: string,
        option: ValueOption | string | undefined,
    ): void => {
        if (reason === 'createOption' && typeof option === 'string') {
            addTyped(option);
            return;
        }
        if (reason === 'selectOption' && typeof option === 'object' && 'none' in option) {
            store([]);
            return;
        }
        const values = next.flatMap(one => (typeof one === 'string' ? [] : 'none' in one ? [] : [one.value]));
        store(values.length > 0 ? values : undefined);
    };

    return (
        <Box data-neutral-key={neutral}>
            <Autocomplete
                multiple
                freeSolo={deviceOptions === undefined}
                size="small"
                options={[none, ...(deviceOptions ?? [])]}
                value={selected}
                inputValue={input}
                // Every reason: a chosen option resets the filter text, typed text stays until it is taken.
                onInputChange={(_event, text) => setInput(text)}
                filterSelectedOptions
                getOptionLabel={option => (typeof option === 'string' ? option : option.label)}
                isOptionEqualToValue={sameValue}
                onChange={(_event, next, reason, details) => onChange(next, reason, details?.option)}
                slotProps={{ chip: { size: 'small' } }}
                renderInput={params => (
                    <TextField
                        {...params}
                        variant="standard"
                        label={translate(`heating_neutral_${neutral}`)}
                        onBlur={() => deviceOptions === undefined && addTyped(input)}
                    />
                )}
            />
        </Box>
    );
}

/**
 * The switch „Wert umkehren“ of a boolean data point.
 *
 * @param props - The row.
 * @param props.shape - The Bedeutung's mapping shape (with its `trueKey`).
 * @param props.mapping - The current mapping.
 * @param props.commit - Stores a new mapping.
 * @returns The labelled switch.
 */
function InvertRow({ shape, mapping, commit }: RowProps): React.JSX.Element {
    return (
        <Box data-invert-value>
            <FormControlLabel
                control={
                    <Switch
                        size="small"
                        checked={isInvertedMapping(mapping, shape)}
                        onChange={event => commit(booleanMapping(shape, event.target.checked))}
                    />
                }
                label={translate('heating_wert_umkehren')}
            />
        </Box>
    );
}

/** One option of the unit / time format row. */
type AdditionOption = { readonly addition: NonNullable<MappingAdditionValue>; readonly label: string };

/** The named options a Bedeutung's addition row offers: units, then named time formats. */
const additionOptionsOf = (shape: MappingShape): AdditionOption[] => [
    ...(shape.additions.includes('einheit')
        ? UNITS.map(unit => ({ addition: { einheit: unit }, label: translate(`heating_einheit_${unit}`) }))
        : []),
    ...(shape.additions.includes('zeitformat')
        ? NAMED_TIME_FORMATS.map(format => ({
              addition: { zeitformat: format },
              label: translate(`heating_zeitformat_${format}`),
          }))
        : []),
];

/** The label key of the addition row: unit, time format, or either. */
const additionLabelOf = (shape: MappingShape): string =>
    shape.additions.length > 1
        ? 'heating_zuordnung_einheit_zeitformat'
        : shape.additions[0] === 'einheit'
          ? 'heating_zuordnung_einheit'
          : 'heating_zuordnung_zeitformat';

/**
 * The row of unit or time format: a choice of the named ones, a pattern as free input where the
 * Bedeutung takes a time format.
 *
 * @param props - The row.
 * @param props.shape - The Bedeutung's mapping shape.
 * @param props.mapping - The current mapping.
 * @param props.commit - Stores a new mapping.
 * @returns The labelled choice.
 */
function AdditionRow({ shape, mapping, commit }: RowProps): React.JSX.Element {
    const options = additionOptionsOf(shape);
    const takesPattern = shape.additions.includes('zeitformat');
    const current: AdditionOption | string | null =
        options.find(
            option =>
                ('einheit' in option.addition && option.addition.einheit === mapping?.einheit) ||
                ('zeitformat' in option.addition && option.addition.zeitformat === mapping?.zeitformat),
        ) ??
        mapping?.zeitformat ??
        null;
    const shown = current === null ? '' : typeof current === 'string' ? current : current.label;
    const [input, setInput] = useState<string | undefined>(undefined);

    /** Stores a new addition unless it is the current one. */
    const store = (addition: MappingAdditionValue): void => {
        setInput(undefined);
        const next = withAddition(mapping, addition);
        if (next.einheit !== mapping?.einheit || next.zeitformat !== mapping?.zeitformat) {
            commit(next);
        }
    };

    /** Stores a typed pattern: Enter or leaving the field. */
    const storeTyped = (text: string): void => {
        const pattern = text.trim();
        const named = options.find(option => option.label === pattern);
        store(named ? named.addition : pattern ? { zeitformat: pattern } : undefined);
    };

    return (
        <Box data-mapping-addition>
            <Autocomplete
                freeSolo={takesPattern}
                size="small"
                options={options}
                value={current}
                inputValue={input ?? shown}
                onInputChange={(_event, text, reason) => {
                    if (reason === 'input') {
                        setInput(text);
                    }
                }}
                getOptionLabel={option => (typeof option === 'string' ? option : option.label)}
                isOptionEqualToValue={(option, value) => typeof value !== 'string' && option.label === value.label}
                onChange={(_event, next) =>
                    next === null
                        ? store(undefined)
                        : typeof next === 'string'
                          ? storeTyped(next)
                          : store(next.addition)
                }
                renderInput={params => (
                    <TextField
                        {...params}
                        variant="standard"
                        label={translate(additionLabelOf(shape))}
                        onBlur={() => takesPattern && input !== undefined && storeTyped(input)}
                    />
                )}
            />
        </Box>
    );
}

/**
 * Renders a Bedeutung's Wertezuordnung.
 *
 * @param fieldProps - See {@link ValueMappingFieldProps}.
 * @param fieldProps.field - The Bedeutung.
 * @param fieldProps.entry - The entry number; none for the unnumbered case.
 * @param fieldProps.data - The data vis-2 hands the field.
 * @param fieldProps.onDataChange - Writes a patch into every selected widget.
 * @param fieldProps.props - The vis-2 editor context.
 * @returns The rows of the mapping and, while it has none, the InfoBox.
 */
function ValueMappingField({
    field,
    entry,
    data,
    onDataChange,
    props,
}: ValueMappingFieldProps): React.JSX.Element | null {
    const shape = MEANINGS[field].mapping;
    const keys = meaningKeys(field, entry);
    const widget = readSelectedWidgetDatas(data, props)[0];
    // The Lese-Naht of this one field, as the widget runs it: no defaults, only its own pick.
    const reading = useMemo<WidgetDataReading>(
        () => ({ oidPickFields: [meaningPickField(field, entry)], defaults: NO_FIELD_DEFAULTS }),
        [field, entry],
    );
    const effective = usePickedWidgetData(widget, reading, props.context.socket);
    if (!shape) {
        return null;
    }
    const object = effective[keys.object] as StoredObject;
    const mapping = readValueMapping(effective[keys.mapping], shape);
    const rowProps: RowProps = {
        shape,
        mapping,
        object,
        commit: next => onDataChange(valueMappingPatch(keys.mapping, next)),
    };
    const switchable = shape.trueKey !== undefined && object?.type === 'boolean';

    return (
        <Box
            data-value-mapping={keys.field}
            sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}
        >
            {switchable ? (
                <InvertRow {...rowProps} />
            ) : (
                shape.keys.map(neutral => (
                    <NeutralRow
                        key={neutral}
                        neutral={neutral}
                        {...rowProps}
                    />
                ))
            )}
            {shape.additions.length > 0 && <AdditionRow {...rowProps} />}
            {!mapping && <InfoBox text={translate('heating_zuordnung_fehlt')} />}
        </Box>
    );
}

export default ValueMappingField;
