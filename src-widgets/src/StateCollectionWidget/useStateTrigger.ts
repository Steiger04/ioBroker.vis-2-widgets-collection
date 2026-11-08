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
 *
 * The input is Pointer Events, as in `useLongPress` (ADR-0110 Nr. 3): the mouse events a browser
 * fires after a touch reach no handler. `pointerleave` does not bubble, so moving between the
 * children of the button ends nothing. Outside push-button mode only `click` does anything.
 *
 * A touch pointer is implicitly captured by the element it went down on, so without more a finger
 * leaving the button would fire `pointerleave` only after it is lifted. The press hands that capture
 * back, then touch follows the leaving rule of the mouse. Pointer Events spec, not measured here:
 * the live check is ticket 22.
 */
import { useRef, useState, type PointerEvent as ReactPointerEvent } from 'react';

import { NO_PRESS, triggerStep } from './stateTrigger';
import type { StateTriggerConfig, TriggerEvent } from './stateTrigger';

/** What the body hands the trigger each render. */
export interface StateTriggerOptions extends StateTriggerConfig {
    /** The `useValueState` setter of the OID. */
    write: (value: string | number | boolean) => void;
}

/** What the handlers read off a pointer event. */
export type StateTriggerPointerEvent = Pick<ReactPointerEvent, 'pointerId' | 'button' | 'target'>;

/** The input handlers of the button. */
export interface StateTriggerButtonProps {
    onClick: () => void;
    onPointerDown: (event: StateTriggerPointerEvent) => void;
    onPointerUp: (event: StateTriggerPointerEvent) => void;
    onPointerLeave: (event: StateTriggerPointerEvent) => void;
    onPointerCancel: (event: StateTriggerPointerEvent) => void;
}

/** What the body wires up. */
export interface StateTrigger {
    /** Goes on the button. */
    buttonProps: StateTriggerButtonProps;
    /** The change dialog: whether a click opened it, and its close handler. */
    dialog: { open: boolean; close: () => void };
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

    const onPointerDown = ({ pointerId, button, target }: StateTriggerPointerEvent): void => {
        fire({ kind: 'press', pointerId, button });

        const press = pressRef.current;
        const element = target as Element;
        if (press.pressOpen && press.pointerId === pointerId && element.hasPointerCapture(pointerId)) {
            element.releasePointerCapture(pointerId);
        }
    };

    const release = ({ pointerId }: StateTriggerPointerEvent): void => fire({ kind: 'release', pointerId });

    return {
        buttonProps: {
            onClick: () => fire({ kind: 'click' }),
            onPointerDown,
            onPointerUp: release,
            onPointerLeave: release,
            onPointerCancel: release,
        },
        dialog: { open, close: () => setOpen(false) },
    };
}
