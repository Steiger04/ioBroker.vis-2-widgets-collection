import { useContext, useMemo } from "react";
import { CollectionContext } from "../components/CollectionProvider";

function useData(oid) {
	const { widget, oidObject, getPropertyValue } = useContext(CollectionContext);

	const oidValue = getPropertyValue(oid);
	const oidType = oidObject?.common?.type;
	const oidStates = oidObject?.common?.states;
	const oidIcon = oidObject?.common?.icon;
	const noIcon = widget.data.noIcon;

	const data = useMemo(() => {
		function _data(ext, withUnit) {
			return {
				textColor: widget.data[`textColor${ext}`],
				header: widget.data[`header${ext}`],
				headerSize: widget.data[`headerSize${ext}`],
				value: withUnit
					? `${widget.data[`value${ext}`]} ${widget.data.unit}`
					: widget.data[`value${ext}`],
				valueSize: widget.data[`valueSize${ext}`],
				icon: !noIcon && (widget.data[`icon${ext}`] || oidIcon),
				iconSize: widget.data[`iconSize${ext}`],
				iconXOffset: widget.data[`iconXOffset${ext}`],
				iconYOffset: widget.data[`iconYOffset${ext}`],
				iconColor: widget.data[`iconColor${ext}`],
				iconHover: widget.data[`iconHover${ext}`],
				backgroundColor: widget.data[`backgroundColor${ext}`],
				background: widget.data[`background${ext}`],
			};
		}

		switch (oidType) {
			case "boolean":
				if (oidValue) {
					return _data("On");
				}
				return _data("Off");

			case "number":
			case "string": {
				const value = oidStates && oidStates[String(oidValue)];
				for (let i = 1; i <= widget.data.values_count; i++) {
					if (
						widget.data[`value${i}`] !== undefined &&
						(widget.data[`value${i}`] === value ||
							widget.data[`value${i}`] === String(oidValue))
					) {
						return _data(i, !value);
					}
				}

				if (oidValue) {
					return _data("On");
				}
				return _data("Off");
			}

			default:
				// return {};
				return _data("Off");
		}
	}, [widget, oidType, oidValue, oidStates, oidIcon, noIcon]);

	const { states, minValue, maxValue } = useMemo(() => {
		let states = [];
		let minValue = 0;
		let maxValue = 100;

		const oidKeys = oidStates ? Object.keys(oidStates) : [];
		const oidValues = oidStates ? Object.values(oidStates) : [];

		if (oidType === "number" || oidType === "string") {
			states = oidKeys.map((key) => ({
				value: Number(key),
				label: oidStates[key],
			}));

			for (let i = 1; i <= Number(widget.data.values_count); i++) {
				if (
					widget.data[`value${i}`] !== undefined &&
					!oidValues.includes(widget.data[`value${i}`])
				) {
					states.push({
						value: Number(widget.data[`value${i}`]),
						label: `${widget.data[`value${i}`]}${widget.data.unit}`,
					});
				}
			}

			// console.log("states", states);

			if (states.length) {
				minValue = Math.min(...states.map((state) => state.value));
				maxValue = Math.max(...states.map((state) => state.value));
			}

			// console.log("useData -> minValue", minValue);
			// console.log("useData -> maxValue", maxValue);
		}

		return { states, minValue, maxValue };
	}, [oidType, oidStates, widget]);

	return { states, minValue, maxValue, data };
}

export default useData;
