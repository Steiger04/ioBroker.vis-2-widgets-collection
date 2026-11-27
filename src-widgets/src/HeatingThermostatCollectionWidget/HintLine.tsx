/**
 * The Raumthermostat's hint line (stage-1 spec „Hinweiszeile“, ADR-0123 Nr. 2, ADR-0124 Nr. 2).
 *
 * @module HeatingThermostatCollectionWidget/HintLine
 * @remarks
 * Quiet in the Neutralstufe's label colour (ADR-0124 Nachtrag 2); only a Meldung tones it — a Störung filled, a Hinweis
 * tinted, both with the warning triangle — in the colours of the tone module, whose surface and
 * text keep at least 4.5:1 for any theme colour. The text ends with an ellipsis where it does not
 * fit.
 */
import WarningAmberRounded from '@mui/icons-material/WarningAmberRounded';
import { Box, useTheme } from '@mui/material';
import type { ReactElement } from 'react';

import { neutralColors, toneColors } from '../lib/heating/tones';
import type { ThermostatHint } from './thermostatStatus';

/** Props of {@link HintLine}. */
export interface HintLineProps {
    hint: ThermostatHint;
    /** The text size: the line's own, or the tile footer's smaller one. */
    size?: 'line' | 'tile';
    /** Centred (Voll) or at the start (Einfach, tile). */
    align?: 'center' | 'start';
}

/**
 * The hint line.
 *
 * @param props - Component props.
 * @param props.hint - Its text and Meldung.
 * @param props.size - The text size.
 * @param props.align - Where it stands.
 * @returns The line.
 */
export default function HintLine({ hint, size = 'line', align = 'center' }: HintLineProps): ReactElement {
    const theme = useTheme();
    const colors = hint.message ? toneColors(theme, hint.message) : undefined;
    const small = size === 'tile';

    return (
        <Box
            data-heating-hint=""
            data-tone={hint.message}
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: align === 'center' ? 'center' : 'flex-start',
                gap: 0.75,
                minWidth: 0,
                maxWidth: '100%',
                width: align === 'center' ? '100%' : 'fit-content',
                boxSizing: 'border-box',
                fontSize: small ? 12 : 13,
                fontWeight: colors ? 600 : 400,
                color: colors ? colors.text : neutralColors(theme).label,
                ...(colors
                    ? { bgcolor: colors.surface, borderRadius: '10px', px: small ? 0.75 : 1.25, py: small ? 0.25 : 0.5 }
                    : {}),
            }}
        >
            {colors?.mark === 'triangle' ? (
                <WarningAmberRounded
                    aria-hidden
                    data-heating-hint-sign=""
                    sx={{ fontSize: small ? 14 : 16, flex: 'none', color: 'inherit' }}
                />
            ) : null}
            <Box
                component="span"
                sx={{ minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
            >
                {hint.text}
            </Box>
        </Box>
    );
}
