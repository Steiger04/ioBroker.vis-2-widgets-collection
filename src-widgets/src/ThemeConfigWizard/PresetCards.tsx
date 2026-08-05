/**
 * Preset starter cards for the studio panel (ADR-0020).
 *
 * @module ThemeConfigWizard/PresetCards
 * @remarks
 * One card per curated preset ({@link THEME_PRESETS}). The card face is a mini-UI
 * thumbnail — an outer surface in `background.default` holding a `paper` card with a
 * `primary` bar and a `secondary` dot — so the four preset colours read as a tiny
 * dashboard, not as four anonymous swatches; the mode (light/dark) is visible at a
 * glance from the surfaces themselves. Applying a preset merges its palette into the
 * current theme (palette-only, see {@link applyPreset}); the card whose palette
 * already matches the stored theme wears an "active" badge ({@link isPresetActive}).
 */

import CheckIcon from '@mui/icons-material/Check';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Box, Tooltip, Typography } from '@mui/material';
import type React from 'react';

import Generic from '../Generic';
import { THEME_PRESETS, isPresetActive, presetColors, type ThemePreset } from '../lib/theme/presets';
import type { UserTheme } from '../lib/theme/themeTypes';

/** Props for {@link PresetCards}. */
interface PresetCardsProps {
    /** Current draft theme (drives the active-card badge). */
    theme: UserTheme;
    /** Applies a preset (palette-only merge; the panel records one undo step). */
    onApply: (preset: ThemePreset) => void;
}

/** The mini-UI thumbnail: bg surface + paper card + primary bar + secondary dot. */
function PresetThumb({ preset }: { preset: ThemePreset }): React.JSX.Element {
    const { background: bg, paper, primary, secondary } = presetColors(preset);
    return (
        <Box
            aria-hidden
            sx={{
                height: 44,
                borderRadius: 1,
                bgcolor: bg,
                border: 1,
                borderColor: 'divider',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
            }}
        >
            <Box
                sx={{
                    width: '68%',
                    height: 26,
                    borderRadius: 0.75,
                    bgcolor: paper,
                    boxShadow: 1,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    px: 0.75,
                }}
            >
                <Box sx={{ width: '55%', height: 4, borderRadius: 2, bgcolor: primary }} />
                <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: secondary, flexShrink: 0 }} />
            </Box>
        </Box>
    );
}

/** Preset starter cards: mini-UI thumbnails in a two-column grid. */
function PresetCards({ theme, onApply }: PresetCardsProps): React.JSX.Element {
    return (
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 1 }}>
            {THEME_PRESETS.map(preset => {
                const active = isPresetActive(theme, preset);
                const dark = preset.theme.palette?.mode === 'dark';
                const label = Generic.t(preset.labelKey);
                return (
                    <Tooltip
                        key={preset.id}
                        title={active ? Generic.t('theme_studio_preset_active') : label}
                        arrow
                    >
                        <Box
                            component="button"
                            type="button"
                            onClick={() => onApply(preset)}
                            aria-pressed={active}
                            sx={{
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 0.5,
                                p: 1,
                                border: 1,
                                borderColor: active ? 'primary.main' : 'divider',
                                borderRadius: 1.5,
                                bgcolor: 'transparent',
                                cursor: 'pointer',
                                textAlign: 'left',
                                transition: 'border-color 150ms, background-color 150ms',
                                '&:hover': { bgcolor: 'action.hover' },
                                '&:focus-visible': { outline: 2, outlineColor: 'primary.main', outlineOffset: 1 },
                            }}
                        >
                            <PresetThumb preset={preset} />
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, minWidth: 0 }}>
                                {dark ? (
                                    <DarkModeIcon sx={{ fontSize: 13, color: 'text.secondary', flexShrink: 0 }} />
                                ) : (
                                    <LightModeIcon sx={{ fontSize: 13, color: 'text.secondary', flexShrink: 0 }} />
                                )}
                                <Typography
                                    variant="caption"
                                    noWrap
                                    sx={{ flex: 1, minWidth: 0, fontWeight: active ? 600 : 400 }}
                                >
                                    {label}
                                </Typography>
                            </Box>
                            {active ? (
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: -6,
                                        right: -6,
                                        width: 18,
                                        height: 18,
                                        borderRadius: '50%',
                                        bgcolor: 'primary.main',
                                        color: 'primary.contrastText',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        boxShadow: 1,
                                    }}
                                >
                                    <CheckIcon sx={{ fontSize: 12 }} />
                                </Box>
                            ) : null}
                        </Box>
                    </Tooltip>
                );
            })}
        </Box>
    );
}

export default PresetCards;
