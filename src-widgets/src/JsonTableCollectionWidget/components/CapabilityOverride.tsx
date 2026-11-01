/**
 * One per-column capability override of the column editor's Advanced section.
 *
 * @module JsonTableCollectionWidget/components/CapabilityOverride
 * @remarks
 * The Auto/On/Off select of one capability (sortable, filterable, hideable) next to the
 * column's resolved result — the same resolution the runtime uses (`../capabilities`).
 */

import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import type React from 'react';

import Generic from '../../Generic';
import {
    columnCapabilities,
    typeDefaults,
    type ColumnCapabilities,
    type EffectiveType,
    type TableCapabilities,
} from '../capabilities';
import type { ColumnConfigEntry } from '../types';
import EffectiveResultIndicator from './EffectiveResultIndicator';

/** Per capability: its texts, its table-wide capability and the config key of its override. */
const CAPABILITY_ROWS = {
    sortable: { label: 'json_table_sortable', feature: 'json_table_sorting', table: 'sorting', key: 'sortable' },
    filterable: {
        label: 'json_table_filterable',
        feature: 'json_table_filtering',
        table: 'columnFiltering',
        key: 'filterable',
    },
    hideable: { label: 'json_table_hideable', feature: 'json_table_hiding', table: 'hiding', key: 'enableHiding' },
} as const satisfies Record<
    keyof ColumnCapabilities,
    {
        label: string;
        feature: string;
        table: keyof TableCapabilities;
        key: 'sortable' | 'filterable' | 'enableHiding';
    }
>;

type SelectValue = 'auto' | 'on' | 'off';

const toSelectValue = (override: boolean | 'auto' | undefined): SelectValue =>
    override === true ? 'on' : override === false ? 'off' : 'auto';

const fromSelectValue = (value: string): boolean | 'auto' => (value === 'on' ? true : value === 'off' ? false : 'auto');

/** Props for the CapabilityOverride component. */
interface CapabilityOverrideProps {
    /** The capability this row overrides. */
    capability: keyof ColumnCapabilities;
    /** The column configuration being edited. */
    column: ColumnConfigEntry;
    /** The column's Effektiver Typ. */
    columnType: EffectiveType;
    /** The Tabellen-Fähigkeiten resolved from the widget's raw data. */
    capabilities: TableCapabilities;
    /** Called with the column configuration carrying the changed override. */
    onChange: (updated: ColumnConfigEntry) => void;
}

/** Renders the override select of one capability and its resolved result. */
function CapabilityOverride({
    capability,
    column,
    columnType,
    capabilities,
    onChange,
}: CapabilityOverrideProps): React.JSX.Element {
    const { label, feature, table, key } = CAPABILITY_ROWS[capability];
    const override = column[key];
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <FormControl
                size="small"
                sx={{ minWidth: 120 }}
            >
                <InputLabel>{Generic.t(label)}</InputLabel>
                <Select
                    value={toSelectValue(override)}
                    label={Generic.t(label)}
                    onChange={e => onChange({ ...column, [key]: fromSelectValue(e.target.value) })}
                >
                    <MenuItem value="auto">
                        <em>{Generic.t('json_table_option_auto')}</em>
                    </MenuItem>
                    <MenuItem value="on">{Generic.t('json_table_option_on')}</MenuItem>
                    <MenuItem value="off">{Generic.t('json_table_option_off')}</MenuItem>
                </Select>
            </FormControl>
            <EffectiveResultIndicator
                effective={columnCapabilities(capabilities, columnType, column)[capability]}
                tableEnabled={capabilities[table]}
                typeDefault={typeDefaults(columnType)[capability]}
                columnOverride={override}
                featureLabel={Generic.t(feature)}
                columnType={columnType}
            />
        </Box>
    );
}

export default CapabilityOverride;
