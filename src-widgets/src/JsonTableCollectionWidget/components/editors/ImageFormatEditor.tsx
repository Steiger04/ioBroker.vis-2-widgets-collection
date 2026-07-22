/**
 * Image format editor component for column formatting configuration.
 *
 * @module JsonTableCollectionWidget/components/editors/ImageFormatEditor
 * @remarks
 * Provides UI controls for image/icon columns: avatar shape (variant), render size,
 * object-fit, colour tint, per-side padding, tooltip toggle, broken-image placeholder
 * toggle, and a live preview that reuses the cell renderer's graphic path.
 */

import {
    Divider,
    FormControl,
    FormControlLabel,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    Stack,
    Switch,
    TextField,
    Typography,
    Box,
} from '@mui/material';
import { BrokenImage as BrokenImageIcon } from '@mui/icons-material';
import type React from 'react';

import Generic from '../../../Generic';
import ColorPickerField from '../../../components/ColorPickerField';
import type { CellImageContent, ColumnFormatConfig, ImageObjectFit, ImageVariant } from '../../types';
import { ImageGraphic } from '../TableCellRenderer';
import { buildImageContent } from '../../utils/cellFormatters';
import { IMAGE_FORMAT_DEFAULTS } from '../../utils/columnConfig';

/**
 * URL-encoded SVG data URI used for the editor preview: a filled rectangle so the avatar
 * shape (square / rounded / circular) is actually visible — a non-filling sample (e.g. a
 * glyph) would leave the rounded corners nothing to clip. Opaque so the colour-mask tint
 * path is demonstrable; safe inside a CSS `url()` mask.
 */
const SAMPLE_SVG =
    "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%3E%3Crect%20width='24'%20height='24'%20fill='%23000'/%3E%3C/svg%3E";

/** Props for the ImageFormatEditor component. */
export interface ImageFormatEditorProps {
    /** Current format configuration */
    format: ColumnFormatConfig;
    /** Callback when format changes */
    onChange: (patch: Partial<ColumnFormatConfig>) => void;
}

/**
 * Renders image/icon formatting controls with live preview.
 */
