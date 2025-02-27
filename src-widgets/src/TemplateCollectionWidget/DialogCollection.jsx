import { Box } from "@mui/material";
import React, { useContext } from "react";
import CollectionBase from "../components/CollectionBase";
import { CollectionContext } from "../components/CollectionProvider";
import useData from "../hooks/useData";
import useOidValue from "../hooks/useOidValue";

function DialogCollection() {
	const { oidObject, widget } = useContext(CollectionContext);

	const { data } = useData("oid");
	const oidValue = useOidValue("oid");

	const oidType = oidObject?.common?.type;

	const isValidType = oidType === "boolean";

	return (
		<CollectionBase isValidType={isValidType} data={data} oidValue={oidValue}>
			{data.icon && (
				<img
					alt=""
					src={data.icon}
					style={{
						position: "absolute",
						top: `calc(0px + ${widget.data.iconYOffset})`,
						right: `calc(0px + ${widget.data.iconXOffset})`,
						width: data.iconSize,
						height: data.iconSize,
						color: data.iconColor,
						filter: data.iconColor ? "drop-shadow(0px 10000px 0)" : null,
						transform: data.iconColor ? "translateY(-10000px)" : null,
					}}
				/>
			)}

			<Box
				sx={{
					width: "100%",
					height: "100%",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				TEMPLATE
			</Box>
		</CollectionBase>
	);
}

export default DialogCollection;
