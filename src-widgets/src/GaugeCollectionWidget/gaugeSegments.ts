/**
 * Highlight-Zone model of the Gauge widget.
 *
 * @module GaugeCollectionWidget/gaugeSegments
 * @remarks
 * One pure function over the states useData publishes (ADR-0107 Nr. 1): a
 * Highlight-Zone is a range segment derived from the value rows
 * (`states[i].value … states[i+1].value`, the last zone stretched to the zone
 * max). The result is split in two: the bare arcs for the canvas and the style
 * of the active zone, which the body composes into the `data` CollectionBase
 * renders (ADR-0086 — no zone prop on CollectionBase). Only keys useData puts
 * on a state are read; the legacy per-state colour keys are kept as data, never
 * read here.
 */

import { extractColorFromValue } from '../lib/helper/extractColorFromValue';

import type { StateStyleData } from '../hooks/useData/types';

/** A canvas arc of a Highlight-Zone — range and colour, nothing else. */
export interface ZoneArc {
    from: number;
    to: number;
    color: string;
}

/**
 * Style of the active Highlight-Zone, taken as useData resolved it on the state.
 *
 * @remarks
 * Raw values: an empty `frameBackground`/`background` means "no override" — the
 * body falls back to the base style data then.
 */
export type ZoneStyle = Pick<
    StateStyleData,
    | 'frameBackground'
    | 'background'
    | 'icon'
    | 'iconColor'
    | 'forceColorMask'
    | 'iconSizeOnly'
    | 'iconXOffset'
    | 'iconYOffset'
>;

/** Result of {@link resolveZones}: the canvas arcs and the active zone's style. */
export interface Zones {
    /** One arc per zone, in state order. */
    arcs: ZoneArc[];
    /** Style of the zone containing the value, `null` when the value lies in none. */
    active: ZoneStyle | null;
}

/** A zone during resolution: its arc plus the state it was built from. */
interface Zone extends ZoneArc {
    state: StateStyleData;
}

/**
 * Builds the zones from the value rows.
 *
 * @remarks
 * Each row spans up to the next row's value; the last zone is stretched to
 * `maxValue` when the last row ends below it. `??` (not `||`): a boundary of
 * exactly 0 is a real limit, not "unset".
 */
const buildZones = (states: StateStyleData[], maxValue: number): Zone[] => {
    const zones = states.map((state, index) => {
        const nextValue = states[index + 1]?.value ?? maxValue;

        return {
            from: Number(state.value),
            to: Number(nextValue),
            color: extractColorFromValue(state.textColor) || 'transparent',
            state,
        };
    });

    if (states.length > 0 && Number(states[states.length - 1].value) < maxValue) {
        zones[zones.length - 1].to = maxValue;
    }

    return zones;
};

/**
 * Returns the zone containing the value.
 *
 * @remarks
 * Half-open intervals (`from` inclusive, `to` exclusive) — closed only at the
 * absolute maximum, so a value exactly at `maxValue` still resolves to the last
 * zone instead of falling out of the model.
 */
const findZone = (zones: Zone[], value: number, maxValue: number): Zone | undefined =>
    zones.find(zone => value >= zone.from && (value < zone.to || (value === zone.to && value === maxValue)));

/**
 * Resolves the Highlight-Zones of the gauge.
 *
 * @param states   - The states as useData publishes them.
 * @param maxValue - The zone maximum (the gauge's effective max).
 * @param value    - The current, already coerced value.
 * @returns The canvas arcs and the active zone's style (or `null`).
 * @remarks
 * The arc colour is still read from the state's text colour with the hex/rgb
 * reader, `transparent` otherwise.
 */
export const resolveZones = (states: StateStyleData[], maxValue: number, value: number): Zones => {
    const zones = buildZones(states, maxValue);
    const zone = findZone(zones, value, maxValue);

    return {
        arcs: zones.map(({ from, to, color }) => ({ from, to, color })),
        active: zone
            ? {
                  frameBackground: zone.state.frameBackground,
                  background: zone.state.background,
                  icon: zone.state.icon,
                  iconColor: zone.state.iconColor,
                  forceColorMask: zone.state.forceColorMask,
                  iconSizeOnly: zone.state.iconSizeOnly,
                  iconXOffset: zone.state.iconXOffset,
                  iconYOffset: zone.state.iconYOffset,
              }
            : null,
    };
};
