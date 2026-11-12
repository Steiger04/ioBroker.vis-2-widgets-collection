/**
 * Higher-order wrapper that injects {@link module:components/CollectionProvider.default} around a widget component.
 *
 * @module components/withCollectionProvider
 */

import type { JSX } from 'react';
import CollectionProvider from './CollectionProvider';

import type { CollectionContextProps, AllCollectionContextProps } from '../types';
import type { WidgetDataReading } from '../lib/pickedWidgetData';

/**
 * Wraps a widget element in a {@link module:components/CollectionProvider.default}.
 *
 * @template T - Widget data type from WidgetRegistry
 * @param component - Rendered element(s) to wrap.
 * @param context - Typed collection context.
 * @param reading - What the widget data's reading takes from the widget's fields (see CollectionProvider).
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
    reading?: WidgetDataReading,
): JSX.Element {
    return (
        <CollectionProvider
            context={context as AllCollectionContextProps}
            reading={reading}
        >
            {component}
        </CollectionProvider>
    );
}

export default withCollectionProvider;
