import { h as a, e as B, j as P, f as A, i as f } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__loadShare__shared-ClxoeJ8S.js";
import { d as E, a as N, C as L, e as j, B as h, S as R, T as U, G as V } from "./usePopoverPositioning-C1_MhytU.js";
import { a as $, b as G, e as v, r as H, f as S, j as Y, k as z, u as X, C as q, g as J, c as x } from "./useData-uC1Kpd-M.js";
import { b as K, w as Q, d as Z, r as ee, C as te, S as oe, g as re, c as ne } from "./CollectionBaseImage-DkYiHZqN.js";
import { u as ie, d as ae } from "./useValueState-CPRpFWB4.js";
import { A as m, i as le } from "./allowedOidTypes-Dpd6yL-L.js";
import { M as se } from "./MenuItem-Dv4AreQE.js";
import { S as ce } from "./Stack-Ur4a45jz.js";
import "./vite-preload-helper-PPVm8Dsz.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./tslib.es6-F1e60Aum.js";
import "./listItemTextClasses-BDkd_uFK.js";
import "./useThemeProps-CxKYjV9n.js";
const w = { name: "arrowColor", fallbackFields: ["textColor"], terminal: "text", inheritTextStyle: true }, de = () => [{ type: "custom", component: () => a(v, { dividerText: "selection" }) }, $(Q), K(Z, m), { type: "custom", component: () => a(v, { dividerText: "arrow" }) }, G({ ...w, label: "arrow_color", noGradient: true })], ue = 300, y = (t) => t ?? ue;
function me(t) {
  const { width: e, arrowColor: r, textColor: n, textStyles: i, theme: d } = t, u = H(w, { arrowColor: r, textColor: n }, d, i);
  return { width: "100%", height: "100%", maxWidth: `calc(${y(e)}px - 10%)`, "& .MuiSelect-icon": { color: S(u) } };
}
function pe(t) {
  const { width: e, noCard: r, frameBackground: n, borderStyles: i } = t;
  return { PaperProps: { sx: { overflow: "hidden", "& .MuiMenu-list": { maxHeight: "100vh", overflowY: "auto" }, ...r && { "--Paper-overlay": "none !important", "--Paper-shadow": "none !important", boxShadow: "none !important" }, background: n || (r ? "transparent" : void 0), ...E(i) } }, slotProps: { backdrop: { style: { backgroundColor: "transparent !important" } }, root: { sx: { maxWidth: y(e), mt: 0.5, "& .MuiList-root": { py: 0 } } } } };
}
const C = (t) => {
  try {
    return N(t, 0.5);
  } catch {
    return;
  }
};
function ge(t) {
  const e = Y(t), r = e ? S(t) : void 0, n = r ? C(r) : t ? C(t) : void 0;
  return { background: e, bgcolor: e ? "transparent" : t, "&.Mui-selected": { background: e, bgcolor: e ? void 0 : t }, "&.Mui-selected:hover": { background: e ? n : void 0, bgcolor: e ? void 0 : n }, "&:hover": { background: e ? n : void 0, bgcolor: e ? void 0 : n } };
}
function fe() {
  const [t, e] = B(null), { width: r } = z(t), n = P(L), { widget: i, theme: d } = n, { borderStyles: u, textStyles: _ } = j(i.style), T = i.data.oidObject, { data: s, states: c, oidValue: I, activePosition: M } = X("oid"), { idName: k, readOnly: W } = ee(i.data), { updateValue: p } = ie(k), D = T == null ? void 0 : T.type, F = le(m, D), O = A((o) => {
    const l = Number(o.target.value);
    if (l < 0 || l >= c.length) return;
    const g = c[l];
    (g == null ? void 0 : g.value) !== void 0 && p(g.value);
  }, [c, p]);
  return f(q, { isValidType: F, data: s, oidValue: I, children: [a(te, { data: s, widget: i }), a(h, { ref: e, sx: { width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }, children: a(R, { variant: "standard", disableUnderline: true, value: M ?? "", onChange: O, disabled: W, MenuProps: pe({ width: r, noCard: i.data.noCard, frameBackground: s.frameBackground, borderStyles: u }), sx: me({ width: r, arrowColor: i.data.arrowColor, textColor: s.textColor, textStyles: _, theme: d }), children: c.map((o, l) => a(se, { value: l, sx: ge(o.background), children: f(ce, { direction: "row", spacing: o.icon ? 1 : 0, sx: { alignItems: "center" }, children: [a(oe, { alt: "", src: o.icon, style: { position: "relative", top: `calc(0px - ${o.iconYOffset})`, right: `calc(0px - ${o.iconXOffset})`, height: o.iconSize, ...re(o.icon, o.iconColor, o.forceColorMask) } }), a(U, { component: h, variant: "subtitle2", sx: { whiteSpace: "pre-wrap", fontSize: o.valueSize, textAlign: "left", ...J(o.textColor), textTransform: "none", width: "100%", height: "100%", flexGrow: 1, alignContent: "center" }, contentEditable: "false", dangerouslySetInnerHTML: { __html: o.label ?? "" } })] }) }, `${String(o.value)}-${l}`)) }) })] });
}
class b extends V {
  static getWidgetInfo() {
    return { id: "tplSelectCollectionWidget", visSet: "vis-2-widgets-collection", visSetLabel: "widgets_collection", visName: "SelectCollectionWidget", visWidgetLabel: "select_collection_widget", visOrder: 8, visAttrs: [{ name: "common", fields: [...x({ groupName: "" })] }, { name: "select_collection", label: "group_select_collection", fields: [...ne(m), ...ae(), ...de()] }, { name: "values", label: "values", indexFrom: 1, indexTo: "values_count", fields: [...x({ groupName: "", allFields: false })] }], visDefaultStyle: { width: "100%", height: "100px", position: "relative" }, visPrev: "widgets/vis-2-widgets-collection/img/prev-collection-select.png" };
  }
  getWidgetInfo() {
    return b.getWidgetInfo();
  }
  propertiesUpdate() {
  }
  onRxDataChanged() {
  }
  onRxStyleChanged() {
  }
  onStateUpdated(e, r) {
  }
  componentDidMount() {
    super.componentDidMount();
  }
  renderWidgetBody(e) {
    return super.renderWidgetBody(e), this.renderWithProvider(a(fe, {}), e);
  }
}
export {
  b as default
};
