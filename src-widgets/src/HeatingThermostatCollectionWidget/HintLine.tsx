/**
 * The Raumthermostat's hint line (stage-1 spec „Hinweiszeile“, ADR-0123 Nr. 2, ADR-0124 Nr. 2).
 *
 * @module HeatingThermostatCollectionWidget/HintLine
 * @remarks
 * Quiet in the Neutralstufe's label colour (ADR-0124 Nachtrag 2); only a Meldung tones it — a Störung filled, a Hinweis
 * tinted, both with the warning triangle — in the colours of the tone module, whose surface and
 * text keep at least 4.5:1 for any theme colour. The text ends with an ellipsis where it does not
 * fit. Its sizes come from the plan (`thermostatSizes`: damped beside the arrangement, the smaller
 * footer design in the tile).
 */
import WarningAmberRounded from '@mui/icons-material/WarningAmberRounded';
import { Box, useTheme } from '@mui/material';
import type { ReactElement } from 'react';

import { neutralColors, toneColors } from '../lib/heating/tones';
import type { HintLineSizes } from './thermostatStages';
import type { ThermostatHint } from './thermostatStatus';

/** Props of {@link HintLine}. */
export interface HintLineProps {
    hint: ThermostatHint;
    /** Its sizes, from the plan. */
    sizes: HintLineSizes;
    /** Centred (Voll) or at the start (Einfach, tile). */
    align?: 'center' | 'start';
}

/**
 * The hint line.
 *
 * @param props - Component props.
 * @param props.hint - Its text and Meldung.
 * @param props.sizes - Its sizes.
 * @param props.align - Where it stands.
 * @returns The line.
 */
export default function HintLine({ hint, sizes, align = 'center' }: HintLineProps): ReactElement {
    const theme = useTheme();
    const colors = hint.message ? toneColors(theme, hint.message) : undefined;

    return (
        <Box
            data-heating-hint=""
            data-tone={hint.message}
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: align === 'center' ? 'center' : 'flex-start',
                gap: sizes.gapUnits,
                minWidth: 0,
                maxWidth: '100%',
                width: align === 'center' ? '100%' : 'fit-content',
                boxSizing: 'border-box',
                fontSize: sizes.font,
                fontWeight: colors ? 600 : 400,
                color: colors ? colors.text : neutralColors(theme).label,
                ...(colors
                    ? {
                          bgcolor: colors.surface,
                          borderRadius: `${sizes.radius}px`,
                          px: sizes.padXUnits,
                          py: sizes.padYUnits,
                      }
                    : {}),
            }}
        >
            {colors?.mark === 'triangle' ? (
                <WarningAmberRounded
                    aria-hidden
                    data-heating-hint-sign=""
                    sx={{ fontSize: sizes.sign, flex: 'none', color: 'inherit' }}
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
