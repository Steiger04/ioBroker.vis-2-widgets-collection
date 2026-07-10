import { z as Us, f as jr, g as $e, a as Ae, A as gn, j as c, C as qs, h as _n, D as Ys, e as Ce, E as Wr, u as Se, s as oe, c as ge, B as Rr, d as fe, w as V, m as je, i as Fe, x as En, P as mt, F as as, H as wn, T as P, r as Js, J as Ks, q as Xs, K as Qs, L as Zs, N as fn, O as co, Q as ei, R as lr, b as Me, U as cs, W as ti, X as Mr, Y as ni, Z as uo, p as ri, _ as oi, I as we, $ as si, S as ot, n as H, a0 as ve, G as b, a1 as ft, a2 as pt, a3 as ii, a4 as li, a5 as ai, __tla as __tla_0 } from "./usePopoverPositioning-BZLitN7O.js";
import { D as $r, b as Ot, q as ci, h as xt, C as Je, a as ui, u as di, l as kn, c as fi, d as pi, f as gi, e as fo, w as hi, __tla as __tla_1 } from "./useData-DNdZxCG9.js";
import { v as y, a as mi, __tla as __tla_2 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { C as Cn, __tla as __tla_3 } from "./Checkbox-BJqi7jgd.js";
import { D as Gr, a as Ur, b as qr, __tla as __tla_4 } from "./DialogTitle-DI-6SO5A.js";
import { D as Yr, C as Ar, A as On, a as Nn, E as Ln, b as Hn, c as Kn, d as yi, __tla as __tla_5 } from "./ColorPickerField-BrGAYMqT.js";
import { B as st, __tla as __tla_6 } from "./Button-CI-1uWz9.js";
import { S as bi, __tla as __tla_7 } from "./Slider-ChiXGyym.js";
import { F as Nt, __tla as __tla_8 } from "./FormControlLabel-VfbZJ0NJ.js";
import { S as hn, __tla as __tla_9 } from "./Switch-CAvvd4Cx.js";
import { g as vi, M as ne, __tla as __tla_10 } from "./MenuItem-DHIkT0HX.js";
import { g as xi, S as De, __tla as __tla_11 } from "./Stack-DkmwyHUs.js";
import { T as us, a as er, __tla as __tla_12 } from "./ToggleButtonGroup--6oQuj-k.js";
import { C as tr, __tla as __tla_13 } from "./Close-DFTQxPaF.js";
import { u as _i, __tla as __tla_14 } from "./useOidValue-BkGta6b4.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
import { __tla as __tla_15 } from "./SwitchBase-QNQDlZV8.js";
import { __tla as __tla_16 } from "./listItemTextClasses-NWuPmlTm.js";
let Vr;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_1;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_2;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_3;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_4;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_5;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_6;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_7;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_8;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_9;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_10;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_11;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_12;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_13;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_14;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_15;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_16;
    } catch {
    }
  })()
]).then(async () => {
  function wi(e, t, n, r, o) {
    const [s, i] = y.useState(() => o && n ? n(e).matches : r ? r(e).matches : t);
    return jr(() => {
      if (!n) return;
      const l = n(e), a = () => {
        i(l.matches);
      };
      return a(), l.addEventListener("change", a), () => {
        l.removeEventListener("change", a);
      };
    }, [
      e,
      n
    ]), s;
  }
  const Ci = {
    ...mi
  }, ds = Ci.useSyncExternalStore;
  function Si(e, t, n, r, o) {
    const s = y.useCallback(() => t, [
      t
    ]), i = y.useMemo(() => {
      if (o && n) return () => n(e).matches;
      if (r !== null) {
        const { matches: u } = r(e);
        return () => u;
      }
      return s;
    }, [
      s,
      e,
      r,
      o,
      n
    ]), [l, a] = y.useMemo(() => {
      if (n === null) return [
        s,
        () => () => {
        }
      ];
      const u = n(e);
      return [
        () => u.matches,
        (p) => (u.addEventListener("change", p), () => {
          u.removeEventListener("change", p);
        })
      ];
    }, [
      s,
      n,
      e
    ]);
    return ds(a, l, i);
  }
  function fs(e = {}) {
    const { themeId: t } = e;
    return function(r, o = {}) {
      let s = Us();
      s && t && (s = s[t] || s);
      const i = typeof window < "u" && typeof window.matchMedia < "u", { defaultMatches: l = false, matchMedia: a = i ? window.matchMedia : null, ssrMatchMedia: d = null, noSsr: u = false } = xi({
        name: "MuiUseMediaQuery",
        props: o,
        theme: s
      });
      let p = typeof r == "function" ? r(s) : r;
      return p = p.replace(/^@media( ?)/m, ""), p.includes("print") && console.warn([
        "MUI: You have provided a `print` query to the `useMediaQuery` hook.",
        "Using the print media query to modify print styles can lead to unexpected results.",
        "Consider using the `displayPrint` field in the `sx` prop instead.",
        "More information about `displayPrint` on our docs: https://mui.com/system/display/#display-in-print."
      ].join(`
`)), (ds !== void 0 ? Si : wi)(p, l, a, d, u);
    };
  }
  fs();
  var Oe = "top", Qe = "bottom", Ze = "right", Ne = "left", Jr = "auto", Mn = [
    Oe,
    Qe,
    Ze,
    Ne
  ], Kt = "start", Sn = "end", ji = "clippingParents", ps = "viewport", tn = "popper", Ri = "reference", po = Mn.reduce(function(e, t) {
    return e.concat([
      t + "-" + Kt,
      t + "-" + Sn
    ]);
  }, []), gs = [].concat(Mn, [
    Jr
  ]).reduce(function(e, t) {
    return e.concat([
      t,
      t + "-" + Kt,
      t + "-" + Sn
    ]);
  }, []), Mi = "beforeRead", $i = "read", Ai = "afterRead", Ii = "beforeMain", Pi = "main", Fi = "afterMain", Ti = "beforeWrite", Di = "write", zi = "afterWrite", Ei = [
    Mi,
    $i,
    Ai,
    Ii,
    Pi,
    Fi,
    Ti,
    Di,
    zi
  ];
  function lt(e) {
    return e ? (e.nodeName || "").toLowerCase() : null;
  }
  function We(e) {
    if (e == null) return window;
    if (e.toString() !== "[object Window]") {
      var t = e.ownerDocument;
      return t && t.defaultView || window;
    }
    return e;
  }
  function Ht(e) {
    var t = We(e).Element;
    return e instanceof t || e instanceof Element;
  }
  function Xe(e) {
    var t = We(e).HTMLElement;
    return e instanceof t || e instanceof HTMLElement;
  }
  function Kr(e) {
    if (typeof ShadowRoot > "u") return false;
    var t = We(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot;
  }
  function ki(e) {
    var t = e.state;
    Object.keys(t.elements).forEach(function(n) {
      var r = t.styles[n] || {}, o = t.attributes[n] || {}, s = t.elements[n];
      !Xe(s) || !lt(s) || (Object.assign(s.style, r), Object.keys(o).forEach(function(i) {
        var l = o[i];
        l === false ? s.removeAttribute(i) : s.setAttribute(i, l === true ? "" : l);
      }));
    });
  }
  function Oi(e) {
    var t = e.state, n = {
      popper: {
        position: t.options.strategy,
        left: "0",
        top: "0",
        margin: "0"
      },
      arrow: {
        position: "absolute"
      },
      reference: {}
    };
    return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
      Object.keys(t.elements).forEach(function(r) {
        var o = t.elements[r], s = t.attributes[r] || {}, i = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), l = i.reduce(function(a, d) {
          return a[d] = "", a;
        }, {});
        !Xe(o) || !lt(o) || (Object.assign(o.style, l), Object.keys(s).forEach(function(a) {
          o.removeAttribute(a);
        }));
      });
    };
  }
  const Ni = {
    name: "applyStyles",
    enabled: true,
    phase: "write",
    fn: ki,
    effect: Oi,
    requires: [
      "computeStyles"
    ]
  };
  function it(e) {
    return e.split("-")[0];
  }
  var Lt = Math.max, nr = Math.min, Xt = Math.round;
  function Ir() {
    var e = navigator.userAgentData;
    return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
      return t.brand + "/" + t.version;
    }).join(" ") : navigator.userAgent;
  }
  function hs() {
    return !/^((?!chrome|android).)*safari/i.test(Ir());
  }
  function Qt(e, t, n) {
    t === void 0 && (t = false), n === void 0 && (n = false);
    var r = e.getBoundingClientRect(), o = 1, s = 1;
    t && Xe(e) && (o = e.offsetWidth > 0 && Xt(r.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && Xt(r.height) / e.offsetHeight || 1);
    var i = Ht(e) ? We(e) : window, l = i.visualViewport, a = !hs() && n, d = (r.left + (a && l ? l.offsetLeft : 0)) / o, u = (r.top + (a && l ? l.offsetTop : 0)) / s, p = r.width / o, g = r.height / s;
    return {
      width: p,
      height: g,
      top: u,
      right: d + p,
      bottom: u + g,
      left: d,
      x: d,
      y: u
    };
  }
  function Xr(e) {
    var t = Qt(e), n = e.offsetWidth, r = e.offsetHeight;
    return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
      x: e.offsetLeft,
      y: e.offsetTop,
      width: n,
      height: r
    };
  }
  function ms(e, t) {
    var n = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return true;
    if (n && Kr(n)) {
      var r = t;
      do {
        if (r && e.isSameNode(r)) return true;
        r = r.parentNode || r.host;
      } while (r);
    }
    return false;
  }
  function yt(e) {
    return We(e).getComputedStyle(e);
  }
  function Li(e) {
    return [
      "table",
      "td",
      "th"
    ].indexOf(lt(e)) >= 0;
  }
  function jt(e) {
    return ((Ht(e) ? e.ownerDocument : e.document) || window.document).documentElement;
  }
  function ar(e) {
    return lt(e) === "html" ? e : e.assignedSlot || e.parentNode || (Kr(e) ? e.host : null) || jt(e);
  }
  function go(e) {
    return !Xe(e) || yt(e).position === "fixed" ? null : e.offsetParent;
  }
  function Hi(e) {
    var t = /firefox/i.test(Ir()), n = /Trident/i.test(Ir());
    if (n && Xe(e)) {
      var r = yt(e);
      if (r.position === "fixed") return null;
    }
    var o = ar(e);
    for (Kr(o) && (o = o.host); Xe(o) && [
      "html",
      "body"
    ].indexOf(lt(o)) < 0; ) {
      var s = yt(o);
      if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || [
        "transform",
        "perspective"
      ].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none") return o;
      o = o.parentNode;
    }
    return null;
  }
  function $n(e) {
    for (var t = We(e), n = go(e); n && Li(n) && yt(n).position === "static"; ) n = go(n);
    return n && (lt(n) === "html" || lt(n) === "body" && yt(n).position === "static") ? t : n || Hi(e) || t;
  }
  function Qr(e) {
    return [
      "top",
      "bottom"
    ].indexOf(e) >= 0 ? "x" : "y";
  }
  function mn(e, t, n) {
    return Lt(e, nr(t, n));
  }
  function Bi(e, t, n) {
    var r = mn(e, t, n);
    return r > n ? n : r;
  }
  function ys() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }
  function bs(e) {
    return Object.assign({}, ys(), e);
  }
  function vs(e, t) {
    return t.reduce(function(n, r) {
      return n[r] = e, n;
    }, {});
  }
  var Vi = function(t, n) {
    return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
      placement: n.placement
    })) : t, bs(typeof t != "number" ? t : vs(t, Mn));
  };
  function Wi(e) {
    var t, n = e.state, r = e.name, o = e.options, s = n.elements.arrow, i = n.modifiersData.popperOffsets, l = it(n.placement), a = Qr(l), d = [
      Ne,
      Ze
    ].indexOf(l) >= 0, u = d ? "height" : "width";
    if (!(!s || !i)) {
      var p = Vi(o.padding, n), g = Xr(s), f = a === "y" ? Oe : Ne, h = a === "y" ? Qe : Ze, m = n.rects.reference[u] + n.rects.reference[a] - i[a] - n.rects.popper[u], v = i[a] - n.rects.reference[a], x = $n(s), _ = x ? a === "y" ? x.clientHeight || 0 : x.clientWidth || 0 : 0, S = m / 2 - v / 2, j = p[f], M = _ - g[u] - p[h], w = _ / 2 - g[u] / 2 + S, $ = mn(j, w, M), R = a;
      n.modifiersData[r] = (t = {}, t[R] = $, t.centerOffset = $ - w, t);
    }
  }
  function Gi(e) {
    var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
    o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || ms(t.elements.popper, o) && (t.elements.arrow = o));
  }
  const Ui = {
    name: "arrow",
    enabled: true,
    phase: "main",
    fn: Wi,
    effect: Gi,
    requires: [
      "popperOffsets"
    ],
    requiresIfExists: [
      "preventOverflow"
    ]
  };
  function Zt(e) {
    return e.split("-")[1];
  }
  var qi = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };
  function Yi(e, t) {
    var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
    return {
      x: Xt(n * o) / o || 0,
      y: Xt(r * o) / o || 0
    };
  }
  function ho(e) {
    var t, n = e.popper, r = e.popperRect, o = e.placement, s = e.variation, i = e.offsets, l = e.position, a = e.gpuAcceleration, d = e.adaptive, u = e.roundOffsets, p = e.isFixed, g = i.x, f = g === void 0 ? 0 : g, h = i.y, m = h === void 0 ? 0 : h, v = typeof u == "function" ? u({
      x: f,
      y: m
    }) : {
      x: f,
      y: m
    };
    f = v.x, m = v.y;
    var x = i.hasOwnProperty("x"), _ = i.hasOwnProperty("y"), S = Ne, j = Oe, M = window;
    if (d) {
      var w = $n(n), $ = "clientHeight", R = "clientWidth";
      if (w === We(n) && (w = jt(n), yt(w).position !== "static" && l === "absolute" && ($ = "scrollHeight", R = "scrollWidth")), w = w, o === Oe || (o === Ne || o === Ze) && s === Sn) {
        j = Qe;
        var T = p && w === M && M.visualViewport ? M.visualViewport.height : w[$];
        m -= T - r.height, m *= a ? 1 : -1;
      }
      if (o === Ne || (o === Oe || o === Qe) && s === Sn) {
        S = Ze;
        var F = p && w === M && M.visualViewport ? M.visualViewport.width : w[R];
        f -= F - r.width, f *= a ? 1 : -1;
      }
    }
    var z = Object.assign({
      position: l
    }, d && qi), q = u === true ? Yi({
      x: f,
      y: m
    }, We(n)) : {
      x: f,
      y: m
    };
    if (f = q.x, m = q.y, a) {
      var B;
      return Object.assign({}, z, (B = {}, B[j] = _ ? "0" : "", B[S] = x ? "0" : "", B.transform = (M.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + m + "px)" : "translate3d(" + f + "px, " + m + "px, 0)", B));
    }
    return Object.assign({}, z, (t = {}, t[j] = _ ? m + "px" : "", t[S] = x ? f + "px" : "", t.transform = "", t));
  }
  function Ji(e) {
    var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? true : r, s = n.adaptive, i = s === void 0 ? true : s, l = n.roundOffsets, a = l === void 0 ? true : l, d = {
      placement: it(t.placement),
      variation: Zt(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: o,
      isFixed: t.options.strategy === "fixed"
    };
    t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, ho(Object.assign({}, d, {
      offsets: t.modifiersData.popperOffsets,
      position: t.options.strategy,
      adaptive: i,
      roundOffsets: a
    })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, ho(Object.assign({}, d, {
      offsets: t.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets: a
    })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement
    });
  }
  const Ki = {
    name: "computeStyles",
    enabled: true,
    phase: "beforeWrite",
    fn: Ji,
    data: {}
  };
  var Bn = {
    passive: true
  };
  function Xi(e) {
    var t = e.state, n = e.instance, r = e.options, o = r.scroll, s = o === void 0 ? true : o, i = r.resize, l = i === void 0 ? true : i, a = We(t.elements.popper), d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
    return s && d.forEach(function(u) {
      u.addEventListener("scroll", n.update, Bn);
    }), l && a.addEventListener("resize", n.update, Bn), function() {
      s && d.forEach(function(u) {
        u.removeEventListener("scroll", n.update, Bn);
      }), l && a.removeEventListener("resize", n.update, Bn);
    };
  }
  const Qi = {
    name: "eventListeners",
    enabled: true,
    phase: "write",
    fn: function() {
    },
    effect: Xi,
    data: {}
  };
  var Zi = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  function Xn(e) {
    return e.replace(/left|right|bottom|top/g, function(t) {
      return Zi[t];
    });
  }
  var el = {
    start: "end",
    end: "start"
  };
  function mo(e) {
    return e.replace(/start|end/g, function(t) {
      return el[t];
    });
  }
  function Zr(e) {
    var t = We(e), n = t.pageXOffset, r = t.pageYOffset;
    return {
      scrollLeft: n,
      scrollTop: r
    };
  }
  function eo(e) {
    return Qt(jt(e)).left + Zr(e).scrollLeft;
  }
  function tl(e, t) {
    var n = We(e), r = jt(e), o = n.visualViewport, s = r.clientWidth, i = r.clientHeight, l = 0, a = 0;
    if (o) {
      s = o.width, i = o.height;
      var d = hs();
      (d || !d && t === "fixed") && (l = o.offsetLeft, a = o.offsetTop);
    }
    return {
      width: s,
      height: i,
      x: l + eo(e),
      y: a
    };
  }
  function nl(e) {
    var t, n = jt(e), r = Zr(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, s = Lt(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), i = Lt(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), l = -r.scrollLeft + eo(e), a = -r.scrollTop;
    return yt(o || n).direction === "rtl" && (l += Lt(n.clientWidth, o ? o.clientWidth : 0) - s), {
      width: s,
      height: i,
      x: l,
      y: a
    };
  }
  function to(e) {
    var t = yt(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + o + r);
  }
  function xs(e) {
    return [
      "html",
      "body",
      "#document"
    ].indexOf(lt(e)) >= 0 ? e.ownerDocument.body : Xe(e) && to(e) ? e : xs(ar(e));
  }
  function yn(e, t) {
    var n;
    t === void 0 && (t = []);
    var r = xs(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), s = We(r), i = o ? [
      s
    ].concat(s.visualViewport || [], to(r) ? r : []) : r, l = t.concat(i);
    return o ? l : l.concat(yn(ar(i)));
  }
  function Pr(e) {
    return Object.assign({}, e, {
      left: e.x,
      top: e.y,
      right: e.x + e.width,
      bottom: e.y + e.height
    });
  }
  function rl(e, t) {
    var n = Qt(e, false, t === "fixed");
    return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
  }
  function yo(e, t, n) {
    return t === ps ? Pr(tl(e, n)) : Ht(t) ? rl(t, n) : Pr(nl(jt(e)));
  }
  function ol(e) {
    var t = yn(ar(e)), n = [
      "absolute",
      "fixed"
    ].indexOf(yt(e).position) >= 0, r = n && Xe(e) ? $n(e) : e;
    return Ht(r) ? t.filter(function(o) {
      return Ht(o) && ms(o, r) && lt(o) !== "body";
    }) : [];
  }
  function sl(e, t, n, r) {
    var o = t === "clippingParents" ? ol(e) : [].concat(t), s = [].concat(o, [
      n
    ]), i = s[0], l = s.reduce(function(a, d) {
      var u = yo(e, d, r);
      return a.top = Lt(u.top, a.top), a.right = nr(u.right, a.right), a.bottom = nr(u.bottom, a.bottom), a.left = Lt(u.left, a.left), a;
    }, yo(e, i, r));
    return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
  }
  function _s(e) {
    var t = e.reference, n = e.element, r = e.placement, o = r ? it(r) : null, s = r ? Zt(r) : null, i = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, a;
    switch (o) {
      case Oe:
        a = {
          x: i,
          y: t.y - n.height
        };
        break;
      case Qe:
        a = {
          x: i,
          y: t.y + t.height
        };
        break;
      case Ze:
        a = {
          x: t.x + t.width,
          y: l
        };
        break;
      case Ne:
        a = {
          x: t.x - n.width,
          y: l
        };
        break;
      default:
        a = {
          x: t.x,
          y: t.y
        };
    }
    var d = o ? Qr(o) : null;
    if (d != null) {
      var u = d === "y" ? "height" : "width";
      switch (s) {
        case Kt:
          a[d] = a[d] - (t[u] / 2 - n[u] / 2);
          break;
        case Sn:
          a[d] = a[d] + (t[u] / 2 - n[u] / 2);
          break;
      }
    }
    return a;
  }
  function jn(e, t) {
    t === void 0 && (t = {});
    var n = t, r = n.placement, o = r === void 0 ? e.placement : r, s = n.strategy, i = s === void 0 ? e.strategy : s, l = n.boundary, a = l === void 0 ? ji : l, d = n.rootBoundary, u = d === void 0 ? ps : d, p = n.elementContext, g = p === void 0 ? tn : p, f = n.altBoundary, h = f === void 0 ? false : f, m = n.padding, v = m === void 0 ? 0 : m, x = bs(typeof v != "number" ? v : vs(v, Mn)), _ = g === tn ? Ri : tn, S = e.rects.popper, j = e.elements[h ? _ : g], M = sl(Ht(j) ? j : j.contextElement || jt(e.elements.popper), a, u, i), w = Qt(e.elements.reference), $ = _s({
      reference: w,
      element: S,
      placement: o
    }), R = Pr(Object.assign({}, S, $)), T = g === tn ? R : w, F = {
      top: M.top - T.top + x.top,
      bottom: T.bottom - M.bottom + x.bottom,
      left: M.left - T.left + x.left,
      right: T.right - M.right + x.right
    }, z = e.modifiersData.offset;
    if (g === tn && z) {
      var q = z[o];
      Object.keys(F).forEach(function(B) {
        var Y = [
          Ze,
          Qe
        ].indexOf(B) >= 0 ? 1 : -1, Z = [
          Oe,
          Qe
        ].indexOf(B) >= 0 ? "y" : "x";
        F[B] += q[Z] * Y;
      });
    }
    return F;
  }
  function il(e, t) {
    t === void 0 && (t = {});
    var n = t, r = n.placement, o = n.boundary, s = n.rootBoundary, i = n.padding, l = n.flipVariations, a = n.allowedAutoPlacements, d = a === void 0 ? gs : a, u = Zt(r), p = u ? l ? po : po.filter(function(h) {
      return Zt(h) === u;
    }) : Mn, g = p.filter(function(h) {
      return d.indexOf(h) >= 0;
    });
    g.length === 0 && (g = p);
    var f = g.reduce(function(h, m) {
      return h[m] = jn(e, {
        placement: m,
        boundary: o,
        rootBoundary: s,
        padding: i
      })[it(m)], h;
    }, {});
    return Object.keys(f).sort(function(h, m) {
      return f[h] - f[m];
    });
  }
  function ll(e) {
    if (it(e) === Jr) return [];
    var t = Xn(e);
    return [
      mo(e),
      t,
      mo(t)
    ];
  }
  function al(e) {
    var t = e.state, n = e.options, r = e.name;
    if (!t.modifiersData[r]._skip) {
      for (var o = n.mainAxis, s = o === void 0 ? true : o, i = n.altAxis, l = i === void 0 ? true : i, a = n.fallbackPlacements, d = n.padding, u = n.boundary, p = n.rootBoundary, g = n.altBoundary, f = n.flipVariations, h = f === void 0 ? true : f, m = n.allowedAutoPlacements, v = t.options.placement, x = it(v), _ = x === v, S = a || (_ || !h ? [
        Xn(v)
      ] : ll(v)), j = [
        v
      ].concat(S).reduce(function(ye, he) {
        return ye.concat(it(he) === Jr ? il(t, {
          placement: he,
          boundary: u,
          rootBoundary: p,
          padding: d,
          flipVariations: h,
          allowedAutoPlacements: m
        }) : he);
      }, []), M = t.rects.reference, w = t.rects.popper, $ = /* @__PURE__ */ new Map(), R = true, T = j[0], F = 0; F < j.length; F++) {
        var z = j[F], q = it(z), B = Zt(z) === Kt, Y = [
          Oe,
          Qe
        ].indexOf(q) >= 0, Z = Y ? "width" : "height", W = jn(t, {
          placement: z,
          boundary: u,
          rootBoundary: p,
          altBoundary: g,
          padding: d
        }), N = Y ? B ? Ze : Ne : B ? Qe : Oe;
        M[Z] > w[Z] && (N = Xn(N));
        var C = Xn(N), I = [];
        if (s && I.push(W[q] <= 0), l && I.push(W[N] <= 0, W[C] <= 0), I.every(function(ye) {
          return ye;
        })) {
          T = z, R = false;
          break;
        }
        $.set(z, I);
      }
      if (R) for (var E = h ? 3 : 1, L = function(he) {
        var le = j.find(function(Re) {
          var ae = $.get(Re);
          if (ae) return ae.slice(0, he).every(function(X) {
            return X;
          });
        });
        if (le) return T = le, "break";
      }, re = E; re > 0; re--) {
        var J = L(re);
        if (J === "break") break;
      }
      t.placement !== T && (t.modifiersData[r]._skip = true, t.placement = T, t.reset = true);
    }
  }
  const cl = {
    name: "flip",
    enabled: true,
    phase: "main",
    fn: al,
    requiresIfExists: [
      "offset"
    ],
    data: {
      _skip: false
    }
  };
  function bo(e, t, n) {
    return n === void 0 && (n = {
      x: 0,
      y: 0
    }), {
      top: e.top - t.height - n.y,
      right: e.right - t.width + n.x,
      bottom: e.bottom - t.height + n.y,
      left: e.left - t.width - n.x
    };
  }
  function vo(e) {
    return [
      Oe,
      Ze,
      Qe,
      Ne
    ].some(function(t) {
      return e[t] >= 0;
    });
  }
  function ul(e) {
    var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, s = t.modifiersData.preventOverflow, i = jn(t, {
      elementContext: "reference"
    }), l = jn(t, {
      altBoundary: true
    }), a = bo(i, r), d = bo(l, o, s), u = vo(a), p = vo(d);
    t.modifiersData[n] = {
      referenceClippingOffsets: a,
      popperEscapeOffsets: d,
      isReferenceHidden: u,
      hasPopperEscaped: p
    }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-reference-hidden": u,
      "data-popper-escaped": p
    });
  }
  const dl = {
    name: "hide",
    enabled: true,
    phase: "main",
    requiresIfExists: [
      "preventOverflow"
    ],
    fn: ul
  };
  function fl(e, t, n) {
    var r = it(e), o = [
      Ne,
      Oe
    ].indexOf(r) >= 0 ? -1 : 1, s = typeof n == "function" ? n(Object.assign({}, t, {
      placement: e
    })) : n, i = s[0], l = s[1];
    return i = i || 0, l = (l || 0) * o, [
      Ne,
      Ze
    ].indexOf(r) >= 0 ? {
      x: l,
      y: i
    } : {
      x: i,
      y: l
    };
  }
  function pl(e) {
    var t = e.state, n = e.options, r = e.name, o = n.offset, s = o === void 0 ? [
      0,
      0
    ] : o, i = gs.reduce(function(u, p) {
      return u[p] = fl(p, t.rects, s), u;
    }, {}), l = i[t.placement], a = l.x, d = l.y;
    t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += a, t.modifiersData.popperOffsets.y += d), t.modifiersData[r] = i;
  }
  const gl = {
    name: "offset",
    enabled: true,
    phase: "main",
    requires: [
      "popperOffsets"
    ],
    fn: pl
  };
  function hl(e) {
    var t = e.state, n = e.name;
    t.modifiersData[n] = _s({
      reference: t.rects.reference,
      element: t.rects.popper,
      placement: t.placement
    });
  }
  const ml = {
    name: "popperOffsets",
    enabled: true,
    phase: "read",
    fn: hl,
    data: {}
  };
  function yl(e) {
    return e === "x" ? "y" : "x";
  }
  function bl(e) {
    var t = e.state, n = e.options, r = e.name, o = n.mainAxis, s = o === void 0 ? true : o, i = n.altAxis, l = i === void 0 ? false : i, a = n.boundary, d = n.rootBoundary, u = n.altBoundary, p = n.padding, g = n.tether, f = g === void 0 ? true : g, h = n.tetherOffset, m = h === void 0 ? 0 : h, v = jn(t, {
      boundary: a,
      rootBoundary: d,
      padding: p,
      altBoundary: u
    }), x = it(t.placement), _ = Zt(t.placement), S = !_, j = Qr(x), M = yl(j), w = t.modifiersData.popperOffsets, $ = t.rects.reference, R = t.rects.popper, T = typeof m == "function" ? m(Object.assign({}, t.rects, {
      placement: t.placement
    })) : m, F = typeof T == "number" ? {
      mainAxis: T,
      altAxis: T
    } : Object.assign({
      mainAxis: 0,
      altAxis: 0
    }, T), z = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, q = {
      x: 0,
      y: 0
    };
    if (w) {
      if (s) {
        var B, Y = j === "y" ? Oe : Ne, Z = j === "y" ? Qe : Ze, W = j === "y" ? "height" : "width", N = w[j], C = N + v[Y], I = N - v[Z], E = f ? -R[W] / 2 : 0, L = _ === Kt ? $[W] : R[W], re = _ === Kt ? -R[W] : -$[W], J = t.elements.arrow, ye = f && J ? Xr(J) : {
          width: 0,
          height: 0
        }, he = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : ys(), le = he[Y], Re = he[Z], ae = mn(0, $[W], ye[W]), X = S ? $[W] / 2 - E - ae - le - F.mainAxis : L - ae - le - F.mainAxis, at = S ? -$[W] / 2 + E + ae + Re + F.mainAxis : re + ae + Re + F.mainAxis, Le = t.elements.arrow && $n(t.elements.arrow), ie = Le ? j === "y" ? Le.clientTop || 0 : Le.clientLeft || 0 : 0, _e = (B = z == null ? void 0 : z[j]) != null ? B : 0, be = N + X - _e - ie, bt = N + at - _e, Rt = mn(f ? nr(C, be) : C, N, f ? Lt(I, bt) : I);
        w[j] = Rt, q[j] = Rt - N;
      }
      if (l) {
        var ct, vt = j === "x" ? Oe : Ne, Mt = j === "x" ? Qe : Ze, Ue = w[M], He = M === "y" ? "height" : "width", qe = Ue + v[vt], Ye = Ue - v[Mt], $t = [
          Oe,
          Ne
        ].indexOf(x) !== -1, At = (ct = z == null ? void 0 : z[M]) != null ? ct : 0, It = $t ? qe : Ue - $[He] - R[He] - At + F.altAxis, tt = $t ? Ue + $[He] + R[He] - At - F.altAxis : Ye, Pt = f && $t ? Bi(It, Ue, tt) : mn(f ? It : qe, Ue, f ? tt : Ye);
        w[M] = Pt, q[M] = Pt - Ue;
      }
      t.modifiersData[r] = q;
    }
  }
  const vl = {
    name: "preventOverflow",
    enabled: true,
    phase: "main",
    fn: bl,
    requiresIfExists: [
      "offset"
    ]
  };
  function xl(e) {
    return {
      scrollLeft: e.scrollLeft,
      scrollTop: e.scrollTop
    };
  }
  function _l(e) {
    return e === We(e) || !Xe(e) ? Zr(e) : xl(e);
  }
  function wl(e) {
    var t = e.getBoundingClientRect(), n = Xt(t.width) / e.offsetWidth || 1, r = Xt(t.height) / e.offsetHeight || 1;
    return n !== 1 || r !== 1;
  }
  function Cl(e, t, n) {
    n === void 0 && (n = false);
    var r = Xe(t), o = Xe(t) && wl(t), s = jt(t), i = Qt(e, o, n), l = {
      scrollLeft: 0,
      scrollTop: 0
    }, a = {
      x: 0,
      y: 0
    };
    return (r || !r && !n) && ((lt(t) !== "body" || to(s)) && (l = _l(t)), Xe(t) ? (a = Qt(t, true), a.x += t.clientLeft, a.y += t.clientTop) : s && (a.x = eo(s))), {
      x: i.left + l.scrollLeft - a.x,
      y: i.top + l.scrollTop - a.y,
      width: i.width,
      height: i.height
    };
  }
  function Sl(e) {
    var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
    e.forEach(function(s) {
      t.set(s.name, s);
    });
    function o(s) {
      n.add(s.name);
      var i = [].concat(s.requires || [], s.requiresIfExists || []);
      i.forEach(function(l) {
        if (!n.has(l)) {
          var a = t.get(l);
          a && o(a);
        }
      }), r.push(s);
    }
    return e.forEach(function(s) {
      n.has(s.name) || o(s);
    }), r;
  }
  function jl(e) {
    var t = Sl(e);
    return Ei.reduce(function(n, r) {
      return n.concat(t.filter(function(o) {
        return o.phase === r;
      }));
    }, []);
  }
  function Rl(e) {
    var t;
    return function() {
      return t || (t = new Promise(function(n) {
        Promise.resolve().then(function() {
          t = void 0, n(e());
        });
      })), t;
    };
  }
  function Ml(e) {
    var t = e.reduce(function(n, r) {
      var o = n[r.name];
      return n[r.name] = o ? Object.assign({}, o, r, {
        options: Object.assign({}, o.options, r.options),
        data: Object.assign({}, o.data, r.data)
      }) : r, n;
    }, {});
    return Object.keys(t).map(function(n) {
      return t[n];
    });
  }
  var xo = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };
  function _o() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return !t.some(function(r) {
      return !(r && typeof r.getBoundingClientRect == "function");
    });
  }
  function $l(e) {
    e === void 0 && (e = {});
    var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, s = o === void 0 ? xo : o;
    return function(l, a, d) {
      d === void 0 && (d = s);
      var u = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, xo, s),
        modifiersData: {},
        elements: {
          reference: l,
          popper: a
        },
        attributes: {},
        styles: {}
      }, p = [], g = false, f = {
        state: u,
        setOptions: function(x) {
          var _ = typeof x == "function" ? x(u.options) : x;
          m(), u.options = Object.assign({}, s, u.options, _), u.scrollParents = {
            reference: Ht(l) ? yn(l) : l.contextElement ? yn(l.contextElement) : [],
            popper: yn(a)
          };
          var S = jl(Ml([].concat(r, u.options.modifiers)));
          return u.orderedModifiers = S.filter(function(j) {
            return j.enabled;
          }), h(), f.update();
        },
        forceUpdate: function() {
          if (!g) {
            var x = u.elements, _ = x.reference, S = x.popper;
            if (_o(_, S)) {
              u.rects = {
                reference: Cl(_, $n(S), u.options.strategy === "fixed"),
                popper: Xr(S)
              }, u.reset = false, u.placement = u.options.placement, u.orderedModifiers.forEach(function(F) {
                return u.modifiersData[F.name] = Object.assign({}, F.data);
              });
              for (var j = 0; j < u.orderedModifiers.length; j++) {
                if (u.reset === true) {
                  u.reset = false, j = -1;
                  continue;
                }
                var M = u.orderedModifiers[j], w = M.fn, $ = M.options, R = $ === void 0 ? {} : $, T = M.name;
                typeof w == "function" && (u = w({
                  state: u,
                  options: R,
                  name: T,
                  instance: f
                }) || u);
              }
            }
          }
        },
        update: Rl(function() {
          return new Promise(function(v) {
            f.forceUpdate(), v(u);
          });
        }),
        destroy: function() {
          m(), g = true;
        }
      };
      if (!_o(l, a)) return f;
      f.setOptions(d).then(function(v) {
        !g && d.onFirstUpdate && d.onFirstUpdate(v);
      });
      function h() {
        u.orderedModifiers.forEach(function(v) {
          var x = v.name, _ = v.options, S = _ === void 0 ? {} : _, j = v.effect;
          if (typeof j == "function") {
            var M = j({
              state: u,
              name: x,
              instance: f,
              options: S
            }), w = function() {
            };
            p.push(M || w);
          }
        });
      }
      function m() {
        p.forEach(function(v) {
          return v();
        }), p = [];
      }
      return f;
    };
  }
  var Al = [
    Qi,
    ml,
    Ki,
    Ni,
    gl,
    cl,
    vl,
    Ui,
    dl
  ], Il = $l({
    defaultModifiers: Al
  });
  function Pl(e) {
    return $e("MuiPopper", e);
  }
  Ae("MuiPopper", [
    "root"
  ]);
  function Fl(e, t) {
    if (t === "ltr") return e;
    switch (e) {
      case "bottom-end":
        return "bottom-start";
      case "bottom-start":
        return "bottom-end";
      case "top-end":
        return "top-start";
      case "top-start":
        return "top-end";
      default:
        return e;
    }
  }
  function Fr(e) {
    return typeof e == "function" ? e() : e;
  }
  function Tl(e) {
    return e.nodeType !== void 0;
  }
  const Dl = (e) => {
    const { classes: t } = e;
    return Ce({
      root: [
        "root"
      ]
    }, Pl, t);
  }, zl = {}, El = y.forwardRef(function(t, n) {
    const { anchorEl: r, children: o, direction: s, disablePortal: i, modifiers: l, open: a, placement: d, popperOptions: u, popperRef: p, slotProps: g = {}, slots: f = {}, TransitionProps: h, ownerState: m, ...v } = t, x = y.useRef(null), _ = _n(x, n), S = y.useRef(null), j = _n(S, p), M = y.useRef(j);
    jr(() => {
      M.current = j;
    }, [
      j
    ]), y.useImperativeHandle(p, () => S.current, []);
    const w = Fl(d, s), [$, R] = y.useState(w), [T, F] = y.useState(Fr(r));
    y.useEffect(() => {
      S.current && S.current.forceUpdate();
    }), y.useEffect(() => {
      r && F(Fr(r));
    }, [
      r
    ]), jr(() => {
      if (!T || !a) return;
      const Z = (C) => {
        R(C.placement);
      };
      let W = [
        {
          name: "preventOverflow",
          options: {
            altBoundary: i
          }
        },
        {
          name: "flip",
          options: {
            altBoundary: i
          }
        },
        {
          name: "onUpdate",
          enabled: true,
          phase: "afterWrite",
          fn: ({ state: C }) => {
            Z(C);
          }
        }
      ];
      l != null && (W = W.concat(l)), u && u.modifiers != null && (W = W.concat(u.modifiers));
      const N = Il(T, x.current, {
        placement: w,
        ...u,
        modifiers: W
      });
      return M.current(N), () => {
        N.destroy(), M.current(null);
      };
    }, [
      T,
      i,
      l,
      a,
      u,
      w
    ]);
    const z = {
      placement: $
    };
    h !== null && (z.TransitionProps = h);
    const q = Dl(t), B = f.root ?? "div", Y = Ys({
      elementType: B,
      externalSlotProps: g.root,
      externalForwardedProps: v,
      additionalProps: {
        role: "tooltip",
        ref: _
      },
      ownerState: t,
      className: q.root
    });
    return c.jsx(B, {
      ...Y,
      children: typeof o == "function" ? o(z) : o
    });
  }), kl = y.forwardRef(function(t, n) {
    const { anchorEl: r, children: o, container: s, direction: i = "ltr", disablePortal: l = false, keepMounted: a = false, modifiers: d, open: u, placement: p = "bottom", popperOptions: g = zl, popperRef: f, style: h, transition: m = false, slotProps: v = {}, slots: x = {}, ..._ } = t, [S, j] = y.useState(true), M = () => {
      j(false);
    }, w = () => {
      j(true);
    };
    if (!a && !u && (!m || S)) return null;
    let $;
    if (s) $ = s;
    else if (r) {
      const F = Fr(r);
      $ = F && Tl(F) ? gn(F).body : gn(null).body;
    }
    const R = !u && a && (!m || S) ? "none" : void 0, T = m ? {
      in: u,
      onEnter: M,
      onExited: w
    } : void 0;
    return c.jsx(qs, {
      disablePortal: l,
      container: $,
      children: c.jsx(El, {
        anchorEl: r,
        direction: i,
        disablePortal: l,
        modifiers: d,
        ref: n,
        open: m ? !S : u,
        placement: p,
        popperOptions: g,
        popperRef: f,
        slotProps: v,
        slots: x,
        ..._,
        style: {
          position: "fixed",
          top: 0,
          left: 0,
          display: R,
          ...h
        },
        TransitionProps: T,
        children: o
      })
    });
  }), Ol = oe(kl, {
    name: "MuiPopper",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({}), ws = y.forwardRef(function(t, n) {
    const r = Wr(), o = Se({
      props: t,
      name: "MuiPopper"
    }), { anchorEl: s, component: i, components: l, componentsProps: a, container: d, disablePortal: u, keepMounted: p, modifiers: g, open: f, placement: h, popperOptions: m, popperRef: v, transition: x, slots: _, slotProps: S, ...j } = o, M = (_ == null ? void 0 : _.root) ?? (l == null ? void 0 : l.Root), w = {
      anchorEl: s,
      container: d,
      disablePortal: u,
      keepMounted: p,
      modifiers: g,
      open: f,
      placement: h,
      popperOptions: m,
      popperRef: v,
      transition: x,
      ...j
    };
    return c.jsx(Ol, {
      as: i,
      direction: r ? "rtl" : "ltr",
      slots: {
        root: M
      },
      slotProps: S ?? a,
      ...w,
      ref: n
    });
  }), Nl = ge(c.jsx("path", {
    d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
  }), "Cancel");
  function Ll(e) {
    return $e("MuiChip", e);
  }
  const K = Ae("MuiChip", [
    "root",
    "sizeSmall",
    "sizeMedium",
    "colorDefault",
    "colorError",
    "colorInfo",
    "colorPrimary",
    "colorSecondary",
    "colorSuccess",
    "colorWarning",
    "disabled",
    "clickable",
    "clickableColorPrimary",
    "clickableColorSecondary",
    "deletable",
    "deletableColorPrimary",
    "deletableColorSecondary",
    "outlined",
    "filled",
    "outlinedPrimary",
    "outlinedSecondary",
    "filledPrimary",
    "filledSecondary",
    "avatar",
    "avatarSmall",
    "avatarMedium",
    "avatarColorPrimary",
    "avatarColorSecondary",
    "icon",
    "iconSmall",
    "iconMedium",
    "iconColorPrimary",
    "iconColorSecondary",
    "label",
    "labelSmall",
    "labelMedium",
    "deleteIcon",
    "deleteIconSmall",
    "deleteIconMedium",
    "deleteIconColorPrimary",
    "deleteIconColorSecondary",
    "deleteIconOutlinedColorPrimary",
    "deleteIconOutlinedColorSecondary",
    "deleteIconFilledColorPrimary",
    "deleteIconFilledColorSecondary",
    "focusVisible"
  ]), Hl = (e) => {
    const { classes: t, disabled: n, size: r, color: o, iconColor: s, onDelete: i, clickable: l, variant: a } = e, d = {
      root: [
        "root",
        a,
        n && "disabled",
        `size${V(r)}`,
        `color${V(o)}`,
        l && "clickable",
        l && `clickableColor${V(o)}`,
        i && "deletable",
        i && `deletableColor${V(o)}`,
        `${a}${V(o)}`
      ],
      label: [
        "label",
        `label${V(r)}`
      ],
      avatar: [
        "avatar",
        `avatar${V(r)}`,
        `avatarColor${V(o)}`
      ],
      icon: [
        "icon",
        `icon${V(r)}`,
        `iconColor${V(s)}`
      ],
      deleteIcon: [
        "deleteIcon",
        `deleteIcon${V(r)}`,
        `deleteIconColor${V(o)}`,
        `deleteIcon${V(a)}Color${V(o)}`
      ]
    };
    return Ce(d, Ll, t);
  }, Bl = oe("div", {
    name: "MuiChip",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e, { color: r, iconColor: o, clickable: s, onDelete: i, size: l, variant: a } = n;
      return [
        {
          [`& .${K.avatar}`]: t.avatar
        },
        {
          [`& .${K.avatar}`]: t[`avatar${V(l)}`]
        },
        {
          [`& .${K.avatar}`]: t[`avatarColor${V(r)}`]
        },
        {
          [`& .${K.icon}`]: t.icon
        },
        {
          [`& .${K.icon}`]: t[`icon${V(l)}`]
        },
        {
          [`& .${K.icon}`]: t[`iconColor${V(o)}`]
        },
        {
          [`& .${K.deleteIcon}`]: t.deleteIcon
        },
        {
          [`& .${K.deleteIcon}`]: t[`deleteIcon${V(l)}`]
        },
        {
          [`& .${K.deleteIcon}`]: t[`deleteIconColor${V(r)}`]
        },
        {
          [`& .${K.deleteIcon}`]: t[`deleteIcon${V(a)}Color${V(r)}`]
        },
        t.root,
        t[`size${V(l)}`],
        t[`color${V(r)}`],
        s && t.clickable,
        s && r !== "default" && t[`clickableColor${V(r)})`],
        i && t.deletable,
        i && r !== "default" && t[`deletableColor${V(r)}`],
        t[a],
        t[`${a}${V(r)}`]
      ];
    }
  })(je(({ theme: e }) => {
    const t = e.palette.mode === "light" ? e.palette.grey[700] : e.palette.grey[300];
    return {
      maxWidth: "100%",
      fontFamily: e.typography.fontFamily,
      fontSize: e.typography.pxToRem(13),
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      height: 32,
      color: (e.vars || e).palette.text.primary,
      backgroundColor: (e.vars || e).palette.action.selected,
      borderRadius: 32 / 2,
      whiteSpace: "nowrap",
      transition: e.transitions.create([
        "background-color",
        "box-shadow"
      ]),
      cursor: "unset",
      outline: 0,
      textDecoration: "none",
      border: 0,
      padding: 0,
      verticalAlign: "middle",
      boxSizing: "border-box",
      [`&.${K.disabled}`]: {
        opacity: (e.vars || e).palette.action.disabledOpacity,
        pointerEvents: "none"
      },
      [`& .${K.avatar}`]: {
        marginLeft: 5,
        marginRight: -6,
        width: 24,
        height: 24,
        color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : t,
        fontSize: e.typography.pxToRem(12)
      },
      [`& .${K.avatarColorPrimary}`]: {
        color: (e.vars || e).palette.primary.contrastText,
        backgroundColor: (e.vars || e).palette.primary.dark
      },
      [`& .${K.avatarColorSecondary}`]: {
        color: (e.vars || e).palette.secondary.contrastText,
        backgroundColor: (e.vars || e).palette.secondary.dark
      },
      [`& .${K.avatarSmall}`]: {
        marginLeft: 4,
        marginRight: -4,
        width: 18,
        height: 18,
        fontSize: e.typography.pxToRem(10)
      },
      [`& .${K.icon}`]: {
        marginLeft: 5,
        marginRight: -6
      },
      [`& .${K.deleteIcon}`]: {
        WebkitTapHighlightColor: "transparent",
        color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.26)` : Fe(e.palette.text.primary, 0.26),
        fontSize: 22,
        cursor: "pointer",
        margin: "0 5px 0 -6px",
        "&:hover": {
          color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)` : Fe(e.palette.text.primary, 0.4)
        }
      },
      variants: [
        {
          props: {
            size: "small"
          },
          style: {
            height: 24,
            [`& .${K.icon}`]: {
              fontSize: 18,
              marginLeft: 4,
              marginRight: -4
            },
            [`& .${K.deleteIcon}`]: {
              fontSize: 16,
              marginRight: 4,
              marginLeft: -4
            }
          }
        },
        ...Object.entries(e.palette).filter(En([
          "contrastText"
        ])).map(([n]) => ({
          props: {
            color: n
          },
          style: {
            backgroundColor: (e.vars || e).palette[n].main,
            color: (e.vars || e).palette[n].contrastText,
            [`& .${K.deleteIcon}`]: {
              color: e.vars ? `rgba(${e.vars.palette[n].contrastTextChannel} / 0.7)` : Fe(e.palette[n].contrastText, 0.7),
              "&:hover, &:active": {
                color: (e.vars || e).palette[n].contrastText
              }
            }
          }
        })),
        {
          props: (n) => n.iconColor === n.color,
          style: {
            [`& .${K.icon}`]: {
              color: e.vars ? e.vars.palette.Chip.defaultIconColor : t
            }
          }
        },
        {
          props: (n) => n.iconColor === n.color && n.color !== "default",
          style: {
            [`& .${K.icon}`]: {
              color: "inherit"
            }
          }
        },
        {
          props: {
            onDelete: true
          },
          style: {
            [`&.${K.focusVisible}`]: {
              backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Fe(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
            }
          }
        },
        ...Object.entries(e.palette).filter(En([
          "dark"
        ])).map(([n]) => ({
          props: {
            color: n,
            onDelete: true
          },
          style: {
            [`&.${K.focusVisible}`]: {
              background: (e.vars || e).palette[n].dark
            }
          }
        })),
        {
          props: {
            clickable: true
          },
          style: {
            userSelect: "none",
            WebkitTapHighlightColor: "transparent",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Fe(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
            },
            [`&.${K.focusVisible}`]: {
              backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Fe(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
            },
            "&:active": {
              boxShadow: (e.vars || e).shadows[1]
            }
          }
        },
        ...Object.entries(e.palette).filter(En([
          "dark"
        ])).map(([n]) => ({
          props: {
            color: n,
            clickable: true
          },
          style: {
            [`&:hover, &.${K.focusVisible}`]: {
              backgroundColor: (e.vars || e).palette[n].dark
            }
          }
        })),
        {
          props: {
            variant: "outlined"
          },
          style: {
            backgroundColor: "transparent",
            border: e.vars ? `1px solid ${e.vars.palette.Chip.defaultBorder}` : `1px solid ${e.palette.mode === "light" ? e.palette.grey[400] : e.palette.grey[700]}`,
            [`&.${K.clickable}:hover`]: {
              backgroundColor: (e.vars || e).palette.action.hover
            },
            [`&.${K.focusVisible}`]: {
              backgroundColor: (e.vars || e).palette.action.focus
            },
            [`& .${K.avatar}`]: {
              marginLeft: 4
            },
            [`& .${K.avatarSmall}`]: {
              marginLeft: 2
            },
            [`& .${K.icon}`]: {
              marginLeft: 4
            },
            [`& .${K.iconSmall}`]: {
              marginLeft: 2
            },
            [`& .${K.deleteIcon}`]: {
              marginRight: 5
            },
            [`& .${K.deleteIconSmall}`]: {
              marginRight: 3
            }
          }
        },
        ...Object.entries(e.palette).filter(En()).map(([n]) => ({
          props: {
            variant: "outlined",
            color: n
          },
          style: {
            color: (e.vars || e).palette[n].main,
            border: `1px solid ${e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.7)` : Fe(e.palette[n].main, 0.7)}`,
            [`&.${K.clickable}:hover`]: {
              backgroundColor: e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Fe(e.palette[n].main, e.palette.action.hoverOpacity)
            },
            [`&.${K.focusVisible}`]: {
              backgroundColor: e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.focusOpacity})` : Fe(e.palette[n].main, e.palette.action.focusOpacity)
            },
            [`& .${K.deleteIcon}`]: {
              color: e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.7)` : Fe(e.palette[n].main, 0.7),
              "&:hover, &:active": {
                color: (e.vars || e).palette[n].main
              }
            }
          }
        }))
      ]
    };
  })), Vl = oe("span", {
    name: "MuiChip",
    slot: "Label",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e, { size: r } = n;
      return [
        t.label,
        t[`label${V(r)}`]
      ];
    }
  })({
    overflow: "hidden",
    textOverflow: "ellipsis",
    paddingLeft: 12,
    paddingRight: 12,
    whiteSpace: "nowrap",
    variants: [
      {
        props: {
          variant: "outlined"
        },
        style: {
          paddingLeft: 11,
          paddingRight: 11
        }
      },
      {
        props: {
          size: "small"
        },
        style: {
          paddingLeft: 8,
          paddingRight: 8
        }
      },
      {
        props: {
          size: "small",
          variant: "outlined"
        },
        style: {
          paddingLeft: 7,
          paddingRight: 7
        }
      }
    ]
  });
  function wo(e) {
    return e.key === "Backspace" || e.key === "Delete";
  }
  const ht = y.forwardRef(function(t, n) {
    const r = Se({
      props: t,
      name: "MuiChip"
    }), { avatar: o, className: s, clickable: i, color: l = "default", component: a, deleteIcon: d, disabled: u = false, icon: p, label: g, onClick: f, onDelete: h, onKeyDown: m, onKeyUp: v, size: x = "medium", variant: _ = "filled", tabIndex: S, skipFocusWhenDisabled: j = false, ...M } = r, w = y.useRef(null), $ = _n(w, n), R = (I) => {
      I.stopPropagation(), h && h(I);
    }, T = (I) => {
      I.currentTarget === I.target && wo(I) && I.preventDefault(), m && m(I);
    }, F = (I) => {
      I.currentTarget === I.target && h && wo(I) && h(I), v && v(I);
    }, z = i !== false && f ? true : i, q = z || h ? Rr : a || "div", B = {
      ...r,
      component: q,
      disabled: u,
      size: x,
      color: l,
      iconColor: y.isValidElement(p) && p.props.color || l,
      onDelete: !!h,
      clickable: z,
      variant: _
    }, Y = Hl(B), Z = q === Rr ? {
      component: a || "div",
      focusVisibleClassName: Y.focusVisible,
      ...h && {
        disableRipple: true
      }
    } : {};
    let W = null;
    h && (W = d && y.isValidElement(d) ? y.cloneElement(d, {
      className: fe(d.props.className, Y.deleteIcon),
      onClick: R
    }) : c.jsx(Nl, {
      className: fe(Y.deleteIcon),
      onClick: R
    }));
    let N = null;
    o && y.isValidElement(o) && (N = y.cloneElement(o, {
      className: fe(Y.avatar, o.props.className)
    }));
    let C = null;
    return p && y.isValidElement(p) && (C = y.cloneElement(p, {
      className: fe(Y.icon, p.props.className)
    })), c.jsxs(Bl, {
      as: q,
      className: fe(Y.root, s),
      disabled: z && u ? true : void 0,
      onClick: f,
      onKeyDown: T,
      onKeyUp: F,
      ref: $,
      tabIndex: j && u ? -1 : S,
      ownerState: B,
      ...Z,
      ...M,
      children: [
        N || C,
        c.jsx(Vl, {
          className: fe(Y.label),
          ownerState: B,
          children: g
        }),
        W
      ]
    });
  });
  function Wl(e) {
    return $e("MuiCard", e);
  }
  Ae("MuiCard", [
    "root"
  ]);
  const Gl = (e) => {
    const { classes: t } = e;
    return Ce({
      root: [
        "root"
      ]
    }, Wl, t);
  }, Ul = oe(mt, {
    name: "MuiCard",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    overflow: "hidden"
  }), ql = y.forwardRef(function(t, n) {
    const r = Se({
      props: t,
      name: "MuiCard"
    }), { className: o, raised: s = false, ...i } = r, l = {
      ...r,
      raised: s
    }, a = Gl(l);
    return c.jsx(Ul, {
      className: fe(a.root, o),
      elevation: s ? 8 : void 0,
      ref: n,
      ownerState: l,
      ...i
    });
  });
  function Co(e) {
    return e.substring(2).toLowerCase();
  }
  function Yl(e, t) {
    return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY;
  }
  function Jl(e) {
    const { children: t, disableReactTree: n = false, mouseEvent: r = "onClick", onClickAway: o, touchEvent: s = "onTouchEnd" } = e, i = y.useRef(false), l = y.useRef(null), a = y.useRef(false), d = y.useRef(false);
    y.useEffect(() => (setTimeout(() => {
      a.current = true;
    }, 0), () => {
      a.current = false;
    }), []);
    const u = _n(as(t), l), p = wn((h) => {
      const m = d.current;
      d.current = false;
      const v = gn(l.current);
      if (!a.current || !l.current || "clientX" in h && Yl(h, v)) return;
      if (i.current) {
        i.current = false;
        return;
      }
      let x;
      h.composedPath ? x = h.composedPath().includes(l.current) : x = !v.documentElement.contains(h.target) || l.current.contains(h.target), !x && (n || !m) && o(h);
    }), g = (h) => (m) => {
      d.current = true;
      const v = t.props[h];
      v && v(m);
    }, f = {
      ref: u
    };
    return s !== false && (f[s] = g(s)), y.useEffect(() => {
      if (s !== false) {
        const h = Co(s), m = gn(l.current), v = () => {
          i.current = true;
        };
        return m.addEventListener(h, p), m.addEventListener("touchmove", v), () => {
          m.removeEventListener(h, p), m.removeEventListener("touchmove", v);
        };
      }
    }, [
      p,
      s
    ]), r !== false && (f[r] = g(r)), y.useEffect(() => {
      if (r !== false) {
        const h = Co(r), m = gn(l.current);
        return m.addEventListener(h, p), () => {
          m.removeEventListener(h, p);
        };
      }
    }, [
      p,
      r
    ]), y.cloneElement(t, f);
  }
  function Kl(e) {
    return $e("MuiDialogContentText", e);
  }
  Ae("MuiDialogContentText", [
    "root"
  ]);
  const Xl = (e) => {
    const { classes: t } = e, r = Ce({
      root: [
        "root"
      ]
    }, Kl, t);
    return {
      ...t,
      ...r
    };
  }, Ql = oe(P, {
    shouldForwardProp: (e) => Js(e) || e === "classes",
    name: "MuiDialogContentText",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({}), Zl = y.forwardRef(function(t, n) {
    const r = Se({
      props: t,
      name: "MuiDialogContentText"
    }), { children: o, className: s, ...i } = r, l = Xl(i);
    return c.jsx(Ql, {
      component: "p",
      variant: "body1",
      color: "textSecondary",
      ref: n,
      ownerState: i,
      className: fe(l.root, s),
      ...r,
      classes: l
    });
  }), ea = fs({
    themeId: Ks
  });
  function ta(e) {
    return $e("MuiInputAdornment", e);
  }
  const So = Ae("MuiInputAdornment", [
    "root",
    "filled",
    "standard",
    "outlined",
    "positionStart",
    "positionEnd",
    "disablePointerEvents",
    "hiddenLabel",
    "sizeSmall"
  ]);
  var jo;
  const na = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      t[`position${V(n.position)}`],
      n.disablePointerEvents === true && t.disablePointerEvents,
      t[n.variant]
    ];
  }, ra = (e) => {
    const { classes: t, disablePointerEvents: n, hiddenLabel: r, position: o, size: s, variant: i } = e, l = {
      root: [
        "root",
        n && "disablePointerEvents",
        o && `position${V(o)}`,
        i,
        r && "hiddenLabel",
        s && `size${V(s)}`
      ]
    };
    return Ce(l, ta, t);
  }, oa = oe("div", {
    name: "MuiInputAdornment",
    slot: "Root",
    overridesResolver: na
  })(je(({ theme: e }) => ({
    display: "flex",
    maxHeight: "2em",
    alignItems: "center",
    whiteSpace: "nowrap",
    color: (e.vars || e).palette.action.active,
    variants: [
      {
        props: {
          variant: "filled"
        },
        style: {
          [`&.${So.positionStart}&:not(.${So.hiddenLabel})`]: {
            marginTop: 16
          }
        }
      },
      {
        props: {
          position: "start"
        },
        style: {
          marginRight: 8
        }
      },
      {
        props: {
          position: "end"
        },
        style: {
          marginLeft: 8
        }
      },
      {
        props: {
          disablePointerEvents: true
        },
        style: {
          pointerEvents: "none"
        }
      }
    ]
  }))), Cs = y.forwardRef(function(t, n) {
    const r = Se({
      props: t,
      name: "MuiInputAdornment"
    }), { children: o, className: s, component: i = "div", disablePointerEvents: l = false, disableTypography: a = false, position: d, variant: u, ...p } = r, g = Xs() || {};
    let f = u;
    u && g.variant, g && !f && (f = g.variant);
    const h = {
      ...r,
      hiddenLabel: g.hiddenLabel,
      size: g.size,
      disablePointerEvents: l,
      position: d,
      variant: f
    }, m = ra(h);
    return c.jsx(Qs.Provider, {
      value: null,
      children: c.jsx(oa, {
        as: i,
        ownerState: h,
        className: fe(m.root, s),
        ref: n,
        ...p,
        children: typeof o == "string" && !a ? c.jsx(P, {
          color: "textSecondary",
          children: o
        }) : c.jsxs(y.Fragment, {
          children: [
            d === "start" ? jo || (jo = c.jsx("span", {
              className: "notranslate",
              "aria-hidden": true,
              children: "\u200B"
            })) : null,
            o
          ]
        })
      })
    });
  }), sa = (e) => {
    const { alignItems: t, classes: n } = e;
    return Ce({
      root: [
        "root",
        t === "flex-start" && "alignItemsFlexStart"
      ]
    }, vi, n);
  }, ia = oe("div", {
    name: "MuiListItemIcon",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.alignItems === "flex-start" && t.alignItemsFlexStart
      ];
    }
  })(je(({ theme: e }) => ({
    minWidth: 56,
    color: (e.vars || e).palette.action.active,
    flexShrink: 0,
    display: "inline-flex",
    variants: [
      {
        props: {
          alignItems: "flex-start"
        },
        style: {
          marginTop: 8
        }
      }
    ]
  }))), nn = y.forwardRef(function(t, n) {
    const r = Se({
      props: t,
      name: "MuiListItemIcon"
    }), { className: o, ...s } = r, i = y.useContext(Zs), l = {
      ...r,
      alignItems: i.alignItems
    }, a = sa(l);
    return c.jsx(ia, {
      className: fe(a.root, o),
      ownerState: l,
      ref: n,
      ...s
    });
  }), la = ge(c.jsx("path", {
    d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"
  }), "FirstPage"), aa = ge(c.jsx("path", {
    d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"
  }), "LastPage");
  function ca(e = {}) {
    const { autoHideDuration: t = null, disableWindowBlurListener: n = false, onClose: r, open: o, resumeHideDuration: s } = e, i = fn();
    y.useEffect(() => {
      if (!o) return;
      function x(_) {
        _.defaultPrevented || _.key === "Escape" && (r == null ? void 0 : r(_, "escapeKeyDown"));
      }
      return document.addEventListener("keydown", x), () => {
        document.removeEventListener("keydown", x);
      };
    }, [
      o,
      r
    ]);
    const l = wn((x, _) => {
      r == null ? void 0 : r(x, _);
    }), a = wn((x) => {
      !r || x == null || i.start(x, () => {
        l(null, "timeout");
      });
    });
    y.useEffect(() => (o && a(t), i.clear), [
      o,
      t,
      a,
      i
    ]);
    const d = (x) => {
      r == null ? void 0 : r(x, "clickaway");
    }, u = i.clear, p = y.useCallback(() => {
      t != null && a(s ?? t * 0.5);
    }, [
      t,
      s,
      a
    ]), g = (x) => (_) => {
      const S = x.onBlur;
      S == null ? void 0 : S(_), p();
    }, f = (x) => (_) => {
      const S = x.onFocus;
      S == null ? void 0 : S(_), u();
    }, h = (x) => (_) => {
      const S = x.onMouseEnter;
      S == null ? void 0 : S(_), u();
    }, m = (x) => (_) => {
      const S = x.onMouseLeave;
      S == null ? void 0 : S(_), p();
    };
    return y.useEffect(() => {
      if (!n && o) return window.addEventListener("focus", p), window.addEventListener("blur", u), () => {
        window.removeEventListener("focus", p), window.removeEventListener("blur", u);
      };
    }, [
      n,
      o,
      p,
      u
    ]), {
      getRootProps: (x = {}) => {
        const _ = {
          ...co(e),
          ...co(x)
        };
        return {
          role: "presentation",
          ...x,
          ..._,
          onBlur: g(_),
          onFocus: f(_),
          onMouseEnter: h(_),
          onMouseLeave: m(_)
        };
      },
      onClickAway: d
    };
  }
  function ua(e) {
    return $e("MuiSnackbarContent", e);
  }
  Ae("MuiSnackbarContent", [
    "root",
    "message",
    "action"
  ]);
  const da = (e) => {
    const { classes: t } = e;
    return Ce({
      root: [
        "root"
      ],
      action: [
        "action"
      ],
      message: [
        "message"
      ]
    }, ua, t);
  }, fa = oe(mt, {
    name: "MuiSnackbarContent",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })(je(({ theme: e }) => {
    const t = e.palette.mode === "light" ? 0.8 : 0.98, n = ei(e.palette.background.default, t);
    return {
      ...e.typography.body2,
      color: e.vars ? e.vars.palette.SnackbarContent.color : e.palette.getContrastText(n),
      backgroundColor: e.vars ? e.vars.palette.SnackbarContent.bg : n,
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      padding: "6px 16px",
      borderRadius: (e.vars || e).shape.borderRadius,
      flexGrow: 1,
      [e.breakpoints.up("sm")]: {
        flexGrow: "initial",
        minWidth: 288
      }
    };
  })), pa = oe("div", {
    name: "MuiSnackbarContent",
    slot: "Message",
    overridesResolver: (e, t) => t.message
  })({
    padding: "8px 0"
  }), ga = oe("div", {
    name: "MuiSnackbarContent",
    slot: "Action",
    overridesResolver: (e, t) => t.action
  })({
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
    paddingLeft: 16,
    marginRight: -8
  }), ha = y.forwardRef(function(t, n) {
    const r = Se({
      props: t,
      name: "MuiSnackbarContent"
    }), { action: o, className: s, message: i, role: l = "alert", ...a } = r, d = r, u = da(d);
    return c.jsxs(fa, {
      role: l,
      square: true,
      elevation: 6,
      className: fe(u.root, s),
      ownerState: d,
      ref: n,
      ...a,
      children: [
        c.jsx(pa, {
          className: u.message,
          ownerState: d,
          children: i
        }),
        o ? c.jsx(ga, {
          className: u.action,
          ownerState: d,
          children: o
        }) : null
      ]
    });
  });
  function ma(e) {
    return $e("MuiSnackbar", e);
  }
  Ae("MuiSnackbar", [
    "root",
    "anchorOriginTopCenter",
    "anchorOriginBottomCenter",
    "anchorOriginTopRight",
    "anchorOriginBottomRight",
    "anchorOriginTopLeft",
    "anchorOriginBottomLeft"
  ]);
  const ya = (e) => {
    const { classes: t, anchorOrigin: n } = e, r = {
      root: [
        "root",
        `anchorOrigin${V(n.vertical)}${V(n.horizontal)}`
      ]
    };
    return Ce(r, ma, t);
  }, ba = oe("div", {
    name: "MuiSnackbar",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[`anchorOrigin${V(n.anchorOrigin.vertical)}${V(n.anchorOrigin.horizontal)}`]
      ];
    }
  })(je(({ theme: e }) => ({
    zIndex: (e.vars || e).zIndex.snackbar,
    position: "fixed",
    display: "flex",
    left: 8,
    right: 8,
    justifyContent: "center",
    alignItems: "center",
    variants: [
      {
        props: ({ ownerState: t }) => t.anchorOrigin.vertical === "top",
        style: {
          top: 8,
          [e.breakpoints.up("sm")]: {
            top: 24
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.anchorOrigin.vertical !== "top",
        style: {
          bottom: 8,
          [e.breakpoints.up("sm")]: {
            bottom: 24
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.anchorOrigin.horizontal === "left",
        style: {
          justifyContent: "flex-start",
          [e.breakpoints.up("sm")]: {
            left: 24,
            right: "auto"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.anchorOrigin.horizontal === "right",
        style: {
          justifyContent: "flex-end",
          [e.breakpoints.up("sm")]: {
            right: 24,
            left: "auto"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.anchorOrigin.horizontal === "center",
        style: {
          [e.breakpoints.up("sm")]: {
            left: "50%",
            right: "auto",
            transform: "translateX(-50%)"
          }
        }
      }
    ]
  }))), va = y.forwardRef(function(t, n) {
    const r = Se({
      props: t,
      name: "MuiSnackbar"
    }), o = lr(), s = {
      enter: o.transitions.duration.enteringScreen,
      exit: o.transitions.duration.leavingScreen
    }, { action: i, anchorOrigin: { vertical: l, horizontal: a } = {
      vertical: "bottom",
      horizontal: "left"
    }, autoHideDuration: d = null, children: u, className: p, ClickAwayListenerProps: g, ContentProps: f, disableWindowBlurListener: h = false, message: m, onBlur: v, onClose: x, onFocus: _, onMouseEnter: S, onMouseLeave: j, open: M, resumeHideDuration: w, slots: $ = {}, slotProps: R = {}, TransitionComponent: T, transitionDuration: F = s, TransitionProps: { onEnter: z, onExited: q, ...B } = {}, ...Y } = r, Z = {
      ...r,
      anchorOrigin: {
        vertical: l,
        horizontal: a
      },
      autoHideDuration: d,
      disableWindowBlurListener: h,
      TransitionComponent: T,
      transitionDuration: F
    }, W = ya(Z), { getRootProps: N, onClickAway: C } = ca({
      ...Z
    }), [I, E] = y.useState(true), L = (_e) => {
      E(true), q && q(_e);
    }, re = (_e, be) => {
      E(false), z && z(_e, be);
    }, J = {
      slots: {
        transition: T,
        ...$
      },
      slotProps: {
        content: f,
        clickAwayListener: g,
        transition: B,
        ...R
      }
    }, [ye, he] = Me("root", {
      ref: n,
      className: [
        W.root,
        p
      ],
      elementType: ba,
      getSlotProps: N,
      externalForwardedProps: {
        ...J,
        ...Y
      },
      ownerState: Z
    }), [le, { ownerState: Re, ...ae }] = Me("clickAwayListener", {
      elementType: Jl,
      externalForwardedProps: J,
      getSlotProps: (_e) => ({
        onClickAway: (...be) => {
          var _a2;
          (_a2 = _e.onClickAway) == null ? void 0 : _a2.call(_e, ...be), C(...be);
        }
      }),
      ownerState: Z
    }), [X, at] = Me("content", {
      elementType: ha,
      shouldForwardComponentProp: true,
      externalForwardedProps: J,
      additionalProps: {
        message: m,
        action: i
      },
      ownerState: Z
    }), [Le, ie] = Me("transition", {
      elementType: cs,
      externalForwardedProps: J,
      getSlotProps: (_e) => ({
        onEnter: (...be) => {
          var _a2;
          (_a2 = _e.onEnter) == null ? void 0 : _a2.call(_e, ...be), re(...be);
        },
        onExited: (...be) => {
          var _a2;
          (_a2 = _e.onExited) == null ? void 0 : _a2.call(_e, ...be), L(...be);
        }
      }),
      additionalProps: {
        appear: true,
        in: M,
        timeout: F,
        direction: l === "top" ? "down" : "up"
      },
      ownerState: Z
    });
    return !M && I ? null : c.jsx(le, {
      ...ae,
      ...$.clickAwayListener && {
        ownerState: Re
      },
      children: c.jsx(ye, {
        ...he,
        children: c.jsx(Le, {
          ...ie,
          children: u || c.jsx(X, {
            ...at
          })
        })
      })
    });
  });
  function xa(e) {
    return $e("MuiTooltip", e);
  }
  const me = Ae("MuiTooltip", [
    "popper",
    "popperInteractive",
    "popperArrow",
    "popperClose",
    "tooltip",
    "tooltipArrow",
    "touch",
    "tooltipPlacementLeft",
    "tooltipPlacementRight",
    "tooltipPlacementTop",
    "tooltipPlacementBottom",
    "arrow"
  ]);
  function _a(e) {
    return Math.round(e * 1e5) / 1e5;
  }
  const wa = (e) => {
    const { classes: t, disableInteractive: n, arrow: r, touch: o, placement: s } = e, i = {
      popper: [
        "popper",
        !n && "popperInteractive",
        r && "popperArrow"
      ],
      tooltip: [
        "tooltip",
        r && "tooltipArrow",
        o && "touch",
        `tooltipPlacement${V(s.split("-")[0])}`
      ],
      arrow: [
        "arrow"
      ]
    };
    return Ce(i, xa, t);
  }, Ca = oe(ws, {
    name: "MuiTooltip",
    slot: "Popper",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.popper,
        !n.disableInteractive && t.popperInteractive,
        n.arrow && t.popperArrow,
        !n.open && t.popperClose
      ];
    }
  })(je(({ theme: e }) => ({
    zIndex: (e.vars || e).zIndex.tooltip,
    pointerEvents: "none",
    variants: [
      {
        props: ({ ownerState: t }) => !t.disableInteractive,
        style: {
          pointerEvents: "auto"
        }
      },
      {
        props: ({ open: t }) => !t,
        style: {
          pointerEvents: "none"
        }
      },
      {
        props: ({ ownerState: t }) => t.arrow,
        style: {
          [`&[data-popper-placement*="bottom"] .${me.arrow}`]: {
            top: 0,
            marginTop: "-0.71em",
            "&::before": {
              transformOrigin: "0 100%"
            }
          },
          [`&[data-popper-placement*="top"] .${me.arrow}`]: {
            bottom: 0,
            marginBottom: "-0.71em",
            "&::before": {
              transformOrigin: "100% 0"
            }
          },
          [`&[data-popper-placement*="right"] .${me.arrow}`]: {
            height: "1em",
            width: "0.71em",
            "&::before": {
              transformOrigin: "100% 100%"
            }
          },
          [`&[data-popper-placement*="left"] .${me.arrow}`]: {
            height: "1em",
            width: "0.71em",
            "&::before": {
              transformOrigin: "0 0"
            }
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.arrow && !t.isRtl,
        style: {
          [`&[data-popper-placement*="right"] .${me.arrow}`]: {
            left: 0,
            marginLeft: "-0.71em"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.arrow && !!t.isRtl,
        style: {
          [`&[data-popper-placement*="right"] .${me.arrow}`]: {
            right: 0,
            marginRight: "-0.71em"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.arrow && !t.isRtl,
        style: {
          [`&[data-popper-placement*="left"] .${me.arrow}`]: {
            right: 0,
            marginRight: "-0.71em"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.arrow && !!t.isRtl,
        style: {
          [`&[data-popper-placement*="left"] .${me.arrow}`]: {
            left: 0,
            marginLeft: "-0.71em"
          }
        }
      }
    ]
  }))), Sa = oe("div", {
    name: "MuiTooltip",
    slot: "Tooltip",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.tooltip,
        n.touch && t.touch,
        n.arrow && t.tooltipArrow,
        t[`tooltipPlacement${V(n.placement.split("-")[0])}`]
      ];
    }
  })(je(({ theme: e }) => ({
    backgroundColor: e.vars ? e.vars.palette.Tooltip.bg : Fe(e.palette.grey[700], 0.92),
    borderRadius: (e.vars || e).shape.borderRadius,
    color: (e.vars || e).palette.common.white,
    fontFamily: e.typography.fontFamily,
    padding: "4px 8px",
    fontSize: e.typography.pxToRem(11),
    maxWidth: 300,
    margin: 2,
    wordWrap: "break-word",
    fontWeight: e.typography.fontWeightMedium,
    [`.${me.popper}[data-popper-placement*="left"] &`]: {
      transformOrigin: "right center"
    },
    [`.${me.popper}[data-popper-placement*="right"] &`]: {
      transformOrigin: "left center"
    },
    [`.${me.popper}[data-popper-placement*="top"] &`]: {
      transformOrigin: "center bottom",
      marginBottom: "14px"
    },
    [`.${me.popper}[data-popper-placement*="bottom"] &`]: {
      transformOrigin: "center top",
      marginTop: "14px"
    },
    variants: [
      {
        props: ({ ownerState: t }) => t.arrow,
        style: {
          position: "relative",
          margin: 0
        }
      },
      {
        props: ({ ownerState: t }) => t.touch,
        style: {
          padding: "8px 16px",
          fontSize: e.typography.pxToRem(14),
          lineHeight: `${_a(16 / 14)}em`,
          fontWeight: e.typography.fontWeightRegular
        }
      },
      {
        props: ({ ownerState: t }) => !t.isRtl,
        style: {
          [`.${me.popper}[data-popper-placement*="left"] &`]: {
            marginRight: "14px"
          },
          [`.${me.popper}[data-popper-placement*="right"] &`]: {
            marginLeft: "14px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => !t.isRtl && t.touch,
        style: {
          [`.${me.popper}[data-popper-placement*="left"] &`]: {
            marginRight: "24px"
          },
          [`.${me.popper}[data-popper-placement*="right"] &`]: {
            marginLeft: "24px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => !!t.isRtl,
        style: {
          [`.${me.popper}[data-popper-placement*="left"] &`]: {
            marginLeft: "14px"
          },
          [`.${me.popper}[data-popper-placement*="right"] &`]: {
            marginRight: "14px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => !!t.isRtl && t.touch,
        style: {
          [`.${me.popper}[data-popper-placement*="left"] &`]: {
            marginLeft: "24px"
          },
          [`.${me.popper}[data-popper-placement*="right"] &`]: {
            marginRight: "24px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.touch,
        style: {
          [`.${me.popper}[data-popper-placement*="top"] &`]: {
            marginBottom: "24px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.touch,
        style: {
          [`.${me.popper}[data-popper-placement*="bottom"] &`]: {
            marginTop: "24px"
          }
        }
      }
    ]
  }))), ja = oe("span", {
    name: "MuiTooltip",
    slot: "Arrow",
    overridesResolver: (e, t) => t.arrow
  })(je(({ theme: e }) => ({
    overflow: "hidden",
    position: "absolute",
    width: "1em",
    height: "0.71em",
    boxSizing: "border-box",
    color: e.vars ? e.vars.palette.Tooltip.bg : Fe(e.palette.grey[700], 0.9),
    "&::before": {
      content: '""',
      margin: "auto",
      display: "block",
      width: "100%",
      height: "100%",
      backgroundColor: "currentColor",
      transform: "rotate(45deg)"
    }
  })));
  let Vn = false;
  const Ro = new ni();
  let rn = {
    x: 0,
    y: 0
  };
  function Wn(e, t) {
    return (n, ...r) => {
      t && t(n, ...r), e(n, ...r);
    };
  }
  const ke = y.forwardRef(function(t, n) {
    const r = Se({
      props: t,
      name: "MuiTooltip"
    }), { arrow: o = false, children: s, classes: i, components: l = {}, componentsProps: a = {}, describeChild: d = false, disableFocusListener: u = false, disableHoverListener: p = false, disableInteractive: g = false, disableTouchListener: f = false, enterDelay: h = 100, enterNextDelay: m = 0, enterTouchDelay: v = 700, followCursor: x = false, id: _, leaveDelay: S = 0, leaveTouchDelay: j = 1500, onClose: M, onOpen: w, open: $, placement: R = "bottom", PopperComponent: T, PopperProps: F = {}, slotProps: z = {}, slots: q = {}, title: B, TransitionComponent: Y, TransitionProps: Z, ...W } = r, N = y.isValidElement(s) ? s : c.jsx("span", {
      children: s
    }), C = lr(), I = Wr(), [E, L] = y.useState(), [re, J] = y.useState(null), ye = y.useRef(false), he = g || x, le = fn(), Re = fn(), ae = fn(), X = fn(), [at, Le] = ti({
      controlled: $,
      default: false,
      name: "Tooltip",
      state: "open"
    });
    let ie = at;
    const _e = Mr(_), be = y.useRef(), bt = wn(() => {
      be.current !== void 0 && (document.body.style.WebkitUserSelect = be.current, be.current = void 0), X.clear();
    });
    y.useEffect(() => bt, [
      bt
    ]);
    const Rt = (G) => {
      Ro.clear(), Vn = true, Le(true), w && !ie && w(G);
    }, ct = wn((G) => {
      Ro.start(800 + S, () => {
        Vn = false;
      }), Le(false), M && ie && M(G), le.start(C.transitions.duration.shortest, () => {
        ye.current = false;
      });
    }), vt = (G) => {
      ye.current && G.type !== "touchstart" || (E && E.removeAttribute("title"), Re.clear(), ae.clear(), h || Vn && m ? Re.start(Vn ? m : h, () => {
        Rt(G);
      }) : Rt(G));
    }, Mt = (G) => {
      Re.clear(), ae.start(S, () => {
        ct(G);
      });
    }, [, Ue] = y.useState(false), He = (G) => {
      uo(G.target) || (Ue(false), Mt(G));
    }, qe = (G) => {
      E || L(G.currentTarget), uo(G.target) && (Ue(true), vt(G));
    }, Ye = (G) => {
      ye.current = true;
      const A = N.props;
      A.onTouchStart && A.onTouchStart(G);
    }, $t = (G) => {
      Ye(G), ae.clear(), le.clear(), bt(), be.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", X.start(v, () => {
        document.body.style.WebkitUserSelect = be.current, vt(G);
      });
    }, At = (G) => {
      N.props.onTouchEnd && N.props.onTouchEnd(G), bt(), ae.start(j, () => {
        ct(G);
      });
    };
    y.useEffect(() => {
      if (!ie) return;
      function G(A) {
        A.key === "Escape" && ct(A);
      }
      return document.addEventListener("keydown", G), () => {
        document.removeEventListener("keydown", G);
      };
    }, [
      ct,
      ie
    ]);
    const It = _n(as(N), L, n);
    !B && B !== 0 && (ie = false);
    const tt = y.useRef(), Pt = (G) => {
      const A = N.props;
      A.onMouseMove && A.onMouseMove(G), rn = {
        x: G.clientX,
        y: G.clientY
      }, tt.current && tt.current.update();
    }, Ft = {}, en = typeof B == "string";
    d ? (Ft.title = !ie && en && !p ? B : null, Ft["aria-describedby"] = ie ? _e : null) : (Ft["aria-label"] = en ? B : null, Ft["aria-labelledby"] = ie && !en ? _e : null);
    const Be = {
      ...Ft,
      ...W,
      ...N.props,
      className: fe(W.className, N.props.className),
      onTouchStart: Ye,
      ref: It,
      ...x ? {
        onMouseMove: Pt
      } : {}
    }, Tt = {};
    f || (Be.onTouchStart = $t, Be.onTouchEnd = At), p || (Be.onMouseOver = Wn(vt, Be.onMouseOver), Be.onMouseLeave = Wn(Mt, Be.onMouseLeave), he || (Tt.onMouseOver = vt, Tt.onMouseLeave = Mt)), u || (Be.onFocus = Wn(qe, Be.onFocus), Be.onBlur = Wn(He, Be.onBlur), he || (Tt.onFocus = qe, Tt.onBlur = He));
    const nt = {
      ...r,
      isRtl: I,
      arrow: o,
      disableInteractive: he,
      placement: R,
      PopperComponentProp: T,
      touch: ye.current
    }, rt = typeof z.popper == "function" ? z.popper(nt) : z.popper, Vt = y.useMemo(() => {
      var _a2, _b;
      let G = [
        {
          name: "arrow",
          enabled: !!re,
          options: {
            element: re,
            padding: 4
          }
        }
      ];
      return ((_a2 = F.popperOptions) == null ? void 0 : _a2.modifiers) && (G = G.concat(F.popperOptions.modifiers)), ((_b = rt == null ? void 0 : rt.popperOptions) == null ? void 0 : _b.modifiers) && (G = G.concat(rt.popperOptions.modifiers)), {
        ...F.popperOptions,
        ...rt == null ? void 0 : rt.popperOptions,
        modifiers: G
      };
    }, [
      re,
      F.popperOptions,
      rt == null ? void 0 : rt.popperOptions
    ]), Wt = wa(nt), Pn = typeof z.transition == "function" ? z.transition(nt) : z.transition, Dt = {
      slots: {
        popper: l.Popper,
        transition: l.Transition ?? Y,
        tooltip: l.Tooltip,
        arrow: l.Arrow,
        ...q
      },
      slotProps: {
        arrow: z.arrow ?? a.arrow,
        popper: {
          ...F,
          ...rt ?? a.popper
        },
        tooltip: z.tooltip ?? a.tooltip,
        transition: {
          ...Z,
          ...Pn ?? a.transition
        }
      }
    }, [Gt, Fn] = Me("popper", {
      elementType: Ca,
      externalForwardedProps: Dt,
      ownerState: nt,
      className: fe(Wt.popper, F == null ? void 0 : F.className)
    }), [fr, lo] = Me("transition", {
      elementType: cs,
      externalForwardedProps: Dt,
      ownerState: nt
    }), [zt, pr] = Me("tooltip", {
      elementType: Sa,
      className: Wt.tooltip,
      externalForwardedProps: Dt,
      ownerState: nt
    }), [Tn, Dn] = Me("arrow", {
      elementType: ja,
      className: Wt.arrow,
      externalForwardedProps: Dt,
      ownerState: nt,
      ref: J
    });
    return c.jsxs(y.Fragment, {
      children: [
        y.cloneElement(N, Be),
        c.jsx(Gt, {
          as: T ?? ws,
          placement: R,
          anchorEl: x ? {
            getBoundingClientRect: () => ({
              top: rn.y,
              left: rn.x,
              right: rn.x,
              bottom: rn.y,
              width: 0,
              height: 0
            })
          } : E,
          popperRef: tt,
          open: E ? ie : false,
          id: _e,
          transition: true,
          ...Tt,
          ...Fn,
          popperOptions: Vt,
          children: ({ TransitionProps: G }) => c.jsx(fr, {
            timeout: C.transitions.duration.shorter,
            ...G,
            ...lo,
            children: c.jsxs(zt, {
              ...pr,
              children: [
                B,
                o ? c.jsx(Tn, {
                  ...Dn
                }) : null
              ]
            })
          })
        })
      ]
    });
  }), Ss = y.createContext();
  function Ra(e) {
    return $e("MuiTable", e);
  }
  Ae("MuiTable", [
    "root",
    "stickyHeader"
  ]);
  const Ma = (e) => {
    const { classes: t, stickyHeader: n } = e;
    return Ce({
      root: [
        "root",
        n && "stickyHeader"
      ]
    }, Ra, t);
  }, $a = oe("table", {
    name: "MuiTable",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.stickyHeader && t.stickyHeader
      ];
    }
  })(je(({ theme: e }) => ({
    display: "table",
    width: "100%",
    borderCollapse: "collapse",
    borderSpacing: 0,
    "& caption": {
      ...e.typography.body2,
      padding: e.spacing(2),
      color: (e.vars || e).palette.text.secondary,
      textAlign: "left",
      captionSide: "bottom"
    },
    variants: [
      {
        props: ({ ownerState: t }) => t.stickyHeader,
        style: {
          borderCollapse: "separate"
        }
      }
    ]
  }))), Mo = "table", Aa = y.forwardRef(function(t, n) {
    const r = Se({
      props: t,
      name: "MuiTable"
    }), { className: o, component: s = Mo, padding: i = "normal", size: l = "medium", stickyHeader: a = false, ...d } = r, u = {
      ...r,
      component: s,
      padding: i,
      size: l,
      stickyHeader: a
    }, p = Ma(u), g = y.useMemo(() => ({
      padding: i,
      size: l,
      stickyHeader: a
    }), [
      i,
      l,
      a
    ]);
    return c.jsx(Ss.Provider, {
      value: g,
      children: c.jsx($a, {
        as: s,
        role: s === Mo ? null : "table",
        ref: n,
        className: fe(p.root, o),
        ownerState: u,
        ...d
      })
    });
  }), cr = y.createContext();
  function Ia(e) {
    return $e("MuiTableBody", e);
  }
  Ae("MuiTableBody", [
    "root"
  ]);
  const Pa = (e) => {
    const { classes: t } = e;
    return Ce({
      root: [
        "root"
      ]
    }, Ia, t);
  }, Fa = oe("tbody", {
    name: "MuiTableBody",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    display: "table-row-group"
  }), Ta = {
    variant: "body"
  }, $o = "tbody", Da = y.forwardRef(function(t, n) {
    const r = Se({
      props: t,
      name: "MuiTableBody"
    }), { className: o, component: s = $o, ...i } = r, l = {
      ...r,
      component: s
    }, a = Pa(l);
    return c.jsx(cr.Provider, {
      value: Ta,
      children: c.jsx(Fa, {
        className: fe(a.root, o),
        as: s,
        ref: n,
        role: s === $o ? null : "rowgroup",
        ownerState: l,
        ...i
      })
    });
  });
  function za(e) {
    return $e("MuiTableCell", e);
  }
  const Ea = Ae("MuiTableCell", [
    "root",
    "head",
    "body",
    "footer",
    "sizeSmall",
    "sizeMedium",
    "paddingCheckbox",
    "paddingNone",
    "alignLeft",
    "alignCenter",
    "alignRight",
    "alignJustify",
    "stickyHeader"
  ]), ka = (e) => {
    const { classes: t, variant: n, align: r, padding: o, size: s, stickyHeader: i } = e, l = {
      root: [
        "root",
        n,
        i && "stickyHeader",
        r !== "inherit" && `align${V(r)}`,
        o !== "normal" && `padding${V(o)}`,
        `size${V(s)}`
      ]
    };
    return Ce(l, za, t);
  }, Oa = oe("td", {
    name: "MuiTableCell",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        t[`size${V(n.size)}`],
        n.padding !== "normal" && t[`padding${V(n.padding)}`],
        n.align !== "inherit" && t[`align${V(n.align)}`],
        n.stickyHeader && t.stickyHeader
      ];
    }
  })(je(({ theme: e }) => ({
    ...e.typography.body2,
    display: "table-cell",
    verticalAlign: "inherit",
    borderBottom: e.vars ? `1px solid ${e.vars.palette.TableCell.border}` : `1px solid
    ${e.palette.mode === "light" ? ri(Fe(e.palette.divider, 1), 0.88) : oi(Fe(e.palette.divider, 1), 0.68)}`,
    textAlign: "left",
    padding: 16,
    variants: [
      {
        props: {
          variant: "head"
        },
        style: {
          color: (e.vars || e).palette.text.primary,
          lineHeight: e.typography.pxToRem(24),
          fontWeight: e.typography.fontWeightMedium
        }
      },
      {
        props: {
          variant: "body"
        },
        style: {
          color: (e.vars || e).palette.text.primary
        }
      },
      {
        props: {
          variant: "footer"
        },
        style: {
          color: (e.vars || e).palette.text.secondary,
          lineHeight: e.typography.pxToRem(21),
          fontSize: e.typography.pxToRem(12)
        }
      },
      {
        props: {
          size: "small"
        },
        style: {
          padding: "6px 16px",
          [`&.${Ea.paddingCheckbox}`]: {
            width: 24,
            padding: "0 12px 0 16px",
            "& > *": {
              padding: 0
            }
          }
        }
      },
      {
        props: {
          padding: "checkbox"
        },
        style: {
          width: 48,
          padding: "0 0 0 4px"
        }
      },
      {
        props: {
          padding: "none"
        },
        style: {
          padding: 0
        }
      },
      {
        props: {
          align: "left"
        },
        style: {
          textAlign: "left"
        }
      },
      {
        props: {
          align: "center"
        },
        style: {
          textAlign: "center"
        }
      },
      {
        props: {
          align: "right"
        },
        style: {
          textAlign: "right",
          flexDirection: "row-reverse"
        }
      },
      {
        props: {
          align: "justify"
        },
        style: {
          textAlign: "justify"
        }
      },
      {
        props: ({ ownerState: t }) => t.stickyHeader,
        style: {
          position: "sticky",
          top: 0,
          zIndex: 2,
          backgroundColor: (e.vars || e).palette.background.default
        }
      }
    ]
  }))), wt = y.forwardRef(function(t, n) {
    const r = Se({
      props: t,
      name: "MuiTableCell"
    }), { align: o = "inherit", className: s, component: i, padding: l, scope: a, size: d, sortDirection: u, variant: p, ...g } = r, f = y.useContext(Ss), h = y.useContext(cr), m = h && h.variant === "head";
    let v;
    i ? v = i : v = m ? "th" : "td";
    let x = a;
    v === "td" ? x = void 0 : !x && m && (x = "col");
    const _ = p || h && h.variant, S = {
      ...r,
      align: o,
      component: v,
      padding: l || (f && f.padding ? f.padding : "normal"),
      size: d || (f && f.size ? f.size : "medium"),
      sortDirection: u,
      stickyHeader: _ === "head" && f && f.stickyHeader,
      variant: _
    }, j = ka(S);
    let M = null;
    return u && (M = u === "asc" ? "ascending" : "descending"), c.jsx(Oa, {
      as: v,
      ref: n,
      className: fe(j.root, s),
      "aria-sort": M,
      scope: x,
      ownerState: S,
      ...g
    });
  });
  function Na(e) {
    return $e("MuiTableContainer", e);
  }
  Ae("MuiTableContainer", [
    "root"
  ]);
  const La = (e) => {
    const { classes: t } = e;
    return Ce({
      root: [
        "root"
      ]
    }, Na, t);
  }, Ha = oe("div", {
    name: "MuiTableContainer",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    width: "100%",
    overflowX: "auto"
  }), Ba = y.forwardRef(function(t, n) {
    const r = Se({
      props: t,
      name: "MuiTableContainer"
    }), { className: o, component: s = "div", ...i } = r, l = {
      ...r,
      component: s
    }, a = La(l);
    return c.jsx(Ha, {
      ref: n,
      as: s,
      className: fe(a.root, o),
      ownerState: l,
      ...i
    });
  });
  function Va(e) {
    return $e("MuiTableHead", e);
  }
  Ae("MuiTableHead", [
    "root"
  ]);
  const Wa = (e) => {
    const { classes: t } = e;
    return Ce({
      root: [
        "root"
      ]
    }, Va, t);
  }, Ga = oe("thead", {
    name: "MuiTableHead",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    display: "table-header-group"
  }), Ua = {
    variant: "head"
  }, Ao = "thead", qa = y.forwardRef(function(t, n) {
    const r = Se({
      props: t,
      name: "MuiTableHead"
    }), { className: o, component: s = Ao, ...i } = r, l = {
      ...r,
      component: s
    }, a = Wa(l);
    return c.jsx(cr.Provider, {
      value: Ua,
      children: c.jsx(Ga, {
        as: s,
        className: fe(a.root, o),
        ref: n,
        role: s === Ao ? null : "rowgroup",
        ownerState: l,
        ...i
      })
    });
  });
  function Ya(e) {
    return $e("MuiToolbar", e);
  }
  Ae("MuiToolbar", [
    "root",
    "gutters",
    "regular",
    "dense"
  ]);
  const Ja = (e) => {
    const { classes: t, disableGutters: n, variant: r } = e;
    return Ce({
      root: [
        "root",
        !n && "gutters",
        r
      ]
    }, Ya, t);
  }, Ka = oe("div", {
    name: "MuiToolbar",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        !n.disableGutters && t.gutters,
        t[n.variant]
      ];
    }
  })(je(({ theme: e }) => ({
    position: "relative",
    display: "flex",
    alignItems: "center",
    variants: [
      {
        props: ({ ownerState: t }) => !t.disableGutters,
        style: {
          paddingLeft: e.spacing(2),
          paddingRight: e.spacing(2),
          [e.breakpoints.up("sm")]: {
            paddingLeft: e.spacing(3),
            paddingRight: e.spacing(3)
          }
        }
      },
      {
        props: {
          variant: "dense"
        },
        style: {
          minHeight: 48
        }
      },
      {
        props: {
          variant: "regular"
        },
        style: e.mixins.toolbar
      }
    ]
  }))), js = y.forwardRef(function(t, n) {
    const r = Se({
      props: t,
      name: "MuiToolbar"
    }), { className: o, component: s = "div", disableGutters: i = false, variant: l = "regular", ...a } = r, d = {
      ...r,
      component: s,
      disableGutters: i,
      variant: l
    }, u = Ja(d);
    return c.jsx(Ka, {
      as: s,
      className: fe(u.root, o),
      ref: n,
      ownerState: d,
      ...a
    });
  }), Xa = ge(c.jsx("path", {
    d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
  }), "KeyboardArrowLeft"), Qa = ge(c.jsx("path", {
    d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
  }), "KeyboardArrowRight"), Za = y.forwardRef(function(t, n) {
    const { backIconButtonProps: r, count: o, disabled: s = false, getItemAriaLabel: i, nextIconButtonProps: l, onPageChange: a, page: d, rowsPerPage: u, showFirstButton: p, showLastButton: g, slots: f = {}, slotProps: h = {}, ...m } = t, v = Wr(), x = (L) => {
      a(L, 0);
    }, _ = (L) => {
      a(L, d - 1);
    }, S = (L) => {
      a(L, d + 1);
    }, j = (L) => {
      a(L, Math.max(0, Math.ceil(o / u) - 1));
    }, M = f.firstButton ?? we, w = f.lastButton ?? we, $ = f.nextButton ?? we, R = f.previousButton ?? we, T = f.firstButtonIcon ?? la, F = f.lastButtonIcon ?? aa, z = f.nextButtonIcon ?? Qa, q = f.previousButtonIcon ?? Xa, B = v ? w : M, Y = v ? $ : R, Z = v ? R : $, W = v ? M : w, N = v ? h.lastButton : h.firstButton, C = v ? h.nextButton : h.previousButton, I = v ? h.previousButton : h.nextButton, E = v ? h.firstButton : h.lastButton;
    return c.jsxs("div", {
      ref: n,
      ...m,
      children: [
        p && c.jsx(B, {
          onClick: x,
          disabled: s || d === 0,
          "aria-label": i("first", d),
          title: i("first", d),
          ...N,
          children: v ? c.jsx(F, {
            ...h.lastButtonIcon
          }) : c.jsx(T, {
            ...h.firstButtonIcon
          })
        }),
        c.jsx(Y, {
          onClick: _,
          disabled: s || d === 0,
          color: "inherit",
          "aria-label": i("previous", d),
          title: i("previous", d),
          ...C ?? r,
          children: v ? c.jsx(z, {
            ...h.nextButtonIcon
          }) : c.jsx(q, {
            ...h.previousButtonIcon
          })
        }),
        c.jsx(Z, {
          onClick: S,
          disabled: s || (o !== -1 ? d >= Math.ceil(o / u) - 1 : false),
          color: "inherit",
          "aria-label": i("next", d),
          title: i("next", d),
          ...I ?? l,
          children: v ? c.jsx(q, {
            ...h.previousButtonIcon
          }) : c.jsx(z, {
            ...h.nextButtonIcon
          })
        }),
        g && c.jsx(W, {
          onClick: j,
          disabled: s || d >= Math.ceil(o / u) - 1,
          "aria-label": i("last", d),
          title: i("last", d),
          ...E,
          children: v ? c.jsx(T, {
            ...h.firstButtonIcon
          }) : c.jsx(F, {
            ...h.lastButtonIcon
          })
        })
      ]
    });
  });
  function ec(e) {
    return $e("MuiTablePagination", e);
  }
  const bn = Ae("MuiTablePagination", [
    "root",
    "toolbar",
    "spacer",
    "selectLabel",
    "selectRoot",
    "select",
    "selectIcon",
    "input",
    "menuItem",
    "displayedRows",
    "actions"
  ]);
  var Io;
  const tc = oe(wt, {
    name: "MuiTablePagination",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })(je(({ theme: e }) => ({
    overflow: "auto",
    color: (e.vars || e).palette.text.primary,
    fontSize: e.typography.pxToRem(14),
    "&:last-child": {
      padding: 0
    }
  }))), nc = oe(js, {
    name: "MuiTablePagination",
    slot: "Toolbar",
    overridesResolver: (e, t) => ({
      [`& .${bn.actions}`]: t.actions,
      ...t.toolbar
    })
  })(je(({ theme: e }) => ({
    minHeight: 52,
    paddingRight: 2,
    [`${e.breakpoints.up("xs")} and (orientation: landscape)`]: {
      minHeight: 52
    },
    [e.breakpoints.up("sm")]: {
      minHeight: 52,
      paddingRight: 2
    },
    [`& .${bn.actions}`]: {
      flexShrink: 0,
      marginLeft: 20
    }
  }))), rc = oe("div", {
    name: "MuiTablePagination",
    slot: "Spacer",
    overridesResolver: (e, t) => t.spacer
  })({
    flex: "1 1 100%"
  }), oc = oe("p", {
    name: "MuiTablePagination",
    slot: "SelectLabel",
    overridesResolver: (e, t) => t.selectLabel
  })(je(({ theme: e }) => ({
    ...e.typography.body2,
    flexShrink: 0
  }))), sc = oe(ot, {
    name: "MuiTablePagination",
    slot: "Select",
    overridesResolver: (e, t) => ({
      [`& .${bn.selectIcon}`]: t.selectIcon,
      [`& .${bn.select}`]: t.select,
      ...t.input,
      ...t.selectRoot
    })
  })({
    color: "inherit",
    fontSize: "inherit",
    flexShrink: 0,
    marginRight: 32,
    marginLeft: 8,
    [`& .${bn.select}`]: {
      paddingLeft: 8,
      paddingRight: 24,
      textAlign: "right",
      textAlignLast: "right"
    }
  }), ic = oe(ne, {
    name: "MuiTablePagination",
    slot: "MenuItem",
    overridesResolver: (e, t) => t.menuItem
  })({}), lc = oe("p", {
    name: "MuiTablePagination",
    slot: "DisplayedRows",
    overridesResolver: (e, t) => t.displayedRows
  })(je(({ theme: e }) => ({
    ...e.typography.body2,
    flexShrink: 0
  })));
  function ac({ from: e, to: t, count: n }) {
    return `${e}\u2013${t} of ${n !== -1 ? n : `more than ${t}`}`;
  }
  function cc(e) {
    return `Go to ${e} page`;
  }
  const uc = (e) => {
    const { classes: t } = e;
    return Ce({
      root: [
        "root"
      ],
      toolbar: [
        "toolbar"
      ],
      spacer: [
        "spacer"
      ],
      selectLabel: [
        "selectLabel"
      ],
      select: [
        "select"
      ],
      input: [
        "input"
      ],
      selectIcon: [
        "selectIcon"
      ],
      menuItem: [
        "menuItem"
      ],
      displayedRows: [
        "displayedRows"
      ],
      actions: [
        "actions"
      ]
    }, ec, t);
  }, dc = y.forwardRef(function(t, n) {
    const r = Se({
      props: t,
      name: "MuiTablePagination"
    }), { ActionsComponent: o = Za, backIconButtonProps: s, colSpan: i, component: l = wt, count: a, disabled: d = false, getItemAriaLabel: u = cc, labelDisplayedRows: p = ac, labelRowsPerPage: g = "Rows per page:", nextIconButtonProps: f, onPageChange: h, onRowsPerPageChange: m, page: v, rowsPerPage: x, rowsPerPageOptions: _ = [
      10,
      25,
      50,
      100
    ], SelectProps: S = {}, showFirstButton: j = false, showLastButton: M = false, slotProps: w = {}, slots: $ = {}, ...R } = r, T = r, F = uc(T), z = (w == null ? void 0 : w.select) ?? S, q = z.native ? "option" : ic;
    let B;
    (l === wt || l === "td") && (B = i || 1e3);
    const Y = Mr(z.id), Z = Mr(z.labelId), W = () => a === -1 ? (v + 1) * x : x === -1 ? a : Math.min(a, (v + 1) * x), N = {
      slots: $,
      slotProps: w
    }, [C, I] = Me("root", {
      ref: n,
      className: F.root,
      elementType: tc,
      externalForwardedProps: {
        ...N,
        component: l,
        ...R
      },
      ownerState: T,
      additionalProps: {
        colSpan: B
      }
    }), [E, L] = Me("toolbar", {
      className: F.toolbar,
      elementType: nc,
      externalForwardedProps: N,
      ownerState: T
    }), [re, J] = Me("spacer", {
      className: F.spacer,
      elementType: rc,
      externalForwardedProps: N,
      ownerState: T
    }), [ye, he] = Me("selectLabel", {
      className: F.selectLabel,
      elementType: oc,
      externalForwardedProps: N,
      ownerState: T,
      additionalProps: {
        id: Z
      }
    }), [le, Re] = Me("select", {
      className: F.select,
      elementType: sc,
      externalForwardedProps: N,
      ownerState: T
    }), [ae, X] = Me("menuItem", {
      className: F.menuItem,
      elementType: q,
      externalForwardedProps: N,
      ownerState: T
    }), [at, Le] = Me("displayedRows", {
      className: F.displayedRows,
      elementType: lc,
      externalForwardedProps: N,
      ownerState: T
    });
    return c.jsx(C, {
      ...I,
      children: c.jsxs(E, {
        ...L,
        children: [
          c.jsx(re, {
            ...J
          }),
          _.length > 1 && c.jsx(ye, {
            ...he,
            children: g
          }),
          _.length > 1 && c.jsx(le, {
            variant: "standard",
            ...!z.variant && {
              input: Io || (Io = c.jsx(si, {}))
            },
            value: x,
            onChange: m,
            id: Y,
            labelId: Z,
            ...z,
            classes: {
              ...z.classes,
              root: fe(F.input, F.selectRoot, (z.classes || {}).root),
              select: fe(F.select, (z.classes || {}).select),
              icon: fe(F.selectIcon, (z.classes || {}).icon)
            },
            disabled: d,
            ...Re,
            children: _.map((ie) => y.createElement(ae, {
              ...X,
              key: ie.label ? ie.label : ie,
              value: ie.value ? ie.value : ie
            }, ie.label ? ie.label : ie))
          }),
          c.jsx(at, {
            ...Le,
            children: p({
              from: a === 0 ? 0 : v * x + 1,
              to: W(),
              count: a === -1 ? -1 : a,
              page: v
            })
          }),
          c.jsx(o, {
            className: F.actions,
            backIconButtonProps: s,
            count: a,
            nextIconButtonProps: f,
            onPageChange: h,
            page: v,
            rowsPerPage: x,
            showFirstButton: j,
            showLastButton: M,
            slotProps: w.actions,
            slots: $.actions,
            getItemAriaLabel: u,
            disabled: d
          })
        ]
      })
    });
  });
  function fc(e) {
    return $e("MuiTableRow", e);
  }
  const Po = Ae("MuiTableRow", [
    "root",
    "selected",
    "hover",
    "head",
    "footer"
  ]), pc = (e) => {
    const { classes: t, selected: n, hover: r, head: o, footer: s } = e;
    return Ce({
      root: [
        "root",
        n && "selected",
        r && "hover",
        o && "head",
        s && "footer"
      ]
    }, fc, t);
  }, gc = oe("tr", {
    name: "MuiTableRow",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.head && t.head,
        n.footer && t.footer
      ];
    }
  })(je(({ theme: e }) => ({
    color: "inherit",
    display: "table-row",
    verticalAlign: "middle",
    outline: 0,
    [`&.${Po.hover}:hover`]: {
      backgroundColor: (e.vars || e).palette.action.hover
    },
    [`&.${Po.selected}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Fe(e.palette.primary.main, e.palette.action.selectedOpacity),
      "&:hover": {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Fe(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
      }
    }
  }))), Fo = "tr", on = y.forwardRef(function(t, n) {
    const r = Se({
      props: t,
      name: "MuiTableRow"
    }), { className: o, component: s = Fo, hover: i = false, selected: l = false, ...a } = r, d = y.useContext(cr), u = {
      ...r,
      component: s,
      hover: i,
      selected: l,
      head: d && d.variant === "head",
      footer: d && d.variant === "footer"
    }, p = pc(u);
    return c.jsx(gc, {
      as: s,
      ref: n,
      className: fe(p.root, o),
      role: s === Fo ? null : "row",
      ownerState: u,
      ...a
    });
  }), hc = ge(c.jsx("path", {
    d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
  }), "ArrowDownward");
  function mc(e) {
    return $e("MuiTableSortLabel", e);
  }
  const gr = Ae("MuiTableSortLabel", [
    "root",
    "active",
    "icon",
    "iconDirectionDesc",
    "iconDirectionAsc",
    "directionDesc",
    "directionAsc"
  ]), yc = (e) => {
    const { classes: t, direction: n, active: r } = e, o = {
      root: [
        "root",
        r && "active",
        `direction${V(n)}`
      ],
      icon: [
        "icon",
        `iconDirection${V(n)}`
      ]
    };
    return Ce(o, mc, t);
  }, bc = oe(Rr, {
    name: "MuiTableSortLabel",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.active && t.active
      ];
    }
  })(je(({ theme: e }) => ({
    cursor: "pointer",
    display: "inline-flex",
    justifyContent: "flex-start",
    flexDirection: "inherit",
    alignItems: "center",
    "&:focus": {
      color: (e.vars || e).palette.text.secondary
    },
    "&:hover": {
      color: (e.vars || e).palette.text.secondary,
      [`& .${gr.icon}`]: {
        opacity: 0.5
      }
    },
    [`&.${gr.active}`]: {
      color: (e.vars || e).palette.text.primary,
      [`& .${gr.icon}`]: {
        opacity: 1,
        color: (e.vars || e).palette.text.secondary
      }
    }
  }))), vc = oe("span", {
    name: "MuiTableSortLabel",
    slot: "Icon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.icon,
        t[`iconDirection${V(n.direction)}`]
      ];
    }
  })(je(({ theme: e }) => ({
    fontSize: 18,
    marginRight: 4,
    marginLeft: 4,
    opacity: 0,
    transition: e.transitions.create([
      "opacity",
      "transform"
    ], {
      duration: e.transitions.duration.shorter
    }),
    userSelect: "none",
    variants: [
      {
        props: {
          direction: "desc"
        },
        style: {
          transform: "rotate(0deg)"
        }
      },
      {
        props: {
          direction: "asc"
        },
        style: {
          transform: "rotate(180deg)"
        }
      }
    ]
  }))), xc = y.forwardRef(function(t, n) {
    const r = Se({
      props: t,
      name: "MuiTableSortLabel"
    }), { active: o = false, children: s, className: i, direction: l = "asc", hideSortIcon: a = false, IconComponent: d = hc, slots: u = {}, slotProps: p = {}, ...g } = r, f = {
      ...r,
      active: o,
      direction: l,
      hideSortIcon: a,
      IconComponent: d
    }, h = yc(f), m = {
      slots: u,
      slotProps: p
    }, [v, x] = Me("root", {
      elementType: bc,
      externalForwardedProps: m,
      ownerState: f,
      className: fe(h.root, i),
      ref: n
    }), [_, S] = Me("icon", {
      elementType: vc,
      externalForwardedProps: m,
      ownerState: f,
      className: h.icon
    });
    return c.jsxs(v, {
      disableRipple: true,
      component: "span",
      ...x,
      ...g,
      children: [
        s,
        a && !o ? null : c.jsx(_, {
          as: d,
          ...S
        })
      ]
    });
  }), Rs = ge(c.jsx("path", {
    d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
  }), "Add"), Ms = ge(c.jsx("path", {
    d: "m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8z"
  }), "ArrowDownward"), $s = ge(c.jsx("path", {
    d: "m4 12 1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8z"
  }), "ArrowUpward"), _c = ge(c.jsx("path", {
    d: "M7.5 5.6 10 7 8.6 4.5 10 2 7.5 3.4 5 2l1.4 2.5L5 7zm12 9.8L17 14l1.4 2.5L17 19l2.5-1.4L22 19l-1.4-2.5L22 14zM22 2l-2.5 1.4L17 2l1.4 2.5L17 7l2.5-1.4L22 7l-1.4-2.5zm-7.63 5.29a.996.996 0 0 0-1.41 0L1.29 18.96c-.39.39-.39 1.02 0 1.41l2.34 2.34c.39.39 1.02.39 1.41 0L16.7 11.05c.39-.39.39-1.02 0-1.41zm-1.03 5.49-2.12-2.12 2.44-2.44 2.12 2.12z"
  }), "AutoFixHigh"), To = ge(c.jsx("path", {
    d: "M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
  }), "Check"), wc = ge(c.jsx("path", {
    d: "M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2m-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"
  }), "DragIndicator"), Cc = ge(c.jsx("path", {
    d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"
  }), "Edit"), Sc = ge(c.jsx("path", {
    d: "M10 18h4v-2h-4zM3 6v2h18V6zm3 7h12v-2H6z"
  }), "FilterList"), Do = ge(c.jsx("path", {
    d: "M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42M10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5"
  }), "FormatBold"), zo = ge(c.jsx("path", {
    d: "M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"
  }), "FormatItalic"), jc = ge(c.jsx("path", {
    d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"
  }), "MoreVert"), Rc = ge(c.jsx("path", {
    d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"
  }), "Refresh"), pn = ge(c.jsx("path", {
    d: "M12 5V2L8 6l4 4V7c3.31 0 6 2.69 6 6 0 2.97-2.17 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93 0-4.42-3.58-8-8-8m-6 8c0-1.65.67-3.15 1.76-4.24L6.34 7.34C4.9 8.79 4 10.79 4 13c0 4.08 3.05 7.44 7 7.93v-2.02c-2.83-.48-5-2.94-5-5.91"
  }), "RestartAlt"), As = ge(c.jsx("path", {
    d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"
  }), "Search"), Mc = ge(c.jsx("path", {
    d: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"
  }), "Settings"), $c = ge(c.jsx("path", {
    d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"
  }), "Visibility"), Is = ge(c.jsx("path", {
    d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7M2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2m4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3z"
  }), "VisibilityOff"), vn = {
    string: "#2196f3",
    number: "#4caf50",
    boolean: "#ff9800",
    date: "#9c27b0",
    null: "#9e9e9e",
    object: "#795548",
    array: "#00bcd4",
    mixed: "#f44336"
  }, Eo = "b64:";
  function Ac(e) {
    const t = new TextEncoder().encode(e);
    let n = "";
    for (let r = 0; r < t.length; r++) n += String.fromCharCode(t[r]);
    return btoa(n);
  }
  function Ic(e) {
    const t = atob(e), n = new Uint8Array(t.length);
    for (let r = 0; r < t.length; r++) n[r] = t.charCodeAt(r);
    return new TextDecoder().decode(n);
  }
  function Ps(e) {
    if (!e) return [];
    try {
      const t = e.startsWith(Eo) ? Ic(e.slice(Eo.length)) : e, n = JSON.parse(t);
      return Array.isArray(n) ? n : [];
    } catch {
      return [];
    }
  }
  function Pc({ columns: e, discoveredColumns: t, selectedPath: n, onSelect: r, onChange: o, onRefresh: s, loading: i }) {
    const [l, a] = y.useState(""), [d, u] = y.useState(null), [p, g] = y.useState(null), [f, h] = y.useState(false), m = y.useRef(0), v = y.useRef(/* @__PURE__ */ new Map()), x = !l, _ = y.useMemo(() => {
      if (!l) return e;
      const C = l.toLowerCase();
      return e.filter((I) => I.path.toLowerCase().includes(C) || I.headerName.toLowerCase().includes(C));
    }, [
      e,
      l
    ]), S = y.useMemo(() => e.filter((C) => C.visible).length, [
      e
    ]), j = y.useCallback((C) => {
      o(e.map((I) => I.path === C ? {
        ...I,
        visible: !I.visible
      } : I));
    }, [
      e,
      o
    ]), M = y.useCallback((C, I) => {
      C.stopPropagation(), j(I);
    }, [
      j
    ]), w = y.useCallback((C) => (I) => {
      I ? v.current.set(C, I) : v.current.delete(C);
    }, []), $ = y.useCallback((C) => {
      o(e.map((I) => ({
        ...I,
        visible: C
      })));
    }, [
      e,
      o
    ]), R = y.useCallback((C, I) => {
      C.dataTransfer.effectAllowed = "move", C.dataTransfer.setData("text/plain", I), u(I);
    }, []), T = y.useCallback((C, I) => {
      C.preventDefault(), m.current += 1, I !== d && g(I);
    }, [
      d
    ]), F = y.useCallback((C) => {
      C.preventDefault(), m.current -= 1, m.current <= 0 && (m.current = 0, g(null));
    }, []), z = y.useCallback((C) => {
      C.preventDefault(), C.dataTransfer.dropEffect = "move";
    }, []), q = y.useCallback((C, I) => {
      C.preventDefault(), m.current = 0, g(null), u(null);
      const E = C.dataTransfer.getData("text/plain");
      if (!E || E === I) return;
      const L = [
        ...e
      ], re = L.findIndex((le) => le.path === E), J = L.findIndex((le) => le.path === I);
      if (re === -1 || J === -1) return;
      const [ye] = L.splice(re, 1), he = re < J ? J - 1 : J;
      L.splice(he, 0, ye), o(L);
    }, [
      e,
      o
    ]), B = y.useCallback(() => {
      m.current = 0, u(null), g(null);
    }, []), Y = y.useCallback(() => {
      o(e.map((C) => ({
        path: C.path,
        visible: true,
        headerName: C.path.split(".").pop() || C.path
      }))), h(false);
    }, [
      e,
      o
    ]), Z = y.useCallback(() => {
      h(true);
    }, []), W = y.useCallback(() => {
      h(false);
    }, []), N = y.useCallback((C, I, E) => {
      var _a2, _b;
      switch (C.key) {
        case "Enter":
        case " ":
          C.preventDefault(), r(I.path);
          break;
        case "ArrowDown":
          if (C.preventDefault(), E < _.length - 1) {
            const L = _[E + 1].path;
            r(L), (_a2 = v.current.get(L)) == null ? void 0 : _a2.focus();
          }
          break;
        case "ArrowUp":
          if (C.preventDefault(), E > 0) {
            const L = _[E - 1].path;
            r(L), (_b = v.current.get(L)) == null ? void 0 : _b.focus();
          }
          break;
        case "v":
        case "V":
          C.preventDefault(), j(I.path);
          break;
      }
    }, [
      _,
      r,
      j
    ]);
    return c.jsxs(H, {
      sx: {
        display: "flex",
        flexDirection: "column",
        height: "100%"
      },
      children: [
        c.jsxs(js, {
          variant: "dense",
          sx: {
            borderBottom: 1,
            borderColor: "divider",
            gap: 0.5,
            px: 1.5,
            minHeight: 48
          },
          children: [
            c.jsx(ve, {
              size: "small",
              placeholder: b.t("json_table_search_columns"),
              value: l,
              onChange: (C) => a(C.target.value),
              slotProps: {
                input: {
                  startAdornment: c.jsx(Cs, {
                    position: "start",
                    children: c.jsx(As, {
                      fontSize: "small"
                    })
                  }),
                  "aria-label": b.t("json_table_search_columns")
                }
              },
              sx: {
                flexGrow: 1,
                minWidth: 0
              }
            }),
            c.jsx(ke, {
              title: b.t("json_table_refresh_columns"),
              children: c.jsx("span", {
                children: c.jsx(we, {
                  size: "small",
                  onClick: s,
                  disabled: i,
                  "aria-label": b.t("json_table_refresh_columns"),
                  children: c.jsx(Rc, {
                    fontSize: "small"
                  })
                })
              })
            }),
            c.jsx(ke, {
              title: b.t("json_table_show_all"),
              children: c.jsx(we, {
                size: "small",
                onClick: () => $(true),
                "aria-label": b.t("json_table_show_all"),
                children: c.jsx($c, {
                  fontSize: "small"
                })
              })
            }),
            c.jsx(ke, {
              title: b.t("json_table_hide_all"),
              children: c.jsx(we, {
                size: "small",
                onClick: () => $(false),
                "aria-label": b.t("json_table_hide_all"),
                children: c.jsx(Is, {
                  fontSize: "small"
                })
              })
            }),
            c.jsx(ke, {
              title: b.t("json_table_reset_all"),
              children: c.jsx(we, {
                size: "small",
                onClick: Z,
                "aria-label": b.t("json_table_reset_all"),
                children: c.jsx(pn, {
                  fontSize: "small"
                })
              })
            })
          ]
        }),
        c.jsx(H, {
          sx: {
            flexGrow: 1,
            overflow: "auto",
            p: 1.5,
            display: "flex",
            flexDirection: "column",
            gap: 0.75
          },
          children: _.length === 0 ? c.jsx(H, {
            sx: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              py: 4
            },
            children: c.jsx(P, {
              variant: "body2",
              color: "text.secondary",
              children: e.length === 0 ? b.t("json_table_no_columns") : b.t("json_table_no_search_results")
            })
          }) : _.map((C, I) => {
            const E = t.find((J) => J.path === C.path), L = n === C.path, re = (E == null ? void 0 : E.type) || "string";
            return c.jsx(ql, {
              ref: w(C.path),
              "data-column-path": C.path,
              onClick: () => r(C.path),
              onKeyDown: (J) => N(J, C, I),
              draggable: x,
              onDragStart: x ? (J) => R(J, C.path) : void 0,
              onDragEnter: x ? (J) => T(J, C.path) : void 0,
              onDragLeave: x ? F : void 0,
              onDragOver: x ? z : void 0,
              onDrop: x ? (J) => q(J, C.path) : void 0,
              onDragEnd: x ? B : void 0,
              variant: "outlined",
              tabIndex: 0,
              role: "button",
              "aria-selected": L,
              "aria-label": `${C.headerName || C.path}, ${re}, ${C.visible ? b.t("json_table_visible") : b.t("json_table_hidden")}`,
              sx: {
                p: 1,
                cursor: x ? "grab" : "pointer",
                flexShrink: 0,
                border: 2,
                borderColor: L ? "primary.main" : "divider",
                backgroundColor: L ? "action.selected" : "background.paper",
                opacity: d === C.path ? 0.4 : C.visible ? 1 : 0.55,
                borderTop: p === C.path ? "3px solid" : void 0,
                borderTopColor: p === C.path ? "primary.main" : void 0,
                "&:hover": {
                  backgroundColor: L ? "action.selected" : "action.hover"
                },
                "&:focus": {
                  outline: "2px solid",
                  outlineColor: "primary.main",
                  outlineOffset: "2px"
                },
                transition: "all 0.15s ease-in-out"
              },
              children: c.jsxs(H, {
                sx: {
                  display: "flex",
                  alignItems: "center",
                  gap: 1
                },
                children: [
                  x && c.jsx(wc, {
                    fontSize: "small",
                    sx: {
                      color: "text.disabled",
                      cursor: "grab",
                      flexShrink: 0
                    },
                    "aria-hidden": "true"
                  }),
                  c.jsx(Cn, {
                    checked: C.visible,
                    onClick: (J) => M(J, C.path),
                    size: "small",
                    sx: {
                      p: 0.5
                    },
                    inputProps: {
                      "aria-label": `${b.t("json_table_visible")}: ${C.headerName || C.path}`
                    }
                  }),
                  c.jsxs(H, {
                    sx: {
                      flexGrow: 1,
                      minWidth: 0
                    },
                    children: [
                      c.jsx(P, {
                        variant: "body2",
                        sx: {
                          fontWeight: 500,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          fontSize: "0.8rem"
                        },
                        title: C.path,
                        children: C.headerName || C.path
                      }),
                      C.headerName && C.headerName !== C.path && c.jsx(P, {
                        variant: "caption",
                        color: "text.secondary",
                        sx: {
                          fontFamily: "monospace",
                          fontSize: "0.65rem",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          display: "block"
                        },
                        title: C.path,
                        children: C.path
                      })
                    ]
                  }),
                  c.jsx(ht, {
                    label: re,
                    size: "small",
                    sx: {
                      backgroundColor: vn[re] || vn.string,
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: "0.65rem",
                      height: 20,
                      minWidth: 48,
                      flexShrink: 0
                    },
                    "aria-label": `${b.t("json_table_type")}: ${re}`
                  })
                ]
              })
            }, C.path);
          })
        }),
        e.length > 0 && c.jsx(H, {
          sx: {
            borderTop: 1,
            borderColor: "divider",
            px: 2,
            py: 1
          },
          children: c.jsxs(P, {
            variant: "caption",
            color: "text.secondary",
            "aria-live": "polite",
            "aria-atomic": "true",
            children: [
              S,
              " / ",
              e.length,
              " ",
              b.t("json_table_columns_visible")
            ]
          })
        }),
        c.jsxs(Gr, {
          open: f,
          onClose: W,
          "aria-labelledby": "reset-dialog-title",
          "aria-describedby": "reset-dialog-description",
          children: [
            c.jsx(Ur, {
              id: "reset-dialog-title",
              children: b.t("json_table_reset_all")
            }),
            c.jsx(qr, {
              children: c.jsx(Zl, {
                id: "reset-dialog-description",
                children: b.t("json_table_reset_confirm_message")
              })
            }),
            c.jsxs(Yr, {
              children: [
                c.jsx(st, {
                  onClick: W,
                  color: "primary",
                  children: b.t("cancel")
                }),
                c.jsx(st, {
                  onClick: Y,
                  color: "error",
                  variant: "contained",
                  autoFocus: true,
                  children: b.t("json_table_reset_all")
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function Qn(e) {
    return e == null ? "" : typeof e == "object" ? JSON.stringify(e) : typeof e == "string" ? e : `${e}`;
  }
  const Fc = 0, Tc = 20, ko = 2;
  function Dc(e) {
    if (e == null) return ko;
    const t = Number(e);
    return Number.isFinite(t) ? Math.max(Fc, Math.min(Tc, Math.floor(t))) : ko;
  }
  function Fs(e, t = {}) {
    const { prefix: n = "", suffix: r = "", thousands: o = false } = t, s = Dc(t.decimals);
    let i = e.toFixed(s);
    if (o) {
      const [l, a] = i.split("."), d = l.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      i = a !== void 0 ? `${d}.${a}` : d;
    }
    return `${n}${i}${r}`;
  }
  const zc = [
    {
      label: "YYYY-MM-DD",
      value: "yyyy-MM-dd"
    },
    {
      label: "DD.MM.YYYY",
      value: "dd.MM.yyyy"
    },
    {
      label: "DD.MM.YYYY HH:mm",
      value: "dd.MM.yyyy HH:mm"
    },
    {
      label: "DD.MM.YYYY HH:mm:ss",
      value: "dd.MM.yyyy HH:mm:ss"
    },
    {
      label: "MM/DD/YYYY",
      value: "MM/dd/yyyy"
    },
    {
      label: "MM/DD/YYYY HH:mm",
      value: "MM/dd/yyyy HH:mm"
    },
    {
      label: "HH:mm:ss",
      value: "HH:mm:ss"
    },
    {
      label: "HH:mm",
      value: "HH:mm"
    },
    {
      label: "ISO-8601 (UTC)",
      value: "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"
    }
  ];
  function Ec(e, t) {
    if (e == null) return "";
    if (typeof e == "number") {
      const o = new Date(e >= 1e11 ? e : e * 1e3);
      return isNaN(o.getTime()) ? "" : o.toISOString().slice(0, 10);
    }
    if (e instanceof Date) return isNaN(e.getTime()) ? "" : e.toISOString().slice(0, 10);
    if (typeof e != "string") return "";
    const n = e.trim();
    if (!n) return "";
    if (t == null ? void 0 : t.startsWith("dd.MM.yyyy")) {
      const o = n.match(/^(\d{2})\.(\d{2})\.(\d{4})/);
      return o ? `${o[3]}-${o[2]}-${o[1]}` : "";
    }
    if (t == null ? void 0 : t.startsWith("MM/dd/yyyy")) {
      const o = n.match(/^(\d{2})\/(\d{2})\/(\d{4})/);
      return o ? `${o[3]}-${o[1]}-${o[2]}` : "";
    }
    const r = new Date(n);
    return isNaN(r.getTime()) ? "" : r.toISOString().slice(0, 10);
  }
  function Tr(e, t) {
    if (e == null || e === "") return null;
    if (e instanceof Date) {
      const r = e.getTime();
      return isNaN(r) ? null : r;
    }
    if (typeof e == "number") {
      if (!Number.isFinite(e)) return null;
      const r = e >= 1e11 ? e : e * 1e3;
      return isNaN(new Date(r).getTime()) ? null : r;
    }
    if (typeof e != "string") return null;
    const n = e.trim();
    if (!n) return null;
    try {
      if (t == null ? void 0 : t.startsWith("dd.MM.yyyy")) {
        const s = n.match(/^(\d{2})\.(\d{2})\.(\d{4})(?:\s+(\d{2}):(\d{2})(?::(\d{2}))?)?/);
        if (s) {
          const i = new Date(parseInt(s[3], 10), parseInt(s[2], 10) - 1, parseInt(s[1], 10), parseInt(s[4] ?? "0", 10), parseInt(s[5] ?? "0", 10), parseInt(s[6] ?? "0", 10));
          return isNaN(i.getTime()) ? null : i.getTime();
        }
      }
      if (t == null ? void 0 : t.startsWith("MM/dd/yyyy")) {
        const s = n.match(/^(\d{2})\/(\d{2})\/(\d{4})(?:\s+(\d{2}):(\d{2})(?::(\d{2}))?)?/);
        if (s) {
          const i = new Date(parseInt(s[3], 10), parseInt(s[1], 10) - 1, parseInt(s[2], 10), parseInt(s[4] ?? "0", 10), parseInt(s[5] ?? "0", 10), parseInt(s[6] ?? "0", 10));
          return isNaN(i.getTime()) ? null : i.getTime();
        }
      }
      const r = n.match(/^(\d{4})-(\d{2})-(\d{2})$/);
      if (r) {
        const s = new Date(parseInt(r[1], 10), parseInt(r[2], 10) - 1, parseInt(r[3], 10));
        return isNaN(s.getTime()) ? null : s.getTime();
      }
      if (/^-?\d+$/.test(n)) {
        const s = parseInt(n, 10), i = s >= 1e11 ? s : s * 1e3;
        return isNaN(new Date(i).getTime()) ? null : i;
      }
      const o = new Date(n);
      return isNaN(o.getTime()) ? null : o.getTime();
    } catch {
      return null;
    }
  }
  function no(e, t, n) {
    if (e == null || e === "") return "";
    try {
      let r;
      if (typeof e == "string") {
        const a = e.trim();
        if (n == null ? void 0 : n.startsWith("dd.MM.yyyy")) {
          const d = a.match(/^(\d{2})\.(\d{2})\.(\d{4})(.*)$/);
          r = d ? /* @__PURE__ */ new Date(`${d[3]}-${d[2]}-${d[1]}${d[4] ?? ""}`) : new Date(a);
        } else if (n == null ? void 0 : n.startsWith("MM/dd/yyyy")) {
          const d = a.match(/^(\d{2})\/(\d{2})\/(\d{4})(.*)$/);
          r = d ? /* @__PURE__ */ new Date(`${d[3]}-${d[1]}-${d[2]}${d[4] ?? ""}`) : new Date(a);
        } else if (/^\d{4}-\d{2}-\d{2}$/.test(a)) {
          const [d, u, p] = a.split("-").map(Number);
          r = new Date(d, u - 1, p);
        } else r = new Date(a);
      } else if (typeof e == "number") r = new Date(e >= 1e11 ? e : e * 1e3);
      else if (e instanceof Date) r = e;
      else return Qn(e);
      if (isNaN(r.getTime())) return Qn(e);
      const o = t || "yyyy-MM-dd", s = (a, d = 2) => String(a).padStart(d, "0"), i = {
        yyyy: String(r.getFullYear()),
        MM: s(r.getMonth() + 1),
        dd: s(r.getDate()),
        HH: s(r.getHours()),
        mm: s(r.getMinutes()),
        ss: s(r.getSeconds()),
        SSS: s(r.getMilliseconds(), 3)
      };
      if (o === "yyyy-MM-dd'T'HH:mm:ss.SSSxxx" || /xxx$/.test(o)) return r.toISOString();
      let l = o;
      for (const [a, d] of Object.entries(i).sort((u, p) => p[0].length - u[0].length)) l = l.replaceAll(a, d);
      return l;
    } catch {
      return Qn(e);
    }
  }
  function Dr(e, t = "true", n = "false") {
    return typeof e == "boolean" ? e ? t : n : Qn(e);
  }
  function Ts(e, t) {
    let n = t.stringTrim ? e.trim() : e;
    if (t.stringRegex && t.stringRegex.length <= 200) try {
      const i = new RegExp(t.stringRegex, t.stringRegexFlags ?? ""), l = n.match(i);
      l && (n = l[t.stringRegexGroup ?? 0] ?? n);
    } catch {
    }
    t.stringCase === "upper" ? n = n.toUpperCase() : t.stringCase === "lower" ? n = n.toLowerCase() : t.stringCase === "title" && (n = n.replace(/\b\w/g, (s) => s.toUpperCase())), t.stringMaxLength && n.length > t.stringMaxLength && (n = `${n.slice(0, t.stringMaxLength)}\u2026`);
    const r = t.stringPrefix ?? "", o = t.stringSuffix ?? "";
    return r || o ? `${r}${n}${o}` : n;
  }
  function kc({ format: e, onChange: t, discoveredColumn: n }) {
    const r = y.useMemo(() => {
      if ((n == null ? void 0 : n.min) !== void 0 && typeof n.min == "number") {
        const o = typeof n.max == "number" ? n.max : 0;
        return n.min + (o - n.min) * 0.75;
      }
      return 1234.567;
    }, [
      n
    ]);
    return c.jsxs(c.Fragment, {
      children: [
        c.jsx(P, {
          variant: "caption",
          color: "text.secondary",
          sx: {
            fontWeight: 500
          },
          children: b.t("json_table_number_format")
        }),
        c.jsxs(H, {
          children: [
            c.jsxs(P, {
              variant: "caption",
              color: "text.secondary",
              gutterBottom: true,
              children: [
                b.t("json_table_number_decimals"),
                ": ",
                e.numberDecimals ?? 2
              ]
            }),
            c.jsx(bi, {
              value: e.numberDecimals ?? 2,
              onChange: (o, s) => t({
                type: "number",
                numberDecimals: s
              }),
              min: 0,
              max: 10,
              marks: true,
              step: 1,
              valueLabelDisplay: "auto",
              size: "small"
            })
          ]
        }),
        c.jsx(ve, {
          label: b.t("json_table_number_prefix"),
          value: e.numberPrefix || "",
          onChange: (o) => t({
            type: "number",
            numberPrefix: o.target.value
          }),
          size: "small",
          placeholder: "$, \u20AC, \xA3"
        }),
        c.jsx(ve, {
          label: b.t("json_table_number_suffix"),
          value: e.numberSuffix || "",
          onChange: (o) => t({
            type: "number",
            numberSuffix: o.target.value
          }),
          size: "small",
          placeholder: "%, kg, \xB0C"
        }),
        c.jsx(Nt, {
          control: c.jsx(hn, {
            checked: e.numberThousandsSeparator || false,
            onChange: (o) => t({
              type: "number",
              numberThousandsSeparator: o.target.checked
            }),
            size: "small"
          }),
          label: c.jsx(P, {
            variant: "body2",
            children: b.t("json_table_number_thousands")
          })
        }),
        c.jsxs(mt, {
          variant: "outlined",
          sx: {
            p: 1.5,
            bgcolor: "action.hover"
          },
          children: [
            c.jsx(P, {
              variant: "caption",
              color: "text.secondary",
              children: b.t("json_table_preview")
            }),
            c.jsxs(P, {
              variant: "body2",
              sx: {
                mt: 0.5,
                fontFamily: "monospace"
              },
              children: [
                r,
                " \u2192",
                " ",
                Fs(r, {
                  decimals: e.numberDecimals,
                  prefix: e.numberPrefix,
                  suffix: e.numberSuffix,
                  thousands: e.numberThousandsSeparator
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function Oc({ format: e, detectedFormat: t, onChange: n }) {
    return c.jsxs(c.Fragment, {
      children: [
        c.jsx(P, {
          variant: "caption",
          color: "text.secondary",
          sx: {
            fontWeight: 500
          },
          children: b.t("json_table_date_format")
        }),
        t && c.jsx(ve, {
          label: b.t("json_table_date_input_format"),
          value: t,
          disabled: true,
          size: "small",
          helperText: b.t("json_table_date_detected_hint")
        }),
        c.jsxs(ft, {
          fullWidth: true,
          size: "small",
          children: [
            c.jsx(pt, {
              children: b.t("json_table_date_output_format")
            }),
            c.jsx(ot, {
              label: b.t("json_table_date_output_format"),
              value: e.dateFormat || "yyyy-MM-dd",
              onChange: (r) => n({
                type: "date",
                dateFormat: r.target.value,
                dateInputFormat: t
              }),
              children: zc.map((r) => c.jsx(ne, {
                value: r.value,
                children: r.label
              }, r.value))
            })
          ]
        }),
        c.jsxs(mt, {
          variant: "outlined",
          sx: {
            p: 1.5,
            bgcolor: "action.hover"
          },
          children: [
            c.jsx(P, {
              variant: "caption",
              color: "text.secondary",
              children: b.t("json_table_preview")
            }),
            c.jsx(P, {
              variant: "body2",
              sx: {
                mt: 0.5,
                fontFamily: "monospace"
              },
              children: no(/* @__PURE__ */ new Date(), e.dateFormat || "yyyy-MM-dd")
            })
          ]
        })
      ]
    });
  }
  function Nc({ format: e, onChange: t }) {
    return c.jsxs(c.Fragment, {
      children: [
        c.jsx(P, {
          variant: "caption",
          color: "text.secondary",
          sx: {
            fontWeight: 500
          },
          children: b.t("json_table_boolean_format")
        }),
        c.jsx(ve, {
          label: b.t("json_table_boolean_true"),
          value: e.booleanTrue || "",
          onChange: (n) => t({
            type: "boolean",
            booleanTrue: n.target.value
          }),
          size: "small",
          placeholder: "Yes, On, \u2713, Active"
        }),
        c.jsx(ve, {
          label: b.t("json_table_boolean_false"),
          value: e.booleanFalse || "",
          onChange: (n) => t({
            type: "boolean",
            booleanFalse: n.target.value
          }),
          size: "small",
          placeholder: "No, Off, \u2717, Inactive"
        }),
        c.jsxs(mt, {
          variant: "outlined",
          sx: {
            p: 1.5,
            bgcolor: "action.hover"
          },
          children: [
            c.jsx(P, {
              variant: "caption",
              color: "text.secondary",
              children: b.t("json_table_preview")
            }),
            c.jsxs(De, {
              direction: "row",
              spacing: 2,
              sx: {
                mt: 0.5
              },
              children: [
                c.jsxs(P, {
                  variant: "body2",
                  sx: {
                    fontFamily: "monospace"
                  },
                  children: [
                    "true \u2192 ",
                    Dr(true, e.booleanTrue, e.booleanFalse)
                  ]
                }),
                c.jsxs(P, {
                  variant: "body2",
                  sx: {
                    fontFamily: "monospace"
                  },
                  children: [
                    "false \u2192 ",
                    Dr(false, e.booleanTrue, e.booleanFalse)
                  ]
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function Lc({ format: e, onChange: t }) {
    return c.jsxs(c.Fragment, {
      children: [
        c.jsx(P, {
          variant: "caption",
          color: "text.secondary",
          sx: {
            fontWeight: 500
          },
          children: b.t("json_table_string_format")
        }),
        c.jsxs(ft, {
          size: "small",
          fullWidth: true,
          children: [
            c.jsx(pt, {
              children: b.t("json_table_string_case")
            }),
            c.jsxs(ot, {
              label: b.t("json_table_string_case"),
              value: e.stringCase ?? "none",
              onChange: (n) => t({
                type: "string",
                stringCase: n.target.value
              }),
              children: [
                c.jsx(ne, {
                  value: "none",
                  children: b.t("json_table_string_case_none")
                }),
                c.jsx(ne, {
                  value: "upper",
                  children: b.t("json_table_string_case_upper")
                }),
                c.jsx(ne, {
                  value: "lower",
                  children: b.t("json_table_string_case_lower")
                }),
                c.jsx(ne, {
                  value: "title",
                  children: b.t("json_table_string_case_title")
                })
              ]
            })
          ]
        }),
        c.jsxs(De, {
          direction: "row",
          spacing: 1,
          children: [
            c.jsx(ve, {
              label: b.t("json_table_string_prefix"),
              value: e.stringPrefix ?? "",
              onChange: (n) => t({
                type: "string",
                stringPrefix: n.target.value || void 0
              }),
              size: "small",
              fullWidth: true
            }),
            c.jsx(ve, {
              label: b.t("json_table_string_suffix"),
              value: e.stringSuffix ?? "",
              onChange: (n) => t({
                type: "string",
                stringSuffix: n.target.value || void 0
              }),
              size: "small",
              fullWidth: true
            })
          ]
        }),
        c.jsx(Nt, {
          control: c.jsx(hn, {
            size: "small",
            checked: !!e.stringTrim,
            onChange: (n) => t({
              type: "string",
              stringTrim: n.target.checked
            })
          }),
          label: b.t("json_table_string_trim")
        }),
        c.jsx(ve, {
          label: b.t("json_table_string_max_length"),
          type: "number",
          value: e.stringMaxLength ?? "",
          onChange: (n) => t({
            type: "string",
            stringMaxLength: n.target.value ? parseInt(n.target.value, 10) : void 0
          }),
          size: "small",
          fullWidth: true,
          slotProps: {
            htmlInput: {
              min: 1
            }
          }
        }),
        c.jsx(ve, {
          label: b.t("json_table_string_regex"),
          value: e.stringRegex ?? "",
          onChange: (n) => t({
            type: "string",
            stringRegex: n.target.value || void 0
          }),
          size: "small",
          fullWidth: true,
          placeholder: "e.g. (\\d+)"
        }),
        e.stringRegex && c.jsxs(De, {
          direction: "row",
          spacing: 1,
          children: [
            c.jsx(ve, {
              label: b.t("json_table_string_regex_group"),
              type: "number",
              value: e.stringRegexGroup ?? 0,
              onChange: (n) => t({
                type: "string",
                stringRegexGroup: parseInt(n.target.value, 10) || 0
              }),
              size: "small",
              fullWidth: true,
              slotProps: {
                htmlInput: {
                  min: 0
                }
              }
            }),
            c.jsx(ve, {
              label: b.t("json_table_string_regex_flags"),
              value: e.stringRegexFlags ?? "",
              onChange: (n) => t({
                type: "string",
                stringRegexFlags: n.target.value || void 0
              }),
              size: "small",
              fullWidth: true,
              placeholder: "i, g, m \u2026"
            })
          ]
        }),
        c.jsx($r, {}),
        c.jsxs(De, {
          direction: "row",
          spacing: 1,
          flexWrap: "wrap",
          children: [
            c.jsx(Nt, {
              control: c.jsx(hn, {
                size: "small",
                checked: e.stringFontWeight === "bold",
                onChange: (n) => t({
                  type: "string",
                  stringFontWeight: n.target.checked ? "bold" : "normal"
                })
              }),
              label: c.jsx(P, {
                variant: "body2",
                fontWeight: "bold",
                children: b.t("json_table_string_font_weight")
              })
            }),
            c.jsx(Nt, {
              control: c.jsx(hn, {
                size: "small",
                checked: e.stringFontStyle === "italic",
                onChange: (n) => t({
                  type: "string",
                  stringFontStyle: n.target.checked ? "italic" : "normal"
                })
              }),
              label: c.jsx(P, {
                variant: "body2",
                fontStyle: "italic",
                children: b.t("json_table_string_font_style")
              })
            })
          ]
        }),
        c.jsxs(De, {
          direction: "row",
          spacing: 1,
          children: [
            c.jsx(ve, {
              label: b.t("json_table_string_font_size"),
              type: "number",
              value: e.stringFontSize ?? "",
              onChange: (n) => t({
                type: "string",
                stringFontSize: n.target.value ? parseInt(n.target.value, 10) : void 0
              }),
              size: "small",
              sx: {
                flex: 1
              },
              slotProps: {
                htmlInput: {
                  min: 8,
                  max: 72
                }
              },
              placeholder: "px"
            }),
            c.jsx(Ar, {
              label: b.t("json_table_string_text_color"),
              value: e.stringTextColor ?? "",
              onChange: (n) => t({
                type: "string",
                stringTextColor: n || void 0
              })
            })
          ]
        }),
        c.jsxs(mt, {
          variant: "outlined",
          sx: {
            p: 1.5,
            bgcolor: "action.hover"
          },
          children: [
            c.jsx(P, {
              variant: "caption",
              color: "text.secondary",
              children: b.t("json_table_preview")
            }),
            c.jsx(P, {
              variant: "body2",
              sx: {
                mt: 0.5,
                fontFamily: "monospace",
                fontWeight: e.stringFontWeight,
                fontStyle: e.stringFontStyle,
                ...e.stringFontSize && {
                  fontSize: `${e.stringFontSize}px`
                },
                ...e.stringTextColor && {
                  color: e.stringTextColor
                }
              },
              children: Ts("Hello World", e ?? {
                type: "string"
              })
            })
          ]
        })
      ]
    });
  }
  function ue(e) {
    if (Number.isNaN(e)) throw NaN;
    if (!e) return e;
    if (e && typeof e == "object") throw NaN;
    return e;
  }
  function Hc(e, t) {
    if (!Array.isArray(e) || e.length < t) throw {
      type: "Invalid Arguments"
    };
    return e;
  }
  function gt(e, t = 0) {
    if (!e || t === 1 / 0 || typeof e != "object") return e;
    if (Array.isArray(e)) {
      for (let n = 0; n < e.length; n++) if (typeof e[n] == "object" && e[n]) {
        if (t === 0) throw {
          type: "Exceeded Allowed Depth"
        };
        gt(e[n], t - 1);
      }
    } else {
      const n = Object.keys(e);
      for (let r = 0; r < n.length; r++) {
        const o = e[n[r]];
        if (typeof o == "object" && o) {
          if (t === 0) throw {
            type: "Exceeded Allowed Depth"
          };
          gt(o, t - 1);
        }
      }
    }
    return e;
  }
  function Bc(e, t, n) {
    if (n || (typeof e == "string" || e === null) && (typeof t == "string" || t === null)) return e;
    if (Number.isNaN(+ue(e)) && t !== null) throw NaN;
    if (Number.isNaN(+ue(t))) throw NaN;
    return t === null && !e ? null : e === null && !t ? 0 : e;
  }
  async function Vc(e, t) {
    const n = [];
    let r = 0;
    for (const o of e) await t(o, r++, e) && n.push(o);
    return n;
  }
  async function Wc(e, t) {
    let n = 0;
    for (const r of e) if (await t(r, n++, e)) return true;
    return false;
  }
  async function Gc(e, t) {
    let n = 0;
    for (const r of e) if (!await t(r, n++, e)) return false;
    return true;
  }
  async function Uc(e, t) {
    const n = [];
    let r = 0;
    for (const o of e) n.push(await t(o, r++, e));
    return n;
  }
  async function qc(e, t, n, r = 0) {
    if (e.length === 0) {
      if (typeof n < "u") return n;
      throw new Error("Array has no elements.");
    }
    const o = typeof n > "u" ? 1 : 0;
    let s = gt(o ? e[0] : n, r);
    for (let i = o; i < e.length; i++) s = gt(await t(s, e[i]), r);
    return s;
  }
  const rr = {
    filter: Vc,
    some: Wc,
    every: Gc,
    map: Uc,
    reduce: qc
  }, te = /* @__PURE__ */ Symbol.for("json_logic_sync"), Te = /* @__PURE__ */ Symbol.for("json_logic_compiled"), Ke = /* @__PURE__ */ Symbol.for("json_logic_original"), Oo = /* @__PURE__ */ Symbol.for("json_logic_unfound");
  function Bt(e) {
    return typeof e == "function" ? e[te] === true : Array.isArray(e) ? e.every(Bt) : !(e && e.asyncMethod && !e.method);
  }
  function Ds(e, t = true) {
    return e[te] = t, e;
  }
  function Rn(e) {
    return Array.isArray(e) ? e : [
      e
    ];
  }
  const hr = /* @__PURE__ */ new WeakMap();
  function No(e) {
    return !e || typeof e != "function" || !e.length ? 0 : (hr.has(e) || hr.set(e, Yc(e)), hr.get(e));
  }
  function Yc(e) {
    if (!e || typeof e != "function" || !e.length) return 0;
    let t = e.toString();
    return t[0] !== "(" && t[0] !== "f" || (t = t.substring(t.indexOf("("), t.indexOf("{")).replace(/=>/g, ""), /\.{3}|=/.test(t)) ? 0 : e.length;
  }
  function Jc(e, ...t) {
    let n = "";
    const r = this;
    for (let o = 0; o < e.length; o++) n += e[o], o < t.length && (typeof t[o] == "function" ? (this.methods.push(t[o]), Bt(t[o]) || (r.asyncDetected = true), n += (Bt(t[o]) ? "" : " await ") + "methods[" + (r.methods.length - 1) + "]") : t[o] && typeof t[o][Te] < "u" ? n += t[o][Te] : n += de(t[o], r));
    return {
      [Te]: n
    };
  }
  function Kc(e, t) {
    return typeof e == "number" && (e === 1 / 0 || e === -1 / 0 || Number.isNaN(e)) ? false : e == null || [
      "Number",
      "String",
      "Boolean"
    ].includes(e.constructor.name) || !t && e.constructor.name === "Object";
  }
  function or(e, t, n) {
    if (Array.isArray(e)) return e.every((r) => or(r, t, n));
    if (e && typeof e == "object") {
      const r = Object.keys(e)[0], o = e[r];
      if (t.isData(e, r) || r === void 0) return true;
      if (!t.methods[r]) throw {
        type: "Unknown Operator",
        key: r
      };
      return t.methods[r].lazy ? typeof t.methods[r].deterministic == "function" ? t.methods[r].deterministic(o, n) : t.methods[r].deterministic : typeof t.methods[r].deterministic == "function" ? t.methods[r].deterministic(o, n) : t.methods[r].deterministic && or(o, t, n);
    }
    return true;
  }
  function zr(e, t) {
    if (!t.async) return true;
    if (Array.isArray(e)) return e.every((n) => zr(n, t));
    if (e && typeof e == "object") {
      const n = Object.keys(e);
      if (n.length === 0) return true;
      const r = n[0], o = e[r];
      return Bt(t.methods[r]) ? t.methods[r].lazy ? !!(typeof t.methods[r][te] == "function" && t.methods[r][te](e, {
        engine: t
      })) : zr(o, t) : false;
    }
    return true;
  }
  function de(e, t = {}) {
    const { notTraversed: n = [], async: r, processing: o = [], values: s = [], engine: i } = t;
    function l(u, p = false) {
      return Kc(u, p) ? JSON.stringify(u) : (s.push(u), `values[${s.length - 1}]`);
    }
    if (Array.isArray(e)) {
      let u = "";
      for (let p = 0; p < e.length; p++) p > 0 && (u += ","), u += de(e[p], t);
      return "[" + u + "]";
    }
    let a = false;
    function d(u) {
      return t.asyncDetected = t.asyncDetected || a, r && a ? `await ${u}` : u;
    }
    if (e && typeof e == "object") {
      const u = Object.keys(e), p = u[0];
      if (!p) return l(e);
      if (!i.methods[p] || u.length > 1) {
        if (i.isData(e, p)) return l(e, true);
        throw {
          type: "Unknown Operator",
          key: p
        };
      }
      if (!t.engine.disableInline && i.methods[p] && or(e, i, t)) return zr(e, i) ? l((i.fallback || i).run(e), true) : t.avoidInlineAsync ? (t.asyncDetected = true, `(await ${l(i.run(e))})`) : (o.push(i.run(e).then((m) => l(m))), `__%%%${o.length - 1}%%%__`);
      let g = e[p];
      if ((!g || typeof g != "object") && !i.methods[p].lazy && (g = [
        g
      ]), i.methods[p] && i.methods[p].compile) {
        let m = i.methods[p].compile(g, t);
        if (m[Te] && (m = m[Te]), (m || "").startsWith("await") && (t.asyncDetected = true), m !== false) return m;
      }
      let f = i.methods[p].optimizeUnary ? "" : "coerceArray";
      !f && Array.isArray(g) && g.length === 1 && !Array.isArray(g[0]) ? g = g[0] : f && Array.isArray(g) && (f = "");
      const h = [
        ", context",
        ", context, above",
        ", context, above, engine"
      ];
      if (typeof i.methods[p] == "function") {
        a = !Bt(i.methods[p]);
        const m = h[No(i.methods[p]) - 1] || h[2];
        return d(`engine.methods["${p}"](${f}(` + de(g, t) + ")" + m + ")");
      } else {
        a = !!(r && i.methods[p] && i.methods[p].asyncMethod);
        const m = No(a ? i.methods[p].asyncMethod : i.methods[p].method);
        let v = h[m - 1] || h[2];
        return a && typeof i.methods[p][te] == "function" && i.methods[p][te](g, {
          engine: i
        }) && (a = false, v = v.replace("engine", "engine.fallback")), i.methods[p] && !i.methods[p].lazy ? d(`engine.methods["${p}"]${a ? ".asyncMethod" : ".method"}(${f}(` + de(g, t) + ")" + v + ")") : (n.push(g), d(`engine.methods["${p}"]${a ? ".asyncMethod" : ".method"}(notTraversed[${n.length - 1}]` + v + ")"));
      }
    }
    return l(e);
  }
  function sr(e, t = {}) {
    Object.assign(t, Object.assign({
      notTraversed: [],
      methods: [],
      state: {},
      processing: [],
      async: t.engine.async,
      asyncDetected: false,
      values: [],
      compile: Jc
    }, t));
    const n = de(e, t);
    return Xc(e, n, t);
  }
  function Xc(e, t, n) {
    const { engine: r, methods: o, notTraversed: s, processing: i = [], values: l } = n, a = [];
    i.forEach((u, p) => {
      t = t.replace(`__%%%${p}%%%__`, u);
    });
    const d = `(values, methods, notTraversed, asyncIterators, engine, above, coerceArray, precoerceNumber, assertSize, compareCheck, assertAllowedDepth) => ${n.asyncDetected ? "async" : ""} (context ${n.extraArguments ? "," + n.extraArguments : ""}) => { ${t.includes("prev") ? "let prev;" : ""} const result = ${t}; return result }`;
    return Object.assign((typeof globalThis < "u" ? globalThis : global).eval(d)(l, o, s, rr, r, a, Rn, ue, Hc, Bc, gt), {
      [te]: !n.asyncDetected,
      deterministic: !t.includes("("),
      aboveDetected: typeof t == "string" && t.includes(", above")
    });
  }
  const Qc = () => {
    try {
      const e = {};
      return (typeof globalThis < "u" ? globalThis : global).eval("(test) => test?.foo?.bar")(e) === void 0;
    } catch {
      return false;
    }
  }, Jt = Qc(), sn = /* @__PURE__ */ new Map();
  function Yt(e) {
    if (sn.has(e)) return sn.get(e);
    sn.size > 2048 && sn.clear();
    const t = Zc(e);
    return sn.set(e, t), t;
  }
  function Zc(e, t = ".", n = "\\", r = "/") {
    const o = [];
    let s = "";
    for (let i = 0; i < e.length; i++) {
      const l = e[i];
      l === n ? e[i + 1] === t || e[i + 1] === r ? (s += e[i + 1], i++) : e[i + 1] === n ? (s += n, i++) : s += n : l === t ? (o.push(s), s = "") : s += l;
    }
    return o.length !== e.length && o.push(s), o;
  }
  const Er = {
    get: {
      [te]: true,
      method: ([e, t, n], r, o, s) => {
        const i = n === void 0 ? null : n, l = Yt(String(t));
        for (let a = 0; a < l.length; a++) if (e == null || (e = e[l[a]], e === void 0)) return i;
        return s.allowFunctions || typeof e[t] != "function" ? e : null;
      },
      deterministic: true,
      compile: (e, t) => {
        let n = null, r = e, o = null;
        if (Array.isArray(e) && e.length <= 3) {
          if (o = e[0], r = e[1], n = typeof e[2] > "u" ? null : e[2], r && typeof r == "object") return false;
          r = r.toString();
          const s = Yt(r);
          return Jt ? `((${de(o, t)})${s.map((i) => `?.[${de(i, t)}]`).join("")} ?? ${de(n, t)})` : `(((a,b) => (typeof a === 'undefined' || a === null) ? b : a)(${s.reduce((i, l) => `(${i}||0)[${JSON.stringify(l)}]`, `(${de(o, t)}||0)`)}, ${de(n, t)}))`;
        }
        return false;
      }
    },
    var: {
      [Ke]: true,
      [te]: true,
      method: (e, t, n, r) => {
        let o;
        Array.isArray(e) && (o = e[1], e = e[0]);
        let s = 0;
        for (; typeof e == "string" && e.startsWith("../") && s < n.length; ) t = n[s++], e = e.substring(3), s === n.length && Array.isArray(t) && (s = 0, n = t, t = n[s++]);
        const i = o === void 0 ? null : o;
        if (typeof e > "u" || e === "" || e === null) return r.allowFunctions || typeof t != "function" ? t : null;
        const l = Yt(String(e));
        for (let a = 0; a < l.length; a++) if (t == null || (t = t[l[a]], t === void 0)) return i;
        return r.allowFunctions || typeof t != "function" ? t : null;
      },
      deterministic: (e, t) => t.insideIterator && !String(e).includes("../../"),
      optimizeUnary: true,
      compile: (e, t) => {
        let n = e, r = null;
        if (!n || typeof e == "string" || typeof e == "number" || Array.isArray(e) && e.length <= 2) {
          if (Array.isArray(e) && (n = e[0], r = typeof e[1] > "u" ? null : e[1]), n === "../index" && t.iteratorCompile) return "index";
          if (typeof n > "u" || n === null || n === "") return "context";
          if (typeof n != "string" && typeof n != "number" || (n = n.toString(), n.includes("../"))) return false;
          const o = Yt(n);
          if (!Jt) {
            const i = `((((a,b) => (typeof a === 'undefined' || a === null) ? b : a)(${o.reduce((l, a) => `(${l}||0)[${JSON.stringify(a)}]`, "(context||0)")}, ${de(r, t)})))`;
            return t.engine.allowFunctions ? i : `(typeof (prev = ${i}) === 'function' ? null : prev)`;
          }
          const s = `(context${o.map((i) => `?.[${JSON.stringify(i)}]`).join("")} ?? ${de(r, t)})`;
          return t.engine.allowFunctions ? s : `(typeof (prev = ${s}) === 'function' ? null : prev)`;
        }
        return false;
      }
    },
    missing: {
      [te]: true,
      optimizeUnary: false,
      method: (e, t) => {
        if (!e.length) return [];
        const n = [];
        for (let r = 0; r < e.length; r++) {
          const o = Yt(String(e[r]));
          let s = t, i = true;
          for (let l = 0; l < o.length; l++) {
            if (!s) {
              i = false;
              break;
            }
            if (s = s[o[l]], s === void 0) {
              i = false;
              break;
            }
          }
          i || n.push(e[r]);
        }
        return n;
      },
      compile: (e, t) => Array.isArray(e) ? e.length === 0 ? t.compile`[]` : e.length === 1 && typeof e[0] == "string" && !e[0].includes(".") ? t.compile`(context || 0)[${e[0]}] === undefined ? [${e[0]}] : []` : e.length === 2 && typeof e[0] == "string" && typeof e[1] == "string" && !e[0].includes(".") && !e[1].includes(".") ? t.compile`(context || 0)[${e[0]}] === undefined ? (context || 0)[${e[1]}] === undefined ? [${e[0]}, ${e[1]}] : [${e[0]}] : (context || 0)[${e[1]}] === undefined ? [${e[1]}] : []` : false : false,
      deterministic: (e, t) => !!(Array.isArray(e) && e.length === 0)
    },
    missing_some: {
      [te]: true,
      optimizeUnary: false,
      method: ([e, t], n) => {
        const r = Er.missing.method(t, n);
        return t.length - r.length >= e ? [] : r;
      },
      compile: ([e, t], n) => {
        if (!Array.isArray(t)) return false;
        let r = Er.missing.compile(t, n);
        return r || (r = n.compile`engine.methods.missing.method(${{
          [Te]: JSON.stringify(t)
        }}, context)`), n.compile`${t.length} - (prev = ${r}).length < ${e} ? prev : []`;
      },
      deterministic: false
    }
  }, eu = {
    ...Er
  }, ee = {
    type: "Invalid Arguments"
  };
  function xe(e, t, n) {
    if (Array.isArray(e)) return e.every((r) => xe(r, t, n));
    if (e && typeof e == "object") {
      const r = Object.keys(e)[0], o = e[r];
      if (t.isData(e, r) || r === void 0) return true;
      if (!t.methods[r]) throw {
        type: "Unknown Operator",
        key: r
      };
      return t.methods[r].lazy ? typeof t.methods[r].deterministic == "function" ? t.methods[r].deterministic(o, n) : t.methods[r].deterministic : typeof t.methods[r].deterministic == "function" ? t.methods[r].deterministic(o, n) : t.methods[r].deterministic && xe(o, t, n);
    }
    return true;
  }
  function Ee(e, t, n) {
    if (Array.isArray(e)) return e.every((r) => Ee(r, t, n));
    if (e && typeof e == "object") {
      const r = Object.keys(e)[0], o = e[r];
      if (t.isData(e, r) || r === void 0) return true;
      if (!t.methods[r]) throw {
        type: "Unknown Operator",
        key: r
      };
      return t.methods[r].lazy ? typeof t.methods[r][te] == "function" ? t.methods[r][te](o, n) : t.methods[r][te] : typeof t.methods[r][te] == "function" ? t.methods[r][te](o, n) : t.methods[r][te] && Ee(o, t, n);
    }
    return true;
  }
  function se(e, t, n, r) {
    if (!e || typeof e != "object") return e;
    if (!t.disableInterpretedOptimization && t.optimizedMap.has(e)) {
      const o = t.optimizedMap.get(e);
      return typeof o == "function" ? o(n, r) : o;
    }
    return t.run(e, n, {
      above: r
    });
  }
  const ln = Zn("every", true), Q = {
    "+": (e) => {
      if (!e) return 0;
      if (typeof e == "string" || typeof e == "number" || typeof e == "boolean") return ue(+e);
      if (typeof e == "object" && !Array.isArray(e)) throw NaN;
      let t = 0;
      for (let n = 0; n < e.length; n++) {
        if (e[n] && typeof e[n] == "object") throw NaN;
        t += +e[n];
      }
      if (Number.isNaN(t)) throw NaN;
      return t;
    },
    "*": (e) => {
      if (e.length === 0) return 1;
      let t = 1;
      for (let n = 0; n < e.length; n++) {
        if (e[n] && typeof e[n] == "object") throw NaN;
        t *= +e[n];
      }
      if (Number.isNaN(t)) throw NaN;
      return t;
    },
    "/": (e) => {
      if (e[0] && typeof e[0] == "object") throw NaN;
      if (e.length === 0) throw ee;
      if (e.length === 1) {
        if (!+e[0] || e[0] && typeof e[0] == "object") throw NaN;
        return 1 / +e[0];
      }
      let t = +e[0];
      for (let n = 1; n < e.length; n++) {
        if (e[n] && typeof e[n] == "object" || !e[n]) throw NaN;
        t /= +e[n];
      }
      if (Number.isNaN(t) || t === 1 / 0) throw NaN;
      return t;
    },
    "-": (e) => {
      if (!e) return 0;
      if (typeof e == "string" || typeof e == "number" || typeof e == "boolean") return ue(-e);
      if (typeof e == "object" && !Array.isArray(e)) throw NaN;
      if (e[0] && typeof e[0] == "object") throw NaN;
      if (e.length === 0) throw ee;
      if (e.length === 1) return -e[0];
      let t = e[0];
      for (let n = 1; n < e.length; n++) {
        if (e[n] && typeof e[n] == "object") throw NaN;
        t -= +e[n];
      }
      if (Number.isNaN(t)) throw NaN;
      return t;
    },
    "%": (e) => {
      if (e[0] && typeof e[0] == "object") throw NaN;
      if (e.length < 2) throw ee;
      let t = +e[0];
      for (let n = 1; n < e.length; n++) {
        if (e[n] && typeof e[n] == "object") throw NaN;
        t %= +e[n];
      }
      if (Number.isNaN(t)) throw NaN;
      return t;
    },
    throw: (e) => {
      throw Array.isArray(e) && (e = e[0]), typeof e == "object" ? e : {
        type: e
      };
    },
    max: (e) => {
      if (!e.length || typeof e[0] != "number") throw ee;
      let t = e[0];
      for (let n = 1; n < e.length; n++) {
        if (typeof e[n] != "number") throw ee;
        e[n] > t && (t = e[n]);
      }
      return t;
    },
    min: (e) => {
      if (!e.length || typeof e[0] != "number") throw ee;
      let t = e[0];
      for (let n = 1; n < e.length; n++) {
        if (typeof e[n] != "number") throw ee;
        e[n] < t && (t = e[n]);
      }
      return t;
    },
    in: ([e, t]) => (t || []).includes(e),
    preserve: {
      lazy: true,
      method: Ds((e) => e, true),
      [te]: () => true
    },
    if: {
      [Ke]: true,
      method: (e, t, n, r) => {
        if (!Array.isArray(e)) throw ee;
        if (e.length === 1) return se(e[0], r, t, n);
        if (e.length < 2) return null;
        e = [
          ...e
        ], e.length % 2 !== 1 && e.push(null);
        const o = e.pop();
        for (; e.length; ) {
          const s = e.shift(), i = e.shift(), l = se(s, r, t, n);
          if (r.truthy(l)) return se(i, r, t, n);
        }
        return se(o, r, t, n);
      },
      [te]: (e, t) => Ee(e, t.engine, t),
      deterministic: (e, t) => xe(e, t.engine, t),
      asyncMethod: async (e, t, n, r) => {
        if (!Array.isArray(e)) throw ee;
        if (e.length === 1) return r.run(e[0], t, {
          above: n
        });
        if (e.length < 2) return null;
        e = [
          ...e
        ], e.length % 2 !== 1 && e.push(null);
        const o = e.pop();
        for (; e.length; ) {
          const s = e.shift(), i = e.shift(), l = await r.run(s, t, {
            above: n
          });
          if (r.truthy(l)) return r.run(i, t, {
            above: n
          });
        }
        return r.run(o, t, {
          above: n
        });
      },
      lazy: true
    },
    "<": _t("<", (e, t) => e < t),
    "<=": _t("<=", (e, t) => e <= t),
    ">": _t(">", (e, t) => e > t),
    ">=": _t(">=", (e, t) => e >= t),
    "==": _t("==", (e, t) => e == t),
    "===": _t("===", (e, t) => e === t),
    "!=": _t("!=", (e, t) => e != t),
    "!==": _t("!==", (e, t) => e !== t),
    or: {
      [te]: (e, t) => Ee(e, t.engine, t),
      method: (e, t, n, r) => {
        if (!Array.isArray(e)) throw ee;
        if (!e.length) return null;
        let o;
        for (let s = 0; s < e.length; s++) if (o = se(e[s], r, t, n), r.truthy(o)) return o;
        return o;
      },
      asyncMethod: async (e, t, n, r) => {
        if (!Array.isArray(e)) throw ee;
        if (!e.length) return null;
        let o;
        for (let s = 0; s < e.length; s++) if (o = await r.run(e[s], t, {
          above: n
        }), r.truthy(o)) return o;
        return o;
      },
      deterministic: (e, t) => xe(e, t.engine, t),
      compile: (e, t) => {
        let n = t.compile``;
        if (Array.isArray(e)) {
          if (!e.length) return t.compile`null`;
          for (let r = 0; r < e.length; r++) n = t.compile`${n} engine.truthy(prev = ${e[r]}) ? prev : `;
          return n = t.compile`${n} prev`, n;
        }
        return false;
      },
      lazy: true
    },
    "??": {
      [te]: (e, t) => Ee(e, t.engine, t),
      method: (e, t, n, r) => {
        if (!Array.isArray(e)) throw ee;
        let o;
        for (let s = 0; s < e.length; s++) if (o = se(e[s], r, t, n), o != null) return o;
        return o === void 0 ? null : o;
      },
      asyncMethod: async (e, t, n, r) => {
        if (!Array.isArray(e)) throw ee;
        let o;
        for (let s = 0; s < e.length; s++) if (o = await r.run(e[s], t, {
          above: n
        }), o != null) return o;
        return o === void 0 ? null : o;
      },
      deterministic: (e, t) => xe(e, t.engine, t),
      compile: (e, t) => Jt ? Array.isArray(e) && e.length ? `(${e.map((n, r) => {
        const o = de(n, t);
        return Array.isArray(n) || !n || typeof n != "object" || r === e.length - 1 ? o : "(" + o + ")";
      }).join(" ?? ")})` : `(${de(e, t)}).reduce((a,b) => (a) ?? b, null)` : false,
      lazy: true
    },
    try: {
      [te]: (e, t) => Ee(e, t.engine, t),
      method: (e, t, n, r) => {
        Array.isArray(e) || (e = [
          e
        ]);
        let o, s;
        for (let i = 0; i < e.length; i++) try {
          return s ? o = se(e[i], r, {
            type: s.type || s.error || s.message || s.constructor.name
          }, [
            null,
            t,
            n
          ]) : o = se(e[i], r, t, n), o;
        } catch (l) {
          Number.isNaN(l) ? s = {
            message: "NaN"
          } : s = l;
        }
        throw s;
      },
      asyncMethod: async (e, t, n, r) => {
        Array.isArray(e) || (e = [
          e
        ]);
        let o, s;
        for (let i = 0; i < e.length; i++) try {
          return s ? o = await r.run(e[i], {
            type: s.type || s.error || s.message || s.constructor.name
          }, {
            above: [
              null,
              t,
              n
            ]
          }) : o = await r.run(e[i], t, {
            above: n
          }), o;
        } catch (l) {
          Number.isNaN(l) ? s = {
            message: "NaN"
          } : s = l;
        }
        throw s;
      },
      deterministic: (e, t) => xe(e[0], t.engine, {
        ...t,
        insideTry: true
      }) && xe(e, t.engine, {
        ...t,
        insideIterator: true,
        insideTry: true
      }),
      lazy: true,
      compile: (e, t) => {
        if (!Array.isArray(e) || !e.length) return false;
        let n;
        try {
          "+" in e[0] && e.length > 1 ? n = t.compile`((context, above) => { try { const precoerceNumber = a => a; return Number.isNaN(prev = ${e[0]}) ? ${e[1]} : prev  } catch(err) { above = [null, context, above]; context = { type: err.type || err.message || err.toString() }; ` : n = t.compile`((context, above) => { try { return ${e[0]} } catch(err) { above = [null, context, above]; context = { type: err.type || err.message || err.toString() }; `;
        } catch (r) {
          Number.isNaN(r) && (r = {
            type: "NaN"
          }), n = {
            [Te]: `((context, above) => { { above = [null, context, above]; context = ${JSON.stringify(r)}; `
          };
        }
        if (e.length > 1) for (let r = 1; r < e.length; r++) try {
          r === e.length - 1 ? n = t.compile`${n} try { return ${e[r]} } catch(err) { throw err; } ` : n = t.compile`${n} try { return ${e[r]} } catch(err) { context = { type: err.type || err.message || err.toString() }; } `;
        } catch (o) {
          Number.isNaN(o) && (o = {
            type: "NaN"
          }), r === e.length - 1 ? n = t.compile`${n} throw ${{
            [Te]: JSON.stringify(o)
          }} ` : n = t.compile`${n} ${{
            [Te]: `context = ${JSON.stringify(o)};`
          }}`;
        }
        else n[Te].includes("err") ? n = t.compile`${n} throw err;` : n = t.compile`${n} throw context;`;
        return n = t.compile`${n} } })(context, above)`, n[Te].includes("await") && (n[Te] = n[Te].replace("((context", "await (async (context")), n;
      }
    },
    and: {
      [te]: (e, t) => Ee(e, t.engine, t),
      method: (e, t, n, r) => {
        if (!Array.isArray(e)) throw ee;
        if (!e.length) return null;
        let o;
        for (let s = 0; s < e.length; s++) if (o = se(e[s], r, t, n), !r.truthy(o)) return o;
        return o;
      },
      asyncMethod: async (e, t, n, r) => {
        if (!Array.isArray(e)) throw ee;
        if (!e.length) return null;
        let o;
        for (let s = 0; s < e.length; s++) if (o = await r.run(e[s], t, {
          above: n
        }), !r.truthy(o)) return o;
        return o;
      },
      lazy: true,
      deterministic: (e, t) => xe(e, t.engine, t),
      compile: (e, t) => {
        let n = t.compile``;
        if (Array.isArray(e)) {
          if (!e.length) return t.compile`null`;
          for (let r = 0; r < e.length; r++) n = t.compile`${n} !engine.truthy(prev = ${e[r]}) ? prev : `;
          return n = t.compile`${n} prev`, n;
        }
        return false;
      }
    },
    substr: ([e, t, n]) => {
      if (n < 0) {
        const r = e.substr(t);
        return r.substr(0, r.length + n);
      }
      return e.substr(t, n);
    },
    length: {
      method: (e, t, n, r) => {
        if (!e) throw ee;
        const o = se(e, r, t, n), s = Array.isArray(e) ? o[0] : o;
        if (typeof s == "string" || Array.isArray(s)) return s.length;
        if (s && typeof s == "object") return Object.keys(s).length;
        throw ee;
      },
      asyncMethod: async (e, t, n, r) => {
        if (!e) throw ee;
        const o = await se(e, r, t, n), s = Array.isArray(e) ? o[0] : o;
        if (typeof s == "string" || Array.isArray(s)) return s.length;
        if (s && typeof s == "object") return Object.keys(s).length;
        throw ee;
      },
      deterministic: (e, t) => xe(e, t.engine, t),
      lazy: true
    },
    exists: {
      method: (e, t, n, r) => Q.val.method(e, t, n, r, Oo) !== Oo,
      deterministic: false
    },
    val: {
      [Ke]: true,
      [te]: true,
      method: (e, t, n, r, o = null) => {
        if (Array.isArray(e) && e.length === 1 && !Array.isArray(e[0]) && (e = e[0]), !Array.isArray(e)) {
          if (o && !(t && e in t)) return o;
          if (t == null) return null;
          const l = t[e];
          return typeof l > "u" ? null : l;
        }
        let s = t, i = 0;
        if (Array.isArray(e[0]) && e[0].length === 1) {
          i++;
          const l = +Math.abs(e[0][0]);
          let a = 0;
          for (let d = 0; d < l; d++) s = n[a++], d === n.length - 1 && Array.isArray(s) && (n = s, s = s[0], a = 1);
        }
        for (let l = i; l < e.length; l++) {
          if (o && !(s && e[l] in s)) return o;
          if (s == null) return null;
          s = s[e[l]];
        }
        return typeof s > "u" || typeof s == "function" && !r.allowFunctions ? o : s;
      },
      optimizeUnary: true,
      deterministic: (e, t) => t.insideIterator ? !(Array.isArray(e) && Array.isArray(e[0]) && Math.abs(e[0][0]) >= 2) : false,
      compile: (e, t) => {
        function n(r) {
          let o;
          return Jt ? o = t.compile`(${r} ?? null)` : o = t.compile`(((a) => a === null || a === undefined ? null : a)(${r}))`, t.engine.allowFunctions || (o = t.compile`(typeof (prev = ${o}) === 'function' ? null : prev)`), o;
        }
        if (typeof e == "object" && !Array.isArray(e)) if (Ee(e, t.engine, t) && xe(e, t.engine, t) && !t.engine.disableInline) e = (t.engine.fallback || t.engine).run(e, t.context, {
          above: t.above
        });
        else return false;
        if (Array.isArray(e) && Array.isArray(e[0])) return t.iteratorCompile && Math.abs(e[0][0] || 0) === 1 && e[1] === "index" ? t.compile`index` : false;
        if (Array.isArray(e) && e.length === 1 && (e = e[0]), e === null) return n(t.compile`context`);
        if (!Array.isArray(e)) return n(Jt ? t.compile`context?.[${e}]` : t.compile`(context || 0)[${e}]`);
        if (Array.isArray(e)) {
          let r = t.compile`context`;
          for (let o = 0; o < e.length; o++) e[o] !== null && (Jt ? r = t.compile`${r}?.[${e[o]}]` : r = t.compile`(${r}|| 0)[${e[o]}]`);
          return n(t.compile`(${r})`);
        }
        return false;
      }
    },
    map: Zn("map"),
    some: {
      ...Zn("some", true),
      method: (e, t, n, r) => {
        if (!Array.isArray(e)) throw ee;
        let [o, s] = e;
        o = se(o, r, t, n) || [];
        for (let i = 0; i < o.length; i++) if (r.truthy(se(s, r, o[i], [
          o,
          t,
          n
        ]))) return true;
        return false;
      }
    },
    all: {
      [te]: ln[te],
      method: (e, t, n, r) => {
        if (!Array.isArray(e)) throw ee;
        const o = se(e[0], r, t, n) || [];
        if (Array.isArray(o) && o.length === 0) return false;
        const s = e[1];
        for (let i = 0; i < o.length; i++) if (!r.truthy(se(s, r, o[i], [
          o,
          t,
          n
        ]))) return false;
        return true;
      },
      asyncMethod: async (e, t, n, r) => {
        if (Array.isArray(e)) {
          const o = await r.run(e[0], t, n);
          if (Array.isArray(o) && o.length === 0) return false;
        }
        return ln.asyncMethod(e, t, n, r);
      },
      compile: (e, t) => Array.isArray(e) ? t.compile`Array.isArray(prev = ${e[0]}) && prev.length === 0 ? false : ${ln.compile([
        {
          [Te]: "prev"
        },
        e[1]
      ], t)}` : false,
      deterministic: ln.deterministic,
      lazy: ln.lazy
    },
    none: {
      [te]: (e, t) => Ee(e, t.engine, t),
      lazy: true,
      method: (e, t, n, r) => !Q.some.method(e, t, n, r),
      asyncMethod: async (e, t, n, r) => !await Q.some.asyncMethod(e, t, n, r),
      compile: (e, t) => {
        const n = Q.some.compile(e, t);
        return n ? t.compile`!(${n})` : false;
      }
    },
    merge: (e) => {
      if (!Array.isArray(e)) return [
        e
      ];
      const t = [];
      for (let n = 0; n < e.length; n++) if (Array.isArray(e[n])) for (let r = 0; r < e[n].length; r++) t.push(e[n][r]);
      else t.push(e[n]);
      return t;
    },
    filter: Zn("filter", true),
    reduce: {
      deterministic: (e, t) => xe(e[0], t.engine, t) && xe(e[1], t.engine, {
        ...t,
        insideIterator: true
      }),
      compile: (e, t) => {
        if (!Array.isArray(e)) throw ee;
        const { async: n } = t;
        let [r, o, s] = e;
        r = de(r, t), typeof s < "u" && (s = de(s, t));
        const i = {
          ...t,
          extraArguments: "above",
          avoidInlineAsync: true
        };
        o = sr(o, i);
        const l = o.aboveDetected ? "[null, context, above]" : "null", a = t.engine.options.maxDepth === 1 / 0 ? "" : "assertAllowedDepth";
        return t.methods.push(o), n && (!Bt(o) || r.includes("await")) ? (t.asyncDetected = true, typeof s < "u" ? `await asyncIterators.reduce(${r} || [], (a,b) => methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${l}), ${s}, ${t.engine.options.maxDepth})` : `await asyncIterators.reduce(${r} || [], (a,b) => methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${l}), undefined, ${t.engine.options.maxDepth})`) : typeof s < "u" ? `(${r} || []).reduce((a,b) => ${a}(methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${l})), ${a}(${s}))` : `(${r} || []).reduce((a,b) => ${a}(methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${l})))`;
      },
      method: (e, t, n, r) => {
        if (!Array.isArray(e)) throw ee;
        let [o, s, i] = e;
        i = gt(se(i, r, t, n), r.options.maxDepth), o = se(o, r, t, n) || [];
        let l = (a, d) => gt(r.run(s, {
          accumulator: a,
          current: d
        }, {
          above: [
            o,
            t,
            n
          ]
        }), r.options.maxDepth);
        if (r.optimizedMap.has(s) && typeof r.optimizedMap.get(s) == "function") {
          const a = r.optimizedMap.get(s);
          l = (d, u) => gt(a({
            accumulator: d,
            current: u
          }, [
            o,
            t,
            n
          ]), r.options.maxDepth);
        }
        return typeof i > "u" ? o.reduce(l) : o.reduce(l, i);
      },
      [te]: (e, t) => Ee(e, t.engine, t),
      asyncMethod: async (e, t, n, r) => {
        if (!Array.isArray(e)) throw ee;
        let [o, s, i] = e;
        return i = gt(await r.run(i, t, {
          above: n
        }), r.options.maxDepth), o = await r.run(o, t, {
          above: n
        }) || [], rr.reduce(o, (l, a) => r.run(s, {
          accumulator: l,
          current: a
        }, {
          above: [
            o,
            t,
            n
          ]
        }), i, r.options.maxDepth);
      },
      lazy: true
    },
    "!": (e, t, n, r) => Array.isArray(e) ? !r.truthy(e[0]) : !r.truthy(e),
    "!!": (e, t, n, r) => !!(Array.isArray(e) ? r.truthy(e[0]) : r.truthy(e)),
    cat: {
      [Ke]: true,
      [te]: true,
      method: (e) => {
        if (typeof e == "string") return e;
        if (!Array.isArray(e)) return e.toString();
        let t = "";
        for (let n = 0; n < e.length; n++) e[n] === null || e[n] === void 0 || (t += e[n]);
        return t;
      },
      deterministic: true,
      optimizeUnary: true,
      compile: (e, t) => {
        if (typeof e == "string") return JSON.stringify(e);
        if (typeof e == "number") return '"' + JSON.stringify(e) + '"';
        if (!Array.isArray(e)) return false;
        let n = t.compile`''`;
        for (let r = 0; r < e.length; r++) n = t.compile`${n} + ${e[r]}`;
        return t.compile`(${n})`;
      }
    },
    keys: ([e]) => typeof e == "object" ? Object.keys(e) : [],
    pipe: {
      lazy: true,
      [te]: (e, t) => Ee(e, t.engine, t),
      method: (e, t, n, r) => {
        if (!Array.isArray(e)) throw new Error("Data for pipe must be an array");
        let o = r.run(e[0], t, {
          above: [
            e,
            t,
            n
          ]
        });
        for (let s = 1; s < e.length; s++) o = r.run(e[s], o, {
          above: [
            e,
            t,
            n
          ]
        });
        return o;
      },
      asyncMethod: async (e, t, n, r) => {
        if (!Array.isArray(e)) throw new Error("Data for pipe must be an array");
        let o = await r.run(e[0], t, {
          above: [
            e,
            t,
            n
          ]
        });
        for (let s = 1; s < e.length; s++) o = await r.run(e[s], o, {
          above: [
            e,
            t,
            n
          ]
        });
        return o;
      },
      compile: (e, t) => {
        let n = t.compile`${e[0]}`;
        for (let r = 1; r < e.length; r++) n = t.compile`${sr(e[r], {
          ...t,
          extraArguments: "above"
        })}(${n}, [null, context, above])`;
        return n;
      },
      deterministic: (e, t) => {
        if (!Array.isArray(e)) return false;
        e = [
          ...e
        ];
        const n = e.shift();
        return xe(n, t.engine, t) && xe(e, t.engine, {
          ...t,
          insideIterator: true
        });
      }
    },
    eachKey: {
      lazy: true,
      [te]: (e, t) => Ee(Object.values(e[Object.keys(e)[0]]), t.engine, t),
      method: (e, t, n, r) => Object.keys(e).reduce((s, i) => {
        const l = e[i];
        return Object.defineProperty(s, i, {
          enumerable: true,
          value: r.run(l, t, {
            above: n
          })
        }), s;
      }, {}),
      deterministic: (e, t) => {
        if (e && typeof e == "object") return Object.values(e).every((n) => xe(n, t.engine, t));
        throw ee;
      },
      compile: (e, t) => {
        if (e && typeof e == "object") return `({ ${Object.keys(e).reduce((r, o) => (r.push(`${JSON.stringify(o)}: ${de(e[o], t)}`), r), []).join(",")} })`;
        throw ee;
      },
      asyncMethod: async (e, t, n, r) => await rr.reduce(Object.keys(e), async (s, i) => {
        const l = e[i];
        return Object.defineProperty(s, i, {
          enumerable: true,
          value: await r.run(l, t, {
            above: n
          })
        }), s;
      }, {}, 1 / 0)
    }
  };
  function _t(e, t) {
    const n = {
      [Te]: e
    }, r = e.length === 3;
    return {
      method: (o, s, i, l) => {
        if (!Array.isArray(o) || o.length <= 1) throw ee;
        if (o.length === 2) {
          const d = se(o[0], l, s, i), u = se(o[1], l, s, i);
          if (r || (typeof d == "string" || d === null) && (typeof u == "string" || u === null)) return t(d, u);
          if (Number.isNaN(+ue(d))) throw NaN;
          if (Number.isNaN(+ue(u)) && d !== null) throw NaN;
          return t(+d, +u);
        }
        let a = se(o[0], l, s, i);
        for (let d = 1; d < o.length; d++) {
          const u = se(o[d], l, s, i);
          if ((r || (typeof u == "string" || u === null) && (typeof a == "string" || a === null)) && !t(a, u)) return false;
          if (Number.isNaN(+ue(u)) && a !== null) throw NaN;
          if (d === 1 && Number.isNaN(+ue(a))) throw NaN;
          if (!t(+a, +u)) return false;
          a = u;
        }
        return true;
      },
      asyncMethod: async (o, s, i, l) => {
        if (!Array.isArray(o) || o.length <= 1) throw ee;
        if (o.length === 2) {
          const d = await se(o[0], l, s, i), u = await se(o[1], l, s, i);
          if (r || (typeof d == "string" || d === null) && (typeof u == "string" || u === null)) return t(d, u);
          if (Number.isNaN(+ue(d))) throw NaN;
          if (Number.isNaN(+ue(u)) && d !== null) throw NaN;
          return t(+d, +u);
        }
        let a = await se(o[0], l, s, i);
        for (let d = 1; d < o.length; d++) {
          const u = await se(o[d], l, s, i);
          if ((r || (typeof u == "string" || u === null) && (typeof a == "string" || a === null)) && !t(a, u)) return false;
          if (Number.isNaN(+ue(u)) && a !== null) throw NaN;
          if (d === 1 && Number.isNaN(+ue(a))) throw NaN;
          if (!t(+a, +u)) return false;
          a = u;
        }
        return true;
      },
      compile: (o, s) => {
        if (!Array.isArray(o) || o.length < 2) return false;
        if (o.length === 2) return s.compile`((prev = ${o[0]}) ${n} compareCheck(${o[1]}, prev, ${r}))`;
        let i = s.compile`((prev = ${o[0]}) ${n} (prev = compareCheck(${o[1]}, prev, ${r})))`;
        for (let l = 2; l < o.length; l++) i = s.compile`(${i} && prev ${n} (prev = compareCheck(${o[l]}, prev, ${r})))`;
        return i;
      },
      [Ke]: true,
      [te]: (o, s) => Ee(o, s.engine, s),
      deterministic: (o, s) => xe(o, s.engine, s),
      lazy: true
    };
  }
  function Zn(e, t = false) {
    return {
      deterministic: (n, r) => xe(n[0], r.engine, r) && xe(n[1], r.engine, {
        ...r,
        insideIterator: true
      }),
      [Ke]: true,
      [te]: (n, r) => Ee(n, r.engine, r),
      method: (n, r, o, s) => {
        if (!Array.isArray(n)) throw ee;
        let [i, l] = n;
        return i = se(i, s, r, o) || [], i[e]((a, d) => {
          if (!l || typeof l != "object") return t ? s.truthy(l) : l;
          const u = se(l, s, a, [
            {
              iterator: i,
              index: d
            },
            r,
            o
          ]);
          return t ? s.truthy(u) : u;
        });
      },
      asyncMethod: async (n, r, o, s) => {
        if (!Array.isArray(n)) throw ee;
        let [i, l] = n;
        return i = await s.run(i, r, {
          above: o
        }) || [], rr[e](i, async (a, d) => {
          if (!l || typeof l != "object") return t ? s.truthy(l) : l;
          const u = await s.run(l, a, {
            above: [
              {
                iterator: i,
                index: d
              },
              r,
              o
            ]
          });
          return t ? s.truthy(u) : u;
        });
      },
      compile: (n, r) => {
        if (!Array.isArray(n)) throw ee;
        const { async: o } = r, [s, i] = n, l = {
          ...r,
          avoidInlineAsync: true,
          iteratorCompile: true,
          extraArguments: "index, above"
        }, a = sr(i, l), d = a.aboveDetected ? r.compile`[{ iterator: z, index: x }, context, above]` : r.compile`null`, u = t ? r.compile`engine.truthy` : r.compile``;
        return o && !Bt(a) ? (r.asyncDetected = true, r.compile`await asyncIterators[${e}](${s} || [], async (i, x, z) => ${u}(${a}(i, x, ${d})))`) : r.compile`(${s} || [])[${e}]((i, x, z) => ${u}(${a}(i, x, ${d})))`;
      },
      lazy: true
    };
  }
  Q.every = Q.all;
  Q["?:"] = Q.if;
  Object.keys(Q).forEach((e) => {
    typeof Q[e] == "function" && (Q[e][te] = true), Q[e].deterministic = typeof Q[e].deterministic > "u" ? true : Q[e].deterministic;
  });
  Q.if.compile = function(e, t) {
    if (!Array.isArray(e) || e.length < 3) return false;
    e = [
      ...e
    ], e.length % 2 !== 1 && e.push(null);
    const n = e.pop();
    let r = t.compile``;
    for (; e.length; ) {
      const o = e.shift(), s = e.shift();
      r = t.compile`${r} engine.truthy(${o}) ? ${s} : `;
    }
    return t.compile`(${r} ${n})`;
  };
  function An(e, t) {
    if (Array.isArray(e)) return ue(NaN);
    if (typeof e == "number" || typeof e == "boolean") return "+" + de(e, t);
    if (typeof e == "string") return "+" + ue(+e);
    const n = de(e, t);
    return /^-?\d+(\.\d*)?$/.test(n) ? "+" + n : n.startsWith('"') ? "+" + ue(+JSON.parse(n)) : n === "true" ? "1" : n === "false" || n === "null" ? "0" : n.startsWith("[") || n.startsWith("{") ? ue(NaN) : `(+precoerceNumber(${n}))`;
  }
  Q["+"].compile = function(e, t) {
    return Array.isArray(e) ? e.length === 0 ? "(+0)" : `precoerceNumber(${e.map((n) => An(n, t)).join(" + ")})` : typeof e == "string" || typeof e == "number" || typeof e == "boolean" ? `precoerceNumber(+${de(e, t)})` : t.compile`(Array.isArray(prev = ${e}) ? prev.reduce((a,b) => (+a)+(+precoerceNumber(b)), 0) : precoerceNumber(+prev))`;
  };
  Q["%"].compile = function(e, t) {
    if (Array.isArray(e)) {
      if (e.length < 2) throw ee;
      return `precoerceNumber(${e.map((n) => An(n, t)).join(" % ")})`;
    }
    return `assertSize(${de(e, t)}, 2).reduce((a,b) => (+precoerceNumber(a))%(+precoerceNumber(b)))`;
  };
  Q.in.compile = function(e, t) {
    return Array.isArray(e) ? t.compile`(${e[1]} || []).includes(${e[0]})` : false;
  };
  Q["-"].compile = function(e, t) {
    if (Array.isArray(e)) {
      if (e.length === 0) throw ee;
      return `${e.length === 1 ? "-" : ""}precoerceNumber(${e.map((n) => An(n, t)).join(" - ")})`;
    }
    return typeof e == "string" || typeof e == "number" ? `(-${de(e, t)})` : t.compile`(Array.isArray(prev = ${e}) ? prev.length === 1 ? -precoerceNumber(prev[0]) : assertSize(prev, 1).reduce((a,b) => (+precoerceNumber(a))-(+precoerceNumber(b))) : -precoerceNumber(+prev))`;
  };
  Q["/"].compile = function(e, t) {
    if (Array.isArray(e)) {
      if (e.length === 0) throw ee;
      return e.length === 1 && (e = [
        1,
        e[0]
      ]), `precoerceNumber(${e.map((n, r) => {
        let o = An(n, t);
        return r && o === "+0" && ue(NaN), r && (o = `precoerceNumber(${o} || NaN)`), o;
      }).join(" / ")})`;
    }
    return `assertSize(prev = ${de(e, t)}, 1) && prev.length === 1 ? 1 / precoerceNumber(prev[0] || NaN) : prev.reduce((a,b) => (+precoerceNumber(a))/(+precoerceNumber(b || NaN)))`;
  };
  Q["*"].compile = function(e, t) {
    return Array.isArray(e) ? e.length === 0 ? "1" : `precoerceNumber(${e.map((n) => An(n, t)).join(" * ")})` : `(${de(e, t)}).reduce((a,b) => (+precoerceNumber(a))*(+precoerceNumber(b)), 1)`;
  };
  Q["!"].compile = function(e, t) {
    return Array.isArray(e) ? t.compile`(!engine.truthy(${e[0]}))` : t.compile`(!engine.truthy(${e}))`;
  };
  Q.not = Q["!"];
  Q["!!"].compile = function(e, t) {
    return Array.isArray(e) ? t.compile`(!!engine.truthy(${e[0]}))` : t.compile`(!!engine.truthy(${e}))`;
  };
  Q.none.deterministic = Q.some.deterministic;
  Q.throw.deterministic = (e, t) => t.insideTry && xe(e, t.engine, t);
  Q["+"].optimizeUnary = Q["-"].optimizeUnary = Q["!"].optimizeUnary = Q["!!"].optimizeUnary = Q.cat.optimizeUnary = Q.throw.optimizeUnary = true;
  const tu = {
    ...Q,
    ...eu
  }, nu = function(t) {
    return Object.keys(t).forEach((n) => {
      t[n] === void 0 && delete t[n];
    }), t;
  };
  function ru(e, t, n, r) {
    const o = t.methods[n], s = o.method ? o.method : o;
    if (o.lazy) {
      const l = e[n];
      return (a, d) => s(l, a, d || r, t);
    }
    let i = e[n];
    if ((!i || typeof i != "object") && !o.optimizeUnary && (i = [
      i
    ]), Array.isArray(i) && i.length === 1 && o.optimizeUnary && !Array.isArray(i[0]) && (i = i[0]), Array.isArray(i)) {
      const l = i.map((a) => Pe(a, t, r));
      if (l.every((a) => typeof a != "function")) return (a, d) => s(l, a, d || r, t);
      if (l.length === 1) {
        const a = l[0];
        return (d, u) => s([
          a(d, u)
        ], d, u || r, t);
      }
      if (l.length === 2) {
        const [a, d] = l;
        return typeof a == "function" && typeof d == "function" ? (u, p) => s([
          a(u, p),
          d(u, p)
        ], u, p || r, t) : typeof a == "function" ? (u, p) => s([
          a(u, p),
          d
        ], u, p || r, t) : (u, p) => s([
          a,
          d(u, p)
        ], u, p || r, t);
      }
      return (a, d) => {
        const u = l.map((p) => typeof p == "function" ? p(a, d) : p);
        return s(u, a, d || r, t);
      };
    } else {
      const l = Pe(i, t, r);
      if (o.optimizeUnary) {
        const a = (d) => !d || typeof d[l] > "u" || typeof d[l] == "function" && !t.allowFunctions ? null : d[l];
        if (typeof l == "function") return (d, u) => s(l(d, u), d, u || r, t);
        if ((n === "var" || n === "val") && t.methods[n][Ke]) {
          if (!l && n !== "val") return (d) => d === null || typeof d > "u" || typeof d == "function" && !t.allowFunctions ? null : d;
          if (n === "val" || typeof l == "number" || !l.includes(".") && !l.includes("\\")) return a;
          if (n === "var" && !l.startsWith("../")) {
            const d = Yt(String(l));
            let u;
            if (d.length === 2) {
              const [p, g] = d;
              return (f) => (typeof (u = f && f[p] && f[p][g]) != "function" || t.allowFunctions) && typeof u < "u" ? u : null;
            }
            if (d.length === 3) {
              const [p, g, f] = d;
              return (h) => (typeof (u = h && h[p] && h[p][g] && h[p][g][f]) != "function" || t.allowFunctions) && typeof u < "u" ? u : null;
            }
          }
        }
        return (d, u) => s(l, d, u || r, t);
      }
      return typeof l == "function" ? (a, d) => s(Rn(l(a, d)), a, d || r, t) : (a, d) => s(Rn(l), a, d || r, t);
    }
  }
  const Lo = {
    "<": (e, t) => e < t,
    "<=": (e, t) => e <= t,
    ">": (e, t) => e > t,
    ">=": (e, t) => e >= t,
    "==": (e, t) => e == t,
    "===": (e, t) => e === t,
    "!=": (e, t) => e != t,
    "!==": (e, t) => e !== t
  };
  function ou(e, t, n) {
    if (e.val && t.methods.val[Ke] && Array.isArray(e.val) && e.val.length <= 3 && e.val.every((r) => typeof r != "object")) {
      let r;
      if (e.val.length === 1) {
        const o = e.val[0];
        return (s) => (typeof (r = s && s[o]) != "function" || t.allowFunctions) && typeof r < "u" ? r : null;
      }
      if (e.val.length === 2) {
        const [o, s] = e.val;
        return (i) => (typeof (r = i && i[o] && i[o][s]) != "function" || t.allowFunctions) && typeof r < "u" ? r : null;
      }
      if (e.val.length === 3) {
        const [o, s, i] = e.val;
        return (l) => (typeof (r = l && l[o] && l[o][s] && l[o][s][i]) != "function" || t.allowFunctions) && typeof r < "u" ? r : null;
      }
    }
    if ((e.if || e["?:"]) && t.methods.if[Ke] && Array.isArray(e.if || e["?:"]) && (e.if || e["?:"]).length === 3) {
      const [r, o, s] = e.if || e["?:"], i = Pe(r, t, n), l = Pe(o, t, n), a = Pe(s, t, n);
      return typeof i == "function" && typeof l == "function" && typeof a == "function" ? (d, u) => t.truthy(i(d, u)) ? l(d, u) : a(d, u) : typeof i == "function" && typeof l == "function" ? (d, u) => t.truthy(i(d, u)) ? l(d, u) : a : typeof i == "function" && typeof a == "function" ? (d, u) => t.truthy(i(d, u)) ? l : a(d, u) : typeof i == "function" ? (d, u) => t.truthy(i(d, u)) ? l : a : t.truthy(i) ? l : a;
    }
    if (e.filter && t.methods.filter[Ke] && Array.isArray(e.filter) && e.filter.length === 2) {
      const [r, o] = e.filter, s = Pe(o, t, n);
      if (typeof s != "function") return t.truthy(s) ? Pe(r, t, n) : [];
    }
    for (const r in Lo) if (e[r] && Array.isArray(e[r]) && t.methods[r][Ke]) {
      const o = Lo[r], s = r.length === 3 ? o : function(l, a) {
        if ((typeof l == "string" || l === null) && (typeof a == "string" || a === null)) return o(l, a);
        if (Number.isNaN(+ue(l))) throw NaN;
        if (Number.isNaN(+ue(a)) && l !== null) throw NaN;
        return o(+l, +a);
      };
      if (e[r].length === 2) {
        const [i, l] = e[r], a = Pe(i, t, n), d = Pe(l, t, n);
        return typeof a == "function" && typeof d == "function" ? (u, p) => s(a(u, p), d(u, p)) : typeof a == "function" ? (u, p) => s(a(u, p), d) : typeof d == "function" ? (u, p) => s(a, d(u, p)) : s(a, d);
      }
      if (e[r].length === 3) {
        const [i, l, a] = e[r], d = Pe(i, t, n), u = Pe(l, t, n), p = Pe(a, t, n);
        let g;
        return typeof d == "function" && typeof u == "function" && typeof p == "function" ? (f, h) => s(d(f, h), g = u(f, h)) && s(g, p(f, h)) : typeof d == "function" && typeof u == "function" ? (f, h) => s(d(f, h), g = u(f, h)) && s(g, p) : typeof d == "function" && typeof p == "function" ? (f, h) => s(d(f, h), u) && s(u, p(f, h)) : typeof u == "function" && typeof p == "function" ? (f, h) => s(d, g = u(f, h)) && s(g, p(f, h)) : typeof d == "function" ? (f, h) => s(d(f, h), u) && s(u, p) : typeof u == "function" ? (f, h) => s(d, g = u(f, h)) && s(g, p) : typeof p == "function" ? (f, h) => s(d, u) && s(u, p(f, h)) : s(d, u) && s(u, p);
      }
    }
    if (e.reduce && Array.isArray(e.reduce)) {
      let [r, o, s] = e.reduce;
      if (o["+"] && o["+"].length === 2 && (o["+"][0] || 0).var && (o["+"][1] || 0).var) {
        const i = o["+"][0].var === "accumulator" || o["+"][1].var === "accumulator", l = o["+"][0].var === "current" || o["+"][1].var === "current";
        if (s = s || 0, i && l) return Pe({
          "+": [
            {
              "+": r
            },
            s
          ]
        }, t, n);
      }
      if (o["*"] && o["*"].length === 2 && (o["*"][0] || 0).var && (o["*"][1] || 0).var) {
        const i = o["*"][0].var === "accumulator" || o["*"][1].var === "accumulator", l = o["*"][0].var === "current" || o["*"][1].var === "current";
        if (s = typeof s > "u" ? 1 : s, i && l) return Pe({
          "*": [
            {
              "*": r
            },
            s
          ]
        }, t, n);
      }
    }
  }
  function Pe(e, t, n = []) {
    if (Array.isArray(e)) {
      const r = e.map((o) => Pe(o, t, n));
      return r.every((o) => typeof o != "function") ? r : (o, s) => r.map((i) => typeof i == "function" ? i(o, s) : i);
    }
    if (e && typeof e == "object") {
      const r = ou(e, t, n);
      if (typeof r < "u") return r;
      const o = Object.keys(e), s = o[0];
      if (o.length === 0) return e;
      if (t.isData(e, s)) return () => e;
      if (o.length > 1) throw {
        type: "Unknown Operator"
      };
      const l = !t.disableInline && or(e, t, {
        engine: t
      });
      if (s in t.methods) {
        const a = ru(e, t, s, n);
        return l ? a() : a;
      }
      throw {
        type: "Unknown Operator",
        key: s
      };
    }
    return e;
  }
  class su {
    constructor(t = tu, n = {
      disableInline: false,
      disableInterpretedOptimization: false,
      permissive: false,
      maxDepth: 0,
      maxArrayLength: 32768,
      maxStringLength: 65536
    }) {
      this.disableInline = n.disableInline, this.disableInterpretedOptimization = n.disableInterpretedOptimization, this.methods = {
        ...t
      }, this.optimizedMap = /* @__PURE__ */ new WeakMap(), this.missesSinceSeen = 0, this.options = {
        disableInline: n.disableInline,
        disableInterpretedOptimization: n.disableInterpretedOptimization,
        maxDepth: n.maxDepth || 0,
        maxArrayLength: n.maxArrayLength || 32768,
        maxStringLength: n.maxStringLength || 65536
      }, this.isData || (n.permissive ? this.isData = (r, o) => !(o in this.methods) : this.isData = () => false);
    }
    truthy(t) {
      if (!t) return t;
      if (Array.isArray(t)) return t.length > 0;
      if (typeof t == "object") {
        if (t[Symbol.iterator] && ("length" in t && t.length === 0 || "size" in t && t.size === 0)) return false;
        if (t.constructor.name === "Object") return Object.keys(t).length > 0;
      }
      return t;
    }
    _parse(t, n, r, o, s) {
      const i = t[o];
      if (this.isData(t, o)) return t;
      if (!this.methods[o] || s > 1) throw {
        type: "Unknown Operator",
        key: o
      };
      if ((o === "var" || o === "val") && this.methods[o][Ke]) {
        const l = !i || typeof i != "object" ? i : this.run(i, n, {
          above: r
        });
        return this.methods[o].method(l, n, r, this, null);
      }
      if (typeof this.methods[o] == "function") {
        const l = !i || typeof i != "object" ? [
          i
        ] : Rn(this.run(i, n, {
          above: r
        }));
        return this.methods[o](l, n, r, this);
      }
      if (typeof this.methods[o] == "object") {
        const { method: l, lazy: a } = this.methods[o], d = a ? i : !i || typeof i != "object" ? [
          i
        ] : Rn(this.run(i, n, {
          above: r
        }));
        return l(d, n, r, this);
      }
      throw new Error(`Method '${o}' is not set up properly.`);
    }
    addMethod(t, n, { deterministic: r, optimizeUnary: o } = {}) {
      typeof n == "function" ? n = {
        method: n,
        lazy: false
      } : n = {
        ...n,
        lazy: typeof n.traverse < "u" ? !n.traverse : n.lazy
      }, Object.assign(n, nu({
        deterministic: r,
        optimizeUnary: o
      })), this.methods[t] = Ds(n);
    }
    addModule(t, n, r) {
      Object.getOwnPropertyNames(n).forEach((o) => {
        (typeof n[o] == "function" || typeof n[o] == "object") && this.addMethod(`${t}${t ? "." : ""}${o}`, n[o], r);
      });
    }
    run(t, n = {}, r = {}) {
      const { above: o = [] } = r;
      if (!this.disableInterpretedOptimization && typeof t == "object" && t) if (this.missesSinceSeen > 500 && (this.disableInterpretedOptimization = true, this.missesSinceSeen = 0), this.optimizedMap.has(t)) {
        this.missesSinceSeen = 0;
        const s = this.optimizedMap.get(t);
        return typeof s == "function" ? s(n, o) : s;
      } else {
        this.optimizedMap.set(t, Pe(t, this, o)), this.missesSinceSeen++;
        const s = this.optimizedMap.get(t);
        return typeof s == "function" ? s(n, o) : s;
      }
      if (Array.isArray(t)) {
        const s = new Array(t.length);
        for (let i = 0; i < t.length; i++) s[i] = this.run(t[i], n, {
          above: o
        });
        return s;
      }
      if (t && typeof t == "object") {
        const s = Object.keys(t);
        if (s.length > 0) {
          const i = s[0];
          return this._parse(t, n, o, i, s.length);
        }
      }
      return t;
    }
    build(t, n = {}) {
      const { above: r = [], top: o = true } = n, s = sr(t, {
        engine: this,
        above: r
      });
      return o === false && s.deterministic ? s() : s;
    }
  }
  function Ve(e) {
    return e == null ? "" : typeof e == "object" ? JSON.stringify(e) : String(e);
  }
  const ur = new su();
  ur.addMethod("contains", ([e, t]) => Ve(e).includes(Ve(t)), {
    deterministic: true
  });
  ur.addMethod("startsWith", ([e, t]) => Ve(e).startsWith(Ve(t)), {
    deterministic: true
  });
  ur.addMethod("endsWith", ([e, t]) => Ve(e).endsWith(Ve(t)), {
    deterministic: true
  });
  function an() {
    return `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
  }
  const kr = /* @__PURE__ */ new Set([
    "empty",
    "not_empty",
    "is_true",
    "is_false"
  ]), iu = {
    number: [
      "eq",
      "neq",
      "gt",
      "gte",
      "lt",
      "lte",
      "empty",
      "not_empty"
    ],
    string: [
      "eq",
      "neq",
      "contains",
      "not_contains",
      "starts_with",
      "ends_with",
      "empty",
      "not_empty"
    ],
    boolean: [
      "is_true",
      "is_false",
      "empty",
      "not_empty"
    ],
    date: [
      "eq",
      "neq",
      "gt",
      "gte",
      "lt",
      "lte",
      "empty",
      "not_empty"
    ],
    mixed: [
      "eq",
      "neq",
      "contains",
      "empty",
      "not_empty"
    ]
  }, lu = [
    "eq",
    "neq",
    "empty",
    "not_empty"
  ], au = {
    var: "value"
  };
  function cu(e, t, n = "string") {
    const r = Number(t), o = n === "number", s = n === "date", i = au;
    switch (e) {
      case "eq":
        return {
          "==": [
            i,
            o ? r : t
          ]
        };
      case "neq":
        return {
          "!=": [
            i,
            o ? r : t
          ]
        };
      case "gt":
        return {
          ">": [
            i,
            s ? t : r
          ]
        };
      case "gte":
        return {
          ">=": [
            i,
            s ? t : r
          ]
        };
      case "lt":
        return {
          "<": [
            i,
            s ? t : r
          ]
        };
      case "lte":
        return {
          "<=": [
            i,
            s ? t : r
          ]
        };
      case "contains":
        return {
          contains: [
            i,
            t
          ]
        };
      case "not_contains":
        return {
          "!": [
            {
              contains: [
                i,
                t
              ]
            }
          ]
        };
      case "starts_with":
        return {
          startsWith: [
            i,
            t
          ]
        };
      case "ends_with":
        return {
          endsWith: [
            i,
            t
          ]
        };
      case "empty":
        return {
          "!": [
            {
              "!!": [
                i
              ]
            }
          ]
        };
      case "not_empty":
        return {
          "!!": [
            i
          ]
        };
      case "is_true":
        return {
          "==": [
            i,
            true
          ]
        };
      case "is_false":
        return {
          "==": [
            i,
            false
          ]
        };
    }
  }
  const uu = /* @__PURE__ */ new Set([
    "eq",
    "neq",
    "gt",
    "gte",
    "lt",
    "lte"
  ]);
  function du(e, t = "string") {
    const n = e.conditions.filter((o) => kr.has(o.operator) ? true : !(o.operand.trim() === "" || t === "number" && uu.has(o.operator) && isNaN(Number(o.operand))));
    if (n.length === 0) return;
    const r = n.map((o) => cu(o.operator, o.operand, t));
    return r.length === 1 ? r[0] : {
      [e.mode]: r
    };
  }
  function ut(e) {
    return typeof e == "object" && e !== null && e.var === "value";
  }
  function mr(e) {
    for (const [t, n] of [
      [
        ">",
        "gt"
      ],
      [
        ">=",
        "gte"
      ],
      [
        "<",
        "lt"
      ],
      [
        "<=",
        "lte"
      ]
    ]) if (t in e) {
      const r = e[t];
      if (Array.isArray(r) && r.length === 2 && ut(r[0])) return {
        operator: n,
        operand: Ve(r[1])
      };
    }
    if ("==" in e) {
      const t = e["=="];
      if (Array.isArray(t) && t.length === 2 && ut(t[0])) return t[1] === true ? {
        operator: "is_true",
        operand: ""
      } : t[1] === false ? {
        operator: "is_false",
        operand: ""
      } : {
        operator: "eq",
        operand: Ve(t[1])
      };
    }
    if ("!=" in e) {
      const t = e["!="];
      if (Array.isArray(t) && t.length === 2 && ut(t[0])) return {
        operator: "neq",
        operand: Ve(t[1])
      };
    }
    if ("contains" in e) {
      const t = e.contains;
      if (Array.isArray(t) && t.length === 2 && ut(t[0])) return {
        operator: "contains",
        operand: Ve(t[1])
      };
    }
    if ("startsWith" in e) {
      const t = e.startsWith;
      if (Array.isArray(t) && t.length === 2 && ut(t[0])) return {
        operator: "starts_with",
        operand: Ve(t[1])
      };
    }
    if ("endsWith" in e) {
      const t = e.endsWith;
      if (Array.isArray(t) && t.length === 2 && ut(t[0])) return {
        operator: "ends_with",
        operand: Ve(t[1])
      };
    }
    if ("!" in e) {
      const t = e["!"];
      if (Array.isArray(t) && t.length === 1) {
        const n = t[0];
        if (typeof n == "object" && n !== null && "!!" in n) {
          const r = n["!!"];
          if (Array.isArray(r) && ut(r[0])) return {
            operator: "empty",
            operand: ""
          };
        }
        if (typeof n == "object" && n !== null && "contains" in n) {
          const r = n.contains;
          if (Array.isArray(r) && r.length === 2 && ut(r[0])) return {
            operator: "not_contains",
            operand: Ve(r[1])
          };
        }
      }
    }
    if ("!!" in e) {
      const t = e["!!"];
      if (Array.isArray(t) && ut(t[0])) return {
        operator: "not_empty",
        operand: ""
      };
    }
    return null;
  }
  function Ho(e) {
    if (!e) return {
      mode: "and",
      conditions: [
        {
          id: an(),
          operator: "eq",
          operand: ""
        }
      ]
    };
    if ("and" in e) {
      const n = e.and;
      if (Array.isArray(n)) {
        const r = n.map((o) => mr(o)).filter((o) => o !== null).map((o) => ({
          id: an(),
          ...o
        }));
        if (r.length > 0) return {
          mode: "and",
          conditions: r
        };
      }
    }
    if ("or" in e) {
      const n = e.or;
      if (Array.isArray(n)) {
        const r = n.map((o) => mr(o)).filter((o) => o !== null).map((o) => ({
          id: an(),
          ...o
        }));
        if (r.length > 0) return {
          mode: "or",
          conditions: r
        };
      }
    }
    const t = mr(e);
    return t ? {
      mode: "and",
      conditions: [
        {
          id: an(),
          ...t
        }
      ]
    } : {
      mode: "and",
      conditions: [
        {
          id: an(),
          operator: "eq",
          operand: ""
        }
      ]
    };
  }
  const fu = 200, cn = /* @__PURE__ */ new Map();
  function pu(e, t) {
    try {
      const n = JSON.stringify(e);
      let r = cn.get(n);
      if (!r) {
        if (r = ur.build(e), cn.size >= fu) {
          const o = cn.keys().next().value;
          o && cn.delete(o);
        }
        cn.set(n, r);
      }
      return !!r({
        value: t
      });
    } catch {
      return false;
    }
  }
  const gu = {
    eq: "json_table_op_eq",
    neq: "json_table_op_neq",
    gt: "json_table_op_gt",
    gte: "json_table_op_gte",
    lt: "json_table_op_lt",
    lte: "json_table_op_lte",
    contains: "json_table_op_contains",
    not_contains: "json_table_op_not_contains",
    starts_with: "json_table_op_starts_with",
    ends_with: "json_table_op_ends_with",
    empty: "json_table_op_empty",
    not_empty: "json_table_op_not_empty",
    is_true: "json_table_op_is_true",
    is_false: "json_table_op_is_false"
  };
  function hu({ label: e, value: t, onChange: n, inputType: r }) {
    const [o, s] = y.useState(t);
    y.useEffect(() => {
      s(t);
    }, [
      t
    ]);
    const i = y.useCallback(() => {
      o !== t && n(o);
    }, [
      o,
      t,
      n
    ]);
    return c.jsx(ve, {
      label: e,
      value: o,
      onChange: (l) => s(l.target.value),
      onBlur: i,
      size: "small",
      type: r,
      sx: {
        flex: 1,
        ...r === "date" && {
          '& input[type="date"]::-webkit-calendar-picker-indicator': {
            filter: "invert(0.5)",
            cursor: "pointer",
            opacity: 0.7,
            "&:hover": {
              opacity: 1
            }
          }
        }
      },
      InputLabelProps: r === "date" || r === "number" ? {
        shrink: true
      } : void 0,
      slotProps: r === "number" ? {
        htmlInput: {
          step: "any"
        }
      } : r === "date" ? {
        htmlInput: {
          placeholder: "YYYY-MM-DD"
        }
      } : void 0
    });
  }
  function mu({ logic: e, columnType: t, onChange: n }) {
    const [r, o] = y.useState(() => Ho(e));
    y.useEffect(() => {
      o(Ho(e));
    }, [
      e
    ]);
    const s = iu[t] ?? lu, i = y.useCallback((g) => {
      o(g), n(du(g, t));
    }, [
      n,
      t
    ]), l = y.useCallback((g, f) => {
      const h = r.conditions.map((m, v) => v === g ? {
        ...m,
        ...f
      } : m);
      i({
        ...r,
        conditions: h
      });
    }, [
      r,
      i
    ]), a = y.useCallback((g) => {
      const f = r.conditions.filter((h, m) => m !== g);
      i({
        ...r,
        conditions: f
      });
    }, [
      r,
      i
    ]), d = y.useCallback(() => {
      const g = s[0] ?? "eq";
      i({
        ...r,
        conditions: [
          ...r.conditions,
          {
            id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
            operator: g,
            operand: ""
          }
        ]
      });
    }, [
      r,
      i,
      s
    ]), u = y.useCallback((g, f) => {
      f !== null && i({
        ...r,
        mode: f
      });
    }, [
      r,
      i
    ]), p = r.conditions.length > 1;
    return c.jsxs(De, {
      spacing: 1,
      children: [
        p && c.jsxs(H, {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: 1
          },
          children: [
            c.jsxs(us, {
              value: r.mode,
              exclusive: true,
              onChange: u,
              size: "small",
              "aria-label": b.t("json_table_condition_mode_label"),
              children: [
                c.jsx(er, {
                  value: "and",
                  "aria-label": b.t("json_table_condition_mode_all"),
                  children: b.t("json_table_condition_mode_all")
                }),
                c.jsx(er, {
                  value: "or",
                  "aria-label": b.t("json_table_condition_mode_any"),
                  children: b.t("json_table_condition_mode_any")
                })
              ]
            }),
            c.jsx(P, {
              variant: "caption",
              color: "text.secondary",
              children: r.mode === "and" ? b.t("json_table_condition_mode_hint_and") : b.t("json_table_condition_mode_hint_or")
            })
          ]
        }),
        r.conditions.map((g, f) => {
          const h = !kr.has(g.operator), m = t === "date" ? "date" : t === "number" ? "number" : "text";
          return c.jsxs(H, {
            sx: {
              display: "flex",
              gap: 1,
              alignItems: "flex-start"
            },
            children: [
              c.jsxs(ft, {
                size: "small",
                sx: {
                  flex: h ? "0 0 auto" : 1,
                  minWidth: 160
                },
                children: [
                  c.jsx(pt, {
                    children: b.t("json_table_condition_operator")
                  }),
                  c.jsx(ot, {
                    label: b.t("json_table_condition_operator"),
                    value: g.operator,
                    onChange: (v) => {
                      const x = v.target.value, _ = kr.has(x) ? "" : g.operand;
                      l(f, {
                        operator: x,
                        operand: _
                      });
                    },
                    children: s.map((v) => c.jsx(ne, {
                      value: v,
                      children: b.t(gu[v])
                    }, v))
                  })
                ]
              }),
              h && c.jsx(hu, {
                label: b.t("json_table_condition_value"),
                value: g.operand ?? "",
                onChange: (v) => l(f, {
                  operand: v
                }),
                inputType: m
              }),
              p && c.jsx(ke, {
                title: b.t("json_table_condition_remove"),
                children: c.jsx(we, {
                  size: "small",
                  onClick: () => a(f),
                  "aria-label": b.t("json_table_condition_remove"),
                  sx: {
                    mt: 0.5
                  },
                  children: c.jsx(tr, {
                    fontSize: "small"
                  })
                })
              })
            ]
          }, g.id ?? f);
        }),
        c.jsx(st, {
          startIcon: c.jsx(Rs, {}),
          onClick: d,
          size: "small",
          variant: "text",
          sx: {
            alignSelf: "flex-start",
            textTransform: "none"
          },
          "aria-label": b.t("json_table_condition_add"),
          children: p ? b.t("json_table_condition_add") : b.t("json_table_condition_add_first")
        })
      ]
    });
  }
  function yu({ cellStyle: e, cellStyleMode: t, columnType: n, onStyleChange: r, onModeChange: o }) {
    const s = y.useCallback((u, p) => {
      const g = [
        ...e || []
      ];
      g[u] = {
        ...g[u],
        ...p
      }, r(g);
    }, [
      e,
      r
    ]), i = y.useCallback((u) => {
      const p = [
        ...e || []
      ];
      p.splice(u, 1), r(p);
    }, [
      e,
      r
    ]), l = y.useCallback(() => {
      const u = {
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        backgroundColor: "",
        textColor: "",
        fontWeight: "normal",
        fontStyle: "normal"
      };
      r([
        ...e || [],
        u
      ]);
    }, [
      e,
      r
    ]), a = y.useCallback((u) => {
      if (u === 0) return;
      const p = [
        ...e || []
      ];
      [p[u - 1], p[u]] = [
        p[u],
        p[u - 1]
      ], r(p);
    }, [
      e,
      r
    ]), d = y.useCallback((u) => {
      const p = e || [];
      if (u >= p.length - 1) return;
      const g = [
        ...p
      ];
      [g[u], g[u + 1]] = [
        g[u + 1],
        g[u]
      ], r(g);
    }, [
      e,
      r
    ]);
    return c.jsxs(De, {
      spacing: 1.5,
      children: [
        ((e == null ? void 0 : e.length) ?? 0) >= 1 && c.jsxs(H, {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: 1
          },
          children: [
            c.jsxs(us, {
              value: t ?? "first-match",
              exclusive: true,
              size: "small",
              onChange: (u, p) => {
                p && o(p);
              },
              "aria-label": b.t("json_table_cell_style_mode_label"),
              children: [
                c.jsx(er, {
                  value: "first-match",
                  "aria-label": b.t("json_table_cell_style_mode_first"),
                  children: b.t("json_table_cell_style_mode_first")
                }),
                c.jsx(er, {
                  value: "all-match",
                  "aria-label": b.t("json_table_cell_style_mode_all"),
                  children: b.t("json_table_cell_style_mode_all")
                })
              ]
            }),
            c.jsx(P, {
              variant: "caption",
              color: "text.secondary",
              children: (t ?? "first-match") === "first-match" ? b.t("json_table_cell_style_mode_hint_first") : b.t("json_table_cell_style_mode_hint_all")
            })
          ]
        }),
        (e || []).length === 0 && c.jsxs(H, {
          sx: {
            textAlign: "center",
            py: 2,
            px: 1,
            color: "text.secondary"
          },
          children: [
            c.jsx(P, {
              variant: "body2",
              sx: {
                fontWeight: 500,
                mb: 0.5
              },
              children: b.t("json_table_no_style_rules")
            }),
            c.jsx(P, {
              variant: "caption",
              children: b.t("json_table_no_style_rules_hint")
            })
          ]
        }),
        (e || []).map((u, p) => {
          const g = (e || []).length, f = u.backgroundColor ? Ot(u.backgroundColor) : void 0, h = u.textColor ? Ot(u.textColor) : void 0;
          return c.jsx(mt, {
            variant: "outlined",
            sx: {
              p: 1.5
            },
            children: c.jsxs(De, {
              spacing: 1.5,
              children: [
                c.jsxs(H, {
                  sx: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  },
                  children: [
                    c.jsx(H, {
                      sx: {
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5
                      },
                      children: c.jsxs(P, {
                        variant: "caption",
                        sx: {
                          fontWeight: 600,
                          color: "text.secondary"
                        },
                        children: [
                          b.t("json_table_rule"),
                          " ",
                          p + 1
                        ]
                      })
                    }),
                    c.jsxs(H, {
                      sx: {
                        display: "flex",
                        gap: 0.5
                      },
                      children: [
                        c.jsx(ke, {
                          title: b.t("json_table_rule_move_up"),
                          children: c.jsx("span", {
                            children: c.jsx(we, {
                              size: "small",
                              onClick: () => a(p),
                              disabled: p === 0,
                              "aria-label": b.t("json_table_rule_move_up"),
                              children: c.jsx($s, {
                                fontSize: "small"
                              })
                            })
                          })
                        }),
                        c.jsx(ke, {
                          title: b.t("json_table_rule_move_down"),
                          children: c.jsx("span", {
                            children: c.jsx(we, {
                              size: "small",
                              onClick: () => d(p),
                              disabled: p >= g - 1,
                              "aria-label": b.t("json_table_rule_move_down"),
                              children: c.jsx(Ms, {
                                fontSize: "small"
                              })
                            })
                          })
                        }),
                        c.jsx(ke, {
                          title: b.t("json_table_delete_rule"),
                          children: c.jsx(we, {
                            size: "small",
                            onClick: () => i(p),
                            color: "error",
                            "aria-label": b.t("json_table_delete_rule"),
                            children: c.jsx(ci, {
                              fontSize: "small"
                            })
                          })
                        })
                      ]
                    })
                  ]
                }),
                c.jsx(mu, {
                  logic: u.logic,
                  columnType: n,
                  onChange: (m) => s(p, {
                    logic: m
                  })
                }, u.id ?? p),
                c.jsxs(De, {
                  direction: "row",
                  spacing: 1,
                  alignItems: "flex-start",
                  children: [
                    c.jsx(Ar, {
                      label: b.t("json_table_bg_color"),
                      value: u.backgroundColor || "",
                      onChange: (m) => s(p, {
                        backgroundColor: m
                      })
                    }),
                    c.jsx(Ar, {
                      label: b.t("json_table_text_color"),
                      value: u.textColor || "",
                      onChange: (m) => s(p, {
                        textColor: m
                      })
                    })
                  ]
                }),
                c.jsxs(De, {
                  direction: "row",
                  spacing: 1,
                  children: [
                    c.jsx(Nt, {
                      control: c.jsx(Cn, {
                        checked: u.fontWeight === "bold",
                        onChange: (m) => s(p, {
                          fontWeight: m.target.checked ? "bold" : "normal"
                        }),
                        icon: c.jsx(Do, {
                          sx: {
                            opacity: 0.3
                          }
                        }),
                        checkedIcon: c.jsx(Do, {
                          color: "primary"
                        }),
                        size: "small"
                      }),
                      label: c.jsx(P, {
                        variant: "caption",
                        children: b.t("json_table_bold")
                      })
                    }),
                    c.jsx(Nt, {
                      control: c.jsx(Cn, {
                        checked: u.fontStyle === "italic",
                        onChange: (m) => s(p, {
                          fontStyle: m.target.checked ? "italic" : "normal"
                        }),
                        icon: c.jsx(zo, {
                          sx: {
                            opacity: 0.3
                          }
                        }),
                        checkedIcon: c.jsx(zo, {
                          color: "primary"
                        }),
                        size: "small"
                      }),
                      label: c.jsx(P, {
                        variant: "caption",
                        children: b.t("json_table_italic")
                      })
                    })
                  ]
                }),
                (u.backgroundColor || u.textColor || u.fontWeight === "bold" || u.fontStyle === "italic") && c.jsx(mt, {
                  variant: "outlined",
                  sx: {
                    p: 1,
                    ...u.backgroundColor ? f ? {
                      background: f
                    } : {
                      backgroundColor: u.backgroundColor
                    } : {},
                    fontWeight: u.fontWeight || "normal",
                    fontStyle: u.fontStyle || "normal"
                  },
                  children: c.jsx(P, {
                    variant: "body2",
                    sx: {
                      ...u.textColor ? h ? {
                        background: h,
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        color: "transparent"
                      } : {
                        color: u.textColor
                      } : {
                        color: "inherit"
                      }
                    },
                    children: b.t("json_table_sample_value")
                  })
                })
              ]
            })
          }, u.id ?? p);
        }),
        ((e == null ? void 0 : e.length) ?? 0) >= 2 && c.jsx(P, {
          variant: "caption",
          color: "text.secondary",
          sx: {
            px: 0.5
          },
          children: (t ?? "first-match") === "first-match" ? b.t("json_table_rules_priority_hint") : b.t("json_table_rules_all_match_hint")
        }),
        c.jsx(st, {
          startIcon: c.jsx(Rs, {}),
          onClick: l,
          variant: "outlined",
          size: "small",
          fullWidth: true,
          children: b.t("json_table_add_style_rule")
        })
      ]
    });
  }
  function bu({ globalSorting: e, globalFiltering: t }) {
    return c.jsxs(H, {
      sx: {
        p: 1,
        mb: 2,
        bgcolor: "action.hover",
        borderRadius: 1,
        border: 1,
        borderColor: "divider"
      },
      children: [
        c.jsx(P, {
          variant: "caption",
          sx: {
            fontWeight: 500,
            display: "block",
            mb: 0.5
          },
          children: b.t("json_table_global_status")
        }),
        c.jsxs(H, {
          sx: {
            display: "flex",
            gap: 1,
            flexWrap: "wrap"
          },
          children: [
            c.jsx(ht, {
              size: "small",
              icon: e ? c.jsx(To, {}) : c.jsx(tr, {}),
              label: `${b.t("json_table_sorting")}: ${e ? b.t("json_table_status_on") : b.t("json_table_status_off")}`,
              color: e ? "success" : "default",
              variant: "outlined",
              sx: {
                fontSize: "0.7rem"
              }
            }),
            c.jsx(ht, {
              size: "small",
              icon: t ? c.jsx(To, {}) : c.jsx(tr, {}),
              label: `${b.t("json_table_filtering")}: ${t ? b.t("json_table_status_on") : b.t("json_table_status_off")}`,
              color: t ? "success" : "default",
              variant: "outlined",
              sx: {
                fontSize: "0.7rem"
              }
            })
          ]
        })
      ]
    });
  }
  function kt(e) {
    if (e == null) return "";
    if (typeof e == "object") try {
      return JSON.stringify(e).toLowerCase();
    } catch {
      return "[object Object]";
    }
    return String(e).toLowerCase();
  }
  function Bo(e) {
    if (e == null) return null;
    if (e instanceof Date) {
      const t = e.getTime();
      return isNaN(t) ? null : t;
    }
    if (typeof e == "number") {
      const t = e >= 1e11 ? e : e * 1e3, n = new Date(t);
      return isNaN(n.getTime()) ? null : t;
    }
    if (typeof e == "string") {
      const t = e.trim();
      if (!t) return null;
      const n = t.match(/^(\d{2})\.(\d{2})\.(\d{4})(?:\s+(\d{2}):(\d{2})(?::(\d{2}))?)?/);
      if (n) {
        const [, s, i, l, a = "0", d = "0", u = "0"] = n, p = new Date(parseInt(l, 10), parseInt(i, 10) - 1, parseInt(s, 10), parseInt(a, 10), parseInt(d, 10), parseInt(u, 10));
        return isNaN(p.getTime()) ? null : p.getTime();
      }
      const r = t.match(/^(\d{2})\/(\d{2})\/(\d{4})(?:\s+(\d{2}):(\d{2})(?::(\d{2}))?)?/);
      if (r) {
        const [, s, i, l, a = "0", d = "0", u = "0"] = r, p = new Date(parseInt(l, 10), parseInt(s, 10) - 1, parseInt(i, 10), parseInt(a, 10), parseInt(d, 10), parseInt(u, 10));
        return isNaN(p.getTime()) ? null : p.getTime();
      }
      if (/^-?\d+$/.test(t)) {
        const s = parseInt(t, 10), i = s >= 1e11 ? s : s * 1e3, l = new Date(i);
        return isNaN(l.getTime()) ? null : i;
      }
      const o = new Date(t);
      return isNaN(o.getTime()) ? null : o.getTime();
    }
    return null;
  }
  function Vo(e) {
    const t = new Date(e);
    return t.setHours(0, 0, 0, 0), t.getTime();
  }
  function vu(e, t, n) {
    if (e == null) return t === "isEmpty";
    if (t === "isEmpty") return typeof e == "string" ? e === "" : e == null;
    if (t === "isNotEmpty") return typeof e == "string" ? e !== "" : e != null;
    if (typeof n == "boolean") {
      const d = typeof e == "boolean" ? e : e === "true" || e === 1 ? true : e === "false" || e === 0 ? false : null;
      if (d !== null) switch (t) {
        case "equals":
          return d === n;
        case "notEquals":
          return d !== n;
        default:
          return true;
      }
      return false;
    }
    const r = kt(e), o = kt(n), s = Number(e), i = Number(n), l = !isNaN(s) && !isNaN(i);
    if ([
      "greaterThan",
      "greaterThanOrEqual",
      "lessThan",
      "lessThanOrEqual",
      "equals",
      "notEquals"
    ].includes(t)) {
      const d = Bo(e), u = Bo(n);
      if (d !== null && u !== null) switch (t) {
        case "equals":
          return d === u;
        case "notEquals":
          return d !== u;
        case "greaterThan":
          return d > u;
        case "greaterThanOrEqual":
          return d >= u;
        case "lessThan":
          return d < u;
        case "lessThanOrEqual":
          return d <= u;
      }
    }
    switch (t) {
      case "contains":
        return r.includes(o);
      case "startsWith":
        return r.startsWith(o);
      case "endsWith":
        return r.endsWith(o);
      case "equals":
        return l ? s === i : r === o;
      case "notEquals":
        return l ? s !== i : r !== o;
      case "greaterThan":
        return l ? s > i : r > o;
      case "greaterThanOrEqual":
        return l ? s >= i : r >= o;
      case "lessThan":
        return l ? s < i : r < o;
      case "lessThanOrEqual":
        return l ? s <= i : r <= o;
      default:
        return true;
    }
  }
  function Wo(e, t, n, r) {
    if (t === "isEmpty") return typeof e == "string" ? e === "" : e == null;
    if (t === "isNotEmpty") return typeof e == "string" ? e !== "" : e != null;
    const o = Tr(e, r), s = Tr(n, r);
    if (o === null || s === null) return false;
    const i = Vo(o), l = Vo(s);
    switch (t) {
      case "equals":
        return i === l;
      case "notEquals":
        return i !== l;
      case "greaterThan":
        return i > l;
      case "greaterThanOrEqual":
        return i >= l;
      case "lessThan":
        return i < l;
      case "lessThanOrEqual":
        return i <= l;
      default:
        return true;
    }
  }
  function Go(e) {
    return (t, n, r) => {
      if (r == null) return true;
      if (typeof r == "object" && r !== null && "operator" in r) {
        const o = r;
        return Wo(t.getValue(n), o.operator, o.value, e);
      }
      return typeof r == "string" || typeof r == "number" ? Wo(t.getValue(n), "equals", r, e) : true;
    };
  }
  const xu = (e, t, n) => {
    if (n == null) return true;
    if (typeof n == "string") {
      const o = e.getValue(t);
      return o == null ? false : kt(o).includes(n.toLowerCase());
    }
    if (typeof n == "number") {
      const o = e.getValue(t);
      if (o == null) return false;
      const s = Number(o);
      return isNaN(s) ? kt(o).includes(kt(n)) : s === n;
    }
    if (typeof n == "object" && n !== null && "operator" in n) {
      const o = n, s = e.getValue(t);
      return vu(s, o.operator, o.value);
    }
    const r = e.getValue(t);
    return r == null ? false : kt(r).includes(kt(n));
  }, _u = {
    advanced: xu
  };
  function In(e) {
    switch (e) {
      case "number":
      case "date":
        return {
          sortable: true,
          filterable: true,
          hiding: true
        };
      case "string":
        return {
          sortable: true,
          filterable: true,
          hiding: true
        };
      case "boolean":
        return {
          sortable: false,
          filterable: true,
          hiding: true
        };
      case "array":
      case "object":
        return {
          sortable: false,
          filterable: false,
          hiding: true
        };
      default:
        return {
          sortable: true,
          filterable: true,
          hiding: true
        };
    }
  }
  function wu(e, t, n) {
    return e.sortable !== void 0 && e.sortable !== "auto" ? e.sortable : In(t).sortable && n !== false;
  }
  function Cu(e, t, n) {
    return e.filterable !== void 0 && e.filterable !== "auto" ? e.filterable : In(t).filterable && n === true;
  }
  function Su(e, t, n) {
    return e.enableHiding !== void 0 && e.enableHiding !== "auto" ? e.enableHiding : In(t).hiding && n !== false;
  }
  function Uo(e, t) {
    return Tr(e, t) ?? 0;
  }
  function qo(e) {
    return (t, n, r) => Uo(t.getValue(r), e) - Uo(n.getValue(r), e);
  }
  function ju(e) {
    const { columnConfig: t, analysisColumns: n, widgetData: r, renderConfiguredCell: o, renderAutoDetectedCell: s, renderSelectionHeader: i, renderSelectionCell: l } = e, a = new Map(n.map((g) => [
      g.path,
      g.dateFormat
    ])), d = new Map(n.map((g) => [
      g.path,
      g.type
    ])), u = r.tableRowSelection && i && l ? {
      id: "__select__",
      size: 48,
      enableResizing: false,
      enableSorting: false,
      enableColumnFilter: false,
      enableHiding: false,
      header: ({ table: g }) => i(g),
      cell: ({ row: g }) => l(g),
      meta: {
        align: "center",
        width: 48
      }
    } : null;
    let p;
    return t.length > 0 ? p = t.filter((g) => g.visible).map((g) => {
      var _a2, _b;
      const f = ((_a2 = g.format) == null ? void 0 : _a2.dateInputFormat) ?? a.get(g.path), h = d.get(g.path) || "string", m = ((_b = g.format) == null ? void 0 : _b.type) === "date" || h === "date";
      return {
        id: g.path,
        size: g.width ?? 150,
        accessorFn: (x) => (x == null ? void 0 : x[g.path]) ?? null,
        header: g.headerName || g.path,
        enableSorting: wu(g, h, r.tableSorting),
        enableColumnFilter: Cu(g, h, r.tableFiltering),
        enableHiding: Su(g, h, r.tableHiding),
        ...m && {
          sortingFn: qo(f),
          filterFn: Go(f)
        },
        cell: ({ getValue: x }) => o(x(), g),
        meta: {
          align: g.align || "left",
          width: g.width,
          columnType: m ? "date" : h
        }
      };
    }) : p = n.map((g) => {
      const f = g.type === "date" && g.dateFormat, h = g.dateFormat, m = In(g.type);
      return {
        id: g.path,
        size: 150,
        accessorFn: (x) => x[g.path],
        header: g.path.split(".").pop() || g.path,
        enableSorting: m.sortable && r.tableSorting,
        enableColumnFilter: m.filterable && r.tableFiltering,
        enableHiding: m.hiding && r.tableHiding,
        ...f && {
          sortingFn: qo(h),
          filterFn: Go(h)
        },
        cell: ({ getValue: x }) => s(x()),
        meta: {
          align: "left",
          columnType: g.type
        }
      };
    }), u ? [
      u,
      ...p
    ] : p;
  }
  function Yo({ globalEnabled: e, columnOverride: t, featureLabel: n, detectedType: r = "string", featureType: o = "sortable" }) {
    const s = t === "auto" || t === void 0, i = In(r), l = o === "sortable" ? i.sortable : i.filterable;
    let a, d;
    t === "auto" || t === void 0 ? (a = l && e, d = "json_table_source_auto") : (a = t, d = "json_table_source_override");
    const u = t !== void 0 && t !== "auto", p = (f, h) => f.replace(/\{(\w+)\}/g, (m, v) => v in h ? h[v] : m);
    let g;
    return t === "auto" || t === void 0 ? g = p(b.t("json_table_auto_tooltip"), {
      feature: n,
      smart: l ? b.t("json_table_status_on") : b.t("json_table_status_off"),
      type: r
    }) : g = p(b.t("json_table_override_tooltip"), {
      feature: n
    }), c.jsx(ke, {
      title: g,
      arrow: true,
      children: c.jsxs(H, {
        sx: {
          display: "flex",
          alignItems: "center",
          gap: 0.5,
          ml: "auto",
          cursor: "help"
        },
        children: [
          c.jsx(ht, {
            size: "small",
            label: c.jsx(H, {
              sx: {
                display: "flex",
                alignItems: "center",
                gap: 0.5
              },
              children: a ? b.t("json_table_status_on") : b.t("json_table_status_off")
            }),
            color: a ? "success" : "default",
            variant: u ? "filled" : "outlined",
            sx: {
              height: 20,
              fontSize: "0.65rem",
              "& .MuiChip-label": {
                px: 0.75
              }
            }
          }),
          c.jsxs(P, {
            variant: "caption",
            color: u ? "warning.main" : "text.secondary",
            sx: {
              fontSize: "0.65rem",
              display: "flex",
              alignItems: "center",
              gap: 0.25
            },
            children: [
              b.t(d),
              s && c.jsx(_c, {
                sx: {
                  fontSize: 12,
                  ml: 0.25
                }
              }),
              u && c.jsx(Cc, {
                sx: {
                  fontSize: 12,
                  ml: 0.25
                }
              })
            ]
          })
        ]
      })
    });
  }
  function Ru({ column: e, discoveredColumn: t, onChange: n, globalSorting: r = true, globalFiltering: o = false }) {
    var _a2, _b, _c2, _d2, _e, _f2;
    const [s, i] = y.useState({
      basic: true,
      formatting: false,
      styling: false,
      advanced: false
    }), l = y.useCallback((w) => {
      i(($) => ({
        ...$,
        [w]: !$[w]
      }));
    }, []), a = (t == null ? void 0 : t.type) || "string", d = y.useMemo(() => t ? Object.values(t.typeCounts).reduce((w, $) => w + $, 0) : 0, [
      t
    ]), u = y.useMemo(() => e.path.split(".").pop() || e.path, [
      e.path
    ]), p = y.useMemo(() => e.headerName !== u || e.width !== void 0 || e.align !== void 0 && e.align !== "left" || e.visible !== true, [
      e.headerName,
      e.width,
      e.align,
      e.visible,
      u
    ]), g = y.useCallback(() => {
      n({
        ...e,
        headerName: u,
        width: void 0,
        align: void 0,
        visible: true
      });
    }, [
      e,
      n,
      u
    ]), f = y.useMemo(() => e.format !== void 0, [
      e.format
    ]), h = y.useCallback(() => {
      const { format: w, ...$ } = e;
      n($);
    }, [
      e,
      n
    ]), m = y.useMemo(() => {
      var _a3;
      return (((_a3 = e.cellStyle) == null ? void 0 : _a3.length) ?? 0) > 0 || e.cellStyleMode !== void 0;
    }, [
      e.cellStyle,
      e.cellStyleMode
    ]), v = y.useCallback(() => {
      const { cellStyle: w, cellStyleMode: $, ...R } = e;
      n(R);
    }, [
      e,
      n
    ]), x = y.useMemo(() => e.sortable !== void 0 && e.sortable !== "auto" || e.filterable !== void 0 && e.filterable !== "auto", [
      e.sortable,
      e.filterable
    ]), _ = y.useCallback(() => {
      const { sortable: w, filterable: $, ...R } = e;
      n({
        ...R,
        sortable: "auto",
        filterable: "auto"
      });
    }, [
      e,
      n
    ]), S = y.useCallback((w) => {
      var _a3, _b2;
      const $ = {
        ...e.format
      };
      if (w.type && w.type !== ((_a3 = e.format) == null ? void 0 : _a3.type)) {
        const R = (_b2 = e.format) == null ? void 0 : _b2.type;
        R === "number" ? (delete $.numberDecimals, delete $.numberPrefix, delete $.numberSuffix, delete $.numberThousandsSeparator) : R === "date" ? (delete $.dateFormat, delete $.dateInputFormat) : R === "boolean" ? (delete $.booleanTrue, delete $.booleanFalse) : R === "string" && [
          "stringCase",
          "stringPrefix",
          "stringSuffix",
          "stringTrim",
          "stringMaxLength",
          "stringRegex",
          "stringRegexGroup",
          "stringRegexFlags",
          "stringFontWeight",
          "stringFontStyle",
          "stringFontSize",
          "stringTextColor"
        ].forEach((F) => {
          delete $[F];
        });
      }
      n({
        ...e,
        format: {
          ...$,
          ...w
        }
      });
    }, [
      e,
      n
    ]), j = y.useCallback((w) => {
      n({
        ...e,
        cellStyle: w
      });
    }, [
      e,
      n
    ]), M = y.useCallback((w) => {
      n({
        ...e,
        cellStyleMode: w
      });
    }, [
      e,
      n
    ]);
    return c.jsxs(H, {
      sx: {
        height: "100%",
        overflow: "auto",
        p: 2
      },
      children: [
        c.jsxs(H, {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: 1,
            mb: 2
          },
          children: [
            c.jsx(ht, {
              label: a,
              size: "small",
              sx: {
                backgroundColor: vn[a] || vn.string,
                color: "#fff",
                fontWeight: 600,
                fontSize: "0.7rem"
              }
            }),
            c.jsx(P, {
              variant: "subtitle2",
              sx: {
                fontFamily: "monospace",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap"
              },
              title: e.path,
              children: e.path
            })
          ]
        }),
        c.jsxs(De, {
          spacing: 1,
          children: [
            c.jsxs(On, {
              expanded: s.basic,
              onChange: () => l("basic"),
              disableGutters: true,
              children: [
                c.jsx(Nn, {
                  expandIcon: c.jsx(Ln, {}),
                  children: c.jsxs(H, {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      mr: 1
                    },
                    children: [
                      c.jsx(P, {
                        variant: "subtitle2",
                        sx: {
                          fontWeight: 500
                        },
                        children: b.t("json_table_section_basic")
                      }),
                      c.jsx(ke, {
                        title: b.t("json_table_section_reset"),
                        children: c.jsx("span", {
                          children: c.jsx(we, {
                            size: "small",
                            disabled: !p,
                            onClick: (w) => {
                              w.stopPropagation(), g();
                            },
                            "aria-label": b.t("json_table_section_reset"),
                            children: c.jsx(pn, {
                              fontSize: "small"
                            })
                          })
                        })
                      })
                    ]
                  })
                }),
                c.jsx(Hn, {
                  children: c.jsxs(De, {
                    spacing: 2,
                    children: [
                      c.jsx(ve, {
                        label: b.t("json_table_header_label"),
                        value: e.headerName,
                        onChange: (w) => n({
                          ...e,
                          headerName: w.target.value
                        }),
                        fullWidth: true,
                        size: "small"
                      }),
                      c.jsx(ve, {
                        label: b.t("json_table_width"),
                        type: "number",
                        value: e.width ?? "",
                        onChange: (w) => n({
                          ...e,
                          width: w.target.value ? parseInt(w.target.value, 10) : void 0
                        }),
                        fullWidth: true,
                        size: "small",
                        placeholder: b.t("json_table_width_auto"),
                        slotProps: {
                          htmlInput: {
                            min: 30
                          }
                        }
                      }),
                      c.jsxs(ft, {
                        fullWidth: true,
                        size: "small",
                        children: [
                          c.jsx(pt, {
                            children: b.t("json_table_align")
                          }),
                          c.jsxs(ot, {
                            label: b.t("json_table_align"),
                            value: e.align || "left",
                            onChange: (w) => n({
                              ...e,
                              align: w.target.value
                            }),
                            children: [
                              c.jsx(ne, {
                                value: "left",
                                children: b.t("json_table_align_left")
                              }),
                              c.jsx(ne, {
                                value: "center",
                                children: b.t("json_table_align_center")
                              }),
                              c.jsx(ne, {
                                value: "right",
                                children: b.t("json_table_align_right")
                              })
                            ]
                          })
                        ]
                      }),
                      c.jsx(Nt, {
                        control: c.jsx(hn, {
                          checked: e.visible,
                          onChange: (w) => n({
                            ...e,
                            visible: w.target.checked
                          })
                        }),
                        label: c.jsx(P, {
                          variant: "body2",
                          children: b.t("json_table_visible")
                        })
                      })
                    ]
                  })
                })
              ]
            }),
            c.jsxs(On, {
              expanded: s.formatting,
              onChange: () => l("formatting"),
              disableGutters: true,
              children: [
                c.jsx(Nn, {
                  expandIcon: c.jsx(Ln, {}),
                  children: c.jsxs(H, {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      mr: 1
                    },
                    children: [
                      c.jsx(P, {
                        variant: "subtitle2",
                        sx: {
                          fontWeight: 500
                        },
                        children: b.t("json_table_section_formatting")
                      }),
                      c.jsx(ke, {
                        title: b.t("json_table_section_reset"),
                        children: c.jsx("span", {
                          children: c.jsx(we, {
                            size: "small",
                            disabled: !f,
                            onClick: (w) => {
                              w.stopPropagation(), h();
                            },
                            "aria-label": b.t("json_table_section_reset"),
                            children: c.jsx(pn, {
                              fontSize: "small"
                            })
                          })
                        })
                      })
                    ]
                  })
                }),
                c.jsx(Hn, {
                  children: c.jsxs(De, {
                    spacing: 2,
                    children: [
                      c.jsxs(ft, {
                        fullWidth: true,
                        size: "small",
                        children: [
                          c.jsx(pt, {
                            children: b.t("json_table_format_type")
                          }),
                          c.jsxs(ot, {
                            value: ((_a2 = e.format) == null ? void 0 : _a2.type) || "auto",
                            label: b.t("json_table_format_type"),
                            onChange: (w) => {
                              const $ = w.target.value;
                              $ === "auto" ? n({
                                ...e,
                                format: void 0
                              }) : S({
                                type: $
                              });
                            },
                            children: [
                              c.jsxs(ne, {
                                value: "auto",
                                children: [
                                  b.t("json_table_format_type_auto"),
                                  ` (${a})`
                                ]
                              }),
                              c.jsx(ne, {
                                value: "string",
                                children: b.t("json_table_format_type_string")
                              }),
                              c.jsx(ne, {
                                value: "number",
                                children: b.t("json_table_format_type_number")
                              }),
                              c.jsx(ne, {
                                value: "date",
                                children: b.t("json_table_format_type_date")
                              }),
                              c.jsx(ne, {
                                value: "boolean",
                                children: b.t("json_table_format_type_boolean")
                              })
                            ]
                          })
                        ]
                      }),
                      (a === "number" || ((_b = e.format) == null ? void 0 : _b.type) === "number") && c.jsx(kc, {
                        format: e.format ?? {
                          type: "number"
                        },
                        onChange: S,
                        discoveredColumn: t
                      }),
                      (a === "date" || ((_c2 = e.format) == null ? void 0 : _c2.type) === "date") && c.jsx(Oc, {
                        format: e.format ?? {
                          type: "date"
                        },
                        detectedFormat: t == null ? void 0 : t.dateFormat,
                        onChange: S
                      }),
                      (a === "boolean" || ((_d2 = e.format) == null ? void 0 : _d2.type) === "boolean") && c.jsx(Nc, {
                        format: e.format ?? {
                          type: "boolean"
                        },
                        onChange: S
                      }),
                      (a === "string" || ((_e = e.format) == null ? void 0 : _e.type) === "string") && c.jsx(Lc, {
                        format: e.format ?? {
                          type: "string"
                        },
                        onChange: S
                      }),
                      a !== "number" && a !== "date" && a !== "boolean" && a !== "string" && !e.format && c.jsx(P, {
                        variant: "body2",
                        color: "text.secondary",
                        children: b.t("json_table_no_format_options")
                      })
                    ]
                  })
                })
              ]
            }),
            c.jsxs(On, {
              expanded: s.styling,
              onChange: () => l("styling"),
              disableGutters: true,
              children: [
                c.jsx(Nn, {
                  expandIcon: c.jsx(Ln, {}),
                  children: c.jsxs(H, {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      mr: 1
                    },
                    children: [
                      c.jsxs(H, {
                        sx: {
                          display: "flex",
                          alignItems: "center",
                          gap: 1
                        },
                        children: [
                          c.jsx(P, {
                            variant: "subtitle2",
                            sx: {
                              fontWeight: 500
                            },
                            children: b.t("json_table_section_styling")
                          }),
                          (((_f2 = e.cellStyle) == null ? void 0 : _f2.length) ?? 0) > 0 && c.jsx(ht, {
                            label: e.cellStyle.length,
                            size: "small",
                            color: "primary",
                            sx: {
                              height: 20,
                              fontSize: "0.7rem"
                            }
                          })
                        ]
                      }),
                      c.jsx(ke, {
                        title: b.t("json_table_section_reset"),
                        children: c.jsx("span", {
                          children: c.jsx(we, {
                            size: "small",
                            disabled: !m,
                            onClick: (w) => {
                              w.stopPropagation(), v();
                            },
                            "aria-label": b.t("json_table_section_reset"),
                            children: c.jsx(pn, {
                              fontSize: "small"
                            })
                          })
                        })
                      })
                    ]
                  })
                }),
                c.jsx(Hn, {
                  children: c.jsx(yu, {
                    cellStyle: e.cellStyle || [],
                    cellStyleMode: e.cellStyleMode ?? "first-match",
                    columnType: a,
                    onStyleChange: j,
                    onModeChange: M
                  })
                })
              ]
            }),
            c.jsxs(On, {
              expanded: s.advanced,
              onChange: () => l("advanced"),
              disableGutters: true,
              children: [
                c.jsx(Nn, {
                  expandIcon: c.jsx(Ln, {}),
                  children: c.jsxs(H, {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      mr: 1
                    },
                    children: [
                      c.jsx(P, {
                        variant: "subtitle2",
                        sx: {
                          fontWeight: 500
                        },
                        children: b.t("json_table_section_advanced")
                      }),
                      c.jsx(ke, {
                        title: b.t("json_table_section_reset"),
                        children: c.jsx("span", {
                          children: c.jsx(we, {
                            size: "small",
                            disabled: !x,
                            onClick: (w) => {
                              w.stopPropagation(), _();
                            },
                            "aria-label": b.t("json_table_section_reset"),
                            children: c.jsx(pn, {
                              fontSize: "small"
                            })
                          })
                        })
                      })
                    ]
                  })
                }),
                c.jsx(Hn, {
                  children: c.jsxs(De, {
                    spacing: 2,
                    children: [
                      c.jsx(bu, {
                        globalSorting: r,
                        globalFiltering: o
                      }),
                      c.jsxs(H, {
                        sx: {
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between"
                        },
                        children: [
                          c.jsxs(ft, {
                            size: "small",
                            sx: {
                              minWidth: 120
                            },
                            children: [
                              c.jsx(pt, {
                                children: b.t("json_table_sortable")
                              }),
                              c.jsxs(ot, {
                                value: e.sortable === true ? "on" : e.sortable === false ? "off" : "auto",
                                label: b.t("json_table_sortable"),
                                onChange: (w) => n({
                                  ...e,
                                  sortable: w.target.value === "on" ? true : w.target.value === "off" ? false : "auto"
                                }),
                                children: [
                                  c.jsx(ne, {
                                    value: "auto",
                                    children: c.jsx("em", {
                                      children: b.t("json_table_option_auto")
                                    })
                                  }),
                                  c.jsx(ne, {
                                    value: "on",
                                    children: b.t("json_table_option_on")
                                  }),
                                  c.jsx(ne, {
                                    value: "off",
                                    children: b.t("json_table_option_off")
                                  })
                                ]
                              })
                            ]
                          }),
                          c.jsx(Yo, {
                            globalEnabled: r,
                            columnOverride: e.sortable,
                            featureLabel: b.t("json_table_sorting"),
                            detectedType: t == null ? void 0 : t.type,
                            featureType: "sortable"
                          })
                        ]
                      }),
                      c.jsxs(H, {
                        sx: {
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between"
                        },
                        children: [
                          c.jsxs(ft, {
                            size: "small",
                            sx: {
                              minWidth: 120
                            },
                            children: [
                              c.jsx(pt, {
                                children: b.t("json_table_filterable")
                              }),
                              c.jsxs(ot, {
                                value: e.filterable === true ? "on" : e.filterable === false ? "off" : "auto",
                                label: b.t("json_table_filterable"),
                                onChange: (w) => n({
                                  ...e,
                                  filterable: w.target.value === "on" ? true : w.target.value === "off" ? false : "auto"
                                }),
                                children: [
                                  c.jsx(ne, {
                                    value: "auto",
                                    children: c.jsx("em", {
                                      children: b.t("json_table_option_auto")
                                    })
                                  }),
                                  c.jsx(ne, {
                                    value: "on",
                                    children: b.t("json_table_option_on")
                                  }),
                                  c.jsx(ne, {
                                    value: "off",
                                    children: b.t("json_table_option_off")
                                  })
                                ]
                              })
                            ]
                          }),
                          c.jsx(Yo, {
                            globalEnabled: o,
                            columnOverride: e.filterable,
                            featureLabel: b.t("json_table_filtering"),
                            detectedType: t == null ? void 0 : t.type,
                            featureType: "filterable"
                          })
                        ]
                      }),
                      t && c.jsxs(mt, {
                        variant: "outlined",
                        sx: {
                          p: 1.5,
                          bgcolor: "action.hover"
                        },
                        children: [
                          c.jsx(P, {
                            variant: "caption",
                            color: "text.secondary",
                            sx: {
                              fontWeight: 500,
                              display: "block",
                              mb: 1
                            },
                            children: b.t("json_table_analysis_info")
                          }),
                          c.jsxs(De, {
                            spacing: 0.5,
                            children: [
                              c.jsxs(H, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  c.jsx(P, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: b.t("json_table_type_label")
                                  }),
                                  c.jsx(ht, {
                                    label: t.type,
                                    size: "small",
                                    sx: {
                                      backgroundColor: vn[t.type],
                                      color: "#fff",
                                      height: 18,
                                      fontSize: "0.65rem"
                                    }
                                  })
                                ]
                              }),
                              c.jsxs(H, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  c.jsx(P, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: b.t("json_table_confidence")
                                  }),
                                  c.jsxs(P, {
                                    variant: "caption",
                                    children: [
                                      Math.round(t.confidence * 100),
                                      "%"
                                    ]
                                  })
                                ]
                              }),
                              c.jsxs(H, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  c.jsx(P, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: b.t("json_table_nulls")
                                  }),
                                  c.jsxs(P, {
                                    variant: "caption",
                                    children: [
                                      t.nullCount,
                                      d > 0 && ` (${Math.round(t.nullCount / d * 100)}%)`
                                    ]
                                  })
                                ]
                              }),
                              c.jsxs(H, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  c.jsx(P, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: b.t("json_table_distinct")
                                  }),
                                  c.jsx(P, {
                                    variant: "caption",
                                    children: t.distinctCount
                                  })
                                ]
                              }),
                              t.min !== void 0 && t.max !== void 0 && c.jsxs(H, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  c.jsx(P, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: b.t("json_table_range")
                                  }),
                                  c.jsxs(P, {
                                    variant: "caption",
                                    children: [
                                      String(t.min),
                                      " \u2013 ",
                                      String(t.max)
                                    ]
                                  })
                                ]
                              }),
                              t.dateFormat && c.jsxs(H, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  c.jsx(P, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: b.t("json_table_date_input_format")
                                  }),
                                  c.jsx(P, {
                                    variant: "caption",
                                    children: t.dateFormat
                                  })
                                ]
                              })
                            ]
                          })
                        ]
                      })
                    ]
                  })
                })
              ]
            })
          ]
        })
      ]
    });
  }
  const Mu = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, $u = /^\d{4}-\d{2}-\d{2}$/, Au = /^(\d{2})\.(\d{2})\.(\d{4})$/, Iu = /^(\d{2})\.(\d{2})\.(\d{4})\s+(\d{2}):(\d{2})$/, Pu = /^(\d{2})\.(\d{2})\.(\d{4})\s+(\d{2}):(\d{2}):(\d{2})$/, Fu = /^(\d{2})\/(\d{2})\/(\d{4})$/, Tu = /^(\d{2})\/(\d{2})\/(\d{4})\s+(\d{2}):(\d{2})$/, Du = /^(\d{2})\/(\d{2})\/(\d{4})\s+(\d{2}):(\d{2}):(\d{2})$/;
  function Gn(e, t) {
    return t >= 1 && t <= 12 && e >= 1 && e <= 31;
  }
  function yr(e, t) {
    return e >= 1 && e <= 12 && t >= 1 && t <= 31;
  }
  function Un(e, t, n) {
    return e >= 0 && e <= 23 && t >= 0 && t <= 59 && (n === void 0 || n >= 0 && n <= 59);
  }
  const zu = [
    {
      regex: Mu,
      format: "ISO-8601"
    },
    {
      regex: $u,
      format: "YYYY-MM-DD",
      validate: (e) => {
        const t = parseInt(e[0].slice(5, 7), 10), n = parseInt(e[0].slice(8, 10), 10);
        return Gn(n, t);
      }
    },
    {
      regex: Pu,
      format: "dd.MM.yyyy HH:mm:ss",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), r = parseInt(e[4], 10), o = parseInt(e[5], 10), s = parseInt(e[6], 10);
        return Gn(t, n) && Un(r, o, s);
      }
    },
    {
      regex: Iu,
      format: "dd.MM.yyyy HH:mm",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), r = parseInt(e[4], 10), o = parseInt(e[5], 10);
        return Gn(t, n) && Un(r, o);
      }
    },
    {
      regex: Au,
      format: "dd.MM.yyyy",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10);
        return Gn(t, n);
      }
    },
    {
      regex: Du,
      format: "MM/dd/yyyy HH:mm:ss",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), r = parseInt(e[4], 10), o = parseInt(e[5], 10), s = parseInt(e[6], 10);
        return yr(t, n) && Un(r, o, s);
      }
    },
    {
      regex: Tu,
      format: "MM/dd/yyyy HH:mm",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), r = parseInt(e[4], 10), o = parseInt(e[5], 10);
        return yr(t, n) && Un(r, o);
      }
    },
    {
      regex: Fu,
      format: "MM/dd/yyyy",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10);
        return yr(t, n);
      }
    }
  ];
  function Eu(e) {
    const t = e.trim();
    if (!t) return null;
    for (const n of zu) {
      const r = t.match(n.regex);
      if (r) {
        if (n.validate && !n.validate(r)) continue;
        return n.format;
      }
    }
    return null;
  }
  function ku(e) {
    return !Number.isFinite(e) || e < 0 ? null : e >= 1e11 ? "epoch-ms" : e >= 1e9 ? "epoch-s" : null;
  }
  function Ou(e) {
    if (e == null) return {
      type: "null"
    };
    if (typeof e == "boolean") return {
      type: "boolean"
    };
    if (typeof e == "number") {
      const t = ku(e);
      return t ? {
        type: "date",
        dateFormat: t
      } : {
        type: "number"
      };
    }
    if (typeof e == "string") {
      const t = Eu(e);
      return t ? {
        type: "date",
        dateFormat: t
      } : {
        type: "string"
      };
    }
    return Array.isArray(e) ? {
      type: "array"
    } : typeof e == "object" ? {
      type: "object"
    } : {
      type: "string"
    };
  }
  function Nu(e) {
    const t = Object.keys(e).filter((n) => n !== "null");
    return t.length === 0 ? "null" : t.length === 1 ? t[0] : t.length === 2 && t.includes("date") && t.includes("string") ? "date" : "mixed";
  }
  function Lu(e) {
    let t, n = 0;
    for (const [r, o] of Object.entries(e)) o > n && (t = r, n = o);
    return t;
  }
  function Hu(e) {
    return {
      path: e,
      typeCounts: {},
      dateFormatCounts: {},
      nullCount: 0,
      distinctValues: /* @__PURE__ */ new Set(),
      numMin: void 0,
      numMax: void 0,
      strLenMin: void 0,
      strLenMax: void 0,
      dateMin: void 0,
      dateMax: void 0,
      nonNullCount: 0
    };
  }
  function Jo(e, t) {
    e[t] = (e[t] || 0) + 1;
  }
  function Bu(e, t) {
    if (e == null) return null;
    if (typeof e == "number") return t === "epoch-ms" ? new Date(e).toISOString() : t === "epoch-s" ? new Date(e * 1e3).toISOString() : null;
    if (typeof e != "string") return null;
    const n = e.trim();
    if (t === "ISO-8601" || t === "YYYY-MM-DD") return n;
    if (t == null ? void 0 : t.startsWith("dd.MM.yyyy")) {
      const r = n.match(/^(\d{2})\.(\d{2})\.(\d{4})(?:\s+(\d{2}):(\d{2})(?::(\d{2}))?)?$/);
      if (r) {
        const o = r[1], s = r[2], i = r[3], l = r[4] || "00", a = r[5] || "00", d = r[6] || "00";
        return `${i}-${s}-${o}T${l}:${a}:${d}`;
      }
    }
    if (t == null ? void 0 : t.startsWith("MM/dd/yyyy")) {
      const r = n.match(/^(\d{2})\/(\d{2})\/(\d{4})(?:\s+(\d{2}):(\d{2})(?::(\d{2}))?)?$/);
      if (r) {
        const o = r[1], s = r[2], i = r[3], l = r[4] || "00", a = r[5] || "00", d = r[6] || "00";
        return `${i}-${o}-${s}T${l}:${a}:${d}`;
      }
    }
    return null;
  }
  function Vu(e, t, n = 100, r = 0.8) {
    const o = /* @__PURE__ */ new Map();
    for (const s of e) o.set(s, Hu(s));
    for (const s of t) for (const i of e) {
      const l = o.get(i);
      if (!l) {
        console.warn(`[JsonTable] Missing accumulator for path: ${i}`);
        continue;
      }
      const a = s[i], d = Ou(a);
      if (Jo(l.typeCounts, d.type), d.type === "null") {
        l.nullCount++;
        continue;
      }
      if (l.nonNullCount++, d.dateFormat && Jo(l.dateFormatCounts, d.dateFormat), l.distinctValues.size < n && l.distinctValues.add(a), typeof a == "number" && Number.isFinite(a) && ((l.numMin === void 0 || a < l.numMin) && (l.numMin = a), (l.numMax === void 0 || a > l.numMax) && (l.numMax = a)), typeof a == "string") {
        const u = a.length;
        (l.strLenMin === void 0 || u < l.strLenMin) && (l.strLenMin = u), (l.strLenMax === void 0 || u > l.strLenMax) && (l.strLenMax = u);
      }
      if (d.dateFormat) {
        const u = Bu(a, d.dateFormat);
        u !== null && ((l.dateMin === void 0 || u < l.dateMin) && (l.dateMin = u), (l.dateMax === void 0 || u > l.dateMax) && (l.dateMax = u));
      }
    }
    return e.map((s) => {
      const i = o.get(s);
      let l = Nu(i.typeCounts);
      l === "date" && i.nonNullCount > 0 && (i.typeCounts.date || 0) / i.nonNullCount < r && (l = "string");
      const a = l === "date" ? Lu(i.dateFormatCounts) : void 0, d = l === "date" ? i.typeCounts.date || 0 : i.typeCounts[l] || 0, u = i.nonNullCount > 0 ? Math.round(d / i.nonNullCount * 100) / 100 : 0, p = {
        path: s,
        type: l,
        nullable: i.nullCount > 0,
        typeCounts: {
          ...i.typeCounts
        },
        nullCount: i.nullCount,
        distinctCount: i.distinctValues.size,
        confidence: u
      };
      return a && (p.dateFormat = a), l === "number" && (i.numMin !== void 0 && (p.min = i.numMin), i.numMax !== void 0 && (p.max = i.numMax)), l === "date" && (i.dateMin !== void 0 && (p.min = i.dateMin), i.dateMax !== void 0 && (p.max = i.dateMax)), (l === "string" || l === "mixed") && (i.strLenMin !== void 0 && (p.stringLengthMin = i.strLenMin), i.strLenMax !== void 0 && (p.stringLengthMax = i.strLenMax)), p;
    });
  }
  function ir(e, t, n, r, o, s, i, l) {
    if (s > l.maxDepth && (l.maxDepth = s), s > i) {
      n[t] = e, r.add(t);
      return;
    }
    if (e == null) {
      n[t] = null, r.add(t);
      return;
    }
    if (Array.isArray(e)) {
      if (e.length === 0) {
        n[t] = null, r.add(t);
        return;
      }
      for (let a = 0; a < e.length; a++) {
        a > l.maxArrayIndex && (l.maxArrayIndex = a);
        const d = `${t}[${a}]`;
        ir(e[a], d, n, r, o, s + 1, i, l);
      }
      return;
    }
    if (e !== null && typeof e == "object") {
      if (o.has(e)) {
        n[t] = "[Circular]", r.add(t);
        return;
      }
      o.add(e);
      const a = Object.keys(e);
      if (a.length === 0) {
        n[t] = null, r.add(t);
        return;
      }
      for (const d of a) {
        const u = t ? `${t}.${d}` : d;
        ir(e[d], u, n, r, o, s + 1, i, l);
      }
      return;
    }
    n[t] = e, r.add(t);
  }
  function Wu(e, t = 10) {
    const n = /* @__PURE__ */ new Set(), r = {
      maxDepth: 0,
      maxArrayIndex: 0
    }, o = [];
    for (const i of e) {
      const l = {}, a = /* @__PURE__ */ new WeakSet();
      if (i != null && typeof i == "object" && !Array.isArray(i)) for (const d of Object.keys(i)) ir(i[d], d, l, n, a, 1, t, r);
      else ir(i, "_value", l, n, a, 0, t, r);
      o.push(l);
    }
    const s = Gu([
      ...n
    ]);
    for (const i of o) for (const l of s) l in i || (i[l] = null);
    return {
      paths: s,
      rows: o,
      maxDepth: r.maxDepth,
      maxArrayIndex: r.maxArrayIndex
    };
  }
  function Gu(e) {
    return e.sort((t, n) => {
      const r = Ko(t), o = Ko(n), s = Math.min(r.length, o.length);
      for (let i = 0; i < s; i++) {
        const l = r[i], a = o[i], d = Xo(l), u = Xo(a);
        if (d !== null && u !== null) {
          if (d !== u) return d - u;
          continue;
        }
        if (l !== a) return l < a ? -1 : 1;
      }
      return r.length - o.length;
    });
  }
  function Ko(e) {
    return e.split(/\./).flatMap((t) => {
      const n = [], o = /^([^[]*)((?:\[\d+\])*)$/.exec(t);
      if (o) {
        o[1] && n.push(o[1]);
        const s = o[2].match(/\[\d+\]/g);
        s && n.push(...s);
      } else n.push(t);
      return n;
    });
  }
  function Xo(e) {
    const t = /^\[(\d+)\]$/.exec(e);
    return t ? parseInt(t[1], 10) : null;
  }
  const Uu = {
    maxDepth: 10,
    maxDistinct: 100,
    dateConfidenceThreshold: 0.8
  };
  function zs(e, t) {
    const n = performance.now(), r = {
      ...Uu,
      ...t
    };
    if (!e || e.length === 0) return {
      columns: [],
      rows: [],
      meta: {
        rowCount: 0,
        columnCount: 0,
        maxDepth: 0,
        maxArrayIndex: 0,
        arrayPolicy: "index-columns",
        flattenPolicy: "dot-paths",
        dateDetectionPolicy: "heuristic",
        totalNullValues: 0,
        nullPercentage: 0,
        analysisTimeMs: 0
      }
    };
    const o = Wu(e, r.maxDepth), s = Vu(o.paths, o.rows, r.maxDistinct, r.dateConfidenceThreshold), i = o.paths.length * o.rows.length, l = s.reduce((u, p) => u + p.nullCount, 0), a = i > 0 ? Math.round(l / i * 1e3) / 10 : 0, d = Math.round((performance.now() - n) * 100) / 100;
    return {
      columns: s,
      rows: o.rows,
      meta: {
        rowCount: o.rows.length,
        columnCount: s.length,
        maxDepth: o.maxDepth,
        maxArrayIndex: o.maxArrayIndex,
        arrayPolicy: "index-columns",
        flattenPolicy: "dot-paths",
        dateDetectionPolicy: "heuristic",
        totalNullValues: l,
        nullPercentage: a,
        analysisTimeMs: d
      }
    };
  }
  function qu(e, t) {
    return y.useMemo(() => zs(e, t), [
      e,
      t == null ? void 0 : t.maxDepth,
      t == null ? void 0 : t.maxDistinct,
      t == null ? void 0 : t.dateConfidenceThreshold
    ]);
  }
  function Yu({ open: e, onClose: t, columns: n, onSave: r, theme: o, data: s, socket: i }) {
    const [l, a] = y.useState(n), [d, u] = y.useState(null), [p, g] = y.useState([]), [f, h] = y.useState(false), [m, v] = y.useState(false), [x, _] = y.useState(null), [S, j] = y.useState(null), M = y.useRef(false), w = y.useRef(() => Promise.resolve()), $ = y.useRef(n), R = y.useMemo(() => JSON.stringify(n), [
      n
    ]), T = y.useMemo(() => JSON.stringify(l) !== R, [
      l,
      R
    ]);
    y.useEffect(() => {
      e && (a(n), $.current = n, u(n.length > 0 ? n[0].path : null), M.current = false, j(null), _(null));
    }, [
      e,
      n
    ]), y.useEffect(() => {
      e && !M.current && (M.current = true, w.current());
    }, [
      e
    ]);
    const F = y.useCallback(async () => {
      h(true), j(null), _(null);
      try {
        const C = s.oid;
        if (!C) return;
        const I = await i.getState(C);
        if ((I == null ? void 0 : I.val) === null || (I == null ? void 0 : I.val) === void 0) return;
        let E;
        const L = I.val;
        if (typeof L == "string") try {
          const X = JSON.parse(L);
          E = Array.isArray(X) ? X : [
            X
          ];
        } catch {
          return;
        }
        else if (Array.isArray(L)) E = L;
        else if (typeof L == "object" && L !== null) E = [
          L
        ];
        else return;
        const re = s.tableMaxDepth || 10, J = zs(E, {
          maxDepth: re
        });
        if (J.meta.maxDepth > re) {
          const X = b.t("json_table_depth_warning").replace("{{actual}}", String(J.meta.maxDepth)).replace("{{configured}}", String(re));
          _(X);
        }
        g(J.columns);
        const ye = new Map($.current.map((X) => [
          X.path,
          X
        ])), he = new Set(J.columns.map((X) => X.path)), le = $.current.filter((X) => he.has(X.path)), Re = J.columns.filter((X) => !ye.has(X.path)).map((X) => ({
          path: X.path,
          visible: true,
          headerName: X.path.split(".").pop() || X.path,
          sortable: "auto",
          filterable: "auto"
        })), ae = [
          ...le,
          ...Re
        ];
        a(ae), $.current = ae, u((X) => X === null && ae.length > 0 ? ae[0].path : X);
      } catch (C) {
        const I = C instanceof Error ? C.message : "Failed to discover columns";
        j(I);
      } finally {
        h(false);
      }
    }, [
      s,
      i
    ]);
    y.useEffect(() => {
      w.current = F;
    }, [
      F
    ]), y.useEffect(() => {
      $.current = l;
    }, [
      l
    ]);
    const z = y.useCallback((C) => {
      a((I) => I.map((E) => E.path === C.path ? C : E));
    }, []), q = y.useCallback((C) => {
      a(C);
    }, []), B = y.useCallback(() => {
      r(l), t();
    }, [
      l,
      r,
      t
    ]), Y = y.useCallback((C, I) => {
      if (I === "backdropClick" && T) {
        v(true);
        return;
      }
      t();
    }, [
      T,
      t
    ]), Z = y.useMemo(() => d ? l.find((C) => C.path === d) : null, [
      d,
      l
    ]), W = y.useMemo(() => d ? p.find((C) => C.path === d) : void 0, [
      d,
      p
    ]), N = y.useMemo(() => "json-table-column-editor-title", []);
    return c.jsxs(ii, {
      theme: o,
      children: [
        c.jsxs(Gr, {
          open: e,
          onClose: Y,
          maxWidth: "lg",
          fullWidth: true,
          "aria-labelledby": N,
          slotProps: {
            paper: {
              sx: {
                height: "80vh",
                maxHeight: "900px"
              }
            }
          },
          children: [
            c.jsx(Ur, {
              sx: {
                py: 1.5,
                px: 2.5
              },
              id: N,
              children: c.jsxs(H, {
                sx: {
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                },
                children: [
                  c.jsx(P, {
                    variant: "h6",
                    children: b.t("json_table_column_editor_title")
                  }),
                  c.jsx(we, {
                    onClick: () => Y(),
                    size: "small",
                    sx: {
                      color: "text.secondary"
                    },
                    "aria-label": b.t("close"),
                    children: c.jsx(tr, {})
                  })
                ]
              })
            }),
            c.jsxs(qr, {
              dividers: true,
              sx: {
                p: 0,
                display: "flex",
                flexDirection: "column",
                overflow: "hidden"
              },
              children: [
                x && c.jsx(Kn, {
                  severity: "warning",
                  onClose: () => _(null),
                  sx: {
                    mx: 2,
                    mt: 2
                  },
                  children: x
                }),
                S && c.jsx(Kn, {
                  severity: "error",
                  onClose: () => j(null),
                  sx: {
                    mx: 2,
                    mt: 2
                  },
                  children: S
                }),
                c.jsxs(H, {
                  sx: {
                    display: "flex",
                    flex: 1,
                    overflow: "hidden"
                  },
                  children: [
                    c.jsx(H, {
                      sx: {
                        width: "40%",
                        minWidth: 280,
                        borderRight: 1,
                        borderColor: "divider",
                        display: "flex",
                        flexDirection: "column",
                        overflow: "hidden"
                      },
                      children: c.jsx(Pc, {
                        columns: l,
                        discoveredColumns: p,
                        selectedPath: d,
                        onSelect: u,
                        onChange: q,
                        onRefresh: F,
                        loading: f
                      })
                    }),
                    c.jsx(H, {
                      sx: {
                        width: "60%",
                        display: "flex",
                        flexDirection: "column",
                        overflow: "hidden"
                      },
                      children: Z ? c.jsx(Ru, {
                        column: Z,
                        discoveredColumn: W,
                        onChange: z,
                        globalSorting: s.tableSorting,
                        globalFiltering: s.tableFiltering
                      }) : c.jsx(H, {
                        sx: {
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          height: "100%"
                        },
                        children: c.jsx(P, {
                          variant: "body2",
                          color: "text.secondary",
                          children: l.length > 0 ? b.t("json_table_select_column") : b.t("json_table_no_columns")
                        })
                      })
                    })
                  ]
                })
              ]
            }),
            c.jsxs(Yr, {
              sx: {
                px: 2.5,
                py: 1.5
              },
              children: [
                c.jsx(st, {
                  onClick: () => Y(),
                  children: b.t("cancel")
                }),
                c.jsx(st, {
                  variant: "contained",
                  onClick: B,
                  disabled: !T,
                  children: b.t("save")
                })
              ]
            })
          ]
        }),
        c.jsx(va, {
          open: m,
          autoHideDuration: 3e3,
          onClose: () => v(false),
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "center"
          },
          children: c.jsx(Kn, {
            severity: "warning",
            onClose: () => v(false),
            children: b.t("json_table_unsaved_changes")
          })
        })
      ]
    });
  }
  function Ju(e, t, n, r) {
    const o = e.name || "columnConfig", s = r.context.theme, [i, l] = y.useState(false), a = y.useMemo(() => Ps(t[o]), [
      t,
      o
    ]), d = a.filter((v) => v.visible).length, u = a.length, p = a.some((v) => v.format), g = a.some((v) => v.cellStyle && v.cellStyle.length > 0), f = y.useCallback((v) => {
      const x = JSON.stringify(v), _ = `b64:${Ac(x)}`;
      n({
        [o]: _
      });
    }, [
      o,
      n
    ]), h = y.useCallback(() => {
      l(true);
    }, []), m = y.useCallback(() => {
      l(false);
    }, []);
    return c.jsxs(H, {
      sx: {
        mt: 1,
        width: "100%"
      },
      children: [
        c.jsx(st, {
          variant: "outlined",
          startIcon: c.jsx(Mc, {}),
          onClick: h,
          fullWidth: true,
          sx: {
            textTransform: "none"
          },
          "aria-label": b.t("json_table_configure_columns"),
          "aria-haspopup": "dialog",
          children: b.t("json_table_configure_columns")
        }),
        u > 0 && c.jsxs(P, {
          variant: "caption",
          color: "primary.main",
          sx: {
            mt: 0.5,
            display: "block"
          },
          "aria-live": "polite",
          children: [
            d,
            " / ",
            u,
            " ",
            b.t("json_table_columns_visible"),
            p && ` \xB7 ${b.t("json_table_has_formatting")}`,
            g && ` \xB7 ${b.t("json_table_has_styling")}`
          ]
        }),
        c.jsx(Yu, {
          open: i,
          onClose: m,
          columns: a,
          onSave: f,
          theme: s,
          data: t,
          socket: r.context.socket
        })
      ]
    });
  }
  const Ku = () => [
    {
      label: "",
      type: "custom",
      component: () => c.jsx(Je, {
        dividerText: "json_table_column_config"
      })
    },
    {
      name: "columnConfig",
      label: "json_table_column_config_label",
      type: "custom",
      component: Ju
    },
    {
      label: "",
      type: "custom",
      component: () => c.jsx(Je, {
        dividerText: "json_table_features"
      })
    },
    {
      name: "tableSorting",
      type: "checkbox",
      label: "json_table_sorting",
      default: true
    },
    {
      name: "tableSortingMulti",
      type: "checkbox",
      label: "json_table_sorting_multi",
      default: false,
      tooltip: "json_table_sorting_multi_tooltip"
    },
    {
      name: "tableFiltering",
      type: "checkbox",
      label: "json_table_filtering",
      default: true,
      tooltip: "json_table_filtering_tooltip"
    },
    {
      name: "tableQuickFilter",
      type: "checkbox",
      label: "json_table_quick_filter",
      default: false
    },
    {
      name: "tableColumnMenu",
      type: "checkbox",
      label: "json_table_column_menu",
      default: true
    },
    {
      name: "tableHiding",
      type: "checkbox",
      label: "json_table_hiding",
      default: true,
      tooltip: "json_table_hiding_tooltip"
    },
    {
      label: "",
      type: "custom",
      component: () => c.jsx(Je, {
        dividerText: "json_table_pagination"
      })
    },
    {
      name: "tablePagination",
      type: "checkbox",
      label: "json_table_pagination_enabled",
      default: true
    },
    {
      name: "tablePageSize",
      type: "number",
      label: "json_table_page_size",
      default: 25,
      min: 1
    },
    {
      name: "tablePageSizeOptions",
      type: "text",
      label: "json_table_page_size_options",
      default: "10,25,50,100",
      tooltip: "json_table_page_size_options_tooltip"
    },
    {
      name: "tableVirtualizeThreshold",
      type: "number",
      label: "json_table_virtualize_threshold",
      default: 50,
      min: 0,
      tooltip: "json_table_virtualize_threshold_tooltip"
    },
    {
      label: "",
      type: "custom",
      component: () => c.jsx(Je, {
        dividerText: "json_table_selection"
      })
    },
    {
      name: "tableRowSelection",
      type: "checkbox",
      label: "json_table_row_selection",
      default: false
    },
    {
      label: "",
      type: "custom",
      component: () => c.jsx(Je, {
        dividerText: "json_table_analysis"
      })
    },
    {
      name: "tableMaxDepth",
      type: "number",
      label: "json_table_max_depth",
      default: 10,
      min: 1,
      max: 50,
      tooltip: "json_table_max_depth_tooltip"
    },
    {
      label: "",
      type: "custom",
      component: () => c.jsx(Je, {
        dividerText: "json_table_layout"
      })
    },
    {
      name: "tableDensity",
      label: "json_table_density",
      type: "select",
      options: [
        {
          value: "compact",
          label: "compact"
        },
        {
          value: "standard",
          label: "standard"
        },
        {
          value: "comfortable",
          label: "comfortable"
        }
      ],
      default: "standard",
      noTranslation: true
    },
    {
      name: "tableRowHeight",
      type: "number",
      label: "json_table_row_height",
      min: 20,
      tooltip: "json_table_row_height_tooltip"
    },
    {
      name: "tableHeaderHeight",
      type: "number",
      label: "json_table_header_height",
      min: 20
    },
    {
      name: "tableAutoSize",
      type: "checkbox",
      label: "json_table_auto_size",
      default: false
    },
    {
      name: "tableHeaderElevation",
      label: "json_table_header_elevation",
      type: "slider",
      min: 0,
      max: 24,
      step: 1,
      default: 6,
      tooltip: "json_table_header_elevation_tooltip"
    },
    {
      name: "jsonTablePadding",
      type: "number",
      label: "json_table_padding",
      default: 1,
      step: 0.5,
      min: 0
    },
    {
      label: "",
      type: "custom",
      component: () => c.jsx(Je, {
        dividerText: "group_table_border"
      })
    },
    {
      name: "borderWidth",
      label: "table_border_width",
      type: "slider",
      min: 0,
      max: 20,
      step: 1,
      default: 0
    },
    {
      name: "borderStyle",
      label: "table_border_style",
      type: "select",
      options: [
        {
          value: "none",
          label: "none"
        },
        {
          value: "dotted",
          label: "dotted"
        },
        {
          value: "dashed",
          label: "dashed"
        },
        {
          value: "solid",
          label: "solid"
        },
        {
          value: "double",
          label: "double"
        },
        {
          value: "groove",
          label: "groove"
        },
        {
          value: "ridge",
          label: "ridge"
        },
        {
          value: "inset",
          label: "inset"
        },
        {
          value: "outset",
          label: "outset"
        },
        {
          value: "hidden",
          label: "hidden"
        }
      ],
      default: "solid",
      noTranslation: true
    },
    xt({
      name: "borderColor",
      label: "table_border_color",
      noGradient: true
    }),
    {
      name: "borderRadius",
      label: "table_border_radius",
      type: "text",
      default: ""
    },
    {
      label: "",
      type: "custom",
      component: () => c.jsx(Je, {
        dividerText: "json_table_header_style"
      })
    },
    xt({
      name: "tableHeaderBgColor",
      label: "json_table_header_bg_color"
    }),
    xt({
      name: "tableHeaderTextColor",
      label: "json_table_header_text_color",
      noGradient: true
    }),
    {
      name: "tableHeaderFontSize",
      type: "number",
      label: "json_table_header_font_size",
      min: 8
    },
    {
      label: "",
      type: "custom",
      component: () => c.jsx(Je, {})
    },
    {
      name: "headerBorderWidth",
      label: "json_table_header_border_width",
      type: "slider",
      min: 0,
      max: 10,
      step: 1,
      default: 0
    },
    xt({
      name: "headerBorderColor",
      label: "json_table_header_border_color",
      noGradient: true
    }),
    {
      label: "",
      type: "custom",
      component: () => c.jsx(Je, {
        dividerText: "json_table_borders"
      })
    },
    {
      name: "tableShowCellBorders",
      type: "checkbox",
      label: "json_table_show_cell_borders",
      default: false
    },
    {
      name: "verticalCellBorderWidth",
      label: "vertical_cell_border_width",
      type: "slider",
      min: 0,
      max: 10,
      step: 1,
      default: 1,
      hidden: "!data.tableShowCellBorders"
    },
    xt({
      name: "verticalCellBorderColor",
      label: "vertical_cell_border_color",
      noGradient: true,
      hidden: "!data.tableShowCellBorders"
    }),
    {
      label: "",
      type: "custom",
      component: () => c.jsx(Je, {})
    },
    {
      name: "tableShowRowBorders",
      type: "checkbox",
      label: "json_table_show_row_borders",
      default: true
    },
    {
      name: "horizontalCellBorderWidth",
      label: "horizontal_cell_border_width",
      type: "slider",
      min: 0,
      max: 10,
      step: 1,
      default: 1,
      hidden: "!data.tableShowRowBorders"
    },
    xt({
      name: "horizontalCellBorderColor",
      label: "horizontal_cell_border_color",
      noGradient: true,
      hidden: "!data.tableShowRowBorders"
    }),
    {
      label: "",
      type: "custom",
      component: () => c.jsx(Je, {
        dividerText: "json_table_cell_style"
      })
    },
    xt({
      name: "evenRowColor",
      label: "json_table_even_row_color"
    }),
    xt({
      name: "oddRowColor",
      label: "json_table_odd_row_color"
    })
  ];
  function Ct(e, t) {
    return typeof e == "function" ? e(t) : e;
  }
  function Ge(e, t) {
    return (n) => {
      t.setState((r) => ({
        ...r,
        [e]: Ct(n, r[e])
      }));
    };
  }
  function dr(e) {
    return e instanceof Function;
  }
  function Xu(e) {
    return Array.isArray(e) && e.every((t) => typeof t == "number");
  }
  function Qu(e, t) {
    const n = [], r = (o) => {
      o.forEach((s) => {
        n.push(s);
        const i = t(s);
        i != null && i.length && r(i);
      });
    };
    return r(e), n;
  }
  function k(e, t, n) {
    let r = [], o;
    return (s) => {
      let i;
      n.key && n.debug && (i = Date.now());
      const l = e(s);
      if (!(l.length !== r.length || l.some((u, p) => r[p] !== u))) return o;
      r = l;
      let d;
      if (n.key && n.debug && (d = Date.now()), o = t(...l), n == null || n.onChange == null || n.onChange(o), n.key && n.debug && n != null && n.debug()) {
        const u = Math.round((Date.now() - i) * 100) / 100, p = Math.round((Date.now() - d) * 100) / 100, g = p / 16, f = (h, m) => {
          for (h = String(h); h.length < m; ) h = " " + h;
          return h;
        };
        console.info(`%c\u23F1 ${f(p, 5)} /${f(u, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * g, 120))}deg 100% 31%);`, n == null ? void 0 : n.key);
      }
      return o;
    };
  }
  function O(e, t, n, r) {
    return {
      debug: () => {
        var o;
        return (o = e == null ? void 0 : e.debugAll) != null ? o : e[t];
      },
      key: false,
      onChange: r
    };
  }
  function Zu(e, t, n, r) {
    const o = () => {
      var i;
      return (i = s.getValue()) != null ? i : e.options.renderFallbackValue;
    }, s = {
      id: `${t.id}_${n.id}`,
      row: t,
      column: n,
      getValue: () => t.getValue(r),
      renderValue: o,
      getContext: k(() => [
        e,
        n,
        t,
        s
      ], (i, l, a, d) => ({
        table: i,
        column: l,
        row: a,
        cell: d,
        getValue: d.getValue,
        renderValue: d.renderValue
      }), O(e.options, "debugCells"))
    };
    return e._features.forEach((i) => {
      i.createCell == null || i.createCell(s, n, t, e);
    }, {}), s;
  }
  function ed(e, t, n, r) {
    var o, s;
    const l = {
      ...e._getDefaultColumnDef(),
      ...t
    }, a = l.accessorKey;
    let d = (o = (s = l.id) != null ? s : a ? typeof String.prototype.replaceAll == "function" ? a.replaceAll(".", "_") : a.replace(/\./g, "_") : void 0) != null ? o : typeof l.header == "string" ? l.header : void 0, u;
    if (l.accessorFn ? u = l.accessorFn : a && (a.includes(".") ? u = (g) => {
      let f = g;
      for (const m of a.split(".")) {
        var h;
        f = (h = f) == null ? void 0 : h[m];
      }
      return f;
    } : u = (g) => g[l.accessorKey]), !d) throw new Error();
    let p = {
      id: `${String(d)}`,
      accessorFn: u,
      parent: r,
      depth: n,
      columnDef: l,
      columns: [],
      getFlatColumns: k(() => [
        true
      ], () => {
        var g;
        return [
          p,
          ...(g = p.columns) == null ? void 0 : g.flatMap((f) => f.getFlatColumns())
        ];
      }, O(e.options, "debugColumns")),
      getLeafColumns: k(() => [
        e._getOrderColumnsFn()
      ], (g) => {
        var f;
        if ((f = p.columns) != null && f.length) {
          let h = p.columns.flatMap((m) => m.getLeafColumns());
          return g(h);
        }
        return [
          p
        ];
      }, O(e.options, "debugColumns"))
    };
    for (const g of e._features) g.createColumn == null || g.createColumn(p, e);
    return p;
  }
  const Ie = "debugHeaders";
  function Qo(e, t, n) {
    var r;
    let s = {
      id: (r = n.id) != null ? r : t.id,
      column: t,
      index: n.index,
      isPlaceholder: !!n.isPlaceholder,
      placeholderId: n.placeholderId,
      depth: n.depth,
      subHeaders: [],
      colSpan: 0,
      rowSpan: 0,
      headerGroup: null,
      getLeafHeaders: () => {
        const i = [], l = (a) => {
          a.subHeaders && a.subHeaders.length && a.subHeaders.map(l), i.push(a);
        };
        return l(s), i;
      },
      getContext: () => ({
        table: e,
        header: s,
        column: t
      })
    };
    return e._features.forEach((i) => {
      i.createHeader == null || i.createHeader(s, e);
    }), s;
  }
  const td = {
    createTable: (e) => {
      e.getHeaderGroups = k(() => [
        e.getAllColumns(),
        e.getVisibleLeafColumns(),
        e.getState().columnPinning.left,
        e.getState().columnPinning.right
      ], (t, n, r, o) => {
        var s, i;
        const l = (s = r == null ? void 0 : r.map((p) => n.find((g) => g.id === p)).filter(Boolean)) != null ? s : [], a = (i = o == null ? void 0 : o.map((p) => n.find((g) => g.id === p)).filter(Boolean)) != null ? i : [], d = n.filter((p) => !(r != null && r.includes(p.id)) && !(o != null && o.includes(p.id)));
        return qn(t, [
          ...l,
          ...d,
          ...a
        ], e);
      }, O(e.options, Ie)), e.getCenterHeaderGroups = k(() => [
        e.getAllColumns(),
        e.getVisibleLeafColumns(),
        e.getState().columnPinning.left,
        e.getState().columnPinning.right
      ], (t, n, r, o) => (n = n.filter((s) => !(r != null && r.includes(s.id)) && !(o != null && o.includes(s.id))), qn(t, n, e, "center")), O(e.options, Ie)), e.getLeftHeaderGroups = k(() => [
        e.getAllColumns(),
        e.getVisibleLeafColumns(),
        e.getState().columnPinning.left
      ], (t, n, r) => {
        var o;
        const s = (o = r == null ? void 0 : r.map((i) => n.find((l) => l.id === i)).filter(Boolean)) != null ? o : [];
        return qn(t, s, e, "left");
      }, O(e.options, Ie)), e.getRightHeaderGroups = k(() => [
        e.getAllColumns(),
        e.getVisibleLeafColumns(),
        e.getState().columnPinning.right
      ], (t, n, r) => {
        var o;
        const s = (o = r == null ? void 0 : r.map((i) => n.find((l) => l.id === i)).filter(Boolean)) != null ? o : [];
        return qn(t, s, e, "right");
      }, O(e.options, Ie)), e.getFooterGroups = k(() => [
        e.getHeaderGroups()
      ], (t) => [
        ...t
      ].reverse(), O(e.options, Ie)), e.getLeftFooterGroups = k(() => [
        e.getLeftHeaderGroups()
      ], (t) => [
        ...t
      ].reverse(), O(e.options, Ie)), e.getCenterFooterGroups = k(() => [
        e.getCenterHeaderGroups()
      ], (t) => [
        ...t
      ].reverse(), O(e.options, Ie)), e.getRightFooterGroups = k(() => [
        e.getRightHeaderGroups()
      ], (t) => [
        ...t
      ].reverse(), O(e.options, Ie)), e.getFlatHeaders = k(() => [
        e.getHeaderGroups()
      ], (t) => t.map((n) => n.headers).flat(), O(e.options, Ie)), e.getLeftFlatHeaders = k(() => [
        e.getLeftHeaderGroups()
      ], (t) => t.map((n) => n.headers).flat(), O(e.options, Ie)), e.getCenterFlatHeaders = k(() => [
        e.getCenterHeaderGroups()
      ], (t) => t.map((n) => n.headers).flat(), O(e.options, Ie)), e.getRightFlatHeaders = k(() => [
        e.getRightHeaderGroups()
      ], (t) => t.map((n) => n.headers).flat(), O(e.options, Ie)), e.getCenterLeafHeaders = k(() => [
        e.getCenterFlatHeaders()
      ], (t) => t.filter((n) => {
        var r;
        return !((r = n.subHeaders) != null && r.length);
      }), O(e.options, Ie)), e.getLeftLeafHeaders = k(() => [
        e.getLeftFlatHeaders()
      ], (t) => t.filter((n) => {
        var r;
        return !((r = n.subHeaders) != null && r.length);
      }), O(e.options, Ie)), e.getRightLeafHeaders = k(() => [
        e.getRightFlatHeaders()
      ], (t) => t.filter((n) => {
        var r;
        return !((r = n.subHeaders) != null && r.length);
      }), O(e.options, Ie)), e.getLeafHeaders = k(() => [
        e.getLeftHeaderGroups(),
        e.getCenterHeaderGroups(),
        e.getRightHeaderGroups()
      ], (t, n, r) => {
        var o, s, i, l, a, d;
        return [
          ...(o = (s = t[0]) == null ? void 0 : s.headers) != null ? o : [],
          ...(i = (l = n[0]) == null ? void 0 : l.headers) != null ? i : [],
          ...(a = (d = r[0]) == null ? void 0 : d.headers) != null ? a : []
        ].map((u) => u.getLeafHeaders()).flat();
      }, O(e.options, Ie));
    }
  };
  function qn(e, t, n, r) {
    var o, s;
    let i = 0;
    const l = function(g, f) {
      f === void 0 && (f = 1), i = Math.max(i, f), g.filter((h) => h.getIsVisible()).forEach((h) => {
        var m;
        (m = h.columns) != null && m.length && l(h.columns, f + 1);
      }, 0);
    };
    l(e);
    let a = [];
    const d = (g, f) => {
      const h = {
        depth: f,
        id: [
          r,
          `${f}`
        ].filter(Boolean).join("_"),
        headers: []
      }, m = [];
      g.forEach((v) => {
        const x = [
          ...m
        ].reverse()[0], _ = v.column.depth === h.depth;
        let S, j = false;
        if (_ && v.column.parent ? S = v.column.parent : (S = v.column, j = true), x && (x == null ? void 0 : x.column) === S) x.subHeaders.push(v);
        else {
          const M = Qo(n, S, {
            id: [
              r,
              f,
              S.id,
              v == null ? void 0 : v.id
            ].filter(Boolean).join("_"),
            isPlaceholder: j,
            placeholderId: j ? `${m.filter((w) => w.column === S).length}` : void 0,
            depth: f,
            index: m.length
          });
          M.subHeaders.push(v), m.push(M);
        }
        h.headers.push(v), v.headerGroup = h;
      }), a.push(h), f > 0 && d(m, f - 1);
    }, u = t.map((g, f) => Qo(n, g, {
      depth: i,
      index: f
    }));
    d(u, i - 1), a.reverse();
    const p = (g) => g.filter((h) => h.column.getIsVisible()).map((h) => {
      let m = 0, v = 0, x = [
        0
      ];
      h.subHeaders && h.subHeaders.length ? (x = [], p(h.subHeaders).forEach((S) => {
        let { colSpan: j, rowSpan: M } = S;
        m += j, x.push(M);
      })) : m = 1;
      const _ = Math.min(...x);
      return v = v + _, h.colSpan = m, h.rowSpan = v, {
        colSpan: m,
        rowSpan: v
      };
    });
    return p((o = (s = a[0]) == null ? void 0 : s.headers) != null ? o : []), a;
  }
  const ro = (e, t, n, r, o, s, i) => {
    let l = {
      id: t,
      index: r,
      original: n,
      depth: o,
      parentId: i,
      _valuesCache: {},
      _uniqueValuesCache: {},
      getValue: (a) => {
        if (l._valuesCache.hasOwnProperty(a)) return l._valuesCache[a];
        const d = e.getColumn(a);
        if (d != null && d.accessorFn) return l._valuesCache[a] = d.accessorFn(l.original, r), l._valuesCache[a];
      },
      getUniqueValues: (a) => {
        if (l._uniqueValuesCache.hasOwnProperty(a)) return l._uniqueValuesCache[a];
        const d = e.getColumn(a);
        if (d != null && d.accessorFn) return d.columnDef.getUniqueValues ? (l._uniqueValuesCache[a] = d.columnDef.getUniqueValues(l.original, r), l._uniqueValuesCache[a]) : (l._uniqueValuesCache[a] = [
          l.getValue(a)
        ], l._uniqueValuesCache[a]);
      },
      renderValue: (a) => {
        var d;
        return (d = l.getValue(a)) != null ? d : e.options.renderFallbackValue;
      },
      subRows: [],
      getLeafRows: () => Qu(l.subRows, (a) => a.subRows),
      getParentRow: () => l.parentId ? e.getRow(l.parentId, true) : void 0,
      getParentRows: () => {
        let a = [], d = l;
        for (; ; ) {
          const u = d.getParentRow();
          if (!u) break;
          a.push(u), d = u;
        }
        return a.reverse();
      },
      getAllCells: k(() => [
        e.getAllLeafColumns()
      ], (a) => a.map((d) => Zu(e, l, d, d.id)), O(e.options, "debugRows")),
      _getAllCellsByColumnId: k(() => [
        l.getAllCells()
      ], (a) => a.reduce((d, u) => (d[u.column.id] = u, d), {}), O(e.options, "debugRows"))
    };
    for (let a = 0; a < e._features.length; a++) {
      const d = e._features[a];
      d == null || d.createRow == null || d.createRow(l, e);
    }
    return l;
  }, nd = {
    createColumn: (e, t) => {
      e._getFacetedRowModel = t.options.getFacetedRowModel && t.options.getFacetedRowModel(t, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : t.getPreFilteredRowModel(), e._getFacetedUniqueValues = t.options.getFacetedUniqueValues && t.options.getFacetedUniqueValues(t, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getFacetedMinMaxValues = t.options.getFacetedMinMaxValues && t.options.getFacetedMinMaxValues(t, e.id), e.getFacetedMinMaxValues = () => {
        if (e._getFacetedMinMaxValues) return e._getFacetedMinMaxValues();
      };
    }
  }, Es = (e, t, n) => {
    var r, o;
    const s = n == null || (r = n.toString()) == null ? void 0 : r.toLowerCase();
    return !!(!((o = e.getValue(t)) == null || (o = o.toString()) == null || (o = o.toLowerCase()) == null) && o.includes(s));
  };
  Es.autoRemove = (e) => et(e);
  const ks = (e, t, n) => {
    var r;
    return !!(!((r = e.getValue(t)) == null || (r = r.toString()) == null) && r.includes(n));
  };
  ks.autoRemove = (e) => et(e);
  const Os = (e, t, n) => {
    var r;
    return ((r = e.getValue(t)) == null || (r = r.toString()) == null ? void 0 : r.toLowerCase()) === (n == null ? void 0 : n.toLowerCase());
  };
  Os.autoRemove = (e) => et(e);
  const Ns = (e, t, n) => {
    var r;
    return (r = e.getValue(t)) == null ? void 0 : r.includes(n);
  };
  Ns.autoRemove = (e) => et(e);
  const Ls = (e, t, n) => !n.some((r) => {
    var o;
    return !((o = e.getValue(t)) != null && o.includes(r));
  });
  Ls.autoRemove = (e) => et(e) || !(e != null && e.length);
  const Hs = (e, t, n) => n.some((r) => {
    var o;
    return (o = e.getValue(t)) == null ? void 0 : o.includes(r);
  });
  Hs.autoRemove = (e) => et(e) || !(e != null && e.length);
  const Bs = (e, t, n) => e.getValue(t) === n;
  Bs.autoRemove = (e) => et(e);
  const Vs = (e, t, n) => e.getValue(t) == n;
  Vs.autoRemove = (e) => et(e);
  const oo = (e, t, n) => {
    let [r, o] = n;
    const s = e.getValue(t);
    return s >= r && s <= o;
  };
  oo.resolveFilterValue = (e) => {
    let [t, n] = e, r = typeof t != "number" ? parseFloat(t) : t, o = typeof n != "number" ? parseFloat(n) : n, s = t === null || Number.isNaN(r) ? -1 / 0 : r, i = n === null || Number.isNaN(o) ? 1 / 0 : o;
    if (s > i) {
      const l = s;
      s = i, i = l;
    }
    return [
      s,
      i
    ];
  };
  oo.autoRemove = (e) => et(e) || et(e[0]) && et(e[1]);
  const dt = {
    includesString: Es,
    includesStringSensitive: ks,
    equalsString: Os,
    arrIncludes: Ns,
    arrIncludesAll: Ls,
    arrIncludesSome: Hs,
    equals: Bs,
    weakEquals: Vs,
    inNumberRange: oo
  };
  function et(e) {
    return e == null || e === "";
  }
  const rd = {
    getDefaultColumnDef: () => ({
      filterFn: "auto"
    }),
    getInitialState: (e) => ({
      columnFilters: [],
      ...e
    }),
    getDefaultOptions: (e) => ({
      onColumnFiltersChange: Ge("columnFilters", e),
      filterFromLeafRows: false,
      maxLeafRowFilterDepth: 100
    }),
    createColumn: (e, t) => {
      e.getAutoFilterFn = () => {
        const n = t.getCoreRowModel().flatRows[0], r = n == null ? void 0 : n.getValue(e.id);
        return typeof r == "string" ? dt.includesString : typeof r == "number" ? dt.inNumberRange : typeof r == "boolean" || r !== null && typeof r == "object" ? dt.equals : Array.isArray(r) ? dt.arrIncludes : dt.weakEquals;
      }, e.getFilterFn = () => {
        var n, r;
        return dr(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? e.getAutoFilterFn() : (n = (r = t.options.filterFns) == null ? void 0 : r[e.columnDef.filterFn]) != null ? n : dt[e.columnDef.filterFn];
      }, e.getCanFilter = () => {
        var n, r, o;
        return ((n = e.columnDef.enableColumnFilter) != null ? n : true) && ((r = t.options.enableColumnFilters) != null ? r : true) && ((o = t.options.enableFilters) != null ? o : true) && !!e.accessorFn;
      }, e.getIsFiltered = () => e.getFilterIndex() > -1, e.getFilterValue = () => {
        var n;
        return (n = t.getState().columnFilters) == null || (n = n.find((r) => r.id === e.id)) == null ? void 0 : n.value;
      }, e.getFilterIndex = () => {
        var n, r;
        return (n = (r = t.getState().columnFilters) == null ? void 0 : r.findIndex((o) => o.id === e.id)) != null ? n : -1;
      }, e.setFilterValue = (n) => {
        t.setColumnFilters((r) => {
          const o = e.getFilterFn(), s = r == null ? void 0 : r.find((u) => u.id === e.id), i = Ct(n, s ? s.value : void 0);
          if (Zo(o, i, e)) {
            var l;
            return (l = r == null ? void 0 : r.filter((u) => u.id !== e.id)) != null ? l : [];
          }
          const a = {
            id: e.id,
            value: i
          };
          if (s) {
            var d;
            return (d = r == null ? void 0 : r.map((u) => u.id === e.id ? a : u)) != null ? d : [];
          }
          return r != null && r.length ? [
            ...r,
            a
          ] : [
            a
          ];
        });
      };
    },
    createRow: (e, t) => {
      e.columnFilters = {}, e.columnFiltersMeta = {};
    },
    createTable: (e) => {
      e.setColumnFilters = (t) => {
        const n = e.getAllLeafColumns(), r = (o) => {
          var s;
          return (s = Ct(t, o)) == null ? void 0 : s.filter((i) => {
            const l = n.find((a) => a.id === i.id);
            if (l) {
              const a = l.getFilterFn();
              if (Zo(a, i.value, l)) return false;
            }
            return true;
          });
        };
        e.options.onColumnFiltersChange == null || e.options.onColumnFiltersChange(r);
      }, e.resetColumnFilters = (t) => {
        var n, r;
        e.setColumnFilters(t ? [] : (n = (r = e.initialState) == null ? void 0 : r.columnFilters) != null ? n : []);
      }, e.getPreFilteredRowModel = () => e.getCoreRowModel(), e.getFilteredRowModel = () => (!e._getFilteredRowModel && e.options.getFilteredRowModel && (e._getFilteredRowModel = e.options.getFilteredRowModel(e)), e.options.manualFiltering || !e._getFilteredRowModel ? e.getPreFilteredRowModel() : e._getFilteredRowModel());
    }
  };
  function Zo(e, t, n) {
    return (e && e.autoRemove ? e.autoRemove(t, n) : false) || typeof t > "u" || typeof t == "string" && !t;
  }
  const od = (e, t, n) => n.reduce((r, o) => {
    const s = o.getValue(e);
    return r + (typeof s == "number" ? s : 0);
  }, 0), sd = (e, t, n) => {
    let r;
    return n.forEach((o) => {
      const s = o.getValue(e);
      s != null && (r > s || r === void 0 && s >= s) && (r = s);
    }), r;
  }, id = (e, t, n) => {
    let r;
    return n.forEach((o) => {
      const s = o.getValue(e);
      s != null && (r < s || r === void 0 && s >= s) && (r = s);
    }), r;
  }, ld = (e, t, n) => {
    let r, o;
    return n.forEach((s) => {
      const i = s.getValue(e);
      i != null && (r === void 0 ? i >= i && (r = o = i) : (r > i && (r = i), o < i && (o = i)));
    }), [
      r,
      o
    ];
  }, ad = (e, t) => {
    let n = 0, r = 0;
    if (t.forEach((o) => {
      let s = o.getValue(e);
      s != null && (s = +s) >= s && (++n, r += s);
    }), n) return r / n;
  }, cd = (e, t) => {
    if (!t.length) return;
    const n = t.map((s) => s.getValue(e));
    if (!Xu(n)) return;
    if (n.length === 1) return n[0];
    const r = Math.floor(n.length / 2), o = n.sort((s, i) => s - i);
    return n.length % 2 !== 0 ? o[r] : (o[r - 1] + o[r]) / 2;
  }, ud = (e, t) => Array.from(new Set(t.map((n) => n.getValue(e))).values()), dd = (e, t) => new Set(t.map((n) => n.getValue(e))).size, fd = (e, t) => t.length, br = {
    sum: od,
    min: sd,
    max: id,
    extent: ld,
    mean: ad,
    median: cd,
    unique: ud,
    uniqueCount: dd,
    count: fd
  }, pd = {
    getDefaultColumnDef: () => ({
      aggregatedCell: (e) => {
        var t, n;
        return (t = (n = e.getValue()) == null || n.toString == null ? void 0 : n.toString()) != null ? t : null;
      },
      aggregationFn: "auto"
    }),
    getInitialState: (e) => ({
      grouping: [],
      ...e
    }),
    getDefaultOptions: (e) => ({
      onGroupingChange: Ge("grouping", e),
      groupedColumnMode: "reorder"
    }),
    createColumn: (e, t) => {
      e.toggleGrouping = () => {
        t.setGrouping((n) => n != null && n.includes(e.id) ? n.filter((r) => r !== e.id) : [
          ...n ?? [],
          e.id
        ]);
      }, e.getCanGroup = () => {
        var n, r;
        return ((n = e.columnDef.enableGrouping) != null ? n : true) && ((r = t.options.enableGrouping) != null ? r : true) && (!!e.accessorFn || !!e.columnDef.getGroupingValue);
      }, e.getIsGrouped = () => {
        var n;
        return (n = t.getState().grouping) == null ? void 0 : n.includes(e.id);
      }, e.getGroupedIndex = () => {
        var n;
        return (n = t.getState().grouping) == null ? void 0 : n.indexOf(e.id);
      }, e.getToggleGroupingHandler = () => {
        const n = e.getCanGroup();
        return () => {
          n && e.toggleGrouping();
        };
      }, e.getAutoAggregationFn = () => {
        const n = t.getCoreRowModel().flatRows[0], r = n == null ? void 0 : n.getValue(e.id);
        if (typeof r == "number") return br.sum;
        if (Object.prototype.toString.call(r) === "[object Date]") return br.extent;
      }, e.getAggregationFn = () => {
        var n, r;
        if (!e) throw new Error();
        return dr(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : e.columnDef.aggregationFn === "auto" ? e.getAutoAggregationFn() : (n = (r = t.options.aggregationFns) == null ? void 0 : r[e.columnDef.aggregationFn]) != null ? n : br[e.columnDef.aggregationFn];
      };
    },
    createTable: (e) => {
      e.setGrouping = (t) => e.options.onGroupingChange == null ? void 0 : e.options.onGroupingChange(t), e.resetGrouping = (t) => {
        var n, r;
        e.setGrouping(t ? [] : (n = (r = e.initialState) == null ? void 0 : r.grouping) != null ? n : []);
      }, e.getPreGroupedRowModel = () => e.getFilteredRowModel(), e.getGroupedRowModel = () => (!e._getGroupedRowModel && e.options.getGroupedRowModel && (e._getGroupedRowModel = e.options.getGroupedRowModel(e)), e.options.manualGrouping || !e._getGroupedRowModel ? e.getPreGroupedRowModel() : e._getGroupedRowModel());
    },
    createRow: (e, t) => {
      e.getIsGrouped = () => !!e.groupingColumnId, e.getGroupingValue = (n) => {
        if (e._groupingValuesCache.hasOwnProperty(n)) return e._groupingValuesCache[n];
        const r = t.getColumn(n);
        return r != null && r.columnDef.getGroupingValue ? (e._groupingValuesCache[n] = r.columnDef.getGroupingValue(e.original), e._groupingValuesCache[n]) : e.getValue(n);
      }, e._groupingValuesCache = {};
    },
    createCell: (e, t, n, r) => {
      e.getIsGrouped = () => t.getIsGrouped() && t.id === n.groupingColumnId, e.getIsPlaceholder = () => !e.getIsGrouped() && t.getIsGrouped(), e.getIsAggregated = () => {
        var o;
        return !e.getIsGrouped() && !e.getIsPlaceholder() && !!((o = n.subRows) != null && o.length);
      };
    }
  };
  function gd(e, t, n) {
    if (!(t != null && t.length) || !n) return e;
    const r = e.filter((s) => !t.includes(s.id));
    return n === "remove" ? r : [
      ...t.map((s) => e.find((i) => i.id === s)).filter(Boolean),
      ...r
    ];
  }
  const hd = {
    getInitialState: (e) => ({
      columnOrder: [],
      ...e
    }),
    getDefaultOptions: (e) => ({
      onColumnOrderChange: Ge("columnOrder", e)
    }),
    createColumn: (e, t) => {
      e.getIndex = k((n) => [
        xn(t, n)
      ], (n) => n.findIndex((r) => r.id === e.id), O(t.options, "debugColumns")), e.getIsFirstColumn = (n) => {
        var r;
        return ((r = xn(t, n)[0]) == null ? void 0 : r.id) === e.id;
      }, e.getIsLastColumn = (n) => {
        var r;
        const o = xn(t, n);
        return ((r = o[o.length - 1]) == null ? void 0 : r.id) === e.id;
      };
    },
    createTable: (e) => {
      e.setColumnOrder = (t) => e.options.onColumnOrderChange == null ? void 0 : e.options.onColumnOrderChange(t), e.resetColumnOrder = (t) => {
        var n;
        e.setColumnOrder(t ? [] : (n = e.initialState.columnOrder) != null ? n : []);
      }, e._getOrderColumnsFn = k(() => [
        e.getState().columnOrder,
        e.getState().grouping,
        e.options.groupedColumnMode
      ], (t, n, r) => (o) => {
        let s = [];
        if (!(t != null && t.length)) s = o;
        else {
          const i = [
            ...t
          ], l = [
            ...o
          ];
          for (; l.length && i.length; ) {
            const a = i.shift(), d = l.findIndex((u) => u.id === a);
            d > -1 && s.push(l.splice(d, 1)[0]);
          }
          s = [
            ...s,
            ...l
          ];
        }
        return gd(s, n, r);
      }, O(e.options, "debugTable"));
    }
  }, vr = () => ({
    left: [],
    right: []
  }), md = {
    getInitialState: (e) => ({
      columnPinning: vr(),
      ...e
    }),
    getDefaultOptions: (e) => ({
      onColumnPinningChange: Ge("columnPinning", e)
    }),
    createColumn: (e, t) => {
      e.pin = (n) => {
        const r = e.getLeafColumns().map((o) => o.id).filter(Boolean);
        t.setColumnPinning((o) => {
          var s, i;
          if (n === "right") {
            var l, a;
            return {
              left: ((l = o == null ? void 0 : o.left) != null ? l : []).filter((p) => !(r != null && r.includes(p))),
              right: [
                ...((a = o == null ? void 0 : o.right) != null ? a : []).filter((p) => !(r != null && r.includes(p))),
                ...r
              ]
            };
          }
          if (n === "left") {
            var d, u;
            return {
              left: [
                ...((d = o == null ? void 0 : o.left) != null ? d : []).filter((p) => !(r != null && r.includes(p))),
                ...r
              ],
              right: ((u = o == null ? void 0 : o.right) != null ? u : []).filter((p) => !(r != null && r.includes(p)))
            };
          }
          return {
            left: ((s = o == null ? void 0 : o.left) != null ? s : []).filter((p) => !(r != null && r.includes(p))),
            right: ((i = o == null ? void 0 : o.right) != null ? i : []).filter((p) => !(r != null && r.includes(p)))
          };
        });
      }, e.getCanPin = () => e.getLeafColumns().some((r) => {
        var o, s, i;
        return ((o = r.columnDef.enablePinning) != null ? o : true) && ((s = (i = t.options.enableColumnPinning) != null ? i : t.options.enablePinning) != null ? s : true);
      }), e.getIsPinned = () => {
        const n = e.getLeafColumns().map((l) => l.id), { left: r, right: o } = t.getState().columnPinning, s = n.some((l) => r == null ? void 0 : r.includes(l)), i = n.some((l) => o == null ? void 0 : o.includes(l));
        return s ? "left" : i ? "right" : false;
      }, e.getPinnedIndex = () => {
        var n, r;
        const o = e.getIsPinned();
        return o ? (n = (r = t.getState().columnPinning) == null || (r = r[o]) == null ? void 0 : r.indexOf(e.id)) != null ? n : -1 : 0;
      };
    },
    createRow: (e, t) => {
      e.getCenterVisibleCells = k(() => [
        e._getAllVisibleCells(),
        t.getState().columnPinning.left,
        t.getState().columnPinning.right
      ], (n, r, o) => {
        const s = [
          ...r ?? [],
          ...o ?? []
        ];
        return n.filter((i) => !s.includes(i.column.id));
      }, O(t.options, "debugRows")), e.getLeftVisibleCells = k(() => [
        e._getAllVisibleCells(),
        t.getState().columnPinning.left
      ], (n, r) => (r ?? []).map((s) => n.find((i) => i.column.id === s)).filter(Boolean).map((s) => ({
        ...s,
        position: "left"
      })), O(t.options, "debugRows")), e.getRightVisibleCells = k(() => [
        e._getAllVisibleCells(),
        t.getState().columnPinning.right
      ], (n, r) => (r ?? []).map((s) => n.find((i) => i.column.id === s)).filter(Boolean).map((s) => ({
        ...s,
        position: "right"
      })), O(t.options, "debugRows"));
    },
    createTable: (e) => {
      e.setColumnPinning = (t) => e.options.onColumnPinningChange == null ? void 0 : e.options.onColumnPinningChange(t), e.resetColumnPinning = (t) => {
        var n, r;
        return e.setColumnPinning(t ? vr() : (n = (r = e.initialState) == null ? void 0 : r.columnPinning) != null ? n : vr());
      }, e.getIsSomeColumnsPinned = (t) => {
        var n;
        const r = e.getState().columnPinning;
        if (!t) {
          var o, s;
          return !!((o = r.left) != null && o.length || (s = r.right) != null && s.length);
        }
        return !!((n = r[t]) != null && n.length);
      }, e.getLeftLeafColumns = k(() => [
        e.getAllLeafColumns(),
        e.getState().columnPinning.left
      ], (t, n) => (n ?? []).map((r) => t.find((o) => o.id === r)).filter(Boolean), O(e.options, "debugColumns")), e.getRightLeafColumns = k(() => [
        e.getAllLeafColumns(),
        e.getState().columnPinning.right
      ], (t, n) => (n ?? []).map((r) => t.find((o) => o.id === r)).filter(Boolean), O(e.options, "debugColumns")), e.getCenterLeafColumns = k(() => [
        e.getAllLeafColumns(),
        e.getState().columnPinning.left,
        e.getState().columnPinning.right
      ], (t, n, r) => {
        const o = [
          ...n ?? [],
          ...r ?? []
        ];
        return t.filter((s) => !o.includes(s.id));
      }, O(e.options, "debugColumns"));
    }
  };
  function yd(e) {
    return e || (typeof document < "u" ? document : null);
  }
  const Yn = {
    size: 150,
    minSize: 20,
    maxSize: Number.MAX_SAFE_INTEGER
  }, xr = () => ({
    startOffset: null,
    startSize: null,
    deltaOffset: null,
    deltaPercentage: null,
    isResizingColumn: false,
    columnSizingStart: []
  }), bd = {
    getDefaultColumnDef: () => Yn,
    getInitialState: (e) => ({
      columnSizing: {},
      columnSizingInfo: xr(),
      ...e
    }),
    getDefaultOptions: (e) => ({
      columnResizeMode: "onEnd",
      columnResizeDirection: "ltr",
      onColumnSizingChange: Ge("columnSizing", e),
      onColumnSizingInfoChange: Ge("columnSizingInfo", e)
    }),
    createColumn: (e, t) => {
      e.getSize = () => {
        var n, r, o;
        const s = t.getState().columnSizing[e.id];
        return Math.min(Math.max((n = e.columnDef.minSize) != null ? n : Yn.minSize, (r = s ?? e.columnDef.size) != null ? r : Yn.size), (o = e.columnDef.maxSize) != null ? o : Yn.maxSize);
      }, e.getStart = k((n) => [
        n,
        xn(t, n),
        t.getState().columnSizing
      ], (n, r) => r.slice(0, e.getIndex(n)).reduce((o, s) => o + s.getSize(), 0), O(t.options, "debugColumns")), e.getAfter = k((n) => [
        n,
        xn(t, n),
        t.getState().columnSizing
      ], (n, r) => r.slice(e.getIndex(n) + 1).reduce((o, s) => o + s.getSize(), 0), O(t.options, "debugColumns")), e.resetSize = () => {
        t.setColumnSizing((n) => {
          let { [e.id]: r, ...o } = n;
          return o;
        });
      }, e.getCanResize = () => {
        var n, r;
        return ((n = e.columnDef.enableResizing) != null ? n : true) && ((r = t.options.enableColumnResizing) != null ? r : true);
      }, e.getIsResizing = () => t.getState().columnSizingInfo.isResizingColumn === e.id;
    },
    createHeader: (e, t) => {
      e.getSize = () => {
        let n = 0;
        const r = (o) => {
          if (o.subHeaders.length) o.subHeaders.forEach(r);
          else {
            var s;
            n += (s = o.column.getSize()) != null ? s : 0;
          }
        };
        return r(e), n;
      }, e.getStart = () => {
        if (e.index > 0) {
          const n = e.headerGroup.headers[e.index - 1];
          return n.getStart() + n.getSize();
        }
        return 0;
      }, e.getResizeHandler = (n) => {
        const r = t.getColumn(e.column.id), o = r == null ? void 0 : r.getCanResize();
        return (s) => {
          if (!r || !o || (s.persist == null || s.persist(), _r(s) && s.touches && s.touches.length > 1)) return;
          const i = e.getSize(), l = e ? e.getLeafHeaders().map((x) => [
            x.column.id,
            x.column.getSize()
          ]) : [
            [
              r.id,
              r.getSize()
            ]
          ], a = _r(s) ? Math.round(s.touches[0].clientX) : s.clientX, d = {}, u = (x, _) => {
            typeof _ == "number" && (t.setColumnSizingInfo((S) => {
              var j, M;
              const w = t.options.columnResizeDirection === "rtl" ? -1 : 1, $ = (_ - ((j = S == null ? void 0 : S.startOffset) != null ? j : 0)) * w, R = Math.max($ / ((M = S == null ? void 0 : S.startSize) != null ? M : 0), -0.999999);
              return S.columnSizingStart.forEach((T) => {
                let [F, z] = T;
                d[F] = Math.round(Math.max(z + z * R, 0) * 100) / 100;
              }), {
                ...S,
                deltaOffset: $,
                deltaPercentage: R
              };
            }), (t.options.columnResizeMode === "onChange" || x === "end") && t.setColumnSizing((S) => ({
              ...S,
              ...d
            })));
          }, p = (x) => u("move", x), g = (x) => {
            u("end", x), t.setColumnSizingInfo((_) => ({
              ..._,
              isResizingColumn: false,
              startOffset: null,
              startSize: null,
              deltaOffset: null,
              deltaPercentage: null,
              columnSizingStart: []
            }));
          }, f = yd(n), h = {
            moveHandler: (x) => p(x.clientX),
            upHandler: (x) => {
              f == null ? void 0 : f.removeEventListener("mousemove", h.moveHandler), f == null ? void 0 : f.removeEventListener("mouseup", h.upHandler), g(x.clientX);
            }
          }, m = {
            moveHandler: (x) => (x.cancelable && (x.preventDefault(), x.stopPropagation()), p(x.touches[0].clientX), false),
            upHandler: (x) => {
              var _;
              f == null ? void 0 : f.removeEventListener("touchmove", m.moveHandler), f == null ? void 0 : f.removeEventListener("touchend", m.upHandler), x.cancelable && (x.preventDefault(), x.stopPropagation()), g((_ = x.touches[0]) == null ? void 0 : _.clientX);
            }
          }, v = vd() ? {
            passive: false
          } : false;
          _r(s) ? (f == null ? void 0 : f.addEventListener("touchmove", m.moveHandler, v), f == null ? void 0 : f.addEventListener("touchend", m.upHandler, v)) : (f == null ? void 0 : f.addEventListener("mousemove", h.moveHandler, v), f == null ? void 0 : f.addEventListener("mouseup", h.upHandler, v)), t.setColumnSizingInfo((x) => ({
            ...x,
            startOffset: a,
            startSize: i,
            deltaOffset: 0,
            deltaPercentage: 0,
            columnSizingStart: l,
            isResizingColumn: r.id
          }));
        };
      };
    },
    createTable: (e) => {
      e.setColumnSizing = (t) => e.options.onColumnSizingChange == null ? void 0 : e.options.onColumnSizingChange(t), e.setColumnSizingInfo = (t) => e.options.onColumnSizingInfoChange == null ? void 0 : e.options.onColumnSizingInfoChange(t), e.resetColumnSizing = (t) => {
        var n;
        e.setColumnSizing(t ? {} : (n = e.initialState.columnSizing) != null ? n : {});
      }, e.resetHeaderSizeInfo = (t) => {
        var n;
        e.setColumnSizingInfo(t ? xr() : (n = e.initialState.columnSizingInfo) != null ? n : xr());
      }, e.getTotalSize = () => {
        var t, n;
        return (t = (n = e.getHeaderGroups()[0]) == null ? void 0 : n.headers.reduce((r, o) => r + o.getSize(), 0)) != null ? t : 0;
      }, e.getLeftTotalSize = () => {
        var t, n;
        return (t = (n = e.getLeftHeaderGroups()[0]) == null ? void 0 : n.headers.reduce((r, o) => r + o.getSize(), 0)) != null ? t : 0;
      }, e.getCenterTotalSize = () => {
        var t, n;
        return (t = (n = e.getCenterHeaderGroups()[0]) == null ? void 0 : n.headers.reduce((r, o) => r + o.getSize(), 0)) != null ? t : 0;
      }, e.getRightTotalSize = () => {
        var t, n;
        return (t = (n = e.getRightHeaderGroups()[0]) == null ? void 0 : n.headers.reduce((r, o) => r + o.getSize(), 0)) != null ? t : 0;
      };
    }
  };
  let Jn = null;
  function vd() {
    if (typeof Jn == "boolean") return Jn;
    let e = false;
    try {
      const t = {
        get passive() {
          return e = true, false;
        }
      }, n = () => {
      };
      window.addEventListener("test", n, t), window.removeEventListener("test", n);
    } catch {
      e = false;
    }
    return Jn = e, Jn;
  }
  function _r(e) {
    return e.type === "touchstart";
  }
  const xd = {
    getInitialState: (e) => ({
      columnVisibility: {},
      ...e
    }),
    getDefaultOptions: (e) => ({
      onColumnVisibilityChange: Ge("columnVisibility", e)
    }),
    createColumn: (e, t) => {
      e.toggleVisibility = (n) => {
        e.getCanHide() && t.setColumnVisibility((r) => ({
          ...r,
          [e.id]: n ?? !e.getIsVisible()
        }));
      }, e.getIsVisible = () => {
        var n, r;
        const o = e.columns;
        return (n = o.length ? o.some((s) => s.getIsVisible()) : (r = t.getState().columnVisibility) == null ? void 0 : r[e.id]) != null ? n : true;
      }, e.getCanHide = () => {
        var n, r;
        return ((n = e.columnDef.enableHiding) != null ? n : true) && ((r = t.options.enableHiding) != null ? r : true);
      }, e.getToggleVisibilityHandler = () => (n) => {
        e.toggleVisibility == null || e.toggleVisibility(n.target.checked);
      };
    },
    createRow: (e, t) => {
      e._getAllVisibleCells = k(() => [
        e.getAllCells(),
        t.getState().columnVisibility
      ], (n) => n.filter((r) => r.column.getIsVisible()), O(t.options, "debugRows")), e.getVisibleCells = k(() => [
        e.getLeftVisibleCells(),
        e.getCenterVisibleCells(),
        e.getRightVisibleCells()
      ], (n, r, o) => [
        ...n,
        ...r,
        ...o
      ], O(t.options, "debugRows"));
    },
    createTable: (e) => {
      const t = (n, r) => k(() => [
        r(),
        r().filter((o) => o.getIsVisible()).map((o) => o.id).join("_")
      ], (o) => o.filter((s) => s.getIsVisible == null ? void 0 : s.getIsVisible()), O(e.options, "debugColumns"));
      e.getVisibleFlatColumns = t("getVisibleFlatColumns", () => e.getAllFlatColumns()), e.getVisibleLeafColumns = t("getVisibleLeafColumns", () => e.getAllLeafColumns()), e.getLeftVisibleLeafColumns = t("getLeftVisibleLeafColumns", () => e.getLeftLeafColumns()), e.getRightVisibleLeafColumns = t("getRightVisibleLeafColumns", () => e.getRightLeafColumns()), e.getCenterVisibleLeafColumns = t("getCenterVisibleLeafColumns", () => e.getCenterLeafColumns()), e.setColumnVisibility = (n) => e.options.onColumnVisibilityChange == null ? void 0 : e.options.onColumnVisibilityChange(n), e.resetColumnVisibility = (n) => {
        var r;
        e.setColumnVisibility(n ? {} : (r = e.initialState.columnVisibility) != null ? r : {});
      }, e.toggleAllColumnsVisible = (n) => {
        var r;
        n = (r = n) != null ? r : !e.getIsAllColumnsVisible(), e.setColumnVisibility(e.getAllLeafColumns().reduce((o, s) => ({
          ...o,
          [s.id]: n || !(s.getCanHide != null && s.getCanHide())
        }), {}));
      }, e.getIsAllColumnsVisible = () => !e.getAllLeafColumns().some((n) => !(n.getIsVisible != null && n.getIsVisible())), e.getIsSomeColumnsVisible = () => e.getAllLeafColumns().some((n) => n.getIsVisible == null ? void 0 : n.getIsVisible()), e.getToggleAllColumnsVisibilityHandler = () => (n) => {
        var r;
        e.toggleAllColumnsVisible((r = n.target) == null ? void 0 : r.checked);
      };
    }
  };
  function xn(e, t) {
    return t ? t === "center" ? e.getCenterVisibleLeafColumns() : t === "left" ? e.getLeftVisibleLeafColumns() : e.getRightVisibleLeafColumns() : e.getVisibleLeafColumns();
  }
  const _d = {
    createTable: (e) => {
      e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
        if (e._getGlobalFacetedMinMaxValues) return e._getGlobalFacetedMinMaxValues();
      };
    }
  }, wd = {
    getInitialState: (e) => ({
      globalFilter: void 0,
      ...e
    }),
    getDefaultOptions: (e) => ({
      onGlobalFilterChange: Ge("globalFilter", e),
      globalFilterFn: "auto",
      getColumnCanGlobalFilter: (t) => {
        var n;
        const r = (n = e.getCoreRowModel().flatRows[0]) == null || (n = n._getAllCellsByColumnId()[t.id]) == null ? void 0 : n.getValue();
        return typeof r == "string" || typeof r == "number";
      }
    }),
    createColumn: (e, t) => {
      e.getCanGlobalFilter = () => {
        var n, r, o, s;
        return ((n = e.columnDef.enableGlobalFilter) != null ? n : true) && ((r = t.options.enableGlobalFilter) != null ? r : true) && ((o = t.options.enableFilters) != null ? o : true) && ((s = t.options.getColumnCanGlobalFilter == null ? void 0 : t.options.getColumnCanGlobalFilter(e)) != null ? s : true) && !!e.accessorFn;
      };
    },
    createTable: (e) => {
      e.getGlobalAutoFilterFn = () => dt.includesString, e.getGlobalFilterFn = () => {
        var t, n;
        const { globalFilterFn: r } = e.options;
        return dr(r) ? r : r === "auto" ? e.getGlobalAutoFilterFn() : (t = (n = e.options.filterFns) == null ? void 0 : n[r]) != null ? t : dt[r];
      }, e.setGlobalFilter = (t) => {
        e.options.onGlobalFilterChange == null || e.options.onGlobalFilterChange(t);
      }, e.resetGlobalFilter = (t) => {
        e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
      };
    }
  }, Cd = {
    getInitialState: (e) => ({
      expanded: {},
      ...e
    }),
    getDefaultOptions: (e) => ({
      onExpandedChange: Ge("expanded", e),
      paginateExpandedRows: true
    }),
    createTable: (e) => {
      let t = false, n = false;
      e._autoResetExpanded = () => {
        var r, o;
        if (!t) {
          e._queue(() => {
            t = true;
          });
          return;
        }
        if ((r = (o = e.options.autoResetAll) != null ? o : e.options.autoResetExpanded) != null ? r : !e.options.manualExpanding) {
          if (n) return;
          n = true, e._queue(() => {
            e.resetExpanded(), n = false;
          });
        }
      }, e.setExpanded = (r) => e.options.onExpandedChange == null ? void 0 : e.options.onExpandedChange(r), e.toggleAllRowsExpanded = (r) => {
        r ?? !e.getIsAllRowsExpanded() ? e.setExpanded(true) : e.setExpanded({});
      }, e.resetExpanded = (r) => {
        var o, s;
        e.setExpanded(r ? {} : (o = (s = e.initialState) == null ? void 0 : s.expanded) != null ? o : {});
      }, e.getCanSomeRowsExpand = () => e.getPrePaginationRowModel().flatRows.some((r) => r.getCanExpand()), e.getToggleAllRowsExpandedHandler = () => (r) => {
        r.persist == null || r.persist(), e.toggleAllRowsExpanded();
      }, e.getIsSomeRowsExpanded = () => {
        const r = e.getState().expanded;
        return r === true || Object.values(r).some(Boolean);
      }, e.getIsAllRowsExpanded = () => {
        const r = e.getState().expanded;
        return typeof r == "boolean" ? r === true : !(!Object.keys(r).length || e.getRowModel().flatRows.some((o) => !o.getIsExpanded()));
      }, e.getExpandedDepth = () => {
        let r = 0;
        return (e.getState().expanded === true ? Object.keys(e.getRowModel().rowsById) : Object.keys(e.getState().expanded)).forEach((s) => {
          const i = s.split(".");
          r = Math.max(r, i.length);
        }), r;
      }, e.getPreExpandedRowModel = () => e.getSortedRowModel(), e.getExpandedRowModel = () => (!e._getExpandedRowModel && e.options.getExpandedRowModel && (e._getExpandedRowModel = e.options.getExpandedRowModel(e)), e.options.manualExpanding || !e._getExpandedRowModel ? e.getPreExpandedRowModel() : e._getExpandedRowModel());
    },
    createRow: (e, t) => {
      e.toggleExpanded = (n) => {
        t.setExpanded((r) => {
          var o;
          const s = r === true ? true : !!(r != null && r[e.id]);
          let i = {};
          if (r === true ? Object.keys(t.getRowModel().rowsById).forEach((l) => {
            i[l] = true;
          }) : i = r, n = (o = n) != null ? o : !s, !s && n) return {
            ...i,
            [e.id]: true
          };
          if (s && !n) {
            const { [e.id]: l, ...a } = i;
            return a;
          }
          return r;
        });
      }, e.getIsExpanded = () => {
        var n;
        const r = t.getState().expanded;
        return !!((n = t.options.getIsRowExpanded == null ? void 0 : t.options.getIsRowExpanded(e)) != null ? n : r === true || (r == null ? void 0 : r[e.id]));
      }, e.getCanExpand = () => {
        var n, r, o;
        return (n = t.options.getRowCanExpand == null ? void 0 : t.options.getRowCanExpand(e)) != null ? n : ((r = t.options.enableExpanding) != null ? r : true) && !!((o = e.subRows) != null && o.length);
      }, e.getIsAllParentsExpanded = () => {
        let n = true, r = e;
        for (; n && r.parentId; ) r = t.getRow(r.parentId, true), n = r.getIsExpanded();
        return n;
      }, e.getToggleExpandedHandler = () => {
        const n = e.getCanExpand();
        return () => {
          n && e.toggleExpanded();
        };
      };
    }
  }, Or = 0, Nr = 10, wr = () => ({
    pageIndex: Or,
    pageSize: Nr
  }), Sd = {
    getInitialState: (e) => ({
      ...e,
      pagination: {
        ...wr(),
        ...e == null ? void 0 : e.pagination
      }
    }),
    getDefaultOptions: (e) => ({
      onPaginationChange: Ge("pagination", e)
    }),
    createTable: (e) => {
      let t = false, n = false;
      e._autoResetPageIndex = () => {
        var r, o;
        if (!t) {
          e._queue(() => {
            t = true;
          });
          return;
        }
        if ((r = (o = e.options.autoResetAll) != null ? o : e.options.autoResetPageIndex) != null ? r : !e.options.manualPagination) {
          if (n) return;
          n = true, e._queue(() => {
            e.resetPageIndex(), n = false;
          });
        }
      }, e.setPagination = (r) => {
        const o = (s) => Ct(r, s);
        return e.options.onPaginationChange == null ? void 0 : e.options.onPaginationChange(o);
      }, e.resetPagination = (r) => {
        var o;
        e.setPagination(r ? wr() : (o = e.initialState.pagination) != null ? o : wr());
      }, e.setPageIndex = (r) => {
        e.setPagination((o) => {
          let s = Ct(r, o.pageIndex);
          const i = typeof e.options.pageCount > "u" || e.options.pageCount === -1 ? Number.MAX_SAFE_INTEGER : e.options.pageCount - 1;
          return s = Math.max(0, Math.min(s, i)), {
            ...o,
            pageIndex: s
          };
        });
      }, e.resetPageIndex = (r) => {
        var o, s;
        e.setPageIndex(r ? Or : (o = (s = e.initialState) == null || (s = s.pagination) == null ? void 0 : s.pageIndex) != null ? o : Or);
      }, e.resetPageSize = (r) => {
        var o, s;
        e.setPageSize(r ? Nr : (o = (s = e.initialState) == null || (s = s.pagination) == null ? void 0 : s.pageSize) != null ? o : Nr);
      }, e.setPageSize = (r) => {
        e.setPagination((o) => {
          const s = Math.max(1, Ct(r, o.pageSize)), i = o.pageSize * o.pageIndex, l = Math.floor(i / s);
          return {
            ...o,
            pageIndex: l,
            pageSize: s
          };
        });
      }, e.setPageCount = (r) => e.setPagination((o) => {
        var s;
        let i = Ct(r, (s = e.options.pageCount) != null ? s : -1);
        return typeof i == "number" && (i = Math.max(-1, i)), {
          ...o,
          pageCount: i
        };
      }), e.getPageOptions = k(() => [
        e.getPageCount()
      ], (r) => {
        let o = [];
        return r && r > 0 && (o = [
          ...new Array(r)
        ].fill(null).map((s, i) => i)), o;
      }, O(e.options, "debugTable")), e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0, e.getCanNextPage = () => {
        const { pageIndex: r } = e.getState().pagination, o = e.getPageCount();
        return o === -1 ? true : o === 0 ? false : r < o - 1;
      }, e.previousPage = () => e.setPageIndex((r) => r - 1), e.nextPage = () => e.setPageIndex((r) => r + 1), e.firstPage = () => e.setPageIndex(0), e.lastPage = () => e.setPageIndex(e.getPageCount() - 1), e.getPrePaginationRowModel = () => e.getExpandedRowModel(), e.getPaginationRowModel = () => (!e._getPaginationRowModel && e.options.getPaginationRowModel && (e._getPaginationRowModel = e.options.getPaginationRowModel(e)), e.options.manualPagination || !e._getPaginationRowModel ? e.getPrePaginationRowModel() : e._getPaginationRowModel()), e.getPageCount = () => {
        var r;
        return (r = e.options.pageCount) != null ? r : Math.ceil(e.getRowCount() / e.getState().pagination.pageSize);
      }, e.getRowCount = () => {
        var r;
        return (r = e.options.rowCount) != null ? r : e.getPrePaginationRowModel().rows.length;
      };
    }
  }, Cr = () => ({
    top: [],
    bottom: []
  }), jd = {
    getInitialState: (e) => ({
      rowPinning: Cr(),
      ...e
    }),
    getDefaultOptions: (e) => ({
      onRowPinningChange: Ge("rowPinning", e)
    }),
    createRow: (e, t) => {
      e.pin = (n, r, o) => {
        const s = r ? e.getLeafRows().map((a) => {
          let { id: d } = a;
          return d;
        }) : [], i = o ? e.getParentRows().map((a) => {
          let { id: d } = a;
          return d;
        }) : [], l = /* @__PURE__ */ new Set([
          ...i,
          e.id,
          ...s
        ]);
        t.setRowPinning((a) => {
          var d, u;
          if (n === "bottom") {
            var p, g;
            return {
              top: ((p = a == null ? void 0 : a.top) != null ? p : []).filter((m) => !(l != null && l.has(m))),
              bottom: [
                ...((g = a == null ? void 0 : a.bottom) != null ? g : []).filter((m) => !(l != null && l.has(m))),
                ...Array.from(l)
              ]
            };
          }
          if (n === "top") {
            var f, h;
            return {
              top: [
                ...((f = a == null ? void 0 : a.top) != null ? f : []).filter((m) => !(l != null && l.has(m))),
                ...Array.from(l)
              ],
              bottom: ((h = a == null ? void 0 : a.bottom) != null ? h : []).filter((m) => !(l != null && l.has(m)))
            };
          }
          return {
            top: ((d = a == null ? void 0 : a.top) != null ? d : []).filter((m) => !(l != null && l.has(m))),
            bottom: ((u = a == null ? void 0 : a.bottom) != null ? u : []).filter((m) => !(l != null && l.has(m)))
          };
        });
      }, e.getCanPin = () => {
        var n;
        const { enableRowPinning: r, enablePinning: o } = t.options;
        return typeof r == "function" ? r(e) : (n = r ?? o) != null ? n : true;
      }, e.getIsPinned = () => {
        const n = [
          e.id
        ], { top: r, bottom: o } = t.getState().rowPinning, s = n.some((l) => r == null ? void 0 : r.includes(l)), i = n.some((l) => o == null ? void 0 : o.includes(l));
        return s ? "top" : i ? "bottom" : false;
      }, e.getPinnedIndex = () => {
        var n, r;
        const o = e.getIsPinned();
        if (!o) return -1;
        const s = (n = o === "top" ? t.getTopRows() : t.getBottomRows()) == null ? void 0 : n.map((i) => {
          let { id: l } = i;
          return l;
        });
        return (r = s == null ? void 0 : s.indexOf(e.id)) != null ? r : -1;
      };
    },
    createTable: (e) => {
      e.setRowPinning = (t) => e.options.onRowPinningChange == null ? void 0 : e.options.onRowPinningChange(t), e.resetRowPinning = (t) => {
        var n, r;
        return e.setRowPinning(t ? Cr() : (n = (r = e.initialState) == null ? void 0 : r.rowPinning) != null ? n : Cr());
      }, e.getIsSomeRowsPinned = (t) => {
        var n;
        const r = e.getState().rowPinning;
        if (!t) {
          var o, s;
          return !!((o = r.top) != null && o.length || (s = r.bottom) != null && s.length);
        }
        return !!((n = r[t]) != null && n.length);
      }, e._getPinnedRows = (t, n, r) => {
        var o;
        return ((o = e.options.keepPinnedRows) == null || o ? (n ?? []).map((i) => {
          const l = e.getRow(i, true);
          return l.getIsAllParentsExpanded() ? l : null;
        }) : (n ?? []).map((i) => t.find((l) => l.id === i))).filter(Boolean).map((i) => ({
          ...i,
          position: r
        }));
      }, e.getTopRows = k(() => [
        e.getRowModel().rows,
        e.getState().rowPinning.top
      ], (t, n) => e._getPinnedRows(t, n, "top"), O(e.options, "debugRows")), e.getBottomRows = k(() => [
        e.getRowModel().rows,
        e.getState().rowPinning.bottom
      ], (t, n) => e._getPinnedRows(t, n, "bottom"), O(e.options, "debugRows")), e.getCenterRows = k(() => [
        e.getRowModel().rows,
        e.getState().rowPinning.top,
        e.getState().rowPinning.bottom
      ], (t, n, r) => {
        const o = /* @__PURE__ */ new Set([
          ...n ?? [],
          ...r ?? []
        ]);
        return t.filter((s) => !o.has(s.id));
      }, O(e.options, "debugRows"));
    }
  }, Rd = {
    getInitialState: (e) => ({
      rowSelection: {},
      ...e
    }),
    getDefaultOptions: (e) => ({
      onRowSelectionChange: Ge("rowSelection", e),
      enableRowSelection: true,
      enableMultiRowSelection: true,
      enableSubRowSelection: true
    }),
    createTable: (e) => {
      e.setRowSelection = (t) => e.options.onRowSelectionChange == null ? void 0 : e.options.onRowSelectionChange(t), e.resetRowSelection = (t) => {
        var n;
        return e.setRowSelection(t ? {} : (n = e.initialState.rowSelection) != null ? n : {});
      }, e.toggleAllRowsSelected = (t) => {
        e.setRowSelection((n) => {
          t = typeof t < "u" ? t : !e.getIsAllRowsSelected();
          const r = {
            ...n
          }, o = e.getPreGroupedRowModel().flatRows;
          return t ? o.forEach((s) => {
            s.getCanSelect() && (r[s.id] = true);
          }) : o.forEach((s) => {
            delete r[s.id];
          }), r;
        });
      }, e.toggleAllPageRowsSelected = (t) => e.setRowSelection((n) => {
        const r = typeof t < "u" ? t : !e.getIsAllPageRowsSelected(), o = {
          ...n
        };
        return e.getRowModel().rows.forEach((s) => {
          Lr(o, s.id, r, true, e);
        }), o;
      }), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = k(() => [
        e.getState().rowSelection,
        e.getCoreRowModel()
      ], (t, n) => Object.keys(t).length ? Sr(e, n) : {
        rows: [],
        flatRows: [],
        rowsById: {}
      }, O(e.options, "debugTable")), e.getFilteredSelectedRowModel = k(() => [
        e.getState().rowSelection,
        e.getFilteredRowModel()
      ], (t, n) => Object.keys(t).length ? Sr(e, n) : {
        rows: [],
        flatRows: [],
        rowsById: {}
      }, O(e.options, "debugTable")), e.getGroupedSelectedRowModel = k(() => [
        e.getState().rowSelection,
        e.getSortedRowModel()
      ], (t, n) => Object.keys(t).length ? Sr(e, n) : {
        rows: [],
        flatRows: [],
        rowsById: {}
      }, O(e.options, "debugTable")), e.getIsAllRowsSelected = () => {
        const t = e.getFilteredRowModel().flatRows, { rowSelection: n } = e.getState();
        let r = !!(t.length && Object.keys(n).length);
        return r && t.some((o) => o.getCanSelect() && !n[o.id]) && (r = false), r;
      }, e.getIsAllPageRowsSelected = () => {
        const t = e.getPaginationRowModel().flatRows.filter((o) => o.getCanSelect()), { rowSelection: n } = e.getState();
        let r = !!t.length;
        return r && t.some((o) => !n[o.id]) && (r = false), r;
      }, e.getIsSomeRowsSelected = () => {
        var t;
        const n = Object.keys((t = e.getState().rowSelection) != null ? t : {}).length;
        return n > 0 && n < e.getFilteredRowModel().flatRows.length;
      }, e.getIsSomePageRowsSelected = () => {
        const t = e.getPaginationRowModel().flatRows;
        return e.getIsAllPageRowsSelected() ? false : t.filter((n) => n.getCanSelect()).some((n) => n.getIsSelected() || n.getIsSomeSelected());
      }, e.getToggleAllRowsSelectedHandler = () => (t) => {
        e.toggleAllRowsSelected(t.target.checked);
      }, e.getToggleAllPageRowsSelectedHandler = () => (t) => {
        e.toggleAllPageRowsSelected(t.target.checked);
      };
    },
    createRow: (e, t) => {
      e.toggleSelected = (n, r) => {
        const o = e.getIsSelected();
        t.setRowSelection((s) => {
          var i;
          if (n = typeof n < "u" ? n : !o, e.getCanSelect() && o === n) return s;
          const l = {
            ...s
          };
          return Lr(l, e.id, n, (i = r == null ? void 0 : r.selectChildren) != null ? i : true, t), l;
        });
      }, e.getIsSelected = () => {
        const { rowSelection: n } = t.getState();
        return so(e, n);
      }, e.getIsSomeSelected = () => {
        const { rowSelection: n } = t.getState();
        return Hr(e, n) === "some";
      }, e.getIsAllSubRowsSelected = () => {
        const { rowSelection: n } = t.getState();
        return Hr(e, n) === "all";
      }, e.getCanSelect = () => {
        var n;
        return typeof t.options.enableRowSelection == "function" ? t.options.enableRowSelection(e) : (n = t.options.enableRowSelection) != null ? n : true;
      }, e.getCanSelectSubRows = () => {
        var n;
        return typeof t.options.enableSubRowSelection == "function" ? t.options.enableSubRowSelection(e) : (n = t.options.enableSubRowSelection) != null ? n : true;
      }, e.getCanMultiSelect = () => {
        var n;
        return typeof t.options.enableMultiRowSelection == "function" ? t.options.enableMultiRowSelection(e) : (n = t.options.enableMultiRowSelection) != null ? n : true;
      }, e.getToggleSelectedHandler = () => {
        const n = e.getCanSelect();
        return (r) => {
          var o;
          n && e.toggleSelected((o = r.target) == null ? void 0 : o.checked);
        };
      };
    }
  }, Lr = (e, t, n, r, o) => {
    var s;
    const i = o.getRow(t, true);
    n ? (i.getCanMultiSelect() || Object.keys(e).forEach((l) => delete e[l]), i.getCanSelect() && (e[t] = true)) : delete e[t], r && (s = i.subRows) != null && s.length && i.getCanSelectSubRows() && i.subRows.forEach((l) => Lr(e, l.id, n, r, o));
  };
  function Sr(e, t) {
    const n = e.getState().rowSelection, r = [], o = {}, s = function(i, l) {
      return i.map((a) => {
        var d;
        const u = so(a, n);
        if (u && (r.push(a), o[a.id] = a), (d = a.subRows) != null && d.length && (a = {
          ...a,
          subRows: s(a.subRows)
        }), u) return a;
      }).filter(Boolean);
    };
    return {
      rows: s(t.rows),
      flatRows: r,
      rowsById: o
    };
  }
  function so(e, t) {
    var n;
    return (n = t[e.id]) != null ? n : false;
  }
  function Hr(e, t, n) {
    var r;
    if (!((r = e.subRows) != null && r.length)) return false;
    let o = true, s = false;
    return e.subRows.forEach((i) => {
      if (!(s && !o) && (i.getCanSelect() && (so(i, t) ? s = true : o = false), i.subRows && i.subRows.length)) {
        const l = Hr(i, t);
        l === "all" ? s = true : (l === "some" && (s = true), o = false);
      }
    }), o ? "all" : s ? "some" : false;
  }
  const Br = /([0-9]+)/gm, Md = (e, t, n) => Ws(St(e.getValue(n)).toLowerCase(), St(t.getValue(n)).toLowerCase()), $d = (e, t, n) => Ws(St(e.getValue(n)), St(t.getValue(n))), Ad = (e, t, n) => io(St(e.getValue(n)).toLowerCase(), St(t.getValue(n)).toLowerCase()), Id = (e, t, n) => io(St(e.getValue(n)), St(t.getValue(n))), Pd = (e, t, n) => {
    const r = e.getValue(n), o = t.getValue(n);
    return r > o ? 1 : r < o ? -1 : 0;
  }, Fd = (e, t, n) => io(e.getValue(n), t.getValue(n));
  function io(e, t) {
    return e === t ? 0 : e > t ? 1 : -1;
  }
  function St(e) {
    return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : "";
  }
  function Ws(e, t) {
    const n = e.split(Br).filter(Boolean), r = t.split(Br).filter(Boolean);
    for (; n.length && r.length; ) {
      const o = n.shift(), s = r.shift(), i = parseInt(o, 10), l = parseInt(s, 10), a = [
        i,
        l
      ].sort();
      if (isNaN(a[0])) {
        if (o > s) return 1;
        if (s > o) return -1;
        continue;
      }
      if (isNaN(a[1])) return isNaN(i) ? -1 : 1;
      if (i > l) return 1;
      if (l > i) return -1;
    }
    return n.length - r.length;
  }
  const un = {
    alphanumeric: Md,
    alphanumericCaseSensitive: $d,
    text: Ad,
    textCaseSensitive: Id,
    datetime: Pd,
    basic: Fd
  }, Td = {
    getInitialState: (e) => ({
      sorting: [],
      ...e
    }),
    getDefaultColumnDef: () => ({
      sortingFn: "auto",
      sortUndefined: 1
    }),
    getDefaultOptions: (e) => ({
      onSortingChange: Ge("sorting", e),
      isMultiSortEvent: (t) => t.shiftKey
    }),
    createColumn: (e, t) => {
      e.getAutoSortingFn = () => {
        const n = t.getFilteredRowModel().flatRows.slice(10);
        let r = false;
        for (const o of n) {
          const s = o == null ? void 0 : o.getValue(e.id);
          if (Object.prototype.toString.call(s) === "[object Date]") return un.datetime;
          if (typeof s == "string" && (r = true, s.split(Br).length > 1)) return un.alphanumeric;
        }
        return r ? un.text : un.basic;
      }, e.getAutoSortDir = () => {
        const n = t.getFilteredRowModel().flatRows[0];
        return typeof (n == null ? void 0 : n.getValue(e.id)) == "string" ? "asc" : "desc";
      }, e.getSortingFn = () => {
        var n, r;
        if (!e) throw new Error();
        return dr(e.columnDef.sortingFn) ? e.columnDef.sortingFn : e.columnDef.sortingFn === "auto" ? e.getAutoSortingFn() : (n = (r = t.options.sortingFns) == null ? void 0 : r[e.columnDef.sortingFn]) != null ? n : un[e.columnDef.sortingFn];
      }, e.toggleSorting = (n, r) => {
        const o = e.getNextSortingOrder(), s = typeof n < "u" && n !== null;
        t.setSorting((i) => {
          const l = i == null ? void 0 : i.find((f) => f.id === e.id), a = i == null ? void 0 : i.findIndex((f) => f.id === e.id);
          let d = [], u, p = s ? n : o === "desc";
          if (i != null && i.length && e.getCanMultiSort() && r ? l ? u = "toggle" : u = "add" : i != null && i.length && a !== i.length - 1 ? u = "replace" : l ? u = "toggle" : u = "replace", u === "toggle" && (s || o || (u = "remove")), u === "add") {
            var g;
            d = [
              ...i,
              {
                id: e.id,
                desc: p
              }
            ], d.splice(0, d.length - ((g = t.options.maxMultiSortColCount) != null ? g : Number.MAX_SAFE_INTEGER));
          } else u === "toggle" ? d = i.map((f) => f.id === e.id ? {
            ...f,
            desc: p
          } : f) : u === "remove" ? d = i.filter((f) => f.id !== e.id) : d = [
            {
              id: e.id,
              desc: p
            }
          ];
          return d;
        });
      }, e.getFirstSortDir = () => {
        var n, r;
        return ((n = (r = e.columnDef.sortDescFirst) != null ? r : t.options.sortDescFirst) != null ? n : e.getAutoSortDir() === "desc") ? "desc" : "asc";
      }, e.getNextSortingOrder = (n) => {
        var r, o;
        const s = e.getFirstSortDir(), i = e.getIsSorted();
        return i ? i !== s && ((r = t.options.enableSortingRemoval) == null || r) && (!(n && (o = t.options.enableMultiRemove) != null) || o) ? false : i === "desc" ? "asc" : "desc" : s;
      }, e.getCanSort = () => {
        var n, r;
        return ((n = e.columnDef.enableSorting) != null ? n : true) && ((r = t.options.enableSorting) != null ? r : true) && !!e.accessorFn;
      }, e.getCanMultiSort = () => {
        var n, r;
        return (n = (r = e.columnDef.enableMultiSort) != null ? r : t.options.enableMultiSort) != null ? n : !!e.accessorFn;
      }, e.getIsSorted = () => {
        var n;
        const r = (n = t.getState().sorting) == null ? void 0 : n.find((o) => o.id === e.id);
        return r ? r.desc ? "desc" : "asc" : false;
      }, e.getSortIndex = () => {
        var n, r;
        return (n = (r = t.getState().sorting) == null ? void 0 : r.findIndex((o) => o.id === e.id)) != null ? n : -1;
      }, e.clearSorting = () => {
        t.setSorting((n) => n != null && n.length ? n.filter((r) => r.id !== e.id) : []);
      }, e.getToggleSortingHandler = () => {
        const n = e.getCanSort();
        return (r) => {
          n && (r.persist == null || r.persist(), e.toggleSorting == null || e.toggleSorting(void 0, e.getCanMultiSort() ? t.options.isMultiSortEvent == null ? void 0 : t.options.isMultiSortEvent(r) : false));
        };
      };
    },
    createTable: (e) => {
      e.setSorting = (t) => e.options.onSortingChange == null ? void 0 : e.options.onSortingChange(t), e.resetSorting = (t) => {
        var n, r;
        e.setSorting(t ? [] : (n = (r = e.initialState) == null ? void 0 : r.sorting) != null ? n : []);
      }, e.getPreSortedRowModel = () => e.getGroupedRowModel(), e.getSortedRowModel = () => (!e._getSortedRowModel && e.options.getSortedRowModel && (e._getSortedRowModel = e.options.getSortedRowModel(e)), e.options.manualSorting || !e._getSortedRowModel ? e.getPreSortedRowModel() : e._getSortedRowModel());
    }
  }, Dd = [
    td,
    xd,
    hd,
    md,
    nd,
    rd,
    _d,
    wd,
    Td,
    pd,
    Cd,
    Sd,
    jd,
    Rd,
    bd
  ];
  function zd(e) {
    var t, n;
    const r = [
      ...Dd,
      ...(t = e._features) != null ? t : []
    ];
    let o = {
      _features: r
    };
    const s = o._features.reduce((g, f) => Object.assign(g, f.getDefaultOptions == null ? void 0 : f.getDefaultOptions(o)), {}), i = (g) => o.options.mergeOptions ? o.options.mergeOptions(s, g) : {
      ...s,
      ...g
    };
    let a = {
      ...{},
      ...(n = e.initialState) != null ? n : {}
    };
    o._features.forEach((g) => {
      var f;
      a = (f = g.getInitialState == null ? void 0 : g.getInitialState(a)) != null ? f : a;
    });
    const d = [];
    let u = false;
    const p = {
      _features: r,
      options: {
        ...s,
        ...e
      },
      initialState: a,
      _queue: (g) => {
        d.push(g), u || (u = true, Promise.resolve().then(() => {
          for (; d.length; ) d.shift()();
          u = false;
        }).catch((f) => setTimeout(() => {
          throw f;
        })));
      },
      reset: () => {
        o.setState(o.initialState);
      },
      setOptions: (g) => {
        const f = Ct(g, o.options);
        o.options = i(f);
      },
      getState: () => o.options.state,
      setState: (g) => {
        o.options.onStateChange == null || o.options.onStateChange(g);
      },
      _getRowId: (g, f, h) => {
        var m;
        return (m = o.options.getRowId == null ? void 0 : o.options.getRowId(g, f, h)) != null ? m : `${h ? [
          h.id,
          f
        ].join(".") : f}`;
      },
      getCoreRowModel: () => (o._getCoreRowModel || (o._getCoreRowModel = o.options.getCoreRowModel(o)), o._getCoreRowModel()),
      getRowModel: () => o.getPaginationRowModel(),
      getRow: (g, f) => {
        let h = (f ? o.getPrePaginationRowModel() : o.getRowModel()).rowsById[g];
        if (!h && (h = o.getCoreRowModel().rowsById[g], !h)) throw new Error();
        return h;
      },
      _getDefaultColumnDef: k(() => [
        o.options.defaultColumn
      ], (g) => {
        var f;
        return g = (f = g) != null ? f : {}, {
          header: (h) => {
            const m = h.header.column.columnDef;
            return m.accessorKey ? m.accessorKey : m.accessorFn ? m.id : null;
          },
          cell: (h) => {
            var m, v;
            return (m = (v = h.renderValue()) == null || v.toString == null ? void 0 : v.toString()) != null ? m : null;
          },
          ...o._features.reduce((h, m) => Object.assign(h, m.getDefaultColumnDef == null ? void 0 : m.getDefaultColumnDef()), {}),
          ...g
        };
      }, O(e, "debugColumns")),
      _getColumnDefs: () => o.options.columns,
      getAllColumns: k(() => [
        o._getColumnDefs()
      ], (g) => {
        const f = function(h, m, v) {
          return v === void 0 && (v = 0), h.map((x) => {
            const _ = ed(o, x, v, m), S = x;
            return _.columns = S.columns ? f(S.columns, _, v + 1) : [], _;
          });
        };
        return f(g);
      }, O(e, "debugColumns")),
      getAllFlatColumns: k(() => [
        o.getAllColumns()
      ], (g) => g.flatMap((f) => f.getFlatColumns()), O(e, "debugColumns")),
      _getAllFlatColumnsById: k(() => [
        o.getAllFlatColumns()
      ], (g) => g.reduce((f, h) => (f[h.id] = h, f), {}), O(e, "debugColumns")),
      getAllLeafColumns: k(() => [
        o.getAllColumns(),
        o._getOrderColumnsFn()
      ], (g, f) => {
        let h = g.flatMap((m) => m.getLeafColumns());
        return f(h);
      }, O(e, "debugColumns")),
      getColumn: (g) => o._getAllFlatColumnsById()[g]
    };
    Object.assign(o, p);
    for (let g = 0; g < o._features.length; g++) {
      const f = o._features[g];
      f == null || f.createTable == null || f.createTable(o);
    }
    return o;
  }
  function Ed() {
    return (e) => k(() => [
      e.options.data
    ], (t) => {
      const n = {
        rows: [],
        flatRows: [],
        rowsById: {}
      }, r = function(o, s, i) {
        s === void 0 && (s = 0);
        const l = [];
        for (let d = 0; d < o.length; d++) {
          const u = ro(e, e._getRowId(o[d], d, i), o[d], d, s, void 0, i == null ? void 0 : i.id);
          if (n.flatRows.push(u), n.rowsById[u.id] = u, l.push(u), e.options.getSubRows) {
            var a;
            u.originalSubRows = e.options.getSubRows(o[d], d), (a = u.originalSubRows) != null && a.length && (u.subRows = r(u.originalSubRows, s + 1, u));
          }
        }
        return l;
      };
      return n.rows = r(t), n;
    }, O(e.options, "debugTable", "getRowModel", () => e._autoResetPageIndex()));
  }
  function kd(e) {
    const t = [], n = (r) => {
      var o;
      t.push(r), (o = r.subRows) != null && o.length && r.getIsExpanded() && r.subRows.forEach(n);
    };
    return e.rows.forEach(n), {
      rows: t,
      flatRows: e.flatRows,
      rowsById: e.rowsById
    };
  }
  function Od(e, t, n) {
    return n.options.filterFromLeafRows ? Nd(e, t, n) : Ld(e, t, n);
  }
  function Nd(e, t, n) {
    var r;
    const o = [], s = {}, i = (r = n.options.maxLeafRowFilterDepth) != null ? r : 100, l = function(a, d) {
      d === void 0 && (d = 0);
      const u = [];
      for (let g = 0; g < a.length; g++) {
        var p;
        let f = a[g];
        const h = ro(n, f.id, f.original, f.index, f.depth, void 0, f.parentId);
        if (h.columnFilters = f.columnFilters, (p = f.subRows) != null && p.length && d < i) {
          if (h.subRows = l(f.subRows, d + 1), f = h, t(f) && !h.subRows.length) {
            u.push(f), s[f.id] = f, o.push(f);
            continue;
          }
          if (t(f) || h.subRows.length) {
            u.push(f), s[f.id] = f, o.push(f);
            continue;
          }
        } else f = h, t(f) && (u.push(f), s[f.id] = f, o.push(f));
      }
      return u;
    };
    return {
      rows: l(e),
      flatRows: o,
      rowsById: s
    };
  }
  function Ld(e, t, n) {
    var r;
    const o = [], s = {}, i = (r = n.options.maxLeafRowFilterDepth) != null ? r : 100, l = function(a, d) {
      d === void 0 && (d = 0);
      const u = [];
      for (let g = 0; g < a.length; g++) {
        let f = a[g];
        if (t(f)) {
          var p;
          if ((p = f.subRows) != null && p.length && d < i) {
            const m = ro(n, f.id, f.original, f.index, f.depth, void 0, f.parentId);
            m.subRows = l(f.subRows, d + 1), f = m;
          }
          u.push(f), o.push(f), s[f.id] = f;
        }
      }
      return u;
    };
    return {
      rows: l(e),
      flatRows: o,
      rowsById: s
    };
  }
  function Hd() {
    return (e) => k(() => [
      e.getPreFilteredRowModel(),
      e.getState().columnFilters,
      e.getState().globalFilter
    ], (t, n, r) => {
      if (!t.rows.length || !(n != null && n.length) && !r) {
        for (let g = 0; g < t.flatRows.length; g++) t.flatRows[g].columnFilters = {}, t.flatRows[g].columnFiltersMeta = {};
        return t;
      }
      const o = [], s = [];
      (n ?? []).forEach((g) => {
        var f;
        const h = e.getColumn(g.id);
        if (!h) return;
        const m = h.getFilterFn();
        m && o.push({
          id: g.id,
          filterFn: m,
          resolvedValue: (f = m.resolveFilterValue == null ? void 0 : m.resolveFilterValue(g.value)) != null ? f : g.value
        });
      });
      const i = (n ?? []).map((g) => g.id), l = e.getGlobalFilterFn(), a = e.getAllLeafColumns().filter((g) => g.getCanGlobalFilter());
      r && l && a.length && (i.push("__global__"), a.forEach((g) => {
        var f;
        s.push({
          id: g.id,
          filterFn: l,
          resolvedValue: (f = l.resolveFilterValue == null ? void 0 : l.resolveFilterValue(r)) != null ? f : r
        });
      }));
      let d, u;
      for (let g = 0; g < t.flatRows.length; g++) {
        const f = t.flatRows[g];
        if (f.columnFilters = {}, o.length) for (let h = 0; h < o.length; h++) {
          d = o[h];
          const m = d.id;
          f.columnFilters[m] = d.filterFn(f, m, d.resolvedValue, (v) => {
            f.columnFiltersMeta[m] = v;
          });
        }
        if (s.length) {
          for (let h = 0; h < s.length; h++) {
            u = s[h];
            const m = u.id;
            if (u.filterFn(f, m, u.resolvedValue, (v) => {
              f.columnFiltersMeta[m] = v;
            })) {
              f.columnFilters.__global__ = true;
              break;
            }
          }
          f.columnFilters.__global__ !== true && (f.columnFilters.__global__ = false);
        }
      }
      const p = (g) => {
        for (let f = 0; f < i.length; f++) if (g.columnFilters[i[f]] === false) return false;
        return true;
      };
      return Od(t.rows, p, e);
    }, O(e.options, "debugTable", "getFilteredRowModel", () => e._autoResetPageIndex()));
  }
  function Bd(e) {
    return (t) => k(() => [
      t.getState().pagination,
      t.getPrePaginationRowModel(),
      t.options.paginateExpandedRows ? void 0 : t.getState().expanded
    ], (n, r) => {
      if (!r.rows.length) return r;
      const { pageSize: o, pageIndex: s } = n;
      let { rows: i, flatRows: l, rowsById: a } = r;
      const d = o * s, u = d + o;
      i = i.slice(d, u);
      let p;
      t.options.paginateExpandedRows ? p = {
        rows: i,
        flatRows: l,
        rowsById: a
      } : p = kd({
        rows: i,
        flatRows: l,
        rowsById: a
      }), p.flatRows = [];
      const g = (f) => {
        p.flatRows.push(f), f.subRows.length && f.subRows.forEach(g);
      };
      return p.rows.forEach(g), p;
    }, O(t.options, "debugTable"));
  }
  function Vd() {
    return (e) => k(() => [
      e.getState().sorting,
      e.getPreSortedRowModel()
    ], (t, n) => {
      if (!n.rows.length || !(t != null && t.length)) return n;
      const r = e.getState().sorting, o = [], s = r.filter((a) => {
        var d;
        return (d = e.getColumn(a.id)) == null ? void 0 : d.getCanSort();
      }), i = {};
      s.forEach((a) => {
        const d = e.getColumn(a.id);
        d && (i[a.id] = {
          sortUndefined: d.columnDef.sortUndefined,
          invertSorting: d.columnDef.invertSorting,
          sortingFn: d.getSortingFn()
        });
      });
      const l = (a) => {
        const d = a.map((u) => ({
          ...u
        }));
        return d.sort((u, p) => {
          for (let f = 0; f < s.length; f += 1) {
            var g;
            const h = s[f], m = i[h.id], v = m.sortUndefined, x = (g = h == null ? void 0 : h.desc) != null ? g : false;
            let _ = 0;
            if (v) {
              const S = u.getValue(h.id), j = p.getValue(h.id), M = S === void 0, w = j === void 0;
              if (M || w) {
                if (v === "first") return M ? -1 : 1;
                if (v === "last") return M ? 1 : -1;
                _ = M && w ? 0 : M ? v : -v;
              }
            }
            if (_ === 0 && (_ = m.sortingFn(u, p, h.id)), _ !== 0) return x && (_ *= -1), m.invertSorting && (_ *= -1), _;
          }
          return u.index - p.index;
        }), d.forEach((u) => {
          var p;
          o.push(u), (p = u.subRows) != null && p.length && (u.subRows = l(u.subRows));
        }), d;
      };
      return {
        rows: l(n.rows),
        flatRows: o,
        rowsById: n.rowsById
      };
    }, O(e.options, "debugTable", "getSortedRowModel", () => e._autoResetPageIndex()));
  }
  function dn(e, t) {
    return e ? Wd(e) ? y.createElement(e, t) : e : null;
  }
  function Wd(e) {
    return Gd(e) || typeof e == "function" || Ud(e);
  }
  function Gd(e) {
    return typeof e == "function" && (() => {
      const t = Object.getPrototypeOf(e);
      return t.prototype && t.prototype.isReactComponent;
    })();
  }
  function Ud(e) {
    return typeof e == "object" && typeof e.$$typeof == "symbol" && [
      "react.memo",
      "react.forward_ref"
    ].includes(e.$$typeof.description);
  }
  function qd(e) {
    const t = {
      state: {},
      onStateChange: () => {
      },
      renderFallbackValue: null,
      ...e
    }, [n] = y.useState(() => ({
      current: zd(t)
    })), [r, o] = y.useState(() => n.current.initialState);
    return n.current.setOptions((s) => ({
      ...s,
      ...e,
      state: {
        ...r,
        ...e.state
      },
      onStateChange: (i) => {
        o(i), e.onStateChange == null || e.onStateChange(i);
      }
    })), n.current;
  }
  function Ut(e, t, n) {
    let r = n.initialDeps ?? [], o, s = true;
    function i() {
      var l, a, d;
      let u;
      n.key && ((l = n.debug) != null && l.call(n)) && (u = Date.now());
      const p = e();
      if (!(p.length !== r.length || p.some((h, m) => r[m] !== h))) return o;
      r = p;
      let f;
      if (n.key && ((a = n.debug) != null && a.call(n)) && (f = Date.now()), o = t(...p), n.key && ((d = n.debug) != null && d.call(n))) {
        const h = Math.round((Date.now() - u) * 100) / 100, m = Math.round((Date.now() - f) * 100) / 100, v = m / 16, x = (_, S) => {
          for (_ = String(_); _.length < S; ) _ = " " + _;
          return _;
        };
        console.info(`%c\u23F1 ${x(m, 5)} /${x(h, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * v, 120))}deg 100% 31%);`, n == null ? void 0 : n.key);
      }
      return (n == null ? void 0 : n.onChange) && !(s && n.skipInitialOnChange) && n.onChange(o), s = false, o;
    }
    return i.updateDeps = (l) => {
      r = l;
    }, i;
  }
  function es(e, t) {
    if (e === void 0) throw new Error("Unexpected undefined");
    return e;
  }
  const Yd = (e, t) => Math.abs(e - t) < 1.01, Jd = (e, t, n) => {
    let r;
    return function(...o) {
      e.clearTimeout(r), r = e.setTimeout(() => t.apply(this, o), n);
    };
  }, ts = (e) => {
    const { offsetWidth: t, offsetHeight: n } = e;
    return {
      width: t,
      height: n
    };
  }, Kd = (e) => e, Xd = (e) => {
    const t = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1), r = [];
    for (let o = t; o <= n; o++) r.push(o);
    return r;
  }, Qd = (e, t) => {
    const n = e.scrollElement;
    if (!n) return;
    const r = e.targetWindow;
    if (!r) return;
    const o = (i) => {
      const { width: l, height: a } = i;
      t({
        width: Math.round(l),
        height: Math.round(a)
      });
    };
    if (o(ts(n)), !r.ResizeObserver) return () => {
    };
    const s = new r.ResizeObserver((i) => {
      const l = () => {
        const a = i[0];
        if (a == null ? void 0 : a.borderBoxSize) {
          const d = a.borderBoxSize[0];
          if (d) {
            o({
              width: d.inlineSize,
              height: d.blockSize
            });
            return;
          }
        }
        o(ts(n));
      };
      e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(l) : l();
    });
    return s.observe(n, {
      box: "border-box"
    }), () => {
      s.unobserve(n);
    };
  }, ns = {
    passive: true
  }, rs = typeof window > "u" ? true : "onscrollend" in window, Zd = (e, t) => {
    const n = e.scrollElement;
    if (!n) return;
    const r = e.targetWindow;
    if (!r) return;
    let o = 0;
    const s = e.options.useScrollendEvent && rs ? () => {
    } : Jd(r, () => {
      t(o, false);
    }, e.options.isScrollingResetDelay), i = (u) => () => {
      const { horizontal: p, isRtl: g } = e.options;
      o = p ? n.scrollLeft * (g && -1 || 1) : n.scrollTop, s(), t(o, u);
    }, l = i(true), a = i(false);
    n.addEventListener("scroll", l, ns);
    const d = e.options.useScrollendEvent && rs;
    return d && n.addEventListener("scrollend", a, ns), () => {
      n.removeEventListener("scroll", l), d && n.removeEventListener("scrollend", a);
    };
  }, ef = (e, t, n) => {
    if (t == null ? void 0 : t.borderBoxSize) {
      const r = t.borderBoxSize[0];
      if (r) return Math.round(r[n.options.horizontal ? "inlineSize" : "blockSize"]);
    }
    return e[n.options.horizontal ? "offsetWidth" : "offsetHeight"];
  }, tf = (e, { adjustments: t = 0, behavior: n }, r) => {
    var o, s;
    const i = e + t;
    (s = (o = r.scrollElement) == null ? void 0 : o.scrollTo) == null || s.call(o, {
      [r.options.horizontal ? "left" : "top"]: i,
      behavior: n
    });
  };
  class nf {
    constructor(t) {
      this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = false, this.currentScrollToIndex = null, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.laneAssignments = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.prevLanes = void 0, this.lanesChangedFlag = false, this.lanesSettling = false, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.observer = /* @__PURE__ */ (() => {
        let n = null;
        const r = () => n || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : n = new this.targetWindow.ResizeObserver((o) => {
          o.forEach((s) => {
            const i = () => {
              this._measureElement(s.target, s);
            };
            this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(i) : i();
          });
        }));
        return {
          disconnect: () => {
            var o;
            (o = r()) == null || o.disconnect(), n = null;
          },
          observe: (o) => {
            var s;
            return (s = r()) == null ? void 0 : s.observe(o, {
              box: "border-box"
            });
          },
          unobserve: (o) => {
            var s;
            return (s = r()) == null ? void 0 : s.unobserve(o);
          }
        };
      })(), this.range = null, this.setOptions = (n) => {
        Object.entries(n).forEach(([r, o]) => {
          typeof o > "u" && delete n[r];
        }), this.options = {
          debug: false,
          initialOffset: 0,
          overscan: 1,
          paddingStart: 0,
          paddingEnd: 0,
          scrollPaddingStart: 0,
          scrollPaddingEnd: 0,
          horizontal: false,
          getItemKey: Kd,
          rangeExtractor: Xd,
          onChange: () => {
          },
          measureElement: ef,
          initialRect: {
            width: 0,
            height: 0
          },
          scrollMargin: 0,
          gap: 0,
          indexAttribute: "data-index",
          initialMeasurementsCache: [],
          lanes: 1,
          isScrollingResetDelay: 150,
          enabled: true,
          isRtl: false,
          useScrollendEvent: false,
          useAnimationFrameWithResizeObserver: false,
          ...n
        };
      }, this.notify = (n) => {
        var r, o;
        (o = (r = this.options).onChange) == null || o.call(r, this, n);
      }, this.maybeNotify = Ut(() => (this.calculateRange(), [
        this.isScrolling,
        this.range ? this.range.startIndex : null,
        this.range ? this.range.endIndex : null
      ]), (n) => {
        this.notify(n);
      }, {
        key: false,
        debug: () => this.options.debug,
        initialDeps: [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ]
      }), this.cleanup = () => {
        this.unsubs.filter(Boolean).forEach((n) => n()), this.unsubs = [], this.observer.disconnect(), this.scrollElement = null, this.targetWindow = null;
      }, this._didMount = () => () => {
        this.cleanup();
      }, this._willUpdate = () => {
        var n;
        const r = this.options.enabled ? this.options.getScrollElement() : null;
        if (this.scrollElement !== r) {
          if (this.cleanup(), !r) {
            this.maybeNotify();
            return;
          }
          this.scrollElement = r, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = ((n = this.scrollElement) == null ? void 0 : n.window) ?? null, this.elementsCache.forEach((o) => {
            this.observer.observe(o);
          }), this.unsubs.push(this.options.observeElementRect(this, (o) => {
            this.scrollRect = o, this.maybeNotify();
          })), this.unsubs.push(this.options.observeElementOffset(this, (o, s) => {
            this.scrollAdjustments = 0, this.scrollDirection = s ? this.getScrollOffset() < o ? "forward" : "backward" : null, this.scrollOffset = o, this.isScrolling = s, this.maybeNotify();
          })), this._scrollToOffset(this.getScrollOffset(), {
            adjustments: void 0,
            behavior: void 0
          });
        }
      }, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (n, r) => {
        const o = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
        for (let i = r - 1; i >= 0; i--) {
          const l = n[i];
          if (o.has(l.lane)) continue;
          const a = s.get(l.lane);
          if (a == null || l.end > a.end ? s.set(l.lane, l) : l.end < a.end && o.set(l.lane, true), o.size === this.options.lanes) break;
        }
        return s.size === this.options.lanes ? Array.from(s.values()).sort((i, l) => i.end === l.end ? i.index - l.index : i.end - l.end)[0] : void 0;
      }, this.getMeasurementOptions = Ut(() => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled,
        this.options.lanes
      ], (n, r, o, s, i, l) => (this.prevLanes !== void 0 && this.prevLanes !== l && (this.lanesChangedFlag = true), this.prevLanes = l, this.pendingMeasuredCacheIndexes = [], {
        count: n,
        paddingStart: r,
        scrollMargin: o,
        getItemKey: s,
        enabled: i,
        lanes: l
      }), {
        key: false
      }), this.getMeasurements = Ut(() => [
        this.getMeasurementOptions(),
        this.itemSizeCache
      ], ({ count: n, paddingStart: r, scrollMargin: o, getItemKey: s, enabled: i, lanes: l }, a) => {
        if (!i) return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > n) for (const g of this.laneAssignments.keys()) g >= n && this.laneAssignments.delete(g);
        this.lanesChangedFlag && (this.lanesChangedFlag = false, this.lanesSettling = true, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMeasuredCacheIndexes = []), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((g) => {
          this.itemSizeCache.set(g.key, g.size);
        }));
        const d = this.lanesSettling ? 0 : this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [], this.lanesSettling && this.measurementsCache.length === n && (this.lanesSettling = false);
        const u = this.measurementsCache.slice(0, d), p = new Array(l).fill(void 0);
        for (let g = 0; g < d; g++) {
          const f = u[g];
          f && (p[f.lane] = g);
        }
        for (let g = d; g < n; g++) {
          const f = s(g), h = this.laneAssignments.get(g);
          let m, v;
          if (h !== void 0 && this.options.lanes > 1) {
            m = h;
            const j = p[m], M = j !== void 0 ? u[j] : void 0;
            v = M ? M.end + this.options.gap : r + o;
          } else {
            const j = this.options.lanes === 1 ? u[g - 1] : this.getFurthestMeasurement(u, g);
            v = j ? j.end + this.options.gap : r + o, m = j ? j.lane : g % this.options.lanes, this.options.lanes > 1 && this.laneAssignments.set(g, m);
          }
          const x = a.get(f), _ = typeof x == "number" ? x : this.options.estimateSize(g), S = v + _;
          u[g] = {
            index: g,
            start: v,
            size: _,
            end: S,
            key: f,
            lane: m
          }, p[m] = g;
        }
        return this.measurementsCache = u, u;
      }, {
        key: false,
        debug: () => this.options.debug
      }), this.calculateRange = Ut(() => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ], (n, r, o, s) => this.range = n.length > 0 && r > 0 ? rf({
        measurements: n,
        outerSize: r,
        scrollOffset: o,
        lanes: s
      }) : null, {
        key: false,
        debug: () => this.options.debug
      }), this.getVirtualIndexes = Ut(() => {
        let n = null, r = null;
        const o = this.calculateRange();
        return o && (n = o.startIndex, r = o.endIndex), this.maybeNotify.updateDeps([
          this.isScrolling,
          n,
          r
        ]), [
          this.options.rangeExtractor,
          this.options.overscan,
          this.options.count,
          n,
          r
        ];
      }, (n, r, o, s, i) => s === null || i === null ? [] : n({
        startIndex: s,
        endIndex: i,
        overscan: r,
        count: o
      }), {
        key: false,
        debug: () => this.options.debug
      }), this.indexFromElement = (n) => {
        const r = this.options.indexAttribute, o = n.getAttribute(r);
        return o ? parseInt(o, 10) : (console.warn(`Missing attribute name '${r}={index}' on measured element.`), -1);
      }, this._measureElement = (n, r) => {
        const o = this.indexFromElement(n), s = this.measurementsCache[o];
        if (!s) return;
        const i = s.key, l = this.elementsCache.get(i);
        l !== n && (l && this.observer.unobserve(l), this.observer.observe(n), this.elementsCache.set(i, n)), n.isConnected && this.resizeItem(o, this.options.measureElement(n, r, this));
      }, this.resizeItem = (n, r) => {
        const o = this.measurementsCache[n];
        if (!o) return;
        const s = this.itemSizeCache.get(o.key) ?? o.size, i = r - s;
        i !== 0 && ((this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(o, i, this) : o.start < this.getScrollOffset() + this.scrollAdjustments) && this._scrollToOffset(this.getScrollOffset(), {
          adjustments: this.scrollAdjustments += i,
          behavior: void 0
        }), this.pendingMeasuredCacheIndexes.push(o.index), this.itemSizeCache = new Map(this.itemSizeCache.set(o.key, r)), this.notify(false));
      }, this.measureElement = (n) => {
        if (!n) {
          this.elementsCache.forEach((r, o) => {
            r.isConnected || (this.observer.unobserve(r), this.elementsCache.delete(o));
          });
          return;
        }
        this._measureElement(n, void 0);
      }, this.getVirtualItems = Ut(() => [
        this.getVirtualIndexes(),
        this.getMeasurements()
      ], (n, r) => {
        const o = [];
        for (let s = 0, i = n.length; s < i; s++) {
          const l = n[s], a = r[l];
          o.push(a);
        }
        return o;
      }, {
        key: false,
        debug: () => this.options.debug
      }), this.getVirtualItemForOffset = (n) => {
        const r = this.getMeasurements();
        if (r.length !== 0) return es(r[Gs(0, r.length - 1, (o) => es(r[o]).start, n)]);
      }, this.getMaxScrollOffset = () => {
        if (!this.scrollElement) return 0;
        if ("scrollHeight" in this.scrollElement) return this.options.horizontal ? this.scrollElement.scrollWidth - this.scrollElement.clientWidth : this.scrollElement.scrollHeight - this.scrollElement.clientHeight;
        {
          const n = this.scrollElement.document.documentElement;
          return this.options.horizontal ? n.scrollWidth - this.scrollElement.innerWidth : n.scrollHeight - this.scrollElement.innerHeight;
        }
      }, this.getOffsetForAlignment = (n, r, o = 0) => {
        if (!this.scrollElement) return 0;
        const s = this.getSize(), i = this.getScrollOffset();
        r === "auto" && (r = n >= i + s ? "end" : "start"), r === "center" ? n += (o - s) / 2 : r === "end" && (n -= s);
        const l = this.getMaxScrollOffset();
        return Math.max(Math.min(l, n), 0);
      }, this.getOffsetForIndex = (n, r = "auto") => {
        n = Math.max(0, Math.min(n, this.options.count - 1));
        const o = this.measurementsCache[n];
        if (!o) return;
        const s = this.getSize(), i = this.getScrollOffset();
        if (r === "auto") if (o.end >= i + s - this.options.scrollPaddingEnd) r = "end";
        else if (o.start <= i + this.options.scrollPaddingStart) r = "start";
        else return [
          i,
          r
        ];
        if (r === "end" && n === this.options.count - 1) return [
          this.getMaxScrollOffset(),
          r
        ];
        const l = r === "end" ? o.end + this.options.scrollPaddingEnd : o.start - this.options.scrollPaddingStart;
        return [
          this.getOffsetForAlignment(l, r, o.size),
          r
        ];
      }, this.isDynamicMode = () => this.elementsCache.size > 0, this.scrollToOffset = (n, { align: r = "start", behavior: o } = {}) => {
        o === "smooth" && this.isDynamicMode() && console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."), this._scrollToOffset(this.getOffsetForAlignment(n, r), {
          adjustments: void 0,
          behavior: o
        });
      }, this.scrollToIndex = (n, { align: r = "auto", behavior: o } = {}) => {
        o === "smooth" && this.isDynamicMode() && console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."), n = Math.max(0, Math.min(n, this.options.count - 1)), this.currentScrollToIndex = n;
        let s = 0;
        const i = 10, l = (d) => {
          if (!this.targetWindow) return;
          const u = this.getOffsetForIndex(n, d);
          if (!u) {
            console.warn("Failed to get offset for index:", n);
            return;
          }
          const [p, g] = u;
          this._scrollToOffset(p, {
            adjustments: void 0,
            behavior: o
          }), this.targetWindow.requestAnimationFrame(() => {
            const f = () => {
              if (this.currentScrollToIndex !== n) return;
              const h = this.getScrollOffset(), m = this.getOffsetForIndex(n, g);
              if (!m) {
                console.warn("Failed to get offset for index:", n);
                return;
              }
              Yd(m[0], h) || a(g);
            };
            this.isDynamicMode() ? this.targetWindow.requestAnimationFrame(f) : f();
          });
        }, a = (d) => {
          this.targetWindow && this.currentScrollToIndex === n && (s++, s < i ? this.targetWindow.requestAnimationFrame(() => l(d)) : console.warn(`Failed to scroll to index ${n} after ${i} attempts.`));
        };
        l(r);
      }, this.scrollBy = (n, { behavior: r } = {}) => {
        r === "smooth" && this.isDynamicMode() && console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."), this._scrollToOffset(this.getScrollOffset() + n, {
          adjustments: void 0,
          behavior: r
        });
      }, this.getTotalSize = () => {
        var n;
        const r = this.getMeasurements();
        let o;
        if (r.length === 0) o = this.options.paddingStart;
        else if (this.options.lanes === 1) o = ((n = r[r.length - 1]) == null ? void 0 : n.end) ?? 0;
        else {
          const s = Array(this.options.lanes).fill(null);
          let i = r.length - 1;
          for (; i >= 0 && s.some((l) => l === null); ) {
            const l = r[i];
            s[l.lane] === null && (s[l.lane] = l.end), i--;
          }
          o = Math.max(...s.filter((l) => l !== null));
        }
        return Math.max(o - this.options.scrollMargin + this.options.paddingEnd, 0);
      }, this._scrollToOffset = (n, { adjustments: r, behavior: o }) => {
        this.options.scrollToFn(n, {
          behavior: o,
          adjustments: r
        }, this);
      }, this.measure = () => {
        this.itemSizeCache = /* @__PURE__ */ new Map(), this.laneAssignments = /* @__PURE__ */ new Map(), this.notify(false);
      }, this.setOptions(t);
    }
  }
  const Gs = (e, t, n, r) => {
    for (; e <= t; ) {
      const o = (e + t) / 2 | 0, s = n(o);
      if (s < r) e = o + 1;
      else if (s > r) t = o - 1;
      else return o;
    }
    return e > 0 ? e - 1 : 0;
  };
  function rf({ measurements: e, outerSize: t, scrollOffset: n, lanes: r }) {
    const o = e.length - 1, s = (a) => e[a].start;
    if (e.length <= r) return {
      startIndex: 0,
      endIndex: o
    };
    let i = Gs(0, o, s, n), l = i;
    if (r === 1) for (; l < o && e[l].end < n + t; ) l++;
    else if (r > 1) {
      const a = Array(r).fill(0);
      for (; l < o && a.some((u) => u < n + t); ) {
        const u = e[l];
        a[u.lane] = u.end, l++;
      }
      const d = Array(r).fill(n + t);
      for (; i >= 0 && d.some((u) => u >= n); ) {
        const u = e[i];
        d[u.lane] = u.start, i--;
      }
      i = Math.max(0, i - i % r), l = Math.min(o, l + (r - 1 - l % r));
    }
    return {
      startIndex: i,
      endIndex: l
    };
  }
  const os = typeof document < "u" ? y.useLayoutEffect : y.useEffect;
  function of({ useFlushSync: e = true, ...t }) {
    const n = y.useReducer(() => ({}), {})[1], r = {
      ...t,
      onChange: (s, i) => {
        var l;
        e && i ? li.flushSync(n) : n(), (l = t.onChange) == null || l.call(t, s, i);
      }
    }, [o] = y.useState(() => new nf(r));
    return o.setOptions(r), os(() => o._didMount(), []), os(() => o._willUpdate()), o;
  }
  function sf(e) {
    return of({
      observeElementRect: Qd,
      observeElementOffset: Zd,
      scrollToFn: tf,
      ...e
    });
  }
  function lf(e, t) {
    var _a2, _b;
    let n = false, r = e != null ? typeof e == "object" ? (n = true, JSON.stringify(e)) : String(e) : "";
    if (t == null ? void 0 : t.format) try {
      switch (t.format.type) {
        case "number":
          (typeof e == "number" || typeof e == "string" && !isNaN(Number(e))) && (r = Fs(Number(e), {
            decimals: t.format.numberDecimals,
            prefix: t.format.numberPrefix,
            suffix: t.format.numberSuffix,
            thousands: t.format.numberThousandsSeparator
          }));
          break;
        case "date":
          r = no(e, t.format.dateFormat, t.format.dateInputFormat);
          break;
        case "boolean":
          r = Dr(e, t.format.booleanTrue, t.format.booleanFalse);
          break;
        case "string":
          r = Ts(String(r), t.format);
          break;
      }
    } catch {
    }
    if (!t) return {
      displayValue: r,
      textSx: {},
      bgSx: {}
    };
    const o = !t.cellStyleMode || t.cellStyleMode === "first-match", s = ((_a2 = t.format) == null ? void 0 : _a2.type) === "date" ? Ec(e, t.format.dateInputFormat) : e, i = {}, l = {};
    if (t.cellStyle && t.cellStyle.length > 0) {
      for (const a of t.cellStyle) if (a.logic && pu(a.logic, s)) {
        if (a.backgroundColor && !("background" in i) && !("backgroundColor" in i)) {
          const d = Ot(a.backgroundColor);
          d ? i.background = d : i.backgroundColor = a.backgroundColor;
        }
        if (a.textColor && !("color" in l) && !("background" in l)) {
          const d = Ot(a.textColor);
          d ? (l.background = d, l.backgroundClip = "text", l.WebkitBackgroundClip = "text", l.color = "transparent") : l.color = a.textColor;
        }
        if (a.fontWeight && !l.fontWeight && (l.fontWeight = a.fontWeight), a.fontStyle && !l.fontStyle && (l.fontStyle = a.fontStyle), o) break;
      }
    }
    return ((_b = t.format) == null ? void 0 : _b.type) === "string" && (t.format.stringFontWeight === "bold" && !l.fontWeight && (l.fontWeight = "bold"), t.format.stringFontStyle === "italic" && !l.fontStyle && (l.fontStyle = "italic"), t.format.stringFontSize && !l.fontSize && (l.fontSize = `${t.format.stringFontSize}px`), t.format.stringTextColor && !("color" in l) && !("background" in l) && (l.color = t.format.stringTextColor)), {
      displayValue: r,
      textSx: l,
      bgSx: i,
      isTruncated: n
    };
  }
  function ss({ value: e, config: t, valueSize: n }) {
    const { displayValue: r, textSx: o, bgSx: s, isTruncated: i } = y.useMemo(() => lf(e, t), [
      e,
      t
    ]);
    return c.jsxs(H, {
      sx: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        gap: 0.5,
        padding: "0 8px",
        ...s
      },
      children: [
        c.jsx(P, {
          variant: "body2",
          component: H,
          title: r,
          sx: {
            flex: 1,
            minWidth: 0,
            lineHeight: "inherit",
            ...n && {
              fontSize: n
            },
            ...o
          },
          dangerouslySetInnerHTML: {
            __html: r ?? ""
          }
        }),
        i && c.jsx(ht, {
          label: "JSON",
          size: "small",
          sx: {
            height: 18,
            fontSize: "0.65rem",
            flexShrink: 0,
            opacity: 0.7
          }
        })
      ]
    });
  }
  function is(e) {
    return typeof e == "function" ? e() : e;
  }
  function qt(e, t, n = true) {
    const [r, o] = y.useState(() => {
      if (!n) return is(t);
      try {
        const i = localStorage.getItem(e);
        if (i !== null) return JSON.parse(i);
      } catch {
      }
      return is(t);
    }), s = y.useRef(n);
    return y.useEffect(() => {
      const i = s.current;
      if (s.current = n, !!n) {
        if (!i) {
          try {
            const l = localStorage.getItem(e);
            l !== null && o(JSON.parse(l));
          } catch {
          }
          return;
        }
        try {
          localStorage.setItem(e, JSON.stringify(r));
        } catch {
        }
      }
    }, [
      e,
      r,
      n
    ]), [
      r,
      o
    ];
  }
  function ls(e) {
    const t = [
      10,
      25,
      50,
      100
    ];
    if (!e) return t;
    const n = e.split(",").map((r) => parseInt(r.trim(), 10)).filter((r) => !isNaN(r) && r > 0);
    return n.length > 0 ? [
      ...new Set(n)
    ].sort((r, o) => r - o) : t;
  }
  function af(e) {
    const { widgetId: t, columnConfig: n, tableAutoSize: r, tableRowSelection: o, tablePageSize: s, tablePageSizeOptions: i, tablePagination: l, tableFiltering: a, tableSorting: d, tableQuickFilter: u, gridRowsLength: p } = e, g = y.useRef([]), f = y.useRef([]), h = y.useRef(""), m = y.useRef(d), v = y.useRef(a), x = y.useRef(u), [_, S] = qt(`jtc_sorting_${t}`, [], d);
    y.useEffect(() => {
      d ? !m.current && g.current.length > 0 && S(g.current) : S((E) => (E.length > 0 && (g.current = E), [])), m.current = d;
    }, [
      d,
      S
    ]);
    const [j, M] = qt(`jtc_filters_${t}`, [], a);
    y.useEffect(() => {
      a ? !v.current && f.current.length > 0 && M(f.current) : M((E) => (E.length > 0 && (f.current = E), [])), v.current = a;
    }, [
      a,
      M
    ]);
    const [w, $] = qt(`jtc_global_filter_${t}`, "", u);
    y.useEffect(() => {
      u ? !x.current && h.current && $(h.current) : $((E) => (E && (h.current = E), "")), x.current = u;
    }, [
      u,
      $
    ]);
    const [R, T] = y.useState({}), [F, z] = qt(`jtc_col_sizes_${t}`, () => {
      const E = {};
      return n.forEach((L) => {
        L.width && (E[L.path] = L.width);
      }), o === true && (E.__select__ = 48), E;
    }, !r), q = y.useMemo(() => Number(s) || 25, [
      s
    ]), [B, Y] = qt(`jtc_pagination_${t}`, {
      pageIndex: 0,
      pageSize: q
    });
    y.useEffect(() => {
      Y((E) => E.pageSize === q ? E : {
        pageIndex: 0,
        pageSize: q
      });
    }, [
      q,
      Y
    ]);
    const Z = y.useMemo(() => l === false ? {
      pageIndex: 0,
      pageSize: Math.max(p, 1)
    } : B, [
      l,
      p,
      B
    ]), W = y.useMemo(() => ls(i), [
      i
    ]), [N, C] = qt(`jtc_visibility_${t}`, {}), I = y.useCallback(() => {
      C({});
    }, [
      C
    ]);
    return {
      sorting: _,
      columnFilters: j,
      globalFilter: w,
      rowSelection: R,
      columnSizing: F,
      pagination: B,
      effectivePagination: Z,
      columnVisibility: N,
      setSorting: S,
      setColumnFilters: M,
      setGlobalFilter: $,
      setRowSelection: T,
      setColumnSizing: z,
      setPagination: Y,
      setColumnVisibility: C,
      pageSizeOptions: W,
      parsePageSizeOptions: ls,
      showAllColumns: I
    };
  }
  const cf = [
    {
      value: "contains",
      label: "json_table_filter_contains"
    },
    {
      value: "startsWith",
      label: "json_table_filter_starts_with"
    },
    {
      value: "endsWith",
      label: "json_table_filter_ends_with"
    },
    {
      value: "equals",
      label: "json_table_filter_equals"
    },
    {
      value: "notEquals",
      label: "json_table_filter_not_equals"
    },
    {
      value: "isEmpty",
      label: "json_table_filter_is_empty"
    },
    {
      value: "isNotEmpty",
      label: "json_table_filter_is_not_empty"
    }
  ], uf = [
    {
      value: "equals",
      label: "json_table_filter_equals"
    },
    {
      value: "notEquals",
      label: "json_table_filter_not_equals"
    },
    {
      value: "greaterThan",
      label: "json_table_filter_greater_than"
    },
    {
      value: "greaterThanOrEqual",
      label: "json_table_filter_greater_than_or_equal"
    },
    {
      value: "lessThan",
      label: "json_table_filter_less_than"
    },
    {
      value: "lessThanOrEqual",
      label: "json_table_filter_less_than_or_equal"
    },
    {
      value: "isEmpty",
      label: "json_table_filter_is_empty"
    },
    {
      value: "isNotEmpty",
      label: "json_table_filter_is_not_empty"
    }
  ], df = [
    {
      value: "equals",
      label: "json_table_filter_equals"
    },
    {
      value: "greaterThan",
      label: "json_table_filter_after"
    },
    {
      value: "greaterThanOrEqual",
      label: "json_table_filter_on_or_after"
    },
    {
      value: "lessThan",
      label: "json_table_filter_before"
    },
    {
      value: "lessThanOrEqual",
      label: "json_table_filter_on_or_before"
    },
    {
      value: "isEmpty",
      label: "json_table_filter_is_empty"
    },
    {
      value: "isNotEmpty",
      label: "json_table_filter_is_not_empty"
    }
  ], ff = [
    {
      value: "equals",
      label: "json_table_filter_equals"
    },
    {
      value: "notEquals",
      label: "json_table_filter_not_equals"
    },
    {
      value: "isEmpty",
      label: "json_table_filter_is_empty"
    },
    {
      value: "isNotEmpty",
      label: "json_table_filter_is_not_empty"
    }
  ], pf = [
    {
      value: "true",
      label: "json_table_filter_boolean_true"
    },
    {
      value: "false",
      label: "json_table_filter_boolean_false"
    }
  ];
  function gf(e) {
    switch (e) {
      case "number":
      case "date":
      case "boolean":
        return "equals";
      default:
        return "contains";
    }
  }
  function hf(e) {
    if (e == null || e === "") return "";
    if (typeof e == "string" && /^\d{4}-\d{2}-\d{2}$/.test(e)) return e;
    try {
      const t = new Date(e);
      if (!isNaN(t.getTime())) {
        const n = t.getFullYear(), r = String(t.getMonth() + 1).padStart(2, "0"), o = String(t.getDate()).padStart(2, "0");
        return `${n}-${r}-${o}`;
      }
    } catch {
    }
    return typeof e == "string" ? e : typeof e == "number" ? String(e) : "";
  }
  function mf({ open: e, onClose: t, onApply: n, currentValue: r, columnId: o, columnType: s }) {
    const i = lr(), l = ea(i.breakpoints.down("sm")), a = y.useMemo(() => s === "number" || s === "date" || s === "boolean" || s === "string" ? s : "string", [
      s
    ]), d = y.useMemo(() => {
      switch (a) {
        case "number":
          return uf;
        case "date":
          return df;
        case "boolean":
          return ff;
        default:
          return cf;
      }
    }, [
      a
    ]), u = y.useMemo(() => {
      const R = gf(a);
      if (r == null) return {
        operator: R,
        value: ""
      };
      if (typeof r == "object" && r !== null && "operator" in r) {
        const T = r;
        return d.some((z) => z.value === T.operator) ? T : {
          operator: R,
          value: T.value
        };
      }
      return typeof r == "string" || typeof r == "number" || typeof r == "boolean" ? {
        operator: R,
        value: r
      } : {
        operator: R,
        value: JSON.stringify(r)
      };
    }, [
      r,
      a,
      d
    ]), [p, g] = y.useState(u.operator), [f, h] = y.useState(typeof u.value == "boolean" ? String(u.value) : u.value), m = y.useMemo(() => r != null, [
      r
    ]);
    y.useEffect(() => {
      e && (g(u.operator), h(typeof u.value == "boolean" ? String(u.value) : u.value));
    }, [
      u,
      e
    ]);
    const v = ![
      "isEmpty",
      "isNotEmpty"
    ].includes(p), x = y.useCallback(() => {
      if (!v) {
        n({
          operator: p,
          value: ""
        });
        return;
      }
      if (a === "boolean") {
        n({
          operator: p,
          value: f === "true"
        });
        return;
      }
      const R = typeof f == "string" ? f.trim() : String(f).trim();
      if (R === "") n(void 0);
      else {
        const T = a === "number" ? Number(R) : R;
        n({
          operator: p,
          value: T
        });
      }
    }, [
      v,
      a,
      p,
      f,
      n
    ]), _ = y.useCallback(() => {
      n(void 0);
    }, [
      n
    ]), S = y.useCallback((R) => {
      R.key === "Enter" && !R.shiftKey && (R.preventDefault(), x());
    }, [
      x
    ]), j = y.useCallback((R) => {
      g(R), ([
        "isEmpty",
        "isNotEmpty"
      ].includes(R) || a !== "boolean" && (f === "true" || f === "false")) && h("");
    }, [
      f,
      a
    ]), M = o.split(".").pop() || o, w = `filter-dialog-title-${o}`, $ = `filter-dialog-description-${o}`;
    return c.jsxs(Gr, {
      open: e,
      onClose: t,
      maxWidth: "sm",
      fullWidth: true,
      fullScreen: l,
      "aria-labelledby": w,
      "aria-describedby": $,
      children: [
        c.jsx(Ur, {
          id: w,
          children: c.jsxs(H, {
            sx: {
              display: "flex",
              alignItems: "center",
              gap: 1
            },
            children: [
              b.t("json_table_filter_for_column").replace("{column}", M),
              m && c.jsx(ht, {
                label: b.t("json_table_filter_active"),
                size: "small",
                color: "primary",
                variant: "outlined"
              })
            ]
          })
        }),
        c.jsxs(qr, {
          children: [
            c.jsx(P, {
              id: $,
              variant: "body2",
              color: "text.secondary",
              sx: {
                mb: 2,
                mt: 1
              },
              children: b.t("json_table_filter_dialog_description")
            }),
            c.jsxs(H, {
              sx: {
                display: "flex",
                flexDirection: "column",
                gap: 2
              },
              onKeyDown: S,
              children: [
                c.jsxs(ft, {
                  fullWidth: true,
                  children: [
                    c.jsx(pt, {
                      id: `filter-operator-label-${o}`,
                      children: b.t("json_table_filter_operator")
                    }),
                    c.jsx(ot, {
                      value: p,
                      label: b.t("json_table_filter_operator"),
                      labelId: `filter-operator-label-${o}`,
                      onChange: (R) => j(R.target.value),
                      children: d.map((R) => c.jsx(ne, {
                        value: R.value,
                        children: b.t(R.label)
                      }, R.value))
                    })
                  ]
                }),
                v && a === "boolean" && c.jsxs(ft, {
                  fullWidth: true,
                  children: [
                    c.jsx(pt, {
                      id: `filter-value-label-${o}`,
                      children: b.t("json_table_filter_value")
                    }),
                    c.jsx(ot, {
                      value: f === "true" || f === "false" ? f : "",
                      label: b.t("json_table_filter_value"),
                      labelId: `filter-value-label-${o}`,
                      onChange: (R) => h(R.target.value),
                      children: pf.map((R) => c.jsx(ne, {
                        value: R.value,
                        children: b.t(R.label)
                      }, R.value))
                    })
                  ]
                }),
                v && a === "date" && c.jsx(ve, {
                  label: b.t("json_table_filter_value"),
                  value: hf(f),
                  onChange: (R) => h(R.target.value),
                  type: "date",
                  fullWidth: true,
                  autoFocus: true,
                  InputLabelProps: {
                    shrink: true
                  }
                }),
                v && a === "number" && c.jsx(ve, {
                  label: b.t("json_table_filter_value"),
                  value: f,
                  onChange: (R) => h(R.target.value),
                  type: "number",
                  fullWidth: true,
                  autoFocus: true
                }),
                v && a === "string" && c.jsx(ve, {
                  label: b.t("json_table_filter_value"),
                  value: f,
                  onChange: (R) => h(R.target.value),
                  type: "text",
                  fullWidth: true,
                  autoFocus: true
                }),
                !v && c.jsx(P, {
                  variant: "body2",
                  color: "text.secondary",
                  sx: {
                    fontStyle: "italic"
                  },
                  children: b.t("json_table_filter_no_value_needed")
                })
              ]
            })
          ]
        }),
        c.jsxs(Yr, {
          sx: {
            px: 3,
            pb: 2
          },
          children: [
            m && c.jsx(st, {
              onClick: _,
              color: "error",
              sx: {
                mr: "auto"
              },
              children: b.t("json_table_filter_clear")
            }),
            c.jsx(st, {
              onClick: t,
              children: b.t("cancel")
            }),
            c.jsx(st, {
              variant: "contained",
              onClick: x,
              disabled: v && a === "boolean" && f !== "true" && f !== "false",
              children: b.t("json_table_filter_apply")
            })
          ]
        })
      ]
    });
  }
  function yf({ anchorEl: e, open: t, onClose: n, activeColumn: r, isSorted: o, tableFiltering: s, activeColumnFilter: i, onSetSorting: l, onClearSorting: a, onShowAllColumns: d, hasHiddenColumns: u }) {
    var _a2, _b, _c2, _d2, _e, _f2;
    const [p, g] = y.useState(false), f = ((_a2 = r == null ? void 0 : r.getCanSort) == null ? void 0 : _a2.call(r)) === true, h = s && ((_b = r == null ? void 0 : r.getCanFilter) == null ? void 0 : _b.call(r)) === true, m = ((_c2 = r == null ? void 0 : r.getCanHide) == null ? void 0 : _c2.call(r)) === true, v = i != null;
    if (!(f || h || m)) return null;
    const _ = () => {
      r && l([
        {
          id: r.id,
          desc: false
        }
      ]), n();
    }, S = () => {
      r && l([
        {
          id: r.id,
          desc: true
        }
      ]), n();
    }, j = () => {
      r && a(r.id), n();
    }, M = () => {
      g(true);
    }, w = () => {
      g(false);
    }, $ = (z) => {
      r == null ? void 0 : r.setFilterValue(z), g(false), n();
    }, R = () => {
      r == null ? void 0 : r.setFilterValue(void 0), n();
    }, T = () => {
      var _a3;
      (_a3 = r == null ? void 0 : r.toggleVisibility) == null ? void 0 : _a3.call(r, false), n();
    }, F = () => {
      d == null ? void 0 : d(), n();
    };
    return c.jsxs(c.Fragment, {
      children: [
        c.jsxs(ai, {
          anchorEl: e,
          open: t,
          onClose: n,
          children: [
            f && c.jsxs(c.Fragment, {
              children: [
                c.jsxs(ne, {
                  onClick: _,
                  children: [
                    c.jsx(nn, {
                      children: c.jsx($s, {
                        fontSize: "small"
                      })
                    }),
                    c.jsx(P, {
                      variant: "body2",
                      children: b.t("json_table_sort_asc")
                    })
                  ]
                }),
                c.jsxs(ne, {
                  onClick: S,
                  children: [
                    c.jsx(nn, {
                      children: c.jsx(Ms, {
                        fontSize: "small"
                      })
                    }),
                    c.jsx(P, {
                      variant: "body2",
                      children: b.t("json_table_sort_desc")
                    })
                  ]
                }),
                o && c.jsx(ne, {
                  onClick: j,
                  children: c.jsx(P, {
                    variant: "body2",
                    children: b.t("json_table_sort_clear")
                  })
                })
              ]
            }),
            f && h && c.jsx($r, {}),
            h && c.jsxs(c.Fragment, {
              children: [
                c.jsxs(ne, {
                  onClick: M,
                  children: [
                    c.jsx(nn, {
                      children: c.jsx(Sc, {
                        fontSize: "small"
                      })
                    }),
                    c.jsx(P, {
                      variant: "body2",
                      children: b.t("json_table_set_filter")
                    })
                  ]
                }),
                v && c.jsxs(ne, {
                  onClick: R,
                  children: [
                    c.jsx(nn, {
                      children: c.jsx(yi, {
                        fontSize: "small"
                      })
                    }),
                    c.jsx(P, {
                      variant: "body2",
                      children: b.t("json_table_filter_clear")
                    })
                  ]
                })
              ]
            }),
            (f || h) && m && c.jsx($r, {}),
            m && c.jsxs(ne, {
              onClick: T,
              children: [
                c.jsx(nn, {
                  children: c.jsx(Is, {
                    fontSize: "small"
                  })
                }),
                c.jsx(P, {
                  variant: "body2",
                  children: b.t("json_table_hide_column")
                })
              ]
            }),
            u && d && c.jsx(ne, {
              onClick: F,
              children: c.jsx(P, {
                variant: "body2",
                children: b.t("json_table_show_all_columns")
              })
            })
          ]
        }),
        h && r && p && c.jsx(mf, {
          open: p,
          onClose: w,
          onApply: $,
          currentValue: (_d2 = r.getFilterValue) == null ? void 0 : _d2.call(r),
          columnId: r.id,
          columnType: (_f2 = (_e = r.columnDef) == null ? void 0 : _e.meta) == null ? void 0 : _f2.columnType
        })
      ]
    });
  }
  const bf = {
    compact: 36,
    standard: 52,
    comfortable: 68
  }, vf = {
    compact: 36,
    standard: 56,
    comfortable: 68
  }, xf = (e) => {
    const { children: t, value: n, ...r } = e;
    return c.jsx(ne, {
      ...r,
      value: n,
      children: c.jsx(P, {
        variant: "body2",
        component: "span",
        children: t
      })
    });
  }, _f = () => {
    const e = y.useContext(ui), { widget: { data: { oidObject: t } }, widget: n, id: r } = e, { data: o } = di("oid"), s = _i("oid"), i = lr(), l = t == null ? void 0 : t.type, a = l === "string" || l === "mixed" || l === "json", d = y.useMemo(() => {
      if (s == null) return [];
      let A;
      if (typeof s == "string") try {
        A = JSON.parse(s);
      } catch {
        return [];
      }
      else A = s;
      return Array.isArray(A) ? A : typeof A == "object" && A !== null ? [
        A
      ] : [];
    }, [
      s
    ]), u = y.useMemo(() => ({
      maxDepth: n.data.tableMaxDepth || 10
    }), [
      n.data.tableMaxDepth
    ]), { columns: p, rows: g, meta: f } = qu(d, u), h = y.useMemo(() => {
      const A = n.data.tableMaxDepth || 10;
      return f.maxDepth > A ? {
        actual: f.maxDepth,
        configured: A
      } : null;
    }, [
      f.maxDepth,
      n.data.tableMaxDepth
    ]), m = y.useMemo(() => Ps(n.data.columnConfig), [
      n.data.columnConfig
    ]), v = n.data.tableDensity || "standard", x = Number(n.data.tableRowHeight) || bf[v] || 52, _ = Number(n.data.tableHeaderHeight) || vf[v] || 56, S = g, j = n.data.tableFiltering === true && n.data.tableColumnMenu !== false, M = y.useMemo(() => ju({
      columnConfig: m,
      analysisColumns: p,
      widgetData: {
        tableSorting: n.data.tableSorting !== false,
        tableFiltering: j,
        tableRowSelection: n.data.tableRowSelection === true,
        tableHiding: n.data.tableHiding !== false
      },
      renderConfiguredCell: (A, D) => c.jsx(ss, {
        value: A,
        config: D,
        valueSize: o.valueSize
      }),
      renderAutoDetectedCell: (A) => c.jsx(ss, {
        value: A,
        valueSize: o.valueSize
      }),
      renderSelectionHeader: (A) => c.jsx(Cn, {
        size: "small",
        indeterminate: A.getIsSomePageRowsSelected(),
        checked: A.getIsAllPageRowsSelected(),
        onChange: A.getToggleAllPageRowsSelectedHandler(),
        "aria-label": "Select all rows"
      }),
      renderSelectionCell: (A) => c.jsx(Cn, {
        size: "small",
        checked: A.getIsSelected(),
        onChange: A.getToggleSelectedHandler(),
        "aria-label": "Select row"
      })
    }), [
      m,
      p,
      n.data.tableSorting,
      j,
      n.data.tableRowSelection,
      n.data.tableHiding,
      o.valueSize
    ]), w = y.useMemo(() => {
      var _a2;
      const A = /* @__PURE__ */ new Map();
      for (const D of m) ((_a2 = D.format) == null ? void 0 : _a2.type) === "date" && A.set(D.path, {
        dateFormat: D.format.dateFormat,
        dateInputFormat: D.format.dateInputFormat
      });
      return A;
    }, [
      m
    ]), $ = y.useCallback((A, D, U) => {
      const ce = typeof U == "string" ? U.toLowerCase() : typeof U == "number" || typeof U == "boolean" ? String(U).toLowerCase() : "";
      if (!ce) return true;
      const pe = A.getValue(D);
      if (pe == null) return false;
      const ze = w.get(D);
      return ze && no(pe, ze.dateFormat, ze.dateInputFormat).toLowerCase().includes(ce) ? true : (typeof pe == "string" ? pe : typeof pe == "number" || typeof pe == "boolean" ? String(pe) : "").toLowerCase().includes(ce);
    }, [
      w
    ]), R = n.data.tableAutoSize === true, { sorting: T, columnFilters: F, globalFilter: z, rowSelection: q, columnSizing: B, pagination: Y, effectivePagination: Z, columnVisibility: W, setSorting: N, setColumnFilters: C, setGlobalFilter: I, setRowSelection: E, setColumnSizing: L, setPagination: re, setColumnVisibility: J, pageSizeOptions: ye, showAllColumns: he } = af({
      widgetId: r,
      columnConfig: m,
      tableAutoSize: R,
      tableRowSelection: n.data.tableRowSelection === true,
      tablePageSize: Number(n.data.tablePageSize) || 25,
      tablePageSizeOptions: n.data.tablePageSizeOptions,
      tablePagination: n.data.tablePagination !== false,
      tableFiltering: j,
      tableSorting: n.data.tableSorting !== false,
      tableQuickFilter: n.data.tableQuickFilter === true,
      gridRowsLength: S.length
    }), le = qd({
      data: S,
      columns: M,
      getCoreRowModel: Ed(),
      getSortedRowModel: Vd(),
      getFilteredRowModel: Hd(),
      getPaginationRowModel: Bd(),
      enableMultiSort: n.data.tableSortingMulti ?? false,
      globalFilterFn: $,
      filterFns: _u,
      columnResizeMode: "onChange",
      enableColumnResizing: !R,
      defaultColumn: {
        minSize: 40,
        maxSize: 2e3,
        filterFn: "advanced"
      },
      state: {
        sorting: T,
        columnFilters: F,
        globalFilter: z,
        pagination: Z,
        rowSelection: q,
        columnSizing: B,
        columnVisibility: W
      },
      onSortingChange: N,
      onColumnFiltersChange: C,
      onGlobalFilterChange: I,
      onPaginationChange: n.data.tablePagination !== false ? re : void 0,
      onRowSelectionChange: E,
      onColumnSizingChange: L,
      onColumnVisibilityChange: J,
      enableRowSelection: n.data.tableRowSelection === true,
      enableSorting: n.data.tableSorting !== false,
      enableColumnFilters: j,
      enableGlobalFilter: n.data.tableQuickFilter === true
    }), Re = y.useRef(null), ae = y.useRef(null), [X, at] = y.useState({}), [Le, ie] = y.useState(null), _e = y.useRef(null), [be, bt] = y.useState(void 0), [Rt, ct] = y.useState(void 0), vt = y.useCallback((A, D) => {
      var _a2;
      _e.current = A;
      const U = A.id, ce = T.find((ze) => ze.id === U), pe = (_a2 = F.find((ze) => ze.id === U)) == null ? void 0 : _a2.value;
      bt(ce), ct(pe), ie(D);
    }, [
      T,
      F
    ]), Mt = y.useCallback(() => {
      ie(null);
    }, []);
    y.useEffect(() => {
      if (!R) return;
      const A = ae.current;
      if (!A) return;
      const D = new ResizeObserver(() => {
        const U = A.querySelector("tr[data-row-index]");
        if (!U) return;
        const ce = U.querySelectorAll("td"), pe = le.getHeaderGroups()[0];
        if (!pe || ce.length !== pe.headers.length) return;
        const ze = {};
        pe.headers.forEach((zn, Et) => {
          const ao = ce[Et];
          ao && (ze[zn.id] = ao.getBoundingClientRect().width);
        }), at(ze);
      });
      return D.observe(A), () => D.disconnect();
    }, [
      R,
      le
    ]);
    const Ue = y.useMemo(() => {
      const A = {
        tableLayout: R ? "auto" : "fixed",
        width: "100%"
      };
      if (n.data.tableShowRowBorders === false) A["& .MuiTableCell-root"] = {
        borderBottom: "none"
      };
      else {
        const D = n.data.horizontalCellBorderWidth ?? 1, U = kn(n.data.horizontalCellBorderColor);
        A["& .MuiTableCell-root"] = {
          ...A["& .MuiTableCell-root"],
          borderBottom: `${D}px solid`,
          borderBottomColor: U || "divider"
        };
      }
      if (n.data.tableShowCellBorders === true) {
        const D = n.data.verticalCellBorderWidth ?? 1, U = kn(n.data.verticalCellBorderColor);
        A["& .MuiTableCell-root:not(:last-child)"] = {
          borderRight: `${D}px solid`,
          borderRightColor: U || "divider"
        };
      }
      return A;
    }, [
      n.data.tableShowRowBorders,
      n.data.tableShowCellBorders,
      n.data.horizontalCellBorderWidth,
      n.data.horizontalCellBorderColor,
      n.data.verticalCellBorderWidth,
      n.data.verticalCellBorderColor,
      R
    ]), He = n.data.tableHeaderBgColor, qe = n.data.tableHeaderTextColor, Ye = n.data.tableHeaderFontSize, $t = y.useMemo(() => ({
      height: _,
      padding: 0,
      whiteSpace: "nowrap",
      ...qe && {
        color: qe
      },
      ...Ye && {
        fontSize: `${Ye}px`
      }
    }), [
      _,
      qe,
      Ye
    ]), At = y.useMemo(() => ({
      ...qe && {
        color: qe
      },
      ...Ye && {
        fontSize: `${Ye}px`
      }
    }), [
      qe,
      Ye
    ]), It = n.data.noCard === true, tt = n.data.headerBorderWidth ?? 0, Pt = kn(n.data.headerBorderColor), Ft = y.useMemo(() => {
      const A = n.data.tableHeaderElevation ?? 6, D = It ? {
        backgroundColor: "transparent",
        boxShadow: "none"
      } : {
        backgroundColor: "background.paper",
        boxShadow: A > 0 ? i.shadows[A] : "none"
      };
      tt > 0 && (D["&::after"] = {
        content: '""',
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: `${tt}px`,
        backgroundColor: Pt || i.palette.divider,
        pointerEvents: "none"
      });
      const U = He ? Ot(He) : null;
      return U ? {
        ...D,
        background: U
      } : He ? {
        ...D,
        backgroundColor: He
      } : D;
    }, [
      It,
      He,
      i.shadows,
      i.palette.divider,
      n.data.tableHeaderElevation,
      tt,
      Pt
    ]), en = y.useMemo(() => {
      const A = {
        flex: 1,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column"
      }, D = n.data.borderWidth, U = n.data.borderStyle || "solid", ce = kn(n.data.borderColor), pe = n.data.borderRadius;
      return D && D > 0 && (A.border = `${D}px ${U}`, A.borderColor = ce || "divider"), pe && (A.borderRadius = pe), A;
    }, [
      n.data.borderWidth,
      n.data.borderStyle,
      n.data.borderColor,
      n.data.borderRadius
    ]), Be = y.useMemo(() => ({
      flex: 1,
      overflow: "auto"
    }), []), Tt = y.useCallback((A) => R ? X[A.id] ?? "auto" : A.getSize(), [
      R,
      X
    ]), nt = y.useMemo(() => ({
      overflow: "hidden",
      height: x,
      maxHeight: x,
      padding: 0,
      verticalAlign: "middle"
    }), [
      x
    ]), rt = n.data.evenRowColor || null, Vt = n.data.oddRowColor || null, Wt = rt ? Ot(rt) : null, Pn = Vt ? Ot(Vt) : null, Dt = y.useCallback((A) => {
      const D = A % 2 === 0, U = D ? rt : Vt, ce = D ? Wt : Pn;
      if (U) return ce ? {
        background: ce
      } : {
        backgroundColor: U
      };
    }, [
      rt,
      Vt,
      Wt,
      Pn
    ]), Gt = le.getRowModel().rows, Fn = sf({
      count: Gt.length,
      getScrollElement: () => Re.current,
      estimateSize: () => x,
      overscan: 25,
      scrollPaddingStart: x
    }), fr = n.data.tableVirtualizeThreshold ?? 50, zt = n.data.tablePagination === false && Gt.length > fr ? Fn.getVirtualItems() : null, pr = zt == null ? void 0 : zt[0], Tn = zt == null ? void 0 : zt[zt.length - 1], Dn = (pr == null ? void 0 : pr.start) ?? 0, G = Tn ? Fn.getTotalSize() - (Tn.end ?? 0) : 0;
    return c.jsxs(fi, {
      isValidType: a,
      data: o,
      children: [
        c.jsx(pi, {
          data: o,
          widget: n
        }),
        a && M.length > 0 ? c.jsxs(H, {
          sx: {
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            p: Number(n.data.jsonTablePadding) || 0
          },
          children: [
            n.data.tableQuickFilter === true && c.jsx(H, {
              sx: {
                p: 1,
                flexShrink: 0
              },
              children: c.jsx(ve, {
                size: "small",
                variant: "outlined",
                fullWidth: true,
                value: z,
                onChange: (A) => I(A.target.value),
                placeholder: b.t("json_table_search_placeholder"),
                slotProps: {
                  input: {
                    startAdornment: c.jsx(Cs, {
                      position: "start",
                      children: c.jsx(As, {
                        fontSize: "small"
                      })
                    })
                  }
                }
              })
            }),
            h && c.jsx(Kn, {
              severity: "warning",
              sx: {
                m: 1
              },
              children: c.jsx(P, {
                variant: "body2",
                children: b.t("json_table_depth_warning").replace("{{actual}}", String(h.actual)).replace("{{configured}}", String(h.configured))
              })
            }),
            c.jsx(H, {
              sx: en,
              children: c.jsx(Ba, {
                ref: Re,
                sx: Be,
                children: c.jsxs(Aa, {
                  size: v === "compact" ? "small" : "medium",
                  sx: Ue,
                  children: [
                    c.jsx(qa, {
                      sx: {
                        position: "sticky",
                        top: 0,
                        zIndex: 2,
                        ...Ft,
                        "& .resize-handle": {
                          opacity: 0
                        },
                        "&:hover .resize-handle": {
                          opacity: 1
                        }
                      },
                      children: le.getHeaderGroups().map((A) => c.jsx(on, {
                        children: A.headers.map((D) => {
                          const U = D.column.getCanSort(), ce = D.column.getIsSorted(), pe = D.column.columnDef.meta, ze = D.column.id === "__select__", zn = !R;
                          return c.jsxs(wt, {
                            component: "th",
                            colSpan: D.colSpan,
                            align: (pe == null ? void 0 : pe.align) || "left",
                            padding: ze ? "checkbox" : "normal",
                            sx: {
                              width: Tt(D),
                              minWidth: ze ? 48 : 40,
                              position: "relative",
                              ...$t
                            },
                            children: [
                              ze ? dn(D.column.columnDef.header, D.getContext()) : c.jsxs(H, {
                                sx: {
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: (pe == null ? void 0 : pe.align) === "right" ? "flex-end" : (pe == null ? void 0 : pe.align) === "center" ? "center" : "space-between",
                                  width: "100%"
                                },
                                children: [
                                  U ? c.jsx(xc, {
                                    active: ce !== false,
                                    direction: ce === "desc" ? "desc" : "asc",
                                    onClick: D.column.getToggleSortingHandler(),
                                    children: c.jsx(P, {
                                      variant: "body2",
                                      component: "span",
                                      fontWeight: "medium",
                                      noWrap: true,
                                      sx: At,
                                      children: dn(D.column.columnDef.header, D.getContext())
                                    })
                                  }) : c.jsx(P, {
                                    variant: "body2",
                                    component: "span",
                                    fontWeight: "medium",
                                    noWrap: true,
                                    sx: At,
                                    children: dn(D.column.columnDef.header, D.getContext())
                                  }),
                                  n.data.tableColumnMenu !== false && (D.column.getCanSort() || j && D.column.getCanFilter() || D.column.getCanHide()) && c.jsx(ke, {
                                    title: b.t("json_table_column_menu"),
                                    children: c.jsx(we, {
                                      size: "small",
                                      "aria-label": b.t("json_table_column_menu"),
                                      onClick: (Et) => {
                                        Et.stopPropagation(), vt(D.column, Et.currentTarget);
                                      },
                                      sx: {
                                        ml: 0.5,
                                        opacity: 0.6
                                      },
                                      children: c.jsx(jc, {
                                        fontSize: "inherit"
                                      })
                                    })
                                  })
                                ]
                              }),
                              zn && D.column.getCanResize() && c.jsx(H, {
                                className: "resize-handle",
                                onMouseDown: D.getResizeHandler(),
                                onTouchStart: D.getResizeHandler(),
                                onClick: (Et) => Et.stopPropagation(),
                                sx: {
                                  position: "absolute",
                                  right: 0,
                                  top: 0,
                                  height: "100%",
                                  width: "4px",
                                  cursor: "col-resize",
                                  userSelect: "none",
                                  touchAction: "none",
                                  zIndex: 1,
                                  opacity: D.column.getIsResizing() ? 1 : 0,
                                  bgcolor: D.column.getIsResizing() ? "primary.main" : "divider",
                                  transition: "opacity 0.15s",
                                  "&:hover": {
                                    opacity: 1,
                                    bgcolor: "primary.light"
                                  }
                                }
                              })
                            ]
                          }, D.id);
                        })
                      }, A.id))
                    }),
                    c.jsx(Da, {
                      ref: ae,
                      children: zt ? c.jsxs(c.Fragment, {
                        children: [
                          Dn > 0 && c.jsx(on, {
                            children: c.jsx(wt, {
                              colSpan: M.length,
                              sx: {
                                height: Dn,
                                p: 0,
                                border: "none"
                              }
                            })
                          }),
                          zt.map((A) => {
                            const D = Gt[A.index], U = A.index;
                            return c.jsx(on, {
                              "data-row-index": U,
                              sx: {
                                height: x,
                                ...Dt(U)
                              },
                              children: D.getVisibleCells().map((ce) => {
                                var _a2;
                                const pe = ce.column.id === "__select__";
                                return c.jsx(wt, {
                                  align: ((_a2 = ce.column.columnDef.meta) == null ? void 0 : _a2.align) || "left",
                                  padding: pe ? "checkbox" : "normal",
                                  sx: {
                                    ...nt
                                  },
                                  children: dn(ce.column.columnDef.cell, ce.getContext())
                                }, ce.id);
                              })
                            }, D.id);
                          }),
                          G > 0 && c.jsx(on, {
                            children: c.jsx(wt, {
                              colSpan: M.length,
                              sx: {
                                height: G,
                                p: 0,
                                border: "none"
                              }
                            })
                          })
                        ]
                      }) : Gt.map((A, D) => c.jsx(on, {
                        "data-row-index": D,
                        sx: {
                          height: x,
                          ...Dt(D)
                        },
                        children: A.getVisibleCells().map((U) => {
                          var _a2;
                          const ce = U.column.id === "__select__";
                          return c.jsx(wt, {
                            align: ((_a2 = U.column.columnDef.meta) == null ? void 0 : _a2.align) || "left",
                            padding: ce ? "checkbox" : "normal",
                            sx: {
                              ...nt
                            },
                            children: dn(U.column.columnDef.cell, U.getContext())
                          }, U.id);
                        })
                      }, A.id))
                    })
                  ]
                })
              })
            }),
            n.data.tablePagination !== false && c.jsx(dc, {
              component: "div",
              count: le.getFilteredRowModel().rows.length,
              page: Y.pageIndex,
              rowsPerPage: Y.pageSize,
              rowsPerPageOptions: ye,
              onPageChange: (A, D) => re((U) => ({
                ...U,
                pageIndex: D
              })),
              onRowsPerPageChange: (A) => re({
                pageIndex: 0,
                pageSize: parseInt(A.target.value, 10)
              }),
              labelRowsPerPage: c.jsx(P, {
                variant: "body2",
                component: "span",
                children: b.t("json_table_rows_per_page")
              }),
              labelDisplayedRows: ({ from: A, to: D, count: U }) => c.jsx(P, {
                variant: "body2",
                component: "span",
                children: `${A}\u2013${D} / ${U}`
              }),
              slots: {
                menuItem: xf
              },
              slotProps: {
                select: {
                  renderValue: (A) => c.jsx(P, {
                    variant: "body2",
                    component: "span",
                    children: String(A)
                  })
                }
              }
            }),
            c.jsx(yf, {
              anchorEl: Le,
              open: !!Le,
              onClose: Mt,
              activeColumn: _e.current,
              isSorted: be !== void 0,
              tableFiltering: j,
              activeColumnFilter: Rt,
              onSetSorting: N,
              onClearSorting: (A) => N((D) => D.filter((U) => U.id !== A)),
              onShowAllColumns: he,
              hasHiddenColumns: Object.keys(W).some((A) => W[A] === false)
            })
          ]
        }) : c.jsx(H, {
          sx: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            p: 2
          },
          children: c.jsx(P, {
            variant: "body2",
            color: "text.secondary",
            children: l === void 0 ? b.t("json_table_no_oid") : a ? m.length > 0 && M.length === 0 ? b.t("json_table_all_columns_hidden") : b.t("json_table_no_data") : b.t("json_table_invalid_type")
          })
        })
      ]
    });
  }, wf = [
    "columnConfig",
    "tableSorting",
    "tableSortingMulti",
    "tableFiltering",
    "tableQuickFilter",
    "tableColumnMenu",
    "tableHiding",
    "tablePagination",
    "tablePageSize",
    "tablePageSizeOptions",
    "tableVirtualizeThreshold",
    "tableRowSelection",
    "tableMaxDepth",
    "tableDensity",
    "tableRowHeight",
    "tableHeaderHeight",
    "tableAutoSize",
    "tableHeaderElevation",
    "jsonTablePadding",
    "borderWidth",
    "borderStyle",
    "borderColor",
    "borderRadius",
    "tableHeaderBgColor",
    "tableHeaderTextColor",
    "tableHeaderFontSize",
    "headerBorderWidth",
    "headerBorderColor",
    "tableShowCellBorders",
    "verticalCellBorderWidth",
    "verticalCellBorderColor",
    "tableShowRowBorders",
    "horizontalCellBorderWidth",
    "horizontalCellBorderColor",
    "evenRowColor",
    "oddRowColor"
  ];
  Vr = class extends b {
    static createObjectFields() {
      const t = gi([
        "string",
        "mixed",
        "json"
      ]), n = t.find((r) => r.name === "oid");
      if (n) {
        const r = n, o = r.onChange;
        r.onChange = async (s, i, l, a) => {
          if (!i.oid) {
            for (const d of wf) delete i[d];
            o || l(i);
          }
          o && await o(s, i, l, a);
        };
      }
      return t;
    }
    static getWidgetInfo() {
      return {
        id: "tplJsonTableCollectionWidget",
        visSet: "vis-2-widgets-collection",
        visSetLabel: "widgets_collection",
        visName: "JsonTableCollectionWidget",
        visWidgetLabel: "json_table_collection_widget",
        visOrder: 11,
        visAttrs: [
          {
            name: "common",
            fields: [
              ...fo()
            ]
          },
          {
            name: "jsonTable",
            label: "group_json_table",
            fields: [
              ...Vr.createObjectFields(),
              ...Ku()
            ]
          },
          {
            name: "values",
            label: "values",
            indexFrom: 1,
            indexTo: "values_count",
            fields: [
              ...fo({
                groupName: "",
                allFields: false
              })
            ]
          }
        ],
        visDefaultStyle: {
          width: "100%",
          height: "400px",
          position: "relative"
        },
        visPrev: "widgets/vis-2-widgets-collection/img/prev-collection-json-table.png"
      };
    }
    getWidgetInfo() {
      return Vr.getWidgetInfo();
    }
    renderWidgetBody(t) {
      super.renderWidgetBody(t), t.widget.data.noCard || t.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true;
      const n = {
        id: t.id,
        refService: t.refService,
        style: t.style,
        widget: {
          data: this.state.rxData,
          style: this.state.rxStyle
        },
        setValue: this.setValue,
        setState: this.setState.bind(this),
        values: this.state.values,
        isSignalVisible: this.isSignalVisible.bind(this),
        getPropertyValue: this.getPropertyValue.bind(this),
        mode: this.props.context.themeType,
        socket: this.props.context.socket,
        theme: this.props.context.theme,
        wrappedContent: this.wrappedCollectionContent
      };
      return hi(this.wrapContent(c.jsx(_f, {})), n);
    }
  };
});
export {
  __tla,
  Vr as default
};
