/**
 * Data source section — the GLOBAL time-series options (cartesian/pie only, ADR-0010).
 *
 * @module EchartsCollectionWidget/editor/sections/DataSourceSection
 * @remarks
 * What is shared across ALL of a chart's series: history mode (range / aggregate / count /
 * refresh / null gaps), the JSON OID (json mode), or a live-mode hint. OID binding — and with
 * it the per-series history instance (ADR-0039) — lives in the Series section. Not rendered for
 * gauge/radar (they always read the current value — the pinned selectors say so).
 */
import type { FC } from 'react';
import { Box } from '@mui/material';

import Generic from '../../../Generic';
import OidPicker from '../OidPicker';
import type { OidPickerCtx } from '../OidPicker';
import { FieldGrid, FieldLabel, InfoBox, LabeledSelect, NumberField } from '../../../components/controls';
import type { EditorState, SetEditor } from '../editorState';

/**
 * The data source section's field ownership (ADR-0049 slice) — the mode branch plus the
 * history knobs (range/aggregate/count/refresh/null-gaps) and the JSON OID.
 */
export type DataSourceSlice = Pick<
    EditorState,
    'mode' | 'timeRange' | 'aggregate' | 'count' | 'refreshMs' | 'ignoreNull' | 'jsonOid'
>;

interface DataSourceSectionProps {
    state: DataSourceSlice;
    set: SetEditor<DataSourceSlice>;
    pickerCtx: OidPickerCtx;
}

const DataSourceSection: FC<DataSourceSectionProps> = ({ state, set, pickerCtx }) => {
    const isHistory = state.mode === 'history';
    const isJson = state.mode === 'json';

    return (
        <Box>
            {isHistory && (
                <FieldGrid>
                    <LabeledSelect
                        label={Generic.t('echarts_time_range')}
                        value={state.timeRange}
                        onChange={v => set({ timeRange: v as DataSourceSlice['timeRange'] })}
                        options={[
                            ['24h', '24h'],
                            ['7d', '7d'],
                            ['30d', '30d'],
                        ]}
                    />
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
                    <NumberField
                        label={Generic.t('echarts_refresh')}
                        value={state.refreshMs}
                        step={1000}
                        onChange={v => set({ refreshMs: v })}
                    />
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
