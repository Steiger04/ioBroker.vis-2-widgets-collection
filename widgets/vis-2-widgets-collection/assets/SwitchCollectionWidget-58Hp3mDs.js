import { h as n, e as g, j as x, i as F } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__loadShare__shared-ClxoeJ8S.js";
import { s as T, C as M, B as m, G as R } from "./usePopoverPositioning-C1_MhytU.js";
import { a as O, b as p, e as b, k as w, u as B, C as I, c as S } from "./useData-jkOw5Oj_.js";
import { g as W, C as z, i as D, c as P } from "./CollectionBaseImage-Cm6oCVNa.js";
import { u as L, d as E } from "./useValueState-BB0agxu5.js";
import { S as A } from "./Switch-COn6gwPL.js";
import "./vite-preload-helper-PPVm8Dsz.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./tslib.es6-F1e60Aum.js";
import "./SwitchBase-BcaiVFpO.js";
const C = 62, v = 10, $ = () => [{ type: "custom", component: () => n(b, {}) }, O(), { name: "thumbSize", label: "thumb_size", type: "slider", min: 0, max: 500, default: C, step: 1 }, p({ name: "thumbColorTrue", label: "thumb_color_true", fallbackFields: [] }), p({ name: "thumbColorFalse", label: "thumb_color_false", fallbackFields: [] }), { type: "custom", component: () => n(b, {}) }, { name: "trackSize", label: "track_size", type: "slider", min: 1, max: 100, default: v, step: 1 }, p({ name: "trackColor", label: "track_color", fallbackFields: [] })], U = 4;
function j(o, e) {
  const t = e || 0;
  return (t >= o ? o : t) / 2 - U;
}
function V(o, e) {
  return -(o || 0) + e;
}
const H = /* @__PURE__ */ new Set(["width", "maxHeight", "data", "widget"]), N = T(A, { shouldForwardProp: (o) => !H.has(o) })(({ width: o, maxHeight: e, data: t, widget: a, theme: s }) => {
  const l = a.data.thumbSize ?? C, r = j(l, e), i = o || 0, c = (u) => ({ content: "''", position: "absolute", width: "100%", height: "100%", left: `calc(0px + ${t.iconXOffset})`, top: `calc(0px - ${t.iconYOffset})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: t.iconSizeOnly, backgroundImage: `url('${t.icon}')`, ...W(t.icon, t.iconColor || u, t.forceColorMask) });
  return { width: "100%", height: "100%", padding: 0, margin: 0, "&.MuiSwitch-root": { overflow: "visible" }, "& .MuiSwitch-switchBase": { margin: 0, padding: 0, top: "50%", left: "0%", transform: `translate(-50%, -50%) translateX(${r}px)`, "& .MuiSwitch-input": { left: 0, width: i }, "&.Mui-checked": { top: "50%", left: "100%", transform: `translate(-50%, -50%) translateX(${-r}px)`, "& .MuiSwitch-input": { left: V(o, l), width: i }, "& .MuiSwitch-thumb": { background: a.data.thumbColorTrue, "&::before": c(s.palette.primary.dark) }, "& + .MuiSwitch-track": { background: a.data.trackColor } } }, "& .MuiSwitch-track": { background: a.data.trackColor }, "& .MuiSwitch-thumb": { background: a.data.thumbColorFalse, width: l, maxWidth: e, height: l, maxHeight: e, "&::before": c(s.palette.primary.main) } };
});
function X() {
  const [o, e] = g(null), [t, a] = g(null), { width: s } = w(o), { height: l } = w(t), r = x(M);
  if (!r) throw new Error("SwitchCollection must be used within a CollectionProvider");
  const { widget: i, theme: c } = r, u = i.data.oidObject, { data: d } = B("oid"), { value: h, updateValue: k } = L("oid"), f = (u == null ? void 0 : u.type) === "boolean", y = () => {
    k(!h);
  };
  return F(I, { isValidType: f, data: d, oidValue: h, children: [n(z, { data: d, widget: i }), n(m, { ref: a, "aria-hidden": "true", sx: { width: 0, height: "100%" } }), n(m, { ref: e, sx: { position: "relative", width: "100%", height: i.data.trackSize && `${i.data.trackSize}%` || `${v}%` }, children: n(m, { sx: { width: "100%", height: "100%", px: "8px", display: "flex", justifyContent: "center", alignItems: "center" }, children: h !== void 0 && i.data.thumbSize !== void 0 && n(N, { disabled: !f || D(i.data), width: s, maxHeight: l, data: d, widget: i, checked: !!h, onChange: y, sx: { "& .MuiTouchRipple-root": { color: d.iconColor || c.palette.primary.main } } }) }) })] });
}
class _ extends R {
  static getWidgetInfo() {
    return { id: "tplSwitchCollectionWidget", visSet: "vis-2-widgets-collection", visSetLabel: "widgets_collection", visName: "SwitchCollectionWidget", visWidgetLabel: "switch_collection_widget", visOrder: 3, visAttrs: [{ name: "common", fields: [...S()] }, { name: "switch", label: "group_switch", fields: [...P(["boolean"]), ...E(), ...$()] }, { name: "values", label: "values", indexFrom: 1, indexTo: "values_count", fields: [...S({ groupName: "", allFields: false })] }], visDefaultStyle: { width: "100%", height: "100px", position: "relative" }, visPrev: "widgets/vis-2-widgets-collection/img/prev-collection-switch.png" };
  }
  getWidgetInfo() {
    return _.getWidgetInfo();
  }
  propertiesUpdate() {
  }
  onRxDataChanged() {
  }
  onRxStyleChanged() {
  }
  onStateUpdated(e, t) {
  }
  componentDidMount() {
    super.componentDidMount();
  }
  renderWidgetBody(e) {
    return super.renderWidgetBody(e), this.renderWithProvider(n(X, {}), e);
  }
}
export {
  _ as default
};
