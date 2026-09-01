/**
 * Data source section — the GLOBAL time-series options (cartesian/pie only, ADR-0010).
 *
 * @module EchartsCollectionWidget/editor/sections/DataSourceSection
 * @remarks
 * What is shared across ALL of a chart's series: history mode (the time WINDOW per ADR-0063 —
 * type relative/static, the 18-key grouped range, the 17-key relative end, or the static
 * DateTimePicker pair — plus aggregate / count / refresh / null gaps), the JSON OID (json mode).
 * A STATIC window hides the refresh field (the pipeline suppresses polling
 * and the early refresh anyway) and shows a start≥end advisory. OID binding — and with it the
 * per-series history instance (ADR-0039) — lives in the Series section.
 */
import type { FC } from 'react';
import { Box, ListSubheader, MenuItem, TextField } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// The V3 subpath — the adapter for date-fns v3/v4. The plain '@mui/x-date-pickers/AdapterDateFns'
// is built for date-fns V2 and deep-imports `date-fns/_lib/format/longFormatters`, which v4
// removed (the build-time "Missing specifier" error). The class re-exports under the same name.
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import Generic from '../../../Generic';
import OidPicker from '../OidPicker';
import type { OidPickerCtx } from '../OidPicker';
import { RANGE_MINUTES } from '../../timeWindow';
import { AGGREGATE_VALUES } from '../../seriesDataOverrides';
import {
    FieldGrid,
    FieldLabel,
    InfoBox,
    LabeledSelect,
    NumberField,
    OptionalNumberField,
    OptionalSliderField,
    SwitchList,
    SwitchRow,
} from '../../../components/controls';
import type { EditorState, SetEditor } from '../editorState';
import type {
    EchartsBarInterval,
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
    | 'chartType'
    | 'timeType'
    | 'timeRange'
    | 'relativeEnd'
    | 'staticStart'
    | 'staticEnd'
    | 'resolutionStep'
    | 'percentileValue'
    | 'integralUnit'
    | 'integralInterpolation'
    | 'barInterval'
    | 'barDiff'
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

/**
 * The interval options for the current range (adapter PresetTabs filtering, on OUR range keys):
 * short ranges offer short intervals; static windows offer everything.
 */
const barIntervalOptions = (state: DataSourceSlice): [EchartsBarInterval, string][] => {
    const all: [EchartsBarInterval, string][] = [
        ['auto', Generic.t('echarts_bar_interval_auto')],
        ['15m', Generic.t('echarts_bar_interval_15m')],
        ['1h', Generic.t('echarts_bar_interval_1h')],
        ['1d', Generic.t('echarts_bar_interval_1d')],
        ['30d', Generic.t('echarts_bar_interval_30d')],
    ];
    if (state.timeType === 'static') {
        return all;
    }
    // Minutes of the selected range key: the shared fixed-key table (timeWindow) + calendar
    // keys approximated by their minimum span (they have no fixed length).
    const CALENDAR_RANGE_MINUTES: Record<string, number> = {
        '1m': 43200,
        '2m': 86400,
        '3m': 129600,
        '6m': 259200,
        '1y': 525600,
        '2y': 1051200,
    };
    const rangeMinutes = RANGE_MINUTES[state.timeRange] ?? CALENDAR_RANGE_MINUTES[state.timeRange] ?? 1440;
    if (rangeMinutes <= 60) {
        return all.slice(0, 2); // auto + 15m
    }
    if (rangeMinutes <= 1440) {
        return all.slice(0, 3); // + 1h
    }
    if (rangeMinutes <= 43200) {
        return all.slice(0, 4); // + 1d
    }
    return all;
};

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
                            // The one shared aggregate list (ADR-0072) — the series cards'
                            // Daten cluster offers the same values under their inherit entry.
                            options={AGGREGATE_VALUES.map(a => [a, a] as [string, string])}
                        />
                        {/* Zeitschrittweite (ADR-0064): the count alternative — a set step
                             disables the count field (ONE of the two is ever active). */}
                        <OptionalNumberField
                            label={Generic.t('echarts_step_seconds')}
                            value={state.resolutionStep}
                            onChange={v => set({ resolutionStep: v })}
                        />
                        <NumberField
                            label={Generic.t('echarts_count')}
                            value={state.count}
                            onChange={v => set({ count: v })}
                            disabled={!!state.resolutionStep}
                        />
                        {/* Aggregate params (ADR-0064) — only under their aggregate (the
                             adapter's own gating; sparse, unset = the server default). */}
                        {state.aggregate === 'percentile' && (
                            <OptionalSliderField
                                label={Generic.t('echarts_percentile')}
                                value={state.percentileValue}
                                min={0}
                                max={100}
                                fallback={50}
                                onChange={v => set({ percentileValue: v })}
                            />
                        )}
                        {state.aggregate === 'integral' && (
                            <OptionalNumberField
                                label={Generic.t('echarts_integral_unit')}
                                value={state.integralUnit}
                                onChange={v => set({ integralUnit: v })}
                            />
                        )}
                        {state.aggregate === 'integral' && (
                            <LabeledSelect
                                label={Generic.t('echarts_integral_interpolation')}
                                value={state.integralInterpolation ?? 'none'}
                                onChange={v => set({ integralInterpolation: v as 'none' | 'linear' })}
                                options={[
                                    ['none', Generic.t('echarts_interp_none')],
                                    ['linear', Generic.t('echarts_interp_linear')],
                                ]}
                            />
                        )}
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
                    {/* Category bars (ADR-0065): an explicit interval buckets an effective BAR
                         chart onto calendar categories (auto = the time axis, unchanged). The
                         option list follows the adapter's range filtering. */}
                    {state.chartType === 'bar' && (
                        <>
                            <FieldGrid sx={{ mt: 0.5 }}>
                                <LabeledSelect
                                    label={Generic.t('echarts_bar_interval')}
                                    value={state.barInterval}
                                    onChange={v => set({ barInterval: v as EchartsBarInterval })}
                                    options={
                                        // A stored interval the current range filters OUT stays
                                        // visible (appended with its own label) — the chart keeps
                                        // bucketing with it; the select must not lie "auto"
                                        // (review catch: it rendered EMPTY before).
                                        barIntervalOptions(state).some(([v]) => v === state.barInterval)
                                            ? barIntervalOptions(state)
                                            : [
                                                  ...barIntervalOptions(state),
                                                  [
                                                      state.barInterval,
                                                      Generic.t(`echarts_bar_interval_${state.barInterval}`),
                                                  ] as [EchartsBarInterval, string],
                                              ]
                                    }
                                />
                            </FieldGrid>
                            {state.barInterval !== 'auto' && (
                                <SwitchList sx={{ mt: 1 }}>
                                    <SwitchRow
                                        label={Generic.t('echarts_bar_diff')}
                                        checked={state.barDiff}
                                        onChange={v => set({ barDiff: v })}
                                    />
                                </SwitchList>
                            )}
                        </>
                    )}
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
        </Box>
    );
};

export default DataSourceSection;
