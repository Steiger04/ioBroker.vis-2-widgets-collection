/**
 * Higher-order wrapper that injects {@link module:components/CollectionProvider.default} around a widget component.
 *
 * @module components/withCollectionProvider
 */

import type { JSX } from 'react';
import CollectionProvider from './CollectionProvider';

import type { CollectionContextProps, AllCollectionContextProps } from '../types';
import type { OidPickField } from '../lib/pickedWidgetData';

/**
 * Wraps a widget element in a {@link module:components/CollectionProvider.default}.
 *
 * @template T - Widget data type from WidgetRegistry
 * @param component - Rendered element(s) to wrap.
 * @param context - Typed collection context.
 * @param oidPickFields - The widget's id fields with the shared OID pick (see CollectionProvider).
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
    oidPickFields?: readonly OidPickField[],
): JSX.Element {
    return (
        <CollectionProvider
            context={context as AllCollectionContextProps}
            oidPickFields={oidPickFields}
        >
            {component}
        </CollectionProvider>
    );
}

export default withCollectionProvider;
