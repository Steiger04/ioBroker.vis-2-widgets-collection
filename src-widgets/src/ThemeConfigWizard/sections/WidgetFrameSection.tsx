/**
 * "Widget-Rahmen" section: the Rahmenvorgaben of every Collection widget (ADR-0117).
 *
 * @module ThemeConfigWizard/sections/WidgetFrameSection
 * @remarks
 * Each frame setting of Allgemein (`commonFields`) gets one control here, grouped like Allgemein.
 * A setting without a Rahmenvorgabe shows the built-in standard, marked as such; a set one can be
 * reset on its own, back to the standard. The values live in the user theme (`widgetFrame`, see
 * `lib/widgetFrame`), so they share the Studio session with everything else: live preview on
 * every inheriting widget, undo/redo, save, discard; a colour preset leaves them, the studio's
 * reset clears them. An unusable stored value shows its error at its control.
 *
 * The collapsed summary counts the set Rahmenvorgaben against the eight settings of the
 * Widget-Rahmen. The info box names the inheritance rule and the way to make an existing widget
 * follow. Built on the control kit (`SubGroup`, `OptionalSliderField`, `InfoBox`), in the editor
 * theme like every section (ADR-0020, ADR-0038).
 */

import DeleteIcon from '@mui/icons-material/Delete';
import { Box, IconButton, Typography } from '@mui/material';
import type React from 'react';

import SectionCard from '../../components/SectionCard';
import { InfoBox, OptionalSliderField, SubGroup } from '../../components/controls';
import Generic from '../../Generic';
import type { StudioSectionProps } from '../../lib/theme/themeTypes';
import { getNestedValue } from '../../lib/theme/themeUtils';
import {
    WIDGET_FRAME_KEYS,
    WIDGET_FRAME_SETTING_COUNT,
    WIDGET_FRAME_SETTINGS,
    type WidgetFrameKey,
} from '../../lib/widgetFrame';

/** The theme path of a frame setting's Rahmenvorgabe. */
export const widgetFramePath = (key: WidgetFrameKey): string => `widgetFrame.${key}`;

/** The label key of each frame setting's control. */
const LABEL_KEYS: Record<WidgetFrameKey, string> = {
    baseElevation: 'theme_studio_frame_elevation',
};

/** The sub-groups of the section, in the order of Allgemein. */
const GROUPS: readonly { titleKey: string; keys: readonly WidgetFrameKey[] }[] = [
    { titleKey: 'theme_studio_group_card', keys: ['baseElevation'] },
];

/** One frame setting: its control, the reset of a set value, and the error of an unusable one. */
function FrameSettingControl({
    settingKey,
    theme,
    onChange,
    errorFor,
}: Pick<StudioSectionProps, 'theme' | 'onChange' | 'errorFor'> & { settingKey: WidgetFrameKey }): React.JSX.Element {
    const path = widgetFramePath(settingKey);
    const setting = WIDGET_FRAME_SETTINGS[settingKey];
    const stored = getNestedValue<unknown>(theme, path);
    const isSet = stored !== undefined;
    const error = errorFor?.(path);
    const label = Generic.t(LABEL_KEYS[settingKey]);

    return (
        // Scroll-to-error target, like the colour fields.
        <Box data-theme-error={error ? true : undefined}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 0.5 }}>
                <Box sx={{ flex: 1, minWidth: 0 }}>
                    <OptionalSliderField
                        // Unset, the control shows the built-in standard, and says so.
                        label={isSet ? label : `${label} · ${Generic.t('theme_studio_frame_standard')}`}
                        value={typeof stored === 'number' ? stored : undefined}
                        min={setting.min}
                        max={setting.max}
                        step={setting.step}
                        fallback={setting.standard}
                        onChange={value => onChange(path, value)}
                    />
                </Box>
                {isSet ? (
                    <IconButton
                        size="small"
                        onClick={() => onChange(path, undefined)}
                        title={Generic.t('theme_studio_frame_reset')}
                        sx={{ mb: 0.5 }}
                    >
                        <DeleteIcon fontSize="inherit" />
                    </IconButton>
                ) : null}
            </Box>
            {error ? (
                <Typography
                    variant="caption"
                    color="error"
                    sx={{ display: 'block' }}
                >
                    {error}
                </Typography>
            ) : null}
        </Box>
    );
}

/** "Widget-Rahmen" section: one control per frame setting, grouped like Allgemein. */
function WidgetFrameSection({
    theme,
    onChange,
    errorFor,
    expanded,
    onExpandedChange,
}: StudioSectionProps): React.JSX.Element {
    const presetCount = WIDGET_FRAME_KEYS.filter(
        key => getNestedValue<unknown>(theme, widgetFramePath(key)) !== undefined,
    ).length;
    const summary = Generic.t('theme_studio_frame_summary', String(presetCount), String(WIDGET_FRAME_SETTING_COUNT));

    return (
        <SectionCard
            title={Generic.t('theme_studio_section_widget_frame')}
            summary={summary}
            expanded={expanded}
            onExpandedChange={onExpandedChange}
        >
            {GROUPS.map(group => (
                <SubGroup
                    key={group.titleKey}
                    title={Generic.t(group.titleKey)}
                >
                    {group.keys.map(key => (
                        <FrameSettingControl
                            key={key}
                            settingKey={key}
                            theme={theme}
                            onChange={onChange}
                            errorFor={errorFor}
                        />
                    ))}
                </SubGroup>
            ))}
            <InfoBox text={Generic.t('theme_studio_frame_info')} />
        </SectionCard>
    );
}

export default WidgetFrameSection;
