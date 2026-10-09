import { i as u, o as C, f as I, l as S } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__loadShare__shared-DgsbL9Pr.js";
import { d as x, g as D, f as F, u as M, p as N, s as m, h as z, i as U, m as T } from "./usePopoverPositioning-BUV6laon.js";
const j = x(u("path", { d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" }), "Person");
function q(a) {
  return D("MuiAvatar", a);
}
F("MuiAvatar", ["root", "colorDefault", "circular", "rounded", "square", "img", "fallback"]);
const L = (a) => {
  const { classes: o, variant: r, colorDefault: t } = a;
  return U({ root: ["root", r, t && "colorDefault"], img: ["img"], fallback: ["fallback"] }, q, o);
}, B = m("div", { name: "MuiAvatar", slot: "Root", overridesResolver: (a, o) => {
  const { ownerState: r } = a;
  return [o.root, o[r.variant], r.colorDefault && o.colorDefault];
} })(T(({ theme: a }) => ({ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, width: 40, height: 40, fontFamily: a.typography.fontFamily, fontSize: a.typography.pxToRem(20), lineHeight: 1, borderRadius: "50%", overflow: "hidden", userSelect: "none", variants: [{ props: { variant: "rounded" }, style: { borderRadius: (a.vars || a).shape.borderRadius } }, { props: { variant: "square" }, style: { borderRadius: 0 } }, { props: { colorDefault: true }, style: { color: (a.vars || a).palette.background.default, ...a.vars ? { backgroundColor: a.vars.palette.Avatar.defaultBg } : { backgroundColor: a.palette.grey[400], ...a.applyStyles("dark", { backgroundColor: a.palette.grey[600] }) } } }] }))), H = m("img", { name: "MuiAvatar", slot: "Img", overridesResolver: (a, o) => o.img })({ width: "100%", height: "100%", textAlign: "center", objectFit: "cover", color: "transparent", textIndent: 1e4 }), E = m(j, { name: "MuiAvatar", slot: "Fallback", overridesResolver: (a, o) => o.fallback })({ width: "75%", height: "75%" });
function G({ crossOrigin: a, referrerPolicy: o, src: r, srcSet: t }) {
  const [n, s] = I(false);
  return S(() => {
    if (!r && !t) return;
    s(false);
    let i = true;
    const e = new Image();
    return e.onload = () => {
      i && s("loaded");
    }, e.onerror = () => {
      i && s("error");
    }, e.crossOrigin = a, e.referrerPolicy = o, e.src = r, t && (e.srcset = t), () => {
      i = false;
    };
  }, [a, o, r, t]), n;
}
const O = C(function(o, r) {
  const t = M({ props: o, name: "MuiAvatar" }), { alt: n, children: s, className: i, component: e = "div", slots: h = {}, slotProps: d = {}, imgProps: v, sizes: A, src: p, srcSet: f, variant: k = "circular", ..._ } = t;
  let c = null;
  const l = { ...t, component: e, variant: k }, P = G({ ...v, ...typeof d.img == "function" ? d.img(l) : d.img, src: p, srcSet: f }), y = p || f, b = y && P !== "error";
  l.colorDefault = !b, delete l.ownerState;
  const g = L(l), [R, w] = N("img", { className: g.img, elementType: H, externalForwardedProps: { slots: h, slotProps: { img: { ...v, ...d.img } } }, additionalProps: { alt: n, src: p, srcSet: f, sizes: A }, ownerState: l });
  return b ? c = u(R, { ...w }) : s || s === 0 ? c = s : y && n ? c = n[0] : c = u(E, { ownerState: l, className: g.fallback }), u(B, { as: e, className: z(g.root, i), ref: r, ..._, ownerState: l, children: c });
});
export {
  O as A
};
