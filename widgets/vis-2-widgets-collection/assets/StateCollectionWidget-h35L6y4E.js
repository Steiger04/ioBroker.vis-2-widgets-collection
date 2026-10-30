import { e as I, f as b, g as B, h as o, i as C, j as W, k as A } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__loadShare__shared-ClxoeJ8S.js";
import { B as V, L as j, I as k, P as F, C as M, G as P } from "./usePopoverPositioning-C1_MhytU.js";
import { s as N, D as U, u as E, C as R, c as D } from "./useData-uC1Kpd-M.js";
import { i as z, C as G, c as H } from "./CollectionBaseImage-DkYiHZqN.js";
import { u as Y, d as q } from "./useValueState-CPRpFWB4.js";
import { C as J, s as K } from "./CollectionValueDisplay-2thOuvgr.js";
import { i as Q, A as L } from "./allowedOidTypes-Dpd6yL-L.js";
import { u as X } from "./useHtmlValue-CeUAYNwV.js";
import { C as Z } from "./Close-CJIHvdeL.js";
import { S as $ } from "./Slider-M3td3o7X.js";
import { L as ee, a as te, b as oe } from "./ListItemText-D32xFiQs.js";
import { D as ae, a as ie, b as ne } from "./DialogTitle-BCiYQiQj.js";
import { S as se } from "./Stack-Ur4a45jz.js";
import { B as le } from "./Button-CoSvBFy1.js";
import "./vite-preload-helper-PPVm8Dsz.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./tslib.es6-F1e60Aum.js";
import "./Avatar-Bdh5EYvv.js";
import "./listItemTextClasses-BDkd_uFK.js";
import "./useThemeProps-CxKYjV9n.js";
const w = ({ states: i, onlyStates: e, statePushButton: n }) => !!(e && i.length === 2 && n), y = (i) => (i == null ? void 0 : i.value) === void 0 ? { type: "none" } : { type: "write", value: i.value };
function re(i, e, n) {
  const { states: t, onlyStates: m } = e;
  if (i === "press" || i === "release") return w(e) ? y(i === "press" ? t[0] : t[1]) : { type: "none" };
  if (!m) return { type: "open-dialog" };
  switch (t.length) {
    case 1:
      return y(t[0]);
    case 2:
      return w(e) ? { type: "none" } : N(n, t[0].value) ? y(t[1]) : y(t[0]);
    default:
      return { type: "open-dialog" };
  }
}
const de = ({ widgetStates: i, open: e, closeHandler: n, title: t, backgroundColor: m, textColor: f, currentValue: d, onCommit: c, slider: s }) => {
  const [p, g] = I(() => typeof d == "number" ? d : 0), l = !!(i && Object.keys(i).length), v = b((a, r) => {
    const u = Array.isArray(r) ? r[0] : r;
    g(u), c(u);
  }, [c]), x = b((a) => (r) => {
    r.preventDefault();
    const u = Number(a);
    a.trim() !== "" && !isNaN(u) && g(u), c(a);
  }, [c]), h = B(() => s ? o(V, { sx: { px: 3 }, children: o($, { sx: { pb: l ? 4 : 3 }, size: "small", min: s.min, max: s.max, marks: [{ value: s.min, label: String(s.min) }, { value: s.max, label: String(s.max) }], valueLabelDisplay: "auto", value: p, onChange: v }) }) : null, [s, l, p, v]), _ = B(() => l ? o(j, { children: Object.entries(i).map(([a, r]) => o(ee, { disablePadding: true, children: o(te, { onClick: x(a), children: o(oe, { primaryTypographyProps: { variant: "body2" }, primary: String(r) }) }) }, a)) }) : null, [l, i, x]);
  return C(ae, { open: e, onClose: n, maxWidth: "xs", fullWidth: true, PaperProps: { sx: { bgcolor: m, color: f } }, children: [o(ie, { sx: { m: 0, p: 2 }, id: "customized-dialog-title", children: t }), o(k, { "aria-label": "close", onClick: n, sx: (a) => ({ position: "absolute", right: 8, top: 8, color: a.palette.grey[500] }), children: o(Z, {}) }), o(ne, { sx: { overflow: "unset" }, children: C(se, { divider: l && o(U, {}), spacing: 0, component: F, children: [h, _] }) })] });
};
function ce() {
  const i = W(M), { widget: e } = i, n = e.data.oidObject, { data: t, widgetStates: m, states: f } = E("oid"), { value: d, updateValue: c } = Y("oid"), [s, p] = I(false), g = n == null ? void 0 : n.type, l = e.data.onlyStates, v = g === "number" && !l && (n == null ? void 0 : n.minValue) !== void 0 && (n == null ? void 0 : n.maxValue) !== void 0 ? { min: n.minValue, max: n.maxValue } : void 0, x = t.header || (n == null ? void 0 : n.name) || P.t("state_change_dialog_title"), h = X(d, e, t), _ = h != null ? String(h) : "", a = b((T) => {
    const S = re(T, { states: f, onlyStates: l, statePushButton: e.data.statePushButton }, d);
    S.type === "write" ? c(S.value) : S.type === "open-dialog" && p(true);
  }, [f, l, e.data.statePushButton, d, c]), r = o(le, { disabled: z(e.data), onClick: () => a("click"), onMouseDown: () => a("press"), onMouseUp: () => a("release"), onMouseOut: () => a("release"), onTouchStart: () => a("press"), onTouchEnd: () => a("release"), sx: { width: "100%", height: "100%", color: t.textColor || "inherit", "&:hover": { bgcolor: "transparent" } }, children: o(V, { sx: { width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }, children: o(J, { data: t, contentValue: _, noIcon: e.data.noIcon, noValue: e.data.noValue }) }) }), u = Q(L, g);
  return C(A, { children: [s && o(de, { widgetStates: m, open: s, closeHandler: () => p(false), title: x, backgroundColor: t.backgroundColor, textColor: t.textColor, currentValue: d, onCommit: c, slider: v }), C(R, { isValidType: u, data: t, oidValue: d, children: [o(G, { data: t, widget: e }), o(V, { sx: { width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }, children: r })] })] });
}
class O extends P {
  static getWidgetInfo() {
    return { id: "tplStateCollectionWidget", visSet: "vis-2-widgets-collection", visSetLabel: "widgets_collection", visSetColor: "#0C0A43", visName: "StateCollectionWidget", visWidgetLabel: "state_collection_widget", visOrder: 4, visAttrs: [{ name: "common", fields: [...D()] }, { name: "button", label: "group_button", fields: [...H(L), ...q(), ...K()] }, { name: "values", label: "values", indexFrom: 1, indexTo: "values_count", fields: [...D({ groupName: "", allFields: false })] }], visDefaultStyle: { width: "100%", height: "100px", position: "relative" }, visPrev: "widgets/vis-2-widgets-collection/img/prev-collection-state.png" };
  }
  getWidgetInfo() {
    return O.getWidgetInfo();
  }
  propertiesUpdate() {
  }
  onRxDataChanged() {
  }
  onRxStyleChanged() {
  }
  onStateUpdated(e, n) {
  }
  componentDidMount() {
    super.componentDidMount();
  }
  renderWidgetBody(e) {
    return super.renderWidgetBody(e), this.renderWithProvider(o(ce, {}), e);
  }
}
export {
  O as default
};
