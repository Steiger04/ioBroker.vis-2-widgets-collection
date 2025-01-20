import CloseIcon from "@mui/icons-material/Close";
import { Paper, Slider, Stack } from "@mui/material";
import {
	Dialog,
	DialogContent,
	DialogTitle,
	Divider,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
} from "@mui/material";
import React, { useCallback, useContext, useEffect } from "react";
import useDebounce from "../hooks/useDebounce";
import { CollectionContext } from "./CollectionProvider";

function CollectionChangeDialog(props) {
	const { widgetStates, data, open, closeHandler } = props;

	const { widget, values, setState, setValue, oidObject, getPropertyValue } =
		useContext(CollectionContext);

	const oid = oidObject?._id;
	const oidStates = oidObject?.common?.states;
	const oidType = oidObject?.common?.type;

	const delay = widget.data.sampleInterval
		? widget.data.sampleIntervalValue
		: widget.data.delay;

	const {
		debouncedValue: debouncedSliderValue,
		sampledValue: sampledSliderValue,
	} = useDebounce(getPropertyValue("oid"), delay);

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

	/* useEffect(() => {
		if (debouncedSliderValue !== undefined) {
			setValue(oid, debouncedSliderValue);
		}
	}, [debouncedSliderValue, oid, setValue]); */

	const changeHandler = useCallback(
		(value, key = null) => {
			switch (oidType) {
				case "number":
					if (key === null) {
						// Slider
						setState({ values: { ...values, [`${oid}.val`]: value } });
					} else {
						// List
						setState({ values: { ...values, [`${oid}.val`]: Number(key) } });
					}
					break;

				case "string":
					// only List
					setState({ values: { ...values, [`${oid}.val`]: String(key) } });
					break;

				case "boolean": {
					// only List
					// console.log("key", key);

					setState({
						values: {
							...values,
							[`${oid}.val`]: /^true$/i.test(key),
						},
					});
					break;
				}

				default:
					break;
			}
		},
		[oid, oidType, setState, values],
	);

	const ChangeSlider =
		oidType === "number" &&
		!widget.data.onlyStates &&
		oidObject?.common?.min !== undefined &&
		oidObject?.common?.max !== undefined ? (
			<Slider
				sx={{ pb: oidStates ? 4 : 3 }}
				size="small"
				min={oidObject.common.min}
				max={oidObject.common.max}
				marks={[
					{
						value: oidObject.common.min,
						label: String(oidObject.common.min),
					},
					{
						value: oidObject.common.max,
						label: String(oidObject.common.max),
					},
				]}
				valueLabelDisplay="auto"
				value={getPropertyValue("oid") || 0}
				onChange={(_, value) => changeHandler(value)}
			/>
		) : null;

	const ChangeList = widgetStates ? (
		<List>
			{Object.entries(widgetStates).map(([key, value]) => {
				return (
					<ListItem disablePadding key={key}>
						<ListItemButton
							disableGutters
							onClick={() => changeHandler(value, key)}
						>
							<ListItemText
								sx={{ px: 2 }}
								primaryTypographyProps={{ variant: "body2" }}
								primary={value}
							/>
						</ListItemButton>
					</ListItem>
				);
			})}
		</List>
	) : null;

	return (
		<Dialog
			open={open}
			onClose={closeHandler}
			maxWidth="xs"
			fullWidth
			PaperProps={{
				sx: {
					// bgcolor: data.backgroundColor,
					// color: data.textColor,
				},
			}}
		>
			<DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
				{data.header || oidObject.common.name}
			</DialogTitle>
			<IconButton
				aria-label="close"
				onClick={closeHandler}
				sx={(theme) => ({
					position: "absolute",
					right: 8,
					top: 8,
					color: theme.palette.grey[500],
				})}
			>
				<CloseIcon />
			</IconButton>
			<DialogContent
				sx={{
					overflow: "unset",
				}}
			>
				<Stack
					divider={Object.keys(widgetStates).length && <Divider flexItem />}
					sx={{
						px: 2,
					}}
					spacing={0}
					component={Paper}
				>
					{ChangeSlider}
					{ChangeList}
				</Stack>
			</DialogContent>
		</Dialog>
	);
}

export default CollectionChangeDialog;
