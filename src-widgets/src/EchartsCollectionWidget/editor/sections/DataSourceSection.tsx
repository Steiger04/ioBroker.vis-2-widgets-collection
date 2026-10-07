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
import { Box, Chip, ListSubheader, MenuItem, TextField } from '@mui/material';
import { ErrorOutline } from '@mui/icons-material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// The V3 subpath — the adapter for date-fns v3/v4. The plain '@mui/x-date-pickers/AdapterDateFns'
// is built for date-fns V2 and deep-imports `date-fns/_lib/format/longFormatters`, which v4
// removed (the build-time "Missing specifier" error). The class re-exports under the same name.
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import Generic from '../../../Generic';
import OidPicker from '../OidPicker';
import type { OidPickerCtx } from '../OidPicker';
import ColumnAutocomplete from '../ColumnAutocomplete';
import { suggestedRowPath, useJsonTableSchema, type JsonTableSchema } from '../useJsonTableSchema';
import { xSampleLine } from '../xSampleValues';
import { resolveHostLang } from '../../timeFormat';
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
    SectionTabs,
    SwitchList,
    SwitchRow,
} from '../../../components/controls';
import type { SectionTabsFocus } from '../../../components/controls';
import { issueCountsByTab, type ValidationIssue } from '../validation';
import type { EditorState, SetEditor } from '../editorState';
import type {
    EchartsBarInterval,
    EchartsRelativeEnd,
    EchartsTimeRange,
    EchartsTimeType,
} from '../../../types/field-definitions/echarts-fields';

/**
 * The data source section's field ownership (ADR-0049 slice) — the mode branch plus the history
 * knobs (window type/range/relative end/static pair/aggregate/count/refresh/null-gaps), the
 * JSON OID and the tabellarische Zuordnung scalars (ADR-0075).
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
    | 'jsonKind'
    | 'jsonRowPath'
    | 'jsonXPath'
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

/**
 * The Zeilenpfad chip row's entries (ADR-0075, zuordnung-redesign Q2): the top level plus
 * every discovered array with its sample length badge. A stored path the payload no longer
 * carries stays VISIBLE as a drifted chip (the honest drift display — the row must not lie a
 * different path; decision 9's error surface says the rest).
 */
interface RowPathChip {
    path: string;
    /** Display text — the top option's word, or the path itself. */
    label: string;
    /** Sample length badge; undefined on a drifted path (unknown). */
    length?: number;
    /** Authored but gone from the payload — warning-coloured, still selectable. */
    drifted: boolean;
}

const rowPathChips = (
    current: string,
    schema: { arrayPaths: readonly { path: string; length: number }[] },
): RowPathChip[] => {
    const top = schema.arrayPaths.find(p => p.path === '');
    const chips: RowPathChip[] = [
        { path: '', label: Generic.t('echarts_mapping_rows_top'), length: top?.length, drifted: false },
        ...schema.arrayPaths
            .filter(p => p.path !== '')
            .map(p => ({ path: p.path, label: p.path, length: p.length, drifted: false })),
    ];
    if (current && !schema.arrayPaths.some(p => p.path === current)) {
        chips.push({ path: current, label: current, drifted: true }); // kept selectable, length unknown
    }
    return chips;
};

interface DataSourceSectionProps {
    /** External tab jump (ADR-0073): the focus request's tab selects once. */
    focusTab?: SectionTabsFocus;
    /** This section's validation findings — the per-tab ⚠ dot feed (the header rollup stays). */
    issues?: ValidationIssue[];
    state: DataSourceSlice;
    set: SetEditor<DataSourceSlice>;
    pickerCtx: OidPickerCtx;
    /**
     * The modal's SHARED schema sight (the dedup): when supplied, this section never opens its
     * own subscription — one live analysis per payload tick serves the whole rail. Absent
     * (tests, standalone mounts): the section subscribes for itself, unchanged behaviour.
     */
    schema?: JsonTableSchema;
}

