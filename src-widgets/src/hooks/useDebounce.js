import { useEffect, useRef, useState } from "react";
import { Subject, debounceTime, sampleTime } from "rxjs";

function useDebounce(value, delay = 300) {
	const [debouncedValue, setDebouncedValue] = useState(value);
	const subject = useRef(null);

	useEffect(() => {
		subject.current = new Subject();

		const subscription = subject.current
			.pipe(debounceTime(delay))
			.subscribe(setDebouncedValue);

		return () => subscription.unsubscribe();
	}, [delay]);

	useEffect(() => {
		if (subject.current) {
			subject.current.next(value);
		}
	}, [value]);

	return debouncedValue;
}

export default useDebounce;
