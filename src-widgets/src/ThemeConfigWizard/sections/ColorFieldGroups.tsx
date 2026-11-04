/**
 * Shared renderer of a studio section's colour groups (spec A4).
 *
 * @module ThemeConfigWizard/sections/ColorFieldGroups
 * @remarks
 * Renders every colour group of one section from the field registry
 * ({@link module:ThemeConfigWizard/studioColorFields}): a `SubGroup` per group, a
 * `ColorPickerField` per field. Each field shows the effective (resolved) colour until the user
 * overrides it — the colour the canvas widgets inherit from the editor theme — as swatch and as
 * editable hex text, and its validation error at the field. The swatch always shows the
 * resolution (the canvas colour), also for a stored value the resolution drops; the hex text
 * shows the stored value then. A derived field carries its marker ("derived from primary",
 * "follows primary") while the resolution derives it, and every field a `HelpHint` naming where
 * the colour shows up.
 */

import type React from 'react';

import ColorPickerField from '../../components/ColorPickerField';
import { FieldWithHint, SubGroup } from '../../components/controls';
import Generic from '../../Generic';
import type { StudioSectionProps } from '../../lib/theme/themeTypes';
import { getNestedValue } from '../../lib/theme/themeUtils';
import {
    STUDIO_COLOR_GROUPS,
    colorFieldsOfGroup,
    derivationMarkerKey,
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

/**
 * A colour as the hex text shows it: hex in lower case, whether inherited (the editor theme
 * writes upper case) or set — other notations (`rgb()`, names) as they are.
 */
const displayColor = (color: string): string => (/^#[0-9a-f]+$/i.test(color) ? color.toLowerCase() : color);

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
        const markerKey = derivationMarkerKey(field, theme, resolved);
        const label = markerKey ? `${Generic.t(field.labelKey)} · ${Generic.t(markerKey)}` : Generic.t(field.labelKey);
        // The hint sits outside the picker row: a click on it must not open the picker.
        return (
            <FieldWithHint
                key={field.path}
                hint={Generic.t(field.hintKey)}
                captioned={false}
            >
                <ColorPickerField
                    label={label}
                    value={displayColor(stored ?? resolvedValue)}
                    // The swatch shows what the canvas paints (the resolution), even when it
                    // drops a stored value; the hex text keeps the stored one to fix it.
                    swatchValue={resolved ? resolvedValue : undefined}
                    overridden={stored !== undefined}
                    onChange={color => onChange(field.path, color || undefined)}
                    // Theme palette slots are solid colours (ADR-0020).
                    allowGradient={false}
                    presets={colorPresets}
                    error={errorFor?.(field.path)}
                    hexInput
                />
            </FieldWithHint>
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
