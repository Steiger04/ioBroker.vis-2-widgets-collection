import { m as ue, f as Ce, h as ct, l as Xe, w as ut, j as Ke, x as at, i as E, o as dt } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__loadShare__shared-DgsbL9Pr.js";
import { O as pt, b9 as de, a9 as ft, aa as mt, Q as Ue, ah as Re, ar as Ye, b1 as qe, al as Me, f as bt, g as ht, h as oe, s as B, u as gt, n as vt, a0 as D, ba as ot, m as ne, j as O, i as kt, N as We, l as Ge, k as Qe, a as Je } from "./usePopoverPositioning-DyzF99R9.js";
const yt = { border: 0, clip: "rect(0 0 0 0)", height: "1px", margin: "-1px", overflow: "hidden", padding: 0, position: "absolute", whiteSpace: "nowrap", width: "1px" };
function St(e, t, o = (n, p) => n === p) {
  return e.length === t.length && e.every((n, p) => o(n, t[p]));
}
const xt = 2;
function ae(e, t, o, n, p) {
  return o === 1 ? Math.min(e + t, p) : Math.max(e - t, n);
}
function nt(e, t) {
  return e - t;
}
function Ze(e, t) {
  const { index: o } = e.reduce((n, p, x) => {
    const z = Math.abs(t - p);
    return n === null || z < n.distance || z === n.distance ? { distance: z, index: x } : n;
  }, null) ?? {};
  return o;
}
function Pe(e, t) {
  if (t.current !== void 0 && e.changedTouches) {
    const o = e;
    for (let n = 0; n < o.changedTouches.length; n += 1) {
      const p = o.changedTouches[n];
      if (p.identifier === t.current) return { x: p.clientX, y: p.clientY };
    }
    return false;
  }
  return { x: e.clientX, y: e.clientY };
}
function ze(e, t, o) {
  return (e - t) * 100 / (o - t);
}
function wt(e, t, o) {
  return (o - t) * e + t;
}
function Lt(e) {
  if (Math.abs(e) < 1) {
    const o = e.toExponential().split("e-"), n = o[0].split(".")[1];
    return (n ? n.length : 0) + parseInt(o[1], 10);
  }
  const t = e.toString().split(".")[1];
  return t ? t.length : 0;
}
function Ct(e, t, o) {
  const n = Math.round((e - o) / t) * t + o;
  return Number(n.toFixed(Lt(t)));
}
function et({ values: e, newValue: t, index: o }) {
  const n = e.slice();
  return n[o] = t, n.sort(nt);
}
function Te({ sliderRef: e, activeIndex: t, setActive: o }) {
  var _a, _b, _c;
  const n = Re(e.current);
  (!((_a = e.current) == null ? void 0 : _a.contains(n.activeElement)) || Number((_b = n == null ? void 0 : n.activeElement) == null ? void 0 : _b.getAttribute("data-index")) !== t) && ((_c = e.current) == null ? void 0 : _c.querySelector(`[type="range"][data-index="${t}"]`).focus()), o && o(t);
}
function Ae(e, t) {
  return typeof e == "number" && typeof t == "number" ? e === t : typeof e == "object" && typeof t == "object" ? St(e, t) : false;
}
const Pt = { horizontal: { offset: (e) => ({ left: `${e}%` }), leap: (e) => ({ width: `${e}%` }) }, "horizontal-reverse": { offset: (e) => ({ right: `${e}%` }), leap: (e) => ({ width: `${e}%` }) }, vertical: { offset: (e) => ({ bottom: `${e}%` }), leap: (e) => ({ height: `${e}%` }) } }, Tt = (e) => e;
let Ie;
function tt() {
  return Ie === void 0 && (typeof CSS < "u" && typeof CSS.supports == "function" ? Ie = CSS.supports("touch-action", "none") : Ie = true), Ie;
}
function At(e) {
  const { "aria-labelledby": t, defaultValue: o, disabled: n = false, disableSwap: p = false, isRtl: x = false, marks: z = false, max: f = 100, min: u = 0, name: w, onChange: I, onChangeCommitted: X, orientation: q = "horizontal", rootRef: Ne, scale: pe = Tt, step: R = 1, shiftStep: G = 10, tabIndex: fe, value: $e } = e, M = ue(void 0), [H, Q] = Ce(-1), [Be, J] = Ce(-1), [me, be] = Ce(false), Z = ue(0), se = ue(null), [P, L] = pt({ controlled: $e, default: o ?? u, name: "Slider" }), v = I && ((a, r, s) => {
    const c = a.nativeEvent || a, i = new c.constructor(c.type, c);
    Object.defineProperty(i, "target", { writable: true, value: { value: r, name: w } }), se.current = r, I(i, r, s);
  }), ee = Array.isArray(P);
  let b = ee ? P.slice().sort(nt) : [P];
  b = b.map((a) => a == null ? u : de(a, u, f));
  const le = z === true && R !== null ? [...Array(Math.floor((f - u) / R) + 1)].map((a, r) => ({ value: u + R * r })) : z || [], m = le.map((a) => a.value), [_, te] = Ce(-1), d = ue(null), F = ft(Ne, d), Ee = (a) => (r) => {
    var _a;
    const s = Number(r.currentTarget.getAttribute("data-index"));
    qe(r.target) && te(s), J(s), (_a = a == null ? void 0 : a.onFocus) == null ? void 0 : _a.call(a, r);
  }, He = (a) => (r) => {
    var _a;
    qe(r.target) || te(-1), J(-1), (_a = a == null ? void 0 : a.onBlur) == null ? void 0 : _a.call(a, r);
  }, he = (a, r) => {
    const s = Number(a.currentTarget.getAttribute("data-index")), c = b[s], i = m.indexOf(c);
    let l = r;
    if (le && R == null) {
      const C = m[m.length - 1];
      l >= C ? l = C : l <= m[0] ? l = m[0] : l = l < c ? m[i - 1] : m[i + 1];
    }
    if (l = de(l, u, f), ee) {
      p && (l = de(l, b[s - 1] || -1 / 0, b[s + 1] || 1 / 0));
      const C = l;
      l = et({ values: b, newValue: l, index: s });
      let T = s;
      p || (T = l.indexOf(C)), Te({ sliderRef: d, activeIndex: T });
    }
    L(l), te(s), v && !Ae(l, P) && v(a, l, s), X && X(a, se.current ?? l);
  }, Ve = (a) => (r) => {
    var _a;
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "PageUp", "PageDown", "Home", "End"].includes(r.key)) {
      r.preventDefault();
      const s = Number(r.currentTarget.getAttribute("data-index")), c = b[s];
      let i = null;
      if (R != null) {
        const l = r.shiftKey ? G : R;
        switch (r.key) {
          case "ArrowUp":
            i = ae(c, l, 1, u, f);
            break;
          case "ArrowRight":
            i = ae(c, l, x ? -1 : 1, u, f);
            break;
          case "ArrowDown":
            i = ae(c, l, -1, u, f);
            break;
          case "ArrowLeft":
            i = ae(c, l, x ? 1 : -1, u, f);
            break;
          case "PageUp":
            i = ae(c, G, 1, u, f);
            break;
          case "PageDown":
            i = ae(c, G, -1, u, f);
            break;
          case "Home":
            i = u;
            break;
          case "End":
            i = f;
            break;
        }
      } else if (le) {
        const l = m[m.length - 1], C = m.indexOf(c), T = [x ? "ArrowRight" : "ArrowLeft", "ArrowDown", "PageDown", "Home"], g = [x ? "ArrowLeft" : "ArrowRight", "ArrowUp", "PageUp", "End"];
        T.includes(r.key) ? C === 0 ? i = m[0] : i = m[C - 1] : g.includes(r.key) && (C === m.length - 1 ? i = l : i = m[C + 1]);
      }
      i != null && he(r, i);
    }
    (_a = a == null ? void 0 : a.onKeyDown) == null ? void 0 : _a.call(a, r);
  };
  mt(() => {
    var _a;
    n && d.current.contains(document.activeElement) && ((_a = document.activeElement) == null ? void 0 : _a.blur());
  }, [n]), n && H !== -1 && Q(-1), n && _ !== -1 && te(-1);
  const ge = (a) => (r) => {
    var _a;
    (_a = a.onChange) == null ? void 0 : _a.call(a, r), he(r, r.target.valueAsNumber);
  }, j = ue(void 0);
  let U = q;
  x && q === "horizontal" && (U += "-reverse");
  const Y = ({ finger: a, move: r = false }) => {
    const { current: s } = d, { width: c, height: i, bottom: l, left: C } = s.getBoundingClientRect();
    let T;
    U.startsWith("vertical") ? T = (l - a.y) / i : T = (a.x - C) / c, U.includes("-reverse") && (T = 1 - T);
    let g;
    if (g = wt(T, u, f), R) g = Ct(g, R, u);
    else {
      const ce = Ze(m, g);
      g = m[ce];
    }
    g = de(g, u, f);
    let $ = 0;
    if (ee) {
      r ? $ = j.current : $ = Ze(b, g), p && (g = de(g, b[$ - 1] || -1 / 0, b[$ + 1] || 1 / 0));
      const ce = g;
      g = et({ values: b, newValue: g, index: $ }), p && r || ($ = g.indexOf(ce), j.current = $);
    }
    return { newValue: g, activeIndex: $ };
  }, K = Ue((a) => {
    const r = Pe(a, M);
    if (!r) return;
    if (Z.current += 1, a.type === "mousemove" && a.buttons === 0) {
      N(a);
      return;
    }
    const { newValue: s, activeIndex: c } = Y({ finger: r, move: true });
    Te({ sliderRef: d, activeIndex: c, setActive: Q }), L(s), !me && Z.current > xt && be(true), v && !Ae(s, P) && v(a, s, c);
  }), N = Ue((a) => {
    const r = Pe(a, M);
    if (be(false), !r) return;
    const { newValue: s } = Y({ finger: r, move: true });
    Q(-1), a.type === "touchend" && J(-1), X && X(a, se.current ?? s), M.current = void 0, W();
  }), y = Ue((a) => {
    if (n) return;
    tt() || a.preventDefault();
    const r = a.changedTouches[0];
    r != null && (M.current = r.identifier);
    const s = Pe(a, M);
    if (s !== false) {
      const { newValue: i, activeIndex: l } = Y({ finger: s });
      Te({ sliderRef: d, activeIndex: l, setActive: Q }), L(i), v && !Ae(i, P) && v(a, i, l);
    }
    Z.current = 0;
    const c = Re(d.current);
    c.addEventListener("touchmove", K, { passive: true }), c.addEventListener("touchend", N, { passive: true });
  }), W = ct(() => {
    const a = Re(d.current);
    a.removeEventListener("mousemove", K), a.removeEventListener("mouseup", N), a.removeEventListener("touchmove", K), a.removeEventListener("touchend", N);
  }, [N, K]);
  Xe(() => {
    const { current: a } = d;
    return a.addEventListener("touchstart", y, { passive: tt() }), () => {
      a.removeEventListener("touchstart", y), W();
    };
  }, [W, y]), Xe(() => {
    n && W();
  }, [n, W]);
  const _e = (a) => (r) => {
    var _a;
    if ((_a = a.onMouseDown) == null ? void 0 : _a.call(a, r), n || r.defaultPrevented || r.button !== 0) return;
    r.preventDefault();
    const s = Pe(r, M);
    if (s !== false) {
      const { newValue: i, activeIndex: l } = Y({ finger: s });
      Te({ sliderRef: d, activeIndex: l, setActive: Q }), L(i), v && !Ae(i, P) && v(r, i, l);
    }
    Z.current = 0;
    const c = Re(d.current);
    c.addEventListener("mousemove", K, { passive: true }), c.addEventListener("mouseup", N);
  }, ve = ze(ee ? b[0] : u, u, f), S = ze(b[b.length - 1], u, f) - ve, ie = (a = {}) => {
    const r = Ye(a), s = { onMouseDown: _e(r || {}) }, c = { ...r, ...s };
    return { ...a, ref: F, ...c };
  }, ke = (a) => (r) => {
    var _a;
    (_a = a.onMouseOver) == null ? void 0 : _a.call(a, r);
    const s = Number(r.currentTarget.getAttribute("data-index"));
    J(s);
  }, ye = (a) => (r) => {
    var _a;
    (_a = a.onMouseLeave) == null ? void 0 : _a.call(a, r), J(-1);
  }, Se = (a = {}) => {
    const r = Ye(a), s = { onMouseOver: ke(r || {}), onMouseLeave: ye(r || {}) };
    return { ...a, ...r, ...s };
  }, xe = (a) => ({ pointerEvents: H !== -1 && H !== a ? "none" : void 0 });
  let re;
  return q === "vertical" && (re = x ? "vertical-rl" : "vertical-lr"), { active: H, axis: U, axisProps: Pt, dragging: me, focusedThumbIndex: _, getHiddenInputProps: (a = {}) => {
    const r = Ye(a), s = { onChange: ge(r || {}), onFocus: Ee(r || {}), onBlur: He(r || {}), onKeyDown: Ve(r || {}) }, c = { ...r, ...s };
    return { tabIndex: fe, "aria-labelledby": t, "aria-orientation": q, "aria-valuemax": pe(f), "aria-valuemin": pe(u), name: w, type: "range", min: e.min, max: e.max, step: e.step === null && e.marks ? "any" : e.step ?? void 0, disabled: n, ...a, ...c, style: { ...yt, direction: x ? "rtl" : "ltr", width: "100%", height: "100%", writingMode: re } };
  }, getRootProps: ie, getThumbProps: Se, marks: le, open: Be, range: ee, rootRef: F, trackLeap: S, trackOffset: ve, values: b, getThumbStyle: xe };
}
const It = (e) => !e || !Me(e);
function Rt(e) {
  return ht("MuiSlider", e);
}
const A = bt("MuiSlider", ["root", "active", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "disabled", "dragging", "focusVisible", "mark", "markActive", "marked", "markLabel", "markLabelActive", "rail", "sizeSmall", "thumb", "thumbColorPrimary", "thumbColorSecondary", "thumbColorError", "thumbColorSuccess", "thumbColorInfo", "thumbColorWarning", "track", "trackInverted", "trackFalse", "thumbSizeSmall", "valueLabel", "valueLabelOpen", "valueLabelCircle", "valueLabelLabel", "vertical"]), Mt = (e) => {
  const { open: t } = e;
  return { offset: oe(t && A.valueLabelOpen), circle: A.valueLabelCircle, label: A.valueLabelLabel };
};
function zt(e) {
  const { children: t, className: o, value: n } = e, p = Mt(e);
  return t ? ut(t, { className: oe(t.props.className) }, Ke(at, { children: [t.props.children, E("span", { className: oe(p.offset, o), "aria-hidden": true, children: E("span", { className: p.circle, children: E("span", { className: p.label, children: n }) }) })] })) : null;
}
function rt(e) {
  return e;
}
const Nt = B("span", { name: "MuiSlider", slot: "Root", overridesResolver: (e, t) => {
  const { ownerState: o } = e;
  return [t.root, t[`color${O(o.color)}`], o.size !== "medium" && t[`size${O(o.size)}`], o.marked && t.marked, o.orientation === "vertical" && t.vertical, o.track === "inverted" && t.trackInverted, o.track === false && t.trackFalse];
} })(ne(({ theme: e }) => ({ borderRadius: 12, boxSizing: "content-box", display: "inline-block", position: "relative", cursor: "pointer", touchAction: "none", WebkitTapHighlightColor: "transparent", "@media print": { colorAdjust: "exact" }, [`&.${A.disabled}`]: { pointerEvents: "none", cursor: "default", color: (e.vars || e).palette.grey[400] }, [`&.${A.dragging}`]: { [`& .${A.thumb}, & .${A.track}`]: { transition: "none" } }, variants: [...Object.entries(e.palette).filter(We()).map(([t]) => ({ props: { color: t }, style: { color: (e.vars || e).palette[t].main } })), { props: { orientation: "horizontal" }, style: { height: 4, width: "100%", padding: "13px 0", "@media (pointer: coarse)": { padding: "20px 0" } } }, { props: { orientation: "horizontal", size: "small" }, style: { height: 2 } }, { props: { orientation: "horizontal", marked: true }, style: { marginBottom: 20 } }, { props: { orientation: "vertical" }, style: { height: "100%", width: 4, padding: "0 13px", "@media (pointer: coarse)": { padding: "0 20px" } } }, { props: { orientation: "vertical", size: "small" }, style: { width: 2 } }, { props: { orientation: "vertical", marked: true }, style: { marginRight: 44 } }] }))), $t = B("span", { name: "MuiSlider", slot: "Rail", overridesResolver: (e, t) => t.rail })({ display: "block", position: "absolute", borderRadius: "inherit", backgroundColor: "currentColor", opacity: 0.38, variants: [{ props: { orientation: "horizontal" }, style: { width: "100%", height: "inherit", top: "50%", transform: "translateY(-50%)" } }, { props: { orientation: "vertical" }, style: { height: "100%", width: "inherit", left: "50%", transform: "translateX(-50%)" } }, { props: { track: "inverted" }, style: { opacity: 1 } }] }), Et = B("span", { name: "MuiSlider", slot: "Track", overridesResolver: (e, t) => t.track })(ne(({ theme: e }) => ({ display: "block", position: "absolute", borderRadius: "inherit", border: "1px solid currentColor", backgroundColor: "currentColor", transition: e.transitions.create(["left", "width", "bottom", "height"], { duration: e.transitions.duration.shortest }), variants: [{ props: { size: "small" }, style: { border: "none" } }, { props: { orientation: "horizontal" }, style: { height: "inherit", top: "50%", transform: "translateY(-50%)" } }, { props: { orientation: "vertical" }, style: { width: "inherit", left: "50%", transform: "translateX(-50%)" } }, { props: { track: false }, style: { display: "none" } }, ...Object.entries(e.palette).filter(We()).map(([t]) => ({ props: { color: t, track: "inverted" }, style: { ...e.vars ? { backgroundColor: e.vars.palette.Slider[`${t}Track`], borderColor: e.vars.palette.Slider[`${t}Track`] } : { backgroundColor: Ge(e.palette[t].main, 0.62), borderColor: Ge(e.palette[t].main, 0.62), ...e.applyStyles("dark", { backgroundColor: Qe(e.palette[t].main, 0.5) }), ...e.applyStyles("dark", { borderColor: Qe(e.palette[t].main, 0.5) }) } } }))] }))), Ht = B("span", { name: "MuiSlider", slot: "Thumb", overridesResolver: (e, t) => {
  const { ownerState: o } = e;
  return [t.thumb, t[`thumbColor${O(o.color)}`], o.size !== "medium" && t[`thumbSize${O(o.size)}`]];
} })(ne(({ theme: e }) => ({ position: "absolute", width: 20, height: 20, boxSizing: "border-box", borderRadius: "50%", outline: 0, backgroundColor: "currentColor", display: "flex", alignItems: "center", justifyContent: "center", transition: e.transitions.create(["box-shadow", "left", "bottom"], { duration: e.transitions.duration.shortest }), "&::before": { position: "absolute", content: '""', borderRadius: "inherit", width: "100%", height: "100%", boxShadow: (e.vars || e).shadows[2] }, "&::after": { position: "absolute", content: '""', borderRadius: "50%", width: 42, height: 42, top: "50%", left: "50%", transform: "translate(-50%, -50%)" }, [`&.${A.disabled}`]: { "&:hover": { boxShadow: "none" } }, variants: [{ props: { size: "small" }, style: { width: 12, height: 12, "&::before": { boxShadow: "none" } } }, { props: { orientation: "horizontal" }, style: { top: "50%", transform: "translate(-50%, -50%)" } }, { props: { orientation: "vertical" }, style: { left: "50%", transform: "translate(-50%, 50%)" } }, ...Object.entries(e.palette).filter(We()).map(([t]) => ({ props: { color: t }, style: { [`&:hover, &.${A.focusVisible}`]: { ...e.vars ? { boxShadow: `0px 0px 0px 8px rgba(${e.vars.palette[t].mainChannel} / 0.16)` } : { boxShadow: `0px 0px 0px 8px ${Je(e.palette[t].main, 0.16)}` }, "@media (hover: none)": { boxShadow: "none" } }, [`&.${A.active}`]: { ...e.vars ? { boxShadow: `0px 0px 0px 14px rgba(${e.vars.palette[t].mainChannel} / 0.16)` } : { boxShadow: `0px 0px 0px 14px ${Je(e.palette[t].main, 0.16)}` } } } }))] }))), Vt = B(zt, { name: "MuiSlider", slot: "ValueLabel", overridesResolver: (e, t) => t.valueLabel })(ne(({ theme: e }) => ({ zIndex: 1, whiteSpace: "nowrap", ...e.typography.body2, fontWeight: 500, transition: e.transitions.create(["transform"], { duration: e.transitions.duration.shortest }), position: "absolute", backgroundColor: (e.vars || e).palette.grey[600], borderRadius: 2, color: (e.vars || e).palette.common.white, display: "flex", alignItems: "center", justifyContent: "center", padding: "0.25rem 0.75rem", variants: [{ props: { orientation: "horizontal" }, style: { transform: "translateY(-100%) scale(0)", top: "-10px", transformOrigin: "bottom center", "&::before": { position: "absolute", content: '""', width: 8, height: 8, transform: "translate(-50%, 50%) rotate(45deg)", backgroundColor: "inherit", bottom: 0, left: "50%" }, [`&.${A.valueLabelOpen}`]: { transform: "translateY(-100%) scale(1)" } } }, { props: { orientation: "vertical" }, style: { transform: "translateY(-50%) scale(0)", right: "30px", top: "50%", transformOrigin: "right center", "&::before": { position: "absolute", content: '""', width: 8, height: 8, transform: "translate(-50%, -50%) rotate(45deg)", backgroundColor: "inherit", right: -8, top: "50%" }, [`&.${A.valueLabelOpen}`]: { transform: "translateY(-50%) scale(1)" } } }, { props: { size: "small" }, style: { fontSize: e.typography.pxToRem(12), padding: "0.25rem 0.5rem" } }, { props: { orientation: "vertical", size: "small" }, style: { right: "20px" } }] }))), _t = B("span", { name: "MuiSlider", slot: "Mark", shouldForwardProp: (e) => ot(e) && e !== "markActive", overridesResolver: (e, t) => {
  const { markActive: o } = e;
  return [t.mark, o && t.markActive];
} })(ne(({ theme: e }) => ({ position: "absolute", width: 2, height: 2, borderRadius: 1, backgroundColor: "currentColor", variants: [{ props: { orientation: "horizontal" }, style: { top: "50%", transform: "translate(-1px, -50%)" } }, { props: { orientation: "vertical" }, style: { left: "50%", transform: "translate(-50%, 1px)" } }, { props: { markActive: true }, style: { backgroundColor: (e.vars || e).palette.background.paper, opacity: 0.8 } }] }))), Dt = B("span", { name: "MuiSlider", slot: "MarkLabel", shouldForwardProp: (e) => ot(e) && e !== "markLabelActive", overridesResolver: (e, t) => t.markLabel })(ne(({ theme: e }) => ({ ...e.typography.body2, color: (e.vars || e).palette.text.secondary, position: "absolute", whiteSpace: "nowrap", variants: [{ props: { orientation: "horizontal" }, style: { top: 30, transform: "translateX(-50%)", "@media (pointer: coarse)": { top: 40 } } }, { props: { orientation: "vertical" }, style: { left: 36, transform: "translateY(50%)", "@media (pointer: coarse)": { left: 44 } } }, { props: { markLabelActive: true }, style: { color: (e.vars || e).palette.text.primary } }] }))), Ot = (e) => {
  const { disabled: t, dragging: o, marked: n, orientation: p, track: x, classes: z, color: f, size: u } = e, w = { root: ["root", t && "disabled", o && "dragging", n && "marked", p === "vertical" && "vertical", x === "inverted" && "trackInverted", x === false && "trackFalse", f && `color${O(f)}`, u && `size${O(u)}`], rail: ["rail"], track: ["track"], mark: ["mark"], markActive: ["markActive"], markLabel: ["markLabel"], markLabelActive: ["markLabelActive"], valueLabel: ["valueLabel"], thumb: ["thumb", t && "disabled", u && `thumbSize${O(u)}`, f && `thumbColor${O(f)}`], active: ["active"], disabled: ["disabled"], focusVisible: ["focusVisible"] };
  return kt(w, Rt, z);
}, Ft = ({ children: e }) => e, Yt = dt(function(t, o) {
  const n = gt({ props: t, name: "MuiSlider" }), p = vt(), { "aria-label": x, "aria-valuetext": z, "aria-labelledby": f, component: u = "span", components: w = {}, componentsProps: I = {}, color: X = "primary", classes: q, className: Ne, disableSwap: pe = false, disabled: R = false, getAriaLabel: G, getAriaValueText: fe, marks: $e = false, max: M = 100, min: H = 0, name: Q, onChange: Be, onChangeCommitted: J, orientation: me = "horizontal", shiftStep: be = 10, size: Z = "medium", step: se = 1, scale: P = rt, slotProps: L, slots: v, tabIndex: ee, track: b = "normal", value: le, valueLabelDisplay: m = "off", valueLabelFormat: _ = rt, ...te } = n, d = { ...n, isRtl: p, max: M, min: H, classes: q, disabled: R, disableSwap: pe, orientation: me, marks: $e, color: X, size: Z, step: se, shiftStep: be, scale: P, track: b, valueLabelDisplay: m, valueLabelFormat: _ }, { axisProps: F, getRootProps: Ee, getHiddenInputProps: He, getThumbProps: he, open: Ve, active: ge, axis: j, focusedThumbIndex: U, range: Y, dragging: K, marks: N, values: y, trackOffset: W, trackLeap: _e, getThumbStyle: ve } = At({ ...d, rootRef: o });
  d.marked = N.length > 0 && N.some((h) => h.label), d.dragging = K, d.focusedThumbIndex = U;
  const S = Ot(d), ie = (v == null ? void 0 : v.root) ?? w.Root ?? Nt, ke = (v == null ? void 0 : v.rail) ?? w.Rail ?? $t, ye = (v == null ? void 0 : v.track) ?? w.Track ?? Et, Se = (v == null ? void 0 : v.thumb) ?? w.Thumb ?? Ht, xe = (v == null ? void 0 : v.valueLabel) ?? w.ValueLabel ?? Vt, re = (v == null ? void 0 : v.mark) ?? w.Mark ?? _t, we = (v == null ? void 0 : v.markLabel) ?? w.MarkLabel ?? Dt, a = (v == null ? void 0 : v.input) ?? w.Input ?? "input", r = (L == null ? void 0 : L.root) ?? I.root, s = (L == null ? void 0 : L.rail) ?? I.rail, c = (L == null ? void 0 : L.track) ?? I.track, i = (L == null ? void 0 : L.thumb) ?? I.thumb, l = (L == null ? void 0 : L.valueLabel) ?? I.valueLabel, C = (L == null ? void 0 : L.mark) ?? I.mark, T = (L == null ? void 0 : L.markLabel) ?? I.markLabel, g = (L == null ? void 0 : L.input) ?? I.input, $ = D({ elementType: ie, getSlotProps: Ee, externalSlotProps: r, externalForwardedProps: te, additionalProps: { ...It(ie) && { as: u } }, ownerState: { ...d, ...r == null ? void 0 : r.ownerState }, className: [S.root, Ne] }), ce = D({ elementType: ke, externalSlotProps: s, ownerState: d, className: S.rail }), st = D({ elementType: ye, externalSlotProps: c, additionalProps: { style: { ...F[j].offset(W), ...F[j].leap(_e) } }, ownerState: { ...d, ...c == null ? void 0 : c.ownerState }, className: S.track }), De = D({ elementType: Se, getSlotProps: he, externalSlotProps: i, ownerState: { ...d, ...i == null ? void 0 : i.ownerState }, className: S.thumb }), lt = D({ elementType: xe, externalSlotProps: l, ownerState: { ...d, ...l == null ? void 0 : l.ownerState }, className: S.valueLabel }), Oe = D({ elementType: re, externalSlotProps: C, ownerState: d, className: S.mark }), Fe = D({ elementType: we, externalSlotProps: T, ownerState: d, className: S.markLabel }), it = D({ elementType: a, getSlotProps: He, externalSlotProps: g, ownerState: d });
  return Ke(ie, { ...$, children: [E(ke, { ...ce }), E(ye, { ...st }), N.filter((h) => h.value >= H && h.value <= M).map((h, k) => {
    const je = ze(h.value, H, M), Le = F[j].offset(je);
    let V;
    return b === false ? V = y.includes(h.value) : V = b === "normal" && (Y ? h.value >= y[0] && h.value <= y[y.length - 1] : h.value <= y[0]) || b === "inverted" && (Y ? h.value <= y[0] || h.value >= y[y.length - 1] : h.value >= y[0]), Ke(at, { children: [E(re, { "data-index": k, ...Oe, ...!Me(re) && { markActive: V }, style: { ...Le, ...Oe.style }, className: oe(Oe.className, V && S.markActive) }), h.label != null ? E(we, { "aria-hidden": true, "data-index": k, ...Fe, ...!Me(we) && { markLabelActive: V }, style: { ...Le, ...Fe.style }, className: oe(S.markLabel, Fe.className, V && S.markLabelActive), children: h.label }) : null] }, k);
  }), y.map((h, k) => {
    const je = ze(h, H, M), Le = F[j].offset(je), V = m === "off" ? Ft : xe;
    return E(V, { ...!Me(V) && { valueLabelFormat: _, valueLabelDisplay: m, value: typeof _ == "function" ? _(P(h), k) : _, index: k, open: Ve === k || ge === k || m === "on", disabled: R }, ...lt, children: E(Se, { "data-index": k, ...De, className: oe(S.thumb, De.className, ge === k && S.active, U === k && S.focusVisible), style: { ...Le, ...ve(k), ...De.style }, children: E(a, { "data-index": k, "aria-label": G ? G(k) : x, "aria-valuenow": P(h), "aria-labelledby": f, "aria-valuetext": fe ? fe(P(h), k) : z, value: y[k], ...it }) }) }, k);
  })] });
});
export {
  Yt as S,
  Dt as a,
  yt as v
};
