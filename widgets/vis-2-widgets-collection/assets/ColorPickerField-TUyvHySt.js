import { Ct as e, D as t, E as n, Et as r, Xt as i, _ as a, b as o, kt as s, o as c, s as l, un as u } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__75535022465682__loadShare__shared-DDXkuL4i.js";
import { t as d } from "./createSvgIcon-CNE8PSAz.js";
import { S as f, n as p, t as m } from "./usePopoverPositioning-DS2NF3yn.js";
var h = d(c(`path`, { d: `M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z` }), `Clear`), g = d(c(`path`, { d: `M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2m-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2` }), `DragIndicator`), _ = d(c(`path`, { d: `M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z` }), `ExpandMore`);
function v({ value: d2, onChange: g2, label: _2, overridden: v2 }) {
  let y = s(), [b, x] = t(null), [S, C] = t(d2), w = n(null), { anchorOrigin: T, transformOrigin: E, maxHeight: D, setContentRef: O, popoverActionRef: k } = m(b, !!b), A = !!b;
  o(() => {
    C(d2);
  }, [d2]), o(() => () => {
    w.current !== null && clearTimeout(w.current);
  }, []);
  let j = a((e2) => {
    C(e2), w.current !== null && clearTimeout(w.current), w.current = setTimeout(() => {
      w.current = null, g2(e2);
    }, 150);
  }, [g2]), M = a((e2) => {
    e2.stopPropagation(), w.current !== null && (clearTimeout(w.current), w.current = null), g2(``);
  }, [g2]);
  return l(r, { children: [l(r, { sx: { display: `grid`, gridTemplateColumns: `1fr auto`, alignItems: `center`, gap: 1, py: 0.5, cursor: `pointer`, borderRadius: `6px`, "&:hover": { backgroundColor: y.palette.action.hover }, transition: `background-color 150ms` }, onClick: (e2) => x(e2.currentTarget), children: [c(e, { variant: `body2`, color: `text.secondary`, sx: { userSelect: `none`, overflow: `hidden`, textOverflow: `ellipsis`, whiteSpace: `nowrap` }, children: _2 }), l(r, { sx: { display: `flex`, alignItems: `center`, gap: 0.5 }, children: [c(r, { sx: { width: 22, height: 22, borderRadius: `4px`, background: S || `transparent`, border: S ? `1px solid ${y.palette.divider}` : `1px dashed ${y.palette.text.disabled}` } }), v2 ? c(i, { size: `small`, onClick: M, title: f.t(`theme_studio_reset_color`), sx: { p: 0.25 }, children: c(h, { fontSize: `inherit` }) }) : null] })] }), c(u, { action: k, open: A, anchorEl: b, onClose: () => x(null), anchorOrigin: T, transformOrigin: E, slotProps: { paper: { elevation: 0, sx: { p: `9px`, borderRadius: `6px`, backgroundColor: `rgb(32,32,32)`, boxSizing: `border-box`, maxHeight: D, overflowX: `hidden`, overflowY: `auto` } } }, children: c(r, { ref: O, sx: { borderRadius: `6px` }, children: c(p, { value: S || `#ffffff`, onChange: j, hidePresets: true, hideInputs: true, hideEyeDrop: true, hideInputType: true }) }) })] });
}
export {
  h as i,
  _ as n,
  g as r,
  v as t
};
