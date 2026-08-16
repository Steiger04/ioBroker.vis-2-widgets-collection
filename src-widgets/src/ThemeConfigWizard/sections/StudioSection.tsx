/**
 * Shared section shell for the theme studio (ADR-0020).
 *
 * @module ThemeConfigWizard/sections/StudioSection
 * @remarks
 * One collapsible, intent-named unit of the studio panel — the Summary-line idiom from the
 * echarts configurator: a collapsed header shows a one-line digest of its effective values,
 * so the closed panel still reads as a coherent description of the theme. The body mounts
 * lazily on first expand (`mountOnEnter` on the accordion transition) and stays mounted
 * afterwards, so opening the panel does not mount every collapsed section's controls (the
 * echarts open-cost fix), while local field state still survives collapsing.
 */

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { useState } from 'react';
import type React from 'react';

/** Props for {@link StudioSection}. */
interface StudioSectionProps {
    /** Section title in the accordion header. */
    title: string;
    /** One-line digest of the section's effective values, shown while collapsed. */
    summary: string;
    /** Controlled expanded state — when provided, the panel owns expansion (scroll-to-error). */
    expanded?: boolean;
    /** Expanded-state change callback (controlled mode). */
    onExpandedChange?: (expanded: boolean) => void;
    /** Section body (fields). */
    children: React.ReactNode;
}

/**
 * Accordion section with a collapsed-state summary line and a lazily mounted body.
 * Supports uncontrolled and controlled (`expanded` + `onExpandedChange`) modes; the panel
 * uses the controlled mode to expand a section holding a validation error. Sections start
 * collapsed in uncontrolled mode.
 *
 * @param props - Component props.
 * @param props.title - Section title in the accordion header.
 * @param props.summary - One-line digest shown while collapsed.
 * @param props.expanded - Controlled expanded state (panel-owned).
 * @param props.onExpandedChange - Expanded-state change callback (controlled mode).
 * @param props.children - Section body (fields).
 * @returns The section accordion.
 */
function StudioSection({
    title,
    summary,
    expanded: expandedProp,
    onExpandedChange,
    children,
}: StudioSectionProps): React.JSX.Element {
    const [expandedInternal, setExpandedInternal] = useState<boolean>(false);
    const expanded = expandedProp ?? expandedInternal;
    const handleChange = (isExpanded: boolean): void => {
        if (expandedProp === undefined) {
            setExpandedInternal(isExpanded);
        }
        onExpandedChange?.(isExpanded);
    };

    return (
        <Accordion
            expanded={expanded}
            onChange={(_event, isExpanded) => handleChange(isExpanded)}
            disableGutters
            elevation={0}
            slotProps={{ transition: { mountOnEnter: true } }}
            sx={{
                border: 1,
                borderColor: 'divider',
                borderRadius: '12px !important',
                mb: 1,
                '&::before': { display: 'none' },
                overflow: 'hidden',
            }}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{ minHeight: 44, '& .MuiAccordionSummary-content': { alignItems: 'baseline', gap: 1 } }}
            >
                <Typography
                    variant="body2"
                    sx={{ fontWeight: 600, flexShrink: 0 }}
                >
                    {title}
                </Typography>
                {!expanded ? (
                    <Typography
                        variant="caption"
                        color="text.secondary"
                        noWrap
                        sx={{ flex: 1, minWidth: 0, textAlign: 'right' }}
                    >
                        {summary}
                    </Typography>
                ) : null}
            </AccordionSummary>
            <AccordionDetails sx={{ pt: 0.5 }}>{children}</AccordionDetails>
        </Accordion>
    );
}

export default StudioSection;
