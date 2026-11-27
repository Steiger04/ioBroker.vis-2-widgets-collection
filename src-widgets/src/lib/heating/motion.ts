/**
 * Motion of the heating family: animations (the heating dot's pulse, transitions) stop under
 * `prefers-reduced-motion` (accessibility).
 *
 * @module lib/heating/motion
 */
import { useMediaQuery } from '@mui/material';

/** The media query of a user who asked for less motion. */
export const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

/**
 * Whether the user asked for less motion.
 *
 * @returns `true` under `prefers-reduced-motion: reduce`.
 */
export function useReducedMotion(): boolean {
    return useMediaQuery(REDUCED_MOTION_QUERY, { noSsr: true });
}
