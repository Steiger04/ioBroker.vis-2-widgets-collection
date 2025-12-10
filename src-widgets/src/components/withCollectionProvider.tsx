import { type CommonFieldsRxData } from '../lib/commonFields';
import { type CommonObjectFieldsRxData } from '../lib/commonObjectFields';
import CollectionProvider from './CollectionProvider';

import type { CollectionContextProps } from 'src/types';

function withCollectionProvider(
    component: JSX.Element | JSX.Element[] | null,
    context: CollectionContextProps<CommonObjectFieldsRxData & CommonFieldsRxData>,
): JSX.Element {
    return <CollectionProvider context={context}>{component}</CollectionProvider>;
}

export default withCollectionProvider;
