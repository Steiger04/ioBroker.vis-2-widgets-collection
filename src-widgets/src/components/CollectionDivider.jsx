import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import SliderCollectionWidget from "../SliderCollectionWidget/SliderCollectionWidget";

function CollectionDivider({ dividerText = "" }) {
	const style = {
		position: "absolute",
		left: 0,
		width: "100%",
	};

	return (
		<Box
			sx={{
				display: "block",
				py: dividerText ? 2 : 1,
			}}
		>
			{dividerText ? (
				<Divider sx={style}>
					<Typography color="rgba(255, 255, 255, 0.3)" variant="caption">
						{SliderCollectionWidget.t(dividerText)}
					</Typography>
				</Divider>
			) : (
				<Divider sx={style} />
			)}
		</Box>
	);
}

export default CollectionDivider;
