import { Box } from "@mui/material";
import React, { useRef, useContext, useEffect } from "react";
import CollectionBase from "../components/CollectionBase";
import { CollectionContext } from "../components/CollectionProvider";
import useData from "../hooks/useData";
import useDebounce from "../hooks/useDebounce";
import useOidValue from "../hooks/useOidValue";
import MaterialUISwitch from "./MaterialUISwitch";

function SwitchCollection() {
	const ref = useRef(null);
	const { setValue, oidObject, widget } = useContext(CollectionContext);
	console.log("widget", widget);
	const { data } = useData("oid");
	console.log("data", data);
	const oidValue = useOidValue("oid");

	const oid = oidObject?._id;
	const oidType = oidObject?.common?.type;

	const delay = widget.data.sampleInterval
		? widget.data.sampleIntervalValue
		: widget.data.delay;

	const {
		debouncedValue: debouncedSliderValue,
		sampledValue: sampledSliderValue,
	} = useDebounce(oidValue, delay);

	useEffect(() => {
		if (!widget.data.sampleInterval && debouncedSliderValue !== undefined) {
			setValue(oid, debouncedSliderValue);
		}
	}, [debouncedSliderValue, oid, setValue, widget.data.sampleInterval]);

	useEffect(() => {
		if (widget.data.sampleInterval && sampledSliderValue !== undefined) {
			setValue(oid, sampledSliderValue);
		}
	}, [sampledSliderValue, oid, setValue, widget.data.sampleInterval]);

	return (
		<CollectionBase data={data} oidValue={oidValue} bgActive={false}>
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

						px: "4px",

						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					{oidValue !== undefined && widget.data.thumbSize !== undefined && (
						<MaterialUISwitch
							disabled={oidType !== "boolean"}
							width={ref.current?.clientWidth}
							height={ref.current?.clientHeight}
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
