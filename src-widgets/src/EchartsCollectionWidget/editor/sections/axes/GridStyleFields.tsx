import type { FC } from 'react';
import { Box } from '@mui/material';

import Generic from '../../../../Generic';
import { FieldGrid, FieldLabel, LabeledSelect, OptionalNumberField } from '../../../../components/controls';
import ColorField from '../../colorFields';
import type { OidPickerCtx } from '../../OidPicker';
import type { EchartsLineStyle } from '../../../../types/field-definitions/echarts-fields';

interface GridStyleFieldsProps {
    /** The authored grid colour ('' = unset → inherit swatch). */
    color: string;
    /** The authored grid stroke width (undefined = unset → no emit). */
    width: number | undefined;
    /** The authored grid line type (undefined = unset → no emit). */
    lineType: EchartsLineStyle | undefined;
    /** The inherit-swatch fallback = the theme's divider token. */
    dividerColor: string;
    ctx: OidPickerCtx;
    /** Patch sink: receives only the changed leaf ({gridColor}/{gridWidth}/{gridType}). */
    onChange: (patch: { gridColor?: string; gridWidth?: number; gridType?: EchartsLineStyle }) => void;
}

/**
 * The grid styling cluster (colour parity Build D, ADR-0055; width + type ADR-0070 addendum 6)
 * shared by the X-Karte and the Y cards — rendered only while the axis' splitlines switch is on
 * (the zoom-idle precedent: dependent controls render under their switch); values persist when
 * the grid goes back off. Colour swatch inherit = the theme's divider token; width/type unset =
 * no emit (echarts default 1px solid) so the raw override keeps owning the absent leaves.
 */
const GridStyleFields: FC<GridStyleFieldsProps> = ({ color, width, lineType, dividerColor, ctx, onChange }) => (
    <FieldGrid
        sx={{ mb: 1.5 }}
        min={110}
    >
        <Box>
            <FieldLabel>{Generic.t('echarts_axis_grid_color')}</FieldLabel>
            <ColorField
                value={color}
                fallback={dividerColor}
                onChange={v => onChange({ gridColor: v ?? undefined })}
                ctx={ctx}
            />
        </Box>
        <OptionalNumberField
            label={Generic.t('echarts_axis_grid_width')}
            value={width}
            onChange={v => onChange({ gridWidth: v })}
        />
        <LabeledSelect
            label={Generic.t('echarts_axis_grid_type')}
            value={lineType ?? ''}
            onChange={v => onChange({ gridType: (v || undefined) as EchartsLineStyle })}
            options={[
                ['', Generic.t('echarts_axis_grid_type_default')],
                ['solid', Generic.t('echarts_style_solid')],
                ['dashed', Generic.t('echarts_style_dashed')],
                ['dotted', Generic.t('echarts_style_dotted')],
            ]}
        />
    </FieldGrid>
);

export default GridStyleFields;
