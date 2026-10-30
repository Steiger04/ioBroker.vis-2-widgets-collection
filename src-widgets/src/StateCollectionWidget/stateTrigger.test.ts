/**
 * Pure transitions of the Zustands-Auslöser — the State widget's trigger decision matrix.
 *
 * @module widgets/StateCollectionWidget/stateTrigger.test
 * @remarks
 * Pins decideTriggerAction WITHOUT React (ADR-0087 pure transitions idiom, prior art:
 * useInlineEdit / useValueState): the click count dispatch (1 write, 2 toggle, >2 dialog),
 * the onlyStates exception, the push-button click SUPPRESSION (ADR-0089 — press/release
 * write synchronously, the trailing browser click must not), and the toggle's
 * sameStateValue contract (string coercion across type boundaries).
 *
 * The config carries the RESOLVED states from useData — blank rows are already absent
 * there, so a widget with two configured rows but one blank resolves to ONE state and
 * clicks write (never toggle against a blank).
 */
import { describe, expect, it } from 'vitest';

import { decideTriggerAction, type StateTriggerConfig } from './stateTrigger';

const twoStates = (): StateTriggerConfig => ({
    states: [{ value: 0 }, { value: 1 }],
    onlyStates: true,
    statePushButton: false,
});

describe('decideTriggerAction — click', () => {
    it('opens the dialog when onlyStates is off (free values allowed)', () => {
        const config: StateTriggerConfig = { ...twoStates(), onlyStates: false };

        expect(decideTriggerAction('click', config, 0)).toEqual({ type: 'open-dialog' });
    });

    it('opens the dialog when onlyStates is off even with zero resolved states', () => {
        const config: StateTriggerConfig = { states: [], onlyStates: false };

        expect(decideTriggerAction('click', config, undefined)).toEqual({ type: 'open-dialog' });
    });

    it('writes the single state value — a blank second row is simply absent from states', () => {
        const config: StateTriggerConfig = { ...twoStates(), states: [{ value: 7 }] };

        expect(decideTriggerAction('click', config, 7)).toEqual({ type: 'write', value: 7 });
    });

    it('toggles to Wert[2] when the current value IS Wert[1]', () => {
        expect(decideTriggerAction('click', twoStates(), 0)).toEqual({ type: 'write', value: 1 });
    });

    it('writes Wert[1] when the current value is not Wert[1]', () => {
        expect(decideTriggerAction('click', twoStates(), 1)).toEqual({ type: 'write', value: 0 });
        expect(decideTriggerAction('click', twoStates(), undefined)).toEqual({ type: 'write', value: 0 });
    });

    it('toggles across type boundaries via the sameStateValue contract', () => {
        // String "true" meets configured boolean true → write the other state.
        const booleanStates: StateTriggerConfig = {
            states: [{ value: true }, { value: false }],
            onlyStates: true,
        };
        expect(decideTriggerAction('click', booleanStates, 'true')).toEqual({ type: 'write', value: false });

        // String "50" meets configured number 50 → write the other state.
        const numberStates: StateTriggerConfig = {
            states: [{ value: 50 }, { value: 100 }],
            onlyStates: true,
        };
        expect(decideTriggerAction('click', numberStates, '50')).toEqual({ type: 'write', value: 100 });
    });

    it('suppresses the click write in push-button mode (ADR-0089)', () => {
        const config: StateTriggerConfig = { ...twoStates(), statePushButton: true };

        expect(decideTriggerAction('click', config, 0)).toEqual({ type: 'none' });
    });

    it('opens the dialog for more than two states', () => {
        const config: StateTriggerConfig = {
            states: [{ value: 0 }, { value: 1 }, { value: 2 }],
            onlyStates: true,
        };

        expect(decideTriggerAction('click', config, 0)).toEqual({ type: 'open-dialog' });
    });

    it('opens the dialog when onlyStates is on but nothing resolved to a state', () => {
        const config: StateTriggerConfig = { states: [], onlyStates: true };

        expect(decideTriggerAction('click', config, undefined)).toEqual({ type: 'open-dialog' });
    });

    it('never writes a state whose value is undefined (worthless rows do not trigger)', () => {
        const config: StateTriggerConfig = { states: [{ value: undefined }, { value: 1 }], onlyStates: true };

        expect(decideTriggerAction('click', config, 0)).toEqual({ type: 'none' });
    });
});

describe('decideTriggerAction — press', () => {
    it('writes Wert[1] in push-button mode (onlyStates, exactly two states)', () => {
        const config: StateTriggerConfig = { ...twoStates(), statePushButton: true };

        expect(decideTriggerAction('press', config, 1)).toEqual({ type: 'write', value: 0 });
    });

    it('is none when onlyStates is off', () => {
        const config: StateTriggerConfig = { ...twoStates(), onlyStates: false, statePushButton: true };

        expect(decideTriggerAction('press', config, 1)).toEqual({ type: 'none' });
    });

    it('is none when push-button mode is off', () => {
        expect(decideTriggerAction('press', twoStates(), 1)).toEqual({ type: 'none' });
    });

    it('is none outside exactly two states', () => {
        const oneState: StateTriggerConfig = { ...twoStates(), states: [{ value: 0 }], statePushButton: true };
        const threeStates: StateTriggerConfig = {
            ...twoStates(),
            states: [{ value: 0 }, { value: 1 }, { value: 2 }],
            statePushButton: true,
        };

        expect(decideTriggerAction('press', oneState, 0)).toEqual({ type: 'none' });
        expect(decideTriggerAction('press', threeStates, 0)).toEqual({ type: 'none' });
    });
});

describe('decideTriggerAction — release', () => {
    it('writes Wert[2] in push-button mode (onlyStates, exactly two states)', () => {
        const config: StateTriggerConfig = { ...twoStates(), statePushButton: true };

        expect(decideTriggerAction('release', config, 0)).toEqual({ type: 'write', value: 1 });
    });

    it('is none when onlyStates is off', () => {
        const config: StateTriggerConfig = { ...twoStates(), onlyStates: false, statePushButton: true };

        expect(decideTriggerAction('release', config, 0)).toEqual({ type: 'none' });
    });

    it('is none when push-button mode is off', () => {
        expect(decideTriggerAction('release', twoStates(), 0)).toEqual({ type: 'none' });
    });

    it('is none outside exactly two states', () => {
        const oneState: StateTriggerConfig = { ...twoStates(), states: [{ value: 0 }], statePushButton: true };

        expect(decideTriggerAction('release', oneState, 0)).toEqual({ type: 'none' });
    });
});
