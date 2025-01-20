import { useContext, useMemo, useState } from "react";
import { CollectionContext } from "../components/CollectionProvider";
import useOidValue from "./useOidValue";
import useStyles from "./useStyles";

function useData(oid) {
	const { theme, widget, oidObject } = useContext(CollectionContext);
	const { fontStyles, textStyles, backgroundStyles } = useStyles(widget.style);
	const [activeIndex, setActiveIndex] = useState();

	const oidValue = useOidValue(oid);

	const data = useMemo(() => {
		function _data(ext) {
			return {
				textColor:
					widget.data.textColor ||
					textStyles.color ||
					theme.palette.primary.main,

				textColorActive: widget.data[`textColor${ext}`],

				header:
					widget.data.headerActive ||
					widget.data[`header${ext}`] ||
					widget.data.header ||
					oidName,

				headerSize:
					(widget.data.headerSize && `${widget.data.headerSize}%`) ||
					(widget.data.headerSizeActive &&
						`${widget.data.headerSizeActive}%`) ||
					(widget.data[`headerSize${ext}`] &&
						`${widget.data[`headerSize${ext}`]}%`) ||
					fontStyles.fontSize,

				footer:
					widget.data.footerActive ||
					widget.data[`footer${ext}`] ||
					widget.data.footer,

				footerSize:
					(widget.data.footerSize && `${widget.data.footerSize}%`) ||
					(widget.data.footerSizeActive &&
						`${widget.data.footerSizeActive}%`) ||
					(widget.data[`footerSize${ext}`] &&
						`${widget.data[`footerSize${ext}`]}%`) ||
					fontStyles.fontSize,

				alias: widget.data[`alias${ext}`],

				value:
					widget.data[`value${ext}`] &&
					`${widget.data[`value${ext}`]}${widget.data.unit}`,

				valueSize:
					(widget.data.valueSize && `${widget.data.valueSize}%`) ||
					fontStyles.fontSize,

				valueSizeActive:
					widget.data[`valueSize${ext}`] &&
					`${widget.data[`valueSize${ext}`]}%`,

				icon:
					!widget.data.noIcon && (widget.data.icon || widget.data.iconSmall),

				iconActive:
					!widget.data.noIcon &&
					(widget.data[`icon${ext}`] || widget.data[`iconSmall${ext}`]),

				iconSize:
					((widget.data.iconSize || widget.data.iconSize === 0) &&
						`calc(24px * ${widget.data.iconSize} / 100)`) ||
					"24px",

				iconSizeActive:
					widget.data[`iconSize${ext}`] &&
					`calc(24px * ${widget.data[`iconSize${ext}`]} / 100)`,

				iconSizeOnly: widget.data[`iconSize${ext}`] || widget.data.iconSize,

				// iconColor: widget.data.iconColor || theme.palette.primary.main,
				iconColor: widget.data.iconColor,
				iconColorActive: widget.data[`iconColor${ext}`],

				iconHover: widget.data.iconHover && `${widget.data.iconHover}%`,
				iconHoverActive:
					widget.data[`iconHover${ext}`] &&
					`${widget.data[`iconHover${ext}`]}%`,

				iconXOffset:
					(!!widget.data[`iconXOffset${ext}`] &&
						widget.data[`iconXOffset${ext}`]) ||
					(!!widget.data.iconXOffset && widget.data.iconXOffset) ||
					"0px",

				iconYOffset:
					(!!widget.data[`iconYOffset${ext}`] &&
						widget.data[`iconYOffset${ext}`]) ||
					(!!widget.data.iconYOffset && widget.data.iconYOffset) ||
					"0px",

				backgroundColor:
					widget.data.backgroundColor || backgroundStyles.backgroundColor,

				backgroundColorActive: widget.data[`backgroundColor${ext}`],

				background: widget.data.background || backgroundStyles.background,

				backgroundActive: widget.data[`background${ext}`],

				frameBackgroundColor:
					widget.data.frameBackgroundColor || backgroundStyles.backgroundColor,

				frameBackgroundColorActive: widget.data[`frameBackgroundColor${ext}`],

				frameBackground:
					widget.data.frameBackground || backgroundStyles.background,

				frameBackgroundActive: widget.data[`frameBackground${ext}`],
			};
		}

		const oidType = oidObject?.common?.type;
		const oidName = oidObject?.common?.name;

		switch (oidType) {
			case "boolean":
			case "number":
			case "string": {
				for (let i = 1; i <= Number(widget.data.values_count); i++) {
					if (
						widget.data[`value${i}`] !== undefined &&
						(widget.data[`value${i}`] === oidValue ||
							widget.data[`value${i}`] === String(oidValue))
					) {
						setActiveIndex(i);
						return _data(i);
					}
				}

				return _data("");
			}

			default:
				return _data("");
		}
	}, [
		widget,
		fontStyles,
		textStyles,
		backgroundStyles,
		oidObject,
		oidValue,
		theme,
	]);

	const { states, widgetStates, minValue, maxValue } = useMemo(() => {
		const oidType = oidObject?.common?.type;
		const oidStates = oidObject?.common?.states || {};

		const widgetStates = {};
		const states = [];

		let minValue = 0;
		let maxValue = 100;

		if (oidType === "number" || oidType === "string") {
			const oidEntries = Object.entries(oidStates);

			for (let i = 1; i <= Number(widget.data.values_count); i++) {
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

		if (oidType === "boolean") {
			for (let i = 1; i <= Number(widget.data.values_count); i++) {
				states.push({
					value: widget.data[`value${i}`],
					label: widget.data[`alias${i}`],
				});

				widgetStates[String(widget.data[`value${i}`])] =
					widget.data[`value${i}`];
			}
		}

		return { states, widgetStates, minValue, maxValue };
	}, [oidObject, widget]);

	return { states, widgetStates, minValue, maxValue, data, activeIndex };
}

export default useData;
