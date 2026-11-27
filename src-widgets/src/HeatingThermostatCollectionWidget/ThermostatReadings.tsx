/**
 * The Raumthermostat's readings (Messwerte): humidity, valve, window and battery for the readings
 * bar, and the actual temperature (stage-1 spec „Messwerte“, ADR-0119, ADR-0120, ADR-0124).
 *
 * @module HeatingThermostatCollectionWidget/ThermostatReadings
 * @remarks
 * Everything reads through the Heizzonen-Lesung (`lib/heating/zoneReading`). An unbound Bedeutung
 * leaves its element out; a bound one without a value or not yet reported shows „–“. The valve is
 * the mean of the zone's bound valves that have reported. The window shows its display text (its
 * neutral value through the stored Wertezuordnung, open toned `kühl`; a device value without a
 * mapping its `commonStates` label, else the raw value, without a neutral state). The battery shows
 * its level with the object's unit, marked as a Hinweis while `batterieSchwach` reads `schwach`.
 * The bar and the actual temperature draw at the plan's sizes (`thermostatSizes`).
 */
import BatteryStdOutlined from '@mui/icons-material/BatteryStdOutlined';
import SpeedOutlined from '@mui/icons-material/SpeedOutlined';
import WaterDropOutlined from '@mui/icons-material/WaterDropOutlined';
import WindowOutlined from '@mui/icons-material/WindowOutlined';
import { Box, Typography, useTheme } from '@mui/material';
import type { ReactElement, ReactNode } from 'react';

import { formatReading, NO_VALUE, type ReadingKind } from '../lib/heating/readingFormat';
import { neutralColors, toneColors, type HeatingTone } from '../lib/heating/tones';
import { translate } from '../lib/translate';
import type { MeaningReading, ZoneReading } from '../lib/heating/zoneReading';
import type { ReadingSizes } from './thermostatStages';

/** What an element of the readings bar shows: a Bedeutung, or `ventil` for the valve mean. */
export type ReadingMeaning = 'luftfeuchte' | 'ventil' | 'fenster' | 'batteriestand';

/** One element of the readings bar. */
export interface ThermostatReading {
    /** What it shows. */
    readonly meaning: ReadingMeaning;
    /** Its text: the value with its unit, a label, or „–“. */
    readonly text: string;
    /** The tone of the value, where it has one (open window `kühl`, low battery `hinweis`). */
    readonly tone?: HeatingTone;
}

/**
 * The text of a number Bedeutung.
 *
 * @param reading - What the Heizzonen-Lesung says about it (bound).
 * @param kind - How to write it.
 * @param lang - The host language.
 * @returns The number with its object's unit, else „–“.
 */
const numberText = (reading: MeaningReading, kind: ReadingKind, lang: string): string =>
    reading.number === undefined ? NO_VALUE : formatReading(reading.number, kind, lang, reading.unit);

/**
 * The readings bar's elements, in the design's order: humidity, valve, window, battery.
 *
 * @param zone - The Heizzonen-Lesung of the zone.
 * @param lang - The host language.
 * @returns The elements of the bound Bedeutungen.
 */
export function thermostatReadings(zone: ZoneReading, lang: string): ThermostatReading[] {
    const readings: ThermostatReading[] = [];

    const humidity = zone.meaning('luftfeuchte');
    if (humidity.kind !== 'unbound') {
        readings.push({ meaning: 'luftfeuchte', text: numberText(humidity, 'percent', lang) });
    }

    const valve = zone.valveMean;
    if (valve !== undefined) {
        readings.push({ meaning: 'ventil', text: valve === null ? NO_VALUE : formatReading(valve, 'percent', lang) });
    }

    const window = zone.meaning('fenster');
    if (window.kind !== 'unbound') {
        readings.push({
            meaning: 'fenster',
            text: window.text,
            ...(window.neutral === 'offen' ? { tone: 'kühl' as const } : {}),
        });
    }

    const battery = zone.meaning('batteriestand');
    if (battery.kind !== 'unbound') {
        const low = zone.meaning('batterieSchwach').neutral === 'schwach';
        readings.push({
            meaning: 'batteriestand',
            text: numberText(battery, 'level', lang),
            ...(low ? { tone: 'hinweis' as const } : {}),
        });
    }

    return readings;
}

