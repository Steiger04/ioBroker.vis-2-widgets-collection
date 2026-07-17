/**
 * Compact live preview of the effective theme, rendered inside the studio panel.
 *
 * @module ThemeConfigWizard/components/ThemePreviewBlock
 * @remarks
 * Renders a few representative widgets under the resolved theme passed in from
 * the studio panel — the same resolved theme the color fields display (mode
 * resolved against the vis-2 host, derived secondary applied). Because the
 * collection's own widgets do not use the secondary color, this preview is the
 * primary place the derived secondary is actually visible; it is what makes
 * "secondary follows primary" verifiable inside the configurator.
 */

import { Button, Chip, Paper, Slider, Stack, ThemeProvider, Typography } from '@mui/material';
import type React from 'react';
import type { Theme } from '@mui/material/styles';

import Generic from '../../Generic';

/** Props for {@link ThemePreviewBlock}. */
interface ThemePreviewBlockProps {
    /** The resolved MUI theme to preview (mode resolved, derived secondary applied). */
    theme: Theme;
}

/**
 * Renders representative widgets under the resolved theme so color/typography
 * edits are visible immediately — including the derived secondary on a secondary
 * button.
 */
function ThemePreviewBlock({ theme }: ThemePreviewBlockProps): React.JSX.Element {
    return (
        <ThemeProvider theme={theme}>
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
