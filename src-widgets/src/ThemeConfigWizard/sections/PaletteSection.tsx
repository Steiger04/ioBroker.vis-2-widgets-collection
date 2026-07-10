/**
 * Palette section of the structured theme form.
 *
 * @module ThemeConfigWizard/sections/PaletteSection
 * @remarks
 * Color mode toggle plus the commonly-themed palette color slots. Each slot is
 * bound to a nested path (e.g. `palette.primary.main`) via the shared
 * ColorPickerField; clearing a color prunes its path back to a clean object.
 */

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    ToggleButton,
    ToggleButtonGroup,
    Typography,
} from '@mui/material';
import type React from 'react';

import ColorPickerField from '../../components/ColorPickerField';
import Generic from '../../Generic';
import type { ThemeFormSectionProps } from '../../lib/theme/themeTypes';
import { getNestedValue } from '../../lib/theme/themeUtils';

/** Color fields rendered as pickers, in display order. */
const COLOR_FIELDS: ReadonlyArray<{ path: string; labelKey: string }> = [
    { path: 'palette.primary.main', labelKey: 'theme_wizard_palette_primary' },
    { path: 'palette.secondary.main', labelKey: 'theme_wizard_palette_secondary' },
    { path: 'palette.error.main', labelKey: 'theme_wizard_palette_error' },
    { path: 'palette.warning.main', labelKey: 'theme_wizard_palette_warning' },
    { path: 'palette.info.main', labelKey: 'theme_wizard_palette_info' },
    { path: 'palette.success.main', labelKey: 'theme_wizard_palette_success' },
    { path: 'palette.text.primary', labelKey: 'theme_wizard_palette_text_primary' },
    { path: 'palette.text.secondary', labelKey: 'theme_wizard_palette_text_secondary' },
    { path: 'palette.background.default', labelKey: 'theme_wizard_palette_background_default' },
    { path: 'palette.background.paper', labelKey: 'theme_wizard_palette_background_paper' },
    { path: 'palette.divider', labelKey: 'theme_wizard_palette_divider' },
];

/** Palette section: color mode + color slots. */
function PaletteSection({ theme, onChange, defaultExpanded }: ThemeFormSectionProps): React.JSX.Element {
    const mode = getNestedValue<string>(theme, 'palette.mode');
    const modeValue = mode === 'light' || mode === 'dark' ? mode : 'auto';

    const handleModeChange = (_event: React.MouseEvent<HTMLElement>, value: string | null): void => {
        onChange('palette.mode', value === 'light' || value === 'dark' ? value : undefined);
    };

    return (
        <Accordion defaultExpanded={defaultExpanded ?? true}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{Generic.t('theme_wizard_section_palette')}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ flexShrink: 0 }}
                    >
                        {Generic.t('theme_wizard_palette_mode')}
                    </Typography>
                    <ToggleButtonGroup
                        exclusive
                        size="small"
                        value={modeValue}
                        onChange={handleModeChange}
                    >
                        <ToggleButton value="light">{Generic.t('theme_wizard_palette_mode_light')}</ToggleButton>
                        <ToggleButton value="dark">{Generic.t('theme_wizard_palette_mode_dark')}</ToggleButton>
                        <ToggleButton value="auto">{Generic.t('theme_wizard_palette_mode_auto')}</ToggleButton>
                    </ToggleButtonGroup>
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {COLOR_FIELDS.map(field => (
                        <Box
                            key={field.path}
                            sx={{ flex: '1 1 220px' }}
                        >
                            <ColorPickerField
                                label={Generic.t(field.labelKey)}
                                value={getNestedValue<string>(theme, field.path) ?? ''}
                                onChange={color => onChange(field.path, color || undefined)}
                            />
                        </Box>
                    ))}
                </Box>
            </AccordionDetails>
        </Accordion>
    );
}

export default PaletteSection;
