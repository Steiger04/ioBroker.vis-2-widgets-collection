/**
 * Layout section of the structured theme form.
 *
 * @module ThemeConfigWizard/sections/LayoutSection
 */

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Slider,
    Stack,
    ToggleButton,
    ToggleButtonGroup,
    Typography,
} from '@mui/material';
import type React from 'react';

import Generic from '../../Generic';
import type { ThemeFormSectionProps } from '../../lib/theme/themeTypes';
import { getNestedValue } from '../../lib/theme/themeUtils';

/** Layout section: border radius, text direction and spacing factor. */
function LayoutSection({ theme, onChange, defaultExpanded }: ThemeFormSectionProps): React.JSX.Element {
    const borderRadius = getNestedValue<number>(theme, 'shape.borderRadius') ?? 4;
    const spacing = getNestedValue<number>(theme, 'spacing') ?? 8;
    const direction = getNestedValue<string>(theme, 'direction');

    const handleDirectionChange = (_event: React.MouseEvent<HTMLElement>, value: string | null): void => {
        onChange('direction', value ?? undefined);
    };

    return (
        <Accordion defaultExpanded={defaultExpanded ?? false}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{Generic.t('theme_wizard_section_layout')}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Stack spacing={2}>
                    <Box>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            gutterBottom
                        >
                            {Generic.t('theme_wizard_layout_border_radius')}: {borderRadius}
                        </Typography>
                        <Slider
                            value={borderRadius}
                            min={0}
                            max={32}
                            step={0.5}
                            valueLabelDisplay="auto"
                            onChange={(_event, value) => onChange('shape.borderRadius', value)}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ flexShrink: 0 }}
                        >
                            {Generic.t('theme_wizard_layout_direction')}
                        </Typography>
                        <ToggleButtonGroup
                            exclusive
                            size="small"
                            value={direction === 'ltr' || direction === 'rtl' ? direction : null}
                            onChange={handleDirectionChange}
                        >
                            <ToggleButton value="ltr">{Generic.t('theme_wizard_layout_direction_ltr')}</ToggleButton>
                            <ToggleButton value="rtl">{Generic.t('theme_wizard_layout_direction_rtl')}</ToggleButton>
                        </ToggleButtonGroup>
                    </Box>
                    <Box>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            gutterBottom
                        >
                            {Generic.t('theme_wizard_layout_spacing')}: {spacing}
                        </Typography>
                        <Slider
                            value={spacing}
                            min={0}
                            max={16}
                            step={0.5}
                            valueLabelDisplay="auto"
                            onChange={(_event, value) => onChange('spacing', value)}
                        />
                    </Box>
                </Stack>
            </AccordionDetails>
        </Accordion>
    );
}

export default LayoutSection;
