import { useContext, useMemo } from "react";
import { CollectionContext } from "../components/CollectionProvider";

function useData(oid) {
	const { widget, oidObject, getPropertyValue } = useContext(CollectionContext);

	const oidValue = getPropertyValue(oid);
	const oidType = oidObject?.common?.type;
	const oidStates = oidObject?.common?.states;
	const noIcon = widget.data.noIcon;

	const data = useMemo(() => {
		function _data(ext, withUnit) {
			return {
				textColor: widget.data[`textColor${ext}`] || widget.data.textColor,
				header: widget.data[`header${ext}`] || widget.data.header,
				headerSize: widget.data[`headerSize${ext}`] || widget.data.headerSize,
				value: withUnit
					? `${widget.data[`value${ext}`]} ${widget.data.unit}`
					: widget.data[`value${ext}`],
				valueSize: widget.data[`valueSize${ext}`],
				icon: !noIcon && (widget.data[`icon${ext}`] || widget.data.icon),
				iconSize:
					(widget.data[`icon${ext}`] && widget.data[`iconSize${ext}`]) ||
					widget.data.iconSize,
				iconColor:
					(widget.data.icon && widget.data.iconColor) ||
					widget.data[`iconColor${ext}`],
				iconHover:
					(widget.data[`icon${ext}`] && widget.data[`iconHover${ext}`]) ||
					widget.data.iconHover,
				iconXOffset:
					(widget.data[`icon${ext}`] && widget.data[`iconXOffset${ext}`]) ||
					widget.data.iconXOffset,
				iconYOffset:
					(widget.data[`icon${ext}`] && widget.data[`iconYOffset${ext}`]) ||
					widget.data.iconYOffset,

				backgroundColor:
					widget.data[`backgroundColor${ext}`] || widget.data.backgroundColor,
				background: widget.data[`background${ext}`] || widget.data.background,
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
				for (let i = 1; i <= Number(widget.data.values_count); i++) {
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
				return _data("");
		}
	}, [widget, oidType, oidValue, oidStates, noIcon]);

	const widgetStates = useMemo(() => {
		const _widgetStates = {};

		for (let i = 1; i <= Number(widget.data.values_count); i++) {
			if (!!widget.data[`value${i}`] || widget.data[`value${i}`] === "0") {
				_widgetStates[widget.data[`value${i}`]] =
					widget.data[`header${i}`] ||
					`${widget.data[`value${i}`]}${widget.data.unit}`;
			}
		}

		return _widgetStates;
	}, [widget]);

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

			if (states.length) {
				minValue = Math.min(...states.map((state) => state.value));
				maxValue = Math.max(...states.map((state) => state.value));
			}
		}

		return { states, minValue, maxValue };
	}, [oidType, oidStates, widget]);

	return { states, widgetStates, minValue, maxValue, data };
}

export default useData;
