import { useEffect } from "react";

const useHtmlValue = (contentRef, oidValue, widget, data) => {
	const oidValueUnit =
		(typeof oidValue === "string" ||
			typeof oidValue === "number" ||
			typeof oidValue === "boolean") &&
		`${oidValue}${widget.data.unit}`;

	const contentValue = data.alias || data.value || oidValueUnit;

	useEffect(() => {
		if (!contentValue || !contentRef) return;
		contentRef.innerHTML = contentValue;
	}, [contentValue, contentRef]);
};

export default useHtmlValue;
