import { v as h, a as ia, R as H, __tla as __tla_0 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { g as Za, c as fn } from "./_commonjsHelpers-Cpj98o6Y.js";
import { v as Ff } from "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
let lB, Yt, Q0, ve, fo, bU, C0, VU, Ea, A0, NU, GU, Fm, J0, _U, zn, Ca, FU, xU, EU, Zn, Zc, gl, zp, kt, Le, _u, Bl, HA, rB, ed, wt, vs, ws, da, uh, wU, PU, yU, gd, pr, cl, gr, Np, ms, Iu, tt, MU, gs, ZA, KU, Bs, an, Ba, Xh, ce, rd, pA, OA, Ss, RA, ai, mA, L, rt, Be, MA, Dh, sr, Ei, Qa, We, lA, DU, KA, Br, Te, xm, $U, UU;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  var tu = {
    exports: {}
  }, xo = {};
  var Uf = h, Ef = /* @__PURE__ */ Symbol.for("react.element"), Sf = /* @__PURE__ */ Symbol.for("react.fragment"), xf = Object.prototype.hasOwnProperty, If = Uf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Hf = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };
  function ru(A, e, t) {
    var r, n = {}, o = null, i = null;
    t !== void 0 && (o = "" + t), e.key !== void 0 && (o = "" + e.key), e.ref !== void 0 && (i = e.ref);
    for (r in e) xf.call(e, r) && !Hf.hasOwnProperty(r) && (n[r] = e[r]);
    if (A && A.defaultProps) for (r in e = A.defaultProps, e) n[r] === void 0 && (n[r] = e[r]);
    return {
      $$typeof: Ef,
      type: A,
      key: o,
      ref: i,
      props: n,
      _owner: If.current
    };
  }
  xo.Fragment = Sf;
  xo.jsx = ru;
  xo.jsxs = ru;
  tu.exports = xo;
  L = tu.exports;
  const zr = {
    black: "#000",
    white: "#fff"
  }, Dt = {
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    700: "#d32f2f",
    800: "#c62828"
  }, Pt = {
    50: "#f3e5f5",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    700: "#7b1fa2"
  }, _t = {
    50: "#e3f2fd",
    200: "#90caf9",
    400: "#42a5f5",
    700: "#1976d2",
    800: "#1565c0"
  }, Nt = {
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    700: "#0288d1",
    900: "#01579b"
  }, Gt = {
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20"
  }, Cr = {
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    700: "#f57c00",
    900: "#e65100"
  }, Tf = {
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
  const Ve = "$$material";
  function oo() {
    return oo = Object.assign ? Object.assign.bind() : function(A) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r in t) ({}).hasOwnProperty.call(t, r) && (A[r] = t[r]);
      }
      return A;
    }, oo.apply(null, arguments);
  }
  function Lf(A) {
    if (A.sheet) return A.sheet;
    for (var e = 0; e < document.styleSheets.length; e++) if (document.styleSheets[e].ownerNode === A) return document.styleSheets[e];
  }
  function kf(A) {
    var e = document.createElement("style");
    return e.setAttribute("data-emotion", A.key), A.nonce !== void 0 && e.setAttribute("nonce", A.nonce), e.appendChild(document.createTextNode("")), e.setAttribute("data-s", ""), e;
  }
  var Rf = (function() {
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
      this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(kf(this));
      var n = this.tags[this.tags.length - 1];
      if (this.isSpeedy) {
        var o = Lf(n);
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
  })(), ae = "-ms-", io = "-moz-", CA = "-webkit-", nu = "comm", qa = "rule", As = "decl", Of = "@import", ou = "@keyframes", Kf = "@layer", Mf = Math.abs, Io = String.fromCharCode, Df = Object.assign;
  function Pf(A, e) {
    return re(A, 0) ^ 45 ? (((e << 2 ^ re(A, 0)) << 2 ^ re(A, 1)) << 2 ^ re(A, 2)) << 2 ^ re(A, 3) : 0;
  }
  function iu(A) {
    return A.trim();
  }
  function _f(A, e) {
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
  function jr(A, e, t) {
    return A.slice(e, t);
  }
  function Me(A) {
    return A.length;
  }
  function es(A) {
    return A.length;
  }
  function gn(A, e) {
    return e.push(A), A;
  }
  function Nf(A, e) {
    return A.map(e).join("");
  }
  var Ho = 1, ar = 1, au = 0, pe = 0, $A = 0, fr = "";
  function To(A, e, t, r, n, o, i) {
    return {
      value: A,
      root: e,
      parent: t,
      type: r,
      props: n,
      children: o,
      line: Ho,
      column: ar,
      length: i,
      return: ""
    };
  }
  function wr(A, e) {
    return Df(To("", null, null, "", null, null, 0), A, {
      length: -A.length
    }, e);
  }
  function Gf() {
    return $A;
  }
  function Vf() {
    return $A = pe > 0 ? re(fr, --pe) : 0, ar--, $A === 10 && (ar = 1, Ho--), $A;
  }
  function Ce() {
    return $A = pe < au ? re(fr, pe++) : 0, ar++, $A === 10 && (ar = 1, Ho++), $A;
  }
  function $e() {
    return re(fr, pe);
  }
  function jn() {
    return pe;
  }
  function en(A, e) {
    return jr(fr, A, e);
  }
  function Xr(A) {
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
  function su(A) {
    return Ho = ar = 1, au = Me(fr = A), pe = 0, [];
  }
  function lu(A) {
    return fr = "", A;
  }
  function Xn(A) {
    return iu(en(pe - 1, sa(A === 91 ? A + 2 : A === 40 ? A + 1 : A)));
  }
  function $f(A) {
    for (; ($A = $e()) && $A < 33; ) Ce();
    return Xr(A) > 2 || Xr($A) > 3 ? "" : " ";
  }
  function Wf(A, e) {
    for (; --e && Ce() && !($A < 48 || $A > 102 || $A > 57 && $A < 65 || $A > 70 && $A < 97); ) ;
    return en(A, jn() + (e < 6 && $e() == 32 && Ce() == 32));
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
  function zf(A, e) {
    for (; Ce() && A + $A !== 57; ) if (A + $A === 84 && $e() === 47) break;
    return "/*" + en(e, pe - 1) + "*" + Io(A === 47 ? A : Ce());
  }
  function jf(A) {
    for (; !Xr($e()); ) Ce();
    return en(A, pe);
  }
  function Xf(A) {
    return lu(Jn("", null, null, null, [
      ""
    ], A = su(A), 0, [
      0
    ], A));
  }
  function Jn(A, e, t, r, n, o, i, a, l) {
    for (var s = 0, c = 0, d = i, u = 0, f = 0, g = 0, B = 1, Q = 1, m = 1, F = 0, w = "", v = n, U = o, C = r, S = w; Q; ) switch (g = F, F = Ce()) {
      case 40:
        if (g != 108 && re(S, d - 1) == 58) {
          aa(S += wA(Xn(F), "&", "&\f"), "&\f") != -1 && (m = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        S += Xn(F);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        S += $f(g);
        break;
      case 92:
        S += Wf(jn() - 1, 7);
        continue;
      case 47:
        switch ($e()) {
          case 42:
          case 47:
            gn(Jf(zf(Ce(), jn()), e, t), l);
            break;
          default:
            S += "/";
        }
        break;
      case 123 * B:
        a[s++] = Me(S) * m;
      case 125 * B:
      case 59:
      case 0:
        switch (F) {
          case 0:
          case 125:
            Q = 0;
          case 59 + c:
            m == -1 && (S = wA(S, /\f/g, "")), f > 0 && Me(S) - d && gn(f > 32 ? Js(S + ";", r, t, d - 1) : Js(wA(S, " ", "") + ";", r, t, d - 2), l);
            break;
          case 59:
            S += ";";
          default:
            if (gn(C = Xs(S, e, t, s, c, n, a, w, v = [], U = [], d), o), F === 123) if (c === 0) Jn(S, e, C, C, v, o, d, a, U);
            else switch (u === 99 && re(S, 3) === 110 ? 100 : u) {
              case 100:
              case 108:
              case 109:
              case 115:
                Jn(A, C, C, r && gn(Xs(A, C, C, 0, 0, n, a, w, n, v = [], d), U), n, U, d, a, r ? v : U);
                break;
              default:
                Jn(S, C, C, C, [
                  ""
                ], U, 0, a, U);
            }
        }
        s = c = f = 0, B = m = 1, w = S = "", d = i;
        break;
      case 58:
        d = 1 + Me(S), f = g;
      default:
        if (B < 1) {
          if (F == 123) --B;
          else if (F == 125 && B++ == 0 && Vf() == 125) continue;
        }
        switch (S += Io(F), F * B) {
          case 38:
            m = c > 0 ? 1 : (S += "\f", -1);
            break;
          case 44:
            a[s++] = (Me(S) - 1) * m, m = 1;
            break;
          case 64:
            $e() === 45 && (S += Xn(Ce())), u = $e(), c = d = Me(w = S += jf(jn())), F++;
            break;
          case 45:
            g === 45 && Me(S) == 2 && (B = 0);
        }
    }
    return o;
  }
  function Xs(A, e, t, r, n, o, i, a, l, s, c) {
    for (var d = n - 1, u = n === 0 ? o : [
      ""
    ], f = es(u), g = 0, B = 0, Q = 0; g < r; ++g) for (var m = 0, F = jr(A, d + 1, d = Mf(B = i[g])), w = A; m < f; ++m) (w = iu(B > 0 ? u[m] + " " + F : wA(F, /&\f/g, u[m]))) && (l[Q++] = w);
    return To(A, e, t, n === 0 ? qa : a, l, s, c);
  }
  function Jf(A, e, t) {
    return To(A, e, t, nu, Io(Gf()), jr(A, 2, -2), 0);
  }
  function Js(A, e, t, r) {
    return To(A, e, t, As, jr(A, 0, r), jr(A, r + 1, -1), r);
  }
  function nr(A, e) {
    for (var t = "", r = es(A), n = 0; n < r; n++) t += e(A[n], n, A, e) || "";
    return t;
  }
  function Yf(A, e, t, r) {
    switch (A.type) {
      case Kf:
        if (A.children.length) break;
      case Of:
      case As:
        return A.return = A.return || A.value;
      case nu:
        return "";
      case ou:
        return A.return = A.value + "{" + nr(A.children, r) + "}";
      case qa:
        A.value = A.props.join(",");
    }
    return Me(t = nr(A.children, r)) ? A.return = A.value + "{" + t + "}" : "";
  }
  function Zf(A) {
    var e = es(A);
    return function(t, r, n, o) {
      for (var i = "", a = 0; a < e; a++) i += A[a](t, r, n, o) || "";
      return i;
    };
  }
  function qf(A) {
    return function(e) {
      e.root || (e = e.return) && A(e);
    };
  }
  function cu(A) {
    var e = /* @__PURE__ */ Object.create(null);
    return function(t) {
      return e[t] === void 0 && (e[t] = A(t)), e[t];
    };
  }
  var Ag = function(e, t, r) {
    for (var n = 0, o = 0; n = o, o = $e(), n === 38 && o === 12 && (t[r] = 1), !Xr(o); ) Ce();
    return en(e, pe);
  }, eg = function(e, t) {
    var r = -1, n = 44;
    do
      switch (Xr(n)) {
        case 0:
          n === 38 && $e() === 12 && (t[r] = 1), e[r] += Ag(pe - 1, t, r);
          break;
        case 2:
          e[r] += Xn(n);
          break;
        case 4:
          if (n === 44) {
            e[++r] = $e() === 58 ? "&\f" : "", t[r] = e[r].length;
            break;
          }
        default:
          e[r] += Io(n);
      }
    while (n = Ce());
    return e;
  }, tg = function(e, t) {
    return lu(eg(su(e), t));
  }, Ys = /* @__PURE__ */ new WeakMap(), rg = function(e) {
    if (!(e.type !== "rule" || !e.parent || e.length < 1)) {
      for (var t = e.value, r = e.parent, n = e.column === r.column && e.line === r.line; r.type !== "rule"; ) if (r = r.parent, !r) return;
      if (!(e.props.length === 1 && t.charCodeAt(0) !== 58 && !Ys.get(r)) && !n) {
        Ys.set(e, true);
        for (var o = [], i = tg(t, o), a = r.props, l = 0, s = 0; l < i.length; l++) for (var c = 0; c < a.length; c++, s++) e.props[s] = o[l] ? i[l].replace(/&\f/g, a[c]) : a[c] + " " + i[l];
      }
    }
  }, ng = function(e) {
    if (e.type === "decl") {
      var t = e.value;
      t.charCodeAt(0) === 108 && t.charCodeAt(2) === 98 && (e.return = "", e.value = "");
    }
  };
  function uu(A, e) {
    switch (Pf(A, e)) {
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
        return CA + A + io + A + ae + A + A;
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
            return wA(A, /(.+:)(.+)-([^]+)/, "$1" + CA + "$2-$3$1" + io + (re(A, e + 3) == 108 ? "$3" : "$2-$3")) + A;
          case 115:
            return ~aa(A, "stretch") ? uu(wA(A, "stretch", "fill-available"), e) + A : A;
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
  var og = function(e, t, r, n) {
    if (e.length > -1 && !e.return) switch (e.type) {
      case As:
        e.return = uu(e.value, e.length);
        break;
      case ou:
        return nr([
          wr(e, {
            value: wA(e.value, "@", "@" + CA)
          })
        ], n);
      case qa:
        if (e.length) return Nf(e.props, function(o) {
          switch (_f(o, /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              return nr([
                wr(e, {
                  props: [
                    wA(o, /:(read-\w+)/, ":" + io + "$1")
                  ]
                })
              ], n);
            case "::placeholder":
              return nr([
                wr(e, {
                  props: [
                    wA(o, /:(plac\w+)/, ":" + CA + "input-$1")
                  ]
                }),
                wr(e, {
                  props: [
                    wA(o, /:(plac\w+)/, ":" + io + "$1")
                  ]
                }),
                wr(e, {
                  props: [
                    wA(o, /:(plac\w+)/, ae + "input-$1")
                  ]
                })
              ], n);
          }
          return "";
        });
    }
  }, ig = [
    og
  ], ag = function(e) {
    var t = e.key;
    if (t === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function(B) {
        var Q = B.getAttribute("data-emotion");
        Q.indexOf(" ") !== -1 && (document.head.appendChild(B), B.setAttribute("data-s", ""));
      });
    }
    var n = e.stylisPlugins || ig, o = {}, i, a = [];
    i = e.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + t + ' "]'), function(B) {
      for (var Q = B.getAttribute("data-emotion").split(" "), m = 1; m < Q.length; m++) o[Q[m]] = true;
      a.push(B);
    });
    var l, s = [
      rg,
      ng
    ];
    {
      var c, d = [
        Yf,
        qf(function(B) {
          c.insert(B);
        })
      ], u = Zf(s.concat(n, d)), f = function(Q) {
        return nr(Xf(Q), u);
      };
      l = function(Q, m, F, w) {
        c = F, f(Q ? Q + "{" + m.styles + "}" : m.styles), w && (g.inserted[m.name] = true);
      };
    }
    var g = {
      key: t,
      sheet: new Rf({
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
  }, du = {
    exports: {}
  }, yA = {};
  var qA = typeof Symbol == "function" && Symbol.for, ts = qA ? /* @__PURE__ */ Symbol.for("react.element") : 60103, rs = qA ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, Lo = qA ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, ko = qA ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, Ro = qA ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, Oo = qA ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, Ko = qA ? /* @__PURE__ */ Symbol.for("react.context") : 60110, ns = qA ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, Mo = qA ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, Do = qA ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, Po = qA ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, sg = qA ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, _o = qA ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, No = qA ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, lg = qA ? /* @__PURE__ */ Symbol.for("react.block") : 60121, cg = qA ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, ug = qA ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, dg = qA ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
  function we(A) {
    if (typeof A == "object" && A !== null) {
      var e = A.$$typeof;
      switch (e) {
        case ts:
          switch (A = A.type, A) {
            case ns:
            case Mo:
            case Lo:
            case Ro:
            case ko:
            case Po:
              return A;
            default:
              switch (A = A && A.$$typeof, A) {
                case Ko:
                case Do:
                case No:
                case _o:
                case Oo:
                  return A;
                default:
                  return e;
              }
          }
        case rs:
          return e;
      }
    }
  }
  function fu(A) {
    return we(A) === Mo;
  }
  yA.AsyncMode = ns;
  yA.ConcurrentMode = Mo;
  yA.ContextConsumer = Ko;
  yA.ContextProvider = Oo;
  yA.Element = ts;
  yA.ForwardRef = Do;
  yA.Fragment = Lo;
  yA.Lazy = No;
  yA.Memo = _o;
  yA.Portal = rs;
  yA.Profiler = Ro;
  yA.StrictMode = ko;
  yA.Suspense = Po;
  yA.isAsyncMode = function(A) {
    return fu(A) || we(A) === ns;
  };
  yA.isConcurrentMode = fu;
  yA.isContextConsumer = function(A) {
    return we(A) === Ko;
  };
  yA.isContextProvider = function(A) {
    return we(A) === Oo;
  };
  yA.isElement = function(A) {
    return typeof A == "object" && A !== null && A.$$typeof === ts;
  };
  yA.isForwardRef = function(A) {
    return we(A) === Do;
  };
  yA.isFragment = function(A) {
    return we(A) === Lo;
  };
  yA.isLazy = function(A) {
    return we(A) === No;
  };
  yA.isMemo = function(A) {
    return we(A) === _o;
  };
  yA.isPortal = function(A) {
    return we(A) === rs;
  };
  yA.isProfiler = function(A) {
    return we(A) === Ro;
  };
  yA.isStrictMode = function(A) {
    return we(A) === ko;
  };
  yA.isSuspense = function(A) {
    return we(A) === Po;
  };
  yA.isValidElementType = function(A) {
    return typeof A == "string" || typeof A == "function" || A === Lo || A === Mo || A === Ro || A === ko || A === Po || A === sg || typeof A == "object" && A !== null && (A.$$typeof === No || A.$$typeof === _o || A.$$typeof === Oo || A.$$typeof === Ko || A.$$typeof === Do || A.$$typeof === cg || A.$$typeof === ug || A.$$typeof === dg || A.$$typeof === lg);
  };
  yA.typeOf = we;
  du.exports = yA;
  var fg = du.exports, gu = fg, gg = {
    $$typeof: true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
  }, pg = {
    $$typeof: true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
  }, pu = {};
  pu[gu.ForwardRef] = gg;
  pu[gu.Memo] = pg;
  var Bg = true;
  function Bu(A, e, t) {
    var r = "";
    return t.split(" ").forEach(function(n) {
      A[n] !== void 0 ? e.push(A[n] + ";") : n && (r += n + " ");
    }), r;
  }
  var os = function(e, t, r) {
    var n = e.key + "-" + t.name;
    (r === false || Bg === false) && e.registered[n] === void 0 && (e.registered[n] = t.styles);
  }, is = function(e, t, r) {
    os(e, t, r);
    var n = e.key + "-" + t.name;
    if (e.inserted[t.name] === void 0) {
      var o = t;
      do
        e.insert(t === o ? "." + n : "", o, e.sheet, true), o = o.next;
      while (o !== void 0);
    }
  };
  function hg(A) {
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
  var mg = {
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
  }, Cg = /[A-Z]|^ms/g, wg = /_EMO_([^_]+?)_([^]*?)_EMO_/g, hu = function(e) {
    return e.charCodeAt(1) === 45;
  }, Zs = function(e) {
    return e != null && typeof e != "boolean";
  }, bi = cu(function(A) {
    return hu(A) ? A : A.replace(Cg, "-$&").toLowerCase();
  }), qs = function(e, t) {
    switch (e) {
      case "animation":
      case "animationName":
        if (typeof t == "string") return t.replace(wg, function(r, n, o) {
          return De = {
            name: n,
            styles: o,
            next: De
          }, n;
        });
    }
    return mg[e] !== 1 && !hu(e) && typeof t == "number" && t !== 0 ? t + "px" : t;
  };
  function Jr(A, e, t) {
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
        return vg(A, e, t);
      }
      case "function": {
        if (A !== void 0) {
          var l = De, s = t(A);
          return De = l, Jr(A, e, s);
        }
        break;
      }
    }
    var c = t;
    if (e == null) return c;
    var d = e[c];
    return d !== void 0 ? d : c;
  }
  function vg(A, e, t) {
    var r = "";
    if (Array.isArray(t)) for (var n = 0; n < t.length; n++) r += Jr(A, e, t[n]) + ";";
    else for (var o in t) {
      var i = t[o];
      if (typeof i != "object") {
        var a = i;
        e != null && e[a] !== void 0 ? r += o + "{" + e[a] + "}" : Zs(a) && (r += bi(o) + ":" + qs(o, a) + ";");
      } else if (Array.isArray(i) && typeof i[0] == "string" && (e == null || e[i[0]] === void 0)) for (var l = 0; l < i.length; l++) Zs(i[l]) && (r += bi(o) + ":" + qs(o, i[l]) + ";");
      else {
        var s = Jr(A, e, i);
        switch (o) {
          case "animation":
          case "animationName": {
            r += bi(o) + ":" + s + ";";
            break;
          }
          default:
            r += o + "{" + s + "}";
        }
      }
    }
    return r;
  }
  var Al = /label:\s*([^\s;{]+)\s*(;|$)/g, De;
  function tn(A, e, t) {
    if (A.length === 1 && typeof A[0] == "object" && A[0] !== null && A[0].styles !== void 0) return A[0];
    var r = true, n = "";
    De = void 0;
    var o = A[0];
    if (o == null || o.raw === void 0) r = false, n += Jr(t, e, o);
    else {
      var i = o;
      n += i[0];
    }
    for (var a = 1; a < A.length; a++) if (n += Jr(t, e, A[a]), r) {
      var l = o;
      n += l[a];
    }
    Al.lastIndex = 0;
    for (var s = "", c; (c = Al.exec(n)) !== null; ) s += "-" + c[1];
    var d = hg(n) + s;
    return {
      name: d,
      styles: n,
      next: De
    };
  }
  var yg = function(e) {
    return e();
  }, mu = ia.useInsertionEffect ? ia.useInsertionEffect : false, Cu = mu || yg, el = mu || h.useLayoutEffect, wu = h.createContext(typeof HTMLElement < "u" ? ag({
    key: "css"
  }) : null);
  wu.Provider;
  var as = function(e) {
    return h.forwardRef(function(t, r) {
      var n = h.useContext(wu);
      return e(t, n, r);
    });
  }, rn = h.createContext({}), ss = {}.hasOwnProperty, la = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Qg = function(e, t) {
    var r = {};
    for (var n in t) ss.call(t, n) && (r[n] = t[n]);
    return r[la] = e, r;
  }, bg = function(e) {
    var t = e.cache, r = e.serialized, n = e.isStringTag;
    return os(t, r, n), Cu(function() {
      return is(t, r, n);
    }), null;
  }, Fg = as(function(A, e, t) {
    var r = A.css;
    typeof r == "string" && e.registered[r] !== void 0 && (r = e.registered[r]);
    var n = A[la], o = [
      r
    ], i = "";
    typeof A.className == "string" ? i = Bu(e.registered, o, A.className) : A.className != null && (i = A.className + " ");
    var a = tn(o, void 0, h.useContext(rn));
    i += e.key + "-" + a.name;
    var l = {};
    for (var s in A) ss.call(A, s) && s !== "css" && s !== la && (l[s] = A[s]);
    return l.className = i, t && (l.ref = t), h.createElement(h.Fragment, null, h.createElement(bg, {
      cache: e,
      serialized: a,
      isStringTag: typeof n == "string"
    }), h.createElement(n, l));
  }), Ug = Fg, tl = function(e, t) {
    var r = arguments;
    if (t == null || !ss.call(t, "css")) return h.createElement.apply(void 0, r);
    var n = r.length, o = new Array(n);
    o[0] = Ug, o[1] = Qg(e, t);
    for (var i = 2; i < n; i++) o[i] = r[i];
    return h.createElement.apply(null, o);
  };
  (function(A) {
    var e;
    e || (e = A.JSX || (A.JSX = {}));
  })(tl || (tl = {}));
  var Eg = as(function(A, e) {
    var t = A.styles, r = tn([
      t
    ], void 0, h.useContext(rn)), n = h.useRef();
    return el(function() {
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
    ]), el(function() {
      var o = n.current, i = o[0], a = o[1];
      if (a) {
        o[1] = false;
        return;
      }
      if (r.next !== void 0 && is(e, r.next, true), i.tags.length) {
        var l = i.tags[i.tags.length - 1].nextElementSibling;
        i.before = l, i.flush();
      }
      e.insert("", r, i, false);
    }, [
      e,
      r.name
    ]), null;
  });
  function ls() {
    for (var A = arguments.length, e = new Array(A), t = 0; t < A; t++) e[t] = arguments[t];
    return tn(e);
  }
  function nn() {
    var A = ls.apply(void 0, arguments), e = "animation-" + A.name;
    return {
      name: e,
      styles: "@keyframes " + e + "{" + A.styles + "}",
      anim: 1,
      toString: function() {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      }
    };
  }
  var Sg = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, xg = cu(function(A) {
    return Sg.test(A) || A.charCodeAt(0) === 111 && A.charCodeAt(1) === 110 && A.charCodeAt(2) < 91;
  }), Ig = xg, Hg = function(e) {
    return e !== "theme";
  }, rl = function(e) {
    return typeof e == "string" && e.charCodeAt(0) > 96 ? Ig : Hg;
  }, nl = function(e, t, r) {
    var n;
    if (t) {
      var o = t.shouldForwardProp;
      n = e.__emotion_forwardProp && o ? function(i) {
        return e.__emotion_forwardProp(i) && o(i);
      } : o;
    }
    return typeof n != "function" && r && (n = e.__emotion_forwardProp), n;
  }, Tg = function(e) {
    var t = e.cache, r = e.serialized, n = e.isStringTag;
    return os(t, r, n), Cu(function() {
      return is(t, r, n);
    }), null;
  }, Lg = function A(e, t) {
    var r = e.__emotion_real === e, n = r && e.__emotion_base || e, o, i;
    t !== void 0 && (o = t.label, i = t.target);
    var a = nl(e, t, r), l = a || rl(n), s = !l("as");
    return function() {
      var c = arguments, d = r && e.__emotion_styles !== void 0 ? e.__emotion_styles.slice(0) : [];
      if (o !== void 0 && d.push("label:" + o + ";"), c[0] == null || c[0].raw === void 0) d.push.apply(d, c);
      else {
        var u = c[0];
        d.push(u[0]);
        for (var f = c.length, g = 1; g < f; g++) d.push(c[g], u[g]);
      }
      var B = as(function(Q, m, F) {
        var w = s && Q.as || n, v = "", U = [], C = Q;
        if (Q.theme == null) {
          C = {};
          for (var S in Q) C[S] = Q[S];
          C.theme = h.useContext(rn);
        }
        typeof Q.className == "string" ? v = Bu(m.registered, U, Q.className) : Q.className != null && (v = Q.className + " ");
        var x = tn(d.concat(U), m.registered, C);
        v += m.key + "-" + x.name, i !== void 0 && (v += " " + i);
        var I = s && a === void 0 ? rl(w) : l, p = {};
        for (var T in Q) s && T === "as" || I(T) && (p[T] = Q[T]);
        return p.className = v, F && (p.ref = F), h.createElement(h.Fragment, null, h.createElement(Tg, {
          cache: m,
          serialized: x,
          isStringTag: typeof w == "string"
        }), h.createElement(w, p));
      });
      return B.displayName = o !== void 0 ? o : "Styled(" + (typeof n == "string" ? n : n.displayName || n.name || "Component") + ")", B.defaultProps = e.defaultProps, B.__emotion_real = B, B.__emotion_base = n, B.__emotion_styles = d, B.__emotion_forwardProp = a, Object.defineProperty(B, "toString", {
        value: function() {
          return "." + i;
        }
      }), B.withComponent = function(Q, m) {
        var F = A(Q, oo({}, t, m, {
          shouldForwardProp: nl(B, m, true)
        }));
        return F.apply(void 0, d);
      }, B;
    };
  }, kg = [
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
  ], ca = Lg.bind(null);
  kg.forEach(function(A) {
    ca[A] = ca(A);
  });
  function Rg(A) {
    return A == null || Object.keys(A).length === 0;
  }
  function vu(A) {
    const { styles: e, defaultTheme: t = {} } = A, r = typeof e == "function" ? (n) => e(Rg(n) ? t : n) : e;
    return L.jsx(Eg, {
      styles: r
    });
  }
  function yu(A, e) {
    return ca(A, e);
  }
  function Og(A, e) {
    Array.isArray(A.__emotion_styles) && (A.__emotion_styles = e(A.__emotion_styles));
  }
  const ol = [];
  function pt(A) {
    return ol[0] = A, tn(ol);
  }
  var Qu = {
    exports: {}
  }, EA = {};
  var cs = /* @__PURE__ */ Symbol.for("react.transitional.element"), us = /* @__PURE__ */ Symbol.for("react.portal"), Go = /* @__PURE__ */ Symbol.for("react.fragment"), Vo = /* @__PURE__ */ Symbol.for("react.strict_mode"), $o = /* @__PURE__ */ Symbol.for("react.profiler"), Wo = /* @__PURE__ */ Symbol.for("react.consumer"), zo = /* @__PURE__ */ Symbol.for("react.context"), jo = /* @__PURE__ */ Symbol.for("react.forward_ref"), Xo = /* @__PURE__ */ Symbol.for("react.suspense"), Jo = /* @__PURE__ */ Symbol.for("react.suspense_list"), Yo = /* @__PURE__ */ Symbol.for("react.memo"), Zo = /* @__PURE__ */ Symbol.for("react.lazy"), Kg = /* @__PURE__ */ Symbol.for("react.view_transition"), Mg = /* @__PURE__ */ Symbol.for("react.client.reference");
  function xe(A) {
    if (typeof A == "object" && A !== null) {
      var e = A.$$typeof;
      switch (e) {
        case cs:
          switch (A = A.type, A) {
            case Go:
            case $o:
            case Vo:
            case Xo:
            case Jo:
            case Kg:
              return A;
            default:
              switch (A = A && A.$$typeof, A) {
                case zo:
                case jo:
                case Zo:
                case Yo:
                  return A;
                case Wo:
                  return A;
                default:
                  return e;
              }
          }
        case us:
          return e;
      }
    }
  }
  EA.ContextConsumer = Wo;
  EA.ContextProvider = zo;
  EA.Element = cs;
  EA.ForwardRef = jo;
  EA.Fragment = Go;
  EA.Lazy = Zo;
  EA.Memo = Yo;
  EA.Portal = us;
  EA.Profiler = $o;
  EA.StrictMode = Vo;
  EA.Suspense = Xo;
  EA.SuspenseList = Jo;
  EA.isContextConsumer = function(A) {
    return xe(A) === Wo;
  };
  EA.isContextProvider = function(A) {
    return xe(A) === zo;
  };
  EA.isElement = function(A) {
    return typeof A == "object" && A !== null && A.$$typeof === cs;
  };
  EA.isForwardRef = function(A) {
    return xe(A) === jo;
  };
  EA.isFragment = function(A) {
    return xe(A) === Go;
  };
  EA.isLazy = function(A) {
    return xe(A) === Zo;
  };
  EA.isMemo = function(A) {
    return xe(A) === Yo;
  };
  EA.isPortal = function(A) {
    return xe(A) === us;
  };
  EA.isProfiler = function(A) {
    return xe(A) === $o;
  };
  EA.isStrictMode = function(A) {
    return xe(A) === Vo;
  };
  EA.isSuspense = function(A) {
    return xe(A) === Xo;
  };
  EA.isSuspenseList = function(A) {
    return xe(A) === Jo;
  };
  EA.isValidElementType = function(A) {
    return typeof A == "string" || typeof A == "function" || A === Go || A === $o || A === Vo || A === Xo || A === Jo || typeof A == "object" && A !== null && (A.$$typeof === Zo || A.$$typeof === Yo || A.$$typeof === zo || A.$$typeof === Wo || A.$$typeof === jo || A.$$typeof === Mg || A.getModuleId !== void 0);
  };
  EA.typeOf = xe;
  Qu.exports = EA;
  var bu = Qu.exports;
  function Ne(A) {
    if (typeof A != "object" || A === null) return false;
    const e = Object.getPrototypeOf(A);
    return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in A) && !(Symbol.iterator in A);
  }
  function Fu(A) {
    if (h.isValidElement(A) || bu.isValidElementType(A) || !Ne(A)) return A;
    const e = {};
    return Object.keys(A).forEach((t) => {
      e[t] = Fu(A[t]);
    }), e;
  }
  ZA = function(A, e, t = {
    clone: true
  }) {
    const r = t.clone ? {
      ...A
    } : A;
    return Ne(A) && Ne(e) && Object.keys(e).forEach((n) => {
      h.isValidElement(e[n]) || bu.isValidElementType(e[n]) ? r[n] = e[n] : Ne(e[n]) && Object.prototype.hasOwnProperty.call(A, n) && Ne(A[n]) ? r[n] = ZA(A[n], e[n], t) : t.clone ? r[n] = Ne(e[n]) ? Fu(e[n]) : e[n] : r[n] = e[n];
    }), r;
  };
  const Dg = (A) => {
    const e = Object.keys(A).map((t) => ({
      key: t,
      val: A[t]
    })) || [];
    return e.sort((t, r) => t.val - r.val), e.reduce((t, r) => ({
      ...t,
      [r.key]: r.val
    }), {});
  };
  function Pg(A) {
    const { values: e = {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }, unit: t = "px", step: r = 5, ...n } = A, o = Dg(e), i = Object.keys(o);
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
  function il(A, e) {
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
  function _g(A, e) {
    return e === "@" || e.startsWith("@") && (A.some((t) => e.startsWith(`@${t}`)) || !!e.match(/^@\d/));
  }
  function Ng(A, e) {
    const t = e.match(/^@([^/]+)?\/?(.+)?$/);
    if (!t) return null;
    const [, r, n] = t, o = Number.isNaN(+r) ? r || 0 : +r;
    return A.containerQueries(n).up(o);
  }
  function Gg(A) {
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
  const Vg = {
    borderRadius: 4
  };
  function Mr(A, e) {
    return e ? ZA(A, e, {
      clone: false
    }) : A;
  }
  const qo = {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536
  }, al = {
    keys: [
      "xs",
      "sm",
      "md",
      "lg",
      "xl"
    ],
    up: (A) => `@media (min-width:${qo[A]}px)`
  }, $g = {
    containerQueries: (A) => ({
      up: (e) => {
        let t = typeof e == "number" ? e : qo[e] || e;
        return typeof t == "number" && (t = `${t}px`), A ? `@container ${A} (min-width:${t})` : `@container (min-width:${t})`;
      }
    })
  };
  tt = function(A, e, t) {
    const r = A.theme || {};
    if (Array.isArray(e)) {
      const o = r.breakpoints || al;
      return e.reduce((i, a, l) => (i[o.up(o.keys[l])] = t(e[l]), i), {});
    }
    if (typeof e == "object") {
      const o = r.breakpoints || al;
      return Object.keys(e).reduce((i, a) => {
        if (_g(o.keys, a)) {
          const l = Ng(r.containerQueries ? r : $g, a);
          l && (i[l] = t(e[a], a));
        } else if (Object.keys(o.values || qo).includes(a)) {
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
  function Uu(A = {}) {
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
  KU = function(A, ...e) {
    const t = Uu(A), r = [
      t,
      ...e
    ].reduce((n, o) => ZA(n, o), {});
    return ua(Object.keys(t), r);
  };
  function Wg(A, e) {
    if (typeof A != "object") return {};
    const t = {}, r = Object.keys(e);
    return Array.isArray(A) ? r.forEach((n, o) => {
      o < A.length && (t[n] = true);
    }) : r.forEach((n) => {
      A[n] != null && (t[n] = true);
    }), t;
  }
  MU = function({ values: A, breakpoints: e, base: t }) {
    const r = t || Wg(A, e), n = Object.keys(r);
    if (n.length === 0) return A;
    let o;
    return n.reduce((i, a, l) => (Array.isArray(A) ? (i[a] = A[l] != null ? A[l] : A[o], o = l) : typeof A == "object" ? (i[a] = A[a] != null ? A[a] : A[o], o = a) : i[a] = A, i), {});
  };
  mA = function(A) {
    if (typeof A != "string") throw new Error(et(7));
    return A.charAt(0).toUpperCase() + A.slice(1);
  };
  function Ai(A, e, t = true) {
    if (!e || typeof e != "string") return null;
    if (A && A.vars && t) {
      const r = `vars.${e}`.split(".").reduce((n, o) => n && n[o] ? n[o] : null, A);
      if (r != null) return r;
    }
    return e.split(".").reduce((r, n) => r && r[n] != null ? r[n] : null, A);
  }
  function ao(A, e, t, r = t) {
    let n;
    return typeof A == "function" ? n = A(t) : Array.isArray(A) ? n = A[t] || r : n = Ai(A, t) || r, e && (n = e(n, r, A)), n;
  }
  function VA(A) {
    const { prop: e, cssProperty: t = A.prop, themeKey: r, transform: n } = A, o = (i) => {
      if (i[e] == null) return null;
      const a = i[e], l = i.theme, s = Ai(l, r) || {};
      return tt(i, a, (d) => {
        let u = ao(s, n, d);
        return d === u && typeof d == "string" && (u = ao(s, n, `${e}${d === "default" ? "" : mA(d)}`, d)), t === false ? u : {
          [t]: u
        };
      });
    };
    return o.propTypes = {}, o.filterProps = [
      e
    ], o;
  }
  function zg(A) {
    const e = {};
    return (t) => (e[t] === void 0 && (e[t] = A(t)), e[t]);
  }
  const jg = {
    m: "margin",
    p: "padding"
  }, Xg = {
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
  }, sl = {
    marginX: "mx",
    marginY: "my",
    paddingX: "px",
    paddingY: "py"
  }, Jg = zg((A) => {
    if (A.length > 2) if (sl[A]) A = sl[A];
    else return [
      A
    ];
    const [e, t] = A.split(""), r = jg[e], n = Xg[t] || "";
    return Array.isArray(n) ? n.map((o) => r + o) : [
      r + n
    ];
  }), ds = [
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
  ], fs = [
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
    ...ds,
    ...fs
  ];
  function on(A, e, t, r) {
    const n = Ai(A, e, true) ?? t;
    return typeof n == "number" || typeof n == "string" ? (o) => typeof o == "string" ? o : typeof n == "string" ? `calc(${o} * ${n})` : n * o : Array.isArray(n) ? (o) => {
      if (typeof o == "string") return o;
      const i = Math.abs(o), a = n[i];
      return o >= 0 ? a : typeof a == "number" ? -a : `-${a}`;
    } : typeof n == "function" ? n : () => {
    };
  }
  gs = function(A) {
    return on(A, "spacing", 8);
  };
  an = function(A, e) {
    return typeof e == "string" || e == null ? e : A(e);
  };
  function Yg(A, e) {
    return (t) => A.reduce((r, n) => (r[n] = an(e, t), r), {});
  }
  function Zg(A, e, t, r) {
    if (!e.includes(t)) return null;
    const n = Jg(t), o = Yg(n, r), i = A[t];
    return tt(A, i, o);
  }
  function Eu(A, e) {
    const t = gs(A.theme);
    return Object.keys(A).map((r) => Zg(A, e, r, t)).reduce(Mr, {});
  }
  function DA(A) {
    return Eu(A, ds);
  }
  DA.propTypes = {};
  DA.filterProps = ds;
  function PA(A) {
    return Eu(A, fs);
  }
  PA.propTypes = {};
  PA.filterProps = fs;
  function Su(A = 8, e = gs({
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
  function ei(...A) {
    const e = A.reduce((r, n) => (n.filterProps.forEach((o) => {
      r[o] = n;
    }), r), {}), t = (r) => Object.keys(r).reduce((n, o) => e[o] ? Mr(n, e[o](r)) : n, {});
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
  const qg = Ie("border", be), Ap = Ie("borderTop", be), ep = Ie("borderRight", be), tp = Ie("borderBottom", be), rp = Ie("borderLeft", be), np = Ie("borderColor"), op = Ie("borderTopColor"), ip = Ie("borderRightColor"), ap = Ie("borderBottomColor"), sp = Ie("borderLeftColor"), lp = Ie("outline", be), cp = Ie("outlineColor"), ti = (A) => {
    if (A.borderRadius !== void 0 && A.borderRadius !== null) {
      const e = on(A.theme, "shape.borderRadius", 4), t = (r) => ({
        borderRadius: an(e, r)
      });
      return tt(A, A.borderRadius, t);
    }
    return null;
  };
  ti.propTypes = {};
  ti.filterProps = [
    "borderRadius"
  ];
  ei(qg, Ap, ep, tp, rp, np, op, ip, ap, sp, ti, lp, cp);
  const ri = (A) => {
    if (A.gap !== void 0 && A.gap !== null) {
      const e = on(A.theme, "spacing", 8), t = (r) => ({
        gap: an(e, r)
      });
      return tt(A, A.gap, t);
    }
    return null;
  };
  ri.propTypes = {};
  ri.filterProps = [
    "gap"
  ];
  const ni = (A) => {
    if (A.columnGap !== void 0 && A.columnGap !== null) {
      const e = on(A.theme, "spacing", 8), t = (r) => ({
        columnGap: an(e, r)
      });
      return tt(A, A.columnGap, t);
    }
    return null;
  };
  ni.propTypes = {};
  ni.filterProps = [
    "columnGap"
  ];
  const oi = (A) => {
    if (A.rowGap !== void 0 && A.rowGap !== null) {
      const e = on(A.theme, "spacing", 8), t = (r) => ({
        rowGap: an(e, r)
      });
      return tt(A, A.rowGap, t);
    }
    return null;
  };
  oi.propTypes = {};
  oi.filterProps = [
    "rowGap"
  ];
  const up = VA({
    prop: "gridColumn"
  }), dp = VA({
    prop: "gridRow"
  }), fp = VA({
    prop: "gridAutoFlow"
  }), gp = VA({
    prop: "gridAutoColumns"
  }), pp = VA({
    prop: "gridAutoRows"
  }), Bp = VA({
    prop: "gridTemplateColumns"
  }), hp = VA({
    prop: "gridTemplateRows"
  }), mp = VA({
    prop: "gridTemplateAreas"
  }), Cp = VA({
    prop: "gridArea"
  });
  ei(ri, ni, oi, up, dp, fp, gp, pp, Bp, hp, mp, Cp);
  function or(A, e) {
    return e === "grey" ? e : A;
  }
  const wp = VA({
    prop: "color",
    themeKey: "palette",
    transform: or
  }), vp = VA({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: or
  }), yp = VA({
    prop: "backgroundColor",
    themeKey: "palette",
    transform: or
  });
  ei(wp, vp, yp);
  function me(A) {
    return A <= 1 && A !== 0 ? `${A * 100}%` : A;
  }
  const Qp = VA({
    prop: "width",
    transform: me
  }), ps = (A) => {
    if (A.maxWidth !== void 0 && A.maxWidth !== null) {
      const e = (t) => {
        var _a2, _b2, _c2, _d2, _e2;
        const r = ((_c2 = (_b2 = (_a2 = A.theme) == null ? void 0 : _a2.breakpoints) == null ? void 0 : _b2.values) == null ? void 0 : _c2[t]) || qo[t];
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
  ps.filterProps = [
    "maxWidth"
  ];
  const bp = VA({
    prop: "minWidth",
    transform: me
  }), Fp = VA({
    prop: "height",
    transform: me
  }), Up = VA({
    prop: "maxHeight",
    transform: me
  }), Ep = VA({
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
  const Sp = VA({
    prop: "boxSizing"
  });
  ei(Qp, ps, bp, Fp, Up, Ep, Sp);
  const sn = {
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
      style: ti
    },
    color: {
      themeKey: "palette",
      transform: or
    },
    bgcolor: {
      themeKey: "palette",
      cssProperty: "backgroundColor",
      transform: or
    },
    backgroundColor: {
      themeKey: "palette",
      transform: or
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
      style: ri
    },
    rowGap: {
      style: oi
    },
    columnGap: {
      style: ni
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
      style: ps
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
  function xp(...A) {
    const e = A.reduce((r, n) => r.concat(Object.keys(n)), []), t = new Set(e);
    return A.every((r) => t.size === Object.keys(r).length);
  }
  function Ip(A, e) {
    return typeof A == "function" ? A(e) : A;
  }
  function Hp() {
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
      const u = Ai(n, s) || {};
      return d ? d(i) : tt(i, r, (g) => {
        let B = ao(u, c, g);
        return g === B && typeof g == "string" && (B = ao(u, c, `${t}${g === "default" ? "" : mA(g)}`, g)), l === false ? B : {
          [l]: B
        };
      });
    }
    function e(t) {
      const { sx: r, theme: n = {}, nested: o } = t || {};
      if (!r) return null;
      const i = n.unstable_sxConfig ?? sn;
      function a(l) {
        let s = l;
        if (typeof l == "function") s = l(n);
        else if (typeof l != "object") return l;
        if (!s) return null;
        const c = Uu(n.breakpoints), d = Object.keys(c);
        let u = c;
        return Object.keys(s).forEach((f) => {
          const g = Ip(s[f], n);
          if (g != null) if (typeof g == "object") if (i[f]) u = Mr(u, A(f, g, n, i));
          else {
            const B = tt({
              theme: n
            }, g, (Q) => ({
              [f]: Q
            }));
            xp(B, g) ? u[f] = e({
              sx: g,
              theme: n,
              nested: true
            }) : u = Mr(u, B);
          }
          else u = Mr(u, A(f, g, n, i));
        }), !o && n.modularCssLayers ? {
          "@layer sx": il(n, ua(d, u))
        } : il(n, ua(d, u));
      }
      return Array.isArray(r) ? r.map(a) : a(r);
    }
    return e;
  }
  const mt = Hp();
  mt.filterProps = [
    "sx"
  ];
  function Tp(A, e) {
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
  Bs = function(A = {}, ...e) {
    const { breakpoints: t = {}, palette: r = {}, spacing: n, shape: o = {}, ...i } = A, a = Pg(t), l = Su(n);
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
        ...Vg,
        ...o
      }
    }, i);
    return s = Gg(s), s.applyStyles = Tp, s = e.reduce((c, d) => ZA(c, d), s), s.unstable_sxConfig = {
      ...sn,
      ...i == null ? void 0 : i.unstable_sxConfig
    }, s.unstable_sx = function(d) {
      return mt({
        sx: d,
        theme: this
      });
    }, s;
  };
  function Lp(A) {
    return Object.keys(A).length === 0;
  }
  function hs(A = null) {
    const e = h.useContext(rn);
    return !e || Lp(e) ? A : e;
  }
  const kp = Bs();
  ms = function(A = kp) {
    return hs(A);
  };
  function Fi(A) {
    const e = pt(A);
    return A !== e && e.styles ? (e.styles.match(/^@layer\s+[^{]*$/) || (e.styles = `@layer global{${e.styles}}`), e) : A;
  }
  function xu({ styles: A, themeId: e, defaultTheme: t = {} }) {
    const r = ms(t), n = e && r[e] || r;
    let o = typeof A == "function" ? A(n) : A;
    return n.modularCssLayers && (Array.isArray(o) ? o = o.map((i) => Fi(typeof i == "function" ? i(n) : i)) : o = Fi(o)), L.jsx(vu, {
      styles: o
    });
  }
  const Rp = (A) => {
    var _a2;
    const e = {
      systemProps: {},
      otherProps: {}
    }, t = ((_a2 = A == null ? void 0 : A.theme) == null ? void 0 : _a2.unstable_sxConfig) ?? sn;
    return Object.keys(A).forEach((r) => {
      t[r] ? e.systemProps[r] = A[r] : e.otherProps[r] = A[r];
    }), e;
  };
  Iu = function(A) {
    const { sx: e, ...t } = A, { systemProps: r, otherProps: n } = Rp(t);
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
  const ll = (A) => A, Op = () => {
    let A = ll;
    return {
      configure(e) {
        A = e;
      },
      generate(e) {
        return A(e);
      },
      reset() {
        A = ll;
      }
    };
  }, Hu = Op();
  function Tu(A) {
    var e, t, r = "";
    if (typeof A == "string" || typeof A == "number") r += A;
    else if (typeof A == "object") if (Array.isArray(A)) {
      var n = A.length;
      for (e = 0; e < n; e++) A[e] && (t = Tu(A[e])) && (r && (r += " "), r += t);
    } else for (t in A) A[t] && (r && (r += " "), r += t);
    return r;
  }
  pA = function() {
    for (var A, e, t = 0, r = "", n = arguments.length; t < n; t++) (A = arguments[t]) && (e = Tu(A)) && (r && (r += " "), r += e);
    return r;
  };
  function Kp(A = {}) {
    const { themeId: e, defaultTheme: t, defaultClassName: r = "MuiBox-root", generateClassName: n } = A, o = yu("div", {
      shouldForwardProp: (a) => a !== "theme" && a !== "sx" && a !== "as"
    })(mt);
    return h.forwardRef(function(l, s) {
      const c = ms(t), { className: d, component: u = "div", ...f } = Iu(l);
      return L.jsx(o, {
        as: u,
        ref: s,
        className: pA(d, n ? n(r) : r),
        theme: e && c[e] || c,
        ...f
      });
    });
  }
  const Mp = {
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
    const r = Mp[e];
    return r ? `${t}-${r}` : `${Hu.generate(A)}-${e}`;
  };
  HA = function(A, e, t = "Mui") {
    const r = {};
    return e.forEach((n) => {
      r[n] = RA(A, n, t);
    }), r;
  };
  function Lu(A) {
    const { variants: e, ...t } = A, r = {
      variants: e,
      style: pt(t),
      isProcessed: true
    };
    return r.style === t || e && e.forEach((n) => {
      typeof n.style != "function" && (n.style = pt(n.style));
    }), r;
  }
  const Dp = Bs();
  function Ui(A) {
    return A !== "ownerState" && A !== "theme" && A !== "sx" && A !== "as";
  }
  function Ht(A, e) {
    return e && A && typeof A == "object" && A.styles && !A.styles.startsWith("@layer") && (A.styles = `@layer ${e}{${String(A.styles)}}`), A;
  }
  function Pp(A) {
    return A ? (e, t) => t[A] : null;
  }
  function _p(A, e, t) {
    A.theme = Vp(A.theme) ? t : A.theme[e] || A.theme;
  }
  function Yn(A, e, t) {
    const r = typeof e == "function" ? e(A) : e;
    if (Array.isArray(r)) return r.flatMap((n) => Yn(A, n, t));
    if (Array.isArray(r == null ? void 0 : r.variants)) {
      let n;
      if (r.isProcessed) n = t ? Ht(r.style, t) : r.style;
      else {
        const { variants: o, ...i } = r;
        n = t ? Ht(pt(i), t) : i;
      }
      return ku(A, r.variants, [
        n
      ], t);
    }
    return (r == null ? void 0 : r.isProcessed) ? t ? Ht(pt(r.style), t) : r.style : t ? Ht(pt(r), t) : r;
  }
  function ku(A, e, t = [], r = void 0) {
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
  Np = function(A = {}) {
    const { themeId: e, defaultTheme: t = Dp, rootShouldForwardProp: r = Ui, slotShouldForwardProp: n = Ui } = A;
    function o(a) {
      _p(a, e, t);
    }
    return (a, l = {}) => {
      Og(a, (C) => C.filter((S) => S !== mt));
      const { name: s, slot: c, skipVariantsResolver: d, skipSx: u, overridesResolver: f = Pp(Wp(c)), ...g } = l, B = s && s.startsWith("Mui") || c ? "components" : "custom", Q = d !== void 0 ? d : c && c !== "Root" && c !== "root" || false, m = u || false;
      let F = Ui;
      c === "Root" || c === "root" ? F = r : c ? F = n : $p(a) && (F = void 0);
      const w = yu(a, {
        shouldForwardProp: F,
        label: Gp(),
        ...g
      }), v = (C) => {
        if (C.__emotion_real === C) return C;
        if (typeof C == "function") return function(x) {
          return Yn(x, C, x.theme.modularCssLayers ? B : void 0);
        };
        if (Ne(C)) {
          const S = Lu(C);
          return function(I) {
            return S.variants ? Yn(I, S, I.theme.modularCssLayers ? B : void 0) : I.theme.modularCssLayers ? Ht(S.style, B) : S.style;
          };
        }
        return C;
      }, U = (...C) => {
        const S = [], x = C.map(v), I = [];
        if (S.push(o), s && f && I.push(function(K) {
          var _a2, _b2;
          const R = (_b2 = (_a2 = K.theme.components) == null ? void 0 : _a2[s]) == null ? void 0 : _b2.styleOverrides;
          if (!R) return null;
          const M = {};
          for (const z in R) M[z] = Yn(K, R[z], K.theme.modularCssLayers ? "theme" : void 0);
          return f(K, M);
        }), s && !Q && I.push(function(K) {
          var _a2, _b2, _c2;
          const R = (_c2 = (_b2 = (_a2 = K.theme) == null ? void 0 : _a2.components) == null ? void 0 : _b2[s]) == null ? void 0 : _c2.variants;
          return R ? ku(K, R, [], K.theme.modularCssLayers ? "theme" : void 0) : null;
        }), m || I.push(mt), Array.isArray(x[0])) {
          const D = x.shift(), K = new Array(S.length).fill(""), N = new Array(I.length).fill("");
          let R;
          R = [
            ...K,
            ...D,
            ...N
          ], R.raw = [
            ...K,
            ...D.raw,
            ...N
          ], S.unshift(R);
        }
        const p = [
          ...S,
          ...x,
          ...I
        ], T = w(...p);
        return a.muiName && (T.muiName = a.muiName), T;
      };
      return w.withConfig && (U.withConfig = w.withConfig), U;
    };
  };
  function Gp(A, e) {
    return void 0;
  }
  function Vp(A) {
    for (const e in A) return false;
    return true;
  }
  function $p(A) {
    return typeof A == "string" && A.charCodeAt(0) > 96;
  }
  function Wp(A) {
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
  zp = function(A, e = Number.MIN_SAFE_INTEGER, t = Number.MAX_SAFE_INTEGER) {
    return Math.max(e, Math.min(A, t));
  };
  function Cs(A, e = 0, t = 1) {
    return zp(A, e, t);
  }
  function jp(A) {
    A = A.slice(1);
    const e = new RegExp(`.{1,${A.length >= 6 ? 2 : 1}}`, "g");
    let t = A.match(e);
    return t && t[0].length === 1 && (t = t.map((r) => r + r)), t ? `rgb${t.length === 4 ? "a" : ""}(${t.map((r, n) => n < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
  }
  function Ct(A) {
    if (A.type) return A;
    if (A.charAt(0) === "#") return Ct(jp(A));
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
  const Xp = (A) => {
    const e = Ct(A);
    return e.values.slice(0, 3).map((t, r) => e.type.includes("hsl") && r !== 0 ? `${t}%` : t).join(" ");
  }, Sr = (A, e) => {
    try {
      return Xp(A);
    } catch {
      return A;
    }
  };
  function ii(A) {
    const { type: e, colorSpace: t } = A;
    let { values: r } = A;
    return e.includes("rgb") ? r = r.map((n, o) => o < 3 ? parseInt(n, 10) : n) : e.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), e.includes("color") ? r = `${t} ${r.join(" ")}` : r = `${r.join(", ")}`, `${e}(${r})`;
  }
  function Ru(A) {
    A = Ct(A);
    const { values: e } = A, t = e[0], r = e[1] / 100, n = e[2] / 100, o = r * Math.min(n, 1 - n), i = (s, c = (s + t / 30) % 12) => n - o * Math.max(Math.min(c - 3, 9 - c, 1), -1);
    let a = "rgb";
    const l = [
      Math.round(i(0) * 255),
      Math.round(i(8) * 255),
      Math.round(i(4) * 255)
    ];
    return A.type === "hsla" && (a += "a", l.push(e[3])), ii({
      type: a,
      values: l
    });
  }
  function fa(A) {
    A = Ct(A);
    let e = A.type === "hsl" || A.type === "hsla" ? Ct(Ru(A)).values : A.values;
    return e = e.map((t) => (A.type !== "color" && (t /= 255), t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4)), Number((0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2]).toFixed(3));
  }
  function Jp(A, e) {
    const t = fa(A), r = fa(e);
    return (Math.max(t, r) + 0.05) / (Math.min(t, r) + 0.05);
  }
  sr = function(A, e) {
    return A = Ct(A), e = Cs(e), (A.type === "rgb" || A.type === "hsl") && (A.type += "a"), A.type === "color" ? A.values[3] = `/${e}` : A.values[3] = e, ii(A);
  };
  function pn(A, e, t) {
    try {
      return sr(A, e);
    } catch {
      return A;
    }
  }
  ws = function(A, e) {
    if (A = Ct(A), e = Cs(e), A.type.includes("hsl")) A.values[2] *= 1 - e;
    else if (A.type.includes("rgb") || A.type.includes("color")) for (let t = 0; t < 3; t += 1) A.values[t] *= 1 - e;
    return ii(A);
  };
  function FA(A, e, t) {
    try {
      return ws(A, e);
    } catch {
      return A;
    }
  }
  vs = function(A, e) {
    if (A = Ct(A), e = Cs(e), A.type.includes("hsl")) A.values[2] += (100 - A.values[2]) * e;
    else if (A.type.includes("rgb")) for (let t = 0; t < 3; t += 1) A.values[t] += (255 - A.values[t]) * e;
    else if (A.type.includes("color")) for (let t = 0; t < 3; t += 1) A.values[t] += (1 - A.values[t]) * e;
    return ii(A);
  };
  function UA(A, e, t) {
    try {
      return vs(A, e);
    } catch {
      return A;
    }
  }
  function Yp(A, e = 0.15) {
    return fa(A) > 0.5 ? ws(A, e) : vs(A, e);
  }
  function Bn(A, e, t) {
    try {
      return Yp(A, e);
    } catch {
      return A;
    }
  }
  cl = function(...A) {
    return A.reduce((e, t) => t == null ? e : function(...n) {
      e.apply(this, n), t.apply(this, n);
    }, () => {
    });
  };
  function Ou(A, e = 166) {
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
  Ei = function(A, e) {
    var _a2, _b2, _c2;
    return h.isValidElement(A) && e.indexOf(A.type.muiName ?? ((_c2 = (_b2 = (_a2 = A.type) == null ? void 0 : _a2._payload) == null ? void 0 : _b2.value) == null ? void 0 : _c2.muiName)) !== -1;
  };
  Le = function(A) {
    return A && A.ownerDocument || document;
  };
  function nt(A) {
    return Le(A).defaultView || window;
  }
  function ul(A, e) {
    typeof A == "function" ? A(e) : A && (A.current = e);
  }
  let dl = 0;
  function Zp(A) {
    const [e, t] = h.useState(A), r = A || e;
    return h.useEffect(() => {
      e == null && (dl += 1, t(`mui-${dl}`));
    }, [
      e
    ]), r;
  }
  const qp = {
    ...ia
  }, fl = qp.useId;
  ai = function(A) {
    if (fl !== void 0) {
      const e = fl();
      return A ?? e;
    }
    return Zp(A);
  };
  gl = function({ controlled: A, default: e, name: t, state: r = "value" }) {
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
  const pl = {};
  function Ku(A, e) {
    const t = h.useRef(pl);
    return t.current === pl && (t.current = A(e)), t;
  }
  const AB = [];
  function eB(A) {
    h.useEffect(A, AB);
  }
  class ys {
    static create() {
      return new ys();
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
  }
  function Mu() {
    const A = Ku(ys.create).current;
    return eB(A.disposeEffect), A;
  }
  Bl = function(A) {
    try {
      return A.matches(":focus-visible");
    } catch {
    }
    return false;
  };
  function Du(A = window) {
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
  function tB(A) {
    return typeof A == "string";
  }
  function Pu(A, e, t) {
    return A === void 0 || tB(A) ? e : {
      ...e,
      ownerState: {
        ...e.ownerState,
        ...t
      }
    };
  }
  _u = function(A, e = []) {
    if (A === void 0) return {};
    const t = {};
    return Object.keys(A).filter((r) => r.match(/^on[A-Z]/) && typeof A[r] == "function" && !e.includes(r)).forEach((r) => {
      t[r] = A[r];
    }), t;
  };
  function hl(A) {
    if (A === void 0) return {};
    const e = {};
    return Object.keys(A).filter((t) => !(t.match(/^on[A-Z]/) && typeof A[t] == "function")).forEach((t) => {
      e[t] = A[t];
    }), e;
  }
  function Nu(A) {
    const { getSlotProps: e, additionalProps: t, externalSlotProps: r, externalForwardedProps: n, className: o } = A;
    if (!e) {
      const f = pA(t == null ? void 0 : t.className, o, n == null ? void 0 : n.className, r == null ? void 0 : r.className), g = {
        ...t == null ? void 0 : t.style,
        ...n == null ? void 0 : n.style,
        ...r == null ? void 0 : r.style
      }, B = {
        ...t,
        ...n,
        ...r
      };
      return f.length > 0 && (B.className = f), Object.keys(g).length > 0 && (B.style = g), {
        props: B,
        internalRef: void 0
      };
    }
    const i = _u({
      ...n,
      ...r
    }), a = hl(r), l = hl(n), s = e(i), c = pA(s == null ? void 0 : s.className, t == null ? void 0 : t.className, o, n == null ? void 0 : n.className, r == null ? void 0 : r.className), d = {
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
  function Gu(A, e, t) {
    return typeof A == "function" ? A(e, t) : A;
  }
  rB = function(A) {
    var _a2;
    const { elementType: e, externalSlotProps: t, ownerState: r, skipResolvingSlotProps: n = false, ...o } = A, i = n ? {} : Gu(t, r), { props: a, internalRef: l } = Nu({
      ...o,
      externalSlotProps: i
    }), s = Be(l, i == null ? void 0 : i.ref, (_a2 = A.additionalProps) == null ? void 0 : _a2.ref);
    return Pu(e, {
      ...a,
      ref: s
    }, r);
  };
  function ln(A) {
    var _a2;
    return parseInt(h.version, 10) >= 19 ? ((_a2 = A == null ? void 0 : A.props) == null ? void 0 : _a2.ref) || null : (A == null ? void 0 : A.ref) || null;
  }
  const Vu = h.createContext(null);
  function Qs() {
    return h.useContext(Vu);
  }
  const nB = typeof Symbol == "function" && Symbol.for, oB = nB ? /* @__PURE__ */ Symbol.for("mui.nested") : "__THEME_NESTED__";
  function iB(A, e) {
    return typeof e == "function" ? e(A) : {
      ...A,
      ...e
    };
  }
  function aB(A) {
    const { children: e, theme: t } = A, r = Qs(), n = h.useMemo(() => {
      const o = r === null ? {
        ...t
      } : iB(r, t);
      return o != null && (o[oB] = r !== null), o;
    }, [
      t,
      r
    ]);
    return L.jsx(Vu.Provider, {
      value: n,
      children: e
    });
  }
  const $u = h.createContext();
  function sB({ value: A, ...e }) {
    return L.jsx($u.Provider, {
      value: A ?? true,
      ...e
    });
  }
  let Wu;
  lB = () => h.useContext($u) ?? false;
  Wu = h.createContext(void 0);
  function cB({ value: A, children: e }) {
    return L.jsx(Wu.Provider, {
      value: A,
      children: e
    });
  }
  function uB(A) {
    const { theme: e, name: t, props: r } = A;
    if (!e || !e.components || !e.components[t]) return r;
    const n = e.components[t];
    return n.defaultProps ? da(n.defaultProps, r) : !n.styleOverrides && !n.variants ? da(n, r) : r;
  }
  function dB({ props: A, name: e }) {
    const t = h.useContext(Wu);
    return uB({
      props: A,
      name: e,
      theme: {
        components: t
      }
    });
  }
  function fB(A) {
    const e = hs(), t = ai() || "", { modularCssLayers: r } = A;
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
    ]), n ? L.jsx(xu, {
      styles: n
    }) : null;
  }
  const ml = {};
  function Cl(A, e, t, r = false) {
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
  function zu(A) {
    const { children: e, theme: t, themeId: r } = A, n = hs(ml), o = Qs() || ml, i = Cl(r, n, t), a = Cl(r, o, t, true), l = (r ? i[r] : i).direction === "rtl", s = fB(i);
    return L.jsx(aB, {
      theme: a,
      children: L.jsx(rn.Provider, {
        value: i,
        children: L.jsx(sB, {
          value: l,
          children: L.jsxs(cB, {
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
  const wl = {
    theme: void 0
  };
  function gB(A) {
    let e, t;
    return function(n) {
      let o = e;
      return (o === void 0 || n.theme !== t) && (wl.theme = n.theme, o = Lu(A(wl)), e = o, t = n.theme), o;
    };
  }
  const bs = "mode", Fs = "color-scheme", pB = "data-color-scheme";
  function BB(A) {
    const { defaultMode: e = "system", defaultLightColorScheme: t = "light", defaultDarkColorScheme: r = "dark", modeStorageKey: n = bs, colorSchemeStorageKey: o = Fs, attribute: i = pB, colorSchemeNode: a = "document.documentElement", nonce: l } = A || {};
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
  function hB() {
  }
  const mB = ({ key: A, storageWindow: e }) => (!e && typeof window < "u" && (e = window), {
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
      if (!e) return hB;
      const r = (n) => {
        const o = n.newValue;
        n.key === A && t(o);
      };
      return e.addEventListener("storage", r), () => {
        e.removeEventListener("storage", r);
      };
    }
  });
  function Si() {
  }
  function vl(A) {
    if (typeof window < "u" && typeof window.matchMedia == "function" && A === "system") return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function ju(A, e) {
    if (A.mode === "light" || A.mode === "system" && A.systemMode === "light") return e("light");
    if (A.mode === "dark" || A.mode === "system" && A.systemMode === "dark") return e("dark");
  }
  function CB(A) {
    return ju(A, (e) => {
      if (e === "light") return A.lightColorScheme;
      if (e === "dark") return A.darkColorScheme;
    });
  }
  function wB(A) {
    const { defaultMode: e = "light", defaultLightColorScheme: t, defaultDarkColorScheme: r, supportedColorSchemes: n = [], modeStorageKey: o = bs, colorSchemeStorageKey: i = Fs, storageWindow: a = typeof window > "u" ? void 0 : window, storageManager: l = mB, noSsr: s = false } = A, c = n.join(","), d = n.length > 1, u = h.useMemo(() => l == null ? void 0 : l({
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
    ]), [B, Q] = h.useState(() => {
      const x = (u == null ? void 0 : u.get(e)) || e, I = (f == null ? void 0 : f.get(t)) || t, p = (g == null ? void 0 : g.get(r)) || r;
      return {
        mode: x,
        systemMode: vl(x),
        lightColorScheme: I,
        darkColorScheme: p
      };
    }), [m, F] = h.useState(s || !d);
    h.useEffect(() => {
      F(true);
    }, []);
    const w = CB(B), v = h.useCallback((x) => {
      Q((I) => {
        if (x === I.mode) return I;
        const p = x ?? e;
        return u == null ? void 0 : u.set(p), {
          ...I,
          mode: p,
          systemMode: vl(p)
        };
      });
    }, [
      u,
      e
    ]), U = h.useCallback((x) => {
      x ? typeof x == "string" ? x && !c.includes(x) ? console.error(`\`${x}\` does not exist in \`theme.colorSchemes\`.`) : Q((I) => {
        const p = {
          ...I
        };
        return ju(I, (T) => {
          T === "light" && (f == null ? void 0 : f.set(x), p.lightColorScheme = x), T === "dark" && (g == null ? void 0 : g.set(x), p.darkColorScheme = x);
        }), p;
      }) : Q((I) => {
        const p = {
          ...I
        }, T = x.light === null ? t : x.light, D = x.dark === null ? r : x.dark;
        return T && (c.includes(T) ? (p.lightColorScheme = T, f == null ? void 0 : f.set(T)) : console.error(`\`${T}\` does not exist in \`theme.colorSchemes\`.`)), D && (c.includes(D) ? (p.darkColorScheme = D, g == null ? void 0 : g.set(D)) : console.error(`\`${D}\` does not exist in \`theme.colorSchemes\`.`)), p;
      }) : Q((I) => (f == null ? void 0 : f.set(t), g == null ? void 0 : g.set(r), {
        ...I,
        lightColorScheme: t,
        darkColorScheme: r
      }));
    }, [
      c,
      f,
      g,
      t,
      r
    ]), C = h.useCallback((x) => {
      B.mode === "system" && Q((I) => {
        const p = (x == null ? void 0 : x.matches) ? "dark" : "light";
        return I.systemMode === p ? I : {
          ...I,
          systemMode: p
        };
      });
    }, [
      B.mode
    ]), S = h.useRef(C);
    return S.current = C, h.useEffect(() => {
      if (typeof window.matchMedia != "function" || !d) return;
      const x = (...p) => S.current(...p), I = window.matchMedia("(prefers-color-scheme: dark)");
      return I.addListener(x), x(I), () => {
        I.removeListener(x);
      };
    }, [
      d
    ]), h.useEffect(() => {
      if (d) {
        const x = (u == null ? void 0 : u.subscribe((T) => {
          (!T || [
            "light",
            "dark",
            "system"
          ].includes(T)) && v(T || e);
        })) || Si, I = (f == null ? void 0 : f.subscribe((T) => {
          (!T || c.match(T)) && U({
            light: T
          });
        })) || Si, p = (g == null ? void 0 : g.subscribe((T) => {
          (!T || c.match(T)) && U({
            dark: T
          });
        })) || Si;
        return () => {
          x(), I(), p();
        };
      }
    }, [
      U,
      v,
      c,
      e,
      a,
      d,
      u,
      f,
      g
    ]), {
      ...B,
      mode: m ? B.mode : void 0,
      systemMode: m ? B.systemMode : void 0,
      colorScheme: m ? w : void 0,
      setMode: v,
      setColorScheme: U
    };
  }
  const vB = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
  function yB(A) {
    const { themeId: e, theme: t = {}, modeStorageKey: r = bs, colorSchemeStorageKey: n = Fs, disableTransitionOnChange: o = false, defaultColorScheme: i, resolveTheme: a } = A, l = {
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
      const { children: F, theme: w, modeStorageKey: v = r, colorSchemeStorageKey: U = n, disableTransitionOnChange: C = o, storageManager: S, storageWindow: x = typeof window > "u" ? void 0 : window, documentNode: I = typeof document > "u" ? void 0 : document, colorSchemeNode: p = typeof document > "u" ? void 0 : document.documentElement, disableNestedContext: T = false, disableStyleSheetGeneration: D = false, defaultMode: K = "system", noSsr: N } = m, R = h.useRef(false), M = Qs(), z = h.useContext(s), rA = !!z && !T, P = h.useMemo(() => w || (typeof t == "function" ? t() : t), [
        w
      ]), X = P[e], j = X || P, { colorSchemes: nA = d, components: k = u, cssVarPrefix: $ } = j, V = Object.keys(nA).filter((gA) => !!nA[gA]).join(","), Y = h.useMemo(() => V.split(","), [
        V
      ]), dA = typeof i == "string" ? i : i.light, iA = typeof i == "string" ? i : i.dark, eA = nA[dA] && nA[iA] ? K : ((_b2 = (_a2 = nA[j.defaultColorScheme]) == null ? void 0 : _a2.palette) == null ? void 0 : _b2.mode) || ((_c2 = j.palette) == null ? void 0 : _c2.mode), { mode: J, setMode: oA, systemMode: aA, lightColorScheme: y, darkColorScheme: E, colorScheme: b, setColorScheme: _ } = wB({
        supportedColorSchemes: Y,
        defaultLightColorScheme: dA,
        defaultDarkColorScheme: iA,
        modeStorageKey: v,
        colorSchemeStorageKey: U,
        defaultMode: eA,
        storageManager: S,
        storageWindow: x,
        noSsr: N
      });
      let W = J, G = b;
      rA && (W = z.mode, G = z.colorScheme);
      const sA = h.useMemo(() => {
        var _a3;
        const gA = G || j.defaultColorScheme, _A = ((_a3 = j.generateThemeVars) == null ? void 0 : _a3.call(j)) || j.vars, zA = {
          ...j,
          components: k,
          colorSchemes: nA,
          cssVarPrefix: $,
          vars: _A
        };
        if (typeof zA.generateSpacing == "function" && (zA.spacing = zA.generateSpacing()), gA) {
          const ie = nA[gA];
          ie && typeof ie == "object" && Object.keys(ie).forEach((XA) => {
            ie[XA] && typeof ie[XA] == "object" ? zA[XA] = {
              ...zA[XA],
              ...ie[XA]
            } : zA[XA] = ie[XA];
          });
        }
        return a ? a(zA) : zA;
      }, [
        j,
        G,
        k,
        nA,
        $
      ]), cA = j.colorSchemeSelector;
      rt(() => {
        if (G && p && cA && cA !== "media") {
          const gA = cA;
          let _A = cA;
          if (gA === "class" && (_A = ".%s"), gA === "data" && (_A = "[data-%s]"), (gA == null ? void 0 : gA.startsWith("data-")) && !gA.includes("%s") && (_A = `[${gA}="%s"]`), _A.startsWith(".")) p.classList.remove(...Y.map((zA) => _A.substring(1).replace("%s", zA))), p.classList.add(_A.substring(1).replace("%s", G));
          else {
            const zA = _A.replace("%s", G).match(/\[([^\]]+)\]/);
            if (zA) {
              const [ie, XA] = zA[1].split("=");
              XA || Y.forEach((it) => {
                p.removeAttribute(ie.replace(G, it));
              }), p.setAttribute(ie, XA ? XA.replace(/"|'/g, "") : "");
            } else p.setAttribute(_A, G);
          }
        }
      }, [
        G,
        cA,
        p,
        Y
      ]), h.useEffect(() => {
        let gA;
        if (C && R.current && I) {
          const _A = I.createElement("style");
          _A.appendChild(I.createTextNode(vB)), I.head.appendChild(_A), window.getComputedStyle(I.body), gA = setTimeout(() => {
            I.head.removeChild(_A);
          }, 1);
        }
        return () => {
          clearTimeout(gA);
        };
      }, [
        G,
        C,
        I
      ]), h.useEffect(() => (R.current = true, () => {
        R.current = false;
      }), []);
      const fA = h.useMemo(() => ({
        allColorSchemes: Y,
        colorScheme: G,
        darkColorScheme: E,
        lightColorScheme: y,
        mode: W,
        setColorScheme: _,
        setMode: oA,
        systemMode: aA
      }), [
        Y,
        G,
        E,
        y,
        W,
        _,
        oA,
        aA,
        sA.colorSchemeSelector
      ]);
      let AA = true;
      (D || j.cssVariables === false || rA && (M == null ? void 0 : M.cssVarPrefix) === $) && (AA = false);
      const Ae = L.jsxs(h.Fragment, {
        children: [
          L.jsx(zu, {
            themeId: X ? e : void 0,
            theme: sA,
            children: F
          }),
          AA && L.jsx(vu, {
            styles: ((_d2 = sA.generateStyleSheets) == null ? void 0 : _d2.call(sA)) || []
          })
        ]
      });
      return rA ? Ae : L.jsx(s.Provider, {
        value: fA,
        children: Ae
      });
    }
    const g = typeof i == "string" ? i : i.light, B = typeof i == "string" ? i : i.dark;
    return {
      CssVarsProvider: f,
      useColorScheme: c,
      getInitColorSchemeScript: (m) => BB({
        colorSchemeStorageKey: n,
        defaultLightColorScheme: g,
        defaultDarkColorScheme: B,
        modeStorageKey: r,
        ...m
      })
    };
  }
  function QB(A = "") {
    function e(...r) {
      if (!r.length) return "";
      const n = r[0];
      return typeof n == "string" && !n.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${A ? `${A}-` : ""}${n}${e(...r.slice(1))})` : `, ${n}`;
    }
    return (r, ...n) => `var(--${A ? `${A}-` : ""}${r}${e(...n)})`;
  }
  const yl = (A, e, t, r = []) => {
    let n = A;
    e.forEach((o, i) => {
      i === e.length - 1 ? Array.isArray(n) ? n[Number(o)] = t : n && typeof n == "object" && (n[o] = t) : n && typeof n == "object" && (n[o] || (n[o] = r.includes(o) ? [] : {}), n = n[o]);
    });
  }, bB = (A, e, t) => {
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
  }, FB = (A, e) => typeof e == "number" ? [
    "lineHeight",
    "fontWeight",
    "opacity",
    "zIndex"
  ].some((r) => A.includes(r)) || A[A.length - 1].toLowerCase().includes("opacity") ? e : `${e}px` : e;
  function xi(A, e) {
    const { prefix: t, shouldSkipGeneratingVar: r } = e || {}, n = {}, o = {}, i = {};
    return bB(A, (a, l, s) => {
      if ((typeof l == "string" || typeof l == "number") && (!r || !r(a, l))) {
        const c = `--${t ? `${t}-` : ""}${a.join("-")}`, d = FB(a, l);
        Object.assign(n, {
          [c]: d
        }), yl(o, a, `var(${c})`, s), yl(i, a, `var(${c}, ${d})`, s);
      }
    }, (a) => a[0] === "vars"), {
      css: n,
      vars: o,
      varsWithDefaults: i
    };
  }
  function UB(A, e = {}) {
    const { getSelector: t = Q, disableCssColorScheme: r, colorSchemeSelector: n } = e, { colorSchemes: o = {}, components: i, defaultColorScheme: a = "light", ...l } = A, { vars: s, css: c, varsWithDefaults: d } = xi(l, e);
    let u = d;
    const f = {}, { [a]: g, ...B } = o;
    if (Object.entries(B || {}).forEach(([w, v]) => {
      const { vars: U, css: C, varsWithDefaults: S } = xi(v, e);
      u = ZA(u, S), f[w] = {
        css: C,
        vars: U
      };
    }), g) {
      const { css: w, vars: v, varsWithDefaults: U } = xi(g, e);
      u = ZA(u, U), f[a] = {
        css: w,
        vars: v
      };
    }
    function Q(w, v) {
      var _a2, _b2;
      let U = n;
      if (n === "class" && (U = ".%s"), n === "data" && (U = "[data-%s]"), (n == null ? void 0 : n.startsWith("data-")) && !n.includes("%s") && (U = `[${n}="%s"]`), w) {
        if (U === "media") return A.defaultColorScheme === w ? ":root" : {
          [`@media (prefers-color-scheme: ${((_b2 = (_a2 = o[w]) == null ? void 0 : _a2.palette) == null ? void 0 : _b2.mode) || w})`]: {
            ":root": v
          }
        };
        if (U) return A.defaultColorScheme === w ? `:root, ${U.replace("%s", String(w))}` : U.replace("%s", String(w));
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
        function U(x, I) {
          Object.keys(I).length && w.push(typeof x == "string" ? {
            [x]: {
              ...I
            }
          } : x);
        }
        U(t(void 0, {
          ...c
        }), c);
        const { [v]: C, ...S } = f;
        if (C) {
          const { css: x } = C, I = (_b2 = (_a2 = o[v]) == null ? void 0 : _a2.palette) == null ? void 0 : _b2.mode, p = !r && I ? {
            colorScheme: I,
            ...x
          } : {
            ...x
          };
          U(t(v, {
            ...p
          }), p);
        }
        return Object.entries(S).forEach(([x, { css: I }]) => {
          var _a3, _b3;
          const p = (_b3 = (_a3 = o[x]) == null ? void 0 : _a3.palette) == null ? void 0 : _b3.mode, T = !r && p ? {
            colorScheme: p,
            ...I
          } : {
            ...I
          };
          U(t(x, {
            ...T
          }), T);
        }), w;
      }
    };
  }
  function EB(A) {
    return function(t) {
      return A === "media" ? `@media (prefers-color-scheme: ${t})` : A ? A.startsWith("data-") && !A.includes("%s") ? `[${A}="${t}"] &` : A === "class" ? `.${t} &` : A === "data" ? `[data-${t}] &` : `${A.replace("%s", t)} &` : "&";
    };
  }
  function Xu() {
    return {
      text: {
        primary: "rgba(0, 0, 0, 0.87)",
        secondary: "rgba(0, 0, 0, 0.6)",
        disabled: "rgba(0, 0, 0, 0.38)"
      },
      divider: "rgba(0, 0, 0, 0.12)",
      background: {
        paper: zr.white,
        default: zr.white
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
  const SB = Xu();
  function Ju() {
    return {
      text: {
        primary: zr.white,
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
        active: zr.white,
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
  const Ql = Ju();
  function bl(A, e, t, r) {
    const n = r.light || r, o = r.dark || r * 1.5;
    A[e] || (A.hasOwnProperty(t) ? A[e] = A[t] : e === "light" ? A.light = vs(A.main, n) : e === "dark" && (A.dark = ws(A.main, o)));
  }
  function xB(A = "light") {
    return A === "dark" ? {
      main: _t[200],
      light: _t[50],
      dark: _t[400]
    } : {
      main: _t[700],
      light: _t[400],
      dark: _t[800]
    };
  }
  function IB(A = "light") {
    return A === "dark" ? {
      main: Pt[200],
      light: Pt[50],
      dark: Pt[400]
    } : {
      main: Pt[500],
      light: Pt[300],
      dark: Pt[700]
    };
  }
  function HB(A = "light") {
    return A === "dark" ? {
      main: Dt[500],
      light: Dt[300],
      dark: Dt[700]
    } : {
      main: Dt[700],
      light: Dt[400],
      dark: Dt[800]
    };
  }
  function TB(A = "light") {
    return A === "dark" ? {
      main: Nt[400],
      light: Nt[300],
      dark: Nt[700]
    } : {
      main: Nt[700],
      light: Nt[500],
      dark: Nt[900]
    };
  }
  function LB(A = "light") {
    return A === "dark" ? {
      main: Gt[400],
      light: Gt[300],
      dark: Gt[700]
    } : {
      main: Gt[800],
      light: Gt[500],
      dark: Gt[900]
    };
  }
  function kB(A = "light") {
    return A === "dark" ? {
      main: Cr[400],
      light: Cr[300],
      dark: Cr[700]
    } : {
      main: "#ed6c02",
      light: Cr[500],
      dark: Cr[900]
    };
  }
  function Us(A) {
    const { mode: e = "light", contrastThreshold: t = 3, tonalOffset: r = 0.2, ...n } = A, o = A.primary || xB(e), i = A.secondary || IB(e), a = A.error || HB(e), l = A.info || TB(e), s = A.success || LB(e), c = A.warning || kB(e);
    function d(B) {
      return Jp(B, Ql.text.primary) >= t ? Ql.text.primary : SB.text.primary;
    }
    const u = ({ color: B, name: Q, mainShade: m = 500, lightShade: F = 300, darkShade: w = 700 }) => {
      if (B = {
        ...B
      }, !B.main && B[m] && (B.main = B[m]), !B.hasOwnProperty("main")) throw new Error(et(11, Q ? ` (${Q})` : "", m));
      if (typeof B.main != "string") throw new Error(et(12, Q ? ` (${Q})` : "", JSON.stringify(B.main)));
      return bl(B, "light", F, r), bl(B, "dark", w, r), B.contrastText || (B.contrastText = d(B.main)), B;
    };
    let f;
    return e === "light" ? f = Xu() : e === "dark" && (f = Ju()), ZA({
      common: {
        ...zr
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
      grey: Tf,
      contrastThreshold: t,
      getContrastText: d,
      augmentColor: u,
      tonalOffset: r,
      ...f
    }, n);
  }
  function RB(A) {
    const e = {};
    return Object.entries(A).forEach((r) => {
      const [n, o] = r;
      typeof o == "object" && (e[n] = `${o.fontStyle ? `${o.fontStyle} ` : ""}${o.fontVariant ? `${o.fontVariant} ` : ""}${o.fontWeight ? `${o.fontWeight} ` : ""}${o.fontStretch ? `${o.fontStretch} ` : ""}${o.fontSize || ""}${o.lineHeight ? `/${o.lineHeight} ` : ""}${o.fontFamily || ""}`);
    }), e;
  }
  function OB(A, e) {
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
  function KB(A) {
    return Math.round(A * 1e5) / 1e5;
  }
  const Fl = {
    textTransform: "uppercase"
  }, Ul = '"Roboto", "Helvetica", "Arial", sans-serif';
  function Yu(A, e) {
    const { fontFamily: t = Ul, fontSize: r = 14, fontWeightLight: n = 300, fontWeightRegular: o = 400, fontWeightMedium: i = 500, fontWeightBold: a = 700, htmlFontSize: l = 16, allVariants: s, pxToRem: c, ...d } = typeof e == "function" ? e(A) : e, u = r / 14, f = c || ((Q) => `${Q / l * u}rem`), g = (Q, m, F, w, v) => ({
      fontFamily: t,
      fontWeight: Q,
      fontSize: f(m),
      lineHeight: F,
      ...t === Ul ? {
        letterSpacing: `${KB(w / m)}em`
      } : {},
      ...v,
      ...s
    }), B = {
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
      button: g(i, 14, 1.75, 0.4, Fl),
      caption: g(o, 12, 1.66, 0.4),
      overline: g(o, 12, 2.66, 1, Fl),
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
      ...B
    }, d, {
      clone: false
    });
  }
  const MB = 0.2, DB = 0.14, PB = 0.12;
  function LA(...A) {
    return [
      `${A[0]}px ${A[1]}px ${A[2]}px ${A[3]}px rgba(0,0,0,${MB})`,
      `${A[4]}px ${A[5]}px ${A[6]}px ${A[7]}px rgba(0,0,0,${DB})`,
      `${A[8]}px ${A[9]}px ${A[10]}px ${A[11]}px rgba(0,0,0,${PB})`
    ].join(",");
  }
  const _B = [
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
  ], NB = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
  }, GB = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195
  };
  function El(A) {
    return `${Math.round(A)}ms`;
  }
  function VB(A) {
    if (!A) return 0;
    const e = A / 36;
    return Math.min(Math.round((4 + 15 * e ** 0.25 + e / 5) * 10), 3e3);
  }
  function $B(A) {
    const e = {
      ...NB,
      ...A.easing
    }, t = {
      ...GB,
      ...A.duration
    };
    return {
      getAutoHeightDuration: VB,
      create: (n = [
        "all"
      ], o = {}) => {
        const { duration: i = t.standard, easing: a = e.easeInOut, delay: l = 0, ...s } = o;
        return (Array.isArray(n) ? n : [
          n
        ]).map((c) => `${c} ${typeof i == "string" ? i : El(i)} ${a} ${typeof l == "string" ? l : El(l)}`).join(",");
      },
      ...A,
      easing: e,
      duration: t
    };
  }
  const WB = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
  };
  function zB(A) {
    return Ne(A) || typeof A > "u" || typeof A == "string" || typeof A == "boolean" || typeof A == "number" || Array.isArray(A);
  }
  function Zu(A = {}) {
    const e = {
      ...A
    };
    function t(r) {
      const n = Object.entries(r);
      for (let o = 0; o < n.length; o++) {
        const [i, a] = n[o];
        !zB(a) || i.startsWith("unstable_") ? delete r[i] : Ne(a) && (r[i] = {
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
    const c = Us(o), d = Bs(A);
    let u = ZA(d, {
      mixins: OB(d.breakpoints, r),
      palette: c,
      shadows: _B.slice(),
      typography: Yu(c, a),
      transitions: $B(i),
      zIndex: {
        ...WB
      }
    });
    return u = ZA(u, s), u = e.reduce((f, g) => ZA(f, g), u), u.unstable_sxConfig = {
      ...sn,
      ...s == null ? void 0 : s.unstable_sxConfig
    }, u.unstable_sx = function(g) {
      return mt({
        sx: g,
        theme: this
      });
    }, u.toRuntimeSource = Zu, u;
  }
  function pa(A) {
    let e;
    return A < 1 ? e = 5.11916 * A ** 2 : e = 4.5 * Math.log(A + 1) + 2, Math.round(e * 10) / 1e3;
  }
  const jB = [
    ...Array(25)
  ].map((A, e) => {
    if (e === 0) return "none";
    const t = pa(e);
    return `linear-gradient(rgba(255 255 255 / ${t}), rgba(255 255 255 / ${t}))`;
  });
  function qu(A) {
    return {
      inputPlaceholder: A === "dark" ? 0.5 : 0.42,
      inputUnderline: A === "dark" ? 0.7 : 0.42,
      switchTrackDisabled: A === "dark" ? 0.2 : 0.12,
      switchTrack: A === "dark" ? 0.3 : 0.38
    };
  }
  function Ad(A) {
    return A === "dark" ? jB : [];
  }
  function XB(A) {
    const { palette: e = {
      mode: "light"
    }, opacity: t, overlays: r, ...n } = A, o = Us(e);
    return {
      palette: o,
      opacity: {
        ...qu(o.mode),
        ...t
      },
      overlays: r || Ad(o.mode),
      ...n
    };
  }
  function JB(A) {
    var _a2;
    return !!A[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!A[0].match(/sxConfig$/) || A[0] === "palette" && !!((_a2 = A[1]) == null ? void 0 : _a2.match(/(mode|contrastThreshold|tonalOffset)/));
  }
  const YB = (A) => [
    ...[
      ...Array(25)
    ].map((e, t) => `--${A ? `${A}-` : ""}overlays-${t}`),
    `--${A ? `${A}-` : ""}palette-AppBar-darkBg`,
    `--${A ? `${A}-` : ""}palette-AppBar-darkColor`
  ], ZB = (A) => (e, t) => {
    const r = A.rootSelector || ":root", n = A.colorSchemeSelector;
    let o = n;
    if (n === "class" && (o = ".%s"), n === "data" && (o = "[data-%s]"), (n == null ? void 0 : n.startsWith("data-")) && !n.includes("%s") && (o = `[${n}="%s"]`), A.defaultColorScheme === e) {
      if (e === "dark") {
        const i = {};
        return YB(A.cssVarPrefix).forEach((a) => {
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
  function qB(A, e) {
    e.forEach((t) => {
      A[t] || (A[t] = {});
    });
  }
  function O(A, e, t) {
    !A[e] && t && (A[e] = t);
  }
  function xr(A) {
    return typeof A != "string" || !A.startsWith("hsl") ? A : Ru(A);
  }
  function Je(A, e) {
    `${e}Channel` in A || (A[`${e}Channel`] = Sr(xr(A[e])));
  }
  function Ah(A) {
    return typeof A == "number" ? `${A}px` : typeof A == "string" || typeof A == "function" || Array.isArray(A) ? A : "8px";
  }
  const Re = (A) => {
    try {
      return A();
    } catch {
    }
  }, eh = (A = "mui") => QB(A);
  function Ii(A, e, t, r) {
    if (!e) return;
    e = e === true ? {} : e;
    const n = r === "dark" ? "dark" : "light";
    if (!t) {
      A[r] = XB({
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
        ...qu(n),
        ...e == null ? void 0 : e.opacity
      },
      overlays: (e == null ? void 0 : e.overlays) || Ad(n)
    }, i;
  }
  function th(A = {}, ...e) {
    const { colorSchemes: t = {
      light: true
    }, defaultColorScheme: r, disableCssColorScheme: n = false, cssVarPrefix: o = "mui", shouldSkipGeneratingVar: i = JB, colorSchemeSelector: a = t.light && t.dark ? "media" : void 0, rootSelector: l = ":root", ...s } = A, c = Object.keys(t)[0], d = r || (t.light && c !== "light" ? "light" : c), u = eh(o), { [d]: f, light: g, dark: B, ...Q } = t, m = {
      ...Q
    };
    let F = f;
    if ((d === "dark" && !("dark" in t) || d === "light" && !("light" in t)) && (F = true), !F) throw new Error(et(21, d));
    const w = Ii(m, F, s, d);
    g && !m.light && Ii(m, g, void 0, "light"), B && !m.dark && Ii(m, B, void 0, "dark");
    let v = {
      defaultColorScheme: d,
      ...w,
      cssVarPrefix: o,
      colorSchemeSelector: a,
      rootSelector: l,
      getCssVar: u,
      colorSchemes: m,
      font: {
        ...RB(w.typography),
        ...w.font
      },
      spacing: Ah(s.spacing)
    };
    Object.keys(v.colorSchemes).forEach((I) => {
      const p = v.colorSchemes[I].palette, T = (D) => {
        const K = D.split("-"), N = K[1], R = K[2];
        return u(D, p[N][R]);
      };
      if (p.mode === "light" && (O(p.common, "background", "#fff"), O(p.common, "onBackground", "#000")), p.mode === "dark" && (O(p.common, "background", "#000"), O(p.common, "onBackground", "#fff")), qB(p, [
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
      ]), p.mode === "light") {
        O(p.Alert, "errorColor", FA(p.error.light, 0.6)), O(p.Alert, "infoColor", FA(p.info.light, 0.6)), O(p.Alert, "successColor", FA(p.success.light, 0.6)), O(p.Alert, "warningColor", FA(p.warning.light, 0.6)), O(p.Alert, "errorFilledBg", T("palette-error-main")), O(p.Alert, "infoFilledBg", T("palette-info-main")), O(p.Alert, "successFilledBg", T("palette-success-main")), O(p.Alert, "warningFilledBg", T("palette-warning-main")), O(p.Alert, "errorFilledColor", Re(() => p.getContrastText(p.error.main))), O(p.Alert, "infoFilledColor", Re(() => p.getContrastText(p.info.main))), O(p.Alert, "successFilledColor", Re(() => p.getContrastText(p.success.main))), O(p.Alert, "warningFilledColor", Re(() => p.getContrastText(p.warning.main))), O(p.Alert, "errorStandardBg", UA(p.error.light, 0.9)), O(p.Alert, "infoStandardBg", UA(p.info.light, 0.9)), O(p.Alert, "successStandardBg", UA(p.success.light, 0.9)), O(p.Alert, "warningStandardBg", UA(p.warning.light, 0.9)), O(p.Alert, "errorIconColor", T("palette-error-main")), O(p.Alert, "infoIconColor", T("palette-info-main")), O(p.Alert, "successIconColor", T("palette-success-main")), O(p.Alert, "warningIconColor", T("palette-warning-main")), O(p.AppBar, "defaultBg", T("palette-grey-100")), O(p.Avatar, "defaultBg", T("palette-grey-400")), O(p.Button, "inheritContainedBg", T("palette-grey-300")), O(p.Button, "inheritContainedHoverBg", T("palette-grey-A100")), O(p.Chip, "defaultBorder", T("palette-grey-400")), O(p.Chip, "defaultAvatarColor", T("palette-grey-700")), O(p.Chip, "defaultIconColor", T("palette-grey-700")), O(p.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), O(p.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), O(p.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), O(p.LinearProgress, "primaryBg", UA(p.primary.main, 0.62)), O(p.LinearProgress, "secondaryBg", UA(p.secondary.main, 0.62)), O(p.LinearProgress, "errorBg", UA(p.error.main, 0.62)), O(p.LinearProgress, "infoBg", UA(p.info.main, 0.62)), O(p.LinearProgress, "successBg", UA(p.success.main, 0.62)), O(p.LinearProgress, "warningBg", UA(p.warning.main, 0.62)), O(p.Skeleton, "bg", `rgba(${T("palette-text-primaryChannel")} / 0.11)`), O(p.Slider, "primaryTrack", UA(p.primary.main, 0.62)), O(p.Slider, "secondaryTrack", UA(p.secondary.main, 0.62)), O(p.Slider, "errorTrack", UA(p.error.main, 0.62)), O(p.Slider, "infoTrack", UA(p.info.main, 0.62)), O(p.Slider, "successTrack", UA(p.success.main, 0.62)), O(p.Slider, "warningTrack", UA(p.warning.main, 0.62));
        const D = Bn(p.background.default, 0.8);
        O(p.SnackbarContent, "bg", D), O(p.SnackbarContent, "color", Re(() => p.getContrastText(D))), O(p.SpeedDialAction, "fabHoverBg", Bn(p.background.paper, 0.15)), O(p.StepConnector, "border", T("palette-grey-400")), O(p.StepContent, "border", T("palette-grey-400")), O(p.Switch, "defaultColor", T("palette-common-white")), O(p.Switch, "defaultDisabledColor", T("palette-grey-100")), O(p.Switch, "primaryDisabledColor", UA(p.primary.main, 0.62)), O(p.Switch, "secondaryDisabledColor", UA(p.secondary.main, 0.62)), O(p.Switch, "errorDisabledColor", UA(p.error.main, 0.62)), O(p.Switch, "infoDisabledColor", UA(p.info.main, 0.62)), O(p.Switch, "successDisabledColor", UA(p.success.main, 0.62)), O(p.Switch, "warningDisabledColor", UA(p.warning.main, 0.62)), O(p.TableCell, "border", UA(pn(p.divider, 1), 0.88)), O(p.Tooltip, "bg", pn(p.grey[700], 0.92));
      }
      if (p.mode === "dark") {
        O(p.Alert, "errorColor", UA(p.error.light, 0.6)), O(p.Alert, "infoColor", UA(p.info.light, 0.6)), O(p.Alert, "successColor", UA(p.success.light, 0.6)), O(p.Alert, "warningColor", UA(p.warning.light, 0.6)), O(p.Alert, "errorFilledBg", T("palette-error-dark")), O(p.Alert, "infoFilledBg", T("palette-info-dark")), O(p.Alert, "successFilledBg", T("palette-success-dark")), O(p.Alert, "warningFilledBg", T("palette-warning-dark")), O(p.Alert, "errorFilledColor", Re(() => p.getContrastText(p.error.dark))), O(p.Alert, "infoFilledColor", Re(() => p.getContrastText(p.info.dark))), O(p.Alert, "successFilledColor", Re(() => p.getContrastText(p.success.dark))), O(p.Alert, "warningFilledColor", Re(() => p.getContrastText(p.warning.dark))), O(p.Alert, "errorStandardBg", FA(p.error.light, 0.9)), O(p.Alert, "infoStandardBg", FA(p.info.light, 0.9)), O(p.Alert, "successStandardBg", FA(p.success.light, 0.9)), O(p.Alert, "warningStandardBg", FA(p.warning.light, 0.9)), O(p.Alert, "errorIconColor", T("palette-error-main")), O(p.Alert, "infoIconColor", T("palette-info-main")), O(p.Alert, "successIconColor", T("palette-success-main")), O(p.Alert, "warningIconColor", T("palette-warning-main")), O(p.AppBar, "defaultBg", T("palette-grey-900")), O(p.AppBar, "darkBg", T("palette-background-paper")), O(p.AppBar, "darkColor", T("palette-text-primary")), O(p.Avatar, "defaultBg", T("palette-grey-600")), O(p.Button, "inheritContainedBg", T("palette-grey-800")), O(p.Button, "inheritContainedHoverBg", T("palette-grey-700")), O(p.Chip, "defaultBorder", T("palette-grey-700")), O(p.Chip, "defaultAvatarColor", T("palette-grey-300")), O(p.Chip, "defaultIconColor", T("palette-grey-300")), O(p.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), O(p.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), O(p.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), O(p.LinearProgress, "primaryBg", FA(p.primary.main, 0.5)), O(p.LinearProgress, "secondaryBg", FA(p.secondary.main, 0.5)), O(p.LinearProgress, "errorBg", FA(p.error.main, 0.5)), O(p.LinearProgress, "infoBg", FA(p.info.main, 0.5)), O(p.LinearProgress, "successBg", FA(p.success.main, 0.5)), O(p.LinearProgress, "warningBg", FA(p.warning.main, 0.5)), O(p.Skeleton, "bg", `rgba(${T("palette-text-primaryChannel")} / 0.13)`), O(p.Slider, "primaryTrack", FA(p.primary.main, 0.5)), O(p.Slider, "secondaryTrack", FA(p.secondary.main, 0.5)), O(p.Slider, "errorTrack", FA(p.error.main, 0.5)), O(p.Slider, "infoTrack", FA(p.info.main, 0.5)), O(p.Slider, "successTrack", FA(p.success.main, 0.5)), O(p.Slider, "warningTrack", FA(p.warning.main, 0.5));
        const D = Bn(p.background.default, 0.98);
        O(p.SnackbarContent, "bg", D), O(p.SnackbarContent, "color", Re(() => p.getContrastText(D))), O(p.SpeedDialAction, "fabHoverBg", Bn(p.background.paper, 0.15)), O(p.StepConnector, "border", T("palette-grey-600")), O(p.StepContent, "border", T("palette-grey-600")), O(p.Switch, "defaultColor", T("palette-grey-300")), O(p.Switch, "defaultDisabledColor", T("palette-grey-600")), O(p.Switch, "primaryDisabledColor", FA(p.primary.main, 0.55)), O(p.Switch, "secondaryDisabledColor", FA(p.secondary.main, 0.55)), O(p.Switch, "errorDisabledColor", FA(p.error.main, 0.55)), O(p.Switch, "infoDisabledColor", FA(p.info.main, 0.55)), O(p.Switch, "successDisabledColor", FA(p.success.main, 0.55)), O(p.Switch, "warningDisabledColor", FA(p.warning.main, 0.55)), O(p.TableCell, "border", FA(pn(p.divider, 1), 0.68)), O(p.Tooltip, "bg", pn(p.grey[700], 0.92));
      }
      Je(p.background, "default"), Je(p.background, "paper"), Je(p.common, "background"), Je(p.common, "onBackground"), Je(p, "divider"), Object.keys(p).forEach((D) => {
        const K = p[D];
        D !== "tonalOffset" && K && typeof K == "object" && (K.main && O(p[D], "mainChannel", Sr(xr(K.main))), K.light && O(p[D], "lightChannel", Sr(xr(K.light))), K.dark && O(p[D], "darkChannel", Sr(xr(K.dark))), K.contrastText && O(p[D], "contrastTextChannel", Sr(xr(K.contrastText))), D === "text" && (Je(p[D], "primary"), Je(p[D], "secondary")), D === "action" && (K.active && Je(p[D], "active"), K.selected && Je(p[D], "selected")));
      });
    }), v = e.reduce((I, p) => ZA(I, p), v);
    const U = {
      prefix: o,
      disableCssColorScheme: n,
      shouldSkipGeneratingVar: i,
      getSelector: ZB(v)
    }, { vars: C, generateThemeVars: S, generateStyleSheets: x } = UB(v, U);
    return v.vars = C, Object.entries(v.colorSchemes[v.defaultColorScheme]).forEach(([I, p]) => {
      v[I] = p;
    }), v.generateThemeVars = S, v.generateStyleSheets = x, v.generateSpacing = function() {
      return Su(s.spacing, gs(this));
    }, v.getColorSchemeSelector = EB(a), v.spacing = v.generateSpacing(), v.shouldSkipGeneratingVar = i, v.unstable_sxConfig = {
      ...sn,
      ...s == null ? void 0 : s.unstable_sxConfig
    }, v.unstable_sx = function(p) {
      return mt({
        sx: p,
        theme: this
      });
    }, v.toRuntimeSource = Zu, v;
  }
  function Sl(A, e, t) {
    A.colorSchemes && t && (A.colorSchemes[e] = {
      ...t !== true && t,
      palette: Us({
        ...t === true ? {} : t.palette,
        mode: e
      })
    });
  }
  function si(A = {}, ...e) {
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
      }, Sl(d, "dark", s.dark)), d.palette.mode === "dark" && (d.colorSchemes.dark = {
        ...s.dark !== true && s.dark,
        palette: d.palette
      }, Sl(d, "light", s.light)), d;
    }
    return !t && !("light" in s) && a === "light" && (s.light = true), th({
      ...i,
      colorSchemes: s,
      defaultColorScheme: a,
      ...typeof r != "boolean" && r
    }, ...e);
  }
  const Es = si();
  Ss = function() {
    const A = ms(Es);
    return A[Ve] || A;
  };
  ed = function(A) {
    return A !== "ownerState" && A !== "theme" && A !== "sx" && A !== "as";
  };
  We = (A) => ed(A) && A !== "classes";
  lA = Np({
    themeId: Ve,
    defaultTheme: Es,
    rootShouldForwardProp: We
  });
  function rh({ theme: A, ...e }) {
    const t = Ve in A ? A[Ve] : void 0;
    return L.jsx(zu, {
      ...e,
      themeId: t ? Ve : void 0,
      theme: t || A
    });
  }
  const hn = {
    colorSchemeStorageKey: "mui-color-scheme",
    defaultLightColorScheme: "light",
    defaultDarkColorScheme: "dark",
    modeStorageKey: "mui-mode"
  }, { CssVarsProvider: nh } = yB({
    themeId: Ve,
    theme: () => si({
      cssVariables: true
    }),
    colorSchemeStorageKey: hn.colorSchemeStorageKey,
    modeStorageKey: hn.modeStorageKey,
    defaultColorScheme: {
      light: hn.defaultLightColorScheme,
      dark: hn.defaultDarkColorScheme
    },
    resolveTheme: (A) => {
      const e = {
        ...A,
        typography: Yu(A.palette, A.typography)
      };
      return e.unstable_sx = function(r) {
        return mt({
          sx: r,
          theme: this
        });
      }, e;
    }
  }), oh = nh;
  function td({ theme: A, ...e }) {
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
    return t ? L.jsx(rh, {
      theme: t,
      ...e
    }) : L.jsx(oh, {
      theme: A,
      ...e
    });
  }
  function ih(A) {
    return L.jsx(xu, {
      ...A,
      defaultTheme: Es,
      themeId: Ve
    });
  }
  function xs(A) {
    return function(t) {
      return L.jsx(ih, {
        styles: typeof A == "function" ? (r) => A({
          theme: r,
          ...t
        }) : A
      });
    };
  }
  function ah() {
    return Iu;
  }
  MA = gB;
  KA = function(A) {
    return dB(A);
  };
  function sh(A) {
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
  let lh, ch;
  lh = (A) => {
    const { color: e, fontSize: t, classes: r } = A, n = {
      root: [
        "root",
        e !== "inherit" && `color${mA(e)}`,
        `fontSize${mA(t)}`
      ]
    };
    return OA(n, sh, r);
  };
  ch = lA("svg", {
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
    }), { children: n, className: o, color: i = "inherit", component: a = "svg", fontSize: l = "medium", htmlColor: s, inheritViewBox: c = false, titleAccess: d, viewBox: u = "0 0 24 24", ...f } = r, g = h.isValidElement(n) && n.type === "svg", B = {
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
    const m = lh(B);
    return L.jsxs(ch, {
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
      ownerState: B,
      children: [
        g ? n.props.children : n,
        d ? L.jsx("title", {
          children: d
        }) : null
      ]
    });
  });
  Ba.muiName = "SvgIcon";
  rd = function(A, e) {
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
  uh = function(A, e) {
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
  function nd(A, e) {
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
  function od(A, e) {
    A.prototype = Object.create(e.prototype), A.prototype.constructor = A, ha(A, e);
  }
  const { initPromise: dh } = Ff, fh = dh.then((A) => A.loadShare("react-dom", {
    customShareInfo: {
      shareConfig: {
        singleton: true,
        strictVersion: false,
        requiredVersion: "*"
      }
    }
  })), gh = await fh.then((A) => A());
  var Is = gh;
  const mn = Za(Is), xl = {
    disabled: false
  }, so = H.createContext(null);
  var ph = function(e) {
    return e.scrollTop;
  }, Ir = "unmounted", Ft = "exited", Ut = "entering", Zt = "entered", ma = "exiting", ze = (function(A) {
    od(e, A);
    function e(r, n) {
      var o;
      o = A.call(this, r, n) || this;
      var i = n, a = i && !i.isMounting ? r.enter : r.appear, l;
      return o.appearStatus = null, r.in ? a ? (l = Ft, o.appearStatus = Ut) : l = Zt : r.unmountOnExit || r.mountOnEnter ? l = Ir : l = Ft, o.state = {
        status: l
      }, o.nextCallback = null, o;
    }
    e.getDerivedStateFromProps = function(n, o) {
      var i = n.in;
      return i && o.status === Ir ? {
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
        this.props.in ? i !== Ut && i !== Zt && (o = Ut) : (i === Ut || i === Zt) && (o = ma);
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
          var i = this.props.nodeRef ? this.props.nodeRef.current : mn.findDOMNode(this);
          i && ph(i);
        }
        this.performEnter(n);
      } else this.performExit();
      else this.props.unmountOnExit && this.state.status === Ft && this.setState({
        status: Ir
      });
    }, t.performEnter = function(n) {
      var o = this, i = this.props.enter, a = this.context ? this.context.isMounting : n, l = this.props.nodeRef ? [
        a
      ] : [
        mn.findDOMNode(this),
        a
      ], s = l[0], c = l[1], d = this.getTimeouts(), u = a ? d.appear : d.enter;
      if (!n && !i || xl.disabled) {
        this.safeSetState({
          status: Zt
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
            status: Zt
          }, function() {
            o.props.onEntered(s, c);
          });
        });
      });
    }, t.performExit = function() {
      var n = this, o = this.props.exit, i = this.getTimeouts(), a = this.props.nodeRef ? void 0 : mn.findDOMNode(this);
      if (!o || xl.disabled) {
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
      var i = this.props.nodeRef ? this.props.nodeRef.current : mn.findDOMNode(this), a = n == null && !this.props.addEndListener;
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
      if (n === Ir) return null;
      var o = this.props, i = o.children;
      o.in, o.mountOnEnter, o.unmountOnExit, o.appear, o.enter, o.exit, o.timeout, o.addEndListener, o.onEnter, o.onEntering, o.onEntered, o.onExit, o.onExiting, o.onExited, o.nodeRef;
      var a = nd(o, [
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
      return H.createElement(so.Provider, {
        value: null
      }, typeof i == "function" ? i(n, a) : H.cloneElement(H.Children.only(i), a));
    }, e;
  })(H.Component);
  ze.contextType = so;
  ze.propTypes = {};
  function Vt() {
  }
  ze.defaultProps = {
    in: false,
    mountOnEnter: false,
    unmountOnExit: false,
    appear: false,
    enter: true,
    exit: true,
    onEnter: Vt,
    onEntering: Vt,
    onEntered: Vt,
    onExit: Vt,
    onExiting: Vt,
    onExited: Vt
  };
  ze.UNMOUNTED = Ir;
  ze.EXITED = Ft;
  ze.ENTERING = Ut;
  ze.ENTERED = Zt;
  ze.EXITING = ma;
  function Bh(A) {
    if (A === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return A;
  }
  function Hs(A, e) {
    var t = function(o) {
      return e && h.isValidElement(o) ? e(o) : o;
    }, r = /* @__PURE__ */ Object.create(null);
    return A && h.Children.map(A, function(n) {
      return n;
    }).forEach(function(n) {
      r[n.key] = t(n);
    }), r;
  }
  function hh(A, e) {
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
  function mh(A, e) {
    return Hs(A.children, function(t) {
      return h.cloneElement(t, {
        onExited: e.bind(null, t),
        in: true,
        appear: Tt(t, "appear", A),
        enter: Tt(t, "enter", A),
        exit: Tt(t, "exit", A)
      });
    });
  }
  function Ch(A, e, t) {
    var r = Hs(A.children), n = hh(e, r);
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
  var wh = Object.values || function(A) {
    return Object.keys(A).map(function(e) {
      return A[e];
    });
  }, vh = {
    component: "div",
    childFactory: function(e) {
      return e;
    }
  }, Ts = (function(A) {
    od(e, A);
    function e(r, n) {
      var o;
      o = A.call(this, r, n) || this;
      var i = o.handleExited.bind(Bh(o));
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
        children: l ? mh(n, a) : Ch(n, i, a),
        firstRender: false
      };
    }, t.handleExited = function(n, o) {
      var i = Hs(this.props.children);
      n.key in i || (n.props.onExited && n.props.onExited(o), this.mounted && this.setState(function(a) {
        var l = oo({}, a.children);
        return delete l[n.key], {
          children: l
        };
      }));
    }, t.render = function() {
      var n = this.props, o = n.component, i = n.childFactory, a = nd(n, [
        "component",
        "childFactory"
      ]), l = this.state.contextValue, s = wh(this.state.children).map(i);
      return delete a.appear, delete a.enter, delete a.exit, o === null ? H.createElement(so.Provider, {
        value: l
      }, s) : H.createElement(so.Provider, {
        value: l
      }, H.createElement(o, a, s));
    }, e;
  })(H.Component);
  Ts.propTypes = {};
  Ts.defaultProps = vh;
  const id = (A) => A.scrollTop;
  function lo(A, e) {
    const { timeout: t, easing: r, style: n = {} } = A;
    return {
      duration: n.transitionDuration ?? (typeof t == "number" ? t : t[e.mode] || 0),
      easing: n.transitionTimingFunction ?? (typeof r == "object" ? r[e.mode] : r),
      delay: n.transitionDelay
    };
  }
  function yh(A) {
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
  let Qh, bh;
  Qh = (A) => {
    const { square: e, elevation: t, variant: r, classes: n } = A, o = {
      root: [
        "root",
        r,
        !e && "rounded",
        r === "elevation" && `elevation${t}`
      ]
    };
    return OA(o, yh, n);
  };
  bh = lA("div", {
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
    }), n = Ss(), { className: o, component: i = "div", elevation: a = 1, square: l = false, variant: s = "elevation", ...c } = r, d = {
      ...r,
      component: i,
      elevation: a,
      square: l,
      variant: s
    }, u = Qh(d);
    return L.jsx(bh, {
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
            "--Paper-overlay": `linear-gradient(${sr("#fff", pa(a))}, ${sr("#fff", pa(a))})`
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
    }, ...u } = o, f = c[A] || r, g = Gu(d[A], n), { props: { component: B, ...Q }, internalRef: m } = Nu({
      className: t,
      ...l,
      externalForwardedProps: A === "root" ? u : void 0,
      externalSlotProps: g
    }), F = Be(m, g == null ? void 0 : g.ref, e.ref), w = A === "root" ? B || s : B, v = Pu(f, {
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
  class co {
    static create() {
      return new co();
    }
    static use() {
      const e = Ku(co.create).current, [t, r] = h.useState(false);
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
      return this.mounted || (this.mounted = Uh(), this.shouldMount = true, this.setShouldMount(this.shouldMount)), this.mounted;
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
  function Fh() {
    return co.use();
  }
  function Uh() {
    let A, e;
    const t = new Promise((r, n) => {
      A = r, e = n;
    });
    return t.resolve = A, t.reject = e, t;
  }
  function Eh(A) {
    const { className: e, classes: t, pulsate: r = false, rippleX: n, rippleY: o, rippleSize: i, in: a, onExited: l, timeout: s } = A, [c, d] = h.useState(false), u = pA(e, t.ripple, t.rippleVisible, r && t.ripplePulsate), f = {
      width: i,
      height: i,
      top: -(i / 2) + o,
      left: -(i / 2) + n
    }, g = pA(t.child, c && t.childLeaving, r && t.childPulsate);
    return !a && !c && d(true), h.useEffect(() => {
      if (!a && l != null) {
        const B = setTimeout(l, s);
        return () => {
          clearTimeout(B);
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
  ]), wa = 550, Sh = 80, xh = nn`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, Ih = nn`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, Hh = nn`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, Th = lA("span", {
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
  }), Lh = lA(Eh, {
    name: "MuiTouchRipple",
    slot: "Ripple"
  })`
  opacity: 0;
  position: absolute;

  &.${Qe.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${xh};
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
    animation-name: ${Ih};
    animation-duration: ${wa}ms;
    animation-timing-function: ${({ theme: A }) => A.transitions.easing.easeInOut};
  }

  & .${Qe.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Hh};
    animation-duration: 2500ms;
    animation-timing-function: ${({ theme: A }) => A.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, kh = h.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiTouchRipple"
    }), { center: n = false, classes: o = {}, className: i, ...a } = r, [l, s] = h.useState([]), c = h.useRef(0), d = h.useRef(null);
    h.useEffect(() => {
      d.current && (d.current(), d.current = null);
    }, [
      l
    ]);
    const u = h.useRef(false), f = Mu(), g = h.useRef(null), B = h.useRef(null), Q = h.useCallback((v) => {
      const { pulsate: U, rippleX: C, rippleY: S, rippleSize: x, cb: I } = v;
      s((p) => [
        ...p,
        L.jsx(Lh, {
          classes: {
            ripple: pA(o.ripple, Qe.ripple),
            rippleVisible: pA(o.rippleVisible, Qe.rippleVisible),
            ripplePulsate: pA(o.ripplePulsate, Qe.ripplePulsate),
            child: pA(o.child, Qe.child),
            childLeaving: pA(o.childLeaving, Qe.childLeaving),
            childPulsate: pA(o.childPulsate, Qe.childPulsate)
          },
          timeout: wa,
          pulsate: U,
          rippleX: C,
          rippleY: S,
          rippleSize: x
        }, c.current)
      ]), c.current += 1, d.current = I;
    }, [
      o
    ]), m = h.useCallback((v = {}, U = {}, C = () => {
    }) => {
      const { pulsate: S = false, center: x = n || U.pulsate, fakeElement: I = false } = U;
      if ((v == null ? void 0 : v.type) === "mousedown" && u.current) {
        u.current = false;
        return;
      }
      (v == null ? void 0 : v.type) === "touchstart" && (u.current = true);
      const p = I ? null : B.current, T = p ? p.getBoundingClientRect() : {
        width: 0,
        height: 0,
        left: 0,
        top: 0
      };
      let D, K, N;
      if (x || v === void 0 || v.clientX === 0 && v.clientY === 0 || !v.clientX && !v.touches) D = Math.round(T.width / 2), K = Math.round(T.height / 2);
      else {
        const { clientX: R, clientY: M } = v.touches && v.touches.length > 0 ? v.touches[0] : v;
        D = Math.round(R - T.left), K = Math.round(M - T.top);
      }
      if (x) N = Math.sqrt((2 * T.width ** 2 + T.height ** 2) / 3), N % 2 === 0 && (N += 1);
      else {
        const R = Math.max(Math.abs((p ? p.clientWidth : 0) - D), D) * 2 + 2, M = Math.max(Math.abs((p ? p.clientHeight : 0) - K), K) * 2 + 2;
        N = Math.sqrt(R ** 2 + M ** 2);
      }
      (v == null ? void 0 : v.touches) ? g.current === null && (g.current = () => {
        Q({
          pulsate: S,
          rippleX: D,
          rippleY: K,
          rippleSize: N,
          cb: C
        });
      }, f.start(Sh, () => {
        g.current && (g.current(), g.current = null);
      })) : Q({
        pulsate: S,
        rippleX: D,
        rippleY: K,
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
    ]), w = h.useCallback((v, U) => {
      if (f.clear(), (v == null ? void 0 : v.type) === "touchend" && g.current) {
        g.current(), g.current = null, f.start(0, () => {
          w(v, U);
        });
        return;
      }
      g.current = null, s((C) => C.length > 0 ? C.slice(1) : C), d.current = U;
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
    ]), L.jsx(Th, {
      className: pA(Qe.root, o.root, i),
      ref: B,
      ...a,
      children: L.jsx(Ts, {
        component: null,
        exit: true,
        children: l
      })
    });
  });
  function Rh(A) {
    return RA("MuiButtonBase", A);
  }
  let Oh, Kh, Mh;
  Oh = HA("MuiButtonBase", [
    "root",
    "disabled",
    "focusVisible"
  ]);
  Kh = (A) => {
    const { disabled: e, focusVisible: t, focusVisibleClassName: r, classes: n } = A, i = OA({
      root: [
        "root",
        e && "disabled",
        t && "focusVisible"
      ]
    }, Rh, n);
    return t && r && (i.root += ` ${r}`), i;
  };
  Mh = lA("button", {
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
    [`&.${Oh.disabled}`]: {
      pointerEvents: "none",
      cursor: "default"
    },
    "@media print": {
      colorAdjust: "exact"
    }
  });
  Dh = h.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiButtonBase"
    }), { action: n, centerRipple: o = false, children: i, className: a, component: l = "button", disabled: s = false, disableRipple: c = false, disableTouchRipple: d = false, focusRipple: u = false, focusVisibleClassName: f, LinkComponent: g = "a", onBlur: B, onClick: Q, onContextMenu: m, onDragLeave: F, onFocus: w, onFocusVisible: v, onKeyDown: U, onKeyUp: C, onMouseDown: S, onMouseLeave: x, onMouseUp: I, onTouchEnd: p, onTouchMove: T, onTouchStart: D, tabIndex: K = 0, TouchRippleProps: N, touchRippleRef: R, type: M, ...z } = r, rA = h.useRef(null), P = Fh(), X = Be(P.ref, R), [j, nA] = h.useState(false);
    s && j && nA(false), h.useImperativeHandle(n, () => ({
      focusVisible: () => {
        nA(true), rA.current.focus();
      }
    }), []);
    const k = P.shouldMount && !c && !s;
    h.useEffect(() => {
      j && u && !c && P.pulsate();
    }, [
      c,
      u,
      j,
      P
    ]);
    const $ = Ye(P, "start", S, d), V = Ye(P, "stop", m, d), Y = Ye(P, "stop", F, d), dA = Ye(P, "stop", I, d), iA = Ye(P, "stop", (AA) => {
      j && AA.preventDefault(), x && x(AA);
    }, d), eA = Ye(P, "start", D, d), J = Ye(P, "stop", p, d), oA = Ye(P, "stop", T, d), aA = Ye(P, "stop", (AA) => {
      Bl(AA.target) || nA(false), B && B(AA);
    }, false), y = kt((AA) => {
      rA.current || (rA.current = AA.currentTarget), Bl(AA.target) && (nA(true), v && v(AA)), w && w(AA);
    }), E = () => {
      const AA = rA.current;
      return l && l !== "button" && !(AA.tagName === "A" && AA.href);
    }, b = kt((AA) => {
      u && !AA.repeat && j && AA.key === " " && P.stop(AA, () => {
        P.start(AA);
      }), AA.target === AA.currentTarget && E() && AA.key === " " && AA.preventDefault(), U && U(AA), AA.target === AA.currentTarget && E() && AA.key === "Enter" && !s && (AA.preventDefault(), Q && Q(AA));
    }), _ = kt((AA) => {
      u && AA.key === " " && j && !AA.defaultPrevented && P.stop(AA, () => {
        P.pulsate(AA);
      }), C && C(AA), Q && AA.target === AA.currentTarget && E() && AA.key === " " && !AA.defaultPrevented && Q(AA);
    });
    let W = l;
    W === "button" && (z.href || z.to) && (W = g);
    const G = {};
    W === "button" ? (G.type = M === void 0 ? "button" : M, G.disabled = s) : (!z.href && !z.to && (G.role = "button"), s && (G["aria-disabled"] = s));
    const sA = Be(t, rA), cA = {
      ...r,
      centerRipple: o,
      component: l,
      disabled: s,
      disableRipple: c,
      disableTouchRipple: d,
      focusRipple: u,
      tabIndex: K,
      focusVisible: j
    }, fA = Kh(cA);
    return L.jsxs(Mh, {
      as: W,
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
      onTouchStart: eA,
      ref: sA,
      tabIndex: s ? -1 : K,
      type: M,
      ...G,
      ...z,
      children: [
        i,
        k ? L.jsx(kh, {
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
  function Ph(A) {
    return typeof A.main == "string";
  }
  function _h(A, e = []) {
    if (!Ph(A)) return false;
    for (const t of e) if (!A.hasOwnProperty(t) || typeof A[t] != "string") return false;
    return true;
  }
  wt = function(A = []) {
    return ([, e]) => e && _h(e, A);
  };
  function Nh(A) {
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
  let at, va, ya, Gh, Vh, $h, Wh, zh, jh;
  at = 44;
  va = nn`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;
  ya = nn`
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
  Gh = typeof va != "string" ? ls`
        animation: ${va} 1.4s linear infinite;
      ` : null;
  Vh = typeof ya != "string" ? ls`
        animation: ${ya} 1.4s ease-in-out infinite;
      ` : null;
  $h = (A) => {
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
    return OA(o, Nh, e);
  };
  Wh = lA("span", {
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
        style: Gh || {
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
  zh = lA("svg", {
    name: "MuiCircularProgress",
    slot: "Svg",
    overridesResolver: (A, e) => e.svg
  })({
    display: "block"
  });
  jh = lA("circle", {
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
        style: Vh || {
          animation: `${ya} 1.4s ease-in-out infinite`
        }
      }
    ]
  })));
  Xh = h.forwardRef(function(e, t) {
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
    }, g = $h(f), B = {}, Q = {}, m = {};
    if (d === "determinate") {
      const F = 2 * Math.PI * ((at - s) / 2);
      B.strokeDasharray = F.toFixed(3), m["aria-valuenow"] = Math.round(c), B.strokeDashoffset = `${((100 - c) / 100 * F).toFixed(3)}px`, Q.transform = "rotate(-90deg)";
    }
    return L.jsx(Wh, {
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
      children: L.jsx(zh, {
        className: g.svg,
        ownerState: f,
        viewBox: `${at / 2} ${at / 2} ${at} ${at}`,
        children: L.jsx(jh, {
          className: g.circle,
          style: B,
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
  function Jh(A) {
    return RA("MuiIconButton", A);
  }
  let Il, Yh, Zh, qh;
  Il = HA("MuiIconButton", [
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
  Yh = (A) => {
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
    return OA(a, Jh, e);
  };
  Zh = lA(Dh, {
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
          "--IconButton-hoverBg": A.vars ? `rgba(${A.vars.palette.action.activeChannel} / ${A.vars.palette.action.hoverOpacity})` : sr(A.palette.action.active, A.palette.action.hoverOpacity),
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
          "--IconButton-hoverBg": A.vars ? `rgba(${(A.vars || A).palette[e].mainChannel} / ${A.vars.palette.action.hoverOpacity})` : sr((A.vars || A).palette[e].main, A.palette.action.hoverOpacity)
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
    [`&.${Il.disabled}`]: {
      backgroundColor: "transparent",
      color: (A.vars || A).palette.action.disabled
    },
    [`&.${Il.loading}`]: {
      color: "transparent"
    }
  })));
  qh = lA("span", {
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
  A0 = h.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiIconButton"
    }), { edge: n = false, children: o, className: i, color: a = "default", disabled: l = false, disableFocusRipple: s = false, size: c = "medium", id: d, loading: u = null, loadingIndicator: f, ...g } = r, B = ai(d), Q = f ?? L.jsx(Xh, {
      "aria-labelledby": B,
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
    }, F = Yh(m);
    return L.jsxs(Zh, {
      id: u ? B : d,
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
          children: L.jsx(qh, {
            className: F.loadingIndicator,
            ownerState: m,
            children: u && Q
          })
        }),
        o
      ]
    });
  });
  function e0(A) {
    return RA("MuiTypography", A);
  }
  let t0, r0, n0, o0, Hl;
  DU = HA("MuiTypography", [
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
  t0 = {
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
  r0 = ah();
  n0 = (A) => {
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
    return OA(a, e0, i);
  };
  o0 = lA("span", {
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
  Hl = {
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
  Zn = h.forwardRef(function(e, t) {
    const { color: r, ...n } = KA({
      props: e,
      name: "MuiTypography"
    }), o = !t0[r], i = r0({
      ...n,
      ...o && {
        color: r
      }
    }), { align: a = "inherit", className: l, component: s, gutterBottom: c = false, noWrap: d = false, paragraph: u = false, variant: f = "body1", variantMapping: g = Hl, ...B } = i, Q = {
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
    }, m = s || (u ? "p" : g[f] || Hl[f]) || "span", F = n0(Q);
    return L.jsx(o0, {
      as: m,
      ref: t,
      className: pA(F.root, l),
      ...B,
      ownerState: Q,
      style: {
        ...a !== "inherit" && {
          "--Typography-textAlign": a
        },
        ...B.style
      }
    });
  });
  function i0(A) {
    return typeof A == "function" ? A() : A;
  }
  const a0 = h.forwardRef(function(e, t) {
    const { children: r, container: n, disablePortal: o = false } = e, [i, a] = h.useState(null), l = Be(h.isValidElement(r) ? ln(r) : null, t);
    if (rt(() => {
      o || a(i0(n) || document.body);
    }, [
      n,
      o
    ]), rt(() => {
      if (i && !o) return ul(t, i), () => {
        ul(t, null);
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
    return i && Is.createPortal(r, i);
  });
  function Cn(A) {
    return parseInt(A, 10) || 0;
  }
  const s0 = {
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
  function l0(A) {
    for (const e in A) return false;
    return true;
  }
  function Tl(A) {
    return l0(A) || A.outerHeightStyle === 0 && !A.overflowing;
  }
  const c0 = h.forwardRef(function(e, t) {
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
      const S = C.boxSizing, x = Cn(C.paddingBottom) + Cn(C.paddingTop), I = Cn(C.borderBottomWidth) + Cn(C.borderTopWidth), p = v.scrollHeight;
      v.value = "x";
      const T = v.scrollHeight;
      let D = p;
      o && (D = Math.max(Number(o) * T, D)), n && (D = Math.min(Number(n) * T, D)), D = Math.max(D, T);
      const K = D + (S === "border-box" ? x + I : 0), N = Math.abs(D - p) <= 1;
      return {
        outerHeightStyle: K,
        overflowing: N
      };
    }, [
      n,
      o,
      e.placeholder
    ]), B = kt(() => {
      const w = c.current, v = g();
      if (!w || !v || Tl(v)) return false;
      const U = v.outerHeightStyle;
      return u.current != null && u.current !== U;
    }), Q = h.useCallback(() => {
      const w = c.current, v = g();
      if (!w || !v || Tl(v)) return;
      const U = v.outerHeightStyle;
      u.current !== U && (u.current = U, w.style.height = `${U}px`), w.style.overflow = v.overflowing ? "hidden" : "";
    }, [
      g
    ]), m = h.useRef(-1);
    rt(() => {
      const w = Ou(Q), v = c == null ? void 0 : c.current;
      if (!v) return;
      const U = nt(v);
      U.addEventListener("resize", w);
      let C;
      return typeof ResizeObserver < "u" && (C = new ResizeObserver(() => {
        B() && (C.unobserve(v), cancelAnimationFrame(m.current), Q(), m.current = requestAnimationFrame(() => {
          C.observe(v);
        }));
      }), C.observe(v)), () => {
        w.clear(), cancelAnimationFrame(m.current), U.removeEventListener("resize", w), C && C.disconnect();
      };
    }, [
      g,
      Q,
      B
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
            ...s0.shadow,
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
  gr = function({ props: A, states: e, muiFormControl: t }) {
    return e.reduce((r, n) => (r[n] = A[n], t && typeof A[n] > "u" && (r[n] = t[n]), r), {});
  };
  const Ls = h.createContext(void 0);
  pr = function() {
    return h.useContext(Ls);
  };
  function Ll(A) {
    return A != null && !(Array.isArray(A) && A.length === 0);
  }
  function uo(A, e = false) {
    return A && (Ll(A.value) && A.value !== "" || e && Ll(A.defaultValue) && A.defaultValue !== "");
  }
  function u0(A) {
    return A.startAdornment;
  }
  function d0(A) {
    return RA("MuiInputBase", A);
  }
  const lr = HA("MuiInputBase", [
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
  var kl;
  const li = (A, e) => {
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
  }, ci = (A, e) => {
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
  }, f0 = (A) => {
    const { classes: e, color: t, disabled: r, error: n, endAdornment: o, focused: i, formControl: a, fullWidth: l, hiddenLabel: s, multiline: c, readOnly: d, size: u, startAdornment: f, type: g } = A, B = {
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
    return OA(B, d0, e);
  }, ui = lA("div", {
    name: "MuiInputBase",
    slot: "Root",
    overridesResolver: li
  })(MA(({ theme: A }) => ({
    ...A.typography.body1,
    color: (A.vars || A).palette.text.primary,
    lineHeight: "1.4375em",
    boxSizing: "border-box",
    position: "relative",
    cursor: "text",
    display: "inline-flex",
    alignItems: "center",
    [`&.${lr.disabled}`]: {
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
  }))), di = lA("input", {
    name: "MuiInputBase",
    slot: "Input",
    overridesResolver: ci
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
      [`label[data-shrink=false] + .${lr.formControl} &`]: {
        "&::-webkit-input-placeholder": r,
        "&::-moz-placeholder": r,
        "&::-ms-input-placeholder": r,
        "&:focus::-webkit-input-placeholder": n,
        "&:focus::-moz-placeholder": n,
        "&:focus::-ms-input-placeholder": n
      },
      [`&.${lr.disabled}`]: {
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
  })), Rl = xs({
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
  }), ks = h.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiInputBase"
    }), { "aria-describedby": n, autoComplete: o, autoFocus: i, className: a, color: l, components: s = {}, componentsProps: c = {}, defaultValue: d, disabled: u, disableInjectingGlobalStyles: f, endAdornment: g, error: B, fullWidth: Q = false, id: m, inputComponent: F = "input", inputProps: w = {}, inputRef: v, margin: U, maxRows: C, minRows: S, multiline: x = false, name: I, onBlur: p, onChange: T, onClick: D, onFocus: K, onKeyDown: N, onKeyUp: R, placeholder: M, readOnly: z, renderSuffix: rA, rows: P, size: X, slotProps: j = {}, slots: nA = {}, startAdornment: k, type: $ = "text", value: V, ...Y } = r, dA = w.value != null ? w.value : V, { current: iA } = h.useRef(dA != null), eA = h.useRef(), J = h.useCallback((TA) => {
    }, []), oA = Be(eA, v, w.ref, J), [aA, y] = h.useState(false), E = pr(), b = gr({
      props: r,
      muiFormControl: E,
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
    b.focused = E ? E.focused : aA, h.useEffect(() => {
      !E && u && aA && (y(false), p && p());
    }, [
      E,
      u,
      aA,
      p
    ]);
    const _ = E && E.onFilled, W = E && E.onEmpty, G = h.useCallback((TA) => {
      uo(TA) ? _ && _() : W && W();
    }, [
      _,
      W
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
      K && K(TA), w.onFocus && w.onFocus(TA), E && E.onFocus ? E.onFocus(TA) : y(true);
    }, cA = (TA) => {
      p && p(TA), w.onBlur && w.onBlur(TA), E && E.onBlur ? E.onBlur(TA) : y(false);
    }, fA = (TA, ...Kt) => {
      if (!iA) {
        const mr = TA.target || eA.current;
        if (mr == null) throw new Error(et(1));
        G({
          value: mr.value
        });
      }
      w.onChange && w.onChange(TA, ...Kt), T && T(TA, ...Kt);
    };
    h.useEffect(() => {
      G(eA.current);
    }, []);
    const AA = (TA) => {
      eA.current && TA.currentTarget === TA.target && eA.current.focus(), D && D(TA);
    };
    let Ae = F, gA = w;
    x && Ae === "input" && (P ? gA = {
      type: void 0,
      minRows: P,
      maxRows: P,
      ...gA
    } : gA = {
      type: void 0,
      maxRows: C,
      minRows: S,
      ...gA
    }, Ae = c0);
    const _A = (TA) => {
      G(TA.animationName === "mui-auto-fill-cancel" ? eA.current : {
        value: "x"
      });
    };
    h.useEffect(() => {
      E && E.setAdornedStart(!!k);
    }, [
      E,
      k
    ]);
    const zA = {
      ...r,
      color: b.color || "primary",
      disabled: b.disabled,
      endAdornment: g,
      error: b.error,
      focused: b.focused,
      formControl: E,
      fullWidth: Q,
      hiddenLabel: b.hiddenLabel,
      multiline: x,
      size: b.size,
      startAdornment: k,
      type: $
    }, ie = f0(zA), XA = nA.root || s.Root || ui, it = j.root || c.root || {}, yt = nA.input || s.Input || di;
    return gA = {
      ...gA,
      ...j.input ?? c.input
    }, L.jsxs(h.Fragment, {
      children: [
        !f && typeof Rl == "function" && (kl || (kl = L.jsx(Rl, {}))),
        L.jsxs(XA, {
          ...it,
          ref: t,
          onClick: AA,
          ...Y,
          ...!Qa(XA) && {
            ownerState: {
              ...zA,
              ...it.ownerState
            }
          },
          className: pA(ie.root, it.className, a, z && "MuiInputBase-readOnly"),
          children: [
            k,
            L.jsx(Ls.Provider, {
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
                name: I,
                placeholder: M,
                readOnly: z,
                required: b.required,
                rows: P,
                value: dA,
                onKeyDown: N,
                onKeyUp: R,
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
                className: pA(ie.input, gA.className, z && "MuiInputBase-readOnly"),
                onBlur: cA,
                onChange: fA,
                onFocus: sA
              })
            }),
            g,
            rA ? rA({
              ...b,
              startAdornment: k
            }) : null
          ]
        })
      ]
    });
  });
  function g0(A) {
    return RA("MuiInput", A);
  }
  const vr = {
    ...lr,
    ...HA("MuiInput", [
      "root",
      "underline",
      "input"
    ])
  };
  function p0(A) {
    return RA("MuiOutlinedInput", A);
  }
  const Oe = {
    ...lr,
    ...HA("MuiOutlinedInput", [
      "root",
      "notchedOutline",
      "input"
    ])
  };
  function B0(A) {
    return RA("MuiFilledInput", A);
  }
  let Qt, h0, m0;
  Qt = {
    ...lr,
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
  h0 = rd(L.jsx("path", {
    d: "M7 10l5 5 5-5z"
  }), "ArrowDropDown");
  m0 = {
    entering: {
      opacity: 1
    },
    entered: {
      opacity: 1
    }
  };
  C0 = h.forwardRef(function(e, t) {
    const r = Ss(), n = {
      enter: r.transitions.duration.enteringScreen,
      exit: r.transitions.duration.leavingScreen
    }, { addEndListener: o, appear: i = true, children: a, easing: l, in: s, onEnter: c, onEntered: d, onEntering: u, onExit: f, onExited: g, onExiting: B, style: Q, timeout: m = n, TransitionComponent: F = ze, ...w } = e, v = h.useRef(null), U = Be(v, ln(a), t), C = (N) => (R) => {
      if (N) {
        const M = v.current;
        R === void 0 ? N(M) : N(M, R);
      }
    }, S = C(u), x = C((N, R) => {
      id(N);
      const M = lo({
        style: Q,
        timeout: m,
        easing: l
      }, {
        mode: "enter"
      });
      N.style.webkitTransition = r.transitions.create("opacity", M), N.style.transition = r.transitions.create("opacity", M), c && c(N, R);
    }), I = C(d), p = C(B), T = C((N) => {
      const R = lo({
        style: Q,
        timeout: m,
        easing: l
      }, {
        mode: "exit"
      });
      N.style.webkitTransition = r.transitions.create("opacity", R), N.style.transition = r.transitions.create("opacity", R), f && f(N);
    }), D = C(g), K = (N) => {
      o && o(v.current, N);
    };
    return L.jsx(F, {
      appear: i,
      in: s,
      nodeRef: v,
      onEnter: x,
      onEntered: I,
      onEntering: S,
      onExit: T,
      onExited: D,
      onExiting: p,
      addEndListener: K,
      timeout: m,
      ...w,
      children: (N, { ownerState: R, ...M }) => h.cloneElement(a, {
        style: {
          opacity: 0,
          visibility: N === "exited" && !s ? "hidden" : void 0,
          ...m0[N],
          ...Q,
          ...a.props.style
        },
        ref: U,
        ...M
      })
    });
  });
  function w0(A) {
    return RA("MuiBackdrop", A);
  }
  HA("MuiBackdrop", [
    "root",
    "invisible"
  ]);
  let v0, y0, b0, F0, ba, U0, E0, ad, qn, S0, x0;
  v0 = (A) => {
    const { classes: e, invisible: t } = A;
    return OA({
      root: [
        "root",
        t && "invisible"
      ]
    }, w0, e);
  };
  y0 = lA("div", {
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
  Q0 = h.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiBackdrop"
    }), { children: n, className: o, component: i = "div", invisible: a = false, open: l, components: s = {}, componentsProps: c = {}, slotProps: d = {}, slots: u = {}, TransitionComponent: f, transitionDuration: g, ...B } = r, Q = {
      ...r,
      component: i,
      invisible: a
    }, m = v0(Q), F = {
      transition: f,
      root: s.Root,
      ...u
    }, w = {
      ...c,
      ...d
    }, v = {
      slots: F,
      slotProps: w
    }, [U, C] = ce("root", {
      elementType: y0,
      externalForwardedProps: v,
      className: pA(m.root, o),
      ownerState: Q
    }), [S, x] = ce("transition", {
      elementType: C0,
      externalForwardedProps: v,
      ownerState: Q
    });
    return L.jsx(S, {
      in: l,
      timeout: g,
      ...B,
      ...x,
      children: L.jsx(U, {
        "aria-hidden": true,
        ...C,
        classes: m,
        ref: t,
        children: n
      })
    });
  });
  b0 = HA("MuiBox", [
    "root"
  ]);
  F0 = si();
  Te = Kp({
    themeId: Ve,
    defaultTheme: F0,
    defaultClassName: b0.root,
    generateClassName: Hu.generate
  });
  ba = typeof xs({}) == "function";
  U0 = (A, e) => ({
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    boxSizing: "border-box",
    WebkitTextSizeAdjust: "100%",
    ...e && !A.vars && {
      colorScheme: A.palette.mode
    }
  });
  E0 = (A) => ({
    color: (A.vars || A).palette.text.primary,
    ...A.typography.body1,
    backgroundColor: (A.vars || A).palette.background.default,
    "@media print": {
      backgroundColor: (A.vars || A).palette.common.white
    }
  });
  ad = (A, e = false) => {
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
      html: U0(A, e),
      "*, *::before, *::after": {
        boxSizing: "inherit"
      },
      "strong, b": {
        fontWeight: A.typography.fontWeightBold
      },
      body: {
        margin: 0,
        ...E0(A),
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
  qn = "mui-ecs";
  S0 = (A) => {
    const e = ad(A, false), t = Array.isArray(e) ? e[0] : e;
    return !A.vars && t && (t.html[`:root:has(${qn})`] = {
      colorScheme: A.palette.mode
    }), A.colorSchemes && Object.entries(A.colorSchemes).forEach(([r, n]) => {
      var _a2, _b2;
      const o = A.getColorSchemeSelector(r);
      o.startsWith("@") ? t[o] = {
        [`:root:not(:has(.${qn}))`]: {
          colorScheme: (_a2 = n.palette) == null ? void 0 : _a2.mode
        }
      } : t[o.replace(/\s*&/, "")] = {
        [`&:not(:has(.${qn}))`]: {
          colorScheme: (_b2 = n.palette) == null ? void 0 : _b2.mode
        }
      };
    }), e;
  };
  x0 = xs(ba ? ({ theme: A, enableColorScheme: e }) => ad(A, e) : ({ theme: A }) => S0(A));
  function I0(A) {
    const e = KA({
      props: A,
      name: "MuiCssBaseline"
    }), { children: t, enableColorScheme: r = false } = e;
    return L.jsxs(h.Fragment, {
      children: [
        ba && L.jsx(x0, {
          enableColorScheme: r
        }),
        !ba && !r && L.jsx("span", {
          className: qn,
          style: {
            display: "none"
          }
        }),
        t
      ]
    });
  }
  function H0(A) {
    const e = Le(A);
    return e.body === A ? nt(A).innerWidth > e.documentElement.clientWidth : A.scrollHeight > A.clientHeight;
  }
  function Dr(A, e) {
    e ? A.setAttribute("aria-hidden", "true") : A.removeAttribute("aria-hidden");
  }
  function Ol(A) {
    return parseInt(nt(A).getComputedStyle(A).paddingRight, 10) || 0;
  }
  function T0(A) {
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
  function Kl(A, e, t, r, n) {
    const o = [
      e,
      t,
      ...r
    ];
    [].forEach.call(A.children, (i) => {
      const a = !o.includes(i), l = !T0(i);
      a && l && Dr(i, n);
    });
  }
  function Hi(A, e) {
    let t = -1;
    return A.some((r, n) => e(r) ? (t = n, true) : false), t;
  }
  function L0(A, e) {
    const t = [], r = A.container;
    if (!e.disableScrollLock) {
      if (H0(r)) {
        const i = Du(nt(r));
        t.push({
          value: r.style.paddingRight,
          property: "padding-right",
          el: r
        }), r.style.paddingRight = `${Ol(r) + i}px`;
        const a = Le(r).querySelectorAll(".mui-fixed");
        [].forEach.call(a, (l) => {
          t.push({
            value: l.style.paddingRight,
            property: "padding-right",
            el: l
          }), l.style.paddingRight = `${Ol(l) + i}px`;
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
  function k0(A) {
    const e = [];
    return [].forEach.call(A.children, (t) => {
      t.getAttribute("aria-hidden") === "true" && e.push(t);
    }), e;
  }
  class R0 {
    constructor() {
      this.modals = [], this.containers = [];
    }
    add(e, t) {
      let r = this.modals.indexOf(e);
      if (r !== -1) return r;
      r = this.modals.length, this.modals.push(e), e.modalRef && Dr(e.modalRef, false);
      const n = k0(t);
      Kl(t, e.mount, e.modalRef, n, true);
      const o = Hi(this.containers, (i) => i.container === t);
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
      const r = Hi(this.containers, (o) => o.modals.includes(e)), n = this.containers[r];
      n.restore || (n.restore = L0(n, t));
    }
    remove(e, t = true) {
      const r = this.modals.indexOf(e);
      if (r === -1) return r;
      const n = Hi(this.containers, (i) => i.modals.includes(e)), o = this.containers[n];
      if (o.modals.splice(o.modals.indexOf(e), 1), this.modals.splice(r, 1), o.modals.length === 0) o.restore && o.restore(), e.modalRef && Dr(e.modalRef, t), Kl(o.container, e.mount, e.modalRef, o.hiddenSiblings, false), this.containers.splice(n, 1);
      else {
        const i = o.modals[o.modals.length - 1];
        i.modalRef && Dr(i.modalRef, false);
      }
      return r;
    }
    isTopModal(e) {
      return this.modals.length > 0 && this.modals[this.modals.length - 1] === e;
    }
  }
  const O0 = [
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
  function K0(A) {
    const e = parseInt(A.getAttribute("tabindex") || "", 10);
    return Number.isNaN(e) ? A.contentEditable === "true" || (A.nodeName === "AUDIO" || A.nodeName === "VIDEO" || A.nodeName === "DETAILS") && A.getAttribute("tabindex") === null ? 0 : A.tabIndex : e;
  }
  function M0(A) {
    if (A.tagName !== "INPUT" || A.type !== "radio" || !A.name) return false;
    const e = (r) => A.ownerDocument.querySelector(`input[type="radio"]${r}`);
    let t = e(`[name="${A.name}"]:checked`);
    return t || (t = e(`[name="${A.name}"]`)), t !== A;
  }
  function D0(A) {
    return !(A.disabled || A.tagName === "INPUT" && A.type === "hidden" || M0(A));
  }
  function P0(A) {
    const e = [], t = [];
    return Array.from(A.querySelectorAll(O0)).forEach((r, n) => {
      const o = K0(r);
      o === -1 || !D0(r) || (o === 0 ? e.push(r) : t.push({
        documentOrder: n,
        tabIndex: o,
        node: r
      }));
    }), t.sort((r, n) => r.tabIndex === n.tabIndex ? r.documentOrder - n.documentOrder : r.tabIndex - n.tabIndex).map((r) => r.node).concat(e);
  }
  function _0() {
    return true;
  }
  function N0(A) {
    const { children: e, disableAutoFocus: t = false, disableEnforceFocus: r = false, disableRestoreFocus: n = false, getTabbable: o = P0, isEnabled: i = _0, open: a } = A, l = h.useRef(false), s = h.useRef(null), c = h.useRef(null), d = h.useRef(null), u = h.useRef(null), f = h.useRef(false), g = h.useRef(null), B = Be(ln(e), g), Q = h.useRef(null);
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
      const w = Le(g.current), v = (S) => {
        Q.current = S, !(r || !i() || S.key !== "Tab") && w.activeElement === g.current && S.shiftKey && (l.current = true, c.current && c.current.focus());
      }, U = () => {
        var _a2, _b2;
        const S = g.current;
        if (S === null) return;
        if (!w.hasFocus() || !i() || l.current) {
          l.current = false;
          return;
        }
        if (S.contains(w.activeElement) || r && w.activeElement !== s.current && w.activeElement !== c.current) return;
        if (w.activeElement !== u.current) u.current = null;
        else if (u.current !== null) return;
        if (!f.current) return;
        let x = [];
        if ((w.activeElement === s.current || w.activeElement === c.current) && (x = o(g.current)), x.length > 0) {
          const I = !!(((_a2 = Q.current) == null ? void 0 : _a2.shiftKey) && ((_b2 = Q.current) == null ? void 0 : _b2.key) === "Tab"), p = x[0], T = x[x.length - 1];
          typeof p != "string" && typeof T != "string" && (I ? T.focus() : p.focus());
        } else S.focus();
      };
      w.addEventListener("focusin", U), w.addEventListener("keydown", v, true);
      const C = setInterval(() => {
        w.activeElement && w.activeElement.tagName === "BODY" && U();
      }, 50);
      return () => {
        clearInterval(C), w.removeEventListener("focusin", U), w.removeEventListener("keydown", v, true);
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
          ref: B,
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
  function G0(A) {
    return typeof A == "function" ? A() : A;
  }
  function V0(A) {
    return A ? A.props.hasOwnProperty("in") : false;
  }
  const Ml = () => {
  }, wn = new R0();
  function $0(A) {
    const { container: e, disableEscapeKeyDown: t = false, disableScrollLock: r = false, closeAfterTransition: n = false, onTransitionEnter: o, onTransitionExited: i, children: a, onClose: l, open: s, rootRef: c } = A, d = h.useRef({}), u = h.useRef(null), f = h.useRef(null), g = Be(f, c), [B, Q] = h.useState(!s), m = V0(a);
    let F = true;
    (A["aria-hidden"] === "false" || A["aria-hidden"] === false) && (F = false);
    const w = () => Le(u.current), v = () => (d.current.modalRef = f.current, d.current.mount = u.current, d.current), U = () => {
      wn.mount(v(), {
        disableScrollLock: r
      }), f.current && (f.current.scrollTop = 0);
    }, C = kt(() => {
      const R = G0(e) || w().body;
      wn.add(v(), R), f.current && U();
    }), S = () => wn.isTopModal(v()), x = kt((R) => {
      u.current = R, R && (s && S() ? U() : f.current && Dr(f.current, F));
    }), I = h.useCallback(() => {
      wn.remove(v(), F);
    }, [
      F
    ]);
    h.useEffect(() => () => {
      I();
    }, [
      I
    ]), h.useEffect(() => {
      s ? C() : (!m || !n) && I();
    }, [
      s,
      I,
      m,
      n,
      C
    ]);
    const p = (R) => (M) => {
      var _a2;
      (_a2 = R.onKeyDown) == null ? void 0 : _a2.call(R, M), !(M.key !== "Escape" || M.which === 229 || !S()) && (t || (M.stopPropagation(), l && l(M, "escapeKeyDown")));
    }, T = (R) => (M) => {
      var _a2;
      (_a2 = R.onClick) == null ? void 0 : _a2.call(R, M), M.target === M.currentTarget && l && l(M, "backdropClick");
    };
    return {
      getRootProps: (R = {}) => {
        const M = _u(A);
        delete M.onTransitionEnter, delete M.onTransitionExited;
        const z = {
          ...M,
          ...R
        };
        return {
          role: "presentation",
          ...z,
          onKeyDown: p(z),
          ref: g
        };
      },
      getBackdropProps: (R = {}) => {
        const M = R;
        return {
          "aria-hidden": true,
          ...M,
          onClick: T(M),
          open: s
        };
      },
      getTransitionProps: () => {
        const R = () => {
          Q(false), o && o();
        }, M = () => {
          Q(true), i && i(), n && I();
        };
        return {
          onEnter: cl(R, (a == null ? void 0 : a.props.onEnter) ?? Ml),
          onExited: cl(M, (a == null ? void 0 : a.props.onExited) ?? Ml)
        };
      },
      rootRef: g,
      portalRef: x,
      isTopModal: S,
      exited: B,
      hasTransition: m
    };
  }
  function W0(A) {
    return RA("MuiModal", A);
  }
  HA("MuiModal", [
    "root",
    "hidden",
    "backdrop"
  ]);
  let z0, j0, X0;
  z0 = (A) => {
    const { open: e, exited: t, classes: r } = A;
    return OA({
      root: [
        "root",
        !e && t && "hidden"
      ],
      backdrop: [
        "backdrop"
      ]
    }, W0, r);
  };
  j0 = lA("div", {
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
  X0 = lA(Q0, {
    name: "MuiModal",
    slot: "Backdrop",
    overridesResolver: (A, e) => e.backdrop
  })({
    zIndex: -1
  });
  J0 = h.forwardRef(function(e, t) {
    const r = KA({
      name: "MuiModal",
      props: e
    }), { BackdropComponent: n = X0, BackdropProps: o, classes: i, className: a, closeAfterTransition: l = false, children: s, container: c, component: d, components: u = {}, componentsProps: f = {}, disableAutoFocus: g = false, disableEnforceFocus: B = false, disableEscapeKeyDown: Q = false, disablePortal: m = false, disableRestoreFocus: F = false, disableScrollLock: w = false, hideBackdrop: v = false, keepMounted: U = false, onBackdropClick: C, onClose: S, onTransitionEnter: x, onTransitionExited: I, open: p, slotProps: T = {}, slots: D = {}, theme: K, ...N } = r, R = {
      ...r,
      closeAfterTransition: l,
      disableAutoFocus: g,
      disableEnforceFocus: B,
      disableEscapeKeyDown: Q,
      disablePortal: m,
      disableRestoreFocus: F,
      disableScrollLock: w,
      hideBackdrop: v,
      keepMounted: U
    }, { getRootProps: M, getBackdropProps: z, getTransitionProps: rA, portalRef: P, isTopModal: X, exited: j, hasTransition: nA } = $0({
      ...R,
      rootRef: t
    }), k = {
      ...R,
      exited: j
    }, $ = z0(k), V = {};
    if (s.props.tabIndex === void 0 && (V.tabIndex = "-1"), nA) {
      const { onEnter: oA, onExited: aA } = rA();
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
        ...T
      }
    }, [dA, iA] = ce("root", {
      ref: t,
      elementType: j0,
      externalForwardedProps: {
        ...Y,
        ...N,
        component: d
      },
      getSlotProps: M,
      ownerState: k,
      className: pA(a, $ == null ? void 0 : $.root, !k.open && k.exited && ($ == null ? void 0 : $.hidden))
    }), [eA, J] = ce("backdrop", {
      ref: o == null ? void 0 : o.ref,
      elementType: n,
      externalForwardedProps: Y,
      shouldForwardComponentProp: true,
      additionalProps: o,
      getSlotProps: (oA) => z({
        ...oA,
        onClick: (aA) => {
          C && C(aA), (oA == null ? void 0 : oA.onClick) && oA.onClick(aA);
        }
      }),
      className: pA(o == null ? void 0 : o.className, $ == null ? void 0 : $.backdrop),
      ownerState: k
    });
    return !U && !p && (!nA || j) ? null : L.jsx(a0, {
      ref: P,
      container: c,
      disablePortal: m,
      children: L.jsxs(dA, {
        ...iA,
        children: [
          !v && n ? L.jsx(eA, {
            ...J
          }) : null,
          L.jsx(N0, {
            disableEnforceFocus: B,
            disableAutoFocus: g,
            disableRestoreFocus: F,
            isEnabled: X,
            open: p,
            children: h.cloneElement(s, V)
          })
        ]
      })
    });
  });
  function Y0(A) {
    return RA("MuiDivider", A);
  }
  let Z0, q0, Am;
  PU = HA("MuiDivider", [
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
  Z0 = (A) => {
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
    }, Y0, r);
  };
  q0 = lA("div", {
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
          borderColor: A.vars ? `rgba(${A.vars.palette.dividerChannel} / 0.08)` : sr(A.palette.divider, 0.08)
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
  Am = lA("span", {
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
  fo = h.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiDivider"
    }), { absolute: n = false, children: o, className: i, orientation: a = "horizontal", component: l = o || a === "vertical" ? "div" : "hr", flexItem: s = false, light: c = false, role: d = l !== "hr" ? "separator" : void 0, textAlign: u = "center", variant: f = "fullWidth", ...g } = r, B = {
      ...r,
      absolute: n,
      component: l,
      flexItem: s,
      light: c,
      orientation: a,
      role: d,
      textAlign: u,
      variant: f
    }, Q = Z0(B);
    return L.jsx(q0, {
      as: l,
      className: pA(Q.root, i),
      role: d,
      ref: t,
      ownerState: B,
      "aria-orientation": d === "separator" && (l !== "hr" || a === "vertical") ? a : void 0,
      ...g,
      children: o ? L.jsx(Am, {
        className: Q.wrapper,
        ownerState: B,
        children: o
      }) : null
    });
  });
  fo && (fo.muiSkipListHighlight = true);
  const em = (A) => {
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
    }, s = OA(l, B0, e);
    return {
      ...e,
      ...s
    };
  }, tm = lA(ui, {
    shouldForwardProp: (A) => We(A) || A === "classes",
    name: "MuiFilledInput",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        ...li(A, e),
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
  })), rm = lA(di, {
    name: "MuiFilledInput",
    slot: "Input",
    overridesResolver: ci
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
  }))), Rs = h.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiFilledInput"
    }), { disableUnderline: n = false, components: o = {}, componentsProps: i, fullWidth: a = false, hiddenLabel: l, inputComponent: s = "input", multiline: c = false, slotProps: d, slots: u = {}, type: f = "text", ...g } = r, B = {
      ...r,
      disableUnderline: n,
      fullWidth: a,
      inputComponent: s,
      multiline: c,
      type: f
    }, Q = em(r), m = {
      root: {
        ownerState: B
      },
      input: {
        ownerState: B
      }
    }, F = d ?? i ? ZA(m, d ?? i) : m, w = u.root ?? o.Root ?? tm, v = u.input ?? o.Input ?? rm;
    return L.jsx(ks, {
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
  Rs.muiName = "Input";
  function nm(A) {
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
  const om = (A) => {
    const { classes: e, margin: t, fullWidth: r } = A, n = {
      root: [
        "root",
        t !== "none" && `margin${mA(t)}`,
        r && "fullWidth"
      ]
    };
    return OA(n, nm, e);
  }, im = lA("div", {
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
  }), am = h.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiFormControl"
    }), { children: n, className: o, color: i = "primary", component: a = "div", disabled: l = false, error: s = false, focused: c, fullWidth: d = false, hiddenLabel: u = false, margin: f = "none", required: g = false, size: B = "medium", variant: Q = "outlined", ...m } = r, F = {
      ...r,
      color: i,
      component: a,
      disabled: l,
      error: s,
      fullWidth: d,
      hiddenLabel: u,
      margin: f,
      required: g,
      size: B,
      variant: Q
    }, w = om(F), [v, U] = h.useState(() => {
      let R = false;
      return n && h.Children.forEach(n, (M) => {
        if (!Ei(M, [
          "Input",
          "Select"
        ])) return;
        const z = Ei(M, [
          "Select"
        ]) ? M.props.input : M;
        z && u0(z.props) && (R = true);
      }), R;
    }), [C, S] = h.useState(() => {
      let R = false;
      return n && h.Children.forEach(n, (M) => {
        Ei(M, [
          "Input",
          "Select"
        ]) && (uo(M.props, true) || uo(M.props.inputProps, true)) && (R = true);
      }), R;
    }), [x, I] = h.useState(false);
    l && x && I(false);
    const p = c !== void 0 && !l ? c : x;
    let T;
    h.useRef(false);
    const D = h.useCallback(() => {
      S(true);
    }, []), K = h.useCallback(() => {
      S(false);
    }, []), N = h.useMemo(() => ({
      adornedStart: v,
      setAdornedStart: U,
      color: i,
      disabled: l,
      error: s,
      filled: C,
      focused: p,
      fullWidth: d,
      hiddenLabel: u,
      size: B,
      onBlur: () => {
        I(false);
      },
      onFocus: () => {
        I(true);
      },
      onEmpty: K,
      onFilled: D,
      registerEffect: T,
      required: g,
      variant: Q
    }), [
      v,
      i,
      l,
      s,
      C,
      p,
      d,
      u,
      T,
      K,
      D,
      g,
      B,
      Q
    ]);
    return L.jsx(Ls.Provider, {
      value: N,
      children: L.jsx(im, {
        as: a,
        ownerState: F,
        className: pA(w.root, o),
        ref: t,
        ...m,
        children: n
      })
    });
  });
  function sm(A) {
    return RA("MuiFormHelperText", A);
  }
  const Dl = HA("MuiFormHelperText", [
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
  var Pl;
  const lm = (A) => {
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
    return OA(s, sm, e);
  }, cm = lA("p", {
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
    [`&.${Dl.disabled}`]: {
      color: (A.vars || A).palette.text.disabled
    },
    [`&.${Dl.error}`]: {
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
  }))), um = h.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiFormHelperText"
    }), { children: n, className: o, component: i = "p", disabled: a, error: l, filled: s, focused: c, margin: d, required: u, variant: f, ...g } = r, B = pr(), Q = gr({
      props: r,
      muiFormControl: B,
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
    const F = lm(m);
    return L.jsx(cm, {
      as: i,
      className: pA(F.root, o),
      ref: t,
      ...g,
      ownerState: m,
      children: n === " " ? Pl || (Pl = L.jsx("span", {
        className: "notranslate",
        "aria-hidden": true,
        children: "\u200B"
      })) : n
    });
  });
  function dm(A) {
    return RA("MuiFormLabel", A);
  }
  const Pr = HA("MuiFormLabel", [
    "root",
    "colorSecondary",
    "focused",
    "disabled",
    "error",
    "filled",
    "required",
    "asterisk"
  ]), fm = (A) => {
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
    return OA(l, dm, e);
  }, gm = lA("label", {
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
          [`&.${Pr.focused}`]: {
            color: (A.vars || A).palette[e].main
          }
        }
      })),
      {
        props: {},
        style: {
          [`&.${Pr.disabled}`]: {
            color: (A.vars || A).palette.text.disabled
          },
          [`&.${Pr.error}`]: {
            color: (A.vars || A).palette.error.main
          }
        }
      }
    ]
  }))), pm = lA("span", {
    name: "MuiFormLabel",
    slot: "Asterisk",
    overridesResolver: (A, e) => e.asterisk
  })(MA(({ theme: A }) => ({
    [`&.${Pr.error}`]: {
      color: (A.vars || A).palette.error.main
    }
  }))), Bm = h.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiFormLabel"
    }), { children: n, className: o, color: i, component: a = "label", disabled: l, error: s, filled: c, focused: d, required: u, ...f } = r, g = pr(), B = gr({
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
      color: B.color || "primary",
      component: a,
      disabled: B.disabled,
      error: B.error,
      filled: B.filled,
      focused: B.focused,
      required: B.required
    }, m = fm(Q);
    return L.jsxs(gm, {
      as: a,
      ownerState: Q,
      className: pA(m.root, o),
      ref: t,
      ...f,
      children: [
        n,
        B.required && L.jsxs(pm, {
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
  const hm = {
    entering: {
      opacity: 1,
      transform: Fa(1)
    },
    entered: {
      opacity: 1,
      transform: "none"
    }
  }, Ti = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), Ua = h.forwardRef(function(e, t) {
    const { addEndListener: r, appear: n = true, children: o, easing: i, in: a, onEnter: l, onEntered: s, onEntering: c, onExit: d, onExited: u, onExiting: f, style: g, timeout: B = "auto", TransitionComponent: Q = ze, ...m } = e, F = Mu(), w = h.useRef(), v = Ss(), U = h.useRef(null), C = Be(U, ln(o), t), S = (R) => (M) => {
      if (R) {
        const z = U.current;
        M === void 0 ? R(z) : R(z, M);
      }
    }, x = S(c), I = S((R, M) => {
      id(R);
      const { duration: z, delay: rA, easing: P } = lo({
        style: g,
        timeout: B,
        easing: i
      }, {
        mode: "enter"
      });
      let X;
      B === "auto" ? (X = v.transitions.getAutoHeightDuration(R.clientHeight), w.current = X) : X = z, R.style.transition = [
        v.transitions.create("opacity", {
          duration: X,
          delay: rA
        }),
        v.transitions.create("transform", {
          duration: Ti ? X : X * 0.666,
          delay: rA,
          easing: P
        })
      ].join(","), l && l(R, M);
    }), p = S(s), T = S(f), D = S((R) => {
      const { duration: M, delay: z, easing: rA } = lo({
        style: g,
        timeout: B,
        easing: i
      }, {
        mode: "exit"
      });
      let P;
      B === "auto" ? (P = v.transitions.getAutoHeightDuration(R.clientHeight), w.current = P) : P = M, R.style.transition = [
        v.transitions.create("opacity", {
          duration: P,
          delay: z
        }),
        v.transitions.create("transform", {
          duration: Ti ? P : P * 0.666,
          delay: Ti ? z : z || P * 0.333,
          easing: rA
        })
      ].join(","), R.style.opacity = 0, R.style.transform = Fa(0.75), d && d(R);
    }), K = S(u), N = (R) => {
      B === "auto" && F.start(w.current || 0, R), r && r(U.current, R);
    };
    return L.jsx(Q, {
      appear: n,
      in: a,
      nodeRef: U,
      onEnter: I,
      onEntered: p,
      onEntering: x,
      onExit: D,
      onExited: K,
      onExiting: T,
      addEndListener: N,
      timeout: B === "auto" ? null : B,
      ...m,
      children: (R, { ownerState: M, ...z }) => h.cloneElement(o, {
        style: {
          opacity: 0,
          transform: Fa(0.75),
          visibility: R === "exited" && !a ? "hidden" : void 0,
          ...hm[R],
          ...g,
          ...o.props.style
        },
        ref: C,
        ...z
      })
    });
  });
  Ua && (Ua.muiSupportAuto = true);
  const mm = (A) => {
    const { classes: e, disableUnderline: t } = A, n = OA({
      root: [
        "root",
        !t && "underline"
      ],
      input: [
        "input"
      ]
    }, g0, e);
    return {
      ...e,
      ...n
    };
  }, Cm = lA(ui, {
    shouldForwardProp: (A) => We(A) || A === "classes",
    name: "MuiInput",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        ...li(A, e),
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
            [`&.${vr.focused}:after`]: {
              transform: "scaleX(1) translateX(0)"
            },
            [`&.${vr.error}`]: {
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
            [`&:hover:not(.${vr.disabled}, .${vr.error}):before`]: {
              borderBottom: `2px solid ${(A.vars || A).palette.text.primary}`,
              "@media (hover: none)": {
                borderBottom: `1px solid ${t}`
              }
            },
            [`&.${vr.disabled}:before`]: {
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
  })), wm = lA(di, {
    name: "MuiInput",
    slot: "Input",
    overridesResolver: ci
  })({}), Os = h.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiInput"
    }), { disableUnderline: n = false, components: o = {}, componentsProps: i, fullWidth: a = false, inputComponent: l = "input", multiline: s = false, slotProps: c, slots: d = {}, type: u = "text", ...f } = r, g = mm(r), Q = {
      root: {
        ownerState: {
          disableUnderline: n
        }
      }
    }, m = c ?? i ? ZA(c ?? i, Q) : Q, F = d.root ?? o.Root ?? Cm, w = d.input ?? o.Input ?? wm;
    return L.jsx(ks, {
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
  Os.muiName = "Input";
  function vm(A) {
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
  let ym, Qm, bm;
  ym = (A) => {
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
    }, s = OA(l, vm, e);
    return {
      ...e,
      ...s
    };
  };
  Qm = lA(Bm, {
    shouldForwardProp: (A) => We(A) || A === "classes",
    name: "MuiInputLabel",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        {
          [`& .${Pr.asterisk}`]: e.asterisk
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
  bm = h.forwardRef(function(e, t) {
    const r = KA({
      name: "MuiInputLabel",
      props: e
    }), { disableAnimation: n = false, margin: o, shrink: i, variant: a, className: l, ...s } = r, c = pr();
    let d = i;
    typeof d > "u" && c && (d = c.filled || c.focused || c.adornedStart);
    const u = gr({
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
    }, g = ym(f);
    return L.jsx(Qm, {
      "data-shrink": d,
      ref: t,
      className: pA(g.root, l),
      ...s,
      ownerState: f,
      classes: g
    });
  });
  Fm = h.createContext({});
  function Um(A) {
    return RA("MuiList", A);
  }
  HA("MuiList", [
    "root",
    "padding",
    "dense",
    "subheader"
  ]);
  let Em, Sm;
  Em = (A) => {
    const { classes: e, disablePadding: t, dense: r, subheader: n } = A;
    return OA({
      root: [
        "root",
        !t && "padding",
        r && "dense",
        n && "subheader"
      ]
    }, Um, e);
  };
  Sm = lA("ul", {
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
  xm = h.forwardRef(function(e, t) {
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
    }, f = Em(u);
    return L.jsx(Fm.Provider, {
      value: d,
      children: L.jsxs(Sm, {
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
  function Li(A, e, t) {
    return A === e ? A.firstChild : e && e.nextElementSibling ? e.nextElementSibling : t ? null : A.firstChild;
  }
  function _l(A, e, t) {
    return A === e ? t ? A.firstChild : A.lastChild : e && e.previousElementSibling ? e.previousElementSibling : t ? null : A.lastChild;
  }
  function sd(A, e) {
    if (e === void 0) return true;
    let t = A.innerText;
    return t === void 0 && (t = A.textContent), t = t.trim().toLowerCase(), t.length === 0 ? false : e.repeating ? t[0] === e.keys[0] : t.startsWith(e.keys.join(""));
  }
  function yr(A, e, t, r, n, o) {
    let i = false, a = n(A, e, e ? t : false);
    for (; a; ) {
      if (a === A.firstChild) {
        if (i) return false;
        i = true;
      }
      const l = r ? false : a.disabled || a.getAttribute("aria-disabled") === "true";
      if (!a.hasAttribute("tabindex") || !sd(a, o) || l) a = n(A, a, t);
      else return a.focus(), true;
    }
    return false;
  }
  const Im = h.forwardRef(function(e, t) {
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
        const U = !f.current.style.width;
        if (w.clientHeight < f.current.clientHeight && U) {
          const C = `${Du(nt(w))}px`;
          f.current.style[v === "rtl" ? "paddingLeft" : "paddingRight"] = C, f.current.style.width = `calc(100% + ${C})`;
        }
        return f.current;
      }
    }), []);
    const B = (w) => {
      const v = f.current, U = w.key;
      if (w.ctrlKey || w.metaKey || w.altKey) {
        c && c(w);
        return;
      }
      const S = Le(v).activeElement;
      if (U === "ArrowDown") w.preventDefault(), yr(v, S, s, l, Li);
      else if (U === "ArrowUp") w.preventDefault(), yr(v, S, s, l, _l);
      else if (U === "Home") w.preventDefault(), yr(v, null, s, l, Li);
      else if (U === "End") w.preventDefault(), yr(v, null, s, l, _l);
      else if (U.length === 1) {
        const x = g.current, I = U.toLowerCase(), p = performance.now();
        x.keys.length > 0 && (p - x.lastTime > 500 ? (x.keys = [], x.repeating = true, x.previousKeyMatched = true) : x.repeating && I !== x.keys[0] && (x.repeating = false)), x.lastTime = p, x.keys.push(I);
        const T = S && !x.repeating && sd(S, x);
        x.previousKeyMatched && (T || yr(v, S, false, l, Li, x)) ? w.preventDefault() : x.previousKeyMatched = false;
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
        const U = {};
        return o && (U.autoFocus = true), w.props.tabIndex === void 0 && d === "selectedMenu" && (U.tabIndex = 0), h.cloneElement(w, U);
      }
      return w;
    });
    return L.jsx(xm, {
      role: "menu",
      ref: Q,
      className: a,
      onKeyDown: B,
      tabIndex: n ? 0 : -1,
      ...u,
      children: F
    });
  });
  function Hm(A) {
    return RA("MuiPopover", A);
  }
  HA("MuiPopover", [
    "root",
    "paper"
  ]);
  function Nl(A, e) {
    let t = 0;
    return typeof e == "number" ? t = e : e === "center" ? t = A.height / 2 : e === "bottom" && (t = A.height), t;
  }
  function Gl(A, e) {
    let t = 0;
    return typeof e == "number" ? t = e : e === "center" ? t = A.width / 2 : e === "right" && (t = A.width), t;
  }
  function Vl(A) {
    return [
      A.horizontal,
      A.vertical
    ].map((e) => typeof e == "number" ? `${e}px` : e).join(" ");
  }
  function vn(A) {
    return typeof A == "function" ? A() : A;
  }
  const Tm = (A) => {
    const { classes: e } = A;
    return OA({
      root: [
        "root"
      ],
      paper: [
        "paper"
      ]
    }, Hm, e);
  }, Lm = lA(J0, {
    name: "MuiPopover",
    slot: "Root",
    overridesResolver: (A, e) => e.root
  })({}), ld = lA(Ca, {
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
  }), cd = h.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiPopover"
    }), { action: n, anchorEl: o, anchorOrigin: i = {
      vertical: "top",
      horizontal: "left"
    }, anchorPosition: a, anchorReference: l = "anchorEl", children: s, className: c, container: d, elevation: u = 8, marginThreshold: f = 16, open: g, PaperProps: B = {}, slots: Q = {}, slotProps: m = {}, transformOrigin: F = {
      vertical: "top",
      horizontal: "left"
    }, TransitionComponent: w, transitionDuration: v = "auto", TransitionProps: U = {}, disableScrollLock: C = false, ...S } = r, x = h.useRef(), I = {
      ...r,
      anchorOrigin: i,
      anchorReference: l,
      elevation: u,
      marginThreshold: f,
      transformOrigin: F,
      TransitionComponent: w,
      transitionDuration: v,
      TransitionProps: U
    }, p = Tm(I), T = h.useCallback(() => {
      if (l === "anchorPosition") return a;
      const J = vn(o), aA = (J && J.nodeType === 1 ? J : Le(x.current).body).getBoundingClientRect();
      return {
        top: aA.top + Nl(aA, i.vertical),
        left: aA.left + Gl(aA, i.horizontal)
      };
    }, [
      o,
      i.horizontal,
      i.vertical,
      a,
      l
    ]), D = h.useCallback((J) => ({
      vertical: Nl(J, F.vertical),
      horizontal: Gl(J, F.horizontal)
    }), [
      F.horizontal,
      F.vertical
    ]), K = h.useCallback((J) => {
      const oA = {
        width: J.offsetWidth,
        height: J.offsetHeight
      }, aA = D(oA);
      if (l === "none") return {
        top: null,
        left: null,
        transformOrigin: Vl(aA)
      };
      const y = T();
      let E = y.top - aA.vertical, b = y.left - aA.horizontal;
      const _ = E + oA.height, W = b + oA.width, G = nt(vn(o)), sA = G.innerHeight - f, cA = G.innerWidth - f;
      if (f !== null && E < f) {
        const fA = E - f;
        E -= fA, aA.vertical += fA;
      } else if (f !== null && _ > sA) {
        const fA = _ - sA;
        E -= fA, aA.vertical += fA;
      }
      if (f !== null && b < f) {
        const fA = b - f;
        b -= fA, aA.horizontal += fA;
      } else if (W > cA) {
        const fA = W - cA;
        b -= fA, aA.horizontal += fA;
      }
      return {
        top: `${Math.round(E)}px`,
        left: `${Math.round(b)}px`,
        transformOrigin: Vl(aA)
      };
    }, [
      o,
      l,
      T,
      D,
      f
    ]), [N, R] = h.useState(g), M = h.useCallback(() => {
      const J = x.current;
      if (!J) return;
      const oA = K(J);
      oA.top !== null && J.style.setProperty("top", oA.top), oA.left !== null && (J.style.left = oA.left), J.style.transformOrigin = oA.transformOrigin, R(true);
    }, [
      K
    ]);
    h.useEffect(() => (C && window.addEventListener("scroll", M), () => window.removeEventListener("scroll", M)), [
      o,
      C,
      M
    ]);
    const z = () => {
      M();
    }, rA = () => {
      R(false);
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
      const J = Ou(() => {
        M();
      }), oA = nt(vn(o));
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
        transition: U,
        paper: B,
        ...m
      }
    }, [j, nA] = ce("transition", {
      elementType: Ua,
      externalForwardedProps: X,
      ownerState: I,
      getSlotProps: (J) => ({
        ...J,
        onEntering: (oA, aA) => {
          var _a2;
          (_a2 = J.onEntering) == null ? void 0 : _a2.call(J, oA, aA), z();
        },
        onExited: (oA) => {
          var _a2;
          (_a2 = J.onExited) == null ? void 0 : _a2.call(J, oA), rA();
        }
      }),
      additionalProps: {
        appear: true,
        in: g
      }
    });
    v === "auto" && !j.muiSupportAuto && (P = void 0);
    const k = d || (o ? Le(vn(o)).body : void 0), [$, { slots: V, slotProps: Y, ...dA }] = ce("root", {
      ref: t,
      elementType: Lm,
      externalForwardedProps: {
        ...X,
        ...S
      },
      shouldForwardComponentProp: true,
      additionalProps: {
        slots: {
          backdrop: Q.backdrop
        },
        slotProps: {
          backdrop: uh(typeof m.backdrop == "function" ? m.backdrop(I) : m.backdrop, {
            invisible: true
          })
        },
        container: k,
        open: g
      },
      ownerState: I,
      className: pA(p.root, c)
    }), [iA, eA] = ce("paper", {
      ref: x,
      className: p.paper,
      elementType: ld,
      externalForwardedProps: X,
      shouldForwardComponentProp: true,
      additionalProps: {
        elevation: u,
        style: N ? void 0 : {
          opacity: 0
        }
      },
      ownerState: I
    });
    return L.jsx($, {
      ...dA,
      ...!Qa($) && {
        slots: V,
        slotProps: Y,
        disableScrollLock: C
      },
      children: L.jsx(j, {
        ...nA,
        timeout: P,
        children: L.jsx(iA, {
          ...eA,
          children: s
        })
      })
    });
  });
  function km(A) {
    return RA("MuiMenu", A);
  }
  HA("MuiMenu", [
    "root",
    "paper",
    "list"
  ]);
  const Rm = {
    vertical: "top",
    horizontal: "right"
  }, Om = {
    vertical: "top",
    horizontal: "left"
  }, Km = (A) => {
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
    }, km, e);
  }, Mm = lA(cd, {
    shouldForwardProp: (A) => We(A) || A === "classes",
    name: "MuiMenu",
    slot: "Root",
    overridesResolver: (A, e) => e.root
  })({}), Dm = lA(ld, {
    name: "MuiMenu",
    slot: "Paper",
    overridesResolver: (A, e) => e.paper
  })({
    maxHeight: "calc(100% - 96px)",
    WebkitOverflowScrolling: "touch"
  }), Pm = lA(Im, {
    name: "MuiMenu",
    slot: "List",
    overridesResolver: (A, e) => e.list
  })({
    outline: 0
  }), _m = h.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiMenu"
    }), { autoFocus: n = true, children: o, className: i, disableAutoFocusItem: a = false, MenuListProps: l = {}, onClose: s, open: c, PaperProps: d = {}, PopoverClasses: u, transitionDuration: f = "auto", TransitionProps: { onEntering: g, ...B } = {}, variant: Q = "selectedMenu", slots: m = {}, slotProps: F = {}, ...w } = r, v = lB(), U = {
      ...r,
      autoFocus: n,
      disableAutoFocusItem: a,
      MenuListProps: l,
      onEntering: g,
      PaperProps: d,
      transitionDuration: f,
      TransitionProps: B,
      variant: Q
    }, C = Km(U), S = n && !a && c, x = h.useRef(null), I = (P, X) => {
      x.current && x.current.adjustStyleForScrollbar(P, {
        direction: v ? "rtl" : "ltr"
      }), g && g(P, X);
    }, p = (P) => {
      P.key === "Tab" && (P.preventDefault(), s && s(P, "tabKeyDown"));
    };
    let T = -1;
    h.Children.map(o, (P, X) => {
      h.isValidElement(P) && (P.props.disabled || (Q === "selectedMenu" && P.props.selected || T === -1) && (T = X));
    });
    const D = {
      slots: m,
      slotProps: {
        list: l,
        transition: B,
        paper: d,
        ...F
      }
    }, K = rB({
      elementType: m.root,
      externalSlotProps: F.root,
      ownerState: U,
      className: [
        C.root,
        i
      ]
    }), [N, R] = ce("paper", {
      className: C.paper,
      elementType: Dm,
      externalForwardedProps: D,
      shouldForwardComponentProp: true,
      ownerState: U
    }), [M, z] = ce("list", {
      className: pA(C.list, l.className),
      elementType: Pm,
      shouldForwardComponentProp: true,
      externalForwardedProps: D,
      getSlotProps: (P) => ({
        ...P,
        onKeyDown: (X) => {
          var _a2;
          p(X), (_a2 = P.onKeyDown) == null ? void 0 : _a2.call(P, X);
        }
      }),
      ownerState: U
    }), rA = typeof D.slotProps.transition == "function" ? D.slotProps.transition(U) : D.slotProps.transition;
    return L.jsx(Mm, {
      onClose: s,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: v ? "right" : "left"
      },
      transformOrigin: v ? Rm : Om,
      slots: {
        root: m.root,
        paper: N,
        backdrop: m.backdrop,
        ...m.transition && {
          transition: m.transition
        }
      },
      slotProps: {
        root: K,
        paper: R,
        backdrop: typeof F.backdrop == "function" ? F.backdrop(U) : F.backdrop,
        transition: {
          ...rA,
          onEntering: (...P) => {
            var _a2;
            I(...P), (_a2 = rA == null ? void 0 : rA.onEntering) == null ? void 0 : _a2.call(rA, ...P);
          }
        }
      },
      open: c,
      ref: t,
      transitionDuration: f,
      ownerState: U,
      ...w,
      classes: u,
      children: L.jsx(M, {
        actions: x,
        autoFocus: n && (T === -1 || a),
        autoFocusItem: S,
        variant: Q,
        ...z,
        children: o
      })
    });
  });
  function Nm(A) {
    return RA("MuiNativeSelect", A);
  }
  const Ks = HA("MuiNativeSelect", [
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
  ]), Gm = (A) => {
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
    return OA(a, Nm, e);
  }, ud = lA("select", {
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
    [`&.${Ks.disabled}`]: {
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
  })), Vm = lA(ud, {
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
          [`&.${Ks.multiple}`]: e.multiple
        }
      ];
    }
  })({}), dd = lA("svg", {
    name: "MuiNativeSelect"
  })(({ theme: A }) => ({
    position: "absolute",
    right: 0,
    top: "calc(50% - .5em)",
    pointerEvents: "none",
    color: (A.vars || A).palette.action.active,
    [`&.${Ks.disabled}`]: {
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
  })), $m = lA(dd, {
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
  })({}), Wm = h.forwardRef(function(e, t) {
    const { className: r, disabled: n, error: o, IconComponent: i, inputRef: a, variant: l = "standard", ...s } = e, c = {
      ...e,
      disabled: n,
      variant: l,
      error: o
    }, d = Gm(c);
    return L.jsxs(h.Fragment, {
      children: [
        L.jsx(Vm, {
          ownerState: c,
          className: pA(d.select, r),
          disabled: n,
          ref: a || t,
          ...s
        }),
        e.multiple ? null : L.jsx($m, {
          as: i,
          ownerState: c,
          className: d.icon
        })
      ]
    });
  });
  var $l;
  const zm = lA("fieldset", {
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
  }), jm = lA("legend", {
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
  function Xm(A) {
    const { children: e, classes: t, className: r, label: n, notched: o, ...i } = A, a = n != null && n !== "", l = {
      ...A,
      notched: o,
      withLabel: a
    };
    return L.jsx(zm, {
      "aria-hidden": true,
      className: r,
      ownerState: l,
      ...i,
      children: L.jsx(jm, {
        ownerState: l,
        children: a ? L.jsx("span", {
          children: n
        }) : $l || ($l = L.jsx("span", {
          className: "notranslate",
          "aria-hidden": true,
          children: "\u200B"
        }))
      })
    });
  }
  const Jm = (A) => {
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
    }, p0, e);
    return {
      ...e,
      ...r
    };
  }, Ym = lA(ui, {
    shouldForwardProp: (A) => We(A) || A === "classes",
    name: "MuiOutlinedInput",
    slot: "Root",
    overridesResolver: li
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
  })), Zm = lA(Xm, {
    name: "MuiOutlinedInput",
    slot: "NotchedOutline",
    overridesResolver: (A, e) => e.notchedOutline
  })(MA(({ theme: A }) => {
    const e = A.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
    return {
      borderColor: A.vars ? `rgba(${A.vars.palette.common.onBackgroundChannel} / 0.23)` : e
    };
  })), qm = lA(di, {
    name: "MuiOutlinedInput",
    slot: "Input",
    overridesResolver: ci
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
  }))), Ms = h.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiOutlinedInput"
    }), { components: n = {}, fullWidth: o = false, inputComponent: i = "input", label: a, multiline: l = false, notched: s, slots: c = {}, slotProps: d = {}, type: u = "text", ...f } = r, g = Jm(r), B = pr(), Q = gr({
      props: r,
      muiFormControl: B,
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
      formControl: B,
      fullWidth: o,
      hiddenLabel: Q.hiddenLabel,
      multiline: l,
      size: Q.size,
      type: u
    }, F = c.root ?? n.Root ?? Ym, w = c.input ?? n.Input ?? qm, [v, U] = ce("notchedOutline", {
      elementType: Zm,
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
    return L.jsx(ks, {
      slots: {
        root: F,
        input: w
      },
      slotProps: d,
      renderSuffix: (C) => L.jsx(v, {
        ...U,
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
  Ms.muiName = "Input";
  function fd(A) {
    return RA("MuiSelect", A);
  }
  const Qr = HA("MuiSelect", [
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
  var Wl;
  const AC = lA(ud, {
    name: "MuiSelect",
    slot: "Select",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        {
          [`&.${Qr.select}`]: e.select
        },
        {
          [`&.${Qr.select}`]: e[t.variant]
        },
        {
          [`&.${Qr.error}`]: e.error
        },
        {
          [`&.${Qr.multiple}`]: e.multiple
        }
      ];
    }
  })({
    [`&.${Qr.select}`]: {
      height: "auto",
      minHeight: "1.4375em",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden"
    }
  }), eC = lA(dd, {
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
  })({}), tC = lA("input", {
    shouldForwardProp: (A) => ed(A) && A !== "classes",
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
  function zl(A, e) {
    return typeof e == "object" && e !== null ? A === e : String(A) === String(e);
  }
  function rC(A) {
    return A == null || typeof A == "string" && !A.trim();
  }
  let nC, oC, iC, Ds, aC, sC, lC;
  nC = (A) => {
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
    return OA(a, fd, e);
  };
  oC = h.forwardRef(function(e, t) {
    var _a2;
    const { "aria-describedby": r, "aria-label": n, autoFocus: o, autoWidth: i, children: a, className: l, defaultOpen: s, defaultValue: c, disabled: d, displayEmpty: u, error: f = false, IconComponent: g, inputRef: B, labelId: Q, MenuProps: m = {}, multiple: F, name: w, onBlur: v, onChange: U, onClose: C, onFocus: S, onOpen: x, open: I, readOnly: p, renderValue: T, required: D, SelectDisplayProps: K = {}, tabIndex: N, type: R, value: M, variant: z = "standard", ...rA } = e, [P, X] = gl({
      controlled: M,
      default: c,
      name: "Select"
    }), [j, nA] = gl({
      controlled: I,
      default: s,
      name: "Select"
    }), k = h.useRef(null), $ = h.useRef(null), [V, Y] = h.useState(null), { current: dA } = h.useRef(I != null), [iA, eA] = h.useState(), J = Be(t, B), oA = h.useCallback((uA) => {
      $.current = uA, uA && Y(uA);
    }, []), aA = V == null ? void 0 : V.parentNode;
    h.useImperativeHandle(J, () => ({
      focus: () => {
        $.current.focus();
      },
      node: k.current,
      value: P
    }), [
      P
    ]), h.useEffect(() => {
      s && j && V && !dA && (eA(i ? null : aA.clientWidth), $.current.focus());
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
      uA ? x && x(xA) : C && C(xA), dA || (eA(i ? null : aA.clientWidth), nA(uA));
    }, E = (uA) => {
      uA.button === 0 && (uA.preventDefault(), $.current.focus(), y(true, uA));
    }, b = (uA) => {
      y(false, uA);
    }, _ = h.Children.toArray(a), W = (uA) => {
      const xA = _.find((ee) => ee.props.value === uA.target.value);
      xA !== void 0 && (X(xA.props.value), U && U(uA, xA));
    }, G = (uA) => (xA) => {
      let ee;
      if (xA.currentTarget.hasAttribute("tabindex")) {
        if (F) {
          ee = Array.isArray(P) ? P.slice() : [];
          const Mt = P.indexOf(uA.props.value);
          Mt === -1 ? ee.push(uA.props.value) : ee.splice(Mt, 1);
        } else ee = uA.props.value;
        if (uA.props.onClick && uA.props.onClick(xA), P !== ee && (X(ee), U)) {
          const Mt = xA.nativeEvent || xA, js = new Mt.constructor(Mt.type, Mt);
          Object.defineProperty(js, "target", {
            writable: true,
            value: {
              value: ee,
              name: w
            }
          }), U(js, uA);
        }
        F || y(false, xA);
      }
    }, sA = (uA) => {
      p || [
        " ",
        "ArrowUp",
        "ArrowDown",
        "Enter"
      ].includes(uA.key) && (uA.preventDefault(), y(true, uA));
    }, cA = V !== null && j, fA = (uA) => {
      !cA && v && (Object.defineProperty(uA, "target", {
        writable: true,
        value: {
          value: P,
          name: w
        }
      }), v(uA));
    };
    delete rA["aria-invalid"];
    let AA, Ae;
    const gA = [];
    let _A = false;
    (uo({
      value: P
    }) || u) && (T ? AA = T(P) : _A = true);
    const zA = _.map((uA) => {
      if (!h.isValidElement(uA)) return null;
      let xA;
      if (F) {
        if (!Array.isArray(P)) throw new Error(et(2));
        xA = P.some((ee) => zl(ee, uA.props.value)), xA && _A && gA.push(uA.props.children);
      } else xA = zl(P, uA.props.value), xA && _A && (Ae = uA.props.children);
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
    _A && (F ? gA.length === 0 ? AA = null : AA = gA.reduce((uA, xA, ee) => (uA.push(xA), ee < gA.length - 1 && uA.push(", "), uA), []) : AA = Ae);
    let ie = iA;
    !i && dA && V && (ie = aA.clientWidth);
    let XA;
    typeof N < "u" ? XA = N : XA = d ? null : 0;
    const it = K.id || (w ? `mui-component-select-${w}` : void 0), yt = {
      ...e,
      variant: z,
      value: P,
      open: cA,
      error: f
    }, TA = nC(yt), Kt = {
      ...m.PaperProps,
      ...(_a2 = m.slotProps) == null ? void 0 : _a2.paper
    }, mr = ai();
    return L.jsxs(h.Fragment, {
      children: [
        L.jsx(AC, {
          as: "div",
          ref: oA,
          tabIndex: XA,
          role: "combobox",
          "aria-controls": cA ? mr : void 0,
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
          onMouseDown: d || p ? null : E,
          onBlur: fA,
          onFocus: S,
          ...K,
          ownerState: yt,
          className: pA(K.className, TA.select, l),
          id: it,
          children: rC(AA) ? Wl || (Wl = L.jsx("span", {
            className: "notranslate",
            "aria-hidden": true,
            children: "\u200B"
          })) : AA
        }),
        L.jsx(tC, {
          "aria-invalid": f,
          value: Array.isArray(P) ? P.join(",") : P,
          name: w,
          ref: k,
          "aria-hidden": true,
          onChange: W,
          tabIndex: -1,
          disabled: d,
          className: TA.nativeInput,
          autoFocus: o,
          required: D,
          ...rA,
          ownerState: yt
        }),
        L.jsx(eC, {
          as: g,
          className: TA.icon,
          ownerState: yt
        }),
        L.jsx(_m, {
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
              id: mr,
              ...m.MenuListProps
            },
            paper: {
              ...Kt,
              style: {
                minWidth: ie,
                ...Kt != null ? Kt.style : null
              }
            }
          },
          children: zA
        })
      ]
    });
  });
  iC = (A) => {
    const { classes: e } = A, r = OA({
      root: [
        "root"
      ]
    }, fd, e);
    return {
      ...e,
      ...r
    };
  };
  Ds = {
    name: "MuiSelect",
    overridesResolver: (A, e) => e.root,
    shouldForwardProp: (A) => We(A) && A !== "variant",
    slot: "Root"
  };
  aC = lA(Os, Ds)("");
  sC = lA(Ms, Ds)("");
  lC = lA(Rs, Ds)("");
  gd = h.forwardRef(function(e, t) {
    const r = KA({
      name: "MuiSelect",
      props: e
    }), { autoWidth: n = false, children: o, classes: i = {}, className: a, defaultOpen: l = false, displayEmpty: s = false, IconComponent: c = h0, id: d, input: u, inputProps: f, label: g, labelId: B, MenuProps: Q, multiple: m = false, native: F = false, onClose: w, onOpen: v, open: U, renderValue: C, SelectDisplayProps: S, variant: x = "outlined", ...I } = r, p = F ? Wm : oC, T = pr(), D = gr({
      props: r,
      muiFormControl: T,
      states: [
        "variant",
        "error"
      ]
    }), K = D.variant || x, N = {
      ...r,
      variant: K,
      classes: i
    }, R = iC(N), { root: M, ...z } = R, rA = u || {
      standard: L.jsx(aC, {
        ownerState: N
      }),
      outlined: L.jsx(sC, {
        label: g,
        ownerState: N
      }),
      filled: L.jsx(lC, {
        ownerState: N
      })
    }[K], P = Be(t, ln(rA));
    return L.jsx(h.Fragment, {
      children: h.cloneElement(rA, {
        inputComponent: p,
        inputProps: {
          children: o,
          error: D.error,
          IconComponent: c,
          variant: K,
          type: void 0,
          multiple: m,
          ...F ? {
            id: d
          } : {
            autoWidth: n,
            defaultOpen: l,
            displayEmpty: s,
            labelId: B,
            MenuProps: Q,
            onClose: w,
            onOpen: v,
            open: U,
            renderValue: C,
            SelectDisplayProps: {
              id: d,
              ...S
            }
          },
          ...f,
          classes: f ? ZA(z, f.classes) : z,
          ...u ? u.props.inputProps : {}
        },
        ...(m && F || s) && K === "outlined" ? {
          notched: true
        } : {},
        ref: P,
        className: pA(rA.props.className, a, R.root),
        ...!u && {
          variant: K
        },
        ...I
      })
    });
  });
  gd.muiName = "Select";
  function cC(A) {
    return RA("MuiTextField", A);
  }
  HA("MuiTextField", [
    "root"
  ]);
  const uC = {
    standard: Os,
    filled: Rs,
    outlined: Ms
  }, dC = (A) => {
    const { classes: e } = A;
    return OA({
      root: [
        "root"
      ]
    }, cC, e);
  }, fC = lA(am, {
    name: "MuiTextField",
    slot: "Root",
    overridesResolver: (A, e) => e.root
  })({}), gC = h.forwardRef(function(e, t) {
    const r = KA({
      props: e,
      name: "MuiTextField"
    }), { autoComplete: n, autoFocus: o = false, children: i, className: a, color: l = "primary", defaultValue: s, disabled: c = false, error: d = false, FormHelperTextProps: u, fullWidth: f = false, helperText: g, id: B, InputLabelProps: Q, inputProps: m, InputProps: F, inputRef: w, label: v, maxRows: U, minRows: C, multiline: S = false, name: x, onBlur: I, onChange: p, onFocus: T, placeholder: D, required: K = false, rows: N, select: R = false, SelectProps: M, slots: z = {}, slotProps: rA = {}, type: P, value: X, variant: j = "outlined", ...nA } = r, k = {
      ...r,
      autoFocus: o,
      color: l,
      disabled: c,
      error: d,
      fullWidth: f,
      multiline: S,
      required: K,
      select: R,
      variant: j
    }, $ = dC(k), V = ai(B), Y = g && V ? `${V}-helper-text` : void 0, dA = v && V ? `${V}-label` : void 0, iA = uC[j], eA = {
      slots: z,
      slotProps: {
        input: F,
        inputLabel: Q,
        htmlInput: m,
        formHelperText: u,
        select: M,
        ...rA
      }
    }, J = {}, oA = eA.slotProps.inputLabel;
    j === "outlined" && (oA && typeof oA.shrink < "u" && (J.notched = oA.shrink), J.label = v), R && ((!M || !M.native) && (J.id = void 0), J["aria-describedby"] = void 0);
    const [aA, y] = ce("root", {
      elementType: fC,
      shouldForwardComponentProp: true,
      externalForwardedProps: {
        ...eA,
        ...nA
      },
      ownerState: k,
      className: pA($.root, a),
      ref: t,
      additionalProps: {
        disabled: c,
        error: d,
        fullWidth: f,
        required: K,
        color: l,
        variant: j
      }
    }), [E, b] = ce("input", {
      elementType: iA,
      externalForwardedProps: eA,
      additionalProps: J,
      ownerState: k
    }), [_, W] = ce("inputLabel", {
      elementType: bm,
      externalForwardedProps: eA,
      ownerState: k
    }), [G, sA] = ce("htmlInput", {
      elementType: "input",
      externalForwardedProps: eA,
      ownerState: k
    }), [cA, fA] = ce("formHelperText", {
      elementType: um,
      externalForwardedProps: eA,
      ownerState: k
    }), [AA, Ae] = ce("select", {
      elementType: gd,
      externalForwardedProps: eA,
      ownerState: k
    }), gA = L.jsx(E, {
      "aria-describedby": Y,
      autoComplete: n,
      autoFocus: o,
      defaultValue: s,
      fullWidth: f,
      multiline: S,
      name: x,
      rows: N,
      maxRows: U,
      minRows: C,
      type: P,
      value: X,
      id: V,
      inputRef: w,
      onBlur: I,
      onChange: p,
      onFocus: T,
      placeholder: D,
      inputProps: sA,
      slots: {
        input: z.htmlInput ? G : void 0
      },
      ...b
    });
    return L.jsxs(aA, {
      ...y,
      children: [
        v != null && v !== "" && L.jsx(_, {
          htmlFor: V,
          id: dA,
          ...W,
          children: v
        }),
        R ? L.jsx(AA, {
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
  let pC, Ps, Ao, pd, go;
  pC = [
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
  Ps = (A) => h.useMemo(() => {
    if (!A) return {
      backgroundStyles: void 0,
      borderStyles: void 0,
      textStyles: void 0,
      fontStyles: void 0,
      boxStyles: void 0
    };
    const e = {}, t = {}, r = {}, n = {}, o = {};
    return pC.forEach((i) => {
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
  Ao = (A) => A.startsWith("&") || A.includes(" ") || A.startsWith("@") ? A : A.replace(/-([a-z])/g, (e, t) => t.toUpperCase());
  pd = (A) => {
    const e = Object.fromEntries(Object.entries(A).map(([t, r]) => {
      if (Array.isArray(r)) {
        const n = r.filter((o) => o != null);
        return [
          Ao(t),
          n.length > 0 ? n : void 0
        ];
      }
      return typeof r == "object" && r !== null ? [
        Ao(t),
        pd(r)
      ] : [
        Ao(t),
        r
      ];
    }).filter(([, t]) => t != null));
    return Object.keys(e).length > 0 ? e : void 0;
  };
  go = (A) => {
    if (!A) return {};
    const e = Object.fromEntries(Object.entries(A).map(([t, r]) => {
      const n = Ao(t);
      if (Array.isArray(r)) {
        const o = r.filter((i) => i != null);
        return [
          n,
          o.length > 0 ? o : void 0
        ];
      }
      if (typeof r == "object" && r !== null) {
        const o = pd(r);
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
  Br = h.createContext({});
  function BC({ children: A, context: e }) {
    const t = e.theme, r = e.widget, { fontStyles: n, textStyles: o } = Ps(r.style || {}), i = h.useMemo(() => si(ZA(t, {
      components: {
        MuiTypography: {
          styleOverrides: {
            root: {
              fontSize: "0.875rem",
              ...go(n),
              ...go(o),
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
    return L.jsxs(td, {
      theme: i,
      children: [
        L.jsx(I0, {}),
        L.jsx(Br.Provider, {
          value: e,
          children: A
        })
      ]
    });
  }
  _U = function(A, e) {
    return L.jsx(BC, {
      context: e,
      children: A
    });
  };
  let hC;
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
      children: A ? L.jsx(fo, {
        sx: e,
        children: L.jsx(Zn, {
          sx: {
            opacity: 0.7,
            color: "primary.main"
          },
          variant: "caption",
          children: Ea.t(A)
        })
      }) : L.jsx(fo, {
        sx: e
      })
    });
  };
  hC = rd(L.jsx("path", {
    d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
  }), "Delete");
  var Bd = {
    exports: {}
  };
  (function(A) {
    (function(e) {
      var t = /^\s+/, r = /\s+$/, n = 0, o = e.round, i = e.min, a = e.max, l = e.random;
      function s(y, E) {
        if (y = y || "", E = E || {}, y instanceof s) return y;
        if (!(this instanceof s)) return new s(y, E);
        var b = c(y);
        this._originalInput = y, this._r = b.r, this._g = b.g, this._b = b.b, this._a = b.a, this._roundA = o(100 * this._a) / 100, this._format = E.format || b.format, this._gradientType = E.gradientType, this._r < 1 && (this._r = o(this._r)), this._g < 1 && (this._g = o(this._g)), this._b < 1 && (this._b = o(this._b)), this._ok = b.ok, this._tc_id = n++;
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
          var y = this.toRgb(), E, b, _, W, G, sA;
          return E = y.r / 255, b = y.g / 255, _ = y.b / 255, E <= 0.03928 ? W = E / 12.92 : W = e.pow((E + 0.055) / 1.055, 2.4), b <= 0.03928 ? G = b / 12.92 : G = e.pow((b + 0.055) / 1.055, 2.4), _ <= 0.03928 ? sA = _ / 12.92 : sA = e.pow((_ + 0.055) / 1.055, 2.4), 0.2126 * W + 0.7152 * G + 0.0722 * sA;
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
          var y = g(this._r, this._g, this._b), E = o(y.h * 360), b = o(y.s * 100), _ = o(y.v * 100);
          return this._a == 1 ? "hsv(" + E + ", " + b + "%, " + _ + "%)" : "hsva(" + E + ", " + b + "%, " + _ + "%, " + this._roundA + ")";
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
          var y = u(this._r, this._g, this._b), E = o(y.h * 360), b = o(y.s * 100), _ = o(y.l * 100);
          return this._a == 1 ? "hsl(" + E + ", " + b + "%, " + _ + "%)" : "hsla(" + E + ", " + b + "%, " + _ + "%, " + this._roundA + ")";
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
          return this._a === 0 ? "transparent" : this._a < 1 ? false : z[Q(this._r, this._g, this._b, true)] || false;
        },
        toFilter: function(y) {
          var E = "#" + F(this._r, this._g, this._b, this._a), b = E, _ = this._gradientType ? "GradientType = 1, " : "";
          if (y) {
            var W = s(y);
            b = "#" + F(W._r, W._g, W._b, W._a);
          }
          return "progid:DXImageTransform.Microsoft.gradient(" + _ + "startColorstr=" + E + ",endColorstr=" + b + ")";
        },
        toString: function(y) {
          var E = !!y;
          y = y || this._format;
          var b = false, _ = this._a < 1 && this._a >= 0, W = !E && _ && (y === "hex" || y === "hex6" || y === "hex3" || y === "hex4" || y === "hex8" || y === "name");
          return W ? y === "name" && this._a === 0 ? this.toName() : this.toRgbString() : (y === "rgb" && (b = this.toRgbString()), y === "prgb" && (b = this.toPercentageRgbString()), (y === "hex" || y === "hex6") && (b = this.toHexString()), y === "hex3" && (b = this.toHexString(true)), y === "hex4" && (b = this.toHex8String(true)), y === "hex8" && (b = this.toHex8String()), y === "name" && (b = this.toName()), y === "hsl" && (b = this.toHslString()), y === "hsv" && (b = this.toHsvString()), b || this.toHexString());
        },
        clone: function() {
          return s(this.toString());
        },
        _applyModification: function(y, E) {
          var b = y.apply(null, [
            this
          ].concat([].slice.call(E)));
          return this._r = b._r, this._g = b._g, this._b = b._b, this.setAlpha(b._a), this;
        },
        lighten: function() {
          return this._applyModification(C, arguments);
        },
        brighten: function() {
          return this._applyModification(S, arguments);
        },
        darken: function() {
          return this._applyModification(x, arguments);
        },
        desaturate: function() {
          return this._applyModification(w, arguments);
        },
        saturate: function() {
          return this._applyModification(v, arguments);
        },
        greyscale: function() {
          return this._applyModification(U, arguments);
        },
        spin: function() {
          return this._applyModification(I, arguments);
        },
        _applyCombination: function(y, E) {
          return y.apply(null, [
            this
          ].concat([].slice.call(E)));
        },
        analogous: function() {
          return this._applyCombination(N, arguments);
        },
        complement: function() {
          return this._applyCombination(p, arguments);
        },
        monochromatic: function() {
          return this._applyCombination(R, arguments);
        },
        splitcomplement: function() {
          return this._applyCombination(K, arguments);
        },
        triad: function() {
          return this._applyCombination(T, arguments);
        },
        tetrad: function() {
          return this._applyCombination(D, arguments);
        }
      }, s.fromRatio = function(y, E) {
        if (typeof y == "object") {
          var b = {};
          for (var _ in y) y.hasOwnProperty(_) && (_ === "a" ? b[_] = y[_] : b[_] = Y(y[_]));
          y = b;
        }
        return s(y, E);
      };
      function c(y) {
        var E = {
          r: 0,
          g: 0,
          b: 0
        }, b = 1, _ = null, W = null, G = null, sA = false, cA = false;
        return typeof y == "string" && (y = oA(y)), typeof y == "object" && (J(y.r) && J(y.g) && J(y.b) ? (E = d(y.r, y.g, y.b), sA = true, cA = String(y.r).substr(-1) === "%" ? "prgb" : "rgb") : J(y.h) && J(y.s) && J(y.v) ? (_ = Y(y.s), W = Y(y.v), E = B(y.h, _, W), sA = true, cA = "hsv") : J(y.h) && J(y.s) && J(y.l) && (_ = Y(y.s), G = Y(y.l), E = f(y.h, _, G), sA = true, cA = "hsl"), y.hasOwnProperty("a") && (b = y.a)), b = P(b), {
          ok: sA,
          format: y.format || cA,
          r: i(255, a(E.r, 0)),
          g: i(255, a(E.g, 0)),
          b: i(255, a(E.b, 0)),
          a: b
        };
      }
      function d(y, E, b) {
        return {
          r: X(y, 255) * 255,
          g: X(E, 255) * 255,
          b: X(b, 255) * 255
        };
      }
      function u(y, E, b) {
        y = X(y, 255), E = X(E, 255), b = X(b, 255);
        var _ = a(y, E, b), W = i(y, E, b), G, sA, cA = (_ + W) / 2;
        if (_ == W) G = sA = 0;
        else {
          var fA = _ - W;
          switch (sA = cA > 0.5 ? fA / (2 - _ - W) : fA / (_ + W), _) {
            case y:
              G = (E - b) / fA + (E < b ? 6 : 0);
              break;
            case E:
              G = (b - y) / fA + 2;
              break;
            case b:
              G = (y - E) / fA + 4;
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
      function f(y, E, b) {
        var _, W, G;
        y = X(y, 360), E = X(E, 100), b = X(b, 100);
        function sA(AA, Ae, gA) {
          return gA < 0 && (gA += 1), gA > 1 && (gA -= 1), gA < 1 / 6 ? AA + (Ae - AA) * 6 * gA : gA < 1 / 2 ? Ae : gA < 2 / 3 ? AA + (Ae - AA) * (2 / 3 - gA) * 6 : AA;
        }
        if (E === 0) _ = W = G = b;
        else {
          var cA = b < 0.5 ? b * (1 + E) : b + E - b * E, fA = 2 * b - cA;
          _ = sA(fA, cA, y + 1 / 3), W = sA(fA, cA, y), G = sA(fA, cA, y - 1 / 3);
        }
        return {
          r: _ * 255,
          g: W * 255,
          b: G * 255
        };
      }
      function g(y, E, b) {
        y = X(y, 255), E = X(E, 255), b = X(b, 255);
        var _ = a(y, E, b), W = i(y, E, b), G, sA, cA = _, fA = _ - W;
        if (sA = _ === 0 ? 0 : fA / _, _ == W) G = 0;
        else {
          switch (_) {
            case y:
              G = (E - b) / fA + (E < b ? 6 : 0);
              break;
            case E:
              G = (b - y) / fA + 2;
              break;
            case b:
              G = (y - E) / fA + 4;
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
      function B(y, E, b) {
        y = X(y, 360) * 6, E = X(E, 100), b = X(b, 100);
        var _ = e.floor(y), W = y - _, G = b * (1 - E), sA = b * (1 - W * E), cA = b * (1 - (1 - W) * E), fA = _ % 6, AA = [
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
          r: AA * 255,
          g: Ae * 255,
          b: gA * 255
        };
      }
      function Q(y, E, b, _) {
        var W = [
          V(o(y).toString(16)),
          V(o(E).toString(16)),
          V(o(b).toString(16))
        ];
        return _ && W[0].charAt(0) == W[0].charAt(1) && W[1].charAt(0) == W[1].charAt(1) && W[2].charAt(0) == W[2].charAt(1) ? W[0].charAt(0) + W[1].charAt(0) + W[2].charAt(0) : W.join("");
      }
      function m(y, E, b, _, W) {
        var G = [
          V(o(y).toString(16)),
          V(o(E).toString(16)),
          V(o(b).toString(16)),
          V(dA(_))
        ];
        return W && G[0].charAt(0) == G[0].charAt(1) && G[1].charAt(0) == G[1].charAt(1) && G[2].charAt(0) == G[2].charAt(1) && G[3].charAt(0) == G[3].charAt(1) ? G[0].charAt(0) + G[1].charAt(0) + G[2].charAt(0) + G[3].charAt(0) : G.join("");
      }
      function F(y, E, b, _) {
        var W = [
          V(dA(_)),
          V(o(y).toString(16)),
          V(o(E).toString(16)),
          V(o(b).toString(16))
        ];
        return W.join("");
      }
      s.equals = function(y, E) {
        return !y || !E ? false : s(y).toRgbString() == s(E).toRgbString();
      }, s.random = function() {
        return s.fromRatio({
          r: l(),
          g: l(),
          b: l()
        });
      };
      function w(y, E) {
        E = E === 0 ? 0 : E || 10;
        var b = s(y).toHsl();
        return b.s -= E / 100, b.s = j(b.s), s(b);
      }
      function v(y, E) {
        E = E === 0 ? 0 : E || 10;
        var b = s(y).toHsl();
        return b.s += E / 100, b.s = j(b.s), s(b);
      }
      function U(y) {
        return s(y).desaturate(100);
      }
      function C(y, E) {
        E = E === 0 ? 0 : E || 10;
        var b = s(y).toHsl();
        return b.l += E / 100, b.l = j(b.l), s(b);
      }
      function S(y, E) {
        E = E === 0 ? 0 : E || 10;
        var b = s(y).toRgb();
        return b.r = a(0, i(255, b.r - o(255 * -(E / 100)))), b.g = a(0, i(255, b.g - o(255 * -(E / 100)))), b.b = a(0, i(255, b.b - o(255 * -(E / 100)))), s(b);
      }
      function x(y, E) {
        E = E === 0 ? 0 : E || 10;
        var b = s(y).toHsl();
        return b.l -= E / 100, b.l = j(b.l), s(b);
      }
      function I(y, E) {
        var b = s(y).toHsl(), _ = (b.h + E) % 360;
        return b.h = _ < 0 ? 360 + _ : _, s(b);
      }
      function p(y) {
        var E = s(y).toHsl();
        return E.h = (E.h + 180) % 360, s(E);
      }
      function T(y) {
        var E = s(y).toHsl(), b = E.h;
        return [
          s(y),
          s({
            h: (b + 120) % 360,
            s: E.s,
            l: E.l
          }),
          s({
            h: (b + 240) % 360,
            s: E.s,
            l: E.l
          })
        ];
      }
      function D(y) {
        var E = s(y).toHsl(), b = E.h;
        return [
          s(y),
          s({
            h: (b + 90) % 360,
            s: E.s,
            l: E.l
          }),
          s({
            h: (b + 180) % 360,
            s: E.s,
            l: E.l
          }),
          s({
            h: (b + 270) % 360,
            s: E.s,
            l: E.l
          })
        ];
      }
      function K(y) {
        var E = s(y).toHsl(), b = E.h;
        return [
          s(y),
          s({
            h: (b + 72) % 360,
            s: E.s,
            l: E.l
          }),
          s({
            h: (b + 216) % 360,
            s: E.s,
            l: E.l
          })
        ];
      }
      function N(y, E, b) {
        E = E || 6, b = b || 30;
        var _ = s(y).toHsl(), W = 360 / b, G = [
          s(y)
        ];
        for (_.h = (_.h - (W * E >> 1) + 720) % 360; --E; ) _.h = (_.h + W) % 360, G.push(s(_));
        return G;
      }
      function R(y, E) {
        E = E || 6;
        for (var b = s(y).toHsv(), _ = b.h, W = b.s, G = b.v, sA = [], cA = 1 / E; E--; ) sA.push(s({
          h: _,
          s: W,
          v: G
        })), G = (G + cA) % 1;
        return sA;
      }
      s.mix = function(y, E, b) {
        b = b === 0 ? 0 : b || 50;
        var _ = s(y).toRgb(), W = s(E).toRgb(), G = b / 100, sA = {
          r: (W.r - _.r) * G + _.r,
          g: (W.g - _.g) * G + _.g,
          b: (W.b - _.b) * G + _.b,
          a: (W.a - _.a) * G + _.a
        };
        return s(sA);
      }, s.readability = function(y, E) {
        var b = s(y), _ = s(E);
        return (e.max(b.getLuminance(), _.getLuminance()) + 0.05) / (e.min(b.getLuminance(), _.getLuminance()) + 0.05);
      }, s.isReadable = function(y, E, b) {
        var _ = s.readability(y, E), W, G;
        switch (G = false, W = aA(b), W.level + W.size) {
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
      }, s.mostReadable = function(y, E, b) {
        var _ = null, W = 0, G, sA, cA, fA;
        b = b || {}, sA = b.includeFallbackColors, cA = b.level, fA = b.size;
        for (var AA = 0; AA < E.length; AA++) G = s.readability(y, E[AA]), G > W && (W = G, _ = s(E[AA]));
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
      }, z = s.hexNames = rA(M);
      function rA(y) {
        var E = {};
        for (var b in y) y.hasOwnProperty(b) && (E[y[b]] = b);
        return E;
      }
      function P(y) {
        return y = parseFloat(y), (isNaN(y) || y < 0 || y > 1) && (y = 1), y;
      }
      function X(y, E) {
        k(y) && (y = "100%");
        var b = $(y);
        return y = i(E, a(0, parseFloat(y))), b && (y = parseInt(y * E, 10) / 100), e.abs(y - E) < 1e-6 ? 1 : y % E / parseFloat(E);
      }
      function j(y) {
        return i(1, a(0, y));
      }
      function nA(y) {
        return parseInt(y, 16);
      }
      function k(y) {
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
        return nA(y) / 255;
      }
      var eA = (function() {
        var y = "[-\\+]?\\d+%?", E = "[-\\+]?\\d*\\.\\d+%?", b = "(?:" + E + ")|(?:" + y + ")", _ = "[\\s|\\(]+(" + b + ")[,|\\s]+(" + b + ")[,|\\s]+(" + b + ")\\s*\\)?", W = "[\\s|\\(]+(" + b + ")[,|\\s]+(" + b + ")[,|\\s]+(" + b + ")[,|\\s]+(" + b + ")\\s*\\)?";
        return {
          CSS_UNIT: new RegExp(b),
          rgb: new RegExp("rgb" + _),
          rgba: new RegExp("rgba" + W),
          hsl: new RegExp("hsl" + _),
          hsla: new RegExp("hsla" + W),
          hsv: new RegExp("hsv" + _),
          hsva: new RegExp("hsva" + W),
          hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
          hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
        };
      })();
      function J(y) {
        return !!eA.CSS_UNIT.exec(y);
      }
      function oA(y) {
        y = y.replace(t, "").replace(r, "").toLowerCase();
        var E = false;
        if (M[y]) y = M[y], E = true;
        else if (y == "transparent") return {
          r: 0,
          g: 0,
          b: 0,
          a: 0,
          format: "name"
        };
        var b;
        return (b = eA.rgb.exec(y)) ? {
          r: b[1],
          g: b[2],
          b: b[3]
        } : (b = eA.rgba.exec(y)) ? {
          r: b[1],
          g: b[2],
          b: b[3],
          a: b[4]
        } : (b = eA.hsl.exec(y)) ? {
          h: b[1],
          s: b[2],
          l: b[3]
        } : (b = eA.hsla.exec(y)) ? {
          h: b[1],
          s: b[2],
          l: b[3],
          a: b[4]
        } : (b = eA.hsv.exec(y)) ? {
          h: b[1],
          s: b[2],
          v: b[3]
        } : (b = eA.hsva.exec(y)) ? {
          h: b[1],
          s: b[2],
          v: b[3],
          a: b[4]
        } : (b = eA.hex8.exec(y)) ? {
          r: nA(b[1]),
          g: nA(b[2]),
          b: nA(b[3]),
          a: iA(b[4]),
          format: E ? "name" : "hex8"
        } : (b = eA.hex6.exec(y)) ? {
          r: nA(b[1]),
          g: nA(b[2]),
          b: nA(b[3]),
          format: E ? "name" : "hex"
        } : (b = eA.hex4.exec(y)) ? {
          r: nA(b[1] + "" + b[1]),
          g: nA(b[2] + "" + b[2]),
          b: nA(b[3] + "" + b[3]),
          a: iA(b[4] + "" + b[4]),
          format: E ? "name" : "hex8"
        } : (b = eA.hex3.exec(y)) ? {
          r: nA(b[1] + "" + b[1]),
          g: nA(b[2] + "" + b[2]),
          b: nA(b[3] + "" + b[3]),
          format: E ? "name" : "hex"
        } : false;
      }
      function aA(y) {
        var E, b;
        return y = y || {
          level: "AA",
          size: "small"
        }, E = (y.level || "AA").toUpperCase(), b = (y.size || "small").toLowerCase(), E !== "AA" && E !== "AAA" && (E = "AA"), b !== "small" && b !== "large" && (b = "small"), {
          level: E,
          size: b
        };
      }
      A.exports ? A.exports = s : window.tinycolor = s;
    })(Math);
  })(Bd);
  var mC = Bd.exports;
  const ne = Za(mC);
  var tr = function() {
    return tr = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, tr.apply(this, arguments);
  }, CC = function(A, e, t) {
    if (t || arguments.length === 2) for (var r = 0, n = e.length, o; r < n; r++) (o || !(r in e)) && (o || (o = Array.prototype.slice.call(e, 0, r)), o[r] = e[r]);
    return A.concat(o || Array.prototype.slice.call(e));
  }, wC = function(A) {
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
    function t(k) {
      var $ = new Error(A + ": " + k);
      throw $;
    }
    function r(k) {
      A = A.substr(k);
    }
    function n(k) {
      var $ = /^[\n\r\t\s]+/.exec(A);
      $ && r($[0].length);
      var V = k.exec(A);
      return V && r(V[0].length), V;
    }
    function o(k) {
      var $ = k(), V = [];
      if ($) for (V.push($); n(e.comma); ) $ = k(), $ ? V.push($) : t("One extra comma");
      return V;
    }
    function i(k, $, V) {
      var Y = n($);
      if (Y) return {
        type: k,
        value: Y[V]
      };
    }
    function a() {
      var k = i("hex", e.hexColor, 1);
      if (k == null ? void 0 : k.value) {
        var $ = ne(k == null ? void 0 : k.value).toRgb(), V = $.r, Y = $.g, dA = $.b, iA = $.a;
        return {
          value: "rgba(".concat(V, ", ").concat(Y, ", ").concat(dA, ", ").concat(iA, ")")
        };
      }
    }
    var l = function(k) {
      var $ = Et(k == null ? void 0 : k[0]);
      return {
        value: "".concat($ ? "RGBA" : "rgba", "(").concat(o(z), ")")
      };
    };
    function s(k, $) {
      var V = n(k);
      if (V) {
        n(e.startCall) || t("Missing (");
        var Y = $(V);
        return n(e.endCall) || t("Missing )"), Y;
      }
    }
    function c() {
      return s(e.hslColor, rA);
    }
    function d() {
      return s(e.rgbaColor, l);
    }
    function u() {
      return s(e.rgbColor, X);
    }
    function f() {
      var k = i("literal", e.literalColor, 0);
      if (k == null ? void 0 : k.value) {
        var $ = ne(k == null ? void 0 : k.value).toRgb(), V = $.r, Y = $.g, dA = $.b, iA = $.a;
        return {
          value: "rgba(".concat(V, ", ").concat(Y, ", ").concat(dA, ", ").concat(iA, ")")
        };
      }
    }
    function g() {
      return s(e.hsvColor, P);
    }
    function B() {
      return a() || c() || d() || u() || f() || g();
    }
    function Q() {
      var k, $ = B();
      return $ || t("Expected color definition"), $.left = parseInt((k = j()) === null || k === void 0 ? void 0 : k.value), $;
    }
    function m(k, $, V) {
      return s($, function() {
        var Y = V();
        return Y && (n(e.comma) || t("Missing comma before color stops")), {
          type: k,
          orientation: Y,
          colorStops: o(Q)
        };
      });
    }
    function F() {
      return C() || S();
    }
    function w() {
      return m("linear-gradient", e.linearGradient, F) || m("repeating-linear-gradient", e.repeatingLinearGradient, F) || m("radial-gradient", e.radialGradient, x) || m("repeating-radial-gradient", e.repeatingRadialGradient, x);
    }
    function v() {
      return o(w);
    }
    function U() {
      var k, $ = v();
      A.length > 0 && t("Invalid input not EOF");
      var V = $[0], Y = (k = V == null ? void 0 : V.colorStops) === null || k === void 0 ? void 0 : k.filter(function(iA) {
        return Et(iA.value);
      }).length, dA = function() {
        if (Y > 0) return V;
        var iA = function(eA, J) {
          return J === 0 ? fi(eA) : cn(eA);
        };
        return tr(tr({}, V), {
          colorStops: V.colorStops.map(function(eA, J) {
            return tr(tr({}, eA), {
              value: iA(eA, J)
            });
          })
        });
      };
      return dA();
    }
    function C() {
      return i("directional", e.sideOrCorner, 1);
    }
    function S() {
      return i("angular", e.angleValue, 1);
    }
    function x() {
      var k, $ = I(), V;
      return $ && (k = [], k.push($), V = A, n(e.comma) && ($ = I(), $ ? k.push($) : A = V)), k;
    }
    function I() {
      var k = T() || D();
      if (k) k.at = N();
      else {
        var $ = K();
        if ($) {
          k = $;
          var V = N();
          V && (k.at = V);
        } else {
          var Y = R();
          Y && (k = {
            type: "default-radial",
            at: Y
          });
        }
      }
      return k;
    }
    function p() {
      return i("px", e.pixelValue, 1) || i("em", e.emValue, 1);
    }
    function T() {
      var k = i("shape", /^(circle)/i, 0);
      return k && (k.style = p() || K()), k;
    }
    function D() {
      var k = i("shape", /^(ellipse)/i, 0);
      return k && (k.style = j() || K()), k;
    }
    function K() {
      return i("extent-keyword", e.extentKeywords, 1);
    }
    function N() {
      if (i("position", /^at/, 0)) {
        var k = R();
        return k || t("Missing positioning value"), k;
      }
    }
    function R() {
      var k = M();
      if (k.x || k.y) return {
        type: "position",
        value: k
      };
    }
    function M() {
      return {
        x: j(),
        y: j()
      };
    }
    function z() {
      return n(e.number)[1];
    }
    var rA = function(k) {
      var $ = Et(k == null ? void 0 : k[0]), V = o(z), Y = ne({
        h: V[0],
        s: V[1],
        l: V[2],
        a: V[3] || 1
      }).toRgb(), dA = Y.r, iA = Y.g, eA = Y.b, J = Y.a;
      return {
        value: "".concat($ ? "RGBA" : "rgba", "(").concat(dA, ", ").concat(iA, ", ").concat(eA, ", ").concat(J, ")")
      };
    }, P = function(k) {
      var $ = Et(k == null ? void 0 : k[0]), V = o(z), Y = ne({
        h: V[0],
        s: V[1],
        v: V[2],
        a: V[3] || 1
      }).toRgb(), dA = Y.r, iA = Y.g, eA = Y.b, J = Y.a;
      return {
        value: "".concat($ ? "RGBA" : "rgba", "(").concat(dA, ", ").concat(iA, ", ").concat(eA, ", ").concat(J, ")")
      };
    }, X = function(k) {
      var $ = Et(k == null ? void 0 : k[0]), V = n(e.spacedRgbColor), Y = V || CC([
        null
      ], o(z), true), dA = Y[1], iA = Y[2], eA = Y[3], J = Y[4], oA = J === void 0 ? 1 : J;
      return {
        value: "".concat($ ? "RGBA" : "rgba", "(").concat(dA, ", ").concat(iA, ", ").concat(eA, ", ").concat(oA, ")")
      };
    };
    function j() {
      return i("%", e.percentageValue, 1) || nA() || p();
    }
    function nA() {
      return i("position-keyword", e.positionKeywords, 1);
    }
    return U();
  }, cn = function(A) {
    return A.value.toLowerCase();
  }, fi = function(A) {
    return A.value.toUpperCase();
  }, vC = function(A, e, t) {
    var r = A == null ? void 0 : A.includes("gradient");
    if (r) {
      var n = A == null ? void 0 : A.includes("conic"), o = n ? t : A;
      n && console.log("Sorry we cant handle conic gradients yet");
      var i = wC(o);
      return i == null ? void 0 : i.colorStops;
    } else {
      var o = A || e;
      return [
        {
          value: o
        }
      ];
    }
  }, cr = function(A, e, t) {
    return isNaN(A) || A < e ? e : A > t ? t : A;
  }, Ge = function(A) {
    return Math.round(A);
  }, po = function() {
    return po = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, po.apply(this, arguments);
  }, hd = function(A) {
    var e = A.target.parentNode.getBoundingClientRect(), t = A.target.className, r = t === "c-resize ps-rl" ? 15 : 0;
    return {
      offsetLeft: (e == null ? void 0 : e.x) + r,
      offsetTop: e == null ? void 0 : e.y,
      clientWidth: e == null ? void 0 : e.width,
      clientHeight: e == null ? void 0 : e.height
    };
  };
  function ur(A, e) {
    var t = hd(A), r = t.offsetLeft, n = t.clientWidth, o = A.clientX - r - e / 2, i = n - 18, a = cr(o, 0, i);
    return Math.round(a / (i / 100));
  }
  function yC(A, e, t, r, n) {
    var o = A * t - n / 2, i = (100 - e) / 100 * r - n / 2;
    return [
      o,
      i
    ];
  }
  var QC = function(A) {
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
  function bC(A, e) {
    var t = hd(A), r = t.offsetLeft, n = t.offsetTop, o = t.clientWidth, i = t.clientHeight, a = QC(A), l = a.clientX, s = a.clientY, c = function() {
      var u = l - r - e / 2;
      return cr(u, -9, o - 10);
    }, d = function() {
      var u = s - n - e / 2;
      return cr(u, -9, i - 10);
    };
    return [
      c(),
      d()
    ];
  }
  var Et = function(A) {
    var e;
    return (A == null ? void 0 : A[0]) === ((e = A == null ? void 0 : A[0]) === null || e === void 0 ? void 0 : e.toUpperCase());
  }, md = function(A) {
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
  }, FC = function(A) {
    var e, t, r, n, o;
    if (typeof A == "string") return A;
    if (!((e = A == null ? void 0 : A.type) === null || e === void 0) && e.includes("gradient")) {
      var i = (t = A == null ? void 0 : A.colorStops) === null || t === void 0 ? void 0 : t.sort(function(u, f) {
        return (u == null ? void 0 : u.left) - (f == null ? void 0 : f.left);
      }), a = (r = i == null ? void 0 : i.map(function(u) {
        return "".concat(u == null ? void 0 : u.value, " ").concat(u == null ? void 0 : u.left, "%");
      })) === null || r === void 0 ? void 0 : r.join(", "), l = A == null ? void 0 : A.type, s = md((n = A == null ? void 0 : A.orientation) === null || n === void 0 ? void 0 : n.value), c = l === "linear-gradient" ? "".concat(s, "deg") : "circle";
      return "".concat(l, "(").concat(c, ", ").concat(a, ")");
    } else {
      var d = ((o = A == null ? void 0 : A.colorStops[0]) === null || o === void 0 ? void 0 : o.value) || "rgba(175, 51, 242, 1)";
      return d;
    }
  }, UC = function(A, e) {
    var t = A == null ? void 0 : A.map(function(o, i) {
      return po(po({}, o), {
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
  }, EC = function(A) {
    var e, t = A == null ? void 0 : A.split(",")[0], r = (e = t == null ? void 0 : t.split("(")[1]) === null || e === void 0 ? void 0 : e.replace("deg", "");
    return md(r);
  }, SC = function(A) {
    var e = A == null ? void 0 : A.includes("gradient"), t = A == null ? void 0 : A.split("(")[0], r = EC(A), n = t === "linear-gradient" ? "".concat(r, "deg") : "circle";
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
  }, xC = function(A, e, t) {
    if (t || arguments.length === 2) for (var r = 0, n = e.length, o; r < n; r++) (o || !(r in e)) && (o || (o = Array.prototype.slice.call(e, 0, r)), o[r] = e[r]);
    return A.concat(o || Array.prototype.slice.call(e));
  }, Cd = h.createContext(null);
  function IC(A) {
    var e, t, r, n, o = A.value, i = A.children, a = A.onChange, l = A.isDarkMode, s = A.squareWidth, c = A.hideOpacity, d = A.showHexAlpha, u = A.squareHeight, f = A.passedConfig, g = A.defaultStyles, B = A.pickerIdSuffix, Q = {
      barSize: (e = f.barSize) !== null && e !== void 0 ? e : yn.barSize,
      crossSize: (t = f.crossSize) !== null && t !== void 0 ? t : yn.crossSize,
      defaultColor: (r = f.defaultColor) !== null && r !== void 0 ? r : yn.defaultColor,
      defaultGradient: (n = f.defaultGradient) !== null && n !== void 0 ? n : yn.defaultGradient
    }, m = vC(o, Q.defaultColor, Q.defaultGradient), F = SC(o), w = F.degrees, v = F.degreeStr, U = F.isGradient, C = F.gradientType, S = UC(m, Q.defaultGradient), x = S.currentColor, I = S.selectedColor, p = S.currentLeft, T = h.useState("rgb"), D = T[0], K = T[1], N = h.useState({}), R = N[0], M = N[1], z = ne(x), rA = z.toRgb(), P = z.toHsv(), X = h.useState(ue(ue({}, rA), P)), j = X[0], nA = X[1];
    h.useEffect(function() {
      (P == null ? void 0 : P.s) === 0 ? nA(ue(ue(ue({}, rA), P), {
        h: j == null ? void 0 : j.h
      })) : nA(ue(ue({}, rA), P));
    }, [
      x
    ]);
    var k = function(iA) {
      var eA = iA.sort(function(aA, y) {
        return aA.left - y.left;
      }), J = eA == null ? void 0 : eA.map(function(aA) {
        return "".concat(aA == null ? void 0 : aA.value, " ").concat(aA.left, "%");
      }), oA = "".concat(C, "(").concat(v, ", ").concat(J.join(", "), ")");
      M(ue(ue({}, R), {
        gradient: oA
      })), a(oA);
    }, $ = function(iA, eA) {
      var J = m == null ? void 0 : m.filter(function(aA) {
        return !Et(aA.value);
      }), oA = xC([
        {
          value: iA.toUpperCase(),
          left: eA ?? p
        }
      ], J, true);
      k(oA);
    }, V = function(iA) {
      U ? $(iA) : (M(ue(ue({}, R), {
        color: iA
      })), a(iA));
    }, Y = function() {
      if ((m == null ? void 0 : m.length) > 2) {
        var iA = m == null ? void 0 : m.map(function(J, oA) {
          return ue(ue({}, J), {
            value: oA === I - 1 ? fi(J) : cn(J)
          });
        }), eA = iA == null ? void 0 : iA.filter(function(J, oA) {
          return oA !== I;
        });
        k(eA);
      }
    }, dA = {
      hc: j,
      setHc: nA,
      value: o,
      colors: m,
      config: Q,
      degrees: w,
      onChange: a,
      previous: R,
      inputType: D,
      tinyColor: z,
      isDarkMode: l,
      isGradient: U,
      squareWidth: s,
      hideOpacity: c,
      currentLeft: p,
      deletePoint: Y,
      showHexAlpha: d,
      squareHeight: u,
      setInputType: K,
      gradientType: C,
      handleChange: V,
      currentColor: x,
      selectedColor: I,
      defaultStyles: g,
      handleGradient: $,
      pickerIdSuffix: B,
      createGradientStr: k
    };
    return H.createElement(Cd.Provider, {
      value: dA
    }, i);
  }
  function bA() {
    var A = h.useContext(Cd);
    if (!A) throw new Error("usePicker has to be used within <PickerContext.Provider>");
    return A;
  }
  var yn = {
    barSize: 18,
    crossSize: 18,
    defaultColor: "rgba(175, 51, 242, 1)",
    defaultGradient: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"
  }, HC = function(A, e) {
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
  }, TC = function(A, e, t, r) {
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
  }, LC = function(A, e, t, r) {
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
  }, kC = function(A, e, t, r) {
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
  }, Bo = function() {
    return Bo = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, Bo.apply(this, arguments);
  }, RC = function() {
    var A = h.useRef(null), e = bA(), t = e.config, r = e.handleChange, n = e.squareWidth, o = e.hc, i = e.setHc, a = e.pickerIdSuffix, l = h.useState(false), s = l[0], c = l[1], d = t.barSize;
    HC(A, n);
    var u = function() {
      c(false);
    }, f = function() {
      c(true);
    }, g = function(m) {
      var F = ur(m, d) * 3.6, w = ne({
        h: F,
        s: o == null ? void 0 : o.s,
        v: o == null ? void 0 : o.v
      }), v = w.toRgb(), U = v.r, C = v.g, S = v.b;
      r("rgba(".concat(U, ", ").concat(C, ", ").concat(S, ", ").concat(o.a, ")")), i(Bo(Bo({}, o), {
        h: F
      }));
    }, B = function(m) {
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
        return B(m);
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
  function OC(A, e, t) {
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
  var KC = function(A) {
    var e = A.c, t = A.m, r = A.y, n = A.k, o = 255 * (1 - e) * (1 - n), i = 255 * (1 - t) * (1 - n), a = 255 * (1 - r) * (1 - n);
    return {
      r: o,
      g: i,
      b: a
    };
  }, MC = function(A) {
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
      var B = cr(parseFloat(g.target.value), 0, o);
      d(B), r(B);
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
  }, DC = function(A) {
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
    }, B = function() {
      s("");
    }, Q = function(v) {
      var U = ne(v.target.value);
      if (f(v.target.value), U.isValid()) {
        var C = U.toRgb(), S = C.r, x = C.g, I = C.b, p = "rgba(".concat(S, ", ").concat(x, ", ").concat(I, ", ").concat(e, ")");
        n(p);
      }
    }, m = r ? "".concat(u).concat(MC(e)) : u, F = r ? "HEXA" : "HEX", w = r ? 88 : 76;
    return H.createElement("div", {
      style: {
        width: w,
        flexShrink: 0
      },
      id: "rbgcp-hex-input-wrapper".concat(i)
    }, H.createElement("input", {
      onBlur: B,
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
  }, PC = function(A) {
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
  }, _C = function(A) {
    var e = A.hc, t = A.setHc, r = A.tinyColor, n = A.hideOpacity, o = A.handleChange, i = A.defaultStyles, a = A.pickerIdSuffix, l = r.toHsl(), s = l.s, c = l.l, d = function(f, g, B) {
      var Q = ne({
        h: f,
        s: g,
        l: B
      }).toRgb(), m = Q.r, F = Q.g, w = Q.b;
      o("rgba(".concat(m, ", ").concat(F, ", ").concat(w, ", ").concat(e == null ? void 0 : e.a, ")")), t(Se(Se({}, e), {
        h: f
      }));
    }, u = function(f) {
      var g = ne(f).toRgb(), B = g.r, Q = g.g, m = g.b;
      o("rgba(".concat(B, ", ").concat(Q, ", ").concat(m, ", ").concat(e == null ? void 0 : e.a, ")"));
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
  }, NC = function(A) {
    var e = A.hc, t = A.setHc, r = A.hideOpacity, n = A.handleChange, o = A.defaultStyles, i = A.pickerIdSuffix, a = function(s, c, d) {
      var u = ne({
        h: s,
        s: c,
        v: d
      }).toRgb(), f = u.r, g = u.g, B = u.b;
      n("rgba(".concat(f, ", ").concat(g, ", ").concat(B, ", ").concat(e == null ? void 0 : e.a, ")")), t(Se(Se({}, e), {
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
  }, GC = function(A) {
    var e = A.hc, t = A.hideOpacity, r = A.handleChange, n = A.defaultStyles, o = A.pickerIdSuffix, i = OC(e == null ? void 0 : e.r, e == null ? void 0 : e.g, e == null ? void 0 : e.b), a = i.c, l = i.m, s = i.y, c = i.k, d = function(u) {
      var f = KC(u), g = f.r, B = f.g, Q = f.b;
      r("rgba(".concat(g, ", ").concat(B, ", ").concat(Q, ", ").concat(e == null ? void 0 : e.a, ")"));
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
  }, VC = function() {
    var A = bA(), e = A.hc, t = A.setHc, r = A.inputType, n = A.tinyColor, o = A.hideOpacity, i = A.showHexAlpha, a = A.handleChange, l = A.defaultStyles, s = A.pickerIdSuffix;
    return H.createElement("div", {
      style: Se({
        columnGap: 6,
        paddingTop: 14,
        display: "flex",
        justifyContent: "space-between"
      }, l.rbgcpInputsWrap),
      id: "rbgcp-inputs-wrap".concat(s)
    }, r !== "cmyk" && H.createElement(DC, {
      opacity: e == null ? void 0 : e.a,
      tinyColor: n,
      showHexAlpha: i,
      handleChange: a,
      defaultStyles: l,
      pickerIdSuffix: s
    }), r === "hsl" && H.createElement(_C, {
      hc: e,
      setHc: t,
      tinyColor: n,
      hideOpacity: o,
      handleChange: a,
      defaultStyles: l,
      pickerIdSuffix: s
    }), r === "rgb" && H.createElement(PC, {
      hc: e,
      hideOpacity: o,
      handleChange: a,
      defaultStyles: l,
      pickerIdSuffix: s
    }), r === "hsv" && H.createElement(NC, {
      hc: e,
      setHc: t,
      hideOpacity: o,
      handleChange: a,
      defaultStyles: l,
      pickerIdSuffix: s
    }), r === "cmyk" && H.createElement(GC, {
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
  }, $C = function(A, e, t, r) {
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
  }, wd = "Expected a function", jl = NaN, WC = "[object Symbol]", zC = /^\s+|\s+$/g, jC = /^[-+]0x[0-9a-f]+$/i, XC = /^0b[01]+$/i, JC = /^0o[0-7]+$/i, YC = parseInt, ZC = typeof fn == "object" && fn && fn.Object === Object && fn, qC = typeof self == "object" && self && self.Object === Object && self, Aw = ZC || qC || Function("return this")(), ew = Object.prototype, tw = ew.toString, rw = Math.max, nw = Math.min, ki = function() {
    return Aw.Date.now();
  };
  function ow(A, e, t) {
    var r, n, o, i, a, l, s = 0, c = false, d = false, u = true;
    if (typeof A != "function") throw new TypeError(wd);
    e = Xl(e) || 0, ho(t) && (c = !!t.leading, d = "maxWait" in t, o = d ? rw(Xl(t.maxWait) || 0, e) : o, u = "trailing" in t ? !!t.trailing : u);
    function f(C) {
      var S = r, x = n;
      return r = n = void 0, s = C, i = A.apply(x, S), i;
    }
    function g(C) {
      return s = C, a = setTimeout(m, e), c ? f(C) : i;
    }
    function B(C) {
      var S = C - l, x = C - s, I = e - S;
      return d ? nw(I, o - x) : I;
    }
    function Q(C) {
      var S = C - l, x = C - s;
      return l === void 0 || S >= e || S < 0 || d && x >= o;
    }
    function m() {
      var C = ki();
      if (Q(C)) return F(C);
      a = setTimeout(m, B(C));
    }
    function F(C) {
      return a = void 0, u && r ? f(C) : (r = n = void 0, i);
    }
    function w() {
      a !== void 0 && clearTimeout(a), s = 0, r = l = n = a = void 0;
    }
    function v() {
      return a === void 0 ? i : F(ki());
    }
    function U() {
      var C = ki(), S = Q(C);
      if (r = arguments, n = this, l = C, S) {
        if (a === void 0) return g(l);
        if (d) return a = setTimeout(m, e), f(l);
      }
      return a === void 0 && (a = setTimeout(m, e)), i;
    }
    return U.cancel = w, U.flush = v, U;
  }
  function iw(A, e, t) {
    var r = true, n = true;
    if (typeof A != "function") throw new TypeError(wd);
    return ho(t) && (r = "leading" in t ? !!t.leading : r, n = "trailing" in t ? !!t.trailing : n), ow(A, e, {
      leading: r,
      maxWait: e,
      trailing: n
    });
  }
  function ho(A) {
    var e = typeof A;
    return !!A && (e == "object" || e == "function");
  }
  function aw(A) {
    return !!A && typeof A == "object";
  }
  function sw(A) {
    return typeof A == "symbol" || aw(A) && tw.call(A) == WC;
  }
  function Xl(A) {
    if (typeof A == "number") return A;
    if (sw(A)) return jl;
    if (ho(A)) {
      var e = typeof A.valueOf == "function" ? A.valueOf() : A;
      A = ho(e) ? e + "" : e;
    }
    if (typeof A != "string") return A === 0 ? A : +A;
    A = A.replace(zC, "");
    var t = XC.test(A);
    return t || JC.test(A) ? YC(A.slice(2), t ? 2 : 8) : jC.test(A) ? jl : +A;
  }
  var lw = iw;
  const cw = Za(lw);
  var St = function() {
    return St = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, St.apply(this, arguments);
  }, uw = function() {
    var A, e, t = bA(), r = t.hc, n = t.config, o = t.squareWidth, i = t.squareHeight, a = t.handleChange, l = t.defaultStyles, s = t.pickerIdSuffix, c = n.crossSize, d = h.useState(false), u = d[0], f = d[1], g = h.useRef(null), B = yC(r == null ? void 0 : r.s, (r == null ? void 0 : r.v) * 100, o, i, c), Q = B[0], m = B[1], F = h.useState({
      x: Q,
      y: m
    }), w = F[0], v = F[1];
    $C(g, r == null ? void 0 : r.h, o, i), h.useEffect(function() {
      u || v({
        x: (r == null ? void 0 : r.v) === 0 ? w.x : Q,
        y: m
      });
    }, [
      Q,
      m
    ]);
    var U = function(T) {
      var D = cw(function() {
        var K = bC(T, c), N = K[0], R = K[1];
        if (N && R) {
          var M = Math.min(N + c / 2, o - 1), z = Math.min(R + c / 2, i - 1), rA = M / o * 100, P = 100 - z / i * 100;
          v({
            x: P === 0 ? w == null ? void 0 : w.x : N,
            y: R
          });
          var X = ne("hsva(".concat(r == null ? void 0 : r.h, ", ").concat(rA, "%, ").concat(P, "%, ").concat(r == null ? void 0 : r.a, ")"));
          a(X.toRgbString());
        }
      }, 250);
      D();
    }, C = function() {
      f(false);
    }, S = function(T) {
      u && U(T);
    }, x = function(T) {
      u || U(T);
    }, I = function() {
      f(true);
    }, p = function(T) {
      f(true), U(T);
    };
    return h.useEffect(function() {
      var T = function() {
        C();
      };
      return window.addEventListener("mouseup", T), function() {
        window.removeEventListener("mouseup", T);
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
      onMouseDown: p,
      onTouchStart: p,
      onMouseMove: function(T) {
        return S(T);
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
      onMouseDown: I,
      id: "rbgcp-square-handle".concat(s)
    }), H.createElement("div", {
      style: St(St({}, l.rbgcpCanvasWrapper), {
        height: i
      }),
      id: "rbgcp-square-canvas-wrapper".concat(s),
      onClick: function(T) {
        return x(T);
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
  }, dw = function() {
    var A = bA(), e = A.config, t = A.hc, r = t === void 0 ? {} : t, n = A.squareWidth, o = A.handleChange, i = A.defaultStyles, a = A.pickerIdSuffix, l = h.useState(false), s = l[0], c = l[1], d = r.r, u = r.g, f = r.b, g = "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(".concat(d, ",").concat(u, ",").concat(f, ",.5) 100%)"), B = e.barSize, Q = function() {
      c(false);
    }, m = function() {
      c(true);
    }, F = function(C) {
      var S = ur(C, B) / 100, x = "rgba(".concat(d, ", ").concat(u, ", ").concat(f, ", ").concat(S, ")");
      o(x);
    }, w = function(C) {
      s && F(C);
    }, v = function(C) {
      s || F(C);
    }, U = n - 18;
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
        left: U * (r == null ? void 0 : r.a),
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
  }, fw = {
    CONTROLS: {
      SOLID: "Solid",
      GRADIENT: "Gradient"
    }
  }, gw = [
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
  ], pw = function(A) {
    var e = A.presets, t = e === void 0 ? [] : e, r = bA(), n = r.value, o = r.onChange, i = r.isDarkMode, a = r.squareWidth, l = r.handleChange, s = r.pickerIdSuffix, c = function() {
      return (t == null ? void 0 : t.length) > 0 ? t == null ? void 0 : t.slice(0, 18) : gw;
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
  }, tA = function() {
    return tA = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, tA.apply(this, arguments);
  }, Bw = function() {
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
      style: tA(tA({}, e), A.rbgcpControlIcon),
      points: "17.96 4.31 2.04 4.3 3.75 4.3 4.81 17.29 5.16 17.96 5.74 18.47 6.59 18.62 13.64 18.62 14.52 18.32 15.07 17.68 15.29 17.12 16.28 4.3 12.87 4.3 12.87 2.38 12.48 1.75 11.83 1.46 8.4 1.46 7.64 1.68 7.26 2.21 7.16 2.52 7.17 4.23"
    }));
  }, hw = function(A) {
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
      style: tA(tA(tA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "0.9 12.73 0.9 19.1 7.27 19.1 0.9 19.1 19.1 0.9 12.73 0.9 19.1 0.9 19.1 7.27"
    }));
  }, mw = function(A) {
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
      style: tA(tA(tA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      cx: "10",
      cy: "10",
      r: "9"
    }), H.createElement("circle", {
      style: tA(tA(tA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      cx: "10",
      cy: "10",
      r: "5"
    }));
  }, Cw = function(A) {
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
      style: tA(tA(tA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "3.74 2.75 3.74 12.69 0.9 12.71 6.59 12.71"
    }), H.createElement("line", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: tA(tA(tA({}, o), t.rbgcpControlIcon), r && {
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
      style: tA(tA(tA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "10.1 17.25 10.1 7.31 12.95 7.29 7.26 7.29"
    }), H.createElement("line", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: tA(tA(tA({}, o), t.rbgcpControlIcon), r && {
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
      style: tA(tA(tA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "16.26 2.75 16.26 12.69 13.41 12.71 19.1 12.71"
    }), H.createElement("line", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: tA(tA(tA({}, o), t.rbgcpControlIcon), r && {
        stroke: r,
        fill: r
      }),
      x1: "16.26",
      y1: "17.26",
      x2: "16.26",
      y2: "15.21"
    }));
  }, ww = function(A) {
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
      style: tA(tA(tA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      d: "M6.35,2.72a4.85,4.85,0,0,1,1.86.16,7.94,7.94,0,0,1,.88.43,3.66,3.66,0,0,0,.85.49c.25,0,.58-.27.81-.39A8.25,8.25,0,0,1,11.7,3a4,4,0,0,1,1.79-.23,3.21,3.21,0,0,0-1.34.09,6.39,6.39,0,0,0-1.47.63c-.45.25-.7.3-.7.86s0,1.18,0,1.78c0,1.3,0,2.61,0,3.92h0v5.63a2.46,2.46,0,0,1,0,.47c-.07.28-.43.42-.7.57a5.29,5.29,0,0,1-2.94.61A9.3,9.3,0,0,0,8,17.15l1.09-.37.89-.52c.06,0,.48.21.56.25.32.14.64.27,1,.38a8.54,8.54,0,0,0,2.12.4"
    }), H.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: tA(tA(tA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      d: "M7.57,5.73C6,5.7,4.5,5.65,3,5.77a2.28,2.28,0,0,0-1.76.74A2.3,2.3,0,0,0,.94,7.83l0,3.82A4.73,4.73,0,0,0,1,12.9a1.64,1.64,0,0,0,.68,1,2.44,2.44,0,0,0,1,.27,25,25,0,0,0,4.74.09"
    }), H.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: tA(tA(tA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      d: "M12.43,14.32a44.12,44.12,0,0,0,4.6,0,2.24,2.24,0,0,0,1.76-.74,2.29,2.29,0,0,0,.27-1.32l0-3.81A4.81,4.81,0,0,0,19,7.15a1.62,1.62,0,0,0-.68-1,2.31,2.31,0,0,0-1-.28,26.8,26.8,0,0,0-4.74-.09"
    }));
  }, vw = function(A) {
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
      style: tA(tA({}, t.rbgcpControlIcon2), r && {
        fill: r
      }),
      cx: "9.36",
      cy: "5.07",
      r: "1.71"
    }), H.createElement("circle", {
      style: tA(tA({}, t.rbgcpControlIcon2), r && {
        fill: r
      }),
      cx: "13.93",
      cy: "6.91",
      r: "1.71"
    }), H.createElement("circle", {
      style: tA(tA({}, t.rbgcpControlIcon2), r && {
        fill: r
      }),
      cx: "5.8",
      cy: "7.55",
      r: "1.71"
    }), H.createElement("circle", {
      style: tA(tA({}, t.rbgcpControlIcon2), r && {
        fill: r
      }),
      cx: "5.45",
      cy: "12.04",
      r: "1.71"
    }), H.createElement("path", {
      style: tA(tA(tA(tA({}, n), t.rbgcpControlIcon), t.rbgcpControlIcon2), r && {
        fill: r,
        stroke: r
      }),
      d: "M19.1,10c0,3.58-2.12,2.94-4.06,2.35-1.15-.34-2.24-.67-2.77-.08-.68.78-.54,2.07-.39,3.33.2,1.79.39,3.5-1.88,3.5A9.1,9.1,0,1,1,19.1,10ZM10,18c.7,0,.74-.19.75-.2a2.67,2.67,0,0,0,.07-1.27c0-.19,0-.42-.06-.67-.06-.53-.13-1.15-.14-1.67a3.82,3.82,0,0,1,.8-2.63,2.14,2.14,0,0,1,1.45-.7,4.36,4.36,0,0,1,1.32.12c.39.08.8.21,1.16.32h0c.39.12.74.23,1.08.3.74.17,1,.1,1.13,0S18,11.32,18,10a8,8,0,1,0-8,8Z"
    }));
  }, yw = function(A) {
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
      style: tA(tA(tA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "13.86 2.01 1.7 16.99 18.77 16.99"
    }), H.createElement("polyline", {
      strokeLinecap: "round",
      style: tA(tA(tA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "10.96 16.38 10.96 16.38 10.74 15.7 10.44 14.97 10.06 14.21 9.72 13.63 9.21 12.89 8.85 12.44 8.41 11.95 7.91 11.45 7.51 11.1"
    }));
  }, Qw = function() {
    var A = bA().defaultStyles;
    return H.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 20,
        marginRight: 1
      }
    }, H.createElement("path", {
      style: tA({}, A.rbgcpControlIcon2),
      d: "M2.39,8c-.63,0-1,.21-1,.63A.49.49,0,0,0,1.67,9a6.48,6.48,0,0,0,1.11.43A3,3,0,0,1,4,10.09a1.47,1.47,0,0,1,.35,1.09,1.75,1.75,0,0,1-.57,1.42,2.21,2.21,0,0,1-1.48.48,8.32,8.32,0,0,1-1.68-.21l-.31-.06.12-.94a13.7,13.7,0,0,0,1.8.16c.61,0,.92-.26.92-.77a.52.52,0,0,0-.21-.44,3.13,3.13,0,0,0-.85-.34A3.32,3.32,0,0,1,.66,9.79a1.43,1.43,0,0,1-.42-1.1A1.6,1.6,0,0,1,.78,7.36a2.32,2.32,0,0,1,1.49-.44,10.46,10.46,0,0,1,1.64.17l.32.07-.1.95C3.31,8,2.73,8,2.39,8Z"
    }), H.createElement("path", {
      style: tA({}, A.rbgcpControlIcon2),
      d: "M4.79,8.09V7H9.16V8.09H7.59V13H6.38V8.09Z"
    }), H.createElement("path", {
      style: tA({}, A.rbgcpControlIcon2),
      d: "M14,12.34a2.25,2.25,0,0,1-1.91.74,2.24,2.24,0,0,1-1.91-.74A3.85,3.85,0,0,1,9.61,10a4,4,0,0,1,.56-2.34,2.2,2.2,0,0,1,1.91-.77A2.21,2.21,0,0,1,14,7.69,4,4,0,0,1,14.55,10,3.85,3.85,0,0,1,14,12.34Zm-2.88-.77a1,1,0,0,0,1,.46,1,1,0,0,0,1-.46A3.25,3.25,0,0,0,13.3,10,3.45,3.45,0,0,0,13,8.46a1,1,0,0,0-1-.49,1,1,0,0,0-1,.49A3.43,3.43,0,0,0,10.85,10,3.38,3.38,0,0,0,11.11,11.57Z"
    }), H.createElement("path", {
      style: tA({}, A.rbgcpControlIcon2),
      d: "M17.77,11.24h-1V13H15.58V7h2.19a1.85,1.85,0,0,1,2.11,2.07,2.21,2.21,0,0,1-.54,1.6A2.07,2.07,0,0,1,17.77,11.24Zm-1-1h1c.6,0,.9-.37.9-1.12a1.18,1.18,0,0,0-.22-.79.88.88,0,0,0-.68-.24h-1Z"
    }));
  }, bw = function(A) {
    var e, t = A.children, r = "id" + Math.random().toString(16).slice(2), n = h.useRef((e = document.getElementById(r)) !== null && e !== void 0 ? e : document.createElement("div")), o = h.useState(!n.current.parentElement)[0];
    return h.useEffect(function() {
      var i = n.current;
      return o && (n.current.id = r, document.body.appendChild(n.current)), function() {
        o && i.parentElement && i.parentElement.removeChild(i);
      };
    }, [
      r
    ]), Is.createPortal(t, n.current);
  };
  const Fw = h.memo(bw);
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
  function Qn(A, e, t) {
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
  })(), gi = function(A, e) {
    return ot.fromClientRect(A, e.getBoundingClientRect());
  }, Uw = function(A) {
    var e = A.body, t = A.documentElement;
    if (!e || !t) throw new Error("Unable to get document size");
    var r = Math.max(Math.max(e.scrollWidth, t.scrollWidth), Math.max(e.offsetWidth, t.offsetWidth), Math.max(e.clientWidth, t.clientWidth)), n = Math.max(Math.max(e.scrollHeight, t.scrollHeight), Math.max(e.offsetHeight, t.offsetHeight), Math.max(e.clientHeight, t.clientHeight));
    return new ot(0, 0, r, n);
  }, pi = function(A) {
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
  }, Jl = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ew = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (var bn = 0; bn < Jl.length; bn++) Ew[Jl.charCodeAt(bn)] = bn;
  var Yl = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Hr = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (var Fn = 0; Fn < Yl.length; Fn++) Hr[Yl.charCodeAt(Fn)] = Fn;
  var Sw = function(A) {
    var e = A.length * 0.75, t = A.length, r, n = 0, o, i, a, l;
    A[A.length - 1] === "=" && (e--, A[A.length - 2] === "=" && e--);
    var s = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(e) : new Array(e), c = Array.isArray(s) ? s : new Uint8Array(s);
    for (r = 0; r < t; r += 4) o = Hr[A.charCodeAt(r)], i = Hr[A.charCodeAt(r + 1)], a = Hr[A.charCodeAt(r + 2)], l = Hr[A.charCodeAt(r + 3)], c[n++] = o << 2 | i >> 4, c[n++] = (i & 15) << 4 | a >> 2, c[n++] = (a & 3) << 6 | l & 63;
    return s;
  }, xw = function(A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 2) t.push(A[r + 1] << 8 | A[r]);
    return t;
  }, Iw = function(A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 4) t.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]);
    return t;
  }, Rt = 5, _s = 11, Ri = 2, Hw = _s - Rt, vd = 65536 >> Rt, Tw = 1 << Rt, Oi = Tw - 1, Lw = 1024 >> Rt, kw = vd + Lw, Rw = kw, Ow = 32, Kw = Rw + Ow, Mw = 65536 >> _s, Dw = 1 << Hw, Pw = Dw - 1, Zl = function(A, e, t) {
    return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t));
  }, _w = function(A, e, t) {
    return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t));
  }, Nw = function(A, e) {
    var t = Sw(A), r = Array.isArray(t) ? Iw(t) : new Uint32Array(t), n = Array.isArray(t) ? xw(t) : new Uint16Array(t), o = 24, i = Zl(n, o / 2, r[4] / 2), a = r[5] === 2 ? Zl(n, (o + r[4]) / 2) : _w(r, Math.ceil((o + r[4]) / 4));
    return new Gw(r[0], r[1], r[2], r[3], i, a);
  }, Gw = (function() {
    function A(e, t, r, n, o, i) {
      this.initialValue = e, this.errorValue = t, this.highStart = r, this.highValueIndex = n, this.index = o, this.data = i;
    }
    return A.prototype.get = function(e) {
      var t;
      if (e >= 0) {
        if (e < 55296 || e > 56319 && e <= 65535) return t = this.index[e >> Rt], t = (t << Ri) + (e & Oi), this.data[t];
        if (e <= 65535) return t = this.index[vd + (e - 55296 >> Rt)], t = (t << Ri) + (e & Oi), this.data[t];
        if (e < this.highStart) return t = Kw - Mw + (e >> _s), t = this.index[t], t += e >> Rt & Pw, t = this.index[t], t = (t << Ri) + (e & Oi), this.data[t];
        if (e <= 1114111) return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, A;
  })(), ql = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Vw = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (var Un = 0; Un < ql.length; Un++) Vw[ql.charCodeAt(Un)] = Un;
  var $w = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", Ac = 50, Ww = 1, yd = 2, Qd = 3, zw = 4, jw = 5, ec = 7, bd = 8, tc = 9, dt = 10, Ia = 11, rc = 12, Ha = 13, Xw = 14, Tr = 15, Ta = 16, En = 17, br = 18, Jw = 19, nc = 20, La = 21, Fr = 22, Ki = 23, $t = 24, he = 25, Lr = 26, kr = 27, Wt = 28, Yw = 29, xt = 30, Zw = 31, Sn = 32, xn = 33, ka = 34, Ra = 35, Oa = 36, Yr = 37, Ka = 38, eo = 39, to = 40, Mi = 41, Fd = 42, qw = 43, Av = [
    9001,
    65288
  ], Ud = "!", hA = "\xD7", In = "\xF7", Ma = Nw($w), Ze = [
    xt,
    Oa
  ], Da = [
    Ww,
    yd,
    Qd,
    jw
  ], Ed = [
    dt,
    bd
  ], oc = [
    kr,
    Lr
  ], ev = Da.concat(Ed), ic = [
    Ka,
    eo,
    to,
    ka,
    Ra
  ], tv = [
    Tr,
    Ha
  ], rv = function(A, e) {
    e === void 0 && (e = "strict");
    var t = [], r = [], n = [];
    return A.forEach(function(o, i) {
      var a = Ma.get(o);
      if (a > Ac ? (n.push(true), a -= Ac) : n.push(false), [
        "normal",
        "auto",
        "loose"
      ].indexOf(e) !== -1 && [
        8208,
        8211,
        12316,
        12448
      ].indexOf(o) !== -1) return r.push(i), t.push(Ta);
      if (a === zw || a === Ia) {
        if (i === 0) return r.push(i), t.push(xt);
        var l = t[i - 1];
        return ev.indexOf(l) === -1 ? (r.push(r[i - 1]), t.push(l)) : (r.push(i), t.push(xt));
      }
      if (r.push(i), a === Zw) return t.push(e === "strict" ? La : Yr);
      if (a === Fd || a === Yw) return t.push(xt);
      if (a === qw) return o >= 131072 && o <= 196605 || o >= 196608 && o <= 262141 ? t.push(Yr) : t.push(xt);
      t.push(a);
    }), [
      r,
      t,
      n
    ];
  }, Di = function(A, e, t, r) {
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
  }, ac = function(A, e) {
    for (var t = A; t >= 0; ) {
      var r = e[t];
      if (r === dt) t--;
      else return r;
    }
    return 0;
  }, nv = function(A, e, t, r, n) {
    if (t[r] === 0) return hA;
    var o = r - 1;
    if (Array.isArray(n) && n[o] === true) return hA;
    var i = o - 1, a = o + 1, l = e[o], s = i >= 0 ? e[i] : 0, c = e[a];
    if (l === yd && c === Qd) return hA;
    if (Da.indexOf(l) !== -1) return Ud;
    if (Da.indexOf(c) !== -1 || Ed.indexOf(c) !== -1) return hA;
    if (ac(o, e) === bd) return In;
    if (Ma.get(A[o]) === Ia || (l === Sn || l === xn) && Ma.get(A[a]) === Ia || l === ec || c === ec || l === tc || [
      dt,
      Ha,
      Tr
    ].indexOf(l) === -1 && c === tc || [
      En,
      br,
      Jw,
      $t,
      Wt
    ].indexOf(c) !== -1 || ac(o, e) === Fr || Di(Ki, Fr, o, e) || Di([
      En,
      br
    ], La, o, e) || Di(rc, rc, o, e)) return hA;
    if (l === dt) return In;
    if (l === Ki || c === Ki) return hA;
    if (c === Ta || l === Ta) return In;
    if ([
      Ha,
      Tr,
      La
    ].indexOf(c) !== -1 || l === Xw || s === Oa && tv.indexOf(l) !== -1 || l === Wt && c === Oa || c === nc || Ze.indexOf(c) !== -1 && l === he || Ze.indexOf(l) !== -1 && c === he || l === kr && [
      Yr,
      Sn,
      xn
    ].indexOf(c) !== -1 || [
      Yr,
      Sn,
      xn
    ].indexOf(l) !== -1 && c === Lr || Ze.indexOf(l) !== -1 && oc.indexOf(c) !== -1 || oc.indexOf(l) !== -1 && Ze.indexOf(c) !== -1 || [
      kr,
      Lr
    ].indexOf(l) !== -1 && (c === he || [
      Fr,
      Tr
    ].indexOf(c) !== -1 && e[a + 1] === he) || [
      Fr,
      Tr
    ].indexOf(l) !== -1 && c === he || l === he && [
      he,
      Wt,
      $t
    ].indexOf(c) !== -1) return hA;
    if ([
      he,
      Wt,
      $t,
      En,
      br
    ].indexOf(c) !== -1) for (var d = o; d >= 0; ) {
      var u = e[d];
      if (u === he) return hA;
      if ([
        Wt,
        $t
      ].indexOf(u) !== -1) d--;
      else break;
    }
    if ([
      kr,
      Lr
    ].indexOf(c) !== -1) for (var d = [
      En,
      br
    ].indexOf(l) !== -1 ? i : o; d >= 0; ) {
      var u = e[d];
      if (u === he) return hA;
      if ([
        Wt,
        $t
      ].indexOf(u) !== -1) d--;
      else break;
    }
    if (Ka === l && [
      Ka,
      eo,
      ka,
      Ra
    ].indexOf(c) !== -1 || [
      eo,
      ka
    ].indexOf(l) !== -1 && [
      eo,
      to
    ].indexOf(c) !== -1 || [
      to,
      Ra
    ].indexOf(l) !== -1 && c === to || ic.indexOf(l) !== -1 && [
      nc,
      Lr
    ].indexOf(c) !== -1 || ic.indexOf(c) !== -1 && l === kr || Ze.indexOf(l) !== -1 && Ze.indexOf(c) !== -1 || l === $t && Ze.indexOf(c) !== -1 || Ze.concat(he).indexOf(l) !== -1 && c === Fr && Av.indexOf(A[a]) === -1 || Ze.concat(he).indexOf(c) !== -1 && l === br) return hA;
    if (l === Mi && c === Mi) {
      for (var f = t[o], g = 1; f > 0 && (f--, e[f] === Mi); ) g++;
      if (g % 2 !== 0) return hA;
    }
    return l === Sn && c === xn ? hA : In;
  }, ov = function(A, e) {
    e || (e = {
      lineBreak: "normal",
      wordBreak: "normal"
    });
    var t = rv(A, e.lineBreak), r = t[0], n = t[1], o = t[2];
    (e.wordBreak === "break-all" || e.wordBreak === "break-word") && (n = n.map(function(a) {
      return [
        he,
        xt,
        Fd
      ].indexOf(a) !== -1 ? Yr : a;
    }));
    var i = e.wordBreak === "keep-all" ? o.map(function(a, l) {
      return a && A[l] >= 19968 && A[l] <= 40959;
    }) : void 0;
    return [
      r,
      n,
      i
    ];
  }, iv = (function() {
    function A(e, t, r, n) {
      this.codePoints = e, this.required = t === Ud, this.start = r, this.end = n;
    }
    return A.prototype.slice = function() {
      return GA.apply(void 0, this.codePoints.slice(this.start, this.end));
    }, A;
  })(), av = function(A, e) {
    var t = pi(A), r = ov(t, e), n = r[0], o = r[1], i = r[2], a = t.length, l = 0, s = 0;
    return {
      next: function() {
        if (s >= a) return {
          done: true,
          value: null
        };
        for (var c = hA; s < a && (c = nv(t, o, n, ++s, i)) === hA; ) ;
        if (c !== hA || s === a) {
          var d = new iv(t, c, l, s);
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
  }, sv = 1, lv = 2, un = 4, sc = 8, mo = 10, lc = 47, _r = 92, cv = 9, uv = 32, Hn = 34, Ur = 61, dv = 35, fv = 36, gv = 37, Tn = 39, Ln = 40, Er = 41, pv = 95, fe = 45, Bv = 33, hv = 60, mv = 62, Cv = 64, wv = 91, vv = 93, yv = 61, Qv = 123, kn = 63, bv = 125, cc = 124, Fv = 126, Uv = 128, uc = 65533, Pi = 42, Lt = 43, Ev = 44, Sv = 58, xv = 59, Zr = 46, Iv = 0, Hv = 8, Tv = 11, Lv = 14, kv = 31, Rv = 127, Ke = -1, Sd = 48, xd = 97, Id = 101, Ov = 102, Kv = 117, Mv = 122, Hd = 65, Td = 69, Ld = 70, Dv = 85, Pv = 90, le = function(A) {
    return A >= Sd && A <= 57;
  }, _v = function(A) {
    return A >= 55296 && A <= 57343;
  }, zt = function(A) {
    return le(A) || A >= Hd && A <= Ld || A >= xd && A <= Ov;
  }, Nv = function(A) {
    return A >= xd && A <= Mv;
  }, Gv = function(A) {
    return A >= Hd && A <= Pv;
  }, Vv = function(A) {
    return Nv(A) || Gv(A);
  }, $v = function(A) {
    return A >= Uv;
  }, Rn = function(A) {
    return A === mo || A === cv || A === uv;
  }, Co = function(A) {
    return Vv(A) || $v(A) || A === pv;
  }, dc = function(A) {
    return Co(A) || le(A) || A === fe;
  }, Wv = function(A) {
    return A >= Iv && A <= Hv || A === Tv || A >= Lv && A <= kv || A === Rv;
  }, ut = function(A, e) {
    return A !== _r ? false : e !== mo;
  }, On = function(A, e, t) {
    return A === fe ? Co(e) || ut(e, t) : Co(A) ? true : !!(A === _r && ut(A, e));
  }, _i = function(A, e, t) {
    return A === Lt || A === fe ? le(e) ? true : e === Zr && le(t) : le(A === Zr ? e : A);
  }, zv = function(A) {
    var e = 0, t = 1;
    (A[e] === Lt || A[e] === fe) && (A[e] === fe && (t = -1), e++);
    for (var r = []; le(A[e]); ) r.push(A[e++]);
    var n = r.length ? parseInt(GA.apply(void 0, r), 10) : 0;
    A[e] === Zr && e++;
    for (var o = []; le(A[e]); ) o.push(A[e++]);
    var i = o.length, a = i ? parseInt(GA.apply(void 0, o), 10) : 0;
    (A[e] === Td || A[e] === Id) && e++;
    var l = 1;
    (A[e] === Lt || A[e] === fe) && (A[e] === fe && (l = -1), e++);
    for (var s = []; le(A[e]); ) s.push(A[e++]);
    var c = s.length ? parseInt(GA.apply(void 0, s), 10) : 0;
    return t * (n + a * Math.pow(10, -i)) * Math.pow(10, l * c);
  }, jv = {
    type: 2
  }, Xv = {
    type: 3
  }, Jv = {
    type: 4
  }, Yv = {
    type: 13
  }, Zv = {
    type: 8
  }, qv = {
    type: 21
  }, Ay = {
    type: 9
  }, ey = {
    type: 10
  }, ty = {
    type: 11
  }, ry = {
    type: 12
  }, ny = {
    type: 14
  }, Kn = {
    type: 23
  }, oy = {
    type: 1
  }, iy = {
    type: 25
  }, ay = {
    type: 24
  }, sy = {
    type: 26
  }, ly = {
    type: 27
  }, cy = {
    type: 28
  }, uy = {
    type: 29
  }, dy = {
    type: 31
  }, Pa = {
    type: 32
  }, kd = (function() {
    function A() {
      this._value = [];
    }
    return A.prototype.write = function(e) {
      this._value = this._value.concat(pi(e));
    }, A.prototype.read = function() {
      for (var e = [], t = this.consumeToken(); t !== Pa; ) e.push(t), t = this.consumeToken();
      return e;
    }, A.prototype.consumeToken = function() {
      var e = this.consumeCodePoint();
      switch (e) {
        case Hn:
          return this.consumeStringToken(Hn);
        case dv:
          var t = this.peekCodePoint(0), r = this.peekCodePoint(1), n = this.peekCodePoint(2);
          if (dc(t) || ut(r, n)) {
            var o = On(t, r, n) ? lv : sv, i = this.consumeName();
            return {
              type: 5,
              value: i,
              flags: o
            };
          }
          break;
        case fv:
          if (this.peekCodePoint(0) === Ur) return this.consumeCodePoint(), Yv;
          break;
        case Tn:
          return this.consumeStringToken(Tn);
        case Ln:
          return jv;
        case Er:
          return Xv;
        case Pi:
          if (this.peekCodePoint(0) === Ur) return this.consumeCodePoint(), ny;
          break;
        case Lt:
          if (_i(e, this.peekCodePoint(0), this.peekCodePoint(1))) return this.reconsumeCodePoint(e), this.consumeNumericToken();
          break;
        case Ev:
          return Jv;
        case fe:
          var a = e, l = this.peekCodePoint(0), s = this.peekCodePoint(1);
          if (_i(a, l, s)) return this.reconsumeCodePoint(e), this.consumeNumericToken();
          if (On(a, l, s)) return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
          if (l === fe && s === mv) return this.consumeCodePoint(), this.consumeCodePoint(), ay;
          break;
        case Zr:
          if (_i(e, this.peekCodePoint(0), this.peekCodePoint(1))) return this.reconsumeCodePoint(e), this.consumeNumericToken();
          break;
        case lc:
          if (this.peekCodePoint(0) === Pi) for (this.consumeCodePoint(); ; ) {
            var c = this.consumeCodePoint();
            if (c === Pi && (c = this.consumeCodePoint(), c === lc)) return this.consumeToken();
            if (c === Ke) return this.consumeToken();
          }
          break;
        case Sv:
          return sy;
        case xv:
          return ly;
        case hv:
          if (this.peekCodePoint(0) === Bv && this.peekCodePoint(1) === fe && this.peekCodePoint(2) === fe) return this.consumeCodePoint(), this.consumeCodePoint(), iy;
          break;
        case Cv:
          var d = this.peekCodePoint(0), u = this.peekCodePoint(1), f = this.peekCodePoint(2);
          if (On(d, u, f)) {
            var i = this.consumeName();
            return {
              type: 7,
              value: i
            };
          }
          break;
        case wv:
          return cy;
        case _r:
          if (ut(e, this.peekCodePoint(0))) return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
          break;
        case vv:
          return uy;
        case yv:
          if (this.peekCodePoint(0) === Ur) return this.consumeCodePoint(), Zv;
          break;
        case Qv:
          return ty;
        case bv:
          return ry;
        case Kv:
        case Dv:
          var g = this.peekCodePoint(0), B = this.peekCodePoint(1);
          return g === Lt && (zt(B) || B === kn) && (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
        case cc:
          if (this.peekCodePoint(0) === Ur) return this.consumeCodePoint(), Ay;
          if (this.peekCodePoint(0) === cc) return this.consumeCodePoint(), qv;
          break;
        case Fv:
          if (this.peekCodePoint(0) === Ur) return this.consumeCodePoint(), ey;
          break;
        case Ke:
          return Pa;
      }
      return Rn(e) ? (this.consumeWhiteSpace(), dy) : le(e) ? (this.reconsumeCodePoint(e), this.consumeNumericToken()) : Co(e) ? (this.reconsumeCodePoint(e), this.consumeIdentLikeToken()) : {
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
      for (var e = [], t = this.consumeCodePoint(); zt(t) && e.length < 6; ) e.push(t), t = this.consumeCodePoint();
      for (var r = false; t === kn && e.length < 6; ) e.push(t), t = this.consumeCodePoint(), r = true;
      if (r) {
        var n = parseInt(GA.apply(void 0, e.map(function(l) {
          return l === kn ? Sd : l;
        })), 16), o = parseInt(GA.apply(void 0, e.map(function(l) {
          return l === kn ? Ld : l;
        })), 16);
        return {
          type: 30,
          start: n,
          end: o
        };
      }
      var i = parseInt(GA.apply(void 0, e), 16);
      if (this.peekCodePoint(0) === fe && zt(this.peekCodePoint(1))) {
        this.consumeCodePoint(), t = this.consumeCodePoint();
        for (var a = []; zt(t) && a.length < 6; ) a.push(t), t = this.consumeCodePoint();
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
      return e.toLowerCase() === "url" && this.peekCodePoint(0) === Ln ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === Ln ? (this.consumeCodePoint(), {
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
      if (t === Tn || t === Hn) {
        var r = this.consumeStringToken(this.consumeCodePoint());
        return r.type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === Ke || this.peekCodePoint(0) === Er) ? (this.consumeCodePoint(), {
          type: 22,
          value: r.value
        }) : (this.consumeBadUrlRemnants(), Kn);
      }
      for (; ; ) {
        var n = this.consumeCodePoint();
        if (n === Ke || n === Er) return {
          type: 22,
          value: GA.apply(void 0, e)
        };
        if (Rn(n)) return this.consumeWhiteSpace(), this.peekCodePoint(0) === Ke || this.peekCodePoint(0) === Er ? (this.consumeCodePoint(), {
          type: 22,
          value: GA.apply(void 0, e)
        }) : (this.consumeBadUrlRemnants(), Kn);
        if (n === Hn || n === Tn || n === Ln || Wv(n)) return this.consumeBadUrlRemnants(), Kn;
        if (n === _r) if (ut(n, this.peekCodePoint(0))) e.push(this.consumeEscapedCodePoint());
        else return this.consumeBadUrlRemnants(), Kn;
        else e.push(n);
      }
    }, A.prototype.consumeWhiteSpace = function() {
      for (; Rn(this.peekCodePoint(0)); ) this.consumeCodePoint();
    }, A.prototype.consumeBadUrlRemnants = function() {
      for (; ; ) {
        var e = this.consumeCodePoint();
        if (e === Er || e === Ke) return;
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
        if (n === mo) return this._value.splice(0, r), oy;
        if (n === _r) {
          var o = this._value[r + 1];
          o !== Ke && o !== void 0 && (o === mo ? (t += this.consumeStringSlice(r), r = -1, this._value.shift()) : ut(n, o) && (t += this.consumeStringSlice(r), t += GA(this.consumeEscapedCodePoint()), r = -1));
        }
        r++;
      } while (true);
    }, A.prototype.consumeNumber = function() {
      var e = [], t = un, r = this.peekCodePoint(0);
      for ((r === Lt || r === fe) && e.push(this.consumeCodePoint()); le(this.peekCodePoint(0)); ) e.push(this.consumeCodePoint());
      r = this.peekCodePoint(0);
      var n = this.peekCodePoint(1);
      if (r === Zr && le(n)) for (e.push(this.consumeCodePoint(), this.consumeCodePoint()), t = sc; le(this.peekCodePoint(0)); ) e.push(this.consumeCodePoint());
      r = this.peekCodePoint(0), n = this.peekCodePoint(1);
      var o = this.peekCodePoint(2);
      if ((r === Td || r === Id) && ((n === Lt || n === fe) && le(o) || le(n))) for (e.push(this.consumeCodePoint(), this.consumeCodePoint()), t = sc; le(this.peekCodePoint(0)); ) e.push(this.consumeCodePoint());
      return [
        zv(e),
        t
      ];
    }, A.prototype.consumeNumericToken = function() {
      var e = this.consumeNumber(), t = e[0], r = e[1], n = this.peekCodePoint(0), o = this.peekCodePoint(1), i = this.peekCodePoint(2);
      if (On(n, o, i)) {
        var a = this.consumeName();
        return {
          type: 15,
          number: t,
          flags: r,
          unit: a
        };
      }
      return n === gv ? (this.consumeCodePoint(), {
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
      if (zt(e)) {
        for (var t = GA(e); zt(this.peekCodePoint(0)) && t.length < 6; ) t += GA(this.consumeCodePoint());
        Rn(this.peekCodePoint(0)) && this.consumeCodePoint();
        var r = parseInt(t, 16);
        return r === 0 || _v(r) || r > 1114111 ? uc : r;
      }
      return e === Ke ? uc : e;
    }, A.prototype.consumeName = function() {
      for (var e = ""; ; ) {
        var t = this.consumeCodePoint();
        if (dc(t)) e += GA(t);
        else if (ut(t, this.peekCodePoint(0))) e += GA(this.consumeEscapedCodePoint());
        else return this.reconsumeCodePoint(t), e;
      }
    }, A;
  })(), Rd = (function() {
    function A(e) {
      this._tokens = e;
    }
    return A.create = function(e) {
      var t = new kd();
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
        if (r.type === 32 || gy(r, e)) return t;
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
  })(), dn = function(A) {
    return A.type === 15;
  }, hr = function(A) {
    return A.type === 17;
  }, QA = function(A) {
    return A.type === 20;
  }, fy = function(A) {
    return A.type === 0;
  }, _a = function(A, e) {
    return QA(A) && A.value === e;
  }, Od = function(A) {
    return A.type !== 31;
  }, dr = function(A) {
    return A.type !== 31 && A.type !== 4;
  }, je = function(A) {
    var e = [], t = [];
    return A.forEach(function(r) {
      if (r.type === 4) {
        if (t.length === 0) throw new Error("Error parsing function args, zero tokens for arg");
        e.push(t), t = [];
        return;
      }
      r.type !== 31 && t.push(r);
    }), t.length && e.push(t), e;
  }, gy = function(A, e) {
    return e === 11 && A.type === 12 || e === 28 && A.type === 29 ? true : e === 2 && A.type === 3;
  }, vt = function(A) {
    return A.type === 17 || A.type === 15;
  }, WA = function(A) {
    return A.type === 16 || vt(A);
  }, Kd = function(A) {
    return A.length > 1 ? [
      A[0],
      A[1]
    ] : [
      A[0]
    ];
  }, oe = {
    type: 17,
    number: 0,
    flags: un
  }, Ns = {
    type: 16,
    number: 50,
    flags: un
  }, ft = {
    type: 16,
    number: 100,
    flags: un
  }, Rr = function(A, e, t) {
    var r = A[0], n = A[1];
    return [
      SA(r, e),
      SA(typeof n < "u" ? n : r, t)
    ];
  }, SA = function(A, e) {
    if (A.type === 16) return A.number / 100 * e;
    if (dn(A)) switch (A.unit) {
      case "rem":
      case "em":
        return 16 * A.number;
      default:
        return A.number;
    }
    return A.number;
  }, Md = "deg", Dd = "grad", Pd = "rad", _d = "turn", Bi = {
    name: "angle",
    parse: function(A, e) {
      if (e.type === 15) switch (e.unit) {
        case Md:
          return Math.PI * e.number / 180;
        case Dd:
          return Math.PI / 200 * e.number;
        case Pd:
          return e.number;
        case _d:
          return Math.PI * 2 * e.number;
      }
      throw new Error("Unsupported angle type");
    }
  }, Nd = function(A) {
    return A.type === 15 && (A.unit === Md || A.unit === Dd || A.unit === Pd || A.unit === _d);
  }, Gd = function(A) {
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
        var t = py[e.name];
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
  }, fc = function(A, e) {
    if (A.type === 17) return A.number;
    if (A.type === 16) {
      var t = e === 3 ? 1 : 255;
      return e === 3 ? A.number / 100 * t : Math.round(A.number / 100 * t);
    }
    return 0;
  }, gc = function(A, e) {
    var t = e.filter(dr);
    if (t.length === 3) {
      var r = t.map(fc), n = r[0], o = r[1], i = r[2];
      return gt(n, o, i, 1);
    }
    if (t.length === 4) {
      var a = t.map(fc), n = a[0], o = a[1], i = a[2], l = a[3];
      return gt(n, o, i, l);
    }
    return 0;
  };
  function Ni(A, e, t) {
    return t < 0 && (t += 1), t >= 1 && (t -= 1), t < 1 / 6 ? (e - A) * t * 6 + A : t < 1 / 2 ? e : t < 2 / 3 ? (e - A) * 6 * (2 / 3 - t) + A : A;
  }
  var pc = function(A, e) {
    var t = e.filter(dr), r = t[0], n = t[1], o = t[2], i = t[3], a = (r.type === 17 ? Ue(r.number) : Bi.parse(A, r)) / (Math.PI * 2), l = WA(n) ? n.number / 100 : 0, s = WA(o) ? o.number / 100 : 0, c = typeof i < "u" && WA(i) ? SA(i, 1) : 1;
    if (l === 0) return gt(s * 255, s * 255, s * 255, 1);
    var d = s <= 0.5 ? s * (l + 1) : s + l - s * l, u = s * 2 - d, f = Ni(u, d, a + 1 / 3), g = Ni(u, d, a), B = Ni(u, d, a - 1 / 3);
    return gt(f * 255, g * 255, B * 255, c);
  }, py = {
    hsl: pc,
    hsla: pc,
    rgb: gc,
    rgba: gc
  }, Nr = function(A, e) {
    return Bt.parse(A, Rd.create(e).parseComponentValue());
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
  }, By = {
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
  }, hy = {
    name: "background-color",
    initialValue: "transparent",
    prefix: false,
    type: 3,
    format: "color"
  }, hi = function(A, e) {
    var t = Bt.parse(A, e[0]), r = e[1];
    return r && WA(r) ? {
      color: t,
      stop: r
    } : {
      color: t,
      stop: null
    };
  }, Bc = function(A, e) {
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
    return A.map(function(B, Q) {
      var m = B.color;
      return {
        color: m,
        stop: Math.max(Math.min(1, n[Q] / e), 0)
      };
    });
  }, my = function(A, e, t) {
    var r = e / 2, n = t / 2, o = SA(A[0], e) - r, i = n - SA(A[1], t);
    return (Math.atan2(i, o) + Math.PI * 2) % (Math.PI * 2);
  }, Cy = function(A, e, t) {
    var r = typeof A == "number" ? A : my(A, e, t), n = Math.abs(e * Math.sin(r)) + Math.abs(t * Math.cos(r)), o = e / 2, i = t / 2, a = n / 2, l = Math.sin(r - Math.PI / 2) * a, s = Math.cos(r - Math.PI / 2) * a;
    return [
      n,
      o - s,
      o + s,
      i - l,
      i + l
    ];
  }, He = function(A, e) {
    return Math.sqrt(A * A + e * e);
  }, hc = function(A, e, t, r, n) {
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
  }, wy = function(A, e, t, r, n) {
    var o = 0, i = 0;
    switch (A.size) {
      case 0:
        A.shape === 0 ? o = i = Math.min(Math.abs(e), Math.abs(e - r), Math.abs(t), Math.abs(t - n)) : A.shape === 1 && (o = Math.min(Math.abs(e), Math.abs(e - r)), i = Math.min(Math.abs(t), Math.abs(t - n)));
        break;
      case 2:
        if (A.shape === 0) o = i = Math.min(He(e, t), He(e, t - n), He(e - r, t), He(e - r, t - n));
        else if (A.shape === 1) {
          var a = Math.min(Math.abs(t), Math.abs(t - n)) / Math.min(Math.abs(e), Math.abs(e - r)), l = hc(r, n, e, t, true), s = l[0], c = l[1];
          o = He(s - e, (c - t) / a), i = a * o;
        }
        break;
      case 1:
        A.shape === 0 ? o = i = Math.max(Math.abs(e), Math.abs(e - r), Math.abs(t), Math.abs(t - n)) : A.shape === 1 && (o = Math.max(Math.abs(e), Math.abs(e - r)), i = Math.max(Math.abs(t), Math.abs(t - n)));
        break;
      case 3:
        if (A.shape === 0) o = i = Math.max(He(e, t), He(e, t - n), He(e - r, t), He(e - r, t - n));
        else if (A.shape === 1) {
          var a = Math.max(Math.abs(t), Math.abs(t - n)) / Math.max(Math.abs(e), Math.abs(e - r)), d = hc(r, n, e, t, false), s = d[0], c = d[1];
          o = He(s - e, (c - t) / a), i = a * o;
        }
        break;
    }
    return Array.isArray(A.size) && (o = SA(A.size[0], r), i = A.size.length === 2 ? SA(A.size[1], n) : o), [
      o,
      i
    ];
  }, vy = function(A, e) {
    var t = Ue(180), r = [];
    return je(e).forEach(function(n, o) {
      if (o === 0) {
        var i = n[0];
        if (i.type === 20 && i.value === "to") {
          t = Gd(n);
          return;
        } else if (Nd(i)) {
          t = Bi.parse(A, i);
          return;
        }
      }
      var a = hi(A, n);
      r.push(a);
    }), {
      angle: t,
      stops: r,
      type: 1
    };
  }, Mn = function(A, e) {
    var t = Ue(180), r = [];
    return je(e).forEach(function(n, o) {
      if (o === 0) {
        var i = n[0];
        if (i.type === 20 && [
          "top",
          "left",
          "right",
          "bottom"
        ].indexOf(i.value) !== -1) {
          t = Gd(n);
          return;
        } else if (Nd(i)) {
          t = (Bi.parse(A, i) + Ue(270)) % Ue(360);
          return;
        }
      }
      var a = hi(A, n);
      r.push(a);
    }), {
      angle: t,
      stops: r,
      type: 1
    };
  }, yy = function(A, e) {
    var t = Ue(180), r = [], n = 1, o = 0, i = 3, a = [];
    return je(e).forEach(function(l, s) {
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
          var u = c.values.filter(dr);
          if (u.length === 2) {
            var d = Bt.parse(A, u[1]), f = u[0];
            hr(f) && r.push({
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
  }, Vd = "closest-side", $d = "farthest-side", Wd = "closest-corner", zd = "farthest-corner", jd = "circle", Xd = "ellipse", Jd = "cover", Yd = "contain", Qy = function(A, e) {
    var t = 0, r = 3, n = [], o = [];
    return je(e).forEach(function(i, a) {
      var l = true;
      if (a === 0) {
        var s = false;
        l = i.reduce(function(d, u) {
          if (s) if (QA(u)) switch (u.value) {
            case "center":
              return o.push(Ns), d;
            case "top":
            case "left":
              return o.push(oe), d;
            case "right":
            case "bottom":
              return o.push(ft), d;
          }
          else (WA(u) || vt(u)) && o.push(u);
          else if (QA(u)) switch (u.value) {
            case jd:
              return t = 0, false;
            case Xd:
              return t = 1, false;
            case "at":
              return s = true, false;
            case Vd:
              return r = 0, false;
            case Jd:
            case $d:
              return r = 1, false;
            case Yd:
            case Wd:
              return r = 2, false;
            case zd:
              return r = 3, false;
          }
          else if (vt(u) || WA(u)) return Array.isArray(r) || (r = []), r.push(u), false;
          return d;
        }, l);
      }
      if (l) {
        var c = hi(A, i);
        n.push(c);
      }
    }), {
      size: r,
      shape: t,
      stops: n,
      position: o,
      type: 2
    };
  }, Dn = function(A, e) {
    var t = 0, r = 3, n = [], o = [];
    return je(e).forEach(function(i, a) {
      var l = true;
      if (a === 0 ? l = i.reduce(function(c, d) {
        if (QA(d)) switch (d.value) {
          case "center":
            return o.push(Ns), false;
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
          case jd:
            return t = 0, false;
          case Xd:
            return t = 1, false;
          case Yd:
          case Vd:
            return r = 0, false;
          case $d:
            return r = 1, false;
          case Wd:
            return r = 2, false;
          case Jd:
          case zd:
            return r = 3, false;
        }
        else if (vt(d) || WA(d)) return Array.isArray(r) || (r = []), r.push(d), false;
        return c;
      }, l)), l) {
        var s = hi(A, i);
        n.push(s);
      }
    }), {
      size: r,
      shape: t,
      stops: n,
      position: o,
      type: 2
    };
  }, by = function(A) {
    return A.type === 1;
  }, Fy = function(A) {
    return A.type === 2;
  }, Gs = {
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
        var r = Zd[e.name];
        if (typeof r > "u") throw new Error('Attempting to parse an unsupported image function "' + e.name + '"');
        return r(A, e.values);
      }
      throw new Error("Unsupported image type " + e.type);
    }
  };
  function Uy(A) {
    return !(A.type === 20 && A.value === "none") && (A.type !== 18 || !!Zd[A.name]);
  }
  var Zd = {
    "linear-gradient": vy,
    "-moz-linear-gradient": Mn,
    "-ms-linear-gradient": Mn,
    "-o-linear-gradient": Mn,
    "-webkit-linear-gradient": Mn,
    "radial-gradient": Qy,
    "-moz-radial-gradient": Dn,
    "-ms-radial-gradient": Dn,
    "-o-radial-gradient": Dn,
    "-webkit-radial-gradient": Dn,
    "-webkit-gradient": yy
  }, Ey = {
    name: "background-image",
    initialValue: "none",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      if (e.length === 0) return [];
      var t = e[0];
      return t.type === 20 && t.value === "none" ? [] : e.filter(function(r) {
        return dr(r) && Uy(r);
      }).map(function(r) {
        return Gs.parse(A, r);
      });
    }
  }, Sy = {
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
  }, xy = {
    name: "background-position",
    initialValue: "0% 0%",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      return je(e).map(function(t) {
        return t.filter(WA);
      }).map(Kd);
    }
  }, Iy = {
    name: "background-repeat",
    initialValue: "repeat",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return je(e).map(function(t) {
        return t.filter(QA).map(function(r) {
          return r.value;
        }).join(" ");
      }).map(Hy);
    }
  }, Hy = function(A) {
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
  }, ir;
  (function(A) {
    A.AUTO = "auto", A.CONTAIN = "contain", A.COVER = "cover";
  })(ir || (ir = {}));
  var Ty = {
    name: "background-size",
    initialValue: "0",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return je(e).map(function(t) {
        return t.filter(Ly);
      });
    }
  }, Ly = function(A) {
    return QA(A) || WA(A);
  }, mi = function(A) {
    return {
      name: "border-" + A + "-color",
      initialValue: "transparent",
      prefix: false,
      type: 3,
      format: "color"
    };
  }, ky = mi("top"), Ry = mi("right"), Oy = mi("bottom"), Ky = mi("left"), Ci = function(A) {
    return {
      name: "border-radius-" + A,
      initialValue: "0 0",
      prefix: false,
      type: 1,
      parse: function(e, t) {
        return Kd(t.filter(WA));
      }
    };
  }, My = Ci("top-left"), Dy = Ci("top-right"), Py = Ci("bottom-right"), _y = Ci("bottom-left"), wi = function(A) {
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
  }, Ny = wi("top"), Gy = wi("right"), Vy = wi("bottom"), $y = wi("left"), vi = function(A) {
    return {
      name: "border-" + A + "-width",
      initialValue: "0",
      type: 0,
      prefix: false,
      parse: function(e, t) {
        return dn(t) ? t.number : 0;
      }
    };
  }, Wy = vi("top"), zy = vi("right"), jy = vi("bottom"), Xy = vi("left"), Jy = {
    name: "color",
    initialValue: "transparent",
    prefix: false,
    type: 3,
    format: "color"
  }, Yy = {
    name: "direction",
    initialValue: "ltr",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      return e === "rtl" ? 1 : 0;
    }
  }, Zy = {
    name: "display",
    initialValue: "inline-block",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return e.filter(QA).reduce(function(t, r) {
        return t | qy(r.value);
      }, 0);
    }
  }, qy = function(A) {
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
  }, AQ = {
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
  }, eQ = {
    name: "letter-spacing",
    initialValue: "0",
    prefix: false,
    type: 0,
    parse: function(A, e) {
      return e.type === 20 && e.value === "normal" ? 0 : e.type === 17 || e.type === 15 ? e.number : 0;
    }
  }, wo;
  (function(A) {
    A.NORMAL = "normal", A.STRICT = "strict";
  })(wo || (wo = {}));
  var tQ = {
    name: "line-break",
    initialValue: "normal",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      return e === "strict" ? wo.STRICT : wo.NORMAL;
    }
  }, rQ = {
    name: "line-height",
    initialValue: "normal",
    prefix: false,
    type: 4
  }, mc = function(A, e) {
    return QA(A) && A.value === "normal" ? 1.2 * e : A.type === 17 ? e * A.number : WA(A) ? SA(A, e) : e;
  }, nQ = {
    name: "list-style-image",
    initialValue: "none",
    type: 0,
    prefix: false,
    parse: function(A, e) {
      return e.type === 20 && e.value === "none" ? null : Gs.parse(A, e);
    }
  }, oQ = {
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
  }, yi = function(A) {
    return {
      name: "margin-" + A,
      initialValue: "0",
      prefix: false,
      type: 4
    };
  }, iQ = yi("top"), aQ = yi("right"), sQ = yi("bottom"), lQ = yi("left"), cQ = {
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
  }, uQ = {
    name: "overflow-wrap",
    initialValue: "normal",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      return e === "break-word" ? "break-word" : "normal";
    }
  }, Qi = function(A) {
    return {
      name: "padding-" + A,
      initialValue: "0",
      prefix: false,
      type: 3,
      format: "length-percentage"
    };
  }, dQ = Qi("top"), fQ = Qi("right"), gQ = Qi("bottom"), pQ = Qi("left"), BQ = {
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
  }, hQ = {
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
  }, mQ = {
    name: "text-shadow",
    initialValue: "none",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      return e.length === 1 && _a(e[0], "none") ? [] : je(e).map(function(t) {
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
  }, CQ = {
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
  }, wQ = {
    name: "transform",
    initialValue: "none",
    prefix: true,
    type: 0,
    parse: function(A, e) {
      if (e.type === 20 && e.value === "none") return null;
      if (e.type === 18) {
        var t = QQ[e.name];
        if (typeof t > "u") throw new Error('Attempting to parse an unsupported transform function "' + e.name + '"');
        return t(e.values);
      }
      return null;
    }
  }, vQ = function(A) {
    var e = A.filter(function(t) {
      return t.type === 17;
    }).map(function(t) {
      return t.number;
    });
    return e.length === 6 ? e : null;
  }, yQ = function(A) {
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
  }, QQ = {
    matrix: vQ,
    matrix3d: yQ
  }, Cc = {
    type: 16,
    number: 50,
    flags: un
  }, bQ = [
    Cc,
    Cc
  ], FQ = {
    name: "transform-origin",
    initialValue: "50% 50%",
    prefix: true,
    type: 1,
    parse: function(A, e) {
      var t = e.filter(WA);
      return t.length !== 2 ? bQ : [
        t[0],
        t[1]
      ];
    }
  }, UQ = {
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
  }, Gr;
  (function(A) {
    A.NORMAL = "normal", A.BREAK_ALL = "break-all", A.KEEP_ALL = "keep-all";
  })(Gr || (Gr = {}));
  var EQ = {
    name: "word-break",
    initialValue: "normal",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      switch (e) {
        case "break-all":
          return Gr.BREAK_ALL;
        case "keep-all":
          return Gr.KEEP_ALL;
        default:
          return Gr.NORMAL;
      }
    }
  }, SQ = {
    name: "z-index",
    initialValue: "auto",
    prefix: false,
    type: 0,
    parse: function(A, e) {
      if (e.type === 20) return {
        auto: true,
        order: 0
      };
      if (hr(e)) return {
        auto: false,
        order: e.number
      };
      throw new Error("Invalid z-index number parsed");
    }
  }, qd = {
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
  }, xQ = {
    name: "opacity",
    initialValue: "1",
    type: 0,
    prefix: false,
    parse: function(A, e) {
      return hr(e) ? e.number : 1;
    }
  }, IQ = {
    name: "text-decoration-color",
    initialValue: "transparent",
    prefix: false,
    type: 3,
    format: "color"
  }, HQ = {
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
  }, TQ = {
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
  }, LQ = {
    name: "font-size",
    initialValue: "0",
    prefix: false,
    type: 3,
    format: "length"
  }, kQ = {
    name: "font-weight",
    initialValue: "normal",
    type: 0,
    prefix: false,
    parse: function(A, e) {
      return hr(e) ? e.number : QA(e) && e.value === "bold" ? 700 : 400;
    }
  }, RQ = {
    name: "font-variant",
    initialValue: "none",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      return e.filter(QA).map(function(t) {
        return t.value;
      });
    }
  }, OQ = {
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
  }, jA = function(A, e) {
    return (A & e) !== 0;
  }, KQ = {
    name: "content",
    initialValue: "none",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      if (e.length === 0) return [];
      var t = e[0];
      return t.type === 20 && t.value === "none" ? [] : e;
    }
  }, MQ = {
    name: "counter-increment",
    initialValue: "none",
    prefix: true,
    type: 1,
    parse: function(A, e) {
      if (e.length === 0) return null;
      var t = e[0];
      if (t.type === 20 && t.value === "none") return null;
      for (var r = [], n = e.filter(Od), o = 0; o < n.length; o++) {
        var i = n[o], a = n[o + 1];
        if (i.type === 20) {
          var l = a && hr(a) ? a.number : 1;
          r.push({
            counter: i.value,
            increment: l
          });
        }
      }
      return r;
    }
  }, DQ = {
    name: "counter-reset",
    initialValue: "none",
    prefix: true,
    type: 1,
    parse: function(A, e) {
      if (e.length === 0) return [];
      for (var t = [], r = e.filter(Od), n = 0; n < r.length; n++) {
        var o = r[n], i = r[n + 1];
        if (QA(o) && o.value !== "none") {
          var a = i && hr(i) ? i.number : 0;
          t.push({
            counter: o.value,
            reset: a
          });
        }
      }
      return t;
    }
  }, PQ = {
    name: "duration",
    initialValue: "0s",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return e.filter(dn).map(function(t) {
        return qd.parse(A, t);
      });
    }
  }, _Q = {
    name: "quotes",
    initialValue: "none",
    prefix: true,
    type: 1,
    parse: function(A, e) {
      if (e.length === 0) return null;
      var t = e[0];
      if (t.type === 20 && t.value === "none") return null;
      var r = [], n = e.filter(fy);
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
  }, wc = function(A, e, t) {
    if (!A) return "";
    var r = A[Math.min(e, A.length - 1)];
    return r ? t ? r.open : r.close : "";
  }, NQ = {
    name: "box-shadow",
    initialValue: "none",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      return e.length === 1 && _a(e[0], "none") ? [] : je(e).map(function(t) {
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
  }, GQ = {
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
  }, VQ = {
    name: "-webkit-text-stroke-color",
    initialValue: "currentcolor",
    prefix: false,
    type: 3,
    format: "color"
  }, $Q = {
    name: "-webkit-text-stroke-width",
    initialValue: "0",
    type: 0,
    prefix: false,
    parse: function(A, e) {
      return dn(e) ? e.number : 0;
    }
  }, WQ = (function() {
    function A(e, t) {
      var r, n;
      this.animationDuration = q(e, PQ, t.animationDuration), this.backgroundClip = q(e, By, t.backgroundClip), this.backgroundColor = q(e, hy, t.backgroundColor), this.backgroundImage = q(e, Ey, t.backgroundImage), this.backgroundOrigin = q(e, Sy, t.backgroundOrigin), this.backgroundPosition = q(e, xy, t.backgroundPosition), this.backgroundRepeat = q(e, Iy, t.backgroundRepeat), this.backgroundSize = q(e, Ty, t.backgroundSize), this.borderTopColor = q(e, ky, t.borderTopColor), this.borderRightColor = q(e, Ry, t.borderRightColor), this.borderBottomColor = q(e, Oy, t.borderBottomColor), this.borderLeftColor = q(e, Ky, t.borderLeftColor), this.borderTopLeftRadius = q(e, My, t.borderTopLeftRadius), this.borderTopRightRadius = q(e, Dy, t.borderTopRightRadius), this.borderBottomRightRadius = q(e, Py, t.borderBottomRightRadius), this.borderBottomLeftRadius = q(e, _y, t.borderBottomLeftRadius), this.borderTopStyle = q(e, Ny, t.borderTopStyle), this.borderRightStyle = q(e, Gy, t.borderRightStyle), this.borderBottomStyle = q(e, Vy, t.borderBottomStyle), this.borderLeftStyle = q(e, $y, t.borderLeftStyle), this.borderTopWidth = q(e, Wy, t.borderTopWidth), this.borderRightWidth = q(e, zy, t.borderRightWidth), this.borderBottomWidth = q(e, jy, t.borderBottomWidth), this.borderLeftWidth = q(e, Xy, t.borderLeftWidth), this.boxShadow = q(e, NQ, t.boxShadow), this.color = q(e, Jy, t.color), this.direction = q(e, Yy, t.direction), this.display = q(e, Zy, t.display), this.float = q(e, AQ, t.cssFloat), this.fontFamily = q(e, TQ, t.fontFamily), this.fontSize = q(e, LQ, t.fontSize), this.fontStyle = q(e, OQ, t.fontStyle), this.fontVariant = q(e, RQ, t.fontVariant), this.fontWeight = q(e, kQ, t.fontWeight), this.letterSpacing = q(e, eQ, t.letterSpacing), this.lineBreak = q(e, tQ, t.lineBreak), this.lineHeight = q(e, rQ, t.lineHeight), this.listStyleImage = q(e, nQ, t.listStyleImage), this.listStylePosition = q(e, oQ, t.listStylePosition), this.listStyleType = q(e, Na, t.listStyleType), this.marginTop = q(e, iQ, t.marginTop), this.marginRight = q(e, aQ, t.marginRight), this.marginBottom = q(e, sQ, t.marginBottom), this.marginLeft = q(e, lQ, t.marginLeft), this.opacity = q(e, xQ, t.opacity);
      var o = q(e, cQ, t.overflow);
      this.overflowX = o[0], this.overflowY = o[o.length > 1 ? 1 : 0], this.overflowWrap = q(e, uQ, t.overflowWrap), this.paddingTop = q(e, dQ, t.paddingTop), this.paddingRight = q(e, fQ, t.paddingRight), this.paddingBottom = q(e, gQ, t.paddingBottom), this.paddingLeft = q(e, pQ, t.paddingLeft), this.paintOrder = q(e, GQ, t.paintOrder), this.position = q(e, hQ, t.position), this.textAlign = q(e, BQ, t.textAlign), this.textDecorationColor = q(e, IQ, (r = t.textDecorationColor) !== null && r !== void 0 ? r : t.color), this.textDecorationLine = q(e, HQ, (n = t.textDecorationLine) !== null && n !== void 0 ? n : t.textDecoration), this.textShadow = q(e, mQ, t.textShadow), this.textTransform = q(e, CQ, t.textTransform), this.transform = q(e, wQ, t.transform), this.transformOrigin = q(e, FQ, t.transformOrigin), this.visibility = q(e, UQ, t.visibility), this.webkitTextStrokeColor = q(e, VQ, t.webkitTextStrokeColor), this.webkitTextStrokeWidth = q(e, $Q, t.webkitTextStrokeWidth), this.wordBreak = q(e, EQ, t.wordBreak), this.zIndex = q(e, SQ, t.zIndex);
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
      return jA(this.display, 4) || jA(this.display, 33554432) || jA(this.display, 268435456) || jA(this.display, 536870912) || jA(this.display, 67108864) || jA(this.display, 134217728);
    }, A;
  })(), zQ = /* @__PURE__ */ (function() {
    function A(e, t) {
      this.content = q(e, KQ, t.content), this.quotes = q(e, _Q, t.quotes);
    }
    return A;
  })(), vc = /* @__PURE__ */ (function() {
    function A(e, t) {
      this.counterIncrement = q(e, MQ, t.counterIncrement), this.counterReset = q(e, DQ, t.counterReset);
    }
    return A;
  })(), q = function(A, e, t) {
    var r = new kd(), n = t !== null && typeof t < "u" ? t.toString() : e.initialValue;
    r.write(n);
    var o = new Rd(r.read());
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
            return Bi.parse(A, o.parseComponentValue());
          case "color":
            return Bt.parse(A, o.parseComponentValue());
          case "image":
            return Gs.parse(A, o.parseComponentValue());
          case "length":
            var a = o.parseComponentValue();
            return vt(a) ? a : oe;
          case "length-percentage":
            var l = o.parseComponentValue();
            return WA(l) ? l : oe;
          case "time":
            return qd.parse(A, o.parseComponentValue());
        }
        break;
    }
  }, jQ = "data-html2canvas-debug", XQ = function(A) {
    var e = A.getAttribute(jQ);
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
    var t = XQ(A);
    return t === 1 || e === t;
  }, Xe = /* @__PURE__ */ (function() {
    function A(e, t) {
      if (this.context = e, this.textNodes = [], this.elements = [], this.flags = 0, Ga(t, 3)) debugger;
      this.styles = new WQ(e, window.getComputedStyle(t, null)), Wa(t) && (this.styles.animationDuration.some(function(r) {
        return r > 0;
      }) && (t.style.animationDuration = "0s"), this.styles.transform !== null && (t.style.transform = "none")), this.bounds = gi(this.context, t), Ga(t, 4) && (this.flags |= 16);
    }
    return A;
  })(), JQ = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", yc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Or = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (var Pn = 0; Pn < yc.length; Pn++) Or[yc.charCodeAt(Pn)] = Pn;
  var YQ = function(A) {
    var e = A.length * 0.75, t = A.length, r, n = 0, o, i, a, l;
    A[A.length - 1] === "=" && (e--, A[A.length - 2] === "=" && e--);
    var s = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(e) : new Array(e), c = Array.isArray(s) ? s : new Uint8Array(s);
    for (r = 0; r < t; r += 4) o = Or[A.charCodeAt(r)], i = Or[A.charCodeAt(r + 1)], a = Or[A.charCodeAt(r + 2)], l = Or[A.charCodeAt(r + 3)], c[n++] = o << 2 | i >> 4, c[n++] = (i & 15) << 4 | a >> 2, c[n++] = (a & 3) << 6 | l & 63;
    return s;
  }, ZQ = function(A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 2) t.push(A[r + 1] << 8 | A[r]);
    return t;
  }, qQ = function(A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 4) t.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]);
    return t;
  }, Ot = 5, Vs = 11, Gi = 2, Ab = Vs - Ot, Af = 65536 >> Ot, eb = 1 << Ot, Vi = eb - 1, tb = 1024 >> Ot, rb = Af + tb, nb = rb, ob = 32, ib = nb + ob, ab = 65536 >> Vs, sb = 1 << Ab, lb = sb - 1, Qc = function(A, e, t) {
    return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t));
  }, cb = function(A, e, t) {
    return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t));
  }, ub = function(A, e) {
    var t = YQ(A), r = Array.isArray(t) ? qQ(t) : new Uint32Array(t), n = Array.isArray(t) ? ZQ(t) : new Uint16Array(t), o = 24, i = Qc(n, o / 2, r[4] / 2), a = r[5] === 2 ? Qc(n, (o + r[4]) / 2) : cb(r, Math.ceil((o + r[4]) / 4));
    return new db(r[0], r[1], r[2], r[3], i, a);
  }, db = (function() {
    function A(e, t, r, n, o, i) {
      this.initialValue = e, this.errorValue = t, this.highStart = r, this.highValueIndex = n, this.index = o, this.data = i;
    }
    return A.prototype.get = function(e) {
      var t;
      if (e >= 0) {
        if (e < 55296 || e > 56319 && e <= 65535) return t = this.index[e >> Ot], t = (t << Gi) + (e & Vi), this.data[t];
        if (e <= 65535) return t = this.index[Af + (e - 55296 >> Ot)], t = (t << Gi) + (e & Vi), this.data[t];
        if (e < this.highStart) return t = ib - ab + (e >> Vs), t = this.index[t], t += e >> Ot & lb, t = this.index[t], t = (t << Gi) + (e & Vi), this.data[t];
        if (e <= 1114111) return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, A;
  })(), bc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", fb = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (var _n = 0; _n < bc.length; _n++) fb[bc.charCodeAt(_n)] = _n;
  var gb = 1, $i = 2, Wi = 3, Fc = 4, Uc = 5, pb = 7, Ec = 8, zi = 9, ji = 10, Sc = 11, xc = 12, Ic = 13, Hc = 14, Xi = 15, Bb = function(A) {
    for (var e = [], t = 0, r = A.length; t < r; ) {
      var n = A.charCodeAt(t++);
      if (n >= 55296 && n <= 56319 && t < r) {
        var o = A.charCodeAt(t++);
        (o & 64512) === 56320 ? e.push(((n & 1023) << 10) + (o & 1023) + 65536) : (e.push(n), t--);
      } else e.push(n);
    }
    return e;
  }, hb = function() {
    for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
    if (String.fromCodePoint) return String.fromCodePoint.apply(String, A);
    var t = A.length;
    if (!t) return "";
    for (var r = [], n = -1, o = ""; ++n < t; ) {
      var i = A[n];
      i <= 65535 ? r.push(i) : (i -= 65536, r.push((i >> 10) + 55296, i % 1024 + 56320)), (n + 1 === t || r.length > 16384) && (o += String.fromCharCode.apply(String, r), r.length = 0);
    }
    return o;
  }, mb = ub(JQ), ye = "\xD7", Ji = "\xF7", Cb = function(A) {
    return mb.get(A);
  }, wb = function(A, e, t) {
    var r = t - 2, n = e[r], o = e[t - 1], i = e[t];
    if (o === $i && i === Wi) return ye;
    if (o === $i || o === Wi || o === Fc || i === $i || i === Wi || i === Fc) return Ji;
    if (o === Ec && [
      Ec,
      zi,
      Sc,
      xc
    ].indexOf(i) !== -1 || (o === Sc || o === zi) && (i === zi || i === ji) || (o === xc || o === ji) && i === ji || i === Ic || i === Uc || i === pb || o === gb) return ye;
    if (o === Ic && i === Hc) {
      for (; n === Uc; ) n = e[--r];
      if (n === Hc) return ye;
    }
    if (o === Xi && i === Xi) {
      for (var a = 0; n === Xi; ) a++, n = e[--r];
      if (a % 2 === 0) return ye;
    }
    return Ji;
  }, vb = function(A) {
    var e = Bb(A), t = e.length, r = 0, n = 0, o = e.map(Cb);
    return {
      next: function() {
        if (r >= t) return {
          done: true,
          value: null
        };
        for (var i = ye; r < t && (i = wb(e, o, ++r)) === ye; ) ;
        if (i !== ye || r === t) {
          var a = hb.apply(null, e.slice(n, r));
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
  }, yb = function(A) {
    for (var e = vb(A), t = [], r; !(r = e.next()).done; ) r.value && t.push(r.value.slice());
    return t;
  }, Qb = function(A) {
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
  }, bb = function(A) {
    var e = A.createElement("boundtest");
    e.style.width = "50px", e.style.display = "block", e.style.fontSize = "12px", e.style.letterSpacing = "0px", e.style.wordSpacing = "0px", A.body.appendChild(e);
    var t = A.createRange();
    e.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
    var r = e.firstChild, n = pi(r.data).map(function(l) {
      return GA(l);
    }), o = 0, i = {}, a = n.every(function(l, s) {
      t.setStart(r, o), t.setEnd(r, o + l.length);
      var c = t.getBoundingClientRect();
      o += l.length;
      var d = c.x > i.x || c.y > i.y;
      return i = c, s === 0 ? true : d;
    });
    return A.body.removeChild(e), a;
  }, Fb = function() {
    return typeof new Image().crossOrigin < "u";
  }, Ub = function() {
    return typeof new XMLHttpRequest().responseType == "string";
  }, Eb = function(A) {
    var e = new Image(), t = A.createElement("canvas"), r = t.getContext("2d");
    if (!r) return false;
    e.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
    try {
      r.drawImage(e, 0, 0), t.toDataURL();
    } catch {
      return false;
    }
    return true;
  }, Tc = function(A) {
    return A[0] === 0 && A[1] === 255 && A[2] === 0 && A[3] === 255;
  }, Sb = function(A) {
    var e = A.createElement("canvas"), t = 100;
    e.width = t, e.height = t;
    var r = e.getContext("2d");
    if (!r) return Promise.reject(false);
    r.fillStyle = "rgb(0, 255, 0)", r.fillRect(0, 0, t, t);
    var n = new Image(), o = e.toDataURL();
    n.src = o;
    var i = Va(t, t, 0, 0, n);
    return r.fillStyle = "red", r.fillRect(0, 0, t, t), Lc(i).then(function(a) {
      r.drawImage(a, 0, 0);
      var l = r.getImageData(0, 0, t, t).data;
      r.fillStyle = "red", r.fillRect(0, 0, t, t);
      var s = A.createElement("div");
      return s.style.backgroundImage = "url(" + o + ")", s.style.height = t + "px", Tc(l) ? Lc(Va(t, t, 0, 0, s)) : Promise.reject(false);
    }).then(function(a) {
      return r.drawImage(a, 0, 0), Tc(r.getImageData(0, 0, t, t).data);
    }).catch(function() {
      return false;
    });
  }, Va = function(A, e, t, r, n) {
    var o = "http://www.w3.org/2000/svg", i = document.createElementNS(o, "svg"), a = document.createElementNS(o, "foreignObject");
    return i.setAttributeNS(null, "width", A.toString()), i.setAttributeNS(null, "height", e.toString()), a.setAttributeNS(null, "width", "100%"), a.setAttributeNS(null, "height", "100%"), a.setAttributeNS(null, "x", t.toString()), a.setAttributeNS(null, "y", r.toString()), a.setAttributeNS(null, "externalResourcesRequired", "true"), i.appendChild(a), a.appendChild(n), i;
  }, Lc = function(A) {
    return new Promise(function(e, t) {
      var r = new Image();
      r.onload = function() {
        return e(r);
      }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(A));
    });
  }, te = {
    get SUPPORT_RANGE_BOUNDS() {
      var A = Qb(document);
      return Object.defineProperty(te, "SUPPORT_RANGE_BOUNDS", {
        value: A
      }), A;
    },
    get SUPPORT_WORD_BREAKING() {
      var A = te.SUPPORT_RANGE_BOUNDS && bb(document);
      return Object.defineProperty(te, "SUPPORT_WORD_BREAKING", {
        value: A
      }), A;
    },
    get SUPPORT_SVG_DRAWING() {
      var A = Eb(document);
      return Object.defineProperty(te, "SUPPORT_SVG_DRAWING", {
        value: A
      }), A;
    },
    get SUPPORT_FOREIGNOBJECT_DRAWING() {
      var A = typeof Array.from == "function" && typeof window.fetch == "function" ? Sb(document) : Promise.resolve(false);
      return Object.defineProperty(te, "SUPPORT_FOREIGNOBJECT_DRAWING", {
        value: A
      }), A;
    },
    get SUPPORT_CORS_IMAGES() {
      var A = Fb();
      return Object.defineProperty(te, "SUPPORT_CORS_IMAGES", {
        value: A
      }), A;
    },
    get SUPPORT_RESPONSE_TYPE() {
      var A = Ub();
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
  }, Vr = /* @__PURE__ */ (function() {
    function A(e, t) {
      this.text = e, this.bounds = t;
    }
    return A;
  })(), xb = function(A, e, t, r) {
    var n = Tb(e, t), o = [], i = 0;
    return n.forEach(function(a) {
      if (t.textDecorationLine.length || a.trim().length > 0) if (te.SUPPORT_RANGE_BOUNDS) {
        var l = kc(r, i, a.length).getClientRects();
        if (l.length > 1) {
          var s = $s(a), c = 0;
          s.forEach(function(u) {
            o.push(new Vr(u, ot.fromDOMRectList(A, kc(r, c + i, u.length).getClientRects()))), c += u.length;
          });
        } else o.push(new Vr(a, ot.fromDOMRectList(A, l)));
      } else {
        var d = r.splitText(a.length);
        o.push(new Vr(a, Ib(A, r))), r = d;
      }
      else te.SUPPORT_RANGE_BOUNDS || (r = r.splitText(a.length));
      i += a.length;
    }), o;
  }, Ib = function(A, e) {
    var t = e.ownerDocument;
    if (t) {
      var r = t.createElement("html2canvaswrapper");
      r.appendChild(e.cloneNode(true));
      var n = e.parentNode;
      if (n) {
        n.replaceChild(r, e);
        var o = gi(A, r);
        return r.firstChild && n.replaceChild(r.firstChild, r), o;
      }
    }
    return ot.EMPTY;
  }, kc = function(A, e, t) {
    var r = A.ownerDocument;
    if (!r) throw new Error("Node has no owner document");
    var n = r.createRange();
    return n.setStart(A, e), n.setEnd(A, e + t), n;
  }, $s = function(A) {
    if (te.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
      var e = new Intl.Segmenter(void 0, {
        granularity: "grapheme"
      });
      return Array.from(e.segment(A)).map(function(t) {
        return t.segment;
      });
    }
    return yb(A);
  }, Hb = function(A, e) {
    if (te.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
      var t = new Intl.Segmenter(void 0, {
        granularity: "word"
      });
      return Array.from(t.segment(A)).map(function(r) {
        return r.segment;
      });
    }
    return kb(A, e);
  }, Tb = function(A, e) {
    return e.letterSpacing !== 0 ? $s(A) : Hb(A, e);
  }, Lb = [
    32,
    160,
    4961,
    65792,
    65793,
    4153,
    4241
  ], kb = function(A, e) {
    for (var t = av(A, {
      lineBreak: e.lineBreak,
      wordBreak: e.overflowWrap === "break-word" ? "break-word" : e.wordBreak
    }), r = [], n, o = function() {
      if (n.value) {
        var i = n.value.slice(), a = pi(i), l = "";
        a.forEach(function(s) {
          Lb.indexOf(s) === -1 ? l += GA(s) : (l.length && r.push(l), r.push(GA(s)), l = "");
        }), l.length && r.push(l);
      }
    }; !(n = t.next()).done; ) o();
    return r;
  }, Rb = /* @__PURE__ */ (function() {
    function A(e, t, r) {
      this.text = Ob(t.data, r.textTransform), this.textBounds = xb(e, this.text, r, t);
    }
    return A;
  })(), Ob = function(A, e) {
    switch (e) {
      case 1:
        return A.toLowerCase();
      case 3:
        return A.replace(Kb, Mb);
      case 2:
        return A.toUpperCase();
      default:
        return A;
    }
  }, Kb = /(^|\s|:|-|\(|\))([a-z])/g, Mb = function(A, e, t) {
    return A.length > 0 ? e + t.toUpperCase() : A;
  }, ef = (function(A) {
    ke(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.src = r.currentSrc || r.src, n.intrinsicWidth = r.naturalWidth, n.intrinsicHeight = r.naturalHeight, n.context.cache.addImage(n.src), n;
    }
    return e;
  })(Xe), tf = (function(A) {
    ke(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.canvas = r, n.intrinsicWidth = r.width, n.intrinsicHeight = r.height, n;
    }
    return e;
  })(Xe), rf = (function(A) {
    ke(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this, o = new XMLSerializer(), i = gi(t, r);
      return r.setAttribute("width", i.width + "px"), r.setAttribute("height", i.height + "px"), n.svg = "data:image/svg+xml," + encodeURIComponent(o.serializeToString(r)), n.intrinsicWidth = r.width.baseVal.value, n.intrinsicHeight = r.height.baseVal.value, n.context.cache.addImage(n.svg), n;
    }
    return e;
  })(Xe), nf = (function(A) {
    ke(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.value = r.value, n;
    }
    return e;
  })(Xe), $a = (function(A) {
    ke(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.start = r.start, n.reversed = typeof r.reversed == "boolean" && r.reversed === true, n;
    }
    return e;
  })(Xe), Db = [
    {
      type: 15,
      flags: 0,
      unit: "px",
      number: 3
    }
  ], Pb = [
    {
      type: 16,
      flags: 0,
      number: 50
    }
  ], _b = function(A) {
    return A.width > A.height ? new ot(A.left + (A.width - A.height) / 2, A.top, A.height, A.height) : A.width < A.height ? new ot(A.left, A.top + (A.height - A.width) / 2, A.width, A.width) : A;
  }, Nb = function(A) {
    var e = A.type === Gb ? new Array(A.value.length + 1).join("\u2022") : A.value;
    return e.length === 0 ? A.placeholder || "" : e;
  }, vo = "checkbox", yo = "radio", Gb = "password", Rc = 707406591, Ws = (function(A) {
    ke(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      switch (n.type = r.type.toLowerCase(), n.checked = r.checked, n.value = Nb(r), (n.type === vo || n.type === yo) && (n.styles.backgroundColor = 3739148031, n.styles.borderTopColor = n.styles.borderRightColor = n.styles.borderBottomColor = n.styles.borderLeftColor = 2779096575, n.styles.borderTopWidth = n.styles.borderRightWidth = n.styles.borderBottomWidth = n.styles.borderLeftWidth = 1, n.styles.borderTopStyle = n.styles.borderRightStyle = n.styles.borderBottomStyle = n.styles.borderLeftStyle = 1, n.styles.backgroundClip = [
        0
      ], n.styles.backgroundOrigin = [
        0
      ], n.bounds = _b(n.bounds)), n.type) {
        case vo:
          n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = Db;
          break;
        case yo:
          n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = Pb;
          break;
      }
      return n;
    }
    return e;
  })(Xe), of = (function(A) {
    ke(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this, o = r.options[r.selectedIndex || 0];
      return n.value = o && o.text || "", n;
    }
    return e;
  })(Xe), af = (function(A) {
    ke(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.value = r.value, n;
    }
    return e;
  })(Xe), sf = (function(A) {
    ke(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      n.src = r.src, n.width = parseInt(r.width, 10) || 0, n.height = parseInt(r.height, 10) || 0, n.backgroundColor = n.styles.backgroundColor;
      try {
        if (r.contentWindow && r.contentWindow.document && r.contentWindow.document.documentElement) {
          n.tree = cf(t, r.contentWindow.document.documentElement);
          var o = r.contentWindow.document.documentElement ? Nr(t, getComputedStyle(r.contentWindow.document.documentElement).backgroundColor) : At.TRANSPARENT, i = r.contentWindow.document.body ? Nr(t, getComputedStyle(r.contentWindow.document.body).backgroundColor) : At.TRANSPARENT;
          n.backgroundColor = ht(o) ? ht(i) ? n.styles.backgroundColor : i : o;
        }
      } catch {
      }
      return n;
    }
    return e;
  })(Xe), Vb = [
    "OL",
    "UL",
    "MENU"
  ], ro = function(A, e, t, r) {
    for (var n = e.firstChild, o = void 0; n; n = o) if (o = n.nextSibling, uf(n) && n.data.trim().length > 0) t.textNodes.push(new Rb(A, n, t.styles));
    else if (rr(n)) if (pf(n) && n.assignedNodes) n.assignedNodes().forEach(function(a) {
      return ro(A, a, t, r);
    });
    else {
      var i = lf(A, n);
      i.styles.isVisible() && ($b(n, i, r) ? i.flags |= 4 : Wb(i.styles) && (i.flags |= 2), Vb.indexOf(n.tagName) !== -1 && (i.flags |= 8), t.elements.push(i), n.slot, n.shadowRoot ? ro(A, n.shadowRoot, i, r) : !Qo(n) && !df(n) && !bo(n) && ro(A, n, i, r));
    }
  }, lf = function(A, e) {
    return za(e) ? new ef(A, e) : ff(e) ? new tf(A, e) : df(e) ? new rf(A, e) : zb(e) ? new nf(A, e) : jb(e) ? new $a(A, e) : Xb(e) ? new Ws(A, e) : bo(e) ? new of(A, e) : Qo(e) ? new af(A, e) : gf(e) ? new sf(A, e) : new Xe(A, e);
  }, cf = function(A, e) {
    var t = lf(A, e);
    return t.flags |= 4, ro(A, e, t, t), t;
  }, $b = function(A, e, t) {
    return e.styles.isPositionedWithZIndex() || e.styles.opacity < 1 || e.styles.isTransformed() || zs(A) && t.styles.isTransparent();
  }, Wb = function(A) {
    return A.isPositioned() || A.isFloating();
  }, uf = function(A) {
    return A.nodeType === Node.TEXT_NODE;
  }, rr = function(A) {
    return A.nodeType === Node.ELEMENT_NODE;
  }, Wa = function(A) {
    return rr(A) && typeof A.style < "u" && !no(A);
  }, no = function(A) {
    return typeof A.className == "object";
  }, zb = function(A) {
    return A.tagName === "LI";
  }, jb = function(A) {
    return A.tagName === "OL";
  }, Xb = function(A) {
    return A.tagName === "INPUT";
  }, Jb = function(A) {
    return A.tagName === "HTML";
  }, df = function(A) {
    return A.tagName === "svg";
  }, zs = function(A) {
    return A.tagName === "BODY";
  }, ff = function(A) {
    return A.tagName === "CANVAS";
  }, Oc = function(A) {
    return A.tagName === "VIDEO";
  }, za = function(A) {
    return A.tagName === "IMG";
  }, gf = function(A) {
    return A.tagName === "IFRAME";
  }, Kc = function(A) {
    return A.tagName === "STYLE";
  }, Yb = function(A) {
    return A.tagName === "SCRIPT";
  }, Qo = function(A) {
    return A.tagName === "TEXTAREA";
  }, bo = function(A) {
    return A.tagName === "SELECT";
  }, pf = function(A) {
    return A.tagName === "SLOT";
  }, Mc = function(A) {
    return A.tagName.indexOf("-") > 0;
  }, Zb = (function() {
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
  })(), Dc = {
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
  }, Pc = {
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
  }, qb = {
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
  }, AF = {
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
    return A < e || A > t ? qr(A, n, o.length > 0) : r.integers.reduce(function(i, a, l) {
      for (; A >= a; ) A -= a, i += r.values[l];
      return i;
    }, "") + o;
  }, Bf = function(A, e, t, r) {
    var n = "";
    do
      t || A--, n = r(A) + n, A /= e;
    while (A * e >= e);
    return n;
  }, NA = function(A, e, t, r, n) {
    var o = t - e + 1;
    return (A < 0 ? "-" : "") + (Bf(Math.abs(A), o, r, function(i) {
      return GA(Math.floor(i % o) + e);
    }) + n);
  }, bt = function(A, e, t) {
    t === void 0 && (t = ". ");
    var r = e.length;
    return Bf(Math.abs(A), r, false, function(n) {
      return e[Math.floor(n % r)];
    }) + t;
  }, qt = 1, st = 2, lt = 4, Kr = 8, qe = function(A, e, t, r, n, o) {
    if (A < -9999 || A > 9999) return qr(A, 4, n.length > 0);
    var i = Math.abs(A), a = n;
    if (i === 0) return e[0] + a;
    for (var l = 0; i > 0 && l <= 4; l++) {
      var s = i % 10;
      s === 0 && jA(o, qt) && a !== "" ? a = e[s] + a : s > 1 || s === 1 && l === 0 || s === 1 && l === 1 && jA(o, st) || s === 1 && l === 1 && jA(o, lt) && A > 100 || s === 1 && l > 1 && jA(o, Kr) ? a = e[s] + (l > 0 ? t[l - 1] : "") + a : s === 1 && l > 0 && (a = t[l - 1] + a), i = Math.floor(i / 10);
    }
    return (A < 0 ? r : "") + a;
  }, _c = "\u5341\u767E\u5343\u842C", Nc = "\u62FE\u4F70\u4EDF\u842C", Gc = "\u30DE\u30A4\u30CA\u30B9", Yi = "\uB9C8\uC774\uB108\uC2A4", qr = function(A, e, t) {
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
        return jt(A, 1, 3999, Dc, 3, r).toLowerCase();
      case 7:
        return jt(A, 1, 3999, Dc, 3, r);
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
        return jt(A, 1, 9999, Pc, 3, r);
      case 35:
        return jt(A, 1, 9999, Pc, 3, r).toLowerCase();
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
        return qe(A, "\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", _c, "\u8CA0", n, st | lt | Kr);
      case 47:
        return qe(A, "\u96F6\u58F9\u8CB3\u53C3\u8086\u4F0D\u9678\u67D2\u634C\u7396", Nc, "\u8CA0", n, qt | st | lt | Kr);
      case 42:
        return qe(A, "\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", _c, "\u8D1F", n, st | lt | Kr);
      case 41:
        return qe(A, "\u96F6\u58F9\u8D30\u53C1\u8086\u4F0D\u9646\u67D2\u634C\u7396", Nc, "\u8D1F", n, qt | st | lt | Kr);
      case 26:
        return qe(A, "\u3007\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u5341\u767E\u5343\u4E07", Gc, n, 0);
      case 25:
        return qe(A, "\u96F6\u58F1\u5F10\u53C2\u56DB\u4F0D\u516D\u4E03\u516B\u4E5D", "\u62FE\u767E\u5343\u4E07", Gc, n, qt | st | lt);
      case 31:
        return qe(A, "\uC601\uC77C\uC774\uC0BC\uC0AC\uC624\uC721\uCE60\uD314\uAD6C", "\uC2ED\uBC31\uCC9C\uB9CC", Yi, o, qt | st | lt);
      case 33:
        return qe(A, "\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u5341\u767E\u5343\u842C", Yi, o, 0);
      case 32:
        return qe(A, "\u96F6\u58F9\u8CB3\u53C3\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u62FE\u767E\u5343", Yi, o, qt | st | lt);
      case 18:
        return NA(A, 2406, 2415, true, r);
      case 20:
        return jt(A, 1, 19999, AF, 3, r);
      case 21:
        return NA(A, 2790, 2799, true, r);
      case 22:
        return NA(A, 2662, 2671, true, r);
      case 22:
        return jt(A, 1, 10999, qb, 3, r);
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
  }, hf = "data-html2canvas-ignore", Vc = (function() {
    function A(e, t, r) {
      if (this.context = e, this.options = r, this.scrolledElements = [], this.referenceElement = t, this.counters = new Zb(), this.quoteDepth = 0, !t.ownerDocument) throw new Error("Cloned element does not have an owner document");
      this.documentElement = this.cloneNode(t.ownerDocument.documentElement, false);
    }
    return A.prototype.toIFrame = function(e, t) {
      var r = this, n = eF(e, t);
      if (!n.contentWindow) return Promise.reject("Unable to find iframe window");
      var o = e.defaultView.pageXOffset, i = e.defaultView.pageYOffset, a = n.contentWindow, l = a.document, s = nF(n).then(function() {
        return de(r, void 0, void 0, function() {
          var c, d;
          return se(this, function(u) {
            switch (u.label) {
              case 0:
                return this.scrolledElements.forEach(sF), a && (a.scrollTo(t.left, t.top), /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (a.scrollY !== t.top || a.scrollX !== t.left) && (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(a.scrollX - t.left, a.scrollY - t.top, 0, 0))), c = this.options.onclone, d = this.clonedReferenceElement, typeof d > "u" ? [
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
                  rF(l)
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
      return l.open(), l.write(iF(document.doctype) + "<html></html>"), aF(this.referenceElement.ownerDocument, o, i), l.replaceChild(l.adoptNode(this.documentElement), l.documentElement), l.close(), s;
    }, A.prototype.createElementClone = function(e) {
      if (Ga(e, 2)) debugger;
      if (ff(e)) return this.createCanvasClone(e);
      if (Oc(e)) return this.createVideoClone(e);
      if (Kc(e)) return this.createStyleClone(e);
      var t = e.cloneNode(false);
      return za(t) && (za(e) && e.currentSrc && e.currentSrc !== e.src && (t.src = e.currentSrc, t.srcset = ""), t.loading === "lazy" && (t.loading = "eager")), Mc(t) ? this.createCustomElementClone(t) : t;
    }, A.prototype.createCustomElementClone = function(e) {
      var t = document.createElement("html2canvascustomelement");
      return Zi(e.style, t), t;
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
      (!rr(t) || !Yb(t) && !t.hasAttribute(hf) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(t))) && (!this.options.copyStyles || !rr(t) || !Kc(t)) && e.appendChild(this.cloneNode(t, r));
    }, A.prototype.cloneChildNodes = function(e, t, r) {
      for (var n = this, o = e.shadowRoot ? e.shadowRoot.firstChild : e.firstChild; o; o = o.nextSibling) if (rr(o) && pf(o) && typeof o.assignedNodes == "function") {
        var i = o.assignedNodes();
        i.length && i.forEach(function(a) {
          return n.appendChildNode(t, a, r);
        });
      } else this.appendChildNode(t, o, r);
    }, A.prototype.cloneNode = function(e, t) {
      if (uf(e)) return document.createTextNode(e.data);
      if (!e.ownerDocument) return e.cloneNode(false);
      var r = e.ownerDocument.defaultView;
      if (r && rr(e) && (Wa(e) || no(e))) {
        var n = this.createElementClone(e);
        n.style.transitionProperty = "none";
        var o = r.getComputedStyle(e), i = r.getComputedStyle(e, ":before"), a = r.getComputedStyle(e, ":after");
        this.referenceElement === e && Wa(n) && (this.clonedReferenceElement = n), zs(n) && uF(n);
        var l = this.counters.parse(new vc(this.context, o)), s = this.resolvePseudoContent(e, n, i, $r.BEFORE);
        Mc(e) && (t = true), Oc(e) || this.cloneChildNodes(e, n, t), s && n.insertBefore(s, n.firstChild);
        var c = this.resolvePseudoContent(e, n, a, $r.AFTER);
        return c && n.appendChild(c), this.counters.pop(l), (o && (this.options.copyStyles || no(e)) && !gf(e) || t) && Zi(o, n), (e.scrollTop !== 0 || e.scrollLeft !== 0) && this.scrolledElements.push([
          n,
          e.scrollLeft,
          e.scrollTop
        ]), (Qo(e) || bo(e)) && (Qo(n) || bo(n)) && (n.value = e.value), n;
      }
      return e.cloneNode(false);
    }, A.prototype.resolvePseudoContent = function(e, t, r, n) {
      var o = this;
      if (r) {
        var i = r.content, a = t.ownerDocument;
        if (!(!a || !i || i === "none" || i === "-moz-alt-content" || r.display === "none")) {
          this.counters.parse(new vc(this.context, r));
          var l = new zQ(this.context, r), s = a.createElement("html2canvaspseudoelement");
          Zi(r, s), l.content.forEach(function(d) {
            if (d.type === 0) s.appendChild(a.createTextNode(d.value));
            else if (d.type === 22) {
              var u = a.createElement("img");
              u.src = d.value, u.style.opacity = "1", s.appendChild(u);
            } else if (d.type === 18) {
              if (d.name === "attr") {
                var f = d.values.filter(QA);
                f.length && s.appendChild(a.createTextNode(e.getAttribute(f[0].value) || ""));
              } else if (d.name === "counter") {
                var g = d.values.filter(dr), B = g[0], Q = g[1];
                if (B && QA(B)) {
                  var m = o.counters.getCounterValue(B.value), F = Q && QA(Q) ? Na.parse(o.context, Q.value) : 3;
                  s.appendChild(a.createTextNode(qr(m, F, false)));
                }
              } else if (d.name === "counters") {
                var w = d.values.filter(dr), B = w[0], v = w[1], Q = w[2];
                if (B && QA(B)) {
                  var U = o.counters.getCounterValues(B.value), C = Q && QA(Q) ? Na.parse(o.context, Q.value) : 3, S = v && v.type === 0 ? v.value : "", x = U.map(function(T) {
                    return qr(T, C, false);
                  }).join(S);
                  s.appendChild(a.createTextNode(x));
                }
              }
            } else if (d.type === 20) switch (d.value) {
              case "open-quote":
                s.appendChild(a.createTextNode(wc(l.quotes, o.quoteDepth++, true)));
                break;
              case "close-quote":
                s.appendChild(a.createTextNode(wc(l.quotes, --o.quoteDepth, false)));
                break;
              default:
                s.appendChild(a.createTextNode(d.value));
            }
          }), s.className = ja + " " + Xa;
          var c = n === $r.BEFORE ? " " + ja : " " + Xa;
          return no(t) ? t.className.baseValue += c : t.className += c, s;
        }
      }
    }, A.destroy = function(e) {
      return e.parentNode ? (e.parentNode.removeChild(e), true) : false;
    }, A;
  })(), $r;
  (function(A) {
    A[A.BEFORE = 0] = "BEFORE", A[A.AFTER = 1] = "AFTER";
  })($r || ($r = {}));
  var eF = function(A, e) {
    var t = A.createElement("iframe");
    return t.className = "html2canvas-container", t.style.visibility = "hidden", t.style.position = "fixed", t.style.left = "-10000px", t.style.top = "0px", t.style.border = "0", t.width = e.width.toString(), t.height = e.height.toString(), t.scrolling = "no", t.setAttribute(hf, "true"), A.body.appendChild(t), t;
  }, tF = function(A) {
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
  }, rF = function(A) {
    return Promise.all([].slice.call(A.images, 0).map(tF));
  }, nF = function(A) {
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
  }, oF = [
    "all",
    "d",
    "content"
  ], Zi = function(A, e) {
    for (var t = A.length - 1; t >= 0; t--) {
      var r = A.item(t);
      oF.indexOf(r) === -1 && e.style.setProperty(r, A.getPropertyValue(r));
    }
    return e;
  }, iF = function(A) {
    var e = "";
    return A && (e += "<!DOCTYPE ", A.name && (e += A.name), A.internalSubset && (e += A.internalSubset), A.publicId && (e += '"' + A.publicId + '"'), A.systemId && (e += '"' + A.systemId + '"'), e += ">"), e;
  }, aF = function(A, e, t) {
    A && A.defaultView && (e !== A.defaultView.pageXOffset || t !== A.defaultView.pageYOffset) && A.defaultView.scrollTo(e, t);
  }, sF = function(A) {
    var e = A[0], t = A[1], r = A[2];
    e.scrollLeft = t, e.scrollTop = r;
  }, lF = ":before", cF = ":after", ja = "___html2canvas___pseudoelement_before", Xa = "___html2canvas___pseudoelement_after", $c = `{
    content: "" !important;
    display: none !important;
}`, uF = function(A) {
    dF(A, "." + ja + lF + $c + `
         .` + Xa + cF + $c);
  }, dF = function(A, e) {
    var t = A.ownerDocument;
    if (t) {
      var r = t.createElement("style");
      r.textContent = e, A.appendChild(r);
    }
  }, mf = (function() {
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
  })(), fF = (function() {
    function A(e, t) {
      this.context = e, this._options = t, this._cache = {};
    }
    return A.prototype.addImage = function(e) {
      var t = Promise.resolve();
      return this.has(e) || (Aa(e) || hF(e)) && (this._cache[e] = this.loadImage(e)).catch(function() {
      }), t;
    }, A.prototype.match = function(e) {
      return this._cache[e];
    }, A.prototype.loadImage = function(e) {
      return de(this, void 0, void 0, function() {
        var t, r, n, o, i = this;
        return se(this, function(a) {
          switch (a.label) {
            case 0:
              return t = mf.isSameOrigin(e), r = !qi(e) && this._options.useCORS === true && te.SUPPORT_CORS_IMAGES && !t, n = !qi(e) && !t && !Aa(e) && typeof this._options.proxy == "string" && te.SUPPORT_CORS_XHR && !r, !t && this._options.allowTaint === false && !qi(e) && !Aa(e) && !n && !r ? [
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
                  }, c.onerror = s, (mF(o) || r) && (c.crossOrigin = "anonymous"), c.src = o, c.complete === true && setTimeout(function() {
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
  })(), gF = /^data:image\/svg\+xml/i, pF = /^data:image\/.*;base64,/i, BF = /^data:image\/.*/i, hF = function(A) {
    return te.SUPPORT_SVG_DRAWING || !CF(A);
  }, qi = function(A) {
    return BF.test(A);
  }, mF = function(A) {
    return pF.test(A);
  }, Aa = function(A) {
    return A.substr(0, 4) === "blob";
  }, CF = function(A) {
    return A.substr(-3).toLowerCase() === "svg" || gF.test(A);
  }, Z = (function() {
    function A(e, t) {
      this.type = 0, this.x = e, this.y = t;
    }
    return A.prototype.add = function(e, t) {
      return new A(this.x + e, this.y + t);
    }, A;
  })(), Xt = function(A, e, t) {
    return new Z(A.x + (e.x - A.x) * t, A.y + (e.y - A.y) * t);
  }, Nn = (function() {
    function A(e, t, r, n) {
      this.type = 1, this.start = e, this.startControl = t, this.endControl = r, this.end = n;
    }
    return A.prototype.subdivide = function(e, t) {
      var r = Xt(this.start, this.startControl, e), n = Xt(this.startControl, this.endControl, e), o = Xt(this.endControl, this.end, e), i = Xt(r, n, e), a = Xt(n, o, e), l = Xt(i, a, e);
      return t ? new A(this.start, r, i, l) : new A(l, a, o, this.end);
    }, A.prototype.add = function(e, t) {
      return new A(this.start.add(e, t), this.startControl.add(e, t), this.endControl.add(e, t), this.end.add(e, t));
    }, A.prototype.reverse = function() {
      return new A(this.end, this.endControl, this.startControl, this.start);
    }, A;
  })(), Fe = function(A) {
    return A.type === 1;
  }, wF = /* @__PURE__ */ (function() {
    function A(e) {
      var t = e.styles, r = e.bounds, n = Rr(t.borderTopLeftRadius, r.width, r.height), o = n[0], i = n[1], a = Rr(t.borderTopRightRadius, r.width, r.height), l = a[0], s = a[1], c = Rr(t.borderBottomRightRadius, r.width, r.height), d = c[0], u = c[1], f = Rr(t.borderBottomLeftRadius, r.width, r.height), g = f[0], B = f[1], Q = [];
      Q.push((o + l) / r.width), Q.push((g + d) / r.width), Q.push((i + B) / r.height), Q.push((s + u) / r.height);
      var m = Math.max.apply(Math, Q);
      m > 1 && (o /= m, i /= m, l /= m, s /= m, d /= m, u /= m, g /= m, B /= m);
      var F = r.width - l, w = r.height - u, v = r.width - d, U = r.height - B, C = t.borderTopWidth, S = t.borderRightWidth, x = t.borderBottomWidth, I = t.borderLeftWidth, p = SA(t.paddingTop, e.bounds.width), T = SA(t.paddingRight, e.bounds.width), D = SA(t.paddingBottom, e.bounds.width), K = SA(t.paddingLeft, e.bounds.width);
      this.topLeftBorderDoubleOuterBox = o > 0 || i > 0 ? kA(r.left + I / 3, r.top + C / 3, o - I / 3, i - C / 3, vA.TOP_LEFT) : new Z(r.left + I / 3, r.top + C / 3), this.topRightBorderDoubleOuterBox = o > 0 || i > 0 ? kA(r.left + F, r.top + C / 3, l - S / 3, s - C / 3, vA.TOP_RIGHT) : new Z(r.left + r.width - S / 3, r.top + C / 3), this.bottomRightBorderDoubleOuterBox = d > 0 || u > 0 ? kA(r.left + v, r.top + w, d - S / 3, u - x / 3, vA.BOTTOM_RIGHT) : new Z(r.left + r.width - S / 3, r.top + r.height - x / 3), this.bottomLeftBorderDoubleOuterBox = g > 0 || B > 0 ? kA(r.left + I / 3, r.top + U, g - I / 3, B - x / 3, vA.BOTTOM_LEFT) : new Z(r.left + I / 3, r.top + r.height - x / 3), this.topLeftBorderDoubleInnerBox = o > 0 || i > 0 ? kA(r.left + I * 2 / 3, r.top + C * 2 / 3, o - I * 2 / 3, i - C * 2 / 3, vA.TOP_LEFT) : new Z(r.left + I * 2 / 3, r.top + C * 2 / 3), this.topRightBorderDoubleInnerBox = o > 0 || i > 0 ? kA(r.left + F, r.top + C * 2 / 3, l - S * 2 / 3, s - C * 2 / 3, vA.TOP_RIGHT) : new Z(r.left + r.width - S * 2 / 3, r.top + C * 2 / 3), this.bottomRightBorderDoubleInnerBox = d > 0 || u > 0 ? kA(r.left + v, r.top + w, d - S * 2 / 3, u - x * 2 / 3, vA.BOTTOM_RIGHT) : new Z(r.left + r.width - S * 2 / 3, r.top + r.height - x * 2 / 3), this.bottomLeftBorderDoubleInnerBox = g > 0 || B > 0 ? kA(r.left + I * 2 / 3, r.top + U, g - I * 2 / 3, B - x * 2 / 3, vA.BOTTOM_LEFT) : new Z(r.left + I * 2 / 3, r.top + r.height - x * 2 / 3), this.topLeftBorderStroke = o > 0 || i > 0 ? kA(r.left + I / 2, r.top + C / 2, o - I / 2, i - C / 2, vA.TOP_LEFT) : new Z(r.left + I / 2, r.top + C / 2), this.topRightBorderStroke = o > 0 || i > 0 ? kA(r.left + F, r.top + C / 2, l - S / 2, s - C / 2, vA.TOP_RIGHT) : new Z(r.left + r.width - S / 2, r.top + C / 2), this.bottomRightBorderStroke = d > 0 || u > 0 ? kA(r.left + v, r.top + w, d - S / 2, u - x / 2, vA.BOTTOM_RIGHT) : new Z(r.left + r.width - S / 2, r.top + r.height - x / 2), this.bottomLeftBorderStroke = g > 0 || B > 0 ? kA(r.left + I / 2, r.top + U, g - I / 2, B - x / 2, vA.BOTTOM_LEFT) : new Z(r.left + I / 2, r.top + r.height - x / 2), this.topLeftBorderBox = o > 0 || i > 0 ? kA(r.left, r.top, o, i, vA.TOP_LEFT) : new Z(r.left, r.top), this.topRightBorderBox = l > 0 || s > 0 ? kA(r.left + F, r.top, l, s, vA.TOP_RIGHT) : new Z(r.left + r.width, r.top), this.bottomRightBorderBox = d > 0 || u > 0 ? kA(r.left + v, r.top + w, d, u, vA.BOTTOM_RIGHT) : new Z(r.left + r.width, r.top + r.height), this.bottomLeftBorderBox = g > 0 || B > 0 ? kA(r.left, r.top + U, g, B, vA.BOTTOM_LEFT) : new Z(r.left, r.top + r.height), this.topLeftPaddingBox = o > 0 || i > 0 ? kA(r.left + I, r.top + C, Math.max(0, o - I), Math.max(0, i - C), vA.TOP_LEFT) : new Z(r.left + I, r.top + C), this.topRightPaddingBox = l > 0 || s > 0 ? kA(r.left + Math.min(F, r.width - S), r.top + C, F > r.width + S ? 0 : Math.max(0, l - S), Math.max(0, s - C), vA.TOP_RIGHT) : new Z(r.left + r.width - S, r.top + C), this.bottomRightPaddingBox = d > 0 || u > 0 ? kA(r.left + Math.min(v, r.width - I), r.top + Math.min(w, r.height - x), Math.max(0, d - S), Math.max(0, u - x), vA.BOTTOM_RIGHT) : new Z(r.left + r.width - S, r.top + r.height - x), this.bottomLeftPaddingBox = g > 0 || B > 0 ? kA(r.left + I, r.top + Math.min(U, r.height - x), Math.max(0, g - I), Math.max(0, B - x), vA.BOTTOM_LEFT) : new Z(r.left + I, r.top + r.height - x), this.topLeftContentBox = o > 0 || i > 0 ? kA(r.left + I + K, r.top + C + p, Math.max(0, o - (I + K)), Math.max(0, i - (C + p)), vA.TOP_LEFT) : new Z(r.left + I + K, r.top + C + p), this.topRightContentBox = l > 0 || s > 0 ? kA(r.left + Math.min(F, r.width + I + K), r.top + C + p, F > r.width + I + K ? 0 : l - I + K, s - (C + p), vA.TOP_RIGHT) : new Z(r.left + r.width - (S + T), r.top + C + p), this.bottomRightContentBox = d > 0 || u > 0 ? kA(r.left + Math.min(v, r.width - (I + K)), r.top + Math.min(w, r.height + C + p), Math.max(0, d - (S + T)), u - (x + D), vA.BOTTOM_RIGHT) : new Z(r.left + r.width - (S + T), r.top + r.height - (x + D)), this.bottomLeftContentBox = g > 0 || B > 0 ? kA(r.left + I + K, r.top + U, Math.max(0, g - (I + K)), B - (x + D), vA.BOTTOM_LEFT) : new Z(r.left + I + K, r.top + r.height - (x + D));
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
        return new Nn(new Z(A, s), new Z(A, s - a), new Z(l - i, e), new Z(l, e));
      case vA.TOP_RIGHT:
        return new Nn(new Z(A, e), new Z(A + i, e), new Z(l, s - a), new Z(l, s));
      case vA.BOTTOM_RIGHT:
        return new Nn(new Z(l, e), new Z(l, e + a), new Z(A + i, s), new Z(A, s));
      case vA.BOTTOM_LEFT:
      default:
        return new Nn(new Z(l, s), new Z(l - i, s), new Z(A, e + a), new Z(A, e));
    }
  }, Fo = function(A) {
    return [
      A.topLeftBorderBox,
      A.topRightBorderBox,
      A.bottomRightBorderBox,
      A.bottomLeftBorderBox
    ];
  }, vF = function(A) {
    return [
      A.topLeftContentBox,
      A.topRightContentBox,
      A.bottomRightContentBox,
      A.bottomLeftContentBox
    ];
  }, Uo = function(A) {
    return [
      A.topLeftPaddingBox,
      A.topRightPaddingBox,
      A.bottomRightPaddingBox,
      A.bottomLeftPaddingBox
    ];
  }, yF = /* @__PURE__ */ (function() {
    function A(e, t, r) {
      this.offsetX = e, this.offsetY = t, this.matrix = r, this.type = 0, this.target = 6;
    }
    return A;
  })(), Gn = /* @__PURE__ */ (function() {
    function A(e, t) {
      this.path = e, this.target = t, this.type = 1;
    }
    return A;
  })(), QF = /* @__PURE__ */ (function() {
    function A(e) {
      this.opacity = e, this.type = 2, this.target = 6;
    }
    return A;
  })(), bF = function(A) {
    return A.type === 0;
  }, Cf = function(A) {
    return A.type === 1;
  }, FF = function(A) {
    return A.type === 2;
  }, Wc = function(A, e) {
    return A.length === e.length ? A.some(function(t, r) {
      return t === e[r];
    }) : false;
  }, UF = function(A, e, t, r, n) {
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
  }, wf = /* @__PURE__ */ (function() {
    function A(e) {
      this.element = e, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
    }
    return A;
  })(), vf = (function() {
    function A(e, t) {
      if (this.container = e, this.parent = t, this.effects = [], this.curves = new wF(this.container), this.container.styles.opacity < 1 && this.effects.push(new QF(this.container.styles.opacity)), this.container.styles.transform !== null) {
        var r = this.container.bounds.left + this.container.styles.transformOrigin[0].number, n = this.container.bounds.top + this.container.styles.transformOrigin[1].number, o = this.container.styles.transform;
        this.effects.push(new yF(r, n, o));
      }
      if (this.container.styles.overflowX !== 0) {
        var i = Fo(this.curves), a = Uo(this.curves);
        Wc(i, a) ? this.effects.push(new Gn(i, 6)) : (this.effects.push(new Gn(i, 2)), this.effects.push(new Gn(a, 4)));
      }
    }
    return A.prototype.getEffects = function(e) {
      for (var t = [
        2,
        3
      ].indexOf(this.container.styles.position) === -1, r = this.parent, n = this.effects.slice(0); r; ) {
        var o = r.effects.filter(function(l) {
          return !Cf(l);
        });
        if (t || r.container.styles.position !== 0 || !r.parent) {
          if (n.unshift.apply(n, o), t = [
            2,
            3
          ].indexOf(r.container.styles.position) === -1, r.container.styles.overflowX !== 0) {
            var i = Fo(r.curves), a = Uo(r.curves);
            Wc(i, a) || n.unshift(new Gn(a, 6));
          }
        } else n.unshift.apply(n, o);
        r = r.parent;
      }
      return n.filter(function(l) {
        return jA(l.target, e);
      });
    }, A;
  })(), Ja = function(A, e, t, r) {
    A.container.elements.forEach(function(n) {
      var o = jA(n.flags, 4), i = jA(n.flags, 2), a = new vf(n, A);
      jA(n.styles.display, 2048) && r.push(a);
      var l = jA(n.flags, 8) ? [] : r;
      if (o || i) {
        var s = o || n.styles.isPositioned() ? t : e, c = new wf(a);
        if (n.styles.isPositioned() || n.styles.opacity < 1 || n.styles.isTransformed()) {
          var d = n.styles.zIndex.order;
          if (d < 0) {
            var u = 0;
            s.negativeZIndex.some(function(g, B) {
              return d > g.element.container.styles.zIndex.order ? (u = B, false) : u > 0;
            }), s.negativeZIndex.splice(u, 0, c);
          } else if (d > 0) {
            var f = 0;
            s.positiveZIndex.some(function(g, B) {
              return d >= g.element.container.styles.zIndex.order ? (f = B + 1, false) : f > 0;
            }), s.positiveZIndex.splice(f, 0, c);
          } else s.zeroOrAutoZIndexOrTransformedOrOpacity.push(c);
        } else n.styles.isFloating() ? s.nonPositionedFloats.push(c) : s.nonPositionedInlineLevel.push(c);
        Ja(a, c, o ? c : t, l);
      } else n.styles.isInlineLevel() ? e.inlineLevel.push(a) : e.nonInlineLevel.push(a), Ja(a, e, t, l);
      jA(n.flags, 8) && yf(n, l);
    });
  }, yf = function(A, e) {
    for (var t = A instanceof $a ? A.start : 1, r = A instanceof $a ? A.reversed : false, n = 0; n < e.length; n++) {
      var o = e[n];
      o.container instanceof nf && typeof o.container.value == "number" && o.container.value !== 0 && (t = o.container.value), o.listValue = qr(t, o.container.styles.listStyleType, true), t += r ? -1 : 1;
    }
  }, EF = function(A) {
    var e = new vf(A, null), t = new wf(e), r = [];
    return Ja(e, t, t, r), yf(e.container, r), t;
  }, zc = function(A, e) {
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
  }, SF = function(A, e) {
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
  }, xF = function(A, e) {
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
  }, IF = function(A, e) {
    switch (e) {
      case 0:
        return Vn(A.topLeftBorderStroke, A.topRightBorderStroke);
      case 1:
        return Vn(A.topRightBorderStroke, A.bottomRightBorderStroke);
      case 2:
        return Vn(A.bottomRightBorderStroke, A.bottomLeftBorderStroke);
      default:
        return Vn(A.bottomLeftBorderStroke, A.topLeftBorderStroke);
    }
  }, Vn = function(A, e) {
    var t = [];
    return Fe(A) ? t.push(A.subdivide(0.5, false)) : t.push(A), Fe(e) ? t.push(e.subdivide(0.5, true)) : t.push(e), t;
  }, Ee = function(A, e, t, r) {
    var n = [];
    return Fe(A) ? n.push(A.subdivide(0.5, false)) : n.push(A), Fe(t) ? n.push(t.subdivide(0.5, true)) : n.push(t), Fe(r) ? n.push(r.subdivide(0.5, true).reverse()) : n.push(r), Fe(e) ? n.push(e.subdivide(0.5, false).reverse()) : n.push(e), n;
  }, Qf = function(A) {
    var e = A.bounds, t = A.styles;
    return e.add(t.borderLeftWidth, t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth), -(t.borderTopWidth + t.borderBottomWidth));
  }, Eo = function(A) {
    var e = A.styles, t = A.bounds, r = SA(e.paddingLeft, t.width), n = SA(e.paddingRight, t.width), o = SA(e.paddingTop, t.width), i = SA(e.paddingBottom, t.width);
    return t.add(r + e.borderLeftWidth, o + e.borderTopWidth, -(e.borderRightWidth + e.borderLeftWidth + r + n), -(e.borderTopWidth + e.borderBottomWidth + o + i));
  }, HF = function(A, e) {
    return A === 0 ? e.bounds : A === 2 ? Eo(e) : Qf(e);
  }, TF = function(A, e) {
    return A === 0 ? e.bounds : A === 2 ? Eo(e) : Qf(e);
  }, ea = function(A, e, t) {
    var r = HF(Ar(A.styles.backgroundOrigin, e), A), n = TF(Ar(A.styles.backgroundClip, e), A), o = LF(Ar(A.styles.backgroundSize, e), t, r), i = o[0], a = o[1], l = Rr(Ar(A.styles.backgroundPosition, e), r.width - i, r.height - a), s = kF(Ar(A.styles.backgroundRepeat, e), l, o, r, n), c = Math.round(r.left + l[0]), d = Math.round(r.top + l[1]);
    return [
      s,
      c,
      d,
      i,
      a
    ];
  }, Jt = function(A) {
    return QA(A) && A.value === ir.AUTO;
  }, $n = function(A) {
    return typeof A == "number";
  }, LF = function(A, e, t) {
    var r = e[0], n = e[1], o = e[2], i = A[0], a = A[1];
    if (!i) return [
      0,
      0
    ];
    if (WA(i) && a && WA(a)) return [
      SA(i, t.width),
      SA(a, t.height)
    ];
    var l = $n(o);
    if (QA(i) && (i.value === ir.CONTAIN || i.value === ir.COVER)) {
      if ($n(o)) {
        var s = t.width / t.height;
        return s < o != (i.value === ir.COVER) ? [
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
    var c = $n(r), d = $n(n), u = c || d;
    if (Jt(i) && (!a || Jt(a))) {
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
      var B = c ? r : t.width, Q = d ? n : t.height;
      return [
        B,
        Q
      ];
    }
    if (l) {
      var m = 0, F = 0;
      return WA(i) ? m = SA(i, t.width) : WA(a) && (F = SA(a, t.height)), Jt(i) ? m = F * o : (!a || Jt(a)) && (F = m / o), [
        m,
        F
      ];
    }
    var w = null, v = null;
    if (WA(i) ? w = SA(i, t.width) : a && WA(a) && (v = SA(a, t.height)), w !== null && (!a || Jt(a)) && (v = c && d ? w / r * n : t.height), v !== null && Jt(i) && (w = c && d ? v / n * r : t.width), w !== null && v !== null) return [
      w,
      v
    ];
    throw new Error("Unable to calculate background-size for element");
  }, Ar = function(A, e) {
    var t = A[e];
    return typeof t > "u" ? A[0] : t;
  }, kF = function(A, e, t, r, n) {
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
  }, RF = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", jc = "Hidden Text", OF = (function() {
    function A(e) {
      this._data = {}, this._document = e;
    }
    return A.prototype.parseMetrics = function(e, t) {
      var r = this._document.createElement("div"), n = this._document.createElement("img"), o = this._document.createElement("span"), i = this._document.body;
      r.style.visibility = "hidden", r.style.fontFamily = e, r.style.fontSize = t, r.style.margin = "0", r.style.padding = "0", r.style.whiteSpace = "nowrap", i.appendChild(r), n.src = RF, n.width = 1, n.height = 1, n.style.margin = "0", n.style.padding = "0", n.style.verticalAlign = "baseline", o.style.fontFamily = e, o.style.fontSize = t, o.style.margin = "0", o.style.padding = "0", o.appendChild(this._document.createTextNode(jc)), r.appendChild(o), r.appendChild(n);
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
  })(), bf = /* @__PURE__ */ (function() {
    function A(e, t) {
      this.context = e, this.options = t;
    }
    return A;
  })(), KF = 1e4, MF = (function(A) {
    ke(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n._activeEffects = [], n.canvas = r.canvas ? r.canvas : document.createElement("canvas"), n.ctx = n.canvas.getContext("2d"), r.canvas || (n.canvas.width = Math.floor(r.width * r.scale), n.canvas.height = Math.floor(r.height * r.scale), n.canvas.style.width = r.width + "px", n.canvas.style.height = r.height + "px"), n.fontMetrics = new OF(document), n.ctx.scale(n.options.scale, n.options.scale), n.ctx.translate(-r.x, -r.y), n.ctx.textBaseline = "bottom", n._activeEffects = [], n.context.logger.debug("Canvas renderer initialized (" + r.width + "x" + r.height + ") with scale " + r.scale), n;
    }
    return e.prototype.applyEffects = function(t) {
      for (var r = this; this._activeEffects.length; ) this.popEffect();
      t.forEach(function(n) {
        return r.applyEffect(n);
      });
    }, e.prototype.applyEffect = function(t) {
      this.ctx.save(), FF(t) && (this.ctx.globalAlpha = t.opacity), bF(t) && (this.ctx.translate(t.offsetX, t.offsetY), this.ctx.transform(t.matrix[0], t.matrix[1], t.matrix[2], t.matrix[3], t.matrix[4], t.matrix[5]), this.ctx.translate(-t.offsetX, -t.offsetY)), Cf(t) && (this.path(t.path), this.ctx.clip()), this._activeEffects.push(t);
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
              if (jA(t.container.flags, 16)) debugger;
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
        var i = $s(t.text);
        i.reduce(function(a, l) {
          return o.ctx.fillText(l, a, t.bounds.top + n), a + o.ctx.measureText(l).width;
        }, t.bounds.left);
      }
    }, e.prototype.createFontStyle = function(t) {
      var r = t.fontVariant.filter(function(i) {
        return i === "normal" || i === "small-caps";
      }).join(""), n = GF(t.fontFamily).join(", "), o = dn(t.fontSize) ? "" + t.fontSize.number + t.fontSize.unit : t.fontSize.number + "px";
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
            d.forEach(function(B) {
              switch (B) {
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
        var o = Eo(t), i = Uo(r);
        this.path(i), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(n, 0, 0, t.intrinsicWidth, t.intrinsicHeight, o.left, o.top, o.width, o.height), this.ctx.restore();
      }
    }, e.prototype.renderNodeContent = function(t) {
      return de(this, void 0, void 0, function() {
        var r, n, o, i, a, l, F, F, s, c, d, u, v, f, g, U, B, Q, m, F, w, v, U;
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
              if (!(r instanceof ef)) return [
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
              if (r instanceof tf && this.renderReplacedElement(r, n, r.canvas), !(r instanceof rf)) return [
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
              return r instanceof sf && r.tree ? (s = new e(this.context, {
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
              if (r instanceof Ws && (d = Math.min(r.bounds.width, r.bounds.height), r.type === vo ? r.checked && (this.ctx.save(), this.path([
                new Z(r.bounds.left + d * 0.39363, r.bounds.top + d * 0.79),
                new Z(r.bounds.left + d * 0.16, r.bounds.top + d * 0.5549),
                new Z(r.bounds.left + d * 0.27347, r.bounds.top + d * 0.44071),
                new Z(r.bounds.left + d * 0.39694, r.bounds.top + d * 0.5649),
                new Z(r.bounds.left + d * 0.72983, r.bounds.top + d * 0.23),
                new Z(r.bounds.left + d * 0.84, r.bounds.top + d * 0.34085),
                new Z(r.bounds.left + d * 0.39363, r.bounds.top + d * 0.79)
              ]), this.ctx.fillStyle = JA(Rc), this.ctx.fill(), this.ctx.restore()) : r.type === yo && r.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(r.bounds.left + d / 2, r.bounds.top + d / 2, d / 4, 0, Math.PI * 2, true), this.ctx.fillStyle = JA(Rc), this.ctx.fill(), this.ctx.restore())), DF(r) && r.value.length) {
                switch (u = this.createFontStyle(o), v = u[0], f = u[1], g = this.fontMetrics.getMetrics(v, f).baseline, this.ctx.font = v, this.ctx.fillStyle = JA(o.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = _F(r.styles.textAlign), U = Eo(r), B = 0, r.styles.textAlign) {
                  case 1:
                    B += U.width / 2;
                    break;
                  case 2:
                    B += U.width;
                    break;
                }
                Q = U.add(B, 0, 0, -U.height / 2 + 1), this.ctx.save(), this.path([
                  new Z(U.left, U.top),
                  new Z(U.left + U.width, U.top),
                  new Z(U.left + U.width, U.top + U.height),
                  new Z(U.left, U.top + U.height)
                ]), this.ctx.clip(), this.renderTextWithLetterSpacing(new Vr(r.value, Q), o.letterSpacing, g), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
              }
              if (!jA(r.styles.display, 2048)) return [
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
              t.listValue && r.styles.listStyleType !== -1 && (v = this.createFontStyle(o)[0], this.ctx.font = v, this.ctx.fillStyle = JA(o.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", U = new ot(r.bounds.left, r.bounds.top + SA(r.styles.paddingTop, r.bounds.width), r.bounds.width, mc(o.lineHeight, o.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new Vr(t.listValue, U), o.letterSpacing, mc(o.lineHeight, o.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), C.label = 20;
            case 20:
              return [
                2
              ];
          }
        });
      });
    }, e.prototype.renderStackContent = function(t) {
      return de(this, void 0, void 0, function() {
        var r, n, m, o, i, m, a, l, m, s, c, m, d, u, m, f, g, m, B, Q, m;
        return se(this, function(F) {
          switch (F.label) {
            case 0:
              if (jA(t.element.container.flags, 16)) debugger;
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
              B = 0, Q = t.positiveZIndex, F.label = 27;
            case 27:
              return B < Q.length ? (m = Q[B], [
                4,
                this.renderStack(m)
              ]) : [
                3,
                30
              ];
            case 28:
              F.sent(), F.label = 29;
            case 29:
              return B++, [
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
                var d, u, f, p, M, z, K, N, x, g, p, M, z, K, N, B, Q, m, F, w, v, U, C, S, x, I, p, T, D, K, N, R, M, z, rA, P, X, j, nA, k, $, V;
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
                      return d && (f = ea(t, r, [
                        d.width,
                        d.height,
                        d.width / d.height
                      ]), p = f[0], M = f[1], z = f[2], K = f[3], N = f[4], x = o.ctx.createPattern(o.resizeImage(d, K, N), "repeat"), o.renderRepeat(p, x, M, z)), [
                        3,
                        6
                      ];
                    case 5:
                      by(c) ? (g = ea(t, r, [
                        null,
                        null,
                        null
                      ]), p = g[0], M = g[1], z = g[2], K = g[3], N = g[4], B = Cy(c.angle, K, N), Q = B[0], m = B[1], F = B[2], w = B[3], v = B[4], U = document.createElement("canvas"), U.width = K, U.height = N, C = U.getContext("2d"), S = C.createLinearGradient(m, w, F, v), Bc(c.stops, Q).forEach(function(dA) {
                        return S.addColorStop(dA.stop, JA(dA.color));
                      }), C.fillStyle = S, C.fillRect(0, 0, K, N), K > 0 && N > 0 && (x = o.ctx.createPattern(U, "repeat"), o.renderRepeat(p, x, M, z))) : Fy(c) && (I = ea(t, r, [
                        null,
                        null,
                        null
                      ]), p = I[0], T = I[1], D = I[2], K = I[3], N = I[4], R = c.position.length === 0 ? [
                        Ns
                      ] : c.position, M = SA(R[0], K), z = SA(R[R.length - 1], N), rA = wy(c, M, z, K, N), P = rA[0], X = rA[1], P > 0 && X > 0 && (j = o.ctx.createRadialGradient(T + M, D + z, 0, T + M, D + z, P), Bc(c.stops, P * 2).forEach(function(dA) {
                        return j.addColorStop(dA.stop, JA(dA.color));
                      }), o.path(p), o.ctx.fillStyle = j, P !== X ? (nA = t.bounds.left + 0.5 * t.bounds.width, k = t.bounds.top + 0.5 * t.bounds.height, $ = X / P, V = 1 / $, o.ctx.save(), o.ctx.translate(nA, k), o.ctx.transform(1, 0, 0, $, 0, 0), o.ctx.translate(-nA, -k), o.ctx.fillRect(T, V * (D - k) + k, K, N * V), o.ctx.restore()) : o.ctx.fill())), Y.label = 6;
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
          return this.path(zc(n, r)), this.ctx.fillStyle = JA(t), this.ctx.fill(), [
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
              return i = SF(o, n), this.path(i), this.ctx.fillStyle = JA(t), this.ctx.fill(), a = xF(o, n), this.path(a), this.ctx.fill(), [
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
              ], i = PF(Ar(r.backgroundClip, 0), t.curves), n || r.boxShadow.length ? (this.ctx.save(), this.path(i), this.ctx.clip(), ht(r.backgroundColor) || (this.ctx.fillStyle = JA(r.backgroundColor), this.ctx.fill()), [
                4,
                this.renderBackgroundImage(t.container)
              ]) : [
                3,
                2
              ];
            case 1:
              u.sent(), this.ctx.restore(), r.boxShadow.slice(0).reverse().forEach(function(f) {
                d.ctx.save();
                var g = Fo(t.curves), B = f.inset ? 0 : KF, Q = UF(g, -B + (f.inset ? 1 : -1) * f.spread.number, (f.inset ? 1 : -1) * f.spread.number, f.spread.number * (f.inset ? -2 : 2), f.spread.number * (f.inset ? -2 : 2));
                f.inset ? (d.path(g), d.ctx.clip(), d.mask(Q)) : (d.mask(g), d.ctx.clip(), d.path(Q)), d.ctx.shadowOffsetX = f.offsetX.number + B, d.ctx.shadowOffsetY = f.offsetY.number, d.ctx.shadowColor = JA(f.color), d.ctx.shadowBlur = f.blur.number, d.ctx.fillStyle = f.inset ? JA(f.color) : "rgba(0,0,0,1)", d.ctx.fill(), d.ctx.restore();
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
        var a, l, s, c, d, u, f, g, B, Q, m, F, w, v, U, C, U, C;
        return se(this, function(S) {
          return this.ctx.save(), a = IF(o, n), l = zc(o, n), i === 2 && (this.path(l), this.ctx.clip()), Fe(l[0]) ? (s = l[0].start.x, c = l[0].start.y) : (s = l[0].x, c = l[0].y), Fe(l[1]) ? (d = l[1].end.x, u = l[1].end.y) : (d = l[1].x, u = l[1].y), n === 0 || n === 2 ? f = Math.abs(s - d) : f = Math.abs(c - u), this.ctx.beginPath(), i === 3 ? this.formatPath(a) : this.formatPath(l.slice(0, 2)), g = r < 3 ? r * 3 : r * 2, B = r < 3 ? r * 2 : r, i === 3 && (g = r, B = r), Q = true, f <= g * 2 ? Q = false : f <= g * 2 + B ? (m = f / (2 * g + B), g *= m, B *= m) : (F = Math.floor((f + B) / (g + B)), w = (f - F * g) / (F - 1), v = (f - (F + 1) * g) / F, B = v <= 0 || Math.abs(B - w) < Math.abs(B - v) ? w : v), Q && (i === 3 ? this.ctx.setLineDash([
            0,
            g + B
          ]) : this.ctx.setLineDash([
            g,
            B
          ])), i === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = r) : this.ctx.lineWidth = r * 2 + 1.1, this.ctx.strokeStyle = JA(t), this.ctx.stroke(), this.ctx.setLineDash([]), i === 2 && (Fe(l[0]) && (U = l[3], C = l[0], this.ctx.beginPath(), this.formatPath([
            new Z(U.end.x, U.end.y),
            new Z(C.start.x, C.start.y)
          ]), this.ctx.stroke()), Fe(l[1]) && (U = l[1], C = l[2], this.ctx.beginPath(), this.formatPath([
            new Z(U.end.x, U.end.y),
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
              return this.options.backgroundColor && (this.ctx.fillStyle = JA(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), r = EF(t), [
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
  })(bf), DF = function(A) {
    return A instanceof af || A instanceof of ? true : A instanceof Ws && A.type !== yo && A.type !== vo;
  }, PF = function(A, e) {
    switch (A) {
      case 0:
        return Fo(e);
      case 2:
        return vF(e);
      default:
        return Uo(e);
    }
  }, _F = function(A) {
    switch (A) {
      case 1:
        return "center";
      case 2:
        return "right";
      default:
        return "left";
    }
  }, NF = [
    "-apple-system",
    "system-ui"
  ], GF = function(A) {
    return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? A.filter(function(e) {
      return NF.indexOf(e) === -1;
    }) : A;
  }, VF = (function(A) {
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
                $F(r)
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
  })(bf), $F = function(A) {
    return new Promise(function(e, t) {
      var r = new Image();
      r.onload = function() {
        e(r);
      }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(A));
    });
  }, WF = (function() {
    function A(e) {
      var t = e.id, r = e.enabled;
      this.id = t, this.enabled = r, this.start = Date.now();
    }
    return A.prototype.debug = function() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.debug == "function" ? console.debug.apply(console, Qn([
        this.id,
        this.getTime() + "ms"
      ], e)) : this.info.apply(this, e));
    }, A.prototype.getTime = function() {
      return Date.now() - this.start;
    }, A.prototype.info = function() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      this.enabled && typeof window < "u" && window.console && typeof console.info == "function" && console.info.apply(console, Qn([
        this.id,
        this.getTime() + "ms"
      ], e));
    }, A.prototype.warn = function() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.warn == "function" ? console.warn.apply(console, Qn([
        this.id,
        this.getTime() + "ms"
      ], e)) : this.info.apply(this, e));
    }, A.prototype.error = function() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.error == "function" ? console.error.apply(console, Qn([
        this.id,
        this.getTime() + "ms"
      ], e)) : this.info.apply(this, e));
    }, A.instances = {}, A;
  })(), zF = (function() {
    function A(e, t) {
      var r;
      this.windowBounds = t, this.instanceName = "#" + A.instanceCount++, this.logger = new WF({
        id: this.instanceName,
        enabled: e.logging
      }), this.cache = (r = e.cache) !== null && r !== void 0 ? r : new fF(this, e);
    }
    return A.instanceCount = 1, A;
  })(), jF = function(A, e) {
    return e === void 0 && (e = {}), XF(A, e);
  };
  typeof window < "u" && mf.setContext(window);
  var XF = function(A, e) {
    return de(void 0, void 0, void 0, function() {
      var t, r, n, o, i, a, l, s, c, d, u, f, g, B, Q, m, F, w, v, U, S, C, S, x, I, p, T, D, K, N, R, M, z, rA, P, X, j, nA, k, $;
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
              allowTaint: (x = e.allowTaint) !== null && x !== void 0 ? x : false,
              imageTimeout: (I = e.imageTimeout) !== null && I !== void 0 ? I : 15e3,
              proxy: e.proxy,
              useCORS: (p = e.useCORS) !== null && p !== void 0 ? p : false
            }, o = xa({
              logging: (T = e.logging) !== null && T !== void 0 ? T : true,
              cache: e.cache
            }, n), i = {
              windowWidth: (D = e.windowWidth) !== null && D !== void 0 ? D : r.innerWidth,
              windowHeight: (K = e.windowHeight) !== null && K !== void 0 ? K : r.innerHeight,
              scrollX: (N = e.scrollX) !== null && N !== void 0 ? N : r.pageXOffset,
              scrollY: (R = e.scrollY) !== null && R !== void 0 ? R : r.pageYOffset
            }, a = new ot(i.scrollX, i.scrollY, i.windowWidth, i.windowHeight), l = new zF(o, a), s = (M = e.foreignObjectRendering) !== null && M !== void 0 ? M : false, c = {
              allowTaint: (z = e.allowTaint) !== null && z !== void 0 ? z : false,
              onclone: e.onclone,
              ignoreElements: e.ignoreElements,
              inlineImages: s,
              copyStyles: s
            }, l.logger.debug("Starting document clone with size " + a.width + "x" + a.height + " scrolled to " + -a.left + "," + -a.top), d = new Vc(l, A, c), u = d.clonedReferenceElement, u ? [
              4,
              d.toIFrame(t, a)
            ] : [
              2,
              Promise.reject("Unable to find element in cloned iframe")
            ];
          case 1:
            return f = V.sent(), g = zs(u) || Jb(u) ? Uw(u.ownerDocument) : gi(l, u), B = g.width, Q = g.height, m = g.left, F = g.top, w = JF(l, u, e.backgroundColor), v = {
              canvas: e.canvas,
              backgroundColor: w,
              scale: (P = (rA = e.scale) !== null && rA !== void 0 ? rA : r.devicePixelRatio) !== null && P !== void 0 ? P : 1,
              x: ((X = e.x) !== null && X !== void 0 ? X : 0) + m,
              y: ((j = e.y) !== null && j !== void 0 ? j : 0) + F,
              width: (nA = e.width) !== null && nA !== void 0 ? nA : Math.ceil(B),
              height: (k = e.height) !== null && k !== void 0 ? k : Math.ceil(Q)
            }, s ? (l.logger.debug("Document cloned, using foreign object rendering"), S = new VF(l, v), [
              4,
              S.render(u)
            ]) : [
              3,
              3
            ];
          case 2:
            return U = V.sent(), [
              3,
              5
            ];
          case 3:
            return l.logger.debug("Document cloned, element located at " + m + "," + F + " with size " + B + "x" + Q + " using computed rendering"), l.logger.debug("Starting DOM parsing"), C = cf(l, u), w === C.styles.backgroundColor && (C.styles.backgroundColor = At.TRANSPARENT), l.logger.debug("Starting renderer for element at " + v.x + "," + v.y + " with size " + v.width + "x" + v.height), S = new MF(l, v), [
              4,
              S.render(C)
            ];
          case 4:
            U = V.sent(), V.label = 5;
          case 5:
            return (!(($ = e.removeContainer) !== null && $ !== void 0) || $) && (Vc.destroy(f) || l.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), l.logger.debug("Finished rendering"), [
              2,
              U
            ];
        }
      });
    });
  }, JF = function(A, e, t) {
    var r = e.ownerDocument, n = r.documentElement ? Nr(A, getComputedStyle(r.documentElement).backgroundColor) : At.TRANSPARENT, o = r.body ? Nr(A, getComputedStyle(r.body).backgroundColor) : At.TRANSPARENT, i = typeof t == "string" ? Nr(A, t) : t === null ? At.TRANSPARENT : 4294967295;
    return e === r.documentElement ? ht(n) ? ht(o) ? i : o : n : i;
  }, ta = {
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
  }, YF = {
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
  }, ZF = function(A, e) {
    var t = YA({}, YF);
    if (A) for (var r in ta) Object.prototype.hasOwnProperty.call(ta, r) && (t[r] = YA(YA({}, Object.prototype.hasOwnProperty.call(t, r) ? t[r] : {}), ta[r]));
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = YA(YA({}, Object.prototype.hasOwnProperty.call(t, r) ? t[r] : {}), e[r]));
    return t;
  }, Xc = function(A, e) {
    return A ? YA(YA({}, e.rbgcpControlBtn), e.rbgcpControlBtnSelected) : YA({}, e.rbgcpControlBtn);
  }, Wr = function(A, e) {
    return A ? YA(YA({}, e.rbgcpControlIconBtn), e.rbgcpControlBtnSelected) : YA({}, e.rbgcpControlIconBtn);
  }, Wn = function(A, e) {
    return A ? YA(YA(YA({}, e.rbgcpControlBtn), e.rbgcpColorModelDropdownBtn), e.rbgcpControlBtnSelected) : YA(YA({}, e.rbgcpControlBtn), e.rbgcpColorModelDropdownBtn);
  }, Pe = function() {
    return Pe = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, Pe.apply(this, arguments);
  }, qF = function(A) {
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
  }, AU = function(A) {
    var e = A.onSelect, t = bA().defaultStyles, r = h.useState(null), n = r[0], o = r[1], i = h.useState(false), a = i[0], l = i[1], s = h.useState(false), c = s[0], d = s[1], u = function() {
      var B = document.getElementById("root");
      l(true), jF(B).then(function(Q) {
        var m = document.createElement("canvas"), F = m.getContext("2d", {
          willReadFrequently: true
        });
        B && F && (m.width = B.offsetWidth * 2, m.height = B.offsetHeight * 2, F.drawImage(Q, 0, 0)), o(F);
      });
    }, f = function(B) {
      if (B.stopPropagation(), n) {
        var Q = B.pageX, m = B.pageY, F = Q * 2, w = m * 2, v = n.getImageData(F, w, 1, 1).data;
        e("rgba(".concat(v[0], ", ").concat(v[1], ", ").concat(v[2], ", 1)"));
      }
      d(false), l(false);
    }, g = function() {
      if (d(true), !window.EyeDropper) u();
      else {
        var B = new window.EyeDropper(), Q = new window.AbortController();
        B.open({
          signal: Q.signal
        }).then(function(m) {
          var F = ne(m.sRGBHex), w = F.toRgb(), v = w.r, U = w.g, C = w.b;
          e("rgba(".concat(v, ", ").concat(U, ", ").concat(C, ", 1)")), d(false);
        }).catch(function(m) {
          console.log(m), d(false);
        });
      }
    };
    return H.createElement("div", null, H.createElement("div", {
      onClick: g,
      id: "rbgcp-eyedropper-btn",
      style: Pe(Pe({}, t.rbgcpEyedropperBtn), Wr(a, t))
    }, H.createElement(qF, {
      color: c ? "rgb(86, 140, 245)" : ""
    })), a && H.createElement(Fw, null, H.createElement("div", {
      onClick: function(B) {
        return f(B);
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
  }, ra = function(A) {
    var e = A.value, t = A.reffy, r = A.label, n = A.config, o = A.callback, i = A.squareWidth, a = A.openAdvanced, l = A.defaultStyles, s = A.pickerIdSuffix, c = n.barSize, d = h.useState(false), u = d[0], f = d[1], g = h.useState(2), B = g[0], Q = g[1], m = e * (i - 18);
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
      u && o(ur(C, c));
    }, v = function(C) {
      u || o(ur(C, c));
    }, U = function() {
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
        top: B
      }, l.rbgcpHandle),
      id: "rbgcp-advanced-bar-".concat(r, "-handle").concat(s),
      onMouseDown: U,
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
        top: B + 2,
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
  }, eU = function(A) {
    var e = A.openAdvanced, t = bA(), r = t.config, n = t.tinyColor, o = t.handleChange, i = t.squareWidth, a = t.hc, l = t.defaultStyles, s = t.pickerIdSuffix, c = n.toHsl(), d = c.s, u = c.l, f = h.useRef(null), g = h.useRef(null), B = h.useRef(null);
    TC(f, a == null ? void 0 : a.h, u * 100, i), LC(g, a == null ? void 0 : a.h, d * 100, i), kC(B, a == null ? void 0 : a.h, d * 100, i);
    var Q = function(w) {
      var v = ne({
        h: a == null ? void 0 : a.h,
        s: w / 100,
        l: u
      }).toRgb(), U = v.r, C = v.g, S = v.b;
      o("rgba(".concat(U, ",").concat(C, ",").concat(S, ",").concat(a == null ? void 0 : a.a, ")"));
    }, m = function(w) {
      var v = ne({
        h: a == null ? void 0 : a.h,
        s: d,
        l: w / 100
      }).toRgb(), U = v.r, C = v.g, S = v.b;
      o("rgba(".concat(U, ",").concat(C, ",").concat(S, ",").concat(a == null ? void 0 : a.a, ")"));
    }, F = function(w) {
      var v = ne({
        h: a == null ? void 0 : a.h,
        s: (a == null ? void 0 : a.s) * 100,
        v: w
      }).toRgb(), U = v.r, C = v.g, S = v.b;
      o("rgba(".concat(U, ",").concat(C, ",").concat(S, ",").concat(a == null ? void 0 : a.a, ")"));
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
    }, H.createElement(ra, {
      value: d,
      reffy: f,
      config: r,
      label: "Saturation",
      callback: Q,
      squareWidth: i,
      openAdvanced: e,
      defaultStyles: l,
      pickerIdSuffix: s
    }), H.createElement(ra, {
      value: u,
      config: r,
      reffy: g,
      label: "Lightness",
      callback: m,
      squareWidth: i,
      openAdvanced: e,
      defaultStyles: l,
      pickerIdSuffix: s
    }), H.createElement(ra, {
      value: a == null ? void 0 : a.v,
      config: r,
      reffy: B,
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
  }, tU = function(A) {
    var e = A.openComparibles, t = bA(), r = t.tinyColor, n = t.handleChange, o = t.defaultStyles, i = t.pickerIdSuffix, a = r.analogous(), l = r.monochromatic(), s = r.triad(), c = r.tetrad(), d = function(u) {
      var f = u.toRgb(), g = f.r, B = f.g, Q = f.b, m = f.a;
      n("rgba(".concat(g, ",").concat(B, ",").concat(Q, ",").concat(m, ")"));
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
  }, rU = function() {
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
    }, H.createElement(hw, {
      color: i ? "#568CF5" : ""
    })), H.createElement("div", {
      onClick: s,
      id: "rbgcp-radial-btn".concat(o),
      style: IA(IA({}, n.rbgcpControlBtn), a && n.rbgcpControlBtnSelected),
      tabIndex: 0,
      role: "button",
      onKeyDown: function() {
      }
    }, H.createElement(mw, {
      color: a ? "#568CF5" : ""
    })));
  }, nU = function() {
    var A = bA(), e = A.currentLeft, t = A.currentColor, r = A.defaultStyles, n = A.handleGradient, o = A.pickerIdSuffix, i = function(a) {
      n(t, cr(parseInt(a), 0, 100));
    };
    return H.createElement("div", {
      style: IA(IA(IA(IA({}, r.rbgcpControlBtnWrapper), r.rbgcpControlInputWrap), r.rbgcpStopInputWrap), {
        paddingLeft: 8
      }),
      id: "rbgcp-stop-input-wrapper".concat(o)
    }, H.createElement(Qw, null), H.createElement("input", {
      value: e,
      id: "rbgcp-stop-input".concat(o),
      onChange: function(a) {
        return i(a.target.value);
      },
      style: IA(IA({}, r.rbgcpControlInput), r.rbgcpStopInput)
    }));
  }, oU = function() {
    var A = bA(), e = A.degrees, t = A.onChange, r = A.value, n = A.defaultStyles, o = A.pickerIdSuffix, i = function(a) {
      var l = cr(a.target.value, 0, 360), s = r.split(/,(.+)/)[1];
      t("linear-gradient(".concat(l ?? 0, "deg, ").concat(s));
    };
    return H.createElement("div", {
      style: IA(IA(IA({}, n.rbgcpControlBtnWrapper), n.rbgcpControlInputWrap), n.rbgcpDegreeInputWrap),
      id: "rbgcp-degree-input-wrapper".concat(o)
    }, H.createElement(yw, null), H.createElement("input", {
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
  }, iU = function() {
    var A = bA(), e = A.colors, t = A.selectedColor, r = A.createGradientStr, n = A.defaultStyles, o = A.pickerIdSuffix, i = function() {
      if ((e == null ? void 0 : e.length) > 2) {
        var a = e == null ? void 0 : e.map(function(s, c) {
          return IA(IA({}, s), {
            value: c === t - 1 ? fi(s) : cn(s)
          });
        }), l = a == null ? void 0 : a.filter(function(s, c) {
          return c !== t;
        });
        r(l);
      }
    };
    return H.createElement("div", {
      onClick: i,
      style: IA(IA({}, Wr(false, n)), {
        width: 28
      }),
      id: "rbgcp-point-delete-btn".concat(o),
      tabIndex: 0,
      role: "button",
      onKeyDown: function() {
      }
    }, H.createElement(Bw, null));
  }, Jc = function(A) {
    var e = A.hideGradientType, t = A.hideGradientAngle, r = A.hideGradientStop, n = bA(), o = n.gradientType, i = n.defaultStyles, a = n.pickerIdSuffix;
    return H.createElement("div", {
      style: IA(IA({}, i.rbgcpControlBtnWrapper), {
        marginTop: 12,
        marginBottom: -4,
        justifyContent: "space-between",
        paddingLeft: e ? 4 : 0
      }),
      id: "rbgcp-gradient-controls-wrap".concat(a)
    }, !e && H.createElement(rU, null), H.createElement("div", {
      style: {
        width: 53
      }
    }, !t && o === "linear-gradient" && H.createElement(oU, null)), !r && H.createElement(nU, null), H.createElement(iU, null));
  }, An = function() {
    return An = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, An.apply(this, arguments);
  }, aU = function(A) {
    var e, t, r = A.hideColorTypeBtns, n = A.setGradient, o = A.isGradient, i = A.setSolid, a = A.locales, l = bA(), s = l.defaultStyles, c = l.pickerIdSuffix;
    return r ? H.createElement("div", {
      style: {
        width: 1
      }
    }) : H.createElement("div", {
      style: An({
        display: "flex",
        alignItems: "center"
      }, s.rbgcpControlBtnWrapper),
      id: "rbgcp-color-type-btns".concat(c)
    }, H.createElement("div", {
      onClick: i,
      id: "rbgcp-solid-btn".concat(c),
      style: Xc(!o, s)
    }, (e = a == null ? void 0 : a.CONTROLS) === null || e === void 0 ? void 0 : e.SOLID), H.createElement("div", {
      onClick: n,
      id: "rbgcp-gradient-btn".concat(c),
      style: Xc(o ?? false, s)
    }, (t = a == null ? void 0 : a.CONTROLS) === null || t === void 0 ? void 0 : t.GRADIENT));
  }, sU = function(A) {
    var e = A.openInputType, t = A.setOpenInputType, r = bA(), n = r.inputType, o = r.setInputType, i = r.defaultStyles, a = r.pickerIdSuffix, l = e ? "visibility 0ms linear" : "visibility 100ms linear 150ms", s = e ? "z-index 0ms linear" : "z-index 100ms linear 150ms", c = e ? "opacity 120ms linear" : "opacity 150ms linear 50ms", d = function(u, f) {
      e && (u.stopPropagation(), o(f), t(false));
    };
    return H.createElement("div", {
      style: An({
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
      style: Wn(n === "rgb", i)
    }, "RGB"), H.createElement("div", {
      id: "rbgcp-color-model-hsl-btn".concat(a),
      onClick: function(u) {
        return d(u, "hsl");
      },
      style: Wn(n === "hsl", i)
    }, "HSL"), H.createElement("div", {
      id: "rbgcp-color-model-hsv-btn".concat(a),
      onClick: function(u) {
        return d(u, "hsv");
      },
      style: Wn(n === "hsv", i)
    }, "HSV"), H.createElement("div", {
      id: "rbgcp-color-model-cmyk-btn".concat(a),
      onClick: function(u) {
        return d(u, "cmyk");
      },
      style: Wn(n === "cmyk", i)
    }, "CMYK"));
  }, lU = function(A) {
    var e, t, r = A.locales, n = A.hideEyeDrop, o = n === void 0 ? false : n, i = A.hideAdvancedSliders, a = i === void 0 ? false : i, l = A.hideColorGuide, s = l === void 0 ? false : l, c = A.hideInputType, d = c === void 0 ? false : c, u = A.hideColorTypeBtns, f = u === void 0 ? false : u, g = A.hideGradientControls, B = g === void 0 ? false : g, Q = A.hideGradientType, m = Q === void 0 ? false : Q, F = A.hideGradientAngle, w = F === void 0 ? false : F, v = A.hideGradientStop, U = v === void 0 ? false : v, C = bA(), S = C.config, x = C.onChange, I = C.isGradient, p = C.handleChange, T = C.previous, D = C.defaultStyles, K = C.pickerIdSuffix, N = S.defaultColor, R = S.defaultGradient, M = h.useState(false), z = M[0], rA = M[1], P = h.useState(false), X = P[0], j = P[1], nA = h.useState(false), k = nA[0], $ = nA[1], V = o && a && s && d, Y = (e = T == null ? void 0 : T.color) !== null && e !== void 0 ? e : N, dA = (t = T == null ? void 0 : T.gradient) !== null && t !== void 0 ? t : R, iA = function() {
      x(Y);
    }, eA = function() {
      x(dA);
    }, J = o && a && s && d, oA = J && f;
    return oA ? I && !B ? H.createElement(Jc, {
      hideGradientType: m,
      hideGradientAngle: w,
      hideGradientStop: U
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
      id: "rbgcp-controls-wrapper".concat(K)
    }, H.createElement(aU, {
      hideColorTypeBtns: f,
      setGradient: eA,
      isGradient: I,
      setSolid: iA,
      locales: r
    }), !J && H.createElement("div", {
      style: An({
        display: V ? "none" : ""
      }, D.rbgcpControlBtnWrapper),
      id: "rbgcp-control-rightside-wrapper".concat(K)
    }, !o && H.createElement(AU, {
      onSelect: p
    }), !a && H.createElement("div", {
      id: "rbgcp-advanced-btn".concat(K),
      onClick: function() {
        return $(!k);
      },
      style: Wr(k, D)
    }, H.createElement(Cw, {
      color: k ? "#568CF5" : ""
    })), !s && H.createElement("div", {
      style: Wr(z, D),
      onClick: function() {
        return rA(!z);
      },
      id: "rbgcp-comparibles-btn".concat(K)
    }, H.createElement(vw, {
      color: z ? "#568CF5" : ""
    })), !d && H.createElement("div", {
      id: "rbgcp-color-model-btn".concat(K),
      onClick: function() {
        return j(!X);
      },
      style: Wr(X, D)
    }, H.createElement(ww, {
      color: X ? "#568CF5" : ""
    }), H.createElement(sU, {
      openInputType: X,
      setOpenInputType: j
    })))), !a && H.createElement(eU, {
      openAdvanced: k
    }), !s && H.createElement(tU, {
      openComparibles: z
    }), I && !B && H.createElement(Jc, {
      hideGradientType: m,
      hideGradientAngle: w,
      hideGradientStop: U
    }));
  }, _e = function() {
    return _e = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, _e.apply(this, arguments);
  }, Yc = function(A, e, t) {
    if (t || arguments.length === 2) for (var r = 0, n = e.length, o; r < n; r++) (o || !(r in e)) && (o || (o = Array.prototype.slice.call(e, 0, r)), o[r] = e[r]);
    return A.concat(o || Array.prototype.slice.call(e));
  }, cU = function(A) {
    var e = A.left, t = A.i, r = A.setDragging, n = bA(), o = n.colors, i = n.squareWidth, a = n.selectedColor, l = n.defaultStyles, s = n.pickerIdSuffix, c = n.createGradientStr, d = a === t, u = (i - 18) / 100, f = function(B) {
      var Q = o == null ? void 0 : o.map(function(m, F) {
        return _e(_e({}, m), {
          value: F === B ? fi(m) : cn(m)
        });
      });
      c(Q);
    }, g = function(B) {
      B.stopPropagation(), f(t), r(true);
    };
    return H.createElement("div", {
      onMouseDown: function(B) {
        return g(B);
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
  }, uU = function() {
    var A = bA(), e = A.value, t = A.colors, r = A.config, n = A.squareWidth, o = A.currentColor, i = A.handleGradient, a = A.pickerIdSuffix, l = A.createGradientStr, s = r.barSize, c = h.useState(false), d = c[0], u = c[1];
    function f(w) {
      return w.replace(/(radial|linear)-gradient\([^,]+,/, "linear-gradient(90deg,");
    }
    var g = function(w) {
      var v, U = ur(w, s), C = (v = Yc(Yc([], t.map(function(S) {
        return _e(_e({}, S), {
          value: cn(S)
        });
      }), true), [
        {
          value: o,
          left: U
        }
      ], false)) === null || v === void 0 ? void 0 : v.sort(function(S, x) {
        return S.left - x.left;
      });
      l(C);
    }, B = function() {
      u(false);
    }, Q = function(w) {
      d || (g(w), u(true));
    }, m = function(w) {
      d && i(o, ur(w, s));
    }, F = function() {
      B();
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
      return H.createElement(cU, {
        i: v,
        left: w.left,
        key: "".concat(v, "-").concat(w),
        setDragging: u
      });
    }));
  }, dU = function(A) {
    var e = A.locales, t = A.presets, r = A.hideHue, n = A.hideInputs, o = A.hidePresets, i = A.hideOpacity, a = A.hideEyeDrop, l = A.hideControls, s = A.hideInputType, c = A.hideColorGuide, d = A.hidePickerSquare, u = A.hideGradientType, f = A.hideGradientStop, g = A.hideGradientAngle, B = A.hideColorTypeBtns, Q = A.hideAdvancedSliders, m = A.hideGradientControls, F = bA(), w = F.isGradient, v = F.pickerIdSuffix;
    return H.createElement("div", {
      style: {
        userSelect: "none"
      },
      id: "rbgcp-color-picker".concat(v)
    }, !d && H.createElement(uw, null), !l && H.createElement(lU, {
      locales: e,
      hideEyeDrop: a,
      hideInputType: s,
      hideColorGuide: c,
      hideGradientType: u,
      hideGradientStop: f,
      hideColorTypeBtns: B,
      hideGradientAngle: g,
      hideAdvancedSliders: Q,
      hideGradientControls: m
    }), w && H.createElement(uU, null), !r && H.createElement(RC, null), !i && H.createElement(dw, null), !n && H.createElement(VC, null), !o && H.createElement(pw, {
      presets: t
    }));
  }, So = function() {
    return So = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, So.apply(this, arguments);
  };
  function fU(A) {
    var e = A.idSuffix, t = A.value, r = t === void 0 ? "rgba(175, 51, 242, 1)" : t, n = A.onChange, o = A.hideControls, i = o === void 0 ? false : o, a = A.hideInputs, l = a === void 0 ? false : a, s = A.hideOpacity, c = s === void 0 ? false : s, d = A.hidePresets, u = d === void 0 ? false : d, f = A.hideHue, g = f === void 0 ? false : f, B = A.presets, Q = B === void 0 ? [] : B, m = A.hideEyeDrop, F = m === void 0 ? false : m, w = A.hideAdvancedSliders, v = w === void 0 ? false : w, U = A.hideColorGuide, C = U === void 0 ? false : U, S = A.hideInputType, x = S === void 0 ? false : S, I = A.hideColorTypeBtns, p = I === void 0 ? false : I, T = A.hideGradientType, D = T === void 0 ? false : T, K = A.hideGradientAngle, N = K === void 0 ? false : K, R = A.hideGradientStop, M = R === void 0 ? false : R, z = A.hideGradientControls, rA = z === void 0 ? false : z, P = A.locales, X = P === void 0 ? fw : P, j = A.width, nA = j === void 0 ? 294 : j, k = A.height, $ = k === void 0 ? 294 : k, V = A.style, Y = V === void 0 ? {} : V, dA = A.className, iA = A.disableDarkMode, eA = iA === void 0 ? false : iA, J = A.disableLightMode, oA = J === void 0 ? false : J, aA = A.hidePickerSquare, y = aA === void 0 ? false : aA, E = A.showHexAlpha, b = E === void 0 ? false : E, _ = A.config, W = _ === void 0 ? {} : _, G = FC(r), sA = typeof window > "u" || eA ? false : !!(window.matchMedia("(prefers-color-scheme: dark)").matches || oA), cA = ZF(sA, Y), fA = sA ? "-dark".concat(e ? "-".concat(e) : "") : e ? "-".concat(e) : "";
    return H.createElement("div", {
      className: dA,
      style: So(So({}, cA.body), {
        width: nA
      })
    }, H.createElement(IC, {
      value: G,
      onChange: n,
      squareWidth: nA,
      passedConfig: W,
      squareHeight: $,
      isDarkMode: sA,
      hideOpacity: c,
      showHexAlpha: b,
      defaultStyles: cA,
      pickerIdSuffix: fA
    }, H.createElement(dU, {
      hideControls: i,
      hideInputs: l,
      hidePresets: u,
      hideOpacity: c,
      hideHue: g,
      presets: Q,
      hideEyeDrop: F,
      hideAdvancedSliders: v,
      hideColorGuide: C,
      hideInputType: x,
      hideColorTypeBtns: p,
      hideGradientType: D,
      hideGradientAngle: N,
      hideGradientStop: M,
      hideGradientControls: rA,
      hidePickerSquare: y,
      locales: X
    })));
  }
  function gU(A) {
    if (!A || typeof A != "string") return null;
    const e = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/, t = A.match(e);
    if (!t) return null;
    let r = t[1];
    r.length === 3 && (r = r.split("").map((l) => l + l).join(""));
    const n = parseInt(r.substring(0, 2), 16), o = parseInt(r.substring(2, 4), 16), i = parseInt(r.substring(4, 6), 16);
    let a = 1;
    if (r.length === 8) {
      const l = parseInt(r.substring(6, 8), 16);
      a = Math.round(l / 255 * 1e3) / 1e3;
    }
    return {
      r: n,
      g: o,
      b: i,
      a
    };
  }
  function pU(A) {
    if (!A || typeof A != "string") return null;
    const e = /^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([\d.]+)\s*)?\)$/i, t = A.match(e);
    if (!t) return null;
    const r = parseInt(t[1], 10), n = parseInt(t[2], 10), o = parseInt(t[3], 10), i = t[4] !== void 0 ? parseFloat(t[4]) : 1;
    return r < 0 || r > 255 || n < 0 || n > 255 || o < 0 || o > 255 || i < 0 || i > 1 ? null : {
      r,
      g: n,
      b: o,
      a: Math.round(i * 1e3) / 1e3
    };
  }
  function er(A) {
    if (!A || typeof A != "string") return null;
    const e = A.trim();
    return e.startsWith("#") ? gU(e) : e.toLowerCase().startsWith("rgb") ? pU(e) : null;
  }
  function BU(A) {
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
  function hU(A) {
    if (!A || A.length < 2) return null;
    const e = A.find((u) => u.position === 50);
    if (e) {
      const u = er(e.color);
      return u ? u.a === 1 ? `rgb(${u.r}, ${u.g}, ${u.b})` : `rgba(${u.r}, ${u.g}, ${u.b}, ${u.a})` : null;
    }
    let t = null, r = null;
    for (let u = 0; u < A.length; u++) if (A[u].position <= 50 && (t = A[u]), A[u].position > 50 && !r) {
      r = A[u];
      break;
    }
    if (!r && t) {
      const u = er(t.color);
      return u ? u.a === 1 ? `rgb(${u.r}, ${u.g}, ${u.b})` : `rgba(${u.r}, ${u.g}, ${u.b}, ${u.a})` : null;
    }
    if (!t && r) {
      const u = er(r.color);
      return u ? u.a === 1 ? `rgb(${u.r}, ${u.g}, ${u.b})` : `rgba(${u.r}, ${u.g}, ${u.b}, ${u.a})` : null;
    }
    if (!t || !r) return null;
    const n = er(t.color), o = er(r.color);
    if (!n || !o) return null;
    const i = r.position - t.position;
    if (i === 0) {
      const u = o;
      return u.a === 1 ? `rgb(${u.r}, ${u.g}, ${u.b})` : `rgba(${u.r}, ${u.g}, ${u.b}, ${u.a})`;
    }
    const a = (50 - t.position) / i, l = Math.round(n.r + (o.r - n.r) * a), s = Math.round(n.g + (o.g - n.g) * a), c = Math.round(n.b + (o.b - n.b) * a), d = Math.round((n.a + (o.a - n.a) * a) * 1e3) / 1e3;
    return d === 1 ? `rgb(${l}, ${s}, ${c})` : `rgba(${l}, ${s}, ${c}, ${d})`;
  }
  Zc = function(A) {
    if (A == null || typeof A != "string") return null;
    const e = A.trim();
    if (e === "") return null;
    if (!/^(linear-gradient|radial-gradient)\(/i.test(e)) return er(e) ? e : null;
    try {
      const n = BU(e);
      return n ? hU(n) : null;
    } catch {
      return null;
    }
  };
  function na(A) {
    if (!A || A.trim() === "") return {
      isValid: true,
      normalizedValue: ""
    };
    const e = A.trim();
    return /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(e) ? {
      isValid: true,
      normalizedValue: e
    } : /^rgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*(,\s*[\d.]+\s*)?\)$/i.test(e) ? {
      isValid: true,
      normalizedValue: e
    } : /^(linear-gradient|radial-gradient)\(.*\)$/i.test(e) ? {
      isValid: true,
      normalizedValue: e
    } : {
      isValid: false,
      normalizedValue: e
    };
  }
  zn = function({ field: A, data: e, onDataChange: t, props: r }) {
    const n = A.name, [o, i] = h.useState(e[n] || ""), [a, l] = h.useState(false), [s, c] = h.useState(null), d = h.useRef(null), [u, f] = h.useState(null), g = h.useRef(false), B = h.useRef(e[n]), Q = r.context.theme, m = (C) => {
      if (C == null) {
        i(""), l(false), t({
          [n]: null
        }), g.current = false;
        return;
      }
      if (typeof C != "string") {
        l(true);
        return;
      }
      if (C.trim() === "") {
        i(""), l(false), t({
          [n]: null
        }), g.current = false;
        return;
      }
      const x = na(C);
      if (i(C), x.isValid) if (A.noGradient === true) {
        const I = Zc(x.normalizedValue);
        if (I === null) {
          l(true);
          return;
        }
        l(false), B.current = I, t({
          [n]: I
        });
      } else l(false), t({
        [n]: x.normalizedValue || null
      });
      else l(true);
    }, F = (C) => m(C), w = (C) => m(C.target.value), v = () => m(null), U = !!s;
    return h.useEffect(() => {
      const C = e[n];
      if (C !== B.current) {
        B.current = C;
        const S = C || "";
        i(S), l(false), (!S || S.trim() === "") && (g.current = false);
      }
    }, [
      e[n]
    ]), h.useEffect(() => {
      if (!U || !u) return;
      const C = new ResizeObserver(() => {
        var _a2;
        (_a2 = d.current) == null ? void 0 : _a2.updatePosition();
      });
      return C.observe(u), () => {
        C.disconnect();
      };
    }, [
      U,
      u
    ]), h.useEffect(() => {
      if (!U || g.current) return;
      const C = e[n];
      if (C && C.trim() !== "") {
        g.current = true;
        return;
      }
      let S = null;
      if (A.fallbackFields && Array.isArray(A.fallbackFields) && A.fallbackFields.length > 0) for (const x of A.fallbackFields) {
        const I = e[x];
        if (I && typeof I == "string") {
          const p = na(I);
          if (p.isValid && p.normalizedValue.trim() !== "") {
            S = p.normalizedValue;
            break;
          }
        }
      }
      if (!S && (!A.fallbackFields || A.fallbackFields.length > 0) && (S = Q.palette.primary.main), S) {
        const x = na(S);
        if (x.isValid) if (A.noGradient === true) {
          const I = Zc(x.normalizedValue);
          I !== null && (i(S), l(false), B.current = I, t({
            [n]: I
          }));
        } else i(S), l(false), t({
          [n]: S
        });
      }
      g.current = true;
    }, [
      U,
      e,
      n,
      A.fallbackFields,
      A.noGradient,
      Q.palette.primary.main,
      t
    ]), L.jsx(L.Fragment, {
      children: L.jsxs(td, {
        theme: Q,
        children: [
          L.jsxs(Te, {
            sx: {
              display: "flex",
              alignItems: "flex-start",
              gap: 0.5,
              mt: 1
            },
            children: [
              L.jsx(gC, {
                variant: "standard",
                fullWidth: true,
                value: o,
                error: a,
                helperText: a ? "Invalid color format (use Hex, RGB, RGBA, or Gradient)" : "",
                onChange: w,
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
              o && L.jsx(A0, {
                onClick: v,
                title: Ea.t("clear_color"),
                size: "large",
                sx: {
                  mt: -1,
                  mr: -1.5
                },
                children: L.jsx(hC, {})
              }),
              L.jsx(Te, {
                onClick: (C) => {
                  c(C.currentTarget);
                },
                title: Ea.t("choose_color"),
                sx: {
                  mt: o ? "4px" : "-2px",
                  px: "4px",
                  py: o ? "4px" : "3px",
                  backgroundColor: o ? Q.name === "light" ? Q.palette.common.white : "#121212" : "transparent",
                  borderRadius: "1px",
                  display: "inline-block",
                  cursor: "pointer",
                  verticalAlign: "middle",
                  boxSizing: "border-box",
                  border: a ? `1px solid ${Q.palette.error.main}` : o ? `1px solid ${Q.name === "light" ? Q.palette.grey[400] : Q.palette.common.black}` : `1px dashed ${Q.name === "light" ? Q.palette.grey[400] : Q.palette.text.secondary}`,
                  opacity: a ? 0.6 : 1
                },
                children: L.jsx(Te, {
                  sx: {
                    width: o ? "36px" : "38px",
                    height: o ? "14px" : "18px",
                    borderRadius: "2px",
                    background: a ? "repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,0,0,0.1) 2px, rgba(255,0,0,0.1) 4px)" : o || "transparent"
                  }
                })
              })
            ]
          }),
          L.jsx(cd, {
            action: d,
            "aria-hidden": !U,
            slotProps: {
              paper: {
                elevation: 0,
                sx: {
                  p: "9px",
                  borderRadius: "6px",
                  backgroundColor: "rgb(32,32,32)",
                  maxHeight: "calc(100vh - 100px)",
                  overflow: "auto"
                }
              }
            },
            open: U,
            anchorEl: s,
            onClose: () => c(null),
            transformOrigin: {
              vertical: "top",
              horizontal: "center"
            },
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "center"
            },
            children: L.jsx(Te, {
              ref: f,
              sx: {
                borderRadius: "6px"
              },
              children: L.jsx(fU, {
                value: o || Q.palette.primary.main,
                onChange: F,
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
  };
  let qc, mU, oa, CU, vU, QU;
  qc = (A) => {
    if (!A || typeof A != "string") return false;
    const e = A.trim();
    return e === "" || e.startsWith("data:") ? false : !!(e.startsWith("http://") || e.startsWith("https://") || e.startsWith("//") || e.startsWith("/") || e.startsWith("./") || e.startsWith("../") || (e.includes("/") || e.includes("\\")) && /\.[a-zA-Z0-9]+$/.test(e));
  };
  NU = (A) => {
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
          return (l === "" || l === "Active") && (a = false), i !== void 0 && (a = !o.iconColor && !o.enableIconColorMask && !o[`iconColor${i}`] && !qc(s) && !qc(c)), a;
        }
      },
      {
        name: `iconColor${e}`,
        label: "icon_color",
        default: "",
        type: "custom",
        fallbackFields: [
          ""
        ],
        noGradient: true,
        component: (o, i, a, l) => L.jsx(zn, {
          field: o,
          data: i,
          onDataChange: a,
          props: l
        })
      },
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
      {
        name: `textColor${e}`,
        label: "text_color",
        default: "",
        type: "custom",
        fallbackFields: [
          ""
        ],
        component: (o, i, a, l) => L.jsx(zn, {
          field: o,
          data: i,
          onDataChange: a,
          props: l
        })
      },
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
      {
        name: `background${e}`,
        label: "background",
        default: "",
        type: "custom",
        fallbackFields: [],
        component: (o, i, a, l) => L.jsx(zn, {
          field: o,
          data: i,
          onDataChange: a,
          props: l
        })
      },
      {
        label: "",
        type: "custom",
        component: () => L.jsx(ve, {
          dividerText: "frame_background"
        })
      },
      {
        name: `frameBackground${e}`,
        label: "frame_background",
        default: "",
        type: "custom",
        fallbackFields: [],
        component: (o, i, a, l) => L.jsx(zn, {
          field: o,
          data: i,
          onDataChange: a,
          props: l
        })
      }
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
  mU = async (A, e) => {
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
      const r = typeof A.values_count == "number" ? A.values_count : 0;
      for (let n = 1; n <= r; n++) t.forEach((o) => {
        delete A[`${o}${n}`];
      });
      A.values_count = 0;
    }
  };
  CU = (A, e) => {
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
  wU = (A, e = "oid") => async (t, r, n, o) => {
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
        icon: await mU(o, i),
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
          r[`value${f}`] = CU(c, a), r[`alias${f}`] = String(d);
        }));
      } else a === "boolean" && e === "oid" ? (r.values_count = 2, r.value1 = true, r.alias1 = "TRUE", r.value2 = false, r.alias2 = "FALSE") : e === "oid" && (r.values_count = 0);
      setTimeout(() => n(r), 100);
    } catch (i) {
      console.error(`Error handling OID change for ${r[e]}:`, i), oa(r, e), setTimeout(() => n(r), 100);
    }
  };
  GU = (A) => [
    {
      name: "oid",
      type: "id",
      label: "oid",
      onChange: wU(A)
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
      hidden: (e, t) => {
        var _a2;
        return ((_a2 = e.oidObject) == null ? void 0 : _a2.type) === "boolean" || e.oidObject === void 0;
      }
    },
    {
      name: "values_count",
      type: "number",
      default: 0,
      label: "values_count",
      hidden: (e, t) => {
        var _a2;
        return ((_a2 = e.oidObject) == null ? void 0 : _a2.type) === "boolean" || e.oidObject === void 0;
      }
    }
  ];
  vU = () => {
    const { isSignalVisible: A, refService: e, widget: t } = h.useContext(Br), r = h.useMemo(() => {
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
  yU = (A, e = 28) => {
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
  QU = (A) => {
    const { widget: e } = h.useContext(Br), [t, r] = h.useState("100%"), [n, o] = h.useState("100%"), { width: i, height: a } = yU(A), l = h.useMemo(() => ({
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
  Yt = function(A) {
    if (A == null || typeof A != "string") return null;
    const e = A.trim();
    return e === "" ? null : /^(linear-gradient|radial-gradient)\(/i.test(e) ? A : null;
  };
  bU = h.forwardRef(({ children: A, data: e, oidValue: t = null, isValidType: r = true, bgActive: n = true, sx: o = {} }, i) => {
    const a = h.useRef(null), l = h.useRef(null), [s, c] = h.useState(null), d = h.useRef(null), u = h.useRef(null), f = h.useContext(Br);
    if (!f) throw new Error("CollectionBase must be used within CollectionProvider");
    const { wrappedContent: g, widget: B } = f, { backgroundStyles: Q, borderStyles: m } = Ps(B.style), { width: F, height: w } = QU(s);
    vU();
    const v = B.data.oidObject, U = v == null ? void 0 : v._id, C = h.useMemo(() => {
      if (B.data.noFooter) return "";
      const I = t || t === 0 || String(t) === "false" ? `${t}${(v == null ? void 0 : v.unit) ?? ""}` : "";
      return e.footer || e.alias || e.value || I || "";
    }, [
      e.footer,
      e.alias,
      e.value,
      t,
      v == null ? void 0 : v.unit,
      B.data.noFooter
    ]), S = h.useMemo(() => go({
      overflow: "hidden",
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      ...Q,
      background: g ? e.frameBackground : e.frameBackground || "transparent",
      backgroundColor: g ? Yt(e.frameBackground) ? void 0 : e.frameBackground : Yt(e.frameBackground) ? "transparent" : e.frameBackground,
      borderColor: g ? "" : e.frameBackground || (m == null ? void 0 : m["border-color"])
    }), [
      Q,
      m,
      e.frameBackground,
      g
    ]), x = h.useMemo(() => go({
      overflow: "hidden",
      width: F,
      height: w,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: n && g ? e.background : n ? e.background || "transparent" : g ? void 0 : "transparent",
      borderColor: g ? "" : e.background || (m == null ? void 0 : m["border-color"]),
      borderRadius: B.data.circle || B.data.ellipse ? "50%" : void 0,
      ...o
    }), [
      F,
      w,
      n,
      g,
      e.background,
      m,
      B.data.circle,
      B.data.ellipse,
      o
    ]);
    return h.useEffect(() => {
      B.data.noHeader || !d.current || (d.current.innerHTML = e.header);
    }, [
      e.header,
      B.data.noHeader
    ]), h.useEffect(() => {
      B.data.noFooter || !u.current || (u.current.innerHTML = String(C));
    }, [
      C,
      B.data.noFooter
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
      square: B.data.squaredCorner,
      variant: B.data.outlinedFrame ? "outlined" : "elevation",
      sx: S,
      children: [
        !!r && L.jsxs(L.Fragment, {
          children: [
            L.jsx(Te, {
              sx: {
                width: B.data.noHeader ? "0%" : "100%",
                height: B.data.noHeader ? "0%" : "auto",
                mt: (B.data.basePadding ?? 8) / 2,
                mb: -(B.data.basePadding ?? 8) / 2
              },
              children: L.jsx(Zn, {
                ref: d,
                noWrap: true,
                variant: "body2",
                sx: {
                  fontSize: e.headerSize,
                  background: Yt(e.textColorCm),
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: Yt(e.textColorCm) ? "transparent" : e.textColorCm
                }
              })
            }),
            L.jsx(Te, {
              className: "BASE-BOX-1",
              ref: c,
              sx: {
                overflow: "hidden",
                p: B.data.basePadding,
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              },
              children: L.jsx(Ca, {
                ref: l,
                className: "BASE-PAPER-1",
                elevation: B.data.outlined ? 0 : Number(B.data.baseElevation) || 0,
                square: !B.data.basePadding || B.data.squaredCorner,
                variant: B.data.outlined ? "outlined" : "elevation",
                sx: x,
                children: A
              })
            }),
            L.jsx(Te, {
              sx: {
                width: B.data.noFooter ? "0%" : "100%",
                height: B.data.noFooter ? "0%" : "auto",
                mt: -(B.data.basePadding ?? 8) / 2,
                mb: (B.data.basePadding ?? 8) / 2
              },
              children: L.jsx(Zn, {
                ref: u,
                noWrap: true,
                variant: "body2",
                sx: {
                  fontSize: e.footerSize,
                  background: Yt(e.textColorCm),
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: Yt(e.textColorCm) ? "transparent" : e.textColorCm
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
          children: L.jsx(Zn, {
            variant: "body2",
            sx: {
              p: 1,
              width: "100%",
              textAlign: "center"
            },
            children: U ? `${U} has an invalid type!` : "Please select a valid object ID"
          })
        })
      ]
    });
  });
  bU.displayName = "CollectionBase";
  let Au;
  FU = (A) => !A || typeof A != "string" ? false : /^data:image\/(svg\+xml|png|jpe?g|gif);base64,/i.test(A);
  UU = (A, e, t) => !t && !FU(A) ? {} : !e || e === "" ? {} : {
    color: e,
    filter: "drop-shadow(0px 10000px 0)",
    transform: "translateY(-10000px)"
  };
  Au = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
  EU = ({ src: A, style: e = {}, alt: t = "" }) => {
    const r = A && A !== "undefined" && A !== null ? A : Au;
    return L.jsx("img", {
      src: r,
      alt: t,
      style: e,
      onError: (n) => {
        console.log("ERROR LOADING IMAGE, FALLING BACK TO TRANSPARENT PIXEL");
        const o = n.currentTarget;
        o.onerror = null, o.src = Au;
      }
    });
  };
  VU = ({ data: A, widget: e }) => {
    const r = h.useContext(Br).theme, n = A.icon, o = A.iconColor || r.palette.primary.main;
    return !e.data.noHeaderIcon && n ? L.jsx(EU, {
      alt: "",
      src: n,
      style: {
        position: "absolute",
        top: `calc(0px - ${A.iconYOffsetCm})`,
        right: `calc(0px - ${A.iconXOffsetCm})`,
        height: A.iconSizeCm,
        ...UU(n, o, !!A.forceColorMaskCm)
      }
    }) : null;
  };
  function SU(A, e) {
    return A[e];
  }
  function eu(A) {
    return typeof A == "object" && A !== null && "sliderOrientation" in A;
  }
  xU = (A) => typeof A == "number" ? `calc(${A / 100}rem * 0.875)` : void 0;
  function IU(A) {
    return {
      markerIconSize: A.markerIconSize,
      markerTextColor: A.markerTextColor,
      markerTextSize: A.markerTextSize,
      markerIconColor: A.markerIconColor
    };
  }
  function HU(A) {
    return {};
  }
  function BA(A) {
    for (const e of A) if (e.condition !== false && e.value !== void 0 && e.value !== null && !(typeof e.value == "string" && e.value.trim() === "")) return e.value;
  }
  function TU(A) {
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
        const B = s("value", String(f));
        return B != null ? `${B}${(t == null ? void 0 : t.unit) !== void 0 ? t.unit : ""}` : void 0;
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
  function LU(A = "", e = false, t) {
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
  $U = function(A) {
    const { theme: e, widget: t, widget: { data: r }, getPropertyValue: n } = h.useContext(Br), o = r[`${A}Object`], i = n(A), a = o == null ? void 0 : o.name, { fontStyles: l, textStyles: s, backgroundStyles: c } = Ps(t.style), [d, u] = h.useState(), f = h.useCallback(xU, []), g = h.useCallback((S, x = "") => {
      const I = `${S}${x}`;
      return SU(r, I);
    }, [
      r
    ]), B = h.useMemo(() => eu(r) ? IU(r) : HU(), [
      r
    ]), Q = h.useMemo(() => TU({
      rxData: r,
      oidObject: o,
      oidName: a,
      theme: e,
      fontStyles: l,
      textStyles: s,
      backgroundStyles: c,
      formatSize: f,
      getDataValue: g,
      widgetResolver: B,
      isSlider: eu(r)
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
      B
    ]), m = h.useCallback((S = "", x = false) => LU(S, x, Q), [
      Q
    ]), { states: F, widgetStates: w, minValue: v, maxValue: U } = h.useMemo(() => {
      const S = {};
      let x = null, I = null;
      const p = [], T = o == null ? void 0 : o.type, D = (o == null ? void 0 : o.commonStates) || {}, K = Object.entries(D);
      if (T === "number" || T === "string" || T === "boolean" || T === "mixed") for (let N = 1; N <= r.values_count; N++) {
        const R = g("value", String(N)), M = r[`alias${N}`], z = o == null ? void 0 : o.unit;
        if (R === void 0 || !/\S/.test(String(R))) continue;
        const rA = K.find(([k]) => k === String(R)), P = rA ? T === "number" ? Number(rA[0]) : String(rA[0]) : T === "number" ? Number(R) : R, X = String(i) === String(P), j = m(N, X);
        p.push({
          value: P,
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
        const nA = String(rA ? rA[0] : R);
        S[nA] = M && String(M).trim() !== "" ? M : `${R}${z}`;
      }
      if (T === "number" && p.length) {
        const N = p.map((R) => typeof R.value == "number" ? R.value : NaN).filter((R) => !isNaN(R));
        N.length > 0 && (x = Math.min(...N), I = Math.max(...N));
      }
      return {
        states: p,
        widgetStates: S,
        minValue: x,
        maxValue: I
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
          const x = F.findIndex((I) => String(I.value) === String(i));
          return x !== -1 ? (u(x + 1), m(x + 1, true)) : (u(void 0), m("", true));
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
      maxValue: U,
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
  lB as $,
  Yt as A,
  Q0 as B,
  ve as C,
  fo as D,
  bU as E,
  C0 as F,
  VU as G,
  Ea as H,
  A0 as I,
  NU as J,
  GU as K,
  Fm as L,
  J0 as M,
  _U as N,
  zn as O,
  Ca as P,
  FU as Q,
  xU as R,
  EU as S,
  Zn as T,
  Zc as U,
  gl as V,
  zp as W,
  kt as X,
  Le as Y,
  _u as Z,
  Bl as _,
  __tla,
  HA as a,
  rB as a0,
  ed as a1,
  wt as a2,
  vs as a3,
  ws as a4,
  da as a5,
  uh as a6,
  wU as a7,
  PU as a8,
  yU as a9,
  gd as aa,
  pr as ab,
  cl as ac,
  gr as ad,
  Np as ae,
  ms as af,
  Iu as ag,
  tt as ah,
  MU as ai,
  gs as aj,
  ZA as ak,
  KU as al,
  Bs as am,
  an,
  Ba as ao,
  Xh as ap,
  ce as b,
  rd as c,
  pA as d,
  OA as e,
  Ss as f,
  RA as g,
  ai as h,
  mA as i,
  L as j,
  rt as k,
  Be as l,
  MA as m,
  Dh as n,
  sr as o,
  Ei as p,
  Qa as q,
  We as r,
  lA as s,
  DU as t,
  KA as u,
  Br as v,
  Te as w,
  xm as x,
  $U as y,
  UU as z
};
