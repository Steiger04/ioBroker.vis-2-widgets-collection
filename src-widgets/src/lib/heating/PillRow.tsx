/**
 * A row of pills: equal columns of toggle-like buttons that each start one action (the
 * Raumthermostat's Absenk / Komfort / Aus; the same row carries later actions of the family).
 *
 * @module lib/heating/PillRow
 * @remarks
 * A pill names its action, optionally a detail (the value it writes), and lights while the reported
 * state equals what it would set (`aria-pressed`). The lit pill takes the `heizt` tone's surface and
 * text (`lib/heating/tones`), the others stay quiet on the card. The caller decides which pills
 * exist — only those with a writable target — and what a tap writes. An empty row draws nothing.
 * Under `prefers-reduced-motion` there is no ripple and no transition.
 */
import { Box, ButtonBase, useTheme } from '@mui/material';
import type { ReactElement } from 'react';

import { useReducedMotion } from './motion';
import { toneColors } from './tones';

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
    /** Starts the action. */
    readonly onClick: () => void;
}

/** Props of {@link PillRow}. */
export interface PillRowProps {
    /** The pills, in display order. */
    readonly pills: readonly Pill[];
}

/**
 * The row of pills.
 *
 * @param props - Component props.
 * @param props.pills - The pills, in display order.
 * @returns The row; `null` without a pill.
 */
export default function PillRow({ pills }: PillRowProps): ReactElement | null {
    const theme = useTheme();
    const reducedMotion = useReducedMotion();
    if (!pills.length) {
        return null;
    }
    const lit = toneColors(theme, 'heizt');

    return (
        <Box
            data-heating-pills=""
            sx={{ display: 'grid', gridTemplateColumns: `repeat(${pills.length}, minmax(0, 1fr))`, gap: 1 }}
        >
            {pills.map(pill => (
                <ButtonBase
                    key={pill.key}
                    data-heating-pill={pill.key}
                    aria-pressed={pill.active}
                    disableRipple={reducedMotion}
                    onClick={pill.onClick}
                    sx={{
                        minWidth: 0,
                        height: 44,
                        gap: '7px',
                        px: 1,
                        borderRadius: '14px',
                        border: 1,
                        borderColor: pill.active ? 'transparent' : 'divider',
                        bgcolor: pill.active ? lit.surface : 'transparent',
                        color: pill.active ? lit.text : 'text.secondary',
                        fontSize: 13.5,
                        fontWeight: 500,
                        whiteSpace: 'nowrap',
                        transition: reducedMotion ? 'none' : 'background-color 150ms, color 150ms',
                        '&:hover': { bgcolor: pill.active ? lit.surface : 'action.hover' },
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
