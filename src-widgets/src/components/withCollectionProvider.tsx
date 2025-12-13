import CollectionProvider from './CollectionProvider';

import type { CollectionContextProps } from 'src/types';

/**
 * Generic wrapper function for Collection widgets.
 * Accepts any CollectionContextProps type including WidgetRegistry-based types.
 * The context is cast to AllCollectionContextProps internally by CollectionProvider.
 */
function withCollectionProvider<T extends object = object>(
    component: JSX.Element | JSX.Element[] | null,
    context: CollectionContextProps<T>,
): JSX.Element {
    // Cast is safe because CollectionProvider accepts AllCollectionContextProps which is a union of all widget types
    return <CollectionProvider context={context as any}>{component}</CollectionProvider>;
}

export default withCollectionProvider;
