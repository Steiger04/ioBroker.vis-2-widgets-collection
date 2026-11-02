/**
 * Shared renderer of a studio section's colour groups (spec A4).
 *
 * @module ThemeConfigWizard/sections/ColorFieldGroups
 * @remarks
 * Renders every colour group of one section from the field registry
 * ({@link module:ThemeConfigWizard/studioColorFields}): a `SubGroup` per group, a
 * `ColorPickerField` per field. Each field shows the effective (resolved) colour until the user
 * overrides it — the colour the canvas widgets inherit from the editor theme — and its
 * validation error at the field.
 */

import type React from 'react';

import ColorPickerField from '../../components/ColorPickerField';
import { SubGroup } from '../../components/controls';
import Generic from '../../Generic';
import type { StudioSectionProps } from '../../lib/theme/themeTypes';
import { getNestedValue } from '../../lib/theme/themeUtils';
import {
    STUDIO_COLOR_GROUPS,
    colorFieldsOfGroup,
    type StudioColorField,
    type StudioColorSection,
} from '../studioColorFields';

/** Props for {@link ColorFieldGroups}. */
type ColorFieldGroupsProps = Pick<
    StudioSectionProps,
    'theme' | 'onChange' | 'resolved' | 'errorFor' | 'colorPresets'
> & {
    /** Section whose colour groups to render. */
    section: StudioColorSection;
};

/** Renders the colour groups of one studio section. */
function ColorFieldGroups({
    section,
    theme,
    onChange,
    resolved,
    errorFor,
    colorPresets,
}: ColorFieldGroupsProps): React.JSX.Element {
    const renderField = (field: StudioColorField): React.JSX.Element => {
        const stored = getNestedValue<string>(theme, field.path);
        const resolvedValue = resolved ? (getNestedValue<string>(resolved, field.path) ?? '') : '';
        const label =
            field.markerKey && !stored
                ? `${Generic.t(field.labelKey)} · ${Generic.t(field.markerKey)}`
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

    return (
        <>
            {STUDIO_COLOR_GROUPS.filter(group => group.section === section).map(group => (
                <SubGroup
                    key={group.key}
                    title={Generic.t(group.titleKey)}
                >
                    {colorFieldsOfGroup(group.key).map(renderField)}
                </SubGroup>
            ))}
        </>
    );
}

export default ColorFieldGroups;
