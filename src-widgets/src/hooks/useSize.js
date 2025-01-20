import { useEffect, useState } from "react";
import { useContext } from "react";
import { CollectionContext } from "../components/CollectionProvider";

const useSize = (refService) => {
	const { widget } = useContext(CollectionContext);

	const clientWidth = refService.current?.clientWidth;
	const clientHeight = refService.current?.clientHeight;

	const [width, setWidth] = useState("100%");
	const [height, setHeight] = useState("100%");

	useEffect(() => {
		if (clientWidth > 0 && clientHeight > 0) {
			if (widget.data.square || widget.data.circle) {
				if (clientWidth < clientHeight) {
					setWidth(`${clientWidth - widget.data.basePadding * 16}px`);
					setHeight(`${clientWidth - widget.data.basePadding * 16}px`);
				} else {
					setWidth(`${clientHeight - widget.data.basePadding * 16}px`);
					setHeight(`${clientHeight - widget.data.basePadding * 16}px`);
				}
			} else {
				setWidth("100%");
				setHeight("100%");
			}
		}
	}, [
		clientHeight,
		clientWidth,
		widget.data.square,
		widget.data.circle,
		widget.data.basePadding,
	]);

	return { width, height };
};

export default useSize;
