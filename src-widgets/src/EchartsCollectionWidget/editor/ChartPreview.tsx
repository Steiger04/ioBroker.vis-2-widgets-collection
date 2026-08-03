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
import type { FC } from 'react';
import type React from 'react';
import { Box, ButtonBase, CircularProgress, Typography } from '@mui/material';
import type { Theme } from '@mui/material/styles';
import type { LegacyConnection } from '@iobroker/adapter-react-v5';

import Generic from '../../Generic';
import EChart from '../EChart';
import { usePreviewOption } from './usePreviewOption';
import type { SectionKey } from './validation';
import type { EditorState } from './editorState';

interface ChartPreviewProps {
    state: EditorState;
    socket: LegacyConnection;
    theme: Theme;
    /** Called when the user clicks the empty-state placeholder — with the section that fills it. */
    onPlaceholderClick?: (key: SectionKey) => void;
}

const ChartPreview: FC<ChartPreviewProps> = ({ state, socket, theme, onPlaceholderClick }) => {
    const { option, loading, hasData } = usePreviewOption(state, socket, theme);

    const placeholder =
        state.chartType === 'gauge'
            ? Generic.t('echarts_preview_select_value_oid')
            : state.chartType === 'radar'
              ? Generic.t('echarts_preview_add_indicators')
              : state.mode === 'json'
                ? Generic.t('echarts_preview_select_json_oid')
                : Generic.t('echarts_preview_configure_series');

    // The section whose fields would replace this placeholder with a real chart.
    const targetSection: SectionKey =
        state.mode === 'json' && state.chartType !== 'gauge' && state.chartType !== 'radar' ? 'dataSource' : 'series';

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
            <Box sx={{ flex: 1, minHeight: 0 }}>
                {hasData && option ? (
                    <EChart
                        option={option}
                        renderer={state.renderer}
                    />
                ) : onPlaceholderClick && !loading ? (
                    <ButtonBase
                        onClick={() => onPlaceholderClick(targetSection)}
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
