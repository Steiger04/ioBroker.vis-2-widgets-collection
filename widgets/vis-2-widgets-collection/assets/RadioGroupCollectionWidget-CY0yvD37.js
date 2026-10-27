import { Ct as e, D as t, Et as n, Jt as r, dn as i, gn as a, o, s, v as c } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__75535022465682__loadShare__shared-DDXkuL4i.js";
import { t as l } from "./createSvgIcon-CNE8PSAz.js";
import { S as u } from "./usePopoverPositioning-DS2NF3yn.js";
import { C as d, T as f, a as p, c as m, f as h, i as g, l as _, m as v, r as y, s as b, u as x, w as S } from "./useData-fwe13Z_u.js";
import { n as C, t as w } from "./useValueState-Bk20tfZd.js";
import { t as T } from "./useData-BJ_4Y9C3.js";
var E = l(o(`path`, { d: `M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8` }), `RadioButtonChecked`), D = l(o(`path`, { d: `M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8` }), `RadioButtonUnchecked`), O = () => [{ type: `custom`, component: () => o(d, {}) }, { name: `radioOrientation`, label: `radio_orientation`, type: `select`, options: [{ value: `horizontal`, label: `horizontal` }, { value: `vertical`, label: `vertical` }], default: `horizontal` }, { type: `custom`, component: () => o(d, {}) }, { name: `hideLabels`, label: `hide_labels`, type: `checkbox`, default: false }, { name: `labelPlacement`, label: `label_placement`, type: `select`, options: [{ value: `start`, label: `Start` }, { value: `end`, label: `End` }], default: `end`, noTranslation: true, hidden: (e3) => !!e3.hideLabels }, { type: `custom`, component: () => o(d, {}) }, v({ name: `radioGroupUncheckedIconColor`, label: `radio_group_unchecked_icon_color`, fallbackFields: [], noGradient: true }), { type: `custom`, component: () => o(d, {}) }, { name: `onlyDisplay`, type: `checkbox`, label: `only_display`, disabled: (e3, t2) => !e3.write, default: false, hidden: (e3, t2) => !e3.write }];
function k() {
  let [l2, u2] = t(null), { height: d2 } = _(l2), { widget: { data: { oidObject: h2 } }, widget: v2 } = c(f), { data: x2, states: S2 } = T(`oid`), { value: C2, updateValue: O2 } = w(`oid`), k2 = h2 == null ? void 0 : h2.type, A2 = [`boolean`, `number`, `string`, `mixed`].includes(k2 ?? ``), j = v2.data.radioOrientation === `horizontal`, M = d2 && S2.length > 0 ? d2 / S2.length : void 0, N = (e3) => {
    O2(e3.target.value);
  };
  return s(b, { isValidType: A2, data: x2, oidValue: C2, children: [o(y, { data: x2, widget: v2 }), o(a, { spacing: 0, ref: u2, direction: j ? `row` : `column`, sx: { width: j ? `100%` : `auto`, height: `100%`, justifyContent: j ? `space-around` : `flex-start`, alignItems: j ? `center` : `stretch` }, children: S2.map((t2, a2) => o(r, { labelPlacement: v2.data.labelPlacement, sx: { m: 0, pr: +(v2.data.labelPlacement === `end` && !v2.data.hideLabels), pl: +(v2.data.labelPlacement === `start` && !v2.data.hideLabels), display: `flex`, alignItems: `center`, justifyContent: v2.data.hideLabels ? `center` : `flex-start`, width: `100%`, ...!j && { flex: `1 1 0`, minHeight: 0 }, ...j && { height: `100%` }, "& .MuiButtonBase-root": { width: `100%`, padding: 0, ...j && { aspectRatio: `1`, maxWidth: d2 || void 0, maxHeight: d2 || void 0, flexShrink: 0 }, ...!j && { height: M ? `${M}px` : `auto`, maxWidth: M || void 0, maxHeight: M || void 0, flexShrink: 0 }, "&.Mui-disabled": { "&.Mui-checked": { color: t2.iconColor || `primary.main` }, color: v2.data.radioGroupUncheckedIconColor || `action.active` } }, "& .MuiFormControlLabel-label": { flex: `1 1 auto`, minWidth: 0, overflow: `hidden`, ...v2.data.hideLabels && { display: `none` } } }, control: o(i, { disabled: v2.data.onlyDisplay, checkedIcon: t2.icon ? s(n, { sx: { overflow: `hidden`, position: `relative`, width: `100%`, height: `100%`, display: `flex`, justifyContent: `center`, alignItems: `center` }, children: [o(D, { sx: { color: t2.iconColor, position: `relative`, width: `100%`, height: `100%` } }), o(n, { sx: { position: `absolute`, width: `100%`, height: `100%`, display: `flex`, justifyContent: `center`, alignItems: `center` }, children: o(g, { alt: ``, src: t2.icon, style: { position: `relative`, left: `calc(0px + ${t2.iconXOffset})`, top: `calc(0px - ${t2.iconYOffset})`, width: `calc(${x2.iconSizeOnly} * 0.5)`, ...p(t2.icon, t2.iconColor, t2.forceColorMask) } }) })] }) : o(E, { sx: { color: t2.iconColor, width: `100%`, height: `100%` } }), icon: o(D, { sx: { width: `100%`, height: `100%` } }), sx: { color: v2.data.radioGroupUncheckedIconColor, width: `100%`, height: `100%`, maxHeight: j ? d2 || void 0 : M, "& .MuiTouchRipple-root": { color: v2.data[`iconColor${a2 + 1}`] || v2.data.iconColor || x2.textColor }, "& .MuiSvgIcon-root": { width: `100%`, height: `100%`, maxHeight: j ? d2 || void 0 : M } }, checked: String(t2.value) === String(C2), onChange: N, value: t2.value }), label: v2.data.hideLabels ? void 0 : o(e, { component: n, variant: `body2`, sx: { width: `100%`, display: `-webkit-box`, WebkitBoxOrient: `vertical`, WebkitLineClamp: 2, overflow: `hidden`, textOverflow: `ellipsis`, wordBreak: `break-word`, fontSize: t2.valueSize, textAlign: `left`, background: m(t2.textColor), WebkitBackgroundClip: `text`, backgroundClip: `text`, color: m(t2.textColor) ? `transparent` : t2.textColor }, contentEditable: `false`, dangerouslySetInnerHTML: { __html: t2.label } }) }, a2)) })] });
}
var A = class e2 extends u {
  static getWidgetInfo() {
    return { id: `tplRadioGroupCollectionWidget`, visSet: `vis-2-widgets-collection`, visSetLabel: `widgets_collection`, visName: `RadioGroupCollectionWidget`, visWidgetLabel: `radio_group_collection_widget`, visOrder: 6, visAttrs: [{ name: `common`, fields: [...h({ groupName: ``, allFields: true })] }, { name: `radioGroup`, label: `radio_group`, fields: [...x([`string`, `number`, `boolean`, `mixed`]), ...C(), ...O()] }, { name: `values`, label: `values`, indexFrom: 1, indexTo: `values_count`, fields: [...h({ groupName: ``, allFields: false })] }], visDefaultStyle: { width: `100%`, height: `100px`, position: `relative` }, visPrev: `widgets/vis-2-widgets-collection/img/prev-collection-radio-group.png` };
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
    let t2 = { id: e3.id, refService: e3.refService, style: e3.style, widget: { data: this.state.rxData, style: this.state.rxStyle || {} }, setValue: this.setValue, setState: this.setState.bind(this), values: this.state.values, isSignalVisible: this.isSignalVisible.bind(this), getPropertyValue: this.getPropertyValue.bind(this), mode: this.props.context.themeType, socket: this.props.context.socket, theme: this.props.context.theme, wrappedContent: this.wrappedCollectionContent };
    return this.wrappedCollectionContent = !(e3.widget.data.noCard || e3.widget.usedInWidget), S(this.wrapContent(o(k, {})), t2);
  }
};
export {
  A as default
};
