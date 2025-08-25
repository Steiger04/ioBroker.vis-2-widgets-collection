import { Box } from '@mui/material';
import React, { useContext } from 'react';
import CollectionBase from '../components/CollectionBase';
import { CollectionContext } from '../components/CollectionProvider';
import useData from '../hooks/useData';
import useOidValue from '../hooks/useOidValue';

function Light2Collection(): React.ReactElement {
    const context = useContext(CollectionContext);
    const { widget } = context;

    const { data } = useData('oid');
    const oidValue = useOidValue('oid');

    // Type-safe Zugriff auf das OID Object
    const colorLightSwitchOidObject = widget.data.colorLightSwitchOidObject;
    const oidType = colorLightSwitchOidObject?.type;
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

export default Light2Collection;
