/**
 * CollectionProvider — the card decision.
 *
 * @module components/CollectionProvider.test
 * @remarks
 * The host's permission to carry a card (not embedded) reaches the provider under its own name;
 * the context's `wrappedContent` it hands down means only "the card is shown": the permission,
 * taken away by the effective `noCard` (ADR-0117). An incoming `wrappedContent` decides nothing.
 */
import { useContext, type FC } from 'react';
import { afterEach, describe, expect, it } from 'vitest';

import CollectionProvider, { CollectionContext } from './CollectionProvider';
import { buildPreviewContext } from '../preview/mockContext';
import { collectionScene } from '../lib/testing/collectionScene';
import { renderComponent, type RenderComponentHandle } from '../lib/testing/testHarness';

const mounted: RenderComponentHandle<object>[] = [];

afterEach(() => {
    mounted.splice(0).forEach(handle => handle.unmount());
});

/**
 * Whether the body sees the card shown, mounted over a context whose own `wrappedContent` says
 * `incoming` (absent: no such key).
 */
const cardShown = (
    data: Record<string, unknown>,
    hostAllowsCard: boolean | undefined,
    incoming?: boolean,
): boolean | undefined => {
    // As Generic builds it: without the card decision.
    const context = buildPreviewContext(collectionScene('provider-card', data, null));
    const seen: { current?: boolean } = {};
    const Probe: FC = () => {
        seen.current = useContext(CollectionContext).wrappedContent;
        return null;
    };
    const given = incoming === undefined ? context : { ...context, wrappedContent: incoming };
    const Host: FC = () => (
        <CollectionProvider
            context={given}
            hostAllowsCard={hostAllowsCard}
        >
            <Probe />
        </CollectionProvider>
    );
    mounted.push(renderComponent(Host, {}));
    return seen.current;
};

describe('CollectionProvider: the card decision', () => {
    it('shows the card where the host allows it, whatever the incoming context says', () => {
        expect(cardShown({}, true, false)).toBe(true);
    });

    it('shows no card where the host denies it (embedded), whatever the incoming context says', () => {
        expect(cardShown({}, false, true)).toBe(false);
    });

    it('lets the widget carry its card when no permission is given', () => {
        expect(cardShown({}, undefined)).toBe(true);
    });

    it('takes the allowed card away for an own noCard', () => {
        expect(cardShown({ noCard: true }, true, true)).toBe(false);
    });
});
