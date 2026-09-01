/**
 * Toolbox section (ADR-0045) — the GUI-owned `toolbox` block, the successor of the retired
 * chart-level "Erweitertes JSON" (whose toolbox scaffold was the last GUI-unmanaged component).
 *
 * @module EchartsCollectionWidget/editor/sections/ToolboxSection
 * @remarks
 * Master switch (default OFF — no toolbox block at all) with the D8 hero preset: the FIRST
 * switch-on writes the four heroes (saveAsImage/restore/dataView/dataZoom, magicType off) so the
 * freshly enabled bar is useful, not an empty frame. Below, one Layout group (3×3 position,
 * orientation, icon size/gap, hover title, icon + hover colour with the echarts token inherit
 * swatch, the frame row, background) and the Funktionen SwitchList — per active feature its
 * sub-options appear. magicType is cartesian-only (row + builder filter, spec D4); brush stays
 * out entirely (needs a separate `brush` component — F9). Deliberately NOT exposed (D3): icon
 * SVG paths, locale title/lang, optionToContent functions, z/zlevel/silent,
 * excludeComponents, toolbox.tooltip, connectedBackgroundColor, dataZoom axis indexes.
 */
import type { FC } from 'react';
import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material';

import Generic from '../../../Generic';
import {
    FieldGrid,
    FieldLabel,
    LabeledSelect,
    OptionalNumberField,
    SectionTabs,
    SliderField,
    SubGroup,
    SwitchList,
    SwitchRow,
    TextField2,
} from '../../../components/controls';
import ColorField from '../colorFields';
import { GRID9_POSITIONS, PositionGrid } from '../controls';
import { effectiveDarkMode } from '../../echartsTheme';
import { familyOf } from '../../optionBuilder';
import { TOOLBOX_TOKENS } from '../../optionBuilders/toolbox';
import { useEditorTheme } from '../useEditorTheme';
import type { OidPickerCtx } from '../OidPicker';
import type { EditorState, SetEditor } from '../editorState';
import type { EchartsToolboxConfig } from '../../../types/field-definitions/echarts-fields';

/**
 * The toolbox section's field ownership (ADR-0049 slice) — the GUI-owned `toolbox` blob,
 * `chartType` for the cartesian-only magicType row, `darkMode` for the token inherit swatch;
 * the 4 palette/darkMode fields are transitively read via `useEditorTheme`.
 */
export type ToolboxSlice = Pick<
    EditorState,
    'chartType' | 'toolbox' | 'darkMode' | 'paletteSource' | 'palettePreset' | 'paletteCustom'
>;

interface ToolboxSectionProps {
    state: ToolboxSlice;
    set: SetEditor<ToolboxSlice>;
    pickerCtx: OidPickerCtx;
}

/** saveAsImage export formats (echarts vocabulary, shown as-is). */
const SAVE_FORMATS: ReadonlyArray<[string, string]> = [
    ['png', 'png'],
    ['jpeg', 'jpeg'],
    ['svg', 'svg'],
];

/** dataZoom filter modes for the internally created 'select' zooms (echarts vocabulary). */
const ZOOM_FILTER_MODES: ReadonlyArray<[string, string]> = [
    ['filter', 'filter'],
    ['weakFilter', 'weakFilter'],
    ['empty', 'empty'],
    ['none', 'none'],
];

/** magicType runtime switches (echarts vocabulary; stack/tiled are runtime stack toggles). */
const MAGIC_TYPES: ReadonlyArray<['line' | 'bar' | 'stack' | 'tiled', string]> = [
    ['line', 'line'],
    ['bar', 'bar'],
    ['stack', 'stack'],
    ['tiled', 'tiled'],
];

/**
 * The D8 hero preset — what the first master-on writes (and what any feature edit materializes
 * when `features` is still undefined, so a lone toggle cannot leave the display and the emit
 * disagreeing about the un-touched heroes).
 */
const HERO_FEATURES: NonNullable<EchartsToolboxConfig['features']> = {
    saveAsImage: { show: true },
    restore: { show: true },
    dataView: { show: true, readOnly: true },
    dataZoom: { show: true, filterMode: 'filter' },
};

