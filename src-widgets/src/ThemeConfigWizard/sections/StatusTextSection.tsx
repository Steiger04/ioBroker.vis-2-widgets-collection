/**
 * Status & Text section: semantic status colours + text colours (ADR-0020).
 *
 * @module ThemeConfigWizard/sections/StatusTextSection
 * @remarks
 * The non-hero palette slots, split out of the old "Erweitert" grab-bag into their own
 * intent-named section: status colours (error/warning/info/success) and text colours
 * (primary/secondary). Each field shows the effective (resolved) value — MUI's mode-aware
 * default — until the user overrides it; validation errors render at the field. The
 * collapsed summary reports how many of the six slots carry an explicit override.
 */

import type React from 'react';

import ColorPickerField from '../../components/ColorPickerField';
import SectionCard from '../../components/SectionCard';
import { SubGroup } from '../../components/controls';
import Generic from '../../Generic';
import type { StudioSectionProps } from '../../lib/theme/themeTypes';
import { getNestedValue } from '../../lib/theme/themeUtils';

/** One colour slot in a group. */
interface ColorFieldDef {
    path: string;
    labelKey: string;
}

/** Status slots (MUI semantic colours). */
const STATUS_FIELDS: ReadonlyArray<ColorFieldDef> = [
    { path: 'palette.error.main', labelKey: 'theme_wizard_palette_error' },
    { path: 'palette.warning.main', labelKey: 'theme_wizard_palette_warning' },
    { path: 'palette.info.main', labelKey: 'theme_wizard_palette_info' },
    { path: 'palette.success.main', labelKey: 'theme_wizard_palette_success' },
];

/** Text slots. */
const TEXT_FIELDS: ReadonlyArray<ColorFieldDef> = [
    { path: 'palette.text.primary', labelKey: 'theme_wizard_palette_text_primary' },
    { path: 'palette.text.secondary', labelKey: 'theme_wizard_palette_text_secondary' },
];

const ALL_FIELDS: ReadonlyArray<ColorFieldDef> = [...STATUS_FIELDS, ...TEXT_FIELDS];

/** Status & Text section: semantic + text colour slots. */
function StatusTextSection({
    theme,
    onChange,
    resolved,
    errorFor,
    colorPresets,
    expanded,
    onExpandedChange,
}: StudioSectionProps): React.JSX.Element {
    const renderField = (field: ColorFieldDef): React.JSX.Element => {
        const stored = getNestedValue<string>(theme, field.path);
        const resolvedValue = resolved ? (getNestedValue<string>(resolved, field.path) ?? '') : '';
        return (
            <ColorPickerField
                key={field.path}
                label={Generic.t(field.labelKey)}
                value={stored ?? resolvedValue}
                overridden={stored !== undefined}
                onChange={color => onChange(field.path, color || undefined)}
                presets={colorPresets}
                error={errorFor?.(field.path)}
            />
        );
    };

    // Summary: how many of the slots carry an explicit override.
    const overrideCount = ALL_FIELDS.filter(field => getNestedValue<string>(theme, field.path) !== undefined).length;
    const summary = Generic.t('theme_studio_summary_set', String(overrideCount), String(ALL_FIELDS.length));

    return (
        <SectionCard
            title={Generic.t('theme_studio_section_status_text')}
            summary={summary}
            expanded={expanded}
            onExpandedChange={onExpandedChange}
        >
            <SubGroup title={Generic.t('theme_studio_group_status')}>{STATUS_FIELDS.map(renderField)}</SubGroup>
            <SubGroup title={Generic.t('theme_studio_group_text')}>{TEXT_FIELDS.map(renderField)}</SubGroup>
        </SectionCard>
    );
}

export default StatusTextSection;
