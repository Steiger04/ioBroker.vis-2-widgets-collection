import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import { alpha } from "@mui/material/styles";

const MaterialUISwitch = styled(Switch)(
	({ width, height, maxHeight, data, widget, theme }) => ({
		/* width: "100%",
		height: "100%",

		padding: 0,
		margin: 0,
		"&.MuiSwitch-root": {
			overflow: "visible", // erforderlich
			// position: "unset",
		},
		"& .MuiSwitch-input": {
			left: 0,
			width: width,
		},
		"& .MuiSwitch-switchBase": {
			// overflow: "visible",
			top:
				maxHeight >= (widget.data.thumbSize || 62)
					? (height - 2) / 2 - (widget.data.thumbSize / 2 || 31)
					: -(maxHeight - 4) / 2,
			margin: 0,
			padding: 0,
			transform: "translateX(4px)",

			"&.Mui-checked": {
				transform: `translateX(${width}px) translateX(${
					maxHeight >= (widget.data.thumbSize || 62)
						? -(widget.data.thumbSize + 4) || -62 - 4
						: -maxHeight
				}px)`,

				"& .MuiSwitch-input": {
					left: -width + (widget.data.thumbSize || 62),
					width: width,
				},

				"& .MuiSwitch-thumb": {
					backgroundColor: widget.data.thumbColorTrue,
				},

				"& .MuiSwitch-thumb:before": {
					position: "absolute",

					width: "100%",
					height: "100%",

					top: `calc(${data.iconYOffset} * -1)`,
					left: data.iconXOffset,

					backgroundImage: data.iconActive && `url('${data.iconActive}')`,
					backgroundSize: `${data.iconSizeActive || "80%"} ${data.iconSizeActive || "80%"}`,

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

				"& + .MuiSwitch-track": {
					// opacity: 0.5,
					backgroundColor:
						widget.data.trackColor ||
						(theme.palette.mode === "dark"
							? alpha("rgb(144, 202, 249)", 0.5)
							: alpha("#1976d2", 0.5)),
				},
			},
		},
		"& .MuiSwitch-thumb": {
			width: widget.data.thumbSize || 62,
			maxWidth: maxHeight,
			height: widget.data.thumbSize || 62,
			maxHeight: maxHeight,

			backgroundColor: widget.data.thumbColorFalse,

			"&::before": {
				position: "absolute",

				width: "100%",
				height: "100%",

				top: `calc(${data.iconYOffset} * -1)`,
				left: data.iconXOffset,

				backgroundRepeat: "no-repeat",
				backgroundPosition: "center",
				backgroundImage: data.iconActive && `url('${data.iconActive}')`,
				backgroundSize: `${data.iconSizeActive || "80%"} ${data.iconSizeActive || "80%"}`,

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
				(widget.data.trackColor && alpha(widget.data.trackColor, 0.5)) ||
				(theme.palette.mode === "dark"
					? alpha("#ffffff", 0.3)
					: alpha("#000000", 0.38)),

			borderRadius: 20 / 2,
		}, */
		// width: 62,
		// height: 34,
		width: "100%",
		height: "100%",

		padding: 0,
		margin: 0,

		"&.MuiSwitch-root": {
			overflow: "visible", // erforderlich
			// position: "unset",
		},

		"& .MuiSwitch-switchBase": {
			margin: 0,
			padding: 0,

			top:
				maxHeight >= (widget.data.thumbSize || 62)
					? (height - 0) / 2 - (widget.data.thumbSize / 2 || 31)
					: -(maxHeight - 4) / 2,

			transform: "translateX(-4px)",

			"& .MuiSwitch-input": {
				left: 0,
				width: width,
			},

			"&.Mui-checked": {
				color: "#fff",

				transform: `translateX(${width}px) translateX(${
					maxHeight >= (widget.data.thumbSize || 62)
						? -(widget.data.thumbSize + 4) || -62 - 4
						: -maxHeight
				}px)`,

				"& .MuiSwitch-input": {
					left: -width + (widget.data.thumbSize || 62),
					width: width,
				},

				"& .MuiSwitch-thumb:before": {
					backgroundImage: data.iconActive && `url('${data.iconActive}')`,
				},

				"& + .MuiSwitch-track": {
					opacity: 1,
					backgroundColor:
						theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
				},
			},
		},

		"& .MuiSwitch-thumb": {
			backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
			// width: 32,
			// height: 32,

			width: widget.data.thumbSize || 62,
			maxWidth: maxHeight,
			height: widget.data.thumbSize || 62,
			maxHeight: maxHeight,

			"&::before": {
				content: "''",
				position: "absolute",
				width: "100%",
				height: "100%",
				left: 0,
				top: 0,

				backgroundRepeat: "no-repeat",
				backgroundPosition: "center",
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
			opacity: 1,
			backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
			borderRadius: 20 / 2,
		},
	}),
);

export default MaterialUISwitch;
