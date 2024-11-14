import { Box, Slider, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useRef, useMemo, useContext, useEffect } from "react";
import CollectionBase from "../components/CollectionBase";
import { CollectionContext } from "../components/CollectionProvider";
import useData from "../hooks/useData";
import useDebounce from "../hooks/useDebounce";
import useSize from "../hooks/useSize";
import useStyles from "../hooks/useStyles";

function SliderCollection() {
	const { values, setState, setValue, oidObject, widget, getPropertyValue } =
		useContext(CollectionContext);
	const data = useData();
	const theme = useTheme();
	const { backgroundStyles } = useStyles(widget.style);
	const ref = useRef(null);
	const isEllipse = !widget.data.square && !widget.data.circle;
	const { size } = useSize(ref, isEllipse);

	const oidType = oidObject?.common?.type;
	const oidStates = oidObject?.common?.states;
	const oid = oidObject?._id;
	const debouncedSliderValue = useDebounce(getPropertyValue("oid"));

	const startIconColor =
		widget.data.startIconColor ||
		data.textColor ||
		data.backgroundColor ||
		backgroundStyles.backgroundColor ||
		theme.palette.background.default;

	const endIconColor =
		widget.data.endIconColor ||
		data.textColor ||
		data.backgroundColor ||
		backgroundStyles.backgroundColor ||
		theme.palette.background.default;

	useEffect(() => {
		if (debouncedSliderValue !== undefined) {
			setValue(oid, debouncedSliderValue);
		}
	}, [debouncedSliderValue, oid, setValue]);

	const sliderMarks = useMemo(
		() =>
			oidStates &&
			Object.keys(oidStates).map((key) => ({
				value: Number(key),
				label: oidStates[key],
			})),
		[oidStates],
	);

	return (
		<CollectionBase ref={ref}>
			{data.icon && (
				<img
					alt=""
					src={data.icon}
					style={{
						position: "absolute",
						top: widget.data.noCard
							? `calc(${theme.spacing(widget.data.basePadding)} / 2 + 4px)`
							: `calc(${theme.spacing(widget.data.basePadding)} / 2 + 8px)`,
						right: widget.data.noCard
							? `calc(${theme.spacing(widget.data.basePadding)} + 4px)`
							: `calc(${theme.spacing(widget.data.basePadding)} + 8px)`,
						width: `calc(24px * ${data.iconSize} / 100)` || "24px",
						height: `calc(24px * ${data.iconSize} / 100)` || "24px",
						color: data.iconColor,
						filter: data.iconColor ? "drop-shadow(0px 10000px 0)" : null,
						transform: data.iconColor ? "translateY(-10000px)" : null,
					}}
				/>
			)}

			<Box
				sx={{
					// color: data.iconColor || "background.default",
					bgcolor: "transparent",
					width: `calc(${size}px)`,
					height: `calc(${size}px)`,
					overflow: "visible",
					px: 3,
					justifyContent: "center",
					alignItems: "center",
					display: "flex",
					flexGrow: 1,
				}}
			>
				<Stack
					spacing={2}
					direction="row"
					sx={{
						width: "100%",
						height: "100%",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					{widget.data.iconMin && (
						<img
							alt=""
							src={widget.data.iconMin}
							style={{
								width: widget.data.iconSizeStart || "24px",
								height: widget.data.iconSizeStart || "24px",
								color: startIconColor,
								filter: startIconColor ? "drop-shadow(0px 10000px 0)" : null,
								transform: startIconColor ? "translateY(-10000px)" : null,
							}}
						/>
					)}
					<Slider
						sx={{
							color:
								data.textColor ||
								data.backgroundColor ||
								backgroundStyles.backgroundColor ||
								"background.default",
							"& .MuiSlider-markLabel": {
								color:
									data.textColor ||
									data.backgroundColor ||
									backgroundStyles.backgroundColor ||
									"background.default",
								fontSize: `${widget.data.markerTextSize}%` || "1em",
							},
							"& .MuiSlider-markLabelActive": {
								color:
									data.textColor ||
									data.backgroundColor ||
									backgroundStyles.backgroundColor ||
									"background.default",
							},
						}}
						marks={sliderMarks}
						step={sliderMarks ? null : 1}
						disabled={oidType !== "number"}
						size={widget.data.sliderSize}
						value={getPropertyValue("oid") || 0}
						onChange={(_, value) =>
							setState({ values: { ...values, [`${oid}.val`]: value } })
						}
					/>

					{widget.data.iconMax && (
						<img
							alt=""
							src={widget.data.iconMax}
							style={{
								width: widget.data.iconSizeEnd || "24px",
								height: widget.data.iconSizeEnd || "24px",
								color: endIconColor,
								filter: endIconColor ? "drop-shadow(0px 10000px 0)" : null,
								transform: endIconColor ? "translateY(-10000px)" : null,
							}}
						/>
					)}
				</Stack>
			</Box>
		</CollectionBase>
	);
}

export default SliderCollection;
