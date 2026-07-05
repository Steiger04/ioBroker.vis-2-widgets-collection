import { v as h, a as ia, R as H, __tla as __tla_0 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { g as qa, c as pn } from "./_commonjsHelpers-Cpj98o6Y.js";
import { v as Ef } from "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
let Ba, JU, _h, ve, go, zU, Dr, Ea, XU, t0, HU, RU, Em, qc, ys, UU, Ca, Z0, SU, LU, qn, _s, Bd, po, Br, ul, mA, wt, HA, ms, $B, ze, xs, Pu, co, pl, vs, Le, l0, rd, da, fh, WU, pr, Vp, Cs, Tu, tt, VU, ps, ZA, GU, hs, ln, Yh, oB, uB, un, kt, Ve, ks, Gu, qp, Ua, si, Qs, hl, Rs, BC, lm, Um, vU, dd, pU, CC, nd, Hs, Gm, v0, F0, jp, ce, od, pA, OA, rt, RA, Be, lr, L, Si, Qa, MA, hr, Te, Hm, ZU, We, lA, $U, KA, TU, Zt, IU, YU, jU;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  var nu = {
    exports: {}
  }, Io = {};
  var Sf = h, xf = /* @__PURE__ */ Symbol.for("react.element"), If = /* @__PURE__ */ Symbol.for("react.fragment"), Hf = Object.prototype.hasOwnProperty, Tf = Sf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Lf = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };
  function ou(A, e, t) {
    var r, n = {}, o = null, i = null;
    t !== void 0 && (o = "" + t), e.key !== void 0 && (o = "" + e.key), e.ref !== void 0 && (i = e.ref);
    for (r in e) Hf.call(e, r) && !Lf.hasOwnProperty(r) && (n[r] = e[r]);
    if (A && A.defaultProps) for (r in e = A.defaultProps, e) n[r] === void 0 && (n[r] = e[r]);
    return {
      $$typeof: xf,
      type: A,
      key: o,
      ref: i,
      props: n,
      _owner: Tf.current
    };
  }
  Io.Fragment = If;
  Io.jsx = ou;
  Io.jsxs = ou;
  nu.exports = Io;
  L = nu.exports;
  const jr = {
    black: "#000",
    white: "#fff"
  }, Pt = {
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    700: "#d32f2f",
    800: "#c62828"
  }, _t = {
    50: "#f3e5f5",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    700: "#7b1fa2"
  }, Nt = {
    50: "#e3f2fd",
    200: "#90caf9",
    400: "#42a5f5",
    700: "#1976d2",
    800: "#1565c0"
  }, Gt = {
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    700: "#0288d1",
    900: "#01579b"
  }, Vt = {
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20"
  }, wr = {
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    700: "#f57c00",
    900: "#e65100"
  }, kf = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161"
  };
  function et(A, ...e) {
    const t = new URL(`https://mui.com/production-error/?code=${A}`);
    return e.forEach((r) => t.searchParams.append("args[]", r)), `Minified MUI error #${A}; visit ${t} for the full message.`;
  }
  Ve = "$$material";
  function io() {
    return io = Object.assign ? Object.assign.bind() : function(A) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r in t) ({}).hasOwnProperty.call(t, r) && (A[r] = t[r]);
      }
      return A;
    }, io.apply(null, arguments);
  }
  function Rf(A) {
    if (A.sheet) return A.sheet;
    for (var e = 0; e < document.styleSheets.length; e++) if (document.styleSheets[e].ownerNode === A) return document.styleSheets[e];
  }
  function Of(A) {
    var e = document.createElement("style");
    return e.setAttribute("data-emotion", A.key), A.nonce !== void 0 && e.setAttribute("nonce", A.nonce), e.appendChild(document.createTextNode("")), e.setAttribute("data-s", ""), e;
  }
  var Kf = (function() {
    function A(t) {
      var r = this;
      this._insertTag = function(n) {
        var o;
        r.tags.length === 0 ? r.insertionPoint ? o = r.insertionPoint.nextSibling : r.prepend ? o = r.container.firstChild : o = r.before : o = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(n, o), r.tags.push(n);
      }, this.isSpeedy = t.speedy === void 0 ? true : t.speedy, this.tags = [], this.ctr = 0, this.nonce = t.nonce, this.key = t.key, this.container = t.container, this.prepend = t.prepend, this.insertionPoint = t.insertionPoint, this.before = null;
    }
    var e = A.prototype;
    return e.hydrate = function(r) {
      r.forEach(this._insertTag);
    }, e.insert = function(r) {
      this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Of(this));
      var n = this.tags[this.tags.length - 1];
      if (this.isSpeedy) {
        var o = Rf(n);
        try {
          o.insertRule(r, o.cssRules.length);
        } catch {
        }
      } else n.appendChild(document.createTextNode(r));
      this.ctr++;
    }, e.flush = function() {
      this.tags.forEach(function(r) {
        var n;
        return (n = r.parentNode) == null ? void 0 : n.removeChild(r);
      }), this.tags = [], this.ctr = 0;
    }, A;
  })(), ae = "-ms-", ao = "-moz-", CA = "-webkit-", iu = "comm", As = "rule", es = "decl", Mf = "@import", au = "@keyframes", Df = "@layer", Pf = Math.abs, Ho = String.fromCharCode, _f = Object.assign;
  function Nf(A, e) {
    return re(A, 0) ^ 45 ? (((e << 2 ^ re(A, 0)) << 2 ^ re(A, 1)) << 2 ^ re(A, 2)) << 2 ^ re(A, 3) : 0;
  }
  function su(A) {
    return A.trim();
  }
  function Gf(A, e) {
    return (A = e.exec(A)) ? A[0] : A;
  }
  function wA(A, e, t) {
    return A.replace(e, t);
  }
  function aa(A, e) {
    return A.indexOf(e);
  }
  function re(A, e) {
    return A.charCodeAt(e) | 0;
  }
  function Jr(A, e, t) {
    return A.slice(e, t);
  }
  function Me(A) {
    return A.length;
  }
  function ts(A) {
    return A.length;
  }
  function Bn(A, e) {
    return e.push(A), A;
  }
  function Vf(A, e) {
    return A.map(e).join("");
  }
  var To = 1, sr = 1, lu = 0, pe = 0, $A = 0, gr = "";
  function Lo(A, e, t, r, n, o, i) {
    return {
      value: A,
      root: e,
      parent: t,
      type: r,
      props: n,
      children: o,
      line: To,
      column: sr,
      length: i,
      return: ""
    };
  }
  function vr(A, e) {
    return _f(Lo("", null, null, "", null, null, 0), A, {
      length: -A.length
    }, e);
  }
  function $f() {
    return $A;
  }
  function Wf() {
    return $A = pe > 0 ? re(gr, --pe) : 0, sr--, $A === 10 && (sr = 1, To--), $A;
  }
  function Ce() {
    return $A = pe < lu ? re(gr, pe++) : 0, sr++, $A === 10 && (sr = 1, To++), $A;
  }
  function $e() {
    return re(gr, pe);
  }
  function jn() {
    return pe;
  }
  function rn(A, e) {
    return Jr(gr, A, e);
  }
  function Yr(A) {
    switch (A) {
      case 0:
      case 9:
      case 10:
      case 13:
      case 32:
        return 5;
      case 33:
      case 43:
      case 44:
      case 47:
      case 62:
      case 64:
      case 126:
      case 59:
      case 123:
      case 125:
        return 4;
      case 58:
        return 3;
      case 34:
      case 39:
      case 40:
      case 91:
        return 2;
      case 41:
      case 93:
        return 1;
    }
    return 0;
  }
  function cu(A) {
    return To = sr = 1, lu = Me(gr = A), pe = 0, [];
  }
  function uu(A) {
    return gr = "", A;
  }
  function Jn(A) {
    return su(rn(pe - 1, sa(A === 91 ? A + 2 : A === 40 ? A + 1 : A)));
  }
  function zf(A) {
    for (; ($A = $e()) && $A < 33; ) Ce();
    return Yr(A) > 2 || Yr($A) > 3 ? "" : " ";
  }
  function Xf(A, e) {
    for (; --e && Ce() && !($A < 48 || $A > 102 || $A > 57 && $A < 65 || $A > 70 && $A < 97); ) ;
    return rn(A, jn() + (e < 6 && $e() == 32 && Ce() == 32));
  }
  function sa(A) {
    for (; Ce(); ) switch ($A) {
      case A:
        return pe;
      case 34:
      case 39:
        A !== 34 && A !== 39 && sa($A);
        break;
      case 40:
        A === 41 && sa(A);
        break;
      case 92:
        Ce();
        break;
    }
    return pe;
  }
  function jf(A, e) {
    for (; Ce() && A + $A !== 57; ) if (A + $A === 84 && $e() === 47) break;
    return "/*" + rn(e, pe - 1) + "*" + Ho(A === 47 ? A : Ce());
  }
  function Jf(A) {
    for (; !Yr($e()); ) Ce();
    return rn(A, pe);
  }
  function Yf(A) {
    return uu(Yn("", null, null, null, [
      ""
    ], A = cu(A), 0, [
      0
    ], A));
  }
  function Yn(A, e, t, r, n, o, i, a, l) {
    for (var s = 0, c = 0, d = i, u = 0, f = 0, g = 0, p = 1, Q = 1, m = 1, F = 0, w = "", v = n, E = o, C = r, x = w; Q; ) switch (g = F, F = Ce()) {
      case 40:
        if (g != 108 && re(x, d - 1) == 58) {
          aa(x += wA(Jn(F), "&", "&\f"), "&\f") != -1 && (m = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        x += Jn(F);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        x += zf(g);
        break;
      case 92:
        x += Xf(jn() - 1, 7);
        continue;
      case 47:
        switch ($e()) {
          case 42:
          case 47:
            Bn(Zf(jf(Ce(), jn()), e, t), l);
            break;
          default:
            x += "/";
        }
        break;
      case 123 * p:
        a[s++] = Me(x) * m;
      case 125 * p:
      case 59:
      case 0:
        switch (F) {
          case 0:
          case 125:
            Q = 0;
          case 59 + c:
            m == -1 && (x = wA(x, /\f/g, "")), f > 0 && Me(x) - d && Bn(f > 32 ? Ys(x + ";", r, t, d - 1) : Ys(wA(x, " ", "") + ";", r, t, d - 2), l);
            break;
          case 59:
            x += ";";
          default:
            if (Bn(C = Js(x, e, t, s, c, n, a, w, v = [], E = [], d), o), F === 123) if (c === 0) Yn(x, e, C, C, v, o, d, a, E);
            else switch (u === 99 && re(x, 3) === 110 ? 100 : u) {
              case 100:
              case 108:
              case 109:
              case 115:
                Yn(A, C, C, r && Bn(Js(A, C, C, 0, 0, n, a, w, n, v = [], d), E), n, E, d, a, r ? v : E);
                break;
              default:
                Yn(x, C, C, C, [
                  ""
                ], E, 0, a, E);
            }
        }
        s = c = f = 0, p = m = 1, w = x = "", d = i;
        break;
      case 58:
        d = 1 + Me(x), f = g;
      default:
        if (p < 1) {
          if (F == 123) --p;
          else if (F == 125 && p++ == 0 && Wf() == 125) continue;
        }
        switch (x += Ho(F), F * p) {
          case 38:
            m = c > 0 ? 1 : (x += "\f", -1);
            break;
          case 44:
            a[s++] = (Me(x) - 1) * m, m = 1;
            break;
          case 64:
            $e() === 45 && (x += Jn(Ce())), u = $e(), c = d = Me(w = x += Jf(jn())), F++;
            break;
          case 45:
            g === 45 && Me(x) == 2 && (p = 0);
        }
    }
    return o;
  }
  function Js(A, e, t, r, n, o, i, a, l, s, c) {
    for (var d = n - 1, u = n === 0 ? o : [
      ""
    ], f = ts(u), g = 0, p = 0, Q = 0; g < r; ++g) for (var m = 0, F = Jr(A, d + 1, d = Pf(p = i[g])), w = A; m < f; ++m) (w = su(p > 0 ? u[m] + " " + F : wA(F, /&\f/g, u[m]))) && (l[Q++] = w);
    return Lo(A, e, t, n === 0 ? As : a, l, s, c);
  }
  function Zf(A, e, t) {
    return Lo(A, e, t, iu, Ho($f()), Jr(A, 2, -2), 0);
  }
  function Ys(A, e, t, r) {
    return Lo(A, e, t, es, Jr(A, 0, r), Jr(A, r + 1, -1), r);
  }
  function or(A, e) {
    for (var t = "", r = ts(A), n = 0; n < r; n++) t += e(A[n], n, A, e) || "";
    return t;
  }
  function qf(A, e, t, r) {
    switch (A.type) {
      case Df:
        if (A.children.length) break;
      case Mf:
      case es:
        return A.return = A.return || A.value;
      case iu:
        return "";
      case au:
        return A.return = A.value + "{" + or(A.children, r) + "}";
      case As:
        A.value = A.props.join(",");
    }
    return Me(t = or(A.children, r)) ? A.return = A.value + "{" + t + "}" : "";
  }
  function Ag(A) {
    var e = ts(A);
    return function(t, r, n, o) {
      for (var i = "", a = 0; a < e; a++) i += A[a](t, r, n, o) || "";
      return i;
    };
  }
  function eg(A) {
    return function(e) {
      e.root || (e = e.return) && A(e);
    };
  }
  function du(A) {
    var e = /* @__PURE__ */ Object.create(null);
    return function(t) {
      return e[t] === void 0 && (e[t] = A(t)), e[t];
    };
  }
  var tg = function(e, t, r) {
    for (var n = 0, o = 0; n = o, o = $e(), n === 38 && o === 12 && (t[r] = 1), !Yr(o); ) Ce();
    return rn(e, pe);
  }, rg = function(e, t) {
    var r = -1, n = 44;
    do
      switch (Yr(n)) {
        case 0:
          n === 38 && $e() === 12 && (t[r] = 1), e[r] += tg(pe - 1, t, r);
          break;
        case 2:
          e[r] += Jn(n);
          break;
        case 4:
          if (n === 44) {
            e[++r] = $e() === 58 ? "&\f" : "", t[r] = e[r].length;
            break;
          }
        default:
          e[r] += Ho(n);
      }
    while (n = Ce());
    return e;
  }, ng = function(e, t) {
    return uu(rg(cu(e), t));
  }, Zs = /* @__PURE__ */ new WeakMap(), og = function(e) {
    if (!(e.type !== "rule" || !e.parent || e.length < 1)) {
      for (var t = e.value, r = e.parent, n = e.column === r.column && e.line === r.line; r.type !== "rule"; ) if (r = r.parent, !r) return;
      if (!(e.props.length === 1 && t.charCodeAt(0) !== 58 && !Zs.get(r)) && !n) {
        Zs.set(e, true);
        for (var o = [], i = ng(t, o), a = r.props, l = 0, s = 0; l < i.length; l++) for (var c = 0; c < a.length; c++, s++) e.props[s] = o[l] ? i[l].replace(/&\f/g, a[c]) : a[c] + " " + i[l];
      }
    }
  }, ig = function(e) {
    if (e.type === "decl") {
      var t = e.value;
      t.charCodeAt(0) === 108 && t.charCodeAt(2) === 98 && (e.return = "", e.value = "");
    }
  };
  function fu(A, e) {
    switch (Nf(A, e)) {
      case 5103:
        return CA + "print-" + A + A;
      case 5737:
      case 4201:
      case 3177:
      case 3433:
      case 1641:
      case 4457:
      case 2921:
      case 5572:
      case 6356:
      case 5844:
      case 3191:
      case 6645:
      case 3005:
      case 6391:
      case 5879:
      case 5623:
      case 6135:
      case 4599:
      case 4855:
      case 4215:
      case 6389:
      case 5109:
      case 5365:
      case 5621:
      case 3829:
        return CA + A + A;
      case 5349:
      case 4246:
      case 4810:
      case 6968:
      case 2756:
        return CA + A + ao + A + ae + A + A;
      case 6828:
      case 4268:
        return CA + A + ae + A + A;
      case 6165:
        return CA + A + ae + "flex-" + A + A;
      case 5187:
        return CA + A + wA(A, /(\w+).+(:[^]+)/, CA + "box-$1$2" + ae + "flex-$1$2") + A;
      case 5443:
        return CA + A + ae + "flex-item-" + wA(A, /flex-|-self/, "") + A;
      case 4675:
        return CA + A + ae + "flex-line-pack" + wA(A, /align-content|flex-|-self/, "") + A;
      case 5548:
        return CA + A + ae + wA(A, "shrink", "negative") + A;
      case 5292:
        return CA + A + ae + wA(A, "basis", "preferred-size") + A;
      case 6060:
        return CA + "box-" + wA(A, "-grow", "") + CA + A + ae + wA(A, "grow", "positive") + A;
      case 4554:
        return CA + wA(A, /([^-])(transform)/g, "$1" + CA + "$2") + A;
      case 6187:
        return wA(wA(wA(A, /(zoom-|grab)/, CA + "$1"), /(image-set)/, CA + "$1"), A, "") + A;
      case 5495:
      case 3959:
        return wA(A, /(image-set\([^]*)/, CA + "$1$`$1");
      case 4968:
        return wA(wA(A, /(.+:)(flex-)?(.*)/, CA + "box-pack:$3" + ae + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + CA + A + A;
      case 4095:
      case 3583:
      case 4068:
      case 2532:
        return wA(A, /(.+)-inline(.+)/, CA + "$1$2") + A;
      case 8116:
      case 7059:
      case 5753:
      case 5535:
      case 5445:
      case 5701:
      case 4933:
      case 4677:
      case 5533:
      case 5789:
      case 5021:
      case 4765:
        if (Me(A) - 1 - e > 6) switch (re(A, e + 1)) {
          case 109:
            if (re(A, e + 4) !== 45) break;
          case 102:
            return wA(A, /(.+:)(.+)-([^]+)/, "$1" + CA + "$2-$3$1" + ao + (re(A, e + 3) == 108 ? "$3" : "$2-$3")) + A;
          case 115:
            return ~aa(A, "stretch") ? fu(wA(A, "stretch", "fill-available"), e) + A : A;
        }
        break;
      case 4949:
        if (re(A, e + 1) !== 115) break;
      case 6444:
        switch (re(A, Me(A) - 3 - (~aa(A, "!important") && 10))) {
          case 107:
            return wA(A, ":", ":" + CA) + A;
          case 101:
            return wA(A, /(.+:)([^;!]+)(;|!.+)?/, "$1" + CA + (re(A, 14) === 45 ? "inline-" : "") + "box$3$1" + CA + "$2$3$1" + ae + "$2box$3") + A;
        }
        break;
      case 5936:
        switch (re(A, e + 11)) {
          case 114:
            return CA + A + ae + wA(A, /[svh]\w+-[tblr]{2}/, "tb") + A;
          case 108:
            return CA + A + ae + wA(A, /[svh]\w+-[tblr]{2}/, "tb-rl") + A;
          case 45:
            return CA + A + ae + wA(A, /[svh]\w+-[tblr]{2}/, "lr") + A;
        }
        return CA + A + ae + A + A;
    }
    return A;
  }
  var ag = function(e, t, r, n) {
    if (e.length > -1 && !e.return) switch (e.type) {
      case es:
        e.return = fu(e.value, e.length);
        break;
      case au:
        return or([
          vr(e, {
            value: wA(e.value, "@", "@" + CA)
          })
        ], n);
      case As:
        if (e.length) return Vf(e.props, function(o) {
          switch (Gf(o, /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              return or([
                vr(e, {
                  props: [
                    wA(o, /:(read-\w+)/, ":" + ao + "$1")
                  ]
                })
              ], n);
            case "::placeholder":
              return or([
                vr(e, {
                  props: [
                    wA(o, /:(plac\w+)/, ":" + CA + "input-$1")
                  ]
                }),
                vr(e, {
                  props: [
                    wA(o, /:(plac\w+)/, ":" + ao + "$1")
                  ]
                }),
                vr(e, {
                  props: [
                    wA(o, /:(plac\w+)/, ae + "input-$1")
                  ]
                })
              ], n);
          }
          return "";
        });
    }
  }, sg = [
    ag
  ], lg = function(e) {
    var t = e.key;
    if (t === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function(p) {
        var Q = p.getAttribute("data-emotion");
        Q.indexOf(" ") !== -1 && (document.head.appendChild(p), p.setAttribute("data-s", ""));
      });
    }
    var n = e.stylisPlugins || sg, o = {}, i, a = [];
    i = e.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + t + ' "]'), function(p) {
      for (var Q = p.getAttribute("data-emotion").split(" "), m = 1; m < Q.length; m++) o[Q[m]] = true;
      a.push(p);
    });
    var l, s = [
      og,
      ig
    ];
    {
      var c, d = [
        qf,
        eg(function(p) {
          c.insert(p);
        })
      ], u = Ag(s.concat(n, d)), f = function(Q) {
        return or(Yf(Q), u);
      };
      l = function(Q, m, F, w) {
        c = F, f(Q ? Q + "{" + m.styles + "}" : m.styles), w && (g.inserted[m.name] = true);
      };
    }
    var g = {
      key: t,
      sheet: new Kf({
        key: t,
        container: i,
        nonce: e.nonce,
        speedy: e.speedy,
        prepend: e.prepend,
        insertionPoint: e.insertionPoint
      }),
      nonce: e.nonce,
      inserted: o,
      registered: {},
      insert: l
    };
    return g.sheet.hydrate(a), g;
  }, gu = {
    exports: {}
  }, yA = {};
  var qA = typeof Symbol == "function" && Symbol.for, rs = qA ? /* @__PURE__ */ Symbol.for("react.element") : 60103, ns = qA ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, ko = qA ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, Ro = qA ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, Oo = qA ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, Ko = qA ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, Mo = qA ? /* @__PURE__ */ Symbol.for("react.context") : 60110, os = qA ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, Do = qA ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, Po = qA ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, _o = qA ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, cg = qA ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, No = qA ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, Go = qA ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, ug = qA ? /* @__PURE__ */ Symbol.for("react.block") : 60121, dg = qA ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, fg = qA ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, gg = qA ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
  function we(A) {
    if (typeof A == "object" && A !== null) {
      var e = A.$$typeof;
      switch (e) {
        case rs:
          switch (A = A.type, A) {
            case os:
            case Do:
            case ko:
            case Oo:
            case Ro:
            case _o:
              return A;
            default:
              switch (A = A && A.$$typeof, A) {
                case Mo:
                case Po:
                case Go:
                case No:
                case Ko:
                  return A;
                default:
                  return e;
              }
          }
        case ns:
          return e;
      }
    }
  }
  function pu(A) {
    return we(A) === Do;
  }
  yA.AsyncMode = os;
  yA.ConcurrentMode = Do;
  yA.ContextConsumer = Mo;
  yA.ContextProvider = Ko;
  yA.Element = rs;
  yA.ForwardRef = Po;
  yA.Fragment = ko;
  yA.Lazy = Go;
  yA.Memo = No;
  yA.Portal = ns;
  yA.Profiler = Oo;
  yA.StrictMode = Ro;
  yA.Suspense = _o;
  yA.isAsyncMode = function(A) {
    return pu(A) || we(A) === os;
  };
  yA.isConcurrentMode = pu;
  yA.isContextConsumer = function(A) {
    return we(A) === Mo;
  };
  yA.isContextProvider = function(A) {
    return we(A) === Ko;
  };
  yA.isElement = function(A) {
    return typeof A == "object" && A !== null && A.$$typeof === rs;
  };
  yA.isForwardRef = function(A) {
    return we(A) === Po;
  };
  yA.isFragment = function(A) {
    return we(A) === ko;
  };
  yA.isLazy = function(A) {
    return we(A) === Go;
  };
  yA.isMemo = function(A) {
    return we(A) === No;
  };
  yA.isPortal = function(A) {
    return we(A) === ns;
  };
  yA.isProfiler = function(A) {
    return we(A) === Oo;
  };
  yA.isStrictMode = function(A) {
    return we(A) === Ro;
  };
  yA.isSuspense = function(A) {
    return we(A) === _o;
  };
  yA.isValidElementType = function(A) {
    return typeof A == "string" || typeof A == "function" || A === ko || A === Do || A === Oo || A === Ro || A === _o || A === cg || typeof A == "object" && A !== null && (A.$$typeof === Go || A.$$typeof === No || A.$$typeof === Ko || A.$$typeof === Mo || A.$$typeof === Po || A.$$typeof === dg || A.$$typeof === fg || A.$$typeof === gg || A.$$typeof === ug);
  };
  yA.typeOf = we;
  gu.exports = yA;
  var pg = gu.exports, Bu = pg, Bg = {
    $$typeof: true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
  }, hg = {
    $$typeof: true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
  }, hu = {};
  hu[Bu.ForwardRef] = Bg;
  hu[Bu.Memo] = hg;
  var mg = true;
  function mu(A, e, t) {
    var r = "";
    return t.split(" ").forEach(function(n) {
      A[n] !== void 0 ? e.push(A[n] + ";") : n && (r += n + " ");
    }), r;
  }
  var is = function(e, t, r) {
    var n = e.key + "-" + t.name;
    (r === false || mg === false) && e.registered[n] === void 0 && (e.registered[n] = t.styles);
  }, as = function(e, t, r) {
    is(e, t, r);
    var n = e.key + "-" + t.name;
    if (e.inserted[t.name] === void 0) {
      var o = t;
      do
        e.insert(t === o ? "." + n : "", o, e.sheet, true), o = o.next;
      while (o !== void 0);
    }
  };
  function Cg(A) {
    for (var e = 0, t, r = 0, n = A.length; n >= 4; ++r, n -= 4) t = A.charCodeAt(r) & 255 | (A.charCodeAt(++r) & 255) << 8 | (A.charCodeAt(++r) & 255) << 16 | (A.charCodeAt(++r) & 255) << 24, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= t >>> 24, e = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16);
    switch (n) {
      case 3:
        e ^= (A.charCodeAt(r + 2) & 255) << 16;
      case 2:
        e ^= (A.charCodeAt(r + 1) & 255) << 8;
      case 1:
        e ^= A.charCodeAt(r) & 255, e = (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16);
    }
    return e ^= e >>> 13, e = (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16), ((e ^ e >>> 15) >>> 0).toString(36);
  }
  var wg = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    scale: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
  }, vg = /[A-Z]|^ms/g, yg = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Cu = function(e) {
    return e.charCodeAt(1) === 45;
  }, qs = function(e) {
    return e != null && typeof e != "boolean";
  }, Fi = du(function(A) {
    return Cu(A) ? A : A.replace(vg, "-$&").toLowerCase();
  }), Al = function(e, t) {
    switch (e) {
      case "animation":
      case "animationName":
        if (typeof t == "string") return t.replace(yg, function(r, n, o) {
          return De = {
            name: n,
            styles: o,
            next: De
          }, n;
        });
    }
    return wg[e] !== 1 && !Cu(e) && typeof t == "number" && t !== 0 ? t + "px" : t;
  };
  function Zr(A, e, t) {
    if (t == null) return "";
    var r = t;
    if (r.__emotion_styles !== void 0) return r;
    switch (typeof t) {
      case "boolean":
        return "";
      case "object": {
        var n = t;
        if (n.anim === 1) return De = {
          name: n.name,
          styles: n.styles,
          next: De
        }, n.name;
        var o = t;
        if (o.styles !== void 0) {
          var i = o.next;
          if (i !== void 0) for (; i !== void 0; ) De = {
            name: i.name,
            styles: i.styles,
            next: De
          }, i = i.next;
          var a = o.styles + ";";
          return a;
        }
        return Qg(A, e, t);
      }
      case "function": {
        if (A !== void 0) {
          var l = De, s = t(A);
          return De = l, Zr(A, e, s);
        }
        break;
      }
    }
    var c = t;
    if (e == null) return c;
    var d = e[c];
    return d !== void 0 ? d : c;
  }
  function Qg(A, e, t) {
    var r = "";
    if (Array.isArray(t)) for (var n = 0; n < t.length; n++) r += Zr(A, e, t[n]) + ";";
    else for (var o in t) {
      var i = t[o];
      if (typeof i != "object") {
        var a = i;
        e != null && e[a] !== void 0 ? r += o + "{" + e[a] + "}" : qs(a) && (r += Fi(o) + ":" + Al(o, a) + ";");
      } else if (Array.isArray(i) && typeof i[0] == "string" && (e == null || e[i[0]] === void 0)) for (var l = 0; l < i.length; l++) qs(i[l]) && (r += Fi(o) + ":" + Al(o, i[l]) + ";");
      else {
        var s = Zr(A, e, i);
        switch (o) {
          case "animation":
          case "animationName": {
            r += Fi(o) + ":" + s + ";";
            break;
          }
          default:
            r += o + "{" + s + "}";
        }
      }
    }
    return r;
  }
  var el = /label:\s*([^\s;{]+)\s*(;|$)/g, De;
  function nn(A, e, t) {
    if (A.length === 1 && typeof A[0] == "object" && A[0] !== null && A[0].styles !== void 0) return A[0];
    var r = true, n = "";
    De = void 0;
    var o = A[0];
    if (o == null || o.raw === void 0) r = false, n += Zr(t, e, o);
    else {
      var i = o;
      n += i[0];
    }
    for (var a = 1; a < A.length; a++) if (n += Zr(t, e, A[a]), r) {
      var l = o;
      n += l[a];
    }
    el.lastIndex = 0;
    for (var s = "", c; (c = el.exec(n)) !== null; ) s += "-" + c[1];
    var d = Cg(n) + s;
    return {
      name: d,
      styles: n,
      next: De
    };
  }
  var bg = function(e) {
    return e();
  }, wu = ia.useInsertionEffect ? ia.useInsertionEffect : false, vu = wu || bg, tl = wu || h.useLayoutEffect, yu = h.createContext(typeof HTMLElement < "u" ? lg({
    key: "css"
  }) : null);
  yu.Provider;
  var ss = function(e) {
    return h.forwardRef(function(t, r) {
      var n = h.useContext(yu);
      return e(t, n, r);
    });
  }, on = h.createContext({}), ls = {}.hasOwnProperty, la = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Fg = function(e, t) {
    var r = {};
    for (var n in t) ls.call(t, n) && (r[n] = t[n]);
    return r[la] = e, r;
  }, Ug = function(e) {
    var t = e.cache, r = e.serialized, n = e.isStringTag;
    return is(t, r, n), vu(function() {
      return as(t, r, n);
    }), null;
  }, Eg = ss(function(A, e, t) {
    var r = A.css;
    typeof r == "string" && e.registered[r] !== void 0 && (r = e.registered[r]);
    var n = A[la], o = [
      r
    ], i = "";
    typeof A.className == "string" ? i = mu(e.registered, o, A.className) : A.className != null && (i = A.className + " ");
    var a = nn(o, void 0, h.useContext(on));
    i += e.key + "-" + a.name;
    var l = {};
    for (var s in A) ls.call(A, s) && s !== "css" && s !== la && (l[s] = A[s]);
    return l.className = i, t && (l.ref = t), h.createElement(h.Fragment, null, h.createElement(Ug, {
      cache: e,
      serialized: a,
      isStringTag: typeof n == "string"
    }), h.createElement(n, l));
  }), Sg = Eg, rl = function(e, t) {
    var r = arguments;
    if (t == null || !ls.call(t, "css")) return h.createElement.apply(void 0, r);
    var n = r.length, o = new Array(n);
    o[0] = Sg, o[1] = Fg(e, t);
    for (var i = 2; i < n; i++) o[i] = r[i];
    return h.createElement.apply(null, o);
  };
  (function(A) {
    var e;
    e || (e = A.JSX || (A.JSX = {}));
  })(rl || (rl = {}));
  var xg = ss(function(A, e) {
    var t = A.styles, r = nn([
      t
    ], void 0, h.useContext(on)), n = h.useRef();
    return tl(function() {
      var o = e.key + "-global", i = new e.sheet.constructor({
        key: o,
        nonce: e.sheet.nonce,
        container: e.sheet.container,
        speedy: e.sheet.isSpeedy
      }), a = false, l = document.querySelector('style[data-emotion="' + o + " " + r.name + '"]');
      return e.sheet.tags.length && (i.before = e.sheet.tags[0]), l !== null && (a = true, l.setAttribute("data-emotion", o), i.hydrate([
        l
      ])), n.current = [
        i,
        a
      ], function() {
        i.flush();
      };
    }, [
      e
    ]), tl(function() {
      var o = n.current, i = o[0], a = o[1];
      if (a) {
        o[1] = false;
        return;
      }
      if (r.next !== void 0 && as(e, r.next, true), i.tags.length) {
        var l = i.tags[i.tags.length - 1].nextElementSibling;
        i.before = l, i.flush();
      }
      e.insert("", r, i, false);
    }, [
      e,
      r.name
    ]), null;
  });
  function cs() {
    for (var A = arguments.length, e = new Array(A), t = 0; t < A; t++) e[t] = arguments[t];
    return nn(e);
  }
  function an() {
    var A = cs.apply(void 0, arguments), e = "animation-" + A.name;
    return {
      name: e,
      styles: "@keyframes " + e + "{" + A.styles + "}",
      anim: 1,
      toString: function() {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      }
    };
  }
  var Ig = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Hg = du(function(A) {
    return Ig.test(A) || A.charCodeAt(0) === 111 && A.charCodeAt(1) === 110 && A.charCodeAt(2) < 91;
  }), Tg = Hg, Lg = function(e) {
    return e !== "theme";
  }, nl = function(e) {
    return typeof e == "string" && e.charCodeAt(0) > 96 ? Tg : Lg;
  }, ol = function(e, t, r) {
    var n;
    if (t) {
      var o = t.shouldForwardProp;
      n = e.__emotion_forwardProp && o ? function(i) {
        return e.__emotion_forwardProp(i) && o(i);
      } : o;
    }
    return typeof n != "function" && r && (n = e.__emotion_forwardProp), n;
  }, kg = function(e) {
    var t = e.cache, r = e.serialized, n = e.isStringTag;
    return is(t, r, n), vu(function() {
      return as(t, r, n);
    }), null;
  }, Rg = function A(e, t) {
    var r = e.__emotion_real === e, n = r && e.__emotion_base || e, o, i;
    t !== void 0 && (o = t.label, i = t.target);
    var a = ol(e, t, r), l = a || nl(n), s = !l("as");
    return function() {
      var c = arguments, d = r && e.__emotion_styles !== void 0 ? e.__emotion_styles.slice(0) : [];
      if (o !== void 0 && d.push("label:" + o + ";"), c[0] == null || c[0].raw === void 0) d.push.apply(d, c);
      else {
        var u = c[0];
        d.push(u[0]);
        for (var f = c.length, g = 1; g < f; g++) d.push(c[g], u[g]);
      }
      var p = ss(function(Q, m, F) {
        var w = s && Q.as || n, v = "", E = [], C = Q;
        if (Q.theme == null) {
          C = {};
          for (var x in Q) C[x] = Q[x];
          C.theme = h.useContext(on);
        }
        typeof Q.className == "string" ? v = mu(m.registered, E, Q.className) : Q.className != null && (v = Q.className + " ");
        var I = nn(d.concat(E), m.registered, C);
        v += m.key + "-" + I.name, i !== void 0 && (v += " " + i);
        var T = s && a === void 0 ? nl(w) : l, B = {};
        for (var S in Q) s && S === "as" || T(S) && (B[S] = Q[S]);
        return B.className = v, F && (B.ref = F), h.createElement(h.Fragment, null, h.createElement(kg, {
          cache: m,
          serialized: I,
          isStringTag: typeof w == "string"
        }), h.createElement(w, B));
      });
      return p.displayName = o !== void 0 ? o : "Styled(" + (typeof n == "string" ? n : n.displayName || n.name || "Component") + ")", p.defaultProps = e.defaultProps, p.__emotion_real = p, p.__emotion_base = n, p.__emotion_styles = d, p.__emotion_forwardProp = a, Object.defineProperty(p, "toString", {
        value: function() {
          return "." + i;
        }
      }), p.withComponent = function(Q, m) {
        var F = A(Q, io({}, t, m, {
          shouldForwardProp: ol(p, m, true)
        }));
        return F.apply(void 0, d);
      }, p;
    };
  }, Og = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan"
  ], ca = Rg.bind(null);
  Og.forEach(function(A) {
    ca[A] = ca(A);
  });
  function Kg(A) {
    return A == null || Object.keys(A).length === 0;
  }
  function Qu(A) {
    const { styles: e, defaultTheme: t = {} } = A, r = typeof e == "function" ? (n) => e(Kg(n) ? t : n) : e;
    return L.jsx(xg, {
      styles: r
    });
  }
  function bu(A, e) {
    return ca(A, e);
  }
  function Mg(A, e) {
    Array.isArray(A.__emotion_styles) && (A.__emotion_styles = e(A.__emotion_styles));
  }
  const il = [];
  function pt(A) {
    return il[0] = A, nn(il);
  }
  var Fu = {
    exports: {}
  }, EA = {};
  var us = /* @__PURE__ */ Symbol.for("react.transitional.element"), ds = /* @__PURE__ */ Symbol.for("react.portal"), Vo = /* @__PURE__ */ Symbol.for("react.fragment"), $o = /* @__PURE__ */ Symbol.for("react.strict_mode"), Wo = /* @__PURE__ */ Symbol.for("react.profiler"), zo = /* @__PURE__ */ Symbol.for("react.consumer"), Xo = /* @__PURE__ */ Symbol.for("react.context"), jo = /* @__PURE__ */ Symbol.for("react.forward_ref"), Jo = /* @__PURE__ */ Symbol.for("react.suspense"), Yo = /* @__PURE__ */ Symbol.for("react.suspense_list"), Zo = /* @__PURE__ */ Symbol.for("react.memo"), qo = /* @__PURE__ */ Symbol.for("react.lazy"), Dg = /* @__PURE__ */ Symbol.for("react.view_transition"), Pg = /* @__PURE__ */ Symbol.for("react.client.reference");
  function xe(A) {
    if (typeof A == "object" && A !== null) {
      var e = A.$$typeof;
      switch (e) {
        case us:
          switch (A = A.type, A) {
            case Vo:
            case Wo:
            case $o:
            case Jo:
            case Yo:
            case Dg:
              return A;
            default:
              switch (A = A && A.$$typeof, A) {
                case Xo:
                case jo:
                case qo:
                case Zo:
                  return A;
                case zo:
                  return A;
                default:
                  return e;
              }
          }
        case ds:
          return e;
      }
    }
  }
  EA.ContextConsumer = zo;
  EA.ContextProvider = Xo;
  EA.Element = us;
  EA.ForwardRef = jo;
  EA.Fragment = Vo;
  EA.Lazy = qo;
  EA.Memo = Zo;
  EA.Portal = ds;
  EA.Profiler = Wo;
  EA.StrictMode = $o;
  EA.Suspense = Jo;
  EA.SuspenseList = Yo;
  EA.isContextConsumer = function(A) {
    return xe(A) === zo;
  };
  EA.isContextProvider = function(A) {
    return xe(A) === Xo;
  };
  EA.isElement = function(A) {
    return typeof A == "object" && A !== null && A.$$typeof === us;
  };
  EA.isForwardRef = function(A) {
    return xe(A) === jo;
  };
  EA.isFragment = function(A) {
    return xe(A) === Vo;
  };
  EA.isLazy = function(A) {
    return xe(A) === qo;
  };
  EA.isMemo = function(A) {
    return xe(A) === Zo;
  };
  EA.isPortal = function(A) {
    return xe(A) === ds;
  };
  EA.isProfiler = function(A) {
    return xe(A) === Wo;
  };
  EA.isStrictMode = function(A) {
    return xe(A) === $o;
  };
  EA.isSuspense = function(A) {
    return xe(A) === Jo;
  };
  EA.isSuspenseList = function(A) {
    return xe(A) === Yo;
  };
  EA.isValidElementType = function(A) {
    return typeof A == "string" || typeof A == "function" || A === Vo || A === Wo || A === $o || A === Jo || A === Yo || typeof A == "object" && A !== null && (A.$$typeof === qo || A.$$typeof === Zo || A.$$typeof === Xo || A.$$typeof === zo || A.$$typeof === jo || A.$$typeof === Pg || A.getModuleId !== void 0);
  };
  EA.typeOf = xe;
  Fu.exports = EA;
  var Uu = Fu.exports;
  function Ne(A) {
    if (typeof A != "object" || A === null) return false;
    const e = Object.getPrototypeOf(A);
    return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in A) && !(Symbol.iterator in A);
  }
  function Eu(A) {
    if (h.isValidElement(A) || Uu.isValidElementType(A) || !Ne(A)) return A;
    const e = {};
    return Object.keys(A).forEach((t) => {
      e[t] = Eu(A[t]);
    }), e;
  }
  ZA = function(A, e, t = {
    clone: true
  }) {
    const r = t.clone ? {
      ...A
    } : A;
    return Ne(A) && Ne(e) && Object.keys(e).forEach((n) => {
      h.isValidElement(e[n]) || Uu.isValidElementType(e[n]) ? r[n] = e[n] : Ne(e[n]) && Object.prototype.hasOwnProperty.call(A, n) && Ne(A[n]) ? r[n] = ZA(A[n], e[n], t) : t.clone ? r[n] = Ne(e[n]) ? Eu(e[n]) : e[n] : r[n] = e[n];
    }), r;
  };
  const _g = (A) => {
    const e = Object.keys(A).map((t) => ({
      key: t,
      val: A[t]
    })) || [];
    return e.sort((t, r) => t.val - r.val), e.reduce((t, r) => ({
      ...t,
      [r.key]: r.val
    }), {});
  };
  function Ng(A) {
    const { values: e = {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }, unit: t = "px", step: r = 5, ...n } = A, o = _g(e), i = Object.keys(o);
    function a(u) {
      return `@media (min-width:${typeof e[u] == "number" ? e[u] : u}${t})`;
    }
    function l(u) {
      return `@media (max-width:${(typeof e[u] == "number" ? e[u] : u) - r / 100}${t})`;
    }
    function s(u, f) {
      const g = i.indexOf(f);
      return `@media (min-width:${typeof e[u] == "number" ? e[u] : u}${t}) and (max-width:${(g !== -1 && typeof e[i[g]] == "number" ? e[i[g]] : f) - r / 100}${t})`;
    }
    function c(u) {
      return i.indexOf(u) + 1 < i.length ? s(u, i[i.indexOf(u) + 1]) : a(u);
    }
    function d(u) {
      const f = i.indexOf(u);
      return f === 0 ? a(i[1]) : f === i.length - 1 ? l(i[f]) : s(u, i[i.indexOf(u) + 1]).replace("@media", "@media not all and");
    }
    return {
      keys: i,
      values: o,
      up: a,
      down: l,
      between: s,
      only: c,
      not: d,
      unit: t,
      ...n
    };
  }
  function al(A, e) {
    if (!A.containerQueries) return e;
    const t = Object.keys(e).filter((r) => r.startsWith("@container")).sort((r, n) => {
      var _a2, _b2;
      const o = /min-width:\s*([0-9.]+)/;
      return +(((_a2 = r.match(o)) == null ? void 0 : _a2[1]) || 0) - +(((_b2 = n.match(o)) == null ? void 0 : _b2[1]) || 0);
    });
    return t.length ? t.reduce((r, n) => {
      const o = e[n];
      return delete r[n], r[n] = o, r;
    }, {
      ...e
    }) : e;
  }
  function Gg(A, e) {
    return e === "@" || e.startsWith("@") && (A.some((t) => e.startsWith(`@${t}`)) || !!e.match(/^@\d/));
  }
  function Vg(A, e) {
    const t = e.match(/^@([^/]+)?\/?(.+)?$/);
    if (!t) return null;
    const [, r, n] = t, o = Number.isNaN(+r) ? r || 0 : +r;
    return A.containerQueries(n).up(o);
  }
  function $g(A) {
    const e = (o, i) => o.replace("@media", i ? `@container ${i}` : "@container");
    function t(o, i) {
      o.up = (...a) => e(A.breakpoints.up(...a), i), o.down = (...a) => e(A.breakpoints.down(...a), i), o.between = (...a) => e(A.breakpoints.between(...a), i), o.only = (...a) => e(A.breakpoints.only(...a), i), o.not = (...a) => {
        const l = e(A.breakpoints.not(...a), i);
        return l.includes("not all and") ? l.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : l;
      };
    }
    const r = {}, n = (o) => (t(r, o), r);
    return t(n), {
      ...A,
      containerQueries: n
    };
  }
  const Wg = {
    borderRadius: 4
  };
  function Pr(A, e) {
    return e ? ZA(A, e, {
      clone: false
    }) : A;
  }
  const Ai = {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536
  }, sl = {
    keys: [
      "xs",
      "sm",
      "md",
      "lg",
      "xl"
    ],
    up: (A) => `@media (min-width:${Ai[A]}px)`
  }, zg = {
    containerQueries: (A) => ({
      up: (e) => {
        let t = typeof e == "number" ? e : Ai[e] || e;
        return typeof t == "number" && (t = `${t}px`), A ? `@container ${A} (min-width:${t})` : `@container (min-width:${t})`;
      }
    })
  };
  tt = function(A, e, t) {
    const r = A.theme || {};
    if (Array.isArray(e)) {
      const o = r.breakpoints || sl;
      return e.reduce((i, a, l) => (i[o.up(o.keys[l])] = t(e[l]), i), {});
    }
    if (typeof e == "object") {
      const o = r.breakpoints || sl;
      return Object.keys(e).reduce((i, a) => {
        if (Gg(o.keys, a)) {
          const l = Vg(r.containerQueries ? r : zg, a);
          l && (i[l] = t(e[a], a));
        } else if (Object.keys(o.values || Ai).includes(a)) {
          const l = o.up(a);
          i[l] = t(e[a], a);
        } else {
          const l = a;
          i[l] = e[l];
        }
        return i;
      }, {});
    }
    return t(e);
  };
  function Su(A = {}) {
    var _a2;
    return ((_a2 = A.keys) == null ? void 0 : _a2.reduce((t, r) => {
      const n = A.up(r);
      return t[n] = {}, t;
    }, {})) || {};
  }
  function ua(A, e) {
    return A.reduce((t, r) => {
      const n = t[r];
      return (!n || Object.keys(n).length === 0) && delete t[r], t;
    }, e);
  }
  GU = function(A, ...e) {
    const t = Su(A), r = [
      t,
      ...e
    ].reduce((n, o) => ZA(n, o), {});
    return ua(Object.keys(t), r);
  };
  function Xg(A, e) {
    if (typeof A != "object") return {};
    const t = {}, r = Object.keys(e);
    return Array.isArray(A) ? r.forEach((n, o) => {
      o < A.length && (t[n] = true);
    }) : r.forEach((n) => {
      A[n] != null && (t[n] = true);
    }), t;
  }
  VU = function({ values: A, breakpoints: e, base: t }) {
    const r = t || Xg(A, e), n = Object.keys(r);
    if (n.length === 0) return A;
    let o;
    return n.reduce((i, a, l) => (Array.isArray(A) ? (i[a] = A[l] != null ? A[l] : A[o], o = l) : typeof A == "object" ? (i[a] = A[a] != null ? A[a] : A[o], o = a) : i[a] = A, i), {});
  };
  mA = function(A) {
    if (typeof A != "string") throw new Error(et(7));
    return A.charAt(0).toUpperCase() + A.slice(1);
  };
  function ei(A, e, t = true) {
    if (!e || typeof e != "string") return null;
    if (A && A.vars && t) {
      const r = `vars.${e}`.split(".").reduce((n, o) => n && n[o] ? n[o] : null, A);
      if (r != null) return r;
    }
    return e.split(".").reduce((r, n) => r && r[n] != null ? r[n] : null, A);
  }
  function so(A, e, t, r = t) {
    let n;
    return typeof A == "function" ? n = A(t) : Array.isArray(A) ? n = A[t] || r : n = ei(A, t) || r, e && (n = e(n, r, A)), n;
  }
  function VA(A) {
    const { prop: e, cssProperty: t = A.prop, themeKey: r, transform: n } = A, o = (i) => {
      if (i[e] == null) return null;
      const a = i[e], l = i.theme, s = ei(l, r) || {};
      return tt(i, a, (d) => {
        let u = so(s, n, d);
        return d === u && typeof d == "string" && (u = so(s, n, `${e}${d === "default" ? "" : mA(d)}`, d)), t === false ? u : {
          [t]: u
        };
      });
    };
    return o.propTypes = {}, o.filterProps = [
      e
    ], o;
  }
  function jg(A) {
    const e = {};
    return (t) => (e[t] === void 0 && (e[t] = A(t)), e[t]);
  }
  const Jg = {
    m: "margin",
    p: "padding"
  }, Yg = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: [
      "Left",
      "Right"
    ],
    y: [
      "Top",
      "Bottom"
    ]
  }, ll = {
    marginX: "mx",
    marginY: "my",
    paddingX: "px",
    paddingY: "py"
  }, Zg = jg((A) => {
    if (A.length > 2) if (ll[A]) A = ll[A];
    else return [
      A
    ];
    const [e, t] = A.split(""), r = Jg[e], n = Yg[t] || "";
    return Array.isArray(n) ? n.map((o) => r + o) : [
      r + n
    ];
  }), fs = [
    "m",
    "mt",
    "mr",
    "mb",
    "ml",
    "mx",
    "my",
    "margin",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "marginX",
    "marginY",
    "marginInline",
    "marginInlineStart",
    "marginInlineEnd",
    "marginBlock",
    "marginBlockStart",
    "marginBlockEnd"
  ], gs = [
    "p",
    "pt",
    "pr",
    "pb",
    "pl",
    "px",
    "py",
    "padding",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "paddingX",
    "paddingY",
    "paddingInline",
    "paddingInlineStart",
    "paddingInlineEnd",
    "paddingBlock",
    "paddingBlockStart",
    "paddingBlockEnd"
  ];
  [
    ...fs,
    ...gs
  ];
  function sn(A, e, t, r) {
    const n = ei(A, e, true) ?? t;
    return typeof n == "number" || typeof n == "string" ? (o) => typeof o == "string" ? o : typeof n == "string" ? `calc(${o} * ${n})` : n * o : Array.isArray(n) ? (o) => {
      if (typeof o == "string") return o;
      const i = Math.abs(o), a = n[i];
      return o >= 0 ? a : typeof a == "number" ? -a : `-${a}`;
    } : typeof n == "function" ? n : () => {
    };
  }
  ps = function(A) {
    return sn(A, "spacing", 8);
  };
  ln = function(A, e) {
    return typeof e == "string" || e == null ? e : A(e);
  };
  function qg(A, e) {
    return (t) => A.reduce((r, n) => (r[n] = ln(e, t), r), {});
  }
  function Ap(A, e, t, r) {
    if (!e.includes(t)) return null;
    const n = Zg(t), o = qg(n, r), i = A[t];
    return tt(A, i, o);
  }
  function xu(A, e) {
    const t = ps(A.theme);
    return Object.keys(A).map((r) => Ap(A, e, r, t)).reduce(Pr, {});
  }
  function DA(A) {
    return xu(A, fs);
  }
  DA.propTypes = {};
  DA.filterProps = fs;
  function PA(A) {
    return xu(A, gs);
  }
  PA.propTypes = {};
  PA.filterProps = gs;
  function Iu(A = 8, e = ps({
    spacing: A
  })) {
    if (A.mui) return A;
    const t = (...r) => (r.length === 0 ? [
      1
    ] : r).map((o) => {
      const i = e(o);
      return typeof i == "number" ? `${i}px` : i;
    }).join(" ");
    return t.mui = true, t;
  }
  function ti(...A) {
    const e = A.reduce((r, n) => (n.filterProps.forEach((o) => {
      r[o] = n;
    }), r), {}), t = (r) => Object.keys(r).reduce((n, o) => e[o] ? Pr(n, e[o](r)) : n, {});
    return t.propTypes = {}, t.filterProps = A.reduce((r, n) => r.concat(n.filterProps), []), t;
  }
  function be(A) {
    return typeof A != "number" ? A : `${A}px solid`;
  }
  function Ie(A, e) {
    return VA({
      prop: A,
      themeKey: "borders",
      transform: e
    });
  }
  const ep = Ie("border", be), tp = Ie("borderTop", be), rp = Ie("borderRight", be), np = Ie("borderBottom", be), op = Ie("borderLeft", be), ip = Ie("borderColor"), ap = Ie("borderTopColor"), sp = Ie("borderRightColor"), lp = Ie("borderBottomColor"), cp = Ie("borderLeftColor"), up = Ie("outline", be), dp = Ie("outlineColor"), ri = (A) => {
    if (A.borderRadius !== void 0 && A.borderRadius !== null) {
      const e = sn(A.theme, "shape.borderRadius", 4), t = (r) => ({
        borderRadius: ln(e, r)
      });
      return tt(A, A.borderRadius, t);
    }
    return null;
  };
  ri.propTypes = {};
  ri.filterProps = [
    "borderRadius"
  ];
  ti(ep, tp, rp, np, op, ip, ap, sp, lp, cp, ri, up, dp);
  const ni = (A) => {
    if (A.gap !== void 0 && A.gap !== null) {
      const e = sn(A.theme, "spacing", 8), t = (r) => ({
        gap: ln(e, r)
      });
      return tt(A, A.gap, t);
    }
    return null;
  };
  ni.propTypes = {};
  ni.filterProps = [
    "gap"
  ];
  const oi = (A) => {
    if (A.columnGap !== void 0 && A.columnGap !== null) {
      const e = sn(A.theme, "spacing", 8), t = (r) => ({
        columnGap: ln(e, r)
      });
      return tt(A, A.columnGap, t);
    }
    return null;
  };
  oi.propTypes = {};
  oi.filterProps = [
    "columnGap"
  ];
  const ii = (A) => {
    if (A.rowGap !== void 0 && A.rowGap !== null) {
      const e = sn(A.theme, "spacing", 8), t = (r) => ({
        rowGap: ln(e, r)
      });
      return tt(A, A.rowGap, t);
    }
    return null;
  };
  ii.propTypes = {};
  ii.filterProps = [
    "rowGap"
  ];
  const fp = VA({
    prop: "gridColumn"
  }), gp = VA({
    prop: "gridRow"
  }), pp = VA({
    prop: "gridAutoFlow"
  }), Bp = VA({
    prop: "gridAutoColumns"
  }), hp = VA({
    prop: "gridAutoRows"
  }), mp = VA({
    prop: "gridTemplateColumns"
  }), Cp = VA({
    prop: "gridTemplateRows"
  }), wp = VA({
    prop: "gridTemplateAreas"
  }), vp = VA({
    prop: "gridArea"
  });
  ti(ni, oi, ii, fp, gp, pp, Bp, hp, mp, Cp, wp, vp);
  function ir(A, e) {
    return e === "grey" ? e : A;
  }
  const yp = VA({
    prop: "color",
    themeKey: "palette",
    transform: ir
  }), Qp = VA({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: ir
  }), bp = VA({
    prop: "backgroundColor",
    themeKey: "palette",
    transform: ir
  });
  ti(yp, Qp, bp);
  function me(A) {
    return A <= 1 && A !== 0 ? `${A * 100}%` : A;
  }
  const Fp = VA({
    prop: "width",
    transform: me
  }), Bs = (A) => {
    if (A.maxWidth !== void 0 && A.maxWidth !== null) {
      const e = (t) => {
        var _a2, _b2, _c2, _d2, _e2;
        const r = ((_c2 = (_b2 = (_a2 = A.theme) == null ? void 0 : _a2.breakpoints) == null ? void 0 : _b2.values) == null ? void 0 : _c2[t]) || Ai[t];
        return r ? ((_e2 = (_d2 = A.theme) == null ? void 0 : _d2.breakpoints) == null ? void 0 : _e2.unit) !== "px" ? {
          maxWidth: `${r}${A.theme.breakpoints.unit}`
        } : {
          maxWidth: r
        } : {
          maxWidth: me(t)
        };
      };
      return tt(A, A.maxWidth, e);
    }
    return null;
  };
  Bs.filterProps = [
    "maxWidth"
  ];
  const Up = VA({
    prop: "minWidth",
    transform: me
  }), Ep = VA({
    prop: "height",
    transform: me
  }), Sp = VA({
    prop: "maxHeight",
    transform: me
  }), xp = VA({
    prop: "minHeight",
    transform: me
  });
  VA({
    prop: "size",
    cssProperty: "width",
    transform: me
  });
  VA({
    prop: "size",
    cssProperty: "height",
    transform: me
  });
  const Ip = VA({
    prop: "boxSizing"
  });
  ti(Fp, Bs, Up, Ep, Sp, xp, Ip);
  const cn = {
    border: {
      themeKey: "borders",
      transform: be
    },
    borderTop: {
      themeKey: "borders",
      transform: be
    },
    borderRight: {
      themeKey: "borders",
      transform: be
    },
    borderBottom: {
      themeKey: "borders",
      transform: be
    },
    borderLeft: {
      themeKey: "borders",
      transform: be
    },
    borderColor: {
      themeKey: "palette"
    },
    borderTopColor: {
      themeKey: "palette"
    },
    borderRightColor: {
      themeKey: "palette"
    },
    borderBottomColor: {
      themeKey: "palette"
    },
    borderLeftColor: {
      themeKey: "palette"
    },
    outline: {
      themeKey: "borders",
      transform: be
    },
    outlineColor: {
      themeKey: "palette"
    },
    borderRadius: {
      themeKey: "shape.borderRadius",
      style: ri
    },
    color: {
      themeKey: "palette",
      transform: ir
    },
    bgcolor: {
      themeKey: "palette",
      cssProperty: "backgroundColor",
      transform: ir
    },
    backgroundColor: {
      themeKey: "palette",
      transform: ir
    },
    p: {
      style: PA
    },
    pt: {
      style: PA
    },
    pr: {
      style: PA
    },
    pb: {
      style: PA
    },
    pl: {
      style: PA
    },
    px: {
      style: PA
    },
    py: {
      style: PA
    },
    padding: {
      style: PA
    },
    paddingTop: {
      style: PA
    },
    paddingRight: {
      style: PA
    },
    paddingBottom: {
      style: PA
    },
    paddingLeft: {
      style: PA
    },
    paddingX: {
      style: PA
    },
    paddingY: {
      style: PA
    },
    paddingInline: {
      style: PA
    },
    paddingInlineStart: {
      style: PA
    },
    paddingInlineEnd: {
      style: PA
    },
    paddingBlock: {
      style: PA
    },
    paddingBlockStart: {
      style: PA
    },
    paddingBlockEnd: {
      style: PA
    },
    m: {
      style: DA
    },
    mt: {
      style: DA
    },
    mr: {
      style: DA
    },
    mb: {
      style: DA
    },
    ml: {
      style: DA
    },
    mx: {
      style: DA
    },
    my: {
      style: DA
    },
    margin: {
      style: DA
    },
    marginTop: {
      style: DA
    },
    marginRight: {
      style: DA
    },
    marginBottom: {
      style: DA
    },
    marginLeft: {
      style: DA
    },
    marginX: {
      style: DA
    },
    marginY: {
      style: DA
    },
    marginInline: {
      style: DA
    },
    marginInlineStart: {
      style: DA
    },
    marginInlineEnd: {
      style: DA
    },
    marginBlock: {
      style: DA
    },
    marginBlockStart: {
      style: DA
    },
    marginBlockEnd: {
      style: DA
    },
    displayPrint: {
      cssProperty: false,
      transform: (A) => ({
        "@media print": {
          display: A
        }
      })
    },
    display: {},
    overflow: {},
    textOverflow: {},
    visibility: {},
    whiteSpace: {},
    flexBasis: {},
    flexDirection: {},
    flexWrap: {},
    justifyContent: {},
    alignItems: {},
    alignContent: {},
    order: {},
    flex: {},
    flexGrow: {},
    flexShrink: {},
    alignSelf: {},
    justifyItems: {},
    justifySelf: {},
    gap: {
      style: ni
    },
    rowGap: {
      style: ii
    },
    columnGap: {
      style: oi
    },
    gridColumn: {},
    gridRow: {},
    gridAutoFlow: {},
    gridAutoColumns: {},
    gridAutoRows: {},
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridTemplateAreas: {},
    gridArea: {},
    position: {},
    zIndex: {
      themeKey: "zIndex"
    },
    top: {},
    right: {},
    bottom: {},
    left: {},
    boxShadow: {
      themeKey: "shadows"
    },
    width: {
      transform: me
    },
    maxWidth: {
      style: Bs
    },
    minWidth: {
      transform: me
    },
    height: {
      transform: me
    },
    maxHeight: {
      transform: me
    },
    minHeight: {
      transform: me
    },
    boxSizing: {},
    font: {
      themeKey: "font"
    },
    fontFamily: {
      themeKey: "typography"
    },
    fontSize: {
      themeKey: "typography"
    },
    fontStyle: {
      themeKey: "typography"
    },
    fontWeight: {
      themeKey: "typography"
    },
    letterSpacing: {},
    textTransform: {},
    lineHeight: {},
    textAlign: {},
    typography: {
      cssProperty: false,
      themeKey: "typography"
    }
  };
  function Hp(...A) {
    const e = A.reduce((r, n) => r.concat(Object.keys(n)), []), t = new Set(e);
    return A.every((r) => t.size === Object.keys(r).length);
  }
  function Tp(A, e) {
    return typeof A == "function" ? A(e) : A;
  }
  function Lp() {
    function A(t, r, n, o) {
      const i = {
        [t]: r,
        theme: n
      }, a = o[t];
      if (!a) return {
        [t]: r
      };
      const { cssProperty: l = t, themeKey: s, transform: c, style: d } = a;
      if (r == null) return null;
      if (s === "typography" && r === "inherit") return {
        [t]: r
      };
      const u = ei(n, s) || {};
      return d ? d(i) : tt(i, r, (g) => {
        let p = so(u, c, g);
        return g === p && typeof g == "string" && (p = so(u, c, `${t}${g === "default" ? "" : mA(g)}`, g)), l === false ? p : {
          [l]: p
        };
      });
    }
    function e(t) {
      const { sx: r, theme: n = {}, nested: o } = t || {};
      if (!r) return null;
      const i = n.unstable_sxConfig ?? cn;
      function a(l) {
        let s = l;
        if (typeof l == "function") s = l(n);
        else if (typeof l != "object") return l;
        if (!s) return null;
        const c = Su(n.breakpoints), d = Object.keys(c);
        let u = c;
        return Object.keys(s).forEach((f) => {
          const g = Tp(s[f], n);
          if (g != null) if (typeof g == "object") if (i[f]) u = Pr(u, A(f, g, n, i));
          else {
            const p = tt({
              theme: n
            }, g, (Q) => ({
              [f]: Q
            }));
            Hp(p, g) ? u[f] = e({
              sx: g,
              theme: n,
              nested: true
            }) : u = Pr(u, p);
          }
          else u = Pr(u, A(f, g, n, i));
        }), !o && n.modularCssLayers ? {
          "@layer sx": al(n, ua(d, u))
        } : al(n, ua(d, u));
      }
      return Array.isArray(r) ? r.map(a) : a(r);
    }
    return e;
  }
  const mt = Lp();
  mt.filterProps = [
    "sx"
  ];
  function kp(A, e) {
    var _a2;
    const t = this;
    if (t.vars) {
      if (!((_a2 = t.colorSchemes) == null ? void 0 : _a2[A]) || typeof t.getColorSchemeSelector != "function") return {};
      let r = t.getColorSchemeSelector(A);
      return r === "&" ? e : ((r.includes("data-") || r.includes(".")) && (r = `*:where(${r.replace(/\s*&$/, "")}) &`), {
        [r]: e
      });
    }
    return t.palette.mode === A ? e : {};
  }
  hs = function(A = {}, ...e) {
    const { breakpoints: t = {}, palette: r = {}, spacing: n, shape: o = {}, ...i } = A, a = Ng(t), l = Iu(n);
    let s = ZA({
      breakpoints: a,
      direction: "ltr",
      components: {},
      palette: {
        mode: "light",
        ...r
      },
      spacing: l,
      shape: {
        ...Wg,
        ...o
      }
    }, i);
    return s = $g(s), s.applyStyles = kp, s = e.reduce((c, d) => ZA(c, d), s), s.unstable_sxConfig = {
      ...cn,
      ...i == null ? void 0 : i.unstable_sxConfig
    }, s.unstable_sx = function(d) {
      return mt({
        sx: d,
        theme: this
      });
    }, s;
  };
  function Rp(A) {
    return Object.keys(A).length === 0;
  }
  ms = function(A = null) {
    const e = h.useContext(on);
    return !e || Rp(e) ? A : e;
  };
  const Op = hs();
  Cs = function(A = Op) {
    return ms(A);
  };
  function Ui(A) {
    const e = pt(A);
    return A !== e && e.styles ? (e.styles.match(/^@layer\s+[^{]*$/) || (e.styles = `@layer global{${e.styles}}`), e) : A;
  }
  function Hu({ styles: A, themeId: e, defaultTheme: t = {} }) {
    const r = Cs(t), n = e && r[e] || r;
    let o = typeof A == "function" ? A(n) : A;
    return n.modularCssLayers && (Array.isArray(o) ? o = o.map((i) => Ui(typeof i == "function" ? i(n) : i)) : o = Ui(o)), L.jsx(Qu, {
      styles: o
    });
  }
  const Kp = (A) => {
    var _a2;
    const e = {
      systemProps: {},
      otherProps: {}
    }, t = ((_a2 = A == null ? void 0 : A.theme) == null ? void 0 : _a2.unstable_sxConfig) ?? cn;
    return Object.keys(A).forEach((r) => {
      t[r] ? e.systemProps[r] = A[r] : e.otherProps[r] = A[r];
    }), e;
  };
  Tu = function(A) {
    const { sx: e, ...t } = A, { systemProps: r, otherProps: n } = Kp(t);
    let o;
    return Array.isArray(e) ? o = [
      r,
      ...e
    ] : typeof e == "function" ? o = (...i) => {
      const a = e(...i);
      return Ne(a) ? {
        ...r,
        ...a
      } : r;
    } : o = {
      ...r,
      ...e
    }, {
      ...n,
      sx: o
    };
  };
  const cl = (A) => A, Mp = () => {
    let A = cl;
    return {
      configure(e) {
        A = e;
      },
      generate(e) {
        return A(e);
      },
      reset() {
        A = cl;
      }
    };
  }, Lu = Mp();
  function ku(A) {
    var e, t, r = "";
    if (typeof A == "string" || typeof A == "number") r += A;
    else if (typeof A == "object") if (Array.isArray(A)) {
      var n = A.length;
      for (e = 0; e < n; e++) A[e] && (t = ku(A[e])) && (r && (r += " "), r += t);
    } else for (t in A) A[t] && (r && (r += " "), r += t);
    return r;
  }
  pA = function() {
    for (var A, e, t = 0, r = "", n = arguments.length; t < n; t++) (A = arguments[t]) && (e = ku(A)) && (r && (r += " "), r += e);
    return r;
  };
  function Dp(A = {}) {
    const { themeId: e, defaultTheme: t, defaultClassName: r = "MuiBox-root", generateClassName: n } = A, o = bu("div", {
      shouldForwardProp: (a) => a !== "theme" && a !== "sx" && a !== "as"
    })(mt);
    return h.forwardRef(function(l, s) {
      const c = Cs(t), { className: d, component: u = "div", ...f } = Tu(l);
      return L.jsx(o, {
        as: u,
        ref: s,
        className: pA(d, n ? n(r) : r),
        theme: e && c[e] || c,
        ...f
      });
    });
  }
  const Pp = {
    active: "active",
    checked: "checked",
    completed: "completed",
    disabled: "disabled",
    error: "error",
    expanded: "expanded",
    focused: "focused",
    focusVisible: "focusVisible",
    open: "open",
    readOnly: "readOnly",
    required: "required",
    selected: "selected"
  };
  RA = function(A, e, t = "Mui") {
    const r = Pp[e];
    return r ? `${t}-${r}` : `${Lu.generate(A)}-${e}`;
  };
  HA = function(A, e, t = "Mui") {
    const r = {};
    return e.forEach((n) => {
      r[n] = RA(A, n, t);
    }), r;
  };
  function Ru(A) {
    const { variants: e, ...t } = A, r = {
      variants: e,
      style: pt(t),
      isProcessed: true
    };
    return r.style === t || e && e.forEach((n) => {
      typeof n.style != "function" && (n.style = pt(n.style));
    }), r;
  }
  const _p = hs();
  function Ei(A) {
    return A !== "ownerState" && A !== "theme" && A !== "sx" && A !== "as";
  }
  function Ht(A, e) {
    return e && A && typeof A == "object" && A.styles && !A.styles.startsWith("@layer") && (A.styles = `@layer ${e}{${String(A.styles)}}`), A;
  }
  function Np(A) {
    return A ? (e, t) => t[A] : null;
  }
  function Gp(A, e, t) {
    A.theme = Wp(A.theme) ? t : A.theme[e] || A.theme;
  }
  function Zn(A, e, t) {
    const r = typeof e == "function" ? e(A) : e;
    if (Array.isArray(r)) return r.flatMap((n) => Zn(A, n, t));
    if (Array.isArray(r == null ? void 0 : r.variants)) {
      let n;
      if (r.isProcessed) n = t ? Ht(r.style, t) : r.style;
      else {
        const { variants: o, ...i } = r;
        n = t ? Ht(pt(i), t) : i;
      }
      return Ou(A, r.variants, [
        n
      ], t);
    }
    return (r == null ? void 0 : r.isProcessed) ? t ? Ht(pt(r.style), t) : r.style : t ? Ht(pt(r), t) : r;
  }
  function Ou(A, e, t = [], r = void 0) {
    var _a2;
    let n;
    A: for (let o = 0; o < e.length; o += 1) {
      const i = e[o];
      if (typeof i.props == "function") {
        if (n ??= {
          ...A,
          ...A.ownerState,
          ownerState: A.ownerState
        }, !i.props(n)) continue;
      } else for (const a in i.props) if (A[a] !== i.props[a] && ((_a2 = A.ownerState) == null ? void 0 : _a2[a]) !== i.props[a]) continue A;
      typeof i.style == "function" ? (n ??= {
        ...A,
        ...A.ownerState,
        ownerState: A.ownerState
      }, t.push(r ? Ht(pt(i.style(n)), r) : i.style(n))) : t.push(r ? Ht(pt(i.style), r) : i.style);
    }
    return t;
  }
  Vp = function(A = {}) {
    const { themeId: e, defaultTheme: t = _p, rootShouldForwardProp: r = Ei, slotShouldForwardProp: n = Ei } = A;
    function o(a) {
      Gp(a, e, t);
    }
    return (a, l = {}) => {
      Mg(a, (C) => C.filter((x) => x !== mt));
      const { name: s, slot: c, skipVariantsResolver: d, skipSx: u, overridesResolver: f = Np(Xp(c)), ...g } = l, p = s && s.startsWith("Mui") || c ? "components" : "custom", Q = d !== void 0 ? d : c && c !== "Root" && c !== "root" || false, m = u || false;
      let F = Ei;
      c === "Root" || c === "root" ? F = r : c ? F = n : zp(a) && (F = void 0);
      const w = bu(a, {
        shouldForwardProp: F,
        label: $p(),
        ...g
      }), v = (C) => {
        if (C.__emotion_real === C) return C;
        if (typeof C == "function") return function(I) {
          return Zn(I, C, I.theme.modularCssLayers ? p : void 0);
        };
        if (Ne(C)) {
          const x = Ru(C);
          return function(T) {
            return x.variants ? Zn(T, x, T.theme.modularCssLayers ? p : void 0) : T.theme.modularCssLayers ? Ht(x.style, p) : x.style;
          };
        }
        return C;
      }, E = (...C) => {
        const x = [], I = C.map(v), T = [];
        if (x.push(o), s && f && T.push(function(O) {
          var _a2, _b2;
          const k = (_b2 = (_a2 = O.theme.components) == null ? void 0 : _a2[s]) == null ? void 0 : _b2.styleOverrides;
          if (!k) return null;
          const M = {};
          for (const W in k) M[W] = Zn(O, k[W], O.theme.modularCssLayers ? "theme" : void 0);
          return f(O, M);
        }), s && !Q && T.push(function(O) {
          var _a2, _b2, _c2;
          const k = (_c2 = (_b2 = (_a2 = O.theme) == null ? void 0 : _a2.components) == null ? void 0 : _b2[s]) == null ? void 0 : _c2.variants;
          return k ? Ou(O, k, [], O.theme.modularCssLayers ? "theme" : void 0) : null;
        }), m || T.push(mt), Array.isArray(I[0])) {
          const D = I.shift(), O = new Array(x.length).fill(""), N = new Array(T.length).fill("");
          let k;
          k = [
            ...O,
            ...D,
            ...N
          ], k.raw = [
            ...O,
            ...D.raw,
            ...N
          ], x.unshift(k);
        }
        const B = [
          ...x,
          ...I,
          ...T
        ], S = w(...B);
        return a.muiName && (S.muiName = a.muiName), S;
      };
      return w.withConfig && (E.withConfig = w.withConfig), E;
    };
  };
  function $p(A, e) {
    return void 0;
  }
  function Wp(A) {
    for (const e in A) return false;
    return true;
  }
  function zp(A) {
    return typeof A == "string" && A.charCodeAt(0) > 96;
  }
  function Xp(A) {
    return A && A.charAt(0).toLowerCase() + A.slice(1);
  }
  da = function(A, e) {
    const t = {
      ...e
    };
    for (const r in A) if (Object.prototype.hasOwnProperty.call(A, r)) {
      const n = r;
      if (n === "components" || n === "slots") t[n] = {
        ...A[n],
        ...t[n]
      };
      else if (n === "componentsProps" || n === "slotProps") {
        const o = A[n], i = e[n];
        if (!i) t[n] = o || {};
        else if (!o) t[n] = i;
        else {
          t[n] = {
            ...i
          };
          for (const a in o) if (Object.prototype.hasOwnProperty.call(o, a)) {
            const l = a;
            t[n][l] = da(o[l], i[l]);
          }
        }
      } else t[n] === void 0 && (t[n] = A[n]);
    }
    return t;
  };
  rt = typeof window < "u" ? h.useLayoutEffect : h.useEffect;
  jp = function(A, e = Number.MIN_SAFE_INTEGER, t = Number.MAX_SAFE_INTEGER) {
    return Math.max(e, Math.min(A, t));
  };
  function ws(A, e = 0, t = 1) {
    return jp(A, e, t);
  }
  function Jp(A) {
    A = A.slice(1);
    const e = new RegExp(`.{1,${A.length >= 6 ? 2 : 1}}`, "g");
    let t = A.match(e);
    return t && t[0].length === 1 && (t = t.map((r) => r + r)), t ? `rgb${t.length === 4 ? "a" : ""}(${t.map((r, n) => n < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
  }
  function Ct(A) {
    if (A.type) return A;
    if (A.charAt(0) === "#") return Ct(Jp(A));
    const e = A.indexOf("("), t = A.substring(0, e);
    if (![
      "rgb",
      "rgba",
      "hsl",
      "hsla",
      "color"
    ].includes(t)) throw new Error(et(9, A));
    let r = A.substring(e + 1, A.length - 1), n;
    if (t === "color") {
      if (r = r.split(" "), n = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), ![
        "srgb",
        "display-p3",
        "a98-rgb",
        "prophoto-rgb",
        "rec-2020"
      ].includes(n)) throw new Error(et(10, n));
    } else r = r.split(",");
    return r = r.map((o) => parseFloat(o)), {
      type: t,
      values: r,
      colorSpace: n
    };
  }
  const Yp = (A) => {
    const e = Ct(A);
    return e.values.slice(0, 3).map((t, r) => e.type.includes("hsl") && r !== 0 ? `${t}%` : t).join(" ");
  }, xr = (A, e) => {
    try {
      return Yp(A);
    } catch {
      return A;
    }
  };
  function ai(A) {
    const { type: e, colorSpace: t } = A;
    let { values: r } = A;
    return e.includes("rgb") ? r = r.map((n, o) => o < 3 ? parseInt(n, 10) : n) : e.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), e.includes("color") ? r = `${t} ${r.join(" ")}` : r = `${r.join(", ")}`, `${e}(${r})`;
  }
  function Ku(A) {
    A = Ct(A);
    const { values: e } = A, t = e[0], r = e[1] / 100, n = e[2] / 100, o = r * Math.min(n, 1 - n), i = (s, c = (s + t / 30) % 12) => n - o * Math.max(Math.min(c - 3, 9 - c, 1), -1);
    let a = "rgb";
    const l = [
      Math.round(i(0) * 255),
      Math.round(i(8) * 255),
      Math.round(i(4) * 255)
    ];
    return A.type === "hsla" && (a += "a", l.push(e[3])), ai({
      type: a,
      values: l
    });
  }
  function fa(A) {
    A = Ct(A);
    let e = A.type === "hsl" || A.type === "hsla" ? Ct(Ku(A)).values : A.values;
    return e = e.map((t) => (A.type !== "color" && (t /= 255), t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4)), Number((0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2]).toFixed(3));
  }
  function Zp(A, e) {
    const t = fa(A), r = fa(e);
    return (Math.max(t, r) + 0.05) / (Math.min(t, r) + 0.05);
  }
  lr = function(A, e) {
    return A = Ct(A), e = ws(e), (A.type === "rgb" || A.type === "hsl") && (A.type += "a"), A.type === "color" ? A.values[3] = `/${e}` : A.values[3] = e, ai(A);
  };
  function hn(A, e, t) {
    try {
      return lr(A, e);
    } catch {
      return A;
    }
  }
  vs = function(A, e) {
    if (A = Ct(A), e = ws(e), A.type.includes("hsl")) A.values[2] *= 1 - e;
    else if (A.type.includes("rgb") || A.type.includes("color")) for (let t = 0; t < 3; t += 1) A.values[t] *= 1 - e;
    return ai(A);
  };
  function FA(A, e, t) {
    try {
      return vs(A, e);
    } catch {
      return A;
    }
  }
  ys = function(A, e) {
    if (A = Ct(A), e = ws(e), A.type.includes("hsl")) A.values[2] += (100 - A.values[2]) * e;
    else if (A.type.includes("rgb")) for (let t = 0; t < 3; t += 1) A.values[t] += (255 - A.values[t]) * e;
    else if (A.type.includes("color")) for (let t = 0; t < 3; t += 1) A.values[t] += (1 - A.values[t]) * e;
    return ai(A);
  };
  function UA(A, e, t) {
    try {
      return ys(A, e);
    } catch {
      return A;
    }
  }
  qp = function(A, e = 0.15) {
    return fa(A) > 0.5 ? vs(A, e) : ys(A, e);
  };
  function mn(A, e, t) {
    try {
      return qp(A, e);
    } catch {
      return A;
    }
  }
  ul = function(...A) {
    return A.reduce((e, t) => t == null ? e : function(...n) {
      e.apply(this, n), t.apply(this, n);
    }, () => {
    });
  };
  function Mu(A, e = 166) {
    let t;
    function r(...n) {
      const o = () => {
        A.apply(this, n);
      };
      clearTimeout(t), t = setTimeout(o, e);
    }
    return r.clear = () => {
      clearTimeout(t);
    }, r;
  }
  Si = function(A, e) {
    var _a2, _b2, _c2;
    return h.isValidElement(A) && e.indexOf(A.type.muiName ?? ((_c2 = (_b2 = (_a2 = A.type) == null ? void 0 : _a2._payload) == null ? void 0 : _b2.value) == null ? void 0 : _c2.muiName)) !== -1;
  };
  Le = function(A) {
    return A && A.ownerDocument || document;
  };
  function nt(A) {
    return Le(A).defaultView || window;
  }
  function dl(A, e) {
    typeof A == "function" ? A(e) : A && (A.current = e);
  }
  let fl = 0;
  function AB(A) {
    const [e, t] = h.useState(A), r = A || e;
    return h.useEffect(() => {
      e == null && (fl += 1, t(`mui-${fl}`));
    }, [
      e
    ]), r;
  }
  const eB = {
    ...ia
  }, gl = eB.useId;
  si = function(A) {
    if (gl !== void 0) {
      const e = gl();
      return A ?? e;
    }
    return AB(A);
  };
  pl = function({ controlled: A, default: e, name: t, state: r = "value" }) {
    const { current: n } = h.useRef(A !== void 0), [o, i] = h.useState(e), a = n ? A : o, l = h.useCallback((s) => {
      n || i(s);
    }, []);
    return [
      a,
      l
    ];
  };
  kt = function(A) {
    const e = h.useRef(A);
    return rt(() => {
      e.current = A;
    }), h.useRef((...t) => (0, e.current)(...t)).current;
  };
  Be = function(...A) {
    const e = h.useRef(void 0), t = h.useCallback((r) => {
      const n = A.map((o) => {
        if (o == null) return null;
        if (typeof o == "function") {
          const i = o, a = i(r);
          return typeof a == "function" ? a : () => {
            i(null);
          };
        }
        return o.current = r, () => {
          o.current = null;
        };
      });
      return () => {
        n.forEach((o) => o == null ? void 0 : o());
      };
    }, A);
    return h.useMemo(() => A.every((r) => r == null) ? null : (r) => {
      e.current && (e.current(), e.current = void 0), r != null && (e.current = t(r));
    }, A);
  };
  const Bl = {};
  function Du(A, e) {
    const t = h.useRef(Bl);
    return t.current === Bl && (t.current = A(e)), t;
  }
  const tB = [];
  function rB(A) {
    h.useEffect(A, tB);
  }
  Qs = class {
    static create() {
      return new Qs();
    }
    currentId = null;
    start(e, t) {
      this.clear(), this.currentId = setTimeout(() => {
        this.currentId = null, t();
      }, e);
    }
    clear = () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    };
    disposeEffect = () => this.clear;
  };
  Pu = function() {
    const A = Du(Qs.create).current;
    return rB(A.disposeEffect), A;
  };
  hl = function(A) {
    try {
      return A.matches(":focus-visible");
    } catch {
    }
    return false;
  };
  function _u(A = window) {
    const e = A.document.documentElement.clientWidth;
    return A.innerWidth - e;
  }
  OA = function(A, e, t = void 0) {
    const r = {};
    for (const n in A) {
      const o = A[n];
      let i = "", a = true;
      for (let l = 0; l < o.length; l += 1) {
        const s = o[l];
        s && (i += (a === true ? "" : " ") + e(s), a = false, t && t[s] && (i += " " + t[s]));
      }
      r[n] = i;
    }
    return r;
  };
  function nB(A) {
    return typeof A == "string";
  }
  function Nu(A, e, t) {
    return A === void 0 || nB(A) ? e : {
      ...e,
      ownerState: {
        ...e.ownerState,
        ...t
      }
    };
  }
  Gu = function(A, e = []) {
    if (A === void 0) return {};
    const t = {};
    return Object.keys(A).filter((r) => r.match(/^on[A-Z]/) && typeof A[r] == "function" && !e.includes(r)).forEach((r) => {
      t[r] = A[r];
    }), t;
  };
  function ml(A) {
    if (A === void 0) return {};
    const e = {};
    return Object.keys(A).filter((t) => !(t.match(/^on[A-Z]/) && typeof A[t] == "function")).forEach((t) => {
      e[t] = A[t];
    }), e;
  }
  function Vu(A) {
    const { getSlotProps: e, additionalProps: t, externalSlotProps: r, externalForwardedProps: n, className: o } = A;
    if (!e) {
      const f = pA(t == null ? void 0 : t.className, o, n == null ? void 0 : n.className, r == null ? void 0 : r.className), g = {
        ...t == null ? void 0 : t.style,
        ...n == null ? void 0 : n.style,
        ...r == null ? void 0 : r.style
      }, p = {
        ...t,
        ...n,
        ...r
      };
      return f.length > 0 && (p.className = f), Object.keys(g).length > 0 && (p.style = g), {
        props: p,
        internalRef: void 0
      };
    }
    const i = Gu({
      ...n,
      ...r
    }), a = ml(r), l = ml(n), s = e(i), c = pA(s == null ? void 0 : s.className, t == null ? void 0 : t.className, o, n == null ? void 0 : n.className, r == null ? void 0 : r.className), d = {
      ...s == null ? void 0 : s.style,
      ...t == null ? void 0 : t.style,
      ...n == null ? void 0 : n.style,
      ...r == null ? void 0 : r.style
    }, u = {
      ...s,
      ...t,
      ...l,
      ...a
    };
    return c.length > 0 && (u.className = c), Object.keys(d).length > 0 && (u.style = d), {
      props: u,
      internalRef: s.ref
    };
  }
  function $u(A, e, t) {
    return typeof A == "function" ? A(e, t) : A;
  }
  oB = function(A) {
    var _a2;
    const { elementType: e, externalSlotProps: t, ownerState: r, skipResolvingSlotProps: n = false, ...o } = A, i = n ? {} : $u(t, r), { props: a, internalRef: l } = Vu({
      ...o,
      externalSlotProps: i
    }), s = Be(l, i == null ? void 0 : i.ref, (_a2 = A.additionalProps) == null ? void 0 : _a2.ref);
    return Nu(e, {
      ...a,
      ref: s
    }, r);
  };
  un = function(A) {
    var _a2;
    return parseInt(h.version, 10) >= 19 ? ((_a2 = A == null ? void 0 : A.props) == null ? void 0 : _a2.ref) || null : (A == null ? void 0 : A.ref) || null;
  };
  const Wu = h.createContext(null);
  function bs() {
    return h.useContext(Wu);
  }
  const iB = typeof Symbol == "function" && Symbol.for, aB = iB ? /* @__PURE__ */ Symbol.for("mui.nested") : "__THEME_NESTED__";
  function sB(A, e) {
    return typeof e == "function" ? e(A) : {
      ...A,
      ...e
    };
  }
  function lB(A) {
    const { children: e, theme: t } = A, r = bs(), n = h.useMemo(() => {
      const o = r === null ? {
        ...t
      } : sB(r, t);
      return o != null && (o[aB] = r !== null), o;
    }, [
      t,
      r
    ]);
    return L.jsx(Wu.Provider, {
      value: n,
      children: e
    });
  }
  const zu = h.createContext();
  function cB({ value: A, ...e }) {
    return L.jsx(zu.Provider, {
      value: A ?? true,
      ...e
    });
  }
  let Xu;
  uB = () => h.useContext(zu) ?? false;
  Xu = h.createContext(void 0);
  function dB({ value: A, children: e }) {
    return L.jsx(Xu.Provider, {
      value: A,
      children: e
    });
  }
  function fB(A) {
    const { theme: e, name: t, props: r } = A;
    if (!e || !e.components || !e.components[t]) return r;
    const n = e.components[t];
    return n.defaultProps ? da(n.defaultProps, r) : !n.styleOverrides && !n.variants ? da(n, r) : r;
  }
  function gB({ props: A, name: e }) {
    const t = h.useContext(Xu);
    return fB({
      props: A,
      name: e,
      theme: {
        components: t
      }
    });
  }
  function pB(A) {
    const e = ms(), t = si() || "", { modularCssLayers: r } = A;
    let n = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
    return !r || e !== null ? n = "" : typeof r == "string" ? n = r.replace(/mui(?!\.)/g, n) : n = `@layer ${n};`, rt(() => {
      var _a2, _b2;
      const o = document.querySelector("head");
      if (!o) return;
      const i = o.firstChild;
      if (n) {
        if (i && ((_a2 = i.hasAttribute) == null ? void 0 : _a2.call(i, "data-mui-layer-order")) && i.getAttribute("data-mui-layer-order") === t) return;
        const a = document.createElement("style");
        a.setAttribute("data-mui-layer-order", t), a.textContent = n, o.prepend(a);
      } else (_b2 = o.querySelector(`style[data-mui-layer-order="${t}"]`)) == null ? void 0 : _b2.remove();
    }, [
      n,
      t
    ]), n ? L.jsx(Hu, {
      styles: n
    }) : null;
  }
  const Cl = {};
  function wl(A, e, t, r = false) {
    return h.useMemo(() => {
      const n = A && e[A] || e;
      if (typeof t == "function") {
        const o = t(n), i = A ? {
          ...e,
          [A]: o
        } : o;
        return r ? () => i : i;
      }
      return A ? {
        ...e,
        [A]: t
      } : {
        ...e,
        ...t
      };
    }, [
      A,
      e,
      t,
      r
    ]);
  }
  function ju(A) {
    const { children: e, theme: t, themeId: r } = A, n = ms(Cl), o = bs() || Cl, i = wl(r, n, t), a = wl(r, o, t, true), l = (r ? i[r] : i).direction === "rtl", s = pB(i);
    return L.jsx(lB, {
      theme: a,
      children: L.jsx(on.Provider, {
        value: i,
        children: L.jsx(cB, {
          value: l,
          children: L.jsxs(dB, {
            value: r ? i[r].components : i.components,
            children: [
              s,
              e
            ]
          })
        })
      })
    });
  }
  const vl = {
    theme: void 0
  };
  function BB(A) {
    let e, t;
    return function(n) {
      let o = e;
      return (o === void 0 || n.theme !== t) && (vl.theme = n.theme, o = Ru(A(vl)), e = o, t = n.theme), o;
    };
  }
  const Fs = "mode", Us = "color-scheme", hB = "data-color-scheme";
  function mB(A) {
    const { defaultMode: e = "system", defaultLightColorScheme: t = "light", defaultDarkColorScheme: r = "dark", modeStorageKey: n = Fs, colorSchemeStorageKey: o = Us, attribute: i = hB, colorSchemeNode: a = "document.documentElement", nonce: l } = A || {};
    let s = "", c = i;
    if (i === "class" && (c = ".%s"), i === "data" && (c = "[data-%s]"), c.startsWith(".")) {
      const u = c.substring(1);
      s += `${a}.classList.remove('${u}'.replace('%s', light), '${u}'.replace('%s', dark));
      ${a}.classList.add('${u}'.replace('%s', colorScheme));`;
    }
    const d = c.match(/\[([^\]]+)\]/);
    if (d) {
      const [u, f] = d[1].split("=");
      f || (s += `${a}.removeAttribute('${u}'.replace('%s', light));
      ${a}.removeAttribute('${u}'.replace('%s', dark));`), s += `
      ${a}.setAttribute('${u}'.replace('%s', colorScheme), ${f ? `${f}.replace('%s', colorScheme)` : '""'});`;
    } else s += `${a}.setAttribute('${c}', colorScheme);`;
    return L.jsx("script", {
      suppressHydrationWarning: true,
      nonce: typeof window > "u" ? l : "",
      dangerouslySetInnerHTML: {
        __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${n}') || '${e}';
  const dark = localStorage.getItem('${o}-dark') || '${r}';
  const light = localStorage.getItem('${o}-light') || '${t}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${s}
  }
} catch(e){}})();`
      }
    }, "mui-color-scheme-init");
  }
  function CB() {
  }
  const wB = ({ key: A, storageWindow: e }) => (!e && typeof window < "u" && (e = window), {
    get(t) {
      if (typeof window > "u") return;
      if (!e) return t;
      let r;
      try {
        r = e.localStorage.getItem(A);
      } catch {
      }
      return r || t;
    },
    set: (t) => {
      if (e) try {
        e.localStorage.setItem(A, t);
      } catch {
      }
    },
    subscribe: (t) => {
      if (!e) return CB;
      const r = (n) => {
        const o = n.newValue;
        n.key === A && t(o);
      };
      return e.addEventListener("storage", r), () => {
        e.removeEventListener("storage", r);
      };
    }
  });
  function xi() {
  }
  function yl(A) {
    if (typeof window < "u" && typeof window.matchMedia == "function" && A === "system") return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function Ju(A, e) {
    if (A.mode === "light" || A.mode === "system" && A.systemMode === "light") return e("light");
    if (A.mode === "dark" || A.mode === "system" && A.systemMode === "dark") return e("dark");
  }
  function vB(A) {
    return Ju(A, (e) => {
      if (e === "light") return A.lightColorScheme;
      if (e === "dark") return A.darkColorScheme;
    });
  }
  function yB(A) {
    const { defaultMode: e = "light", defaultLightColorScheme: t, defaultDarkColorScheme: r, supportedColorSchemes: n = [], modeStorageKey: o = Fs, colorSchemeStorageKey: i = Us, storageWindow: a = typeof window > "u" ? void 0 : window, storageManager: l = wB, noSsr: s = false } = A, c = n.join(","), d = n.length > 1, u = h.useMemo(() => l == null ? void 0 : l({
      key: o,
      storageWindow: a
    }), [
      l,
      o,
      a
    ]), f = h.useMemo(() => l == null ? void 0 : l({
      key: `${i}-light`,
      storageWindow: a
    }), [
      l,
      i,
      a
    ]), g = h.useMemo(() => l == null ? void 0 : l({
      key: `${i}-dark`,
      storageWindow: a
    }), [
      l,
      i,
      a
    ]), [p, Q] = h.useState(() => {
      const I = (u == null ? void 0 : u.get(e)) || e, T = (f == null ? void 0 : f.get(t)) || t, B = (g == null ? void 0 : g.get(r)) || r;
      return {
        mode: I,
        systemMode: yl(I),
        lightColorScheme: T,
        darkColorScheme: B
      };
    }), [m, F] = h.useState(s || !d);
    h.useEffect(() => {
      F(true);
    }, []);
    const w = vB(p), v = h.useCallback((I) => {
      Q((T) => {
        if (I === T.mode) return T;
        const B = I ?? e;
        return u == null ? void 0 : u.set(B), {
          ...T,
          mode: B,
          systemMode: yl(B)
        };
      });
    }, [
      u,
      e
    ]), E = h.useCallback((I) => {
      I ? typeof I == "string" ? I && !c.includes(I) ? console.error(`\`${I}\` does not exist in \`theme.colorSchemes\`.`) : Q((T) => {
        const B = {
          ...T
        };
        return Ju(T, (S) => {
          S === "light" && (f == null ? void 0 : f.set(I), B.lightColorScheme = I), S === "dark" && (g == null ? void 0 : g.set(I), B.darkColorScheme = I);
        }), B;
      }) : Q((T) => {
        const B = {
          ...T
        }, S = I.light === null ? t : I.light, D = I.dark === null ? r : I.dark;
        return S && (c.includes(S) ? (B.lightColorScheme = S, f == null ? void 0 : f.set(S)) : console.error(`\`${S}\` does not exist in \`theme.colorSchemes\`.`)), D && (c.includes(D) ? (B.darkColorScheme = D, g == null ? void 0 : g.set(D)) : console.error(`\`${D}\` does not exist in \`theme.colorSchemes\`.`)), B;
      }) : Q((T) => (f == null ? void 0 : f.set(t), g == null ? void 0 : g.set(r), {
        ...T,
        lightColorScheme: t,
        darkColorScheme: r
      }));
    }, [
      c,
      f,
      g,
      t,
      r
    ]), C = h.useCallback((I) => {
      p.mode === "system" && Q((T) => {
        const B = (I == null ? void 0 : I.matches) ? "dark" : "light";
        return T.systemMode === B ? T : {
          ...T,
          systemMode: B
        };
      });
    }, [
      p.mode
    ]), x = h.useRef(C);
    return x.current = C, h.useEffect(() => {
      if (typeof window.matchMedia != "function" || !d) return;
      const I = (...B) => x.current(...B), T = window.matchMedia("(prefers-color-scheme: dark)");
      return T.addListener(I), I(T), () => {
        T.removeListener(I);
      };
    }, [
      d
    ]), h.useEffect(() => {
      if (d) {
        const I = (u == null ? void 0 : u.subscribe((S) => {
          (!S || [
            "light",
            "dark",
            "system"
          ].includes(S)) && v(S || e);
        })) || xi, T = (f == null ? void 0 : f.subscribe((S) => {
          (!S || c.match(S)) && E({
            light: S
          });
        })) || xi, B = (g == null ? void 0 : g.subscribe((S) => {
          (!S || c.match(S)) && E({
            dark: S
          });
        })) || xi;
        return () => {
          I(), T(), B();
        };
      }
    }, [
      E,
      v,
      c,
      e,
      a,
      d,
      u,
      f,
      g
    ]), {
      ...p,
      mode: m ? p.mode : void 0,
      systemMode: m ? p.systemMode : void 0,
      colorScheme: m ? w : void 0,
      setMode: v,
      setColorScheme: E
    };
  }
  const QB = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
  function bB(A) {
    const { themeId: e, theme: t = {}, modeStorageKey: r = Fs, colorSchemeStorageKey: n = Us, disableTransitionOnChange: o = false, defaultColorScheme: i, resolveTheme: a } = A, l = {
      allColorSchemes: [],
      colorScheme: void 0,
      darkColorScheme: void 0,
      lightColorScheme: void 0,
      mode: void 0,
      setColorScheme: () => {
      },
      setMode: () => {
      },
      systemMode: void 0
    }, s = h.createContext(void 0), c = () => h.useContext(s) || l, d = {}, u = {};
    function f(m) {
      var _a2, _b2, _c2, _d2;
      const { children: F, theme: w, modeStorageKey: v = r, colorSchemeStorageKey: E = n, disableTransitionOnChange: C = o, storageManager: x, storageWindow: I = typeof window > "u" ? void 0 : window, documentNode: T = typeof document > "u" ? void 0 : document, colorSchemeNode: B = typeof document > "u" ? void 0 : document.documentElement, disableNestedContext: S = false, disableStyleSheetGeneration: D = false, defaultMode: O = "system", noSsr: N } = m, k = h.useRef(false), M = bs(), W = h.useContext(s), nA = !!W && !S, P = h.useMemo(() => w || (typeof t == "function" ? t() : t), [
        w
      ]), X = P[e], AA = X || P, { colorSchemes: j = d, components: R = u, cssVarPrefix: $ } = AA, V = Object.keys(j).filter((gA) => !!j[gA]).join(","), Y = h.useMemo(() => V.split(","), [
        V
      ]), dA = typeof i == "string" ? i : i.light, iA = typeof i == "string" ? i : i.dark, tA = j[dA] && j[iA] ? O : ((_b2 = (_a2 = j[AA.defaultColorScheme]) == null ? void 0 : _a2.palette) == null ? void 0 : _b2.mode) || ((_c2 = AA.palette) == null ? void 0 : _c2.mode), { mode: J, setMode: oA, systemMode: aA, lightColorScheme: y, darkColorScheme: U, colorScheme: b, setColorScheme: _ } = yB({
        supportedColorSchemes: Y,
        defaultLightColorScheme: dA,
        defaultDarkColorScheme: iA,
        modeStorageKey: v,
        colorSchemeStorageKey: E,
        defaultMode: tA,
        storageManager: x,
        storageWindow: I,
        noSsr: N
      });
      let z = J, G = b;
      nA && (z = W.mode, G = W.colorScheme);
      const sA = h.useMemo(() => {
        var _a3;
        const gA = G || AA.defaultColorScheme, _A = ((_a3 = AA.generateThemeVars) == null ? void 0 : _a3.call(AA)) || AA.vars, zA = {
          ...AA,
          components: R,
          colorSchemes: j,
          cssVarPrefix: $,
          vars: _A
        };
        if (typeof zA.generateSpacing == "function" && (zA.spacing = zA.generateSpacing()), gA) {
          const ie = j[gA];
          ie && typeof ie == "object" && Object.keys(ie).forEach((jA) => {
            ie[jA] && typeof ie[jA] == "object" ? zA[jA] = {
              ...zA[jA],
              ...ie[jA]
            } : zA[jA] = ie[jA];
          });
        }
        return a ? a(zA) : zA;
      }, [
        AA,
        G,
        R,
        j,
        $
      ]), cA = AA.colorSchemeSelector;
      rt(() => {
        if (G && B && cA && cA !== "media") {
          const gA = cA;
          let _A = cA;
          if (gA === "class" && (_A = ".%s"), gA === "data" && (_A = "[data-%s]"), (gA == null ? void 0 : gA.startsWith("data-")) && !gA.includes("%s") && (_A = `[${gA}="%s"]`), _A.startsWith(".")) B.classList.remove(...Y.map((zA) => _A.substring(1).replace("%s", zA))), B.classList.add(_A.substring(1).replace("%s", G));
          else {
            const zA = _A.replace("%s", G).match(/\[([^\]]+)\]/);
            if (zA) {
              const [ie, jA] = zA[1].split("=");
              jA || Y.forEach((it) => {
                B.removeAttribute(ie.replace(G, it));
              }), B.setAttribute(ie, jA ? jA.replace(/"|'/g, "") : "");
            } else B.setAttribute(_A, G);
          }
        }
      }, [
        G,
        cA,
        B,
        Y
      ]), h.useEffect(() => {
        let gA;
        if (C && k.current && T) {
          const _A = T.createElement("style");
          _A.appendChild(T.createTextNode(QB)), T.head.appendChild(_A), window.getComputedStyle(T.body), gA = setTimeout(() => {
            T.head.removeChild(_A);
          }, 1);
        }
        return () => {
          clearTimeout(gA);
        };
      }, [
        G,
        C,
        T
      ]), h.useEffect(() => (k.current = true, () => {
        k.current = false;
      }), []);
      const fA = h.useMemo(() => ({
        allColorSchemes: Y,
        colorScheme: G,
        darkColorScheme: U,
        lightColorScheme: y,
        mode: z,
        setColorScheme: _,
        setMode: oA,
        systemMode: aA
      }), [
        Y,
        G,
        U,
        y,
        z,
        _,
        oA,
        aA,
        sA.colorSchemeSelector
      ]);
      let eA = true;
      (D || AA.cssVariables === false || nA && (M == null ? void 0 : M.cssVarPrefix) === $) && (eA = false);
      const Ae = L.jsxs(h.Fragment, {
        children: [
          L.jsx(ju, {
            themeId: X ? e : void 0,
            theme: sA,
            children: F
          }),
          eA && L.jsx(Qu, {
            styles: ((_d2 = sA.generateStyleSheets) == null ? void 0 : _d2.call(sA)) || []
          })
        ]
      });
      return nA ? Ae : L.jsx(s.Provider, {
        value: fA,
        children: Ae
      });
    }
    const g = typeof i == "string" ? i : i.light, p = typeof i == "string" ? i : i.dark;
    return {
      CssVarsProvider: f,
      useColorScheme: c,
      getInitColorSchemeScript: (m) => mB({
        colorSchemeStorageKey: n,
        defaultLightColorScheme: g,
        defaultDarkColorScheme: p,
        modeStorageKey: r,
        ...m
      })
    };
  }
  function FB(A = "") {
    function e(...r) {
      if (!r.length) return "";
      const n = r[0];
      return typeof n == "string" && !n.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${A ? `${A}-` : ""}${n}${e(...r.slice(1))})` : `, ${n}`;
    }
    return (r, ...n) => `var(--${A ? `${A}-` : ""}${r}${e(...n)})`;
  }
  const Ql = (A, e, t, r = []) => {
    let n = A;
    e.forEach((o, i) => {
      i === e.length - 1 ? Array.isArray(n) ? n[Number(o)] = t : n && typeof n == "object" && (n[o] = t) : n && typeof n == "object" && (n[o] || (n[o] = r.includes(o) ? [] : {}), n = n[o]);
    });
  }, UB = (A, e, t) => {
    function r(n, o = [], i = []) {
      Object.entries(n).forEach(([a, l]) => {
        (!t || t && !t([
          ...o,
          a
        ])) && l != null && (typeof l == "object" && Object.keys(l).length > 0 ? r(l, [
          ...o,
          a
        ], Array.isArray(l) ? [
          ...i,
          a
        ] : i) : e([
          ...o,
          a
        ], l, i));
      });
    }
    r(A);
  }, EB = (A, e) => typeof e == "number" ? [
    "lineHeight",
    "fontWeight",
    "opacity",
    "zIndex"
  ].some((r) => A.includes(r)) || A[A.length - 1].toLowerCase().includes("opacity") ? e : `${e}px` : e;
  function Ii(A, e) {
    const { prefix: t, shouldSkipGeneratingVar: r } = e || {}, n = {}, o = {}, i = {};
    return UB(A, (a, l, s) => {
      if ((typeof l == "string" || typeof l == "number") && (!r || !r(a, l))) {
        const c = `--${t ? `${t}-` : ""}${a.join("-")}`, d = EB(a, l);
        Object.assign(n, {
          [c]: d
        }), Ql(o, a, `var(${c})`, s), Ql(i, a, `var(${c}, ${d})`, s);
      }
    }, (a) => a[0] === "vars"), {
      css: n,
      vars: o,
      varsWithDefaults: i
    };
  }
  function SB(A, e = {}) {
    const { getSelector: t = Q, disableCssColorScheme: r, colorSchemeSelector: n } = e, { colorSchemes: o = {}, components: i, defaultColorScheme: a = "light", ...l } = A, { vars: s, css: c, varsWithDefaults: d } = Ii(l, e);
    let u = d;
    const f = {}, { [a]: g, ...p } = o;
    if (Object.entries(p || {}).forEach(([w, v]) => {
      const { vars: E, css: C, varsWithDefaults: x } = Ii(v, e);
      u = ZA(u, x), f[w] = {
        css: C,
        vars: E
      };
    }), g) {
      const { css: w, vars: v, varsWithDefaults: E } = Ii(g, e);
      u = ZA(u, E), f[a] = {
        css: w,
        vars: v
      };
    }
    function Q(w, v) {
      var _a2, _b2;
      let E = n;
      if (n === "class" && (E = ".%s"), n === "data" && (E = "[data-%s]"), (n == null ? void 0 : n.startsWith("data-")) && !n.includes("%s") && (E = `[${n}="%s"]`), w) {
        if (E === "media") return A.defaultColorScheme === w ? ":root" : {
          [`@media (prefers-color-scheme: ${((_b2 = (_a2 = o[w]) == null ? void 0 : _a2.palette) == null ? void 0 : _b2.mode) || w})`]: {
            ":root": v
          }
        };
        if (E) return A.defaultColorScheme === w ? `:root, ${E.replace("%s", String(w))}` : E.replace("%s", String(w));
      }
      return ":root";
    }
    return {
      vars: u,
      generateThemeVars: () => {
        let w = {
          ...s
        };
        return Object.entries(f).forEach(([, { vars: v }]) => {
          w = ZA(w, v);
        }), w;
      },
      generateStyleSheets: () => {
        var _a2, _b2;
        const w = [], v = A.defaultColorScheme || "light";
        function E(I, T) {
          Object.keys(T).length && w.push(typeof I == "string" ? {
            [I]: {
              ...T
            }
          } : I);
        }
        E(t(void 0, {
          ...c
        }), c);
        const { [v]: C, ...x } = f;
        if (C) {
          const { css: I } = C, T = (_b2 = (_a2 = o[v]) == null ? void 0 : _a2.palette) == null ? void 0 : _b2.mode, B = !r && T ? {
            colorScheme: T,
            ...I
          } : {
            ...I
          };
          E(t(v, {
            ...B
          }), B);
        }
        return Object.entries(x).forEach(([I, { css: T }]) => {
          var _a3, _b3;
          const B = (_b3 = (_a3 = o[I]) == null ? void 0 : _a3.palette) == null ? void 0 : _b3.mode, S = !r && B ? {
            colorScheme: B,
            ...T
          } : {
            ...T
          };
          E(t(I, {
            ...S
          }), S);
        }), w;
      }
    };
  }
  function xB(A) {
    return function(t) {
      return A === "media" ? `@media (prefers-color-scheme: ${t})` : A ? A.startsWith("data-") && !A.includes("%s") ? `[${A}="${t}"] &` : A === "class" ? `.${t} &` : A === "data" ? `[data-${t}] &` : `${A.replace("%s", t)} &` : "&";
    };
  }
  function Yu() {
    return {
      text: {
        primary: "rgba(0, 0, 0, 0.87)",
        secondary: "rgba(0, 0, 0, 0.6)",
        disabled: "rgba(0, 0, 0, 0.38)"
      },
      divider: "rgba(0, 0, 0, 0.12)",
      background: {
        paper: jr.white,
        default: jr.white
      },
      action: {
        active: "rgba(0, 0, 0, 0.54)",
        hover: "rgba(0, 0, 0, 0.04)",
        hoverOpacity: 0.04,
        selected: "rgba(0, 0, 0, 0.08)",
        selectedOpacity: 0.08,
        disabled: "rgba(0, 0, 0, 0.26)",
        disabledBackground: "rgba(0, 0, 0, 0.12)",
        disabledOpacity: 0.38,
        focus: "rgba(0, 0, 0, 0.12)",
        focusOpacity: 0.12,
        activatedOpacity: 0.12
      }
    };
  }
  const IB = Yu();
  function Zu() {
    return {
      text: {
        primary: jr.white,
        secondary: "rgba(255, 255, 255, 0.7)",
        disabled: "rgba(255, 255, 255, 0.5)",
        icon: "rgba(255, 255, 255, 0.5)"
      },
      divider: "rgba(255, 255, 255, 0.12)",
      background: {
        paper: "#121212",
        default: "#121212"
      },
      action: {
        active: jr.white,
        hover: "rgba(255, 255, 255, 0.08)",
        hoverOpacity: 0.08,
        selected: "rgba(255, 255, 255, 0.16)",
        selectedOpacity: 0.16,
        disabled: "rgba(255, 255, 255, 0.3)",
        disabledBackground: "rgba(255, 255, 255, 0.12)",
        disabledOpacity: 0.38,
        focus: "rgba(255, 255, 255, 0.12)",
        focusOpacity: 0.12,
        activatedOpacity: 0.24
      }
    };
  }
  const bl = Zu();
  function Fl(A, e, t, r) {
    const n = r.light || r, o = r.dark || r * 1.5;
    A[e] || (A.hasOwnProperty(t) ? A[e] = A[t] : e === "light" ? A.light = ys(A.main, n) : e === "dark" && (A.dark = vs(A.main, o)));
  }
  function HB(A = "light") {
    return A === "dark" ? {
      main: Nt[200],
      light: Nt[50],
      dark: Nt[400]
    } : {
      main: Nt[700],
      light: Nt[400],
      dark: Nt[800]
    };
  }
  function TB(A = "light") {
    return A === "dark" ? {
      main: _t[200],
      light: _t[50],
      dark: _t[400]
    } : {
      main: _t[500],
      light: _t[300],
      dark: _t[700]
    };
  }
  function LB(A = "light") {
    return A === "dark" ? {
      main: Pt[500],
      light: Pt[300],
      dark: Pt[700]
    } : {
      main: Pt[700],
      light: Pt[400],
      dark: Pt[800]
    };
  }
  function kB(A = "light") {
    return A === "dark" ? {
      main: Gt[400],
      light: Gt[300],
      dark: Gt[700]
    } : {
      main: Gt[700],
      light: Gt[500],
      dark: Gt[900]
    };
  }
  function RB(A = "light") {
    return A === "dark" ? {
      main: Vt[400],
      light: Vt[300],
      dark: Vt[700]
    } : {
      main: Vt[800],
      light: Vt[500],
      dark: Vt[900]
    };
  }
  function OB(A = "light") {
    return A === "dark" ? {
      main: wr[400],
      light: wr[300],
      dark: wr[700]
    } : {
      main: "#ed6c02",
      light: wr[500],
      dark: wr[900]
    };
  }
  function Es(A) {
    const { mode: e = "light", contrastThreshold: t = 3, tonalOffset: r = 0.2, ...n } = A, o = A.primary || HB(e), i = A.secondary || TB(e), a = A.error || LB(e), l = A.info || kB(e), s = A.success || RB(e), c = A.warning || OB(e);
    function d(p) {
      return Zp(p, bl.text.primary) >= t ? bl.text.primary : IB.text.primary;
    }
    const u = ({ color: p, name: Q, mainShade: m = 500, lightShade: F = 300, darkShade: w = 700 }) => {
      if (p = {
        ...p
      }, !p.main && p[m] && (p.main = p[m]), !p.hasOwnProperty("main")) throw new Error(et(11, Q ? ` (${Q})` : "", m));
      if (typeof p.main != "string") throw new Error(et(12, Q ? ` (${Q})` : "", JSON.stringify(p.main)));
      return Fl(p, "light", F, r), Fl(p, "dark", w, r), p.contrastText || (p.contrastText = d(p.main)), p;
    };
    let f;
    return e === "light" ? f = Yu() : e === "dark" && (f = Zu()), ZA({
      common: {
        ...jr
      },
      mode: e,
      primary: u({
        color: o,
        name: "primary"
      }),
      secondary: u({
        color: i,
        name: "secondary",
        mainShade: "A400",
        lightShade: "A200",
        darkShade: "A700"
      }),
      error: u({
        color: a,
        name: "error"
      }),
      warning: u({
        color: c,
        name: "warning"
      }),
      info: u({
        color: l,
        name: "info"
      }),
      success: u({
        color: s,
        name: "success"
      }),
      grey: kf,
      contrastThreshold: t,
      getContrastText: d,
      augmentColor: u,
      tonalOffset: r,
      ...f
    }, n);
  }
  function KB(A) {
    const e = {};
    return Object.entries(A).forEach((r) => {
      const [n, o] = r;
      typeof o == "object" && (e[n] = `${o.fontStyle ? `${o.fontStyle} ` : ""}${o.fontVariant ? `${o.fontVariant} ` : ""}${o.fontWeight ? `${o.fontWeight} ` : ""}${o.fontStretch ? `${o.fontStretch} ` : ""}${o.fontSize || ""}${o.lineHeight ? `/${o.lineHeight} ` : ""}${o.fontFamily || ""}`);
    }), e;
  }
  function MB(A, e) {
    return {
      toolbar: {
        minHeight: 56,
        [A.up("xs")]: {
          "@media (orientation: landscape)": {
            minHeight: 48
          }
        },
        [A.up("sm")]: {
          minHeight: 64
        }
      },
      ...e
    };
  }
  function DB(A) {
    return Math.round(A * 1e5) / 1e5;
  }
  const Ul = {
    textTransform: "uppercase"
  }, El = '"Roboto", "Helvetica", "Arial", sans-serif';
  function qu(A, e) {
    const { fontFamily: t = El, fontSize: r = 14, fontWeightLight: n = 300, fontWeightRegular: o = 400, fontWeightMedium: i = 500, fontWeightBold: a = 700, htmlFontSize: l = 16, allVariants: s, pxToRem: c, ...d } = typeof e == "function" ? e(A) : e, u = r / 14, f = c || ((Q) => `${Q / l * u}rem`), g = (Q, m, F, w, v) => ({
      fontFamily: t,
      fontWeight: Q,
      fontSize: f(m),
      lineHeight: F,
      ...t === El ? {
        letterSpacing: `${DB(w / m)}em`
      } : {},
      ...v,
      ...s
    }), p = {
      h1: g(n, 96, 1.167, -1.5),
      h2: g(n, 60, 1.2, -0.5),
      h3: g(o, 48, 1.167, 0),
      h4: g(o, 34, 1.235, 0.25),
      h5: g(o, 24, 1.334, 0),
      h6: g(i, 20, 1.6, 0.15),
      subtitle1: g(o, 16, 1.75, 0.15),
      subtitle2: g(i, 14, 1.57, 0.1),
      body1: g(o, 16, 1.5, 0.15),
      body2: g(o, 14, 1.43, 0.15),
      button: g(i, 14, 1.75, 0.4, Ul),
      caption: g(o, 12, 1.66, 0.4),
      overline: g(o, 12, 2.66, 1, Ul),
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit"
      }
    };
    return ZA({
      htmlFontSize: l,
      pxToRem: f,
      fontFamily: t,
      fontSize: r,
      fontWeightLight: n,
      fontWeightRegular: o,
      fontWeightMedium: i,
      fontWeightBold: a,
      ...p
    }, d, {
      clone: false
    });
  }
  const PB = 0.2, _B = 0.14, NB = 0.12;
  function LA(...A) {
    return [
      `${A[0]}px ${A[1]}px ${A[2]}px ${A[3]}px rgba(0,0,0,${PB})`,
      `${A[4]}px ${A[5]}px ${A[6]}px ${A[7]}px rgba(0,0,0,${_B})`,
      `${A[8]}px ${A[9]}px ${A[10]}px ${A[11]}px rgba(0,0,0,${NB})`
    ].join(",");
  }
  let GB, VB;
  GB = [
    "none",
    LA(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    LA(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    LA(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    LA(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    LA(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    LA(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    LA(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    LA(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    LA(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    LA(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    LA(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    LA(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    LA(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    LA(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    LA(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    LA(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    LA(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    LA(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    LA(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    LA(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    LA(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    LA(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    LA(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    LA(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)
  ];
  VB = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
  };
  $B = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195
  };
  function Sl(A) {
    return `${Math.round(A)}ms`;
  }
  function WB(A) {
    if (!A) return 0;
    const e = A / 36;
    return Math.min(Math.round((4 + 15 * e ** 0.25 + e / 5) * 10), 3e3);
  }
  function zB(A) {
    const e = {
      ...VB,
      ...A.easing
    }, t = {
      ...$B,
      ...A.duration
    };
    return {
      getAutoHeightDuration: WB,
      create: (n = [
        "all"
      ], o = {}) => {
        const { duration: i = t.standard, easing: a = e.easeInOut, delay: l = 0, ...s } = o;
        return (Array.isArray(n) ? n : [
          n
        ]).map((c) => `${c} ${typeof i == "string" ? i : Sl(i)} ${a} ${typeof l == "string" ? l : Sl(l)}`).join(",");
      },
      ...A,
      easing: e,
      duration: t
    };
  }
  const XB = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
  };
  function jB(A) {
    return Ne(A) || typeof A > "u" || typeof A == "string" || typeof A == "boolean" || typeof A == "number" || Array.isArray(A);
  }
  function Ad(A = {}) {
    const e = {
      ...A
    };
    function t(r) {
      const n = Object.entries(r);
      for (let o = 0; o < n.length; o++) {
        const [i, a] = n[o];
        !jB(a) || i.startsWith("unstable_") ? delete r[i] : Ne(a) && (r[i] = {
          ...a
        }, t(r[i]));
      }
    }
    return t(e), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(e, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
  }
  function ga(A = {}, ...e) {
    const { breakpoints: t, mixins: r = {}, spacing: n, palette: o = {}, transitions: i = {}, typography: a = {}, shape: l, ...s } = A;
    if (A.vars && A.generateThemeVars === void 0) throw new Error(et(20));
    const c = Es(o), d = hs(A);
    let u = ZA(d, {
      mixins: MB(d.breakpoints, r),
      palette: c,
      shadows: GB.slice(),
      typography: qu(c, a),
      transitions: zB(i),
      zIndex: {
        ...XB
      }
    });
    return u = ZA(u, s), u = e.reduce((f, g) => ZA(f, g), u), u.unstable_sxConfig = {
      ...cn,
      ...s == null ? void 0 : s.unstable_sxConfig
    }, u.unstable_sx = function(g) {
      return mt({
        sx: g,
        theme: this
      });
    }, u.toRuntimeSource = Ad, u;
  }
  function pa(A) {
    let e;
    return A < 1 ? e = 5.11916 * A ** 2 : e = 4.5 * Math.log(A + 1) + 2, Math.round(e * 10) / 1e3;
  }
  const JB = [
    ...Array(25)
  ].map((A, e) => {
    if (e === 0) return "none";
    const t = pa(e);
    return `linear-gradient(rgba(255 255 255 / ${t}), rgba(255 255 255 / ${t}))`;
  });
  function ed(A) {
    return {
      inputPlaceholder: A === "dark" ? 0.5 : 0.42,
      inputUnderline: A === "dark" ? 0.7 : 0.42,
      switchTrackDisabled: A === "dark" ? 0.2 : 0.12,
      switchTrack: A === "dark" ? 0.3 : 0.38
    };
  }
  function td(A) {
    return A === "dark" ? JB : [];
  }
  function YB(A) {
    const { palette: e = {
      mode: "light"
    }, opacity: t, overlays: r, ...n } = A, o = Es(e);
    return {
      palette: o,
      opacity: {
        ...ed(o.mode),
        ...t
      },
      overlays: r || td(o.mode),
      ...n
    };
  }
  function ZB(A) {
    var _a2;
    return !!A[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!A[0].match(/sxConfig$/) || A[0] === "palette" && !!((_a2 = A[1]) == null ? void 0 : _a2.match(/(mode|contrastThreshold|tonalOffset)/));
  }
  const qB = (A) => [
    ...[
      ...Array(25)
    ].map((e, t) => `--${A ? `${A}-` : ""}overlays-${t}`),
    `--${A ? `${A}-` : ""}palette-AppBar-darkBg`,
    `--${A ? `${A}-` : ""}palette-AppBar-darkColor`
  ], Ah = (A) => (e, t) => {
    const r = A.rootSelector || ":root", n = A.colorSchemeSelector;
    let o = n;
    if (n === "class" && (o = ".%s"), n === "data" && (o = "[data-%s]"), (n == null ? void 0 : n.startsWith("data-")) && !n.includes("%s") && (o = `[${n}="%s"]`), A.defaultColorScheme === e) {
      if (e === "dark") {
        const i = {};
        return qB(A.cssVarPrefix).forEach((a) => {
          i[a] = t[a], delete t[a];
        }), o === "media" ? {
          [r]: t,
          "@media (prefers-color-scheme: dark)": {
            [r]: i
          }
        } : o ? {
          [o.replace("%s", e)]: i,
          [`${r}, ${o.replace("%s", e)}`]: t
        } : {
          [r]: {
            ...t,
            ...i
          }
        };
      }
      if (o && o !== "media") return `${r}, ${o.replace("%s", String(e))}`;
    } else if (e) {
      if (o === "media") return {
        [`@media (prefers-color-scheme: ${String(e)})`]: {
          [r]: t
        }
      };
      if (o) return o.replace("%s", String(e));
    }
    return r;
  };
  function eh(A, e) {
    e.forEach((t) => {
      A[t] || (A[t] = {});
    });
  }
  function K(A, e, t) {
    !A[e] && t && (A[e] = t);
  }
  function Ir(A) {
    return typeof A != "string" || !A.startsWith("hsl") ? A : Ku(A);
  }
  function Je(A, e) {
    `${e}Channel` in A || (A[`${e}Channel`] = xr(Ir(A[e])));
  }
  function th(A) {
    return typeof A == "number" ? `${A}px` : typeof A == "string" || typeof A == "function" || Array.isArray(A) ? A : "8px";
  }
  const Re = (A) => {
    try {
      return A();
    } catch {
    }
  }, rh = (A = "mui") => FB(A);
  function Hi(A, e, t, r) {
    if (!e) return;
    e = e === true ? {} : e;
    const n = r === "dark" ? "dark" : "light";
    if (!t) {
      A[r] = YB({
        ...e,
        palette: {
          mode: n,
          ...e == null ? void 0 : e.palette
        }
      });
      return;
    }
    const { palette: o, ...i } = ga({
      ...t,
      palette: {
        mode: n,
        ...e == null ? void 0 : e.palette
      }
    });
    return A[r] = {
      ...e,
      palette: o,
      opacity: {
        ...ed(n),
        ...e == null ? void 0 : e.opacity
      },
      overlays: (e == null ? void 0 : e.overlays) || td(n)
    }, i;
  }
  function nh(A = {}, ...e) {
    const { colorSchemes: t = {
      light: true
    }, defaultColorScheme: r, disableCssColorScheme: n = false, cssVarPrefix: o = "mui", shouldSkipGeneratingVar: i = ZB, colorSchemeSelector: a = t.light && t.dark ? "media" : void 0, rootSelector: l = ":root", ...s } = A, c = Object.keys(t)[0], d = r || (t.light && c !== "light" ? "light" : c), u = rh(o), { [d]: f, light: g, dark: p, ...Q } = t, m = {
      ...Q
    };
    let F = f;
    if ((d === "dark" && !("dark" in t) || d === "light" && !("light" in t)) && (F = true), !F) throw new Error(et(21, d));
    const w = Hi(m, F, s, d);
    g && !m.light && Hi(m, g, void 0, "light"), p && !m.dark && Hi(m, p, void 0, "dark");
    let v = {
      defaultColorScheme: d,
      ...w,
      cssVarPrefix: o,
      colorSchemeSelector: a,
      rootSelector: l,
      getCssVar: u,
      colorSchemes: m,
      font: {
        ...KB(w.typography),
        ...w.font
      },
      spacing: th(s.spacing)
    };
    Object.keys(v.colorSchemes).forEach((T) => {
      const B = v.colorSchemes[T].palette, S = (D) => {
        const O = D.split("-"), N = O[1], k = O[2];
        return u(D, B[N][k]);
      };
      if (B.mode === "light" && (K(B.common, "background", "#fff"), K(B.common, "onBackground", "#000")), B.mode === "dark" && (K(B.common, "background", "#000"), K(B.common, "onBackground", "#fff")), eh(B, [
        "Alert",
        "AppBar",
        "Avatar",
        "Button",
        "Chip",
        "FilledInput",
        "LinearProgress",
        "Skeleton",
        "Slider",
        "SnackbarContent",
        "SpeedDialAction",
        "StepConnector",
        "StepContent",
        "Switch",
        "TableCell",
        "Tooltip"
      ]), B.mode === "light") {
        K(B.Alert, "errorColor", FA(B.error.light, 0.6)), K(B.Alert, "infoColor", FA(B.info.light, 0.6)), K(B.Alert, "successColor", FA(B.success.light, 0.6)), K(B.Alert, "warningColor", FA(B.warning.light, 0.6)), K(B.Alert, "errorFilledBg", S("palette-error-main")), K(B.Alert, "infoFilledBg", S("palette-info-main")), K(B.Alert, "successFilledBg", S("palette-success-main")), K(B.Alert, "warningFilledBg", S("palette-warning-main")), K(B.Alert, "errorFilledColor", Re(() => B.getContrastText(B.error.main))), K(B.Alert, "infoFilledColor", Re(() => B.getContrastText(B.info.main))), K(B.Alert, "successFilledColor", Re(() => B.getContrastText(B.success.main))), K(B.Alert, "warningFilledColor", Re(() => B.getContrastText(B.warning.main))), K(B.Alert, "errorStandardBg", UA(B.error.light, 0.9)), K(B.Alert, "infoStandardBg", UA(B.info.light, 0.9)), K(B.Alert, "successStandardBg", UA(B.success.light, 0.9)), K(B.Alert, "warningStandardBg", UA(B.warning.light, 0.9)), K(B.Alert, "errorIconColor", S("palette-error-main")), K(B.Alert, "infoIconColor", S("palette-info-main")), K(B.Alert, "successIconColor", S("palette-success-main")), K(B.Alert, "warningIconColor", S("palette-warning-main")), K(B.AppBar, "defaultBg", S("palette-grey-100")), K(B.Avatar, "defaultBg", S("palette-grey-400")), K(B.Button, "inheritContainedBg", S("palette-grey-300")), K(B.Button, "inheritContainedHoverBg", S("palette-grey-A100")), K(B.Chip, "defaultBorder", S("palette-grey-400")), K(B.Chip, "defaultAvatarColor", S("palette-grey-700")), K(B.Chip, "defaultIconColor", S("palette-grey-700")), K(B.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), K(B.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), K(B.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), K(B.LinearProgress, "primaryBg", UA(B.primary.main, 0.62)), K(B.LinearProgress, "secondaryBg", UA(B.secondary.main, 0.62)), K(B.LinearProgress, "errorBg", UA(B.error.main, 0.62)), K(B.LinearProgress, "infoBg", UA(B.info.main, 0.62)), K(B.LinearProgress, "successBg", UA(B.success.main, 0.62)), K(B.LinearProgress, "warningBg", UA(B.warning.main, 0.62)), K(B.Skeleton, "bg", `rgba(${S("palette-text-primaryChannel")} / 0.11)`), K(B.Slider, "primaryTrack", UA(B.primary.main, 0.62)), K(B.Slider, "secondaryTrack", UA(B.secondary.main, 0.62)), K(B.Slider, "errorTrack", UA(B.error.main, 0.62)), K(B.Slider, "infoTrack", UA(B.info.main, 0.62)), K(B.Slider, "successTrack", UA(B.success.main, 0.62)), K(B.Slider, "warningTrack", UA(B.warning.main, 0.62));
        const D = mn(B.background.default, 0.8);
        K(B.SnackbarContent, "bg", D), K(B.SnackbarContent, "color", Re(() => B.getContrastText(D))), K(B.SpeedDialAction, "fabHoverBg", mn(B.background.paper, 0.15)), K(B.StepConnector, "border", S("palette-grey-400")), K(B.StepContent, "border", S("palette-grey-400")), K(B.Switch, "defaultColor", S("palette-common-white")), K(B.Switch, "defaultDisabledColor", S("palette-grey-100")), K(B.Switch, "primaryDisabledColor", UA(B.primary.main, 0.62)), K(B.Switch, "secondaryDisabledColor", UA(B.secondary.main, 0.62)), K(B.Switch, "errorDisabledColor", UA(B.error.main, 0.62)), K(B.Switch, "infoDisabledColor", UA(B.info.main, 0.62)), K(B.Switch, "successDisabledColor", UA(B.success.main, 0.62)), K(B.Switch, "warningDisabledColor", UA(B.warning.main, 0.62)), K(B.TableCell, "border", UA(hn(B.divider, 1), 0.88)), K(B.Tooltip, "bg", hn(B.grey[700], 0.92));
      }
      if (B.mode === "dark") {
        K(B.Alert, "errorColor", UA(B.error.light, 0.6)), K(B.Alert, "infoColor", UA(B.info.light, 0.6)), K(B.Alert, "successColor", UA(B.success.light, 0.6)), K(B.Alert, "warningColor", UA(B.warning.light, 0.6)), K(B.Alert, "errorFilledBg", S("palette-error-dark")), K(B.Alert, "infoFilledBg", S("palette-info-dark")), K(B.Alert, "successFilledBg", S("palette-success-dark")), K(B.Alert, "warningFilledBg", S("palette-warning-dark")), K(B.Alert, "errorFilledColor", Re(() => B.getContrastText(B.error.dark))), K(B.Alert, "infoFilledColor", Re(() => B.getContrastText(B.info.dark))), K(B.Alert, "successFilledColor", Re(() => B.getContrastText(B.success.dark))), K(B.Alert, "warningFilledColor", Re(() => B.getContrastText(B.warning.dark))), K(B.Alert, "errorStandardBg", FA(B.error.light, 0.9)), K(B.Alert, "infoStandardBg", FA(B.info.light, 0.9)), K(B.Alert, "successStandardBg", FA(B.success.light, 0.9)), K(B.Alert, "warningStandardBg", FA(B.warning.light, 0.9)), K(B.Alert, "errorIconColor", S("palette-error-main")), K(B.Alert, "infoIconColor", S("palette-info-main")), K(B.Alert, "successIconColor", S("palette-success-main")), K(B.Alert, "warningIconColor", S("palette-warning-main")), K(B.AppBar, "defaultBg", S("palette-grey-900")), K(B.AppBar, "darkBg", S("palette-background-paper")), K(B.AppBar, "darkColor", S("palette-text-primary")), K(B.Avatar, "defaultBg", S("palette-grey-600")), K(B.Button, "inheritContainedBg", S("palette-grey-800")), K(B.Button, "inheritContainedHoverBg", S("palette-grey-700")), K(B.Chip, "defaultBorder", S("palette-grey-700")), K(B.Chip, "defaultAvatarColor", S("palette-grey-300")), K(B.Chip, "defaultIconColor", S("palette-grey-300")), K(B.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), K(B.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), K(B.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), K(B.LinearProgress, "primaryBg", FA(B.primary.main, 0.5)), K(B.LinearProgress, "secondaryBg", FA(B.secondary.main, 0.5)), K(B.LinearProgress, "errorBg", FA(B.error.main, 0.5)), K(B.LinearProgress, "infoBg", FA(B.info.main, 0.5)), K(B.LinearProgress, "successBg", FA(B.success.main, 0.5)), K(B.LinearProgress, "warningBg", FA(B.warning.main, 0.5)), K(B.Skeleton, "bg", `rgba(${S("palette-text-primaryChannel")} / 0.13)`), K(B.Slider, "primaryTrack", FA(B.primary.main, 0.5)), K(B.Slider, "secondaryTrack", FA(B.secondary.main, 0.5)), K(B.Slider, "errorTrack", FA(B.error.main, 0.5)), K(B.Slider, "infoTrack", FA(B.info.main, 0.5)), K(B.Slider, "successTrack", FA(B.success.main, 0.5)), K(B.Slider, "warningTrack", FA(B.warning.main, 0.5));
        const D = mn(B.background.default, 0.98);
        K(B.SnackbarContent, "bg", D), K(B.SnackbarContent, "color", Re(() => B.getContrastText(D))), K(B.SpeedDialAction, "fabHoverBg", mn(B.background.paper, 0.15)), K(B.StepConnector, "border", S("palette-grey-600")), K(B.StepContent, "border", S("palette-grey-600")), K(B.Switch, "defaultColor", S("palette-grey-300")), K(B.Switch, "defaultDisabledColor", S("palette-grey-600")), K(B.Switch, "primaryDisabledColor", FA(B.primary.main, 0.55)), K(B.Switch, "secondaryDisabledColor", FA(B.secondary.main, 0.55)), K(B.Switch, "errorDisabledColor", FA(B.error.main, 0.55)), K(B.Switch, "infoDisabledColor", FA(B.info.main, 0.55)), K(B.Switch, "successDisabledColor", FA(B.success.main, 0.55)), K(B.Switch, "warningDisabledColor", FA(B.warning.main, 0.55)), K(B.TableCell, "border", FA(hn(B.divider, 1), 0.68)), K(B.Tooltip, "bg", hn(B.grey[700], 0.92));
      }
      Je(B.background, "default"), Je(B.background, "paper"), Je(B.common, "background"), Je(B.common, "onBackground"), Je(B, "divider"), Object.keys(B).forEach((D) => {
        const O = B[D];
        D !== "tonalOffset" && O && typeof O == "object" && (O.main && K(B[D], "mainChannel", xr(Ir(O.main))), O.light && K(B[D], "lightChannel", xr(Ir(O.light))), O.dark && K(B[D], "darkChannel", xr(Ir(O.dark))), O.contrastText && K(B[D], "contrastTextChannel", xr(Ir(O.contrastText))), D === "text" && (Je(B[D], "primary"), Je(B[D], "secondary")), D === "action" && (O.active && Je(B[D], "active"), O.selected && Je(B[D], "selected")));
      });
    }), v = e.reduce((T, B) => ZA(T, B), v);
    const E = {
      prefix: o,
      disableCssColorScheme: n,
      shouldSkipGeneratingVar: i,
      getSelector: Ah(v)
    }, { vars: C, generateThemeVars: x, generateStyleSheets: I } = SB(v, E);
    return v.vars = C, Object.entries(v.colorSchemes[v.defaultColorScheme]).forEach(([T, B]) => {
      v[T] = B;
    }), v.generateThemeVars = x, v.generateStyleSheets = I, v.generateSpacing = function() {
      return Iu(s.spacing, ps(this));
    }, v.getColorSchemeSelector = xB(a), v.spacing = v.generateSpacing(), v.shouldSkipGeneratingVar = i, v.unstable_sxConfig = {
      ...cn,
      ...s == null ? void 0 : s.unstable_sxConfig
    }, v.unstable_sx = function(B) {
      return mt({
        sx: B,
        theme: this
      });
    }, v.toRuntimeSource = Ad, v;
  }
  function xl(A, e, t) {
    A.colorSchemes && t && (A.colorSchemes[e] = {
      ...t !== true && t,
      palette: Es({
        ...t === true ? {} : t.palette,
        mode: e
      })
    });
  }
  function li(A = {}, ...e) {
    const { palette: t, cssVariables: r = false, colorSchemes: n = t ? void 0 : {
      light: true
    }, defaultColorScheme: o = t == null ? void 0 : t.mode, ...i } = A, a = o || "light", l = n == null ? void 0 : n[a], s = {
      ...n,
      ...t ? {
        [a]: {
          ...typeof l != "boolean" && l,
          palette: t
        }
      } : void 0
    };
    if (r === false) {
      if (!("colorSchemes" in A)) return ga(A, ...e);
      let c = t;
      "palette" in A || s[a] && (s[a] !== true ? c = s[a].palette : a === "dark" && (c = {
        mode: "dark"
      }));
      const d = ga({
        ...A,
        palette: c
      }, ...e);
      return d.defaultColorScheme = a, d.colorSchemes = s, d.palette.mode === "light" && (d.colorSchemes.light = {
        ...s.light !== true && s.light,
        palette: d.palette
      }, xl(d, "dark", s.dark)), d.palette.mode === "dark" && (d.colorSchemes.dark = {
        ...s.dark !== true && s.dark,
        palette: d.palette
      }, xl(d, "light", s.light)), d;
    }
    return !t && !("light" in s) && a === "light" && (s.light = true), nh({
      ...i,
      colorSchemes: s,
      defaultColorScheme: a,
      ...typeof r != "boolean" && r
    }, ...e);
  }
  const Ss = li();
  xs = function() {
    const A = Cs(Ss);
    return A[Ve] || A;
  };
  rd = function(A) {
    return A !== "ownerState" && A !== "theme" && A !== "sx" && A !== "as";
  };
  We = (A) => rd(A) && A !== "classes";
  lA = Vp({
    themeId: Ve,
    defaultTheme: Ss,
    rootShouldForwardProp: We
  });
  function oh({ theme: A, ...e }) {
    const t = Ve in A ? A[Ve] : void 0;
    return L.jsx(ju, {
      ...e,
      themeId: t ? Ve : void 0,
      theme: t || A
    });
  }
  const Cn = {
    colorSchemeStorageKey: "mui-color-scheme",
    defaultLightColorScheme: "light",
    defaultDarkColorScheme: "dark",
    modeStorageKey: "mui-mode"
  }, { CssVarsProvider: ih } = bB({
    themeId: Ve,
    theme: () => li({
      cssVariables: true
    }),
    colorSchemeStorageKey: Cn.colorSchemeStorageKey,
    modeStorageKey: Cn.modeStorageKey,
    defaultColorScheme: {
      light: Cn.defaultLightColorScheme,
      dark: Cn.defaultDarkColorScheme
    },
    resolveTheme: (A) => {
      const e = {
        ...A,
        typography: qu(A.palette, A.typography)
      };
      return e.unstable_sx = function(r) {
        return mt({
          sx: r,
          theme: this
        });
      }, e;
    }
  }), ah = ih;
  nd = function({ theme: A, ...e }) {
    const t = h.useMemo(() => {
      if (typeof A == "function") return A;
      const r = Ve in A ? A[Ve] : A;
      return "colorSchemes" in r ? null : "vars" in r ? A : {
        ...A,
        vars: null
      };
    }, [
      A
    ]);
    return t ? L.jsx(oh, {
      theme: t,
      ...e
    }) : L.jsx(ah, {
      theme: A,
      ...e
    });
  };
  function sh(A) {
    return L.jsx(Hu, {
      ...A,
      defaultTheme: Ss,
      themeId: Ve
    });
  }
  function Is(A) {
    return function(t) {
      return L.jsx(sh, {
        styles: typeof A == "function" ? (r) => A({
          theme: r,
          ...t
        }) : A
      });
    };
  }
  function lh() {
    return Tu;
  }
  MA = BB;
  KA = function(A) {
    return gB(A);
  };
  function ch(A) {
    return RA("MuiSvgIcon", A);
  }
  HA("MuiSvgIcon", [
    "root",
    "colorPrimary",
    "colorSecondary",
    "colorAction",
    "colorError",
    "colorDisabled",
    "fontSizeInherit",
    "fontSizeSmall",
    "fontSizeMedium",
    "fontSizeLarge"
  ]);
  let uh, dh;
  uh = (A) => {
    const { color: e, fontSize: t, classes: r } = A, n = {
      root: [
        "root",
        e !== "inherit" && `color${mA(e)}`,
        `fontSize${mA(t)}`
      ]
    };
    return OA(n, ch, r);
  };
  dh = lA("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.root,
        t.color !== "inherit" && e[`color${mA(t.color)}`],
        e[`fontSize${mA(t.fontSize)}`]
      ];
    }
  })(MA(({ theme: A }) => {
    var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j, _k, _l2, _m2, _n2;
    return {
      userSelect: "none",
      width: "1em",
      height: "1em",
      display: "inline-block",
      flexShrink: 0,
      transition: (_d2 = (_a2 = A.transitions) == null ? void 0 : _a2.create) == null ? void 0 : _d2.call(_a2, "fill", {
        duration: (_c2 = (_b2 = (A.vars ?? A).transitions) == null ? void 0 : _b2.duration) == null ? void 0 : _c2.shorter
      }),
      variants: [
        {
          props: (e) => !e.hasSvgAsChild,
          style: {
            fill: "currentColor"
          }
        },
        {
          props: {
            fontSize: "inherit"
          },
          style: {
            fontSize: "inherit"
          }
        },
        {
          props: {
            fontSize: "small"
          },
          style: {
            fontSize: ((_f2 = (_e2 = A.typography) == null ? void 0 : _e2.pxToRem) == null ? void 0 : _f2.call(_e2, 20)) || "1.25rem"
          }
        },
        {
          props: {
            fontSize: "medium"
          },
          style: {
            fontSize: ((_h2 = (_g2 = A.typography) == null ? void 0 : _g2.pxToRem) == null ? void 0 : _h2.call(_g2, 24)) || "1.5rem"
          }
        },
        {
          props: {
            fontSize: "large"
          },
          style: {
            fontSize: ((_j = (_i2 = A.typography) == null ? void 0 : _i2.pxToRem) == null ? void 0 : _j.call(_i2, 35)) || "2.1875rem"
          }
        },
        ...Object.entries((A.vars ?? A).palette).filter(([, e]) => e && e.main).map(([e]) => {
          var _a3, _b3;
          return {
            props: {
              color: e
            },
            style: {
              color: (_b3 = (_a3 = (A.vars ?? A).palette) == null ? void 0 : _a3[e]) == null ? void 0 : _b3.main
            }
          };
        }),
        {
          props: {
            color: "action"
          },
          style: {
            color: (_l2 = (_k = (A.vars ?? A).palette) == null ? void 0 : _k.action) == null ? void 0 : _l2.active
          }
        },
        {
          props: {
            color: "disabled"
          },
          style: {
            color: (_n2 = (_m2 = (A.vars ?? A).palette) == null ? void 0 : _m2.action) == null ? void 0 : _n2.disabled
          }
        },
        {
          props: {
            color: "inherit"
          },
          style: {
            color: void 0
          }
        }
      ]
    };
  }));
  Ba = h.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiSvgIcon"
    }), { children: n, className: o, color: i = "inherit", component: a = "svg", fontSize: l = "medium", htmlColor: s, inheritViewBox: c = false, titleAccess: d, viewBox: u = "0 0 24 24", ...f } = r, g = h.isValidElement(n) && n.type === "svg", p = {
      ...r,
      color: i,
      component: a,
      fontSize: l,
      instanceFontSize: e.fontSize,
      inheritViewBox: c,
      viewBox: u,
      hasSvgAsChild: g
    }, Q = {};
    c || (Q.viewBox = u);
    const m = uh(p);
    return L.jsxs(dh, {
      as: a,
      className: pA(m.root, o),
      focusable: "false",
      color: s,
      "aria-hidden": d ? void 0 : true,
      role: d ? "img" : void 0,
      ref: t,
      ...Q,
      ...f,
      ...g && n.props,
      ownerState: p,
      children: [
        g ? n.props.children : n,
        d ? L.jsx("title", {
          children: d
        }) : null
      ]
    });
  });
  Ba.muiName = "SvgIcon";
  od = function(A, e) {
    function t(r, n) {
      return L.jsx(Ba, {
        "data-testid": `${e}Icon`,
        ref: n,
        ...r,
        children: A
      });
    }
    return t.muiName = Ba.muiName, h.memo(h.forwardRef(t));
  };
  fh = function(A, e) {
    if (!A) return e;
    if (typeof A == "function" || typeof e == "function") return (n) => {
      const o = typeof e == "function" ? e(n) : e, i = typeof A == "function" ? A({
        ...n,
        ...o
      }) : A, a = pA(n == null ? void 0 : n.className, o == null ? void 0 : o.className, i == null ? void 0 : i.className);
      return {
        ...o,
        ...i,
        ...!!a && {
          className: a
        },
        ...(o == null ? void 0 : o.style) && (i == null ? void 0 : i.style) && {
          style: {
            ...o.style,
            ...i.style
          }
        },
        ...(o == null ? void 0 : o.sx) && (i == null ? void 0 : i.sx) && {
          sx: [
            ...Array.isArray(o.sx) ? o.sx : [
              o.sx
            ],
            ...Array.isArray(i.sx) ? i.sx : [
              i.sx
            ]
          ]
        }
      };
    };
    const t = e, r = pA(t == null ? void 0 : t.className, A == null ? void 0 : A.className);
    return {
      ...e,
      ...A,
      ...!!r && {
        className: r
      },
      ...(t == null ? void 0 : t.style) && (A == null ? void 0 : A.style) && {
        style: {
          ...t.style,
          ...A.style
        }
      },
      ...(t == null ? void 0 : t.sx) && (A == null ? void 0 : A.sx) && {
        sx: [
          ...Array.isArray(t.sx) ? t.sx : [
            t.sx
          ],
          ...Array.isArray(A.sx) ? A.sx : [
            A.sx
          ]
        ]
      }
    };
  };
  function id(A, e) {
    if (A == null) return {};
    var t = {};
    for (var r in A) if ({}.hasOwnProperty.call(A, r)) {
      if (e.indexOf(r) !== -1) continue;
      t[r] = A[r];
    }
    return t;
  }
  function ha(A, e) {
    return ha = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, r) {
      return t.__proto__ = r, t;
    }, ha(A, e);
  }
  function ad(A, e) {
    A.prototype = Object.create(e.prototype), A.prototype.constructor = A, ha(A, e);
  }
  const { initPromise: gh } = Ef, ph = gh.then((A) => A.loadShare("react-dom", {
    customShareInfo: {
      shareConfig: {
        singleton: true,
        strictVersion: false,
        requiredVersion: "*"
      }
    }
  })), Bh = await ph.then((A) => A());
  Hs = Bh;
  const wn = qa(Hs), Il = {
    disabled: false
  }, lo = H.createContext(null);
  let hh, Hr, Ft, Ut, qt, ma;
  hh = function(e) {
    return e.scrollTop;
  };
  Hr = "unmounted";
  Ft = "exited";
  Ut = "entering";
  qt = "entered";
  ma = "exiting";
  ze = (function(A) {
    ad(e, A);
    function e(r, n) {
      var o;
      o = A.call(this, r, n) || this;
      var i = n, a = i && !i.isMounting ? r.enter : r.appear, l;
      return o.appearStatus = null, r.in ? a ? (l = Ft, o.appearStatus = Ut) : l = qt : r.unmountOnExit || r.mountOnEnter ? l = Hr : l = Ft, o.state = {
        status: l
      }, o.nextCallback = null, o;
    }
    e.getDerivedStateFromProps = function(n, o) {
      var i = n.in;
      return i && o.status === Hr ? {
        status: Ft
      } : null;
    };
    var t = e.prototype;
    return t.componentDidMount = function() {
      this.updateStatus(true, this.appearStatus);
    }, t.componentDidUpdate = function(n) {
      var o = null;
      if (n !== this.props) {
        var i = this.state.status;
        this.props.in ? i !== Ut && i !== qt && (o = Ut) : (i === Ut || i === qt) && (o = ma);
      }
      this.updateStatus(false, o);
    }, t.componentWillUnmount = function() {
      this.cancelNextCallback();
    }, t.getTimeouts = function() {
      var n = this.props.timeout, o, i, a;
      return o = i = a = n, n != null && typeof n != "number" && (o = n.exit, i = n.enter, a = n.appear !== void 0 ? n.appear : i), {
        exit: o,
        enter: i,
        appear: a
      };
    }, t.updateStatus = function(n, o) {
      if (n === void 0 && (n = false), o !== null) if (this.cancelNextCallback(), o === Ut) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var i = this.props.nodeRef ? this.props.nodeRef.current : wn.findDOMNode(this);
          i && hh(i);
        }
        this.performEnter(n);
      } else this.performExit();
      else this.props.unmountOnExit && this.state.status === Ft && this.setState({
        status: Hr
      });
    }, t.performEnter = function(n) {
      var o = this, i = this.props.enter, a = this.context ? this.context.isMounting : n, l = this.props.nodeRef ? [
        a
      ] : [
        wn.findDOMNode(this),
        a
      ], s = l[0], c = l[1], d = this.getTimeouts(), u = a ? d.appear : d.enter;
      if (!n && !i || Il.disabled) {
        this.safeSetState({
          status: qt
        }, function() {
          o.props.onEntered(s);
        });
        return;
      }
      this.props.onEnter(s, c), this.safeSetState({
        status: Ut
      }, function() {
        o.props.onEntering(s, c), o.onTransitionEnd(u, function() {
          o.safeSetState({
            status: qt
          }, function() {
            o.props.onEntered(s, c);
          });
        });
      });
    }, t.performExit = function() {
      var n = this, o = this.props.exit, i = this.getTimeouts(), a = this.props.nodeRef ? void 0 : wn.findDOMNode(this);
      if (!o || Il.disabled) {
        this.safeSetState({
          status: Ft
        }, function() {
          n.props.onExited(a);
        });
        return;
      }
      this.props.onExit(a), this.safeSetState({
        status: ma
      }, function() {
        n.props.onExiting(a), n.onTransitionEnd(i.exit, function() {
          n.safeSetState({
            status: Ft
          }, function() {
            n.props.onExited(a);
          });
        });
      });
    }, t.cancelNextCallback = function() {
      this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
    }, t.safeSetState = function(n, o) {
      o = this.setNextCallback(o), this.setState(n, o);
    }, t.setNextCallback = function(n) {
      var o = this, i = true;
      return this.nextCallback = function(a) {
        i && (i = false, o.nextCallback = null, n(a));
      }, this.nextCallback.cancel = function() {
        i = false;
      }, this.nextCallback;
    }, t.onTransitionEnd = function(n, o) {
      this.setNextCallback(o);
      var i = this.props.nodeRef ? this.props.nodeRef.current : wn.findDOMNode(this), a = n == null && !this.props.addEndListener;
      if (!i || a) {
        setTimeout(this.nextCallback, 0);
        return;
      }
      if (this.props.addEndListener) {
        var l = this.props.nodeRef ? [
          this.nextCallback
        ] : [
          i,
          this.nextCallback
        ], s = l[0], c = l[1];
        this.props.addEndListener(s, c);
      }
      n != null && setTimeout(this.nextCallback, n);
    }, t.render = function() {
      var n = this.state.status;
      if (n === Hr) return null;
      var o = this.props, i = o.children;
      o.in, o.mountOnEnter, o.unmountOnExit, o.appear, o.enter, o.exit, o.timeout, o.addEndListener, o.onEnter, o.onEntering, o.onEntered, o.onExit, o.onExiting, o.onExited, o.nodeRef;
      var a = id(o, [
        "children",
        "in",
        "mountOnEnter",
        "unmountOnExit",
        "appear",
        "enter",
        "exit",
        "timeout",
        "addEndListener",
        "onEnter",
        "onEntering",
        "onEntered",
        "onExit",
        "onExiting",
        "onExited",
        "nodeRef"
      ]);
      return H.createElement(lo.Provider, {
        value: null
      }, typeof i == "function" ? i(n, a) : H.cloneElement(H.Children.only(i), a));
    }, e;
  })(H.Component);
  ze.contextType = lo;
  ze.propTypes = {};
  function $t() {
  }
  ze.defaultProps = {
    in: false,
    mountOnEnter: false,
    unmountOnExit: false,
    appear: false,
    enter: true,
    exit: true,
    onEnter: $t,
    onEntering: $t,
    onEntered: $t,
    onExit: $t,
    onExiting: $t,
    onExited: $t
  };
  ze.UNMOUNTED = Hr;
  ze.EXITED = Ft;
  ze.ENTERING = Ut;
  ze.ENTERED = qt;
  ze.EXITING = ma;
  function mh(A) {
    if (A === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return A;
  }
  function Ts(A, e) {
    var t = function(o) {
      return e && h.isValidElement(o) ? e(o) : o;
    }, r = /* @__PURE__ */ Object.create(null);
    return A && h.Children.map(A, function(n) {
      return n;
    }).forEach(function(n) {
      r[n.key] = t(n);
    }), r;
  }
  function Ch(A, e) {
    A = A || {}, e = e || {};
    function t(c) {
      return c in e ? e[c] : A[c];
    }
    var r = /* @__PURE__ */ Object.create(null), n = [];
    for (var o in A) o in e ? n.length && (r[o] = n, n = []) : n.push(o);
    var i, a = {};
    for (var l in e) {
      if (r[l]) for (i = 0; i < r[l].length; i++) {
        var s = r[l][i];
        a[r[l][i]] = t(s);
      }
      a[l] = t(l);
    }
    for (i = 0; i < n.length; i++) a[n[i]] = t(n[i]);
    return a;
  }
  function Tt(A, e, t) {
    return t[e] != null ? t[e] : A.props[e];
  }
  function wh(A, e) {
    return Ts(A.children, function(t) {
      return h.cloneElement(t, {
        onExited: e.bind(null, t),
        in: true,
        appear: Tt(t, "appear", A),
        enter: Tt(t, "enter", A),
        exit: Tt(t, "exit", A)
      });
    });
  }
  function vh(A, e, t) {
    var r = Ts(A.children), n = Ch(e, r);
    return Object.keys(n).forEach(function(o) {
      var i = n[o];
      if (h.isValidElement(i)) {
        var a = o in e, l = o in r, s = e[o], c = h.isValidElement(s) && !s.props.in;
        l && (!a || c) ? n[o] = h.cloneElement(i, {
          onExited: t.bind(null, i),
          in: true,
          exit: Tt(i, "exit", A),
          enter: Tt(i, "enter", A)
        }) : !l && a && !c ? n[o] = h.cloneElement(i, {
          in: false
        }) : l && a && h.isValidElement(s) && (n[o] = h.cloneElement(i, {
          onExited: t.bind(null, i),
          in: s.props.in,
          exit: Tt(i, "exit", A),
          enter: Tt(i, "enter", A)
        }));
      }
    }), n;
  }
  var yh = Object.values || function(A) {
    return Object.keys(A).map(function(e) {
      return A[e];
    });
  }, Qh = {
    component: "div",
    childFactory: function(e) {
      return e;
    }
  }, Ls = (function(A) {
    ad(e, A);
    function e(r, n) {
      var o;
      o = A.call(this, r, n) || this;
      var i = o.handleExited.bind(mh(o));
      return o.state = {
        contextValue: {
          isMounting: true
        },
        handleExited: i,
        firstRender: true
      }, o;
    }
    var t = e.prototype;
    return t.componentDidMount = function() {
      this.mounted = true, this.setState({
        contextValue: {
          isMounting: false
        }
      });
    }, t.componentWillUnmount = function() {
      this.mounted = false;
    }, e.getDerivedStateFromProps = function(n, o) {
      var i = o.children, a = o.handleExited, l = o.firstRender;
      return {
        children: l ? wh(n, a) : vh(n, i, a),
        firstRender: false
      };
    }, t.handleExited = function(n, o) {
      var i = Ts(this.props.children);
      n.key in i || (n.props.onExited && n.props.onExited(o), this.mounted && this.setState(function(a) {
        var l = io({}, a.children);
        return delete l[n.key], {
          children: l
        };
      }));
    }, t.render = function() {
      var n = this.props, o = n.component, i = n.childFactory, a = id(n, [
        "component",
        "childFactory"
      ]), l = this.state.contextValue, s = yh(this.state.children).map(i);
      return delete a.appear, delete a.enter, delete a.exit, o === null ? H.createElement(lo.Provider, {
        value: l
      }, s) : H.createElement(lo.Provider, {
        value: l
      }, H.createElement(o, a, s));
    }, e;
  })(H.Component);
  Ls.propTypes = {};
  Ls.defaultProps = Qh;
  const sd = (A) => A.scrollTop;
  co = function(A, e) {
    const { timeout: t, easing: r, style: n = {} } = A;
    return {
      duration: n.transitionDuration ?? (typeof t == "number" ? t : t[e.mode] || 0),
      easing: n.transitionTimingFunction ?? (typeof r == "object" ? r[e.mode] : r),
      delay: n.transitionDelay
    };
  };
  function bh(A) {
    return RA("MuiPaper", A);
  }
  HA("MuiPaper", [
    "root",
    "rounded",
    "outlined",
    "elevation",
    "elevation0",
    "elevation1",
    "elevation2",
    "elevation3",
    "elevation4",
    "elevation5",
    "elevation6",
    "elevation7",
    "elevation8",
    "elevation9",
    "elevation10",
    "elevation11",
    "elevation12",
    "elevation13",
    "elevation14",
    "elevation15",
    "elevation16",
    "elevation17",
    "elevation18",
    "elevation19",
    "elevation20",
    "elevation21",
    "elevation22",
    "elevation23",
    "elevation24"
  ]);
  let Fh, Uh;
  Fh = (A) => {
    const { square: e, elevation: t, variant: r, classes: n } = A, o = {
      root: [
        "root",
        r,
        !e && "rounded",
        r === "elevation" && `elevation${t}`
      ]
    };
    return OA(o, bh, n);
  };
  Uh = lA("div", {
    name: "MuiPaper",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.root,
        e[t.variant],
        !t.square && e.rounded,
        t.variant === "elevation" && e[`elevation${t.elevation}`]
      ];
    }
  })(MA(({ theme: A }) => ({
    backgroundColor: (A.vars || A).palette.background.paper,
    color: (A.vars || A).palette.text.primary,
    transition: A.transitions.create("box-shadow"),
    variants: [
      {
        props: ({ ownerState: e }) => !e.square,
        style: {
          borderRadius: A.shape.borderRadius
        }
      },
      {
        props: {
          variant: "outlined"
        },
        style: {
          border: `1px solid ${(A.vars || A).palette.divider}`
        }
      },
      {
        props: {
          variant: "elevation"
        },
        style: {
          boxShadow: "var(--Paper-shadow)",
          backgroundImage: "var(--Paper-overlay)"
        }
      }
    ]
  })));
  Ca = h.forwardRef(function(e, t) {
    var _a2;
    const r = KA({
      props: e,
      name: "MuiPaper"
    }), n = xs(), { className: o, component: i = "div", elevation: a = 1, square: l = false, variant: s = "elevation", ...c } = r, d = {
      ...r,
      component: i,
      elevation: a,
      square: l,
      variant: s
    }, u = Fh(d);
    return L.jsx(Uh, {
      as: i,
      ownerState: d,
      className: pA(u.root, o),
      ref: t,
      ...c,
      style: {
        ...s === "elevation" && {
          "--Paper-shadow": (n.vars || n).shadows[a],
          ...n.vars && {
            "--Paper-overlay": (_a2 = n.vars.overlays) == null ? void 0 : _a2[a]
          },
          ...!n.vars && n.palette.mode === "dark" && {
            "--Paper-overlay": `linear-gradient(${lr("#fff", pa(a))}, ${lr("#fff", pa(a))})`
          }
        },
        ...c.style
      }
    });
  });
  ce = function(A, e) {
    const { className: t, elementType: r, ownerState: n, externalForwardedProps: o, internalForwardedProps: i, shouldForwardComponentProp: a = false, ...l } = e, { component: s, slots: c = {
      [A]: void 0
    }, slotProps: d = {
      [A]: void 0
    }, ...u } = o, f = c[A] || r, g = $u(d[A], n), { props: { component: p, ...Q }, internalRef: m } = Vu({
      className: t,
      ...l,
      externalForwardedProps: A === "root" ? u : void 0,
      externalSlotProps: g
    }), F = Be(m, g == null ? void 0 : g.ref, e.ref), w = A === "root" ? p || s : p, v = Nu(f, {
      ...A === "root" && !s && !c[A] && i,
      ...A !== "root" && !c[A] && i,
      ...Q,
      ...w && !a && {
        as: w
      },
      ...w && a && {
        component: w
      },
      ref: F
    }, n);
    return [
      f,
      v
    ];
  };
  class uo {
    static create() {
      return new uo();
    }
    static use() {
      const e = Du(uo.create).current, [t, r] = h.useState(false);
      return e.shouldMount = t, e.setShouldMount = r, h.useEffect(e.mountEffect, [
        t
      ]), e;
    }
    constructor() {
      this.ref = {
        current: null
      }, this.mounted = null, this.didMount = false, this.shouldMount = false, this.setShouldMount = null;
    }
    mount() {
      return this.mounted || (this.mounted = Sh(), this.shouldMount = true, this.setShouldMount(this.shouldMount)), this.mounted;
    }
    mountEffect = () => {
      this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = true, this.mounted.resolve());
    };
    start(...e) {
      this.mount().then(() => {
        var _a2;
        return (_a2 = this.ref.current) == null ? void 0 : _a2.start(...e);
      });
    }
    stop(...e) {
      this.mount().then(() => {
        var _a2;
        return (_a2 = this.ref.current) == null ? void 0 : _a2.stop(...e);
      });
    }
    pulsate(...e) {
      this.mount().then(() => {
        var _a2;
        return (_a2 = this.ref.current) == null ? void 0 : _a2.pulsate(...e);
      });
    }
  }
  function Eh() {
    return uo.use();
  }
  function Sh() {
    let A, e;
    const t = new Promise((r, n) => {
      A = r, e = n;
    });
    return t.resolve = A, t.reject = e, t;
  }
  function xh(A) {
    const { className: e, classes: t, pulsate: r = false, rippleX: n, rippleY: o, rippleSize: i, in: a, onExited: l, timeout: s } = A, [c, d] = h.useState(false), u = pA(e, t.ripple, t.rippleVisible, r && t.ripplePulsate), f = {
      width: i,
      height: i,
      top: -(i / 2) + o,
      left: -(i / 2) + n
    }, g = pA(t.child, c && t.childLeaving, r && t.childPulsate);
    return !a && !c && d(true), h.useEffect(() => {
      if (!a && l != null) {
        const p = setTimeout(l, s);
        return () => {
          clearTimeout(p);
        };
      }
    }, [
      l,
      a,
      s
    ]), L.jsx("span", {
      className: u,
      style: f,
      children: L.jsx("span", {
        className: g
      })
    });
  }
  const Qe = HA("MuiTouchRipple", [
    "root",
    "ripple",
    "rippleVisible",
    "ripplePulsate",
    "child",
    "childLeaving",
    "childPulsate"
  ]), wa = 550, Ih = 80, Hh = an`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, Th = an`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, Lh = an`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, kh = lA("span", {
    name: "MuiTouchRipple",
    slot: "Root"
  })({
    overflow: "hidden",
    pointerEvents: "none",
    position: "absolute",
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: "inherit"
  }), Rh = lA(xh, {
    name: "MuiTouchRipple",
    slot: "Ripple"
  })`
  opacity: 0;
  position: absolute;

  &.${Qe.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Hh};
    animation-duration: ${wa}ms;
    animation-timing-function: ${({ theme: A }) => A.transitions.easing.easeInOut};
  }

  &.${Qe.ripplePulsate} {
    animation-duration: ${({ theme: A }) => A.transitions.duration.shorter}ms;
  }

  & .${Qe.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Qe.childLeaving} {
    opacity: 0;
    animation-name: ${Th};
    animation-duration: ${wa}ms;
    animation-timing-function: ${({ theme: A }) => A.transitions.easing.easeInOut};
  }

  & .${Qe.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Lh};
    animation-duration: 2500ms;
    animation-timing-function: ${({ theme: A }) => A.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, Oh = h.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiTouchRipple"
    }), { center: n = false, classes: o = {}, className: i, ...a } = r, [l, s] = h.useState([]), c = h.useRef(0), d = h.useRef(null);
    h.useEffect(() => {
      d.current && (d.current(), d.current = null);
    }, [
      l
    ]);
    const u = h.useRef(false), f = Pu(), g = h.useRef(null), p = h.useRef(null), Q = h.useCallback((v) => {
      const { pulsate: E, rippleX: C, rippleY: x, rippleSize: I, cb: T } = v;
      s((B) => [
        ...B,
        L.jsx(Rh, {
          classes: {
            ripple: pA(o.ripple, Qe.ripple),
            rippleVisible: pA(o.rippleVisible, Qe.rippleVisible),
            ripplePulsate: pA(o.ripplePulsate, Qe.ripplePulsate),
            child: pA(o.child, Qe.child),
            childLeaving: pA(o.childLeaving, Qe.childLeaving),
            childPulsate: pA(o.childPulsate, Qe.childPulsate)
          },
          timeout: wa,
          pulsate: E,
          rippleX: C,
          rippleY: x,
          rippleSize: I
        }, c.current)
      ]), c.current += 1, d.current = T;
    }, [
      o
    ]), m = h.useCallback((v = {}, E = {}, C = () => {
    }) => {
      const { pulsate: x = false, center: I = n || E.pulsate, fakeElement: T = false } = E;
      if ((v == null ? void 0 : v.type) === "mousedown" && u.current) {
        u.current = false;
        return;
      }
      (v == null ? void 0 : v.type) === "touchstart" && (u.current = true);
      const B = T ? null : p.current, S = B ? B.getBoundingClientRect() : {
        width: 0,
        height: 0,
        left: 0,
        top: 0
      };
      let D, O, N;
      if (I || v === void 0 || v.clientX === 0 && v.clientY === 0 || !v.clientX && !v.touches) D = Math.round(S.width / 2), O = Math.round(S.height / 2);
      else {
        const { clientX: k, clientY: M } = v.touches && v.touches.length > 0 ? v.touches[0] : v;
        D = Math.round(k - S.left), O = Math.round(M - S.top);
      }
      if (I) N = Math.sqrt((2 * S.width ** 2 + S.height ** 2) / 3), N % 2 === 0 && (N += 1);
      else {
        const k = Math.max(Math.abs((B ? B.clientWidth : 0) - D), D) * 2 + 2, M = Math.max(Math.abs((B ? B.clientHeight : 0) - O), O) * 2 + 2;
        N = Math.sqrt(k ** 2 + M ** 2);
      }
      (v == null ? void 0 : v.touches) ? g.current === null && (g.current = () => {
        Q({
          pulsate: x,
          rippleX: D,
          rippleY: O,
          rippleSize: N,
          cb: C
        });
      }, f.start(Ih, () => {
        g.current && (g.current(), g.current = null);
      })) : Q({
        pulsate: x,
        rippleX: D,
        rippleY: O,
        rippleSize: N,
        cb: C
      });
    }, [
      n,
      Q,
      f
    ]), F = h.useCallback(() => {
      m({}, {
        pulsate: true
      });
    }, [
      m
    ]), w = h.useCallback((v, E) => {
      if (f.clear(), (v == null ? void 0 : v.type) === "touchend" && g.current) {
        g.current(), g.current = null, f.start(0, () => {
          w(v, E);
        });
        return;
      }
      g.current = null, s((C) => C.length > 0 ? C.slice(1) : C), d.current = E;
    }, [
      f
    ]);
    return h.useImperativeHandle(t, () => ({
      pulsate: F,
      start: m,
      stop: w
    }), [
      F,
      m,
      w
    ]), L.jsx(kh, {
      className: pA(Qe.root, o.root, i),
      ref: p,
      ...a,
      children: L.jsx(Ls, {
        component: null,
        exit: true,
        children: l
      })
    });
  });
  function Kh(A) {
    return RA("MuiButtonBase", A);
  }
  let Mh, Dh, Ph;
  Mh = HA("MuiButtonBase", [
    "root",
    "disabled",
    "focusVisible"
  ]);
  Dh = (A) => {
    const { disabled: e, focusVisible: t, focusVisibleClassName: r, classes: n } = A, i = OA({
      root: [
        "root",
        e && "disabled",
        t && "focusVisible"
      ]
    }, Kh, n);
    return t && r && (i.root += ` ${r}`), i;
  };
  Ph = lA("button", {
    name: "MuiButtonBase",
    slot: "Root",
    overridesResolver: (A, e) => e.root
  })({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    boxSizing: "border-box",
    WebkitTapHighlightColor: "transparent",
    backgroundColor: "transparent",
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    MozAppearance: "none",
    WebkitAppearance: "none",
    textDecoration: "none",
    color: "inherit",
    "&::-moz-focus-inner": {
      borderStyle: "none"
    },
    [`&.${Mh.disabled}`]: {
      pointerEvents: "none",
      cursor: "default"
    },
    "@media print": {
      colorAdjust: "exact"
    }
  });
  _h = h.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiButtonBase"
    }), { action: n, centerRipple: o = false, children: i, className: a, component: l = "button", disabled: s = false, disableRipple: c = false, disableTouchRipple: d = false, focusRipple: u = false, focusVisibleClassName: f, LinkComponent: g = "a", onBlur: p, onClick: Q, onContextMenu: m, onDragLeave: F, onFocus: w, onFocusVisible: v, onKeyDown: E, onKeyUp: C, onMouseDown: x, onMouseLeave: I, onMouseUp: T, onTouchEnd: B, onTouchMove: S, onTouchStart: D, tabIndex: O = 0, TouchRippleProps: N, touchRippleRef: k, type: M, ...W } = r, nA = h.useRef(null), P = Eh(), X = Be(P.ref, k), [AA, j] = h.useState(false);
    s && AA && j(false), h.useImperativeHandle(n, () => ({
      focusVisible: () => {
        j(true), nA.current.focus();
      }
    }), []);
    const R = P.shouldMount && !c && !s;
    h.useEffect(() => {
      AA && u && !c && P.pulsate();
    }, [
      c,
      u,
      AA,
      P
    ]);
    const $ = Ye(P, "start", x, d), V = Ye(P, "stop", m, d), Y = Ye(P, "stop", F, d), dA = Ye(P, "stop", T, d), iA = Ye(P, "stop", (eA) => {
      AA && eA.preventDefault(), I && I(eA);
    }, d), tA = Ye(P, "start", D, d), J = Ye(P, "stop", B, d), oA = Ye(P, "stop", S, d), aA = Ye(P, "stop", (eA) => {
      hl(eA.target) || j(false), p && p(eA);
    }, false), y = kt((eA) => {
      nA.current || (nA.current = eA.currentTarget), hl(eA.target) && (j(true), v && v(eA)), w && w(eA);
    }), U = () => {
      const eA = nA.current;
      return l && l !== "button" && !(eA.tagName === "A" && eA.href);
    }, b = kt((eA) => {
      u && !eA.repeat && AA && eA.key === " " && P.stop(eA, () => {
        P.start(eA);
      }), eA.target === eA.currentTarget && U() && eA.key === " " && eA.preventDefault(), E && E(eA), eA.target === eA.currentTarget && U() && eA.key === "Enter" && !s && (eA.preventDefault(), Q && Q(eA));
    }), _ = kt((eA) => {
      u && eA.key === " " && AA && !eA.defaultPrevented && P.stop(eA, () => {
        P.pulsate(eA);
      }), C && C(eA), Q && eA.target === eA.currentTarget && U() && eA.key === " " && !eA.defaultPrevented && Q(eA);
    });
    let z = l;
    z === "button" && (W.href || W.to) && (z = g);
    const G = {};
    z === "button" ? (G.type = M === void 0 ? "button" : M, G.disabled = s) : (!W.href && !W.to && (G.role = "button"), s && (G["aria-disabled"] = s));
    const sA = Be(t, nA), cA = {
      ...r,
      centerRipple: o,
      component: l,
      disabled: s,
      disableRipple: c,
      disableTouchRipple: d,
      focusRipple: u,
      tabIndex: O,
      focusVisible: AA
    }, fA = Dh(cA);
    return L.jsxs(Ph, {
      as: z,
      className: pA(fA.root, a),
      ownerState: cA,
      onBlur: aA,
      onClick: Q,
      onContextMenu: V,
      onFocus: y,
      onKeyDown: b,
      onKeyUp: _,
      onMouseDown: $,
      onMouseLeave: iA,
      onMouseUp: dA,
      onDragLeave: Y,
      onTouchEnd: J,
      onTouchMove: oA,
      onTouchStart: tA,
      ref: sA,
      tabIndex: s ? -1 : O,
      type: M,
      ...G,
      ...W,
      children: [
        i,
        R ? L.jsx(Oh, {
          ref: X,
          center: o,
          ...N
        }) : null
      ]
    });
  });
  function Ye(A, e, t, r = false) {
    return kt((n) => (t && t(n), r || A[e](n), true));
  }
  function Nh(A) {
    return typeof A.main == "string";
  }
  function Gh(A, e = []) {
    if (!Nh(A)) return false;
    for (const t of e) if (!A.hasOwnProperty(t) || typeof A[t] != "string") return false;
    return true;
  }
  wt = function(A = []) {
    return ([, e]) => e && Gh(e, A);
  };
  function Vh(A) {
    return RA("MuiCircularProgress", A);
  }
  HA("MuiCircularProgress", [
    "root",
    "determinate",
    "indeterminate",
    "colorPrimary",
    "colorSecondary",
    "svg",
    "circle",
    "circleDeterminate",
    "circleIndeterminate",
    "circleDisableShrink"
  ]);
  let at, va, ya, $h, Wh, zh, Xh, jh, Jh;
  at = 44;
  va = an`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;
  ya = an`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`;
  $h = typeof va != "string" ? cs`
        animation: ${va} 1.4s linear infinite;
      ` : null;
  Wh = typeof ya != "string" ? cs`
        animation: ${ya} 1.4s ease-in-out infinite;
      ` : null;
  zh = (A) => {
    const { classes: e, variant: t, color: r, disableShrink: n } = A, o = {
      root: [
        "root",
        t,
        `color${mA(r)}`
      ],
      svg: [
        "svg"
      ],
      circle: [
        "circle",
        `circle${mA(t)}`,
        n && "circleDisableShrink"
      ]
    };
    return OA(o, Vh, e);
  };
  Xh = lA("span", {
    name: "MuiCircularProgress",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.root,
        e[t.variant],
        e[`color${mA(t.color)}`]
      ];
    }
  })(MA(({ theme: A }) => ({
    display: "inline-block",
    variants: [
      {
        props: {
          variant: "determinate"
        },
        style: {
          transition: A.transitions.create("transform")
        }
      },
      {
        props: {
          variant: "indeterminate"
        },
        style: $h || {
          animation: `${va} 1.4s linear infinite`
        }
      },
      ...Object.entries(A.palette).filter(wt()).map(([e]) => ({
        props: {
          color: e
        },
        style: {
          color: (A.vars || A).palette[e].main
        }
      }))
    ]
  })));
  jh = lA("svg", {
    name: "MuiCircularProgress",
    slot: "Svg",
    overridesResolver: (A, e) => e.svg
  })({
    display: "block"
  });
  Jh = lA("circle", {
    name: "MuiCircularProgress",
    slot: "Circle",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.circle,
        e[`circle${mA(t.variant)}`],
        t.disableShrink && e.circleDisableShrink
      ];
    }
  })(MA(({ theme: A }) => ({
    stroke: "currentColor",
    variants: [
      {
        props: {
          variant: "determinate"
        },
        style: {
          transition: A.transitions.create("stroke-dashoffset")
        }
      },
      {
        props: {
          variant: "indeterminate"
        },
        style: {
          strokeDasharray: "80px, 200px",
          strokeDashoffset: 0
        }
      },
      {
        props: ({ ownerState: e }) => e.variant === "indeterminate" && !e.disableShrink,
        style: Wh || {
          animation: `${ya} 1.4s ease-in-out infinite`
        }
      }
    ]
  })));
  Yh = h.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiCircularProgress"
    }), { className: n, color: o = "primary", disableShrink: i = false, size: a = 40, style: l, thickness: s = 3.6, value: c = 0, variant: d = "indeterminate", ...u } = r, f = {
      ...r,
      color: o,
      disableShrink: i,
      size: a,
      thickness: s,
      value: c,
      variant: d
    }, g = zh(f), p = {}, Q = {}, m = {};
    if (d === "determinate") {
      const F = 2 * Math.PI * ((at - s) / 2);
      p.strokeDasharray = F.toFixed(3), m["aria-valuenow"] = Math.round(c), p.strokeDashoffset = `${((100 - c) / 100 * F).toFixed(3)}px`, Q.transform = "rotate(-90deg)";
    }
    return L.jsx(Xh, {
      className: pA(g.root, n),
      style: {
        width: a,
        height: a,
        ...Q,
        ...l
      },
      ownerState: f,
      ref: t,
      role: "progressbar",
      ...m,
      ...u,
      children: L.jsx(jh, {
        className: g.svg,
        ownerState: f,
        viewBox: `${at / 2} ${at / 2} ${at} ${at}`,
        children: L.jsx(Jh, {
          className: g.circle,
          style: p,
          ownerState: f,
          cx: at,
          cy: at,
          r: (at - s) / 2,
          fill: "none",
          strokeWidth: s
        })
      })
    });
  });
  function Zh(A) {
    return RA("MuiIconButton", A);
  }
  let Hl, qh, A0, e0;
  Hl = HA("MuiIconButton", [
    "root",
    "disabled",
    "colorInherit",
    "colorPrimary",
    "colorSecondary",
    "colorError",
    "colorInfo",
    "colorSuccess",
    "colorWarning",
    "edgeStart",
    "edgeEnd",
    "sizeSmall",
    "sizeMedium",
    "sizeLarge",
    "loading",
    "loadingIndicator",
    "loadingWrapper"
  ]);
  qh = (A) => {
    const { classes: e, disabled: t, color: r, edge: n, size: o, loading: i } = A, a = {
      root: [
        "root",
        i && "loading",
        t && "disabled",
        r !== "default" && `color${mA(r)}`,
        n && `edge${mA(n)}`,
        `size${mA(o)}`
      ],
      loadingIndicator: [
        "loadingIndicator"
      ],
      loadingWrapper: [
        "loadingWrapper"
      ]
    };
    return OA(a, Zh, e);
  };
  A0 = lA(_h, {
    name: "MuiIconButton",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.root,
        t.loading && e.loading,
        t.color !== "default" && e[`color${mA(t.color)}`],
        t.edge && e[`edge${mA(t.edge)}`],
        e[`size${mA(t.size)}`]
      ];
    }
  })(MA(({ theme: A }) => ({
    textAlign: "center",
    flex: "0 0 auto",
    fontSize: A.typography.pxToRem(24),
    padding: 8,
    borderRadius: "50%",
    color: (A.vars || A).palette.action.active,
    transition: A.transitions.create("background-color", {
      duration: A.transitions.duration.shortest
    }),
    variants: [
      {
        props: (e) => !e.disableRipple,
        style: {
          "--IconButton-hoverBg": A.vars ? `rgba(${A.vars.palette.action.activeChannel} / ${A.vars.palette.action.hoverOpacity})` : lr(A.palette.action.active, A.palette.action.hoverOpacity),
          "&:hover": {
            backgroundColor: "var(--IconButton-hoverBg)",
            "@media (hover: none)": {
              backgroundColor: "transparent"
            }
          }
        }
      },
      {
        props: {
          edge: "start"
        },
        style: {
          marginLeft: -12
        }
      },
      {
        props: {
          edge: "start",
          size: "small"
        },
        style: {
          marginLeft: -3
        }
      },
      {
        props: {
          edge: "end"
        },
        style: {
          marginRight: -12
        }
      },
      {
        props: {
          edge: "end",
          size: "small"
        },
        style: {
          marginRight: -3
        }
      }
    ]
  })), MA(({ theme: A }) => ({
    variants: [
      {
        props: {
          color: "inherit"
        },
        style: {
          color: "inherit"
        }
      },
      ...Object.entries(A.palette).filter(wt()).map(([e]) => ({
        props: {
          color: e
        },
        style: {
          color: (A.vars || A).palette[e].main
        }
      })),
      ...Object.entries(A.palette).filter(wt()).map(([e]) => ({
        props: {
          color: e
        },
        style: {
          "--IconButton-hoverBg": A.vars ? `rgba(${(A.vars || A).palette[e].mainChannel} / ${A.vars.palette.action.hoverOpacity})` : lr((A.vars || A).palette[e].main, A.palette.action.hoverOpacity)
        }
      })),
      {
        props: {
          size: "small"
        },
        style: {
          padding: 5,
          fontSize: A.typography.pxToRem(18)
        }
      },
      {
        props: {
          size: "large"
        },
        style: {
          padding: 12,
          fontSize: A.typography.pxToRem(28)
        }
      }
    ],
    [`&.${Hl.disabled}`]: {
      backgroundColor: "transparent",
      color: (A.vars || A).palette.action.disabled
    },
    [`&.${Hl.loading}`]: {
      color: "transparent"
    }
  })));
  e0 = lA("span", {
    name: "MuiIconButton",
    slot: "LoadingIndicator",
    overridesResolver: (A, e) => e.loadingIndicator
  })(({ theme: A }) => ({
    display: "none",
    position: "absolute",
    visibility: "visible",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: (A.vars || A).palette.action.disabled,
    variants: [
      {
        props: {
          loading: true
        },
        style: {
          display: "flex"
        }
      }
    ]
  }));
  t0 = h.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiIconButton"
    }), { edge: n = false, children: o, className: i, color: a = "default", disabled: l = false, disableFocusRipple: s = false, size: c = "medium", id: d, loading: u = null, loadingIndicator: f, ...g } = r, p = si(d), Q = f ?? L.jsx(Yh, {
      "aria-labelledby": p,
      color: "inherit",
      size: 16
    }), m = {
      ...r,
      edge: n,
      color: a,
      disabled: l,
      disableFocusRipple: s,
      loading: u,
      loadingIndicator: Q,
      size: c
    }, F = qh(m);
    return L.jsxs(A0, {
      id: u ? p : d,
      className: pA(F.root, i),
      centerRipple: true,
      focusRipple: !s,
      disabled: l || u,
      ref: t,
      ...g,
      ownerState: m,
      children: [
        typeof u == "boolean" && L.jsx("span", {
          className: F.loadingWrapper,
          style: {
            display: "contents"
          },
          children: L.jsx(e0, {
            className: F.loadingIndicator,
            ownerState: m,
            children: u && Q
          })
        }),
        o
      ]
    });
  });
  function r0(A) {
    return RA("MuiTypography", A);
  }
  let n0, o0, i0, a0, Tl;
  $U = HA("MuiTypography", [
    "root",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "subtitle1",
    "subtitle2",
    "body1",
    "body2",
    "inherit",
    "button",
    "caption",
    "overline",
    "alignLeft",
    "alignRight",
    "alignCenter",
    "alignJustify",
    "noWrap",
    "gutterBottom",
    "paragraph"
  ]);
  n0 = {
    primary: true,
    secondary: true,
    error: true,
    info: true,
    success: true,
    warning: true,
    textPrimary: true,
    textSecondary: true,
    textDisabled: true
  };
  o0 = lh();
  i0 = (A) => {
    const { align: e, gutterBottom: t, noWrap: r, paragraph: n, variant: o, classes: i } = A, a = {
      root: [
        "root",
        o,
        A.align !== "inherit" && `align${mA(e)}`,
        t && "gutterBottom",
        r && "noWrap",
        n && "paragraph"
      ]
    };
    return OA(a, r0, i);
  };
  a0 = lA("span", {
    name: "MuiTypography",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.root,
        t.variant && e[t.variant],
        t.align !== "inherit" && e[`align${mA(t.align)}`],
        t.noWrap && e.noWrap,
        t.gutterBottom && e.gutterBottom,
        t.paragraph && e.paragraph
      ];
    }
  })(MA(({ theme: A }) => {
    var _a2;
    return {
      margin: 0,
      variants: [
        {
          props: {
            variant: "inherit"
          },
          style: {
            font: "inherit",
            lineHeight: "inherit",
            letterSpacing: "inherit"
          }
        },
        ...Object.entries(A.typography).filter(([e, t]) => e !== "inherit" && t && typeof t == "object").map(([e, t]) => ({
          props: {
            variant: e
          },
          style: t
        })),
        ...Object.entries(A.palette).filter(wt()).map(([e]) => ({
          props: {
            color: e
          },
          style: {
            color: (A.vars || A).palette[e].main
          }
        })),
        ...Object.entries(((_a2 = A.palette) == null ? void 0 : _a2.text) || {}).filter(([, e]) => typeof e == "string").map(([e]) => ({
          props: {
            color: `text${mA(e)}`
          },
          style: {
            color: (A.vars || A).palette.text[e]
          }
        })),
        {
          props: ({ ownerState: e }) => e.align !== "inherit",
          style: {
            textAlign: "var(--Typography-textAlign)"
          }
        },
        {
          props: ({ ownerState: e }) => e.noWrap,
          style: {
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          }
        },
        {
          props: ({ ownerState: e }) => e.gutterBottom,
          style: {
            marginBottom: "0.35em"
          }
        },
        {
          props: ({ ownerState: e }) => e.paragraph,
          style: {
            marginBottom: 16
          }
        }
      ]
    };
  }));
  Tl = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    subtitle1: "h6",
    subtitle2: "h6",
    body1: "p",
    body2: "p",
    inherit: "p"
  };
  qn = h.forwardRef(function(e, t) {
    const { color: r, ...n } = KA({
      props: e,
      name: "MuiTypography"
    }), o = !n0[r], i = o0({
      ...n,
      ...o && {
        color: r
      }
    }), { align: a = "inherit", className: l, component: s, gutterBottom: c = false, noWrap: d = false, paragraph: u = false, variant: f = "body1", variantMapping: g = Tl, ...p } = i, Q = {
      ...i,
      align: a,
      color: r,
      className: l,
      component: s,
      gutterBottom: c,
      noWrap: d,
      paragraph: u,
      variant: f,
      variantMapping: g
    }, m = s || (u ? "p" : g[f] || Tl[f]) || "span", F = i0(Q);
    return L.jsx(a0, {
      as: m,
      ref: t,
      className: pA(F.root, l),
      ...p,
      ownerState: Q,
      style: {
        ...a !== "inherit" && {
          "--Typography-textAlign": a
        },
        ...p.style
      }
    });
  });
  function s0(A) {
    return typeof A == "function" ? A() : A;
  }
  l0 = h.forwardRef(function(e, t) {
    const { children: r, container: n, disablePortal: o = false } = e, [i, a] = h.useState(null), l = Be(h.isValidElement(r) ? un(r) : null, t);
    if (rt(() => {
      o || a(s0(n) || document.body);
    }, [
      n,
      o
    ]), rt(() => {
      if (i && !o) return dl(t, i), () => {
        dl(t, null);
      };
    }, [
      t,
      i,
      o
    ]), o) {
      if (h.isValidElement(r)) {
        const s = {
          ref: l
        };
        return h.cloneElement(r, s);
      }
      return r;
    }
    return i && Hs.createPortal(r, i);
  });
  function vn(A) {
    return parseInt(A, 10) || 0;
  }
  const c0 = {
    shadow: {
      visibility: "hidden",
      position: "absolute",
      overflow: "hidden",
      height: 0,
      top: 0,
      left: 0,
      transform: "translateZ(0)"
    }
  };
  function u0(A) {
    for (const e in A) return false;
    return true;
  }
  function Ll(A) {
    return u0(A) || A.outerHeightStyle === 0 && !A.overflowing;
  }
  const d0 = h.forwardRef(function(e, t) {
    const { onChange: r, maxRows: n, minRows: o = 1, style: i, value: a, ...l } = e, { current: s } = h.useRef(a != null), c = h.useRef(null), d = Be(t, c), u = h.useRef(null), f = h.useRef(null), g = h.useCallback(() => {
      const w = c.current, v = f.current;
      if (!w || !v) return;
      const C = nt(w).getComputedStyle(w);
      if (C.width === "0px") return {
        outerHeightStyle: 0,
        overflowing: false
      };
      v.style.width = C.width, v.value = w.value || e.placeholder || "x", v.value.slice(-1) === `
` && (v.value += " ");
      const x = C.boxSizing, I = vn(C.paddingBottom) + vn(C.paddingTop), T = vn(C.borderBottomWidth) + vn(C.borderTopWidth), B = v.scrollHeight;
      v.value = "x";
      const S = v.scrollHeight;
      let D = B;
      o && (D = Math.max(Number(o) * S, D)), n && (D = Math.min(Number(n) * S, D)), D = Math.max(D, S);
      const O = D + (x === "border-box" ? I + T : 0), N = Math.abs(D - B) <= 1;
      return {
        outerHeightStyle: O,
        overflowing: N
      };
    }, [
      n,
      o,
      e.placeholder
    ]), p = kt(() => {
      const w = c.current, v = g();
      if (!w || !v || Ll(v)) return false;
      const E = v.outerHeightStyle;
      return u.current != null && u.current !== E;
    }), Q = h.useCallback(() => {
      const w = c.current, v = g();
      if (!w || !v || Ll(v)) return;
      const E = v.outerHeightStyle;
      u.current !== E && (u.current = E, w.style.height = `${E}px`), w.style.overflow = v.overflowing ? "hidden" : "";
    }, [
      g
    ]), m = h.useRef(-1);
    rt(() => {
      const w = Mu(Q), v = c == null ? void 0 : c.current;
      if (!v) return;
      const E = nt(v);
      E.addEventListener("resize", w);
      let C;
      return typeof ResizeObserver < "u" && (C = new ResizeObserver(() => {
        p() && (C.unobserve(v), cancelAnimationFrame(m.current), Q(), m.current = requestAnimationFrame(() => {
          C.observe(v);
        }));
      }), C.observe(v)), () => {
        w.clear(), cancelAnimationFrame(m.current), E.removeEventListener("resize", w), C && C.disconnect();
      };
    }, [
      g,
      Q,
      p
    ]), rt(() => {
      Q();
    });
    const F = (w) => {
      s || Q(), r && r(w);
    };
    return L.jsxs(h.Fragment, {
      children: [
        L.jsx("textarea", {
          value: a,
          onChange: F,
          ref: d,
          rows: o,
          style: i,
          ...l
        }),
        L.jsx("textarea", {
          "aria-hidden": true,
          className: e.className,
          readOnly: true,
          ref: f,
          tabIndex: -1,
          style: {
            ...c0.shadow,
            ...i,
            paddingTop: 0,
            paddingBottom: 0
          }
        })
      ]
    });
  });
  Qa = function(A) {
    return typeof A == "string";
  };
  pr = function({ props: A, states: e, muiFormControl: t }) {
    return e.reduce((r, n) => (r[n] = A[n], t && typeof A[n] > "u" && (r[n] = t[n]), r), {});
  };
  ks = h.createContext(void 0);
  Br = function() {
    return h.useContext(ks);
  };
  function kl(A) {
    return A != null && !(Array.isArray(A) && A.length === 0);
  }
  function fo(A, e = false) {
    return A && (kl(A.value) && A.value !== "" || e && kl(A.defaultValue) && A.defaultValue !== "");
  }
  function f0(A) {
    return A.startAdornment;
  }
  function g0(A) {
    return RA("MuiInputBase", A);
  }
  const cr = HA("MuiInputBase", [
    "root",
    "formControl",
    "focused",
    "disabled",
    "adornedStart",
    "adornedEnd",
    "error",
    "sizeSmall",
    "multiline",
    "colorSecondary",
    "fullWidth",
    "hiddenLabel",
    "readOnly",
    "input",
    "inputSizeSmall",
    "inputMultiline",
    "inputTypeSearch",
    "inputAdornedStart",
    "inputAdornedEnd",
    "inputHiddenLabel"
  ]);
  var Rl;
  let ci, ui, p0, di, fi, Ol;
  ci = (A, e) => {
    const { ownerState: t } = A;
    return [
      e.root,
      t.formControl && e.formControl,
      t.startAdornment && e.adornedStart,
      t.endAdornment && e.adornedEnd,
      t.error && e.error,
      t.size === "small" && e.sizeSmall,
      t.multiline && e.multiline,
      t.color && e[`color${mA(t.color)}`],
      t.fullWidth && e.fullWidth,
      t.hiddenLabel && e.hiddenLabel
    ];
  };
  ui = (A, e) => {
    const { ownerState: t } = A;
    return [
      e.input,
      t.size === "small" && e.inputSizeSmall,
      t.multiline && e.inputMultiline,
      t.type === "search" && e.inputTypeSearch,
      t.startAdornment && e.inputAdornedStart,
      t.endAdornment && e.inputAdornedEnd,
      t.hiddenLabel && e.inputHiddenLabel
    ];
  };
  p0 = (A) => {
    const { classes: e, color: t, disabled: r, error: n, endAdornment: o, focused: i, formControl: a, fullWidth: l, hiddenLabel: s, multiline: c, readOnly: d, size: u, startAdornment: f, type: g } = A, p = {
      root: [
        "root",
        `color${mA(t)}`,
        r && "disabled",
        n && "error",
        l && "fullWidth",
        i && "focused",
        a && "formControl",
        u && u !== "medium" && `size${mA(u)}`,
        c && "multiline",
        f && "adornedStart",
        o && "adornedEnd",
        s && "hiddenLabel",
        d && "readOnly"
      ],
      input: [
        "input",
        r && "disabled",
        g === "search" && "inputTypeSearch",
        c && "inputMultiline",
        u === "small" && "inputSizeSmall",
        s && "inputHiddenLabel",
        f && "inputAdornedStart",
        o && "inputAdornedEnd",
        d && "readOnly"
      ]
    };
    return OA(p, g0, e);
  };
  di = lA("div", {
    name: "MuiInputBase",
    slot: "Root",
    overridesResolver: ci
  })(MA(({ theme: A }) => ({
    ...A.typography.body1,
    color: (A.vars || A).palette.text.primary,
    lineHeight: "1.4375em",
    boxSizing: "border-box",
    position: "relative",
    cursor: "text",
    display: "inline-flex",
    alignItems: "center",
    [`&.${cr.disabled}`]: {
      color: (A.vars || A).palette.text.disabled,
      cursor: "default"
    },
    variants: [
      {
        props: ({ ownerState: e }) => e.multiline,
        style: {
          padding: "4px 0 5px"
        }
      },
      {
        props: ({ ownerState: e, size: t }) => e.multiline && t === "small",
        style: {
          paddingTop: 1
        }
      },
      {
        props: ({ ownerState: e }) => e.fullWidth,
        style: {
          width: "100%"
        }
      }
    ]
  })));
  fi = lA("input", {
    name: "MuiInputBase",
    slot: "Input",
    overridesResolver: ui
  })(MA(({ theme: A }) => {
    const e = A.palette.mode === "light", t = {
      color: "currentColor",
      ...A.vars ? {
        opacity: A.vars.opacity.inputPlaceholder
      } : {
        opacity: e ? 0.42 : 0.5
      },
      transition: A.transitions.create("opacity", {
        duration: A.transitions.duration.shorter
      })
    }, r = {
      opacity: "0 !important"
    }, n = A.vars ? {
      opacity: A.vars.opacity.inputPlaceholder
    } : {
      opacity: e ? 0.42 : 0.5
    };
    return {
      font: "inherit",
      letterSpacing: "inherit",
      color: "currentColor",
      padding: "4px 0 5px",
      border: 0,
      boxSizing: "content-box",
      background: "none",
      height: "1.4375em",
      margin: 0,
      WebkitTapHighlightColor: "transparent",
      display: "block",
      minWidth: 0,
      width: "100%",
      "&::-webkit-input-placeholder": t,
      "&::-moz-placeholder": t,
      "&::-ms-input-placeholder": t,
      "&:focus": {
        outline: 0
      },
      "&:invalid": {
        boxShadow: "none"
      },
      "&::-webkit-search-decoration": {
        WebkitAppearance: "none"
      },
      [`label[data-shrink=false] + .${cr.formControl} &`]: {
        "&::-webkit-input-placeholder": r,
        "&::-moz-placeholder": r,
        "&::-ms-input-placeholder": r,
        "&:focus::-webkit-input-placeholder": n,
        "&:focus::-moz-placeholder": n,
        "&:focus::-ms-input-placeholder": n
      },
      [`&.${cr.disabled}`]: {
        opacity: 1,
        WebkitTextFillColor: (A.vars || A).palette.text.disabled
      },
      variants: [
        {
          props: ({ ownerState: o }) => !o.disableInjectingGlobalStyles,
          style: {
            animationName: "mui-auto-fill-cancel",
            animationDuration: "10ms",
            "&:-webkit-autofill": {
              animationDuration: "5000s",
              animationName: "mui-auto-fill"
            }
          }
        },
        {
          props: {
            size: "small"
          },
          style: {
            paddingTop: 1
          }
        },
        {
          props: ({ ownerState: o }) => o.multiline,
          style: {
            height: "auto",
            resize: "none",
            padding: 0,
            paddingTop: 0
          }
        },
        {
          props: {
            type: "search"
          },
          style: {
            MozAppearance: "textfield"
          }
        }
      ]
    };
  }));
  Ol = Is({
    "@keyframes mui-auto-fill": {
      from: {
        display: "block"
      }
    },
    "@keyframes mui-auto-fill-cancel": {
      from: {
        display: "block"
      }
    }
  });
  Rs = h.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiInputBase"
    }), { "aria-describedby": n, autoComplete: o, autoFocus: i, className: a, color: l, components: s = {}, componentsProps: c = {}, defaultValue: d, disabled: u, disableInjectingGlobalStyles: f, endAdornment: g, error: p, fullWidth: Q = false, id: m, inputComponent: F = "input", inputProps: w = {}, inputRef: v, margin: E, maxRows: C, minRows: x, multiline: I = false, name: T, onBlur: B, onChange: S, onClick: D, onFocus: O, onKeyDown: N, onKeyUp: k, placeholder: M, readOnly: W, renderSuffix: nA, rows: P, size: X, slotProps: AA = {}, slots: j = {}, startAdornment: R, type: $ = "text", value: V, ...Y } = r, dA = w.value != null ? w.value : V, { current: iA } = h.useRef(dA != null), tA = h.useRef(), J = h.useCallback((TA) => {
    }, []), oA = Be(tA, v, w.ref, J), [aA, y] = h.useState(false), U = Br(), b = pr({
      props: r,
      muiFormControl: U,
      states: [
        "color",
        "disabled",
        "error",
        "hiddenLabel",
        "size",
        "required",
        "filled"
      ]
    });
    b.focused = U ? U.focused : aA, h.useEffect(() => {
      !U && u && aA && (y(false), B && B());
    }, [
      U,
      u,
      aA,
      B
    ]);
    const _ = U && U.onFilled, z = U && U.onEmpty, G = h.useCallback((TA) => {
      fo(TA) ? _ && _() : z && z();
    }, [
      _,
      z
    ]);
    rt(() => {
      iA && G({
        value: dA
      });
    }, [
      dA,
      G,
      iA
    ]);
    const sA = (TA) => {
      O && O(TA), w.onFocus && w.onFocus(TA), U && U.onFocus ? U.onFocus(TA) : y(true);
    }, cA = (TA) => {
      B && B(TA), w.onBlur && w.onBlur(TA), U && U.onBlur ? U.onBlur(TA) : y(false);
    }, fA = (TA, ...Mt) => {
      if (!iA) {
        const Cr = TA.target || tA.current;
        if (Cr == null) throw new Error(et(1));
        G({
          value: Cr.value
        });
      }
      w.onChange && w.onChange(TA, ...Mt), S && S(TA, ...Mt);
    };
    h.useEffect(() => {
      G(tA.current);
    }, []);
    const eA = (TA) => {
      tA.current && TA.currentTarget === TA.target && tA.current.focus(), D && D(TA);
    };
    let Ae = F, gA = w;
    I && Ae === "input" && (P ? gA = {
      type: void 0,
      minRows: P,
      maxRows: P,
      ...gA
    } : gA = {
      type: void 0,
      maxRows: C,
      minRows: x,
      ...gA
    }, Ae = d0);
    const _A = (TA) => {
      G(TA.animationName === "mui-auto-fill-cancel" ? tA.current : {
        value: "x"
      });
    };
    h.useEffect(() => {
      U && U.setAdornedStart(!!R);
    }, [
      U,
      R
    ]);
    const zA = {
      ...r,
      color: b.color || "primary",
      disabled: b.disabled,
      endAdornment: g,
      error: b.error,
      focused: b.focused,
      formControl: U,
      fullWidth: Q,
      hiddenLabel: b.hiddenLabel,
      multiline: I,
      size: b.size,
      startAdornment: R,
      type: $
    }, ie = p0(zA), jA = j.root || s.Root || di, it = AA.root || c.root || {}, yt = j.input || s.Input || fi;
    return gA = {
      ...gA,
      ...AA.input ?? c.input
    }, L.jsxs(h.Fragment, {
      children: [
        !f && typeof Ol == "function" && (Rl || (Rl = L.jsx(Ol, {}))),
        L.jsxs(jA, {
          ...it,
          ref: t,
          onClick: eA,
          ...Y,
          ...!Qa(jA) && {
            ownerState: {
              ...zA,
              ...it.ownerState
            }
          },
          className: pA(ie.root, it.className, a, W && "MuiInputBase-readOnly"),
          children: [
            R,
            L.jsx(ks.Provider, {
              value: null,
              children: L.jsx(yt, {
                "aria-invalid": b.error,
                "aria-describedby": n,
                autoComplete: o,
                autoFocus: i,
                defaultValue: d,
                disabled: b.disabled,
                id: m,
                onAnimationStart: _A,
                name: T,
                placeholder: M,
                readOnly: W,
                required: b.required,
                rows: P,
                value: dA,
                onKeyDown: N,
                onKeyUp: k,
                type: $,
                ...gA,
                ...!Qa(yt) && {
                  as: Ae,
                  ownerState: {
                    ...zA,
                    ...gA.ownerState
                  }
                },
                ref: oA,
                className: pA(ie.input, gA.className, W && "MuiInputBase-readOnly"),
                onBlur: cA,
                onChange: fA,
                onFocus: sA
              })
            }),
            g,
            nA ? nA({
              ...b,
              startAdornment: R
            }) : null
          ]
        })
      ]
    });
  });
  function B0(A) {
    return RA("MuiInput", A);
  }
  const yr = {
    ...cr,
    ...HA("MuiInput", [
      "root",
      "underline",
      "input"
    ])
  };
  function h0(A) {
    return RA("MuiOutlinedInput", A);
  }
  const Oe = {
    ...cr,
    ...HA("MuiOutlinedInput", [
      "root",
      "notchedOutline",
      "input"
    ])
  };
  function m0(A) {
    return RA("MuiFilledInput", A);
  }
  let Qt, C0, w0;
  Qt = {
    ...cr,
    ...HA("MuiFilledInput", [
      "root",
      "underline",
      "input",
      "adornedStart",
      "adornedEnd",
      "sizeSmall",
      "multiline",
      "hiddenLabel"
    ])
  };
  C0 = od(L.jsx("path", {
    d: "M7 10l5 5 5-5z"
  }), "ArrowDropDown");
  w0 = {
    entering: {
      opacity: 1
    },
    entered: {
      opacity: 1
    }
  };
  v0 = h.forwardRef(function(e, t) {
    const r = xs(), n = {
      enter: r.transitions.duration.enteringScreen,
      exit: r.transitions.duration.leavingScreen
    }, { addEndListener: o, appear: i = true, children: a, easing: l, in: s, onEnter: c, onEntered: d, onEntering: u, onExit: f, onExited: g, onExiting: p, style: Q, timeout: m = n, TransitionComponent: F = ze, ...w } = e, v = h.useRef(null), E = Be(v, un(a), t), C = (N) => (k) => {
      if (N) {
        const M = v.current;
        k === void 0 ? N(M) : N(M, k);
      }
    }, x = C(u), I = C((N, k) => {
      sd(N);
      const M = co({
        style: Q,
        timeout: m,
        easing: l
      }, {
        mode: "enter"
      });
      N.style.webkitTransition = r.transitions.create("opacity", M), N.style.transition = r.transitions.create("opacity", M), c && c(N, k);
    }), T = C(d), B = C(p), S = C((N) => {
      const k = co({
        style: Q,
        timeout: m,
        easing: l
      }, {
        mode: "exit"
      });
      N.style.webkitTransition = r.transitions.create("opacity", k), N.style.transition = r.transitions.create("opacity", k), f && f(N);
    }), D = C(g), O = (N) => {
      o && o(v.current, N);
    };
    return L.jsx(F, {
      appear: i,
      in: s,
      nodeRef: v,
      onEnter: I,
      onEntered: T,
      onEntering: x,
      onExit: S,
      onExited: D,
      onExiting: B,
      addEndListener: O,
      timeout: m,
      ...w,
      children: (N, { ownerState: k, ...M }) => h.cloneElement(a, {
        style: {
          opacity: 0,
          visibility: N === "exited" && !s ? "hidden" : void 0,
          ...w0[N],
          ...Q,
          ...a.props.style
        },
        ref: E,
        ...M
      })
    });
  });
  function y0(A) {
    return RA("MuiBackdrop", A);
  }
  HA("MuiBackdrop", [
    "root",
    "invisible"
  ]);
  let Q0, b0, U0, E0, ba, S0, x0, ld, Ao, I0, H0;
  Q0 = (A) => {
    const { classes: e, invisible: t } = A;
    return OA({
      root: [
        "root",
        t && "invisible"
      ]
    }, y0, e);
  };
  b0 = lA("div", {
    name: "MuiBackdrop",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.root,
        t.invisible && e.invisible
      ];
    }
  })({
    position: "fixed",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    WebkitTapHighlightColor: "transparent",
    variants: [
      {
        props: {
          invisible: true
        },
        style: {
          backgroundColor: "transparent"
        }
      }
    ]
  });
  F0 = h.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiBackdrop"
    }), { children: n, className: o, component: i = "div", invisible: a = false, open: l, components: s = {}, componentsProps: c = {}, slotProps: d = {}, slots: u = {}, TransitionComponent: f, transitionDuration: g, ...p } = r, Q = {
      ...r,
      component: i,
      invisible: a
    }, m = Q0(Q), F = {
      transition: f,
      root: s.Root,
      ...u
    }, w = {
      ...c,
      ...d
    }, v = {
      slots: F,
      slotProps: w
    }, [E, C] = ce("root", {
      elementType: b0,
      externalForwardedProps: v,
      className: pA(m.root, o),
      ownerState: Q
    }), [x, I] = ce("transition", {
      elementType: v0,
      externalForwardedProps: v,
      ownerState: Q
    });
    return L.jsx(x, {
      in: l,
      timeout: g,
      ...p,
      ...I,
      children: L.jsx(E, {
        "aria-hidden": true,
        ...C,
        classes: m,
        ref: t,
        children: n
      })
    });
  });
  U0 = HA("MuiBox", [
    "root"
  ]);
  E0 = li();
  Te = Dp({
    themeId: Ve,
    defaultTheme: E0,
    defaultClassName: U0.root,
    generateClassName: Lu.generate
  });
  ba = typeof Is({}) == "function";
  S0 = (A, e) => ({
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    boxSizing: "border-box",
    WebkitTextSizeAdjust: "100%",
    ...e && !A.vars && {
      colorScheme: A.palette.mode
    }
  });
  x0 = (A) => ({
    color: (A.vars || A).palette.text.primary,
    ...A.typography.body1,
    backgroundColor: (A.vars || A).palette.background.default,
    "@media print": {
      backgroundColor: (A.vars || A).palette.common.white
    }
  });
  ld = (A, e = false) => {
    var _a2, _b2;
    const t = {};
    e && A.colorSchemes && typeof A.getColorSchemeSelector == "function" && Object.entries(A.colorSchemes).forEach(([o, i]) => {
      var _a3, _b3;
      const a = A.getColorSchemeSelector(o);
      a.startsWith("@") ? t[a] = {
        ":root": {
          colorScheme: (_a3 = i.palette) == null ? void 0 : _a3.mode
        }
      } : t[a.replace(/\s*&/, "")] = {
        colorScheme: (_b3 = i.palette) == null ? void 0 : _b3.mode
      };
    });
    let r = {
      html: S0(A, e),
      "*, *::before, *::after": {
        boxSizing: "inherit"
      },
      "strong, b": {
        fontWeight: A.typography.fontWeightBold
      },
      body: {
        margin: 0,
        ...x0(A),
        "&::backdrop": {
          backgroundColor: (A.vars || A).palette.background.default
        }
      },
      ...t
    };
    const n = (_b2 = (_a2 = A.components) == null ? void 0 : _a2.MuiCssBaseline) == null ? void 0 : _b2.styleOverrides;
    return n && (r = [
      r,
      n
    ]), r;
  };
  Ao = "mui-ecs";
  I0 = (A) => {
    const e = ld(A, false), t = Array.isArray(e) ? e[0] : e;
    return !A.vars && t && (t.html[`:root:has(${Ao})`] = {
      colorScheme: A.palette.mode
    }), A.colorSchemes && Object.entries(A.colorSchemes).forEach(([r, n]) => {
      var _a2, _b2;
      const o = A.getColorSchemeSelector(r);
      o.startsWith("@") ? t[o] = {
        [`:root:not(:has(.${Ao}))`]: {
          colorScheme: (_a2 = n.palette) == null ? void 0 : _a2.mode
        }
      } : t[o.replace(/\s*&/, "")] = {
        [`&:not(:has(.${Ao}))`]: {
          colorScheme: (_b2 = n.palette) == null ? void 0 : _b2.mode
        }
      };
    }), e;
  };
  H0 = Is(ba ? ({ theme: A, enableColorScheme: e }) => ld(A, e) : ({ theme: A }) => I0(A));
  function T0(A) {
    const e = KA({
      props: A,
      name: "MuiCssBaseline"
    }), { children: t, enableColorScheme: r = false } = e;
    return L.jsxs(h.Fragment, {
      children: [
        ba && L.jsx(H0, {
          enableColorScheme: r
        }),
        !ba && !r && L.jsx("span", {
          className: Ao,
          style: {
            display: "none"
          }
        }),
        t
      ]
    });
  }
  function L0(A) {
    const e = Le(A);
    return e.body === A ? nt(A).innerWidth > e.documentElement.clientWidth : A.scrollHeight > A.clientHeight;
  }
  function _r(A, e) {
    e ? A.setAttribute("aria-hidden", "true") : A.removeAttribute("aria-hidden");
  }
  function Kl(A) {
    return parseInt(nt(A).getComputedStyle(A).paddingRight, 10) || 0;
  }
  function k0(A) {
    const t = [
      "TEMPLATE",
      "SCRIPT",
      "STYLE",
      "LINK",
      "MAP",
      "META",
      "NOSCRIPT",
      "PICTURE",
      "COL",
      "COLGROUP",
      "PARAM",
      "SLOT",
      "SOURCE",
      "TRACK"
    ].includes(A.tagName), r = A.tagName === "INPUT" && A.getAttribute("type") === "hidden";
    return t || r;
  }
  function Ml(A, e, t, r, n) {
    const o = [
      e,
      t,
      ...r
    ];
    [].forEach.call(A.children, (i) => {
      const a = !o.includes(i), l = !k0(i);
      a && l && _r(i, n);
    });
  }
  function Ti(A, e) {
    let t = -1;
    return A.some((r, n) => e(r) ? (t = n, true) : false), t;
  }
  function R0(A, e) {
    const t = [], r = A.container;
    if (!e.disableScrollLock) {
      if (L0(r)) {
        const i = _u(nt(r));
        t.push({
          value: r.style.paddingRight,
          property: "padding-right",
          el: r
        }), r.style.paddingRight = `${Kl(r) + i}px`;
        const a = Le(r).querySelectorAll(".mui-fixed");
        [].forEach.call(a, (l) => {
          t.push({
            value: l.style.paddingRight,
            property: "padding-right",
            el: l
          }), l.style.paddingRight = `${Kl(l) + i}px`;
        });
      }
      let o;
      if (r.parentNode instanceof DocumentFragment) o = Le(r).body;
      else {
        const i = r.parentElement, a = nt(r);
        o = (i == null ? void 0 : i.nodeName) === "HTML" && a.getComputedStyle(i).overflowY === "scroll" ? i : r;
      }
      t.push({
        value: o.style.overflow,
        property: "overflow",
        el: o
      }, {
        value: o.style.overflowX,
        property: "overflow-x",
        el: o
      }, {
        value: o.style.overflowY,
        property: "overflow-y",
        el: o
      }), o.style.overflow = "hidden";
    }
    return () => {
      t.forEach(({ value: o, el: i, property: a }) => {
        o ? i.style.setProperty(a, o) : i.style.removeProperty(a);
      });
    };
  }
  function O0(A) {
    const e = [];
    return [].forEach.call(A.children, (t) => {
      t.getAttribute("aria-hidden") === "true" && e.push(t);
    }), e;
  }
  class K0 {
    constructor() {
      this.modals = [], this.containers = [];
    }
    add(e, t) {
      let r = this.modals.indexOf(e);
      if (r !== -1) return r;
      r = this.modals.length, this.modals.push(e), e.modalRef && _r(e.modalRef, false);
      const n = O0(t);
      Ml(t, e.mount, e.modalRef, n, true);
      const o = Ti(this.containers, (i) => i.container === t);
      return o !== -1 ? (this.containers[o].modals.push(e), r) : (this.containers.push({
        modals: [
          e
        ],
        container: t,
        restore: null,
        hiddenSiblings: n
      }), r);
    }
    mount(e, t) {
      const r = Ti(this.containers, (o) => o.modals.includes(e)), n = this.containers[r];
      n.restore || (n.restore = R0(n, t));
    }
    remove(e, t = true) {
      const r = this.modals.indexOf(e);
      if (r === -1) return r;
      const n = Ti(this.containers, (i) => i.modals.includes(e)), o = this.containers[n];
      if (o.modals.splice(o.modals.indexOf(e), 1), this.modals.splice(r, 1), o.modals.length === 0) o.restore && o.restore(), e.modalRef && _r(e.modalRef, t), Ml(o.container, e.mount, e.modalRef, o.hiddenSiblings, false), this.containers.splice(n, 1);
      else {
        const i = o.modals[o.modals.length - 1];
        i.modalRef && _r(i.modalRef, false);
      }
      return r;
    }
    isTopModal(e) {
      return this.modals.length > 0 && this.modals[this.modals.length - 1] === e;
    }
  }
  const M0 = [
    "input",
    "select",
    "textarea",
    "a[href]",
    "button",
    "[tabindex]",
    "audio[controls]",
    "video[controls]",
    '[contenteditable]:not([contenteditable="false"])'
  ].join(",");
  function D0(A) {
    const e = parseInt(A.getAttribute("tabindex") || "", 10);
    return Number.isNaN(e) ? A.contentEditable === "true" || (A.nodeName === "AUDIO" || A.nodeName === "VIDEO" || A.nodeName === "DETAILS") && A.getAttribute("tabindex") === null ? 0 : A.tabIndex : e;
  }
  function P0(A) {
    if (A.tagName !== "INPUT" || A.type !== "radio" || !A.name) return false;
    const e = (r) => A.ownerDocument.querySelector(`input[type="radio"]${r}`);
    let t = e(`[name="${A.name}"]:checked`);
    return t || (t = e(`[name="${A.name}"]`)), t !== A;
  }
  function _0(A) {
    return !(A.disabled || A.tagName === "INPUT" && A.type === "hidden" || P0(A));
  }
  function N0(A) {
    const e = [], t = [];
    return Array.from(A.querySelectorAll(M0)).forEach((r, n) => {
      const o = D0(r);
      o === -1 || !_0(r) || (o === 0 ? e.push(r) : t.push({
        documentOrder: n,
        tabIndex: o,
        node: r
      }));
    }), t.sort((r, n) => r.tabIndex === n.tabIndex ? r.documentOrder - n.documentOrder : r.tabIndex - n.tabIndex).map((r) => r.node).concat(e);
  }
  function G0() {
    return true;
  }
  function V0(A) {
    const { children: e, disableAutoFocus: t = false, disableEnforceFocus: r = false, disableRestoreFocus: n = false, getTabbable: o = N0, isEnabled: i = G0, open: a } = A, l = h.useRef(false), s = h.useRef(null), c = h.useRef(null), d = h.useRef(null), u = h.useRef(null), f = h.useRef(false), g = h.useRef(null), p = Be(un(e), g), Q = h.useRef(null);
    h.useEffect(() => {
      !a || !g.current || (f.current = !t);
    }, [
      t,
      a
    ]), h.useEffect(() => {
      if (!a || !g.current) return;
      const w = Le(g.current);
      return g.current.contains(w.activeElement) || (g.current.hasAttribute("tabIndex") || g.current.setAttribute("tabIndex", "-1"), f.current && g.current.focus()), () => {
        n || (d.current && d.current.focus && (l.current = true, d.current.focus()), d.current = null);
      };
    }, [
      a
    ]), h.useEffect(() => {
      if (!a || !g.current) return;
      const w = Le(g.current), v = (x) => {
        Q.current = x, !(r || !i() || x.key !== "Tab") && w.activeElement === g.current && x.shiftKey && (l.current = true, c.current && c.current.focus());
      }, E = () => {
        var _a2, _b2;
        const x = g.current;
        if (x === null) return;
        if (!w.hasFocus() || !i() || l.current) {
          l.current = false;
          return;
        }
        if (x.contains(w.activeElement) || r && w.activeElement !== s.current && w.activeElement !== c.current) return;
        if (w.activeElement !== u.current) u.current = null;
        else if (u.current !== null) return;
        if (!f.current) return;
        let I = [];
        if ((w.activeElement === s.current || w.activeElement === c.current) && (I = o(g.current)), I.length > 0) {
          const T = !!(((_a2 = Q.current) == null ? void 0 : _a2.shiftKey) && ((_b2 = Q.current) == null ? void 0 : _b2.key) === "Tab"), B = I[0], S = I[I.length - 1];
          typeof B != "string" && typeof S != "string" && (T ? S.focus() : B.focus());
        } else x.focus();
      };
      w.addEventListener("focusin", E), w.addEventListener("keydown", v, true);
      const C = setInterval(() => {
        w.activeElement && w.activeElement.tagName === "BODY" && E();
      }, 50);
      return () => {
        clearInterval(C), w.removeEventListener("focusin", E), w.removeEventListener("keydown", v, true);
      };
    }, [
      t,
      r,
      n,
      i,
      a,
      o
    ]);
    const m = (w) => {
      d.current === null && (d.current = w.relatedTarget), f.current = true, u.current = w.target;
      const v = e.props.onFocus;
      v && v(w);
    }, F = (w) => {
      d.current === null && (d.current = w.relatedTarget), f.current = true;
    };
    return L.jsxs(h.Fragment, {
      children: [
        L.jsx("div", {
          tabIndex: a ? 0 : -1,
          onFocus: F,
          ref: s,
          "data-testid": "sentinelStart"
        }),
        h.cloneElement(e, {
          ref: p,
          onFocus: m
        }),
        L.jsx("div", {
          tabIndex: a ? 0 : -1,
          onFocus: F,
          ref: c,
          "data-testid": "sentinelEnd"
        })
      ]
    });
  }
  function $0(A) {
    return typeof A == "function" ? A() : A;
  }
  function W0(A) {
    return A ? A.props.hasOwnProperty("in") : false;
  }
  const Dl = () => {
  }, yn = new K0();
  function z0(A) {
    const { container: e, disableEscapeKeyDown: t = false, disableScrollLock: r = false, closeAfterTransition: n = false, onTransitionEnter: o, onTransitionExited: i, children: a, onClose: l, open: s, rootRef: c } = A, d = h.useRef({}), u = h.useRef(null), f = h.useRef(null), g = Be(f, c), [p, Q] = h.useState(!s), m = W0(a);
    let F = true;
    (A["aria-hidden"] === "false" || A["aria-hidden"] === false) && (F = false);
    const w = () => Le(u.current), v = () => (d.current.modalRef = f.current, d.current.mount = u.current, d.current), E = () => {
      yn.mount(v(), {
        disableScrollLock: r
      }), f.current && (f.current.scrollTop = 0);
    }, C = kt(() => {
      const k = $0(e) || w().body;
      yn.add(v(), k), f.current && E();
    }), x = () => yn.isTopModal(v()), I = kt((k) => {
      u.current = k, k && (s && x() ? E() : f.current && _r(f.current, F));
    }), T = h.useCallback(() => {
      yn.remove(v(), F);
    }, [
      F
    ]);
    h.useEffect(() => () => {
      T();
    }, [
      T
    ]), h.useEffect(() => {
      s ? C() : (!m || !n) && T();
    }, [
      s,
      T,
      m,
      n,
      C
    ]);
    const B = (k) => (M) => {
      var _a2;
      (_a2 = k.onKeyDown) == null ? void 0 : _a2.call(k, M), !(M.key !== "Escape" || M.which === 229 || !x()) && (t || (M.stopPropagation(), l && l(M, "escapeKeyDown")));
    }, S = (k) => (M) => {
      var _a2;
      (_a2 = k.onClick) == null ? void 0 : _a2.call(k, M), M.target === M.currentTarget && l && l(M, "backdropClick");
    };
    return {
      getRootProps: (k = {}) => {
        const M = Gu(A);
        delete M.onTransitionEnter, delete M.onTransitionExited;
        const W = {
          ...M,
          ...k
        };
        return {
          role: "presentation",
          ...W,
          onKeyDown: B(W),
          ref: g
        };
      },
      getBackdropProps: (k = {}) => {
        const M = k;
        return {
          "aria-hidden": true,
          ...M,
          onClick: S(M),
          open: s
        };
      },
      getTransitionProps: () => {
        const k = () => {
          Q(false), o && o();
        }, M = () => {
          Q(true), i && i(), n && T();
        };
        return {
          onEnter: ul(k, (a == null ? void 0 : a.props.onEnter) ?? Dl),
          onExited: ul(M, (a == null ? void 0 : a.props.onExited) ?? Dl)
        };
      },
      rootRef: g,
      portalRef: I,
      isTopModal: x,
      exited: p,
      hasTransition: m
    };
  }
  function X0(A) {
    return RA("MuiModal", A);
  }
  HA("MuiModal", [
    "root",
    "hidden",
    "backdrop"
  ]);
  let j0, J0, Y0;
  j0 = (A) => {
    const { open: e, exited: t, classes: r } = A;
    return OA({
      root: [
        "root",
        !e && t && "hidden"
      ],
      backdrop: [
        "backdrop"
      ]
    }, X0, r);
  };
  J0 = lA("div", {
    name: "MuiModal",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.root,
        !t.open && t.exited && e.hidden
      ];
    }
  })(MA(({ theme: A }) => ({
    position: "fixed",
    zIndex: (A.vars || A).zIndex.modal,
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    variants: [
      {
        props: ({ ownerState: e }) => !e.open && e.exited,
        style: {
          visibility: "hidden"
        }
      }
    ]
  })));
  Y0 = lA(F0, {
    name: "MuiModal",
    slot: "Backdrop",
    overridesResolver: (A, e) => e.backdrop
  })({
    zIndex: -1
  });
  Z0 = h.forwardRef(function(e, t) {
    const r = KA({
      name: "MuiModal",
      props: e
    }), { BackdropComponent: n = Y0, BackdropProps: o, classes: i, className: a, closeAfterTransition: l = false, children: s, container: c, component: d, components: u = {}, componentsProps: f = {}, disableAutoFocus: g = false, disableEnforceFocus: p = false, disableEscapeKeyDown: Q = false, disablePortal: m = false, disableRestoreFocus: F = false, disableScrollLock: w = false, hideBackdrop: v = false, keepMounted: E = false, onBackdropClick: C, onClose: x, onTransitionEnter: I, onTransitionExited: T, open: B, slotProps: S = {}, slots: D = {}, theme: O, ...N } = r, k = {
      ...r,
      closeAfterTransition: l,
      disableAutoFocus: g,
      disableEnforceFocus: p,
      disableEscapeKeyDown: Q,
      disablePortal: m,
      disableRestoreFocus: F,
      disableScrollLock: w,
      hideBackdrop: v,
      keepMounted: E
    }, { getRootProps: M, getBackdropProps: W, getTransitionProps: nA, portalRef: P, isTopModal: X, exited: AA, hasTransition: j } = z0({
      ...k,
      rootRef: t
    }), R = {
      ...k,
      exited: AA
    }, $ = j0(R), V = {};
    if (s.props.tabIndex === void 0 && (V.tabIndex = "-1"), j) {
      const { onEnter: oA, onExited: aA } = nA();
      V.onEnter = oA, V.onExited = aA;
    }
    const Y = {
      slots: {
        root: u.Root,
        backdrop: u.Backdrop,
        ...D
      },
      slotProps: {
        ...f,
        ...S
      }
    }, [dA, iA] = ce("root", {
      ref: t,
      elementType: J0,
      externalForwardedProps: {
        ...Y,
        ...N,
        component: d
      },
      getSlotProps: M,
      ownerState: R,
      className: pA(a, $ == null ? void 0 : $.root, !R.open && R.exited && ($ == null ? void 0 : $.hidden))
    }), [tA, J] = ce("backdrop", {
      ref: o == null ? void 0 : o.ref,
      elementType: n,
      externalForwardedProps: Y,
      shouldForwardComponentProp: true,
      additionalProps: o,
      getSlotProps: (oA) => W({
        ...oA,
        onClick: (aA) => {
          C && C(aA), (oA == null ? void 0 : oA.onClick) && oA.onClick(aA);
        }
      }),
      className: pA(o == null ? void 0 : o.className, $ == null ? void 0 : $.backdrop),
      ownerState: R
    });
    return !E && !B && (!j || AA) ? null : L.jsx(l0, {
      ref: P,
      container: c,
      disablePortal: m,
      children: L.jsxs(dA, {
        ...iA,
        children: [
          !v && n ? L.jsx(tA, {
            ...J
          }) : null,
          L.jsx(V0, {
            disableEnforceFocus: p,
            disableAutoFocus: g,
            disableRestoreFocus: F,
            isEnabled: X,
            open: B,
            children: h.cloneElement(s, V)
          })
        ]
      })
    });
  });
  function q0(A) {
    return RA("MuiDivider", A);
  }
  let Am, em, tm;
  WU = HA("MuiDivider", [
    "root",
    "absolute",
    "fullWidth",
    "inset",
    "middle",
    "flexItem",
    "light",
    "vertical",
    "withChildren",
    "withChildrenVertical",
    "textAlignRight",
    "textAlignLeft",
    "wrapper",
    "wrapperVertical"
  ]);
  Am = (A) => {
    const { absolute: e, children: t, classes: r, flexItem: n, light: o, orientation: i, textAlign: a, variant: l } = A;
    return OA({
      root: [
        "root",
        e && "absolute",
        l,
        o && "light",
        i === "vertical" && "vertical",
        n && "flexItem",
        t && "withChildren",
        t && i === "vertical" && "withChildrenVertical",
        a === "right" && i !== "vertical" && "textAlignRight",
        a === "left" && i !== "vertical" && "textAlignLeft"
      ],
      wrapper: [
        "wrapper",
        i === "vertical" && "wrapperVertical"
      ]
    }, q0, r);
  };
  em = lA("div", {
    name: "MuiDivider",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.root,
        t.absolute && e.absolute,
        e[t.variant],
        t.light && e.light,
        t.orientation === "vertical" && e.vertical,
        t.flexItem && e.flexItem,
        t.children && e.withChildren,
        t.children && t.orientation === "vertical" && e.withChildrenVertical,
        t.textAlign === "right" && t.orientation !== "vertical" && e.textAlignRight,
        t.textAlign === "left" && t.orientation !== "vertical" && e.textAlignLeft
      ];
    }
  })(MA(({ theme: A }) => ({
    margin: 0,
    flexShrink: 0,
    borderWidth: 0,
    borderStyle: "solid",
    borderColor: (A.vars || A).palette.divider,
    borderBottomWidth: "thin",
    variants: [
      {
        props: {
          absolute: true
        },
        style: {
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%"
        }
      },
      {
        props: {
          light: true
        },
        style: {
          borderColor: A.vars ? `rgba(${A.vars.palette.dividerChannel} / 0.08)` : lr(A.palette.divider, 0.08)
        }
      },
      {
        props: {
          variant: "inset"
        },
        style: {
          marginLeft: 72
        }
      },
      {
        props: {
          variant: "middle",
          orientation: "horizontal"
        },
        style: {
          marginLeft: A.spacing(2),
          marginRight: A.spacing(2)
        }
      },
      {
        props: {
          variant: "middle",
          orientation: "vertical"
        },
        style: {
          marginTop: A.spacing(1),
          marginBottom: A.spacing(1)
        }
      },
      {
        props: {
          orientation: "vertical"
        },
        style: {
          height: "100%",
          borderBottomWidth: 0,
          borderRightWidth: "thin"
        }
      },
      {
        props: {
          flexItem: true
        },
        style: {
          alignSelf: "stretch",
          height: "auto"
        }
      },
      {
        props: ({ ownerState: e }) => !!e.children,
        style: {
          display: "flex",
          textAlign: "center",
          border: 0,
          borderTopStyle: "solid",
          borderLeftStyle: "solid",
          "&::before, &::after": {
            content: '""',
            alignSelf: "center"
          }
        }
      },
      {
        props: ({ ownerState: e }) => e.children && e.orientation !== "vertical",
        style: {
          "&::before, &::after": {
            width: "100%",
            borderTop: `thin solid ${(A.vars || A).palette.divider}`,
            borderTopStyle: "inherit"
          }
        }
      },
      {
        props: ({ ownerState: e }) => e.orientation === "vertical" && e.children,
        style: {
          flexDirection: "column",
          "&::before, &::after": {
            height: "100%",
            borderLeft: `thin solid ${(A.vars || A).palette.divider}`,
            borderLeftStyle: "inherit"
          }
        }
      },
      {
        props: ({ ownerState: e }) => e.textAlign === "right" && e.orientation !== "vertical",
        style: {
          "&::before": {
            width: "90%"
          },
          "&::after": {
            width: "10%"
          }
        }
      },
      {
        props: ({ ownerState: e }) => e.textAlign === "left" && e.orientation !== "vertical",
        style: {
          "&::before": {
            width: "10%"
          },
          "&::after": {
            width: "90%"
          }
        }
      }
    ]
  })));
  tm = lA("span", {
    name: "MuiDivider",
    slot: "Wrapper",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.wrapper,
        t.orientation === "vertical" && e.wrapperVertical
      ];
    }
  })(MA(({ theme: A }) => ({
    display: "inline-block",
    paddingLeft: `calc(${A.spacing(1)} * 1.2)`,
    paddingRight: `calc(${A.spacing(1)} * 1.2)`,
    whiteSpace: "nowrap",
    variants: [
      {
        props: {
          orientation: "vertical"
        },
        style: {
          paddingTop: `calc(${A.spacing(1)} * 1.2)`,
          paddingBottom: `calc(${A.spacing(1)} * 1.2)`
        }
      }
    ]
  })));
  go = h.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiDivider"
    }), { absolute: n = false, children: o, className: i, orientation: a = "horizontal", component: l = o || a === "vertical" ? "div" : "hr", flexItem: s = false, light: c = false, role: d = l !== "hr" ? "separator" : void 0, textAlign: u = "center", variant: f = "fullWidth", ...g } = r, p = {
      ...r,
      absolute: n,
      component: l,
      flexItem: s,
      light: c,
      orientation: a,
      role: d,
      textAlign: u,
      variant: f
    }, Q = Am(p);
    return L.jsx(em, {
      as: l,
      className: pA(Q.root, i),
      role: d,
      ref: t,
      ownerState: p,
      "aria-orientation": d === "separator" && (l !== "hr" || a === "vertical") ? a : void 0,
      ...g,
      children: o ? L.jsx(tm, {
        className: Q.wrapper,
        ownerState: p,
        children: o
      }) : null
    });
  });
  go && (go.muiSkipListHighlight = true);
  const rm = (A) => {
    const { classes: e, disableUnderline: t, startAdornment: r, endAdornment: n, size: o, hiddenLabel: i, multiline: a } = A, l = {
      root: [
        "root",
        !t && "underline",
        r && "adornedStart",
        n && "adornedEnd",
        o === "small" && `size${mA(o)}`,
        i && "hiddenLabel",
        a && "multiline"
      ],
      input: [
        "input"
      ]
    }, s = OA(l, m0, e);
    return {
      ...e,
      ...s
    };
  }, nm = lA(di, {
    shouldForwardProp: (A) => We(A) || A === "classes",
    name: "MuiFilledInput",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        ...ci(A, e),
        !t.disableUnderline && e.underline
      ];
    }
  })(MA(({ theme: A }) => {
    const e = A.palette.mode === "light", t = e ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", r = e ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", n = e ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", o = e ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
    return {
      position: "relative",
      backgroundColor: A.vars ? A.vars.palette.FilledInput.bg : r,
      borderTopLeftRadius: (A.vars || A).shape.borderRadius,
      borderTopRightRadius: (A.vars || A).shape.borderRadius,
      transition: A.transitions.create("background-color", {
        duration: A.transitions.duration.shorter,
        easing: A.transitions.easing.easeOut
      }),
      "&:hover": {
        backgroundColor: A.vars ? A.vars.palette.FilledInput.hoverBg : n,
        "@media (hover: none)": {
          backgroundColor: A.vars ? A.vars.palette.FilledInput.bg : r
        }
      },
      [`&.${Qt.focused}`]: {
        backgroundColor: A.vars ? A.vars.palette.FilledInput.bg : r
      },
      [`&.${Qt.disabled}`]: {
        backgroundColor: A.vars ? A.vars.palette.FilledInput.disabledBg : o
      },
      variants: [
        {
          props: ({ ownerState: i }) => !i.disableUnderline,
          style: {
            "&::after": {
              left: 0,
              bottom: 0,
              content: '""',
              position: "absolute",
              right: 0,
              transform: "scaleX(0)",
              transition: A.transitions.create("transform", {
                duration: A.transitions.duration.shorter,
                easing: A.transitions.easing.easeOut
              }),
              pointerEvents: "none"
            },
            [`&.${Qt.focused}:after`]: {
              transform: "scaleX(1) translateX(0)"
            },
            [`&.${Qt.error}`]: {
              "&::before, &::after": {
                borderBottomColor: (A.vars || A).palette.error.main
              }
            },
            "&::before": {
              borderBottom: `1px solid ${A.vars ? `rgba(${A.vars.palette.common.onBackgroundChannel} / ${A.vars.opacity.inputUnderline})` : t}`,
              left: 0,
              bottom: 0,
              content: '"\\00a0"',
              position: "absolute",
              right: 0,
              transition: A.transitions.create("border-bottom-color", {
                duration: A.transitions.duration.shorter
              }),
              pointerEvents: "none"
            },
            [`&:hover:not(.${Qt.disabled}, .${Qt.error}):before`]: {
              borderBottom: `1px solid ${(A.vars || A).palette.text.primary}`
            },
            [`&.${Qt.disabled}:before`]: {
              borderBottomStyle: "dotted"
            }
          }
        },
        ...Object.entries(A.palette).filter(wt()).map(([i]) => {
          var _a2;
          return {
            props: {
              disableUnderline: false,
              color: i
            },
            style: {
              "&::after": {
                borderBottom: `2px solid ${(_a2 = (A.vars || A).palette[i]) == null ? void 0 : _a2.main}`
              }
            }
          };
        }),
        {
          props: ({ ownerState: i }) => i.startAdornment,
          style: {
            paddingLeft: 12
          }
        },
        {
          props: ({ ownerState: i }) => i.endAdornment,
          style: {
            paddingRight: 12
          }
        },
        {
          props: ({ ownerState: i }) => i.multiline,
          style: {
            padding: "25px 12px 8px"
          }
        },
        {
          props: ({ ownerState: i, size: a }) => i.multiline && a === "small",
          style: {
            paddingTop: 21,
            paddingBottom: 4
          }
        },
        {
          props: ({ ownerState: i }) => i.multiline && i.hiddenLabel,
          style: {
            paddingTop: 16,
            paddingBottom: 17
          }
        },
        {
          props: ({ ownerState: i }) => i.multiline && i.hiddenLabel && i.size === "small",
          style: {
            paddingTop: 8,
            paddingBottom: 9
          }
        }
      ]
    };
  })), om = lA(fi, {
    name: "MuiFilledInput",
    slot: "Input",
    overridesResolver: ui
  })(MA(({ theme: A }) => ({
    paddingTop: 25,
    paddingRight: 12,
    paddingBottom: 8,
    paddingLeft: 12,
    ...!A.vars && {
      "&:-webkit-autofill": {
        WebkitBoxShadow: A.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
        WebkitTextFillColor: A.palette.mode === "light" ? null : "#fff",
        caretColor: A.palette.mode === "light" ? null : "#fff",
        borderTopLeftRadius: "inherit",
        borderTopRightRadius: "inherit"
      }
    },
    ...A.vars && {
      "&:-webkit-autofill": {
        borderTopLeftRadius: "inherit",
        borderTopRightRadius: "inherit"
      },
      [A.getColorSchemeSelector("dark")]: {
        "&:-webkit-autofill": {
          WebkitBoxShadow: "0 0 0 100px #266798 inset",
          WebkitTextFillColor: "#fff",
          caretColor: "#fff"
        }
      }
    },
    variants: [
      {
        props: {
          size: "small"
        },
        style: {
          paddingTop: 21,
          paddingBottom: 4
        }
      },
      {
        props: ({ ownerState: e }) => e.hiddenLabel,
        style: {
          paddingTop: 16,
          paddingBottom: 17
        }
      },
      {
        props: ({ ownerState: e }) => e.startAdornment,
        style: {
          paddingLeft: 0
        }
      },
      {
        props: ({ ownerState: e }) => e.endAdornment,
        style: {
          paddingRight: 0
        }
      },
      {
        props: ({ ownerState: e }) => e.hiddenLabel && e.size === "small",
        style: {
          paddingTop: 8,
          paddingBottom: 9
        }
      },
      {
        props: ({ ownerState: e }) => e.multiline,
        style: {
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 0,
          paddingRight: 0
        }
      }
    ]
  }))), Os = h.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiFilledInput"
    }), { disableUnderline: n = false, components: o = {}, componentsProps: i, fullWidth: a = false, hiddenLabel: l, inputComponent: s = "input", multiline: c = false, slotProps: d, slots: u = {}, type: f = "text", ...g } = r, p = {
      ...r,
      disableUnderline: n,
      fullWidth: a,
      inputComponent: s,
      multiline: c,
      type: f
    }, Q = rm(r), m = {
      root: {
        ownerState: p
      },
      input: {
        ownerState: p
      }
    }, F = d ?? i ? ZA(m, d ?? i) : m, w = u.root ?? o.Root ?? nm, v = u.input ?? o.Input ?? om;
    return L.jsx(Rs, {
      slots: {
        root: w,
        input: v
      },
      slotProps: F,
      fullWidth: a,
      inputComponent: s,
      multiline: c,
      ref: t,
      type: f,
      ...g,
      classes: Q
    });
  });
  Os.muiName = "Input";
  function im(A) {
    return RA("MuiFormControl", A);
  }
  HA("MuiFormControl", [
    "root",
    "marginNone",
    "marginNormal",
    "marginDense",
    "fullWidth",
    "disabled"
  ]);
  let am, sm;
  am = (A) => {
    const { classes: e, margin: t, fullWidth: r } = A, n = {
      root: [
        "root",
        t !== "none" && `margin${mA(t)}`,
        r && "fullWidth"
      ]
    };
    return OA(n, im, e);
  };
  sm = lA("div", {
    name: "MuiFormControl",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.root,
        e[`margin${mA(t.margin)}`],
        t.fullWidth && e.fullWidth
      ];
    }
  })({
    display: "inline-flex",
    flexDirection: "column",
    position: "relative",
    minWidth: 0,
    padding: 0,
    margin: 0,
    border: 0,
    verticalAlign: "top",
    variants: [
      {
        props: {
          margin: "normal"
        },
        style: {
          marginTop: 16,
          marginBottom: 8
        }
      },
      {
        props: {
          margin: "dense"
        },
        style: {
          marginTop: 8,
          marginBottom: 4
        }
      },
      {
        props: {
          fullWidth: true
        },
        style: {
          width: "100%"
        }
      }
    ]
  });
  lm = h.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiFormControl"
    }), { children: n, className: o, color: i = "primary", component: a = "div", disabled: l = false, error: s = false, focused: c, fullWidth: d = false, hiddenLabel: u = false, margin: f = "none", required: g = false, size: p = "medium", variant: Q = "outlined", ...m } = r, F = {
      ...r,
      color: i,
      component: a,
      disabled: l,
      error: s,
      fullWidth: d,
      hiddenLabel: u,
      margin: f,
      required: g,
      size: p,
      variant: Q
    }, w = am(F), [v, E] = h.useState(() => {
      let k = false;
      return n && h.Children.forEach(n, (M) => {
        if (!Si(M, [
          "Input",
          "Select"
        ])) return;
        const W = Si(M, [
          "Select"
        ]) ? M.props.input : M;
        W && f0(W.props) && (k = true);
      }), k;
    }), [C, x] = h.useState(() => {
      let k = false;
      return n && h.Children.forEach(n, (M) => {
        Si(M, [
          "Input",
          "Select"
        ]) && (fo(M.props, true) || fo(M.props.inputProps, true)) && (k = true);
      }), k;
    }), [I, T] = h.useState(false);
    l && I && T(false);
    const B = c !== void 0 && !l ? c : I;
    let S;
    h.useRef(false);
    const D = h.useCallback(() => {
      x(true);
    }, []), O = h.useCallback(() => {
      x(false);
    }, []), N = h.useMemo(() => ({
      adornedStart: v,
      setAdornedStart: E,
      color: i,
      disabled: l,
      error: s,
      filled: C,
      focused: B,
      fullWidth: d,
      hiddenLabel: u,
      size: p,
      onBlur: () => {
        T(false);
      },
      onFocus: () => {
        T(true);
      },
      onEmpty: O,
      onFilled: D,
      registerEffect: S,
      required: g,
      variant: Q
    }), [
      v,
      i,
      l,
      s,
      C,
      B,
      d,
      u,
      S,
      O,
      D,
      g,
      p,
      Q
    ]);
    return L.jsx(ks.Provider, {
      value: N,
      children: L.jsx(sm, {
        as: a,
        ownerState: F,
        className: pA(w.root, o),
        ref: t,
        ...m,
        children: n
      })
    });
  });
  function cm(A) {
    return RA("MuiFormHelperText", A);
  }
  const Pl = HA("MuiFormHelperText", [
    "root",
    "error",
    "disabled",
    "sizeSmall",
    "sizeMedium",
    "contained",
    "focused",
    "filled",
    "required"
  ]);
  var _l;
  const um = (A) => {
    const { classes: e, contained: t, size: r, disabled: n, error: o, filled: i, focused: a, required: l } = A, s = {
      root: [
        "root",
        n && "disabled",
        o && "error",
        r && `size${mA(r)}`,
        t && "contained",
        a && "focused",
        i && "filled",
        l && "required"
      ]
    };
    return OA(s, cm, e);
  }, dm = lA("p", {
    name: "MuiFormHelperText",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.root,
        t.size && e[`size${mA(t.size)}`],
        t.contained && e.contained,
        t.filled && e.filled
      ];
    }
  })(MA(({ theme: A }) => ({
    color: (A.vars || A).palette.text.secondary,
    ...A.typography.caption,
    textAlign: "left",
    marginTop: 3,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    [`&.${Pl.disabled}`]: {
      color: (A.vars || A).palette.text.disabled
    },
    [`&.${Pl.error}`]: {
      color: (A.vars || A).palette.error.main
    },
    variants: [
      {
        props: {
          size: "small"
        },
        style: {
          marginTop: 4
        }
      },
      {
        props: ({ ownerState: e }) => e.contained,
        style: {
          marginLeft: 14,
          marginRight: 14
        }
      }
    ]
  }))), fm = h.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiFormHelperText"
    }), { children: n, className: o, component: i = "p", disabled: a, error: l, filled: s, focused: c, margin: d, required: u, variant: f, ...g } = r, p = Br(), Q = pr({
      props: r,
      muiFormControl: p,
      states: [
        "variant",
        "size",
        "disabled",
        "error",
        "filled",
        "focused",
        "required"
      ]
    }), m = {
      ...r,
      component: i,
      contained: Q.variant === "filled" || Q.variant === "outlined",
      variant: Q.variant,
      size: Q.size,
      disabled: Q.disabled,
      error: Q.error,
      filled: Q.filled,
      focused: Q.focused,
      required: Q.required
    };
    delete m.ownerState;
    const F = um(m);
    return L.jsx(dm, {
      as: i,
      className: pA(F.root, o),
      ref: t,
      ...g,
      ownerState: m,
      children: n === " " ? _l || (_l = L.jsx("span", {
        className: "notranslate",
        "aria-hidden": true,
        children: "\u200B"
      })) : n
    });
  });
  function gm(A) {
    return RA("MuiFormLabel", A);
  }
  const Nr = HA("MuiFormLabel", [
    "root",
    "colorSecondary",
    "focused",
    "disabled",
    "error",
    "filled",
    "required",
    "asterisk"
  ]), pm = (A) => {
    const { classes: e, color: t, focused: r, disabled: n, error: o, filled: i, required: a } = A, l = {
      root: [
        "root",
        `color${mA(t)}`,
        n && "disabled",
        o && "error",
        i && "filled",
        r && "focused",
        a && "required"
      ],
      asterisk: [
        "asterisk",
        o && "error"
      ]
    };
    return OA(l, gm, e);
  }, Bm = lA("label", {
    name: "MuiFormLabel",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.root,
        t.color === "secondary" && e.colorSecondary,
        t.filled && e.filled
      ];
    }
  })(MA(({ theme: A }) => ({
    color: (A.vars || A).palette.text.secondary,
    ...A.typography.body1,
    lineHeight: "1.4375em",
    padding: 0,
    position: "relative",
    variants: [
      ...Object.entries(A.palette).filter(wt()).map(([e]) => ({
        props: {
          color: e
        },
        style: {
          [`&.${Nr.focused}`]: {
            color: (A.vars || A).palette[e].main
          }
        }
      })),
      {
        props: {},
        style: {
          [`&.${Nr.disabled}`]: {
            color: (A.vars || A).palette.text.disabled
          },
          [`&.${Nr.error}`]: {
            color: (A.vars || A).palette.error.main
          }
        }
      }
    ]
  }))), hm = lA("span", {
    name: "MuiFormLabel",
    slot: "Asterisk",
    overridesResolver: (A, e) => e.asterisk
  })(MA(({ theme: A }) => ({
    [`&.${Nr.error}`]: {
      color: (A.vars || A).palette.error.main
    }
  }))), mm = h.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiFormLabel"
    }), { children: n, className: o, color: i, component: a = "label", disabled: l, error: s, filled: c, focused: d, required: u, ...f } = r, g = Br(), p = pr({
      props: r,
      muiFormControl: g,
      states: [
        "color",
        "required",
        "focused",
        "disabled",
        "error",
        "filled"
      ]
    }), Q = {
      ...r,
      color: p.color || "primary",
      component: a,
      disabled: p.disabled,
      error: p.error,
      filled: p.filled,
      focused: p.focused,
      required: p.required
    }, m = pm(Q);
    return L.jsxs(Bm, {
      as: a,
      ownerState: Q,
      className: pA(m.root, o),
      ref: t,
      ...f,
      children: [
        n,
        p.required && L.jsxs(hm, {
          ownerState: Q,
          "aria-hidden": true,
          className: m.asterisk,
          children: [
            "\u2009",
            "*"
          ]
        })
      ]
    });
  });
  function Fa(A) {
    return `scale(${A}, ${A ** 2})`;
  }
  let Cm, Li;
  Cm = {
    entering: {
      opacity: 1,
      transform: Fa(1)
    },
    entered: {
      opacity: 1,
      transform: "none"
    }
  };
  Li = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent);
  Ua = h.forwardRef(function(e, t) {
    const { addEndListener: r, appear: n = true, children: o, easing: i, in: a, onEnter: l, onEntered: s, onEntering: c, onExit: d, onExited: u, onExiting: f, style: g, timeout: p = "auto", TransitionComponent: Q = ze, ...m } = e, F = Pu(), w = h.useRef(), v = xs(), E = h.useRef(null), C = Be(E, un(o), t), x = (k) => (M) => {
      if (k) {
        const W = E.current;
        M === void 0 ? k(W) : k(W, M);
      }
    }, I = x(c), T = x((k, M) => {
      sd(k);
      const { duration: W, delay: nA, easing: P } = co({
        style: g,
        timeout: p,
        easing: i
      }, {
        mode: "enter"
      });
      let X;
      p === "auto" ? (X = v.transitions.getAutoHeightDuration(k.clientHeight), w.current = X) : X = W, k.style.transition = [
        v.transitions.create("opacity", {
          duration: X,
          delay: nA
        }),
        v.transitions.create("transform", {
          duration: Li ? X : X * 0.666,
          delay: nA,
          easing: P
        })
      ].join(","), l && l(k, M);
    }), B = x(s), S = x(f), D = x((k) => {
      const { duration: M, delay: W, easing: nA } = co({
        style: g,
        timeout: p,
        easing: i
      }, {
        mode: "exit"
      });
      let P;
      p === "auto" ? (P = v.transitions.getAutoHeightDuration(k.clientHeight), w.current = P) : P = M, k.style.transition = [
        v.transitions.create("opacity", {
          duration: P,
          delay: W
        }),
        v.transitions.create("transform", {
          duration: Li ? P : P * 0.666,
          delay: Li ? W : W || P * 0.333,
          easing: nA
        })
      ].join(","), k.style.opacity = 0, k.style.transform = Fa(0.75), d && d(k);
    }), O = x(u), N = (k) => {
      p === "auto" && F.start(w.current || 0, k), r && r(E.current, k);
    };
    return L.jsx(Q, {
      appear: n,
      in: a,
      nodeRef: E,
      onEnter: T,
      onEntered: B,
      onEntering: I,
      onExit: D,
      onExited: O,
      onExiting: S,
      addEndListener: N,
      timeout: p === "auto" ? null : p,
      ...m,
      children: (k, { ownerState: M, ...W }) => h.cloneElement(o, {
        style: {
          opacity: 0,
          transform: Fa(0.75),
          visibility: k === "exited" && !a ? "hidden" : void 0,
          ...Cm[k],
          ...g,
          ...o.props.style
        },
        ref: C,
        ...W
      })
    });
  });
  Ua && (Ua.muiSupportAuto = true);
  const wm = (A) => {
    const { classes: e, disableUnderline: t } = A, n = OA({
      root: [
        "root",
        !t && "underline"
      ],
      input: [
        "input"
      ]
    }, B0, e);
    return {
      ...e,
      ...n
    };
  }, vm = lA(di, {
    shouldForwardProp: (A) => We(A) || A === "classes",
    name: "MuiInput",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        ...ci(A, e),
        !t.disableUnderline && e.underline
      ];
    }
  })(MA(({ theme: A }) => {
    let t = A.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
    return A.vars && (t = `rgba(${A.vars.palette.common.onBackgroundChannel} / ${A.vars.opacity.inputUnderline})`), {
      position: "relative",
      variants: [
        {
          props: ({ ownerState: r }) => r.formControl,
          style: {
            "label + &": {
              marginTop: 16
            }
          }
        },
        {
          props: ({ ownerState: r }) => !r.disableUnderline,
          style: {
            "&::after": {
              left: 0,
              bottom: 0,
              content: '""',
              position: "absolute",
              right: 0,
              transform: "scaleX(0)",
              transition: A.transitions.create("transform", {
                duration: A.transitions.duration.shorter,
                easing: A.transitions.easing.easeOut
              }),
              pointerEvents: "none"
            },
            [`&.${yr.focused}:after`]: {
              transform: "scaleX(1) translateX(0)"
            },
            [`&.${yr.error}`]: {
              "&::before, &::after": {
                borderBottomColor: (A.vars || A).palette.error.main
              }
            },
            "&::before": {
              borderBottom: `1px solid ${t}`,
              left: 0,
              bottom: 0,
              content: '"\\00a0"',
              position: "absolute",
              right: 0,
              transition: A.transitions.create("border-bottom-color", {
                duration: A.transitions.duration.shorter
              }),
              pointerEvents: "none"
            },
            [`&:hover:not(.${yr.disabled}, .${yr.error}):before`]: {
              borderBottom: `2px solid ${(A.vars || A).palette.text.primary}`,
              "@media (hover: none)": {
                borderBottom: `1px solid ${t}`
              }
            },
            [`&.${yr.disabled}:before`]: {
              borderBottomStyle: "dotted"
            }
          }
        },
        ...Object.entries(A.palette).filter(wt()).map(([r]) => ({
          props: {
            color: r,
            disableUnderline: false
          },
          style: {
            "&::after": {
              borderBottom: `2px solid ${(A.vars || A).palette[r].main}`
            }
          }
        }))
      ]
    };
  })), ym = lA(fi, {
    name: "MuiInput",
    slot: "Input",
    overridesResolver: ui
  })({}), Ks = h.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiInput"
    }), { disableUnderline: n = false, components: o = {}, componentsProps: i, fullWidth: a = false, inputComponent: l = "input", multiline: s = false, slotProps: c, slots: d = {}, type: u = "text", ...f } = r, g = wm(r), Q = {
      root: {
        ownerState: {
          disableUnderline: n
        }
      }
    }, m = c ?? i ? ZA(c ?? i, Q) : Q, F = d.root ?? o.Root ?? vm, w = d.input ?? o.Input ?? ym;
    return L.jsx(Rs, {
      slots: {
        root: F,
        input: w
      },
      slotProps: m,
      fullWidth: a,
      inputComponent: l,
      multiline: s,
      ref: t,
      type: u,
      ...f,
      classes: g
    });
  });
  Ks.muiName = "Input";
  function Qm(A) {
    return RA("MuiInputLabel", A);
  }
  HA("MuiInputLabel", [
    "root",
    "focused",
    "disabled",
    "error",
    "required",
    "asterisk",
    "formControl",
    "sizeSmall",
    "shrink",
    "animated",
    "standard",
    "filled",
    "outlined"
  ]);
  let bm, Fm;
  bm = (A) => {
    const { classes: e, formControl: t, size: r, shrink: n, disableAnimation: o, variant: i, required: a } = A, l = {
      root: [
        "root",
        t && "formControl",
        !o && "animated",
        n && "shrink",
        r && r !== "normal" && `size${mA(r)}`,
        i
      ],
      asterisk: [
        a && "asterisk"
      ]
    }, s = OA(l, Qm, e);
    return {
      ...e,
      ...s
    };
  };
  Fm = lA(mm, {
    shouldForwardProp: (A) => We(A) || A === "classes",
    name: "MuiInputLabel",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        {
          [`& .${Nr.asterisk}`]: e.asterisk
        },
        e.root,
        t.formControl && e.formControl,
        t.size === "small" && e.sizeSmall,
        t.shrink && e.shrink,
        !t.disableAnimation && e.animated,
        t.focused && e.focused,
        e[t.variant]
      ];
    }
  })(MA(({ theme: A }) => ({
    display: "block",
    transformOrigin: "top left",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "100%",
    variants: [
      {
        props: ({ ownerState: e }) => e.formControl,
        style: {
          position: "absolute",
          left: 0,
          top: 0,
          transform: "translate(0, 20px) scale(1)"
        }
      },
      {
        props: {
          size: "small"
        },
        style: {
          transform: "translate(0, 17px) scale(1)"
        }
      },
      {
        props: ({ ownerState: e }) => e.shrink,
        style: {
          transform: "translate(0, -1.5px) scale(0.75)",
          transformOrigin: "top left",
          maxWidth: "133%"
        }
      },
      {
        props: ({ ownerState: e }) => !e.disableAnimation,
        style: {
          transition: A.transitions.create([
            "color",
            "transform",
            "max-width"
          ], {
            duration: A.transitions.duration.shorter,
            easing: A.transitions.easing.easeOut
          })
        }
      },
      {
        props: {
          variant: "filled"
        },
        style: {
          zIndex: 1,
          pointerEvents: "none",
          transform: "translate(12px, 16px) scale(1)",
          maxWidth: "calc(100% - 24px)"
        }
      },
      {
        props: {
          variant: "filled",
          size: "small"
        },
        style: {
          transform: "translate(12px, 13px) scale(1)"
        }
      },
      {
        props: ({ variant: e, ownerState: t }) => e === "filled" && t.shrink,
        style: {
          userSelect: "none",
          pointerEvents: "auto",
          transform: "translate(12px, 7px) scale(0.75)",
          maxWidth: "calc(133% - 24px)"
        }
      },
      {
        props: ({ variant: e, ownerState: t, size: r }) => e === "filled" && t.shrink && r === "small",
        style: {
          transform: "translate(12px, 4px) scale(0.75)"
        }
      },
      {
        props: {
          variant: "outlined"
        },
        style: {
          zIndex: 1,
          pointerEvents: "none",
          transform: "translate(14px, 16px) scale(1)",
          maxWidth: "calc(100% - 24px)"
        }
      },
      {
        props: {
          variant: "outlined",
          size: "small"
        },
        style: {
          transform: "translate(14px, 9px) scale(1)"
        }
      },
      {
        props: ({ variant: e, ownerState: t }) => e === "outlined" && t.shrink,
        style: {
          userSelect: "none",
          pointerEvents: "auto",
          maxWidth: "calc(133% - 32px)",
          transform: "translate(14px, -9px) scale(0.75)"
        }
      }
    ]
  })));
  Um = h.forwardRef(function(e, t) {
    const r = KA({
      name: "MuiInputLabel",
      props: e
    }), { disableAnimation: n = false, margin: o, shrink: i, variant: a, className: l, ...s } = r, c = Br();
    let d = i;
    typeof d > "u" && c && (d = c.filled || c.focused || c.adornedStart);
    const u = pr({
      props: r,
      muiFormControl: c,
      states: [
        "size",
        "variant",
        "required",
        "focused"
      ]
    }), f = {
      ...r,
      disableAnimation: n,
      formControl: c,
      shrink: d,
      size: u.size,
      variant: u.variant,
      required: u.required,
      focused: u.focused
    }, g = bm(f);
    return L.jsx(Fm, {
      "data-shrink": d,
      ref: t,
      className: pA(g.root, l),
      ...s,
      ownerState: f,
      classes: g
    });
  });
  Em = h.createContext({});
  function Sm(A) {
    return RA("MuiList", A);
  }
  HA("MuiList", [
    "root",
    "padding",
    "dense",
    "subheader"
  ]);
  let xm, Im;
  xm = (A) => {
    const { classes: e, disablePadding: t, dense: r, subheader: n } = A;
    return OA({
      root: [
        "root",
        !t && "padding",
        r && "dense",
        n && "subheader"
      ]
    }, Sm, e);
  };
  Im = lA("ul", {
    name: "MuiList",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.root,
        !t.disablePadding && e.padding,
        t.dense && e.dense,
        t.subheader && e.subheader
      ];
    }
  })({
    listStyle: "none",
    margin: 0,
    padding: 0,
    position: "relative",
    variants: [
      {
        props: ({ ownerState: A }) => !A.disablePadding,
        style: {
          paddingTop: 8,
          paddingBottom: 8
        }
      },
      {
        props: ({ ownerState: A }) => A.subheader,
        style: {
          paddingTop: 0
        }
      }
    ]
  });
  Hm = h.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiList"
    }), { children: n, className: o, component: i = "ul", dense: a = false, disablePadding: l = false, subheader: s, ...c } = r, d = h.useMemo(() => ({
      dense: a
    }), [
      a
    ]), u = {
      ...r,
      component: i,
      dense: a,
      disablePadding: l
    }, f = xm(u);
    return L.jsx(Em.Provider, {
      value: d,
      children: L.jsxs(Im, {
        as: i,
        className: pA(f.root, o),
        ref: t,
        ownerState: u,
        ...c,
        children: [
          s,
          n
        ]
      })
    });
  });
  function ki(A, e, t) {
    return A === e ? A.firstChild : e && e.nextElementSibling ? e.nextElementSibling : t ? null : A.firstChild;
  }
  function Nl(A, e, t) {
    return A === e ? t ? A.firstChild : A.lastChild : e && e.previousElementSibling ? e.previousElementSibling : t ? null : A.lastChild;
  }
  function cd(A, e) {
    if (e === void 0) return true;
    let t = A.innerText;
    return t === void 0 && (t = A.textContent), t = t.trim().toLowerCase(), t.length === 0 ? false : e.repeating ? t[0] === e.keys[0] : t.startsWith(e.keys.join(""));
  }
  function Qr(A, e, t, r, n, o) {
    let i = false, a = n(A, e, e ? t : false);
    for (; a; ) {
      if (a === A.firstChild) {
        if (i) return false;
        i = true;
      }
      const l = r ? false : a.disabled || a.getAttribute("aria-disabled") === "true";
      if (!a.hasAttribute("tabindex") || !cd(a, o) || l) a = n(A, a, t);
      else return a.focus(), true;
    }
    return false;
  }
  const Tm = h.forwardRef(function(e, t) {
    const { actions: r, autoFocus: n = false, autoFocusItem: o = false, children: i, className: a, disabledItemsFocusable: l = false, disableListWrap: s = false, onKeyDown: c, variant: d = "selectedMenu", ...u } = e, f = h.useRef(null), g = h.useRef({
      keys: [],
      repeating: true,
      previousKeyMatched: true,
      lastTime: null
    });
    rt(() => {
      n && f.current.focus();
    }, [
      n
    ]), h.useImperativeHandle(r, () => ({
      adjustStyleForScrollbar: (w, { direction: v }) => {
        const E = !f.current.style.width;
        if (w.clientHeight < f.current.clientHeight && E) {
          const C = `${_u(nt(w))}px`;
          f.current.style[v === "rtl" ? "paddingLeft" : "paddingRight"] = C, f.current.style.width = `calc(100% + ${C})`;
        }
        return f.current;
      }
    }), []);
    const p = (w) => {
      const v = f.current, E = w.key;
      if (w.ctrlKey || w.metaKey || w.altKey) {
        c && c(w);
        return;
      }
      const x = Le(v).activeElement;
      if (E === "ArrowDown") w.preventDefault(), Qr(v, x, s, l, ki);
      else if (E === "ArrowUp") w.preventDefault(), Qr(v, x, s, l, Nl);
      else if (E === "Home") w.preventDefault(), Qr(v, null, s, l, ki);
      else if (E === "End") w.preventDefault(), Qr(v, null, s, l, Nl);
      else if (E.length === 1) {
        const I = g.current, T = E.toLowerCase(), B = performance.now();
        I.keys.length > 0 && (B - I.lastTime > 500 ? (I.keys = [], I.repeating = true, I.previousKeyMatched = true) : I.repeating && T !== I.keys[0] && (I.repeating = false)), I.lastTime = B, I.keys.push(T);
        const S = x && !I.repeating && cd(x, I);
        I.previousKeyMatched && (S || Qr(v, x, false, l, ki, I)) ? w.preventDefault() : I.previousKeyMatched = false;
      }
      c && c(w);
    }, Q = Be(f, t);
    let m = -1;
    h.Children.forEach(i, (w, v) => {
      if (!h.isValidElement(w)) {
        m === v && (m += 1, m >= i.length && (m = -1));
        return;
      }
      w.props.disabled || (d === "selectedMenu" && w.props.selected || m === -1) && (m = v), m === v && (w.props.disabled || w.props.muiSkipListHighlight || w.type.muiSkipListHighlight) && (m += 1, m >= i.length && (m = -1));
    });
    const F = h.Children.map(i, (w, v) => {
      if (v === m) {
        const E = {};
        return o && (E.autoFocus = true), w.props.tabIndex === void 0 && d === "selectedMenu" && (E.tabIndex = 0), h.cloneElement(w, E);
      }
      return w;
    });
    return L.jsx(Hm, {
      role: "menu",
      ref: Q,
      className: a,
      onKeyDown: p,
      tabIndex: n ? 0 : -1,
      ...u,
      children: F
    });
  });
  function Lm(A) {
    return RA("MuiPopover", A);
  }
  HA("MuiPopover", [
    "root",
    "paper"
  ]);
  function Gl(A, e) {
    let t = 0;
    return typeof e == "number" ? t = e : e === "center" ? t = A.height / 2 : e === "bottom" && (t = A.height), t;
  }
  function Vl(A, e) {
    let t = 0;
    return typeof e == "number" ? t = e : e === "center" ? t = A.width / 2 : e === "right" && (t = A.width), t;
  }
  function $l(A) {
    return [
      A.horizontal,
      A.vertical
    ].map((e) => typeof e == "number" ? `${e}px` : e).join(" ");
  }
  function Qn(A) {
    return typeof A == "function" ? A() : A;
  }
  let km, Rm, ud;
  km = (A) => {
    const { classes: e } = A;
    return OA({
      root: [
        "root"
      ],
      paper: [
        "paper"
      ]
    }, Lm, e);
  };
  Rm = lA(Z0, {
    name: "MuiPopover",
    slot: "Root",
    overridesResolver: (A, e) => e.root
  })({});
  ud = lA(Ca, {
    name: "MuiPopover",
    slot: "Paper",
    overridesResolver: (A, e) => e.paper
  })({
    position: "absolute",
    overflowY: "auto",
    overflowX: "hidden",
    minWidth: 16,
    minHeight: 16,
    maxWidth: "calc(100% - 32px)",
    maxHeight: "calc(100% - 32px)",
    outline: 0
  });
  dd = h.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiPopover"
    }), { action: n, anchorEl: o, anchorOrigin: i = {
      vertical: "top",
      horizontal: "left"
    }, anchorPosition: a, anchorReference: l = "anchorEl", children: s, className: c, container: d, elevation: u = 8, marginThreshold: f = 16, open: g, PaperProps: p = {}, slots: Q = {}, slotProps: m = {}, transformOrigin: F = {
      vertical: "top",
      horizontal: "left"
    }, TransitionComponent: w, transitionDuration: v = "auto", TransitionProps: E = {}, disableScrollLock: C = false, ...x } = r, I = h.useRef(), T = {
      ...r,
      anchorOrigin: i,
      anchorReference: l,
      elevation: u,
      marginThreshold: f,
      transformOrigin: F,
      TransitionComponent: w,
      transitionDuration: v,
      TransitionProps: E
    }, B = km(T), S = h.useCallback(() => {
      if (l === "anchorPosition") return a;
      const J = Qn(o), aA = (J && J.nodeType === 1 ? J : Le(I.current).body).getBoundingClientRect();
      return {
        top: aA.top + Gl(aA, i.vertical),
        left: aA.left + Vl(aA, i.horizontal)
      };
    }, [
      o,
      i.horizontal,
      i.vertical,
      a,
      l
    ]), D = h.useCallback((J) => ({
      vertical: Gl(J, F.vertical),
      horizontal: Vl(J, F.horizontal)
    }), [
      F.horizontal,
      F.vertical
    ]), O = h.useCallback((J) => {
      const oA = {
        width: J.offsetWidth,
        height: J.offsetHeight
      }, aA = D(oA);
      if (l === "none") return {
        top: null,
        left: null,
        transformOrigin: $l(aA)
      };
      const y = S();
      let U = y.top - aA.vertical, b = y.left - aA.horizontal;
      const _ = U + oA.height, z = b + oA.width, G = nt(Qn(o)), sA = G.innerHeight - f, cA = G.innerWidth - f;
      if (f !== null && U < f) {
        const fA = U - f;
        U -= fA, aA.vertical += fA;
      } else if (f !== null && _ > sA) {
        const fA = _ - sA;
        U -= fA, aA.vertical += fA;
      }
      if (f !== null && b < f) {
        const fA = b - f;
        b -= fA, aA.horizontal += fA;
      } else if (z > cA) {
        const fA = z - cA;
        b -= fA, aA.horizontal += fA;
      }
      return {
        top: `${Math.round(U)}px`,
        left: `${Math.round(b)}px`,
        transformOrigin: $l(aA)
      };
    }, [
      o,
      l,
      S,
      D,
      f
    ]), [N, k] = h.useState(g), M = h.useCallback(() => {
      const J = I.current;
      if (!J) return;
      const oA = O(J);
      oA.top !== null && J.style.setProperty("top", oA.top), oA.left !== null && (J.style.left = oA.left), J.style.transformOrigin = oA.transformOrigin, k(true);
    }, [
      O
    ]);
    h.useEffect(() => (C && window.addEventListener("scroll", M), () => window.removeEventListener("scroll", M)), [
      o,
      C,
      M
    ]);
    const W = () => {
      M();
    }, nA = () => {
      k(false);
    };
    h.useEffect(() => {
      g && M();
    }), h.useImperativeHandle(n, () => g ? {
      updatePosition: () => {
        M();
      }
    } : null, [
      g,
      M
    ]), h.useEffect(() => {
      if (!g) return;
      const J = Mu(() => {
        M();
      }), oA = nt(Qn(o));
      return oA.addEventListener("resize", J), () => {
        J.clear(), oA.removeEventListener("resize", J);
      };
    }, [
      o,
      g,
      M
    ]);
    let P = v;
    const X = {
      slots: {
        transition: w,
        ...Q
      },
      slotProps: {
        transition: E,
        paper: p,
        ...m
      }
    }, [AA, j] = ce("transition", {
      elementType: Ua,
      externalForwardedProps: X,
      ownerState: T,
      getSlotProps: (J) => ({
        ...J,
        onEntering: (oA, aA) => {
          var _a2;
          (_a2 = J.onEntering) == null ? void 0 : _a2.call(J, oA, aA), W();
        },
        onExited: (oA) => {
          var _a2;
          (_a2 = J.onExited) == null ? void 0 : _a2.call(J, oA), nA();
        }
      }),
      additionalProps: {
        appear: true,
        in: g
      }
    });
    v === "auto" && !AA.muiSupportAuto && (P = void 0);
    const R = d || (o ? Le(Qn(o)).body : void 0), [$, { slots: V, slotProps: Y, ...dA }] = ce("root", {
      ref: t,
      elementType: Rm,
      externalForwardedProps: {
        ...X,
        ...x
      },
      shouldForwardComponentProp: true,
      additionalProps: {
        slots: {
          backdrop: Q.backdrop
        },
        slotProps: {
          backdrop: fh(typeof m.backdrop == "function" ? m.backdrop(T) : m.backdrop, {
            invisible: true
          })
        },
        container: R,
        open: g
      },
      ownerState: T,
      className: pA(B.root, c)
    }), [iA, tA] = ce("paper", {
      ref: I,
      className: B.paper,
      elementType: ud,
      externalForwardedProps: X,
      shouldForwardComponentProp: true,
      additionalProps: {
        elevation: u,
        style: N ? void 0 : {
          opacity: 0
        }
      },
      ownerState: T
    });
    return L.jsx($, {
      ...dA,
      ...!Qa($) && {
        slots: V,
        slotProps: Y,
        disableScrollLock: C
      },
      children: L.jsx(AA, {
        ...j,
        timeout: P,
        children: L.jsx(iA, {
          ...tA,
          children: s
        })
      })
    });
  });
  function Om(A) {
    return RA("MuiMenu", A);
  }
  HA("MuiMenu", [
    "root",
    "paper",
    "list"
  ]);
  let Km, Mm, Dm, Pm, _m, Nm;
  Km = {
    vertical: "top",
    horizontal: "right"
  };
  Mm = {
    vertical: "top",
    horizontal: "left"
  };
  Dm = (A) => {
    const { classes: e } = A;
    return OA({
      root: [
        "root"
      ],
      paper: [
        "paper"
      ],
      list: [
        "list"
      ]
    }, Om, e);
  };
  Pm = lA(dd, {
    shouldForwardProp: (A) => We(A) || A === "classes",
    name: "MuiMenu",
    slot: "Root",
    overridesResolver: (A, e) => e.root
  })({});
  _m = lA(ud, {
    name: "MuiMenu",
    slot: "Paper",
    overridesResolver: (A, e) => e.paper
  })({
    maxHeight: "calc(100% - 96px)",
    WebkitOverflowScrolling: "touch"
  });
  Nm = lA(Tm, {
    name: "MuiMenu",
    slot: "List",
    overridesResolver: (A, e) => e.list
  })({
    outline: 0
  });
  Gm = h.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiMenu"
    }), { autoFocus: n = true, children: o, className: i, disableAutoFocusItem: a = false, MenuListProps: l = {}, onClose: s, open: c, PaperProps: d = {}, PopoverClasses: u, transitionDuration: f = "auto", TransitionProps: { onEntering: g, ...p } = {}, variant: Q = "selectedMenu", slots: m = {}, slotProps: F = {}, ...w } = r, v = uB(), E = {
      ...r,
      autoFocus: n,
      disableAutoFocusItem: a,
      MenuListProps: l,
      onEntering: g,
      PaperProps: d,
      transitionDuration: f,
      TransitionProps: p,
      variant: Q
    }, C = Dm(E), x = n && !a && c, I = h.useRef(null), T = (P, X) => {
      I.current && I.current.adjustStyleForScrollbar(P, {
        direction: v ? "rtl" : "ltr"
      }), g && g(P, X);
    }, B = (P) => {
      P.key === "Tab" && (P.preventDefault(), s && s(P, "tabKeyDown"));
    };
    let S = -1;
    h.Children.map(o, (P, X) => {
      h.isValidElement(P) && (P.props.disabled || (Q === "selectedMenu" && P.props.selected || S === -1) && (S = X));
    });
    const D = {
      slots: m,
      slotProps: {
        list: l,
        transition: p,
        paper: d,
        ...F
      }
    }, O = oB({
      elementType: m.root,
      externalSlotProps: F.root,
      ownerState: E,
      className: [
        C.root,
        i
      ]
    }), [N, k] = ce("paper", {
      className: C.paper,
      elementType: _m,
      externalForwardedProps: D,
      shouldForwardComponentProp: true,
      ownerState: E
    }), [M, W] = ce("list", {
      className: pA(C.list, l.className),
      elementType: Nm,
      shouldForwardComponentProp: true,
      externalForwardedProps: D,
      getSlotProps: (P) => ({
        ...P,
        onKeyDown: (X) => {
          var _a2;
          B(X), (_a2 = P.onKeyDown) == null ? void 0 : _a2.call(P, X);
        }
      }),
      ownerState: E
    }), nA = typeof D.slotProps.transition == "function" ? D.slotProps.transition(E) : D.slotProps.transition;
    return L.jsx(Pm, {
      onClose: s,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: v ? "right" : "left"
      },
      transformOrigin: v ? Km : Mm,
      slots: {
        root: m.root,
        paper: N,
        backdrop: m.backdrop,
        ...m.transition && {
          transition: m.transition
        }
      },
      slotProps: {
        root: O,
        paper: k,
        backdrop: typeof F.backdrop == "function" ? F.backdrop(E) : F.backdrop,
        transition: {
          ...nA,
          onEntering: (...P) => {
            var _a2;
            T(...P), (_a2 = nA == null ? void 0 : nA.onEntering) == null ? void 0 : _a2.call(nA, ...P);
          }
        }
      },
      open: c,
      ref: t,
      transitionDuration: f,
      ownerState: E,
      ...w,
      classes: u,
      children: L.jsx(M, {
        actions: I,
        autoFocus: n && (S === -1 || a),
        autoFocusItem: x,
        variant: Q,
        ...W,
        children: o
      })
    });
  });
  function Vm(A) {
    return RA("MuiNativeSelect", A);
  }
  const Ms = HA("MuiNativeSelect", [
    "root",
    "select",
    "multiple",
    "filled",
    "outlined",
    "standard",
    "disabled",
    "icon",
    "iconOpen",
    "iconFilled",
    "iconOutlined",
    "iconStandard",
    "nativeInput",
    "error"
  ]), $m = (A) => {
    const { classes: e, variant: t, disabled: r, multiple: n, open: o, error: i } = A, a = {
      select: [
        "select",
        t,
        r && "disabled",
        n && "multiple",
        i && "error"
      ],
      icon: [
        "icon",
        `icon${mA(t)}`,
        o && "iconOpen",
        r && "disabled"
      ]
    };
    return OA(a, Vm, e);
  }, fd = lA("select", {
    name: "MuiNativeSelect"
  })(({ theme: A }) => ({
    MozAppearance: "none",
    WebkitAppearance: "none",
    userSelect: "none",
    borderRadius: 0,
    cursor: "pointer",
    "&:focus": {
      borderRadius: 0
    },
    [`&.${Ms.disabled}`]: {
      cursor: "default"
    },
    "&[multiple]": {
      height: "auto"
    },
    "&:not([multiple]) option, &:not([multiple]) optgroup": {
      backgroundColor: (A.vars || A).palette.background.paper
    },
    variants: [
      {
        props: ({ ownerState: e }) => e.variant !== "filled" && e.variant !== "outlined",
        style: {
          "&&&": {
            paddingRight: 24,
            minWidth: 16
          }
        }
      },
      {
        props: {
          variant: "filled"
        },
        style: {
          "&&&": {
            paddingRight: 32
          }
        }
      },
      {
        props: {
          variant: "outlined"
        },
        style: {
          borderRadius: (A.vars || A).shape.borderRadius,
          "&:focus": {
            borderRadius: (A.vars || A).shape.borderRadius
          },
          "&&&": {
            paddingRight: 32
          }
        }
      }
    ]
  })), Wm = lA(fd, {
    name: "MuiNativeSelect",
    slot: "Select",
    shouldForwardProp: We,
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.select,
        e[t.variant],
        t.error && e.error,
        {
          [`&.${Ms.multiple}`]: e.multiple
        }
      ];
    }
  })({}), gd = lA("svg", {
    name: "MuiNativeSelect"
  })(({ theme: A }) => ({
    position: "absolute",
    right: 0,
    top: "calc(50% - .5em)",
    pointerEvents: "none",
    color: (A.vars || A).palette.action.active,
    [`&.${Ms.disabled}`]: {
      color: (A.vars || A).palette.action.disabled
    },
    variants: [
      {
        props: ({ ownerState: e }) => e.open,
        style: {
          transform: "rotate(180deg)"
        }
      },
      {
        props: {
          variant: "filled"
        },
        style: {
          right: 7
        }
      },
      {
        props: {
          variant: "outlined"
        },
        style: {
          right: 7
        }
      }
    ]
  })), zm = lA(gd, {
    name: "MuiNativeSelect",
    slot: "Icon",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.icon,
        t.variant && e[`icon${mA(t.variant)}`],
        t.open && e.iconOpen
      ];
    }
  })({}), Xm = h.forwardRef(function(e, t) {
    const { className: r, disabled: n, error: o, IconComponent: i, inputRef: a, variant: l = "standard", ...s } = e, c = {
      ...e,
      disabled: n,
      variant: l,
      error: o
    }, d = $m(c);
    return L.jsxs(h.Fragment, {
      children: [
        L.jsx(Wm, {
          ownerState: c,
          className: pA(d.select, r),
          disabled: n,
          ref: a || t,
          ...s
        }),
        e.multiple ? null : L.jsx(zm, {
          as: i,
          ownerState: c,
          className: d.icon
        })
      ]
    });
  });
  var Wl;
  const jm = lA("fieldset", {
    name: "MuiNotchedOutlined",
    shouldForwardProp: We
  })({
    textAlign: "left",
    position: "absolute",
    bottom: 0,
    right: 0,
    top: -5,
    left: 0,
    margin: 0,
    padding: "0 8px",
    pointerEvents: "none",
    borderRadius: "inherit",
    borderStyle: "solid",
    borderWidth: 1,
    overflow: "hidden",
    minWidth: "0%"
  }), Jm = lA("legend", {
    name: "MuiNotchedOutlined",
    shouldForwardProp: We
  })(MA(({ theme: A }) => ({
    float: "unset",
    width: "auto",
    overflow: "hidden",
    variants: [
      {
        props: ({ ownerState: e }) => !e.withLabel,
        style: {
          padding: 0,
          lineHeight: "11px",
          transition: A.transitions.create("width", {
            duration: 150,
            easing: A.transitions.easing.easeOut
          })
        }
      },
      {
        props: ({ ownerState: e }) => e.withLabel,
        style: {
          display: "block",
          padding: 0,
          height: 11,
          fontSize: "0.75em",
          visibility: "hidden",
          maxWidth: 0.01,
          transition: A.transitions.create("max-width", {
            duration: 50,
            easing: A.transitions.easing.easeOut
          }),
          whiteSpace: "nowrap",
          "& > span": {
            paddingLeft: 5,
            paddingRight: 5,
            display: "inline-block",
            opacity: 0,
            visibility: "visible"
          }
        }
      },
      {
        props: ({ ownerState: e }) => e.withLabel && e.notched,
        style: {
          maxWidth: "100%",
          transition: A.transitions.create("max-width", {
            duration: 100,
            easing: A.transitions.easing.easeOut,
            delay: 50
          })
        }
      }
    ]
  })));
  function Ym(A) {
    const { children: e, classes: t, className: r, label: n, notched: o, ...i } = A, a = n != null && n !== "", l = {
      ...A,
      notched: o,
      withLabel: a
    };
    return L.jsx(jm, {
      "aria-hidden": true,
      className: r,
      ownerState: l,
      ...i,
      children: L.jsx(Jm, {
        ownerState: l,
        children: a ? L.jsx("span", {
          children: n
        }) : Wl || (Wl = L.jsx("span", {
          className: "notranslate",
          "aria-hidden": true,
          children: "\u200B"
        }))
      })
    });
  }
  const Zm = (A) => {
    const { classes: e } = A, r = OA({
      root: [
        "root"
      ],
      notchedOutline: [
        "notchedOutline"
      ],
      input: [
        "input"
      ]
    }, h0, e);
    return {
      ...e,
      ...r
    };
  }, qm = lA(di, {
    shouldForwardProp: (A) => We(A) || A === "classes",
    name: "MuiOutlinedInput",
    slot: "Root",
    overridesResolver: ci
  })(MA(({ theme: A }) => {
    const e = A.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
    return {
      position: "relative",
      borderRadius: (A.vars || A).shape.borderRadius,
      [`&:hover .${Oe.notchedOutline}`]: {
        borderColor: (A.vars || A).palette.text.primary
      },
      "@media (hover: none)": {
        [`&:hover .${Oe.notchedOutline}`]: {
          borderColor: A.vars ? `rgba(${A.vars.palette.common.onBackgroundChannel} / 0.23)` : e
        }
      },
      [`&.${Oe.focused} .${Oe.notchedOutline}`]: {
        borderWidth: 2
      },
      variants: [
        ...Object.entries(A.palette).filter(wt()).map(([t]) => ({
          props: {
            color: t
          },
          style: {
            [`&.${Oe.focused} .${Oe.notchedOutline}`]: {
              borderColor: (A.vars || A).palette[t].main
            }
          }
        })),
        {
          props: {},
          style: {
            [`&.${Oe.error} .${Oe.notchedOutline}`]: {
              borderColor: (A.vars || A).palette.error.main
            },
            [`&.${Oe.disabled} .${Oe.notchedOutline}`]: {
              borderColor: (A.vars || A).palette.action.disabled
            }
          }
        },
        {
          props: ({ ownerState: t }) => t.startAdornment,
          style: {
            paddingLeft: 14
          }
        },
        {
          props: ({ ownerState: t }) => t.endAdornment,
          style: {
            paddingRight: 14
          }
        },
        {
          props: ({ ownerState: t }) => t.multiline,
          style: {
            padding: "16.5px 14px"
          }
        },
        {
          props: ({ ownerState: t, size: r }) => t.multiline && r === "small",
          style: {
            padding: "8.5px 14px"
          }
        }
      ]
    };
  })), AC = lA(Ym, {
    name: "MuiOutlinedInput",
    slot: "NotchedOutline",
    overridesResolver: (A, e) => e.notchedOutline
  })(MA(({ theme: A }) => {
    const e = A.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
    return {
      borderColor: A.vars ? `rgba(${A.vars.palette.common.onBackgroundChannel} / 0.23)` : e
    };
  })), eC = lA(fi, {
    name: "MuiOutlinedInput",
    slot: "Input",
    overridesResolver: ui
  })(MA(({ theme: A }) => ({
    padding: "16.5px 14px",
    ...!A.vars && {
      "&:-webkit-autofill": {
        WebkitBoxShadow: A.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
        WebkitTextFillColor: A.palette.mode === "light" ? null : "#fff",
        caretColor: A.palette.mode === "light" ? null : "#fff",
        borderRadius: "inherit"
      }
    },
    ...A.vars && {
      "&:-webkit-autofill": {
        borderRadius: "inherit"
      },
      [A.getColorSchemeSelector("dark")]: {
        "&:-webkit-autofill": {
          WebkitBoxShadow: "0 0 0 100px #266798 inset",
          WebkitTextFillColor: "#fff",
          caretColor: "#fff"
        }
      }
    },
    variants: [
      {
        props: {
          size: "small"
        },
        style: {
          padding: "8.5px 14px"
        }
      },
      {
        props: ({ ownerState: e }) => e.multiline,
        style: {
          padding: 0
        }
      },
      {
        props: ({ ownerState: e }) => e.startAdornment,
        style: {
          paddingLeft: 0
        }
      },
      {
        props: ({ ownerState: e }) => e.endAdornment,
        style: {
          paddingRight: 0
        }
      }
    ]
  }))), Ds = h.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiOutlinedInput"
    }), { components: n = {}, fullWidth: o = false, inputComponent: i = "input", label: a, multiline: l = false, notched: s, slots: c = {}, slotProps: d = {}, type: u = "text", ...f } = r, g = Zm(r), p = Br(), Q = pr({
      props: r,
      muiFormControl: p,
      states: [
        "color",
        "disabled",
        "error",
        "focused",
        "hiddenLabel",
        "size",
        "required"
      ]
    }), m = {
      ...r,
      color: Q.color || "primary",
      disabled: Q.disabled,
      error: Q.error,
      focused: Q.focused,
      formControl: p,
      fullWidth: o,
      hiddenLabel: Q.hiddenLabel,
      multiline: l,
      size: Q.size,
      type: u
    }, F = c.root ?? n.Root ?? qm, w = c.input ?? n.Input ?? eC, [v, E] = ce("notchedOutline", {
      elementType: AC,
      className: g.notchedOutline,
      shouldForwardComponentProp: true,
      ownerState: m,
      externalForwardedProps: {
        slots: c,
        slotProps: d
      },
      additionalProps: {
        label: a != null && a !== "" && Q.required ? L.jsxs(h.Fragment, {
          children: [
            a,
            "\u2009",
            "*"
          ]
        }) : a
      }
    });
    return L.jsx(Rs, {
      slots: {
        root: F,
        input: w
      },
      slotProps: d,
      renderSuffix: (C) => L.jsx(v, {
        ...E,
        notched: typeof s < "u" ? s : !!(C.startAdornment || C.filled || C.focused)
      }),
      fullWidth: o,
      inputComponent: i,
      multiline: l,
      ref: t,
      type: u,
      ...f,
      classes: {
        ...g,
        notchedOutline: null
      }
    });
  });
  Ds.muiName = "Input";
  function pd(A) {
    return RA("MuiSelect", A);
  }
  const br = HA("MuiSelect", [
    "root",
    "select",
    "multiple",
    "filled",
    "outlined",
    "standard",
    "disabled",
    "focused",
    "icon",
    "iconOpen",
    "iconFilled",
    "iconOutlined",
    "iconStandard",
    "nativeInput",
    "error"
  ]);
  var zl;
  const tC = lA(fd, {
    name: "MuiSelect",
    slot: "Select",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        {
          [`&.${br.select}`]: e.select
        },
        {
          [`&.${br.select}`]: e[t.variant]
        },
        {
          [`&.${br.error}`]: e.error
        },
        {
          [`&.${br.multiple}`]: e.multiple
        }
      ];
    }
  })({
    [`&.${br.select}`]: {
      height: "auto",
      minHeight: "1.4375em",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden"
    }
  }), rC = lA(gd, {
    name: "MuiSelect",
    slot: "Icon",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.icon,
        t.variant && e[`icon${mA(t.variant)}`],
        t.open && e.iconOpen
      ];
    }
  })({}), nC = lA("input", {
    shouldForwardProp: (A) => rd(A) && A !== "classes",
    name: "MuiSelect",
    slot: "NativeInput",
    overridesResolver: (A, e) => e.nativeInput
  })({
    bottom: 0,
    left: 0,
    position: "absolute",
    opacity: 0,
    pointerEvents: "none",
    width: "100%",
    boxSizing: "border-box"
  });
  function Xl(A, e) {
    return typeof e == "object" && e !== null ? A === e : String(A) === String(e);
  }
  function oC(A) {
    return A == null || typeof A == "string" && !A.trim();
  }
  let iC, aC, sC, Ps, lC, cC, uC;
  iC = (A) => {
    const { classes: e, variant: t, disabled: r, multiple: n, open: o, error: i } = A, a = {
      select: [
        "select",
        t,
        r && "disabled",
        n && "multiple",
        i && "error"
      ],
      icon: [
        "icon",
        `icon${mA(t)}`,
        o && "iconOpen",
        r && "disabled"
      ],
      nativeInput: [
        "nativeInput"
      ]
    };
    return OA(a, pd, e);
  };
  aC = h.forwardRef(function(e, t) {
    var _a2;
    const { "aria-describedby": r, "aria-label": n, autoFocus: o, autoWidth: i, children: a, className: l, defaultOpen: s, defaultValue: c, disabled: d, displayEmpty: u, error: f = false, IconComponent: g, inputRef: p, labelId: Q, MenuProps: m = {}, multiple: F, name: w, onBlur: v, onChange: E, onClose: C, onFocus: x, onOpen: I, open: T, readOnly: B, renderValue: S, required: D, SelectDisplayProps: O = {}, tabIndex: N, type: k, value: M, variant: W = "standard", ...nA } = e, [P, X] = pl({
      controlled: M,
      default: c,
      name: "Select"
    }), [AA, j] = pl({
      controlled: T,
      default: s,
      name: "Select"
    }), R = h.useRef(null), $ = h.useRef(null), [V, Y] = h.useState(null), { current: dA } = h.useRef(T != null), [iA, tA] = h.useState(), J = Be(t, p), oA = h.useCallback((uA) => {
      $.current = uA, uA && Y(uA);
    }, []), aA = V == null ? void 0 : V.parentNode;
    h.useImperativeHandle(J, () => ({
      focus: () => {
        $.current.focus();
      },
      node: R.current,
      value: P
    }), [
      P
    ]), h.useEffect(() => {
      s && AA && V && !dA && (tA(i ? null : aA.clientWidth), $.current.focus());
    }, [
      V,
      i
    ]), h.useEffect(() => {
      o && $.current.focus();
    }, [
      o
    ]), h.useEffect(() => {
      if (!Q) return;
      const uA = Le($.current).getElementById(Q);
      if (uA) {
        const xA = () => {
          getSelection().isCollapsed && $.current.focus();
        };
        return uA.addEventListener("click", xA), () => {
          uA.removeEventListener("click", xA);
        };
      }
    }, [
      Q
    ]);
    const y = (uA, xA) => {
      uA ? I && I(xA) : C && C(xA), dA || (tA(i ? null : aA.clientWidth), j(uA));
    }, U = (uA) => {
      uA.button === 0 && (uA.preventDefault(), $.current.focus(), y(true, uA));
    }, b = (uA) => {
      y(false, uA);
    }, _ = h.Children.toArray(a), z = (uA) => {
      const xA = _.find((ee) => ee.props.value === uA.target.value);
      xA !== void 0 && (X(xA.props.value), E && E(uA, xA));
    }, G = (uA) => (xA) => {
      let ee;
      if (xA.currentTarget.hasAttribute("tabindex")) {
        if (F) {
          ee = Array.isArray(P) ? P.slice() : [];
          const Dt = P.indexOf(uA.props.value);
          Dt === -1 ? ee.push(uA.props.value) : ee.splice(Dt, 1);
        } else ee = uA.props.value;
        if (uA.props.onClick && uA.props.onClick(xA), P !== ee && (X(ee), E)) {
          const Dt = xA.nativeEvent || xA, js = new Dt.constructor(Dt.type, Dt);
          Object.defineProperty(js, "target", {
            writable: true,
            value: {
              value: ee,
              name: w
            }
          }), E(js, uA);
        }
        F || y(false, xA);
      }
    }, sA = (uA) => {
      B || [
        " ",
        "ArrowUp",
        "ArrowDown",
        "Enter"
      ].includes(uA.key) && (uA.preventDefault(), y(true, uA));
    }, cA = V !== null && AA, fA = (uA) => {
      !cA && v && (Object.defineProperty(uA, "target", {
        writable: true,
        value: {
          value: P,
          name: w
        }
      }), v(uA));
    };
    delete nA["aria-invalid"];
    let eA, Ae;
    const gA = [];
    let _A = false;
    (fo({
      value: P
    }) || u) && (S ? eA = S(P) : _A = true);
    const zA = _.map((uA) => {
      if (!h.isValidElement(uA)) return null;
      let xA;
      if (F) {
        if (!Array.isArray(P)) throw new Error(et(2));
        xA = P.some((ee) => Xl(ee, uA.props.value)), xA && _A && gA.push(uA.props.children);
      } else xA = Xl(P, uA.props.value), xA && _A && (Ae = uA.props.children);
      return h.cloneElement(uA, {
        "aria-selected": xA ? "true" : "false",
        onClick: G(uA),
        onKeyUp: (ee) => {
          ee.key === " " && ee.preventDefault(), uA.props.onKeyUp && uA.props.onKeyUp(ee);
        },
        role: "option",
        selected: xA,
        value: void 0,
        "data-value": uA.props.value
      });
    });
    _A && (F ? gA.length === 0 ? eA = null : eA = gA.reduce((uA, xA, ee) => (uA.push(xA), ee < gA.length - 1 && uA.push(", "), uA), []) : eA = Ae);
    let ie = iA;
    !i && dA && V && (ie = aA.clientWidth);
    let jA;
    typeof N < "u" ? jA = N : jA = d ? null : 0;
    const it = O.id || (w ? `mui-component-select-${w}` : void 0), yt = {
      ...e,
      variant: W,
      value: P,
      open: cA,
      error: f
    }, TA = iC(yt), Mt = {
      ...m.PaperProps,
      ...(_a2 = m.slotProps) == null ? void 0 : _a2.paper
    }, Cr = si();
    return L.jsxs(h.Fragment, {
      children: [
        L.jsx(tC, {
          as: "div",
          ref: oA,
          tabIndex: jA,
          role: "combobox",
          "aria-controls": cA ? Cr : void 0,
          "aria-disabled": d ? "true" : void 0,
          "aria-expanded": cA ? "true" : "false",
          "aria-haspopup": "listbox",
          "aria-label": n,
          "aria-labelledby": [
            Q,
            it
          ].filter(Boolean).join(" ") || void 0,
          "aria-describedby": r,
          "aria-required": D ? "true" : void 0,
          "aria-invalid": f ? "true" : void 0,
          onKeyDown: sA,
          onMouseDown: d || B ? null : U,
          onBlur: fA,
          onFocus: x,
          ...O,
          ownerState: yt,
          className: pA(O.className, TA.select, l),
          id: it,
          children: oC(eA) ? zl || (zl = L.jsx("span", {
            className: "notranslate",
            "aria-hidden": true,
            children: "\u200B"
          })) : eA
        }),
        L.jsx(nC, {
          "aria-invalid": f,
          value: Array.isArray(P) ? P.join(",") : P,
          name: w,
          ref: R,
          "aria-hidden": true,
          onChange: z,
          tabIndex: -1,
          disabled: d,
          className: TA.nativeInput,
          autoFocus: o,
          required: D,
          ...nA,
          ownerState: yt
        }),
        L.jsx(rC, {
          as: g,
          className: TA.icon,
          ownerState: yt
        }),
        L.jsx(Gm, {
          id: `menu-${w || ""}`,
          anchorEl: aA,
          open: cA,
          onClose: b,
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "center"
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "center"
          },
          ...m,
          slotProps: {
            ...m.slotProps,
            list: {
              "aria-labelledby": Q,
              role: "listbox",
              "aria-multiselectable": F ? "true" : void 0,
              disableListWrap: true,
              id: Cr,
              ...m.MenuListProps
            },
            paper: {
              ...Mt,
              style: {
                minWidth: ie,
                ...Mt != null ? Mt.style : null
              }
            }
          },
          children: zA
        })
      ]
    });
  });
  sC = (A) => {
    const { classes: e } = A, r = OA({
      root: [
        "root"
      ]
    }, pd, e);
    return {
      ...e,
      ...r
    };
  };
  Ps = {
    name: "MuiSelect",
    overridesResolver: (A, e) => e.root,
    shouldForwardProp: (A) => We(A) && A !== "variant",
    slot: "Root"
  };
  lC = lA(Ks, Ps)("");
  cC = lA(Ds, Ps)("");
  uC = lA(Os, Ps)("");
  Bd = h.forwardRef(function(e, t) {
    const r = KA({
      name: "MuiSelect",
      props: e
    }), { autoWidth: n = false, children: o, classes: i = {}, className: a, defaultOpen: l = false, displayEmpty: s = false, IconComponent: c = C0, id: d, input: u, inputProps: f, label: g, labelId: p, MenuProps: Q, multiple: m = false, native: F = false, onClose: w, onOpen: v, open: E, renderValue: C, SelectDisplayProps: x, variant: I = "outlined", ...T } = r, B = F ? Xm : aC, S = Br(), D = pr({
      props: r,
      muiFormControl: S,
      states: [
        "variant",
        "error"
      ]
    }), O = D.variant || I, N = {
      ...r,
      variant: O,
      classes: i
    }, k = sC(N), { root: M, ...W } = k, nA = u || {
      standard: L.jsx(lC, {
        ownerState: N
      }),
      outlined: L.jsx(cC, {
        label: g,
        ownerState: N
      }),
      filled: L.jsx(uC, {
        ownerState: N
      })
    }[O], P = Be(t, un(nA));
    return L.jsx(h.Fragment, {
      children: h.cloneElement(nA, {
        inputComponent: B,
        inputProps: {
          children: o,
          error: D.error,
          IconComponent: c,
          variant: O,
          type: void 0,
          multiple: m,
          ...F ? {
            id: d
          } : {
            autoWidth: n,
            defaultOpen: l,
            displayEmpty: s,
            labelId: p,
            MenuProps: Q,
            onClose: w,
            onOpen: v,
            open: E,
            renderValue: C,
            SelectDisplayProps: {
              id: d,
              ...x
            }
          },
          ...f,
          classes: f ? ZA(W, f.classes) : W,
          ...u ? u.props.inputProps : {}
        },
        ...(m && F || s) && O === "outlined" ? {
          notched: true
        } : {},
        ref: P,
        className: pA(nA.props.className, a, k.root),
        ...!u && {
          variant: O
        },
        ...T
      })
    });
  });
  Bd.muiName = "Select";
  function dC(A) {
    return RA("MuiTextField", A);
  }
  HA("MuiTextField", [
    "root"
  ]);
  let fC, gC, pC;
  fC = {
    standard: Ks,
    filled: Os,
    outlined: Ds
  };
  gC = (A) => {
    const { classes: e } = A;
    return OA({
      root: [
        "root"
      ]
    }, dC, e);
  };
  pC = lA(lm, {
    name: "MuiTextField",
    slot: "Root",
    overridesResolver: (A, e) => e.root
  })({});
  BC = h.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiTextField"
    }), { autoComplete: n, autoFocus: o = false, children: i, className: a, color: l = "primary", defaultValue: s, disabled: c = false, error: d = false, FormHelperTextProps: u, fullWidth: f = false, helperText: g, id: p, InputLabelProps: Q, inputProps: m, InputProps: F, inputRef: w, label: v, maxRows: E, minRows: C, multiline: x = false, name: I, onBlur: T, onChange: B, onFocus: S, placeholder: D, required: O = false, rows: N, select: k = false, SelectProps: M, slots: W = {}, slotProps: nA = {}, type: P, value: X, variant: AA = "outlined", ...j } = r, R = {
      ...r,
      autoFocus: o,
      color: l,
      disabled: c,
      error: d,
      fullWidth: f,
      multiline: x,
      required: O,
      select: k,
      variant: AA
    }, $ = gC(R), V = si(p), Y = g && V ? `${V}-helper-text` : void 0, dA = v && V ? `${V}-label` : void 0, iA = fC[AA], tA = {
      slots: W,
      slotProps: {
        input: F,
        inputLabel: Q,
        htmlInput: m,
        formHelperText: u,
        select: M,
        ...nA
      }
    }, J = {}, oA = tA.slotProps.inputLabel;
    AA === "outlined" && (oA && typeof oA.shrink < "u" && (J.notched = oA.shrink), J.label = v), k && ((!M || !M.native) && (J.id = void 0), J["aria-describedby"] = void 0);
    const [aA, y] = ce("root", {
      elementType: pC,
      shouldForwardComponentProp: true,
      externalForwardedProps: {
        ...tA,
        ...j
      },
      ownerState: R,
      className: pA($.root, a),
      ref: t,
      additionalProps: {
        disabled: c,
        error: d,
        fullWidth: f,
        required: O,
        color: l,
        variant: AA
      }
    }), [U, b] = ce("input", {
      elementType: iA,
      externalForwardedProps: tA,
      additionalProps: J,
      ownerState: R
    }), [_, z] = ce("inputLabel", {
      elementType: Um,
      externalForwardedProps: tA,
      ownerState: R
    }), [G, sA] = ce("htmlInput", {
      elementType: "input",
      externalForwardedProps: tA,
      ownerState: R
    }), [cA, fA] = ce("formHelperText", {
      elementType: fm,
      externalForwardedProps: tA,
      ownerState: R
    }), [eA, Ae] = ce("select", {
      elementType: Bd,
      externalForwardedProps: tA,
      ownerState: R
    }), gA = L.jsx(U, {
      "aria-describedby": Y,
      autoComplete: n,
      autoFocus: o,
      defaultValue: s,
      fullWidth: f,
      multiline: x,
      name: I,
      rows: N,
      maxRows: E,
      minRows: C,
      type: P,
      value: X,
      id: V,
      inputRef: w,
      onBlur: T,
      onChange: B,
      onFocus: S,
      placeholder: D,
      inputProps: sA,
      slots: {
        input: W.htmlInput ? G : void 0
      },
      ...b
    });
    return L.jsxs(aA, {
      ...y,
      children: [
        v != null && v !== "" && L.jsx(_, {
          htmlFor: V,
          id: dA,
          ...z,
          children: v
        }),
        k ? L.jsx(eA, {
          "aria-describedby": Y,
          id: V,
          labelId: dA,
          value: X,
          input: gA,
          ...Ae,
          children: i
        }) : gA,
        g && L.jsx(cA, {
          id: Y,
          ...fA,
          children: g
        })
      ]
    });
  });
  Ea = class extends window.visRxWidget {
    wrappedCollectionContent = true;
    static getI18nPrefix() {
      return "vis_2_widgets_collection_";
    }
    getPropertyValue = (e) => this.state.values[`${this.state.rxData[e]}.val`];
    setValue = (e, t, r = false) => {
      !e || e === "nothing_selected" || this.props.context.socket.setState(e, t, r).catch((n) => console.error(`Cannot set state ${e}: ${n}`));
    };
    wrapContent(e) {
      return L.jsx(L.Fragment, {
        children: L.jsx(Te, {
          className: "GENERIC-0",
          sx: {
            position: "relative",
            overflow: "hidden",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          },
          children: L.jsx(Te, {
            className: "GENERIC-1",
            sx: {
              width: this.wrappedCollectionContent ? "calc(100% - 8px)" : "100%",
              height: this.wrappedCollectionContent ? "calc(100% - 8px)" : "100%"
            },
            children: e
          })
        })
      });
    }
  };
  let hC, eo, hd;
  hC = [
    "background",
    "background-color",
    "background-image",
    "background-position",
    "background-repeat",
    "background-size",
    "background-clip",
    "background-origin",
    "border",
    "border-width",
    "border-style",
    "border-color",
    "border-radius",
    "color",
    "text-align",
    "text-shadow",
    "font-family",
    "font-size",
    "font-weight",
    "font-style",
    "font-variant",
    "line-height",
    "letter-spacing",
    "word-spacing",
    "box-sizing",
    "box-shadow"
  ];
  _s = (A) => h.useMemo(() => {
    if (!A) return {
      backgroundStyles: void 0,
      borderStyles: void 0,
      textStyles: void 0,
      fontStyles: void 0,
      boxStyles: void 0
    };
    const e = {}, t = {}, r = {}, n = {}, o = {};
    return hC.forEach((i) => {
      const a = A[i];
      a !== void 0 && (i.includes("background") ? e[i] = a : i.includes("border") ? t[i] = a : i.includes("font") || i.includes("line-height") || i.includes("letter-spacing") || i.includes("word-spacing") ? n[i] = a : i.includes("text") || i.includes("color") ? r[i] = a : o[i] = a);
    }), {
      backgroundStyles: e,
      borderStyles: t,
      textStyles: r,
      fontStyles: n,
      boxStyles: o
    };
  }, [
    A
  ]);
  eo = (A) => A.startsWith("&") || A.includes(" ") || A.startsWith("@") ? A : A.replace(/-([a-z])/g, (e, t) => t.toUpperCase());
  hd = (A) => {
    const e = Object.fromEntries(Object.entries(A).map(([t, r]) => {
      if (Array.isArray(r)) {
        const n = r.filter((o) => o != null);
        return [
          eo(t),
          n.length > 0 ? n : void 0
        ];
      }
      return typeof r == "object" && r !== null ? [
        eo(t),
        hd(r)
      ] : [
        eo(t),
        r
      ];
    }).filter(([, t]) => t != null));
    return Object.keys(e).length > 0 ? e : void 0;
  };
  po = (A) => {
    if (!A) return {};
    const e = Object.fromEntries(Object.entries(A).map(([t, r]) => {
      const n = eo(t);
      if (Array.isArray(r)) {
        const o = r.filter((i) => i != null);
        return [
          n,
          o.length > 0 ? o : void 0
        ];
      }
      if (typeof r == "object" && r !== null) {
        const o = hd(r);
        return [
          n,
          o
        ];
      }
      return [
        n,
        r
      ];
    }).filter(([, t]) => t != null));
    return Object.keys(e).length > 0 ? e : {};
  };
  hr = h.createContext({});
  function mC({ children: A, context: e }) {
    const t = e.theme, r = e.widget, { fontStyles: n, textStyles: o } = _s(r.style || {}), i = h.useMemo(() => li(ZA(t, {
      cssVariables: {
        cssVarPrefix: "collection"
      },
      components: {
        MuiTypography: {
          styleOverrides: {
            root: {
              fontSize: "0.875rem",
              ...po(n),
              ...po(o),
              color: (o == null ? void 0 : o.color) || t.palette.primary.main
            }
          }
        }
      }
    })), [
      t,
      n,
      o
    ]);
    return L.jsxs(nd, {
      theme: i,
      children: [
        L.jsx(T0, {}),
        L.jsx(hr.Provider, {
          value: e,
          children: A
        })
      ]
    });
  }
  zU = function(A, e) {
    return L.jsx(mC, {
      context: e,
      children: A
    });
  };
  ve = ({ dividerText: A = "" }) => {
    const e = {
      position: "absolute",
      left: 0,
      width: "100%"
    };
    return L.jsx(Te, {
      sx: {
        display: "inline-block",
        pt: 1.5,
        pb: A ? 2 : 1.5
      },
      children: A ? L.jsx(go, {
        sx: e,
        children: L.jsx(qn, {
          sx: {
            opacity: 0.7,
            color: "primary.main"
          },
          variant: "caption",
          children: Ea.t(A)
        })
      }) : L.jsx(go, {
        sx: e
      })
    });
  };
  CC = od(L.jsx("path", {
    d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
  }), "Delete");
  var md = {
    exports: {}
  };
  (function(A) {
    (function(e) {
      var t = /^\s+/, r = /\s+$/, n = 0, o = e.round, i = e.min, a = e.max, l = e.random;
      function s(y, U) {
        if (y = y || "", U = U || {}, y instanceof s) return y;
        if (!(this instanceof s)) return new s(y, U);
        var b = c(y);
        this._originalInput = y, this._r = b.r, this._g = b.g, this._b = b.b, this._a = b.a, this._roundA = o(100 * this._a) / 100, this._format = U.format || b.format, this._gradientType = U.gradientType, this._r < 1 && (this._r = o(this._r)), this._g < 1 && (this._g = o(this._g)), this._b < 1 && (this._b = o(this._b)), this._ok = b.ok, this._tc_id = n++;
      }
      s.prototype = {
        isDark: function() {
          return this.getBrightness() < 128;
        },
        isLight: function() {
          return !this.isDark();
        },
        isValid: function() {
          return this._ok;
        },
        getOriginalInput: function() {
          return this._originalInput;
        },
        getFormat: function() {
          return this._format;
        },
        getAlpha: function() {
          return this._a;
        },
        getBrightness: function() {
          var y = this.toRgb();
          return (y.r * 299 + y.g * 587 + y.b * 114) / 1e3;
        },
        getLuminance: function() {
          var y = this.toRgb(), U, b, _, z, G, sA;
          return U = y.r / 255, b = y.g / 255, _ = y.b / 255, U <= 0.03928 ? z = U / 12.92 : z = e.pow((U + 0.055) / 1.055, 2.4), b <= 0.03928 ? G = b / 12.92 : G = e.pow((b + 0.055) / 1.055, 2.4), _ <= 0.03928 ? sA = _ / 12.92 : sA = e.pow((_ + 0.055) / 1.055, 2.4), 0.2126 * z + 0.7152 * G + 0.0722 * sA;
        },
        setAlpha: function(y) {
          return this._a = P(y), this._roundA = o(100 * this._a) / 100, this;
        },
        toHsv: function() {
          var y = g(this._r, this._g, this._b);
          return {
            h: y.h * 360,
            s: y.s,
            v: y.v,
            a: this._a
          };
        },
        toHsvString: function() {
          var y = g(this._r, this._g, this._b), U = o(y.h * 360), b = o(y.s * 100), _ = o(y.v * 100);
          return this._a == 1 ? "hsv(" + U + ", " + b + "%, " + _ + "%)" : "hsva(" + U + ", " + b + "%, " + _ + "%, " + this._roundA + ")";
        },
        toHsl: function() {
          var y = u(this._r, this._g, this._b);
          return {
            h: y.h * 360,
            s: y.s,
            l: y.l,
            a: this._a
          };
        },
        toHslString: function() {
          var y = u(this._r, this._g, this._b), U = o(y.h * 360), b = o(y.s * 100), _ = o(y.l * 100);
          return this._a == 1 ? "hsl(" + U + ", " + b + "%, " + _ + "%)" : "hsla(" + U + ", " + b + "%, " + _ + "%, " + this._roundA + ")";
        },
        toHex: function(y) {
          return Q(this._r, this._g, this._b, y);
        },
        toHexString: function(y) {
          return "#" + this.toHex(y);
        },
        toHex8: function(y) {
          return m(this._r, this._g, this._b, this._a, y);
        },
        toHex8String: function(y) {
          return "#" + this.toHex8(y);
        },
        toRgb: function() {
          return {
            r: o(this._r),
            g: o(this._g),
            b: o(this._b),
            a: this._a
          };
        },
        toRgbString: function() {
          return this._a == 1 ? "rgb(" + o(this._r) + ", " + o(this._g) + ", " + o(this._b) + ")" : "rgba(" + o(this._r) + ", " + o(this._g) + ", " + o(this._b) + ", " + this._roundA + ")";
        },
        toPercentageRgb: function() {
          return {
            r: o(X(this._r, 255) * 100) + "%",
            g: o(X(this._g, 255) * 100) + "%",
            b: o(X(this._b, 255) * 100) + "%",
            a: this._a
          };
        },
        toPercentageRgbString: function() {
          return this._a == 1 ? "rgb(" + o(X(this._r, 255) * 100) + "%, " + o(X(this._g, 255) * 100) + "%, " + o(X(this._b, 255) * 100) + "%)" : "rgba(" + o(X(this._r, 255) * 100) + "%, " + o(X(this._g, 255) * 100) + "%, " + o(X(this._b, 255) * 100) + "%, " + this._roundA + ")";
        },
        toName: function() {
          return this._a === 0 ? "transparent" : this._a < 1 ? false : W[Q(this._r, this._g, this._b, true)] || false;
        },
        toFilter: function(y) {
          var U = "#" + F(this._r, this._g, this._b, this._a), b = U, _ = this._gradientType ? "GradientType = 1, " : "";
          if (y) {
            var z = s(y);
            b = "#" + F(z._r, z._g, z._b, z._a);
          }
          return "progid:DXImageTransform.Microsoft.gradient(" + _ + "startColorstr=" + U + ",endColorstr=" + b + ")";
        },
        toString: function(y) {
          var U = !!y;
          y = y || this._format;
          var b = false, _ = this._a < 1 && this._a >= 0, z = !U && _ && (y === "hex" || y === "hex6" || y === "hex3" || y === "hex4" || y === "hex8" || y === "name");
          return z ? y === "name" && this._a === 0 ? this.toName() : this.toRgbString() : (y === "rgb" && (b = this.toRgbString()), y === "prgb" && (b = this.toPercentageRgbString()), (y === "hex" || y === "hex6") && (b = this.toHexString()), y === "hex3" && (b = this.toHexString(true)), y === "hex4" && (b = this.toHex8String(true)), y === "hex8" && (b = this.toHex8String()), y === "name" && (b = this.toName()), y === "hsl" && (b = this.toHslString()), y === "hsv" && (b = this.toHsvString()), b || this.toHexString());
        },
        clone: function() {
          return s(this.toString());
        },
        _applyModification: function(y, U) {
          var b = y.apply(null, [
            this
          ].concat([].slice.call(U)));
          return this._r = b._r, this._g = b._g, this._b = b._b, this.setAlpha(b._a), this;
        },
        lighten: function() {
          return this._applyModification(C, arguments);
        },
        brighten: function() {
          return this._applyModification(x, arguments);
        },
        darken: function() {
          return this._applyModification(I, arguments);
        },
        desaturate: function() {
          return this._applyModification(w, arguments);
        },
        saturate: function() {
          return this._applyModification(v, arguments);
        },
        greyscale: function() {
          return this._applyModification(E, arguments);
        },
        spin: function() {
          return this._applyModification(T, arguments);
        },
        _applyCombination: function(y, U) {
          return y.apply(null, [
            this
          ].concat([].slice.call(U)));
        },
        analogous: function() {
          return this._applyCombination(N, arguments);
        },
        complement: function() {
          return this._applyCombination(B, arguments);
        },
        monochromatic: function() {
          return this._applyCombination(k, arguments);
        },
        splitcomplement: function() {
          return this._applyCombination(O, arguments);
        },
        triad: function() {
          return this._applyCombination(S, arguments);
        },
        tetrad: function() {
          return this._applyCombination(D, arguments);
        }
      }, s.fromRatio = function(y, U) {
        if (typeof y == "object") {
          var b = {};
          for (var _ in y) y.hasOwnProperty(_) && (_ === "a" ? b[_] = y[_] : b[_] = Y(y[_]));
          y = b;
        }
        return s(y, U);
      };
      function c(y) {
        var U = {
          r: 0,
          g: 0,
          b: 0
        }, b = 1, _ = null, z = null, G = null, sA = false, cA = false;
        return typeof y == "string" && (y = oA(y)), typeof y == "object" && (J(y.r) && J(y.g) && J(y.b) ? (U = d(y.r, y.g, y.b), sA = true, cA = String(y.r).substr(-1) === "%" ? "prgb" : "rgb") : J(y.h) && J(y.s) && J(y.v) ? (_ = Y(y.s), z = Y(y.v), U = p(y.h, _, z), sA = true, cA = "hsv") : J(y.h) && J(y.s) && J(y.l) && (_ = Y(y.s), G = Y(y.l), U = f(y.h, _, G), sA = true, cA = "hsl"), y.hasOwnProperty("a") && (b = y.a)), b = P(b), {
          ok: sA,
          format: y.format || cA,
          r: i(255, a(U.r, 0)),
          g: i(255, a(U.g, 0)),
          b: i(255, a(U.b, 0)),
          a: b
        };
      }
      function d(y, U, b) {
        return {
          r: X(y, 255) * 255,
          g: X(U, 255) * 255,
          b: X(b, 255) * 255
        };
      }
      function u(y, U, b) {
        y = X(y, 255), U = X(U, 255), b = X(b, 255);
        var _ = a(y, U, b), z = i(y, U, b), G, sA, cA = (_ + z) / 2;
        if (_ == z) G = sA = 0;
        else {
          var fA = _ - z;
          switch (sA = cA > 0.5 ? fA / (2 - _ - z) : fA / (_ + z), _) {
            case y:
              G = (U - b) / fA + (U < b ? 6 : 0);
              break;
            case U:
              G = (b - y) / fA + 2;
              break;
            case b:
              G = (y - U) / fA + 4;
              break;
          }
          G /= 6;
        }
        return {
          h: G,
          s: sA,
          l: cA
        };
      }
      function f(y, U, b) {
        var _, z, G;
        y = X(y, 360), U = X(U, 100), b = X(b, 100);
        function sA(eA, Ae, gA) {
          return gA < 0 && (gA += 1), gA > 1 && (gA -= 1), gA < 1 / 6 ? eA + (Ae - eA) * 6 * gA : gA < 1 / 2 ? Ae : gA < 2 / 3 ? eA + (Ae - eA) * (2 / 3 - gA) * 6 : eA;
        }
        if (U === 0) _ = z = G = b;
        else {
          var cA = b < 0.5 ? b * (1 + U) : b + U - b * U, fA = 2 * b - cA;
          _ = sA(fA, cA, y + 1 / 3), z = sA(fA, cA, y), G = sA(fA, cA, y - 1 / 3);
        }
        return {
          r: _ * 255,
          g: z * 255,
          b: G * 255
        };
      }
      function g(y, U, b) {
        y = X(y, 255), U = X(U, 255), b = X(b, 255);
        var _ = a(y, U, b), z = i(y, U, b), G, sA, cA = _, fA = _ - z;
        if (sA = _ === 0 ? 0 : fA / _, _ == z) G = 0;
        else {
          switch (_) {
            case y:
              G = (U - b) / fA + (U < b ? 6 : 0);
              break;
            case U:
              G = (b - y) / fA + 2;
              break;
            case b:
              G = (y - U) / fA + 4;
              break;
          }
          G /= 6;
        }
        return {
          h: G,
          s: sA,
          v: cA
        };
      }
      function p(y, U, b) {
        y = X(y, 360) * 6, U = X(U, 100), b = X(b, 100);
        var _ = e.floor(y), z = y - _, G = b * (1 - U), sA = b * (1 - z * U), cA = b * (1 - (1 - z) * U), fA = _ % 6, eA = [
          b,
          sA,
          G,
          G,
          cA,
          b
        ][fA], Ae = [
          cA,
          b,
          b,
          sA,
          G,
          G
        ][fA], gA = [
          G,
          G,
          cA,
          b,
          b,
          sA
        ][fA];
        return {
          r: eA * 255,
          g: Ae * 255,
          b: gA * 255
        };
      }
      function Q(y, U, b, _) {
        var z = [
          V(o(y).toString(16)),
          V(o(U).toString(16)),
          V(o(b).toString(16))
        ];
        return _ && z[0].charAt(0) == z[0].charAt(1) && z[1].charAt(0) == z[1].charAt(1) && z[2].charAt(0) == z[2].charAt(1) ? z[0].charAt(0) + z[1].charAt(0) + z[2].charAt(0) : z.join("");
      }
      function m(y, U, b, _, z) {
        var G = [
          V(o(y).toString(16)),
          V(o(U).toString(16)),
          V(o(b).toString(16)),
          V(dA(_))
        ];
        return z && G[0].charAt(0) == G[0].charAt(1) && G[1].charAt(0) == G[1].charAt(1) && G[2].charAt(0) == G[2].charAt(1) && G[3].charAt(0) == G[3].charAt(1) ? G[0].charAt(0) + G[1].charAt(0) + G[2].charAt(0) + G[3].charAt(0) : G.join("");
      }
      function F(y, U, b, _) {
        var z = [
          V(dA(_)),
          V(o(y).toString(16)),
          V(o(U).toString(16)),
          V(o(b).toString(16))
        ];
        return z.join("");
      }
      s.equals = function(y, U) {
        return !y || !U ? false : s(y).toRgbString() == s(U).toRgbString();
      }, s.random = function() {
        return s.fromRatio({
          r: l(),
          g: l(),
          b: l()
        });
      };
      function w(y, U) {
        U = U === 0 ? 0 : U || 10;
        var b = s(y).toHsl();
        return b.s -= U / 100, b.s = AA(b.s), s(b);
      }
      function v(y, U) {
        U = U === 0 ? 0 : U || 10;
        var b = s(y).toHsl();
        return b.s += U / 100, b.s = AA(b.s), s(b);
      }
      function E(y) {
        return s(y).desaturate(100);
      }
      function C(y, U) {
        U = U === 0 ? 0 : U || 10;
        var b = s(y).toHsl();
        return b.l += U / 100, b.l = AA(b.l), s(b);
      }
      function x(y, U) {
        U = U === 0 ? 0 : U || 10;
        var b = s(y).toRgb();
        return b.r = a(0, i(255, b.r - o(255 * -(U / 100)))), b.g = a(0, i(255, b.g - o(255 * -(U / 100)))), b.b = a(0, i(255, b.b - o(255 * -(U / 100)))), s(b);
      }
      function I(y, U) {
        U = U === 0 ? 0 : U || 10;
        var b = s(y).toHsl();
        return b.l -= U / 100, b.l = AA(b.l), s(b);
      }
      function T(y, U) {
        var b = s(y).toHsl(), _ = (b.h + U) % 360;
        return b.h = _ < 0 ? 360 + _ : _, s(b);
      }
      function B(y) {
        var U = s(y).toHsl();
        return U.h = (U.h + 180) % 360, s(U);
      }
      function S(y) {
        var U = s(y).toHsl(), b = U.h;
        return [
          s(y),
          s({
            h: (b + 120) % 360,
            s: U.s,
            l: U.l
          }),
          s({
            h: (b + 240) % 360,
            s: U.s,
            l: U.l
          })
        ];
      }
      function D(y) {
        var U = s(y).toHsl(), b = U.h;
        return [
          s(y),
          s({
            h: (b + 90) % 360,
            s: U.s,
            l: U.l
          }),
          s({
            h: (b + 180) % 360,
            s: U.s,
            l: U.l
          }),
          s({
            h: (b + 270) % 360,
            s: U.s,
            l: U.l
          })
        ];
      }
      function O(y) {
        var U = s(y).toHsl(), b = U.h;
        return [
          s(y),
          s({
            h: (b + 72) % 360,
            s: U.s,
            l: U.l
          }),
          s({
            h: (b + 216) % 360,
            s: U.s,
            l: U.l
          })
        ];
      }
      function N(y, U, b) {
        U = U || 6, b = b || 30;
        var _ = s(y).toHsl(), z = 360 / b, G = [
          s(y)
        ];
        for (_.h = (_.h - (z * U >> 1) + 720) % 360; --U; ) _.h = (_.h + z) % 360, G.push(s(_));
        return G;
      }
      function k(y, U) {
        U = U || 6;
        for (var b = s(y).toHsv(), _ = b.h, z = b.s, G = b.v, sA = [], cA = 1 / U; U--; ) sA.push(s({
          h: _,
          s: z,
          v: G
        })), G = (G + cA) % 1;
        return sA;
      }
      s.mix = function(y, U, b) {
        b = b === 0 ? 0 : b || 50;
        var _ = s(y).toRgb(), z = s(U).toRgb(), G = b / 100, sA = {
          r: (z.r - _.r) * G + _.r,
          g: (z.g - _.g) * G + _.g,
          b: (z.b - _.b) * G + _.b,
          a: (z.a - _.a) * G + _.a
        };
        return s(sA);
      }, s.readability = function(y, U) {
        var b = s(y), _ = s(U);
        return (e.max(b.getLuminance(), _.getLuminance()) + 0.05) / (e.min(b.getLuminance(), _.getLuminance()) + 0.05);
      }, s.isReadable = function(y, U, b) {
        var _ = s.readability(y, U), z, G;
        switch (G = false, z = aA(b), z.level + z.size) {
          case "AAsmall":
          case "AAAlarge":
            G = _ >= 4.5;
            break;
          case "AAlarge":
            G = _ >= 3;
            break;
          case "AAAsmall":
            G = _ >= 7;
            break;
        }
        return G;
      }, s.mostReadable = function(y, U, b) {
        var _ = null, z = 0, G, sA, cA, fA;
        b = b || {}, sA = b.includeFallbackColors, cA = b.level, fA = b.size;
        for (var eA = 0; eA < U.length; eA++) G = s.readability(y, U[eA]), G > z && (z = G, _ = s(U[eA]));
        return s.isReadable(y, _, {
          level: cA,
          size: fA
        }) || !sA ? _ : (b.includeFallbackColors = false, s.mostReadable(y, [
          "#fff",
          "#000"
        ], b));
      };
      var M = s.names = {
        aliceblue: "f0f8ff",
        antiquewhite: "faebd7",
        aqua: "0ff",
        aquamarine: "7fffd4",
        azure: "f0ffff",
        beige: "f5f5dc",
        bisque: "ffe4c4",
        black: "000",
        blanchedalmond: "ffebcd",
        blue: "00f",
        blueviolet: "8a2be2",
        brown: "a52a2a",
        burlywood: "deb887",
        burntsienna: "ea7e5d",
        cadetblue: "5f9ea0",
        chartreuse: "7fff00",
        chocolate: "d2691e",
        coral: "ff7f50",
        cornflowerblue: "6495ed",
        cornsilk: "fff8dc",
        crimson: "dc143c",
        cyan: "0ff",
        darkblue: "00008b",
        darkcyan: "008b8b",
        darkgoldenrod: "b8860b",
        darkgray: "a9a9a9",
        darkgreen: "006400",
        darkgrey: "a9a9a9",
        darkkhaki: "bdb76b",
        darkmagenta: "8b008b",
        darkolivegreen: "556b2f",
        darkorange: "ff8c00",
        darkorchid: "9932cc",
        darkred: "8b0000",
        darksalmon: "e9967a",
        darkseagreen: "8fbc8f",
        darkslateblue: "483d8b",
        darkslategray: "2f4f4f",
        darkslategrey: "2f4f4f",
        darkturquoise: "00ced1",
        darkviolet: "9400d3",
        deeppink: "ff1493",
        deepskyblue: "00bfff",
        dimgray: "696969",
        dimgrey: "696969",
        dodgerblue: "1e90ff",
        firebrick: "b22222",
        floralwhite: "fffaf0",
        forestgreen: "228b22",
        fuchsia: "f0f",
        gainsboro: "dcdcdc",
        ghostwhite: "f8f8ff",
        gold: "ffd700",
        goldenrod: "daa520",
        gray: "808080",
        green: "008000",
        greenyellow: "adff2f",
        grey: "808080",
        honeydew: "f0fff0",
        hotpink: "ff69b4",
        indianred: "cd5c5c",
        indigo: "4b0082",
        ivory: "fffff0",
        khaki: "f0e68c",
        lavender: "e6e6fa",
        lavenderblush: "fff0f5",
        lawngreen: "7cfc00",
        lemonchiffon: "fffacd",
        lightblue: "add8e6",
        lightcoral: "f08080",
        lightcyan: "e0ffff",
        lightgoldenrodyellow: "fafad2",
        lightgray: "d3d3d3",
        lightgreen: "90ee90",
        lightgrey: "d3d3d3",
        lightpink: "ffb6c1",
        lightsalmon: "ffa07a",
        lightseagreen: "20b2aa",
        lightskyblue: "87cefa",
        lightslategray: "789",
        lightslategrey: "789",
        lightsteelblue: "b0c4de",
        lightyellow: "ffffe0",
        lime: "0f0",
        limegreen: "32cd32",
        linen: "faf0e6",
        magenta: "f0f",
        maroon: "800000",
        mediumaquamarine: "66cdaa",
        mediumblue: "0000cd",
        mediumorchid: "ba55d3",
        mediumpurple: "9370db",
        mediumseagreen: "3cb371",
        mediumslateblue: "7b68ee",
        mediumspringgreen: "00fa9a",
        mediumturquoise: "48d1cc",
        mediumvioletred: "c71585",
        midnightblue: "191970",
        mintcream: "f5fffa",
        mistyrose: "ffe4e1",
        moccasin: "ffe4b5",
        navajowhite: "ffdead",
        navy: "000080",
        oldlace: "fdf5e6",
        olive: "808000",
        olivedrab: "6b8e23",
        orange: "ffa500",
        orangered: "ff4500",
        orchid: "da70d6",
        palegoldenrod: "eee8aa",
        palegreen: "98fb98",
        paleturquoise: "afeeee",
        palevioletred: "db7093",
        papayawhip: "ffefd5",
        peachpuff: "ffdab9",
        peru: "cd853f",
        pink: "ffc0cb",
        plum: "dda0dd",
        powderblue: "b0e0e6",
        purple: "800080",
        rebeccapurple: "663399",
        red: "f00",
        rosybrown: "bc8f8f",
        royalblue: "4169e1",
        saddlebrown: "8b4513",
        salmon: "fa8072",
        sandybrown: "f4a460",
        seagreen: "2e8b57",
        seashell: "fff5ee",
        sienna: "a0522d",
        silver: "c0c0c0",
        skyblue: "87ceeb",
        slateblue: "6a5acd",
        slategray: "708090",
        slategrey: "708090",
        snow: "fffafa",
        springgreen: "00ff7f",
        steelblue: "4682b4",
        tan: "d2b48c",
        teal: "008080",
        thistle: "d8bfd8",
        tomato: "ff6347",
        turquoise: "40e0d0",
        violet: "ee82ee",
        wheat: "f5deb3",
        white: "fff",
        whitesmoke: "f5f5f5",
        yellow: "ff0",
        yellowgreen: "9acd32"
      }, W = s.hexNames = nA(M);
      function nA(y) {
        var U = {};
        for (var b in y) y.hasOwnProperty(b) && (U[y[b]] = b);
        return U;
      }
      function P(y) {
        return y = parseFloat(y), (isNaN(y) || y < 0 || y > 1) && (y = 1), y;
      }
      function X(y, U) {
        R(y) && (y = "100%");
        var b = $(y);
        return y = i(U, a(0, parseFloat(y))), b && (y = parseInt(y * U, 10) / 100), e.abs(y - U) < 1e-6 ? 1 : y % U / parseFloat(U);
      }
      function AA(y) {
        return i(1, a(0, y));
      }
      function j(y) {
        return parseInt(y, 16);
      }
      function R(y) {
        return typeof y == "string" && y.indexOf(".") != -1 && parseFloat(y) === 1;
      }
      function $(y) {
        return typeof y == "string" && y.indexOf("%") != -1;
      }
      function V(y) {
        return y.length == 1 ? "0" + y : "" + y;
      }
      function Y(y) {
        return y <= 1 && (y = y * 100 + "%"), y;
      }
      function dA(y) {
        return e.round(parseFloat(y) * 255).toString(16);
      }
      function iA(y) {
        return j(y) / 255;
      }
      var tA = (function() {
        var y = "[-\\+]?\\d+%?", U = "[-\\+]?\\d*\\.\\d+%?", b = "(?:" + U + ")|(?:" + y + ")", _ = "[\\s|\\(]+(" + b + ")[,|\\s]+(" + b + ")[,|\\s]+(" + b + ")\\s*\\)?", z = "[\\s|\\(]+(" + b + ")[,|\\s]+(" + b + ")[,|\\s]+(" + b + ")[,|\\s]+(" + b + ")\\s*\\)?";
        return {
          CSS_UNIT: new RegExp(b),
          rgb: new RegExp("rgb" + _),
          rgba: new RegExp("rgba" + z),
          hsl: new RegExp("hsl" + _),
          hsla: new RegExp("hsla" + z),
          hsv: new RegExp("hsv" + _),
          hsva: new RegExp("hsva" + z),
          hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
          hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
        };
      })();
      function J(y) {
        return !!tA.CSS_UNIT.exec(y);
      }
      function oA(y) {
        y = y.replace(t, "").replace(r, "").toLowerCase();
        var U = false;
        if (M[y]) y = M[y], U = true;
        else if (y == "transparent") return {
          r: 0,
          g: 0,
          b: 0,
          a: 0,
          format: "name"
        };
        var b;
        return (b = tA.rgb.exec(y)) ? {
          r: b[1],
          g: b[2],
          b: b[3]
        } : (b = tA.rgba.exec(y)) ? {
          r: b[1],
          g: b[2],
          b: b[3],
          a: b[4]
        } : (b = tA.hsl.exec(y)) ? {
          h: b[1],
          s: b[2],
          l: b[3]
        } : (b = tA.hsla.exec(y)) ? {
          h: b[1],
          s: b[2],
          l: b[3],
          a: b[4]
        } : (b = tA.hsv.exec(y)) ? {
          h: b[1],
          s: b[2],
          v: b[3]
        } : (b = tA.hsva.exec(y)) ? {
          h: b[1],
          s: b[2],
          v: b[3],
          a: b[4]
        } : (b = tA.hex8.exec(y)) ? {
          r: j(b[1]),
          g: j(b[2]),
          b: j(b[3]),
          a: iA(b[4]),
          format: U ? "name" : "hex8"
        } : (b = tA.hex6.exec(y)) ? {
          r: j(b[1]),
          g: j(b[2]),
          b: j(b[3]),
          format: U ? "name" : "hex"
        } : (b = tA.hex4.exec(y)) ? {
          r: j(b[1] + "" + b[1]),
          g: j(b[2] + "" + b[2]),
          b: j(b[3] + "" + b[3]),
          a: iA(b[4] + "" + b[4]),
          format: U ? "name" : "hex8"
        } : (b = tA.hex3.exec(y)) ? {
          r: j(b[1] + "" + b[1]),
          g: j(b[2] + "" + b[2]),
          b: j(b[3] + "" + b[3]),
          format: U ? "name" : "hex"
        } : false;
      }
      function aA(y) {
        var U, b;
        return y = y || {
          level: "AA",
          size: "small"
        }, U = (y.level || "AA").toUpperCase(), b = (y.size || "small").toLowerCase(), U !== "AA" && U !== "AAA" && (U = "AA"), b !== "small" && b !== "large" && (b = "small"), {
          level: U,
          size: b
        };
      }
      A.exports ? A.exports = s : window.tinycolor = s;
    })(Math);
  })(md);
  var wC = md.exports;
  const ne = qa(wC);
  var rr = function() {
    return rr = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, rr.apply(this, arguments);
  }, vC = function(A, e, t) {
    if (t || arguments.length === 2) for (var r = 0, n = e.length, o; r < n; r++) (o || !(r in e)) && (o || (o = Array.prototype.slice.call(e, 0, r)), o[r] = e[r]);
    return A.concat(o || Array.prototype.slice.call(e));
  }, yC = function(A) {
    A === void 0 && (A = "");
    var e = {
      linearGradient: /^(-(webkit|o|ms|moz)-)?(linear-gradient)/i,
      repeatingLinearGradient: /^(-(webkit|o|ms|moz)-)?(repeating-linear-gradient)/i,
      radialGradient: /^(-(webkit|o|ms|moz)-)?(radial-gradient)/i,
      repeatingRadialGradient: /^(-(webkit|o|ms|moz)-)?(repeating-radial-gradient)/i,
      sideOrCorner: /^to (left (top|bottom)|right (top|bottom)|top (left|right)|bottom (left|right)|left|right|top|bottom)/i,
      extentKeywords: /^(closest-side|closest-corner|farthest-side|farthest-corner|contain|cover)/,
      positionKeywords: /^(left|center|right|top|bottom)/i,
      pixelValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))px/,
      percentageValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))%/,
      emValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))em/,
      angleValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))deg/,
      startCall: /^\(/,
      endCall: /^\)/,
      comma: /^,/,
      hexColor: /^#([0-9a-fA-F]+)/,
      literalColor: /^([a-zA-Z]+)/,
      rgbColor: /^rgb/i,
      spacedRgbColor: /^(\d{1,3})\s+(\d{1,3})\s+(\d{1,3})\s+\/\s+([0-1](\.\d+)?)/,
      rgbaColor: /^rgba/i,
      hslColor: /^hsl/i,
      hsvColor: /^hsv/i,
      number: /^(([0-9]*\.[0-9]+)|([0-9]+\.?))/
    };
    function t(R) {
      var $ = new Error(A + ": " + R);
      throw $;
    }
    function r(R) {
      A = A.substr(R);
    }
    function n(R) {
      var $ = /^[\n\r\t\s]+/.exec(A);
      $ && r($[0].length);
      var V = R.exec(A);
      return V && r(V[0].length), V;
    }
    function o(R) {
      var $ = R(), V = [];
      if ($) for (V.push($); n(e.comma); ) $ = R(), $ ? V.push($) : t("One extra comma");
      return V;
    }
    function i(R, $, V) {
      var Y = n($);
      if (Y) return {
        type: R,
        value: Y[V]
      };
    }
    function a() {
      var R = i("hex", e.hexColor, 1);
      if (R == null ? void 0 : R.value) {
        var $ = ne(R == null ? void 0 : R.value).toRgb(), V = $.r, Y = $.g, dA = $.b, iA = $.a;
        return {
          value: "rgba(".concat(V, ", ").concat(Y, ", ").concat(dA, ", ").concat(iA, ")")
        };
      }
    }
    var l = function(R) {
      var $ = Et(R == null ? void 0 : R[0]);
      return {
        value: "".concat($ ? "RGBA" : "rgba", "(").concat(o(W), ")")
      };
    };
    function s(R, $) {
      var V = n(R);
      if (V) {
        n(e.startCall) || t("Missing (");
        var Y = $(V);
        return n(e.endCall) || t("Missing )"), Y;
      }
    }
    function c() {
      return s(e.hslColor, nA);
    }
    function d() {
      return s(e.rgbaColor, l);
    }
    function u() {
      return s(e.rgbColor, X);
    }
    function f() {
      var R = i("literal", e.literalColor, 0);
      if (R == null ? void 0 : R.value) {
        var $ = ne(R == null ? void 0 : R.value).toRgb(), V = $.r, Y = $.g, dA = $.b, iA = $.a;
        return {
          value: "rgba(".concat(V, ", ").concat(Y, ", ").concat(dA, ", ").concat(iA, ")")
        };
      }
    }
    function g() {
      return s(e.hsvColor, P);
    }
    function p() {
      return a() || c() || d() || u() || f() || g();
    }
    function Q() {
      var R, $ = p();
      return $ || t("Expected color definition"), $.left = parseInt((R = AA()) === null || R === void 0 ? void 0 : R.value), $;
    }
    function m(R, $, V) {
      return s($, function() {
        var Y = V();
        return Y && (n(e.comma) || t("Missing comma before color stops")), {
          type: R,
          orientation: Y,
          colorStops: o(Q)
        };
      });
    }
    function F() {
      return C() || x();
    }
    function w() {
      return m("linear-gradient", e.linearGradient, F) || m("repeating-linear-gradient", e.repeatingLinearGradient, F) || m("radial-gradient", e.radialGradient, I) || m("repeating-radial-gradient", e.repeatingRadialGradient, I);
    }
    function v() {
      return o(w);
    }
    function E() {
      var R, $ = v();
      A.length > 0 && t("Invalid input not EOF");
      var V = $[0], Y = (R = V == null ? void 0 : V.colorStops) === null || R === void 0 ? void 0 : R.filter(function(iA) {
        return Et(iA.value);
      }).length, dA = function() {
        if (Y > 0) return V;
        var iA = function(tA, J) {
          return J === 0 ? gi(tA) : dn(tA);
        };
        return rr(rr({}, V), {
          colorStops: V.colorStops.map(function(tA, J) {
            return rr(rr({}, tA), {
              value: iA(tA, J)
            });
          })
        });
      };
      return dA();
    }
    function C() {
      return i("directional", e.sideOrCorner, 1);
    }
    function x() {
      return i("angular", e.angleValue, 1);
    }
    function I() {
      var R, $ = T(), V;
      return $ && (R = [], R.push($), V = A, n(e.comma) && ($ = T(), $ ? R.push($) : A = V)), R;
    }
    function T() {
      var R = S() || D();
      if (R) R.at = N();
      else {
        var $ = O();
        if ($) {
          R = $;
          var V = N();
          V && (R.at = V);
        } else {
          var Y = k();
          Y && (R = {
            type: "default-radial",
            at: Y
          });
        }
      }
      return R;
    }
    function B() {
      return i("px", e.pixelValue, 1) || i("em", e.emValue, 1);
    }
    function S() {
      var R = i("shape", /^(circle)/i, 0);
      return R && (R.style = B() || O()), R;
    }
    function D() {
      var R = i("shape", /^(ellipse)/i, 0);
      return R && (R.style = AA() || O()), R;
    }
    function O() {
      return i("extent-keyword", e.extentKeywords, 1);
    }
    function N() {
      if (i("position", /^at/, 0)) {
        var R = k();
        return R || t("Missing positioning value"), R;
      }
    }
    function k() {
      var R = M();
      if (R.x || R.y) return {
        type: "position",
        value: R
      };
    }
    function M() {
      return {
        x: AA(),
        y: AA()
      };
    }
    function W() {
      return n(e.number)[1];
    }
    var nA = function(R) {
      var $ = Et(R == null ? void 0 : R[0]), V = o(W), Y = ne({
        h: V[0],
        s: V[1],
        l: V[2],
        a: V[3] || 1
      }).toRgb(), dA = Y.r, iA = Y.g, tA = Y.b, J = Y.a;
      return {
        value: "".concat($ ? "RGBA" : "rgba", "(").concat(dA, ", ").concat(iA, ", ").concat(tA, ", ").concat(J, ")")
      };
    }, P = function(R) {
      var $ = Et(R == null ? void 0 : R[0]), V = o(W), Y = ne({
        h: V[0],
        s: V[1],
        v: V[2],
        a: V[3] || 1
      }).toRgb(), dA = Y.r, iA = Y.g, tA = Y.b, J = Y.a;
      return {
        value: "".concat($ ? "RGBA" : "rgba", "(").concat(dA, ", ").concat(iA, ", ").concat(tA, ", ").concat(J, ")")
      };
    }, X = function(R) {
      var $ = Et(R == null ? void 0 : R[0]), V = n(e.spacedRgbColor), Y = V || vC([
        null
      ], o(W), true), dA = Y[1], iA = Y[2], tA = Y[3], J = Y[4], oA = J === void 0 ? 1 : J;
      return {
        value: "".concat($ ? "RGBA" : "rgba", "(").concat(dA, ", ").concat(iA, ", ").concat(tA, ", ").concat(oA, ")")
      };
    };
    function AA() {
      return i("%", e.percentageValue, 1) || j() || B();
    }
    function j() {
      return i("position-keyword", e.positionKeywords, 1);
    }
    return E();
  }, dn = function(A) {
    return A.value.toLowerCase();
  }, gi = function(A) {
    return A.value.toUpperCase();
  }, QC = function(A, e, t) {
    var r = A == null ? void 0 : A.includes("gradient");
    if (r) {
      var n = A == null ? void 0 : A.includes("conic"), o = n ? t : A;
      n && console.log("Sorry we cant handle conic gradients yet");
      var i = yC(o);
      return i == null ? void 0 : i.colorStops;
    } else {
      var o = A || e;
      return [
        {
          value: o
        }
      ];
    }
  }, ur = function(A, e, t) {
    return isNaN(A) || A < e ? e : A > t ? t : A;
  }, Ge = function(A) {
    return Math.round(A);
  }, Bo = function() {
    return Bo = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, Bo.apply(this, arguments);
  }, Cd = function(A) {
    var e = A.target.parentNode.getBoundingClientRect(), t = A.target.className, r = t === "c-resize ps-rl" ? 15 : 0;
    return {
      offsetLeft: (e == null ? void 0 : e.x) + r,
      offsetTop: e == null ? void 0 : e.y,
      clientWidth: e == null ? void 0 : e.width,
      clientHeight: e == null ? void 0 : e.height
    };
  };
  function dr(A, e) {
    var t = Cd(A), r = t.offsetLeft, n = t.clientWidth, o = A.clientX - r - e / 2, i = n - 18, a = ur(o, 0, i);
    return Math.round(a / (i / 100));
  }
  function bC(A, e, t, r, n) {
    var o = A * t - n / 2, i = (100 - e) / 100 * r - n / 2;
    return [
      o,
      i
    ];
  }
  var FC = function(A) {
    if (A.clientX) return {
      clientX: A.clientX,
      clientY: A.clientY
    };
    var e = A.touches[0] || {};
    return {
      clientX: e.clientX,
      clientY: e.clientY
    };
  };
  function UC(A, e) {
    var t = Cd(A), r = t.offsetLeft, n = t.offsetTop, o = t.clientWidth, i = t.clientHeight, a = FC(A), l = a.clientX, s = a.clientY, c = function() {
      var u = l - r - e / 2;
      return ur(u, -9, o - 10);
    }, d = function() {
      var u = s - n - e / 2;
      return ur(u, -9, i - 10);
    };
    return [
      c(),
      d()
    ];
  }
  var Et = function(A) {
    var e;
    return (A == null ? void 0 : A[0]) === ((e = A == null ? void 0 : A[0]) === null || e === void 0 ? void 0 : e.toUpperCase());
  }, wd = function(A) {
    if (A === "to top") return 0;
    if (A === "to bottom") return 180;
    if (A === "to left") return 270;
    if (A === "to right") return 90;
    if (A === "to top right") return 45;
    if (A === "to bottom right") return 135;
    if (A === "to bottom left") return 225;
    if (A === "to top left") return 315;
    var e = A || 0;
    return parseInt(e);
  }, EC = function(A) {
    var e, t, r, n, o;
    if (typeof A == "string") return A;
    if (!((e = A == null ? void 0 : A.type) === null || e === void 0) && e.includes("gradient")) {
      var i = (t = A == null ? void 0 : A.colorStops) === null || t === void 0 ? void 0 : t.sort(function(u, f) {
        return (u == null ? void 0 : u.left) - (f == null ? void 0 : f.left);
      }), a = (r = i == null ? void 0 : i.map(function(u) {
        return "".concat(u == null ? void 0 : u.value, " ").concat(u == null ? void 0 : u.left, "%");
      })) === null || r === void 0 ? void 0 : r.join(", "), l = A == null ? void 0 : A.type, s = wd((n = A == null ? void 0 : A.orientation) === null || n === void 0 ? void 0 : n.value), c = l === "linear-gradient" ? "".concat(s, "deg") : "circle";
      return "".concat(l, "(").concat(c, ", ").concat(a, ")");
    } else {
      var d = ((o = A == null ? void 0 : A.colorStops[0]) === null || o === void 0 ? void 0 : o.value) || "rgba(175, 51, 242, 1)";
      return d;
    }
  }, SC = function(A, e) {
    var t = A == null ? void 0 : A.map(function(o, i) {
      return Bo(Bo({}, o), {
        index: i
      });
    }), r = t == null ? void 0 : t.find(function(o) {
      return Et(o.value);
    }), n = r || t[0];
    return {
      currentColor: (n == null ? void 0 : n.value) || e,
      selectedColor: (n == null ? void 0 : n.index) || 0,
      currentLeft: (n == null ? void 0 : n.left) || 0
    };
  }, xC = function(A) {
    var e, t = A == null ? void 0 : A.split(",")[0], r = (e = t == null ? void 0 : t.split("(")[1]) === null || e === void 0 ? void 0 : e.replace("deg", "");
    return wd(r);
  }, IC = function(A) {
    var e = A == null ? void 0 : A.includes("gradient"), t = A == null ? void 0 : A.split("(")[0], r = xC(A), n = t === "linear-gradient" ? "".concat(r, "deg") : "circle";
    return {
      degrees: r,
      degreeStr: n,
      isGradient: e,
      gradientType: t
    };
  }, ue = function() {
    return ue = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, ue.apply(this, arguments);
  }, HC = function(A, e, t) {
    if (t || arguments.length === 2) for (var r = 0, n = e.length, o; r < n; r++) (o || !(r in e)) && (o || (o = Array.prototype.slice.call(e, 0, r)), o[r] = e[r]);
    return A.concat(o || Array.prototype.slice.call(e));
  }, vd = h.createContext(null);
  function TC(A) {
    var e, t, r, n, o = A.value, i = A.children, a = A.onChange, l = A.isDarkMode, s = A.squareWidth, c = A.hideOpacity, d = A.showHexAlpha, u = A.squareHeight, f = A.passedConfig, g = A.defaultStyles, p = A.pickerIdSuffix, Q = {
      barSize: (e = f.barSize) !== null && e !== void 0 ? e : bn.barSize,
      crossSize: (t = f.crossSize) !== null && t !== void 0 ? t : bn.crossSize,
      defaultColor: (r = f.defaultColor) !== null && r !== void 0 ? r : bn.defaultColor,
      defaultGradient: (n = f.defaultGradient) !== null && n !== void 0 ? n : bn.defaultGradient
    }, m = QC(o, Q.defaultColor, Q.defaultGradient), F = IC(o), w = F.degrees, v = F.degreeStr, E = F.isGradient, C = F.gradientType, x = SC(m, Q.defaultGradient), I = x.currentColor, T = x.selectedColor, B = x.currentLeft, S = h.useState("rgb"), D = S[0], O = S[1], N = h.useState({}), k = N[0], M = N[1], W = ne(I), nA = W.toRgb(), P = W.toHsv(), X = h.useState(ue(ue({}, nA), P)), AA = X[0], j = X[1];
    h.useEffect(function() {
      (P == null ? void 0 : P.s) === 0 ? j(ue(ue(ue({}, nA), P), {
        h: AA == null ? void 0 : AA.h
      })) : j(ue(ue({}, nA), P));
    }, [
      I
    ]);
    var R = function(iA) {
      var tA = iA.sort(function(aA, y) {
        return aA.left - y.left;
      }), J = tA == null ? void 0 : tA.map(function(aA) {
        return "".concat(aA == null ? void 0 : aA.value, " ").concat(aA.left, "%");
      }), oA = "".concat(C, "(").concat(v, ", ").concat(J.join(", "), ")");
      M(ue(ue({}, k), {
        gradient: oA
      })), a(oA);
    }, $ = function(iA, tA) {
      var J = m == null ? void 0 : m.filter(function(aA) {
        return !Et(aA.value);
      }), oA = HC([
        {
          value: iA.toUpperCase(),
          left: tA ?? B
        }
      ], J, true);
      R(oA);
    }, V = function(iA) {
      E ? $(iA) : (M(ue(ue({}, k), {
        color: iA
      })), a(iA));
    }, Y = function() {
      if ((m == null ? void 0 : m.length) > 2) {
        var iA = m == null ? void 0 : m.map(function(J, oA) {
          return ue(ue({}, J), {
            value: oA === T - 1 ? gi(J) : dn(J)
          });
        }), tA = iA == null ? void 0 : iA.filter(function(J, oA) {
          return oA !== T;
        });
        R(tA);
      }
    }, dA = {
      hc: AA,
      setHc: j,
      value: o,
      colors: m,
      config: Q,
      degrees: w,
      onChange: a,
      previous: k,
      inputType: D,
      tinyColor: W,
      isDarkMode: l,
      isGradient: E,
      squareWidth: s,
      hideOpacity: c,
      currentLeft: B,
      deletePoint: Y,
      showHexAlpha: d,
      squareHeight: u,
      setInputType: O,
      gradientType: C,
      handleChange: V,
      currentColor: I,
      selectedColor: T,
      defaultStyles: g,
      handleGradient: $,
      pickerIdSuffix: p,
      createGradientStr: R
    };
    return H.createElement(vd.Provider, {
      value: dA
    }, i);
  }
  function bA() {
    var A = h.useContext(vd);
    if (!A) throw new Error("usePicker has to be used within <PickerContext.Provider>");
    return A;
  }
  var bn = {
    barSize: 18,
    crossSize: 18,
    defaultColor: "rgba(175, 51, 242, 1)",
    defaultGradient: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"
  }, LC = function(A, e) {
    h.useEffect(function() {
      var t, r = (t = A == null ? void 0 : A.current) === null || t === void 0 ? void 0 : t.getContext("2d", {
        willReadFrequently: true
      });
      if (r) {
        r.rect(0, 0, e, 14);
        for (var n = r.createLinearGradient(0, 0, e, 0), o = 0; o <= 360; o += 30) n.addColorStop(o / 360, "hsl(".concat(o, ", 100%, 50%)"));
        r.fillStyle = n, r.fill();
      }
    }, [
      A,
      e
    ]);
  }, kC = function(A, e, t, r) {
    h.useEffect(function() {
      var n, o = (n = A == null ? void 0 : A.current) === null || n === void 0 ? void 0 : n.getContext("2d", {
        willReadFrequently: true
      });
      if (o) {
        o.rect(0, 0, r, 14);
        for (var i = o.createLinearGradient(0, 0, r, 0), a = 0; a <= 100; a += 10) i.addColorStop(a / 100, "hsl(".concat(e, ", ").concat(a, "%, ").concat(t, "%)"));
        o.fillStyle = i, o.fill();
      }
    }, [
      A,
      e,
      t,
      r
    ]);
  }, RC = function(A, e, t, r) {
    h.useEffect(function() {
      var n, o = (n = A == null ? void 0 : A.current) === null || n === void 0 ? void 0 : n.getContext("2d", {
        willReadFrequently: true
      });
      if (o) {
        o.rect(0, 0, r, 14);
        for (var i = o.createLinearGradient(0, 0, r, 0), a = 0; a <= 100; a += 10) i.addColorStop(a / 100, "hsl(".concat(e, ", ").concat(t, "%, ").concat(a, "%)"));
        o.fillStyle = i, o.fill();
      }
    }, [
      A,
      e,
      t,
      r
    ]);
  }, OC = function(A, e, t, r) {
    h.useEffect(function() {
      var n, o = (n = A == null ? void 0 : A.current) === null || n === void 0 ? void 0 : n.getContext("2d", {
        willReadFrequently: true
      });
      if (o) {
        o.rect(0, 0, r, 14);
        for (var i = o.createLinearGradient(0, 0, r, 0), a = 0; a <= 100; a += 10) {
          var l = ne({
            h: e,
            s: t,
            v: a
          });
          i.addColorStop(a / 100, l.toHslString());
        }
        o.fillStyle = i, o.fill();
      }
    }, [
      A,
      e,
      t,
      r
    ]);
  }, ho = function() {
    return ho = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, ho.apply(this, arguments);
  }, KC = function() {
    var A = h.useRef(null), e = bA(), t = e.config, r = e.handleChange, n = e.squareWidth, o = e.hc, i = e.setHc, a = e.pickerIdSuffix, l = h.useState(false), s = l[0], c = l[1], d = t.barSize;
    LC(A, n);
    var u = function() {
      c(false);
    }, f = function() {
      c(true);
    }, g = function(m) {
      var F = dr(m, d) * 3.6, w = ne({
        h: F,
        s: o == null ? void 0 : o.s,
        v: o == null ? void 0 : o.v
      }), v = w.toRgb(), E = v.r, C = v.g, x = v.b;
      r("rgba(".concat(E, ", ").concat(C, ", ").concat(x, ", ").concat(o.a, ")")), i(ho(ho({}, o), {
        h: F
      }));
    }, p = function(m) {
      s && g(m);
    }, Q = function(m) {
      s || g(m);
    };
    return h.useEffect(function() {
      var m = function() {
        u();
      };
      return window.addEventListener("mouseup", m), function() {
        window.removeEventListener("mouseup", m);
      };
    }, []), H.createElement("div", {
      style: {
        height: 14,
        marginTop: 17,
        marginBottom: 4,
        cursor: "ew-resize",
        position: "relative"
      },
      onMouseMove: function(m) {
        return p(m);
      },
      id: "rbgcp-hue-wrap".concat(a)
    }, H.createElement("div", {
      tabIndex: 0,
      role: "button",
      style: {
        border: "2px solid white",
        borderRadius: "50%",
        boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.5)",
        width: "18px",
        height: "18px",
        zIndex: 1e3,
        transition: "all 10ms linear",
        position: "absolute",
        left: (o == null ? void 0 : o.h) * ((n - 18) / 360),
        top: -2,
        cursor: "ew-resize",
        boxSizing: "border-box"
      },
      onMouseDown: f,
      id: "rbgcp-hue-handle".concat(a)
    }), H.createElement("canvas", {
      ref: A,
      height: "14px",
      width: "".concat(n, "px"),
      onClick: function(m) {
        return Q(m);
      },
      id: "rbgcp-hue-bar".concat(a),
      style: {
        borderRadius: 14,
        position: "relative",
        verticalAlign: "top"
      }
    }));
  };
  function MC(A, e, t) {
    var r = 0, n = 0, o = 0, i = 0;
    if (A === null || e === null || t === null || isNaN(A) || isNaN(e) || isNaN(t)) return console.log("Please enter numeric RGB values!"), {
      c: 0,
      m: 0,
      k: 0,
      y: 1
    };
    if (A < 0 || e < 0 || t < 0 || A > 255 || e > 255 || t > 255) return console.log("RGB values must be in the range 0 to 255."), {
      c: 0,
      m: 0,
      k: 0,
      y: 1
    };
    if (A === 0 && e === 0 && t === 0) return i = 1, {
      c: 0,
      m: 0,
      k: 0,
      y: 1
    };
    r = 1 - A / 255, n = 1 - e / 255, o = 1 - t / 255;
    var a = Math.min(r, Math.min(n, o));
    return r = (r - a) / (1 - a), n = (n - a) / (1 - a), o = (o - a) / (1 - a), i = a, {
      c: r,
      m: n,
      y: o,
      k: i
    };
  }
  var DC = function(A) {
    var e = A.c, t = A.m, r = A.y, n = A.k, o = 255 * (1 - e) * (1 - n), i = 255 * (1 - t) * (1 - n), a = 255 * (1 - r) * (1 - n);
    return {
      r: o,
      g: i,
      b: a
    };
  }, PC = function(A) {
    return typeof A != "number" ? "FF" : A < 0 ? "00" : A > 1 ? "FF" : Math.round(A * 255).toString(16).padStart(2, "0").toUpperCase();
  }, Se = function() {
    return Se = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, Se.apply(this, arguments);
  }, ge = function(A) {
    var e = A.label, t = A.value, r = A.callback, n = A.max, o = n === void 0 ? 100 : n, i = A.hideOpacity, a = A.defaultStyles, l = A.pickerIdSuffix, s = h.useState(t), c = s[0], d = s[1], u = i ? "25%" : "20%";
    h.useEffect(function() {
      d(t);
    }, [
      t
    ]);
    var f = function(g) {
      var p = ur(parseFloat(g.target.value), 0, o);
      d(p), r(p);
    };
    return H.createElement("div", {
      style: {
        width: u,
        flexShrink: 1
      },
      id: "rbgcp-".concat(e, "-input-wrapper").concat(l)
    }, H.createElement("input", {
      value: c,
      onChange: function(g) {
        return f(g);
      },
      style: Se({}, a.rbgcpInput),
      id: "rbgcp-".concat(e, "-input").concat(l)
    }), H.createElement("div", {
      style: Se({}, a.rbgcpInputLabel)
    }, e));
  }, _C = function(A) {
    var e = A.opacity, t = A.tinyColor, r = A.showHexAlpha, n = A.handleChange, o = A.defaultStyles, i = A.pickerIdSuffix, a = h.useState(""), l = a[0], s = a[1], c = t.toHex(), d = h.useState(c), u = d[0], f = d[1];
    h.useEffect(function() {
      l !== "hex" && f(c);
    }, [
      t,
      l,
      c
    ]);
    var g = function() {
      s("hex");
    }, p = function() {
      s("");
    }, Q = function(v) {
      var E = ne(v.target.value);
      if (f(v.target.value), E.isValid()) {
        var C = E.toRgb(), x = C.r, I = C.g, T = C.b, B = "rgba(".concat(x, ", ").concat(I, ", ").concat(T, ", ").concat(e, ")");
        n(B);
      }
    }, m = r ? "".concat(u).concat(PC(e)) : u, F = r ? "HEXA" : "HEX", w = r ? 88 : 76;
    return H.createElement("div", {
      style: {
        width: w,
        flexShrink: 0
      },
      id: "rbgcp-hex-input-wrapper".concat(i)
    }, H.createElement("input", {
      onBlur: p,
      onFocus: g,
      onChange: function(v) {
        return Q(v);
      },
      value: m == null ? void 0 : m.toUpperCase(),
      id: "rbgcp-hex-input".concat(i),
      style: Se(Se({}, o.rbgcpInput), o.rbgcpHexInput)
    }), H.createElement("div", {
      style: Se({}, o.rbgcpInputLabel)
    }, F));
  }, NC = function(A) {
    var e = A.hc, t = A.hideOpacity, r = A.handleChange, n = A.defaultStyles, o = A.pickerIdSuffix, i = function(a) {
      var l = a.r, s = a.g, c = a.b;
      r("rgba(".concat(l, ", ").concat(s, ", ").concat(c, ", ").concat(e == null ? void 0 : e.a, ")"));
    };
    return H.createElement(H.Fragment, null, H.createElement(ge, {
      label: "R",
      max: 255,
      value: e == null ? void 0 : e.r,
      hideOpacity: t,
      defaultStyles: n,
      pickerIdSuffix: o,
      callback: function(a) {
        return i({
          r: a,
          g: e == null ? void 0 : e.g,
          b: e == null ? void 0 : e.b
        });
      }
    }), H.createElement(ge, {
      label: "G",
      max: 255,
      value: e == null ? void 0 : e.g,
      hideOpacity: t,
      defaultStyles: n,
      pickerIdSuffix: o,
      callback: function(a) {
        return i({
          r: e == null ? void 0 : e.r,
          g: a,
          b: e == null ? void 0 : e.b
        });
      }
    }), H.createElement(ge, {
      label: "B",
      max: 255,
      value: e == null ? void 0 : e.b,
      hideOpacity: t,
      defaultStyles: n,
      pickerIdSuffix: o,
      callback: function(a) {
        return i({
          r: e == null ? void 0 : e.r,
          g: e == null ? void 0 : e.g,
          b: a
        });
      }
    }));
  }, GC = function(A) {
    var e = A.hc, t = A.setHc, r = A.tinyColor, n = A.hideOpacity, o = A.handleChange, i = A.defaultStyles, a = A.pickerIdSuffix, l = r.toHsl(), s = l.s, c = l.l, d = function(f, g, p) {
      var Q = ne({
        h: f,
        s: g,
        l: p
      }).toRgb(), m = Q.r, F = Q.g, w = Q.b;
      o("rgba(".concat(m, ", ").concat(F, ", ").concat(w, ", ").concat(e == null ? void 0 : e.a, ")")), t(Se(Se({}, e), {
        h: f
      }));
    }, u = function(f) {
      var g = ne(f).toRgb(), p = g.r, Q = g.g, m = g.b;
      o("rgba(".concat(p, ", ").concat(Q, ", ").concat(m, ", ").concat(e == null ? void 0 : e.a, ")"));
    };
    return H.createElement(H.Fragment, null, H.createElement(ge, {
      label: "H",
      max: 360,
      value: Ge(e == null ? void 0 : e.h),
      hideOpacity: n,
      defaultStyles: i,
      pickerIdSuffix: a,
      callback: function(f) {
        return d(f, s, c);
      }
    }), H.createElement(ge, {
      label: "S",
      value: Ge(s * 100),
      hideOpacity: n,
      defaultStyles: i,
      pickerIdSuffix: a,
      callback: function(f) {
        return u({
          h: e == null ? void 0 : e.h,
          s: f,
          l: c
        });
      }
    }), H.createElement(ge, {
      label: "L",
      value: Ge(c * 100),
      hideOpacity: n,
      defaultStyles: i,
      pickerIdSuffix: a,
      callback: function(f) {
        return u({
          h: e == null ? void 0 : e.h,
          s,
          l: f
        });
      }
    }));
  }, VC = function(A) {
    var e = A.hc, t = A.setHc, r = A.hideOpacity, n = A.handleChange, o = A.defaultStyles, i = A.pickerIdSuffix, a = function(s, c, d) {
      var u = ne({
        h: s,
        s: c,
        v: d
      }).toRgb(), f = u.r, g = u.g, p = u.b;
      n("rgba(".concat(f, ", ").concat(g, ", ").concat(p, ", ").concat(e == null ? void 0 : e.a, ")")), t(Se(Se({}, e), {
        h: s
      }));
    }, l = function(s) {
      var c = ne(s).toRgb(), d = c.r, u = c.g, f = c.b;
      n("rgba(".concat(d, ", ").concat(u, ", ").concat(f, ", ").concat(e == null ? void 0 : e.a, ")"));
    };
    return H.createElement(H.Fragment, null, H.createElement(ge, {
      label: "H",
      max: 360,
      value: Ge(e == null ? void 0 : e.h),
      hideOpacity: r,
      defaultStyles: o,
      pickerIdSuffix: i,
      callback: function(s) {
        return a(s, e == null ? void 0 : e.s, e == null ? void 0 : e.v);
      }
    }), H.createElement(ge, {
      label: "S",
      hideOpacity: r,
      value: Ge((e == null ? void 0 : e.s) * 100),
      defaultStyles: o,
      pickerIdSuffix: i,
      callback: function(s) {
        return l({
          h: e == null ? void 0 : e.h,
          s,
          v: e == null ? void 0 : e.v
        });
      }
    }), H.createElement(ge, {
      label: "V",
      hideOpacity: r,
      value: Ge((e == null ? void 0 : e.v) * 100),
      defaultStyles: o,
      pickerIdSuffix: i,
      callback: function(s) {
        return l({
          h: e == null ? void 0 : e.h,
          s: e == null ? void 0 : e.s,
          v: s
        });
      }
    }));
  }, $C = function(A) {
    var e = A.hc, t = A.hideOpacity, r = A.handleChange, n = A.defaultStyles, o = A.pickerIdSuffix, i = MC(e == null ? void 0 : e.r, e == null ? void 0 : e.g, e == null ? void 0 : e.b), a = i.c, l = i.m, s = i.y, c = i.k, d = function(u) {
      var f = DC(u), g = f.r, p = f.g, Q = f.b;
      r("rgba(".concat(g, ", ").concat(p, ", ").concat(Q, ", ").concat(e == null ? void 0 : e.a, ")"));
    };
    return H.createElement(H.Fragment, null, H.createElement(ge, {
      label: "C",
      value: Ge(a * 100),
      hideOpacity: t,
      defaultStyles: n,
      pickerIdSuffix: o,
      callback: function(u) {
        return d({
          c: u / 100,
          m: l,
          y: s,
          k: c
        });
      }
    }), H.createElement(ge, {
      label: "M",
      value: Ge(l * 100),
      hideOpacity: t,
      defaultStyles: n,
      pickerIdSuffix: o,
      callback: function(u) {
        return d({
          c: a,
          m: u / 100,
          y: s,
          k: c
        });
      }
    }), H.createElement(ge, {
      label: "Y",
      value: Ge(s * 100),
      hideOpacity: t,
      defaultStyles: n,
      pickerIdSuffix: o,
      callback: function(u) {
        return d({
          c: a,
          m: l,
          y: u / 100,
          k: c
        });
      }
    }), H.createElement(ge, {
      label: "K",
      value: Ge(c * 100),
      hideOpacity: t,
      defaultStyles: n,
      pickerIdSuffix: o,
      callback: function(u) {
        return d({
          c: a,
          m: l,
          y: s,
          k: u / 100
        });
      }
    }));
  }, WC = function() {
    var A = bA(), e = A.hc, t = A.setHc, r = A.inputType, n = A.tinyColor, o = A.hideOpacity, i = A.showHexAlpha, a = A.handleChange, l = A.defaultStyles, s = A.pickerIdSuffix;
    return H.createElement("div", {
      style: Se({
        columnGap: 6,
        paddingTop: 14,
        display: "flex",
        justifyContent: "space-between"
      }, l.rbgcpInputsWrap),
      id: "rbgcp-inputs-wrap".concat(s)
    }, r !== "cmyk" && H.createElement(_C, {
      opacity: e == null ? void 0 : e.a,
      tinyColor: n,
      showHexAlpha: i,
      handleChange: a,
      defaultStyles: l,
      pickerIdSuffix: s
    }), r === "hsl" && H.createElement(GC, {
      hc: e,
      setHc: t,
      tinyColor: n,
      hideOpacity: o,
      handleChange: a,
      defaultStyles: l,
      pickerIdSuffix: s
    }), r === "rgb" && H.createElement(NC, {
      hc: e,
      hideOpacity: o,
      handleChange: a,
      defaultStyles: l,
      pickerIdSuffix: s
    }), r === "hsv" && H.createElement(VC, {
      hc: e,
      setHc: t,
      hideOpacity: o,
      handleChange: a,
      defaultStyles: l,
      pickerIdSuffix: s
    }), r === "cmyk" && H.createElement($C, {
      hc: e,
      hideOpacity: o,
      handleChange: a,
      defaultStyles: l,
      pickerIdSuffix: s
    }), !o && H.createElement(ge, {
      label: "A",
      hideOpacity: o,
      defaultStyles: l,
      value: Math.round((e == null ? void 0 : e.a) * 100),
      pickerIdSuffix: s,
      callback: function(c) {
        return a("rgba(".concat(e == null ? void 0 : e.r, ", ").concat(e == null ? void 0 : e.g, ", ").concat(e == null ? void 0 : e.b, ", ").concat(c / 100, ")"));
      }
    }));
  }, zC = function(A, e, t, r) {
    h.useEffect(function() {
      if (A.current) {
        var n = A.current.getContext("2d", {
          willReadFrequently: true
        });
        if (n) {
          n.fillStyle = "hsl(".concat(e, ", 100%, 50%)"), n.fillRect(0, 0, t, r);
          var o = n.createLinearGradient(0, 0, t, 0);
          o.addColorStop(0, "rgba(255, 255, 255, 1)"), o.addColorStop(1, "rgba(255, 255, 255, 0)"), n.fillStyle = o, n.fillRect(0, 0, t, r);
          var i = n.createLinearGradient(0, 0, 0, r);
          i.addColorStop(0, "rgba(0, 0, 0, 0)"), i.addColorStop(1, "rgba(0, 0, 0, 1)"), n.fillStyle = i, n.fillRect(0, 0, t, r);
        }
      }
    }, [
      A,
      e,
      t,
      r
    ]);
  }, yd = "Expected a function", jl = NaN, XC = "[object Symbol]", jC = /^\s+|\s+$/g, JC = /^[-+]0x[0-9a-f]+$/i, YC = /^0b[01]+$/i, ZC = /^0o[0-7]+$/i, qC = parseInt, Aw = typeof pn == "object" && pn && pn.Object === Object && pn, ew = typeof self == "object" && self && self.Object === Object && self, tw = Aw || ew || Function("return this")(), rw = Object.prototype, nw = rw.toString, ow = Math.max, iw = Math.min, Ri = function() {
    return tw.Date.now();
  };
  function aw(A, e, t) {
    var r, n, o, i, a, l, s = 0, c = false, d = false, u = true;
    if (typeof A != "function") throw new TypeError(yd);
    e = Jl(e) || 0, mo(t) && (c = !!t.leading, d = "maxWait" in t, o = d ? ow(Jl(t.maxWait) || 0, e) : o, u = "trailing" in t ? !!t.trailing : u);
    function f(C) {
      var x = r, I = n;
      return r = n = void 0, s = C, i = A.apply(I, x), i;
    }
    function g(C) {
      return s = C, a = setTimeout(m, e), c ? f(C) : i;
    }
    function p(C) {
      var x = C - l, I = C - s, T = e - x;
      return d ? iw(T, o - I) : T;
    }
    function Q(C) {
      var x = C - l, I = C - s;
      return l === void 0 || x >= e || x < 0 || d && I >= o;
    }
    function m() {
      var C = Ri();
      if (Q(C)) return F(C);
      a = setTimeout(m, p(C));
    }
    function F(C) {
      return a = void 0, u && r ? f(C) : (r = n = void 0, i);
    }
    function w() {
      a !== void 0 && clearTimeout(a), s = 0, r = l = n = a = void 0;
    }
    function v() {
      return a === void 0 ? i : F(Ri());
    }
    function E() {
      var C = Ri(), x = Q(C);
      if (r = arguments, n = this, l = C, x) {
        if (a === void 0) return g(l);
        if (d) return a = setTimeout(m, e), f(l);
      }
      return a === void 0 && (a = setTimeout(m, e)), i;
    }
    return E.cancel = w, E.flush = v, E;
  }
  function sw(A, e, t) {
    var r = true, n = true;
    if (typeof A != "function") throw new TypeError(yd);
    return mo(t) && (r = "leading" in t ? !!t.leading : r, n = "trailing" in t ? !!t.trailing : n), aw(A, e, {
      leading: r,
      maxWait: e,
      trailing: n
    });
  }
  function mo(A) {
    var e = typeof A;
    return !!A && (e == "object" || e == "function");
  }
  function lw(A) {
    return !!A && typeof A == "object";
  }
  function cw(A) {
    return typeof A == "symbol" || lw(A) && nw.call(A) == XC;
  }
  function Jl(A) {
    if (typeof A == "number") return A;
    if (cw(A)) return jl;
    if (mo(A)) {
      var e = typeof A.valueOf == "function" ? A.valueOf() : A;
      A = mo(e) ? e + "" : e;
    }
    if (typeof A != "string") return A === 0 ? A : +A;
    A = A.replace(jC, "");
    var t = YC.test(A);
    return t || ZC.test(A) ? qC(A.slice(2), t ? 2 : 8) : JC.test(A) ? jl : +A;
  }
  var uw = sw;
  const dw = qa(uw);
  var St = function() {
    return St = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, St.apply(this, arguments);
  }, fw = function() {
    var A, e, t = bA(), r = t.hc, n = t.config, o = t.squareWidth, i = t.squareHeight, a = t.handleChange, l = t.defaultStyles, s = t.pickerIdSuffix, c = n.crossSize, d = h.useState(false), u = d[0], f = d[1], g = h.useRef(null), p = bC(r == null ? void 0 : r.s, (r == null ? void 0 : r.v) * 100, o, i, c), Q = p[0], m = p[1], F = h.useState({
      x: Q,
      y: m
    }), w = F[0], v = F[1];
    zC(g, r == null ? void 0 : r.h, o, i), h.useEffect(function() {
      u || v({
        x: (r == null ? void 0 : r.v) === 0 ? w.x : Q,
        y: m
      });
    }, [
      Q,
      m
    ]);
    var E = function(S) {
      var D = dw(function() {
        var O = UC(S, c), N = O[0], k = O[1];
        if (N && k) {
          var M = Math.min(N + c / 2, o - 1), W = Math.min(k + c / 2, i - 1), nA = M / o * 100, P = 100 - W / i * 100;
          v({
            x: P === 0 ? w == null ? void 0 : w.x : N,
            y: k
          });
          var X = ne("hsva(".concat(r == null ? void 0 : r.h, ", ").concat(nA, "%, ").concat(P, "%, ").concat(r == null ? void 0 : r.a, ")"));
          a(X.toRgbString());
        }
      }, 250);
      D();
    }, C = function() {
      f(false);
    }, x = function(S) {
      u && E(S);
    }, I = function(S) {
      u || E(S);
    }, T = function() {
      f(true);
    }, B = function(S) {
      f(true), E(S);
    };
    return h.useEffect(function() {
      var S = function() {
        C();
      };
      return window.addEventListener("mouseup", S), function() {
        window.removeEventListener("mouseup", S);
      };
    }, []), H.createElement("div", {
      style: {
        position: "relative",
        marginBottom: 12
      },
      id: "rbgcp-square-wrapper".concat(s)
    }, H.createElement("div", {
      onMouseUp: C,
      onTouchEnd: C,
      onMouseDown: B,
      onTouchStart: B,
      onMouseMove: function(S) {
        return x(S);
      },
      id: "rbgcp-square".concat(s),
      style: {
        position: "relative",
        cursor: "ew-cross"
      }
    }, H.createElement("div", {
      style: St(St(St({}, l.rbgcpHandle), {
        transform: "translate(".concat((A = w == null ? void 0 : w.x) !== null && A !== void 0 ? A : 0, "px, ").concat((e = w == null ? void 0 : w.y) !== null && e !== void 0 ? e : 0, "px)")
      }), u ? {
        transition: ""
      } : {}),
      onMouseDown: T,
      id: "rbgcp-square-handle".concat(s)
    }), H.createElement("div", {
      style: St(St({}, l.rbgcpCanvasWrapper), {
        height: i
      }),
      id: "rbgcp-square-canvas-wrapper".concat(s),
      onClick: function(S) {
        return I(S);
      }
    }, H.createElement("canvas", {
      ref: g,
      width: "".concat(o, "px"),
      height: "".concat(i, "px"),
      id: "rbgcp-square-canvas".concat(s)
    }))));
  }, ct = function() {
    return ct = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, ct.apply(this, arguments);
  }, gw = function() {
    var A = bA(), e = A.config, t = A.hc, r = t === void 0 ? {} : t, n = A.squareWidth, o = A.handleChange, i = A.defaultStyles, a = A.pickerIdSuffix, l = h.useState(false), s = l[0], c = l[1], d = r.r, u = r.g, f = r.b, g = "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(".concat(d, ",").concat(u, ",").concat(f, ",.5) 100%)"), p = e.barSize, Q = function() {
      c(false);
    }, m = function() {
      c(true);
    }, F = function(C) {
      var x = dr(C, p) / 100, I = "rgba(".concat(d, ", ").concat(u, ", ").concat(f, ", ").concat(x, ")");
      o(I);
    }, w = function(C) {
      s && F(C);
    }, v = function(C) {
      s || F(C);
    }, E = n - 18;
    return h.useEffect(function() {
      var C = function() {
        Q();
      };
      return window.addEventListener("mouseup", C), function() {
        window.removeEventListener("mouseup", C);
      };
    }, []), H.createElement("div", {
      onMouseDown: m,
      onMouseMove: function(C) {
        return w(C);
      },
      style: {
        height: 14,
        marginTop: 17,
        marginBottom: 4,
        cursor: "ew-resize",
        position: "relative"
      },
      id: "rbgcp-opacity-wrapper".concat(a)
    }, H.createElement("div", {
      id: "rbgcp-opacity-checkered-bg".concat(a),
      style: ct(ct({}, i.rbgcpCheckered), {
        width: "100%",
        height: 14
      })
    }), H.createElement("div", {
      id: "rbgcp-opacity-handle".concat(a),
      style: ct(ct({}, i.rbgcpHandle), {
        left: E * (r == null ? void 0 : r.a),
        top: -2
      })
    }), H.createElement("div", {
      style: ct(ct({}, i.rbgcpOpacityOverlay), {
        background: g
      }),
      id: "rbgcp-opacity-overlay".concat(a),
      onClick: function(C) {
        return v(C);
      }
    }));
  }, pw = {
    CONTROLS: {
      SOLID: "Solid",
      GRADIENT: "Gradient"
    }
  }, Bw = [
    "rgba(0,0,0,1)",
    "rgba(128,128,128, 1)",
    "rgba(192,192,192, 1)",
    "rgba(255,255,255, 1)",
    "rgba(0,0,128,1)",
    "rgba(0,0,255,1)",
    "rgba(0,255,255, 1)",
    "rgba(0,128,0,1)",
    "rgba(128,128,0, 1)",
    "rgba(0,128,128,1)",
    "rgba(0,255,0, 1)",
    "rgba(128,0,0, 1)",
    "rgba(128,0,128, 1)",
    "rgba(175, 51, 242, 1)",
    "rgba(255,0,255, 1)",
    "rgba(255,0,0, 1)",
    "rgba(240, 103, 46, 1)",
    "rgba(255,255,0, 1)"
  ], hw = function(A) {
    var e = A.presets, t = e === void 0 ? [] : e, r = bA(), n = r.value, o = r.onChange, i = r.isDarkMode, a = r.squareWidth, l = r.handleChange, s = r.pickerIdSuffix, c = function() {
      return (t == null ? void 0 : t.length) > 0 ? t == null ? void 0 : t.slice(0, 18) : Bw;
    }, d = function(f) {
      (f == null ? void 0 : f.includes("gradient")) ? o(f) : l(f);
    }, u = function(f) {
      if (!f || i) return "";
      var g = f == null ? void 0 : f.replace(" ", "");
      return g === "rgba(255,255,255,1)" ? "1px solid #96959c" : "";
    };
    return H.createElement("div", {
      style: {
        marginTop: 14,
        display: "flex",
        justifyContent: "space-between"
      },
      id: "rbgcp-footer-wrapper".concat(s)
    }, H.createElement("div", {
      style: {
        width: 50,
        height: 50,
        flexShrink: 0,
        borderRadius: 6,
        background: n,
        border: u(n)
      },
      id: "rbgcp-preview".concat(s)
    }), H.createElement("div", {
      style: {
        rowGap: 3,
        display: "flex",
        flexWrap: "wrap",
        width: a - 57,
        justifyContent: "space-between"
      },
      id: "rbgcp-presets-wrapper".concat(s)
    }, c().map(function(f, g) {
      return H.createElement("div", {
        key: "".concat(f, "-").concat(g),
        id: "rbgcp-preset-".concat(g, "-wrapper").concat(s),
        style: {
          width: "calc(100% / 9)",
          paddingLeft: 3
        }
      }, H.createElement("div", {
        style: {
          height: 23.5,
          width: "100%",
          background: f,
          borderRadius: 4,
          border: u(f)
        },
        onClick: function() {
          return d(f);
        },
        id: "rbgcp-preset-".concat(g).concat(s)
      }));
    })));
  }, rA = function() {
    return rA = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, rA.apply(this, arguments);
  }, mw = function() {
    var A = bA().defaultStyles, e = {
      fill: "none",
      strokeWidth: "1.8px"
    };
    return H.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 15
      }
    }, H.createElement("polyline", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: rA(rA({}, e), A.rbgcpControlIcon),
      points: "17.96 4.31 2.04 4.3 3.75 4.3 4.81 17.29 5.16 17.96 5.74 18.47 6.59 18.62 13.64 18.62 14.52 18.32 15.07 17.68 15.29 17.12 16.28 4.3 12.87 4.3 12.87 2.38 12.48 1.75 11.83 1.46 8.4 1.46 7.64 1.68 7.26 2.21 7.16 2.52 7.17 4.23"
    }));
  }, Cw = function(A) {
    var e = A.color, t = bA().defaultStyles, r = e ?? "", n = {
      fill: "none",
      strokeWidth: "1.8px"
    };
    return H.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 14
      }
    }, H.createElement("polyline", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: rA(rA(rA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "0.9 12.73 0.9 19.1 7.27 19.1 0.9 19.1 19.1 0.9 12.73 0.9 19.1 0.9 19.1 7.27"
    }));
  }, ww = function(A) {
    var e = A.color, t = bA().defaultStyles, r = e ?? "", n = {
      fill: "none",
      strokeMiterlimit: 10,
      strokeWidth: "1.8px"
    };
    return H.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 15
      }
    }, H.createElement("circle", {
      style: rA(rA(rA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      cx: "10",
      cy: "10",
      r: "9"
    }), H.createElement("circle", {
      style: rA(rA(rA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      cx: "10",
      cy: "10",
      r: "5"
    }));
  }, vw = function(A) {
    var e = A.color, t = bA().defaultStyles, r = e ?? "", n = {
      fill: "none",
      strokeWidth: "1.8px"
    }, o = {
      strokeWidth: "1.8px"
    };
    return H.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 17
      }
    }, H.createElement("polyline", {
      fillRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: rA(rA(rA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "3.74 2.75 3.74 12.69 0.9 12.71 6.59 12.71"
    }), H.createElement("line", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: rA(rA(rA({}, o), t.rbgcpControlIcon), r && {
        stroke: r,
        fill: r
      }),
      x1: "3.74",
      y1: "17.26",
      x2: "3.74",
      y2: "15.21"
    }), H.createElement("polyline", {
      fillRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: rA(rA(rA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "10.1 17.25 10.1 7.31 12.95 7.29 7.26 7.29"
    }), H.createElement("line", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: rA(rA(rA({}, o), t.rbgcpControlIcon), r && {
        stroke: r,
        fill: r
      }),
      x1: "10.1",
      y1: "2.74",
      x2: "10.1",
      y2: "4.79"
    }), H.createElement("polyline", {
      fillRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: rA(rA(rA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "16.26 2.75 16.26 12.69 13.41 12.71 19.1 12.71"
    }), H.createElement("line", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: rA(rA(rA({}, o), t.rbgcpControlIcon), r && {
        stroke: r,
        fill: r
      }),
      x1: "16.26",
      y1: "17.26",
      x2: "16.26",
      y2: "15.21"
    }));
  }, yw = function(A) {
    var e = A.color, t = bA().defaultStyles, r = e ?? "", n = {
      fill: "none",
      strokeWidth: "1.8px"
    };
    return H.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 17
      }
    }, H.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: rA(rA(rA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      d: "M6.35,2.72a4.85,4.85,0,0,1,1.86.16,7.94,7.94,0,0,1,.88.43,3.66,3.66,0,0,0,.85.49c.25,0,.58-.27.81-.39A8.25,8.25,0,0,1,11.7,3a4,4,0,0,1,1.79-.23,3.21,3.21,0,0,0-1.34.09,6.39,6.39,0,0,0-1.47.63c-.45.25-.7.3-.7.86s0,1.18,0,1.78c0,1.3,0,2.61,0,3.92h0v5.63a2.46,2.46,0,0,1,0,.47c-.07.28-.43.42-.7.57a5.29,5.29,0,0,1-2.94.61A9.3,9.3,0,0,0,8,17.15l1.09-.37.89-.52c.06,0,.48.21.56.25.32.14.64.27,1,.38a8.54,8.54,0,0,0,2.12.4"
    }), H.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: rA(rA(rA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      d: "M7.57,5.73C6,5.7,4.5,5.65,3,5.77a2.28,2.28,0,0,0-1.76.74A2.3,2.3,0,0,0,.94,7.83l0,3.82A4.73,4.73,0,0,0,1,12.9a1.64,1.64,0,0,0,.68,1,2.44,2.44,0,0,0,1,.27,25,25,0,0,0,4.74.09"
    }), H.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: rA(rA(rA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      d: "M12.43,14.32a44.12,44.12,0,0,0,4.6,0,2.24,2.24,0,0,0,1.76-.74,2.29,2.29,0,0,0,.27-1.32l0-3.81A4.81,4.81,0,0,0,19,7.15a1.62,1.62,0,0,0-.68-1,2.31,2.31,0,0,0-1-.28,26.8,26.8,0,0,0-4.74-.09"
    }));
  }, Qw = function(A) {
    var e = A.color, t = bA().defaultStyles, r = e ?? "", n = {
      strokeMiterlimit: 10,
      strokeWidth: "0.5px"
    };
    return H.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 17
      }
    }, H.createElement("circle", {
      style: rA(rA({}, t.rbgcpControlIcon2), r && {
        fill: r
      }),
      cx: "9.36",
      cy: "5.07",
      r: "1.71"
    }), H.createElement("circle", {
      style: rA(rA({}, t.rbgcpControlIcon2), r && {
        fill: r
      }),
      cx: "13.93",
      cy: "6.91",
      r: "1.71"
    }), H.createElement("circle", {
      style: rA(rA({}, t.rbgcpControlIcon2), r && {
        fill: r
      }),
      cx: "5.8",
      cy: "7.55",
      r: "1.71"
    }), H.createElement("circle", {
      style: rA(rA({}, t.rbgcpControlIcon2), r && {
        fill: r
      }),
      cx: "5.45",
      cy: "12.04",
      r: "1.71"
    }), H.createElement("path", {
      style: rA(rA(rA(rA({}, n), t.rbgcpControlIcon), t.rbgcpControlIcon2), r && {
        fill: r,
        stroke: r
      }),
      d: "M19.1,10c0,3.58-2.12,2.94-4.06,2.35-1.15-.34-2.24-.67-2.77-.08-.68.78-.54,2.07-.39,3.33.2,1.79.39,3.5-1.88,3.5A9.1,9.1,0,1,1,19.1,10ZM10,18c.7,0,.74-.19.75-.2a2.67,2.67,0,0,0,.07-1.27c0-.19,0-.42-.06-.67-.06-.53-.13-1.15-.14-1.67a3.82,3.82,0,0,1,.8-2.63,2.14,2.14,0,0,1,1.45-.7,4.36,4.36,0,0,1,1.32.12c.39.08.8.21,1.16.32h0c.39.12.74.23,1.08.3.74.17,1,.1,1.13,0S18,11.32,18,10a8,8,0,1,0-8,8Z"
    }));
  }, bw = function(A) {
    var e = A.color, t = bA().defaultStyles, r = e ?? "", n = {
      fill: "none",
      strokeMiterlimit: 10,
      strokeWidth: "1.8px"
    };
    return H.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 15
      }
    }, H.createElement("polyline", {
      strokeLinecap: "round",
      style: rA(rA(rA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "13.86 2.01 1.7 16.99 18.77 16.99"
    }), H.createElement("polyline", {
      strokeLinecap: "round",
      style: rA(rA(rA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "10.96 16.38 10.96 16.38 10.74 15.7 10.44 14.97 10.06 14.21 9.72 13.63 9.21 12.89 8.85 12.44 8.41 11.95 7.91 11.45 7.51 11.1"
    }));
  }, Fw = function() {
    var A = bA().defaultStyles;
    return H.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 20,
        marginRight: 1
      }
    }, H.createElement("path", {
      style: rA({}, A.rbgcpControlIcon2),
      d: "M2.39,8c-.63,0-1,.21-1,.63A.49.49,0,0,0,1.67,9a6.48,6.48,0,0,0,1.11.43A3,3,0,0,1,4,10.09a1.47,1.47,0,0,1,.35,1.09,1.75,1.75,0,0,1-.57,1.42,2.21,2.21,0,0,1-1.48.48,8.32,8.32,0,0,1-1.68-.21l-.31-.06.12-.94a13.7,13.7,0,0,0,1.8.16c.61,0,.92-.26.92-.77a.52.52,0,0,0-.21-.44,3.13,3.13,0,0,0-.85-.34A3.32,3.32,0,0,1,.66,9.79a1.43,1.43,0,0,1-.42-1.1A1.6,1.6,0,0,1,.78,7.36a2.32,2.32,0,0,1,1.49-.44,10.46,10.46,0,0,1,1.64.17l.32.07-.1.95C3.31,8,2.73,8,2.39,8Z"
    }), H.createElement("path", {
      style: rA({}, A.rbgcpControlIcon2),
      d: "M4.79,8.09V7H9.16V8.09H7.59V13H6.38V8.09Z"
    }), H.createElement("path", {
      style: rA({}, A.rbgcpControlIcon2),
      d: "M14,12.34a2.25,2.25,0,0,1-1.91.74,2.24,2.24,0,0,1-1.91-.74A3.85,3.85,0,0,1,9.61,10a4,4,0,0,1,.56-2.34,2.2,2.2,0,0,1,1.91-.77A2.21,2.21,0,0,1,14,7.69,4,4,0,0,1,14.55,10,3.85,3.85,0,0,1,14,12.34Zm-2.88-.77a1,1,0,0,0,1,.46,1,1,0,0,0,1-.46A3.25,3.25,0,0,0,13.3,10,3.45,3.45,0,0,0,13,8.46a1,1,0,0,0-1-.49,1,1,0,0,0-1,.49A3.43,3.43,0,0,0,10.85,10,3.38,3.38,0,0,0,11.11,11.57Z"
    }), H.createElement("path", {
      style: rA({}, A.rbgcpControlIcon2),
      d: "M17.77,11.24h-1V13H15.58V7h2.19a1.85,1.85,0,0,1,2.11,2.07,2.21,2.21,0,0,1-.54,1.6A2.07,2.07,0,0,1,17.77,11.24Zm-1-1h1c.6,0,.9-.37.9-1.12a1.18,1.18,0,0,0-.22-.79.88.88,0,0,0-.68-.24h-1Z"
    }));
  }, Uw = function(A) {
    var e, t = A.children, r = "id" + Math.random().toString(16).slice(2), n = h.useRef((e = document.getElementById(r)) !== null && e !== void 0 ? e : document.createElement("div")), o = h.useState(!n.current.parentElement)[0];
    return h.useEffect(function() {
      var i = n.current;
      return o && (n.current.id = r, document.body.appendChild(n.current)), function() {
        o && i.parentElement && i.parentElement.removeChild(i);
      };
    }, [
      r
    ]), Hs.createPortal(t, n.current);
  };
  const Ew = h.memo(Uw);
  var Sa = function(A, e) {
    return Sa = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(t, r) {
      t.__proto__ = r;
    } || function(t, r) {
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }, Sa(A, e);
  };
  function ke(A, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
    Sa(A, e);
    function t() {
      this.constructor = A;
    }
    A.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
  }
  var xa = function() {
    return xa = Object.assign || function(e) {
      for (var t, r = 1, n = arguments.length; r < n; r++) {
        t = arguments[r];
        for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
      }
      return e;
    }, xa.apply(this, arguments);
  };
  function de(A, e, t, r) {
    function n(o) {
      return o instanceof t ? o : new t(function(i) {
        i(o);
      });
    }
    return new (t || (t = Promise))(function(o, i) {
      function a(c) {
        try {
          s(r.next(c));
        } catch (d) {
          i(d);
        }
      }
      function l(c) {
        try {
          s(r.throw(c));
        } catch (d) {
          i(d);
        }
      }
      function s(c) {
        c.done ? o(c.value) : n(c.value).then(a, l);
      }
      s((r = r.apply(A, [])).next());
    });
  }
  function se(A, e) {
    var t = {
      label: 0,
      sent: function() {
        if (o[0] & 1) throw o[1];
        return o[1];
      },
      trys: [],
      ops: []
    }, r, n, o, i;
    return i = {
      next: a(0),
      throw: a(1),
      return: a(2)
    }, typeof Symbol == "function" && (i[Symbol.iterator] = function() {
      return this;
    }), i;
    function a(s) {
      return function(c) {
        return l([
          s,
          c
        ]);
      };
    }
    function l(s) {
      if (r) throw new TypeError("Generator is already executing.");
      for (; t; ) try {
        if (r = 1, n && (o = s[0] & 2 ? n.return : s[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, s[1])).done) return o;
        switch (n = 0, o && (s = [
          s[0] & 2,
          o.value
        ]), s[0]) {
          case 0:
          case 1:
            o = s;
            break;
          case 4:
            return t.label++, {
              value: s[1],
              done: false
            };
          case 5:
            t.label++, n = s[1], s = [
              0
            ];
            continue;
          case 7:
            s = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (o = t.trys, !(o = o.length > 0 && o[o.length - 1]) && (s[0] === 6 || s[0] === 2)) {
              t = 0;
              continue;
            }
            if (s[0] === 3 && (!o || s[1] > o[0] && s[1] < o[3])) {
              t.label = s[1];
              break;
            }
            if (s[0] === 6 && t.label < o[1]) {
              t.label = o[1], o = s;
              break;
            }
            if (o && t.label < o[2]) {
              t.label = o[2], t.ops.push(s);
              break;
            }
            o[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        s = e.call(A, t);
      } catch (c) {
        s = [
          6,
          c
        ], n = 0;
      } finally {
        r = o = 0;
      }
      if (s[0] & 5) throw s[1];
      return {
        value: s[0] ? s[1] : void 0,
        done: true
      };
    }
  }
  function Fn(A, e, t) {
    if (arguments.length === 2) for (var r = 0, n = e.length, o; r < n; r++) (o || !(r in e)) && (o || (o = Array.prototype.slice.call(e, 0, r)), o[r] = e[r]);
    return A.concat(o || e);
  }
  var ot = (function() {
    function A(e, t, r, n) {
      this.left = e, this.top = t, this.width = r, this.height = n;
    }
    return A.prototype.add = function(e, t, r, n) {
      return new A(this.left + e, this.top + t, this.width + r, this.height + n);
    }, A.fromClientRect = function(e, t) {
      return new A(t.left + e.windowBounds.left, t.top + e.windowBounds.top, t.width, t.height);
    }, A.fromDOMRectList = function(e, t) {
      var r = Array.from(t).find(function(n) {
        return n.width !== 0;
      });
      return r ? new A(r.left + e.windowBounds.left, r.top + e.windowBounds.top, r.width, r.height) : A.EMPTY;
    }, A.EMPTY = new A(0, 0, 0, 0), A;
  })(), pi = function(A, e) {
    return ot.fromClientRect(A, e.getBoundingClientRect());
  }, Sw = function(A) {
    var e = A.body, t = A.documentElement;
    if (!e || !t) throw new Error("Unable to get document size");
    var r = Math.max(Math.max(e.scrollWidth, t.scrollWidth), Math.max(e.offsetWidth, t.offsetWidth), Math.max(e.clientWidth, t.clientWidth)), n = Math.max(Math.max(e.scrollHeight, t.scrollHeight), Math.max(e.offsetHeight, t.offsetHeight), Math.max(e.clientHeight, t.clientHeight));
    return new ot(0, 0, r, n);
  }, Bi = function(A) {
    for (var e = [], t = 0, r = A.length; t < r; ) {
      var n = A.charCodeAt(t++);
      if (n >= 55296 && n <= 56319 && t < r) {
        var o = A.charCodeAt(t++);
        (o & 64512) === 56320 ? e.push(((n & 1023) << 10) + (o & 1023) + 65536) : (e.push(n), t--);
      } else e.push(n);
    }
    return e;
  }, GA = function() {
    for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
    if (String.fromCodePoint) return String.fromCodePoint.apply(String, A);
    var t = A.length;
    if (!t) return "";
    for (var r = [], n = -1, o = ""; ++n < t; ) {
      var i = A[n];
      i <= 65535 ? r.push(i) : (i -= 65536, r.push((i >> 10) + 55296, i % 1024 + 56320)), (n + 1 === t || r.length > 16384) && (o += String.fromCharCode.apply(String, r), r.length = 0);
    }
    return o;
  }, Yl = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", xw = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (var Un = 0; Un < Yl.length; Un++) xw[Yl.charCodeAt(Un)] = Un;
  var Zl = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Tr = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (var En = 0; En < Zl.length; En++) Tr[Zl.charCodeAt(En)] = En;
  var Iw = function(A) {
    var e = A.length * 0.75, t = A.length, r, n = 0, o, i, a, l;
    A[A.length - 1] === "=" && (e--, A[A.length - 2] === "=" && e--);
    var s = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(e) : new Array(e), c = Array.isArray(s) ? s : new Uint8Array(s);
    for (r = 0; r < t; r += 4) o = Tr[A.charCodeAt(r)], i = Tr[A.charCodeAt(r + 1)], a = Tr[A.charCodeAt(r + 2)], l = Tr[A.charCodeAt(r + 3)], c[n++] = o << 2 | i >> 4, c[n++] = (i & 15) << 4 | a >> 2, c[n++] = (a & 3) << 6 | l & 63;
    return s;
  }, Hw = function(A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 2) t.push(A[r + 1] << 8 | A[r]);
    return t;
  }, Tw = function(A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 4) t.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]);
    return t;
  }, Rt = 5, Ns = 11, Oi = 2, Lw = Ns - Rt, Qd = 65536 >> Rt, kw = 1 << Rt, Ki = kw - 1, Rw = 1024 >> Rt, Ow = Qd + Rw, Kw = Ow, Mw = 32, Dw = Kw + Mw, Pw = 65536 >> Ns, _w = 1 << Lw, Nw = _w - 1, ql = function(A, e, t) {
    return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t));
  }, Gw = function(A, e, t) {
    return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t));
  }, Vw = function(A, e) {
    var t = Iw(A), r = Array.isArray(t) ? Tw(t) : new Uint32Array(t), n = Array.isArray(t) ? Hw(t) : new Uint16Array(t), o = 24, i = ql(n, o / 2, r[4] / 2), a = r[5] === 2 ? ql(n, (o + r[4]) / 2) : Gw(r, Math.ceil((o + r[4]) / 4));
    return new $w(r[0], r[1], r[2], r[3], i, a);
  }, $w = (function() {
    function A(e, t, r, n, o, i) {
      this.initialValue = e, this.errorValue = t, this.highStart = r, this.highValueIndex = n, this.index = o, this.data = i;
    }
    return A.prototype.get = function(e) {
      var t;
      if (e >= 0) {
        if (e < 55296 || e > 56319 && e <= 65535) return t = this.index[e >> Rt], t = (t << Oi) + (e & Ki), this.data[t];
        if (e <= 65535) return t = this.index[Qd + (e - 55296 >> Rt)], t = (t << Oi) + (e & Ki), this.data[t];
        if (e < this.highStart) return t = Dw - Pw + (e >> Ns), t = this.index[t], t += e >> Rt & Nw, t = this.index[t], t = (t << Oi) + (e & Ki), this.data[t];
        if (e <= 1114111) return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, A;
  })(), Ac = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ww = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (var Sn = 0; Sn < Ac.length; Sn++) Ww[Ac.charCodeAt(Sn)] = Sn;
  var zw = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", ec = 50, Xw = 1, bd = 2, Fd = 3, jw = 4, Jw = 5, tc = 7, Ud = 8, rc = 9, dt = 10, Ia = 11, nc = 12, Ha = 13, Yw = 14, Lr = 15, Ta = 16, xn = 17, Fr = 18, Zw = 19, oc = 20, La = 21, Ur = 22, Mi = 23, Wt = 24, he = 25, kr = 26, Rr = 27, zt = 28, qw = 29, xt = 30, Av = 31, In = 32, Hn = 33, ka = 34, Ra = 35, Oa = 36, qr = 37, Ka = 38, to = 39, ro = 40, Di = 41, Ed = 42, ev = 43, tv = [
    9001,
    65288
  ], Sd = "!", hA = "\xD7", Tn = "\xF7", Ma = Vw(zw), Ze = [
    xt,
    Oa
  ], Da = [
    Xw,
    bd,
    Fd,
    Jw
  ], xd = [
    dt,
    Ud
  ], ic = [
    Rr,
    kr
  ], rv = Da.concat(xd), ac = [
    Ka,
    to,
    ro,
    ka,
    Ra
  ], nv = [
    Lr,
    Ha
  ], ov = function(A, e) {
    e === void 0 && (e = "strict");
    var t = [], r = [], n = [];
    return A.forEach(function(o, i) {
      var a = Ma.get(o);
      if (a > ec ? (n.push(true), a -= ec) : n.push(false), [
        "normal",
        "auto",
        "loose"
      ].indexOf(e) !== -1 && [
        8208,
        8211,
        12316,
        12448
      ].indexOf(o) !== -1) return r.push(i), t.push(Ta);
      if (a === jw || a === Ia) {
        if (i === 0) return r.push(i), t.push(xt);
        var l = t[i - 1];
        return rv.indexOf(l) === -1 ? (r.push(r[i - 1]), t.push(l)) : (r.push(i), t.push(xt));
      }
      if (r.push(i), a === Av) return t.push(e === "strict" ? La : qr);
      if (a === Ed || a === qw) return t.push(xt);
      if (a === ev) return o >= 131072 && o <= 196605 || o >= 196608 && o <= 262141 ? t.push(qr) : t.push(xt);
      t.push(a);
    }), [
      r,
      t,
      n
    ];
  }, Pi = function(A, e, t, r) {
    var n = r[t];
    if (Array.isArray(A) ? A.indexOf(n) !== -1 : A === n) for (var o = t; o <= r.length; ) {
      o++;
      var i = r[o];
      if (i === e) return true;
      if (i !== dt) break;
    }
    if (n === dt) for (var o = t; o > 0; ) {
      o--;
      var a = r[o];
      if (Array.isArray(A) ? A.indexOf(a) !== -1 : A === a) for (var l = t; l <= r.length; ) {
        l++;
        var i = r[l];
        if (i === e) return true;
        if (i !== dt) break;
      }
      if (a !== dt) break;
    }
    return false;
  }, sc = function(A, e) {
    for (var t = A; t >= 0; ) {
      var r = e[t];
      if (r === dt) t--;
      else return r;
    }
    return 0;
  }, iv = function(A, e, t, r, n) {
    if (t[r] === 0) return hA;
    var o = r - 1;
    if (Array.isArray(n) && n[o] === true) return hA;
    var i = o - 1, a = o + 1, l = e[o], s = i >= 0 ? e[i] : 0, c = e[a];
    if (l === bd && c === Fd) return hA;
    if (Da.indexOf(l) !== -1) return Sd;
    if (Da.indexOf(c) !== -1 || xd.indexOf(c) !== -1) return hA;
    if (sc(o, e) === Ud) return Tn;
    if (Ma.get(A[o]) === Ia || (l === In || l === Hn) && Ma.get(A[a]) === Ia || l === tc || c === tc || l === rc || [
      dt,
      Ha,
      Lr
    ].indexOf(l) === -1 && c === rc || [
      xn,
      Fr,
      Zw,
      Wt,
      zt
    ].indexOf(c) !== -1 || sc(o, e) === Ur || Pi(Mi, Ur, o, e) || Pi([
      xn,
      Fr
    ], La, o, e) || Pi(nc, nc, o, e)) return hA;
    if (l === dt) return Tn;
    if (l === Mi || c === Mi) return hA;
    if (c === Ta || l === Ta) return Tn;
    if ([
      Ha,
      Lr,
      La
    ].indexOf(c) !== -1 || l === Yw || s === Oa && nv.indexOf(l) !== -1 || l === zt && c === Oa || c === oc || Ze.indexOf(c) !== -1 && l === he || Ze.indexOf(l) !== -1 && c === he || l === Rr && [
      qr,
      In,
      Hn
    ].indexOf(c) !== -1 || [
      qr,
      In,
      Hn
    ].indexOf(l) !== -1 && c === kr || Ze.indexOf(l) !== -1 && ic.indexOf(c) !== -1 || ic.indexOf(l) !== -1 && Ze.indexOf(c) !== -1 || [
      Rr,
      kr
    ].indexOf(l) !== -1 && (c === he || [
      Ur,
      Lr
    ].indexOf(c) !== -1 && e[a + 1] === he) || [
      Ur,
      Lr
    ].indexOf(l) !== -1 && c === he || l === he && [
      he,
      zt,
      Wt
    ].indexOf(c) !== -1) return hA;
    if ([
      he,
      zt,
      Wt,
      xn,
      Fr
    ].indexOf(c) !== -1) for (var d = o; d >= 0; ) {
      var u = e[d];
      if (u === he) return hA;
      if ([
        zt,
        Wt
      ].indexOf(u) !== -1) d--;
      else break;
    }
    if ([
      Rr,
      kr
    ].indexOf(c) !== -1) for (var d = [
      xn,
      Fr
    ].indexOf(l) !== -1 ? i : o; d >= 0; ) {
      var u = e[d];
      if (u === he) return hA;
      if ([
        zt,
        Wt
      ].indexOf(u) !== -1) d--;
      else break;
    }
    if (Ka === l && [
      Ka,
      to,
      ka,
      Ra
    ].indexOf(c) !== -1 || [
      to,
      ka
    ].indexOf(l) !== -1 && [
      to,
      ro
    ].indexOf(c) !== -1 || [
      ro,
      Ra
    ].indexOf(l) !== -1 && c === ro || ac.indexOf(l) !== -1 && [
      oc,
      kr
    ].indexOf(c) !== -1 || ac.indexOf(c) !== -1 && l === Rr || Ze.indexOf(l) !== -1 && Ze.indexOf(c) !== -1 || l === Wt && Ze.indexOf(c) !== -1 || Ze.concat(he).indexOf(l) !== -1 && c === Ur && tv.indexOf(A[a]) === -1 || Ze.concat(he).indexOf(c) !== -1 && l === Fr) return hA;
    if (l === Di && c === Di) {
      for (var f = t[o], g = 1; f > 0 && (f--, e[f] === Di); ) g++;
      if (g % 2 !== 0) return hA;
    }
    return l === In && c === Hn ? hA : Tn;
  }, av = function(A, e) {
    e || (e = {
      lineBreak: "normal",
      wordBreak: "normal"
    });
    var t = ov(A, e.lineBreak), r = t[0], n = t[1], o = t[2];
    (e.wordBreak === "break-all" || e.wordBreak === "break-word") && (n = n.map(function(a) {
      return [
        he,
        xt,
        Ed
      ].indexOf(a) !== -1 ? qr : a;
    }));
    var i = e.wordBreak === "keep-all" ? o.map(function(a, l) {
      return a && A[l] >= 19968 && A[l] <= 40959;
    }) : void 0;
    return [
      r,
      n,
      i
    ];
  }, sv = (function() {
    function A(e, t, r, n) {
      this.codePoints = e, this.required = t === Sd, this.start = r, this.end = n;
    }
    return A.prototype.slice = function() {
      return GA.apply(void 0, this.codePoints.slice(this.start, this.end));
    }, A;
  })(), lv = function(A, e) {
    var t = Bi(A), r = av(t, e), n = r[0], o = r[1], i = r[2], a = t.length, l = 0, s = 0;
    return {
      next: function() {
        if (s >= a) return {
          done: true,
          value: null
        };
        for (var c = hA; s < a && (c = iv(t, o, n, ++s, i)) === hA; ) ;
        if (c !== hA || s === a) {
          var d = new sv(t, c, l, s);
          return l = s, {
            value: d,
            done: false
          };
        }
        return {
          done: true,
          value: null
        };
      }
    };
  }, cv = 1, uv = 2, fn = 4, lc = 8, Co = 10, cc = 47, Gr = 92, dv = 9, fv = 32, Ln = 34, Er = 61, gv = 35, pv = 36, Bv = 37, kn = 39, Rn = 40, Sr = 41, hv = 95, fe = 45, mv = 33, Cv = 60, wv = 62, vv = 64, yv = 91, Qv = 93, bv = 61, Fv = 123, On = 63, Uv = 125, uc = 124, Ev = 126, Sv = 128, dc = 65533, _i = 42, Lt = 43, xv = 44, Iv = 58, Hv = 59, An = 46, Tv = 0, Lv = 8, kv = 11, Rv = 14, Ov = 31, Kv = 127, Ke = -1, Id = 48, Hd = 97, Td = 101, Mv = 102, Dv = 117, Pv = 122, Ld = 65, kd = 69, Rd = 70, _v = 85, Nv = 90, le = function(A) {
    return A >= Id && A <= 57;
  }, Gv = function(A) {
    return A >= 55296 && A <= 57343;
  }, Xt = function(A) {
    return le(A) || A >= Ld && A <= Rd || A >= Hd && A <= Mv;
  }, Vv = function(A) {
    return A >= Hd && A <= Pv;
  }, $v = function(A) {
    return A >= Ld && A <= Nv;
  }, Wv = function(A) {
    return Vv(A) || $v(A);
  }, zv = function(A) {
    return A >= Sv;
  }, Kn = function(A) {
    return A === Co || A === dv || A === fv;
  }, wo = function(A) {
    return Wv(A) || zv(A) || A === hv;
  }, fc = function(A) {
    return wo(A) || le(A) || A === fe;
  }, Xv = function(A) {
    return A >= Tv && A <= Lv || A === kv || A >= Rv && A <= Ov || A === Kv;
  }, ut = function(A, e) {
    return A !== Gr ? false : e !== Co;
  }, Mn = function(A, e, t) {
    return A === fe ? wo(e) || ut(e, t) : wo(A) ? true : !!(A === Gr && ut(A, e));
  }, Ni = function(A, e, t) {
    return A === Lt || A === fe ? le(e) ? true : e === An && le(t) : le(A === An ? e : A);
  }, jv = function(A) {
    var e = 0, t = 1;
    (A[e] === Lt || A[e] === fe) && (A[e] === fe && (t = -1), e++);
    for (var r = []; le(A[e]); ) r.push(A[e++]);
    var n = r.length ? parseInt(GA.apply(void 0, r), 10) : 0;
    A[e] === An && e++;
    for (var o = []; le(A[e]); ) o.push(A[e++]);
    var i = o.length, a = i ? parseInt(GA.apply(void 0, o), 10) : 0;
    (A[e] === kd || A[e] === Td) && e++;
    var l = 1;
    (A[e] === Lt || A[e] === fe) && (A[e] === fe && (l = -1), e++);
    for (var s = []; le(A[e]); ) s.push(A[e++]);
    var c = s.length ? parseInt(GA.apply(void 0, s), 10) : 0;
    return t * (n + a * Math.pow(10, -i)) * Math.pow(10, l * c);
  }, Jv = {
    type: 2
  }, Yv = {
    type: 3
  }, Zv = {
    type: 4
  }, qv = {
    type: 13
  }, Ay = {
    type: 8
  }, ey = {
    type: 21
  }, ty = {
    type: 9
  }, ry = {
    type: 10
  }, ny = {
    type: 11
  }, oy = {
    type: 12
  }, iy = {
    type: 14
  }, Dn = {
    type: 23
  }, ay = {
    type: 1
  }, sy = {
    type: 25
  }, ly = {
    type: 24
  }, cy = {
    type: 26
  }, uy = {
    type: 27
  }, dy = {
    type: 28
  }, fy = {
    type: 29
  }, gy = {
    type: 31
  }, Pa = {
    type: 32
  }, Od = (function() {
    function A() {
      this._value = [];
    }
    return A.prototype.write = function(e) {
      this._value = this._value.concat(Bi(e));
    }, A.prototype.read = function() {
      for (var e = [], t = this.consumeToken(); t !== Pa; ) e.push(t), t = this.consumeToken();
      return e;
    }, A.prototype.consumeToken = function() {
      var e = this.consumeCodePoint();
      switch (e) {
        case Ln:
          return this.consumeStringToken(Ln);
        case gv:
          var t = this.peekCodePoint(0), r = this.peekCodePoint(1), n = this.peekCodePoint(2);
          if (fc(t) || ut(r, n)) {
            var o = Mn(t, r, n) ? uv : cv, i = this.consumeName();
            return {
              type: 5,
              value: i,
              flags: o
            };
          }
          break;
        case pv:
          if (this.peekCodePoint(0) === Er) return this.consumeCodePoint(), qv;
          break;
        case kn:
          return this.consumeStringToken(kn);
        case Rn:
          return Jv;
        case Sr:
          return Yv;
        case _i:
          if (this.peekCodePoint(0) === Er) return this.consumeCodePoint(), iy;
          break;
        case Lt:
          if (Ni(e, this.peekCodePoint(0), this.peekCodePoint(1))) return this.reconsumeCodePoint(e), this.consumeNumericToken();
          break;
        case xv:
          return Zv;
        case fe:
          var a = e, l = this.peekCodePoint(0), s = this.peekCodePoint(1);
          if (Ni(a, l, s)) return this.reconsumeCodePoint(e), this.consumeNumericToken();
          if (Mn(a, l, s)) return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
          if (l === fe && s === wv) return this.consumeCodePoint(), this.consumeCodePoint(), ly;
          break;
        case An:
          if (Ni(e, this.peekCodePoint(0), this.peekCodePoint(1))) return this.reconsumeCodePoint(e), this.consumeNumericToken();
          break;
        case cc:
          if (this.peekCodePoint(0) === _i) for (this.consumeCodePoint(); ; ) {
            var c = this.consumeCodePoint();
            if (c === _i && (c = this.consumeCodePoint(), c === cc)) return this.consumeToken();
            if (c === Ke) return this.consumeToken();
          }
          break;
        case Iv:
          return cy;
        case Hv:
          return uy;
        case Cv:
          if (this.peekCodePoint(0) === mv && this.peekCodePoint(1) === fe && this.peekCodePoint(2) === fe) return this.consumeCodePoint(), this.consumeCodePoint(), sy;
          break;
        case vv:
          var d = this.peekCodePoint(0), u = this.peekCodePoint(1), f = this.peekCodePoint(2);
          if (Mn(d, u, f)) {
            var i = this.consumeName();
            return {
              type: 7,
              value: i
            };
          }
          break;
        case yv:
          return dy;
        case Gr:
          if (ut(e, this.peekCodePoint(0))) return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
          break;
        case Qv:
          return fy;
        case bv:
          if (this.peekCodePoint(0) === Er) return this.consumeCodePoint(), Ay;
          break;
        case Fv:
          return ny;
        case Uv:
          return oy;
        case Dv:
        case _v:
          var g = this.peekCodePoint(0), p = this.peekCodePoint(1);
          return g === Lt && (Xt(p) || p === On) && (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
        case uc:
          if (this.peekCodePoint(0) === Er) return this.consumeCodePoint(), ty;
          if (this.peekCodePoint(0) === uc) return this.consumeCodePoint(), ey;
          break;
        case Ev:
          if (this.peekCodePoint(0) === Er) return this.consumeCodePoint(), ry;
          break;
        case Ke:
          return Pa;
      }
      return Kn(e) ? (this.consumeWhiteSpace(), gy) : le(e) ? (this.reconsumeCodePoint(e), this.consumeNumericToken()) : wo(e) ? (this.reconsumeCodePoint(e), this.consumeIdentLikeToken()) : {
        type: 6,
        value: GA(e)
      };
    }, A.prototype.consumeCodePoint = function() {
      var e = this._value.shift();
      return typeof e > "u" ? -1 : e;
    }, A.prototype.reconsumeCodePoint = function(e) {
      this._value.unshift(e);
    }, A.prototype.peekCodePoint = function(e) {
      return e >= this._value.length ? -1 : this._value[e];
    }, A.prototype.consumeUnicodeRangeToken = function() {
      for (var e = [], t = this.consumeCodePoint(); Xt(t) && e.length < 6; ) e.push(t), t = this.consumeCodePoint();
      for (var r = false; t === On && e.length < 6; ) e.push(t), t = this.consumeCodePoint(), r = true;
      if (r) {
        var n = parseInt(GA.apply(void 0, e.map(function(l) {
          return l === On ? Id : l;
        })), 16), o = parseInt(GA.apply(void 0, e.map(function(l) {
          return l === On ? Rd : l;
        })), 16);
        return {
          type: 30,
          start: n,
          end: o
        };
      }
      var i = parseInt(GA.apply(void 0, e), 16);
      if (this.peekCodePoint(0) === fe && Xt(this.peekCodePoint(1))) {
        this.consumeCodePoint(), t = this.consumeCodePoint();
        for (var a = []; Xt(t) && a.length < 6; ) a.push(t), t = this.consumeCodePoint();
        var o = parseInt(GA.apply(void 0, a), 16);
        return {
          type: 30,
          start: i,
          end: o
        };
      } else return {
        type: 30,
        start: i,
        end: i
      };
    }, A.prototype.consumeIdentLikeToken = function() {
      var e = this.consumeName();
      return e.toLowerCase() === "url" && this.peekCodePoint(0) === Rn ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === Rn ? (this.consumeCodePoint(), {
        type: 19,
        value: e
      }) : {
        type: 20,
        value: e
      };
    }, A.prototype.consumeUrlToken = function() {
      var e = [];
      if (this.consumeWhiteSpace(), this.peekCodePoint(0) === Ke) return {
        type: 22,
        value: ""
      };
      var t = this.peekCodePoint(0);
      if (t === kn || t === Ln) {
        var r = this.consumeStringToken(this.consumeCodePoint());
        return r.type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === Ke || this.peekCodePoint(0) === Sr) ? (this.consumeCodePoint(), {
          type: 22,
          value: r.value
        }) : (this.consumeBadUrlRemnants(), Dn);
      }
      for (; ; ) {
        var n = this.consumeCodePoint();
        if (n === Ke || n === Sr) return {
          type: 22,
          value: GA.apply(void 0, e)
        };
        if (Kn(n)) return this.consumeWhiteSpace(), this.peekCodePoint(0) === Ke || this.peekCodePoint(0) === Sr ? (this.consumeCodePoint(), {
          type: 22,
          value: GA.apply(void 0, e)
        }) : (this.consumeBadUrlRemnants(), Dn);
        if (n === Ln || n === kn || n === Rn || Xv(n)) return this.consumeBadUrlRemnants(), Dn;
        if (n === Gr) if (ut(n, this.peekCodePoint(0))) e.push(this.consumeEscapedCodePoint());
        else return this.consumeBadUrlRemnants(), Dn;
        else e.push(n);
      }
    }, A.prototype.consumeWhiteSpace = function() {
      for (; Kn(this.peekCodePoint(0)); ) this.consumeCodePoint();
    }, A.prototype.consumeBadUrlRemnants = function() {
      for (; ; ) {
        var e = this.consumeCodePoint();
        if (e === Sr || e === Ke) return;
        ut(e, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
      }
    }, A.prototype.consumeStringSlice = function(e) {
      for (var t = 5e4, r = ""; e > 0; ) {
        var n = Math.min(t, e);
        r += GA.apply(void 0, this._value.splice(0, n)), e -= n;
      }
      return this._value.shift(), r;
    }, A.prototype.consumeStringToken = function(e) {
      var t = "", r = 0;
      do {
        var n = this._value[r];
        if (n === Ke || n === void 0 || n === e) return t += this.consumeStringSlice(r), {
          type: 0,
          value: t
        };
        if (n === Co) return this._value.splice(0, r), ay;
        if (n === Gr) {
          var o = this._value[r + 1];
          o !== Ke && o !== void 0 && (o === Co ? (t += this.consumeStringSlice(r), r = -1, this._value.shift()) : ut(n, o) && (t += this.consumeStringSlice(r), t += GA(this.consumeEscapedCodePoint()), r = -1));
        }
        r++;
      } while (true);
    }, A.prototype.consumeNumber = function() {
      var e = [], t = fn, r = this.peekCodePoint(0);
      for ((r === Lt || r === fe) && e.push(this.consumeCodePoint()); le(this.peekCodePoint(0)); ) e.push(this.consumeCodePoint());
      r = this.peekCodePoint(0);
      var n = this.peekCodePoint(1);
      if (r === An && le(n)) for (e.push(this.consumeCodePoint(), this.consumeCodePoint()), t = lc; le(this.peekCodePoint(0)); ) e.push(this.consumeCodePoint());
      r = this.peekCodePoint(0), n = this.peekCodePoint(1);
      var o = this.peekCodePoint(2);
      if ((r === kd || r === Td) && ((n === Lt || n === fe) && le(o) || le(n))) for (e.push(this.consumeCodePoint(), this.consumeCodePoint()), t = lc; le(this.peekCodePoint(0)); ) e.push(this.consumeCodePoint());
      return [
        jv(e),
        t
      ];
    }, A.prototype.consumeNumericToken = function() {
      var e = this.consumeNumber(), t = e[0], r = e[1], n = this.peekCodePoint(0), o = this.peekCodePoint(1), i = this.peekCodePoint(2);
      if (Mn(n, o, i)) {
        var a = this.consumeName();
        return {
          type: 15,
          number: t,
          flags: r,
          unit: a
        };
      }
      return n === Bv ? (this.consumeCodePoint(), {
        type: 16,
        number: t,
        flags: r
      }) : {
        type: 17,
        number: t,
        flags: r
      };
    }, A.prototype.consumeEscapedCodePoint = function() {
      var e = this.consumeCodePoint();
      if (Xt(e)) {
        for (var t = GA(e); Xt(this.peekCodePoint(0)) && t.length < 6; ) t += GA(this.consumeCodePoint());
        Kn(this.peekCodePoint(0)) && this.consumeCodePoint();
        var r = parseInt(t, 16);
        return r === 0 || Gv(r) || r > 1114111 ? dc : r;
      }
      return e === Ke ? dc : e;
    }, A.prototype.consumeName = function() {
      for (var e = ""; ; ) {
        var t = this.consumeCodePoint();
        if (fc(t)) e += GA(t);
        else if (ut(t, this.peekCodePoint(0))) e += GA(this.consumeEscapedCodePoint());
        else return this.reconsumeCodePoint(t), e;
      }
    }, A;
  })(), Kd = (function() {
    function A(e) {
      this._tokens = e;
    }
    return A.create = function(e) {
      var t = new Od();
      return t.write(e), new A(t.read());
    }, A.parseValue = function(e) {
      return A.create(e).parseComponentValue();
    }, A.parseValues = function(e) {
      return A.create(e).parseComponentValues();
    }, A.prototype.parseComponentValue = function() {
      for (var e = this.consumeToken(); e.type === 31; ) e = this.consumeToken();
      if (e.type === 32) throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
      this.reconsumeToken(e);
      var t = this.consumeComponentValue();
      do
        e = this.consumeToken();
      while (e.type === 31);
      if (e.type === 32) return t;
      throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one");
    }, A.prototype.parseComponentValues = function() {
      for (var e = []; ; ) {
        var t = this.consumeComponentValue();
        if (t.type === 32) return e;
        e.push(t), e.push();
      }
    }, A.prototype.consumeComponentValue = function() {
      var e = this.consumeToken();
      switch (e.type) {
        case 11:
        case 28:
        case 2:
          return this.consumeSimpleBlock(e.type);
        case 19:
          return this.consumeFunction(e);
      }
      return e;
    }, A.prototype.consumeSimpleBlock = function(e) {
      for (var t = {
        type: e,
        values: []
      }, r = this.consumeToken(); ; ) {
        if (r.type === 32 || By(r, e)) return t;
        this.reconsumeToken(r), t.values.push(this.consumeComponentValue()), r = this.consumeToken();
      }
    }, A.prototype.consumeFunction = function(e) {
      for (var t = {
        name: e.value,
        values: [],
        type: 18
      }; ; ) {
        var r = this.consumeToken();
        if (r.type === 32 || r.type === 3) return t;
        this.reconsumeToken(r), t.values.push(this.consumeComponentValue());
      }
    }, A.prototype.consumeToken = function() {
      var e = this._tokens.shift();
      return typeof e > "u" ? Pa : e;
    }, A.prototype.reconsumeToken = function(e) {
      this._tokens.unshift(e);
    }, A;
  })(), gn = function(A) {
    return A.type === 15;
  }, mr = function(A) {
    return A.type === 17;
  }, QA = function(A) {
    return A.type === 20;
  }, py = function(A) {
    return A.type === 0;
  }, _a = function(A, e) {
    return QA(A) && A.value === e;
  }, Md = function(A) {
    return A.type !== 31;
  }, fr = function(A) {
    return A.type !== 31 && A.type !== 4;
  }, Xe = function(A) {
    var e = [], t = [];
    return A.forEach(function(r) {
      if (r.type === 4) {
        if (t.length === 0) throw new Error("Error parsing function args, zero tokens for arg");
        e.push(t), t = [];
        return;
      }
      r.type !== 31 && t.push(r);
    }), t.length && e.push(t), e;
  }, By = function(A, e) {
    return e === 11 && A.type === 12 || e === 28 && A.type === 29 ? true : e === 2 && A.type === 3;
  }, vt = function(A) {
    return A.type === 17 || A.type === 15;
  }, WA = function(A) {
    return A.type === 16 || vt(A);
  }, Dd = function(A) {
    return A.length > 1 ? [
      A[0],
      A[1]
    ] : [
      A[0]
    ];
  }, oe = {
    type: 17,
    number: 0,
    flags: fn
  }, Gs = {
    type: 16,
    number: 50,
    flags: fn
  }, ft = {
    type: 16,
    number: 100,
    flags: fn
  }, Or = function(A, e, t) {
    var r = A[0], n = A[1];
    return [
      SA(r, e),
      SA(typeof n < "u" ? n : r, t)
    ];
  }, SA = function(A, e) {
    if (A.type === 16) return A.number / 100 * e;
    if (gn(A)) switch (A.unit) {
      case "rem":
      case "em":
        return 16 * A.number;
      default:
        return A.number;
    }
    return A.number;
  }, Pd = "deg", _d = "grad", Nd = "rad", Gd = "turn", hi = {
    name: "angle",
    parse: function(A, e) {
      if (e.type === 15) switch (e.unit) {
        case Pd:
          return Math.PI * e.number / 180;
        case _d:
          return Math.PI / 200 * e.number;
        case Nd:
          return e.number;
        case Gd:
          return Math.PI * 2 * e.number;
      }
      throw new Error("Unsupported angle type");
    }
  }, Vd = function(A) {
    return A.type === 15 && (A.unit === Pd || A.unit === _d || A.unit === Nd || A.unit === Gd);
  }, $d = function(A) {
    var e = A.filter(QA).map(function(t) {
      return t.value;
    }).join(" ");
    switch (e) {
      case "to bottom right":
      case "to right bottom":
      case "left top":
      case "top left":
        return [
          oe,
          oe
        ];
      case "to top":
      case "bottom":
        return Ue(0);
      case "to bottom left":
      case "to left bottom":
      case "right top":
      case "top right":
        return [
          oe,
          ft
        ];
      case "to right":
      case "left":
        return Ue(90);
      case "to top left":
      case "to left top":
      case "right bottom":
      case "bottom right":
        return [
          ft,
          ft
        ];
      case "to bottom":
      case "top":
        return Ue(180);
      case "to top right":
      case "to right top":
      case "left bottom":
      case "bottom left":
        return [
          ft,
          oe
        ];
      case "to left":
      case "right":
        return Ue(270);
    }
    return 0;
  }, Ue = function(A) {
    return Math.PI * A / 180;
  }, Bt = {
    name: "color",
    parse: function(A, e) {
      if (e.type === 18) {
        var t = hy[e.name];
        if (typeof t > "u") throw new Error('Attempting to parse an unsupported color function "' + e.name + '"');
        return t(A, e.values);
      }
      if (e.type === 5) {
        if (e.value.length === 3) {
          var r = e.value.substring(0, 1), n = e.value.substring(1, 2), o = e.value.substring(2, 3);
          return gt(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(o + o, 16), 1);
        }
        if (e.value.length === 4) {
          var r = e.value.substring(0, 1), n = e.value.substring(1, 2), o = e.value.substring(2, 3), i = e.value.substring(3, 4);
          return gt(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(o + o, 16), parseInt(i + i, 16) / 255);
        }
        if (e.value.length === 6) {
          var r = e.value.substring(0, 2), n = e.value.substring(2, 4), o = e.value.substring(4, 6);
          return gt(parseInt(r, 16), parseInt(n, 16), parseInt(o, 16), 1);
        }
        if (e.value.length === 8) {
          var r = e.value.substring(0, 2), n = e.value.substring(2, 4), o = e.value.substring(4, 6), i = e.value.substring(6, 8);
          return gt(parseInt(r, 16), parseInt(n, 16), parseInt(o, 16), parseInt(i, 16) / 255);
        }
      }
      if (e.type === 20) {
        var a = At[e.value.toUpperCase()];
        if (typeof a < "u") return a;
      }
      return At.TRANSPARENT;
    }
  }, ht = function(A) {
    return (255 & A) === 0;
  }, JA = function(A) {
    var e = 255 & A, t = 255 & A >> 8, r = 255 & A >> 16, n = 255 & A >> 24;
    return e < 255 ? "rgba(" + n + "," + r + "," + t + "," + e / 255 + ")" : "rgb(" + n + "," + r + "," + t + ")";
  }, gt = function(A, e, t, r) {
    return (A << 24 | e << 16 | t << 8 | Math.round(r * 255) << 0) >>> 0;
  }, gc = function(A, e) {
    if (A.type === 17) return A.number;
    if (A.type === 16) {
      var t = e === 3 ? 1 : 255;
      return e === 3 ? A.number / 100 * t : Math.round(A.number / 100 * t);
    }
    return 0;
  }, pc = function(A, e) {
    var t = e.filter(fr);
    if (t.length === 3) {
      var r = t.map(gc), n = r[0], o = r[1], i = r[2];
      return gt(n, o, i, 1);
    }
    if (t.length === 4) {
      var a = t.map(gc), n = a[0], o = a[1], i = a[2], l = a[3];
      return gt(n, o, i, l);
    }
    return 0;
  };
  function Gi(A, e, t) {
    return t < 0 && (t += 1), t >= 1 && (t -= 1), t < 1 / 6 ? (e - A) * t * 6 + A : t < 1 / 2 ? e : t < 2 / 3 ? (e - A) * 6 * (2 / 3 - t) + A : A;
  }
  var Bc = function(A, e) {
    var t = e.filter(fr), r = t[0], n = t[1], o = t[2], i = t[3], a = (r.type === 17 ? Ue(r.number) : hi.parse(A, r)) / (Math.PI * 2), l = WA(n) ? n.number / 100 : 0, s = WA(o) ? o.number / 100 : 0, c = typeof i < "u" && WA(i) ? SA(i, 1) : 1;
    if (l === 0) return gt(s * 255, s * 255, s * 255, 1);
    var d = s <= 0.5 ? s * (l + 1) : s + l - s * l, u = s * 2 - d, f = Gi(u, d, a + 1 / 3), g = Gi(u, d, a), p = Gi(u, d, a - 1 / 3);
    return gt(f * 255, g * 255, p * 255, c);
  }, hy = {
    hsl: Bc,
    hsla: Bc,
    rgb: pc,
    rgba: pc
  }, Vr = function(A, e) {
    return Bt.parse(A, Kd.create(e).parseComponentValue());
  }, At = {
    ALICEBLUE: 4042850303,
    ANTIQUEWHITE: 4209760255,
    AQUA: 16777215,
    AQUAMARINE: 2147472639,
    AZURE: 4043309055,
    BEIGE: 4126530815,
    BISQUE: 4293182719,
    BLACK: 255,
    BLANCHEDALMOND: 4293643775,
    BLUE: 65535,
    BLUEVIOLET: 2318131967,
    BROWN: 2771004159,
    BURLYWOOD: 3736635391,
    CADETBLUE: 1604231423,
    CHARTREUSE: 2147418367,
    CHOCOLATE: 3530104575,
    CORAL: 4286533887,
    CORNFLOWERBLUE: 1687547391,
    CORNSILK: 4294499583,
    CRIMSON: 3692313855,
    CYAN: 16777215,
    DARKBLUE: 35839,
    DARKCYAN: 9145343,
    DARKGOLDENROD: 3095837695,
    DARKGRAY: 2846468607,
    DARKGREEN: 6553855,
    DARKGREY: 2846468607,
    DARKKHAKI: 3182914559,
    DARKMAGENTA: 2332068863,
    DARKOLIVEGREEN: 1433087999,
    DARKORANGE: 4287365375,
    DARKORCHID: 2570243327,
    DARKRED: 2332033279,
    DARKSALMON: 3918953215,
    DARKSEAGREEN: 2411499519,
    DARKSLATEBLUE: 1211993087,
    DARKSLATEGRAY: 793726975,
    DARKSLATEGREY: 793726975,
    DARKTURQUOISE: 13554175,
    DARKVIOLET: 2483082239,
    DEEPPINK: 4279538687,
    DEEPSKYBLUE: 12582911,
    DIMGRAY: 1768516095,
    DIMGREY: 1768516095,
    DODGERBLUE: 512819199,
    FIREBRICK: 2988581631,
    FLORALWHITE: 4294635775,
    FORESTGREEN: 579543807,
    FUCHSIA: 4278255615,
    GAINSBORO: 3705462015,
    GHOSTWHITE: 4177068031,
    GOLD: 4292280575,
    GOLDENROD: 3668254975,
    GRAY: 2155905279,
    GREEN: 8388863,
    GREENYELLOW: 2919182335,
    GREY: 2155905279,
    HONEYDEW: 4043305215,
    HOTPINK: 4285117695,
    INDIANRED: 3445382399,
    INDIGO: 1258324735,
    IVORY: 4294963455,
    KHAKI: 4041641215,
    LAVENDER: 3873897215,
    LAVENDERBLUSH: 4293981695,
    LAWNGREEN: 2096890111,
    LEMONCHIFFON: 4294626815,
    LIGHTBLUE: 2916673279,
    LIGHTCORAL: 4034953471,
    LIGHTCYAN: 3774873599,
    LIGHTGOLDENRODYELLOW: 4210742015,
    LIGHTGRAY: 3553874943,
    LIGHTGREEN: 2431553791,
    LIGHTGREY: 3553874943,
    LIGHTPINK: 4290167295,
    LIGHTSALMON: 4288707327,
    LIGHTSEAGREEN: 548580095,
    LIGHTSKYBLUE: 2278488831,
    LIGHTSLATEGRAY: 2005441023,
    LIGHTSLATEGREY: 2005441023,
    LIGHTSTEELBLUE: 2965692159,
    LIGHTYELLOW: 4294959359,
    LIME: 16711935,
    LIMEGREEN: 852308735,
    LINEN: 4210091775,
    MAGENTA: 4278255615,
    MAROON: 2147483903,
    MEDIUMAQUAMARINE: 1724754687,
    MEDIUMBLUE: 52735,
    MEDIUMORCHID: 3126187007,
    MEDIUMPURPLE: 2473647103,
    MEDIUMSEAGREEN: 1018393087,
    MEDIUMSLATEBLUE: 2070474495,
    MEDIUMSPRINGGREEN: 16423679,
    MEDIUMTURQUOISE: 1221709055,
    MEDIUMVIOLETRED: 3340076543,
    MIDNIGHTBLUE: 421097727,
    MINTCREAM: 4127193855,
    MISTYROSE: 4293190143,
    MOCCASIN: 4293178879,
    NAVAJOWHITE: 4292783615,
    NAVY: 33023,
    OLDLACE: 4260751103,
    OLIVE: 2155872511,
    OLIVEDRAB: 1804477439,
    ORANGE: 4289003775,
    ORANGERED: 4282712319,
    ORCHID: 3664828159,
    PALEGOLDENROD: 4008225535,
    PALEGREEN: 2566625535,
    PALETURQUOISE: 2951671551,
    PALEVIOLETRED: 3681588223,
    PAPAYAWHIP: 4293907967,
    PEACHPUFF: 4292524543,
    PERU: 3448061951,
    PINK: 4290825215,
    PLUM: 3718307327,
    POWDERBLUE: 2967529215,
    PURPLE: 2147516671,
    REBECCAPURPLE: 1714657791,
    RED: 4278190335,
    ROSYBROWN: 3163525119,
    ROYALBLUE: 1097458175,
    SADDLEBROWN: 2336560127,
    SALMON: 4202722047,
    SANDYBROWN: 4104413439,
    SEAGREEN: 780883967,
    SEASHELL: 4294307583,
    SIENNA: 2689740287,
    SILVER: 3233857791,
    SKYBLUE: 2278484991,
    SLATEBLUE: 1784335871,
    SLATEGRAY: 1887473919,
    SLATEGREY: 1887473919,
    SNOW: 4294638335,
    SPRINGGREEN: 16744447,
    STEELBLUE: 1182971135,
    TAN: 3535047935,
    TEAL: 8421631,
    THISTLE: 3636451583,
    TOMATO: 4284696575,
    TRANSPARENT: 0,
    TURQUOISE: 1088475391,
    VIOLET: 4001558271,
    WHEAT: 4125012991,
    WHITE: 4294967295,
    WHITESMOKE: 4126537215,
    YELLOW: 4294902015,
    YELLOWGREEN: 2597139199
  }, my = {
    name: "background-clip",
    initialValue: "border-box",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return e.map(function(t) {
        if (QA(t)) switch (t.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
        return 0;
      });
    }
  }, Cy = {
    name: "background-color",
    initialValue: "transparent",
    prefix: false,
    type: 3,
    format: "color"
  }, mi = function(A, e) {
    var t = Bt.parse(A, e[0]), r = e[1];
    return r && WA(r) ? {
      color: t,
      stop: r
    } : {
      color: t,
      stop: null
    };
  }, hc = function(A, e) {
    var t = A[0], r = A[A.length - 1];
    t.stop === null && (t.stop = oe), r.stop === null && (r.stop = ft);
    for (var n = [], o = 0, i = 0; i < A.length; i++) {
      var a = A[i].stop;
      if (a !== null) {
        var l = SA(a, e);
        l > o ? n.push(l) : n.push(o), o = l;
      } else n.push(null);
    }
    for (var s = null, i = 0; i < n.length; i++) {
      var c = n[i];
      if (c === null) s === null && (s = i);
      else if (s !== null) {
        for (var d = i - s, u = n[s - 1], f = (c - u) / (d + 1), g = 1; g <= d; g++) n[s + g - 1] = f * g;
        s = null;
      }
    }
    return A.map(function(p, Q) {
      var m = p.color;
      return {
        color: m,
        stop: Math.max(Math.min(1, n[Q] / e), 0)
      };
    });
  }, wy = function(A, e, t) {
    var r = e / 2, n = t / 2, o = SA(A[0], e) - r, i = n - SA(A[1], t);
    return (Math.atan2(i, o) + Math.PI * 2) % (Math.PI * 2);
  }, vy = function(A, e, t) {
    var r = typeof A == "number" ? A : wy(A, e, t), n = Math.abs(e * Math.sin(r)) + Math.abs(t * Math.cos(r)), o = e / 2, i = t / 2, a = n / 2, l = Math.sin(r - Math.PI / 2) * a, s = Math.cos(r - Math.PI / 2) * a;
    return [
      n,
      o - s,
      o + s,
      i - l,
      i + l
    ];
  }, He = function(A, e) {
    return Math.sqrt(A * A + e * e);
  }, mc = function(A, e, t, r, n) {
    var o = [
      [
        0,
        0
      ],
      [
        0,
        e
      ],
      [
        A,
        0
      ],
      [
        A,
        e
      ]
    ];
    return o.reduce(function(i, a) {
      var l = a[0], s = a[1], c = He(t - l, r - s);
      return (n ? c < i.optimumDistance : c > i.optimumDistance) ? {
        optimumCorner: a,
        optimumDistance: c
      } : i;
    }, {
      optimumDistance: n ? 1 / 0 : -1 / 0,
      optimumCorner: null
    }).optimumCorner;
  }, yy = function(A, e, t, r, n) {
    var o = 0, i = 0;
    switch (A.size) {
      case 0:
        A.shape === 0 ? o = i = Math.min(Math.abs(e), Math.abs(e - r), Math.abs(t), Math.abs(t - n)) : A.shape === 1 && (o = Math.min(Math.abs(e), Math.abs(e - r)), i = Math.min(Math.abs(t), Math.abs(t - n)));
        break;
      case 2:
        if (A.shape === 0) o = i = Math.min(He(e, t), He(e, t - n), He(e - r, t), He(e - r, t - n));
        else if (A.shape === 1) {
          var a = Math.min(Math.abs(t), Math.abs(t - n)) / Math.min(Math.abs(e), Math.abs(e - r)), l = mc(r, n, e, t, true), s = l[0], c = l[1];
          o = He(s - e, (c - t) / a), i = a * o;
        }
        break;
      case 1:
        A.shape === 0 ? o = i = Math.max(Math.abs(e), Math.abs(e - r), Math.abs(t), Math.abs(t - n)) : A.shape === 1 && (o = Math.max(Math.abs(e), Math.abs(e - r)), i = Math.max(Math.abs(t), Math.abs(t - n)));
        break;
      case 3:
        if (A.shape === 0) o = i = Math.max(He(e, t), He(e, t - n), He(e - r, t), He(e - r, t - n));
        else if (A.shape === 1) {
          var a = Math.max(Math.abs(t), Math.abs(t - n)) / Math.max(Math.abs(e), Math.abs(e - r)), d = mc(r, n, e, t, false), s = d[0], c = d[1];
          o = He(s - e, (c - t) / a), i = a * o;
        }
        break;
    }
    return Array.isArray(A.size) && (o = SA(A.size[0], r), i = A.size.length === 2 ? SA(A.size[1], n) : o), [
      o,
      i
    ];
  }, Qy = function(A, e) {
    var t = Ue(180), r = [];
    return Xe(e).forEach(function(n, o) {
      if (o === 0) {
        var i = n[0];
        if (i.type === 20 && i.value === "to") {
          t = $d(n);
          return;
        } else if (Vd(i)) {
          t = hi.parse(A, i);
          return;
        }
      }
      var a = mi(A, n);
      r.push(a);
    }), {
      angle: t,
      stops: r,
      type: 1
    };
  }, Pn = function(A, e) {
    var t = Ue(180), r = [];
    return Xe(e).forEach(function(n, o) {
      if (o === 0) {
        var i = n[0];
        if (i.type === 20 && [
          "top",
          "left",
          "right",
          "bottom"
        ].indexOf(i.value) !== -1) {
          t = $d(n);
          return;
        } else if (Vd(i)) {
          t = (hi.parse(A, i) + Ue(270)) % Ue(360);
          return;
        }
      }
      var a = mi(A, n);
      r.push(a);
    }), {
      angle: t,
      stops: r,
      type: 1
    };
  }, by = function(A, e) {
    var t = Ue(180), r = [], n = 1, o = 0, i = 3, a = [];
    return Xe(e).forEach(function(l, s) {
      var c = l[0];
      if (s === 0) {
        if (QA(c) && c.value === "linear") {
          n = 1;
          return;
        } else if (QA(c) && c.value === "radial") {
          n = 2;
          return;
        }
      }
      if (c.type === 18) {
        if (c.name === "from") {
          var d = Bt.parse(A, c.values[0]);
          r.push({
            stop: oe,
            color: d
          });
        } else if (c.name === "to") {
          var d = Bt.parse(A, c.values[0]);
          r.push({
            stop: ft,
            color: d
          });
        } else if (c.name === "color-stop") {
          var u = c.values.filter(fr);
          if (u.length === 2) {
            var d = Bt.parse(A, u[1]), f = u[0];
            mr(f) && r.push({
              stop: {
                type: 16,
                number: f.number * 100,
                flags: f.flags
              },
              color: d
            });
          }
        }
      }
    }), n === 1 ? {
      angle: (t + Ue(180)) % Ue(360),
      stops: r,
      type: n
    } : {
      size: i,
      shape: o,
      stops: r,
      position: a,
      type: n
    };
  }, Wd = "closest-side", zd = "farthest-side", Xd = "closest-corner", jd = "farthest-corner", Jd = "circle", Yd = "ellipse", Zd = "cover", qd = "contain", Fy = function(A, e) {
    var t = 0, r = 3, n = [], o = [];
    return Xe(e).forEach(function(i, a) {
      var l = true;
      if (a === 0) {
        var s = false;
        l = i.reduce(function(d, u) {
          if (s) if (QA(u)) switch (u.value) {
            case "center":
              return o.push(Gs), d;
            case "top":
            case "left":
              return o.push(oe), d;
            case "right":
            case "bottom":
              return o.push(ft), d;
          }
          else (WA(u) || vt(u)) && o.push(u);
          else if (QA(u)) switch (u.value) {
            case Jd:
              return t = 0, false;
            case Yd:
              return t = 1, false;
            case "at":
              return s = true, false;
            case Wd:
              return r = 0, false;
            case Zd:
            case zd:
              return r = 1, false;
            case qd:
            case Xd:
              return r = 2, false;
            case jd:
              return r = 3, false;
          }
          else if (vt(u) || WA(u)) return Array.isArray(r) || (r = []), r.push(u), false;
          return d;
        }, l);
      }
      if (l) {
        var c = mi(A, i);
        n.push(c);
      }
    }), {
      size: r,
      shape: t,
      stops: n,
      position: o,
      type: 2
    };
  }, _n = function(A, e) {
    var t = 0, r = 3, n = [], o = [];
    return Xe(e).forEach(function(i, a) {
      var l = true;
      if (a === 0 ? l = i.reduce(function(c, d) {
        if (QA(d)) switch (d.value) {
          case "center":
            return o.push(Gs), false;
          case "top":
          case "left":
            return o.push(oe), false;
          case "right":
          case "bottom":
            return o.push(ft), false;
        }
        else if (WA(d) || vt(d)) return o.push(d), false;
        return c;
      }, l) : a === 1 && (l = i.reduce(function(c, d) {
        if (QA(d)) switch (d.value) {
          case Jd:
            return t = 0, false;
          case Yd:
            return t = 1, false;
          case qd:
          case Wd:
            return r = 0, false;
          case zd:
            return r = 1, false;
          case Xd:
            return r = 2, false;
          case Zd:
          case jd:
            return r = 3, false;
        }
        else if (vt(d) || WA(d)) return Array.isArray(r) || (r = []), r.push(d), false;
        return c;
      }, l)), l) {
        var s = mi(A, i);
        n.push(s);
      }
    }), {
      size: r,
      shape: t,
      stops: n,
      position: o,
      type: 2
    };
  }, Uy = function(A) {
    return A.type === 1;
  }, Ey = function(A) {
    return A.type === 2;
  }, Vs = {
    name: "image",
    parse: function(A, e) {
      if (e.type === 22) {
        var t = {
          url: e.value,
          type: 0
        };
        return A.cache.addImage(e.value), t;
      }
      if (e.type === 18) {
        var r = Af[e.name];
        if (typeof r > "u") throw new Error('Attempting to parse an unsupported image function "' + e.name + '"');
        return r(A, e.values);
      }
      throw new Error("Unsupported image type " + e.type);
    }
  };
  function Sy(A) {
    return !(A.type === 20 && A.value === "none") && (A.type !== 18 || !!Af[A.name]);
  }
  var Af = {
    "linear-gradient": Qy,
    "-moz-linear-gradient": Pn,
    "-ms-linear-gradient": Pn,
    "-o-linear-gradient": Pn,
    "-webkit-linear-gradient": Pn,
    "radial-gradient": Fy,
    "-moz-radial-gradient": _n,
    "-ms-radial-gradient": _n,
    "-o-radial-gradient": _n,
    "-webkit-radial-gradient": _n,
    "-webkit-gradient": by
  }, xy = {
    name: "background-image",
    initialValue: "none",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      if (e.length === 0) return [];
      var t = e[0];
      return t.type === 20 && t.value === "none" ? [] : e.filter(function(r) {
        return fr(r) && Sy(r);
      }).map(function(r) {
        return Vs.parse(A, r);
      });
    }
  }, Iy = {
    name: "background-origin",
    initialValue: "border-box",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return e.map(function(t) {
        if (QA(t)) switch (t.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
        return 0;
      });
    }
  }, Hy = {
    name: "background-position",
    initialValue: "0% 0%",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      return Xe(e).map(function(t) {
        return t.filter(WA);
      }).map(Dd);
    }
  }, Ty = {
    name: "background-repeat",
    initialValue: "repeat",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return Xe(e).map(function(t) {
        return t.filter(QA).map(function(r) {
          return r.value;
        }).join(" ");
      }).map(Ly);
    }
  }, Ly = function(A) {
    switch (A) {
      case "no-repeat":
        return 1;
      case "repeat-x":
      case "repeat no-repeat":
        return 2;
      case "repeat-y":
      case "no-repeat repeat":
        return 3;
      default:
        return 0;
    }
  }, ar;
  (function(A) {
    A.AUTO = "auto", A.CONTAIN = "contain", A.COVER = "cover";
  })(ar || (ar = {}));
  var ky = {
    name: "background-size",
    initialValue: "0",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return Xe(e).map(function(t) {
        return t.filter(Ry);
      });
    }
  }, Ry = function(A) {
    return QA(A) || WA(A);
  }, Ci = function(A) {
    return {
      name: "border-" + A + "-color",
      initialValue: "transparent",
      prefix: false,
      type: 3,
      format: "color"
    };
  }, Oy = Ci("top"), Ky = Ci("right"), My = Ci("bottom"), Dy = Ci("left"), wi = function(A) {
    return {
      name: "border-radius-" + A,
      initialValue: "0 0",
      prefix: false,
      type: 1,
      parse: function(e, t) {
        return Dd(t.filter(WA));
      }
    };
  }, Py = wi("top-left"), _y = wi("top-right"), Ny = wi("bottom-right"), Gy = wi("bottom-left"), vi = function(A) {
    return {
      name: "border-" + A + "-style",
      initialValue: "solid",
      prefix: false,
      type: 2,
      parse: function(e, t) {
        switch (t) {
          case "none":
            return 0;
          case "dashed":
            return 2;
          case "dotted":
            return 3;
          case "double":
            return 4;
        }
        return 1;
      }
    };
  }, Vy = vi("top"), $y = vi("right"), Wy = vi("bottom"), zy = vi("left"), yi = function(A) {
    return {
      name: "border-" + A + "-width",
      initialValue: "0",
      type: 0,
      prefix: false,
      parse: function(e, t) {
        return gn(t) ? t.number : 0;
      }
    };
  }, Xy = yi("top"), jy = yi("right"), Jy = yi("bottom"), Yy = yi("left"), Zy = {
    name: "color",
    initialValue: "transparent",
    prefix: false,
    type: 3,
    format: "color"
  }, qy = {
    name: "direction",
    initialValue: "ltr",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      return e === "rtl" ? 1 : 0;
    }
  }, AQ = {
    name: "display",
    initialValue: "inline-block",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return e.filter(QA).reduce(function(t, r) {
        return t | eQ(r.value);
      }, 0);
    }
  }, eQ = function(A) {
    switch (A) {
      case "block":
      case "-webkit-box":
        return 2;
      case "inline":
        return 4;
      case "run-in":
        return 8;
      case "flow":
        return 16;
      case "flow-root":
        return 32;
      case "table":
        return 64;
      case "flex":
      case "-webkit-flex":
        return 128;
      case "grid":
      case "-ms-grid":
        return 256;
      case "ruby":
        return 512;
      case "subgrid":
        return 1024;
      case "list-item":
        return 2048;
      case "table-row-group":
        return 4096;
      case "table-header-group":
        return 8192;
      case "table-footer-group":
        return 16384;
      case "table-row":
        return 32768;
      case "table-cell":
        return 65536;
      case "table-column-group":
        return 131072;
      case "table-column":
        return 262144;
      case "table-caption":
        return 524288;
      case "ruby-base":
        return 1048576;
      case "ruby-text":
        return 2097152;
      case "ruby-base-container":
        return 4194304;
      case "ruby-text-container":
        return 8388608;
      case "contents":
        return 16777216;
      case "inline-block":
        return 33554432;
      case "inline-list-item":
        return 67108864;
      case "inline-table":
        return 134217728;
      case "inline-flex":
        return 268435456;
      case "inline-grid":
        return 536870912;
    }
    return 0;
  }, tQ = {
    name: "float",
    initialValue: "none",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      switch (e) {
        case "left":
          return 1;
        case "right":
          return 2;
        case "inline-start":
          return 3;
        case "inline-end":
          return 4;
      }
      return 0;
    }
  }, rQ = {
    name: "letter-spacing",
    initialValue: "0",
    prefix: false,
    type: 0,
    parse: function(A, e) {
      return e.type === 20 && e.value === "normal" ? 0 : e.type === 17 || e.type === 15 ? e.number : 0;
    }
  }, vo;
  (function(A) {
    A.NORMAL = "normal", A.STRICT = "strict";
  })(vo || (vo = {}));
  var nQ = {
    name: "line-break",
    initialValue: "normal",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      return e === "strict" ? vo.STRICT : vo.NORMAL;
    }
  }, oQ = {
    name: "line-height",
    initialValue: "normal",
    prefix: false,
    type: 4
  }, Cc = function(A, e) {
    return QA(A) && A.value === "normal" ? 1.2 * e : A.type === 17 ? e * A.number : WA(A) ? SA(A, e) : e;
  }, iQ = {
    name: "list-style-image",
    initialValue: "none",
    type: 0,
    prefix: false,
    parse: function(A, e) {
      return e.type === 20 && e.value === "none" ? null : Vs.parse(A, e);
    }
  }, aQ = {
    name: "list-style-position",
    initialValue: "outside",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      return e === "inside" ? 0 : 1;
    }
  }, Na = {
    name: "list-style-type",
    initialValue: "none",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      switch (e) {
        case "disc":
          return 0;
        case "circle":
          return 1;
        case "square":
          return 2;
        case "decimal":
          return 3;
        case "cjk-decimal":
          return 4;
        case "decimal-leading-zero":
          return 5;
        case "lower-roman":
          return 6;
        case "upper-roman":
          return 7;
        case "lower-greek":
          return 8;
        case "lower-alpha":
          return 9;
        case "upper-alpha":
          return 10;
        case "arabic-indic":
          return 11;
        case "armenian":
          return 12;
        case "bengali":
          return 13;
        case "cambodian":
          return 14;
        case "cjk-earthly-branch":
          return 15;
        case "cjk-heavenly-stem":
          return 16;
        case "cjk-ideographic":
          return 17;
        case "devanagari":
          return 18;
        case "ethiopic-numeric":
          return 19;
        case "georgian":
          return 20;
        case "gujarati":
          return 21;
        case "gurmukhi":
          return 22;
        case "hebrew":
          return 22;
        case "hiragana":
          return 23;
        case "hiragana-iroha":
          return 24;
        case "japanese-formal":
          return 25;
        case "japanese-informal":
          return 26;
        case "kannada":
          return 27;
        case "katakana":
          return 28;
        case "katakana-iroha":
          return 29;
        case "khmer":
          return 30;
        case "korean-hangul-formal":
          return 31;
        case "korean-hanja-formal":
          return 32;
        case "korean-hanja-informal":
          return 33;
        case "lao":
          return 34;
        case "lower-armenian":
          return 35;
        case "malayalam":
          return 36;
        case "mongolian":
          return 37;
        case "myanmar":
          return 38;
        case "oriya":
          return 39;
        case "persian":
          return 40;
        case "simp-chinese-formal":
          return 41;
        case "simp-chinese-informal":
          return 42;
        case "tamil":
          return 43;
        case "telugu":
          return 44;
        case "thai":
          return 45;
        case "tibetan":
          return 46;
        case "trad-chinese-formal":
          return 47;
        case "trad-chinese-informal":
          return 48;
        case "upper-armenian":
          return 49;
        case "disclosure-open":
          return 50;
        case "disclosure-closed":
          return 51;
        default:
          return -1;
      }
    }
  }, Qi = function(A) {
    return {
      name: "margin-" + A,
      initialValue: "0",
      prefix: false,
      type: 4
    };
  }, sQ = Qi("top"), lQ = Qi("right"), cQ = Qi("bottom"), uQ = Qi("left"), dQ = {
    name: "overflow",
    initialValue: "visible",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return e.filter(QA).map(function(t) {
        switch (t.value) {
          case "hidden":
            return 1;
          case "scroll":
            return 2;
          case "clip":
            return 3;
          case "auto":
            return 4;
          default:
            return 0;
        }
      });
    }
  }, fQ = {
    name: "overflow-wrap",
    initialValue: "normal",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      return e === "break-word" ? "break-word" : "normal";
    }
  }, bi = function(A) {
    return {
      name: "padding-" + A,
      initialValue: "0",
      prefix: false,
      type: 3,
      format: "length-percentage"
    };
  }, gQ = bi("top"), pQ = bi("right"), BQ = bi("bottom"), hQ = bi("left"), mQ = {
    name: "text-align",
    initialValue: "left",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      switch (e) {
        case "right":
          return 2;
        case "center":
        case "justify":
          return 1;
        default:
          return 0;
      }
    }
  }, CQ = {
    name: "position",
    initialValue: "static",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      switch (e) {
        case "relative":
          return 1;
        case "absolute":
          return 2;
        case "fixed":
          return 3;
        case "sticky":
          return 4;
      }
      return 0;
    }
  }, wQ = {
    name: "text-shadow",
    initialValue: "none",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      return e.length === 1 && _a(e[0], "none") ? [] : Xe(e).map(function(t) {
        for (var r = {
          color: At.TRANSPARENT,
          offsetX: oe,
          offsetY: oe,
          blur: oe
        }, n = 0, o = 0; o < t.length; o++) {
          var i = t[o];
          vt(i) ? (n === 0 ? r.offsetX = i : n === 1 ? r.offsetY = i : r.blur = i, n++) : r.color = Bt.parse(A, i);
        }
        return r;
      });
    }
  }, vQ = {
    name: "text-transform",
    initialValue: "none",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      switch (e) {
        case "uppercase":
          return 2;
        case "lowercase":
          return 1;
        case "capitalize":
          return 3;
      }
      return 0;
    }
  }, yQ = {
    name: "transform",
    initialValue: "none",
    prefix: true,
    type: 0,
    parse: function(A, e) {
      if (e.type === 20 && e.value === "none") return null;
      if (e.type === 18) {
        var t = FQ[e.name];
        if (typeof t > "u") throw new Error('Attempting to parse an unsupported transform function "' + e.name + '"');
        return t(e.values);
      }
      return null;
    }
  }, QQ = function(A) {
    var e = A.filter(function(t) {
      return t.type === 17;
    }).map(function(t) {
      return t.number;
    });
    return e.length === 6 ? e : null;
  }, bQ = function(A) {
    var e = A.filter(function(l) {
      return l.type === 17;
    }).map(function(l) {
      return l.number;
    }), t = e[0], r = e[1];
    e[2], e[3];
    var n = e[4], o = e[5];
    e[6], e[7], e[8], e[9], e[10], e[11];
    var i = e[12], a = e[13];
    return e[14], e[15], e.length === 16 ? [
      t,
      r,
      n,
      o,
      i,
      a
    ] : null;
  }, FQ = {
    matrix: QQ,
    matrix3d: bQ
  }, wc = {
    type: 16,
    number: 50,
    flags: fn
  }, UQ = [
    wc,
    wc
  ], EQ = {
    name: "transform-origin",
    initialValue: "50% 50%",
    prefix: true,
    type: 1,
    parse: function(A, e) {
      var t = e.filter(WA);
      return t.length !== 2 ? UQ : [
        t[0],
        t[1]
      ];
    }
  }, SQ = {
    name: "visible",
    initialValue: "none",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      switch (e) {
        case "hidden":
          return 1;
        case "collapse":
          return 2;
        default:
          return 0;
      }
    }
  }, $r;
  (function(A) {
    A.NORMAL = "normal", A.BREAK_ALL = "break-all", A.KEEP_ALL = "keep-all";
  })($r || ($r = {}));
  var xQ = {
    name: "word-break",
    initialValue: "normal",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      switch (e) {
        case "break-all":
          return $r.BREAK_ALL;
        case "keep-all":
          return $r.KEEP_ALL;
        default:
          return $r.NORMAL;
      }
    }
  }, IQ = {
    name: "z-index",
    initialValue: "auto",
    prefix: false,
    type: 0,
    parse: function(A, e) {
      if (e.type === 20) return {
        auto: true,
        order: 0
      };
      if (mr(e)) return {
        auto: false,
        order: e.number
      };
      throw new Error("Invalid z-index number parsed");
    }
  }, ef = {
    name: "time",
    parse: function(A, e) {
      if (e.type === 15) switch (e.unit.toLowerCase()) {
        case "s":
          return 1e3 * e.number;
        case "ms":
          return e.number;
      }
      throw new Error("Unsupported time type");
    }
  }, HQ = {
    name: "opacity",
    initialValue: "1",
    type: 0,
    prefix: false,
    parse: function(A, e) {
      return mr(e) ? e.number : 1;
    }
  }, TQ = {
    name: "text-decoration-color",
    initialValue: "transparent",
    prefix: false,
    type: 3,
    format: "color"
  }, LQ = {
    name: "text-decoration-line",
    initialValue: "none",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return e.filter(QA).map(function(t) {
        switch (t.value) {
          case "underline":
            return 1;
          case "overline":
            return 2;
          case "line-through":
            return 3;
          case "none":
            return 4;
        }
        return 0;
      }).filter(function(t) {
        return t !== 0;
      });
    }
  }, kQ = {
    name: "font-family",
    initialValue: "",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      var t = [], r = [];
      return e.forEach(function(n) {
        switch (n.type) {
          case 20:
          case 0:
            t.push(n.value);
            break;
          case 17:
            t.push(n.number.toString());
            break;
          case 4:
            r.push(t.join(" ")), t.length = 0;
            break;
        }
      }), t.length && r.push(t.join(" ")), r.map(function(n) {
        return n.indexOf(" ") === -1 ? n : "'" + n + "'";
      });
    }
  }, RQ = {
    name: "font-size",
    initialValue: "0",
    prefix: false,
    type: 3,
    format: "length"
  }, OQ = {
    name: "font-weight",
    initialValue: "normal",
    type: 0,
    prefix: false,
    parse: function(A, e) {
      return mr(e) ? e.number : QA(e) && e.value === "bold" ? 700 : 400;
    }
  }, KQ = {
    name: "font-variant",
    initialValue: "none",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      return e.filter(QA).map(function(t) {
        return t.value;
      });
    }
  }, MQ = {
    name: "font-style",
    initialValue: "normal",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      switch (e) {
        case "oblique":
          return "oblique";
        case "italic":
          return "italic";
        default:
          return "normal";
      }
    }
  }, XA = function(A, e) {
    return (A & e) !== 0;
  }, DQ = {
    name: "content",
    initialValue: "none",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      if (e.length === 0) return [];
      var t = e[0];
      return t.type === 20 && t.value === "none" ? [] : e;
    }
  }, PQ = {
    name: "counter-increment",
    initialValue: "none",
    prefix: true,
    type: 1,
    parse: function(A, e) {
      if (e.length === 0) return null;
      var t = e[0];
      if (t.type === 20 && t.value === "none") return null;
      for (var r = [], n = e.filter(Md), o = 0; o < n.length; o++) {
        var i = n[o], a = n[o + 1];
        if (i.type === 20) {
          var l = a && mr(a) ? a.number : 1;
          r.push({
            counter: i.value,
            increment: l
          });
        }
      }
      return r;
    }
  }, _Q = {
    name: "counter-reset",
    initialValue: "none",
    prefix: true,
    type: 1,
    parse: function(A, e) {
      if (e.length === 0) return [];
      for (var t = [], r = e.filter(Md), n = 0; n < r.length; n++) {
        var o = r[n], i = r[n + 1];
        if (QA(o) && o.value !== "none") {
          var a = i && mr(i) ? i.number : 0;
          t.push({
            counter: o.value,
            reset: a
          });
        }
      }
      return t;
    }
  }, NQ = {
    name: "duration",
    initialValue: "0s",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return e.filter(gn).map(function(t) {
        return ef.parse(A, t);
      });
    }
  }, GQ = {
    name: "quotes",
    initialValue: "none",
    prefix: true,
    type: 1,
    parse: function(A, e) {
      if (e.length === 0) return null;
      var t = e[0];
      if (t.type === 20 && t.value === "none") return null;
      var r = [], n = e.filter(py);
      if (n.length % 2 !== 0) return null;
      for (var o = 0; o < n.length; o += 2) {
        var i = n[o].value, a = n[o + 1].value;
        r.push({
          open: i,
          close: a
        });
      }
      return r;
    }
  }, vc = function(A, e, t) {
    if (!A) return "";
    var r = A[Math.min(e, A.length - 1)];
    return r ? t ? r.open : r.close : "";
  }, VQ = {
    name: "box-shadow",
    initialValue: "none",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      return e.length === 1 && _a(e[0], "none") ? [] : Xe(e).map(function(t) {
        for (var r = {
          color: 255,
          offsetX: oe,
          offsetY: oe,
          blur: oe,
          spread: oe,
          inset: false
        }, n = 0, o = 0; o < t.length; o++) {
          var i = t[o];
          _a(i, "inset") ? r.inset = true : vt(i) ? (n === 0 ? r.offsetX = i : n === 1 ? r.offsetY = i : n === 2 ? r.blur = i : r.spread = i, n++) : r.color = Bt.parse(A, i);
        }
        return r;
      });
    }
  }, $Q = {
    name: "paint-order",
    initialValue: "normal",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      var t = [
        0,
        1,
        2
      ], r = [];
      return e.filter(QA).forEach(function(n) {
        switch (n.value) {
          case "stroke":
            r.push(1);
            break;
          case "fill":
            r.push(0);
            break;
          case "markers":
            r.push(2);
            break;
        }
      }), t.forEach(function(n) {
        r.indexOf(n) === -1 && r.push(n);
      }), r;
    }
  }, WQ = {
    name: "-webkit-text-stroke-color",
    initialValue: "currentcolor",
    prefix: false,
    type: 3,
    format: "color"
  }, zQ = {
    name: "-webkit-text-stroke-width",
    initialValue: "0",
    type: 0,
    prefix: false,
    parse: function(A, e) {
      return gn(e) ? e.number : 0;
    }
  }, XQ = (function() {
    function A(e, t) {
      var r, n;
      this.animationDuration = q(e, NQ, t.animationDuration), this.backgroundClip = q(e, my, t.backgroundClip), this.backgroundColor = q(e, Cy, t.backgroundColor), this.backgroundImage = q(e, xy, t.backgroundImage), this.backgroundOrigin = q(e, Iy, t.backgroundOrigin), this.backgroundPosition = q(e, Hy, t.backgroundPosition), this.backgroundRepeat = q(e, Ty, t.backgroundRepeat), this.backgroundSize = q(e, ky, t.backgroundSize), this.borderTopColor = q(e, Oy, t.borderTopColor), this.borderRightColor = q(e, Ky, t.borderRightColor), this.borderBottomColor = q(e, My, t.borderBottomColor), this.borderLeftColor = q(e, Dy, t.borderLeftColor), this.borderTopLeftRadius = q(e, Py, t.borderTopLeftRadius), this.borderTopRightRadius = q(e, _y, t.borderTopRightRadius), this.borderBottomRightRadius = q(e, Ny, t.borderBottomRightRadius), this.borderBottomLeftRadius = q(e, Gy, t.borderBottomLeftRadius), this.borderTopStyle = q(e, Vy, t.borderTopStyle), this.borderRightStyle = q(e, $y, t.borderRightStyle), this.borderBottomStyle = q(e, Wy, t.borderBottomStyle), this.borderLeftStyle = q(e, zy, t.borderLeftStyle), this.borderTopWidth = q(e, Xy, t.borderTopWidth), this.borderRightWidth = q(e, jy, t.borderRightWidth), this.borderBottomWidth = q(e, Jy, t.borderBottomWidth), this.borderLeftWidth = q(e, Yy, t.borderLeftWidth), this.boxShadow = q(e, VQ, t.boxShadow), this.color = q(e, Zy, t.color), this.direction = q(e, qy, t.direction), this.display = q(e, AQ, t.display), this.float = q(e, tQ, t.cssFloat), this.fontFamily = q(e, kQ, t.fontFamily), this.fontSize = q(e, RQ, t.fontSize), this.fontStyle = q(e, MQ, t.fontStyle), this.fontVariant = q(e, KQ, t.fontVariant), this.fontWeight = q(e, OQ, t.fontWeight), this.letterSpacing = q(e, rQ, t.letterSpacing), this.lineBreak = q(e, nQ, t.lineBreak), this.lineHeight = q(e, oQ, t.lineHeight), this.listStyleImage = q(e, iQ, t.listStyleImage), this.listStylePosition = q(e, aQ, t.listStylePosition), this.listStyleType = q(e, Na, t.listStyleType), this.marginTop = q(e, sQ, t.marginTop), this.marginRight = q(e, lQ, t.marginRight), this.marginBottom = q(e, cQ, t.marginBottom), this.marginLeft = q(e, uQ, t.marginLeft), this.opacity = q(e, HQ, t.opacity);
      var o = q(e, dQ, t.overflow);
      this.overflowX = o[0], this.overflowY = o[o.length > 1 ? 1 : 0], this.overflowWrap = q(e, fQ, t.overflowWrap), this.paddingTop = q(e, gQ, t.paddingTop), this.paddingRight = q(e, pQ, t.paddingRight), this.paddingBottom = q(e, BQ, t.paddingBottom), this.paddingLeft = q(e, hQ, t.paddingLeft), this.paintOrder = q(e, $Q, t.paintOrder), this.position = q(e, CQ, t.position), this.textAlign = q(e, mQ, t.textAlign), this.textDecorationColor = q(e, TQ, (r = t.textDecorationColor) !== null && r !== void 0 ? r : t.color), this.textDecorationLine = q(e, LQ, (n = t.textDecorationLine) !== null && n !== void 0 ? n : t.textDecoration), this.textShadow = q(e, wQ, t.textShadow), this.textTransform = q(e, vQ, t.textTransform), this.transform = q(e, yQ, t.transform), this.transformOrigin = q(e, EQ, t.transformOrigin), this.visibility = q(e, SQ, t.visibility), this.webkitTextStrokeColor = q(e, WQ, t.webkitTextStrokeColor), this.webkitTextStrokeWidth = q(e, zQ, t.webkitTextStrokeWidth), this.wordBreak = q(e, xQ, t.wordBreak), this.zIndex = q(e, IQ, t.zIndex);
    }
    return A.prototype.isVisible = function() {
      return this.display > 0 && this.opacity > 0 && this.visibility === 0;
    }, A.prototype.isTransparent = function() {
      return ht(this.backgroundColor);
    }, A.prototype.isTransformed = function() {
      return this.transform !== null;
    }, A.prototype.isPositioned = function() {
      return this.position !== 0;
    }, A.prototype.isPositionedWithZIndex = function() {
      return this.isPositioned() && !this.zIndex.auto;
    }, A.prototype.isFloating = function() {
      return this.float !== 0;
    }, A.prototype.isInlineLevel = function() {
      return XA(this.display, 4) || XA(this.display, 33554432) || XA(this.display, 268435456) || XA(this.display, 536870912) || XA(this.display, 67108864) || XA(this.display, 134217728);
    }, A;
  })(), jQ = /* @__PURE__ */ (function() {
    function A(e, t) {
      this.content = q(e, DQ, t.content), this.quotes = q(e, GQ, t.quotes);
    }
    return A;
  })(), yc = /* @__PURE__ */ (function() {
    function A(e, t) {
      this.counterIncrement = q(e, PQ, t.counterIncrement), this.counterReset = q(e, _Q, t.counterReset);
    }
    return A;
  })(), q = function(A, e, t) {
    var r = new Od(), n = t !== null && typeof t < "u" ? t.toString() : e.initialValue;
    r.write(n);
    var o = new Kd(r.read());
    switch (e.type) {
      case 2:
        var i = o.parseComponentValue();
        return e.parse(A, QA(i) ? i.value : e.initialValue);
      case 0:
        return e.parse(A, o.parseComponentValue());
      case 1:
        return e.parse(A, o.parseComponentValues());
      case 4:
        return o.parseComponentValue();
      case 3:
        switch (e.format) {
          case "angle":
            return hi.parse(A, o.parseComponentValue());
          case "color":
            return Bt.parse(A, o.parseComponentValue());
          case "image":
            return Vs.parse(A, o.parseComponentValue());
          case "length":
            var a = o.parseComponentValue();
            return vt(a) ? a : oe;
          case "length-percentage":
            var l = o.parseComponentValue();
            return WA(l) ? l : oe;
          case "time":
            return ef.parse(A, o.parseComponentValue());
        }
        break;
    }
  }, JQ = "data-html2canvas-debug", YQ = function(A) {
    var e = A.getAttribute(JQ);
    switch (e) {
      case "all":
        return 1;
      case "clone":
        return 2;
      case "parse":
        return 3;
      case "render":
        return 4;
      default:
        return 0;
    }
  }, Ga = function(A, e) {
    var t = YQ(A);
    return t === 1 || e === t;
  }, je = /* @__PURE__ */ (function() {
    function A(e, t) {
      if (this.context = e, this.textNodes = [], this.elements = [], this.flags = 0, Ga(t, 3)) debugger;
      this.styles = new XQ(e, window.getComputedStyle(t, null)), Wa(t) && (this.styles.animationDuration.some(function(r) {
        return r > 0;
      }) && (t.style.animationDuration = "0s"), this.styles.transform !== null && (t.style.transform = "none")), this.bounds = pi(this.context, t), Ga(t, 4) && (this.flags |= 16);
    }
    return A;
  })(), ZQ = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", Qc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Kr = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (var Nn = 0; Nn < Qc.length; Nn++) Kr[Qc.charCodeAt(Nn)] = Nn;
  var qQ = function(A) {
    var e = A.length * 0.75, t = A.length, r, n = 0, o, i, a, l;
    A[A.length - 1] === "=" && (e--, A[A.length - 2] === "=" && e--);
    var s = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(e) : new Array(e), c = Array.isArray(s) ? s : new Uint8Array(s);
    for (r = 0; r < t; r += 4) o = Kr[A.charCodeAt(r)], i = Kr[A.charCodeAt(r + 1)], a = Kr[A.charCodeAt(r + 2)], l = Kr[A.charCodeAt(r + 3)], c[n++] = o << 2 | i >> 4, c[n++] = (i & 15) << 4 | a >> 2, c[n++] = (a & 3) << 6 | l & 63;
    return s;
  }, Ab = function(A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 2) t.push(A[r + 1] << 8 | A[r]);
    return t;
  }, eb = function(A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 4) t.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]);
    return t;
  }, Ot = 5, $s = 11, Vi = 2, tb = $s - Ot, tf = 65536 >> Ot, rb = 1 << Ot, $i = rb - 1, nb = 1024 >> Ot, ob = tf + nb, ib = ob, ab = 32, sb = ib + ab, lb = 65536 >> $s, cb = 1 << tb, ub = cb - 1, bc = function(A, e, t) {
    return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t));
  }, db = function(A, e, t) {
    return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t));
  }, fb = function(A, e) {
    var t = qQ(A), r = Array.isArray(t) ? eb(t) : new Uint32Array(t), n = Array.isArray(t) ? Ab(t) : new Uint16Array(t), o = 24, i = bc(n, o / 2, r[4] / 2), a = r[5] === 2 ? bc(n, (o + r[4]) / 2) : db(r, Math.ceil((o + r[4]) / 4));
    return new gb(r[0], r[1], r[2], r[3], i, a);
  }, gb = (function() {
    function A(e, t, r, n, o, i) {
      this.initialValue = e, this.errorValue = t, this.highStart = r, this.highValueIndex = n, this.index = o, this.data = i;
    }
    return A.prototype.get = function(e) {
      var t;
      if (e >= 0) {
        if (e < 55296 || e > 56319 && e <= 65535) return t = this.index[e >> Ot], t = (t << Vi) + (e & $i), this.data[t];
        if (e <= 65535) return t = this.index[tf + (e - 55296 >> Ot)], t = (t << Vi) + (e & $i), this.data[t];
        if (e < this.highStart) return t = sb - lb + (e >> $s), t = this.index[t], t += e >> Ot & ub, t = this.index[t], t = (t << Vi) + (e & $i), this.data[t];
        if (e <= 1114111) return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, A;
  })(), Fc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", pb = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (var Gn = 0; Gn < Fc.length; Gn++) pb[Fc.charCodeAt(Gn)] = Gn;
  var Bb = 1, Wi = 2, zi = 3, Uc = 4, Ec = 5, hb = 7, Sc = 8, Xi = 9, ji = 10, xc = 11, Ic = 12, Hc = 13, Tc = 14, Ji = 15, mb = function(A) {
    for (var e = [], t = 0, r = A.length; t < r; ) {
      var n = A.charCodeAt(t++);
      if (n >= 55296 && n <= 56319 && t < r) {
        var o = A.charCodeAt(t++);
        (o & 64512) === 56320 ? e.push(((n & 1023) << 10) + (o & 1023) + 65536) : (e.push(n), t--);
      } else e.push(n);
    }
    return e;
  }, Cb = function() {
    for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
    if (String.fromCodePoint) return String.fromCodePoint.apply(String, A);
    var t = A.length;
    if (!t) return "";
    for (var r = [], n = -1, o = ""; ++n < t; ) {
      var i = A[n];
      i <= 65535 ? r.push(i) : (i -= 65536, r.push((i >> 10) + 55296, i % 1024 + 56320)), (n + 1 === t || r.length > 16384) && (o += String.fromCharCode.apply(String, r), r.length = 0);
    }
    return o;
  }, wb = fb(ZQ), ye = "\xD7", Yi = "\xF7", vb = function(A) {
    return wb.get(A);
  }, yb = function(A, e, t) {
    var r = t - 2, n = e[r], o = e[t - 1], i = e[t];
    if (o === Wi && i === zi) return ye;
    if (o === Wi || o === zi || o === Uc || i === Wi || i === zi || i === Uc) return Yi;
    if (o === Sc && [
      Sc,
      Xi,
      xc,
      Ic
    ].indexOf(i) !== -1 || (o === xc || o === Xi) && (i === Xi || i === ji) || (o === Ic || o === ji) && i === ji || i === Hc || i === Ec || i === hb || o === Bb) return ye;
    if (o === Hc && i === Tc) {
      for (; n === Ec; ) n = e[--r];
      if (n === Tc) return ye;
    }
    if (o === Ji && i === Ji) {
      for (var a = 0; n === Ji; ) a++, n = e[--r];
      if (a % 2 === 0) return ye;
    }
    return Yi;
  }, Qb = function(A) {
    var e = mb(A), t = e.length, r = 0, n = 0, o = e.map(vb);
    return {
      next: function() {
        if (r >= t) return {
          done: true,
          value: null
        };
        for (var i = ye; r < t && (i = yb(e, o, ++r)) === ye; ) ;
        if (i !== ye || r === t) {
          var a = Cb.apply(null, e.slice(n, r));
          return n = r, {
            value: a,
            done: false
          };
        }
        return {
          done: true,
          value: null
        };
      }
    };
  }, bb = function(A) {
    for (var e = Qb(A), t = [], r; !(r = e.next()).done; ) r.value && t.push(r.value.slice());
    return t;
  }, Fb = function(A) {
    var e = 123;
    if (A.createRange) {
      var t = A.createRange();
      if (t.getBoundingClientRect) {
        var r = A.createElement("boundtest");
        r.style.height = e + "px", r.style.display = "block", A.body.appendChild(r), t.selectNode(r);
        var n = t.getBoundingClientRect(), o = Math.round(n.height);
        if (A.body.removeChild(r), o === e) return true;
      }
    }
    return false;
  }, Ub = function(A) {
    var e = A.createElement("boundtest");
    e.style.width = "50px", e.style.display = "block", e.style.fontSize = "12px", e.style.letterSpacing = "0px", e.style.wordSpacing = "0px", A.body.appendChild(e);
    var t = A.createRange();
    e.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
    var r = e.firstChild, n = Bi(r.data).map(function(l) {
      return GA(l);
    }), o = 0, i = {}, a = n.every(function(l, s) {
      t.setStart(r, o), t.setEnd(r, o + l.length);
      var c = t.getBoundingClientRect();
      o += l.length;
      var d = c.x > i.x || c.y > i.y;
      return i = c, s === 0 ? true : d;
    });
    return A.body.removeChild(e), a;
  }, Eb = function() {
    return typeof new Image().crossOrigin < "u";
  }, Sb = function() {
    return typeof new XMLHttpRequest().responseType == "string";
  }, xb = function(A) {
    var e = new Image(), t = A.createElement("canvas"), r = t.getContext("2d");
    if (!r) return false;
    e.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
    try {
      r.drawImage(e, 0, 0), t.toDataURL();
    } catch {
      return false;
    }
    return true;
  }, Lc = function(A) {
    return A[0] === 0 && A[1] === 255 && A[2] === 0 && A[3] === 255;
  }, Ib = function(A) {
    var e = A.createElement("canvas"), t = 100;
    e.width = t, e.height = t;
    var r = e.getContext("2d");
    if (!r) return Promise.reject(false);
    r.fillStyle = "rgb(0, 255, 0)", r.fillRect(0, 0, t, t);
    var n = new Image(), o = e.toDataURL();
    n.src = o;
    var i = Va(t, t, 0, 0, n);
    return r.fillStyle = "red", r.fillRect(0, 0, t, t), kc(i).then(function(a) {
      r.drawImage(a, 0, 0);
      var l = r.getImageData(0, 0, t, t).data;
      r.fillStyle = "red", r.fillRect(0, 0, t, t);
      var s = A.createElement("div");
      return s.style.backgroundImage = "url(" + o + ")", s.style.height = t + "px", Lc(l) ? kc(Va(t, t, 0, 0, s)) : Promise.reject(false);
    }).then(function(a) {
      return r.drawImage(a, 0, 0), Lc(r.getImageData(0, 0, t, t).data);
    }).catch(function() {
      return false;
    });
  }, Va = function(A, e, t, r, n) {
    var o = "http://www.w3.org/2000/svg", i = document.createElementNS(o, "svg"), a = document.createElementNS(o, "foreignObject");
    return i.setAttributeNS(null, "width", A.toString()), i.setAttributeNS(null, "height", e.toString()), a.setAttributeNS(null, "width", "100%"), a.setAttributeNS(null, "height", "100%"), a.setAttributeNS(null, "x", t.toString()), a.setAttributeNS(null, "y", r.toString()), a.setAttributeNS(null, "externalResourcesRequired", "true"), i.appendChild(a), a.appendChild(n), i;
  }, kc = function(A) {
    return new Promise(function(e, t) {
      var r = new Image();
      r.onload = function() {
        return e(r);
      }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(A));
    });
  }, te = {
    get SUPPORT_RANGE_BOUNDS() {
      var A = Fb(document);
      return Object.defineProperty(te, "SUPPORT_RANGE_BOUNDS", {
        value: A
      }), A;
    },
    get SUPPORT_WORD_BREAKING() {
      var A = te.SUPPORT_RANGE_BOUNDS && Ub(document);
      return Object.defineProperty(te, "SUPPORT_WORD_BREAKING", {
        value: A
      }), A;
    },
    get SUPPORT_SVG_DRAWING() {
      var A = xb(document);
      return Object.defineProperty(te, "SUPPORT_SVG_DRAWING", {
        value: A
      }), A;
    },
    get SUPPORT_FOREIGNOBJECT_DRAWING() {
      var A = typeof Array.from == "function" && typeof window.fetch == "function" ? Ib(document) : Promise.resolve(false);
      return Object.defineProperty(te, "SUPPORT_FOREIGNOBJECT_DRAWING", {
        value: A
      }), A;
    },
    get SUPPORT_CORS_IMAGES() {
      var A = Eb();
      return Object.defineProperty(te, "SUPPORT_CORS_IMAGES", {
        value: A
      }), A;
    },
    get SUPPORT_RESPONSE_TYPE() {
      var A = Sb();
      return Object.defineProperty(te, "SUPPORT_RESPONSE_TYPE", {
        value: A
      }), A;
    },
    get SUPPORT_CORS_XHR() {
      var A = "withCredentials" in new XMLHttpRequest();
      return Object.defineProperty(te, "SUPPORT_CORS_XHR", {
        value: A
      }), A;
    },
    get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
      var A = !!(typeof Intl < "u" && Intl.Segmenter);
      return Object.defineProperty(te, "SUPPORT_NATIVE_TEXT_SEGMENTATION", {
        value: A
      }), A;
    }
  }, Wr = /* @__PURE__ */ (function() {
    function A(e, t) {
      this.text = e, this.bounds = t;
    }
    return A;
  })(), Hb = function(A, e, t, r) {
    var n = kb(e, t), o = [], i = 0;
    return n.forEach(function(a) {
      if (t.textDecorationLine.length || a.trim().length > 0) if (te.SUPPORT_RANGE_BOUNDS) {
        var l = Rc(r, i, a.length).getClientRects();
        if (l.length > 1) {
          var s = Ws(a), c = 0;
          s.forEach(function(u) {
            o.push(new Wr(u, ot.fromDOMRectList(A, Rc(r, c + i, u.length).getClientRects()))), c += u.length;
          });
        } else o.push(new Wr(a, ot.fromDOMRectList(A, l)));
      } else {
        var d = r.splitText(a.length);
        o.push(new Wr(a, Tb(A, r))), r = d;
      }
      else te.SUPPORT_RANGE_BOUNDS || (r = r.splitText(a.length));
      i += a.length;
    }), o;
  }, Tb = function(A, e) {
    var t = e.ownerDocument;
    if (t) {
      var r = t.createElement("html2canvaswrapper");
      r.appendChild(e.cloneNode(true));
      var n = e.parentNode;
      if (n) {
        n.replaceChild(r, e);
        var o = pi(A, r);
        return r.firstChild && n.replaceChild(r.firstChild, r), o;
      }
    }
    return ot.EMPTY;
  }, Rc = function(A, e, t) {
    var r = A.ownerDocument;
    if (!r) throw new Error("Node has no owner document");
    var n = r.createRange();
    return n.setStart(A, e), n.setEnd(A, e + t), n;
  }, Ws = function(A) {
    if (te.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
      var e = new Intl.Segmenter(void 0, {
        granularity: "grapheme"
      });
      return Array.from(e.segment(A)).map(function(t) {
        return t.segment;
      });
    }
    return bb(A);
  }, Lb = function(A, e) {
    if (te.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
      var t = new Intl.Segmenter(void 0, {
        granularity: "word"
      });
      return Array.from(t.segment(A)).map(function(r) {
        return r.segment;
      });
    }
    return Ob(A, e);
  }, kb = function(A, e) {
    return e.letterSpacing !== 0 ? Ws(A) : Lb(A, e);
  }, Rb = [
    32,
    160,
    4961,
    65792,
    65793,
    4153,
    4241
  ], Ob = function(A, e) {
    for (var t = lv(A, {
      lineBreak: e.lineBreak,
      wordBreak: e.overflowWrap === "break-word" ? "break-word" : e.wordBreak
    }), r = [], n, o = function() {
      if (n.value) {
        var i = n.value.slice(), a = Bi(i), l = "";
        a.forEach(function(s) {
          Rb.indexOf(s) === -1 ? l += GA(s) : (l.length && r.push(l), r.push(GA(s)), l = "");
        }), l.length && r.push(l);
      }
    }; !(n = t.next()).done; ) o();
    return r;
  }, Kb = /* @__PURE__ */ (function() {
    function A(e, t, r) {
      this.text = Mb(t.data, r.textTransform), this.textBounds = Hb(e, this.text, r, t);
    }
    return A;
  })(), Mb = function(A, e) {
    switch (e) {
      case 1:
        return A.toLowerCase();
      case 3:
        return A.replace(Db, Pb);
      case 2:
        return A.toUpperCase();
      default:
        return A;
    }
  }, Db = /(^|\s|:|-|\(|\))([a-z])/g, Pb = function(A, e, t) {
    return A.length > 0 ? e + t.toUpperCase() : A;
  }, rf = (function(A) {
    ke(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.src = r.currentSrc || r.src, n.intrinsicWidth = r.naturalWidth, n.intrinsicHeight = r.naturalHeight, n.context.cache.addImage(n.src), n;
    }
    return e;
  })(je), nf = (function(A) {
    ke(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.canvas = r, n.intrinsicWidth = r.width, n.intrinsicHeight = r.height, n;
    }
    return e;
  })(je), of = (function(A) {
    ke(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this, o = new XMLSerializer(), i = pi(t, r);
      return r.setAttribute("width", i.width + "px"), r.setAttribute("height", i.height + "px"), n.svg = "data:image/svg+xml," + encodeURIComponent(o.serializeToString(r)), n.intrinsicWidth = r.width.baseVal.value, n.intrinsicHeight = r.height.baseVal.value, n.context.cache.addImage(n.svg), n;
    }
    return e;
  })(je), af = (function(A) {
    ke(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.value = r.value, n;
    }
    return e;
  })(je), $a = (function(A) {
    ke(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.start = r.start, n.reversed = typeof r.reversed == "boolean" && r.reversed === true, n;
    }
    return e;
  })(je), _b = [
    {
      type: 15,
      flags: 0,
      unit: "px",
      number: 3
    }
  ], Nb = [
    {
      type: 16,
      flags: 0,
      number: 50
    }
  ], Gb = function(A) {
    return A.width > A.height ? new ot(A.left + (A.width - A.height) / 2, A.top, A.height, A.height) : A.width < A.height ? new ot(A.left, A.top + (A.height - A.width) / 2, A.width, A.width) : A;
  }, Vb = function(A) {
    var e = A.type === $b ? new Array(A.value.length + 1).join("\u2022") : A.value;
    return e.length === 0 ? A.placeholder || "" : e;
  }, yo = "checkbox", Qo = "radio", $b = "password", Oc = 707406591, zs = (function(A) {
    ke(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      switch (n.type = r.type.toLowerCase(), n.checked = r.checked, n.value = Vb(r), (n.type === yo || n.type === Qo) && (n.styles.backgroundColor = 3739148031, n.styles.borderTopColor = n.styles.borderRightColor = n.styles.borderBottomColor = n.styles.borderLeftColor = 2779096575, n.styles.borderTopWidth = n.styles.borderRightWidth = n.styles.borderBottomWidth = n.styles.borderLeftWidth = 1, n.styles.borderTopStyle = n.styles.borderRightStyle = n.styles.borderBottomStyle = n.styles.borderLeftStyle = 1, n.styles.backgroundClip = [
        0
      ], n.styles.backgroundOrigin = [
        0
      ], n.bounds = Gb(n.bounds)), n.type) {
        case yo:
          n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = _b;
          break;
        case Qo:
          n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = Nb;
          break;
      }
      return n;
    }
    return e;
  })(je), sf = (function(A) {
    ke(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this, o = r.options[r.selectedIndex || 0];
      return n.value = o && o.text || "", n;
    }
    return e;
  })(je), lf = (function(A) {
    ke(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.value = r.value, n;
    }
    return e;
  })(je), cf = (function(A) {
    ke(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      n.src = r.src, n.width = parseInt(r.width, 10) || 0, n.height = parseInt(r.height, 10) || 0, n.backgroundColor = n.styles.backgroundColor;
      try {
        if (r.contentWindow && r.contentWindow.document && r.contentWindow.document.documentElement) {
          n.tree = df(t, r.contentWindow.document.documentElement);
          var o = r.contentWindow.document.documentElement ? Vr(t, getComputedStyle(r.contentWindow.document.documentElement).backgroundColor) : At.TRANSPARENT, i = r.contentWindow.document.body ? Vr(t, getComputedStyle(r.contentWindow.document.body).backgroundColor) : At.TRANSPARENT;
          n.backgroundColor = ht(o) ? ht(i) ? n.styles.backgroundColor : i : o;
        }
      } catch {
      }
      return n;
    }
    return e;
  })(je), Wb = [
    "OL",
    "UL",
    "MENU"
  ], no = function(A, e, t, r) {
    for (var n = e.firstChild, o = void 0; n; n = o) if (o = n.nextSibling, ff(n) && n.data.trim().length > 0) t.textNodes.push(new Kb(A, n, t.styles));
    else if (nr(n)) if (hf(n) && n.assignedNodes) n.assignedNodes().forEach(function(a) {
      return no(A, a, t, r);
    });
    else {
      var i = uf(A, n);
      i.styles.isVisible() && (zb(n, i, r) ? i.flags |= 4 : Xb(i.styles) && (i.flags |= 2), Wb.indexOf(n.tagName) !== -1 && (i.flags |= 8), t.elements.push(i), n.slot, n.shadowRoot ? no(A, n.shadowRoot, i, r) : !bo(n) && !gf(n) && !Fo(n) && no(A, n, i, r));
    }
  }, uf = function(A, e) {
    return za(e) ? new rf(A, e) : pf(e) ? new nf(A, e) : gf(e) ? new of(A, e) : jb(e) ? new af(A, e) : Jb(e) ? new $a(A, e) : Yb(e) ? new zs(A, e) : Fo(e) ? new sf(A, e) : bo(e) ? new lf(A, e) : Bf(e) ? new cf(A, e) : new je(A, e);
  }, df = function(A, e) {
    var t = uf(A, e);
    return t.flags |= 4, no(A, e, t, t), t;
  }, zb = function(A, e, t) {
    return e.styles.isPositionedWithZIndex() || e.styles.opacity < 1 || e.styles.isTransformed() || Xs(A) && t.styles.isTransparent();
  }, Xb = function(A) {
    return A.isPositioned() || A.isFloating();
  }, ff = function(A) {
    return A.nodeType === Node.TEXT_NODE;
  }, nr = function(A) {
    return A.nodeType === Node.ELEMENT_NODE;
  }, Wa = function(A) {
    return nr(A) && typeof A.style < "u" && !oo(A);
  }, oo = function(A) {
    return typeof A.className == "object";
  }, jb = function(A) {
    return A.tagName === "LI";
  }, Jb = function(A) {
    return A.tagName === "OL";
  }, Yb = function(A) {
    return A.tagName === "INPUT";
  }, Zb = function(A) {
    return A.tagName === "HTML";
  }, gf = function(A) {
    return A.tagName === "svg";
  }, Xs = function(A) {
    return A.tagName === "BODY";
  }, pf = function(A) {
    return A.tagName === "CANVAS";
  }, Kc = function(A) {
    return A.tagName === "VIDEO";
  }, za = function(A) {
    return A.tagName === "IMG";
  }, Bf = function(A) {
    return A.tagName === "IFRAME";
  }, Mc = function(A) {
    return A.tagName === "STYLE";
  }, qb = function(A) {
    return A.tagName === "SCRIPT";
  }, bo = function(A) {
    return A.tagName === "TEXTAREA";
  }, Fo = function(A) {
    return A.tagName === "SELECT";
  }, hf = function(A) {
    return A.tagName === "SLOT";
  }, Dc = function(A) {
    return A.tagName.indexOf("-") > 0;
  }, AF = (function() {
    function A() {
      this.counters = {};
    }
    return A.prototype.getCounterValue = function(e) {
      var t = this.counters[e];
      return t && t.length ? t[t.length - 1] : 1;
    }, A.prototype.getCounterValues = function(e) {
      var t = this.counters[e];
      return t || [];
    }, A.prototype.pop = function(e) {
      var t = this;
      e.forEach(function(r) {
        return t.counters[r].pop();
      });
    }, A.prototype.parse = function(e) {
      var t = this, r = e.counterIncrement, n = e.counterReset, o = true;
      r !== null && r.forEach(function(a) {
        var l = t.counters[a.counter];
        l && a.increment !== 0 && (o = false, l.length || l.push(1), l[Math.max(0, l.length - 1)] += a.increment);
      });
      var i = [];
      return o && n.forEach(function(a) {
        var l = t.counters[a.counter];
        i.push(a.counter), l || (l = t.counters[a.counter] = []), l.push(a.reset);
      }), i;
    }, A;
  })(), Pc = {
    integers: [
      1e3,
      900,
      500,
      400,
      100,
      90,
      50,
      40,
      10,
      9,
      5,
      4,
      1
    ],
    values: [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I"
    ]
  }, _c = {
    integers: [
      9e3,
      8e3,
      7e3,
      6e3,
      5e3,
      4e3,
      3e3,
      2e3,
      1e3,
      900,
      800,
      700,
      600,
      500,
      400,
      300,
      200,
      100,
      90,
      80,
      70,
      60,
      50,
      40,
      30,
      20,
      10,
      9,
      8,
      7,
      6,
      5,
      4,
      3,
      2,
      1
    ],
    values: [
      "\u0554",
      "\u0553",
      "\u0552",
      "\u0551",
      "\u0550",
      "\u054F",
      "\u054E",
      "\u054D",
      "\u054C",
      "\u054B",
      "\u054A",
      "\u0549",
      "\u0548",
      "\u0547",
      "\u0546",
      "\u0545",
      "\u0544",
      "\u0543",
      "\u0542",
      "\u0541",
      "\u0540",
      "\u053F",
      "\u053E",
      "\u053D",
      "\u053C",
      "\u053B",
      "\u053A",
      "\u0539",
      "\u0538",
      "\u0537",
      "\u0536",
      "\u0535",
      "\u0534",
      "\u0533",
      "\u0532",
      "\u0531"
    ]
  }, eF = {
    integers: [
      1e4,
      9e3,
      8e3,
      7e3,
      6e3,
      5e3,
      4e3,
      3e3,
      2e3,
      1e3,
      400,
      300,
      200,
      100,
      90,
      80,
      70,
      60,
      50,
      40,
      30,
      20,
      19,
      18,
      17,
      16,
      15,
      10,
      9,
      8,
      7,
      6,
      5,
      4,
      3,
      2,
      1
    ],
    values: [
      "\u05D9\u05F3",
      "\u05D8\u05F3",
      "\u05D7\u05F3",
      "\u05D6\u05F3",
      "\u05D5\u05F3",
      "\u05D4\u05F3",
      "\u05D3\u05F3",
      "\u05D2\u05F3",
      "\u05D1\u05F3",
      "\u05D0\u05F3",
      "\u05EA",
      "\u05E9",
      "\u05E8",
      "\u05E7",
      "\u05E6",
      "\u05E4",
      "\u05E2",
      "\u05E1",
      "\u05E0",
      "\u05DE",
      "\u05DC",
      "\u05DB",
      "\u05D9\u05D8",
      "\u05D9\u05D7",
      "\u05D9\u05D6",
      "\u05D8\u05D6",
      "\u05D8\u05D5",
      "\u05D9",
      "\u05D8",
      "\u05D7",
      "\u05D6",
      "\u05D5",
      "\u05D4",
      "\u05D3",
      "\u05D2",
      "\u05D1",
      "\u05D0"
    ]
  }, tF = {
    integers: [
      1e4,
      9e3,
      8e3,
      7e3,
      6e3,
      5e3,
      4e3,
      3e3,
      2e3,
      1e3,
      900,
      800,
      700,
      600,
      500,
      400,
      300,
      200,
      100,
      90,
      80,
      70,
      60,
      50,
      40,
      30,
      20,
      10,
      9,
      8,
      7,
      6,
      5,
      4,
      3,
      2,
      1
    ],
    values: [
      "\u10F5",
      "\u10F0",
      "\u10EF",
      "\u10F4",
      "\u10EE",
      "\u10ED",
      "\u10EC",
      "\u10EB",
      "\u10EA",
      "\u10E9",
      "\u10E8",
      "\u10E7",
      "\u10E6",
      "\u10E5",
      "\u10E4",
      "\u10F3",
      "\u10E2",
      "\u10E1",
      "\u10E0",
      "\u10DF",
      "\u10DE",
      "\u10DD",
      "\u10F2",
      "\u10DC",
      "\u10DB",
      "\u10DA",
      "\u10D9",
      "\u10D8",
      "\u10D7",
      "\u10F1",
      "\u10D6",
      "\u10D5",
      "\u10D4",
      "\u10D3",
      "\u10D2",
      "\u10D1",
      "\u10D0"
    ]
  }, jt = function(A, e, t, r, n, o) {
    return A < e || A > t ? en(A, n, o.length > 0) : r.integers.reduce(function(i, a, l) {
      for (; A >= a; ) A -= a, i += r.values[l];
      return i;
    }, "") + o;
  }, mf = function(A, e, t, r) {
    var n = "";
    do
      t || A--, n = r(A) + n, A /= e;
    while (A * e >= e);
    return n;
  }, NA = function(A, e, t, r, n) {
    var o = t - e + 1;
    return (A < 0 ? "-" : "") + (mf(Math.abs(A), o, r, function(i) {
      return GA(Math.floor(i % o) + e);
    }) + n);
  }, bt = function(A, e, t) {
    t === void 0 && (t = ". ");
    var r = e.length;
    return mf(Math.abs(A), r, false, function(n) {
      return e[Math.floor(n % r)];
    }) + t;
  }, Ar = 1, st = 2, lt = 4, Mr = 8, qe = function(A, e, t, r, n, o) {
    if (A < -9999 || A > 9999) return en(A, 4, n.length > 0);
    var i = Math.abs(A), a = n;
    if (i === 0) return e[0] + a;
    for (var l = 0; i > 0 && l <= 4; l++) {
      var s = i % 10;
      s === 0 && XA(o, Ar) && a !== "" ? a = e[s] + a : s > 1 || s === 1 && l === 0 || s === 1 && l === 1 && XA(o, st) || s === 1 && l === 1 && XA(o, lt) && A > 100 || s === 1 && l > 1 && XA(o, Mr) ? a = e[s] + (l > 0 ? t[l - 1] : "") + a : s === 1 && l > 0 && (a = t[l - 1] + a), i = Math.floor(i / 10);
    }
    return (A < 0 ? r : "") + a;
  }, Nc = "\u5341\u767E\u5343\u842C", Gc = "\u62FE\u4F70\u4EDF\u842C", Vc = "\u30DE\u30A4\u30CA\u30B9", Zi = "\uB9C8\uC774\uB108\uC2A4", en = function(A, e, t) {
    var r = t ? ". " : "", n = t ? "\u3001" : "", o = t ? ", " : "", i = t ? " " : "";
    switch (e) {
      case 0:
        return "\u2022" + i;
      case 1:
        return "\u25E6" + i;
      case 2:
        return "\u25FE" + i;
      case 5:
        var a = NA(A, 48, 57, true, r);
        return a.length < 4 ? "0" + a : a;
      case 4:
        return bt(A, "\u3007\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", n);
      case 6:
        return jt(A, 1, 3999, Pc, 3, r).toLowerCase();
      case 7:
        return jt(A, 1, 3999, Pc, 3, r);
      case 8:
        return NA(A, 945, 969, false, r);
      case 9:
        return NA(A, 97, 122, false, r);
      case 10:
        return NA(A, 65, 90, false, r);
      case 11:
        return NA(A, 1632, 1641, true, r);
      case 12:
      case 49:
        return jt(A, 1, 9999, _c, 3, r);
      case 35:
        return jt(A, 1, 9999, _c, 3, r).toLowerCase();
      case 13:
        return NA(A, 2534, 2543, true, r);
      case 14:
      case 30:
        return NA(A, 6112, 6121, true, r);
      case 15:
        return bt(A, "\u5B50\u4E11\u5BC5\u536F\u8FB0\u5DF3\u5348\u672A\u7533\u9149\u620C\u4EA5", n);
      case 16:
        return bt(A, "\u7532\u4E59\u4E19\u4E01\u620A\u5DF1\u5E9A\u8F9B\u58EC\u7678", n);
      case 17:
      case 48:
        return qe(A, "\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", Nc, "\u8CA0", n, st | lt | Mr);
      case 47:
        return qe(A, "\u96F6\u58F9\u8CB3\u53C3\u8086\u4F0D\u9678\u67D2\u634C\u7396", Gc, "\u8CA0", n, Ar | st | lt | Mr);
      case 42:
        return qe(A, "\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", Nc, "\u8D1F", n, st | lt | Mr);
      case 41:
        return qe(A, "\u96F6\u58F9\u8D30\u53C1\u8086\u4F0D\u9646\u67D2\u634C\u7396", Gc, "\u8D1F", n, Ar | st | lt | Mr);
      case 26:
        return qe(A, "\u3007\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u5341\u767E\u5343\u4E07", Vc, n, 0);
      case 25:
        return qe(A, "\u96F6\u58F1\u5F10\u53C2\u56DB\u4F0D\u516D\u4E03\u516B\u4E5D", "\u62FE\u767E\u5343\u4E07", Vc, n, Ar | st | lt);
      case 31:
        return qe(A, "\uC601\uC77C\uC774\uC0BC\uC0AC\uC624\uC721\uCE60\uD314\uAD6C", "\uC2ED\uBC31\uCC9C\uB9CC", Zi, o, Ar | st | lt);
      case 33:
        return qe(A, "\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u5341\u767E\u5343\u842C", Zi, o, 0);
      case 32:
        return qe(A, "\u96F6\u58F9\u8CB3\u53C3\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u62FE\u767E\u5343", Zi, o, Ar | st | lt);
      case 18:
        return NA(A, 2406, 2415, true, r);
      case 20:
        return jt(A, 1, 19999, tF, 3, r);
      case 21:
        return NA(A, 2790, 2799, true, r);
      case 22:
        return NA(A, 2662, 2671, true, r);
      case 22:
        return jt(A, 1, 10999, eF, 3, r);
      case 23:
        return bt(A, "\u3042\u3044\u3046\u3048\u304A\u304B\u304D\u304F\u3051\u3053\u3055\u3057\u3059\u305B\u305D\u305F\u3061\u3064\u3066\u3068\u306A\u306B\u306C\u306D\u306E\u306F\u3072\u3075\u3078\u307B\u307E\u307F\u3080\u3081\u3082\u3084\u3086\u3088\u3089\u308A\u308B\u308C\u308D\u308F\u3090\u3091\u3092\u3093");
      case 24:
        return bt(A, "\u3044\u308D\u306F\u306B\u307B\u3078\u3068\u3061\u308A\u306C\u308B\u3092\u308F\u304B\u3088\u305F\u308C\u305D\u3064\u306D\u306A\u3089\u3080\u3046\u3090\u306E\u304A\u304F\u3084\u307E\u3051\u3075\u3053\u3048\u3066\u3042\u3055\u304D\u3086\u3081\u307F\u3057\u3091\u3072\u3082\u305B\u3059");
      case 27:
        return NA(A, 3302, 3311, true, r);
      case 28:
        return bt(A, "\u30A2\u30A4\u30A6\u30A8\u30AA\u30AB\u30AD\u30AF\u30B1\u30B3\u30B5\u30B7\u30B9\u30BB\u30BD\u30BF\u30C1\u30C4\u30C6\u30C8\u30CA\u30CB\u30CC\u30CD\u30CE\u30CF\u30D2\u30D5\u30D8\u30DB\u30DE\u30DF\u30E0\u30E1\u30E2\u30E4\u30E6\u30E8\u30E9\u30EA\u30EB\u30EC\u30ED\u30EF\u30F0\u30F1\u30F2\u30F3", n);
      case 29:
        return bt(A, "\u30A4\u30ED\u30CF\u30CB\u30DB\u30D8\u30C8\u30C1\u30EA\u30CC\u30EB\u30F2\u30EF\u30AB\u30E8\u30BF\u30EC\u30BD\u30C4\u30CD\u30CA\u30E9\u30E0\u30A6\u30F0\u30CE\u30AA\u30AF\u30E4\u30DE\u30B1\u30D5\u30B3\u30A8\u30C6\u30A2\u30B5\u30AD\u30E6\u30E1\u30DF\u30B7\u30F1\u30D2\u30E2\u30BB\u30B9", n);
      case 34:
        return NA(A, 3792, 3801, true, r);
      case 37:
        return NA(A, 6160, 6169, true, r);
      case 38:
        return NA(A, 4160, 4169, true, r);
      case 39:
        return NA(A, 2918, 2927, true, r);
      case 40:
        return NA(A, 1776, 1785, true, r);
      case 43:
        return NA(A, 3046, 3055, true, r);
      case 44:
        return NA(A, 3174, 3183, true, r);
      case 45:
        return NA(A, 3664, 3673, true, r);
      case 46:
        return NA(A, 3872, 3881, true, r);
      default:
        return NA(A, 48, 57, true, r);
    }
  }, Cf = "data-html2canvas-ignore", $c = (function() {
    function A(e, t, r) {
      if (this.context = e, this.options = r, this.scrolledElements = [], this.referenceElement = t, this.counters = new AF(), this.quoteDepth = 0, !t.ownerDocument) throw new Error("Cloned element does not have an owner document");
      this.documentElement = this.cloneNode(t.ownerDocument.documentElement, false);
    }
    return A.prototype.toIFrame = function(e, t) {
      var r = this, n = rF(e, t);
      if (!n.contentWindow) return Promise.reject("Unable to find iframe window");
      var o = e.defaultView.pageXOffset, i = e.defaultView.pageYOffset, a = n.contentWindow, l = a.document, s = iF(n).then(function() {
        return de(r, void 0, void 0, function() {
          var c, d;
          return se(this, function(u) {
            switch (u.label) {
              case 0:
                return this.scrolledElements.forEach(cF), a && (a.scrollTo(t.left, t.top), /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (a.scrollY !== t.top || a.scrollX !== t.left) && (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(a.scrollX - t.left, a.scrollY - t.top, 0, 0))), c = this.options.onclone, d = this.clonedReferenceElement, typeof d > "u" ? [
                  2,
                  Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")
                ] : l.fonts && l.fonts.ready ? [
                  4,
                  l.fonts.ready
                ] : [
                  3,
                  2
                ];
              case 1:
                u.sent(), u.label = 2;
              case 2:
                return /(AppleWebKit)/g.test(navigator.userAgent) ? [
                  4,
                  oF(l)
                ] : [
                  3,
                  4
                ];
              case 3:
                u.sent(), u.label = 4;
              case 4:
                return typeof c == "function" ? [
                  2,
                  Promise.resolve().then(function() {
                    return c(l, d);
                  }).then(function() {
                    return n;
                  })
                ] : [
                  2,
                  n
                ];
            }
          });
        });
      });
      return l.open(), l.write(sF(document.doctype) + "<html></html>"), lF(this.referenceElement.ownerDocument, o, i), l.replaceChild(l.adoptNode(this.documentElement), l.documentElement), l.close(), s;
    }, A.prototype.createElementClone = function(e) {
      if (Ga(e, 2)) debugger;
      if (pf(e)) return this.createCanvasClone(e);
      if (Kc(e)) return this.createVideoClone(e);
      if (Mc(e)) return this.createStyleClone(e);
      var t = e.cloneNode(false);
      return za(t) && (za(e) && e.currentSrc && e.currentSrc !== e.src && (t.src = e.currentSrc, t.srcset = ""), t.loading === "lazy" && (t.loading = "eager")), Dc(t) ? this.createCustomElementClone(t) : t;
    }, A.prototype.createCustomElementClone = function(e) {
      var t = document.createElement("html2canvascustomelement");
      return qi(e.style, t), t;
    }, A.prototype.createStyleClone = function(e) {
      try {
        var t = e.sheet;
        if (t && t.cssRules) {
          var r = [].slice.call(t.cssRules, 0).reduce(function(o, i) {
            return i && typeof i.cssText == "string" ? o + i.cssText : o;
          }, ""), n = e.cloneNode(false);
          return n.textContent = r, n;
        }
      } catch (o) {
        if (this.context.logger.error("Unable to access cssRules property", o), o.name !== "SecurityError") throw o;
      }
      return e.cloneNode(false);
    }, A.prototype.createCanvasClone = function(e) {
      var t;
      if (this.options.inlineImages && e.ownerDocument) {
        var r = e.ownerDocument.createElement("img");
        try {
          return r.src = e.toDataURL(), r;
        } catch {
          this.context.logger.info("Unable to inline canvas contents, canvas is tainted", e);
        }
      }
      var n = e.cloneNode(false);
      try {
        n.width = e.width, n.height = e.height;
        var o = e.getContext("2d"), i = n.getContext("2d");
        if (i) if (!this.options.allowTaint && o) i.putImageData(o.getImageData(0, 0, e.width, e.height), 0, 0);
        else {
          var a = (t = e.getContext("webgl2")) !== null && t !== void 0 ? t : e.getContext("webgl");
          if (a) {
            var l = a.getContextAttributes();
            (l == null ? void 0 : l.preserveDrawingBuffer) === false && this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false", e);
          }
          i.drawImage(e, 0, 0);
        }
        return n;
      } catch {
        this.context.logger.info("Unable to clone canvas as it is tainted", e);
      }
      return n;
    }, A.prototype.createVideoClone = function(e) {
      var t = e.ownerDocument.createElement("canvas");
      t.width = e.offsetWidth, t.height = e.offsetHeight;
      var r = t.getContext("2d");
      try {
        return r && (r.drawImage(e, 0, 0, t.width, t.height), this.options.allowTaint || r.getImageData(0, 0, t.width, t.height)), t;
      } catch {
        this.context.logger.info("Unable to clone video as it is tainted", e);
      }
      var n = e.ownerDocument.createElement("canvas");
      return n.width = e.offsetWidth, n.height = e.offsetHeight, n;
    }, A.prototype.appendChildNode = function(e, t, r) {
      (!nr(t) || !qb(t) && !t.hasAttribute(Cf) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(t))) && (!this.options.copyStyles || !nr(t) || !Mc(t)) && e.appendChild(this.cloneNode(t, r));
    }, A.prototype.cloneChildNodes = function(e, t, r) {
      for (var n = this, o = e.shadowRoot ? e.shadowRoot.firstChild : e.firstChild; o; o = o.nextSibling) if (nr(o) && hf(o) && typeof o.assignedNodes == "function") {
        var i = o.assignedNodes();
        i.length && i.forEach(function(a) {
          return n.appendChildNode(t, a, r);
        });
      } else this.appendChildNode(t, o, r);
    }, A.prototype.cloneNode = function(e, t) {
      if (ff(e)) return document.createTextNode(e.data);
      if (!e.ownerDocument) return e.cloneNode(false);
      var r = e.ownerDocument.defaultView;
      if (r && nr(e) && (Wa(e) || oo(e))) {
        var n = this.createElementClone(e);
        n.style.transitionProperty = "none";
        var o = r.getComputedStyle(e), i = r.getComputedStyle(e, ":before"), a = r.getComputedStyle(e, ":after");
        this.referenceElement === e && Wa(n) && (this.clonedReferenceElement = n), Xs(n) && fF(n);
        var l = this.counters.parse(new yc(this.context, o)), s = this.resolvePseudoContent(e, n, i, zr.BEFORE);
        Dc(e) && (t = true), Kc(e) || this.cloneChildNodes(e, n, t), s && n.insertBefore(s, n.firstChild);
        var c = this.resolvePseudoContent(e, n, a, zr.AFTER);
        return c && n.appendChild(c), this.counters.pop(l), (o && (this.options.copyStyles || oo(e)) && !Bf(e) || t) && qi(o, n), (e.scrollTop !== 0 || e.scrollLeft !== 0) && this.scrolledElements.push([
          n,
          e.scrollLeft,
          e.scrollTop
        ]), (bo(e) || Fo(e)) && (bo(n) || Fo(n)) && (n.value = e.value), n;
      }
      return e.cloneNode(false);
    }, A.prototype.resolvePseudoContent = function(e, t, r, n) {
      var o = this;
      if (r) {
        var i = r.content, a = t.ownerDocument;
        if (!(!a || !i || i === "none" || i === "-moz-alt-content" || r.display === "none")) {
          this.counters.parse(new yc(this.context, r));
          var l = new jQ(this.context, r), s = a.createElement("html2canvaspseudoelement");
          qi(r, s), l.content.forEach(function(d) {
            if (d.type === 0) s.appendChild(a.createTextNode(d.value));
            else if (d.type === 22) {
              var u = a.createElement("img");
              u.src = d.value, u.style.opacity = "1", s.appendChild(u);
            } else if (d.type === 18) {
              if (d.name === "attr") {
                var f = d.values.filter(QA);
                f.length && s.appendChild(a.createTextNode(e.getAttribute(f[0].value) || ""));
              } else if (d.name === "counter") {
                var g = d.values.filter(fr), p = g[0], Q = g[1];
                if (p && QA(p)) {
                  var m = o.counters.getCounterValue(p.value), F = Q && QA(Q) ? Na.parse(o.context, Q.value) : 3;
                  s.appendChild(a.createTextNode(en(m, F, false)));
                }
              } else if (d.name === "counters") {
                var w = d.values.filter(fr), p = w[0], v = w[1], Q = w[2];
                if (p && QA(p)) {
                  var E = o.counters.getCounterValues(p.value), C = Q && QA(Q) ? Na.parse(o.context, Q.value) : 3, x = v && v.type === 0 ? v.value : "", I = E.map(function(S) {
                    return en(S, C, false);
                  }).join(x);
                  s.appendChild(a.createTextNode(I));
                }
              }
            } else if (d.type === 20) switch (d.value) {
              case "open-quote":
                s.appendChild(a.createTextNode(vc(l.quotes, o.quoteDepth++, true)));
                break;
              case "close-quote":
                s.appendChild(a.createTextNode(vc(l.quotes, --o.quoteDepth, false)));
                break;
              default:
                s.appendChild(a.createTextNode(d.value));
            }
          }), s.className = Xa + " " + ja;
          var c = n === zr.BEFORE ? " " + Xa : " " + ja;
          return oo(t) ? t.className.baseValue += c : t.className += c, s;
        }
      }
    }, A.destroy = function(e) {
      return e.parentNode ? (e.parentNode.removeChild(e), true) : false;
    }, A;
  })(), zr;
  (function(A) {
    A[A.BEFORE = 0] = "BEFORE", A[A.AFTER = 1] = "AFTER";
  })(zr || (zr = {}));
  var rF = function(A, e) {
    var t = A.createElement("iframe");
    return t.className = "html2canvas-container", t.style.visibility = "hidden", t.style.position = "fixed", t.style.left = "-10000px", t.style.top = "0px", t.style.border = "0", t.width = e.width.toString(), t.height = e.height.toString(), t.scrolling = "no", t.setAttribute(Cf, "true"), A.body.appendChild(t), t;
  }, nF = function(A) {
    return new Promise(function(e) {
      if (A.complete) {
        e();
        return;
      }
      if (!A.src) {
        e();
        return;
      }
      A.onload = e, A.onerror = e;
    });
  }, oF = function(A) {
    return Promise.all([].slice.call(A.images, 0).map(nF));
  }, iF = function(A) {
    return new Promise(function(e, t) {
      var r = A.contentWindow;
      if (!r) return t("No window assigned for iframe");
      var n = r.document;
      r.onload = A.onload = function() {
        r.onload = A.onload = null;
        var o = setInterval(function() {
          n.body.childNodes.length > 0 && n.readyState === "complete" && (clearInterval(o), e(A));
        }, 50);
      };
    });
  }, aF = [
    "all",
    "d",
    "content"
  ], qi = function(A, e) {
    for (var t = A.length - 1; t >= 0; t--) {
      var r = A.item(t);
      aF.indexOf(r) === -1 && e.style.setProperty(r, A.getPropertyValue(r));
    }
    return e;
  }, sF = function(A) {
    var e = "";
    return A && (e += "<!DOCTYPE ", A.name && (e += A.name), A.internalSubset && (e += A.internalSubset), A.publicId && (e += '"' + A.publicId + '"'), A.systemId && (e += '"' + A.systemId + '"'), e += ">"), e;
  }, lF = function(A, e, t) {
    A && A.defaultView && (e !== A.defaultView.pageXOffset || t !== A.defaultView.pageYOffset) && A.defaultView.scrollTo(e, t);
  }, cF = function(A) {
    var e = A[0], t = A[1], r = A[2];
    e.scrollLeft = t, e.scrollTop = r;
  }, uF = ":before", dF = ":after", Xa = "___html2canvas___pseudoelement_before", ja = "___html2canvas___pseudoelement_after", Wc = `{
    content: "" !important;
    display: none !important;
}`, fF = function(A) {
    gF(A, "." + Xa + uF + Wc + `
         .` + ja + dF + Wc);
  }, gF = function(A, e) {
    var t = A.ownerDocument;
    if (t) {
      var r = t.createElement("style");
      r.textContent = e, A.appendChild(r);
    }
  }, wf = (function() {
    function A() {
    }
    return A.getOrigin = function(e) {
      var t = A._link;
      return t ? (t.href = e, t.href = t.href, t.protocol + t.hostname + t.port) : "about:blank";
    }, A.isSameOrigin = function(e) {
      return A.getOrigin(e) === A._origin;
    }, A.setContext = function(e) {
      A._link = e.document.createElement("a"), A._origin = A.getOrigin(e.location.href);
    }, A._origin = "about:blank", A;
  })(), pF = (function() {
    function A(e, t) {
      this.context = e, this._options = t, this._cache = {};
    }
    return A.prototype.addImage = function(e) {
      var t = Promise.resolve();
      return this.has(e) || (ea(e) || CF(e)) && (this._cache[e] = this.loadImage(e)).catch(function() {
      }), t;
    }, A.prototype.match = function(e) {
      return this._cache[e];
    }, A.prototype.loadImage = function(e) {
      return de(this, void 0, void 0, function() {
        var t, r, n, o, i = this;
        return se(this, function(a) {
          switch (a.label) {
            case 0:
              return t = wf.isSameOrigin(e), r = !Aa(e) && this._options.useCORS === true && te.SUPPORT_CORS_IMAGES && !t, n = !Aa(e) && !t && !ea(e) && typeof this._options.proxy == "string" && te.SUPPORT_CORS_XHR && !r, !t && this._options.allowTaint === false && !Aa(e) && !ea(e) && !n && !r ? [
                2
              ] : (o = e, n ? [
                4,
                this.proxy(o)
              ] : [
                3,
                2
              ]);
            case 1:
              o = a.sent(), a.label = 2;
            case 2:
              return this.context.logger.debug("Added image " + e.substring(0, 256)), [
                4,
                new Promise(function(l, s) {
                  var c = new Image();
                  c.onload = function() {
                    return l(c);
                  }, c.onerror = s, (wF(o) || r) && (c.crossOrigin = "anonymous"), c.src = o, c.complete === true && setTimeout(function() {
                    return l(c);
                  }, 500), i._options.imageTimeout > 0 && setTimeout(function() {
                    return s("Timed out (" + i._options.imageTimeout + "ms) loading image");
                  }, i._options.imageTimeout);
                })
              ];
            case 3:
              return [
                2,
                a.sent()
              ];
          }
        });
      });
    }, A.prototype.has = function(e) {
      return typeof this._cache[e] < "u";
    }, A.prototype.keys = function() {
      return Promise.resolve(Object.keys(this._cache));
    }, A.prototype.proxy = function(e) {
      var t = this, r = this._options.proxy;
      if (!r) throw new Error("No proxy defined");
      var n = e.substring(0, 256);
      return new Promise(function(o, i) {
        var a = te.SUPPORT_RESPONSE_TYPE ? "blob" : "text", l = new XMLHttpRequest();
        l.onload = function() {
          if (l.status === 200) if (a === "text") o(l.response);
          else {
            var d = new FileReader();
            d.addEventListener("load", function() {
              return o(d.result);
            }, false), d.addEventListener("error", function(u) {
              return i(u);
            }, false), d.readAsDataURL(l.response);
          }
          else i("Failed to proxy resource " + n + " with status code " + l.status);
        }, l.onerror = i;
        var s = r.indexOf("?") > -1 ? "&" : "?";
        if (l.open("GET", "" + r + s + "url=" + encodeURIComponent(e) + "&responseType=" + a), a !== "text" && l instanceof XMLHttpRequest && (l.responseType = a), t._options.imageTimeout) {
          var c = t._options.imageTimeout;
          l.timeout = c, l.ontimeout = function() {
            return i("Timed out (" + c + "ms) proxying " + n);
          };
        }
        l.send();
      });
    }, A;
  })(), BF = /^data:image\/svg\+xml/i, hF = /^data:image\/.*;base64,/i, mF = /^data:image\/.*/i, CF = function(A) {
    return te.SUPPORT_SVG_DRAWING || !vF(A);
  }, Aa = function(A) {
    return mF.test(A);
  }, wF = function(A) {
    return hF.test(A);
  }, ea = function(A) {
    return A.substr(0, 4) === "blob";
  }, vF = function(A) {
    return A.substr(-3).toLowerCase() === "svg" || BF.test(A);
  }, Z = (function() {
    function A(e, t) {
      this.type = 0, this.x = e, this.y = t;
    }
    return A.prototype.add = function(e, t) {
      return new A(this.x + e, this.y + t);
    }, A;
  })(), Jt = function(A, e, t) {
    return new Z(A.x + (e.x - A.x) * t, A.y + (e.y - A.y) * t);
  }, Vn = (function() {
    function A(e, t, r, n) {
      this.type = 1, this.start = e, this.startControl = t, this.endControl = r, this.end = n;
    }
    return A.prototype.subdivide = function(e, t) {
      var r = Jt(this.start, this.startControl, e), n = Jt(this.startControl, this.endControl, e), o = Jt(this.endControl, this.end, e), i = Jt(r, n, e), a = Jt(n, o, e), l = Jt(i, a, e);
      return t ? new A(this.start, r, i, l) : new A(l, a, o, this.end);
    }, A.prototype.add = function(e, t) {
      return new A(this.start.add(e, t), this.startControl.add(e, t), this.endControl.add(e, t), this.end.add(e, t));
    }, A.prototype.reverse = function() {
      return new A(this.end, this.endControl, this.startControl, this.start);
    }, A;
  })(), Fe = function(A) {
    return A.type === 1;
  }, yF = /* @__PURE__ */ (function() {
    function A(e) {
      var t = e.styles, r = e.bounds, n = Or(t.borderTopLeftRadius, r.width, r.height), o = n[0], i = n[1], a = Or(t.borderTopRightRadius, r.width, r.height), l = a[0], s = a[1], c = Or(t.borderBottomRightRadius, r.width, r.height), d = c[0], u = c[1], f = Or(t.borderBottomLeftRadius, r.width, r.height), g = f[0], p = f[1], Q = [];
      Q.push((o + l) / r.width), Q.push((g + d) / r.width), Q.push((i + p) / r.height), Q.push((s + u) / r.height);
      var m = Math.max.apply(Math, Q);
      m > 1 && (o /= m, i /= m, l /= m, s /= m, d /= m, u /= m, g /= m, p /= m);
      var F = r.width - l, w = r.height - u, v = r.width - d, E = r.height - p, C = t.borderTopWidth, x = t.borderRightWidth, I = t.borderBottomWidth, T = t.borderLeftWidth, B = SA(t.paddingTop, e.bounds.width), S = SA(t.paddingRight, e.bounds.width), D = SA(t.paddingBottom, e.bounds.width), O = SA(t.paddingLeft, e.bounds.width);
      this.topLeftBorderDoubleOuterBox = o > 0 || i > 0 ? kA(r.left + T / 3, r.top + C / 3, o - T / 3, i - C / 3, vA.TOP_LEFT) : new Z(r.left + T / 3, r.top + C / 3), this.topRightBorderDoubleOuterBox = o > 0 || i > 0 ? kA(r.left + F, r.top + C / 3, l - x / 3, s - C / 3, vA.TOP_RIGHT) : new Z(r.left + r.width - x / 3, r.top + C / 3), this.bottomRightBorderDoubleOuterBox = d > 0 || u > 0 ? kA(r.left + v, r.top + w, d - x / 3, u - I / 3, vA.BOTTOM_RIGHT) : new Z(r.left + r.width - x / 3, r.top + r.height - I / 3), this.bottomLeftBorderDoubleOuterBox = g > 0 || p > 0 ? kA(r.left + T / 3, r.top + E, g - T / 3, p - I / 3, vA.BOTTOM_LEFT) : new Z(r.left + T / 3, r.top + r.height - I / 3), this.topLeftBorderDoubleInnerBox = o > 0 || i > 0 ? kA(r.left + T * 2 / 3, r.top + C * 2 / 3, o - T * 2 / 3, i - C * 2 / 3, vA.TOP_LEFT) : new Z(r.left + T * 2 / 3, r.top + C * 2 / 3), this.topRightBorderDoubleInnerBox = o > 0 || i > 0 ? kA(r.left + F, r.top + C * 2 / 3, l - x * 2 / 3, s - C * 2 / 3, vA.TOP_RIGHT) : new Z(r.left + r.width - x * 2 / 3, r.top + C * 2 / 3), this.bottomRightBorderDoubleInnerBox = d > 0 || u > 0 ? kA(r.left + v, r.top + w, d - x * 2 / 3, u - I * 2 / 3, vA.BOTTOM_RIGHT) : new Z(r.left + r.width - x * 2 / 3, r.top + r.height - I * 2 / 3), this.bottomLeftBorderDoubleInnerBox = g > 0 || p > 0 ? kA(r.left + T * 2 / 3, r.top + E, g - T * 2 / 3, p - I * 2 / 3, vA.BOTTOM_LEFT) : new Z(r.left + T * 2 / 3, r.top + r.height - I * 2 / 3), this.topLeftBorderStroke = o > 0 || i > 0 ? kA(r.left + T / 2, r.top + C / 2, o - T / 2, i - C / 2, vA.TOP_LEFT) : new Z(r.left + T / 2, r.top + C / 2), this.topRightBorderStroke = o > 0 || i > 0 ? kA(r.left + F, r.top + C / 2, l - x / 2, s - C / 2, vA.TOP_RIGHT) : new Z(r.left + r.width - x / 2, r.top + C / 2), this.bottomRightBorderStroke = d > 0 || u > 0 ? kA(r.left + v, r.top + w, d - x / 2, u - I / 2, vA.BOTTOM_RIGHT) : new Z(r.left + r.width - x / 2, r.top + r.height - I / 2), this.bottomLeftBorderStroke = g > 0 || p > 0 ? kA(r.left + T / 2, r.top + E, g - T / 2, p - I / 2, vA.BOTTOM_LEFT) : new Z(r.left + T / 2, r.top + r.height - I / 2), this.topLeftBorderBox = o > 0 || i > 0 ? kA(r.left, r.top, o, i, vA.TOP_LEFT) : new Z(r.left, r.top), this.topRightBorderBox = l > 0 || s > 0 ? kA(r.left + F, r.top, l, s, vA.TOP_RIGHT) : new Z(r.left + r.width, r.top), this.bottomRightBorderBox = d > 0 || u > 0 ? kA(r.left + v, r.top + w, d, u, vA.BOTTOM_RIGHT) : new Z(r.left + r.width, r.top + r.height), this.bottomLeftBorderBox = g > 0 || p > 0 ? kA(r.left, r.top + E, g, p, vA.BOTTOM_LEFT) : new Z(r.left, r.top + r.height), this.topLeftPaddingBox = o > 0 || i > 0 ? kA(r.left + T, r.top + C, Math.max(0, o - T), Math.max(0, i - C), vA.TOP_LEFT) : new Z(r.left + T, r.top + C), this.topRightPaddingBox = l > 0 || s > 0 ? kA(r.left + Math.min(F, r.width - x), r.top + C, F > r.width + x ? 0 : Math.max(0, l - x), Math.max(0, s - C), vA.TOP_RIGHT) : new Z(r.left + r.width - x, r.top + C), this.bottomRightPaddingBox = d > 0 || u > 0 ? kA(r.left + Math.min(v, r.width - T), r.top + Math.min(w, r.height - I), Math.max(0, d - x), Math.max(0, u - I), vA.BOTTOM_RIGHT) : new Z(r.left + r.width - x, r.top + r.height - I), this.bottomLeftPaddingBox = g > 0 || p > 0 ? kA(r.left + T, r.top + Math.min(E, r.height - I), Math.max(0, g - T), Math.max(0, p - I), vA.BOTTOM_LEFT) : new Z(r.left + T, r.top + r.height - I), this.topLeftContentBox = o > 0 || i > 0 ? kA(r.left + T + O, r.top + C + B, Math.max(0, o - (T + O)), Math.max(0, i - (C + B)), vA.TOP_LEFT) : new Z(r.left + T + O, r.top + C + B), this.topRightContentBox = l > 0 || s > 0 ? kA(r.left + Math.min(F, r.width + T + O), r.top + C + B, F > r.width + T + O ? 0 : l - T + O, s - (C + B), vA.TOP_RIGHT) : new Z(r.left + r.width - (x + S), r.top + C + B), this.bottomRightContentBox = d > 0 || u > 0 ? kA(r.left + Math.min(v, r.width - (T + O)), r.top + Math.min(w, r.height + C + B), Math.max(0, d - (x + S)), u - (I + D), vA.BOTTOM_RIGHT) : new Z(r.left + r.width - (x + S), r.top + r.height - (I + D)), this.bottomLeftContentBox = g > 0 || p > 0 ? kA(r.left + T + O, r.top + E, Math.max(0, g - (T + O)), p - (I + D), vA.BOTTOM_LEFT) : new Z(r.left + T + O, r.top + r.height - (I + D));
    }
    return A;
  })(), vA;
  (function(A) {
    A[A.TOP_LEFT = 0] = "TOP_LEFT", A[A.TOP_RIGHT = 1] = "TOP_RIGHT", A[A.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", A[A.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
  })(vA || (vA = {}));
  var kA = function(A, e, t, r, n) {
    var o = 4 * ((Math.sqrt(2) - 1) / 3), i = t * o, a = r * o, l = A + t, s = e + r;
    switch (n) {
      case vA.TOP_LEFT:
        return new Vn(new Z(A, s), new Z(A, s - a), new Z(l - i, e), new Z(l, e));
      case vA.TOP_RIGHT:
        return new Vn(new Z(A, e), new Z(A + i, e), new Z(l, s - a), new Z(l, s));
      case vA.BOTTOM_RIGHT:
        return new Vn(new Z(l, e), new Z(l, e + a), new Z(A + i, s), new Z(A, s));
      case vA.BOTTOM_LEFT:
      default:
        return new Vn(new Z(l, s), new Z(l - i, s), new Z(A, e + a), new Z(A, e));
    }
  }, Uo = function(A) {
    return [
      A.topLeftBorderBox,
      A.topRightBorderBox,
      A.bottomRightBorderBox,
      A.bottomLeftBorderBox
    ];
  }, QF = function(A) {
    return [
      A.topLeftContentBox,
      A.topRightContentBox,
      A.bottomRightContentBox,
      A.bottomLeftContentBox
    ];
  }, Eo = function(A) {
    return [
      A.topLeftPaddingBox,
      A.topRightPaddingBox,
      A.bottomRightPaddingBox,
      A.bottomLeftPaddingBox
    ];
  }, bF = /* @__PURE__ */ (function() {
    function A(e, t, r) {
      this.offsetX = e, this.offsetY = t, this.matrix = r, this.type = 0, this.target = 6;
    }
    return A;
  })(), $n = /* @__PURE__ */ (function() {
    function A(e, t) {
      this.path = e, this.target = t, this.type = 1;
    }
    return A;
  })(), FF = /* @__PURE__ */ (function() {
    function A(e) {
      this.opacity = e, this.type = 2, this.target = 6;
    }
    return A;
  })(), UF = function(A) {
    return A.type === 0;
  }, vf = function(A) {
    return A.type === 1;
  }, EF = function(A) {
    return A.type === 2;
  }, zc = function(A, e) {
    return A.length === e.length ? A.some(function(t, r) {
      return t === e[r];
    }) : false;
  }, SF = function(A, e, t, r, n) {
    return A.map(function(o, i) {
      switch (i) {
        case 0:
          return o.add(e, t);
        case 1:
          return o.add(e + r, t);
        case 2:
          return o.add(e + r, t + n);
        case 3:
          return o.add(e, t + n);
      }
      return o;
    });
  }, yf = /* @__PURE__ */ (function() {
    function A(e) {
      this.element = e, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
    }
    return A;
  })(), Qf = (function() {
    function A(e, t) {
      if (this.container = e, this.parent = t, this.effects = [], this.curves = new yF(this.container), this.container.styles.opacity < 1 && this.effects.push(new FF(this.container.styles.opacity)), this.container.styles.transform !== null) {
        var r = this.container.bounds.left + this.container.styles.transformOrigin[0].number, n = this.container.bounds.top + this.container.styles.transformOrigin[1].number, o = this.container.styles.transform;
        this.effects.push(new bF(r, n, o));
      }
      if (this.container.styles.overflowX !== 0) {
        var i = Uo(this.curves), a = Eo(this.curves);
        zc(i, a) ? this.effects.push(new $n(i, 6)) : (this.effects.push(new $n(i, 2)), this.effects.push(new $n(a, 4)));
      }
    }
    return A.prototype.getEffects = function(e) {
      for (var t = [
        2,
        3
      ].indexOf(this.container.styles.position) === -1, r = this.parent, n = this.effects.slice(0); r; ) {
        var o = r.effects.filter(function(l) {
          return !vf(l);
        });
        if (t || r.container.styles.position !== 0 || !r.parent) {
          if (n.unshift.apply(n, o), t = [
            2,
            3
          ].indexOf(r.container.styles.position) === -1, r.container.styles.overflowX !== 0) {
            var i = Uo(r.curves), a = Eo(r.curves);
            zc(i, a) || n.unshift(new $n(a, 6));
          }
        } else n.unshift.apply(n, o);
        r = r.parent;
      }
      return n.filter(function(l) {
        return XA(l.target, e);
      });
    }, A;
  })(), Ja = function(A, e, t, r) {
    A.container.elements.forEach(function(n) {
      var o = XA(n.flags, 4), i = XA(n.flags, 2), a = new Qf(n, A);
      XA(n.styles.display, 2048) && r.push(a);
      var l = XA(n.flags, 8) ? [] : r;
      if (o || i) {
        var s = o || n.styles.isPositioned() ? t : e, c = new yf(a);
        if (n.styles.isPositioned() || n.styles.opacity < 1 || n.styles.isTransformed()) {
          var d = n.styles.zIndex.order;
          if (d < 0) {
            var u = 0;
            s.negativeZIndex.some(function(g, p) {
              return d > g.element.container.styles.zIndex.order ? (u = p, false) : u > 0;
            }), s.negativeZIndex.splice(u, 0, c);
          } else if (d > 0) {
            var f = 0;
            s.positiveZIndex.some(function(g, p) {
              return d >= g.element.container.styles.zIndex.order ? (f = p + 1, false) : f > 0;
            }), s.positiveZIndex.splice(f, 0, c);
          } else s.zeroOrAutoZIndexOrTransformedOrOpacity.push(c);
        } else n.styles.isFloating() ? s.nonPositionedFloats.push(c) : s.nonPositionedInlineLevel.push(c);
        Ja(a, c, o ? c : t, l);
      } else n.styles.isInlineLevel() ? e.inlineLevel.push(a) : e.nonInlineLevel.push(a), Ja(a, e, t, l);
      XA(n.flags, 8) && bf(n, l);
    });
  }, bf = function(A, e) {
    for (var t = A instanceof $a ? A.start : 1, r = A instanceof $a ? A.reversed : false, n = 0; n < e.length; n++) {
      var o = e[n];
      o.container instanceof af && typeof o.container.value == "number" && o.container.value !== 0 && (t = o.container.value), o.listValue = en(t, o.container.styles.listStyleType, true), t += r ? -1 : 1;
    }
  }, xF = function(A) {
    var e = new Qf(A, null), t = new yf(e), r = [];
    return Ja(e, t, t, r), bf(e.container, r), t;
  }, Xc = function(A, e) {
    switch (e) {
      case 0:
        return Ee(A.topLeftBorderBox, A.topLeftPaddingBox, A.topRightBorderBox, A.topRightPaddingBox);
      case 1:
        return Ee(A.topRightBorderBox, A.topRightPaddingBox, A.bottomRightBorderBox, A.bottomRightPaddingBox);
      case 2:
        return Ee(A.bottomRightBorderBox, A.bottomRightPaddingBox, A.bottomLeftBorderBox, A.bottomLeftPaddingBox);
      default:
        return Ee(A.bottomLeftBorderBox, A.bottomLeftPaddingBox, A.topLeftBorderBox, A.topLeftPaddingBox);
    }
  }, IF = function(A, e) {
    switch (e) {
      case 0:
        return Ee(A.topLeftBorderBox, A.topLeftBorderDoubleOuterBox, A.topRightBorderBox, A.topRightBorderDoubleOuterBox);
      case 1:
        return Ee(A.topRightBorderBox, A.topRightBorderDoubleOuterBox, A.bottomRightBorderBox, A.bottomRightBorderDoubleOuterBox);
      case 2:
        return Ee(A.bottomRightBorderBox, A.bottomRightBorderDoubleOuterBox, A.bottomLeftBorderBox, A.bottomLeftBorderDoubleOuterBox);
      default:
        return Ee(A.bottomLeftBorderBox, A.bottomLeftBorderDoubleOuterBox, A.topLeftBorderBox, A.topLeftBorderDoubleOuterBox);
    }
  }, HF = function(A, e) {
    switch (e) {
      case 0:
        return Ee(A.topLeftBorderDoubleInnerBox, A.topLeftPaddingBox, A.topRightBorderDoubleInnerBox, A.topRightPaddingBox);
      case 1:
        return Ee(A.topRightBorderDoubleInnerBox, A.topRightPaddingBox, A.bottomRightBorderDoubleInnerBox, A.bottomRightPaddingBox);
      case 2:
        return Ee(A.bottomRightBorderDoubleInnerBox, A.bottomRightPaddingBox, A.bottomLeftBorderDoubleInnerBox, A.bottomLeftPaddingBox);
      default:
        return Ee(A.bottomLeftBorderDoubleInnerBox, A.bottomLeftPaddingBox, A.topLeftBorderDoubleInnerBox, A.topLeftPaddingBox);
    }
  }, TF = function(A, e) {
    switch (e) {
      case 0:
        return Wn(A.topLeftBorderStroke, A.topRightBorderStroke);
      case 1:
        return Wn(A.topRightBorderStroke, A.bottomRightBorderStroke);
      case 2:
        return Wn(A.bottomRightBorderStroke, A.bottomLeftBorderStroke);
      default:
        return Wn(A.bottomLeftBorderStroke, A.topLeftBorderStroke);
    }
  }, Wn = function(A, e) {
    var t = [];
    return Fe(A) ? t.push(A.subdivide(0.5, false)) : t.push(A), Fe(e) ? t.push(e.subdivide(0.5, true)) : t.push(e), t;
  }, Ee = function(A, e, t, r) {
    var n = [];
    return Fe(A) ? n.push(A.subdivide(0.5, false)) : n.push(A), Fe(t) ? n.push(t.subdivide(0.5, true)) : n.push(t), Fe(r) ? n.push(r.subdivide(0.5, true).reverse()) : n.push(r), Fe(e) ? n.push(e.subdivide(0.5, false).reverse()) : n.push(e), n;
  }, Ff = function(A) {
    var e = A.bounds, t = A.styles;
    return e.add(t.borderLeftWidth, t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth), -(t.borderTopWidth + t.borderBottomWidth));
  }, So = function(A) {
    var e = A.styles, t = A.bounds, r = SA(e.paddingLeft, t.width), n = SA(e.paddingRight, t.width), o = SA(e.paddingTop, t.width), i = SA(e.paddingBottom, t.width);
    return t.add(r + e.borderLeftWidth, o + e.borderTopWidth, -(e.borderRightWidth + e.borderLeftWidth + r + n), -(e.borderTopWidth + e.borderBottomWidth + o + i));
  }, LF = function(A, e) {
    return A === 0 ? e.bounds : A === 2 ? So(e) : Ff(e);
  }, kF = function(A, e) {
    return A === 0 ? e.bounds : A === 2 ? So(e) : Ff(e);
  }, ta = function(A, e, t) {
    var r = LF(er(A.styles.backgroundOrigin, e), A), n = kF(er(A.styles.backgroundClip, e), A), o = RF(er(A.styles.backgroundSize, e), t, r), i = o[0], a = o[1], l = Or(er(A.styles.backgroundPosition, e), r.width - i, r.height - a), s = OF(er(A.styles.backgroundRepeat, e), l, o, r, n), c = Math.round(r.left + l[0]), d = Math.round(r.top + l[1]);
    return [
      s,
      c,
      d,
      i,
      a
    ];
  }, Yt = function(A) {
    return QA(A) && A.value === ar.AUTO;
  }, zn = function(A) {
    return typeof A == "number";
  }, RF = function(A, e, t) {
    var r = e[0], n = e[1], o = e[2], i = A[0], a = A[1];
    if (!i) return [
      0,
      0
    ];
    if (WA(i) && a && WA(a)) return [
      SA(i, t.width),
      SA(a, t.height)
    ];
    var l = zn(o);
    if (QA(i) && (i.value === ar.CONTAIN || i.value === ar.COVER)) {
      if (zn(o)) {
        var s = t.width / t.height;
        return s < o != (i.value === ar.COVER) ? [
          t.width,
          t.width / o
        ] : [
          t.height * o,
          t.height
        ];
      }
      return [
        t.width,
        t.height
      ];
    }
    var c = zn(r), d = zn(n), u = c || d;
    if (Yt(i) && (!a || Yt(a))) {
      if (c && d) return [
        r,
        n
      ];
      if (!l && !u) return [
        t.width,
        t.height
      ];
      if (u && l) {
        var f = c ? r : n * o, g = d ? n : r / o;
        return [
          f,
          g
        ];
      }
      var p = c ? r : t.width, Q = d ? n : t.height;
      return [
        p,
        Q
      ];
    }
    if (l) {
      var m = 0, F = 0;
      return WA(i) ? m = SA(i, t.width) : WA(a) && (F = SA(a, t.height)), Yt(i) ? m = F * o : (!a || Yt(a)) && (F = m / o), [
        m,
        F
      ];
    }
    var w = null, v = null;
    if (WA(i) ? w = SA(i, t.width) : a && WA(a) && (v = SA(a, t.height)), w !== null && (!a || Yt(a)) && (v = c && d ? w / r * n : t.height), v !== null && Yt(i) && (w = c && d ? v / n * r : t.width), w !== null && v !== null) return [
      w,
      v
    ];
    throw new Error("Unable to calculate background-size for element");
  }, er = function(A, e) {
    var t = A[e];
    return typeof t > "u" ? A[0] : t;
  }, OF = function(A, e, t, r, n) {
    var o = e[0], i = e[1], a = t[0], l = t[1];
    switch (A) {
      case 2:
        return [
          new Z(Math.round(r.left), Math.round(r.top + i)),
          new Z(Math.round(r.left + r.width), Math.round(r.top + i)),
          new Z(Math.round(r.left + r.width), Math.round(l + r.top + i)),
          new Z(Math.round(r.left), Math.round(l + r.top + i))
        ];
      case 3:
        return [
          new Z(Math.round(r.left + o), Math.round(r.top)),
          new Z(Math.round(r.left + o + a), Math.round(r.top)),
          new Z(Math.round(r.left + o + a), Math.round(r.height + r.top)),
          new Z(Math.round(r.left + o), Math.round(r.height + r.top))
        ];
      case 1:
        return [
          new Z(Math.round(r.left + o), Math.round(r.top + i)),
          new Z(Math.round(r.left + o + a), Math.round(r.top + i)),
          new Z(Math.round(r.left + o + a), Math.round(r.top + i + l)),
          new Z(Math.round(r.left + o), Math.round(r.top + i + l))
        ];
      default:
        return [
          new Z(Math.round(n.left), Math.round(n.top)),
          new Z(Math.round(n.left + n.width), Math.round(n.top)),
          new Z(Math.round(n.left + n.width), Math.round(n.height + n.top)),
          new Z(Math.round(n.left), Math.round(n.height + n.top))
        ];
    }
  }, KF = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", jc = "Hidden Text", MF = (function() {
    function A(e) {
      this._data = {}, this._document = e;
    }
    return A.prototype.parseMetrics = function(e, t) {
      var r = this._document.createElement("div"), n = this._document.createElement("img"), o = this._document.createElement("span"), i = this._document.body;
      r.style.visibility = "hidden", r.style.fontFamily = e, r.style.fontSize = t, r.style.margin = "0", r.style.padding = "0", r.style.whiteSpace = "nowrap", i.appendChild(r), n.src = KF, n.width = 1, n.height = 1, n.style.margin = "0", n.style.padding = "0", n.style.verticalAlign = "baseline", o.style.fontFamily = e, o.style.fontSize = t, o.style.margin = "0", o.style.padding = "0", o.appendChild(this._document.createTextNode(jc)), r.appendChild(o), r.appendChild(n);
      var a = n.offsetTop - o.offsetTop + 2;
      r.removeChild(o), r.appendChild(this._document.createTextNode(jc)), r.style.lineHeight = "normal", n.style.verticalAlign = "super";
      var l = n.offsetTop - r.offsetTop + 2;
      return i.removeChild(r), {
        baseline: a,
        middle: l
      };
    }, A.prototype.getMetrics = function(e, t) {
      var r = e + " " + t;
      return typeof this._data[r] > "u" && (this._data[r] = this.parseMetrics(e, t)), this._data[r];
    }, A;
  })(), Uf = /* @__PURE__ */ (function() {
    function A(e, t) {
      this.context = e, this.options = t;
    }
    return A;
  })(), DF = 1e4, PF = (function(A) {
    ke(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n._activeEffects = [], n.canvas = r.canvas ? r.canvas : document.createElement("canvas"), n.ctx = n.canvas.getContext("2d"), r.canvas || (n.canvas.width = Math.floor(r.width * r.scale), n.canvas.height = Math.floor(r.height * r.scale), n.canvas.style.width = r.width + "px", n.canvas.style.height = r.height + "px"), n.fontMetrics = new MF(document), n.ctx.scale(n.options.scale, n.options.scale), n.ctx.translate(-r.x, -r.y), n.ctx.textBaseline = "bottom", n._activeEffects = [], n.context.logger.debug("Canvas renderer initialized (" + r.width + "x" + r.height + ") with scale " + r.scale), n;
    }
    return e.prototype.applyEffects = function(t) {
      for (var r = this; this._activeEffects.length; ) this.popEffect();
      t.forEach(function(n) {
        return r.applyEffect(n);
      });
    }, e.prototype.applyEffect = function(t) {
      this.ctx.save(), EF(t) && (this.ctx.globalAlpha = t.opacity), UF(t) && (this.ctx.translate(t.offsetX, t.offsetY), this.ctx.transform(t.matrix[0], t.matrix[1], t.matrix[2], t.matrix[3], t.matrix[4], t.matrix[5]), this.ctx.translate(-t.offsetX, -t.offsetY)), vf(t) && (this.path(t.path), this.ctx.clip()), this._activeEffects.push(t);
    }, e.prototype.popEffect = function() {
      this._activeEffects.pop(), this.ctx.restore();
    }, e.prototype.renderStack = function(t) {
      return de(this, void 0, void 0, function() {
        var r;
        return se(this, function(n) {
          switch (n.label) {
            case 0:
              return r = t.element.container.styles, r.isVisible() ? [
                4,
                this.renderStackContent(t)
              ] : [
                3,
                2
              ];
            case 1:
              n.sent(), n.label = 2;
            case 2:
              return [
                2
              ];
          }
        });
      });
    }, e.prototype.renderNode = function(t) {
      return de(this, void 0, void 0, function() {
        return se(this, function(r) {
          switch (r.label) {
            case 0:
              if (XA(t.container.flags, 16)) debugger;
              return t.container.styles.isVisible() ? [
                4,
                this.renderNodeBackgroundAndBorders(t)
              ] : [
                3,
                3
              ];
            case 1:
              return r.sent(), [
                4,
                this.renderNodeContent(t)
              ];
            case 2:
              r.sent(), r.label = 3;
            case 3:
              return [
                2
              ];
          }
        });
      });
    }, e.prototype.renderTextWithLetterSpacing = function(t, r, n) {
      var o = this;
      if (r === 0) this.ctx.fillText(t.text, t.bounds.left, t.bounds.top + n);
      else {
        var i = Ws(t.text);
        i.reduce(function(a, l) {
          return o.ctx.fillText(l, a, t.bounds.top + n), a + o.ctx.measureText(l).width;
        }, t.bounds.left);
      }
    }, e.prototype.createFontStyle = function(t) {
      var r = t.fontVariant.filter(function(i) {
        return i === "normal" || i === "small-caps";
      }).join(""), n = $F(t.fontFamily).join(", "), o = gn(t.fontSize) ? "" + t.fontSize.number + t.fontSize.unit : t.fontSize.number + "px";
      return [
        [
          t.fontStyle,
          r,
          t.fontWeight,
          o,
          n
        ].join(" "),
        n,
        o
      ];
    }, e.prototype.renderTextNode = function(t, r) {
      return de(this, void 0, void 0, function() {
        var n, o, i, a, l, s, c, d, u = this;
        return se(this, function(f) {
          return n = this.createFontStyle(r), o = n[0], i = n[1], a = n[2], this.ctx.font = o, this.ctx.direction = r.direction === 1 ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", l = this.fontMetrics.getMetrics(i, a), s = l.baseline, c = l.middle, d = r.paintOrder, t.textBounds.forEach(function(g) {
            d.forEach(function(p) {
              switch (p) {
                case 0:
                  u.ctx.fillStyle = JA(r.color), u.renderTextWithLetterSpacing(g, r.letterSpacing, s);
                  var Q = r.textShadow;
                  Q.length && g.text.trim().length && (Q.slice(0).reverse().forEach(function(m) {
                    u.ctx.shadowColor = JA(m.color), u.ctx.shadowOffsetX = m.offsetX.number * u.options.scale, u.ctx.shadowOffsetY = m.offsetY.number * u.options.scale, u.ctx.shadowBlur = m.blur.number, u.renderTextWithLetterSpacing(g, r.letterSpacing, s);
                  }), u.ctx.shadowColor = "", u.ctx.shadowOffsetX = 0, u.ctx.shadowOffsetY = 0, u.ctx.shadowBlur = 0), r.textDecorationLine.length && (u.ctx.fillStyle = JA(r.textDecorationColor || r.color), r.textDecorationLine.forEach(function(m) {
                    switch (m) {
                      case 1:
                        u.ctx.fillRect(g.bounds.left, Math.round(g.bounds.top + s), g.bounds.width, 1);
                        break;
                      case 2:
                        u.ctx.fillRect(g.bounds.left, Math.round(g.bounds.top), g.bounds.width, 1);
                        break;
                      case 3:
                        u.ctx.fillRect(g.bounds.left, Math.ceil(g.bounds.top + c), g.bounds.width, 1);
                        break;
                    }
                  }));
                  break;
                case 1:
                  r.webkitTextStrokeWidth && g.text.trim().length && (u.ctx.strokeStyle = JA(r.webkitTextStrokeColor), u.ctx.lineWidth = r.webkitTextStrokeWidth, u.ctx.lineJoin = window.chrome ? "miter" : "round", u.ctx.strokeText(g.text, g.bounds.left, g.bounds.top + s)), u.ctx.strokeStyle = "", u.ctx.lineWidth = 0, u.ctx.lineJoin = "miter";
                  break;
              }
            });
          }), [
            2
          ];
        });
      });
    }, e.prototype.renderReplacedElement = function(t, r, n) {
      if (n && t.intrinsicWidth > 0 && t.intrinsicHeight > 0) {
        var o = So(t), i = Eo(r);
        this.path(i), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(n, 0, 0, t.intrinsicWidth, t.intrinsicHeight, o.left, o.top, o.width, o.height), this.ctx.restore();
      }
    }, e.prototype.renderNodeContent = function(t) {
      return de(this, void 0, void 0, function() {
        var r, n, o, i, a, l, F, F, s, c, d, u, v, f, g, E, p, Q, m, F, w, v, E;
        return se(this, function(C) {
          switch (C.label) {
            case 0:
              this.applyEffects(t.getEffects(4)), r = t.container, n = t.curves, o = r.styles, i = 0, a = r.textNodes, C.label = 1;
            case 1:
              return i < a.length ? (l = a[i], [
                4,
                this.renderTextNode(l, o)
              ]) : [
                3,
                4
              ];
            case 2:
              C.sent(), C.label = 3;
            case 3:
              return i++, [
                3,
                1
              ];
            case 4:
              if (!(r instanceof rf)) return [
                3,
                8
              ];
              C.label = 5;
            case 5:
              return C.trys.push([
                5,
                7,
                ,
                8
              ]), [
                4,
                this.context.cache.match(r.src)
              ];
            case 6:
              return F = C.sent(), this.renderReplacedElement(r, n, F), [
                3,
                8
              ];
            case 7:
              return C.sent(), this.context.logger.error("Error loading image " + r.src), [
                3,
                8
              ];
            case 8:
              if (r instanceof nf && this.renderReplacedElement(r, n, r.canvas), !(r instanceof of)) return [
                3,
                12
              ];
              C.label = 9;
            case 9:
              return C.trys.push([
                9,
                11,
                ,
                12
              ]), [
                4,
                this.context.cache.match(r.svg)
              ];
            case 10:
              return F = C.sent(), this.renderReplacedElement(r, n, F), [
                3,
                12
              ];
            case 11:
              return C.sent(), this.context.logger.error("Error loading svg " + r.svg.substring(0, 255)), [
                3,
                12
              ];
            case 12:
              return r instanceof cf && r.tree ? (s = new e(this.context, {
                scale: this.options.scale,
                backgroundColor: r.backgroundColor,
                x: 0,
                y: 0,
                width: r.width,
                height: r.height
              }), [
                4,
                s.render(r.tree)
              ]) : [
                3,
                14
              ];
            case 13:
              c = C.sent(), r.width && r.height && this.ctx.drawImage(c, 0, 0, r.width, r.height, r.bounds.left, r.bounds.top, r.bounds.width, r.bounds.height), C.label = 14;
            case 14:
              if (r instanceof zs && (d = Math.min(r.bounds.width, r.bounds.height), r.type === yo ? r.checked && (this.ctx.save(), this.path([
                new Z(r.bounds.left + d * 0.39363, r.bounds.top + d * 0.79),
                new Z(r.bounds.left + d * 0.16, r.bounds.top + d * 0.5549),
                new Z(r.bounds.left + d * 0.27347, r.bounds.top + d * 0.44071),
                new Z(r.bounds.left + d * 0.39694, r.bounds.top + d * 0.5649),
                new Z(r.bounds.left + d * 0.72983, r.bounds.top + d * 0.23),
                new Z(r.bounds.left + d * 0.84, r.bounds.top + d * 0.34085),
                new Z(r.bounds.left + d * 0.39363, r.bounds.top + d * 0.79)
              ]), this.ctx.fillStyle = JA(Oc), this.ctx.fill(), this.ctx.restore()) : r.type === Qo && r.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(r.bounds.left + d / 2, r.bounds.top + d / 2, d / 4, 0, Math.PI * 2, true), this.ctx.fillStyle = JA(Oc), this.ctx.fill(), this.ctx.restore())), _F(r) && r.value.length) {
                switch (u = this.createFontStyle(o), v = u[0], f = u[1], g = this.fontMetrics.getMetrics(v, f).baseline, this.ctx.font = v, this.ctx.fillStyle = JA(o.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = GF(r.styles.textAlign), E = So(r), p = 0, r.styles.textAlign) {
                  case 1:
                    p += E.width / 2;
                    break;
                  case 2:
                    p += E.width;
                    break;
                }
                Q = E.add(p, 0, 0, -E.height / 2 + 1), this.ctx.save(), this.path([
                  new Z(E.left, E.top),
                  new Z(E.left + E.width, E.top),
                  new Z(E.left + E.width, E.top + E.height),
                  new Z(E.left, E.top + E.height)
                ]), this.ctx.clip(), this.renderTextWithLetterSpacing(new Wr(r.value, Q), o.letterSpacing, g), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
              }
              if (!XA(r.styles.display, 2048)) return [
                3,
                20
              ];
              if (r.styles.listStyleImage === null) return [
                3,
                19
              ];
              if (m = r.styles.listStyleImage, m.type !== 0) return [
                3,
                18
              ];
              F = void 0, w = m.url, C.label = 15;
            case 15:
              return C.trys.push([
                15,
                17,
                ,
                18
              ]), [
                4,
                this.context.cache.match(w)
              ];
            case 16:
              return F = C.sent(), this.ctx.drawImage(F, r.bounds.left - (F.width + 10), r.bounds.top), [
                3,
                18
              ];
            case 17:
              return C.sent(), this.context.logger.error("Error loading list-style-image " + w), [
                3,
                18
              ];
            case 18:
              return [
                3,
                20
              ];
            case 19:
              t.listValue && r.styles.listStyleType !== -1 && (v = this.createFontStyle(o)[0], this.ctx.font = v, this.ctx.fillStyle = JA(o.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", E = new ot(r.bounds.left, r.bounds.top + SA(r.styles.paddingTop, r.bounds.width), r.bounds.width, Cc(o.lineHeight, o.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new Wr(t.listValue, E), o.letterSpacing, Cc(o.lineHeight, o.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), C.label = 20;
            case 20:
              return [
                2
              ];
          }
        });
      });
    }, e.prototype.renderStackContent = function(t) {
      return de(this, void 0, void 0, function() {
        var r, n, m, o, i, m, a, l, m, s, c, m, d, u, m, f, g, m, p, Q, m;
        return se(this, function(F) {
          switch (F.label) {
            case 0:
              if (XA(t.element.container.flags, 16)) debugger;
              return [
                4,
                this.renderNodeBackgroundAndBorders(t.element)
              ];
            case 1:
              F.sent(), r = 0, n = t.negativeZIndex, F.label = 2;
            case 2:
              return r < n.length ? (m = n[r], [
                4,
                this.renderStack(m)
              ]) : [
                3,
                5
              ];
            case 3:
              F.sent(), F.label = 4;
            case 4:
              return r++, [
                3,
                2
              ];
            case 5:
              return [
                4,
                this.renderNodeContent(t.element)
              ];
            case 6:
              F.sent(), o = 0, i = t.nonInlineLevel, F.label = 7;
            case 7:
              return o < i.length ? (m = i[o], [
                4,
                this.renderNode(m)
              ]) : [
                3,
                10
              ];
            case 8:
              F.sent(), F.label = 9;
            case 9:
              return o++, [
                3,
                7
              ];
            case 10:
              a = 0, l = t.nonPositionedFloats, F.label = 11;
            case 11:
              return a < l.length ? (m = l[a], [
                4,
                this.renderStack(m)
              ]) : [
                3,
                14
              ];
            case 12:
              F.sent(), F.label = 13;
            case 13:
              return a++, [
                3,
                11
              ];
            case 14:
              s = 0, c = t.nonPositionedInlineLevel, F.label = 15;
            case 15:
              return s < c.length ? (m = c[s], [
                4,
                this.renderStack(m)
              ]) : [
                3,
                18
              ];
            case 16:
              F.sent(), F.label = 17;
            case 17:
              return s++, [
                3,
                15
              ];
            case 18:
              d = 0, u = t.inlineLevel, F.label = 19;
            case 19:
              return d < u.length ? (m = u[d], [
                4,
                this.renderNode(m)
              ]) : [
                3,
                22
              ];
            case 20:
              F.sent(), F.label = 21;
            case 21:
              return d++, [
                3,
                19
              ];
            case 22:
              f = 0, g = t.zeroOrAutoZIndexOrTransformedOrOpacity, F.label = 23;
            case 23:
              return f < g.length ? (m = g[f], [
                4,
                this.renderStack(m)
              ]) : [
                3,
                26
              ];
            case 24:
              F.sent(), F.label = 25;
            case 25:
              return f++, [
                3,
                23
              ];
            case 26:
              p = 0, Q = t.positiveZIndex, F.label = 27;
            case 27:
              return p < Q.length ? (m = Q[p], [
                4,
                this.renderStack(m)
              ]) : [
                3,
                30
              ];
            case 28:
              F.sent(), F.label = 29;
            case 29:
              return p++, [
                3,
                27
              ];
            case 30:
              return [
                2
              ];
          }
        });
      });
    }, e.prototype.mask = function(t) {
      this.ctx.beginPath(), this.ctx.moveTo(0, 0), this.ctx.lineTo(this.canvas.width, 0), this.ctx.lineTo(this.canvas.width, this.canvas.height), this.ctx.lineTo(0, this.canvas.height), this.ctx.lineTo(0, 0), this.formatPath(t.slice(0).reverse()), this.ctx.closePath();
    }, e.prototype.path = function(t) {
      this.ctx.beginPath(), this.formatPath(t), this.ctx.closePath();
    }, e.prototype.formatPath = function(t) {
      var r = this;
      t.forEach(function(n, o) {
        var i = Fe(n) ? n.start : n;
        o === 0 ? r.ctx.moveTo(i.x, i.y) : r.ctx.lineTo(i.x, i.y), Fe(n) && r.ctx.bezierCurveTo(n.startControl.x, n.startControl.y, n.endControl.x, n.endControl.y, n.end.x, n.end.y);
      });
    }, e.prototype.renderRepeat = function(t, r, n, o) {
      this.path(t), this.ctx.fillStyle = r, this.ctx.translate(n, o), this.ctx.fill(), this.ctx.translate(-n, -o);
    }, e.prototype.resizeImage = function(t, r, n) {
      var o;
      if (t.width === r && t.height === n) return t;
      var i = (o = this.canvas.ownerDocument) !== null && o !== void 0 ? o : document, a = i.createElement("canvas");
      a.width = Math.max(1, r), a.height = Math.max(1, n);
      var l = a.getContext("2d");
      return l.drawImage(t, 0, 0, t.width, t.height, 0, 0, r, n), a;
    }, e.prototype.renderBackgroundImage = function(t) {
      return de(this, void 0, void 0, function() {
        var r, n, o, i, a, l;
        return se(this, function(s) {
          switch (s.label) {
            case 0:
              r = t.styles.backgroundImage.length - 1, n = function(c) {
                var d, u, f, B, M, W, O, N, I, g, B, M, W, O, N, p, Q, m, F, w, v, E, C, x, I, T, B, S, D, O, N, k, M, W, nA, P, X, AA, j, R, $, V;
                return se(this, function(Y) {
                  switch (Y.label) {
                    case 0:
                      if (c.type !== 0) return [
                        3,
                        5
                      ];
                      d = void 0, u = c.url, Y.label = 1;
                    case 1:
                      return Y.trys.push([
                        1,
                        3,
                        ,
                        4
                      ]), [
                        4,
                        o.context.cache.match(u)
                      ];
                    case 2:
                      return d = Y.sent(), [
                        3,
                        4
                      ];
                    case 3:
                      return Y.sent(), o.context.logger.error("Error loading background-image " + u), [
                        3,
                        4
                      ];
                    case 4:
                      return d && (f = ta(t, r, [
                        d.width,
                        d.height,
                        d.width / d.height
                      ]), B = f[0], M = f[1], W = f[2], O = f[3], N = f[4], I = o.ctx.createPattern(o.resizeImage(d, O, N), "repeat"), o.renderRepeat(B, I, M, W)), [
                        3,
                        6
                      ];
                    case 5:
                      Uy(c) ? (g = ta(t, r, [
                        null,
                        null,
                        null
                      ]), B = g[0], M = g[1], W = g[2], O = g[3], N = g[4], p = vy(c.angle, O, N), Q = p[0], m = p[1], F = p[2], w = p[3], v = p[4], E = document.createElement("canvas"), E.width = O, E.height = N, C = E.getContext("2d"), x = C.createLinearGradient(m, w, F, v), hc(c.stops, Q).forEach(function(dA) {
                        return x.addColorStop(dA.stop, JA(dA.color));
                      }), C.fillStyle = x, C.fillRect(0, 0, O, N), O > 0 && N > 0 && (I = o.ctx.createPattern(E, "repeat"), o.renderRepeat(B, I, M, W))) : Ey(c) && (T = ta(t, r, [
                        null,
                        null,
                        null
                      ]), B = T[0], S = T[1], D = T[2], O = T[3], N = T[4], k = c.position.length === 0 ? [
                        Gs
                      ] : c.position, M = SA(k[0], O), W = SA(k[k.length - 1], N), nA = yy(c, M, W, O, N), P = nA[0], X = nA[1], P > 0 && X > 0 && (AA = o.ctx.createRadialGradient(S + M, D + W, 0, S + M, D + W, P), hc(c.stops, P * 2).forEach(function(dA) {
                        return AA.addColorStop(dA.stop, JA(dA.color));
                      }), o.path(B), o.ctx.fillStyle = AA, P !== X ? (j = t.bounds.left + 0.5 * t.bounds.width, R = t.bounds.top + 0.5 * t.bounds.height, $ = X / P, V = 1 / $, o.ctx.save(), o.ctx.translate(j, R), o.ctx.transform(1, 0, 0, $, 0, 0), o.ctx.translate(-j, -R), o.ctx.fillRect(S, V * (D - R) + R, O, N * V), o.ctx.restore()) : o.ctx.fill())), Y.label = 6;
                    case 6:
                      return r--, [
                        2
                      ];
                  }
                });
              }, o = this, i = 0, a = t.styles.backgroundImage.slice(0).reverse(), s.label = 1;
            case 1:
              return i < a.length ? (l = a[i], [
                5,
                n(l)
              ]) : [
                3,
                4
              ];
            case 2:
              s.sent(), s.label = 3;
            case 3:
              return i++, [
                3,
                1
              ];
            case 4:
              return [
                2
              ];
          }
        });
      });
    }, e.prototype.renderSolidBorder = function(t, r, n) {
      return de(this, void 0, void 0, function() {
        return se(this, function(o) {
          return this.path(Xc(n, r)), this.ctx.fillStyle = JA(t), this.ctx.fill(), [
            2
          ];
        });
      });
    }, e.prototype.renderDoubleBorder = function(t, r, n, o) {
      return de(this, void 0, void 0, function() {
        var i, a;
        return se(this, function(l) {
          switch (l.label) {
            case 0:
              return r < 3 ? [
                4,
                this.renderSolidBorder(t, n, o)
              ] : [
                3,
                2
              ];
            case 1:
              return l.sent(), [
                2
              ];
            case 2:
              return i = IF(o, n), this.path(i), this.ctx.fillStyle = JA(t), this.ctx.fill(), a = HF(o, n), this.path(a), this.ctx.fill(), [
                2
              ];
          }
        });
      });
    }, e.prototype.renderNodeBackgroundAndBorders = function(t) {
      return de(this, void 0, void 0, function() {
        var r, n, o, i, a, l, s, c, d = this;
        return se(this, function(u) {
          switch (u.label) {
            case 0:
              return this.applyEffects(t.getEffects(2)), r = t.container.styles, n = !ht(r.backgroundColor) || r.backgroundImage.length, o = [
                {
                  style: r.borderTopStyle,
                  color: r.borderTopColor,
                  width: r.borderTopWidth
                },
                {
                  style: r.borderRightStyle,
                  color: r.borderRightColor,
                  width: r.borderRightWidth
                },
                {
                  style: r.borderBottomStyle,
                  color: r.borderBottomColor,
                  width: r.borderBottomWidth
                },
                {
                  style: r.borderLeftStyle,
                  color: r.borderLeftColor,
                  width: r.borderLeftWidth
                }
              ], i = NF(er(r.backgroundClip, 0), t.curves), n || r.boxShadow.length ? (this.ctx.save(), this.path(i), this.ctx.clip(), ht(r.backgroundColor) || (this.ctx.fillStyle = JA(r.backgroundColor), this.ctx.fill()), [
                4,
                this.renderBackgroundImage(t.container)
              ]) : [
                3,
                2
              ];
            case 1:
              u.sent(), this.ctx.restore(), r.boxShadow.slice(0).reverse().forEach(function(f) {
                d.ctx.save();
                var g = Uo(t.curves), p = f.inset ? 0 : DF, Q = SF(g, -p + (f.inset ? 1 : -1) * f.spread.number, (f.inset ? 1 : -1) * f.spread.number, f.spread.number * (f.inset ? -2 : 2), f.spread.number * (f.inset ? -2 : 2));
                f.inset ? (d.path(g), d.ctx.clip(), d.mask(Q)) : (d.mask(g), d.ctx.clip(), d.path(Q)), d.ctx.shadowOffsetX = f.offsetX.number + p, d.ctx.shadowOffsetY = f.offsetY.number, d.ctx.shadowColor = JA(f.color), d.ctx.shadowBlur = f.blur.number, d.ctx.fillStyle = f.inset ? JA(f.color) : "rgba(0,0,0,1)", d.ctx.fill(), d.ctx.restore();
              }), u.label = 2;
            case 2:
              a = 0, l = 0, s = o, u.label = 3;
            case 3:
              return l < s.length ? (c = s[l], c.style !== 0 && !ht(c.color) && c.width > 0 ? c.style !== 2 ? [
                3,
                5
              ] : [
                4,
                this.renderDashedDottedBorder(c.color, c.width, a, t.curves, 2)
              ] : [
                3,
                11
              ]) : [
                3,
                13
              ];
            case 4:
              return u.sent(), [
                3,
                11
              ];
            case 5:
              return c.style !== 3 ? [
                3,
                7
              ] : [
                4,
                this.renderDashedDottedBorder(c.color, c.width, a, t.curves, 3)
              ];
            case 6:
              return u.sent(), [
                3,
                11
              ];
            case 7:
              return c.style !== 4 ? [
                3,
                9
              ] : [
                4,
                this.renderDoubleBorder(c.color, c.width, a, t.curves)
              ];
            case 8:
              return u.sent(), [
                3,
                11
              ];
            case 9:
              return [
                4,
                this.renderSolidBorder(c.color, a, t.curves)
              ];
            case 10:
              u.sent(), u.label = 11;
            case 11:
              a++, u.label = 12;
            case 12:
              return l++, [
                3,
                3
              ];
            case 13:
              return [
                2
              ];
          }
        });
      });
    }, e.prototype.renderDashedDottedBorder = function(t, r, n, o, i) {
      return de(this, void 0, void 0, function() {
        var a, l, s, c, d, u, f, g, p, Q, m, F, w, v, E, C, E, C;
        return se(this, function(x) {
          return this.ctx.save(), a = TF(o, n), l = Xc(o, n), i === 2 && (this.path(l), this.ctx.clip()), Fe(l[0]) ? (s = l[0].start.x, c = l[0].start.y) : (s = l[0].x, c = l[0].y), Fe(l[1]) ? (d = l[1].end.x, u = l[1].end.y) : (d = l[1].x, u = l[1].y), n === 0 || n === 2 ? f = Math.abs(s - d) : f = Math.abs(c - u), this.ctx.beginPath(), i === 3 ? this.formatPath(a) : this.formatPath(l.slice(0, 2)), g = r < 3 ? r * 3 : r * 2, p = r < 3 ? r * 2 : r, i === 3 && (g = r, p = r), Q = true, f <= g * 2 ? Q = false : f <= g * 2 + p ? (m = f / (2 * g + p), g *= m, p *= m) : (F = Math.floor((f + p) / (g + p)), w = (f - F * g) / (F - 1), v = (f - (F + 1) * g) / F, p = v <= 0 || Math.abs(p - w) < Math.abs(p - v) ? w : v), Q && (i === 3 ? this.ctx.setLineDash([
            0,
            g + p
          ]) : this.ctx.setLineDash([
            g,
            p
          ])), i === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = r) : this.ctx.lineWidth = r * 2 + 1.1, this.ctx.strokeStyle = JA(t), this.ctx.stroke(), this.ctx.setLineDash([]), i === 2 && (Fe(l[0]) && (E = l[3], C = l[0], this.ctx.beginPath(), this.formatPath([
            new Z(E.end.x, E.end.y),
            new Z(C.start.x, C.start.y)
          ]), this.ctx.stroke()), Fe(l[1]) && (E = l[1], C = l[2], this.ctx.beginPath(), this.formatPath([
            new Z(E.end.x, E.end.y),
            new Z(C.start.x, C.start.y)
          ]), this.ctx.stroke())), this.ctx.restore(), [
            2
          ];
        });
      });
    }, e.prototype.render = function(t) {
      return de(this, void 0, void 0, function() {
        var r;
        return se(this, function(n) {
          switch (n.label) {
            case 0:
              return this.options.backgroundColor && (this.ctx.fillStyle = JA(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), r = xF(t), [
                4,
                this.renderStack(r)
              ];
            case 1:
              return n.sent(), this.applyEffects([]), [
                2,
                this.canvas
              ];
          }
        });
      });
    }, e;
  })(Uf), _F = function(A) {
    return A instanceof lf || A instanceof sf ? true : A instanceof zs && A.type !== Qo && A.type !== yo;
  }, NF = function(A, e) {
    switch (A) {
      case 0:
        return Uo(e);
      case 2:
        return QF(e);
      default:
        return Eo(e);
    }
  }, GF = function(A) {
    switch (A) {
      case 1:
        return "center";
      case 2:
        return "right";
      default:
        return "left";
    }
  }, VF = [
    "-apple-system",
    "system-ui"
  ], $F = function(A) {
    return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? A.filter(function(e) {
      return VF.indexOf(e) === -1;
    }) : A;
  }, WF = (function(A) {
    ke(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.canvas = r.canvas ? r.canvas : document.createElement("canvas"), n.ctx = n.canvas.getContext("2d"), n.options = r, n.canvas.width = Math.floor(r.width * r.scale), n.canvas.height = Math.floor(r.height * r.scale), n.canvas.style.width = r.width + "px", n.canvas.style.height = r.height + "px", n.ctx.scale(n.options.scale, n.options.scale), n.ctx.translate(-r.x, -r.y), n.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + r.width + "x" + r.height + " at " + r.x + "," + r.y + ") with scale " + r.scale), n;
    }
    return e.prototype.render = function(t) {
      return de(this, void 0, void 0, function() {
        var r, n;
        return se(this, function(o) {
          switch (o.label) {
            case 0:
              return r = Va(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, t), [
                4,
                zF(r)
              ];
            case 1:
              return n = o.sent(), this.options.backgroundColor && (this.ctx.fillStyle = JA(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(n, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [
                2,
                this.canvas
              ];
          }
        });
      });
    }, e;
  })(Uf), zF = function(A) {
    return new Promise(function(e, t) {
      var r = new Image();
      r.onload = function() {
        e(r);
      }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(A));
    });
  }, XF = (function() {
    function A(e) {
      var t = e.id, r = e.enabled;
      this.id = t, this.enabled = r, this.start = Date.now();
    }
    return A.prototype.debug = function() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.debug == "function" ? console.debug.apply(console, Fn([
        this.id,
        this.getTime() + "ms"
      ], e)) : this.info.apply(this, e));
    }, A.prototype.getTime = function() {
      return Date.now() - this.start;
    }, A.prototype.info = function() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      this.enabled && typeof window < "u" && window.console && typeof console.info == "function" && console.info.apply(console, Fn([
        this.id,
        this.getTime() + "ms"
      ], e));
    }, A.prototype.warn = function() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.warn == "function" ? console.warn.apply(console, Fn([
        this.id,
        this.getTime() + "ms"
      ], e)) : this.info.apply(this, e));
    }, A.prototype.error = function() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.error == "function" ? console.error.apply(console, Fn([
        this.id,
        this.getTime() + "ms"
      ], e)) : this.info.apply(this, e));
    }, A.instances = {}, A;
  })(), jF = (function() {
    function A(e, t) {
      var r;
      this.windowBounds = t, this.instanceName = "#" + A.instanceCount++, this.logger = new XF({
        id: this.instanceName,
        enabled: e.logging
      }), this.cache = (r = e.cache) !== null && r !== void 0 ? r : new pF(this, e);
    }
    return A.instanceCount = 1, A;
  })(), JF = function(A, e) {
    return e === void 0 && (e = {}), YF(A, e);
  };
  typeof window < "u" && wf.setContext(window);
  var YF = function(A, e) {
    return de(void 0, void 0, void 0, function() {
      var t, r, n, o, i, a, l, s, c, d, u, f, g, p, Q, m, F, w, v, E, x, C, x, I, T, B, S, D, O, N, k, M, W, nA, P, X, AA, j, R, $;
      return se(this, function(V) {
        switch (V.label) {
          case 0:
            if (!A || typeof A != "object") return [
              2,
              Promise.reject("Invalid element provided as first argument")
            ];
            if (t = A.ownerDocument, !t) throw new Error("Element is not attached to a Document");
            if (r = t.defaultView, !r) throw new Error("Document is not attached to a Window");
            return n = {
              allowTaint: (I = e.allowTaint) !== null && I !== void 0 ? I : false,
              imageTimeout: (T = e.imageTimeout) !== null && T !== void 0 ? T : 15e3,
              proxy: e.proxy,
              useCORS: (B = e.useCORS) !== null && B !== void 0 ? B : false
            }, o = xa({
              logging: (S = e.logging) !== null && S !== void 0 ? S : true,
              cache: e.cache
            }, n), i = {
              windowWidth: (D = e.windowWidth) !== null && D !== void 0 ? D : r.innerWidth,
              windowHeight: (O = e.windowHeight) !== null && O !== void 0 ? O : r.innerHeight,
              scrollX: (N = e.scrollX) !== null && N !== void 0 ? N : r.pageXOffset,
              scrollY: (k = e.scrollY) !== null && k !== void 0 ? k : r.pageYOffset
            }, a = new ot(i.scrollX, i.scrollY, i.windowWidth, i.windowHeight), l = new jF(o, a), s = (M = e.foreignObjectRendering) !== null && M !== void 0 ? M : false, c = {
              allowTaint: (W = e.allowTaint) !== null && W !== void 0 ? W : false,
              onclone: e.onclone,
              ignoreElements: e.ignoreElements,
              inlineImages: s,
              copyStyles: s
            }, l.logger.debug("Starting document clone with size " + a.width + "x" + a.height + " scrolled to " + -a.left + "," + -a.top), d = new $c(l, A, c), u = d.clonedReferenceElement, u ? [
              4,
              d.toIFrame(t, a)
            ] : [
              2,
              Promise.reject("Unable to find element in cloned iframe")
            ];
          case 1:
            return f = V.sent(), g = Xs(u) || Zb(u) ? Sw(u.ownerDocument) : pi(l, u), p = g.width, Q = g.height, m = g.left, F = g.top, w = ZF(l, u, e.backgroundColor), v = {
              canvas: e.canvas,
              backgroundColor: w,
              scale: (P = (nA = e.scale) !== null && nA !== void 0 ? nA : r.devicePixelRatio) !== null && P !== void 0 ? P : 1,
              x: ((X = e.x) !== null && X !== void 0 ? X : 0) + m,
              y: ((AA = e.y) !== null && AA !== void 0 ? AA : 0) + F,
              width: (j = e.width) !== null && j !== void 0 ? j : Math.ceil(p),
              height: (R = e.height) !== null && R !== void 0 ? R : Math.ceil(Q)
            }, s ? (l.logger.debug("Document cloned, using foreign object rendering"), x = new WF(l, v), [
              4,
              x.render(u)
            ]) : [
              3,
              3
            ];
          case 2:
            return E = V.sent(), [
              3,
              5
            ];
          case 3:
            return l.logger.debug("Document cloned, element located at " + m + "," + F + " with size " + p + "x" + Q + " using computed rendering"), l.logger.debug("Starting DOM parsing"), C = df(l, u), w === C.styles.backgroundColor && (C.styles.backgroundColor = At.TRANSPARENT), l.logger.debug("Starting renderer for element at " + v.x + "," + v.y + " with size " + v.width + "x" + v.height), x = new PF(l, v), [
              4,
              x.render(C)
            ];
          case 4:
            E = V.sent(), V.label = 5;
          case 5:
            return (!(($ = e.removeContainer) !== null && $ !== void 0) || $) && ($c.destroy(f) || l.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), l.logger.debug("Finished rendering"), [
              2,
              E
            ];
        }
      });
    });
  }, ZF = function(A, e, t) {
    var r = e.ownerDocument, n = r.documentElement ? Vr(A, getComputedStyle(r.documentElement).backgroundColor) : At.TRANSPARENT, o = r.body ? Vr(A, getComputedStyle(r.body).backgroundColor) : At.TRANSPARENT, i = typeof t == "string" ? Vr(A, t) : t === null ? At.TRANSPARENT : 4294967295;
    return e === r.documentElement ? ht(n) ? ht(o) ? i : o : n : i;
  }, ra = {
    body: {
      background: "rgb(32, 32, 32)"
    },
    rbgcpInputLabel: {
      color: "rgb(212, 212, 212)"
    },
    rbgcpControlBtnWrapper: {
      background: "rgb(54, 54, 54)"
    },
    rbgcpInput: {
      border: "none",
      color: "white",
      background: "rgb(54, 54, 54)"
    },
    rbgcpControlBtn: {
      color: "rgb(212, 212, 212)"
    },
    rbgcpControlIcon: {
      stroke: "rgb(212, 212, 212)"
    },
    rbgcpControlIcon2: {
      fill: "rgb(212, 212, 212)"
    },
    rbgcpControlInput: {
      color: "white"
    },
    rbgcpControlBtnSelected: {
      background: "black",
      color: "#568cf5"
    },
    rbgcpDegreeIcon: {
      color: "rgb(212, 212, 212)"
    },
    rbgcpColorModelDropdown: {
      background: "rgb(32, 32, 32)"
    },
    rbgcpComparibleLabel: {
      color: "rgb(212, 212, 212)"
    }
  }, YA = function() {
    return YA = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, YA.apply(this, arguments);
  }, qF = {
    body: {
      boxSizing: "border-box",
      background: "rgb(255, 255, 255)"
    },
    rbgcpControlBtn: {
      paddingLeft: "8px",
      paddingRight: "8px",
      lineHeight: "1",
      borderRadius: "4px",
      fontWeight: 700,
      fontSize: "12px",
      height: "24px",
      transition: "all 160ms ease",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "rgba(255, 255, 255, 0)",
      boxShadow: "1px 1px 3px rgba(0, 0, 0, 0)",
      color: "rgb(86, 86, 86)"
    },
    rbgcpControlIcon: {
      stroke: "rgb(50, 49, 54)"
    },
    rbgcpControlIconBtn: {
      width: "30px",
      height: "24px",
      borderRadius: "4px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative"
    },
    rbgcpControlBtnWrapper: {
      height: "28px",
      background: "#e9e9f5",
      borderRadius: "6px",
      padding: "2px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative"
    },
    rbgcpColorModelDropdown: {
      position: "absolute",
      right: "-2px",
      top: "34px",
      padding: "5px",
      background: "#e9e9f5",
      zIndex: 1e8,
      borderRadius: "6px",
      boxShadow: "1px 1px 14px 1px rgba(0, 0, 0, 0.25)"
    },
    rbgcpEyedropperCover: {
      position: "fixed",
      left: "0px",
      top: "0px",
      zIndex: 1e8,
      width: "100vw",
      height: "100vh",
      cursor: "copy"
    },
    rbgcpControlInput: {
      height: "24px",
      borderRadius: "4px",
      border: "none",
      outline: "none",
      textAlign: "center",
      width: "34px",
      fontWeight: 500,
      color: "rgb(50, 49, 54)",
      fontSize: "13px",
      background: "transparent"
    },
    rbgcpInputLabel: {
      textAlign: "center",
      lineHeight: "1.2",
      fontWeight: 700,
      color: "rgb(86, 86, 86)",
      fontSize: "11px"
    },
    rbgcpInput: {
      height: "32px",
      borderRadius: "6px",
      border: "1px solid #bebebe",
      width: "100%",
      padding: "2px",
      outline: "none",
      color: "black",
      fontWeight: 400,
      textAlign: "center",
      background: "transparent",
      fontSize: "15px"
    },
    rbgcpHandle: {
      position: "absolute",
      border: "2px solid white",
      borderRadius: "50%",
      boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.5)",
      width: "18px",
      height: "18px",
      zIndex: 1e3,
      transition: "all 30ms linear",
      boxSizing: "border-box",
      willChange: "transform",
      outline: "none"
    },
    rbgcpCanvasWrapper: {
      borderRadius: "6px",
      overflow: "hidden",
      height: "294px"
    },
    rbgcpCheckered: {
      background: `linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.18) 25%,
      transparent 25%,
      transparent 75%,
      rgba(0, 0, 0, 0.18) 75%,
      rgba(0, 0, 0, 0.18) 0
    ),
    linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.18) 25%,
      transparent 25%,
      transparent 75%,
      rgba(0, 0, 0, 0.18) 75%,
      rgba(0, 0, 0, 0.18) 0
    ),
    white`,
      backgroundRepeat: "repeat, repeat",
      backgroundPosition: "0px 0, 7px 7px",
      transformOrigin: "0 0 0",
      backgroundOrigin: "padding-box, padding-box",
      backgroundClip: "border-box, border-box",
      backgroundSize: "14px 14px, 14px 14px",
      boxShadow: "none",
      textShadow: "none",
      transition: "none",
      transform: "scaleX(1) scaleY(1) scaleZ(1)",
      borderRadius: "10px"
    },
    rbgcpOpacityOverlay: {
      position: "absolute",
      left: "0px",
      top: "0px",
      width: "100%",
      height: "100%",
      borderRadius: "10px"
    },
    rbgcpGradientHandleWrap: {
      position: "absolute",
      zIndex: 1e4,
      top: "-2px",
      outline: "none"
    },
    rbgcpGradientHandle: {
      border: "2px solid white",
      borderRadius: "50%",
      boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.5)",
      width: "18px",
      height: "18px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    rbgcpControlIcon2: {
      fill: "#323136"
    },
    rbgcpControlBtnSelected: {
      background: "white",
      color: "#568cf5",
      boxShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)"
    },
    rbgcpComparibleLabel: {
      color: "#323136"
    }
  }, AU = function(A, e) {
    var t = YA({}, qF);
    if (A) for (var r in ra) Object.prototype.hasOwnProperty.call(ra, r) && (t[r] = YA(YA({}, Object.prototype.hasOwnProperty.call(t, r) ? t[r] : {}), ra[r]));
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = YA(YA({}, Object.prototype.hasOwnProperty.call(t, r) ? t[r] : {}), e[r]));
    return t;
  }, Jc = function(A, e) {
    return A ? YA(YA({}, e.rbgcpControlBtn), e.rbgcpControlBtnSelected) : YA({}, e.rbgcpControlBtn);
  }, Xr = function(A, e) {
    return A ? YA(YA({}, e.rbgcpControlIconBtn), e.rbgcpControlBtnSelected) : YA({}, e.rbgcpControlIconBtn);
  }, Xn = function(A, e) {
    return A ? YA(YA(YA({}, e.rbgcpControlBtn), e.rbgcpColorModelDropdownBtn), e.rbgcpControlBtnSelected) : YA(YA({}, e.rbgcpControlBtn), e.rbgcpColorModelDropdownBtn);
  }, Pe = function() {
    return Pe = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, Pe.apply(this, arguments);
  }, eU = function(A) {
    var e = A.color, t = bA().defaultStyles, r = e ?? "";
    return H.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 16
      }
    }, H.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: Pe(Pe({
        fill: "none",
        strokeWidth: "1.4px"
      }, t.rbgcpControlIcon), r && {
        stroke: r
      }),
      d: "M15.6,7h0L7.78,14.86c-.37.37-1.61.38-2,.75s-.5,1.53-.76,2a3.53,3.53,0,0,1-.52.52,1.6,1.6,0,0,1-2.27-.06l-.32-.32a1.61,1.61,0,0,1-.06-2.27A3.25,3.25,0,0,1,2.4,15c.47-.26,1.65-.35,2-.73s.34-1.64.71-2c1.68-1.73,5.61-5.65,7.91-7.93h0l1.14,1.38L15.6,7Z"
    }), H.createElement("polygon", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: Pe(Pe({
        strokeWidth: "1.4px"
      }, t.rbgcpControlIcon2), r && {
        stroke: r,
        fill: r
      }),
      points: "15.7 8.87 11.13 4.29 12.69 2.73 17.25 7.31 15.7 8.87"
    }), H.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: Pe(Pe({
        strokeWidth: "1.4px"
      }, t.rbgcpControlIcon2), r && {
        stroke: r,
        fill: r
      }),
      d: "M18.18,3.71,16.36,5.53a1.33,1.33,0,0,1-1.88,0h0a1.34,1.34,0,0,1,0-1.89l1.81-1.82a1.34,1.34,0,0,1,1.89,0h0A1.34,1.34,0,0,1,18.18,3.71Z"
    }));
  }, tU = function(A) {
    var e = A.onSelect, t = bA().defaultStyles, r = h.useState(null), n = r[0], o = r[1], i = h.useState(false), a = i[0], l = i[1], s = h.useState(false), c = s[0], d = s[1], u = function() {
      var p = document.getElementById("root");
      l(true), JF(p).then(function(Q) {
        var m = document.createElement("canvas"), F = m.getContext("2d", {
          willReadFrequently: true
        });
        p && F && (m.width = p.offsetWidth * 2, m.height = p.offsetHeight * 2, F.drawImage(Q, 0, 0)), o(F);
      });
    }, f = function(p) {
      if (p.stopPropagation(), n) {
        var Q = p.pageX, m = p.pageY, F = Q * 2, w = m * 2, v = n.getImageData(F, w, 1, 1).data;
        e("rgba(".concat(v[0], ", ").concat(v[1], ", ").concat(v[2], ", 1)"));
      }
      d(false), l(false);
    }, g = function() {
      if (d(true), !window.EyeDropper) u();
      else {
        var p = new window.EyeDropper(), Q = new window.AbortController();
        p.open({
          signal: Q.signal
        }).then(function(m) {
          var F = ne(m.sRGBHex), w = F.toRgb(), v = w.r, E = w.g, C = w.b;
          e("rgba(".concat(v, ", ").concat(E, ", ").concat(C, ", 1)")), d(false);
        }).catch(function(m) {
          console.log(m), d(false);
        });
      }
    };
    return H.createElement("div", null, H.createElement("div", {
      onClick: g,
      id: "rbgcp-eyedropper-btn",
      style: Pe(Pe({}, t.rbgcpEyedropperBtn), Xr(a, t))
    }, H.createElement(eU, {
      color: c ? "rgb(86, 140, 245)" : ""
    })), a && H.createElement(Ew, null, H.createElement("div", {
      onClick: function(p) {
        return f(p);
      },
      style: t.rbgcpEyedropperCover
    })));
  }, Ya = function() {
    return Ya = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, Ya.apply(this, arguments);
  }, na = function(A) {
    var e = A.value, t = A.reffy, r = A.label, n = A.config, o = A.callback, i = A.squareWidth, a = A.openAdvanced, l = A.defaultStyles, s = A.pickerIdSuffix, c = n.barSize, d = h.useState(false), u = d[0], f = d[1], g = h.useState(2), p = g[0], Q = g[1], m = e * (i - 18);
    h.useEffect(function() {
      var C;
      Q(((C = t == null ? void 0 : t.current) === null || C === void 0 ? void 0 : C.offsetTop) - 2);
    }, [
      a,
      t
    ]);
    var F = function() {
      f(false);
    }, w = function(C) {
      u && o(dr(C, c));
    }, v = function(C) {
      u || o(dr(C, c));
    }, E = function() {
      f(true);
    };
    return h.useEffect(function() {
      var C = function() {
        F();
      };
      return window.addEventListener("mouseup", C), function() {
        window.removeEventListener("mouseup", C);
      };
    }, []), H.createElement("div", {
      style: {
        width: "100%",
        padding: "3px 0px 3px 0px"
      }
    }, H.createElement("div", {
      onMouseMove: function(C) {
        return w(C);
      },
      style: {
        cursor: "resize",
        position: "relative"
      },
      id: "rbgcp-advanced-bar-".concat(r, "-wrapper").concat(s)
    }, H.createElement("div", {
      style: Ya({
        left: m,
        top: p
      }, l.rbgcpHandle),
      id: "rbgcp-advanced-bar-".concat(r, "-handle").concat(s),
      onMouseDown: E,
      role: "button",
      tabIndex: 0
    }), H.createElement("div", {
      style: {
        textAlign: "center",
        color: "#fff",
        fontSize: 12,
        fontWeight: 500,
        lineHeight: 1,
        position: "absolute",
        left: "50%",
        transform: "translate(-50%, 0%)",
        top: p + 2,
        zIndex: 10,
        textShadow: "1px 1px 1px rgba(0,0,0,.6)"
      },
      id: "rbgcp-advanced-bar-".concat(r, "-label").concat(s),
      onMouseMove: function(C) {
        return w(C);
      },
      onClick: function(C) {
        return v(C);
      },
      tabIndex: 0,
      role: "button",
      onKeyDown: function() {
      }
    }, r), H.createElement("canvas", {
      ref: t,
      height: "14px",
      width: "".concat(i, "px"),
      onClick: function(C) {
        return v(C);
      },
      style: {
        position: "relative",
        borderRadius: 14
      },
      id: "rbgcp-advanced-bar-".concat(r, "-canvas").concat(s)
    })));
  }, rU = function(A) {
    var e = A.openAdvanced, t = bA(), r = t.config, n = t.tinyColor, o = t.handleChange, i = t.squareWidth, a = t.hc, l = t.defaultStyles, s = t.pickerIdSuffix, c = n.toHsl(), d = c.s, u = c.l, f = h.useRef(null), g = h.useRef(null), p = h.useRef(null);
    kC(f, a == null ? void 0 : a.h, u * 100, i), RC(g, a == null ? void 0 : a.h, d * 100, i), OC(p, a == null ? void 0 : a.h, d * 100, i);
    var Q = function(w) {
      var v = ne({
        h: a == null ? void 0 : a.h,
        s: w / 100,
        l: u
      }).toRgb(), E = v.r, C = v.g, x = v.b;
      o("rgba(".concat(E, ",").concat(C, ",").concat(x, ",").concat(a == null ? void 0 : a.a, ")"));
    }, m = function(w) {
      var v = ne({
        h: a == null ? void 0 : a.h,
        s: d,
        l: w / 100
      }).toRgb(), E = v.r, C = v.g, x = v.b;
      o("rgba(".concat(E, ",").concat(C, ",").concat(x, ",").concat(a == null ? void 0 : a.a, ")"));
    }, F = function(w) {
      var v = ne({
        h: a == null ? void 0 : a.h,
        s: (a == null ? void 0 : a.s) * 100,
        v: w
      }).toRgb(), E = v.r, C = v.g, x = v.b;
      o("rgba(".concat(E, ",").concat(C, ",").concat(x, ",").concat(a == null ? void 0 : a.a, ")"));
    };
    return H.createElement("div", {
      style: {
        width: "100%",
        height: e ? 98 : 0,
        transition: "all 120ms linear"
      },
      id: "rbgcp-advanced-controls-wrapper".concat(s)
    }, H.createElement("div", {
      style: {
        paddingTop: 11,
        display: e ? "flex" : "none",
        flexDirection: "column",
        justifyContent: "space-between",
        height: e ? 98 : 0,
        overflow: "hidden",
        transition: "height 100ms linear"
      },
      id: "rbgcp-advanced-controls-inner".concat(s)
    }, H.createElement(na, {
      value: d,
      reffy: f,
      config: r,
      label: "Saturation",
      callback: Q,
      squareWidth: i,
      openAdvanced: e,
      defaultStyles: l,
      pickerIdSuffix: s
    }), H.createElement(na, {
      value: u,
      config: r,
      reffy: g,
      label: "Lightness",
      callback: m,
      squareWidth: i,
      openAdvanced: e,
      defaultStyles: l,
      pickerIdSuffix: s
    }), H.createElement(na, {
      value: a == null ? void 0 : a.v,
      config: r,
      reffy: p,
      label: "Brightness",
      callback: F,
      squareWidth: i,
      openAdvanced: e,
      defaultStyles: l,
      pickerIdSuffix: s
    })));
  }, It = function() {
    return It = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, It.apply(this, arguments);
  }, nU = function(A) {
    var e = A.openComparibles, t = bA(), r = t.tinyColor, n = t.handleChange, o = t.defaultStyles, i = t.pickerIdSuffix, a = r.analogous(), l = r.monochromatic(), s = r.triad(), c = r.tetrad(), d = function(u) {
      var f = u.toRgb(), g = f.r, p = f.g, Q = f.b, m = f.a;
      n("rgba(".concat(g, ",").concat(p, ",").concat(Q, ",").concat(m, ")"));
    };
    return H.createElement("div", {
      style: {
        width: "100%",
        transition: "all 120ms linear",
        height: e ? 216 : 0
      },
      id: "rbgcp-comparible-colors-wrapper".concat(i)
    }, H.createElement("div", {
      style: {
        paddingTop: 11,
        display: e ? "" : "none",
        position: "relative"
      },
      id: "rbgcp-comparible-colors-inner".concat(i)
    }, H.createElement("div", {
      style: It({
        textAlign: "center",
        fontSize: 13,
        fontWeight: 600,
        position: "absolute",
        top: 6.5,
        left: 2
      }, o.rbgcpComparibleLabel),
      id: "rbgcp-comparible-color-guide-label".concat(i)
    }, "Color Guide"), H.createElement("div", {
      style: It({
        textAlign: "center",
        fontSize: 12,
        fontWeight: 500,
        marginTop: 3
      }, o.rbgcpComparibleLabel),
      id: "rbgcp-comparible-analogous-colors-label".concat(i)
    }, "Analogous"), H.createElement("div", {
      style: {
        borderRadius: 5,
        overflow: "hidden",
        display: "flex"
      },
      id: "rbgcp-comparible-analogous-colors".concat(i)
    }, a == null ? void 0 : a.map(function(u, f) {
      return H.createElement("div", {
        key: f,
        id: "rbgcp-comparible-analogous-color-".concat(f).concat(i),
        style: {
          width: "20%",
          height: 30,
          background: u.toHexString()
        },
        onClick: function() {
          return d(u);
        }
      });
    })), H.createElement("div", {
      style: It({
        textAlign: "center",
        fontSize: 12,
        fontWeight: 500,
        marginTop: 3
      }, o.rbgcpComparibleLabel),
      id: "rbgcp-comparible-monochromatic-colors-label".concat(i)
    }, "Monochromatic"), H.createElement("div", {
      style: {
        borderRadius: 5,
        overflow: "hidden",
        display: "flex",
        justifyContent: "flex-end"
      },
      id: "rbgcp-comparible-monochromatic-colors".concat(i)
    }, l == null ? void 0 : l.map(function(u, f) {
      return H.createElement("div", {
        key: f,
        id: "rbgcp-comparible-monochromatic-color-".concat(f).concat(i),
        style: {
          width: "20%",
          height: 30,
          background: u.toHexString()
        },
        onClick: function() {
          return d(u);
        }
      });
    })), H.createElement("div", {
      style: It({
        textAlign: "center",
        fontSize: 12,
        fontWeight: 500,
        marginTop: 3
      }, o.rbgcpComparibleLabel),
      id: "rbgcp-comparible-triad-colors-label".concat(i)
    }, "Triad"), H.createElement("div", {
      style: {
        borderRadius: 5,
        overflow: "hidden",
        display: "flex",
        justifyContent: "flex-end"
      },
      id: "rbgcp-comparible-triad-colors".concat(i)
    }, s == null ? void 0 : s.map(function(u, f) {
      return H.createElement("div", {
        key: f,
        id: "rbgcp-comparible-triad-color-".concat(f).concat(i),
        style: {
          width: "calc(100% / 3)",
          height: 28,
          background: u.toHexString()
        },
        onClick: function() {
          return d(u);
        }
      });
    })), H.createElement("div", {
      style: It({
        textAlign: "center",
        fontSize: 12,
        fontWeight: 500,
        marginTop: 3
      }, o.rbgcpComparibleLabel),
      id: "rbgcp-comparible-tetrad-colors-label".concat(i)
    }, "Tetrad"), H.createElement("div", {
      style: {
        borderRadius: 5,
        overflow: "hidden",
        display: "flex",
        justifyContent: "flex-end"
      },
      id: "rbgcp-comparible-tetrad-colors".concat(i)
    }, c == null ? void 0 : c.map(function(u, f) {
      return H.createElement("div", {
        key: f,
        id: "rbgcp-comparible-tetrad-color-".concat(f).concat(i),
        style: {
          width: "25%",
          height: 28,
          background: u.toHexString()
        },
        onClick: function() {
          return d(u);
        }
      });
    }))));
  }, IA = function() {
    return IA = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, IA.apply(this, arguments);
  }, oU = function() {
    var A = bA(), e = A.gradientType, t = A.onChange, r = A.value, n = A.defaultStyles, o = A.pickerIdSuffix, i = e === "linear-gradient", a = e === "radial-gradient", l = function() {
      var c = r.split(/,(.+)/)[1];
      t("linear-gradient(90deg, ".concat(c));
    }, s = function() {
      var c = r.split(/,(.+)/)[1];
      t("radial-gradient(circle, ".concat(c));
    };
    return H.createElement("div", {
      style: n.rbgcpControlBtnWrapper
    }, H.createElement("div", {
      onClick: l,
      id: "rbgcp-linear-btn".concat(o),
      style: IA(IA({}, n.rbgcpControlBtn), i && n.rbgcpControlBtnSelected),
      tabIndex: 0,
      role: "button",
      onKeyDown: function() {
      }
    }, H.createElement(Cw, {
      color: i ? "#568CF5" : ""
    })), H.createElement("div", {
      onClick: s,
      id: "rbgcp-radial-btn".concat(o),
      style: IA(IA({}, n.rbgcpControlBtn), a && n.rbgcpControlBtnSelected),
      tabIndex: 0,
      role: "button",
      onKeyDown: function() {
      }
    }, H.createElement(ww, {
      color: a ? "#568CF5" : ""
    })));
  }, iU = function() {
    var A = bA(), e = A.currentLeft, t = A.currentColor, r = A.defaultStyles, n = A.handleGradient, o = A.pickerIdSuffix, i = function(a) {
      n(t, ur(parseInt(a), 0, 100));
    };
    return H.createElement("div", {
      style: IA(IA(IA(IA({}, r.rbgcpControlBtnWrapper), r.rbgcpControlInputWrap), r.rbgcpStopInputWrap), {
        paddingLeft: 8
      }),
      id: "rbgcp-stop-input-wrapper".concat(o)
    }, H.createElement(Fw, null), H.createElement("input", {
      value: e,
      id: "rbgcp-stop-input".concat(o),
      onChange: function(a) {
        return i(a.target.value);
      },
      style: IA(IA({}, r.rbgcpControlInput), r.rbgcpStopInput)
    }));
  }, aU = function() {
    var A = bA(), e = A.degrees, t = A.onChange, r = A.value, n = A.defaultStyles, o = A.pickerIdSuffix, i = function(a) {
      var l = ur(a.target.value, 0, 360), s = r.split(/,(.+)/)[1];
      t("linear-gradient(".concat(l ?? 0, "deg, ").concat(s));
    };
    return H.createElement("div", {
      style: IA(IA(IA({}, n.rbgcpControlBtnWrapper), n.rbgcpControlInputWrap), n.rbgcpDegreeInputWrap),
      id: "rbgcp-degree-input-wrapper".concat(o)
    }, H.createElement(bw, null), H.createElement("input", {
      value: e,
      onChange: function(a) {
        return i(a);
      },
      id: "rbgcp-degree-input".concat(o),
      style: IA(IA({}, n.rbgcpControlInput), n.rbgcpDegreeInput)
    }), H.createElement("div", {
      style: IA(IA({}, n.rbgcpDegreeIcon), {
        position: "absolute",
        right: e > 99 ? 0 : e < 10 ? 7 : 3,
        top: 1,
        fontWeight: 400,
        fontSize: 13
      })
    }, "\xB0"));
  }, sU = function() {
    var A = bA(), e = A.colors, t = A.selectedColor, r = A.createGradientStr, n = A.defaultStyles, o = A.pickerIdSuffix, i = function() {
      if ((e == null ? void 0 : e.length) > 2) {
        var a = e == null ? void 0 : e.map(function(s, c) {
          return IA(IA({}, s), {
            value: c === t - 1 ? gi(s) : dn(s)
          });
        }), l = a == null ? void 0 : a.filter(function(s, c) {
          return c !== t;
        });
        r(l);
      }
    };
    return H.createElement("div", {
      onClick: i,
      style: IA(IA({}, Xr(false, n)), {
        width: 28
      }),
      id: "rbgcp-point-delete-btn".concat(o),
      tabIndex: 0,
      role: "button",
      onKeyDown: function() {
      }
    }, H.createElement(mw, null));
  }, Yc = function(A) {
    var e = A.hideGradientType, t = A.hideGradientAngle, r = A.hideGradientStop, n = bA(), o = n.gradientType, i = n.defaultStyles, a = n.pickerIdSuffix;
    return H.createElement("div", {
      style: IA(IA({}, i.rbgcpControlBtnWrapper), {
        marginTop: 12,
        marginBottom: -4,
        justifyContent: "space-between",
        paddingLeft: e ? 4 : 0
      }),
      id: "rbgcp-gradient-controls-wrap".concat(a)
    }, !e && H.createElement(oU, null), H.createElement("div", {
      style: {
        width: 53
      }
    }, !t && o === "linear-gradient" && H.createElement(aU, null)), !r && H.createElement(iU, null), H.createElement(sU, null));
  }, tn = function() {
    return tn = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, tn.apply(this, arguments);
  }, lU = function(A) {
    var e, t, r = A.hideColorTypeBtns, n = A.setGradient, o = A.isGradient, i = A.setSolid, a = A.locales, l = bA(), s = l.defaultStyles, c = l.pickerIdSuffix;
    return r ? H.createElement("div", {
      style: {
        width: 1
      }
    }) : H.createElement("div", {
      style: tn({
        display: "flex",
        alignItems: "center"
      }, s.rbgcpControlBtnWrapper),
      id: "rbgcp-color-type-btns".concat(c)
    }, H.createElement("div", {
      onClick: i,
      id: "rbgcp-solid-btn".concat(c),
      style: Jc(!o, s)
    }, (e = a == null ? void 0 : a.CONTROLS) === null || e === void 0 ? void 0 : e.SOLID), H.createElement("div", {
      onClick: n,
      id: "rbgcp-gradient-btn".concat(c),
      style: Jc(o ?? false, s)
    }, (t = a == null ? void 0 : a.CONTROLS) === null || t === void 0 ? void 0 : t.GRADIENT));
  }, cU = function(A) {
    var e = A.openInputType, t = A.setOpenInputType, r = bA(), n = r.inputType, o = r.setInputType, i = r.defaultStyles, a = r.pickerIdSuffix, l = e ? "visibility 0ms linear" : "visibility 100ms linear 150ms", s = e ? "z-index 0ms linear" : "z-index 100ms linear 150ms", c = e ? "opacity 120ms linear" : "opacity 150ms linear 50ms", d = function(u, f) {
      e && (u.stopPropagation(), o(f), t(false));
    };
    return H.createElement("div", {
      style: tn({
        visibility: e ? "visible" : "hidden",
        zIndex: e ? "" : -100,
        opacity: e ? 1 : 0,
        transition: "".concat(c, ", ").concat(l, ", ").concat(s)
      }, i.rbgcpColorModelDropdown),
      id: "rbgcp-color-model-dropdown".concat(a)
    }, H.createElement("div", {
      id: "rbgcp-color-model-rgb-btn".concat(a),
      onClick: function(u) {
        return d(u, "rgb");
      },
      style: Xn(n === "rgb", i)
    }, "RGB"), H.createElement("div", {
      id: "rbgcp-color-model-hsl-btn".concat(a),
      onClick: function(u) {
        return d(u, "hsl");
      },
      style: Xn(n === "hsl", i)
    }, "HSL"), H.createElement("div", {
      id: "rbgcp-color-model-hsv-btn".concat(a),
      onClick: function(u) {
        return d(u, "hsv");
      },
      style: Xn(n === "hsv", i)
    }, "HSV"), H.createElement("div", {
      id: "rbgcp-color-model-cmyk-btn".concat(a),
      onClick: function(u) {
        return d(u, "cmyk");
      },
      style: Xn(n === "cmyk", i)
    }, "CMYK"));
  }, uU = function(A) {
    var e, t, r = A.locales, n = A.hideEyeDrop, o = n === void 0 ? false : n, i = A.hideAdvancedSliders, a = i === void 0 ? false : i, l = A.hideColorGuide, s = l === void 0 ? false : l, c = A.hideInputType, d = c === void 0 ? false : c, u = A.hideColorTypeBtns, f = u === void 0 ? false : u, g = A.hideGradientControls, p = g === void 0 ? false : g, Q = A.hideGradientType, m = Q === void 0 ? false : Q, F = A.hideGradientAngle, w = F === void 0 ? false : F, v = A.hideGradientStop, E = v === void 0 ? false : v, C = bA(), x = C.config, I = C.onChange, T = C.isGradient, B = C.handleChange, S = C.previous, D = C.defaultStyles, O = C.pickerIdSuffix, N = x.defaultColor, k = x.defaultGradient, M = h.useState(false), W = M[0], nA = M[1], P = h.useState(false), X = P[0], AA = P[1], j = h.useState(false), R = j[0], $ = j[1], V = o && a && s && d, Y = (e = S == null ? void 0 : S.color) !== null && e !== void 0 ? e : N, dA = (t = S == null ? void 0 : S.gradient) !== null && t !== void 0 ? t : k, iA = function() {
      I(Y);
    }, tA = function() {
      I(dA);
    }, J = o && a && s && d, oA = J && f;
    return oA ? T && !p ? H.createElement(Yc, {
      hideGradientType: m,
      hideGradientAngle: w,
      hideGradientStop: E
    }) : null : H.createElement("div", {
      style: {
        paddingBottom: 4
      }
    }, H.createElement("div", {
      style: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      },
      id: "rbgcp-controls-wrapper".concat(O)
    }, H.createElement(lU, {
      hideColorTypeBtns: f,
      setGradient: tA,
      isGradient: T,
      setSolid: iA,
      locales: r
    }), !J && H.createElement("div", {
      style: tn({
        display: V ? "none" : ""
      }, D.rbgcpControlBtnWrapper),
      id: "rbgcp-control-rightside-wrapper".concat(O)
    }, !o && H.createElement(tU, {
      onSelect: B
    }), !a && H.createElement("div", {
      id: "rbgcp-advanced-btn".concat(O),
      onClick: function() {
        return $(!R);
      },
      style: Xr(R, D)
    }, H.createElement(vw, {
      color: R ? "#568CF5" : ""
    })), !s && H.createElement("div", {
      style: Xr(W, D),
      onClick: function() {
        return nA(!W);
      },
      id: "rbgcp-comparibles-btn".concat(O)
    }, H.createElement(Qw, {
      color: W ? "#568CF5" : ""
    })), !d && H.createElement("div", {
      id: "rbgcp-color-model-btn".concat(O),
      onClick: function() {
        return AA(!X);
      },
      style: Xr(X, D)
    }, H.createElement(yw, {
      color: X ? "#568CF5" : ""
    }), H.createElement(cU, {
      openInputType: X,
      setOpenInputType: AA
    })))), !a && H.createElement(rU, {
      openAdvanced: R
    }), !s && H.createElement(nU, {
      openComparibles: W
    }), T && !p && H.createElement(Yc, {
      hideGradientType: m,
      hideGradientAngle: w,
      hideGradientStop: E
    }));
  }, _e = function() {
    return _e = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, _e.apply(this, arguments);
  }, Zc = function(A, e, t) {
    if (t || arguments.length === 2) for (var r = 0, n = e.length, o; r < n; r++) (o || !(r in e)) && (o || (o = Array.prototype.slice.call(e, 0, r)), o[r] = e[r]);
    return A.concat(o || Array.prototype.slice.call(e));
  }, dU = function(A) {
    var e = A.left, t = A.i, r = A.setDragging, n = bA(), o = n.colors, i = n.squareWidth, a = n.selectedColor, l = n.defaultStyles, s = n.pickerIdSuffix, c = n.createGradientStr, d = a === t, u = (i - 18) / 100, f = function(p) {
      var Q = o == null ? void 0 : o.map(function(m, F) {
        return _e(_e({}, m), {
          value: F === p ? gi(m) : dn(m)
        });
      });
      c(Q);
    }, g = function(p) {
      p.stopPropagation(), f(t), r(true);
    };
    return H.createElement("div", {
      onMouseDown: function(p) {
        return g(p);
      },
      id: "rbgcp-gradient-handle-".concat(t).concat(s),
      style: _e(_e({}, l.rbgcpGradientHandleWrap), {
        left: (e ?? 0) * u
      })
    }, H.createElement("div", {
      style: _e(_e({}, l.rbgcpGradientHandle), d ? {
        boxShadow: "0px 0px 5px 1px rgba(86, 140, 245,.95)",
        border: "2px solid white"
      } : {}),
      id: "rbgcp-gradient-handle-".concat(t, "-dot").concat(s)
    }, d && H.createElement("div", {
      style: {
        width: 5,
        height: 5,
        borderRadius: "50%",
        background: "white"
      },
      id: "rbgcp-gradient-handle-".concat(t, "-selected-dot").concat(s)
    })));
  }, fU = function() {
    var A = bA(), e = A.value, t = A.colors, r = A.config, n = A.squareWidth, o = A.currentColor, i = A.handleGradient, a = A.pickerIdSuffix, l = A.createGradientStr, s = r.barSize, c = h.useState(false), d = c[0], u = c[1];
    function f(w) {
      return w.replace(/(radial|linear)-gradient\([^,]+,/, "linear-gradient(90deg,");
    }
    var g = function(w) {
      var v, E = dr(w, s), C = (v = Zc(Zc([], t.map(function(x) {
        return _e(_e({}, x), {
          value: dn(x)
        });
      }), true), [
        {
          value: o,
          left: E
        }
      ], false)) === null || v === void 0 ? void 0 : v.sort(function(x, I) {
        return x.left - I.left;
      });
      l(C);
    }, p = function() {
      u(false);
    }, Q = function(w) {
      d || (g(w), u(true));
    }, m = function(w) {
      d && i(o, dr(w, s));
    }, F = function() {
      p();
    };
    return h.useEffect(function() {
      return window.addEventListener("mouseup", F), function() {
        window.removeEventListener("mouseup", F);
      };
    }), H.createElement("div", {
      style: {
        width: "100%",
        marginTop: 17,
        marginBottom: 4,
        position: "relative"
      },
      id: "rbgcp-gradient-bar".concat(a)
    }, H.createElement("div", {
      style: {
        height: 14,
        borderRadius: 10,
        width: n,
        backgroundImage: f(e)
      },
      onMouseDown: function(w) {
        return Q(w);
      },
      onMouseMove: function(w) {
        return m(w);
      },
      id: "rbgcp-gradient-bar-canvas".concat(a)
    }), t == null ? void 0 : t.map(function(w, v) {
      return H.createElement(dU, {
        i: v,
        left: w.left,
        key: "".concat(v, "-").concat(w),
        setDragging: u
      });
    }));
  }, gU = function(A) {
    var e = A.locales, t = A.presets, r = A.hideHue, n = A.hideInputs, o = A.hidePresets, i = A.hideOpacity, a = A.hideEyeDrop, l = A.hideControls, s = A.hideInputType, c = A.hideColorGuide, d = A.hidePickerSquare, u = A.hideGradientType, f = A.hideGradientStop, g = A.hideGradientAngle, p = A.hideColorTypeBtns, Q = A.hideAdvancedSliders, m = A.hideGradientControls, F = bA(), w = F.isGradient, v = F.pickerIdSuffix;
    return H.createElement("div", {
      style: {
        userSelect: "none"
      },
      id: "rbgcp-color-picker".concat(v)
    }, !d && H.createElement(fw, null), !l && H.createElement(uU, {
      locales: e,
      hideEyeDrop: a,
      hideInputType: s,
      hideColorGuide: c,
      hideGradientType: u,
      hideGradientStop: f,
      hideColorTypeBtns: p,
      hideGradientAngle: g,
      hideAdvancedSliders: Q,
      hideGradientControls: m
    }), w && H.createElement(fU, null), !r && H.createElement(KC, null), !i && H.createElement(gw, null), !n && H.createElement(WC, null), !o && H.createElement(hw, {
      presets: t
    }));
  }, xo = function() {
    return xo = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, xo.apply(this, arguments);
  };
  pU = function(A) {
    var e = A.idSuffix, t = A.value, r = t === void 0 ? "rgba(175, 51, 242, 1)" : t, n = A.onChange, o = A.hideControls, i = o === void 0 ? false : o, a = A.hideInputs, l = a === void 0 ? false : a, s = A.hideOpacity, c = s === void 0 ? false : s, d = A.hidePresets, u = d === void 0 ? false : d, f = A.hideHue, g = f === void 0 ? false : f, p = A.presets, Q = p === void 0 ? [] : p, m = A.hideEyeDrop, F = m === void 0 ? false : m, w = A.hideAdvancedSliders, v = w === void 0 ? false : w, E = A.hideColorGuide, C = E === void 0 ? false : E, x = A.hideInputType, I = x === void 0 ? false : x, T = A.hideColorTypeBtns, B = T === void 0 ? false : T, S = A.hideGradientType, D = S === void 0 ? false : S, O = A.hideGradientAngle, N = O === void 0 ? false : O, k = A.hideGradientStop, M = k === void 0 ? false : k, W = A.hideGradientControls, nA = W === void 0 ? false : W, P = A.locales, X = P === void 0 ? pw : P, AA = A.width, j = AA === void 0 ? 294 : AA, R = A.height, $ = R === void 0 ? 294 : R, V = A.style, Y = V === void 0 ? {} : V, dA = A.className, iA = A.disableDarkMode, tA = iA === void 0 ? false : iA, J = A.disableLightMode, oA = J === void 0 ? false : J, aA = A.hidePickerSquare, y = aA === void 0 ? false : aA, U = A.showHexAlpha, b = U === void 0 ? false : U, _ = A.config, z = _ === void 0 ? {} : _, G = EC(r), sA = typeof window > "u" || tA ? false : !!(window.matchMedia("(prefers-color-scheme: dark)").matches || oA), cA = AU(sA, Y), fA = sA ? "-dark".concat(e ? "-".concat(e) : "") : e ? "-".concat(e) : "";
    return H.createElement("div", {
      className: dA,
      style: xo(xo({}, cA.body), {
        width: j
      })
    }, H.createElement(TC, {
      value: G,
      onChange: n,
      squareWidth: j,
      passedConfig: z,
      squareHeight: $,
      isDarkMode: sA,
      hideOpacity: c,
      showHexAlpha: b,
      defaultStyles: cA,
      pickerIdSuffix: fA
    }, H.createElement(gU, {
      hideControls: i,
      hideInputs: l,
      hidePresets: u,
      hideOpacity: c,
      hideHue: g,
      presets: Q,
      hideEyeDrop: F,
      hideAdvancedSliders: v,
      hideColorGuide: C,
      hideInputType: I,
      hideColorTypeBtns: B,
      hideGradientType: D,
      hideGradientAngle: N,
      hideGradientStop: M,
      hideGradientControls: nA,
      hidePickerSquare: y,
      locales: X
    })));
  };
  const Kt = {
    HEX: /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,
    RGB: /^rgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*(,\s*[\d.]+\s*)?\)$/i,
    GRADIENT: /^(linear-gradient|radial-gradient)\(.*\)$/i,
    GRADIENT_PREFIX: /^(linear-gradient|radial-gradient)\(/i
  };
  function Za(A) {
    if (!A || A.trim() === "") return {
      isValid: true,
      normalizedValue: "",
      colorType: "empty"
    };
    const e = A.trim();
    return Kt.HEX.test(e) ? {
      isValid: true,
      normalizedValue: e,
      colorType: "hex"
    } : Kt.RGB.test(e) ? {
      isValid: true,
      normalizedValue: e,
      colorType: "rgb"
    } : Kt.GRADIENT.test(e) ? {
      isValid: true,
      normalizedValue: e,
      colorType: "gradient"
    } : {
      isValid: false,
      normalizedValue: e,
      colorType: "invalid"
    };
  }
  function BU(A) {
    if (A == null || typeof A != "string") return false;
    const e = A.trim();
    return e === "" ? false : Kt.GRADIENT_PREFIX.test(e);
  }
  function hU(A) {
    if (!A || typeof A != "string") return null;
    const e = A.match(Kt.HEX);
    if (!e) return null;
    let t = e[1];
    t.length === 3 && (t = t.split("").map((a) => a + a).join(""));
    const r = parseInt(t.substring(0, 2), 16), n = parseInt(t.substring(2, 4), 16), o = parseInt(t.substring(4, 6), 16);
    let i = 1;
    if (t.length === 8) {
      const a = parseInt(t.substring(6, 8), 16);
      i = Math.round(a / 255 * 1e3) / 1e3;
    }
    return {
      r,
      g: n,
      b: o,
      a: i
    };
  }
  function mU(A) {
    if (!A || typeof A != "string" || !A.match(Kt.RGB)) return null;
    const t = A.match(/\d+\.?\d*/g);
    if (!t || t.length < 3) return null;
    const r = parseInt(t[0], 10), n = parseInt(t[1], 10), o = parseInt(t[2], 10), i = t[3] !== void 0 ? parseFloat(t[3]) : 1;
    return r < 0 || r > 255 || n < 0 || n > 255 || o < 0 || o > 255 || i < 0 || i > 1 ? null : {
      r,
      g: n,
      b: o,
      a: Math.round(i * 1e3) / 1e3
    };
  }
  function tr(A) {
    if (!A || typeof A != "string") return null;
    const e = A.trim();
    return e.startsWith("#") ? hU(e) : e.toLowerCase().startsWith("rgb") ? mU(e) : null;
  }
  function CU(A) {
    if (!A || typeof A != "string") return null;
    const e = /(#[0-9a-fA-F]{3,8}|rgba?\([^)]+\))\s*(\d+(?:\.\d+)?%)?/gi, t = Array.from(A.matchAll(e));
    if (t.length < 2) return null;
    const r = t.map((n, o) => {
      const i = n[1];
      let a;
      return n[2] ? a = parseFloat(n[2]) : a = o / (t.length - 1) * 100, {
        color: i,
        position: a
      };
    });
    return r.sort((n, o) => n.position - o.position), r;
  }
  function wU(A) {
    if (!A || A.length < 2) return null;
    const e = A.find((u) => u.position === 50);
    if (e) {
      const u = tr(e.color);
      return u ? u.a === 1 ? `rgb(${u.r}, ${u.g}, ${u.b})` : `rgba(${u.r}, ${u.g}, ${u.b}, ${u.a})` : null;
    }
    let t = null, r = null;
    for (let u = 0; u < A.length; u++) if (A[u].position <= 50 && (t = A[u]), A[u].position > 50 && !r) {
      r = A[u];
      break;
    }
    if (!r && t) {
      const u = tr(t.color);
      return u ? u.a === 1 ? `rgb(${u.r}, ${u.g}, ${u.b})` : `rgba(${u.r}, ${u.g}, ${u.b}, ${u.a})` : null;
    }
    if (!t && r) {
      const u = tr(r.color);
      return u ? u.a === 1 ? `rgb(${u.r}, ${u.g}, ${u.b})` : `rgba(${u.r}, ${u.g}, ${u.b}, ${u.a})` : null;
    }
    if (!t || !r) return null;
    const n = tr(t.color), o = tr(r.color);
    if (!n || !o) return null;
    const i = r.position - t.position;
    if (i === 0) {
      const u = o;
      return u.a === 1 ? `rgb(${u.r}, ${u.g}, ${u.b})` : `rgba(${u.r}, ${u.g}, ${u.b}, ${u.a})`;
    }
    const a = (50 - t.position) / i, l = Math.round(n.r + (o.r - n.r) * a), s = Math.round(n.g + (o.g - n.g) * a), c = Math.round(n.b + (o.b - n.b) * a), d = Math.round((n.a + (o.a - n.a) * a) * 1e3) / 1e3;
    return d === 1 ? `rgb(${l}, ${s}, ${c})` : `rgba(${l}, ${s}, ${c}, ${d})`;
  }
  qc = function(A) {
    if (A == null || typeof A != "string") return null;
    const e = A.trim();
    if (e === "") return null;
    if (!Kt.GRADIENT_PREFIX.test(e)) return tr(e) ? e : null;
    try {
      const r = CU(e);
      return r ? wU(r) : null;
    } catch {
      return null;
    }
  };
  function Au(A) {
    const e = A.getBoundingClientRect();
    return {
      above: e.top,
      below: window.innerHeight - e.bottom
    };
  }
  vU = function(A, e, t = 16) {
    const [r, n] = h.useState("bottom"), o = h.useMemo(() => `calc(100vh - ${2 * t}px)`, [
      t
    ]), i = h.useRef("bottom"), a = h.useRef(null), l = h.useRef(null), s = h.useCallback((p) => {
      i.current = p, n(p);
    }, []), c = h.useCallback((p) => {
      if (!A) return;
      const { above: Q, below: m } = Au(A), F = i.current;
      if (p !== void 0) {
        const w = F === "bottom" ? m : Q, v = F === "bottom" ? Q : m;
        if (p <= w - t) return;
        v > w && s(F === "bottom" ? "top" : "bottom");
      } else s(Q > m ? "top" : "bottom");
    }, [
      A,
      t,
      s
    ]);
    h.useEffect(() => {
      if (!e || !A) return;
      const { above: p, below: Q } = Au(A);
      s(p > Q ? "top" : "bottom");
    }, [
      e,
      A,
      s
    ]), h.useEffect(() => {
      if (!e || !A) return;
      const p = () => c();
      return window.addEventListener("resize", p), () => window.removeEventListener("resize", p);
    }, [
      e,
      A,
      c
    ]);
    const [, d] = h.useState({}), u = h.useCallback((p) => {
      a.current = p, d({});
    }, []);
    return h.useEffect(() => {
      if (!e || !a.current) return;
      let p = null;
      const Q = new ResizeObserver((m) => {
        p !== null && cancelAnimationFrame(p), p = requestAnimationFrame(() => {
          var _a2;
          p = null, (_a2 = l.current) == null ? void 0 : _a2.updatePosition(), m.length > 0 && c(m[0].contentRect.height);
        });
      });
      return Q.observe(a.current), () => {
        p !== null && cancelAnimationFrame(p), Q.disconnect();
      };
    }, [
      e,
      c
    ]), {
      anchorOrigin: r === "bottom" ? {
        vertical: "bottom",
        horizontal: "center"
      } : {
        vertical: "top",
        horizontal: "center"
      },
      transformOrigin: r === "bottom" ? {
        vertical: "top",
        horizontal: "center"
      } : {
        vertical: "bottom",
        horizontal: "center"
      },
      maxHeight: o,
      setContentRef: u,
      popoverActionRef: l
    };
  };
  function yU(A, e, t) {
    if (A.fallbackFields && Array.isArray(A.fallbackFields) && A.fallbackFields.length > 0) for (const r of A.fallbackFields) {
      const n = e[r];
      if (n && typeof n == "string") {
        const o = Za(n);
        if (o.isValid && o.normalizedValue.trim() !== "") return o.normalizedValue;
      }
    }
    return !A.fallbackFields || A.fallbackFields.length > 0 ? t : null;
  }
  function QU({ field: A, data: e, onDataChange: t, props: r }) {
    const n = A.name, o = e[n], [i, a] = h.useState(o || ""), [l, s] = h.useState(false), [c, d] = h.useState(null), u = h.useRef(false), f = h.useRef(o), g = h.useRef(null), p = r.context.theme, Q = p.palette.primary.main, { anchorOrigin: m, transformOrigin: F, maxHeight: w, setContentRef: v, popoverActionRef: E } = vU(c, !!c);
    h.useEffect(() => () => {
      g.current !== null && clearTimeout(g.current);
    }, []);
    const C = h.useCallback((S, D = false) => {
      if (g.current !== null && (clearTimeout(g.current), g.current = null), S == null) {
        a(""), s(false), f.current = null, t({
          [n]: null
        }), u.current = false;
        return;
      }
      if (typeof S != "string") {
        s(true);
        return;
      }
      if (S.trim() === "") {
        a(""), s(false), f.current = null, t({
          [n]: null
        }), u.current = false;
        return;
      }
      const N = Za(S);
      if (a(S), !N.isValid) {
        s(true);
        return;
      }
      s(false);
      let k;
      if (A.noGradient === true) {
        const M = qc(N.normalizedValue);
        if (M === null) {
          s(true);
          return;
        }
        k = M;
      } else k = N.normalizedValue || null;
      f.current = k, D ? g.current = setTimeout(() => {
        g.current = null, t({
          [n]: k
        });
      }, 150) : t({
        [n]: k
      });
    }, [
      n,
      A.noGradient,
      t
    ]), x = h.useCallback((S) => C(S, true), [
      C
    ]), I = h.useCallback((S) => C(S.target.value), [
      C
    ]), T = h.useCallback(() => C(null), [
      C
    ]), B = !!c;
    return h.useEffect(() => {
      if (o !== f.current) {
        f.current = o;
        const S = o || "";
        a(S), s(false), (!S || S.trim() === "") && (u.current = false);
      }
    }, [
      o
    ]), h.useEffect(() => {
      if (!B || u.current) return;
      if (o && o.trim() !== "") {
        u.current = true;
        return;
      }
      const S = yU(A, e, Q);
      if (S) {
        const D = Za(S);
        if (D.isValid) if (A.noGradient === true) {
          const O = qc(D.normalizedValue);
          O !== null && (a(S), s(false), f.current = O, t({
            [n]: O
          }));
        } else a(S), s(false), t({
          [n]: S
        });
      }
      u.current = true;
    }, [
      B,
      e,
      n,
      A,
      o,
      Q,
      t
    ]), L.jsx(L.Fragment, {
      children: L.jsxs(nd, {
        theme: p,
        children: [
          L.jsxs(Te, {
            sx: {
              display: "flex",
              alignItems: "flex-start",
              gap: 0.5,
              mt: 1
            },
            children: [
              L.jsx(BC, {
                variant: "standard",
                fullWidth: true,
                value: i,
                error: l,
                helperText: l ? "Invalid color format (use Hex, RGB, RGBA, or Gradient)" : "",
                onChange: I,
                slotProps: {
                  htmlInput: {
                    style: {
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      paddingBottom: "2px",
                      fontSize: "80%"
                    }
                  }
                }
              }),
              i && L.jsx(t0, {
                onClick: T,
                title: Ea.t("clear_color"),
                size: "large",
                sx: {
                  mt: -1,
                  mr: -1.5
                },
                children: L.jsx(CC, {})
              }),
              L.jsx(Te, {
                onClick: (S) => d(S.currentTarget),
                title: Ea.t("choose_color"),
                sx: {
                  mt: i ? "4px" : "-2px",
                  px: "4px",
                  py: i ? "4px" : "3px",
                  backgroundColor: i ? p.name === "light" ? p.palette.common.white : "#121212" : "transparent",
                  borderRadius: "1px",
                  display: "inline-block",
                  cursor: "pointer",
                  verticalAlign: "middle",
                  boxSizing: "border-box",
                  border: l ? `1px solid ${p.palette.error.main}` : i ? `1px solid ${p.name === "light" ? p.palette.grey[400] : p.palette.common.black}` : `1px dashed ${p.name === "light" ? p.palette.grey[400] : p.palette.text.secondary}`,
                  opacity: l ? 0.6 : 1
                },
                children: L.jsx(Te, {
                  sx: {
                    width: i ? "36px" : "38px",
                    height: i ? "14px" : "18px",
                    borderRadius: "2px",
                    background: l ? "repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,0,0,0.1) 2px, rgba(255,0,0,0.1) 4px)" : i || "transparent"
                  }
                })
              })
            ]
          }),
          L.jsx(dd, {
            action: E,
            slotProps: {
              paper: {
                elevation: 0,
                sx: {
                  p: "9px",
                  borderRadius: "6px",
                  backgroundColor: "rgb(32,32,32)",
                  boxSizing: "border-box",
                  maxHeight: w,
                  overflowX: "hidden",
                  overflowY: "auto"
                }
              }
            },
            open: B,
            anchorEl: c,
            onClose: () => d(null),
            transformOrigin: F,
            anchorOrigin: m,
            children: L.jsx(Te, {
              ref: v,
              sx: {
                borderRadius: "6px"
              },
              children: L.jsx(pU, {
                value: i || p.palette.primary.main,
                onChange: x,
                hidePresets: true,
                hideInputs: true,
                hideEyeDrop: true,
                hideInputType: true
              })
            })
          })
        ]
      })
    });
  }
  Dr = function(A) {
    const { name: e, label: t, default: r = "", fallbackFields: n, noGradient: o, hidden: i } = A, a = {
      name: e,
      label: t,
      default: r,
      type: "custom",
      component: (l, s, c, d) => L.jsx(QU, {
        field: l,
        data: s,
        onDataChange: c,
        props: d
      })
    };
    return n !== void 0 && (a.fallbackFields = n), o !== void 0 && (a.noGradient = o), i !== void 0 && (a.hidden = i), a;
  };
  XU = function(A, e, t) {
    return Dr({
      name: A,
      label: e,
      fallbackFields: [
        "sliderColor"
      ],
      ...t
    });
  };
  let eu, bU, oa, FU, EU, xU;
  eu = (A) => {
    if (!A || typeof A != "string") return false;
    const e = A.trim();
    return e === "" || e.startsWith("data:") ? false : !!(e.startsWith("http://") || e.startsWith("https://") || e.startsWith("//") || e.startsWith("/") || e.startsWith("./") || e.startsWith("../") || (e.includes("/") || e.includes("\\")) && /\.[a-zA-Z0-9]+$/.test(e));
  };
  jU = (A) => {
    const { groupName: e = "", allFields: t = true } = A || {}, r = [
      {
        label: "",
        type: "custom",
        component: () => L.jsx(ve, {
          dividerText: "icon"
        }),
        hidden: "data.noIcon"
      },
      {
        name: `icon${e}`,
        label: "icon",
        type: "image",
        default: ""
      },
      {
        name: `iconSmall${e}`,
        label: "small_icon",
        type: "icon64",
        default: ""
      },
      {
        name: `iconSize${e}`,
        label: "icon_size",
        type: "slider",
        min: 1,
        max: 500,
        step: 1,
        hidden: "data.noIcon"
      },
      {
        name: `enableIconColorMask${e}`,
        label: "enable_icon_color_mask",
        type: "checkbox",
        default: false,
        tooltip: "enable_icon_color_mask_tooltip",
        hidden: (o, i) => {
          let a = true;
          const l = i !== void 0 ? i : e, s = o[`icon${l}`], c = o[`iconSmall${l}`];
          return (l === "" || l === "Active") && (a = false), i !== void 0 && (a = !o.iconColor && !o.enableIconColorMask && !o[`iconColor${i}`] && !eu(s) && !eu(c)), a;
        }
      },
      Dr({
        name: `iconColor${e}`,
        label: "icon_color",
        fallbackFields: [
          ""
        ],
        noGradient: true
      }),
      {
        name: `iconXOffset${e}`,
        label: "icon_x_offset",
        type: "text",
        hidden: "data.noIcon"
      },
      {
        name: `iconYOffset${e}`,
        label: "icon_y_offset",
        type: "text",
        hidden: "data.noIcon"
      },
      {
        label: "",
        type: "custom",
        component: () => L.jsx(ve, {
          dividerText: "header"
        }),
        hidden: (o, i) => o.noHeader && !t
      },
      {
        name: `noHeader${e}`,
        type: "checkbox",
        label: "no_header",
        default: false
      },
      {
        name: `noHeaderIcon${e}`,
        type: "checkbox",
        label: "no_header_icon",
        default: false,
        hidden: "data.noHeader"
      },
      {
        name: `header${e}`,
        label: "header_text",
        type: "html",
        default: "",
        hidden: "data.noHeader"
      },
      {
        name: `headerSize${e}`,
        label: "header_size",
        type: "slider",
        min: 0,
        max: 500,
        step: 1,
        hidden: "data.noHeader"
      },
      {
        label: "",
        type: "custom",
        component: () => L.jsx(ve, {
          dividerText: "value"
        })
      },
      {
        name: `alias${e}`,
        label: "alias",
        type: "html",
        default: ""
      },
      {
        name: `value${e}`,
        label: "value",
        type: "text",
        default: "",
        hidden: (o, i) => {
          var _a2;
          return ((_a2 = o.oidObject) == null ? void 0 : _a2.type) === "boolean" || o.name === "valueActive";
        }
      },
      {
        name: `valueSize${e}`,
        label: "value_size",
        type: "slider",
        min: 0,
        max: 500,
        step: 1
      },
      {
        label: "",
        type: "custom",
        component: () => L.jsx(ve, {
          dividerText: "footer"
        }),
        hidden: (o, i) => o.noFooter && !t
      },
      {
        name: `noFooter${e}`,
        label: "no_footer",
        type: "checkbox",
        default: false
      },
      {
        name: `footer${e}`,
        label: "footer_text",
        type: "html",
        default: "",
        hidden: "data.noFooter"
      },
      {
        name: `footerSize${e}`,
        label: "footer_size",
        type: "slider",
        min: 0,
        max: 500,
        step: 1,
        hidden: "data.noFooter"
      },
      {
        label: "",
        type: "custom",
        component: () => L.jsx(ve, {
          dividerText: "characteristics"
        })
      },
      {
        name: `noCard${e}`,
        label: "without_card",
        type: "checkbox",
        default: false
      },
      {
        name: `squaredCorner${e}`,
        label: "squared_corner",
        type: "checkbox",
        default: false
      },
      Dr({
        name: `textColor${e}`,
        label: "text_color",
        fallbackFields: [
          ""
        ]
      }),
      {
        label: "",
        name: "allFieldsDivider",
        type: "custom",
        component: () => L.jsx(ve, {})
      },
      {
        name: `outlined${e}`,
        label: "outlined",
        type: "checkbox",
        default: false
      },
      {
        name: `outlinedFrame${e}`,
        label: "outlined_frame",
        type: "checkbox",
        default: false
      },
      {
        label: "",
        name: "allFieldsDivider",
        type: "custom",
        component: () => L.jsx(ve, {})
      },
      {
        name: `basePadding${e}`,
        label: "base_padding",
        type: "slider",
        min: 0,
        max: 10,
        step: 0.1,
        default: 1
      },
      {
        name: `baseElevation${e}`,
        label: "base_elevation",
        type: "slider",
        min: 0,
        max: 24,
        step: 1,
        default: 4
      },
      {
        label: "",
        name: "allFieldsDivider",
        type: "custom",
        component: () => L.jsx(ve, {
          dividerText: "geometry"
        })
      },
      {
        name: `square${e}`,
        label: "square",
        type: "checkbox",
        hidden: "data.circle || data.ellipse",
        default: false
      },
      {
        name: `ellipse${e}`,
        label: "ellipse",
        type: "checkbox",
        hidden: "data.circle || data.square",
        default: false
      },
      {
        name: `circle${e}`,
        label: "circle",
        type: "checkbox",
        hidden: "data.ellipse || data.square"
      },
      {
        label: "",
        type: "custom",
        component: () => L.jsx(ve, {
          dividerText: "background"
        })
      },
      Dr({
        name: `background${e}`,
        label: "background",
        fallbackFields: []
      }),
      {
        label: "",
        type: "custom",
        component: () => L.jsx(ve, {
          dividerText: "frame_background"
        })
      },
      Dr({
        name: `frameBackground${e}`,
        label: "frame_background",
        fallbackFields: []
      })
    ];
    if (t) {
      const o = [
        `alias${e}`,
        `value${e}`
      ];
      return r.filter((i) => !o.includes(i.name));
    }
    const n = [
      "allFieldsDivider",
      `noHeader${e}`,
      `noHeaderIcon${e}`,
      e === "Active" ? `value${e}` : "",
      `noFooter${e}`,
      `noCard${e}`,
      `squaredCorner${e}`,
      `outlined${e}`,
      `outlinedFrame${e}`,
      `basePadding${e}`,
      `baseElevation${e}`,
      `square${e}`,
      `ellipse${e}`,
      `circle${e}`
    ];
    return r.filter((o) => !n.includes(o.name));
  };
  bU = async (A, e) => {
    var _a2;
    const t = e._id.split(".");
    for (let r = t.length; r > 0; r--) try {
      const n = await A.getObject(t.slice(0, r).join("."));
      if ((_a2 = n == null ? void 0 : n.common) == null ? void 0 : _a2.icon) return n.common.icon;
    } catch {
      continue;
    }
    return null;
  };
  oa = (A, e = "oid") => {
    var _a2;
    Object.keys(A).forEach((r) => {
      r.startsWith(e) && r.endsWith("Object") && delete A[r];
    });
    const t = [
      "iconSmall",
      "icon",
      "iconSize",
      "iconColor",
      "iconHover",
      "iconXOffset",
      "iconYOffset",
      "noHeader",
      "header",
      "headerSize",
      "alias",
      "value",
      "valueSize",
      "noFooter",
      "footer",
      "footerSize",
      "noCard",
      "squaredCorner",
      "textColor",
      "outlined",
      "outlinedFrame",
      "basePadding",
      "baseElevation",
      "square",
      "ellipse",
      "circle",
      "background",
      "backgroundColor",
      "frameBackground",
      "frameBackgroundColor"
    ];
    if (e === "oid") {
      delete A.icon, delete A.write;
      const r = typeof A.values_count == "number" ? A.values_count : 0, n = Object.keys(((_a2 = A.oidObject) == null ? void 0 : _a2.commonStates) || {}).length, o = Math.max(r, n);
      for (let i = 1; i <= o; i++) t.forEach((a) => {
        delete A[`${a}${i}`];
      });
      A.values_count = 0;
    }
  };
  FU = (A, e) => {
    switch (e) {
      case "boolean":
        return A === "true";
      case "number":
        return Number(A);
      case "string":
        return String(A);
      case "mixed":
        return A === "true" ? true : A === "false" ? false : !isNaN(Number(A)) && A !== "" ? Number(A) : String(A);
      default:
        return String(A);
    }
  };
  UU = (A, e = "oid") => async (t, r, n, o) => {
    if (!r[e]) {
      oa(r, e), setTimeout(() => n(r), 100);
      return;
    }
    try {
      const i = await o.getObject(r[e]);
      if (!i) {
        oa(r, e), setTimeout(() => n(r), 100);
        return;
      }
      const a = i.common.type;
      if (!A.includes(a)) return;
      const l = {
        _id: i._id,
        name: i.common.name || "",
        type: a,
        icon: await bU(o, i),
        write: i.common.write,
        onlyDisplay: !i.common.write,
        unit: i.common.unit || "",
        minValue: i.common.min || 0,
        maxValue: i.common.max || 100
      };
      if (r[`${e}Object`] = l, r.icon = l.icon, r.write = l.write, r.onlyDisplay = l.onlyDisplay, r.minValue = l.minValue, r.maxValue = l.maxValue, i.common.states) {
        let s = i.common.states;
        if (Array.isArray(s)) {
          const c = {};
          s.forEach((d) => {
            c[d] = d;
          }), s = c;
        }
        r[`${e}Object`].commonStates = s, e === "oid" && (r.values_count = Object.keys(s).length, Object.entries(s).forEach(([c, d], u) => {
          const f = u + 1;
          r[`value${f}`] = FU(c, a), r[`alias${f}`] = String(d);
        }));
      } else a === "boolean" && e === "oid" ? (r[`${e}Object`].commonStates = {
        true: "TRUE",
        false: "FALSE"
      }, r.values_count = 2, r.value1 = true, r.alias1 = "TRUE", r.value2 = false, r.alias2 = "FALSE") : e === "oid" && (r.values_count = 0);
      e === "oid" && r.ignoreCommonStates !== false && (r.values_count = 0), setTimeout(() => n(r), 100);
    } catch (i) {
      console.error(`Error handling OID change for ${r[e]}:`, i), oa(r, e), setTimeout(() => n(r), 100);
    }
  };
  JU = (A) => [
    {
      name: "oid",
      type: "id",
      label: "oid",
      onChange: UU(A)
    },
    {
      label: "",
      type: "custom",
      component: () => L.jsx(ve, {}),
      hidden: (e, t) => e.oidObject === void 0
    },
    {
      name: "unit",
      label: "unit",
      type: "text",
      default: "",
      hidden: (e, t) => e.oidObject === void 0,
      onChange: async (e, t, r, n) => {
        t.oidObject && (t.oidObject.unit = t.unit || "", setTimeout(() => r(t), 100));
      }
    },
    {
      label: "",
      type: "custom",
      component: () => L.jsx(ve, {}),
      hidden: (e, t) => e.oidObject === void 0
    },
    {
      name: "ignoreCommonStates",
      type: "checkbox",
      default: true,
      label: "ignore_common_states",
      tooltip: "ignore_common_states_tooltip",
      hidden: (e, t) => e.oidObject === void 0,
      onChange: async (e, t, r, n) => {
        var _a2, _b2;
        if (t.ignoreCommonStates !== false) t.values_count = 0;
        else {
          const o = (_a2 = t.oidObject) == null ? void 0 : _a2.commonStates;
          o ? t.values_count = Object.keys(o).length : ((_b2 = t.oidObject) == null ? void 0 : _b2.type) === "boolean" ? t.values_count = 2 : t.values_count = 0;
        }
        setTimeout(() => r(t), 100);
      }
    },
    {
      name: "values_count",
      type: "number",
      default: 0,
      label: "values_count",
      hidden: (e, t) => {
        var _a2;
        return ((_a2 = e.oidObject) == null ? void 0 : _a2.type) === "boolean" || e.oidObject === void 0 || e.ignoreCommonStates !== false;
      }
    }
  ];
  EU = () => {
    const { isSignalVisible: A, refService: e, widget: t } = h.useContext(hr), r = h.useMemo(() => {
      const o = [], i = Number(t.data["signals-count"]) || 0;
      for (let a = 0; a < i; a++) A(a) && o.push(a);
      return o;
    }, [
      t.data,
      A
    ]), n = h.useMemo(() => {
      const o = {};
      return r.forEach((i) => {
        o[i] = t.data[`signals-color-${i}`];
      }), o;
    }, [
      t.data,
      r
    ]);
    h.useEffect(() => {
      if (!(e == null ? void 0 : e.current)) return;
      const i = e.current.children, a = [];
      Array.from(i).forEach((l) => {
        const s = l.children[0];
        s && s instanceof HTMLElement && s.className === "vis-signal-icon iconOwn" && a.push(s);
      }), a.forEach((l, s) => {
        const c = r[s], d = c !== void 0 ? n[c] : void 0;
        d ? (l.style.color = d, l.style.filter = "drop-shadow(0px 10000px 0)", l.style.transform = "translateY(-10000px)") : (l.style.color = "", l.style.filter = "", l.style.transform = "");
      });
    }, [
      r,
      n,
      e
    ]);
  };
  SU = (A, e = 28) => {
    const [t, r] = h.useState({
      width: void 0,
      height: void 0,
      maxWidth: void 0
    }), n = h.useCallback((i) => {
      if (i.length === 0) return;
      const a = i[0], { width: l, height: s } = a.contentRect, c = Math.round(l), d = Math.round(s), u = c <= d + e + 12 ? c - e - 12 : d;
      r({
        width: c,
        height: d,
        maxWidth: u
      });
    }, [
      e
    ]), o = h.useMemo(() => A ? typeof A == "object" && "current" in A ? A.current : A : null, [
      A
    ]);
    return h.useEffect(() => {
      if (!o) {
        r({
          width: void 0,
          height: void 0,
          maxWidth: void 0
        });
        return;
      }
      const i = new ResizeObserver(n);
      try {
        i.observe(o);
      } catch (a) {
        console.warn("ResizeObserver failed to observe element:", a);
        return;
      }
      return () => {
        try {
          i.disconnect();
        } catch (a) {
          console.warn("ResizeObserver cleanup failed:", a);
        }
      };
    }, [
      o,
      n
    ]), t;
  };
  xU = (A) => {
    const { widget: e } = h.useContext(hr), [t, r] = h.useState("100%"), [n, o] = h.useState("100%"), { width: i, height: a } = SU(A), l = h.useMemo(() => ({
      basePadding: e.data.basePadding || 0,
      isSquare: e.data.square || false,
      isCircle: e.data.circle || false
    }), [
      e.data.basePadding,
      e.data.square,
      e.data.circle
    ]), s = h.useMemo(() => l.basePadding * 16, [
      l.basePadding
    ]);
    return h.useEffect(() => {
      if (!i || !a || i < 0 || a < 0) return;
      if (!l.isSquare && !l.isCircle) {
        r("100%"), o("100%");
        return;
      }
      if (!(i >= s && a >= s)) {
        r("0px"), o("0px");
        return;
      }
      const d = i - s, u = a - s, f = Math.min(d, u);
      r(`${f}px`), o(`${f}px`);
    }, [
      i,
      a,
      s,
      l.isSquare,
      l.isCircle
    ]), {
      width: t,
      height: n
    };
  };
  Zt = function(A) {
    return A == null || typeof A != "string" || A.trim() === "" ? null : BU(A) ? A : null;
  };
  IU = h.forwardRef(({ children: A, data: e, oidValue: t = null, isValidType: r = true, bgActive: n = true, sx: o = {} }, i) => {
    const a = h.useRef(null), l = h.useRef(null), [s, c] = h.useState(null), d = h.useRef(null), u = h.useRef(null), f = h.useContext(hr);
    if (!f) throw new Error("CollectionBase must be used within CollectionProvider");
    const { wrappedContent: g, widget: p } = f, { backgroundStyles: Q, borderStyles: m } = _s(p.style), { width: F, height: w } = xU(s);
    EU();
    const v = p.data.oidObject, E = v == null ? void 0 : v._id, C = h.useMemo(() => {
      if (p.data.noFooter) return "";
      const T = t || t === 0 || String(t) === "false" ? `${t}${(v == null ? void 0 : v.unit) ?? ""}` : "";
      return e.footer || e.alias || e.value || T || "";
    }, [
      e.footer,
      e.alias,
      e.value,
      t,
      v == null ? void 0 : v.unit,
      p.data.noFooter
    ]), x = h.useMemo(() => po({
      overflow: "hidden",
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      ...Q,
      background: g ? e.frameBackground : e.frameBackground || "transparent",
      backgroundColor: g ? Zt(e.frameBackground) ? void 0 : e.frameBackground : Zt(e.frameBackground) ? "transparent" : e.frameBackground,
      borderColor: g ? "" : e.frameBackground || (m == null ? void 0 : m["border-color"])
    }), [
      Q,
      m,
      e.frameBackground,
      g
    ]), I = h.useMemo(() => po({
      overflow: "hidden",
      width: F,
      height: w,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: n && g ? e.background : n ? e.background || "transparent" : g ? void 0 : "transparent",
      borderColor: g ? "" : e.background || (m == null ? void 0 : m["border-color"]),
      borderRadius: p.data.circle || p.data.ellipse ? "50%" : void 0,
      ...o
    }), [
      F,
      w,
      n,
      g,
      e.background,
      m,
      p.data.circle,
      p.data.ellipse,
      o
    ]);
    return h.useEffect(() => {
      p.data.noHeader || !d.current || (d.current.innerHTML = e.header);
    }, [
      e.header,
      p.data.noHeader
    ]), h.useEffect(() => {
      p.data.noFooter || !u.current || (u.current.innerHTML = String(C));
    }, [
      C,
      p.data.noFooter
    ]), h.useImperativeHandle(i, () => ({
      get paper0() {
        return (a == null ? void 0 : a.current) ?? null;
      },
      get paper1() {
        return (l == null ? void 0 : l.current) ?? null;
      },
      get header() {
        return (d == null ? void 0 : d.current) ?? null;
      }
    })), L.jsxs(Ca, {
      ref: a,
      className: "BASE-PAPER-0",
      square: p.data.squaredCorner,
      variant: p.data.outlinedFrame ? "outlined" : "elevation",
      sx: x,
      children: [
        !!r && L.jsxs(L.Fragment, {
          children: [
            L.jsx(Te, {
              sx: {
                width: p.data.noHeader ? "0%" : "100%",
                height: p.data.noHeader ? "0%" : "auto",
                mt: (p.data.basePadding ?? 8) / 2,
                mb: -(p.data.basePadding ?? 8) / 2
              },
              children: L.jsx(qn, {
                ref: d,
                noWrap: true,
                variant: "body2",
                sx: {
                  fontSize: e.headerSize,
                  background: Zt(e.textColorCm),
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: Zt(e.textColorCm) ? "transparent" : e.textColorCm
                }
              })
            }),
            L.jsx(Te, {
              className: "BASE-BOX-1",
              ref: c,
              sx: {
                overflow: "hidden",
                p: p.data.basePadding,
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              },
              children: L.jsx(Ca, {
                ref: l,
                className: "BASE-PAPER-1",
                elevation: p.data.outlined ? 0 : Number(p.data.baseElevation) || 0,
                square: !p.data.basePadding || p.data.squaredCorner,
                variant: p.data.outlined ? "outlined" : "elevation",
                sx: I,
                children: A
              })
            }),
            L.jsx(Te, {
              sx: {
                width: p.data.noFooter ? "0%" : "100%",
                height: p.data.noFooter ? "0%" : "auto",
                mt: -(p.data.basePadding ?? 8) / 2,
                mb: (p.data.basePadding ?? 8) / 2
              },
              children: L.jsx(qn, {
                ref: u,
                noWrap: true,
                variant: "body2",
                sx: {
                  fontSize: e.footerSize,
                  background: Zt(e.textColorCm),
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: Zt(e.textColorCm) ? "transparent" : e.textColorCm
                }
              })
            })
          ]
        }),
        !r && L.jsx(Te, {
          sx: {
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          },
          children: L.jsx(qn, {
            variant: "body2",
            sx: {
              p: 1,
              width: "100%",
              textAlign: "center"
            },
            children: E ? `${E} has an invalid type!` : "Please select a valid object ID"
          })
        })
      ]
    });
  });
  IU.displayName = "CollectionBase";
  let tu;
  HU = (A) => !A || typeof A != "string" ? false : /^data:image\/(svg\+xml|png|jpe?g|gif);base64,/i.test(A);
  TU = (A, e, t) => !t && !HU(A) ? {} : !e || e === "" ? {} : {
    color: e,
    filter: "drop-shadow(0px 10000px 0)",
    transform: "translateY(-10000px)"
  };
  tu = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
  LU = ({ src: A, style: e = {}, alt: t = "" }) => {
    const r = A && A !== "undefined" && A !== null ? A : tu;
    return L.jsx("img", {
      src: r,
      alt: t,
      style: e,
      onError: (n) => {
        console.log("ERROR LOADING IMAGE, FALLING BACK TO TRANSPARENT PIXEL");
        const o = n.currentTarget;
        o.onerror = null, o.src = tu;
      }
    });
  };
  YU = ({ data: A, widget: e }) => {
    const r = h.useContext(hr).theme, n = A.icon, o = A.iconColor || r.palette.primary.main;
    return !e.data.noHeaderIcon && n ? L.jsx(LU, {
      alt: "",
      src: n,
      style: {
        position: "absolute",
        top: `calc(0px - ${A.iconYOffsetCm})`,
        right: `calc(0px - ${A.iconXOffsetCm})`,
        height: A.iconSizeCm,
        ...TU(n, o, !!A.forceColorMaskCm)
      }
    }) : null;
  };
  function kU(A, e) {
    return A[e];
  }
  function ru(A) {
    return typeof A == "object" && A !== null && "sliderOrientation" in A;
  }
  RU = (A) => typeof A == "number" ? `calc(${A / 100}rem * 0.875)` : void 0;
  function OU(A) {
    return {
      markerIconSize: A.markerIconSize,
      markerTextColor: A.markerTextColor,
      markerTextSize: A.markerTextSize,
      markerIconColor: A.markerIconColor
    };
  }
  function KU(A) {
    return {};
  }
  function BA(A) {
    for (const e of A) if (e.condition !== false && e.value !== void 0 && e.value !== null && !(typeof e.value == "string" && e.value.trim() === "")) return e.value;
  }
  function MU(A) {
    const { rxData: e, oidObject: t, oidName: r, theme: n, fontStyles: o, textStyles: i, backgroundStyles: a, formatSize: l, getDataValue: s, widgetResolver: c, isSlider: d } = A, u = (f) => f && String(f) !== "" ? String(f) : void 0;
    return {
      icon: (f, g) => BA([
        {
          condition: !!e.noIcon,
          value: ""
        },
        {
          condition: g,
          value: s("icon", "Active")
        },
        {
          condition: g,
          value: s("iconSmall", "Active")
        },
        {
          value: s("icon", String(f))
        },
        {
          value: s("iconSmall", String(f))
        },
        {
          value: s("icon", "")
        },
        {
          value: s("iconSmall", "")
        }
      ]) ?? "",
      iconActive: (f, g) => g ? BA([
        {
          condition: !!e.noIcon,
          value: ""
        },
        {
          value: s("icon", String(f))
        },
        {
          value: s("iconSmall", String(f))
        }
      ]) ?? "" : "",
      iconSizeCm: (f, g) => BA([
        {
          condition: s("iconSize", "") === 0,
          value: "0px"
        },
        {
          condition: !!s("iconSize", ""),
          value: `calc(24px * ${s("iconSize", "")} / 100)`
        }
      ]) ?? "24px",
      iconSize: (f, g) => BA([
        {
          condition: g && s("iconSize", "Active") === 0,
          value: "0px"
        },
        {
          condition: g && !!s("iconSize", "Active"),
          value: `calc(24px * ${s("iconSize", "Active")} / 100)`
        },
        {
          condition: s("iconSize", String(f)) === 0,
          value: "0px"
        },
        {
          condition: !!s("iconSize", String(f)),
          value: `calc(24px * ${s("iconSize", String(f))} / 100)`
        }
      ]) ?? "24px",
      iconSizeActive: (f, g) => g ? BA([
        {
          condition: s("iconSize", String(f)) === 0,
          value: "0px"
        },
        {
          condition: !!s("iconSize", String(f)),
          value: `calc(24px * ${s("iconSize", String(f))} / 100)`
        }
      ]) ?? "24px" : "24px",
      iconSizeOnly: (f, g) => BA([
        {
          condition: g && (!!s("iconSize", "Active") || s("iconSize", "Active") === 0),
          value: `${s("iconSize", "Active")}%`
        },
        {
          condition: !!s("iconSize", String(f)) || s("iconSize", String(f)) === 0,
          value: `${s("iconSize", String(f))}%`
        }
      ]) ?? "100%",
      iconSizeActiveOnly: (f, g) => g ? BA([
        {
          value: s("iconSize", String(f))
        }
      ]) ?? void 0 : void 0,
      iconWidth: (f, g) => BA([
        {
          condition: g,
          value: e.iconSizeActive
        },
        {
          value: s("iconSize", String(f))
        },
        {
          condition: d,
          value: c.markerIconSize
        },
        {
          value: e.iconSize
        },
        {
          value: 100
        }
      ]) ?? 100,
      iconHeight: (f, g) => BA([
        {
          condition: g,
          value: e.iconSizeActive
        },
        {
          value: s("iconSize", String(f))
        },
        {
          condition: d,
          value: c.markerIconSize
        },
        {
          value: e.iconSize
        },
        {
          value: 100
        }
      ]) ?? 100,
      forceColorMaskCm: (f, g) => BA([
        {
          value: s("enableIconColorMask", "")
        }
      ]) ?? false,
      forceColorMask: (f, g) => BA([
        {
          condition: g,
          value: s("enableIconColorMask", "Active")
        },
        {
          value: s("enableIconColorMask", String(f))
        },
        {
          condition: !!s("enableIconColorMask", String(f)),
          value: s("enableIconColorMask", "")
        }
      ]) ?? false,
      forceColorMaskActive: (f, g) => g ? BA([
        {
          value: s("enableIconColorMask", String(f))
        }
      ]) ?? false : false,
      iconColor: (f, g) => BA([
        {
          condition: g,
          value: s("iconColor", "Active")
        },
        {
          value: s("iconColor", String(f))
        },
        {
          value: s("iconColor", "")
        }
      ]) ?? n.palette.primary.main,
      iconColorActive: (f, g) => g ? BA([
        {
          value: s("iconColor", String(f))
        }
      ]) ?? "" : "",
      iconHover: (f, g) => BA([
        {
          value: e.iconHover ? `${e.iconHover}%` : void 0
        }
      ]) ?? "",
      iconHoverActive: (f, g) => g ? BA([
        {
          value: s("iconHover", String(f)) ? `${s("iconHover", String(f))}%` : void 0
        }
      ]) ?? void 0 : void 0,
      iconXOffsetCm: (f, g) => BA([
        {
          value: s("iconXOffset", "")
        }
      ]) ?? "0px",
      iconYOffsetCm: (f, g) => BA([
        {
          value: s("iconYOffset", "")
        }
      ]) ?? "0px",
      iconXOffset: (f, g) => BA([
        {
          condition: g,
          value: s("iconXOffset", "Active")
        },
        {
          value: s("iconXOffset", String(f))
        }
      ]) ?? "0px",
      iconYOffset: (f, g) => BA([
        {
          condition: g,
          value: s("iconYOffset", "Active")
        },
        {
          value: s("iconYOffset", String(f))
        }
      ]) ?? "0px",
      iconXOffsetActive: (f, g) => g ? BA([
        {
          condition: !s("iconXOffset", String(f)),
          value: "0px"
        },
        {
          value: s("iconXOffset", String(f))
        }
      ]) ?? "0px" : "0px",
      iconYOffsetActive: (f, g) => g ? BA([
        {
          condition: !s("iconYOffset", String(f)),
          value: "0px"
        },
        {
          value: s("iconYOffset", String(f))
        }
      ]) ?? "0px" : "0px",
      textColorActive: (f, g) => g ? BA([
        {
          value: s("textColor", String(f)),
          condition: s("textColor", String(f)) !== ""
        },
        {
          condition: d,
          value: c.markerTextColor && c.markerTextColor !== "" ? c.markerTextColor : void 0
        },
        {
          value: e.textColor && e.textColor !== "" ? e.textColor : void 0
        }
      ]) ?? void 0 : void 0,
      textColorCm: (f, g) => BA([
        {
          condition: typeof s("textColor", "") == "string",
          value: s("textColor", "")
        },
        {
          condition: typeof (i == null ? void 0 : i.color) == "string",
          value: i == null ? void 0 : i.color
        }
      ]) ?? "",
      textColor: (f, g) => BA([
        {
          condition: g && typeof s("textColor", "Active") == "string",
          value: s("textColor", "Active")
        },
        {
          condition: typeof s("textColor", String(f)) == "string",
          value: s("textColor", String(f))
        },
        {
          condition: d,
          value: c.markerTextColor && c.markerTextColor !== "" ? c.markerTextColor : void 0
        },
        {
          condition: typeof s("textColor", "") == "string",
          value: s("textColor", "")
        },
        {
          condition: typeof (i == null ? void 0 : i.color) == "string",
          value: i == null ? void 0 : i.color
        }
      ]) ?? "",
      fontSize: (f, g) => BA([
        {
          condition: g && typeof e.valueSizeActive == "number",
          value: l(e.valueSizeActive)
        },
        {
          value: typeof s("valueSize", String(f)) == "number" ? l(s("valueSize", String(f))) : void 0
        },
        {
          condition: d && typeof c.markerTextSize == "number",
          value: l(c.markerTextSize)
        },
        {
          value: typeof e.valueSize == "number" ? l(e.valueSize) : void 0
        },
        {
          condition: typeof (o == null ? void 0 : o["font-size"]) == "string",
          value: o == null ? void 0 : o["font-size"]
        }
      ]) ?? null,
      headerSize: (f, g) => BA([
        {
          condition: g && typeof s("headerSize", "Active") == "number",
          value: `${l(s("headerSize", "Active"))}`
        },
        {
          condition: typeof s("headerSize", String(f)) == "number",
          value: `${l(s("headerSize", String(f)))}`
        },
        {
          condition: typeof s("headerSize", "") == "number",
          value: `${l(s("headerSize", ""))}`
        },
        {
          condition: typeof (o == null ? void 0 : o["font-size"]) == "string",
          value: o == null ? void 0 : o["font-size"]
        }
      ]) ?? "0.875rem",
      footerSize: (f, g) => BA([
        {
          condition: g && typeof s("footerSize", "Active") == "number",
          value: `${l(s("footerSize", "Active"))}`
        },
        {
          condition: typeof s("footerSize", String(f)) == "number",
          value: `${l(s("footerSize", String(f)))}`
        },
        {
          condition: typeof s("footerSize", "") == "number",
          value: `${l(s("footerSize", ""))}`
        },
        {
          condition: typeof (o == null ? void 0 : o["font-size"]) == "string",
          value: o == null ? void 0 : o["font-size"]
        }
      ]) ?? "0.875rem",
      valueSize: (f, g) => BA([
        {
          condition: g && typeof s("valueSize", "Active") == "number",
          value: `${l(s("valueSize", "Active"))}`
        },
        {
          condition: typeof s("valueSize", String(f)) == "number",
          value: `${l(s("valueSize", String(f)))}`
        },
        {
          condition: typeof s("valueSize", "") == "number",
          value: `${l(s("valueSize", ""))}`
        },
        {
          condition: typeof (o == null ? void 0 : o["font-size"]) == "string",
          value: o == null ? void 0 : o["font-size"]
        }
      ]) ?? "0.875rem",
      valueSizeActive: (f, g) => g ? BA([
        {
          value: typeof s("valueSize", String(f)) == "number" ? l(s("valueSize", String(f))) : null
        }
      ]) ?? null : null,
      header: (f, g) => String(BA([
        {
          condition: g,
          value: u(s("header", "Active"))
        },
        {
          value: u(s("header", String(f)))
        },
        {
          value: u(s("header", ""))
        },
        {
          value: u(r)
        }
      ]) ?? "").replace(/(\r\n|\n|\r)/gm, ""),
      footer: (f, g) => String(BA([
        {
          condition: g,
          value: u(s("footer", "Active"))
        },
        {
          value: u(s("footer", String(f)))
        },
        {
          value: u(s("footer", ""))
        }
      ]) ?? "").replace(/(\r\n|\n|\r)/gm, ""),
      alias: (f, g) => String(s("alias", String(f)) || "").replace(/(\r\n|\n|\r)/gm, ""),
      value: (f, g) => {
        const p = s("value", String(f));
        return p != null ? `${p}${(t == null ? void 0 : t.unit) !== void 0 ? t.unit : ""}` : void 0;
      },
      backgroundColor: (f, g) => BA([
        {
          value: e.backgroundColor && e.backgroundColor !== "" ? e.backgroundColor : void 0
        },
        {
          value: a == null ? void 0 : a["background-color"]
        },
        {
          value: ""
        }
      ]) ?? "",
      backgroundColorActive: (f, g) => g ? s("backgroundColor", String(f)) : void 0,
      background: (f, g) => BA([
        {
          condition: g,
          value: s("background", "Active")
        },
        {
          value: s("background", String(f))
        },
        {
          value: s("background", "")
        }
      ]) ?? "",
      backgroundActive: (f, g) => g ? s("background", String(f)) : void 0,
      frameBackgroundColor: (f, g) => BA([
        {
          value: e.frameBackgroundColor && e.frameBackgroundColor !== "" ? e.frameBackgroundColor : void 0
        },
        {
          value: a == null ? void 0 : a["background-color"]
        },
        {
          value: ""
        }
      ]) ?? "",
      frameBackgroundColorActive: (f, g) => g ? s("frameBackgroundColor", String(f)) : void 0,
      frameBackground: (f, g) => BA([
        {
          condition: g,
          value: s("frameBackground", "Active")
        },
        {
          value: s("frameBackground", String(f))
        },
        {
          value: s("frameBackground", "")
        }
      ]) ?? "",
      frameBackgroundActive: (f, g) => g ? s("frameBackground", String(f)) : void 0,
      markerIconSize: (f, g) => d ? c.markerIconSize : void 0,
      markerTextColor: (f, g) => d ? c.markerTextColor : void 0,
      markerTextSize: (f, g) => d ? c.markerTextSize : void 0,
      markerIconColor: (f, g) => d ? c.markerIconColor : void 0
    };
  }
  function DU(A = "", e = false, t) {
    return {
      icon: t.icon(A, e),
      iconActive: t.iconActive(A, e),
      iconSizeCm: t.iconSizeCm(A, e),
      iconSize: t.iconSize(A, e),
      iconSizeActive: t.iconSizeActive(A, e),
      iconSizeOnly: t.iconSizeOnly(A, e),
      iconWidth: t.iconWidth(A, e),
      iconHeight: t.iconHeight(A, e),
      iconSizeActiveOnly: t.iconSizeActiveOnly(A, e),
      forceColorMaskCm: t.forceColorMaskCm(A, e),
      forceColorMask: t.forceColorMask(A, e),
      forceColorMaskActive: t.forceColorMaskActive(A, e),
      iconColor: t.iconColor(A, e),
      iconColorActive: t.iconColorActive(A, e),
      iconHover: t.iconHover(A, e),
      iconHoverActive: t.iconHoverActive(A, e),
      iconXOffsetCm: t.iconXOffsetCm(A, e),
      iconYOffsetCm: t.iconYOffsetCm(A, e),
      iconXOffset: t.iconXOffset(A, e),
      iconYOffset: t.iconYOffset(A, e),
      iconXOffsetActive: t.iconXOffsetActive(A, e),
      iconYOffsetActive: t.iconYOffsetActive(A, e),
      textColorActive: t.textColorActive(A, e),
      textColorCm: t.textColorCm(A, e),
      textColor: t.textColor(A, e),
      header: t.header(A, e),
      headerSize: t.headerSize(A, e),
      footer: t.footer(A, e),
      footerSize: t.footerSize(A, e),
      alias: t.alias(A, e),
      value: t.value(A, e),
      valueSize: t.valueSize(A, e),
      valueSizeActive: t.valueSizeActive(A, e),
      backgroundColor: t.backgroundColor(A, e),
      backgroundColorActive: t.backgroundColorActive(A, e),
      background: t.background(A, e),
      backgroundActive: t.backgroundActive(A, e),
      frameBackgroundColor: t.frameBackgroundColor(A, e),
      frameBackgroundColorActive: t.frameBackgroundColorActive(A, e),
      frameBackground: t.frameBackground(A, e),
      frameBackgroundActive: t.frameBackgroundActive(A, e)
    };
  }
  ZU = function(A) {
    const { theme: e, widget: t, widget: { data: r }, getPropertyValue: n } = h.useContext(hr), o = r[`${A}Object`], i = n(A), a = o == null ? void 0 : o.name, { fontStyles: l, textStyles: s, backgroundStyles: c } = _s(t.style), [d, u] = h.useState(), f = h.useCallback(RU, []), g = h.useCallback((x, I = "") => {
      const T = `${x}${I}`;
      return kU(r, T);
    }, [
      r
    ]), p = h.useMemo(() => ru(r) ? OU(r) : KU(), [
      r
    ]), Q = h.useMemo(() => MU({
      rxData: r,
      oidObject: o,
      oidName: a,
      theme: e,
      fontStyles: l,
      textStyles: s,
      backgroundStyles: c,
      formatSize: f,
      getDataValue: g,
      widgetResolver: p,
      isSlider: ru(r)
    }), [
      r,
      o,
      a,
      e,
      l,
      s,
      c,
      f,
      g,
      p
    ]), m = h.useCallback((x = "", I = false) => DU(x, I, Q), [
      Q
    ]), { states: F, widgetStates: w, minValue: v, maxValue: E } = h.useMemo(() => {
      const x = {};
      let I = null, T = null;
      const B = [], S = o == null ? void 0 : o.type, D = (o == null ? void 0 : o.commonStates) || {}, O = Object.entries(D);
      if (S === "number" || S === "string" || S === "boolean" || S === "mixed") {
        const N = r.ignoreCommonStates === false ? r.values_count : O.length > 0 ? O.length : r.values_count;
        for (let k = 1; k <= N; k++) {
          const M = g("value", String(k)), W = r[`alias${k}`], nA = o == null ? void 0 : o.unit;
          if (M === void 0 || !/\S/.test(String(M))) continue;
          const P = O.find(([$]) => $ === String(M)), X = P ? S === "number" ? Number(P[0]) : String(P[0]) : S === "number" ? Number(M) : M, AA = String(i) === String(X), j = m(k, AA);
          B.push({
            value: X,
            label: j.alias || String(j.value),
            alias: j.alias,
            fontSize: j.valueSize,
            textColor: j.textColor,
            icon: j.icon,
            iconSize: j.iconSize,
            iconSizeOnly: j.iconSizeOnly,
            iconWidth: j.iconWidth,
            iconHeight: j.iconHeight,
            iconXOffset: j.iconXOffset,
            iconYOffset: j.iconYOffset,
            iconColor: j.iconColor,
            iconHover: j.iconHover,
            forceColorMask: j.forceColorMask,
            valueSize: j.valueSize,
            background: j.background,
            frameBackground: j.frameBackground
          });
          const R = String(P ? P[0] : M);
          x[R] = W && String(W).trim() !== "" ? W : `${M}${nA}`;
        }
      }
      if (S === "number" && B.length) {
        const N = B.map((k) => typeof k.value == "number" ? k.value : NaN).filter((k) => !isNaN(k));
        N.length > 0 && (I = Math.min(...N), T = Math.max(...N));
      }
      return {
        states: B,
        widgetStates: x,
        minValue: I,
        maxValue: T
      };
    }, [
      o == null ? void 0 : o.type,
      o == null ? void 0 : o.commonStates,
      o == null ? void 0 : o.unit,
      r,
      g,
      i,
      m
    ]), C = h.useMemo(() => {
      switch (o == null ? void 0 : o.type) {
        case "mixed":
        case "boolean":
        case "number":
        case "string": {
          const I = F.findIndex((T) => String(T.value) === String(i));
          return I !== -1 ? (u(I + 1), m(I + 1, true)) : (u(void 0), m("", true));
        }
        default:
          return m("", true);
      }
    }, [
      o,
      i,
      F,
      m
    ]);
    return {
      widgetStates: w,
      minValue: v,
      maxValue: E,
      data: C,
      activeIndex: d,
      setActiveIndex: u,
      oidValue: i,
      states: F,
      resolveStyleData: m
    };
  };
});
export {
  Ba as $,
  JU as A,
  _h as B,
  ve as C,
  go as D,
  zU as E,
  Dr as F,
  Ea as G,
  XU as H,
  t0 as I,
  HU as J,
  RU as K,
  Em as L,
  qc as M,
  ys as N,
  UU as O,
  Ca as P,
  Z0 as Q,
  SU as R,
  LU as S,
  qn as T,
  _s as U,
  Bd as V,
  po as W,
  Br as X,
  ul as Y,
  mA as Z,
  wt as _,
  __tla,
  HA as a,
  ms as a0,
  $B as a1,
  ze as a2,
  xs as a3,
  Pu as a4,
  co as a5,
  pl as a6,
  vs as a7,
  Le as a8,
  l0 as a9,
  rd as aA,
  da as aB,
  fh as aC,
  WU as aD,
  pr as aE,
  Vp as aF,
  Cs as aG,
  Tu as aH,
  tt as aI,
  VU as aJ,
  ps as aK,
  ZA as aL,
  GU as aM,
  hs as aN,
  ln as aO,
  Yh as aP,
  oB as aa,
  uB as ab,
  un as ac,
  kt as ad,
  Ve as ae,
  ks as af,
  Gu as ag,
  qp as ah,
  Ua as ai,
  si as aj,
  Qs as ak,
  hl as al,
  Rs as am,
  BC as an,
  lm as ao,
  Um as ap,
  vU as aq,
  dd as ar,
  pU as as,
  CC as at,
  nd as au,
  Hs as av,
  Gm as aw,
  v0 as ax,
  F0 as ay,
  jp as az,
  ce as b,
  od as c,
  pA as d,
  OA as e,
  rt as f,
  RA as g,
  Be as h,
  lr as i,
  L as j,
  Si as k,
  Qa as l,
  MA as m,
  hr as n,
  Te as o,
  Hm as p,
  ZU as q,
  We as r,
  lA as s,
  $U as t,
  KA as u,
  TU as v,
  Zt as w,
  IU as x,
  YU as y,
  jU as z
};
