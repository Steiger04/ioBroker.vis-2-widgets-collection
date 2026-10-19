import { Ct as e, D as t, E as n, Et as r, Zt as i, b as a, jt as o, o as s, pn as c, s as l, v as u, vt as d } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__75535022465682__loadShare__shared-DDXkuL4i.js";
import { S as f } from "./usePopoverPositioning-DS2NF3yn.js";
import { C as p, T as m, a as h, c as g, f as _, r as v, s as y, u as b, w as x } from "./useData-fwe13Z_u.js";
import { n as S, t as C } from "./useValueState-Bk20tfZd.js";
import { t as w } from "./useData-BJ_4Y9C3.js";
import { t as T } from "./useHtmlValue--eJWoxBk.js";
import { t as E } from "./stateFields-BfIDJcWu.js";
var D = (e3) => {
  var _a;
  return ((_a = e3.oidObject) == null ? void 0 : _a.type) !== `number`;
}, O = () => [{ type: `custom`, component: () => s(p, { dividerText: `input` }) }, { name: `showOkButton`, type: `checkbox`, label: `show_ok_button`, default: false, tooltip: `show_ok_button_tooltip` }, { name: `inputVariant`, type: `select`, label: `input_variant`, default: `standard`, options: [{ value: `standard`, label: `variant_standard` }, { value: `outlined`, label: `variant_outlined` }, { value: `filled`, label: `variant_filled` }] }, { name: `inputPadding`, type: `number`, label: `input_padding`, default: 1, min: 0, step: 0.5 }, { type: `custom`, component: () => s(p, { dividerText: `number` }), hidden: D }, { name: `step`, type: `number`, label: `step`, default: 1, min: 0, hidden: D }, { name: `minValue`, type: `number`, label: `min_value`, hidden: D }, { name: `maxValue`, type: `number`, label: `max_value`, hidden: D }], k = /* @__PURE__ */ new Set([`string`, `number`, `mixed`]), A = () => {
  let { widget: f2, theme: p2, widget: { data: { oidObject: _2 } } } = u(m), { data: b2 } = w(`oid`), { value: x2, updateValue: S2, hasBackendChange: E2 } = C(`oid`), D2 = T(x2, f2, b2), O2 = D2 == null ? `` : String(D2), A2 = _2 == null ? void 0 : _2.type, j2 = A2 !== void 0 && k.has(A2), M = A2 === `number`, N = !!(f2.data.onlyDisplay ?? !f2.data.write), P = !!f2.data.showOkButton, F = !N, I = b2.textColor, L = f2.data.inputVariant ?? `standard`, R = b2.icon, z = b2.iconColor || p2.palette.primary.main, B = h(R, z, !!b2.forceColorMask), V = f2.data.minValue === void 0 ? void 0 : Number(f2.data.minValue), H = f2.data.maxValue === void 0 ? void 0 : Number(f2.data.maxValue), U = f2.data.step === void 0 ? void 0 : Number(f2.data.step), W = x2 == null ? `` : String(x2), [G, K] = t(W), [q, J] = t(false), Y = n(null);
  a(() => {
    q || K(W);
  }, [W, q]), a(() => {
    var _a;
    q && ((_a = Y.current) == null ? void 0 : _a.focus());
  }, [q]);
  let X = () => {
    F && J(true);
  }, Z = () => {
    J(false), S2(G);
  }, Q = !f2.data.noIcon && !!R;
  return l(y, { isValidType: j2, data: b2, oidValue: x2, children: [s(v, { data: b2, widget: f2 }), j2 ? q ? l(r, { sx: { width: `100%`, display: `flex`, alignItems: `center`, gap: 1, px: Number(f2.data.inputPadding) }, children: [s(d, { inputRef: Y, fullWidth: true, size: `small`, variant: L, type: M ? `number` : `text`, value: G, error: E2, onChange: (e3) => {
    K(e3.target.value), P || S2(e3.target.value);
  }, onBlur: () => {
    P ? Z() : J(false);
  }, onKeyDown: (e3) => {
    e3.key === `Enter` && e3.target.blur();
  }, slotProps: { input: { endAdornment: (_2 == null ? void 0 : _2.unit) ? s(i, { position: `end`, children: _2.unit }) : void 0 }, htmlInput: M ? { step: U, min: V, max: H } : void 0 }, sx: { fontSize: b2.valueSize, color: I } }), P && s(o, { variant: `contained`, size: `small`, onMouseDown: (e3) => e3.preventDefault(), onClick: Z, children: `OK` })] }) : l(r, { onClick: X, sx: { width: `100%`, height: `100%`, display: `flex`, alignItems: `center`, justifyContent: `center`, gap: 1, cursor: F ? `text` : `default` }, children: [Q && s(r, { sx: { display: `flex`, alignItems: `center`, justifyContent: `center`, flexShrink: 0 }, children: s(c, { variant: `square`, src: R || void 0, slotProps: { img: { style: { objectFit: `contain`, ...B } } }, sx: { overflow: `visible`, width: b2.iconSize, height: b2.iconSize, left: `calc(0px + ${b2.iconXOffset})`, top: `calc(0px - ${b2.iconYOffset})` } }) }), s(r, { sx: { display: `flex`, alignItems: `center`, justifyContent: `center`, maxWidth: `100%`, overflow: `hidden` }, children: !f2.data.noValue && s(e, { component: `span`, variant: `body2`, sx: { fontSize: b2.valueSize, textAlign: `center`, bgcolor: `transparent`, background: g(I), WebkitBackgroundClip: `text`, backgroundClip: `text`, color: g(I) ? `transparent` : I, textTransform: `none`, maxWidth: `100%`, overflow: `hidden`, textOverflow: `ellipsis`, whiteSpace: `nowrap` }, dangerouslySetInnerHTML: { __html: `<span style="text-align: center; display: inline-block;">${O2 || ``}</span>` } }) })] }) : null] });
}, j = class e2 extends f {
  static getWidgetInfo() {
    return { id: `tplInputCollectionWidget`, visSet: `vis-2-widgets-collection`, visSetLabel: `widgets_collection`, visSetColor: `#0C0A43`, visName: `InputCollectionWidget`, visWidgetLabel: `input_collection_widget`, visOrder: 1, visAttrs: [{ name: `common`, fields: [..._()] }, { name: `input`, label: `group_input`, fields: [...b([`string`, `number`, `mixed`]), ...S(), ...O(), ...E({ onlyStates: false })] }, { name: `values`, label: `values`, indexFrom: 1, indexTo: `values_count`, fields: [..._({ groupName: ``, allFields: false })] }], visDefaultStyle: { width: `100%`, height: `80px`, position: `relative` }, visPrev: `widgets/vis-2-widgets-collection/img/prev-collection-input.png` };
  }
  getWidgetInfo() {
    return e2.getWidgetInfo();
  }
  propertiesUpdate() {
  }
  onRxDataChanged() {
  }
  onRxStyleChanged() {
  }
  onStateUpdated(e3, t2) {
  }
  componentDidMount() {
    super.componentDidMount();
  }
  renderWidgetBody(e3) {
    super.renderWidgetBody(e3);
    let t2 = { id: e3.id, refService: e3.refService, style: e3.style, widget: { data: this.state.rxData, style: this.state.rxStyle }, setValue: this.setValue, setState: this.setState.bind(this), values: this.state.values, isSignalVisible: this.isSignalVisible.bind(this), getPropertyValue: this.getPropertyValue.bind(this), mode: this.props.context.themeType, socket: this.props.context.socket, theme: this.props.context.theme, wrappedContent: this.wrappedCollectionContent };
    return this.wrappedCollectionContent = !(e3.widget.data.noCard || e3.widget.usedInWidget), x(this.wrapContent(s(A, {})), t2);
  }
};
export {
  j as default
};
