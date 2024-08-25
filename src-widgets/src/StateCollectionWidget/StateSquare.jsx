import { Paper, Typography } from "@mui/material";
import React, { useContext } from "react";
import { CollectionContext } from "../components/CollectionProvider";

function StateRound() {
	const { t, widget, oidObject } = useContext(CollectionContext);

	return !widget.data.circle ? (
		<Paper
			elevation="6"
			sx={{
				bgcolor: widget.style["background-color"],
				/* "&.MuiPaper-rounded": {
					borderRadius: "0",
				}, */
				/* "&.MuiPaper-elevation1": {
					boxShadow: "none",
				}, */
				width: "100%",
				height: "100%",
				display: "flex",
				flexDirection: "column",
				overflowY: "auto",
			}}
		>
			<Typography>{t("my empty widget")}</Typography>
			<Typography>{JSON.stringify(oidObject)}</Typography>
		</Paper>
	) : null;
}

export default React.memo(StateRound);
