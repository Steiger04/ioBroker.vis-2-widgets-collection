import { useEffect, useState } from "react";
import { useContext } from "react";
import { CollectionContext } from "../components/CollectionProvider";

const useSize = (ref) => {
	const { widget } = useContext(CollectionContext);

	const [width, setWidth] = useState("100%");
	const [height, setHeight] = useState("100%");

	useEffect(() => {
		if (!ref) return;

		const observer = new ResizeObserver((entries) => {
			const clientWidth = entries[0].contentRect.width;
			const clientHeight = entries[0].contentRect.height;

			if (
				clientWidth !== undefined &&
				clientHeight !== undefined &&
				clientWidth >= 0 &&
				clientHeight >= 0
			) {
				if (widget.data.square || widget.data.circle) {
					if (
						clientWidth < widget.data.basePadding * 16 ||
						clientHeight < widget.data.basePadding * 16
					) {
						setWidth("0px");
						setHeight("0px");
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
					setWidth("100%");
					setHeight("100%");
				}
			}
		});
		observer.observe(ref);
		return () => ref && observer.unobserve(ref);
	}, [widget.data.square, widget.data.circle, widget.data.basePadding, ref]);

	return { width, height };
};

export default useSize;
