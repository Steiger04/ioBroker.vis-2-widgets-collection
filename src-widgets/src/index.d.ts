import '@iobroker/types-vis-2';

declare module '@iobroker/types-vis-2' {
    interface VisRxWidgetStateValues {
        [key: `${string}.ack`]: boolean;
    }
}
