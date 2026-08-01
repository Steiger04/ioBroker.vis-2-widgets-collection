import { v as A, __tla as __tla_0 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { g as pt, f as lt, V as wt, j as I, aD as or, Q as ot, R as xt, Y as nr, i as ct, k as Bt, u as ft, s as Fe, h as nt, T as ar, ao as ir, r as sr, a8 as Xe, N as pr, m as lr, U as Ot, aB as cr, n as Ye, aC as fr, aE as ur, y as kt, p as ut, a as Lt, K as Pt, d as dr, __tla as __tla_1 } from "./tinycolor-B_2EitDy.js";
let Uo, Io, Ho;
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
  })()
]).then(async () => {
  var k = "top", U = "bottom", V = "right", L = "left", dt = "auto", Ie = [
    k,
    U,
    V,
    L
  ], xe = "start", We = "end", vr = "clippingParents", Wt = "viewport", je = "popper", mr = "reference", Tt = Ie.reduce(function(t, e) {
    return t.concat([
      e + "-" + xe,
      e + "-" + We
    ]);
  }, []), Nt = [].concat(Ie, [
    dt
  ]).reduce(function(t, e) {
    return t.concat([
      e,
      e + "-" + xe,
      e + "-" + We
    ]);
  }, []), hr = "beforeRead", gr = "read", yr = "afterRead", br = "beforeMain", wr = "main", xr = "afterMain", Or = "beforeWrite", Pr = "write", Tr = "afterWrite", Rr = [
    hr,
    gr,
    yr,
    br,
    wr,
    xr,
    Or,
    Pr,
    Tr
  ];
  function _(t) {
    return t ? (t.nodeName || "").toLowerCase() : null;
  }
  function W(t) {
    if (t == null) return window;
    if (t.toString() !== "[object Window]") {
      var e = t.ownerDocument;
      return e && e.defaultView || window;
    }
    return t;
  }
  function ue(t) {
    var e = W(t).Element;
    return t instanceof e || t instanceof Element;
  }
  function H(t) {
    var e = W(t).HTMLElement;
    return t instanceof e || t instanceof HTMLElement;
  }
  function vt(t) {
    if (typeof ShadowRoot > "u") return false;
    var e = W(t).ShadowRoot;
    return t instanceof e || t instanceof ShadowRoot;
  }
  function Er(t) {
    var e = t.state;
    Object.keys(e.elements).forEach(function(r) {
      var o = e.styles[r] || {}, n = e.attributes[r] || {}, a = e.elements[r];
      !H(a) || !_(a) || (Object.assign(a.style, o), Object.keys(n).forEach(function(l) {
        var i = n[l];
        i === false ? a.removeAttribute(l) : a.setAttribute(l, i === true ? "" : i);
      }));
    });
  }
  function Cr(t) {
    var e = t.state, r = {
      popper: {
        position: e.options.strategy,
        left: "0",
        top: "0",
        margin: "0"
      },
      arrow: {
        position: "absolute"
      },
      reference: {}
    };
    return Object.assign(e.elements.popper.style, r.popper), e.styles = r, e.elements.arrow && Object.assign(e.elements.arrow.style, r.arrow), function() {
      Object.keys(e.elements).forEach(function(o) {
        var n = e.elements[o], a = e.attributes[o] || {}, l = Object.keys(e.styles.hasOwnProperty(o) ? e.styles[o] : r[o]), i = l.reduce(function(s, c) {
          return s[c] = "", s;
        }, {});
        !H(n) || !_(n) || (Object.assign(n.style, i), Object.keys(a).forEach(function(s) {
          n.removeAttribute(s);
        }));
      });
    };
  }
  const Ar = {
    name: "applyStyles",
    enabled: true,
    phase: "write",
    fn: Er,
    effect: Cr,
    requires: [
      "computeStyles"
    ]
  };
  function Z(t) {
    return t.split("-")[0];
  }
  var fe = Math.max, Ze = Math.min, Oe = Math.round;
  function at() {
    var t = navigator.userAgentData;
    return t != null && t.brands && Array.isArray(t.brands) ? t.brands.map(function(e) {
      return e.brand + "/" + e.version;
    }).join(" ") : navigator.userAgent;
  }
  function Ft() {
    return !/^((?!chrome|android).)*safari/i.test(at());
  }
  function Pe(t, e, r) {
    e === void 0 && (e = false), r === void 0 && (r = false);
    var o = t.getBoundingClientRect(), n = 1, a = 1;
    e && H(t) && (n = t.offsetWidth > 0 && Oe(o.width) / t.offsetWidth || 1, a = t.offsetHeight > 0 && Oe(o.height) / t.offsetHeight || 1);
    var l = ue(t) ? W(t) : window, i = l.visualViewport, s = !Ft() && r, c = (o.left + (s && i ? i.offsetLeft : 0)) / n, p = (o.top + (s && i ? i.offsetTop : 0)) / a, m = o.width / n, x = o.height / a;
    return {
      width: m,
      height: x,
      top: p,
      right: c + m,
      bottom: p + x,
      left: c,
      x: c,
      y: p
    };
  }
  function mt(t) {
    var e = Pe(t), r = t.offsetWidth, o = t.offsetHeight;
    return Math.abs(e.width - r) <= 1 && (r = e.width), Math.abs(e.height - o) <= 1 && (o = e.height), {
      x: t.offsetLeft,
      y: t.offsetTop,
      width: r,
      height: o
    };
  }
  function It(t, e) {
    var r = e.getRootNode && e.getRootNode();
    if (t.contains(e)) return true;
    if (r && vt(r)) {
      var o = e;
      do {
        if (o && t.isSameNode(o)) return true;
        o = o.parentNode || o.host;
      } while (o);
    }
    return false;
  }
  function re(t) {
    return W(t).getComputedStyle(t);
  }
  function Sr(t) {
    return [
      "table",
      "td",
      "th"
    ].indexOf(_(t)) >= 0;
  }
  function ie(t) {
    return ((ue(t) ? t.ownerDocument : t.document) || window.document).documentElement;
  }
  function _e(t) {
    return _(t) === "html" ? t : t.assignedSlot || t.parentNode || (vt(t) ? t.host : null) || ie(t);
  }
  function Rt(t) {
    return !H(t) || re(t).position === "fixed" ? null : t.offsetParent;
  }
  function $r(t) {
    var e = /firefox/i.test(at()), r = /Trident/i.test(at());
    if (r && H(t)) {
      var o = re(t);
      if (o.position === "fixed") return null;
    }
    var n = _e(t);
    for (vt(n) && (n = n.host); H(n) && [
      "html",
      "body"
    ].indexOf(_(n)) < 0; ) {
      var a = re(n);
      if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || [
        "transform",
        "perspective"
      ].indexOf(a.willChange) !== -1 || e && a.willChange === "filter" || e && a.filter && a.filter !== "none") return n;
      n = n.parentNode;
    }
    return null;
  }
  function He(t) {
    for (var e = W(t), r = Rt(t); r && Sr(r) && re(r).position === "static"; ) r = Rt(r);
    return r && (_(r) === "html" || _(r) === "body" && re(r).position === "static") ? e : r || $r(t) || e;
  }
  function ht(t) {
    return [
      "top",
      "bottom"
    ].indexOf(t) >= 0 ? "x" : "y";
  }
  function ke(t, e, r) {
    return fe(t, Ze(e, r));
  }
  function Mr(t, e, r) {
    var o = ke(t, e, r);
    return o > r ? r : o;
  }
  function Ht() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }
  function Ut(t) {
    return Object.assign({}, Ht(), t);
  }
  function Vt(t, e) {
    return e.reduce(function(r, o) {
      return r[o] = t, r;
    }, {});
  }
  var Dr = function(e, r) {
    return e = typeof e == "function" ? e(Object.assign({}, r.rects, {
      placement: r.placement
    })) : e, Ut(typeof e != "number" ? e : Vt(e, Ie));
  };
  function jr(t) {
    var e, r = t.state, o = t.name, n = t.options, a = r.elements.arrow, l = r.modifiersData.popperOffsets, i = Z(r.placement), s = ht(i), c = [
      L,
      V
    ].indexOf(i) >= 0, p = c ? "height" : "width";
    if (!(!a || !l)) {
      var m = Dr(n.padding, r), x = mt(a), f = s === "y" ? k : L, O = s === "y" ? U : V, d = r.rects.reference[p] + r.rects.reference[s] - l[s] - r.rects.popper[p], v = l[s] - r.rects.reference[s], b = He(a), R = b ? s === "y" ? b.clientHeight || 0 : b.clientWidth || 0 : 0, w = d / 2 - v / 2, u = m[f], h = R - x[p] - m[O], g = R / 2 - x[p] / 2 + w, T = ke(u, g, h), $ = s;
      r.modifiersData[o] = (e = {}, e[$] = T, e.centerOffset = T - g, e);
    }
  }
  function Br(t) {
    var e = t.state, r = t.options, o = r.element, n = o === void 0 ? "[data-popper-arrow]" : o;
    n != null && (typeof n == "string" && (n = e.elements.popper.querySelector(n), !n) || It(e.elements.popper, n) && (e.elements.arrow = n));
  }
  const kr = {
    name: "arrow",
    enabled: true,
    phase: "main",
    fn: jr,
    effect: Br,
    requires: [
      "popperOffsets"
    ],
    requiresIfExists: [
      "preventOverflow"
    ]
  };
  function Te(t) {
    return t.split("-")[1];
  }
  var Lr = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };
  function Wr(t, e) {
    var r = t.x, o = t.y, n = e.devicePixelRatio || 1;
    return {
      x: Oe(r * n) / n || 0,
      y: Oe(o * n) / n || 0
    };
  }
  function Et(t) {
    var e, r = t.popper, o = t.popperRect, n = t.placement, a = t.variation, l = t.offsets, i = t.position, s = t.gpuAcceleration, c = t.adaptive, p = t.roundOffsets, m = t.isFixed, x = l.x, f = x === void 0 ? 0 : x, O = l.y, d = O === void 0 ? 0 : O, v = typeof p == "function" ? p({
      x: f,
      y: d
    }) : {
      x: f,
      y: d
    };
    f = v.x, d = v.y;
    var b = l.hasOwnProperty("x"), R = l.hasOwnProperty("y"), w = L, u = k, h = window;
    if (c) {
      var g = He(r), T = "clientHeight", $ = "clientWidth";
      if (g === W(r) && (g = ie(r), re(g).position !== "static" && i === "absolute" && (T = "scrollHeight", $ = "scrollWidth")), g = g, n === k || (n === L || n === V) && a === We) {
        u = U;
        var C = m && g === h && h.visualViewport ? h.visualViewport.height : g[T];
        d -= C - o.height, d *= s ? 1 : -1;
      }
      if (n === L || (n === k || n === U) && a === We) {
        w = V;
        var P = m && g === h && h.visualViewport ? h.visualViewport.width : g[$];
        f -= P - o.width, f *= s ? 1 : -1;
      }
    }
    var E = Object.assign({
      position: i
    }, c && Lr), B = p === true ? Wr({
      x: f,
      y: d
    }, W(r)) : {
      x: f,
      y: d
    };
    if (f = B.x, d = B.y, s) {
      var S;
      return Object.assign({}, E, (S = {}, S[u] = R ? "0" : "", S[w] = b ? "0" : "", S.transform = (h.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + d + "px)" : "translate3d(" + f + "px, " + d + "px, 0)", S));
    }
    return Object.assign({}, E, (e = {}, e[u] = R ? d + "px" : "", e[w] = b ? f + "px" : "", e.transform = "", e));
  }
  function Nr(t) {
    var e = t.state, r = t.options, o = r.gpuAcceleration, n = o === void 0 ? true : o, a = r.adaptive, l = a === void 0 ? true : a, i = r.roundOffsets, s = i === void 0 ? true : i, c = {
      placement: Z(e.placement),
      variation: Te(e.placement),
      popper: e.elements.popper,
      popperRect: e.rects.popper,
      gpuAcceleration: n,
      isFixed: e.options.strategy === "fixed"
    };
    e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, Et(Object.assign({}, c, {
      offsets: e.modifiersData.popperOffsets,
      position: e.options.strategy,
      adaptive: l,
      roundOffsets: s
    })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, Et(Object.assign({}, c, {
      offsets: e.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets: s
    })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
      "data-popper-placement": e.placement
    });
  }
  const Fr = {
    name: "computeStyles",
    enabled: true,
    phase: "beforeWrite",
    fn: Nr,
    data: {}
  };
  var Ge = {
    passive: true
  };
  function Ir(t) {
    var e = t.state, r = t.instance, o = t.options, n = o.scroll, a = n === void 0 ? true : n, l = o.resize, i = l === void 0 ? true : l, s = W(e.elements.popper), c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
    return a && c.forEach(function(p) {
      p.addEventListener("scroll", r.update, Ge);
    }), i && s.addEventListener("resize", r.update, Ge), function() {
      a && c.forEach(function(p) {
        p.removeEventListener("scroll", r.update, Ge);
      }), i && s.removeEventListener("resize", r.update, Ge);
    };
  }
  const Hr = {
    name: "eventListeners",
    enabled: true,
    phase: "write",
    fn: function() {
    },
    effect: Ir,
    data: {}
  };
  var Ur = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  function Je(t) {
    return t.replace(/left|right|bottom|top/g, function(e) {
      return Ur[e];
    });
  }
  var Vr = {
    start: "end",
    end: "start"
  };
  function Ct(t) {
    return t.replace(/start|end/g, function(e) {
      return Vr[e];
    });
  }
  function gt(t) {
    var e = W(t), r = e.pageXOffset, o = e.pageYOffset;
    return {
      scrollLeft: r,
      scrollTop: o
    };
  }
  function yt(t) {
    return Pe(ie(t)).left + gt(t).scrollLeft;
  }
  function zr(t, e) {
    var r = W(t), o = ie(t), n = r.visualViewport, a = o.clientWidth, l = o.clientHeight, i = 0, s = 0;
    if (n) {
      a = n.width, l = n.height;
      var c = Ft();
      (c || !c && e === "fixed") && (i = n.offsetLeft, s = n.offsetTop);
    }
    return {
      width: a,
      height: l,
      x: i + yt(t),
      y: s
    };
  }
  function qr(t) {
    var e, r = ie(t), o = gt(t), n = (e = t.ownerDocument) == null ? void 0 : e.body, a = fe(r.scrollWidth, r.clientWidth, n ? n.scrollWidth : 0, n ? n.clientWidth : 0), l = fe(r.scrollHeight, r.clientHeight, n ? n.scrollHeight : 0, n ? n.clientHeight : 0), i = -o.scrollLeft + yt(t), s = -o.scrollTop;
    return re(n || r).direction === "rtl" && (i += fe(r.clientWidth, n ? n.clientWidth : 0) - a), {
      width: a,
      height: l,
      x: i,
      y: s
    };
  }
  function bt(t) {
    var e = re(t), r = e.overflow, o = e.overflowX, n = e.overflowY;
    return /auto|scroll|overlay|hidden/.test(r + n + o);
  }
  function zt(t) {
    return [
      "html",
      "body",
      "#document"
    ].indexOf(_(t)) >= 0 ? t.ownerDocument.body : H(t) && bt(t) ? t : zt(_e(t));
  }
  function Le(t, e) {
    var r;
    e === void 0 && (e = []);
    var o = zt(t), n = o === ((r = t.ownerDocument) == null ? void 0 : r.body), a = W(o), l = n ? [
      a
    ].concat(a.visualViewport || [], bt(o) ? o : []) : o, i = e.concat(l);
    return n ? i : i.concat(Le(_e(l)));
  }
  function it(t) {
    return Object.assign({}, t, {
      left: t.x,
      top: t.y,
      right: t.x + t.width,
      bottom: t.y + t.height
    });
  }
  function Xr(t, e) {
    var r = Pe(t, false, e === "fixed");
    return r.top = r.top + t.clientTop, r.left = r.left + t.clientLeft, r.bottom = r.top + t.clientHeight, r.right = r.left + t.clientWidth, r.width = t.clientWidth, r.height = t.clientHeight, r.x = r.left, r.y = r.top, r;
  }
  function At(t, e, r) {
    return e === Wt ? it(zr(t, r)) : ue(e) ? Xr(e, r) : it(qr(ie(t)));
  }
  function Yr(t) {
    var e = Le(_e(t)), r = [
      "absolute",
      "fixed"
    ].indexOf(re(t).position) >= 0, o = r && H(t) ? He(t) : t;
    return ue(o) ? e.filter(function(n) {
      return ue(n) && It(n, o) && _(n) !== "body";
    }) : [];
  }
  function Gr(t, e, r, o) {
    var n = e === "clippingParents" ? Yr(t) : [].concat(e), a = [].concat(n, [
      r
    ]), l = a[0], i = a.reduce(function(s, c) {
      var p = At(t, c, o);
      return s.top = fe(p.top, s.top), s.right = Ze(p.right, s.right), s.bottom = Ze(p.bottom, s.bottom), s.left = fe(p.left, s.left), s;
    }, At(t, l, o));
    return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
  }
  function qt(t) {
    var e = t.reference, r = t.element, o = t.placement, n = o ? Z(o) : null, a = o ? Te(o) : null, l = e.x + e.width / 2 - r.width / 2, i = e.y + e.height / 2 - r.height / 2, s;
    switch (n) {
      case k:
        s = {
          x: l,
          y: e.y - r.height
        };
        break;
      case U:
        s = {
          x: l,
          y: e.y + e.height
        };
        break;
      case V:
        s = {
          x: e.x + e.width,
          y: i
        };
        break;
      case L:
        s = {
          x: e.x - r.width,
          y: i
        };
        break;
      default:
        s = {
          x: e.x,
          y: e.y
        };
    }
    var c = n ? ht(n) : null;
    if (c != null) {
      var p = c === "y" ? "height" : "width";
      switch (a) {
        case xe:
          s[c] = s[c] - (e[p] / 2 - r[p] / 2);
          break;
        case We:
          s[c] = s[c] + (e[p] / 2 - r[p] / 2);
          break;
      }
    }
    return s;
  }
  function Ne(t, e) {
    e === void 0 && (e = {});
    var r = e, o = r.placement, n = o === void 0 ? t.placement : o, a = r.strategy, l = a === void 0 ? t.strategy : a, i = r.boundary, s = i === void 0 ? vr : i, c = r.rootBoundary, p = c === void 0 ? Wt : c, m = r.elementContext, x = m === void 0 ? je : m, f = r.altBoundary, O = f === void 0 ? false : f, d = r.padding, v = d === void 0 ? 0 : d, b = Ut(typeof v != "number" ? v : Vt(v, Ie)), R = x === je ? mr : je, w = t.rects.popper, u = t.elements[O ? R : x], h = Gr(ue(u) ? u : u.contextElement || ie(t.elements.popper), s, p, l), g = Pe(t.elements.reference), T = qt({
      reference: g,
      element: w,
      placement: n
    }), $ = it(Object.assign({}, w, T)), C = x === je ? $ : g, P = {
      top: h.top - C.top + b.top,
      bottom: C.bottom - h.bottom + b.bottom,
      left: h.left - C.left + b.left,
      right: C.right - h.right + b.right
    }, E = t.modifiersData.offset;
    if (x === je && E) {
      var B = E[n];
      Object.keys(P).forEach(function(S) {
        var z = [
          V,
          U
        ].indexOf(S) >= 0 ? 1 : -1, q = [
          k,
          U
        ].indexOf(S) >= 0 ? "y" : "x";
        P[S] += B[q] * z;
      });
    }
    return P;
  }
  function Kr(t, e) {
    e === void 0 && (e = {});
    var r = e, o = r.placement, n = r.boundary, a = r.rootBoundary, l = r.padding, i = r.flipVariations, s = r.allowedAutoPlacements, c = s === void 0 ? Nt : s, p = Te(o), m = p ? i ? Tt : Tt.filter(function(O) {
      return Te(O) === p;
    }) : Ie, x = m.filter(function(O) {
      return c.indexOf(O) >= 0;
    });
    x.length === 0 && (x = m);
    var f = x.reduce(function(O, d) {
      return O[d] = Ne(t, {
        placement: d,
        boundary: n,
        rootBoundary: a,
        padding: l
      })[Z(d)], O;
    }, {});
    return Object.keys(f).sort(function(O, d) {
      return f[O] - f[d];
    });
  }
  function Qr(t) {
    if (Z(t) === dt) return [];
    var e = Je(t);
    return [
      Ct(t),
      e,
      Ct(e)
    ];
  }
  function Jr(t) {
    var e = t.state, r = t.options, o = t.name;
    if (!e.modifiersData[o]._skip) {
      for (var n = r.mainAxis, a = n === void 0 ? true : n, l = r.altAxis, i = l === void 0 ? true : l, s = r.fallbackPlacements, c = r.padding, p = r.boundary, m = r.rootBoundary, x = r.altBoundary, f = r.flipVariations, O = f === void 0 ? true : f, d = r.allowedAutoPlacements, v = e.options.placement, b = Z(v), R = b === v, w = s || (R || !O ? [
        Je(v)
      ] : Qr(v)), u = [
        v
      ].concat(w).reduce(function(Y, N) {
        return Y.concat(Z(N) === dt ? Kr(e, {
          placement: N,
          boundary: p,
          rootBoundary: m,
          padding: c,
          flipVariations: O,
          allowedAutoPlacements: d
        }) : N);
      }, []), h = e.rects.reference, g = e.rects.popper, T = /* @__PURE__ */ new Map(), $ = true, C = u[0], P = 0; P < u.length; P++) {
        var E = u[P], B = Z(E), S = Te(E) === xe, z = [
          k,
          U
        ].indexOf(B) >= 0, q = z ? "width" : "height", D = Ne(e, {
          placement: E,
          boundary: p,
          rootBoundary: m,
          altBoundary: x,
          padding: c
        }), M = z ? S ? V : L : S ? U : k;
        h[q] > g[q] && (M = Je(M));
        var X = Je(M), ee = [];
        if (a && ee.push(D[B] <= 0), i && ee.push(D[M] <= 0, D[X] <= 0), ee.every(function(Y) {
          return Y;
        })) {
          C = E, $ = false;
          break;
        }
        T.set(E, ee);
      }
      if ($) for (var Q = O ? 3 : 1, de = function(N) {
        var oe = u.find(function(ne) {
          var F = T.get(ne);
          if (F) return F.slice(0, N).every(function(me) {
            return me;
          });
        });
        if (oe) return C = oe, "break";
      }, te = Q; te > 0; te--) {
        var ve = de(te);
        if (ve === "break") break;
      }
      e.placement !== C && (e.modifiersData[o]._skip = true, e.placement = C, e.reset = true);
    }
  }
  const Zr = {
    name: "flip",
    enabled: true,
    phase: "main",
    fn: Jr,
    requiresIfExists: [
      "offset"
    ],
    data: {
      _skip: false
    }
  };
  function St(t, e, r) {
    return r === void 0 && (r = {
      x: 0,
      y: 0
    }), {
      top: t.top - e.height - r.y,
      right: t.right - e.width + r.x,
      bottom: t.bottom - e.height + r.y,
      left: t.left - e.width - r.x
    };
  }
  function $t(t) {
    return [
      k,
      V,
      U,
      L
    ].some(function(e) {
      return t[e] >= 0;
    });
  }
  function _r(t) {
    var e = t.state, r = t.name, o = e.rects.reference, n = e.rects.popper, a = e.modifiersData.preventOverflow, l = Ne(e, {
      elementContext: "reference"
    }), i = Ne(e, {
      altBoundary: true
    }), s = St(l, o), c = St(i, n, a), p = $t(s), m = $t(c);
    e.modifiersData[r] = {
      referenceClippingOffsets: s,
      popperEscapeOffsets: c,
      isReferenceHidden: p,
      hasPopperEscaped: m
    }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
      "data-popper-reference-hidden": p,
      "data-popper-escaped": m
    });
  }
  const eo = {
    name: "hide",
    enabled: true,
    phase: "main",
    requiresIfExists: [
      "preventOverflow"
    ],
    fn: _r
  };
  function to(t, e, r) {
    var o = Z(t), n = [
      L,
      k
    ].indexOf(o) >= 0 ? -1 : 1, a = typeof r == "function" ? r(Object.assign({}, e, {
      placement: t
    })) : r, l = a[0], i = a[1];
    return l = l || 0, i = (i || 0) * n, [
      L,
      V
    ].indexOf(o) >= 0 ? {
      x: i,
      y: l
    } : {
      x: l,
      y: i
    };
  }
  function ro(t) {
    var e = t.state, r = t.options, o = t.name, n = r.offset, a = n === void 0 ? [
      0,
      0
    ] : n, l = Nt.reduce(function(p, m) {
      return p[m] = to(m, e.rects, a), p;
    }, {}), i = l[e.placement], s = i.x, c = i.y;
    e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += s, e.modifiersData.popperOffsets.y += c), e.modifiersData[o] = l;
  }
  const oo = {
    name: "offset",
    enabled: true,
    phase: "main",
    requires: [
      "popperOffsets"
    ],
    fn: ro
  };
  function no(t) {
    var e = t.state, r = t.name;
    e.modifiersData[r] = qt({
      reference: e.rects.reference,
      element: e.rects.popper,
      placement: e.placement
    });
  }
  const ao = {
    name: "popperOffsets",
    enabled: true,
    phase: "read",
    fn: no,
    data: {}
  };
  function io(t) {
    return t === "x" ? "y" : "x";
  }
  function so(t) {
    var e = t.state, r = t.options, o = t.name, n = r.mainAxis, a = n === void 0 ? true : n, l = r.altAxis, i = l === void 0 ? false : l, s = r.boundary, c = r.rootBoundary, p = r.altBoundary, m = r.padding, x = r.tether, f = x === void 0 ? true : x, O = r.tetherOffset, d = O === void 0 ? 0 : O, v = Ne(e, {
      boundary: s,
      rootBoundary: c,
      padding: m,
      altBoundary: p
    }), b = Z(e.placement), R = Te(e.placement), w = !R, u = ht(b), h = io(u), g = e.modifiersData.popperOffsets, T = e.rects.reference, $ = e.rects.popper, C = typeof d == "function" ? d(Object.assign({}, e.rects, {
      placement: e.placement
    })) : d, P = typeof C == "number" ? {
      mainAxis: C,
      altAxis: C
    } : Object.assign({
      mainAxis: 0,
      altAxis: 0
    }, C), E = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, B = {
      x: 0,
      y: 0
    };
    if (g) {
      if (a) {
        var S, z = u === "y" ? k : L, q = u === "y" ? U : V, D = u === "y" ? "height" : "width", M = g[u], X = M + v[z], ee = M - v[q], Q = f ? -$[D] / 2 : 0, de = R === xe ? T[D] : $[D], te = R === xe ? -$[D] : -T[D], ve = e.elements.arrow, Y = f && ve ? mt(ve) : {
          width: 0,
          height: 0
        }, N = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : Ht(), oe = N[z], ne = N[q], F = ke(0, T[D], Y[D]), me = w ? T[D] / 2 - Q - F - oe - P.mainAxis : de - F - oe - P.mainAxis, et = w ? -T[D] / 2 + Q + F + ne + P.mainAxis : te + F + ne + P.mainAxis, he = e.elements.arrow && He(e.elements.arrow), G = he ? u === "y" ? he.clientTop || 0 : he.clientLeft || 0 : 0, ge = (S = E == null ? void 0 : E[u]) != null ? S : 0, se = M + me - ge - G, ye = M + et - ge, Re = ke(f ? Ze(X, se) : X, M, f ? fe(ee, ye) : ee);
        g[u] = Re, B[u] = Re - M;
      }
      if (i) {
        var pe, be = u === "x" ? k : L, Ee = u === "x" ? U : V, J = g[h], le = h === "y" ? "height" : "width", Ce = J + v[be], Ae = J - v[Ee], Se = [
          k,
          L
        ].indexOf(b) !== -1, Ue = (pe = E == null ? void 0 : E[h]) != null ? pe : 0, Ve = Se ? Ce : J - T[le] - $[le] - Ue + P.altAxis, we = Se ? J + T[le] + $[le] - Ue - P.altAxis : Ae, ze = f && Se ? Mr(Ve, J, we) : ke(f ? Ve : Ce, J, f ? we : Ae);
        g[h] = ze, B[h] = ze - J;
      }
      e.modifiersData[o] = B;
    }
  }
  const po = {
    name: "preventOverflow",
    enabled: true,
    phase: "main",
    fn: so,
    requiresIfExists: [
      "offset"
    ]
  };
  function lo(t) {
    return {
      scrollLeft: t.scrollLeft,
      scrollTop: t.scrollTop
    };
  }
  function co(t) {
    return t === W(t) || !H(t) ? gt(t) : lo(t);
  }
  function fo(t) {
    var e = t.getBoundingClientRect(), r = Oe(e.width) / t.offsetWidth || 1, o = Oe(e.height) / t.offsetHeight || 1;
    return r !== 1 || o !== 1;
  }
  function uo(t, e, r) {
    r === void 0 && (r = false);
    var o = H(e), n = H(e) && fo(e), a = ie(e), l = Pe(t, n, r), i = {
      scrollLeft: 0,
      scrollTop: 0
    }, s = {
      x: 0,
      y: 0
    };
    return (o || !o && !r) && ((_(e) !== "body" || bt(a)) && (i = co(e)), H(e) ? (s = Pe(e, true), s.x += e.clientLeft, s.y += e.clientTop) : a && (s.x = yt(a))), {
      x: l.left + i.scrollLeft - s.x,
      y: l.top + i.scrollTop - s.y,
      width: l.width,
      height: l.height
    };
  }
  function vo(t) {
    var e = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), o = [];
    t.forEach(function(a) {
      e.set(a.name, a);
    });
    function n(a) {
      r.add(a.name);
      var l = [].concat(a.requires || [], a.requiresIfExists || []);
      l.forEach(function(i) {
        if (!r.has(i)) {
          var s = e.get(i);
          s && n(s);
        }
      }), o.push(a);
    }
    return t.forEach(function(a) {
      r.has(a.name) || n(a);
    }), o;
  }
  function mo(t) {
    var e = vo(t);
    return Rr.reduce(function(r, o) {
      return r.concat(e.filter(function(n) {
        return n.phase === o;
      }));
    }, []);
  }
  function ho(t) {
    var e;
    return function() {
      return e || (e = new Promise(function(r) {
        Promise.resolve().then(function() {
          e = void 0, r(t());
        });
      })), e;
    };
  }
  function go(t) {
    var e = t.reduce(function(r, o) {
      var n = r[o.name];
      return r[o.name] = n ? Object.assign({}, n, o, {
        options: Object.assign({}, n.options, o.options),
        data: Object.assign({}, n.data, o.data)
      }) : o, r;
    }, {});
    return Object.keys(e).map(function(r) {
      return e[r];
    });
  }
  var Mt = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };
  function Dt() {
    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
    return !e.some(function(o) {
      return !(o && typeof o.getBoundingClientRect == "function");
    });
  }
  function yo(t) {
    t === void 0 && (t = {});
    var e = t, r = e.defaultModifiers, o = r === void 0 ? [] : r, n = e.defaultOptions, a = n === void 0 ? Mt : n;
    return function(i, s, c) {
      c === void 0 && (c = a);
      var p = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, Mt, a),
        modifiersData: {},
        elements: {
          reference: i,
          popper: s
        },
        attributes: {},
        styles: {}
      }, m = [], x = false, f = {
        state: p,
        setOptions: function(b) {
          var R = typeof b == "function" ? b(p.options) : b;
          d(), p.options = Object.assign({}, a, p.options, R), p.scrollParents = {
            reference: ue(i) ? Le(i) : i.contextElement ? Le(i.contextElement) : [],
            popper: Le(s)
          };
          var w = mo(go([].concat(o, p.options.modifiers)));
          return p.orderedModifiers = w.filter(function(u) {
            return u.enabled;
          }), O(), f.update();
        },
        forceUpdate: function() {
          if (!x) {
            var b = p.elements, R = b.reference, w = b.popper;
            if (Dt(R, w)) {
              p.rects = {
                reference: uo(R, He(w), p.options.strategy === "fixed"),
                popper: mt(w)
              }, p.reset = false, p.placement = p.options.placement, p.orderedModifiers.forEach(function(P) {
                return p.modifiersData[P.name] = Object.assign({}, P.data);
              });
              for (var u = 0; u < p.orderedModifiers.length; u++) {
                if (p.reset === true) {
                  p.reset = false, u = -1;
                  continue;
                }
                var h = p.orderedModifiers[u], g = h.fn, T = h.options, $ = T === void 0 ? {} : T, C = h.name;
                typeof g == "function" && (p = g({
                  state: p,
                  options: $,
                  name: C,
                  instance: f
                }) || p);
              }
            }
          }
        },
        update: ho(function() {
          return new Promise(function(v) {
            f.forceUpdate(), v(p);
          });
        }),
        destroy: function() {
          d(), x = true;
        }
      };
      if (!Dt(i, s)) return f;
      f.setOptions(c).then(function(v) {
        !x && c.onFirstUpdate && c.onFirstUpdate(v);
      });
      function O() {
        p.orderedModifiers.forEach(function(v) {
          var b = v.name, R = v.options, w = R === void 0 ? {} : R, u = v.effect;
          if (typeof u == "function") {
            var h = u({
              state: p,
              name: b,
              instance: f,
              options: w
            }), g = function() {
            };
            m.push(h || g);
          }
        });
      }
      function d() {
        m.forEach(function(v) {
          return v();
        }), m = [];
      }
      return f;
    };
  }
  var bo = [
    Hr,
    ao,
    Fr,
    Ar,
    oo,
    Zr,
    po,
    kr,
    eo
  ], wo = yo({
    defaultModifiers: bo
  });
  function xo(t) {
    return pt("MuiPopper", t);
  }
  lt("MuiPopper", [
    "root"
  ]);
  function Oo(t, e) {
    if (e === "ltr") return t;
    switch (t) {
      case "bottom-end":
        return "bottom-start";
      case "bottom-start":
        return "bottom-end";
      case "top-end":
        return "top-start";
      case "top-start":
        return "top-end";
      default:
        return t;
    }
  }
  function st(t) {
    return typeof t == "function" ? t() : t;
  }
  function Po(t) {
    return t.nodeType !== void 0;
  }
  const To = (t) => {
    const { classes: e } = t;
    return ct({
      root: [
        "root"
      ]
    }, xo, e);
  }, Ro = {}, Eo = A.forwardRef(function(e, r) {
    const { anchorEl: o, children: n, direction: a, disablePortal: l, modifiers: i, open: s, placement: c, popperOptions: p, popperRef: m, slotProps: x = {}, slots: f = {}, TransitionProps: O, ownerState: d, ...v } = e, b = A.useRef(null), R = ot(b, r), w = A.useRef(null), u = ot(w, m), h = A.useRef(u);
    xt(() => {
      h.current = u;
    }, [
      u
    ]), A.useImperativeHandle(m, () => w.current, []);
    const g = Oo(c, a), [T, $] = A.useState(g), [C, P] = A.useState(st(o));
    A.useEffect(() => {
      w.current && w.current.forceUpdate();
    }), A.useEffect(() => {
      o && P(st(o));
    }, [
      o
    ]), xt(() => {
      if (!C || !s) return;
      const q = (X) => {
        $(X.placement);
      };
      let D = [
        {
          name: "preventOverflow",
          options: {
            altBoundary: l
          }
        },
        {
          name: "flip",
          options: {
            altBoundary: l
          }
        },
        {
          name: "onUpdate",
          enabled: true,
          phase: "afterWrite",
          fn: ({ state: X }) => {
            q(X);
          }
        }
      ];
      i != null && (D = D.concat(i)), p && p.modifiers != null && (D = D.concat(p.modifiers));
      const M = wo(C, b.current, {
        placement: g,
        ...p,
        modifiers: D
      });
      return h.current(M), () => {
        M.destroy(), h.current(null);
      };
    }, [
      C,
      l,
      i,
      s,
      p,
      g
    ]);
    const E = {
      placement: T
    };
    O !== null && (E.TransitionProps = O);
    const B = To(e), S = f.root ?? "div", z = nr({
      elementType: S,
      externalSlotProps: x.root,
      externalForwardedProps: v,
      additionalProps: {
        role: "tooltip",
        ref: R
      },
      ownerState: e,
      className: B.root
    });
    return I.jsx(S, {
      ...z,
      children: typeof n == "function" ? n(E) : n
    });
  }), Co = A.forwardRef(function(e, r) {
    const { anchorEl: o, children: n, container: a, direction: l = "ltr", disablePortal: i = false, keepMounted: s = false, modifiers: c, open: p, placement: m = "bottom", popperOptions: x = Ro, popperRef: f, style: O, transition: d = false, slotProps: v = {}, slots: b = {}, ...R } = e, [w, u] = A.useState(true), h = () => {
      u(false);
    }, g = () => {
      u(true);
    };
    if (!s && !p && (!d || w)) return null;
    let T;
    if (a) T = a;
    else if (o) {
      const P = st(o);
      T = P && Po(P) ? wt(P).body : wt(null).body;
    }
    const $ = !p && s && (!d || w) ? "none" : void 0, C = d ? {
      in: p,
      onEnter: h,
      onExited: g
    } : void 0;
    return I.jsx(or, {
      disablePortal: i,
      container: T,
      children: I.jsx(Eo, {
        anchorEl: o,
        direction: l,
        disablePortal: i,
        modifiers: c,
        ref: r,
        open: d ? !w : p,
        placement: m,
        popperOptions: x,
        popperRef: f,
        slotProps: v,
        slots: b,
        ...R,
        style: {
          position: "fixed",
          top: 0,
          left: 0,
          display: $,
          ...O
        },
        TransitionProps: C,
        children: n
      })
    });
  }), Ao = Fe(Co, {
    name: "MuiPopper",
    slot: "Root",
    overridesResolver: (t, e) => e.root
  })({}), Xt = A.forwardRef(function(e, r) {
    const o = Bt(), n = ft({
      props: e,
      name: "MuiPopper"
    }), { anchorEl: a, component: l, components: i, componentsProps: s, container: c, disablePortal: p, keepMounted: m, modifiers: x, open: f, placement: O, popperOptions: d, popperRef: v, transition: b, slots: R, slotProps: w, ...u } = n, h = (R == null ? void 0 : R.root) ?? (i == null ? void 0 : i.Root), g = {
      anchorEl: a,
      container: c,
      disablePortal: p,
      keepMounted: m,
      modifiers: x,
      open: f,
      placement: O,
      popperOptions: d,
      popperRef: v,
      transition: b,
      ...u
    };
    return I.jsx(Ao, {
      as: l,
      direction: o ? "rtl" : "ltr",
      slots: {
        root: h
      },
      slotProps: w ?? s,
      ...g,
      ref: r
    });
  });
  function So(t) {
    return pt("MuiDialogContentText", t);
  }
  lt("MuiDialogContentText", [
    "root"
  ]);
  let $o, Mo;
  $o = (t) => {
    const { classes: e } = t, o = ct({
      root: [
        "root"
      ]
    }, So, e);
    return {
      ...e,
      ...o
    };
  };
  Mo = Fe(ar, {
    shouldForwardProp: (t) => ir(t) || t === "classes",
    name: "MuiDialogContentText",
    slot: "Root",
    overridesResolver: (t, e) => e.root
  })({});
  Io = A.forwardRef(function(e, r) {
    const o = ft({
      props: e,
      name: "MuiDialogContentText"
    }), { children: n, className: a, ...l } = o, i = $o(l);
    return I.jsx(Mo, {
      component: "p",
      variant: "body1",
      color: "textSecondary",
      ref: r,
      ownerState: l,
      className: nt(i.root, a),
      ...o,
      classes: i
    });
  });
  function Do(t) {
    return pt("MuiTooltip", t);
  }
  const j = lt("MuiTooltip", [
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
  function jo(t) {
    return Math.round(t * 1e5) / 1e5;
  }
  const Bo = (t) => {
    const { classes: e, disableInteractive: r, arrow: o, touch: n, placement: a } = t, l = {
      popper: [
        "popper",
        !r && "popperInteractive",
        o && "popperArrow"
      ],
      tooltip: [
        "tooltip",
        o && "tooltipArrow",
        n && "touch",
        `tooltipPlacement${kt(a.split("-")[0])}`
      ],
      arrow: [
        "arrow"
      ]
    };
    return ct(l, Do, e);
  }, ko = Fe(Xt, {
    name: "MuiTooltip",
    slot: "Popper",
    overridesResolver: (t, e) => {
      const { ownerState: r } = t;
      return [
        e.popper,
        !r.disableInteractive && e.popperInteractive,
        r.arrow && e.popperArrow,
        !r.open && e.popperClose
      ];
    }
  })(ut(({ theme: t }) => ({
    zIndex: (t.vars || t).zIndex.tooltip,
    pointerEvents: "none",
    variants: [
      {
        props: ({ ownerState: e }) => !e.disableInteractive,
        style: {
          pointerEvents: "auto"
        }
      },
      {
        props: ({ open: e }) => !e,
        style: {
          pointerEvents: "none"
        }
      },
      {
        props: ({ ownerState: e }) => e.arrow,
        style: {
          [`&[data-popper-placement*="bottom"] .${j.arrow}`]: {
            top: 0,
            marginTop: "-0.71em",
            "&::before": {
              transformOrigin: "0 100%"
            }
          },
          [`&[data-popper-placement*="top"] .${j.arrow}`]: {
            bottom: 0,
            marginBottom: "-0.71em",
            "&::before": {
              transformOrigin: "100% 0"
            }
          },
          [`&[data-popper-placement*="right"] .${j.arrow}`]: {
            height: "1em",
            width: "0.71em",
            "&::before": {
              transformOrigin: "100% 100%"
            }
          },
          [`&[data-popper-placement*="left"] .${j.arrow}`]: {
            height: "1em",
            width: "0.71em",
            "&::before": {
              transformOrigin: "0 0"
            }
          }
        }
      },
      {
        props: ({ ownerState: e }) => e.arrow && !e.isRtl,
        style: {
          [`&[data-popper-placement*="right"] .${j.arrow}`]: {
            left: 0,
            marginLeft: "-0.71em"
          }
        }
      },
      {
        props: ({ ownerState: e }) => e.arrow && !!e.isRtl,
        style: {
          [`&[data-popper-placement*="right"] .${j.arrow}`]: {
            right: 0,
            marginRight: "-0.71em"
          }
        }
      },
      {
        props: ({ ownerState: e }) => e.arrow && !e.isRtl,
        style: {
          [`&[data-popper-placement*="left"] .${j.arrow}`]: {
            right: 0,
            marginRight: "-0.71em"
          }
        }
      },
      {
        props: ({ ownerState: e }) => e.arrow && !!e.isRtl,
        style: {
          [`&[data-popper-placement*="left"] .${j.arrow}`]: {
            left: 0,
            marginLeft: "-0.71em"
          }
        }
      }
    ]
  }))), Lo = Fe("div", {
    name: "MuiTooltip",
    slot: "Tooltip",
    overridesResolver: (t, e) => {
      const { ownerState: r } = t;
      return [
        e.tooltip,
        r.touch && e.touch,
        r.arrow && e.tooltipArrow,
        e[`tooltipPlacement${kt(r.placement.split("-")[0])}`]
      ];
    }
  })(ut(({ theme: t }) => ({
    backgroundColor: t.vars ? t.vars.palette.Tooltip.bg : Lt(t.palette.grey[700], 0.92),
    borderRadius: (t.vars || t).shape.borderRadius,
    color: (t.vars || t).palette.common.white,
    fontFamily: t.typography.fontFamily,
    padding: "4px 8px",
    fontSize: t.typography.pxToRem(11),
    maxWidth: 300,
    margin: 2,
    wordWrap: "break-word",
    fontWeight: t.typography.fontWeightMedium,
    [`.${j.popper}[data-popper-placement*="left"] &`]: {
      transformOrigin: "right center"
    },
    [`.${j.popper}[data-popper-placement*="right"] &`]: {
      transformOrigin: "left center"
    },
    [`.${j.popper}[data-popper-placement*="top"] &`]: {
      transformOrigin: "center bottom",
      marginBottom: "14px"
    },
    [`.${j.popper}[data-popper-placement*="bottom"] &`]: {
      transformOrigin: "center top",
      marginTop: "14px"
    },
    variants: [
      {
        props: ({ ownerState: e }) => e.arrow,
        style: {
          position: "relative",
          margin: 0
        }
      },
      {
        props: ({ ownerState: e }) => e.touch,
        style: {
          padding: "8px 16px",
          fontSize: t.typography.pxToRem(14),
          lineHeight: `${jo(16 / 14)}em`,
          fontWeight: t.typography.fontWeightRegular
        }
      },
      {
        props: ({ ownerState: e }) => !e.isRtl,
        style: {
          [`.${j.popper}[data-popper-placement*="left"] &`]: {
            marginRight: "14px"
          },
          [`.${j.popper}[data-popper-placement*="right"] &`]: {
            marginLeft: "14px"
          }
        }
      },
      {
        props: ({ ownerState: e }) => !e.isRtl && e.touch,
        style: {
          [`.${j.popper}[data-popper-placement*="left"] &`]: {
            marginRight: "24px"
          },
          [`.${j.popper}[data-popper-placement*="right"] &`]: {
            marginLeft: "24px"
          }
        }
      },
      {
        props: ({ ownerState: e }) => !!e.isRtl,
        style: {
          [`.${j.popper}[data-popper-placement*="left"] &`]: {
            marginLeft: "14px"
          },
          [`.${j.popper}[data-popper-placement*="right"] &`]: {
            marginRight: "14px"
          }
        }
      },
      {
        props: ({ ownerState: e }) => !!e.isRtl && e.touch,
        style: {
          [`.${j.popper}[data-popper-placement*="left"] &`]: {
            marginLeft: "24px"
          },
          [`.${j.popper}[data-popper-placement*="right"] &`]: {
            marginRight: "24px"
          }
        }
      },
      {
        props: ({ ownerState: e }) => e.touch,
        style: {
          [`.${j.popper}[data-popper-placement*="top"] &`]: {
            marginBottom: "24px"
          }
        }
      },
      {
        props: ({ ownerState: e }) => e.touch,
        style: {
          [`.${j.popper}[data-popper-placement*="bottom"] &`]: {
            marginTop: "24px"
          }
        }
      }
    ]
  }))), Wo = Fe("span", {
    name: "MuiTooltip",
    slot: "Arrow",
    overridesResolver: (t, e) => e.arrow
  })(ut(({ theme: t }) => ({
    overflow: "hidden",
    position: "absolute",
    width: "1em",
    height: "0.71em",
    boxSizing: "border-box",
    color: t.vars ? t.vars.palette.Tooltip.bg : Lt(t.palette.grey[700], 0.9),
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
  let Ke = false;
  const jt = new ur();
  let Be = {
    x: 0,
    y: 0
  };
  function Qe(t, e) {
    return (r, ...o) => {
      e && e(r, ...o), t(r, ...o);
    };
  }
  Ho = A.forwardRef(function(e, r) {
    const o = ft({
      props: e,
      name: "MuiTooltip"
    }), { arrow: n = false, children: a, classes: l, components: i = {}, componentsProps: s = {}, describeChild: c = false, disableFocusListener: p = false, disableHoverListener: m = false, disableInteractive: x = false, disableTouchListener: f = false, enterDelay: O = 100, enterNextDelay: d = 0, enterTouchDelay: v = 700, followCursor: b = false, id: R, leaveDelay: w = 0, leaveTouchDelay: u = 1500, onClose: h, onOpen: g, open: T, placement: $ = "bottom", PopperComponent: C, PopperProps: P = {}, slotProps: E = {}, slots: B = {}, title: S, TransitionComponent: z, TransitionProps: q, ...D } = o, M = A.isValidElement(a) ? a : I.jsx("span", {
      children: a
    }), X = sr(), ee = Bt(), [Q, de] = A.useState(), [te, ve] = A.useState(null), Y = A.useRef(false), N = x || b, oe = Xe(), ne = Xe(), F = Xe(), me = Xe(), [et, he] = pr({
      controlled: T,
      default: false,
      name: "Tooltip",
      state: "open"
    });
    let G = et;
    const ge = lr(R), se = A.useRef(), ye = Ot(() => {
      se.current !== void 0 && (document.body.style.WebkitUserSelect = se.current, se.current = void 0), me.clear();
    });
    A.useEffect(() => ye, [
      ye
    ]);
    const Re = (y) => {
      jt.clear(), Ke = true, he(true), g && !G && g(y);
    }, pe = Ot((y) => {
      jt.start(800 + w, () => {
        Ke = false;
      }), he(false), h && G && h(y), oe.start(X.transitions.duration.shortest, () => {
        Y.current = false;
      });
    }), be = (y) => {
      Y.current && y.type !== "touchstart" || (Q && Q.removeAttribute("title"), ne.clear(), F.clear(), O || Ke && d ? ne.start(Ke ? d : O, () => {
        Re(y);
      }) : Re(y));
    }, Ee = (y) => {
      ne.clear(), F.start(w, () => {
        pe(y);
      });
    }, [, J] = A.useState(false), le = (y) => {
      Pt(y.target) || (J(false), Ee(y));
    }, Ce = (y) => {
      Q || de(y.currentTarget), Pt(y.target) && (J(true), be(y));
    }, Ae = (y) => {
      Y.current = true;
      const ae = M.props;
      ae.onTouchStart && ae.onTouchStart(y);
    }, Se = (y) => {
      Ae(y), F.clear(), oe.clear(), ye(), se.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", me.start(v, () => {
        document.body.style.WebkitUserSelect = se.current, be(y);
      });
    }, Ue = (y) => {
      M.props.onTouchEnd && M.props.onTouchEnd(y), ye(), F.start(u, () => {
        pe(y);
      });
    };
    A.useEffect(() => {
      if (!G) return;
      function y(ae) {
        ae.key === "Escape" && pe(ae);
      }
      return document.addEventListener("keydown", y), () => {
        document.removeEventListener("keydown", y);
      };
    }, [
      pe,
      G
    ]);
    const Ve = ot(cr(M), de, r);
    !S && S !== 0 && (G = false);
    const we = A.useRef(), ze = (y) => {
      const ae = M.props;
      ae.onMouseMove && ae.onMouseMove(y), Be = {
        x: y.clientX,
        y: y.clientY
      }, we.current && we.current.update();
    }, $e = {}, tt = typeof S == "string";
    c ? ($e.title = !G && tt && !m ? S : null, $e["aria-describedby"] = G ? ge : null) : ($e["aria-label"] = tt ? S : null, $e["aria-labelledby"] = G && !tt ? ge : null);
    const K = {
      ...$e,
      ...D,
      ...M.props,
      className: nt(D.className, M.props.className),
      onTouchStart: Ae,
      ref: Ve,
      ...b ? {
        onMouseMove: ze
      } : {}
    }, Me = {};
    f || (K.onTouchStart = Se, K.onTouchEnd = Ue), m || (K.onMouseOver = Qe(be, K.onMouseOver), K.onMouseLeave = Qe(Ee, K.onMouseLeave), N || (Me.onMouseOver = be, Me.onMouseLeave = Ee)), p || (K.onFocus = Qe(Ce, K.onFocus), K.onBlur = Qe(le, K.onBlur), N || (Me.onFocus = Ce, Me.onBlur = le));
    const ce = {
      ...o,
      isRtl: ee,
      arrow: n,
      disableInteractive: N,
      placement: $,
      PopperComponentProp: C,
      touch: Y.current
    }, De = typeof E.popper == "function" ? E.popper(ce) : E.popper, Yt = A.useMemo(() => {
      var _a, _b;
      let y = [
        {
          name: "arrow",
          enabled: !!te,
          options: {
            element: te,
            padding: 4
          }
        }
      ];
      return ((_a = P.popperOptions) == null ? void 0 : _a.modifiers) && (y = y.concat(P.popperOptions.modifiers)), ((_b = De == null ? void 0 : De.popperOptions) == null ? void 0 : _b.modifiers) && (y = y.concat(De.popperOptions.modifiers)), {
        ...P.popperOptions,
        ...De == null ? void 0 : De.popperOptions,
        modifiers: y
      };
    }, [
      te,
      P.popperOptions,
      De == null ? void 0 : De.popperOptions
    ]), rt = Bo(ce), Gt = typeof E.transition == "function" ? E.transition(ce) : E.transition, qe = {
      slots: {
        popper: i.Popper,
        transition: i.Transition ?? z,
        tooltip: i.Tooltip,
        arrow: i.Arrow,
        ...B
      },
      slotProps: {
        arrow: E.arrow ?? s.arrow,
        popper: {
          ...P,
          ...De ?? s.popper
        },
        tooltip: E.tooltip ?? s.tooltip,
        transition: {
          ...q,
          ...Gt ?? s.transition
        }
      }
    }, [Kt, Qt] = Ye("popper", {
      elementType: ko,
      externalForwardedProps: qe,
      ownerState: ce,
      className: nt(rt.popper, P == null ? void 0 : P.className)
    }), [Jt, Zt] = Ye("transition", {
      elementType: fr,
      externalForwardedProps: qe,
      ownerState: ce
    }), [_t, er] = Ye("tooltip", {
      elementType: Lo,
      className: rt.tooltip,
      externalForwardedProps: qe,
      ownerState: ce
    }), [tr, rr] = Ye("arrow", {
      elementType: Wo,
      className: rt.arrow,
      externalForwardedProps: qe,
      ownerState: ce,
      ref: ve
    });
    return I.jsxs(A.Fragment, {
      children: [
        A.cloneElement(M, K),
        I.jsx(Kt, {
          as: C ?? Xt,
          placement: $,
          anchorEl: b ? {
            getBoundingClientRect: () => ({
              top: Be.y,
              left: Be.x,
              right: Be.x,
              bottom: Be.y,
              width: 0,
              height: 0
            })
          } : Q,
          popperRef: we,
          open: Q ? G : false,
          id: ge,
          transition: true,
          ...Me,
          ...Qt,
          popperOptions: Yt,
          children: ({ TransitionProps: y }) => I.jsx(Jt, {
            timeout: X.transitions.duration.shorter,
            ...y,
            ...Zt,
            children: I.jsxs(_t, {
              ...er,
              children: [
                S,
                n ? I.jsx(tr, {
                  ...rr
                }) : null
              ]
            })
          })
        })
      ]
    });
  });
  Uo = dr(I.jsx("path", {
    d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  }), "Clear");
});
export {
  Uo as C,
  Io as D,
  Ho as T,
  __tla
};
