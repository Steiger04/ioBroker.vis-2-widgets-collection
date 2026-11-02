/**
 * Palette section (Farben): color mode + accent + surface colours.
 *
 * @module ThemeConfigWizard/sections/PaletteSection
 * @remarks
 * The hero colour controls (ADR-0020). Each field shows the effective (resolved) colour —
 * an unset field shows the colour the canvas widgets inherit from the editor theme; with a
 * primary set, an unset secondary shows the derived (triadic) value, labeled "· derived"
 * until set manually. The surface group (background
 * default/paper + divider) lives here since ADR-0020 — the surfaces are the dark-mode
 * lever and do not belong in an "advanced" grab-bag. The colour mode defaults to "Auto"
 * (follow the vis-2 host); when Auto, the effective host mode is shown beneath the toggle.
 * Validation errors render at the field via `errorFor`. The accent and surface groups come
 * from the colour-field registry (shared renderer {@link module:ThemeConfigWizard/sections/ColorFieldGroups}).
 */

import { Box, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import type React from 'react';

import SectionCard from '../../components/SectionCard';
import { FieldLabel } from '../../components/controls';
import Generic from '../../Generic';
import type { StudioSectionProps } from '../../lib/theme/themeTypes';
import { getNestedValue } from '../../lib/theme/themeUtils';
import ColorFieldGroups from './ColorFieldGroups';

/** Palette section: color mode + accent and surface slots. */
function PaletteSection({
    theme,
    onChange,
    resolved,
    errorFor,
    colorPresets,
    expanded,
    onExpandedChange,
}: StudioSectionProps): React.JSX.Element {
    const mode = getNestedValue<string>(theme, 'palette.mode');
    const modeValue = mode === 'light' || mode === 'dark' ? mode : 'auto';
    const effectiveMode = resolved?.palette.mode === 'dark' ? 'dark' : 'light';

    const handleModeChange = (_event: React.MouseEvent<HTMLElement>, value: string | null): void => {
        onChange('palette.mode', value === 'light' || value === 'dark' ? value : undefined);
    };

    // Summary: mode + the two effective accent colours.
    const summary = `${Generic.t(
        modeValue === 'auto'
            ? 'theme_wizard_palette_mode_auto'
            : effectiveMode === 'dark'
              ? 'theme_wizard_palette_mode_dark'
              : 'theme_wizard_palette_mode_light',
    )} · ${getNestedValue<string>(resolved, 'palette.primary.main') ?? ''} / ${
        getNestedValue<string>(resolved, 'palette.secondary.main') ?? ''
    }`;

    return (
        <SectionCard
            title={Generic.t('theme_wizard_section_palette')}
            summary={summary}
            expanded={expanded}
            onExpandedChange={onExpandedChange}
        >
            <Box sx={{ mb: 2 }}>
                <FieldLabel>{Generic.t('theme_wizard_palette_mode')}</FieldLabel>
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
            <ColorFieldGroups
                section="palette"
                theme={theme}
                onChange={onChange}
                resolved={resolved}
                errorFor={errorFor}
                colorPresets={colorPresets}
            />
        </SectionCard>
    );
}

export default PaletteSection;
