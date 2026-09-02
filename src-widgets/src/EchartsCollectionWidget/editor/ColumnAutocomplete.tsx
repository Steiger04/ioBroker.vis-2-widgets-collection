/**
 * The Zuordnung's column picker (ADR-0075 ticket 03) — a searchable MUI Autocomplete over the
 * schema's dot-path columns, each entry badged with its detected type.
 *
 * @module EchartsCollectionWidget/editor/ColumnAutocomplete
 * @remarks
 * No freeSolo (a column is picked, never typed — the paths are the analysis' vocabulary);
 * the type badge (`temp · Zahl`) makes the picker's answer to "what will this column give
 * me?" visible BEFORE the choice. Shared by the X column here and the series' yPath row
 * (ticket 04). The empty option (`` = unset) is the consumer's to label — the X picker says
 * „(Zeilenindex)", a yPath row says its unset wording.
 */
import type { FC } from 'react';
import { Autocomplete, Box, Chip, TextField } from '@mui/material';

import Generic from '../../Generic';
import { FieldLabel } from '../../components/controls';
import type { DetectedType, JsonTableColumn } from '../../hooks/useJsonTableAnalysis';

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
}

const ColumnAutocomplete: FC<ColumnAutocompleteProps> = ({
    label,
    value,
    columns,
    onChange,
    emptyLabel,
    dateHint = false,
    disabled = false,
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
                            {option.type && (
                                <Chip
                                    size="small"
                                    label={Generic.t(`echarts_col_type_${option.type}`)}
                                    sx={{ flexShrink: 0 }}
                                />
                            )}
                            {option.dateHint && (
                                <Chip
                                    size="small"
                                    color="primary"
                                    variant="outlined"
                                    label={Generic.t('echarts_mapping_time_axis')}
                                    sx={{ flexShrink: 0 }}
                                />
                            )}
                        </Box>
                    </li>
                )}
                renderInput={params => (
                    <TextField
                        {...params}
                        fullWidth
                    />
                )}
            />
        </Box>
    );
};

export default ColumnAutocomplete;
