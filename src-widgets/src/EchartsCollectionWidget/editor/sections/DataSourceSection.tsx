/**
 * Data source section — the GLOBAL time-series options (cartesian/pie only, ADR-0010).
 *
 * @module EchartsCollectionWidget/editor/sections/DataSourceSection
 * @remarks
 * What is shared across ALL of a chart's series: history mode (the time WINDOW per ADR-0063 —
 * type relative/static, the 18-key grouped range, the 17-key relative end, or the static
 * DateTimePicker pair — plus aggregate / count / refresh / null gaps), the JSON OID (json mode),
 * or a live-mode hint. A STATIC window hides the refresh field (the pipeline suppresses polling
 * and the early refresh anyway) and shows a start≥end advisory. OID binding — and with it the
 * per-series history instance (ADR-0039) — lives in the Series section. Not rendered for
 * gauge/radar (they always read the current value — the pinned selectors say so).
 */
import type { FC } from 'react';
import { Box, ListSubheader, MenuItem, TextField } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import Generic from '../../../Generic';
import OidPicker from '../OidPicker';
import type { OidPickerCtx } from '../OidPicker';
import { FieldGrid, FieldLabel, InfoBox, LabeledSelect, NumberField } from '../../../components/controls';
import type { EditorState, SetEditor } from '../editorState';
import type {
    EchartsRelativeEnd,
    EchartsTimeRange,
    EchartsTimeType,
} from '../../../types/field-definitions/echarts-fields';

/**
 * The data source section's field ownership (ADR-0049 slice) — the mode branch plus the history
 * knobs (window type/range/relative end/static pair/aggregate/count/refresh/null-gaps) and the
 * JSON OID.
 */
export type DataSourceSlice = Pick<
    EditorState,
    | 'mode'
    | 'timeType'
    | 'timeRange'
    | 'relativeEnd'
    | 'staticStart'
    | 'staticEnd'
    | 'aggregate'
    | 'count'
    | 'refreshMs'
    | 'ignoreNull'
    | 'jsonOid'
>;

/** The 18 range keys in display order, grouped (minutes → hours → days → months → years). */
const RANGE_GROUPS: ReadonlyArray<{ label: string; keys: readonly EchartsTimeRange[] }> = [
    { label: 'echarts_range_group_minutes', keys: ['10m', '30m'] },
    { label: 'echarts_range_group_hours', keys: ['1h', '2h', '3h', '6h', '12h'] },
    { label: 'echarts_range_group_days', keys: ['1d', '2d', '3d', '7d', '14d'] },
    { label: 'echarts_range_group_months', keys: ['1m', '2m', '3m', '6m'] },
    { label: 'echarts_range_group_years', keys: ['1y', '2y'] },
];

/** The 17 relative-end keys in the adapter's dialog order (week2* rejected by the spec). */
const RELATIVE_ENDS: readonly EchartsRelativeEnd[] = [
    'now',
    '1minute',
    '5minutes',
    '10minutes',
    '30minutes',
    '1hour',
    '2hours',
    '3hours',
    '4hours',
    '6hours',
    '8hours',
    '12hours',
    'today',
    'weekEurope',
    'weekUsa',
    'month',
    'year',
];

/**
 * A grouped variant of the LabeledSelect idiom for the 18 ranges (the one consumer of groups —
 * extract into components/controls on second use).
 */
const GroupedRangeSelect: FC<{
    value: EchartsTimeRange;
    onChange: (v: EchartsTimeRange) => void;
}> = ({ value, onChange }) => (
    <Box>
        <FieldLabel>{Generic.t('echarts_time_range')}</FieldLabel>
        <TextField
            select
            size="small"
            value={value}
            onChange={e => onChange(e.target.value as EchartsTimeRange)}
            fullWidth
        >
            {RANGE_GROUPS.map(group => [
                <ListSubheader key={group.label}>{Generic.t(group.label)}</ListSubheader>,
                ...group.keys.map(k => (
                    <MenuItem
                        key={k}
                        value={k}
                    >
                        {Generic.t(`echarts_range_${k}`)}
                    </MenuItem>
                )),
            ])}
        </TextField>
    </Box>
);

interface DataSourceSectionProps {
    state: DataSourceSlice;
    set: SetEditor<DataSourceSlice>;
    pickerCtx: OidPickerCtx;
}

