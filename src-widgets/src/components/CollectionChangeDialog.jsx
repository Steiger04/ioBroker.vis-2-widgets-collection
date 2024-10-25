import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
	Dialog,
	DialogContent,
	DialogTitle,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
} from "@mui/material";

import { CollectionContext } from "./CollectionProvider";

function CollectionChangeDialog(props) {
	const { data, open, closeHandler } = props;
	const { oidObject, setValue } = React.useContext(CollectionContext);

	console.log("CollectionChangeDialog -> data", data);

	return oidObject?.common?.states ? (
		<Dialog
			open={open}
			onClose={closeHandler}
			maxWidth="sm"
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
			<DialogContent dividers>
				<List
					disablePadding
					dense
					sx={{
						pt: 0,
					}}
				>
					{Object.entries(oidObject.common.states).map(([key, value]) => (
						<ListItem disablePadding key={key}>
							<ListItemButton
								onClick={() => setValue(oidObject._id, Number(key))}
							>
								<ListItemText primary={value} />
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</DialogContent>
		</Dialog>
	) : null;
}

export default CollectionChangeDialog;
