/**
 * The shared collapsible section shell of the configurator control kit (ADR-0038).
 *
 * @module components/SectionCard
 * @remarks
 * One configurator language across the collection: the echarts configurator's rail sections
 * (formerly the flat-divider `Section`, ADR-0010) and the Theme Studio's panel sections
 * (formerly `StudioSection`, ADR-0020) are the same unit — a bordered 12px-radius accordion
 * card. Header: expand chevron + title + (collapsed only) the Summary line + the warning
 * roll-up chip. The body mounts lazily on first expand (`mountOnEnter` on the accordion
 * transition) and stays mounted afterwards, so opening the editor does not mount every
 * collapsed section's controls, while per-item local state survives collapsing.
 *
 * Supports uncontrolled and controlled (`expanded` + `onExpandedChange`) modes; both
 * configurators drive it controlled (scroll-to-error / rail steering expand sections).
 */

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Chip, Typography } from '@mui/material';
import { useState } from 'react';
import type React from 'react';

/** Props for {@link SectionCard}. */
export interface SectionCardProps {
    /** Section title in the card header. */
    title: string;
    /** One-line digest of the section's effective values, shown while collapsed. */
    summary?: string;
    /** Number of validation issues in this section (0/absent = clean) — the ⚠ roll-up chip. */
    issueCount?: number;
    /** Controlled expanded state — when provided, the parent owns expansion. */
    expanded?: boolean;
    /** Expanded-state change callback (fires in controlled and uncontrolled mode). */
    onExpandedChange?: (expanded: boolean) => void;
    /** Section body (fields). */
    children: React.ReactNode;
}

/**
 * Collapsible section card with a collapsed-state summary line, a warning roll-up chip and a
 * lazily mounted body.
 *
 * @param props - Component props.
 * @param props.title - Section title in the card header.
 * @param props.summary - One-line digest shown while collapsed.
 * @param props.issueCount - Number of validation issues (the ⚠ roll-up chip).
 * @param props.expanded - Controlled expanded state (parent-owned).
 * @param props.onExpandedChange - Expanded-state change callback.
 * @param props.children - Section body (fields).
 * @returns The section accordion card.
 */
function SectionCard({
    title,
    summary,
    issueCount = 0,
    expanded: expandedProp,
    onExpandedChange,
    children,
}: SectionCardProps): React.JSX.Element {
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
                {!expanded && summary ? (
                    <Typography
                        variant="caption"
                        color="text.secondary"
                        noWrap
                        sx={{ flex: 1, minWidth: 0, textAlign: 'right' }}
                    >
                        {summary}
                    </Typography>
                ) : null}
                {issueCount > 0 && (
                    <Chip
                        size="small"
                        color="warning"
                        variant="outlined"
                        label={`⚠ ${issueCount}`}
                        sx={{ ml: 'auto', flexShrink: 0 }}
                    />
                )}
            </AccordionSummary>
            <AccordionDetails sx={{ pt: 0.5 }}>{children}</AccordionDetails>
        </Accordion>
    );
}

export default SectionCard;
