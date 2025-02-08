import { Box } from "@mui/material";
import React, { useRef, useContext } from "react";
import CollectionBase from "../components/CollectionBase";
import { CollectionContext } from "../components/CollectionProvider";
import useData from "../hooks/useData";
import useDebounce from "../hooks/useDebounce";
import useOidValue from "../hooks/useOidValue";
import MaterialUISwitch from "./MaterialUISwitch";

function SwitchCollection() {
	const ref = useRef(null);
	const { setValue, oidObject, widget } = useContext(CollectionContext);
	const { data } = useData("oid");
	const oidValue = useOidValue("oid");
	// const oidValue = getPropertyValue("oid");

	const oid = oidObject?._id;
	const oidType = oidObject?.common?.type;

	const isValidType = oidType === "boolean";

	useDebounce({
		value: oidValue,
		data: widget.data,
	});

	return (
		<CollectionBase isValidType={isValidType} data={data} oidValue={oidValue}>
			{(data.icon || data.iconActive) && (
				<img
					alt=""
					src={data.icon || data.iconActive}
					style={{
						position: "absolute",
						top: `calc(0px + ${widget.data.iconYOffset})`,
						right: `calc(0px + ${widget.data.iconXOffset})`,
						width: data.iconSize || data.iconSizeActive,
						height: data.iconSize || data.iconSizeActive,
						color: data.iconColor || data.iconColorActive,
						filter:
							data.iconColor || data.iconColorActive
								? "drop-shadow(0px 10000px 0)"
								: null,
						transform:
							data.iconColor || data.iconColorActive
								? "translateY(-10000px)"
								: null,
					}}
				/>
			)}
			<Box
				sx={{
					position: "relative",

					width: "100%",
					height:
						(widget.data.trackSize && `${widget.data.trackSize}%`) || "10%",
				}}
			>
				<Box
					ref={ref}
					sx={{
						width: "100%",
						height: "100%",

						px: "8px",

						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					{oidValue !== undefined && widget.data.thumbSize !== undefined && (
						<MaterialUISwitch
							disabled={oidType !== "boolean"}
							width={ref.current?.clientWidth}
							maxHeight={
								ref.current?.parentElement?.parentElement?.clientHeight
							}
							data={data}
							widget={widget}
							checked={oidValue}
							onChange={() => setValue(oid, !oidValue)}
						/>
					)}
				</Box>
			</Box>
		</CollectionBase>
	);
}

export default SwitchCollection;
