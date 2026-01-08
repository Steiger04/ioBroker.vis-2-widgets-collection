import { v as h, R as _a, a as T, __tla as __tla_0 } from "./vis2CollectionWidget__loadShare__react__loadShare__-L1bZe9z4.js";
import { g as Rs, c as kn } from "./_commonjsHelpers-Cpj98o6Y.js";
import { v as Fp } from "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
let Er, ri, Cm, OA, Ko, gp, Bm, PS, Lw, Z0, Pa, _w, bv, zm, Nw, Mw, es, ja, _e, xw, qr, pn, fn, l0, XS, Pw, G1, rf, KA, Xl, xr, Xa, Nh, el, wd, ht, jS, Js, ie, WS, qs, Qn, Za, j0, YS, me, Wd, wA, NA, ll, _A, Oi, yA, E, tt, ye, EA, M0, kt, aa, jt, rt, uA, zS, GA, ot, MS, ue, Sv, Il;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  var Wu = {
    exports: {}
  }, ni = {};
  var Up = h, Sp = /* @__PURE__ */ Symbol.for("react.element"), xp = /* @__PURE__ */ Symbol.for("react.fragment"), Ep = Object.prototype.hasOwnProperty, Ip = Up.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Hp = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };
  function ju(A, e, t) {
    var r, n = {}, o = null, i = null;
    t !== void 0 && (o = "" + t), e.key !== void 0 && (o = "" + e.key), e.ref !== void 0 && (i = e.ref);
    for (r in e) Ep.call(e, r) && !Hp.hasOwnProperty(r) && (n[r] = e[r]);
    if (A && A.defaultProps) for (r in e = A.defaultProps, e) n[r] === void 0 && (n[r] = e[r]);
    return {
      $$typeof: Sp,
      type: A,
      key: o,
      ref: i,
      props: n,
      _owner: Ip.current
    };
  }
  ni.Fragment = xp;
  ni.jsx = ju;
  ni.jsxs = ju;
  Wu.exports = ni;
  E = Wu.exports;
  const ln = {
    black: "#000",
    white: "#fff"
  }, Yt = {
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    700: "#d32f2f",
    800: "#c62828"
  }, Jt = {
    50: "#f3e5f5",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    700: "#7b1fa2"
  }, Zt = {
    50: "#e3f2fd",
    200: "#90caf9",
    400: "#42a5f5",
    700: "#1976d2",
    800: "#1565c0"
  }, qt = {
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    700: "#0288d1",
    900: "#01579b"
  }, Ar = {
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20"
  }, Hr = {
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    700: "#f57c00",
    900: "#e65100"
  }, Tp = {
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
  function gt(A, ...e) {
    const t = new URL(`https://mui.com/production-error/?code=${A}`);
    return e.forEach((r) => t.searchParams.append("args[]", r)), `Minified MUI error #${A}; visit ${t} for the full message.`;
  }
  const qe = "$$material";
  function Io() {
    return Io = Object.assign ? Object.assign.bind() : function(A) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r in t) ({}).hasOwnProperty.call(t, r) && (A[r] = t[r]);
      }
      return A;
    }, Io.apply(null, arguments);
  }
  function kp(A) {
    if (A.sheet) return A.sheet;
    for (var e = 0; e < document.styleSheets.length; e++) if (document.styleSheets[e].ownerNode === A) return document.styleSheets[e];
  }
  function Lp(A) {
    var e = document.createElement("style");
    return e.setAttribute("data-emotion", A.key), A.nonce !== void 0 && e.setAttribute("nonce", A.nonce), e.appendChild(document.createTextNode("")), e.setAttribute("data-s", ""), e;
  }
  var Rp = (function() {
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
      this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Lp(this));
      var n = this.tags[this.tags.length - 1];
      if (this.isSpeedy) {
        var o = kp(n);
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
  })(), ge = "-ms-", Ho = "-moz-", UA = "-webkit-", zu = "comm", Os = "rule", Ms = "decl", Op = "@import", Xu = "@keyframes", Mp = "@layer", Kp = Math.abs, oi = String.fromCharCode, Dp = Object.assign;
  function Pp(A, e) {
    return ce(A, 0) ^ 45 ? (((e << 2 ^ ce(A, 0)) << 2 ^ ce(A, 1)) << 2 ^ ce(A, 2)) << 2 ^ ce(A, 3) : 0;
  }
  function Yu(A) {
    return A.trim();
  }
  function _p(A, e) {
    return (A = e.exec(A)) ? A[0] : A;
  }
  function SA(A, e, t) {
    return A.replace(e, t);
  }
  function Na(A, e) {
    return A.indexOf(e);
  }
  function ce(A, e) {
    return A.charCodeAt(e) | 0;
  }
  function cn(A, e, t) {
    return A.slice(e, t);
  }
  function je(A) {
    return A.length;
  }
  function Ks(A) {
    return A.length;
  }
  function Ln(A, e) {
    return e.push(A), A;
  }
  function Np(A, e) {
    return A.map(e).join("");
  }
  var ii = 1, Cr = 1, Ju = 0, Fe = 0, qA = 0, Sr = "";
  function ai(A, e, t, r, n, o, i) {
    return {
      value: A,
      root: e,
      parent: t,
      type: r,
      props: n,
      children: o,
      line: ii,
      column: Cr,
      length: i,
      return: ""
    };
  }
  function Tr(A, e) {
    return Dp(ai("", null, null, "", null, null, 0), A, {
      length: -A.length
    }, e);
  }
  function Gp() {
    return qA;
  }
  function Vp() {
    return qA = Fe > 0 ? ce(Sr, --Fe) : 0, Cr--, qA === 10 && (Cr = 1, ii--), qA;
  }
  function xe() {
    return qA = Fe < Ju ? ce(Sr, Fe++) : 0, Cr++, qA === 10 && (Cr = 1, ii++), qA;
  }
  function At() {
    return ce(Sr, Fe);
  }
  function wo() {
    return Fe;
  }
  function vn(A, e) {
    return cn(Sr, A, e);
  }
  function un(A) {
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
  function Zu(A) {
    return ii = Cr = 1, Ju = je(Sr = A), Fe = 0, [];
  }
  function qu(A) {
    return Sr = "", A;
  }
  function Co(A) {
    return Yu(vn(Fe - 1, Ga(A === 91 ? A + 2 : A === 40 ? A + 1 : A)));
  }
  function $p(A) {
    for (; (qA = At()) && qA < 33; ) xe();
    return un(A) > 2 || un(qA) > 3 ? "" : " ";
  }
  function Wp(A, e) {
    for (; --e && xe() && !(qA < 48 || qA > 102 || qA > 57 && qA < 65 || qA > 70 && qA < 97); ) ;
    return vn(A, wo() + (e < 6 && At() == 32 && xe() == 32));
  }
  function Ga(A) {
    for (; xe(); ) switch (qA) {
      case A:
        return Fe;
      case 34:
      case 39:
        A !== 34 && A !== 39 && Ga(qA);
        break;
      case 40:
        A === 41 && Ga(A);
        break;
      case 92:
        xe();
        break;
    }
    return Fe;
  }
  function jp(A, e) {
    for (; xe() && A + qA !== 57; ) if (A + qA === 84 && At() === 47) break;
    return "/*" + vn(e, Fe - 1) + "*" + oi(A === 47 ? A : xe());
  }
  function zp(A) {
    for (; !un(At()); ) xe();
    return vn(A, Fe);
  }
  function Xp(A) {
    return qu(yo("", null, null, null, [
      ""
    ], A = Zu(A), 0, [
      0
    ], A));
  }
  function yo(A, e, t, r, n, o, i, a, s) {
    for (var l = 0, c = 0, u = i, d = 0, f = 0, p = 0, B = 1, Q = 1, m = 1, y = 0, w = "", C = n, U = o, v = r, x = w; Q; ) switch (p = y, y = xe()) {
      case 40:
        if (p != 108 && ce(x, u - 1) == 58) {
          Na(x += SA(Co(y), "&", "&\f"), "&\f") != -1 && (m = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        x += Co(y);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        x += $p(p);
        break;
      case 92:
        x += Wp(wo() - 1, 7);
        continue;
      case 47:
        switch (At()) {
          case 42:
          case 47:
            Ln(Yp(jp(xe(), wo()), e, t), s);
            break;
          default:
            x += "/";
        }
        break;
      case 123 * B:
        a[l++] = je(x) * m;
      case 125 * B:
      case 59:
      case 0:
        switch (y) {
          case 0:
          case 125:
            Q = 0;
          case 59 + c:
            m == -1 && (x = SA(x, /\f/g, "")), f > 0 && je(x) - u && Ln(f > 32 ? Rl(x + ";", r, t, u - 1) : Rl(SA(x, " ", "") + ";", r, t, u - 2), s);
            break;
          case 59:
            x += ";";
          default:
            if (Ln(v = Ll(x, e, t, l, c, n, a, w, C = [], U = [], u), o), y === 123) if (c === 0) yo(x, e, v, v, C, o, u, a, U);
            else switch (d === 99 && ce(x, 3) === 110 ? 100 : d) {
              case 100:
              case 108:
              case 109:
              case 115:
                yo(A, v, v, r && Ln(Ll(A, v, v, 0, 0, n, a, w, n, C = [], u), U), n, U, u, a, r ? C : U);
                break;
              default:
                yo(x, v, v, v, [
                  ""
                ], U, 0, a, U);
            }
        }
        l = c = f = 0, B = m = 1, w = x = "", u = i;
        break;
      case 58:
        u = 1 + je(x), f = p;
      default:
        if (B < 1) {
          if (y == 123) --B;
          else if (y == 125 && B++ == 0 && Vp() == 125) continue;
        }
        switch (x += oi(y), y * B) {
          case 38:
            m = c > 0 ? 1 : (x += "\f", -1);
            break;
          case 44:
            a[l++] = (je(x) - 1) * m, m = 1;
            break;
          case 64:
            At() === 45 && (x += Co(xe())), d = At(), c = u = je(w = x += zp(wo())), y++;
            break;
          case 45:
            p === 45 && je(x) == 2 && (B = 0);
        }
    }
    return o;
  }
  function Ll(A, e, t, r, n, o, i, a, s, l, c) {
    for (var u = n - 1, d = n === 0 ? o : [
      ""
    ], f = Ks(d), p = 0, B = 0, Q = 0; p < r; ++p) for (var m = 0, y = cn(A, u + 1, u = Kp(B = i[p])), w = A; m < f; ++m) (w = Yu(B > 0 ? d[m] + " " + y : SA(y, /&\f/g, d[m]))) && (s[Q++] = w);
    return ai(A, e, t, n === 0 ? Os : a, s, l, c);
  }
  function Yp(A, e, t) {
    return ai(A, e, t, zu, oi(Gp()), cn(A, 2, -2), 0);
  }
  function Rl(A, e, t, r) {
    return ai(A, e, t, Ms, cn(A, 0, r), cn(A, r + 1, -1), r);
  }
  function Br(A, e) {
    for (var t = "", r = Ks(A), n = 0; n < r; n++) t += e(A[n], n, A, e) || "";
    return t;
  }
  function Jp(A, e, t, r) {
    switch (A.type) {
      case Mp:
        if (A.children.length) break;
      case Op:
      case Ms:
        return A.return = A.return || A.value;
      case zu:
        return "";
      case Xu:
        return A.return = A.value + "{" + Br(A.children, r) + "}";
      case Os:
        A.value = A.props.join(",");
    }
    return je(t = Br(A.children, r)) ? A.return = A.value + "{" + t + "}" : "";
  }
  function Zp(A) {
    var e = Ks(A);
    return function(t, r, n, o) {
      for (var i = "", a = 0; a < e; a++) i += A[a](t, r, n, o) || "";
      return i;
    };
  }
  function qp(A) {
    return function(e) {
      e.root || (e = e.return) && A(e);
    };
  }
  function Ad(A) {
    var e = /* @__PURE__ */ Object.create(null);
    return function(t) {
      return e[t] === void 0 && (e[t] = A(t)), e[t];
    };
  }
  var Ag = function(e, t, r) {
    for (var n = 0, o = 0; n = o, o = At(), n === 38 && o === 12 && (t[r] = 1), !un(o); ) xe();
    return vn(e, Fe);
  }, eg = function(e, t) {
    var r = -1, n = 44;
    do
      switch (un(n)) {
        case 0:
          n === 38 && At() === 12 && (t[r] = 1), e[r] += Ag(Fe - 1, t, r);
          break;
        case 2:
          e[r] += Co(n);
          break;
        case 4:
          if (n === 44) {
            e[++r] = At() === 58 ? "&\f" : "", t[r] = e[r].length;
            break;
          }
        default:
          e[r] += oi(n);
      }
    while (n = xe());
    return e;
  }, tg = function(e, t) {
    return qu(eg(Zu(e), t));
  }, Ol = /* @__PURE__ */ new WeakMap(), rg = function(e) {
    if (!(e.type !== "rule" || !e.parent || e.length < 1)) {
      for (var t = e.value, r = e.parent, n = e.column === r.column && e.line === r.line; r.type !== "rule"; ) if (r = r.parent, !r) return;
      if (!(e.props.length === 1 && t.charCodeAt(0) !== 58 && !Ol.get(r)) && !n) {
        Ol.set(e, true);
        for (var o = [], i = tg(t, o), a = r.props, s = 0, l = 0; s < i.length; s++) for (var c = 0; c < a.length; c++, l++) e.props[l] = o[s] ? i[s].replace(/&\f/g, a[c]) : a[c] + " " + i[s];
      }
    }
  }, ng = function(e) {
    if (e.type === "decl") {
      var t = e.value;
      t.charCodeAt(0) === 108 && t.charCodeAt(2) === 98 && (e.return = "", e.value = "");
    }
  };
  function ed(A, e) {
    switch (Pp(A, e)) {
      case 5103:
        return UA + "print-" + A + A;
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
        return UA + A + A;
      case 5349:
      case 4246:
      case 4810:
      case 6968:
      case 2756:
        return UA + A + Ho + A + ge + A + A;
      case 6828:
      case 4268:
        return UA + A + ge + A + A;
      case 6165:
        return UA + A + ge + "flex-" + A + A;
      case 5187:
        return UA + A + SA(A, /(\w+).+(:[^]+)/, UA + "box-$1$2" + ge + "flex-$1$2") + A;
      case 5443:
        return UA + A + ge + "flex-item-" + SA(A, /flex-|-self/, "") + A;
      case 4675:
        return UA + A + ge + "flex-line-pack" + SA(A, /align-content|flex-|-self/, "") + A;
      case 5548:
        return UA + A + ge + SA(A, "shrink", "negative") + A;
      case 5292:
        return UA + A + ge + SA(A, "basis", "preferred-size") + A;
      case 6060:
        return UA + "box-" + SA(A, "-grow", "") + UA + A + ge + SA(A, "grow", "positive") + A;
      case 4554:
        return UA + SA(A, /([^-])(transform)/g, "$1" + UA + "$2") + A;
      case 6187:
        return SA(SA(SA(A, /(zoom-|grab)/, UA + "$1"), /(image-set)/, UA + "$1"), A, "") + A;
      case 5495:
      case 3959:
        return SA(A, /(image-set\([^]*)/, UA + "$1$`$1");
      case 4968:
        return SA(SA(A, /(.+:)(flex-)?(.*)/, UA + "box-pack:$3" + ge + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + UA + A + A;
      case 4095:
      case 3583:
      case 4068:
      case 2532:
        return SA(A, /(.+)-inline(.+)/, UA + "$1$2") + A;
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
        if (je(A) - 1 - e > 6) switch (ce(A, e + 1)) {
          case 109:
            if (ce(A, e + 4) !== 45) break;
          case 102:
            return SA(A, /(.+:)(.+)-([^]+)/, "$1" + UA + "$2-$3$1" + Ho + (ce(A, e + 3) == 108 ? "$3" : "$2-$3")) + A;
          case 115:
            return ~Na(A, "stretch") ? ed(SA(A, "stretch", "fill-available"), e) + A : A;
        }
        break;
      case 4949:
        if (ce(A, e + 1) !== 115) break;
      case 6444:
        switch (ce(A, je(A) - 3 - (~Na(A, "!important") && 10))) {
          case 107:
            return SA(A, ":", ":" + UA) + A;
          case 101:
            return SA(A, /(.+:)([^;!]+)(;|!.+)?/, "$1" + UA + (ce(A, 14) === 45 ? "inline-" : "") + "box$3$1" + UA + "$2$3$1" + ge + "$2box$3") + A;
        }
        break;
      case 5936:
        switch (ce(A, e + 11)) {
          case 114:
            return UA + A + ge + SA(A, /[svh]\w+-[tblr]{2}/, "tb") + A;
          case 108:
            return UA + A + ge + SA(A, /[svh]\w+-[tblr]{2}/, "tb-rl") + A;
          case 45:
            return UA + A + ge + SA(A, /[svh]\w+-[tblr]{2}/, "lr") + A;
        }
        return UA + A + ge + A + A;
    }
    return A;
  }
  var og = function(e, t, r, n) {
    if (e.length > -1 && !e.return) switch (e.type) {
      case Ms:
        e.return = ed(e.value, e.length);
        break;
      case Xu:
        return Br([
          Tr(e, {
            value: SA(e.value, "@", "@" + UA)
          })
        ], n);
      case Os:
        if (e.length) return Np(e.props, function(o) {
          switch (_p(o, /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              return Br([
                Tr(e, {
                  props: [
                    SA(o, /:(read-\w+)/, ":" + Ho + "$1")
                  ]
                })
              ], n);
            case "::placeholder":
              return Br([
                Tr(e, {
                  props: [
                    SA(o, /:(plac\w+)/, ":" + UA + "input-$1")
                  ]
                }),
                Tr(e, {
                  props: [
                    SA(o, /:(plac\w+)/, ":" + Ho + "$1")
                  ]
                }),
                Tr(e, {
                  props: [
                    SA(o, /:(plac\w+)/, ge + "input-$1")
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
    var s, l = [
      rg,
      ng
    ];
    {
      var c, u = [
        Jp,
        qp(function(B) {
          c.insert(B);
        })
      ], d = Zp(l.concat(n, u)), f = function(Q) {
        return Br(Xp(Q), d);
      };
      s = function(Q, m, y, w) {
        c = y, f(Q ? Q + "{" + m.styles + "}" : m.styles), w && (p.inserted[m.name] = true);
      };
    }
    var p = {
      key: t,
      sheet: new Rp({
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
    return p.sheet.hydrate(a), p;
  }, td = {
    exports: {}
  }, IA = {};
  var ae = typeof Symbol == "function" && Symbol.for, Ds = ae ? /* @__PURE__ */ Symbol.for("react.element") : 60103, Ps = ae ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, si = ae ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, li = ae ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, ci = ae ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, ui = ae ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, di = ae ? /* @__PURE__ */ Symbol.for("react.context") : 60110, _s = ae ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, fi = ae ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, pi = ae ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, gi = ae ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, sg = ae ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, hi = ae ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, Bi = ae ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, lg = ae ? /* @__PURE__ */ Symbol.for("react.block") : 60121, cg = ae ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, ug = ae ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, dg = ae ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
  function Ee(A) {
    if (typeof A == "object" && A !== null) {
      var e = A.$$typeof;
      switch (e) {
        case Ds:
          switch (A = A.type, A) {
            case _s:
            case fi:
            case si:
            case ci:
            case li:
            case gi:
              return A;
            default:
              switch (A = A && A.$$typeof, A) {
                case di:
                case pi:
                case Bi:
                case hi:
                case ui:
                  return A;
                default:
                  return e;
              }
          }
        case Ps:
          return e;
      }
    }
  }
  function rd(A) {
    return Ee(A) === fi;
  }
  IA.AsyncMode = _s;
  IA.ConcurrentMode = fi;
  IA.ContextConsumer = di;
  IA.ContextProvider = ui;
  IA.Element = Ds;
  IA.ForwardRef = pi;
  IA.Fragment = si;
  IA.Lazy = Bi;
  IA.Memo = hi;
  IA.Portal = Ps;
  IA.Profiler = ci;
  IA.StrictMode = li;
  IA.Suspense = gi;
  IA.isAsyncMode = function(A) {
    return rd(A) || Ee(A) === _s;
  };
  IA.isConcurrentMode = rd;
  IA.isContextConsumer = function(A) {
    return Ee(A) === di;
  };
  IA.isContextProvider = function(A) {
    return Ee(A) === ui;
  };
  IA.isElement = function(A) {
    return typeof A == "object" && A !== null && A.$$typeof === Ds;
  };
  IA.isForwardRef = function(A) {
    return Ee(A) === pi;
  };
  IA.isFragment = function(A) {
    return Ee(A) === si;
  };
  IA.isLazy = function(A) {
    return Ee(A) === Bi;
  };
  IA.isMemo = function(A) {
    return Ee(A) === hi;
  };
  IA.isPortal = function(A) {
    return Ee(A) === Ps;
  };
  IA.isProfiler = function(A) {
    return Ee(A) === ci;
  };
  IA.isStrictMode = function(A) {
    return Ee(A) === li;
  };
  IA.isSuspense = function(A) {
    return Ee(A) === gi;
  };
  IA.isValidElementType = function(A) {
    return typeof A == "string" || typeof A == "function" || A === si || A === fi || A === ci || A === li || A === gi || A === sg || typeof A == "object" && A !== null && (A.$$typeof === Bi || A.$$typeof === hi || A.$$typeof === ui || A.$$typeof === di || A.$$typeof === pi || A.$$typeof === cg || A.$$typeof === ug || A.$$typeof === dg || A.$$typeof === lg);
  };
  IA.typeOf = Ee;
  td.exports = IA;
  var fg = td.exports, nd = fg, pg = {
    $$typeof: true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
  }, gg = {
    $$typeof: true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
  }, od = {};
  od[nd.ForwardRef] = pg;
  od[nd.Memo] = gg;
  var hg = true;
  function id(A, e, t) {
    var r = "";
    return t.split(" ").forEach(function(n) {
      A[n] !== void 0 ? e.push(A[n] + ";") : n && (r += n + " ");
    }), r;
  }
  var Ns = function(e, t, r) {
    var n = e.key + "-" + t.name;
    (r === false || hg === false) && e.registered[n] === void 0 && (e.registered[n] = t.styles);
  }, Gs = function(e, t, r) {
    Ns(e, t, r);
    var n = e.key + "-" + t.name;
    if (e.inserted[t.name] === void 0) {
      var o = t;
      do
        e.insert(t === o ? "." + n : "", o, e.sheet, true), o = o.next;
      while (o !== void 0);
    }
  };
  function Bg(A) {
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
  }, vg = /[A-Z]|^ms/g, wg = /_EMO_([^_]+?)_([^]*?)_EMO_/g, ad = function(e) {
    return e.charCodeAt(1) === 45;
  }, Ml = function(e) {
    return e != null && typeof e != "boolean";
  }, na = Ad(function(A) {
    return ad(A) ? A : A.replace(vg, "-$&").toLowerCase();
  }), Kl = function(e, t) {
    switch (e) {
      case "animation":
      case "animationName":
        if (typeof t == "string") return t.replace(wg, function(r, n, o) {
          return ze = {
            name: n,
            styles: o,
            next: ze
          }, n;
        });
    }
    return mg[e] !== 1 && !ad(e) && typeof t == "number" && t !== 0 ? t + "px" : t;
  };
  function dn(A, e, t) {
    if (t == null) return "";
    var r = t;
    if (r.__emotion_styles !== void 0) return r;
    switch (typeof t) {
      case "boolean":
        return "";
      case "object": {
        var n = t;
        if (n.anim === 1) return ze = {
          name: n.name,
          styles: n.styles,
          next: ze
        }, n.name;
        var o = t;
        if (o.styles !== void 0) {
          var i = o.next;
          if (i !== void 0) for (; i !== void 0; ) ze = {
            name: i.name,
            styles: i.styles,
            next: ze
          }, i = i.next;
          var a = o.styles + ";";
          return a;
        }
        return Cg(A, e, t);
      }
      case "function": {
        if (A !== void 0) {
          var s = ze, l = t(A);
          return ze = s, dn(A, e, l);
        }
        break;
      }
    }
    var c = t;
    if (e == null) return c;
    var u = e[c];
    return u !== void 0 ? u : c;
  }
  function Cg(A, e, t) {
    var r = "";
    if (Array.isArray(t)) for (var n = 0; n < t.length; n++) r += dn(A, e, t[n]) + ";";
    else for (var o in t) {
      var i = t[o];
      if (typeof i != "object") {
        var a = i;
        e != null && e[a] !== void 0 ? r += o + "{" + e[a] + "}" : Ml(a) && (r += na(o) + ":" + Kl(o, a) + ";");
      } else if (Array.isArray(i) && typeof i[0] == "string" && (e == null || e[i[0]] === void 0)) for (var s = 0; s < i.length; s++) Ml(i[s]) && (r += na(o) + ":" + Kl(o, i[s]) + ";");
      else {
        var l = dn(A, e, i);
        switch (o) {
          case "animation":
          case "animationName": {
            r += na(o) + ":" + l + ";";
            break;
          }
          default:
            r += o + "{" + l + "}";
        }
      }
    }
    return r;
  }
  var Dl = /label:\s*([^\s;{]+)\s*(;|$)/g, ze;
  function wn(A, e, t) {
    if (A.length === 1 && typeof A[0] == "object" && A[0] !== null && A[0].styles !== void 0) return A[0];
    var r = true, n = "";
    ze = void 0;
    var o = A[0];
    if (o == null || o.raw === void 0) r = false, n += dn(t, e, o);
    else {
      var i = o;
      n += i[0];
    }
    for (var a = 1; a < A.length; a++) if (n += dn(t, e, A[a]), r) {
      var s = o;
      n += s[a];
    }
    Dl.lastIndex = 0;
    for (var l = "", c; (c = Dl.exec(n)) !== null; ) l += "-" + c[1];
    var u = Bg(n) + l;
    return {
      name: u,
      styles: n,
      next: ze
    };
  }
  var yg = function(e) {
    return e();
  }, sd = _a.useInsertionEffect ? _a.useInsertionEffect : false, ld = sd || yg, Pl = sd || h.useLayoutEffect, cd = h.createContext(typeof HTMLElement < "u" ? ag({
    key: "css"
  }) : null);
  cd.Provider;
  var Vs = function(e) {
    return h.forwardRef(function(t, r) {
      var n = h.useContext(cd);
      return e(t, n, r);
    });
  }, Cn = h.createContext({}), $s = {}.hasOwnProperty, Va = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", bg = function(e, t) {
    var r = {};
    for (var n in t) $s.call(t, n) && (r[n] = t[n]);
    return r[Va] = e, r;
  }, Qg = function(e) {
    var t = e.cache, r = e.serialized, n = e.isStringTag;
    return Ns(t, r, n), ld(function() {
      return Gs(t, r, n);
    }), null;
  }, Fg = Vs(function(A, e, t) {
    var r = A.css;
    typeof r == "string" && e.registered[r] !== void 0 && (r = e.registered[r]);
    var n = A[Va], o = [
      r
    ], i = "";
    typeof A.className == "string" ? i = id(e.registered, o, A.className) : A.className != null && (i = A.className + " ");
    var a = wn(o, void 0, h.useContext(Cn));
    i += e.key + "-" + a.name;
    var s = {};
    for (var l in A) $s.call(A, l) && l !== "css" && l !== Va && (s[l] = A[l]);
    return s.className = i, t && (s.ref = t), h.createElement(h.Fragment, null, h.createElement(Qg, {
      cache: e,
      serialized: a,
      isStringTag: typeof n == "string"
    }), h.createElement(n, s));
  }), Ug = Fg, _l = function(e, t) {
    var r = arguments;
    if (t == null || !$s.call(t, "css")) return h.createElement.apply(void 0, r);
    var n = r.length, o = new Array(n);
    o[0] = Ug, o[1] = bg(e, t);
    for (var i = 2; i < n; i++) o[i] = r[i];
    return h.createElement.apply(null, o);
  };
  (function(A) {
    var e;
    e || (e = A.JSX || (A.JSX = {}));
  })(_l || (_l = {}));
  var Sg = Vs(function(A, e) {
    var t = A.styles, r = wn([
      t
    ], void 0, h.useContext(Cn)), n = h.useRef();
    return Pl(function() {
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
    ]), Pl(function() {
      var o = n.current, i = o[0], a = o[1];
      if (a) {
        o[1] = false;
        return;
      }
      if (r.next !== void 0 && Gs(e, r.next, true), i.tags.length) {
        var s = i.tags[i.tags.length - 1].nextElementSibling;
        i.before = s, i.flush();
      }
      e.insert("", r, i, false);
    }, [
      e,
      r.name
    ]), null;
  });
  function Ws() {
    for (var A = arguments.length, e = new Array(A), t = 0; t < A; t++) e[t] = arguments[t];
    return wn(e);
  }
  function yn() {
    var A = Ws.apply(void 0, arguments), e = "animation-" + A.name;
    return {
      name: e,
      styles: "@keyframes " + e + "{" + A.styles + "}",
      anim: 1,
      toString: function() {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      }
    };
  }
  var xg = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Eg = Ad(function(A) {
    return xg.test(A) || A.charCodeAt(0) === 111 && A.charCodeAt(1) === 110 && A.charCodeAt(2) < 91;
  }), Ig = Eg, Hg = function(e) {
    return e !== "theme";
  }, Nl = function(e) {
    return typeof e == "string" && e.charCodeAt(0) > 96 ? Ig : Hg;
  }, Gl = function(e, t, r) {
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
    return Ns(t, r, n), ld(function() {
      return Gs(t, r, n);
    }), null;
  }, kg = function A(e, t) {
    var r = e.__emotion_real === e, n = r && e.__emotion_base || e, o, i;
    t !== void 0 && (o = t.label, i = t.target);
    var a = Gl(e, t, r), s = a || Nl(n), l = !s("as");
    return function() {
      var c = arguments, u = r && e.__emotion_styles !== void 0 ? e.__emotion_styles.slice(0) : [];
      if (o !== void 0 && u.push("label:" + o + ";"), c[0] == null || c[0].raw === void 0) u.push.apply(u, c);
      else {
        var d = c[0];
        u.push(d[0]);
        for (var f = c.length, p = 1; p < f; p++) u.push(c[p], d[p]);
      }
      var B = Vs(function(Q, m, y) {
        var w = l && Q.as || n, C = "", U = [], v = Q;
        if (Q.theme == null) {
          v = {};
          for (var x in Q) v[x] = Q[x];
          v.theme = h.useContext(Cn);
        }
        typeof Q.className == "string" ? C = id(m.registered, U, Q.className) : Q.className != null && (C = Q.className + " ");
        var H = wn(u.concat(U), m.registered, v);
        C += m.key + "-" + H.name, i !== void 0 && (C += " " + i);
        var I = l && a === void 0 ? Nl(w) : s, g = {};
        for (var k in Q) l && k === "as" || I(k) && (g[k] = Q[k]);
        return g.className = C, y && (g.ref = y), h.createElement(h.Fragment, null, h.createElement(Tg, {
          cache: m,
          serialized: H,
          isStringTag: typeof w == "string"
        }), h.createElement(w, g));
      });
      return B.displayName = o !== void 0 ? o : "Styled(" + (typeof n == "string" ? n : n.displayName || n.name || "Component") + ")", B.defaultProps = e.defaultProps, B.__emotion_real = B, B.__emotion_base = n, B.__emotion_styles = u, B.__emotion_forwardProp = a, Object.defineProperty(B, "toString", {
        value: function() {
          return "." + i;
        }
      }), B.withComponent = function(Q, m) {
        var y = A(Q, Io({}, t, m, {
          shouldForwardProp: Gl(B, m, true)
        }));
        return y.apply(void 0, u);
      }, B;
    };
  }, Lg = [
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
  ], $a = kg.bind(null);
  Lg.forEach(function(A) {
    $a[A] = $a(A);
  });
  function Rg(A) {
    return A == null || Object.keys(A).length === 0;
  }
  function ud(A) {
    const { styles: e, defaultTheme: t = {} } = A, r = typeof e == "function" ? (n) => e(Rg(n) ? t : n) : e;
    return E.jsx(Sg, {
      styles: r
    });
  }
  function dd(A, e) {
    return $a(A, e);
  }
  function Og(A, e) {
    Array.isArray(A.__emotion_styles) && (A.__emotion_styles = e(A.__emotion_styles));
  }
  const Vl = [];
  function xt(A) {
    return Vl[0] = A, wn(Vl);
  }
  var fd = {
    exports: {}
  }, RA = {};
  var js = /* @__PURE__ */ Symbol.for("react.transitional.element"), zs = /* @__PURE__ */ Symbol.for("react.portal"), mi = /* @__PURE__ */ Symbol.for("react.fragment"), vi = /* @__PURE__ */ Symbol.for("react.strict_mode"), wi = /* @__PURE__ */ Symbol.for("react.profiler"), Ci = /* @__PURE__ */ Symbol.for("react.consumer"), yi = /* @__PURE__ */ Symbol.for("react.context"), bi = /* @__PURE__ */ Symbol.for("react.forward_ref"), Qi = /* @__PURE__ */ Symbol.for("react.suspense"), Fi = /* @__PURE__ */ Symbol.for("react.suspense_list"), Ui = /* @__PURE__ */ Symbol.for("react.memo"), Si = /* @__PURE__ */ Symbol.for("react.lazy"), Mg = /* @__PURE__ */ Symbol.for("react.view_transition"), Kg = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Ke(A) {
    if (typeof A == "object" && A !== null) {
      var e = A.$$typeof;
      switch (e) {
        case js:
          switch (A = A.type, A) {
            case mi:
            case wi:
            case vi:
            case Qi:
            case Fi:
            case Mg:
              return A;
            default:
              switch (A = A && A.$$typeof, A) {
                case yi:
                case bi:
                case Si:
                case Ui:
                  return A;
                case Ci:
                  return A;
                default:
                  return e;
              }
          }
        case zs:
          return e;
      }
    }
  }
  RA.ContextConsumer = Ci;
  RA.ContextProvider = yi;
  RA.Element = js;
  RA.ForwardRef = bi;
  RA.Fragment = mi;
  RA.Lazy = Si;
  RA.Memo = Ui;
  RA.Portal = zs;
  RA.Profiler = wi;
  RA.StrictMode = vi;
  RA.Suspense = Qi;
  RA.SuspenseList = Fi;
  RA.isContextConsumer = function(A) {
    return Ke(A) === Ci;
  };
  RA.isContextProvider = function(A) {
    return Ke(A) === yi;
  };
  RA.isElement = function(A) {
    return typeof A == "object" && A !== null && A.$$typeof === js;
  };
  RA.isForwardRef = function(A) {
    return Ke(A) === bi;
  };
  RA.isFragment = function(A) {
    return Ke(A) === mi;
  };
  RA.isLazy = function(A) {
    return Ke(A) === Si;
  };
  RA.isMemo = function(A) {
    return Ke(A) === Ui;
  };
  RA.isPortal = function(A) {
    return Ke(A) === zs;
  };
  RA.isProfiler = function(A) {
    return Ke(A) === wi;
  };
  RA.isStrictMode = function(A) {
    return Ke(A) === vi;
  };
  RA.isSuspense = function(A) {
    return Ke(A) === Qi;
  };
  RA.isSuspenseList = function(A) {
    return Ke(A) === Fi;
  };
  RA.isValidElementType = function(A) {
    return typeof A == "string" || typeof A == "function" || A === mi || A === wi || A === vi || A === Qi || A === Fi || typeof A == "object" && A !== null && (A.$$typeof === Si || A.$$typeof === Ui || A.$$typeof === yi || A.$$typeof === Ci || A.$$typeof === bi || A.$$typeof === Kg || A.getModuleId !== void 0);
  };
  RA.typeOf = Ke;
  fd.exports = RA;
  var pd = fd.exports;
  function Je(A) {
    if (typeof A != "object" || A === null) return false;
    const e = Object.getPrototypeOf(A);
    return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in A) && !(Symbol.iterator in A);
  }
  function gd(A) {
    if (h.isValidElement(A) || pd.isValidElementType(A) || !Je(A)) return A;
    const e = {};
    return Object.keys(A).forEach((t) => {
      e[t] = gd(A[t]);
    }), e;
  }
  ie = function(A, e, t = {
    clone: true
  }) {
    const r = t.clone ? {
      ...A
    } : A;
    return Je(A) && Je(e) && Object.keys(e).forEach((n) => {
      h.isValidElement(e[n]) || pd.isValidElementType(e[n]) ? r[n] = e[n] : Je(e[n]) && Object.prototype.hasOwnProperty.call(A, n) && Je(A[n]) ? r[n] = ie(A[n], e[n], t) : t.clone ? r[n] = Je(e[n]) ? gd(e[n]) : e[n] : r[n] = e[n];
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
    function a(d) {
      return `@media (min-width:${typeof e[d] == "number" ? e[d] : d}${t})`;
    }
    function s(d) {
      return `@media (max-width:${(typeof e[d] == "number" ? e[d] : d) - r / 100}${t})`;
    }
    function l(d, f) {
      const p = i.indexOf(f);
      return `@media (min-width:${typeof e[d] == "number" ? e[d] : d}${t}) and (max-width:${(p !== -1 && typeof e[i[p]] == "number" ? e[i[p]] : f) - r / 100}${t})`;
    }
    function c(d) {
      return i.indexOf(d) + 1 < i.length ? l(d, i[i.indexOf(d) + 1]) : a(d);
    }
    function u(d) {
      const f = i.indexOf(d);
      return f === 0 ? a(i[1]) : f === i.length - 1 ? s(i[f]) : l(d, i[i.indexOf(d) + 1]).replace("@media", "@media not all and");
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
  function $l(A, e) {
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
  const Vg = {
    borderRadius: 4
  };
  function Jr(A, e) {
    return e ? ie(A, e, {
      clone: false
    }) : A;
  }
  const xi = {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536
  }, Wl = {
    keys: [
      "xs",
      "sm",
      "md",
      "lg",
      "xl"
    ],
    up: (A) => `@media (min-width:${xi[A]}px)`
  }, $g = {
    containerQueries: (A) => ({
      up: (e) => {
        let t = typeof e == "number" ? e : xi[e] || e;
        return typeof t == "number" && (t = `${t}px`), A ? `@container ${A} (min-width:${t})` : `@container (min-width:${t})`;
      }
    })
  };
  ht = function(A, e, t) {
    const r = A.theme || {};
    if (Array.isArray(e)) {
      const o = r.breakpoints || Wl;
      return e.reduce((i, a, s) => (i[o.up(o.keys[s])] = t(e[s]), i), {});
    }
    if (typeof e == "object") {
      const o = r.breakpoints || Wl;
      return Object.keys(e).reduce((i, a) => {
        if (_g(o.keys, a)) {
          const s = Ng(r.containerQueries ? r : $g, a);
          s && (i[s] = t(e[a], a));
        } else if (Object.keys(o.values || xi).includes(a)) {
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
  function hd(A = {}) {
    var _a2;
    return ((_a2 = A.keys) == null ? void 0 : _a2.reduce((t, r) => {
      const n = A.up(r);
      return t[n] = {}, t;
    }, {})) || {};
  }
  function Wa(A, e) {
    return A.reduce((t, r) => {
      const n = t[r];
      return (!n || Object.keys(n).length === 0) && delete t[r], t;
    }, e);
  }
  WS = function(A, ...e) {
    const t = hd(A), r = [
      t,
      ...e
    ].reduce((n, o) => ie(n, o), {});
    return Wa(Object.keys(t), r);
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
  jS = function({ values: A, breakpoints: e, base: t }) {
    const r = t || Wg(A, e), n = Object.keys(r);
    if (n.length === 0) return A;
    let o;
    return n.reduce((i, a, s) => (Array.isArray(A) ? (i[a] = A[s] != null ? A[s] : A[o], o = s) : typeof A == "object" ? (i[a] = A[a] != null ? A[a] : A[o], o = a) : i[a] = A, i), {});
  };
  yA = function(A) {
    if (typeof A != "string") throw new Error(gt(7));
    return A.charAt(0).toUpperCase() + A.slice(1);
  };
  function Ei(A, e, t = true) {
    if (!e || typeof e != "string") return null;
    if (A && A.vars && t) {
      const r = `vars.${e}`.split(".").reduce((n, o) => n && n[o] ? n[o] : null, A);
      if (r != null) return r;
    }
    return e.split(".").reduce((r, n) => r && r[n] != null ? r[n] : null, A);
  }
  function To(A, e, t, r = t) {
    let n;
    return typeof A == "function" ? n = A(t) : Array.isArray(A) ? n = A[t] || r : n = Ei(A, t) || r, e && (n = e(n, r, A)), n;
  }
  function JA(A) {
    const { prop: e, cssProperty: t = A.prop, themeKey: r, transform: n } = A, o = (i) => {
      if (i[e] == null) return null;
      const a = i[e], s = i.theme, l = Ei(s, r) || {};
      return ht(i, a, (u) => {
        let d = To(l, n, u);
        return u === d && typeof u == "string" && (d = To(l, n, `${e}${u === "default" ? "" : yA(u)}`, u)), t === false ? d : {
          [t]: d
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
  const zg = {
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
  }, jl = {
    marginX: "mx",
    marginY: "my",
    paddingX: "px",
    paddingY: "py"
  }, Yg = jg((A) => {
    if (A.length > 2) if (jl[A]) A = jl[A];
    else return [
      A
    ];
    const [e, t] = A.split(""), r = zg[e], n = Xg[t] || "";
    return Array.isArray(n) ? n.map((o) => r + o) : [
      r + n
    ];
  }), Xs = [
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
  ], Ys = [
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
    ...Xs,
    ...Ys
  ];
  function bn(A, e, t, r) {
    const n = Ei(A, e, true) ?? t;
    return typeof n == "number" || typeof n == "string" ? (o) => typeof o == "string" ? o : typeof n == "string" ? `calc(${o} * ${n})` : n * o : Array.isArray(n) ? (o) => {
      if (typeof o == "string") return o;
      const i = Math.abs(o), a = n[i];
      return o >= 0 ? a : typeof a == "number" ? -a : `-${a}`;
    } : typeof n == "function" ? n : () => {
    };
  }
  Js = function(A) {
    return bn(A, "spacing", 8);
  };
  Qn = function(A, e) {
    return typeof e == "string" || e == null ? e : A(e);
  };
  function Jg(A, e) {
    return (t) => A.reduce((r, n) => (r[n] = Qn(e, t), r), {});
  }
  function Zg(A, e, t, r) {
    if (!e.includes(t)) return null;
    const n = Yg(t), o = Jg(n, r), i = A[t];
    return ht(A, i, o);
  }
  function Bd(A, e) {
    const t = Js(A.theme);
    return Object.keys(A).map((r) => Zg(A, e, r, t)).reduce(Jr, {});
  }
  function jA(A) {
    return Bd(A, Xs);
  }
  jA.propTypes = {};
  jA.filterProps = Xs;
  function zA(A) {
    return Bd(A, Ys);
  }
  zA.propTypes = {};
  zA.filterProps = Ys;
  function md(A = 8, e = Js({
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
  function Ii(...A) {
    const e = A.reduce((r, n) => (n.filterProps.forEach((o) => {
      r[o] = n;
    }), r), {}), t = (r) => Object.keys(r).reduce((n, o) => e[o] ? Jr(n, e[o](r)) : n, {});
    return t.propTypes = {}, t.filterProps = A.reduce((r, n) => r.concat(n.filterProps), []), t;
  }
  function Te(A) {
    return typeof A != "number" ? A : `${A}px solid`;
  }
  function De(A, e) {
    return JA({
      prop: A,
      themeKey: "borders",
      transform: e
    });
  }
  const qg = De("border", Te), Ah = De("borderTop", Te), eh = De("borderRight", Te), th = De("borderBottom", Te), rh = De("borderLeft", Te), nh = De("borderColor"), oh = De("borderTopColor"), ih = De("borderRightColor"), ah = De("borderBottomColor"), sh = De("borderLeftColor"), lh = De("outline", Te), ch = De("outlineColor"), Hi = (A) => {
    if (A.borderRadius !== void 0 && A.borderRadius !== null) {
      const e = bn(A.theme, "shape.borderRadius", 4), t = (r) => ({
        borderRadius: Qn(e, r)
      });
      return ht(A, A.borderRadius, t);
    }
    return null;
  };
  Hi.propTypes = {};
  Hi.filterProps = [
    "borderRadius"
  ];
  Ii(qg, Ah, eh, th, rh, nh, oh, ih, ah, sh, Hi, lh, ch);
  const Ti = (A) => {
    if (A.gap !== void 0 && A.gap !== null) {
      const e = bn(A.theme, "spacing", 8), t = (r) => ({
        gap: Qn(e, r)
      });
      return ht(A, A.gap, t);
    }
    return null;
  };
  Ti.propTypes = {};
  Ti.filterProps = [
    "gap"
  ];
  const ki = (A) => {
    if (A.columnGap !== void 0 && A.columnGap !== null) {
      const e = bn(A.theme, "spacing", 8), t = (r) => ({
        columnGap: Qn(e, r)
      });
      return ht(A, A.columnGap, t);
    }
    return null;
  };
  ki.propTypes = {};
  ki.filterProps = [
    "columnGap"
  ];
  const Li = (A) => {
    if (A.rowGap !== void 0 && A.rowGap !== null) {
      const e = bn(A.theme, "spacing", 8), t = (r) => ({
        rowGap: Qn(e, r)
      });
      return ht(A, A.rowGap, t);
    }
    return null;
  };
  Li.propTypes = {};
  Li.filterProps = [
    "rowGap"
  ];
  const uh = JA({
    prop: "gridColumn"
  }), dh = JA({
    prop: "gridRow"
  }), fh = JA({
    prop: "gridAutoFlow"
  }), ph = JA({
    prop: "gridAutoColumns"
  }), gh = JA({
    prop: "gridAutoRows"
  }), hh = JA({
    prop: "gridTemplateColumns"
  }), Bh = JA({
    prop: "gridTemplateRows"
  }), mh = JA({
    prop: "gridTemplateAreas"
  }), vh = JA({
    prop: "gridArea"
  });
  Ii(Ti, ki, Li, uh, dh, fh, ph, gh, hh, Bh, mh, vh);
  function mr(A, e) {
    return e === "grey" ? e : A;
  }
  const wh = JA({
    prop: "color",
    themeKey: "palette",
    transform: mr
  }), Ch = JA({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: mr
  }), yh = JA({
    prop: "backgroundColor",
    themeKey: "palette",
    transform: mr
  });
  Ii(wh, Ch, yh);
  function Se(A) {
    return A <= 1 && A !== 0 ? `${A * 100}%` : A;
  }
  const bh = JA({
    prop: "width",
    transform: Se
  }), Zs = (A) => {
    if (A.maxWidth !== void 0 && A.maxWidth !== null) {
      const e = (t) => {
        var _a2, _b2, _c2, _d2, _e2;
        const r = ((_c2 = (_b2 = (_a2 = A.theme) == null ? void 0 : _a2.breakpoints) == null ? void 0 : _b2.values) == null ? void 0 : _c2[t]) || xi[t];
        return r ? ((_e2 = (_d2 = A.theme) == null ? void 0 : _d2.breakpoints) == null ? void 0 : _e2.unit) !== "px" ? {
          maxWidth: `${r}${A.theme.breakpoints.unit}`
        } : {
          maxWidth: r
        } : {
          maxWidth: Se(t)
        };
      };
      return ht(A, A.maxWidth, e);
    }
    return null;
  };
  Zs.filterProps = [
    "maxWidth"
  ];
  const Qh = JA({
    prop: "minWidth",
    transform: Se
  }), Fh = JA({
    prop: "height",
    transform: Se
  }), Uh = JA({
    prop: "maxHeight",
    transform: Se
  }), Sh = JA({
    prop: "minHeight",
    transform: Se
  });
  JA({
    prop: "size",
    cssProperty: "width",
    transform: Se
  });
  JA({
    prop: "size",
    cssProperty: "height",
    transform: Se
  });
  const xh = JA({
    prop: "boxSizing"
  });
  Ii(bh, Zs, Qh, Fh, Uh, Sh, xh);
  const Fn = {
    border: {
      themeKey: "borders",
      transform: Te
    },
    borderTop: {
      themeKey: "borders",
      transform: Te
    },
    borderRight: {
      themeKey: "borders",
      transform: Te
    },
    borderBottom: {
      themeKey: "borders",
      transform: Te
    },
    borderLeft: {
      themeKey: "borders",
      transform: Te
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
      transform: Te
    },
    outlineColor: {
      themeKey: "palette"
    },
    borderRadius: {
      themeKey: "shape.borderRadius",
      style: Hi
    },
    color: {
      themeKey: "palette",
      transform: mr
    },
    bgcolor: {
      themeKey: "palette",
      cssProperty: "backgroundColor",
      transform: mr
    },
    backgroundColor: {
      themeKey: "palette",
      transform: mr
    },
    p: {
      style: zA
    },
    pt: {
      style: zA
    },
    pr: {
      style: zA
    },
    pb: {
      style: zA
    },
    pl: {
      style: zA
    },
    px: {
      style: zA
    },
    py: {
      style: zA
    },
    padding: {
      style: zA
    },
    paddingTop: {
      style: zA
    },
    paddingRight: {
      style: zA
    },
    paddingBottom: {
      style: zA
    },
    paddingLeft: {
      style: zA
    },
    paddingX: {
      style: zA
    },
    paddingY: {
      style: zA
    },
    paddingInline: {
      style: zA
    },
    paddingInlineStart: {
      style: zA
    },
    paddingInlineEnd: {
      style: zA
    },
    paddingBlock: {
      style: zA
    },
    paddingBlockStart: {
      style: zA
    },
    paddingBlockEnd: {
      style: zA
    },
    m: {
      style: jA
    },
    mt: {
      style: jA
    },
    mr: {
      style: jA
    },
    mb: {
      style: jA
    },
    ml: {
      style: jA
    },
    mx: {
      style: jA
    },
    my: {
      style: jA
    },
    margin: {
      style: jA
    },
    marginTop: {
      style: jA
    },
    marginRight: {
      style: jA
    },
    marginBottom: {
      style: jA
    },
    marginLeft: {
      style: jA
    },
    marginX: {
      style: jA
    },
    marginY: {
      style: jA
    },
    marginInline: {
      style: jA
    },
    marginInlineStart: {
      style: jA
    },
    marginInlineEnd: {
      style: jA
    },
    marginBlock: {
      style: jA
    },
    marginBlockStart: {
      style: jA
    },
    marginBlockEnd: {
      style: jA
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
      style: Ti
    },
    rowGap: {
      style: Li
    },
    columnGap: {
      style: ki
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
      transform: Se
    },
    maxWidth: {
      style: Zs
    },
    minWidth: {
      transform: Se
    },
    height: {
      transform: Se
    },
    maxHeight: {
      transform: Se
    },
    minHeight: {
      transform: Se
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
  function Eh(...A) {
    const e = A.reduce((r, n) => r.concat(Object.keys(n)), []), t = new Set(e);
    return A.every((r) => t.size === Object.keys(r).length);
  }
  function Ih(A, e) {
    return typeof A == "function" ? A(e) : A;
  }
  function Hh() {
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
      const d = Ei(n, l) || {};
      return u ? u(i) : ht(i, r, (p) => {
        let B = To(d, c, p);
        return p === B && typeof p == "string" && (B = To(d, c, `${t}${p === "default" ? "" : yA(p)}`, p)), s === false ? B : {
          [s]: B
        };
      });
    }
    function e(t) {
      const { sx: r, theme: n = {}, nested: o } = t || {};
      if (!r) return null;
      const i = n.unstable_sxConfig ?? Fn;
      function a(s) {
        let l = s;
        if (typeof s == "function") l = s(n);
        else if (typeof s != "object") return s;
        if (!l) return null;
        const c = hd(n.breakpoints), u = Object.keys(c);
        let d = c;
        return Object.keys(l).forEach((f) => {
          const p = Ih(l[f], n);
          if (p != null) if (typeof p == "object") if (i[f]) d = Jr(d, A(f, p, n, i));
          else {
            const B = ht({
              theme: n
            }, p, (Q) => ({
              [f]: Q
            }));
            Eh(B, p) ? d[f] = e({
              sx: p,
              theme: n,
              nested: true
            }) : d = Jr(d, B);
          }
          else d = Jr(d, A(f, p, n, i));
        }), !o && n.modularCssLayers ? {
          "@layer sx": $l(n, Wa(u, d))
        } : $l(n, Wa(u, d));
      }
      return Array.isArray(r) ? r.map(a) : a(r);
    }
    return e;
  }
  const Ht = Hh();
  Ht.filterProps = [
    "sx"
  ];
  function Th(A, e) {
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
  qs = function(A = {}, ...e) {
    const { breakpoints: t = {}, palette: r = {}, spacing: n, shape: o = {}, ...i } = A, a = Pg(t), s = md(n);
    let l = ie({
      breakpoints: a,
      direction: "ltr",
      components: {},
      palette: {
        mode: "light",
        ...r
      },
      spacing: s,
      shape: {
        ...Vg,
        ...o
      }
    }, i);
    return l = Gg(l), l.applyStyles = Th, l = e.reduce((c, u) => ie(c, u), l), l.unstable_sxConfig = {
      ...Fn,
      ...i == null ? void 0 : i.unstable_sxConfig
    }, l.unstable_sx = function(u) {
      return Ht({
        sx: u,
        theme: this
      });
    }, l;
  };
  function kh(A) {
    return Object.keys(A).length === 0;
  }
  function Al(A = null) {
    const e = h.useContext(Cn);
    return !e || kh(e) ? A : e;
  }
  const Lh = qs();
  el = function(A = Lh) {
    return Al(A);
  };
  function oa(A) {
    const e = xt(A);
    return A !== e && e.styles ? (e.styles.match(/^@layer\s+[^{]*$/) || (e.styles = `@layer global{${e.styles}}`), e) : A;
  }
  function vd({ styles: A, themeId: e, defaultTheme: t = {} }) {
    const r = el(t), n = e && r[e] || r;
    let o = typeof A == "function" ? A(n) : A;
    return n.modularCssLayers && (Array.isArray(o) ? o = o.map((i) => oa(typeof i == "function" ? i(n) : i)) : o = oa(o)), E.jsx(ud, {
      styles: o
    });
  }
  const Rh = (A) => {
    var _a2;
    const e = {
      systemProps: {},
      otherProps: {}
    }, t = ((_a2 = A == null ? void 0 : A.theme) == null ? void 0 : _a2.unstable_sxConfig) ?? Fn;
    return Object.keys(A).forEach((r) => {
      t[r] ? e.systemProps[r] = A[r] : e.otherProps[r] = A[r];
    }), e;
  };
  wd = function(A) {
    const { sx: e, ...t } = A, { systemProps: r, otherProps: n } = Rh(t);
    let o;
    return Array.isArray(e) ? o = [
      r,
      ...e
    ] : typeof e == "function" ? o = (...i) => {
      const a = e(...i);
      return Je(a) ? {
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
  const zl = (A) => A, Oh = () => {
    let A = zl;
    return {
      configure(e) {
        A = e;
      },
      generate(e) {
        return A(e);
      },
      reset() {
        A = zl;
      }
    };
  }, Cd = Oh();
  function yd(A) {
    var e, t, r = "";
    if (typeof A == "string" || typeof A == "number") r += A;
    else if (typeof A == "object") if (Array.isArray(A)) {
      var n = A.length;
      for (e = 0; e < n; e++) A[e] && (t = yd(A[e])) && (r && (r += " "), r += t);
    } else for (t in A) A[t] && (r && (r += " "), r += t);
    return r;
  }
  wA = function() {
    for (var A, e, t = 0, r = "", n = arguments.length; t < n; t++) (A = arguments[t]) && (e = yd(A)) && (r && (r += " "), r += e);
    return r;
  };
  function Mh(A = {}) {
    const { themeId: e, defaultTheme: t, defaultClassName: r = "MuiBox-root", generateClassName: n } = A, o = dd("div", {
      shouldForwardProp: (a) => a !== "theme" && a !== "sx" && a !== "as"
    })(Ht);
    return h.forwardRef(function(s, l) {
      const c = el(t), { className: u, component: d = "div", ...f } = wd(s);
      return E.jsx(o, {
        as: d,
        ref: l,
        className: wA(u, n ? n(r) : r),
        theme: e && c[e] || c,
        ...f
      });
    });
  }
  const Kh = {
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
  _A = function(A, e, t = "Mui") {
    const r = Kh[e];
    return r ? `${t}-${r}` : `${Cd.generate(A)}-${e}`;
  };
  KA = function(A, e, t = "Mui") {
    const r = {};
    return e.forEach((n) => {
      r[n] = _A(A, n, t);
    }), r;
  };
  function bd(A) {
    const { variants: e, ...t } = A, r = {
      variants: e,
      style: xt(t),
      isProcessed: true
    };
    return r.style === t || e && e.forEach((n) => {
      typeof n.style != "function" && (n.style = xt(n.style));
    }), r;
  }
  const Dh = qs();
  function ia(A) {
    return A !== "ownerState" && A !== "theme" && A !== "sx" && A !== "as";
  }
  function Vt(A, e) {
    return e && A && typeof A == "object" && A.styles && !A.styles.startsWith("@layer") && (A.styles = `@layer ${e}{${String(A.styles)}}`), A;
  }
  function Ph(A) {
    return A ? (e, t) => t[A] : null;
  }
  function _h(A, e, t) {
    A.theme = Vh(A.theme) ? t : A.theme[e] || A.theme;
  }
  function bo(A, e, t) {
    const r = typeof e == "function" ? e(A) : e;
    if (Array.isArray(r)) return r.flatMap((n) => bo(A, n, t));
    if (Array.isArray(r == null ? void 0 : r.variants)) {
      let n;
      if (r.isProcessed) n = t ? Vt(r.style, t) : r.style;
      else {
        const { variants: o, ...i } = r;
        n = t ? Vt(xt(i), t) : i;
      }
      return Qd(A, r.variants, [
        n
      ], t);
    }
    return (r == null ? void 0 : r.isProcessed) ? t ? Vt(xt(r.style), t) : r.style : t ? Vt(xt(r), t) : r;
  }
  function Qd(A, e, t = [], r = void 0) {
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
      }, t.push(r ? Vt(xt(i.style(n)), r) : i.style(n))) : t.push(r ? Vt(xt(i.style), r) : i.style);
    }
    return t;
  }
  Nh = function(A = {}) {
    const { themeId: e, defaultTheme: t = Dh, rootShouldForwardProp: r = ia, slotShouldForwardProp: n = ia } = A;
    function o(a) {
      _h(a, e, t);
    }
    return (a, s = {}) => {
      Og(a, (v) => v.filter((x) => x !== Ht));
      const { name: l, slot: c, skipVariantsResolver: u, skipSx: d, overridesResolver: f = Ph(Wh(c)), ...p } = s, B = l && l.startsWith("Mui") || c ? "components" : "custom", Q = u !== void 0 ? u : c && c !== "Root" && c !== "root" || false, m = d || false;
      let y = ia;
      c === "Root" || c === "root" ? y = r : c ? y = n : $h(a) && (y = void 0);
      const w = dd(a, {
        shouldForwardProp: y,
        label: Gh(),
        ...p
      }), C = (v) => {
        if (v.__emotion_real === v) return v;
        if (typeof v == "function") return function(H) {
          return bo(H, v, H.theme.modularCssLayers ? B : void 0);
        };
        if (Je(v)) {
          const x = bd(v);
          return function(I) {
            return x.variants ? bo(I, x, I.theme.modularCssLayers ? B : void 0) : I.theme.modularCssLayers ? Vt(x.style, B) : x.style;
          };
        }
        return v;
      }, U = (...v) => {
        const x = [], H = v.map(C), I = [];
        if (x.push(o), l && f && I.push(function(L) {
          var _a2, _b2;
          const M = (_b2 = (_a2 = L.theme.components) == null ? void 0 : _a2[l]) == null ? void 0 : _b2.styleOverrides;
          if (!M) return null;
          const O = {};
          for (const j in M) O[j] = bo(L, M[j], L.theme.modularCssLayers ? "theme" : void 0);
          return f(L, O);
        }), l && !Q && I.push(function(L) {
          var _a2, _b2, _c2;
          const M = (_c2 = (_b2 = (_a2 = L.theme) == null ? void 0 : _a2.components) == null ? void 0 : _b2[l]) == null ? void 0 : _c2.variants;
          return M ? Qd(L, M, [], L.theme.modularCssLayers ? "theme" : void 0) : null;
        }), m || I.push(Ht), Array.isArray(H[0])) {
          const R = H.shift(), L = new Array(x.length).fill(""), K = new Array(I.length).fill("");
          let M;
          M = [
            ...L,
            ...R,
            ...K
          ], M.raw = [
            ...L,
            ...R.raw,
            ...K
          ], x.unshift(M);
        }
        const g = [
          ...x,
          ...H,
          ...I
        ], k = w(...g);
        return a.muiName && (k.muiName = a.muiName), k;
      };
      return w.withConfig && (U.withConfig = w.withConfig), U;
    };
  };
  function Gh(A, e) {
    return void 0;
  }
  function Vh(A) {
    for (const e in A) return false;
    return true;
  }
  function $h(A) {
    return typeof A == "string" && A.charCodeAt(0) > 96;
  }
  function Wh(A) {
    return A && A.charAt(0).toLowerCase() + A.slice(1);
  }
  ja = function(A, e) {
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
            t[n][s] = ja(o[s], i[s]);
          }
        }
      } else t[n] === void 0 && (t[n] = A[n]);
    }
    return t;
  };
  tt = typeof window < "u" ? h.useLayoutEffect : h.useEffect;
  function cr(A, e = Number.MIN_SAFE_INTEGER, t = Number.MAX_SAFE_INTEGER) {
    return Math.max(e, Math.min(A, t));
  }
  function tl(A, e = 0, t = 1) {
    return cr(A, e, t);
  }
  function jh(A) {
    A = A.slice(1);
    const e = new RegExp(`.{1,${A.length >= 6 ? 2 : 1}}`, "g");
    let t = A.match(e);
    return t && t[0].length === 1 && (t = t.map((r) => r + r)), t ? `rgb${t.length === 4 ? "a" : ""}(${t.map((r, n) => n < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
  }
  function Tt(A) {
    if (A.type) return A;
    if (A.charAt(0) === "#") return Tt(jh(A));
    const e = A.indexOf("("), t = A.substring(0, e);
    if (![
      "rgb",
      "rgba",
      "hsl",
      "hsla",
      "color"
    ].includes(t)) throw new Error(gt(9, A));
    let r = A.substring(e + 1, A.length - 1), n;
    if (t === "color") {
      if (r = r.split(" "), n = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), ![
        "srgb",
        "display-p3",
        "a98-rgb",
        "prophoto-rgb",
        "rec-2020"
      ].includes(n)) throw new Error(gt(10, n));
    } else r = r.split(",");
    return r = r.map((o) => parseFloat(o)), {
      type: t,
      values: r,
      colorSpace: n
    };
  }
  const zh = (A) => {
    const e = Tt(A);
    return e.values.slice(0, 3).map((t, r) => e.type.includes("hsl") && r !== 0 ? `${t}%` : t).join(" ");
  }, _r = (A, e) => {
    try {
      return zh(A);
    } catch {
      return A;
    }
  };
  function Ri(A) {
    const { type: e, colorSpace: t } = A;
    let { values: r } = A;
    return e.includes("rgb") ? r = r.map((n, o) => o < 3 ? parseInt(n, 10) : n) : e.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), e.includes("color") ? r = `${t} ${r.join(" ")}` : r = `${r.join(", ")}`, `${e}(${r})`;
  }
  function Fd(A) {
    A = Tt(A);
    const { values: e } = A, t = e[0], r = e[1] / 100, n = e[2] / 100, o = r * Math.min(n, 1 - n), i = (l, c = (l + t / 30) % 12) => n - o * Math.max(Math.min(c - 3, 9 - c, 1), -1);
    let a = "rgb";
    const s = [
      Math.round(i(0) * 255),
      Math.round(i(8) * 255),
      Math.round(i(4) * 255)
    ];
    return A.type === "hsla" && (a += "a", s.push(e[3])), Ri({
      type: a,
      values: s
    });
  }
  function za(A) {
    A = Tt(A);
    let e = A.type === "hsl" || A.type === "hsla" ? Tt(Fd(A)).values : A.values;
    return e = e.map((t) => (A.type !== "color" && (t /= 255), t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4)), Number((0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2]).toFixed(3));
  }
  function Xh(A, e) {
    const t = za(A), r = za(e);
    return (Math.max(t, r) + 0.05) / (Math.min(t, r) + 0.05);
  }
  kt = function(A, e) {
    return A = Tt(A), e = tl(e), (A.type === "rgb" || A.type === "hsl") && (A.type += "a"), A.type === "color" ? A.values[3] = `/${e}` : A.values[3] = e, Ri(A);
  };
  function Rn(A, e, t) {
    try {
      return kt(A, e);
    } catch {
      return A;
    }
  }
  fn = function(A, e) {
    if (A = Tt(A), e = tl(e), A.type.includes("hsl")) A.values[2] *= 1 - e;
    else if (A.type.includes("rgb") || A.type.includes("color")) for (let t = 0; t < 3; t += 1) A.values[t] *= 1 - e;
    return Ri(A);
  };
  function kA(A, e, t) {
    try {
      return fn(A, e);
    } catch {
      return A;
    }
  }
  pn = function(A, e) {
    if (A = Tt(A), e = tl(e), A.type.includes("hsl")) A.values[2] += (100 - A.values[2]) * e;
    else if (A.type.includes("rgb")) for (let t = 0; t < 3; t += 1) A.values[t] += (255 - A.values[t]) * e;
    else if (A.type.includes("color")) for (let t = 0; t < 3; t += 1) A.values[t] += (1 - A.values[t]) * e;
    return Ri(A);
  };
  function LA(A, e, t) {
    try {
      return pn(A, e);
    } catch {
      return A;
    }
  }
  function Yh(A, e = 0.15) {
    return za(A) > 0.5 ? fn(A, e) : pn(A, e);
  }
  function On(A, e, t) {
    try {
      return Yh(A, e);
    } catch {
      return A;
    }
  }
  Xl = function(...A) {
    return A.reduce((e, t) => t == null ? e : function(...n) {
      e.apply(this, n), t.apply(this, n);
    }, () => {
    });
  };
  function Ud(A, e = 166) {
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
  aa = function(A, e) {
    var _a2, _b2, _c2;
    return h.isValidElement(A) && e.indexOf(A.type.muiName ?? ((_c2 = (_b2 = (_a2 = A.type) == null ? void 0 : _a2._payload) == null ? void 0 : _b2.value) == null ? void 0 : _c2.muiName)) !== -1;
  };
  function Ce(A) {
    return A && A.ownerDocument || document;
  }
  function Bt(A) {
    return Ce(A).defaultView || window;
  }
  function Yl(A, e) {
    typeof A == "function" ? A(e) : A && (A.current = e);
  }
  let Jl = 0;
  function Jh(A) {
    const [e, t] = h.useState(A), r = A || e;
    return h.useEffect(() => {
      e == null && (Jl += 1, t(`mui-${Jl}`));
    }, [
      e
    ]), r;
  }
  const Zh = {
    ..._a
  }, Zl = Zh.useId;
  Oi = function(A) {
    if (Zl !== void 0) {
      const e = Zl();
      return A ?? e;
    }
    return Jh(A);
  };
  Xa = function({ controlled: A, default: e, name: t, state: r = "value" }) {
    const { current: n } = h.useRef(A !== void 0), [o, i] = h.useState(e), a = n ? A : o, s = h.useCallback((l) => {
      n || i(l);
    }, []);
    return [
      a,
      s
    ];
  };
  function et(A) {
    const e = h.useRef(A);
    return tt(() => {
      e.current = A;
    }), h.useRef((...t) => (0, e.current)(...t)).current;
  }
  ye = function(...A) {
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
  const ql = {};
  function Sd(A, e) {
    const t = h.useRef(ql);
    return t.current === ql && (t.current = A(e)), t;
  }
  const qh = [];
  function AB(A) {
    h.useEffect(A, qh);
  }
  class rl {
    static create() {
      return new rl();
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
  function xd() {
    const A = Sd(rl.create).current;
    return AB(A.disposeEffect), A;
  }
  function ko(A) {
    try {
      return A.matches(":focus-visible");
    } catch {
    }
    return false;
  }
  function Ed(A = window) {
    const e = A.document.documentElement.clientWidth;
    return A.innerWidth - e;
  }
  const eB = {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: "1px",
    margin: "-1px",
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    whiteSpace: "nowrap",
    width: "1px"
  };
  NA = function(A, e, t = void 0) {
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
  function tB(A) {
    return typeof A == "string";
  }
  function Id(A, e, t) {
    return A === void 0 || tB(A) ? e : {
      ...e,
      ownerState: {
        ...e.ownerState,
        ...t
      }
    };
  }
  function Zr(A, e = []) {
    if (A === void 0) return {};
    const t = {};
    return Object.keys(A).filter((r) => r.match(/^on[A-Z]/) && typeof A[r] == "function" && !e.includes(r)).forEach((r) => {
      t[r] = A[r];
    }), t;
  }
  function Ac(A) {
    if (A === void 0) return {};
    const e = {};
    return Object.keys(A).filter((t) => !(t.match(/^on[A-Z]/) && typeof A[t] == "function")).forEach((t) => {
      e[t] = A[t];
    }), e;
  }
  function Hd(A) {
    const { getSlotProps: e, additionalProps: t, externalSlotProps: r, externalForwardedProps: n, className: o } = A;
    if (!e) {
      const f = wA(t == null ? void 0 : t.className, o, n == null ? void 0 : n.className, r == null ? void 0 : r.className), p = {
        ...t == null ? void 0 : t.style,
        ...n == null ? void 0 : n.style,
        ...r == null ? void 0 : r.style
      }, B = {
        ...t,
        ...n,
        ...r
      };
      return f.length > 0 && (B.className = f), Object.keys(p).length > 0 && (B.style = p), {
        props: B,
        internalRef: void 0
      };
    }
    const i = Zr({
      ...n,
      ...r
    }), a = Ac(r), s = Ac(n), l = e(i), c = wA(l == null ? void 0 : l.className, t == null ? void 0 : t.className, o, n == null ? void 0 : n.className, r == null ? void 0 : r.className), u = {
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
  function Td(A, e, t) {
    return typeof A == "function" ? A(e, t) : A;
  }
  function ft(A) {
    var _a2;
    const { elementType: e, externalSlotProps: t, ownerState: r, skipResolvingSlotProps: n = false, ...o } = A, i = n ? {} : Td(t, r), { props: a, internalRef: s } = Hd({
      ...o,
      externalSlotProps: i
    }), l = ye(s, i == null ? void 0 : i.ref, (_a2 = A.additionalProps) == null ? void 0 : _a2.ref);
    return Id(e, {
      ...a,
      ref: l
    }, r);
  }
  function Un(A) {
    var _a2;
    return parseInt(h.version, 10) >= 19 ? ((_a2 = A == null ? void 0 : A.props) == null ? void 0 : _a2.ref) || null : (A == null ? void 0 : A.ref) || null;
  }
  const kd = h.createContext(null);
  function nl() {
    return h.useContext(kd);
  }
  const rB = typeof Symbol == "function" && Symbol.for, nB = rB ? /* @__PURE__ */ Symbol.for("mui.nested") : "__THEME_NESTED__";
  function oB(A, e) {
    return typeof e == "function" ? e(A) : {
      ...A,
      ...e
    };
  }
  function iB(A) {
    const { children: e, theme: t } = A, r = nl(), n = h.useMemo(() => {
      const o = r === null ? {
        ...t
      } : oB(r, t);
      return o != null && (o[nB] = r !== null), o;
    }, [
      t,
      r
    ]);
    return E.jsx(kd.Provider, {
      value: n,
      children: e
    });
  }
  const Ld = h.createContext();
  function aB({ value: A, ...e }) {
    return E.jsx(Ld.Provider, {
      value: A ?? true,
      ...e
    });
  }
  const Rd = () => h.useContext(Ld) ?? false, Od = h.createContext(void 0);
  function sB({ value: A, children: e }) {
    return E.jsx(Od.Provider, {
      value: A,
      children: e
    });
  }
  function lB(A) {
    const { theme: e, name: t, props: r } = A;
    if (!e || !e.components || !e.components[t]) return r;
    const n = e.components[t];
    return n.defaultProps ? ja(n.defaultProps, r) : !n.styleOverrides && !n.variants ? ja(n, r) : r;
  }
  function cB({ props: A, name: e }) {
    const t = h.useContext(Od);
    return lB({
      props: A,
      name: e,
      theme: {
        components: t
      }
    });
  }
  function uB(A) {
    const e = Al(), t = Oi() || "", { modularCssLayers: r } = A;
    let n = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
    return !r || e !== null ? n = "" : typeof r == "string" ? n = r.replace(/mui(?!\.)/g, n) : n = `@layer ${n};`, tt(() => {
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
    ]), n ? E.jsx(vd, {
      styles: n
    }) : null;
  }
  const ec = {};
  function tc(A, e, t, r = false) {
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
  function Md(A) {
    const { children: e, theme: t, themeId: r } = A, n = Al(ec), o = nl() || ec, i = tc(r, n, t), a = tc(r, o, t, true), s = (r ? i[r] : i).direction === "rtl", l = uB(i);
    return E.jsx(iB, {
      theme: a,
      children: E.jsx(Cn.Provider, {
        value: i,
        children: E.jsx(aB, {
          value: s,
          children: E.jsxs(sB, {
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
  const rc = {
    theme: void 0
  };
  function dB(A) {
    let e, t;
    return function(n) {
      let o = e;
      return (o === void 0 || n.theme !== t) && (rc.theme = n.theme, o = bd(A(rc)), e = o, t = n.theme), o;
    };
  }
  const ol = "mode", il = "color-scheme", fB = "data-color-scheme";
  function pB(A) {
    const { defaultMode: e = "system", defaultLightColorScheme: t = "light", defaultDarkColorScheme: r = "dark", modeStorageKey: n = ol, colorSchemeStorageKey: o = il, attribute: i = fB, colorSchemeNode: a = "document.documentElement", nonce: s } = A || {};
    let l = "", c = i;
    if (i === "class" && (c = ".%s"), i === "data" && (c = "[data-%s]"), c.startsWith(".")) {
      const d = c.substring(1);
      l += `${a}.classList.remove('${d}'.replace('%s', light), '${d}'.replace('%s', dark));
      ${a}.classList.add('${d}'.replace('%s', colorScheme));`;
    }
    const u = c.match(/\[([^\]]+)\]/);
    if (u) {
      const [d, f] = u[1].split("=");
      f || (l += `${a}.removeAttribute('${d}'.replace('%s', light));
      ${a}.removeAttribute('${d}'.replace('%s', dark));`), l += `
      ${a}.setAttribute('${d}'.replace('%s', colorScheme), ${f ? `${f}.replace('%s', colorScheme)` : '""'});`;
    } else l += `${a}.setAttribute('${c}', colorScheme);`;
    return E.jsx("script", {
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
  function gB() {
  }
  const hB = ({ key: A, storageWindow: e }) => (!e && typeof window < "u" && (e = window), {
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
      if (!e) return gB;
      const r = (n) => {
        const o = n.newValue;
        n.key === A && t(o);
      };
      return e.addEventListener("storage", r), () => {
        e.removeEventListener("storage", r);
      };
    }
  });
  function sa() {
  }
  function nc(A) {
    if (typeof window < "u" && typeof window.matchMedia == "function" && A === "system") return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function Kd(A, e) {
    if (A.mode === "light" || A.mode === "system" && A.systemMode === "light") return e("light");
    if (A.mode === "dark" || A.mode === "system" && A.systemMode === "dark") return e("dark");
  }
  function BB(A) {
    return Kd(A, (e) => {
      if (e === "light") return A.lightColorScheme;
      if (e === "dark") return A.darkColorScheme;
    });
  }
  function mB(A) {
    const { defaultMode: e = "light", defaultLightColorScheme: t, defaultDarkColorScheme: r, supportedColorSchemes: n = [], modeStorageKey: o = ol, colorSchemeStorageKey: i = il, storageWindow: a = typeof window > "u" ? void 0 : window, storageManager: s = hB, noSsr: l = false } = A, c = n.join(","), u = n.length > 1, d = h.useMemo(() => s == null ? void 0 : s({
      key: o,
      storageWindow: a
    }), [
      s,
      o,
      a
    ]), f = h.useMemo(() => s == null ? void 0 : s({
      key: `${i}-light`,
      storageWindow: a
    }), [
      s,
      i,
      a
    ]), p = h.useMemo(() => s == null ? void 0 : s({
      key: `${i}-dark`,
      storageWindow: a
    }), [
      s,
      i,
      a
    ]), [B, Q] = h.useState(() => {
      const H = (d == null ? void 0 : d.get(e)) || e, I = (f == null ? void 0 : f.get(t)) || t, g = (p == null ? void 0 : p.get(r)) || r;
      return {
        mode: H,
        systemMode: nc(H),
        lightColorScheme: I,
        darkColorScheme: g
      };
    }), [m, y] = h.useState(l || !u);
    h.useEffect(() => {
      y(true);
    }, []);
    const w = BB(B), C = h.useCallback((H) => {
      Q((I) => {
        if (H === I.mode) return I;
        const g = H ?? e;
        return d == null ? void 0 : d.set(g), {
          ...I,
          mode: g,
          systemMode: nc(g)
        };
      });
    }, [
      d,
      e
    ]), U = h.useCallback((H) => {
      H ? typeof H == "string" ? H && !c.includes(H) ? console.error(`\`${H}\` does not exist in \`theme.colorSchemes\`.`) : Q((I) => {
        const g = {
          ...I
        };
        return Kd(I, (k) => {
          k === "light" && (f == null ? void 0 : f.set(H), g.lightColorScheme = H), k === "dark" && (p == null ? void 0 : p.set(H), g.darkColorScheme = H);
        }), g;
      }) : Q((I) => {
        const g = {
          ...I
        }, k = H.light === null ? t : H.light, R = H.dark === null ? r : H.dark;
        return k && (c.includes(k) ? (g.lightColorScheme = k, f == null ? void 0 : f.set(k)) : console.error(`\`${k}\` does not exist in \`theme.colorSchemes\`.`)), R && (c.includes(R) ? (g.darkColorScheme = R, p == null ? void 0 : p.set(R)) : console.error(`\`${R}\` does not exist in \`theme.colorSchemes\`.`)), g;
      }) : Q((I) => (f == null ? void 0 : f.set(t), p == null ? void 0 : p.set(r), {
        ...I,
        lightColorScheme: t,
        darkColorScheme: r
      }));
    }, [
      c,
      f,
      p,
      t,
      r
    ]), v = h.useCallback((H) => {
      B.mode === "system" && Q((I) => {
        const g = (H == null ? void 0 : H.matches) ? "dark" : "light";
        return I.systemMode === g ? I : {
          ...I,
          systemMode: g
        };
      });
    }, [
      B.mode
    ]), x = h.useRef(v);
    return x.current = v, h.useEffect(() => {
      if (typeof window.matchMedia != "function" || !u) return;
      const H = (...g) => x.current(...g), I = window.matchMedia("(prefers-color-scheme: dark)");
      return I.addListener(H), H(I), () => {
        I.removeListener(H);
      };
    }, [
      u
    ]), h.useEffect(() => {
      if (u) {
        const H = (d == null ? void 0 : d.subscribe((k) => {
          (!k || [
            "light",
            "dark",
            "system"
          ].includes(k)) && C(k || e);
        })) || sa, I = (f == null ? void 0 : f.subscribe((k) => {
          (!k || c.match(k)) && U({
            light: k
          });
        })) || sa, g = (p == null ? void 0 : p.subscribe((k) => {
          (!k || c.match(k)) && U({
            dark: k
          });
        })) || sa;
        return () => {
          H(), I(), g();
        };
      }
    }, [
      U,
      C,
      c,
      e,
      a,
      u,
      d,
      f,
      p
    ]), {
      ...B,
      mode: m ? B.mode : void 0,
      systemMode: m ? B.systemMode : void 0,
      colorScheme: m ? w : void 0,
      setMode: C,
      setColorScheme: U
    };
  }
  const vB = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
  function wB(A) {
    const { themeId: e, theme: t = {}, modeStorageKey: r = ol, colorSchemeStorageKey: n = il, disableTransitionOnChange: o = false, defaultColorScheme: i, resolveTheme: a } = A, s = {
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
    }, l = h.createContext(void 0), c = () => h.useContext(l) || s, u = {}, d = {};
    function f(m) {
      var _a2, _b2, _c2, _d2;
      const { children: y, theme: w, modeStorageKey: C = r, colorSchemeStorageKey: U = n, disableTransitionOnChange: v = o, storageManager: x, storageWindow: H = typeof window > "u" ? void 0 : window, documentNode: I = typeof document > "u" ? void 0 : document, colorSchemeNode: g = typeof document > "u" ? void 0 : document.documentElement, disableNestedContext: k = false, disableStyleSheetGeneration: R = false, defaultMode: L = "system", noSsr: K } = m, M = h.useRef(false), O = nl(), j = h.useContext(l), N = !!j && !k, D = h.useMemo(() => w || (typeof t == "function" ? t() : t), [
        w
      ]), Y = D[e], X = Y || D, { colorSchemes: oA = u, components: P = d, cssVarPrefix: z } = X, $ = Object.keys(oA).filter((mA) => !!oA[mA]).join(","), AA = h.useMemo(() => $.split(","), [
        $
      ]), gA = typeof i == "string" ? i : i.light, cA = typeof i == "string" ? i : i.dark, tA = oA[gA] && oA[cA] ? L : ((_b2 = (_a2 = oA[X.defaultColorScheme]) == null ? void 0 : _a2.palette) == null ? void 0 : _b2.mode) || ((_c2 = X.palette) == null ? void 0 : _c2.mode), { mode: q, setMode: aA, systemMode: sA, lightColorScheme: b, darkColorScheme: S, colorScheme: F, setColorScheme: G } = mB({
        supportedColorSchemes: AA,
        defaultLightColorScheme: gA,
        defaultDarkColorScheme: cA,
        modeStorageKey: C,
        colorSchemeStorageKey: U,
        defaultMode: tA,
        storageManager: x,
        storageWindow: H,
        noSsr: K
      });
      let W = q, V = F;
      N && (W = j.mode, V = j.colorScheme);
      const dA = h.useMemo(() => {
        var _a3;
        const mA = V || X.defaultColorScheme, J = ((_a3 = X.generateThemeVars) == null ? void 0 : _a3.call(X)) || X.vars, Z = {
          ...X,
          components: P,
          colorSchemes: oA,
          cssVarPrefix: z,
          vars: J
        };
        if (typeof Z.generateSpacing == "function" && (Z.spacing = Z.generateSpacing()), mA) {
          const fA = oA[mA];
          fA && typeof fA == "object" && Object.keys(fA).forEach((hA) => {
            fA[hA] && typeof fA[hA] == "object" ? Z[hA] = {
              ...Z[hA],
              ...fA[hA]
            } : Z[hA] = fA[hA];
          });
        }
        return a ? a(Z) : Z;
      }, [
        X,
        V,
        P,
        oA,
        z
      ]), pA = X.colorSchemeSelector;
      tt(() => {
        if (V && g && pA && pA !== "media") {
          const mA = pA;
          let J = pA;
          if (mA === "class" && (J = ".%s"), mA === "data" && (J = "[data-%s]"), (mA == null ? void 0 : mA.startsWith("data-")) && !mA.includes("%s") && (J = `[${mA}="%s"]`), J.startsWith(".")) g.classList.remove(...AA.map((Z) => J.substring(1).replace("%s", Z))), g.classList.add(J.substring(1).replace("%s", V));
          else {
            const Z = J.replace("%s", V).match(/\[([^\]]+)\]/);
            if (Z) {
              const [fA, hA] = Z[1].split("=");
              hA || AA.forEach((CA) => {
                g.removeAttribute(fA.replace(V, CA));
              }), g.setAttribute(fA, hA ? hA.replace(/"|'/g, "") : "");
            } else g.setAttribute(J, V);
          }
        }
      }, [
        V,
        pA,
        g,
        AA
      ]), h.useEffect(() => {
        let mA;
        if (v && M.current && I) {
          const J = I.createElement("style");
          J.appendChild(I.createTextNode(vB)), I.head.appendChild(J), window.getComputedStyle(I.body), mA = setTimeout(() => {
            I.head.removeChild(J);
          }, 1);
        }
        return () => {
          clearTimeout(mA);
        };
      }, [
        V,
        v,
        I
      ]), h.useEffect(() => (M.current = true, () => {
        M.current = false;
      }), []);
      const BA = h.useMemo(() => ({
        allColorSchemes: AA,
        colorScheme: V,
        darkColorScheme: S,
        lightColorScheme: b,
        mode: W,
        setColorScheme: G,
        setMode: aA,
        systemMode: sA
      }), [
        AA,
        V,
        S,
        b,
        W,
        G,
        aA,
        sA,
        dA.colorSchemeSelector
      ]);
      let rA = true;
      (R || X.cssVariables === false || N && (O == null ? void 0 : O.cssVarPrefix) === z) && (rA = false);
      const VA = E.jsxs(h.Fragment, {
        children: [
          E.jsx(Md, {
            themeId: Y ? e : void 0,
            theme: dA,
            children: y
          }),
          rA && E.jsx(ud, {
            styles: ((_d2 = dA.generateStyleSheets) == null ? void 0 : _d2.call(dA)) || []
          })
        ]
      });
      return N ? VA : E.jsx(l.Provider, {
        value: BA,
        children: VA
      });
    }
    const p = typeof i == "string" ? i : i.light, B = typeof i == "string" ? i : i.dark;
    return {
      CssVarsProvider: f,
      useColorScheme: c,
      getInitColorSchemeScript: (m) => pB({
        colorSchemeStorageKey: n,
        defaultLightColorScheme: p,
        defaultDarkColorScheme: B,
        modeStorageKey: r,
        ...m
      })
    };
  }
  function CB(A = "") {
    function e(...r) {
      if (!r.length) return "";
      const n = r[0];
      return typeof n == "string" && !n.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${A ? `${A}-` : ""}${n}${e(...r.slice(1))})` : `, ${n}`;
    }
    return (r, ...n) => `var(--${A ? `${A}-` : ""}${r}${e(...n)})`;
  }
  const oc = (A, e, t, r = []) => {
    let n = A;
    e.forEach((o, i) => {
      i === e.length - 1 ? Array.isArray(n) ? n[Number(o)] = t : n && typeof n == "object" && (n[o] = t) : n && typeof n == "object" && (n[o] || (n[o] = r.includes(o) ? [] : {}), n = n[o]);
    });
  }, yB = (A, e, t) => {
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
  }, bB = (A, e) => typeof e == "number" ? [
    "lineHeight",
    "fontWeight",
    "opacity",
    "zIndex"
  ].some((r) => A.includes(r)) || A[A.length - 1].toLowerCase().includes("opacity") ? e : `${e}px` : e;
  function la(A, e) {
    const { prefix: t, shouldSkipGeneratingVar: r } = e || {}, n = {}, o = {}, i = {};
    return yB(A, (a, s, l) => {
      if ((typeof s == "string" || typeof s == "number") && (!r || !r(a, s))) {
        const c = `--${t ? `${t}-` : ""}${a.join("-")}`, u = bB(a, s);
        Object.assign(n, {
          [c]: u
        }), oc(o, a, `var(${c})`, l), oc(i, a, `var(${c}, ${u})`, l);
      }
    }, (a) => a[0] === "vars"), {
      css: n,
      vars: o,
      varsWithDefaults: i
    };
  }
  function QB(A, e = {}) {
    const { getSelector: t = Q, disableCssColorScheme: r, colorSchemeSelector: n } = e, { colorSchemes: o = {}, components: i, defaultColorScheme: a = "light", ...s } = A, { vars: l, css: c, varsWithDefaults: u } = la(s, e);
    let d = u;
    const f = {}, { [a]: p, ...B } = o;
    if (Object.entries(B || {}).forEach(([w, C]) => {
      const { vars: U, css: v, varsWithDefaults: x } = la(C, e);
      d = ie(d, x), f[w] = {
        css: v,
        vars: U
      };
    }), p) {
      const { css: w, vars: C, varsWithDefaults: U } = la(p, e);
      d = ie(d, U), f[a] = {
        css: w,
        vars: C
      };
    }
    function Q(w, C) {
      var _a2, _b2;
      let U = n;
      if (n === "class" && (U = ".%s"), n === "data" && (U = "[data-%s]"), (n == null ? void 0 : n.startsWith("data-")) && !n.includes("%s") && (U = `[${n}="%s"]`), w) {
        if (U === "media") return A.defaultColorScheme === w ? ":root" : {
          [`@media (prefers-color-scheme: ${((_b2 = (_a2 = o[w]) == null ? void 0 : _a2.palette) == null ? void 0 : _b2.mode) || w})`]: {
            ":root": C
          }
        };
        if (U) return A.defaultColorScheme === w ? `:root, ${U.replace("%s", String(w))}` : U.replace("%s", String(w));
      }
      return ":root";
    }
    return {
      vars: d,
      generateThemeVars: () => {
        let w = {
          ...l
        };
        return Object.entries(f).forEach(([, { vars: C }]) => {
          w = ie(w, C);
        }), w;
      },
      generateStyleSheets: () => {
        var _a2, _b2;
        const w = [], C = A.defaultColorScheme || "light";
        function U(H, I) {
          Object.keys(I).length && w.push(typeof H == "string" ? {
            [H]: {
              ...I
            }
          } : H);
        }
        U(t(void 0, {
          ...c
        }), c);
        const { [C]: v, ...x } = f;
        if (v) {
          const { css: H } = v, I = (_b2 = (_a2 = o[C]) == null ? void 0 : _a2.palette) == null ? void 0 : _b2.mode, g = !r && I ? {
            colorScheme: I,
            ...H
          } : {
            ...H
          };
          U(t(C, {
            ...g
          }), g);
        }
        return Object.entries(x).forEach(([H, { css: I }]) => {
          var _a3, _b3;
          const g = (_b3 = (_a3 = o[H]) == null ? void 0 : _a3.palette) == null ? void 0 : _b3.mode, k = !r && g ? {
            colorScheme: g,
            ...I
          } : {
            ...I
          };
          U(t(H, {
            ...k
          }), k);
        }), w;
      }
    };
  }
  function FB(A) {
    return function(t) {
      return A === "media" ? `@media (prefers-color-scheme: ${t})` : A ? A.startsWith("data-") && !A.includes("%s") ? `[${A}="${t}"] &` : A === "class" ? `.${t} &` : A === "data" ? `[data-${t}] &` : `${A.replace("%s", t)} &` : "&";
    };
  }
  function Dd() {
    return {
      text: {
        primary: "rgba(0, 0, 0, 0.87)",
        secondary: "rgba(0, 0, 0, 0.6)",
        disabled: "rgba(0, 0, 0, 0.38)"
      },
      divider: "rgba(0, 0, 0, 0.12)",
      background: {
        paper: ln.white,
        default: ln.white
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
  const UB = Dd();
  function Pd() {
    return {
      text: {
        primary: ln.white,
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
        active: ln.white,
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
  const ic = Pd();
  function ac(A, e, t, r) {
    const n = r.light || r, o = r.dark || r * 1.5;
    A[e] || (A.hasOwnProperty(t) ? A[e] = A[t] : e === "light" ? A.light = pn(A.main, n) : e === "dark" && (A.dark = fn(A.main, o)));
  }
  function SB(A = "light") {
    return A === "dark" ? {
      main: Zt[200],
      light: Zt[50],
      dark: Zt[400]
    } : {
      main: Zt[700],
      light: Zt[400],
      dark: Zt[800]
    };
  }
  function xB(A = "light") {
    return A === "dark" ? {
      main: Jt[200],
      light: Jt[50],
      dark: Jt[400]
    } : {
      main: Jt[500],
      light: Jt[300],
      dark: Jt[700]
    };
  }
  function EB(A = "light") {
    return A === "dark" ? {
      main: Yt[500],
      light: Yt[300],
      dark: Yt[700]
    } : {
      main: Yt[700],
      light: Yt[400],
      dark: Yt[800]
    };
  }
  function IB(A = "light") {
    return A === "dark" ? {
      main: qt[400],
      light: qt[300],
      dark: qt[700]
    } : {
      main: qt[700],
      light: qt[500],
      dark: qt[900]
    };
  }
  function HB(A = "light") {
    return A === "dark" ? {
      main: Ar[400],
      light: Ar[300],
      dark: Ar[700]
    } : {
      main: Ar[800],
      light: Ar[500],
      dark: Ar[900]
    };
  }
  function TB(A = "light") {
    return A === "dark" ? {
      main: Hr[400],
      light: Hr[300],
      dark: Hr[700]
    } : {
      main: "#ed6c02",
      light: Hr[500],
      dark: Hr[900]
    };
  }
  function al(A) {
    const { mode: e = "light", contrastThreshold: t = 3, tonalOffset: r = 0.2, ...n } = A, o = A.primary || SB(e), i = A.secondary || xB(e), a = A.error || EB(e), s = A.info || IB(e), l = A.success || HB(e), c = A.warning || TB(e);
    function u(B) {
      return Xh(B, ic.text.primary) >= t ? ic.text.primary : UB.text.primary;
    }
    const d = ({ color: B, name: Q, mainShade: m = 500, lightShade: y = 300, darkShade: w = 700 }) => {
      if (B = {
        ...B
      }, !B.main && B[m] && (B.main = B[m]), !B.hasOwnProperty("main")) throw new Error(gt(11, Q ? ` (${Q})` : "", m));
      if (typeof B.main != "string") throw new Error(gt(12, Q ? ` (${Q})` : "", JSON.stringify(B.main)));
      return ac(B, "light", y, r), ac(B, "dark", w, r), B.contrastText || (B.contrastText = u(B.main)), B;
    };
    let f;
    return e === "light" ? f = Dd() : e === "dark" && (f = Pd()), ie({
      common: {
        ...ln
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
      grey: Tp,
      contrastThreshold: t,
      getContrastText: u,
      augmentColor: d,
      tonalOffset: r,
      ...f
    }, n);
  }
  function kB(A) {
    const e = {};
    return Object.entries(A).forEach((r) => {
      const [n, o] = r;
      typeof o == "object" && (e[n] = `${o.fontStyle ? `${o.fontStyle} ` : ""}${o.fontVariant ? `${o.fontVariant} ` : ""}${o.fontWeight ? `${o.fontWeight} ` : ""}${o.fontStretch ? `${o.fontStretch} ` : ""}${o.fontSize || ""}${o.lineHeight ? `/${o.lineHeight} ` : ""}${o.fontFamily || ""}`);
    }), e;
  }
  function LB(A, e) {
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
  function RB(A) {
    return Math.round(A * 1e5) / 1e5;
  }
  const sc = {
    textTransform: "uppercase"
  }, lc = '"Roboto", "Helvetica", "Arial", sans-serif';
  function _d(A, e) {
    const { fontFamily: t = lc, fontSize: r = 14, fontWeightLight: n = 300, fontWeightRegular: o = 400, fontWeightMedium: i = 500, fontWeightBold: a = 700, htmlFontSize: s = 16, allVariants: l, pxToRem: c, ...u } = typeof e == "function" ? e(A) : e, d = r / 14, f = c || ((Q) => `${Q / s * d}rem`), p = (Q, m, y, w, C) => ({
      fontFamily: t,
      fontWeight: Q,
      fontSize: f(m),
      lineHeight: y,
      ...t === lc ? {
        letterSpacing: `${RB(w / m)}em`
      } : {},
      ...C,
      ...l
    }), B = {
      h1: p(n, 96, 1.167, -1.5),
      h2: p(n, 60, 1.2, -0.5),
      h3: p(o, 48, 1.167, 0),
      h4: p(o, 34, 1.235, 0.25),
      h5: p(o, 24, 1.334, 0),
      h6: p(i, 20, 1.6, 0.15),
      subtitle1: p(o, 16, 1.75, 0.15),
      subtitle2: p(i, 14, 1.57, 0.1),
      body1: p(o, 16, 1.5, 0.15),
      body2: p(o, 14, 1.43, 0.15),
      button: p(i, 14, 1.75, 0.4, sc),
      caption: p(o, 12, 1.66, 0.4),
      overline: p(o, 12, 2.66, 1, sc),
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit"
      }
    };
    return ie({
      htmlFontSize: s,
      pxToRem: f,
      fontFamily: t,
      fontSize: r,
      fontWeightLight: n,
      fontWeightRegular: o,
      fontWeightMedium: i,
      fontWeightBold: a,
      ...B
    }, u, {
      clone: false
    });
  }
  const OB = 0.2, MB = 0.14, KB = 0.12;
  function $A(...A) {
    return [
      `${A[0]}px ${A[1]}px ${A[2]}px ${A[3]}px rgba(0,0,0,${OB})`,
      `${A[4]}px ${A[5]}px ${A[6]}px ${A[7]}px rgba(0,0,0,${MB})`,
      `${A[8]}px ${A[9]}px ${A[10]}px ${A[11]}px rgba(0,0,0,${KB})`
    ].join(",");
  }
  const DB = [
    "none",
    $A(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    $A(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    $A(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    $A(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    $A(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    $A(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    $A(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    $A(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    $A(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    $A(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    $A(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    $A(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    $A(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    $A(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    $A(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    $A(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    $A(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    $A(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    $A(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    $A(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    $A(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    $A(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    $A(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    $A(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)
  ], PB = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
  }, _B = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195
  };
  function cc(A) {
    return `${Math.round(A)}ms`;
  }
  function NB(A) {
    if (!A) return 0;
    const e = A / 36;
    return Math.min(Math.round((4 + 15 * e ** 0.25 + e / 5) * 10), 3e3);
  }
  function GB(A) {
    const e = {
      ...PB,
      ...A.easing
    }, t = {
      ..._B,
      ...A.duration
    };
    return {
      getAutoHeightDuration: NB,
      create: (n = [
        "all"
      ], o = {}) => {
        const { duration: i = t.standard, easing: a = e.easeInOut, delay: s = 0, ...l } = o;
        return (Array.isArray(n) ? n : [
          n
        ]).map((c) => `${c} ${typeof i == "string" ? i : cc(i)} ${a} ${typeof s == "string" ? s : cc(s)}`).join(",");
      },
      ...A,
      easing: e,
      duration: t
    };
  }
  const VB = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
  };
  function $B(A) {
    return Je(A) || typeof A > "u" || typeof A == "string" || typeof A == "boolean" || typeof A == "number" || Array.isArray(A);
  }
  function Nd(A = {}) {
    const e = {
      ...A
    };
    function t(r) {
      const n = Object.entries(r);
      for (let o = 0; o < n.length; o++) {
        const [i, a] = n[o];
        !$B(a) || i.startsWith("unstable_") ? delete r[i] : Je(a) && (r[i] = {
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
  function Ya(A = {}, ...e) {
    const { breakpoints: t, mixins: r = {}, spacing: n, palette: o = {}, transitions: i = {}, typography: a = {}, shape: s, ...l } = A;
    if (A.vars && A.generateThemeVars === void 0) throw new Error(gt(20));
    const c = al(o), u = qs(A);
    let d = ie(u, {
      mixins: LB(u.breakpoints, r),
      palette: c,
      shadows: DB.slice(),
      typography: _d(c, a),
      transitions: GB(i),
      zIndex: {
        ...VB
      }
    });
    return d = ie(d, l), d = e.reduce((f, p) => ie(f, p), d), d.unstable_sxConfig = {
      ...Fn,
      ...l == null ? void 0 : l.unstable_sxConfig
    }, d.unstable_sx = function(p) {
      return Ht({
        sx: p,
        theme: this
      });
    }, d.toRuntimeSource = Nd, d;
  }
  function Ja(A) {
    let e;
    return A < 1 ? e = 5.11916 * A ** 2 : e = 4.5 * Math.log(A + 1) + 2, Math.round(e * 10) / 1e3;
  }
  const WB = [
    ...Array(25)
  ].map((A, e) => {
    if (e === 0) return "none";
    const t = Ja(e);
    return `linear-gradient(rgba(255 255 255 / ${t}), rgba(255 255 255 / ${t}))`;
  });
  function Gd(A) {
    return {
      inputPlaceholder: A === "dark" ? 0.5 : 0.42,
      inputUnderline: A === "dark" ? 0.7 : 0.42,
      switchTrackDisabled: A === "dark" ? 0.2 : 0.12,
      switchTrack: A === "dark" ? 0.3 : 0.38
    };
  }
  function Vd(A) {
    return A === "dark" ? WB : [];
  }
  function jB(A) {
    const { palette: e = {
      mode: "light"
    }, opacity: t, overlays: r, ...n } = A, o = al(e);
    return {
      palette: o,
      opacity: {
        ...Gd(o.mode),
        ...t
      },
      overlays: r || Vd(o.mode),
      ...n
    };
  }
  function zB(A) {
    var _a2;
    return !!A[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!A[0].match(/sxConfig$/) || A[0] === "palette" && !!((_a2 = A[1]) == null ? void 0 : _a2.match(/(mode|contrastThreshold|tonalOffset)/));
  }
  const XB = (A) => [
    ...[
      ...Array(25)
    ].map((e, t) => `--${A ? `${A}-` : ""}overlays-${t}`),
    `--${A ? `${A}-` : ""}palette-AppBar-darkBg`,
    `--${A ? `${A}-` : ""}palette-AppBar-darkColor`
  ], YB = (A) => (e, t) => {
    const r = A.rootSelector || ":root", n = A.colorSchemeSelector;
    let o = n;
    if (n === "class" && (o = ".%s"), n === "data" && (o = "[data-%s]"), (n == null ? void 0 : n.startsWith("data-")) && !n.includes("%s") && (o = `[${n}="%s"]`), A.defaultColorScheme === e) {
      if (e === "dark") {
        const i = {};
        return XB(A.cssVarPrefix).forEach((a) => {
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
  function JB(A, e) {
    e.forEach((t) => {
      A[t] || (A[t] = {});
    });
  }
  function _(A, e, t) {
    !A[e] && t && (A[e] = t);
  }
  function Nr(A) {
    return typeof A != "string" || !A.startsWith("hsl") ? A : Fd(A);
  }
  function lt(A, e) {
    `${e}Channel` in A || (A[`${e}Channel`] = _r(Nr(A[e])));
  }
  function ZB(A) {
    return typeof A == "number" ? `${A}px` : typeof A == "string" || typeof A == "function" || Array.isArray(A) ? A : "8px";
  }
  const Ve = (A) => {
    try {
      return A();
    } catch {
    }
  }, qB = (A = "mui") => CB(A);
  function ca(A, e, t, r) {
    if (!e) return;
    e = e === true ? {} : e;
    const n = r === "dark" ? "dark" : "light";
    if (!t) {
      A[r] = jB({
        ...e,
        palette: {
          mode: n,
          ...e == null ? void 0 : e.palette
        }
      });
      return;
    }
    const { palette: o, ...i } = Ya({
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
        ...Gd(n),
        ...e == null ? void 0 : e.opacity
      },
      overlays: (e == null ? void 0 : e.overlays) || Vd(n)
    }, i;
  }
  function A0(A = {}, ...e) {
    const { colorSchemes: t = {
      light: true
    }, defaultColorScheme: r, disableCssColorScheme: n = false, cssVarPrefix: o = "mui", shouldSkipGeneratingVar: i = zB, colorSchemeSelector: a = t.light && t.dark ? "media" : void 0, rootSelector: s = ":root", ...l } = A, c = Object.keys(t)[0], u = r || (t.light && c !== "light" ? "light" : c), d = qB(o), { [u]: f, light: p, dark: B, ...Q } = t, m = {
      ...Q
    };
    let y = f;
    if ((u === "dark" && !("dark" in t) || u === "light" && !("light" in t)) && (y = true), !y) throw new Error(gt(21, u));
    const w = ca(m, y, l, u);
    p && !m.light && ca(m, p, void 0, "light"), B && !m.dark && ca(m, B, void 0, "dark");
    let C = {
      defaultColorScheme: u,
      ...w,
      cssVarPrefix: o,
      colorSchemeSelector: a,
      rootSelector: s,
      getCssVar: d,
      colorSchemes: m,
      font: {
        ...kB(w.typography),
        ...w.font
      },
      spacing: ZB(l.spacing)
    };
    Object.keys(C.colorSchemes).forEach((I) => {
      const g = C.colorSchemes[I].palette, k = (R) => {
        const L = R.split("-"), K = L[1], M = L[2];
        return d(R, g[K][M]);
      };
      if (g.mode === "light" && (_(g.common, "background", "#fff"), _(g.common, "onBackground", "#000")), g.mode === "dark" && (_(g.common, "background", "#000"), _(g.common, "onBackground", "#fff")), JB(g, [
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
      ]), g.mode === "light") {
        _(g.Alert, "errorColor", kA(g.error.light, 0.6)), _(g.Alert, "infoColor", kA(g.info.light, 0.6)), _(g.Alert, "successColor", kA(g.success.light, 0.6)), _(g.Alert, "warningColor", kA(g.warning.light, 0.6)), _(g.Alert, "errorFilledBg", k("palette-error-main")), _(g.Alert, "infoFilledBg", k("palette-info-main")), _(g.Alert, "successFilledBg", k("palette-success-main")), _(g.Alert, "warningFilledBg", k("palette-warning-main")), _(g.Alert, "errorFilledColor", Ve(() => g.getContrastText(g.error.main))), _(g.Alert, "infoFilledColor", Ve(() => g.getContrastText(g.info.main))), _(g.Alert, "successFilledColor", Ve(() => g.getContrastText(g.success.main))), _(g.Alert, "warningFilledColor", Ve(() => g.getContrastText(g.warning.main))), _(g.Alert, "errorStandardBg", LA(g.error.light, 0.9)), _(g.Alert, "infoStandardBg", LA(g.info.light, 0.9)), _(g.Alert, "successStandardBg", LA(g.success.light, 0.9)), _(g.Alert, "warningStandardBg", LA(g.warning.light, 0.9)), _(g.Alert, "errorIconColor", k("palette-error-main")), _(g.Alert, "infoIconColor", k("palette-info-main")), _(g.Alert, "successIconColor", k("palette-success-main")), _(g.Alert, "warningIconColor", k("palette-warning-main")), _(g.AppBar, "defaultBg", k("palette-grey-100")), _(g.Avatar, "defaultBg", k("palette-grey-400")), _(g.Button, "inheritContainedBg", k("palette-grey-300")), _(g.Button, "inheritContainedHoverBg", k("palette-grey-A100")), _(g.Chip, "defaultBorder", k("palette-grey-400")), _(g.Chip, "defaultAvatarColor", k("palette-grey-700")), _(g.Chip, "defaultIconColor", k("palette-grey-700")), _(g.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), _(g.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), _(g.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), _(g.LinearProgress, "primaryBg", LA(g.primary.main, 0.62)), _(g.LinearProgress, "secondaryBg", LA(g.secondary.main, 0.62)), _(g.LinearProgress, "errorBg", LA(g.error.main, 0.62)), _(g.LinearProgress, "infoBg", LA(g.info.main, 0.62)), _(g.LinearProgress, "successBg", LA(g.success.main, 0.62)), _(g.LinearProgress, "warningBg", LA(g.warning.main, 0.62)), _(g.Skeleton, "bg", `rgba(${k("palette-text-primaryChannel")} / 0.11)`), _(g.Slider, "primaryTrack", LA(g.primary.main, 0.62)), _(g.Slider, "secondaryTrack", LA(g.secondary.main, 0.62)), _(g.Slider, "errorTrack", LA(g.error.main, 0.62)), _(g.Slider, "infoTrack", LA(g.info.main, 0.62)), _(g.Slider, "successTrack", LA(g.success.main, 0.62)), _(g.Slider, "warningTrack", LA(g.warning.main, 0.62));
        const R = On(g.background.default, 0.8);
        _(g.SnackbarContent, "bg", R), _(g.SnackbarContent, "color", Ve(() => g.getContrastText(R))), _(g.SpeedDialAction, "fabHoverBg", On(g.background.paper, 0.15)), _(g.StepConnector, "border", k("palette-grey-400")), _(g.StepContent, "border", k("palette-grey-400")), _(g.Switch, "defaultColor", k("palette-common-white")), _(g.Switch, "defaultDisabledColor", k("palette-grey-100")), _(g.Switch, "primaryDisabledColor", LA(g.primary.main, 0.62)), _(g.Switch, "secondaryDisabledColor", LA(g.secondary.main, 0.62)), _(g.Switch, "errorDisabledColor", LA(g.error.main, 0.62)), _(g.Switch, "infoDisabledColor", LA(g.info.main, 0.62)), _(g.Switch, "successDisabledColor", LA(g.success.main, 0.62)), _(g.Switch, "warningDisabledColor", LA(g.warning.main, 0.62)), _(g.TableCell, "border", LA(Rn(g.divider, 1), 0.88)), _(g.Tooltip, "bg", Rn(g.grey[700], 0.92));
      }
      if (g.mode === "dark") {
        _(g.Alert, "errorColor", LA(g.error.light, 0.6)), _(g.Alert, "infoColor", LA(g.info.light, 0.6)), _(g.Alert, "successColor", LA(g.success.light, 0.6)), _(g.Alert, "warningColor", LA(g.warning.light, 0.6)), _(g.Alert, "errorFilledBg", k("palette-error-dark")), _(g.Alert, "infoFilledBg", k("palette-info-dark")), _(g.Alert, "successFilledBg", k("palette-success-dark")), _(g.Alert, "warningFilledBg", k("palette-warning-dark")), _(g.Alert, "errorFilledColor", Ve(() => g.getContrastText(g.error.dark))), _(g.Alert, "infoFilledColor", Ve(() => g.getContrastText(g.info.dark))), _(g.Alert, "successFilledColor", Ve(() => g.getContrastText(g.success.dark))), _(g.Alert, "warningFilledColor", Ve(() => g.getContrastText(g.warning.dark))), _(g.Alert, "errorStandardBg", kA(g.error.light, 0.9)), _(g.Alert, "infoStandardBg", kA(g.info.light, 0.9)), _(g.Alert, "successStandardBg", kA(g.success.light, 0.9)), _(g.Alert, "warningStandardBg", kA(g.warning.light, 0.9)), _(g.Alert, "errorIconColor", k("palette-error-main")), _(g.Alert, "infoIconColor", k("palette-info-main")), _(g.Alert, "successIconColor", k("palette-success-main")), _(g.Alert, "warningIconColor", k("palette-warning-main")), _(g.AppBar, "defaultBg", k("palette-grey-900")), _(g.AppBar, "darkBg", k("palette-background-paper")), _(g.AppBar, "darkColor", k("palette-text-primary")), _(g.Avatar, "defaultBg", k("palette-grey-600")), _(g.Button, "inheritContainedBg", k("palette-grey-800")), _(g.Button, "inheritContainedHoverBg", k("palette-grey-700")), _(g.Chip, "defaultBorder", k("palette-grey-700")), _(g.Chip, "defaultAvatarColor", k("palette-grey-300")), _(g.Chip, "defaultIconColor", k("palette-grey-300")), _(g.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), _(g.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), _(g.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), _(g.LinearProgress, "primaryBg", kA(g.primary.main, 0.5)), _(g.LinearProgress, "secondaryBg", kA(g.secondary.main, 0.5)), _(g.LinearProgress, "errorBg", kA(g.error.main, 0.5)), _(g.LinearProgress, "infoBg", kA(g.info.main, 0.5)), _(g.LinearProgress, "successBg", kA(g.success.main, 0.5)), _(g.LinearProgress, "warningBg", kA(g.warning.main, 0.5)), _(g.Skeleton, "bg", `rgba(${k("palette-text-primaryChannel")} / 0.13)`), _(g.Slider, "primaryTrack", kA(g.primary.main, 0.5)), _(g.Slider, "secondaryTrack", kA(g.secondary.main, 0.5)), _(g.Slider, "errorTrack", kA(g.error.main, 0.5)), _(g.Slider, "infoTrack", kA(g.info.main, 0.5)), _(g.Slider, "successTrack", kA(g.success.main, 0.5)), _(g.Slider, "warningTrack", kA(g.warning.main, 0.5));
        const R = On(g.background.default, 0.98);
        _(g.SnackbarContent, "bg", R), _(g.SnackbarContent, "color", Ve(() => g.getContrastText(R))), _(g.SpeedDialAction, "fabHoverBg", On(g.background.paper, 0.15)), _(g.StepConnector, "border", k("palette-grey-600")), _(g.StepContent, "border", k("palette-grey-600")), _(g.Switch, "defaultColor", k("palette-grey-300")), _(g.Switch, "defaultDisabledColor", k("palette-grey-600")), _(g.Switch, "primaryDisabledColor", kA(g.primary.main, 0.55)), _(g.Switch, "secondaryDisabledColor", kA(g.secondary.main, 0.55)), _(g.Switch, "errorDisabledColor", kA(g.error.main, 0.55)), _(g.Switch, "infoDisabledColor", kA(g.info.main, 0.55)), _(g.Switch, "successDisabledColor", kA(g.success.main, 0.55)), _(g.Switch, "warningDisabledColor", kA(g.warning.main, 0.55)), _(g.TableCell, "border", kA(Rn(g.divider, 1), 0.68)), _(g.Tooltip, "bg", Rn(g.grey[700], 0.92));
      }
      lt(g.background, "default"), lt(g.background, "paper"), lt(g.common, "background"), lt(g.common, "onBackground"), lt(g, "divider"), Object.keys(g).forEach((R) => {
        const L = g[R];
        R !== "tonalOffset" && L && typeof L == "object" && (L.main && _(g[R], "mainChannel", _r(Nr(L.main))), L.light && _(g[R], "lightChannel", _r(Nr(L.light))), L.dark && _(g[R], "darkChannel", _r(Nr(L.dark))), L.contrastText && _(g[R], "contrastTextChannel", _r(Nr(L.contrastText))), R === "text" && (lt(g[R], "primary"), lt(g[R], "secondary")), R === "action" && (L.active && lt(g[R], "active"), L.selected && lt(g[R], "selected")));
      });
    }), C = e.reduce((I, g) => ie(I, g), C);
    const U = {
      prefix: o,
      disableCssColorScheme: n,
      shouldSkipGeneratingVar: i,
      getSelector: YB(C)
    }, { vars: v, generateThemeVars: x, generateStyleSheets: H } = QB(C, U);
    return C.vars = v, Object.entries(C.colorSchemes[C.defaultColorScheme]).forEach(([I, g]) => {
      C[I] = g;
    }), C.generateThemeVars = x, C.generateStyleSheets = H, C.generateSpacing = function() {
      return md(l.spacing, Js(this));
    }, C.getColorSchemeSelector = FB(a), C.spacing = C.generateSpacing(), C.shouldSkipGeneratingVar = i, C.unstable_sxConfig = {
      ...Fn,
      ...l == null ? void 0 : l.unstable_sxConfig
    }, C.unstable_sx = function(g) {
      return Ht({
        sx: g,
        theme: this
      });
    }, C.toRuntimeSource = Nd, C;
  }
  function uc(A, e, t) {
    A.colorSchemes && t && (A.colorSchemes[e] = {
      ...t !== true && t,
      palette: al({
        ...t === true ? {} : t.palette,
        mode: e
      })
    });
  }
  function Mi(A = {}, ...e) {
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
      if (!("colorSchemes" in A)) return Ya(A, ...e);
      let c = t;
      "palette" in A || l[a] && (l[a] !== true ? c = l[a].palette : a === "dark" && (c = {
        mode: "dark"
      }));
      const u = Ya({
        ...A,
        palette: c
      }, ...e);
      return u.defaultColorScheme = a, u.colorSchemes = l, u.palette.mode === "light" && (u.colorSchemes.light = {
        ...l.light !== true && l.light,
        palette: u.palette
      }, uc(u, "dark", l.dark)), u.palette.mode === "dark" && (u.colorSchemes.dark = {
        ...l.dark !== true && l.dark,
        palette: u.palette
      }, uc(u, "light", l.light)), u;
    }
    return !t && !("light" in l) && a === "light" && (l.light = true), A0({
      ...i,
      colorSchemes: l,
      defaultColorScheme: a,
      ...typeof r != "boolean" && r
    }, ...e);
  }
  const sl = Mi();
  ll = function() {
    const A = el(sl);
    return A[qe] || A;
  };
  function Ki(A) {
    return A !== "ownerState" && A !== "theme" && A !== "sx" && A !== "as";
  }
  rt = (A) => Ki(A) && A !== "classes";
  uA = Nh({
    themeId: qe,
    defaultTheme: sl,
    rootShouldForwardProp: rt
  });
  function e0({ theme: A, ...e }) {
    const t = qe in A ? A[qe] : void 0;
    return E.jsx(Md, {
      ...e,
      themeId: t ? qe : void 0,
      theme: t || A
    });
  }
  const Mn = {
    colorSchemeStorageKey: "mui-color-scheme",
    defaultLightColorScheme: "light",
    defaultDarkColorScheme: "dark",
    modeStorageKey: "mui-mode"
  }, { CssVarsProvider: t0 } = wB({
    themeId: qe,
    theme: () => Mi({
      cssVariables: true
    }),
    colorSchemeStorageKey: Mn.colorSchemeStorageKey,
    modeStorageKey: Mn.modeStorageKey,
    defaultColorScheme: {
      light: Mn.defaultLightColorScheme,
      dark: Mn.defaultDarkColorScheme
    },
    resolveTheme: (A) => {
      const e = {
        ...A,
        typography: _d(A.palette, A.typography)
      };
      return e.unstable_sx = function(r) {
        return Ht({
          sx: r,
          theme: this
        });
      }, e;
    }
  }), r0 = t0;
  function $d({ theme: A, ...e }) {
    const t = h.useMemo(() => {
      if (typeof A == "function") return A;
      const r = qe in A ? A[qe] : A;
      return "colorSchemes" in r ? null : "vars" in r ? A : {
        ...A,
        vars: null
      };
    }, [
      A
    ]);
    return t ? E.jsx(e0, {
      theme: t,
      ...e
    }) : E.jsx(r0, {
      theme: A,
      ...e
    });
  }
  function n0(A) {
    return E.jsx(vd, {
      ...A,
      defaultTheme: sl,
      themeId: qe
    });
  }
  function cl(A) {
    return function(t) {
      return E.jsx(n0, {
        styles: typeof A == "function" ? (r) => A({
          theme: r,
          ...t
        }) : A
      });
    };
  }
  function o0() {
    return wd;
  }
  EA = dB;
  GA = function(A) {
    return cB(A);
  };
  function i0(A) {
    return _A("MuiSvgIcon", A);
  }
  KA("MuiSvgIcon", [
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
  let a0, s0;
  a0 = (A) => {
    const { color: e, fontSize: t, classes: r } = A, n = {
      root: [
        "root",
        e !== "inherit" && `color${yA(e)}`,
        `fontSize${yA(t)}`
      ]
    };
    return NA(n, i0, r);
  };
  s0 = uA("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.root,
        t.color !== "inherit" && e[`color${yA(t.color)}`],
        e[`fontSize${yA(t.fontSize)}`]
      ];
    }
  })(EA(({ theme: A }) => {
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
  Za = h.forwardRef(function(e, t) {
    const r = GA({
      props: e,
      name: "MuiSvgIcon"
    }), { children: n, className: o, color: i = "inherit", component: a = "svg", fontSize: s = "medium", htmlColor: l, inheritViewBox: c = false, titleAccess: u, viewBox: d = "0 0 24 24", ...f } = r, p = h.isValidElement(n) && n.type === "svg", B = {
      ...r,
      color: i,
      component: a,
      fontSize: s,
      instanceFontSize: e.fontSize,
      inheritViewBox: c,
      viewBox: d,
      hasSvgAsChild: p
    }, Q = {};
    c || (Q.viewBox = d);
    const m = a0(B);
    return E.jsxs(s0, {
      as: a,
      className: wA(m.root, o),
      focusable: "false",
      color: l,
      "aria-hidden": u ? void 0 : true,
      role: u ? "img" : void 0,
      ref: t,
      ...Q,
      ...f,
      ...p && n.props,
      ownerState: B,
      children: [
        p ? n.props.children : n,
        u ? E.jsx("title", {
          children: u
        }) : null
      ]
    });
  });
  Za.muiName = "SvgIcon";
  Wd = function(A, e) {
    function t(r, n) {
      return E.jsx(Za, {
        "data-testid": `${e}Icon`,
        ref: n,
        ...r,
        children: A
      });
    }
    return t.muiName = Za.muiName, h.memo(h.forwardRef(t));
  };
  l0 = function(A, e) {
    if (!A) return e;
    if (typeof A == "function" || typeof e == "function") return (n) => {
      const o = typeof e == "function" ? e(n) : e, i = typeof A == "function" ? A({
        ...n,
        ...o
      }) : A, a = wA(n == null ? void 0 : n.className, o == null ? void 0 : o.className, i == null ? void 0 : i.className);
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
    const t = e, r = wA(t == null ? void 0 : t.className, A == null ? void 0 : A.className);
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
  function jd(A, e) {
    if (A == null) return {};
    var t = {};
    for (var r in A) if ({}.hasOwnProperty.call(A, r)) {
      if (e.indexOf(r) !== -1) continue;
      t[r] = A[r];
    }
    return t;
  }
  function qa(A, e) {
    return qa = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, r) {
      return t.__proto__ = r, t;
    }, qa(A, e);
  }
  function zd(A, e) {
    A.prototype = Object.create(e.prototype), A.prototype.constructor = A, qa(A, e);
  }
  const { initPromise: c0 } = Fp, u0 = c0.then((A) => A.loadShare("react-dom", {
    customShareInfo: {
      shareConfig: {
        singleton: true,
        strictVersion: false,
        requiredVersion: "*"
      }
    }
  })), d0 = await u0.then((A) => A());
  var ul = d0;
  const Kn = Rs(ul), dc = {
    disabled: false
  }, Lo = T.createContext(null);
  var f0 = function(e) {
    return e.scrollTop;
  }, Gr = "unmounted", Kt = "exited", Dt = "entering", ur = "entered", As = "exiting", nt = (function(A) {
    zd(e, A);
    function e(r, n) {
      var o;
      o = A.call(this, r, n) || this;
      var i = n, a = i && !i.isMounting ? r.enter : r.appear, s;
      return o.appearStatus = null, r.in ? a ? (s = Kt, o.appearStatus = Dt) : s = ur : r.unmountOnExit || r.mountOnEnter ? s = Gr : s = Kt, o.state = {
        status: s
      }, o.nextCallback = null, o;
    }
    e.getDerivedStateFromProps = function(n, o) {
      var i = n.in;
      return i && o.status === Gr ? {
        status: Kt
      } : null;
    };
    var t = e.prototype;
    return t.componentDidMount = function() {
      this.updateStatus(true, this.appearStatus);
    }, t.componentDidUpdate = function(n) {
      var o = null;
      if (n !== this.props) {
        var i = this.state.status;
        this.props.in ? i !== Dt && i !== ur && (o = Dt) : (i === Dt || i === ur) && (o = As);
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
      if (n === void 0 && (n = false), o !== null) if (this.cancelNextCallback(), o === Dt) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var i = this.props.nodeRef ? this.props.nodeRef.current : Kn.findDOMNode(this);
          i && f0(i);
        }
        this.performEnter(n);
      } else this.performExit();
      else this.props.unmountOnExit && this.state.status === Kt && this.setState({
        status: Gr
      });
    }, t.performEnter = function(n) {
      var o = this, i = this.props.enter, a = this.context ? this.context.isMounting : n, s = this.props.nodeRef ? [
        a
      ] : [
        Kn.findDOMNode(this),
        a
      ], l = s[0], c = s[1], u = this.getTimeouts(), d = a ? u.appear : u.enter;
      if (!n && !i || dc.disabled) {
        this.safeSetState({
          status: ur
        }, function() {
          o.props.onEntered(l);
        });
        return;
      }
      this.props.onEnter(l, c), this.safeSetState({
        status: Dt
      }, function() {
        o.props.onEntering(l, c), o.onTransitionEnd(d, function() {
          o.safeSetState({
            status: ur
          }, function() {
            o.props.onEntered(l, c);
          });
        });
      });
    }, t.performExit = function() {
      var n = this, o = this.props.exit, i = this.getTimeouts(), a = this.props.nodeRef ? void 0 : Kn.findDOMNode(this);
      if (!o || dc.disabled) {
        this.safeSetState({
          status: Kt
        }, function() {
          n.props.onExited(a);
        });
        return;
      }
      this.props.onExit(a), this.safeSetState({
        status: As
      }, function() {
        n.props.onExiting(a), n.onTransitionEnd(i.exit, function() {
          n.safeSetState({
            status: Kt
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
      var i = this.props.nodeRef ? this.props.nodeRef.current : Kn.findDOMNode(this), a = n == null && !this.props.addEndListener;
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
      if (n === Gr) return null;
      var o = this.props, i = o.children;
      o.in, o.mountOnEnter, o.unmountOnExit, o.appear, o.enter, o.exit, o.timeout, o.addEndListener, o.onEnter, o.onEntering, o.onEntered, o.onExit, o.onExiting, o.onExited, o.nodeRef;
      var a = jd(o, [
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
      return T.createElement(Lo.Provider, {
        value: null
      }, typeof i == "function" ? i(n, a) : T.cloneElement(T.Children.only(i), a));
    }, e;
  })(T.Component);
  nt.contextType = Lo;
  nt.propTypes = {};
  function er() {
  }
  nt.defaultProps = {
    in: false,
    mountOnEnter: false,
    unmountOnExit: false,
    appear: false,
    enter: true,
    exit: true,
    onEnter: er,
    onEntering: er,
    onEntered: er,
    onExit: er,
    onExiting: er,
    onExited: er
  };
  nt.UNMOUNTED = Gr;
  nt.EXITED = Kt;
  nt.ENTERING = Dt;
  nt.ENTERED = ur;
  nt.EXITING = As;
  function p0(A) {
    if (A === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return A;
  }
  function dl(A, e) {
    var t = function(o) {
      return e && h.isValidElement(o) ? e(o) : o;
    }, r = /* @__PURE__ */ Object.create(null);
    return A && h.Children.map(A, function(n) {
      return n;
    }).forEach(function(n) {
      r[n.key] = t(n);
    }), r;
  }
  function g0(A, e) {
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
  function $t(A, e, t) {
    return t[e] != null ? t[e] : A.props[e];
  }
  function h0(A, e) {
    return dl(A.children, function(t) {
      return h.cloneElement(t, {
        onExited: e.bind(null, t),
        in: true,
        appear: $t(t, "appear", A),
        enter: $t(t, "enter", A),
        exit: $t(t, "exit", A)
      });
    });
  }
  function B0(A, e, t) {
    var r = dl(A.children), n = g0(e, r);
    return Object.keys(n).forEach(function(o) {
      var i = n[o];
      if (h.isValidElement(i)) {
        var a = o in e, s = o in r, l = e[o], c = h.isValidElement(l) && !l.props.in;
        s && (!a || c) ? n[o] = h.cloneElement(i, {
          onExited: t.bind(null, i),
          in: true,
          exit: $t(i, "exit", A),
          enter: $t(i, "enter", A)
        }) : !s && a && !c ? n[o] = h.cloneElement(i, {
          in: false
        }) : s && a && h.isValidElement(l) && (n[o] = h.cloneElement(i, {
          onExited: t.bind(null, i),
          in: l.props.in,
          exit: $t(i, "exit", A),
          enter: $t(i, "enter", A)
        }));
      }
    }), n;
  }
  var m0 = Object.values || function(A) {
    return Object.keys(A).map(function(e) {
      return A[e];
    });
  }, v0 = {
    component: "div",
    childFactory: function(e) {
      return e;
    }
  }, fl = (function(A) {
    zd(e, A);
    function e(r, n) {
      var o;
      o = A.call(this, r, n) || this;
      var i = o.handleExited.bind(p0(o));
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
        children: s ? h0(n, a) : B0(n, i, a),
        firstRender: false
      };
    }, t.handleExited = function(n, o) {
      var i = dl(this.props.children);
      n.key in i || (n.props.onExited && n.props.onExited(o), this.mounted && this.setState(function(a) {
        var s = Io({}, a.children);
        return delete s[n.key], {
          children: s
        };
      }));
    }, t.render = function() {
      var n = this.props, o = n.component, i = n.childFactory, a = jd(n, [
        "component",
        "childFactory"
      ]), s = this.state.contextValue, l = m0(this.state.children).map(i);
      return delete a.appear, delete a.enter, delete a.exit, o === null ? T.createElement(Lo.Provider, {
        value: s
      }, l) : T.createElement(Lo.Provider, {
        value: s
      }, T.createElement(o, a, l));
    }, e;
  })(T.Component);
  fl.propTypes = {};
  fl.defaultProps = v0;
  const Xd = (A) => A.scrollTop;
  function Ro(A, e) {
    const { timeout: t, easing: r, style: n = {} } = A;
    return {
      duration: n.transitionDuration ?? (typeof t == "number" ? t : t[e.mode] || 0),
      easing: n.transitionTimingFunction ?? (typeof r == "object" ? r[e.mode] : r),
      delay: n.transitionDelay
    };
  }
  function w0(A) {
    return _A("MuiPaper", A);
  }
  KA("MuiPaper", [
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
  let C0, y0;
  C0 = (A) => {
    const { square: e, elevation: t, variant: r, classes: n } = A, o = {
      root: [
        "root",
        r,
        !e && "rounded",
        r === "elevation" && `elevation${t}`
      ]
    };
    return NA(o, w0, n);
  };
  y0 = uA("div", {
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
  })(EA(({ theme: A }) => ({
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
  es = h.forwardRef(function(e, t) {
    var _a2;
    const r = GA({
      props: e,
      name: "MuiPaper"
    }), n = ll(), { className: o, component: i = "div", elevation: a = 1, square: s = false, variant: l = "elevation", ...c } = r, u = {
      ...r,
      component: i,
      elevation: a,
      square: s,
      variant: l
    }, d = C0(u);
    return E.jsx(y0, {
      as: i,
      ownerState: u,
      className: wA(d.root, o),
      ref: t,
      ...c,
      style: {
        ...l === "elevation" && {
          "--Paper-shadow": (n.vars || n).shadows[a],
          ...n.vars && {
            "--Paper-overlay": (_a2 = n.vars.overlays) == null ? void 0 : _a2[a]
          },
          ...!n.vars && n.palette.mode === "dark" && {
            "--Paper-overlay": `linear-gradient(${kt("#fff", Ja(a))}, ${kt("#fff", Ja(a))})`
          }
        },
        ...c.style
      }
    });
  });
  me = function(A, e) {
    const { className: t, elementType: r, ownerState: n, externalForwardedProps: o, internalForwardedProps: i, shouldForwardComponentProp: a = false, ...s } = e, { component: l, slots: c = {
      [A]: void 0
    }, slotProps: u = {
      [A]: void 0
    }, ...d } = o, f = c[A] || r, p = Td(u[A], n), { props: { component: B, ...Q }, internalRef: m } = Hd({
      className: t,
      ...s,
      externalForwardedProps: A === "root" ? d : void 0,
      externalSlotProps: p
    }), y = ye(m, p == null ? void 0 : p.ref, e.ref), w = A === "root" ? B || l : B, C = Id(f, {
      ...A === "root" && !l && !c[A] && i,
      ...A !== "root" && !c[A] && i,
      ...Q,
      ...w && !a && {
        as: w
      },
      ...w && a && {
        component: w
      },
      ref: y
    }, n);
    return [
      f,
      C
    ];
  };
  class Oo {
    static create() {
      return new Oo();
    }
    static use() {
      const e = Sd(Oo.create).current, [t, r] = h.useState(false);
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
      return this.mounted || (this.mounted = Q0(), this.shouldMount = true, this.setShouldMount(this.shouldMount)), this.mounted;
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
  function b0() {
    return Oo.use();
  }
  function Q0() {
    let A, e;
    const t = new Promise((r, n) => {
      A = r, e = n;
    });
    return t.resolve = A, t.reject = e, t;
  }
  function F0(A) {
    const { className: e, classes: t, pulsate: r = false, rippleX: n, rippleY: o, rippleSize: i, in: a, onExited: s, timeout: l } = A, [c, u] = h.useState(false), d = wA(e, t.ripple, t.rippleVisible, r && t.ripplePulsate), f = {
      width: i,
      height: i,
      top: -(i / 2) + o,
      left: -(i / 2) + n
    }, p = wA(t.child, c && t.childLeaving, r && t.childPulsate);
    return !a && !c && u(true), h.useEffect(() => {
      if (!a && s != null) {
        const B = setTimeout(s, l);
        return () => {
          clearTimeout(B);
        };
      }
    }, [
      s,
      a,
      l
    ]), E.jsx("span", {
      className: d,
      style: f,
      children: E.jsx("span", {
        className: p
      })
    });
  }
  const He = KA("MuiTouchRipple", [
    "root",
    "ripple",
    "rippleVisible",
    "ripplePulsate",
    "child",
    "childLeaving",
    "childPulsate"
  ]), ts = 550, U0 = 80, S0 = yn`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, x0 = yn`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, E0 = yn`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, I0 = uA("span", {
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
  }), H0 = uA(F0, {
    name: "MuiTouchRipple",
    slot: "Ripple"
  })`
  opacity: 0;
  position: absolute;

  &.${He.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${S0};
    animation-duration: ${ts}ms;
    animation-timing-function: ${({ theme: A }) => A.transitions.easing.easeInOut};
  }

  &.${He.ripplePulsate} {
    animation-duration: ${({ theme: A }) => A.transitions.duration.shorter}ms;
  }

  & .${He.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${He.childLeaving} {
    opacity: 0;
    animation-name: ${x0};
    animation-duration: ${ts}ms;
    animation-timing-function: ${({ theme: A }) => A.transitions.easing.easeInOut};
  }

  & .${He.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${E0};
    animation-duration: 2500ms;
    animation-timing-function: ${({ theme: A }) => A.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, T0 = h.forwardRef(function(e, t) {
    const r = GA({
      props: e,
      name: "MuiTouchRipple"
    }), { center: n = false, classes: o = {}, className: i, ...a } = r, [s, l] = h.useState([]), c = h.useRef(0), u = h.useRef(null);
    h.useEffect(() => {
      u.current && (u.current(), u.current = null);
    }, [
      s
    ]);
    const d = h.useRef(false), f = xd(), p = h.useRef(null), B = h.useRef(null), Q = h.useCallback((C) => {
      const { pulsate: U, rippleX: v, rippleY: x, rippleSize: H, cb: I } = C;
      l((g) => [
        ...g,
        E.jsx(H0, {
          classes: {
            ripple: wA(o.ripple, He.ripple),
            rippleVisible: wA(o.rippleVisible, He.rippleVisible),
            ripplePulsate: wA(o.ripplePulsate, He.ripplePulsate),
            child: wA(o.child, He.child),
            childLeaving: wA(o.childLeaving, He.childLeaving),
            childPulsate: wA(o.childPulsate, He.childPulsate)
          },
          timeout: ts,
          pulsate: U,
          rippleX: v,
          rippleY: x,
          rippleSize: H
        }, c.current)
      ]), c.current += 1, u.current = I;
    }, [
      o
    ]), m = h.useCallback((C = {}, U = {}, v = () => {
    }) => {
      const { pulsate: x = false, center: H = n || U.pulsate, fakeElement: I = false } = U;
      if ((C == null ? void 0 : C.type) === "mousedown" && d.current) {
        d.current = false;
        return;
      }
      (C == null ? void 0 : C.type) === "touchstart" && (d.current = true);
      const g = I ? null : B.current, k = g ? g.getBoundingClientRect() : {
        width: 0,
        height: 0,
        left: 0,
        top: 0
      };
      let R, L, K;
      if (H || C === void 0 || C.clientX === 0 && C.clientY === 0 || !C.clientX && !C.touches) R = Math.round(k.width / 2), L = Math.round(k.height / 2);
      else {
        const { clientX: M, clientY: O } = C.touches && C.touches.length > 0 ? C.touches[0] : C;
        R = Math.round(M - k.left), L = Math.round(O - k.top);
      }
      if (H) K = Math.sqrt((2 * k.width ** 2 + k.height ** 2) / 3), K % 2 === 0 && (K += 1);
      else {
        const M = Math.max(Math.abs((g ? g.clientWidth : 0) - R), R) * 2 + 2, O = Math.max(Math.abs((g ? g.clientHeight : 0) - L), L) * 2 + 2;
        K = Math.sqrt(M ** 2 + O ** 2);
      }
      (C == null ? void 0 : C.touches) ? p.current === null && (p.current = () => {
        Q({
          pulsate: x,
          rippleX: R,
          rippleY: L,
          rippleSize: K,
          cb: v
        });
      }, f.start(U0, () => {
        p.current && (p.current(), p.current = null);
      })) : Q({
        pulsate: x,
        rippleX: R,
        rippleY: L,
        rippleSize: K,
        cb: v
      });
    }, [
      n,
      Q,
      f
    ]), y = h.useCallback(() => {
      m({}, {
        pulsate: true
      });
    }, [
      m
    ]), w = h.useCallback((C, U) => {
      if (f.clear(), (C == null ? void 0 : C.type) === "touchend" && p.current) {
        p.current(), p.current = null, f.start(0, () => {
          w(C, U);
        });
        return;
      }
      p.current = null, l((v) => v.length > 0 ? v.slice(1) : v), u.current = U;
    }, [
      f
    ]);
    return h.useImperativeHandle(t, () => ({
      pulsate: y,
      start: m,
      stop: w
    }), [
      y,
      m,
      w
    ]), E.jsx(I0, {
      className: wA(He.root, o.root, i),
      ref: B,
      ...a,
      children: E.jsx(fl, {
        component: null,
        exit: true,
        children: s
      })
    });
  });
  function k0(A) {
    return _A("MuiButtonBase", A);
  }
  let L0, R0, O0;
  L0 = KA("MuiButtonBase", [
    "root",
    "disabled",
    "focusVisible"
  ]);
  R0 = (A) => {
    const { disabled: e, focusVisible: t, focusVisibleClassName: r, classes: n } = A, i = NA({
      root: [
        "root",
        e && "disabled",
        t && "focusVisible"
      ]
    }, k0, n);
    return t && r && (i.root += ` ${r}`), i;
  };
  O0 = uA("button", {
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
    [`&.${L0.disabled}`]: {
      pointerEvents: "none",
      cursor: "default"
    },
    "@media print": {
      colorAdjust: "exact"
    }
  });
  M0 = h.forwardRef(function(e, t) {
    const r = GA({
      props: e,
      name: "MuiButtonBase"
    }), { action: n, centerRipple: o = false, children: i, className: a, component: s = "button", disabled: l = false, disableRipple: c = false, disableTouchRipple: u = false, focusRipple: d = false, focusVisibleClassName: f, LinkComponent: p = "a", onBlur: B, onClick: Q, onContextMenu: m, onDragLeave: y, onFocus: w, onFocusVisible: C, onKeyDown: U, onKeyUp: v, onMouseDown: x, onMouseLeave: H, onMouseUp: I, onTouchEnd: g, onTouchMove: k, onTouchStart: R, tabIndex: L = 0, TouchRippleProps: K, touchRippleRef: M, type: O, ...j } = r, N = h.useRef(null), D = b0(), Y = ye(D.ref, M), [X, oA] = h.useState(false);
    l && X && oA(false), h.useImperativeHandle(n, () => ({
      focusVisible: () => {
        oA(true), N.current.focus();
      }
    }), []);
    const P = D.shouldMount && !c && !l;
    h.useEffect(() => {
      X && d && !c && D.pulsate();
    }, [
      c,
      d,
      X,
      D
    ]);
    const z = ct(D, "start", x, u), $ = ct(D, "stop", m, u), AA = ct(D, "stop", y, u), gA = ct(D, "stop", I, u), cA = ct(D, "stop", (rA) => {
      X && rA.preventDefault(), H && H(rA);
    }, u), tA = ct(D, "start", R, u), q = ct(D, "stop", g, u), aA = ct(D, "stop", k, u), sA = ct(D, "stop", (rA) => {
      ko(rA.target) || oA(false), B && B(rA);
    }, false), b = et((rA) => {
      N.current || (N.current = rA.currentTarget), ko(rA.target) && (oA(true), C && C(rA)), w && w(rA);
    }), S = () => {
      const rA = N.current;
      return s && s !== "button" && !(rA.tagName === "A" && rA.href);
    }, F = et((rA) => {
      d && !rA.repeat && X && rA.key === " " && D.stop(rA, () => {
        D.start(rA);
      }), rA.target === rA.currentTarget && S() && rA.key === " " && rA.preventDefault(), U && U(rA), rA.target === rA.currentTarget && S() && rA.key === "Enter" && !l && (rA.preventDefault(), Q && Q(rA));
    }), G = et((rA) => {
      d && rA.key === " " && X && !rA.defaultPrevented && D.stop(rA, () => {
        D.pulsate(rA);
      }), v && v(rA), Q && rA.target === rA.currentTarget && S() && rA.key === " " && !rA.defaultPrevented && Q(rA);
    });
    let W = s;
    W === "button" && (j.href || j.to) && (W = p);
    const V = {};
    W === "button" ? (V.type = O === void 0 ? "button" : O, V.disabled = l) : (!j.href && !j.to && (V.role = "button"), l && (V["aria-disabled"] = l));
    const dA = ye(t, N), pA = {
      ...r,
      centerRipple: o,
      component: s,
      disabled: l,
      disableRipple: c,
      disableTouchRipple: u,
      focusRipple: d,
      tabIndex: L,
      focusVisible: X
    }, BA = R0(pA);
    return E.jsxs(O0, {
      as: W,
      className: wA(BA.root, a),
      ownerState: pA,
      onBlur: sA,
      onClick: Q,
      onContextMenu: $,
      onFocus: b,
      onKeyDown: F,
      onKeyUp: G,
      onMouseDown: z,
      onMouseLeave: cA,
      onMouseUp: gA,
      onDragLeave: AA,
      onTouchEnd: q,
      onTouchMove: aA,
      onTouchStart: tA,
      ref: dA,
      tabIndex: l ? -1 : L,
      type: O,
      ...V,
      ...j,
      children: [
        i,
        P ? E.jsx(T0, {
          ref: Y,
          center: o,
          ...K
        }) : null
      ]
    });
  });
  function ct(A, e, t, r = false) {
    return et((n) => (t && t(n), r || A[e](n), true));
  }
  function K0(A) {
    return typeof A.main == "string";
  }
  function D0(A, e = []) {
    if (!K0(A)) return false;
    for (const t of e) if (!A.hasOwnProperty(t) || typeof A[t] != "string") return false;
    return true;
  }
  _e = function(A = []) {
    return ([, e]) => e && D0(e, A);
  };
  function P0(A) {
    return _A("MuiCircularProgress", A);
  }
  KA("MuiCircularProgress", [
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
  let wt, rs, ns, _0, N0, G0, V0, $0, W0;
  wt = 44;
  rs = yn`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;
  ns = yn`
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
  _0 = typeof rs != "string" ? Ws`
        animation: ${rs} 1.4s linear infinite;
      ` : null;
  N0 = typeof ns != "string" ? Ws`
        animation: ${ns} 1.4s ease-in-out infinite;
      ` : null;
  G0 = (A) => {
    const { classes: e, variant: t, color: r, disableShrink: n } = A, o = {
      root: [
        "root",
        t,
        `color${yA(r)}`
      ],
      svg: [
        "svg"
      ],
      circle: [
        "circle",
        `circle${yA(t)}`,
        n && "circleDisableShrink"
      ]
    };
    return NA(o, P0, e);
  };
  V0 = uA("span", {
    name: "MuiCircularProgress",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.root,
        e[t.variant],
        e[`color${yA(t.color)}`]
      ];
    }
  })(EA(({ theme: A }) => ({
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
        style: _0 || {
          animation: `${rs} 1.4s linear infinite`
        }
      },
      ...Object.entries(A.palette).filter(_e()).map(([e]) => ({
        props: {
          color: e
        },
        style: {
          color: (A.vars || A).palette[e].main
        }
      }))
    ]
  })));
  $0 = uA("svg", {
    name: "MuiCircularProgress",
    slot: "Svg",
    overridesResolver: (A, e) => e.svg
  })({
    display: "block"
  });
  W0 = uA("circle", {
    name: "MuiCircularProgress",
    slot: "Circle",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.circle,
        e[`circle${yA(t.variant)}`],
        t.disableShrink && e.circleDisableShrink
      ];
    }
  })(EA(({ theme: A }) => ({
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
        style: N0 || {
          animation: `${ns} 1.4s ease-in-out infinite`
        }
      }
    ]
  })));
  j0 = h.forwardRef(function(e, t) {
    const r = GA({
      props: e,
      name: "MuiCircularProgress"
    }), { className: n, color: o = "primary", disableShrink: i = false, size: a = 40, style: s, thickness: l = 3.6, value: c = 0, variant: u = "indeterminate", ...d } = r, f = {
      ...r,
      color: o,
      disableShrink: i,
      size: a,
      thickness: l,
      value: c,
      variant: u
    }, p = G0(f), B = {}, Q = {}, m = {};
    if (u === "determinate") {
      const y = 2 * Math.PI * ((wt - l) / 2);
      B.strokeDasharray = y.toFixed(3), m["aria-valuenow"] = Math.round(c), B.strokeDashoffset = `${((100 - c) / 100 * y).toFixed(3)}px`, Q.transform = "rotate(-90deg)";
    }
    return E.jsx(V0, {
      className: wA(p.root, n),
      style: {
        width: a,
        height: a,
        ...Q,
        ...s
      },
      ownerState: f,
      ref: t,
      role: "progressbar",
      ...m,
      ...d,
      children: E.jsx($0, {
        className: p.svg,
        ownerState: f,
        viewBox: `${wt / 2} ${wt / 2} ${wt} ${wt}`,
        children: E.jsx(W0, {
          className: p.circle,
          style: B,
          ownerState: f,
          cx: wt,
          cy: wt,
          r: (wt - l) / 2,
          fill: "none",
          strokeWidth: l
        })
      })
    });
  });
  function z0(A) {
    return _A("MuiIconButton", A);
  }
  let fc, X0, Y0, J0;
  fc = KA("MuiIconButton", [
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
  X0 = (A) => {
    const { classes: e, disabled: t, color: r, edge: n, size: o, loading: i } = A, a = {
      root: [
        "root",
        i && "loading",
        t && "disabled",
        r !== "default" && `color${yA(r)}`,
        n && `edge${yA(n)}`,
        `size${yA(o)}`
      ],
      loadingIndicator: [
        "loadingIndicator"
      ],
      loadingWrapper: [
        "loadingWrapper"
      ]
    };
    return NA(a, z0, e);
  };
  Y0 = uA(M0, {
    name: "MuiIconButton",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.root,
        t.loading && e.loading,
        t.color !== "default" && e[`color${yA(t.color)}`],
        t.edge && e[`edge${yA(t.edge)}`],
        e[`size${yA(t.size)}`]
      ];
    }
  })(EA(({ theme: A }) => ({
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
          "--IconButton-hoverBg": A.vars ? `rgba(${A.vars.palette.action.activeChannel} / ${A.vars.palette.action.hoverOpacity})` : kt(A.palette.action.active, A.palette.action.hoverOpacity),
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
  })), EA(({ theme: A }) => ({
    variants: [
      {
        props: {
          color: "inherit"
        },
        style: {
          color: "inherit"
        }
      },
      ...Object.entries(A.palette).filter(_e()).map(([e]) => ({
        props: {
          color: e
        },
        style: {
          color: (A.vars || A).palette[e].main
        }
      })),
      ...Object.entries(A.palette).filter(_e()).map(([e]) => ({
        props: {
          color: e
        },
        style: {
          "--IconButton-hoverBg": A.vars ? `rgba(${(A.vars || A).palette[e].mainChannel} / ${A.vars.palette.action.hoverOpacity})` : kt((A.vars || A).palette[e].main, A.palette.action.hoverOpacity)
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
    [`&.${fc.disabled}`]: {
      backgroundColor: "transparent",
      color: (A.vars || A).palette.action.disabled
    },
    [`&.${fc.loading}`]: {
      color: "transparent"
    }
  })));
  J0 = uA("span", {
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
  Z0 = h.forwardRef(function(e, t) {
    const r = GA({
      props: e,
      name: "MuiIconButton"
    }), { edge: n = false, children: o, className: i, color: a = "default", disabled: s = false, disableFocusRipple: l = false, size: c = "medium", id: u, loading: d = null, loadingIndicator: f, ...p } = r, B = Oi(u), Q = f ?? E.jsx(j0, {
      "aria-labelledby": B,
      color: "inherit",
      size: 16
    }), m = {
      ...r,
      edge: n,
      color: a,
      disabled: s,
      disableFocusRipple: l,
      loading: d,
      loadingIndicator: Q,
      size: c
    }, y = X0(m);
    return E.jsxs(Y0, {
      id: d ? B : u,
      className: wA(y.root, i),
      centerRipple: true,
      focusRipple: !l,
      disabled: s || d,
      ref: t,
      ...p,
      ownerState: m,
      children: [
        typeof d == "boolean" && E.jsx("span", {
          className: y.loadingWrapper,
          style: {
            display: "contents"
          },
          children: E.jsx(J0, {
            className: y.loadingIndicator,
            ownerState: m,
            children: d && Q
          })
        }),
        o
      ]
    });
  });
  function q0(A) {
    return _A("MuiTypography", A);
  }
  let Am, em, tm, rm, pc;
  zS = KA("MuiTypography", [
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
  Am = {
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
  em = o0();
  tm = (A) => {
    const { align: e, gutterBottom: t, noWrap: r, paragraph: n, variant: o, classes: i } = A, a = {
      root: [
        "root",
        o,
        A.align !== "inherit" && `align${yA(e)}`,
        t && "gutterBottom",
        r && "noWrap",
        n && "paragraph"
      ]
    };
    return NA(a, q0, i);
  };
  rm = uA("span", {
    name: "MuiTypography",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.root,
        t.variant && e[t.variant],
        t.align !== "inherit" && e[`align${yA(t.align)}`],
        t.noWrap && e.noWrap,
        t.gutterBottom && e.gutterBottom,
        t.paragraph && e.paragraph
      ];
    }
  })(EA(({ theme: A }) => {
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
        ...Object.entries(A.palette).filter(_e()).map(([e]) => ({
          props: {
            color: e
          },
          style: {
            color: (A.vars || A).palette[e].main
          }
        })),
        ...Object.entries(((_a2 = A.palette) == null ? void 0 : _a2.text) || {}).filter(([, e]) => typeof e == "string").map(([e]) => ({
          props: {
            color: `text${yA(e)}`
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
  pc = {
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
  qr = h.forwardRef(function(e, t) {
    const { color: r, ...n } = GA({
      props: e,
      name: "MuiTypography"
    }), o = !Am[r], i = em({
      ...n,
      ...o && {
        color: r
      }
    }), { align: a = "inherit", className: s, component: l, gutterBottom: c = false, noWrap: u = false, paragraph: d = false, variant: f = "body1", variantMapping: p = pc, ...B } = i, Q = {
      ...i,
      align: a,
      color: r,
      className: s,
      component: l,
      gutterBottom: c,
      noWrap: u,
      paragraph: d,
      variant: f,
      variantMapping: p
    }, m = l || (d ? "p" : p[f] || pc[f]) || "span", y = tm(Q);
    return E.jsx(rm, {
      as: m,
      ref: t,
      className: wA(y.root, s),
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
  function nm(A) {
    return typeof A == "function" ? A() : A;
  }
  const om = h.forwardRef(function(e, t) {
    const { children: r, container: n, disablePortal: o = false } = e, [i, a] = h.useState(null), s = ye(h.isValidElement(r) ? Un(r) : null, t);
    if (tt(() => {
      o || a(nm(n) || document.body);
    }, [
      n,
      o
    ]), tt(() => {
      if (i && !o) return Yl(t, i), () => {
        Yl(t, null);
      };
    }, [
      t,
      i,
      o
    ]), o) {
      if (h.isValidElement(r)) {
        const l = {
          ref: s
        };
        return h.cloneElement(r, l);
      }
      return r;
    }
    return i && ul.createPortal(r, i);
  });
  function Dn(A) {
    return parseInt(A, 10) || 0;
  }
  const im = {
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
  function am(A) {
    for (const e in A) return false;
    return true;
  }
  function gc(A) {
    return am(A) || A.outerHeightStyle === 0 && !A.overflowing;
  }
  const sm = h.forwardRef(function(e, t) {
    const { onChange: r, maxRows: n, minRows: o = 1, style: i, value: a, ...s } = e, { current: l } = h.useRef(a != null), c = h.useRef(null), u = ye(t, c), d = h.useRef(null), f = h.useRef(null), p = h.useCallback(() => {
      const w = c.current, C = f.current;
      if (!w || !C) return;
      const v = Bt(w).getComputedStyle(w);
      if (v.width === "0px") return {
        outerHeightStyle: 0,
        overflowing: false
      };
      C.style.width = v.width, C.value = w.value || e.placeholder || "x", C.value.slice(-1) === `
` && (C.value += " ");
      const x = v.boxSizing, H = Dn(v.paddingBottom) + Dn(v.paddingTop), I = Dn(v.borderBottomWidth) + Dn(v.borderTopWidth), g = C.scrollHeight;
      C.value = "x";
      const k = C.scrollHeight;
      let R = g;
      o && (R = Math.max(Number(o) * k, R)), n && (R = Math.min(Number(n) * k, R)), R = Math.max(R, k);
      const L = R + (x === "border-box" ? H + I : 0), K = Math.abs(R - g) <= 1;
      return {
        outerHeightStyle: L,
        overflowing: K
      };
    }, [
      n,
      o,
      e.placeholder
    ]), B = et(() => {
      const w = c.current, C = p();
      if (!w || !C || gc(C)) return false;
      const U = C.outerHeightStyle;
      return d.current != null && d.current !== U;
    }), Q = h.useCallback(() => {
      const w = c.current, C = p();
      if (!w || !C || gc(C)) return;
      const U = C.outerHeightStyle;
      d.current !== U && (d.current = U, w.style.height = `${U}px`), w.style.overflow = C.overflowing ? "hidden" : "";
    }, [
      p
    ]), m = h.useRef(-1);
    tt(() => {
      const w = Ud(Q), C = c == null ? void 0 : c.current;
      if (!C) return;
      const U = Bt(C);
      U.addEventListener("resize", w);
      let v;
      return typeof ResizeObserver < "u" && (v = new ResizeObserver(() => {
        B() && (v.unobserve(C), cancelAnimationFrame(m.current), Q(), m.current = requestAnimationFrame(() => {
          v.observe(C);
        }));
      }), v.observe(C)), () => {
        w.clear(), cancelAnimationFrame(m.current), U.removeEventListener("resize", w), v && v.disconnect();
      };
    }, [
      p,
      Q,
      B
    ]), tt(() => {
      Q();
    });
    const y = (w) => {
      l || Q(), r && r(w);
    };
    return E.jsxs(h.Fragment, {
      children: [
        E.jsx("textarea", {
          value: a,
          onChange: y,
          ref: u,
          rows: o,
          style: i,
          ...s
        }),
        E.jsx("textarea", {
          "aria-hidden": true,
          className: e.className,
          readOnly: true,
          ref: f,
          tabIndex: -1,
          style: {
            ...im.shadow,
            ...i,
            paddingTop: 0,
            paddingBottom: 0
          }
        })
      ]
    });
  });
  jt = function(A) {
    return typeof A == "string";
  };
  xr = function({ props: A, states: e, muiFormControl: t }) {
    return e.reduce((r, n) => (r[n] = A[n], t && typeof A[n] > "u" && (r[n] = t[n]), r), {});
  };
  const pl = h.createContext(void 0);
  Er = function() {
    return h.useContext(pl);
  };
  function hc(A) {
    return A != null && !(Array.isArray(A) && A.length === 0);
  }
  function Mo(A, e = false) {
    return A && (hc(A.value) && A.value !== "" || e && hc(A.defaultValue) && A.defaultValue !== "");
  }
  function lm(A) {
    return A.startAdornment;
  }
  function cm(A) {
    return _A("MuiInputBase", A);
  }
  const yr = KA("MuiInputBase", [
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
  var Bc;
  const Di = (A, e) => {
    const { ownerState: t } = A;
    return [
      e.root,
      t.formControl && e.formControl,
      t.startAdornment && e.adornedStart,
      t.endAdornment && e.adornedEnd,
      t.error && e.error,
      t.size === "small" && e.sizeSmall,
      t.multiline && e.multiline,
      t.color && e[`color${yA(t.color)}`],
      t.fullWidth && e.fullWidth,
      t.hiddenLabel && e.hiddenLabel
    ];
  }, Pi = (A, e) => {
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
  }, um = (A) => {
    const { classes: e, color: t, disabled: r, error: n, endAdornment: o, focused: i, formControl: a, fullWidth: s, hiddenLabel: l, multiline: c, readOnly: u, size: d, startAdornment: f, type: p } = A, B = {
      root: [
        "root",
        `color${yA(t)}`,
        r && "disabled",
        n && "error",
        s && "fullWidth",
        i && "focused",
        a && "formControl",
        d && d !== "medium" && `size${yA(d)}`,
        c && "multiline",
        f && "adornedStart",
        o && "adornedEnd",
        l && "hiddenLabel",
        u && "readOnly"
      ],
      input: [
        "input",
        r && "disabled",
        p === "search" && "inputTypeSearch",
        c && "inputMultiline",
        d === "small" && "inputSizeSmall",
        l && "inputHiddenLabel",
        f && "inputAdornedStart",
        o && "inputAdornedEnd",
        u && "readOnly"
      ]
    };
    return NA(B, cm, e);
  }, _i = uA("div", {
    name: "MuiInputBase",
    slot: "Root",
    overridesResolver: Di
  })(EA(({ theme: A }) => ({
    ...A.typography.body1,
    color: (A.vars || A).palette.text.primary,
    lineHeight: "1.4375em",
    boxSizing: "border-box",
    position: "relative",
    cursor: "text",
    display: "inline-flex",
    alignItems: "center",
    [`&.${yr.disabled}`]: {
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
  }))), Ni = uA("input", {
    name: "MuiInputBase",
    slot: "Input",
    overridesResolver: Pi
  })(EA(({ theme: A }) => {
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
      [`label[data-shrink=false] + .${yr.formControl} &`]: {
        "&::-webkit-input-placeholder": r,
        "&::-moz-placeholder": r,
        "&::-ms-input-placeholder": r,
        "&:focus::-webkit-input-placeholder": n,
        "&:focus::-moz-placeholder": n,
        "&:focus::-ms-input-placeholder": n
      },
      [`&.${yr.disabled}`]: {
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
  })), mc = cl({
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
  }), gl = h.forwardRef(function(e, t) {
    const r = GA({
      props: e,
      name: "MuiInputBase"
    }), { "aria-describedby": n, autoComplete: o, autoFocus: i, className: a, color: s, components: l = {}, componentsProps: c = {}, defaultValue: u, disabled: d, disableInjectingGlobalStyles: f, endAdornment: p, error: B, fullWidth: Q = false, id: m, inputComponent: y = "input", inputProps: w = {}, inputRef: C, margin: U, maxRows: v, minRows: x, multiline: H = false, name: I, onBlur: g, onChange: k, onClick: R, onFocus: L, onKeyDown: K, onKeyUp: M, placeholder: O, readOnly: j, renderSuffix: N, rows: D, size: Y, slotProps: X = {}, slots: oA = {}, startAdornment: P, type: z = "text", value: $, ...AA } = r, gA = w.value != null ? w.value : $, { current: cA } = h.useRef(gA != null), tA = h.useRef(), q = h.useCallback((bA) => {
    }, []), aA = ye(tA, C, w.ref, q), [sA, b] = h.useState(false), S = Er(), F = xr({
      props: r,
      muiFormControl: S,
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
    F.focused = S ? S.focused : sA, h.useEffect(() => {
      !S && d && sA && (b(false), g && g());
    }, [
      S,
      d,
      sA,
      g
    ]);
    const G = S && S.onFilled, W = S && S.onEmpty, V = h.useCallback((bA) => {
      Mo(bA) ? G && G() : W && W();
    }, [
      G,
      W
    ]);
    tt(() => {
      cA && V({
        value: gA
      });
    }, [
      gA,
      V,
      cA
    ]);
    const dA = (bA) => {
      L && L(bA), w.onFocus && w.onFocus(bA), S && S.onFocus ? S.onFocus(bA) : b(true);
    }, pA = (bA) => {
      g && g(bA), w.onBlur && w.onBlur(bA), S && S.onBlur ? S.onBlur(bA) : b(false);
    }, BA = (bA, ...ee) => {
      if (!cA) {
        const DA = bA.target || tA.current;
        if (DA == null) throw new Error(gt(1));
        V({
          value: DA.value
        });
      }
      w.onChange && w.onChange(bA, ...ee), k && k(bA, ...ee);
    };
    h.useEffect(() => {
      V(tA.current);
    }, []);
    const rA = (bA) => {
      tA.current && bA.currentTarget === bA.target && tA.current.focus(), R && R(bA);
    };
    let VA = y, mA = w;
    H && VA === "input" && (D ? mA = {
      type: void 0,
      minRows: D,
      maxRows: D,
      ...mA
    } : mA = {
      type: void 0,
      maxRows: v,
      minRows: x,
      ...mA
    }, VA = sm);
    const J = (bA) => {
      V(bA.animationName === "mui-auto-fill-cancel" ? tA.current : {
        value: "x"
      });
    };
    h.useEffect(() => {
      S && S.setAdornedStart(!!P);
    }, [
      S,
      P
    ]);
    const Z = {
      ...r,
      color: F.color || "primary",
      disabled: F.disabled,
      endAdornment: p,
      error: F.error,
      focused: F.focused,
      formControl: S,
      fullWidth: Q,
      hiddenLabel: F.hiddenLabel,
      multiline: H,
      size: F.size,
      startAdornment: P,
      type: z
    }, fA = um(Z), hA = oA.root || l.Root || _i, CA = X.root || c.root || {}, vA = oA.input || l.Input || Ni;
    return mA = {
      ...mA,
      ...X.input ?? c.input
    }, E.jsxs(h.Fragment, {
      children: [
        !f && typeof mc == "function" && (Bc || (Bc = E.jsx(mc, {}))),
        E.jsxs(hA, {
          ...CA,
          ref: t,
          onClick: rA,
          ...AA,
          ...!jt(hA) && {
            ownerState: {
              ...Z,
              ...CA.ownerState
            }
          },
          className: wA(fA.root, CA.className, a, j && "MuiInputBase-readOnly"),
          children: [
            P,
            E.jsx(pl.Provider, {
              value: null,
              children: E.jsx(vA, {
                "aria-invalid": F.error,
                "aria-describedby": n,
                autoComplete: o,
                autoFocus: i,
                defaultValue: u,
                disabled: F.disabled,
                id: m,
                onAnimationStart: J,
                name: I,
                placeholder: O,
                readOnly: j,
                required: F.required,
                rows: D,
                value: gA,
                onKeyDown: K,
                onKeyUp: M,
                type: z,
                ...mA,
                ...!jt(vA) && {
                  as: VA,
                  ownerState: {
                    ...Z,
                    ...mA.ownerState
                  }
                },
                ref: aA,
                className: wA(fA.input, mA.className, j && "MuiInputBase-readOnly"),
                onBlur: pA,
                onChange: BA,
                onFocus: dA
              })
            }),
            p,
            N ? N({
              ...F,
              startAdornment: P
            }) : null
          ]
        })
      ]
    });
  });
  function dm(A) {
    return _A("MuiInput", A);
  }
  const kr = {
    ...yr,
    ...KA("MuiInput", [
      "root",
      "underline",
      "input"
    ])
  };
  function fm(A) {
    return _A("MuiOutlinedInput", A);
  }
  const $e = {
    ...yr,
    ...KA("MuiOutlinedInput", [
      "root",
      "notchedOutline",
      "input"
    ])
  };
  function pm(A) {
    return _A("MuiFilledInput", A);
  }
  let Ot, gm, hm;
  Ot = {
    ...yr,
    ...KA("MuiFilledInput", [
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
  gm = Wd(E.jsx("path", {
    d: "M7 10l5 5 5-5z"
  }), "ArrowDropDown");
  hm = {
    entering: {
      opacity: 1
    },
    entered: {
      opacity: 1
    }
  };
  Bm = h.forwardRef(function(e, t) {
    const r = ll(), n = {
      enter: r.transitions.duration.enteringScreen,
      exit: r.transitions.duration.leavingScreen
    }, { addEndListener: o, appear: i = true, children: a, easing: s, in: l, onEnter: c, onEntered: u, onEntering: d, onExit: f, onExited: p, onExiting: B, style: Q, timeout: m = n, TransitionComponent: y = nt, ...w } = e, C = h.useRef(null), U = ye(C, Un(a), t), v = (K) => (M) => {
      if (K) {
        const O = C.current;
        M === void 0 ? K(O) : K(O, M);
      }
    }, x = v(d), H = v((K, M) => {
      Xd(K);
      const O = Ro({
        style: Q,
        timeout: m,
        easing: s
      }, {
        mode: "enter"
      });
      K.style.webkitTransition = r.transitions.create("opacity", O), K.style.transition = r.transitions.create("opacity", O), c && c(K, M);
    }), I = v(u), g = v(B), k = v((K) => {
      const M = Ro({
        style: Q,
        timeout: m,
        easing: s
      }, {
        mode: "exit"
      });
      K.style.webkitTransition = r.transitions.create("opacity", M), K.style.transition = r.transitions.create("opacity", M), f && f(K);
    }), R = v(p), L = (K) => {
      o && o(C.current, K);
    };
    return E.jsx(y, {
      appear: i,
      in: l,
      nodeRef: C,
      onEnter: H,
      onEntered: I,
      onEntering: x,
      onExit: k,
      onExited: R,
      onExiting: g,
      addEndListener: L,
      timeout: m,
      ...w,
      children: (K, { ownerState: M, ...O }) => h.cloneElement(a, {
        style: {
          opacity: 0,
          visibility: K === "exited" && !l ? "hidden" : void 0,
          ...hm[K],
          ...Q,
          ...a.props.style
        },
        ref: U,
        ...O
      })
    });
  });
  function mm(A) {
    return _A("MuiBackdrop", A);
  }
  KA("MuiBackdrop", [
    "root",
    "invisible"
  ]);
  let vm, wm, ym, bm, os, Qm, Fm, Yd, Qo, Um, Sm;
  vm = (A) => {
    const { classes: e, invisible: t } = A;
    return NA({
      root: [
        "root",
        t && "invisible"
      ]
    }, mm, e);
  };
  wm = uA("div", {
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
  Cm = h.forwardRef(function(e, t) {
    const r = GA({
      props: e,
      name: "MuiBackdrop"
    }), { children: n, className: o, component: i = "div", invisible: a = false, open: s, components: l = {}, componentsProps: c = {}, slotProps: u = {}, slots: d = {}, TransitionComponent: f, transitionDuration: p, ...B } = r, Q = {
      ...r,
      component: i,
      invisible: a
    }, m = vm(Q), y = {
      transition: f,
      root: l.Root,
      ...d
    }, w = {
      ...c,
      ...u
    }, C = {
      slots: y,
      slotProps: w
    }, [U, v] = me("root", {
      elementType: wm,
      externalForwardedProps: C,
      className: wA(m.root, o),
      ownerState: Q
    }), [x, H] = me("transition", {
      elementType: Bm,
      externalForwardedProps: C,
      ownerState: Q
    });
    return E.jsx(x, {
      in: s,
      timeout: p,
      ...B,
      ...H,
      children: E.jsx(U, {
        "aria-hidden": true,
        ...v,
        classes: m,
        ref: t,
        children: n
      })
    });
  });
  ym = KA("MuiBox", [
    "root"
  ]);
  bm = Mi();
  ue = Mh({
    themeId: qe,
    defaultTheme: bm,
    defaultClassName: ym.root,
    generateClassName: Cd.generate
  });
  os = typeof cl({}) == "function";
  Qm = (A, e) => ({
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    boxSizing: "border-box",
    WebkitTextSizeAdjust: "100%",
    ...e && !A.vars && {
      colorScheme: A.palette.mode
    }
  });
  Fm = (A) => ({
    color: (A.vars || A).palette.text.primary,
    ...A.typography.body1,
    backgroundColor: (A.vars || A).palette.background.default,
    "@media print": {
      backgroundColor: (A.vars || A).palette.common.white
    }
  });
  Yd = (A, e = false) => {
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
      html: Qm(A, e),
      "*, *::before, *::after": {
        boxSizing: "inherit"
      },
      "strong, b": {
        fontWeight: A.typography.fontWeightBold
      },
      body: {
        margin: 0,
        ...Fm(A),
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
  Qo = "mui-ecs";
  Um = (A) => {
    const e = Yd(A, false), t = Array.isArray(e) ? e[0] : e;
    return !A.vars && t && (t.html[`:root:has(${Qo})`] = {
      colorScheme: A.palette.mode
    }), A.colorSchemes && Object.entries(A.colorSchemes).forEach(([r, n]) => {
      var _a2, _b2;
      const o = A.getColorSchemeSelector(r);
      o.startsWith("@") ? t[o] = {
        [`:root:not(:has(.${Qo}))`]: {
          colorScheme: (_a2 = n.palette) == null ? void 0 : _a2.mode
        }
      } : t[o.replace(/\s*&/, "")] = {
        [`&:not(:has(.${Qo}))`]: {
          colorScheme: (_b2 = n.palette) == null ? void 0 : _b2.mode
        }
      };
    }), e;
  };
  Sm = cl(os ? ({ theme: A, enableColorScheme: e }) => Yd(A, e) : ({ theme: A }) => Um(A));
  function xm(A) {
    const e = GA({
      props: A,
      name: "MuiCssBaseline"
    }), { children: t, enableColorScheme: r = false } = e;
    return E.jsxs(h.Fragment, {
      children: [
        os && E.jsx(Sm, {
          enableColorScheme: r
        }),
        !os && !r && E.jsx("span", {
          className: Qo,
          style: {
            display: "none"
          }
        }),
        t
      ]
    });
  }
  function Em(A) {
    const e = Ce(A);
    return e.body === A ? Bt(A).innerWidth > e.documentElement.clientWidth : A.scrollHeight > A.clientHeight;
  }
  function An(A, e) {
    e ? A.setAttribute("aria-hidden", "true") : A.removeAttribute("aria-hidden");
  }
  function vc(A) {
    return parseInt(Bt(A).getComputedStyle(A).paddingRight, 10) || 0;
  }
  function Im(A) {
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
  function wc(A, e, t, r, n) {
    const o = [
      e,
      t,
      ...r
    ];
    [].forEach.call(A.children, (i) => {
      const a = !o.includes(i), s = !Im(i);
      a && s && An(i, n);
    });
  }
  function ua(A, e) {
    let t = -1;
    return A.some((r, n) => e(r) ? (t = n, true) : false), t;
  }
  function Hm(A, e) {
    const t = [], r = A.container;
    if (!e.disableScrollLock) {
      if (Em(r)) {
        const i = Ed(Bt(r));
        t.push({
          value: r.style.paddingRight,
          property: "padding-right",
          el: r
        }), r.style.paddingRight = `${vc(r) + i}px`;
        const a = Ce(r).querySelectorAll(".mui-fixed");
        [].forEach.call(a, (s) => {
          t.push({
            value: s.style.paddingRight,
            property: "padding-right",
            el: s
          }), s.style.paddingRight = `${vc(s) + i}px`;
        });
      }
      let o;
      if (r.parentNode instanceof DocumentFragment) o = Ce(r).body;
      else {
        const i = r.parentElement, a = Bt(r);
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
  function Tm(A) {
    const e = [];
    return [].forEach.call(A.children, (t) => {
      t.getAttribute("aria-hidden") === "true" && e.push(t);
    }), e;
  }
  class km {
    constructor() {
      this.modals = [], this.containers = [];
    }
    add(e, t) {
      let r = this.modals.indexOf(e);
      if (r !== -1) return r;
      r = this.modals.length, this.modals.push(e), e.modalRef && An(e.modalRef, false);
      const n = Tm(t);
      wc(t, e.mount, e.modalRef, n, true);
      const o = ua(this.containers, (i) => i.container === t);
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
      const r = ua(this.containers, (o) => o.modals.includes(e)), n = this.containers[r];
      n.restore || (n.restore = Hm(n, t));
    }
    remove(e, t = true) {
      const r = this.modals.indexOf(e);
      if (r === -1) return r;
      const n = ua(this.containers, (i) => i.modals.includes(e)), o = this.containers[n];
      if (o.modals.splice(o.modals.indexOf(e), 1), this.modals.splice(r, 1), o.modals.length === 0) o.restore && o.restore(), e.modalRef && An(e.modalRef, t), wc(o.container, e.mount, e.modalRef, o.hiddenSiblings, false), this.containers.splice(n, 1);
      else {
        const i = o.modals[o.modals.length - 1];
        i.modalRef && An(i.modalRef, false);
      }
      return r;
    }
    isTopModal(e) {
      return this.modals.length > 0 && this.modals[this.modals.length - 1] === e;
    }
  }
  const Lm = [
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
  function Rm(A) {
    const e = parseInt(A.getAttribute("tabindex") || "", 10);
    return Number.isNaN(e) ? A.contentEditable === "true" || (A.nodeName === "AUDIO" || A.nodeName === "VIDEO" || A.nodeName === "DETAILS") && A.getAttribute("tabindex") === null ? 0 : A.tabIndex : e;
  }
  function Om(A) {
    if (A.tagName !== "INPUT" || A.type !== "radio" || !A.name) return false;
    const e = (r) => A.ownerDocument.querySelector(`input[type="radio"]${r}`);
    let t = e(`[name="${A.name}"]:checked`);
    return t || (t = e(`[name="${A.name}"]`)), t !== A;
  }
  function Mm(A) {
    return !(A.disabled || A.tagName === "INPUT" && A.type === "hidden" || Om(A));
  }
  function Km(A) {
    const e = [], t = [];
    return Array.from(A.querySelectorAll(Lm)).forEach((r, n) => {
      const o = Rm(r);
      o === -1 || !Mm(r) || (o === 0 ? e.push(r) : t.push({
        documentOrder: n,
        tabIndex: o,
        node: r
      }));
    }), t.sort((r, n) => r.tabIndex === n.tabIndex ? r.documentOrder - n.documentOrder : r.tabIndex - n.tabIndex).map((r) => r.node).concat(e);
  }
  function Dm() {
    return true;
  }
  function Pm(A) {
    const { children: e, disableAutoFocus: t = false, disableEnforceFocus: r = false, disableRestoreFocus: n = false, getTabbable: o = Km, isEnabled: i = Dm, open: a } = A, s = h.useRef(false), l = h.useRef(null), c = h.useRef(null), u = h.useRef(null), d = h.useRef(null), f = h.useRef(false), p = h.useRef(null), B = ye(Un(e), p), Q = h.useRef(null);
    h.useEffect(() => {
      !a || !p.current || (f.current = !t);
    }, [
      t,
      a
    ]), h.useEffect(() => {
      if (!a || !p.current) return;
      const w = Ce(p.current);
      return p.current.contains(w.activeElement) || (p.current.hasAttribute("tabIndex") || p.current.setAttribute("tabIndex", "-1"), f.current && p.current.focus()), () => {
        n || (u.current && u.current.focus && (s.current = true, u.current.focus()), u.current = null);
      };
    }, [
      a
    ]), h.useEffect(() => {
      if (!a || !p.current) return;
      const w = Ce(p.current), C = (x) => {
        Q.current = x, !(r || !i() || x.key !== "Tab") && w.activeElement === p.current && x.shiftKey && (s.current = true, c.current && c.current.focus());
      }, U = () => {
        var _a2, _b2;
        const x = p.current;
        if (x === null) return;
        if (!w.hasFocus() || !i() || s.current) {
          s.current = false;
          return;
        }
        if (x.contains(w.activeElement) || r && w.activeElement !== l.current && w.activeElement !== c.current) return;
        if (w.activeElement !== d.current) d.current = null;
        else if (d.current !== null) return;
        if (!f.current) return;
        let H = [];
        if ((w.activeElement === l.current || w.activeElement === c.current) && (H = o(p.current)), H.length > 0) {
          const I = !!(((_a2 = Q.current) == null ? void 0 : _a2.shiftKey) && ((_b2 = Q.current) == null ? void 0 : _b2.key) === "Tab"), g = H[0], k = H[H.length - 1];
          typeof g != "string" && typeof k != "string" && (I ? k.focus() : g.focus());
        } else x.focus();
      };
      w.addEventListener("focusin", U), w.addEventListener("keydown", C, true);
      const v = setInterval(() => {
        w.activeElement && w.activeElement.tagName === "BODY" && U();
      }, 50);
      return () => {
        clearInterval(v), w.removeEventListener("focusin", U), w.removeEventListener("keydown", C, true);
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
      u.current === null && (u.current = w.relatedTarget), f.current = true, d.current = w.target;
      const C = e.props.onFocus;
      C && C(w);
    }, y = (w) => {
      u.current === null && (u.current = w.relatedTarget), f.current = true;
    };
    return E.jsxs(h.Fragment, {
      children: [
        E.jsx("div", {
          tabIndex: a ? 0 : -1,
          onFocus: y,
          ref: l,
          "data-testid": "sentinelStart"
        }),
        h.cloneElement(e, {
          ref: B,
          onFocus: m
        }),
        E.jsx("div", {
          tabIndex: a ? 0 : -1,
          onFocus: y,
          ref: c,
          "data-testid": "sentinelEnd"
        })
      ]
    });
  }
  function _m(A) {
    return typeof A == "function" ? A() : A;
  }
  function Nm(A) {
    return A ? A.props.hasOwnProperty("in") : false;
  }
  const Cc = () => {
  }, Pn = new km();
  function Gm(A) {
    const { container: e, disableEscapeKeyDown: t = false, disableScrollLock: r = false, closeAfterTransition: n = false, onTransitionEnter: o, onTransitionExited: i, children: a, onClose: s, open: l, rootRef: c } = A, u = h.useRef({}), d = h.useRef(null), f = h.useRef(null), p = ye(f, c), [B, Q] = h.useState(!l), m = Nm(a);
    let y = true;
    (A["aria-hidden"] === "false" || A["aria-hidden"] === false) && (y = false);
    const w = () => Ce(d.current), C = () => (u.current.modalRef = f.current, u.current.mount = d.current, u.current), U = () => {
      Pn.mount(C(), {
        disableScrollLock: r
      }), f.current && (f.current.scrollTop = 0);
    }, v = et(() => {
      const M = _m(e) || w().body;
      Pn.add(C(), M), f.current && U();
    }), x = () => Pn.isTopModal(C()), H = et((M) => {
      d.current = M, M && (l && x() ? U() : f.current && An(f.current, y));
    }), I = h.useCallback(() => {
      Pn.remove(C(), y);
    }, [
      y
    ]);
    h.useEffect(() => () => {
      I();
    }, [
      I
    ]), h.useEffect(() => {
      l ? v() : (!m || !n) && I();
    }, [
      l,
      I,
      m,
      n,
      v
    ]);
    const g = (M) => (O) => {
      var _a2;
      (_a2 = M.onKeyDown) == null ? void 0 : _a2.call(M, O), !(O.key !== "Escape" || O.which === 229 || !x()) && (t || (O.stopPropagation(), s && s(O, "escapeKeyDown")));
    }, k = (M) => (O) => {
      var _a2;
      (_a2 = M.onClick) == null ? void 0 : _a2.call(M, O), O.target === O.currentTarget && s && s(O, "backdropClick");
    };
    return {
      getRootProps: (M = {}) => {
        const O = Zr(A);
        delete O.onTransitionEnter, delete O.onTransitionExited;
        const j = {
          ...O,
          ...M
        };
        return {
          role: "presentation",
          ...j,
          onKeyDown: g(j),
          ref: p
        };
      },
      getBackdropProps: (M = {}) => {
        const O = M;
        return {
          "aria-hidden": true,
          ...O,
          onClick: k(O),
          open: l
        };
      },
      getTransitionProps: () => {
        const M = () => {
          Q(false), o && o();
        }, O = () => {
          Q(true), i && i(), n && I();
        };
        return {
          onEnter: Xl(M, (a == null ? void 0 : a.props.onEnter) ?? Cc),
          onExited: Xl(O, (a == null ? void 0 : a.props.onExited) ?? Cc)
        };
      },
      rootRef: p,
      portalRef: H,
      isTopModal: x,
      exited: B,
      hasTransition: m
    };
  }
  function Vm(A) {
    return _A("MuiModal", A);
  }
  KA("MuiModal", [
    "root",
    "hidden",
    "backdrop"
  ]);
  let $m, Wm, jm;
  $m = (A) => {
    const { open: e, exited: t, classes: r } = A;
    return NA({
      root: [
        "root",
        !e && t && "hidden"
      ],
      backdrop: [
        "backdrop"
      ]
    }, Vm, r);
  };
  Wm = uA("div", {
    name: "MuiModal",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.root,
        !t.open && t.exited && e.hidden
      ];
    }
  })(EA(({ theme: A }) => ({
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
  jm = uA(Cm, {
    name: "MuiModal",
    slot: "Backdrop",
    overridesResolver: (A, e) => e.backdrop
  })({
    zIndex: -1
  });
  zm = h.forwardRef(function(e, t) {
    const r = GA({
      name: "MuiModal",
      props: e
    }), { BackdropComponent: n = jm, BackdropProps: o, classes: i, className: a, closeAfterTransition: s = false, children: l, container: c, component: u, components: d = {}, componentsProps: f = {}, disableAutoFocus: p = false, disableEnforceFocus: B = false, disableEscapeKeyDown: Q = false, disablePortal: m = false, disableRestoreFocus: y = false, disableScrollLock: w = false, hideBackdrop: C = false, keepMounted: U = false, onBackdropClick: v, onClose: x, onTransitionEnter: H, onTransitionExited: I, open: g, slotProps: k = {}, slots: R = {}, theme: L, ...K } = r, M = {
      ...r,
      closeAfterTransition: s,
      disableAutoFocus: p,
      disableEnforceFocus: B,
      disableEscapeKeyDown: Q,
      disablePortal: m,
      disableRestoreFocus: y,
      disableScrollLock: w,
      hideBackdrop: C,
      keepMounted: U
    }, { getRootProps: O, getBackdropProps: j, getTransitionProps: N, portalRef: D, isTopModal: Y, exited: X, hasTransition: oA } = Gm({
      ...M,
      rootRef: t
    }), P = {
      ...M,
      exited: X
    }, z = $m(P), $ = {};
    if (l.props.tabIndex === void 0 && ($.tabIndex = "-1"), oA) {
      const { onEnter: aA, onExited: sA } = N();
      $.onEnter = aA, $.onExited = sA;
    }
    const AA = {
      slots: {
        root: d.Root,
        backdrop: d.Backdrop,
        ...R
      },
      slotProps: {
        ...f,
        ...k
      }
    }, [gA, cA] = me("root", {
      ref: t,
      elementType: Wm,
      externalForwardedProps: {
        ...AA,
        ...K,
        component: u
      },
      getSlotProps: O,
      ownerState: P,
      className: wA(a, z == null ? void 0 : z.root, !P.open && P.exited && (z == null ? void 0 : z.hidden))
    }), [tA, q] = me("backdrop", {
      ref: o == null ? void 0 : o.ref,
      elementType: n,
      externalForwardedProps: AA,
      shouldForwardComponentProp: true,
      additionalProps: o,
      getSlotProps: (aA) => j({
        ...aA,
        onClick: (sA) => {
          v && v(sA), (aA == null ? void 0 : aA.onClick) && aA.onClick(sA);
        }
      }),
      className: wA(o == null ? void 0 : o.className, z == null ? void 0 : z.backdrop),
      ownerState: P
    });
    return !U && !g && (!oA || X) ? null : E.jsx(om, {
      ref: D,
      container: c,
      disablePortal: m,
      children: E.jsxs(gA, {
        ...cA,
        children: [
          !C && n ? E.jsx(tA, {
            ...q
          }) : null,
          E.jsx(Pm, {
            disableEnforceFocus: B,
            disableAutoFocus: p,
            disableRestoreFocus: y,
            isEnabled: Y,
            open: g,
            children: h.cloneElement(l, $)
          })
        ]
      })
    });
  });
  function Xm(A) {
    return _A("MuiDivider", A);
  }
  let Ym, Jm, Zm;
  XS = KA("MuiDivider", [
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
  Ym = (A) => {
    const { absolute: e, children: t, classes: r, flexItem: n, light: o, orientation: i, textAlign: a, variant: s } = A;
    return NA({
      root: [
        "root",
        e && "absolute",
        s,
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
    }, Xm, r);
  };
  Jm = uA("div", {
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
  })(EA(({ theme: A }) => ({
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
          borderColor: A.vars ? `rgba(${A.vars.palette.dividerChannel} / 0.08)` : kt(A.palette.divider, 0.08)
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
  Zm = uA("span", {
    name: "MuiDivider",
    slot: "Wrapper",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.wrapper,
        t.orientation === "vertical" && e.wrapperVertical
      ];
    }
  })(EA(({ theme: A }) => ({
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
  Ko = h.forwardRef(function(e, t) {
    const r = GA({
      props: e,
      name: "MuiDivider"
    }), { absolute: n = false, children: o, className: i, orientation: a = "horizontal", component: s = o || a === "vertical" ? "div" : "hr", flexItem: l = false, light: c = false, role: u = s !== "hr" ? "separator" : void 0, textAlign: d = "center", variant: f = "fullWidth", ...p } = r, B = {
      ...r,
      absolute: n,
      component: s,
      flexItem: l,
      light: c,
      orientation: a,
      role: u,
      textAlign: d,
      variant: f
    }, Q = Ym(B);
    return E.jsx(Jm, {
      as: s,
      className: wA(Q.root, i),
      role: u,
      ref: t,
      ownerState: B,
      "aria-orientation": u === "separator" && (s !== "hr" || a === "vertical") ? a : void 0,
      ...p,
      children: o ? E.jsx(Zm, {
        className: Q.wrapper,
        ownerState: B,
        children: o
      }) : null
    });
  });
  Ko && (Ko.muiSkipListHighlight = true);
  const qm = (A) => {
    const { classes: e, disableUnderline: t, startAdornment: r, endAdornment: n, size: o, hiddenLabel: i, multiline: a } = A, s = {
      root: [
        "root",
        !t && "underline",
        r && "adornedStart",
        n && "adornedEnd",
        o === "small" && `size${yA(o)}`,
        i && "hiddenLabel",
        a && "multiline"
      ],
      input: [
        "input"
      ]
    }, l = NA(s, pm, e);
    return {
      ...e,
      ...l
    };
  }, Av = uA(_i, {
    shouldForwardProp: (A) => rt(A) || A === "classes",
    name: "MuiFilledInput",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        ...Di(A, e),
        !t.disableUnderline && e.underline
      ];
    }
  })(EA(({ theme: A }) => {
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
      [`&.${Ot.focused}`]: {
        backgroundColor: A.vars ? A.vars.palette.FilledInput.bg : r
      },
      [`&.${Ot.disabled}`]: {
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
            [`&.${Ot.focused}:after`]: {
              transform: "scaleX(1) translateX(0)"
            },
            [`&.${Ot.error}`]: {
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
            [`&:hover:not(.${Ot.disabled}, .${Ot.error}):before`]: {
              borderBottom: `1px solid ${(A.vars || A).palette.text.primary}`
            },
            [`&.${Ot.disabled}:before`]: {
              borderBottomStyle: "dotted"
            }
          }
        },
        ...Object.entries(A.palette).filter(_e()).map(([i]) => {
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
  })), ev = uA(Ni, {
    name: "MuiFilledInput",
    slot: "Input",
    overridesResolver: Pi
  })(EA(({ theme: A }) => ({
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
  }))), hl = h.forwardRef(function(e, t) {
    const r = GA({
      props: e,
      name: "MuiFilledInput"
    }), { disableUnderline: n = false, components: o = {}, componentsProps: i, fullWidth: a = false, hiddenLabel: s, inputComponent: l = "input", multiline: c = false, slotProps: u, slots: d = {}, type: f = "text", ...p } = r, B = {
      ...r,
      disableUnderline: n,
      fullWidth: a,
      inputComponent: l,
      multiline: c,
      type: f
    }, Q = qm(r), m = {
      root: {
        ownerState: B
      },
      input: {
        ownerState: B
      }
    }, y = u ?? i ? ie(m, u ?? i) : m, w = d.root ?? o.Root ?? Av, C = d.input ?? o.Input ?? ev;
    return E.jsx(gl, {
      slots: {
        root: w,
        input: C
      },
      slotProps: y,
      fullWidth: a,
      inputComponent: l,
      multiline: c,
      ref: t,
      type: f,
      ...p,
      classes: Q
    });
  });
  hl.muiName = "Input";
  function tv(A) {
    return _A("MuiFormControl", A);
  }
  KA("MuiFormControl", [
    "root",
    "marginNone",
    "marginNormal",
    "marginDense",
    "fullWidth",
    "disabled"
  ]);
  const rv = (A) => {
    const { classes: e, margin: t, fullWidth: r } = A, n = {
      root: [
        "root",
        t !== "none" && `margin${yA(t)}`,
        r && "fullWidth"
      ]
    };
    return NA(n, tv, e);
  }, nv = uA("div", {
    name: "MuiFormControl",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.root,
        e[`margin${yA(t.margin)}`],
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
  }), ov = h.forwardRef(function(e, t) {
    const r = GA({
      props: e,
      name: "MuiFormControl"
    }), { children: n, className: o, color: i = "primary", component: a = "div", disabled: s = false, error: l = false, focused: c, fullWidth: u = false, hiddenLabel: d = false, margin: f = "none", required: p = false, size: B = "medium", variant: Q = "outlined", ...m } = r, y = {
      ...r,
      color: i,
      component: a,
      disabled: s,
      error: l,
      fullWidth: u,
      hiddenLabel: d,
      margin: f,
      required: p,
      size: B,
      variant: Q
    }, w = rv(y), [C, U] = h.useState(() => {
      let M = false;
      return n && h.Children.forEach(n, (O) => {
        if (!aa(O, [
          "Input",
          "Select"
        ])) return;
        const j = aa(O, [
          "Select"
        ]) ? O.props.input : O;
        j && lm(j.props) && (M = true);
      }), M;
    }), [v, x] = h.useState(() => {
      let M = false;
      return n && h.Children.forEach(n, (O) => {
        aa(O, [
          "Input",
          "Select"
        ]) && (Mo(O.props, true) || Mo(O.props.inputProps, true)) && (M = true);
      }), M;
    }), [H, I] = h.useState(false);
    s && H && I(false);
    const g = c !== void 0 && !s ? c : H;
    let k;
    h.useRef(false);
    const R = h.useCallback(() => {
      x(true);
    }, []), L = h.useCallback(() => {
      x(false);
    }, []), K = h.useMemo(() => ({
      adornedStart: C,
      setAdornedStart: U,
      color: i,
      disabled: s,
      error: l,
      filled: v,
      focused: g,
      fullWidth: u,
      hiddenLabel: d,
      size: B,
      onBlur: () => {
        I(false);
      },
      onFocus: () => {
        I(true);
      },
      onEmpty: L,
      onFilled: R,
      registerEffect: k,
      required: p,
      variant: Q
    }), [
      C,
      i,
      s,
      l,
      v,
      g,
      u,
      d,
      k,
      L,
      R,
      p,
      B,
      Q
    ]);
    return E.jsx(pl.Provider, {
      value: K,
      children: E.jsx(nv, {
        as: a,
        ownerState: y,
        className: wA(w.root, o),
        ref: t,
        ...m,
        children: n
      })
    });
  });
  function iv(A) {
    return _A("MuiFormHelperText", A);
  }
  const yc = KA("MuiFormHelperText", [
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
  var bc;
  const av = (A) => {
    const { classes: e, contained: t, size: r, disabled: n, error: o, filled: i, focused: a, required: s } = A, l = {
      root: [
        "root",
        n && "disabled",
        o && "error",
        r && `size${yA(r)}`,
        t && "contained",
        a && "focused",
        i && "filled",
        s && "required"
      ]
    };
    return NA(l, iv, e);
  }, sv = uA("p", {
    name: "MuiFormHelperText",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.root,
        t.size && e[`size${yA(t.size)}`],
        t.contained && e.contained,
        t.filled && e.filled
      ];
    }
  })(EA(({ theme: A }) => ({
    color: (A.vars || A).palette.text.secondary,
    ...A.typography.caption,
    textAlign: "left",
    marginTop: 3,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    [`&.${yc.disabled}`]: {
      color: (A.vars || A).palette.text.disabled
    },
    [`&.${yc.error}`]: {
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
  }))), lv = h.forwardRef(function(e, t) {
    const r = GA({
      props: e,
      name: "MuiFormHelperText"
    }), { children: n, className: o, component: i = "p", disabled: a, error: s, filled: l, focused: c, margin: u, required: d, variant: f, ...p } = r, B = Er(), Q = xr({
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
    const y = av(m);
    return E.jsx(sv, {
      as: i,
      className: wA(y.root, o),
      ref: t,
      ...p,
      ownerState: m,
      children: n === " " ? bc || (bc = E.jsx("span", {
        className: "notranslate",
        "aria-hidden": true,
        children: "\u200B"
      })) : n
    });
  });
  function cv(A) {
    return _A("MuiFormLabel", A);
  }
  const en = KA("MuiFormLabel", [
    "root",
    "colorSecondary",
    "focused",
    "disabled",
    "error",
    "filled",
    "required",
    "asterisk"
  ]), uv = (A) => {
    const { classes: e, color: t, focused: r, disabled: n, error: o, filled: i, required: a } = A, s = {
      root: [
        "root",
        `color${yA(t)}`,
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
    return NA(s, cv, e);
  }, dv = uA("label", {
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
  })(EA(({ theme: A }) => ({
    color: (A.vars || A).palette.text.secondary,
    ...A.typography.body1,
    lineHeight: "1.4375em",
    padding: 0,
    position: "relative",
    variants: [
      ...Object.entries(A.palette).filter(_e()).map(([e]) => ({
        props: {
          color: e
        },
        style: {
          [`&.${en.focused}`]: {
            color: (A.vars || A).palette[e].main
          }
        }
      })),
      {
        props: {},
        style: {
          [`&.${en.disabled}`]: {
            color: (A.vars || A).palette.text.disabled
          },
          [`&.${en.error}`]: {
            color: (A.vars || A).palette.error.main
          }
        }
      }
    ]
  }))), fv = uA("span", {
    name: "MuiFormLabel",
    slot: "Asterisk",
    overridesResolver: (A, e) => e.asterisk
  })(EA(({ theme: A }) => ({
    [`&.${en.error}`]: {
      color: (A.vars || A).palette.error.main
    }
  }))), pv = h.forwardRef(function(e, t) {
    const r = GA({
      props: e,
      name: "MuiFormLabel"
    }), { children: n, className: o, color: i, component: a = "label", disabled: s, error: l, filled: c, focused: u, required: d, ...f } = r, p = Er(), B = xr({
      props: r,
      muiFormControl: p,
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
    }, m = uv(Q);
    return E.jsxs(dv, {
      as: a,
      ownerState: Q,
      className: wA(m.root, o),
      ref: t,
      ...f,
      children: [
        n,
        B.required && E.jsxs(fv, {
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
  function is(A) {
    return `scale(${A}, ${A ** 2})`;
  }
  const gv = {
    entering: {
      opacity: 1,
      transform: is(1)
    },
    entered: {
      opacity: 1,
      transform: "none"
    }
  }, da = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), as = h.forwardRef(function(e, t) {
    const { addEndListener: r, appear: n = true, children: o, easing: i, in: a, onEnter: s, onEntered: l, onEntering: c, onExit: u, onExited: d, onExiting: f, style: p, timeout: B = "auto", TransitionComponent: Q = nt, ...m } = e, y = xd(), w = h.useRef(), C = ll(), U = h.useRef(null), v = ye(U, Un(o), t), x = (M) => (O) => {
      if (M) {
        const j = U.current;
        O === void 0 ? M(j) : M(j, O);
      }
    }, H = x(c), I = x((M, O) => {
      Xd(M);
      const { duration: j, delay: N, easing: D } = Ro({
        style: p,
        timeout: B,
        easing: i
      }, {
        mode: "enter"
      });
      let Y;
      B === "auto" ? (Y = C.transitions.getAutoHeightDuration(M.clientHeight), w.current = Y) : Y = j, M.style.transition = [
        C.transitions.create("opacity", {
          duration: Y,
          delay: N
        }),
        C.transitions.create("transform", {
          duration: da ? Y : Y * 0.666,
          delay: N,
          easing: D
        })
      ].join(","), s && s(M, O);
    }), g = x(l), k = x(f), R = x((M) => {
      const { duration: O, delay: j, easing: N } = Ro({
        style: p,
        timeout: B,
        easing: i
      }, {
        mode: "exit"
      });
      let D;
      B === "auto" ? (D = C.transitions.getAutoHeightDuration(M.clientHeight), w.current = D) : D = O, M.style.transition = [
        C.transitions.create("opacity", {
          duration: D,
          delay: j
        }),
        C.transitions.create("transform", {
          duration: da ? D : D * 0.666,
          delay: da ? j : j || D * 0.333,
          easing: N
        })
      ].join(","), M.style.opacity = 0, M.style.transform = is(0.75), u && u(M);
    }), L = x(d), K = (M) => {
      B === "auto" && y.start(w.current || 0, M), r && r(U.current, M);
    };
    return E.jsx(Q, {
      appear: n,
      in: a,
      nodeRef: U,
      onEnter: I,
      onEntered: g,
      onEntering: H,
      onExit: R,
      onExited: L,
      onExiting: k,
      addEndListener: K,
      timeout: B === "auto" ? null : B,
      ...m,
      children: (M, { ownerState: O, ...j }) => h.cloneElement(o, {
        style: {
          opacity: 0,
          transform: is(0.75),
          visibility: M === "exited" && !a ? "hidden" : void 0,
          ...gv[M],
          ...p,
          ...o.props.style
        },
        ref: v,
        ...j
      })
    });
  });
  as && (as.muiSupportAuto = true);
  const hv = (A) => {
    const { classes: e, disableUnderline: t } = A, n = NA({
      root: [
        "root",
        !t && "underline"
      ],
      input: [
        "input"
      ]
    }, dm, e);
    return {
      ...e,
      ...n
    };
  }, Bv = uA(_i, {
    shouldForwardProp: (A) => rt(A) || A === "classes",
    name: "MuiInput",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        ...Di(A, e),
        !t.disableUnderline && e.underline
      ];
    }
  })(EA(({ theme: A }) => {
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
            [`&.${kr.focused}:after`]: {
              transform: "scaleX(1) translateX(0)"
            },
            [`&.${kr.error}`]: {
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
            [`&:hover:not(.${kr.disabled}, .${kr.error}):before`]: {
              borderBottom: `2px solid ${(A.vars || A).palette.text.primary}`,
              "@media (hover: none)": {
                borderBottom: `1px solid ${t}`
              }
            },
            [`&.${kr.disabled}:before`]: {
              borderBottomStyle: "dotted"
            }
          }
        },
        ...Object.entries(A.palette).filter(_e()).map(([r]) => ({
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
  })), mv = uA(Ni, {
    name: "MuiInput",
    slot: "Input",
    overridesResolver: Pi
  })({}), Bl = h.forwardRef(function(e, t) {
    const r = GA({
      props: e,
      name: "MuiInput"
    }), { disableUnderline: n = false, components: o = {}, componentsProps: i, fullWidth: a = false, inputComponent: s = "input", multiline: l = false, slotProps: c, slots: u = {}, type: d = "text", ...f } = r, p = hv(r), Q = {
      root: {
        ownerState: {
          disableUnderline: n
        }
      }
    }, m = c ?? i ? ie(c ?? i, Q) : Q, y = u.root ?? o.Root ?? Bv, w = u.input ?? o.Input ?? mv;
    return E.jsx(gl, {
      slots: {
        root: y,
        input: w
      },
      slotProps: m,
      fullWidth: a,
      inputComponent: s,
      multiline: l,
      ref: t,
      type: d,
      ...f,
      classes: p
    });
  });
  Bl.muiName = "Input";
  function vv(A) {
    return _A("MuiInputLabel", A);
  }
  KA("MuiInputLabel", [
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
  let wv, Cv, yv;
  wv = (A) => {
    const { classes: e, formControl: t, size: r, shrink: n, disableAnimation: o, variant: i, required: a } = A, s = {
      root: [
        "root",
        t && "formControl",
        !o && "animated",
        n && "shrink",
        r && r !== "normal" && `size${yA(r)}`,
        i
      ],
      asterisk: [
        a && "asterisk"
      ]
    }, l = NA(s, vv, e);
    return {
      ...e,
      ...l
    };
  };
  Cv = uA(pv, {
    shouldForwardProp: (A) => rt(A) || A === "classes",
    name: "MuiInputLabel",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        {
          [`& .${en.asterisk}`]: e.asterisk
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
  })(EA(({ theme: A }) => ({
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
  yv = h.forwardRef(function(e, t) {
    const r = GA({
      name: "MuiInputLabel",
      props: e
    }), { disableAnimation: n = false, margin: o, shrink: i, variant: a, className: s, ...l } = r, c = Er();
    let u = i;
    typeof u > "u" && c && (u = c.filled || c.focused || c.adornedStart);
    const d = xr({
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
      shrink: u,
      size: d.size,
      variant: d.variant,
      required: d.required,
      focused: d.focused
    }, p = wv(f);
    return E.jsx(Cv, {
      "data-shrink": u,
      ref: t,
      className: wA(p.root, s),
      ...l,
      ownerState: f,
      classes: p
    });
  });
  bv = h.createContext({});
  function Qv(A) {
    return _A("MuiList", A);
  }
  KA("MuiList", [
    "root",
    "padding",
    "dense",
    "subheader"
  ]);
  let Fv, Uv;
  Fv = (A) => {
    const { classes: e, disablePadding: t, dense: r, subheader: n } = A;
    return NA({
      root: [
        "root",
        !t && "padding",
        r && "dense",
        n && "subheader"
      ]
    }, Qv, e);
  };
  Uv = uA("ul", {
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
  Sv = h.forwardRef(function(e, t) {
    const r = GA({
      props: e,
      name: "MuiList"
    }), { children: n, className: o, component: i = "ul", dense: a = false, disablePadding: s = false, subheader: l, ...c } = r, u = h.useMemo(() => ({
      dense: a
    }), [
      a
    ]), d = {
      ...r,
      component: i,
      dense: a,
      disablePadding: s
    }, f = Fv(d);
    return E.jsx(bv.Provider, {
      value: u,
      children: E.jsxs(Uv, {
        as: i,
        className: wA(f.root, o),
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
  function fa(A, e, t) {
    return A === e ? A.firstChild : e && e.nextElementSibling ? e.nextElementSibling : t ? null : A.firstChild;
  }
  function Qc(A, e, t) {
    return A === e ? t ? A.firstChild : A.lastChild : e && e.previousElementSibling ? e.previousElementSibling : t ? null : A.lastChild;
  }
  function Jd(A, e) {
    if (e === void 0) return true;
    let t = A.innerText;
    return t === void 0 && (t = A.textContent), t = t.trim().toLowerCase(), t.length === 0 ? false : e.repeating ? t[0] === e.keys[0] : t.startsWith(e.keys.join(""));
  }
  function Lr(A, e, t, r, n, o) {
    let i = false, a = n(A, e, e ? t : false);
    for (; a; ) {
      if (a === A.firstChild) {
        if (i) return false;
        i = true;
      }
      const s = r ? false : a.disabled || a.getAttribute("aria-disabled") === "true";
      if (!a.hasAttribute("tabindex") || !Jd(a, o) || s) a = n(A, a, t);
      else return a.focus(), true;
    }
    return false;
  }
  const xv = h.forwardRef(function(e, t) {
    const { actions: r, autoFocus: n = false, autoFocusItem: o = false, children: i, className: a, disabledItemsFocusable: s = false, disableListWrap: l = false, onKeyDown: c, variant: u = "selectedMenu", ...d } = e, f = h.useRef(null), p = h.useRef({
      keys: [],
      repeating: true,
      previousKeyMatched: true,
      lastTime: null
    });
    tt(() => {
      n && f.current.focus();
    }, [
      n
    ]), h.useImperativeHandle(r, () => ({
      adjustStyleForScrollbar: (w, { direction: C }) => {
        const U = !f.current.style.width;
        if (w.clientHeight < f.current.clientHeight && U) {
          const v = `${Ed(Bt(w))}px`;
          f.current.style[C === "rtl" ? "paddingLeft" : "paddingRight"] = v, f.current.style.width = `calc(100% + ${v})`;
        }
        return f.current;
      }
    }), []);
    const B = (w) => {
      const C = f.current, U = w.key;
      if (w.ctrlKey || w.metaKey || w.altKey) {
        c && c(w);
        return;
      }
      const x = Ce(C).activeElement;
      if (U === "ArrowDown") w.preventDefault(), Lr(C, x, l, s, fa);
      else if (U === "ArrowUp") w.preventDefault(), Lr(C, x, l, s, Qc);
      else if (U === "Home") w.preventDefault(), Lr(C, null, l, s, fa);
      else if (U === "End") w.preventDefault(), Lr(C, null, l, s, Qc);
      else if (U.length === 1) {
        const H = p.current, I = U.toLowerCase(), g = performance.now();
        H.keys.length > 0 && (g - H.lastTime > 500 ? (H.keys = [], H.repeating = true, H.previousKeyMatched = true) : H.repeating && I !== H.keys[0] && (H.repeating = false)), H.lastTime = g, H.keys.push(I);
        const k = x && !H.repeating && Jd(x, H);
        H.previousKeyMatched && (k || Lr(C, x, false, s, fa, H)) ? w.preventDefault() : H.previousKeyMatched = false;
      }
      c && c(w);
    }, Q = ye(f, t);
    let m = -1;
    h.Children.forEach(i, (w, C) => {
      if (!h.isValidElement(w)) {
        m === C && (m += 1, m >= i.length && (m = -1));
        return;
      }
      w.props.disabled || (u === "selectedMenu" && w.props.selected || m === -1) && (m = C), m === C && (w.props.disabled || w.props.muiSkipListHighlight || w.type.muiSkipListHighlight) && (m += 1, m >= i.length && (m = -1));
    });
    const y = h.Children.map(i, (w, C) => {
      if (C === m) {
        const U = {};
        return o && (U.autoFocus = true), w.props.tabIndex === void 0 && u === "selectedMenu" && (U.tabIndex = 0), h.cloneElement(w, U);
      }
      return w;
    });
    return E.jsx(Sv, {
      role: "menu",
      ref: Q,
      className: a,
      onKeyDown: B,
      tabIndex: n ? 0 : -1,
      ...d,
      children: y
    });
  });
  function Ev(A) {
    return _A("MuiPopover", A);
  }
  KA("MuiPopover", [
    "root",
    "paper"
  ]);
  function Fc(A, e) {
    let t = 0;
    return typeof e == "number" ? t = e : e === "center" ? t = A.height / 2 : e === "bottom" && (t = A.height), t;
  }
  function Uc(A, e) {
    let t = 0;
    return typeof e == "number" ? t = e : e === "center" ? t = A.width / 2 : e === "right" && (t = A.width), t;
  }
  function Sc(A) {
    return [
      A.horizontal,
      A.vertical
    ].map((e) => typeof e == "number" ? `${e}px` : e).join(" ");
  }
  function _n(A) {
    return typeof A == "function" ? A() : A;
  }
  const Iv = (A) => {
    const { classes: e } = A;
    return NA({
      root: [
        "root"
      ],
      paper: [
        "paper"
      ]
    }, Ev, e);
  }, Hv = uA(zm, {
    name: "MuiPopover",
    slot: "Root",
    overridesResolver: (A, e) => e.root
  })({}), Zd = uA(es, {
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
  }), qd = h.forwardRef(function(e, t) {
    const r = GA({
      props: e,
      name: "MuiPopover"
    }), { action: n, anchorEl: o, anchorOrigin: i = {
      vertical: "top",
      horizontal: "left"
    }, anchorPosition: a, anchorReference: s = "anchorEl", children: l, className: c, container: u, elevation: d = 8, marginThreshold: f = 16, open: p, PaperProps: B = {}, slots: Q = {}, slotProps: m = {}, transformOrigin: y = {
      vertical: "top",
      horizontal: "left"
    }, TransitionComponent: w, transitionDuration: C = "auto", TransitionProps: U = {}, disableScrollLock: v = false, ...x } = r, H = h.useRef(), I = {
      ...r,
      anchorOrigin: i,
      anchorReference: s,
      elevation: d,
      marginThreshold: f,
      transformOrigin: y,
      TransitionComponent: w,
      transitionDuration: C,
      TransitionProps: U
    }, g = Iv(I), k = h.useCallback(() => {
      if (s === "anchorPosition") return a;
      const q = _n(o), sA = (q && q.nodeType === 1 ? q : Ce(H.current).body).getBoundingClientRect();
      return {
        top: sA.top + Fc(sA, i.vertical),
        left: sA.left + Uc(sA, i.horizontal)
      };
    }, [
      o,
      i.horizontal,
      i.vertical,
      a,
      s
    ]), R = h.useCallback((q) => ({
      vertical: Fc(q, y.vertical),
      horizontal: Uc(q, y.horizontal)
    }), [
      y.horizontal,
      y.vertical
    ]), L = h.useCallback((q) => {
      const aA = {
        width: q.offsetWidth,
        height: q.offsetHeight
      }, sA = R(aA);
      if (s === "none") return {
        top: null,
        left: null,
        transformOrigin: Sc(sA)
      };
      const b = k();
      let S = b.top - sA.vertical, F = b.left - sA.horizontal;
      const G = S + aA.height, W = F + aA.width, V = Bt(_n(o)), dA = V.innerHeight - f, pA = V.innerWidth - f;
      if (f !== null && S < f) {
        const BA = S - f;
        S -= BA, sA.vertical += BA;
      } else if (f !== null && G > dA) {
        const BA = G - dA;
        S -= BA, sA.vertical += BA;
      }
      if (f !== null && F < f) {
        const BA = F - f;
        F -= BA, sA.horizontal += BA;
      } else if (W > pA) {
        const BA = W - pA;
        F -= BA, sA.horizontal += BA;
      }
      return {
        top: `${Math.round(S)}px`,
        left: `${Math.round(F)}px`,
        transformOrigin: Sc(sA)
      };
    }, [
      o,
      s,
      k,
      R,
      f
    ]), [K, M] = h.useState(p), O = h.useCallback(() => {
      const q = H.current;
      if (!q) return;
      const aA = L(q);
      aA.top !== null && q.style.setProperty("top", aA.top), aA.left !== null && (q.style.left = aA.left), q.style.transformOrigin = aA.transformOrigin, M(true);
    }, [
      L
    ]);
    h.useEffect(() => (v && window.addEventListener("scroll", O), () => window.removeEventListener("scroll", O)), [
      o,
      v,
      O
    ]);
    const j = () => {
      O();
    }, N = () => {
      M(false);
    };
    h.useEffect(() => {
      p && O();
    }), h.useImperativeHandle(n, () => p ? {
      updatePosition: () => {
        O();
      }
    } : null, [
      p,
      O
    ]), h.useEffect(() => {
      if (!p) return;
      const q = Ud(() => {
        O();
      }), aA = Bt(_n(o));
      return aA.addEventListener("resize", q), () => {
        q.clear(), aA.removeEventListener("resize", q);
      };
    }, [
      o,
      p,
      O
    ]);
    let D = C;
    const Y = {
      slots: {
        transition: w,
        ...Q
      },
      slotProps: {
        transition: U,
        paper: B,
        ...m
      }
    }, [X, oA] = me("transition", {
      elementType: as,
      externalForwardedProps: Y,
      ownerState: I,
      getSlotProps: (q) => ({
        ...q,
        onEntering: (aA, sA) => {
          var _a2;
          (_a2 = q.onEntering) == null ? void 0 : _a2.call(q, aA, sA), j();
        },
        onExited: (aA) => {
          var _a2;
          (_a2 = q.onExited) == null ? void 0 : _a2.call(q, aA), N();
        }
      }),
      additionalProps: {
        appear: true,
        in: p
      }
    });
    C === "auto" && !X.muiSupportAuto && (D = void 0);
    const P = u || (o ? Ce(_n(o)).body : void 0), [z, { slots: $, slotProps: AA, ...gA }] = me("root", {
      ref: t,
      elementType: Hv,
      externalForwardedProps: {
        ...Y,
        ...x
      },
      shouldForwardComponentProp: true,
      additionalProps: {
        slots: {
          backdrop: Q.backdrop
        },
        slotProps: {
          backdrop: l0(typeof m.backdrop == "function" ? m.backdrop(I) : m.backdrop, {
            invisible: true
          })
        },
        container: P,
        open: p
      },
      ownerState: I,
      className: wA(g.root, c)
    }), [cA, tA] = me("paper", {
      ref: H,
      className: g.paper,
      elementType: Zd,
      externalForwardedProps: Y,
      shouldForwardComponentProp: true,
      additionalProps: {
        elevation: d,
        style: K ? void 0 : {
          opacity: 0
        }
      },
      ownerState: I
    });
    return E.jsx(z, {
      ...gA,
      ...!jt(z) && {
        slots: $,
        slotProps: AA,
        disableScrollLock: v
      },
      children: E.jsx(X, {
        ...oA,
        timeout: D,
        children: E.jsx(cA, {
          ...tA,
          children: l
        })
      })
    });
  });
  function Tv(A) {
    return _A("MuiMenu", A);
  }
  KA("MuiMenu", [
    "root",
    "paper",
    "list"
  ]);
  const kv = {
    vertical: "top",
    horizontal: "right"
  }, Lv = {
    vertical: "top",
    horizontal: "left"
  }, Rv = (A) => {
    const { classes: e } = A;
    return NA({
      root: [
        "root"
      ],
      paper: [
        "paper"
      ],
      list: [
        "list"
      ]
    }, Tv, e);
  }, Ov = uA(qd, {
    shouldForwardProp: (A) => rt(A) || A === "classes",
    name: "MuiMenu",
    slot: "Root",
    overridesResolver: (A, e) => e.root
  })({}), Mv = uA(Zd, {
    name: "MuiMenu",
    slot: "Paper",
    overridesResolver: (A, e) => e.paper
  })({
    maxHeight: "calc(100% - 96px)",
    WebkitOverflowScrolling: "touch"
  }), Kv = uA(xv, {
    name: "MuiMenu",
    slot: "List",
    overridesResolver: (A, e) => e.list
  })({
    outline: 0
  }), Dv = h.forwardRef(function(e, t) {
    const r = GA({
      props: e,
      name: "MuiMenu"
    }), { autoFocus: n = true, children: o, className: i, disableAutoFocusItem: a = false, MenuListProps: s = {}, onClose: l, open: c, PaperProps: u = {}, PopoverClasses: d, transitionDuration: f = "auto", TransitionProps: { onEntering: p, ...B } = {}, variant: Q = "selectedMenu", slots: m = {}, slotProps: y = {}, ...w } = r, C = Rd(), U = {
      ...r,
      autoFocus: n,
      disableAutoFocusItem: a,
      MenuListProps: s,
      onEntering: p,
      PaperProps: u,
      transitionDuration: f,
      TransitionProps: B,
      variant: Q
    }, v = Rv(U), x = n && !a && c, H = h.useRef(null), I = (D, Y) => {
      H.current && H.current.adjustStyleForScrollbar(D, {
        direction: C ? "rtl" : "ltr"
      }), p && p(D, Y);
    }, g = (D) => {
      D.key === "Tab" && (D.preventDefault(), l && l(D, "tabKeyDown"));
    };
    let k = -1;
    h.Children.map(o, (D, Y) => {
      h.isValidElement(D) && (D.props.disabled || (Q === "selectedMenu" && D.props.selected || k === -1) && (k = Y));
    });
    const R = {
      slots: m,
      slotProps: {
        list: s,
        transition: B,
        paper: u,
        ...y
      }
    }, L = ft({
      elementType: m.root,
      externalSlotProps: y.root,
      ownerState: U,
      className: [
        v.root,
        i
      ]
    }), [K, M] = me("paper", {
      className: v.paper,
      elementType: Mv,
      externalForwardedProps: R,
      shouldForwardComponentProp: true,
      ownerState: U
    }), [O, j] = me("list", {
      className: wA(v.list, s.className),
      elementType: Kv,
      shouldForwardComponentProp: true,
      externalForwardedProps: R,
      getSlotProps: (D) => ({
        ...D,
        onKeyDown: (Y) => {
          var _a2;
          g(Y), (_a2 = D.onKeyDown) == null ? void 0 : _a2.call(D, Y);
        }
      }),
      ownerState: U
    }), N = typeof R.slotProps.transition == "function" ? R.slotProps.transition(U) : R.slotProps.transition;
    return E.jsx(Ov, {
      onClose: l,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: C ? "right" : "left"
      },
      transformOrigin: C ? kv : Lv,
      slots: {
        root: m.root,
        paper: K,
        backdrop: m.backdrop,
        ...m.transition && {
          transition: m.transition
        }
      },
      slotProps: {
        root: L,
        paper: M,
        backdrop: typeof y.backdrop == "function" ? y.backdrop(U) : y.backdrop,
        transition: {
          ...N,
          onEntering: (...D) => {
            var _a2;
            I(...D), (_a2 = N == null ? void 0 : N.onEntering) == null ? void 0 : _a2.call(N, ...D);
          }
        }
      },
      open: c,
      ref: t,
      transitionDuration: f,
      ownerState: U,
      ...w,
      classes: d,
      children: E.jsx(O, {
        actions: H,
        autoFocus: n && (k === -1 || a),
        autoFocusItem: x,
        variant: Q,
        ...j,
        children: o
      })
    });
  });
  function Pv(A) {
    return _A("MuiNativeSelect", A);
  }
  const ml = KA("MuiNativeSelect", [
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
  ]), _v = (A) => {
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
        `icon${yA(t)}`,
        o && "iconOpen",
        r && "disabled"
      ]
    };
    return NA(a, Pv, e);
  }, Af = uA("select", {
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
    [`&.${ml.disabled}`]: {
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
  })), Nv = uA(Af, {
    name: "MuiNativeSelect",
    slot: "Select",
    shouldForwardProp: rt,
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.select,
        e[t.variant],
        t.error && e.error,
        {
          [`&.${ml.multiple}`]: e.multiple
        }
      ];
    }
  })({}), ef = uA("svg", {
    name: "MuiNativeSelect"
  })(({ theme: A }) => ({
    position: "absolute",
    right: 0,
    top: "calc(50% - .5em)",
    pointerEvents: "none",
    color: (A.vars || A).palette.action.active,
    [`&.${ml.disabled}`]: {
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
  })), Gv = uA(ef, {
    name: "MuiNativeSelect",
    slot: "Icon",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.icon,
        t.variant && e[`icon${yA(t.variant)}`],
        t.open && e.iconOpen
      ];
    }
  })({}), Vv = h.forwardRef(function(e, t) {
    const { className: r, disabled: n, error: o, IconComponent: i, inputRef: a, variant: s = "standard", ...l } = e, c = {
      ...e,
      disabled: n,
      variant: s,
      error: o
    }, u = _v(c);
    return E.jsxs(h.Fragment, {
      children: [
        E.jsx(Nv, {
          ownerState: c,
          className: wA(u.select, r),
          disabled: n,
          ref: a || t,
          ...l
        }),
        e.multiple ? null : E.jsx(Gv, {
          as: i,
          ownerState: c,
          className: u.icon
        })
      ]
    });
  });
  var xc;
  const $v = uA("fieldset", {
    name: "MuiNotchedOutlined",
    shouldForwardProp: rt
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
  }), Wv = uA("legend", {
    name: "MuiNotchedOutlined",
    shouldForwardProp: rt
  })(EA(({ theme: A }) => ({
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
  function jv(A) {
    const { children: e, classes: t, className: r, label: n, notched: o, ...i } = A, a = n != null && n !== "", s = {
      ...A,
      notched: o,
      withLabel: a
    };
    return E.jsx($v, {
      "aria-hidden": true,
      className: r,
      ownerState: s,
      ...i,
      children: E.jsx(Wv, {
        ownerState: s,
        children: a ? E.jsx("span", {
          children: n
        }) : xc || (xc = E.jsx("span", {
          className: "notranslate",
          "aria-hidden": true,
          children: "\u200B"
        }))
      })
    });
  }
  const zv = (A) => {
    const { classes: e } = A, r = NA({
      root: [
        "root"
      ],
      notchedOutline: [
        "notchedOutline"
      ],
      input: [
        "input"
      ]
    }, fm, e);
    return {
      ...e,
      ...r
    };
  }, Xv = uA(_i, {
    shouldForwardProp: (A) => rt(A) || A === "classes",
    name: "MuiOutlinedInput",
    slot: "Root",
    overridesResolver: Di
  })(EA(({ theme: A }) => {
    const e = A.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
    return {
      position: "relative",
      borderRadius: (A.vars || A).shape.borderRadius,
      [`&:hover .${$e.notchedOutline}`]: {
        borderColor: (A.vars || A).palette.text.primary
      },
      "@media (hover: none)": {
        [`&:hover .${$e.notchedOutline}`]: {
          borderColor: A.vars ? `rgba(${A.vars.palette.common.onBackgroundChannel} / 0.23)` : e
        }
      },
      [`&.${$e.focused} .${$e.notchedOutline}`]: {
        borderWidth: 2
      },
      variants: [
        ...Object.entries(A.palette).filter(_e()).map(([t]) => ({
          props: {
            color: t
          },
          style: {
            [`&.${$e.focused} .${$e.notchedOutline}`]: {
              borderColor: (A.vars || A).palette[t].main
            }
          }
        })),
        {
          props: {},
          style: {
            [`&.${$e.error} .${$e.notchedOutline}`]: {
              borderColor: (A.vars || A).palette.error.main
            },
            [`&.${$e.disabled} .${$e.notchedOutline}`]: {
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
  })), Yv = uA(jv, {
    name: "MuiOutlinedInput",
    slot: "NotchedOutline",
    overridesResolver: (A, e) => e.notchedOutline
  })(EA(({ theme: A }) => {
    const e = A.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
    return {
      borderColor: A.vars ? `rgba(${A.vars.palette.common.onBackgroundChannel} / 0.23)` : e
    };
  })), Jv = uA(Ni, {
    name: "MuiOutlinedInput",
    slot: "Input",
    overridesResolver: Pi
  })(EA(({ theme: A }) => ({
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
  }))), vl = h.forwardRef(function(e, t) {
    const r = GA({
      props: e,
      name: "MuiOutlinedInput"
    }), { components: n = {}, fullWidth: o = false, inputComponent: i = "input", label: a, multiline: s = false, notched: l, slots: c = {}, slotProps: u = {}, type: d = "text", ...f } = r, p = zv(r), B = Er(), Q = xr({
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
      multiline: s,
      size: Q.size,
      type: d
    }, y = c.root ?? n.Root ?? Xv, w = c.input ?? n.Input ?? Jv, [C, U] = me("notchedOutline", {
      elementType: Yv,
      className: p.notchedOutline,
      shouldForwardComponentProp: true,
      ownerState: m,
      externalForwardedProps: {
        slots: c,
        slotProps: u
      },
      additionalProps: {
        label: a != null && a !== "" && Q.required ? E.jsxs(h.Fragment, {
          children: [
            a,
            "\u2009",
            "*"
          ]
        }) : a
      }
    });
    return E.jsx(gl, {
      slots: {
        root: y,
        input: w
      },
      slotProps: u,
      renderSuffix: (v) => E.jsx(C, {
        ...U,
        notched: typeof l < "u" ? l : !!(v.startAdornment || v.filled || v.focused)
      }),
      fullWidth: o,
      inputComponent: i,
      multiline: s,
      ref: t,
      type: d,
      ...f,
      classes: {
        ...p,
        notchedOutline: null
      }
    });
  });
  vl.muiName = "Input";
  function tf(A) {
    return _A("MuiSelect", A);
  }
  const Rr = KA("MuiSelect", [
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
  var Ec;
  const Zv = uA(Af, {
    name: "MuiSelect",
    slot: "Select",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        {
          [`&.${Rr.select}`]: e.select
        },
        {
          [`&.${Rr.select}`]: e[t.variant]
        },
        {
          [`&.${Rr.error}`]: e.error
        },
        {
          [`&.${Rr.multiple}`]: e.multiple
        }
      ];
    }
  })({
    [`&.${Rr.select}`]: {
      height: "auto",
      minHeight: "1.4375em",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden"
    }
  }), qv = uA(ef, {
    name: "MuiSelect",
    slot: "Icon",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.icon,
        t.variant && e[`icon${yA(t.variant)}`],
        t.open && e.iconOpen
      ];
    }
  })({}), Aw = uA("input", {
    shouldForwardProp: (A) => Ki(A) && A !== "classes",
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
  function Ic(A, e) {
    return typeof e == "object" && e !== null ? A === e : String(A) === String(e);
  }
  function ew(A) {
    return A == null || typeof A == "string" && !A.trim();
  }
  let tw, rw, nw, wl, ow, iw, aw;
  tw = (A) => {
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
        `icon${yA(t)}`,
        o && "iconOpen",
        r && "disabled"
      ],
      nativeInput: [
        "nativeInput"
      ]
    };
    return NA(a, tf, e);
  };
  rw = h.forwardRef(function(e, t) {
    var _a2;
    const { "aria-describedby": r, "aria-label": n, autoFocus: o, autoWidth: i, children: a, className: s, defaultOpen: l, defaultValue: c, disabled: u, displayEmpty: d, error: f = false, IconComponent: p, inputRef: B, labelId: Q, MenuProps: m = {}, multiple: y, name: w, onBlur: C, onChange: U, onClose: v, onFocus: x, onOpen: H, open: I, readOnly: g, renderValue: k, required: R, SelectDisplayProps: L = {}, tabIndex: K, type: M, value: O, variant: j = "standard", ...N } = e, [D, Y] = Xa({
      controlled: O,
      default: c,
      name: "Select"
    }), [X, oA] = Xa({
      controlled: I,
      default: l,
      name: "Select"
    }), P = h.useRef(null), z = h.useRef(null), [$, AA] = h.useState(null), { current: gA } = h.useRef(I != null), [cA, tA] = h.useState(), q = ye(t, B), aA = h.useCallback((lA) => {
      z.current = lA, lA && AA(lA);
    }, []), sA = $ == null ? void 0 : $.parentNode;
    h.useImperativeHandle(q, () => ({
      focus: () => {
        z.current.focus();
      },
      node: P.current,
      value: D
    }), [
      D
    ]), h.useEffect(() => {
      l && X && $ && !gA && (tA(i ? null : sA.clientWidth), z.current.focus());
    }, [
      $,
      i
    ]), h.useEffect(() => {
      o && z.current.focus();
    }, [
      o
    ]), h.useEffect(() => {
      if (!Q) return;
      const lA = Ce(z.current).getElementById(Q);
      if (lA) {
        const FA = () => {
          getSelection().isCollapsed && z.current.focus();
        };
        return lA.addEventListener("click", FA), () => {
          lA.removeEventListener("click", FA);
        };
      }
    }, [
      Q
    ]);
    const b = (lA, FA) => {
      lA ? H && H(FA) : v && v(FA), gA || (tA(i ? null : sA.clientWidth), oA(lA));
    }, S = (lA) => {
      lA.button === 0 && (lA.preventDefault(), z.current.focus(), b(true, lA));
    }, F = (lA) => {
      b(false, lA);
    }, G = h.Children.toArray(a), W = (lA) => {
      const FA = G.find((te) => te.props.value === lA.target.value);
      FA !== void 0 && (Y(FA.props.value), U && U(lA, FA));
    }, V = (lA) => (FA) => {
      let te;
      if (FA.currentTarget.hasAttribute("tabindex")) {
        if (y) {
          te = Array.isArray(D) ? D.slice() : [];
          const Ge = D.indexOf(lA.props.value);
          Ge === -1 ? te.push(lA.props.value) : te.splice(Ge, 1);
        } else te = lA.props.value;
        if (lA.props.onClick && lA.props.onClick(FA), D !== te && (Y(te), U)) {
          const Ge = FA.nativeEvent || FA, Hn = new Ge.constructor(Ge.type, Ge);
          Object.defineProperty(Hn, "target", {
            writable: true,
            value: {
              value: te,
              name: w
            }
          }), U(Hn, lA);
        }
        y || b(false, FA);
      }
    }, dA = (lA) => {
      g || [
        " ",
        "ArrowUp",
        "ArrowDown",
        "Enter"
      ].includes(lA.key) && (lA.preventDefault(), b(true, lA));
    }, pA = $ !== null && X, BA = (lA) => {
      !pA && C && (Object.defineProperty(lA, "target", {
        writable: true,
        value: {
          value: D,
          name: w
        }
      }), C(lA));
    };
    delete N["aria-invalid"];
    let rA, VA;
    const mA = [];
    let J = false;
    (Mo({
      value: D
    }) || d) && (k ? rA = k(D) : J = true);
    const Z = G.map((lA) => {
      if (!h.isValidElement(lA)) return null;
      let FA;
      if (y) {
        if (!Array.isArray(D)) throw new Error(gt(2));
        FA = D.some((te) => Ic(te, lA.props.value)), FA && J && mA.push(lA.props.children);
      } else FA = Ic(D, lA.props.value), FA && J && (VA = lA.props.children);
      return h.cloneElement(lA, {
        "aria-selected": FA ? "true" : "false",
        onClick: V(lA),
        onKeyUp: (te) => {
          te.key === " " && te.preventDefault(), lA.props.onKeyUp && lA.props.onKeyUp(te);
        },
        role: "option",
        selected: FA,
        value: void 0,
        "data-value": lA.props.value
      });
    });
    J && (y ? mA.length === 0 ? rA = null : rA = mA.reduce((lA, FA, te) => (lA.push(FA), te < mA.length - 1 && lA.push(", "), lA), []) : rA = VA);
    let fA = cA;
    !i && gA && $ && (fA = sA.clientWidth);
    let hA;
    typeof K < "u" ? hA = K : hA = u ? null : 0;
    const CA = L.id || (w ? `mui-component-select-${w}` : void 0), vA = {
      ...e,
      variant: j,
      value: D,
      open: pA,
      error: f
    }, bA = tw(vA), ee = {
      ...m.PaperProps,
      ...(_a2 = m.slotProps) == null ? void 0 : _a2.paper
    }, DA = Oi();
    return E.jsxs(h.Fragment, {
      children: [
        E.jsx(Zv, {
          as: "div",
          ref: aA,
          tabIndex: hA,
          role: "combobox",
          "aria-controls": pA ? DA : void 0,
          "aria-disabled": u ? "true" : void 0,
          "aria-expanded": pA ? "true" : "false",
          "aria-haspopup": "listbox",
          "aria-label": n,
          "aria-labelledby": [
            Q,
            CA
          ].filter(Boolean).join(" ") || void 0,
          "aria-describedby": r,
          "aria-required": R ? "true" : void 0,
          "aria-invalid": f ? "true" : void 0,
          onKeyDown: dA,
          onMouseDown: u || g ? null : S,
          onBlur: BA,
          onFocus: x,
          ...L,
          ownerState: vA,
          className: wA(L.className, bA.select, s),
          id: CA,
          children: ew(rA) ? Ec || (Ec = E.jsx("span", {
            className: "notranslate",
            "aria-hidden": true,
            children: "\u200B"
          })) : rA
        }),
        E.jsx(Aw, {
          "aria-invalid": f,
          value: Array.isArray(D) ? D.join(",") : D,
          name: w,
          ref: P,
          "aria-hidden": true,
          onChange: W,
          tabIndex: -1,
          disabled: u,
          className: bA.nativeInput,
          autoFocus: o,
          required: R,
          ...N,
          ownerState: vA
        }),
        E.jsx(qv, {
          as: p,
          className: bA.icon,
          ownerState: vA
        }),
        E.jsx(Dv, {
          id: `menu-${w || ""}`,
          anchorEl: sA,
          open: pA,
          onClose: F,
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
              "aria-multiselectable": y ? "true" : void 0,
              disableListWrap: true,
              id: DA,
              ...m.MenuListProps
            },
            paper: {
              ...ee,
              style: {
                minWidth: fA,
                ...ee != null ? ee.style : null
              }
            }
          },
          children: Z
        })
      ]
    });
  });
  nw = (A) => {
    const { classes: e } = A, r = NA({
      root: [
        "root"
      ]
    }, tf, e);
    return {
      ...e,
      ...r
    };
  };
  wl = {
    name: "MuiSelect",
    overridesResolver: (A, e) => e.root,
    shouldForwardProp: (A) => rt(A) && A !== "variant",
    slot: "Root"
  };
  ow = uA(Bl, wl)("");
  iw = uA(vl, wl)("");
  aw = uA(hl, wl)("");
  rf = h.forwardRef(function(e, t) {
    const r = GA({
      name: "MuiSelect",
      props: e
    }), { autoWidth: n = false, children: o, classes: i = {}, className: a, defaultOpen: s = false, displayEmpty: l = false, IconComponent: c = gm, id: u, input: d, inputProps: f, label: p, labelId: B, MenuProps: Q, multiple: m = false, native: y = false, onClose: w, onOpen: C, open: U, renderValue: v, SelectDisplayProps: x, variant: H = "outlined", ...I } = r, g = y ? Vv : rw, k = Er(), R = xr({
      props: r,
      muiFormControl: k,
      states: [
        "variant",
        "error"
      ]
    }), L = R.variant || H, K = {
      ...r,
      variant: L,
      classes: i
    }, M = nw(K), { root: O, ...j } = M, N = d || {
      standard: E.jsx(ow, {
        ownerState: K
      }),
      outlined: E.jsx(iw, {
        label: p,
        ownerState: K
      }),
      filled: E.jsx(aw, {
        ownerState: K
      })
    }[L], D = ye(t, Un(N));
    return E.jsx(h.Fragment, {
      children: h.cloneElement(N, {
        inputComponent: g,
        inputProps: {
          children: o,
          error: R.error,
          IconComponent: c,
          variant: L,
          type: void 0,
          multiple: m,
          ...y ? {
            id: u
          } : {
            autoWidth: n,
            defaultOpen: s,
            displayEmpty: l,
            labelId: B,
            MenuProps: Q,
            onClose: w,
            onOpen: C,
            open: U,
            renderValue: v,
            SelectDisplayProps: {
              id: u,
              ...x
            }
          },
          ...f,
          classes: f ? ie(j, f.classes) : j,
          ...d ? d.props.inputProps : {}
        },
        ...(m && y || l) && L === "outlined" ? {
          notched: true
        } : {},
        ref: D,
        className: wA(N.props.className, a, M.root),
        ...!d && {
          variant: L
        },
        ...I
      })
    });
  });
  rf.muiName = "Select";
  function sw(A, e, t = (r, n) => r === n) {
    return A.length === e.length && A.every((r, n) => t(r, e[n]));
  }
  const lw = 2;
  function tr(A, e, t, r, n) {
    return t === 1 ? Math.min(A + e, n) : Math.max(A - e, r);
  }
  function nf(A, e) {
    return A - e;
  }
  function Hc(A, e) {
    const { index: t } = A.reduce((r, n, o) => {
      const i = Math.abs(e - n);
      return r === null || i < r.distance || i === r.distance ? {
        distance: i,
        index: o
      } : r;
    }, null) ?? {};
    return t;
  }
  function Nn(A, e) {
    if (e.current !== void 0 && A.changedTouches) {
      const t = A;
      for (let r = 0; r < t.changedTouches.length; r += 1) {
        const n = t.changedTouches[r];
        if (n.identifier === e.current) return {
          x: n.clientX,
          y: n.clientY
        };
      }
      return false;
    }
    return {
      x: A.clientX,
      y: A.clientY
    };
  }
  function Do(A, e, t) {
    return (A - e) * 100 / (t - e);
  }
  function cw(A, e, t) {
    return (t - e) * A + e;
  }
  function uw(A) {
    if (Math.abs(A) < 1) {
      const t = A.toExponential().split("e-"), r = t[0].split(".")[1];
      return (r ? r.length : 0) + parseInt(t[1], 10);
    }
    const e = A.toString().split(".")[1];
    return e ? e.length : 0;
  }
  function dw(A, e, t) {
    const r = Math.round((A - t) / e) * e + t;
    return Number(r.toFixed(uw(e)));
  }
  function Tc({ values: A, newValue: e, index: t }) {
    const r = A.slice();
    return r[t] = e, r.sort(nf);
  }
  function Gn({ sliderRef: A, activeIndex: e, setActive: t }) {
    var _a2, _b2, _c2;
    const r = Ce(A.current);
    (!((_a2 = A.current) == null ? void 0 : _a2.contains(r.activeElement)) || Number((_b2 = r == null ? void 0 : r.activeElement) == null ? void 0 : _b2.getAttribute("data-index")) !== e) && ((_c2 = A.current) == null ? void 0 : _c2.querySelector(`[type="range"][data-index="${e}"]`).focus()), t && t(e);
  }
  function Vn(A, e) {
    return typeof A == "number" && typeof e == "number" ? A === e : typeof A == "object" && typeof e == "object" ? sw(A, e) : false;
  }
  const fw = {
    horizontal: {
      offset: (A) => ({
        left: `${A}%`
      }),
      leap: (A) => ({
        width: `${A}%`
      })
    },
    "horizontal-reverse": {
      offset: (A) => ({
        right: `${A}%`
      }),
      leap: (A) => ({
        width: `${A}%`
      })
    },
    vertical: {
      offset: (A) => ({
        bottom: `${A}%`
      }),
      leap: (A) => ({
        height: `${A}%`
      })
    }
  }, pw = (A) => A;
  let $n;
  function kc() {
    return $n === void 0 && (typeof CSS < "u" && typeof CSS.supports == "function" ? $n = CSS.supports("touch-action", "none") : $n = true), $n;
  }
  function gw(A) {
    const { "aria-labelledby": e, defaultValue: t, disabled: r = false, disableSwap: n = false, isRtl: o = false, marks: i = false, max: a = 100, min: s = 0, name: l, onChange: c, onChangeCommitted: u, orientation: d = "horizontal", rootRef: f, scale: p = pw, step: B = 1, shiftStep: Q = 10, tabIndex: m, value: y } = A, w = h.useRef(void 0), [C, U] = h.useState(-1), [v, x] = h.useState(-1), [H, I] = h.useState(false), g = h.useRef(0), k = h.useRef(null), [R, L] = Xa({
      controlled: y,
      default: t ?? s,
      name: "Slider"
    }), K = c && ((J, Z, fA) => {
      const hA = J.nativeEvent || J, CA = new hA.constructor(hA.type, hA);
      Object.defineProperty(CA, "target", {
        writable: true,
        value: {
          value: Z,
          name: l
        }
      }), k.current = Z, c(CA, Z, fA);
    }), M = Array.isArray(R);
    let O = M ? R.slice().sort(nf) : [
      R
    ];
    O = O.map((J) => J == null ? s : cr(J, s, a));
    const j = i === true && B !== null ? [
      ...Array(Math.floor((a - s) / B) + 1)
    ].map((J, Z) => ({
      value: s + B * Z
    })) : i || [], N = j.map((J) => J.value), [D, Y] = h.useState(-1), X = h.useRef(null), oA = ye(f, X), P = (J) => (Z) => {
      var _a2;
      const fA = Number(Z.currentTarget.getAttribute("data-index"));
      ko(Z.target) && Y(fA), x(fA), (_a2 = J == null ? void 0 : J.onFocus) == null ? void 0 : _a2.call(J, Z);
    }, z = (J) => (Z) => {
      var _a2;
      ko(Z.target) || Y(-1), x(-1), (_a2 = J == null ? void 0 : J.onBlur) == null ? void 0 : _a2.call(J, Z);
    }, $ = (J, Z) => {
      const fA = Number(J.currentTarget.getAttribute("data-index")), hA = O[fA], CA = N.indexOf(hA);
      let vA = Z;
      if (j && B == null) {
        const bA = N[N.length - 1];
        vA >= bA ? vA = bA : vA <= N[0] ? vA = N[0] : vA = vA < hA ? N[CA - 1] : N[CA + 1];
      }
      if (vA = cr(vA, s, a), M) {
        n && (vA = cr(vA, O[fA - 1] || -1 / 0, O[fA + 1] || 1 / 0));
        const bA = vA;
        vA = Tc({
          values: O,
          newValue: vA,
          index: fA
        });
        let ee = fA;
        n || (ee = vA.indexOf(bA)), Gn({
          sliderRef: X,
          activeIndex: ee
        });
      }
      L(vA), Y(fA), K && !Vn(vA, R) && K(J, vA, fA), u && u(J, k.current ?? vA);
    }, AA = (J) => (Z) => {
      var _a2;
      if ([
        "ArrowUp",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
        "PageUp",
        "PageDown",
        "Home",
        "End"
      ].includes(Z.key)) {
        Z.preventDefault();
        const fA = Number(Z.currentTarget.getAttribute("data-index")), hA = O[fA];
        let CA = null;
        if (B != null) {
          const vA = Z.shiftKey ? Q : B;
          switch (Z.key) {
            case "ArrowUp":
              CA = tr(hA, vA, 1, s, a);
              break;
            case "ArrowRight":
              CA = tr(hA, vA, o ? -1 : 1, s, a);
              break;
            case "ArrowDown":
              CA = tr(hA, vA, -1, s, a);
              break;
            case "ArrowLeft":
              CA = tr(hA, vA, o ? 1 : -1, s, a);
              break;
            case "PageUp":
              CA = tr(hA, Q, 1, s, a);
              break;
            case "PageDown":
              CA = tr(hA, Q, -1, s, a);
              break;
            case "Home":
              CA = s;
              break;
            case "End":
              CA = a;
              break;
          }
        } else if (j) {
          const vA = N[N.length - 1], bA = N.indexOf(hA), ee = [
            o ? "ArrowRight" : "ArrowLeft",
            "ArrowDown",
            "PageDown",
            "Home"
          ], DA = [
            o ? "ArrowLeft" : "ArrowRight",
            "ArrowUp",
            "PageUp",
            "End"
          ];
          ee.includes(Z.key) ? bA === 0 ? CA = N[0] : CA = N[bA - 1] : DA.includes(Z.key) && (bA === N.length - 1 ? CA = vA : CA = N[bA + 1]);
        }
        CA != null && $(Z, CA);
      }
      (_a2 = J == null ? void 0 : J.onKeyDown) == null ? void 0 : _a2.call(J, Z);
    };
    tt(() => {
      var _a2;
      r && X.current.contains(document.activeElement) && ((_a2 = document.activeElement) == null ? void 0 : _a2.blur());
    }, [
      r
    ]), r && C !== -1 && U(-1), r && D !== -1 && Y(-1);
    const gA = (J) => (Z) => {
      var _a2;
      (_a2 = J.onChange) == null ? void 0 : _a2.call(J, Z), $(Z, Z.target.valueAsNumber);
    }, cA = h.useRef(void 0);
    let tA = d;
    o && d === "horizontal" && (tA += "-reverse");
    const q = ({ finger: J, move: Z = false }) => {
      const { current: fA } = X, { width: hA, height: CA, bottom: vA, left: bA } = fA.getBoundingClientRect();
      let ee;
      tA.startsWith("vertical") ? ee = (vA - J.y) / CA : ee = (J.x - bA) / hA, tA.includes("-reverse") && (ee = 1 - ee);
      let DA;
      if (DA = cw(ee, s, a), B) DA = dw(DA, B, s);
      else {
        const FA = Hc(N, DA);
        DA = N[FA];
      }
      DA = cr(DA, s, a);
      let lA = 0;
      if (M) {
        Z ? lA = cA.current : lA = Hc(O, DA), n && (DA = cr(DA, O[lA - 1] || -1 / 0, O[lA + 1] || 1 / 0));
        const FA = DA;
        DA = Tc({
          values: O,
          newValue: DA,
          index: lA
        }), n && Z || (lA = DA.indexOf(FA), cA.current = lA);
      }
      return {
        newValue: DA,
        activeIndex: lA
      };
    }, aA = et((J) => {
      const Z = Nn(J, w);
      if (!Z) return;
      if (g.current += 1, J.type === "mousemove" && J.buttons === 0) {
        sA(J);
        return;
      }
      const { newValue: fA, activeIndex: hA } = q({
        finger: Z,
        move: true
      });
      Gn({
        sliderRef: X,
        activeIndex: hA,
        setActive: U
      }), L(fA), !H && g.current > lw && I(true), K && !Vn(fA, R) && K(J, fA, hA);
    }), sA = et((J) => {
      const Z = Nn(J, w);
      if (I(false), !Z) return;
      const { newValue: fA } = q({
        finger: Z,
        move: true
      });
      U(-1), J.type === "touchend" && x(-1), u && u(J, k.current ?? fA), w.current = void 0, S();
    }), b = et((J) => {
      if (r) return;
      kc() || J.preventDefault();
      const Z = J.changedTouches[0];
      Z != null && (w.current = Z.identifier);
      const fA = Nn(J, w);
      if (fA !== false) {
        const { newValue: CA, activeIndex: vA } = q({
          finger: fA
        });
        Gn({
          sliderRef: X,
          activeIndex: vA,
          setActive: U
        }), L(CA), K && !Vn(CA, R) && K(J, CA, vA);
      }
      g.current = 0;
      const hA = Ce(X.current);
      hA.addEventListener("touchmove", aA, {
        passive: true
      }), hA.addEventListener("touchend", sA, {
        passive: true
      });
    }), S = h.useCallback(() => {
      const J = Ce(X.current);
      J.removeEventListener("mousemove", aA), J.removeEventListener("mouseup", sA), J.removeEventListener("touchmove", aA), J.removeEventListener("touchend", sA);
    }, [
      sA,
      aA
    ]);
    h.useEffect(() => {
      const { current: J } = X;
      return J.addEventListener("touchstart", b, {
        passive: kc()
      }), () => {
        J.removeEventListener("touchstart", b), S();
      };
    }, [
      S,
      b
    ]), h.useEffect(() => {
      r && S();
    }, [
      r,
      S
    ]);
    const F = (J) => (Z) => {
      var _a2;
      if ((_a2 = J.onMouseDown) == null ? void 0 : _a2.call(J, Z), r || Z.defaultPrevented || Z.button !== 0) return;
      Z.preventDefault();
      const fA = Nn(Z, w);
      if (fA !== false) {
        const { newValue: CA, activeIndex: vA } = q({
          finger: fA
        });
        Gn({
          sliderRef: X,
          activeIndex: vA,
          setActive: U
        }), L(CA), K && !Vn(CA, R) && K(Z, CA, vA);
      }
      g.current = 0;
      const hA = Ce(X.current);
      hA.addEventListener("mousemove", aA, {
        passive: true
      }), hA.addEventListener("mouseup", sA);
    }, G = Do(M ? O[0] : s, s, a), W = Do(O[O.length - 1], s, a) - G, V = (J = {}) => {
      const Z = Zr(J), fA = {
        onMouseDown: F(Z || {})
      }, hA = {
        ...Z,
        ...fA
      };
      return {
        ...J,
        ref: oA,
        ...hA
      };
    }, dA = (J) => (Z) => {
      var _a2;
      (_a2 = J.onMouseOver) == null ? void 0 : _a2.call(J, Z);
      const fA = Number(Z.currentTarget.getAttribute("data-index"));
      x(fA);
    }, pA = (J) => (Z) => {
      var _a2;
      (_a2 = J.onMouseLeave) == null ? void 0 : _a2.call(J, Z), x(-1);
    }, BA = (J = {}) => {
      const Z = Zr(J), fA = {
        onMouseOver: dA(Z || {}),
        onMouseLeave: pA(Z || {})
      };
      return {
        ...J,
        ...Z,
        ...fA
      };
    }, rA = (J) => ({
      pointerEvents: C !== -1 && C !== J ? "none" : void 0
    });
    let VA;
    return d === "vertical" && (VA = o ? "vertical-rl" : "vertical-lr"), {
      active: C,
      axis: tA,
      axisProps: fw,
      dragging: H,
      focusedThumbIndex: D,
      getHiddenInputProps: (J = {}) => {
        const Z = Zr(J), fA = {
          onChange: gA(Z || {}),
          onFocus: P(Z || {}),
          onBlur: z(Z || {}),
          onKeyDown: AA(Z || {})
        }, hA = {
          ...Z,
          ...fA
        };
        return {
          tabIndex: m,
          "aria-labelledby": e,
          "aria-orientation": d,
          "aria-valuemax": p(a),
          "aria-valuemin": p(s),
          name: l,
          type: "range",
          min: A.min,
          max: A.max,
          step: A.step === null && A.marks ? "any" : A.step ?? void 0,
          disabled: r,
          ...J,
          ...hA,
          style: {
            ...eB,
            direction: o ? "rtl" : "ltr",
            width: "100%",
            height: "100%",
            writingMode: VA
          }
        };
      },
      getRootProps: V,
      getThumbProps: BA,
      marks: j,
      open: v,
      range: M,
      rootRef: oA,
      trackLeap: W,
      trackOffset: G,
      values: O,
      getThumbStyle: rA
    };
  }
  const hw = (A) => !A || !jt(A);
  function Bw(A) {
    return _A("MuiSlider", A);
  }
  const Le = KA("MuiSlider", [
    "root",
    "active",
    "colorPrimary",
    "colorSecondary",
    "colorError",
    "colorInfo",
    "colorSuccess",
    "colorWarning",
    "disabled",
    "dragging",
    "focusVisible",
    "mark",
    "markActive",
    "marked",
    "markLabel",
    "markLabelActive",
    "rail",
    "sizeSmall",
    "thumb",
    "thumbColorPrimary",
    "thumbColorSecondary",
    "thumbColorError",
    "thumbColorSuccess",
    "thumbColorInfo",
    "thumbColorWarning",
    "track",
    "trackInverted",
    "trackFalse",
    "thumbSizeSmall",
    "valueLabel",
    "valueLabelOpen",
    "valueLabelCircle",
    "valueLabelLabel",
    "vertical"
  ]), mw = (A) => {
    const { open: e } = A;
    return {
      offset: wA(e && Le.valueLabelOpen),
      circle: Le.valueLabelCircle,
      label: Le.valueLabelLabel
    };
  };
  function vw(A) {
    const { children: e, className: t, value: r } = A, n = mw(A);
    return e ? h.cloneElement(e, {
      className: wA(e.props.className)
    }, E.jsxs(h.Fragment, {
      children: [
        e.props.children,
        E.jsx("span", {
          className: wA(n.offset, t),
          "aria-hidden": true,
          children: E.jsx("span", {
            className: n.circle,
            children: E.jsx("span", {
              className: n.label,
              children: r
            })
          })
        })
      ]
    })) : null;
  }
  function Lc(A) {
    return A;
  }
  let ww, Cw, yw, bw, Qw, Fw, of, Uw, Sw;
  ww = uA("span", {
    name: "MuiSlider",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.root,
        e[`color${yA(t.color)}`],
        t.size !== "medium" && e[`size${yA(t.size)}`],
        t.marked && e.marked,
        t.orientation === "vertical" && e.vertical,
        t.track === "inverted" && e.trackInverted,
        t.track === false && e.trackFalse
      ];
    }
  })(EA(({ theme: A }) => ({
    borderRadius: 12,
    boxSizing: "content-box",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    touchAction: "none",
    WebkitTapHighlightColor: "transparent",
    "@media print": {
      colorAdjust: "exact"
    },
    [`&.${Le.disabled}`]: {
      pointerEvents: "none",
      cursor: "default",
      color: (A.vars || A).palette.grey[400]
    },
    [`&.${Le.dragging}`]: {
      [`& .${Le.thumb}, & .${Le.track}`]: {
        transition: "none"
      }
    },
    variants: [
      ...Object.entries(A.palette).filter(_e()).map(([e]) => ({
        props: {
          color: e
        },
        style: {
          color: (A.vars || A).palette[e].main
        }
      })),
      {
        props: {
          orientation: "horizontal"
        },
        style: {
          height: 4,
          width: "100%",
          padding: "13px 0",
          "@media (pointer: coarse)": {
            padding: "20px 0"
          }
        }
      },
      {
        props: {
          orientation: "horizontal",
          size: "small"
        },
        style: {
          height: 2
        }
      },
      {
        props: {
          orientation: "horizontal",
          marked: true
        },
        style: {
          marginBottom: 20
        }
      },
      {
        props: {
          orientation: "vertical"
        },
        style: {
          height: "100%",
          width: 4,
          padding: "0 13px",
          "@media (pointer: coarse)": {
            padding: "0 20px"
          }
        }
      },
      {
        props: {
          orientation: "vertical",
          size: "small"
        },
        style: {
          width: 2
        }
      },
      {
        props: {
          orientation: "vertical",
          marked: true
        },
        style: {
          marginRight: 44
        }
      }
    ]
  })));
  Cw = uA("span", {
    name: "MuiSlider",
    slot: "Rail",
    overridesResolver: (A, e) => e.rail
  })({
    display: "block",
    position: "absolute",
    borderRadius: "inherit",
    backgroundColor: "currentColor",
    opacity: 0.38,
    variants: [
      {
        props: {
          orientation: "horizontal"
        },
        style: {
          width: "100%",
          height: "inherit",
          top: "50%",
          transform: "translateY(-50%)"
        }
      },
      {
        props: {
          orientation: "vertical"
        },
        style: {
          height: "100%",
          width: "inherit",
          left: "50%",
          transform: "translateX(-50%)"
        }
      },
      {
        props: {
          track: "inverted"
        },
        style: {
          opacity: 1
        }
      }
    ]
  });
  yw = uA("span", {
    name: "MuiSlider",
    slot: "Track",
    overridesResolver: (A, e) => e.track
  })(EA(({ theme: A }) => ({
    display: "block",
    position: "absolute",
    borderRadius: "inherit",
    border: "1px solid currentColor",
    backgroundColor: "currentColor",
    transition: A.transitions.create([
      "left",
      "width",
      "bottom",
      "height"
    ], {
      duration: A.transitions.duration.shortest
    }),
    variants: [
      {
        props: {
          size: "small"
        },
        style: {
          border: "none"
        }
      },
      {
        props: {
          orientation: "horizontal"
        },
        style: {
          height: "inherit",
          top: "50%",
          transform: "translateY(-50%)"
        }
      },
      {
        props: {
          orientation: "vertical"
        },
        style: {
          width: "inherit",
          left: "50%",
          transform: "translateX(-50%)"
        }
      },
      {
        props: {
          track: false
        },
        style: {
          display: "none"
        }
      },
      ...Object.entries(A.palette).filter(_e()).map(([e]) => ({
        props: {
          color: e,
          track: "inverted"
        },
        style: {
          ...A.vars ? {
            backgroundColor: A.vars.palette.Slider[`${e}Track`],
            borderColor: A.vars.palette.Slider[`${e}Track`]
          } : {
            backgroundColor: pn(A.palette[e].main, 0.62),
            borderColor: pn(A.palette[e].main, 0.62),
            ...A.applyStyles("dark", {
              backgroundColor: fn(A.palette[e].main, 0.5)
            }),
            ...A.applyStyles("dark", {
              borderColor: fn(A.palette[e].main, 0.5)
            })
          }
        }
      }))
    ]
  })));
  bw = uA("span", {
    name: "MuiSlider",
    slot: "Thumb",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.thumb,
        e[`thumbColor${yA(t.color)}`],
        t.size !== "medium" && e[`thumbSize${yA(t.size)}`]
      ];
    }
  })(EA(({ theme: A }) => ({
    position: "absolute",
    width: 20,
    height: 20,
    boxSizing: "border-box",
    borderRadius: "50%",
    outline: 0,
    backgroundColor: "currentColor",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: A.transitions.create([
      "box-shadow",
      "left",
      "bottom"
    ], {
      duration: A.transitions.duration.shortest
    }),
    "&::before": {
      position: "absolute",
      content: '""',
      borderRadius: "inherit",
      width: "100%",
      height: "100%",
      boxShadow: (A.vars || A).shadows[2]
    },
    "&::after": {
      position: "absolute",
      content: '""',
      borderRadius: "50%",
      width: 42,
      height: 42,
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)"
    },
    [`&.${Le.disabled}`]: {
      "&:hover": {
        boxShadow: "none"
      }
    },
    variants: [
      {
        props: {
          size: "small"
        },
        style: {
          width: 12,
          height: 12,
          "&::before": {
            boxShadow: "none"
          }
        }
      },
      {
        props: {
          orientation: "horizontal"
        },
        style: {
          top: "50%",
          transform: "translate(-50%, -50%)"
        }
      },
      {
        props: {
          orientation: "vertical"
        },
        style: {
          left: "50%",
          transform: "translate(-50%, 50%)"
        }
      },
      ...Object.entries(A.palette).filter(_e()).map(([e]) => ({
        props: {
          color: e
        },
        style: {
          [`&:hover, &.${Le.focusVisible}`]: {
            ...A.vars ? {
              boxShadow: `0px 0px 0px 8px rgba(${A.vars.palette[e].mainChannel} / 0.16)`
            } : {
              boxShadow: `0px 0px 0px 8px ${kt(A.palette[e].main, 0.16)}`
            },
            "@media (hover: none)": {
              boxShadow: "none"
            }
          },
          [`&.${Le.active}`]: {
            ...A.vars ? {
              boxShadow: `0px 0px 0px 14px rgba(${A.vars.palette[e].mainChannel} / 0.16)`
            } : {
              boxShadow: `0px 0px 0px 14px ${kt(A.palette[e].main, 0.16)}`
            }
          }
        }
      }))
    ]
  })));
  Qw = uA(vw, {
    name: "MuiSlider",
    slot: "ValueLabel",
    overridesResolver: (A, e) => e.valueLabel
  })(EA(({ theme: A }) => ({
    zIndex: 1,
    whiteSpace: "nowrap",
    ...A.typography.body2,
    fontWeight: 500,
    transition: A.transitions.create([
      "transform"
    ], {
      duration: A.transitions.duration.shortest
    }),
    position: "absolute",
    backgroundColor: (A.vars || A).palette.grey[600],
    borderRadius: 2,
    color: (A.vars || A).palette.common.white,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.25rem 0.75rem",
    variants: [
      {
        props: {
          orientation: "horizontal"
        },
        style: {
          transform: "translateY(-100%) scale(0)",
          top: "-10px",
          transformOrigin: "bottom center",
          "&::before": {
            position: "absolute",
            content: '""',
            width: 8,
            height: 8,
            transform: "translate(-50%, 50%) rotate(45deg)",
            backgroundColor: "inherit",
            bottom: 0,
            left: "50%"
          },
          [`&.${Le.valueLabelOpen}`]: {
            transform: "translateY(-100%) scale(1)"
          }
        }
      },
      {
        props: {
          orientation: "vertical"
        },
        style: {
          transform: "translateY(-50%) scale(0)",
          right: "30px",
          top: "50%",
          transformOrigin: "right center",
          "&::before": {
            position: "absolute",
            content: '""',
            width: 8,
            height: 8,
            transform: "translate(-50%, -50%) rotate(45deg)",
            backgroundColor: "inherit",
            right: -8,
            top: "50%"
          },
          [`&.${Le.valueLabelOpen}`]: {
            transform: "translateY(-50%) scale(1)"
          }
        }
      },
      {
        props: {
          size: "small"
        },
        style: {
          fontSize: A.typography.pxToRem(12),
          padding: "0.25rem 0.5rem"
        }
      },
      {
        props: {
          orientation: "vertical",
          size: "small"
        },
        style: {
          right: "20px"
        }
      }
    ]
  })));
  Fw = uA("span", {
    name: "MuiSlider",
    slot: "Mark",
    shouldForwardProp: (A) => Ki(A) && A !== "markActive",
    overridesResolver: (A, e) => {
      const { markActive: t } = A;
      return [
        e.mark,
        t && e.markActive
      ];
    }
  })(EA(({ theme: A }) => ({
    position: "absolute",
    width: 2,
    height: 2,
    borderRadius: 1,
    backgroundColor: "currentColor",
    variants: [
      {
        props: {
          orientation: "horizontal"
        },
        style: {
          top: "50%",
          transform: "translate(-1px, -50%)"
        }
      },
      {
        props: {
          orientation: "vertical"
        },
        style: {
          left: "50%",
          transform: "translate(-50%, 1px)"
        }
      },
      {
        props: {
          markActive: true
        },
        style: {
          backgroundColor: (A.vars || A).palette.background.paper,
          opacity: 0.8
        }
      }
    ]
  })));
  of = uA("span", {
    name: "MuiSlider",
    slot: "MarkLabel",
    shouldForwardProp: (A) => Ki(A) && A !== "markLabelActive",
    overridesResolver: (A, e) => e.markLabel
  })(EA(({ theme: A }) => ({
    ...A.typography.body2,
    color: (A.vars || A).palette.text.secondary,
    position: "absolute",
    whiteSpace: "nowrap",
    variants: [
      {
        props: {
          orientation: "horizontal"
        },
        style: {
          top: 30,
          transform: "translateX(-50%)",
          "@media (pointer: coarse)": {
            top: 40
          }
        }
      },
      {
        props: {
          orientation: "vertical"
        },
        style: {
          left: 36,
          transform: "translateY(50%)",
          "@media (pointer: coarse)": {
            left: 44
          }
        }
      },
      {
        props: {
          markLabelActive: true
        },
        style: {
          color: (A.vars || A).palette.text.primary
        }
      }
    ]
  })));
  Uw = (A) => {
    const { disabled: e, dragging: t, marked: r, orientation: n, track: o, classes: i, color: a, size: s } = A, l = {
      root: [
        "root",
        e && "disabled",
        t && "dragging",
        r && "marked",
        n === "vertical" && "vertical",
        o === "inverted" && "trackInverted",
        o === false && "trackFalse",
        a && `color${yA(a)}`,
        s && `size${yA(s)}`
      ],
      rail: [
        "rail"
      ],
      track: [
        "track"
      ],
      mark: [
        "mark"
      ],
      markActive: [
        "markActive"
      ],
      markLabel: [
        "markLabel"
      ],
      markLabelActive: [
        "markLabelActive"
      ],
      valueLabel: [
        "valueLabel"
      ],
      thumb: [
        "thumb",
        e && "disabled",
        s && `thumbSize${yA(s)}`,
        a && `thumbColor${yA(a)}`
      ],
      active: [
        "active"
      ],
      disabled: [
        "disabled"
      ],
      focusVisible: [
        "focusVisible"
      ]
    };
    return NA(l, Bw, i);
  };
  Sw = ({ children: A }) => A;
  xw = h.forwardRef(function(e, t) {
    const r = GA({
      props: e,
      name: "MuiSlider"
    }), n = Rd(), { "aria-label": o, "aria-valuetext": i, "aria-labelledby": a, component: s = "span", components: l = {}, componentsProps: c = {}, color: u = "primary", classes: d, className: f, disableSwap: p = false, disabled: B = false, getAriaLabel: Q, getAriaValueText: m, marks: y = false, max: w = 100, min: C = 0, name: U, onChange: v, onChangeCommitted: x, orientation: H = "horizontal", shiftStep: I = 10, size: g = "medium", step: k = 1, scale: R = Lc, slotProps: L, slots: K, tabIndex: M, track: O = "normal", value: j, valueLabelDisplay: N = "off", valueLabelFormat: D = Lc, ...Y } = r, X = {
      ...r,
      isRtl: n,
      max: w,
      min: C,
      classes: d,
      disabled: B,
      disableSwap: p,
      orientation: H,
      marks: y,
      color: u,
      size: g,
      step: k,
      shiftStep: I,
      scale: R,
      track: O,
      valueLabelDisplay: N,
      valueLabelFormat: D
    }, { axisProps: oA, getRootProps: P, getHiddenInputProps: z, getThumbProps: $, open: AA, active: gA, axis: cA, focusedThumbIndex: tA, range: q, dragging: aA, marks: sA, values: b, trackOffset: S, trackLeap: F, getThumbStyle: G } = gw({
      ...X,
      rootRef: t
    });
    X.marked = sA.length > 0 && sA.some((ZA) => ZA.label), X.dragging = aA, X.focusedThumbIndex = tA;
    const W = Uw(X), V = (K == null ? void 0 : K.root) ?? l.Root ?? ww, dA = (K == null ? void 0 : K.rail) ?? l.Rail ?? Cw, pA = (K == null ? void 0 : K.track) ?? l.Track ?? yw, BA = (K == null ? void 0 : K.thumb) ?? l.Thumb ?? bw, rA = (K == null ? void 0 : K.valueLabel) ?? l.ValueLabel ?? Qw, VA = (K == null ? void 0 : K.mark) ?? l.Mark ?? Fw, mA = (K == null ? void 0 : K.markLabel) ?? l.MarkLabel ?? of, J = (K == null ? void 0 : K.input) ?? l.Input ?? "input", Z = (L == null ? void 0 : L.root) ?? c.root, fA = (L == null ? void 0 : L.rail) ?? c.rail, hA = (L == null ? void 0 : L.track) ?? c.track, CA = (L == null ? void 0 : L.thumb) ?? c.thumb, vA = (L == null ? void 0 : L.valueLabel) ?? c.valueLabel, bA = (L == null ? void 0 : L.mark) ?? c.mark, ee = (L == null ? void 0 : L.markLabel) ?? c.markLabel, DA = (L == null ? void 0 : L.input) ?? c.input, lA = ft({
      elementType: V,
      getSlotProps: P,
      externalSlotProps: Z,
      externalForwardedProps: Y,
      additionalProps: {
        ...hw(V) && {
          as: s
        }
      },
      ownerState: {
        ...X,
        ...Z == null ? void 0 : Z.ownerState
      },
      className: [
        W.root,
        f
      ]
    }), FA = ft({
      elementType: dA,
      externalSlotProps: fA,
      ownerState: X,
      className: W.rail
    }), te = ft({
      elementType: pA,
      externalSlotProps: hA,
      additionalProps: {
        style: {
          ...oA[cA].offset(S),
          ...oA[cA].leap(F)
        }
      },
      ownerState: {
        ...X,
        ...hA == null ? void 0 : hA.ownerState
      },
      className: W.track
    }), Ge = ft({
      elementType: BA,
      getSlotProps: $,
      externalSlotProps: CA,
      ownerState: {
        ...X,
        ...CA == null ? void 0 : CA.ownerState
      },
      className: W.thumb
    }), Hn = ft({
      elementType: rA,
      externalSlotProps: vA,
      ownerState: {
        ...X,
        ...vA == null ? void 0 : vA.ownerState
      },
      className: W.valueLabel
    }), ea = ft({
      elementType: VA,
      externalSlotProps: bA,
      ownerState: X,
      className: W.mark
    }), ta = ft({
      elementType: mA,
      externalSlotProps: ee,
      ownerState: X,
      className: W.markLabel
    }), Qp = ft({
      elementType: J,
      getSlotProps: z,
      externalSlotProps: DA,
      ownerState: X
    });
    return E.jsxs(V, {
      ...lA,
      children: [
        E.jsx(dA, {
          ...FA
        }),
        E.jsx(pA, {
          ...te
        }),
        sA.filter((ZA) => ZA.value >= C && ZA.value <= w).map((ZA, se) => {
          const ra = Do(ZA.value, C, w), Tn = oA[cA].offset(ra);
          let st;
          return O === false ? st = b.includes(ZA.value) : st = O === "normal" && (q ? ZA.value >= b[0] && ZA.value <= b[b.length - 1] : ZA.value <= b[0]) || O === "inverted" && (q ? ZA.value <= b[0] || ZA.value >= b[b.length - 1] : ZA.value >= b[0]), E.jsxs(h.Fragment, {
            children: [
              E.jsx(VA, {
                "data-index": se,
                ...ea,
                ...!jt(VA) && {
                  markActive: st
                },
                style: {
                  ...Tn,
                  ...ea.style
                },
                className: wA(ea.className, st && W.markActive)
              }),
              ZA.label != null ? E.jsx(mA, {
                "aria-hidden": true,
                "data-index": se,
                ...ta,
                ...!jt(mA) && {
                  markLabelActive: st
                },
                style: {
                  ...Tn,
                  ...ta.style
                },
                className: wA(W.markLabel, ta.className, st && W.markLabelActive),
                children: ZA.label
              }) : null
            ]
          }, se);
        }),
        b.map((ZA, se) => {
          const ra = Do(ZA, C, w), Tn = oA[cA].offset(ra), st = N === "off" ? Sw : rA;
          return E.jsx(st, {
            ...!jt(st) && {
              valueLabelFormat: D,
              valueLabelDisplay: N,
              value: typeof D == "function" ? D(R(ZA), se) : D,
              index: se,
              open: AA === se || gA === se || N === "on",
              disabled: B
            },
            ...Hn,
            children: E.jsx(BA, {
              "data-index": se,
              ...Ge,
              className: wA(W.thumb, Ge.className, gA === se && W.active, tA === se && W.focusVisible),
              style: {
                ...Tn,
                ...G(se),
                ...Ge.style
              },
              children: E.jsx(J, {
                "data-index": se,
                "aria-label": Q ? Q(se) : o,
                "aria-valuenow": R(ZA),
                "aria-labelledby": a,
                "aria-valuetext": m ? m(R(ZA), se) : i,
                value: b[se],
                ...Qp
              })
            })
          }, se);
        })
      ]
    });
  });
  function Ew(A) {
    return _A("MuiTextField", A);
  }
  KA("MuiTextField", [
    "root"
  ]);
  const Iw = {
    standard: Bl,
    filled: hl,
    outlined: vl
  }, Hw = (A) => {
    const { classes: e } = A;
    return NA({
      root: [
        "root"
      ]
    }, Ew, e);
  }, Tw = uA(ov, {
    name: "MuiTextField",
    slot: "Root",
    overridesResolver: (A, e) => e.root
  })({}), kw = h.forwardRef(function(e, t) {
    const r = GA({
      props: e,
      name: "MuiTextField"
    }), { autoComplete: n, autoFocus: o = false, children: i, className: a, color: s = "primary", defaultValue: l, disabled: c = false, error: u = false, FormHelperTextProps: d, fullWidth: f = false, helperText: p, id: B, InputLabelProps: Q, inputProps: m, InputProps: y, inputRef: w, label: C, maxRows: U, minRows: v, multiline: x = false, name: H, onBlur: I, onChange: g, onFocus: k, placeholder: R, required: L = false, rows: K, select: M = false, SelectProps: O, slots: j = {}, slotProps: N = {}, type: D, value: Y, variant: X = "outlined", ...oA } = r, P = {
      ...r,
      autoFocus: o,
      color: s,
      disabled: c,
      error: u,
      fullWidth: f,
      multiline: x,
      required: L,
      select: M,
      variant: X
    }, z = Hw(P), $ = Oi(B), AA = p && $ ? `${$}-helper-text` : void 0, gA = C && $ ? `${$}-label` : void 0, cA = Iw[X], tA = {
      slots: j,
      slotProps: {
        input: y,
        inputLabel: Q,
        htmlInput: m,
        formHelperText: d,
        select: O,
        ...N
      }
    }, q = {}, aA = tA.slotProps.inputLabel;
    X === "outlined" && (aA && typeof aA.shrink < "u" && (q.notched = aA.shrink), q.label = C), M && ((!O || !O.native) && (q.id = void 0), q["aria-describedby"] = void 0);
    const [sA, b] = me("root", {
      elementType: Tw,
      shouldForwardComponentProp: true,
      externalForwardedProps: {
        ...tA,
        ...oA
      },
      ownerState: P,
      className: wA(z.root, a),
      ref: t,
      additionalProps: {
        disabled: c,
        error: u,
        fullWidth: f,
        required: L,
        color: s,
        variant: X
      }
    }), [S, F] = me("input", {
      elementType: cA,
      externalForwardedProps: tA,
      additionalProps: q,
      ownerState: P
    }), [G, W] = me("inputLabel", {
      elementType: yv,
      externalForwardedProps: tA,
      ownerState: P
    }), [V, dA] = me("htmlInput", {
      elementType: "input",
      externalForwardedProps: tA,
      ownerState: P
    }), [pA, BA] = me("formHelperText", {
      elementType: lv,
      externalForwardedProps: tA,
      ownerState: P
    }), [rA, VA] = me("select", {
      elementType: rf,
      externalForwardedProps: tA,
      ownerState: P
    }), mA = E.jsx(S, {
      "aria-describedby": AA,
      autoComplete: n,
      autoFocus: o,
      defaultValue: l,
      fullWidth: f,
      multiline: x,
      name: H,
      rows: K,
      maxRows: U,
      minRows: v,
      type: D,
      value: Y,
      id: $,
      inputRef: w,
      onBlur: I,
      onChange: g,
      onFocus: k,
      placeholder: R,
      inputProps: dA,
      slots: {
        input: j.htmlInput ? V : void 0
      },
      ...F
    });
    return E.jsxs(sA, {
      ...b,
      children: [
        C != null && C !== "" && E.jsx(G, {
          htmlFor: $,
          id: gA,
          ...W,
          children: C
        }),
        M ? E.jsx(rA, {
          "aria-describedby": AA,
          id: $,
          labelId: gA,
          value: Y,
          input: mA,
          ...VA,
          children: i
        }) : mA,
        p && E.jsx(pA, {
          id: AA,
          ...BA,
          children: p
        })
      ]
    });
  });
  Lw = class extends window.visRxWidget {
    wrappedCollectionContent = true;
    static getI18nPrefix() {
      return "vis_2_widgets_collection_";
    }
    getPropertyValue = (e) => this.state.values[`${this.state.rxData[e]}.val`];
    setValue = (e, t, r = false) => {
      !e || e === "nothing_selected" || this.props.context.socket.setState(e, t, r).catch((n) => console.error(`Cannot set state ${e}: ${n}`));
    };
    wrapContent(e) {
      return E.jsx(E.Fragment, {
        children: E.jsx(ue, {
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
          children: E.jsx(ue, {
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
  let Rw, Cl;
  Rw = [
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
  Cl = (A) => {
    const [e, t] = h.useState({}), [r, n] = h.useState({}), [o, i] = h.useState({}), [a, s] = h.useState({}), [l, c] = h.useState({}), u = JSON.stringify(A), d = h.useMemo(() => {
      const f = {}, p = {}, B = {}, Q = {}, m = {}, y = JSON.parse(u);
      return Rw.forEach((w) => {
        if (y[w]) {
          const C = w.replace(/(-\w)/g, (U) => U[1].toUpperCase());
          w.includes("background") ? f[C] = y[w] : w.includes("border") ? p[C] = y[w] : w.includes("font") || w.includes("line-height") || w.includes("letter-spacing") || w.includes("word-spacing") ? Q[C] = y[w] : w.includes("text") || w.includes("color") ? B[C] = y[w] : m[C] = y[w];
        }
      }), {
        _backgroundStyles: f,
        _borderStyles: p,
        _textStyles: B,
        _fontStyles: Q,
        _boxStyles: m
      };
    }, [
      u
    ]);
    return h.useEffect(() => {
      t(d._backgroundStyles), n(d._borderStyles), i(d._textStyles), s(d._fontStyles), c(d._boxStyles);
    }, [
      d
    ]), {
      boxStyles: l,
      backgroundStyles: e,
      borderStyles: r,
      textStyles: o,
      fontStyles: a
    };
  };
  ot = h.createContext({});
  function Ow({ children: A, context: e }) {
    const t = e.theme, r = e.widget, { fontStyles: n, textStyles: o } = Cl(r.style || {}), i = h.useMemo(() => Mi(ie(t, {
      components: {
        MuiTypography: {
          styleOverrides: {
            root: {
              ...n,
              ...o,
              color: o.color || t.palette.primary.main
            }
          }
        }
      }
    })), [
      t,
      n,
      o
    ]);
    return E.jsxs($d, {
      theme: i,
      children: [
        E.jsx(xm, {}),
        E.jsx(ot.Provider, {
          value: e,
          children: A
        })
      ]
    });
  }
  Mw = function(A, e) {
    return E.jsx(Ow, {
      context: e,
      children: A
    });
  };
  let Kw, pa, Dw, Gw;
  Kw = async (A, e) => {
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
  pa = (A, e = "oid") => {
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
  Dw = (A, e) => {
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
  Pw = (A, e = "oid") => async (t, r, n, o) => {
    if (!r[e]) {
      pa(r, e), setTimeout(() => n(r), 100);
      return;
    }
    try {
      const i = await o.getObject(r[e]);
      if (!i) {
        pa(r, e), setTimeout(() => n(r), 100);
        return;
      }
      const a = i.common.type;
      if (!A.includes(a)) return;
      const s = {
        _id: i._id,
        name: i.common.name || "",
        type: a,
        icon: await Kw(o, i),
        write: i.common.write,
        onlyDisplay: !i.common.write,
        unit: i.common.unit || "",
        minValue: i.common.min || 0,
        maxValue: i.common.max || 100
      };
      if (r[`${e}Object`] = s, r.icon = s.icon, r.write = s.write, r.onlyDisplay = s.onlyDisplay, r.minValue = s.minValue, r.maxValue = s.maxValue, i.common.states) {
        let l = i.common.states;
        if (Array.isArray(l)) {
          const c = {};
          l.forEach((u) => {
            c[u] = u;
          }), l = c;
        }
        r[`${e}Object`].commonStates = l, e === "oid" && (r.values_count = Object.keys(l).length, Object.entries(l).forEach(([c, u], d) => {
          const f = d + 1;
          r[`value${f}`] = Dw(c, a), r[`alias${f}`] = String(u);
        }));
      } else a === "boolean" && e === "oid" ? (r.values_count = 2, r.value1 = true, r.alias1 = "TRUE", r.value2 = false, r.alias2 = "FALSE") : e === "oid" && (r.values_count = 0);
      setTimeout(() => n(r), 100);
    } catch (i) {
      console.error(`Error handling OID change for ${r[e]}:`, i), pa(r, e), setTimeout(() => n(r), 100);
    }
  };
  _w = (A) => [
    {
      name: "oid",
      type: "id",
      label: "oid",
      onChange: Pw(A)
    },
    {
      label: "",
      type: "custom",
      component: () => E.jsx(OA, {}),
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
      component: () => E.jsx(OA, {}),
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
  Nw = () => [
    {
      label: "",
      type: "custom",
      component: () => E.jsx(OA, {
        dividerText: "write_value"
      })
    },
    {
      name: "sampleInterval",
      type: "checkbox",
      label: "sample_interval",
      default: false
    },
    {
      name: "sampleIntervalValue",
      type: "number",
      label: "sample_interval_value",
      default: 200,
      min: 0,
      max: 1e4,
      step: 1,
      hidden: "!data.sampleInterval"
    },
    {
      name: "delay",
      type: "number",
      label: "delay",
      default: 300,
      min: 0,
      max: 1e4,
      step: 1,
      hidden: "data.sampleInterval"
    }
  ];
  Gw = Wd(E.jsx("path", {
    d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
  }), "Delete");
  var af = {
    exports: {}
  };
  (function(A) {
    (function(e) {
      var t = /^\s+/, r = /\s+$/, n = 0, o = e.round, i = e.min, a = e.max, s = e.random;
      function l(b, S) {
        if (b = b || "", S = S || {}, b instanceof l) return b;
        if (!(this instanceof l)) return new l(b, S);
        var F = c(b);
        this._originalInput = b, this._r = F.r, this._g = F.g, this._b = F.b, this._a = F.a, this._roundA = o(100 * this._a) / 100, this._format = S.format || F.format, this._gradientType = S.gradientType, this._r < 1 && (this._r = o(this._r)), this._g < 1 && (this._g = o(this._g)), this._b < 1 && (this._b = o(this._b)), this._ok = F.ok, this._tc_id = n++;
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
          var b = this.toRgb();
          return (b.r * 299 + b.g * 587 + b.b * 114) / 1e3;
        },
        getLuminance: function() {
          var b = this.toRgb(), S, F, G, W, V, dA;
          return S = b.r / 255, F = b.g / 255, G = b.b / 255, S <= 0.03928 ? W = S / 12.92 : W = e.pow((S + 0.055) / 1.055, 2.4), F <= 0.03928 ? V = F / 12.92 : V = e.pow((F + 0.055) / 1.055, 2.4), G <= 0.03928 ? dA = G / 12.92 : dA = e.pow((G + 0.055) / 1.055, 2.4), 0.2126 * W + 0.7152 * V + 0.0722 * dA;
        },
        setAlpha: function(b) {
          return this._a = D(b), this._roundA = o(100 * this._a) / 100, this;
        },
        toHsv: function() {
          var b = p(this._r, this._g, this._b);
          return {
            h: b.h * 360,
            s: b.s,
            v: b.v,
            a: this._a
          };
        },
        toHsvString: function() {
          var b = p(this._r, this._g, this._b), S = o(b.h * 360), F = o(b.s * 100), G = o(b.v * 100);
          return this._a == 1 ? "hsv(" + S + ", " + F + "%, " + G + "%)" : "hsva(" + S + ", " + F + "%, " + G + "%, " + this._roundA + ")";
        },
        toHsl: function() {
          var b = d(this._r, this._g, this._b);
          return {
            h: b.h * 360,
            s: b.s,
            l: b.l,
            a: this._a
          };
        },
        toHslString: function() {
          var b = d(this._r, this._g, this._b), S = o(b.h * 360), F = o(b.s * 100), G = o(b.l * 100);
          return this._a == 1 ? "hsl(" + S + ", " + F + "%, " + G + "%)" : "hsla(" + S + ", " + F + "%, " + G + "%, " + this._roundA + ")";
        },
        toHex: function(b) {
          return Q(this._r, this._g, this._b, b);
        },
        toHexString: function(b) {
          return "#" + this.toHex(b);
        },
        toHex8: function(b) {
          return m(this._r, this._g, this._b, this._a, b);
        },
        toHex8String: function(b) {
          return "#" + this.toHex8(b);
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
            r: o(Y(this._r, 255) * 100) + "%",
            g: o(Y(this._g, 255) * 100) + "%",
            b: o(Y(this._b, 255) * 100) + "%",
            a: this._a
          };
        },
        toPercentageRgbString: function() {
          return this._a == 1 ? "rgb(" + o(Y(this._r, 255) * 100) + "%, " + o(Y(this._g, 255) * 100) + "%, " + o(Y(this._b, 255) * 100) + "%)" : "rgba(" + o(Y(this._r, 255) * 100) + "%, " + o(Y(this._g, 255) * 100) + "%, " + o(Y(this._b, 255) * 100) + "%, " + this._roundA + ")";
        },
        toName: function() {
          return this._a === 0 ? "transparent" : this._a < 1 ? false : j[Q(this._r, this._g, this._b, true)] || false;
        },
        toFilter: function(b) {
          var S = "#" + y(this._r, this._g, this._b, this._a), F = S, G = this._gradientType ? "GradientType = 1, " : "";
          if (b) {
            var W = l(b);
            F = "#" + y(W._r, W._g, W._b, W._a);
          }
          return "progid:DXImageTransform.Microsoft.gradient(" + G + "startColorstr=" + S + ",endColorstr=" + F + ")";
        },
        toString: function(b) {
          var S = !!b;
          b = b || this._format;
          var F = false, G = this._a < 1 && this._a >= 0, W = !S && G && (b === "hex" || b === "hex6" || b === "hex3" || b === "hex4" || b === "hex8" || b === "name");
          return W ? b === "name" && this._a === 0 ? this.toName() : this.toRgbString() : (b === "rgb" && (F = this.toRgbString()), b === "prgb" && (F = this.toPercentageRgbString()), (b === "hex" || b === "hex6") && (F = this.toHexString()), b === "hex3" && (F = this.toHexString(true)), b === "hex4" && (F = this.toHex8String(true)), b === "hex8" && (F = this.toHex8String()), b === "name" && (F = this.toName()), b === "hsl" && (F = this.toHslString()), b === "hsv" && (F = this.toHsvString()), F || this.toHexString());
        },
        clone: function() {
          return l(this.toString());
        },
        _applyModification: function(b, S) {
          var F = b.apply(null, [
            this
          ].concat([].slice.call(S)));
          return this._r = F._r, this._g = F._g, this._b = F._b, this.setAlpha(F._a), this;
        },
        lighten: function() {
          return this._applyModification(v, arguments);
        },
        brighten: function() {
          return this._applyModification(x, arguments);
        },
        darken: function() {
          return this._applyModification(H, arguments);
        },
        desaturate: function() {
          return this._applyModification(w, arguments);
        },
        saturate: function() {
          return this._applyModification(C, arguments);
        },
        greyscale: function() {
          return this._applyModification(U, arguments);
        },
        spin: function() {
          return this._applyModification(I, arguments);
        },
        _applyCombination: function(b, S) {
          return b.apply(null, [
            this
          ].concat([].slice.call(S)));
        },
        analogous: function() {
          return this._applyCombination(K, arguments);
        },
        complement: function() {
          return this._applyCombination(g, arguments);
        },
        monochromatic: function() {
          return this._applyCombination(M, arguments);
        },
        splitcomplement: function() {
          return this._applyCombination(L, arguments);
        },
        triad: function() {
          return this._applyCombination(k, arguments);
        },
        tetrad: function() {
          return this._applyCombination(R, arguments);
        }
      }, l.fromRatio = function(b, S) {
        if (typeof b == "object") {
          var F = {};
          for (var G in b) b.hasOwnProperty(G) && (G === "a" ? F[G] = b[G] : F[G] = AA(b[G]));
          b = F;
        }
        return l(b, S);
      };
      function c(b) {
        var S = {
          r: 0,
          g: 0,
          b: 0
        }, F = 1, G = null, W = null, V = null, dA = false, pA = false;
        return typeof b == "string" && (b = aA(b)), typeof b == "object" && (q(b.r) && q(b.g) && q(b.b) ? (S = u(b.r, b.g, b.b), dA = true, pA = String(b.r).substr(-1) === "%" ? "prgb" : "rgb") : q(b.h) && q(b.s) && q(b.v) ? (G = AA(b.s), W = AA(b.v), S = B(b.h, G, W), dA = true, pA = "hsv") : q(b.h) && q(b.s) && q(b.l) && (G = AA(b.s), V = AA(b.l), S = f(b.h, G, V), dA = true, pA = "hsl"), b.hasOwnProperty("a") && (F = b.a)), F = D(F), {
          ok: dA,
          format: b.format || pA,
          r: i(255, a(S.r, 0)),
          g: i(255, a(S.g, 0)),
          b: i(255, a(S.b, 0)),
          a: F
        };
      }
      function u(b, S, F) {
        return {
          r: Y(b, 255) * 255,
          g: Y(S, 255) * 255,
          b: Y(F, 255) * 255
        };
      }
      function d(b, S, F) {
        b = Y(b, 255), S = Y(S, 255), F = Y(F, 255);
        var G = a(b, S, F), W = i(b, S, F), V, dA, pA = (G + W) / 2;
        if (G == W) V = dA = 0;
        else {
          var BA = G - W;
          switch (dA = pA > 0.5 ? BA / (2 - G - W) : BA / (G + W), G) {
            case b:
              V = (S - F) / BA + (S < F ? 6 : 0);
              break;
            case S:
              V = (F - b) / BA + 2;
              break;
            case F:
              V = (b - S) / BA + 4;
              break;
          }
          V /= 6;
        }
        return {
          h: V,
          s: dA,
          l: pA
        };
      }
      function f(b, S, F) {
        var G, W, V;
        b = Y(b, 360), S = Y(S, 100), F = Y(F, 100);
        function dA(rA, VA, mA) {
          return mA < 0 && (mA += 1), mA > 1 && (mA -= 1), mA < 1 / 6 ? rA + (VA - rA) * 6 * mA : mA < 1 / 2 ? VA : mA < 2 / 3 ? rA + (VA - rA) * (2 / 3 - mA) * 6 : rA;
        }
        if (S === 0) G = W = V = F;
        else {
          var pA = F < 0.5 ? F * (1 + S) : F + S - F * S, BA = 2 * F - pA;
          G = dA(BA, pA, b + 1 / 3), W = dA(BA, pA, b), V = dA(BA, pA, b - 1 / 3);
        }
        return {
          r: G * 255,
          g: W * 255,
          b: V * 255
        };
      }
      function p(b, S, F) {
        b = Y(b, 255), S = Y(S, 255), F = Y(F, 255);
        var G = a(b, S, F), W = i(b, S, F), V, dA, pA = G, BA = G - W;
        if (dA = G === 0 ? 0 : BA / G, G == W) V = 0;
        else {
          switch (G) {
            case b:
              V = (S - F) / BA + (S < F ? 6 : 0);
              break;
            case S:
              V = (F - b) / BA + 2;
              break;
            case F:
              V = (b - S) / BA + 4;
              break;
          }
          V /= 6;
        }
        return {
          h: V,
          s: dA,
          v: pA
        };
      }
      function B(b, S, F) {
        b = Y(b, 360) * 6, S = Y(S, 100), F = Y(F, 100);
        var G = e.floor(b), W = b - G, V = F * (1 - S), dA = F * (1 - W * S), pA = F * (1 - (1 - W) * S), BA = G % 6, rA = [
          F,
          dA,
          V,
          V,
          pA,
          F
        ][BA], VA = [
          pA,
          F,
          F,
          dA,
          V,
          V
        ][BA], mA = [
          V,
          V,
          pA,
          F,
          F,
          dA
        ][BA];
        return {
          r: rA * 255,
          g: VA * 255,
          b: mA * 255
        };
      }
      function Q(b, S, F, G) {
        var W = [
          $(o(b).toString(16)),
          $(o(S).toString(16)),
          $(o(F).toString(16))
        ];
        return G && W[0].charAt(0) == W[0].charAt(1) && W[1].charAt(0) == W[1].charAt(1) && W[2].charAt(0) == W[2].charAt(1) ? W[0].charAt(0) + W[1].charAt(0) + W[2].charAt(0) : W.join("");
      }
      function m(b, S, F, G, W) {
        var V = [
          $(o(b).toString(16)),
          $(o(S).toString(16)),
          $(o(F).toString(16)),
          $(gA(G))
        ];
        return W && V[0].charAt(0) == V[0].charAt(1) && V[1].charAt(0) == V[1].charAt(1) && V[2].charAt(0) == V[2].charAt(1) && V[3].charAt(0) == V[3].charAt(1) ? V[0].charAt(0) + V[1].charAt(0) + V[2].charAt(0) + V[3].charAt(0) : V.join("");
      }
      function y(b, S, F, G) {
        var W = [
          $(gA(G)),
          $(o(b).toString(16)),
          $(o(S).toString(16)),
          $(o(F).toString(16))
        ];
        return W.join("");
      }
      l.equals = function(b, S) {
        return !b || !S ? false : l(b).toRgbString() == l(S).toRgbString();
      }, l.random = function() {
        return l.fromRatio({
          r: s(),
          g: s(),
          b: s()
        });
      };
      function w(b, S) {
        S = S === 0 ? 0 : S || 10;
        var F = l(b).toHsl();
        return F.s -= S / 100, F.s = X(F.s), l(F);
      }
      function C(b, S) {
        S = S === 0 ? 0 : S || 10;
        var F = l(b).toHsl();
        return F.s += S / 100, F.s = X(F.s), l(F);
      }
      function U(b) {
        return l(b).desaturate(100);
      }
      function v(b, S) {
        S = S === 0 ? 0 : S || 10;
        var F = l(b).toHsl();
        return F.l += S / 100, F.l = X(F.l), l(F);
      }
      function x(b, S) {
        S = S === 0 ? 0 : S || 10;
        var F = l(b).toRgb();
        return F.r = a(0, i(255, F.r - o(255 * -(S / 100)))), F.g = a(0, i(255, F.g - o(255 * -(S / 100)))), F.b = a(0, i(255, F.b - o(255 * -(S / 100)))), l(F);
      }
      function H(b, S) {
        S = S === 0 ? 0 : S || 10;
        var F = l(b).toHsl();
        return F.l -= S / 100, F.l = X(F.l), l(F);
      }
      function I(b, S) {
        var F = l(b).toHsl(), G = (F.h + S) % 360;
        return F.h = G < 0 ? 360 + G : G, l(F);
      }
      function g(b) {
        var S = l(b).toHsl();
        return S.h = (S.h + 180) % 360, l(S);
      }
      function k(b) {
        var S = l(b).toHsl(), F = S.h;
        return [
          l(b),
          l({
            h: (F + 120) % 360,
            s: S.s,
            l: S.l
          }),
          l({
            h: (F + 240) % 360,
            s: S.s,
            l: S.l
          })
        ];
      }
      function R(b) {
        var S = l(b).toHsl(), F = S.h;
        return [
          l(b),
          l({
            h: (F + 90) % 360,
            s: S.s,
            l: S.l
          }),
          l({
            h: (F + 180) % 360,
            s: S.s,
            l: S.l
          }),
          l({
            h: (F + 270) % 360,
            s: S.s,
            l: S.l
          })
        ];
      }
      function L(b) {
        var S = l(b).toHsl(), F = S.h;
        return [
          l(b),
          l({
            h: (F + 72) % 360,
            s: S.s,
            l: S.l
          }),
          l({
            h: (F + 216) % 360,
            s: S.s,
            l: S.l
          })
        ];
      }
      function K(b, S, F) {
        S = S || 6, F = F || 30;
        var G = l(b).toHsl(), W = 360 / F, V = [
          l(b)
        ];
        for (G.h = (G.h - (W * S >> 1) + 720) % 360; --S; ) G.h = (G.h + W) % 360, V.push(l(G));
        return V;
      }
      function M(b, S) {
        S = S || 6;
        for (var F = l(b).toHsv(), G = F.h, W = F.s, V = F.v, dA = [], pA = 1 / S; S--; ) dA.push(l({
          h: G,
          s: W,
          v: V
        })), V = (V + pA) % 1;
        return dA;
      }
      l.mix = function(b, S, F) {
        F = F === 0 ? 0 : F || 50;
        var G = l(b).toRgb(), W = l(S).toRgb(), V = F / 100, dA = {
          r: (W.r - G.r) * V + G.r,
          g: (W.g - G.g) * V + G.g,
          b: (W.b - G.b) * V + G.b,
          a: (W.a - G.a) * V + G.a
        };
        return l(dA);
      }, l.readability = function(b, S) {
        var F = l(b), G = l(S);
        return (e.max(F.getLuminance(), G.getLuminance()) + 0.05) / (e.min(F.getLuminance(), G.getLuminance()) + 0.05);
      }, l.isReadable = function(b, S, F) {
        var G = l.readability(b, S), W, V;
        switch (V = false, W = sA(F), W.level + W.size) {
          case "AAsmall":
          case "AAAlarge":
            V = G >= 4.5;
            break;
          case "AAlarge":
            V = G >= 3;
            break;
          case "AAAsmall":
            V = G >= 7;
            break;
        }
        return V;
      }, l.mostReadable = function(b, S, F) {
        var G = null, W = 0, V, dA, pA, BA;
        F = F || {}, dA = F.includeFallbackColors, pA = F.level, BA = F.size;
        for (var rA = 0; rA < S.length; rA++) V = l.readability(b, S[rA]), V > W && (W = V, G = l(S[rA]));
        return l.isReadable(b, G, {
          level: pA,
          size: BA
        }) || !dA ? G : (F.includeFallbackColors = false, l.mostReadable(b, [
          "#fff",
          "#000"
        ], F));
      };
      var O = l.names = {
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
      }, j = l.hexNames = N(O);
      function N(b) {
        var S = {};
        for (var F in b) b.hasOwnProperty(F) && (S[b[F]] = F);
        return S;
      }
      function D(b) {
        return b = parseFloat(b), (isNaN(b) || b < 0 || b > 1) && (b = 1), b;
      }
      function Y(b, S) {
        P(b) && (b = "100%");
        var F = z(b);
        return b = i(S, a(0, parseFloat(b))), F && (b = parseInt(b * S, 10) / 100), e.abs(b - S) < 1e-6 ? 1 : b % S / parseFloat(S);
      }
      function X(b) {
        return i(1, a(0, b));
      }
      function oA(b) {
        return parseInt(b, 16);
      }
      function P(b) {
        return typeof b == "string" && b.indexOf(".") != -1 && parseFloat(b) === 1;
      }
      function z(b) {
        return typeof b == "string" && b.indexOf("%") != -1;
      }
      function $(b) {
        return b.length == 1 ? "0" + b : "" + b;
      }
      function AA(b) {
        return b <= 1 && (b = b * 100 + "%"), b;
      }
      function gA(b) {
        return e.round(parseFloat(b) * 255).toString(16);
      }
      function cA(b) {
        return oA(b) / 255;
      }
      var tA = (function() {
        var b = "[-\\+]?\\d+%?", S = "[-\\+]?\\d*\\.\\d+%?", F = "(?:" + S + ")|(?:" + b + ")", G = "[\\s|\\(]+(" + F + ")[,|\\s]+(" + F + ")[,|\\s]+(" + F + ")\\s*\\)?", W = "[\\s|\\(]+(" + F + ")[,|\\s]+(" + F + ")[,|\\s]+(" + F + ")[,|\\s]+(" + F + ")\\s*\\)?";
        return {
          CSS_UNIT: new RegExp(F),
          rgb: new RegExp("rgb" + G),
          rgba: new RegExp("rgba" + W),
          hsl: new RegExp("hsl" + G),
          hsla: new RegExp("hsla" + W),
          hsv: new RegExp("hsv" + G),
          hsva: new RegExp("hsva" + W),
          hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
          hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
        };
      })();
      function q(b) {
        return !!tA.CSS_UNIT.exec(b);
      }
      function aA(b) {
        b = b.replace(t, "").replace(r, "").toLowerCase();
        var S = false;
        if (O[b]) b = O[b], S = true;
        else if (b == "transparent") return {
          r: 0,
          g: 0,
          b: 0,
          a: 0,
          format: "name"
        };
        var F;
        return (F = tA.rgb.exec(b)) ? {
          r: F[1],
          g: F[2],
          b: F[3]
        } : (F = tA.rgba.exec(b)) ? {
          r: F[1],
          g: F[2],
          b: F[3],
          a: F[4]
        } : (F = tA.hsl.exec(b)) ? {
          h: F[1],
          s: F[2],
          l: F[3]
        } : (F = tA.hsla.exec(b)) ? {
          h: F[1],
          s: F[2],
          l: F[3],
          a: F[4]
        } : (F = tA.hsv.exec(b)) ? {
          h: F[1],
          s: F[2],
          v: F[3]
        } : (F = tA.hsva.exec(b)) ? {
          h: F[1],
          s: F[2],
          v: F[3],
          a: F[4]
        } : (F = tA.hex8.exec(b)) ? {
          r: oA(F[1]),
          g: oA(F[2]),
          b: oA(F[3]),
          a: cA(F[4]),
          format: S ? "name" : "hex8"
        } : (F = tA.hex6.exec(b)) ? {
          r: oA(F[1]),
          g: oA(F[2]),
          b: oA(F[3]),
          format: S ? "name" : "hex"
        } : (F = tA.hex4.exec(b)) ? {
          r: oA(F[1] + "" + F[1]),
          g: oA(F[2] + "" + F[2]),
          b: oA(F[3] + "" + F[3]),
          a: cA(F[4] + "" + F[4]),
          format: S ? "name" : "hex8"
        } : (F = tA.hex3.exec(b)) ? {
          r: oA(F[1] + "" + F[1]),
          g: oA(F[2] + "" + F[2]),
          b: oA(F[3] + "" + F[3]),
          format: S ? "name" : "hex"
        } : false;
      }
      function sA(b) {
        var S, F;
        return b = b || {
          level: "AA",
          size: "small"
        }, S = (b.level || "AA").toUpperCase(), F = (b.size || "small").toLowerCase(), S !== "AA" && S !== "AAA" && (S = "AA"), F !== "small" && F !== "large" && (F = "small"), {
          level: S,
          size: F
        };
      }
      A.exports ? A.exports = l : window.tinycolor = l;
    })(Math);
  })(af);
  var Vw = af.exports;
  const de = Rs(Vw);
  var pr = function() {
    return pr = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, pr.apply(this, arguments);
  }, $w = function(A, e, t) {
    if (t || arguments.length === 2) for (var r = 0, n = e.length, o; r < n; r++) (o || !(r in e)) && (o || (o = Array.prototype.slice.call(e, 0, r)), o[r] = e[r]);
    return A.concat(o || Array.prototype.slice.call(e));
  }, Ww = function(A) {
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
    function t(P) {
      var z = new Error(A + ": " + P);
      throw z;
    }
    function r(P) {
      A = A.substr(P);
    }
    function n(P) {
      var z = /^[\n\r\t\s]+/.exec(A);
      z && r(z[0].length);
      var $ = P.exec(A);
      return $ && r($[0].length), $;
    }
    function o(P) {
      var z = P(), $ = [];
      if (z) for ($.push(z); n(e.comma); ) z = P(), z ? $.push(z) : t("One extra comma");
      return $;
    }
    function i(P, z, $) {
      var AA = n(z);
      if (AA) return {
        type: P,
        value: AA[$]
      };
    }
    function a() {
      var P = i("hex", e.hexColor, 1);
      if (P == null ? void 0 : P.value) {
        var z = de(P == null ? void 0 : P.value).toRgb(), $ = z.r, AA = z.g, gA = z.b, cA = z.a;
        return {
          value: "rgba(".concat($, ", ").concat(AA, ", ").concat(gA, ", ").concat(cA, ")")
        };
      }
    }
    var s = function(P) {
      var z = Pt(P == null ? void 0 : P[0]);
      return {
        value: "".concat(z ? "RGBA" : "rgba", "(").concat(o(j), ")")
      };
    };
    function l(P, z) {
      var $ = n(P);
      if ($) {
        n(e.startCall) || t("Missing (");
        var AA = z($);
        return n(e.endCall) || t("Missing )"), AA;
      }
    }
    function c() {
      return l(e.hslColor, N);
    }
    function u() {
      return l(e.rgbaColor, s);
    }
    function d() {
      return l(e.rgbColor, Y);
    }
    function f() {
      var P = i("literal", e.literalColor, 0);
      if (P == null ? void 0 : P.value) {
        var z = de(P == null ? void 0 : P.value).toRgb(), $ = z.r, AA = z.g, gA = z.b, cA = z.a;
        return {
          value: "rgba(".concat($, ", ").concat(AA, ", ").concat(gA, ", ").concat(cA, ")")
        };
      }
    }
    function p() {
      return l(e.hsvColor, D);
    }
    function B() {
      return a() || c() || u() || d() || f() || p();
    }
    function Q() {
      var P, z = B();
      return z || t("Expected color definition"), z.left = parseInt((P = X()) === null || P === void 0 ? void 0 : P.value), z;
    }
    function m(P, z, $) {
      return l(z, function() {
        var AA = $();
        return AA && (n(e.comma) || t("Missing comma before color stops")), {
          type: P,
          orientation: AA,
          colorStops: o(Q)
        };
      });
    }
    function y() {
      return v() || x();
    }
    function w() {
      return m("linear-gradient", e.linearGradient, y) || m("repeating-linear-gradient", e.repeatingLinearGradient, y) || m("radial-gradient", e.radialGradient, H) || m("repeating-radial-gradient", e.repeatingRadialGradient, H);
    }
    function C() {
      return o(w);
    }
    function U() {
      var P, z = C();
      A.length > 0 && t("Invalid input not EOF");
      var $ = z[0], AA = (P = $ == null ? void 0 : $.colorStops) === null || P === void 0 ? void 0 : P.filter(function(cA) {
        return Pt(cA.value);
      }).length, gA = function() {
        if (AA > 0) return $;
        var cA = function(tA, q) {
          return q === 0 ? Gi(tA) : Sn(tA);
        };
        return pr(pr({}, $), {
          colorStops: $.colorStops.map(function(tA, q) {
            return pr(pr({}, tA), {
              value: cA(tA, q)
            });
          })
        });
      };
      return gA();
    }
    function v() {
      return i("directional", e.sideOrCorner, 1);
    }
    function x() {
      return i("angular", e.angleValue, 1);
    }
    function H() {
      var P, z = I(), $;
      return z && (P = [], P.push(z), $ = A, n(e.comma) && (z = I(), z ? P.push(z) : A = $)), P;
    }
    function I() {
      var P = k() || R();
      if (P) P.at = K();
      else {
        var z = L();
        if (z) {
          P = z;
          var $ = K();
          $ && (P.at = $);
        } else {
          var AA = M();
          AA && (P = {
            type: "default-radial",
            at: AA
          });
        }
      }
      return P;
    }
    function g() {
      return i("px", e.pixelValue, 1) || i("em", e.emValue, 1);
    }
    function k() {
      var P = i("shape", /^(circle)/i, 0);
      return P && (P.style = g() || L()), P;
    }
    function R() {
      var P = i("shape", /^(ellipse)/i, 0);
      return P && (P.style = X() || L()), P;
    }
    function L() {
      return i("extent-keyword", e.extentKeywords, 1);
    }
    function K() {
      if (i("position", /^at/, 0)) {
        var P = M();
        return P || t("Missing positioning value"), P;
      }
    }
    function M() {
      var P = O();
      if (P.x || P.y) return {
        type: "position",
        value: P
      };
    }
    function O() {
      return {
        x: X(),
        y: X()
      };
    }
    function j() {
      return n(e.number)[1];
    }
    var N = function(P) {
      var z = Pt(P == null ? void 0 : P[0]), $ = o(j), AA = de({
        h: $[0],
        s: $[1],
        l: $[2],
        a: $[3] || 1
      }).toRgb(), gA = AA.r, cA = AA.g, tA = AA.b, q = AA.a;
      return {
        value: "".concat(z ? "RGBA" : "rgba", "(").concat(gA, ", ").concat(cA, ", ").concat(tA, ", ").concat(q, ")")
      };
    }, D = function(P) {
      var z = Pt(P == null ? void 0 : P[0]), $ = o(j), AA = de({
        h: $[0],
        s: $[1],
        v: $[2],
        a: $[3] || 1
      }).toRgb(), gA = AA.r, cA = AA.g, tA = AA.b, q = AA.a;
      return {
        value: "".concat(z ? "RGBA" : "rgba", "(").concat(gA, ", ").concat(cA, ", ").concat(tA, ", ").concat(q, ")")
      };
    }, Y = function(P) {
      var z = Pt(P == null ? void 0 : P[0]), $ = n(e.spacedRgbColor), AA = $ || $w([
        null
      ], o(j), true), gA = AA[1], cA = AA[2], tA = AA[3], q = AA[4], aA = q === void 0 ? 1 : q;
      return {
        value: "".concat(z ? "RGBA" : "rgba", "(").concat(gA, ", ").concat(cA, ", ").concat(tA, ", ").concat(aA, ")")
      };
    };
    function X() {
      return i("%", e.percentageValue, 1) || oA() || g();
    }
    function oA() {
      return i("position-keyword", e.positionKeywords, 1);
    }
    return U();
  }, Sn = function(A) {
    return A.value.toLowerCase();
  }, Gi = function(A) {
    return A.value.toUpperCase();
  }, jw = function(A, e, t) {
    var r = A == null ? void 0 : A.includes("gradient");
    if (r) {
      var n = A == null ? void 0 : A.includes("conic"), o = n ? t : A;
      n && console.log("Sorry we cant handle conic gradients yet");
      var i = Ww(o);
      return i == null ? void 0 : i.colorStops;
    } else {
      var o = A || e;
      return [
        {
          value: o
        }
      ];
    }
  }, br = function(A, e, t) {
    return isNaN(A) || A < e ? e : A > t ? t : A;
  }, Ze = function(A) {
    return Math.round(A);
  }, Po = function() {
    return Po = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, Po.apply(this, arguments);
  }, sf = function(A) {
    var e = A.target.parentNode.getBoundingClientRect(), t = A.target.className, r = t === "c-resize ps-rl" ? 15 : 0;
    return {
      offsetLeft: (e == null ? void 0 : e.x) + r,
      offsetTop: e == null ? void 0 : e.y,
      clientWidth: e == null ? void 0 : e.width,
      clientHeight: e == null ? void 0 : e.height
    };
  };
  function Qr(A, e) {
    var t = sf(A), r = t.offsetLeft, n = t.clientWidth, o = A.clientX - r - e / 2, i = n - 18, a = br(o, 0, i);
    return Math.round(a / (i / 100));
  }
  function zw(A, e, t, r, n) {
    var o = A * t - n / 2, i = (100 - e) / 100 * r - n / 2;
    return [
      o,
      i
    ];
  }
  var Xw = function(A) {
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
  function Yw(A, e) {
    var t = sf(A), r = t.offsetLeft, n = t.offsetTop, o = t.clientWidth, i = t.clientHeight, a = Xw(A), s = a.clientX, l = a.clientY, c = function() {
      var d = s - r - e / 2;
      return br(d, -9, o - 10);
    }, u = function() {
      var d = l - n - e / 2;
      return br(d, -9, i - 10);
    };
    return [
      c(),
      u()
    ];
  }
  var Pt = function(A) {
    var e;
    return (A == null ? void 0 : A[0]) === ((e = A == null ? void 0 : A[0]) === null || e === void 0 ? void 0 : e.toUpperCase());
  }, lf = function(A) {
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
  }, Jw = function(A) {
    var e, t, r, n, o;
    if (typeof A == "string") return A;
    if (!((e = A == null ? void 0 : A.type) === null || e === void 0) && e.includes("gradient")) {
      var i = (t = A == null ? void 0 : A.colorStops) === null || t === void 0 ? void 0 : t.sort(function(d, f) {
        return (d == null ? void 0 : d.left) - (f == null ? void 0 : f.left);
      }), a = (r = i == null ? void 0 : i.map(function(d) {
        return "".concat(d == null ? void 0 : d.value, " ").concat(d == null ? void 0 : d.left, "%");
      })) === null || r === void 0 ? void 0 : r.join(", "), s = A == null ? void 0 : A.type, l = lf((n = A == null ? void 0 : A.orientation) === null || n === void 0 ? void 0 : n.value), c = s === "linear-gradient" ? "".concat(l, "deg") : "circle";
      return "".concat(s, "(").concat(c, ", ").concat(a, ")");
    } else {
      var u = ((o = A == null ? void 0 : A.colorStops[0]) === null || o === void 0 ? void 0 : o.value) || "rgba(175, 51, 242, 1)";
      return u;
    }
  }, Zw = function(A, e) {
    var t = A == null ? void 0 : A.map(function(o, i) {
      return Po(Po({}, o), {
        index: i
      });
    }), r = t == null ? void 0 : t.find(function(o) {
      return Pt(o.value);
    }), n = r || t[0];
    return {
      currentColor: (n == null ? void 0 : n.value) || e,
      selectedColor: (n == null ? void 0 : n.index) || 0,
      currentLeft: (n == null ? void 0 : n.left) || 0
    };
  }, qw = function(A) {
    var e, t = A == null ? void 0 : A.split(",")[0], r = (e = t == null ? void 0 : t.split("(")[1]) === null || e === void 0 ? void 0 : e.replace("deg", "");
    return lf(r);
  }, AC = function(A) {
    var e = A == null ? void 0 : A.includes("gradient"), t = A == null ? void 0 : A.split("(")[0], r = qw(A), n = t === "linear-gradient" ? "".concat(r, "deg") : "circle";
    return {
      degrees: r,
      degreeStr: n,
      isGradient: e,
      gradientType: t
    };
  }, ve = function() {
    return ve = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, ve.apply(this, arguments);
  }, eC = function(A, e, t) {
    if (t || arguments.length === 2) for (var r = 0, n = e.length, o; r < n; r++) (o || !(r in e)) && (o || (o = Array.prototype.slice.call(e, 0, r)), o[r] = e[r]);
    return A.concat(o || Array.prototype.slice.call(e));
  }, cf = h.createContext(null);
  function tC(A) {
    var e, t, r, n, o = A.value, i = A.children, a = A.onChange, s = A.isDarkMode, l = A.squareWidth, c = A.hideOpacity, u = A.showHexAlpha, d = A.squareHeight, f = A.passedConfig, p = A.defaultStyles, B = A.pickerIdSuffix, Q = {
      barSize: (e = f.barSize) !== null && e !== void 0 ? e : Wn.barSize,
      crossSize: (t = f.crossSize) !== null && t !== void 0 ? t : Wn.crossSize,
      defaultColor: (r = f.defaultColor) !== null && r !== void 0 ? r : Wn.defaultColor,
      defaultGradient: (n = f.defaultGradient) !== null && n !== void 0 ? n : Wn.defaultGradient
    }, m = jw(o, Q.defaultColor, Q.defaultGradient), y = AC(o), w = y.degrees, C = y.degreeStr, U = y.isGradient, v = y.gradientType, x = Zw(m, Q.defaultGradient), H = x.currentColor, I = x.selectedColor, g = x.currentLeft, k = h.useState("rgb"), R = k[0], L = k[1], K = h.useState({}), M = K[0], O = K[1], j = de(H), N = j.toRgb(), D = j.toHsv(), Y = h.useState(ve(ve({}, N), D)), X = Y[0], oA = Y[1];
    h.useEffect(function() {
      (D == null ? void 0 : D.s) === 0 ? oA(ve(ve(ve({}, N), D), {
        h: X == null ? void 0 : X.h
      })) : oA(ve(ve({}, N), D));
    }, [
      H
    ]);
    var P = function(cA) {
      var tA = cA.sort(function(sA, b) {
        return sA.left - b.left;
      }), q = tA == null ? void 0 : tA.map(function(sA) {
        return "".concat(sA == null ? void 0 : sA.value, " ").concat(sA.left, "%");
      }), aA = "".concat(v, "(").concat(C, ", ").concat(q.join(", "), ")");
      O(ve(ve({}, M), {
        gradient: aA
      })), a(aA);
    }, z = function(cA, tA) {
      var q = m == null ? void 0 : m.filter(function(sA) {
        return !Pt(sA.value);
      }), aA = eC([
        {
          value: cA.toUpperCase(),
          left: tA ?? g
        }
      ], q, true);
      P(aA);
    }, $ = function(cA) {
      U ? z(cA) : (O(ve(ve({}, M), {
        color: cA
      })), a(cA));
    }, AA = function() {
      if ((m == null ? void 0 : m.length) > 2) {
        var cA = m == null ? void 0 : m.map(function(q, aA) {
          return ve(ve({}, q), {
            value: aA === I - 1 ? Gi(q) : Sn(q)
          });
        }), tA = cA == null ? void 0 : cA.filter(function(q, aA) {
          return aA !== I;
        });
        P(tA);
      }
    }, gA = {
      hc: X,
      setHc: oA,
      value: o,
      colors: m,
      config: Q,
      degrees: w,
      onChange: a,
      previous: M,
      inputType: R,
      tinyColor: j,
      isDarkMode: s,
      isGradient: U,
      squareWidth: l,
      hideOpacity: c,
      currentLeft: g,
      deletePoint: AA,
      showHexAlpha: u,
      squareHeight: d,
      setInputType: L,
      gradientType: v,
      handleChange: $,
      currentColor: H,
      selectedColor: I,
      defaultStyles: p,
      handleGradient: z,
      pickerIdSuffix: B,
      createGradientStr: P
    };
    return T.createElement(cf.Provider, {
      value: gA
    }, i);
  }
  function TA() {
    var A = h.useContext(cf);
    if (!A) throw new Error("usePicker has to be used within <PickerContext.Provider>");
    return A;
  }
  var Wn = {
    barSize: 18,
    crossSize: 18,
    defaultColor: "rgba(175, 51, 242, 1)",
    defaultGradient: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"
  }, rC = function(A, e) {
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
  }, nC = function(A, e, t, r) {
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
  }, oC = function(A, e, t, r) {
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
  }, iC = function(A, e, t, r) {
    h.useEffect(function() {
      var n, o = (n = A == null ? void 0 : A.current) === null || n === void 0 ? void 0 : n.getContext("2d", {
        willReadFrequently: true
      });
      if (o) {
        o.rect(0, 0, r, 14);
        for (var i = o.createLinearGradient(0, 0, r, 0), a = 0; a <= 100; a += 10) {
          var s = de({
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
  }, _o = function() {
    return _o = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, _o.apply(this, arguments);
  }, aC = function() {
    var A = h.useRef(null), e = TA(), t = e.config, r = e.handleChange, n = e.squareWidth, o = e.hc, i = e.setHc, a = e.pickerIdSuffix, s = h.useState(false), l = s[0], c = s[1], u = t.barSize;
    rC(A, n);
    var d = function() {
      c(false);
    }, f = function() {
      c(true);
    }, p = function(m) {
      var y = Qr(m, u) * 3.6, w = de({
        h: y,
        s: o == null ? void 0 : o.s,
        v: o == null ? void 0 : o.v
      }), C = w.toRgb(), U = C.r, v = C.g, x = C.b;
      r("rgba(".concat(U, ", ").concat(v, ", ").concat(x, ", ").concat(o.a, ")")), i(_o(_o({}, o), {
        h: y
      }));
    }, B = function(m) {
      l && p(m);
    }, Q = function(m) {
      l || p(m);
    };
    return h.useEffect(function() {
      var m = function() {
        d();
      };
      return window.addEventListener("mouseup", m), function() {
        window.removeEventListener("mouseup", m);
      };
    }, []), T.createElement("div", {
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
    }, T.createElement("div", {
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
    }), T.createElement("canvas", {
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
  function sC(A, e, t) {
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
  var lC = function(A) {
    var e = A.c, t = A.m, r = A.y, n = A.k, o = 255 * (1 - e) * (1 - n), i = 255 * (1 - t) * (1 - n), a = 255 * (1 - r) * (1 - n);
    return {
      r: o,
      g: i,
      b: a
    };
  }, cC = function(A) {
    return typeof A != "number" ? "FF" : A < 0 ? "00" : A > 1 ? "FF" : Math.round(A * 255).toString(16).padStart(2, "0").toUpperCase();
  }, Me = function() {
    return Me = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, Me.apply(this, arguments);
  }, Qe = function(A) {
    var e = A.label, t = A.value, r = A.callback, n = A.max, o = n === void 0 ? 100 : n, i = A.hideOpacity, a = A.defaultStyles, s = A.pickerIdSuffix, l = h.useState(t), c = l[0], u = l[1], d = i ? "25%" : "20%";
    h.useEffect(function() {
      u(t);
    }, [
      t
    ]);
    var f = function(p) {
      var B = br(parseFloat(p.target.value), 0, o);
      u(B), r(B);
    };
    return T.createElement("div", {
      style: {
        width: d,
        flexShrink: 1
      },
      id: "rbgcp-".concat(e, "-input-wrapper").concat(s)
    }, T.createElement("input", {
      value: c,
      onChange: function(p) {
        return f(p);
      },
      style: Me({}, a.rbgcpInput),
      id: "rbgcp-".concat(e, "-input").concat(s)
    }), T.createElement("div", {
      style: Me({}, a.rbgcpInputLabel)
    }, e));
  }, uC = function(A) {
    var e = A.opacity, t = A.tinyColor, r = A.showHexAlpha, n = A.handleChange, o = A.defaultStyles, i = A.pickerIdSuffix, a = h.useState(""), s = a[0], l = a[1], c = t.toHex(), u = h.useState(c), d = u[0], f = u[1];
    h.useEffect(function() {
      s !== "hex" && f(c);
    }, [
      t,
      s,
      c
    ]);
    var p = function() {
      l("hex");
    }, B = function() {
      l("");
    }, Q = function(C) {
      var U = de(C.target.value);
      if (f(C.target.value), U.isValid()) {
        var v = U.toRgb(), x = v.r, H = v.g, I = v.b, g = "rgba(".concat(x, ", ").concat(H, ", ").concat(I, ", ").concat(e, ")");
        n(g);
      }
    }, m = r ? "".concat(d).concat(cC(e)) : d, y = r ? "HEXA" : "HEX", w = r ? 88 : 76;
    return T.createElement("div", {
      style: {
        width: w,
        flexShrink: 0
      },
      id: "rbgcp-hex-input-wrapper".concat(i)
    }, T.createElement("input", {
      onBlur: B,
      onFocus: p,
      onChange: function(C) {
        return Q(C);
      },
      value: m == null ? void 0 : m.toUpperCase(),
      id: "rbgcp-hex-input".concat(i),
      style: Me(Me({}, o.rbgcpInput), o.rbgcpHexInput)
    }), T.createElement("div", {
      style: Me({}, o.rbgcpInputLabel)
    }, y));
  }, dC = function(A) {
    var e = A.hc, t = A.hideOpacity, r = A.handleChange, n = A.defaultStyles, o = A.pickerIdSuffix, i = function(a) {
      var s = a.r, l = a.g, c = a.b;
      r("rgba(".concat(s, ", ").concat(l, ", ").concat(c, ", ").concat(e == null ? void 0 : e.a, ")"));
    };
    return T.createElement(T.Fragment, null, T.createElement(Qe, {
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
    }), T.createElement(Qe, {
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
    }), T.createElement(Qe, {
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
  }, fC = function(A) {
    var e = A.hc, t = A.setHc, r = A.tinyColor, n = A.hideOpacity, o = A.handleChange, i = A.defaultStyles, a = A.pickerIdSuffix, s = r.toHsl(), l = s.s, c = s.l, u = function(f, p, B) {
      var Q = de({
        h: f,
        s: p,
        l: B
      }).toRgb(), m = Q.r, y = Q.g, w = Q.b;
      o("rgba(".concat(m, ", ").concat(y, ", ").concat(w, ", ").concat(e == null ? void 0 : e.a, ")")), t(Me(Me({}, e), {
        h: f
      }));
    }, d = function(f) {
      var p = de(f).toRgb(), B = p.r, Q = p.g, m = p.b;
      o("rgba(".concat(B, ", ").concat(Q, ", ").concat(m, ", ").concat(e == null ? void 0 : e.a, ")"));
    };
    return T.createElement(T.Fragment, null, T.createElement(Qe, {
      label: "H",
      max: 360,
      value: Ze(e == null ? void 0 : e.h),
      hideOpacity: n,
      defaultStyles: i,
      pickerIdSuffix: a,
      callback: function(f) {
        return u(f, l, c);
      }
    }), T.createElement(Qe, {
      label: "S",
      value: Ze(l * 100),
      hideOpacity: n,
      defaultStyles: i,
      pickerIdSuffix: a,
      callback: function(f) {
        return d({
          h: e == null ? void 0 : e.h,
          s: f,
          l: c
        });
      }
    }), T.createElement(Qe, {
      label: "L",
      value: Ze(c * 100),
      hideOpacity: n,
      defaultStyles: i,
      pickerIdSuffix: a,
      callback: function(f) {
        return d({
          h: e == null ? void 0 : e.h,
          s: l,
          l: f
        });
      }
    }));
  }, pC = function(A) {
    var e = A.hc, t = A.setHc, r = A.hideOpacity, n = A.handleChange, o = A.defaultStyles, i = A.pickerIdSuffix, a = function(l, c, u) {
      var d = de({
        h: l,
        s: c,
        v: u
      }).toRgb(), f = d.r, p = d.g, B = d.b;
      n("rgba(".concat(f, ", ").concat(p, ", ").concat(B, ", ").concat(e == null ? void 0 : e.a, ")")), t(Me(Me({}, e), {
        h: l
      }));
    }, s = function(l) {
      var c = de(l).toRgb(), u = c.r, d = c.g, f = c.b;
      n("rgba(".concat(u, ", ").concat(d, ", ").concat(f, ", ").concat(e == null ? void 0 : e.a, ")"));
    };
    return T.createElement(T.Fragment, null, T.createElement(Qe, {
      label: "H",
      max: 360,
      value: Ze(e == null ? void 0 : e.h),
      hideOpacity: r,
      defaultStyles: o,
      pickerIdSuffix: i,
      callback: function(l) {
        return a(l, e == null ? void 0 : e.s, e == null ? void 0 : e.v);
      }
    }), T.createElement(Qe, {
      label: "S",
      hideOpacity: r,
      value: Ze((e == null ? void 0 : e.s) * 100),
      defaultStyles: o,
      pickerIdSuffix: i,
      callback: function(l) {
        return s({
          h: e == null ? void 0 : e.h,
          s: l,
          v: e == null ? void 0 : e.v
        });
      }
    }), T.createElement(Qe, {
      label: "V",
      hideOpacity: r,
      value: Ze((e == null ? void 0 : e.v) * 100),
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
  }, gC = function(A) {
    var e = A.hc, t = A.hideOpacity, r = A.handleChange, n = A.defaultStyles, o = A.pickerIdSuffix, i = sC(e == null ? void 0 : e.r, e == null ? void 0 : e.g, e == null ? void 0 : e.b), a = i.c, s = i.m, l = i.y, c = i.k, u = function(d) {
      var f = lC(d), p = f.r, B = f.g, Q = f.b;
      r("rgba(".concat(p, ", ").concat(B, ", ").concat(Q, ", ").concat(e == null ? void 0 : e.a, ")"));
    };
    return T.createElement(T.Fragment, null, T.createElement(Qe, {
      label: "C",
      value: Ze(a * 100),
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
    }), T.createElement(Qe, {
      label: "M",
      value: Ze(s * 100),
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
    }), T.createElement(Qe, {
      label: "Y",
      value: Ze(l * 100),
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
    }), T.createElement(Qe, {
      label: "K",
      value: Ze(c * 100),
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
  }, hC = function() {
    var A = TA(), e = A.hc, t = A.setHc, r = A.inputType, n = A.tinyColor, o = A.hideOpacity, i = A.showHexAlpha, a = A.handleChange, s = A.defaultStyles, l = A.pickerIdSuffix;
    return T.createElement("div", {
      style: Me({
        columnGap: 6,
        paddingTop: 14,
        display: "flex",
        justifyContent: "space-between"
      }, s.rbgcpInputsWrap),
      id: "rbgcp-inputs-wrap".concat(l)
    }, r !== "cmyk" && T.createElement(uC, {
      opacity: e == null ? void 0 : e.a,
      tinyColor: n,
      showHexAlpha: i,
      handleChange: a,
      defaultStyles: s,
      pickerIdSuffix: l
    }), r === "hsl" && T.createElement(fC, {
      hc: e,
      setHc: t,
      tinyColor: n,
      hideOpacity: o,
      handleChange: a,
      defaultStyles: s,
      pickerIdSuffix: l
    }), r === "rgb" && T.createElement(dC, {
      hc: e,
      hideOpacity: o,
      handleChange: a,
      defaultStyles: s,
      pickerIdSuffix: l
    }), r === "hsv" && T.createElement(pC, {
      hc: e,
      setHc: t,
      hideOpacity: o,
      handleChange: a,
      defaultStyles: s,
      pickerIdSuffix: l
    }), r === "cmyk" && T.createElement(gC, {
      hc: e,
      hideOpacity: o,
      handleChange: a,
      defaultStyles: s,
      pickerIdSuffix: l
    }), !o && T.createElement(Qe, {
      label: "A",
      hideOpacity: o,
      defaultStyles: s,
      value: Math.round((e == null ? void 0 : e.a) * 100),
      pickerIdSuffix: l,
      callback: function(c) {
        return a("rgba(".concat(e == null ? void 0 : e.r, ", ").concat(e == null ? void 0 : e.g, ", ").concat(e == null ? void 0 : e.b, ", ").concat(c / 100, ")"));
      }
    }));
  }, BC = function(A, e, t, r) {
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
  }, uf = "Expected a function", Rc = NaN, mC = "[object Symbol]", vC = /^\s+|\s+$/g, wC = /^[-+]0x[0-9a-f]+$/i, CC = /^0b[01]+$/i, yC = /^0o[0-7]+$/i, bC = parseInt, QC = typeof kn == "object" && kn && kn.Object === Object && kn, FC = typeof self == "object" && self && self.Object === Object && self, UC = QC || FC || Function("return this")(), SC = Object.prototype, xC = SC.toString, EC = Math.max, IC = Math.min, ga = function() {
    return UC.Date.now();
  };
  function HC(A, e, t) {
    var r, n, o, i, a, s, l = 0, c = false, u = false, d = true;
    if (typeof A != "function") throw new TypeError(uf);
    e = Oc(e) || 0, No(t) && (c = !!t.leading, u = "maxWait" in t, o = u ? EC(Oc(t.maxWait) || 0, e) : o, d = "trailing" in t ? !!t.trailing : d);
    function f(v) {
      var x = r, H = n;
      return r = n = void 0, l = v, i = A.apply(H, x), i;
    }
    function p(v) {
      return l = v, a = setTimeout(m, e), c ? f(v) : i;
    }
    function B(v) {
      var x = v - s, H = v - l, I = e - x;
      return u ? IC(I, o - H) : I;
    }
    function Q(v) {
      var x = v - s, H = v - l;
      return s === void 0 || x >= e || x < 0 || u && H >= o;
    }
    function m() {
      var v = ga();
      if (Q(v)) return y(v);
      a = setTimeout(m, B(v));
    }
    function y(v) {
      return a = void 0, d && r ? f(v) : (r = n = void 0, i);
    }
    function w() {
      a !== void 0 && clearTimeout(a), l = 0, r = s = n = a = void 0;
    }
    function C() {
      return a === void 0 ? i : y(ga());
    }
    function U() {
      var v = ga(), x = Q(v);
      if (r = arguments, n = this, s = v, x) {
        if (a === void 0) return p(s);
        if (u) return a = setTimeout(m, e), f(s);
      }
      return a === void 0 && (a = setTimeout(m, e)), i;
    }
    return U.cancel = w, U.flush = C, U;
  }
  function TC(A, e, t) {
    var r = true, n = true;
    if (typeof A != "function") throw new TypeError(uf);
    return No(t) && (r = "leading" in t ? !!t.leading : r, n = "trailing" in t ? !!t.trailing : n), HC(A, e, {
      leading: r,
      maxWait: e,
      trailing: n
    });
  }
  function No(A) {
    var e = typeof A;
    return !!A && (e == "object" || e == "function");
  }
  function kC(A) {
    return !!A && typeof A == "object";
  }
  function LC(A) {
    return typeof A == "symbol" || kC(A) && xC.call(A) == mC;
  }
  function Oc(A) {
    if (typeof A == "number") return A;
    if (LC(A)) return Rc;
    if (No(A)) {
      var e = typeof A.valueOf == "function" ? A.valueOf() : A;
      A = No(e) ? e + "" : e;
    }
    if (typeof A != "string") return A === 0 ? A : +A;
    A = A.replace(vC, "");
    var t = CC.test(A);
    return t || yC.test(A) ? bC(A.slice(2), t ? 2 : 8) : wC.test(A) ? Rc : +A;
  }
  var RC = TC;
  const OC = Rs(RC);
  var _t = function() {
    return _t = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, _t.apply(this, arguments);
  }, MC = function() {
    var A, e, t = TA(), r = t.hc, n = t.config, o = t.squareWidth, i = t.squareHeight, a = t.handleChange, s = t.defaultStyles, l = t.pickerIdSuffix, c = n.crossSize, u = h.useState(false), d = u[0], f = u[1], p = h.useRef(null), B = zw(r == null ? void 0 : r.s, (r == null ? void 0 : r.v) * 100, o, i, c), Q = B[0], m = B[1], y = h.useState({
      x: Q,
      y: m
    }), w = y[0], C = y[1];
    BC(p, r == null ? void 0 : r.h, o, i), h.useEffect(function() {
      d || C({
        x: (r == null ? void 0 : r.v) === 0 ? w.x : Q,
        y: m
      });
    }, [
      Q,
      m
    ]);
    var U = function(k) {
      var R = OC(function() {
        var L = Yw(k, c), K = L[0], M = L[1];
        if (K && M) {
          var O = Math.min(K + c / 2, o - 1), j = Math.min(M + c / 2, i - 1), N = O / o * 100, D = 100 - j / i * 100;
          C({
            x: D === 0 ? w == null ? void 0 : w.x : K,
            y: M
          });
          var Y = de("hsva(".concat(r == null ? void 0 : r.h, ", ").concat(N, "%, ").concat(D, "%, ").concat(r == null ? void 0 : r.a, ")"));
          a(Y.toRgbString());
        }
      }, 250);
      R();
    }, v = function() {
      f(false);
    }, x = function(k) {
      d && U(k);
    }, H = function(k) {
      d || U(k);
    }, I = function() {
      f(true);
    }, g = function(k) {
      f(true), U(k);
    };
    return h.useEffect(function() {
      var k = function() {
        v();
      };
      return window.addEventListener("mouseup", k), function() {
        window.removeEventListener("mouseup", k);
      };
    }, []), T.createElement("div", {
      style: {
        position: "relative",
        marginBottom: 12
      },
      id: "rbgcp-square-wrapper".concat(l)
    }, T.createElement("div", {
      onMouseUp: v,
      onTouchEnd: v,
      onMouseDown: g,
      onTouchStart: g,
      onMouseMove: function(k) {
        return x(k);
      },
      id: "rbgcp-square".concat(l),
      style: {
        position: "relative",
        cursor: "ew-cross"
      }
    }, T.createElement("div", {
      style: _t(_t(_t({}, s.rbgcpHandle), {
        transform: "translate(".concat((A = w == null ? void 0 : w.x) !== null && A !== void 0 ? A : 0, "px, ").concat((e = w == null ? void 0 : w.y) !== null && e !== void 0 ? e : 0, "px)")
      }), d ? {
        transition: ""
      } : {}),
      onMouseDown: I,
      id: "rbgcp-square-handle".concat(l)
    }), T.createElement("div", {
      style: _t(_t({}, s.rbgcpCanvasWrapper), {
        height: i
      }),
      id: "rbgcp-square-canvas-wrapper".concat(l),
      onClick: function(k) {
        return H(k);
      }
    }, T.createElement("canvas", {
      ref: p,
      width: "".concat(o, "px"),
      height: "".concat(i, "px"),
      id: "rbgcp-square-canvas".concat(l)
    }))));
  }, bt = function() {
    return bt = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, bt.apply(this, arguments);
  }, KC = function() {
    var A = TA(), e = A.config, t = A.hc, r = t === void 0 ? {} : t, n = A.squareWidth, o = A.handleChange, i = A.defaultStyles, a = A.pickerIdSuffix, s = h.useState(false), l = s[0], c = s[1], u = r.r, d = r.g, f = r.b, p = "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(".concat(u, ",").concat(d, ",").concat(f, ",.5) 100%)"), B = e.barSize, Q = function() {
      c(false);
    }, m = function() {
      c(true);
    }, y = function(v) {
      var x = Qr(v, B) / 100, H = "rgba(".concat(u, ", ").concat(d, ", ").concat(f, ", ").concat(x, ")");
      o(H);
    }, w = function(v) {
      l && y(v);
    }, C = function(v) {
      l || y(v);
    }, U = n - 18;
    return h.useEffect(function() {
      var v = function() {
        Q();
      };
      return window.addEventListener("mouseup", v), function() {
        window.removeEventListener("mouseup", v);
      };
    }, []), T.createElement("div", {
      onMouseDown: m,
      onMouseMove: function(v) {
        return w(v);
      },
      style: {
        height: 14,
        marginTop: 17,
        marginBottom: 4,
        cursor: "ew-resize",
        position: "relative"
      },
      id: "rbgcp-opacity-wrapper".concat(a)
    }, T.createElement("div", {
      id: "rbgcp-opacity-checkered-bg".concat(a),
      style: bt(bt({}, i.rbgcpCheckered), {
        width: "100%",
        height: 14
      })
    }), T.createElement("div", {
      id: "rbgcp-opacity-handle".concat(a),
      style: bt(bt({}, i.rbgcpHandle), {
        left: U * (r == null ? void 0 : r.a),
        top: -2
      })
    }), T.createElement("div", {
      style: bt(bt({}, i.rbgcpOpacityOverlay), {
        background: p
      }),
      id: "rbgcp-opacity-overlay".concat(a),
      onClick: function(v) {
        return C(v);
      }
    }));
  }, DC = {
    CONTROLS: {
      SOLID: "Solid",
      GRADIENT: "Gradient"
    }
  }, PC = [
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
  ], _C = function(A) {
    var e = A.presets, t = e === void 0 ? [] : e, r = TA(), n = r.value, o = r.onChange, i = r.isDarkMode, a = r.squareWidth, s = r.handleChange, l = r.pickerIdSuffix, c = function() {
      return (t == null ? void 0 : t.length) > 0 ? t == null ? void 0 : t.slice(0, 18) : PC;
    }, u = function(f) {
      (f == null ? void 0 : f.includes("gradient")) ? o(f) : s(f);
    }, d = function(f) {
      if (!f || i) return "";
      var p = f == null ? void 0 : f.replace(" ", "");
      return p === "rgba(255,255,255,1)" ? "1px solid #96959c" : "";
    };
    return T.createElement("div", {
      style: {
        marginTop: 14,
        display: "flex",
        justifyContent: "space-between"
      },
      id: "rbgcp-footer-wrapper".concat(l)
    }, T.createElement("div", {
      style: {
        width: 50,
        height: 50,
        flexShrink: 0,
        borderRadius: 6,
        background: n,
        border: d(n)
      },
      id: "rbgcp-preview".concat(l)
    }), T.createElement("div", {
      style: {
        rowGap: 3,
        display: "flex",
        flexWrap: "wrap",
        width: a - 57,
        justifyContent: "space-between"
      },
      id: "rbgcp-presets-wrapper".concat(l)
    }, c().map(function(f, p) {
      return T.createElement("div", {
        key: "".concat(f, "-").concat(p),
        id: "rbgcp-preset-".concat(p, "-wrapper").concat(l),
        style: {
          width: "calc(100% / 9)",
          paddingLeft: 3
        }
      }, T.createElement("div", {
        style: {
          height: 23.5,
          width: "100%",
          background: f,
          borderRadius: 4,
          border: d(f)
        },
        onClick: function() {
          return u(f);
        },
        id: "rbgcp-preset-".concat(p).concat(l)
      }));
    })));
  }, iA = function() {
    return iA = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, iA.apply(this, arguments);
  }, NC = function() {
    var A = TA().defaultStyles, e = {
      fill: "none",
      strokeWidth: "1.8px"
    };
    return T.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 15
      }
    }, T.createElement("polyline", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: iA(iA({}, e), A.rbgcpControlIcon),
      points: "17.96 4.31 2.04 4.3 3.75 4.3 4.81 17.29 5.16 17.96 5.74 18.47 6.59 18.62 13.64 18.62 14.52 18.32 15.07 17.68 15.29 17.12 16.28 4.3 12.87 4.3 12.87 2.38 12.48 1.75 11.83 1.46 8.4 1.46 7.64 1.68 7.26 2.21 7.16 2.52 7.17 4.23"
    }));
  }, GC = function(A) {
    var e = A.color, t = TA().defaultStyles, r = e ?? "", n = {
      fill: "none",
      strokeWidth: "1.8px"
    };
    return T.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 14
      }
    }, T.createElement("polyline", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: iA(iA(iA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "0.9 12.73 0.9 19.1 7.27 19.1 0.9 19.1 19.1 0.9 12.73 0.9 19.1 0.9 19.1 7.27"
    }));
  }, VC = function(A) {
    var e = A.color, t = TA().defaultStyles, r = e ?? "", n = {
      fill: "none",
      strokeMiterlimit: 10,
      strokeWidth: "1.8px"
    };
    return T.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 15
      }
    }, T.createElement("circle", {
      style: iA(iA(iA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      cx: "10",
      cy: "10",
      r: "9"
    }), T.createElement("circle", {
      style: iA(iA(iA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      cx: "10",
      cy: "10",
      r: "5"
    }));
  }, $C = function(A) {
    var e = A.color, t = TA().defaultStyles, r = e ?? "", n = {
      fill: "none",
      strokeWidth: "1.8px"
    }, o = {
      strokeWidth: "1.8px"
    };
    return T.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 17
      }
    }, T.createElement("polyline", {
      fillRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: iA(iA(iA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "3.74 2.75 3.74 12.69 0.9 12.71 6.59 12.71"
    }), T.createElement("line", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: iA(iA(iA({}, o), t.rbgcpControlIcon), r && {
        stroke: r,
        fill: r
      }),
      x1: "3.74",
      y1: "17.26",
      x2: "3.74",
      y2: "15.21"
    }), T.createElement("polyline", {
      fillRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: iA(iA(iA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "10.1 17.25 10.1 7.31 12.95 7.29 7.26 7.29"
    }), T.createElement("line", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: iA(iA(iA({}, o), t.rbgcpControlIcon), r && {
        stroke: r,
        fill: r
      }),
      x1: "10.1",
      y1: "2.74",
      x2: "10.1",
      y2: "4.79"
    }), T.createElement("polyline", {
      fillRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: iA(iA(iA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "16.26 2.75 16.26 12.69 13.41 12.71 19.1 12.71"
    }), T.createElement("line", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: iA(iA(iA({}, o), t.rbgcpControlIcon), r && {
        stroke: r,
        fill: r
      }),
      x1: "16.26",
      y1: "17.26",
      x2: "16.26",
      y2: "15.21"
    }));
  }, WC = function(A) {
    var e = A.color, t = TA().defaultStyles, r = e ?? "", n = {
      fill: "none",
      strokeWidth: "1.8px"
    };
    return T.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 17
      }
    }, T.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: iA(iA(iA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      d: "M6.35,2.72a4.85,4.85,0,0,1,1.86.16,7.94,7.94,0,0,1,.88.43,3.66,3.66,0,0,0,.85.49c.25,0,.58-.27.81-.39A8.25,8.25,0,0,1,11.7,3a4,4,0,0,1,1.79-.23,3.21,3.21,0,0,0-1.34.09,6.39,6.39,0,0,0-1.47.63c-.45.25-.7.3-.7.86s0,1.18,0,1.78c0,1.3,0,2.61,0,3.92h0v5.63a2.46,2.46,0,0,1,0,.47c-.07.28-.43.42-.7.57a5.29,5.29,0,0,1-2.94.61A9.3,9.3,0,0,0,8,17.15l1.09-.37.89-.52c.06,0,.48.21.56.25.32.14.64.27,1,.38a8.54,8.54,0,0,0,2.12.4"
    }), T.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: iA(iA(iA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      d: "M7.57,5.73C6,5.7,4.5,5.65,3,5.77a2.28,2.28,0,0,0-1.76.74A2.3,2.3,0,0,0,.94,7.83l0,3.82A4.73,4.73,0,0,0,1,12.9a1.64,1.64,0,0,0,.68,1,2.44,2.44,0,0,0,1,.27,25,25,0,0,0,4.74.09"
    }), T.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: iA(iA(iA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      d: "M12.43,14.32a44.12,44.12,0,0,0,4.6,0,2.24,2.24,0,0,0,1.76-.74,2.29,2.29,0,0,0,.27-1.32l0-3.81A4.81,4.81,0,0,0,19,7.15a1.62,1.62,0,0,0-.68-1,2.31,2.31,0,0,0-1-.28,26.8,26.8,0,0,0-4.74-.09"
    }));
  }, jC = function(A) {
    var e = A.color, t = TA().defaultStyles, r = e ?? "", n = {
      strokeMiterlimit: 10,
      strokeWidth: "0.5px"
    };
    return T.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 17
      }
    }, T.createElement("circle", {
      style: iA(iA({}, t.rbgcpControlIcon2), r && {
        fill: r
      }),
      cx: "9.36",
      cy: "5.07",
      r: "1.71"
    }), T.createElement("circle", {
      style: iA(iA({}, t.rbgcpControlIcon2), r && {
        fill: r
      }),
      cx: "13.93",
      cy: "6.91",
      r: "1.71"
    }), T.createElement("circle", {
      style: iA(iA({}, t.rbgcpControlIcon2), r && {
        fill: r
      }),
      cx: "5.8",
      cy: "7.55",
      r: "1.71"
    }), T.createElement("circle", {
      style: iA(iA({}, t.rbgcpControlIcon2), r && {
        fill: r
      }),
      cx: "5.45",
      cy: "12.04",
      r: "1.71"
    }), T.createElement("path", {
      style: iA(iA(iA(iA({}, n), t.rbgcpControlIcon), t.rbgcpControlIcon2), r && {
        fill: r,
        stroke: r
      }),
      d: "M19.1,10c0,3.58-2.12,2.94-4.06,2.35-1.15-.34-2.24-.67-2.77-.08-.68.78-.54,2.07-.39,3.33.2,1.79.39,3.5-1.88,3.5A9.1,9.1,0,1,1,19.1,10ZM10,18c.7,0,.74-.19.75-.2a2.67,2.67,0,0,0,.07-1.27c0-.19,0-.42-.06-.67-.06-.53-.13-1.15-.14-1.67a3.82,3.82,0,0,1,.8-2.63,2.14,2.14,0,0,1,1.45-.7,4.36,4.36,0,0,1,1.32.12c.39.08.8.21,1.16.32h0c.39.12.74.23,1.08.3.74.17,1,.1,1.13,0S18,11.32,18,10a8,8,0,1,0-8,8Z"
    }));
  }, zC = function(A) {
    var e = A.color, t = TA().defaultStyles, r = e ?? "", n = {
      fill: "none",
      strokeMiterlimit: 10,
      strokeWidth: "1.8px"
    };
    return T.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 15
      }
    }, T.createElement("polyline", {
      strokeLinecap: "round",
      style: iA(iA(iA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "13.86 2.01 1.7 16.99 18.77 16.99"
    }), T.createElement("polyline", {
      strokeLinecap: "round",
      style: iA(iA(iA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "10.96 16.38 10.96 16.38 10.74 15.7 10.44 14.97 10.06 14.21 9.72 13.63 9.21 12.89 8.85 12.44 8.41 11.95 7.91 11.45 7.51 11.1"
    }));
  }, XC = function() {
    var A = TA().defaultStyles;
    return T.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 20,
        marginRight: 1
      }
    }, T.createElement("path", {
      style: iA({}, A.rbgcpControlIcon2),
      d: "M2.39,8c-.63,0-1,.21-1,.63A.49.49,0,0,0,1.67,9a6.48,6.48,0,0,0,1.11.43A3,3,0,0,1,4,10.09a1.47,1.47,0,0,1,.35,1.09,1.75,1.75,0,0,1-.57,1.42,2.21,2.21,0,0,1-1.48.48,8.32,8.32,0,0,1-1.68-.21l-.31-.06.12-.94a13.7,13.7,0,0,0,1.8.16c.61,0,.92-.26.92-.77a.52.52,0,0,0-.21-.44,3.13,3.13,0,0,0-.85-.34A3.32,3.32,0,0,1,.66,9.79a1.43,1.43,0,0,1-.42-1.1A1.6,1.6,0,0,1,.78,7.36a2.32,2.32,0,0,1,1.49-.44,10.46,10.46,0,0,1,1.64.17l.32.07-.1.95C3.31,8,2.73,8,2.39,8Z"
    }), T.createElement("path", {
      style: iA({}, A.rbgcpControlIcon2),
      d: "M4.79,8.09V7H9.16V8.09H7.59V13H6.38V8.09Z"
    }), T.createElement("path", {
      style: iA({}, A.rbgcpControlIcon2),
      d: "M14,12.34a2.25,2.25,0,0,1-1.91.74,2.24,2.24,0,0,1-1.91-.74A3.85,3.85,0,0,1,9.61,10a4,4,0,0,1,.56-2.34,2.2,2.2,0,0,1,1.91-.77A2.21,2.21,0,0,1,14,7.69,4,4,0,0,1,14.55,10,3.85,3.85,0,0,1,14,12.34Zm-2.88-.77a1,1,0,0,0,1,.46,1,1,0,0,0,1-.46A3.25,3.25,0,0,0,13.3,10,3.45,3.45,0,0,0,13,8.46a1,1,0,0,0-1-.49,1,1,0,0,0-1,.49A3.43,3.43,0,0,0,10.85,10,3.38,3.38,0,0,0,11.11,11.57Z"
    }), T.createElement("path", {
      style: iA({}, A.rbgcpControlIcon2),
      d: "M17.77,11.24h-1V13H15.58V7h2.19a1.85,1.85,0,0,1,2.11,2.07,2.21,2.21,0,0,1-.54,1.6A2.07,2.07,0,0,1,17.77,11.24Zm-1-1h1c.6,0,.9-.37.9-1.12a1.18,1.18,0,0,0-.22-.79.88.88,0,0,0-.68-.24h-1Z"
    }));
  }, YC = function(A) {
    var e, t = A.children, r = "id" + Math.random().toString(16).slice(2), n = h.useRef((e = document.getElementById(r)) !== null && e !== void 0 ? e : document.createElement("div")), o = h.useState(!n.current.parentElement)[0];
    return h.useEffect(function() {
      var i = n.current;
      return o && (n.current.id = r, document.body.appendChild(n.current)), function() {
        o && i.parentElement && i.parentElement.removeChild(i);
      };
    }, [
      r
    ]), ul.createPortal(t, n.current);
  };
  const JC = h.memo(YC);
  var ss = function(A, e) {
    return ss = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(t, r) {
      t.__proto__ = r;
    } || function(t, r) {
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }, ss(A, e);
  };
  function Ne(A, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
    ss(A, e);
    function t() {
      this.constructor = A;
    }
    A.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
  }
  var ls = function() {
    return ls = Object.assign || function(e) {
      for (var t, r = 1, n = arguments.length; r < n; r++) {
        t = arguments[r];
        for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
      }
      return e;
    }, ls.apply(this, arguments);
  };
  function we(A, e, t, r) {
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
  function he(A, e) {
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
  function jn(A, e, t) {
    if (arguments.length === 2) for (var r = 0, n = e.length, o; r < n; r++) (o || !(r in e)) && (o || (o = Array.prototype.slice.call(e, 0, r)), o[r] = e[r]);
    return A.concat(o || e);
  }
  var mt = (function() {
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
  })(), Vi = function(A, e) {
    return mt.fromClientRect(A, e.getBoundingClientRect());
  }, ZC = function(A) {
    var e = A.body, t = A.documentElement;
    if (!e || !t) throw new Error("Unable to get document size");
    var r = Math.max(Math.max(e.scrollWidth, t.scrollWidth), Math.max(e.offsetWidth, t.offsetWidth), Math.max(e.clientWidth, t.clientWidth)), n = Math.max(Math.max(e.scrollHeight, t.scrollHeight), Math.max(e.offsetHeight, t.offsetHeight), Math.max(e.clientHeight, t.clientHeight));
    return new mt(0, 0, r, n);
  }, $i = function(A) {
    for (var e = [], t = 0, r = A.length; t < r; ) {
      var n = A.charCodeAt(t++);
      if (n >= 55296 && n <= 56319 && t < r) {
        var o = A.charCodeAt(t++);
        (o & 64512) === 56320 ? e.push(((n & 1023) << 10) + (o & 1023) + 65536) : (e.push(n), t--);
      } else e.push(n);
    }
    return e;
  }, YA = function() {
    for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
    if (String.fromCodePoint) return String.fromCodePoint.apply(String, A);
    var t = A.length;
    if (!t) return "";
    for (var r = [], n = -1, o = ""; ++n < t; ) {
      var i = A[n];
      i <= 65535 ? r.push(i) : (i -= 65536, r.push((i >> 10) + 55296, i % 1024 + 56320)), (n + 1 === t || r.length > 16384) && (o += String.fromCharCode.apply(String, r), r.length = 0);
    }
    return o;
  }, Mc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", qC = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (var zn = 0; zn < Mc.length; zn++) qC[Mc.charCodeAt(zn)] = zn;
  var Kc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Vr = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (var Xn = 0; Xn < Kc.length; Xn++) Vr[Kc.charCodeAt(Xn)] = Xn;
  var Ay = function(A) {
    var e = A.length * 0.75, t = A.length, r, n = 0, o, i, a, s;
    A[A.length - 1] === "=" && (e--, A[A.length - 2] === "=" && e--);
    var l = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(e) : new Array(e), c = Array.isArray(l) ? l : new Uint8Array(l);
    for (r = 0; r < t; r += 4) o = Vr[A.charCodeAt(r)], i = Vr[A.charCodeAt(r + 1)], a = Vr[A.charCodeAt(r + 2)], s = Vr[A.charCodeAt(r + 3)], c[n++] = o << 2 | i >> 4, c[n++] = (i & 15) << 4 | a >> 2, c[n++] = (a & 3) << 6 | s & 63;
    return l;
  }, ey = function(A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 2) t.push(A[r + 1] << 8 | A[r]);
    return t;
  }, ty = function(A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 4) t.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]);
    return t;
  }, zt = 5, yl = 11, ha = 2, ry = yl - zt, df = 65536 >> zt, ny = 1 << zt, Ba = ny - 1, oy = 1024 >> zt, iy = df + oy, ay = iy, sy = 32, ly = ay + sy, cy = 65536 >> yl, uy = 1 << ry, dy = uy - 1, Dc = function(A, e, t) {
    return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t));
  }, fy = function(A, e, t) {
    return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t));
  }, py = function(A, e) {
    var t = Ay(A), r = Array.isArray(t) ? ty(t) : new Uint32Array(t), n = Array.isArray(t) ? ey(t) : new Uint16Array(t), o = 24, i = Dc(n, o / 2, r[4] / 2), a = r[5] === 2 ? Dc(n, (o + r[4]) / 2) : fy(r, Math.ceil((o + r[4]) / 4));
    return new gy(r[0], r[1], r[2], r[3], i, a);
  }, gy = (function() {
    function A(e, t, r, n, o, i) {
      this.initialValue = e, this.errorValue = t, this.highStart = r, this.highValueIndex = n, this.index = o, this.data = i;
    }
    return A.prototype.get = function(e) {
      var t;
      if (e >= 0) {
        if (e < 55296 || e > 56319 && e <= 65535) return t = this.index[e >> zt], t = (t << ha) + (e & Ba), this.data[t];
        if (e <= 65535) return t = this.index[df + (e - 55296 >> zt)], t = (t << ha) + (e & Ba), this.data[t];
        if (e < this.highStart) return t = ly - cy + (e >> yl), t = this.index[t], t += e >> zt & dy, t = this.index[t], t = (t << ha) + (e & Ba), this.data[t];
        if (e <= 1114111) return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, A;
  })(), Pc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", hy = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (var Yn = 0; Yn < Pc.length; Yn++) hy[Pc.charCodeAt(Yn)] = Yn;
  var By = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", _c = 50, my = 1, ff = 2, pf = 3, vy = 4, wy = 5, Nc = 7, gf = 8, Gc = 9, Ft = 10, cs = 11, Vc = 12, us = 13, Cy = 14, $r = 15, ds = 16, Jn = 17, Or = 18, yy = 19, $c = 20, fs = 21, Mr = 22, ma = 23, rr = 24, Ue = 25, Wr = 26, jr = 27, nr = 28, by = 29, Nt = 30, Qy = 31, Zn = 32, qn = 33, ps = 34, gs = 35, hs = 36, gn = 37, Bs = 38, Fo = 39, Uo = 40, va = 41, hf = 42, Fy = 43, Uy = [
    9001,
    65288
  ], Bf = "!", QA = "\xD7", Ao = "\xF7", ms = py(By), ut = [
    Nt,
    hs
  ], vs = [
    my,
    ff,
    pf,
    wy
  ], mf = [
    Ft,
    gf
  ], Wc = [
    jr,
    Wr
  ], Sy = vs.concat(mf), jc = [
    Bs,
    Fo,
    Uo,
    ps,
    gs
  ], xy = [
    $r,
    us
  ], Ey = function(A, e) {
    e === void 0 && (e = "strict");
    var t = [], r = [], n = [];
    return A.forEach(function(o, i) {
      var a = ms.get(o);
      if (a > _c ? (n.push(true), a -= _c) : n.push(false), [
        "normal",
        "auto",
        "loose"
      ].indexOf(e) !== -1 && [
        8208,
        8211,
        12316,
        12448
      ].indexOf(o) !== -1) return r.push(i), t.push(ds);
      if (a === vy || a === cs) {
        if (i === 0) return r.push(i), t.push(Nt);
        var s = t[i - 1];
        return Sy.indexOf(s) === -1 ? (r.push(r[i - 1]), t.push(s)) : (r.push(i), t.push(Nt));
      }
      if (r.push(i), a === Qy) return t.push(e === "strict" ? fs : gn);
      if (a === hf || a === by) return t.push(Nt);
      if (a === Fy) return o >= 131072 && o <= 196605 || o >= 196608 && o <= 262141 ? t.push(gn) : t.push(Nt);
      t.push(a);
    }), [
      r,
      t,
      n
    ];
  }, wa = function(A, e, t, r) {
    var n = r[t];
    if (Array.isArray(A) ? A.indexOf(n) !== -1 : A === n) for (var o = t; o <= r.length; ) {
      o++;
      var i = r[o];
      if (i === e) return true;
      if (i !== Ft) break;
    }
    if (n === Ft) for (var o = t; o > 0; ) {
      o--;
      var a = r[o];
      if (Array.isArray(A) ? A.indexOf(a) !== -1 : A === a) for (var s = t; s <= r.length; ) {
        s++;
        var i = r[s];
        if (i === e) return true;
        if (i !== Ft) break;
      }
      if (a !== Ft) break;
    }
    return false;
  }, zc = function(A, e) {
    for (var t = A; t >= 0; ) {
      var r = e[t];
      if (r === Ft) t--;
      else return r;
    }
    return 0;
  }, Iy = function(A, e, t, r, n) {
    if (t[r] === 0) return QA;
    var o = r - 1;
    if (Array.isArray(n) && n[o] === true) return QA;
    var i = o - 1, a = o + 1, s = e[o], l = i >= 0 ? e[i] : 0, c = e[a];
    if (s === ff && c === pf) return QA;
    if (vs.indexOf(s) !== -1) return Bf;
    if (vs.indexOf(c) !== -1 || mf.indexOf(c) !== -1) return QA;
    if (zc(o, e) === gf) return Ao;
    if (ms.get(A[o]) === cs || (s === Zn || s === qn) && ms.get(A[a]) === cs || s === Nc || c === Nc || s === Gc || [
      Ft,
      us,
      $r
    ].indexOf(s) === -1 && c === Gc || [
      Jn,
      Or,
      yy,
      rr,
      nr
    ].indexOf(c) !== -1 || zc(o, e) === Mr || wa(ma, Mr, o, e) || wa([
      Jn,
      Or
    ], fs, o, e) || wa(Vc, Vc, o, e)) return QA;
    if (s === Ft) return Ao;
    if (s === ma || c === ma) return QA;
    if (c === ds || s === ds) return Ao;
    if ([
      us,
      $r,
      fs
    ].indexOf(c) !== -1 || s === Cy || l === hs && xy.indexOf(s) !== -1 || s === nr && c === hs || c === $c || ut.indexOf(c) !== -1 && s === Ue || ut.indexOf(s) !== -1 && c === Ue || s === jr && [
      gn,
      Zn,
      qn
    ].indexOf(c) !== -1 || [
      gn,
      Zn,
      qn
    ].indexOf(s) !== -1 && c === Wr || ut.indexOf(s) !== -1 && Wc.indexOf(c) !== -1 || Wc.indexOf(s) !== -1 && ut.indexOf(c) !== -1 || [
      jr,
      Wr
    ].indexOf(s) !== -1 && (c === Ue || [
      Mr,
      $r
    ].indexOf(c) !== -1 && e[a + 1] === Ue) || [
      Mr,
      $r
    ].indexOf(s) !== -1 && c === Ue || s === Ue && [
      Ue,
      nr,
      rr
    ].indexOf(c) !== -1) return QA;
    if ([
      Ue,
      nr,
      rr,
      Jn,
      Or
    ].indexOf(c) !== -1) for (var u = o; u >= 0; ) {
      var d = e[u];
      if (d === Ue) return QA;
      if ([
        nr,
        rr
      ].indexOf(d) !== -1) u--;
      else break;
    }
    if ([
      jr,
      Wr
    ].indexOf(c) !== -1) for (var u = [
      Jn,
      Or
    ].indexOf(s) !== -1 ? i : o; u >= 0; ) {
      var d = e[u];
      if (d === Ue) return QA;
      if ([
        nr,
        rr
      ].indexOf(d) !== -1) u--;
      else break;
    }
    if (Bs === s && [
      Bs,
      Fo,
      ps,
      gs
    ].indexOf(c) !== -1 || [
      Fo,
      ps
    ].indexOf(s) !== -1 && [
      Fo,
      Uo
    ].indexOf(c) !== -1 || [
      Uo,
      gs
    ].indexOf(s) !== -1 && c === Uo || jc.indexOf(s) !== -1 && [
      $c,
      Wr
    ].indexOf(c) !== -1 || jc.indexOf(c) !== -1 && s === jr || ut.indexOf(s) !== -1 && ut.indexOf(c) !== -1 || s === rr && ut.indexOf(c) !== -1 || ut.concat(Ue).indexOf(s) !== -1 && c === Mr && Uy.indexOf(A[a]) === -1 || ut.concat(Ue).indexOf(c) !== -1 && s === Or) return QA;
    if (s === va && c === va) {
      for (var f = t[o], p = 1; f > 0 && (f--, e[f] === va); ) p++;
      if (p % 2 !== 0) return QA;
    }
    return s === Zn && c === qn ? QA : Ao;
  }, Hy = function(A, e) {
    e || (e = {
      lineBreak: "normal",
      wordBreak: "normal"
    });
    var t = Ey(A, e.lineBreak), r = t[0], n = t[1], o = t[2];
    (e.wordBreak === "break-all" || e.wordBreak === "break-word") && (n = n.map(function(a) {
      return [
        Ue,
        Nt,
        hf
      ].indexOf(a) !== -1 ? gn : a;
    }));
    var i = e.wordBreak === "keep-all" ? o.map(function(a, s) {
      return a && A[s] >= 19968 && A[s] <= 40959;
    }) : void 0;
    return [
      r,
      n,
      i
    ];
  }, Ty = (function() {
    function A(e, t, r, n) {
      this.codePoints = e, this.required = t === Bf, this.start = r, this.end = n;
    }
    return A.prototype.slice = function() {
      return YA.apply(void 0, this.codePoints.slice(this.start, this.end));
    }, A;
  })(), ky = function(A, e) {
    var t = $i(A), r = Hy(t, e), n = r[0], o = r[1], i = r[2], a = t.length, s = 0, l = 0;
    return {
      next: function() {
        if (l >= a) return {
          done: true,
          value: null
        };
        for (var c = QA; l < a && (c = Iy(t, o, n, ++l, i)) === QA; ) ;
        if (c !== QA || l === a) {
          var u = new Ty(t, c, s, l);
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
  }, Ly = 1, Ry = 2, xn = 4, Xc = 8, Go = 10, Yc = 47, tn = 92, Oy = 9, My = 32, eo = 34, Kr = 61, Ky = 35, Dy = 36, Py = 37, to = 39, ro = 40, Dr = 41, _y = 95, be = 45, Ny = 33, Gy = 60, Vy = 62, $y = 64, Wy = 91, jy = 93, zy = 61, Xy = 123, no = 63, Yy = 125, Jc = 124, Jy = 126, Zy = 128, Zc = 65533, Ca = 42, Wt = 43, qy = 44, Ab = 58, eb = 59, hn = 46, tb = 0, rb = 8, nb = 11, ob = 14, ib = 31, ab = 127, We = -1, vf = 48, wf = 97, Cf = 101, sb = 102, lb = 117, cb = 122, yf = 65, bf = 69, Qf = 70, ub = 85, db = 90, Be = function(A) {
    return A >= vf && A <= 57;
  }, fb = function(A) {
    return A >= 55296 && A <= 57343;
  }, or = function(A) {
    return Be(A) || A >= yf && A <= Qf || A >= wf && A <= sb;
  }, pb = function(A) {
    return A >= wf && A <= cb;
  }, gb = function(A) {
    return A >= yf && A <= db;
  }, hb = function(A) {
    return pb(A) || gb(A);
  }, Bb = function(A) {
    return A >= Zy;
  }, oo = function(A) {
    return A === Go || A === Oy || A === My;
  }, Vo = function(A) {
    return hb(A) || Bb(A) || A === _y;
  }, qc = function(A) {
    return Vo(A) || Be(A) || A === be;
  }, mb = function(A) {
    return A >= tb && A <= rb || A === nb || A >= ob && A <= ib || A === ab;
  }, Qt = function(A, e) {
    return A !== tn ? false : e !== Go;
  }, io = function(A, e, t) {
    return A === be ? Vo(e) || Qt(e, t) : Vo(A) ? true : !!(A === tn && Qt(A, e));
  }, ya = function(A, e, t) {
    return A === Wt || A === be ? Be(e) ? true : e === hn && Be(t) : Be(A === hn ? e : A);
  }, vb = function(A) {
    var e = 0, t = 1;
    (A[e] === Wt || A[e] === be) && (A[e] === be && (t = -1), e++);
    for (var r = []; Be(A[e]); ) r.push(A[e++]);
    var n = r.length ? parseInt(YA.apply(void 0, r), 10) : 0;
    A[e] === hn && e++;
    for (var o = []; Be(A[e]); ) o.push(A[e++]);
    var i = o.length, a = i ? parseInt(YA.apply(void 0, o), 10) : 0;
    (A[e] === bf || A[e] === Cf) && e++;
    var s = 1;
    (A[e] === Wt || A[e] === be) && (A[e] === be && (s = -1), e++);
    for (var l = []; Be(A[e]); ) l.push(A[e++]);
    var c = l.length ? parseInt(YA.apply(void 0, l), 10) : 0;
    return t * (n + a * Math.pow(10, -i)) * Math.pow(10, s * c);
  }, wb = {
    type: 2
  }, Cb = {
    type: 3
  }, yb = {
    type: 4
  }, bb = {
    type: 13
  }, Qb = {
    type: 8
  }, Fb = {
    type: 21
  }, Ub = {
    type: 9
  }, Sb = {
    type: 10
  }, xb = {
    type: 11
  }, Eb = {
    type: 12
  }, Ib = {
    type: 14
  }, ao = {
    type: 23
  }, Hb = {
    type: 1
  }, Tb = {
    type: 25
  }, kb = {
    type: 24
  }, Lb = {
    type: 26
  }, Rb = {
    type: 27
  }, Ob = {
    type: 28
  }, Mb = {
    type: 29
  }, Kb = {
    type: 31
  }, ws = {
    type: 32
  }, Ff = (function() {
    function A() {
      this._value = [];
    }
    return A.prototype.write = function(e) {
      this._value = this._value.concat($i(e));
    }, A.prototype.read = function() {
      for (var e = [], t = this.consumeToken(); t !== ws; ) e.push(t), t = this.consumeToken();
      return e;
    }, A.prototype.consumeToken = function() {
      var e = this.consumeCodePoint();
      switch (e) {
        case eo:
          return this.consumeStringToken(eo);
        case Ky:
          var t = this.peekCodePoint(0), r = this.peekCodePoint(1), n = this.peekCodePoint(2);
          if (qc(t) || Qt(r, n)) {
            var o = io(t, r, n) ? Ry : Ly, i = this.consumeName();
            return {
              type: 5,
              value: i,
              flags: o
            };
          }
          break;
        case Dy:
          if (this.peekCodePoint(0) === Kr) return this.consumeCodePoint(), bb;
          break;
        case to:
          return this.consumeStringToken(to);
        case ro:
          return wb;
        case Dr:
          return Cb;
        case Ca:
          if (this.peekCodePoint(0) === Kr) return this.consumeCodePoint(), Ib;
          break;
        case Wt:
          if (ya(e, this.peekCodePoint(0), this.peekCodePoint(1))) return this.reconsumeCodePoint(e), this.consumeNumericToken();
          break;
        case qy:
          return yb;
        case be:
          var a = e, s = this.peekCodePoint(0), l = this.peekCodePoint(1);
          if (ya(a, s, l)) return this.reconsumeCodePoint(e), this.consumeNumericToken();
          if (io(a, s, l)) return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
          if (s === be && l === Vy) return this.consumeCodePoint(), this.consumeCodePoint(), kb;
          break;
        case hn:
          if (ya(e, this.peekCodePoint(0), this.peekCodePoint(1))) return this.reconsumeCodePoint(e), this.consumeNumericToken();
          break;
        case Yc:
          if (this.peekCodePoint(0) === Ca) for (this.consumeCodePoint(); ; ) {
            var c = this.consumeCodePoint();
            if (c === Ca && (c = this.consumeCodePoint(), c === Yc)) return this.consumeToken();
            if (c === We) return this.consumeToken();
          }
          break;
        case Ab:
          return Lb;
        case eb:
          return Rb;
        case Gy:
          if (this.peekCodePoint(0) === Ny && this.peekCodePoint(1) === be && this.peekCodePoint(2) === be) return this.consumeCodePoint(), this.consumeCodePoint(), Tb;
          break;
        case $y:
          var u = this.peekCodePoint(0), d = this.peekCodePoint(1), f = this.peekCodePoint(2);
          if (io(u, d, f)) {
            var i = this.consumeName();
            return {
              type: 7,
              value: i
            };
          }
          break;
        case Wy:
          return Ob;
        case tn:
          if (Qt(e, this.peekCodePoint(0))) return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
          break;
        case jy:
          return Mb;
        case zy:
          if (this.peekCodePoint(0) === Kr) return this.consumeCodePoint(), Qb;
          break;
        case Xy:
          return xb;
        case Yy:
          return Eb;
        case lb:
        case ub:
          var p = this.peekCodePoint(0), B = this.peekCodePoint(1);
          return p === Wt && (or(B) || B === no) && (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
        case Jc:
          if (this.peekCodePoint(0) === Kr) return this.consumeCodePoint(), Ub;
          if (this.peekCodePoint(0) === Jc) return this.consumeCodePoint(), Fb;
          break;
        case Jy:
          if (this.peekCodePoint(0) === Kr) return this.consumeCodePoint(), Sb;
          break;
        case We:
          return ws;
      }
      return oo(e) ? (this.consumeWhiteSpace(), Kb) : Be(e) ? (this.reconsumeCodePoint(e), this.consumeNumericToken()) : Vo(e) ? (this.reconsumeCodePoint(e), this.consumeIdentLikeToken()) : {
        type: 6,
        value: YA(e)
      };
    }, A.prototype.consumeCodePoint = function() {
      var e = this._value.shift();
      return typeof e > "u" ? -1 : e;
    }, A.prototype.reconsumeCodePoint = function(e) {
      this._value.unshift(e);
    }, A.prototype.peekCodePoint = function(e) {
      return e >= this._value.length ? -1 : this._value[e];
    }, A.prototype.consumeUnicodeRangeToken = function() {
      for (var e = [], t = this.consumeCodePoint(); or(t) && e.length < 6; ) e.push(t), t = this.consumeCodePoint();
      for (var r = false; t === no && e.length < 6; ) e.push(t), t = this.consumeCodePoint(), r = true;
      if (r) {
        var n = parseInt(YA.apply(void 0, e.map(function(s) {
          return s === no ? vf : s;
        })), 16), o = parseInt(YA.apply(void 0, e.map(function(s) {
          return s === no ? Qf : s;
        })), 16);
        return {
          type: 30,
          start: n,
          end: o
        };
      }
      var i = parseInt(YA.apply(void 0, e), 16);
      if (this.peekCodePoint(0) === be && or(this.peekCodePoint(1))) {
        this.consumeCodePoint(), t = this.consumeCodePoint();
        for (var a = []; or(t) && a.length < 6; ) a.push(t), t = this.consumeCodePoint();
        var o = parseInt(YA.apply(void 0, a), 16);
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
      return e.toLowerCase() === "url" && this.peekCodePoint(0) === ro ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === ro ? (this.consumeCodePoint(), {
        type: 19,
        value: e
      }) : {
        type: 20,
        value: e
      };
    }, A.prototype.consumeUrlToken = function() {
      var e = [];
      if (this.consumeWhiteSpace(), this.peekCodePoint(0) === We) return {
        type: 22,
        value: ""
      };
      var t = this.peekCodePoint(0);
      if (t === to || t === eo) {
        var r = this.consumeStringToken(this.consumeCodePoint());
        return r.type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === We || this.peekCodePoint(0) === Dr) ? (this.consumeCodePoint(), {
          type: 22,
          value: r.value
        }) : (this.consumeBadUrlRemnants(), ao);
      }
      for (; ; ) {
        var n = this.consumeCodePoint();
        if (n === We || n === Dr) return {
          type: 22,
          value: YA.apply(void 0, e)
        };
        if (oo(n)) return this.consumeWhiteSpace(), this.peekCodePoint(0) === We || this.peekCodePoint(0) === Dr ? (this.consumeCodePoint(), {
          type: 22,
          value: YA.apply(void 0, e)
        }) : (this.consumeBadUrlRemnants(), ao);
        if (n === eo || n === to || n === ro || mb(n)) return this.consumeBadUrlRemnants(), ao;
        if (n === tn) if (Qt(n, this.peekCodePoint(0))) e.push(this.consumeEscapedCodePoint());
        else return this.consumeBadUrlRemnants(), ao;
        else e.push(n);
      }
    }, A.prototype.consumeWhiteSpace = function() {
      for (; oo(this.peekCodePoint(0)); ) this.consumeCodePoint();
    }, A.prototype.consumeBadUrlRemnants = function() {
      for (; ; ) {
        var e = this.consumeCodePoint();
        if (e === Dr || e === We) return;
        Qt(e, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
      }
    }, A.prototype.consumeStringSlice = function(e) {
      for (var t = 5e4, r = ""; e > 0; ) {
        var n = Math.min(t, e);
        r += YA.apply(void 0, this._value.splice(0, n)), e -= n;
      }
      return this._value.shift(), r;
    }, A.prototype.consumeStringToken = function(e) {
      var t = "", r = 0;
      do {
        var n = this._value[r];
        if (n === We || n === void 0 || n === e) return t += this.consumeStringSlice(r), {
          type: 0,
          value: t
        };
        if (n === Go) return this._value.splice(0, r), Hb;
        if (n === tn) {
          var o = this._value[r + 1];
          o !== We && o !== void 0 && (o === Go ? (t += this.consumeStringSlice(r), r = -1, this._value.shift()) : Qt(n, o) && (t += this.consumeStringSlice(r), t += YA(this.consumeEscapedCodePoint()), r = -1));
        }
        r++;
      } while (true);
    }, A.prototype.consumeNumber = function() {
      var e = [], t = xn, r = this.peekCodePoint(0);
      for ((r === Wt || r === be) && e.push(this.consumeCodePoint()); Be(this.peekCodePoint(0)); ) e.push(this.consumeCodePoint());
      r = this.peekCodePoint(0);
      var n = this.peekCodePoint(1);
      if (r === hn && Be(n)) for (e.push(this.consumeCodePoint(), this.consumeCodePoint()), t = Xc; Be(this.peekCodePoint(0)); ) e.push(this.consumeCodePoint());
      r = this.peekCodePoint(0), n = this.peekCodePoint(1);
      var o = this.peekCodePoint(2);
      if ((r === bf || r === Cf) && ((n === Wt || n === be) && Be(o) || Be(n))) for (e.push(this.consumeCodePoint(), this.consumeCodePoint()), t = Xc; Be(this.peekCodePoint(0)); ) e.push(this.consumeCodePoint());
      return [
        vb(e),
        t
      ];
    }, A.prototype.consumeNumericToken = function() {
      var e = this.consumeNumber(), t = e[0], r = e[1], n = this.peekCodePoint(0), o = this.peekCodePoint(1), i = this.peekCodePoint(2);
      if (io(n, o, i)) {
        var a = this.consumeName();
        return {
          type: 15,
          number: t,
          flags: r,
          unit: a
        };
      }
      return n === Py ? (this.consumeCodePoint(), {
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
      if (or(e)) {
        for (var t = YA(e); or(this.peekCodePoint(0)) && t.length < 6; ) t += YA(this.consumeCodePoint());
        oo(this.peekCodePoint(0)) && this.consumeCodePoint();
        var r = parseInt(t, 16);
        return r === 0 || fb(r) || r > 1114111 ? Zc : r;
      }
      return e === We ? Zc : e;
    }, A.prototype.consumeName = function() {
      for (var e = ""; ; ) {
        var t = this.consumeCodePoint();
        if (qc(t)) e += YA(t);
        else if (Qt(t, this.peekCodePoint(0))) e += YA(this.consumeEscapedCodePoint());
        else return this.reconsumeCodePoint(t), e;
      }
    }, A;
  })(), Uf = (function() {
    function A(e) {
      this._tokens = e;
    }
    return A.create = function(e) {
      var t = new Ff();
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
        if (r.type === 32 || Pb(r, e)) return t;
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
      return typeof e > "u" ? ws : e;
    }, A.prototype.reconsumeToken = function(e) {
      this._tokens.unshift(e);
    }, A;
  })(), En = function(A) {
    return A.type === 15;
  }, Ir = function(A) {
    return A.type === 17;
  }, HA = function(A) {
    return A.type === 20;
  }, Db = function(A) {
    return A.type === 0;
  }, Cs = function(A, e) {
    return HA(A) && A.value === e;
  }, Sf = function(A) {
    return A.type !== 31;
  }, Fr = function(A) {
    return A.type !== 31 && A.type !== 4;
  }, it = function(A) {
    var e = [], t = [];
    return A.forEach(function(r) {
      if (r.type === 4) {
        if (t.length === 0) throw new Error("Error parsing function args, zero tokens for arg");
        e.push(t), t = [];
        return;
      }
      r.type !== 31 && t.push(r);
    }), t.length && e.push(t), e;
  }, Pb = function(A, e) {
    return e === 11 && A.type === 12 || e === 28 && A.type === 29 ? true : e === 2 && A.type === 3;
  }, Lt = function(A) {
    return A.type === 17 || A.type === 15;
  }, Ae = function(A) {
    return A.type === 16 || Lt(A);
  }, xf = function(A) {
    return A.length > 1 ? [
      A[0],
      A[1]
    ] : [
      A[0]
    ];
  }, fe = {
    type: 17,
    number: 0,
    flags: xn
  }, bl = {
    type: 16,
    number: 50,
    flags: xn
  }, Ut = {
    type: 16,
    number: 100,
    flags: xn
  }, zr = function(A, e, t) {
    var r = A[0], n = A[1];
    return [
      MA(r, e),
      MA(typeof n < "u" ? n : r, t)
    ];
  }, MA = function(A, e) {
    if (A.type === 16) return A.number / 100 * e;
    if (En(A)) switch (A.unit) {
      case "rem":
      case "em":
        return 16 * A.number;
      default:
        return A.number;
    }
    return A.number;
  }, Ef = "deg", If = "grad", Hf = "rad", Tf = "turn", Wi = {
    name: "angle",
    parse: function(A, e) {
      if (e.type === 15) switch (e.unit) {
        case Ef:
          return Math.PI * e.number / 180;
        case If:
          return Math.PI / 200 * e.number;
        case Hf:
          return e.number;
        case Tf:
          return Math.PI * 2 * e.number;
      }
      throw new Error("Unsupported angle type");
    }
  }, kf = function(A) {
    return A.type === 15 && (A.unit === Ef || A.unit === If || A.unit === Hf || A.unit === Tf);
  }, Lf = function(A) {
    var e = A.filter(HA).map(function(t) {
      return t.value;
    }).join(" ");
    switch (e) {
      case "to bottom right":
      case "to right bottom":
      case "left top":
      case "top left":
        return [
          fe,
          fe
        ];
      case "to top":
      case "bottom":
        return Re(0);
      case "to bottom left":
      case "to left bottom":
      case "right top":
      case "top right":
        return [
          fe,
          Ut
        ];
      case "to right":
      case "left":
        return Re(90);
      case "to top left":
      case "to left top":
      case "right bottom":
      case "bottom right":
        return [
          Ut,
          Ut
        ];
      case "to bottom":
      case "top":
        return Re(180);
      case "to top right":
      case "to right top":
      case "left bottom":
      case "bottom left":
        return [
          Ut,
          fe
        ];
      case "to left":
      case "right":
        return Re(270);
    }
    return 0;
  }, Re = function(A) {
    return Math.PI * A / 180;
  }, Et = {
    name: "color",
    parse: function(A, e) {
      if (e.type === 18) {
        var t = _b[e.name];
        if (typeof t > "u") throw new Error('Attempting to parse an unsupported color function "' + e.name + '"');
        return t(A, e.values);
      }
      if (e.type === 5) {
        if (e.value.length === 3) {
          var r = e.value.substring(0, 1), n = e.value.substring(1, 2), o = e.value.substring(2, 3);
          return St(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(o + o, 16), 1);
        }
        if (e.value.length === 4) {
          var r = e.value.substring(0, 1), n = e.value.substring(1, 2), o = e.value.substring(2, 3), i = e.value.substring(3, 4);
          return St(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(o + o, 16), parseInt(i + i, 16) / 255);
        }
        if (e.value.length === 6) {
          var r = e.value.substring(0, 2), n = e.value.substring(2, 4), o = e.value.substring(4, 6);
          return St(parseInt(r, 16), parseInt(n, 16), parseInt(o, 16), 1);
        }
        if (e.value.length === 8) {
          var r = e.value.substring(0, 2), n = e.value.substring(2, 4), o = e.value.substring(4, 6), i = e.value.substring(6, 8);
          return St(parseInt(r, 16), parseInt(n, 16), parseInt(o, 16), parseInt(i, 16) / 255);
        }
      }
      if (e.type === 20) {
        var a = pt[e.value.toUpperCase()];
        if (typeof a < "u") return a;
      }
      return pt.TRANSPARENT;
    }
  }, It = function(A) {
    return (255 & A) === 0;
  }, ne = function(A) {
    var e = 255 & A, t = 255 & A >> 8, r = 255 & A >> 16, n = 255 & A >> 24;
    return e < 255 ? "rgba(" + n + "," + r + "," + t + "," + e / 255 + ")" : "rgb(" + n + "," + r + "," + t + ")";
  }, St = function(A, e, t, r) {
    return (A << 24 | e << 16 | t << 8 | Math.round(r * 255) << 0) >>> 0;
  }, Au = function(A, e) {
    if (A.type === 17) return A.number;
    if (A.type === 16) {
      var t = e === 3 ? 1 : 255;
      return e === 3 ? A.number / 100 * t : Math.round(A.number / 100 * t);
    }
    return 0;
  }, eu = function(A, e) {
    var t = e.filter(Fr);
    if (t.length === 3) {
      var r = t.map(Au), n = r[0], o = r[1], i = r[2];
      return St(n, o, i, 1);
    }
    if (t.length === 4) {
      var a = t.map(Au), n = a[0], o = a[1], i = a[2], s = a[3];
      return St(n, o, i, s);
    }
    return 0;
  };
  function ba(A, e, t) {
    return t < 0 && (t += 1), t >= 1 && (t -= 1), t < 1 / 6 ? (e - A) * t * 6 + A : t < 1 / 2 ? e : t < 2 / 3 ? (e - A) * 6 * (2 / 3 - t) + A : A;
  }
  var tu = function(A, e) {
    var t = e.filter(Fr), r = t[0], n = t[1], o = t[2], i = t[3], a = (r.type === 17 ? Re(r.number) : Wi.parse(A, r)) / (Math.PI * 2), s = Ae(n) ? n.number / 100 : 0, l = Ae(o) ? o.number / 100 : 0, c = typeof i < "u" && Ae(i) ? MA(i, 1) : 1;
    if (s === 0) return St(l * 255, l * 255, l * 255, 1);
    var u = l <= 0.5 ? l * (s + 1) : l + s - l * s, d = l * 2 - u, f = ba(d, u, a + 1 / 3), p = ba(d, u, a), B = ba(d, u, a - 1 / 3);
    return St(f * 255, p * 255, B * 255, c);
  }, _b = {
    hsl: tu,
    hsla: tu,
    rgb: eu,
    rgba: eu
  }, rn = function(A, e) {
    return Et.parse(A, Uf.create(e).parseComponentValue());
  }, pt = {
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
  }, Nb = {
    name: "background-clip",
    initialValue: "border-box",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return e.map(function(t) {
        if (HA(t)) switch (t.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
        return 0;
      });
    }
  }, Gb = {
    name: "background-color",
    initialValue: "transparent",
    prefix: false,
    type: 3,
    format: "color"
  }, ji = function(A, e) {
    var t = Et.parse(A, e[0]), r = e[1];
    return r && Ae(r) ? {
      color: t,
      stop: r
    } : {
      color: t,
      stop: null
    };
  }, ru = function(A, e) {
    var t = A[0], r = A[A.length - 1];
    t.stop === null && (t.stop = fe), r.stop === null && (r.stop = Ut);
    for (var n = [], o = 0, i = 0; i < A.length; i++) {
      var a = A[i].stop;
      if (a !== null) {
        var s = MA(a, e);
        s > o ? n.push(s) : n.push(o), o = s;
      } else n.push(null);
    }
    for (var l = null, i = 0; i < n.length; i++) {
      var c = n[i];
      if (c === null) l === null && (l = i);
      else if (l !== null) {
        for (var u = i - l, d = n[l - 1], f = (c - d) / (u + 1), p = 1; p <= u; p++) n[l + p - 1] = f * p;
        l = null;
      }
    }
    return A.map(function(B, Q) {
      var m = B.color;
      return {
        color: m,
        stop: Math.max(Math.min(1, n[Q] / e), 0)
      };
    });
  }, Vb = function(A, e, t) {
    var r = e / 2, n = t / 2, o = MA(A[0], e) - r, i = n - MA(A[1], t);
    return (Math.atan2(i, o) + Math.PI * 2) % (Math.PI * 2);
  }, $b = function(A, e, t) {
    var r = typeof A == "number" ? A : Vb(A, e, t), n = Math.abs(e * Math.sin(r)) + Math.abs(t * Math.cos(r)), o = e / 2, i = t / 2, a = n / 2, s = Math.sin(r - Math.PI / 2) * a, l = Math.cos(r - Math.PI / 2) * a;
    return [
      n,
      o - l,
      o + l,
      i - s,
      i + s
    ];
  }, Pe = function(A, e) {
    return Math.sqrt(A * A + e * e);
  }, nu = function(A, e, t, r, n) {
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
      var s = a[0], l = a[1], c = Pe(t - s, r - l);
      return (n ? c < i.optimumDistance : c > i.optimumDistance) ? {
        optimumCorner: a,
        optimumDistance: c
      } : i;
    }, {
      optimumDistance: n ? 1 / 0 : -1 / 0,
      optimumCorner: null
    }).optimumCorner;
  }, Wb = function(A, e, t, r, n) {
    var o = 0, i = 0;
    switch (A.size) {
      case 0:
        A.shape === 0 ? o = i = Math.min(Math.abs(e), Math.abs(e - r), Math.abs(t), Math.abs(t - n)) : A.shape === 1 && (o = Math.min(Math.abs(e), Math.abs(e - r)), i = Math.min(Math.abs(t), Math.abs(t - n)));
        break;
      case 2:
        if (A.shape === 0) o = i = Math.min(Pe(e, t), Pe(e, t - n), Pe(e - r, t), Pe(e - r, t - n));
        else if (A.shape === 1) {
          var a = Math.min(Math.abs(t), Math.abs(t - n)) / Math.min(Math.abs(e), Math.abs(e - r)), s = nu(r, n, e, t, true), l = s[0], c = s[1];
          o = Pe(l - e, (c - t) / a), i = a * o;
        }
        break;
      case 1:
        A.shape === 0 ? o = i = Math.max(Math.abs(e), Math.abs(e - r), Math.abs(t), Math.abs(t - n)) : A.shape === 1 && (o = Math.max(Math.abs(e), Math.abs(e - r)), i = Math.max(Math.abs(t), Math.abs(t - n)));
        break;
      case 3:
        if (A.shape === 0) o = i = Math.max(Pe(e, t), Pe(e, t - n), Pe(e - r, t), Pe(e - r, t - n));
        else if (A.shape === 1) {
          var a = Math.max(Math.abs(t), Math.abs(t - n)) / Math.max(Math.abs(e), Math.abs(e - r)), u = nu(r, n, e, t, false), l = u[0], c = u[1];
          o = Pe(l - e, (c - t) / a), i = a * o;
        }
        break;
    }
    return Array.isArray(A.size) && (o = MA(A.size[0], r), i = A.size.length === 2 ? MA(A.size[1], n) : o), [
      o,
      i
    ];
  }, jb = function(A, e) {
    var t = Re(180), r = [];
    return it(e).forEach(function(n, o) {
      if (o === 0) {
        var i = n[0];
        if (i.type === 20 && i.value === "to") {
          t = Lf(n);
          return;
        } else if (kf(i)) {
          t = Wi.parse(A, i);
          return;
        }
      }
      var a = ji(A, n);
      r.push(a);
    }), {
      angle: t,
      stops: r,
      type: 1
    };
  }, so = function(A, e) {
    var t = Re(180), r = [];
    return it(e).forEach(function(n, o) {
      if (o === 0) {
        var i = n[0];
        if (i.type === 20 && [
          "top",
          "left",
          "right",
          "bottom"
        ].indexOf(i.value) !== -1) {
          t = Lf(n);
          return;
        } else if (kf(i)) {
          t = (Wi.parse(A, i) + Re(270)) % Re(360);
          return;
        }
      }
      var a = ji(A, n);
      r.push(a);
    }), {
      angle: t,
      stops: r,
      type: 1
    };
  }, zb = function(A, e) {
    var t = Re(180), r = [], n = 1, o = 0, i = 3, a = [];
    return it(e).forEach(function(s, l) {
      var c = s[0];
      if (l === 0) {
        if (HA(c) && c.value === "linear") {
          n = 1;
          return;
        } else if (HA(c) && c.value === "radial") {
          n = 2;
          return;
        }
      }
      if (c.type === 18) {
        if (c.name === "from") {
          var u = Et.parse(A, c.values[0]);
          r.push({
            stop: fe,
            color: u
          });
        } else if (c.name === "to") {
          var u = Et.parse(A, c.values[0]);
          r.push({
            stop: Ut,
            color: u
          });
        } else if (c.name === "color-stop") {
          var d = c.values.filter(Fr);
          if (d.length === 2) {
            var u = Et.parse(A, d[1]), f = d[0];
            Ir(f) && r.push({
              stop: {
                type: 16,
                number: f.number * 100,
                flags: f.flags
              },
              color: u
            });
          }
        }
      }
    }), n === 1 ? {
      angle: (t + Re(180)) % Re(360),
      stops: r,
      type: n
    } : {
      size: i,
      shape: o,
      stops: r,
      position: a,
      type: n
    };
  }, Rf = "closest-side", Of = "farthest-side", Mf = "closest-corner", Kf = "farthest-corner", Df = "circle", Pf = "ellipse", _f = "cover", Nf = "contain", Xb = function(A, e) {
    var t = 0, r = 3, n = [], o = [];
    return it(e).forEach(function(i, a) {
      var s = true;
      if (a === 0) {
        var l = false;
        s = i.reduce(function(u, d) {
          if (l) if (HA(d)) switch (d.value) {
            case "center":
              return o.push(bl), u;
            case "top":
            case "left":
              return o.push(fe), u;
            case "right":
            case "bottom":
              return o.push(Ut), u;
          }
          else (Ae(d) || Lt(d)) && o.push(d);
          else if (HA(d)) switch (d.value) {
            case Df:
              return t = 0, false;
            case Pf:
              return t = 1, false;
            case "at":
              return l = true, false;
            case Rf:
              return r = 0, false;
            case _f:
            case Of:
              return r = 1, false;
            case Nf:
            case Mf:
              return r = 2, false;
            case Kf:
              return r = 3, false;
          }
          else if (Lt(d) || Ae(d)) return Array.isArray(r) || (r = []), r.push(d), false;
          return u;
        }, s);
      }
      if (s) {
        var c = ji(A, i);
        n.push(c);
      }
    }), {
      size: r,
      shape: t,
      stops: n,
      position: o,
      type: 2
    };
  }, lo = function(A, e) {
    var t = 0, r = 3, n = [], o = [];
    return it(e).forEach(function(i, a) {
      var s = true;
      if (a === 0 ? s = i.reduce(function(c, u) {
        if (HA(u)) switch (u.value) {
          case "center":
            return o.push(bl), false;
          case "top":
          case "left":
            return o.push(fe), false;
          case "right":
          case "bottom":
            return o.push(Ut), false;
        }
        else if (Ae(u) || Lt(u)) return o.push(u), false;
        return c;
      }, s) : a === 1 && (s = i.reduce(function(c, u) {
        if (HA(u)) switch (u.value) {
          case Df:
            return t = 0, false;
          case Pf:
            return t = 1, false;
          case Nf:
          case Rf:
            return r = 0, false;
          case Of:
            return r = 1, false;
          case Mf:
            return r = 2, false;
          case _f:
          case Kf:
            return r = 3, false;
        }
        else if (Lt(u) || Ae(u)) return Array.isArray(r) || (r = []), r.push(u), false;
        return c;
      }, s)), s) {
        var l = ji(A, i);
        n.push(l);
      }
    }), {
      size: r,
      shape: t,
      stops: n,
      position: o,
      type: 2
    };
  }, Yb = function(A) {
    return A.type === 1;
  }, Jb = function(A) {
    return A.type === 2;
  }, Ql = {
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
        var r = Gf[e.name];
        if (typeof r > "u") throw new Error('Attempting to parse an unsupported image function "' + e.name + '"');
        return r(A, e.values);
      }
      throw new Error("Unsupported image type " + e.type);
    }
  };
  function Zb(A) {
    return !(A.type === 20 && A.value === "none") && (A.type !== 18 || !!Gf[A.name]);
  }
  var Gf = {
    "linear-gradient": jb,
    "-moz-linear-gradient": so,
    "-ms-linear-gradient": so,
    "-o-linear-gradient": so,
    "-webkit-linear-gradient": so,
    "radial-gradient": Xb,
    "-moz-radial-gradient": lo,
    "-ms-radial-gradient": lo,
    "-o-radial-gradient": lo,
    "-webkit-radial-gradient": lo,
    "-webkit-gradient": zb
  }, qb = {
    name: "background-image",
    initialValue: "none",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      if (e.length === 0) return [];
      var t = e[0];
      return t.type === 20 && t.value === "none" ? [] : e.filter(function(r) {
        return Fr(r) && Zb(r);
      }).map(function(r) {
        return Ql.parse(A, r);
      });
    }
  }, AQ = {
    name: "background-origin",
    initialValue: "border-box",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return e.map(function(t) {
        if (HA(t)) switch (t.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
        return 0;
      });
    }
  }, eQ = {
    name: "background-position",
    initialValue: "0% 0%",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      return it(e).map(function(t) {
        return t.filter(Ae);
      }).map(xf);
    }
  }, tQ = {
    name: "background-repeat",
    initialValue: "repeat",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return it(e).map(function(t) {
        return t.filter(HA).map(function(r) {
          return r.value;
        }).join(" ");
      }).map(rQ);
    }
  }, rQ = function(A) {
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
  }, vr;
  (function(A) {
    A.AUTO = "auto", A.CONTAIN = "contain", A.COVER = "cover";
  })(vr || (vr = {}));
  var nQ = {
    name: "background-size",
    initialValue: "0",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return it(e).map(function(t) {
        return t.filter(oQ);
      });
    }
  }, oQ = function(A) {
    return HA(A) || Ae(A);
  }, zi = function(A) {
    return {
      name: "border-" + A + "-color",
      initialValue: "transparent",
      prefix: false,
      type: 3,
      format: "color"
    };
  }, iQ = zi("top"), aQ = zi("right"), sQ = zi("bottom"), lQ = zi("left"), Xi = function(A) {
    return {
      name: "border-radius-" + A,
      initialValue: "0 0",
      prefix: false,
      type: 1,
      parse: function(e, t) {
        return xf(t.filter(Ae));
      }
    };
  }, cQ = Xi("top-left"), uQ = Xi("top-right"), dQ = Xi("bottom-right"), fQ = Xi("bottom-left"), Yi = function(A) {
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
  }, pQ = Yi("top"), gQ = Yi("right"), hQ = Yi("bottom"), BQ = Yi("left"), Ji = function(A) {
    return {
      name: "border-" + A + "-width",
      initialValue: "0",
      type: 0,
      prefix: false,
      parse: function(e, t) {
        return En(t) ? t.number : 0;
      }
    };
  }, mQ = Ji("top"), vQ = Ji("right"), wQ = Ji("bottom"), CQ = Ji("left"), yQ = {
    name: "color",
    initialValue: "transparent",
    prefix: false,
    type: 3,
    format: "color"
  }, bQ = {
    name: "direction",
    initialValue: "ltr",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      return e === "rtl" ? 1 : 0;
    }
  }, QQ = {
    name: "display",
    initialValue: "inline-block",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return e.filter(HA).reduce(function(t, r) {
        return t | FQ(r.value);
      }, 0);
    }
  }, FQ = function(A) {
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
  }, UQ = {
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
  }, SQ = {
    name: "letter-spacing",
    initialValue: "0",
    prefix: false,
    type: 0,
    parse: function(A, e) {
      return e.type === 20 && e.value === "normal" ? 0 : e.type === 17 || e.type === 15 ? e.number : 0;
    }
  }, $o;
  (function(A) {
    A.NORMAL = "normal", A.STRICT = "strict";
  })($o || ($o = {}));
  var xQ = {
    name: "line-break",
    initialValue: "normal",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      return e === "strict" ? $o.STRICT : $o.NORMAL;
    }
  }, EQ = {
    name: "line-height",
    initialValue: "normal",
    prefix: false,
    type: 4
  }, ou = function(A, e) {
    return HA(A) && A.value === "normal" ? 1.2 * e : A.type === 17 ? e * A.number : Ae(A) ? MA(A, e) : e;
  }, IQ = {
    name: "list-style-image",
    initialValue: "none",
    type: 0,
    prefix: false,
    parse: function(A, e) {
      return e.type === 20 && e.value === "none" ? null : Ql.parse(A, e);
    }
  }, HQ = {
    name: "list-style-position",
    initialValue: "outside",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      return e === "inside" ? 0 : 1;
    }
  }, ys = {
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
  }, Zi = function(A) {
    return {
      name: "margin-" + A,
      initialValue: "0",
      prefix: false,
      type: 4
    };
  }, TQ = Zi("top"), kQ = Zi("right"), LQ = Zi("bottom"), RQ = Zi("left"), OQ = {
    name: "overflow",
    initialValue: "visible",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return e.filter(HA).map(function(t) {
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
  }, MQ = {
    name: "overflow-wrap",
    initialValue: "normal",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      return e === "break-word" ? "break-word" : "normal";
    }
  }, qi = function(A) {
    return {
      name: "padding-" + A,
      initialValue: "0",
      prefix: false,
      type: 3,
      format: "length-percentage"
    };
  }, KQ = qi("top"), DQ = qi("right"), PQ = qi("bottom"), _Q = qi("left"), NQ = {
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
  }, GQ = {
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
  }, VQ = {
    name: "text-shadow",
    initialValue: "none",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      return e.length === 1 && Cs(e[0], "none") ? [] : it(e).map(function(t) {
        for (var r = {
          color: pt.TRANSPARENT,
          offsetX: fe,
          offsetY: fe,
          blur: fe
        }, n = 0, o = 0; o < t.length; o++) {
          var i = t[o];
          Lt(i) ? (n === 0 ? r.offsetX = i : n === 1 ? r.offsetY = i : r.blur = i, n++) : r.color = Et.parse(A, i);
        }
        return r;
      });
    }
  }, $Q = {
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
  }, WQ = {
    name: "transform",
    initialValue: "none",
    prefix: true,
    type: 0,
    parse: function(A, e) {
      if (e.type === 20 && e.value === "none") return null;
      if (e.type === 18) {
        var t = XQ[e.name];
        if (typeof t > "u") throw new Error('Attempting to parse an unsupported transform function "' + e.name + '"');
        return t(e.values);
      }
      return null;
    }
  }, jQ = function(A) {
    var e = A.filter(function(t) {
      return t.type === 17;
    }).map(function(t) {
      return t.number;
    });
    return e.length === 6 ? e : null;
  }, zQ = function(A) {
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
  }, XQ = {
    matrix: jQ,
    matrix3d: zQ
  }, iu = {
    type: 16,
    number: 50,
    flags: xn
  }, YQ = [
    iu,
    iu
  ], JQ = {
    name: "transform-origin",
    initialValue: "50% 50%",
    prefix: true,
    type: 1,
    parse: function(A, e) {
      var t = e.filter(Ae);
      return t.length !== 2 ? YQ : [
        t[0],
        t[1]
      ];
    }
  }, ZQ = {
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
  }, nn;
  (function(A) {
    A.NORMAL = "normal", A.BREAK_ALL = "break-all", A.KEEP_ALL = "keep-all";
  })(nn || (nn = {}));
  var qQ = {
    name: "word-break",
    initialValue: "normal",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      switch (e) {
        case "break-all":
          return nn.BREAK_ALL;
        case "keep-all":
          return nn.KEEP_ALL;
        default:
          return nn.NORMAL;
      }
    }
  }, AF = {
    name: "z-index",
    initialValue: "auto",
    prefix: false,
    type: 0,
    parse: function(A, e) {
      if (e.type === 20) return {
        auto: true,
        order: 0
      };
      if (Ir(e)) return {
        auto: false,
        order: e.number
      };
      throw new Error("Invalid z-index number parsed");
    }
  }, Vf = {
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
  }, eF = {
    name: "opacity",
    initialValue: "1",
    type: 0,
    prefix: false,
    parse: function(A, e) {
      return Ir(e) ? e.number : 1;
    }
  }, tF = {
    name: "text-decoration-color",
    initialValue: "transparent",
    prefix: false,
    type: 3,
    format: "color"
  }, rF = {
    name: "text-decoration-line",
    initialValue: "none",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return e.filter(HA).map(function(t) {
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
  }, nF = {
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
  }, oF = {
    name: "font-size",
    initialValue: "0",
    prefix: false,
    type: 3,
    format: "length"
  }, iF = {
    name: "font-weight",
    initialValue: "normal",
    type: 0,
    prefix: false,
    parse: function(A, e) {
      return Ir(e) ? e.number : HA(e) && e.value === "bold" ? 700 : 400;
    }
  }, aF = {
    name: "font-variant",
    initialValue: "none",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      return e.filter(HA).map(function(t) {
        return t.value;
      });
    }
  }, sF = {
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
  }, re = function(A, e) {
    return (A & e) !== 0;
  }, lF = {
    name: "content",
    initialValue: "none",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      if (e.length === 0) return [];
      var t = e[0];
      return t.type === 20 && t.value === "none" ? [] : e;
    }
  }, cF = {
    name: "counter-increment",
    initialValue: "none",
    prefix: true,
    type: 1,
    parse: function(A, e) {
      if (e.length === 0) return null;
      var t = e[0];
      if (t.type === 20 && t.value === "none") return null;
      for (var r = [], n = e.filter(Sf), o = 0; o < n.length; o++) {
        var i = n[o], a = n[o + 1];
        if (i.type === 20) {
          var s = a && Ir(a) ? a.number : 1;
          r.push({
            counter: i.value,
            increment: s
          });
        }
      }
      return r;
    }
  }, uF = {
    name: "counter-reset",
    initialValue: "none",
    prefix: true,
    type: 1,
    parse: function(A, e) {
      if (e.length === 0) return [];
      for (var t = [], r = e.filter(Sf), n = 0; n < r.length; n++) {
        var o = r[n], i = r[n + 1];
        if (HA(o) && o.value !== "none") {
          var a = i && Ir(i) ? i.number : 0;
          t.push({
            counter: o.value,
            reset: a
          });
        }
      }
      return t;
    }
  }, dF = {
    name: "duration",
    initialValue: "0s",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return e.filter(En).map(function(t) {
        return Vf.parse(A, t);
      });
    }
  }, fF = {
    name: "quotes",
    initialValue: "none",
    prefix: true,
    type: 1,
    parse: function(A, e) {
      if (e.length === 0) return null;
      var t = e[0];
      if (t.type === 20 && t.value === "none") return null;
      var r = [], n = e.filter(Db);
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
  }, au = function(A, e, t) {
    if (!A) return "";
    var r = A[Math.min(e, A.length - 1)];
    return r ? t ? r.open : r.close : "";
  }, pF = {
    name: "box-shadow",
    initialValue: "none",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      return e.length === 1 && Cs(e[0], "none") ? [] : it(e).map(function(t) {
        for (var r = {
          color: 255,
          offsetX: fe,
          offsetY: fe,
          blur: fe,
          spread: fe,
          inset: false
        }, n = 0, o = 0; o < t.length; o++) {
          var i = t[o];
          Cs(i, "inset") ? r.inset = true : Lt(i) ? (n === 0 ? r.offsetX = i : n === 1 ? r.offsetY = i : n === 2 ? r.blur = i : r.spread = i, n++) : r.color = Et.parse(A, i);
        }
        return r;
      });
    }
  }, gF = {
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
      return e.filter(HA).forEach(function(n) {
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
  }, hF = {
    name: "-webkit-text-stroke-color",
    initialValue: "currentcolor",
    prefix: false,
    type: 3,
    format: "color"
  }, BF = {
    name: "-webkit-text-stroke-width",
    initialValue: "0",
    type: 0,
    prefix: false,
    parse: function(A, e) {
      return En(e) ? e.number : 0;
    }
  }, mF = (function() {
    function A(e, t) {
      var r, n;
      this.animationDuration = nA(e, dF, t.animationDuration), this.backgroundClip = nA(e, Nb, t.backgroundClip), this.backgroundColor = nA(e, Gb, t.backgroundColor), this.backgroundImage = nA(e, qb, t.backgroundImage), this.backgroundOrigin = nA(e, AQ, t.backgroundOrigin), this.backgroundPosition = nA(e, eQ, t.backgroundPosition), this.backgroundRepeat = nA(e, tQ, t.backgroundRepeat), this.backgroundSize = nA(e, nQ, t.backgroundSize), this.borderTopColor = nA(e, iQ, t.borderTopColor), this.borderRightColor = nA(e, aQ, t.borderRightColor), this.borderBottomColor = nA(e, sQ, t.borderBottomColor), this.borderLeftColor = nA(e, lQ, t.borderLeftColor), this.borderTopLeftRadius = nA(e, cQ, t.borderTopLeftRadius), this.borderTopRightRadius = nA(e, uQ, t.borderTopRightRadius), this.borderBottomRightRadius = nA(e, dQ, t.borderBottomRightRadius), this.borderBottomLeftRadius = nA(e, fQ, t.borderBottomLeftRadius), this.borderTopStyle = nA(e, pQ, t.borderTopStyle), this.borderRightStyle = nA(e, gQ, t.borderRightStyle), this.borderBottomStyle = nA(e, hQ, t.borderBottomStyle), this.borderLeftStyle = nA(e, BQ, t.borderLeftStyle), this.borderTopWidth = nA(e, mQ, t.borderTopWidth), this.borderRightWidth = nA(e, vQ, t.borderRightWidth), this.borderBottomWidth = nA(e, wQ, t.borderBottomWidth), this.borderLeftWidth = nA(e, CQ, t.borderLeftWidth), this.boxShadow = nA(e, pF, t.boxShadow), this.color = nA(e, yQ, t.color), this.direction = nA(e, bQ, t.direction), this.display = nA(e, QQ, t.display), this.float = nA(e, UQ, t.cssFloat), this.fontFamily = nA(e, nF, t.fontFamily), this.fontSize = nA(e, oF, t.fontSize), this.fontStyle = nA(e, sF, t.fontStyle), this.fontVariant = nA(e, aF, t.fontVariant), this.fontWeight = nA(e, iF, t.fontWeight), this.letterSpacing = nA(e, SQ, t.letterSpacing), this.lineBreak = nA(e, xQ, t.lineBreak), this.lineHeight = nA(e, EQ, t.lineHeight), this.listStyleImage = nA(e, IQ, t.listStyleImage), this.listStylePosition = nA(e, HQ, t.listStylePosition), this.listStyleType = nA(e, ys, t.listStyleType), this.marginTop = nA(e, TQ, t.marginTop), this.marginRight = nA(e, kQ, t.marginRight), this.marginBottom = nA(e, LQ, t.marginBottom), this.marginLeft = nA(e, RQ, t.marginLeft), this.opacity = nA(e, eF, t.opacity);
      var o = nA(e, OQ, t.overflow);
      this.overflowX = o[0], this.overflowY = o[o.length > 1 ? 1 : 0], this.overflowWrap = nA(e, MQ, t.overflowWrap), this.paddingTop = nA(e, KQ, t.paddingTop), this.paddingRight = nA(e, DQ, t.paddingRight), this.paddingBottom = nA(e, PQ, t.paddingBottom), this.paddingLeft = nA(e, _Q, t.paddingLeft), this.paintOrder = nA(e, gF, t.paintOrder), this.position = nA(e, GQ, t.position), this.textAlign = nA(e, NQ, t.textAlign), this.textDecorationColor = nA(e, tF, (r = t.textDecorationColor) !== null && r !== void 0 ? r : t.color), this.textDecorationLine = nA(e, rF, (n = t.textDecorationLine) !== null && n !== void 0 ? n : t.textDecoration), this.textShadow = nA(e, VQ, t.textShadow), this.textTransform = nA(e, $Q, t.textTransform), this.transform = nA(e, WQ, t.transform), this.transformOrigin = nA(e, JQ, t.transformOrigin), this.visibility = nA(e, ZQ, t.visibility), this.webkitTextStrokeColor = nA(e, hF, t.webkitTextStrokeColor), this.webkitTextStrokeWidth = nA(e, BF, t.webkitTextStrokeWidth), this.wordBreak = nA(e, qQ, t.wordBreak), this.zIndex = nA(e, AF, t.zIndex);
    }
    return A.prototype.isVisible = function() {
      return this.display > 0 && this.opacity > 0 && this.visibility === 0;
    }, A.prototype.isTransparent = function() {
      return It(this.backgroundColor);
    }, A.prototype.isTransformed = function() {
      return this.transform !== null;
    }, A.prototype.isPositioned = function() {
      return this.position !== 0;
    }, A.prototype.isPositionedWithZIndex = function() {
      return this.isPositioned() && !this.zIndex.auto;
    }, A.prototype.isFloating = function() {
      return this.float !== 0;
    }, A.prototype.isInlineLevel = function() {
      return re(this.display, 4) || re(this.display, 33554432) || re(this.display, 268435456) || re(this.display, 536870912) || re(this.display, 67108864) || re(this.display, 134217728);
    }, A;
  })(), vF = /* @__PURE__ */ (function() {
    function A(e, t) {
      this.content = nA(e, lF, t.content), this.quotes = nA(e, fF, t.quotes);
    }
    return A;
  })(), su = /* @__PURE__ */ (function() {
    function A(e, t) {
      this.counterIncrement = nA(e, cF, t.counterIncrement), this.counterReset = nA(e, uF, t.counterReset);
    }
    return A;
  })(), nA = function(A, e, t) {
    var r = new Ff(), n = t !== null && typeof t < "u" ? t.toString() : e.initialValue;
    r.write(n);
    var o = new Uf(r.read());
    switch (e.type) {
      case 2:
        var i = o.parseComponentValue();
        return e.parse(A, HA(i) ? i.value : e.initialValue);
      case 0:
        return e.parse(A, o.parseComponentValue());
      case 1:
        return e.parse(A, o.parseComponentValues());
      case 4:
        return o.parseComponentValue();
      case 3:
        switch (e.format) {
          case "angle":
            return Wi.parse(A, o.parseComponentValue());
          case "color":
            return Et.parse(A, o.parseComponentValue());
          case "image":
            return Ql.parse(A, o.parseComponentValue());
          case "length":
            var a = o.parseComponentValue();
            return Lt(a) ? a : fe;
          case "length-percentage":
            var s = o.parseComponentValue();
            return Ae(s) ? s : fe;
          case "time":
            return Vf.parse(A, o.parseComponentValue());
        }
        break;
    }
  }, wF = "data-html2canvas-debug", CF = function(A) {
    var e = A.getAttribute(wF);
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
  }, bs = function(A, e) {
    var t = CF(A);
    return t === 1 || e === t;
  }, at = /* @__PURE__ */ (function() {
    function A(e, t) {
      if (this.context = e, this.textNodes = [], this.elements = [], this.flags = 0, bs(t, 3)) debugger;
      this.styles = new mF(e, window.getComputedStyle(t, null)), Us(t) && (this.styles.animationDuration.some(function(r) {
        return r > 0;
      }) && (t.style.animationDuration = "0s"), this.styles.transform !== null && (t.style.transform = "none")), this.bounds = Vi(this.context, t), bs(t, 4) && (this.flags |= 16);
    }
    return A;
  })(), yF = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", lu = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Xr = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (var co = 0; co < lu.length; co++) Xr[lu.charCodeAt(co)] = co;
  var bF = function(A) {
    var e = A.length * 0.75, t = A.length, r, n = 0, o, i, a, s;
    A[A.length - 1] === "=" && (e--, A[A.length - 2] === "=" && e--);
    var l = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(e) : new Array(e), c = Array.isArray(l) ? l : new Uint8Array(l);
    for (r = 0; r < t; r += 4) o = Xr[A.charCodeAt(r)], i = Xr[A.charCodeAt(r + 1)], a = Xr[A.charCodeAt(r + 2)], s = Xr[A.charCodeAt(r + 3)], c[n++] = o << 2 | i >> 4, c[n++] = (i & 15) << 4 | a >> 2, c[n++] = (a & 3) << 6 | s & 63;
    return l;
  }, QF = function(A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 2) t.push(A[r + 1] << 8 | A[r]);
    return t;
  }, FF = function(A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 4) t.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]);
    return t;
  }, Xt = 5, Fl = 11, Qa = 2, UF = Fl - Xt, $f = 65536 >> Xt, SF = 1 << Xt, Fa = SF - 1, xF = 1024 >> Xt, EF = $f + xF, IF = EF, HF = 32, TF = IF + HF, kF = 65536 >> Fl, LF = 1 << UF, RF = LF - 1, cu = function(A, e, t) {
    return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t));
  }, OF = function(A, e, t) {
    return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t));
  }, MF = function(A, e) {
    var t = bF(A), r = Array.isArray(t) ? FF(t) : new Uint32Array(t), n = Array.isArray(t) ? QF(t) : new Uint16Array(t), o = 24, i = cu(n, o / 2, r[4] / 2), a = r[5] === 2 ? cu(n, (o + r[4]) / 2) : OF(r, Math.ceil((o + r[4]) / 4));
    return new KF(r[0], r[1], r[2], r[3], i, a);
  }, KF = (function() {
    function A(e, t, r, n, o, i) {
      this.initialValue = e, this.errorValue = t, this.highStart = r, this.highValueIndex = n, this.index = o, this.data = i;
    }
    return A.prototype.get = function(e) {
      var t;
      if (e >= 0) {
        if (e < 55296 || e > 56319 && e <= 65535) return t = this.index[e >> Xt], t = (t << Qa) + (e & Fa), this.data[t];
        if (e <= 65535) return t = this.index[$f + (e - 55296 >> Xt)], t = (t << Qa) + (e & Fa), this.data[t];
        if (e < this.highStart) return t = TF - kF + (e >> Fl), t = this.index[t], t += e >> Xt & RF, t = this.index[t], t = (t << Qa) + (e & Fa), this.data[t];
        if (e <= 1114111) return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, A;
  })(), uu = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", DF = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (var uo = 0; uo < uu.length; uo++) DF[uu.charCodeAt(uo)] = uo;
  var PF = 1, Ua = 2, Sa = 3, du = 4, fu = 5, _F = 7, pu = 8, xa = 9, Ea = 10, gu = 11, hu = 12, Bu = 13, mu = 14, Ia = 15, NF = function(A) {
    for (var e = [], t = 0, r = A.length; t < r; ) {
      var n = A.charCodeAt(t++);
      if (n >= 55296 && n <= 56319 && t < r) {
        var o = A.charCodeAt(t++);
        (o & 64512) === 56320 ? e.push(((n & 1023) << 10) + (o & 1023) + 65536) : (e.push(n), t--);
      } else e.push(n);
    }
    return e;
  }, GF = function() {
    for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
    if (String.fromCodePoint) return String.fromCodePoint.apply(String, A);
    var t = A.length;
    if (!t) return "";
    for (var r = [], n = -1, o = ""; ++n < t; ) {
      var i = A[n];
      i <= 65535 ? r.push(i) : (i -= 65536, r.push((i >> 10) + 55296, i % 1024 + 56320)), (n + 1 === t || r.length > 16384) && (o += String.fromCharCode.apply(String, r), r.length = 0);
    }
    return o;
  }, VF = MF(yF), Ie = "\xD7", Ha = "\xF7", $F = function(A) {
    return VF.get(A);
  }, WF = function(A, e, t) {
    var r = t - 2, n = e[r], o = e[t - 1], i = e[t];
    if (o === Ua && i === Sa) return Ie;
    if (o === Ua || o === Sa || o === du || i === Ua || i === Sa || i === du) return Ha;
    if (o === pu && [
      pu,
      xa,
      gu,
      hu
    ].indexOf(i) !== -1 || (o === gu || o === xa) && (i === xa || i === Ea) || (o === hu || o === Ea) && i === Ea || i === Bu || i === fu || i === _F || o === PF) return Ie;
    if (o === Bu && i === mu) {
      for (; n === fu; ) n = e[--r];
      if (n === mu) return Ie;
    }
    if (o === Ia && i === Ia) {
      for (var a = 0; n === Ia; ) a++, n = e[--r];
      if (a % 2 === 0) return Ie;
    }
    return Ha;
  }, jF = function(A) {
    var e = NF(A), t = e.length, r = 0, n = 0, o = e.map($F);
    return {
      next: function() {
        if (r >= t) return {
          done: true,
          value: null
        };
        for (var i = Ie; r < t && (i = WF(e, o, ++r)) === Ie; ) ;
        if (i !== Ie || r === t) {
          var a = GF.apply(null, e.slice(n, r));
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
  }, zF = function(A) {
    for (var e = jF(A), t = [], r; !(r = e.next()).done; ) r.value && t.push(r.value.slice());
    return t;
  }, XF = function(A) {
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
  }, YF = function(A) {
    var e = A.createElement("boundtest");
    e.style.width = "50px", e.style.display = "block", e.style.fontSize = "12px", e.style.letterSpacing = "0px", e.style.wordSpacing = "0px", A.body.appendChild(e);
    var t = A.createRange();
    e.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
    var r = e.firstChild, n = $i(r.data).map(function(s) {
      return YA(s);
    }), o = 0, i = {}, a = n.every(function(s, l) {
      t.setStart(r, o), t.setEnd(r, o + s.length);
      var c = t.getBoundingClientRect();
      o += s.length;
      var u = c.x > i.x || c.y > i.y;
      return i = c, l === 0 ? true : u;
    });
    return A.body.removeChild(e), a;
  }, JF = function() {
    return typeof new Image().crossOrigin < "u";
  }, ZF = function() {
    return typeof new XMLHttpRequest().responseType == "string";
  }, qF = function(A) {
    var e = new Image(), t = A.createElement("canvas"), r = t.getContext("2d");
    if (!r) return false;
    e.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
    try {
      r.drawImage(e, 0, 0), t.toDataURL();
    } catch {
      return false;
    }
    return true;
  }, vu = function(A) {
    return A[0] === 0 && A[1] === 255 && A[2] === 0 && A[3] === 255;
  }, AU = function(A) {
    var e = A.createElement("canvas"), t = 100;
    e.width = t, e.height = t;
    var r = e.getContext("2d");
    if (!r) return Promise.reject(false);
    r.fillStyle = "rgb(0, 255, 0)", r.fillRect(0, 0, t, t);
    var n = new Image(), o = e.toDataURL();
    n.src = o;
    var i = Qs(t, t, 0, 0, n);
    return r.fillStyle = "red", r.fillRect(0, 0, t, t), wu(i).then(function(a) {
      r.drawImage(a, 0, 0);
      var s = r.getImageData(0, 0, t, t).data;
      r.fillStyle = "red", r.fillRect(0, 0, t, t);
      var l = A.createElement("div");
      return l.style.backgroundImage = "url(" + o + ")", l.style.height = t + "px", vu(s) ? wu(Qs(t, t, 0, 0, l)) : Promise.reject(false);
    }).then(function(a) {
      return r.drawImage(a, 0, 0), vu(r.getImageData(0, 0, t, t).data);
    }).catch(function() {
      return false;
    });
  }, Qs = function(A, e, t, r, n) {
    var o = "http://www.w3.org/2000/svg", i = document.createElementNS(o, "svg"), a = document.createElementNS(o, "foreignObject");
    return i.setAttributeNS(null, "width", A.toString()), i.setAttributeNS(null, "height", e.toString()), a.setAttributeNS(null, "width", "100%"), a.setAttributeNS(null, "height", "100%"), a.setAttributeNS(null, "x", t.toString()), a.setAttributeNS(null, "y", r.toString()), a.setAttributeNS(null, "externalResourcesRequired", "true"), i.appendChild(a), a.appendChild(n), i;
  }, wu = function(A) {
    return new Promise(function(e, t) {
      var r = new Image();
      r.onload = function() {
        return e(r);
      }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(A));
    });
  }, le = {
    get SUPPORT_RANGE_BOUNDS() {
      var A = XF(document);
      return Object.defineProperty(le, "SUPPORT_RANGE_BOUNDS", {
        value: A
      }), A;
    },
    get SUPPORT_WORD_BREAKING() {
      var A = le.SUPPORT_RANGE_BOUNDS && YF(document);
      return Object.defineProperty(le, "SUPPORT_WORD_BREAKING", {
        value: A
      }), A;
    },
    get SUPPORT_SVG_DRAWING() {
      var A = qF(document);
      return Object.defineProperty(le, "SUPPORT_SVG_DRAWING", {
        value: A
      }), A;
    },
    get SUPPORT_FOREIGNOBJECT_DRAWING() {
      var A = typeof Array.from == "function" && typeof window.fetch == "function" ? AU(document) : Promise.resolve(false);
      return Object.defineProperty(le, "SUPPORT_FOREIGNOBJECT_DRAWING", {
        value: A
      }), A;
    },
    get SUPPORT_CORS_IMAGES() {
      var A = JF();
      return Object.defineProperty(le, "SUPPORT_CORS_IMAGES", {
        value: A
      }), A;
    },
    get SUPPORT_RESPONSE_TYPE() {
      var A = ZF();
      return Object.defineProperty(le, "SUPPORT_RESPONSE_TYPE", {
        value: A
      }), A;
    },
    get SUPPORT_CORS_XHR() {
      var A = "withCredentials" in new XMLHttpRequest();
      return Object.defineProperty(le, "SUPPORT_CORS_XHR", {
        value: A
      }), A;
    },
    get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
      var A = !!(typeof Intl < "u" && Intl.Segmenter);
      return Object.defineProperty(le, "SUPPORT_NATIVE_TEXT_SEGMENTATION", {
        value: A
      }), A;
    }
  }, on = /* @__PURE__ */ (function() {
    function A(e, t) {
      this.text = e, this.bounds = t;
    }
    return A;
  })(), eU = function(A, e, t, r) {
    var n = nU(e, t), o = [], i = 0;
    return n.forEach(function(a) {
      if (t.textDecorationLine.length || a.trim().length > 0) if (le.SUPPORT_RANGE_BOUNDS) {
        var s = Cu(r, i, a.length).getClientRects();
        if (s.length > 1) {
          var l = Ul(a), c = 0;
          l.forEach(function(d) {
            o.push(new on(d, mt.fromDOMRectList(A, Cu(r, c + i, d.length).getClientRects()))), c += d.length;
          });
        } else o.push(new on(a, mt.fromDOMRectList(A, s)));
      } else {
        var u = r.splitText(a.length);
        o.push(new on(a, tU(A, r))), r = u;
      }
      else le.SUPPORT_RANGE_BOUNDS || (r = r.splitText(a.length));
      i += a.length;
    }), o;
  }, tU = function(A, e) {
    var t = e.ownerDocument;
    if (t) {
      var r = t.createElement("html2canvaswrapper");
      r.appendChild(e.cloneNode(true));
      var n = e.parentNode;
      if (n) {
        n.replaceChild(r, e);
        var o = Vi(A, r);
        return r.firstChild && n.replaceChild(r.firstChild, r), o;
      }
    }
    return mt.EMPTY;
  }, Cu = function(A, e, t) {
    var r = A.ownerDocument;
    if (!r) throw new Error("Node has no owner document");
    var n = r.createRange();
    return n.setStart(A, e), n.setEnd(A, e + t), n;
  }, Ul = function(A) {
    if (le.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
      var e = new Intl.Segmenter(void 0, {
        granularity: "grapheme"
      });
      return Array.from(e.segment(A)).map(function(t) {
        return t.segment;
      });
    }
    return zF(A);
  }, rU = function(A, e) {
    if (le.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
      var t = new Intl.Segmenter(void 0, {
        granularity: "word"
      });
      return Array.from(t.segment(A)).map(function(r) {
        return r.segment;
      });
    }
    return iU(A, e);
  }, nU = function(A, e) {
    return e.letterSpacing !== 0 ? Ul(A) : rU(A, e);
  }, oU = [
    32,
    160,
    4961,
    65792,
    65793,
    4153,
    4241
  ], iU = function(A, e) {
    for (var t = ky(A, {
      lineBreak: e.lineBreak,
      wordBreak: e.overflowWrap === "break-word" ? "break-word" : e.wordBreak
    }), r = [], n, o = function() {
      if (n.value) {
        var i = n.value.slice(), a = $i(i), s = "";
        a.forEach(function(l) {
          oU.indexOf(l) === -1 ? s += YA(l) : (s.length && r.push(s), r.push(YA(l)), s = "");
        }), s.length && r.push(s);
      }
    }; !(n = t.next()).done; ) o();
    return r;
  }, aU = /* @__PURE__ */ (function() {
    function A(e, t, r) {
      this.text = sU(t.data, r.textTransform), this.textBounds = eU(e, this.text, r, t);
    }
    return A;
  })(), sU = function(A, e) {
    switch (e) {
      case 1:
        return A.toLowerCase();
      case 3:
        return A.replace(lU, cU);
      case 2:
        return A.toUpperCase();
      default:
        return A;
    }
  }, lU = /(^|\s|:|-|\(|\))([a-z])/g, cU = function(A, e, t) {
    return A.length > 0 ? e + t.toUpperCase() : A;
  }, Wf = (function(A) {
    Ne(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.src = r.currentSrc || r.src, n.intrinsicWidth = r.naturalWidth, n.intrinsicHeight = r.naturalHeight, n.context.cache.addImage(n.src), n;
    }
    return e;
  })(at), jf = (function(A) {
    Ne(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.canvas = r, n.intrinsicWidth = r.width, n.intrinsicHeight = r.height, n;
    }
    return e;
  })(at), zf = (function(A) {
    Ne(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this, o = new XMLSerializer(), i = Vi(t, r);
      return r.setAttribute("width", i.width + "px"), r.setAttribute("height", i.height + "px"), n.svg = "data:image/svg+xml," + encodeURIComponent(o.serializeToString(r)), n.intrinsicWidth = r.width.baseVal.value, n.intrinsicHeight = r.height.baseVal.value, n.context.cache.addImage(n.svg), n;
    }
    return e;
  })(at), Xf = (function(A) {
    Ne(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.value = r.value, n;
    }
    return e;
  })(at), Fs = (function(A) {
    Ne(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.start = r.start, n.reversed = typeof r.reversed == "boolean" && r.reversed === true, n;
    }
    return e;
  })(at), uU = [
    {
      type: 15,
      flags: 0,
      unit: "px",
      number: 3
    }
  ], dU = [
    {
      type: 16,
      flags: 0,
      number: 50
    }
  ], fU = function(A) {
    return A.width > A.height ? new mt(A.left + (A.width - A.height) / 2, A.top, A.height, A.height) : A.width < A.height ? new mt(A.left, A.top + (A.height - A.width) / 2, A.width, A.width) : A;
  }, pU = function(A) {
    var e = A.type === gU ? new Array(A.value.length + 1).join("\u2022") : A.value;
    return e.length === 0 ? A.placeholder || "" : e;
  }, Wo = "checkbox", jo = "radio", gU = "password", yu = 707406591, Sl = (function(A) {
    Ne(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      switch (n.type = r.type.toLowerCase(), n.checked = r.checked, n.value = pU(r), (n.type === Wo || n.type === jo) && (n.styles.backgroundColor = 3739148031, n.styles.borderTopColor = n.styles.borderRightColor = n.styles.borderBottomColor = n.styles.borderLeftColor = 2779096575, n.styles.borderTopWidth = n.styles.borderRightWidth = n.styles.borderBottomWidth = n.styles.borderLeftWidth = 1, n.styles.borderTopStyle = n.styles.borderRightStyle = n.styles.borderBottomStyle = n.styles.borderLeftStyle = 1, n.styles.backgroundClip = [
        0
      ], n.styles.backgroundOrigin = [
        0
      ], n.bounds = fU(n.bounds)), n.type) {
        case Wo:
          n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = uU;
          break;
        case jo:
          n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = dU;
          break;
      }
      return n;
    }
    return e;
  })(at), Yf = (function(A) {
    Ne(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this, o = r.options[r.selectedIndex || 0];
      return n.value = o && o.text || "", n;
    }
    return e;
  })(at), Jf = (function(A) {
    Ne(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.value = r.value, n;
    }
    return e;
  })(at), Zf = (function(A) {
    Ne(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      n.src = r.src, n.width = parseInt(r.width, 10) || 0, n.height = parseInt(r.height, 10) || 0, n.backgroundColor = n.styles.backgroundColor;
      try {
        if (r.contentWindow && r.contentWindow.document && r.contentWindow.document.documentElement) {
          n.tree = Ap(t, r.contentWindow.document.documentElement);
          var o = r.contentWindow.document.documentElement ? rn(t, getComputedStyle(r.contentWindow.document.documentElement).backgroundColor) : pt.TRANSPARENT, i = r.contentWindow.document.body ? rn(t, getComputedStyle(r.contentWindow.document.body).backgroundColor) : pt.TRANSPARENT;
          n.backgroundColor = It(o) ? It(i) ? n.styles.backgroundColor : i : o;
        }
      } catch {
      }
      return n;
    }
    return e;
  })(at), hU = [
    "OL",
    "UL",
    "MENU"
  ], So = function(A, e, t, r) {
    for (var n = e.firstChild, o = void 0; n; n = o) if (o = n.nextSibling, ep(n) && n.data.trim().length > 0) t.textNodes.push(new aU(A, n, t.styles));
    else if (gr(n)) if (op(n) && n.assignedNodes) n.assignedNodes().forEach(function(a) {
      return So(A, a, t, r);
    });
    else {
      var i = qf(A, n);
      i.styles.isVisible() && (BU(n, i, r) ? i.flags |= 4 : mU(i.styles) && (i.flags |= 2), hU.indexOf(n.tagName) !== -1 && (i.flags |= 8), t.elements.push(i), n.slot, n.shadowRoot ? So(A, n.shadowRoot, i, r) : !zo(n) && !tp(n) && !Xo(n) && So(A, n, i, r));
    }
  }, qf = function(A, e) {
    return Ss(e) ? new Wf(A, e) : rp(e) ? new jf(A, e) : tp(e) ? new zf(A, e) : vU(e) ? new Xf(A, e) : wU(e) ? new Fs(A, e) : CU(e) ? new Sl(A, e) : Xo(e) ? new Yf(A, e) : zo(e) ? new Jf(A, e) : np(e) ? new Zf(A, e) : new at(A, e);
  }, Ap = function(A, e) {
    var t = qf(A, e);
    return t.flags |= 4, So(A, e, t, t), t;
  }, BU = function(A, e, t) {
    return e.styles.isPositionedWithZIndex() || e.styles.opacity < 1 || e.styles.isTransformed() || xl(A) && t.styles.isTransparent();
  }, mU = function(A) {
    return A.isPositioned() || A.isFloating();
  }, ep = function(A) {
    return A.nodeType === Node.TEXT_NODE;
  }, gr = function(A) {
    return A.nodeType === Node.ELEMENT_NODE;
  }, Us = function(A) {
    return gr(A) && typeof A.style < "u" && !xo(A);
  }, xo = function(A) {
    return typeof A.className == "object";
  }, vU = function(A) {
    return A.tagName === "LI";
  }, wU = function(A) {
    return A.tagName === "OL";
  }, CU = function(A) {
    return A.tagName === "INPUT";
  }, yU = function(A) {
    return A.tagName === "HTML";
  }, tp = function(A) {
    return A.tagName === "svg";
  }, xl = function(A) {
    return A.tagName === "BODY";
  }, rp = function(A) {
    return A.tagName === "CANVAS";
  }, bu = function(A) {
    return A.tagName === "VIDEO";
  }, Ss = function(A) {
    return A.tagName === "IMG";
  }, np = function(A) {
    return A.tagName === "IFRAME";
  }, Qu = function(A) {
    return A.tagName === "STYLE";
  }, bU = function(A) {
    return A.tagName === "SCRIPT";
  }, zo = function(A) {
    return A.tagName === "TEXTAREA";
  }, Xo = function(A) {
    return A.tagName === "SELECT";
  }, op = function(A) {
    return A.tagName === "SLOT";
  }, Fu = function(A) {
    return A.tagName.indexOf("-") > 0;
  }, QU = (function() {
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
  })(), Uu = {
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
  }, Su = {
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
  }, FU = {
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
  }, UU = {
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
  }, ir = function(A, e, t, r, n, o) {
    return A < e || A > t ? Bn(A, n, o.length > 0) : r.integers.reduce(function(i, a, s) {
      for (; A >= a; ) A -= a, i += r.values[s];
      return i;
    }, "") + o;
  }, ip = function(A, e, t, r) {
    var n = "";
    do
      t || A--, n = r(A) + n, A /= e;
    while (A * e >= e);
    return n;
  }, XA = function(A, e, t, r, n) {
    var o = t - e + 1;
    return (A < 0 ? "-" : "") + (ip(Math.abs(A), o, r, function(i) {
      return YA(Math.floor(i % o) + e);
    }) + n);
  }, Mt = function(A, e, t) {
    t === void 0 && (t = ". ");
    var r = e.length;
    return ip(Math.abs(A), r, false, function(n) {
      return e[Math.floor(n % r)];
    }) + t;
  }, dr = 1, Ct = 2, yt = 4, Yr = 8, dt = function(A, e, t, r, n, o) {
    if (A < -9999 || A > 9999) return Bn(A, 4, n.length > 0);
    var i = Math.abs(A), a = n;
    if (i === 0) return e[0] + a;
    for (var s = 0; i > 0 && s <= 4; s++) {
      var l = i % 10;
      l === 0 && re(o, dr) && a !== "" ? a = e[l] + a : l > 1 || l === 1 && s === 0 || l === 1 && s === 1 && re(o, Ct) || l === 1 && s === 1 && re(o, yt) && A > 100 || l === 1 && s > 1 && re(o, Yr) ? a = e[l] + (s > 0 ? t[s - 1] : "") + a : l === 1 && s > 0 && (a = t[s - 1] + a), i = Math.floor(i / 10);
    }
    return (A < 0 ? r : "") + a;
  }, xu = "\u5341\u767E\u5343\u842C", Eu = "\u62FE\u4F70\u4EDF\u842C", Iu = "\u30DE\u30A4\u30CA\u30B9", Ta = "\uB9C8\uC774\uB108\uC2A4", Bn = function(A, e, t) {
    var r = t ? ". " : "", n = t ? "\u3001" : "", o = t ? ", " : "", i = t ? " " : "";
    switch (e) {
      case 0:
        return "\u2022" + i;
      case 1:
        return "\u25E6" + i;
      case 2:
        return "\u25FE" + i;
      case 5:
        var a = XA(A, 48, 57, true, r);
        return a.length < 4 ? "0" + a : a;
      case 4:
        return Mt(A, "\u3007\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", n);
      case 6:
        return ir(A, 1, 3999, Uu, 3, r).toLowerCase();
      case 7:
        return ir(A, 1, 3999, Uu, 3, r);
      case 8:
        return XA(A, 945, 969, false, r);
      case 9:
        return XA(A, 97, 122, false, r);
      case 10:
        return XA(A, 65, 90, false, r);
      case 11:
        return XA(A, 1632, 1641, true, r);
      case 12:
      case 49:
        return ir(A, 1, 9999, Su, 3, r);
      case 35:
        return ir(A, 1, 9999, Su, 3, r).toLowerCase();
      case 13:
        return XA(A, 2534, 2543, true, r);
      case 14:
      case 30:
        return XA(A, 6112, 6121, true, r);
      case 15:
        return Mt(A, "\u5B50\u4E11\u5BC5\u536F\u8FB0\u5DF3\u5348\u672A\u7533\u9149\u620C\u4EA5", n);
      case 16:
        return Mt(A, "\u7532\u4E59\u4E19\u4E01\u620A\u5DF1\u5E9A\u8F9B\u58EC\u7678", n);
      case 17:
      case 48:
        return dt(A, "\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", xu, "\u8CA0", n, Ct | yt | Yr);
      case 47:
        return dt(A, "\u96F6\u58F9\u8CB3\u53C3\u8086\u4F0D\u9678\u67D2\u634C\u7396", Eu, "\u8CA0", n, dr | Ct | yt | Yr);
      case 42:
        return dt(A, "\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", xu, "\u8D1F", n, Ct | yt | Yr);
      case 41:
        return dt(A, "\u96F6\u58F9\u8D30\u53C1\u8086\u4F0D\u9646\u67D2\u634C\u7396", Eu, "\u8D1F", n, dr | Ct | yt | Yr);
      case 26:
        return dt(A, "\u3007\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u5341\u767E\u5343\u4E07", Iu, n, 0);
      case 25:
        return dt(A, "\u96F6\u58F1\u5F10\u53C2\u56DB\u4F0D\u516D\u4E03\u516B\u4E5D", "\u62FE\u767E\u5343\u4E07", Iu, n, dr | Ct | yt);
      case 31:
        return dt(A, "\uC601\uC77C\uC774\uC0BC\uC0AC\uC624\uC721\uCE60\uD314\uAD6C", "\uC2ED\uBC31\uCC9C\uB9CC", Ta, o, dr | Ct | yt);
      case 33:
        return dt(A, "\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u5341\u767E\u5343\u842C", Ta, o, 0);
      case 32:
        return dt(A, "\u96F6\u58F9\u8CB3\u53C3\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u62FE\u767E\u5343", Ta, o, dr | Ct | yt);
      case 18:
        return XA(A, 2406, 2415, true, r);
      case 20:
        return ir(A, 1, 19999, UU, 3, r);
      case 21:
        return XA(A, 2790, 2799, true, r);
      case 22:
        return XA(A, 2662, 2671, true, r);
      case 22:
        return ir(A, 1, 10999, FU, 3, r);
      case 23:
        return Mt(A, "\u3042\u3044\u3046\u3048\u304A\u304B\u304D\u304F\u3051\u3053\u3055\u3057\u3059\u305B\u305D\u305F\u3061\u3064\u3066\u3068\u306A\u306B\u306C\u306D\u306E\u306F\u3072\u3075\u3078\u307B\u307E\u307F\u3080\u3081\u3082\u3084\u3086\u3088\u3089\u308A\u308B\u308C\u308D\u308F\u3090\u3091\u3092\u3093");
      case 24:
        return Mt(A, "\u3044\u308D\u306F\u306B\u307B\u3078\u3068\u3061\u308A\u306C\u308B\u3092\u308F\u304B\u3088\u305F\u308C\u305D\u3064\u306D\u306A\u3089\u3080\u3046\u3090\u306E\u304A\u304F\u3084\u307E\u3051\u3075\u3053\u3048\u3066\u3042\u3055\u304D\u3086\u3081\u307F\u3057\u3091\u3072\u3082\u305B\u3059");
      case 27:
        return XA(A, 3302, 3311, true, r);
      case 28:
        return Mt(A, "\u30A2\u30A4\u30A6\u30A8\u30AA\u30AB\u30AD\u30AF\u30B1\u30B3\u30B5\u30B7\u30B9\u30BB\u30BD\u30BF\u30C1\u30C4\u30C6\u30C8\u30CA\u30CB\u30CC\u30CD\u30CE\u30CF\u30D2\u30D5\u30D8\u30DB\u30DE\u30DF\u30E0\u30E1\u30E2\u30E4\u30E6\u30E8\u30E9\u30EA\u30EB\u30EC\u30ED\u30EF\u30F0\u30F1\u30F2\u30F3", n);
      case 29:
        return Mt(A, "\u30A4\u30ED\u30CF\u30CB\u30DB\u30D8\u30C8\u30C1\u30EA\u30CC\u30EB\u30F2\u30EF\u30AB\u30E8\u30BF\u30EC\u30BD\u30C4\u30CD\u30CA\u30E9\u30E0\u30A6\u30F0\u30CE\u30AA\u30AF\u30E4\u30DE\u30B1\u30D5\u30B3\u30A8\u30C6\u30A2\u30B5\u30AD\u30E6\u30E1\u30DF\u30B7\u30F1\u30D2\u30E2\u30BB\u30B9", n);
      case 34:
        return XA(A, 3792, 3801, true, r);
      case 37:
        return XA(A, 6160, 6169, true, r);
      case 38:
        return XA(A, 4160, 4169, true, r);
      case 39:
        return XA(A, 2918, 2927, true, r);
      case 40:
        return XA(A, 1776, 1785, true, r);
      case 43:
        return XA(A, 3046, 3055, true, r);
      case 44:
        return XA(A, 3174, 3183, true, r);
      case 45:
        return XA(A, 3664, 3673, true, r);
      case 46:
        return XA(A, 3872, 3881, true, r);
      default:
        return XA(A, 48, 57, true, r);
    }
  }, ap = "data-html2canvas-ignore", Hu = (function() {
    function A(e, t, r) {
      if (this.context = e, this.options = r, this.scrolledElements = [], this.referenceElement = t, this.counters = new QU(), this.quoteDepth = 0, !t.ownerDocument) throw new Error("Cloned element does not have an owner document");
      this.documentElement = this.cloneNode(t.ownerDocument.documentElement, false);
    }
    return A.prototype.toIFrame = function(e, t) {
      var r = this, n = SU(e, t);
      if (!n.contentWindow) return Promise.reject("Unable to find iframe window");
      var o = e.defaultView.pageXOffset, i = e.defaultView.pageYOffset, a = n.contentWindow, s = a.document, l = IU(n).then(function() {
        return we(r, void 0, void 0, function() {
          var c, u;
          return he(this, function(d) {
            switch (d.label) {
              case 0:
                return this.scrolledElements.forEach(LU), a && (a.scrollTo(t.left, t.top), /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (a.scrollY !== t.top || a.scrollX !== t.left) && (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(a.scrollX - t.left, a.scrollY - t.top, 0, 0))), c = this.options.onclone, u = this.clonedReferenceElement, typeof u > "u" ? [
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
                  EU(s)
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
      return s.open(), s.write(TU(document.doctype) + "<html></html>"), kU(this.referenceElement.ownerDocument, o, i), s.replaceChild(s.adoptNode(this.documentElement), s.documentElement), s.close(), l;
    }, A.prototype.createElementClone = function(e) {
      if (bs(e, 2)) debugger;
      if (rp(e)) return this.createCanvasClone(e);
      if (bu(e)) return this.createVideoClone(e);
      if (Qu(e)) return this.createStyleClone(e);
      var t = e.cloneNode(false);
      return Ss(t) && (Ss(e) && e.currentSrc && e.currentSrc !== e.src && (t.src = e.currentSrc, t.srcset = ""), t.loading === "lazy" && (t.loading = "eager")), Fu(t) ? this.createCustomElementClone(t) : t;
    }, A.prototype.createCustomElementClone = function(e) {
      var t = document.createElement("html2canvascustomelement");
      return ka(e.style, t), t;
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
      (!gr(t) || !bU(t) && !t.hasAttribute(ap) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(t))) && (!this.options.copyStyles || !gr(t) || !Qu(t)) && e.appendChild(this.cloneNode(t, r));
    }, A.prototype.cloneChildNodes = function(e, t, r) {
      for (var n = this, o = e.shadowRoot ? e.shadowRoot.firstChild : e.firstChild; o; o = o.nextSibling) if (gr(o) && op(o) && typeof o.assignedNodes == "function") {
        var i = o.assignedNodes();
        i.length && i.forEach(function(a) {
          return n.appendChildNode(t, a, r);
        });
      } else this.appendChildNode(t, o, r);
    }, A.prototype.cloneNode = function(e, t) {
      if (ep(e)) return document.createTextNode(e.data);
      if (!e.ownerDocument) return e.cloneNode(false);
      var r = e.ownerDocument.defaultView;
      if (r && gr(e) && (Us(e) || xo(e))) {
        var n = this.createElementClone(e);
        n.style.transitionProperty = "none";
        var o = r.getComputedStyle(e), i = r.getComputedStyle(e, ":before"), a = r.getComputedStyle(e, ":after");
        this.referenceElement === e && Us(n) && (this.clonedReferenceElement = n), xl(n) && MU(n);
        var s = this.counters.parse(new su(this.context, o)), l = this.resolvePseudoContent(e, n, i, an.BEFORE);
        Fu(e) && (t = true), bu(e) || this.cloneChildNodes(e, n, t), l && n.insertBefore(l, n.firstChild);
        var c = this.resolvePseudoContent(e, n, a, an.AFTER);
        return c && n.appendChild(c), this.counters.pop(s), (o && (this.options.copyStyles || xo(e)) && !np(e) || t) && ka(o, n), (e.scrollTop !== 0 || e.scrollLeft !== 0) && this.scrolledElements.push([
          n,
          e.scrollLeft,
          e.scrollTop
        ]), (zo(e) || Xo(e)) && (zo(n) || Xo(n)) && (n.value = e.value), n;
      }
      return e.cloneNode(false);
    }, A.prototype.resolvePseudoContent = function(e, t, r, n) {
      var o = this;
      if (r) {
        var i = r.content, a = t.ownerDocument;
        if (!(!a || !i || i === "none" || i === "-moz-alt-content" || r.display === "none")) {
          this.counters.parse(new su(this.context, r));
          var s = new vF(this.context, r), l = a.createElement("html2canvaspseudoelement");
          ka(r, l), s.content.forEach(function(u) {
            if (u.type === 0) l.appendChild(a.createTextNode(u.value));
            else if (u.type === 22) {
              var d = a.createElement("img");
              d.src = u.value, d.style.opacity = "1", l.appendChild(d);
            } else if (u.type === 18) {
              if (u.name === "attr") {
                var f = u.values.filter(HA);
                f.length && l.appendChild(a.createTextNode(e.getAttribute(f[0].value) || ""));
              } else if (u.name === "counter") {
                var p = u.values.filter(Fr), B = p[0], Q = p[1];
                if (B && HA(B)) {
                  var m = o.counters.getCounterValue(B.value), y = Q && HA(Q) ? ys.parse(o.context, Q.value) : 3;
                  l.appendChild(a.createTextNode(Bn(m, y, false)));
                }
              } else if (u.name === "counters") {
                var w = u.values.filter(Fr), B = w[0], C = w[1], Q = w[2];
                if (B && HA(B)) {
                  var U = o.counters.getCounterValues(B.value), v = Q && HA(Q) ? ys.parse(o.context, Q.value) : 3, x = C && C.type === 0 ? C.value : "", H = U.map(function(k) {
                    return Bn(k, v, false);
                  }).join(x);
                  l.appendChild(a.createTextNode(H));
                }
              }
            } else if (u.type === 20) switch (u.value) {
              case "open-quote":
                l.appendChild(a.createTextNode(au(s.quotes, o.quoteDepth++, true)));
                break;
              case "close-quote":
                l.appendChild(a.createTextNode(au(s.quotes, --o.quoteDepth, false)));
                break;
              default:
                l.appendChild(a.createTextNode(u.value));
            }
          }), l.className = xs + " " + Es;
          var c = n === an.BEFORE ? " " + xs : " " + Es;
          return xo(t) ? t.className.baseValue += c : t.className += c, l;
        }
      }
    }, A.destroy = function(e) {
      return e.parentNode ? (e.parentNode.removeChild(e), true) : false;
    }, A;
  })(), an;
  (function(A) {
    A[A.BEFORE = 0] = "BEFORE", A[A.AFTER = 1] = "AFTER";
  })(an || (an = {}));
  var SU = function(A, e) {
    var t = A.createElement("iframe");
    return t.className = "html2canvas-container", t.style.visibility = "hidden", t.style.position = "fixed", t.style.left = "-10000px", t.style.top = "0px", t.style.border = "0", t.width = e.width.toString(), t.height = e.height.toString(), t.scrolling = "no", t.setAttribute(ap, "true"), A.body.appendChild(t), t;
  }, xU = function(A) {
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
  }, EU = function(A) {
    return Promise.all([].slice.call(A.images, 0).map(xU));
  }, IU = function(A) {
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
  }, HU = [
    "all",
    "d",
    "content"
  ], ka = function(A, e) {
    for (var t = A.length - 1; t >= 0; t--) {
      var r = A.item(t);
      HU.indexOf(r) === -1 && e.style.setProperty(r, A.getPropertyValue(r));
    }
    return e;
  }, TU = function(A) {
    var e = "";
    return A && (e += "<!DOCTYPE ", A.name && (e += A.name), A.internalSubset && (e += A.internalSubset), A.publicId && (e += '"' + A.publicId + '"'), A.systemId && (e += '"' + A.systemId + '"'), e += ">"), e;
  }, kU = function(A, e, t) {
    A && A.defaultView && (e !== A.defaultView.pageXOffset || t !== A.defaultView.pageYOffset) && A.defaultView.scrollTo(e, t);
  }, LU = function(A) {
    var e = A[0], t = A[1], r = A[2];
    e.scrollLeft = t, e.scrollTop = r;
  }, RU = ":before", OU = ":after", xs = "___html2canvas___pseudoelement_before", Es = "___html2canvas___pseudoelement_after", Tu = `{
    content: "" !important;
    display: none !important;
}`, MU = function(A) {
    KU(A, "." + xs + RU + Tu + `
         .` + Es + OU + Tu);
  }, KU = function(A, e) {
    var t = A.ownerDocument;
    if (t) {
      var r = t.createElement("style");
      r.textContent = e, A.appendChild(r);
    }
  }, sp = (function() {
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
  })(), DU = (function() {
    function A(e, t) {
      this.context = e, this._options = t, this._cache = {};
    }
    return A.prototype.addImage = function(e) {
      var t = Promise.resolve();
      return this.has(e) || (Ra(e) || GU(e)) && (this._cache[e] = this.loadImage(e)).catch(function() {
      }), t;
    }, A.prototype.match = function(e) {
      return this._cache[e];
    }, A.prototype.loadImage = function(e) {
      return we(this, void 0, void 0, function() {
        var t, r, n, o, i = this;
        return he(this, function(a) {
          switch (a.label) {
            case 0:
              return t = sp.isSameOrigin(e), r = !La(e) && this._options.useCORS === true && le.SUPPORT_CORS_IMAGES && !t, n = !La(e) && !t && !Ra(e) && typeof this._options.proxy == "string" && le.SUPPORT_CORS_XHR && !r, !t && this._options.allowTaint === false && !La(e) && !Ra(e) && !n && !r ? [
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
                  }, c.onerror = l, (VU(o) || r) && (c.crossOrigin = "anonymous"), c.src = o, c.complete === true && setTimeout(function() {
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
        var a = le.SUPPORT_RESPONSE_TYPE ? "blob" : "text", s = new XMLHttpRequest();
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
  })(), PU = /^data:image\/svg\+xml/i, _U = /^data:image\/.*;base64,/i, NU = /^data:image\/.*/i, GU = function(A) {
    return le.SUPPORT_SVG_DRAWING || !$U(A);
  }, La = function(A) {
    return NU.test(A);
  }, VU = function(A) {
    return _U.test(A);
  }, Ra = function(A) {
    return A.substr(0, 4) === "blob";
  }, $U = function(A) {
    return A.substr(-3).toLowerCase() === "svg" || PU.test(A);
  }, eA = (function() {
    function A(e, t) {
      this.type = 0, this.x = e, this.y = t;
    }
    return A.prototype.add = function(e, t) {
      return new A(this.x + e, this.y + t);
    }, A;
  })(), ar = function(A, e, t) {
    return new eA(A.x + (e.x - A.x) * t, A.y + (e.y - A.y) * t);
  }, fo = (function() {
    function A(e, t, r, n) {
      this.type = 1, this.start = e, this.startControl = t, this.endControl = r, this.end = n;
    }
    return A.prototype.subdivide = function(e, t) {
      var r = ar(this.start, this.startControl, e), n = ar(this.startControl, this.endControl, e), o = ar(this.endControl, this.end, e), i = ar(r, n, e), a = ar(n, o, e), s = ar(i, a, e);
      return t ? new A(this.start, r, i, s) : new A(s, a, o, this.end);
    }, A.prototype.add = function(e, t) {
      return new A(this.start.add(e, t), this.startControl.add(e, t), this.endControl.add(e, t), this.end.add(e, t));
    }, A.prototype.reverse = function() {
      return new A(this.end, this.endControl, this.startControl, this.start);
    }, A;
  })(), ke = function(A) {
    return A.type === 1;
  }, WU = /* @__PURE__ */ (function() {
    function A(e) {
      var t = e.styles, r = e.bounds, n = zr(t.borderTopLeftRadius, r.width, r.height), o = n[0], i = n[1], a = zr(t.borderTopRightRadius, r.width, r.height), s = a[0], l = a[1], c = zr(t.borderBottomRightRadius, r.width, r.height), u = c[0], d = c[1], f = zr(t.borderBottomLeftRadius, r.width, r.height), p = f[0], B = f[1], Q = [];
      Q.push((o + s) / r.width), Q.push((p + u) / r.width), Q.push((i + B) / r.height), Q.push((l + d) / r.height);
      var m = Math.max.apply(Math, Q);
      m > 1 && (o /= m, i /= m, s /= m, l /= m, u /= m, d /= m, p /= m, B /= m);
      var y = r.width - s, w = r.height - d, C = r.width - u, U = r.height - B, v = t.borderTopWidth, x = t.borderRightWidth, H = t.borderBottomWidth, I = t.borderLeftWidth, g = MA(t.paddingTop, e.bounds.width), k = MA(t.paddingRight, e.bounds.width), R = MA(t.paddingBottom, e.bounds.width), L = MA(t.paddingLeft, e.bounds.width);
      this.topLeftBorderDoubleOuterBox = o > 0 || i > 0 ? WA(r.left + I / 3, r.top + v / 3, o - I / 3, i - v / 3, xA.TOP_LEFT) : new eA(r.left + I / 3, r.top + v / 3), this.topRightBorderDoubleOuterBox = o > 0 || i > 0 ? WA(r.left + y, r.top + v / 3, s - x / 3, l - v / 3, xA.TOP_RIGHT) : new eA(r.left + r.width - x / 3, r.top + v / 3), this.bottomRightBorderDoubleOuterBox = u > 0 || d > 0 ? WA(r.left + C, r.top + w, u - x / 3, d - H / 3, xA.BOTTOM_RIGHT) : new eA(r.left + r.width - x / 3, r.top + r.height - H / 3), this.bottomLeftBorderDoubleOuterBox = p > 0 || B > 0 ? WA(r.left + I / 3, r.top + U, p - I / 3, B - H / 3, xA.BOTTOM_LEFT) : new eA(r.left + I / 3, r.top + r.height - H / 3), this.topLeftBorderDoubleInnerBox = o > 0 || i > 0 ? WA(r.left + I * 2 / 3, r.top + v * 2 / 3, o - I * 2 / 3, i - v * 2 / 3, xA.TOP_LEFT) : new eA(r.left + I * 2 / 3, r.top + v * 2 / 3), this.topRightBorderDoubleInnerBox = o > 0 || i > 0 ? WA(r.left + y, r.top + v * 2 / 3, s - x * 2 / 3, l - v * 2 / 3, xA.TOP_RIGHT) : new eA(r.left + r.width - x * 2 / 3, r.top + v * 2 / 3), this.bottomRightBorderDoubleInnerBox = u > 0 || d > 0 ? WA(r.left + C, r.top + w, u - x * 2 / 3, d - H * 2 / 3, xA.BOTTOM_RIGHT) : new eA(r.left + r.width - x * 2 / 3, r.top + r.height - H * 2 / 3), this.bottomLeftBorderDoubleInnerBox = p > 0 || B > 0 ? WA(r.left + I * 2 / 3, r.top + U, p - I * 2 / 3, B - H * 2 / 3, xA.BOTTOM_LEFT) : new eA(r.left + I * 2 / 3, r.top + r.height - H * 2 / 3), this.topLeftBorderStroke = o > 0 || i > 0 ? WA(r.left + I / 2, r.top + v / 2, o - I / 2, i - v / 2, xA.TOP_LEFT) : new eA(r.left + I / 2, r.top + v / 2), this.topRightBorderStroke = o > 0 || i > 0 ? WA(r.left + y, r.top + v / 2, s - x / 2, l - v / 2, xA.TOP_RIGHT) : new eA(r.left + r.width - x / 2, r.top + v / 2), this.bottomRightBorderStroke = u > 0 || d > 0 ? WA(r.left + C, r.top + w, u - x / 2, d - H / 2, xA.BOTTOM_RIGHT) : new eA(r.left + r.width - x / 2, r.top + r.height - H / 2), this.bottomLeftBorderStroke = p > 0 || B > 0 ? WA(r.left + I / 2, r.top + U, p - I / 2, B - H / 2, xA.BOTTOM_LEFT) : new eA(r.left + I / 2, r.top + r.height - H / 2), this.topLeftBorderBox = o > 0 || i > 0 ? WA(r.left, r.top, o, i, xA.TOP_LEFT) : new eA(r.left, r.top), this.topRightBorderBox = s > 0 || l > 0 ? WA(r.left + y, r.top, s, l, xA.TOP_RIGHT) : new eA(r.left + r.width, r.top), this.bottomRightBorderBox = u > 0 || d > 0 ? WA(r.left + C, r.top + w, u, d, xA.BOTTOM_RIGHT) : new eA(r.left + r.width, r.top + r.height), this.bottomLeftBorderBox = p > 0 || B > 0 ? WA(r.left, r.top + U, p, B, xA.BOTTOM_LEFT) : new eA(r.left, r.top + r.height), this.topLeftPaddingBox = o > 0 || i > 0 ? WA(r.left + I, r.top + v, Math.max(0, o - I), Math.max(0, i - v), xA.TOP_LEFT) : new eA(r.left + I, r.top + v), this.topRightPaddingBox = s > 0 || l > 0 ? WA(r.left + Math.min(y, r.width - x), r.top + v, y > r.width + x ? 0 : Math.max(0, s - x), Math.max(0, l - v), xA.TOP_RIGHT) : new eA(r.left + r.width - x, r.top + v), this.bottomRightPaddingBox = u > 0 || d > 0 ? WA(r.left + Math.min(C, r.width - I), r.top + Math.min(w, r.height - H), Math.max(0, u - x), Math.max(0, d - H), xA.BOTTOM_RIGHT) : new eA(r.left + r.width - x, r.top + r.height - H), this.bottomLeftPaddingBox = p > 0 || B > 0 ? WA(r.left + I, r.top + Math.min(U, r.height - H), Math.max(0, p - I), Math.max(0, B - H), xA.BOTTOM_LEFT) : new eA(r.left + I, r.top + r.height - H), this.topLeftContentBox = o > 0 || i > 0 ? WA(r.left + I + L, r.top + v + g, Math.max(0, o - (I + L)), Math.max(0, i - (v + g)), xA.TOP_LEFT) : new eA(r.left + I + L, r.top + v + g), this.topRightContentBox = s > 0 || l > 0 ? WA(r.left + Math.min(y, r.width + I + L), r.top + v + g, y > r.width + I + L ? 0 : s - I + L, l - (v + g), xA.TOP_RIGHT) : new eA(r.left + r.width - (x + k), r.top + v + g), this.bottomRightContentBox = u > 0 || d > 0 ? WA(r.left + Math.min(C, r.width - (I + L)), r.top + Math.min(w, r.height + v + g), Math.max(0, u - (x + k)), d - (H + R), xA.BOTTOM_RIGHT) : new eA(r.left + r.width - (x + k), r.top + r.height - (H + R)), this.bottomLeftContentBox = p > 0 || B > 0 ? WA(r.left + I + L, r.top + U, Math.max(0, p - (I + L)), B - (H + R), xA.BOTTOM_LEFT) : new eA(r.left + I + L, r.top + r.height - (H + R));
    }
    return A;
  })(), xA;
  (function(A) {
    A[A.TOP_LEFT = 0] = "TOP_LEFT", A[A.TOP_RIGHT = 1] = "TOP_RIGHT", A[A.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", A[A.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
  })(xA || (xA = {}));
  var WA = function(A, e, t, r, n) {
    var o = 4 * ((Math.sqrt(2) - 1) / 3), i = t * o, a = r * o, s = A + t, l = e + r;
    switch (n) {
      case xA.TOP_LEFT:
        return new fo(new eA(A, l), new eA(A, l - a), new eA(s - i, e), new eA(s, e));
      case xA.TOP_RIGHT:
        return new fo(new eA(A, e), new eA(A + i, e), new eA(s, l - a), new eA(s, l));
      case xA.BOTTOM_RIGHT:
        return new fo(new eA(s, e), new eA(s, e + a), new eA(A + i, l), new eA(A, l));
      case xA.BOTTOM_LEFT:
      default:
        return new fo(new eA(s, l), new eA(s - i, l), new eA(A, e + a), new eA(A, e));
    }
  }, Yo = function(A) {
    return [
      A.topLeftBorderBox,
      A.topRightBorderBox,
      A.bottomRightBorderBox,
      A.bottomLeftBorderBox
    ];
  }, jU = function(A) {
    return [
      A.topLeftContentBox,
      A.topRightContentBox,
      A.bottomRightContentBox,
      A.bottomLeftContentBox
    ];
  }, Jo = function(A) {
    return [
      A.topLeftPaddingBox,
      A.topRightPaddingBox,
      A.bottomRightPaddingBox,
      A.bottomLeftPaddingBox
    ];
  }, zU = /* @__PURE__ */ (function() {
    function A(e, t, r) {
      this.offsetX = e, this.offsetY = t, this.matrix = r, this.type = 0, this.target = 6;
    }
    return A;
  })(), po = /* @__PURE__ */ (function() {
    function A(e, t) {
      this.path = e, this.target = t, this.type = 1;
    }
    return A;
  })(), XU = /* @__PURE__ */ (function() {
    function A(e) {
      this.opacity = e, this.type = 2, this.target = 6;
    }
    return A;
  })(), YU = function(A) {
    return A.type === 0;
  }, lp = function(A) {
    return A.type === 1;
  }, JU = function(A) {
    return A.type === 2;
  }, ku = function(A, e) {
    return A.length === e.length ? A.some(function(t, r) {
      return t === e[r];
    }) : false;
  }, ZU = function(A, e, t, r, n) {
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
  }, cp = /* @__PURE__ */ (function() {
    function A(e) {
      this.element = e, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
    }
    return A;
  })(), up = (function() {
    function A(e, t) {
      if (this.container = e, this.parent = t, this.effects = [], this.curves = new WU(this.container), this.container.styles.opacity < 1 && this.effects.push(new XU(this.container.styles.opacity)), this.container.styles.transform !== null) {
        var r = this.container.bounds.left + this.container.styles.transformOrigin[0].number, n = this.container.bounds.top + this.container.styles.transformOrigin[1].number, o = this.container.styles.transform;
        this.effects.push(new zU(r, n, o));
      }
      if (this.container.styles.overflowX !== 0) {
        var i = Yo(this.curves), a = Jo(this.curves);
        ku(i, a) ? this.effects.push(new po(i, 6)) : (this.effects.push(new po(i, 2)), this.effects.push(new po(a, 4)));
      }
    }
    return A.prototype.getEffects = function(e) {
      for (var t = [
        2,
        3
      ].indexOf(this.container.styles.position) === -1, r = this.parent, n = this.effects.slice(0); r; ) {
        var o = r.effects.filter(function(s) {
          return !lp(s);
        });
        if (t || r.container.styles.position !== 0 || !r.parent) {
          if (n.unshift.apply(n, o), t = [
            2,
            3
          ].indexOf(r.container.styles.position) === -1, r.container.styles.overflowX !== 0) {
            var i = Yo(r.curves), a = Jo(r.curves);
            ku(i, a) || n.unshift(new po(a, 6));
          }
        } else n.unshift.apply(n, o);
        r = r.parent;
      }
      return n.filter(function(s) {
        return re(s.target, e);
      });
    }, A;
  })(), Is = function(A, e, t, r) {
    A.container.elements.forEach(function(n) {
      var o = re(n.flags, 4), i = re(n.flags, 2), a = new up(n, A);
      re(n.styles.display, 2048) && r.push(a);
      var s = re(n.flags, 8) ? [] : r;
      if (o || i) {
        var l = o || n.styles.isPositioned() ? t : e, c = new cp(a);
        if (n.styles.isPositioned() || n.styles.opacity < 1 || n.styles.isTransformed()) {
          var u = n.styles.zIndex.order;
          if (u < 0) {
            var d = 0;
            l.negativeZIndex.some(function(p, B) {
              return u > p.element.container.styles.zIndex.order ? (d = B, false) : d > 0;
            }), l.negativeZIndex.splice(d, 0, c);
          } else if (u > 0) {
            var f = 0;
            l.positiveZIndex.some(function(p, B) {
              return u >= p.element.container.styles.zIndex.order ? (f = B + 1, false) : f > 0;
            }), l.positiveZIndex.splice(f, 0, c);
          } else l.zeroOrAutoZIndexOrTransformedOrOpacity.push(c);
        } else n.styles.isFloating() ? l.nonPositionedFloats.push(c) : l.nonPositionedInlineLevel.push(c);
        Is(a, c, o ? c : t, s);
      } else n.styles.isInlineLevel() ? e.inlineLevel.push(a) : e.nonInlineLevel.push(a), Is(a, e, t, s);
      re(n.flags, 8) && dp(n, s);
    });
  }, dp = function(A, e) {
    for (var t = A instanceof Fs ? A.start : 1, r = A instanceof Fs ? A.reversed : false, n = 0; n < e.length; n++) {
      var o = e[n];
      o.container instanceof Xf && typeof o.container.value == "number" && o.container.value !== 0 && (t = o.container.value), o.listValue = Bn(t, o.container.styles.listStyleType, true), t += r ? -1 : 1;
    }
  }, qU = function(A) {
    var e = new up(A, null), t = new cp(e), r = [];
    return Is(e, t, t, r), dp(e.container, r), t;
  }, Lu = function(A, e) {
    switch (e) {
      case 0:
        return Oe(A.topLeftBorderBox, A.topLeftPaddingBox, A.topRightBorderBox, A.topRightPaddingBox);
      case 1:
        return Oe(A.topRightBorderBox, A.topRightPaddingBox, A.bottomRightBorderBox, A.bottomRightPaddingBox);
      case 2:
        return Oe(A.bottomRightBorderBox, A.bottomRightPaddingBox, A.bottomLeftBorderBox, A.bottomLeftPaddingBox);
      default:
        return Oe(A.bottomLeftBorderBox, A.bottomLeftPaddingBox, A.topLeftBorderBox, A.topLeftPaddingBox);
    }
  }, A1 = function(A, e) {
    switch (e) {
      case 0:
        return Oe(A.topLeftBorderBox, A.topLeftBorderDoubleOuterBox, A.topRightBorderBox, A.topRightBorderDoubleOuterBox);
      case 1:
        return Oe(A.topRightBorderBox, A.topRightBorderDoubleOuterBox, A.bottomRightBorderBox, A.bottomRightBorderDoubleOuterBox);
      case 2:
        return Oe(A.bottomRightBorderBox, A.bottomRightBorderDoubleOuterBox, A.bottomLeftBorderBox, A.bottomLeftBorderDoubleOuterBox);
      default:
        return Oe(A.bottomLeftBorderBox, A.bottomLeftBorderDoubleOuterBox, A.topLeftBorderBox, A.topLeftBorderDoubleOuterBox);
    }
  }, e1 = function(A, e) {
    switch (e) {
      case 0:
        return Oe(A.topLeftBorderDoubleInnerBox, A.topLeftPaddingBox, A.topRightBorderDoubleInnerBox, A.topRightPaddingBox);
      case 1:
        return Oe(A.topRightBorderDoubleInnerBox, A.topRightPaddingBox, A.bottomRightBorderDoubleInnerBox, A.bottomRightPaddingBox);
      case 2:
        return Oe(A.bottomRightBorderDoubleInnerBox, A.bottomRightPaddingBox, A.bottomLeftBorderDoubleInnerBox, A.bottomLeftPaddingBox);
      default:
        return Oe(A.bottomLeftBorderDoubleInnerBox, A.bottomLeftPaddingBox, A.topLeftBorderDoubleInnerBox, A.topLeftPaddingBox);
    }
  }, t1 = function(A, e) {
    switch (e) {
      case 0:
        return go(A.topLeftBorderStroke, A.topRightBorderStroke);
      case 1:
        return go(A.topRightBorderStroke, A.bottomRightBorderStroke);
      case 2:
        return go(A.bottomRightBorderStroke, A.bottomLeftBorderStroke);
      default:
        return go(A.bottomLeftBorderStroke, A.topLeftBorderStroke);
    }
  }, go = function(A, e) {
    var t = [];
    return ke(A) ? t.push(A.subdivide(0.5, false)) : t.push(A), ke(e) ? t.push(e.subdivide(0.5, true)) : t.push(e), t;
  }, Oe = function(A, e, t, r) {
    var n = [];
    return ke(A) ? n.push(A.subdivide(0.5, false)) : n.push(A), ke(t) ? n.push(t.subdivide(0.5, true)) : n.push(t), ke(r) ? n.push(r.subdivide(0.5, true).reverse()) : n.push(r), ke(e) ? n.push(e.subdivide(0.5, false).reverse()) : n.push(e), n;
  }, fp = function(A) {
    var e = A.bounds, t = A.styles;
    return e.add(t.borderLeftWidth, t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth), -(t.borderTopWidth + t.borderBottomWidth));
  }, Zo = function(A) {
    var e = A.styles, t = A.bounds, r = MA(e.paddingLeft, t.width), n = MA(e.paddingRight, t.width), o = MA(e.paddingTop, t.width), i = MA(e.paddingBottom, t.width);
    return t.add(r + e.borderLeftWidth, o + e.borderTopWidth, -(e.borderRightWidth + e.borderLeftWidth + r + n), -(e.borderTopWidth + e.borderBottomWidth + o + i));
  }, r1 = function(A, e) {
    return A === 0 ? e.bounds : A === 2 ? Zo(e) : fp(e);
  }, n1 = function(A, e) {
    return A === 0 ? e.bounds : A === 2 ? Zo(e) : fp(e);
  }, Oa = function(A, e, t) {
    var r = r1(fr(A.styles.backgroundOrigin, e), A), n = n1(fr(A.styles.backgroundClip, e), A), o = o1(fr(A.styles.backgroundSize, e), t, r), i = o[0], a = o[1], s = zr(fr(A.styles.backgroundPosition, e), r.width - i, r.height - a), l = i1(fr(A.styles.backgroundRepeat, e), s, o, r, n), c = Math.round(r.left + s[0]), u = Math.round(r.top + s[1]);
    return [
      l,
      c,
      u,
      i,
      a
    ];
  }, sr = function(A) {
    return HA(A) && A.value === vr.AUTO;
  }, ho = function(A) {
    return typeof A == "number";
  }, o1 = function(A, e, t) {
    var r = e[0], n = e[1], o = e[2], i = A[0], a = A[1];
    if (!i) return [
      0,
      0
    ];
    if (Ae(i) && a && Ae(a)) return [
      MA(i, t.width),
      MA(a, t.height)
    ];
    var s = ho(o);
    if (HA(i) && (i.value === vr.CONTAIN || i.value === vr.COVER)) {
      if (ho(o)) {
        var l = t.width / t.height;
        return l < o != (i.value === vr.COVER) ? [
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
    var c = ho(r), u = ho(n), d = c || u;
    if (sr(i) && (!a || sr(a))) {
      if (c && u) return [
        r,
        n
      ];
      if (!s && !d) return [
        t.width,
        t.height
      ];
      if (d && s) {
        var f = c ? r : n * o, p = u ? n : r / o;
        return [
          f,
          p
        ];
      }
      var B = c ? r : t.width, Q = u ? n : t.height;
      return [
        B,
        Q
      ];
    }
    if (s) {
      var m = 0, y = 0;
      return Ae(i) ? m = MA(i, t.width) : Ae(a) && (y = MA(a, t.height)), sr(i) ? m = y * o : (!a || sr(a)) && (y = m / o), [
        m,
        y
      ];
    }
    var w = null, C = null;
    if (Ae(i) ? w = MA(i, t.width) : a && Ae(a) && (C = MA(a, t.height)), w !== null && (!a || sr(a)) && (C = c && u ? w / r * n : t.height), C !== null && sr(i) && (w = c && u ? C / n * r : t.width), w !== null && C !== null) return [
      w,
      C
    ];
    throw new Error("Unable to calculate background-size for element");
  }, fr = function(A, e) {
    var t = A[e];
    return typeof t > "u" ? A[0] : t;
  }, i1 = function(A, e, t, r, n) {
    var o = e[0], i = e[1], a = t[0], s = t[1];
    switch (A) {
      case 2:
        return [
          new eA(Math.round(r.left), Math.round(r.top + i)),
          new eA(Math.round(r.left + r.width), Math.round(r.top + i)),
          new eA(Math.round(r.left + r.width), Math.round(s + r.top + i)),
          new eA(Math.round(r.left), Math.round(s + r.top + i))
        ];
      case 3:
        return [
          new eA(Math.round(r.left + o), Math.round(r.top)),
          new eA(Math.round(r.left + o + a), Math.round(r.top)),
          new eA(Math.round(r.left + o + a), Math.round(r.height + r.top)),
          new eA(Math.round(r.left + o), Math.round(r.height + r.top))
        ];
      case 1:
        return [
          new eA(Math.round(r.left + o), Math.round(r.top + i)),
          new eA(Math.round(r.left + o + a), Math.round(r.top + i)),
          new eA(Math.round(r.left + o + a), Math.round(r.top + i + s)),
          new eA(Math.round(r.left + o), Math.round(r.top + i + s))
        ];
      default:
        return [
          new eA(Math.round(n.left), Math.round(n.top)),
          new eA(Math.round(n.left + n.width), Math.round(n.top)),
          new eA(Math.round(n.left + n.width), Math.round(n.height + n.top)),
          new eA(Math.round(n.left), Math.round(n.height + n.top))
        ];
    }
  }, a1 = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", Ru = "Hidden Text", s1 = (function() {
    function A(e) {
      this._data = {}, this._document = e;
    }
    return A.prototype.parseMetrics = function(e, t) {
      var r = this._document.createElement("div"), n = this._document.createElement("img"), o = this._document.createElement("span"), i = this._document.body;
      r.style.visibility = "hidden", r.style.fontFamily = e, r.style.fontSize = t, r.style.margin = "0", r.style.padding = "0", r.style.whiteSpace = "nowrap", i.appendChild(r), n.src = a1, n.width = 1, n.height = 1, n.style.margin = "0", n.style.padding = "0", n.style.verticalAlign = "baseline", o.style.fontFamily = e, o.style.fontSize = t, o.style.margin = "0", o.style.padding = "0", o.appendChild(this._document.createTextNode(Ru)), r.appendChild(o), r.appendChild(n);
      var a = n.offsetTop - o.offsetTop + 2;
      r.removeChild(o), r.appendChild(this._document.createTextNode(Ru)), r.style.lineHeight = "normal", n.style.verticalAlign = "super";
      var s = n.offsetTop - r.offsetTop + 2;
      return i.removeChild(r), {
        baseline: a,
        middle: s
      };
    }, A.prototype.getMetrics = function(e, t) {
      var r = e + " " + t;
      return typeof this._data[r] > "u" && (this._data[r] = this.parseMetrics(e, t)), this._data[r];
    }, A;
  })(), pp = /* @__PURE__ */ (function() {
    function A(e, t) {
      this.context = e, this.options = t;
    }
    return A;
  })(), l1 = 1e4, c1 = (function(A) {
    Ne(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n._activeEffects = [], n.canvas = r.canvas ? r.canvas : document.createElement("canvas"), n.ctx = n.canvas.getContext("2d"), r.canvas || (n.canvas.width = Math.floor(r.width * r.scale), n.canvas.height = Math.floor(r.height * r.scale), n.canvas.style.width = r.width + "px", n.canvas.style.height = r.height + "px"), n.fontMetrics = new s1(document), n.ctx.scale(n.options.scale, n.options.scale), n.ctx.translate(-r.x, -r.y), n.ctx.textBaseline = "bottom", n._activeEffects = [], n.context.logger.debug("Canvas renderer initialized (" + r.width + "x" + r.height + ") with scale " + r.scale), n;
    }
    return e.prototype.applyEffects = function(t) {
      for (var r = this; this._activeEffects.length; ) this.popEffect();
      t.forEach(function(n) {
        return r.applyEffect(n);
      });
    }, e.prototype.applyEffect = function(t) {
      this.ctx.save(), JU(t) && (this.ctx.globalAlpha = t.opacity), YU(t) && (this.ctx.translate(t.offsetX, t.offsetY), this.ctx.transform(t.matrix[0], t.matrix[1], t.matrix[2], t.matrix[3], t.matrix[4], t.matrix[5]), this.ctx.translate(-t.offsetX, -t.offsetY)), lp(t) && (this.path(t.path), this.ctx.clip()), this._activeEffects.push(t);
    }, e.prototype.popEffect = function() {
      this._activeEffects.pop(), this.ctx.restore();
    }, e.prototype.renderStack = function(t) {
      return we(this, void 0, void 0, function() {
        var r;
        return he(this, function(n) {
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
      return we(this, void 0, void 0, function() {
        return he(this, function(r) {
          switch (r.label) {
            case 0:
              if (re(t.container.flags, 16)) debugger;
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
        var i = Ul(t.text);
        i.reduce(function(a, s) {
          return o.ctx.fillText(s, a, t.bounds.top + n), a + o.ctx.measureText(s).width;
        }, t.bounds.left);
      }
    }, e.prototype.createFontStyle = function(t) {
      var r = t.fontVariant.filter(function(i) {
        return i === "normal" || i === "small-caps";
      }).join(""), n = g1(t.fontFamily).join(", "), o = En(t.fontSize) ? "" + t.fontSize.number + t.fontSize.unit : t.fontSize.number + "px";
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
      return we(this, void 0, void 0, function() {
        var n, o, i, a, s, l, c, u, d = this;
        return he(this, function(f) {
          return n = this.createFontStyle(r), o = n[0], i = n[1], a = n[2], this.ctx.font = o, this.ctx.direction = r.direction === 1 ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", s = this.fontMetrics.getMetrics(i, a), l = s.baseline, c = s.middle, u = r.paintOrder, t.textBounds.forEach(function(p) {
            u.forEach(function(B) {
              switch (B) {
                case 0:
                  d.ctx.fillStyle = ne(r.color), d.renderTextWithLetterSpacing(p, r.letterSpacing, l);
                  var Q = r.textShadow;
                  Q.length && p.text.trim().length && (Q.slice(0).reverse().forEach(function(m) {
                    d.ctx.shadowColor = ne(m.color), d.ctx.shadowOffsetX = m.offsetX.number * d.options.scale, d.ctx.shadowOffsetY = m.offsetY.number * d.options.scale, d.ctx.shadowBlur = m.blur.number, d.renderTextWithLetterSpacing(p, r.letterSpacing, l);
                  }), d.ctx.shadowColor = "", d.ctx.shadowOffsetX = 0, d.ctx.shadowOffsetY = 0, d.ctx.shadowBlur = 0), r.textDecorationLine.length && (d.ctx.fillStyle = ne(r.textDecorationColor || r.color), r.textDecorationLine.forEach(function(m) {
                    switch (m) {
                      case 1:
                        d.ctx.fillRect(p.bounds.left, Math.round(p.bounds.top + l), p.bounds.width, 1);
                        break;
                      case 2:
                        d.ctx.fillRect(p.bounds.left, Math.round(p.bounds.top), p.bounds.width, 1);
                        break;
                      case 3:
                        d.ctx.fillRect(p.bounds.left, Math.ceil(p.bounds.top + c), p.bounds.width, 1);
                        break;
                    }
                  }));
                  break;
                case 1:
                  r.webkitTextStrokeWidth && p.text.trim().length && (d.ctx.strokeStyle = ne(r.webkitTextStrokeColor), d.ctx.lineWidth = r.webkitTextStrokeWidth, d.ctx.lineJoin = window.chrome ? "miter" : "round", d.ctx.strokeText(p.text, p.bounds.left, p.bounds.top + l)), d.ctx.strokeStyle = "", d.ctx.lineWidth = 0, d.ctx.lineJoin = "miter";
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
        var o = Zo(t), i = Jo(r);
        this.path(i), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(n, 0, 0, t.intrinsicWidth, t.intrinsicHeight, o.left, o.top, o.width, o.height), this.ctx.restore();
      }
    }, e.prototype.renderNodeContent = function(t) {
      return we(this, void 0, void 0, function() {
        var r, n, o, i, a, s, y, y, l, c, u, d, C, f, p, U, B, Q, m, y, w, C, U;
        return he(this, function(v) {
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
              if (!(r instanceof Wf)) return [
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
              return y = v.sent(), this.renderReplacedElement(r, n, y), [
                3,
                8
              ];
            case 7:
              return v.sent(), this.context.logger.error("Error loading image " + r.src), [
                3,
                8
              ];
            case 8:
              if (r instanceof jf && this.renderReplacedElement(r, n, r.canvas), !(r instanceof zf)) return [
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
              return y = v.sent(), this.renderReplacedElement(r, n, y), [
                3,
                12
              ];
            case 11:
              return v.sent(), this.context.logger.error("Error loading svg " + r.svg.substring(0, 255)), [
                3,
                12
              ];
            case 12:
              return r instanceof Zf && r.tree ? (l = new e(this.context, {
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
              if (r instanceof Sl && (u = Math.min(r.bounds.width, r.bounds.height), r.type === Wo ? r.checked && (this.ctx.save(), this.path([
                new eA(r.bounds.left + u * 0.39363, r.bounds.top + u * 0.79),
                new eA(r.bounds.left + u * 0.16, r.bounds.top + u * 0.5549),
                new eA(r.bounds.left + u * 0.27347, r.bounds.top + u * 0.44071),
                new eA(r.bounds.left + u * 0.39694, r.bounds.top + u * 0.5649),
                new eA(r.bounds.left + u * 0.72983, r.bounds.top + u * 0.23),
                new eA(r.bounds.left + u * 0.84, r.bounds.top + u * 0.34085),
                new eA(r.bounds.left + u * 0.39363, r.bounds.top + u * 0.79)
              ]), this.ctx.fillStyle = ne(yu), this.ctx.fill(), this.ctx.restore()) : r.type === jo && r.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(r.bounds.left + u / 2, r.bounds.top + u / 2, u / 4, 0, Math.PI * 2, true), this.ctx.fillStyle = ne(yu), this.ctx.fill(), this.ctx.restore())), u1(r) && r.value.length) {
                switch (d = this.createFontStyle(o), C = d[0], f = d[1], p = this.fontMetrics.getMetrics(C, f).baseline, this.ctx.font = C, this.ctx.fillStyle = ne(o.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = f1(r.styles.textAlign), U = Zo(r), B = 0, r.styles.textAlign) {
                  case 1:
                    B += U.width / 2;
                    break;
                  case 2:
                    B += U.width;
                    break;
                }
                Q = U.add(B, 0, 0, -U.height / 2 + 1), this.ctx.save(), this.path([
                  new eA(U.left, U.top),
                  new eA(U.left + U.width, U.top),
                  new eA(U.left + U.width, U.top + U.height),
                  new eA(U.left, U.top + U.height)
                ]), this.ctx.clip(), this.renderTextWithLetterSpacing(new on(r.value, Q), o.letterSpacing, p), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
              }
              if (!re(r.styles.display, 2048)) return [
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
              y = void 0, w = m.url, v.label = 15;
            case 15:
              return v.trys.push([
                15,
                17,
                ,
                18
              ]), [
                4,
                this.context.cache.match(w)
              ];
            case 16:
              return y = v.sent(), this.ctx.drawImage(y, r.bounds.left - (y.width + 10), r.bounds.top), [
                3,
                18
              ];
            case 17:
              return v.sent(), this.context.logger.error("Error loading list-style-image " + w), [
                3,
                18
              ];
            case 18:
              return [
                3,
                20
              ];
            case 19:
              t.listValue && r.styles.listStyleType !== -1 && (C = this.createFontStyle(o)[0], this.ctx.font = C, this.ctx.fillStyle = ne(o.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", U = new mt(r.bounds.left, r.bounds.top + MA(r.styles.paddingTop, r.bounds.width), r.bounds.width, ou(o.lineHeight, o.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new on(t.listValue, U), o.letterSpacing, ou(o.lineHeight, o.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), v.label = 20;
            case 20:
              return [
                2
              ];
          }
        });
      });
    }, e.prototype.renderStackContent = function(t) {
      return we(this, void 0, void 0, function() {
        var r, n, m, o, i, m, a, s, m, l, c, m, u, d, m, f, p, m, B, Q, m;
        return he(this, function(y) {
          switch (y.label) {
            case 0:
              if (re(t.element.container.flags, 16)) debugger;
              return [
                4,
                this.renderNodeBackgroundAndBorders(t.element)
              ];
            case 1:
              y.sent(), r = 0, n = t.negativeZIndex, y.label = 2;
            case 2:
              return r < n.length ? (m = n[r], [
                4,
                this.renderStack(m)
              ]) : [
                3,
                5
              ];
            case 3:
              y.sent(), y.label = 4;
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
              y.sent(), o = 0, i = t.nonInlineLevel, y.label = 7;
            case 7:
              return o < i.length ? (m = i[o], [
                4,
                this.renderNode(m)
              ]) : [
                3,
                10
              ];
            case 8:
              y.sent(), y.label = 9;
            case 9:
              return o++, [
                3,
                7
              ];
            case 10:
              a = 0, s = t.nonPositionedFloats, y.label = 11;
            case 11:
              return a < s.length ? (m = s[a], [
                4,
                this.renderStack(m)
              ]) : [
                3,
                14
              ];
            case 12:
              y.sent(), y.label = 13;
            case 13:
              return a++, [
                3,
                11
              ];
            case 14:
              l = 0, c = t.nonPositionedInlineLevel, y.label = 15;
            case 15:
              return l < c.length ? (m = c[l], [
                4,
                this.renderStack(m)
              ]) : [
                3,
                18
              ];
            case 16:
              y.sent(), y.label = 17;
            case 17:
              return l++, [
                3,
                15
              ];
            case 18:
              u = 0, d = t.inlineLevel, y.label = 19;
            case 19:
              return u < d.length ? (m = d[u], [
                4,
                this.renderNode(m)
              ]) : [
                3,
                22
              ];
            case 20:
              y.sent(), y.label = 21;
            case 21:
              return u++, [
                3,
                19
              ];
            case 22:
              f = 0, p = t.zeroOrAutoZIndexOrTransformedOrOpacity, y.label = 23;
            case 23:
              return f < p.length ? (m = p[f], [
                4,
                this.renderStack(m)
              ]) : [
                3,
                26
              ];
            case 24:
              y.sent(), y.label = 25;
            case 25:
              return f++, [
                3,
                23
              ];
            case 26:
              B = 0, Q = t.positiveZIndex, y.label = 27;
            case 27:
              return B < Q.length ? (m = Q[B], [
                4,
                this.renderStack(m)
              ]) : [
                3,
                30
              ];
            case 28:
              y.sent(), y.label = 29;
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
        var i = ke(n) ? n.start : n;
        o === 0 ? r.ctx.moveTo(i.x, i.y) : r.ctx.lineTo(i.x, i.y), ke(n) && r.ctx.bezierCurveTo(n.startControl.x, n.startControl.y, n.endControl.x, n.endControl.y, n.end.x, n.end.y);
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
      return we(this, void 0, void 0, function() {
        var r, n, o, i, a, s;
        return he(this, function(l) {
          switch (l.label) {
            case 0:
              r = t.styles.backgroundImage.length - 1, n = function(c) {
                var u, d, f, g, O, j, L, K, H, p, g, O, j, L, K, B, Q, m, y, w, C, U, v, x, H, I, g, k, R, L, K, M, O, j, N, D, Y, X, oA, P, z, $;
                return he(this, function(AA) {
                  switch (AA.label) {
                    case 0:
                      if (c.type !== 0) return [
                        3,
                        5
                      ];
                      u = void 0, d = c.url, AA.label = 1;
                    case 1:
                      return AA.trys.push([
                        1,
                        3,
                        ,
                        4
                      ]), [
                        4,
                        o.context.cache.match(d)
                      ];
                    case 2:
                      return u = AA.sent(), [
                        3,
                        4
                      ];
                    case 3:
                      return AA.sent(), o.context.logger.error("Error loading background-image " + d), [
                        3,
                        4
                      ];
                    case 4:
                      return u && (f = Oa(t, r, [
                        u.width,
                        u.height,
                        u.width / u.height
                      ]), g = f[0], O = f[1], j = f[2], L = f[3], K = f[4], H = o.ctx.createPattern(o.resizeImage(u, L, K), "repeat"), o.renderRepeat(g, H, O, j)), [
                        3,
                        6
                      ];
                    case 5:
                      Yb(c) ? (p = Oa(t, r, [
                        null,
                        null,
                        null
                      ]), g = p[0], O = p[1], j = p[2], L = p[3], K = p[4], B = $b(c.angle, L, K), Q = B[0], m = B[1], y = B[2], w = B[3], C = B[4], U = document.createElement("canvas"), U.width = L, U.height = K, v = U.getContext("2d"), x = v.createLinearGradient(m, w, y, C), ru(c.stops, Q).forEach(function(gA) {
                        return x.addColorStop(gA.stop, ne(gA.color));
                      }), v.fillStyle = x, v.fillRect(0, 0, L, K), L > 0 && K > 0 && (H = o.ctx.createPattern(U, "repeat"), o.renderRepeat(g, H, O, j))) : Jb(c) && (I = Oa(t, r, [
                        null,
                        null,
                        null
                      ]), g = I[0], k = I[1], R = I[2], L = I[3], K = I[4], M = c.position.length === 0 ? [
                        bl
                      ] : c.position, O = MA(M[0], L), j = MA(M[M.length - 1], K), N = Wb(c, O, j, L, K), D = N[0], Y = N[1], D > 0 && Y > 0 && (X = o.ctx.createRadialGradient(k + O, R + j, 0, k + O, R + j, D), ru(c.stops, D * 2).forEach(function(gA) {
                        return X.addColorStop(gA.stop, ne(gA.color));
                      }), o.path(g), o.ctx.fillStyle = X, D !== Y ? (oA = t.bounds.left + 0.5 * t.bounds.width, P = t.bounds.top + 0.5 * t.bounds.height, z = Y / D, $ = 1 / z, o.ctx.save(), o.ctx.translate(oA, P), o.ctx.transform(1, 0, 0, z, 0, 0), o.ctx.translate(-oA, -P), o.ctx.fillRect(k, $ * (R - P) + P, L, K * $), o.ctx.restore()) : o.ctx.fill())), AA.label = 6;
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
      return we(this, void 0, void 0, function() {
        return he(this, function(o) {
          return this.path(Lu(n, r)), this.ctx.fillStyle = ne(t), this.ctx.fill(), [
            2
          ];
        });
      });
    }, e.prototype.renderDoubleBorder = function(t, r, n, o) {
      return we(this, void 0, void 0, function() {
        var i, a;
        return he(this, function(s) {
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
              return i = A1(o, n), this.path(i), this.ctx.fillStyle = ne(t), this.ctx.fill(), a = e1(o, n), this.path(a), this.ctx.fill(), [
                2
              ];
          }
        });
      });
    }, e.prototype.renderNodeBackgroundAndBorders = function(t) {
      return we(this, void 0, void 0, function() {
        var r, n, o, i, a, s, l, c, u = this;
        return he(this, function(d) {
          switch (d.label) {
            case 0:
              return this.applyEffects(t.getEffects(2)), r = t.container.styles, n = !It(r.backgroundColor) || r.backgroundImage.length, o = [
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
              ], i = d1(fr(r.backgroundClip, 0), t.curves), n || r.boxShadow.length ? (this.ctx.save(), this.path(i), this.ctx.clip(), It(r.backgroundColor) || (this.ctx.fillStyle = ne(r.backgroundColor), this.ctx.fill()), [
                4,
                this.renderBackgroundImage(t.container)
              ]) : [
                3,
                2
              ];
            case 1:
              d.sent(), this.ctx.restore(), r.boxShadow.slice(0).reverse().forEach(function(f) {
                u.ctx.save();
                var p = Yo(t.curves), B = f.inset ? 0 : l1, Q = ZU(p, -B + (f.inset ? 1 : -1) * f.spread.number, (f.inset ? 1 : -1) * f.spread.number, f.spread.number * (f.inset ? -2 : 2), f.spread.number * (f.inset ? -2 : 2));
                f.inset ? (u.path(p), u.ctx.clip(), u.mask(Q)) : (u.mask(p), u.ctx.clip(), u.path(Q)), u.ctx.shadowOffsetX = f.offsetX.number + B, u.ctx.shadowOffsetY = f.offsetY.number, u.ctx.shadowColor = ne(f.color), u.ctx.shadowBlur = f.blur.number, u.ctx.fillStyle = f.inset ? ne(f.color) : "rgba(0,0,0,1)", u.ctx.fill(), u.ctx.restore();
              }), d.label = 2;
            case 2:
              a = 0, s = 0, l = o, d.label = 3;
            case 3:
              return s < l.length ? (c = l[s], c.style !== 0 && !It(c.color) && c.width > 0 ? c.style !== 2 ? [
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
      return we(this, void 0, void 0, function() {
        var a, s, l, c, u, d, f, p, B, Q, m, y, w, C, U, v, U, v;
        return he(this, function(x) {
          return this.ctx.save(), a = t1(o, n), s = Lu(o, n), i === 2 && (this.path(s), this.ctx.clip()), ke(s[0]) ? (l = s[0].start.x, c = s[0].start.y) : (l = s[0].x, c = s[0].y), ke(s[1]) ? (u = s[1].end.x, d = s[1].end.y) : (u = s[1].x, d = s[1].y), n === 0 || n === 2 ? f = Math.abs(l - u) : f = Math.abs(c - d), this.ctx.beginPath(), i === 3 ? this.formatPath(a) : this.formatPath(s.slice(0, 2)), p = r < 3 ? r * 3 : r * 2, B = r < 3 ? r * 2 : r, i === 3 && (p = r, B = r), Q = true, f <= p * 2 ? Q = false : f <= p * 2 + B ? (m = f / (2 * p + B), p *= m, B *= m) : (y = Math.floor((f + B) / (p + B)), w = (f - y * p) / (y - 1), C = (f - (y + 1) * p) / y, B = C <= 0 || Math.abs(B - w) < Math.abs(B - C) ? w : C), Q && (i === 3 ? this.ctx.setLineDash([
            0,
            p + B
          ]) : this.ctx.setLineDash([
            p,
            B
          ])), i === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = r) : this.ctx.lineWidth = r * 2 + 1.1, this.ctx.strokeStyle = ne(t), this.ctx.stroke(), this.ctx.setLineDash([]), i === 2 && (ke(s[0]) && (U = s[3], v = s[0], this.ctx.beginPath(), this.formatPath([
            new eA(U.end.x, U.end.y),
            new eA(v.start.x, v.start.y)
          ]), this.ctx.stroke()), ke(s[1]) && (U = s[1], v = s[2], this.ctx.beginPath(), this.formatPath([
            new eA(U.end.x, U.end.y),
            new eA(v.start.x, v.start.y)
          ]), this.ctx.stroke())), this.ctx.restore(), [
            2
          ];
        });
      });
    }, e.prototype.render = function(t) {
      return we(this, void 0, void 0, function() {
        var r;
        return he(this, function(n) {
          switch (n.label) {
            case 0:
              return this.options.backgroundColor && (this.ctx.fillStyle = ne(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), r = qU(t), [
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
  })(pp), u1 = function(A) {
    return A instanceof Jf || A instanceof Yf ? true : A instanceof Sl && A.type !== jo && A.type !== Wo;
  }, d1 = function(A, e) {
    switch (A) {
      case 0:
        return Yo(e);
      case 2:
        return jU(e);
      default:
        return Jo(e);
    }
  }, f1 = function(A) {
    switch (A) {
      case 1:
        return "center";
      case 2:
        return "right";
      default:
        return "left";
    }
  }, p1 = [
    "-apple-system",
    "system-ui"
  ], g1 = function(A) {
    return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? A.filter(function(e) {
      return p1.indexOf(e) === -1;
    }) : A;
  }, h1 = (function(A) {
    Ne(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.canvas = r.canvas ? r.canvas : document.createElement("canvas"), n.ctx = n.canvas.getContext("2d"), n.options = r, n.canvas.width = Math.floor(r.width * r.scale), n.canvas.height = Math.floor(r.height * r.scale), n.canvas.style.width = r.width + "px", n.canvas.style.height = r.height + "px", n.ctx.scale(n.options.scale, n.options.scale), n.ctx.translate(-r.x, -r.y), n.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + r.width + "x" + r.height + " at " + r.x + "," + r.y + ") with scale " + r.scale), n;
    }
    return e.prototype.render = function(t) {
      return we(this, void 0, void 0, function() {
        var r, n;
        return he(this, function(o) {
          switch (o.label) {
            case 0:
              return r = Qs(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, t), [
                4,
                B1(r)
              ];
            case 1:
              return n = o.sent(), this.options.backgroundColor && (this.ctx.fillStyle = ne(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(n, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [
                2,
                this.canvas
              ];
          }
        });
      });
    }, e;
  })(pp), B1 = function(A) {
    return new Promise(function(e, t) {
      var r = new Image();
      r.onload = function() {
        e(r);
      }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(A));
    });
  }, m1 = (function() {
    function A(e) {
      var t = e.id, r = e.enabled;
      this.id = t, this.enabled = r, this.start = Date.now();
    }
    return A.prototype.debug = function() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.debug == "function" ? console.debug.apply(console, jn([
        this.id,
        this.getTime() + "ms"
      ], e)) : this.info.apply(this, e));
    }, A.prototype.getTime = function() {
      return Date.now() - this.start;
    }, A.prototype.info = function() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      this.enabled && typeof window < "u" && window.console && typeof console.info == "function" && console.info.apply(console, jn([
        this.id,
        this.getTime() + "ms"
      ], e));
    }, A.prototype.warn = function() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.warn == "function" ? console.warn.apply(console, jn([
        this.id,
        this.getTime() + "ms"
      ], e)) : this.info.apply(this, e));
    }, A.prototype.error = function() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.error == "function" ? console.error.apply(console, jn([
        this.id,
        this.getTime() + "ms"
      ], e)) : this.info.apply(this, e));
    }, A.instances = {}, A;
  })(), v1 = (function() {
    function A(e, t) {
      var r;
      this.windowBounds = t, this.instanceName = "#" + A.instanceCount++, this.logger = new m1({
        id: this.instanceName,
        enabled: e.logging
      }), this.cache = (r = e.cache) !== null && r !== void 0 ? r : new DU(this, e);
    }
    return A.instanceCount = 1, A;
  })(), w1 = function(A, e) {
    return e === void 0 && (e = {}), C1(A, e);
  };
  typeof window < "u" && sp.setContext(window);
  var C1 = function(A, e) {
    return we(void 0, void 0, void 0, function() {
      var t, r, n, o, i, a, s, l, c, u, d, f, p, B, Q, m, y, w, C, U, x, v, x, H, I, g, k, R, L, K, M, O, j, N, D, Y, X, oA, P, z;
      return he(this, function($) {
        switch ($.label) {
          case 0:
            if (!A || typeof A != "object") return [
              2,
              Promise.reject("Invalid element provided as first argument")
            ];
            if (t = A.ownerDocument, !t) throw new Error("Element is not attached to a Document");
            if (r = t.defaultView, !r) throw new Error("Document is not attached to a Window");
            return n = {
              allowTaint: (H = e.allowTaint) !== null && H !== void 0 ? H : false,
              imageTimeout: (I = e.imageTimeout) !== null && I !== void 0 ? I : 15e3,
              proxy: e.proxy,
              useCORS: (g = e.useCORS) !== null && g !== void 0 ? g : false
            }, o = ls({
              logging: (k = e.logging) !== null && k !== void 0 ? k : true,
              cache: e.cache
            }, n), i = {
              windowWidth: (R = e.windowWidth) !== null && R !== void 0 ? R : r.innerWidth,
              windowHeight: (L = e.windowHeight) !== null && L !== void 0 ? L : r.innerHeight,
              scrollX: (K = e.scrollX) !== null && K !== void 0 ? K : r.pageXOffset,
              scrollY: (M = e.scrollY) !== null && M !== void 0 ? M : r.pageYOffset
            }, a = new mt(i.scrollX, i.scrollY, i.windowWidth, i.windowHeight), s = new v1(o, a), l = (O = e.foreignObjectRendering) !== null && O !== void 0 ? O : false, c = {
              allowTaint: (j = e.allowTaint) !== null && j !== void 0 ? j : false,
              onclone: e.onclone,
              ignoreElements: e.ignoreElements,
              inlineImages: l,
              copyStyles: l
            }, s.logger.debug("Starting document clone with size " + a.width + "x" + a.height + " scrolled to " + -a.left + "," + -a.top), u = new Hu(s, A, c), d = u.clonedReferenceElement, d ? [
              4,
              u.toIFrame(t, a)
            ] : [
              2,
              Promise.reject("Unable to find element in cloned iframe")
            ];
          case 1:
            return f = $.sent(), p = xl(d) || yU(d) ? ZC(d.ownerDocument) : Vi(s, d), B = p.width, Q = p.height, m = p.left, y = p.top, w = y1(s, d, e.backgroundColor), C = {
              canvas: e.canvas,
              backgroundColor: w,
              scale: (D = (N = e.scale) !== null && N !== void 0 ? N : r.devicePixelRatio) !== null && D !== void 0 ? D : 1,
              x: ((Y = e.x) !== null && Y !== void 0 ? Y : 0) + m,
              y: ((X = e.y) !== null && X !== void 0 ? X : 0) + y,
              width: (oA = e.width) !== null && oA !== void 0 ? oA : Math.ceil(B),
              height: (P = e.height) !== null && P !== void 0 ? P : Math.ceil(Q)
            }, l ? (s.logger.debug("Document cloned, using foreign object rendering"), x = new h1(s, C), [
              4,
              x.render(d)
            ]) : [
              3,
              3
            ];
          case 2:
            return U = $.sent(), [
              3,
              5
            ];
          case 3:
            return s.logger.debug("Document cloned, element located at " + m + "," + y + " with size " + B + "x" + Q + " using computed rendering"), s.logger.debug("Starting DOM parsing"), v = Ap(s, d), w === v.styles.backgroundColor && (v.styles.backgroundColor = pt.TRANSPARENT), s.logger.debug("Starting renderer for element at " + C.x + "," + C.y + " with size " + C.width + "x" + C.height), x = new c1(s, C), [
              4,
              x.render(v)
            ];
          case 4:
            U = $.sent(), $.label = 5;
          case 5:
            return (!((z = e.removeContainer) !== null && z !== void 0) || z) && (Hu.destroy(f) || s.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), s.logger.debug("Finished rendering"), [
              2,
              U
            ];
        }
      });
    });
  }, y1 = function(A, e, t) {
    var r = e.ownerDocument, n = r.documentElement ? rn(A, getComputedStyle(r.documentElement).backgroundColor) : pt.TRANSPARENT, o = r.body ? rn(A, getComputedStyle(r.body).backgroundColor) : pt.TRANSPARENT, i = typeof t == "string" ? rn(A, t) : t === null ? pt.TRANSPARENT : 4294967295;
    return e === r.documentElement ? It(n) ? It(o) ? i : o : n : i;
  }, Ma = {
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
  }, oe = function() {
    return oe = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, oe.apply(this, arguments);
  }, b1 = {
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
  }, Q1 = function(A, e) {
    var t = oe({}, b1);
    if (A) for (var r in Ma) Object.prototype.hasOwnProperty.call(Ma, r) && (t[r] = oe(oe({}, Object.prototype.hasOwnProperty.call(t, r) ? t[r] : {}), Ma[r]));
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = oe(oe({}, Object.prototype.hasOwnProperty.call(t, r) ? t[r] : {}), e[r]));
    return t;
  }, Ou = function(A, e) {
    return A ? oe(oe({}, e.rbgcpControlBtn), e.rbgcpControlBtnSelected) : oe({}, e.rbgcpControlBtn);
  }, sn = function(A, e) {
    return A ? oe(oe({}, e.rbgcpControlIconBtn), e.rbgcpControlBtnSelected) : oe({}, e.rbgcpControlIconBtn);
  }, Bo = function(A, e) {
    return A ? oe(oe(oe({}, e.rbgcpControlBtn), e.rbgcpColorModelDropdownBtn), e.rbgcpControlBtnSelected) : oe(oe({}, e.rbgcpControlBtn), e.rbgcpColorModelDropdownBtn);
  }, Xe = function() {
    return Xe = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, Xe.apply(this, arguments);
  }, F1 = function(A) {
    var e = A.color, t = TA().defaultStyles, r = e ?? "";
    return T.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 16
      }
    }, T.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: Xe(Xe({
        fill: "none",
        strokeWidth: "1.4px"
      }, t.rbgcpControlIcon), r && {
        stroke: r
      }),
      d: "M15.6,7h0L7.78,14.86c-.37.37-1.61.38-2,.75s-.5,1.53-.76,2a3.53,3.53,0,0,1-.52.52,1.6,1.6,0,0,1-2.27-.06l-.32-.32a1.61,1.61,0,0,1-.06-2.27A3.25,3.25,0,0,1,2.4,15c.47-.26,1.65-.35,2-.73s.34-1.64.71-2c1.68-1.73,5.61-5.65,7.91-7.93h0l1.14,1.38L15.6,7Z"
    }), T.createElement("polygon", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: Xe(Xe({
        strokeWidth: "1.4px"
      }, t.rbgcpControlIcon2), r && {
        stroke: r,
        fill: r
      }),
      points: "15.7 8.87 11.13 4.29 12.69 2.73 17.25 7.31 15.7 8.87"
    }), T.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: Xe(Xe({
        strokeWidth: "1.4px"
      }, t.rbgcpControlIcon2), r && {
        stroke: r,
        fill: r
      }),
      d: "M18.18,3.71,16.36,5.53a1.33,1.33,0,0,1-1.88,0h0a1.34,1.34,0,0,1,0-1.89l1.81-1.82a1.34,1.34,0,0,1,1.89,0h0A1.34,1.34,0,0,1,18.18,3.71Z"
    }));
  }, U1 = function(A) {
    var e = A.onSelect, t = TA().defaultStyles, r = h.useState(null), n = r[0], o = r[1], i = h.useState(false), a = i[0], s = i[1], l = h.useState(false), c = l[0], u = l[1], d = function() {
      var B = document.getElementById("root");
      s(true), w1(B).then(function(Q) {
        var m = document.createElement("canvas"), y = m.getContext("2d", {
          willReadFrequently: true
        });
        B && y && (m.width = B.offsetWidth * 2, m.height = B.offsetHeight * 2, y.drawImage(Q, 0, 0)), o(y);
      });
    }, f = function(B) {
      if (B.stopPropagation(), n) {
        var Q = B.pageX, m = B.pageY, y = Q * 2, w = m * 2, C = n.getImageData(y, w, 1, 1).data;
        e("rgba(".concat(C[0], ", ").concat(C[1], ", ").concat(C[2], ", 1)"));
      }
      u(false), s(false);
    }, p = function() {
      if (u(true), !window.EyeDropper) d();
      else {
        var B = new window.EyeDropper(), Q = new window.AbortController();
        B.open({
          signal: Q.signal
        }).then(function(m) {
          var y = de(m.sRGBHex), w = y.toRgb(), C = w.r, U = w.g, v = w.b;
          e("rgba(".concat(C, ", ").concat(U, ", ").concat(v, ", 1)")), u(false);
        }).catch(function(m) {
          console.log(m), u(false);
        });
      }
    };
    return T.createElement("div", null, T.createElement("div", {
      onClick: p,
      id: "rbgcp-eyedropper-btn",
      style: Xe(Xe({}, t.rbgcpEyedropperBtn), sn(a, t))
    }, T.createElement(F1, {
      color: c ? "rgb(86, 140, 245)" : ""
    })), a && T.createElement(JC, null, T.createElement("div", {
      onClick: function(B) {
        return f(B);
      },
      style: t.rbgcpEyedropperCover
    })));
  }, Hs = function() {
    return Hs = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, Hs.apply(this, arguments);
  }, Ka = function(A) {
    var e = A.value, t = A.reffy, r = A.label, n = A.config, o = A.callback, i = A.squareWidth, a = A.openAdvanced, s = A.defaultStyles, l = A.pickerIdSuffix, c = n.barSize, u = h.useState(false), d = u[0], f = u[1], p = h.useState(2), B = p[0], Q = p[1], m = e * (i - 18);
    h.useEffect(function() {
      var v;
      Q(((v = t == null ? void 0 : t.current) === null || v === void 0 ? void 0 : v.offsetTop) - 2);
    }, [
      a,
      t
    ]);
    var y = function() {
      f(false);
    }, w = function(v) {
      d && o(Qr(v, c));
    }, C = function(v) {
      d || o(Qr(v, c));
    }, U = function() {
      f(true);
    };
    return h.useEffect(function() {
      var v = function() {
        y();
      };
      return window.addEventListener("mouseup", v), function() {
        window.removeEventListener("mouseup", v);
      };
    }, []), T.createElement("div", {
      style: {
        width: "100%",
        padding: "3px 0px 3px 0px"
      }
    }, T.createElement("div", {
      onMouseMove: function(v) {
        return w(v);
      },
      style: {
        cursor: "resize",
        position: "relative"
      },
      id: "rbgcp-advanced-bar-".concat(r, "-wrapper").concat(l)
    }, T.createElement("div", {
      style: Hs({
        left: m,
        top: B
      }, s.rbgcpHandle),
      id: "rbgcp-advanced-bar-".concat(r, "-handle").concat(l),
      onMouseDown: U,
      role: "button",
      tabIndex: 0
    }), T.createElement("div", {
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
      id: "rbgcp-advanced-bar-".concat(r, "-label").concat(l),
      onMouseMove: function(v) {
        return w(v);
      },
      onClick: function(v) {
        return C(v);
      },
      tabIndex: 0,
      role: "button",
      onKeyDown: function() {
      }
    }, r), T.createElement("canvas", {
      ref: t,
      height: "14px",
      width: "".concat(i, "px"),
      onClick: function(v) {
        return C(v);
      },
      style: {
        position: "relative",
        borderRadius: 14
      },
      id: "rbgcp-advanced-bar-".concat(r, "-canvas").concat(l)
    })));
  }, S1 = function(A) {
    var e = A.openAdvanced, t = TA(), r = t.config, n = t.tinyColor, o = t.handleChange, i = t.squareWidth, a = t.hc, s = t.defaultStyles, l = t.pickerIdSuffix, c = n.toHsl(), u = c.s, d = c.l, f = h.useRef(null), p = h.useRef(null), B = h.useRef(null);
    nC(f, a == null ? void 0 : a.h, d * 100, i), oC(p, a == null ? void 0 : a.h, u * 100, i), iC(B, a == null ? void 0 : a.h, u * 100, i);
    var Q = function(w) {
      var C = de({
        h: a == null ? void 0 : a.h,
        s: w / 100,
        l: d
      }).toRgb(), U = C.r, v = C.g, x = C.b;
      o("rgba(".concat(U, ",").concat(v, ",").concat(x, ",").concat(a == null ? void 0 : a.a, ")"));
    }, m = function(w) {
      var C = de({
        h: a == null ? void 0 : a.h,
        s: u,
        l: w / 100
      }).toRgb(), U = C.r, v = C.g, x = C.b;
      o("rgba(".concat(U, ",").concat(v, ",").concat(x, ",").concat(a == null ? void 0 : a.a, ")"));
    }, y = function(w) {
      var C = de({
        h: a == null ? void 0 : a.h,
        s: (a == null ? void 0 : a.s) * 100,
        v: w
      }).toRgb(), U = C.r, v = C.g, x = C.b;
      o("rgba(".concat(U, ",").concat(v, ",").concat(x, ",").concat(a == null ? void 0 : a.a, ")"));
    };
    return T.createElement("div", {
      style: {
        width: "100%",
        height: e ? 98 : 0,
        transition: "all 120ms linear"
      },
      id: "rbgcp-advanced-controls-wrapper".concat(l)
    }, T.createElement("div", {
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
    }, T.createElement(Ka, {
      value: u,
      reffy: f,
      config: r,
      label: "Saturation",
      callback: Q,
      squareWidth: i,
      openAdvanced: e,
      defaultStyles: s,
      pickerIdSuffix: l
    }), T.createElement(Ka, {
      value: d,
      config: r,
      reffy: p,
      label: "Lightness",
      callback: m,
      squareWidth: i,
      openAdvanced: e,
      defaultStyles: s,
      pickerIdSuffix: l
    }), T.createElement(Ka, {
      value: a == null ? void 0 : a.v,
      config: r,
      reffy: B,
      label: "Brightness",
      callback: y,
      squareWidth: i,
      openAdvanced: e,
      defaultStyles: s,
      pickerIdSuffix: l
    })));
  }, Gt = function() {
    return Gt = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, Gt.apply(this, arguments);
  }, x1 = function(A) {
    var e = A.openComparibles, t = TA(), r = t.tinyColor, n = t.handleChange, o = t.defaultStyles, i = t.pickerIdSuffix, a = r.analogous(), s = r.monochromatic(), l = r.triad(), c = r.tetrad(), u = function(d) {
      var f = d.toRgb(), p = f.r, B = f.g, Q = f.b, m = f.a;
      n("rgba(".concat(p, ",").concat(B, ",").concat(Q, ",").concat(m, ")"));
    };
    return T.createElement("div", {
      style: {
        width: "100%",
        transition: "all 120ms linear",
        height: e ? 216 : 0
      },
      id: "rbgcp-comparible-colors-wrapper".concat(i)
    }, T.createElement("div", {
      style: {
        paddingTop: 11,
        display: e ? "" : "none",
        position: "relative"
      },
      id: "rbgcp-comparible-colors-inner".concat(i)
    }, T.createElement("div", {
      style: Gt({
        textAlign: "center",
        fontSize: 13,
        fontWeight: 600,
        position: "absolute",
        top: 6.5,
        left: 2
      }, o.rbgcpComparibleLabel),
      id: "rbgcp-comparible-color-guide-label".concat(i)
    }, "Color Guide"), T.createElement("div", {
      style: Gt({
        textAlign: "center",
        fontSize: 12,
        fontWeight: 500,
        marginTop: 3
      }, o.rbgcpComparibleLabel),
      id: "rbgcp-comparible-analogous-colors-label".concat(i)
    }, "Analogous"), T.createElement("div", {
      style: {
        borderRadius: 5,
        overflow: "hidden",
        display: "flex"
      },
      id: "rbgcp-comparible-analogous-colors".concat(i)
    }, a == null ? void 0 : a.map(function(d, f) {
      return T.createElement("div", {
        key: f,
        id: "rbgcp-comparible-analogous-color-".concat(f).concat(i),
        style: {
          width: "20%",
          height: 30,
          background: d.toHexString()
        },
        onClick: function() {
          return u(d);
        }
      });
    })), T.createElement("div", {
      style: Gt({
        textAlign: "center",
        fontSize: 12,
        fontWeight: 500,
        marginTop: 3
      }, o.rbgcpComparibleLabel),
      id: "rbgcp-comparible-monochromatic-colors-label".concat(i)
    }, "Monochromatic"), T.createElement("div", {
      style: {
        borderRadius: 5,
        overflow: "hidden",
        display: "flex",
        justifyContent: "flex-end"
      },
      id: "rbgcp-comparible-monochromatic-colors".concat(i)
    }, s == null ? void 0 : s.map(function(d, f) {
      return T.createElement("div", {
        key: f,
        id: "rbgcp-comparible-monochromatic-color-".concat(f).concat(i),
        style: {
          width: "20%",
          height: 30,
          background: d.toHexString()
        },
        onClick: function() {
          return u(d);
        }
      });
    })), T.createElement("div", {
      style: Gt({
        textAlign: "center",
        fontSize: 12,
        fontWeight: 500,
        marginTop: 3
      }, o.rbgcpComparibleLabel),
      id: "rbgcp-comparible-triad-colors-label".concat(i)
    }, "Triad"), T.createElement("div", {
      style: {
        borderRadius: 5,
        overflow: "hidden",
        display: "flex",
        justifyContent: "flex-end"
      },
      id: "rbgcp-comparible-triad-colors".concat(i)
    }, l == null ? void 0 : l.map(function(d, f) {
      return T.createElement("div", {
        key: f,
        id: "rbgcp-comparible-triad-color-".concat(f).concat(i),
        style: {
          width: "calc(100% / 3)",
          height: 28,
          background: d.toHexString()
        },
        onClick: function() {
          return u(d);
        }
      });
    })), T.createElement("div", {
      style: Gt({
        textAlign: "center",
        fontSize: 12,
        fontWeight: 500,
        marginTop: 3
      }, o.rbgcpComparibleLabel),
      id: "rbgcp-comparible-tetrad-colors-label".concat(i)
    }, "Tetrad"), T.createElement("div", {
      style: {
        borderRadius: 5,
        overflow: "hidden",
        display: "flex",
        justifyContent: "flex-end"
      },
      id: "rbgcp-comparible-tetrad-colors".concat(i)
    }, c == null ? void 0 : c.map(function(d, f) {
      return T.createElement("div", {
        key: f,
        id: "rbgcp-comparible-tetrad-color-".concat(f).concat(i),
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
  }, PA = function() {
    return PA = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, PA.apply(this, arguments);
  }, E1 = function() {
    var A = TA(), e = A.gradientType, t = A.onChange, r = A.value, n = A.defaultStyles, o = A.pickerIdSuffix, i = e === "linear-gradient", a = e === "radial-gradient", s = function() {
      var c = r.split(/,(.+)/)[1];
      t("linear-gradient(90deg, ".concat(c));
    }, l = function() {
      var c = r.split(/,(.+)/)[1];
      t("radial-gradient(circle, ".concat(c));
    };
    return T.createElement("div", {
      style: n.rbgcpControlBtnWrapper
    }, T.createElement("div", {
      onClick: s,
      id: "rbgcp-linear-btn".concat(o),
      style: PA(PA({}, n.rbgcpControlBtn), i && n.rbgcpControlBtnSelected),
      tabIndex: 0,
      role: "button",
      onKeyDown: function() {
      }
    }, T.createElement(GC, {
      color: i ? "#568CF5" : ""
    })), T.createElement("div", {
      onClick: l,
      id: "rbgcp-radial-btn".concat(o),
      style: PA(PA({}, n.rbgcpControlBtn), a && n.rbgcpControlBtnSelected),
      tabIndex: 0,
      role: "button",
      onKeyDown: function() {
      }
    }, T.createElement(VC, {
      color: a ? "#568CF5" : ""
    })));
  }, I1 = function() {
    var A = TA(), e = A.currentLeft, t = A.currentColor, r = A.defaultStyles, n = A.handleGradient, o = A.pickerIdSuffix, i = function(a) {
      n(t, br(parseInt(a), 0, 100));
    };
    return T.createElement("div", {
      style: PA(PA(PA(PA({}, r.rbgcpControlBtnWrapper), r.rbgcpControlInputWrap), r.rbgcpStopInputWrap), {
        paddingLeft: 8
      }),
      id: "rbgcp-stop-input-wrapper".concat(o)
    }, T.createElement(XC, null), T.createElement("input", {
      value: e,
      id: "rbgcp-stop-input".concat(o),
      onChange: function(a) {
        return i(a.target.value);
      },
      style: PA(PA({}, r.rbgcpControlInput), r.rbgcpStopInput)
    }));
  }, H1 = function() {
    var A = TA(), e = A.degrees, t = A.onChange, r = A.value, n = A.defaultStyles, o = A.pickerIdSuffix, i = function(a) {
      var s = br(a.target.value, 0, 360), l = r.split(/,(.+)/)[1];
      t("linear-gradient(".concat(s ?? 0, "deg, ").concat(l));
    };
    return T.createElement("div", {
      style: PA(PA(PA({}, n.rbgcpControlBtnWrapper), n.rbgcpControlInputWrap), n.rbgcpDegreeInputWrap),
      id: "rbgcp-degree-input-wrapper".concat(o)
    }, T.createElement(zC, null), T.createElement("input", {
      value: e,
      onChange: function(a) {
        return i(a);
      },
      id: "rbgcp-degree-input".concat(o),
      style: PA(PA({}, n.rbgcpControlInput), n.rbgcpDegreeInput)
    }), T.createElement("div", {
      style: PA(PA({}, n.rbgcpDegreeIcon), {
        position: "absolute",
        right: e > 99 ? 0 : e < 10 ? 7 : 3,
        top: 1,
        fontWeight: 400,
        fontSize: 13
      })
    }, "\xB0"));
  }, T1 = function() {
    var A = TA(), e = A.colors, t = A.selectedColor, r = A.createGradientStr, n = A.defaultStyles, o = A.pickerIdSuffix, i = function() {
      if ((e == null ? void 0 : e.length) > 2) {
        var a = e == null ? void 0 : e.map(function(l, c) {
          return PA(PA({}, l), {
            value: c === t - 1 ? Gi(l) : Sn(l)
          });
        }), s = a == null ? void 0 : a.filter(function(l, c) {
          return c !== t;
        });
        r(s);
      }
    };
    return T.createElement("div", {
      onClick: i,
      style: PA(PA({}, sn(false, n)), {
        width: 28
      }),
      id: "rbgcp-point-delete-btn".concat(o),
      tabIndex: 0,
      role: "button",
      onKeyDown: function() {
      }
    }, T.createElement(NC, null));
  }, Mu = function(A) {
    var e = A.hideGradientType, t = A.hideGradientAngle, r = A.hideGradientStop, n = TA(), o = n.gradientType, i = n.defaultStyles, a = n.pickerIdSuffix;
    return T.createElement("div", {
      style: PA(PA({}, i.rbgcpControlBtnWrapper), {
        marginTop: 12,
        marginBottom: -4,
        justifyContent: "space-between",
        paddingLeft: e ? 4 : 0
      }),
      id: "rbgcp-gradient-controls-wrap".concat(a)
    }, !e && T.createElement(E1, null), T.createElement("div", {
      style: {
        width: 53
      }
    }, !t && o === "linear-gradient" && T.createElement(H1, null)), !r && T.createElement(I1, null), T.createElement(T1, null));
  }, mn = function() {
    return mn = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, mn.apply(this, arguments);
  }, k1 = function(A) {
    var e, t, r = A.hideColorTypeBtns, n = A.setGradient, o = A.isGradient, i = A.setSolid, a = A.locales, s = TA(), l = s.defaultStyles, c = s.pickerIdSuffix;
    return r ? T.createElement("div", {
      style: {
        width: 1
      }
    }) : T.createElement("div", {
      style: mn({
        display: "flex",
        alignItems: "center"
      }, l.rbgcpControlBtnWrapper),
      id: "rbgcp-color-type-btns".concat(c)
    }, T.createElement("div", {
      onClick: i,
      id: "rbgcp-solid-btn".concat(c),
      style: Ou(!o, l)
    }, (e = a == null ? void 0 : a.CONTROLS) === null || e === void 0 ? void 0 : e.SOLID), T.createElement("div", {
      onClick: n,
      id: "rbgcp-gradient-btn".concat(c),
      style: Ou(o ?? false, l)
    }, (t = a == null ? void 0 : a.CONTROLS) === null || t === void 0 ? void 0 : t.GRADIENT));
  }, L1 = function(A) {
    var e = A.openInputType, t = A.setOpenInputType, r = TA(), n = r.inputType, o = r.setInputType, i = r.defaultStyles, a = r.pickerIdSuffix, s = e ? "visibility 0ms linear" : "visibility 100ms linear 150ms", l = e ? "z-index 0ms linear" : "z-index 100ms linear 150ms", c = e ? "opacity 120ms linear" : "opacity 150ms linear 50ms", u = function(d, f) {
      e && (d.stopPropagation(), o(f), t(false));
    };
    return T.createElement("div", {
      style: mn({
        visibility: e ? "visible" : "hidden",
        zIndex: e ? "" : -100,
        opacity: e ? 1 : 0,
        transition: "".concat(c, ", ").concat(s, ", ").concat(l)
      }, i.rbgcpColorModelDropdown),
      id: "rbgcp-color-model-dropdown".concat(a)
    }, T.createElement("div", {
      id: "rbgcp-color-model-rgb-btn".concat(a),
      onClick: function(d) {
        return u(d, "rgb");
      },
      style: Bo(n === "rgb", i)
    }, "RGB"), T.createElement("div", {
      id: "rbgcp-color-model-hsl-btn".concat(a),
      onClick: function(d) {
        return u(d, "hsl");
      },
      style: Bo(n === "hsl", i)
    }, "HSL"), T.createElement("div", {
      id: "rbgcp-color-model-hsv-btn".concat(a),
      onClick: function(d) {
        return u(d, "hsv");
      },
      style: Bo(n === "hsv", i)
    }, "HSV"), T.createElement("div", {
      id: "rbgcp-color-model-cmyk-btn".concat(a),
      onClick: function(d) {
        return u(d, "cmyk");
      },
      style: Bo(n === "cmyk", i)
    }, "CMYK"));
  }, R1 = function(A) {
    var e, t, r = A.locales, n = A.hideEyeDrop, o = n === void 0 ? false : n, i = A.hideAdvancedSliders, a = i === void 0 ? false : i, s = A.hideColorGuide, l = s === void 0 ? false : s, c = A.hideInputType, u = c === void 0 ? false : c, d = A.hideColorTypeBtns, f = d === void 0 ? false : d, p = A.hideGradientControls, B = p === void 0 ? false : p, Q = A.hideGradientType, m = Q === void 0 ? false : Q, y = A.hideGradientAngle, w = y === void 0 ? false : y, C = A.hideGradientStop, U = C === void 0 ? false : C, v = TA(), x = v.config, H = v.onChange, I = v.isGradient, g = v.handleChange, k = v.previous, R = v.defaultStyles, L = v.pickerIdSuffix, K = x.defaultColor, M = x.defaultGradient, O = h.useState(false), j = O[0], N = O[1], D = h.useState(false), Y = D[0], X = D[1], oA = h.useState(false), P = oA[0], z = oA[1], $ = o && a && l && u, AA = (e = k == null ? void 0 : k.color) !== null && e !== void 0 ? e : K, gA = (t = k == null ? void 0 : k.gradient) !== null && t !== void 0 ? t : M, cA = function() {
      H(AA);
    }, tA = function() {
      H(gA);
    }, q = o && a && l && u, aA = q && f;
    return aA ? I && !B ? T.createElement(Mu, {
      hideGradientType: m,
      hideGradientAngle: w,
      hideGradientStop: U
    }) : null : T.createElement("div", {
      style: {
        paddingBottom: 4
      }
    }, T.createElement("div", {
      style: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      },
      id: "rbgcp-controls-wrapper".concat(L)
    }, T.createElement(k1, {
      hideColorTypeBtns: f,
      setGradient: tA,
      isGradient: I,
      setSolid: cA,
      locales: r
    }), !q && T.createElement("div", {
      style: mn({
        display: $ ? "none" : ""
      }, R.rbgcpControlBtnWrapper),
      id: "rbgcp-control-rightside-wrapper".concat(L)
    }, !o && T.createElement(U1, {
      onSelect: g
    }), !a && T.createElement("div", {
      id: "rbgcp-advanced-btn".concat(L),
      onClick: function() {
        return z(!P);
      },
      style: sn(P, R)
    }, T.createElement($C, {
      color: P ? "#568CF5" : ""
    })), !l && T.createElement("div", {
      style: sn(j, R),
      onClick: function() {
        return N(!j);
      },
      id: "rbgcp-comparibles-btn".concat(L)
    }, T.createElement(jC, {
      color: j ? "#568CF5" : ""
    })), !u && T.createElement("div", {
      id: "rbgcp-color-model-btn".concat(L),
      onClick: function() {
        return X(!Y);
      },
      style: sn(Y, R)
    }, T.createElement(WC, {
      color: Y ? "#568CF5" : ""
    }), T.createElement(L1, {
      openInputType: Y,
      setOpenInputType: X
    })))), !a && T.createElement(S1, {
      openAdvanced: P
    }), !l && T.createElement(x1, {
      openComparibles: j
    }), I && !B && T.createElement(Mu, {
      hideGradientType: m,
      hideGradientAngle: w,
      hideGradientStop: U
    }));
  }, Ye = function() {
    return Ye = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, Ye.apply(this, arguments);
  }, Ku = function(A, e, t) {
    if (t || arguments.length === 2) for (var r = 0, n = e.length, o; r < n; r++) (o || !(r in e)) && (o || (o = Array.prototype.slice.call(e, 0, r)), o[r] = e[r]);
    return A.concat(o || Array.prototype.slice.call(e));
  }, O1 = function(A) {
    var e = A.left, t = A.i, r = A.setDragging, n = TA(), o = n.colors, i = n.squareWidth, a = n.selectedColor, s = n.defaultStyles, l = n.pickerIdSuffix, c = n.createGradientStr, u = a === t, d = (i - 18) / 100, f = function(B) {
      var Q = o == null ? void 0 : o.map(function(m, y) {
        return Ye(Ye({}, m), {
          value: y === B ? Gi(m) : Sn(m)
        });
      });
      c(Q);
    }, p = function(B) {
      B.stopPropagation(), f(t), r(true);
    };
    return T.createElement("div", {
      onMouseDown: function(B) {
        return p(B);
      },
      id: "rbgcp-gradient-handle-".concat(t).concat(l),
      style: Ye(Ye({}, s.rbgcpGradientHandleWrap), {
        left: (e ?? 0) * d
      })
    }, T.createElement("div", {
      style: Ye(Ye({}, s.rbgcpGradientHandle), u ? {
        boxShadow: "0px 0px 5px 1px rgba(86, 140, 245,.95)",
        border: "2px solid white"
      } : {}),
      id: "rbgcp-gradient-handle-".concat(t, "-dot").concat(l)
    }, u && T.createElement("div", {
      style: {
        width: 5,
        height: 5,
        borderRadius: "50%",
        background: "white"
      },
      id: "rbgcp-gradient-handle-".concat(t, "-selected-dot").concat(l)
    })));
  }, M1 = function() {
    var A = TA(), e = A.value, t = A.colors, r = A.config, n = A.squareWidth, o = A.currentColor, i = A.handleGradient, a = A.pickerIdSuffix, s = A.createGradientStr, l = r.barSize, c = h.useState(false), u = c[0], d = c[1];
    function f(w) {
      return w.replace(/(radial|linear)-gradient\([^,]+,/, "linear-gradient(90deg,");
    }
    var p = function(w) {
      var C, U = Qr(w, l), v = (C = Ku(Ku([], t.map(function(x) {
        return Ye(Ye({}, x), {
          value: Sn(x)
        });
      }), true), [
        {
          value: o,
          left: U
        }
      ], false)) === null || C === void 0 ? void 0 : C.sort(function(x, H) {
        return x.left - H.left;
      });
      s(v);
    }, B = function() {
      d(false);
    }, Q = function(w) {
      u || (p(w), d(true));
    }, m = function(w) {
      u && i(o, Qr(w, l));
    }, y = function() {
      B();
    };
    return h.useEffect(function() {
      return window.addEventListener("mouseup", y), function() {
        window.removeEventListener("mouseup", y);
      };
    }), T.createElement("div", {
      style: {
        width: "100%",
        marginTop: 17,
        marginBottom: 4,
        position: "relative"
      },
      id: "rbgcp-gradient-bar".concat(a)
    }, T.createElement("div", {
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
    }), t == null ? void 0 : t.map(function(w, C) {
      return T.createElement(O1, {
        i: C,
        left: w.left,
        key: "".concat(C, "-").concat(w),
        setDragging: d
      });
    }));
  }, K1 = function(A) {
    var e = A.locales, t = A.presets, r = A.hideHue, n = A.hideInputs, o = A.hidePresets, i = A.hideOpacity, a = A.hideEyeDrop, s = A.hideControls, l = A.hideInputType, c = A.hideColorGuide, u = A.hidePickerSquare, d = A.hideGradientType, f = A.hideGradientStop, p = A.hideGradientAngle, B = A.hideColorTypeBtns, Q = A.hideAdvancedSliders, m = A.hideGradientControls, y = TA(), w = y.isGradient, C = y.pickerIdSuffix;
    return T.createElement("div", {
      style: {
        userSelect: "none"
      },
      id: "rbgcp-color-picker".concat(C)
    }, !u && T.createElement(MC, null), !s && T.createElement(R1, {
      locales: e,
      hideEyeDrop: a,
      hideInputType: l,
      hideColorGuide: c,
      hideGradientType: d,
      hideGradientStop: f,
      hideColorTypeBtns: B,
      hideGradientAngle: p,
      hideAdvancedSliders: Q,
      hideGradientControls: m
    }), w && T.createElement(M1, null), !r && T.createElement(aC, null), !i && T.createElement(KC, null), !n && T.createElement(hC, null), !o && T.createElement(_C, {
      presets: t
    }));
  }, qo = function() {
    return qo = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, qo.apply(this, arguments);
  };
  function D1(A) {
    var e = A.idSuffix, t = A.value, r = t === void 0 ? "rgba(175, 51, 242, 1)" : t, n = A.onChange, o = A.hideControls, i = o === void 0 ? false : o, a = A.hideInputs, s = a === void 0 ? false : a, l = A.hideOpacity, c = l === void 0 ? false : l, u = A.hidePresets, d = u === void 0 ? false : u, f = A.hideHue, p = f === void 0 ? false : f, B = A.presets, Q = B === void 0 ? [] : B, m = A.hideEyeDrop, y = m === void 0 ? false : m, w = A.hideAdvancedSliders, C = w === void 0 ? false : w, U = A.hideColorGuide, v = U === void 0 ? false : U, x = A.hideInputType, H = x === void 0 ? false : x, I = A.hideColorTypeBtns, g = I === void 0 ? false : I, k = A.hideGradientType, R = k === void 0 ? false : k, L = A.hideGradientAngle, K = L === void 0 ? false : L, M = A.hideGradientStop, O = M === void 0 ? false : M, j = A.hideGradientControls, N = j === void 0 ? false : j, D = A.locales, Y = D === void 0 ? DC : D, X = A.width, oA = X === void 0 ? 294 : X, P = A.height, z = P === void 0 ? 294 : P, $ = A.style, AA = $ === void 0 ? {} : $, gA = A.className, cA = A.disableDarkMode, tA = cA === void 0 ? false : cA, q = A.disableLightMode, aA = q === void 0 ? false : q, sA = A.hidePickerSquare, b = sA === void 0 ? false : sA, S = A.showHexAlpha, F = S === void 0 ? false : S, G = A.config, W = G === void 0 ? {} : G, V = Jw(r), dA = typeof window > "u" || tA ? false : !!(window.matchMedia("(prefers-color-scheme: dark)").matches || aA), pA = Q1(dA, AA), BA = dA ? "-dark".concat(e ? "-".concat(e) : "") : e ? "-".concat(e) : "";
    return T.createElement("div", {
      className: gA,
      style: qo(qo({}, pA.body), {
        width: oA
      })
    }, T.createElement(tC, {
      value: V,
      onChange: n,
      squareWidth: oA,
      passedConfig: W,
      squareHeight: z,
      isDarkMode: dA,
      hideOpacity: c,
      showHexAlpha: F,
      defaultStyles: pA,
      pickerIdSuffix: BA
    }, T.createElement(K1, {
      hideControls: i,
      hideInputs: s,
      hidePresets: d,
      hideOpacity: c,
      hideHue: p,
      presets: Q,
      hideEyeDrop: y,
      hideAdvancedSliders: C,
      hideColorGuide: v,
      hideInputType: H,
      hideColorTypeBtns: g,
      hideGradientType: R,
      hideGradientAngle: K,
      hideGradientStop: O,
      hideGradientControls: N,
      hidePickerSquare: b,
      locales: Y
    })));
  }
  function P1(A) {
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
  function hr({ field: A, data: e, onDataChange: t, props: r }) {
    const n = A.name, [o, i] = h.useState(e[n] || ""), [a, s] = h.useState(false), [l, c] = h.useState(null), u = h.useRef(e[n]), d = r.context.theme, f = (y) => {
      if (y == null) {
        i(""), s(false), t({
          [n]: null
        });
        return;
      }
      if (typeof y != "string") {
        console.warn("CollectionGradientColorPicker: Non-string value received:", y), s(true);
        return;
      }
      if (y.trim() === "") {
        i(""), s(false), t({
          [n]: null
        });
        return;
      }
      const C = P1(y);
      i(y), C.isValid ? (s(false), t({
        [n]: C.normalizedValue || null
      })) : s(true);
    }, p = (y) => f(y), B = (y) => f(y.target.value), Q = () => f(null), m = !!l;
    return h.useEffect(() => {
      const y = e[n];
      y !== u.current && (u.current = y, i(y || ""), s(false));
    }, [
      e[n]
    ]), E.jsx(E.Fragment, {
      children: E.jsxs($d, {
        theme: d,
        children: [
          E.jsxs(ue, {
            sx: {
              display: "flex",
              alignItems: "flex-start",
              gap: 0.5,
              mt: 1
            },
            children: [
              E.jsx(kw, {
                variant: "standard",
                fullWidth: true,
                value: o,
                error: a,
                helperText: a ? "Invalid color format (use Hex, RGB, RGBA, or Gradient)" : "",
                onChange: B,
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
              o && E.jsx(Z0, {
                onClick: Q,
                title: "Clear color",
                size: "large",
                sx: {
                  mt: -1,
                  mr: -1.5
                },
                children: E.jsx(Gw, {})
              }),
              E.jsx(ue, {
                onClick: (y) => {
                  c(y.currentTarget);
                },
                title: "Choose color",
                sx: {
                  mt: o ? "4px" : "-2px",
                  px: "4px",
                  py: o ? "4px" : "3px",
                  backgroundColor: o ? d.name === "light" ? d.palette.common.white : "#121212" : "transparent",
                  borderRadius: "1px",
                  display: "inline-block",
                  cursor: "pointer",
                  verticalAlign: "middle",
                  boxSizing: "border-box",
                  border: a ? `1px solid ${d.palette.error.main}` : o ? `1px solid ${d.name === "light" ? d.palette.grey[400] : d.palette.common.black}` : `1px dashed ${d.name === "light" ? d.palette.grey[400] : d.palette.text.secondary}`,
                  opacity: a ? 0.6 : 1
                },
                children: E.jsx(ue, {
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
          E.jsx(qd, {
            "aria-hidden": !m,
            slotProps: {
              paper: {
                elevation: 0,
                sx: {
                  p: "9px",
                  borderRadius: "6px",
                  backgroundColor: "rgb(32,32,32)"
                }
              }
            },
            open: m,
            anchorEl: l,
            onClose: () => c(null),
            transformOrigin: {
              vertical: "top",
              horizontal: "center"
            },
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "center"
            },
            children: E.jsx(ue, {
              sx: {
                borderRadius: "6px"
              },
              children: E.jsx(D1, {
                value: o || "",
                onChange: p,
                hidePresets: true,
                hideInputs: true,
                hideEyeDrop: true,
                hideAdvancedSliders: true,
                hideColorGuide: true,
                hideInputType: true
              })
            })
          })
        ]
      })
    });
  }
  let _1, N1, V1;
  _1 = () => [
    {
      type: "custom",
      component: () => E.jsx(OA, {})
    },
    {
      name: "sliderSize",
      label: "slider_size",
      type: "select",
      options: [
        {
          value: "small",
          label: "slider_small"
        },
        {
          value: "medium",
          label: "slider_medium"
        }
      ],
      default: "medium"
    },
    {
      name: "sliderOrientation",
      label: "slider_orientation",
      type: "select",
      options: [
        {
          value: "horizontal",
          label: "horizontal"
        },
        {
          value: "vertical",
          label: "vertical"
        }
      ],
      default: "horizontal"
    },
    {
      name: "valueLabelDisplay",
      label: "value_label_display",
      type: "select",
      options: [
        {
          value: "on",
          label: "label_on"
        },
        {
          value: "off",
          label: "label_off"
        },
        {
          value: "auto",
          label: "label_auto"
        }
      ],
      default: "off"
    },
    {
      name: "labelPosition",
      label: "label_position",
      type: "text",
      default: "-5px",
      hidden: "data.valueLabelDisplay === 'off'"
    },
    {
      name: "sliderColor",
      label: "slider_color",
      type: "color"
    },
    {
      name: "sliderPadding",
      label: "slider_padding",
      type: "number",
      default: 1,
      min: 0,
      step: 0.5
    },
    {
      type: "custom",
      component: () => E.jsx(OA, {
        dividerText: "thumb"
      })
    },
    {
      name: "thumbWidth",
      label: "thumb_width",
      type: "number",
      default: 20,
      min: 0
    },
    {
      name: "thumbHeight",
      label: "thumb_height",
      type: "number",
      default: 20,
      min: 0
    },
    {
      name: "thumbColor",
      label: "thumb_color",
      default: "",
      type: "custom",
      component: (A, e, t, r) => E.jsx(hr, {
        field: A,
        data: e,
        onDataChange: t,
        props: r
      })
    },
    {
      type: "custom",
      component: () => E.jsx(OA, {
        dividerText: "track"
      })
    },
    {
      name: "trackLength",
      label: "track_length",
      type: "number",
      default: 4,
      min: 0
    },
    {
      name: "trackBorderColor",
      label: "track_border_color",
      type: "color"
    },
    {
      name: "trackBackgroundColor",
      label: "track_background_color",
      default: "",
      type: "custom",
      component: (A, e, t, r) => E.jsx(hr, {
        field: A,
        data: e,
        onDataChange: t,
        props: r
      })
    },
    {
      type: "custom",
      component: () => E.jsx(OA, {
        dividerText: "rail"
      })
    },
    {
      name: "railLength",
      label: "rail_length",
      type: "number",
      default: 4,
      min: 0
    },
    {
      name: "railBackgroundColor",
      label: "rail_background_color",
      default: "",
      type: "custom",
      component: (A, e, t, r) => E.jsx(hr, {
        field: A,
        data: e,
        onDataChange: t,
        props: r
      })
    },
    {
      type: "custom",
      component: () => E.jsx(OA, {
        dividerText: "mark"
      })
    },
    {
      name: "markWidth",
      label: "mark_width",
      type: "number",
      default: 2,
      min: 0
    },
    {
      name: "markHeight",
      label: "mark_height",
      type: "number",
      default: 2,
      min: 0
    },
    {
      name: "markBackgroundColor",
      label: "mark_background_color",
      default: "",
      type: "custom",
      component: (A, e, t, r) => E.jsx(hr, {
        field: A,
        data: e,
        onDataChange: t,
        props: r
      })
    },
    {
      type: "custom",
      component: () => E.jsx(OA, {
        dividerText: "values"
      })
    },
    {
      name: "minValue",
      type: "number",
      label: "min_value",
      default: 0
    },
    {
      name: "maxValue",
      type: "number",
      label: "max_value",
      default: 100
    },
    {
      name: "step",
      type: "number",
      label: "step",
      default: 10
    },
    {
      type: "custom",
      component: () => E.jsx(OA, {}),
      hidden: "!data.values_count"
    },
    {
      name: "onlyStates",
      type: "checkbox",
      label: "only_states",
      default: false,
      hidden: "!data.values_count"
    },
    {
      type: "custom",
      component: () => E.jsx(OA, {
        dividerText: "marks"
      })
    },
    {
      name: "marks",
      type: "checkbox",
      label: "marks",
      default: false
    },
    {
      type: "custom",
      component: () => E.jsx(OA, {}),
      hidden: "!data.marks"
    },
    {
      name: "markPosition",
      label: "mark_position",
      type: "text",
      default: "30px",
      hidden: "!data.marks"
    },
    {
      name: "markStep",
      type: "number",
      label: "mark_step",
      default: 10,
      hidden: "!data.marks"
    },
    {
      type: "custom",
      component: () => E.jsx(OA, {}),
      hidden: "!data.marks"
    },
    {
      name: "markerTextColor",
      label: "marker_text_color",
      type: "color",
      hidden: "!data.marks"
    },
    {
      name: "markerTextSize",
      label: "marker_text_size",
      type: "slider",
      min: 0,
      max: 500,
      step: 1,
      hidden: "!data.marks"
    },
    {
      type: "custom",
      component: () => E.jsx(OA, {}),
      hidden: "!data.marks"
    },
    {
      name: "markerIconColor",
      label: "marker_icon_color",
      type: "color",
      hidden: "!data.marks"
    },
    {
      name: "markerIconSize",
      label: "marker_icon_size",
      type: "slider",
      min: 1,
      max: 500,
      step: 1,
      hidden: "!data.marks"
    },
    {
      type: "custom",
      component: () => E.jsx(OA, {
        dividerText: "icon"
      })
    },
    {
      name: "iconSmallMin",
      label: "icon_small_min",
      type: "icon64",
      hidden: "data.iconMin"
    },
    {
      name: "iconMin",
      label: "icon_min",
      type: "image",
      hidden: "data.iconSmallMin"
    },
    {
      name: "iconSizeStart",
      label: "icon_size",
      type: "text",
      default: "24px",
      hidden: "!data.iconMin && !data.iconSmallMin"
    },
    {
      name: "startIconColor",
      label: "icon_color",
      type: "color",
      hidden: "!data.iconMin && !data.iconSmallMin"
    },
    {
      type: "custom",
      component: () => E.jsx(OA, {
        dividerText: "icon"
      })
    },
    {
      name: "iconSmallMax",
      label: "icon_small_max",
      type: "icon64",
      hidden: "data.iconMax"
    },
    {
      name: "iconMax",
      label: "icon_max",
      type: "image",
      hidden: "data.iconSmallMax"
    },
    {
      name: "iconSizeEnd",
      label: "icon_size",
      type: "text",
      default: "24px",
      hidden: "!data.iconMax && !data.iconSmallMax"
    },
    {
      name: "endIconColor",
      label: "icon_color",
      type: "color",
      hidden: "!data.iconMax && !data.iconSmallMax"
    }
  ];
  N1 = () => {
    const { isSignalVisible: A, refService: e, widget: t } = h.useContext(ot), r = h.useMemo(() => {
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
      Array.from(i).forEach((s) => {
        const l = s.children[0];
        l && l instanceof HTMLElement && l.className === "vis-signal-icon iconOwn" && a.push(l);
      }), a.forEach((s, l) => {
        const c = r[l], u = c !== void 0 ? n[c] : void 0;
        u ? (s.style.color = u, s.style.filter = "drop-shadow(0px 10000px 0)", s.style.transform = "translateY(-10000px)") : (s.style.color = "", s.style.filter = "", s.style.transform = "");
      });
    }, [
      r,
      n,
      e
    ]);
  };
  G1 = (A, e = 28) => {
    const [t, r] = h.useState({
      width: void 0,
      height: void 0,
      maxWidth: void 0
    }), n = h.useCallback((i) => {
      if (i.length === 0) return;
      const a = i[0], { width: s, height: l } = a.contentRect, c = Math.round(s), u = Math.round(l), d = c <= u + e + 12 ? c - e - 12 : u;
      r({
        width: c,
        height: u,
        maxWidth: d
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
  V1 = (A) => {
    const { widget: e } = h.useContext(ot), [t, r] = h.useState("100%"), [n, o] = h.useState("100%"), { width: i, height: a } = G1(A), s = h.useMemo(() => ({
      basePadding: e.data.basePadding || 0,
      isSquare: e.data.square || false,
      isCircle: e.data.circle || false
    }), [
      e.data.basePadding,
      e.data.square,
      e.data.circle
    ]), l = h.useMemo(() => s.basePadding * 16, [
      s.basePadding
    ]);
    return h.useEffect(() => {
      if (!i || !a || i < 0 || a < 0) return;
      if (!s.isSquare && !s.isCircle) {
        r("100%"), o("100%");
        return;
      }
      if (!(i >= l && a >= l)) {
        r("0px"), o("0px");
        return;
      }
      const u = i - l, d = a - l, f = Math.min(u, d);
      r(`${f}px`), o(`${f}px`);
    }, [
      i,
      a,
      l,
      s.isSquare,
      s.isCircle
    ]), {
      width: t,
      height: n
    };
  };
  gp = h.forwardRef(({ children: A, data: e, oidValue: t = null, isValidType: r = true, bgActive: n = true, sx: o = {} }, i) => {
    const a = h.useRef(null), s = h.useRef(null), [l, c] = h.useState(null), [u, d] = h.useState(null), f = h.useRef(null), [p, B] = h.useState(null), Q = h.useContext(ot);
    if (!Q) throw new Error("CollectionBase must be used within CollectionProvider");
    const { wrappedContent: m, widget: y } = Q, w = y.data.oidObject, { backgroundStyles: C, borderStyles: U } = Cl(y.style), v = h.useRef(null), { width: x, height: H } = V1(l || v), I = (t || t === 0 || t === false) && `${t}${(w == null ? void 0 : w.unit) === void 0 ? "" : w == null ? void 0 : w.unit}`;
    N1();
    const g = w == null ? void 0 : w._id, k = e.footer || e.alias || e.value || I || "";
    return h.useEffect(() => {
      y.data.noFooter || p && (p.innerHTML = k);
    }, [
      k,
      y.data.noFooter,
      p
    ]), h.useEffect(() => {
      y.data.noHeader || u && (u.innerHTML = e.header);
    }, [
      e.header,
      y.data.noHeader,
      u
    ]), h.useImperativeHandle(i, () => ({
      get paper0() {
        return a == null ? void 0 : a.current;
      },
      get paper1() {
        return s == null ? void 0 : s.current;
      },
      get header() {
        return f == null ? void 0 : f.current;
      }
    })), E.jsxs(es, {
      ref: a,
      className: "BASE-PAPER-0",
      square: y.data.squaredCorner,
      variant: y.data.outlinedFrame ? "outlined" : "elevation",
      sx: {
        overflow: "hidden",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        ...C,
        border: m ? U.border : null,
        borderWidth: m ? U.borderWidth : null,
        borderStyle: m ? U.borderStyle : null,
        borderRadius: m ? U.borderRadius : null,
        borderColor: m ? U.borderColor : e.frameBackgroundColorActive || e.frameBackgroundColor || U.borderColor,
        background: m ? y.data.frameBackgroundColorActive || e.frameBackgroundColorActive || e.frameBackgroundColor || y.data.frameBackgroundActive || e.frameBackgroundActive || e.frameBackground : "transparent"
      },
      children: [
        !!r && E.jsxs(E.Fragment, {
          children: [
            E.jsx(ue, {
              sx: {
                width: y.data.noHeader ? "0%" : "100%",
                height: y.data.noHeader ? "0%" : "auto",
                mt: (y.data.basePadding ?? 8) / 2,
                mb: -(y.data.basePadding ?? 8) / 2
              },
              children: E.jsx(qr, {
                ref: (R) => {
                  d(R), f.current = R;
                },
                noWrap: true,
                variant: "body2",
                sx: {
                  fontSize: e.headerSize,
                  color: y.data.textColor || e.textColorActive || e.textColor
                }
              })
            }),
            E.jsx(ue, {
              className: "BASE-BOX-1",
              ref: c,
              sx: {
                overflow: "hidden",
                p: y.data.basePadding,
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              },
              children: E.jsx(es, {
                ref: s,
                className: "BASE-PAPER-1",
                elevation: y.data.outlined ? 0 : Number(y.data.baseElevation) || 0,
                square: !y.data.basePadding || y.data.squaredCorner,
                variant: y.data.outlined ? "outlined" : "elevation",
                sx: {
                  overflow: "hidden",
                  width: x,
                  height: H,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderColor: m ? U.borderColor : e.backgroundColorActive || e.backgroundColor || U.borderColor,
                  background: m ? y.data.backgroundColorActive || n && e.backgroundColorActive || e.backgroundColor || y.data.backgroundActive || n && e.backgroundActive || e.background : "transparent",
                  borderRadius: y.data.circle || y.data.ellipse ? "50%" : null,
                  ...o
                },
                children: A
              })
            }),
            E.jsx(ue, {
              sx: {
                width: y.data.noFooter ? "0%" : "100%",
                height: y.data.noFooter ? "0%" : "auto",
                mt: -(y.data.basePadding ?? 8) / 2,
                mb: (y.data.basePadding ?? 8) / 2
              },
              children: E.jsx(qr, {
                ref: B,
                noWrap: true,
                variant: "body2",
                sx: {
                  fontSize: e.footerSize,
                  color: y.data.textColor || e.textColorActive || e.textColor
                }
              })
            })
          ]
        }),
        !r && E.jsx(ue, {
          sx: {
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          },
          children: E.jsx(qr, {
            variant: "body2",
            sx: {
              p: 1,
              width: "100%",
              textAlign: "center"
            },
            children: g ? `${g} has an invalid type!` : "Please select a valid object ID"
          })
        })
      ]
    });
  });
  gp.displayName = "CollectionBase";
  function lr(A, e) {
    return A[e];
  }
  function Pr(A) {
    return typeof A == "object" && A !== null && "sliderOrientation" in A;
  }
  const El = (A) => typeof A == "number" ? `${A / 100}rem` : null;
  Il = function(A) {
    const { theme: e, widget: t, widget: { data: r }, getPropertyValue: n } = h.useContext(ot), o = r[`${A}Object`], { fontStyles: i, textStyles: a, backgroundStyles: s } = Cl(t.style), [l, c] = h.useState(), u = n(A), d = o == null ? void 0 : o.name, f = h.useCallback(El, []), p = h.useCallback((C, U = "") => {
      const v = `${C}${U}`;
      return lr(r, v);
    }, [
      r
    ]), { states: B, widgetStates: Q, minValue: m, maxValue: y } = h.useMemo(() => (() => {
      const U = [], v = {};
      let x = null, H = null;
      const I = o == null ? void 0 : o.type, g = (o == null ? void 0 : o.commonStates) || {}, k = Object.entries(g);
      if (I === "number" || I === "string" || I === "boolean" || I === "mixed") {
        for (let R = 1; R <= r.values_count; R++) {
          const L = r[`value${R}`], K = r[`alias${R}`], M = o == null ? void 0 : o.unit;
          if (L != null && /\S/.test(String(L))) {
            const O = k.find(([N]) => N === String(L));
            U.push({
              value: O ? I === "number" ? Number(O[0]) : String(O[0]) : I === "number" ? Number(L) : L,
              label: String(K && String(K).trim() !== "" ? K : `${L}${M}`).replace(/(\r\n|\n|\r)/gm, ""),
              fontSize: (() => {
                if (String(u) === String(L) && typeof r.valueSizeActive == "number") return f(r.valueSizeActive);
                const D = lr(r, `valueSize${R}`);
                if (typeof D == "number") return f(D);
                if (Pr(r) && typeof r.markerTextSize == "number") return f(r.markerTextSize);
                if (typeof r.valueSize == "number") return f(r.valueSize);
              })(),
              textColor: (() => {
                if (String(u) === String(L) && r.textColorActive) return r.textColorActive;
                const D = lr(r, `textColor${R}`);
                if (D) return D;
                if (Pr(r) && r.markerTextColor) return r.markerTextColor;
                if (r.textColor) return r.textColor;
              })(),
              icon: (() => {
                const N = r[`icon${R}`] || r[`iconSmall${R}`] || r.icon || r.iconSmall;
                return typeof N == "string" ? N : void 0;
              })(),
              iconSize: typeof r[`iconSize${R}`] == "number" ? r[`iconSize${R}`] : void 0,
              iconWidth: (() => {
                if (String(u) === String(L) && typeof r.iconSizeActive == "number") return r.iconSizeActive;
                const D = lr(r, `iconSize${R}`);
                return typeof D == "number" ? D : Pr(r) && typeof r.markerIconSize == "number" ? r.markerIconSize : typeof r.iconSize == "number" ? r.iconSize : 100;
              })(),
              iconHeight: (() => {
                if (String(u) === String(L) && typeof r.iconSizeActive == "number") return r.iconSizeActive;
                const D = lr(r, `iconSize${R}`);
                return typeof D == "number" ? D : Pr(r) && typeof r.markerIconSize == "number" ? r.markerIconSize : typeof r.iconSize == "number" ? r.iconSize : 100;
              })(),
              iconXOffset: (() => {
                const N = p("iconXOffset", String(R));
                return N && N !== "0px" ? N : "0px";
              })(),
              iconYOffset: (() => {
                const N = p("iconYOffset", String(R));
                return N && N !== "0px" ? N : "0px";
              })(),
              iconColor: lr(r, `iconColor${R}`) || (Pr(r) ? r.markerIconColor : void 0) || r.iconColor || e.palette.primary.main,
              backgroundColor: r.backgroundColor || s.backgroundColor || "",
              backgroundColorActive: p("backgroundColor", String(R)),
              background: String(r.background || s.background || ""),
              backgroundActive: p("background", String(R)),
              frameBackgroundColor: r.frameBackgroundColor || s.backgroundColor || "",
              frameBackgroundColorActive: p("frameBackgroundColor", String(R)),
              frameBackground: String(r.frameBackground || s.background || ""),
              frameBackgroundActive: p("frameBackground", String(R))
            });
            const j = String(O ? O[0] : L);
            v[j] = K && String(K).trim() !== "" ? K : `${L}${M}`;
          }
        }
        if (I === "number" && U.length) {
          const R = U.map((L) => typeof L.value == "number" ? L.value : NaN).filter((L) => !isNaN(L));
          R.length > 0 && (x = Math.min(...R), H = Math.max(...R));
        }
      }
      return {
        states: U,
        widgetStates: v,
        minValue: x,
        maxValue: H
      };
    })(), [
      o == null ? void 0 : o.type,
      o == null ? void 0 : o.commonStates,
      o == null ? void 0 : o.unit,
      r,
      e.palette.primary.main,
      s.backgroundColor,
      s.background,
      p,
      u,
      f
    ]), w = h.useMemo(() => {
      const C = (v = "") => ({
        textColor: r.textColor || a.color || e.palette.primary.main,
        textColorActive: p("textColor", String(v)),
        header: String(r.headerActive || p("header", String(v)) || r.header || d || "").replace(/(\r\n|\n|\r)/gm, ""),
        headerSize: f(r.headerSize) || f(r.headerSizeActive) || f(p("headerSize", String(v))) || (typeof i.fontSize == "string" ? i.fontSize : null),
        footer: String(r.footerActive || p("footer", String(v)) || r.footer || "").replace(/(\r\n|\n|\r)/gm, ""),
        footerSize: f(r.footerSize) || f(r.footerSizeActive) || f(p("footerSize", String(v))) || (typeof i.fontSize == "string" ? i.fontSize : null),
        alias: String(p("alias", String(v)) || "").replace(/(\r\n|\n|\r)/gm, ""),
        value: (() => {
          const x = p("value", String(v));
          return x != null ? `${x}${(o == null ? void 0 : o.unit) !== void 0 ? o.unit : ""}` : void 0;
        })(),
        valueSize: f(r.valueSize) || (typeof i.fontSize == "string" ? i.fontSize : null),
        valueSizeActive: typeof p("valueSize", String(v)) == "number" ? f(p("valueSize", String(v))) : null,
        icon: (() => {
          if (r.noIcon) return false;
          const x = r.icon || r.iconSmall;
          return typeof x == "string" ? x : false;
        })(),
        iconActive: (() => {
          const x = !r.noIcon && (p("icon", String(v)) || p("iconSmall", String(v)));
          return typeof x == "string" ? x : false;
        })(),
        iconSize: typeof r.iconSize == "number" && `calc(24px * ${r.iconSize} / 100)` || "24px",
        iconSizeActive: (() => {
          const x = p("iconSize", String(v));
          return x ? `calc(24px * ${x} / 100)` : false;
        })(),
        iconSizeActiveOnly: p("iconSize", String(v)),
        iconSizeOnly: p("iconSize", String(v)) || p("iconSize", String(v)) === 0 ? p("iconSize", String(v)) : r.iconSize,
        iconColor: r.iconColor,
        iconColorActive: p("iconColor", String(v)),
        iconHover: r.iconHover ? `${r.iconHover}%` : void 0,
        iconHoverActive: (() => {
          const x = p("iconHover", String(v));
          return x ? `${x}%` : void 0;
        })(),
        iconXOffset: !!p("iconXOffset", String(v)) && p("iconXOffset", String(v)) !== "0px" && p("iconXOffset", String(v)) || "0px",
        iconYOffset: !!p("iconYOffset", String(v)) && p("iconYOffset", String(v)) !== "0px" && p("iconYOffset", String(v)) || "0px",
        backgroundColor: r.backgroundColor || s.backgroundColor || "",
        backgroundColorActive: p("backgroundColor", String(v)),
        background: String(r.background || s.background || ""),
        backgroundActive: p("background", String(v)),
        frameBackgroundColor: r.frameBackgroundColor || s.backgroundColor || "",
        frameBackgroundColorActive: p("frameBackgroundColor", String(v)),
        frameBackground: String(r.frameBackground || s.background || ""),
        frameBackgroundActive: p("frameBackground", String(v))
      });
      switch (o == null ? void 0 : o.type) {
        case "mixed":
        case "boolean":
        case "number":
        case "string": {
          const v = B.findIndex((x) => String(x.value) === String(u));
          return v !== -1 ? (c(v + 1), C(String(v + 1))) : (c(void 0), C(""));
        }
        default:
          return C("");
      }
    }, [
      o,
      u,
      d,
      r,
      B,
      e,
      i,
      a,
      s,
      f,
      p
    ]);
    return {
      states: B,
      widgetStates: Q,
      minValue: m,
      maxValue: y,
      data: w,
      activeIndex: l,
      setActiveIndex: c,
      oidValue: u
    };
  };
  function Du(A) {
    return !(A == null || `${A}`.trim() === "" || Number.isNaN(+A));
  }
  var Ts = function(A, e) {
    return Ts = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(t, r) {
      t.__proto__ = r;
    } || function(t, r) {
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }, Ts(A, e);
  };
  function Rt(A, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
    Ts(A, e);
    function t() {
      this.constructor = A;
    }
    A.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
  }
  function $1(A, e, t, r) {
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
      l((r = r.apply(A, e || [])).next());
    });
  }
  function hp(A, e) {
    var t = {
      label: 0,
      sent: function() {
        if (o[0] & 1) throw o[1];
        return o[1];
      },
      trys: [],
      ops: []
    }, r, n, o, i = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
    return i.next = a(0), i.throw = a(1), i.return = a(2), typeof Symbol == "function" && (i[Symbol.iterator] = function() {
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
      for (; i && (i = 0, l[0] && (t = 0)), t; ) try {
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
  function Ur(A) {
    var e = typeof Symbol == "function" && Symbol.iterator, t = e && A[e], r = 0;
    if (t) return t.call(A);
    if (A && typeof A.length == "number") return {
      next: function() {
        return A && r >= A.length && (A = void 0), {
          value: A && A[r++],
          done: !A
        };
      }
    };
    throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function Ai(A, e) {
    var t = typeof Symbol == "function" && A[Symbol.iterator];
    if (!t) return A;
    var r = t.call(A), n, o = [], i;
    try {
      for (; (e === void 0 || e-- > 0) && !(n = r.next()).done; ) o.push(n.value);
    } catch (a) {
      i = {
        error: a
      };
    } finally {
      try {
        n && !n.done && (t = r.return) && t.call(r);
      } finally {
        if (i) throw i.error;
      }
    }
    return o;
  }
  function ei(A, e, t) {
    if (t || arguments.length === 2) for (var r = 0, n = e.length, o; r < n; r++) (o || !(r in e)) && (o || (o = Array.prototype.slice.call(e, 0, r)), o[r] = e[r]);
    return A.concat(o || Array.prototype.slice.call(e));
  }
  function wr(A) {
    return this instanceof wr ? (this.v = A, this) : new wr(A);
  }
  function W1(A, e, t) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var r = t.apply(A, e || []), n, o = [];
    return n = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), a("next"), a("throw"), a("return", i), n[Symbol.asyncIterator] = function() {
      return this;
    }, n;
    function i(f) {
      return function(p) {
        return Promise.resolve(p).then(f, u);
      };
    }
    function a(f, p) {
      r[f] && (n[f] = function(B) {
        return new Promise(function(Q, m) {
          o.push([
            f,
            B,
            Q,
            m
          ]) > 1 || s(f, B);
        });
      }, p && (n[f] = p(n[f])));
    }
    function s(f, p) {
      try {
        l(r[f](p));
      } catch (B) {
        d(o[0][3], B);
      }
    }
    function l(f) {
      f.value instanceof wr ? Promise.resolve(f.value.v).then(c, u) : d(o[0][2], f);
    }
    function c(f) {
      s("next", f);
    }
    function u(f) {
      s("throw", f);
    }
    function d(f, p) {
      f(p), o.shift(), o.length && s(o[0][0], o[0][1]);
    }
  }
  function j1(A) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var e = A[Symbol.asyncIterator], t;
    return e ? e.call(A) : (A = typeof Ur == "function" ? Ur(A) : A[Symbol.iterator](), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
      return this;
    }, t);
    function r(o) {
      t[o] = A[o] && function(i) {
        return new Promise(function(a, s) {
          i = A[o](i), n(a, s, i.done, i.value);
        });
      };
    }
    function n(o, i, a, s) {
      Promise.resolve(s).then(function(l) {
        o({
          value: l,
          done: a
        });
      }, i);
    }
  }
  function pe(A) {
    return typeof A == "function";
  }
  function Bp(A) {
    var e = function(r) {
      Error.call(r), r.stack = new Error().stack;
    }, t = A(e);
    return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t;
  }
  var Da = Bp(function(A) {
    return function(t) {
      A(this), this.message = t ? t.length + ` errors occurred during unsubscription:
` + t.map(function(r, n) {
        return n + 1 + ") " + r.toString();
      }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = t;
    };
  });
  function ti(A, e) {
    if (A) {
      var t = A.indexOf(e);
      0 <= t && A.splice(t, 1);
    }
  }
  var In = (function() {
    function A(e) {
      this.initialTeardown = e, this.closed = false, this._parentage = null, this._finalizers = null;
    }
    return A.prototype.unsubscribe = function() {
      var e, t, r, n, o;
      if (!this.closed) {
        this.closed = true;
        var i = this._parentage;
        if (i) if (this._parentage = null, Array.isArray(i)) try {
          for (var a = Ur(i), s = a.next(); !s.done; s = a.next()) {
            var l = s.value;
            l.remove(this);
          }
        } catch (B) {
          e = {
            error: B
          };
        } finally {
          try {
            s && !s.done && (t = a.return) && t.call(a);
          } finally {
            if (e) throw e.error;
          }
        }
        else i.remove(this);
        var c = this.initialTeardown;
        if (pe(c)) try {
          c();
        } catch (B) {
          o = B instanceof Da ? B.errors : [
            B
          ];
        }
        var u = this._finalizers;
        if (u) {
          this._finalizers = null;
          try {
            for (var d = Ur(u), f = d.next(); !f.done; f = d.next()) {
              var p = f.value;
              try {
                Pu(p);
              } catch (B) {
                o = o ?? [], B instanceof Da ? o = ei(ei([], Ai(o)), Ai(B.errors)) : o.push(B);
              }
            }
          } catch (B) {
            r = {
              error: B
            };
          } finally {
            try {
              f && !f.done && (n = d.return) && n.call(d);
            } finally {
              if (r) throw r.error;
            }
          }
        }
        if (o) throw new Da(o);
      }
    }, A.prototype.add = function(e) {
      var t;
      if (e && e !== this) if (this.closed) Pu(e);
      else {
        if (e instanceof A) {
          if (e.closed || e._hasParent(this)) return;
          e._addParent(this);
        }
        (this._finalizers = (t = this._finalizers) !== null && t !== void 0 ? t : []).push(e);
      }
    }, A.prototype._hasParent = function(e) {
      var t = this._parentage;
      return t === e || Array.isArray(t) && t.includes(e);
    }, A.prototype._addParent = function(e) {
      var t = this._parentage;
      this._parentage = Array.isArray(t) ? (t.push(e), t) : t ? [
        t,
        e
      ] : e;
    }, A.prototype._removeParent = function(e) {
      var t = this._parentage;
      t === e ? this._parentage = null : Array.isArray(t) && ti(t, e);
    }, A.prototype.remove = function(e) {
      var t = this._finalizers;
      t && ti(t, e), e instanceof A && e._removeParent(this);
    }, A.EMPTY = (function() {
      var e = new A();
      return e.closed = true, e;
    })(), A;
  })(), mp = In.EMPTY;
  function vp(A) {
    return A instanceof In || A && "closed" in A && pe(A.remove) && pe(A.add) && pe(A.unsubscribe);
  }
  function Pu(A) {
    pe(A) ? A() : A.unsubscribe();
  }
  var z1 = {
    Promise: void 0
  }, X1 = {
    setTimeout: function(A, e) {
      for (var t = [], r = 2; r < arguments.length; r++) t[r - 2] = arguments[r];
      return setTimeout.apply(void 0, ei([
        A,
        e
      ], Ai(t)));
    },
    clearTimeout: function(A) {
      return clearTimeout(A);
    },
    delegate: void 0
  };
  function wp(A) {
    X1.setTimeout(function() {
      throw A;
    });
  }
  function _u() {
  }
  function Eo(A) {
    A();
  }
  var Hl = (function(A) {
    Rt(e, A);
    function e(t) {
      var r = A.call(this) || this;
      return r.isStopped = false, t ? (r.destination = t, vp(t) && t.add(r)) : r.destination = Z1, r;
    }
    return e.create = function(t, r, n) {
      return new ks(t, r, n);
    }, e.prototype.next = function(t) {
      this.isStopped || this._next(t);
    }, e.prototype.error = function(t) {
      this.isStopped || (this.isStopped = true, this._error(t));
    }, e.prototype.complete = function() {
      this.isStopped || (this.isStopped = true, this._complete());
    }, e.prototype.unsubscribe = function() {
      this.closed || (this.isStopped = true, A.prototype.unsubscribe.call(this), this.destination = null);
    }, e.prototype._next = function(t) {
      this.destination.next(t);
    }, e.prototype._error = function(t) {
      try {
        this.destination.error(t);
      } finally {
        this.unsubscribe();
      }
    }, e.prototype._complete = function() {
      try {
        this.destination.complete();
      } finally {
        this.unsubscribe();
      }
    }, e;
  })(In), Y1 = (function() {
    function A(e) {
      this.partialObserver = e;
    }
    return A.prototype.next = function(e) {
      var t = this.partialObserver;
      if (t.next) try {
        t.next(e);
      } catch (r) {
        mo(r);
      }
    }, A.prototype.error = function(e) {
      var t = this.partialObserver;
      if (t.error) try {
        t.error(e);
      } catch (r) {
        mo(r);
      }
      else mo(e);
    }, A.prototype.complete = function() {
      var e = this.partialObserver;
      if (e.complete) try {
        e.complete();
      } catch (t) {
        mo(t);
      }
    }, A;
  })(), ks = (function(A) {
    Rt(e, A);
    function e(t, r, n) {
      var o = A.call(this) || this, i;
      return pe(t) || !t ? i = {
        next: t ?? void 0,
        error: r ?? void 0,
        complete: n ?? void 0
      } : i = t, o.destination = new Y1(i), o;
    }
    return e;
  })(Hl);
  function mo(A) {
    wp(A);
  }
  function J1(A) {
    throw A;
  }
  var Z1 = {
    closed: true,
    next: _u,
    error: J1,
    complete: _u
  }, Tl = (function() {
    return typeof Symbol == "function" && Symbol.observable || "@@observable";
  })();
  function q1(A) {
    return A;
  }
  function AS(A) {
    return A.length === 0 ? q1 : A.length === 1 ? A[0] : function(t) {
      return A.reduce(function(r, n) {
        return n(r);
      }, t);
    };
  }
  var vt = (function() {
    function A(e) {
      e && (this._subscribe = e);
    }
    return A.prototype.lift = function(e) {
      var t = new A();
      return t.source = this, t.operator = e, t;
    }, A.prototype.subscribe = function(e, t, r) {
      var n = this, o = tS(e) ? e : new ks(e, t, r);
      return Eo(function() {
        var i = n, a = i.operator, s = i.source;
        o.add(a ? a.call(o, s) : s ? n._subscribe(o) : n._trySubscribe(o));
      }), o;
    }, A.prototype._trySubscribe = function(e) {
      try {
        return this._subscribe(e);
      } catch (t) {
        e.error(t);
      }
    }, A.prototype.forEach = function(e, t) {
      var r = this;
      return t = Nu(t), new t(function(n, o) {
        var i = new ks({
          next: function(a) {
            try {
              e(a);
            } catch (s) {
              o(s), i.unsubscribe();
            }
          },
          error: o,
          complete: n
        });
        r.subscribe(i);
      });
    }, A.prototype._subscribe = function(e) {
      var t;
      return (t = this.source) === null || t === void 0 ? void 0 : t.subscribe(e);
    }, A.prototype[Tl] = function() {
      return this;
    }, A.prototype.pipe = function() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return AS(e)(this);
    }, A.prototype.toPromise = function(e) {
      var t = this;
      return e = Nu(e), new e(function(r, n) {
        var o;
        t.subscribe(function(i) {
          return o = i;
        }, function(i) {
          return n(i);
        }, function() {
          return r(o);
        });
      });
    }, A.create = function(e) {
      return new A(e);
    }, A;
  })();
  function Nu(A) {
    var e;
    return (e = A ?? z1.Promise) !== null && e !== void 0 ? e : Promise;
  }
  function eS(A) {
    return A && pe(A.next) && pe(A.error) && pe(A.complete);
  }
  function tS(A) {
    return A && A instanceof Hl || eS(A) && vp(A);
  }
  function rS(A) {
    return pe(A == null ? void 0 : A.lift);
  }
  function Cp(A) {
    return function(e) {
      if (rS(e)) return e.lift(function(t) {
        try {
          return A(t, this);
        } catch (r) {
          this.error(r);
        }
      });
      throw new TypeError("Unable to lift unknown Observable type");
    };
  }
  function Ls(A, e, t, r, n) {
    return new nS(A, e, t, r, n);
  }
  var nS = (function(A) {
    Rt(e, A);
    function e(t, r, n, o, i, a) {
      var s = A.call(this, t) || this;
      return s.onFinalize = i, s.shouldUnsubscribe = a, s._next = r ? function(l) {
        try {
          r(l);
        } catch (c) {
          t.error(c);
        }
      } : A.prototype._next, s._error = o ? function(l) {
        try {
          o(l);
        } catch (c) {
          t.error(c);
        } finally {
          this.unsubscribe();
        }
      } : A.prototype._error, s._complete = n ? function() {
        try {
          n();
        } catch (l) {
          t.error(l);
        } finally {
          this.unsubscribe();
        }
      } : A.prototype._complete, s;
    }
    return e.prototype.unsubscribe = function() {
      var t;
      if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
        var r = this.closed;
        A.prototype.unsubscribe.call(this), !r && ((t = this.onFinalize) === null || t === void 0 || t.call(this));
      }
    }, e;
  })(Hl), oS = Bp(function(A) {
    return function() {
      A(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
    };
  }), yp = (function(A) {
    Rt(e, A);
    function e() {
      var t = A.call(this) || this;
      return t.closed = false, t.currentObservers = null, t.observers = [], t.isStopped = false, t.hasError = false, t.thrownError = null, t;
    }
    return e.prototype.lift = function(t) {
      var r = new Gu(this, this);
      return r.operator = t, r;
    }, e.prototype._throwIfClosed = function() {
      if (this.closed) throw new oS();
    }, e.prototype.next = function(t) {
      var r = this;
      Eo(function() {
        var n, o;
        if (r._throwIfClosed(), !r.isStopped) {
          r.currentObservers || (r.currentObservers = Array.from(r.observers));
          try {
            for (var i = Ur(r.currentObservers), a = i.next(); !a.done; a = i.next()) {
              var s = a.value;
              s.next(t);
            }
          } catch (l) {
            n = {
              error: l
            };
          } finally {
            try {
              a && !a.done && (o = i.return) && o.call(i);
            } finally {
              if (n) throw n.error;
            }
          }
        }
      });
    }, e.prototype.error = function(t) {
      var r = this;
      Eo(function() {
        if (r._throwIfClosed(), !r.isStopped) {
          r.hasError = r.isStopped = true, r.thrownError = t;
          for (var n = r.observers; n.length; ) n.shift().error(t);
        }
      });
    }, e.prototype.complete = function() {
      var t = this;
      Eo(function() {
        if (t._throwIfClosed(), !t.isStopped) {
          t.isStopped = true;
          for (var r = t.observers; r.length; ) r.shift().complete();
        }
      });
    }, e.prototype.unsubscribe = function() {
      this.isStopped = this.closed = true, this.observers = this.currentObservers = null;
    }, Object.defineProperty(e.prototype, "observed", {
      get: function() {
        var t;
        return ((t = this.observers) === null || t === void 0 ? void 0 : t.length) > 0;
      },
      enumerable: false,
      configurable: true
    }), e.prototype._trySubscribe = function(t) {
      return this._throwIfClosed(), A.prototype._trySubscribe.call(this, t);
    }, e.prototype._subscribe = function(t) {
      return this._throwIfClosed(), this._checkFinalizedStatuses(t), this._innerSubscribe(t);
    }, e.prototype._innerSubscribe = function(t) {
      var r = this, n = this, o = n.hasError, i = n.isStopped, a = n.observers;
      return o || i ? mp : (this.currentObservers = null, a.push(t), new In(function() {
        r.currentObservers = null, ti(a, t);
      }));
    }, e.prototype._checkFinalizedStatuses = function(t) {
      var r = this, n = r.hasError, o = r.thrownError, i = r.isStopped;
      n ? t.error(o) : i && t.complete();
    }, e.prototype.asObservable = function() {
      var t = new vt();
      return t.source = this, t;
    }, e.create = function(t, r) {
      return new Gu(t, r);
    }, e;
  })(vt), Gu = (function(A) {
    Rt(e, A);
    function e(t, r) {
      var n = A.call(this) || this;
      return n.destination = t, n.source = r, n;
    }
    return e.prototype.next = function(t) {
      var r, n;
      (n = (r = this.destination) === null || r === void 0 ? void 0 : r.next) === null || n === void 0 || n.call(r, t);
    }, e.prototype.error = function(t) {
      var r, n;
      (n = (r = this.destination) === null || r === void 0 ? void 0 : r.error) === null || n === void 0 || n.call(r, t);
    }, e.prototype.complete = function() {
      var t, r;
      (r = (t = this.destination) === null || t === void 0 ? void 0 : t.complete) === null || r === void 0 || r.call(t);
    }, e.prototype._subscribe = function(t) {
      var r, n;
      return (n = (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(t)) !== null && n !== void 0 ? n : mp;
    }, e;
  })(yp), iS = {
    now: function() {
      return Date.now();
    }
  }, aS = (function(A) {
    Rt(e, A);
    function e(t, r) {
      return A.call(this) || this;
    }
    return e.prototype.schedule = function(t, r) {
      return this;
    }, e;
  })(In), Vu = {
    setInterval: function(A, e) {
      for (var t = [], r = 2; r < arguments.length; r++) t[r - 2] = arguments[r];
      return setInterval.apply(void 0, ei([
        A,
        e
      ], Ai(t)));
    },
    clearInterval: function(A) {
      return clearInterval(A);
    },
    delegate: void 0
  }, sS = (function(A) {
    Rt(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.scheduler = t, n.work = r, n.pending = false, n;
    }
    return e.prototype.schedule = function(t, r) {
      var n;
      if (r === void 0 && (r = 0), this.closed) return this;
      this.state = t;
      var o = this.id, i = this.scheduler;
      return o != null && (this.id = this.recycleAsyncId(i, o, r)), this.pending = true, this.delay = r, this.id = (n = this.id) !== null && n !== void 0 ? n : this.requestAsyncId(i, this.id, r), this;
    }, e.prototype.requestAsyncId = function(t, r, n) {
      return n === void 0 && (n = 0), Vu.setInterval(t.flush.bind(t, this), n);
    }, e.prototype.recycleAsyncId = function(t, r, n) {
      if (n === void 0 && (n = 0), n != null && this.delay === n && this.pending === false) return r;
      r != null && Vu.clearInterval(r);
    }, e.prototype.execute = function(t, r) {
      if (this.closed) return new Error("executing a cancelled action");
      this.pending = false;
      var n = this._execute(t, r);
      if (n) return n;
      this.pending === false && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
    }, e.prototype._execute = function(t, r) {
      var n = false, o;
      try {
        this.work(t);
      } catch (i) {
        n = true, o = i || new Error("Scheduled action threw falsy error");
      }
      if (n) return this.unsubscribe(), o;
    }, e.prototype.unsubscribe = function() {
      if (!this.closed) {
        var t = this, r = t.id, n = t.scheduler, o = n.actions;
        this.work = this.state = this.scheduler = null, this.pending = false, ti(o, this), r != null && (this.id = this.recycleAsyncId(n, r, null)), this.delay = null, A.prototype.unsubscribe.call(this);
      }
    }, e;
  })(aS), $u = (function() {
    function A(e, t) {
      t === void 0 && (t = A.now), this.schedulerActionCtor = e, this.now = t;
    }
    return A.prototype.schedule = function(e, t, r) {
      return t === void 0 && (t = 0), new this.schedulerActionCtor(this, e).schedule(r, t);
    }, A.now = iS.now, A;
  })(), lS = (function(A) {
    Rt(e, A);
    function e(t, r) {
      r === void 0 && (r = $u.now);
      var n = A.call(this, t, r) || this;
      return n.actions = [], n._active = false, n;
    }
    return e.prototype.flush = function(t) {
      var r = this.actions;
      if (this._active) {
        r.push(t);
        return;
      }
      var n;
      this._active = true;
      do
        if (n = t.execute(t.state, t.delay)) break;
      while (t = r.shift());
      if (this._active = false, n) {
        for (; t = r.shift(); ) t.unsubscribe();
        throw n;
      }
    }, e;
  })($u), kl = new lS(sS), cS = kl;
  function uS(A) {
    return A && pe(A.schedule);
  }
  var dS = (function(A) {
    return A && typeof A.length == "number" && typeof A != "function";
  });
  function fS(A) {
    return pe(A == null ? void 0 : A.then);
  }
  function pS(A) {
    return pe(A[Tl]);
  }
  function gS(A) {
    return Symbol.asyncIterator && pe(A == null ? void 0 : A[Symbol.asyncIterator]);
  }
  function hS(A) {
    return new TypeError("You provided " + (A !== null && typeof A == "object" ? "an invalid object" : "'" + A + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
  }
  function BS() {
    return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
  }
  var mS = BS();
  function vS(A) {
    return pe(A == null ? void 0 : A[mS]);
  }
  function wS(A) {
    return W1(this, arguments, function() {
      var t, r, n, o;
      return hp(this, function(i) {
        switch (i.label) {
          case 0:
            t = A.getReader(), i.label = 1;
          case 1:
            i.trys.push([
              1,
              ,
              9,
              10
            ]), i.label = 2;
          case 2:
            return [
              4,
              wr(t.read())
            ];
          case 3:
            return r = i.sent(), n = r.value, o = r.done, o ? [
              4,
              wr(void 0)
            ] : [
              3,
              5
            ];
          case 4:
            return [
              2,
              i.sent()
            ];
          case 5:
            return [
              4,
              wr(n)
            ];
          case 6:
            return [
              4,
              i.sent()
            ];
          case 7:
            return i.sent(), [
              3,
              2
            ];
          case 8:
            return [
              3,
              10
            ];
          case 9:
            return t.releaseLock(), [
              7
            ];
          case 10:
            return [
              2
            ];
        }
      });
    });
  }
  function CS(A) {
    return pe(A == null ? void 0 : A.getReader);
  }
  function yS(A) {
    if (A instanceof vt) return A;
    if (A != null) {
      if (pS(A)) return bS(A);
      if (dS(A)) return QS(A);
      if (fS(A)) return FS(A);
      if (gS(A)) return bp(A);
      if (vS(A)) return US(A);
      if (CS(A)) return SS(A);
    }
    throw hS(A);
  }
  function bS(A) {
    return new vt(function(e) {
      var t = A[Tl]();
      if (pe(t.subscribe)) return t.subscribe(e);
      throw new TypeError("Provided object does not correctly implement Symbol.observable");
    });
  }
  function QS(A) {
    return new vt(function(e) {
      for (var t = 0; t < A.length && !e.closed; t++) e.next(A[t]);
      e.complete();
    });
  }
  function FS(A) {
    return new vt(function(e) {
      A.then(function(t) {
        e.closed || (e.next(t), e.complete());
      }, function(t) {
        return e.error(t);
      }).then(null, wp);
    });
  }
  function US(A) {
    return new vt(function(e) {
      var t, r;
      try {
        for (var n = Ur(A), o = n.next(); !o.done; o = n.next()) {
          var i = o.value;
          if (e.next(i), e.closed) return;
        }
      } catch (a) {
        t = {
          error: a
        };
      } finally {
        try {
          o && !o.done && (r = n.return) && r.call(n);
        } finally {
          if (t) throw t.error;
        }
      }
      e.complete();
    });
  }
  function bp(A) {
    return new vt(function(e) {
      xS(A, e).catch(function(t) {
        return e.error(t);
      });
    });
  }
  function SS(A) {
    return bp(wS(A));
  }
  function xS(A, e) {
    var t, r, n, o;
    return $1(this, void 0, void 0, function() {
      var i, a;
      return hp(this, function(s) {
        switch (s.label) {
          case 0:
            s.trys.push([
              0,
              5,
              6,
              11
            ]), t = j1(A), s.label = 1;
          case 1:
            return [
              4,
              t.next()
            ];
          case 2:
            if (r = s.sent(), !!r.done) return [
              3,
              4
            ];
            if (i = r.value, e.next(i), e.closed) return [
              2
            ];
            s.label = 3;
          case 3:
            return [
              3,
              1
            ];
          case 4:
            return [
              3,
              11
            ];
          case 5:
            return a = s.sent(), n = {
              error: a
            }, [
              3,
              11
            ];
          case 6:
            return s.trys.push([
              6,
              ,
              9,
              10
            ]), r && !r.done && (o = t.return) ? [
              4,
              o.call(t)
            ] : [
              3,
              8
            ];
          case 7:
            s.sent(), s.label = 8;
          case 8:
            return [
              3,
              10
            ];
          case 9:
            if (n) throw n.error;
            return [
              7
            ];
          case 10:
            return [
              7
            ];
          case 11:
            return e.complete(), [
              2
            ];
        }
      });
    });
  }
  function ES(A) {
    return A instanceof Date && !isNaN(A);
  }
  function IS(A, e, t) {
    A === void 0 && (A = 0), t === void 0 && (t = cS);
    var r = -1;
    return e != null && (uS(e) ? t = e : r = e), new vt(function(n) {
      var o = ES(A) ? +A - t.now() : A;
      o < 0 && (o = 0);
      var i = 0;
      return t.schedule(function() {
        n.closed || (n.next(i++), 0 <= r ? this.schedule(void 0, r) : n.complete());
      }, o);
    });
  }
  function HS(A, e) {
    return e === void 0 && (e = kl), Cp(function(t, r) {
      var n = null, o = null, i = null, a = function() {
        if (n) {
          n.unsubscribe(), n = null;
          var l = o;
          o = null, r.next(l);
        }
      };
      function s() {
        var l = i + A, c = e.now();
        if (c < l) {
          n = this.schedule(void 0, l - c), r.add(n);
          return;
        }
        a();
      }
      t.subscribe(Ls(r, function(l) {
        o = l, i = e.now(), n || (n = e.schedule(s, A), r.add(n));
      }, function() {
        a(), r.complete();
      }, void 0, function() {
        o = n = null;
      }));
    });
  }
  function TS(A, e) {
    return Cp(function(t, r) {
      var n = e ?? {}, o = n.leading, i = o === void 0 ? true : o, a = n.trailing, s = a === void 0 ? false : a, l = false, c = null, u = null, d = false, f = function() {
        u == null ? void 0 : u.unsubscribe(), u = null, s && (Q(), d && r.complete());
      }, p = function() {
        u = null, d && r.complete();
      }, B = function(m) {
        return u = yS(A(m)).subscribe(Ls(r, f, p));
      }, Q = function() {
        if (l) {
          l = false;
          var m = c;
          c = null, r.next(m), !d && B(m);
        }
      };
      t.subscribe(Ls(r, function(m) {
        l = true, c = m, !(u && !u.closed) && (i ? Q() : B(m));
      }, function() {
        d = true, !(s && l && u && !u.closed) && r.complete();
      }));
    });
  }
  function kS(A, e, t) {
    e === void 0 && (e = kl);
    var r = IS(A, e);
    return TS(function() {
      return r;
    }, t);
  }
  function LS({ oidObject: A, data: { sampleInterval: e, sampleIntervalValue: t, delay: r } }) {
    const { setValue: n } = h.useContext(ot), o = h.useRef(), i = h.useRef(null), a = h.useRef(n);
    a.current = n;
    const s = A == null ? void 0 : A._id, l = h.useMemo(() => {
      const c = Number(t), u = Number(r);
      return e ? c : u;
    }, [
      e,
      t,
      r
    ]);
    return h.useEffect(() => {
      if (o.current || (o.current = new yp()), !s) return;
      const c = o.current;
      return i.current && i.current.unsubscribe(), i.current = c.pipe(e ? kS(l, void 0, {
        leading: false,
        trailing: true
      }) : HS(l)).subscribe((u) => {
        a.current(s, u);
      }), () => {
        i.current && (i.current.unsubscribe(), i.current = null);
      };
    }, [
      e,
      l,
      s
    ]), h.useEffect(() => () => {
      i.current && (i.current.unsubscribe(), i.current = null), o.current && o.current.complete();
    }, []), s ? {
      next: (c) => {
        var _a2;
        (_a2 = o.current) == null ? void 0 : _a2.next(c);
      }
    } : null;
  }
  const vo = 1111111111111;
  function RS(A, e) {
    switch (e) {
      case "string":
        return String(A);
      case "number":
        return Du(A) ? Number(A) : void 0;
      case "mixed":
        return /^true$/i.test(String(A)) ? true : /^false$/i.test(String(A)) ? false : Du(A) ? Number(A) : String(A);
      case "boolean":
        return /^true$/i.test(String(A));
      default:
        return A;
    }
  }
  function OS(A, e) {
    const t = String(A ?? ""), r = String(e ?? "");
    if (t === r) return false;
    const n = Number(A ?? 0), o = Number(e ?? 0);
    return Math.abs(n - o) >= 1;
  }
  let KS, DS, _S, NS;
  MS = (A) => {
    const { setState: e, widget: t, getPropertyValue: r, values: n } = h.useContext(ot), { data: o } = Il("oid"), i = t.data[`${A}Object`], a = r(A), s = h.useRef({
      lc: void 0,
      value: void 0
    }), l = h.useRef(0), c = Number(o.delay ?? t.data.delay) || 300, u = (i == null ? void 0 : i._id) ? n[`${i._id}.lc`] : void 0, d = (i == null ? void 0 : i._id) ? n[`${i._id}.val`] : void 0, f = h.useMemo(() => {
      if (!(i == null ? void 0 : i._id)) return false;
      if (u === vo) return s.current = {
        lc: vo,
        value: d
      }, false;
      if (Date.now() < l.current) return s.current = {
        lc: u,
        value: d
      }, false;
      if (s.current.lc === void 0) return s.current = {
        lc: u,
        value: d
      }, false;
      const Q = s.current.lc !== u, m = OS(s.current.value, d);
      return s.current = {
        lc: u,
        value: d
      }, Q && m;
    }, [
      i == null ? void 0 : i._id,
      u,
      d
    ]), p = LS({
      oidObject: i,
      data: {
        delay: t.data.delay,
        sampleInterval: t.data.sampleInterval,
        sampleIntervalValue: t.data.sampleIntervalValue
      }
    }), B = h.useCallback((Q, m = false) => {
      if (!(i == null ? void 0 : i._id)) return;
      const y = RS(Q, i == null ? void 0 : i.type);
      y != null && (e((w) => ({
        values: {
          ...w.values,
          [`${i._id}.val`]: y,
          [`${i._id}.lc`]: vo
        }
      })), l.current = Date.now() + c + 1500, s.current = {
        lc: vo,
        value: y
      }, !m && p && p.next(y));
    }, [
      c,
      p,
      i,
      e
    ]);
    return {
      value: a,
      hasBackendChange: f,
      updateValue: B
    };
  };
  KS = (A) => !A || typeof A != "string" ? false : /^data:image\/(svg\+xml|png|jpe?g|gif);base64,/i.test(A);
  ri = (A, e) => KS(A) ? !e || e === "" ? {} : {
    color: e,
    filter: "drop-shadow(0px 10000px 0)",
    transform: "translateY(-10000px)"
  } : {};
  DS = ({ marks: A, sliderOrientation: e, aliasActive: t, activeMarkIndex: r, defaultIconColor: n, ...o }) => {
    var _a2, _b2;
    const [i, a] = h.useState(null), { data: s } = Il("oid"), l = h.useContext(ot), { widget: c } = l, u = o["data-index"], d = (_b2 = (_a2 = o.ownerState) == null ? void 0 : _a2.marks) == null ? void 0 : _b2[u], f = r === u, p = h.useCallback(El, []);
    return h.useEffect(() => {
      i && (d == null ? void 0 : d.label) && (f && t ? i.innerHTML = t : i.innerHTML = d.label);
    }, [
      d == null ? void 0 : d.label,
      i,
      f,
      t,
      u
    ]), A && d ? E.jsx(of, {
      ...o,
      children: E.jsxs(ue, {
        sx: {
          display: "flex",
          flexDirection: e === "vertical" ? "row" : "column",
          alignItems: "center",
          justifyContent: "center"
        },
        children: [
          E.jsx(qr, {
            "data-font": "active",
            ref: a,
            sx: {
              textTransform: "none",
              flexGrow: 1,
              pr: e === "vertical" ? 1 : 0,
              pb: e === "vertical" ? 0 : 1,
              fontSize: f && typeof c.data.valueSizeActive == "number" && p(c.data.valueSizeActive) || d.fontSize || s.valueSize || "1rem",
              color: f && c.data.textColorActive || d.textColor || s.textColor
            }
          }),
          E.jsx(ue, {
            "data-position": "active",
            sx: {
              position: "relative",
              bottom: d.iconYOffset,
              left: d.iconXOffset,
              flexGrow: 1
            },
            children: (() => {
              const B = f && (c.data.iconActive || c.data.iconSmallActive) || d.icon || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", Q = (f && c.data.iconColorActive && c.data.iconColorActive !== "" ? c.data.iconColorActive : null) || (d.iconColor && d.iconColor !== "" ? d.iconColor : null) || (s.iconColor && s.iconColor !== "" ? s.iconColor : null) || n || void 0;
              return E.jsx("img", {
                "data-img": "active",
                src: B,
                alt: "",
                style: {
                  position: "relative",
                  width: f && typeof c.data.iconSizeActive == "number" ? `${24 * c.data.iconSizeActive / 100}px` : `${24 * d.iconWidth / 100}px`,
                  ...ri(B, Q)
                }
              });
            })()
          })
        ]
      })
    }) : null;
  };
  PS = ({ data: A, widget: e }) => {
    const r = h.useContext(ot).theme, n = (typeof A.icon == "string" ? A.icon : void 0) || (typeof A.iconActive == "string" ? A.iconActive : void 0), o = (typeof A.iconSize == "string" ? A.iconSize : void 0) || (typeof A.iconSizeActive == "string" ? A.iconSizeActive : void 0), i = A.iconColorActive || A.iconColor || r.palette.primary.main;
    return !e.data.noHeaderIcon && n ? E.jsx("img", {
      alt: "",
      src: n,
      style: {
        position: "absolute",
        top: `calc(0px - ${e.data.iconYOffset || 0})`,
        right: `calc(0px - ${e.data.iconXOffset || 0})`,
        height: o,
        ...ri(n, i)
      }
    }) : null;
  };
  _S = uA(xw, {
    shouldForwardProp: (A) => A !== "data"
  })(({ theme: A, data: e }) => ({
    "&.MuiSlider-root": {},
    "& .MuiSlider-thumb": {
      width: `${(e == null ? void 0 : e.thumbWidth) ?? 20}px`,
      height: `${(e == null ? void 0 : e.thumbHeight) ?? 20}px`,
      background: (e == null ? void 0 : e.thumbColor) || (e == null ? void 0 : e.sliderColor) || A.palette.primary.main,
      "&:hover, &.Mui-focusVisible": {}
    },
    "& .MuiSlider-track": {
      height: (e == null ? void 0 : e.sliderOrientation) === "horizontal" ? `${(e == null ? void 0 : e.trackLength) ?? 4}px` : "auto",
      width: (e == null ? void 0 : e.sliderOrientation) === "vertical" ? `${(e == null ? void 0 : e.trackLength) ?? 4}px` : "auto",
      borderColor: (e == null ? void 0 : e.trackBorderColor) || (e == null ? void 0 : e.sliderColor) || A.palette.primary.main,
      background: (e == null ? void 0 : e.trackBackgroundColor) || (e == null ? void 0 : e.sliderColor) || A.palette.primary.main
    },
    "& .MuiSlider-rail": {
      height: (e == null ? void 0 : e.sliderOrientation) === "horizontal" ? `${(e == null ? void 0 : e.railLength) ?? 4}px` : "100%",
      width: (e == null ? void 0 : e.sliderOrientation) === "vertical" ? `${(e == null ? void 0 : e.railLength) ?? 4}px` : "100%",
      background: (e == null ? void 0 : e.railBackgroundColor) || (e == null ? void 0 : e.sliderColor) || A.palette.primary.main
    },
    "& .MuiSlider-mark": {
      width: (e == null ? void 0 : e.sliderOrientation) === "horizontal" ? `${(e == null ? void 0 : e.markWidth) ?? 2}px` : `${(e == null ? void 0 : e.markHeight) ?? 16}px`,
      height: (e == null ? void 0 : e.sliderOrientation) === "horizontal" ? `${(e == null ? void 0 : e.markHeight) ?? 2}px` : `${(e == null ? void 0 : e.markWidth) ?? 3}px`,
      background: (e == null ? void 0 : e.markBackgroundColor) || (e == null ? void 0 : e.sliderColor) || A.palette.primary.main
    },
    "& .MuiSlider-markActive": {
      width: (e == null ? void 0 : e.sliderOrientation) === "horizontal" ? `${(e == null ? void 0 : e.markWidth) ?? 2}px` : `${(e == null ? void 0 : e.markHeight) ?? 16}px`,
      height: (e == null ? void 0 : e.sliderOrientation) === "horizontal" ? `${(e == null ? void 0 : e.markHeight) ?? 2}px` : `${(e == null ? void 0 : e.markWidth) ?? 3}px`,
      backgroundColor: (e == null ? void 0 : e.markBackgroundColor) || (e == null ? void 0 : e.sliderColor) || A.palette.primary.main,
      "&.MuiSlider-markActive": {
        background: (e == null ? void 0 : e.markBackgroundColor) || (e == null ? void 0 : e.sliderColor) || A.palette.primary.main
      }
    }
  }));
  NS = () => {
    const A = h.useContext(ot), { widget: { data: { oidObject: e } }, widget: t, theme: r } = A, { data: n, states: o, minValue: i, maxValue: a, activeIndex: s } = Il("oid"), [l, c] = h.useState(null), { value: u, updateValue: d, hasBackendChange: f } = MS("oid"), [p, B] = h.useState(typeof u == "number" ? u : void 0), Q = h.useRef(null), [m, y] = h.useState({
      x: 0,
      y: 0
    }), w = t.data.startIconColor || n.iconColor || r.palette.primary.main, C = t.data.endIconColor || n.iconColor || r.palette.primary.main, U = t.data.sliderOrientation === "horizontal" ? t.data.iconMin || t.data.iconSmallMin : t.data.iconMax || t.data.iconSmallMax, v = t.data.sliderOrientation === "horizontal" ? t.data.iconMax || t.data.iconSmallMax : t.data.iconMin || t.data.iconSmallMin, x = e == null ? void 0 : e.type, H = x === "number", I = h.useCallback(El, []), g = h.useMemo(() => !t.data.onlyStates && t.data.minValue !== void 0 ? Number(t.data.minValue) : i, [
      t.data.onlyStates,
      t.data.minValue,
      i
    ]), k = h.useMemo(() => !t.data.onlyStates && t.data.maxValue !== void 0 ? Number(t.data.maxValue) : a, [
      t.data.onlyStates,
      t.data.maxValue,
      a
    ]), R = h.useMemo(() => {
      const K = o.map((N) => ({
        value: Number(N.value),
        label: N.label,
        fontSize: N.fontSize,
        textColor: N.textColor,
        icon: N.icon,
        iconWidth: N.iconWidth,
        iconHeight: N.iconHeight,
        iconXOffset: N.iconXOffset,
        iconYOffset: N.iconYOffset,
        iconColor: N.iconColor
      }));
      if (t.data.onlyStates) return K.sort((N, D) => N.value - D.value);
      const M = g, O = k;
      K && M !== null && !K.some((N) => N.value === M) && K.push({
        value: M,
        label: `${M}${(e == null ? void 0 : e.unit) || ""}`,
        fontSize: void 0,
        textColor: void 0,
        icon: "",
        iconWidth: 100,
        iconHeight: 100,
        iconXOffset: "0px",
        iconYOffset: "0px",
        iconColor: void 0
      }), K && O !== null && !K.some((N) => N.value === O) && K.push({
        value: O,
        label: `${O}${(e == null ? void 0 : e.unit) || ""}`,
        fontSize: void 0,
        textColor: void 0,
        icon: "",
        iconWidth: 100,
        iconHeight: 100,
        iconXOffset: "0px",
        iconYOffset: "0px",
        iconColor: void 0
      });
      const j = Number(t.data.markStep) || 1;
      if (M !== null && O !== null) for (let N = M + j; N < O; N += j) K.some((D) => D.value === N) || K.push({
        value: N,
        label: `${N}${(e == null ? void 0 : e.unit) || ""}`,
        fontSize: void 0,
        textColor: void 0,
        icon: "",
        iconWidth: 100,
        iconHeight: 100,
        iconXOffset: "0px",
        iconYOffset: "0px",
        iconColor: void 0
      });
      return K.sort((N, D) => N.value - D.value), K;
    }, [
      o,
      g,
      k,
      t.data.markStep,
      e == null ? void 0 : e.unit,
      t.data.onlyStates
    ]);
    h.useEffect(() => {
      p === void 0 && typeof u == "number" && B(u);
    }, [
      u,
      p
    ]), h.useEffect(() => {
      f && B(typeof u == "number" ? u : void 0);
    }, [
      f,
      u
    ]);
    const L = () => {
      if (!Q.current) return;
      const K = Q.current.querySelector(".MuiSlider-root"), M = Q.current.querySelector(".MuiSlider-rail");
      if (K && M) {
        const O = Q.current.getBoundingClientRect(), j = M.getBoundingClientRect(), N = j.left - O.left + j.width / 2, D = j.top - O.top + j.height / 2, Y = O.width / 2, X = O.height / 2;
        y({
          x: N - Y,
          y: D - X
        });
      }
    };
    return h.useEffect(() => {
      const K = setTimeout(L, 100);
      return () => clearTimeout(K);
    }, [
      t.data.marks,
      t.data.sliderOrientation,
      t.data.iconSizeStart,
      t.data.iconSizeEnd,
      p
    ]), h.useEffect(() => {
      if (!Q.current) return;
      const K = new ResizeObserver(L);
      return K.observe(Q.current), () => K.disconnect();
    }, []), h.useEffect(() => {
      if (u === void 0) return;
      const K = R.findIndex((M) => String(M.value) === String(u));
      K !== -1 && c(K);
    }, [
      u,
      R
    ]), E.jsxs(gp, {
      isValidType: H,
      data: n,
      oidValue: u,
      sx: {
        p: Number(t.data.sliderPadding) || 1
      },
      children: [
        E.jsx(PS, {
          data: n,
          widget: t
        }),
        H ? E.jsxs(ue, {
          ref: Q,
          sx: {
            display: "flex",
            flexDirection: t.data.sliderOrientation === "horizontal" ? "row" : "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%"
          },
          children: [
            (t.data.sliderOrientation === "horizontal" && (t.data.iconMin || t.data.iconSmallMin) || t.data.sliderOrientation === "vertical" && (t.data.iconMax || t.data.iconSmallMax)) && E.jsx(ue, {
              sx: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: 0,
                ...t.data.sliderOrientation === "horizontal" ? {
                  transform: `translateY(${m.y}px)`
                } : {
                  transform: `translateX(${m.x}px)`
                }
              },
              children: E.jsx("img", {
                alt: "",
                src: U,
                style: {
                  width: t.data.sliderOrientation === "horizontal" ? t.data.iconSizeStart || "24px" : t.data.iconSizeEnd || "24px",
                  ...ri(U, t.data.sliderOrientation === "horizontal" ? w : C)
                }
              })
            }),
            E.jsx(ue, {
              sx: {
                display: "flex",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                minWidth: t.data.sliderOrientation === "horizontal" ? "200px" : "auto",
                minHeight: t.data.sliderOrientation === "vertical" ? "200px" : "auto"
              },
              children: typeof p == "number" && E.jsx(_S, {
                data: t.data,
                slots: {
                  markLabel: DS
                },
                slotProps: {
                  markLabel: {
                    marks: t.data.marks,
                    sliderOrientation: t.data.sliderOrientation,
                    aliasActive: t.data.aliasActive,
                    activeMarkIndex: l,
                    defaultIconColor: n.iconColor || r.palette.primary.main
                  }
                },
                disabled: x !== "number",
                valueLabelDisplay: t.data.valueLabelDisplay,
                orientation: t.data.sliderOrientation,
                min: g ?? void 0,
                max: k ?? void 0,
                marks: R,
                step: t.data.onlyStates ? null : t.data.step !== void 0 ? Number(t.data.step) : void 0,
                size: t.data.sliderSize,
                value: p,
                onChange: (K, M) => {
                  typeof M == "number" && (B(M), d(M));
                },
                sx: {
                  mb: t.data.marks && t.data.sliderOrientation === "horizontal" ? "20px" : "0px",
                  mr: t.data.marks && t.data.sliderOrientation === "vertical" ? "44px" : "0px",
                  "& .MuiSlider-thumb": {
                    color: t.data.sliderColor
                  },
                  "& .MuiSlider-rail": {
                    color: t.data.sliderColor || "primary.main"
                  },
                  "& .MuiSlider-track": {
                    color: t.data.sliderColor || "primary.main"
                  },
                  "& .MuiSlider-mark": {
                    color: t.data.sliderColor || "primary.main"
                  },
                  "& .MuiSlider-markActive": {
                    bgcolor: t.data.sliderColor || "primary.main",
                    filter: "brightness(2.5)"
                  },
                  "& .MuiSlider-valueLabel": {
                    fontSize: I(t.data.valueSizeActive) || n.valueSizeActive || s && t.data.markerTextSize && I(t.data.markerTextSize) || n.valueSize || "1rem",
                    color: t.data.textColorActive || n.textColorActive || s && t.data.markerTextColor || n.textColor,
                    bgcolor: "transparent",
                    top: t.data.sliderOrientation === "horizontal" ? t.data.labelPosition : void 0,
                    right: t.data.sliderOrientation === "vertical" ? t.data.labelPosition : void 0
                  },
                  "& .MuiSlider-markLabel": {
                    fontSize: n.valueSize || "1rem",
                    color: t.data.markerTextColor || n.textColor,
                    top: t.data.sliderOrientation === "horizontal" ? t.data.markPosition : void 0,
                    left: t.data.sliderOrientation === "vertical" ? t.data.markPosition : void 0
                  },
                  "& .MuiSlider-markLabelActive": {
                    [`&[data-index='${l}']`]: {
                      "& div[data-font='active']": {
                        color: t.data.textColorActive ? `${t.data.textColorActive} !important` : void 0,
                        fontSize: typeof t.data.valueSizeActive == "number" ? `${I(t.data.valueSizeActive)} !important` : void 0
                      },
                      "& div[data-position='active']": {
                        left: t.data.iconXOffsetActive && t.data.iconXOffsetActive !== "0px" ? `${t.data.iconXOffsetActive} !important` : t.data.iconXOffsetActive === "" ? void 0 : "0px !important",
                        bottom: t.data.iconYOffsetActive && t.data.iconYOffsetActive !== "0px" ? `${t.data.iconYOffsetActive} !important` : t.data.iconYOffsetActive === "" ? void 0 : "0px !important"
                      }
                    }
                  }
                }
              })
            }),
            (t.data.sliderOrientation === "horizontal" && (t.data.iconMax || t.data.iconSmallMax) || t.data.sliderOrientation === "vertical" && (t.data.iconMin || t.data.iconSmallMin)) && E.jsx(ue, {
              sx: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: 0,
                ...t.data.sliderOrientation === "horizontal" ? {
                  transform: `translateY(${m.y}px)`
                } : {
                  transform: `translateX(${m.x}px)`
                }
              },
              children: E.jsx("img", {
                alt: "",
                src: v,
                style: {
                  width: t.data.sliderOrientation === "horizontal" ? t.data.iconSizeEnd || "24px" : t.data.iconSizeStart || "24px",
                  ...ri(v, t.data.sliderOrientation === "horizontal" ? C : w)
                }
              })
            })
          ]
        }) : null
      ]
    });
  };
  class Aa extends Lw {
    static getWidgetInfo() {
      return {
        id: "tplSliderCollectionWidget",
        visSet: "vis-2-widgets-collection",
        visSetLabel: "widgets_collection",
        visName: "SliderCollectionWidget",
        visWidgetLabel: "slider_collection_widget",
        visOrder: 4,
        visAttrs: [
          {
            name: "common",
            fields: [
              ...Pa()
            ]
          },
          {
            name: "slider",
            label: "group_slider",
            fields: [
              ..._w([
                "number"
              ]),
              ...Nw(),
              ..._1()
            ]
          },
          {
            name: "active",
            label: "group_active",
            fields: [
              ...Pa({
                groupName: "Active",
                allFields: false
              })
            ]
          },
          {
            name: "values",
            label: "values",
            indexFrom: 1,
            indexTo: "values_count",
            fields: [
              ...Pa({
                groupName: "",
                allFields: false
              })
            ]
          }
        ],
        visDefaultStyle: {
          width: "100%",
          height: "100px",
          position: "relative"
        },
        visPrev: "widgets/vis-2-widgets-collection/img/prev-collection-slider.png"
      };
    }
    getWidgetInfo() {
      return Aa.getWidgetInfo();
    }
    propertiesUpdate() {
    }
    onRxDataChanged() {
      this.propertiesUpdate();
    }
    onRxStyleChanged() {
    }
    onStateUpdated(e, t) {
    }
    componentDidMount() {
      super.componentDidMount(), this.propertiesUpdate();
    }
    renderWidgetBody(e) {
      super.renderWidgetBody(e);
      const t = {
        id: e.id,
        refService: e.refService,
        style: e.style,
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
      return e.widget.data.noCard || e.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, Mw(this.wrapContent(E.jsx(NS, {})), t);
    }
  }
  YS = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Aa
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  OA = function({ dividerText: A = "" }) {
    const e = {
      position: "absolute",
      left: 0,
      width: "100%"
    };
    return E.jsx(ue, {
      sx: {
        display: "block",
        pt: 1.5,
        pb: A ? 2 : 1.5
      },
      children: A ? E.jsx(Ko, {
        sx: e,
        children: E.jsx(qr, {
          sx: {
            opacity: 0.5,
            color: "primary.main"
          },
          variant: "caption",
          children: Aa.t(A)
        })
      }) : E.jsx(Ko, {
        sx: e
      })
    });
  };
  Pa = (A) => {
    const { groupName: e = "", allFields: t = true } = A || {}, r = [
      {
        label: "",
        type: "custom",
        component: () => E.jsx(OA, {
          dividerText: "icon"
        }),
        hidden: "data.noIcon"
      },
      {
        name: `icon${e}`,
        label: "icon",
        type: "image"
      },
      {
        name: `iconSmall${e}`,
        label: "small_icon",
        type: "icon64"
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
        name: `iconColor${e}`,
        label: "icon_color",
        type: "color",
        hidden: "data.noIcon"
      },
      {
        name: `iconXOffset${e}`,
        label: "icon_x_offset",
        type: "text",
        default: "0px",
        hidden: "data.noIcon"
      },
      {
        name: `iconYOffset${e}`,
        label: "icon_y_offset",
        type: "text",
        default: "0px",
        hidden: "data.noIcon"
      },
      {
        label: "",
        type: "custom",
        component: () => E.jsx(OA, {
          dividerText: "header"
        }),
        hidden: (o, i) => o.noHeader && !t
      },
      {
        name: `noHeader${e}`,
        type: "checkbox",
        label: "no_header"
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
        component: () => E.jsx(OA, {
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
        component: () => E.jsx(OA, {
          dividerText: "footer"
        }),
        hidden: (o, i) => o.noFooter && !t
      },
      {
        name: `noFooter${e}`,
        label: "no_footer",
        type: "checkbox"
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
        component: () => E.jsx(OA, {
          dividerText: "characteristics"
        })
      },
      {
        name: `noCard${e}`,
        label: "without_card",
        type: "checkbox"
      },
      {
        name: `squaredCorner${e}`,
        label: "squared_corner",
        type: "checkbox"
      },
      {
        name: `textColor${e}`,
        label: "text_color",
        type: "color"
      },
      {
        label: "",
        name: "allFieldsDivider",
        type: "custom",
        component: () => E.jsx(OA, {})
      },
      {
        name: `outlined${e}`,
        label: "outlined",
        type: "checkbox"
      },
      {
        name: `outlinedFrame${e}`,
        label: "outlined_frame",
        type: "checkbox"
      },
      {
        label: "",
        name: "allFieldsDivider",
        type: "custom",
        component: () => E.jsx(OA, {})
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
        component: () => E.jsx(OA, {
          dividerText: "geometry"
        })
      },
      {
        name: `square${e}`,
        label: "square",
        type: "checkbox",
        hidden: "data.circle || data.ellipse"
      },
      {
        name: `ellipse${e}`,
        label: "ellipse",
        type: "checkbox",
        hidden: "data.circle || data.square"
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
        component: () => E.jsx(OA, {
          dividerText: "background"
        })
      },
      {
        name: `background${e}`,
        label: "background",
        default: "",
        type: "custom",
        component: (o, i, a, s) => E.jsx(hr, {
          field: o,
          data: i,
          onDataChange: a,
          props: s
        })
      },
      {
        name: `backgroundColor${e}`,
        label: "background_color",
        type: "color"
      },
      {
        label: "",
        type: "custom",
        component: () => E.jsx(OA, {
          dividerText: "frame_background"
        })
      },
      {
        name: `frameBackground${e}`,
        label: "frame_background",
        default: "",
        type: "custom",
        component: (o, i, a, s) => E.jsx(hr, {
          field: o,
          data: i,
          onDataChange: a,
          props: s
        })
      },
      {
        name: `frameBackgroundColor${e}`,
        label: "frame_background_color",
        type: "color"
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
});
export {
  Er as $,
  ri as A,
  Cm as B,
  OA as C,
  Ko as D,
  gp as E,
  Bm as F,
  PS as G,
  Lw as H,
  Z0 as I,
  Pa as J,
  _w as K,
  bv as L,
  zm as M,
  Nw as N,
  Mw as O,
  es as P,
  ja as Q,
  _e as R,
  xw as S,
  qr as T,
  pn as U,
  fn as V,
  l0 as W,
  XS as X,
  Pw as Y,
  G1 as Z,
  rf as _,
  __tla,
  KA as a,
  Xl as a0,
  xr as a1,
  Xa as a2,
  Nh as a3,
  el as a4,
  wd as a5,
  ht as a6,
  jS as a7,
  Js as a8,
  ie as a9,
  WS as aa,
  qs as ab,
  Qn as ac,
  Za as ad,
  j0 as ae,
  YS as af,
  me as b,
  Wd as c,
  wA as d,
  NA as e,
  ll as f,
  _A as g,
  Oi as h,
  yA as i,
  E as j,
  tt as k,
  ye as l,
  EA as m,
  M0 as n,
  kt as o,
  aa as p,
  jt as q,
  rt as r,
  uA as s,
  zS as t,
  GA as u,
  ot as v,
  MS as w,
  ue as x,
  Sv as y,
  Il as z
};
