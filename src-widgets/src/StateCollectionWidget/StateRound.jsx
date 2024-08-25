import { Paper, Typography } from "@mui/material";
import React, { useContext, useMemo } from "react";
import { CollectionContext } from "../components/CollectionProvider";

function StateRound() {
	const { t, widget, oidObject, refService } = useContext(CollectionContext);

	const paperWidth = useMemo(() => {
		if (refService?.current?.clientWidth && refService?.current?.clientHeight) {
			if (refService.current.clientWidth < refService.current.clientHeight) {
				if (widget.data.noCard) {
					return refService.current.clientWidth;
				}
				return refService.current.clientWidth - 40;
			}
			if (widget.data.noCard) {
				return refService.current.clientHeight;
			}
			return refService.current.clientHeight - 40;
		}
		return "100%";
	}, [
		widget.data.noCard,
		refService?.current?.clientHeight,
		refService?.current?.clientWidth,
	]);

	const paperHeight = useMemo(() => {
		if (refService?.current?.clientHeight && refService?.current?.clientWidth) {
			if (refService.current.clientHeight < refService.current.clientWidth) {
				if (widget.data.noCard) {
					return refService.current.clientHeight;
				}
				return refService.current.clientHeight - 40;
			}
			if (widget.data.noCard) {
				return refService.current.clientWidth;
			}
			return refService.current.clientWidth - 40;
		}
		return "100%";
	}, [
		widget.data.noCard,
		refService?.current?.clientHeight,
		refService?.current?.clientWidth,
	]);

	return widget.data.circle ? (
		<Paper
			elevation="6"
			sx={{
				bgcolor: widget.style["background-color"],

				"&.MuiPaper-rounded": {
					borderRadius: "50%",
				},
				/* "&.MuiPaper-elevation1": {
					boxShadow: "none",
				}, */
				width: paperWidth,
				height: paperHeight,
				display: "flex",
				flexDirection: "column",
				overflowY: "auto",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Typography>{t("my empty widget")}</Typography>
			<Typography>{JSON.stringify(oidObject)}</Typography>
		</Paper>
	) : null;
}

export default React.memo(StateRound);
