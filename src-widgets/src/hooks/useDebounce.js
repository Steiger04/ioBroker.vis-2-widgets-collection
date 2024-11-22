import { useEffect, useRef, useState } from "react";
import { Subject, debounceTime, throttleTime } from "rxjs";

function useDebounce(value, delay = 300) {
	const [debouncedValue, setDebouncedValue] = useState(value);
	const debounce = useRef(null);

	const [sampledValue, setSampledValue] = useState(value);
	const sample = useRef(null);

	useEffect(() => {
		debounce.current = new Subject();
		sample.current = new Subject();

		const debouncedSubscription = debounce.current
			.pipe(debounceTime(delay))
			.subscribe(setDebouncedValue);

		const sampledSubscription = sample.current
			.pipe(throttleTime(delay))
			.subscribe(setSampledValue);

		return () => {
			debouncedSubscription.unsubscribe();
			sampledSubscription.unsubscribe();
		};
	}, [delay]);

	useEffect(() => {
		if (debounce.current) {
			debounce.current.next(value);
		}

		if (sample.current) {
			sample.current.next(value);
		}
	}, [value]);

	return { debouncedValue, sampledValue };
}

export default useDebounce;
