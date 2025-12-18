/**
 * Type declarations for importing SVG files as React components using the `?react` query.
 *
 * @remarks
 * This enables syntax such as:
 * ```typescript
 * import Icon from './icon.svg?react';
 * ```
 * Consumers receive a typed React component for the SVG element while the default export
 * stays aligned with SVGR behavior.
 */
declare module '*.svg?react' {
    import type * as React from 'react';

    const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    export default ReactComponent;
}
