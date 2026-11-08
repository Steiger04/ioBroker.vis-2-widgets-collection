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
 *
 * Unmount and the Sperre taking hold end an open press from outside (ADR-0110 Nr. 4), which is what
 * the two effects are for. `write === false` is held back by the guard of the Schreibkette.
 *
 * Push-button mode owns the touch surface of the button (ADR-0110 Nr. 7): a long press neither pans
 * nor opens the browser's menu. Outside that mode the button stays as it is, scrolling included.
 */
import {
    useCallback,
    useEffect,
    useRef,
    useState,
    type MouseEvent as ReactMouseEvent,
    type PointerEvent as ReactPointerEvent,
} from 'react';

import { isPushButtonMode, NO_PRESS, sliderRange, triggerStep } from './stateTrigger';
import type { UpdateValueOptions } from '../hooks/useValueState';
import type { SliderRange, StateTriggerConfig, TriggerEvent } from './stateTrigger';

/** What the body hands the trigger each render. */
export interface StateTriggerOptions extends StateTriggerConfig {
    /** The `useValueState` setter of the OID. */
    write: (value: string | number | boolean, options?: UpdateValueOptions) => void;
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
    onContextMenu: (event: Pick<ReactMouseEvent, 'preventDefault'>) => void;
}

/** What the body wires up. */
export interface StateTrigger {
    /** Goes on the button. */
    buttonProps: StateTriggerButtonProps;
    /** Goes into the `sx` of the button. */
    buttonSx: { touchAction?: 'none' };
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
    // The latest render: the cleanup on unmount must not write with the setter and the Wert[2] of the mount.
    const optionsRef = useRef(options);
    optionsRef.current = options;

    const fire = useCallback((event: TriggerEvent): void => {
        const current = optionsRef.current;
        const step = triggerStep(pressRef.current, event, current);
        pressRef.current = step.press;

        if (step.action.type === 'write') {
            if (step.action.immediate) {
                current.write(step.action.value, { immediate: true });
            } else {
                current.write(step.action.value);
            }
        } else if (step.action.type === 'open-dialog') {
            setOpen(true);
        }
    }, []);

    // The Sperre taking hold ends the open press; lifting it starts none.
    const { locked } = options;
    useEffect(() => {
        if (locked) {
            fire({ kind: 'end' });
        }
    }, [locked, fire]);

    // Cleans up after `useValueState` (hook order, pinned in the body suite): Wert[2] is the last value
    // sent, and the immediate write needs no live debounce.
    useEffect(() => (): void => fire({ kind: 'end' }), [fire]);

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
            onContextMenu: event => {
                if (isPushButtonMode(optionsRef.current)) {
                    event.preventDefault();
                }
            },
        },
        buttonSx: isPushButtonMode(options) ? { touchAction: 'none' } : {},
        dialog: { open, close: () => setOpen(false), slider: sliderRange(options) },
    };
}
