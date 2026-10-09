import { i as e, f as m, m as w, l as f, h as x, j as u } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__loadShare__shared-DgsbL9Pr.js";
import { d as _, v as S, aL as z, B as a, T as g, I as D, G, aM as A, aN as E } from "./usePopoverPositioning-BUV6laon.js";
const M = _(e("path", { d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }), "Clear"), $ = _(e("path", { d: "M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2m-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2" }), "DragIndicator");
function j({ value: s, onChange: i, label: b, overridden: v, presets: o, error: t }) {
  const l = S(), [c, h] = m(null), [d, p] = m(s), r = w(null), { anchorOrigin: C, transformOrigin: y, maxHeight: I, setContentRef: T, popoverActionRef: k } = z(c, !!c), B = !!c;
  f(() => {
    p(s);
  }, [s]), f(() => () => {
    r.current !== null && clearTimeout(r.current);
  }, []);
  const P = x((n) => {
    p(n), r.current !== null && clearTimeout(r.current), r.current = setTimeout(() => {
      r.current = null, i(n);
    }, 150);
  }, [i]), R = x((n) => {
    n.stopPropagation(), r.current !== null && (clearTimeout(r.current), r.current = null), i("");
  }, [i]);
  return u(a, { "data-theme-error": t ? true : void 0, children: [u(a, { sx: { display: "grid", gridTemplateColumns: "1fr auto", alignItems: "center", gap: 1, py: 0.5, cursor: "pointer", borderRadius: "6px", "&:hover": { backgroundColor: l.palette.action.hover }, transition: "background-color 150ms" }, onClick: (n) => h(n.currentTarget), children: [e(g, { variant: "body2", color: t ? "error" : "text.secondary", sx: { userSelect: "none", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: b }), u(a, { sx: { display: "flex", alignItems: "center", gap: 0.5 }, children: [e(a, { sx: { width: 22, height: 22, borderRadius: "4px", background: d || "transparent", border: d ? `1px solid ${t ? l.palette.error.main : l.palette.divider}` : `1px dashed ${l.palette.text.disabled}` } }), v ? e(D, { size: "small", onClick: R, title: G.t("theme_studio_reset_color"), sx: { p: 0.25 }, children: e(M, { fontSize: "inherit" }) }) : null] })] }), t ? e(g, { variant: "caption", color: "error", sx: { display: "block", mt: -0.25, pb: 0.5 }, children: t }) : null, e(A, { action: k, open: B, anchorEl: c, onClose: () => h(null), anchorOrigin: C, transformOrigin: y, slotProps: { paper: { elevation: 0, sx: { p: "9px", borderRadius: "6px", backgroundColor: "rgb(32,32,32)", boxSizing: "border-box", maxHeight: I, overflowX: "hidden", overflowY: "auto" } } }, children: e(a, { ref: T, sx: { borderRadius: "6px" }, children: e(E, { value: d || "#ffffff", onChange: P, hidePresets: !o, presets: o, hideInputs: !o, hideEyeDrop: !o, hideInputType: !o, hideColorTypeBtns: !!o, hideGradientControls: !!o, hideAdvancedSliders: !!o, hideColorGuide: !!o }) }) })] });
}
export {
  j as C,
  $ as D,
  M as a
};
