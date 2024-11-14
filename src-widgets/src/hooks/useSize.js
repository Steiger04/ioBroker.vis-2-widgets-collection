import { useEffect, useState } from "react";

const useSize = (refService, ellipse) => {
	const clientWidth = refService?.current?.clientWidth;
	const clientHeight = refService?.current?.clientHeight;
	const [size, setSize] = useState(0);

	const [height, setHeight] = useState(0);
	const [width, setWidth] = useState(0);

	useEffect(() => {
		if (clientWidth && clientHeight) {
			if (clientWidth < clientHeight) {
				setSize(clientWidth);
			} else {
				setSize(clientHeight);
			}
		}
	}, [clientHeight, clientWidth]);

	useEffect(() => {
		if (clientWidth > 0 && clientHeight > 0) {
			if (ellipse) {
				setHeight("100%");
				setWidth("100%");
			} else {
				if (clientWidth < clientHeight) {
					setWidth(`${clientWidth}px`);
					setHeight(`${clientWidth}px`);
				} else {
					setWidth(`${clientHeight}px`);
					setHeight(`${clientHeight}px`);
				}
			}
		}
	}, [clientHeight, clientWidth, ellipse]);

	return { size, width, height };
};

export default useSize;
