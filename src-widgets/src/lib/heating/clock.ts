/**
 * A clock for the heating family: the Boost remaining time counts on between two reports
 * (ADR-0120), and „today“ or „still ahead“ follow the time of day.
 *
 * @module lib/heating/clock
 */
import { useEffect, useState } from 'react';

/** How often the clock moves while something on screen counts in seconds. */
const SECOND = 1000;

/** How often it moves otherwise: enough for texts that change by the minute or the day. */
const MINUTE = 60_000;

/**
 * The current time, moving every second while `counting`, else every minute.
 *
 * @param counting - Whether something on screen counts in seconds.
 * @returns The current time (ms) as of the last move.
 */
export function useClock(counting: boolean): number {
    const [now, setNow] = useState(() => Date.now());
    useEffect(() => {
        const timer = setInterval(() => setNow(Date.now()), counting ? SECOND : MINUTE);
        return () => clearInterval(timer);
    }, [counting]);
    return now;
}
