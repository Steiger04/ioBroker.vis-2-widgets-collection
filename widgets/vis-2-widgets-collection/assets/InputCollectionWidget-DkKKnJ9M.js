import { i as n, e as U, f as I, m as $, l as B, j as x } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__loadShare__shared-DgsbL9Pr.js";
import { B as l, b as H, T as K, G as Y } from "./usePopoverPositioning-BUV6laon.js";
import { e as O, C as q, u as X, a as J, g as T, c as W, w as Q } from "./useData-Ogol4QJ_.js";
import { g as Z, C as ee, c as te } from "./CollectionBaseImage-B5OtYHDO.js";
import { u as ne, d as ie } from "./useValueState-DypOMwYO.js";
import { s as oe } from "./stateFields-BzhUXfjH.js";
import { u as ae } from "./useHtmlValue-DQb6czpG.js";
import { i as le } from "./isOidReadOnly-CpnU56qh.js";
import { I as se } from "./InputAdornment-kfGfKL2i.js";
import { B as re } from "./Button-DuX2ENZG.js";
import { A as de } from "./Avatar-BWxxOuyD.js";
import "./vite-preload-helper-PPVm8Dsz.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./tslib.es6-F1e60Aum.js";
const d = (c) => {
  var _a;
  return ((_a = c.oidObject) == null ? void 0 : _a.type) !== "number";
}, ce = () => [{ type: "custom", component: () => n(O, { dividerText: "input" }) }, { name: "showOkButton", type: "checkbox", label: "show_ok_button", default: false, tooltip: "show_ok_button_tooltip" }, { name: "inputVariant", type: "select", label: "input_variant", default: "standard", options: [{ value: "standard", label: "variant_standard" }, { value: "outlined", label: "variant_outlined" }, { value: "filled", label: "variant_filled" }] }, { name: "inputPadding", type: "number", label: "input_padding", default: 1, min: 0, step: 0.5 }, { type: "custom", component: () => n(O, { dividerText: "number" }), hidden: d }, { name: "step", type: "number", label: "step", default: 1, min: 0, hidden: d }, { name: "minValue", type: "number", label: "min_value", hidden: d }, { name: "maxValue", type: "number", label: "max_value", hidden: d }], ue = /* @__PURE__ */ new Set(["string", "number", "mixed"]), me = () => {
  const c = U(q), { widget: e, theme: s, widget: { data: { oidObject: u } } } = c, { data: t } = X("oid"), { value: o, updateValue: b, hasBackendChange: j } = ne("oid"), m = ae(o, e, t), A = m != null ? String(m) : "", p = u == null ? void 0 : u.type, y = p !== void 0 && ue.has(p), w = p === "number", F = le(e.data), f = !!e.data.showOkButton, C = !F, r = t.textColor, P = e.data.inputVariant ?? "standard", h = t.icon, z = t.iconColor || s.palette.primary.main, N = Z(h, z, !!t.forceColorMask), G = e.data.minValue !== void 0 ? Number(e.data.minValue) : void 0, L = e.data.maxValue !== void 0 ? Number(e.data.maxValue) : void 0, M = e.data.step !== void 0 ? Number(e.data.step) : void 0, g = o == null ? "" : String(o), [_, S] = I(g), [a, v] = I(false), V = $(null);
  B(() => {
    a || S(g);
  }, [g, a]), B(() => {
    var _a;
    a && ((_a = V.current) == null ? void 0 : _a.focus());
  }, [a]);
  const R = () => {
    C && v(true);
  }, k = () => {
    v(false), b(_);
  }, E = !e.data.noIcon && !!h;
  return x(J, { isValidType: y, data: t, oidValue: o, children: [n(ee, { data: t, widget: e }), y ? a ? x(l, { sx: { width: "100%", display: "flex", alignItems: "center", gap: 1, px: Number(e.data.inputPadding) }, children: [n(H, { inputRef: V, fullWidth: true, size: "small", variant: P, type: w ? "number" : "text", value: _, error: j, onChange: (i) => {
    S(i.target.value), f || b(i.target.value);
  }, onBlur: () => {
    f ? k() : v(false);
  }, onKeyDown: (i) => {
    i.key === "Enter" && i.target.blur();
  }, slotProps: { input: { endAdornment: (u == null ? void 0 : u.unit) ? n(se, { position: "end", children: u.unit }) : void 0 }, htmlInput: w ? { step: M, min: G, max: L } : void 0 }, sx: { fontSize: t.valueSize, color: r } }), f && n(re, { variant: "contained", size: "small", onMouseDown: (i) => i.preventDefault(), onClick: k, children: "OK" })] }) : x(l, { onClick: R, sx: { width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", cursor: C ? "text" : "default" }, children: [E && n(l, { sx: { display: "flex", justifyContent: "center", alignItems: "center", flexGrow: 1, width: "100%", height: "100%" }, children: n(de, { variant: "square", src: h || void 0, slotProps: { img: { style: { objectFit: "contain", ...N } } }, sx: { overflow: "visible", width: t.iconSizeOnly, height: t.iconSizeOnly, left: `calc(0px + ${t.iconXOffset})`, top: `calc(0px - ${t.iconYOffset})` } }) }), !e.data.noValue && n(l, { sx: { display: "flex", justifyContent: "center", alignItems: "center", flexGrow: 1, width: "100%", height: "100%" }, children: n(K, { component: l, variant: "body2", sx: { fontSize: t.valueSize, textAlign: "center", bgcolor: "transparent", background: T(r), WebkitBackgroundClip: "text", backgroundClip: "text", color: T(r) ? "transparent" : r, textTransform: "none", px: 1, pl: 0, pr: 1, width: "100%", height: "100%", flexGrow: 1, display: "flex", alignItems: "center", justifyContent: "center", overflowWrap: "break-word", wordBreak: "break-word", whiteSpace: "normal", hyphens: "auto", "& > div": { textAlign: "left", display: "inline-block" } }, dangerouslySetInnerHTML: { __html: `<div style="text-align: left; display: inline-block;">${A || ""}</div>` } }) })] }) : null] });
};
class D extends Y {
  static getWidgetInfo() {
    return { id: "tplInputCollectionWidget", visSet: "vis-2-widgets-collection", visSetLabel: "widgets_collection", visSetColor: "#0C0A43", visName: "InputCollectionWidget", visWidgetLabel: "input_collection_widget", visOrder: 1, visAttrs: [{ name: "common", fields: [...W()] }, { name: "input", label: "group_input", fields: [...te(["string", "number", "mixed"]), ...ie(), ...ce(), ...oe({ onlyStates: false })] }, { name: "values", label: "values", indexFrom: 1, indexTo: "values_count", fields: [...W({ groupName: "", allFields: false })] }], visDefaultStyle: { width: "100%", height: "80px", position: "relative" }, visPrev: "widgets/vis-2-widgets-collection/img/prev-collection-input.png" };
  }
  getWidgetInfo() {
    return D.getWidgetInfo();
  }
  propertiesUpdate() {
  }
  onRxDataChanged() {
  }
  onRxStyleChanged() {
  }
  onStateUpdated(e, s) {
  }
  componentDidMount() {
    super.componentDidMount();
  }
  renderWidgetBody(e) {
    super.renderWidgetBody(e);
    const s = { id: e.id, refService: e.refService, style: e.style, widget: { data: this.state.rxData, style: this.state.rxStyle }, setValue: this.setValue, setState: this.setState.bind(this), values: this.state.values, isSignalVisible: this.isSignalVisible.bind(this), getPropertyValue: this.getPropertyValue.bind(this), mode: this.props.context.themeType, socket: this.props.context.socket, theme: this.props.context.theme, wrappedContent: this.wrappedCollectionContent };
    return e.widget.data.noCard || e.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, Q(this.wrapContent(n(me, {})), s);
  }
}
export {
  D as default
};