/** The icon and label of each element. */
const ELEMENTS: Readonly<Record<ReadingMeaning, { icon: typeof SpeedOutlined; label: string }>> = {
    luftfeuchte: { icon: WaterDropOutlined, label: 'heating_messwert_luftfeuchte' },
    ventil: { icon: SpeedOutlined, label: 'heating_messwert_ventil' },
    fenster: { icon: WindowOutlined, label: 'heating_messwert_fenster' },
    batteriestand: { icon: BatteryStdOutlined, label: 'heating_messwert_batterie' },
};

/**
 * The readings bar of the Groß arrangement.
 *
 * @param props - Component props.
 * @param props.readings - Its elements.
 * @param props.sizes - Its sizes, from the plan.
 * @returns The bar.
 */
export function ReadingsBar({
    readings,
    sizes,
}: {
    readings: readonly ThermostatReading[];
    sizes: ReadingSizes;
}): ReactElement {
    const theme = useTheme();
    const quiet = neutralColors(theme);
    return (
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: `repeat(${readings.length}, minmax(0, 1fr))`,
                gap: sizes.gapUnits,
                pt: sizes.topUnits,
                borderTop: 1,
                borderColor: quiet.line,
            }}
        >
            {readings.map(({ meaning, text, tone }) => {
                const { icon: Icon, label } = ELEMENTS[meaning];
                const colors = tone ? toneColors(theme, tone) : undefined;
                const marked = tone === 'hinweis';
                return (
                    <Box
                        key={meaning}
                        data-heating-reading={meaning}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: sizes.itemGapUnits,
                            minWidth: 0,
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: sizes.valueGapUnits, minWidth: 0 }}>
                            <Icon
                                aria-hidden
                                sx={{
                                    fontSize: sizes.icon,
                                    color: tone === 'kühl' ? colors?.text : quiet.label,
                                }}
                            />
                            <Typography
                                component="span"
                                data-heating-reading-value=""
                                {...(tone ? { 'data-tone': tone } : {})}
                                sx={{
                                    fontSize: sizes.value,
                                    fontWeight: 500,
                                    fontVariantNumeric: 'tabular-nums',
                                    whiteSpace: 'nowrap',
                                    color: colors?.text,
                                    ...(marked
                                        ? { px: sizes.markPadUnits, borderRadius: 999, bgcolor: colors?.surface }
                                        : {}),
                                }}
                            >
                                {text}
                            </Typography>
                        </Box>
                        <Typography
                            component="span"
                            sx={{ fontSize: sizes.label, color: quiet.label, whiteSpace: 'nowrap' }}
                        >
                            {translate(label)}
                        </Typography>
                    </Box>
                );
            })}
        </Box>
    );
}

/**
 * The actual temperature with its label, for the dial, the Einfach line and the tile's footer.
 *
 * @remarks
 * Only the word „Ist“ is muted, in the Neutralstufe's label colour. The value is a Werttext and sets no colour of its own: it takes
 * the vis-2 text colour (the widget's text styles reach every Typography through the collection
 * theme, the Mini-Dialog portal included), else the theme's text colour it inherits.
 * @param props - Component props.
 * @param props.text - The formatted actual temperature, or „–“.
 * @param props.size - Its size in em of the surrounding text, from the plan.
 * @param props.gap - The gap between the word and the value in spacing units, from the plan.
 * @returns The line.
 */
export function ActualTemperature({ text, size, gap }: { text: string; size: number; gap: number }): ReactNode {
    const quiet = neutralColors(useTheme());
    return (
        <Box
            data-heating-actual=""
            component="span"
            sx={{ display: 'inline-flex', alignItems: 'baseline', gap, minWidth: 0, fontSize: `${size}em` }}
        >
            <Box
                component="span"
                sx={{ color: quiet.label }}
            >
                {translate('heating_messwert_ist')}
            </Box>
            <Typography
                component="span"
                data-heating-actual-value=""
                sx={{
                    fontSize: '1.15em',
                    fontWeight: 500,
                    fontVariantNumeric: 'tabular-nums',
                    whiteSpace: 'nowrap',
                }}
            >
                {text}
            </Typography>
        </Box>
    );
}

/**
 * The actual temperature's text.
 *
 * @param zone - The Heizzonen-Lesung of the zone.
 * @param lang - The host language.
 * @returns The text; `undefined` while `ist` is unbound (the element is left out).
 */
export function actualTemperatureText(zone: ZoneReading, lang: string): string | undefined {
    const reading = zone.meaning('ist');
    return reading.kind === 'unbound' ? undefined : numberText(reading, 'temperature', lang);
}
