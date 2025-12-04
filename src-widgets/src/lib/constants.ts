/**
 * Sentinel-Wert für optimistische Updates.
 * Wird als `.lc` (lastChange) Timestamp gesetzt, um anzuzeigen, dass ein lokaler
 * State-Update noch nicht vom Backend bestätigt wurde.
 * Der Wert ist bewusst unrealistisch gewählt, um ihn von echten Timestamps zu unterscheiden.
 */
export const VALUE_NOT_CHANGED_TIMESTAMP = 1111111111111;
