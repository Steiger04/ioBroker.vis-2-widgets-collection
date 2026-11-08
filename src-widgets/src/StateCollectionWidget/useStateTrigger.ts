/**
 * The Zustands-Auslöser on the widget — the thin hook around the pure transition.
 *
 * @module widgets/StateCollectionWidget/useStateTrigger
 * @remarks
 * ADR-0110 Nr. 1: holds the open press of {@link module:widgets/StateCollectionWidget/stateTrigger},
 * translates the input events and carries the action out: a write through the widget's one
 * `useValueState` binding (ADR-0089 Nr. 3), which the body hands in, or the change dialog. No timer
 * and no decision of its own. Writes happen synchronously in the handler, so there is no race
 * between press, release and the trailing click.
 */
import { useRef, useState } from 'react';

import { NO_PRESS, sliderRange, triggerStep } from './stateTrigger';
import type { SliderRange, StateTriggerConfig, TriggerEvent } from './stateTrigger';

/** What the body hands the trigger each render. */
export interface StateTriggerOptions extends StateTriggerConfig {
    /** The `useValueState` setter of the OID. */
    write: (value: string | number | boolean) => void;
}

/** The input handlers of the button. */
export interface StateTriggerButtonProps {
    onClick: () => void;
    onMouseDown: () => void;
    onMouseUp: () => void;
    onMouseOut: () => void;
    onTouchStart: () => void;
    onTouchEnd: () => void;
}

/** What the body wires up. */
export interface StateTrigger {
    /** Goes on the button. */
    buttonProps: StateTriggerButtonProps;
    /** The change dialog: whether a click opened it, its close handler and the range of the slider gate. */
    dialog: { open: boolean; close: () => void; slider?: SliderRange };
}

/**
 * Binds the Zustands-Auslöser to the button and the change dialog.
 *
 * @param options - What the body sees this render.
 * @returns The handlers for the button and the state of the dialog.
 */
export function useStateTrigger(options: StateTriggerOptions): StateTrigger {
    const [open, setOpen] = useState(false);
    // The latest step, not the last render: two events in one tick build on each other, so a
    // second release right after the first finds no open press.
    const pressRef = useRef(NO_PRESS);

    const fire = (event: TriggerEvent): void => {
        const step = triggerStep(pressRef.current, event, options);
        pressRef.current = step.press;

        if (step.action.type === 'write') {
            options.write(step.action.value);
        } else if (step.action.type === 'open-dialog') {
            setOpen(true);
        }
    };

    return {
        buttonProps: {
            onClick: () => fire({ kind: 'click' }),
            onMouseDown: () => fire({ kind: 'press' }),
            onMouseUp: () => fire({ kind: 'release' }),
            onMouseOut: () => fire({ kind: 'release' }),
            onTouchStart: () => fire({ kind: 'press' }),
            onTouchEnd: () => fire({ kind: 'release' }),
        },
        dialog: { open, close: () => setOpen(false), slider: sliderRange(options) },
    };
}
