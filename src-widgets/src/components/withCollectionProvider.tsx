/**
 * Higher-order wrapper that injects {@link module:components/CollectionProvider.default} around a widget component.
 *
 * @module components/withCollectionProvider
 */

import type { JSX } from 'react';
import CollectionProvider, { type CollectionProviderInput } from './CollectionProvider';

import type { CollectionContextProps, AllCollectionContextProps } from '../types';

/**
 * Wraps a widget element in a {@link module:components/CollectionProvider.default}.
 *
 * @template T - Widget data type from WidgetRegistry
 * @param component - Rendered element(s) to wrap.
 * @param context - Typed collection context.
 * @param input - What the provider reads besides the context: the widget's field reading and the
 *   host's card permission ({@link CollectionProviderInput}). Absent: none of them.
 * @returns The same element(s) wrapped in a provider.
 * @example
 * ```tsx
 * return withCollectionProvider(<MyWidget {...props} />, context);
 * ```
 * @remarks
 * The provider expects the union type `AllCollectionContextProps`.
 * The cast is safe because all context variants are structurally compatible.
 */
function withCollectionProvider<T extends object = object>(
    component: JSX.Element | JSX.Element[] | null,
    context: CollectionContextProps<T>,
    input?: CollectionProviderInput,
): JSX.Element {
    return (
        <CollectionProvider
            {...input}
            context={context as AllCollectionContextProps}
        >
            {component}
        </CollectionProvider>
    );
}

export default withCollectionProvider;