function ImageFormatEditor({ format, onChange }: ImageFormatEditorProps): React.JSX.Element {
    // Preview descriptor built from the current settings; reuses the real renderer.
    const previewDescriptor: CellImageContent = buildImageContent(SAMPLE_SVG, format);

    /** Update one side of the per-side avatar padding. */
    const setPadding = (side: 'top' | 'right' | 'bottom' | 'left', raw: string): void => {
        const n = parseInt(raw, 10);
        onChange({
            type: 'image',
            imagePadding: { ...format.imagePadding, [side]: Number.isFinite(n) ? n : undefined },
        });
    };

    return (
        <>
            <Typography
                variant="caption"
                color="text.secondary"
                sx={{ fontWeight: 500 }}
            >
                {Generic.t('json_table_image_format')}
            </Typography>

            {/* Size + object-fit */}
            <Stack
                direction="row"
                spacing={1}
            >
                <TextField
                    label={Generic.t('json_table_image_size')}
                    type="number"
                    value={format.imageSize ?? ''}
                    onChange={e => {
                        const n = parseInt(e.target.value, 10);
                        onChange({ type: 'image', imageSize: Number.isFinite(n) ? n : undefined });
                    }}
                    size="small"
                    sx={{ flex: 1 }}
                    slotProps={{ htmlInput: { min: 8, max: 256 } }}
                    placeholder="px"
                />
                <FormControl
                    size="small"
                    sx={{ minWidth: 120 }}
                >
                    <InputLabel>{Generic.t('json_table_image_object_fit')}</InputLabel>
                    <Select
                        label={Generic.t('json_table_image_object_fit')}
                        value={format.imageObjectFit ?? 'contain'}
                        onChange={e =>
                            onChange({
                                type: 'image',
                                imageObjectFit: e.target.value as ImageObjectFit,
                            })
                        }
                    >
                        <MenuItem value="contain">{Generic.t('json_table_image_object_fit_contain')}</MenuItem>
                        <MenuItem value="cover">{Generic.t('json_table_image_object_fit_cover')}</MenuItem>
                        <MenuItem value="fill">{Generic.t('json_table_image_object_fit_fill')}</MenuItem>
                    </Select>
                </FormControl>
            </Stack>

            {/* Shape (avatar variant) */}
            <FormControl
                size="small"
                fullWidth
            >
                <InputLabel>{Generic.t('json_table_image_variant')}</InputLabel>
                <Select
                    label={Generic.t('json_table_image_variant')}
                    value={format.imageVariant ?? 'square'}
                    onChange={e => onChange({ type: 'image', imageVariant: e.target.value as ImageVariant })}
                >
                    <MenuItem value="square">{Generic.t('json_table_image_variant_square')}</MenuItem>
                    <MenuItem value="circular">{Generic.t('json_table_image_variant_circular')}</MenuItem>
                    <MenuItem value="rounded">{Generic.t('json_table_image_variant_rounded')}</MenuItem>
                </Select>
            </FormControl>

            {/* Background + border */}
            <ColorPickerField
                label={Generic.t('json_table_image_bg_color')}
                value={format.imageBgColor ?? ''}
                overridden={!!format.imageBgColor}
                onChange={v => onChange({ type: 'image', imageBgColor: v || undefined })}
            />
            <ColorPickerField
                label={Generic.t('json_table_image_border_color')}
                value={format.imageBorderColor ?? ''}
                overridden={!!format.imageBorderColor}
                onChange={v => onChange({ type: 'image', imageBorderColor: v || undefined })}
            />
            <TextField
                label={Generic.t('json_table_image_border_width')}
                type="number"
                value={format.imageBorderWidth ?? ''}
                onChange={e => {
                    const n = parseInt(e.target.value, 10);
                    onChange({ type: 'image', imageBorderWidth: Number.isFinite(n) ? n : undefined });
                }}
                size="small"
                fullWidth
                slotProps={{ htmlInput: { min: 0, max: 16 } }}
                placeholder="px"
            />

            {/* Tint */}
            <ColorPickerField
                label={Generic.t('json_table_image_tint')}
                value={format.imageTint ?? ''}
                overridden={!!format.imageTint}
                onChange={v => onChange({ type: 'image', imageTint: v || undefined })}
            />
            <Typography
                variant="caption"
                color="text.secondary"
            >
                {Generic.t('json_table_image_tint_hint')}
            </Typography>

            <Divider />

            {/* Tooltip + broken placeholder toggles */}
            <FormControlLabel
                control={
                    <Switch
                        size="small"
                        checked={format.imageTooltip !== false}
                        onChange={e => onChange({ type: 'image', imageTooltip: e.target.checked })}
                    />
                }
                label={<Typography variant="body2">{Generic.t('json_table_image_tooltip')}</Typography>}
            />
            <FormControlLabel
                control={
                    <Switch
                        size="small"
                        checked={format.imageShowBroken !== false}
                        onChange={e => onChange({ type: 'image', imageShowBroken: e.target.checked })}
                    />
                }
                label={<Typography variant="body2">{Generic.t('json_table_image_show_broken')}</Typography>}
            />

            {/* Per-side padding around the avatar */}
            <Typography
                variant="caption"
                color="text.secondary"
                sx={{ fontWeight: 500 }}
            >
                {Generic.t('json_table_image_padding')}
            </Typography>
            <Stack
                direction="row"
                spacing={1}
            >
                <TextField
                    label={Generic.t('json_table_image_padding_top')}
                    type="number"
                    value={format.imagePadding?.top ?? ''}
                    onChange={e => setPadding('top', e.target.value)}
                    size="small"
                    sx={{ flex: 1 }}
                    slotProps={{ htmlInput: { min: 0, max: 64 } }}
                    placeholder="px"
                />
                <TextField
                    label={Generic.t('json_table_image_padding_right')}
                    type="number"
                    value={format.imagePadding?.right ?? ''}
                    onChange={e => setPadding('right', e.target.value)}
                    size="small"
                    sx={{ flex: 1 }}
                    slotProps={{ htmlInput: { min: 0, max: 64 } }}
                    placeholder="px"
                />
                <TextField
                    label={Generic.t('json_table_image_padding_bottom')}
                    type="number"
                    value={format.imagePadding?.bottom ?? ''}
                    onChange={e => setPadding('bottom', e.target.value)}
                    size="small"
                    sx={{ flex: 1 }}
                    slotProps={{ htmlInput: { min: 0, max: 64 } }}
                    placeholder="px"
                />
                <TextField
                    label={Generic.t('json_table_image_padding_left')}
                    type="number"
                    value={format.imagePadding?.left ?? ''}
                    onChange={e => setPadding('left', e.target.value)}
                    size="small"
                    sx={{ flex: 1 }}
                    slotProps={{ htmlInput: { min: 0, max: 64 } }}
                    placeholder="px"
                />
            </Stack>

            {/* Preview */}
            <Paper
                variant="outlined"
                sx={{ p: 1.5, bgcolor: 'action.hover' }}
            >
                <Typography
                    variant="caption"
                    color="text.secondary"
                >
                    {Generic.t('json_table_preview')}
                </Typography>
                <Box
                    sx={{
                        mt: 0.5,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 2,
                        height: 64,
                    }}
                >
                    <ImageGraphic descriptor={previewDescriptor} />
                    {format.imageShowBroken !== false && (
                        <BrokenImageIcon
                            sx={{
                                fontSize: format.imageSize ?? IMAGE_FORMAT_DEFAULTS.size,
                                color: 'text.disabled',
                                opacity: 0.5,
                            }}
                        />
                    )}
                </Box>
            </Paper>
        </>
    );
}

export default ImageFormatEditor;
