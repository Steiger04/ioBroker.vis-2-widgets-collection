/**
 * Data source section — the GLOBAL time-series options (cartesian/pie only, ADR-0010).
 *
 * @module EchartsCollectionWidget/editor/sections/DataSourceSection
 * @remarks
 * What is shared across all of a chart's series: history mode (range / aggregate / count /
 * refresh / instance / null gaps), the JSON OID (json mode), or a live-mode hint. OID binding
 * itself lives in the Series section. Not rendered for gauge/radar (they always read the current
 * value — the pinned selectors say so).
 */
import type { FC } from 'react';
import { Box, Typography } from '@mui/material';

import Generic from '../../../Generic';
import OidPicker from '../OidPicker';
import type { OidPickerCtx } from '../OidPicker';
import { FieldGrid, FieldLabel, InfoBox, LabeledSelect, NumberField } from '../../../components/controls';
import { useHistoryInstances } from '../useHistoryInstances';
import type { EditorState, SetEditor } from '../editorState';

interface DataSourceSectionProps {
    state: EditorState;
    set: SetEditor;
    pickerCtx: OidPickerCtx;
}

const DataSourceSection: FC<DataSourceSectionProps> = ({ state, set, pickerCtx }) => {
    const isHistory = state.mode === 'history';
    const isJson = state.mode === 'json';
    const instances = useHistoryInstances(pickerCtx.socket);

    return (
        <Box>
            {isHistory && (
                <FieldGrid>
                    <LabeledSelect
                        label={Generic.t('echarts_time_range')}
                        value={state.timeRange}
                        onChange={v => set({ timeRange: v as EditorState['timeRange'] })}
                        options={[
                            ['24h', '24h'],
                            ['7d', '7d'],
                            ['30d', '30d'],
                        ]}
                    />
                    <LabeledSelect
                        label={Generic.t('echarts_aggregate')}
                        value={state.aggregate}
                        onChange={v => set({ aggregate: v as EditorState['aggregate'] })}
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
                    {instances.length > 0 ? (
                        <LabeledSelect
                            label={Generic.t('echarts_instance')}
                            value={state.instance}
                            onChange={v => set({ instance: v })}
                            options={[
                                ['', Generic.t('echarts_instance_auto')],
                                ...instances.map(id => [id, id] as [string, string]),
                            ]}
                        />
                    ) : (
                        <Box>
                            <FieldLabel>{Generic.t('echarts_instance')}</FieldLabel>
                            <Typography variant="caption">{Generic.t('echarts_instance_missing')}</Typography>
                        </Box>
                    )}
                    <LabeledSelect
                        label={Generic.t('echarts_ignore_null')}
                        value={state.ignoreNull}
                        onChange={v => set({ ignoreNull: v as EditorState['ignoreNull'] })}
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
