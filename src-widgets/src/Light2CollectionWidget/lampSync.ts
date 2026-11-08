/**
 * Light2 lamp sync core — what the two pickers and the Kanäle do on each transition.
 *
 * @module Light2CollectionWidget/lampSync
 * @remarks
 * ADR-0108 Nr. 3: the pure transition core behind `useLampSync`. From the sync state before and
 * after a render it decides the picker actions and the write requests of these transitions:
 * Fremdänderung of the temperature, of the brightness and of the main colour, entering and
 * leaving the CCT-Ansicht; plus the picker init and the drag step (with the Kelvin-Kopplung).
 * The hook applies the actions to the iro pickers and carries the writes out through the
 * `useValueState` setters.
 *
 * - **One view notion**: {@link isCctViewActive} — always on for the Lichttyp cct, the view
 *   switch for an „& cct" Lichttyp, off otherwise. Every decision asks it.
 * - **Event keys**: each Fremdänderung transition keys on a `backendSyncKey` over the
 *   `hasBackendChange` flags of its Kanäle (ADR-0087) — not on the flags, which stay true across
 *   consecutive foreign changes; an own write to an unflagged Kanal changes no key.
 * - **Reads and writes** run through the channel mapping (`readChannelsIntoColor`,
 *   `channelWrites`) and with it through `hueScale`.
 *
 * Each transition reproduces one former effect of the body (dev @ b2fb111d,
 * `Light2Collection.tsx:432-611`): a transition runs when the inputs of its former effect
 * changed, so the write behaviour stays the same (ADR-0108) — except for three released fixes:
 * the Lichttyp cct follows foreign brightness changes (6e15103a); entering the CCT-Ansicht
 * writes the stored temperature, whole, instead of iro's lossy read-back, so the lamp still
 * switches to white without drifting; and the read on leaving
 * the CCT-Ansicht runs under the sync guard of `useLampSync` like every other picker action, so
 * it no longer arrives as an input that writes the main colour (2d96a48c). New since then:
 * leaving the CCT-Ansicht writes the stored colour-view Kanäle back, so the lamp switches to
 * colour with the view, as entering switches it to white.
 */
import iro from '@jaames/iro';
import { channelsOf, hasView, mainColorSyncFields, offersViewSwitch } from '../lib/light2Channels';
import type { Light2ChannelField } from '../lib/light2Channels';
import { backendSyncKey } from './backendSyncKey';
import type { SyncChannel } from './backendSyncKey';
import {
    channelWrites,
    FALLBACK_KELVIN,
    hasChannelOid,
    readChannelsIntoColor,
    storedChannelWrites,
} from './channelMapping';
import type { ChannelWrite, ColorChanges, Light2WidgetData, PickerTarget } from './channelMapping';

/**
 * The two pickers of the Lampen-Bedienelement: the main picker (the only one of the colour view,
 * in the CCT-Ansicht the Kelvin-Picker) and the Helligkeits-Picker of the CCT-Ansicht.
 */
export type LampPicker = 'main' | 'brightness';

/** What the sync sees of one render: the Lichttyp, the view and every Kanal's value and flag. */
export interface LampSyncState {
    /** The Lichttyp (`colorLightType`). */
    type: string | undefined;
    /** Whether the CCT-Ansicht is active ({@link isCctViewActive}). */
    cctView: boolean;
    /** Value and `hasBackendChange` of each Kanal. */
    channels: Record<Light2ChannelField, SyncChannel>;
}

/** Which pickers are mounted. */
export interface LampPickers {
    main: boolean;
    brightness: boolean;
}

/** Where a read takes the Kanal values from. */
export interface LampReadContext {
    widgetData: Light2WidgetData;
    getPropertyValue: (stateName: string) => ioBroker.StateValue;
}

/** One picker action. */
export type PickerAction =
    /** Mirror the Kanäle of the target into the picker. */
    | { kind: 'read'; picker: LampPicker; target: PickerTarget }
    /** Set the Kelvin-Picker to a temperature. */
    | { kind: 'kelvin'; value: number }
    /** Kelvin-Kopplung: the Helligkeits-Picker takes the Kelvin-Picker's colour, keeping its brightness. */
    | { kind: 'couple' };

/** The outcome of one transition: picker actions in order, then the write requests. */
export interface LampSyncStep {
    actions: PickerAction[];
    writes: ChannelWrite[];
}

