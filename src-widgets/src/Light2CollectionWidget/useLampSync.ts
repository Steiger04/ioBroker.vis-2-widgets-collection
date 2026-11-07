/**
 * Light2 lamp sync — owns both pickers and keeps them and the Kanäle in step.
 *
 * @module Light2CollectionWidget/useLampSync
 * @remarks
 * ADR-0108 Nr. 3: the hook around the pure transition core
 * ({@link module:Light2CollectionWidget/lampSync}). It owns the refs of the main (Kelvin-) and
 * the Helligkeits-Picker and hands the body their init and input handlers. After every render it
 * asks the core what the transition from the previous render means and applies the picker
 * actions; write requests go through the `useValueState` setters the body passes in. The
 * Kelvin-Kopplung runs in the drag handler itself — no state toggle, no body re-render.
 *
 * Two guards keep programmatic picker updates from writing:
 * - `isSyncingRef` wraps the sync's own picker updates. iro 5.5.2 emits `input:change` whenever
 *   its `inputActive` flag is set (`iro.es.js:1697-1701`); the slider sets the flag on every
 *   input including the release (`:1318-1322`) and only a colour change clears it, so a release
 *   that does not move the value leaves it set — the next programmatic update then arrives as
 *   an input. The guard drops it.
 * - `processingRef` drops inputs while a drag step is being handled, until the next microtask.
 */
import { useEffect, useRef } from 'react';
import type { MutableRefObject } from 'react';
import type iro from '@jaames/iro';
import type { Light2ChannelField } from '../lib/light2Channels';
import type { SyncChannel } from './backendSyncKey';
import { readChannelsIntoColor } from './channelMapping';
import type { ChannelWrite, ColorChanges, Light2WidgetData } from './channelMapping';
import { applyPickerAction, inputStep, pickerTargetOf, syncStep } from './lampSync';
import type { LampPickerNumber, LampReadContext, LampSyncState, PickerAction } from './lampSync';

/** What the body hands the lamp sync each render. */
export interface LampSyncOptions {
    /** The Lichttyp (`colorLightType`). */
    type: string | undefined;
    /** Whether the CCT-Ansicht is active (`isCctViewActive`). */
    cctView: boolean;
    /** The widget data (Kanal fields and their objects). */
    widgetData: Light2WidgetData;
    /** Value of a widget property, by field name. */
    getPropertyValue: (stateName: string) => ioBroker.StateValue;
    /** Value and `hasBackendChange` of each Kanal. */
    channels: Record<Light2ChannelField, SyncChannel>;
    /** The `useValueState` setter of each Kanal. */
    setters: Record<Light2ChannelField, (value: string | number) => void>;
}

/** What the body wires into its pickers. */
export interface LampSync {
    /** Ref of the main picker (in the CCT-Ansicht the Kelvin-Picker). */
    mainPickerRef: MutableRefObject<iro.ColorPicker | null>;
    /** Ref of the Helligkeits-Picker of the CCT-Ansicht. */
    brightnessPickerRef: MutableRefObject<iro.ColorPicker | null>;
    /** iro's `color:init`: mirrors the Kanäle into the picker. */
    onColorInit: (color: iro.Color, pickerNumber?: number) => void;
    /** iro's `input:change` of a picker: writes the Kanäle (and couples the Kelvin-Picker). */
    onInputChange: (color: iro.Color, pickerNumber: LampPickerNumber, changes?: ColorChanges) => void;
}

/**
 * Keeps the pickers of the Lampen-Bedienelement and the Kanäle in step.
 *
 * @param options What the body sees this render.
 * @returns The picker refs and handlers.
 */
export function useLampSync(options: LampSyncOptions): LampSync {
    const mainPickerRef = useRef<iro.ColorPicker | null>(null);
    const brightnessPickerRef = useRef<iro.ColorPicker | null>(null);
    const optionsRef = useRef(options);
    optionsRef.current = options;
    const prevStateRef = useRef<LampSyncState | undefined>(undefined);
    const isSyncingRef = useRef(false);
    // Its effect is open (ADR-0108 Nr. 3): kept unchanged.
    const processingRef = useRef(false);

    const readContext = (): LampReadContext => ({
        widgetData: optionsRef.current.widgetData,
        getPropertyValue: optionsRef.current.getPropertyValue,
    });

    const applyActions = (actions: PickerAction[]): void => {
        const colors = {
            main: mainPickerRef.current?.color ?? null,
            brightness: brightnessPickerRef.current?.color ?? null,
        };
        for (const action of actions) {
            isSyncingRef.current = true;
            try {
                applyPickerAction(action, colors, readContext());
            } finally {
                isSyncingRef.current = false;
            }
        }
    };

    const runWrites = (writes: ChannelWrite[]): void => {
        for (const { field, value } of writes) {
            optionsRef.current.setters[field](value);
        }
    };

    const { type, cctView, channels } = options;

    // Every render: the transition from the previous render (the core compares the inputs).
    useEffect(() => {
        const next: LampSyncState = { type, cctView, channels };
        const step = syncStep(
            prevStateRef.current,
            next,
            { main: !!mainPickerRef.current, brightness: !!brightnessPickerRef.current },
            readContext(),
        );
        prevStateRef.current = next;
        applyActions(step.actions);
        runWrites(step.writes);
    });

    const onColorInit = (color: iro.Color, pickerNumber?: number): void => {
        const { widgetData, getPropertyValue } = optionsRef.current;
        readChannelsIntoColor(
            color,
            pickerTargetOf(optionsRef.current, pickerNumber === 1 || pickerNumber === 2 ? pickerNumber : undefined),
            widgetData,
            getPropertyValue,
        );
    };

    const onInputChange = (color: iro.Color, pickerNumber: LampPickerNumber, changes?: ColorChanges): void => {
        if (processingRef.current || isSyncingRef.current) {
            return;
        }
        const step = inputStep(optionsRef.current, pickerNumber, color, changes, optionsRef.current.widgetData);
        if (!step) {
            return;
        }

        processingRef.current = true;

        try {
            runWrites(step.writes);
            applyActions(step.actions);
        } finally {
            void Promise.resolve().then(() => {
                processingRef.current = false;
            });
        }
    };

    return { mainPickerRef, brightnessPickerRef, onColorInit, onInputChange };
}
