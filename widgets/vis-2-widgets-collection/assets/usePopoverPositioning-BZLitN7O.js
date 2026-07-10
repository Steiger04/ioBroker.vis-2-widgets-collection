import { v as w, a as Zi, R as S, __tla as __tla_0 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { g as Na, c as fn } from "./_commonjsHelpers-Cpj98o6Y.js";
import { v as lf } from "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
let ys, Te, Uh, Xh, NB, XB, sn, dU, Rt, iU, _e, Qs, tw, H0, bu, Eu, uh, RB, ws, Yu, sU, pa, fU, tl, ti, us, nl, ls, xA, uU, D0, ew, oU, Cs, Cw, zp, $p, lU, gU, os, on, hU, ps, oe, CU, uw, wU, BU, pU, Kh, Ep, We, io, o0, l0, HB, Nu, na, cU, fr, UB, as, pu, tt, nU, rs, rU, ce, Yp, pA, RA, rt, kA, he, Jr, N, vi, ga, GA, bl, iw, cs, gr, $e, dA, aU, DA, Zs, hA, vt, sa, is;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  var Gc = {
    exports: {}
  }, bo = {};
  var cf = w, uf = /* @__PURE__ */ Symbol.for("react.element"), df = /* @__PURE__ */ Symbol.for("react.fragment"), ff = Object.prototype.hasOwnProperty, gf = cf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Bf = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };
  function _c(A, e, t) {
    var r, n = {}, o = null, i = null;
    t !== void 0 && (o = "" + t), e.key !== void 0 && (o = "" + e.key), e.ref !== void 0 && (i = e.ref);
    for (r in e) ff.call(e, r) && !Bf.hasOwnProperty(r) && (n[r] = e[r]);
    if (A && A.defaultProps) for (r in e = A.defaultProps, e) n[r] === void 0 && (n[r] = e[r]);
    return {
      $$typeof: uf,
      type: A,
      key: o,
      ref: i,
      props: n,
      _owner: gf.current
    };
  }
  bo.Fragment = df;
  bo.jsx = _c;
  bo.jsxs = _c;
  Gc.exports = bo;
  N = Gc.exports;
  const $r = {
    black: "#000",
    white: "#fff"
  }, Pt = {
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    700: "#d32f2f",
    800: "#c62828"
  }, Nt = {
    50: "#f3e5f5",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    700: "#7b1fa2"
  }, Gt = {
    50: "#e3f2fd",
    200: "#90caf9",
    400: "#42a5f5",
    700: "#1976d2",
    800: "#1565c0"
  }, _t = {
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
  }, hr = {
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    700: "#f57c00",
    900: "#e65100"
  }, pf = {
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
  _e = "$$material";
  function to() {
    return to = Object.assign ? Object.assign.bind() : function(A) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r in t) ({}).hasOwnProperty.call(t, r) && (A[r] = t[r]);
      }
      return A;
    }, to.apply(null, arguments);
  }
  function hf(A) {
    if (A.sheet) return A.sheet;
    for (var e = 0; e < document.styleSheets.length; e++) if (document.styleSheets[e].ownerNode === A) return document.styleSheets[e];
  }
  function wf(A) {
    var e = document.createElement("style");
    return e.setAttribute("data-emotion", A.key), A.nonce !== void 0 && e.setAttribute("nonce", A.nonce), e.appendChild(document.createTextNode("")), e.setAttribute("data-s", ""), e;
  }
  var Cf = (function() {
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
      this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(wf(this));
      var n = this.tags[this.tags.length - 1];
      if (this.isSpeedy) {
        var o = hf(n);
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
  })(), ae = "-ms-", ro = "-moz-", wA = "-webkit-", Vc = "comm", Ga = "rule", _a = "decl", mf = "@import", $c = "@keyframes", vf = "@layer", Qf = Math.abs, Fo = String.fromCharCode, yf = Object.assign;
  function bf(A, e) {
    return te(A, 0) ^ 45 ? (((e << 2 ^ te(A, 0)) << 2 ^ te(A, 1)) << 2 ^ te(A, 2)) << 2 ^ te(A, 3) : 0;
  }
  function Wc(A) {
    return A.trim();
  }
  function Ff(A, e) {
    return (A = e.exec(A)) ? A[0] : A;
  }
  function CA(A, e, t) {
    return A.replace(e, t);
  }
  function qi(A, e) {
    return A.indexOf(e);
  }
  function te(A, e) {
    return A.charCodeAt(e) | 0;
  }
  function Wr(A, e, t) {
    return A.slice(e, t);
  }
  function Oe(A) {
    return A.length;
  }
  function Va(A) {
    return A.length;
  }
  function gn(A, e) {
    return e.push(A), A;
  }
  function Uf(A, e) {
    return A.map(e).join("");
  }
  var Uo = 1, ar = 1, Xc = 0, pe = 0, VA = 0, dr = "";
  function Eo(A, e, t, r, n, o, i) {
    return {
      value: A,
      root: e,
      parent: t,
      type: r,
      props: n,
      children: o,
      line: Uo,
      column: ar,
      length: i,
      return: ""
    };
  }
  function wr(A, e) {
    return yf(Eo("", null, null, "", null, null, 0), A, {
      length: -A.length
    }, e);
  }
  function Ef() {
    return VA;
  }
  function Sf() {
    return VA = pe > 0 ? te(dr, --pe) : 0, ar--, VA === 10 && (ar = 1, Uo--), VA;
  }
  function me() {
    return VA = pe < Xc ? te(dr, pe++) : 0, ar++, VA === 10 && (ar = 1, Uo++), VA;
  }
  function Ve() {
    return te(dr, pe);
  }
  function jn() {
    return pe;
  }
  function An(A, e) {
    return Wr(dr, A, e);
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
  function jc(A) {
    return Uo = ar = 1, Xc = Oe(dr = A), pe = 0, [];
  }
  function Jc(A) {
    return dr = "", A;
  }
  function Jn(A) {
    return Wc(An(pe - 1, Aa(A === 91 ? A + 2 : A === 40 ? A + 1 : A)));
  }
  function If(A) {
    for (; (VA = Ve()) && VA < 33; ) me();
    return Xr(A) > 2 || Xr(VA) > 3 ? "" : " ";
  }
  function xf(A, e) {
    for (; --e && me() && !(VA < 48 || VA > 102 || VA > 57 && VA < 65 || VA > 70 && VA < 97); ) ;
    return An(A, jn() + (e < 6 && Ve() == 32 && me() == 32));
  }
  function Aa(A) {
    for (; me(); ) switch (VA) {
      case A:
        return pe;
      case 34:
      case 39:
        A !== 34 && A !== 39 && Aa(VA);
        break;
      case 40:
        A === 41 && Aa(A);
        break;
      case 92:
        me();
        break;
    }
    return pe;
  }
  function Hf(A, e) {
    for (; me() && A + VA !== 57; ) if (A + VA === 84 && Ve() === 47) break;
    return "/*" + An(e, pe - 1) + "*" + Fo(A === 47 ? A : me());
  }
  function Tf(A) {
    for (; !Xr(Ve()); ) me();
    return An(A, pe);
  }
  function Lf(A) {
    return Jc(Yn("", null, null, null, [
      ""
    ], A = jc(A), 0, [
      0
    ], A));
  }
  function Yn(A, e, t, r, n, o, i, a, s) {
    for (var l = 0, c = 0, u = i, d = 0, g = 0, B = 0, p = 1, b = 1, h = 1, F = 0, m = "", Q = n, E = o, v = r, I = m; b; ) switch (B = F, F = me()) {
      case 40:
        if (B != 108 && te(I, u - 1) == 58) {
          qi(I += CA(Jn(F), "&", "&\f"), "&\f") != -1 && (h = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        I += Jn(F);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        I += If(B);
        break;
      case 92:
        I += xf(jn() - 1, 7);
        continue;
      case 47:
        switch (Ve()) {
          case 42:
          case 47:
            gn(kf(Hf(me(), jn()), e, t), s);
            break;
          default:
            I += "/";
        }
        break;
      case 123 * p:
        a[l++] = Oe(I) * h;
      case 125 * p:
      case 59:
      case 0:
        switch (F) {
          case 0:
          case 125:
            b = 0;
          case 59 + c:
            h == -1 && (I = CA(I, /\f/g, "")), g > 0 && Oe(I) - u && gn(g > 32 ? Ds(I + ";", r, t, u - 1) : Ds(CA(I, " ", "") + ";", r, t, u - 2), s);
            break;
          case 59:
            I += ";";
          default:
            if (gn(v = Os(I, e, t, l, c, n, a, m, Q = [], E = [], u), o), F === 123) if (c === 0) Yn(I, e, v, v, Q, o, u, a, E);
            else switch (d === 99 && te(I, 3) === 110 ? 100 : d) {
              case 100:
              case 108:
              case 109:
              case 115:
                Yn(A, v, v, r && gn(Os(A, v, v, 0, 0, n, a, m, n, Q = [], u), E), n, E, u, a, r ? Q : E);
                break;
              default:
                Yn(I, v, v, v, [
                  ""
                ], E, 0, a, E);
            }
        }
        l = c = g = 0, p = h = 1, m = I = "", u = i;
        break;
      case 58:
        u = 1 + Oe(I), g = B;
      default:
        if (p < 1) {
          if (F == 123) --p;
          else if (F == 125 && p++ == 0 && Sf() == 125) continue;
        }
        switch (I += Fo(F), F * p) {
          case 38:
            h = c > 0 ? 1 : (I += "\f", -1);
            break;
          case 44:
            a[l++] = (Oe(I) - 1) * h, h = 1;
            break;
          case 64:
            Ve() === 45 && (I += Jn(me())), d = Ve(), c = u = Oe(m = I += Tf(jn())), F++;
            break;
          case 45:
            B === 45 && Oe(I) == 2 && (p = 0);
        }
    }
    return o;
  }
  function Os(A, e, t, r, n, o, i, a, s, l, c) {
    for (var u = n - 1, d = n === 0 ? o : [
      ""
    ], g = Va(d), B = 0, p = 0, b = 0; B < r; ++B) for (var h = 0, F = Wr(A, u + 1, u = Qf(p = i[B])), m = A; h < g; ++h) (m = Wc(p > 0 ? d[h] + " " + F : CA(F, /&\f/g, d[h]))) && (s[b++] = m);
    return Eo(A, e, t, n === 0 ? Ga : a, s, l, c);
  }
  function kf(A, e, t) {
    return Eo(A, e, t, Vc, Fo(Ef()), Wr(A, 2, -2), 0);
  }
  function Ds(A, e, t, r) {
    return Eo(A, e, t, _a, Wr(A, 0, r), Wr(A, r + 1, -1), r);
  }
  function nr(A, e) {
    for (var t = "", r = Va(A), n = 0; n < r; n++) t += e(A[n], n, A, e) || "";
    return t;
  }
  function Rf(A, e, t, r) {
    switch (A.type) {
      case vf:
        if (A.children.length) break;
      case mf:
      case _a:
        return A.return = A.return || A.value;
      case Vc:
        return "";
      case $c:
        return A.return = A.value + "{" + nr(A.children, r) + "}";
      case Ga:
        A.value = A.props.join(",");
    }
    return Oe(t = nr(A.children, r)) ? A.return = A.value + "{" + t + "}" : "";
  }
  function Kf(A) {
    var e = Va(A);
    return function(t, r, n, o) {
      for (var i = "", a = 0; a < e; a++) i += A[a](t, r, n, o) || "";
      return i;
    };
  }
  function Of(A) {
    return function(e) {
      e.root || (e = e.return) && A(e);
    };
  }
  function Yc(A) {
    var e = /* @__PURE__ */ Object.create(null);
    return function(t) {
      return e[t] === void 0 && (e[t] = A(t)), e[t];
    };
  }
  var Df = function(e, t, r) {
    for (var n = 0, o = 0; n = o, o = Ve(), n === 38 && o === 12 && (t[r] = 1), !Xr(o); ) me();
    return An(e, pe);
  }, Mf = function(e, t) {
    var r = -1, n = 44;
    do
      switch (Xr(n)) {
        case 0:
          n === 38 && Ve() === 12 && (t[r] = 1), e[r] += Df(pe - 1, t, r);
          break;
        case 2:
          e[r] += Jn(n);
          break;
        case 4:
          if (n === 44) {
            e[++r] = Ve() === 58 ? "&\f" : "", t[r] = e[r].length;
            break;
          }
        default:
          e[r] += Fo(n);
      }
    while (n = me());
    return e;
  }, Pf = function(e, t) {
    return Jc(Mf(jc(e), t));
  }, Ms = /* @__PURE__ */ new WeakMap(), Nf = function(e) {
    if (!(e.type !== "rule" || !e.parent || e.length < 1)) {
      for (var t = e.value, r = e.parent, n = e.column === r.column && e.line === r.line; r.type !== "rule"; ) if (r = r.parent, !r) return;
      if (!(e.props.length === 1 && t.charCodeAt(0) !== 58 && !Ms.get(r)) && !n) {
        Ms.set(e, true);
        for (var o = [], i = Pf(t, o), a = r.props, s = 0, l = 0; s < i.length; s++) for (var c = 0; c < a.length; c++, l++) e.props[l] = o[s] ? i[s].replace(/&\f/g, a[c]) : a[c] + " " + i[s];
      }
    }
  }, Gf = function(e) {
    if (e.type === "decl") {
      var t = e.value;
      t.charCodeAt(0) === 108 && t.charCodeAt(2) === 98 && (e.return = "", e.value = "");
    }
  };
  function zc(A, e) {
    switch (bf(A, e)) {
      case 5103:
        return wA + "print-" + A + A;
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
        return wA + A + A;
      case 5349:
      case 4246:
      case 4810:
      case 6968:
      case 2756:
        return wA + A + ro + A + ae + A + A;
      case 6828:
      case 4268:
        return wA + A + ae + A + A;
      case 6165:
        return wA + A + ae + "flex-" + A + A;
      case 5187:
        return wA + A + CA(A, /(\w+).+(:[^]+)/, wA + "box-$1$2" + ae + "flex-$1$2") + A;
      case 5443:
        return wA + A + ae + "flex-item-" + CA(A, /flex-|-self/, "") + A;
      case 4675:
        return wA + A + ae + "flex-line-pack" + CA(A, /align-content|flex-|-self/, "") + A;
      case 5548:
        return wA + A + ae + CA(A, "shrink", "negative") + A;
      case 5292:
        return wA + A + ae + CA(A, "basis", "preferred-size") + A;
      case 6060:
        return wA + "box-" + CA(A, "-grow", "") + wA + A + ae + CA(A, "grow", "positive") + A;
      case 4554:
        return wA + CA(A, /([^-])(transform)/g, "$1" + wA + "$2") + A;
      case 6187:
        return CA(CA(CA(A, /(zoom-|grab)/, wA + "$1"), /(image-set)/, wA + "$1"), A, "") + A;
      case 5495:
      case 3959:
        return CA(A, /(image-set\([^]*)/, wA + "$1$`$1");
      case 4968:
        return CA(CA(A, /(.+:)(flex-)?(.*)/, wA + "box-pack:$3" + ae + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + wA + A + A;
      case 4095:
      case 3583:
      case 4068:
      case 2532:
        return CA(A, /(.+)-inline(.+)/, wA + "$1$2") + A;
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
        if (Oe(A) - 1 - e > 6) switch (te(A, e + 1)) {
          case 109:
            if (te(A, e + 4) !== 45) break;
          case 102:
            return CA(A, /(.+:)(.+)-([^]+)/, "$1" + wA + "$2-$3$1" + ro + (te(A, e + 3) == 108 ? "$3" : "$2-$3")) + A;
          case 115:
            return ~qi(A, "stretch") ? zc(CA(A, "stretch", "fill-available"), e) + A : A;
        }
        break;
      case 4949:
        if (te(A, e + 1) !== 115) break;
      case 6444:
        switch (te(A, Oe(A) - 3 - (~qi(A, "!important") && 10))) {
          case 107:
            return CA(A, ":", ":" + wA) + A;
          case 101:
            return CA(A, /(.+:)([^;!]+)(;|!.+)?/, "$1" + wA + (te(A, 14) === 45 ? "inline-" : "") + "box$3$1" + wA + "$2$3$1" + ae + "$2box$3") + A;
        }
        break;
      case 5936:
        switch (te(A, e + 11)) {
          case 114:
            return wA + A + ae + CA(A, /[svh]\w+-[tblr]{2}/, "tb") + A;
          case 108:
            return wA + A + ae + CA(A, /[svh]\w+-[tblr]{2}/, "tb-rl") + A;
          case 45:
            return wA + A + ae + CA(A, /[svh]\w+-[tblr]{2}/, "lr") + A;
        }
        return wA + A + ae + A + A;
    }
    return A;
  }
  var _f = function(e, t, r, n) {
    if (e.length > -1 && !e.return) switch (e.type) {
      case _a:
        e.return = zc(e.value, e.length);
        break;
      case $c:
        return nr([
          wr(e, {
            value: CA(e.value, "@", "@" + wA)
          })
        ], n);
      case Ga:
        if (e.length) return Uf(e.props, function(o) {
          switch (Ff(o, /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              return nr([
                wr(e, {
                  props: [
                    CA(o, /:(read-\w+)/, ":" + ro + "$1")
                  ]
                })
              ], n);
            case "::placeholder":
              return nr([
                wr(e, {
                  props: [
                    CA(o, /:(plac\w+)/, ":" + wA + "input-$1")
                  ]
                }),
                wr(e, {
                  props: [
                    CA(o, /:(plac\w+)/, ":" + ro + "$1")
                  ]
                }),
                wr(e, {
                  props: [
                    CA(o, /:(plac\w+)/, ae + "input-$1")
                  ]
                })
              ], n);
          }
          return "";
        });
    }
  }, Vf = [
    _f
  ], $f = function(e) {
    var t = e.key;
    if (t === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function(p) {
        var b = p.getAttribute("data-emotion");
        b.indexOf(" ") !== -1 && (document.head.appendChild(p), p.setAttribute("data-s", ""));
      });
    }
    var n = e.stylisPlugins || Vf, o = {}, i, a = [];
    i = e.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + t + ' "]'), function(p) {
      for (var b = p.getAttribute("data-emotion").split(" "), h = 1; h < b.length; h++) o[b[h]] = true;
      a.push(p);
    });
    var s, l = [
      Nf,
      Gf
    ];
    {
      var c, u = [
        Rf,
        Of(function(p) {
          c.insert(p);
        })
      ], d = Kf(l.concat(n, u)), g = function(b) {
        return nr(Lf(b), d);
      };
      s = function(b, h, F, m) {
        c = F, g(b ? b + "{" + h.styles + "}" : h.styles), m && (B.inserted[h.name] = true);
      };
    }
    var B = {
      key: t,
      sheet: new Cf({
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
      insert: s
    };
    return B.sheet.hydrate(a), B;
  }, Zc = {
    exports: {}
  }, vA = {};
  var ZA = typeof Symbol == "function" && Symbol.for, $a = ZA ? /* @__PURE__ */ Symbol.for("react.element") : 60103, Wa = ZA ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, So = ZA ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, Io = ZA ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, xo = ZA ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, Ho = ZA ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, To = ZA ? /* @__PURE__ */ Symbol.for("react.context") : 60110, Xa = ZA ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, Lo = ZA ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, ko = ZA ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, Ro = ZA ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, Wf = ZA ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, Ko = ZA ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, Oo = ZA ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, Xf = ZA ? /* @__PURE__ */ Symbol.for("react.block") : 60121, jf = ZA ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, Jf = ZA ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, Yf = ZA ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
  function ve(A) {
    if (typeof A == "object" && A !== null) {
      var e = A.$$typeof;
      switch (e) {
        case $a:
          switch (A = A.type, A) {
            case Xa:
            case Lo:
            case So:
            case xo:
            case Io:
            case Ro:
              return A;
            default:
              switch (A = A && A.$$typeof, A) {
                case To:
                case ko:
                case Oo:
                case Ko:
                case Ho:
                  return A;
                default:
                  return e;
              }
          }
        case Wa:
          return e;
      }
    }
  }
  function qc(A) {
    return ve(A) === Lo;
  }
  vA.AsyncMode = Xa;
  vA.ConcurrentMode = Lo;
  vA.ContextConsumer = To;
  vA.ContextProvider = Ho;
  vA.Element = $a;
  vA.ForwardRef = ko;
  vA.Fragment = So;
  vA.Lazy = Oo;
  vA.Memo = Ko;
  vA.Portal = Wa;
  vA.Profiler = xo;
  vA.StrictMode = Io;
  vA.Suspense = Ro;
  vA.isAsyncMode = function(A) {
    return qc(A) || ve(A) === Xa;
  };
  vA.isConcurrentMode = qc;
  vA.isContextConsumer = function(A) {
    return ve(A) === To;
  };
  vA.isContextProvider = function(A) {
    return ve(A) === Ho;
  };
  vA.isElement = function(A) {
    return typeof A == "object" && A !== null && A.$$typeof === $a;
  };
  vA.isForwardRef = function(A) {
    return ve(A) === ko;
  };
  vA.isFragment = function(A) {
    return ve(A) === So;
  };
  vA.isLazy = function(A) {
    return ve(A) === Oo;
  };
  vA.isMemo = function(A) {
    return ve(A) === Ko;
  };
  vA.isPortal = function(A) {
    return ve(A) === Wa;
  };
  vA.isProfiler = function(A) {
    return ve(A) === xo;
  };
  vA.isStrictMode = function(A) {
    return ve(A) === Io;
  };
  vA.isSuspense = function(A) {
    return ve(A) === Ro;
  };
  vA.isValidElementType = function(A) {
    return typeof A == "string" || typeof A == "function" || A === So || A === Lo || A === xo || A === Io || A === Ro || A === Wf || typeof A == "object" && A !== null && (A.$$typeof === Oo || A.$$typeof === Ko || A.$$typeof === Ho || A.$$typeof === To || A.$$typeof === ko || A.$$typeof === jf || A.$$typeof === Jf || A.$$typeof === Yf || A.$$typeof === Xf);
  };
  vA.typeOf = ve;
  Zc.exports = vA;
  var zf = Zc.exports, Au = zf, Zf = {
    $$typeof: true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
  }, qf = {
    $$typeof: true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
  }, eu = {};
  eu[Au.ForwardRef] = Zf;
  eu[Au.Memo] = qf;
  var Ag = true;
  function tu(A, e, t) {
    var r = "";
    return t.split(" ").forEach(function(n) {
      A[n] !== void 0 ? e.push(A[n] + ";") : n && (r += n + " ");
    }), r;
  }
  var ja = function(e, t, r) {
    var n = e.key + "-" + t.name;
    (r === false || Ag === false) && e.registered[n] === void 0 && (e.registered[n] = t.styles);
  }, Ja = function(e, t, r) {
    ja(e, t, r);
    var n = e.key + "-" + t.name;
    if (e.inserted[t.name] === void 0) {
      var o = t;
      do
        e.insert(t === o ? "." + n : "", o, e.sheet, true), o = o.next;
      while (o !== void 0);
    }
  };
  function eg(A) {
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
  var tg = {
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
  }, rg = /[A-Z]|^ms/g, ng = /_EMO_([^_]+?)_([^]*?)_EMO_/g, ru = function(e) {
    return e.charCodeAt(1) === 45;
  }, Ps = function(e) {
    return e != null && typeof e != "boolean";
  }, wi = Yc(function(A) {
    return ru(A) ? A : A.replace(rg, "-$&").toLowerCase();
  }), Ns = function(e, t) {
    switch (e) {
      case "animation":
      case "animationName":
        if (typeof t == "string") return t.replace(ng, function(r, n, o) {
          return De = {
            name: n,
            styles: o,
            next: De
          }, n;
        });
    }
    return tg[e] !== 1 && !ru(e) && typeof t == "number" && t !== 0 ? t + "px" : t;
  };
  function jr(A, e, t) {
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
        return og(A, e, t);
      }
      case "function": {
        if (A !== void 0) {
          var s = De, l = t(A);
          return De = s, jr(A, e, l);
        }
        break;
      }
    }
    var c = t;
    if (e == null) return c;
    var u = e[c];
    return u !== void 0 ? u : c;
  }
  function og(A, e, t) {
    var r = "";
    if (Array.isArray(t)) for (var n = 0; n < t.length; n++) r += jr(A, e, t[n]) + ";";
    else for (var o in t) {
      var i = t[o];
      if (typeof i != "object") {
        var a = i;
        e != null && e[a] !== void 0 ? r += o + "{" + e[a] + "}" : Ps(a) && (r += wi(o) + ":" + Ns(o, a) + ";");
      } else if (Array.isArray(i) && typeof i[0] == "string" && (e == null || e[i[0]] === void 0)) for (var s = 0; s < i.length; s++) Ps(i[s]) && (r += wi(o) + ":" + Ns(o, i[s]) + ";");
      else {
        var l = jr(A, e, i);
        switch (o) {
          case "animation":
          case "animationName": {
            r += wi(o) + ":" + l + ";";
            break;
          }
          default:
            r += o + "{" + l + "}";
        }
      }
    }
    return r;
  }
  var Gs = /label:\s*([^\s;{]+)\s*(;|$)/g, De;
  function en(A, e, t) {
    if (A.length === 1 && typeof A[0] == "object" && A[0] !== null && A[0].styles !== void 0) return A[0];
    var r = true, n = "";
    De = void 0;
    var o = A[0];
    if (o == null || o.raw === void 0) r = false, n += jr(t, e, o);
    else {
      var i = o;
      n += i[0];
    }
    for (var a = 1; a < A.length; a++) if (n += jr(t, e, A[a]), r) {
      var s = o;
      n += s[a];
    }
    Gs.lastIndex = 0;
    for (var l = "", c; (c = Gs.exec(n)) !== null; ) l += "-" + c[1];
    var u = eg(n) + l;
    return {
      name: u,
      styles: n,
      next: De
    };
  }
  var ig = function(e) {
    return e();
  }, nu = Zi.useInsertionEffect ? Zi.useInsertionEffect : false, ou = nu || ig, _s = nu || w.useLayoutEffect, iu = w.createContext(typeof HTMLElement < "u" ? $f({
    key: "css"
  }) : null);
  iu.Provider;
  var Ya = function(e) {
    return w.forwardRef(function(t, r) {
      var n = w.useContext(iu);
      return e(t, n, r);
    });
  }, tn = w.createContext({}), za = {}.hasOwnProperty, ea = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", ag = function(e, t) {
    var r = {};
    for (var n in t) za.call(t, n) && (r[n] = t[n]);
    return r[ea] = e, r;
  }, sg = function(e) {
    var t = e.cache, r = e.serialized, n = e.isStringTag;
    return ja(t, r, n), ou(function() {
      return Ja(t, r, n);
    }), null;
  }, lg = Ya(function(A, e, t) {
    var r = A.css;
    typeof r == "string" && e.registered[r] !== void 0 && (r = e.registered[r]);
    var n = A[ea], o = [
      r
    ], i = "";
    typeof A.className == "string" ? i = tu(e.registered, o, A.className) : A.className != null && (i = A.className + " ");
    var a = en(o, void 0, w.useContext(tn));
    i += e.key + "-" + a.name;
    var s = {};
    for (var l in A) za.call(A, l) && l !== "css" && l !== ea && (s[l] = A[l]);
    return s.className = i, t && (s.ref = t), w.createElement(w.Fragment, null, w.createElement(sg, {
      cache: e,
      serialized: a,
      isStringTag: typeof n == "string"
    }), w.createElement(n, s));
  }), cg = lg, Vs = function(e, t) {
    var r = arguments;
    if (t == null || !za.call(t, "css")) return w.createElement.apply(void 0, r);
    var n = r.length, o = new Array(n);
    o[0] = cg, o[1] = ag(e, t);
    for (var i = 2; i < n; i++) o[i] = r[i];
    return w.createElement.apply(null, o);
  };
  (function(A) {
    var e;
    e || (e = A.JSX || (A.JSX = {}));
  })(Vs || (Vs = {}));
  var ug = Ya(function(A, e) {
    var t = A.styles, r = en([
      t
    ], void 0, w.useContext(tn)), n = w.useRef();
    return _s(function() {
      var o = e.key + "-global", i = new e.sheet.constructor({
        key: o,
        nonce: e.sheet.nonce,
        container: e.sheet.container,
        speedy: e.sheet.isSpeedy
      }), a = false, s = document.querySelector('style[data-emotion="' + o + " " + r.name + '"]');
      return e.sheet.tags.length && (i.before = e.sheet.tags[0]), s !== null && (a = true, s.setAttribute("data-emotion", o), i.hydrate([
        s
      ])), n.current = [
        i,
        a
      ], function() {
        i.flush();
      };
    }, [
      e
    ]), _s(function() {
      var o = n.current, i = o[0], a = o[1];
      if (a) {
        o[1] = false;
        return;
      }
      if (r.next !== void 0 && Ja(e, r.next, true), i.tags.length) {
        var s = i.tags[i.tags.length - 1].nextElementSibling;
        i.before = s, i.flush();
      }
      e.insert("", r, i, false);
    }, [
      e,
      r.name
    ]), null;
  });
  function Za() {
    for (var A = arguments.length, e = new Array(A), t = 0; t < A; t++) e[t] = arguments[t];
    return en(e);
  }
  function rn() {
    var A = Za.apply(void 0, arguments), e = "animation-" + A.name;
    return {
      name: e,
      styles: "@keyframes " + e + "{" + A.styles + "}",
      anim: 1,
      toString: function() {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      }
    };
  }
  var dg = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, fg = Yc(function(A) {
    return dg.test(A) || A.charCodeAt(0) === 111 && A.charCodeAt(1) === 110 && A.charCodeAt(2) < 91;
  }), gg = fg, Bg = function(e) {
    return e !== "theme";
  }, $s = function(e) {
    return typeof e == "string" && e.charCodeAt(0) > 96 ? gg : Bg;
  }, Ws = function(e, t, r) {
    var n;
    if (t) {
      var o = t.shouldForwardProp;
      n = e.__emotion_forwardProp && o ? function(i) {
        return e.__emotion_forwardProp(i) && o(i);
      } : o;
    }
    return typeof n != "function" && r && (n = e.__emotion_forwardProp), n;
  }, pg = function(e) {
    var t = e.cache, r = e.serialized, n = e.isStringTag;
    return ja(t, r, n), ou(function() {
      return Ja(t, r, n);
    }), null;
  }, hg = function A(e, t) {
    var r = e.__emotion_real === e, n = r && e.__emotion_base || e, o, i;
    t !== void 0 && (o = t.label, i = t.target);
    var a = Ws(e, t, r), s = a || $s(n), l = !s("as");
    return function() {
      var c = arguments, u = r && e.__emotion_styles !== void 0 ? e.__emotion_styles.slice(0) : [];
      if (o !== void 0 && u.push("label:" + o + ";"), c[0] == null || c[0].raw === void 0) u.push.apply(u, c);
      else {
        var d = c[0];
        u.push(d[0]);
        for (var g = c.length, B = 1; B < g; B++) u.push(c[B], d[B]);
      }
      var p = Ya(function(b, h, F) {
        var m = l && b.as || n, Q = "", E = [], v = b;
        if (b.theme == null) {
          v = {};
          for (var I in b) v[I] = b[I];
          v.theme = w.useContext(tn);
        }
        typeof b.className == "string" ? Q = tu(h.registered, E, b.className) : b.className != null && (Q = b.className + " ");
        var x = en(u.concat(E), h.registered, v);
        Q += h.key + "-" + x.name, i !== void 0 && (Q += " " + i);
        var H = l && a === void 0 ? $s(m) : s, f = {};
        for (var T in b) l && T === "as" || H(T) && (f[T] = b[T]);
        return f.className = Q, F && (f.ref = F), w.createElement(w.Fragment, null, w.createElement(pg, {
          cache: h,
          serialized: x,
          isStringTag: typeof m == "string"
        }), w.createElement(m, f));
      });
      return p.displayName = o !== void 0 ? o : "Styled(" + (typeof n == "string" ? n : n.displayName || n.name || "Component") + ")", p.defaultProps = e.defaultProps, p.__emotion_real = p, p.__emotion_base = n, p.__emotion_styles = u, p.__emotion_forwardProp = a, Object.defineProperty(p, "toString", {
        value: function() {
          return "." + i;
        }
      }), p.withComponent = function(b, h) {
        var F = A(b, to({}, t, h, {
          shouldForwardProp: Ws(p, h, true)
        }));
        return F.apply(void 0, u);
      }, p;
    };
  }, wg = [
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
  ], ta = hg.bind(null);
  wg.forEach(function(A) {
    ta[A] = ta(A);
  });
  function Cg(A) {
    return A == null || Object.keys(A).length === 0;
  }
  function au(A) {
    const { styles: e, defaultTheme: t = {} } = A, r = typeof e == "function" ? (n) => e(Cg(n) ? t : n) : e;
    return N.jsx(ug, {
      styles: r
    });
  }
  function su(A, e) {
    return ta(A, e);
  }
  function mg(A, e) {
    Array.isArray(A.__emotion_styles) && (A.__emotion_styles = e(A.__emotion_styles));
  }
  const Xs = [];
  function pt(A) {
    return Xs[0] = A, en(Xs);
  }
  var lu = {
    exports: {}
  }, UA = {};
  var qa = /* @__PURE__ */ Symbol.for("react.transitional.element"), As = /* @__PURE__ */ Symbol.for("react.portal"), Do = /* @__PURE__ */ Symbol.for("react.fragment"), Mo = /* @__PURE__ */ Symbol.for("react.strict_mode"), Po = /* @__PURE__ */ Symbol.for("react.profiler"), No = /* @__PURE__ */ Symbol.for("react.consumer"), Go = /* @__PURE__ */ Symbol.for("react.context"), _o = /* @__PURE__ */ Symbol.for("react.forward_ref"), Vo = /* @__PURE__ */ Symbol.for("react.suspense"), $o = /* @__PURE__ */ Symbol.for("react.suspense_list"), Wo = /* @__PURE__ */ Symbol.for("react.memo"), Xo = /* @__PURE__ */ Symbol.for("react.lazy"), vg = /* @__PURE__ */ Symbol.for("react.view_transition"), Qg = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Ie(A) {
    if (typeof A == "object" && A !== null) {
      var e = A.$$typeof;
      switch (e) {
        case qa:
          switch (A = A.type, A) {
            case Do:
            case Po:
            case Mo:
            case Vo:
            case $o:
            case vg:
              return A;
            default:
              switch (A = A && A.$$typeof, A) {
                case Go:
                case _o:
                case Xo:
                case Wo:
                  return A;
                case No:
                  return A;
                default:
                  return e;
              }
          }
        case As:
          return e;
      }
    }
  }
  UA.ContextConsumer = No;
  UA.ContextProvider = Go;
  UA.Element = qa;
  UA.ForwardRef = _o;
  UA.Fragment = Do;
  UA.Lazy = Xo;
  UA.Memo = Wo;
  UA.Portal = As;
  UA.Profiler = Po;
  UA.StrictMode = Mo;
  UA.Suspense = Vo;
  UA.SuspenseList = $o;
  UA.isContextConsumer = function(A) {
    return Ie(A) === No;
  };
  UA.isContextProvider = function(A) {
    return Ie(A) === Go;
  };
  UA.isElement = function(A) {
    return typeof A == "object" && A !== null && A.$$typeof === qa;
  };
  UA.isForwardRef = function(A) {
    return Ie(A) === _o;
  };
  UA.isFragment = function(A) {
    return Ie(A) === Do;
  };
  UA.isLazy = function(A) {
    return Ie(A) === Xo;
  };
  UA.isMemo = function(A) {
    return Ie(A) === Wo;
  };
  UA.isPortal = function(A) {
    return Ie(A) === As;
  };
  UA.isProfiler = function(A) {
    return Ie(A) === Po;
  };
  UA.isStrictMode = function(A) {
    return Ie(A) === Mo;
  };
  UA.isSuspense = function(A) {
    return Ie(A) === Vo;
  };
  UA.isSuspenseList = function(A) {
    return Ie(A) === $o;
  };
  UA.isValidElementType = function(A) {
    return typeof A == "string" || typeof A == "function" || A === Do || A === Po || A === Mo || A === Vo || A === $o || typeof A == "object" && A !== null && (A.$$typeof === Xo || A.$$typeof === Wo || A.$$typeof === Go || A.$$typeof === No || A.$$typeof === _o || A.$$typeof === Qg || A.getModuleId !== void 0);
  };
  UA.typeOf = Ie;
  lu.exports = UA;
  var cu = lu.exports;
  function Ne(A) {
    if (typeof A != "object" || A === null) return false;
    const e = Object.getPrototypeOf(A);
    return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in A) && !(Symbol.iterator in A);
  }
  function uu(A) {
    if (w.isValidElement(A) || cu.isValidElementType(A) || !Ne(A)) return A;
    const e = {};
    return Object.keys(A).forEach((t) => {
      e[t] = uu(A[t]);
    }), e;
  }
  oe = function(A, e, t = {
    clone: true
  }) {
    const r = t.clone ? {
      ...A
    } : A;
    return Ne(A) && Ne(e) && Object.keys(e).forEach((n) => {
      w.isValidElement(e[n]) || cu.isValidElementType(e[n]) ? r[n] = e[n] : Ne(e[n]) && Object.prototype.hasOwnProperty.call(A, n) && Ne(A[n]) ? r[n] = oe(A[n], e[n], t) : t.clone ? r[n] = Ne(e[n]) ? uu(e[n]) : e[n] : r[n] = e[n];
    }), r;
  };
  const yg = (A) => {
    const e = Object.keys(A).map((t) => ({
      key: t,
      val: A[t]
    })) || [];
    return e.sort((t, r) => t.val - r.val), e.reduce((t, r) => ({
      ...t,
      [r.key]: r.val
    }), {});
  };
  function bg(A) {
    const { values: e = {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }, unit: t = "px", step: r = 5, ...n } = A, o = yg(e), i = Object.keys(o);
    function a(d) {
      return `@media (min-width:${typeof e[d] == "number" ? e[d] : d}${t})`;
    }
    function s(d) {
      return `@media (max-width:${(typeof e[d] == "number" ? e[d] : d) - r / 100}${t})`;
    }
    function l(d, g) {
      const B = i.indexOf(g);
      return `@media (min-width:${typeof e[d] == "number" ? e[d] : d}${t}) and (max-width:${(B !== -1 && typeof e[i[B]] == "number" ? e[i[B]] : g) - r / 100}${t})`;
    }
    function c(d) {
      return i.indexOf(d) + 1 < i.length ? l(d, i[i.indexOf(d) + 1]) : a(d);
    }
    function u(d) {
      const g = i.indexOf(d);
      return g === 0 ? a(i[1]) : g === i.length - 1 ? s(i[g]) : l(d, i[i.indexOf(d) + 1]).replace("@media", "@media not all and");
    }
    return {
      keys: i,
      values: o,
      up: a,
      down: s,
      between: l,
      only: c,
      not: u,
      unit: t,
      ...n
    };
  }
  function js(A, e) {
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
  function Fg(A, e) {
    return e === "@" || e.startsWith("@") && (A.some((t) => e.startsWith(`@${t}`)) || !!e.match(/^@\d/));
  }
  function Ug(A, e) {
    const t = e.match(/^@([^/]+)?\/?(.+)?$/);
    if (!t) return null;
    const [, r, n] = t, o = Number.isNaN(+r) ? r || 0 : +r;
    return A.containerQueries(n).up(o);
  }
  function Eg(A) {
    const e = (o, i) => o.replace("@media", i ? `@container ${i}` : "@container");
    function t(o, i) {
      o.up = (...a) => e(A.breakpoints.up(...a), i), o.down = (...a) => e(A.breakpoints.down(...a), i), o.between = (...a) => e(A.breakpoints.between(...a), i), o.only = (...a) => e(A.breakpoints.only(...a), i), o.not = (...a) => {
        const s = e(A.breakpoints.not(...a), i);
        return s.includes("not all and") ? s.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : s;
      };
    }
    const r = {}, n = (o) => (t(r, o), r);
    return t(n), {
      ...A,
      containerQueries: n
    };
  }
  const Sg = {
    borderRadius: 4
  };
  function Kr(A, e) {
    return e ? oe(A, e, {
      clone: false
    }) : A;
  }
  const jo = {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536
  }, Js = {
    keys: [
      "xs",
      "sm",
      "md",
      "lg",
      "xl"
    ],
    up: (A) => `@media (min-width:${jo[A]}px)`
  }, Ig = {
    containerQueries: (A) => ({
      up: (e) => {
        let t = typeof e == "number" ? e : jo[e] || e;
        return typeof t == "number" && (t = `${t}px`), A ? `@container ${A} (min-width:${t})` : `@container (min-width:${t})`;
      }
    })
  };
  tt = function(A, e, t) {
    const r = A.theme || {};
    if (Array.isArray(e)) {
      const o = r.breakpoints || Js;
      return e.reduce((i, a, s) => (i[o.up(o.keys[s])] = t(e[s]), i), {});
    }
    if (typeof e == "object") {
      const o = r.breakpoints || Js;
      return Object.keys(e).reduce((i, a) => {
        if (Fg(o.keys, a)) {
          const s = Ug(r.containerQueries ? r : Ig, a);
          s && (i[s] = t(e[a], a));
        } else if (Object.keys(o.values || jo).includes(a)) {
          const s = o.up(a);
          i[s] = t(e[a], a);
        } else {
          const s = a;
          i[s] = e[s];
        }
        return i;
      }, {});
    }
    return t(e);
  };
  function du(A = {}) {
    var _a2;
    return ((_a2 = A.keys) == null ? void 0 : _a2.reduce((t, r) => {
      const n = A.up(r);
      return t[n] = {}, t;
    }, {})) || {};
  }
  function ra(A, e) {
    return A.reduce((t, r) => {
      const n = t[r];
      return (!n || Object.keys(n).length === 0) && delete t[r], t;
    }, e);
  }
  rU = function(A, ...e) {
    const t = du(A), r = [
      t,
      ...e
    ].reduce((n, o) => oe(n, o), {});
    return ra(Object.keys(t), r);
  };
  function xg(A, e) {
    if (typeof A != "object") return {};
    const t = {}, r = Object.keys(e);
    return Array.isArray(A) ? r.forEach((n, o) => {
      o < A.length && (t[n] = true);
    }) : r.forEach((n) => {
      A[n] != null && (t[n] = true);
    }), t;
  }
  nU = function({ values: A, breakpoints: e, base: t }) {
    const r = t || xg(A, e), n = Object.keys(r);
    if (n.length === 0) return A;
    let o;
    return n.reduce((i, a, s) => (Array.isArray(A) ? (i[a] = A[s] != null ? A[s] : A[o], o = s) : typeof A == "object" ? (i[a] = A[a] != null ? A[a] : A[o], o = a) : i[a] = A, i), {});
  };
  hA = function(A) {
    if (typeof A != "string") throw new Error(et(7));
    return A.charAt(0).toUpperCase() + A.slice(1);
  };
  function Jo(A, e, t = true) {
    if (!e || typeof e != "string") return null;
    if (A && A.vars && t) {
      const r = `vars.${e}`.split(".").reduce((n, o) => n && n[o] ? n[o] : null, A);
      if (r != null) return r;
    }
    return e.split(".").reduce((r, n) => r && r[n] != null ? r[n] : null, A);
  }
  function no(A, e, t, r = t) {
    let n;
    return typeof A == "function" ? n = A(t) : Array.isArray(A) ? n = A[t] || r : n = Jo(A, t) || r, e && (n = e(n, r, A)), n;
  }
  function _A(A) {
    const { prop: e, cssProperty: t = A.prop, themeKey: r, transform: n } = A, o = (i) => {
      if (i[e] == null) return null;
      const a = i[e], s = i.theme, l = Jo(s, r) || {};
      return tt(i, a, (u) => {
        let d = no(l, n, u);
        return u === d && typeof u == "string" && (d = no(l, n, `${e}${u === "default" ? "" : hA(u)}`, u)), t === false ? d : {
          [t]: d
        };
      });
    };
    return o.propTypes = {}, o.filterProps = [
      e
    ], o;
  }
  function Hg(A) {
    const e = {};
    return (t) => (e[t] === void 0 && (e[t] = A(t)), e[t]);
  }
  const Tg = {
    m: "margin",
    p: "padding"
  }, Lg = {
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
  }, Ys = {
    marginX: "mx",
    marginY: "my",
    paddingX: "px",
    paddingY: "py"
  }, kg = Hg((A) => {
    if (A.length > 2) if (Ys[A]) A = Ys[A];
    else return [
      A
    ];
    const [e, t] = A.split(""), r = Tg[e], n = Lg[t] || "";
    return Array.isArray(n) ? n.map((o) => r + o) : [
      r + n
    ];
  }), es = [
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
  ], ts = [
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
    ...es,
    ...ts
  ];
  function nn(A, e, t, r) {
    const n = Jo(A, e, true) ?? t;
    return typeof n == "number" || typeof n == "string" ? (o) => typeof o == "string" ? o : typeof n == "string" ? `calc(${o} * ${n})` : n * o : Array.isArray(n) ? (o) => {
      if (typeof o == "string") return o;
      const i = Math.abs(o), a = n[i];
      return o >= 0 ? a : typeof a == "number" ? -a : `-${a}`;
    } : typeof n == "function" ? n : () => {
    };
  }
  rs = function(A) {
    return nn(A, "spacing", 8);
  };
  on = function(A, e) {
    return typeof e == "string" || e == null ? e : A(e);
  };
  function Rg(A, e) {
    return (t) => A.reduce((r, n) => (r[n] = on(e, t), r), {});
  }
  function Kg(A, e, t, r) {
    if (!e.includes(t)) return null;
    const n = kg(t), o = Rg(n, r), i = A[t];
    return tt(A, i, o);
  }
  function fu(A, e) {
    const t = rs(A.theme);
    return Object.keys(A).map((r) => Kg(A, e, r, t)).reduce(Kr, {});
  }
  function KA(A) {
    return fu(A, es);
  }
  KA.propTypes = {};
  KA.filterProps = es;
  function OA(A) {
    return fu(A, ts);
  }
  OA.propTypes = {};
  OA.filterProps = ts;
  function gu(A = 8, e = rs({
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
  function Yo(...A) {
    const e = A.reduce((r, n) => (n.filterProps.forEach((o) => {
      r[o] = n;
    }), r), {}), t = (r) => Object.keys(r).reduce((n, o) => e[o] ? Kr(n, e[o](r)) : n, {});
    return t.propTypes = {}, t.filterProps = A.reduce((r, n) => r.concat(n.filterProps), []), t;
  }
  function be(A) {
    return typeof A != "number" ? A : `${A}px solid`;
  }
  function xe(A, e) {
    return _A({
      prop: A,
      themeKey: "borders",
      transform: e
    });
  }
  const Og = xe("border", be), Dg = xe("borderTop", be), Mg = xe("borderRight", be), Pg = xe("borderBottom", be), Ng = xe("borderLeft", be), Gg = xe("borderColor"), _g = xe("borderTopColor"), Vg = xe("borderRightColor"), $g = xe("borderBottomColor"), Wg = xe("borderLeftColor"), Xg = xe("outline", be), jg = xe("outlineColor"), zo = (A) => {
    if (A.borderRadius !== void 0 && A.borderRadius !== null) {
      const e = nn(A.theme, "shape.borderRadius", 4), t = (r) => ({
        borderRadius: on(e, r)
      });
      return tt(A, A.borderRadius, t);
    }
    return null;
  };
  zo.propTypes = {};
  zo.filterProps = [
    "borderRadius"
  ];
  Yo(Og, Dg, Mg, Pg, Ng, Gg, _g, Vg, $g, Wg, zo, Xg, jg);
  const Zo = (A) => {
    if (A.gap !== void 0 && A.gap !== null) {
      const e = nn(A.theme, "spacing", 8), t = (r) => ({
        gap: on(e, r)
      });
      return tt(A, A.gap, t);
    }
    return null;
  };
  Zo.propTypes = {};
  Zo.filterProps = [
    "gap"
  ];
  const qo = (A) => {
    if (A.columnGap !== void 0 && A.columnGap !== null) {
      const e = nn(A.theme, "spacing", 8), t = (r) => ({
        columnGap: on(e, r)
      });
      return tt(A, A.columnGap, t);
    }
    return null;
  };
  qo.propTypes = {};
  qo.filterProps = [
    "columnGap"
  ];
  const Ai = (A) => {
    if (A.rowGap !== void 0 && A.rowGap !== null) {
      const e = nn(A.theme, "spacing", 8), t = (r) => ({
        rowGap: on(e, r)
      });
      return tt(A, A.rowGap, t);
    }
    return null;
  };
  Ai.propTypes = {};
  Ai.filterProps = [
    "rowGap"
  ];
  const Jg = _A({
    prop: "gridColumn"
  }), Yg = _A({
    prop: "gridRow"
  }), zg = _A({
    prop: "gridAutoFlow"
  }), Zg = _A({
    prop: "gridAutoColumns"
  }), qg = _A({
    prop: "gridAutoRows"
  }), AB = _A({
    prop: "gridTemplateColumns"
  }), eB = _A({
    prop: "gridTemplateRows"
  }), tB = _A({
    prop: "gridTemplateAreas"
  }), rB = _A({
    prop: "gridArea"
  });
  Yo(Zo, qo, Ai, Jg, Yg, zg, Zg, qg, AB, eB, tB, rB);
  function or(A, e) {
    return e === "grey" ? e : A;
  }
  const nB = _A({
    prop: "color",
    themeKey: "palette",
    transform: or
  }), oB = _A({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: or
  }), iB = _A({
    prop: "backgroundColor",
    themeKey: "palette",
    transform: or
  });
  Yo(nB, oB, iB);
  function Ce(A) {
    return A <= 1 && A !== 0 ? `${A * 100}%` : A;
  }
  const aB = _A({
    prop: "width",
    transform: Ce
  }), ns = (A) => {
    if (A.maxWidth !== void 0 && A.maxWidth !== null) {
      const e = (t) => {
        var _a2, _b2, _c2, _d2, _e2;
        const r = ((_c2 = (_b2 = (_a2 = A.theme) == null ? void 0 : _a2.breakpoints) == null ? void 0 : _b2.values) == null ? void 0 : _c2[t]) || jo[t];
        return r ? ((_e2 = (_d2 = A.theme) == null ? void 0 : _d2.breakpoints) == null ? void 0 : _e2.unit) !== "px" ? {
          maxWidth: `${r}${A.theme.breakpoints.unit}`
        } : {
          maxWidth: r
        } : {
          maxWidth: Ce(t)
        };
      };
      return tt(A, A.maxWidth, e);
    }
    return null;
  };
  ns.filterProps = [
    "maxWidth"
  ];
  const sB = _A({
    prop: "minWidth",
    transform: Ce
  }), lB = _A({
    prop: "height",
    transform: Ce
  }), cB = _A({
    prop: "maxHeight",
    transform: Ce
  }), uB = _A({
    prop: "minHeight",
    transform: Ce
  });
  _A({
    prop: "size",
    cssProperty: "width",
    transform: Ce
  });
  _A({
    prop: "size",
    cssProperty: "height",
    transform: Ce
  });
  const dB = _A({
    prop: "boxSizing"
  });
  Yo(aB, ns, sB, lB, cB, uB, dB);
  const an = {
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
      style: zo
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
      style: OA
    },
    pt: {
      style: OA
    },
    pr: {
      style: OA
    },
    pb: {
      style: OA
    },
    pl: {
      style: OA
    },
    px: {
      style: OA
    },
    py: {
      style: OA
    },
    padding: {
      style: OA
    },
    paddingTop: {
      style: OA
    },
    paddingRight: {
      style: OA
    },
    paddingBottom: {
      style: OA
    },
    paddingLeft: {
      style: OA
    },
    paddingX: {
      style: OA
    },
    paddingY: {
      style: OA
    },
    paddingInline: {
      style: OA
    },
    paddingInlineStart: {
      style: OA
    },
    paddingInlineEnd: {
      style: OA
    },
    paddingBlock: {
      style: OA
    },
    paddingBlockStart: {
      style: OA
    },
    paddingBlockEnd: {
      style: OA
    },
    m: {
      style: KA
    },
    mt: {
      style: KA
    },
    mr: {
      style: KA
    },
    mb: {
      style: KA
    },
    ml: {
      style: KA
    },
    mx: {
      style: KA
    },
    my: {
      style: KA
    },
    margin: {
      style: KA
    },
    marginTop: {
      style: KA
    },
    marginRight: {
      style: KA
    },
    marginBottom: {
      style: KA
    },
    marginLeft: {
      style: KA
    },
    marginX: {
      style: KA
    },
    marginY: {
      style: KA
    },
    marginInline: {
      style: KA
    },
    marginInlineStart: {
      style: KA
    },
    marginInlineEnd: {
      style: KA
    },
    marginBlock: {
      style: KA
    },
    marginBlockStart: {
      style: KA
    },
    marginBlockEnd: {
      style: KA
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
      style: Zo
    },
    rowGap: {
      style: Ai
    },
    columnGap: {
      style: qo
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
      transform: Ce
    },
    maxWidth: {
      style: ns
    },
    minWidth: {
      transform: Ce
    },
    height: {
      transform: Ce
    },
    maxHeight: {
      transform: Ce
    },
    minHeight: {
      transform: Ce
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
  function fB(...A) {
    const e = A.reduce((r, n) => r.concat(Object.keys(n)), []), t = new Set(e);
    return A.every((r) => t.size === Object.keys(r).length);
  }
  function gB(A, e) {
    return typeof A == "function" ? A(e) : A;
  }
  function BB() {
    function A(t, r, n, o) {
      const i = {
        [t]: r,
        theme: n
      }, a = o[t];
      if (!a) return {
        [t]: r
      };
      const { cssProperty: s = t, themeKey: l, transform: c, style: u } = a;
      if (r == null) return null;
      if (l === "typography" && r === "inherit") return {
        [t]: r
      };
      const d = Jo(n, l) || {};
      return u ? u(i) : tt(i, r, (B) => {
        let p = no(d, c, B);
        return B === p && typeof B == "string" && (p = no(d, c, `${t}${B === "default" ? "" : hA(B)}`, B)), s === false ? p : {
          [s]: p
        };
      });
    }
    function e(t) {
      const { sx: r, theme: n = {}, nested: o } = t || {};
      if (!r) return null;
      const i = n.unstable_sxConfig ?? an;
      function a(s) {
        let l = s;
        if (typeof s == "function") l = s(n);
        else if (typeof s != "object") return s;
        if (!l) return null;
        const c = du(n.breakpoints), u = Object.keys(c);
        let d = c;
        return Object.keys(l).forEach((g) => {
          const B = gB(l[g], n);
          if (B != null) if (typeof B == "object") if (i[g]) d = Kr(d, A(g, B, n, i));
          else {
            const p = tt({
              theme: n
            }, B, (b) => ({
              [g]: b
            }));
            fB(p, B) ? d[g] = e({
              sx: B,
              theme: n,
              nested: true
            }) : d = Kr(d, p);
          }
          else d = Kr(d, A(g, B, n, i));
        }), !o && n.modularCssLayers ? {
          "@layer sx": js(n, ra(u, d))
        } : js(n, ra(u, d));
      }
      return Array.isArray(r) ? r.map(a) : a(r);
    }
    return e;
  }
  const Ct = BB();
  Ct.filterProps = [
    "sx"
  ];
  function pB(A, e) {
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
  os = function(A = {}, ...e) {
    const { breakpoints: t = {}, palette: r = {}, spacing: n, shape: o = {}, ...i } = A, a = bg(t), s = gu(n);
    let l = oe({
      breakpoints: a,
      direction: "ltr",
      components: {},
      palette: {
        mode: "light",
        ...r
      },
      spacing: s,
      shape: {
        ...Sg,
        ...o
      }
    }, i);
    return l = Eg(l), l.applyStyles = pB, l = e.reduce((c, u) => oe(c, u), l), l.unstable_sxConfig = {
      ...an,
      ...i == null ? void 0 : i.unstable_sxConfig
    }, l.unstable_sx = function(u) {
      return Ct({
        sx: u,
        theme: this
      });
    }, l;
  };
  function hB(A) {
    return Object.keys(A).length === 0;
  }
  is = function(A = null) {
    const e = w.useContext(tn);
    return !e || hB(e) ? A : e;
  };
  const wB = os();
  as = function(A = wB) {
    return is(A);
  };
  function Ci(A) {
    const e = pt(A);
    return A !== e && e.styles ? (e.styles.match(/^@layer\s+[^{]*$/) || (e.styles = `@layer global{${e.styles}}`), e) : A;
  }
  function Bu({ styles: A, themeId: e, defaultTheme: t = {} }) {
    const r = as(t), n = e && r[e] || r;
    let o = typeof A == "function" ? A(n) : A;
    return n.modularCssLayers && (Array.isArray(o) ? o = o.map((i) => Ci(typeof i == "function" ? i(n) : i)) : o = Ci(o)), N.jsx(au, {
      styles: o
    });
  }
  const CB = (A) => {
    var _a2;
    const e = {
      systemProps: {},
      otherProps: {}
    }, t = ((_a2 = A == null ? void 0 : A.theme) == null ? void 0 : _a2.unstable_sxConfig) ?? an;
    return Object.keys(A).forEach((r) => {
      t[r] ? e.systemProps[r] = A[r] : e.otherProps[r] = A[r];
    }), e;
  };
  pu = function(A) {
    const { sx: e, ...t } = A, { systemProps: r, otherProps: n } = CB(t);
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
  const zs = (A) => A, mB = () => {
    let A = zs;
    return {
      configure(e) {
        A = e;
      },
      generate(e) {
        return A(e);
      },
      reset() {
        A = zs;
      }
    };
  }, hu = mB();
  function wu(A) {
    var e, t, r = "";
    if (typeof A == "string" || typeof A == "number") r += A;
    else if (typeof A == "object") if (Array.isArray(A)) {
      var n = A.length;
      for (e = 0; e < n; e++) A[e] && (t = wu(A[e])) && (r && (r += " "), r += t);
    } else for (t in A) A[t] && (r && (r += " "), r += t);
    return r;
  }
  pA = function() {
    for (var A, e, t = 0, r = "", n = arguments.length; t < n; t++) (A = arguments[t]) && (e = wu(A)) && (r && (r += " "), r += e);
    return r;
  };
  function vB(A = {}) {
    const { themeId: e, defaultTheme: t, defaultClassName: r = "MuiBox-root", generateClassName: n } = A, o = su("div", {
      shouldForwardProp: (a) => a !== "theme" && a !== "sx" && a !== "as"
    })(Ct);
    return w.forwardRef(function(s, l) {
      const c = as(t), { className: u, component: d = "div", ...g } = pu(s);
      return N.jsx(o, {
        as: d,
        ref: l,
        className: pA(u, n ? n(r) : r),
        theme: e && c[e] || c,
        ...g
      });
    });
  }
  const QB = {
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
  kA = function(A, e, t = "Mui") {
    const r = QB[e];
    return r ? `${t}-${r}` : `${hu.generate(A)}-${e}`;
  };
  xA = function(A, e, t = "Mui") {
    const r = {};
    return e.forEach((n) => {
      r[n] = kA(A, n, t);
    }), r;
  };
  function Cu(A) {
    const { variants: e, ...t } = A, r = {
      variants: e,
      style: pt(t),
      isProcessed: true
    };
    return r.style === t || e && e.forEach((n) => {
      typeof n.style != "function" && (n.style = pt(n.style));
    }), r;
  }
  const yB = os();
  function mi(A) {
    return A !== "ownerState" && A !== "theme" && A !== "sx" && A !== "as";
  }
  function Tt(A, e) {
    return e && A && typeof A == "object" && A.styles && !A.styles.startsWith("@layer") && (A.styles = `@layer ${e}{${String(A.styles)}}`), A;
  }
  function bB(A) {
    return A ? (e, t) => t[A] : null;
  }
  function FB(A, e, t) {
    A.theme = SB(A.theme) ? t : A.theme[e] || A.theme;
  }
  function zn(A, e, t) {
    const r = typeof e == "function" ? e(A) : e;
    if (Array.isArray(r)) return r.flatMap((n) => zn(A, n, t));
    if (Array.isArray(r == null ? void 0 : r.variants)) {
      let n;
      if (r.isProcessed) n = t ? Tt(r.style, t) : r.style;
      else {
        const { variants: o, ...i } = r;
        n = t ? Tt(pt(i), t) : i;
      }
      return mu(A, r.variants, [
        n
      ], t);
    }
    return (r == null ? void 0 : r.isProcessed) ? t ? Tt(pt(r.style), t) : r.style : t ? Tt(pt(r), t) : r;
  }
  function mu(A, e, t = [], r = void 0) {
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
      }, t.push(r ? Tt(pt(i.style(n)), r) : i.style(n))) : t.push(r ? Tt(pt(i.style), r) : i.style);
    }
    return t;
  }
  UB = function(A = {}) {
    const { themeId: e, defaultTheme: t = yB, rootShouldForwardProp: r = mi, slotShouldForwardProp: n = mi } = A;
    function o(a) {
      FB(a, e, t);
    }
    return (a, s = {}) => {
      mg(a, (v) => v.filter((I) => I !== Ct));
      const { name: l, slot: c, skipVariantsResolver: u, skipSx: d, overridesResolver: g = bB(xB(c)), ...B } = s, p = l && l.startsWith("Mui") || c ? "components" : "custom", b = u !== void 0 ? u : c && c !== "Root" && c !== "root" || false, h = d || false;
      let F = mi;
      c === "Root" || c === "root" ? F = r : c ? F = n : IB(a) && (F = void 0);
      const m = su(a, {
        shouldForwardProp: F,
        label: EB(),
        ...B
      }), Q = (v) => {
        if (v.__emotion_real === v) return v;
        if (typeof v == "function") return function(x) {
          return zn(x, v, x.theme.modularCssLayers ? p : void 0);
        };
        if (Ne(v)) {
          const I = Cu(v);
          return function(H) {
            return I.variants ? zn(H, I, H.theme.modularCssLayers ? p : void 0) : H.theme.modularCssLayers ? Tt(I.style, p) : I.style;
          };
        }
        return v;
      }, E = (...v) => {
        const I = [], x = v.map(Q), H = [];
        if (I.push(o), l && g && H.push(function(R) {
          var _a2, _b2;
          const K = (_b2 = (_a2 = R.theme.components) == null ? void 0 : _a2[l]) == null ? void 0 : _b2.styleOverrides;
          if (!K) return null;
          const D = {};
          for (const X in K) D[X] = zn(R, K[X], R.theme.modularCssLayers ? "theme" : void 0);
          return g(R, D);
        }), l && !b && H.push(function(R) {
          var _a2, _b2, _c2;
          const K = (_c2 = (_b2 = (_a2 = R.theme) == null ? void 0 : _a2.components) == null ? void 0 : _b2[l]) == null ? void 0 : _c2.variants;
          return K ? mu(R, K, [], R.theme.modularCssLayers ? "theme" : void 0) : null;
        }), h || H.push(Ct), Array.isArray(x[0])) {
          const O = x.shift(), R = new Array(I.length).fill(""), V = new Array(H.length).fill("");
          let K;
          K = [
            ...R,
            ...O,
            ...V
          ], K.raw = [
            ...R,
            ...O.raw,
            ...V
          ], I.unshift(K);
        }
        const f = [
          ...I,
          ...x,
          ...H
        ], T = m(...f);
        return a.muiName && (T.muiName = a.muiName), T;
      };
      return m.withConfig && (E.withConfig = m.withConfig), E;
    };
  };
  function EB(A, e) {
    return void 0;
  }
  function SB(A) {
    for (const e in A) return false;
    return true;
  }
  function IB(A) {
    return typeof A == "string" && A.charCodeAt(0) > 96;
  }
  function xB(A) {
    return A && A.charAt(0).toLowerCase() + A.slice(1);
  }
  na = function(A, e) {
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
            const s = a;
            t[n][s] = na(o[s], i[s]);
          }
        }
      } else t[n] === void 0 && (t[n] = A[n]);
    }
    return t;
  };
  rt = typeof window < "u" ? w.useLayoutEffect : w.useEffect;
  HB = function(A, e = Number.MIN_SAFE_INTEGER, t = Number.MAX_SAFE_INTEGER) {
    return Math.max(e, Math.min(A, t));
  };
  function ss(A, e = 0, t = 1) {
    return HB(A, e, t);
  }
  function TB(A) {
    A = A.slice(1);
    const e = new RegExp(`.{1,${A.length >= 6 ? 2 : 1}}`, "g");
    let t = A.match(e);
    return t && t[0].length === 1 && (t = t.map((r) => r + r)), t ? `rgb${t.length === 4 ? "a" : ""}(${t.map((r, n) => n < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
  }
  function mt(A) {
    if (A.type) return A;
    if (A.charAt(0) === "#") return mt(TB(A));
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
  const LB = (A) => {
    const e = mt(A);
    return e.values.slice(0, 3).map((t, r) => e.type.includes("hsl") && r !== 0 ? `${t}%` : t).join(" ");
  }, Ur = (A, e) => {
    try {
      return LB(A);
    } catch {
      return A;
    }
  };
  function ei(A) {
    const { type: e, colorSpace: t } = A;
    let { values: r } = A;
    return e.includes("rgb") ? r = r.map((n, o) => o < 3 ? parseInt(n, 10) : n) : e.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), e.includes("color") ? r = `${t} ${r.join(" ")}` : r = `${r.join(", ")}`, `${e}(${r})`;
  }
  function vu(A) {
    A = mt(A);
    const { values: e } = A, t = e[0], r = e[1] / 100, n = e[2] / 100, o = r * Math.min(n, 1 - n), i = (l, c = (l + t / 30) % 12) => n - o * Math.max(Math.min(c - 3, 9 - c, 1), -1);
    let a = "rgb";
    const s = [
      Math.round(i(0) * 255),
      Math.round(i(8) * 255),
      Math.round(i(4) * 255)
    ];
    return A.type === "hsla" && (a += "a", s.push(e[3])), ei({
      type: a,
      values: s
    });
  }
  function oa(A) {
    A = mt(A);
    let e = A.type === "hsl" || A.type === "hsla" ? mt(vu(A)).values : A.values;
    return e = e.map((t) => (A.type !== "color" && (t /= 255), t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4)), Number((0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2]).toFixed(3));
  }
  function kB(A, e) {
    const t = oa(A), r = oa(e);
    return (Math.max(t, r) + 0.05) / (Math.min(t, r) + 0.05);
  }
  Jr = function(A, e) {
    return A = mt(A), e = ss(e), (A.type === "rgb" || A.type === "hsl") && (A.type += "a"), A.type === "color" ? A.values[3] = `/${e}` : A.values[3] = e, ei(A);
  };
  function Bn(A, e, t) {
    try {
      return Jr(A, e);
    } catch {
      return A;
    }
  }
  ls = function(A, e) {
    if (A = mt(A), e = ss(e), A.type.includes("hsl")) A.values[2] *= 1 - e;
    else if (A.type.includes("rgb") || A.type.includes("color")) for (let t = 0; t < 3; t += 1) A.values[t] *= 1 - e;
    return ei(A);
  };
  function bA(A, e, t) {
    try {
      return ls(A, e);
    } catch {
      return A;
    }
  }
  cs = function(A, e) {
    if (A = mt(A), e = ss(e), A.type.includes("hsl")) A.values[2] += (100 - A.values[2]) * e;
    else if (A.type.includes("rgb")) for (let t = 0; t < 3; t += 1) A.values[t] += (255 - A.values[t]) * e;
    else if (A.type.includes("color")) for (let t = 0; t < 3; t += 1) A.values[t] += (1 - A.values[t]) * e;
    return ei(A);
  };
  function FA(A, e, t) {
    try {
      return cs(A, e);
    } catch {
      return A;
    }
  }
  RB = function(A, e = 0.15) {
    return oa(A) > 0.5 ? ls(A, e) : cs(A, e);
  };
  function pn(A, e, t) {
    try {
      return RB(A, e);
    } catch {
      return A;
    }
  }
  Zs = function(...A) {
    return A.reduce((e, t) => t == null ? e : function(...n) {
      e.apply(this, n), t.apply(this, n);
    }, () => {
    });
  };
  function Qu(A, e = 166) {
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
  vi = function(A, e) {
    var _a2, _b2, _c2;
    return w.isValidElement(A) && e.indexOf(A.type.muiName ?? ((_c2 = (_b2 = (_a2 = A.type) == null ? void 0 : _a2._payload) == null ? void 0 : _b2.value) == null ? void 0 : _c2.muiName)) !== -1;
  };
  Te = function(A) {
    return A && A.ownerDocument || document;
  };
  function nt(A) {
    return Te(A).defaultView || window;
  }
  function qs(A, e) {
    typeof A == "function" ? A(e) : A && (A.current = e);
  }
  let Al = 0;
  function KB(A) {
    const [e, t] = w.useState(A), r = A || e;
    return w.useEffect(() => {
      e == null && (Al += 1, t(`mui-${Al}`));
    }, [
      e
    ]), r;
  }
  const OB = {
    ...Zi
  }, el = OB.useId;
  ti = function(A) {
    if (el !== void 0) {
      const e = el();
      return A ?? e;
    }
    return KB(A);
  };
  tl = function({ controlled: A, default: e, name: t, state: r = "value" }) {
    const { current: n } = w.useRef(A !== void 0), [o, i] = w.useState(e), a = n ? A : o, s = w.useCallback((l) => {
      n || i(l);
    }, []);
    return [
      a,
      s
    ];
  };
  Rt = function(A) {
    const e = w.useRef(A);
    return rt(() => {
      e.current = A;
    }), w.useRef((...t) => (0, e.current)(...t)).current;
  };
  he = function(...A) {
    const e = w.useRef(void 0), t = w.useCallback((r) => {
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
    return w.useMemo(() => A.every((r) => r == null) ? null : (r) => {
      e.current && (e.current(), e.current = void 0), r != null && (e.current = t(r));
    }, A);
  };
  const rl = {};
  function yu(A, e) {
    const t = w.useRef(rl);
    return t.current === rl && (t.current = A(e)), t;
  }
  const DB = [];
  function MB(A) {
    w.useEffect(A, DB);
  }
  us = class {
    static create() {
      return new us();
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
  bu = function() {
    const A = yu(us.create).current;
    return MB(A.disposeEffect), A;
  };
  nl = function(A) {
    try {
      return A.matches(":focus-visible");
    } catch {
    }
    return false;
  };
  function Fu(A = window) {
    const e = A.document.documentElement.clientWidth;
    return A.innerWidth - e;
  }
  RA = function(A, e, t = void 0) {
    const r = {};
    for (const n in A) {
      const o = A[n];
      let i = "", a = true;
      for (let s = 0; s < o.length; s += 1) {
        const l = o[s];
        l && (i += (a === true ? "" : " ") + e(l), a = false, t && t[l] && (i += " " + t[l]));
      }
      r[n] = i;
    }
    return r;
  };
  function PB(A) {
    return typeof A == "string";
  }
  function Uu(A, e, t) {
    return A === void 0 || PB(A) ? e : {
      ...e,
      ownerState: {
        ...e.ownerState,
        ...t
      }
    };
  }
  Eu = function(A, e = []) {
    if (A === void 0) return {};
    const t = {};
    return Object.keys(A).filter((r) => r.match(/^on[A-Z]/) && typeof A[r] == "function" && !e.includes(r)).forEach((r) => {
      t[r] = A[r];
    }), t;
  };
  function ol(A) {
    if (A === void 0) return {};
    const e = {};
    return Object.keys(A).filter((t) => !(t.match(/^on[A-Z]/) && typeof A[t] == "function")).forEach((t) => {
      e[t] = A[t];
    }), e;
  }
  function Su(A) {
    const { getSlotProps: e, additionalProps: t, externalSlotProps: r, externalForwardedProps: n, className: o } = A;
    if (!e) {
      const g = pA(t == null ? void 0 : t.className, o, n == null ? void 0 : n.className, r == null ? void 0 : r.className), B = {
        ...t == null ? void 0 : t.style,
        ...n == null ? void 0 : n.style,
        ...r == null ? void 0 : r.style
      }, p = {
        ...t,
        ...n,
        ...r
      };
      return g.length > 0 && (p.className = g), Object.keys(B).length > 0 && (p.style = B), {
        props: p,
        internalRef: void 0
      };
    }
    const i = Eu({
      ...n,
      ...r
    }), a = ol(r), s = ol(n), l = e(i), c = pA(l == null ? void 0 : l.className, t == null ? void 0 : t.className, o, n == null ? void 0 : n.className, r == null ? void 0 : r.className), u = {
      ...l == null ? void 0 : l.style,
      ...t == null ? void 0 : t.style,
      ...n == null ? void 0 : n.style,
      ...r == null ? void 0 : r.style
    }, d = {
      ...l,
      ...t,
      ...s,
      ...a
    };
    return c.length > 0 && (d.className = c), Object.keys(u).length > 0 && (d.style = u), {
      props: d,
      internalRef: l.ref
    };
  }
  function Iu(A, e, t) {
    return typeof A == "function" ? A(e, t) : A;
  }
  NB = function(A) {
    var _a2;
    const { elementType: e, externalSlotProps: t, ownerState: r, skipResolvingSlotProps: n = false, ...o } = A, i = n ? {} : Iu(t, r), { props: a, internalRef: s } = Su({
      ...o,
      externalSlotProps: i
    }), l = he(s, i == null ? void 0 : i.ref, (_a2 = A.additionalProps) == null ? void 0 : _a2.ref);
    return Uu(e, {
      ...a,
      ref: l
    }, r);
  };
  sn = function(A) {
    var _a2;
    return parseInt(w.version, 10) >= 19 ? ((_a2 = A == null ? void 0 : A.props) == null ? void 0 : _a2.ref) || null : (A == null ? void 0 : A.ref) || null;
  };
  const xu = w.createContext(null);
  function ds() {
    return w.useContext(xu);
  }
  const GB = typeof Symbol == "function" && Symbol.for, _B = GB ? /* @__PURE__ */ Symbol.for("mui.nested") : "__THEME_NESTED__";
  function VB(A, e) {
    return typeof e == "function" ? e(A) : {
      ...A,
      ...e
    };
  }
  function $B(A) {
    const { children: e, theme: t } = A, r = ds(), n = w.useMemo(() => {
      const o = r === null ? {
        ...t
      } : VB(r, t);
      return o != null && (o[_B] = r !== null), o;
    }, [
      t,
      r
    ]);
    return N.jsx(xu.Provider, {
      value: n,
      children: e
    });
  }
  const Hu = w.createContext();
  function WB({ value: A, ...e }) {
    return N.jsx(Hu.Provider, {
      value: A ?? true,
      ...e
    });
  }
  let Tu;
  XB = () => w.useContext(Hu) ?? false;
  Tu = w.createContext(void 0);
  function jB({ value: A, children: e }) {
    return N.jsx(Tu.Provider, {
      value: A,
      children: e
    });
  }
  function JB(A) {
    const { theme: e, name: t, props: r } = A;
    if (!e || !e.components || !e.components[t]) return r;
    const n = e.components[t];
    return n.defaultProps ? na(n.defaultProps, r) : !n.styleOverrides && !n.variants ? na(n, r) : r;
  }
  function YB({ props: A, name: e }) {
    const t = w.useContext(Tu);
    return JB({
      props: A,
      name: e,
      theme: {
        components: t
      }
    });
  }
  function zB(A) {
    const e = is(), t = ti() || "", { modularCssLayers: r } = A;
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
    ]), n ? N.jsx(Bu, {
      styles: n
    }) : null;
  }
  const il = {};
  function al(A, e, t, r = false) {
    return w.useMemo(() => {
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
  function Lu(A) {
    const { children: e, theme: t, themeId: r } = A, n = is(il), o = ds() || il, i = al(r, n, t), a = al(r, o, t, true), s = (r ? i[r] : i).direction === "rtl", l = zB(i);
    return N.jsx($B, {
      theme: a,
      children: N.jsx(tn.Provider, {
        value: i,
        children: N.jsx(WB, {
          value: s,
          children: N.jsxs(jB, {
            value: r ? i[r].components : i.components,
            children: [
              l,
              e
            ]
          })
        })
      })
    });
  }
  const sl = {
    theme: void 0
  };
  function ZB(A) {
    let e, t;
    return function(n) {
      let o = e;
      return (o === void 0 || n.theme !== t) && (sl.theme = n.theme, o = Cu(A(sl)), e = o, t = n.theme), o;
    };
  }
  const fs = "mode", gs = "color-scheme", qB = "data-color-scheme";
  function Ap(A) {
    const { defaultMode: e = "system", defaultLightColorScheme: t = "light", defaultDarkColorScheme: r = "dark", modeStorageKey: n = fs, colorSchemeStorageKey: o = gs, attribute: i = qB, colorSchemeNode: a = "document.documentElement", nonce: s } = A || {};
    let l = "", c = i;
    if (i === "class" && (c = ".%s"), i === "data" && (c = "[data-%s]"), c.startsWith(".")) {
      const d = c.substring(1);
      l += `${a}.classList.remove('${d}'.replace('%s', light), '${d}'.replace('%s', dark));
      ${a}.classList.add('${d}'.replace('%s', colorScheme));`;
    }
    const u = c.match(/\[([^\]]+)\]/);
    if (u) {
      const [d, g] = u[1].split("=");
      g || (l += `${a}.removeAttribute('${d}'.replace('%s', light));
      ${a}.removeAttribute('${d}'.replace('%s', dark));`), l += `
      ${a}.setAttribute('${d}'.replace('%s', colorScheme), ${g ? `${g}.replace('%s', colorScheme)` : '""'});`;
    } else l += `${a}.setAttribute('${c}', colorScheme);`;
    return N.jsx("script", {
      suppressHydrationWarning: true,
      nonce: typeof window > "u" ? s : "",
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
    ${l}
  }
} catch(e){}})();`
      }
    }, "mui-color-scheme-init");
  }
  function ep() {
  }
  const tp = ({ key: A, storageWindow: e }) => (!e && typeof window < "u" && (e = window), {
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
      if (!e) return ep;
      const r = (n) => {
        const o = n.newValue;
        n.key === A && t(o);
      };
      return e.addEventListener("storage", r), () => {
        e.removeEventListener("storage", r);
      };
    }
  });
  function Qi() {
  }
  function ll(A) {
    if (typeof window < "u" && typeof window.matchMedia == "function" && A === "system") return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function ku(A, e) {
    if (A.mode === "light" || A.mode === "system" && A.systemMode === "light") return e("light");
    if (A.mode === "dark" || A.mode === "system" && A.systemMode === "dark") return e("dark");
  }
  function rp(A) {
    return ku(A, (e) => {
      if (e === "light") return A.lightColorScheme;
      if (e === "dark") return A.darkColorScheme;
    });
  }
  function np(A) {
    const { defaultMode: e = "light", defaultLightColorScheme: t, defaultDarkColorScheme: r, supportedColorSchemes: n = [], modeStorageKey: o = fs, colorSchemeStorageKey: i = gs, storageWindow: a = typeof window > "u" ? void 0 : window, storageManager: s = tp, noSsr: l = false } = A, c = n.join(","), u = n.length > 1, d = w.useMemo(() => s == null ? void 0 : s({
      key: o,
      storageWindow: a
    }), [
      s,
      o,
      a
    ]), g = w.useMemo(() => s == null ? void 0 : s({
      key: `${i}-light`,
      storageWindow: a
    }), [
      s,
      i,
      a
    ]), B = w.useMemo(() => s == null ? void 0 : s({
      key: `${i}-dark`,
      storageWindow: a
    }), [
      s,
      i,
      a
    ]), [p, b] = w.useState(() => {
      const x = (d == null ? void 0 : d.get(e)) || e, H = (g == null ? void 0 : g.get(t)) || t, f = (B == null ? void 0 : B.get(r)) || r;
      return {
        mode: x,
        systemMode: ll(x),
        lightColorScheme: H,
        darkColorScheme: f
      };
    }), [h, F] = w.useState(l || !u);
    w.useEffect(() => {
      F(true);
    }, []);
    const m = rp(p), Q = w.useCallback((x) => {
      b((H) => {
        if (x === H.mode) return H;
        const f = x ?? e;
        return d == null ? void 0 : d.set(f), {
          ...H,
          mode: f,
          systemMode: ll(f)
        };
      });
    }, [
      d,
      e
    ]), E = w.useCallback((x) => {
      x ? typeof x == "string" ? x && !c.includes(x) ? console.error(`\`${x}\` does not exist in \`theme.colorSchemes\`.`) : b((H) => {
        const f = {
          ...H
        };
        return ku(H, (T) => {
          T === "light" && (g == null ? void 0 : g.set(x), f.lightColorScheme = x), T === "dark" && (B == null ? void 0 : B.set(x), f.darkColorScheme = x);
        }), f;
      }) : b((H) => {
        const f = {
          ...H
        }, T = x.light === null ? t : x.light, O = x.dark === null ? r : x.dark;
        return T && (c.includes(T) ? (f.lightColorScheme = T, g == null ? void 0 : g.set(T)) : console.error(`\`${T}\` does not exist in \`theme.colorSchemes\`.`)), O && (c.includes(O) ? (f.darkColorScheme = O, B == null ? void 0 : B.set(O)) : console.error(`\`${O}\` does not exist in \`theme.colorSchemes\`.`)), f;
      }) : b((H) => (g == null ? void 0 : g.set(t), B == null ? void 0 : B.set(r), {
        ...H,
        lightColorScheme: t,
        darkColorScheme: r
      }));
    }, [
      c,
      g,
      B,
      t,
      r
    ]), v = w.useCallback((x) => {
      p.mode === "system" && b((H) => {
        const f = (x == null ? void 0 : x.matches) ? "dark" : "light";
        return H.systemMode === f ? H : {
          ...H,
          systemMode: f
        };
      });
    }, [
      p.mode
    ]), I = w.useRef(v);
    return I.current = v, w.useEffect(() => {
      if (typeof window.matchMedia != "function" || !u) return;
      const x = (...f) => I.current(...f), H = window.matchMedia("(prefers-color-scheme: dark)");
      return H.addListener(x), x(H), () => {
        H.removeListener(x);
      };
    }, [
      u
    ]), w.useEffect(() => {
      if (u) {
        const x = (d == null ? void 0 : d.subscribe((T) => {
          (!T || [
            "light",
            "dark",
            "system"
          ].includes(T)) && Q(T || e);
        })) || Qi, H = (g == null ? void 0 : g.subscribe((T) => {
          (!T || c.match(T)) && E({
            light: T
          });
        })) || Qi, f = (B == null ? void 0 : B.subscribe((T) => {
          (!T || c.match(T)) && E({
            dark: T
          });
        })) || Qi;
        return () => {
          x(), H(), f();
        };
      }
    }, [
      E,
      Q,
      c,
      e,
      a,
      u,
      d,
      g,
      B
    ]), {
      ...p,
      mode: h ? p.mode : void 0,
      systemMode: h ? p.systemMode : void 0,
      colorScheme: h ? m : void 0,
      setMode: Q,
      setColorScheme: E
    };
  }
  const op = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
  function ip(A) {
    const { themeId: e, theme: t = {}, modeStorageKey: r = fs, colorSchemeStorageKey: n = gs, disableTransitionOnChange: o = false, defaultColorScheme: i, resolveTheme: a } = A, s = {
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
    }, l = w.createContext(void 0), c = () => w.useContext(l) || s, u = {}, d = {};
    function g(h) {
      var _a2, _b2, _c2, _d2;
      const { children: F, theme: m, modeStorageKey: Q = r, colorSchemeStorageKey: E = n, disableTransitionOnChange: v = o, storageManager: I, storageWindow: x = typeof window > "u" ? void 0 : window, documentNode: H = typeof document > "u" ? void 0 : document, colorSchemeNode: f = typeof document > "u" ? void 0 : document.documentElement, disableNestedContext: T = false, disableStyleSheetGeneration: O = false, defaultMode: R = "system", noSsr: V } = h, K = w.useRef(false), D = ds(), X = w.useContext(l), nA = !!X && !T, M = w.useMemo(() => m || (typeof t == "function" ? t() : t), [
        m
      ]), j = M[e], AA = j || M, { colorSchemes: rA = u, components: L = d, cssVarPrefix: $ } = AA, _ = Object.keys(rA).filter((gA) => !!rA[gA]).join(","), Y = w.useMemo(() => _.split(","), [
        _
      ]), uA = typeof i == "string" ? i : i.light, iA = typeof i == "string" ? i : i.dark, eA = rA[uA] && rA[iA] ? R : ((_b2 = (_a2 = rA[AA.defaultColorScheme]) == null ? void 0 : _a2.palette) == null ? void 0 : _b2.mode) || ((_c2 = AA.palette) == null ? void 0 : _c2.mode), { mode: J, setMode: oA, systemMode: aA, lightColorScheme: C, darkColorScheme: U, colorScheme: y, setColorScheme: P } = np({
        supportedColorSchemes: Y,
        defaultLightColorScheme: uA,
        defaultDarkColorScheme: iA,
        modeStorageKey: Q,
        colorSchemeStorageKey: E,
        defaultMode: eA,
        storageManager: I,
        storageWindow: x,
        noSsr: V
      });
      let W = J, G = y;
      nA && (W = X.mode, G = X.colorScheme);
      const sA = w.useMemo(() => {
        var _a3;
        const gA = G || AA.defaultColorScheme, MA = ((_a3 = AA.generateThemeVars) == null ? void 0 : _a3.call(AA)) || AA.vars, WA = {
          ...AA,
          components: L,
          colorSchemes: rA,
          cssVarPrefix: $,
          vars: MA
        };
        if (typeof WA.generateSpacing == "function" && (WA.spacing = WA.generateSpacing()), gA) {
          const ie = rA[gA];
          ie && typeof ie == "object" && Object.keys(ie).forEach((JA) => {
            ie[JA] && typeof ie[JA] == "object" ? WA[JA] = {
              ...WA[JA],
              ...ie[JA]
            } : WA[JA] = ie[JA];
          });
        }
        return a ? a(WA) : WA;
      }, [
        AA,
        G,
        L,
        rA,
        $
      ]), lA = AA.colorSchemeSelector;
      rt(() => {
        if (G && f && lA && lA !== "media") {
          const gA = lA;
          let MA = lA;
          if (gA === "class" && (MA = ".%s"), gA === "data" && (MA = "[data-%s]"), (gA == null ? void 0 : gA.startsWith("data-")) && !gA.includes("%s") && (MA = `[${gA}="%s"]`), MA.startsWith(".")) f.classList.remove(...Y.map((WA) => MA.substring(1).replace("%s", WA))), f.classList.add(MA.substring(1).replace("%s", G));
          else {
            const WA = MA.replace("%s", G).match(/\[([^\]]+)\]/);
            if (WA) {
              const [ie, JA] = WA[1].split("=");
              JA || Y.forEach((at) => {
                f.removeAttribute(ie.replace(G, at));
              }), f.setAttribute(ie, JA ? JA.replace(/"|'/g, "") : "");
            } else f.setAttribute(MA, G);
          }
        }
      }, [
        G,
        lA,
        f,
        Y
      ]), w.useEffect(() => {
        let gA;
        if (v && K.current && H) {
          const MA = H.createElement("style");
          MA.appendChild(H.createTextNode(op)), H.head.appendChild(MA), window.getComputedStyle(H.body), gA = setTimeout(() => {
            H.head.removeChild(MA);
          }, 1);
        }
        return () => {
          clearTimeout(gA);
        };
      }, [
        G,
        v,
        H
      ]), w.useEffect(() => (K.current = true, () => {
        K.current = false;
      }), []);
      const fA = w.useMemo(() => ({
        allColorSchemes: Y,
        colorScheme: G,
        darkColorScheme: U,
        lightColorScheme: C,
        mode: W,
        setColorScheme: P,
        setMode: oA,
        systemMode: aA
      }), [
        Y,
        G,
        U,
        C,
        W,
        P,
        oA,
        aA,
        sA.colorSchemeSelector
      ]);
      let q = true;
      (O || AA.cssVariables === false || nA && (D == null ? void 0 : D.cssVarPrefix) === $) && (q = false);
      const qA = N.jsxs(w.Fragment, {
        children: [
          N.jsx(Lu, {
            themeId: j ? e : void 0,
            theme: sA,
            children: F
          }),
          q && N.jsx(au, {
            styles: ((_d2 = sA.generateStyleSheets) == null ? void 0 : _d2.call(sA)) || []
          })
        ]
      });
      return nA ? qA : N.jsx(l.Provider, {
        value: fA,
        children: qA
      });
    }
    const B = typeof i == "string" ? i : i.light, p = typeof i == "string" ? i : i.dark;
    return {
      CssVarsProvider: g,
      useColorScheme: c,
      getInitColorSchemeScript: (h) => Ap({
        colorSchemeStorageKey: n,
        defaultLightColorScheme: B,
        defaultDarkColorScheme: p,
        modeStorageKey: r,
        ...h
      })
    };
  }
  function ap(A = "") {
    function e(...r) {
      if (!r.length) return "";
      const n = r[0];
      return typeof n == "string" && !n.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${A ? `${A}-` : ""}${n}${e(...r.slice(1))})` : `, ${n}`;
    }
    return (r, ...n) => `var(--${A ? `${A}-` : ""}${r}${e(...n)})`;
  }
  const cl = (A, e, t, r = []) => {
    let n = A;
    e.forEach((o, i) => {
      i === e.length - 1 ? Array.isArray(n) ? n[Number(o)] = t : n && typeof n == "object" && (n[o] = t) : n && typeof n == "object" && (n[o] || (n[o] = r.includes(o) ? [] : {}), n = n[o]);
    });
  }, sp = (A, e, t) => {
    function r(n, o = [], i = []) {
      Object.entries(n).forEach(([a, s]) => {
        (!t || t && !t([
          ...o,
          a
        ])) && s != null && (typeof s == "object" && Object.keys(s).length > 0 ? r(s, [
          ...o,
          a
        ], Array.isArray(s) ? [
          ...i,
          a
        ] : i) : e([
          ...o,
          a
        ], s, i));
      });
    }
    r(A);
  }, lp = (A, e) => typeof e == "number" ? [
    "lineHeight",
    "fontWeight",
    "opacity",
    "zIndex"
  ].some((r) => A.includes(r)) || A[A.length - 1].toLowerCase().includes("opacity") ? e : `${e}px` : e;
  function yi(A, e) {
    const { prefix: t, shouldSkipGeneratingVar: r } = e || {}, n = {}, o = {}, i = {};
    return sp(A, (a, s, l) => {
      if ((typeof s == "string" || typeof s == "number") && (!r || !r(a, s))) {
        const c = `--${t ? `${t}-` : ""}${a.join("-")}`, u = lp(a, s);
        Object.assign(n, {
          [c]: u
        }), cl(o, a, `var(${c})`, l), cl(i, a, `var(${c}, ${u})`, l);
      }
    }, (a) => a[0] === "vars"), {
      css: n,
      vars: o,
      varsWithDefaults: i
    };
  }
  function cp(A, e = {}) {
    const { getSelector: t = b, disableCssColorScheme: r, colorSchemeSelector: n } = e, { colorSchemes: o = {}, components: i, defaultColorScheme: a = "light", ...s } = A, { vars: l, css: c, varsWithDefaults: u } = yi(s, e);
    let d = u;
    const g = {}, { [a]: B, ...p } = o;
    if (Object.entries(p || {}).forEach(([m, Q]) => {
      const { vars: E, css: v, varsWithDefaults: I } = yi(Q, e);
      d = oe(d, I), g[m] = {
        css: v,
        vars: E
      };
    }), B) {
      const { css: m, vars: Q, varsWithDefaults: E } = yi(B, e);
      d = oe(d, E), g[a] = {
        css: m,
        vars: Q
      };
    }
    function b(m, Q) {
      var _a2, _b2;
      let E = n;
      if (n === "class" && (E = ".%s"), n === "data" && (E = "[data-%s]"), (n == null ? void 0 : n.startsWith("data-")) && !n.includes("%s") && (E = `[${n}="%s"]`), m) {
        if (E === "media") return A.defaultColorScheme === m ? ":root" : {
          [`@media (prefers-color-scheme: ${((_b2 = (_a2 = o[m]) == null ? void 0 : _a2.palette) == null ? void 0 : _b2.mode) || m})`]: {
            ":root": Q
          }
        };
        if (E) return A.defaultColorScheme === m ? `:root, ${E.replace("%s", String(m))}` : E.replace("%s", String(m));
      }
      return ":root";
    }
    return {
      vars: d,
      generateThemeVars: () => {
        let m = {
          ...l
        };
        return Object.entries(g).forEach(([, { vars: Q }]) => {
          m = oe(m, Q);
        }), m;
      },
      generateStyleSheets: () => {
        var _a2, _b2;
        const m = [], Q = A.defaultColorScheme || "light";
        function E(x, H) {
          Object.keys(H).length && m.push(typeof x == "string" ? {
            [x]: {
              ...H
            }
          } : x);
        }
        E(t(void 0, {
          ...c
        }), c);
        const { [Q]: v, ...I } = g;
        if (v) {
          const { css: x } = v, H = (_b2 = (_a2 = o[Q]) == null ? void 0 : _a2.palette) == null ? void 0 : _b2.mode, f = !r && H ? {
            colorScheme: H,
            ...x
          } : {
            ...x
          };
          E(t(Q, {
            ...f
          }), f);
        }
        return Object.entries(I).forEach(([x, { css: H }]) => {
          var _a3, _b3;
          const f = (_b3 = (_a3 = o[x]) == null ? void 0 : _a3.palette) == null ? void 0 : _b3.mode, T = !r && f ? {
            colorScheme: f,
            ...H
          } : {
            ...H
          };
          E(t(x, {
            ...T
          }), T);
        }), m;
      }
    };
  }
  function up(A) {
    return function(t) {
      return A === "media" ? `@media (prefers-color-scheme: ${t})` : A ? A.startsWith("data-") && !A.includes("%s") ? `[${A}="${t}"] &` : A === "class" ? `.${t} &` : A === "data" ? `[data-${t}] &` : `${A.replace("%s", t)} &` : "&";
    };
  }
  function Ru() {
    return {
      text: {
        primary: "rgba(0, 0, 0, 0.87)",
        secondary: "rgba(0, 0, 0, 0.6)",
        disabled: "rgba(0, 0, 0, 0.38)"
      },
      divider: "rgba(0, 0, 0, 0.12)",
      background: {
        paper: $r.white,
        default: $r.white
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
  const dp = Ru();
  function Ku() {
    return {
      text: {
        primary: $r.white,
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
        active: $r.white,
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
  const ul = Ku();
  function dl(A, e, t, r) {
    const n = r.light || r, o = r.dark || r * 1.5;
    A[e] || (A.hasOwnProperty(t) ? A[e] = A[t] : e === "light" ? A.light = cs(A.main, n) : e === "dark" && (A.dark = ls(A.main, o)));
  }
  function fp(A = "light") {
    return A === "dark" ? {
      main: Gt[200],
      light: Gt[50],
      dark: Gt[400]
    } : {
      main: Gt[700],
      light: Gt[400],
      dark: Gt[800]
    };
  }
  function gp(A = "light") {
    return A === "dark" ? {
      main: Nt[200],
      light: Nt[50],
      dark: Nt[400]
    } : {
      main: Nt[500],
      light: Nt[300],
      dark: Nt[700]
    };
  }
  function Bp(A = "light") {
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
  function pp(A = "light") {
    return A === "dark" ? {
      main: _t[400],
      light: _t[300],
      dark: _t[700]
    } : {
      main: _t[700],
      light: _t[500],
      dark: _t[900]
    };
  }
  function hp(A = "light") {
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
  function wp(A = "light") {
    return A === "dark" ? {
      main: hr[400],
      light: hr[300],
      dark: hr[700]
    } : {
      main: "#ed6c02",
      light: hr[500],
      dark: hr[900]
    };
  }
  function Bs(A) {
    const { mode: e = "light", contrastThreshold: t = 3, tonalOffset: r = 0.2, ...n } = A, o = A.primary || fp(e), i = A.secondary || gp(e), a = A.error || Bp(e), s = A.info || pp(e), l = A.success || hp(e), c = A.warning || wp(e);
    function u(p) {
      return kB(p, ul.text.primary) >= t ? ul.text.primary : dp.text.primary;
    }
    const d = ({ color: p, name: b, mainShade: h = 500, lightShade: F = 300, darkShade: m = 700 }) => {
      if (p = {
        ...p
      }, !p.main && p[h] && (p.main = p[h]), !p.hasOwnProperty("main")) throw new Error(et(11, b ? ` (${b})` : "", h));
      if (typeof p.main != "string") throw new Error(et(12, b ? ` (${b})` : "", JSON.stringify(p.main)));
      return dl(p, "light", F, r), dl(p, "dark", m, r), p.contrastText || (p.contrastText = u(p.main)), p;
    };
    let g;
    return e === "light" ? g = Ru() : e === "dark" && (g = Ku()), oe({
      common: {
        ...$r
      },
      mode: e,
      primary: d({
        color: o,
        name: "primary"
      }),
      secondary: d({
        color: i,
        name: "secondary",
        mainShade: "A400",
        lightShade: "A200",
        darkShade: "A700"
      }),
      error: d({
        color: a,
        name: "error"
      }),
      warning: d({
        color: c,
        name: "warning"
      }),
      info: d({
        color: s,
        name: "info"
      }),
      success: d({
        color: l,
        name: "success"
      }),
      grey: pf,
      contrastThreshold: t,
      getContrastText: u,
      augmentColor: d,
      tonalOffset: r,
      ...g
    }, n);
  }
  function Cp(A) {
    const e = {};
    return Object.entries(A).forEach((r) => {
      const [n, o] = r;
      typeof o == "object" && (e[n] = `${o.fontStyle ? `${o.fontStyle} ` : ""}${o.fontVariant ? `${o.fontVariant} ` : ""}${o.fontWeight ? `${o.fontWeight} ` : ""}${o.fontStretch ? `${o.fontStretch} ` : ""}${o.fontSize || ""}${o.lineHeight ? `/${o.lineHeight} ` : ""}${o.fontFamily || ""}`);
    }), e;
  }
  function mp(A, e) {
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
  function vp(A) {
    return Math.round(A * 1e5) / 1e5;
  }
  const fl = {
    textTransform: "uppercase"
  }, gl = '"Roboto", "Helvetica", "Arial", sans-serif';
  function Ou(A, e) {
    const { fontFamily: t = gl, fontSize: r = 14, fontWeightLight: n = 300, fontWeightRegular: o = 400, fontWeightMedium: i = 500, fontWeightBold: a = 700, htmlFontSize: s = 16, allVariants: l, pxToRem: c, ...u } = typeof e == "function" ? e(A) : e, d = r / 14, g = c || ((b) => `${b / s * d}rem`), B = (b, h, F, m, Q) => ({
      fontFamily: t,
      fontWeight: b,
      fontSize: g(h),
      lineHeight: F,
      ...t === gl ? {
        letterSpacing: `${vp(m / h)}em`
      } : {},
      ...Q,
      ...l
    }), p = {
      h1: B(n, 96, 1.167, -1.5),
      h2: B(n, 60, 1.2, -0.5),
      h3: B(o, 48, 1.167, 0),
      h4: B(o, 34, 1.235, 0.25),
      h5: B(o, 24, 1.334, 0),
      h6: B(i, 20, 1.6, 0.15),
      subtitle1: B(o, 16, 1.75, 0.15),
      subtitle2: B(i, 14, 1.57, 0.1),
      body1: B(o, 16, 1.5, 0.15),
      body2: B(o, 14, 1.43, 0.15),
      button: B(i, 14, 1.75, 0.4, fl),
      caption: B(o, 12, 1.66, 0.4),
      overline: B(o, 12, 2.66, 1, fl),
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit"
      }
    };
    return oe({
      htmlFontSize: s,
      pxToRem: g,
      fontFamily: t,
      fontSize: r,
      fontWeightLight: n,
      fontWeightRegular: o,
      fontWeightMedium: i,
      fontWeightBold: a,
      ...p
    }, u, {
      clone: false
    });
  }
  const Qp = 0.2, yp = 0.14, bp = 0.12;
  function TA(...A) {
    return [
      `${A[0]}px ${A[1]}px ${A[2]}px ${A[3]}px rgba(0,0,0,${Qp})`,
      `${A[4]}px ${A[5]}px ${A[6]}px ${A[7]}px rgba(0,0,0,${yp})`,
      `${A[8]}px ${A[9]}px ${A[10]}px ${A[11]}px rgba(0,0,0,${bp})`
    ].join(",");
  }
  let Fp, Up;
  Fp = [
    "none",
    TA(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    TA(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    TA(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    TA(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    TA(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    TA(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    TA(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    TA(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    TA(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    TA(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    TA(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    TA(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    TA(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    TA(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    TA(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    TA(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    TA(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    TA(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    TA(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    TA(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    TA(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    TA(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    TA(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    TA(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)
  ];
  Up = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
  };
  Ep = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195
  };
  function Bl(A) {
    return `${Math.round(A)}ms`;
  }
  function Sp(A) {
    if (!A) return 0;
    const e = A / 36;
    return Math.min(Math.round((4 + 15 * e ** 0.25 + e / 5) * 10), 3e3);
  }
  function Ip(A) {
    const e = {
      ...Up,
      ...A.easing
    }, t = {
      ...Ep,
      ...A.duration
    };
    return {
      getAutoHeightDuration: Sp,
      create: (n = [
        "all"
      ], o = {}) => {
        const { duration: i = t.standard, easing: a = e.easeInOut, delay: s = 0, ...l } = o;
        return (Array.isArray(n) ? n : [
          n
        ]).map((c) => `${c} ${typeof i == "string" ? i : Bl(i)} ${a} ${typeof s == "string" ? s : Bl(s)}`).join(",");
      },
      ...A,
      easing: e,
      duration: t
    };
  }
  const xp = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
  };
  function Hp(A) {
    return Ne(A) || typeof A > "u" || typeof A == "string" || typeof A == "boolean" || typeof A == "number" || Array.isArray(A);
  }
  function Du(A = {}) {
    const e = {
      ...A
    };
    function t(r) {
      const n = Object.entries(r);
      for (let o = 0; o < n.length; o++) {
        const [i, a] = n[o];
        !Hp(a) || i.startsWith("unstable_") ? delete r[i] : Ne(a) && (r[i] = {
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
  function ia(A = {}, ...e) {
    const { breakpoints: t, mixins: r = {}, spacing: n, palette: o = {}, transitions: i = {}, typography: a = {}, shape: s, ...l } = A;
    if (A.vars && A.generateThemeVars === void 0) throw new Error(et(20));
    const c = Bs(o), u = os(A);
    let d = oe(u, {
      mixins: mp(u.breakpoints, r),
      palette: c,
      shadows: Fp.slice(),
      typography: Ou(c, a),
      transitions: Ip(i),
      zIndex: {
        ...xp
      }
    });
    return d = oe(d, l), d = e.reduce((g, B) => oe(g, B), d), d.unstable_sxConfig = {
      ...an,
      ...l == null ? void 0 : l.unstable_sxConfig
    }, d.unstable_sx = function(B) {
      return Ct({
        sx: B,
        theme: this
      });
    }, d.toRuntimeSource = Du, d;
  }
  function aa(A) {
    let e;
    return A < 1 ? e = 5.11916 * A ** 2 : e = 4.5 * Math.log(A + 1) + 2, Math.round(e * 10) / 1e3;
  }
  const Tp = [
    ...Array(25)
  ].map((A, e) => {
    if (e === 0) return "none";
    const t = aa(e);
    return `linear-gradient(rgba(255 255 255 / ${t}), rgba(255 255 255 / ${t}))`;
  });
  function Mu(A) {
    return {
      inputPlaceholder: A === "dark" ? 0.5 : 0.42,
      inputUnderline: A === "dark" ? 0.7 : 0.42,
      switchTrackDisabled: A === "dark" ? 0.2 : 0.12,
      switchTrack: A === "dark" ? 0.3 : 0.38
    };
  }
  function Pu(A) {
    return A === "dark" ? Tp : [];
  }
  function Lp(A) {
    const { palette: e = {
      mode: "light"
    }, opacity: t, overlays: r, ...n } = A, o = Bs(e);
    return {
      palette: o,
      opacity: {
        ...Mu(o.mode),
        ...t
      },
      overlays: r || Pu(o.mode),
      ...n
    };
  }
  function kp(A) {
    var _a2;
    return !!A[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!A[0].match(/sxConfig$/) || A[0] === "palette" && !!((_a2 = A[1]) == null ? void 0 : _a2.match(/(mode|contrastThreshold|tonalOffset)/));
  }
  const Rp = (A) => [
    ...[
      ...Array(25)
    ].map((e, t) => `--${A ? `${A}-` : ""}overlays-${t}`),
    `--${A ? `${A}-` : ""}palette-AppBar-darkBg`,
    `--${A ? `${A}-` : ""}palette-AppBar-darkColor`
  ], Kp = (A) => (e, t) => {
    const r = A.rootSelector || ":root", n = A.colorSchemeSelector;
    let o = n;
    if (n === "class" && (o = ".%s"), n === "data" && (o = "[data-%s]"), (n == null ? void 0 : n.startsWith("data-")) && !n.includes("%s") && (o = `[${n}="%s"]`), A.defaultColorScheme === e) {
      if (e === "dark") {
        const i = {};
        return Rp(A.cssVarPrefix).forEach((a) => {
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
  function Op(A, e) {
    e.forEach((t) => {
      A[t] || (A[t] = {});
    });
  }
  function k(A, e, t) {
    !A[e] && t && (A[e] = t);
  }
  function Er(A) {
    return typeof A != "string" || !A.startsWith("hsl") ? A : vu(A);
  }
  function Je(A, e) {
    `${e}Channel` in A || (A[`${e}Channel`] = Ur(Er(A[e])));
  }
  function Dp(A) {
    return typeof A == "number" ? `${A}px` : typeof A == "string" || typeof A == "function" || Array.isArray(A) ? A : "8px";
  }
  const ke = (A) => {
    try {
      return A();
    } catch {
    }
  }, Mp = (A = "mui") => ap(A);
  function bi(A, e, t, r) {
    if (!e) return;
    e = e === true ? {} : e;
    const n = r === "dark" ? "dark" : "light";
    if (!t) {
      A[r] = Lp({
        ...e,
        palette: {
          mode: n,
          ...e == null ? void 0 : e.palette
        }
      });
      return;
    }
    const { palette: o, ...i } = ia({
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
        ...Mu(n),
        ...e == null ? void 0 : e.opacity
      },
      overlays: (e == null ? void 0 : e.overlays) || Pu(n)
    }, i;
  }
  function Pp(A = {}, ...e) {
    const { colorSchemes: t = {
      light: true
    }, defaultColorScheme: r, disableCssColorScheme: n = false, cssVarPrefix: o = "mui", shouldSkipGeneratingVar: i = kp, colorSchemeSelector: a = t.light && t.dark ? "media" : void 0, rootSelector: s = ":root", ...l } = A, c = Object.keys(t)[0], u = r || (t.light && c !== "light" ? "light" : c), d = Mp(o), { [u]: g, light: B, dark: p, ...b } = t, h = {
      ...b
    };
    let F = g;
    if ((u === "dark" && !("dark" in t) || u === "light" && !("light" in t)) && (F = true), !F) throw new Error(et(21, u));
    const m = bi(h, F, l, u);
    B && !h.light && bi(h, B, void 0, "light"), p && !h.dark && bi(h, p, void 0, "dark");
    let Q = {
      defaultColorScheme: u,
      ...m,
      cssVarPrefix: o,
      colorSchemeSelector: a,
      rootSelector: s,
      getCssVar: d,
      colorSchemes: h,
      font: {
        ...Cp(m.typography),
        ...m.font
      },
      spacing: Dp(l.spacing)
    };
    Object.keys(Q.colorSchemes).forEach((H) => {
      const f = Q.colorSchemes[H].palette, T = (O) => {
        const R = O.split("-"), V = R[1], K = R[2];
        return d(O, f[V][K]);
      };
      if (f.mode === "light" && (k(f.common, "background", "#fff"), k(f.common, "onBackground", "#000")), f.mode === "dark" && (k(f.common, "background", "#000"), k(f.common, "onBackground", "#fff")), Op(f, [
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
      ]), f.mode === "light") {
        k(f.Alert, "errorColor", bA(f.error.light, 0.6)), k(f.Alert, "infoColor", bA(f.info.light, 0.6)), k(f.Alert, "successColor", bA(f.success.light, 0.6)), k(f.Alert, "warningColor", bA(f.warning.light, 0.6)), k(f.Alert, "errorFilledBg", T("palette-error-main")), k(f.Alert, "infoFilledBg", T("palette-info-main")), k(f.Alert, "successFilledBg", T("palette-success-main")), k(f.Alert, "warningFilledBg", T("palette-warning-main")), k(f.Alert, "errorFilledColor", ke(() => f.getContrastText(f.error.main))), k(f.Alert, "infoFilledColor", ke(() => f.getContrastText(f.info.main))), k(f.Alert, "successFilledColor", ke(() => f.getContrastText(f.success.main))), k(f.Alert, "warningFilledColor", ke(() => f.getContrastText(f.warning.main))), k(f.Alert, "errorStandardBg", FA(f.error.light, 0.9)), k(f.Alert, "infoStandardBg", FA(f.info.light, 0.9)), k(f.Alert, "successStandardBg", FA(f.success.light, 0.9)), k(f.Alert, "warningStandardBg", FA(f.warning.light, 0.9)), k(f.Alert, "errorIconColor", T("palette-error-main")), k(f.Alert, "infoIconColor", T("palette-info-main")), k(f.Alert, "successIconColor", T("palette-success-main")), k(f.Alert, "warningIconColor", T("palette-warning-main")), k(f.AppBar, "defaultBg", T("palette-grey-100")), k(f.Avatar, "defaultBg", T("palette-grey-400")), k(f.Button, "inheritContainedBg", T("palette-grey-300")), k(f.Button, "inheritContainedHoverBg", T("palette-grey-A100")), k(f.Chip, "defaultBorder", T("palette-grey-400")), k(f.Chip, "defaultAvatarColor", T("palette-grey-700")), k(f.Chip, "defaultIconColor", T("palette-grey-700")), k(f.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), k(f.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), k(f.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), k(f.LinearProgress, "primaryBg", FA(f.primary.main, 0.62)), k(f.LinearProgress, "secondaryBg", FA(f.secondary.main, 0.62)), k(f.LinearProgress, "errorBg", FA(f.error.main, 0.62)), k(f.LinearProgress, "infoBg", FA(f.info.main, 0.62)), k(f.LinearProgress, "successBg", FA(f.success.main, 0.62)), k(f.LinearProgress, "warningBg", FA(f.warning.main, 0.62)), k(f.Skeleton, "bg", `rgba(${T("palette-text-primaryChannel")} / 0.11)`), k(f.Slider, "primaryTrack", FA(f.primary.main, 0.62)), k(f.Slider, "secondaryTrack", FA(f.secondary.main, 0.62)), k(f.Slider, "errorTrack", FA(f.error.main, 0.62)), k(f.Slider, "infoTrack", FA(f.info.main, 0.62)), k(f.Slider, "successTrack", FA(f.success.main, 0.62)), k(f.Slider, "warningTrack", FA(f.warning.main, 0.62));
        const O = pn(f.background.default, 0.8);
        k(f.SnackbarContent, "bg", O), k(f.SnackbarContent, "color", ke(() => f.getContrastText(O))), k(f.SpeedDialAction, "fabHoverBg", pn(f.background.paper, 0.15)), k(f.StepConnector, "border", T("palette-grey-400")), k(f.StepContent, "border", T("palette-grey-400")), k(f.Switch, "defaultColor", T("palette-common-white")), k(f.Switch, "defaultDisabledColor", T("palette-grey-100")), k(f.Switch, "primaryDisabledColor", FA(f.primary.main, 0.62)), k(f.Switch, "secondaryDisabledColor", FA(f.secondary.main, 0.62)), k(f.Switch, "errorDisabledColor", FA(f.error.main, 0.62)), k(f.Switch, "infoDisabledColor", FA(f.info.main, 0.62)), k(f.Switch, "successDisabledColor", FA(f.success.main, 0.62)), k(f.Switch, "warningDisabledColor", FA(f.warning.main, 0.62)), k(f.TableCell, "border", FA(Bn(f.divider, 1), 0.88)), k(f.Tooltip, "bg", Bn(f.grey[700], 0.92));
      }
      if (f.mode === "dark") {
        k(f.Alert, "errorColor", FA(f.error.light, 0.6)), k(f.Alert, "infoColor", FA(f.info.light, 0.6)), k(f.Alert, "successColor", FA(f.success.light, 0.6)), k(f.Alert, "warningColor", FA(f.warning.light, 0.6)), k(f.Alert, "errorFilledBg", T("palette-error-dark")), k(f.Alert, "infoFilledBg", T("palette-info-dark")), k(f.Alert, "successFilledBg", T("palette-success-dark")), k(f.Alert, "warningFilledBg", T("palette-warning-dark")), k(f.Alert, "errorFilledColor", ke(() => f.getContrastText(f.error.dark))), k(f.Alert, "infoFilledColor", ke(() => f.getContrastText(f.info.dark))), k(f.Alert, "successFilledColor", ke(() => f.getContrastText(f.success.dark))), k(f.Alert, "warningFilledColor", ke(() => f.getContrastText(f.warning.dark))), k(f.Alert, "errorStandardBg", bA(f.error.light, 0.9)), k(f.Alert, "infoStandardBg", bA(f.info.light, 0.9)), k(f.Alert, "successStandardBg", bA(f.success.light, 0.9)), k(f.Alert, "warningStandardBg", bA(f.warning.light, 0.9)), k(f.Alert, "errorIconColor", T("palette-error-main")), k(f.Alert, "infoIconColor", T("palette-info-main")), k(f.Alert, "successIconColor", T("palette-success-main")), k(f.Alert, "warningIconColor", T("palette-warning-main")), k(f.AppBar, "defaultBg", T("palette-grey-900")), k(f.AppBar, "darkBg", T("palette-background-paper")), k(f.AppBar, "darkColor", T("palette-text-primary")), k(f.Avatar, "defaultBg", T("palette-grey-600")), k(f.Button, "inheritContainedBg", T("palette-grey-800")), k(f.Button, "inheritContainedHoverBg", T("palette-grey-700")), k(f.Chip, "defaultBorder", T("palette-grey-700")), k(f.Chip, "defaultAvatarColor", T("palette-grey-300")), k(f.Chip, "defaultIconColor", T("palette-grey-300")), k(f.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), k(f.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), k(f.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), k(f.LinearProgress, "primaryBg", bA(f.primary.main, 0.5)), k(f.LinearProgress, "secondaryBg", bA(f.secondary.main, 0.5)), k(f.LinearProgress, "errorBg", bA(f.error.main, 0.5)), k(f.LinearProgress, "infoBg", bA(f.info.main, 0.5)), k(f.LinearProgress, "successBg", bA(f.success.main, 0.5)), k(f.LinearProgress, "warningBg", bA(f.warning.main, 0.5)), k(f.Skeleton, "bg", `rgba(${T("palette-text-primaryChannel")} / 0.13)`), k(f.Slider, "primaryTrack", bA(f.primary.main, 0.5)), k(f.Slider, "secondaryTrack", bA(f.secondary.main, 0.5)), k(f.Slider, "errorTrack", bA(f.error.main, 0.5)), k(f.Slider, "infoTrack", bA(f.info.main, 0.5)), k(f.Slider, "successTrack", bA(f.success.main, 0.5)), k(f.Slider, "warningTrack", bA(f.warning.main, 0.5));
        const O = pn(f.background.default, 0.98);
        k(f.SnackbarContent, "bg", O), k(f.SnackbarContent, "color", ke(() => f.getContrastText(O))), k(f.SpeedDialAction, "fabHoverBg", pn(f.background.paper, 0.15)), k(f.StepConnector, "border", T("palette-grey-600")), k(f.StepContent, "border", T("palette-grey-600")), k(f.Switch, "defaultColor", T("palette-grey-300")), k(f.Switch, "defaultDisabledColor", T("palette-grey-600")), k(f.Switch, "primaryDisabledColor", bA(f.primary.main, 0.55)), k(f.Switch, "secondaryDisabledColor", bA(f.secondary.main, 0.55)), k(f.Switch, "errorDisabledColor", bA(f.error.main, 0.55)), k(f.Switch, "infoDisabledColor", bA(f.info.main, 0.55)), k(f.Switch, "successDisabledColor", bA(f.success.main, 0.55)), k(f.Switch, "warningDisabledColor", bA(f.warning.main, 0.55)), k(f.TableCell, "border", bA(Bn(f.divider, 1), 0.68)), k(f.Tooltip, "bg", Bn(f.grey[700], 0.92));
      }
      Je(f.background, "default"), Je(f.background, "paper"), Je(f.common, "background"), Je(f.common, "onBackground"), Je(f, "divider"), Object.keys(f).forEach((O) => {
        const R = f[O];
        O !== "tonalOffset" && R && typeof R == "object" && (R.main && k(f[O], "mainChannel", Ur(Er(R.main))), R.light && k(f[O], "lightChannel", Ur(Er(R.light))), R.dark && k(f[O], "darkChannel", Ur(Er(R.dark))), R.contrastText && k(f[O], "contrastTextChannel", Ur(Er(R.contrastText))), O === "text" && (Je(f[O], "primary"), Je(f[O], "secondary")), O === "action" && (R.active && Je(f[O], "active"), R.selected && Je(f[O], "selected")));
      });
    }), Q = e.reduce((H, f) => oe(H, f), Q);
    const E = {
      prefix: o,
      disableCssColorScheme: n,
      shouldSkipGeneratingVar: i,
      getSelector: Kp(Q)
    }, { vars: v, generateThemeVars: I, generateStyleSheets: x } = cp(Q, E);
    return Q.vars = v, Object.entries(Q.colorSchemes[Q.defaultColorScheme]).forEach(([H, f]) => {
      Q[H] = f;
    }), Q.generateThemeVars = I, Q.generateStyleSheets = x, Q.generateSpacing = function() {
      return gu(l.spacing, rs(this));
    }, Q.getColorSchemeSelector = up(a), Q.spacing = Q.generateSpacing(), Q.shouldSkipGeneratingVar = i, Q.unstable_sxConfig = {
      ...an,
      ...l == null ? void 0 : l.unstable_sxConfig
    }, Q.unstable_sx = function(f) {
      return Ct({
        sx: f,
        theme: this
      });
    }, Q.toRuntimeSource = Du, Q;
  }
  function pl(A, e, t) {
    A.colorSchemes && t && (A.colorSchemes[e] = {
      ...t !== true && t,
      palette: Bs({
        ...t === true ? {} : t.palette,
        mode: e
      })
    });
  }
  ps = function(A = {}, ...e) {
    const { palette: t, cssVariables: r = false, colorSchemes: n = t ? void 0 : {
      light: true
    }, defaultColorScheme: o = t == null ? void 0 : t.mode, ...i } = A, a = o || "light", s = n == null ? void 0 : n[a], l = {
      ...n,
      ...t ? {
        [a]: {
          ...typeof s != "boolean" && s,
          palette: t
        }
      } : void 0
    };
    if (r === false) {
      if (!("colorSchemes" in A)) return ia(A, ...e);
      let c = t;
      "palette" in A || l[a] && (l[a] !== true ? c = l[a].palette : a === "dark" && (c = {
        mode: "dark"
      }));
      const u = ia({
        ...A,
        palette: c
      }, ...e);
      return u.defaultColorScheme = a, u.colorSchemes = l, u.palette.mode === "light" && (u.colorSchemes.light = {
        ...l.light !== true && l.light,
        palette: u.palette
      }, pl(u, "dark", l.dark)), u.palette.mode === "dark" && (u.colorSchemes.dark = {
        ...l.dark !== true && l.dark,
        palette: u.palette
      }, pl(u, "light", l.light)), u;
    }
    return !t && !("light" in l) && a === "light" && (l.light = true), Pp({
      ...i,
      colorSchemes: l,
      defaultColorScheme: a,
      ...typeof r != "boolean" && r
    }, ...e);
  };
  const hs = ps();
  ws = function() {
    const A = as(hs);
    return A[_e] || A;
  };
  Nu = function(A) {
    return A !== "ownerState" && A !== "theme" && A !== "sx" && A !== "as";
  };
  $e = (A) => Nu(A) && A !== "classes";
  dA = UB({
    themeId: _e,
    defaultTheme: hs,
    rootShouldForwardProp: $e
  });
  function Np({ theme: A, ...e }) {
    const t = _e in A ? A[_e] : void 0;
    return N.jsx(Lu, {
      ...e,
      themeId: t ? _e : void 0,
      theme: t || A
    });
  }
  const hn = {
    colorSchemeStorageKey: "mui-color-scheme",
    defaultLightColorScheme: "light",
    defaultDarkColorScheme: "dark",
    modeStorageKey: "mui-mode"
  }, { CssVarsProvider: Gp } = ip({
    themeId: _e,
    theme: () => ps({
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
        typography: Ou(A.palette, A.typography)
      };
      return e.unstable_sx = function(r) {
        return Ct({
          sx: r,
          theme: this
        });
      }, e;
    }
  }), _p = Gp;
  oU = function({ theme: A, ...e }) {
    const t = w.useMemo(() => {
      if (typeof A == "function") return A;
      const r = _e in A ? A[_e] : A;
      return "colorSchemes" in r ? null : "vars" in r ? A : {
        ...A,
        vars: null
      };
    }, [
      A
    ]);
    return t ? N.jsx(Np, {
      theme: t,
      ...e
    }) : N.jsx(_p, {
      theme: A,
      ...e
    });
  };
  function Vp(A) {
    return N.jsx(Bu, {
      ...A,
      defaultTheme: hs,
      themeId: _e
    });
  }
  $p = function(A) {
    return function(t) {
      return N.jsx(Vp, {
        styles: typeof A == "function" ? (r) => A({
          theme: r,
          ...t
        }) : A
      });
    };
  };
  function Wp() {
    return pu;
  }
  GA = ZB;
  DA = function(A) {
    return YB(A);
  };
  function Xp(A) {
    return kA("MuiSvgIcon", A);
  }
  xA("MuiSvgIcon", [
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
  let jp, Jp;
  jp = (A) => {
    const { color: e, fontSize: t, classes: r } = A, n = {
      root: [
        "root",
        e !== "inherit" && `color${hA(e)}`,
        `fontSize${hA(t)}`
      ]
    };
    return RA(n, Xp, r);
  };
  Jp = dA("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.root,
        t.color !== "inherit" && e[`color${hA(t.color)}`],
        e[`fontSize${hA(t.fontSize)}`]
      ];
    }
  })(GA(({ theme: A }) => {
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
  sa = w.forwardRef(function(e, t) {
    const r = DA({
      props: e,
      name: "MuiSvgIcon"
    }), { children: n, className: o, color: i = "inherit", component: a = "svg", fontSize: s = "medium", htmlColor: l, inheritViewBox: c = false, titleAccess: u, viewBox: d = "0 0 24 24", ...g } = r, B = w.isValidElement(n) && n.type === "svg", p = {
      ...r,
      color: i,
      component: a,
      fontSize: s,
      instanceFontSize: e.fontSize,
      inheritViewBox: c,
      viewBox: d,
      hasSvgAsChild: B
    }, b = {};
    c || (b.viewBox = d);
    const h = jp(p);
    return N.jsxs(Jp, {
      as: a,
      className: pA(h.root, o),
      focusable: "false",
      color: l,
      "aria-hidden": u ? void 0 : true,
      role: u ? "img" : void 0,
      ref: t,
      ...b,
      ...g,
      ...B && n.props,
      ownerState: p,
      children: [
        B ? n.props.children : n,
        u ? N.jsx("title", {
          children: u
        }) : null
      ]
    });
  });
  sa.muiName = "SvgIcon";
  Yp = function(A, e) {
    function t(r, n) {
      return N.jsx(sa, {
        "data-testid": `${e}Icon`,
        ref: n,
        ...r,
        children: A
      });
    }
    return t.muiName = sa.muiName, w.memo(w.forwardRef(t));
  };
  zp = function(A, e) {
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
  function Gu(A, e) {
    if (A == null) return {};
    var t = {};
    for (var r in A) if ({}.hasOwnProperty.call(A, r)) {
      if (e.indexOf(r) !== -1) continue;
      t[r] = A[r];
    }
    return t;
  }
  function la(A, e) {
    return la = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, r) {
      return t.__proto__ = r, t;
    }, la(A, e);
  }
  function _u(A, e) {
    A.prototype = Object.create(e.prototype), A.prototype.constructor = A, la(A, e);
  }
  const { initPromise: Zp } = lf, qp = Zp.then((A) => A.loadShare("react-dom", {
    customShareInfo: {
      shareConfig: {
        singleton: true,
        strictVersion: false,
        requiredVersion: "*"
      }
    }
  })), Ah = await qp.then((A) => A());
  Cs = Ah;
  const wn = Na(Cs), hl = {
    disabled: false
  }, oo = S.createContext(null);
  let eh, Sr, Ut, Et, qt, ca;
  eh = function(e) {
    return e.scrollTop;
  };
  Sr = "unmounted";
  Ut = "exited";
  Et = "entering";
  qt = "entered";
  ca = "exiting";
  We = (function(A) {
    _u(e, A);
    function e(r, n) {
      var o;
      o = A.call(this, r, n) || this;
      var i = n, a = i && !i.isMounting ? r.enter : r.appear, s;
      return o.appearStatus = null, r.in ? a ? (s = Ut, o.appearStatus = Et) : s = qt : r.unmountOnExit || r.mountOnEnter ? s = Sr : s = Ut, o.state = {
        status: s
      }, o.nextCallback = null, o;
    }
    e.getDerivedStateFromProps = function(n, o) {
      var i = n.in;
      return i && o.status === Sr ? {
        status: Ut
      } : null;
    };
    var t = e.prototype;
    return t.componentDidMount = function() {
      this.updateStatus(true, this.appearStatus);
    }, t.componentDidUpdate = function(n) {
      var o = null;
      if (n !== this.props) {
        var i = this.state.status;
        this.props.in ? i !== Et && i !== qt && (o = Et) : (i === Et || i === qt) && (o = ca);
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
      if (n === void 0 && (n = false), o !== null) if (this.cancelNextCallback(), o === Et) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var i = this.props.nodeRef ? this.props.nodeRef.current : wn.findDOMNode(this);
          i && eh(i);
        }
        this.performEnter(n);
      } else this.performExit();
      else this.props.unmountOnExit && this.state.status === Ut && this.setState({
        status: Sr
      });
    }, t.performEnter = function(n) {
      var o = this, i = this.props.enter, a = this.context ? this.context.isMounting : n, s = this.props.nodeRef ? [
        a
      ] : [
        wn.findDOMNode(this),
        a
      ], l = s[0], c = s[1], u = this.getTimeouts(), d = a ? u.appear : u.enter;
      if (!n && !i || hl.disabled) {
        this.safeSetState({
          status: qt
        }, function() {
          o.props.onEntered(l);
        });
        return;
      }
      this.props.onEnter(l, c), this.safeSetState({
        status: Et
      }, function() {
        o.props.onEntering(l, c), o.onTransitionEnd(d, function() {
          o.safeSetState({
            status: qt
          }, function() {
            o.props.onEntered(l, c);
          });
        });
      });
    }, t.performExit = function() {
      var n = this, o = this.props.exit, i = this.getTimeouts(), a = this.props.nodeRef ? void 0 : wn.findDOMNode(this);
      if (!o || hl.disabled) {
        this.safeSetState({
          status: Ut
        }, function() {
          n.props.onExited(a);
        });
        return;
      }
      this.props.onExit(a), this.safeSetState({
        status: ca
      }, function() {
        n.props.onExiting(a), n.onTransitionEnd(i.exit, function() {
          n.safeSetState({
            status: Ut
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
        var s = this.props.nodeRef ? [
          this.nextCallback
        ] : [
          i,
          this.nextCallback
        ], l = s[0], c = s[1];
        this.props.addEndListener(l, c);
      }
      n != null && setTimeout(this.nextCallback, n);
    }, t.render = function() {
      var n = this.state.status;
      if (n === Sr) return null;
      var o = this.props, i = o.children;
      o.in, o.mountOnEnter, o.unmountOnExit, o.appear, o.enter, o.exit, o.timeout, o.addEndListener, o.onEnter, o.onEntering, o.onEntered, o.onExit, o.onExiting, o.onExited, o.nodeRef;
      var a = Gu(o, [
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
      return S.createElement(oo.Provider, {
        value: null
      }, typeof i == "function" ? i(n, a) : S.cloneElement(S.Children.only(i), a));
    }, e;
  })(S.Component);
  We.contextType = oo;
  We.propTypes = {};
  function $t() {
  }
  We.defaultProps = {
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
  We.UNMOUNTED = Sr;
  We.EXITED = Ut;
  We.ENTERING = Et;
  We.ENTERED = qt;
  We.EXITING = ca;
  function th(A) {
    if (A === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return A;
  }
  function ms(A, e) {
    var t = function(o) {
      return e && w.isValidElement(o) ? e(o) : o;
    }, r = /* @__PURE__ */ Object.create(null);
    return A && w.Children.map(A, function(n) {
      return n;
    }).forEach(function(n) {
      r[n.key] = t(n);
    }), r;
  }
  function rh(A, e) {
    A = A || {}, e = e || {};
    function t(c) {
      return c in e ? e[c] : A[c];
    }
    var r = /* @__PURE__ */ Object.create(null), n = [];
    for (var o in A) o in e ? n.length && (r[o] = n, n = []) : n.push(o);
    var i, a = {};
    for (var s in e) {
      if (r[s]) for (i = 0; i < r[s].length; i++) {
        var l = r[s][i];
        a[r[s][i]] = t(l);
      }
      a[s] = t(s);
    }
    for (i = 0; i < n.length; i++) a[n[i]] = t(n[i]);
    return a;
  }
  function Lt(A, e, t) {
    return t[e] != null ? t[e] : A.props[e];
  }
  function nh(A, e) {
    return ms(A.children, function(t) {
      return w.cloneElement(t, {
        onExited: e.bind(null, t),
        in: true,
        appear: Lt(t, "appear", A),
        enter: Lt(t, "enter", A),
        exit: Lt(t, "exit", A)
      });
    });
  }
  function oh(A, e, t) {
    var r = ms(A.children), n = rh(e, r);
    return Object.keys(n).forEach(function(o) {
      var i = n[o];
      if (w.isValidElement(i)) {
        var a = o in e, s = o in r, l = e[o], c = w.isValidElement(l) && !l.props.in;
        s && (!a || c) ? n[o] = w.cloneElement(i, {
          onExited: t.bind(null, i),
          in: true,
          exit: Lt(i, "exit", A),
          enter: Lt(i, "enter", A)
        }) : !s && a && !c ? n[o] = w.cloneElement(i, {
          in: false
        }) : s && a && w.isValidElement(l) && (n[o] = w.cloneElement(i, {
          onExited: t.bind(null, i),
          in: l.props.in,
          exit: Lt(i, "exit", A),
          enter: Lt(i, "enter", A)
        }));
      }
    }), n;
  }
  var ih = Object.values || function(A) {
    return Object.keys(A).map(function(e) {
      return A[e];
    });
  }, ah = {
    component: "div",
    childFactory: function(e) {
      return e;
    }
  }, vs = (function(A) {
    _u(e, A);
    function e(r, n) {
      var o;
      o = A.call(this, r, n) || this;
      var i = o.handleExited.bind(th(o));
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
      var i = o.children, a = o.handleExited, s = o.firstRender;
      return {
        children: s ? nh(n, a) : oh(n, i, a),
        firstRender: false
      };
    }, t.handleExited = function(n, o) {
      var i = ms(this.props.children);
      n.key in i || (n.props.onExited && n.props.onExited(o), this.mounted && this.setState(function(a) {
        var s = to({}, a.children);
        return delete s[n.key], {
          children: s
        };
      }));
    }, t.render = function() {
      var n = this.props, o = n.component, i = n.childFactory, a = Gu(n, [
        "component",
        "childFactory"
      ]), s = this.state.contextValue, l = ih(this.state.children).map(i);
      return delete a.appear, delete a.enter, delete a.exit, o === null ? S.createElement(oo.Provider, {
        value: s
      }, l) : S.createElement(oo.Provider, {
        value: s
      }, S.createElement(o, a, l));
    }, e;
  })(S.Component);
  vs.propTypes = {};
  vs.defaultProps = ah;
  const Vu = (A) => A.scrollTop;
  io = function(A, e) {
    const { timeout: t, easing: r, style: n = {} } = A;
    return {
      duration: n.transitionDuration ?? (typeof t == "number" ? t : t[e.mode] || 0),
      easing: n.transitionTimingFunction ?? (typeof r == "object" ? r[e.mode] : r),
      delay: n.transitionDelay
    };
  };
  function sh(A) {
    return kA("MuiPaper", A);
  }
  xA("MuiPaper", [
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
  let lh, ch;
  lh = (A) => {
    const { square: e, elevation: t, variant: r, classes: n } = A, o = {
      root: [
        "root",
        r,
        !e && "rounded",
        r === "elevation" && `elevation${t}`
      ]
    };
    return RA(o, sh, n);
  };
  ch = dA("div", {
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
  })(GA(({ theme: A }) => ({
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
  uh = w.forwardRef(function(e, t) {
    var _a2;
    const r = DA({
      props: e,
      name: "MuiPaper"
    }), n = ws(), { className: o, component: i = "div", elevation: a = 1, square: s = false, variant: l = "elevation", ...c } = r, u = {
      ...r,
      component: i,
      elevation: a,
      square: s,
      variant: l
    }, d = lh(u);
    return N.jsx(ch, {
      as: i,
      ownerState: u,
      className: pA(d.root, o),
      ref: t,
      ...c,
      style: {
        ...l === "elevation" && {
          "--Paper-shadow": (n.vars || n).shadows[a],
          ...n.vars && {
            "--Paper-overlay": (_a2 = n.vars.overlays) == null ? void 0 : _a2[a]
          },
          ...!n.vars && n.palette.mode === "dark" && {
            "--Paper-overlay": `linear-gradient(${Jr("#fff", aa(a))}, ${Jr("#fff", aa(a))})`
          }
        },
        ...c.style
      }
    });
  });
  ce = function(A, e) {
    const { className: t, elementType: r, ownerState: n, externalForwardedProps: o, internalForwardedProps: i, shouldForwardComponentProp: a = false, ...s } = e, { component: l, slots: c = {
      [A]: void 0
    }, slotProps: u = {
      [A]: void 0
    }, ...d } = o, g = c[A] || r, B = Iu(u[A], n), { props: { component: p, ...b }, internalRef: h } = Su({
      className: t,
      ...s,
      externalForwardedProps: A === "root" ? d : void 0,
      externalSlotProps: B
    }), F = he(h, B == null ? void 0 : B.ref, e.ref), m = A === "root" ? p || l : p, Q = Uu(g, {
      ...A === "root" && !l && !c[A] && i,
      ...A !== "root" && !c[A] && i,
      ...b,
      ...m && !a && {
        as: m
      },
      ...m && a && {
        component: m
      },
      ref: F
    }, n);
    return [
      g,
      Q
    ];
  };
  class ao {
    static create() {
      return new ao();
    }
    static use() {
      const e = yu(ao.create).current, [t, r] = w.useState(false);
      return e.shouldMount = t, e.setShouldMount = r, w.useEffect(e.mountEffect, [
        t
      ]), e;
    }
    constructor() {
      this.ref = {
        current: null
      }, this.mounted = null, this.didMount = false, this.shouldMount = false, this.setShouldMount = null;
    }
    mount() {
      return this.mounted || (this.mounted = fh(), this.shouldMount = true, this.setShouldMount(this.shouldMount)), this.mounted;
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
  function dh() {
    return ao.use();
  }
  function fh() {
    let A, e;
    const t = new Promise((r, n) => {
      A = r, e = n;
    });
    return t.resolve = A, t.reject = e, t;
  }
  function gh(A) {
    const { className: e, classes: t, pulsate: r = false, rippleX: n, rippleY: o, rippleSize: i, in: a, onExited: s, timeout: l } = A, [c, u] = w.useState(false), d = pA(e, t.ripple, t.rippleVisible, r && t.ripplePulsate), g = {
      width: i,
      height: i,
      top: -(i / 2) + o,
      left: -(i / 2) + n
    }, B = pA(t.child, c && t.childLeaving, r && t.childPulsate);
    return !a && !c && u(true), w.useEffect(() => {
      if (!a && s != null) {
        const p = setTimeout(s, l);
        return () => {
          clearTimeout(p);
        };
      }
    }, [
      s,
      a,
      l
    ]), N.jsx("span", {
      className: d,
      style: g,
      children: N.jsx("span", {
        className: B
      })
    });
  }
  const ye = xA("MuiTouchRipple", [
    "root",
    "ripple",
    "rippleVisible",
    "ripplePulsate",
    "child",
    "childLeaving",
    "childPulsate"
  ]), ua = 550, Bh = 80, ph = rn`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, hh = rn`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, wh = rn`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, Ch = dA("span", {
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
  }), mh = dA(gh, {
    name: "MuiTouchRipple",
    slot: "Ripple"
  })`
  opacity: 0;
  position: absolute;

  &.${ye.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${ph};
    animation-duration: ${ua}ms;
    animation-timing-function: ${({ theme: A }) => A.transitions.easing.easeInOut};
  }

  &.${ye.ripplePulsate} {
    animation-duration: ${({ theme: A }) => A.transitions.duration.shorter}ms;
  }

  & .${ye.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${ye.childLeaving} {
    opacity: 0;
    animation-name: ${hh};
    animation-duration: ${ua}ms;
    animation-timing-function: ${({ theme: A }) => A.transitions.easing.easeInOut};
  }

  & .${ye.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${wh};
    animation-duration: 2500ms;
    animation-timing-function: ${({ theme: A }) => A.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, vh = w.forwardRef(function(e, t) {
    const r = DA({
      props: e,
      name: "MuiTouchRipple"
    }), { center: n = false, classes: o = {}, className: i, ...a } = r, [s, l] = w.useState([]), c = w.useRef(0), u = w.useRef(null);
    w.useEffect(() => {
      u.current && (u.current(), u.current = null);
    }, [
      s
    ]);
    const d = w.useRef(false), g = bu(), B = w.useRef(null), p = w.useRef(null), b = w.useCallback((Q) => {
      const { pulsate: E, rippleX: v, rippleY: I, rippleSize: x, cb: H } = Q;
      l((f) => [
        ...f,
        N.jsx(mh, {
          classes: {
            ripple: pA(o.ripple, ye.ripple),
            rippleVisible: pA(o.rippleVisible, ye.rippleVisible),
            ripplePulsate: pA(o.ripplePulsate, ye.ripplePulsate),
            child: pA(o.child, ye.child),
            childLeaving: pA(o.childLeaving, ye.childLeaving),
            childPulsate: pA(o.childPulsate, ye.childPulsate)
          },
          timeout: ua,
          pulsate: E,
          rippleX: v,
          rippleY: I,
          rippleSize: x
        }, c.current)
      ]), c.current += 1, u.current = H;
    }, [
      o
    ]), h = w.useCallback((Q = {}, E = {}, v = () => {
    }) => {
      const { pulsate: I = false, center: x = n || E.pulsate, fakeElement: H = false } = E;
      if ((Q == null ? void 0 : Q.type) === "mousedown" && d.current) {
        d.current = false;
        return;
      }
      (Q == null ? void 0 : Q.type) === "touchstart" && (d.current = true);
      const f = H ? null : p.current, T = f ? f.getBoundingClientRect() : {
        width: 0,
        height: 0,
        left: 0,
        top: 0
      };
      let O, R, V;
      if (x || Q === void 0 || Q.clientX === 0 && Q.clientY === 0 || !Q.clientX && !Q.touches) O = Math.round(T.width / 2), R = Math.round(T.height / 2);
      else {
        const { clientX: K, clientY: D } = Q.touches && Q.touches.length > 0 ? Q.touches[0] : Q;
        O = Math.round(K - T.left), R = Math.round(D - T.top);
      }
      if (x) V = Math.sqrt((2 * T.width ** 2 + T.height ** 2) / 3), V % 2 === 0 && (V += 1);
      else {
        const K = Math.max(Math.abs((f ? f.clientWidth : 0) - O), O) * 2 + 2, D = Math.max(Math.abs((f ? f.clientHeight : 0) - R), R) * 2 + 2;
        V = Math.sqrt(K ** 2 + D ** 2);
      }
      (Q == null ? void 0 : Q.touches) ? B.current === null && (B.current = () => {
        b({
          pulsate: I,
          rippleX: O,
          rippleY: R,
          rippleSize: V,
          cb: v
        });
      }, g.start(Bh, () => {
        B.current && (B.current(), B.current = null);
      })) : b({
        pulsate: I,
        rippleX: O,
        rippleY: R,
        rippleSize: V,
        cb: v
      });
    }, [
      n,
      b,
      g
    ]), F = w.useCallback(() => {
      h({}, {
        pulsate: true
      });
    }, [
      h
    ]), m = w.useCallback((Q, E) => {
      if (g.clear(), (Q == null ? void 0 : Q.type) === "touchend" && B.current) {
        B.current(), B.current = null, g.start(0, () => {
          m(Q, E);
        });
        return;
      }
      B.current = null, l((v) => v.length > 0 ? v.slice(1) : v), u.current = E;
    }, [
      g
    ]);
    return w.useImperativeHandle(t, () => ({
      pulsate: F,
      start: h,
      stop: m
    }), [
      F,
      h,
      m
    ]), N.jsx(Ch, {
      className: pA(ye.root, o.root, i),
      ref: p,
      ...a,
      children: N.jsx(vs, {
        component: null,
        exit: true,
        children: s
      })
    });
  });
  function Qh(A) {
    return kA("MuiButtonBase", A);
  }
  let yh, bh, Fh;
  yh = xA("MuiButtonBase", [
    "root",
    "disabled",
    "focusVisible"
  ]);
  bh = (A) => {
    const { disabled: e, focusVisible: t, focusVisibleClassName: r, classes: n } = A, i = RA({
      root: [
        "root",
        e && "disabled",
        t && "focusVisible"
      ]
    }, Qh, n);
    return t && r && (i.root += ` ${r}`), i;
  };
  Fh = dA("button", {
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
    [`&.${yh.disabled}`]: {
      pointerEvents: "none",
      cursor: "default"
    },
    "@media print": {
      colorAdjust: "exact"
    }
  });
  Uh = w.forwardRef(function(e, t) {
    const r = DA({
      props: e,
      name: "MuiButtonBase"
    }), { action: n, centerRipple: o = false, children: i, className: a, component: s = "button", disabled: l = false, disableRipple: c = false, disableTouchRipple: u = false, focusRipple: d = false, focusVisibleClassName: g, LinkComponent: B = "a", onBlur: p, onClick: b, onContextMenu: h, onDragLeave: F, onFocus: m, onFocusVisible: Q, onKeyDown: E, onKeyUp: v, onMouseDown: I, onMouseLeave: x, onMouseUp: H, onTouchEnd: f, onTouchMove: T, onTouchStart: O, tabIndex: R = 0, TouchRippleProps: V, touchRippleRef: K, type: D, ...X } = r, nA = w.useRef(null), M = dh(), j = he(M.ref, K), [AA, rA] = w.useState(false);
    l && AA && rA(false), w.useImperativeHandle(n, () => ({
      focusVisible: () => {
        rA(true), nA.current.focus();
      }
    }), []);
    const L = M.shouldMount && !c && !l;
    w.useEffect(() => {
      AA && d && !c && M.pulsate();
    }, [
      c,
      d,
      AA,
      M
    ]);
    const $ = Ye(M, "start", I, u), _ = Ye(M, "stop", h, u), Y = Ye(M, "stop", F, u), uA = Ye(M, "stop", H, u), iA = Ye(M, "stop", (q) => {
      AA && q.preventDefault(), x && x(q);
    }, u), eA = Ye(M, "start", O, u), J = Ye(M, "stop", f, u), oA = Ye(M, "stop", T, u), aA = Ye(M, "stop", (q) => {
      nl(q.target) || rA(false), p && p(q);
    }, false), C = Rt((q) => {
      nA.current || (nA.current = q.currentTarget), nl(q.target) && (rA(true), Q && Q(q)), m && m(q);
    }), U = () => {
      const q = nA.current;
      return s && s !== "button" && !(q.tagName === "A" && q.href);
    }, y = Rt((q) => {
      d && !q.repeat && AA && q.key === " " && M.stop(q, () => {
        M.start(q);
      }), q.target === q.currentTarget && U() && q.key === " " && q.preventDefault(), E && E(q), q.target === q.currentTarget && U() && q.key === "Enter" && !l && (q.preventDefault(), b && b(q));
    }), P = Rt((q) => {
      d && q.key === " " && AA && !q.defaultPrevented && M.stop(q, () => {
        M.pulsate(q);
      }), v && v(q), b && q.target === q.currentTarget && U() && q.key === " " && !q.defaultPrevented && b(q);
    });
    let W = s;
    W === "button" && (X.href || X.to) && (W = B);
    const G = {};
    W === "button" ? (G.type = D === void 0 ? "button" : D, G.disabled = l) : (!X.href && !X.to && (G.role = "button"), l && (G["aria-disabled"] = l));
    const sA = he(t, nA), lA = {
      ...r,
      centerRipple: o,
      component: s,
      disabled: l,
      disableRipple: c,
      disableTouchRipple: u,
      focusRipple: d,
      tabIndex: R,
      focusVisible: AA
    }, fA = bh(lA);
    return N.jsxs(Fh, {
      as: W,
      className: pA(fA.root, a),
      ownerState: lA,
      onBlur: aA,
      onClick: b,
      onContextMenu: _,
      onFocus: C,
      onKeyDown: y,
      onKeyUp: P,
      onMouseDown: $,
      onMouseLeave: iA,
      onMouseUp: uA,
      onDragLeave: Y,
      onTouchEnd: J,
      onTouchMove: oA,
      onTouchStart: eA,
      ref: sA,
      tabIndex: l ? -1 : R,
      type: D,
      ...G,
      ...X,
      children: [
        i,
        L ? N.jsx(vh, {
          ref: j,
          center: o,
          ...V
        }) : null
      ]
    });
  });
  function Ye(A, e, t, r = false) {
    return Rt((n) => (t && t(n), r || A[e](n), true));
  }
  function Eh(A) {
    return typeof A.main == "string";
  }
  function Sh(A, e = []) {
    if (!Eh(A)) return false;
    for (const t of e) if (!A.hasOwnProperty(t) || typeof A[t] != "string") return false;
    return true;
  }
  vt = function(A = []) {
    return ([, e]) => e && Sh(e, A);
  };
  function Ih(A) {
    return kA("MuiCircularProgress", A);
  }
  xA("MuiCircularProgress", [
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
  let st, da, fa, xh, Hh, Th, Lh, kh, Rh;
  st = 44;
  da = rn`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;
  fa = rn`
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
  xh = typeof da != "string" ? Za`
        animation: ${da} 1.4s linear infinite;
      ` : null;
  Hh = typeof fa != "string" ? Za`
        animation: ${fa} 1.4s ease-in-out infinite;
      ` : null;
  Th = (A) => {
    const { classes: e, variant: t, color: r, disableShrink: n } = A, o = {
      root: [
        "root",
        t,
        `color${hA(r)}`
      ],
      svg: [
        "svg"
      ],
      circle: [
        "circle",
        `circle${hA(t)}`,
        n && "circleDisableShrink"
      ]
    };
    return RA(o, Ih, e);
  };
  Lh = dA("span", {
    name: "MuiCircularProgress",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.root,
        e[t.variant],
        e[`color${hA(t.color)}`]
      ];
    }
  })(GA(({ theme: A }) => ({
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
        style: xh || {
          animation: `${da} 1.4s linear infinite`
        }
      },
      ...Object.entries(A.palette).filter(vt()).map(([e]) => ({
        props: {
          color: e
        },
        style: {
          color: (A.vars || A).palette[e].main
        }
      }))
    ]
  })));
  kh = dA("svg", {
    name: "MuiCircularProgress",
    slot: "Svg",
    overridesResolver: (A, e) => e.svg
  })({
    display: "block"
  });
  Rh = dA("circle", {
    name: "MuiCircularProgress",
    slot: "Circle",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.circle,
        e[`circle${hA(t.variant)}`],
        t.disableShrink && e.circleDisableShrink
      ];
    }
  })(GA(({ theme: A }) => ({
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
        style: Hh || {
          animation: `${fa} 1.4s ease-in-out infinite`
        }
      }
    ]
  })));
  Kh = w.forwardRef(function(e, t) {
    const r = DA({
      props: e,
      name: "MuiCircularProgress"
    }), { className: n, color: o = "primary", disableShrink: i = false, size: a = 40, style: s, thickness: l = 3.6, value: c = 0, variant: u = "indeterminate", ...d } = r, g = {
      ...r,
      color: o,
      disableShrink: i,
      size: a,
      thickness: l,
      value: c,
      variant: u
    }, B = Th(g), p = {}, b = {}, h = {};
    if (u === "determinate") {
      const F = 2 * Math.PI * ((st - l) / 2);
      p.strokeDasharray = F.toFixed(3), h["aria-valuenow"] = Math.round(c), p.strokeDashoffset = `${((100 - c) / 100 * F).toFixed(3)}px`, b.transform = "rotate(-90deg)";
    }
    return N.jsx(Lh, {
      className: pA(B.root, n),
      style: {
        width: a,
        height: a,
        ...b,
        ...s
      },
      ownerState: g,
      ref: t,
      role: "progressbar",
      ...h,
      ...d,
      children: N.jsx(kh, {
        className: B.svg,
        ownerState: g,
        viewBox: `${st / 2} ${st / 2} ${st} ${st}`,
        children: N.jsx(Rh, {
          className: B.circle,
          style: p,
          ownerState: g,
          cx: st,
          cy: st,
          r: (st - l) / 2,
          fill: "none",
          strokeWidth: l
        })
      })
    });
  });
  function Oh(A) {
    return kA("MuiIconButton", A);
  }
  let wl, Dh, Mh, Ph;
  wl = xA("MuiIconButton", [
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
  Dh = (A) => {
    const { classes: e, disabled: t, color: r, edge: n, size: o, loading: i } = A, a = {
      root: [
        "root",
        i && "loading",
        t && "disabled",
        r !== "default" && `color${hA(r)}`,
        n && `edge${hA(n)}`,
        `size${hA(o)}`
      ],
      loadingIndicator: [
        "loadingIndicator"
      ],
      loadingWrapper: [
        "loadingWrapper"
      ]
    };
    return RA(a, Oh, e);
  };
  Mh = dA(Uh, {
    name: "MuiIconButton",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.root,
        t.loading && e.loading,
        t.color !== "default" && e[`color${hA(t.color)}`],
        t.edge && e[`edge${hA(t.edge)}`],
        e[`size${hA(t.size)}`]
      ];
    }
  })(GA(({ theme: A }) => ({
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
          "--IconButton-hoverBg": A.vars ? `rgba(${A.vars.palette.action.activeChannel} / ${A.vars.palette.action.hoverOpacity})` : Jr(A.palette.action.active, A.palette.action.hoverOpacity),
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
  })), GA(({ theme: A }) => ({
    variants: [
      {
        props: {
          color: "inherit"
        },
        style: {
          color: "inherit"
        }
      },
      ...Object.entries(A.palette).filter(vt()).map(([e]) => ({
        props: {
          color: e
        },
        style: {
          color: (A.vars || A).palette[e].main
        }
      })),
      ...Object.entries(A.palette).filter(vt()).map(([e]) => ({
        props: {
          color: e
        },
        style: {
          "--IconButton-hoverBg": A.vars ? `rgba(${(A.vars || A).palette[e].mainChannel} / ${A.vars.palette.action.hoverOpacity})` : Jr((A.vars || A).palette[e].main, A.palette.action.hoverOpacity)
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
    [`&.${wl.disabled}`]: {
      backgroundColor: "transparent",
      color: (A.vars || A).palette.action.disabled
    },
    [`&.${wl.loading}`]: {
      color: "transparent"
    }
  })));
  Ph = dA("span", {
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
  iU = w.forwardRef(function(e, t) {
    const r = DA({
      props: e,
      name: "MuiIconButton"
    }), { edge: n = false, children: o, className: i, color: a = "default", disabled: s = false, disableFocusRipple: l = false, size: c = "medium", id: u, loading: d = null, loadingIndicator: g, ...B } = r, p = ti(u), b = g ?? N.jsx(Kh, {
      "aria-labelledby": p,
      color: "inherit",
      size: 16
    }), h = {
      ...r,
      edge: n,
      color: a,
      disabled: s,
      disableFocusRipple: l,
      loading: d,
      loadingIndicator: b,
      size: c
    }, F = Dh(h);
    return N.jsxs(Mh, {
      id: d ? p : u,
      className: pA(F.root, i),
      centerRipple: true,
      focusRipple: !l,
      disabled: s || d,
      ref: t,
      ...B,
      ownerState: h,
      children: [
        typeof d == "boolean" && N.jsx("span", {
          className: F.loadingWrapper,
          style: {
            display: "contents"
          },
          children: N.jsx(Ph, {
            className: F.loadingIndicator,
            ownerState: h,
            children: d && b
          })
        }),
        o
      ]
    });
  });
  function Nh(A) {
    return kA("MuiTypography", A);
  }
  let Gh, _h, Vh, $h, Cl;
  aU = xA("MuiTypography", [
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
  Gh = {
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
  _h = Wp();
  Vh = (A) => {
    const { align: e, gutterBottom: t, noWrap: r, paragraph: n, variant: o, classes: i } = A, a = {
      root: [
        "root",
        o,
        A.align !== "inherit" && `align${hA(e)}`,
        t && "gutterBottom",
        r && "noWrap",
        n && "paragraph"
      ]
    };
    return RA(a, Nh, i);
  };
  $h = dA("span", {
    name: "MuiTypography",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.root,
        t.variant && e[t.variant],
        t.align !== "inherit" && e[`align${hA(t.align)}`],
        t.noWrap && e.noWrap,
        t.gutterBottom && e.gutterBottom,
        t.paragraph && e.paragraph
      ];
    }
  })(GA(({ theme: A }) => {
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
        ...Object.entries(A.palette).filter(vt()).map(([e]) => ({
          props: {
            color: e
          },
          style: {
            color: (A.vars || A).palette[e].main
          }
        })),
        ...Object.entries(((_a2 = A.palette) == null ? void 0 : _a2.text) || {}).filter(([, e]) => typeof e == "string").map(([e]) => ({
          props: {
            color: `text${hA(e)}`
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
  Cl = {
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
  sU = w.forwardRef(function(e, t) {
    const { color: r, ...n } = DA({
      props: e,
      name: "MuiTypography"
    }), o = !Gh[r], i = _h({
      ...n,
      ...o && {
        color: r
      }
    }), { align: a = "inherit", className: s, component: l, gutterBottom: c = false, noWrap: u = false, paragraph: d = false, variant: g = "body1", variantMapping: B = Cl, ...p } = i, b = {
      ...i,
      align: a,
      color: r,
      className: s,
      component: l,
      gutterBottom: c,
      noWrap: u,
      paragraph: d,
      variant: g,
      variantMapping: B
    }, h = l || (d ? "p" : B[g] || Cl[g]) || "span", F = Vh(b);
    return N.jsx($h, {
      as: h,
      ref: t,
      className: pA(F.root, s),
      ...p,
      ownerState: b,
      style: {
        ...a !== "inherit" && {
          "--Typography-textAlign": a
        },
        ...p.style
      }
    });
  });
  function Wh(A) {
    return typeof A == "function" ? A() : A;
  }
  Xh = w.forwardRef(function(e, t) {
    const { children: r, container: n, disablePortal: o = false } = e, [i, a] = w.useState(null), s = he(w.isValidElement(r) ? sn(r) : null, t);
    if (rt(() => {
      o || a(Wh(n) || document.body);
    }, [
      n,
      o
    ]), rt(() => {
      if (i && !o) return qs(t, i), () => {
        qs(t, null);
      };
    }, [
      t,
      i,
      o
    ]), o) {
      if (w.isValidElement(r)) {
        const l = {
          ref: s
        };
        return w.cloneElement(r, l);
      }
      return r;
    }
    return i && Cs.createPortal(r, i);
  });
  function Cn(A) {
    return parseInt(A, 10) || 0;
  }
  const jh = {
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
  function Jh(A) {
    for (const e in A) return false;
    return true;
  }
  function ml(A) {
    return Jh(A) || A.outerHeightStyle === 0 && !A.overflowing;
  }
  const Yh = w.forwardRef(function(e, t) {
    const { onChange: r, maxRows: n, minRows: o = 1, style: i, value: a, ...s } = e, { current: l } = w.useRef(a != null), c = w.useRef(null), u = he(t, c), d = w.useRef(null), g = w.useRef(null), B = w.useCallback(() => {
      const m = c.current, Q = g.current;
      if (!m || !Q) return;
      const v = nt(m).getComputedStyle(m);
      if (v.width === "0px") return {
        outerHeightStyle: 0,
        overflowing: false
      };
      Q.style.width = v.width, Q.value = m.value || e.placeholder || "x", Q.value.slice(-1) === `
` && (Q.value += " ");
      const I = v.boxSizing, x = Cn(v.paddingBottom) + Cn(v.paddingTop), H = Cn(v.borderBottomWidth) + Cn(v.borderTopWidth), f = Q.scrollHeight;
      Q.value = "x";
      const T = Q.scrollHeight;
      let O = f;
      o && (O = Math.max(Number(o) * T, O)), n && (O = Math.min(Number(n) * T, O)), O = Math.max(O, T);
      const R = O + (I === "border-box" ? x + H : 0), V = Math.abs(O - f) <= 1;
      return {
        outerHeightStyle: R,
        overflowing: V
      };
    }, [
      n,
      o,
      e.placeholder
    ]), p = Rt(() => {
      const m = c.current, Q = B();
      if (!m || !Q || ml(Q)) return false;
      const E = Q.outerHeightStyle;
      return d.current != null && d.current !== E;
    }), b = w.useCallback(() => {
      const m = c.current, Q = B();
      if (!m || !Q || ml(Q)) return;
      const E = Q.outerHeightStyle;
      d.current !== E && (d.current = E, m.style.height = `${E}px`), m.style.overflow = Q.overflowing ? "hidden" : "";
    }, [
      B
    ]), h = w.useRef(-1);
    rt(() => {
      const m = Qu(b), Q = c == null ? void 0 : c.current;
      if (!Q) return;
      const E = nt(Q);
      E.addEventListener("resize", m);
      let v;
      return typeof ResizeObserver < "u" && (v = new ResizeObserver(() => {
        p() && (v.unobserve(Q), cancelAnimationFrame(h.current), b(), h.current = requestAnimationFrame(() => {
          v.observe(Q);
        }));
      }), v.observe(Q)), () => {
        m.clear(), cancelAnimationFrame(h.current), E.removeEventListener("resize", m), v && v.disconnect();
      };
    }, [
      B,
      b,
      p
    ]), rt(() => {
      b();
    });
    const F = (m) => {
      l || b(), r && r(m);
    };
    return N.jsxs(w.Fragment, {
      children: [
        N.jsx("textarea", {
          value: a,
          onChange: F,
          ref: u,
          rows: o,
          style: i,
          ...s
        }),
        N.jsx("textarea", {
          "aria-hidden": true,
          className: e.className,
          readOnly: true,
          ref: g,
          tabIndex: -1,
          style: {
            ...jh.shadow,
            ...i,
            paddingTop: 0,
            paddingBottom: 0
          }
        })
      ]
    });
  });
  ga = function(A) {
    return typeof A == "string";
  };
  fr = function({ props: A, states: e, muiFormControl: t }) {
    return e.reduce((r, n) => (r[n] = A[n], t && typeof A[n] > "u" && (r[n] = t[n]), r), {});
  };
  Qs = w.createContext(void 0);
  gr = function() {
    return w.useContext(Qs);
  };
  function vl(A) {
    return A != null && !(Array.isArray(A) && A.length === 0);
  }
  function so(A, e = false) {
    return A && (vl(A.value) && A.value !== "" || e && vl(A.defaultValue) && A.defaultValue !== "");
  }
  function zh(A) {
    return A.startAdornment;
  }
  function Zh(A) {
    return kA("MuiInputBase", A);
  }
  const sr = xA("MuiInputBase", [
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
  var Ql;
  let ri, ni, qh, oi, ii, yl;
  ri = (A, e) => {
    const { ownerState: t } = A;
    return [
      e.root,
      t.formControl && e.formControl,
      t.startAdornment && e.adornedStart,
      t.endAdornment && e.adornedEnd,
      t.error && e.error,
      t.size === "small" && e.sizeSmall,
      t.multiline && e.multiline,
      t.color && e[`color${hA(t.color)}`],
      t.fullWidth && e.fullWidth,
      t.hiddenLabel && e.hiddenLabel
    ];
  };
  ni = (A, e) => {
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
  qh = (A) => {
    const { classes: e, color: t, disabled: r, error: n, endAdornment: o, focused: i, formControl: a, fullWidth: s, hiddenLabel: l, multiline: c, readOnly: u, size: d, startAdornment: g, type: B } = A, p = {
      root: [
        "root",
        `color${hA(t)}`,
        r && "disabled",
        n && "error",
        s && "fullWidth",
        i && "focused",
        a && "formControl",
        d && d !== "medium" && `size${hA(d)}`,
        c && "multiline",
        g && "adornedStart",
        o && "adornedEnd",
        l && "hiddenLabel",
        u && "readOnly"
      ],
      input: [
        "input",
        r && "disabled",
        B === "search" && "inputTypeSearch",
        c && "inputMultiline",
        d === "small" && "inputSizeSmall",
        l && "inputHiddenLabel",
        g && "inputAdornedStart",
        o && "inputAdornedEnd",
        u && "readOnly"
      ]
    };
    return RA(p, Zh, e);
  };
  oi = dA("div", {
    name: "MuiInputBase",
    slot: "Root",
    overridesResolver: ri
  })(GA(({ theme: A }) => ({
    ...A.typography.body1,
    color: (A.vars || A).palette.text.primary,
    lineHeight: "1.4375em",
    boxSizing: "border-box",
    position: "relative",
    cursor: "text",
    display: "inline-flex",
    alignItems: "center",
    [`&.${sr.disabled}`]: {
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
  ii = dA("input", {
    name: "MuiInputBase",
    slot: "Input",
    overridesResolver: ni
  })(GA(({ theme: A }) => {
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
      [`label[data-shrink=false] + .${sr.formControl} &`]: {
        "&::-webkit-input-placeholder": r,
        "&::-moz-placeholder": r,
        "&::-ms-input-placeholder": r,
        "&:focus::-webkit-input-placeholder": n,
        "&:focus::-moz-placeholder": n,
        "&:focus::-ms-input-placeholder": n
      },
      [`&.${sr.disabled}`]: {
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
  yl = $p({
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
  ys = w.forwardRef(function(e, t) {
    const r = DA({
      props: e,
      name: "MuiInputBase"
    }), { "aria-describedby": n, autoComplete: o, autoFocus: i, className: a, color: s, components: l = {}, componentsProps: c = {}, defaultValue: u, disabled: d, disableInjectingGlobalStyles: g, endAdornment: B, error: p, fullWidth: b = false, id: h, inputComponent: F = "input", inputProps: m = {}, inputRef: Q, margin: E, maxRows: v, minRows: I, multiline: x = false, name: H, onBlur: f, onChange: T, onClick: O, onFocus: R, onKeyDown: V, onKeyUp: K, placeholder: D, readOnly: X, renderSuffix: nA, rows: M, size: j, slotProps: AA = {}, slots: rA = {}, startAdornment: L, type: $ = "text", value: _, ...Y } = r, uA = m.value != null ? m.value : _, { current: iA } = w.useRef(uA != null), eA = w.useRef(), J = w.useCallback((HA) => {
    }, []), oA = he(eA, Q, m.ref, J), [aA, C] = w.useState(false), U = gr(), y = fr({
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
    y.focused = U ? U.focused : aA, w.useEffect(() => {
      !U && d && aA && (C(false), f && f());
    }, [
      U,
      d,
      aA,
      f
    ]);
    const P = U && U.onFilled, W = U && U.onEmpty, G = w.useCallback((HA) => {
      so(HA) ? P && P() : W && W();
    }, [
      P,
      W
    ]);
    rt(() => {
      iA && G({
        value: uA
      });
    }, [
      uA,
      G,
      iA
    ]);
    const sA = (HA) => {
      R && R(HA), m.onFocus && m.onFocus(HA), U && U.onFocus ? U.onFocus(HA) : C(true);
    }, lA = (HA) => {
      f && f(HA), m.onBlur && m.onBlur(HA), U && U.onBlur ? U.onBlur(HA) : C(false);
    }, fA = (HA, ...Dt) => {
      if (!iA) {
        const pr = HA.target || eA.current;
        if (pr == null) throw new Error(et(1));
        G({
          value: pr.value
        });
      }
      m.onChange && m.onChange(HA, ...Dt), T && T(HA, ...Dt);
    };
    w.useEffect(() => {
      G(eA.current);
    }, []);
    const q = (HA) => {
      eA.current && HA.currentTarget === HA.target && eA.current.focus(), O && O(HA);
    };
    let qA = F, gA = m;
    x && qA === "input" && (M ? gA = {
      type: void 0,
      minRows: M,
      maxRows: M,
      ...gA
    } : gA = {
      type: void 0,
      maxRows: v,
      minRows: I,
      ...gA
    }, qA = Yh);
    const MA = (HA) => {
      G(HA.animationName === "mui-auto-fill-cancel" ? eA.current : {
        value: "x"
      });
    };
    w.useEffect(() => {
      U && U.setAdornedStart(!!L);
    }, [
      U,
      L
    ]);
    const WA = {
      ...r,
      color: y.color || "primary",
      disabled: y.disabled,
      endAdornment: B,
      error: y.error,
      focused: y.focused,
      formControl: U,
      fullWidth: b,
      hiddenLabel: y.hiddenLabel,
      multiline: x,
      size: y.size,
      startAdornment: L,
      type: $
    }, ie = qh(WA), JA = rA.root || l.Root || oi, at = AA.root || c.root || {}, yt = rA.input || l.Input || ii;
    return gA = {
      ...gA,
      ...AA.input ?? c.input
    }, N.jsxs(w.Fragment, {
      children: [
        !g && typeof yl == "function" && (Ql || (Ql = N.jsx(yl, {}))),
        N.jsxs(JA, {
          ...at,
          ref: t,
          onClick: q,
          ...Y,
          ...!ga(JA) && {
            ownerState: {
              ...WA,
              ...at.ownerState
            }
          },
          className: pA(ie.root, at.className, a, X && "MuiInputBase-readOnly"),
          children: [
            L,
            N.jsx(Qs.Provider, {
              value: null,
              children: N.jsx(yt, {
                "aria-invalid": y.error,
                "aria-describedby": n,
                autoComplete: o,
                autoFocus: i,
                defaultValue: u,
                disabled: y.disabled,
                id: h,
                onAnimationStart: MA,
                name: H,
                placeholder: D,
                readOnly: X,
                required: y.required,
                rows: M,
                value: uA,
                onKeyDown: V,
                onKeyUp: K,
                type: $,
                ...gA,
                ...!ga(yt) && {
                  as: qA,
                  ownerState: {
                    ...WA,
                    ...gA.ownerState
                  }
                },
                ref: oA,
                className: pA(ie.input, gA.className, X && "MuiInputBase-readOnly"),
                onBlur: lA,
                onChange: fA,
                onFocus: sA
              })
            }),
            B,
            nA ? nA({
              ...y,
              startAdornment: L
            }) : null
          ]
        })
      ]
    });
  });
  function A0(A) {
    return kA("MuiInput", A);
  }
  const Cr = {
    ...sr,
    ...xA("MuiInput", [
      "root",
      "underline",
      "input"
    ])
  };
  function e0(A) {
    return kA("MuiOutlinedInput", A);
  }
  const Re = {
    ...sr,
    ...xA("MuiOutlinedInput", [
      "root",
      "notchedOutline",
      "input"
    ])
  };
  function t0(A) {
    return kA("MuiFilledInput", A);
  }
  let bt, r0, n0;
  bt = {
    ...sr,
    ...xA("MuiFilledInput", [
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
  r0 = Yp(N.jsx("path", {
    d: "M7 10l5 5 5-5z"
  }), "ArrowDropDown");
  n0 = {
    entering: {
      opacity: 1
    },
    entered: {
      opacity: 1
    }
  };
  o0 = w.forwardRef(function(e, t) {
    const r = ws(), n = {
      enter: r.transitions.duration.enteringScreen,
      exit: r.transitions.duration.leavingScreen
    }, { addEndListener: o, appear: i = true, children: a, easing: s, in: l, onEnter: c, onEntered: u, onEntering: d, onExit: g, onExited: B, onExiting: p, style: b, timeout: h = n, TransitionComponent: F = We, ...m } = e, Q = w.useRef(null), E = he(Q, sn(a), t), v = (V) => (K) => {
      if (V) {
        const D = Q.current;
        K === void 0 ? V(D) : V(D, K);
      }
    }, I = v(d), x = v((V, K) => {
      Vu(V);
      const D = io({
        style: b,
        timeout: h,
        easing: s
      }, {
        mode: "enter"
      });
      V.style.webkitTransition = r.transitions.create("opacity", D), V.style.transition = r.transitions.create("opacity", D), c && c(V, K);
    }), H = v(u), f = v(p), T = v((V) => {
      const K = io({
        style: b,
        timeout: h,
        easing: s
      }, {
        mode: "exit"
      });
      V.style.webkitTransition = r.transitions.create("opacity", K), V.style.transition = r.transitions.create("opacity", K), g && g(V);
    }), O = v(B), R = (V) => {
      o && o(Q.current, V);
    };
    return N.jsx(F, {
      appear: i,
      in: l,
      nodeRef: Q,
      onEnter: x,
      onEntered: H,
      onEntering: I,
      onExit: T,
      onExited: O,
      onExiting: f,
      addEndListener: R,
      timeout: h,
      ...m,
      children: (V, { ownerState: K, ...D }) => w.cloneElement(a, {
        style: {
          opacity: 0,
          visibility: V === "exited" && !l ? "hidden" : void 0,
          ...n0[V],
          ...b,
          ...a.props.style
        },
        ref: E,
        ...D
      })
    });
  });
  function i0(A) {
    return kA("MuiBackdrop", A);
  }
  xA("MuiBackdrop", [
    "root",
    "invisible"
  ]);
  let a0, s0, c0, u0;
  a0 = (A) => {
    const { classes: e, invisible: t } = A;
    return RA({
      root: [
        "root",
        t && "invisible"
      ]
    }, i0, e);
  };
  s0 = dA("div", {
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
  l0 = w.forwardRef(function(e, t) {
    const r = DA({
      props: e,
      name: "MuiBackdrop"
    }), { children: n, className: o, component: i = "div", invisible: a = false, open: s, components: l = {}, componentsProps: c = {}, slotProps: u = {}, slots: d = {}, TransitionComponent: g, transitionDuration: B, ...p } = r, b = {
      ...r,
      component: i,
      invisible: a
    }, h = a0(b), F = {
      transition: g,
      root: l.Root,
      ...d
    }, m = {
      ...c,
      ...u
    }, Q = {
      slots: F,
      slotProps: m
    }, [E, v] = ce("root", {
      elementType: s0,
      externalForwardedProps: Q,
      className: pA(h.root, o),
      ownerState: b
    }), [I, x] = ce("transition", {
      elementType: o0,
      externalForwardedProps: Q,
      ownerState: b
    });
    return N.jsx(I, {
      in: s,
      timeout: B,
      ...p,
      ...x,
      children: N.jsx(E, {
        "aria-hidden": true,
        ...v,
        classes: h,
        ref: t,
        children: n
      })
    });
  });
  c0 = xA("MuiBox", [
    "root"
  ]);
  u0 = ps();
  bl = vB({
    themeId: _e,
    defaultTheme: u0,
    defaultClassName: c0.root,
    generateClassName: hu.generate
  });
  function d0(A) {
    const e = Te(A);
    return e.body === A ? nt(A).innerWidth > e.documentElement.clientWidth : A.scrollHeight > A.clientHeight;
  }
  function Or(A, e) {
    e ? A.setAttribute("aria-hidden", "true") : A.removeAttribute("aria-hidden");
  }
  function Fl(A) {
    return parseInt(nt(A).getComputedStyle(A).paddingRight, 10) || 0;
  }
  function f0(A) {
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
  function Ul(A, e, t, r, n) {
    const o = [
      e,
      t,
      ...r
    ];
    [].forEach.call(A.children, (i) => {
      const a = !o.includes(i), s = !f0(i);
      a && s && Or(i, n);
    });
  }
  function Fi(A, e) {
    let t = -1;
    return A.some((r, n) => e(r) ? (t = n, true) : false), t;
  }
  function g0(A, e) {
    const t = [], r = A.container;
    if (!e.disableScrollLock) {
      if (d0(r)) {
        const i = Fu(nt(r));
        t.push({
          value: r.style.paddingRight,
          property: "padding-right",
          el: r
        }), r.style.paddingRight = `${Fl(r) + i}px`;
        const a = Te(r).querySelectorAll(".mui-fixed");
        [].forEach.call(a, (s) => {
          t.push({
            value: s.style.paddingRight,
            property: "padding-right",
            el: s
          }), s.style.paddingRight = `${Fl(s) + i}px`;
        });
      }
      let o;
      if (r.parentNode instanceof DocumentFragment) o = Te(r).body;
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
  function B0(A) {
    const e = [];
    return [].forEach.call(A.children, (t) => {
      t.getAttribute("aria-hidden") === "true" && e.push(t);
    }), e;
  }
  class p0 {
    constructor() {
      this.modals = [], this.containers = [];
    }
    add(e, t) {
      let r = this.modals.indexOf(e);
      if (r !== -1) return r;
      r = this.modals.length, this.modals.push(e), e.modalRef && Or(e.modalRef, false);
      const n = B0(t);
      Ul(t, e.mount, e.modalRef, n, true);
      const o = Fi(this.containers, (i) => i.container === t);
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
      const r = Fi(this.containers, (o) => o.modals.includes(e)), n = this.containers[r];
      n.restore || (n.restore = g0(n, t));
    }
    remove(e, t = true) {
      const r = this.modals.indexOf(e);
      if (r === -1) return r;
      const n = Fi(this.containers, (i) => i.modals.includes(e)), o = this.containers[n];
      if (o.modals.splice(o.modals.indexOf(e), 1), this.modals.splice(r, 1), o.modals.length === 0) o.restore && o.restore(), e.modalRef && Or(e.modalRef, t), Ul(o.container, e.mount, e.modalRef, o.hiddenSiblings, false), this.containers.splice(n, 1);
      else {
        const i = o.modals[o.modals.length - 1];
        i.modalRef && Or(i.modalRef, false);
      }
      return r;
    }
    isTopModal(e) {
      return this.modals.length > 0 && this.modals[this.modals.length - 1] === e;
    }
  }
  const h0 = [
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
  function w0(A) {
    const e = parseInt(A.getAttribute("tabindex") || "", 10);
    return Number.isNaN(e) ? A.contentEditable === "true" || (A.nodeName === "AUDIO" || A.nodeName === "VIDEO" || A.nodeName === "DETAILS") && A.getAttribute("tabindex") === null ? 0 : A.tabIndex : e;
  }
  function C0(A) {
    if (A.tagName !== "INPUT" || A.type !== "radio" || !A.name) return false;
    const e = (r) => A.ownerDocument.querySelector(`input[type="radio"]${r}`);
    let t = e(`[name="${A.name}"]:checked`);
    return t || (t = e(`[name="${A.name}"]`)), t !== A;
  }
  function m0(A) {
    return !(A.disabled || A.tagName === "INPUT" && A.type === "hidden" || C0(A));
  }
  function v0(A) {
    const e = [], t = [];
    return Array.from(A.querySelectorAll(h0)).forEach((r, n) => {
      const o = w0(r);
      o === -1 || !m0(r) || (o === 0 ? e.push(r) : t.push({
        documentOrder: n,
        tabIndex: o,
        node: r
      }));
    }), t.sort((r, n) => r.tabIndex === n.tabIndex ? r.documentOrder - n.documentOrder : r.tabIndex - n.tabIndex).map((r) => r.node).concat(e);
  }
  function Q0() {
    return true;
  }
  function y0(A) {
    const { children: e, disableAutoFocus: t = false, disableEnforceFocus: r = false, disableRestoreFocus: n = false, getTabbable: o = v0, isEnabled: i = Q0, open: a } = A, s = w.useRef(false), l = w.useRef(null), c = w.useRef(null), u = w.useRef(null), d = w.useRef(null), g = w.useRef(false), B = w.useRef(null), p = he(sn(e), B), b = w.useRef(null);
    w.useEffect(() => {
      !a || !B.current || (g.current = !t);
    }, [
      t,
      a
    ]), w.useEffect(() => {
      if (!a || !B.current) return;
      const m = Te(B.current);
      return B.current.contains(m.activeElement) || (B.current.hasAttribute("tabIndex") || B.current.setAttribute("tabIndex", "-1"), g.current && B.current.focus()), () => {
        n || (u.current && u.current.focus && (s.current = true, u.current.focus()), u.current = null);
      };
    }, [
      a
    ]), w.useEffect(() => {
      if (!a || !B.current) return;
      const m = Te(B.current), Q = (I) => {
        b.current = I, !(r || !i() || I.key !== "Tab") && m.activeElement === B.current && I.shiftKey && (s.current = true, c.current && c.current.focus());
      }, E = () => {
        var _a2, _b2;
        const I = B.current;
        if (I === null) return;
        if (!m.hasFocus() || !i() || s.current) {
          s.current = false;
          return;
        }
        if (I.contains(m.activeElement) || r && m.activeElement !== l.current && m.activeElement !== c.current) return;
        if (m.activeElement !== d.current) d.current = null;
        else if (d.current !== null) return;
        if (!g.current) return;
        let x = [];
        if ((m.activeElement === l.current || m.activeElement === c.current) && (x = o(B.current)), x.length > 0) {
          const H = !!(((_a2 = b.current) == null ? void 0 : _a2.shiftKey) && ((_b2 = b.current) == null ? void 0 : _b2.key) === "Tab"), f = x[0], T = x[x.length - 1];
          typeof f != "string" && typeof T != "string" && (H ? T.focus() : f.focus());
        } else I.focus();
      };
      m.addEventListener("focusin", E), m.addEventListener("keydown", Q, true);
      const v = setInterval(() => {
        m.activeElement && m.activeElement.tagName === "BODY" && E();
      }, 50);
      return () => {
        clearInterval(v), m.removeEventListener("focusin", E), m.removeEventListener("keydown", Q, true);
      };
    }, [
      t,
      r,
      n,
      i,
      a,
      o
    ]);
    const h = (m) => {
      u.current === null && (u.current = m.relatedTarget), g.current = true, d.current = m.target;
      const Q = e.props.onFocus;
      Q && Q(m);
    }, F = (m) => {
      u.current === null && (u.current = m.relatedTarget), g.current = true;
    };
    return N.jsxs(w.Fragment, {
      children: [
        N.jsx("div", {
          tabIndex: a ? 0 : -1,
          onFocus: F,
          ref: l,
          "data-testid": "sentinelStart"
        }),
        w.cloneElement(e, {
          ref: p,
          onFocus: h
        }),
        N.jsx("div", {
          tabIndex: a ? 0 : -1,
          onFocus: F,
          ref: c,
          "data-testid": "sentinelEnd"
        })
      ]
    });
  }
  function b0(A) {
    return typeof A == "function" ? A() : A;
  }
  function F0(A) {
    return A ? A.props.hasOwnProperty("in") : false;
  }
  const El = () => {
  }, mn = new p0();
  function U0(A) {
    const { container: e, disableEscapeKeyDown: t = false, disableScrollLock: r = false, closeAfterTransition: n = false, onTransitionEnter: o, onTransitionExited: i, children: a, onClose: s, open: l, rootRef: c } = A, u = w.useRef({}), d = w.useRef(null), g = w.useRef(null), B = he(g, c), [p, b] = w.useState(!l), h = F0(a);
    let F = true;
    (A["aria-hidden"] === "false" || A["aria-hidden"] === false) && (F = false);
    const m = () => Te(d.current), Q = () => (u.current.modalRef = g.current, u.current.mount = d.current, u.current), E = () => {
      mn.mount(Q(), {
        disableScrollLock: r
      }), g.current && (g.current.scrollTop = 0);
    }, v = Rt(() => {
      const K = b0(e) || m().body;
      mn.add(Q(), K), g.current && E();
    }), I = () => mn.isTopModal(Q()), x = Rt((K) => {
      d.current = K, K && (l && I() ? E() : g.current && Or(g.current, F));
    }), H = w.useCallback(() => {
      mn.remove(Q(), F);
    }, [
      F
    ]);
    w.useEffect(() => () => {
      H();
    }, [
      H
    ]), w.useEffect(() => {
      l ? v() : (!h || !n) && H();
    }, [
      l,
      H,
      h,
      n,
      v
    ]);
    const f = (K) => (D) => {
      var _a2;
      (_a2 = K.onKeyDown) == null ? void 0 : _a2.call(K, D), !(D.key !== "Escape" || D.which === 229 || !I()) && (t || (D.stopPropagation(), s && s(D, "escapeKeyDown")));
    }, T = (K) => (D) => {
      var _a2;
      (_a2 = K.onClick) == null ? void 0 : _a2.call(K, D), D.target === D.currentTarget && s && s(D, "backdropClick");
    };
    return {
      getRootProps: (K = {}) => {
        const D = Eu(A);
        delete D.onTransitionEnter, delete D.onTransitionExited;
        const X = {
          ...D,
          ...K
        };
        return {
          role: "presentation",
          ...X,
          onKeyDown: f(X),
          ref: B
        };
      },
      getBackdropProps: (K = {}) => {
        const D = K;
        return {
          "aria-hidden": true,
          ...D,
          onClick: T(D),
          open: l
        };
      },
      getTransitionProps: () => {
        const K = () => {
          b(false), o && o();
        }, D = () => {
          b(true), i && i(), n && H();
        };
        return {
          onEnter: Zs(K, (a == null ? void 0 : a.props.onEnter) ?? El),
          onExited: Zs(D, (a == null ? void 0 : a.props.onExited) ?? El)
        };
      },
      rootRef: B,
      portalRef: x,
      isTopModal: I,
      exited: p,
      hasTransition: h
    };
  }
  function E0(A) {
    return kA("MuiModal", A);
  }
  xA("MuiModal", [
    "root",
    "hidden",
    "backdrop"
  ]);
  let S0, I0, x0;
  S0 = (A) => {
    const { open: e, exited: t, classes: r } = A;
    return RA({
      root: [
        "root",
        !e && t && "hidden"
      ],
      backdrop: [
        "backdrop"
      ]
    }, E0, r);
  };
  I0 = dA("div", {
    name: "MuiModal",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.root,
        !t.open && t.exited && e.hidden
      ];
    }
  })(GA(({ theme: A }) => ({
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
  x0 = dA(l0, {
    name: "MuiModal",
    slot: "Backdrop",
    overridesResolver: (A, e) => e.backdrop
  })({
    zIndex: -1
  });
  H0 = w.forwardRef(function(e, t) {
    const r = DA({
      name: "MuiModal",
      props: e
    }), { BackdropComponent: n = x0, BackdropProps: o, classes: i, className: a, closeAfterTransition: s = false, children: l, container: c, component: u, components: d = {}, componentsProps: g = {}, disableAutoFocus: B = false, disableEnforceFocus: p = false, disableEscapeKeyDown: b = false, disablePortal: h = false, disableRestoreFocus: F = false, disableScrollLock: m = false, hideBackdrop: Q = false, keepMounted: E = false, onBackdropClick: v, onClose: I, onTransitionEnter: x, onTransitionExited: H, open: f, slotProps: T = {}, slots: O = {}, theme: R, ...V } = r, K = {
      ...r,
      closeAfterTransition: s,
      disableAutoFocus: B,
      disableEnforceFocus: p,
      disableEscapeKeyDown: b,
      disablePortal: h,
      disableRestoreFocus: F,
      disableScrollLock: m,
      hideBackdrop: Q,
      keepMounted: E
    }, { getRootProps: D, getBackdropProps: X, getTransitionProps: nA, portalRef: M, isTopModal: j, exited: AA, hasTransition: rA } = U0({
      ...K,
      rootRef: t
    }), L = {
      ...K,
      exited: AA
    }, $ = S0(L), _ = {};
    if (l.props.tabIndex === void 0 && (_.tabIndex = "-1"), rA) {
      const { onEnter: oA, onExited: aA } = nA();
      _.onEnter = oA, _.onExited = aA;
    }
    const Y = {
      slots: {
        root: d.Root,
        backdrop: d.Backdrop,
        ...O
      },
      slotProps: {
        ...g,
        ...T
      }
    }, [uA, iA] = ce("root", {
      ref: t,
      elementType: I0,
      externalForwardedProps: {
        ...Y,
        ...V,
        component: u
      },
      getSlotProps: D,
      ownerState: L,
      className: pA(a, $ == null ? void 0 : $.root, !L.open && L.exited && ($ == null ? void 0 : $.hidden))
    }), [eA, J] = ce("backdrop", {
      ref: o == null ? void 0 : o.ref,
      elementType: n,
      externalForwardedProps: Y,
      shouldForwardComponentProp: true,
      additionalProps: o,
      getSlotProps: (oA) => X({
        ...oA,
        onClick: (aA) => {
          v && v(aA), (oA == null ? void 0 : oA.onClick) && oA.onClick(aA);
        }
      }),
      className: pA(o == null ? void 0 : o.className, $ == null ? void 0 : $.backdrop),
      ownerState: L
    });
    return !E && !f && (!rA || AA) ? null : N.jsx(Xh, {
      ref: M,
      container: c,
      disablePortal: h,
      children: N.jsxs(uA, {
        ...iA,
        children: [
          !Q && n ? N.jsx(eA, {
            ...J
          }) : null,
          N.jsx(y0, {
            disableEnforceFocus: p,
            disableAutoFocus: B,
            disableRestoreFocus: F,
            isEnabled: j,
            open: f,
            children: w.cloneElement(l, _)
          })
        ]
      })
    });
  });
  lU = function(A) {
    return kA("MuiDivider", A);
  };
  let T0, L0, k0, bs;
  cU = xA("MuiDivider", [
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
  T0 = (A) => {
    const { classes: e, disableUnderline: t, startAdornment: r, endAdornment: n, size: o, hiddenLabel: i, multiline: a } = A, s = {
      root: [
        "root",
        !t && "underline",
        r && "adornedStart",
        n && "adornedEnd",
        o === "small" && `size${hA(o)}`,
        i && "hiddenLabel",
        a && "multiline"
      ],
      input: [
        "input"
      ]
    }, l = RA(s, t0, e);
    return {
      ...e,
      ...l
    };
  };
  L0 = dA(oi, {
    shouldForwardProp: (A) => $e(A) || A === "classes",
    name: "MuiFilledInput",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        ...ri(A, e),
        !t.disableUnderline && e.underline
      ];
    }
  })(GA(({ theme: A }) => {
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
      [`&.${bt.focused}`]: {
        backgroundColor: A.vars ? A.vars.palette.FilledInput.bg : r
      },
      [`&.${bt.disabled}`]: {
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
            [`&.${bt.focused}:after`]: {
              transform: "scaleX(1) translateX(0)"
            },
            [`&.${bt.error}`]: {
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
            [`&:hover:not(.${bt.disabled}, .${bt.error}):before`]: {
              borderBottom: `1px solid ${(A.vars || A).palette.text.primary}`
            },
            [`&.${bt.disabled}:before`]: {
              borderBottomStyle: "dotted"
            }
          }
        },
        ...Object.entries(A.palette).filter(vt()).map(([i]) => {
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
  }));
  k0 = dA(ii, {
    name: "MuiFilledInput",
    slot: "Input",
    overridesResolver: ni
  })(GA(({ theme: A }) => ({
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
  })));
  bs = w.forwardRef(function(e, t) {
    const r = DA({
      props: e,
      name: "MuiFilledInput"
    }), { disableUnderline: n = false, components: o = {}, componentsProps: i, fullWidth: a = false, hiddenLabel: s, inputComponent: l = "input", multiline: c = false, slotProps: u, slots: d = {}, type: g = "text", ...B } = r, p = {
      ...r,
      disableUnderline: n,
      fullWidth: a,
      inputComponent: l,
      multiline: c,
      type: g
    }, b = T0(r), h = {
      root: {
        ownerState: p
      },
      input: {
        ownerState: p
      }
    }, F = u ?? i ? oe(h, u ?? i) : h, m = d.root ?? o.Root ?? L0, Q = d.input ?? o.Input ?? k0;
    return N.jsx(ys, {
      slots: {
        root: m,
        input: Q
      },
      slotProps: F,
      fullWidth: a,
      inputComponent: l,
      multiline: c,
      ref: t,
      type: g,
      ...B,
      classes: b
    });
  });
  bs.muiName = "Input";
  function R0(A) {
    return kA("MuiFormControl", A);
  }
  xA("MuiFormControl", [
    "root",
    "marginNone",
    "marginNormal",
    "marginDense",
    "fullWidth",
    "disabled"
  ]);
  let K0, O0;
  K0 = (A) => {
    const { classes: e, margin: t, fullWidth: r } = A, n = {
      root: [
        "root",
        t !== "none" && `margin${hA(t)}`,
        r && "fullWidth"
      ]
    };
    return RA(n, R0, e);
  };
  O0 = dA("div", {
    name: "MuiFormControl",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.root,
        e[`margin${hA(t.margin)}`],
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
  D0 = w.forwardRef(function(e, t) {
    const r = DA({
      props: e,
      name: "MuiFormControl"
    }), { children: n, className: o, color: i = "primary", component: a = "div", disabled: s = false, error: l = false, focused: c, fullWidth: u = false, hiddenLabel: d = false, margin: g = "none", required: B = false, size: p = "medium", variant: b = "outlined", ...h } = r, F = {
      ...r,
      color: i,
      component: a,
      disabled: s,
      error: l,
      fullWidth: u,
      hiddenLabel: d,
      margin: g,
      required: B,
      size: p,
      variant: b
    }, m = K0(F), [Q, E] = w.useState(() => {
      let K = false;
      return n && w.Children.forEach(n, (D) => {
        if (!vi(D, [
          "Input",
          "Select"
        ])) return;
        const X = vi(D, [
          "Select"
        ]) ? D.props.input : D;
        X && zh(X.props) && (K = true);
      }), K;
    }), [v, I] = w.useState(() => {
      let K = false;
      return n && w.Children.forEach(n, (D) => {
        vi(D, [
          "Input",
          "Select"
        ]) && (so(D.props, true) || so(D.props.inputProps, true)) && (K = true);
      }), K;
    }), [x, H] = w.useState(false);
    s && x && H(false);
    const f = c !== void 0 && !s ? c : x;
    let T;
    w.useRef(false);
    const O = w.useCallback(() => {
      I(true);
    }, []), R = w.useCallback(() => {
      I(false);
    }, []), V = w.useMemo(() => ({
      adornedStart: Q,
      setAdornedStart: E,
      color: i,
      disabled: s,
      error: l,
      filled: v,
      focused: f,
      fullWidth: u,
      hiddenLabel: d,
      size: p,
      onBlur: () => {
        H(false);
      },
      onFocus: () => {
        H(true);
      },
      onEmpty: R,
      onFilled: O,
      registerEffect: T,
      required: B,
      variant: b
    }), [
      Q,
      i,
      s,
      l,
      v,
      f,
      u,
      d,
      T,
      R,
      O,
      B,
      p,
      b
    ]);
    return N.jsx(Qs.Provider, {
      value: V,
      children: N.jsx(O0, {
        as: a,
        ownerState: F,
        className: pA(m.root, o),
        ref: t,
        ...h,
        children: n
      })
    });
  });
  function M0(A) {
    return kA("MuiFormHelperText", A);
  }
  const Sl = xA("MuiFormHelperText", [
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
  var Il;
  const P0 = (A) => {
    const { classes: e, contained: t, size: r, disabled: n, error: o, filled: i, focused: a, required: s } = A, l = {
      root: [
        "root",
        n && "disabled",
        o && "error",
        r && `size${hA(r)}`,
        t && "contained",
        a && "focused",
        i && "filled",
        s && "required"
      ]
    };
    return RA(l, M0, e);
  }, N0 = dA("p", {
    name: "MuiFormHelperText",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.root,
        t.size && e[`size${hA(t.size)}`],
        t.contained && e.contained,
        t.filled && e.filled
      ];
    }
  })(GA(({ theme: A }) => ({
    color: (A.vars || A).palette.text.secondary,
    ...A.typography.caption,
    textAlign: "left",
    marginTop: 3,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    [`&.${Sl.disabled}`]: {
      color: (A.vars || A).palette.text.disabled
    },
    [`&.${Sl.error}`]: {
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
  }))), G0 = w.forwardRef(function(e, t) {
    const r = DA({
      props: e,
      name: "MuiFormHelperText"
    }), { children: n, className: o, component: i = "p", disabled: a, error: s, filled: l, focused: c, margin: u, required: d, variant: g, ...B } = r, p = gr(), b = fr({
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
    }), h = {
      ...r,
      component: i,
      contained: b.variant === "filled" || b.variant === "outlined",
      variant: b.variant,
      size: b.size,
      disabled: b.disabled,
      error: b.error,
      filled: b.filled,
      focused: b.focused,
      required: b.required
    };
    delete h.ownerState;
    const F = P0(h);
    return N.jsx(N0, {
      as: i,
      className: pA(F.root, o),
      ref: t,
      ...B,
      ownerState: h,
      children: n === " " ? Il || (Il = N.jsx("span", {
        className: "notranslate",
        "aria-hidden": true,
        children: "\u200B"
      })) : n
    });
  });
  function _0(A) {
    return kA("MuiFormLabel", A);
  }
  const Dr = xA("MuiFormLabel", [
    "root",
    "colorSecondary",
    "focused",
    "disabled",
    "error",
    "filled",
    "required",
    "asterisk"
  ]), V0 = (A) => {
    const { classes: e, color: t, focused: r, disabled: n, error: o, filled: i, required: a } = A, s = {
      root: [
        "root",
        `color${hA(t)}`,
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
    return RA(s, _0, e);
  }, $0 = dA("label", {
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
  })(GA(({ theme: A }) => ({
    color: (A.vars || A).palette.text.secondary,
    ...A.typography.body1,
    lineHeight: "1.4375em",
    padding: 0,
    position: "relative",
    variants: [
      ...Object.entries(A.palette).filter(vt()).map(([e]) => ({
        props: {
          color: e
        },
        style: {
          [`&.${Dr.focused}`]: {
            color: (A.vars || A).palette[e].main
          }
        }
      })),
      {
        props: {},
        style: {
          [`&.${Dr.disabled}`]: {
            color: (A.vars || A).palette.text.disabled
          },
          [`&.${Dr.error}`]: {
            color: (A.vars || A).palette.error.main
          }
        }
      }
    ]
  }))), W0 = dA("span", {
    name: "MuiFormLabel",
    slot: "Asterisk",
    overridesResolver: (A, e) => e.asterisk
  })(GA(({ theme: A }) => ({
    [`&.${Dr.error}`]: {
      color: (A.vars || A).palette.error.main
    }
  }))), X0 = w.forwardRef(function(e, t) {
    const r = DA({
      props: e,
      name: "MuiFormLabel"
    }), { children: n, className: o, color: i, component: a = "label", disabled: s, error: l, filled: c, focused: u, required: d, ...g } = r, B = gr(), p = fr({
      props: r,
      muiFormControl: B,
      states: [
        "color",
        "required",
        "focused",
        "disabled",
        "error",
        "filled"
      ]
    }), b = {
      ...r,
      color: p.color || "primary",
      component: a,
      disabled: p.disabled,
      error: p.error,
      filled: p.filled,
      focused: p.focused,
      required: p.required
    }, h = V0(b);
    return N.jsxs($0, {
      as: a,
      ownerState: b,
      className: pA(h.root, o),
      ref: t,
      ...g,
      children: [
        n,
        p.required && N.jsxs(W0, {
          ownerState: b,
          "aria-hidden": true,
          className: h.asterisk,
          children: [
            "\u2009",
            "*"
          ]
        })
      ]
    });
  });
  function Ba(A) {
    return `scale(${A}, ${A ** 2})`;
  }
  let j0, Ui;
  j0 = {
    entering: {
      opacity: 1,
      transform: Ba(1)
    },
    entered: {
      opacity: 1,
      transform: "none"
    }
  };
  Ui = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent);
  pa = w.forwardRef(function(e, t) {
    const { addEndListener: r, appear: n = true, children: o, easing: i, in: a, onEnter: s, onEntered: l, onEntering: c, onExit: u, onExited: d, onExiting: g, style: B, timeout: p = "auto", TransitionComponent: b = We, ...h } = e, F = bu(), m = w.useRef(), Q = ws(), E = w.useRef(null), v = he(E, sn(o), t), I = (K) => (D) => {
      if (K) {
        const X = E.current;
        D === void 0 ? K(X) : K(X, D);
      }
    }, x = I(c), H = I((K, D) => {
      Vu(K);
      const { duration: X, delay: nA, easing: M } = io({
        style: B,
        timeout: p,
        easing: i
      }, {
        mode: "enter"
      });
      let j;
      p === "auto" ? (j = Q.transitions.getAutoHeightDuration(K.clientHeight), m.current = j) : j = X, K.style.transition = [
        Q.transitions.create("opacity", {
          duration: j,
          delay: nA
        }),
        Q.transitions.create("transform", {
          duration: Ui ? j : j * 0.666,
          delay: nA,
          easing: M
        })
      ].join(","), s && s(K, D);
    }), f = I(l), T = I(g), O = I((K) => {
      const { duration: D, delay: X, easing: nA } = io({
        style: B,
        timeout: p,
        easing: i
      }, {
        mode: "exit"
      });
      let M;
      p === "auto" ? (M = Q.transitions.getAutoHeightDuration(K.clientHeight), m.current = M) : M = D, K.style.transition = [
        Q.transitions.create("opacity", {
          duration: M,
          delay: X
        }),
        Q.transitions.create("transform", {
          duration: Ui ? M : M * 0.666,
          delay: Ui ? X : X || M * 0.333,
          easing: nA
        })
      ].join(","), K.style.opacity = 0, K.style.transform = Ba(0.75), u && u(K);
    }), R = I(d), V = (K) => {
      p === "auto" && F.start(m.current || 0, K), r && r(E.current, K);
    };
    return N.jsx(b, {
      appear: n,
      in: a,
      nodeRef: E,
      onEnter: H,
      onEntered: f,
      onEntering: x,
      onExit: O,
      onExited: R,
      onExiting: T,
      addEndListener: V,
      timeout: p === "auto" ? null : p,
      ...h,
      children: (K, { ownerState: D, ...X }) => w.cloneElement(o, {
        style: {
          opacity: 0,
          transform: Ba(0.75),
          visibility: K === "exited" && !a ? "hidden" : void 0,
          ...j0[K],
          ...B,
          ...o.props.style
        },
        ref: v,
        ...X
      })
    });
  });
  pa && (pa.muiSupportAuto = true);
  const J0 = (A) => {
    const { classes: e, disableUnderline: t } = A, n = RA({
      root: [
        "root",
        !t && "underline"
      ],
      input: [
        "input"
      ]
    }, A0, e);
    return {
      ...e,
      ...n
    };
  }, Y0 = dA(oi, {
    shouldForwardProp: (A) => $e(A) || A === "classes",
    name: "MuiInput",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        ...ri(A, e),
        !t.disableUnderline && e.underline
      ];
    }
  })(GA(({ theme: A }) => {
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
            [`&.${Cr.focused}:after`]: {
              transform: "scaleX(1) translateX(0)"
            },
            [`&.${Cr.error}`]: {
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
            [`&:hover:not(.${Cr.disabled}, .${Cr.error}):before`]: {
              borderBottom: `2px solid ${(A.vars || A).palette.text.primary}`,
              "@media (hover: none)": {
                borderBottom: `1px solid ${t}`
              }
            },
            [`&.${Cr.disabled}:before`]: {
              borderBottomStyle: "dotted"
            }
          }
        },
        ...Object.entries(A.palette).filter(vt()).map(([r]) => ({
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
  })), z0 = dA(ii, {
    name: "MuiInput",
    slot: "Input",
    overridesResolver: ni
  })({}), Fs = w.forwardRef(function(e, t) {
    const r = DA({
      props: e,
      name: "MuiInput"
    }), { disableUnderline: n = false, components: o = {}, componentsProps: i, fullWidth: a = false, inputComponent: s = "input", multiline: l = false, slotProps: c, slots: u = {}, type: d = "text", ...g } = r, B = J0(r), b = {
      root: {
        ownerState: {
          disableUnderline: n
        }
      }
    }, h = c ?? i ? oe(c ?? i, b) : b, F = u.root ?? o.Root ?? Y0, m = u.input ?? o.Input ?? z0;
    return N.jsx(ys, {
      slots: {
        root: F,
        input: m
      },
      slotProps: h,
      fullWidth: a,
      inputComponent: s,
      multiline: l,
      ref: t,
      type: d,
      ...g,
      classes: B
    });
  });
  Fs.muiName = "Input";
  function Z0(A) {
    return kA("MuiInputLabel", A);
  }
  xA("MuiInputLabel", [
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
  let q0, Aw;
  q0 = (A) => {
    const { classes: e, formControl: t, size: r, shrink: n, disableAnimation: o, variant: i, required: a } = A, s = {
      root: [
        "root",
        t && "formControl",
        !o && "animated",
        n && "shrink",
        r && r !== "normal" && `size${hA(r)}`,
        i
      ],
      asterisk: [
        a && "asterisk"
      ]
    }, l = RA(s, Z0, e);
    return {
      ...e,
      ...l
    };
  };
  Aw = dA(X0, {
    shouldForwardProp: (A) => $e(A) || A === "classes",
    name: "MuiInputLabel",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        {
          [`& .${Dr.asterisk}`]: e.asterisk
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
  })(GA(({ theme: A }) => ({
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
  ew = w.forwardRef(function(e, t) {
    const r = DA({
      name: "MuiInputLabel",
      props: e
    }), { disableAnimation: n = false, margin: o, shrink: i, variant: a, className: s, ...l } = r, c = gr();
    let u = i;
    typeof u > "u" && c && (u = c.filled || c.focused || c.adornedStart);
    const d = fr({
      props: r,
      muiFormControl: c,
      states: [
        "size",
        "variant",
        "required",
        "focused"
      ]
    }), g = {
      ...r,
      disableAnimation: n,
      formControl: c,
      shrink: u,
      size: d.size,
      variant: d.variant,
      required: d.required,
      focused: d.focused
    }, B = q0(g);
    return N.jsx(Aw, {
      "data-shrink": u,
      ref: t,
      className: pA(B.root, s),
      ...l,
      ownerState: g,
      classes: B
    });
  });
  tw = w.createContext({});
  function rw(A) {
    return kA("MuiList", A);
  }
  xA("MuiList", [
    "root",
    "padding",
    "dense",
    "subheader"
  ]);
  let nw, ow;
  nw = (A) => {
    const { classes: e, disablePadding: t, dense: r, subheader: n } = A;
    return RA({
      root: [
        "root",
        !t && "padding",
        r && "dense",
        n && "subheader"
      ]
    }, rw, e);
  };
  ow = dA("ul", {
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
  iw = w.forwardRef(function(e, t) {
    const r = DA({
      props: e,
      name: "MuiList"
    }), { children: n, className: o, component: i = "ul", dense: a = false, disablePadding: s = false, subheader: l, ...c } = r, u = w.useMemo(() => ({
      dense: a
    }), [
      a
    ]), d = {
      ...r,
      component: i,
      dense: a,
      disablePadding: s
    }, g = nw(d);
    return N.jsx(tw.Provider, {
      value: u,
      children: N.jsxs(ow, {
        as: i,
        className: pA(g.root, o),
        ref: t,
        ownerState: d,
        ...c,
        children: [
          l,
          n
        ]
      })
    });
  });
  function Ei(A, e, t) {
    return A === e ? A.firstChild : e && e.nextElementSibling ? e.nextElementSibling : t ? null : A.firstChild;
  }
  function xl(A, e, t) {
    return A === e ? t ? A.firstChild : A.lastChild : e && e.previousElementSibling ? e.previousElementSibling : t ? null : A.lastChild;
  }
  function $u(A, e) {
    if (e === void 0) return true;
    let t = A.innerText;
    return t === void 0 && (t = A.textContent), t = t.trim().toLowerCase(), t.length === 0 ? false : e.repeating ? t[0] === e.keys[0] : t.startsWith(e.keys.join(""));
  }
  function mr(A, e, t, r, n, o) {
    let i = false, a = n(A, e, e ? t : false);
    for (; a; ) {
      if (a === A.firstChild) {
        if (i) return false;
        i = true;
      }
      const s = r ? false : a.disabled || a.getAttribute("aria-disabled") === "true";
      if (!a.hasAttribute("tabindex") || !$u(a, o) || s) a = n(A, a, t);
      else return a.focus(), true;
    }
    return false;
  }
  const aw = w.forwardRef(function(e, t) {
    const { actions: r, autoFocus: n = false, autoFocusItem: o = false, children: i, className: a, disabledItemsFocusable: s = false, disableListWrap: l = false, onKeyDown: c, variant: u = "selectedMenu", ...d } = e, g = w.useRef(null), B = w.useRef({
      keys: [],
      repeating: true,
      previousKeyMatched: true,
      lastTime: null
    });
    rt(() => {
      n && g.current.focus();
    }, [
      n
    ]), w.useImperativeHandle(r, () => ({
      adjustStyleForScrollbar: (m, { direction: Q }) => {
        const E = !g.current.style.width;
        if (m.clientHeight < g.current.clientHeight && E) {
          const v = `${Fu(nt(m))}px`;
          g.current.style[Q === "rtl" ? "paddingLeft" : "paddingRight"] = v, g.current.style.width = `calc(100% + ${v})`;
        }
        return g.current;
      }
    }), []);
    const p = (m) => {
      const Q = g.current, E = m.key;
      if (m.ctrlKey || m.metaKey || m.altKey) {
        c && c(m);
        return;
      }
      const I = Te(Q).activeElement;
      if (E === "ArrowDown") m.preventDefault(), mr(Q, I, l, s, Ei);
      else if (E === "ArrowUp") m.preventDefault(), mr(Q, I, l, s, xl);
      else if (E === "Home") m.preventDefault(), mr(Q, null, l, s, Ei);
      else if (E === "End") m.preventDefault(), mr(Q, null, l, s, xl);
      else if (E.length === 1) {
        const x = B.current, H = E.toLowerCase(), f = performance.now();
        x.keys.length > 0 && (f - x.lastTime > 500 ? (x.keys = [], x.repeating = true, x.previousKeyMatched = true) : x.repeating && H !== x.keys[0] && (x.repeating = false)), x.lastTime = f, x.keys.push(H);
        const T = I && !x.repeating && $u(I, x);
        x.previousKeyMatched && (T || mr(Q, I, false, s, Ei, x)) ? m.preventDefault() : x.previousKeyMatched = false;
      }
      c && c(m);
    }, b = he(g, t);
    let h = -1;
    w.Children.forEach(i, (m, Q) => {
      if (!w.isValidElement(m)) {
        h === Q && (h += 1, h >= i.length && (h = -1));
        return;
      }
      m.props.disabled || (u === "selectedMenu" && m.props.selected || h === -1) && (h = Q), h === Q && (m.props.disabled || m.props.muiSkipListHighlight || m.type.muiSkipListHighlight) && (h += 1, h >= i.length && (h = -1));
    });
    const F = w.Children.map(i, (m, Q) => {
      if (Q === h) {
        const E = {};
        return o && (E.autoFocus = true), m.props.tabIndex === void 0 && u === "selectedMenu" && (E.tabIndex = 0), w.cloneElement(m, E);
      }
      return m;
    });
    return N.jsx(iw, {
      role: "menu",
      ref: b,
      className: a,
      onKeyDown: p,
      tabIndex: n ? 0 : -1,
      ...d,
      children: F
    });
  });
  function sw(A) {
    return kA("MuiPopover", A);
  }
  xA("MuiPopover", [
    "root",
    "paper"
  ]);
  function Hl(A, e) {
    let t = 0;
    return typeof e == "number" ? t = e : e === "center" ? t = A.height / 2 : e === "bottom" && (t = A.height), t;
  }
  function Tl(A, e) {
    let t = 0;
    return typeof e == "number" ? t = e : e === "center" ? t = A.width / 2 : e === "right" && (t = A.width), t;
  }
  function Ll(A) {
    return [
      A.horizontal,
      A.vertical
    ].map((e) => typeof e == "number" ? `${e}px` : e).join(" ");
  }
  function vn(A) {
    return typeof A == "function" ? A() : A;
  }
  let lw, cw, Wu;
  lw = (A) => {
    const { classes: e } = A;
    return RA({
      root: [
        "root"
      ],
      paper: [
        "paper"
      ]
    }, sw, e);
  };
  cw = dA(H0, {
    name: "MuiPopover",
    slot: "Root",
    overridesResolver: (A, e) => e.root
  })({});
  Wu = dA(uh, {
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
  uw = w.forwardRef(function(e, t) {
    const r = DA({
      props: e,
      name: "MuiPopover"
    }), { action: n, anchorEl: o, anchorOrigin: i = {
      vertical: "top",
      horizontal: "left"
    }, anchorPosition: a, anchorReference: s = "anchorEl", children: l, className: c, container: u, elevation: d = 8, marginThreshold: g = 16, open: B, PaperProps: p = {}, slots: b = {}, slotProps: h = {}, transformOrigin: F = {
      vertical: "top",
      horizontal: "left"
    }, TransitionComponent: m, transitionDuration: Q = "auto", TransitionProps: E = {}, disableScrollLock: v = false, ...I } = r, x = w.useRef(), H = {
      ...r,
      anchorOrigin: i,
      anchorReference: s,
      elevation: d,
      marginThreshold: g,
      transformOrigin: F,
      TransitionComponent: m,
      transitionDuration: Q,
      TransitionProps: E
    }, f = lw(H), T = w.useCallback(() => {
      if (s === "anchorPosition") return a;
      const J = vn(o), aA = (J && J.nodeType === 1 ? J : Te(x.current).body).getBoundingClientRect();
      return {
        top: aA.top + Hl(aA, i.vertical),
        left: aA.left + Tl(aA, i.horizontal)
      };
    }, [
      o,
      i.horizontal,
      i.vertical,
      a,
      s
    ]), O = w.useCallback((J) => ({
      vertical: Hl(J, F.vertical),
      horizontal: Tl(J, F.horizontal)
    }), [
      F.horizontal,
      F.vertical
    ]), R = w.useCallback((J) => {
      const oA = {
        width: J.offsetWidth,
        height: J.offsetHeight
      }, aA = O(oA);
      if (s === "none") return {
        top: null,
        left: null,
        transformOrigin: Ll(aA)
      };
      const C = T();
      let U = C.top - aA.vertical, y = C.left - aA.horizontal;
      const P = U + oA.height, W = y + oA.width, G = nt(vn(o)), sA = G.innerHeight - g, lA = G.innerWidth - g;
      if (g !== null && U < g) {
        const fA = U - g;
        U -= fA, aA.vertical += fA;
      } else if (g !== null && P > sA) {
        const fA = P - sA;
        U -= fA, aA.vertical += fA;
      }
      if (g !== null && y < g) {
        const fA = y - g;
        y -= fA, aA.horizontal += fA;
      } else if (W > lA) {
        const fA = W - lA;
        y -= fA, aA.horizontal += fA;
      }
      return {
        top: `${Math.round(U)}px`,
        left: `${Math.round(y)}px`,
        transformOrigin: Ll(aA)
      };
    }, [
      o,
      s,
      T,
      O,
      g
    ]), [V, K] = w.useState(B), D = w.useCallback(() => {
      const J = x.current;
      if (!J) return;
      const oA = R(J);
      oA.top !== null && J.style.setProperty("top", oA.top), oA.left !== null && (J.style.left = oA.left), J.style.transformOrigin = oA.transformOrigin, K(true);
    }, [
      R
    ]);
    w.useEffect(() => (v && window.addEventListener("scroll", D), () => window.removeEventListener("scroll", D)), [
      o,
      v,
      D
    ]);
    const X = () => {
      D();
    }, nA = () => {
      K(false);
    };
    w.useEffect(() => {
      B && D();
    }), w.useImperativeHandle(n, () => B ? {
      updatePosition: () => {
        D();
      }
    } : null, [
      B,
      D
    ]), w.useEffect(() => {
      if (!B) return;
      const J = Qu(() => {
        D();
      }), oA = nt(vn(o));
      return oA.addEventListener("resize", J), () => {
        J.clear(), oA.removeEventListener("resize", J);
      };
    }, [
      o,
      B,
      D
    ]);
    let M = Q;
    const j = {
      slots: {
        transition: m,
        ...b
      },
      slotProps: {
        transition: E,
        paper: p,
        ...h
      }
    }, [AA, rA] = ce("transition", {
      elementType: pa,
      externalForwardedProps: j,
      ownerState: H,
      getSlotProps: (J) => ({
        ...J,
        onEntering: (oA, aA) => {
          var _a2;
          (_a2 = J.onEntering) == null ? void 0 : _a2.call(J, oA, aA), X();
        },
        onExited: (oA) => {
          var _a2;
          (_a2 = J.onExited) == null ? void 0 : _a2.call(J, oA), nA();
        }
      }),
      additionalProps: {
        appear: true,
        in: B
      }
    });
    Q === "auto" && !AA.muiSupportAuto && (M = void 0);
    const L = u || (o ? Te(vn(o)).body : void 0), [$, { slots: _, slotProps: Y, ...uA }] = ce("root", {
      ref: t,
      elementType: cw,
      externalForwardedProps: {
        ...j,
        ...I
      },
      shouldForwardComponentProp: true,
      additionalProps: {
        slots: {
          backdrop: b.backdrop
        },
        slotProps: {
          backdrop: zp(typeof h.backdrop == "function" ? h.backdrop(H) : h.backdrop, {
            invisible: true
          })
        },
        container: L,
        open: B
      },
      ownerState: H,
      className: pA(f.root, c)
    }), [iA, eA] = ce("paper", {
      ref: x,
      className: f.paper,
      elementType: Wu,
      externalForwardedProps: j,
      shouldForwardComponentProp: true,
      additionalProps: {
        elevation: d,
        style: V ? void 0 : {
          opacity: 0
        }
      },
      ownerState: H
    });
    return N.jsx($, {
      ...uA,
      ...!ga($) && {
        slots: _,
        slotProps: Y,
        disableScrollLock: v
      },
      children: N.jsx(AA, {
        ...rA,
        timeout: M,
        children: N.jsx(iA, {
          ...eA,
          children: l
        })
      })
    });
  });
  function dw(A) {
    return kA("MuiMenu", A);
  }
  xA("MuiMenu", [
    "root",
    "paper",
    "list"
  ]);
  let fw, gw, Bw, pw, hw, ww;
  fw = {
    vertical: "top",
    horizontal: "right"
  };
  gw = {
    vertical: "top",
    horizontal: "left"
  };
  Bw = (A) => {
    const { classes: e } = A;
    return RA({
      root: [
        "root"
      ],
      paper: [
        "paper"
      ],
      list: [
        "list"
      ]
    }, dw, e);
  };
  pw = dA(uw, {
    shouldForwardProp: (A) => $e(A) || A === "classes",
    name: "MuiMenu",
    slot: "Root",
    overridesResolver: (A, e) => e.root
  })({});
  hw = dA(Wu, {
    name: "MuiMenu",
    slot: "Paper",
    overridesResolver: (A, e) => e.paper
  })({
    maxHeight: "calc(100% - 96px)",
    WebkitOverflowScrolling: "touch"
  });
  ww = dA(aw, {
    name: "MuiMenu",
    slot: "List",
    overridesResolver: (A, e) => e.list
  })({
    outline: 0
  });
  Cw = w.forwardRef(function(e, t) {
    const r = DA({
      props: e,
      name: "MuiMenu"
    }), { autoFocus: n = true, children: o, className: i, disableAutoFocusItem: a = false, MenuListProps: s = {}, onClose: l, open: c, PaperProps: u = {}, PopoverClasses: d, transitionDuration: g = "auto", TransitionProps: { onEntering: B, ...p } = {}, variant: b = "selectedMenu", slots: h = {}, slotProps: F = {}, ...m } = r, Q = XB(), E = {
      ...r,
      autoFocus: n,
      disableAutoFocusItem: a,
      MenuListProps: s,
      onEntering: B,
      PaperProps: u,
      transitionDuration: g,
      TransitionProps: p,
      variant: b
    }, v = Bw(E), I = n && !a && c, x = w.useRef(null), H = (M, j) => {
      x.current && x.current.adjustStyleForScrollbar(M, {
        direction: Q ? "rtl" : "ltr"
      }), B && B(M, j);
    }, f = (M) => {
      M.key === "Tab" && (M.preventDefault(), l && l(M, "tabKeyDown"));
    };
    let T = -1;
    w.Children.map(o, (M, j) => {
      w.isValidElement(M) && (M.props.disabled || (b === "selectedMenu" && M.props.selected || T === -1) && (T = j));
    });
    const O = {
      slots: h,
      slotProps: {
        list: s,
        transition: p,
        paper: u,
        ...F
      }
    }, R = NB({
      elementType: h.root,
      externalSlotProps: F.root,
      ownerState: E,
      className: [
        v.root,
        i
      ]
    }), [V, K] = ce("paper", {
      className: v.paper,
      elementType: hw,
      externalForwardedProps: O,
      shouldForwardComponentProp: true,
      ownerState: E
    }), [D, X] = ce("list", {
      className: pA(v.list, s.className),
      elementType: ww,
      shouldForwardComponentProp: true,
      externalForwardedProps: O,
      getSlotProps: (M) => ({
        ...M,
        onKeyDown: (j) => {
          var _a2;
          f(j), (_a2 = M.onKeyDown) == null ? void 0 : _a2.call(M, j);
        }
      }),
      ownerState: E
    }), nA = typeof O.slotProps.transition == "function" ? O.slotProps.transition(E) : O.slotProps.transition;
    return N.jsx(pw, {
      onClose: l,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: Q ? "right" : "left"
      },
      transformOrigin: Q ? fw : gw,
      slots: {
        root: h.root,
        paper: V,
        backdrop: h.backdrop,
        ...h.transition && {
          transition: h.transition
        }
      },
      slotProps: {
        root: R,
        paper: K,
        backdrop: typeof F.backdrop == "function" ? F.backdrop(E) : F.backdrop,
        transition: {
          ...nA,
          onEntering: (...M) => {
            var _a2;
            H(...M), (_a2 = nA == null ? void 0 : nA.onEntering) == null ? void 0 : _a2.call(nA, ...M);
          }
        }
      },
      open: c,
      ref: t,
      transitionDuration: g,
      ownerState: E,
      ...m,
      classes: d,
      children: N.jsx(D, {
        actions: x,
        autoFocus: n && (T === -1 || a),
        autoFocusItem: I,
        variant: b,
        ...X,
        children: o
      })
    });
  });
  function mw(A) {
    return kA("MuiNativeSelect", A);
  }
  const Us = xA("MuiNativeSelect", [
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
  ]), vw = (A) => {
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
        `icon${hA(t)}`,
        o && "iconOpen",
        r && "disabled"
      ]
    };
    return RA(a, mw, e);
  }, Xu = dA("select", {
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
    [`&.${Us.disabled}`]: {
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
  })), Qw = dA(Xu, {
    name: "MuiNativeSelect",
    slot: "Select",
    shouldForwardProp: $e,
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.select,
        e[t.variant],
        t.error && e.error,
        {
          [`&.${Us.multiple}`]: e.multiple
        }
      ];
    }
  })({}), ju = dA("svg", {
    name: "MuiNativeSelect"
  })(({ theme: A }) => ({
    position: "absolute",
    right: 0,
    top: "calc(50% - .5em)",
    pointerEvents: "none",
    color: (A.vars || A).palette.action.active,
    [`&.${Us.disabled}`]: {
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
  })), yw = dA(ju, {
    name: "MuiNativeSelect",
    slot: "Icon",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.icon,
        t.variant && e[`icon${hA(t.variant)}`],
        t.open && e.iconOpen
      ];
    }
  })({}), bw = w.forwardRef(function(e, t) {
    const { className: r, disabled: n, error: o, IconComponent: i, inputRef: a, variant: s = "standard", ...l } = e, c = {
      ...e,
      disabled: n,
      variant: s,
      error: o
    }, u = vw(c);
    return N.jsxs(w.Fragment, {
      children: [
        N.jsx(Qw, {
          ownerState: c,
          className: pA(u.select, r),
          disabled: n,
          ref: a || t,
          ...l
        }),
        e.multiple ? null : N.jsx(yw, {
          as: i,
          ownerState: c,
          className: u.icon
        })
      ]
    });
  });
  var kl;
  const Fw = dA("fieldset", {
    name: "MuiNotchedOutlined",
    shouldForwardProp: $e
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
  }), Uw = dA("legend", {
    name: "MuiNotchedOutlined",
    shouldForwardProp: $e
  })(GA(({ theme: A }) => ({
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
  function Ew(A) {
    const { children: e, classes: t, className: r, label: n, notched: o, ...i } = A, a = n != null && n !== "", s = {
      ...A,
      notched: o,
      withLabel: a
    };
    return N.jsx(Fw, {
      "aria-hidden": true,
      className: r,
      ownerState: s,
      ...i,
      children: N.jsx(Uw, {
        ownerState: s,
        children: a ? N.jsx("span", {
          children: n
        }) : kl || (kl = N.jsx("span", {
          className: "notranslate",
          "aria-hidden": true,
          children: "\u200B"
        }))
      })
    });
  }
  const Sw = (A) => {
    const { classes: e } = A, r = RA({
      root: [
        "root"
      ],
      notchedOutline: [
        "notchedOutline"
      ],
      input: [
        "input"
      ]
    }, e0, e);
    return {
      ...e,
      ...r
    };
  }, Iw = dA(oi, {
    shouldForwardProp: (A) => $e(A) || A === "classes",
    name: "MuiOutlinedInput",
    slot: "Root",
    overridesResolver: ri
  })(GA(({ theme: A }) => {
    const e = A.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
    return {
      position: "relative",
      borderRadius: (A.vars || A).shape.borderRadius,
      [`&:hover .${Re.notchedOutline}`]: {
        borderColor: (A.vars || A).palette.text.primary
      },
      "@media (hover: none)": {
        [`&:hover .${Re.notchedOutline}`]: {
          borderColor: A.vars ? `rgba(${A.vars.palette.common.onBackgroundChannel} / 0.23)` : e
        }
      },
      [`&.${Re.focused} .${Re.notchedOutline}`]: {
        borderWidth: 2
      },
      variants: [
        ...Object.entries(A.palette).filter(vt()).map(([t]) => ({
          props: {
            color: t
          },
          style: {
            [`&.${Re.focused} .${Re.notchedOutline}`]: {
              borderColor: (A.vars || A).palette[t].main
            }
          }
        })),
        {
          props: {},
          style: {
            [`&.${Re.error} .${Re.notchedOutline}`]: {
              borderColor: (A.vars || A).palette.error.main
            },
            [`&.${Re.disabled} .${Re.notchedOutline}`]: {
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
  })), xw = dA(Ew, {
    name: "MuiOutlinedInput",
    slot: "NotchedOutline",
    overridesResolver: (A, e) => e.notchedOutline
  })(GA(({ theme: A }) => {
    const e = A.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
    return {
      borderColor: A.vars ? `rgba(${A.vars.palette.common.onBackgroundChannel} / 0.23)` : e
    };
  })), Hw = dA(ii, {
    name: "MuiOutlinedInput",
    slot: "Input",
    overridesResolver: ni
  })(GA(({ theme: A }) => ({
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
  }))), Es = w.forwardRef(function(e, t) {
    const r = DA({
      props: e,
      name: "MuiOutlinedInput"
    }), { components: n = {}, fullWidth: o = false, inputComponent: i = "input", label: a, multiline: s = false, notched: l, slots: c = {}, slotProps: u = {}, type: d = "text", ...g } = r, B = Sw(r), p = gr(), b = fr({
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
    }), h = {
      ...r,
      color: b.color || "primary",
      disabled: b.disabled,
      error: b.error,
      focused: b.focused,
      formControl: p,
      fullWidth: o,
      hiddenLabel: b.hiddenLabel,
      multiline: s,
      size: b.size,
      type: d
    }, F = c.root ?? n.Root ?? Iw, m = c.input ?? n.Input ?? Hw, [Q, E] = ce("notchedOutline", {
      elementType: xw,
      className: B.notchedOutline,
      shouldForwardComponentProp: true,
      ownerState: h,
      externalForwardedProps: {
        slots: c,
        slotProps: u
      },
      additionalProps: {
        label: a != null && a !== "" && b.required ? N.jsxs(w.Fragment, {
          children: [
            a,
            "\u2009",
            "*"
          ]
        }) : a
      }
    });
    return N.jsx(ys, {
      slots: {
        root: F,
        input: m
      },
      slotProps: u,
      renderSuffix: (v) => N.jsx(Q, {
        ...E,
        notched: typeof l < "u" ? l : !!(v.startAdornment || v.filled || v.focused)
      }),
      fullWidth: o,
      inputComponent: i,
      multiline: s,
      ref: t,
      type: d,
      ...g,
      classes: {
        ...B,
        notchedOutline: null
      }
    });
  });
  Es.muiName = "Input";
  function Ju(A) {
    return kA("MuiSelect", A);
  }
  const vr = xA("MuiSelect", [
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
  var Rl;
  const Tw = dA(Xu, {
    name: "MuiSelect",
    slot: "Select",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        {
          [`&.${vr.select}`]: e.select
        },
        {
          [`&.${vr.select}`]: e[t.variant]
        },
        {
          [`&.${vr.error}`]: e.error
        },
        {
          [`&.${vr.multiple}`]: e.multiple
        }
      ];
    }
  })({
    [`&.${vr.select}`]: {
      height: "auto",
      minHeight: "1.4375em",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden"
    }
  }), Lw = dA(ju, {
    name: "MuiSelect",
    slot: "Icon",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.icon,
        t.variant && e[`icon${hA(t.variant)}`],
        t.open && e.iconOpen
      ];
    }
  })({}), kw = dA("input", {
    shouldForwardProp: (A) => Nu(A) && A !== "classes",
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
  function Kl(A, e) {
    return typeof e == "object" && e !== null ? A === e : String(A) === String(e);
  }
  function Rw(A) {
    return A == null || typeof A == "string" && !A.trim();
  }
  let Kw, Ow, Dw, Ss, Mw, Pw, Nw;
  Kw = (A) => {
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
        `icon${hA(t)}`,
        o && "iconOpen",
        r && "disabled"
      ],
      nativeInput: [
        "nativeInput"
      ]
    };
    return RA(a, Ju, e);
  };
  Ow = w.forwardRef(function(e, t) {
    var _a2;
    const { "aria-describedby": r, "aria-label": n, autoFocus: o, autoWidth: i, children: a, className: s, defaultOpen: l, defaultValue: c, disabled: u, displayEmpty: d, error: g = false, IconComponent: B, inputRef: p, labelId: b, MenuProps: h = {}, multiple: F, name: m, onBlur: Q, onChange: E, onClose: v, onFocus: I, onOpen: x, open: H, readOnly: f, renderValue: T, required: O, SelectDisplayProps: R = {}, tabIndex: V, type: K, value: D, variant: X = "standard", ...nA } = e, [M, j] = tl({
      controlled: D,
      default: c,
      name: "Select"
    }), [AA, rA] = tl({
      controlled: H,
      default: l,
      name: "Select"
    }), L = w.useRef(null), $ = w.useRef(null), [_, Y] = w.useState(null), { current: uA } = w.useRef(H != null), [iA, eA] = w.useState(), J = he(t, p), oA = w.useCallback((cA) => {
      $.current = cA, cA && Y(cA);
    }, []), aA = _ == null ? void 0 : _.parentNode;
    w.useImperativeHandle(J, () => ({
      focus: () => {
        $.current.focus();
      },
      node: L.current,
      value: M
    }), [
      M
    ]), w.useEffect(() => {
      l && AA && _ && !uA && (eA(i ? null : aA.clientWidth), $.current.focus());
    }, [
      _,
      i
    ]), w.useEffect(() => {
      o && $.current.focus();
    }, [
      o
    ]), w.useEffect(() => {
      if (!b) return;
      const cA = Te($.current).getElementById(b);
      if (cA) {
        const SA = () => {
          getSelection().isCollapsed && $.current.focus();
        };
        return cA.addEventListener("click", SA), () => {
          cA.removeEventListener("click", SA);
        };
      }
    }, [
      b
    ]);
    const C = (cA, SA) => {
      cA ? x && x(SA) : v && v(SA), uA || (eA(i ? null : aA.clientWidth), rA(cA));
    }, U = (cA) => {
      cA.button === 0 && (cA.preventDefault(), $.current.focus(), C(true, cA));
    }, y = (cA) => {
      C(false, cA);
    }, P = w.Children.toArray(a), W = (cA) => {
      const SA = P.find((Ae) => Ae.props.value === cA.target.value);
      SA !== void 0 && (j(SA.props.value), E && E(cA, SA));
    }, G = (cA) => (SA) => {
      let Ae;
      if (SA.currentTarget.hasAttribute("tabindex")) {
        if (F) {
          Ae = Array.isArray(M) ? M.slice() : [];
          const Mt = M.indexOf(cA.props.value);
          Mt === -1 ? Ae.push(cA.props.value) : Ae.splice(Mt, 1);
        } else Ae = cA.props.value;
        if (cA.props.onClick && cA.props.onClick(SA), M !== Ae && (j(Ae), E)) {
          const Mt = SA.nativeEvent || SA, Ks = new Mt.constructor(Mt.type, Mt);
          Object.defineProperty(Ks, "target", {
            writable: true,
            value: {
              value: Ae,
              name: m
            }
          }), E(Ks, cA);
        }
        F || C(false, SA);
      }
    }, sA = (cA) => {
      f || [
        " ",
        "ArrowUp",
        "ArrowDown",
        "Enter"
      ].includes(cA.key) && (cA.preventDefault(), C(true, cA));
    }, lA = _ !== null && AA, fA = (cA) => {
      !lA && Q && (Object.defineProperty(cA, "target", {
        writable: true,
        value: {
          value: M,
          name: m
        }
      }), Q(cA));
    };
    delete nA["aria-invalid"];
    let q, qA;
    const gA = [];
    let MA = false;
    (so({
      value: M
    }) || d) && (T ? q = T(M) : MA = true);
    const WA = P.map((cA) => {
      if (!w.isValidElement(cA)) return null;
      let SA;
      if (F) {
        if (!Array.isArray(M)) throw new Error(et(2));
        SA = M.some((Ae) => Kl(Ae, cA.props.value)), SA && MA && gA.push(cA.props.children);
      } else SA = Kl(M, cA.props.value), SA && MA && (qA = cA.props.children);
      return w.cloneElement(cA, {
        "aria-selected": SA ? "true" : "false",
        onClick: G(cA),
        onKeyUp: (Ae) => {
          Ae.key === " " && Ae.preventDefault(), cA.props.onKeyUp && cA.props.onKeyUp(Ae);
        },
        role: "option",
        selected: SA,
        value: void 0,
        "data-value": cA.props.value
      });
    });
    MA && (F ? gA.length === 0 ? q = null : q = gA.reduce((cA, SA, Ae) => (cA.push(SA), Ae < gA.length - 1 && cA.push(", "), cA), []) : q = qA);
    let ie = iA;
    !i && uA && _ && (ie = aA.clientWidth);
    let JA;
    typeof V < "u" ? JA = V : JA = u ? null : 0;
    const at = R.id || (m ? `mui-component-select-${m}` : void 0), yt = {
      ...e,
      variant: X,
      value: M,
      open: lA,
      error: g
    }, HA = Kw(yt), Dt = {
      ...h.PaperProps,
      ...(_a2 = h.slotProps) == null ? void 0 : _a2.paper
    }, pr = ti();
    return N.jsxs(w.Fragment, {
      children: [
        N.jsx(Tw, {
          as: "div",
          ref: oA,
          tabIndex: JA,
          role: "combobox",
          "aria-controls": lA ? pr : void 0,
          "aria-disabled": u ? "true" : void 0,
          "aria-expanded": lA ? "true" : "false",
          "aria-haspopup": "listbox",
          "aria-label": n,
          "aria-labelledby": [
            b,
            at
          ].filter(Boolean).join(" ") || void 0,
          "aria-describedby": r,
          "aria-required": O ? "true" : void 0,
          "aria-invalid": g ? "true" : void 0,
          onKeyDown: sA,
          onMouseDown: u || f ? null : U,
          onBlur: fA,
          onFocus: I,
          ...R,
          ownerState: yt,
          className: pA(R.className, HA.select, s),
          id: at,
          children: Rw(q) ? Rl || (Rl = N.jsx("span", {
            className: "notranslate",
            "aria-hidden": true,
            children: "\u200B"
          })) : q
        }),
        N.jsx(kw, {
          "aria-invalid": g,
          value: Array.isArray(M) ? M.join(",") : M,
          name: m,
          ref: L,
          "aria-hidden": true,
          onChange: W,
          tabIndex: -1,
          disabled: u,
          className: HA.nativeInput,
          autoFocus: o,
          required: O,
          ...nA,
          ownerState: yt
        }),
        N.jsx(Lw, {
          as: B,
          className: HA.icon,
          ownerState: yt
        }),
        N.jsx(Cw, {
          id: `menu-${m || ""}`,
          anchorEl: aA,
          open: lA,
          onClose: y,
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "center"
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "center"
          },
          ...h,
          slotProps: {
            ...h.slotProps,
            list: {
              "aria-labelledby": b,
              role: "listbox",
              "aria-multiselectable": F ? "true" : void 0,
              disableListWrap: true,
              id: pr,
              ...h.MenuListProps
            },
            paper: {
              ...Dt,
              style: {
                minWidth: ie,
                ...Dt != null ? Dt.style : null
              }
            }
          },
          children: WA
        })
      ]
    });
  });
  Dw = (A) => {
    const { classes: e } = A, r = RA({
      root: [
        "root"
      ]
    }, Ju, e);
    return {
      ...e,
      ...r
    };
  };
  Ss = {
    name: "MuiSelect",
    overridesResolver: (A, e) => e.root,
    shouldForwardProp: (A) => $e(A) && A !== "variant",
    slot: "Root"
  };
  Mw = dA(Fs, Ss)("");
  Pw = dA(Es, Ss)("");
  Nw = dA(bs, Ss)("");
  Yu = w.forwardRef(function(e, t) {
    const r = DA({
      name: "MuiSelect",
      props: e
    }), { autoWidth: n = false, children: o, classes: i = {}, className: a, defaultOpen: s = false, displayEmpty: l = false, IconComponent: c = r0, id: u, input: d, inputProps: g, label: B, labelId: p, MenuProps: b, multiple: h = false, native: F = false, onClose: m, onOpen: Q, open: E, renderValue: v, SelectDisplayProps: I, variant: x = "outlined", ...H } = r, f = F ? bw : Ow, T = gr(), O = fr({
      props: r,
      muiFormControl: T,
      states: [
        "variant",
        "error"
      ]
    }), R = O.variant || x, V = {
      ...r,
      variant: R,
      classes: i
    }, K = Dw(V), { root: D, ...X } = K, nA = d || {
      standard: N.jsx(Mw, {
        ownerState: V
      }),
      outlined: N.jsx(Pw, {
        label: B,
        ownerState: V
      }),
      filled: N.jsx(Nw, {
        ownerState: V
      })
    }[R], M = he(t, sn(nA));
    return N.jsx(w.Fragment, {
      children: w.cloneElement(nA, {
        inputComponent: f,
        inputProps: {
          children: o,
          error: O.error,
          IconComponent: c,
          variant: R,
          type: void 0,
          multiple: h,
          ...F ? {
            id: u
          } : {
            autoWidth: n,
            defaultOpen: s,
            displayEmpty: l,
            labelId: p,
            MenuProps: b,
            onClose: m,
            onOpen: Q,
            open: E,
            renderValue: v,
            SelectDisplayProps: {
              id: u,
              ...I
            }
          },
          ...g,
          classes: g ? oe(X, g.classes) : X,
          ...d ? d.props.inputProps : {}
        },
        ...(h && F || l) && R === "outlined" ? {
          notched: true
        } : {},
        ref: M,
        className: pA(nA.props.className, a, K.root),
        ...!d && {
          variant: R
        },
        ...H
      })
    });
  });
  Yu.muiName = "Select";
  function Gw(A) {
    return kA("MuiTextField", A);
  }
  xA("MuiTextField", [
    "root"
  ]);
  let _w, Vw, $w;
  _w = {
    standard: Fs,
    filled: bs,
    outlined: Es
  };
  Vw = (A) => {
    const { classes: e } = A;
    return RA({
      root: [
        "root"
      ]
    }, Gw, e);
  };
  $w = dA(D0, {
    name: "MuiTextField",
    slot: "Root",
    overridesResolver: (A, e) => e.root
  })({});
  uU = w.forwardRef(function(e, t) {
    const r = DA({
      props: e,
      name: "MuiTextField"
    }), { autoComplete: n, autoFocus: o = false, children: i, className: a, color: s = "primary", defaultValue: l, disabled: c = false, error: u = false, FormHelperTextProps: d, fullWidth: g = false, helperText: B, id: p, InputLabelProps: b, inputProps: h, InputProps: F, inputRef: m, label: Q, maxRows: E, minRows: v, multiline: I = false, name: x, onBlur: H, onChange: f, onFocus: T, placeholder: O, required: R = false, rows: V, select: K = false, SelectProps: D, slots: X = {}, slotProps: nA = {}, type: M, value: j, variant: AA = "outlined", ...rA } = r, L = {
      ...r,
      autoFocus: o,
      color: s,
      disabled: c,
      error: u,
      fullWidth: g,
      multiline: I,
      required: R,
      select: K,
      variant: AA
    }, $ = Vw(L), _ = ti(p), Y = B && _ ? `${_}-helper-text` : void 0, uA = Q && _ ? `${_}-label` : void 0, iA = _w[AA], eA = {
      slots: X,
      slotProps: {
        input: F,
        inputLabel: b,
        htmlInput: h,
        formHelperText: d,
        select: D,
        ...nA
      }
    }, J = {}, oA = eA.slotProps.inputLabel;
    AA === "outlined" && (oA && typeof oA.shrink < "u" && (J.notched = oA.shrink), J.label = Q), K && ((!D || !D.native) && (J.id = void 0), J["aria-describedby"] = void 0);
    const [aA, C] = ce("root", {
      elementType: $w,
      shouldForwardComponentProp: true,
      externalForwardedProps: {
        ...eA,
        ...rA
      },
      ownerState: L,
      className: pA($.root, a),
      ref: t,
      additionalProps: {
        disabled: c,
        error: u,
        fullWidth: g,
        required: R,
        color: s,
        variant: AA
      }
    }), [U, y] = ce("input", {
      elementType: iA,
      externalForwardedProps: eA,
      additionalProps: J,
      ownerState: L
    }), [P, W] = ce("inputLabel", {
      elementType: ew,
      externalForwardedProps: eA,
      ownerState: L
    }), [G, sA] = ce("htmlInput", {
      elementType: "input",
      externalForwardedProps: eA,
      ownerState: L
    }), [lA, fA] = ce("formHelperText", {
      elementType: G0,
      externalForwardedProps: eA,
      ownerState: L
    }), [q, qA] = ce("select", {
      elementType: Yu,
      externalForwardedProps: eA,
      ownerState: L
    }), gA = N.jsx(U, {
      "aria-describedby": Y,
      autoComplete: n,
      autoFocus: o,
      defaultValue: l,
      fullWidth: g,
      multiline: I,
      name: x,
      rows: V,
      maxRows: E,
      minRows: v,
      type: M,
      value: j,
      id: _,
      inputRef: m,
      onBlur: H,
      onChange: f,
      onFocus: T,
      placeholder: O,
      inputProps: sA,
      slots: {
        input: X.htmlInput ? G : void 0
      },
      ...y
    });
    return N.jsxs(aA, {
      ...C,
      children: [
        Q != null && Q !== "" && N.jsx(P, {
          htmlFor: _,
          id: uA,
          ...W,
          children: Q
        }),
        K ? N.jsx(q, {
          "aria-describedby": Y,
          id: _,
          labelId: uA,
          value: j,
          input: gA,
          ...qA,
          children: i
        }) : gA,
        B && N.jsx(lA, {
          id: Y,
          ...fA,
          children: B
        })
      ]
    });
  });
  dU = class extends window.visRxWidget {
    wrappedCollectionContent = true;
    static getI18nPrefix() {
      return "vis_2_widgets_collection_";
    }
    getPropertyValue = (e) => this.state.values[`${this.state.rxData[e]}.val`];
    setValue = (e, t, r = false) => {
      !e || e === "nothing_selected" || this.props.context.socket.setState(e, t, r).catch((n) => console.error(`Cannot set state ${e}: ${n}`));
    };
    wrapContent(e) {
      return N.jsx(N.Fragment, {
        children: N.jsx(bl, {
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
          children: N.jsx(bl, {
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
  let XA, ue, Wt, Ww, Xw, jw, Jw, Yw, Qn, zw;
  fU = 1111111111111;
  gU = "vis-2-widgets-collection.0.theme";
  XA = {
    kind: "color",
    optional: true
  };
  ue = {
    kind: "cssObject",
    optional: true
  };
  Wt = {
    kind: "union",
    optional: true,
    options: [
      {
        kind: "object",
        optional: true,
        allowUnknown: "warn",
        properties: {
          light: XA,
          main: {
            kind: "color",
            required: true
          },
          dark: XA,
          contrastText: XA
        }
      },
      {
        kind: "record",
        optional: true,
        values: XA
      }
    ]
  };
  Ww = {
    kind: "object",
    optional: true,
    allowUnknown: "warn",
    properties: {
      mode: {
        kind: "literal",
        values: [
          "light",
          "dark"
        ],
        optional: true
      },
      primary: Wt,
      secondary: Wt,
      error: Wt,
      warning: Wt,
      info: Wt,
      success: Wt,
      text: {
        kind: "object",
        optional: true,
        allowUnknown: "warn",
        properties: {
          primary: XA,
          secondary: XA,
          disabled: XA
        }
      },
      background: {
        kind: "object",
        optional: true,
        allowUnknown: "warn",
        properties: {
          default: XA,
          paper: XA
        }
      },
      common: {
        kind: "object",
        optional: true,
        allowUnknown: "warn",
        properties: {
          black: XA,
          white: XA
        }
      },
      grey: {
        kind: "record",
        optional: true,
        values: XA
      },
      divider: XA,
      contrastThreshold: {
        kind: "number",
        optional: true
      },
      tonalOffset: {
        kind: "union",
        optional: true,
        options: [
          {
            kind: "number"
          },
          {
            kind: "object",
            optional: true,
            allowUnknown: "warn",
            properties: {
              light: {
                kind: "number",
                optional: true
              },
              dark: {
                kind: "number",
                optional: true
              }
            }
          }
        ]
      },
      action: {
        kind: "object",
        optional: true,
        allowUnknown: "warn",
        properties: {
          active: XA,
          hover: XA,
          hoverOpacity: {
            kind: "number",
            optional: true,
            min: 0,
            max: 1
          },
          selected: XA,
          selectedOpacity: {
            kind: "number",
            optional: true,
            min: 0,
            max: 1
          },
          disabled: XA,
          disabledOpacity: {
            kind: "number",
            optional: true,
            min: 0,
            max: 1
          },
          disabledBackground: XA,
          focus: XA,
          focusOpacity: {
            kind: "number",
            optional: true,
            min: 0,
            max: 1
          },
          activatedOpacity: {
            kind: "number",
            optional: true,
            min: 0,
            max: 1
          }
        }
      }
    }
  };
  Xw = {
    kind: "object",
    optional: true,
    allowUnknown: "warn",
    properties: {
      fontFamily: {
        kind: "string",
        optional: true
      },
      fontSize: {
        kind: "number",
        optional: true,
        min: 1,
        max: 100
      },
      htmlFontSize: {
        kind: "number",
        optional: true,
        min: 1,
        max: 100
      },
      fontWeightLight: {
        kind: "union",
        optional: true,
        options: [
          {
            kind: "string"
          },
          {
            kind: "number"
          }
        ]
      },
      fontWeightRegular: {
        kind: "union",
        optional: true,
        options: [
          {
            kind: "string"
          },
          {
            kind: "number"
          }
        ]
      },
      fontWeightMedium: {
        kind: "union",
        optional: true,
        options: [
          {
            kind: "string"
          },
          {
            kind: "number"
          }
        ]
      },
      fontWeightBold: {
        kind: "union",
        optional: true,
        options: [
          {
            kind: "string"
          },
          {
            kind: "number"
          }
        ]
      },
      allVariants: ue,
      h1: ue,
      h2: ue,
      h3: ue,
      h4: ue,
      h5: ue,
      h6: ue,
      subtitle1: ue,
      subtitle2: ue,
      body1: ue,
      body2: ue,
      caption: ue,
      button: ue,
      overline: ue
    }
  };
  jw = {
    kind: "union",
    optional: true,
    options: [
      {
        kind: "boolean"
      },
      {
        kind: "object",
        optional: true,
        allowUnknown: "warn",
        properties: {
          cssVarPrefix: {
            kind: "string",
            optional: true
          },
          colorSchemeSelector: {
            kind: "string",
            optional: true
          },
          rootSelector: {
            kind: "string",
            optional: true
          },
          disableCssColorScheme: {
            kind: "boolean",
            optional: true
          },
          shouldSkipGeneratingVar: {
            kind: "record",
            optional: true,
            values: {
              kind: "string",
              optional: true
            }
          }
        }
      }
    ]
  };
  Jw = {
    kind: "union",
    optional: true,
    options: [
      {
        kind: "number"
      },
      {
        kind: "string"
      },
      {
        kind: "array",
        optional: true,
        items: {
          kind: "union",
          options: [
            {
              kind: "number"
            },
            {
              kind: "string"
            }
          ]
        }
      }
    ]
  };
  Yw = {
    kind: "record",
    optional: true,
    values: {
      kind: "object",
      optional: true,
      allowUnknown: "ignore",
      properties: {
        defaultProps: {
          kind: "object",
          optional: true,
          allowUnknown: "ignore",
          properties: {}
        },
        styleOverrides: ue,
        variants: {
          kind: "array",
          optional: true,
          items: {
            kind: "object",
            optional: true,
            allowUnknown: "ignore",
            properties: {}
          }
        }
      }
    }
  };
  Qn = {
    kind: "object",
    optional: true,
    allowUnknown: "ignore",
    properties: {}
  };
  zw = {
    kind: "object",
    allowUnknown: "warn",
    properties: {
      palette: Ww,
      typography: Xw,
      shape: {
        kind: "object",
        optional: true,
        allowUnknown: "warn",
        properties: {
          borderRadius: {
            kind: "number",
            optional: true,
            min: 0,
            max: 64
          }
        }
      },
      direction: {
        kind: "literal",
        values: [
          "ltr",
          "rtl"
        ],
        optional: true
      },
      spacing: Jw,
      cssVariables: jw,
      zIndex: {
        kind: "record",
        optional: true,
        values: {
          kind: "number",
          optional: true
        }
      },
      shadows: {
        kind: "array",
        optional: true,
        items: {
          kind: "string"
        }
      },
      mixins: Qn,
      transitions: {
        kind: "object",
        optional: true,
        allowUnknown: "warn",
        properties: {
          duration: Qn,
          easing: Qn
        }
      },
      breakpoints: {
        kind: "object",
        optional: true,
        allowUnknown: "warn",
        properties: {
          values: Qn,
          unit: {
            kind: "string",
            optional: true
          },
          step: {
            kind: "number",
            optional: true
          }
        }
      },
      components: Yw,
      unstable_strictMode: {
        kind: "boolean",
        optional: true
      },
      modularCssLayers: {
        kind: "union",
        optional: true,
        options: [
          {
            kind: "boolean"
          },
          {
            kind: "string"
          }
        ]
      }
    }
  };
  function ot(A) {
    return typeof A == "object" && A !== null && !Array.isArray(A);
  }
  BU = function(A, e) {
    if (!ot(A) || !e) return;
    const t = e.split(".");
    let r = A;
    for (const n of t) {
      if (!ot(r) || !(n in r)) return;
      r = r[n];
    }
    return r;
  };
  pU = function(A, e, t) {
    if (!e) return A;
    const r = ot(A) ? {
      ...A
    } : {};
    return t === void 0 ? Zu(r, e.split(".")) : zu(r, e.split("."), t), r;
  };
  function zu(A, e, t) {
    const [r, ...n] = e;
    if (n.length === 0) {
      A[r] = t;
      return;
    }
    const o = A[r], i = ot(o) ? {
      ...o
    } : {};
    A[r] = i, zu(i, n, t);
  }
  function Zu(A, e) {
    const [t, ...r] = e;
    if (r.length === 0) {
      delete A[t];
      return;
    }
    const n = A[t];
    if (!ot(n)) return;
    const o = {
      ...n
    };
    Zu(o, r), Object.keys(o).length === 0 ? delete A[t] : A[t] = o;
  }
  hU = function(A) {
    const e = [];
    if (A == null) return {
      isValid: true,
      theme: {},
      issues: e
    };
    if (!ot(A)) return e.push({
      path: "",
      severity: "error",
      message: "Theme must be a plain object."
    }), {
      isValid: false,
      issues: e
    };
    if (Object.keys(A).length === 0) return {
      isValid: true,
      theme: {},
      issues: e
    };
    ln(A, zw, "", e);
    const t = !e.some((r) => r.severity === "error");
    return {
      isValid: t,
      theme: t ? A : void 0,
      issues: e
    };
  };
  function ln(A, e, t, r) {
    if (typeof A == "function" || typeof A == "symbol") {
      r.push({
        path: t,
        severity: "error",
        message: `Value at "${t}" is a ${typeof A}, which is not serializable.`
      });
      return;
    }
    switch (e.kind) {
      case "object":
        Zw(A, e, t, r);
        break;
      case "string":
        typeof A != "string" && qe(t, "string", A, r);
        break;
      case "number":
        qw(A, e, t, r);
        break;
      case "boolean":
        typeof A != "boolean" && qe(t, "boolean", A, r);
        break;
      case "color":
        nC(A) || qe(t, "color", A, r);
        break;
      case "literal":
        e.values.includes(A) || r.push({
          path: t,
          severity: "error",
          message: `Value at "${t}" must be one of: ${e.values.join(", ")}.`
        });
        break;
      case "union":
        AC(A, e.options, t, r);
        break;
      case "array":
        eC(A, e.items, t, r);
        break;
      case "record":
        tC(A, e.values, t, r);
        break;
      case "cssObject":
        qu(A, t, r);
        break;
    }
  }
  function Zw(A, e, t, r) {
    if (!ot(A)) {
      qe(t, "object", A, r);
      return;
    }
    const n = e.allowUnknown ?? "warn";
    for (const o of Object.keys(A)) {
      const i = t ? `${t}.${o}` : o, a = e.properties[o], s = A[o];
      a ? ln(s, a, i, r) : typeof s == "function" || typeof s == "symbol" ? r.push({
        path: i,
        severity: "error",
        message: `Value at "${i}" is a ${typeof s}, which is not serializable.`
      }) : n === "warn" ? r.push({
        path: i,
        severity: "warning",
        message: `Unknown theme option "${i}" \u2014 it may be ignored by MUI.`
      }) : n === "error" && r.push({
        path: i,
        severity: "error",
        message: `Unknown theme option "${i}".`
      });
    }
    for (const [o, i] of Object.entries(e.properties)) if (i.required && !(o in A)) {
      const a = t ? `${t}.${o}` : o;
      r.push({
        path: a,
        severity: "error",
        message: `Missing required option "${a}".`
      });
    }
  }
  function qw(A, e, t, r) {
    if (typeof A != "number" || Number.isNaN(A)) {
      qe(t, "number", A, r);
      return;
    }
    e.min !== void 0 && A < e.min && r.push({
      path: t,
      severity: "error",
      message: `Value at "${t}" must be >= ${e.min}.`
    }), e.max !== void 0 && A > e.max && r.push({
      path: t,
      severity: "error",
      message: `Value at "${t}" must be <= ${e.max}.`
    });
  }
  function AC(A, e, t, r) {
    for (const n of e) {
      const o = [];
      if (ln(A, n, t, o), !o.some((i) => i.severity === "error")) {
        r.push(...o);
        return;
      }
    }
    qe(t, "one of the allowed types", A, r);
  }
  function eC(A, e, t, r) {
    if (!Array.isArray(A)) {
      qe(t, "array", A, r);
      return;
    }
    A.forEach((n, o) => {
      ln(n, e, `${t}[${o}]`, r);
    });
  }
  function tC(A, e, t, r) {
    if (!ot(A)) {
      qe(t, "object", A, r);
      return;
    }
    for (const n of Object.keys(A)) ln(A[n], e, t ? `${t}.${n}` : n, r);
  }
  function qu(A, e, t) {
    if (typeof A == "function" || typeof A == "symbol") {
      t.push({
        path: e,
        severity: "error",
        message: `Value at "${e}" is a ${typeof A}, which is not serializable.`
      });
      return;
    }
    if (!(typeof A == "string" || typeof A == "number")) {
      if (ot(A)) {
        for (const r of Object.keys(A)) qu(A[r], e ? `${e}.${r}` : r, t);
        return;
      }
      qe(e, "CSS value", A, t);
    }
  }
  function qe(A, e, t, r) {
    const n = t === null ? "null" : Array.isArray(t) ? "array" : typeof t;
    r.push({
      path: A,
      severity: "error",
      message: `Value at "${A}" must be a ${e} (got ${n}).`
    });
  }
  const rC = /\b(?:linear|radial|conic)-gradient\b/i;
  function nC(A) {
    if (typeof A != "string") return false;
    const e = A.trim();
    return !e || rC.test(e) ? false : typeof CSS < "u" && typeof CSS.supports == "function" ? CSS.supports("color", e) : true;
  }
  var Ad = {
    exports: {}
  };
  (function(A) {
    (function(e) {
      var t = /^\s+/, r = /\s+$/, n = 0, o = e.round, i = e.min, a = e.max, s = e.random;
      function l(C, U) {
        if (C = C || "", U = U || {}, C instanceof l) return C;
        if (!(this instanceof l)) return new l(C, U);
        var y = c(C);
        this._originalInput = C, this._r = y.r, this._g = y.g, this._b = y.b, this._a = y.a, this._roundA = o(100 * this._a) / 100, this._format = U.format || y.format, this._gradientType = U.gradientType, this._r < 1 && (this._r = o(this._r)), this._g < 1 && (this._g = o(this._g)), this._b < 1 && (this._b = o(this._b)), this._ok = y.ok, this._tc_id = n++;
      }
      l.prototype = {
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
          var C = this.toRgb();
          return (C.r * 299 + C.g * 587 + C.b * 114) / 1e3;
        },
        getLuminance: function() {
          var C = this.toRgb(), U, y, P, W, G, sA;
          return U = C.r / 255, y = C.g / 255, P = C.b / 255, U <= 0.03928 ? W = U / 12.92 : W = e.pow((U + 0.055) / 1.055, 2.4), y <= 0.03928 ? G = y / 12.92 : G = e.pow((y + 0.055) / 1.055, 2.4), P <= 0.03928 ? sA = P / 12.92 : sA = e.pow((P + 0.055) / 1.055, 2.4), 0.2126 * W + 0.7152 * G + 0.0722 * sA;
        },
        setAlpha: function(C) {
          return this._a = M(C), this._roundA = o(100 * this._a) / 100, this;
        },
        toHsv: function() {
          var C = B(this._r, this._g, this._b);
          return {
            h: C.h * 360,
            s: C.s,
            v: C.v,
            a: this._a
          };
        },
        toHsvString: function() {
          var C = B(this._r, this._g, this._b), U = o(C.h * 360), y = o(C.s * 100), P = o(C.v * 100);
          return this._a == 1 ? "hsv(" + U + ", " + y + "%, " + P + "%)" : "hsva(" + U + ", " + y + "%, " + P + "%, " + this._roundA + ")";
        },
        toHsl: function() {
          var C = d(this._r, this._g, this._b);
          return {
            h: C.h * 360,
            s: C.s,
            l: C.l,
            a: this._a
          };
        },
        toHslString: function() {
          var C = d(this._r, this._g, this._b), U = o(C.h * 360), y = o(C.s * 100), P = o(C.l * 100);
          return this._a == 1 ? "hsl(" + U + ", " + y + "%, " + P + "%)" : "hsla(" + U + ", " + y + "%, " + P + "%, " + this._roundA + ")";
        },
        toHex: function(C) {
          return b(this._r, this._g, this._b, C);
        },
        toHexString: function(C) {
          return "#" + this.toHex(C);
        },
        toHex8: function(C) {
          return h(this._r, this._g, this._b, this._a, C);
        },
        toHex8String: function(C) {
          return "#" + this.toHex8(C);
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
            r: o(j(this._r, 255) * 100) + "%",
            g: o(j(this._g, 255) * 100) + "%",
            b: o(j(this._b, 255) * 100) + "%",
            a: this._a
          };
        },
        toPercentageRgbString: function() {
          return this._a == 1 ? "rgb(" + o(j(this._r, 255) * 100) + "%, " + o(j(this._g, 255) * 100) + "%, " + o(j(this._b, 255) * 100) + "%)" : "rgba(" + o(j(this._r, 255) * 100) + "%, " + o(j(this._g, 255) * 100) + "%, " + o(j(this._b, 255) * 100) + "%, " + this._roundA + ")";
        },
        toName: function() {
          return this._a === 0 ? "transparent" : this._a < 1 ? false : X[b(this._r, this._g, this._b, true)] || false;
        },
        toFilter: function(C) {
          var U = "#" + F(this._r, this._g, this._b, this._a), y = U, P = this._gradientType ? "GradientType = 1, " : "";
          if (C) {
            var W = l(C);
            y = "#" + F(W._r, W._g, W._b, W._a);
          }
          return "progid:DXImageTransform.Microsoft.gradient(" + P + "startColorstr=" + U + ",endColorstr=" + y + ")";
        },
        toString: function(C) {
          var U = !!C;
          C = C || this._format;
          var y = false, P = this._a < 1 && this._a >= 0, W = !U && P && (C === "hex" || C === "hex6" || C === "hex3" || C === "hex4" || C === "hex8" || C === "name");
          return W ? C === "name" && this._a === 0 ? this.toName() : this.toRgbString() : (C === "rgb" && (y = this.toRgbString()), C === "prgb" && (y = this.toPercentageRgbString()), (C === "hex" || C === "hex6") && (y = this.toHexString()), C === "hex3" && (y = this.toHexString(true)), C === "hex4" && (y = this.toHex8String(true)), C === "hex8" && (y = this.toHex8String()), C === "name" && (y = this.toName()), C === "hsl" && (y = this.toHslString()), C === "hsv" && (y = this.toHsvString()), y || this.toHexString());
        },
        clone: function() {
          return l(this.toString());
        },
        _applyModification: function(C, U) {
          var y = C.apply(null, [
            this
          ].concat([].slice.call(U)));
          return this._r = y._r, this._g = y._g, this._b = y._b, this.setAlpha(y._a), this;
        },
        lighten: function() {
          return this._applyModification(v, arguments);
        },
        brighten: function() {
          return this._applyModification(I, arguments);
        },
        darken: function() {
          return this._applyModification(x, arguments);
        },
        desaturate: function() {
          return this._applyModification(m, arguments);
        },
        saturate: function() {
          return this._applyModification(Q, arguments);
        },
        greyscale: function() {
          return this._applyModification(E, arguments);
        },
        spin: function() {
          return this._applyModification(H, arguments);
        },
        _applyCombination: function(C, U) {
          return C.apply(null, [
            this
          ].concat([].slice.call(U)));
        },
        analogous: function() {
          return this._applyCombination(V, arguments);
        },
        complement: function() {
          return this._applyCombination(f, arguments);
        },
        monochromatic: function() {
          return this._applyCombination(K, arguments);
        },
        splitcomplement: function() {
          return this._applyCombination(R, arguments);
        },
        triad: function() {
          return this._applyCombination(T, arguments);
        },
        tetrad: function() {
          return this._applyCombination(O, arguments);
        }
      }, l.fromRatio = function(C, U) {
        if (typeof C == "object") {
          var y = {};
          for (var P in C) C.hasOwnProperty(P) && (P === "a" ? y[P] = C[P] : y[P] = Y(C[P]));
          C = y;
        }
        return l(C, U);
      };
      function c(C) {
        var U = {
          r: 0,
          g: 0,
          b: 0
        }, y = 1, P = null, W = null, G = null, sA = false, lA = false;
        return typeof C == "string" && (C = oA(C)), typeof C == "object" && (J(C.r) && J(C.g) && J(C.b) ? (U = u(C.r, C.g, C.b), sA = true, lA = String(C.r).substr(-1) === "%" ? "prgb" : "rgb") : J(C.h) && J(C.s) && J(C.v) ? (P = Y(C.s), W = Y(C.v), U = p(C.h, P, W), sA = true, lA = "hsv") : J(C.h) && J(C.s) && J(C.l) && (P = Y(C.s), G = Y(C.l), U = g(C.h, P, G), sA = true, lA = "hsl"), C.hasOwnProperty("a") && (y = C.a)), y = M(y), {
          ok: sA,
          format: C.format || lA,
          r: i(255, a(U.r, 0)),
          g: i(255, a(U.g, 0)),
          b: i(255, a(U.b, 0)),
          a: y
        };
      }
      function u(C, U, y) {
        return {
          r: j(C, 255) * 255,
          g: j(U, 255) * 255,
          b: j(y, 255) * 255
        };
      }
      function d(C, U, y) {
        C = j(C, 255), U = j(U, 255), y = j(y, 255);
        var P = a(C, U, y), W = i(C, U, y), G, sA, lA = (P + W) / 2;
        if (P == W) G = sA = 0;
        else {
          var fA = P - W;
          switch (sA = lA > 0.5 ? fA / (2 - P - W) : fA / (P + W), P) {
            case C:
              G = (U - y) / fA + (U < y ? 6 : 0);
              break;
            case U:
              G = (y - C) / fA + 2;
              break;
            case y:
              G = (C - U) / fA + 4;
              break;
          }
          G /= 6;
        }
        return {
          h: G,
          s: sA,
          l: lA
        };
      }
      function g(C, U, y) {
        var P, W, G;
        C = j(C, 360), U = j(U, 100), y = j(y, 100);
        function sA(q, qA, gA) {
          return gA < 0 && (gA += 1), gA > 1 && (gA -= 1), gA < 1 / 6 ? q + (qA - q) * 6 * gA : gA < 1 / 2 ? qA : gA < 2 / 3 ? q + (qA - q) * (2 / 3 - gA) * 6 : q;
        }
        if (U === 0) P = W = G = y;
        else {
          var lA = y < 0.5 ? y * (1 + U) : y + U - y * U, fA = 2 * y - lA;
          P = sA(fA, lA, C + 1 / 3), W = sA(fA, lA, C), G = sA(fA, lA, C - 1 / 3);
        }
        return {
          r: P * 255,
          g: W * 255,
          b: G * 255
        };
      }
      function B(C, U, y) {
        C = j(C, 255), U = j(U, 255), y = j(y, 255);
        var P = a(C, U, y), W = i(C, U, y), G, sA, lA = P, fA = P - W;
        if (sA = P === 0 ? 0 : fA / P, P == W) G = 0;
        else {
          switch (P) {
            case C:
              G = (U - y) / fA + (U < y ? 6 : 0);
              break;
            case U:
              G = (y - C) / fA + 2;
              break;
            case y:
              G = (C - U) / fA + 4;
              break;
          }
          G /= 6;
        }
        return {
          h: G,
          s: sA,
          v: lA
        };
      }
      function p(C, U, y) {
        C = j(C, 360) * 6, U = j(U, 100), y = j(y, 100);
        var P = e.floor(C), W = C - P, G = y * (1 - U), sA = y * (1 - W * U), lA = y * (1 - (1 - W) * U), fA = P % 6, q = [
          y,
          sA,
          G,
          G,
          lA,
          y
        ][fA], qA = [
          lA,
          y,
          y,
          sA,
          G,
          G
        ][fA], gA = [
          G,
          G,
          lA,
          y,
          y,
          sA
        ][fA];
        return {
          r: q * 255,
          g: qA * 255,
          b: gA * 255
        };
      }
      function b(C, U, y, P) {
        var W = [
          _(o(C).toString(16)),
          _(o(U).toString(16)),
          _(o(y).toString(16))
        ];
        return P && W[0].charAt(0) == W[0].charAt(1) && W[1].charAt(0) == W[1].charAt(1) && W[2].charAt(0) == W[2].charAt(1) ? W[0].charAt(0) + W[1].charAt(0) + W[2].charAt(0) : W.join("");
      }
      function h(C, U, y, P, W) {
        var G = [
          _(o(C).toString(16)),
          _(o(U).toString(16)),
          _(o(y).toString(16)),
          _(uA(P))
        ];
        return W && G[0].charAt(0) == G[0].charAt(1) && G[1].charAt(0) == G[1].charAt(1) && G[2].charAt(0) == G[2].charAt(1) && G[3].charAt(0) == G[3].charAt(1) ? G[0].charAt(0) + G[1].charAt(0) + G[2].charAt(0) + G[3].charAt(0) : G.join("");
      }
      function F(C, U, y, P) {
        var W = [
          _(uA(P)),
          _(o(C).toString(16)),
          _(o(U).toString(16)),
          _(o(y).toString(16))
        ];
        return W.join("");
      }
      l.equals = function(C, U) {
        return !C || !U ? false : l(C).toRgbString() == l(U).toRgbString();
      }, l.random = function() {
        return l.fromRatio({
          r: s(),
          g: s(),
          b: s()
        });
      };
      function m(C, U) {
        U = U === 0 ? 0 : U || 10;
        var y = l(C).toHsl();
        return y.s -= U / 100, y.s = AA(y.s), l(y);
      }
      function Q(C, U) {
        U = U === 0 ? 0 : U || 10;
        var y = l(C).toHsl();
        return y.s += U / 100, y.s = AA(y.s), l(y);
      }
      function E(C) {
        return l(C).desaturate(100);
      }
      function v(C, U) {
        U = U === 0 ? 0 : U || 10;
        var y = l(C).toHsl();
        return y.l += U / 100, y.l = AA(y.l), l(y);
      }
      function I(C, U) {
        U = U === 0 ? 0 : U || 10;
        var y = l(C).toRgb();
        return y.r = a(0, i(255, y.r - o(255 * -(U / 100)))), y.g = a(0, i(255, y.g - o(255 * -(U / 100)))), y.b = a(0, i(255, y.b - o(255 * -(U / 100)))), l(y);
      }
      function x(C, U) {
        U = U === 0 ? 0 : U || 10;
        var y = l(C).toHsl();
        return y.l -= U / 100, y.l = AA(y.l), l(y);
      }
      function H(C, U) {
        var y = l(C).toHsl(), P = (y.h + U) % 360;
        return y.h = P < 0 ? 360 + P : P, l(y);
      }
      function f(C) {
        var U = l(C).toHsl();
        return U.h = (U.h + 180) % 360, l(U);
      }
      function T(C) {
        var U = l(C).toHsl(), y = U.h;
        return [
          l(C),
          l({
            h: (y + 120) % 360,
            s: U.s,
            l: U.l
          }),
          l({
            h: (y + 240) % 360,
            s: U.s,
            l: U.l
          })
        ];
      }
      function O(C) {
        var U = l(C).toHsl(), y = U.h;
        return [
          l(C),
          l({
            h: (y + 90) % 360,
            s: U.s,
            l: U.l
          }),
          l({
            h: (y + 180) % 360,
            s: U.s,
            l: U.l
          }),
          l({
            h: (y + 270) % 360,
            s: U.s,
            l: U.l
          })
        ];
      }
      function R(C) {
        var U = l(C).toHsl(), y = U.h;
        return [
          l(C),
          l({
            h: (y + 72) % 360,
            s: U.s,
            l: U.l
          }),
          l({
            h: (y + 216) % 360,
            s: U.s,
            l: U.l
          })
        ];
      }
      function V(C, U, y) {
        U = U || 6, y = y || 30;
        var P = l(C).toHsl(), W = 360 / y, G = [
          l(C)
        ];
        for (P.h = (P.h - (W * U >> 1) + 720) % 360; --U; ) P.h = (P.h + W) % 360, G.push(l(P));
        return G;
      }
      function K(C, U) {
        U = U || 6;
        for (var y = l(C).toHsv(), P = y.h, W = y.s, G = y.v, sA = [], lA = 1 / U; U--; ) sA.push(l({
          h: P,
          s: W,
          v: G
        })), G = (G + lA) % 1;
        return sA;
      }
      l.mix = function(C, U, y) {
        y = y === 0 ? 0 : y || 50;
        var P = l(C).toRgb(), W = l(U).toRgb(), G = y / 100, sA = {
          r: (W.r - P.r) * G + P.r,
          g: (W.g - P.g) * G + P.g,
          b: (W.b - P.b) * G + P.b,
          a: (W.a - P.a) * G + P.a
        };
        return l(sA);
      }, l.readability = function(C, U) {
        var y = l(C), P = l(U);
        return (e.max(y.getLuminance(), P.getLuminance()) + 0.05) / (e.min(y.getLuminance(), P.getLuminance()) + 0.05);
      }, l.isReadable = function(C, U, y) {
        var P = l.readability(C, U), W, G;
        switch (G = false, W = aA(y), W.level + W.size) {
          case "AAsmall":
          case "AAAlarge":
            G = P >= 4.5;
            break;
          case "AAlarge":
            G = P >= 3;
            break;
          case "AAAsmall":
            G = P >= 7;
            break;
        }
        return G;
      }, l.mostReadable = function(C, U, y) {
        var P = null, W = 0, G, sA, lA, fA;
        y = y || {}, sA = y.includeFallbackColors, lA = y.level, fA = y.size;
        for (var q = 0; q < U.length; q++) G = l.readability(C, U[q]), G > W && (W = G, P = l(U[q]));
        return l.isReadable(C, P, {
          level: lA,
          size: fA
        }) || !sA ? P : (y.includeFallbackColors = false, l.mostReadable(C, [
          "#fff",
          "#000"
        ], y));
      };
      var D = l.names = {
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
      }, X = l.hexNames = nA(D);
      function nA(C) {
        var U = {};
        for (var y in C) C.hasOwnProperty(y) && (U[C[y]] = y);
        return U;
      }
      function M(C) {
        return C = parseFloat(C), (isNaN(C) || C < 0 || C > 1) && (C = 1), C;
      }
      function j(C, U) {
        L(C) && (C = "100%");
        var y = $(C);
        return C = i(U, a(0, parseFloat(C))), y && (C = parseInt(C * U, 10) / 100), e.abs(C - U) < 1e-6 ? 1 : C % U / parseFloat(U);
      }
      function AA(C) {
        return i(1, a(0, C));
      }
      function rA(C) {
        return parseInt(C, 16);
      }
      function L(C) {
        return typeof C == "string" && C.indexOf(".") != -1 && parseFloat(C) === 1;
      }
      function $(C) {
        return typeof C == "string" && C.indexOf("%") != -1;
      }
      function _(C) {
        return C.length == 1 ? "0" + C : "" + C;
      }
      function Y(C) {
        return C <= 1 && (C = C * 100 + "%"), C;
      }
      function uA(C) {
        return e.round(parseFloat(C) * 255).toString(16);
      }
      function iA(C) {
        return rA(C) / 255;
      }
      var eA = (function() {
        var C = "[-\\+]?\\d+%?", U = "[-\\+]?\\d*\\.\\d+%?", y = "(?:" + U + ")|(?:" + C + ")", P = "[\\s|\\(]+(" + y + ")[,|\\s]+(" + y + ")[,|\\s]+(" + y + ")\\s*\\)?", W = "[\\s|\\(]+(" + y + ")[,|\\s]+(" + y + ")[,|\\s]+(" + y + ")[,|\\s]+(" + y + ")\\s*\\)?";
        return {
          CSS_UNIT: new RegExp(y),
          rgb: new RegExp("rgb" + P),
          rgba: new RegExp("rgba" + W),
          hsl: new RegExp("hsl" + P),
          hsla: new RegExp("hsla" + W),
          hsv: new RegExp("hsv" + P),
          hsva: new RegExp("hsva" + W),
          hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
          hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
        };
      })();
      function J(C) {
        return !!eA.CSS_UNIT.exec(C);
      }
      function oA(C) {
        C = C.replace(t, "").replace(r, "").toLowerCase();
        var U = false;
        if (D[C]) C = D[C], U = true;
        else if (C == "transparent") return {
          r: 0,
          g: 0,
          b: 0,
          a: 0,
          format: "name"
        };
        var y;
        return (y = eA.rgb.exec(C)) ? {
          r: y[1],
          g: y[2],
          b: y[3]
        } : (y = eA.rgba.exec(C)) ? {
          r: y[1],
          g: y[2],
          b: y[3],
          a: y[4]
        } : (y = eA.hsl.exec(C)) ? {
          h: y[1],
          s: y[2],
          l: y[3]
        } : (y = eA.hsla.exec(C)) ? {
          h: y[1],
          s: y[2],
          l: y[3],
          a: y[4]
        } : (y = eA.hsv.exec(C)) ? {
          h: y[1],
          s: y[2],
          v: y[3]
        } : (y = eA.hsva.exec(C)) ? {
          h: y[1],
          s: y[2],
          v: y[3],
          a: y[4]
        } : (y = eA.hex8.exec(C)) ? {
          r: rA(y[1]),
          g: rA(y[2]),
          b: rA(y[3]),
          a: iA(y[4]),
          format: U ? "name" : "hex8"
        } : (y = eA.hex6.exec(C)) ? {
          r: rA(y[1]),
          g: rA(y[2]),
          b: rA(y[3]),
          format: U ? "name" : "hex"
        } : (y = eA.hex4.exec(C)) ? {
          r: rA(y[1] + "" + y[1]),
          g: rA(y[2] + "" + y[2]),
          b: rA(y[3] + "" + y[3]),
          a: iA(y[4] + "" + y[4]),
          format: U ? "name" : "hex8"
        } : (y = eA.hex3.exec(C)) ? {
          r: rA(y[1] + "" + y[1]),
          g: rA(y[2] + "" + y[2]),
          b: rA(y[3] + "" + y[3]),
          format: U ? "name" : "hex"
        } : false;
      }
      function aA(C) {
        var U, y;
        return C = C || {
          level: "AA",
          size: "small"
        }, U = (C.level || "AA").toUpperCase(), y = (C.size || "small").toLowerCase(), U !== "AA" && U !== "AAA" && (U = "AA"), y !== "small" && y !== "large" && (y = "small"), {
          level: U,
          size: y
        };
      }
      A.exports ? A.exports = l : window.tinycolor = l;
    })(Math);
  })(Ad);
  var oC = Ad.exports;
  const re = Na(oC);
  var tr = function() {
    return tr = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, tr.apply(this, arguments);
  }, iC = function(A, e, t) {
    if (t || arguments.length === 2) for (var r = 0, n = e.length, o; r < n; r++) (o || !(r in e)) && (o || (o = Array.prototype.slice.call(e, 0, r)), o[r] = e[r]);
    return A.concat(o || Array.prototype.slice.call(e));
  }, aC = function(A) {
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
    function t(L) {
      var $ = new Error(A + ": " + L);
      throw $;
    }
    function r(L) {
      A = A.substr(L);
    }
    function n(L) {
      var $ = /^[\n\r\t\s]+/.exec(A);
      $ && r($[0].length);
      var _ = L.exec(A);
      return _ && r(_[0].length), _;
    }
    function o(L) {
      var $ = L(), _ = [];
      if ($) for (_.push($); n(e.comma); ) $ = L(), $ ? _.push($) : t("One extra comma");
      return _;
    }
    function i(L, $, _) {
      var Y = n($);
      if (Y) return {
        type: L,
        value: Y[_]
      };
    }
    function a() {
      var L = i("hex", e.hexColor, 1);
      if (L == null ? void 0 : L.value) {
        var $ = re(L == null ? void 0 : L.value).toRgb(), _ = $.r, Y = $.g, uA = $.b, iA = $.a;
        return {
          value: "rgba(".concat(_, ", ").concat(Y, ", ").concat(uA, ", ").concat(iA, ")")
        };
      }
    }
    var s = function(L) {
      var $ = St(L == null ? void 0 : L[0]);
      return {
        value: "".concat($ ? "RGBA" : "rgba", "(").concat(o(X), ")")
      };
    };
    function l(L, $) {
      var _ = n(L);
      if (_) {
        n(e.startCall) || t("Missing (");
        var Y = $(_);
        return n(e.endCall) || t("Missing )"), Y;
      }
    }
    function c() {
      return l(e.hslColor, nA);
    }
    function u() {
      return l(e.rgbaColor, s);
    }
    function d() {
      return l(e.rgbColor, j);
    }
    function g() {
      var L = i("literal", e.literalColor, 0);
      if (L == null ? void 0 : L.value) {
        var $ = re(L == null ? void 0 : L.value).toRgb(), _ = $.r, Y = $.g, uA = $.b, iA = $.a;
        return {
          value: "rgba(".concat(_, ", ").concat(Y, ", ").concat(uA, ", ").concat(iA, ")")
        };
      }
    }
    function B() {
      return l(e.hsvColor, M);
    }
    function p() {
      return a() || c() || u() || d() || g() || B();
    }
    function b() {
      var L, $ = p();
      return $ || t("Expected color definition"), $.left = parseInt((L = AA()) === null || L === void 0 ? void 0 : L.value), $;
    }
    function h(L, $, _) {
      return l($, function() {
        var Y = _();
        return Y && (n(e.comma) || t("Missing comma before color stops")), {
          type: L,
          orientation: Y,
          colorStops: o(b)
        };
      });
    }
    function F() {
      return v() || I();
    }
    function m() {
      return h("linear-gradient", e.linearGradient, F) || h("repeating-linear-gradient", e.repeatingLinearGradient, F) || h("radial-gradient", e.radialGradient, x) || h("repeating-radial-gradient", e.repeatingRadialGradient, x);
    }
    function Q() {
      return o(m);
    }
    function E() {
      var L, $ = Q();
      A.length > 0 && t("Invalid input not EOF");
      var _ = $[0], Y = (L = _ == null ? void 0 : _.colorStops) === null || L === void 0 ? void 0 : L.filter(function(iA) {
        return St(iA.value);
      }).length, uA = function() {
        if (Y > 0) return _;
        var iA = function(eA, J) {
          return J === 0 ? ai(eA) : cn(eA);
        };
        return tr(tr({}, _), {
          colorStops: _.colorStops.map(function(eA, J) {
            return tr(tr({}, eA), {
              value: iA(eA, J)
            });
          })
        });
      };
      return uA();
    }
    function v() {
      return i("directional", e.sideOrCorner, 1);
    }
    function I() {
      return i("angular", e.angleValue, 1);
    }
    function x() {
      var L, $ = H(), _;
      return $ && (L = [], L.push($), _ = A, n(e.comma) && ($ = H(), $ ? L.push($) : A = _)), L;
    }
    function H() {
      var L = T() || O();
      if (L) L.at = V();
      else {
        var $ = R();
        if ($) {
          L = $;
          var _ = V();
          _ && (L.at = _);
        } else {
          var Y = K();
          Y && (L = {
            type: "default-radial",
            at: Y
          });
        }
      }
      return L;
    }
    function f() {
      return i("px", e.pixelValue, 1) || i("em", e.emValue, 1);
    }
    function T() {
      var L = i("shape", /^(circle)/i, 0);
      return L && (L.style = f() || R()), L;
    }
    function O() {
      var L = i("shape", /^(ellipse)/i, 0);
      return L && (L.style = AA() || R()), L;
    }
    function R() {
      return i("extent-keyword", e.extentKeywords, 1);
    }
    function V() {
      if (i("position", /^at/, 0)) {
        var L = K();
        return L || t("Missing positioning value"), L;
      }
    }
    function K() {
      var L = D();
      if (L.x || L.y) return {
        type: "position",
        value: L
      };
    }
    function D() {
      return {
        x: AA(),
        y: AA()
      };
    }
    function X() {
      return n(e.number)[1];
    }
    var nA = function(L) {
      var $ = St(L == null ? void 0 : L[0]), _ = o(X), Y = re({
        h: _[0],
        s: _[1],
        l: _[2],
        a: _[3] || 1
      }).toRgb(), uA = Y.r, iA = Y.g, eA = Y.b, J = Y.a;
      return {
        value: "".concat($ ? "RGBA" : "rgba", "(").concat(uA, ", ").concat(iA, ", ").concat(eA, ", ").concat(J, ")")
      };
    }, M = function(L) {
      var $ = St(L == null ? void 0 : L[0]), _ = o(X), Y = re({
        h: _[0],
        s: _[1],
        v: _[2],
        a: _[3] || 1
      }).toRgb(), uA = Y.r, iA = Y.g, eA = Y.b, J = Y.a;
      return {
        value: "".concat($ ? "RGBA" : "rgba", "(").concat(uA, ", ").concat(iA, ", ").concat(eA, ", ").concat(J, ")")
      };
    }, j = function(L) {
      var $ = St(L == null ? void 0 : L[0]), _ = n(e.spacedRgbColor), Y = _ || iC([
        null
      ], o(X), true), uA = Y[1], iA = Y[2], eA = Y[3], J = Y[4], oA = J === void 0 ? 1 : J;
      return {
        value: "".concat($ ? "RGBA" : "rgba", "(").concat(uA, ", ").concat(iA, ", ").concat(eA, ", ").concat(oA, ")")
      };
    };
    function AA() {
      return i("%", e.percentageValue, 1) || rA() || f();
    }
    function rA() {
      return i("position-keyword", e.positionKeywords, 1);
    }
    return E();
  }, cn = function(A) {
    return A.value.toLowerCase();
  }, ai = function(A) {
    return A.value.toUpperCase();
  }, sC = function(A, e, t) {
    var r = A == null ? void 0 : A.includes("gradient");
    if (r) {
      var n = A == null ? void 0 : A.includes("conic"), o = n ? t : A;
      n && console.log("Sorry we cant handle conic gradients yet");
      var i = aC(o);
      return i == null ? void 0 : i.colorStops;
    } else {
      var o = A || e;
      return [
        {
          value: o
        }
      ];
    }
  }, lr = function(A, e, t) {
    return isNaN(A) || A < e ? e : A > t ? t : A;
  }, Ge = function(A) {
    return Math.round(A);
  }, lo = function() {
    return lo = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, lo.apply(this, arguments);
  }, ed = function(A) {
    var e = A.target.parentNode.getBoundingClientRect(), t = A.target.className, r = t === "c-resize ps-rl" ? 15 : 0;
    return {
      offsetLeft: (e == null ? void 0 : e.x) + r,
      offsetTop: e == null ? void 0 : e.y,
      clientWidth: e == null ? void 0 : e.width,
      clientHeight: e == null ? void 0 : e.height
    };
  };
  function cr(A, e) {
    var t = ed(A), r = t.offsetLeft, n = t.clientWidth, o = A.clientX - r - e / 2, i = n - 18, a = lr(o, 0, i);
    return Math.round(a / (i / 100));
  }
  function lC(A, e, t, r, n) {
    var o = A * t - n / 2, i = (100 - e) / 100 * r - n / 2;
    return [
      o,
      i
    ];
  }
  var cC = function(A) {
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
  function uC(A, e) {
    var t = ed(A), r = t.offsetLeft, n = t.offsetTop, o = t.clientWidth, i = t.clientHeight, a = cC(A), s = a.clientX, l = a.clientY, c = function() {
      var d = s - r - e / 2;
      return lr(d, -9, o - 10);
    }, u = function() {
      var d = l - n - e / 2;
      return lr(d, -9, i - 10);
    };
    return [
      c(),
      u()
    ];
  }
  var St = function(A) {
    var e;
    return (A == null ? void 0 : A[0]) === ((e = A == null ? void 0 : A[0]) === null || e === void 0 ? void 0 : e.toUpperCase());
  }, td = function(A) {
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
  }, dC = function(A) {
    var e, t, r, n, o;
    if (typeof A == "string") return A;
    if (!((e = A == null ? void 0 : A.type) === null || e === void 0) && e.includes("gradient")) {
      var i = (t = A == null ? void 0 : A.colorStops) === null || t === void 0 ? void 0 : t.sort(function(d, g) {
        return (d == null ? void 0 : d.left) - (g == null ? void 0 : g.left);
      }), a = (r = i == null ? void 0 : i.map(function(d) {
        return "".concat(d == null ? void 0 : d.value, " ").concat(d == null ? void 0 : d.left, "%");
      })) === null || r === void 0 ? void 0 : r.join(", "), s = A == null ? void 0 : A.type, l = td((n = A == null ? void 0 : A.orientation) === null || n === void 0 ? void 0 : n.value), c = s === "linear-gradient" ? "".concat(l, "deg") : "circle";
      return "".concat(s, "(").concat(c, ", ").concat(a, ")");
    } else {
      var u = ((o = A == null ? void 0 : A.colorStops[0]) === null || o === void 0 ? void 0 : o.value) || "rgba(175, 51, 242, 1)";
      return u;
    }
  }, fC = function(A, e) {
    var t = A == null ? void 0 : A.map(function(o, i) {
      return lo(lo({}, o), {
        index: i
      });
    }), r = t == null ? void 0 : t.find(function(o) {
      return St(o.value);
    }), n = r || t[0];
    return {
      currentColor: (n == null ? void 0 : n.value) || e,
      selectedColor: (n == null ? void 0 : n.index) || 0,
      currentLeft: (n == null ? void 0 : n.left) || 0
    };
  }, gC = function(A) {
    var e, t = A == null ? void 0 : A.split(",")[0], r = (e = t == null ? void 0 : t.split("(")[1]) === null || e === void 0 ? void 0 : e.replace("deg", "");
    return td(r);
  }, BC = function(A) {
    var e = A == null ? void 0 : A.includes("gradient"), t = A == null ? void 0 : A.split("(")[0], r = gC(A), n = t === "linear-gradient" ? "".concat(r, "deg") : "circle";
    return {
      degrees: r,
      degreeStr: n,
      isGradient: e,
      gradientType: t
    };
  }, de = function() {
    return de = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, de.apply(this, arguments);
  }, pC = function(A, e, t) {
    if (t || arguments.length === 2) for (var r = 0, n = e.length, o; r < n; r++) (o || !(r in e)) && (o || (o = Array.prototype.slice.call(e, 0, r)), o[r] = e[r]);
    return A.concat(o || Array.prototype.slice.call(e));
  }, rd = w.createContext(null);
  function hC(A) {
    var e, t, r, n, o = A.value, i = A.children, a = A.onChange, s = A.isDarkMode, l = A.squareWidth, c = A.hideOpacity, u = A.showHexAlpha, d = A.squareHeight, g = A.passedConfig, B = A.defaultStyles, p = A.pickerIdSuffix, b = {
      barSize: (e = g.barSize) !== null && e !== void 0 ? e : yn.barSize,
      crossSize: (t = g.crossSize) !== null && t !== void 0 ? t : yn.crossSize,
      defaultColor: (r = g.defaultColor) !== null && r !== void 0 ? r : yn.defaultColor,
      defaultGradient: (n = g.defaultGradient) !== null && n !== void 0 ? n : yn.defaultGradient
    }, h = sC(o, b.defaultColor, b.defaultGradient), F = BC(o), m = F.degrees, Q = F.degreeStr, E = F.isGradient, v = F.gradientType, I = fC(h, b.defaultGradient), x = I.currentColor, H = I.selectedColor, f = I.currentLeft, T = w.useState("rgb"), O = T[0], R = T[1], V = w.useState({}), K = V[0], D = V[1], X = re(x), nA = X.toRgb(), M = X.toHsv(), j = w.useState(de(de({}, nA), M)), AA = j[0], rA = j[1];
    w.useEffect(function() {
      (M == null ? void 0 : M.s) === 0 ? rA(de(de(de({}, nA), M), {
        h: AA == null ? void 0 : AA.h
      })) : rA(de(de({}, nA), M));
    }, [
      x
    ]);
    var L = function(iA) {
      var eA = iA.sort(function(aA, C) {
        return aA.left - C.left;
      }), J = eA == null ? void 0 : eA.map(function(aA) {
        return "".concat(aA == null ? void 0 : aA.value, " ").concat(aA.left, "%");
      }), oA = "".concat(v, "(").concat(Q, ", ").concat(J.join(", "), ")");
      D(de(de({}, K), {
        gradient: oA
      })), a(oA);
    }, $ = function(iA, eA) {
      var J = h == null ? void 0 : h.filter(function(aA) {
        return !St(aA.value);
      }), oA = pC([
        {
          value: iA.toUpperCase(),
          left: eA ?? f
        }
      ], J, true);
      L(oA);
    }, _ = function(iA) {
      E ? $(iA) : (D(de(de({}, K), {
        color: iA
      })), a(iA));
    }, Y = function() {
      if ((h == null ? void 0 : h.length) > 2) {
        var iA = h == null ? void 0 : h.map(function(J, oA) {
          return de(de({}, J), {
            value: oA === H - 1 ? ai(J) : cn(J)
          });
        }), eA = iA == null ? void 0 : iA.filter(function(J, oA) {
          return oA !== H;
        });
        L(eA);
      }
    }, uA = {
      hc: AA,
      setHc: rA,
      value: o,
      colors: h,
      config: b,
      degrees: m,
      onChange: a,
      previous: K,
      inputType: O,
      tinyColor: X,
      isDarkMode: s,
      isGradient: E,
      squareWidth: l,
      hideOpacity: c,
      currentLeft: f,
      deletePoint: Y,
      showHexAlpha: u,
      squareHeight: d,
      setInputType: R,
      gradientType: v,
      handleChange: _,
      currentColor: x,
      selectedColor: H,
      defaultStyles: B,
      handleGradient: $,
      pickerIdSuffix: p,
      createGradientStr: L
    };
    return S.createElement(rd.Provider, {
      value: uA
    }, i);
  }
  function yA() {
    var A = w.useContext(rd);
    if (!A) throw new Error("usePicker has to be used within <PickerContext.Provider>");
    return A;
  }
  var yn = {
    barSize: 18,
    crossSize: 18,
    defaultColor: "rgba(175, 51, 242, 1)",
    defaultGradient: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"
  }, wC = function(A, e) {
    w.useEffect(function() {
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
  }, CC = function(A, e, t, r) {
    w.useEffect(function() {
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
  }, mC = function(A, e, t, r) {
    w.useEffect(function() {
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
  }, vC = function(A, e, t, r) {
    w.useEffect(function() {
      var n, o = (n = A == null ? void 0 : A.current) === null || n === void 0 ? void 0 : n.getContext("2d", {
        willReadFrequently: true
      });
      if (o) {
        o.rect(0, 0, r, 14);
        for (var i = o.createLinearGradient(0, 0, r, 0), a = 0; a <= 100; a += 10) {
          var s = re({
            h: e,
            s: t,
            v: a
          });
          i.addColorStop(a / 100, s.toHslString());
        }
        o.fillStyle = i, o.fill();
      }
    }, [
      A,
      e,
      t,
      r
    ]);
  }, co = function() {
    return co = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, co.apply(this, arguments);
  }, QC = function() {
    var A = w.useRef(null), e = yA(), t = e.config, r = e.handleChange, n = e.squareWidth, o = e.hc, i = e.setHc, a = e.pickerIdSuffix, s = w.useState(false), l = s[0], c = s[1], u = t.barSize;
    wC(A, n);
    var d = function() {
      c(false);
    }, g = function() {
      c(true);
    }, B = function(h) {
      var F = cr(h, u) * 3.6, m = re({
        h: F,
        s: o == null ? void 0 : o.s,
        v: o == null ? void 0 : o.v
      }), Q = m.toRgb(), E = Q.r, v = Q.g, I = Q.b;
      r("rgba(".concat(E, ", ").concat(v, ", ").concat(I, ", ").concat(o.a, ")")), i(co(co({}, o), {
        h: F
      }));
    }, p = function(h) {
      l && B(h);
    }, b = function(h) {
      l || B(h);
    };
    return w.useEffect(function() {
      var h = function() {
        d();
      };
      return window.addEventListener("mouseup", h), function() {
        window.removeEventListener("mouseup", h);
      };
    }, []), S.createElement("div", {
      style: {
        height: 14,
        marginTop: 17,
        marginBottom: 4,
        cursor: "ew-resize",
        position: "relative"
      },
      onMouseMove: function(h) {
        return p(h);
      },
      id: "rbgcp-hue-wrap".concat(a)
    }, S.createElement("div", {
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
      onMouseDown: g,
      id: "rbgcp-hue-handle".concat(a)
    }), S.createElement("canvas", {
      ref: A,
      height: "14px",
      width: "".concat(n, "px"),
      onClick: function(h) {
        return b(h);
      },
      id: "rbgcp-hue-bar".concat(a),
      style: {
        borderRadius: 14,
        position: "relative",
        verticalAlign: "top"
      }
    }));
  };
  function yC(A, e, t) {
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
  var bC = function(A) {
    var e = A.c, t = A.m, r = A.y, n = A.k, o = 255 * (1 - e) * (1 - n), i = 255 * (1 - t) * (1 - n), a = 255 * (1 - r) * (1 - n);
    return {
      r: o,
      g: i,
      b: a
    };
  }, FC = function(A) {
    return typeof A != "number" ? "FF" : A < 0 ? "00" : A > 1 ? "FF" : Math.round(A * 255).toString(16).padStart(2, "0").toUpperCase();
  }, Se = function() {
    return Se = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, Se.apply(this, arguments);
  }, Be = function(A) {
    var e = A.label, t = A.value, r = A.callback, n = A.max, o = n === void 0 ? 100 : n, i = A.hideOpacity, a = A.defaultStyles, s = A.pickerIdSuffix, l = w.useState(t), c = l[0], u = l[1], d = i ? "25%" : "20%";
    w.useEffect(function() {
      u(t);
    }, [
      t
    ]);
    var g = function(B) {
      var p = lr(parseFloat(B.target.value), 0, o);
      u(p), r(p);
    };
    return S.createElement("div", {
      style: {
        width: d,
        flexShrink: 1
      },
      id: "rbgcp-".concat(e, "-input-wrapper").concat(s)
    }, S.createElement("input", {
      value: c,
      onChange: function(B) {
        return g(B);
      },
      style: Se({}, a.rbgcpInput),
      id: "rbgcp-".concat(e, "-input").concat(s)
    }), S.createElement("div", {
      style: Se({}, a.rbgcpInputLabel)
    }, e));
  }, UC = function(A) {
    var e = A.opacity, t = A.tinyColor, r = A.showHexAlpha, n = A.handleChange, o = A.defaultStyles, i = A.pickerIdSuffix, a = w.useState(""), s = a[0], l = a[1], c = t.toHex(), u = w.useState(c), d = u[0], g = u[1];
    w.useEffect(function() {
      s !== "hex" && g(c);
    }, [
      t,
      s,
      c
    ]);
    var B = function() {
      l("hex");
    }, p = function() {
      l("");
    }, b = function(Q) {
      var E = re(Q.target.value);
      if (g(Q.target.value), E.isValid()) {
        var v = E.toRgb(), I = v.r, x = v.g, H = v.b, f = "rgba(".concat(I, ", ").concat(x, ", ").concat(H, ", ").concat(e, ")");
        n(f);
      }
    }, h = r ? "".concat(d).concat(FC(e)) : d, F = r ? "HEXA" : "HEX", m = r ? 88 : 76;
    return S.createElement("div", {
      style: {
        width: m,
        flexShrink: 0
      },
      id: "rbgcp-hex-input-wrapper".concat(i)
    }, S.createElement("input", {
      onBlur: p,
      onFocus: B,
      onChange: function(Q) {
        return b(Q);
      },
      value: h == null ? void 0 : h.toUpperCase(),
      id: "rbgcp-hex-input".concat(i),
      style: Se(Se({}, o.rbgcpInput), o.rbgcpHexInput)
    }), S.createElement("div", {
      style: Se({}, o.rbgcpInputLabel)
    }, F));
  }, EC = function(A) {
    var e = A.hc, t = A.hideOpacity, r = A.handleChange, n = A.defaultStyles, o = A.pickerIdSuffix, i = function(a) {
      var s = a.r, l = a.g, c = a.b;
      r("rgba(".concat(s, ", ").concat(l, ", ").concat(c, ", ").concat(e == null ? void 0 : e.a, ")"));
    };
    return S.createElement(S.Fragment, null, S.createElement(Be, {
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
    }), S.createElement(Be, {
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
    }), S.createElement(Be, {
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
  }, SC = function(A) {
    var e = A.hc, t = A.setHc, r = A.tinyColor, n = A.hideOpacity, o = A.handleChange, i = A.defaultStyles, a = A.pickerIdSuffix, s = r.toHsl(), l = s.s, c = s.l, u = function(g, B, p) {
      var b = re({
        h: g,
        s: B,
        l: p
      }).toRgb(), h = b.r, F = b.g, m = b.b;
      o("rgba(".concat(h, ", ").concat(F, ", ").concat(m, ", ").concat(e == null ? void 0 : e.a, ")")), t(Se(Se({}, e), {
        h: g
      }));
    }, d = function(g) {
      var B = re(g).toRgb(), p = B.r, b = B.g, h = B.b;
      o("rgba(".concat(p, ", ").concat(b, ", ").concat(h, ", ").concat(e == null ? void 0 : e.a, ")"));
    };
    return S.createElement(S.Fragment, null, S.createElement(Be, {
      label: "H",
      max: 360,
      value: Ge(e == null ? void 0 : e.h),
      hideOpacity: n,
      defaultStyles: i,
      pickerIdSuffix: a,
      callback: function(g) {
        return u(g, l, c);
      }
    }), S.createElement(Be, {
      label: "S",
      value: Ge(l * 100),
      hideOpacity: n,
      defaultStyles: i,
      pickerIdSuffix: a,
      callback: function(g) {
        return d({
          h: e == null ? void 0 : e.h,
          s: g,
          l: c
        });
      }
    }), S.createElement(Be, {
      label: "L",
      value: Ge(c * 100),
      hideOpacity: n,
      defaultStyles: i,
      pickerIdSuffix: a,
      callback: function(g) {
        return d({
          h: e == null ? void 0 : e.h,
          s: l,
          l: g
        });
      }
    }));
  }, IC = function(A) {
    var e = A.hc, t = A.setHc, r = A.hideOpacity, n = A.handleChange, o = A.defaultStyles, i = A.pickerIdSuffix, a = function(l, c, u) {
      var d = re({
        h: l,
        s: c,
        v: u
      }).toRgb(), g = d.r, B = d.g, p = d.b;
      n("rgba(".concat(g, ", ").concat(B, ", ").concat(p, ", ").concat(e == null ? void 0 : e.a, ")")), t(Se(Se({}, e), {
        h: l
      }));
    }, s = function(l) {
      var c = re(l).toRgb(), u = c.r, d = c.g, g = c.b;
      n("rgba(".concat(u, ", ").concat(d, ", ").concat(g, ", ").concat(e == null ? void 0 : e.a, ")"));
    };
    return S.createElement(S.Fragment, null, S.createElement(Be, {
      label: "H",
      max: 360,
      value: Ge(e == null ? void 0 : e.h),
      hideOpacity: r,
      defaultStyles: o,
      pickerIdSuffix: i,
      callback: function(l) {
        return a(l, e == null ? void 0 : e.s, e == null ? void 0 : e.v);
      }
    }), S.createElement(Be, {
      label: "S",
      hideOpacity: r,
      value: Ge((e == null ? void 0 : e.s) * 100),
      defaultStyles: o,
      pickerIdSuffix: i,
      callback: function(l) {
        return s({
          h: e == null ? void 0 : e.h,
          s: l,
          v: e == null ? void 0 : e.v
        });
      }
    }), S.createElement(Be, {
      label: "V",
      hideOpacity: r,
      value: Ge((e == null ? void 0 : e.v) * 100),
      defaultStyles: o,
      pickerIdSuffix: i,
      callback: function(l) {
        return s({
          h: e == null ? void 0 : e.h,
          s: e == null ? void 0 : e.s,
          v: l
        });
      }
    }));
  }, xC = function(A) {
    var e = A.hc, t = A.hideOpacity, r = A.handleChange, n = A.defaultStyles, o = A.pickerIdSuffix, i = yC(e == null ? void 0 : e.r, e == null ? void 0 : e.g, e == null ? void 0 : e.b), a = i.c, s = i.m, l = i.y, c = i.k, u = function(d) {
      var g = bC(d), B = g.r, p = g.g, b = g.b;
      r("rgba(".concat(B, ", ").concat(p, ", ").concat(b, ", ").concat(e == null ? void 0 : e.a, ")"));
    };
    return S.createElement(S.Fragment, null, S.createElement(Be, {
      label: "C",
      value: Ge(a * 100),
      hideOpacity: t,
      defaultStyles: n,
      pickerIdSuffix: o,
      callback: function(d) {
        return u({
          c: d / 100,
          m: s,
          y: l,
          k: c
        });
      }
    }), S.createElement(Be, {
      label: "M",
      value: Ge(s * 100),
      hideOpacity: t,
      defaultStyles: n,
      pickerIdSuffix: o,
      callback: function(d) {
        return u({
          c: a,
          m: d / 100,
          y: l,
          k: c
        });
      }
    }), S.createElement(Be, {
      label: "Y",
      value: Ge(l * 100),
      hideOpacity: t,
      defaultStyles: n,
      pickerIdSuffix: o,
      callback: function(d) {
        return u({
          c: a,
          m: s,
          y: d / 100,
          k: c
        });
      }
    }), S.createElement(Be, {
      label: "K",
      value: Ge(c * 100),
      hideOpacity: t,
      defaultStyles: n,
      pickerIdSuffix: o,
      callback: function(d) {
        return u({
          c: a,
          m: s,
          y: l,
          k: d / 100
        });
      }
    }));
  }, HC = function() {
    var A = yA(), e = A.hc, t = A.setHc, r = A.inputType, n = A.tinyColor, o = A.hideOpacity, i = A.showHexAlpha, a = A.handleChange, s = A.defaultStyles, l = A.pickerIdSuffix;
    return S.createElement("div", {
      style: Se({
        columnGap: 6,
        paddingTop: 14,
        display: "flex",
        justifyContent: "space-between"
      }, s.rbgcpInputsWrap),
      id: "rbgcp-inputs-wrap".concat(l)
    }, r !== "cmyk" && S.createElement(UC, {
      opacity: e == null ? void 0 : e.a,
      tinyColor: n,
      showHexAlpha: i,
      handleChange: a,
      defaultStyles: s,
      pickerIdSuffix: l
    }), r === "hsl" && S.createElement(SC, {
      hc: e,
      setHc: t,
      tinyColor: n,
      hideOpacity: o,
      handleChange: a,
      defaultStyles: s,
      pickerIdSuffix: l
    }), r === "rgb" && S.createElement(EC, {
      hc: e,
      hideOpacity: o,
      handleChange: a,
      defaultStyles: s,
      pickerIdSuffix: l
    }), r === "hsv" && S.createElement(IC, {
      hc: e,
      setHc: t,
      hideOpacity: o,
      handleChange: a,
      defaultStyles: s,
      pickerIdSuffix: l
    }), r === "cmyk" && S.createElement(xC, {
      hc: e,
      hideOpacity: o,
      handleChange: a,
      defaultStyles: s,
      pickerIdSuffix: l
    }), !o && S.createElement(Be, {
      label: "A",
      hideOpacity: o,
      defaultStyles: s,
      value: Math.round((e == null ? void 0 : e.a) * 100),
      pickerIdSuffix: l,
      callback: function(c) {
        return a("rgba(".concat(e == null ? void 0 : e.r, ", ").concat(e == null ? void 0 : e.g, ", ").concat(e == null ? void 0 : e.b, ", ").concat(c / 100, ")"));
      }
    }));
  }, TC = function(A, e, t, r) {
    w.useEffect(function() {
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
  }, nd = "Expected a function", Ol = NaN, LC = "[object Symbol]", kC = /^\s+|\s+$/g, RC = /^[-+]0x[0-9a-f]+$/i, KC = /^0b[01]+$/i, OC = /^0o[0-7]+$/i, DC = parseInt, MC = typeof fn == "object" && fn && fn.Object === Object && fn, PC = typeof self == "object" && self && self.Object === Object && self, NC = MC || PC || Function("return this")(), GC = Object.prototype, _C = GC.toString, VC = Math.max, $C = Math.min, Si = function() {
    return NC.Date.now();
  };
  function WC(A, e, t) {
    var r, n, o, i, a, s, l = 0, c = false, u = false, d = true;
    if (typeof A != "function") throw new TypeError(nd);
    e = Dl(e) || 0, uo(t) && (c = !!t.leading, u = "maxWait" in t, o = u ? VC(Dl(t.maxWait) || 0, e) : o, d = "trailing" in t ? !!t.trailing : d);
    function g(v) {
      var I = r, x = n;
      return r = n = void 0, l = v, i = A.apply(x, I), i;
    }
    function B(v) {
      return l = v, a = setTimeout(h, e), c ? g(v) : i;
    }
    function p(v) {
      var I = v - s, x = v - l, H = e - I;
      return u ? $C(H, o - x) : H;
    }
    function b(v) {
      var I = v - s, x = v - l;
      return s === void 0 || I >= e || I < 0 || u && x >= o;
    }
    function h() {
      var v = Si();
      if (b(v)) return F(v);
      a = setTimeout(h, p(v));
    }
    function F(v) {
      return a = void 0, d && r ? g(v) : (r = n = void 0, i);
    }
    function m() {
      a !== void 0 && clearTimeout(a), l = 0, r = s = n = a = void 0;
    }
    function Q() {
      return a === void 0 ? i : F(Si());
    }
    function E() {
      var v = Si(), I = b(v);
      if (r = arguments, n = this, s = v, I) {
        if (a === void 0) return B(s);
        if (u) return a = setTimeout(h, e), g(s);
      }
      return a === void 0 && (a = setTimeout(h, e)), i;
    }
    return E.cancel = m, E.flush = Q, E;
  }
  function XC(A, e, t) {
    var r = true, n = true;
    if (typeof A != "function") throw new TypeError(nd);
    return uo(t) && (r = "leading" in t ? !!t.leading : r, n = "trailing" in t ? !!t.trailing : n), WC(A, e, {
      leading: r,
      maxWait: e,
      trailing: n
    });
  }
  function uo(A) {
    var e = typeof A;
    return !!A && (e == "object" || e == "function");
  }
  function jC(A) {
    return !!A && typeof A == "object";
  }
  function JC(A) {
    return typeof A == "symbol" || jC(A) && _C.call(A) == LC;
  }
  function Dl(A) {
    if (typeof A == "number") return A;
    if (JC(A)) return Ol;
    if (uo(A)) {
      var e = typeof A.valueOf == "function" ? A.valueOf() : A;
      A = uo(e) ? e + "" : e;
    }
    if (typeof A != "string") return A === 0 ? A : +A;
    A = A.replace(kC, "");
    var t = KC.test(A);
    return t || OC.test(A) ? DC(A.slice(2), t ? 2 : 8) : RC.test(A) ? Ol : +A;
  }
  var YC = XC;
  const zC = Na(YC);
  var It = function() {
    return It = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, It.apply(this, arguments);
  }, ZC = function() {
    var A, e, t = yA(), r = t.hc, n = t.config, o = t.squareWidth, i = t.squareHeight, a = t.handleChange, s = t.defaultStyles, l = t.pickerIdSuffix, c = n.crossSize, u = w.useState(false), d = u[0], g = u[1], B = w.useRef(null), p = lC(r == null ? void 0 : r.s, (r == null ? void 0 : r.v) * 100, o, i, c), b = p[0], h = p[1], F = w.useState({
      x: b,
      y: h
    }), m = F[0], Q = F[1];
    TC(B, r == null ? void 0 : r.h, o, i), w.useEffect(function() {
      d || Q({
        x: (r == null ? void 0 : r.v) === 0 ? m.x : b,
        y: h
      });
    }, [
      b,
      h
    ]);
    var E = function(T) {
      var O = zC(function() {
        var R = uC(T, c), V = R[0], K = R[1];
        if (V && K) {
          var D = Math.min(V + c / 2, o - 1), X = Math.min(K + c / 2, i - 1), nA = D / o * 100, M = 100 - X / i * 100;
          Q({
            x: M === 0 ? m == null ? void 0 : m.x : V,
            y: K
          });
          var j = re("hsva(".concat(r == null ? void 0 : r.h, ", ").concat(nA, "%, ").concat(M, "%, ").concat(r == null ? void 0 : r.a, ")"));
          a(j.toRgbString());
        }
      }, 250);
      O();
    }, v = function() {
      g(false);
    }, I = function(T) {
      d && E(T);
    }, x = function(T) {
      d || E(T);
    }, H = function() {
      g(true);
    }, f = function(T) {
      g(true), E(T);
    };
    return w.useEffect(function() {
      var T = function() {
        v();
      };
      return window.addEventListener("mouseup", T), function() {
        window.removeEventListener("mouseup", T);
      };
    }, []), S.createElement("div", {
      style: {
        position: "relative",
        marginBottom: 12
      },
      id: "rbgcp-square-wrapper".concat(l)
    }, S.createElement("div", {
      onMouseUp: v,
      onTouchEnd: v,
      onMouseDown: f,
      onTouchStart: f,
      onMouseMove: function(T) {
        return I(T);
      },
      id: "rbgcp-square".concat(l),
      style: {
        position: "relative",
        cursor: "ew-cross"
      }
    }, S.createElement("div", {
      style: It(It(It({}, s.rbgcpHandle), {
        transform: "translate(".concat((A = m == null ? void 0 : m.x) !== null && A !== void 0 ? A : 0, "px, ").concat((e = m == null ? void 0 : m.y) !== null && e !== void 0 ? e : 0, "px)")
      }), d ? {
        transition: ""
      } : {}),
      onMouseDown: H,
      id: "rbgcp-square-handle".concat(l)
    }), S.createElement("div", {
      style: It(It({}, s.rbgcpCanvasWrapper), {
        height: i
      }),
      id: "rbgcp-square-canvas-wrapper".concat(l),
      onClick: function(T) {
        return x(T);
      }
    }, S.createElement("canvas", {
      ref: B,
      width: "".concat(o, "px"),
      height: "".concat(i, "px"),
      id: "rbgcp-square-canvas".concat(l)
    }))));
  }, ut = function() {
    return ut = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, ut.apply(this, arguments);
  }, qC = function() {
    var A = yA(), e = A.config, t = A.hc, r = t === void 0 ? {} : t, n = A.squareWidth, o = A.handleChange, i = A.defaultStyles, a = A.pickerIdSuffix, s = w.useState(false), l = s[0], c = s[1], u = r.r, d = r.g, g = r.b, B = "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(".concat(u, ",").concat(d, ",").concat(g, ",.5) 100%)"), p = e.barSize, b = function() {
      c(false);
    }, h = function() {
      c(true);
    }, F = function(v) {
      var I = cr(v, p) / 100, x = "rgba(".concat(u, ", ").concat(d, ", ").concat(g, ", ").concat(I, ")");
      o(x);
    }, m = function(v) {
      l && F(v);
    }, Q = function(v) {
      l || F(v);
    }, E = n - 18;
    return w.useEffect(function() {
      var v = function() {
        b();
      };
      return window.addEventListener("mouseup", v), function() {
        window.removeEventListener("mouseup", v);
      };
    }, []), S.createElement("div", {
      onMouseDown: h,
      onMouseMove: function(v) {
        return m(v);
      },
      style: {
        height: 14,
        marginTop: 17,
        marginBottom: 4,
        cursor: "ew-resize",
        position: "relative"
      },
      id: "rbgcp-opacity-wrapper".concat(a)
    }, S.createElement("div", {
      id: "rbgcp-opacity-checkered-bg".concat(a),
      style: ut(ut({}, i.rbgcpCheckered), {
        width: "100%",
        height: 14
      })
    }), S.createElement("div", {
      id: "rbgcp-opacity-handle".concat(a),
      style: ut(ut({}, i.rbgcpHandle), {
        left: E * (r == null ? void 0 : r.a),
        top: -2
      })
    }), S.createElement("div", {
      style: ut(ut({}, i.rbgcpOpacityOverlay), {
        background: B
      }),
      id: "rbgcp-opacity-overlay".concat(a),
      onClick: function(v) {
        return Q(v);
      }
    }));
  }, Am = {
    CONTROLS: {
      SOLID: "Solid",
      GRADIENT: "Gradient"
    }
  }, em = [
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
  ], tm = function(A) {
    var e = A.presets, t = e === void 0 ? [] : e, r = yA(), n = r.value, o = r.onChange, i = r.isDarkMode, a = r.squareWidth, s = r.handleChange, l = r.pickerIdSuffix, c = function() {
      return (t == null ? void 0 : t.length) > 0 ? t == null ? void 0 : t.slice(0, 18) : em;
    }, u = function(g) {
      (g == null ? void 0 : g.includes("gradient")) ? o(g) : s(g);
    }, d = function(g) {
      if (!g || i) return "";
      var B = g == null ? void 0 : g.replace(" ", "");
      return B === "rgba(255,255,255,1)" ? "1px solid #96959c" : "";
    };
    return S.createElement("div", {
      style: {
        marginTop: 14,
        display: "flex",
        justifyContent: "space-between"
      },
      id: "rbgcp-footer-wrapper".concat(l)
    }, S.createElement("div", {
      style: {
        width: 50,
        height: 50,
        flexShrink: 0,
        borderRadius: 6,
        background: n,
        border: d(n)
      },
      id: "rbgcp-preview".concat(l)
    }), S.createElement("div", {
      style: {
        rowGap: 3,
        display: "flex",
        flexWrap: "wrap",
        width: a - 57,
        justifyContent: "space-between"
      },
      id: "rbgcp-presets-wrapper".concat(l)
    }, c().map(function(g, B) {
      return S.createElement("div", {
        key: "".concat(g, "-").concat(B),
        id: "rbgcp-preset-".concat(B, "-wrapper").concat(l),
        style: {
          width: "calc(100% / 9)",
          paddingLeft: 3
        }
      }, S.createElement("div", {
        style: {
          height: 23.5,
          width: "100%",
          background: g,
          borderRadius: 4,
          border: d(g)
        },
        onClick: function() {
          return u(g);
        },
        id: "rbgcp-preset-".concat(B).concat(l)
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
  }, rm = function() {
    var A = yA().defaultStyles, e = {
      fill: "none",
      strokeWidth: "1.8px"
    };
    return S.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 15
      }
    }, S.createElement("polyline", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: tA(tA({}, e), A.rbgcpControlIcon),
      points: "17.96 4.31 2.04 4.3 3.75 4.3 4.81 17.29 5.16 17.96 5.74 18.47 6.59 18.62 13.64 18.62 14.52 18.32 15.07 17.68 15.29 17.12 16.28 4.3 12.87 4.3 12.87 2.38 12.48 1.75 11.83 1.46 8.4 1.46 7.64 1.68 7.26 2.21 7.16 2.52 7.17 4.23"
    }));
  }, nm = function(A) {
    var e = A.color, t = yA().defaultStyles, r = e ?? "", n = {
      fill: "none",
      strokeWidth: "1.8px"
    };
    return S.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 14
      }
    }, S.createElement("polyline", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: tA(tA(tA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "0.9 12.73 0.9 19.1 7.27 19.1 0.9 19.1 19.1 0.9 12.73 0.9 19.1 0.9 19.1 7.27"
    }));
  }, om = function(A) {
    var e = A.color, t = yA().defaultStyles, r = e ?? "", n = {
      fill: "none",
      strokeMiterlimit: 10,
      strokeWidth: "1.8px"
    };
    return S.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 15
      }
    }, S.createElement("circle", {
      style: tA(tA(tA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      cx: "10",
      cy: "10",
      r: "9"
    }), S.createElement("circle", {
      style: tA(tA(tA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      cx: "10",
      cy: "10",
      r: "5"
    }));
  }, im = function(A) {
    var e = A.color, t = yA().defaultStyles, r = e ?? "", n = {
      fill: "none",
      strokeWidth: "1.8px"
    }, o = {
      strokeWidth: "1.8px"
    };
    return S.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 17
      }
    }, S.createElement("polyline", {
      fillRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: tA(tA(tA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "3.74 2.75 3.74 12.69 0.9 12.71 6.59 12.71"
    }), S.createElement("line", {
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
    }), S.createElement("polyline", {
      fillRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: tA(tA(tA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "10.1 17.25 10.1 7.31 12.95 7.29 7.26 7.29"
    }), S.createElement("line", {
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
    }), S.createElement("polyline", {
      fillRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: tA(tA(tA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "16.26 2.75 16.26 12.69 13.41 12.71 19.1 12.71"
    }), S.createElement("line", {
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
  }, am = function(A) {
    var e = A.color, t = yA().defaultStyles, r = e ?? "", n = {
      fill: "none",
      strokeWidth: "1.8px"
    };
    return S.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 17
      }
    }, S.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: tA(tA(tA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      d: "M6.35,2.72a4.85,4.85,0,0,1,1.86.16,7.94,7.94,0,0,1,.88.43,3.66,3.66,0,0,0,.85.49c.25,0,.58-.27.81-.39A8.25,8.25,0,0,1,11.7,3a4,4,0,0,1,1.79-.23,3.21,3.21,0,0,0-1.34.09,6.39,6.39,0,0,0-1.47.63c-.45.25-.7.3-.7.86s0,1.18,0,1.78c0,1.3,0,2.61,0,3.92h0v5.63a2.46,2.46,0,0,1,0,.47c-.07.28-.43.42-.7.57a5.29,5.29,0,0,1-2.94.61A9.3,9.3,0,0,0,8,17.15l1.09-.37.89-.52c.06,0,.48.21.56.25.32.14.64.27,1,.38a8.54,8.54,0,0,0,2.12.4"
    }), S.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: tA(tA(tA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      d: "M7.57,5.73C6,5.7,4.5,5.65,3,5.77a2.28,2.28,0,0,0-1.76.74A2.3,2.3,0,0,0,.94,7.83l0,3.82A4.73,4.73,0,0,0,1,12.9a1.64,1.64,0,0,0,.68,1,2.44,2.44,0,0,0,1,.27,25,25,0,0,0,4.74.09"
    }), S.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: tA(tA(tA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      d: "M12.43,14.32a44.12,44.12,0,0,0,4.6,0,2.24,2.24,0,0,0,1.76-.74,2.29,2.29,0,0,0,.27-1.32l0-3.81A4.81,4.81,0,0,0,19,7.15a1.62,1.62,0,0,0-.68-1,2.31,2.31,0,0,0-1-.28,26.8,26.8,0,0,0-4.74-.09"
    }));
  }, sm = function(A) {
    var e = A.color, t = yA().defaultStyles, r = e ?? "", n = {
      strokeMiterlimit: 10,
      strokeWidth: "0.5px"
    };
    return S.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 17
      }
    }, S.createElement("circle", {
      style: tA(tA({}, t.rbgcpControlIcon2), r && {
        fill: r
      }),
      cx: "9.36",
      cy: "5.07",
      r: "1.71"
    }), S.createElement("circle", {
      style: tA(tA({}, t.rbgcpControlIcon2), r && {
        fill: r
      }),
      cx: "13.93",
      cy: "6.91",
      r: "1.71"
    }), S.createElement("circle", {
      style: tA(tA({}, t.rbgcpControlIcon2), r && {
        fill: r
      }),
      cx: "5.8",
      cy: "7.55",
      r: "1.71"
    }), S.createElement("circle", {
      style: tA(tA({}, t.rbgcpControlIcon2), r && {
        fill: r
      }),
      cx: "5.45",
      cy: "12.04",
      r: "1.71"
    }), S.createElement("path", {
      style: tA(tA(tA(tA({}, n), t.rbgcpControlIcon), t.rbgcpControlIcon2), r && {
        fill: r,
        stroke: r
      }),
      d: "M19.1,10c0,3.58-2.12,2.94-4.06,2.35-1.15-.34-2.24-.67-2.77-.08-.68.78-.54,2.07-.39,3.33.2,1.79.39,3.5-1.88,3.5A9.1,9.1,0,1,1,19.1,10ZM10,18c.7,0,.74-.19.75-.2a2.67,2.67,0,0,0,.07-1.27c0-.19,0-.42-.06-.67-.06-.53-.13-1.15-.14-1.67a3.82,3.82,0,0,1,.8-2.63,2.14,2.14,0,0,1,1.45-.7,4.36,4.36,0,0,1,1.32.12c.39.08.8.21,1.16.32h0c.39.12.74.23,1.08.3.74.17,1,.1,1.13,0S18,11.32,18,10a8,8,0,1,0-8,8Z"
    }));
  }, lm = function(A) {
    var e = A.color, t = yA().defaultStyles, r = e ?? "", n = {
      fill: "none",
      strokeMiterlimit: 10,
      strokeWidth: "1.8px"
    };
    return S.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 15
      }
    }, S.createElement("polyline", {
      strokeLinecap: "round",
      style: tA(tA(tA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "13.86 2.01 1.7 16.99 18.77 16.99"
    }), S.createElement("polyline", {
      strokeLinecap: "round",
      style: tA(tA(tA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "10.96 16.38 10.96 16.38 10.74 15.7 10.44 14.97 10.06 14.21 9.72 13.63 9.21 12.89 8.85 12.44 8.41 11.95 7.91 11.45 7.51 11.1"
    }));
  }, cm = function() {
    var A = yA().defaultStyles;
    return S.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 20,
        marginRight: 1
      }
    }, S.createElement("path", {
      style: tA({}, A.rbgcpControlIcon2),
      d: "M2.39,8c-.63,0-1,.21-1,.63A.49.49,0,0,0,1.67,9a6.48,6.48,0,0,0,1.11.43A3,3,0,0,1,4,10.09a1.47,1.47,0,0,1,.35,1.09,1.75,1.75,0,0,1-.57,1.42,2.21,2.21,0,0,1-1.48.48,8.32,8.32,0,0,1-1.68-.21l-.31-.06.12-.94a13.7,13.7,0,0,0,1.8.16c.61,0,.92-.26.92-.77a.52.52,0,0,0-.21-.44,3.13,3.13,0,0,0-.85-.34A3.32,3.32,0,0,1,.66,9.79a1.43,1.43,0,0,1-.42-1.1A1.6,1.6,0,0,1,.78,7.36a2.32,2.32,0,0,1,1.49-.44,10.46,10.46,0,0,1,1.64.17l.32.07-.1.95C3.31,8,2.73,8,2.39,8Z"
    }), S.createElement("path", {
      style: tA({}, A.rbgcpControlIcon2),
      d: "M4.79,8.09V7H9.16V8.09H7.59V13H6.38V8.09Z"
    }), S.createElement("path", {
      style: tA({}, A.rbgcpControlIcon2),
      d: "M14,12.34a2.25,2.25,0,0,1-1.91.74,2.24,2.24,0,0,1-1.91-.74A3.85,3.85,0,0,1,9.61,10a4,4,0,0,1,.56-2.34,2.2,2.2,0,0,1,1.91-.77A2.21,2.21,0,0,1,14,7.69,4,4,0,0,1,14.55,10,3.85,3.85,0,0,1,14,12.34Zm-2.88-.77a1,1,0,0,0,1,.46,1,1,0,0,0,1-.46A3.25,3.25,0,0,0,13.3,10,3.45,3.45,0,0,0,13,8.46a1,1,0,0,0-1-.49,1,1,0,0,0-1,.49A3.43,3.43,0,0,0,10.85,10,3.38,3.38,0,0,0,11.11,11.57Z"
    }), S.createElement("path", {
      style: tA({}, A.rbgcpControlIcon2),
      d: "M17.77,11.24h-1V13H15.58V7h2.19a1.85,1.85,0,0,1,2.11,2.07,2.21,2.21,0,0,1-.54,1.6A2.07,2.07,0,0,1,17.77,11.24Zm-1-1h1c.6,0,.9-.37.9-1.12a1.18,1.18,0,0,0-.22-.79.88.88,0,0,0-.68-.24h-1Z"
    }));
  }, um = function(A) {
    var e, t = A.children, r = "id" + Math.random().toString(16).slice(2), n = w.useRef((e = document.getElementById(r)) !== null && e !== void 0 ? e : document.createElement("div")), o = w.useState(!n.current.parentElement)[0];
    return w.useEffect(function() {
      var i = n.current;
      return o && (n.current.id = r, document.body.appendChild(n.current)), function() {
        o && i.parentElement && i.parentElement.removeChild(i);
      };
    }, [
      r
    ]), Cs.createPortal(t, n.current);
  };
  const dm = w.memo(um);
  var ha = function(A, e) {
    return ha = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(t, r) {
      t.__proto__ = r;
    } || function(t, r) {
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }, ha(A, e);
  };
  function Le(A, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
    ha(A, e);
    function t() {
      this.constructor = A;
    }
    A.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
  }
  var wa = function() {
    return wa = Object.assign || function(e) {
      for (var t, r = 1, n = arguments.length; r < n; r++) {
        t = arguments[r];
        for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
      }
      return e;
    }, wa.apply(this, arguments);
  };
  function fe(A, e, t, r) {
    function n(o) {
      return o instanceof t ? o : new t(function(i) {
        i(o);
      });
    }
    return new (t || (t = Promise))(function(o, i) {
      function a(c) {
        try {
          l(r.next(c));
        } catch (u) {
          i(u);
        }
      }
      function s(c) {
        try {
          l(r.throw(c));
        } catch (u) {
          i(u);
        }
      }
      function l(c) {
        c.done ? o(c.value) : n(c.value).then(a, s);
      }
      l((r = r.apply(A, [])).next());
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
    function a(l) {
      return function(c) {
        return s([
          l,
          c
        ]);
      };
    }
    function s(l) {
      if (r) throw new TypeError("Generator is already executing.");
      for (; t; ) try {
        if (r = 1, n && (o = l[0] & 2 ? n.return : l[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, l[1])).done) return o;
        switch (n = 0, o && (l = [
          l[0] & 2,
          o.value
        ]), l[0]) {
          case 0:
          case 1:
            o = l;
            break;
          case 4:
            return t.label++, {
              value: l[1],
              done: false
            };
          case 5:
            t.label++, n = l[1], l = [
              0
            ];
            continue;
          case 7:
            l = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (o = t.trys, !(o = o.length > 0 && o[o.length - 1]) && (l[0] === 6 || l[0] === 2)) {
              t = 0;
              continue;
            }
            if (l[0] === 3 && (!o || l[1] > o[0] && l[1] < o[3])) {
              t.label = l[1];
              break;
            }
            if (l[0] === 6 && t.label < o[1]) {
              t.label = o[1], o = l;
              break;
            }
            if (o && t.label < o[2]) {
              t.label = o[2], t.ops.push(l);
              break;
            }
            o[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        l = e.call(A, t);
      } catch (c) {
        l = [
          6,
          c
        ], n = 0;
      } finally {
        r = o = 0;
      }
      if (l[0] & 5) throw l[1];
      return {
        value: l[0] ? l[1] : void 0,
        done: true
      };
    }
  }
  function bn(A, e, t) {
    if (arguments.length === 2) for (var r = 0, n = e.length, o; r < n; r++) (o || !(r in e)) && (o || (o = Array.prototype.slice.call(e, 0, r)), o[r] = e[r]);
    return A.concat(o || e);
  }
  var it = (function() {
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
  })(), si = function(A, e) {
    return it.fromClientRect(A, e.getBoundingClientRect());
  }, fm = function(A) {
    var e = A.body, t = A.documentElement;
    if (!e || !t) throw new Error("Unable to get document size");
    var r = Math.max(Math.max(e.scrollWidth, t.scrollWidth), Math.max(e.offsetWidth, t.offsetWidth), Math.max(e.clientWidth, t.clientWidth)), n = Math.max(Math.max(e.scrollHeight, t.scrollHeight), Math.max(e.offsetHeight, t.offsetHeight), Math.max(e.clientHeight, t.clientHeight));
    return new it(0, 0, r, n);
  }, li = function(A) {
    for (var e = [], t = 0, r = A.length; t < r; ) {
      var n = A.charCodeAt(t++);
      if (n >= 55296 && n <= 56319 && t < r) {
        var o = A.charCodeAt(t++);
        (o & 64512) === 56320 ? e.push(((n & 1023) << 10) + (o & 1023) + 65536) : (e.push(n), t--);
      } else e.push(n);
    }
    return e;
  }, NA = function() {
    for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
    if (String.fromCodePoint) return String.fromCodePoint.apply(String, A);
    var t = A.length;
    if (!t) return "";
    for (var r = [], n = -1, o = ""; ++n < t; ) {
      var i = A[n];
      i <= 65535 ? r.push(i) : (i -= 65536, r.push((i >> 10) + 55296, i % 1024 + 56320)), (n + 1 === t || r.length > 16384) && (o += String.fromCharCode.apply(String, r), r.length = 0);
    }
    return o;
  }, Ml = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", gm = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (var Fn = 0; Fn < Ml.length; Fn++) gm[Ml.charCodeAt(Fn)] = Fn;
  var Pl = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ir = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (var Un = 0; Un < Pl.length; Un++) Ir[Pl.charCodeAt(Un)] = Un;
  var Bm = function(A) {
    var e = A.length * 0.75, t = A.length, r, n = 0, o, i, a, s;
    A[A.length - 1] === "=" && (e--, A[A.length - 2] === "=" && e--);
    var l = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(e) : new Array(e), c = Array.isArray(l) ? l : new Uint8Array(l);
    for (r = 0; r < t; r += 4) o = Ir[A.charCodeAt(r)], i = Ir[A.charCodeAt(r + 1)], a = Ir[A.charCodeAt(r + 2)], s = Ir[A.charCodeAt(r + 3)], c[n++] = o << 2 | i >> 4, c[n++] = (i & 15) << 4 | a >> 2, c[n++] = (a & 3) << 6 | s & 63;
    return l;
  }, pm = function(A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 2) t.push(A[r + 1] << 8 | A[r]);
    return t;
  }, hm = function(A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 4) t.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]);
    return t;
  }, Kt = 5, Is = 11, Ii = 2, wm = Is - Kt, od = 65536 >> Kt, Cm = 1 << Kt, xi = Cm - 1, mm = 1024 >> Kt, vm = od + mm, Qm = vm, ym = 32, bm = Qm + ym, Fm = 65536 >> Is, Um = 1 << wm, Em = Um - 1, Nl = function(A, e, t) {
    return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t));
  }, Sm = function(A, e, t) {
    return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t));
  }, Im = function(A, e) {
    var t = Bm(A), r = Array.isArray(t) ? hm(t) : new Uint32Array(t), n = Array.isArray(t) ? pm(t) : new Uint16Array(t), o = 24, i = Nl(n, o / 2, r[4] / 2), a = r[5] === 2 ? Nl(n, (o + r[4]) / 2) : Sm(r, Math.ceil((o + r[4]) / 4));
    return new xm(r[0], r[1], r[2], r[3], i, a);
  }, xm = (function() {
    function A(e, t, r, n, o, i) {
      this.initialValue = e, this.errorValue = t, this.highStart = r, this.highValueIndex = n, this.index = o, this.data = i;
    }
    return A.prototype.get = function(e) {
      var t;
      if (e >= 0) {
        if (e < 55296 || e > 56319 && e <= 65535) return t = this.index[e >> Kt], t = (t << Ii) + (e & xi), this.data[t];
        if (e <= 65535) return t = this.index[od + (e - 55296 >> Kt)], t = (t << Ii) + (e & xi), this.data[t];
        if (e < this.highStart) return t = bm - Fm + (e >> Is), t = this.index[t], t += e >> Kt & Em, t = this.index[t], t = (t << Ii) + (e & xi), this.data[t];
        if (e <= 1114111) return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, A;
  })(), Gl = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Hm = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (var En = 0; En < Gl.length; En++) Hm[Gl.charCodeAt(En)] = En;
  var Tm = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", _l = 50, Lm = 1, id = 2, ad = 3, km = 4, Rm = 5, Vl = 7, sd = 8, $l = 9, ft = 10, Ca = 11, Wl = 12, ma = 13, Km = 14, xr = 15, va = 16, Sn = 17, Qr = 18, Om = 19, Xl = 20, Qa = 21, yr = 22, Hi = 23, Xt = 24, we = 25, Hr = 26, Tr = 27, jt = 28, Dm = 29, xt = 30, Mm = 31, In = 32, xn = 33, ya = 34, ba = 35, Fa = 36, Yr = 37, Ua = 38, Zn = 39, qn = 40, Ti = 41, ld = 42, Pm = 43, Nm = [
    9001,
    65288
  ], cd = "!", BA = "\xD7", Hn = "\xF7", Ea = Im(Tm), ze = [
    xt,
    Fa
  ], Sa = [
    Lm,
    id,
    ad,
    Rm
  ], ud = [
    ft,
    sd
  ], jl = [
    Tr,
    Hr
  ], Gm = Sa.concat(ud), Jl = [
    Ua,
    Zn,
    qn,
    ya,
    ba
  ], _m = [
    xr,
    ma
  ], Vm = function(A, e) {
    e === void 0 && (e = "strict");
    var t = [], r = [], n = [];
    return A.forEach(function(o, i) {
      var a = Ea.get(o);
      if (a > _l ? (n.push(true), a -= _l) : n.push(false), [
        "normal",
        "auto",
        "loose"
      ].indexOf(e) !== -1 && [
        8208,
        8211,
        12316,
        12448
      ].indexOf(o) !== -1) return r.push(i), t.push(va);
      if (a === km || a === Ca) {
        if (i === 0) return r.push(i), t.push(xt);
        var s = t[i - 1];
        return Gm.indexOf(s) === -1 ? (r.push(r[i - 1]), t.push(s)) : (r.push(i), t.push(xt));
      }
      if (r.push(i), a === Mm) return t.push(e === "strict" ? Qa : Yr);
      if (a === ld || a === Dm) return t.push(xt);
      if (a === Pm) return o >= 131072 && o <= 196605 || o >= 196608 && o <= 262141 ? t.push(Yr) : t.push(xt);
      t.push(a);
    }), [
      r,
      t,
      n
    ];
  }, Li = function(A, e, t, r) {
    var n = r[t];
    if (Array.isArray(A) ? A.indexOf(n) !== -1 : A === n) for (var o = t; o <= r.length; ) {
      o++;
      var i = r[o];
      if (i === e) return true;
      if (i !== ft) break;
    }
    if (n === ft) for (var o = t; o > 0; ) {
      o--;
      var a = r[o];
      if (Array.isArray(A) ? A.indexOf(a) !== -1 : A === a) for (var s = t; s <= r.length; ) {
        s++;
        var i = r[s];
        if (i === e) return true;
        if (i !== ft) break;
      }
      if (a !== ft) break;
    }
    return false;
  }, Yl = function(A, e) {
    for (var t = A; t >= 0; ) {
      var r = e[t];
      if (r === ft) t--;
      else return r;
    }
    return 0;
  }, $m = function(A, e, t, r, n) {
    if (t[r] === 0) return BA;
    var o = r - 1;
    if (Array.isArray(n) && n[o] === true) return BA;
    var i = o - 1, a = o + 1, s = e[o], l = i >= 0 ? e[i] : 0, c = e[a];
    if (s === id && c === ad) return BA;
    if (Sa.indexOf(s) !== -1) return cd;
    if (Sa.indexOf(c) !== -1 || ud.indexOf(c) !== -1) return BA;
    if (Yl(o, e) === sd) return Hn;
    if (Ea.get(A[o]) === Ca || (s === In || s === xn) && Ea.get(A[a]) === Ca || s === Vl || c === Vl || s === $l || [
      ft,
      ma,
      xr
    ].indexOf(s) === -1 && c === $l || [
      Sn,
      Qr,
      Om,
      Xt,
      jt
    ].indexOf(c) !== -1 || Yl(o, e) === yr || Li(Hi, yr, o, e) || Li([
      Sn,
      Qr
    ], Qa, o, e) || Li(Wl, Wl, o, e)) return BA;
    if (s === ft) return Hn;
    if (s === Hi || c === Hi) return BA;
    if (c === va || s === va) return Hn;
    if ([
      ma,
      xr,
      Qa
    ].indexOf(c) !== -1 || s === Km || l === Fa && _m.indexOf(s) !== -1 || s === jt && c === Fa || c === Xl || ze.indexOf(c) !== -1 && s === we || ze.indexOf(s) !== -1 && c === we || s === Tr && [
      Yr,
      In,
      xn
    ].indexOf(c) !== -1 || [
      Yr,
      In,
      xn
    ].indexOf(s) !== -1 && c === Hr || ze.indexOf(s) !== -1 && jl.indexOf(c) !== -1 || jl.indexOf(s) !== -1 && ze.indexOf(c) !== -1 || [
      Tr,
      Hr
    ].indexOf(s) !== -1 && (c === we || [
      yr,
      xr
    ].indexOf(c) !== -1 && e[a + 1] === we) || [
      yr,
      xr
    ].indexOf(s) !== -1 && c === we || s === we && [
      we,
      jt,
      Xt
    ].indexOf(c) !== -1) return BA;
    if ([
      we,
      jt,
      Xt,
      Sn,
      Qr
    ].indexOf(c) !== -1) for (var u = o; u >= 0; ) {
      var d = e[u];
      if (d === we) return BA;
      if ([
        jt,
        Xt
      ].indexOf(d) !== -1) u--;
      else break;
    }
    if ([
      Tr,
      Hr
    ].indexOf(c) !== -1) for (var u = [
      Sn,
      Qr
    ].indexOf(s) !== -1 ? i : o; u >= 0; ) {
      var d = e[u];
      if (d === we) return BA;
      if ([
        jt,
        Xt
      ].indexOf(d) !== -1) u--;
      else break;
    }
    if (Ua === s && [
      Ua,
      Zn,
      ya,
      ba
    ].indexOf(c) !== -1 || [
      Zn,
      ya
    ].indexOf(s) !== -1 && [
      Zn,
      qn
    ].indexOf(c) !== -1 || [
      qn,
      ba
    ].indexOf(s) !== -1 && c === qn || Jl.indexOf(s) !== -1 && [
      Xl,
      Hr
    ].indexOf(c) !== -1 || Jl.indexOf(c) !== -1 && s === Tr || ze.indexOf(s) !== -1 && ze.indexOf(c) !== -1 || s === Xt && ze.indexOf(c) !== -1 || ze.concat(we).indexOf(s) !== -1 && c === yr && Nm.indexOf(A[a]) === -1 || ze.concat(we).indexOf(c) !== -1 && s === Qr) return BA;
    if (s === Ti && c === Ti) {
      for (var g = t[o], B = 1; g > 0 && (g--, e[g] === Ti); ) B++;
      if (B % 2 !== 0) return BA;
    }
    return s === In && c === xn ? BA : Hn;
  }, Wm = function(A, e) {
    e || (e = {
      lineBreak: "normal",
      wordBreak: "normal"
    });
    var t = Vm(A, e.lineBreak), r = t[0], n = t[1], o = t[2];
    (e.wordBreak === "break-all" || e.wordBreak === "break-word") && (n = n.map(function(a) {
      return [
        we,
        xt,
        ld
      ].indexOf(a) !== -1 ? Yr : a;
    }));
    var i = e.wordBreak === "keep-all" ? o.map(function(a, s) {
      return a && A[s] >= 19968 && A[s] <= 40959;
    }) : void 0;
    return [
      r,
      n,
      i
    ];
  }, Xm = (function() {
    function A(e, t, r, n) {
      this.codePoints = e, this.required = t === cd, this.start = r, this.end = n;
    }
    return A.prototype.slice = function() {
      return NA.apply(void 0, this.codePoints.slice(this.start, this.end));
    }, A;
  })(), jm = function(A, e) {
    var t = li(A), r = Wm(t, e), n = r[0], o = r[1], i = r[2], a = t.length, s = 0, l = 0;
    return {
      next: function() {
        if (l >= a) return {
          done: true,
          value: null
        };
        for (var c = BA; l < a && (c = $m(t, o, n, ++l, i)) === BA; ) ;
        if (c !== BA || l === a) {
          var u = new Xm(t, c, s, l);
          return s = l, {
            value: u,
            done: false
          };
        }
        return {
          done: true,
          value: null
        };
      }
    };
  }, Jm = 1, Ym = 2, un = 4, zl = 8, fo = 10, Zl = 47, Mr = 92, zm = 9, Zm = 32, Tn = 34, br = 61, qm = 35, Av = 36, ev = 37, Ln = 39, kn = 40, Fr = 41, tv = 95, ge = 45, rv = 33, nv = 60, ov = 62, iv = 64, av = 91, sv = 93, lv = 61, cv = 123, Rn = 63, uv = 125, ql = 124, dv = 126, fv = 128, Ac = 65533, ki = 42, kt = 43, gv = 44, Bv = 58, pv = 59, zr = 46, hv = 0, wv = 8, Cv = 11, mv = 14, vv = 31, Qv = 127, Ke = -1, dd = 48, fd = 97, gd = 101, yv = 102, bv = 117, Fv = 122, Bd = 65, pd = 69, hd = 70, Uv = 85, Ev = 90, le = function(A) {
    return A >= dd && A <= 57;
  }, Sv = function(A) {
    return A >= 55296 && A <= 57343;
  }, Jt = function(A) {
    return le(A) || A >= Bd && A <= hd || A >= fd && A <= yv;
  }, Iv = function(A) {
    return A >= fd && A <= Fv;
  }, xv = function(A) {
    return A >= Bd && A <= Ev;
  }, Hv = function(A) {
    return Iv(A) || xv(A);
  }, Tv = function(A) {
    return A >= fv;
  }, Kn = function(A) {
    return A === fo || A === zm || A === Zm;
  }, go = function(A) {
    return Hv(A) || Tv(A) || A === tv;
  }, ec = function(A) {
    return go(A) || le(A) || A === ge;
  }, Lv = function(A) {
    return A >= hv && A <= wv || A === Cv || A >= mv && A <= vv || A === Qv;
  }, dt = function(A, e) {
    return A !== Mr ? false : e !== fo;
  }, On = function(A, e, t) {
    return A === ge ? go(e) || dt(e, t) : go(A) ? true : !!(A === Mr && dt(A, e));
  }, Ri = function(A, e, t) {
    return A === kt || A === ge ? le(e) ? true : e === zr && le(t) : le(A === zr ? e : A);
  }, kv = function(A) {
    var e = 0, t = 1;
    (A[e] === kt || A[e] === ge) && (A[e] === ge && (t = -1), e++);
    for (var r = []; le(A[e]); ) r.push(A[e++]);
    var n = r.length ? parseInt(NA.apply(void 0, r), 10) : 0;
    A[e] === zr && e++;
    for (var o = []; le(A[e]); ) o.push(A[e++]);
    var i = o.length, a = i ? parseInt(NA.apply(void 0, o), 10) : 0;
    (A[e] === pd || A[e] === gd) && e++;
    var s = 1;
    (A[e] === kt || A[e] === ge) && (A[e] === ge && (s = -1), e++);
    for (var l = []; le(A[e]); ) l.push(A[e++]);
    var c = l.length ? parseInt(NA.apply(void 0, l), 10) : 0;
    return t * (n + a * Math.pow(10, -i)) * Math.pow(10, s * c);
  }, Rv = {
    type: 2
  }, Kv = {
    type: 3
  }, Ov = {
    type: 4
  }, Dv = {
    type: 13
  }, Mv = {
    type: 8
  }, Pv = {
    type: 21
  }, Nv = {
    type: 9
  }, Gv = {
    type: 10
  }, _v = {
    type: 11
  }, Vv = {
    type: 12
  }, $v = {
    type: 14
  }, Dn = {
    type: 23
  }, Wv = {
    type: 1
  }, Xv = {
    type: 25
  }, jv = {
    type: 24
  }, Jv = {
    type: 26
  }, Yv = {
    type: 27
  }, zv = {
    type: 28
  }, Zv = {
    type: 29
  }, qv = {
    type: 31
  }, Ia = {
    type: 32
  }, wd = (function() {
    function A() {
      this._value = [];
    }
    return A.prototype.write = function(e) {
      this._value = this._value.concat(li(e));
    }, A.prototype.read = function() {
      for (var e = [], t = this.consumeToken(); t !== Ia; ) e.push(t), t = this.consumeToken();
      return e;
    }, A.prototype.consumeToken = function() {
      var e = this.consumeCodePoint();
      switch (e) {
        case Tn:
          return this.consumeStringToken(Tn);
        case qm:
          var t = this.peekCodePoint(0), r = this.peekCodePoint(1), n = this.peekCodePoint(2);
          if (ec(t) || dt(r, n)) {
            var o = On(t, r, n) ? Ym : Jm, i = this.consumeName();
            return {
              type: 5,
              value: i,
              flags: o
            };
          }
          break;
        case Av:
          if (this.peekCodePoint(0) === br) return this.consumeCodePoint(), Dv;
          break;
        case Ln:
          return this.consumeStringToken(Ln);
        case kn:
          return Rv;
        case Fr:
          return Kv;
        case ki:
          if (this.peekCodePoint(0) === br) return this.consumeCodePoint(), $v;
          break;
        case kt:
          if (Ri(e, this.peekCodePoint(0), this.peekCodePoint(1))) return this.reconsumeCodePoint(e), this.consumeNumericToken();
          break;
        case gv:
          return Ov;
        case ge:
          var a = e, s = this.peekCodePoint(0), l = this.peekCodePoint(1);
          if (Ri(a, s, l)) return this.reconsumeCodePoint(e), this.consumeNumericToken();
          if (On(a, s, l)) return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
          if (s === ge && l === ov) return this.consumeCodePoint(), this.consumeCodePoint(), jv;
          break;
        case zr:
          if (Ri(e, this.peekCodePoint(0), this.peekCodePoint(1))) return this.reconsumeCodePoint(e), this.consumeNumericToken();
          break;
        case Zl:
          if (this.peekCodePoint(0) === ki) for (this.consumeCodePoint(); ; ) {
            var c = this.consumeCodePoint();
            if (c === ki && (c = this.consumeCodePoint(), c === Zl)) return this.consumeToken();
            if (c === Ke) return this.consumeToken();
          }
          break;
        case Bv:
          return Jv;
        case pv:
          return Yv;
        case nv:
          if (this.peekCodePoint(0) === rv && this.peekCodePoint(1) === ge && this.peekCodePoint(2) === ge) return this.consumeCodePoint(), this.consumeCodePoint(), Xv;
          break;
        case iv:
          var u = this.peekCodePoint(0), d = this.peekCodePoint(1), g = this.peekCodePoint(2);
          if (On(u, d, g)) {
            var i = this.consumeName();
            return {
              type: 7,
              value: i
            };
          }
          break;
        case av:
          return zv;
        case Mr:
          if (dt(e, this.peekCodePoint(0))) return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
          break;
        case sv:
          return Zv;
        case lv:
          if (this.peekCodePoint(0) === br) return this.consumeCodePoint(), Mv;
          break;
        case cv:
          return _v;
        case uv:
          return Vv;
        case bv:
        case Uv:
          var B = this.peekCodePoint(0), p = this.peekCodePoint(1);
          return B === kt && (Jt(p) || p === Rn) && (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
        case ql:
          if (this.peekCodePoint(0) === br) return this.consumeCodePoint(), Nv;
          if (this.peekCodePoint(0) === ql) return this.consumeCodePoint(), Pv;
          break;
        case dv:
          if (this.peekCodePoint(0) === br) return this.consumeCodePoint(), Gv;
          break;
        case Ke:
          return Ia;
      }
      return Kn(e) ? (this.consumeWhiteSpace(), qv) : le(e) ? (this.reconsumeCodePoint(e), this.consumeNumericToken()) : go(e) ? (this.reconsumeCodePoint(e), this.consumeIdentLikeToken()) : {
        type: 6,
        value: NA(e)
      };
    }, A.prototype.consumeCodePoint = function() {
      var e = this._value.shift();
      return typeof e > "u" ? -1 : e;
    }, A.prototype.reconsumeCodePoint = function(e) {
      this._value.unshift(e);
    }, A.prototype.peekCodePoint = function(e) {
      return e >= this._value.length ? -1 : this._value[e];
    }, A.prototype.consumeUnicodeRangeToken = function() {
      for (var e = [], t = this.consumeCodePoint(); Jt(t) && e.length < 6; ) e.push(t), t = this.consumeCodePoint();
      for (var r = false; t === Rn && e.length < 6; ) e.push(t), t = this.consumeCodePoint(), r = true;
      if (r) {
        var n = parseInt(NA.apply(void 0, e.map(function(s) {
          return s === Rn ? dd : s;
        })), 16), o = parseInt(NA.apply(void 0, e.map(function(s) {
          return s === Rn ? hd : s;
        })), 16);
        return {
          type: 30,
          start: n,
          end: o
        };
      }
      var i = parseInt(NA.apply(void 0, e), 16);
      if (this.peekCodePoint(0) === ge && Jt(this.peekCodePoint(1))) {
        this.consumeCodePoint(), t = this.consumeCodePoint();
        for (var a = []; Jt(t) && a.length < 6; ) a.push(t), t = this.consumeCodePoint();
        var o = parseInt(NA.apply(void 0, a), 16);
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
      return e.toLowerCase() === "url" && this.peekCodePoint(0) === kn ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === kn ? (this.consumeCodePoint(), {
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
      if (t === Ln || t === Tn) {
        var r = this.consumeStringToken(this.consumeCodePoint());
        return r.type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === Ke || this.peekCodePoint(0) === Fr) ? (this.consumeCodePoint(), {
          type: 22,
          value: r.value
        }) : (this.consumeBadUrlRemnants(), Dn);
      }
      for (; ; ) {
        var n = this.consumeCodePoint();
        if (n === Ke || n === Fr) return {
          type: 22,
          value: NA.apply(void 0, e)
        };
        if (Kn(n)) return this.consumeWhiteSpace(), this.peekCodePoint(0) === Ke || this.peekCodePoint(0) === Fr ? (this.consumeCodePoint(), {
          type: 22,
          value: NA.apply(void 0, e)
        }) : (this.consumeBadUrlRemnants(), Dn);
        if (n === Tn || n === Ln || n === kn || Lv(n)) return this.consumeBadUrlRemnants(), Dn;
        if (n === Mr) if (dt(n, this.peekCodePoint(0))) e.push(this.consumeEscapedCodePoint());
        else return this.consumeBadUrlRemnants(), Dn;
        else e.push(n);
      }
    }, A.prototype.consumeWhiteSpace = function() {
      for (; Kn(this.peekCodePoint(0)); ) this.consumeCodePoint();
    }, A.prototype.consumeBadUrlRemnants = function() {
      for (; ; ) {
        var e = this.consumeCodePoint();
        if (e === Fr || e === Ke) return;
        dt(e, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
      }
    }, A.prototype.consumeStringSlice = function(e) {
      for (var t = 5e4, r = ""; e > 0; ) {
        var n = Math.min(t, e);
        r += NA.apply(void 0, this._value.splice(0, n)), e -= n;
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
        if (n === fo) return this._value.splice(0, r), Wv;
        if (n === Mr) {
          var o = this._value[r + 1];
          o !== Ke && o !== void 0 && (o === fo ? (t += this.consumeStringSlice(r), r = -1, this._value.shift()) : dt(n, o) && (t += this.consumeStringSlice(r), t += NA(this.consumeEscapedCodePoint()), r = -1));
        }
        r++;
      } while (true);
    }, A.prototype.consumeNumber = function() {
      var e = [], t = un, r = this.peekCodePoint(0);
      for ((r === kt || r === ge) && e.push(this.consumeCodePoint()); le(this.peekCodePoint(0)); ) e.push(this.consumeCodePoint());
      r = this.peekCodePoint(0);
      var n = this.peekCodePoint(1);
      if (r === zr && le(n)) for (e.push(this.consumeCodePoint(), this.consumeCodePoint()), t = zl; le(this.peekCodePoint(0)); ) e.push(this.consumeCodePoint());
      r = this.peekCodePoint(0), n = this.peekCodePoint(1);
      var o = this.peekCodePoint(2);
      if ((r === pd || r === gd) && ((n === kt || n === ge) && le(o) || le(n))) for (e.push(this.consumeCodePoint(), this.consumeCodePoint()), t = zl; le(this.peekCodePoint(0)); ) e.push(this.consumeCodePoint());
      return [
        kv(e),
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
      return n === ev ? (this.consumeCodePoint(), {
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
      if (Jt(e)) {
        for (var t = NA(e); Jt(this.peekCodePoint(0)) && t.length < 6; ) t += NA(this.consumeCodePoint());
        Kn(this.peekCodePoint(0)) && this.consumeCodePoint();
        var r = parseInt(t, 16);
        return r === 0 || Sv(r) || r > 1114111 ? Ac : r;
      }
      return e === Ke ? Ac : e;
    }, A.prototype.consumeName = function() {
      for (var e = ""; ; ) {
        var t = this.consumeCodePoint();
        if (ec(t)) e += NA(t);
        else if (dt(t, this.peekCodePoint(0))) e += NA(this.consumeEscapedCodePoint());
        else return this.reconsumeCodePoint(t), e;
      }
    }, A;
  })(), Cd = (function() {
    function A(e) {
      this._tokens = e;
    }
    return A.create = function(e) {
      var t = new wd();
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
        if (r.type === 32 || eQ(r, e)) return t;
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
      return typeof e > "u" ? Ia : e;
    }, A.prototype.reconsumeToken = function(e) {
      this._tokens.unshift(e);
    }, A;
  })(), dn = function(A) {
    return A.type === 15;
  }, Br = function(A) {
    return A.type === 17;
  }, QA = function(A) {
    return A.type === 20;
  }, AQ = function(A) {
    return A.type === 0;
  }, xa = function(A, e) {
    return QA(A) && A.value === e;
  }, md = function(A) {
    return A.type !== 31;
  }, ur = function(A) {
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
  }, eQ = function(A, e) {
    return e === 11 && A.type === 12 || e === 28 && A.type === 29 ? true : e === 2 && A.type === 3;
  }, Qt = function(A) {
    return A.type === 17 || A.type === 15;
  }, $A = function(A) {
    return A.type === 16 || Qt(A);
  }, vd = function(A) {
    return A.length > 1 ? [
      A[0],
      A[1]
    ] : [
      A[0]
    ];
  }, ne = {
    type: 17,
    number: 0,
    flags: un
  }, xs = {
    type: 16,
    number: 50,
    flags: un
  }, gt = {
    type: 16,
    number: 100,
    flags: un
  }, Lr = function(A, e, t) {
    var r = A[0], n = A[1];
    return [
      EA(r, e),
      EA(typeof n < "u" ? n : r, t)
    ];
  }, EA = function(A, e) {
    if (A.type === 16) return A.number / 100 * e;
    if (dn(A)) switch (A.unit) {
      case "rem":
      case "em":
        return 16 * A.number;
      default:
        return A.number;
    }
    return A.number;
  }, Qd = "deg", yd = "grad", bd = "rad", Fd = "turn", ci = {
    name: "angle",
    parse: function(A, e) {
      if (e.type === 15) switch (e.unit) {
        case Qd:
          return Math.PI * e.number / 180;
        case yd:
          return Math.PI / 200 * e.number;
        case bd:
          return e.number;
        case Fd:
          return Math.PI * 2 * e.number;
      }
      throw new Error("Unsupported angle type");
    }
  }, Ud = function(A) {
    return A.type === 15 && (A.unit === Qd || A.unit === yd || A.unit === bd || A.unit === Fd);
  }, Ed = function(A) {
    var e = A.filter(QA).map(function(t) {
      return t.value;
    }).join(" ");
    switch (e) {
      case "to bottom right":
      case "to right bottom":
      case "left top":
      case "top left":
        return [
          ne,
          ne
        ];
      case "to top":
      case "bottom":
        return Ue(0);
      case "to bottom left":
      case "to left bottom":
      case "right top":
      case "top right":
        return [
          ne,
          gt
        ];
      case "to right":
      case "left":
        return Ue(90);
      case "to top left":
      case "to left top":
      case "right bottom":
      case "bottom right":
        return [
          gt,
          gt
        ];
      case "to bottom":
      case "top":
        return Ue(180);
      case "to top right":
      case "to right top":
      case "left bottom":
      case "bottom left":
        return [
          gt,
          ne
        ];
      case "to left":
      case "right":
        return Ue(270);
    }
    return 0;
  }, Ue = function(A) {
    return Math.PI * A / 180;
  }, ht = {
    name: "color",
    parse: function(A, e) {
      if (e.type === 18) {
        var t = tQ[e.name];
        if (typeof t > "u") throw new Error('Attempting to parse an unsupported color function "' + e.name + '"');
        return t(A, e.values);
      }
      if (e.type === 5) {
        if (e.value.length === 3) {
          var r = e.value.substring(0, 1), n = e.value.substring(1, 2), o = e.value.substring(2, 3);
          return Bt(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(o + o, 16), 1);
        }
        if (e.value.length === 4) {
          var r = e.value.substring(0, 1), n = e.value.substring(1, 2), o = e.value.substring(2, 3), i = e.value.substring(3, 4);
          return Bt(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(o + o, 16), parseInt(i + i, 16) / 255);
        }
        if (e.value.length === 6) {
          var r = e.value.substring(0, 2), n = e.value.substring(2, 4), o = e.value.substring(4, 6);
          return Bt(parseInt(r, 16), parseInt(n, 16), parseInt(o, 16), 1);
        }
        if (e.value.length === 8) {
          var r = e.value.substring(0, 2), n = e.value.substring(2, 4), o = e.value.substring(4, 6), i = e.value.substring(6, 8);
          return Bt(parseInt(r, 16), parseInt(n, 16), parseInt(o, 16), parseInt(i, 16) / 255);
        }
      }
      if (e.type === 20) {
        var a = At[e.value.toUpperCase()];
        if (typeof a < "u") return a;
      }
      return At.TRANSPARENT;
    }
  }, wt = function(A) {
    return (255 & A) === 0;
  }, YA = function(A) {
    var e = 255 & A, t = 255 & A >> 8, r = 255 & A >> 16, n = 255 & A >> 24;
    return e < 255 ? "rgba(" + n + "," + r + "," + t + "," + e / 255 + ")" : "rgb(" + n + "," + r + "," + t + ")";
  }, Bt = function(A, e, t, r) {
    return (A << 24 | e << 16 | t << 8 | Math.round(r * 255) << 0) >>> 0;
  }, tc = function(A, e) {
    if (A.type === 17) return A.number;
    if (A.type === 16) {
      var t = e === 3 ? 1 : 255;
      return e === 3 ? A.number / 100 * t : Math.round(A.number / 100 * t);
    }
    return 0;
  }, rc = function(A, e) {
    var t = e.filter(ur);
    if (t.length === 3) {
      var r = t.map(tc), n = r[0], o = r[1], i = r[2];
      return Bt(n, o, i, 1);
    }
    if (t.length === 4) {
      var a = t.map(tc), n = a[0], o = a[1], i = a[2], s = a[3];
      return Bt(n, o, i, s);
    }
    return 0;
  };
  function Ki(A, e, t) {
    return t < 0 && (t += 1), t >= 1 && (t -= 1), t < 1 / 6 ? (e - A) * t * 6 + A : t < 1 / 2 ? e : t < 2 / 3 ? (e - A) * 6 * (2 / 3 - t) + A : A;
  }
  var nc = function(A, e) {
    var t = e.filter(ur), r = t[0], n = t[1], o = t[2], i = t[3], a = (r.type === 17 ? Ue(r.number) : ci.parse(A, r)) / (Math.PI * 2), s = $A(n) ? n.number / 100 : 0, l = $A(o) ? o.number / 100 : 0, c = typeof i < "u" && $A(i) ? EA(i, 1) : 1;
    if (s === 0) return Bt(l * 255, l * 255, l * 255, 1);
    var u = l <= 0.5 ? l * (s + 1) : l + s - l * s, d = l * 2 - u, g = Ki(d, u, a + 1 / 3), B = Ki(d, u, a), p = Ki(d, u, a - 1 / 3);
    return Bt(g * 255, B * 255, p * 255, c);
  }, tQ = {
    hsl: nc,
    hsla: nc,
    rgb: rc,
    rgba: rc
  }, Pr = function(A, e) {
    return ht.parse(A, Cd.create(e).parseComponentValue());
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
  }, rQ = {
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
  }, nQ = {
    name: "background-color",
    initialValue: "transparent",
    prefix: false,
    type: 3,
    format: "color"
  }, ui = function(A, e) {
    var t = ht.parse(A, e[0]), r = e[1];
    return r && $A(r) ? {
      color: t,
      stop: r
    } : {
      color: t,
      stop: null
    };
  }, oc = function(A, e) {
    var t = A[0], r = A[A.length - 1];
    t.stop === null && (t.stop = ne), r.stop === null && (r.stop = gt);
    for (var n = [], o = 0, i = 0; i < A.length; i++) {
      var a = A[i].stop;
      if (a !== null) {
        var s = EA(a, e);
        s > o ? n.push(s) : n.push(o), o = s;
      } else n.push(null);
    }
    for (var l = null, i = 0; i < n.length; i++) {
      var c = n[i];
      if (c === null) l === null && (l = i);
      else if (l !== null) {
        for (var u = i - l, d = n[l - 1], g = (c - d) / (u + 1), B = 1; B <= u; B++) n[l + B - 1] = g * B;
        l = null;
      }
    }
    return A.map(function(p, b) {
      var h = p.color;
      return {
        color: h,
        stop: Math.max(Math.min(1, n[b] / e), 0)
      };
    });
  }, oQ = function(A, e, t) {
    var r = e / 2, n = t / 2, o = EA(A[0], e) - r, i = n - EA(A[1], t);
    return (Math.atan2(i, o) + Math.PI * 2) % (Math.PI * 2);
  }, iQ = function(A, e, t) {
    var r = typeof A == "number" ? A : oQ(A, e, t), n = Math.abs(e * Math.sin(r)) + Math.abs(t * Math.cos(r)), o = e / 2, i = t / 2, a = n / 2, s = Math.sin(r - Math.PI / 2) * a, l = Math.cos(r - Math.PI / 2) * a;
    return [
      n,
      o - l,
      o + l,
      i - s,
      i + s
    ];
  }, He = function(A, e) {
    return Math.sqrt(A * A + e * e);
  }, ic = function(A, e, t, r, n) {
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
      var s = a[0], l = a[1], c = He(t - s, r - l);
      return (n ? c < i.optimumDistance : c > i.optimumDistance) ? {
        optimumCorner: a,
        optimumDistance: c
      } : i;
    }, {
      optimumDistance: n ? 1 / 0 : -1 / 0,
      optimumCorner: null
    }).optimumCorner;
  }, aQ = function(A, e, t, r, n) {
    var o = 0, i = 0;
    switch (A.size) {
      case 0:
        A.shape === 0 ? o = i = Math.min(Math.abs(e), Math.abs(e - r), Math.abs(t), Math.abs(t - n)) : A.shape === 1 && (o = Math.min(Math.abs(e), Math.abs(e - r)), i = Math.min(Math.abs(t), Math.abs(t - n)));
        break;
      case 2:
        if (A.shape === 0) o = i = Math.min(He(e, t), He(e, t - n), He(e - r, t), He(e - r, t - n));
        else if (A.shape === 1) {
          var a = Math.min(Math.abs(t), Math.abs(t - n)) / Math.min(Math.abs(e), Math.abs(e - r)), s = ic(r, n, e, t, true), l = s[0], c = s[1];
          o = He(l - e, (c - t) / a), i = a * o;
        }
        break;
      case 1:
        A.shape === 0 ? o = i = Math.max(Math.abs(e), Math.abs(e - r), Math.abs(t), Math.abs(t - n)) : A.shape === 1 && (o = Math.max(Math.abs(e), Math.abs(e - r)), i = Math.max(Math.abs(t), Math.abs(t - n)));
        break;
      case 3:
        if (A.shape === 0) o = i = Math.max(He(e, t), He(e, t - n), He(e - r, t), He(e - r, t - n));
        else if (A.shape === 1) {
          var a = Math.max(Math.abs(t), Math.abs(t - n)) / Math.max(Math.abs(e), Math.abs(e - r)), u = ic(r, n, e, t, false), l = u[0], c = u[1];
          o = He(l - e, (c - t) / a), i = a * o;
        }
        break;
    }
    return Array.isArray(A.size) && (o = EA(A.size[0], r), i = A.size.length === 2 ? EA(A.size[1], n) : o), [
      o,
      i
    ];
  }, sQ = function(A, e) {
    var t = Ue(180), r = [];
    return Xe(e).forEach(function(n, o) {
      if (o === 0) {
        var i = n[0];
        if (i.type === 20 && i.value === "to") {
          t = Ed(n);
          return;
        } else if (Ud(i)) {
          t = ci.parse(A, i);
          return;
        }
      }
      var a = ui(A, n);
      r.push(a);
    }), {
      angle: t,
      stops: r,
      type: 1
    };
  }, Mn = function(A, e) {
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
          t = Ed(n);
          return;
        } else if (Ud(i)) {
          t = (ci.parse(A, i) + Ue(270)) % Ue(360);
          return;
        }
      }
      var a = ui(A, n);
      r.push(a);
    }), {
      angle: t,
      stops: r,
      type: 1
    };
  }, lQ = function(A, e) {
    var t = Ue(180), r = [], n = 1, o = 0, i = 3, a = [];
    return Xe(e).forEach(function(s, l) {
      var c = s[0];
      if (l === 0) {
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
          var u = ht.parse(A, c.values[0]);
          r.push({
            stop: ne,
            color: u
          });
        } else if (c.name === "to") {
          var u = ht.parse(A, c.values[0]);
          r.push({
            stop: gt,
            color: u
          });
        } else if (c.name === "color-stop") {
          var d = c.values.filter(ur);
          if (d.length === 2) {
            var u = ht.parse(A, d[1]), g = d[0];
            Br(g) && r.push({
              stop: {
                type: 16,
                number: g.number * 100,
                flags: g.flags
              },
              color: u
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
  }, Sd = "closest-side", Id = "farthest-side", xd = "closest-corner", Hd = "farthest-corner", Td = "circle", Ld = "ellipse", kd = "cover", Rd = "contain", cQ = function(A, e) {
    var t = 0, r = 3, n = [], o = [];
    return Xe(e).forEach(function(i, a) {
      var s = true;
      if (a === 0) {
        var l = false;
        s = i.reduce(function(u, d) {
          if (l) if (QA(d)) switch (d.value) {
            case "center":
              return o.push(xs), u;
            case "top":
            case "left":
              return o.push(ne), u;
            case "right":
            case "bottom":
              return o.push(gt), u;
          }
          else ($A(d) || Qt(d)) && o.push(d);
          else if (QA(d)) switch (d.value) {
            case Td:
              return t = 0, false;
            case Ld:
              return t = 1, false;
            case "at":
              return l = true, false;
            case Sd:
              return r = 0, false;
            case kd:
            case Id:
              return r = 1, false;
            case Rd:
            case xd:
              return r = 2, false;
            case Hd:
              return r = 3, false;
          }
          else if (Qt(d) || $A(d)) return Array.isArray(r) || (r = []), r.push(d), false;
          return u;
        }, s);
      }
      if (s) {
        var c = ui(A, i);
        n.push(c);
      }
    }), {
      size: r,
      shape: t,
      stops: n,
      position: o,
      type: 2
    };
  }, Pn = function(A, e) {
    var t = 0, r = 3, n = [], o = [];
    return Xe(e).forEach(function(i, a) {
      var s = true;
      if (a === 0 ? s = i.reduce(function(c, u) {
        if (QA(u)) switch (u.value) {
          case "center":
            return o.push(xs), false;
          case "top":
          case "left":
            return o.push(ne), false;
          case "right":
          case "bottom":
            return o.push(gt), false;
        }
        else if ($A(u) || Qt(u)) return o.push(u), false;
        return c;
      }, s) : a === 1 && (s = i.reduce(function(c, u) {
        if (QA(u)) switch (u.value) {
          case Td:
            return t = 0, false;
          case Ld:
            return t = 1, false;
          case Rd:
          case Sd:
            return r = 0, false;
          case Id:
            return r = 1, false;
          case xd:
            return r = 2, false;
          case kd:
          case Hd:
            return r = 3, false;
        }
        else if (Qt(u) || $A(u)) return Array.isArray(r) || (r = []), r.push(u), false;
        return c;
      }, s)), s) {
        var l = ui(A, i);
        n.push(l);
      }
    }), {
      size: r,
      shape: t,
      stops: n,
      position: o,
      type: 2
    };
  }, uQ = function(A) {
    return A.type === 1;
  }, dQ = function(A) {
    return A.type === 2;
  }, Hs = {
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
        var r = Kd[e.name];
        if (typeof r > "u") throw new Error('Attempting to parse an unsupported image function "' + e.name + '"');
        return r(A, e.values);
      }
      throw new Error("Unsupported image type " + e.type);
    }
  };
  function fQ(A) {
    return !(A.type === 20 && A.value === "none") && (A.type !== 18 || !!Kd[A.name]);
  }
  var Kd = {
    "linear-gradient": sQ,
    "-moz-linear-gradient": Mn,
    "-ms-linear-gradient": Mn,
    "-o-linear-gradient": Mn,
    "-webkit-linear-gradient": Mn,
    "radial-gradient": cQ,
    "-moz-radial-gradient": Pn,
    "-ms-radial-gradient": Pn,
    "-o-radial-gradient": Pn,
    "-webkit-radial-gradient": Pn,
    "-webkit-gradient": lQ
  }, gQ = {
    name: "background-image",
    initialValue: "none",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      if (e.length === 0) return [];
      var t = e[0];
      return t.type === 20 && t.value === "none" ? [] : e.filter(function(r) {
        return ur(r) && fQ(r);
      }).map(function(r) {
        return Hs.parse(A, r);
      });
    }
  }, BQ = {
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
  }, pQ = {
    name: "background-position",
    initialValue: "0% 0%",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      return Xe(e).map(function(t) {
        return t.filter($A);
      }).map(vd);
    }
  }, hQ = {
    name: "background-repeat",
    initialValue: "repeat",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return Xe(e).map(function(t) {
        return t.filter(QA).map(function(r) {
          return r.value;
        }).join(" ");
      }).map(wQ);
    }
  }, wQ = function(A) {
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
  var CQ = {
    name: "background-size",
    initialValue: "0",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return Xe(e).map(function(t) {
        return t.filter(mQ);
      });
    }
  }, mQ = function(A) {
    return QA(A) || $A(A);
  }, di = function(A) {
    return {
      name: "border-" + A + "-color",
      initialValue: "transparent",
      prefix: false,
      type: 3,
      format: "color"
    };
  }, vQ = di("top"), QQ = di("right"), yQ = di("bottom"), bQ = di("left"), fi = function(A) {
    return {
      name: "border-radius-" + A,
      initialValue: "0 0",
      prefix: false,
      type: 1,
      parse: function(e, t) {
        return vd(t.filter($A));
      }
    };
  }, FQ = fi("top-left"), UQ = fi("top-right"), EQ = fi("bottom-right"), SQ = fi("bottom-left"), gi = function(A) {
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
  }, IQ = gi("top"), xQ = gi("right"), HQ = gi("bottom"), TQ = gi("left"), Bi = function(A) {
    return {
      name: "border-" + A + "-width",
      initialValue: "0",
      type: 0,
      prefix: false,
      parse: function(e, t) {
        return dn(t) ? t.number : 0;
      }
    };
  }, LQ = Bi("top"), kQ = Bi("right"), RQ = Bi("bottom"), KQ = Bi("left"), OQ = {
    name: "color",
    initialValue: "transparent",
    prefix: false,
    type: 3,
    format: "color"
  }, DQ = {
    name: "direction",
    initialValue: "ltr",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      return e === "rtl" ? 1 : 0;
    }
  }, MQ = {
    name: "display",
    initialValue: "inline-block",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return e.filter(QA).reduce(function(t, r) {
        return t | PQ(r.value);
      }, 0);
    }
  }, PQ = function(A) {
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
  }, NQ = {
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
  }, GQ = {
    name: "letter-spacing",
    initialValue: "0",
    prefix: false,
    type: 0,
    parse: function(A, e) {
      return e.type === 20 && e.value === "normal" ? 0 : e.type === 17 || e.type === 15 ? e.number : 0;
    }
  }, Bo;
  (function(A) {
    A.NORMAL = "normal", A.STRICT = "strict";
  })(Bo || (Bo = {}));
  var _Q = {
    name: "line-break",
    initialValue: "normal",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      return e === "strict" ? Bo.STRICT : Bo.NORMAL;
    }
  }, VQ = {
    name: "line-height",
    initialValue: "normal",
    prefix: false,
    type: 4
  }, ac = function(A, e) {
    return QA(A) && A.value === "normal" ? 1.2 * e : A.type === 17 ? e * A.number : $A(A) ? EA(A, e) : e;
  }, $Q = {
    name: "list-style-image",
    initialValue: "none",
    type: 0,
    prefix: false,
    parse: function(A, e) {
      return e.type === 20 && e.value === "none" ? null : Hs.parse(A, e);
    }
  }, WQ = {
    name: "list-style-position",
    initialValue: "outside",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      return e === "inside" ? 0 : 1;
    }
  }, Ha = {
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
  }, pi = function(A) {
    return {
      name: "margin-" + A,
      initialValue: "0",
      prefix: false,
      type: 4
    };
  }, XQ = pi("top"), jQ = pi("right"), JQ = pi("bottom"), YQ = pi("left"), zQ = {
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
  }, ZQ = {
    name: "overflow-wrap",
    initialValue: "normal",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      return e === "break-word" ? "break-word" : "normal";
    }
  }, hi = function(A) {
    return {
      name: "padding-" + A,
      initialValue: "0",
      prefix: false,
      type: 3,
      format: "length-percentage"
    };
  }, qQ = hi("top"), Ay = hi("right"), ey = hi("bottom"), ty = hi("left"), ry = {
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
  }, ny = {
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
  }, oy = {
    name: "text-shadow",
    initialValue: "none",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      return e.length === 1 && xa(e[0], "none") ? [] : Xe(e).map(function(t) {
        for (var r = {
          color: At.TRANSPARENT,
          offsetX: ne,
          offsetY: ne,
          blur: ne
        }, n = 0, o = 0; o < t.length; o++) {
          var i = t[o];
          Qt(i) ? (n === 0 ? r.offsetX = i : n === 1 ? r.offsetY = i : r.blur = i, n++) : r.color = ht.parse(A, i);
        }
        return r;
      });
    }
  }, iy = {
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
  }, ay = {
    name: "transform",
    initialValue: "none",
    prefix: true,
    type: 0,
    parse: function(A, e) {
      if (e.type === 20 && e.value === "none") return null;
      if (e.type === 18) {
        var t = cy[e.name];
        if (typeof t > "u") throw new Error('Attempting to parse an unsupported transform function "' + e.name + '"');
        return t(e.values);
      }
      return null;
    }
  }, sy = function(A) {
    var e = A.filter(function(t) {
      return t.type === 17;
    }).map(function(t) {
      return t.number;
    });
    return e.length === 6 ? e : null;
  }, ly = function(A) {
    var e = A.filter(function(s) {
      return s.type === 17;
    }).map(function(s) {
      return s.number;
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
  }, cy = {
    matrix: sy,
    matrix3d: ly
  }, sc = {
    type: 16,
    number: 50,
    flags: un
  }, uy = [
    sc,
    sc
  ], dy = {
    name: "transform-origin",
    initialValue: "50% 50%",
    prefix: true,
    type: 1,
    parse: function(A, e) {
      var t = e.filter($A);
      return t.length !== 2 ? uy : [
        t[0],
        t[1]
      ];
    }
  }, fy = {
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
  }, Nr;
  (function(A) {
    A.NORMAL = "normal", A.BREAK_ALL = "break-all", A.KEEP_ALL = "keep-all";
  })(Nr || (Nr = {}));
  var gy = {
    name: "word-break",
    initialValue: "normal",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      switch (e) {
        case "break-all":
          return Nr.BREAK_ALL;
        case "keep-all":
          return Nr.KEEP_ALL;
        default:
          return Nr.NORMAL;
      }
    }
  }, By = {
    name: "z-index",
    initialValue: "auto",
    prefix: false,
    type: 0,
    parse: function(A, e) {
      if (e.type === 20) return {
        auto: true,
        order: 0
      };
      if (Br(e)) return {
        auto: false,
        order: e.number
      };
      throw new Error("Invalid z-index number parsed");
    }
  }, Od = {
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
  }, py = {
    name: "opacity",
    initialValue: "1",
    type: 0,
    prefix: false,
    parse: function(A, e) {
      return Br(e) ? e.number : 1;
    }
  }, hy = {
    name: "text-decoration-color",
    initialValue: "transparent",
    prefix: false,
    type: 3,
    format: "color"
  }, wy = {
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
  }, Cy = {
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
  }, my = {
    name: "font-size",
    initialValue: "0",
    prefix: false,
    type: 3,
    format: "length"
  }, vy = {
    name: "font-weight",
    initialValue: "normal",
    type: 0,
    prefix: false,
    parse: function(A, e) {
      return Br(e) ? e.number : QA(e) && e.value === "bold" ? 700 : 400;
    }
  }, Qy = {
    name: "font-variant",
    initialValue: "none",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      return e.filter(QA).map(function(t) {
        return t.value;
      });
    }
  }, yy = {
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
  }, by = {
    name: "content",
    initialValue: "none",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      if (e.length === 0) return [];
      var t = e[0];
      return t.type === 20 && t.value === "none" ? [] : e;
    }
  }, Fy = {
    name: "counter-increment",
    initialValue: "none",
    prefix: true,
    type: 1,
    parse: function(A, e) {
      if (e.length === 0) return null;
      var t = e[0];
      if (t.type === 20 && t.value === "none") return null;
      for (var r = [], n = e.filter(md), o = 0; o < n.length; o++) {
        var i = n[o], a = n[o + 1];
        if (i.type === 20) {
          var s = a && Br(a) ? a.number : 1;
          r.push({
            counter: i.value,
            increment: s
          });
        }
      }
      return r;
    }
  }, Uy = {
    name: "counter-reset",
    initialValue: "none",
    prefix: true,
    type: 1,
    parse: function(A, e) {
      if (e.length === 0) return [];
      for (var t = [], r = e.filter(md), n = 0; n < r.length; n++) {
        var o = r[n], i = r[n + 1];
        if (QA(o) && o.value !== "none") {
          var a = i && Br(i) ? i.number : 0;
          t.push({
            counter: o.value,
            reset: a
          });
        }
      }
      return t;
    }
  }, Ey = {
    name: "duration",
    initialValue: "0s",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return e.filter(dn).map(function(t) {
        return Od.parse(A, t);
      });
    }
  }, Sy = {
    name: "quotes",
    initialValue: "none",
    prefix: true,
    type: 1,
    parse: function(A, e) {
      if (e.length === 0) return null;
      var t = e[0];
      if (t.type === 20 && t.value === "none") return null;
      var r = [], n = e.filter(AQ);
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
  }, lc = function(A, e, t) {
    if (!A) return "";
    var r = A[Math.min(e, A.length - 1)];
    return r ? t ? r.open : r.close : "";
  }, Iy = {
    name: "box-shadow",
    initialValue: "none",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      return e.length === 1 && xa(e[0], "none") ? [] : Xe(e).map(function(t) {
        for (var r = {
          color: 255,
          offsetX: ne,
          offsetY: ne,
          blur: ne,
          spread: ne,
          inset: false
        }, n = 0, o = 0; o < t.length; o++) {
          var i = t[o];
          xa(i, "inset") ? r.inset = true : Qt(i) ? (n === 0 ? r.offsetX = i : n === 1 ? r.offsetY = i : n === 2 ? r.blur = i : r.spread = i, n++) : r.color = ht.parse(A, i);
        }
        return r;
      });
    }
  }, xy = {
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
  }, Hy = {
    name: "-webkit-text-stroke-color",
    initialValue: "currentcolor",
    prefix: false,
    type: 3,
    format: "color"
  }, Ty = {
    name: "-webkit-text-stroke-width",
    initialValue: "0",
    type: 0,
    prefix: false,
    parse: function(A, e) {
      return dn(e) ? e.number : 0;
    }
  }, Ly = (function() {
    function A(e, t) {
      var r, n;
      this.animationDuration = Z(e, Ey, t.animationDuration), this.backgroundClip = Z(e, rQ, t.backgroundClip), this.backgroundColor = Z(e, nQ, t.backgroundColor), this.backgroundImage = Z(e, gQ, t.backgroundImage), this.backgroundOrigin = Z(e, BQ, t.backgroundOrigin), this.backgroundPosition = Z(e, pQ, t.backgroundPosition), this.backgroundRepeat = Z(e, hQ, t.backgroundRepeat), this.backgroundSize = Z(e, CQ, t.backgroundSize), this.borderTopColor = Z(e, vQ, t.borderTopColor), this.borderRightColor = Z(e, QQ, t.borderRightColor), this.borderBottomColor = Z(e, yQ, t.borderBottomColor), this.borderLeftColor = Z(e, bQ, t.borderLeftColor), this.borderTopLeftRadius = Z(e, FQ, t.borderTopLeftRadius), this.borderTopRightRadius = Z(e, UQ, t.borderTopRightRadius), this.borderBottomRightRadius = Z(e, EQ, t.borderBottomRightRadius), this.borderBottomLeftRadius = Z(e, SQ, t.borderBottomLeftRadius), this.borderTopStyle = Z(e, IQ, t.borderTopStyle), this.borderRightStyle = Z(e, xQ, t.borderRightStyle), this.borderBottomStyle = Z(e, HQ, t.borderBottomStyle), this.borderLeftStyle = Z(e, TQ, t.borderLeftStyle), this.borderTopWidth = Z(e, LQ, t.borderTopWidth), this.borderRightWidth = Z(e, kQ, t.borderRightWidth), this.borderBottomWidth = Z(e, RQ, t.borderBottomWidth), this.borderLeftWidth = Z(e, KQ, t.borderLeftWidth), this.boxShadow = Z(e, Iy, t.boxShadow), this.color = Z(e, OQ, t.color), this.direction = Z(e, DQ, t.direction), this.display = Z(e, MQ, t.display), this.float = Z(e, NQ, t.cssFloat), this.fontFamily = Z(e, Cy, t.fontFamily), this.fontSize = Z(e, my, t.fontSize), this.fontStyle = Z(e, yy, t.fontStyle), this.fontVariant = Z(e, Qy, t.fontVariant), this.fontWeight = Z(e, vy, t.fontWeight), this.letterSpacing = Z(e, GQ, t.letterSpacing), this.lineBreak = Z(e, _Q, t.lineBreak), this.lineHeight = Z(e, VQ, t.lineHeight), this.listStyleImage = Z(e, $Q, t.listStyleImage), this.listStylePosition = Z(e, WQ, t.listStylePosition), this.listStyleType = Z(e, Ha, t.listStyleType), this.marginTop = Z(e, XQ, t.marginTop), this.marginRight = Z(e, jQ, t.marginRight), this.marginBottom = Z(e, JQ, t.marginBottom), this.marginLeft = Z(e, YQ, t.marginLeft), this.opacity = Z(e, py, t.opacity);
      var o = Z(e, zQ, t.overflow);
      this.overflowX = o[0], this.overflowY = o[o.length > 1 ? 1 : 0], this.overflowWrap = Z(e, ZQ, t.overflowWrap), this.paddingTop = Z(e, qQ, t.paddingTop), this.paddingRight = Z(e, Ay, t.paddingRight), this.paddingBottom = Z(e, ey, t.paddingBottom), this.paddingLeft = Z(e, ty, t.paddingLeft), this.paintOrder = Z(e, xy, t.paintOrder), this.position = Z(e, ny, t.position), this.textAlign = Z(e, ry, t.textAlign), this.textDecorationColor = Z(e, hy, (r = t.textDecorationColor) !== null && r !== void 0 ? r : t.color), this.textDecorationLine = Z(e, wy, (n = t.textDecorationLine) !== null && n !== void 0 ? n : t.textDecoration), this.textShadow = Z(e, oy, t.textShadow), this.textTransform = Z(e, iy, t.textTransform), this.transform = Z(e, ay, t.transform), this.transformOrigin = Z(e, dy, t.transformOrigin), this.visibility = Z(e, fy, t.visibility), this.webkitTextStrokeColor = Z(e, Hy, t.webkitTextStrokeColor), this.webkitTextStrokeWidth = Z(e, Ty, t.webkitTextStrokeWidth), this.wordBreak = Z(e, gy, t.wordBreak), this.zIndex = Z(e, By, t.zIndex);
    }
    return A.prototype.isVisible = function() {
      return this.display > 0 && this.opacity > 0 && this.visibility === 0;
    }, A.prototype.isTransparent = function() {
      return wt(this.backgroundColor);
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
  })(), ky = /* @__PURE__ */ (function() {
    function A(e, t) {
      this.content = Z(e, by, t.content), this.quotes = Z(e, Sy, t.quotes);
    }
    return A;
  })(), cc = /* @__PURE__ */ (function() {
    function A(e, t) {
      this.counterIncrement = Z(e, Fy, t.counterIncrement), this.counterReset = Z(e, Uy, t.counterReset);
    }
    return A;
  })(), Z = function(A, e, t) {
    var r = new wd(), n = t !== null && typeof t < "u" ? t.toString() : e.initialValue;
    r.write(n);
    var o = new Cd(r.read());
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
            return ci.parse(A, o.parseComponentValue());
          case "color":
            return ht.parse(A, o.parseComponentValue());
          case "image":
            return Hs.parse(A, o.parseComponentValue());
          case "length":
            var a = o.parseComponentValue();
            return Qt(a) ? a : ne;
          case "length-percentage":
            var s = o.parseComponentValue();
            return $A(s) ? s : ne;
          case "time":
            return Od.parse(A, o.parseComponentValue());
        }
        break;
    }
  }, Ry = "data-html2canvas-debug", Ky = function(A) {
    var e = A.getAttribute(Ry);
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
  }, Ta = function(A, e) {
    var t = Ky(A);
    return t === 1 || e === t;
  }, je = /* @__PURE__ */ (function() {
    function A(e, t) {
      if (this.context = e, this.textNodes = [], this.elements = [], this.flags = 0, Ta(t, 3)) debugger;
      this.styles = new Ly(e, window.getComputedStyle(t, null)), Ra(t) && (this.styles.animationDuration.some(function(r) {
        return r > 0;
      }) && (t.style.animationDuration = "0s"), this.styles.transform !== null && (t.style.transform = "none")), this.bounds = si(this.context, t), Ta(t, 4) && (this.flags |= 16);
    }
    return A;
  })(), Oy = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", uc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", kr = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (var Nn = 0; Nn < uc.length; Nn++) kr[uc.charCodeAt(Nn)] = Nn;
  var Dy = function(A) {
    var e = A.length * 0.75, t = A.length, r, n = 0, o, i, a, s;
    A[A.length - 1] === "=" && (e--, A[A.length - 2] === "=" && e--);
    var l = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(e) : new Array(e), c = Array.isArray(l) ? l : new Uint8Array(l);
    for (r = 0; r < t; r += 4) o = kr[A.charCodeAt(r)], i = kr[A.charCodeAt(r + 1)], a = kr[A.charCodeAt(r + 2)], s = kr[A.charCodeAt(r + 3)], c[n++] = o << 2 | i >> 4, c[n++] = (i & 15) << 4 | a >> 2, c[n++] = (a & 3) << 6 | s & 63;
    return l;
  }, My = function(A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 2) t.push(A[r + 1] << 8 | A[r]);
    return t;
  }, Py = function(A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 4) t.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]);
    return t;
  }, Ot = 5, Ts = 11, Oi = 2, Ny = Ts - Ot, Dd = 65536 >> Ot, Gy = 1 << Ot, Di = Gy - 1, _y = 1024 >> Ot, Vy = Dd + _y, $y = Vy, Wy = 32, Xy = $y + Wy, jy = 65536 >> Ts, Jy = 1 << Ny, Yy = Jy - 1, dc = function(A, e, t) {
    return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t));
  }, zy = function(A, e, t) {
    return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t));
  }, Zy = function(A, e) {
    var t = Dy(A), r = Array.isArray(t) ? Py(t) : new Uint32Array(t), n = Array.isArray(t) ? My(t) : new Uint16Array(t), o = 24, i = dc(n, o / 2, r[4] / 2), a = r[5] === 2 ? dc(n, (o + r[4]) / 2) : zy(r, Math.ceil((o + r[4]) / 4));
    return new qy(r[0], r[1], r[2], r[3], i, a);
  }, qy = (function() {
    function A(e, t, r, n, o, i) {
      this.initialValue = e, this.errorValue = t, this.highStart = r, this.highValueIndex = n, this.index = o, this.data = i;
    }
    return A.prototype.get = function(e) {
      var t;
      if (e >= 0) {
        if (e < 55296 || e > 56319 && e <= 65535) return t = this.index[e >> Ot], t = (t << Oi) + (e & Di), this.data[t];
        if (e <= 65535) return t = this.index[Dd + (e - 55296 >> Ot)], t = (t << Oi) + (e & Di), this.data[t];
        if (e < this.highStart) return t = Xy - jy + (e >> Ts), t = this.index[t], t += e >> Ot & Yy, t = this.index[t], t = (t << Oi) + (e & Di), this.data[t];
        if (e <= 1114111) return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, A;
  })(), fc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ab = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (var Gn = 0; Gn < fc.length; Gn++) Ab[fc.charCodeAt(Gn)] = Gn;
  var eb = 1, Mi = 2, Pi = 3, gc = 4, Bc = 5, tb = 7, pc = 8, Ni = 9, Gi = 10, hc = 11, wc = 12, Cc = 13, mc = 14, _i = 15, rb = function(A) {
    for (var e = [], t = 0, r = A.length; t < r; ) {
      var n = A.charCodeAt(t++);
      if (n >= 55296 && n <= 56319 && t < r) {
        var o = A.charCodeAt(t++);
        (o & 64512) === 56320 ? e.push(((n & 1023) << 10) + (o & 1023) + 65536) : (e.push(n), t--);
      } else e.push(n);
    }
    return e;
  }, nb = function() {
    for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
    if (String.fromCodePoint) return String.fromCodePoint.apply(String, A);
    var t = A.length;
    if (!t) return "";
    for (var r = [], n = -1, o = ""; ++n < t; ) {
      var i = A[n];
      i <= 65535 ? r.push(i) : (i -= 65536, r.push((i >> 10) + 55296, i % 1024 + 56320)), (n + 1 === t || r.length > 16384) && (o += String.fromCharCode.apply(String, r), r.length = 0);
    }
    return o;
  }, ob = Zy(Oy), Qe = "\xD7", Vi = "\xF7", ib = function(A) {
    return ob.get(A);
  }, ab = function(A, e, t) {
    var r = t - 2, n = e[r], o = e[t - 1], i = e[t];
    if (o === Mi && i === Pi) return Qe;
    if (o === Mi || o === Pi || o === gc || i === Mi || i === Pi || i === gc) return Vi;
    if (o === pc && [
      pc,
      Ni,
      hc,
      wc
    ].indexOf(i) !== -1 || (o === hc || o === Ni) && (i === Ni || i === Gi) || (o === wc || o === Gi) && i === Gi || i === Cc || i === Bc || i === tb || o === eb) return Qe;
    if (o === Cc && i === mc) {
      for (; n === Bc; ) n = e[--r];
      if (n === mc) return Qe;
    }
    if (o === _i && i === _i) {
      for (var a = 0; n === _i; ) a++, n = e[--r];
      if (a % 2 === 0) return Qe;
    }
    return Vi;
  }, sb = function(A) {
    var e = rb(A), t = e.length, r = 0, n = 0, o = e.map(ib);
    return {
      next: function() {
        if (r >= t) return {
          done: true,
          value: null
        };
        for (var i = Qe; r < t && (i = ab(e, o, ++r)) === Qe; ) ;
        if (i !== Qe || r === t) {
          var a = nb.apply(null, e.slice(n, r));
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
  }, lb = function(A) {
    for (var e = sb(A), t = [], r; !(r = e.next()).done; ) r.value && t.push(r.value.slice());
    return t;
  }, cb = function(A) {
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
  }, ub = function(A) {
    var e = A.createElement("boundtest");
    e.style.width = "50px", e.style.display = "block", e.style.fontSize = "12px", e.style.letterSpacing = "0px", e.style.wordSpacing = "0px", A.body.appendChild(e);
    var t = A.createRange();
    e.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
    var r = e.firstChild, n = li(r.data).map(function(s) {
      return NA(s);
    }), o = 0, i = {}, a = n.every(function(s, l) {
      t.setStart(r, o), t.setEnd(r, o + s.length);
      var c = t.getBoundingClientRect();
      o += s.length;
      var u = c.x > i.x || c.y > i.y;
      return i = c, l === 0 ? true : u;
    });
    return A.body.removeChild(e), a;
  }, db = function() {
    return typeof new Image().crossOrigin < "u";
  }, fb = function() {
    return typeof new XMLHttpRequest().responseType == "string";
  }, gb = function(A) {
    var e = new Image(), t = A.createElement("canvas"), r = t.getContext("2d");
    if (!r) return false;
    e.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
    try {
      r.drawImage(e, 0, 0), t.toDataURL();
    } catch {
      return false;
    }
    return true;
  }, vc = function(A) {
    return A[0] === 0 && A[1] === 255 && A[2] === 0 && A[3] === 255;
  }, Bb = function(A) {
    var e = A.createElement("canvas"), t = 100;
    e.width = t, e.height = t;
    var r = e.getContext("2d");
    if (!r) return Promise.reject(false);
    r.fillStyle = "rgb(0, 255, 0)", r.fillRect(0, 0, t, t);
    var n = new Image(), o = e.toDataURL();
    n.src = o;
    var i = La(t, t, 0, 0, n);
    return r.fillStyle = "red", r.fillRect(0, 0, t, t), Qc(i).then(function(a) {
      r.drawImage(a, 0, 0);
      var s = r.getImageData(0, 0, t, t).data;
      r.fillStyle = "red", r.fillRect(0, 0, t, t);
      var l = A.createElement("div");
      return l.style.backgroundImage = "url(" + o + ")", l.style.height = t + "px", vc(s) ? Qc(La(t, t, 0, 0, l)) : Promise.reject(false);
    }).then(function(a) {
      return r.drawImage(a, 0, 0), vc(r.getImageData(0, 0, t, t).data);
    }).catch(function() {
      return false;
    });
  }, La = function(A, e, t, r, n) {
    var o = "http://www.w3.org/2000/svg", i = document.createElementNS(o, "svg"), a = document.createElementNS(o, "foreignObject");
    return i.setAttributeNS(null, "width", A.toString()), i.setAttributeNS(null, "height", e.toString()), a.setAttributeNS(null, "width", "100%"), a.setAttributeNS(null, "height", "100%"), a.setAttributeNS(null, "x", t.toString()), a.setAttributeNS(null, "y", r.toString()), a.setAttributeNS(null, "externalResourcesRequired", "true"), i.appendChild(a), a.appendChild(n), i;
  }, Qc = function(A) {
    return new Promise(function(e, t) {
      var r = new Image();
      r.onload = function() {
        return e(r);
      }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(A));
    });
  }, ee = {
    get SUPPORT_RANGE_BOUNDS() {
      var A = cb(document);
      return Object.defineProperty(ee, "SUPPORT_RANGE_BOUNDS", {
        value: A
      }), A;
    },
    get SUPPORT_WORD_BREAKING() {
      var A = ee.SUPPORT_RANGE_BOUNDS && ub(document);
      return Object.defineProperty(ee, "SUPPORT_WORD_BREAKING", {
        value: A
      }), A;
    },
    get SUPPORT_SVG_DRAWING() {
      var A = gb(document);
      return Object.defineProperty(ee, "SUPPORT_SVG_DRAWING", {
        value: A
      }), A;
    },
    get SUPPORT_FOREIGNOBJECT_DRAWING() {
      var A = typeof Array.from == "function" && typeof window.fetch == "function" ? Bb(document) : Promise.resolve(false);
      return Object.defineProperty(ee, "SUPPORT_FOREIGNOBJECT_DRAWING", {
        value: A
      }), A;
    },
    get SUPPORT_CORS_IMAGES() {
      var A = db();
      return Object.defineProperty(ee, "SUPPORT_CORS_IMAGES", {
        value: A
      }), A;
    },
    get SUPPORT_RESPONSE_TYPE() {
      var A = fb();
      return Object.defineProperty(ee, "SUPPORT_RESPONSE_TYPE", {
        value: A
      }), A;
    },
    get SUPPORT_CORS_XHR() {
      var A = "withCredentials" in new XMLHttpRequest();
      return Object.defineProperty(ee, "SUPPORT_CORS_XHR", {
        value: A
      }), A;
    },
    get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
      var A = !!(typeof Intl < "u" && Intl.Segmenter);
      return Object.defineProperty(ee, "SUPPORT_NATIVE_TEXT_SEGMENTATION", {
        value: A
      }), A;
    }
  }, Gr = /* @__PURE__ */ (function() {
    function A(e, t) {
      this.text = e, this.bounds = t;
    }
    return A;
  })(), pb = function(A, e, t, r) {
    var n = Cb(e, t), o = [], i = 0;
    return n.forEach(function(a) {
      if (t.textDecorationLine.length || a.trim().length > 0) if (ee.SUPPORT_RANGE_BOUNDS) {
        var s = yc(r, i, a.length).getClientRects();
        if (s.length > 1) {
          var l = Ls(a), c = 0;
          l.forEach(function(d) {
            o.push(new Gr(d, it.fromDOMRectList(A, yc(r, c + i, d.length).getClientRects()))), c += d.length;
          });
        } else o.push(new Gr(a, it.fromDOMRectList(A, s)));
      } else {
        var u = r.splitText(a.length);
        o.push(new Gr(a, hb(A, r))), r = u;
      }
      else ee.SUPPORT_RANGE_BOUNDS || (r = r.splitText(a.length));
      i += a.length;
    }), o;
  }, hb = function(A, e) {
    var t = e.ownerDocument;
    if (t) {
      var r = t.createElement("html2canvaswrapper");
      r.appendChild(e.cloneNode(true));
      var n = e.parentNode;
      if (n) {
        n.replaceChild(r, e);
        var o = si(A, r);
        return r.firstChild && n.replaceChild(r.firstChild, r), o;
      }
    }
    return it.EMPTY;
  }, yc = function(A, e, t) {
    var r = A.ownerDocument;
    if (!r) throw new Error("Node has no owner document");
    var n = r.createRange();
    return n.setStart(A, e), n.setEnd(A, e + t), n;
  }, Ls = function(A) {
    if (ee.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
      var e = new Intl.Segmenter(void 0, {
        granularity: "grapheme"
      });
      return Array.from(e.segment(A)).map(function(t) {
        return t.segment;
      });
    }
    return lb(A);
  }, wb = function(A, e) {
    if (ee.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
      var t = new Intl.Segmenter(void 0, {
        granularity: "word"
      });
      return Array.from(t.segment(A)).map(function(r) {
        return r.segment;
      });
    }
    return vb(A, e);
  }, Cb = function(A, e) {
    return e.letterSpacing !== 0 ? Ls(A) : wb(A, e);
  }, mb = [
    32,
    160,
    4961,
    65792,
    65793,
    4153,
    4241
  ], vb = function(A, e) {
    for (var t = jm(A, {
      lineBreak: e.lineBreak,
      wordBreak: e.overflowWrap === "break-word" ? "break-word" : e.wordBreak
    }), r = [], n, o = function() {
      if (n.value) {
        var i = n.value.slice(), a = li(i), s = "";
        a.forEach(function(l) {
          mb.indexOf(l) === -1 ? s += NA(l) : (s.length && r.push(s), r.push(NA(l)), s = "");
        }), s.length && r.push(s);
      }
    }; !(n = t.next()).done; ) o();
    return r;
  }, Qb = /* @__PURE__ */ (function() {
    function A(e, t, r) {
      this.text = yb(t.data, r.textTransform), this.textBounds = pb(e, this.text, r, t);
    }
    return A;
  })(), yb = function(A, e) {
    switch (e) {
      case 1:
        return A.toLowerCase();
      case 3:
        return A.replace(bb, Fb);
      case 2:
        return A.toUpperCase();
      default:
        return A;
    }
  }, bb = /(^|\s|:|-|\(|\))([a-z])/g, Fb = function(A, e, t) {
    return A.length > 0 ? e + t.toUpperCase() : A;
  }, Md = (function(A) {
    Le(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.src = r.currentSrc || r.src, n.intrinsicWidth = r.naturalWidth, n.intrinsicHeight = r.naturalHeight, n.context.cache.addImage(n.src), n;
    }
    return e;
  })(je), Pd = (function(A) {
    Le(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.canvas = r, n.intrinsicWidth = r.width, n.intrinsicHeight = r.height, n;
    }
    return e;
  })(je), Nd = (function(A) {
    Le(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this, o = new XMLSerializer(), i = si(t, r);
      return r.setAttribute("width", i.width + "px"), r.setAttribute("height", i.height + "px"), n.svg = "data:image/svg+xml," + encodeURIComponent(o.serializeToString(r)), n.intrinsicWidth = r.width.baseVal.value, n.intrinsicHeight = r.height.baseVal.value, n.context.cache.addImage(n.svg), n;
    }
    return e;
  })(je), Gd = (function(A) {
    Le(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.value = r.value, n;
    }
    return e;
  })(je), ka = (function(A) {
    Le(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.start = r.start, n.reversed = typeof r.reversed == "boolean" && r.reversed === true, n;
    }
    return e;
  })(je), Ub = [
    {
      type: 15,
      flags: 0,
      unit: "px",
      number: 3
    }
  ], Eb = [
    {
      type: 16,
      flags: 0,
      number: 50
    }
  ], Sb = function(A) {
    return A.width > A.height ? new it(A.left + (A.width - A.height) / 2, A.top, A.height, A.height) : A.width < A.height ? new it(A.left, A.top + (A.height - A.width) / 2, A.width, A.width) : A;
  }, Ib = function(A) {
    var e = A.type === xb ? new Array(A.value.length + 1).join("\u2022") : A.value;
    return e.length === 0 ? A.placeholder || "" : e;
  }, po = "checkbox", ho = "radio", xb = "password", bc = 707406591, ks = (function(A) {
    Le(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      switch (n.type = r.type.toLowerCase(), n.checked = r.checked, n.value = Ib(r), (n.type === po || n.type === ho) && (n.styles.backgroundColor = 3739148031, n.styles.borderTopColor = n.styles.borderRightColor = n.styles.borderBottomColor = n.styles.borderLeftColor = 2779096575, n.styles.borderTopWidth = n.styles.borderRightWidth = n.styles.borderBottomWidth = n.styles.borderLeftWidth = 1, n.styles.borderTopStyle = n.styles.borderRightStyle = n.styles.borderBottomStyle = n.styles.borderLeftStyle = 1, n.styles.backgroundClip = [
        0
      ], n.styles.backgroundOrigin = [
        0
      ], n.bounds = Sb(n.bounds)), n.type) {
        case po:
          n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = Ub;
          break;
        case ho:
          n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = Eb;
          break;
      }
      return n;
    }
    return e;
  })(je), _d = (function(A) {
    Le(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this, o = r.options[r.selectedIndex || 0];
      return n.value = o && o.text || "", n;
    }
    return e;
  })(je), Vd = (function(A) {
    Le(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.value = r.value, n;
    }
    return e;
  })(je), $d = (function(A) {
    Le(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      n.src = r.src, n.width = parseInt(r.width, 10) || 0, n.height = parseInt(r.height, 10) || 0, n.backgroundColor = n.styles.backgroundColor;
      try {
        if (r.contentWindow && r.contentWindow.document && r.contentWindow.document.documentElement) {
          n.tree = Xd(t, r.contentWindow.document.documentElement);
          var o = r.contentWindow.document.documentElement ? Pr(t, getComputedStyle(r.contentWindow.document.documentElement).backgroundColor) : At.TRANSPARENT, i = r.contentWindow.document.body ? Pr(t, getComputedStyle(r.contentWindow.document.body).backgroundColor) : At.TRANSPARENT;
          n.backgroundColor = wt(o) ? wt(i) ? n.styles.backgroundColor : i : o;
        }
      } catch {
      }
      return n;
    }
    return e;
  })(je), Hb = [
    "OL",
    "UL",
    "MENU"
  ], Ao = function(A, e, t, r) {
    for (var n = e.firstChild, o = void 0; n; n = o) if (o = n.nextSibling, jd(n) && n.data.trim().length > 0) t.textNodes.push(new Qb(A, n, t.styles));
    else if (rr(n)) if (Zd(n) && n.assignedNodes) n.assignedNodes().forEach(function(a) {
      return Ao(A, a, t, r);
    });
    else {
      var i = Wd(A, n);
      i.styles.isVisible() && (Tb(n, i, r) ? i.flags |= 4 : Lb(i.styles) && (i.flags |= 2), Hb.indexOf(n.tagName) !== -1 && (i.flags |= 8), t.elements.push(i), n.slot, n.shadowRoot ? Ao(A, n.shadowRoot, i, r) : !wo(n) && !Jd(n) && !Co(n) && Ao(A, n, i, r));
    }
  }, Wd = function(A, e) {
    return Ka(e) ? new Md(A, e) : Yd(e) ? new Pd(A, e) : Jd(e) ? new Nd(A, e) : kb(e) ? new Gd(A, e) : Rb(e) ? new ka(A, e) : Kb(e) ? new ks(A, e) : Co(e) ? new _d(A, e) : wo(e) ? new Vd(A, e) : zd(e) ? new $d(A, e) : new je(A, e);
  }, Xd = function(A, e) {
    var t = Wd(A, e);
    return t.flags |= 4, Ao(A, e, t, t), t;
  }, Tb = function(A, e, t) {
    return e.styles.isPositionedWithZIndex() || e.styles.opacity < 1 || e.styles.isTransformed() || Rs(A) && t.styles.isTransparent();
  }, Lb = function(A) {
    return A.isPositioned() || A.isFloating();
  }, jd = function(A) {
    return A.nodeType === Node.TEXT_NODE;
  }, rr = function(A) {
    return A.nodeType === Node.ELEMENT_NODE;
  }, Ra = function(A) {
    return rr(A) && typeof A.style < "u" && !eo(A);
  }, eo = function(A) {
    return typeof A.className == "object";
  }, kb = function(A) {
    return A.tagName === "LI";
  }, Rb = function(A) {
    return A.tagName === "OL";
  }, Kb = function(A) {
    return A.tagName === "INPUT";
  }, Ob = function(A) {
    return A.tagName === "HTML";
  }, Jd = function(A) {
    return A.tagName === "svg";
  }, Rs = function(A) {
    return A.tagName === "BODY";
  }, Yd = function(A) {
    return A.tagName === "CANVAS";
  }, Fc = function(A) {
    return A.tagName === "VIDEO";
  }, Ka = function(A) {
    return A.tagName === "IMG";
  }, zd = function(A) {
    return A.tagName === "IFRAME";
  }, Uc = function(A) {
    return A.tagName === "STYLE";
  }, Db = function(A) {
    return A.tagName === "SCRIPT";
  }, wo = function(A) {
    return A.tagName === "TEXTAREA";
  }, Co = function(A) {
    return A.tagName === "SELECT";
  }, Zd = function(A) {
    return A.tagName === "SLOT";
  }, Ec = function(A) {
    return A.tagName.indexOf("-") > 0;
  }, Mb = (function() {
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
        var s = t.counters[a.counter];
        s && a.increment !== 0 && (o = false, s.length || s.push(1), s[Math.max(0, s.length - 1)] += a.increment);
      });
      var i = [];
      return o && n.forEach(function(a) {
        var s = t.counters[a.counter];
        i.push(a.counter), s || (s = t.counters[a.counter] = []), s.push(a.reset);
      }), i;
    }, A;
  })(), Sc = {
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
  }, Ic = {
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
  }, Pb = {
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
  }, Nb = {
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
  }, Yt = function(A, e, t, r, n, o) {
    return A < e || A > t ? Zr(A, n, o.length > 0) : r.integers.reduce(function(i, a, s) {
      for (; A >= a; ) A -= a, i += r.values[s];
      return i;
    }, "") + o;
  }, qd = function(A, e, t, r) {
    var n = "";
    do
      t || A--, n = r(A) + n, A /= e;
    while (A * e >= e);
    return n;
  }, PA = function(A, e, t, r, n) {
    var o = t - e + 1;
    return (A < 0 ? "-" : "") + (qd(Math.abs(A), o, r, function(i) {
      return NA(Math.floor(i % o) + e);
    }) + n);
  }, Ft = function(A, e, t) {
    t === void 0 && (t = ". ");
    var r = e.length;
    return qd(Math.abs(A), r, false, function(n) {
      return e[Math.floor(n % r)];
    }) + t;
  }, Ar = 1, lt = 2, ct = 4, Rr = 8, Ze = function(A, e, t, r, n, o) {
    if (A < -9999 || A > 9999) return Zr(A, 4, n.length > 0);
    var i = Math.abs(A), a = n;
    if (i === 0) return e[0] + a;
    for (var s = 0; i > 0 && s <= 4; s++) {
      var l = i % 10;
      l === 0 && jA(o, Ar) && a !== "" ? a = e[l] + a : l > 1 || l === 1 && s === 0 || l === 1 && s === 1 && jA(o, lt) || l === 1 && s === 1 && jA(o, ct) && A > 100 || l === 1 && s > 1 && jA(o, Rr) ? a = e[l] + (s > 0 ? t[s - 1] : "") + a : l === 1 && s > 0 && (a = t[s - 1] + a), i = Math.floor(i / 10);
    }
    return (A < 0 ? r : "") + a;
  }, xc = "\u5341\u767E\u5343\u842C", Hc = "\u62FE\u4F70\u4EDF\u842C", Tc = "\u30DE\u30A4\u30CA\u30B9", $i = "\uB9C8\uC774\uB108\uC2A4", Zr = function(A, e, t) {
    var r = t ? ". " : "", n = t ? "\u3001" : "", o = t ? ", " : "", i = t ? " " : "";
    switch (e) {
      case 0:
        return "\u2022" + i;
      case 1:
        return "\u25E6" + i;
      case 2:
        return "\u25FE" + i;
      case 5:
        var a = PA(A, 48, 57, true, r);
        return a.length < 4 ? "0" + a : a;
      case 4:
        return Ft(A, "\u3007\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", n);
      case 6:
        return Yt(A, 1, 3999, Sc, 3, r).toLowerCase();
      case 7:
        return Yt(A, 1, 3999, Sc, 3, r);
      case 8:
        return PA(A, 945, 969, false, r);
      case 9:
        return PA(A, 97, 122, false, r);
      case 10:
        return PA(A, 65, 90, false, r);
      case 11:
        return PA(A, 1632, 1641, true, r);
      case 12:
      case 49:
        return Yt(A, 1, 9999, Ic, 3, r);
      case 35:
        return Yt(A, 1, 9999, Ic, 3, r).toLowerCase();
      case 13:
        return PA(A, 2534, 2543, true, r);
      case 14:
      case 30:
        return PA(A, 6112, 6121, true, r);
      case 15:
        return Ft(A, "\u5B50\u4E11\u5BC5\u536F\u8FB0\u5DF3\u5348\u672A\u7533\u9149\u620C\u4EA5", n);
      case 16:
        return Ft(A, "\u7532\u4E59\u4E19\u4E01\u620A\u5DF1\u5E9A\u8F9B\u58EC\u7678", n);
      case 17:
      case 48:
        return Ze(A, "\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", xc, "\u8CA0", n, lt | ct | Rr);
      case 47:
        return Ze(A, "\u96F6\u58F9\u8CB3\u53C3\u8086\u4F0D\u9678\u67D2\u634C\u7396", Hc, "\u8CA0", n, Ar | lt | ct | Rr);
      case 42:
        return Ze(A, "\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", xc, "\u8D1F", n, lt | ct | Rr);
      case 41:
        return Ze(A, "\u96F6\u58F9\u8D30\u53C1\u8086\u4F0D\u9646\u67D2\u634C\u7396", Hc, "\u8D1F", n, Ar | lt | ct | Rr);
      case 26:
        return Ze(A, "\u3007\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u5341\u767E\u5343\u4E07", Tc, n, 0);
      case 25:
        return Ze(A, "\u96F6\u58F1\u5F10\u53C2\u56DB\u4F0D\u516D\u4E03\u516B\u4E5D", "\u62FE\u767E\u5343\u4E07", Tc, n, Ar | lt | ct);
      case 31:
        return Ze(A, "\uC601\uC77C\uC774\uC0BC\uC0AC\uC624\uC721\uCE60\uD314\uAD6C", "\uC2ED\uBC31\uCC9C\uB9CC", $i, o, Ar | lt | ct);
      case 33:
        return Ze(A, "\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u5341\u767E\u5343\u842C", $i, o, 0);
      case 32:
        return Ze(A, "\u96F6\u58F9\u8CB3\u53C3\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u62FE\u767E\u5343", $i, o, Ar | lt | ct);
      case 18:
        return PA(A, 2406, 2415, true, r);
      case 20:
        return Yt(A, 1, 19999, Nb, 3, r);
      case 21:
        return PA(A, 2790, 2799, true, r);
      case 22:
        return PA(A, 2662, 2671, true, r);
      case 22:
        return Yt(A, 1, 10999, Pb, 3, r);
      case 23:
        return Ft(A, "\u3042\u3044\u3046\u3048\u304A\u304B\u304D\u304F\u3051\u3053\u3055\u3057\u3059\u305B\u305D\u305F\u3061\u3064\u3066\u3068\u306A\u306B\u306C\u306D\u306E\u306F\u3072\u3075\u3078\u307B\u307E\u307F\u3080\u3081\u3082\u3084\u3086\u3088\u3089\u308A\u308B\u308C\u308D\u308F\u3090\u3091\u3092\u3093");
      case 24:
        return Ft(A, "\u3044\u308D\u306F\u306B\u307B\u3078\u3068\u3061\u308A\u306C\u308B\u3092\u308F\u304B\u3088\u305F\u308C\u305D\u3064\u306D\u306A\u3089\u3080\u3046\u3090\u306E\u304A\u304F\u3084\u307E\u3051\u3075\u3053\u3048\u3066\u3042\u3055\u304D\u3086\u3081\u307F\u3057\u3091\u3072\u3082\u305B\u3059");
      case 27:
        return PA(A, 3302, 3311, true, r);
      case 28:
        return Ft(A, "\u30A2\u30A4\u30A6\u30A8\u30AA\u30AB\u30AD\u30AF\u30B1\u30B3\u30B5\u30B7\u30B9\u30BB\u30BD\u30BF\u30C1\u30C4\u30C6\u30C8\u30CA\u30CB\u30CC\u30CD\u30CE\u30CF\u30D2\u30D5\u30D8\u30DB\u30DE\u30DF\u30E0\u30E1\u30E2\u30E4\u30E6\u30E8\u30E9\u30EA\u30EB\u30EC\u30ED\u30EF\u30F0\u30F1\u30F2\u30F3", n);
      case 29:
        return Ft(A, "\u30A4\u30ED\u30CF\u30CB\u30DB\u30D8\u30C8\u30C1\u30EA\u30CC\u30EB\u30F2\u30EF\u30AB\u30E8\u30BF\u30EC\u30BD\u30C4\u30CD\u30CA\u30E9\u30E0\u30A6\u30F0\u30CE\u30AA\u30AF\u30E4\u30DE\u30B1\u30D5\u30B3\u30A8\u30C6\u30A2\u30B5\u30AD\u30E6\u30E1\u30DF\u30B7\u30F1\u30D2\u30E2\u30BB\u30B9", n);
      case 34:
        return PA(A, 3792, 3801, true, r);
      case 37:
        return PA(A, 6160, 6169, true, r);
      case 38:
        return PA(A, 4160, 4169, true, r);
      case 39:
        return PA(A, 2918, 2927, true, r);
      case 40:
        return PA(A, 1776, 1785, true, r);
      case 43:
        return PA(A, 3046, 3055, true, r);
      case 44:
        return PA(A, 3174, 3183, true, r);
      case 45:
        return PA(A, 3664, 3673, true, r);
      case 46:
        return PA(A, 3872, 3881, true, r);
      default:
        return PA(A, 48, 57, true, r);
    }
  }, Af = "data-html2canvas-ignore", Lc = (function() {
    function A(e, t, r) {
      if (this.context = e, this.options = r, this.scrolledElements = [], this.referenceElement = t, this.counters = new Mb(), this.quoteDepth = 0, !t.ownerDocument) throw new Error("Cloned element does not have an owner document");
      this.documentElement = this.cloneNode(t.ownerDocument.documentElement, false);
    }
    return A.prototype.toIFrame = function(e, t) {
      var r = this, n = Gb(e, t);
      if (!n.contentWindow) return Promise.reject("Unable to find iframe window");
      var o = e.defaultView.pageXOffset, i = e.defaultView.pageYOffset, a = n.contentWindow, s = a.document, l = $b(n).then(function() {
        return fe(r, void 0, void 0, function() {
          var c, u;
          return se(this, function(d) {
            switch (d.label) {
              case 0:
                return this.scrolledElements.forEach(Jb), a && (a.scrollTo(t.left, t.top), /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (a.scrollY !== t.top || a.scrollX !== t.left) && (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(a.scrollX - t.left, a.scrollY - t.top, 0, 0))), c = this.options.onclone, u = this.clonedReferenceElement, typeof u > "u" ? [
                  2,
                  Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")
                ] : s.fonts && s.fonts.ready ? [
                  4,
                  s.fonts.ready
                ] : [
                  3,
                  2
                ];
              case 1:
                d.sent(), d.label = 2;
              case 2:
                return /(AppleWebKit)/g.test(navigator.userAgent) ? [
                  4,
                  Vb(s)
                ] : [
                  3,
                  4
                ];
              case 3:
                d.sent(), d.label = 4;
              case 4:
                return typeof c == "function" ? [
                  2,
                  Promise.resolve().then(function() {
                    return c(s, u);
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
      return s.open(), s.write(Xb(document.doctype) + "<html></html>"), jb(this.referenceElement.ownerDocument, o, i), s.replaceChild(s.adoptNode(this.documentElement), s.documentElement), s.close(), l;
    }, A.prototype.createElementClone = function(e) {
      if (Ta(e, 2)) debugger;
      if (Yd(e)) return this.createCanvasClone(e);
      if (Fc(e)) return this.createVideoClone(e);
      if (Uc(e)) return this.createStyleClone(e);
      var t = e.cloneNode(false);
      return Ka(t) && (Ka(e) && e.currentSrc && e.currentSrc !== e.src && (t.src = e.currentSrc, t.srcset = ""), t.loading === "lazy" && (t.loading = "eager")), Ec(t) ? this.createCustomElementClone(t) : t;
    }, A.prototype.createCustomElementClone = function(e) {
      var t = document.createElement("html2canvascustomelement");
      return Wi(e.style, t), t;
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
            var s = a.getContextAttributes();
            (s == null ? void 0 : s.preserveDrawingBuffer) === false && this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false", e);
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
      (!rr(t) || !Db(t) && !t.hasAttribute(Af) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(t))) && (!this.options.copyStyles || !rr(t) || !Uc(t)) && e.appendChild(this.cloneNode(t, r));
    }, A.prototype.cloneChildNodes = function(e, t, r) {
      for (var n = this, o = e.shadowRoot ? e.shadowRoot.firstChild : e.firstChild; o; o = o.nextSibling) if (rr(o) && Zd(o) && typeof o.assignedNodes == "function") {
        var i = o.assignedNodes();
        i.length && i.forEach(function(a) {
          return n.appendChildNode(t, a, r);
        });
      } else this.appendChildNode(t, o, r);
    }, A.prototype.cloneNode = function(e, t) {
      if (jd(e)) return document.createTextNode(e.data);
      if (!e.ownerDocument) return e.cloneNode(false);
      var r = e.ownerDocument.defaultView;
      if (r && rr(e) && (Ra(e) || eo(e))) {
        var n = this.createElementClone(e);
        n.style.transitionProperty = "none";
        var o = r.getComputedStyle(e), i = r.getComputedStyle(e, ":before"), a = r.getComputedStyle(e, ":after");
        this.referenceElement === e && Ra(n) && (this.clonedReferenceElement = n), Rs(n) && Zb(n);
        var s = this.counters.parse(new cc(this.context, o)), l = this.resolvePseudoContent(e, n, i, _r.BEFORE);
        Ec(e) && (t = true), Fc(e) || this.cloneChildNodes(e, n, t), l && n.insertBefore(l, n.firstChild);
        var c = this.resolvePseudoContent(e, n, a, _r.AFTER);
        return c && n.appendChild(c), this.counters.pop(s), (o && (this.options.copyStyles || eo(e)) && !zd(e) || t) && Wi(o, n), (e.scrollTop !== 0 || e.scrollLeft !== 0) && this.scrolledElements.push([
          n,
          e.scrollLeft,
          e.scrollTop
        ]), (wo(e) || Co(e)) && (wo(n) || Co(n)) && (n.value = e.value), n;
      }
      return e.cloneNode(false);
    }, A.prototype.resolvePseudoContent = function(e, t, r, n) {
      var o = this;
      if (r) {
        var i = r.content, a = t.ownerDocument;
        if (!(!a || !i || i === "none" || i === "-moz-alt-content" || r.display === "none")) {
          this.counters.parse(new cc(this.context, r));
          var s = new ky(this.context, r), l = a.createElement("html2canvaspseudoelement");
          Wi(r, l), s.content.forEach(function(u) {
            if (u.type === 0) l.appendChild(a.createTextNode(u.value));
            else if (u.type === 22) {
              var d = a.createElement("img");
              d.src = u.value, d.style.opacity = "1", l.appendChild(d);
            } else if (u.type === 18) {
              if (u.name === "attr") {
                var g = u.values.filter(QA);
                g.length && l.appendChild(a.createTextNode(e.getAttribute(g[0].value) || ""));
              } else if (u.name === "counter") {
                var B = u.values.filter(ur), p = B[0], b = B[1];
                if (p && QA(p)) {
                  var h = o.counters.getCounterValue(p.value), F = b && QA(b) ? Ha.parse(o.context, b.value) : 3;
                  l.appendChild(a.createTextNode(Zr(h, F, false)));
                }
              } else if (u.name === "counters") {
                var m = u.values.filter(ur), p = m[0], Q = m[1], b = m[2];
                if (p && QA(p)) {
                  var E = o.counters.getCounterValues(p.value), v = b && QA(b) ? Ha.parse(o.context, b.value) : 3, I = Q && Q.type === 0 ? Q.value : "", x = E.map(function(T) {
                    return Zr(T, v, false);
                  }).join(I);
                  l.appendChild(a.createTextNode(x));
                }
              }
            } else if (u.type === 20) switch (u.value) {
              case "open-quote":
                l.appendChild(a.createTextNode(lc(s.quotes, o.quoteDepth++, true)));
                break;
              case "close-quote":
                l.appendChild(a.createTextNode(lc(s.quotes, --o.quoteDepth, false)));
                break;
              default:
                l.appendChild(a.createTextNode(u.value));
            }
          }), l.className = Oa + " " + Da;
          var c = n === _r.BEFORE ? " " + Oa : " " + Da;
          return eo(t) ? t.className.baseValue += c : t.className += c, l;
        }
      }
    }, A.destroy = function(e) {
      return e.parentNode ? (e.parentNode.removeChild(e), true) : false;
    }, A;
  })(), _r;
  (function(A) {
    A[A.BEFORE = 0] = "BEFORE", A[A.AFTER = 1] = "AFTER";
  })(_r || (_r = {}));
  var Gb = function(A, e) {
    var t = A.createElement("iframe");
    return t.className = "html2canvas-container", t.style.visibility = "hidden", t.style.position = "fixed", t.style.left = "-10000px", t.style.top = "0px", t.style.border = "0", t.width = e.width.toString(), t.height = e.height.toString(), t.scrolling = "no", t.setAttribute(Af, "true"), A.body.appendChild(t), t;
  }, _b = function(A) {
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
  }, Vb = function(A) {
    return Promise.all([].slice.call(A.images, 0).map(_b));
  }, $b = function(A) {
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
  }, Wb = [
    "all",
    "d",
    "content"
  ], Wi = function(A, e) {
    for (var t = A.length - 1; t >= 0; t--) {
      var r = A.item(t);
      Wb.indexOf(r) === -1 && e.style.setProperty(r, A.getPropertyValue(r));
    }
    return e;
  }, Xb = function(A) {
    var e = "";
    return A && (e += "<!DOCTYPE ", A.name && (e += A.name), A.internalSubset && (e += A.internalSubset), A.publicId && (e += '"' + A.publicId + '"'), A.systemId && (e += '"' + A.systemId + '"'), e += ">"), e;
  }, jb = function(A, e, t) {
    A && A.defaultView && (e !== A.defaultView.pageXOffset || t !== A.defaultView.pageYOffset) && A.defaultView.scrollTo(e, t);
  }, Jb = function(A) {
    var e = A[0], t = A[1], r = A[2];
    e.scrollLeft = t, e.scrollTop = r;
  }, Yb = ":before", zb = ":after", Oa = "___html2canvas___pseudoelement_before", Da = "___html2canvas___pseudoelement_after", kc = `{
    content: "" !important;
    display: none !important;
}`, Zb = function(A) {
    qb(A, "." + Oa + Yb + kc + `
         .` + Da + zb + kc);
  }, qb = function(A, e) {
    var t = A.ownerDocument;
    if (t) {
      var r = t.createElement("style");
      r.textContent = e, A.appendChild(r);
    }
  }, ef = (function() {
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
  })(), AF = (function() {
    function A(e, t) {
      this.context = e, this._options = t, this._cache = {};
    }
    return A.prototype.addImage = function(e) {
      var t = Promise.resolve();
      return this.has(e) || (ji(e) || nF(e)) && (this._cache[e] = this.loadImage(e)).catch(function() {
      }), t;
    }, A.prototype.match = function(e) {
      return this._cache[e];
    }, A.prototype.loadImage = function(e) {
      return fe(this, void 0, void 0, function() {
        var t, r, n, o, i = this;
        return se(this, function(a) {
          switch (a.label) {
            case 0:
              return t = ef.isSameOrigin(e), r = !Xi(e) && this._options.useCORS === true && ee.SUPPORT_CORS_IMAGES && !t, n = !Xi(e) && !t && !ji(e) && typeof this._options.proxy == "string" && ee.SUPPORT_CORS_XHR && !r, !t && this._options.allowTaint === false && !Xi(e) && !ji(e) && !n && !r ? [
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
                new Promise(function(s, l) {
                  var c = new Image();
                  c.onload = function() {
                    return s(c);
                  }, c.onerror = l, (oF(o) || r) && (c.crossOrigin = "anonymous"), c.src = o, c.complete === true && setTimeout(function() {
                    return s(c);
                  }, 500), i._options.imageTimeout > 0 && setTimeout(function() {
                    return l("Timed out (" + i._options.imageTimeout + "ms) loading image");
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
        var a = ee.SUPPORT_RESPONSE_TYPE ? "blob" : "text", s = new XMLHttpRequest();
        s.onload = function() {
          if (s.status === 200) if (a === "text") o(s.response);
          else {
            var u = new FileReader();
            u.addEventListener("load", function() {
              return o(u.result);
            }, false), u.addEventListener("error", function(d) {
              return i(d);
            }, false), u.readAsDataURL(s.response);
          }
          else i("Failed to proxy resource " + n + " with status code " + s.status);
        }, s.onerror = i;
        var l = r.indexOf("?") > -1 ? "&" : "?";
        if (s.open("GET", "" + r + l + "url=" + encodeURIComponent(e) + "&responseType=" + a), a !== "text" && s instanceof XMLHttpRequest && (s.responseType = a), t._options.imageTimeout) {
          var c = t._options.imageTimeout;
          s.timeout = c, s.ontimeout = function() {
            return i("Timed out (" + c + "ms) proxying " + n);
          };
        }
        s.send();
      });
    }, A;
  })(), eF = /^data:image\/svg\+xml/i, tF = /^data:image\/.*;base64,/i, rF = /^data:image\/.*/i, nF = function(A) {
    return ee.SUPPORT_SVG_DRAWING || !iF(A);
  }, Xi = function(A) {
    return rF.test(A);
  }, oF = function(A) {
    return tF.test(A);
  }, ji = function(A) {
    return A.substr(0, 4) === "blob";
  }, iF = function(A) {
    return A.substr(-3).toLowerCase() === "svg" || eF.test(A);
  }, z = (function() {
    function A(e, t) {
      this.type = 0, this.x = e, this.y = t;
    }
    return A.prototype.add = function(e, t) {
      return new A(this.x + e, this.y + t);
    }, A;
  })(), zt = function(A, e, t) {
    return new z(A.x + (e.x - A.x) * t, A.y + (e.y - A.y) * t);
  }, _n = (function() {
    function A(e, t, r, n) {
      this.type = 1, this.start = e, this.startControl = t, this.endControl = r, this.end = n;
    }
    return A.prototype.subdivide = function(e, t) {
      var r = zt(this.start, this.startControl, e), n = zt(this.startControl, this.endControl, e), o = zt(this.endControl, this.end, e), i = zt(r, n, e), a = zt(n, o, e), s = zt(i, a, e);
      return t ? new A(this.start, r, i, s) : new A(s, a, o, this.end);
    }, A.prototype.add = function(e, t) {
      return new A(this.start.add(e, t), this.startControl.add(e, t), this.endControl.add(e, t), this.end.add(e, t));
    }, A.prototype.reverse = function() {
      return new A(this.end, this.endControl, this.startControl, this.start);
    }, A;
  })(), Fe = function(A) {
    return A.type === 1;
  }, aF = /* @__PURE__ */ (function() {
    function A(e) {
      var t = e.styles, r = e.bounds, n = Lr(t.borderTopLeftRadius, r.width, r.height), o = n[0], i = n[1], a = Lr(t.borderTopRightRadius, r.width, r.height), s = a[0], l = a[1], c = Lr(t.borderBottomRightRadius, r.width, r.height), u = c[0], d = c[1], g = Lr(t.borderBottomLeftRadius, r.width, r.height), B = g[0], p = g[1], b = [];
      b.push((o + s) / r.width), b.push((B + u) / r.width), b.push((i + p) / r.height), b.push((l + d) / r.height);
      var h = Math.max.apply(Math, b);
      h > 1 && (o /= h, i /= h, s /= h, l /= h, u /= h, d /= h, B /= h, p /= h);
      var F = r.width - s, m = r.height - d, Q = r.width - u, E = r.height - p, v = t.borderTopWidth, I = t.borderRightWidth, x = t.borderBottomWidth, H = t.borderLeftWidth, f = EA(t.paddingTop, e.bounds.width), T = EA(t.paddingRight, e.bounds.width), O = EA(t.paddingBottom, e.bounds.width), R = EA(t.paddingLeft, e.bounds.width);
      this.topLeftBorderDoubleOuterBox = o > 0 || i > 0 ? LA(r.left + H / 3, r.top + v / 3, o - H / 3, i - v / 3, mA.TOP_LEFT) : new z(r.left + H / 3, r.top + v / 3), this.topRightBorderDoubleOuterBox = o > 0 || i > 0 ? LA(r.left + F, r.top + v / 3, s - I / 3, l - v / 3, mA.TOP_RIGHT) : new z(r.left + r.width - I / 3, r.top + v / 3), this.bottomRightBorderDoubleOuterBox = u > 0 || d > 0 ? LA(r.left + Q, r.top + m, u - I / 3, d - x / 3, mA.BOTTOM_RIGHT) : new z(r.left + r.width - I / 3, r.top + r.height - x / 3), this.bottomLeftBorderDoubleOuterBox = B > 0 || p > 0 ? LA(r.left + H / 3, r.top + E, B - H / 3, p - x / 3, mA.BOTTOM_LEFT) : new z(r.left + H / 3, r.top + r.height - x / 3), this.topLeftBorderDoubleInnerBox = o > 0 || i > 0 ? LA(r.left + H * 2 / 3, r.top + v * 2 / 3, o - H * 2 / 3, i - v * 2 / 3, mA.TOP_LEFT) : new z(r.left + H * 2 / 3, r.top + v * 2 / 3), this.topRightBorderDoubleInnerBox = o > 0 || i > 0 ? LA(r.left + F, r.top + v * 2 / 3, s - I * 2 / 3, l - v * 2 / 3, mA.TOP_RIGHT) : new z(r.left + r.width - I * 2 / 3, r.top + v * 2 / 3), this.bottomRightBorderDoubleInnerBox = u > 0 || d > 0 ? LA(r.left + Q, r.top + m, u - I * 2 / 3, d - x * 2 / 3, mA.BOTTOM_RIGHT) : new z(r.left + r.width - I * 2 / 3, r.top + r.height - x * 2 / 3), this.bottomLeftBorderDoubleInnerBox = B > 0 || p > 0 ? LA(r.left + H * 2 / 3, r.top + E, B - H * 2 / 3, p - x * 2 / 3, mA.BOTTOM_LEFT) : new z(r.left + H * 2 / 3, r.top + r.height - x * 2 / 3), this.topLeftBorderStroke = o > 0 || i > 0 ? LA(r.left + H / 2, r.top + v / 2, o - H / 2, i - v / 2, mA.TOP_LEFT) : new z(r.left + H / 2, r.top + v / 2), this.topRightBorderStroke = o > 0 || i > 0 ? LA(r.left + F, r.top + v / 2, s - I / 2, l - v / 2, mA.TOP_RIGHT) : new z(r.left + r.width - I / 2, r.top + v / 2), this.bottomRightBorderStroke = u > 0 || d > 0 ? LA(r.left + Q, r.top + m, u - I / 2, d - x / 2, mA.BOTTOM_RIGHT) : new z(r.left + r.width - I / 2, r.top + r.height - x / 2), this.bottomLeftBorderStroke = B > 0 || p > 0 ? LA(r.left + H / 2, r.top + E, B - H / 2, p - x / 2, mA.BOTTOM_LEFT) : new z(r.left + H / 2, r.top + r.height - x / 2), this.topLeftBorderBox = o > 0 || i > 0 ? LA(r.left, r.top, o, i, mA.TOP_LEFT) : new z(r.left, r.top), this.topRightBorderBox = s > 0 || l > 0 ? LA(r.left + F, r.top, s, l, mA.TOP_RIGHT) : new z(r.left + r.width, r.top), this.bottomRightBorderBox = u > 0 || d > 0 ? LA(r.left + Q, r.top + m, u, d, mA.BOTTOM_RIGHT) : new z(r.left + r.width, r.top + r.height), this.bottomLeftBorderBox = B > 0 || p > 0 ? LA(r.left, r.top + E, B, p, mA.BOTTOM_LEFT) : new z(r.left, r.top + r.height), this.topLeftPaddingBox = o > 0 || i > 0 ? LA(r.left + H, r.top + v, Math.max(0, o - H), Math.max(0, i - v), mA.TOP_LEFT) : new z(r.left + H, r.top + v), this.topRightPaddingBox = s > 0 || l > 0 ? LA(r.left + Math.min(F, r.width - I), r.top + v, F > r.width + I ? 0 : Math.max(0, s - I), Math.max(0, l - v), mA.TOP_RIGHT) : new z(r.left + r.width - I, r.top + v), this.bottomRightPaddingBox = u > 0 || d > 0 ? LA(r.left + Math.min(Q, r.width - H), r.top + Math.min(m, r.height - x), Math.max(0, u - I), Math.max(0, d - x), mA.BOTTOM_RIGHT) : new z(r.left + r.width - I, r.top + r.height - x), this.bottomLeftPaddingBox = B > 0 || p > 0 ? LA(r.left + H, r.top + Math.min(E, r.height - x), Math.max(0, B - H), Math.max(0, p - x), mA.BOTTOM_LEFT) : new z(r.left + H, r.top + r.height - x), this.topLeftContentBox = o > 0 || i > 0 ? LA(r.left + H + R, r.top + v + f, Math.max(0, o - (H + R)), Math.max(0, i - (v + f)), mA.TOP_LEFT) : new z(r.left + H + R, r.top + v + f), this.topRightContentBox = s > 0 || l > 0 ? LA(r.left + Math.min(F, r.width + H + R), r.top + v + f, F > r.width + H + R ? 0 : s - H + R, l - (v + f), mA.TOP_RIGHT) : new z(r.left + r.width - (I + T), r.top + v + f), this.bottomRightContentBox = u > 0 || d > 0 ? LA(r.left + Math.min(Q, r.width - (H + R)), r.top + Math.min(m, r.height + v + f), Math.max(0, u - (I + T)), d - (x + O), mA.BOTTOM_RIGHT) : new z(r.left + r.width - (I + T), r.top + r.height - (x + O)), this.bottomLeftContentBox = B > 0 || p > 0 ? LA(r.left + H + R, r.top + E, Math.max(0, B - (H + R)), p - (x + O), mA.BOTTOM_LEFT) : new z(r.left + H + R, r.top + r.height - (x + O));
    }
    return A;
  })(), mA;
  (function(A) {
    A[A.TOP_LEFT = 0] = "TOP_LEFT", A[A.TOP_RIGHT = 1] = "TOP_RIGHT", A[A.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", A[A.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
  })(mA || (mA = {}));
  var LA = function(A, e, t, r, n) {
    var o = 4 * ((Math.sqrt(2) - 1) / 3), i = t * o, a = r * o, s = A + t, l = e + r;
    switch (n) {
      case mA.TOP_LEFT:
        return new _n(new z(A, l), new z(A, l - a), new z(s - i, e), new z(s, e));
      case mA.TOP_RIGHT:
        return new _n(new z(A, e), new z(A + i, e), new z(s, l - a), new z(s, l));
      case mA.BOTTOM_RIGHT:
        return new _n(new z(s, e), new z(s, e + a), new z(A + i, l), new z(A, l));
      case mA.BOTTOM_LEFT:
      default:
        return new _n(new z(s, l), new z(s - i, l), new z(A, e + a), new z(A, e));
    }
  }, mo = function(A) {
    return [
      A.topLeftBorderBox,
      A.topRightBorderBox,
      A.bottomRightBorderBox,
      A.bottomLeftBorderBox
    ];
  }, sF = function(A) {
    return [
      A.topLeftContentBox,
      A.topRightContentBox,
      A.bottomRightContentBox,
      A.bottomLeftContentBox
    ];
  }, vo = function(A) {
    return [
      A.topLeftPaddingBox,
      A.topRightPaddingBox,
      A.bottomRightPaddingBox,
      A.bottomLeftPaddingBox
    ];
  }, lF = /* @__PURE__ */ (function() {
    function A(e, t, r) {
      this.offsetX = e, this.offsetY = t, this.matrix = r, this.type = 0, this.target = 6;
    }
    return A;
  })(), Vn = /* @__PURE__ */ (function() {
    function A(e, t) {
      this.path = e, this.target = t, this.type = 1;
    }
    return A;
  })(), cF = /* @__PURE__ */ (function() {
    function A(e) {
      this.opacity = e, this.type = 2, this.target = 6;
    }
    return A;
  })(), uF = function(A) {
    return A.type === 0;
  }, tf = function(A) {
    return A.type === 1;
  }, dF = function(A) {
    return A.type === 2;
  }, Rc = function(A, e) {
    return A.length === e.length ? A.some(function(t, r) {
      return t === e[r];
    }) : false;
  }, fF = function(A, e, t, r, n) {
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
  }, rf = /* @__PURE__ */ (function() {
    function A(e) {
      this.element = e, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
    }
    return A;
  })(), nf = (function() {
    function A(e, t) {
      if (this.container = e, this.parent = t, this.effects = [], this.curves = new aF(this.container), this.container.styles.opacity < 1 && this.effects.push(new cF(this.container.styles.opacity)), this.container.styles.transform !== null) {
        var r = this.container.bounds.left + this.container.styles.transformOrigin[0].number, n = this.container.bounds.top + this.container.styles.transformOrigin[1].number, o = this.container.styles.transform;
        this.effects.push(new lF(r, n, o));
      }
      if (this.container.styles.overflowX !== 0) {
        var i = mo(this.curves), a = vo(this.curves);
        Rc(i, a) ? this.effects.push(new Vn(i, 6)) : (this.effects.push(new Vn(i, 2)), this.effects.push(new Vn(a, 4)));
      }
    }
    return A.prototype.getEffects = function(e) {
      for (var t = [
        2,
        3
      ].indexOf(this.container.styles.position) === -1, r = this.parent, n = this.effects.slice(0); r; ) {
        var o = r.effects.filter(function(s) {
          return !tf(s);
        });
        if (t || r.container.styles.position !== 0 || !r.parent) {
          if (n.unshift.apply(n, o), t = [
            2,
            3
          ].indexOf(r.container.styles.position) === -1, r.container.styles.overflowX !== 0) {
            var i = mo(r.curves), a = vo(r.curves);
            Rc(i, a) || n.unshift(new Vn(a, 6));
          }
        } else n.unshift.apply(n, o);
        r = r.parent;
      }
      return n.filter(function(s) {
        return jA(s.target, e);
      });
    }, A;
  })(), Ma = function(A, e, t, r) {
    A.container.elements.forEach(function(n) {
      var o = jA(n.flags, 4), i = jA(n.flags, 2), a = new nf(n, A);
      jA(n.styles.display, 2048) && r.push(a);
      var s = jA(n.flags, 8) ? [] : r;
      if (o || i) {
        var l = o || n.styles.isPositioned() ? t : e, c = new rf(a);
        if (n.styles.isPositioned() || n.styles.opacity < 1 || n.styles.isTransformed()) {
          var u = n.styles.zIndex.order;
          if (u < 0) {
            var d = 0;
            l.negativeZIndex.some(function(B, p) {
              return u > B.element.container.styles.zIndex.order ? (d = p, false) : d > 0;
            }), l.negativeZIndex.splice(d, 0, c);
          } else if (u > 0) {
            var g = 0;
            l.positiveZIndex.some(function(B, p) {
              return u >= B.element.container.styles.zIndex.order ? (g = p + 1, false) : g > 0;
            }), l.positiveZIndex.splice(g, 0, c);
          } else l.zeroOrAutoZIndexOrTransformedOrOpacity.push(c);
        } else n.styles.isFloating() ? l.nonPositionedFloats.push(c) : l.nonPositionedInlineLevel.push(c);
        Ma(a, c, o ? c : t, s);
      } else n.styles.isInlineLevel() ? e.inlineLevel.push(a) : e.nonInlineLevel.push(a), Ma(a, e, t, s);
      jA(n.flags, 8) && of(n, s);
    });
  }, of = function(A, e) {
    for (var t = A instanceof ka ? A.start : 1, r = A instanceof ka ? A.reversed : false, n = 0; n < e.length; n++) {
      var o = e[n];
      o.container instanceof Gd && typeof o.container.value == "number" && o.container.value !== 0 && (t = o.container.value), o.listValue = Zr(t, o.container.styles.listStyleType, true), t += r ? -1 : 1;
    }
  }, gF = function(A) {
    var e = new nf(A, null), t = new rf(e), r = [];
    return Ma(e, t, t, r), of(e.container, r), t;
  }, Kc = function(A, e) {
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
  }, BF = function(A, e) {
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
  }, pF = function(A, e) {
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
  }, hF = function(A, e) {
    switch (e) {
      case 0:
        return $n(A.topLeftBorderStroke, A.topRightBorderStroke);
      case 1:
        return $n(A.topRightBorderStroke, A.bottomRightBorderStroke);
      case 2:
        return $n(A.bottomRightBorderStroke, A.bottomLeftBorderStroke);
      default:
        return $n(A.bottomLeftBorderStroke, A.topLeftBorderStroke);
    }
  }, $n = function(A, e) {
    var t = [];
    return Fe(A) ? t.push(A.subdivide(0.5, false)) : t.push(A), Fe(e) ? t.push(e.subdivide(0.5, true)) : t.push(e), t;
  }, Ee = function(A, e, t, r) {
    var n = [];
    return Fe(A) ? n.push(A.subdivide(0.5, false)) : n.push(A), Fe(t) ? n.push(t.subdivide(0.5, true)) : n.push(t), Fe(r) ? n.push(r.subdivide(0.5, true).reverse()) : n.push(r), Fe(e) ? n.push(e.subdivide(0.5, false).reverse()) : n.push(e), n;
  }, af = function(A) {
    var e = A.bounds, t = A.styles;
    return e.add(t.borderLeftWidth, t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth), -(t.borderTopWidth + t.borderBottomWidth));
  }, Qo = function(A) {
    var e = A.styles, t = A.bounds, r = EA(e.paddingLeft, t.width), n = EA(e.paddingRight, t.width), o = EA(e.paddingTop, t.width), i = EA(e.paddingBottom, t.width);
    return t.add(r + e.borderLeftWidth, o + e.borderTopWidth, -(e.borderRightWidth + e.borderLeftWidth + r + n), -(e.borderTopWidth + e.borderBottomWidth + o + i));
  }, wF = function(A, e) {
    return A === 0 ? e.bounds : A === 2 ? Qo(e) : af(e);
  }, CF = function(A, e) {
    return A === 0 ? e.bounds : A === 2 ? Qo(e) : af(e);
  }, Ji = function(A, e, t) {
    var r = wF(er(A.styles.backgroundOrigin, e), A), n = CF(er(A.styles.backgroundClip, e), A), o = mF(er(A.styles.backgroundSize, e), t, r), i = o[0], a = o[1], s = Lr(er(A.styles.backgroundPosition, e), r.width - i, r.height - a), l = vF(er(A.styles.backgroundRepeat, e), s, o, r, n), c = Math.round(r.left + s[0]), u = Math.round(r.top + s[1]);
    return [
      l,
      c,
      u,
      i,
      a
    ];
  }, Zt = function(A) {
    return QA(A) && A.value === ir.AUTO;
  }, Wn = function(A) {
    return typeof A == "number";
  }, mF = function(A, e, t) {
    var r = e[0], n = e[1], o = e[2], i = A[0], a = A[1];
    if (!i) return [
      0,
      0
    ];
    if ($A(i) && a && $A(a)) return [
      EA(i, t.width),
      EA(a, t.height)
    ];
    var s = Wn(o);
    if (QA(i) && (i.value === ir.CONTAIN || i.value === ir.COVER)) {
      if (Wn(o)) {
        var l = t.width / t.height;
        return l < o != (i.value === ir.COVER) ? [
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
    var c = Wn(r), u = Wn(n), d = c || u;
    if (Zt(i) && (!a || Zt(a))) {
      if (c && u) return [
        r,
        n
      ];
      if (!s && !d) return [
        t.width,
        t.height
      ];
      if (d && s) {
        var g = c ? r : n * o, B = u ? n : r / o;
        return [
          g,
          B
        ];
      }
      var p = c ? r : t.width, b = u ? n : t.height;
      return [
        p,
        b
      ];
    }
    if (s) {
      var h = 0, F = 0;
      return $A(i) ? h = EA(i, t.width) : $A(a) && (F = EA(a, t.height)), Zt(i) ? h = F * o : (!a || Zt(a)) && (F = h / o), [
        h,
        F
      ];
    }
    var m = null, Q = null;
    if ($A(i) ? m = EA(i, t.width) : a && $A(a) && (Q = EA(a, t.height)), m !== null && (!a || Zt(a)) && (Q = c && u ? m / r * n : t.height), Q !== null && Zt(i) && (m = c && u ? Q / n * r : t.width), m !== null && Q !== null) return [
      m,
      Q
    ];
    throw new Error("Unable to calculate background-size for element");
  }, er = function(A, e) {
    var t = A[e];
    return typeof t > "u" ? A[0] : t;
  }, vF = function(A, e, t, r, n) {
    var o = e[0], i = e[1], a = t[0], s = t[1];
    switch (A) {
      case 2:
        return [
          new z(Math.round(r.left), Math.round(r.top + i)),
          new z(Math.round(r.left + r.width), Math.round(r.top + i)),
          new z(Math.round(r.left + r.width), Math.round(s + r.top + i)),
          new z(Math.round(r.left), Math.round(s + r.top + i))
        ];
      case 3:
        return [
          new z(Math.round(r.left + o), Math.round(r.top)),
          new z(Math.round(r.left + o + a), Math.round(r.top)),
          new z(Math.round(r.left + o + a), Math.round(r.height + r.top)),
          new z(Math.round(r.left + o), Math.round(r.height + r.top))
        ];
      case 1:
        return [
          new z(Math.round(r.left + o), Math.round(r.top + i)),
          new z(Math.round(r.left + o + a), Math.round(r.top + i)),
          new z(Math.round(r.left + o + a), Math.round(r.top + i + s)),
          new z(Math.round(r.left + o), Math.round(r.top + i + s))
        ];
      default:
        return [
          new z(Math.round(n.left), Math.round(n.top)),
          new z(Math.round(n.left + n.width), Math.round(n.top)),
          new z(Math.round(n.left + n.width), Math.round(n.height + n.top)),
          new z(Math.round(n.left), Math.round(n.height + n.top))
        ];
    }
  }, QF = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", Oc = "Hidden Text", yF = (function() {
    function A(e) {
      this._data = {}, this._document = e;
    }
    return A.prototype.parseMetrics = function(e, t) {
      var r = this._document.createElement("div"), n = this._document.createElement("img"), o = this._document.createElement("span"), i = this._document.body;
      r.style.visibility = "hidden", r.style.fontFamily = e, r.style.fontSize = t, r.style.margin = "0", r.style.padding = "0", r.style.whiteSpace = "nowrap", i.appendChild(r), n.src = QF, n.width = 1, n.height = 1, n.style.margin = "0", n.style.padding = "0", n.style.verticalAlign = "baseline", o.style.fontFamily = e, o.style.fontSize = t, o.style.margin = "0", o.style.padding = "0", o.appendChild(this._document.createTextNode(Oc)), r.appendChild(o), r.appendChild(n);
      var a = n.offsetTop - o.offsetTop + 2;
      r.removeChild(o), r.appendChild(this._document.createTextNode(Oc)), r.style.lineHeight = "normal", n.style.verticalAlign = "super";
      var s = n.offsetTop - r.offsetTop + 2;
      return i.removeChild(r), {
        baseline: a,
        middle: s
      };
    }, A.prototype.getMetrics = function(e, t) {
      var r = e + " " + t;
      return typeof this._data[r] > "u" && (this._data[r] = this.parseMetrics(e, t)), this._data[r];
    }, A;
  })(), sf = /* @__PURE__ */ (function() {
    function A(e, t) {
      this.context = e, this.options = t;
    }
    return A;
  })(), bF = 1e4, FF = (function(A) {
    Le(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n._activeEffects = [], n.canvas = r.canvas ? r.canvas : document.createElement("canvas"), n.ctx = n.canvas.getContext("2d"), r.canvas || (n.canvas.width = Math.floor(r.width * r.scale), n.canvas.height = Math.floor(r.height * r.scale), n.canvas.style.width = r.width + "px", n.canvas.style.height = r.height + "px"), n.fontMetrics = new yF(document), n.ctx.scale(n.options.scale, n.options.scale), n.ctx.translate(-r.x, -r.y), n.ctx.textBaseline = "bottom", n._activeEffects = [], n.context.logger.debug("Canvas renderer initialized (" + r.width + "x" + r.height + ") with scale " + r.scale), n;
    }
    return e.prototype.applyEffects = function(t) {
      for (var r = this; this._activeEffects.length; ) this.popEffect();
      t.forEach(function(n) {
        return r.applyEffect(n);
      });
    }, e.prototype.applyEffect = function(t) {
      this.ctx.save(), dF(t) && (this.ctx.globalAlpha = t.opacity), uF(t) && (this.ctx.translate(t.offsetX, t.offsetY), this.ctx.transform(t.matrix[0], t.matrix[1], t.matrix[2], t.matrix[3], t.matrix[4], t.matrix[5]), this.ctx.translate(-t.offsetX, -t.offsetY)), tf(t) && (this.path(t.path), this.ctx.clip()), this._activeEffects.push(t);
    }, e.prototype.popEffect = function() {
      this._activeEffects.pop(), this.ctx.restore();
    }, e.prototype.renderStack = function(t) {
      return fe(this, void 0, void 0, function() {
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
      return fe(this, void 0, void 0, function() {
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
        var i = Ls(t.text);
        i.reduce(function(a, s) {
          return o.ctx.fillText(s, a, t.bounds.top + n), a + o.ctx.measureText(s).width;
        }, t.bounds.left);
      }
    }, e.prototype.createFontStyle = function(t) {
      var r = t.fontVariant.filter(function(i) {
        return i === "normal" || i === "small-caps";
      }).join(""), n = xF(t.fontFamily).join(", "), o = dn(t.fontSize) ? "" + t.fontSize.number + t.fontSize.unit : t.fontSize.number + "px";
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
      return fe(this, void 0, void 0, function() {
        var n, o, i, a, s, l, c, u, d = this;
        return se(this, function(g) {
          return n = this.createFontStyle(r), o = n[0], i = n[1], a = n[2], this.ctx.font = o, this.ctx.direction = r.direction === 1 ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", s = this.fontMetrics.getMetrics(i, a), l = s.baseline, c = s.middle, u = r.paintOrder, t.textBounds.forEach(function(B) {
            u.forEach(function(p) {
              switch (p) {
                case 0:
                  d.ctx.fillStyle = YA(r.color), d.renderTextWithLetterSpacing(B, r.letterSpacing, l);
                  var b = r.textShadow;
                  b.length && B.text.trim().length && (b.slice(0).reverse().forEach(function(h) {
                    d.ctx.shadowColor = YA(h.color), d.ctx.shadowOffsetX = h.offsetX.number * d.options.scale, d.ctx.shadowOffsetY = h.offsetY.number * d.options.scale, d.ctx.shadowBlur = h.blur.number, d.renderTextWithLetterSpacing(B, r.letterSpacing, l);
                  }), d.ctx.shadowColor = "", d.ctx.shadowOffsetX = 0, d.ctx.shadowOffsetY = 0, d.ctx.shadowBlur = 0), r.textDecorationLine.length && (d.ctx.fillStyle = YA(r.textDecorationColor || r.color), r.textDecorationLine.forEach(function(h) {
                    switch (h) {
                      case 1:
                        d.ctx.fillRect(B.bounds.left, Math.round(B.bounds.top + l), B.bounds.width, 1);
                        break;
                      case 2:
                        d.ctx.fillRect(B.bounds.left, Math.round(B.bounds.top), B.bounds.width, 1);
                        break;
                      case 3:
                        d.ctx.fillRect(B.bounds.left, Math.ceil(B.bounds.top + c), B.bounds.width, 1);
                        break;
                    }
                  }));
                  break;
                case 1:
                  r.webkitTextStrokeWidth && B.text.trim().length && (d.ctx.strokeStyle = YA(r.webkitTextStrokeColor), d.ctx.lineWidth = r.webkitTextStrokeWidth, d.ctx.lineJoin = window.chrome ? "miter" : "round", d.ctx.strokeText(B.text, B.bounds.left, B.bounds.top + l)), d.ctx.strokeStyle = "", d.ctx.lineWidth = 0, d.ctx.lineJoin = "miter";
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
        var o = Qo(t), i = vo(r);
        this.path(i), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(n, 0, 0, t.intrinsicWidth, t.intrinsicHeight, o.left, o.top, o.width, o.height), this.ctx.restore();
      }
    }, e.prototype.renderNodeContent = function(t) {
      return fe(this, void 0, void 0, function() {
        var r, n, o, i, a, s, F, F, l, c, u, d, Q, g, B, E, p, b, h, F, m, Q, E;
        return se(this, function(v) {
          switch (v.label) {
            case 0:
              this.applyEffects(t.getEffects(4)), r = t.container, n = t.curves, o = r.styles, i = 0, a = r.textNodes, v.label = 1;
            case 1:
              return i < a.length ? (s = a[i], [
                4,
                this.renderTextNode(s, o)
              ]) : [
                3,
                4
              ];
            case 2:
              v.sent(), v.label = 3;
            case 3:
              return i++, [
                3,
                1
              ];
            case 4:
              if (!(r instanceof Md)) return [
                3,
                8
              ];
              v.label = 5;
            case 5:
              return v.trys.push([
                5,
                7,
                ,
                8
              ]), [
                4,
                this.context.cache.match(r.src)
              ];
            case 6:
              return F = v.sent(), this.renderReplacedElement(r, n, F), [
                3,
                8
              ];
            case 7:
              return v.sent(), this.context.logger.error("Error loading image " + r.src), [
                3,
                8
              ];
            case 8:
              if (r instanceof Pd && this.renderReplacedElement(r, n, r.canvas), !(r instanceof Nd)) return [
                3,
                12
              ];
              v.label = 9;
            case 9:
              return v.trys.push([
                9,
                11,
                ,
                12
              ]), [
                4,
                this.context.cache.match(r.svg)
              ];
            case 10:
              return F = v.sent(), this.renderReplacedElement(r, n, F), [
                3,
                12
              ];
            case 11:
              return v.sent(), this.context.logger.error("Error loading svg " + r.svg.substring(0, 255)), [
                3,
                12
              ];
            case 12:
              return r instanceof $d && r.tree ? (l = new e(this.context, {
                scale: this.options.scale,
                backgroundColor: r.backgroundColor,
                x: 0,
                y: 0,
                width: r.width,
                height: r.height
              }), [
                4,
                l.render(r.tree)
              ]) : [
                3,
                14
              ];
            case 13:
              c = v.sent(), r.width && r.height && this.ctx.drawImage(c, 0, 0, r.width, r.height, r.bounds.left, r.bounds.top, r.bounds.width, r.bounds.height), v.label = 14;
            case 14:
              if (r instanceof ks && (u = Math.min(r.bounds.width, r.bounds.height), r.type === po ? r.checked && (this.ctx.save(), this.path([
                new z(r.bounds.left + u * 0.39363, r.bounds.top + u * 0.79),
                new z(r.bounds.left + u * 0.16, r.bounds.top + u * 0.5549),
                new z(r.bounds.left + u * 0.27347, r.bounds.top + u * 0.44071),
                new z(r.bounds.left + u * 0.39694, r.bounds.top + u * 0.5649),
                new z(r.bounds.left + u * 0.72983, r.bounds.top + u * 0.23),
                new z(r.bounds.left + u * 0.84, r.bounds.top + u * 0.34085),
                new z(r.bounds.left + u * 0.39363, r.bounds.top + u * 0.79)
              ]), this.ctx.fillStyle = YA(bc), this.ctx.fill(), this.ctx.restore()) : r.type === ho && r.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(r.bounds.left + u / 2, r.bounds.top + u / 2, u / 4, 0, Math.PI * 2, true), this.ctx.fillStyle = YA(bc), this.ctx.fill(), this.ctx.restore())), UF(r) && r.value.length) {
                switch (d = this.createFontStyle(o), Q = d[0], g = d[1], B = this.fontMetrics.getMetrics(Q, g).baseline, this.ctx.font = Q, this.ctx.fillStyle = YA(o.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = SF(r.styles.textAlign), E = Qo(r), p = 0, r.styles.textAlign) {
                  case 1:
                    p += E.width / 2;
                    break;
                  case 2:
                    p += E.width;
                    break;
                }
                b = E.add(p, 0, 0, -E.height / 2 + 1), this.ctx.save(), this.path([
                  new z(E.left, E.top),
                  new z(E.left + E.width, E.top),
                  new z(E.left + E.width, E.top + E.height),
                  new z(E.left, E.top + E.height)
                ]), this.ctx.clip(), this.renderTextWithLetterSpacing(new Gr(r.value, b), o.letterSpacing, B), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
              }
              if (!jA(r.styles.display, 2048)) return [
                3,
                20
              ];
              if (r.styles.listStyleImage === null) return [
                3,
                19
              ];
              if (h = r.styles.listStyleImage, h.type !== 0) return [
                3,
                18
              ];
              F = void 0, m = h.url, v.label = 15;
            case 15:
              return v.trys.push([
                15,
                17,
                ,
                18
              ]), [
                4,
                this.context.cache.match(m)
              ];
            case 16:
              return F = v.sent(), this.ctx.drawImage(F, r.bounds.left - (F.width + 10), r.bounds.top), [
                3,
                18
              ];
            case 17:
              return v.sent(), this.context.logger.error("Error loading list-style-image " + m), [
                3,
                18
              ];
            case 18:
              return [
                3,
                20
              ];
            case 19:
              t.listValue && r.styles.listStyleType !== -1 && (Q = this.createFontStyle(o)[0], this.ctx.font = Q, this.ctx.fillStyle = YA(o.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", E = new it(r.bounds.left, r.bounds.top + EA(r.styles.paddingTop, r.bounds.width), r.bounds.width, ac(o.lineHeight, o.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new Gr(t.listValue, E), o.letterSpacing, ac(o.lineHeight, o.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), v.label = 20;
            case 20:
              return [
                2
              ];
          }
        });
      });
    }, e.prototype.renderStackContent = function(t) {
      return fe(this, void 0, void 0, function() {
        var r, n, h, o, i, h, a, s, h, l, c, h, u, d, h, g, B, h, p, b, h;
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
              return r < n.length ? (h = n[r], [
                4,
                this.renderStack(h)
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
              return o < i.length ? (h = i[o], [
                4,
                this.renderNode(h)
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
              a = 0, s = t.nonPositionedFloats, F.label = 11;
            case 11:
              return a < s.length ? (h = s[a], [
                4,
                this.renderStack(h)
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
              l = 0, c = t.nonPositionedInlineLevel, F.label = 15;
            case 15:
              return l < c.length ? (h = c[l], [
                4,
                this.renderStack(h)
              ]) : [
                3,
                18
              ];
            case 16:
              F.sent(), F.label = 17;
            case 17:
              return l++, [
                3,
                15
              ];
            case 18:
              u = 0, d = t.inlineLevel, F.label = 19;
            case 19:
              return u < d.length ? (h = d[u], [
                4,
                this.renderNode(h)
              ]) : [
                3,
                22
              ];
            case 20:
              F.sent(), F.label = 21;
            case 21:
              return u++, [
                3,
                19
              ];
            case 22:
              g = 0, B = t.zeroOrAutoZIndexOrTransformedOrOpacity, F.label = 23;
            case 23:
              return g < B.length ? (h = B[g], [
                4,
                this.renderStack(h)
              ]) : [
                3,
                26
              ];
            case 24:
              F.sent(), F.label = 25;
            case 25:
              return g++, [
                3,
                23
              ];
            case 26:
              p = 0, b = t.positiveZIndex, F.label = 27;
            case 27:
              return p < b.length ? (h = b[p], [
                4,
                this.renderStack(h)
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
      var s = a.getContext("2d");
      return s.drawImage(t, 0, 0, t.width, t.height, 0, 0, r, n), a;
    }, e.prototype.renderBackgroundImage = function(t) {
      return fe(this, void 0, void 0, function() {
        var r, n, o, i, a, s;
        return se(this, function(l) {
          switch (l.label) {
            case 0:
              r = t.styles.backgroundImage.length - 1, n = function(c) {
                var u, d, g, f, D, X, R, V, x, B, f, D, X, R, V, p, b, h, F, m, Q, E, v, I, x, H, f, T, O, R, V, K, D, X, nA, M, j, AA, rA, L, $, _;
                return se(this, function(Y) {
                  switch (Y.label) {
                    case 0:
                      if (c.type !== 0) return [
                        3,
                        5
                      ];
                      u = void 0, d = c.url, Y.label = 1;
                    case 1:
                      return Y.trys.push([
                        1,
                        3,
                        ,
                        4
                      ]), [
                        4,
                        o.context.cache.match(d)
                      ];
                    case 2:
                      return u = Y.sent(), [
                        3,
                        4
                      ];
                    case 3:
                      return Y.sent(), o.context.logger.error("Error loading background-image " + d), [
                        3,
                        4
                      ];
                    case 4:
                      return u && (g = Ji(t, r, [
                        u.width,
                        u.height,
                        u.width / u.height
                      ]), f = g[0], D = g[1], X = g[2], R = g[3], V = g[4], x = o.ctx.createPattern(o.resizeImage(u, R, V), "repeat"), o.renderRepeat(f, x, D, X)), [
                        3,
                        6
                      ];
                    case 5:
                      uQ(c) ? (B = Ji(t, r, [
                        null,
                        null,
                        null
                      ]), f = B[0], D = B[1], X = B[2], R = B[3], V = B[4], p = iQ(c.angle, R, V), b = p[0], h = p[1], F = p[2], m = p[3], Q = p[4], E = document.createElement("canvas"), E.width = R, E.height = V, v = E.getContext("2d"), I = v.createLinearGradient(h, m, F, Q), oc(c.stops, b).forEach(function(uA) {
                        return I.addColorStop(uA.stop, YA(uA.color));
                      }), v.fillStyle = I, v.fillRect(0, 0, R, V), R > 0 && V > 0 && (x = o.ctx.createPattern(E, "repeat"), o.renderRepeat(f, x, D, X))) : dQ(c) && (H = Ji(t, r, [
                        null,
                        null,
                        null
                      ]), f = H[0], T = H[1], O = H[2], R = H[3], V = H[4], K = c.position.length === 0 ? [
                        xs
                      ] : c.position, D = EA(K[0], R), X = EA(K[K.length - 1], V), nA = aQ(c, D, X, R, V), M = nA[0], j = nA[1], M > 0 && j > 0 && (AA = o.ctx.createRadialGradient(T + D, O + X, 0, T + D, O + X, M), oc(c.stops, M * 2).forEach(function(uA) {
                        return AA.addColorStop(uA.stop, YA(uA.color));
                      }), o.path(f), o.ctx.fillStyle = AA, M !== j ? (rA = t.bounds.left + 0.5 * t.bounds.width, L = t.bounds.top + 0.5 * t.bounds.height, $ = j / M, _ = 1 / $, o.ctx.save(), o.ctx.translate(rA, L), o.ctx.transform(1, 0, 0, $, 0, 0), o.ctx.translate(-rA, -L), o.ctx.fillRect(T, _ * (O - L) + L, R, V * _), o.ctx.restore()) : o.ctx.fill())), Y.label = 6;
                    case 6:
                      return r--, [
                        2
                      ];
                  }
                });
              }, o = this, i = 0, a = t.styles.backgroundImage.slice(0).reverse(), l.label = 1;
            case 1:
              return i < a.length ? (s = a[i], [
                5,
                n(s)
              ]) : [
                3,
                4
              ];
            case 2:
              l.sent(), l.label = 3;
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
      return fe(this, void 0, void 0, function() {
        return se(this, function(o) {
          return this.path(Kc(n, r)), this.ctx.fillStyle = YA(t), this.ctx.fill(), [
            2
          ];
        });
      });
    }, e.prototype.renderDoubleBorder = function(t, r, n, o) {
      return fe(this, void 0, void 0, function() {
        var i, a;
        return se(this, function(s) {
          switch (s.label) {
            case 0:
              return r < 3 ? [
                4,
                this.renderSolidBorder(t, n, o)
              ] : [
                3,
                2
              ];
            case 1:
              return s.sent(), [
                2
              ];
            case 2:
              return i = BF(o, n), this.path(i), this.ctx.fillStyle = YA(t), this.ctx.fill(), a = pF(o, n), this.path(a), this.ctx.fill(), [
                2
              ];
          }
        });
      });
    }, e.prototype.renderNodeBackgroundAndBorders = function(t) {
      return fe(this, void 0, void 0, function() {
        var r, n, o, i, a, s, l, c, u = this;
        return se(this, function(d) {
          switch (d.label) {
            case 0:
              return this.applyEffects(t.getEffects(2)), r = t.container.styles, n = !wt(r.backgroundColor) || r.backgroundImage.length, o = [
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
              ], i = EF(er(r.backgroundClip, 0), t.curves), n || r.boxShadow.length ? (this.ctx.save(), this.path(i), this.ctx.clip(), wt(r.backgroundColor) || (this.ctx.fillStyle = YA(r.backgroundColor), this.ctx.fill()), [
                4,
                this.renderBackgroundImage(t.container)
              ]) : [
                3,
                2
              ];
            case 1:
              d.sent(), this.ctx.restore(), r.boxShadow.slice(0).reverse().forEach(function(g) {
                u.ctx.save();
                var B = mo(t.curves), p = g.inset ? 0 : bF, b = fF(B, -p + (g.inset ? 1 : -1) * g.spread.number, (g.inset ? 1 : -1) * g.spread.number, g.spread.number * (g.inset ? -2 : 2), g.spread.number * (g.inset ? -2 : 2));
                g.inset ? (u.path(B), u.ctx.clip(), u.mask(b)) : (u.mask(B), u.ctx.clip(), u.path(b)), u.ctx.shadowOffsetX = g.offsetX.number + p, u.ctx.shadowOffsetY = g.offsetY.number, u.ctx.shadowColor = YA(g.color), u.ctx.shadowBlur = g.blur.number, u.ctx.fillStyle = g.inset ? YA(g.color) : "rgba(0,0,0,1)", u.ctx.fill(), u.ctx.restore();
              }), d.label = 2;
            case 2:
              a = 0, s = 0, l = o, d.label = 3;
            case 3:
              return s < l.length ? (c = l[s], c.style !== 0 && !wt(c.color) && c.width > 0 ? c.style !== 2 ? [
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
              return d.sent(), [
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
              return d.sent(), [
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
              return d.sent(), [
                3,
                11
              ];
            case 9:
              return [
                4,
                this.renderSolidBorder(c.color, a, t.curves)
              ];
            case 10:
              d.sent(), d.label = 11;
            case 11:
              a++, d.label = 12;
            case 12:
              return s++, [
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
      return fe(this, void 0, void 0, function() {
        var a, s, l, c, u, d, g, B, p, b, h, F, m, Q, E, v, E, v;
        return se(this, function(I) {
          return this.ctx.save(), a = hF(o, n), s = Kc(o, n), i === 2 && (this.path(s), this.ctx.clip()), Fe(s[0]) ? (l = s[0].start.x, c = s[0].start.y) : (l = s[0].x, c = s[0].y), Fe(s[1]) ? (u = s[1].end.x, d = s[1].end.y) : (u = s[1].x, d = s[1].y), n === 0 || n === 2 ? g = Math.abs(l - u) : g = Math.abs(c - d), this.ctx.beginPath(), i === 3 ? this.formatPath(a) : this.formatPath(s.slice(0, 2)), B = r < 3 ? r * 3 : r * 2, p = r < 3 ? r * 2 : r, i === 3 && (B = r, p = r), b = true, g <= B * 2 ? b = false : g <= B * 2 + p ? (h = g / (2 * B + p), B *= h, p *= h) : (F = Math.floor((g + p) / (B + p)), m = (g - F * B) / (F - 1), Q = (g - (F + 1) * B) / F, p = Q <= 0 || Math.abs(p - m) < Math.abs(p - Q) ? m : Q), b && (i === 3 ? this.ctx.setLineDash([
            0,
            B + p
          ]) : this.ctx.setLineDash([
            B,
            p
          ])), i === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = r) : this.ctx.lineWidth = r * 2 + 1.1, this.ctx.strokeStyle = YA(t), this.ctx.stroke(), this.ctx.setLineDash([]), i === 2 && (Fe(s[0]) && (E = s[3], v = s[0], this.ctx.beginPath(), this.formatPath([
            new z(E.end.x, E.end.y),
            new z(v.start.x, v.start.y)
          ]), this.ctx.stroke()), Fe(s[1]) && (E = s[1], v = s[2], this.ctx.beginPath(), this.formatPath([
            new z(E.end.x, E.end.y),
            new z(v.start.x, v.start.y)
          ]), this.ctx.stroke())), this.ctx.restore(), [
            2
          ];
        });
      });
    }, e.prototype.render = function(t) {
      return fe(this, void 0, void 0, function() {
        var r;
        return se(this, function(n) {
          switch (n.label) {
            case 0:
              return this.options.backgroundColor && (this.ctx.fillStyle = YA(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), r = gF(t), [
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
  })(sf), UF = function(A) {
    return A instanceof Vd || A instanceof _d ? true : A instanceof ks && A.type !== ho && A.type !== po;
  }, EF = function(A, e) {
    switch (A) {
      case 0:
        return mo(e);
      case 2:
        return sF(e);
      default:
        return vo(e);
    }
  }, SF = function(A) {
    switch (A) {
      case 1:
        return "center";
      case 2:
        return "right";
      default:
        return "left";
    }
  }, IF = [
    "-apple-system",
    "system-ui"
  ], xF = function(A) {
    return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? A.filter(function(e) {
      return IF.indexOf(e) === -1;
    }) : A;
  }, HF = (function(A) {
    Le(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.canvas = r.canvas ? r.canvas : document.createElement("canvas"), n.ctx = n.canvas.getContext("2d"), n.options = r, n.canvas.width = Math.floor(r.width * r.scale), n.canvas.height = Math.floor(r.height * r.scale), n.canvas.style.width = r.width + "px", n.canvas.style.height = r.height + "px", n.ctx.scale(n.options.scale, n.options.scale), n.ctx.translate(-r.x, -r.y), n.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + r.width + "x" + r.height + " at " + r.x + "," + r.y + ") with scale " + r.scale), n;
    }
    return e.prototype.render = function(t) {
      return fe(this, void 0, void 0, function() {
        var r, n;
        return se(this, function(o) {
          switch (o.label) {
            case 0:
              return r = La(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, t), [
                4,
                TF(r)
              ];
            case 1:
              return n = o.sent(), this.options.backgroundColor && (this.ctx.fillStyle = YA(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(n, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [
                2,
                this.canvas
              ];
          }
        });
      });
    }, e;
  })(sf), TF = function(A) {
    return new Promise(function(e, t) {
      var r = new Image();
      r.onload = function() {
        e(r);
      }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(A));
    });
  }, LF = (function() {
    function A(e) {
      var t = e.id, r = e.enabled;
      this.id = t, this.enabled = r, this.start = Date.now();
    }
    return A.prototype.debug = function() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.debug == "function" ? console.debug.apply(console, bn([
        this.id,
        this.getTime() + "ms"
      ], e)) : this.info.apply(this, e));
    }, A.prototype.getTime = function() {
      return Date.now() - this.start;
    }, A.prototype.info = function() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      this.enabled && typeof window < "u" && window.console && typeof console.info == "function" && console.info.apply(console, bn([
        this.id,
        this.getTime() + "ms"
      ], e));
    }, A.prototype.warn = function() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.warn == "function" ? console.warn.apply(console, bn([
        this.id,
        this.getTime() + "ms"
      ], e)) : this.info.apply(this, e));
    }, A.prototype.error = function() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.error == "function" ? console.error.apply(console, bn([
        this.id,
        this.getTime() + "ms"
      ], e)) : this.info.apply(this, e));
    }, A.instances = {}, A;
  })(), kF = (function() {
    function A(e, t) {
      var r;
      this.windowBounds = t, this.instanceName = "#" + A.instanceCount++, this.logger = new LF({
        id: this.instanceName,
        enabled: e.logging
      }), this.cache = (r = e.cache) !== null && r !== void 0 ? r : new AF(this, e);
    }
    return A.instanceCount = 1, A;
  })(), RF = function(A, e) {
    return e === void 0 && (e = {}), KF(A, e);
  };
  typeof window < "u" && ef.setContext(window);
  var KF = function(A, e) {
    return fe(void 0, void 0, void 0, function() {
      var t, r, n, o, i, a, s, l, c, u, d, g, B, p, b, h, F, m, Q, E, I, v, I, x, H, f, T, O, R, V, K, D, X, nA, M, j, AA, rA, L, $;
      return se(this, function(_) {
        switch (_.label) {
          case 0:
            if (!A || typeof A != "object") return [
              2,
              Promise.reject("Invalid element provided as first argument")
            ];
            if (t = A.ownerDocument, !t) throw new Error("Element is not attached to a Document");
            if (r = t.defaultView, !r) throw new Error("Document is not attached to a Window");
            return n = {
              allowTaint: (x = e.allowTaint) !== null && x !== void 0 ? x : false,
              imageTimeout: (H = e.imageTimeout) !== null && H !== void 0 ? H : 15e3,
              proxy: e.proxy,
              useCORS: (f = e.useCORS) !== null && f !== void 0 ? f : false
            }, o = wa({
              logging: (T = e.logging) !== null && T !== void 0 ? T : true,
              cache: e.cache
            }, n), i = {
              windowWidth: (O = e.windowWidth) !== null && O !== void 0 ? O : r.innerWidth,
              windowHeight: (R = e.windowHeight) !== null && R !== void 0 ? R : r.innerHeight,
              scrollX: (V = e.scrollX) !== null && V !== void 0 ? V : r.pageXOffset,
              scrollY: (K = e.scrollY) !== null && K !== void 0 ? K : r.pageYOffset
            }, a = new it(i.scrollX, i.scrollY, i.windowWidth, i.windowHeight), s = new kF(o, a), l = (D = e.foreignObjectRendering) !== null && D !== void 0 ? D : false, c = {
              allowTaint: (X = e.allowTaint) !== null && X !== void 0 ? X : false,
              onclone: e.onclone,
              ignoreElements: e.ignoreElements,
              inlineImages: l,
              copyStyles: l
            }, s.logger.debug("Starting document clone with size " + a.width + "x" + a.height + " scrolled to " + -a.left + "," + -a.top), u = new Lc(s, A, c), d = u.clonedReferenceElement, d ? [
              4,
              u.toIFrame(t, a)
            ] : [
              2,
              Promise.reject("Unable to find element in cloned iframe")
            ];
          case 1:
            return g = _.sent(), B = Rs(d) || Ob(d) ? fm(d.ownerDocument) : si(s, d), p = B.width, b = B.height, h = B.left, F = B.top, m = OF(s, d, e.backgroundColor), Q = {
              canvas: e.canvas,
              backgroundColor: m,
              scale: (M = (nA = e.scale) !== null && nA !== void 0 ? nA : r.devicePixelRatio) !== null && M !== void 0 ? M : 1,
              x: ((j = e.x) !== null && j !== void 0 ? j : 0) + h,
              y: ((AA = e.y) !== null && AA !== void 0 ? AA : 0) + F,
              width: (rA = e.width) !== null && rA !== void 0 ? rA : Math.ceil(p),
              height: (L = e.height) !== null && L !== void 0 ? L : Math.ceil(b)
            }, l ? (s.logger.debug("Document cloned, using foreign object rendering"), I = new HF(s, Q), [
              4,
              I.render(d)
            ]) : [
              3,
              3
            ];
          case 2:
            return E = _.sent(), [
              3,
              5
            ];
          case 3:
            return s.logger.debug("Document cloned, element located at " + h + "," + F + " with size " + p + "x" + b + " using computed rendering"), s.logger.debug("Starting DOM parsing"), v = Xd(s, d), m === v.styles.backgroundColor && (v.styles.backgroundColor = At.TRANSPARENT), s.logger.debug("Starting renderer for element at " + Q.x + "," + Q.y + " with size " + Q.width + "x" + Q.height), I = new FF(s, Q), [
              4,
              I.render(v)
            ];
          case 4:
            E = _.sent(), _.label = 5;
          case 5:
            return (!(($ = e.removeContainer) !== null && $ !== void 0) || $) && (Lc.destroy(g) || s.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), s.logger.debug("Finished rendering"), [
              2,
              E
            ];
        }
      });
    });
  }, OF = function(A, e, t) {
    var r = e.ownerDocument, n = r.documentElement ? Pr(A, getComputedStyle(r.documentElement).backgroundColor) : At.TRANSPARENT, o = r.body ? Pr(A, getComputedStyle(r.body).backgroundColor) : At.TRANSPARENT, i = typeof t == "string" ? Pr(A, t) : t === null ? At.TRANSPARENT : 4294967295;
    return e === r.documentElement ? wt(n) ? wt(o) ? i : o : n : i;
  }, Yi = {
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
  }, zA = function() {
    return zA = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, zA.apply(this, arguments);
  }, DF = {
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
  }, MF = function(A, e) {
    var t = zA({}, DF);
    if (A) for (var r in Yi) Object.prototype.hasOwnProperty.call(Yi, r) && (t[r] = zA(zA({}, Object.prototype.hasOwnProperty.call(t, r) ? t[r] : {}), Yi[r]));
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = zA(zA({}, Object.prototype.hasOwnProperty.call(t, r) ? t[r] : {}), e[r]));
    return t;
  }, Dc = function(A, e) {
    return A ? zA(zA({}, e.rbgcpControlBtn), e.rbgcpControlBtnSelected) : zA({}, e.rbgcpControlBtn);
  }, Vr = function(A, e) {
    return A ? zA(zA({}, e.rbgcpControlIconBtn), e.rbgcpControlBtnSelected) : zA({}, e.rbgcpControlIconBtn);
  }, Xn = function(A, e) {
    return A ? zA(zA(zA({}, e.rbgcpControlBtn), e.rbgcpColorModelDropdownBtn), e.rbgcpControlBtnSelected) : zA(zA({}, e.rbgcpControlBtn), e.rbgcpColorModelDropdownBtn);
  }, Me = function() {
    return Me = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, Me.apply(this, arguments);
  }, PF = function(A) {
    var e = A.color, t = yA().defaultStyles, r = e ?? "";
    return S.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 16
      }
    }, S.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: Me(Me({
        fill: "none",
        strokeWidth: "1.4px"
      }, t.rbgcpControlIcon), r && {
        stroke: r
      }),
      d: "M15.6,7h0L7.78,14.86c-.37.37-1.61.38-2,.75s-.5,1.53-.76,2a3.53,3.53,0,0,1-.52.52,1.6,1.6,0,0,1-2.27-.06l-.32-.32a1.61,1.61,0,0,1-.06-2.27A3.25,3.25,0,0,1,2.4,15c.47-.26,1.65-.35,2-.73s.34-1.64.71-2c1.68-1.73,5.61-5.65,7.91-7.93h0l1.14,1.38L15.6,7Z"
    }), S.createElement("polygon", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: Me(Me({
        strokeWidth: "1.4px"
      }, t.rbgcpControlIcon2), r && {
        stroke: r,
        fill: r
      }),
      points: "15.7 8.87 11.13 4.29 12.69 2.73 17.25 7.31 15.7 8.87"
    }), S.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: Me(Me({
        strokeWidth: "1.4px"
      }, t.rbgcpControlIcon2), r && {
        stroke: r,
        fill: r
      }),
      d: "M18.18,3.71,16.36,5.53a1.33,1.33,0,0,1-1.88,0h0a1.34,1.34,0,0,1,0-1.89l1.81-1.82a1.34,1.34,0,0,1,1.89,0h0A1.34,1.34,0,0,1,18.18,3.71Z"
    }));
  }, NF = function(A) {
    var e = A.onSelect, t = yA().defaultStyles, r = w.useState(null), n = r[0], o = r[1], i = w.useState(false), a = i[0], s = i[1], l = w.useState(false), c = l[0], u = l[1], d = function() {
      var p = document.getElementById("root");
      s(true), RF(p).then(function(b) {
        var h = document.createElement("canvas"), F = h.getContext("2d", {
          willReadFrequently: true
        });
        p && F && (h.width = p.offsetWidth * 2, h.height = p.offsetHeight * 2, F.drawImage(b, 0, 0)), o(F);
      });
    }, g = function(p) {
      if (p.stopPropagation(), n) {
        var b = p.pageX, h = p.pageY, F = b * 2, m = h * 2, Q = n.getImageData(F, m, 1, 1).data;
        e("rgba(".concat(Q[0], ", ").concat(Q[1], ", ").concat(Q[2], ", 1)"));
      }
      u(false), s(false);
    }, B = function() {
      if (u(true), !window.EyeDropper) d();
      else {
        var p = new window.EyeDropper(), b = new window.AbortController();
        p.open({
          signal: b.signal
        }).then(function(h) {
          var F = re(h.sRGBHex), m = F.toRgb(), Q = m.r, E = m.g, v = m.b;
          e("rgba(".concat(Q, ", ").concat(E, ", ").concat(v, ", 1)")), u(false);
        }).catch(function(h) {
          console.log(h), u(false);
        });
      }
    };
    return S.createElement("div", null, S.createElement("div", {
      onClick: B,
      id: "rbgcp-eyedropper-btn",
      style: Me(Me({}, t.rbgcpEyedropperBtn), Vr(a, t))
    }, S.createElement(PF, {
      color: c ? "rgb(86, 140, 245)" : ""
    })), a && S.createElement(dm, null, S.createElement("div", {
      onClick: function(p) {
        return g(p);
      },
      style: t.rbgcpEyedropperCover
    })));
  }, Pa = function() {
    return Pa = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, Pa.apply(this, arguments);
  }, zi = function(A) {
    var e = A.value, t = A.reffy, r = A.label, n = A.config, o = A.callback, i = A.squareWidth, a = A.openAdvanced, s = A.defaultStyles, l = A.pickerIdSuffix, c = n.barSize, u = w.useState(false), d = u[0], g = u[1], B = w.useState(2), p = B[0], b = B[1], h = e * (i - 18);
    w.useEffect(function() {
      var v;
      b(((v = t == null ? void 0 : t.current) === null || v === void 0 ? void 0 : v.offsetTop) - 2);
    }, [
      a,
      t
    ]);
    var F = function() {
      g(false);
    }, m = function(v) {
      d && o(cr(v, c));
    }, Q = function(v) {
      d || o(cr(v, c));
    }, E = function() {
      g(true);
    };
    return w.useEffect(function() {
      var v = function() {
        F();
      };
      return window.addEventListener("mouseup", v), function() {
        window.removeEventListener("mouseup", v);
      };
    }, []), S.createElement("div", {
      style: {
        width: "100%",
        padding: "3px 0px 3px 0px"
      }
    }, S.createElement("div", {
      onMouseMove: function(v) {
        return m(v);
      },
      style: {
        cursor: "resize",
        position: "relative"
      },
      id: "rbgcp-advanced-bar-".concat(r, "-wrapper").concat(l)
    }, S.createElement("div", {
      style: Pa({
        left: h,
        top: p
      }, s.rbgcpHandle),
      id: "rbgcp-advanced-bar-".concat(r, "-handle").concat(l),
      onMouseDown: E,
      role: "button",
      tabIndex: 0
    }), S.createElement("div", {
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
      id: "rbgcp-advanced-bar-".concat(r, "-label").concat(l),
      onMouseMove: function(v) {
        return m(v);
      },
      onClick: function(v) {
        return Q(v);
      },
      tabIndex: 0,
      role: "button",
      onKeyDown: function() {
      }
    }, r), S.createElement("canvas", {
      ref: t,
      height: "14px",
      width: "".concat(i, "px"),
      onClick: function(v) {
        return Q(v);
      },
      style: {
        position: "relative",
        borderRadius: 14
      },
      id: "rbgcp-advanced-bar-".concat(r, "-canvas").concat(l)
    })));
  }, GF = function(A) {
    var e = A.openAdvanced, t = yA(), r = t.config, n = t.tinyColor, o = t.handleChange, i = t.squareWidth, a = t.hc, s = t.defaultStyles, l = t.pickerIdSuffix, c = n.toHsl(), u = c.s, d = c.l, g = w.useRef(null), B = w.useRef(null), p = w.useRef(null);
    CC(g, a == null ? void 0 : a.h, d * 100, i), mC(B, a == null ? void 0 : a.h, u * 100, i), vC(p, a == null ? void 0 : a.h, u * 100, i);
    var b = function(m) {
      var Q = re({
        h: a == null ? void 0 : a.h,
        s: m / 100,
        l: d
      }).toRgb(), E = Q.r, v = Q.g, I = Q.b;
      o("rgba(".concat(E, ",").concat(v, ",").concat(I, ",").concat(a == null ? void 0 : a.a, ")"));
    }, h = function(m) {
      var Q = re({
        h: a == null ? void 0 : a.h,
        s: u,
        l: m / 100
      }).toRgb(), E = Q.r, v = Q.g, I = Q.b;
      o("rgba(".concat(E, ",").concat(v, ",").concat(I, ",").concat(a == null ? void 0 : a.a, ")"));
    }, F = function(m) {
      var Q = re({
        h: a == null ? void 0 : a.h,
        s: (a == null ? void 0 : a.s) * 100,
        v: m
      }).toRgb(), E = Q.r, v = Q.g, I = Q.b;
      o("rgba(".concat(E, ",").concat(v, ",").concat(I, ",").concat(a == null ? void 0 : a.a, ")"));
    };
    return S.createElement("div", {
      style: {
        width: "100%",
        height: e ? 98 : 0,
        transition: "all 120ms linear"
      },
      id: "rbgcp-advanced-controls-wrapper".concat(l)
    }, S.createElement("div", {
      style: {
        paddingTop: 11,
        display: e ? "flex" : "none",
        flexDirection: "column",
        justifyContent: "space-between",
        height: e ? 98 : 0,
        overflow: "hidden",
        transition: "height 100ms linear"
      },
      id: "rbgcp-advanced-controls-inner".concat(l)
    }, S.createElement(zi, {
      value: u,
      reffy: g,
      config: r,
      label: "Saturation",
      callback: b,
      squareWidth: i,
      openAdvanced: e,
      defaultStyles: s,
      pickerIdSuffix: l
    }), S.createElement(zi, {
      value: d,
      config: r,
      reffy: B,
      label: "Lightness",
      callback: h,
      squareWidth: i,
      openAdvanced: e,
      defaultStyles: s,
      pickerIdSuffix: l
    }), S.createElement(zi, {
      value: a == null ? void 0 : a.v,
      config: r,
      reffy: p,
      label: "Brightness",
      callback: F,
      squareWidth: i,
      openAdvanced: e,
      defaultStyles: s,
      pickerIdSuffix: l
    })));
  }, Ht = function() {
    return Ht = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, Ht.apply(this, arguments);
  }, _F = function(A) {
    var e = A.openComparibles, t = yA(), r = t.tinyColor, n = t.handleChange, o = t.defaultStyles, i = t.pickerIdSuffix, a = r.analogous(), s = r.monochromatic(), l = r.triad(), c = r.tetrad(), u = function(d) {
      var g = d.toRgb(), B = g.r, p = g.g, b = g.b, h = g.a;
      n("rgba(".concat(B, ",").concat(p, ",").concat(b, ",").concat(h, ")"));
    };
    return S.createElement("div", {
      style: {
        width: "100%",
        transition: "all 120ms linear",
        height: e ? 216 : 0
      },
      id: "rbgcp-comparible-colors-wrapper".concat(i)
    }, S.createElement("div", {
      style: {
        paddingTop: 11,
        display: e ? "" : "none",
        position: "relative"
      },
      id: "rbgcp-comparible-colors-inner".concat(i)
    }, S.createElement("div", {
      style: Ht({
        textAlign: "center",
        fontSize: 13,
        fontWeight: 600,
        position: "absolute",
        top: 6.5,
        left: 2
      }, o.rbgcpComparibleLabel),
      id: "rbgcp-comparible-color-guide-label".concat(i)
    }, "Color Guide"), S.createElement("div", {
      style: Ht({
        textAlign: "center",
        fontSize: 12,
        fontWeight: 500,
        marginTop: 3
      }, o.rbgcpComparibleLabel),
      id: "rbgcp-comparible-analogous-colors-label".concat(i)
    }, "Analogous"), S.createElement("div", {
      style: {
        borderRadius: 5,
        overflow: "hidden",
        display: "flex"
      },
      id: "rbgcp-comparible-analogous-colors".concat(i)
    }, a == null ? void 0 : a.map(function(d, g) {
      return S.createElement("div", {
        key: g,
        id: "rbgcp-comparible-analogous-color-".concat(g).concat(i),
        style: {
          width: "20%",
          height: 30,
          background: d.toHexString()
        },
        onClick: function() {
          return u(d);
        }
      });
    })), S.createElement("div", {
      style: Ht({
        textAlign: "center",
        fontSize: 12,
        fontWeight: 500,
        marginTop: 3
      }, o.rbgcpComparibleLabel),
      id: "rbgcp-comparible-monochromatic-colors-label".concat(i)
    }, "Monochromatic"), S.createElement("div", {
      style: {
        borderRadius: 5,
        overflow: "hidden",
        display: "flex",
        justifyContent: "flex-end"
      },
      id: "rbgcp-comparible-monochromatic-colors".concat(i)
    }, s == null ? void 0 : s.map(function(d, g) {
      return S.createElement("div", {
        key: g,
        id: "rbgcp-comparible-monochromatic-color-".concat(g).concat(i),
        style: {
          width: "20%",
          height: 30,
          background: d.toHexString()
        },
        onClick: function() {
          return u(d);
        }
      });
    })), S.createElement("div", {
      style: Ht({
        textAlign: "center",
        fontSize: 12,
        fontWeight: 500,
        marginTop: 3
      }, o.rbgcpComparibleLabel),
      id: "rbgcp-comparible-triad-colors-label".concat(i)
    }, "Triad"), S.createElement("div", {
      style: {
        borderRadius: 5,
        overflow: "hidden",
        display: "flex",
        justifyContent: "flex-end"
      },
      id: "rbgcp-comparible-triad-colors".concat(i)
    }, l == null ? void 0 : l.map(function(d, g) {
      return S.createElement("div", {
        key: g,
        id: "rbgcp-comparible-triad-color-".concat(g).concat(i),
        style: {
          width: "calc(100% / 3)",
          height: 28,
          background: d.toHexString()
        },
        onClick: function() {
          return u(d);
        }
      });
    })), S.createElement("div", {
      style: Ht({
        textAlign: "center",
        fontSize: 12,
        fontWeight: 500,
        marginTop: 3
      }, o.rbgcpComparibleLabel),
      id: "rbgcp-comparible-tetrad-colors-label".concat(i)
    }, "Tetrad"), S.createElement("div", {
      style: {
        borderRadius: 5,
        overflow: "hidden",
        display: "flex",
        justifyContent: "flex-end"
      },
      id: "rbgcp-comparible-tetrad-colors".concat(i)
    }, c == null ? void 0 : c.map(function(d, g) {
      return S.createElement("div", {
        key: g,
        id: "rbgcp-comparible-tetrad-color-".concat(g).concat(i),
        style: {
          width: "25%",
          height: 28,
          background: d.toHexString()
        },
        onClick: function() {
          return u(d);
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
  }, VF = function() {
    var A = yA(), e = A.gradientType, t = A.onChange, r = A.value, n = A.defaultStyles, o = A.pickerIdSuffix, i = e === "linear-gradient", a = e === "radial-gradient", s = function() {
      var c = r.split(/,(.+)/)[1];
      t("linear-gradient(90deg, ".concat(c));
    }, l = function() {
      var c = r.split(/,(.+)/)[1];
      t("radial-gradient(circle, ".concat(c));
    };
    return S.createElement("div", {
      style: n.rbgcpControlBtnWrapper
    }, S.createElement("div", {
      onClick: s,
      id: "rbgcp-linear-btn".concat(o),
      style: IA(IA({}, n.rbgcpControlBtn), i && n.rbgcpControlBtnSelected),
      tabIndex: 0,
      role: "button",
      onKeyDown: function() {
      }
    }, S.createElement(nm, {
      color: i ? "#568CF5" : ""
    })), S.createElement("div", {
      onClick: l,
      id: "rbgcp-radial-btn".concat(o),
      style: IA(IA({}, n.rbgcpControlBtn), a && n.rbgcpControlBtnSelected),
      tabIndex: 0,
      role: "button",
      onKeyDown: function() {
      }
    }, S.createElement(om, {
      color: a ? "#568CF5" : ""
    })));
  }, $F = function() {
    var A = yA(), e = A.currentLeft, t = A.currentColor, r = A.defaultStyles, n = A.handleGradient, o = A.pickerIdSuffix, i = function(a) {
      n(t, lr(parseInt(a), 0, 100));
    };
    return S.createElement("div", {
      style: IA(IA(IA(IA({}, r.rbgcpControlBtnWrapper), r.rbgcpControlInputWrap), r.rbgcpStopInputWrap), {
        paddingLeft: 8
      }),
      id: "rbgcp-stop-input-wrapper".concat(o)
    }, S.createElement(cm, null), S.createElement("input", {
      value: e,
      id: "rbgcp-stop-input".concat(o),
      onChange: function(a) {
        return i(a.target.value);
      },
      style: IA(IA({}, r.rbgcpControlInput), r.rbgcpStopInput)
    }));
  }, WF = function() {
    var A = yA(), e = A.degrees, t = A.onChange, r = A.value, n = A.defaultStyles, o = A.pickerIdSuffix, i = function(a) {
      var s = lr(a.target.value, 0, 360), l = r.split(/,(.+)/)[1];
      t("linear-gradient(".concat(s ?? 0, "deg, ").concat(l));
    };
    return S.createElement("div", {
      style: IA(IA(IA({}, n.rbgcpControlBtnWrapper), n.rbgcpControlInputWrap), n.rbgcpDegreeInputWrap),
      id: "rbgcp-degree-input-wrapper".concat(o)
    }, S.createElement(lm, null), S.createElement("input", {
      value: e,
      onChange: function(a) {
        return i(a);
      },
      id: "rbgcp-degree-input".concat(o),
      style: IA(IA({}, n.rbgcpControlInput), n.rbgcpDegreeInput)
    }), S.createElement("div", {
      style: IA(IA({}, n.rbgcpDegreeIcon), {
        position: "absolute",
        right: e > 99 ? 0 : e < 10 ? 7 : 3,
        top: 1,
        fontWeight: 400,
        fontSize: 13
      })
    }, "\xB0"));
  }, XF = function() {
    var A = yA(), e = A.colors, t = A.selectedColor, r = A.createGradientStr, n = A.defaultStyles, o = A.pickerIdSuffix, i = function() {
      if ((e == null ? void 0 : e.length) > 2) {
        var a = e == null ? void 0 : e.map(function(l, c) {
          return IA(IA({}, l), {
            value: c === t - 1 ? ai(l) : cn(l)
          });
        }), s = a == null ? void 0 : a.filter(function(l, c) {
          return c !== t;
        });
        r(s);
      }
    };
    return S.createElement("div", {
      onClick: i,
      style: IA(IA({}, Vr(false, n)), {
        width: 28
      }),
      id: "rbgcp-point-delete-btn".concat(o),
      tabIndex: 0,
      role: "button",
      onKeyDown: function() {
      }
    }, S.createElement(rm, null));
  }, Mc = function(A) {
    var e = A.hideGradientType, t = A.hideGradientAngle, r = A.hideGradientStop, n = yA(), o = n.gradientType, i = n.defaultStyles, a = n.pickerIdSuffix;
    return S.createElement("div", {
      style: IA(IA({}, i.rbgcpControlBtnWrapper), {
        marginTop: 12,
        marginBottom: -4,
        justifyContent: "space-between",
        paddingLeft: e ? 4 : 0
      }),
      id: "rbgcp-gradient-controls-wrap".concat(a)
    }, !e && S.createElement(VF, null), S.createElement("div", {
      style: {
        width: 53
      }
    }, !t && o === "linear-gradient" && S.createElement(WF, null)), !r && S.createElement($F, null), S.createElement(XF, null));
  }, qr = function() {
    return qr = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, qr.apply(this, arguments);
  }, jF = function(A) {
    var e, t, r = A.hideColorTypeBtns, n = A.setGradient, o = A.isGradient, i = A.setSolid, a = A.locales, s = yA(), l = s.defaultStyles, c = s.pickerIdSuffix;
    return r ? S.createElement("div", {
      style: {
        width: 1
      }
    }) : S.createElement("div", {
      style: qr({
        display: "flex",
        alignItems: "center"
      }, l.rbgcpControlBtnWrapper),
      id: "rbgcp-color-type-btns".concat(c)
    }, S.createElement("div", {
      onClick: i,
      id: "rbgcp-solid-btn".concat(c),
      style: Dc(!o, l)
    }, (e = a == null ? void 0 : a.CONTROLS) === null || e === void 0 ? void 0 : e.SOLID), S.createElement("div", {
      onClick: n,
      id: "rbgcp-gradient-btn".concat(c),
      style: Dc(o ?? false, l)
    }, (t = a == null ? void 0 : a.CONTROLS) === null || t === void 0 ? void 0 : t.GRADIENT));
  }, JF = function(A) {
    var e = A.openInputType, t = A.setOpenInputType, r = yA(), n = r.inputType, o = r.setInputType, i = r.defaultStyles, a = r.pickerIdSuffix, s = e ? "visibility 0ms linear" : "visibility 100ms linear 150ms", l = e ? "z-index 0ms linear" : "z-index 100ms linear 150ms", c = e ? "opacity 120ms linear" : "opacity 150ms linear 50ms", u = function(d, g) {
      e && (d.stopPropagation(), o(g), t(false));
    };
    return S.createElement("div", {
      style: qr({
        visibility: e ? "visible" : "hidden",
        zIndex: e ? "" : -100,
        opacity: e ? 1 : 0,
        transition: "".concat(c, ", ").concat(s, ", ").concat(l)
      }, i.rbgcpColorModelDropdown),
      id: "rbgcp-color-model-dropdown".concat(a)
    }, S.createElement("div", {
      id: "rbgcp-color-model-rgb-btn".concat(a),
      onClick: function(d) {
        return u(d, "rgb");
      },
      style: Xn(n === "rgb", i)
    }, "RGB"), S.createElement("div", {
      id: "rbgcp-color-model-hsl-btn".concat(a),
      onClick: function(d) {
        return u(d, "hsl");
      },
      style: Xn(n === "hsl", i)
    }, "HSL"), S.createElement("div", {
      id: "rbgcp-color-model-hsv-btn".concat(a),
      onClick: function(d) {
        return u(d, "hsv");
      },
      style: Xn(n === "hsv", i)
    }, "HSV"), S.createElement("div", {
      id: "rbgcp-color-model-cmyk-btn".concat(a),
      onClick: function(d) {
        return u(d, "cmyk");
      },
      style: Xn(n === "cmyk", i)
    }, "CMYK"));
  }, YF = function(A) {
    var e, t, r = A.locales, n = A.hideEyeDrop, o = n === void 0 ? false : n, i = A.hideAdvancedSliders, a = i === void 0 ? false : i, s = A.hideColorGuide, l = s === void 0 ? false : s, c = A.hideInputType, u = c === void 0 ? false : c, d = A.hideColorTypeBtns, g = d === void 0 ? false : d, B = A.hideGradientControls, p = B === void 0 ? false : B, b = A.hideGradientType, h = b === void 0 ? false : b, F = A.hideGradientAngle, m = F === void 0 ? false : F, Q = A.hideGradientStop, E = Q === void 0 ? false : Q, v = yA(), I = v.config, x = v.onChange, H = v.isGradient, f = v.handleChange, T = v.previous, O = v.defaultStyles, R = v.pickerIdSuffix, V = I.defaultColor, K = I.defaultGradient, D = w.useState(false), X = D[0], nA = D[1], M = w.useState(false), j = M[0], AA = M[1], rA = w.useState(false), L = rA[0], $ = rA[1], _ = o && a && l && u, Y = (e = T == null ? void 0 : T.color) !== null && e !== void 0 ? e : V, uA = (t = T == null ? void 0 : T.gradient) !== null && t !== void 0 ? t : K, iA = function() {
      x(Y);
    }, eA = function() {
      x(uA);
    }, J = o && a && l && u, oA = J && g;
    return oA ? H && !p ? S.createElement(Mc, {
      hideGradientType: h,
      hideGradientAngle: m,
      hideGradientStop: E
    }) : null : S.createElement("div", {
      style: {
        paddingBottom: 4
      }
    }, S.createElement("div", {
      style: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      },
      id: "rbgcp-controls-wrapper".concat(R)
    }, S.createElement(jF, {
      hideColorTypeBtns: g,
      setGradient: eA,
      isGradient: H,
      setSolid: iA,
      locales: r
    }), !J && S.createElement("div", {
      style: qr({
        display: _ ? "none" : ""
      }, O.rbgcpControlBtnWrapper),
      id: "rbgcp-control-rightside-wrapper".concat(R)
    }, !o && S.createElement(NF, {
      onSelect: f
    }), !a && S.createElement("div", {
      id: "rbgcp-advanced-btn".concat(R),
      onClick: function() {
        return $(!L);
      },
      style: Vr(L, O)
    }, S.createElement(im, {
      color: L ? "#568CF5" : ""
    })), !l && S.createElement("div", {
      style: Vr(X, O),
      onClick: function() {
        return nA(!X);
      },
      id: "rbgcp-comparibles-btn".concat(R)
    }, S.createElement(sm, {
      color: X ? "#568CF5" : ""
    })), !u && S.createElement("div", {
      id: "rbgcp-color-model-btn".concat(R),
      onClick: function() {
        return AA(!j);
      },
      style: Vr(j, O)
    }, S.createElement(am, {
      color: j ? "#568CF5" : ""
    }), S.createElement(JF, {
      openInputType: j,
      setOpenInputType: AA
    })))), !a && S.createElement(GF, {
      openAdvanced: L
    }), !l && S.createElement(_F, {
      openComparibles: X
    }), H && !p && S.createElement(Mc, {
      hideGradientType: h,
      hideGradientAngle: m,
      hideGradientStop: E
    }));
  }, Pe = function() {
    return Pe = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, Pe.apply(this, arguments);
  }, Pc = function(A, e, t) {
    if (t || arguments.length === 2) for (var r = 0, n = e.length, o; r < n; r++) (o || !(r in e)) && (o || (o = Array.prototype.slice.call(e, 0, r)), o[r] = e[r]);
    return A.concat(o || Array.prototype.slice.call(e));
  }, zF = function(A) {
    var e = A.left, t = A.i, r = A.setDragging, n = yA(), o = n.colors, i = n.squareWidth, a = n.selectedColor, s = n.defaultStyles, l = n.pickerIdSuffix, c = n.createGradientStr, u = a === t, d = (i - 18) / 100, g = function(p) {
      var b = o == null ? void 0 : o.map(function(h, F) {
        return Pe(Pe({}, h), {
          value: F === p ? ai(h) : cn(h)
        });
      });
      c(b);
    }, B = function(p) {
      p.stopPropagation(), g(t), r(true);
    };
    return S.createElement("div", {
      onMouseDown: function(p) {
        return B(p);
      },
      id: "rbgcp-gradient-handle-".concat(t).concat(l),
      style: Pe(Pe({}, s.rbgcpGradientHandleWrap), {
        left: (e ?? 0) * d
      })
    }, S.createElement("div", {
      style: Pe(Pe({}, s.rbgcpGradientHandle), u ? {
        boxShadow: "0px 0px 5px 1px rgba(86, 140, 245,.95)",
        border: "2px solid white"
      } : {}),
      id: "rbgcp-gradient-handle-".concat(t, "-dot").concat(l)
    }, u && S.createElement("div", {
      style: {
        width: 5,
        height: 5,
        borderRadius: "50%",
        background: "white"
      },
      id: "rbgcp-gradient-handle-".concat(t, "-selected-dot").concat(l)
    })));
  }, ZF = function() {
    var A = yA(), e = A.value, t = A.colors, r = A.config, n = A.squareWidth, o = A.currentColor, i = A.handleGradient, a = A.pickerIdSuffix, s = A.createGradientStr, l = r.barSize, c = w.useState(false), u = c[0], d = c[1];
    function g(m) {
      return m.replace(/(radial|linear)-gradient\([^,]+,/, "linear-gradient(90deg,");
    }
    var B = function(m) {
      var Q, E = cr(m, l), v = (Q = Pc(Pc([], t.map(function(I) {
        return Pe(Pe({}, I), {
          value: cn(I)
        });
      }), true), [
        {
          value: o,
          left: E
        }
      ], false)) === null || Q === void 0 ? void 0 : Q.sort(function(I, x) {
        return I.left - x.left;
      });
      s(v);
    }, p = function() {
      d(false);
    }, b = function(m) {
      u || (B(m), d(true));
    }, h = function(m) {
      u && i(o, cr(m, l));
    }, F = function() {
      p();
    };
    return w.useEffect(function() {
      return window.addEventListener("mouseup", F), function() {
        window.removeEventListener("mouseup", F);
      };
    }), S.createElement("div", {
      style: {
        width: "100%",
        marginTop: 17,
        marginBottom: 4,
        position: "relative"
      },
      id: "rbgcp-gradient-bar".concat(a)
    }, S.createElement("div", {
      style: {
        height: 14,
        borderRadius: 10,
        width: n,
        backgroundImage: g(e)
      },
      onMouseDown: function(m) {
        return b(m);
      },
      onMouseMove: function(m) {
        return h(m);
      },
      id: "rbgcp-gradient-bar-canvas".concat(a)
    }), t == null ? void 0 : t.map(function(m, Q) {
      return S.createElement(zF, {
        i: Q,
        left: m.left,
        key: "".concat(Q, "-").concat(m),
        setDragging: d
      });
    }));
  }, qF = function(A) {
    var e = A.locales, t = A.presets, r = A.hideHue, n = A.hideInputs, o = A.hidePresets, i = A.hideOpacity, a = A.hideEyeDrop, s = A.hideControls, l = A.hideInputType, c = A.hideColorGuide, u = A.hidePickerSquare, d = A.hideGradientType, g = A.hideGradientStop, B = A.hideGradientAngle, p = A.hideColorTypeBtns, b = A.hideAdvancedSliders, h = A.hideGradientControls, F = yA(), m = F.isGradient, Q = F.pickerIdSuffix;
    return S.createElement("div", {
      style: {
        userSelect: "none"
      },
      id: "rbgcp-color-picker".concat(Q)
    }, !u && S.createElement(ZC, null), !s && S.createElement(YF, {
      locales: e,
      hideEyeDrop: a,
      hideInputType: l,
      hideColorGuide: c,
      hideGradientType: d,
      hideGradientStop: g,
      hideColorTypeBtns: p,
      hideGradientAngle: B,
      hideAdvancedSliders: b,
      hideGradientControls: h
    }), m && S.createElement(ZF, null), !r && S.createElement(QC, null), !i && S.createElement(qC, null), !n && S.createElement(HC, null), !o && S.createElement(tm, {
      presets: t
    }));
  }, yo = function() {
    return yo = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, yo.apply(this, arguments);
  };
  wU = function(A) {
    var e = A.idSuffix, t = A.value, r = t === void 0 ? "rgba(175, 51, 242, 1)" : t, n = A.onChange, o = A.hideControls, i = o === void 0 ? false : o, a = A.hideInputs, s = a === void 0 ? false : a, l = A.hideOpacity, c = l === void 0 ? false : l, u = A.hidePresets, d = u === void 0 ? false : u, g = A.hideHue, B = g === void 0 ? false : g, p = A.presets, b = p === void 0 ? [] : p, h = A.hideEyeDrop, F = h === void 0 ? false : h, m = A.hideAdvancedSliders, Q = m === void 0 ? false : m, E = A.hideColorGuide, v = E === void 0 ? false : E, I = A.hideInputType, x = I === void 0 ? false : I, H = A.hideColorTypeBtns, f = H === void 0 ? false : H, T = A.hideGradientType, O = T === void 0 ? false : T, R = A.hideGradientAngle, V = R === void 0 ? false : R, K = A.hideGradientStop, D = K === void 0 ? false : K, X = A.hideGradientControls, nA = X === void 0 ? false : X, M = A.locales, j = M === void 0 ? Am : M, AA = A.width, rA = AA === void 0 ? 294 : AA, L = A.height, $ = L === void 0 ? 294 : L, _ = A.style, Y = _ === void 0 ? {} : _, uA = A.className, iA = A.disableDarkMode, eA = iA === void 0 ? false : iA, J = A.disableLightMode, oA = J === void 0 ? false : J, aA = A.hidePickerSquare, C = aA === void 0 ? false : aA, U = A.showHexAlpha, y = U === void 0 ? false : U, P = A.config, W = P === void 0 ? {} : P, G = dC(r), sA = typeof window > "u" || eA ? false : !!(window.matchMedia("(prefers-color-scheme: dark)").matches || oA), lA = MF(sA, Y), fA = sA ? "-dark".concat(e ? "-".concat(e) : "") : e ? "-".concat(e) : "";
    return S.createElement("div", {
      className: uA,
      style: yo(yo({}, lA.body), {
        width: rA
      })
    }, S.createElement(hC, {
      value: G,
      onChange: n,
      squareWidth: rA,
      passedConfig: W,
      squareHeight: $,
      isDarkMode: sA,
      hideOpacity: c,
      showHexAlpha: y,
      defaultStyles: lA,
      pickerIdSuffix: fA
    }, S.createElement(qF, {
      hideControls: i,
      hideInputs: s,
      hidePresets: d,
      hideOpacity: c,
      hideHue: B,
      presets: b,
      hideEyeDrop: F,
      hideAdvancedSliders: Q,
      hideColorGuide: v,
      hideInputType: x,
      hideColorTypeBtns: f,
      hideGradientType: O,
      hideGradientAngle: V,
      hideGradientStop: D,
      hideGradientControls: nA,
      hidePickerSquare: C,
      locales: j
    })));
  };
  function Nc(A) {
    const e = A.getBoundingClientRect();
    return {
      above: e.top,
      below: window.innerHeight - e.bottom
    };
  }
  CU = function(A, e, t = 16) {
    const [r, n] = w.useState("bottom"), o = w.useMemo(() => `calc(100vh - ${2 * t}px)`, [
      t
    ]), i = w.useRef("bottom"), a = w.useRef(null), s = w.useRef(null), l = w.useCallback((p) => {
      i.current = p, n(p);
    }, []), c = w.useCallback((p) => {
      if (!A) return;
      const { above: b, below: h } = Nc(A), F = i.current;
      if (p !== void 0) {
        const m = F === "bottom" ? h : b, Q = F === "bottom" ? b : h;
        if (p <= m - t) return;
        Q > m && l(F === "bottom" ? "top" : "bottom");
      } else l(b > h ? "top" : "bottom");
    }, [
      A,
      t,
      l
    ]);
    w.useEffect(() => {
      if (!e || !A) return;
      const { above: p, below: b } = Nc(A);
      l(p > b ? "top" : "bottom");
    }, [
      e,
      A,
      l
    ]), w.useEffect(() => {
      if (!e || !A) return;
      const p = () => c();
      return window.addEventListener("resize", p), () => window.removeEventListener("resize", p);
    }, [
      e,
      A,
      c
    ]);
    const [, u] = w.useState({}), d = w.useCallback((p) => {
      a.current = p, u({});
    }, []);
    return w.useEffect(() => {
      if (!e || !a.current) return;
      let p = null;
      const b = new ResizeObserver((h) => {
        p !== null && cancelAnimationFrame(p), p = requestAnimationFrame(() => {
          var _a2;
          p = null, (_a2 = s.current) == null ? void 0 : _a2.updatePosition(), h.length > 0 && c(h[0].contentRect.height);
        });
      });
      return b.observe(a.current), () => {
        p !== null && cancelAnimationFrame(p), b.disconnect();
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
      setContentRef: d,
      popoverActionRef: s
    };
  };
});
export {
  ys as $,
  Te as A,
  Uh as B,
  Xh as C,
  NB as D,
  XB as E,
  sn as F,
  dU as G,
  Rt as H,
  iU as I,
  _e as J,
  Qs as K,
  tw as L,
  H0 as M,
  bu as N,
  Eu as O,
  uh as P,
  RB as Q,
  ws as R,
  Yu as S,
  sU as T,
  pa as U,
  fU as V,
  tl as W,
  ti as X,
  us as Y,
  nl as Z,
  ls as _,
  __tla,
  xA as a,
  uU as a0,
  D0 as a1,
  ew as a2,
  oU as a3,
  Cs as a4,
  Cw as a5,
  zp as a6,
  $p as a7,
  lU as a8,
  gU as a9,
  os as aA,
  on as aB,
  hU as aa,
  ps as ab,
  oe as ac,
  CU as ad,
  uw as ae,
  wU as af,
  BU as ag,
  pU as ah,
  Kh as ai,
  Ep as aj,
  We as ak,
  io as al,
  o0 as am,
  l0 as an,
  HB as ao,
  Nu as ap,
  na as aq,
  cU as ar,
  fr as as,
  UB as at,
  as as au,
  pu as av,
  tt as aw,
  nU as ax,
  rs as ay,
  rU as az,
  ce as b,
  Yp as c,
  pA as d,
  RA as e,
  rt as f,
  kA as g,
  he as h,
  Jr as i,
  N as j,
  vi as k,
  ga as l,
  GA as m,
  bl as n,
  iw as o,
  cs as p,
  gr as q,
  $e as r,
  dA as s,
  aU as t,
  DA as u,
  Zs as v,
  hA as w,
  vt as x,
  sa as y,
  is as z
};
