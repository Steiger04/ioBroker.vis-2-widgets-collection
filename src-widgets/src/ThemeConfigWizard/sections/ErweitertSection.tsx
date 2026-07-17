/**
 * "Erweitert" section: grouped extra palette tokens + layout + CSS variables.
 *
 * @module ThemeConfigWizard/sections/ErweitertSection
 * @remarks
 * Consolidates the rarely-tuned controls so the main view stays focused on the
 * accent-driven core (Farben) and Schrift & Form. Holds the non-hero palette
 * slots — status / text / surface colors, grouped with plain labels — plus text
 * direction, spacing factor, and CSS variables. Each color field shows the
 * effective (resolved) value (MUI's mode-aware default) until the user overrides
 * it. Fields stack vertically within each group so swatches align
 * (ColorPickerField uses a 1fr/auto grid). Collapsed by default.
 */

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    FormControlLabel,
    Slider,
    Stack,
    Switch,
    TextField,
    ToggleButton,
    ToggleButtonGroup,
    Typography,
} from '@mui/material';
import type React from 'react';

import ColorPickerField from '../../components/ColorPickerField';
import Generic from '../../Generic';
import type { ThemeFormSectionProps } from '../../lib/theme/themeTypes';
import { getNestedValue } from '../../lib/theme/themeUtils';

/** A labeled group of color slots. */
interface ColorGroup {
    /** i18n key for the group heading. */
    labelKey: string;
    /** Color fields in the group, in display order. */
    fields: ReadonlyArray<{ path: string; labelKey: string }>;
}

/** Non-hero palette slots, grouped (status / text / surface). */
const COLOR_GROUPS: ReadonlyArray<ColorGroup> = [
    {
        labelKey: 'theme_studio_group_status',
        fields: [
            { path: 'palette.error.main', labelKey: 'theme_wizard_palette_error' },
            { path: 'palette.warning.main', labelKey: 'theme_wizard_palette_warning' },
            { path: 'palette.info.main', labelKey: 'theme_wizard_palette_info' },
            { path: 'palette.success.main', labelKey: 'theme_wizard_palette_success' },
        ],
    },
    {
        labelKey: 'theme_studio_group_text',
        fields: [
            { path: 'palette.text.primary', labelKey: 'theme_wizard_palette_text_primary' },
            { path: 'palette.text.secondary', labelKey: 'theme_wizard_palette_text_secondary' },
        ],
    },
    {
        labelKey: 'theme_studio_group_surface',
        fields: [
            { path: 'palette.background.default', labelKey: 'theme_wizard_palette_background_default' },
            { path: 'palette.background.paper', labelKey: 'theme_wizard_palette_background_paper' },
            { path: 'palette.divider', labelKey: 'theme_wizard_palette_divider' },
        ],
    },
];

/** "Erweitert" section: grouped extra colors + direction + spacing + CSS vars. */
function ErweitertSection({ theme, onChange, defaultExpanded, resolved }: ThemeFormSectionProps): React.JSX.Element {
    const spacing = getNestedValue<number>(theme, 'spacing') ?? 8;
    const direction = getNestedValue<string>(theme, 'direction');
    const cssVariables = getNestedValue<unknown>(theme, 'cssVariables');
    const cssEnabled = cssVariables === true || (typeof cssVariables === 'object' && cssVariables !== null);
    const cssPrefix = getNestedValue<string>(theme, 'cssVariables.cssVarPrefix') ?? '';

    const handleDirectionChange = (_event: React.MouseEvent<HTMLElement>, value: string | null): void => {
        onChange('direction', value ?? undefined);
    };

    const handleSpacingChange = (_event: Event, value: number | number[]): void => {
        onChange('spacing', value);
    };

    const handleCssToggle = (_event: React.ChangeEvent<HTMLElement>, checked: boolean): void => {
        onChange('cssVariables', checked ? true : undefined);
    };

    const handlePrefixChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const value = event.target.value;
        onChange('cssVariables', value ? { cssVarPrefix: value } : true);
    };

    return (
        <Accordion defaultExpanded={defaultExpanded ?? false}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{Generic.t('theme_studio_section_advanced')}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Stack spacing={2}>
                    {COLOR_GROUPS.map(group => (
                        <Box key={group.labelKey}>
                            <Typography
                                variant="caption"
                                color="text.secondary"
                                sx={{ display: 'block', mb: 0.5 }}
                            >
                                {Generic.t(group.labelKey)}
                            </Typography>
                            <Box>
                                {group.fields.map(field => {
                                    const stored = getNestedValue<string>(theme, field.path);
                                    const resolvedValue = resolved
                                        ? (getNestedValue<string>(resolved, field.path) ?? '')
                                        : '';
                                    return (
                                        <ColorPickerField
                                            key={field.path}
                                            label={Generic.t(field.labelKey)}
                                            value={stored ?? resolvedValue}
                                            overridden={stored !== undefined}
                                            onChange={color => onChange(field.path, color || undefined)}
                                        />
                                    );
                                })}
                            </Box>
                        </Box>
                    ))}

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
                            onChange={handleSpacingChange}
                        />
                    </Box>

                    <Box>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={cssEnabled}
                                    onChange={handleCssToggle}
                                />
                            }
                            label={Generic.t('theme_wizard_css_variables_enable')}
                        />
                        {cssEnabled ? (
                            <TextField
                                fullWidth
                                size="small"
                                label={Generic.t('theme_wizard_css_var_prefix')}
                                value={cssPrefix}
                                onChange={handlePrefixChange}
                                sx={{ mt: 1 }}
                            />
                        ) : null}
                    </Box>
                </Stack>
            </AccordionDetails>
        </Accordion>
    );
}

export default ErweitertSection;
