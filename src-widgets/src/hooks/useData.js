import { useContext, useMemo, useRef, useState } from "react";
import { CollectionContext } from "../components/CollectionProvider";
import useStyles from "./useStyles";

function useData(oid) {
	const { widget, oidObject, getPropertyValue } = useContext(CollectionContext);

	const { fontStyles, textStyles } = useStyles(widget.style);

	const [activeIndex, setActiveIndex] = useState();

	const _getPropertyValue = useRef(getPropertyValue);

	const oidValue = _getPropertyValue.current(oid);

	/* const oidValue = getPropertyValue(oid);
	const oidType = oidObject?.common?.type;
	const oidStates = oidObject?.common?.states;
	const oidName = oidObject?.common?.name;
	const noIcon = widget.data.noIcon; */

	const data = useMemo(() => {
		// console.log("data");

		function _data(ext, withUnit) {
			console.log("textStyles", textStyles);
			console.log("fontStyles", fontStyles);
			return {
				textColor:
					widget.data[`textColor${ext}`] ||
					widget.data.textColor ||
					textStyles.color ||
					"background.default",

				textSize:
					(widget.data[`valueSize${ext}`] &&
						`${widget.data[`valueSize${ext}`]}%`) ||
					(widget.data.valueSize && `${widget.data.valueSize}%`) ||
					fontStyles.fontSize,

				header: widget.data[`header${ext}`] || widget.data.header || oidName,

				headerSize:
					widget.data[`headerSize${ext}`] ||
					((widget.data.header || oidName) && widget.data.headerSize),

				footer: widget.data[`footer${ext}`] || widget.data.footer,

				footerSize:
					(widget.data.footer && widget.data.footerSize) ||
					widget.data[`footerSize${ext}`],

				alias: widget.data[`alias${ext}`],

				value: withUnit
					? `${widget.data[`value${ext}`]} ${widget.data.unit}`
					: widget.data[`value${ext}`],

				valueSize: `${widget.data[`valueSize${ext}`]}%`,

				icon: !noIcon && (widget.data[`icon${ext}`] || widget.data.icon),

				iconSize:
					(widget.data[`icon${ext}`] && widget.data[`iconSize${ext}`]) ||
					widget.data.iconSize,

				iconColor:
					(widget.data[`icon${ext}`] && widget.data[`iconColor${ext}`]) ||
					widget.data.iconColor,

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

		// const oidValue = _getPropertyValue.current(oid);
		const oidType = oidObject?.common?.type;
		const oidName = oidObject?.common?.name;
		const noIcon = widget.data.noIcon;

		switch (oidType) {
			case "boolean":
				if (oidValue) {
					return _data("On");
				}
				return _data("Off");

			case "number":
			case "string": {
				/* const value = oidStates && oidStates[String(oidValue)];
				for (let i = 1; i <= Number(widget.data.values_count); i++) {
					if (
						widget.data[`value${i}`] !== undefined &&
						(widget.data[`value${i}`] === value ||
							widget.data[`value${i}`] === String(oidValue))
					) {
						return _data(i, !value);
					}
				} */

				for (let i = 1; i <= Number(widget.data.values_count); i++) {
					// console.log("oidValue", oidValue);
					if (
						widget.data[`value${i}`] !== undefined &&
						(widget.data[`value${i}`] === oidValue ||
							widget.data[`value${i}`] === String(oidValue))
					) {
						// return _data(i, !value);
						setActiveIndex(i - 1);
						return _data(i, true);
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
	}, [widget, fontStyles, textStyles, oidObject, oidValue]);

	const { states, widgetStates, minValue, maxValue } = useMemo(() => {
		const oidType = oidObject?.common?.type;
		const oidStates = oidObject?.common?.states;

		const widgetStates = {};
		const states = [];

		let minValue = 0;
		let maxValue = 100;

		// const oidKeys = oidStates ? Object.keys(oidStates) : [];
		// const oidValues = oidStates ? Object.values(oidStates) : [];

		if (oidType === "number" || oidType === "string") {
			/* states = oidKeys.map((key) => ({
				value: oidType === "number" ? Number(key) : key,
				label: oidStates[key],
			})); */

			const oidEntries = Object.entries(oidStates);
			// console.log("oidEntries", oidEntries);
			for (let i = 1; i <= Number(widget.data.values_count); i++) {
				// const oidValuesInclude = oidKeys.includes(widget.data[`value${i}`]);
				// console.log("oidValuesInclude", oidValuesInclude);

				if (
					widget.data[`value${i}`] !== undefined &&
					widget.data[`value${i}`] !== null &&
					/\S/.test(widget.data[`value${i}`])
				) {
					const oidEntry = oidEntries.find(
						([value]) => value === widget.data[`value${i}`],
					);

					if (oidEntry && oidType === "number") {
						oidEntry[0] = Number(oidEntry[0]);
					}
					// console.log("oidEntry", oidEntry);

					states.push({
						value: oidEntry
							? oidEntry[0]
							: oidType === "number"
								? Number(widget.data[`value${i}`])
								: widget.data[`value${i}`],
						label:
							widget.data[`alias${i}`] ||
							(oidEntry
								? oidEntry[1]
								: `${widget.data[`value${i}`]}${widget.data.unit}`),
					});

					widgetStates[
						oidEntry ? String(oidEntry[0]) : widget.data[`value${i}`]
					] =
						widget.data[`alias${i}`] ||
						(oidEntry
							? oidEntry[1]
							: `${widget.data[`value${i}`]}${widget.data.unit}`);
				}
			}

			if (states.length) {
				minValue = Math.min(...states.map((state) => state.value));
				maxValue = Math.max(...states.map((state) => state.value));
			}
		}

		// console.log("states", states);
		// console.log("widgetStates", widgetStates);
		return { states, widgetStates, minValue, maxValue };
	}, [oidObject, widget]);

	return { states, widgetStates, minValue, maxValue, data, activeIndex };
}

export default useData;
