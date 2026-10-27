import { B as e, Ct as t, Et as n, H as r, _ as i, bt as a, o, s, v as c, yt as l } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__75535022465682__loadShare__shared-DDXkuL4i.js";
import { S as u } from "./usePopoverPositioning-DS2NF3yn.js";
import { C as d, T as f, a as p, c as m, f as h, i as g, m as _, r as v, s as y, u as b, w as x, x as S } from "./useData-fwe13Z_u.js";
import { n as C, t as w } from "./useValueState-Bk20tfZd.js";
import { t as T } from "./useData-BJ_4Y9C3.js";
var E = () => [{ type: `custom`, component: () => o(d, {}) }, { name: `onlyIcon`, type: `checkbox`, label: `only_icon`, hidden: `data.onlyText` }, { name: `onlyText`, type: `checkbox`, label: `only_text`, hidden: `data.onlyIcon` }, { name: `buttonGroupVariant`, label: `button_group_variant`, type: `select`, options: [{ value: `text`, label: `button_group_text` }, { value: `outlined`, label: `button_group_outlined` }], default: `text` }, { name: `buttonGroupOrientation`, label: `button_group_orientation`, type: `select`, options: [{ value: `horizontal`, label: `horizontal` }, { value: `vertical`, label: `vertical` }], default: `horizontal` }, _({ name: `buttonGroupColor`, label: `button_group_color`, fallbackFields: [`textColor`] })];
function D(e3) {
  let t2 = m(e3), n2 = S(e3);
  return { hasGradient: !!t2, hasColor: n2, hoverBackground: t2 ? void 0 : n2 && e3 ? r(e3, 0.5) : void 0, selectedBackground: t2 ? void 0 : n2 && e3 ? r(e3, 0.3) : void 0 };
}
function O() {
  let { widget: r2, theme: u2 } = c(f), d2 = r2.data.oidObject, { data: h2, states: _2, activeIndex: b2 } = T(`oid`), { value: x2, updateValue: S2 } = w(`oid`), C2 = r2.data.buttonGroupVariant, E2 = r2.data.buttonGroupOrientation, O2 = d2 == null ? void 0 : d2.type, k2 = O2 === `boolean` || O2 === `number` || O2 === `string` || O2 === `mixed`, A = E2 === `vertical`, j = C2 === `outlined`, M = r2.data.buttonGroupColor ? e(r2.data.buttonGroupColor, 0.6) : e(u2.palette.text.primary, 0.6), N = i((e3) => {
    S2(e3);
  }, [S2]);
  return s(y, { bgActive: false, isValidType: k2, data: h2, oidValue: x2, children: [o(v, { data: h2, widget: r2 }), o(n, { sx: { width: `100%`, height: `100%`, display: `flex` }, children: o(a, { exclusive: true, value: String(x2), disabled: !k2, fullWidth: true, orientation: E2, sx: { display: `flex`, flexDirection: A ? `column` : `row`, justifyContent: `space-between`, alignItems: `center`, height: A ? `100%` : `auto`, maxHeight: A ? `100%` : `none`, ...A && { "& .MuiToggleButton-root": { flex: `1 1 0`, minHeight: 0, maxHeight: `calc(100% / ${_2.length})` } }, "& .MuiToggleButtonGroup-firstButton": { ...!j && { border: `none` }, ...j && { borderColor: M }, borderRadius: r2.data.basePadding ? void 0 : 0 }, "& .MuiToggleButtonGroup-middleButton": { ...!j && { border: `none`, marginLeft: A ? void 0 : 0, marginTop: A ? 0 : void 0, boxShadow: A ? `inset 0 1px 0 0 ${M}` : `inset 1px 0 0 0 ${M}` }, ...j && { borderColor: M } }, "& .MuiToggleButtonGroup-lastButton": { ...!j && { border: `none`, marginLeft: A ? void 0 : 0, marginTop: A ? 0 : void 0, boxShadow: A ? `inset 0 1px 0 0 ${M}` : `inset 1px 0 0 0 ${M}` }, ...j && { borderColor: M }, borderRadius: r2.data.basePadding ? void 0 : 0 } }, children: _2.map(({ value: e3, ...i2 }, a2) => {
    let c2 = b2 === a2 + 1, { hasGradient: u3, hoverBackground: d3, selectedBackground: f2 } = D(i2.background), h3 = m(i2.textColor);
    return o(l, { value: String(e3), onClick: () => N(e3), sx: { width: `100%`, height: `100%`, p: 0, display: `flex`, justifyContent: `center`, alignItems: `center`, "&.MuiToggleButton-root": { filter: c2 && u3 ? `opacity(80%)` : void 0, background: i2.background, "&:hover": { filter: u3 ? `opacity(80%)` : void 0, background: d3 }, "&.Mui-selected": { background: f2 } } }, children: s(n, { sx: { width: `100%`, height: `100%`, p: 0.5, display: `flex`, flexDirection: `column`, justifyContent: `space-around`, alignItems: `center` }, children: [!r2.data.onlyText && i2.icon && o(n, { sx: { overflow: `hidden`, width: `100%`, height: `100%`, display: `flex`, justifyContent: `center`, alignItems: `center` }, children: o(g, { src: i2.icon, style: { position: `relative`, left: i2.iconXOffset, bottom: i2.iconYOffset, objectFit: `contain`, width: i2.iconSizeOnly, height: i2.iconSizeOnly, ...p(i2.icon, i2.iconColor, i2.forceColorMask) } }) }), !r2.data.onlyIcon && o(n, { sx: { width: `100%`, pt: 0.5, display: `flex`, justifyContent: `center`, alignItems: `center` }, children: o(t, { contentEditable: `false`, dangerouslySetInnerHTML: { __html: i2.label }, noWrap: true, variant: `body2`, sx: { textTransform: `none`, fontSize: i2.valueSize, background: h3, WebkitBackgroundClip: `text`, backgroundClip: `text`, color: h3 ? `transparent` : i2.textColor } }) })] }) }, `${String(e3)}-${a2}`);
  }) }) })] });
}
var k = class e2 extends u {
  static getWidgetInfo() {
    return { id: `tplButtonGroupCollectionWidget`, visSet: `vis-2-widgets-collection`, visSetLabel: `widgets_collection`, visName: `ButtonGroupCollectionWidget`, visWidgetLabel: `button_group_collection_widget`, visOrder: 7, visAttrs: [{ name: `common`, fields: [...h()] }, { name: `buttonGroup`, label: `button_group`, fields: [...b([`string`, `number`, `boolean`, `mixed`]), ...C(), ...E()] }, { name: `active`, label: `group_active`, fields: [...h({ groupName: `Active`, allFields: false })] }, { name: `values`, label: `values`, indexFrom: 1, indexTo: `values_count`, fields: [...h({ groupName: ``, allFields: false })] }], visDefaultStyle: { width: `100%`, height: `100px`, position: `relative` }, visPrev: `widgets/vis-2-widgets-collection/img/prev-collection-button-group.png` };
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
    return this.wrappedCollectionContent = !(e3.widget.data.noCard || e3.widget.usedInWidget), x(this.wrapContent(o(O, {})), t2);
  }
};
export {
  k as default
};
