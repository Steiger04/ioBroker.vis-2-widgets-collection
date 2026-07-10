/**
 * Typography section of the structured theme form.
 *
 * @module ThemeConfigWizard/sections/TypographySection
 */

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Slider,
    Stack,
    TextField,
    Typography,
} from '@mui/material';
import type { SelectChangeEvent } from '@mui/material';
import type React from 'react';

import Generic from '../../Generic';
import type { ThemeFormSectionProps } from '../../lib/theme/themeTypes';
import { getNestedValue } from '../../lib/theme/themeUtils';

/** Selectable CSS font weights. */
const FONT_WEIGHTS = [100, 200, 300, 400, 500, 600, 700, 800, 900];

/** Font-weight fields rendered as selects, in display order. */
const WEIGHT_FIELDS: ReadonlyArray<{ path: string; labelKey: string }> = [
    { path: 'typography.fontWeightLight', labelKey: 'theme_wizard_typography_weight_light' },
    { path: 'typography.fontWeightRegular', labelKey: 'theme_wizard_typography_weight_regular' },
    { path: 'typography.fontWeightMedium', labelKey: 'theme_wizard_typography_weight_medium' },
    { path: 'typography.fontWeightBold', labelKey: 'theme_wizard_typography_weight_bold' },
];

/** Typography section: font family, base sizes and weights. */
function TypographySection({ theme, onChange, defaultExpanded }: ThemeFormSectionProps): React.JSX.Element {
    const fontSize = getNestedValue<number>(theme, 'typography.fontSize') ?? 14;
    const htmlFontSize = getNestedValue<number>(theme, 'typography.htmlFontSize') ?? 16;

    return (
        <Accordion defaultExpanded={defaultExpanded ?? false}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{Generic.t('theme_wizard_section_typography')}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Stack spacing={2}>
                    <TextField
                        fullWidth
                        size="small"
                        label={Generic.t('theme_wizard_typography_font_family')}
                        value={getNestedValue<string>(theme, 'typography.fontFamily') ?? ''}
                        onChange={event => onChange('typography.fontFamily', event.target.value || undefined)}
                    />
                    <Box>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            gutterBottom
                        >
                            {Generic.t('theme_wizard_typography_font_size')}: {fontSize}
                        </Typography>
                        <Slider
                            value={fontSize}
                            min={8}
                            max={24}
                            step={0.5}
                            valueLabelDisplay="auto"
                            onChange={(_event, value) => onChange('typography.fontSize', value)}
                        />
                    </Box>
                    <Box>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            gutterBottom
                        >
                            {Generic.t('theme_wizard_typography_html_font_size')}: {htmlFontSize}
                        </Typography>
                        <Slider
                            value={htmlFontSize}
                            min={8}
                            max={32}
                            step={1}
                            valueLabelDisplay="auto"
                            onChange={(_event, value) => onChange('typography.htmlFontSize', value)}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {WEIGHT_FIELDS.map(field => {
                            const weight = getNestedValue<number>(theme, field.path);
                            return (
                                <FormControl
                                    key={field.path}
                                    size="small"
                                    sx={{ flex: '1 1 140px', minWidth: 140 }}
                                >
                                    <InputLabel>{Generic.t(field.labelKey)}</InputLabel>
                                    <Select
                                        label={Generic.t(field.labelKey)}
                                        value={weight === undefined ? '' : String(weight)}
                                        onChange={(event: SelectChangeEvent) =>
                                            onChange(
                                                field.path,
                                                event.target.value === '' ? undefined : Number(event.target.value),
                                            )
                                        }
                                    >
                                        <MenuItem value="">&mdash;</MenuItem>
                                        {FONT_WEIGHTS.map(value => (
                                            <MenuItem
                                                key={value}
                                                value={String(value)}
                                            >
                                                {value}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            );
                        })}
                    </Box>
                </Stack>
            </AccordionDetails>
        </Accordion>
    );
}

export default TypographySection;
