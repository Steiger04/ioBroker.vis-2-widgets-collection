/**
 * Axes & zoom section — cartesian-only value-axis + interaction config (ADR-0007, ADR-0010).
 *
 * @module EchartsCollectionWidget/editor/sections/AxesZoomSection
 * @remarks
 * Y-axis bounds/name/format + split lines + log scale, dataZoom (slider + inside), and the
 * threshold mark-lines (value/label/colour/dashed). yMin/yMax carry field-level validation
 * (min must be below max when both are set).
 */
import type { FC } from 'react';
import { Box, Button, IconButton } from '@mui/material';
import { Add as AddIcon, DeleteOutline as DeleteIcon } from '@mui/icons-material';

import Generic from '../../../Generic';
import { CheckField, FieldLabel, NumberField, SectionLabel, TextField2 } from '../controls';
import ColorField from '../colorFields';
import type { OidPickerCtx } from '../OidPicker';
import type { EchartsMarkLine } from '../../../types/field-definitions/echarts-fields';
import type { EditorState, SetEditor } from '../editorState';

interface AxesZoomSectionProps {
    state: EditorState;
    set: SetEditor;
    pickerCtx: OidPickerCtx;
}

const AxesZoomSection: FC<AxesZoomSectionProps> = ({ state, set, pickerCtx }) => {
    const setMark = (i: number, patch: Partial<EchartsMarkLine>): void =>
        set({ markLines: state.markLines.map((m, idx) => (idx === i ? { ...m, ...patch } : m)) });
    const addMark = (): void =>
        set({ markLines: [...state.markLines, { value: 0, label: '', color: '#888', dashed: true }] });
    const removeMark = (i: number): void => set({ markLines: state.markLines.filter((_, idx) => idx !== i) });

    const boundsInvalid =
        state.yMin.trim() !== '' &&
        state.yMax.trim() !== '' &&
        Number.isFinite(Number(state.yMin)) &&
        Number.isFinite(Number(state.yMax)) &&
        Number(state.yMin) >= Number(state.yMax);

    return (
        <Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.5, mb: 2 }}>
                <TextField2
                    label={Generic.t('echarts_y_min')}
                    value={state.yMin}
                    onChange={v => set({ yMin: v })}
                    placeholder="auto"
                    error={boundsInvalid}
                    helperText={boundsInvalid ? Generic.t('echarts_val_yminmax') : undefined}
                />
                <TextField2
                    label={Generic.t('echarts_y_max')}
                    value={state.yMax}
                    onChange={v => set({ yMax: v })}
                    placeholder="auto"
                    error={boundsInvalid}
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
            >
                {Generic.t('echarts_threshold_add')}
            </Button>
        </Box>
    );
};

export default AxesZoomSection;
