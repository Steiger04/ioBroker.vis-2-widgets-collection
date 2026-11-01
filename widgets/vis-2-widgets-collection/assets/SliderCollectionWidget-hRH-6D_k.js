import { h as l, i as W, e as Z, l as G, f as ee, j as te, g as y } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__loadShare__shared-ClxoeJ8S.js";
import { B as k, T as ae, C as ie, s as oe, a as E, G as le } from "./usePopoverPositioning-C1_MhytU.js";
import { a as re, b as g, d as h, e as s, g as ne, f as de, r as se, u as ce, s as me, C as ue, h as X, c as A } from "./useData-jkOw5Oj_.js";
import { S as L, g as T, a as Y, C as pe, i as be, c as he } from "./CollectionBaseImage-Cm6oCVNa.js";
import { u as xe, d as fe } from "./useValueState-BB0agxu5.js";
import { a as ve, S as ke } from "./Slider-M3td3o7X.js";
import "./vite-preload-helper-PPVm8Dsz.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./tslib.es6-F1e60Aum.js";
const K = () => [{ type: "custom", component: () => l(s, {}) }, re(), { name: "sliderSize", label: "slider_size", type: "select", options: [{ value: "small", label: "slider_small" }, { value: "medium", label: "slider_medium" }], default: "medium" }, { name: "sliderOrientation", label: "slider_orientation", type: "select", options: [{ value: "horizontal", label: "horizontal" }, { value: "vertical", label: "vertical" }], default: "horizontal" }, { name: "sliderGap", label: "slider_gap", type: "number", default: 0, min: 0, max: 100, step: 0.1 }, { name: "valueLabelDisplay", label: "value_label_display", type: "select", options: [{ value: "on", label: "label_on" }, { value: "off", label: "label_off" }, { value: "auto", label: "label_auto" }], default: "off" }, { name: "labelPosition", label: "label_position", type: "text", default: "-5px", hidden: "data.valueLabelDisplay === 'off'" }, g({ name: "sliderColor", label: "slider_color", terminal: "primary" }), { name: "sliderPadding", label: "slider_padding", type: "number", default: 1, min: 0, step: 0.5 }, { type: "custom", component: () => l(s, { dividerText: "thumb" }) }, { name: "thumbWidth", label: "thumb_width", type: "number", default: 20, min: 0 }, { name: "thumbHeight", label: "thumb_height", type: "number", default: 20, min: 0 }, h("thumbColor", "thumb_color"), { name: "thumbBorderWidth", label: "thumb_border_width", type: "number", default: 0, min: 0, max: 100 }, g({ name: "thumbBorderColor", label: "thumb_border_color", fallbackFields: ["thumbColor", "sliderColor"], terminal: "primary" }), { type: "custom", component: () => l(s, { dividerText: "track" }) }, { name: "trackLength", label: "track_length", type: "number", default: 4, min: 0 }, h("trackBackgroundColor", "track_background_color"), { name: "trackBorderWidth", label: "track_border_width", type: "number", default: 1, min: 0, max: 100 }, h("trackBorderColor", "track_border_color"), { type: "custom", component: () => l(s, { dividerText: "rail" }) }, { name: "railLength", label: "rail_length", type: "number", default: 4, min: 0 }, h("railBackgroundColor", "rail_background_color"), { name: "railBorderWidth", label: "rail_border_width", type: "number", default: 0, min: 0, max: 100 }, h("railBorderColor", "rail_border_color"), { type: "custom", component: () => l(s, { dividerText: "mark" }) }, { name: "markWidth", label: "mark_width", type: "number", default: 2, min: 0 }, { name: "markHeight", label: "mark_height", type: "number", default: 2, min: 0 }, h("markBackgroundColor", "mark_background_color"), { type: "custom", component: () => l(s, { dividerText: "values" }) }, { name: "minValue", type: "number", label: "min_value", default: 0 }, { name: "maxValue", type: "number", label: "max_value", default: 100 }, { name: "step", type: "number", label: "step", default: 10 }, { type: "custom", component: () => l(s, {}), hidden: (t) => {
  var _a;
  return !t.values_count && !Object.keys(((_a = t.oidObject) == null ? void 0 : _a.commonStates) || {}).length;
} }, { name: "onlyStates", type: "checkbox", label: "only_states", default: false, hidden: (t) => {
  var _a;
  return !t.values_count && !Object.keys(((_a = t.oidObject) == null ? void 0 : _a.commonStates) || {}).length;
} }, { type: "custom", component: () => l(s, { dividerText: "marks" }) }, { name: "marks", type: "checkbox", label: "marks", default: false }, { type: "custom", component: () => l(s, {}), hidden: "!data.marks" }, { name: "markPosition", label: "mark_position", type: "text", default: "30px", hidden: "!data.marks" }, { name: "markStep", type: "number", label: "mark_step", default: 10, hidden: "!data.marks" }, { type: "custom", component: () => l(s, {}), hidden: "!data.marks" }, h("markerTextColor", "marker_text_color"), { name: "markerTextSize", label: "marker_text_size", type: "slider", min: 0, max: 500, step: 1, hidden: "!data.marks" }, { type: "custom", component: () => l(s, {}), hidden: "!data.marks" }, { name: "markerIconColor", label: "marker_icon_color", type: "color", hidden: "!data.marks" }, { name: "markerIconSize", label: "marker_icon_size", type: "slider", min: 1, max: 500, step: 1, hidden: "!data.marks" }, { type: "custom", component: () => l(s, { dividerText: "icon" }) }, { name: "iconSmallMin", label: "icon_small_min", type: "icon64", hidden: "data.iconMin" }, { name: "iconMin", label: "icon_min", type: "image", hidden: "data.iconSmallMin" }, { name: "iconSizeStart", label: "icon_size", type: "text", default: "24px", hidden: "!data.iconMin && !data.iconSmallMin" }, g({ name: "startIconColor", label: "icon_color", noGradient: true, terminal: "primary", hidden: "!data.iconMin && !data.iconSmallMin" }), { type: "custom", component: () => l(s, { dividerText: "icon" }) }, { name: "iconSmallMax", label: "icon_small_max", type: "icon64", hidden: "data.iconMax" }, { name: "iconMax", label: "icon_max", type: "image", hidden: "data.iconSmallMax" }, { name: "iconSizeEnd", label: "icon_size", type: "text", default: "24px", hidden: "!data.iconMax && !data.iconSmallMax" }, g({ name: "endIconColor", label: "icon_color", noGradient: true, terminal: "primary", hidden: "!data.iconMax && !data.iconSmallMax" })], ye = Object.fromEntries(K().filter((t) => t.terminal !== void 0).map((t) => [t.name, { name: t.name, fallbackFields: t.fallbackFields, terminal: t.terminal, inheritTextStyle: t.inheritTextStyle }])), Se = ({ marks: t, sliderOrientation: a, aliasActive: e, activeMarkIndex: i, ...d }) => {
  var _a;
  const m = d["data-index"], n = (_a = d.ownerState.marks) == null ? void 0 : _a[m], u = i === m, f = (n == null ? void 0 : n.label) ? u && e ? e : n.label : "";
  return t && n ? l(ve, { ...d, children: W(k, { sx: { display: "flex", flexDirection: a === "vertical" ? "row" : "column", alignItems: "center", justifyContent: "center" }, children: [l(ae, { "data-font": "active", dangerouslySetInnerHTML: { __html: f }, sx: { textTransform: "none", flexGrow: 1, pr: a === "vertical" ? 1 : 0, pb: a === "vertical" ? 0 : 1, fontSize: n.valueSize, ...ne(n.textColor) } }), l(k, { "data-position": "active", sx: { position: "relative", bottom: n.iconYOffset, left: n.iconXOffset, flexGrow: 1 }, children: l(L, { "data-img": "active", src: n.icon, alt: "", style: { position: "relative", width: n.iconSize, ...T(n.icon, n.iconColor, n == null ? void 0 : n.forceColorMask) } }) })] }) }) : null;
};
function ge(t) {
  const { states: a, minValue: e, maxValue: i, markStep: d, onlyStates: m, unit: n, oidValue: u, baseStyle: f, activeStyle: p, iconColorActive: b } = t, v = (r) => String(r) !== String(u) ? f : { ...f, iconSize: p.iconSize, ...b ? { iconColor: p.iconColor } : {}, forceColorMask: p.forceColorMask }, o = a.filter((r) => typeof r.value == "number").filter((r) => (e === null || r.value >= e) && (i === null || r.value <= i));
  if (m) return o.sort((r, c) => r.value - c.value);
  if (e !== null && !o.some((r) => r.value === e) && o.push({ ...v(e), value: e, label: `${e}${n || ""}` }), i !== null && !o.some((r) => r.value === i) && o.push({ ...v(i), value: i, label: `${i}${n || ""}` }), e !== null && i !== null) {
    const r = Math.abs(Number(d)) || 1;
    for (let c = e + r; c < i; c += r) o.some((C) => C.value === c) || o.push({ ...v(c), value: c, label: `${c}${n || ""}` });
  }
  return o.sort((r, c) => r.value - c.value);
}
const x = (t, a, e) => {
  const i = ye[t];
  if (!i) throw new Error(`buildSliderChromeStyles: unknown chrome color field '${t}'`);
  return se(i, a, e, void 0);
}, _ = (t) => de(t) ?? t;
function _e(t, a) {
  const e = t, i = x("thumbColor", e, a);
  return { thumbBackground: i, thumbShadowBase: _(i), thumbBorder: _(x("thumbBorderColor", e, a)), trackBackground: x("trackBackgroundColor", e, a), trackBorder: _(x("trackBorderColor", e, a)), railBackground: x("railBackgroundColor", e, a), railBorder: _(x("railBorderColor", e, a)), markBackground: x("markBackgroundColor", e, a) };
}
function R(t, a) {
  return t === void 0 && typeof a == "number" ? a : t;
}
function Ce(t) {
  return typeof t == "number" ? t : void 0;
}
const Be = (t) => {
  const { value: a, updateValue: e, hasBackendChange: i } = xe(t), [d, m] = Z(R(void 0, a));
  G(() => {
    m((u) => R(u, a));
  }, [a]), G(() => {
    i && m(Ce(a));
  }, [i, a]);
  const n = ee((u) => {
    m(u), e(u);
  }, [e]);
  return { backendValue: a, value: d, setValue: n };
}, U = { horizontal: 20, vertical: 44 };
function ze(t, a) {
  return t ? a === "horizontal" ? { x: 0, y: -20 / 2 } : { x: -44 / 2, y: 0 } : { x: 0, y: 0 };
}
const Me = oe(ke, { shouldForwardProp: (t) => t !== "data" && t !== "chrome" })(({ data: t, chrome: a }) => {
  const e = (t == null ? void 0 : t.thumbBorderWidth) ?? 0;
  return { "& .MuiSlider-thumb": { width: `${(t == null ? void 0 : t.thumbWidth) ?? 20}px`, height: `${(t == null ? void 0 : t.thumbHeight) ?? 20}px`, background: a.thumbBackground, ...e > 0 && { border: `${e}px solid ${a.thumbBorder}` }, "&:hover": { boxShadow: `0px 0px 0px 8px ${E(a.thumbShadowBase, 0.32)}` }, "&:active": { boxShadow: `0px 0px 0px 14px ${E(a.thumbShadowBase, 0.32)}` } }, "& .MuiSlider-track": { height: (t == null ? void 0 : t.sliderOrientation) === "horizontal" ? `${(t == null ? void 0 : t.trackLength) ?? 4}px` : "auto", width: (t == null ? void 0 : t.sliderOrientation) === "vertical" ? `${(t == null ? void 0 : t.trackLength) ?? 4}px` : "auto", borderColor: a.trackBorder, background: a.trackBackground, borderWidth: (t == null ? void 0 : t.trackBorderWidth) ? `${t.trackBorderWidth}px` : "0px", borderStyle: "solid" }, "& .MuiSlider-rail": { height: (t == null ? void 0 : t.sliderOrientation) === "horizontal" ? `${(t == null ? void 0 : t.railLength) ?? 4}px` : "100%", width: (t == null ? void 0 : t.sliderOrientation) === "vertical" ? `${(t == null ? void 0 : t.railLength) ?? 4}px` : "100%", background: a.railBackground, borderWidth: (t == null ? void 0 : t.railBorderWidth) ? `${t.railBorderWidth}px` : "0px", borderStyle: "solid", borderColor: a.railBorder }, "& .MuiSlider-mark": { width: (t == null ? void 0 : t.sliderOrientation) === "horizontal" ? `${(t == null ? void 0 : t.markWidth) ?? 2}px` : `${(t == null ? void 0 : t.markHeight) ?? 16}px`, height: (t == null ? void 0 : t.sliderOrientation) === "horizontal" ? `${(t == null ? void 0 : t.markHeight) ?? 2}px` : `${(t == null ? void 0 : t.markWidth) ?? 3}px`, background: a.markBackground }, "& .MuiSlider-markActive": { width: (t == null ? void 0 : t.sliderOrientation) === "horizontal" ? `${(t == null ? void 0 : t.markWidth) ?? 2}px` : `${(t == null ? void 0 : t.markHeight) ?? 16}px`, height: (t == null ? void 0 : t.sliderOrientation) === "horizontal" ? `${(t == null ? void 0 : t.markHeight) ?? 2}px` : `${(t == null ? void 0 : t.markWidth) ?? 3}px`, backgroundColor: a.markBackground, background: a.markBackground, filter: "brightness(2.5)" } };
}), $e = () => {
  const t = te(ie), { widget: { data: { oidObject: a } }, widget: e, theme: i } = t, { data: d, states: m, minValue: n, maxValue: u, activeFieldNumber: f, resolveStyleData: p } = ce("oid"), { backendValue: b, value: v, setValue: F } = Be("oid"), o = e.data.sliderOrientation === "horizontal", r = ze(!!e.data.marks, o ? "horizontal" : "vertical"), c = y(() => _e(e.data, i), [e.data, i]), C = p("", false).textColor || i.palette.text.primary, B = e.data.iconMin || e.data.iconSmallMin, z = e.data.iconMax || e.data.iconSmallMax, D = e.data.startIconColor || (Y(B) ? i.palette.primary.main : void 0), j = e.data.endIconColor || (Y(z) ? i.palette.primary.main : void 0), M = o ? B : z, $ = o ? z : B, J = o ? D : j, Q = o ? j : D, P = a == null ? void 0 : a.type, H = P === "number", O = y(() => !e.data.onlyStates && e.data.minValue !== void 0 ? Number(e.data.minValue) : n, [e.data.onlyStates, e.data.minValue, n]), w = y(() => !e.data.onlyStates && e.data.maxValue !== void 0 ? Number(e.data.maxValue) : u, [e.data.onlyStates, e.data.maxValue, u]), V = y(() => ge({ states: m, minValue: O, maxValue: w, markStep: e.data.markStep, onlyStates: e.data.onlyStates, unit: a == null ? void 0 : a.unit, oidValue: b, baseStyle: p("", false), activeStyle: p("", true), iconColorActive: e.data.iconColorActive }), [m, e.data.onlyStates, e.data.markStep, O, w, a == null ? void 0 : a.unit, b, p, e.data.iconColorActive]), N = y(() => {
    if (b === void 0) return null;
    const I = V.findIndex((S) => me(S.value, b));
    return I !== -1 ? I : null;
  }, [b, V]);
  return W(ue, { isValidType: H, data: d, oidValue: b, sx: { p: Number(e.data.sliderPadding) }, children: [l(pe, { data: d, widget: e }), H ? W(k, { sx: { gap: Number(e.data.sliderGap) || 0, display: "flex", flexDirection: o ? "row" : "column", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }, children: [M && l(k, { sx: { display: "flex", justifyContent: "center", alignItems: "center", flexShrink: 0, transform: o ? `translateY(${r.y}px)` : `translateX(${r.x}px)` }, children: l(L, { alt: "", src: M, style: { width: o ? e.data.iconSizeStart || "24px" : e.data.iconSizeEnd || "24px", ...T(M, J, true) } }) }), l(k, { sx: { display: "flex", flex: 1, justifyContent: "center", alignItems: "center", minWidth: o ? "200px" : "auto", minHeight: o ? "auto" : "200px" }, children: typeof v == "number" && l(Me, { data: e.data, chrome: c, slots: { markLabel: Se }, slotProps: { markLabel: { marks: e.data.marks, sliderOrientation: e.data.sliderOrientation, aliasActive: e.data.aliasActive, activeMarkIndex: N } }, disabled: P !== "number" || be(e.data), valueLabelDisplay: e.data.valueLabelDisplay, orientation: e.data.sliderOrientation, min: O ?? void 0, max: w ?? void 0, marks: V, step: e.data.onlyStates ? null : e.data.step !== void 0 ? Number(e.data.step) : void 0, size: e.data.sliderSize, value: v, onChange: (I, S) => {
    typeof S == "number" && F(S);
  }, sx: { mb: e.data.marks && o ? `${U.horizontal}px` : "0px", mr: e.data.marks && !o ? `${U.vertical}px` : "0px", "& .MuiSlider-valueLabel": { fontSize: X(e.data.valueSizeActive) || d.valueSizeActive || d.valueSize, color: e.data.textColorActive || d.textColorActive || f && e.data.markerTextColor || d.textColor || i.palette.text.primary, bgcolor: "transparent", top: o ? e.data.labelPosition : void 0, right: o ? void 0 : e.data.labelPosition }, "& .MuiSlider-markLabel": { fontSize: d.valueSize, color: C, top: o ? e.data.markPosition : void 0, left: o ? void 0 : e.data.markPosition }, "& .MuiSlider-markLabelActive": { [`&[data-index='${N}']`]: { "& div[data-font='active']": { color: e.data.textColorActive ? `${e.data.textColorActive} !important` : void 0, fontSize: typeof e.data.valueSizeActive == "number" ? `${X(e.data.valueSizeActive)} !important` : void 0 }, "& div[data-position='active']": { left: e.data.iconXOffsetActive && e.data.iconXOffsetActive !== "0px" ? `${e.data.iconXOffsetActive} !important` : e.data.iconXOffsetActive === "" ? void 0 : "0px !important", bottom: e.data.iconYOffsetActive && e.data.iconYOffsetActive !== "0px" ? `${e.data.iconYOffsetActive} !important` : e.data.iconYOffsetActive === "" ? void 0 : "0px !important" } } } } }) }), $ && l(k, { sx: { display: "flex", justifyContent: "center", alignItems: "center", flexShrink: 0, transform: o ? `translateY(${r.y}px)` : `translateX(${r.x}px)` }, children: l(L, { alt: "", src: $, style: { width: o ? e.data.iconSizeEnd || "24px" : e.data.iconSizeStart || "24px", ...T($, Q, true) } }) })] }) : null] });
};
class q extends le {
  static getWidgetInfo() {
    return { id: "tplSliderCollectionWidget", visSet: "vis-2-widgets-collection", visSetLabel: "widgets_collection", visName: "SliderCollectionWidget", visWidgetLabel: "slider_collection_widget", visOrder: 5, visAttrs: [{ name: "common", fields: [...A()] }, { name: "slider", label: "group_slider", fields: [...he(["number"]), ...fe(), ...K()] }, { name: "active", label: "group_active", fields: [...A({ groupName: "Active", allFields: false })] }, { name: "values", label: "values", indexFrom: 1, indexTo: "values_count", fields: [...A({ groupName: "", allFields: false })] }], visDefaultStyle: { width: "100%", height: "100px", position: "relative" }, visPrev: "widgets/vis-2-widgets-collection/img/prev-collection-slider.png" };
  }
  getWidgetInfo() {
    return q.getWidgetInfo();
  }
  propertiesUpdate() {
  }
  onRxDataChanged() {
  }
  onRxStyleChanged() {
  }
  onStateUpdated(a, e) {
  }
  componentDidMount() {
    super.componentDidMount();
  }
  renderWidgetBody(a) {
    return super.renderWidgetBody(a), this.renderWithProvider(l($e, {}), a);
  }
}
export {
  q as default
};
