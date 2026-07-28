/**
 * Axes & Zoom tab — cartesian-only value-axis + interaction config (ADR-0007, Q5).
 *
 * @module EchartsCollectionWidget/editor/panels/AxesZoomPanel
 * @remarks
 * Shown only for cartesian families. Y-axis bounds/name + split lines, dataZoom (slider + inside),
 * threshold mark-lines (value/label/colour/dashed), and the continuous value→colour visualMap.
 */
import type { FC } from 'react';
import { Box, Button, IconButton } from '@mui/material';
import { Add as AddIcon, DeleteOutline as DeleteIcon } from '@mui/icons-material';

import Generic from '../../../Generic';
import { CheckField, FieldLabel, NumberField, SectionLabel, TextField2 } from '../controls';
import ColorField, { ColorListField } from '../colorFields';
import type { OidPickerCtx } from '../OidPicker';
import type { EchartsMarkLine } from '../../../types/field-definitions/echarts-fields';
import type { EditorState, SetEditor } from '../editorState';

interface PanelProps {
    state: EditorState;
    set: SetEditor;
    pickerCtx: OidPickerCtx;
}

const AxesZoomPanel: FC<PanelProps> = ({ state, set, pickerCtx }) => {
    const setMark = (i: number, patch: Partial<EchartsMarkLine>): void =>
        set({ markLines: state.markLines.map((m, idx) => (idx === i ? { ...m, ...patch } : m)) });
    const addMark = (): void =>
        set({ markLines: [...state.markLines, { value: 0, label: '', color: '#888', dashed: true }] });
    const removeMark = (i: number): void => set({ markLines: state.markLines.filter((_, idx) => idx !== i) });

    return (
        <Box>
            {/* Y axis */}
            <SectionLabel>{Generic.t('echarts_axes_y')}</SectionLabel>
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.5, mb: 2 }}>
                <TextField2
                    label={Generic.t('echarts_y_min')}
                    value={state.yMin}
                    onChange={v => set({ yMin: v })}
                    placeholder="auto"
                />
                <TextField2
                    label={Generic.t('echarts_y_max')}
                    value={state.yMax}
                    onChange={v => set({ yMax: v })}
                    placeholder="auto"
                />
                <TextField2
                    label={Generic.t('echarts_y_name')}
                    value={state.yName}
                    onChange={v => set({ yName: v })}
                />
                <CheckField
                    label={Generic.t('echarts_y_split')}
                    value={state.ySplit}
                    onChange={v => set({ ySplit: v })}
                />
                <CheckField
                    label={Generic.t('echarts_x_split')}
                    value={state.xSplit}
                    onChange={v => set({ xSplit: v })}
                />
                <CheckField
                    label={Generic.t('echarts_y_log')}
                    value={state.yLog}
                    onChange={v => set({ yLog: v })}
                />
                <TextField2
                    label={Generic.t('echarts_y_format')}
                    value={state.yFormat}
                    onChange={v => set({ yFormat: v })}
                    placeholder="{value} kW"
                />
            </Box>

            {/* Zoom */}
            <SectionLabel>{Generic.t('echarts_zoom')}</SectionLabel>
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.5, mb: 2 }}>
                <CheckField
                    label={Generic.t('echarts_zoom_slider')}
                    value={state.dataZoomSlider}
                    onChange={v => set({ dataZoomSlider: v })}
                />
                <CheckField
                    label={Generic.t('echarts_zoom_inside')}
                    value={state.dataZoomInside}
                    onChange={v => set({ dataZoomInside: v })}
                />
            </Box>

            {/* Thresholds (markLine) */}
            <SectionLabel hint={Generic.t('echarts_thresholds_hint')}>{Generic.t('echarts_thresholds')}</SectionLabel>
            {state.markLines.map((m, i) => (
                <Box
                    key={i}
                    sx={{ mb: 1.5 }}
                >
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, alignItems: 'center' }}>
                        <Box sx={{ width: 110 }}>
                            <NumberField
                                label={Generic.t('echarts_threshold_value')}
                                value={m.value}
                                onChange={v => setMark(i, { value: v })}
                            />
                        </Box>
                        <Box sx={{ width: 130 }}>
                            <TextField2
                                label={Generic.t('echarts_threshold_label')}
                                value={m.label ?? ''}
                                onChange={v => setMark(i, { label: v })}
                            />
                        </Box>
                        <CheckField
                            label={Generic.t('echarts_threshold_dashed')}
                            value={m.dashed ?? false}
                            onChange={v => setMark(i, { dashed: v })}
                        />
                        <IconButton
                            size="small"
                            onClick={() => removeMark(i)}
                            aria-label={Generic.t('echarts_editor_series_remove')}
                            sx={{ mt: 1.5 }}
                        >
                            <DeleteIcon fontSize="small" />
                        </IconButton>
                    </Box>
                    <Box sx={{ maxWidth: 260, mt: 0.5 }}>
                        <FieldLabel>{Generic.t('echarts_editor_series_color')}</FieldLabel>
                        <ColorField
                            value={m.color}
                            fallback="#888888"
                            onChange={v => setMark(i, { color: v ?? undefined })}
                            ctx={pickerCtx}
                        />
                    </Box>
                </Box>
            ))}
            <Button
                startIcon={<AddIcon />}
                onClick={addMark}
                sx={{ mb: 2 }}
            >
                {Generic.t('echarts_threshold_add')}
            </Button>

            {/* Value→colour visualMap */}
            <SectionLabel hint={Generic.t('echarts_visualmap_hint')}>{Generic.t('echarts_visualmap')}</SectionLabel>
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.5 }}>
                <CheckField
                    label={Generic.t('echarts_visualmap_enable')}
                    value={state.visualMap.enabled}
                    onChange={v => set({ visualMap: { ...state.visualMap, enabled: v } })}
                />
                <NumberField
                    label={Generic.t('echarts_visualmap_min')}
                    value={state.visualMap.min}
                    onChange={v => set({ visualMap: { ...state.visualMap, min: v } })}
                />
                <NumberField
                    label={Generic.t('echarts_visualmap_max')}
                    value={state.visualMap.max}
                    onChange={v => set({ visualMap: { ...state.visualMap, max: v } })}
                />
            </Box>
            <Box sx={{ mt: 1, maxWidth: 260 }}>
                <FieldLabel>{Generic.t('echarts_visualmap_colors')}</FieldLabel>
                <ColorListField
                    value={state.visualMap.colors}
                    onChange={v => set({ visualMap: { ...state.visualMap, colors: v } })}
                    ctx={pickerCtx}
                />
            </Box>
        </Box>
    );
};

export default AxesZoomPanel;