const DataSourceSection: FC<DataSourceSectionProps> = ({ state, set, pickerCtx }) => {
    const isHistory = state.mode === 'history';
    const isJson = state.mode === 'json';
    const isStatic = state.timeType === 'static';
    const staticStart = state.staticStart ? new Date(state.staticStart) : null;
    const staticEnd = state.staticEnd ? new Date(state.staticEnd) : null;
    const staticInvalid = isStatic && staticStart && staticEnd ? staticStart.getTime() >= staticEnd.getTime() : false;

    return (
        <Box>
            {/* The picker chrome stays English (adapter default); the chart's own time
                formatting follows the host language via moment (ADR-0052) — a picker
                locale import per language is not worth the bundle. */}
            {isHistory && (
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <FieldGrid>
                        <LabeledSelect
                            label={Generic.t('echarts_time_type')}
                            value={state.timeType}
                            onChange={v => set({ timeType: v as EchartsTimeType })}
                            options={[
                                ['relative', Generic.t('echarts_time_type_relative')],
                                ['static', Generic.t('echarts_time_type_static')],
                            ]}
                        />
                        {!isStatic && (
                            <GroupedRangeSelect
                                value={state.timeRange}
                                onChange={v => set({ timeRange: v })}
                            />
                        )}
                        {!isStatic && (
                            <LabeledSelect
                                label={Generic.t('echarts_relative_end')}
                                value={state.relativeEnd}
                                onChange={v => set({ relativeEnd: v as EchartsRelativeEnd })}
                                options={RELATIVE_ENDS.map(
                                    k => [k, Generic.t(`echarts_relend_${k}`)] as [string, string],
                                )}
                            />
                        )}
                        {isStatic && (
                            <Box>
                                <FieldLabel>{Generic.t('echarts_time_static_start')}</FieldLabel>
                                <DateTimePicker
                                    value={staticStart}
                                    onChange={d => set({ staticStart: d ? d.toISOString() : '' })}
                                    slotProps={{ textField: { size: 'small', fullWidth: true } }}
                                />
                            </Box>
                        )}
                        {isStatic && (
                            <Box>
                                <FieldLabel>{Generic.t('echarts_time_static_end')}</FieldLabel>
                                <DateTimePicker
                                    value={staticEnd}
                                    onChange={d => set({ staticEnd: d ? d.toISOString() : '' })}
                                    slotProps={{ textField: { size: 'small', fullWidth: true } }}
                                />
                            </Box>
                        )}
                        <LabeledSelect
                            label={Generic.t('echarts_aggregate')}
                            value={state.aggregate}
                            onChange={v => set({ aggregate: v as DataSourceSlice['aggregate'] })}
                            options={[
                                ['average', 'average'],
                                ['minmax', 'minmax'],
                                ['min', 'min'],
                                ['max', 'max'],
                                ['total', 'total'],
                                ['count', 'count'],
                                ['onchange', 'onchange'],
                                ['none', 'none'],
                            ]}
                        />
                        <NumberField
                            label={Generic.t('echarts_count')}
                            value={state.count}
                            onChange={v => set({ count: v })}
                        />
                        {/* Static hides the refresh field (ADR-0063): a fixed window has nothing
                         to follow — the pipeline suppresses polling anyway. */}
                        {!isStatic && (
                            <NumberField
                                label={Generic.t('echarts_refresh')}
                                value={state.refreshMs}
                                step={1000}
                                onChange={v => set({ refreshMs: v })}
                            />
                        )}
                        <LabeledSelect
                            label={Generic.t('echarts_ignore_null')}
                            value={state.ignoreNull}
                            onChange={v => set({ ignoreNull: v as DataSourceSlice['ignoreNull'] })}
                            options={[
                                ['keep', Generic.t('echarts_ignore_null_keep')],
                                ['forward', Generic.t('echarts_ignore_null_forward')],
                                ['zero', Generic.t('echarts_ignore_null_zero')],
                            ]}
                        />
                    </FieldGrid>
                    {isStatic && staticInvalid && <InfoBox text={Generic.t('echarts_time_static_invalid')} />}
                    {/* One side cleared: the resolver silently falls back to now−24h — say so
                     (the author's window must never be replaced without a word). */}
                    {isStatic && !staticInvalid && (!staticStart || !staticEnd) && (
                        <InfoBox text={Generic.t('echarts_time_static_incomplete')} />
                    )}
                </LocalizationProvider>
            )}

            {isJson && (
                <Box>
                    <FieldLabel>{Generic.t('echarts_json_oid')}</FieldLabel>
                    <OidPicker
                        value={state.jsonOid}
                        onChange={oid => set({ jsonOid: oid })}
                        ctx={pickerCtx}
                    />
                    <InfoBox text={Generic.t('echarts_editor_info_json')} />
                </Box>
            )}

            {!isHistory && !isJson && <InfoBox text={Generic.t('echarts_editor_mode_hint_live')} />}
        </Box>
    );
};

export default DataSourceSection;
