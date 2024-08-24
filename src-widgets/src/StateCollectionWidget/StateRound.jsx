import { Paper, Typography } from "@mui/material";
import React, { useContext, useMemo } from "react";
import { CollectionContext } from "../components/CollectionProvider";

function StateRound() {
	const { t, widget, oidObject, refService } = useContext(CollectionContext);

	const _refHeight = refService?.current?.clientHeight;
	const _refWidth = refService?.current?.clientWidth;
	const _noCard = widget.data.noCard;

	const withAndHeight = useMemo(() => {
		let refHeight;
		let refWidth;

		if (_noCard) {
			refHeight = _refHeight;
			refWidth = _refWidth;
		} else {
			refHeight = _refHeight - 40;
			refWidth = _refWidth - 40;
		}

		if (refHeight > refWidth) {
			return refWidth;
		}
		return refHeight;
	}, [_refHeight, _refWidth, _noCard]);

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
				width: withAndHeight,
				height: withAndHeight,
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
