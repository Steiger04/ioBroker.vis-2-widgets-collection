/**
 * Advanced tab — the demoted supplemental JSON escape hatch (ADR-0007, Q7).
 *
 * @module EchartsCollectionWidget/editor/panels/AdvancedPanel
 * @remarks
 * The Advanced JSON (U) is now strictly supplemental: the GUI owns all presentation, so U is for
 * echarts keys the GUI does not expose (`graphic`, exotic animation easings, …). The data-binding
 * keys are managed (forced back by the seam) and listed here so the user knows what U cannot do.
 */
import type { FC } from 'react';
import { Box, TextField, Typography } from '@mui/material';

import Generic from '../../../Generic';
import { parseUserJson } from '../../optionBuilder';
import { SectionLabel } from '../controls';

interface PanelProps {
    userText: string;
    setUserText: (value: string) => void;
}

const AdvancedPanel: FC<PanelProps> = ({ userText, setUserText }) => {
    const parsed = parseUserJson(userText);
    return (
        <Box>
            <SectionLabel hint={Generic.t('echarts_editor_advanced_hint')}>
                {Generic.t('echarts_editor_advanced')}
            </SectionLabel>
            <Box
                sx={{
                    mb: 1,
                    p: 1,
                    bgcolor: 'action.hover',
                    borderLeft: 3,
                    borderColor: 'text.disabled',
                    borderRadius: 0.5,
                }}
            >
                <Typography
                    variant="caption"
                    color="text.secondary"
                >
                    {Generic.t('echarts_editor_managed_keys')}
                </Typography>
                <Typography
                    variant="caption"
                    component="div"
                >
                    <code>
                        series · legend · xAxis · yAxis · title.text · tooltip · grid · dataZoom · visualMap · animation
                        · palette · markLine
                    </code>
                </Typography>
            </Box>
            <TextField
                multiline
                minRows={6}
                fullWidth
                size="small"
                value={userText}
                onChange={e => setUserText(e.target.value)}
                placeholder={'{\n  "graphic": [ … ],\n  "animationEasing": "cubicOut"\n}'}
                sx={{ fontFamily: 'monospace' }}
            />
            <Typography
                variant="caption"
                sx={{ color: parsed.ok ? 'success.main' : 'error.main', display: 'block', mt: 0.5 }}
            >
                {parsed.ok ? Generic.t('echarts_editor_valid_json') : `✗ ${parsed.error}`}
            </Typography>
            <Typography
                variant="caption"
                color="text.secondary"
                sx={{ display: 'block' }}
            >
                {Generic.t('echarts_editor_advanced_note')}
            </Typography>
        </Box>
    );
};

export default AdvancedPanel;
