import CollectionProvider from './CollectionProvider';

import type { CollectionContextProps, AllCollectionContextProps } from '../types';

/**
 * Generic wrapper function for Collection widgets.
 * Wraps component with CollectionProvider and typed context.
 *
 * @template T - Widget data type from WidgetRegistry
 * @param component - React component to wrap
 * @param context - Typed collection context
 * @returns Wrapped component with provider
 */
function withCollectionProvider<T extends object = object>(
    component: JSX.Element | JSX.Element[] | null,
    context: CollectionContextProps<T>,
): JSX.Element {
    // Type assertion is safe: CollectionContextProps<T> is structurally compatible with AllCollectionContextProps
    // because AllCollectionContextProps is a union of all possible CollectionContextProps<WidgetRegistry[K]>
    return <CollectionProvider context={context as AllCollectionContextProps}>{component}</CollectionProvider>;
}

export default withCollectionProvider;
