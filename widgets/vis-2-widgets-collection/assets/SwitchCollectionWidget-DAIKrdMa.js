import { E as e, Et as t, o as n, s as r, v as i } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__75535022465682__loadShare__shared-DDXkuL4i.js";
import { h as a } from "./createSvgIcon-CNE8PSAz.js";
import { t as o } from "./Switch-CUqHMISx.js";
import { S as s } from "./usePopoverPositioning-DS2NF3yn.js";
import { C as c, T as l, a as u, f as d, m as f, r as p, s as m, u as h, w as g } from "./useData-fwe13Z_u.js";
import { n as _, t as v } from "./useValueState-Bk20tfZd.js";
import { t as y } from "./useData-BJ_4Y9C3.js";
var b = () => [{ type: `custom`, component: () => n(c, {}) }, { name: `thumbSize`, label: `thumb_size`, type: `slider`, min: 0, max: 500, default: 62, step: 1 }, f({ name: `thumbColorTrue`, label: `thumb_color_true`, fallbackFields: [] }), f({ name: `thumbColorFalse`, label: `thumb_color_false`, fallbackFields: [] }), { type: `custom`, component: () => n(c, {}) }, { name: `trackSize`, label: `track_size`, type: `slider`, min: 0, max: 100, default: 10, step: 1 }, f({ name: `trackColor`, label: `track_color`, fallbackFields: [] })], x = a(o)(({ width: e3, maxheight: t2, data: n2, widget: r2, theme: i2 }) => {
  let a2 = r2.data.thumbSize ?? 62;
  return { width: `100%`, height: `100%`, padding: 0, margin: 0, "&.MuiSwitch-root": { overflow: `visible` }, "& .MuiSwitch-switchBase": { margin: 0, padding: 0, top: `50%`, left: `0%`, transform: `translate(-50%, -50%) translateX(${(t2 || 0) >= a2 ? a2 / 2 - 4 : (t2 || 0) / 2 - 4}px)`, "& .MuiSwitch-input": { left: 0, width: e3 || 0 }, "&.Mui-checked": { top: `50%`, left: `100%`, transform: `translate(-50%, -50%) translateX(${(t2 || 0) >= a2 ? -(a2 / 2 - 4) : -((t2 || 0) / 2 - 4)}px)`, "& .MuiSwitch-input": { left: -(e3 || 0) + a2, width: e3 || 0 }, "& .MuiSwitch-thumb": { background: r2.data.thumbColorTrue || i2.palette.primary.main }, "& .MuiSwitch-thumb:before": { top: `calc(${n2.iconYOffset} * -1)`, left: n2.iconXOffset, backgroundSize: n2.iconSizeOnly, backgroundImage: `url('${n2.icon}')`, ...u(n2.icon, n2.iconColor || i2.palette.primary.dark, n2.forceColorMask) }, "& + .MuiSwitch-track": { background: r2.data.trackColor } } }, "& .MuiSwitch-track": { background: r2.data.trackColor }, "& .MuiSwitch-thumb": { background: r2.data.thumbColorFalse, width: a2, maxWidth: t2, height: a2, maxHeight: t2, "&::before": { content: `''`, position: `absolute`, width: `100%`, height: `100%`, left: `calc(0px + ${n2.iconXOffset})`, top: `calc(0px - ${n2.iconYOffset})`, backgroundRepeat: `no-repeat`, backgroundPosition: `center`, backgroundSize: n2.iconSizeOnly, backgroundImage: `url('${n2.icon}')`, ...u(n2.icon, n2.iconColor || i2.palette.primary.main, n2.forceColorMask) } } };
});
function S() {
  var _a, _b, _c, _d;
  let a2 = e(null), { widget: o2, theme: s2 } = i(l), c2 = o2.data.oidObject, { data: u2 } = y(`oid`), { value: d2, updateValue: f2 } = v(`oid`), h2 = c2 == null ? void 0 : c2.type;
  return r(m, { isValidType: h2 === `boolean`, data: u2, oidValue: d2, children: [n(p, { data: u2, widget: o2 }), n(t, { sx: { position: `relative`, width: `100%`, height: o2.data.trackSize && `${o2.data.trackSize}%` || `10%` }, children: n(t, { ref: a2, sx: { width: `100%`, height: `100%`, px: `8px`, display: `flex`, justifyContent: `center`, alignItems: `center` }, children: d2 !== void 0 && o2.data.thumbSize !== void 0 && n(x, { disabled: h2 !== `boolean`, width: (_a = a2.current) == null ? void 0 : _a.clientWidth, maxheight: (_d = (_c = (_b = a2.current) == null ? void 0 : _b.parentElement) == null ? void 0 : _c.parentElement) == null ? void 0 : _d.clientHeight, data: u2, widget: o2, checked: !!d2, onChange: () => {
    f2(!d2);
  }, sx: { "& .MuiTouchRipple-root": { color: u2.iconColor || s2.palette.primary.main } } }) }) })] });
}
var C = class e2 extends s {
  static getWidgetInfo() {
    return { id: `tplSwitchCollectionWidget`, visSet: `vis-2-widgets-collection`, visSetLabel: `widgets_collection`, visName: `SwitchCollectionWidget`, visWidgetLabel: `switch_collection_widget`, visOrder: 3, visAttrs: [{ name: `common`, fields: [...d()] }, { name: `switch`, label: `group_switch`, fields: [...h([`boolean`]), ..._(), ...b()] }, { name: `values`, label: `values`, indexFrom: 1, indexTo: `values_count`, fields: [...d({ groupName: ``, allFields: false })] }], visDefaultStyle: { width: `100%`, height: `100px`, position: `relative` }, visPrev: `widgets/vis-2-widgets-collection/img/prev-collection-switch.png` };
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
    return this.wrappedCollectionContent = !(e3.widget.data.noCard || e3.widget.usedInWidget), g(this.wrapContent(n(S, {})), t2);
  }
};
export {
  C as default
};
