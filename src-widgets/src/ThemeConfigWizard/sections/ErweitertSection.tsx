/**
 * "Erweitert" section: layout + CSS variables (ADR-0020).
 *
 * @module ThemeConfigWizard/sections/ErweitertSection
 * @remarks
 * What's left after ADR-0020's regrouping: the palette grab-bag moved out — surface
 * colours went to Farben, status & text colours got their own section — so this
 * section now holds exactly the rarely-tuned machinery: the spacing base factor and the
 * CSS-variables switch with its prefix. The text direction toggle is gone (spec B16): it only set
 * `theme.direction`, which mirrors nothing without a `dir` attribute and an RTL style plugin; a
 * stored `direction` stays valid in the schema. Rebuilt on the shared control kit (`SubGroup`,
 * `SwitchRow`, `SliderField`, `InfoBox`); the CSS-variables explanation is one info box in both
 * switch states. Collapsed by default, with a one-line summary.
 */

import { Box } from '@mui/material';
import type React from 'react';

import HelpHint from '../../components/HelpHint';
import SectionCard from '../../components/SectionCard';
import { InfoBox, SliderField, SubGroup, SwitchList, SwitchRow, TextField2 } from '../../components/controls';
import Generic from '../../Generic';
import { COLLECTION_CSS_VAR_PREFIX } from '../../lib/theme/resolveCollectionTheme';
import type { StudioSectionProps } from '../../lib/theme/themeTypes';
import { getNestedValue } from '../../lib/theme/themeUtils';

/** "Erweitert" section: spacing + CSS vars. */
function ErweitertSection({
    theme,
    onChange,
    expanded,
    onExpandedChange,
    errorFor,
}: StudioSectionProps): React.JSX.Element {
    const spacing = getNestedValue<number>(theme, 'spacing') ?? 8;
    const cssVariables = getNestedValue<unknown>(theme, 'cssVariables');
    const cssEnabled = cssVariables === true || (typeof cssVariables === 'object' && cssVariables !== null);
    const cssPrefix = getNestedValue<string>(theme, 'cssVariables.cssVarPrefix') ?? '';
    const prefixError = errorFor?.('cssVariables.cssVarPrefix');

    const handleCssToggle = (checked: boolean): void => {
        onChange('cssVariables', checked ? true : undefined);
    };

    const handlePrefixChange = (value: string): void => {
        onChange('cssVariables', value ? { cssVarPrefix: value } : true);
    };

    // Summary: spacing factor · CSS-vars state.
    const summary = `${spacing}px · ${Generic.t(cssEnabled ? 'theme_studio_on' : 'theme_studio_off')}`;

    return (
        <SectionCard
            title={Generic.t('theme_studio_section_advanced')}
            summary={summary}
            expanded={expanded}
            onExpandedChange={onExpandedChange}
        >
            <SubGroup title={Generic.t('theme_studio_group_layout')}>
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
                {/* One explanation in both states: it tells whether the switch is needed at all. */}
                <InfoBox text={Generic.t('theme_studio_help_css_vars')} />
                {cssEnabled ? (
                    <Box
                        sx={{ mt: 1.5 }}
                        // Scroll-to-error target, like the colour fields.
                        data-theme-error={prefixError ? true : undefined}
                    >
                        <TextField2
                            label={Generic.t('theme_wizard_css_var_prefix')}
                            value={cssPrefix}
                            placeholder={COLLECTION_CSS_VAR_PREFIX}
                            onChange={handlePrefixChange}
                            error={Boolean(prefixError)}
                            helperText={prefixError}
                        />
                    </Box>
                ) : null}
            </SubGroup>
        </SectionCard>
    );
}

export default ErweitertSection;
