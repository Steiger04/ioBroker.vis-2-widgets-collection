import { useContext, useEffect, useState } from 'react';
import { CollectionContext } from '../components/CollectionProvider';
import useElementDimensions from './useElementDimensions';

const useSize = ref => {
    const { widget } = useContext(CollectionContext);

    const [width, setWidth] = useState('100%');
    const [height, setHeight] = useState('100%');

    const { width: clientWidth, height: clientHeight } = useElementDimensions(ref);

    useEffect(() => {
        if (!clientWidth || !clientHeight) return;

        if (clientWidth >= 0 && clientHeight >= 0) {
            if (widget.data.square || widget.data.circle) {
                if (clientWidth < widget.data.basePadding * 16 || clientHeight < widget.data.basePadding * 16) {
                    setWidth('0px');
                    setHeight('0px');
                } else {
                    if (clientWidth < clientHeight) {
                        setWidth(`${clientWidth - widget.data.basePadding * 16}px`);
                        setHeight(`${clientWidth - widget.data.basePadding * 16}px`);
                    } else {
                        setWidth(`${clientHeight - widget.data.basePadding * 16}px`);
                        setHeight(`${clientHeight - widget.data.basePadding * 16}px`);
                    }
                }
            } else {
                setWidth('100%');
                setHeight('100%');
            }
        }
    }, [clientWidth, clientHeight, widget.data.basePadding, widget.data.square, widget.data.circle]);

    return { width, height };
};

export default useSize;
