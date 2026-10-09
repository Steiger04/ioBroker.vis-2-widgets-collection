import { i as l, m as w, e as S, j as C } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__loadShare__shared-DgsbL9Pr.js";
import { s as y, B as d, G as k } from "./usePopoverPositioning-BUV6laon.js";
import { b as r, e as u, C as v, u as _, a as x, c as m, w as M } from "./useData-Ogol4QJ_.js";
import { g as h, C as z, c as F } from "./CollectionBaseImage-B5OtYHDO.js";
import { u as O, d as W } from "./useValueState-DypOMwYO.js";
import { S as I } from "./Switch-Bp8aa1mB.js";
import { i as V } from "./isOidReadOnly-CpnU56qh.js";
import "./vite-preload-helper-PPVm8Dsz.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./tslib.es6-F1e60Aum.js";
import "./SwitchBase-Dl5aEIsw.js";
const B = () => [{ type: "custom", component: () => l(u, {}) }, { name: "onlyDisplay", type: "checkbox", label: "only_display", disabled: (o, t) => o.write === false, default: false, hidden: (o, t) => o.write === false }, { name: "thumbSize", label: "thumb_size", type: "slider", min: 0, max: 500, default: 62, step: 1 }, r({ name: "thumbColorTrue", label: "thumb_color_true", fallbackFields: [] }), r({ name: "thumbColorFalse", label: "thumb_color_false", fallbackFields: [] }), { type: "custom", component: () => l(u, {}) }, { name: "trackSize", label: "track_size", type: "slider", min: 0, max: 100, default: 10, step: 1 }, r({ name: "trackColor", label: "track_color", fallbackFields: [] })], D = y(I)(({ width: o, maxheight: t, data: e, widget: a, theme: n }) => {
  const i = a.data.thumbSize ?? 62;
  return { width: "100%", height: "100%", padding: 0, margin: 0, "&.MuiSwitch-root": { overflow: "visible" }, "& .MuiSwitch-switchBase": { margin: 0, padding: 0, top: "50%", left: "0%", transform: `translate(-50%, -50%) translateX(${(t || 0) >= i ? i / 2 - 4 : (t || 0) / 2 - 4}px)`, "& .MuiSwitch-input": { left: 0, width: o || 0 }, "&.Mui-checked": { top: "50%", left: "100%", transform: `translate(-50%, -50%) translateX(${(t || 0) >= i ? -(i / 2 - 4) : -((t || 0) / 2 - 4)}px)`, "& .MuiSwitch-input": { left: -(o || 0) + i, width: o || 0 }, "& .MuiSwitch-thumb": { background: a.data.thumbColorTrue || n.palette.primary.main }, "& .MuiSwitch-thumb:before": { top: `calc(${e.iconYOffset} * -1)`, left: e.iconXOffset, backgroundSize: e.iconSizeOnly, backgroundImage: `url('${e.icon}')`, ...h(e.icon, e.iconColor || n.palette.primary.dark, e.forceColorMask) }, "& + .MuiSwitch-track": { background: a.data.trackColor } } }, "& .MuiSwitch-track": { background: a.data.trackColor }, "& .MuiSwitch-thumb": { background: a.data.thumbColorFalse, width: i, maxWidth: t, height: i, maxHeight: t, "&::before": { content: "''", position: "absolute", width: "100%", height: "100%", left: `calc(0px + ${e.iconXOffset})`, top: `calc(0px - ${e.iconYOffset})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: e.iconSizeOnly, backgroundImage: `url('${e.icon}')`, ...h(e.icon, e.iconColor || n.palette.primary.main, e.forceColorMask) } } };
});
function $() {
  var _a, _b, _c, _d;
  const o = w(null), t = S(v), { widget: e, theme: a } = t, n = e.data.oidObject, { data: i } = _("oid"), { value: s, updateValue: f } = O("oid"), c = n == null ? void 0 : n.type, b = c === "boolean", g = () => {
    f(!s);
  };
  return C(x, { isValidType: b, data: i, oidValue: s, children: [l(z, { data: i, widget: e }), l(d, { sx: { position: "relative", width: "100%", height: e.data.trackSize && `${e.data.trackSize}%` || "10%" }, children: l(d, { ref: o, sx: { width: "100%", height: "100%", px: "8px", display: "flex", justifyContent: "center", alignItems: "center" }, children: s !== void 0 && e.data.thumbSize !== void 0 && l(D, { disabled: c !== "boolean" || V(e.data), width: (_a = o.current) == null ? void 0 : _a.clientWidth, maxheight: (_d = (_c = (_b = o.current) == null ? void 0 : _b.parentElement) == null ? void 0 : _c.parentElement) == null ? void 0 : _d.clientHeight, data: i, widget: e, checked: !!s, onChange: g, sx: { "& .MuiTouchRipple-root": { color: i.iconColor || a.palette.primary.main } } }) }) })] });
}
class p extends k {
  static getWidgetInfo() {
    return { id: "tplSwitchCollectionWidget", visSet: "vis-2-widgets-collection", visSetLabel: "widgets_collection", visName: "SwitchCollectionWidget", visWidgetLabel: "switch_collection_widget", visOrder: 3, visAttrs: [{ name: "common", fields: [...m()] }, { name: "switch", label: "group_switch", fields: [...F(["boolean"]), ...W(), ...B()] }, { name: "values", label: "values", indexFrom: 1, indexTo: "values_count", fields: [...m({ groupName: "", allFields: false })] }], visDefaultStyle: { width: "100%", height: "100px", position: "relative" }, visPrev: "widgets/vis-2-widgets-collection/img/prev-collection-switch.png" };
  }
  getWidgetInfo() {
    return p.getWidgetInfo();
  }
  propertiesUpdate() {
  }
  onRxDataChanged() {
  }
  onRxStyleChanged() {
  }
  onStateUpdated(t, e) {
  }
  componentDidMount() {
    super.componentDidMount();
  }
  renderWidgetBody(t) {
    super.renderWidgetBody(t);
    const e = { id: t.id, refService: t.refService, style: t.style, widget: { data: this.state.rxData, style: this.state.rxStyle }, setValue: this.setValue, setState: this.setState.bind(this), values: this.state.values, isSignalVisible: this.isSignalVisible.bind(this), getPropertyValue: this.getPropertyValue.bind(this), mode: this.props.context.themeType, socket: this.props.context.socket, theme: this.props.context.theme, wrappedContent: this.wrappedCollectionContent };
    return t.widget.data.noCard || t.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, M(this.wrapContent(l($, {})), e);
  }
}
export {
  p as default
};
