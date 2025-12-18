/**
 * Renderer for the Template Collection widget.
 *
 * @module widgets/TemplateCollection
 */

import { Box } from '@mui/material';
import React, { useContext } from 'react';
import CollectionBase from '../components/CollectionBase';
import { CollectionContext } from '../components/CollectionProvider';
import useData from '../hooks/useData';
import useOidValue from '../hooks/useOidValue';
import type { TemplateCollectionContextProps } from '../types';

/**
 * Minimal example widget body.
 *
 * @returns Widget body element.
 */
function TemplateCollection(): React.ReactElement {
    const context = useContext(CollectionContext) as TemplateCollectionContextProps;
    const { widget } = context;
    const oidObject = widget.data.oidObject;

    const { data } = useData('oid');
    const oidValue = useOidValue('oid');

    const oidType = oidObject?.type;

    const isValidType = oidType === 'boolean';

    return (
        <CollectionBase
            isValidType={isValidType}
            data={data}
            oidValue={oidValue}
        >
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                TEMPLATE
            </Box>
        </CollectionBase>
    );
}

export default TemplateCollection;
