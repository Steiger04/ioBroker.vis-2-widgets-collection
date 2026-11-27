/**
 * A row of pills: equal columns of toggle-like buttons that each start one action (the
 * Raumthermostat's Absenk / Komfort / Aus and its operating-mode segment).
 *
 * @module lib/heating/PillRow
 * @remarks
 * A pill names its action, optionally a detail (the value it writes), and lights while the reported
 * state equals what it would set (`aria-pressed`). The lit pill takes the Bedienakzent's surface and
 * text (`lib/heating/tones`, ADR-0124 Nachtrag 2026-11-27: a choice, not a state), the others stay
 * quiet in the Neutralstufe — its line, its label and a faint surface (Nachtrag 2). The caller
 * decides which pills
 * exist — only those with a writable target — and what a tap writes; a pill without an action only
 * shows a state (disabled, still lit) — and the row's sizes (`lib/heating/partSizes`, from the
 * type's plan). An empty row draws nothing.
 * Under `prefers-reduced-motion` there is no ripple and no transition.
 */
import { Box, ButtonBase, useTheme } from '@mui/material';
import type { ReactElement } from 'react';

import { useReducedMotion } from './motion';
import { accentColors, neutralColors } from './tones';
import type { PillSizes } from './partSizes';

/** One pill of the row. */
export interface Pill {
    /** Stable key; also the test hook `data-heating-pill`. */
    readonly key: string;
    /** The translated name of the action. */
    readonly label: string;
    /** A detail beside the name, e.g. the value the pill writes. */
    readonly detail?: string;
    /** The reported state equals what the pill sets. */
    readonly active: boolean;
    /** Starts the action; none for a pill that only shows a state. */
    readonly onClick?: () => void;
}

/** Props of {@link PillRow}. */
export interface PillRowProps {
    /** The pills, in display order. */
    readonly pills: readonly Pill[];
    /** The accessible name of the row as a group; none for an unnamed row. */
    readonly label?: string;
    /** Its sizes, from the type's plan. */
    readonly sizes: PillSizes;
}

/**
 * The row of pills.
 *
 * @param props - Component props.
 * @param props.pills - The pills, in display order.
 * @param props.label - The accessible name of the row as a group.
 * @param props.sizes - Its sizes.
 * @returns The row; `null` without a pill.
 */
export default function PillRow({ pills, label, sizes }: PillRowProps): ReactElement | null {
    const theme = useTheme();
    const reducedMotion = useReducedMotion();
    if (!pills.length) {
        return null;
    }
    const lit = accentColors(theme);
    const quiet = neutralColors(theme);

    return (
        <Box
            data-heating-pills=""
            {...(label ? { role: 'group', 'aria-label': label } : {})}
            sx={{
                display: 'grid',
                gridTemplateColumns: `repeat(${pills.length}, minmax(0, 1fr))`,
                gap: sizes.rowGapUnits,
            }}
        >
            {pills.map(pill => (
                <ButtonBase
                    key={pill.key}
                    data-heating-pill={pill.key}
                    aria-pressed={pill.active}
                    disableRipple={reducedMotion}
                    disabled={!pill.onClick}
                    onClick={pill.onClick}
                    sx={{
                        minWidth: 0,
                        height: sizes.height,
                        gap: `${sizes.gap}px`,
                        px: sizes.padUnits,
                        borderRadius: `${sizes.radius}px`,
                        border: 1,
                        borderColor: pill.active ? 'transparent' : quiet.line,
                        bgcolor: pill.active ? lit.surface : quiet.surface,
                        color: pill.active ? lit.text : quiet.label,
                        fontSize: sizes.font,
                        fontWeight: 500,
                        whiteSpace: 'nowrap',
                        transition: reducedMotion ? 'none' : 'background-color 150ms, color 150ms',
                        '&:hover': { bgcolor: pill.active ? lit.surface : quiet.hover },
                        '&.Mui-focusVisible': { outline: '2px solid', outlineColor: 'primary.main', outlineOffset: 2 },
                    }}
                >
                    <Box
                        component="span"
                        sx={{ minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis' }}
                    >
                        {pill.label}
                    </Box>
                    {pill.detail ? (
                        <Box
                            component="span"
                            data-heating-pill-detail=""
                            sx={{ flex: 'none', fontVariantNumeric: 'tabular-nums' }}
                        >
                            {pill.detail}
                        </Box>
                    ) : null}
                </ButtonBase>
            ))}
        </Box>
    );
}