/**
 * Whether the CCT-Ansicht is active.
 *
 * @param type The Lichttyp.
 * @param cctSelected Whether the view switch of an „& cct" Lichttyp stands on the CCT-Ansicht.
 * @returns Always for the Lichttyp cct, `cctSelected` for an „& cct" one, never otherwise.
 */
export const isCctViewActive = (type: string | undefined, cctSelected: boolean): boolean =>
    hasView(type, 'cct') && (!offersViewSwitch(type) || cctSelected);

/**
 * The channel-mapping target of a picker: in the CCT-Ansicht the Kelvin- (main) or the
 * Helligkeits-Picker — without a picker neither, so nothing is read or written there —, else
 * the colour view of the Lichttyp.
 */
export const pickerTargetOf = (state: Pick<LampSyncState, 'type' | 'cctView'>, picker?: LampPicker): PickerTarget =>
    state.cctView
        ? {
              type: state.type,
              view: 'cct',
              picker: picker === 'main' ? 'kelvin' : picker,
          }
        : { type: state.type, view: 'color' };

/** The event keys and the view key (the former `effectiveColorLightType`) of a state. */
const keysOf = (
    state: LampSyncState,
): { view: string | undefined; temperature: string | null; brightness: string | null; mainColor: string | null } => ({
    view: state.cctView ? 'cct' : state.type,
    temperature: backendSyncKey([state.channels.colorLightTemperatureOid]),
    brightness: backendSyncKey([state.channels.colorLightBrightnessOid]),
    mainColor: backendSyncKey(
        mainColorSyncFields(state.type, state.cctView ? 'cct' : 'color').map(field => state.channels[field]),
    ),
});

/**
 * The write of entering the CCT-Ansicht: the stored temperature goes back to the lamp, so the lamp
 * switches to white at its brightness — the state value, whole, never iro's lossy read-back
 * (4000 → 3989.12, which drifted on every switch). A configured temperature Kanal without a usable
 * value gets 2000 K, written like every Kelvin-Picker write (rounded, a Kanal without object is
 * skipped).
 */
const enterViewWrites = (type: string | undefined, read: LampReadContext): ChannelWrite[] => {
    const target = pickerTargetOf({ type, cctView: true }, 'main');
    const stored = storedChannelWrites(target, read.widgetData, read.getPropertyValue);
    if (stored.length > 0 || !hasChannelOid('colorLightTemperatureOid', read.widgetData)) {
        return stored;
    }
    const color = new iro.Color('#ffffff');
    color.kelvin = FALLBACK_KELVIN;
    return channelWrites(color, target, undefined, read.widgetData);
};

/**
 * The picker actions and write requests of the transition from `prev` to `next`.
 *
 * @param prev The state of the previous render (`undefined` on mount: every input counts as changed).
 * @param next The state of this render.
 * @param pickers Which pickers are mounted.
 * @param read Where reads take the Kanal values from.
 * @returns The actions in the order of the former effects, and the writes.
 */
