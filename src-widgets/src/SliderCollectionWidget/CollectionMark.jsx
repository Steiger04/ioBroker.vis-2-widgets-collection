import { SliderMarkLabel } from "@mui/material";
import { Box } from "@mui/material";
import React, { useRef, useEffect } from "react";

const CollectionMark = (props) => {
	const ref = useRef(null);

	const index = props["data-index"];
	const mark = props.ownerState.marks[index];

	useEffect(() => {
		if (ref.current) {
			// ref.current.insertAdjacentHTML("afterbegin", mark.label);
			ref.current.innerHTML = mark.label;
		}
	}, [mark.label]);

	return (
		<SliderMarkLabel
			{...props}
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Box
				data-font="active"
				ref={ref}
				sx={{
					flexGrow: 1,
					pb: 1,

					/* fontSize:
						(mark.fontSize !== undefined || mark.fontSize === 0) &&
						`${mark.fontSize}%`, */

					fontSize: typeof mark.fontSize === "number" && `${mark.fontSize}%`,

					color: mark.textColor,
				}}
			/>
			<Box
				sx={{
					flexGrow: 1,
				}}
			>
				{mark.icon && (
					<img
						data-img="active"
						src={mark.icon}
						alt=""
						style={{
							width: `${(24 * mark.iconWidth) / 100}px`,
							height: `${(24 * mark.iconHeight) / 100}px`,

							color: mark.iconColor,
							filter: mark.iconColor ? "drop-shadow(0px 10000px 0)" : null,
							transform: mark.iconColor ? "translateY(-10000px)" : null,
						}}
					/>
				)}
			</Box>
		</SliderMarkLabel>
	);
};

export default CollectionMark;
