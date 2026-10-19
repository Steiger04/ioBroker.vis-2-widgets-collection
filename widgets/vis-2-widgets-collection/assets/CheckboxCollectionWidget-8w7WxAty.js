import { Ct as e, Et as t, Ft as n, Jt as r, o as i, s as a, v as o, w as s } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__75535022465682__loadShare__shared-DDXkuL4i.js";
import { S as c } from "./usePopoverPositioning-DS2NF3yn.js";
import { C as l, T as u, a as d, c as f, f as p, i as m, r as h, s as g, t as _, u as v, w as y } from "./useData-fwe13Z_u.js";
import { n as b, t as x } from "./useValueState-Bk20tfZd.js";
import { t as S } from "./useHtmlValue--eJWoxBk.js";
var C = () => [{ type: `custom`, component: () => i(l, { dividerText: `label` }) }, { name: `withoutLabel`, label: `without_label`, type: `checkbox`, default: false }, { name: `checkboxLabelPlacement`, label: `checkbox_label_placement`, type: `select`, options: [{ value: `top`, label: `checkbox_top` }, { value: `bottom`, label: `checkbox_bottom` }, { value: `start`, label: `checkbox_start` }, { value: `end`, label: `checkbox_end` }], default: `end`, hidden: `data.withoutLabel` }, { type: `custom`, component: () => i(l, {}) }, { name: `onlyDisplay`, type: `checkbox`, label: `only_display`, disabled: (e3) => !e3.write, default: false, hidden: (e3) => !e3.write }], w = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSAzSDVhMiAyIDAgMCAwLTIgMnYxNGEyIDIgMCAwIDAgMiAyaDE0YTIgMiAwIDAgMCAyLTJWNWEyIDIgMCAwIDAtMi0yem0tOSAxNGwtNS01bDEuNDEtMS40MUwxMCAxNC4xN2w3LjU5LTcuNTlMMTkgOGwtOSA5eiIvPjwvc3ZnPg==`, T = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSA1djE0SDVWNWgxNG0wLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yeiIvPjwvc3ZnPg==`;
function E(e3) {
  if (!e3) return { color: void 0 };
  let t2 = f(e3);
  return t2 ? { background: t2, WebkitBackgroundClip: `text`, backgroundClip: `text`, color: `transparent` } : { color: e3 };
}
function D(e3, t2, n2) {
  let r2 = e3 ? w : T;
  return i(m, { alt: ``, src: t2.icon || r2, style: n2 });
}
function O() {
  let c2 = o(u);
  if (!c2) throw Error(`CheckboxCollection must be used within a CollectionProvider`);
  let { widget: l2, theme: f2 } = c2, p2 = l2.data.oidObject, { data: m2 } = _(`oid`), { value: v2, updateValue: y2 } = x(`oid`), b2 = (p2 == null ? void 0 : p2.type) === `boolean`, C2 = S(v2, l2, m2), T2 = s(() => ({ objectFit: `contain`, width: `calc(100% * (${m2.iconSize} / 24px))`, height: `calc(100% * (${m2.iconSize} / 24px))`, ...d(m2.icon || w, m2.iconColor || f2.palette.primary.main, m2.forceColorMask) }), [m2.iconSize, m2.icon, m2.iconColor, m2.forceColorMask, f2.palette.primary.main]), O2 = s(() => E(m2.textColor), [m2.textColor]);
  return a(g, { isValidType: b2, data: m2, oidValue: v2, children: [i(h, { data: m2, widget: l2 }), i(t, { sx: { width: `100%`, height: `100%`, display: `flex`, justifyContent: `center`, alignItems: `center` }, children: v2 !== void 0 && i(r, { labelPlacement: l2.data.checkboxLabelPlacement, sx: { width: `100%`, height: `100%`, display: `flex`, m: 0 }, control: i(n, { disabled: l2.data.onlyDisplay, disableRipple: true, checked: !!v2, onChange: () => y2(!v2), checkedIcon: D(true, m2, T2), icon: D(false, m2, T2), sx: { left: m2.iconXOffset, bottom: m2.iconYOffset, objectFit: `contain`, width: `100%`, height: `100%`, flexGrow: 1, p: 0, "& .MuiSvgIcon-root": { width: `100%`, height: `100%` } } }), label: !l2.data.withoutLabel && i(e, { component: `div`, variant: `body2`, sx: { fontSize: m2.valueSize, textAlign: `center`, bgcolor: `transparent`, ...O2, textTransform: `none`, px: 1, pl: 0, pr: 2, width: `100%`, height: `100%`, flexGrow: 1, display: `flex`, alignItems: `center`, justifyContent: `flex-start`, overflowWrap: `break-word`, wordBreak: `break-word`, whiteSpace: `normal`, hyphens: `auto`, "& > div": { textAlign: `left`, display: `inline-block` } }, dangerouslySetInnerHTML: { __html: `<div style="text-align: left; display: inline-block; width: 100%;">${C2 || ``}</div>` } }) }) })] });
}
var k = class e2 extends c {
  static getWidgetInfo() {
    return { id: `tplCheckboxCollectionWidget`, visSet: `vis-2-widgets-collection`, visSetLabel: `widgets_collection`, visName: `CheckboxCollectionWidget`, visWidgetLabel: `checkbox_collection_widget`, visOrder: 2, visAttrs: [{ name: `common`, fields: [...p()] }, { name: `checkbox`, label: `group_checkbox`, fields: [...v([`boolean`]), ...b(), ...C()] }, { name: `values`, label: `values`, indexFrom: 1, indexTo: `values_count`, fields: [...p({ groupName: ``, allFields: false })] }], visDefaultStyle: { width: `100%`, height: `100px`, position: `relative` }, visPrev: `widgets/vis-2-widgets-collection/img/prev-collection-checkbox.png` };
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
    return this.wrappedCollectionContent = !(e3.widget.data.noCard || e3.widget.usedInWidget), y(this.wrapContent(i(O, {})), t2);
  }
};
export {
  k as default
};
