import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import { alpha } from "@mui/material/styles";

function isValidColorFormat(str) {
	const patterns = [
		/^#([0-9a-fA-F]{3})$/,                // #nnn
		/^#([0-9a-fA-F]{6})$/,                // #nnnnnn
		/^rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)$/, // rgb(r, g, b)
		/^rgba\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*(0|1|0?\.\d+)\s*\)$/, // rgba(r, g, b, a)
		/^hsl\(\s*\d+\s*,\s*\d+%\s*,\s*\d+%\s*\)$/, // hsl(h, s%, l%)
		/^hsla\(\s*\d+\s*,\s*\d+%\s*,\s*\d+%\s*,\s*(0|1|0?\.\d+)\s*\)$/, // hsla(h, s%, l%, a)
		/^color\(\s*[\w-]+\s+(?:\d+(\.\d+)?%?\s*)+\)$/ // basic CSS4 color() check
	];

	return patterns.some((pattern) => pattern.test(str));
}

const MaterialUISwitch = styled(Switch)(
	({ width, maxHeight, data, widget, theme }) => ({
		width: "100%",
		height: "100%",

		padding: 0,
		margin: 0,

		"&.MuiSwitch-root": {
			overflow: "visible", // erforderlich
		},

		"& .MuiSwitch-switchBase": {
			// overflow: "hidden", // ???

			margin: 0,
			padding: 0,

			top: "50%",
			left: "0%",
			transform: `translate(-50%, -50%) translateX(${maxHeight >= (widget.data.thumbSize || 62)
				? (widget.data.thumbSize / 2 - 4) || 31 - 4
				: maxHeight / 2 - 4
				}px)`,

			"& .MuiSwitch-input": {
				left: 0,
				width: width,
			},

			"&.Mui-checked": {
				top: "50%",
				left: "100%",
				transform: `translate(-50%, -50%) translateX(${maxHeight >= (widget.data.thumbSize || 62)
					? -(widget.data.thumbSize / 2 - 4) || -31 - 4
					: -(maxHeight / 2 - 4)
					}px)`,

				"& .MuiSwitch-input": {
					left: -width + (widget.data.thumbSize || 62),
					width: width,
				},

				"& .MuiSwitch-thumb": {
					backgroundColor:
						widget.data.thumbColorTrue || theme.palette.primary.main,
				},

				"& .MuiSwitch-thumb:before": {
					top: `calc(${data.iconYOffset} * -1)`,
					left: data.iconXOffset,

					backgroundSize: `${data.iconSizeOnly === 0 ? "0" : data.iconSizeOnly || "100"}% ${data.iconSizeOnly === 0 ? "0" : data.iconSizeOnly || "100"}%`,
					backgroundImage: data.iconActive && `url('${data.iconActive}')`,
				},

				"& + .MuiSwitch-track": {
					backgroundColor:
						(isValidColorFormat(widget.data.trackColor) && widget.data.trackColor) ||
						(theme.palette.mode === "dark"
							? alpha("rgb(144, 202, 249)", 0.5)
							: alpha("#1976d2", 0.5)),
				},
			},
		},

		"& .MuiSwitch-thumb": {
			backgroundColor: widget.data.thumbColorFalse,

			width: widget.data.thumbSize || 62,
			maxWidth: maxHeight,
			height: widget.data.thumbSize || 62,
			maxHeight: maxHeight,

			"&::before": {
				content: "''",
				position: "absolute",

				width: "100%",
				height: "100%",

				// top: `calc(${data.iconYOffset} * -1)`,
				// left: data.iconXOffset,

				left: `calc(0px + ${data.iconXOffset})`,
				top: `calc(0px - ${data.iconYOffset})`,

				backgroundRepeat: "no-repeat",
				backgroundPosition: "center",

				backgroundSize: `${data.iconSizeOnly === 0 ? "0" : data.iconSizeOnly || "100"}% ${data.iconSizeOnly === 0 ? "0" : data.iconSizeOnly || "100"}%`,
				backgroundImage: data.iconActive && `url('${data.iconActive}')`,

				color: data.iconColorActive || data.iconColor,
				filter:
					data.iconColorActive || data.iconColor
						? "drop-shadow(0px 10000px 0)"
						: null,
				transform:
					data.iconColorActive || data.iconColor
						? "translateY(-10000px)"
						: null,
			},
		},

		"& .MuiSwitch-track": {
			backgroundColor:
				(isValidColorFormat(widget.data.trackColor) && alpha(widget.data.trackColor, 0.5)) ||
				(theme.palette.mode === "dark"
					? alpha("#ffffff", 0.3)
					: alpha("#000000", 0.38)),
			borderRadius: 20 / 2,
		},
	}),
);

export default MaterialUISwitch;
