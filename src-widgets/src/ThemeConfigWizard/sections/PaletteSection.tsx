/**
 * Palette section (Farben): color mode + primary/secondary accent.
 *
 * @module ThemeConfigWizard/sections/PaletteSection
 * @remarks
 * The hero color controls. Each field shows the effective (resolved) color —
 * primary defaults to MUI's mode-aware value, secondary defaults to the derived
 * (triadic) value and is labeled "· abgeleitet" until set manually. The color
 * mode defaults to "Auto" (follow the vis-2 host); when Auto, the effective host
 * mode is shown beneath the toggle so the control explains itself. Fields stack
 * vertically so their swatches align (ColorPickerField uses a 1fr/auto grid).
 */

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Stack,
    ToggleButton,
    ToggleButtonGroup,
    Typography,
} from '@mui/material';
import type React from 'react';

import ColorPickerField from '../../components/ColorPickerField';
import Generic from '../../Generic';
import type { ThemeFormSectionProps } from '../../lib/theme/themeTypes';
import { getNestedValue } from '../../lib/theme/themeUtils';

/** Accent color slots rendered as pickers (the hero palette controls). */
const COLOR_FIELDS: ReadonlyArray<{ path: string; labelKey: string }> = [
    { path: 'palette.primary.main', labelKey: 'theme_wizard_palette_primary' },
    { path: 'palette.secondary.main', labelKey: 'theme_wizard_palette_secondary' },
];

/** Palette section: color mode + accent slots. */
function PaletteSection({ theme, onChange, defaultExpanded, resolved }: ThemeFormSectionProps): React.JSX.Element {
    const mode = getNestedValue<string>(theme, 'palette.mode');
    const modeValue = mode === 'light' || mode === 'dark' ? mode : 'auto';
    const effectiveMode = resolved?.palette.mode === 'dark' ? 'dark' : 'light';

    const handleModeChange = (_event: React.MouseEvent<HTMLElement>, value: string | null): void => {
        onChange('palette.mode', value === 'light' || value === 'dark' ? value : undefined);
    };

    return (
        <Accordion defaultExpanded={defaultExpanded ?? true}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{Generic.t('theme_wizard_section_palette')}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Stack spacing={1.5}>
                    <Box>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ display: 'block', mb: 0.5 }}
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
                        {modeValue === 'auto' ? (
                            <Typography
                                variant="caption"
                                color="text.secondary"
                                sx={{ display: 'block', mt: 0.5 }}
                            >
                                {Generic.t('theme_studio_mode_follows')}:{' '}
                                {Generic.t(
                                    effectiveMode === 'dark'
                                        ? 'theme_wizard_palette_mode_dark'
                                        : 'theme_wizard_palette_mode_light',
                                )}
                            </Typography>
                        ) : null}
                    </Box>
                    <Box>
                        {COLOR_FIELDS.map(field => {
                            const stored = getNestedValue<string>(theme, field.path);
                            const resolvedValue = resolved ? (getNestedValue<string>(resolved, field.path) ?? '') : '';
                            const isDerivedSecondary = field.path === 'palette.secondary.main' && !stored;
                            const label = isDerivedSecondary
                                ? `${Generic.t(field.labelKey)} · ${Generic.t('theme_studio_secondary_derived')}`
                                : Generic.t(field.labelKey);
                            return (
                                <ColorPickerField
                                    key={field.path}
                                    label={label}
                                    value={stored ?? resolvedValue}
                                    overridden={stored !== undefined}
                                    onChange={color => onChange(field.path, color || undefined)}
                                />
                            );
                        })}
                    </Box>
                </Stack>
            </AccordionDetails>
        </Accordion>
    );
}

export default PaletteSection;
