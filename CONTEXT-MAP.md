# Context Map

## Contexts

- [JsonTable cell rendering](./CONTEXT.md) — how a JSON-valued state renders as table cells (columns, format types, visual references).
- [Color & theme resolution](./docs/context/color-theme.md) — how a color attribute resolves to the effective color shown in the editor and rendered by the widget.

## Relationships

- Both contexts live in the `src-widgets` widget collection. They deliberately
  carry **separate** ubiquitous languages — cell rendering vs. color resolution —
  so neither glossary dilutes the other.
- Cross-cutting (system-wide) decisions live in [`docs/adr/`](./docs/adr/).