const DataSourceSection: FC<DataSourceSectionProps> = ({ focusTab, issues, state, set, pickerCtx, schema }) => {
    const isHistory = state.mode === 'history';
    const isJson = state.mode === 'json';
    // The tabellarische family (ADR-0075): the JSON branch grows the Zuordnung tab; the
    // series-shaped Leerfall keeps its chrome-less single field (the ADR-0073 exception).
    const isJsonTable = isJson && state.jsonKind === 'table';
    const isStatic = state.timeType === 'static';
    const staticStart = state.staticStart ? new Date(state.staticStart) : null;
    const staticEnd = state.staticEnd ? new Date(state.staticEnd) : null;
    const staticInvalid = isStatic && staticStart && staticEnd ? staticStart.getTime() >= staticEnd.getTime() : false;

    // Live schema over the subscribed payload (ADR-0075 ticket 03): array candidates for the
    // Zeilenpfad + the chosen rows' columns. Statistical analysis lives HERE, never in the body.
    // The modal's shared sight wins (the dedup — its own hook call runs DISABLED then, no
    // second subscription); without one, this section subscribes for itself.
    const ownSchema = useJsonTableSchema(state.jsonOid, state.jsonRowPath, isJsonTable && !schema, pickerCtx.socket);
    const tableSchema = schema ?? ownSchema;

    // Per-tab warning dot feed (ADR-0073): issues placed on their tab; the header rollup stays.
    const dots = issueCountsByTab(issues);

    // The Zuordnung's derived sights (zuordnung-redesign): the suggestion drives the chip
    // badge (decision 8's new clothes — MARKED while unset, never silently set; top-level ''
    // stays unmarked, unset already reads it), the sample line the X picker's confirmation.
    const rowSuggestion = isJsonTable && !state.jsonRowPath ? suggestedRowPath(tableSchema.arrayPaths) : '';
    const xLine = isJsonTable ? xSampleLine(tableSchema.columns, state.jsonXPath, resolveHostLang()) : null;

    return (
        <Box>
            {/* The picker chrome stays English (adapter default); the chart's own time
                formatting follows the host language via moment (ADR-0052) — a picker
                locale import per language is not worth the bundle. */}
            {isHistory && (
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    {/* Sektions-Tabs (ADR-0073): Zeitfenster | Datenabruf — the window on one
                        tab, the acquisition defaults (Voreinstellung) + the bar cluster on the
                        other. JSON mode renders NO tab chrome (the Leerfall: one field). */}
                    <SectionTabs
                        focus={focusTab}
                        tabs={[
                            { key: 'window', label: Generic.t('echarts_tab_time_window'), issueCount: dots.window },
                            { key: 'fetch', label: Generic.t('echarts_tab_data_fetch'), issueCount: dots.fetch },
                        ]}
                    >
                        <Box>
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
                            </FieldGrid>
                            {isStatic && staticInvalid && <InfoBox text={Generic.t('echarts_time_static_invalid')} />}
                            {/* One side cleared: the resolver silently falls back to now−24h — say so
                             (the author's window must never be replaced without a word). */}
                            {isStatic && !staticInvalid && (!staticStart || !staticEnd) && (
                                <InfoBox text={Generic.t('echarts_time_static_incomplete')} />
                            )}
                        </Box>
                        <Box>
                            {/* ADR-0072: the aggregate cluster is the Voreinstellung for every series
                             now — say so where it is authored (Renderer InfoBox convention). */}
                            <InfoBox text={Generic.t('echarts_datasource_preset_hint')} />
                            <FieldGrid>
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
                        </Box>
                    </SectionTabs>
                </LocalizationProvider>
            )}

            {isJson && !isJsonTable && (
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

            {isJsonTable && (
                /* Sektions-Tabs (ADR-0073) for the tabellarische family: Datenpunkt | Zuordnung.
                 * The serien-förmig Leerfall above stays chrome-less (the documented exception);
                 * the `mapping` tab key is the CTA's address (ticket 07's focusSection jump). */
                <SectionTabs
                    focus={focusTab}
                    tabs={[
                        { key: 'datapoint', label: Generic.t('echarts_tab_datapoint'), issueCount: dots.datapoint },
                        { key: 'mapping', label: Generic.t('echarts_tab_mapping'), issueCount: dots.mapping },
                    ]}
                >
                    <Box>
                        <FieldLabel>{Generic.t('echarts_json_oid')}</FieldLabel>
                        <OidPicker
                            value={state.jsonOid}
                            onChange={oid => set({ jsonOid: oid })}
                            ctx={pickerCtx}
                        />
                        <InfoBox text={Generic.t('echarts_editor_info_json')} />
                    </Box>
                    <Box>
                        <InfoBox text={Generic.t('echarts_mapping_hint')} />
                        {tableSchema.error ? (
                            <InfoBox text={tableSchema.error} />
                        ) : (
                            !tableSchema.arrayPaths.length && <InfoBox text={Generic.t('echarts_mapping_no_array')} />
                        )}
                        {/* Zeilenpfad — the chip row (zuordnung-redesign Q2): every candidate
                         * visible at once, no dropdown to open, wrapping instead of truncating.
                         * The label stays in the no-rows Leerfall (the InfoBox says why the
                         * row is empty); a drifted authored path stays an honest selectable
                         * chip (ADR-0075 decision 9). */}
                        <Box sx={{ mt: 0.5 }}>
                            <FieldLabel>{Generic.t('echarts_mapping_rowpath')}</FieldLabel>
                            <Box
                                sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mt: 0.5 }}
                                // Keyboard reachability (spec: „Pfeile + Enter"): the chips are
                                // ButtonBase (Tab + Enter/Space natively); the arrows walk the
                                // row so the mouse is never the only road.
                                onKeyDown={e => {
                                    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') {
                                        return;
                                    }
                                    const focusables = Array.from(
                                        e.currentTarget.querySelectorAll<HTMLElement>('.MuiChip-root'),
                                    );
                                    const idx = focusables.indexOf(document.activeElement as HTMLElement);
                                    if (idx === -1) {
                                        return;
                                    }
                                    e.preventDefault();
                                    const step = e.key === 'ArrowRight' ? 1 : focusables.length - 1;
                                    focusables[(idx + step) % focusables.length].focus();
                                }}
                            >
                                {rowPathChips(state.jsonRowPath, tableSchema).map(chip => {
                                    const selected = chip.path === state.jsonRowPath;
                                    return (
                                        <Chip
                                            key={chip.path || '__top'}
                                            size="small"
                                            variant={selected ? 'filled' : 'outlined'}
                                            color={chip.drifted ? 'warning' : selected ? 'primary' : 'default'}
                                            icon={chip.drifted ? <ErrorOutline fontSize="small" /> : undefined}
                                            title={chip.drifted ? Generic.t('echarts_mapping_drifted') : undefined}
                                            onClick={() => set({ jsonRowPath: chip.path })}
                                            label={
                                                <Box
                                                    component="span"
                                                    sx={{
                                                        display: 'inline-flex',
                                                        alignItems: 'baseline',
                                                        gap: 0.5,
                                                    }}
                                                >
                                                    <span>
                                                        {chip.label}
                                                        {chip.drifted
                                                            ? ' (?)'
                                                            : chip.length !== undefined
                                                              ? ` (${chip.length})`
                                                              : ''}
                                                    </span>
                                                    {!chip.drifted &&
                                                        chip.path !== '' &&
                                                        chip.path === rowSuggestion && (
                                                            <Box
                                                                component="span"
                                                                sx={{
                                                                    fontSize: 11,
                                                                    fontWeight: 400,
                                                                    opacity: 0.75,
                                                                }}
                                                            >
                                                                {Generic.t('echarts_mapping_suggestion_badge')}
                                                            </Box>
                                                        )}
                                                </Box>
                                            }
                                        />
                                    );
                                })}
                            </Box>
                        </Box>
                        {/* X-Spalte — full width below the rows choice (zuordnung-redesign Q1):
                         * the pair is a SEQUENCE (rows first, the X column out of those rows),
                         * not peers squeezing each other's ~200px half. The sample line (Q4)
                         * confirms the choice with the column's real first values — X-only, the
                         * yPath rows never pass the slot. */}
                        <Box sx={{ mt: 1.5 }}>
                            <ColumnAutocomplete
                                label={Generic.t('echarts_mapping_xpath')}
                                value={state.jsonXPath}
                                columns={tableSchema.columns}
                                onChange={v => set({ jsonXPath: v })}
                                emptyLabel={Generic.t('echarts_mapping_row_index')}
                                dateHint
                                disabled={!tableSchema.columns.length}
                                sampleLine={
                                    xLine ? `${Generic.t('echarts_mapping_samples_prefix')} ${xLine}` : undefined
                                }
                            />
                        </Box>
                    </Box>
                </SectionTabs>
            )}
        </Box>
    );
};

export default DataSourceSection;
