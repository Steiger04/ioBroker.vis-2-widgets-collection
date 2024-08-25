import { Box } from "@mui/material";
import StateRound from "./StateRound";
import StateSquare from "./StateSquare";

function StateCollection() {
	return (
		<Box
			sx={{
				width: "100%",
				height: "100%",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<StateRound />
			<StateSquare />
		</Box>
	);
}

export default StateCollection;
