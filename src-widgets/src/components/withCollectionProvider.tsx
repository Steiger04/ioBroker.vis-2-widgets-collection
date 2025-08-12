import CollectionProvider from './CollectionProvider';

import type { CollectionContextProps } from 'src';

function withCollectionProvider(
    component: JSX.Element | JSX.Element[] | null,
    context: CollectionContextProps,
): JSX.Element | JSX.Element[] | null {
    return <CollectionProvider context={context}>{component}</CollectionProvider>;
}

export default withCollectionProvider;
