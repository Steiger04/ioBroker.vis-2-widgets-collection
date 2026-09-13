/**
 * The Zuordnung's column picker (ADR-0075 ticket 03) — a searchable MUI Autocomplete over the
 * schema's dot-path columns, each entry badged with its detected type.
 *
 * @module EchartsCollectionWidget/editor/ColumnAutocomplete
 * @remarks
 * No freeSolo (a column is picked, never typed — the paths are the analysis' vocabulary);
 * the type badge (`temp · Zahl`) makes the picker's answer to "what will this column give
 * me?" visible BEFORE the choice — and, since the zuordnung-redesign, AFTER it too: the
 * closed field carries the badge (plus the Zeitachse hint when `dateHint` selected a date
 * column) and a native title tooltip with the full path when it truncates. Shared by the X
 * column here and the series' yPath row (ticket 04). The empty option (`` = unset) is the
 * consumer's to label — the X picker says „(Zeilenindex)", a yPath row says its unset wording.
 */
import type { FC, ReactNode } from 'react';
import { Autocomplete, Box, Chip, TextField, Typography } from '@mui/material';

import Generic from '../../Generic';
import { FieldLabel } from '../../components/controls';
import type { DetectedType, JsonTableColumn } from '../../hooks/useJsonTableAnalysis';

/** Closed-state badge chips sit tight in the input row: reduced height, snug label padding. */
const CLOSED_BADGE_SX = {
    height: 20,
    '& .MuiChip-label': { px: 0.75, fontSize: '0.7rem' },
} as const;

/** Open-list badge chips: never squeezed by the path text next to them. */
const OPTION_BADGE_SX = { flexShrink: 0 } as const;

/**
 * The badge pair every column sight shares (zuordnung-redesign): the detected type chip, plus
 * the Zeitachse hint when the consumer asked for it AND the column is a date — held ONCE for
 * the open option list and the closed field alike.
 */
const columnBadges = (
    type: DetectedType | undefined,
    timeAxis: boolean,
    sx: typeof CLOSED_BADGE_SX | typeof OPTION_BADGE_SX,
): ReactNode =>
    !type ? null : (
        <>
            <Chip
                size="small"
                label={Generic.t(`echarts_col_type_${type}`)}
                sx={sx}
            />
            {timeAxis && (
                <Chip
                    size="small"
                    color="primary"
                    variant="outlined"
                    label={Generic.t('echarts_mapping_time_axis')}
                    sx={sx}
                />
            )}
        </>
    );

/** One selectable entry — a schema column, or the consumer's empty option (`path === ''`). */
interface ColumnOption {
    path: string;
    /** Undefined on the empty option — it never carries a badge. */
    type?: DetectedType;
    /** Only on date columns when the consumer asks for the Zeitachse hint (the X picker). */
    dateHint?: boolean;
}

interface ColumnAutocompleteProps {
    label: string;
    /** The authored column path; '' = the empty option. */
    value: string;
    columns: readonly JsonTableColumn[];
    onChange: (path: string) => void;
    /** The empty option's label — the consumer's wording for "no column". */
    emptyLabel: string;
    /** Badge date columns with the Zeitachse hint (the X picker's answer, ADR-0075 decision 4). */
    dateHint?: boolean;
    disabled?: boolean;
    /**
     * Readonly data-confirmation line under the field (zuordnung-redesign ticket 04) — the X
     * picker's „z. B. …" sample values. Only the Zuordnung passes it; the yPath rows never do.
     */
    sampleLine?: string;
}

const ColumnAutocomplete: FC<ColumnAutocompleteProps> = ({
    label,
    value,
    columns,
    onChange,
    emptyLabel,
    dateHint = false,
    disabled = false,
    sampleLine,
}) => {
    const options: ColumnOption[] = [
        { path: '' },
        ...columns.map(c => ({
            path: c.path,
            type: c.type,
            dateHint: dateHint && c.type === 'date',
        })),
        // A drifted path (authored, gone from the schema) stays SELECTABLE — the picker must
        // not lie a different column; the ⚠ validation owns the warning (decision 9).
        ...(value && !columns.some(c => c.path === value) ? [{ path: value }] : []),
    ];
    // The closed-state sight (zuordnung-redesign ticket 03): the SELECTED column's badges —
    // schema-less selections (drifted paths, the empty option) carry none, the picker does
    // not invent a type.
    const selected = columns.find(c => c.path === value);
    return (
        <Box>
            <FieldLabel>{label}</FieldLabel>
            <Autocomplete<ColumnOption, false, true, false>
                size="small"
                disabled={disabled}
                disableClearable
                options={options}
                value={options.find(o => o.path === value) ?? { path: value }}
                isOptionEqualToValue={(o, v) => o.path === v.path}
                getOptionLabel={o => (o.path === '' ? emptyLabel : o.path)}
                onChange={(_, v) => onChange(v.path)}
                renderOption={(props, option) => (
                    <li
                        {...props}
                        key={option.path || '__empty'}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, minWidth: 0 }}>
                            <Box sx={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                {option.path === '' ? emptyLabel : option.path}
                            </Box>
                            {columnBadges(option.type, !!option.dateHint, OPTION_BADGE_SX)}
                        </Box>
                    </li>
                )}
                renderInput={({ InputProps, inputProps, ...params }) => (
                    <TextField
                        {...params}
                        slotProps={{
                            // v6 slotProps form: MUI's own adornments (the dropdown arrow) ride
                            // along, the badges sit BEFORE them — the arrow stays reachable.
                            input: {
                                ...InputProps,
                                endAdornment: (
                                    <>
                                        {selected && (
                                            <Box sx={{ display: 'flex', gap: 0.5, mr: 0.5, alignItems: 'center' }}>
                                                {columnBadges(
                                                    selected.type,
                                                    dateHint && selected.type === 'date',
                                                    CLOSED_BADGE_SX,
                                                )}
                                            </Box>
                                        )}
                                        {InputProps.endAdornment}
                                    </>
                                ),
                            },
                            htmlInput: {
                                ...inputProps,
                                // The closed input ellipsizes long dot-paths — the native title
                                // carries the full one on hover (an unconditional title on a
                                // NON-truncated path is harmless; CSS ellipsis is not detectable).
                                title: value === '' ? undefined : value,
                            },
                        }}
                        fullWidth
                    />
                )}
            />
            {sampleLine && (
                <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ display: 'block', mt: 0.5 }}
                >
                    {sampleLine}
                </Typography>
            )}
        </Box>
    );
};

export default ColumnAutocomplete;
