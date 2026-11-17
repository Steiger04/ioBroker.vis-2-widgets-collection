/**
 * "Widget-Rahmen" section: the Rahmenvorgaben of every Collection widget (ADR-0117).
 *
 * @module ThemeConfigWizard/sections/WidgetFrameSection
 * @remarks
 * Each frame setting of Allgemein (`commonFields`) gets one control here, grouped like Allgemein
 * (Karte, Kopf & Fuß): a slider for a number, a switch for a boolean — worded positively ("Header"
 * on), while the theme stores the field's semantics (`noHeader`). A setting without a Rahmenvorgabe
 * shows the built-in standard, marked as such; a set one can be reset on its own, back to the
 * standard. The values live in the user theme (`widgetFrame`, see
 * `lib/widgetFrame`), so they share the Studio session with everything else: live preview on
 * every inheriting widget, undo/redo, save, discard; a colour preset leaves them, the studio's
 * reset clears them. An unusable stored value shows its error at its control.
 *
 * The collapsed summary counts the set Rahmenvorgaben against the eight settings of the
 * Widget-Rahmen. The info box names the inheritance rule and the way to make an existing widget
 * follow. Built on the control kit (`SubGroup`, `OptionalSliderField`, `SwitchList`/`SwitchRow`,
 * `InfoBox`), in the editor theme like every section (ADR-0020, ADR-0038).
 */

import DeleteIcon from '@mui/icons-material/Delete';
import { Box, IconButton, Typography } from '@mui/material';
import type React from 'react';

import SectionCard from '../../components/SectionCard';
import { InfoBox, OptionalSliderField, SubGroup, SwitchList, SwitchRow } from '../../components/controls';
import Generic from '../../Generic';
import type { StudioSectionProps } from '../../lib/theme/themeTypes';
import { getNestedValue } from '../../lib/theme/themeUtils';
import {
    WIDGET_FRAME_KEYS,
    WIDGET_FRAME_SETTING_COUNT,
    WIDGET_FRAME_SETTINGS,
    widgetFramePath,
    type NumberFrameSetting,
    type WidgetFrameKey,
    type WidgetFrameSetting,
} from '../../lib/widgetFrame';

/** The sub-groups of the section, as Allgemein names them, in the order the section shows them. */
const GROUPS = {
    card: { titleKey: 'theme_studio_group_card' },
    headerFooter: { titleKey: 'theme_studio_group_header_footer' },
} as const;

/** A sub-group of the section. */
type FrameGroup = keyof typeof GROUPS;

/**
 * How each frame setting's control presents it: its sub-group, its label, and for a boolean whether
 * the control shows it negated — positively worded ("Header" on), while the theme stores the field's
 * semantics (`noHeader: false`).
 *
 * @remarks
 * Keyed by the setting, so every setting sits in exactly one group: a setting the one table gains
 * without a row here is a type error, not a control missing from the section.
 */
const CONTROLS: Record<WidgetFrameKey, { group: FrameGroup; labelKey: string; negated?: true }> = {
    noHeader: { group: 'headerFooter', labelKey: 'theme_studio_frame_header', negated: true },
    noHeaderIcon: { group: 'headerFooter', labelKey: 'theme_studio_frame_header_icon', negated: true },
    noFooter: { group: 'headerFooter', labelKey: 'theme_studio_frame_footer', negated: true },
    noCard: { group: 'card', labelKey: 'theme_studio_frame_card', negated: true },
    outlined: { group: 'card', labelKey: 'theme_studio_frame_outlined' },
    outlinedFrame: { group: 'card', labelKey: 'theme_studio_frame_outlined_frame' },
    basePadding: { group: 'card', labelKey: 'theme_studio_frame_padding' },
    baseElevation: { group: 'card', labelKey: 'theme_studio_frame_elevation' },
};

/**
 * The settings of a sub-group in the order of their fields under Allgemein (the one table's order).
 * Consecutive booleans share one switch list.
 */
const keysOf = (group: FrameGroup): WidgetFrameKey[] => WIDGET_FRAME_KEYS.filter(key => CONTROLS[key].group === group);

type FrameControlProps = Pick<StudioSectionProps, 'theme' | 'onChange' | 'errorFor'> & { settingKey: WidgetFrameKey };

/** What a control shows of its setting: the stored Rahmenvorgabe, whether it is set, its error, its label. */
function frameSettingState({ settingKey, theme, errorFor }: FrameControlProps): {
    path: string;
    stored: unknown;
    isSet: boolean;
    error: string | undefined;
    label: string;
} {
    const path = widgetFramePath(settingKey);
    const stored = getNestedValue<unknown>(theme, path);
    const isSet = stored !== undefined;
    const label = Generic.t(CONTROLS[settingKey].labelKey);
    return {
        path,
        stored,
        isSet,
        error: errorFor?.(path),
        // Unset, the control shows the built-in standard, and says so.
        label: isSet ? label : `${label} · ${Generic.t('theme_studio_frame_standard')}`,
    };
}

