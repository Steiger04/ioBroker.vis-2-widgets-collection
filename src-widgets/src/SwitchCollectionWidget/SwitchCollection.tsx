import { Box } from '@mui/material';
import React, { useRef, useContext } from 'react';
import CollectionBase from '../components/CollectionBase';
import CollectionBaseImage from '../components/CollectionBaseImage';
import { CollectionContext } from '../components/CollectionProvider';
import useData from '../hooks/useData';
import useValueState from '../hooks/useValueState';
import MaterialUISwitch from './MaterialUISwitch';
import type { SwitchCollectionContextProps } from '../newTypes';

function SwitchCollection(): React.JSX.Element {
    const ref = useRef<HTMLDivElement>(null);
    const context = useContext(CollectionContext) as SwitchCollectionContextProps;
    const { widget } = context;

    // Sicherer Zugriff auf oidObject
    const oidObject = widget.data.oidObject;

    const { data } = useData('oid');
    const { value: oidValue, updateValue } = useValueState('oid');

    const oidType = oidObject?.type;

    const isValidType = oidType === 'boolean';

    // Handler für Switch-Änderungen mit Debouncing
    const handleSwitchChange = (): void => {
        updateValue(!oidValue);
    };

    return (
        <CollectionBase
            isValidType={isValidType}
            data={data}
            oidValue={oidValue}
        >
            <CollectionBaseImage
                data={data}
                widget={widget}
            />
            <Box
                sx={{
                    position: 'relative',

                    width: '100%',
                    height: (widget.data.trackSize && `${widget.data.trackSize}%`) || '10%',
                }}
            >
                <Box
                    ref={ref}
                    sx={{
                        width: '100%',
                        height: '100%',

                        px: '8px',

                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    {oidValue !== undefined && widget.data.thumbSize !== undefined && (
                        <MaterialUISwitch
                            disabled={oidType !== 'boolean'}
                            width={ref.current?.clientWidth}
                            maxheight={ref.current?.parentElement?.parentElement?.clientHeight}
                            data={data}
                            widget={widget}
                            checked={Boolean(oidValue)}
                            onChange={handleSwitchChange}
                            sx={{
                                '& .MuiTouchRipple-root': {
                                    color:
                                        data.iconColorActive ||
                                        data.iconColor ||
                                        data.textColorActive ||
                                        data.textColor,
                                },
                            }}
                        />
                    )}
                </Box>
            </Box>
        </CollectionBase>
    );
}

export default SwitchCollection;
