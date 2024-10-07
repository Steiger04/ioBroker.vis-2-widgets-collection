import { useEffect, useState } from "react";

const useSize = (refService) => {
	const clientWidth = refService?.current?.clientWidth;
	const clientHeight = refService?.current?.clientHeight;

	const [size, setSize] = useState(0);

	useEffect(() => {
		if (clientWidth && clientHeight) {
			if (clientWidth < clientHeight) {
				setSize(clientWidth);
			} else {
				setSize(clientHeight);
			}
		}
	}, [clientHeight, clientWidth]);

	return size;
};

export default useSize;
