function isNumber(x) {
	if (x == null || `${x}`.trim() === "" || Number.isNaN(+x) || ~~x !== +x) {
		return false; // not a float, not an integer
	}

	/* // Check for a valid integer
	if (x == null || `${x}`.trim() === "" || ~~x !== +x) {
		return false; // not an integer
	} */

	return true;
}

export default isNumber;
