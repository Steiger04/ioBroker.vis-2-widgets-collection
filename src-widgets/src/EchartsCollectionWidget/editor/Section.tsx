/**
 * One collapsible, intent-named unit of the v3 configurator rail (ADR-0010).
 *
 * @module EchartsCollectionWidget/editor/Section
 * @remarks
 * Header: expand chevron + title + (collapsed only) the summary line + the warning roll-up chip.
 * Quiet chrome — sections are separated by a bottom divider, no accordion elevations. The body
 * mounts lazily on first expand and stays mounted afterwards, so per-item local state (e.g. an
 * expanded series card) survives collapsing.
 */
import type { FC, ReactNode } from 'react';
import { Box, Chip, Collapse, Typography } from '@mui/material';
import { ExpandMore as ExpandIcon } from '@mui/icons-material';

interface SectionProps {
    /** Section title (translated). */
    title: string;
    /** One-line digest of effective values, shown only while collapsed. */
    summary?: string;
    /** Number of validation issues in this section (0/absent = clean). */
    issueCount?: number;
    expanded: boolean;
    onToggle: () => void;
    children: ReactNode;
}

const Section: FC<SectionProps> = ({ title, summary, issueCount = 0, expanded, onToggle, children }) => (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Box
            component="button"
            type="button"
            onClick={onToggle}
            aria-expanded={expanded}
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                width: '100%',
                py: 1,
                px: 0.5,
                border: 0,
                bgcolor: 'transparent',
                color: 'inherit',
                font: 'inherit',
                textAlign: 'left',
                cursor: 'pointer',
                borderRadius: 1,
                '&:hover': { bgcolor: 'action.hover' },
            }}
        >
            <ExpandIcon
                sx={{
                    fontSize: 18,
                    color: 'text.secondary',
                    transform: expanded ? 'rotate(180deg)' : 'none',
                    transition: 'transform 150ms',
                    flexShrink: 0,
                }}
            />
            <Typography
                variant="subtitle2"
                fontWeight={600}
                noWrap
            >
                {title}
            </Typography>
            {!expanded && summary && (
                <Typography
                    variant="caption"
                    color="text.secondary"
                    noWrap
                    sx={{ flex: 1, minWidth: 0, textAlign: 'right' }}
                >
                    {summary}
                </Typography>
            )}
            {issueCount > 0 && (
                <Chip
                    size="small"
                    color="warning"
                    variant="outlined"
                    label={`⚠ ${issueCount}`}
                    sx={{ ml: 'auto', flexShrink: 0 }}
                />
            )}
        </Box>
        <Collapse
            in={expanded}
            mountOnEnter
        >
            <Box sx={{ px: 0.5, pb: 2, pt: 0.5 }}>{children}</Box>
        </Collapse>
    </Box>
);

export default Section;
