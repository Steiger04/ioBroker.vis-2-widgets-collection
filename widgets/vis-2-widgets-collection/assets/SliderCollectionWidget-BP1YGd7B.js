import { h as o, e as P, l as O, i as F, f as de, j as se, m as ce, g as C } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__loadShare__shared-ClxoeJ8S.js";
import { B as _, T as me, C as ue, s as pe, a as Y, G as be } from "./usePopoverPositioning-C1_MhytU.js";
import { a as fe, b as M, d as S, e as c, g as he, f as xe, r as ve, u as ke, s as ye, C as Se, h as q, c as L } from "./useData-uC1Kpd-M.js";
import { S as D, g as j, a as U, C as ge, i as _e, c as Ce } from "./CollectionBaseImage-DkYiHZqN.js";
import { u as Be, d as Me } from "./useValueState-CPRpFWB4.js";
import { a as ze, S as Oe } from "./Slider-M3td3o7X.js";
import "./vite-preload-helper-PPVm8Dsz.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./tslib.es6-F1e60Aum.js";
const K = () => [{ type: "custom", component: () => o(c, {}) }, fe(), { name: "sliderSize", label: "slider_size", type: "select", options: [{ value: "small", label: "slider_small" }, { value: "medium", label: "slider_medium" }], default: "medium" }, { name: "sliderOrientation", label: "slider_orientation", type: "select", options: [{ value: "horizontal", label: "horizontal" }, { value: "vertical", label: "vertical" }], default: "horizontal" }, { name: "sliderGap", label: "slider_gap", type: "number", default: 0, min: 0, max: 100, step: 0.1 }, { name: "valueLabelDisplay", label: "value_label_display", type: "select", options: [{ value: "on", label: "label_on" }, { value: "off", label: "label_off" }, { value: "auto", label: "label_auto" }], default: "off" }, { name: "labelPosition", label: "label_position", type: "text", default: "-5px", hidden: "data.valueLabelDisplay === 'off'" }, M({ name: "sliderColor", label: "slider_color", terminal: "primary" }), { name: "sliderPadding", label: "slider_padding", type: "number", default: 1, min: 0, step: 0.5 }, { type: "custom", component: () => o(c, { dividerText: "thumb" }) }, { name: "thumbWidth", label: "thumb_width", type: "number", default: 20, min: 0 }, { name: "thumbHeight", label: "thumb_height", type: "number", default: 20, min: 0 }, S("thumbColor", "thumb_color"), { name: "thumbBorderWidth", label: "thumb_border_width", type: "number", default: 0, min: 0, max: 100 }, M({ name: "thumbBorderColor", label: "thumb_border_color", fallbackFields: ["thumbColor", "sliderColor"], terminal: "primary" }), { type: "custom", component: () => o(c, { dividerText: "track" }) }, { name: "trackLength", label: "track_length", type: "number", default: 4, min: 0 }, S("trackBackgroundColor", "track_background_color"), { name: "trackBorderWidth", label: "track_border_width", type: "number", default: 1, min: 0, max: 100 }, S("trackBorderColor", "track_border_color"), { type: "custom", component: () => o(c, { dividerText: "rail" }) }, { name: "railLength", label: "rail_length", type: "number", default: 4, min: 0 }, S("railBackgroundColor", "rail_background_color"), { name: "railBorderWidth", label: "rail_border_width", type: "number", default: 0, min: 0, max: 100 }, S("railBorderColor", "rail_border_color"), { type: "custom", component: () => o(c, { dividerText: "mark" }) }, { name: "markWidth", label: "mark_width", type: "number", default: 2, min: 0 }, { name: "markHeight", label: "mark_height", type: "number", default: 2, min: 0 }, S("markBackgroundColor", "mark_background_color"), { type: "custom", component: () => o(c, { dividerText: "values" }) }, { name: "minValue", type: "number", label: "min_value", default: 0 }, { name: "maxValue", type: "number", label: "max_value", default: 100 }, { name: "step", type: "number", label: "step", default: 10 }, { type: "custom", component: () => o(c, {}), hidden: (t) => {
  var _a;
  return !t.values_count && !Object.keys(((_a = t.oidObject) == null ? void 0 : _a.commonStates) || {}).length;
} }, { name: "onlyStates", type: "checkbox", label: "only_states", default: false, hidden: (t) => {
  var _a;
  return !t.values_count && !Object.keys(((_a = t.oidObject) == null ? void 0 : _a.commonStates) || {}).length;
} }, { type: "custom", component: () => o(c, { dividerText: "marks" }) }, { name: "marks", type: "checkbox", label: "marks", default: false }, { type: "custom", component: () => o(c, {}), hidden: "!data.marks" }, { name: "markPosition", label: "mark_position", type: "text", default: "30px", hidden: "!data.marks" }, { name: "markStep", type: "number", label: "mark_step", default: 10, hidden: "!data.marks" }, { type: "custom", component: () => o(c, {}), hidden: "!data.marks" }, S("markerTextColor", "marker_text_color"), { name: "markerTextSize", label: "marker_text_size", type: "slider", min: 0, max: 500, step: 1, hidden: "!data.marks" }, { type: "custom", component: () => o(c, {}), hidden: "!data.marks" }, { name: "markerIconColor", label: "marker_icon_color", type: "color", hidden: "!data.marks" }, { name: "markerIconSize", label: "marker_icon_size", type: "slider", min: 1, max: 500, step: 1, hidden: "!data.marks" }, { type: "custom", component: () => o(c, { dividerText: "icon" }) }, { name: "iconSmallMin", label: "icon_small_min", type: "icon64", hidden: "data.iconMin" }, { name: "iconMin", label: "icon_min", type: "image", hidden: "data.iconSmallMin" }, { name: "iconSizeStart", label: "icon_size", type: "text", default: "24px", hidden: "!data.iconMin && !data.iconSmallMin" }, M({ name: "startIconColor", label: "icon_color", noGradient: true, terminal: "primary", hidden: "!data.iconMin && !data.iconSmallMin" }), { type: "custom", component: () => o(c, { dividerText: "icon" }) }, { name: "iconSmallMax", label: "icon_small_max", type: "icon64", hidden: "data.iconMax" }, { name: "iconMax", label: "icon_max", type: "image", hidden: "data.iconSmallMax" }, { name: "iconSizeEnd", label: "icon_size", type: "text", default: "24px", hidden: "!data.iconMax && !data.iconSmallMax" }, M({ name: "endIconColor", label: "icon_color", noGradient: true, terminal: "primary", hidden: "!data.iconMax && !data.iconSmallMax" })], we = Object.fromEntries(K().filter((t) => t.terminal !== void 0).map((t) => [t.name, { name: t.name, fallbackFields: t.fallbackFields, terminal: t.terminal, inheritTextStyle: t.inheritTextStyle }])), $e = ({ marks: t, sliderOrientation: a, aliasActive: e, activeMarkIndex: i, defaultIconColor: m, ...u }) => {
  var _a;
  const [s, b] = P(null), v = u["data-index"], r = (_a = u.ownerState.marks) == null ? void 0 : _a[v], f = i === v;
  return O(() => {
    s && (r == null ? void 0 : r.label) && (f && e ? s.innerHTML = e : s.innerHTML = r.label);
  }, [r == null ? void 0 : r.label, s, f, e, v]), t && r ? o(ze, { ...u, children: F(_, { sx: { display: "flex", flexDirection: a === "vertical" ? "row" : "column", alignItems: "center", justifyContent: "center" }, children: [o(me, { "data-font": "active", ref: b, sx: { textTransform: "none", flexGrow: 1, pr: a === "vertical" ? 1 : 0, pb: a === "vertical" ? 0 : 1, fontSize: r.valueSize, ...he(r.textColor) } }), o(_, { "data-position": "active", sx: { position: "relative", bottom: r.iconYOffset, left: r.iconXOffset, flexGrow: 1 }, children: o(D, { "data-img": "active", src: r.icon, alt: "", style: { position: "relative", width: r.iconSize, ...j(r.icon, r.iconColor, r == null ? void 0 : r.forceColorMask) } }) })] }) }) : null;
};
function Ie(t) {
  const { states: a, minValue: e, maxValue: i, markStep: m, onlyStates: u, unit: s, oidValue: b, baseStyle: v, activeStyle: r, iconColorActive: f } = t, k = (l) => String(l) !== String(b) ? v : { ...v, iconSize: r.iconSize, ...f ? { iconColor: r.iconColor } : {}, forceColorMask: r.forceColorMask }, d = a.filter((l) => typeof l.value == "number").filter((l) => (e === null || l.value >= e) && (i === null || l.value <= i));
  if (u) return d.sort((l, p) => l.value - p.value);
  if (e !== null && !d.some((l) => l.value === e) && d.push({ ...k(e), value: e, label: `${e}${s || ""}` }), i !== null && !d.some((l) => l.value === i) && d.push({ ...k(i), value: i, label: `${i}${s || ""}` }), e !== null && i !== null) {
    const l = Math.abs(Number(m)) || 1;
    for (let p = e + l; p < i; p += l) d.some((n) => n.value === p) || d.push({ ...k(p), value: p, label: `${p}${s || ""}` });
  }
  return d.sort((l, p) => l.value - p.value);
}
const g = (t, a, e) => {
  const i = we[t];
  if (!i) throw new Error(`buildSliderChromeStyles: unknown chrome color field '${t}'`);
  return ve(i, a, e, void 0);
}, z = (t) => xe(t) ?? t;
function Ve(t, a) {
  const e = t, i = g("thumbColor", e, a);
  return { thumbBackground: i, thumbShadowBase: z(i), thumbBorder: z(g("thumbBorderColor", e, a)), trackBackground: g("trackBackgroundColor", e, a), trackBorder: z(g("trackBorderColor", e, a)), railBackground: g("railBackgroundColor", e, a), railBorder: z(g("railBorderColor", e, a)), markBackground: g("markBackgroundColor", e, a) };
}
function J(t, a) {
  return t === void 0 && typeof a == "number" ? a : t;
}
function We(t) {
  return typeof t == "number" ? t : void 0;
}
const Te = (t) => {
  const { value: a, updateValue: e, hasBackendChange: i } = Be(t), [m, u] = P(J(void 0, a));
  O(() => {
    u((b) => J(b, a));
  }, [a]), O(() => {
    i && u(We(a));
  }, [i, a]);
  const s = de((b) => {
    u(b), e(b);
  }, [e]);
  return { backendValue: a, value: m, setValue: s };
}, Ae = pe(Oe, { shouldForwardProp: (t) => t !== "data" && t !== "chrome" })(({ data: t, chrome: a }) => {
  const e = (t == null ? void 0 : t.thumbBorderWidth) ?? 0;
  return { "& .MuiSlider-thumb": { width: `${(t == null ? void 0 : t.thumbWidth) ?? 20}px`, height: `${(t == null ? void 0 : t.thumbHeight) ?? 20}px`, background: a.thumbBackground, ...e > 0 && { border: `${e}px solid ${a.thumbBorder}` }, "&:hover": { boxShadow: `0px 0px 0px 8px ${Y(a.thumbShadowBase, 0.32)}` }, "&:active": { boxShadow: `0px 0px 0px 14px ${Y(a.thumbShadowBase, 0.32)}` } }, "& .MuiSlider-track": { height: (t == null ? void 0 : t.sliderOrientation) === "horizontal" ? `${(t == null ? void 0 : t.trackLength) ?? 4}px` : "auto", width: (t == null ? void 0 : t.sliderOrientation) === "vertical" ? `${(t == null ? void 0 : t.trackLength) ?? 4}px` : "auto", borderColor: a.trackBorder, background: a.trackBackground, borderWidth: (t == null ? void 0 : t.trackBorderWidth) ? `${t.trackBorderWidth}px` : "0px", borderStyle: "solid" }, "& .MuiSlider-rail": { height: (t == null ? void 0 : t.sliderOrientation) === "horizontal" ? `${(t == null ? void 0 : t.railLength) ?? 4}px` : "100%", width: (t == null ? void 0 : t.sliderOrientation) === "vertical" ? `${(t == null ? void 0 : t.railLength) ?? 4}px` : "100%", background: a.railBackground, borderWidth: (t == null ? void 0 : t.railBorderWidth) ? `${t.railBorderWidth}px` : "0px", borderStyle: "solid", borderColor: a.railBorder }, "& .MuiSlider-mark": { width: (t == null ? void 0 : t.sliderOrientation) === "horizontal" ? `${(t == null ? void 0 : t.markWidth) ?? 2}px` : `${(t == null ? void 0 : t.markHeight) ?? 16}px`, height: (t == null ? void 0 : t.sliderOrientation) === "horizontal" ? `${(t == null ? void 0 : t.markHeight) ?? 2}px` : `${(t == null ? void 0 : t.markWidth) ?? 3}px`, background: a.markBackground }, "& .MuiSlider-markActive": { width: (t == null ? void 0 : t.sliderOrientation) === "horizontal" ? `${(t == null ? void 0 : t.markWidth) ?? 2}px` : `${(t == null ? void 0 : t.markHeight) ?? 16}px`, height: (t == null ? void 0 : t.sliderOrientation) === "horizontal" ? `${(t == null ? void 0 : t.markHeight) ?? 2}px` : `${(t == null ? void 0 : t.markWidth) ?? 3}px`, backgroundColor: a.markBackground, background: a.markBackground, filter: "brightness(2.5)" } };
}), Le = () => {
  const t = se(ue), { widget: { data: { oidObject: a } }, widget: e, theme: i } = t, { data: m, states: u, minValue: s, maxValue: b, activeFieldNumber: v, resolveStyleData: r } = ke("oid"), { backendValue: f, value: k, setValue: H } = Te("oid"), d = ce(null), [l, p] = P({ x: 0, y: 0 }), n = e.data.sliderOrientation === "horizontal", Z = C(() => Ve(e.data, i), [e.data, i]), ee = r("", false).textColor || i.palette.text.primary, w = e.data.iconMin || e.data.iconSmallMin, $ = e.data.iconMax || e.data.iconSmallMax, N = e.data.startIconColor || (U(w) ? i.palette.primary.main : void 0), R = e.data.endIconColor || (U($) ? i.palette.primary.main : void 0), I = n ? w : $, V = n ? $ : w, te = n ? N : R, ae = n ? R : N, E = a == null ? void 0 : a.type, G = E === "number", W = C(() => !e.data.onlyStates && e.data.minValue !== void 0 ? Number(e.data.minValue) : s, [e.data.onlyStates, e.data.minValue, s]), T = C(() => !e.data.onlyStates && e.data.maxValue !== void 0 ? Number(e.data.maxValue) : b, [e.data.onlyStates, e.data.maxValue, b]), A = C(() => Ie({ states: u, minValue: W, maxValue: T, markStep: e.data.markStep, onlyStates: e.data.onlyStates, unit: a == null ? void 0 : a.unit, oidValue: f, baseStyle: r("", false), activeStyle: r("", true), iconColorActive: e.data.iconColorActive }), [u, e.data.onlyStates, e.data.markStep, W, T, a == null ? void 0 : a.unit, f, r, e.data.iconColorActive]), X = C(() => {
    if (f === void 0) return null;
    const h = A.findIndex((x) => ye(x.value, f));
    return h !== -1 ? h : null;
  }, [f, A]), ie = () => {
    if (!d.current) return;
    const h = d.current.querySelector(".MuiSlider-root"), x = d.current.querySelector(".MuiSlider-rail");
    if (h && x) {
      const y = d.current.getBoundingClientRect(), B = x.getBoundingClientRect(), oe = B.left - y.left + B.width / 2, re = B.top - y.top + B.height / 2, le = y.width / 2, ne = y.height / 2;
      p({ x: oe - le, y: re - ne });
    }
  };
  return O(() => {
    if (!d.current) return;
    let h = null;
    const x = () => {
      h && clearTimeout(h), h = setTimeout(ie, 100);
    }, y = new ResizeObserver(x);
    return y.observe(d.current), x(), () => {
      y.disconnect(), h && clearTimeout(h);
    };
  }, [e.data.marks, e.data.sliderOrientation, e.data.iconSizeStart, e.data.iconSizeEnd, k]), F(Se, { isValidType: G, data: m, oidValue: f, sx: { p: Number(e.data.sliderPadding) }, children: [o(ge, { data: m, widget: e }), G ? F(_, { ref: d, sx: { gap: Number(e.data.sliderGap) || 0, display: "flex", flexDirection: n ? "row" : "column", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }, children: [I && o(_, { sx: { display: "flex", justifyContent: "center", alignItems: "center", flexShrink: 0, transform: n ? `translateY(${l.y}px)` : `translateX(${l.x}px)` }, children: o(D, { alt: "", src: I, style: { width: n ? e.data.iconSizeStart || "24px" : e.data.iconSizeEnd || "24px", ...j(I, te, true) } }) }), o(_, { sx: { display: "flex", flex: 1, justifyContent: "center", alignItems: "center", minWidth: n ? "200px" : "auto", minHeight: n ? "auto" : "200px" }, children: typeof k == "number" && o(Ae, { data: e.data, chrome: Z, slots: { markLabel: $e }, slotProps: { markLabel: { marks: e.data.marks, sliderOrientation: e.data.sliderOrientation, aliasActive: e.data.aliasActive, activeMarkIndex: X, defaultIconColor: i.palette.primary.main } }, disabled: E !== "number" || _e(e.data), valueLabelDisplay: e.data.valueLabelDisplay, orientation: e.data.sliderOrientation, min: W ?? void 0, max: T ?? void 0, marks: A, step: e.data.onlyStates ? null : e.data.step !== void 0 ? Number(e.data.step) : void 0, size: e.data.sliderSize, value: k, onChange: (h, x) => {
    typeof x == "number" && H(x);
  }, sx: { mb: e.data.marks && n ? "20px" : "0px", mr: e.data.marks && !n ? "44px" : "0px", "& .MuiSlider-valueLabel": { fontSize: q(e.data.valueSizeActive) || m.valueSizeActive || m.valueSize, color: e.data.textColorActive || m.textColorActive || v && e.data.markerTextColor || m.textColor || i.palette.text.primary, bgcolor: "transparent", top: n ? e.data.labelPosition : void 0, right: n ? void 0 : e.data.labelPosition }, "& .MuiSlider-markLabel": { fontSize: m.valueSize, color: ee, top: n ? e.data.markPosition : void 0, left: n ? void 0 : e.data.markPosition }, "& .MuiSlider-markLabelActive": { [`&[data-index='${X}']`]: { "& div[data-font='active']": { color: e.data.textColorActive ? `${e.data.textColorActive} !important` : void 0, fontSize: typeof e.data.valueSizeActive == "number" ? `${q(e.data.valueSizeActive)} !important` : void 0 }, "& div[data-position='active']": { left: e.data.iconXOffsetActive && e.data.iconXOffsetActive !== "0px" ? `${e.data.iconXOffsetActive} !important` : e.data.iconXOffsetActive === "" ? void 0 : "0px !important", bottom: e.data.iconYOffsetActive && e.data.iconYOffsetActive !== "0px" ? `${e.data.iconYOffsetActive} !important` : e.data.iconYOffsetActive === "" ? void 0 : "0px !important" } } } } }) }), V && o(_, { sx: { display: "flex", justifyContent: "center", alignItems: "center", flexShrink: 0, transform: n ? `translateY(${l.y}px)` : `translateX(${l.x}px)` }, children: o(D, { alt: "", src: V, style: { width: n ? e.data.iconSizeEnd || "24px" : e.data.iconSizeStart || "24px", ...j(V, ae, true) } }) })] }) : null] });
};
class Q extends be {
  static getWidgetInfo() {
    return { id: "tplSliderCollectionWidget", visSet: "vis-2-widgets-collection", visSetLabel: "widgets_collection", visName: "SliderCollectionWidget", visWidgetLabel: "slider_collection_widget", visOrder: 5, visAttrs: [{ name: "common", fields: [...L()] }, { name: "slider", label: "group_slider", fields: [...Ce(["number"]), ...Me(), ...K()] }, { name: "active", label: "group_active", fields: [...L({ groupName: "Active", allFields: false })] }, { name: "values", label: "values", indexFrom: 1, indexTo: "values_count", fields: [...L({ groupName: "", allFields: false })] }], visDefaultStyle: { width: "100%", height: "100px", position: "relative" }, visPrev: "widgets/vis-2-widgets-collection/img/prev-collection-slider.png" };
  }
  getWidgetInfo() {
    return Q.getWidgetInfo();
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
    return super.renderWidgetBody(a), this.renderWithProvider(o(Le, {}), a);
  }
}
export {
  Q as default
};