export function syncStep(
    prev: LampSyncState | undefined,
    next: LampSyncState,
    pickers: LampPickers,
    read: LampReadContext,
): LampSyncStep {
    const actions: PickerAction[] = [];
    const writes: ChannelWrite[] = [];
    const now = keysOf(next);
    const before = prev && keysOf(prev);
    const viewSwitch = offersViewSwitch(next.type);
    const prevViewSwitch = prev !== undefined && offersViewSwitch(prev.type);
    const temperature = next.channels.colorLightTemperatureOid.value;

    // Fremdänderung Temperatur: both pickers follow the new temperature.
    if (
        (!before ||
            before.view !== now.view ||
            before.temperature !== now.temperature ||
            !Object.is(prev?.channels.colorLightTemperatureOid.value, temperature)) &&
        next.cctView &&
        now.temperature !== null &&
        pickers.main &&
        pickers.brightness &&
        temperature !== undefined &&
        temperature !== null
    ) {
        actions.push({ kind: 'kelvin', value: Number(temperature) }, { kind: 'couple' });
    }

    // Fremdänderung Helligkeit: the Helligkeits-Picker follows.
    if (
        (!before || before.view !== now.view || before.brightness !== now.brightness) &&
        next.cctView &&
        now.brightness !== null &&
        pickers.brightness
    ) {
        actions.push({ kind: 'read', picker: 'brightness', target: pickerTargetOf(next, 'brightness') });
    }

    // Fremdänderung Hauptfarbe: the main picker follows the colour-view Kanäle.
    if (
        (!before || before.view !== now.view || before.mainColor !== now.mainColor) &&
        !next.cctView &&
        now.mainColor !== null &&
        pickers.main
    ) {
        actions.push({ kind: 'read', picker: 'main', target: pickerTargetOf(next) });
    }

    // Betreten der CCT-Ansicht (or an „& cct" Lichttyp arriving with the view on): both pickers
    // start from the temperature, coupled.
    if (
        (!prev || prev.cctView !== next.cctView || prevViewSwitch !== viewSwitch) &&
        next.cctView &&
        viewSwitch &&
        pickers.main &&
        pickers.brightness
    ) {
        actions.push({ kind: 'read', picker: 'main', target: pickerTargetOf(next, 'main') });
        // The view switch itself switches the lamp to white: the stored temperature (or 2000 K).
        if (prevViewSwitch && !prev.cctView) {
            writes.push(...enterViewWrites(next.type, read));
        }
        actions.push({ kind: 'couple' });
    }

    // Verlassen der CCT-Ansicht: the main picker shows the colour view again, the lamp its colour.
    if (prev?.cctView && prevViewSwitch && !next.cctView && viewSwitch && pickers.main) {
        // First the lamp's brightness into the main picker, which still holds the Kelvin-Picker's
        // white: a colour view whose Kanäle are not all configured reads nothing, so the picker
        // keeps that white at the lamp's brightness; a complete colour view overwrites it right
        // after. As the former effect did.
        actions.push({ kind: 'read', picker: 'main', target: pickerTargetOf(prev, 'brightness') });
        actions.push({ kind: 'read', picker: 'main', target: pickerTargetOf(next) });
        // The view switch itself switches the lamp back to colour: the stored colour-view Kanäle.
        writes.push(...storedChannelWrites(pickerTargetOf(next), read.widgetData, read.getPropertyValue));
    }

    return { actions, writes };
}

/**
 * The write requests and picker actions of one drag step of a picker.
 *
 * @param state The sync state of the render the picker was drawn with.
 * @param picker The picker that changed.
 * @param color Its colour after the change.
 * @param changes The hsv components the input changed.
 * @param widgetData The widget data (the Kanal objects).
 * @returns `null` without a Lichttyp (nothing to do); else the writes and — for the Kelvin-Picker
 *   — the Kelvin-Kopplung.
 */
export function inputStep(
    state: Pick<LampSyncState, 'type' | 'cctView'>,
    picker: LampPicker,
    color: iro.Color,
    changes: ColorChanges | undefined,
    widgetData: Light2WidgetData,
): LampSyncStep | null {
    if (!state.cctView && !state.type) {
        return null;
    }
    const target = pickerTargetOf(state, picker);

    // No Kanäle (none, an unknown Lichttyp): nothing to write, nothing to couple.
    if (!channelsOf(target.type, target.view).length) {
        return { actions: [], writes: [] };
    }

    return {
        actions: target.picker === 'kelvin' ? [{ kind: 'couple' }] : [],
        writes: channelWrites(color, target, changes, widgetData),
    };
}

/**
 * Kelvin-Kopplung: the Helligkeits-Picker takes the Kelvin-Picker's colour (its slider shows
 * the same white), keeping its own brightness.
 */
export const coupleKelvinToBrightness = (kelvinColor: iro.Color, brightnessColor: iro.Color): void => {
    const brightness = brightnessColor.value;
    brightnessColor.hexString = kelvinColor.hexString;
    brightnessColor.value = brightness;
};

/**
 * Applies one picker action to the picker colours; an action on a missing picker does nothing.
 *
 * @param action The action.
 * @param colors The colours of the mounted pickers.
 * @param read Where a read takes the Kanal values from.
 */
export function applyPickerAction(
    action: PickerAction,
    colors: Record<LampPicker, iro.Color | null>,
    read: LampReadContext,
): void {
    if (action.kind === 'read') {
        const color = colors[action.picker];
        if (color) {
            readChannelsIntoColor(color, action.target, read.widgetData, read.getPropertyValue);
        }
    } else if (action.kind === 'kelvin') {
        if (colors.main) {
            colors.main.kelvin = action.value;
        }
    } else if (colors.main && colors.brightness) {
        coupleKelvinToBrightness(colors.main, colors.brightness);
    }
}
