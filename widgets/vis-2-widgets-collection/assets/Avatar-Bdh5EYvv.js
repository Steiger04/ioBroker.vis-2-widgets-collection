import { h as u, p as C, e as I, l as S } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__loadShare__shared-ClxoeJ8S.js";
import { f as x, i as D, j as F, k as M, v as N, s as v, m as z, n as U, o as j } from "./usePopoverPositioning-C1_MhytU.js";
const T = x(u("path", { d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" }), "Person");
function q(a) {
  return D("MuiAvatar", a);
}
F("MuiAvatar", ["root", "colorDefault", "circular", "rounded", "square", "img", "fallback"]);
const L = (a) => {
  const { classes: o, variant: e, colorDefault: r } = a;
  return U({ root: ["root", e, r && "colorDefault"], img: ["img"], fallback: ["fallback"] }, q, o);
}, B = v("div", { name: "MuiAvatar", slot: "Root", overridesResolver: (a, o) => {
  const { ownerState: e } = a;
  return [o.root, o[e.variant], e.colorDefault && o.colorDefault];
} })(j(({ theme: a }) => ({ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, width: 40, height: 40, fontFamily: a.typography.fontFamily, fontSize: a.typography.pxToRem(20), lineHeight: 1, borderRadius: "50%", overflow: "hidden", userSelect: "none", variants: [{ props: { variant: "rounded" }, style: { borderRadius: (a.vars || a).shape.borderRadius } }, { props: { variant: "square" }, style: { borderRadius: 0 } }, { props: { colorDefault: true }, style: { color: (a.vars || a).palette.background.default, ...a.vars ? { backgroundColor: a.vars.palette.Avatar.defaultBg } : { backgroundColor: a.palette.grey[400], ...a.applyStyles("dark", { backgroundColor: a.palette.grey[600] }) } } }] }))), H = v("img", { name: "MuiAvatar", slot: "Img", overridesResolver: (a, o) => o.img })({ width: "100%", height: "100%", textAlign: "center", objectFit: "cover", color: "transparent", textIndent: 1e4 }), E = v(T, { name: "MuiAvatar", slot: "Fallback", overridesResolver: (a, o) => o.fallback })({ width: "75%", height: "75%" });
function G({ crossOrigin: a, referrerPolicy: o, src: e, srcSet: r }) {
  const [n, s] = I(false);
  return S(() => {
    if (!e && !r) return;
    s(false);
    let i = true;
    const t = new Image();
    return t.onload = () => {
      i && s("loaded");
    }, t.onerror = () => {
      i && s("error");
    }, t.crossOrigin = a, t.referrerPolicy = o, t.src = e, r && (t.srcset = r), () => {
      i = false;
    };
  }, [a, o, e, r]), n;
}
const O = C(function(o, e) {
  const r = M({ props: o, name: "MuiAvatar" }), { alt: n, children: s, className: i, component: t = "div", slots: h = {}, slotProps: d = {}, imgProps: m, sizes: A, src: p, srcSet: f, variant: k = "circular", ..._ } = r;
  let c = null;
  const l = { ...r, component: t, variant: k }, P = G({ ...m, ...typeof d.img == "function" ? d.img(l) : d.img, src: p, srcSet: f }), y = p || f, b = y && P !== "error";
  l.colorDefault = !b, delete l.ownerState;
  const g = L(l), [R, w] = N("img", { className: g.img, elementType: H, externalForwardedProps: { slots: h, slotProps: { img: { ...m, ...d.img } } }, additionalProps: { alt: n, src: p, srcSet: f, sizes: A }, ownerState: l });
  return b ? c = u(R, { ...w }) : s || s === 0 ? c = s : y && n ? c = n[0] : c = u(E, { ownerState: l, className: g.fallback }), u(B, { as: t, className: z(g.root, i), ref: e, ..._, ownerState: l, children: c });
});
export {
  O as A
};
