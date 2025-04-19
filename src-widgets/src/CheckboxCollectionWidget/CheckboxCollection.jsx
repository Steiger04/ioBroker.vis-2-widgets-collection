import { Box, Typography } from "@mui/material";
import { Checkbox, FormControlLabel } from "@mui/material";
import React, { useContext, useState } from "react";
import CollectionBase from "../components/CollectionBase";
import CollectionBaseImage from "../components/CollectionBaseImage";
import { CollectionContext } from "../components/CollectionProvider";
import useData from "../hooks/useData";
import useHtmlValue from "../hooks/useHtmlValue";
import useStyles from "../hooks/useStyles";
import useValueState from "../hooks/useValueState";

const defaultIconTrue =
	"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSAzSDVhMiAyIDAgMCAwLTIgMnYxNGEyIDIgMCAwIDAgMiAyaDE0YTIgMiAwIDAgMCAyLTJWNWEyIDIgMCAwIDAtMi0yem0tOSAxNGwtNS01bDEuNDEtMS40MUwxMCAxNC4xN2w3LjU5LTcuNTlMMTkgOGwtOSA5eiIvPjwvc3ZnPg==";
const defaultIconFalse =
	"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSA1djE0SDVWNWgxNG0wLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yeiIvPjwvc3ZnPg==";

function CheckboxCollection() {
	const [contentRef, setContentRef] = useState(null);
	const { oidObject, widget } = useContext(CollectionContext);
	const { textStyles, fontStyles } = useStyles(widget.style);
	const { data } = useData("oid");
	const { value: oidValue, setValueState: setOidValueState } =
		useValueState("oid");

	const oidType = oidObject?.common?.type;

	const isValidType = oidType === "boolean";

	useHtmlValue(contentRef, oidValue, widget, data);

	return (
		<CollectionBase isValidType={isValidType} data={data} oidValue={oidValue}>
			<CollectionBaseImage data={data} widget={widget} />

			<Box
				sx={{
					width: "100%",
					height: "100%",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				{oidValue !== undefined && (
					<FormControlLabel
						labelPlacement={widget.data.checkboxLabelPlacement}
						sx={{
							width: "100%",
							height: "100%",

							display: "flex",

							"&.MuiFormControlLabel-labelPlacementStart": {
								m: 0,
							},
							"&.MuiFormControlLabel-labelPlacementEnd": {
								m: 0,
							},
							"&.MuiFormControlLabel-labelPlacementTop": {
								m: 0,
							},
							"&.MuiFormControlLabel-labelPlacementBottom": {
								m: 0,
							},
						}}
						control={
							<Checkbox
								disabled={widget.data.onlyDisplay}
								disableRipple
								checked={oidValue}
								onChange={() => setOidValueState(!oidValue)}
								checkedIcon={
									<img
										alt=""
										src={data.iconActive || defaultIconTrue}
										style={{
											width:
												(typeof data.iconSizeOnly === "number" &&
													`calc(100% * ${data.iconSizeOnly} / 100)`) ||
												"100%",
											height:
												(typeof data.iconSizeOnly === "number" &&
													`calc(100% * ${data.iconSizeOnly} / 100)`) ||
												"100%",

											objectFit: "contain",

											color: data.iconColorActive || data.iconColor,
											filter:
												data.iconColorActive || data.iconColor
													? "drop-shadow(0px 10000px 0)"
													: null,
											transform:
												data.iconColorActive || data.iconColor
													? "translateY(-10000px)"
													: null,
										}}
									/>
								}
								icon={
									<img
										alt=""
										src={data.iconActive || defaultIconFalse}
										style={{
											width:
												(typeof data.iconSizeOnly === "number" &&
													`calc(100% * ${data.iconSizeOnly} / 100)`) ||
												"100%",
											height:
												(typeof data.iconSizeOnly === "number" &&
													`calc(100% * ${data.iconSizeOnly} / 100)`) ||
												"100%",

											objectFit: "contain",

											color: data.iconColorActive || data.iconColor,
											filter:
												data.iconColorActive || data.iconColor
													? "drop-shadow(0px 10000px 0)"
													: null,
											transform:
												data.iconColorActive || data.iconColor
													? "translateY(-10000px)"
													: null,
										}}
									/>
								}
								sx={{
									width: "100%",
									height: "100%",

									flexGrow: 1,

									p: 0,

									"& .MuiSvgIcon-root": {
										width: "100%",
										height: "100%",
									},
								}}
							/>
						}
						label={
							!widget.data.withoutLabel && (
								<Typography
									component={Box}
									ref={setContentRef}
									variant="body2"
									sx={{
										...fontStyles,
										...textStyles,
										fontSize: data.valueSizeActive || data.valueSize,
										textAlign: "left",
										bgcolor: "transparent",
										color: data.textColorActive || data.textColor,
										textTransform: "none",
										p: 0.5,
										width: "100%",
										height: "100%",
										flexGrow: 1,
										alignContent: "center",
									}}
								/>
							)
						}
					/>
				)}
			</Box>
		</CollectionBase>
	);
}

export default CheckboxCollection;
