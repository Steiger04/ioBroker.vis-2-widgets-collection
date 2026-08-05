/**
 * "Erweitert" section: layout + CSS variables (ADR-0020).
 *
 * @module ThemeConfigWizard/sections/ErweitertSection
 * @remarks
 * What's left after ADR-0020's regrouping: the palette grab-bag moved out — surface
 * colours went to Farben, status & text colours got their own section — so this
 * section now holds exactly the rarely-tuned machinery: text direction, the spacing
 * base factor, and the CSS-variables switch with its prefix. Rebuilt on the shared
 * control kit (`SubGroup`, `SwitchRow`, `SliderField`, `FieldLabel`); the help hints
 * stay where they were. Collapsed by default, with a one-line summary.
 */

import { Box, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import type React from 'react';

import HelpHint from '../../components/HelpHint';
import { FieldLabel, SliderField, SubGroup, SwitchList, SwitchRow, TextField2 } from '../../components/controls';
import Generic from '../../Generic';
import type { StudioSectionProps } from '../../lib/theme/themeTypes';
import { getNestedValue } from '../../lib/theme/themeUtils';
import StudioSection from './StudioSection';

/** "Erweitert" section: direction + spacing + CSS vars. */
function ErweitertSection({ theme, onChange, expanded, onExpandedChange }: StudioSectionProps): React.JSX.Element {
    const spacing = getNestedValue<number>(theme, 'spacing') ?? 8;
    const direction = getNestedValue<string>(theme, 'direction');
    const cssVariables = getNestedValue<unknown>(theme, 'cssVariables');
    const cssEnabled = cssVariables === true || (typeof cssVariables === 'object' && cssVariables !== null);
    const cssPrefix = getNestedValue<string>(theme, 'cssVariables.cssVarPrefix') ?? '';

    const handleDirectionChange = (_event: React.MouseEvent<HTMLElement>, value: string | null): void => {
        onChange('direction', value ?? undefined);
    };

    const handleCssToggle = (checked: boolean): void => {
        onChange('cssVariables', checked ? true : undefined);
    };

    const handlePrefixChange = (value: string): void => {
        onChange('cssVariables', value ? { cssVarPrefix: value } : true);
    };

    // Summary: direction · spacing factor · CSS-vars state.
    const summary = `${direction === 'rtl' ? 'RTL' : 'LTR'} · ${spacing}px · ${Generic.t(
        cssEnabled ? 'theme_studio_on' : 'theme_studio_off',
    )}`;

    return (
        <StudioSection
            title={Generic.t('theme_studio_section_advanced')}
            summary={summary}
            expanded={expanded}
            onExpandedChange={onExpandedChange}
        >
            <SubGroup title={Generic.t('theme_studio_group_layout')}>
                <Box sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <FieldLabel>{Generic.t('theme_wizard_layout_direction')}</FieldLabel>
                        <HelpHint title={Generic.t('theme_studio_help_direction')} />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <ToggleButtonGroup
                            exclusive
                            size="small"
                            value={direction === 'rtl' ? 'rtl' : 'ltr'}
                            onChange={handleDirectionChange}
                        >
                            <ToggleButton value="ltr">{Generic.t('theme_wizard_layout_direction_ltr')}</ToggleButton>
                            <ToggleButton value="rtl">{Generic.t('theme_wizard_layout_direction_rtl')}</ToggleButton>
                        </ToggleButtonGroup>
                        {direction === undefined ? (
                            <Typography
                                variant="caption"
                                color="text.secondary"
                            >
                                {Generic.t('theme_studio_default_value')}
                            </Typography>
                        ) : null}
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 0.5 }}>
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                        <SliderField
                            label={Generic.t('theme_wizard_layout_spacing')}
                            value={spacing}
                            min={0}
                            max={16}
                            step={0.5}
                            onChange={value => onChange('spacing', value)}
                        />
                    </Box>
                    <Box sx={{ pt: '18px' }}>
                        <HelpHint title={Generic.t('theme_studio_help_spacing')} />
                    </Box>
                </Box>
            </SubGroup>
            <SubGroup title={Generic.t('theme_studio_group_css')}>
                <SwitchList>
                    <SwitchRow
                        label={Generic.t('theme_wizard_css_variables_enable')}
                        checked={cssEnabled}
                        onChange={handleCssToggle}
                    />
                </SwitchList>
                {cssEnabled ? (
                    <Box sx={{ mt: 1.5, display: 'flex', alignItems: 'flex-start', gap: 0.5 }}>
                        <Box sx={{ flex: 1, minWidth: 0 }}>
                            <TextField2
                                label={Generic.t('theme_wizard_css_var_prefix')}
                                value={cssPrefix}
                                onChange={handlePrefixChange}
                            />
                        </Box>
                        <Box sx={{ pt: '18px' }}>
                            <HelpHint title={Generic.t('theme_studio_help_css_vars')} />
                        </Box>
                    </Box>
                ) : (
                    <Box sx={{ mt: 0.5, display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <Typography
                            variant="caption"
                            color="text.secondary"
                            sx={{ flex: 1, minWidth: 0 }}
                        >
                            {Generic.t('theme_studio_help_css_vars')}
                        </Typography>
                    </Box>
                )}
            </SubGroup>
        </StudioSection>
    );
}

export default ErweitertSection;