/**
 * The frame of one control: the reset of a set value beside it and the error of an unusable one
 * below it. Also the scroll-to-error target, like the colour fields.
 */
function FrameControlFrame({
    settingKey,
    isSet,
    error,
    onReset,
    alignItems,
    children,
}: {
    settingKey: WidgetFrameKey;
    isSet: boolean;
    error: string | undefined;
    onReset: () => void;
    alignItems: 'center' | 'flex-end';
    children: React.ReactNode;
}): React.JSX.Element {
    return (
        <Box
            data-frame-setting={settingKey}
            data-theme-error={error ? true : undefined}
        >
            <Box sx={{ display: 'flex', alignItems, gap: 0.5 }}>
                <Box sx={{ flex: 1, minWidth: 0 }}>{children}</Box>
                {isSet ? (
                    <IconButton
                        size="small"
                        onClick={onReset}
                        title={Generic.t('theme_studio_frame_reset')}
                        sx={alignItems === 'flex-end' ? { mb: 0.5 } : { mr: 0.5 }}
                    >
                        <DeleteIcon fontSize="inherit" />
                    </IconButton>
                ) : null}
            </Box>
            {error ? (
                <Typography
                    variant="caption"
                    color="error"
                    sx={{ display: 'block', px: alignItems === 'center' ? 1 : 0 }}
                >
                    {error}
                </Typography>
            ) : null}
        </Box>
    );
}

/** A number setting: a slider with its number, the standard while unset. */
function FrameSliderControl(props: FrameControlProps & { setting: NumberFrameSetting }): React.JSX.Element {
    const { settingKey, setting, onChange } = props;
    const { path, stored, isSet, error, label } = frameSettingState(props);

    return (
        <FrameControlFrame
            settingKey={settingKey}
            isSet={isSet}
            error={error}
            onReset={() => onChange(path, undefined)}
            alignItems="flex-end"
        >
            <OptionalSliderField
                label={label}
                value={typeof stored === 'number' ? stored : undefined}
                min={setting.min}
                max={setting.max}
                step={setting.step}
                fallback={setting.standard}
                onChange={value => onChange(path, value)}
            />
        </FrameControlFrame>
    );
}

/** A boolean setting: a switch row, worded positively; unset it shows the standard. */
function FrameSwitchControl(props: FrameControlProps): React.JSX.Element {
    const { settingKey, onChange } = props;
    const { path, stored, isSet, error, label } = frameSettingState(props);
    const negated = CONTROLS[settingKey].negated === true;
    const value = typeof stored === 'boolean' ? stored : Boolean(WIDGET_FRAME_SETTINGS[settingKey].standard);

    return (
        <FrameControlFrame
            settingKey={settingKey}
            isSet={isSet}
            error={error}
            onReset={() => onChange(path, undefined)}
            alignItems="center"
        >
            <SwitchRow
                label={label}
                checked={negated ? !value : value}
                onChange={checked => onChange(path, negated ? !checked : checked)}
            />
        </FrameControlFrame>
    );
}

/** The settings of a group in runs: consecutive booleans together, each number alone. */
const runsOf = (keys: readonly WidgetFrameKey[]): WidgetFrameKey[][] => {
    const runs: WidgetFrameKey[][] = [];
    for (const key of keys) {
        const last = runs.at(-1);
        const isBoolean = WIDGET_FRAME_SETTINGS[key].kind === 'boolean';
        if (isBoolean && last && WIDGET_FRAME_SETTINGS[last[0]].kind === 'boolean') {
            last.push(key);
        } else {
            runs.push([key]);
        }
    }
    return runs;
};

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
            {(Object.keys(GROUPS) as FrameGroup[]).map(group => (
                <SubGroup
                    key={group}
                    title={Generic.t(GROUPS[group].titleKey)}
                >
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                        {runsOf(keysOf(group)).map(run => {
                            const setting: WidgetFrameSetting = WIDGET_FRAME_SETTINGS[run[0]];
                            return setting.kind === 'boolean' ? (
                                <SwitchList key={run[0]}>
                                    {run.map(key => (
                                        <FrameSwitchControl
                                            key={key}
                                            settingKey={key}
                                            theme={theme}
                                            onChange={onChange}
                                            errorFor={errorFor}
                                        />
                                    ))}
                                </SwitchList>
                            ) : (
                                <FrameSliderControl
                                    key={run[0]}
                                    settingKey={run[0]}
                                    setting={setting}
                                    theme={theme}
                                    onChange={onChange}
                                    errorFor={errorFor}
                                />
                            );
                        })}
                    </Box>
                </SubGroup>
            ))}
            <InfoBox text={Generic.t('theme_studio_frame_info')} />
        </SectionCard>
    );
}

export default WidgetFrameSection;
