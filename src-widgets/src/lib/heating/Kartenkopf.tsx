/**
 * The Kartenkopf of the heating family (ADR-0123 Nr. 1, Nachtrag): the head inside the content,
 * shared by every heating type.
 *
 * @module lib/heating/Kartenkopf
 * @remarks
 * Interface: the name, an optional second line (sub-line or summary), zero or more chips as
 * {text, tone}, the form (`zeile` | `gestapelt`) and — in a type's full arrangement — its fixed
 * type symbol, and its sizes (`lib/heating/partSizes`: the type's plan scales them with the damped
 * Maßstab, ADR-0122 Nachtrag „Maßstab und Anordnungswahl“). The type chooses what it hands over per
 * size stage; the status logic stays with it.
 *
 * Hidden behind it: the arrangement (row: symbol, name over second line, chips at the end;
 * stacked: name, second line, chips below), the truncation (name and second line end with an
 * ellipsis, chips keep their width), the chip's appearance (a toned capsule, the triangle for a
 * Meldung; the neutral chip quiet text in the Neutralstufe without a surface — no dots, ADR-0124
 * Nachtrag 2 2026-11-27) and tone → colour through the tone module (`lib/heating/tones`); the type
 * symbol stands without a surface in the Bedienakzent's line colour (ADR-0124 Nachtrag 2026-11-27,
 * Nachtrag 2). An empty name or second line shows no line. The frame's
 * `noHeader` never reaches it; the Mini tile has its own head (ADR-0122).
 */
import { Box, Typography, useTheme } from '@mui/material';
import type { ReactElement, ReactNode } from 'react';

import { accentColors, neutralColors, toneColors, type HeatingTone } from './tones';
import type { KartenkopfSizes } from './partSizes';

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
    /** The type's fixed symbol (an icon at `sizes.icon`) in its full arrangement; none elsewhere. */
    symbol?: ReactNode;
    /** Its sizes, from the type's plan. */
    sizes: KartenkopfSizes;
}

/**
 * One chip: a capsule in its tone, with the triangle for a Meldung; the neutral chip is quiet text
 * without a surface (ADR-0124 Nachtrag 2 2026-11-27).
 *
 * @param props - Component props.
 * @param props.chip - The chip.
 * @param props.sizes - The Kartenkopf's sizes.
 * @returns The chip.
 */
function Chip({ chip, sizes }: { chip: KartenkopfChip; sizes: KartenkopfSizes }): ReactElement {
    const theme = useTheme();
    const quiet = chip.tone === 'neutral';
    const colors = toneColors(theme, chip.tone);

    return (
        <Box
            component="span"
            data-heating-chip=""
            data-tone={chip.tone}
            sx={{
                display: 'inline-flex',
                flex: 'none',
                alignItems: 'center',
                gap: `${sizes.chipGap}px`,
                height: sizes.chipHeight,
                // Without a capsule the quiet text needs no inner padding: it lines up with the name.
                px: quiet ? 0 : sizes.chipPadUnits,
                borderRadius: 999,
                fontSize: sizes.chipFont,
                fontWeight: 600,
                whiteSpace: 'nowrap',
                ...(quiet ? { color: neutralColors(theme).label } : { bgcolor: colors.surface, color: colors.text }),
            }}
        >
            {colors.mark === 'triangle' ? (
                <Box
                    component="span"
                    aria-hidden
                    data-heating-chip-sign="triangle"
                    sx={{
                        width: sizes.chipMarkWidth,
                        height: sizes.chipMarkHeight,
                        bgcolor: 'currentColor',
                        clipPath: 'polygon(50% 0, 100% 100%, 0 100%)',
                    }}
                />
            ) : null}
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
 * @param props.sizes - Its sizes.
 * @returns The head.
 */
export default function Kartenkopf({ name, secondLine, chips, form, symbol, sizes }: KartenkopfProps): ReactElement {
    const theme = useTheme();
    const accent = accentColors(theme);
    const quiet = neutralColors(theme);
    const stacked = form === 'gestapelt';
    const nameLine = name ? (
        <Typography
            data-heating-head-name=""
            component="div"
            noWrap
            sx={{ maxWidth: '100%', fontSize: sizes.name, fontWeight: 500, letterSpacing: '-0.01em', lineHeight: 1.3 }}
        >
            {name}
        </Typography>
    ) : null;
    const second = secondLine ? (
        <Typography
            data-heating-head-second=""
            component="div"
            noWrap
            sx={{ maxWidth: '100%', fontSize: sizes.second, color: quiet.label }}
        >
            {secondLine}
        </Typography>
    ) : null;
    const chipRow = chips.length ? (
        <Box sx={{ display: 'flex', flex: 'none', flexWrap: 'wrap', gap: sizes.chipRowGapUnits }}>
            {chips.map(chip => (
                <Chip
                    key={`${chip.tone}:${chip.text}`}
                    chip={chip}
                    sizes={sizes}
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
                gap: stacked ? sizes.stackGapUnits : sizes.rowGapUnits,
                minWidth: 0,
            }}
        >
            {symbol ? (
                <Box
                    data-heating-head-symbol=""
                    aria-hidden
                    sx={{
                        width: sizes.symbol,
                        height: sizes.symbol,
                        flex: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: accent.line,
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
                        gap: sizes.textGapUnits,
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
