/**
 * Palette section (Farben): color mode + accent + surface colours.
 *
 * @module ThemeConfigWizard/sections/PaletteSection
 * @remarks
 * The hero colour controls (ADR-0020). Each field shows the effective (resolved) colour —
 * primary defaults to MUI's mode-aware value, secondary defaults to the derived (triadic)
 * value and is labeled "· derived" until set manually. The surface group (background
 * default/paper + divider) lives here since ADR-0020 — the surfaces are the dark-mode
 * lever and do not belong in an "advanced" grab-bag. The colour mode defaults to "Auto"
 * (follow the vis-2 host); when Auto, the effective host mode is shown beneath the toggle.
 * Validation errors render at the field via `errorFor`.
 */

import { Box, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import type React from 'react';

import ColorPickerField from '../../components/ColorPickerField';
import { FieldLabel, SubGroup } from '../../components/controls';
import Generic from '../../Generic';
import type { StudioSectionProps } from '../../lib/theme/themeTypes';
import { getNestedValue } from '../../lib/theme/themeUtils';
import StudioSection from './StudioSection';

/** One colour slot in a group. */
interface ColorFieldDef {
    path: string;
    labelKey: string;
}

/** Accent slots (the hero palette controls). */
const ACCENT_FIELDS: ReadonlyArray<ColorFieldDef> = [
    { path: 'palette.primary.main', labelKey: 'theme_wizard_palette_primary' },
    { path: 'palette.secondary.main', labelKey: 'theme_wizard_palette_secondary' },
];

/** Surface slots (backgrounds + divider) — promoted from the old "Erweitert" (ADR-0020). */
const SURFACE_FIELDS: ReadonlyArray<ColorFieldDef> = [
    { path: 'palette.background.default', labelKey: 'theme_wizard_palette_background_default' },
    { path: 'palette.background.paper', labelKey: 'theme_wizard_palette_background_paper' },
    { path: 'palette.divider', labelKey: 'theme_wizard_palette_divider' },
];

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

    const renderField = (field: ColorFieldDef): React.JSX.Element => {
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
                presets={colorPresets}
                error={errorFor?.(field.path)}
            />
        );
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
        <StudioSection
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
            <SubGroup title={Generic.t('theme_studio_group_accents')}>{ACCENT_FIELDS.map(renderField)}</SubGroup>
            <SubGroup title={Generic.t('theme_studio_group_surface')}>{SURFACE_FIELDS.map(renderField)}</SubGroup>
        </StudioSection>
    );
}

export default PaletteSection;
