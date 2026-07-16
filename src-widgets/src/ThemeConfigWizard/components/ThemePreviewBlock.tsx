/**
 * Compact live preview of the draft theme, rendered inside the studio panel.
 *
 * @module ThemeConfigWizard/components/ThemePreviewBlock
 * @remarks
 * Builds a theme from the in-memory draft — applying {@link withDerivedSecondary}
 * exactly like the runtime hook — and renders a few representative widgets under
 * it. Because the collection's own widgets do not use the secondary color, this
 * preview is the only place the derived secondary is actually visible; it is what
 * makes "secondary follows primary" verifiable inside the configurator.
 */

import { Button, Chip, Paper, Slider, Stack, ThemeProvider, Typography, createTheme } from '@mui/material';
import { useMemo } from 'react';
import type React from 'react';

import Generic from '../../Generic';
import { withDerivedSecondary } from '../../lib/theme/derivePalette';
import type { UserTheme } from '../../lib/theme/themeTypes';

/** Props for {@link ThemePreviewBlock}. */
interface ThemePreviewBlockProps {
    /** The in-memory draft theme to preview (derived secondary applied here). */
    theme: UserTheme;
}

/**
 * Renders representative widgets under the draft theme so color/typography edits
 * are visible immediately — including the derived secondary on a secondary button.
 */
function ThemePreviewBlock({ theme }: ThemePreviewBlockProps): React.JSX.Element {
    // Same derivation the runtime hook applies, so the preview matches the widgets.
    const previewTheme = useMemo(() => createTheme(withDerivedSecondary(theme)), [theme]);

    return (
        <ThemeProvider theme={previewTheme}>
            <Paper
                variant="outlined"
                sx={{ p: 1.5, mb: 2 }}
            >
                <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ display: 'block', mb: 1 }}
                >
                    {Generic.t('theme_studio_preview_hint')}
                </Typography>
                <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                    flexWrap="wrap"
                    useFlexGap
                >
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                    >
                        {Generic.t('theme_studio_preview_primary')}
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        size="small"
                    >
                        {Generic.t('theme_studio_preview_secondary')}
                    </Button>
                    <Chip
                        size="small"
                        color="primary"
                        label={Generic.t('theme_studio_preview_primary')}
                    />
                </Stack>
                <Slider
                    size="small"
                    defaultValue={45}
                    sx={{ mt: 1.5 }}
                />
            </Paper>
        </ThemeProvider>
    );
}

export default ThemePreviewBlock;
