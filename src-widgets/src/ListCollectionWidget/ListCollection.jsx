import { Box } from "@mui/material";
import React, { useContext } from "react";
import CollectionBase from "../components/CollectionBase";
import { CollectionContext } from "../components/CollectionProvider";
import useData from "../hooks/useData";
import useOidValue from "../hooks/useOidValue";

function ListCollection() {
	const { oidObject } = useContext(CollectionContext);
	const { data } = useData("oid");
	const oidValue = useOidValue("oid");

	const oidType = oidObject?.common?.type;

	const isValidType =
		oidType === "boolean" || oidType === "number" || oidType === "string";

	return (
		<CollectionBase isValidType={isValidType} data={data} oidValue={oidValue}>
			<Box
				sx={{
					width: "100%",
					height: "100%",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				T E S T
			</Box>
		</CollectionBase>
	);
}

export default ListCollection;
