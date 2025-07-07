import { useEffect, useState } from 'react';

const useRefDimensions = element => {
    const [dimensions, setDimensions] = useState({ width: null, height: null });

    useEffect(() => {
        if (!element) {
            return;
        }

        const observer = new ResizeObserver(entries => {
            const clientWidth = entries[0].contentRect.width;
            const clientHeight = entries[0].contentRect.height;

            setDimensions({
                width: Math.round(clientWidth),
                height: Math.round(clientHeight),
            });
        });

        observer.observe(element);
        // return () => element && observer.unobserve(element);
        return () => element && observer.disconnect();
    }, [element]);

    return dimensions;
};

export default useRefDimensions;
