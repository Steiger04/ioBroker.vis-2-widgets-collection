/**
 * Dialog-Sitzung wiring — the thin hook over the pure session decision.
 *
 * @module widgets/DialogCollectionWidget/useDialogSession
 * @remarks
 * Holds the open state and the auto-close timer, feeds every Sitzungs-OID value change
 * (the value at mount included) into the session as an observation, and executes the
 * returned transition: the write goes directly through `context.setValue` (`ack=false`,
 * not through the Schreibkette — ADR-0095 §7), the timer action through
 * `setTimeout`/`clearTimeout`. Every rule lives in
 * {@link module:widgets/DialogCollectionWidget/dialogSession}; this hook only wires it.
 * A running timer keeps the duration it was started with; the timer is cleared on unmount.
 */
import { useCallback, useEffect, useRef, useState } from 'react';

import {
    canWriteSessionOid,
    decideDialogTransition,
    parseAutoCloseTimeout,
    type DialogEvent,
    type SessionOidObject,
} from './dialogSession';

/** Wiring inputs the body extracts from the widget context. */
export interface DialogSessionInputs {
    /** Current value of the Sitzungs-OID (`dialogId`). */
    oidValue: unknown;
    /** Object metadata of the Sitzungs-OID; `write === false` marks it read-only. */
    dialogIdObject: SessionOidObject | undefined;
    /** Raw `dialogAutoClose` configuration value. */
    autoClose: unknown;
    /** The context's backend write. */
    setValue: (id: string, value: boolean) => void;
}

/** What the body renders and binds. */
export interface DialogSession {
    /** Whether the dialog is open. */
    open: boolean;
    /** The dialog button's click. */
    onClick: () => void;
    /** A close request: X button, backdrop or Escape. */
    onClose: () => void;
}

/**
 * Wires the Dialog-Sitzung to React state, the auto-close timer and the backend write.
 *
 * @param inputs - Sitzungs-OID value and object, auto-close value and the backend write.
 */
export default function useDialogSession(inputs: DialogSessionInputs): DialogSession {
    const { oidValue, dialogIdObject, autoClose, setValue } = inputs;
    const [open, setOpen] = useState(false);
    // The decision reads the open state synchronously — events may arrive before a re-render.
    const openRef = useRef(false);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    // The latest dispatch (current config and setValue) for the stable callbacks, the
    // observation effect and the timer callback.
    const dispatchRef = useRef<(event: DialogEvent) => void>(() => undefined);

    const sessionOid = dialogIdObject?._id;
    const canWrite = canWriteSessionOid(dialogIdObject);
    const autoCloseMs = parseAutoCloseTimeout(autoClose);

    const clearTimer = (): void => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }
    };

    const dispatch = (event: DialogEvent): void => {
        const transition = decideDialogTransition(event, openRef.current, { autoCloseMs, canWrite });

        openRef.current = transition.open;
        setOpen(transition.open);

        // A write implies canWrite, hence a resolved id — the check only narrows it for TS.
        if (transition.write !== null && sessionOid) {
            setValue(sessionOid, transition.write);
        }

        if (transition.timer !== 'keep') {
            clearTimer();
        }
        if (transition.timer === 'start') {
            timerRef.current = setTimeout(() => {
                timerRef.current = null;
                dispatchRef.current({ type: 'timer-expired' });
            }, autoCloseMs);
        }
    };

    dispatchRef.current = dispatch;

    useEffect(() => {
        dispatchRef.current({ type: 'observe', value: oidValue });
    }, [oidValue]);

    useEffect(
        () => () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        },
        [],
    );

    const onClick = useCallback(() => dispatchRef.current({ type: 'click' }), []);
    const onClose = useCallback(() => dispatchRef.current({ type: 'close' }), []);

    return { open, onClick, onClose };
}
