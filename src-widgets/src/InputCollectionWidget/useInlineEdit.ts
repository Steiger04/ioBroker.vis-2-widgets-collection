/**
 * Inline-edit session for the Input collection widget.
 *
 * @module widgets/InputCollectionWidget/useInlineEdit
 * @remarks
 * ADR-0109 Nr. 1, 2: the thin shell around the pure transition
 * ({@link module:InputCollectionWidget/inlineEditSession}) over the optimistic binding from
 * {@link module:hooks/useValueState}. It feeds the transition the events of the field, the backend
 * observations, the mode, the Sperre and the conversion, and carries a value to write out through
 * `updateValue`. The backend value to display comes from `useData`.
 *
 * The backend observations run in an effect, because the transition moves the session ref and a
 * render must not. The field is only ever red after the observation that raised the conflict, one
 * render after the value, so nothing paints red and takes it back. An observation without a new
 * conflict keeps the session object and renders nothing.
 */

import { useContext, useEffect, useRef, useState } from 'react';

import { CollectionContext } from '../components/CollectionProvider';
import useValueState, { convertToOidType } from '../hooks/useValueState';
import type { CommonObjectFieldsRxData, OidObject } from '../types';
import { NO_SESSION, sessionStep } from './inlineEditSession';
import type { InlineEditEvent } from './inlineEditSession';

/** Options controlling the session mode. */
export interface UseInlineEditOptions {
    /** OK-button mode: the draft buffers until Enter, OK or a blur with a change; otherwise every keystroke writes (live). */
    showOkButton: boolean;
}

/** What the TextField of the session takes. */
export interface InlineEditField {
    /** The draft. */
    value: string;
    /** The Sitzungskonflikt (ADR-0109 Nr. 3). */
    error: boolean;
    /** Draft change: live mode writes through per keystroke, OK mode buffers. */
    onChange: (event: { target: { value: string } }) => void;
    /** Blur: OK mode commits a changed draft, live mode just leaves. */
    onBlur: () => void;
    /** Keys: Enter commits explicitly in OK mode and just leaves in live mode; Escape leaves without a commit. */
    onKeyDown: (event: { key: string }) => void;
}

/** Return type for {@link useInlineEdit}. */
export interface UseInlineEditReturn {
    /** Whether the edit session is active. */
    editing: boolean;
    /** Sperre of the OID binding (CONTEXT "Sperre"): {@link UseInlineEditReturn.start} does nothing. */
    locked: boolean;
    /** Starts the session, unless the Sperre holds. */
    start: () => void;
    /** Explicit commit (the OK button). */
    confirm: () => void;
    /** The bundle for the TextField. */
    field: InlineEditField;
}

/**
 * Binds the display-first inline edit to an ioBroker state.
 *
 * @param idName - Name of the OID property (e.g. `"oid"`).
 * @param options - Session mode options.
 * @returns The session state, its commands and the bundle for the TextField.
 */
const useInlineEdit = (idName: string, options: UseInlineEditOptions): UseInlineEditReturn => {
    const { value, updateValue, hasBackendChange, locked } = useValueState(idName);
    const { widget } = useContext(CollectionContext);
    const oidObject = widget.data[`${idName}Object` as keyof CommonObjectFieldsRxData] as OidObject | undefined;
    const oidType = oidObject?.type;

    const [session, setSession] = useState(NO_SESSION);
    // The latest step, not the last render: two events in one tick build on each other.
    const sessionRef = useRef(NO_SESSION);

    const dispatch = (event: InlineEditEvent): void => {
        const step = sessionStep(sessionRef.current, event, {
            showOkButton: options.showOkButton,
            locked,
            convert: raw => convertToOidType(raw, oidType),
        });

        if (step.session !== sessionRef.current) {
            sessionRef.current = step.session;
            setSession(step.session);
        }

        if (step.write !== undefined) {
            updateValue(step.write);
        }
    };

    // Only when something changed: a stale flag over an unchanged value is no observation.
    useEffect(() => {
        dispatch({ kind: 'backend', value, significant: hasBackendChange });
        // eslint-disable-next-line react-hooks/exhaustive-deps -- `dispatch` reads only the latest refs and inputs
    }, [value, hasBackendChange]);

    return {
        editing: session.editing,
        locked,
        start: () => dispatch({ kind: 'start', value }),
        confirm: () => dispatch({ kind: 'ok' }),
        field: {
            value: session.draft,
            error: session.conflict,
            onChange: event => dispatch({ kind: 'input', value: event.target.value }),
            onBlur: () => dispatch({ kind: 'blur' }),
            onKeyDown: event => dispatch({ kind: 'key', key: event.key }),
        },
    };
};

export default useInlineEdit;
