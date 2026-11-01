import { h as i, e as B, l as S, f as u, j as P, m as j, i as I } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__loadShare__shared-ClxoeJ8S.js";
import { C as z, B as O, b as K, G as U } from "./usePopoverPositioning-C1_MhytU.js";
import { e as k, u as M, C as G, c as D } from "./useData-jkOw5Oj_.js";
import { i as L, C as Y, c as H } from "./CollectionBaseImage-Cm6oCVNa.js";
import { u as q, d as J } from "./useValueState-BB0agxu5.js";
import { C as Q, s as X } from "./CollectionValueDisplay-D0AG001H.js";
import { i as Z, I as N } from "./allowedOidTypes-Dpd6yL-L.js";
import { u as $ } from "./useHtmlValue-Dykqjd_u.js";
import { I as ee } from "./InputAdornment-uuFvK63f.js";
import { B as te } from "./Button-CoSvBFy1.js";
import "./vite-preload-helper-PPVm8Dsz.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./tslib.es6-F1e60Aum.js";
import "./Avatar-Bdh5EYvv.js";
const _ = (t) => {
  var _a;
  return ((_a = t.oidObject) == null ? void 0 : _a.type) !== "number";
}, ne = () => [{ type: "custom", component: () => i(k, { dividerText: "input" }) }, { name: "showOkButton", type: "checkbox", label: "show_ok_button", default: false, tooltip: "show_ok_button_tooltip" }, { name: "inputVariant", type: "select", label: "input_variant", default: "standard", options: [{ value: "standard", label: "variant_standard" }, { value: "outlined", label: "variant_outlined" }, { value: "filled", label: "variant_filled" }] }, { name: "inputPadding", type: "number", label: "input_padding", default: 1, min: 0, step: 0.5 }, { type: "custom", component: () => i(k, { dividerText: "number" }), hidden: _ }, { name: "step", type: "number", label: "step", default: 1, min: 0, hidden: _ }, { name: "minValue", type: "number", label: "min_value", hidden: _ }, { name: "maxValue", type: "number", label: "max_value", hidden: _ }];
function ae(t, e, o) {
  return o ? t : e;
}
function oe(t) {
  return t ? "commit" : "leave";
}
function ie(t) {
  return t === "Enter" ? "commit" : t === "Escape" ? "cancel" : "none";
}
const le = (t) => t == null ? "" : String(t), se = (t, e) => {
  const { value: o, updateValue: n, hasBackendChange: g } = q(t), l = le(o), [c, s] = B(l), [m, d] = B(false);
  S(() => {
    s((a) => ae(a, l, m));
  }, [l, m]);
  const b = u((a) => {
    a && d(true);
  }, []), p = u(() => {
    d(false), n(c);
  }, [c, n]), y = u((a) => {
    s(a), e.showOkButton || n(a);
  }, [e.showOkButton, n]), f = u(() => {
    oe(e.showOkButton) === "commit" ? p() : d(false);
  }, [p, e.showOkButton]), r = u(() => {
    d(false);
  }, []), x = u((a) => {
    const h = ie(a);
    h === "commit" ? f() : h === "cancel" && r();
  }, [r, f]);
  return { value: o, hasBackendChange: g, editing: m, draft: c, enterEdit: b, handleChange: y, handleBlur: f, handleKeyDown: x, commit: p };
}, de = () => {
  const t = P(z), { widget: e, widget: { data: { oidObject: o } } } = t, { data: n } = M("oid"), g = !!e.data.showOkButton, { value: l, hasBackendChange: c, editing: s, draft: m, enterEdit: d, handleChange: b, handleBlur: p, handleKeyDown: y, commit: f } = se("oid", { showOkButton: g }), r = $(l, e, n), x = r != null ? String(r) : "", a = o == null ? void 0 : o.type, h = Z(N, a), C = a === "number", w = !L(e.data), W = n.textColor, E = e.data.inputVariant ?? "standard", F = e.data.minValue !== void 0 ? Number(e.data.minValue) : void 0, R = e.data.maxValue !== void 0 ? Number(e.data.maxValue) : void 0, A = e.data.step !== void 0 ? Number(e.data.step) : void 0, V = j(null);
  return S(() => {
    var _a;
    s && ((_a = V.current) == null ? void 0 : _a.focus());
  }, [s]), I(G, { isValidType: h, data: n, oidValue: l, children: [i(Y, { data: n, widget: e }), h ? s ? I(O, { sx: { width: "100%", display: "flex", alignItems: "center", gap: 1, px: Number(e.data.inputPadding) }, children: [i(K, { inputRef: V, fullWidth: true, size: "small", variant: E, type: C ? "number" : "text", value: m, error: c, onChange: (v) => b(v.target.value), onBlur: p, onKeyDown: (v) => y(v.key), slotProps: { input: { endAdornment: (o == null ? void 0 : o.unit) ? i(ee, { position: "end", children: o.unit }) : void 0 }, htmlInput: C ? { step: A, min: F, max: R } : void 0 }, sx: { fontSize: n.valueSize, color: W } }), g && i(te, { variant: "contained", size: "small", onMouseDown: (v) => v.preventDefault(), onClick: f, children: "OK" })] }) : i(O, { onClick: () => d(w), sx: { width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", cursor: w ? "text" : "default" }, children: i(Q, { data: n, contentValue: x, noIcon: e.data.noIcon, noValue: e.data.noValue }) }) : null] });
};
class T extends U {
  static getWidgetInfo() {
    return { id: "tplInputCollectionWidget", visSet: "vis-2-widgets-collection", visSetLabel: "widgets_collection", visSetColor: "#0C0A43", visName: "InputCollectionWidget", visWidgetLabel: "input_collection_widget", visOrder: 1, visAttrs: [{ name: "common", fields: [...D()] }, { name: "input", label: "group_input", fields: [...H(N), ...J(), ...ne(), ...X({ onlyStates: false })] }, { name: "values", label: "values", indexFrom: 1, indexTo: "values_count", fields: [...D({ groupName: "", allFields: false })] }], visDefaultStyle: { width: "100%", height: "80px", position: "relative" }, visPrev: "widgets/vis-2-widgets-collection/img/prev-collection-input.png" };
  }
  getWidgetInfo() {
    return T.getWidgetInfo();
  }
  propertiesUpdate() {
  }
  onRxDataChanged() {
  }
  onRxStyleChanged() {
  }
  onStateUpdated(e, o) {
  }
  componentDidMount() {
    super.componentDidMount();
  }
  renderWidgetBody(e) {
    return super.renderWidgetBody(e), this.renderWithProvider(i(de, {}), e);
  }
}
export {
  T as default
};
