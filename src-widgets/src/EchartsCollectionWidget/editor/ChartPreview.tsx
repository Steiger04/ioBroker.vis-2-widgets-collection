/**
 * Persistent real-data preview panel for the echarts configurator (Q6, ADR-0007/0008).
 *
 * @module EchartsCollectionWidget/editor/ChartPreview
 * @remarks
 * Renders the right-hand side of the split modal. Fed by {@link usePreviewOption} — the user's
 * actual data, live — instead of synthetic fixtures. Shows a spinner while history is loading
 * and an honest empty state when no data is bound yet. The empty state is clickable (ADR-0010):
 * it steers the rail to the section that would fill it (series, or data source for JSON mode).
 */
import { useState, type FC } from 'react';
import type React from 'react';
import { Box, ButtonBase, CircularProgress, Typography } from '@mui/material';
import type { Theme } from '@mui/material/styles';
import type { LegacyConnection } from '@iobroker/adapter-react-v5';

import Generic from '../../Generic';
import EChart from '../EChart';
import { emptyPlaceholderReason, PLACEHOLDER_I18N_KEY } from '../emptyPlaceholder';
import { resolveFrameCss } from '../frameStyle';
import { parseZoomIdleSeconds } from '../zoomIdleReset';
import { usePreviewOption } from './usePreviewOption';
import type { SectionKey } from './validation';
import type { EditorState } from './editorState';

interface ChartPreviewProps {
    state: EditorState;
    socket: LegacyConnection;
    theme: Theme;
    /**
     * Called when the user clicks the empty-state placeholder — with the section (and, for the
     * table Leerfall, its Zuordnung TAB, ADR-0075/0073) that would fill it.
     */
    onPlaceholderClick?: (key: SectionKey, tab?: string) => void;
}

const ChartPreview: FC<ChartPreviewProps> = ({ state, socket, theme, onPlaceholderClick }) => {
    // Legenden-Folge (ADR-0074): the preview owns its own local legend selection — a legend
    // click in the Preview stage hides the series' axis live, exactly like the live body
    // (preview parity). Ephemeral per modal session, never persisted into the editor state.
    const [legendSelection, setLegendSelection] = useState<Record<string, boolean>>({});
    // The pipeline return (ADR-0046): error joins option/loading/hasData — the preview surfaces
    // JSON/Verlauf/series failures instead of failing silently, exactly like the body.
    const { option, loading, hasData, error } = usePreviewOption(state, socket, theme, legendSelection);

    const placeholderReason = emptyPlaceholderReason(
        state.mode,
        state.jsonKind,
        state.series.some(s => s.yPath),
    );
    const placeholder = Generic.t(PLACEHOLDER_I18N_KEY[placeholderReason]);

    // The section whose fields would replace this placeholder with a real chart — and, for the
    // table Leerfall (ADR-0075 decision 6), the Zuordnung tab it lives on.
    const targetSection: SectionKey = state.mode === 'json' ? 'dataSource' : 'series';
    const targetTab: string | undefined = placeholderReason === 'configureTableMapping' ? 'mapping' : undefined;

    const emptyBody = (
        <>
            <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textAlign: 'center' }}
            >
                {loading ? Generic.t('echarts_preview_loading') : placeholder}
            </Typography>
            {!loading && onPlaceholderClick && (
                <Typography
                    variant="caption"
                    color="primary"
                    sx={{ display: 'block', textAlign: 'center', mt: 0.5 }}
                >
                    {Generic.t('echarts_preview_open_series')}
                </Typography>
            )}
        </>
    );

    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                height: '100%',
                minHeight: 240,
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {loading && (
                <CircularProgress
                    size={22}
                    sx={{ position: 'absolute', top: 8, right: 8, zIndex: 2 }}
                />
            )}
            {error && (
                <Typography
                    color="error"
                    variant="caption"
                    sx={{ position: 'absolute', top: 8, left: 8, right: 40, zIndex: 2 }}
                >
                    {error}
                </Typography>
            )}
            {/* The authored chart frame previews live around the chart area (parity Build D) —
                the same resolver the body applies, host-theme divider as the colour inherit. */}
            <Box
                sx={{
                    flex: 1,
                    minHeight: 0,
                    ...(resolveFrameCss(state.frame, theme.palette.divider) ?? {}),
                }}
            >
                {hasData && option ? (
                    <EChart
                        option={option}
                        renderer={state.renderer}
                        zoomIdleResetSec={parseZoomIdleSeconds(state.zoomResetAfterIdle)}
                        onLegendSelect={setLegendSelection}
                    />
                ) : onPlaceholderClick && !loading ? (
                    <ButtonBase
                        onClick={() => onPlaceholderClick(targetSection, targetTab)}
                        sx={{
                            width: '100%',
                            height: '100%',
                            minHeight: 220,
                            px: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 1,
                            '&:hover': { bgcolor: 'action.hover' },
                        }}
                    >
                        {emptyBody}
                    </ButtonBase>
                ) : (
                    <Box
                        sx={{
                            width: '100%',
                            height: '100%',
                            minHeight: 220,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            px: 2,
                        }}
                    >
                        {emptyBody}
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default ChartPreview;