const ToolboxSection: FC<ToolboxSectionProps> = ({ state, set, pickerCtx }) => {
    const { theme } = useEditorTheme(state, pickerCtx.socket, pickerCtx.theme);
    // The token inherit swatch resolves against echarts' builtin light/dark tokens by the
    // EFFECTIVE chart mode (D10) — the same literals the builder emits (user decision 2026-08-22).
    const dark = effectiveDarkMode(state.darkMode, theme.palette.mode) === 'dark';
    const token = dark ? TOOLBOX_TOKENS.dark : TOOLBOX_TOKENS.light;

    const tb = state.toolbox;
    const isCartesian = familyOf(state.chartType) === 'cartesian';

    const patch = (p: Partial<EchartsToolboxConfig>): void => set({ toolbox: { ...tb, ...p } });
    /** Patch one feature, materializing the hero preset first when `features` is still undefined. */
    const patchFeature = (
        key: keyof NonNullable<EchartsToolboxConfig['features']>,
        p: Record<string, unknown>,
    ): void => {
        const base = tb.features ?? HERO_FEATURES;
        set({ toolbox: { ...tb, features: { ...base, [key]: { ...base[key], ...p } } } });
    };
    /** Master switch: the first ON writes the D8 hero preset (spec D8). */
    const onMaster = (v: boolean): void => {
        if (v && tb.features === undefined) {
            set({ toolbox: { ...tb, show: true, features: HERO_FEATURES } });
            return;
        }
        patch({ show: v });
    };

    const f = tb.features;
    const featOn = (key: keyof NonNullable<EchartsToolboxConfig['features']>): boolean => f?.[key]?.show ?? false;
    const saveAsImage = f?.saveAsImage;
    const dataView = f?.dataView;
    const dataZoom = f?.dataZoom;
    const magicType = f?.magicType;
    // Background is 'transparent'/unset when null — round-trip through the picker's null state.
    const bgValue = tb.backgroundColor && tb.backgroundColor !== 'transparent' ? tb.backgroundColor : null;

    return (
        <Box>
            <SwitchList sx={{ mb: 1.5 }}>
                <SwitchRow
                    label={Generic.t('echarts_toolbox_show')}
                    checked={!!tb.show}
                    onChange={onMaster}
                />
            </SwitchList>

            {tb.show && (
                // Sektions-Tabs (ADR-0073): Allgemein (the master's layout cluster) |
                // Funktionen (the feature switches + their params). Off ⇒ no chrome at all.
                <SectionTabs
                    tabs={[
                        { key: 'general', label: Generic.t('echarts_tab_general') },
                        { key: 'features', label: Generic.t('echarts_tab_features') },
                    ]}
                >
                    <SubGroup title={Generic.t('echarts_toolbox_group_layout')}>
                        <PositionGrid
                            label={Generic.t('echarts_toolbox_position')}
                            value={tb.pos ?? 'topRight'}
                            onChange={v => patch({ pos: v as EchartsToolboxConfig['pos'] })}
                            options={GRID9_POSITIONS}
                        />
                        <Box sx={{ mt: 1.5 }} />
                        <FieldGrid>
                            <LabeledSelect
                                label={Generic.t('echarts_toolbox_orient')}
                                value={tb.orient ?? 'horizontal'}
                                onChange={v => patch({ orient: v as 'horizontal' | 'vertical' })}
                                options={[
                                    ['horizontal', Generic.t('echarts_toolbox_orient_horizontal')],
                                    ['vertical', Generic.t('echarts_toolbox_orient_vertical')],
                                ]}
                            />
                            <SliderField
                                label={Generic.t('echarts_toolbox_item_size')}
                                value={tb.itemSize ?? 15}
                                min={8}
                                max={30}
                                onChange={v => patch({ itemSize: v })}
                            />
                            <SliderField
                                label={Generic.t('echarts_toolbox_item_gap')}
                                value={tb.itemGap ?? 10}
                                min={2}
                                max={30}
                                onChange={v => patch({ itemGap: v })}
                            />
                            <Box>
                                <FieldLabel>{Generic.t('echarts_toolbox_icon_color')}</FieldLabel>
                                <ColorField
                                    value={tb.iconColor ?? null}
                                    fallback={token.icon}
                                    onChange={v => patch({ iconColor: v ?? undefined })}
                                    ctx={pickerCtx}
                                />
                            </Box>
                            <Box>
                                <FieldLabel>{Generic.t('echarts_toolbox_icon_hover_color')}</FieldLabel>
                                <ColorField
                                    value={tb.iconHoverColor ?? null}
                                    fallback={token.hover}
                                    onChange={v => patch({ iconHoverColor: v ?? undefined })}
                                    ctx={pickerCtx}
                                />
                            </Box>
                            <SliderField
                                label={Generic.t('echarts_toolbox_border_width')}
                                value={tb.borderWidth ?? 0}
                                min={0}
                                max={6}
                                onChange={v => patch({ borderWidth: v })}
                            />
                            <Box>
                                <FieldLabel>{Generic.t('echarts_toolbox_border_color')}</FieldLabel>
                                <ColorField
                                    value={tb.borderColor ?? null}
                                    fallback={token.border}
                                    onChange={v => patch({ borderColor: v ?? undefined })}
                                    ctx={pickerCtx}
                                />
                            </Box>
                            <SliderField
                                label={Generic.t('echarts_toolbox_border_radius')}
                                value={tb.borderRadius ?? 0}
                                min={0}
                                max={12}
                                onChange={v => patch({ borderRadius: v })}
                            />
                            <SliderField
                                label={Generic.t('echarts_toolbox_padding')}
                                value={tb.padding ?? 15}
                                min={0}
                                max={24}
                                onChange={v => patch({ padding: v })}
                            />
                            <Box>
                                <FieldLabel>{Generic.t('echarts_toolbox_background')}</FieldLabel>
                                <ColorField
                                    value={bgValue}
                                    onChange={v => patch({ backgroundColor: v ?? 'transparent' })}
                                    ctx={pickerCtx}
                                />
                            </Box>
                        </FieldGrid>
                        <Box sx={{ mt: 1.5 }}>
                            <SwitchList>
                                <SwitchRow
                                    label={Generic.t('echarts_toolbox_show_title')}
                                    checked={tb.showTitle ?? true}
                                    onChange={v => patch({ showTitle: v })}
                                />
                            </SwitchList>
                        </Box>
                    </SubGroup>

                    <SubGroup title={Generic.t('echarts_toolbox_features')}>
                        <SwitchList>
                            <SwitchRow
                                label={Generic.t('echarts_toolbox_feat_save_as_image')}
                                checked={featOn('saveAsImage')}
                                onChange={v => patchFeature('saveAsImage', { show: v })}
                            />
                            <SwitchRow
                                label={Generic.t('echarts_toolbox_feat_restore')}
                                checked={featOn('restore')}
                                onChange={v => patchFeature('restore', { show: v })}
                            />
                            <SwitchRow
                                label={Generic.t('echarts_toolbox_feat_data_view')}
                                checked={featOn('dataView')}
                                onChange={v => patchFeature('dataView', { show: v })}
                            />
                            <SwitchRow
                                label={Generic.t('echarts_toolbox_feat_data_zoom')}
                                checked={featOn('dataZoom')}
                                onChange={v => patchFeature('dataZoom', { show: v })}
                            />
                            {isCartesian && (
                                <SwitchRow
                                    label={Generic.t('echarts_toolbox_feat_magic_type')}
                                    checked={featOn('magicType')}
                                    onChange={v => patchFeature('magicType', { show: v })}
                                />
                            )}
                        </SwitchList>

                        {featOn('saveAsImage') && (
                            <Box sx={{ mt: 1.5 }}>
                                <FieldGrid>
                                    <LabeledSelect
                                        label={Generic.t('echarts_toolbox_format')}
                                        value={saveAsImage?.type ?? 'png'}
                                        onChange={v =>
                                            patchFeature('saveAsImage', {
                                                type: v as 'png' | 'jpeg' | 'svg',
                                            })
                                        }
                                        options={SAVE_FORMATS}
                                    />
                                    <TextField2
                                        label={Generic.t('echarts_toolbox_filename')}
                                        value={saveAsImage?.name ?? ''}
                                        onChange={v => patchFeature('saveAsImage', { name: v })}
                                        placeholder={Generic.t('echarts_toolbox_filename_hint')}
                                    />
                                    <OptionalNumberField
                                        label={Generic.t('echarts_toolbox_pixel_ratio')}
                                        value={saveAsImage?.pixelRatio}
                                        onChange={v => patchFeature('saveAsImage', { pixelRatio: v })}
                                        step={0.5}
                                    />
                                </FieldGrid>
                            </Box>
                        )}
                        {featOn('dataView') && (
                            <Box sx={{ mt: 1.5 }}>
                                <SwitchList>
                                    <SwitchRow
                                        label={Generic.t('echarts_toolbox_read_only')}
                                        checked={dataView?.readOnly ?? true}
                                        onChange={v => patchFeature('dataView', { readOnly: v })}
                                    />
                                </SwitchList>
                            </Box>
                        )}
                        {featOn('dataZoom') && (
                            <Box sx={{ mt: 1.5 }}>
                                <FieldGrid>
                                    <LabeledSelect
                                        label={Generic.t('echarts_toolbox_filter_mode')}
                                        value={dataZoom?.filterMode ?? 'filter'}
                                        onChange={v =>
                                            patchFeature('dataZoom', {
                                                filterMode: v as 'filter' | 'weakFilter' | 'empty' | 'none',
                                            })
                                        }
                                        options={ZOOM_FILTER_MODES}
                                    />
                                </FieldGrid>
                            </Box>
                        )}
                        {isCartesian && featOn('magicType') && (
                            <Box sx={{ mt: 1.5 }}>
                                <FieldLabel>{Generic.t('echarts_toolbox_magic_types')}</FieldLabel>
                                {/* Non-exclusive group: the value is the active type list; at least
                                    one type stays active (deselecting the last re-seeds 'line' —
                                    a magicType switcher with no type is a dead icon). */}
                                <ToggleButtonGroup
                                    size="small"
                                    value={magicType?.type ?? ['line', 'bar']}
                                    onChange={(_, next: string[]) =>
                                        patchFeature('magicType', {
                                            type: (next.length ? next : ['line']) as (
                                                | 'line'
                                                | 'bar'
                                                | 'stack'
                                                | 'tiled'
                                            )[],
                                        })
                                    }
                                >
                                    {MAGIC_TYPES.map(([value, label]) => (
                                        <ToggleButton
                                            key={value}
                                            value={value}
                                            sx={{ px: 1.25, py: 0.25, textTransform: 'none' }}
                                        >
                                            {label}
                                        </ToggleButton>
                                    ))}
                                </ToggleButtonGroup>
                            </Box>
                        )}
                    </SubGroup>
                </SectionTabs>
            )}
        </Box>
    );
};

export default ToolboxSection;
