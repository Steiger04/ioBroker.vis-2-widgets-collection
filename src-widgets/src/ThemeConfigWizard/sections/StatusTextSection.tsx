/**
 * Status & Text section: semantic status colours + text colours (ADR-0020).
 *
 * @module ThemeConfigWizard/sections/StatusTextSection
 * @remarks
 * The non-hero palette slots, split out of the old "Erweitert" grab-bag into their own
 * intent-named section: status colours (error/warning/info/success) and text colours
 * (primary/secondary). Each field shows the effective (resolved) value — the colour the canvas
 * widgets inherit from the editor theme — until the user overrides it; validation errors
 * render at the field. The
 * collapsed summary reports how many of the six slots carry an explicit override.
 */

import type React from 'react';

import SectionCard from '../../components/SectionCard';
import Generic from '../../Generic';
import type { StudioSectionProps } from '../../lib/theme/themeTypes';
import { getNestedValue } from '../../lib/theme/themeUtils';
import { colorFieldsOfSection } from '../studioColorFields';
import ColorFieldGroups from './ColorFieldGroups';

/** The section's colour fields (status + text), from the registry. */
const SECTION_FIELDS = colorFieldsOfSection('statusText');

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
    // Summary: how many of the slots carry an explicit override.
    const overrideCount = SECTION_FIELDS.filter(
        field => getNestedValue<string>(theme, field.path) !== undefined,
    ).length;
    const summary = Generic.t('theme_studio_summary_set', String(overrideCount), String(SECTION_FIELDS.length));

    return (
        <SectionCard
            title={Generic.t('theme_studio_section_status_text')}
            summary={summary}
            expanded={expanded}
            onExpandedChange={onExpandedChange}
        >
            <ColorFieldGroups
                section="statusText"
                theme={theme}
                onChange={onChange}
                resolved={resolved}
                errorFor={errorFor}
                colorPresets={colorPresets}
            />
        </SectionCard>
    );
}

export default StatusTextSection;
