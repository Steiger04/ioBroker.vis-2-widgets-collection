import { useEffect } from "react";
import { useContext } from "react";
import { CollectionContext } from "../components/CollectionProvider";

const useSignals = () => {
	const { isSignalVisible, refService, widget } = useContext(CollectionContext);

	useEffect(() => {
		if (!refService?.current) return;

		const _current = refService.current?.children;

		const visible = [];
		for (let i = 0; i < widget.data["signals-count"]; i++) {
			if (isSignalVisible(i)) visible.push(i);
		}

		const children = [];
		Object.values(_current).forEach((child) => {
			if (child.children[0]?.className === "vis-signal-icon iconOwn")
				children.push(child.children[0]);
		});

		children.forEach((child, idx) => {
			const signalColor = widget.data[`signals-color-${visible[idx]}`];

			child.style.color = signalColor;
			child.style.filter = signalColor ? "drop-shadow(0px 10000px 0)" : null;
			child.style.transform = signalColor ? "translateY(-10000px)" : null;
		});
	}, [widget, refService, isSignalVisible]);
};

export default useSignals;
