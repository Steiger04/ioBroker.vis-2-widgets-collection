/**
 * The Kartenkopf of the heating family (ADR-0123 Nr. 1, Nachtrag): the head inside the content,
 * shared by every heating type.
 *
 * @module lib/heating/Kartenkopf
 * @remarks
 * Interface: the name, an optional second line (sub-line or summary), zero or more chips as
 * {text, tone}, the form (`zeile` | `gestapelt`) and — in a type's full arrangement — its fixed
 * type symbol. The type chooses what it hands over per size stage; the status logic stays with it.
 *
 * Hidden behind it: the arrangement (row: symbol, name over second line, chips at the end;
 * stacked: name, second line, chips below), the truncation (name and second line end with an
 * ellipsis, chips keep their width), the chip's appearance (a capsule with a dot, the triangle for
 * a Meldung, the heizt dot pulsing unless the user asked for less motion) and tone → colour through
 * the tone module (`lib/heating/tones`). An empty name or second line shows no line. The frame's
 * `noHeader` never reaches it; the Mini tile has its own head (ADR-0122).
 */
import { Box, Typography, keyframes, useTheme } from '@mui/material';
import type { ReactElement, ReactNode } from 'react';

import { useReducedMotion } from './motion';
import { toneColors, type HeatingTone } from './tones';

/** The form of the Kartenkopf. */
export type KartenkopfForm = 'zeile' | 'gestapelt';

/** A chip of the Kartenkopf. */
export interface KartenkopfChip {
    /** Its text. */
    readonly text: string;
    /** Its tone; the colours come from the tone module. */
    readonly tone: HeatingTone;
}

/** Props of {@link Kartenkopf}. */
export interface KartenkopfProps {
    /** The name; empty shows no name line. */
    name: string | undefined;
    /** The second line (sub-line or summary); empty shows none. */
    secondLine?: string;
    /** The chips, in order. */
    chips: readonly KartenkopfChip[];
    /** Row or stacked. */
    form: KartenkopfForm;
    /** The type's fixed symbol (an icon) in its full arrangement; none elsewhere. */
    symbol?: ReactNode;
}

/** The chip dot's pulse while heating (the design's `hzPulse`). */
const pulse = keyframes`
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.35; transform: scale(0.7); }
`;

/**
 * One chip: a capsule in its tone with a dot, or the triangle for a Meldung.
 *
 * @param props - Component props.
 * @param props.chip - The chip.
 * @returns The chip.
 */
function Chip({ chip }: { chip: KartenkopfChip }): ReactElement {
    const theme = useTheme();
    const reducedMotion = useReducedMotion();
    const colors = toneColors(theme, chip.tone);
    const pulsing = chip.tone === 'heizt' && !reducedMotion;

    return (
        <Box
            component="span"
            data-heating-chip=""
            data-tone={chip.tone}
            sx={{
                display: 'inline-flex',
                flex: 'none',
                alignItems: 'center',
                gap: '7px',
                height: 30,
                px: 1.5,
                borderRadius: 999,
                fontSize: 12.5,
                fontWeight: 600,
                whiteSpace: 'nowrap',
                bgcolor: colors.surface,
                color: colors.text,
            }}
        >
            <Box
                component="span"
                aria-hidden
                data-heating-chip-sign={colors.mark ?? 'dot'}
                data-pulse={pulsing ? '' : undefined}
                sx={
                    colors.mark === 'triangle'
                        ? {
                              width: 9,
                              height: 8,
                              bgcolor: 'currentColor',
                              clipPath: 'polygon(50% 0, 100% 100%, 0 100%)',
                          }
                        : {
                              width: 7,
                              height: 7,
                              borderRadius: '50%',
                              bgcolor: 'currentColor',
                              animation: pulsing ? `${pulse} 1.8s ease-in-out infinite` : 'none',
                          }
                }
            />
            <span>{chip.text}</span>
        </Box>
    );
}

/**
 * The Kartenkopf.
 *
 * @param props - Component props, see {@link KartenkopfProps}.
 * @param props.name - The name.
 * @param props.secondLine - The second line.
 * @param props.chips - The chips.
 * @param props.form - Row or stacked.
 * @param props.symbol - The type's fixed symbol.
 * @returns The head.
 */
export default function Kartenkopf({ name, secondLine, chips, form, symbol }: KartenkopfProps): ReactElement {
    const stacked = form === 'gestapelt';
    const nameLine = name ? (
        <Typography
            data-heating-head-name=""
            component="div"
            noWrap
            sx={{ maxWidth: '100%', fontSize: 19, fontWeight: 500, letterSpacing: '-0.01em', lineHeight: 1.3 }}
        >
            {name}
        </Typography>
    ) : null;
    const second = secondLine ? (
        <Typography
            data-heating-head-second=""
            component="div"
            noWrap
            sx={{ maxWidth: '100%', fontSize: 12.5, color: 'text.secondary' }}
        >
            {secondLine}
        </Typography>
    ) : null;
    const chipRow = chips.length ? (
        <Box sx={{ display: 'flex', flex: 'none', flexWrap: 'wrap', gap: 1 }}>
            {chips.map(chip => (
                <Chip
                    key={`${chip.tone}:${chip.text}`}
                    chip={chip}
                />
            ))}
        </Box>
    ) : null;

    return (
        <Box
            data-heating-head={form}
            sx={{
                display: 'flex',
                flexDirection: stacked ? 'column' : 'row',
                alignItems: stacked ? 'flex-start' : 'center',
                gap: stacked ? 1.25 : 1.5,
                minWidth: 0,
            }}
        >
            {symbol ? (
                <Box
                    data-heating-head-symbol=""
                    aria-hidden
                    sx={{
                        width: 44,
                        height: 44,
                        flex: 'none',
                        borderRadius: '14px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: 'action.hover',
                        color: 'text.secondary',
                    }}
                >
                    {symbol}
                </Box>
            ) : null}
            {nameLine || second ? (
                <Box
                    sx={{
                        flex: stacked ? 'none' : 1,
                        maxWidth: '100%',
                        minWidth: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 0.25,
                    }}
                >
                    {nameLine}
                    {second}
                </Box>
            ) : (
                <Box sx={{ flex: stacked ? 'none' : 1 }} />
            )}
            {chipRow}
        </Box>
    );
}
