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
import React, { useContext, useLayoutEffect, useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";
import { CollectionContext } from "./CollectionProvider";

function CollectionChangeDialog(props) {
	const { data, open, closeHandler } = props;

	const { getPropertyValue, setValue, oidObject } =
		useContext(CollectionContext);

	const oid = oidObject?._id;
	const oidValue = getPropertyValue("oid");
	const oidStates = oidObject?.common?.states;

	const [sliderValue, setSliderValue] = useState(oidValue);

	const debouncedSliderValue = useDebounce(sliderValue);

	useEffect(() => {
		setSliderValue(oidValue);
	}, [oidValue]);

	useLayoutEffect(() => {
		if (
			oid !== undefined &&
			debouncedSliderValue !== undefined &&
			sliderValue !== undefined &&
			debouncedSliderValue === sliderValue &&
			debouncedSliderValue !== oidValue
		) {
			setValue(oid, debouncedSliderValue);
			console.log("setValue:::", oid, debouncedSliderValue);
		}
	}, [oid, oidValue, sliderValue, debouncedSliderValue, setValue]);

	const ChangeSlider =
		oidObject?.common?.min === 0 && oidObject?.common?.max ? (
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
				defaultValue={oidValue}
				onChange={(_, value) => setSliderValue(value)}
				value={sliderValue}
			/>
		) : null;

	const ChangeList = oidObject?.common?.states ? (
		<List>
			{Object.entries(oidObject.common.states).map(([key, value]) => (
				<ListItem disablePadding key={key}>
					<ListItemButton
						disableGutters
						onClick={() => setSliderValue(Number(key))}
					>
						<ListItemText
							sx={{ px: 2 }}
							primaryTypographyProps={{ variant: "body2" }}
							primary={value}
						/>
					</ListItemButton>
				</ListItem>
			))}
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
					divider={<Divider flexItem />}
					sx={{
						px: 2,
						// pb: !oidStates && 3,
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
