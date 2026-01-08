import { v as h, R as Ga, a as k, __tla as __tla_0 } from "./vis2CollectionWidget__loadShare__react__loadShare__-L1bZe9z4.js";
import { g as Ks, c as Rn } from "./_commonjsHelpers-Cpj98o6Y.js";
import { v as Ip } from "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
let Hr, ii, Sm, MA, _o, wp, bm, GS, Pw, nm, Na, jw, Ev, Av, zw, Gw, rs, Xa, Ne, Lw, en, hn, gn, g0, ZS, Ww, W1, of, DA, Zl, Ir, Ja, jh, nl, bd, mt, YS, Al, ae, XS, tl, Un, As, q0, qS, me, zd, CA, GA, dl, NA, Di, bA, E, nt, be, IA, G0, Ot, la, Xt, ot, hA, JS, VA, at, PS, de, kv, kl;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  var Xu = {
    exports: {}
  }, ai = {};
  var Hp = h, Tp = /* @__PURE__ */ Symbol.for("react.element"), kp = /* @__PURE__ */ Symbol.for("react.fragment"), Lp = Object.prototype.hasOwnProperty, Rp = Hp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Op = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };
  function Yu(A, e, t) {
    var r, n = {}, o = null, i = null;
    t !== void 0 && (o = "" + t), e.key !== void 0 && (o = "" + e.key), e.ref !== void 0 && (i = e.ref);
    for (r in e) Lp.call(e, r) && !Op.hasOwnProperty(r) && (n[r] = e[r]);
    if (A && A.defaultProps) for (r in e = A.defaultProps, e) n[r] === void 0 && (n[r] = e[r]);
    return {
      $$typeof: Tp,
      type: A,
      key: o,
      ref: i,
      props: n,
      _owner: Rp.current
    };
  }
  ai.Fragment = kp;
  ai.jsx = Yu;
  ai.jsxs = Yu;
  Xu.exports = ai;
  E = Xu.exports;
  const un = {
    black: "#000",
    white: "#fff"
  }, qt = {
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    700: "#d32f2f",
    800: "#c62828"
  }, Ar = {
    50: "#f3e5f5",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    700: "#7b1fa2"
  }, er = {
    50: "#e3f2fd",
    200: "#90caf9",
    400: "#42a5f5",
    700: "#1976d2",
    800: "#1565c0"
  }, tr = {
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    700: "#0288d1",
    900: "#01579b"
  }, rr = {
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20"
  }, kr = {
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    700: "#f57c00",
    900: "#e65100"
  }, Mp = {
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
  function Bt(A, ...e) {
    const t = new URL(`https://mui.com/production-error/?code=${A}`);
    return e.forEach((r) => t.searchParams.append("args[]", r)), `Minified MUI error #${A}; visit ${t} for the full message.`;
  }
  const et = "$$material";
  function ko() {
    return ko = Object.assign ? Object.assign.bind() : function(A) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r in t) ({}).hasOwnProperty.call(t, r) && (A[r] = t[r]);
      }
      return A;
    }, ko.apply(null, arguments);
  }
  function Kp(A) {
    if (A.sheet) return A.sheet;
    for (var e = 0; e < document.styleSheets.length; e++) if (document.styleSheets[e].ownerNode === A) return document.styleSheets[e];
  }
  function Dp(A) {
    var e = document.createElement("style");
    return e.setAttribute("data-emotion", A.key), A.nonce !== void 0 && e.setAttribute("nonce", A.nonce), e.appendChild(document.createTextNode("")), e.setAttribute("data-s", ""), e;
  }
  var Pp = (function() {
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
      this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Dp(this));
      var n = this.tags[this.tags.length - 1];
      if (this.isSpeedy) {
        var o = Kp(n);
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
  })(), ge = "-ms-", Lo = "-moz-", SA = "-webkit-", Ju = "comm", Ds = "rule", Ps = "decl", _p = "@import", Zu = "@keyframes", Np = "@layer", Gp = Math.abs, si = String.fromCharCode, Vp = Object.assign;
  function $p(A, e) {
    return ue(A, 0) ^ 45 ? (((e << 2 ^ ue(A, 0)) << 2 ^ ue(A, 1)) << 2 ^ ue(A, 2)) << 2 ^ ue(A, 3) : 0;
  }
  function qu(A) {
    return A.trim();
  }
  function Wp(A, e) {
    return (A = e.exec(A)) ? A[0] : A;
  }
  function xA(A, e, t) {
    return A.replace(e, t);
  }
  function Va(A, e) {
    return A.indexOf(e);
  }
  function ue(A, e) {
    return A.charCodeAt(e) | 0;
  }
  function dn(A, e, t) {
    return A.slice(e, t);
  }
  function Xe(A) {
    return A.length;
  }
  function _s(A) {
    return A.length;
  }
  function On(A, e) {
    return e.push(A), A;
  }
  function jp(A, e) {
    return A.map(e).join("");
  }
  var li = 1, Qr = 1, Ad = 0, Ue = 0, Ae = 0, Er = "";
  function ci(A, e, t, r, n, o, i) {
    return {
      value: A,
      root: e,
      parent: t,
      type: r,
      props: n,
      children: o,
      line: li,
      column: Qr,
      length: i,
      return: ""
    };
  }
  function Lr(A, e) {
    return Vp(ci("", null, null, "", null, null, 0), A, {
      length: -A.length
    }, e);
  }
  function zp() {
    return Ae;
  }
  function Xp() {
    return Ae = Ue > 0 ? ue(Er, --Ue) : 0, Qr--, Ae === 10 && (Qr = 1, li--), Ae;
  }
  function Ee() {
    return Ae = Ue < Ad ? ue(Er, Ue++) : 0, Qr++, Ae === 10 && (Qr = 1, li++), Ae;
  }
  function tt() {
    return ue(Er, Ue);
  }
  function bo() {
    return Ue;
  }
  function Cn(A, e) {
    return dn(Er, A, e);
  }
  function fn(A) {
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
  function ed(A) {
    return li = Qr = 1, Ad = Xe(Er = A), Ue = 0, [];
  }
  function td(A) {
    return Er = "", A;
  }
  function Qo(A) {
    return qu(Cn(Ue - 1, $a(A === 91 ? A + 2 : A === 40 ? A + 1 : A)));
  }
  function Yp(A) {
    for (; (Ae = tt()) && Ae < 33; ) Ee();
    return fn(A) > 2 || fn(Ae) > 3 ? "" : " ";
  }
  function Jp(A, e) {
    for (; --e && Ee() && !(Ae < 48 || Ae > 102 || Ae > 57 && Ae < 65 || Ae > 70 && Ae < 97); ) ;
    return Cn(A, bo() + (e < 6 && tt() == 32 && Ee() == 32));
  }
  function $a(A) {
    for (; Ee(); ) switch (Ae) {
      case A:
        return Ue;
      case 34:
      case 39:
        A !== 34 && A !== 39 && $a(Ae);
        break;
      case 40:
        A === 41 && $a(A);
        break;
      case 92:
        Ee();
        break;
    }
    return Ue;
  }
  function Zp(A, e) {
    for (; Ee() && A + Ae !== 57; ) if (A + Ae === 84 && tt() === 47) break;
    return "/*" + Cn(e, Ue - 1) + "*" + si(A === 47 ? A : Ee());
  }
  function qp(A) {
    for (; !fn(tt()); ) Ee();
    return Cn(A, Ue);
  }
  function Ag(A) {
    return td(Fo("", null, null, null, [
      ""
    ], A = ed(A), 0, [
      0
    ], A));
  }
  function Fo(A, e, t, r, n, o, i, a, s) {
    for (var l = 0, c = 0, u = i, d = 0, f = 0, p = 0, B = 1, b = 1, v = 1, Q = 0, w = "", C = n, U = o, m = r, S = w; b; ) switch (p = Q, Q = Ee()) {
      case 40:
        if (p != 108 && ue(S, u - 1) == 58) {
          Va(S += xA(Qo(Q), "&", "&\f"), "&\f") != -1 && (v = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        S += Qo(Q);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        S += Yp(p);
        break;
      case 92:
        S += Jp(bo() - 1, 7);
        continue;
      case 47:
        switch (tt()) {
          case 42:
          case 47:
            On(eg(Zp(Ee(), bo()), e, t), s);
            break;
          default:
            S += "/";
        }
        break;
      case 123 * B:
        a[l++] = Xe(S) * v;
      case 125 * B:
      case 59:
      case 0:
        switch (Q) {
          case 0:
          case 125:
            b = 0;
          case 59 + c:
            v == -1 && (S = xA(S, /\f/g, "")), f > 0 && Xe(S) - u && On(f > 32 ? Kl(S + ";", r, t, u - 1) : Kl(xA(S, " ", "") + ";", r, t, u - 2), s);
            break;
          case 59:
            S += ";";
          default:
            if (On(m = Ml(S, e, t, l, c, n, a, w, C = [], U = [], u), o), Q === 123) if (c === 0) Fo(S, e, m, m, C, o, u, a, U);
            else switch (d === 99 && ue(S, 3) === 110 ? 100 : d) {
              case 100:
              case 108:
              case 109:
              case 115:
                Fo(A, m, m, r && On(Ml(A, m, m, 0, 0, n, a, w, n, C = [], u), U), n, U, u, a, r ? C : U);
                break;
              default:
                Fo(S, m, m, m, [
                  ""
                ], U, 0, a, U);
            }
        }
        l = c = f = 0, B = v = 1, w = S = "", u = i;
        break;
      case 58:
        u = 1 + Xe(S), f = p;
      default:
        if (B < 1) {
          if (Q == 123) --B;
          else if (Q == 125 && B++ == 0 && Xp() == 125) continue;
        }
        switch (S += si(Q), Q * B) {
          case 38:
            v = c > 0 ? 1 : (S += "\f", -1);
            break;
          case 44:
            a[l++] = (Xe(S) - 1) * v, v = 1;
            break;
          case 64:
            tt() === 45 && (S += Qo(Ee())), d = tt(), c = u = Xe(w = S += qp(bo())), Q++;
            break;
          case 45:
            p === 45 && Xe(S) == 2 && (B = 0);
        }
    }
    return o;
  }
  function Ml(A, e, t, r, n, o, i, a, s, l, c) {
    for (var u = n - 1, d = n === 0 ? o : [
      ""
    ], f = _s(d), p = 0, B = 0, b = 0; p < r; ++p) for (var v = 0, Q = dn(A, u + 1, u = Gp(B = i[p])), w = A; v < f; ++v) (w = qu(B > 0 ? d[v] + " " + Q : xA(Q, /&\f/g, d[v]))) && (s[b++] = w);
    return ci(A, e, t, n === 0 ? Ds : a, s, l, c);
  }
  function eg(A, e, t) {
    return ci(A, e, t, Ju, si(zp()), dn(A, 2, -2), 0);
  }
  function Kl(A, e, t, r) {
    return ci(A, e, t, Ps, dn(A, 0, r), dn(A, r + 1, -1), r);
  }
  function wr(A, e) {
    for (var t = "", r = _s(A), n = 0; n < r; n++) t += e(A[n], n, A, e) || "";
    return t;
  }
  function tg(A, e, t, r) {
    switch (A.type) {
      case Np:
        if (A.children.length) break;
      case _p:
      case Ps:
        return A.return = A.return || A.value;
      case Ju:
        return "";
      case Zu:
        return A.return = A.value + "{" + wr(A.children, r) + "}";
      case Ds:
        A.value = A.props.join(",");
    }
    return Xe(t = wr(A.children, r)) ? A.return = A.value + "{" + t + "}" : "";
  }
  function rg(A) {
    var e = _s(A);
    return function(t, r, n, o) {
      for (var i = "", a = 0; a < e; a++) i += A[a](t, r, n, o) || "";
      return i;
    };
  }
  function ng(A) {
    return function(e) {
      e.root || (e = e.return) && A(e);
    };
  }
  function rd(A) {
    var e = /* @__PURE__ */ Object.create(null);
    return function(t) {
      return e[t] === void 0 && (e[t] = A(t)), e[t];
    };
  }
  var og = function(e, t, r) {
    for (var n = 0, o = 0; n = o, o = tt(), n === 38 && o === 12 && (t[r] = 1), !fn(o); ) Ee();
    return Cn(e, Ue);
  }, ig = function(e, t) {
    var r = -1, n = 44;
    do
      switch (fn(n)) {
        case 0:
          n === 38 && tt() === 12 && (t[r] = 1), e[r] += og(Ue - 1, t, r);
          break;
        case 2:
          e[r] += Qo(n);
          break;
        case 4:
          if (n === 44) {
            e[++r] = tt() === 58 ? "&\f" : "", t[r] = e[r].length;
            break;
          }
        default:
          e[r] += si(n);
      }
    while (n = Ee());
    return e;
  }, ag = function(e, t) {
    return td(ig(ed(e), t));
  }, Dl = /* @__PURE__ */ new WeakMap(), sg = function(e) {
    if (!(e.type !== "rule" || !e.parent || e.length < 1)) {
      for (var t = e.value, r = e.parent, n = e.column === r.column && e.line === r.line; r.type !== "rule"; ) if (r = r.parent, !r) return;
      if (!(e.props.length === 1 && t.charCodeAt(0) !== 58 && !Dl.get(r)) && !n) {
        Dl.set(e, true);
        for (var o = [], i = ag(t, o), a = r.props, s = 0, l = 0; s < i.length; s++) for (var c = 0; c < a.length; c++, l++) e.props[l] = o[s] ? i[s].replace(/&\f/g, a[c]) : a[c] + " " + i[s];
      }
    }
  }, lg = function(e) {
    if (e.type === "decl") {
      var t = e.value;
      t.charCodeAt(0) === 108 && t.charCodeAt(2) === 98 && (e.return = "", e.value = "");
    }
  };
  function nd(A, e) {
    switch ($p(A, e)) {
      case 5103:
        return SA + "print-" + A + A;
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
        return SA + A + A;
      case 5349:
      case 4246:
      case 4810:
      case 6968:
      case 2756:
        return SA + A + Lo + A + ge + A + A;
      case 6828:
      case 4268:
        return SA + A + ge + A + A;
      case 6165:
        return SA + A + ge + "flex-" + A + A;
      case 5187:
        return SA + A + xA(A, /(\w+).+(:[^]+)/, SA + "box-$1$2" + ge + "flex-$1$2") + A;
      case 5443:
        return SA + A + ge + "flex-item-" + xA(A, /flex-|-self/, "") + A;
      case 4675:
        return SA + A + ge + "flex-line-pack" + xA(A, /align-content|flex-|-self/, "") + A;
      case 5548:
        return SA + A + ge + xA(A, "shrink", "negative") + A;
      case 5292:
        return SA + A + ge + xA(A, "basis", "preferred-size") + A;
      case 6060:
        return SA + "box-" + xA(A, "-grow", "") + SA + A + ge + xA(A, "grow", "positive") + A;
      case 4554:
        return SA + xA(A, /([^-])(transform)/g, "$1" + SA + "$2") + A;
      case 6187:
        return xA(xA(xA(A, /(zoom-|grab)/, SA + "$1"), /(image-set)/, SA + "$1"), A, "") + A;
      case 5495:
      case 3959:
        return xA(A, /(image-set\([^]*)/, SA + "$1$`$1");
      case 4968:
        return xA(xA(A, /(.+:)(flex-)?(.*)/, SA + "box-pack:$3" + ge + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + SA + A + A;
      case 4095:
      case 3583:
      case 4068:
      case 2532:
        return xA(A, /(.+)-inline(.+)/, SA + "$1$2") + A;
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
        if (Xe(A) - 1 - e > 6) switch (ue(A, e + 1)) {
          case 109:
            if (ue(A, e + 4) !== 45) break;
          case 102:
            return xA(A, /(.+:)(.+)-([^]+)/, "$1" + SA + "$2-$3$1" + Lo + (ue(A, e + 3) == 108 ? "$3" : "$2-$3")) + A;
          case 115:
            return ~Va(A, "stretch") ? nd(xA(A, "stretch", "fill-available"), e) + A : A;
        }
        break;
      case 4949:
        if (ue(A, e + 1) !== 115) break;
      case 6444:
        switch (ue(A, Xe(A) - 3 - (~Va(A, "!important") && 10))) {
          case 107:
            return xA(A, ":", ":" + SA) + A;
          case 101:
            return xA(A, /(.+:)([^;!]+)(;|!.+)?/, "$1" + SA + (ue(A, 14) === 45 ? "inline-" : "") + "box$3$1" + SA + "$2$3$1" + ge + "$2box$3") + A;
        }
        break;
      case 5936:
        switch (ue(A, e + 11)) {
          case 114:
            return SA + A + ge + xA(A, /[svh]\w+-[tblr]{2}/, "tb") + A;
          case 108:
            return SA + A + ge + xA(A, /[svh]\w+-[tblr]{2}/, "tb-rl") + A;
          case 45:
            return SA + A + ge + xA(A, /[svh]\w+-[tblr]{2}/, "lr") + A;
        }
        return SA + A + ge + A + A;
    }
    return A;
  }
  var cg = function(e, t, r, n) {
    if (e.length > -1 && !e.return) switch (e.type) {
      case Ps:
        e.return = nd(e.value, e.length);
        break;
      case Zu:
        return wr([
          Lr(e, {
            value: xA(e.value, "@", "@" + SA)
          })
        ], n);
      case Ds:
        if (e.length) return jp(e.props, function(o) {
          switch (Wp(o, /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              return wr([
                Lr(e, {
                  props: [
                    xA(o, /:(read-\w+)/, ":" + Lo + "$1")
                  ]
                })
              ], n);
            case "::placeholder":
              return wr([
                Lr(e, {
                  props: [
                    xA(o, /:(plac\w+)/, ":" + SA + "input-$1")
                  ]
                }),
                Lr(e, {
                  props: [
                    xA(o, /:(plac\w+)/, ":" + Lo + "$1")
                  ]
                }),
                Lr(e, {
                  props: [
                    xA(o, /:(plac\w+)/, ge + "input-$1")
                  ]
                })
              ], n);
          }
          return "";
        });
    }
  }, ug = [
    cg
  ], dg = function(e) {
    var t = e.key;
    if (t === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function(B) {
        var b = B.getAttribute("data-emotion");
        b.indexOf(" ") !== -1 && (document.head.appendChild(B), B.setAttribute("data-s", ""));
      });
    }
    var n = e.stylisPlugins || ug, o = {}, i, a = [];
    i = e.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + t + ' "]'), function(B) {
      for (var b = B.getAttribute("data-emotion").split(" "), v = 1; v < b.length; v++) o[b[v]] = true;
      a.push(B);
    });
    var s, l = [
      sg,
      lg
    ];
    {
      var c, u = [
        tg,
        ng(function(B) {
          c.insert(B);
        })
      ], d = rg(l.concat(n, u)), f = function(b) {
        return wr(Ag(b), d);
      };
      s = function(b, v, Q, w) {
        c = Q, f(b ? b + "{" + v.styles + "}" : v.styles), w && (p.inserted[v.name] = true);
      };
    }
    var p = {
      key: t,
      sheet: new Pp({
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
  }, od = {
    exports: {}
  }, HA = {};
  var se = typeof Symbol == "function" && Symbol.for, Ns = se ? /* @__PURE__ */ Symbol.for("react.element") : 60103, Gs = se ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, ui = se ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, di = se ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, fi = se ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, pi = se ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, gi = se ? /* @__PURE__ */ Symbol.for("react.context") : 60110, Vs = se ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, hi = se ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, Bi = se ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, mi = se ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, fg = se ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, vi = se ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, wi = se ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, pg = se ? /* @__PURE__ */ Symbol.for("react.block") : 60121, gg = se ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, hg = se ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, Bg = se ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
  function Ie(A) {
    if (typeof A == "object" && A !== null) {
      var e = A.$$typeof;
      switch (e) {
        case Ns:
          switch (A = A.type, A) {
            case Vs:
            case hi:
            case ui:
            case fi:
            case di:
            case mi:
              return A;
            default:
              switch (A = A && A.$$typeof, A) {
                case gi:
                case Bi:
                case wi:
                case vi:
                case pi:
                  return A;
                default:
                  return e;
              }
          }
        case Gs:
          return e;
      }
    }
  }
  function id(A) {
    return Ie(A) === hi;
  }
  HA.AsyncMode = Vs;
  HA.ConcurrentMode = hi;
  HA.ContextConsumer = gi;
  HA.ContextProvider = pi;
  HA.Element = Ns;
  HA.ForwardRef = Bi;
  HA.Fragment = ui;
  HA.Lazy = wi;
  HA.Memo = vi;
  HA.Portal = Gs;
  HA.Profiler = fi;
  HA.StrictMode = di;
  HA.Suspense = mi;
  HA.isAsyncMode = function(A) {
    return id(A) || Ie(A) === Vs;
  };
  HA.isConcurrentMode = id;
  HA.isContextConsumer = function(A) {
    return Ie(A) === gi;
  };
  HA.isContextProvider = function(A) {
    return Ie(A) === pi;
  };
  HA.isElement = function(A) {
    return typeof A == "object" && A !== null && A.$$typeof === Ns;
  };
  HA.isForwardRef = function(A) {
    return Ie(A) === Bi;
  };
  HA.isFragment = function(A) {
    return Ie(A) === ui;
  };
  HA.isLazy = function(A) {
    return Ie(A) === wi;
  };
  HA.isMemo = function(A) {
    return Ie(A) === vi;
  };
  HA.isPortal = function(A) {
    return Ie(A) === Gs;
  };
  HA.isProfiler = function(A) {
    return Ie(A) === fi;
  };
  HA.isStrictMode = function(A) {
    return Ie(A) === di;
  };
  HA.isSuspense = function(A) {
    return Ie(A) === mi;
  };
  HA.isValidElementType = function(A) {
    return typeof A == "string" || typeof A == "function" || A === ui || A === hi || A === fi || A === di || A === mi || A === fg || typeof A == "object" && A !== null && (A.$$typeof === wi || A.$$typeof === vi || A.$$typeof === pi || A.$$typeof === gi || A.$$typeof === Bi || A.$$typeof === gg || A.$$typeof === hg || A.$$typeof === Bg || A.$$typeof === pg);
  };
  HA.typeOf = Ie;
  od.exports = HA;
  var mg = od.exports, ad = mg, vg = {
    $$typeof: true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
  }, wg = {
    $$typeof: true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
  }, sd = {};
  sd[ad.ForwardRef] = vg;
  sd[ad.Memo] = wg;
  var Cg = true;
  function ld(A, e, t) {
    var r = "";
    return t.split(" ").forEach(function(n) {
      A[n] !== void 0 ? e.push(A[n] + ";") : n && (r += n + " ");
    }), r;
  }
  var $s = function(e, t, r) {
    var n = e.key + "-" + t.name;
    (r === false || Cg === false) && e.registered[n] === void 0 && (e.registered[n] = t.styles);
  }, Ws = function(e, t, r) {
    $s(e, t, r);
    var n = e.key + "-" + t.name;
    if (e.inserted[t.name] === void 0) {
      var o = t;
      do
        e.insert(t === o ? "." + n : "", o, e.sheet, true), o = o.next;
      while (o !== void 0);
    }
  };
  function yg(A) {
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
  var bg = {
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
  }, Qg = /[A-Z]|^ms/g, Fg = /_EMO_([^_]+?)_([^]*?)_EMO_/g, cd = function(e) {
    return e.charCodeAt(1) === 45;
  }, Pl = function(e) {
    return e != null && typeof e != "boolean";
  }, ia = rd(function(A) {
    return cd(A) ? A : A.replace(Qg, "-$&").toLowerCase();
  }), _l = function(e, t) {
    switch (e) {
      case "animation":
      case "animationName":
        if (typeof t == "string") return t.replace(Fg, function(r, n, o) {
          return Ye = {
            name: n,
            styles: o,
            next: Ye
          }, n;
        });
    }
    return bg[e] !== 1 && !cd(e) && typeof t == "number" && t !== 0 ? t + "px" : t;
  };
  function pn(A, e, t) {
    if (t == null) return "";
    var r = t;
    if (r.__emotion_styles !== void 0) return r;
    switch (typeof t) {
      case "boolean":
        return "";
      case "object": {
        var n = t;
        if (n.anim === 1) return Ye = {
          name: n.name,
          styles: n.styles,
          next: Ye
        }, n.name;
        var o = t;
        if (o.styles !== void 0) {
          var i = o.next;
          if (i !== void 0) for (; i !== void 0; ) Ye = {
            name: i.name,
            styles: i.styles,
            next: Ye
          }, i = i.next;
          var a = o.styles + ";";
          return a;
        }
        return Ug(A, e, t);
      }
      case "function": {
        if (A !== void 0) {
          var s = Ye, l = t(A);
          return Ye = s, pn(A, e, l);
        }
        break;
      }
    }
    var c = t;
    if (e == null) return c;
    var u = e[c];
    return u !== void 0 ? u : c;
  }
  function Ug(A, e, t) {
    var r = "";
    if (Array.isArray(t)) for (var n = 0; n < t.length; n++) r += pn(A, e, t[n]) + ";";
    else for (var o in t) {
      var i = t[o];
      if (typeof i != "object") {
        var a = i;
        e != null && e[a] !== void 0 ? r += o + "{" + e[a] + "}" : Pl(a) && (r += ia(o) + ":" + _l(o, a) + ";");
      } else if (Array.isArray(i) && typeof i[0] == "string" && (e == null || e[i[0]] === void 0)) for (var s = 0; s < i.length; s++) Pl(i[s]) && (r += ia(o) + ":" + _l(o, i[s]) + ";");
      else {
        var l = pn(A, e, i);
        switch (o) {
          case "animation":
          case "animationName": {
            r += ia(o) + ":" + l + ";";
            break;
          }
          default:
            r += o + "{" + l + "}";
        }
      }
    }
    return r;
  }
  var Nl = /label:\s*([^\s;{]+)\s*(;|$)/g, Ye;
  function yn(A, e, t) {
    if (A.length === 1 && typeof A[0] == "object" && A[0] !== null && A[0].styles !== void 0) return A[0];
    var r = true, n = "";
    Ye = void 0;
    var o = A[0];
    if (o == null || o.raw === void 0) r = false, n += pn(t, e, o);
    else {
      var i = o;
      n += i[0];
    }
    for (var a = 1; a < A.length; a++) if (n += pn(t, e, A[a]), r) {
      var s = o;
      n += s[a];
    }
    Nl.lastIndex = 0;
    for (var l = "", c; (c = Nl.exec(n)) !== null; ) l += "-" + c[1];
    var u = yg(n) + l;
    return {
      name: u,
      styles: n,
      next: Ye
    };
  }
  var Sg = function(e) {
    return e();
  }, ud = Ga.useInsertionEffect ? Ga.useInsertionEffect : false, dd = ud || Sg, Gl = ud || h.useLayoutEffect, fd = h.createContext(typeof HTMLElement < "u" ? dg({
    key: "css"
  }) : null);
  fd.Provider;
  var js = function(e) {
    return h.forwardRef(function(t, r) {
      var n = h.useContext(fd);
      return e(t, n, r);
    });
  }, bn = h.createContext({}), zs = {}.hasOwnProperty, Wa = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", xg = function(e, t) {
    var r = {};
    for (var n in t) zs.call(t, n) && (r[n] = t[n]);
    return r[Wa] = e, r;
  }, Eg = function(e) {
    var t = e.cache, r = e.serialized, n = e.isStringTag;
    return $s(t, r, n), dd(function() {
      return Ws(t, r, n);
    }), null;
  }, Ig = js(function(A, e, t) {
    var r = A.css;
    typeof r == "string" && e.registered[r] !== void 0 && (r = e.registered[r]);
    var n = A[Wa], o = [
      r
    ], i = "";
    typeof A.className == "string" ? i = ld(e.registered, o, A.className) : A.className != null && (i = A.className + " ");
    var a = yn(o, void 0, h.useContext(bn));
    i += e.key + "-" + a.name;
    var s = {};
    for (var l in A) zs.call(A, l) && l !== "css" && l !== Wa && (s[l] = A[l]);
    return s.className = i, t && (s.ref = t), h.createElement(h.Fragment, null, h.createElement(Eg, {
      cache: e,
      serialized: a,
      isStringTag: typeof n == "string"
    }), h.createElement(n, s));
  }), Hg = Ig, Vl = function(e, t) {
    var r = arguments;
    if (t == null || !zs.call(t, "css")) return h.createElement.apply(void 0, r);
    var n = r.length, o = new Array(n);
    o[0] = Hg, o[1] = xg(e, t);
    for (var i = 2; i < n; i++) o[i] = r[i];
    return h.createElement.apply(null, o);
  };
  (function(A) {
    var e;
    e || (e = A.JSX || (A.JSX = {}));
  })(Vl || (Vl = {}));
  var Tg = js(function(A, e) {
    var t = A.styles, r = yn([
      t
    ], void 0, h.useContext(bn)), n = h.useRef();
    return Gl(function() {
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
    ]), Gl(function() {
      var o = n.current, i = o[0], a = o[1];
      if (a) {
        o[1] = false;
        return;
      }
      if (r.next !== void 0 && Ws(e, r.next, true), i.tags.length) {
        var s = i.tags[i.tags.length - 1].nextElementSibling;
        i.before = s, i.flush();
      }
      e.insert("", r, i, false);
    }, [
      e,
      r.name
    ]), null;
  });
  function Xs() {
    for (var A = arguments.length, e = new Array(A), t = 0; t < A; t++) e[t] = arguments[t];
    return yn(e);
  }
  function Qn() {
    var A = Xs.apply(void 0, arguments), e = "animation-" + A.name;
    return {
      name: e,
      styles: "@keyframes " + e + "{" + A.styles + "}",
      anim: 1,
      toString: function() {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      }
    };
  }
  var kg = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Lg = rd(function(A) {
    return kg.test(A) || A.charCodeAt(0) === 111 && A.charCodeAt(1) === 110 && A.charCodeAt(2) < 91;
  }), Rg = Lg, Og = function(e) {
    return e !== "theme";
  }, $l = function(e) {
    return typeof e == "string" && e.charCodeAt(0) > 96 ? Rg : Og;
  }, Wl = function(e, t, r) {
    var n;
    if (t) {
      var o = t.shouldForwardProp;
      n = e.__emotion_forwardProp && o ? function(i) {
        return e.__emotion_forwardProp(i) && o(i);
      } : o;
    }
    return typeof n != "function" && r && (n = e.__emotion_forwardProp), n;
  }, Mg = function(e) {
    var t = e.cache, r = e.serialized, n = e.isStringTag;
    return $s(t, r, n), dd(function() {
      return Ws(t, r, n);
    }), null;
  }, Kg = function A(e, t) {
    var r = e.__emotion_real === e, n = r && e.__emotion_base || e, o, i;
    t !== void 0 && (o = t.label, i = t.target);
    var a = Wl(e, t, r), s = a || $l(n), l = !s("as");
    return function() {
      var c = arguments, u = r && e.__emotion_styles !== void 0 ? e.__emotion_styles.slice(0) : [];
      if (o !== void 0 && u.push("label:" + o + ";"), c[0] == null || c[0].raw === void 0) u.push.apply(u, c);
      else {
        var d = c[0];
        u.push(d[0]);
        for (var f = c.length, p = 1; p < f; p++) u.push(c[p], d[p]);
      }
      var B = js(function(b, v, Q) {
        var w = l && b.as || n, C = "", U = [], m = b;
        if (b.theme == null) {
          m = {};
          for (var S in b) m[S] = b[S];
          m.theme = h.useContext(bn);
        }
        typeof b.className == "string" ? C = ld(v.registered, U, b.className) : b.className != null && (C = b.className + " ");
        var H = yn(u.concat(U), v.registered, m);
        C += v.key + "-" + H.name, i !== void 0 && (C += " " + i);
        var I = l && a === void 0 ? $l(w) : s, g = {};
        for (var T in b) l && T === "as" || I(T) && (g[T] = b[T]);
        return g.className = C, Q && (g.ref = Q), h.createElement(h.Fragment, null, h.createElement(Mg, {
          cache: v,
          serialized: H,
          isStringTag: typeof w == "string"
        }), h.createElement(w, g));
      });
      return B.displayName = o !== void 0 ? o : "Styled(" + (typeof n == "string" ? n : n.displayName || n.name || "Component") + ")", B.defaultProps = e.defaultProps, B.__emotion_real = B, B.__emotion_base = n, B.__emotion_styles = u, B.__emotion_forwardProp = a, Object.defineProperty(B, "toString", {
        value: function() {
          return "." + i;
        }
      }), B.withComponent = function(b, v) {
        var Q = A(b, ko({}, t, v, {
          shouldForwardProp: Wl(B, v, true)
        }));
        return Q.apply(void 0, u);
      }, B;
    };
  }, Dg = [
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
  ], ja = Kg.bind(null);
  Dg.forEach(function(A) {
    ja[A] = ja(A);
  });
  function Pg(A) {
    return A == null || Object.keys(A).length === 0;
  }
  function pd(A) {
    const { styles: e, defaultTheme: t = {} } = A, r = typeof e == "function" ? (n) => e(Pg(n) ? t : n) : e;
    return E.jsx(Tg, {
      styles: r
    });
  }
  function gd(A, e) {
    return ja(A, e);
  }
  function _g(A, e) {
    Array.isArray(A.__emotion_styles) && (A.__emotion_styles = e(A.__emotion_styles));
  }
  const jl = [];
  function Ht(A) {
    return jl[0] = A, yn(jl);
  }
  var hd = {
    exports: {}
  }, OA = {};
  var Ys = /* @__PURE__ */ Symbol.for("react.transitional.element"), Js = /* @__PURE__ */ Symbol.for("react.portal"), Ci = /* @__PURE__ */ Symbol.for("react.fragment"), yi = /* @__PURE__ */ Symbol.for("react.strict_mode"), bi = /* @__PURE__ */ Symbol.for("react.profiler"), Qi = /* @__PURE__ */ Symbol.for("react.consumer"), Fi = /* @__PURE__ */ Symbol.for("react.context"), Ui = /* @__PURE__ */ Symbol.for("react.forward_ref"), Si = /* @__PURE__ */ Symbol.for("react.suspense"), xi = /* @__PURE__ */ Symbol.for("react.suspense_list"), Ei = /* @__PURE__ */ Symbol.for("react.memo"), Ii = /* @__PURE__ */ Symbol.for("react.lazy"), Ng = /* @__PURE__ */ Symbol.for("react.view_transition"), Gg = /* @__PURE__ */ Symbol.for("react.client.reference");
  function De(A) {
    if (typeof A == "object" && A !== null) {
      var e = A.$$typeof;
      switch (e) {
        case Ys:
          switch (A = A.type, A) {
            case Ci:
            case bi:
            case yi:
            case Si:
            case xi:
            case Ng:
              return A;
            default:
              switch (A = A && A.$$typeof, A) {
                case Fi:
                case Ui:
                case Ii:
                case Ei:
                  return A;
                case Qi:
                  return A;
                default:
                  return e;
              }
          }
        case Js:
          return e;
      }
    }
  }
  OA.ContextConsumer = Qi;
  OA.ContextProvider = Fi;
  OA.Element = Ys;
  OA.ForwardRef = Ui;
  OA.Fragment = Ci;
  OA.Lazy = Ii;
  OA.Memo = Ei;
  OA.Portal = Js;
  OA.Profiler = bi;
  OA.StrictMode = yi;
  OA.Suspense = Si;
  OA.SuspenseList = xi;
  OA.isContextConsumer = function(A) {
    return De(A) === Qi;
  };
  OA.isContextProvider = function(A) {
    return De(A) === Fi;
  };
  OA.isElement = function(A) {
    return typeof A == "object" && A !== null && A.$$typeof === Ys;
  };
  OA.isForwardRef = function(A) {
    return De(A) === Ui;
  };
  OA.isFragment = function(A) {
    return De(A) === Ci;
  };
  OA.isLazy = function(A) {
    return De(A) === Ii;
  };
  OA.isMemo = function(A) {
    return De(A) === Ei;
  };
  OA.isPortal = function(A) {
    return De(A) === Js;
  };
  OA.isProfiler = function(A) {
    return De(A) === bi;
  };
  OA.isStrictMode = function(A) {
    return De(A) === yi;
  };
  OA.isSuspense = function(A) {
    return De(A) === Si;
  };
  OA.isSuspenseList = function(A) {
    return De(A) === xi;
  };
  OA.isValidElementType = function(A) {
    return typeof A == "string" || typeof A == "function" || A === Ci || A === bi || A === yi || A === Si || A === xi || typeof A == "object" && A !== null && (A.$$typeof === Ii || A.$$typeof === Ei || A.$$typeof === Fi || A.$$typeof === Qi || A.$$typeof === Ui || A.$$typeof === Gg || A.getModuleId !== void 0);
  };
  OA.typeOf = De;
  hd.exports = OA;
  var Bd = hd.exports;
  function qe(A) {
    if (typeof A != "object" || A === null) return false;
    const e = Object.getPrototypeOf(A);
    return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in A) && !(Symbol.iterator in A);
  }
  function md(A) {
    if (h.isValidElement(A) || Bd.isValidElementType(A) || !qe(A)) return A;
    const e = {};
    return Object.keys(A).forEach((t) => {
      e[t] = md(A[t]);
    }), e;
  }
  ae = function(A, e, t = {
    clone: true
  }) {
    const r = t.clone ? {
      ...A
    } : A;
    return qe(A) && qe(e) && Object.keys(e).forEach((n) => {
      h.isValidElement(e[n]) || Bd.isValidElementType(e[n]) ? r[n] = e[n] : qe(e[n]) && Object.prototype.hasOwnProperty.call(A, n) && qe(A[n]) ? r[n] = ae(A[n], e[n], t) : t.clone ? r[n] = qe(e[n]) ? md(e[n]) : e[n] : r[n] = e[n];
    }), r;
  };
  const Vg = (A) => {
    const e = Object.keys(A).map((t) => ({
      key: t,
      val: A[t]
    })) || [];
    return e.sort((t, r) => t.val - r.val), e.reduce((t, r) => ({
      ...t,
      [r.key]: r.val
    }), {});
  };
  function $g(A) {
    const { values: e = {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }, unit: t = "px", step: r = 5, ...n } = A, o = Vg(e), i = Object.keys(o);
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
  function zl(A, e) {
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
  function Wg(A, e) {
    return e === "@" || e.startsWith("@") && (A.some((t) => e.startsWith(`@${t}`)) || !!e.match(/^@\d/));
  }
  function jg(A, e) {
    const t = e.match(/^@([^/]+)?\/?(.+)?$/);
    if (!t) return null;
    const [, r, n] = t, o = Number.isNaN(+r) ? r || 0 : +r;
    return A.containerQueries(n).up(o);
  }
  function zg(A) {
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
  const Xg = {
    borderRadius: 4
  };
  function qr(A, e) {
    return e ? ae(A, e, {
      clone: false
    }) : A;
  }
  const Hi = {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536
  }, Xl = {
    keys: [
      "xs",
      "sm",
      "md",
      "lg",
      "xl"
    ],
    up: (A) => `@media (min-width:${Hi[A]}px)`
  }, Yg = {
    containerQueries: (A) => ({
      up: (e) => {
        let t = typeof e == "number" ? e : Hi[e] || e;
        return typeof t == "number" && (t = `${t}px`), A ? `@container ${A} (min-width:${t})` : `@container (min-width:${t})`;
      }
    })
  };
  mt = function(A, e, t) {
    const r = A.theme || {};
    if (Array.isArray(e)) {
      const o = r.breakpoints || Xl;
      return e.reduce((i, a, s) => (i[o.up(o.keys[s])] = t(e[s]), i), {});
    }
    if (typeof e == "object") {
      const o = r.breakpoints || Xl;
      return Object.keys(e).reduce((i, a) => {
        if (Wg(o.keys, a)) {
          const s = jg(r.containerQueries ? r : Yg, a);
          s && (i[s] = t(e[a], a));
        } else if (Object.keys(o.values || Hi).includes(a)) {
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
  function vd(A = {}) {
    var _a2;
    return ((_a2 = A.keys) == null ? void 0 : _a2.reduce((t, r) => {
      const n = A.up(r);
      return t[n] = {}, t;
    }, {})) || {};
  }
  function za(A, e) {
    return A.reduce((t, r) => {
      const n = t[r];
      return (!n || Object.keys(n).length === 0) && delete t[r], t;
    }, e);
  }
  XS = function(A, ...e) {
    const t = vd(A), r = [
      t,
      ...e
    ].reduce((n, o) => ae(n, o), {});
    return za(Object.keys(t), r);
  };
  function Jg(A, e) {
    if (typeof A != "object") return {};
    const t = {}, r = Object.keys(e);
    return Array.isArray(A) ? r.forEach((n, o) => {
      o < A.length && (t[n] = true);
    }) : r.forEach((n) => {
      A[n] != null && (t[n] = true);
    }), t;
  }
  YS = function({ values: A, breakpoints: e, base: t }) {
    const r = t || Jg(A, e), n = Object.keys(r);
    if (n.length === 0) return A;
    let o;
    return n.reduce((i, a, s) => (Array.isArray(A) ? (i[a] = A[s] != null ? A[s] : A[o], o = s) : typeof A == "object" ? (i[a] = A[a] != null ? A[a] : A[o], o = a) : i[a] = A, i), {});
  };
  bA = function(A) {
    if (typeof A != "string") throw new Error(Bt(7));
    return A.charAt(0).toUpperCase() + A.slice(1);
  };
  function Ti(A, e, t = true) {
    if (!e || typeof e != "string") return null;
    if (A && A.vars && t) {
      const r = `vars.${e}`.split(".").reduce((n, o) => n && n[o] ? n[o] : null, A);
      if (r != null) return r;
    }
    return e.split(".").reduce((r, n) => r && r[n] != null ? r[n] : null, A);
  }
  function Ro(A, e, t, r = t) {
    let n;
    return typeof A == "function" ? n = A(t) : Array.isArray(A) ? n = A[t] || r : n = Ti(A, t) || r, e && (n = e(n, r, A)), n;
  }
  function ZA(A) {
    const { prop: e, cssProperty: t = A.prop, themeKey: r, transform: n } = A, o = (i) => {
      if (i[e] == null) return null;
      const a = i[e], s = i.theme, l = Ti(s, r) || {};
      return mt(i, a, (u) => {
        let d = Ro(l, n, u);
        return u === d && typeof u == "string" && (d = Ro(l, n, `${e}${u === "default" ? "" : bA(u)}`, u)), t === false ? d : {
          [t]: d
        };
      });
    };
    return o.propTypes = {}, o.filterProps = [
      e
    ], o;
  }
  function Zg(A) {
    const e = {};
    return (t) => (e[t] === void 0 && (e[t] = A(t)), e[t]);
  }
  const qg = {
    m: "margin",
    p: "padding"
  }, Ah = {
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
  }, Yl = {
    marginX: "mx",
    marginY: "my",
    paddingX: "px",
    paddingY: "py"
  }, eh = Zg((A) => {
    if (A.length > 2) if (Yl[A]) A = Yl[A];
    else return [
      A
    ];
    const [e, t] = A.split(""), r = qg[e], n = Ah[t] || "";
    return Array.isArray(n) ? n.map((o) => r + o) : [
      r + n
    ];
  }), Zs = [
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
  ], qs = [
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
    ...Zs,
    ...qs
  ];
  function Fn(A, e, t, r) {
    const n = Ti(A, e, true) ?? t;
    return typeof n == "number" || typeof n == "string" ? (o) => typeof o == "string" ? o : typeof n == "string" ? `calc(${o} * ${n})` : n * o : Array.isArray(n) ? (o) => {
      if (typeof o == "string") return o;
      const i = Math.abs(o), a = n[i];
      return o >= 0 ? a : typeof a == "number" ? -a : `-${a}`;
    } : typeof n == "function" ? n : () => {
    };
  }
  Al = function(A) {
    return Fn(A, "spacing", 8);
  };
  Un = function(A, e) {
    return typeof e == "string" || e == null ? e : A(e);
  };
  function th(A, e) {
    return (t) => A.reduce((r, n) => (r[n] = Un(e, t), r), {});
  }
  function rh(A, e, t, r) {
    if (!e.includes(t)) return null;
    const n = eh(t), o = th(n, r), i = A[t];
    return mt(A, i, o);
  }
  function wd(A, e) {
    const t = Al(A.theme);
    return Object.keys(A).map((r) => rh(A, e, r, t)).reduce(qr, {});
  }
  function jA(A) {
    return wd(A, Zs);
  }
  jA.propTypes = {};
  jA.filterProps = Zs;
  function zA(A) {
    return wd(A, qs);
  }
  zA.propTypes = {};
  zA.filterProps = qs;
  function Cd(A = 8, e = Al({
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
  function ki(...A) {
    const e = A.reduce((r, n) => (n.filterProps.forEach((o) => {
      r[o] = n;
    }), r), {}), t = (r) => Object.keys(r).reduce((n, o) => e[o] ? qr(n, e[o](r)) : n, {});
    return t.propTypes = {}, t.filterProps = A.reduce((r, n) => r.concat(n.filterProps), []), t;
  }
  function ke(A) {
    return typeof A != "number" ? A : `${A}px solid`;
  }
  function Pe(A, e) {
    return ZA({
      prop: A,
      themeKey: "borders",
      transform: e
    });
  }
  const nh = Pe("border", ke), oh = Pe("borderTop", ke), ih = Pe("borderRight", ke), ah = Pe("borderBottom", ke), sh = Pe("borderLeft", ke), lh = Pe("borderColor"), ch = Pe("borderTopColor"), uh = Pe("borderRightColor"), dh = Pe("borderBottomColor"), fh = Pe("borderLeftColor"), ph = Pe("outline", ke), gh = Pe("outlineColor"), Li = (A) => {
    if (A.borderRadius !== void 0 && A.borderRadius !== null) {
      const e = Fn(A.theme, "shape.borderRadius", 4), t = (r) => ({
        borderRadius: Un(e, r)
      });
      return mt(A, A.borderRadius, t);
    }
    return null;
  };
  Li.propTypes = {};
  Li.filterProps = [
    "borderRadius"
  ];
  ki(nh, oh, ih, ah, sh, lh, ch, uh, dh, fh, Li, ph, gh);
  const Ri = (A) => {
    if (A.gap !== void 0 && A.gap !== null) {
      const e = Fn(A.theme, "spacing", 8), t = (r) => ({
        gap: Un(e, r)
      });
      return mt(A, A.gap, t);
    }
    return null;
  };
  Ri.propTypes = {};
  Ri.filterProps = [
    "gap"
  ];
  const Oi = (A) => {
    if (A.columnGap !== void 0 && A.columnGap !== null) {
      const e = Fn(A.theme, "spacing", 8), t = (r) => ({
        columnGap: Un(e, r)
      });
      return mt(A, A.columnGap, t);
    }
    return null;
  };
  Oi.propTypes = {};
  Oi.filterProps = [
    "columnGap"
  ];
  const Mi = (A) => {
    if (A.rowGap !== void 0 && A.rowGap !== null) {
      const e = Fn(A.theme, "spacing", 8), t = (r) => ({
        rowGap: Un(e, r)
      });
      return mt(A, A.rowGap, t);
    }
    return null;
  };
  Mi.propTypes = {};
  Mi.filterProps = [
    "rowGap"
  ];
  const hh = ZA({
    prop: "gridColumn"
  }), Bh = ZA({
    prop: "gridRow"
  }), mh = ZA({
    prop: "gridAutoFlow"
  }), vh = ZA({
    prop: "gridAutoColumns"
  }), wh = ZA({
    prop: "gridAutoRows"
  }), Ch = ZA({
    prop: "gridTemplateColumns"
  }), yh = ZA({
    prop: "gridTemplateRows"
  }), bh = ZA({
    prop: "gridTemplateAreas"
  }), Qh = ZA({
    prop: "gridArea"
  });
  ki(Ri, Oi, Mi, hh, Bh, mh, vh, wh, Ch, yh, bh, Qh);
  function Cr(A, e) {
    return e === "grey" ? e : A;
  }
  const Fh = ZA({
    prop: "color",
    themeKey: "palette",
    transform: Cr
  }), Uh = ZA({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: Cr
  }), Sh = ZA({
    prop: "backgroundColor",
    themeKey: "palette",
    transform: Cr
  });
  ki(Fh, Uh, Sh);
  function xe(A) {
    return A <= 1 && A !== 0 ? `${A * 100}%` : A;
  }
  const xh = ZA({
    prop: "width",
    transform: xe
  }), el = (A) => {
    if (A.maxWidth !== void 0 && A.maxWidth !== null) {
      const e = (t) => {
        var _a2, _b2, _c2, _d2, _e2;
        const r = ((_c2 = (_b2 = (_a2 = A.theme) == null ? void 0 : _a2.breakpoints) == null ? void 0 : _b2.values) == null ? void 0 : _c2[t]) || Hi[t];
        return r ? ((_e2 = (_d2 = A.theme) == null ? void 0 : _d2.breakpoints) == null ? void 0 : _e2.unit) !== "px" ? {
          maxWidth: `${r}${A.theme.breakpoints.unit}`
        } : {
          maxWidth: r
        } : {
          maxWidth: xe(t)
        };
      };
      return mt(A, A.maxWidth, e);
    }
    return null;
  };
  el.filterProps = [
    "maxWidth"
  ];
  const Eh = ZA({
    prop: "minWidth",
    transform: xe
  }), Ih = ZA({
    prop: "height",
    transform: xe
  }), Hh = ZA({
    prop: "maxHeight",
    transform: xe
  }), Th = ZA({
    prop: "minHeight",
    transform: xe
  });
  ZA({
    prop: "size",
    cssProperty: "width",
    transform: xe
  });
  ZA({
    prop: "size",
    cssProperty: "height",
    transform: xe
  });
  const kh = ZA({
    prop: "boxSizing"
  });
  ki(xh, el, Eh, Ih, Hh, Th, kh);
  const Sn = {
    border: {
      themeKey: "borders",
      transform: ke
    },
    borderTop: {
      themeKey: "borders",
      transform: ke
    },
    borderRight: {
      themeKey: "borders",
      transform: ke
    },
    borderBottom: {
      themeKey: "borders",
      transform: ke
    },
    borderLeft: {
      themeKey: "borders",
      transform: ke
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
      transform: ke
    },
    outlineColor: {
      themeKey: "palette"
    },
    borderRadius: {
      themeKey: "shape.borderRadius",
      style: Li
    },
    color: {
      themeKey: "palette",
      transform: Cr
    },
    bgcolor: {
      themeKey: "palette",
      cssProperty: "backgroundColor",
      transform: Cr
    },
    backgroundColor: {
      themeKey: "palette",
      transform: Cr
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
      style: Ri
    },
    rowGap: {
      style: Mi
    },
    columnGap: {
      style: Oi
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
      transform: xe
    },
    maxWidth: {
      style: el
    },
    minWidth: {
      transform: xe
    },
    height: {
      transform: xe
    },
    maxHeight: {
      transform: xe
    },
    minHeight: {
      transform: xe
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
  function Lh(...A) {
    const e = A.reduce((r, n) => r.concat(Object.keys(n)), []), t = new Set(e);
    return A.every((r) => t.size === Object.keys(r).length);
  }
  function Rh(A, e) {
    return typeof A == "function" ? A(e) : A;
  }
  function Oh() {
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
      const d = Ti(n, l) || {};
      return u ? u(i) : mt(i, r, (p) => {
        let B = Ro(d, c, p);
        return p === B && typeof p == "string" && (B = Ro(d, c, `${t}${p === "default" ? "" : bA(p)}`, p)), s === false ? B : {
          [s]: B
        };
      });
    }
    function e(t) {
      const { sx: r, theme: n = {}, nested: o } = t || {};
      if (!r) return null;
      const i = n.unstable_sxConfig ?? Sn;
      function a(s) {
        let l = s;
        if (typeof s == "function") l = s(n);
        else if (typeof s != "object") return s;
        if (!l) return null;
        const c = vd(n.breakpoints), u = Object.keys(c);
        let d = c;
        return Object.keys(l).forEach((f) => {
          const p = Rh(l[f], n);
          if (p != null) if (typeof p == "object") if (i[f]) d = qr(d, A(f, p, n, i));
          else {
            const B = mt({
              theme: n
            }, p, (b) => ({
              [f]: b
            }));
            Lh(B, p) ? d[f] = e({
              sx: p,
              theme: n,
              nested: true
            }) : d = qr(d, B);
          }
          else d = qr(d, A(f, p, n, i));
        }), !o && n.modularCssLayers ? {
          "@layer sx": zl(n, za(u, d))
        } : zl(n, za(u, d));
      }
      return Array.isArray(r) ? r.map(a) : a(r);
    }
    return e;
  }
  const Lt = Oh();
  Lt.filterProps = [
    "sx"
  ];
  function Mh(A, e) {
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
  tl = function(A = {}, ...e) {
    const { breakpoints: t = {}, palette: r = {}, spacing: n, shape: o = {}, ...i } = A, a = $g(t), s = Cd(n);
    let l = ae({
      breakpoints: a,
      direction: "ltr",
      components: {},
      palette: {
        mode: "light",
        ...r
      },
      spacing: s,
      shape: {
        ...Xg,
        ...o
      }
    }, i);
    return l = zg(l), l.applyStyles = Mh, l = e.reduce((c, u) => ae(c, u), l), l.unstable_sxConfig = {
      ...Sn,
      ...i == null ? void 0 : i.unstable_sxConfig
    }, l.unstable_sx = function(u) {
      return Lt({
        sx: u,
        theme: this
      });
    }, l;
  };
  function Kh(A) {
    return Object.keys(A).length === 0;
  }
  function rl(A = null) {
    const e = h.useContext(bn);
    return !e || Kh(e) ? A : e;
  }
  const Dh = tl();
  nl = function(A = Dh) {
    return rl(A);
  };
  function aa(A) {
    const e = Ht(A);
    return A !== e && e.styles ? (e.styles.match(/^@layer\s+[^{]*$/) || (e.styles = `@layer global{${e.styles}}`), e) : A;
  }
  function yd({ styles: A, themeId: e, defaultTheme: t = {} }) {
    const r = nl(t), n = e && r[e] || r;
    let o = typeof A == "function" ? A(n) : A;
    return n.modularCssLayers && (Array.isArray(o) ? o = o.map((i) => aa(typeof i == "function" ? i(n) : i)) : o = aa(o)), E.jsx(pd, {
      styles: o
    });
  }
  const Ph = (A) => {
    var _a2;
    const e = {
      systemProps: {},
      otherProps: {}
    }, t = ((_a2 = A == null ? void 0 : A.theme) == null ? void 0 : _a2.unstable_sxConfig) ?? Sn;
    return Object.keys(A).forEach((r) => {
      t[r] ? e.systemProps[r] = A[r] : e.otherProps[r] = A[r];
    }), e;
  };
  bd = function(A) {
    const { sx: e, ...t } = A, { systemProps: r, otherProps: n } = Ph(t);
    let o;
    return Array.isArray(e) ? o = [
      r,
      ...e
    ] : typeof e == "function" ? o = (...i) => {
      const a = e(...i);
      return qe(a) ? {
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
  const Jl = (A) => A, _h = () => {
    let A = Jl;
    return {
      configure(e) {
        A = e;
      },
      generate(e) {
        return A(e);
      },
      reset() {
        A = Jl;
      }
    };
  }, Qd = _h();
  function Fd(A) {
    var e, t, r = "";
    if (typeof A == "string" || typeof A == "number") r += A;
    else if (typeof A == "object") if (Array.isArray(A)) {
      var n = A.length;
      for (e = 0; e < n; e++) A[e] && (t = Fd(A[e])) && (r && (r += " "), r += t);
    } else for (t in A) A[t] && (r && (r += " "), r += t);
    return r;
  }
  CA = function() {
    for (var A, e, t = 0, r = "", n = arguments.length; t < n; t++) (A = arguments[t]) && (e = Fd(A)) && (r && (r += " "), r += e);
    return r;
  };
  function Nh(A = {}) {
    const { themeId: e, defaultTheme: t, defaultClassName: r = "MuiBox-root", generateClassName: n } = A, o = gd("div", {
      shouldForwardProp: (a) => a !== "theme" && a !== "sx" && a !== "as"
    })(Lt);
    return h.forwardRef(function(s, l) {
      const c = nl(t), { className: u, component: d = "div", ...f } = bd(s);
      return E.jsx(o, {
        as: d,
        ref: l,
        className: CA(u, n ? n(r) : r),
        theme: e && c[e] || c,
        ...f
      });
    });
  }
  const Gh = {
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
  NA = function(A, e, t = "Mui") {
    const r = Gh[e];
    return r ? `${t}-${r}` : `${Qd.generate(A)}-${e}`;
  };
  DA = function(A, e, t = "Mui") {
    const r = {};
    return e.forEach((n) => {
      r[n] = NA(A, n, t);
    }), r;
  };
  function Ud(A) {
    const { variants: e, ...t } = A, r = {
      variants: e,
      style: Ht(t),
      isProcessed: true
    };
    return r.style === t || e && e.forEach((n) => {
      typeof n.style != "function" && (n.style = Ht(n.style));
    }), r;
  }
  const Vh = tl();
  function sa(A) {
    return A !== "ownerState" && A !== "theme" && A !== "sx" && A !== "as";
  }
  function Wt(A, e) {
    return e && A && typeof A == "object" && A.styles && !A.styles.startsWith("@layer") && (A.styles = `@layer ${e}{${String(A.styles)}}`), A;
  }
  function $h(A) {
    return A ? (e, t) => t[A] : null;
  }
  function Wh(A, e, t) {
    A.theme = Xh(A.theme) ? t : A.theme[e] || A.theme;
  }
  function Uo(A, e, t) {
    const r = typeof e == "function" ? e(A) : e;
    if (Array.isArray(r)) return r.flatMap((n) => Uo(A, n, t));
    if (Array.isArray(r == null ? void 0 : r.variants)) {
      let n;
      if (r.isProcessed) n = t ? Wt(r.style, t) : r.style;
      else {
        const { variants: o, ...i } = r;
        n = t ? Wt(Ht(i), t) : i;
      }
      return Sd(A, r.variants, [
        n
      ], t);
    }
    return (r == null ? void 0 : r.isProcessed) ? t ? Wt(Ht(r.style), t) : r.style : t ? Wt(Ht(r), t) : r;
  }
  function Sd(A, e, t = [], r = void 0) {
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
      }, t.push(r ? Wt(Ht(i.style(n)), r) : i.style(n))) : t.push(r ? Wt(Ht(i.style), r) : i.style);
    }
    return t;
  }
  jh = function(A = {}) {
    const { themeId: e, defaultTheme: t = Vh, rootShouldForwardProp: r = sa, slotShouldForwardProp: n = sa } = A;
    function o(a) {
      Wh(a, e, t);
    }
    return (a, s = {}) => {
      _g(a, (m) => m.filter((S) => S !== Lt));
      const { name: l, slot: c, skipVariantsResolver: u, skipSx: d, overridesResolver: f = $h(Jh(c)), ...p } = s, B = l && l.startsWith("Mui") || c ? "components" : "custom", b = u !== void 0 ? u : c && c !== "Root" && c !== "root" || false, v = d || false;
      let Q = sa;
      c === "Root" || c === "root" ? Q = r : c ? Q = n : Yh(a) && (Q = void 0);
      const w = gd(a, {
        shouldForwardProp: Q,
        label: zh(),
        ...p
      }), C = (m) => {
        if (m.__emotion_real === m) return m;
        if (typeof m == "function") return function(H) {
          return Uo(H, m, H.theme.modularCssLayers ? B : void 0);
        };
        if (qe(m)) {
          const S = Ud(m);
          return function(I) {
            return S.variants ? Uo(I, S, I.theme.modularCssLayers ? B : void 0) : I.theme.modularCssLayers ? Wt(S.style, B) : S.style;
          };
        }
        return m;
      }, U = (...m) => {
        const S = [], H = m.map(C), I = [];
        if (S.push(o), l && f && I.push(function(L) {
          var _a2, _b2;
          const M = (_b2 = (_a2 = L.theme.components) == null ? void 0 : _a2[l]) == null ? void 0 : _b2.styleOverrides;
          if (!M) return null;
          const O = {};
          for (const Y in M) O[Y] = Uo(L, M[Y], L.theme.modularCssLayers ? "theme" : void 0);
          return f(L, O);
        }), l && !b && I.push(function(L) {
          var _a2, _b2, _c2;
          const M = (_c2 = (_b2 = (_a2 = L.theme) == null ? void 0 : _a2.components) == null ? void 0 : _b2[l]) == null ? void 0 : _c2.variants;
          return M ? Sd(L, M, [], L.theme.modularCssLayers ? "theme" : void 0) : null;
        }), v || I.push(Lt), Array.isArray(H[0])) {
          const R = H.shift(), L = new Array(S.length).fill(""), K = new Array(I.length).fill("");
          let M;
          M = [
            ...L,
            ...R,
            ...K
          ], M.raw = [
            ...L,
            ...R.raw,
            ...K
          ], S.unshift(M);
        }
        const g = [
          ...S,
          ...H,
          ...I
        ], T = w(...g);
        return a.muiName && (T.muiName = a.muiName), T;
      };
      return w.withConfig && (U.withConfig = w.withConfig), U;
    };
  };
  function zh(A, e) {
    return void 0;
  }
  function Xh(A) {
    for (const e in A) return false;
    return true;
  }
  function Yh(A) {
    return typeof A == "string" && A.charCodeAt(0) > 96;
  }
  function Jh(A) {
    return A && A.charAt(0).toLowerCase() + A.slice(1);
  }
  Xa = function(A, e) {
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
            t[n][s] = Xa(o[s], i[s]);
          }
        }
      } else t[n] === void 0 && (t[n] = A[n]);
    }
    return t;
  };
  nt = typeof window < "u" ? h.useLayoutEffect : h.useEffect;
  function fr(A, e = Number.MIN_SAFE_INTEGER, t = Number.MAX_SAFE_INTEGER) {
    return Math.max(e, Math.min(A, t));
  }
  function ol(A, e = 0, t = 1) {
    return fr(A, e, t);
  }
  function Zh(A) {
    A = A.slice(1);
    const e = new RegExp(`.{1,${A.length >= 6 ? 2 : 1}}`, "g");
    let t = A.match(e);
    return t && t[0].length === 1 && (t = t.map((r) => r + r)), t ? `rgb${t.length === 4 ? "a" : ""}(${t.map((r, n) => n < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
  }
  function Rt(A) {
    if (A.type) return A;
    if (A.charAt(0) === "#") return Rt(Zh(A));
    const e = A.indexOf("("), t = A.substring(0, e);
    if (![
      "rgb",
      "rgba",
      "hsl",
      "hsla",
      "color"
    ].includes(t)) throw new Error(Bt(9, A));
    let r = A.substring(e + 1, A.length - 1), n;
    if (t === "color") {
      if (r = r.split(" "), n = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), ![
        "srgb",
        "display-p3",
        "a98-rgb",
        "prophoto-rgb",
        "rec-2020"
      ].includes(n)) throw new Error(Bt(10, n));
    } else r = r.split(",");
    return r = r.map((o) => parseFloat(o)), {
      type: t,
      values: r,
      colorSpace: n
    };
  }
  const qh = (A) => {
    const e = Rt(A);
    return e.values.slice(0, 3).map((t, r) => e.type.includes("hsl") && r !== 0 ? `${t}%` : t).join(" ");
  }, Gr = (A, e) => {
    try {
      return qh(A);
    } catch {
      return A;
    }
  };
  function Ki(A) {
    const { type: e, colorSpace: t } = A;
    let { values: r } = A;
    return e.includes("rgb") ? r = r.map((n, o) => o < 3 ? parseInt(n, 10) : n) : e.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), e.includes("color") ? r = `${t} ${r.join(" ")}` : r = `${r.join(", ")}`, `${e}(${r})`;
  }
  function xd(A) {
    A = Rt(A);
    const { values: e } = A, t = e[0], r = e[1] / 100, n = e[2] / 100, o = r * Math.min(n, 1 - n), i = (l, c = (l + t / 30) % 12) => n - o * Math.max(Math.min(c - 3, 9 - c, 1), -1);
    let a = "rgb";
    const s = [
      Math.round(i(0) * 255),
      Math.round(i(8) * 255),
      Math.round(i(4) * 255)
    ];
    return A.type === "hsla" && (a += "a", s.push(e[3])), Ki({
      type: a,
      values: s
    });
  }
  function Ya(A) {
    A = Rt(A);
    let e = A.type === "hsl" || A.type === "hsla" ? Rt(xd(A)).values : A.values;
    return e = e.map((t) => (A.type !== "color" && (t /= 255), t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4)), Number((0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2]).toFixed(3));
  }
  function AB(A, e) {
    const t = Ya(A), r = Ya(e);
    return (Math.max(t, r) + 0.05) / (Math.min(t, r) + 0.05);
  }
  Ot = function(A, e) {
    return A = Rt(A), e = ol(e), (A.type === "rgb" || A.type === "hsl") && (A.type += "a"), A.type === "color" ? A.values[3] = `/${e}` : A.values[3] = e, Ki(A);
  };
  function Mn(A, e, t) {
    try {
      return Ot(A, e);
    } catch {
      return A;
    }
  }
  gn = function(A, e) {
    if (A = Rt(A), e = ol(e), A.type.includes("hsl")) A.values[2] *= 1 - e;
    else if (A.type.includes("rgb") || A.type.includes("color")) for (let t = 0; t < 3; t += 1) A.values[t] *= 1 - e;
    return Ki(A);
  };
  function LA(A, e, t) {
    try {
      return gn(A, e);
    } catch {
      return A;
    }
  }
  hn = function(A, e) {
    if (A = Rt(A), e = ol(e), A.type.includes("hsl")) A.values[2] += (100 - A.values[2]) * e;
    else if (A.type.includes("rgb")) for (let t = 0; t < 3; t += 1) A.values[t] += (255 - A.values[t]) * e;
    else if (A.type.includes("color")) for (let t = 0; t < 3; t += 1) A.values[t] += (1 - A.values[t]) * e;
    return Ki(A);
  };
  function RA(A, e, t) {
    try {
      return hn(A, e);
    } catch {
      return A;
    }
  }
  function eB(A, e = 0.15) {
    return Ya(A) > 0.5 ? gn(A, e) : hn(A, e);
  }
  function Kn(A, e, t) {
    try {
      return eB(A, e);
    } catch {
      return A;
    }
  }
  Zl = function(...A) {
    return A.reduce((e, t) => t == null ? e : function(...n) {
      e.apply(this, n), t.apply(this, n);
    }, () => {
    });
  };
  function Ed(A, e = 166) {
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
  la = function(A, e) {
    var _a2, _b2, _c2;
    return h.isValidElement(A) && e.indexOf(A.type.muiName ?? ((_c2 = (_b2 = (_a2 = A.type) == null ? void 0 : _a2._payload) == null ? void 0 : _b2.value) == null ? void 0 : _c2.muiName)) !== -1;
  };
  function ye(A) {
    return A && A.ownerDocument || document;
  }
  function vt(A) {
    return ye(A).defaultView || window;
  }
  function ql(A, e) {
    typeof A == "function" ? A(e) : A && (A.current = e);
  }
  let Ac = 0;
  function tB(A) {
    const [e, t] = h.useState(A), r = A || e;
    return h.useEffect(() => {
      e == null && (Ac += 1, t(`mui-${Ac}`));
    }, [
      e
    ]), r;
  }
  const rB = {
    ...Ga
  }, ec = rB.useId;
  Di = function(A) {
    if (ec !== void 0) {
      const e = ec();
      return A ?? e;
    }
    return tB(A);
  };
  Ja = function({ controlled: A, default: e, name: t, state: r = "value" }) {
    const { current: n } = h.useRef(A !== void 0), [o, i] = h.useState(e), a = n ? A : o, s = h.useCallback((l) => {
      n || i(l);
    }, []);
    return [
      a,
      s
    ];
  };
  function rt(A) {
    const e = h.useRef(A);
    return nt(() => {
      e.current = A;
    }), h.useRef((...t) => (0, e.current)(...t)).current;
  }
  be = function(...A) {
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
  const tc = {};
  function Id(A, e) {
    const t = h.useRef(tc);
    return t.current === tc && (t.current = A(e)), t;
  }
  const nB = [];
  function oB(A) {
    h.useEffect(A, nB);
  }
  class il {
    static create() {
      return new il();
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
  function Hd() {
    const A = Id(il.create).current;
    return oB(A.disposeEffect), A;
  }
  function Oo(A) {
    try {
      return A.matches(":focus-visible");
    } catch {
    }
    return false;
  }
  function Td(A = window) {
    const e = A.document.documentElement.clientWidth;
    return A.innerWidth - e;
  }
  const iB = {
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
  GA = function(A, e, t = void 0) {
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
  function aB(A) {
    return typeof A == "string";
  }
  function kd(A, e, t) {
    return A === void 0 || aB(A) ? e : {
      ...e,
      ownerState: {
        ...e.ownerState,
        ...t
      }
    };
  }
  function An(A, e = []) {
    if (A === void 0) return {};
    const t = {};
    return Object.keys(A).filter((r) => r.match(/^on[A-Z]/) && typeof A[r] == "function" && !e.includes(r)).forEach((r) => {
      t[r] = A[r];
    }), t;
  }
  function rc(A) {
    if (A === void 0) return {};
    const e = {};
    return Object.keys(A).filter((t) => !(t.match(/^on[A-Z]/) && typeof A[t] == "function")).forEach((t) => {
      e[t] = A[t];
    }), e;
  }
  function Ld(A) {
    const { getSlotProps: e, additionalProps: t, externalSlotProps: r, externalForwardedProps: n, className: o } = A;
    if (!e) {
      const f = CA(t == null ? void 0 : t.className, o, n == null ? void 0 : n.className, r == null ? void 0 : r.className), p = {
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
    const i = An({
      ...n,
      ...r
    }), a = rc(r), s = rc(n), l = e(i), c = CA(l == null ? void 0 : l.className, t == null ? void 0 : t.className, o, n == null ? void 0 : n.className, r == null ? void 0 : r.className), u = {
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
  function Rd(A, e, t) {
    return typeof A == "function" ? A(e, t) : A;
  }
  function gt(A) {
    var _a2;
    const { elementType: e, externalSlotProps: t, ownerState: r, skipResolvingSlotProps: n = false, ...o } = A, i = n ? {} : Rd(t, r), { props: a, internalRef: s } = Ld({
      ...o,
      externalSlotProps: i
    }), l = be(s, i == null ? void 0 : i.ref, (_a2 = A.additionalProps) == null ? void 0 : _a2.ref);
    return kd(e, {
      ...a,
      ref: l
    }, r);
  }
  function xn(A) {
    var _a2;
    return parseInt(h.version, 10) >= 19 ? ((_a2 = A == null ? void 0 : A.props) == null ? void 0 : _a2.ref) || null : (A == null ? void 0 : A.ref) || null;
  }
  const Od = h.createContext(null);
  function al() {
    return h.useContext(Od);
  }
  const sB = typeof Symbol == "function" && Symbol.for, lB = sB ? /* @__PURE__ */ Symbol.for("mui.nested") : "__THEME_NESTED__";
  function cB(A, e) {
    return typeof e == "function" ? e(A) : {
      ...A,
      ...e
    };
  }
  function uB(A) {
    const { children: e, theme: t } = A, r = al(), n = h.useMemo(() => {
      const o = r === null ? {
        ...t
      } : cB(r, t);
      return o != null && (o[lB] = r !== null), o;
    }, [
      t,
      r
    ]);
    return E.jsx(Od.Provider, {
      value: n,
      children: e
    });
  }
  const Md = h.createContext();
  function dB({ value: A, ...e }) {
    return E.jsx(Md.Provider, {
      value: A ?? true,
      ...e
    });
  }
  const Kd = () => h.useContext(Md) ?? false, Dd = h.createContext(void 0);
  function fB({ value: A, children: e }) {
    return E.jsx(Dd.Provider, {
      value: A,
      children: e
    });
  }
  function pB(A) {
    const { theme: e, name: t, props: r } = A;
    if (!e || !e.components || !e.components[t]) return r;
    const n = e.components[t];
    return n.defaultProps ? Xa(n.defaultProps, r) : !n.styleOverrides && !n.variants ? Xa(n, r) : r;
  }
  function gB({ props: A, name: e }) {
    const t = h.useContext(Dd);
    return pB({
      props: A,
      name: e,
      theme: {
        components: t
      }
    });
  }
  function hB(A) {
    const e = rl(), t = Di() || "", { modularCssLayers: r } = A;
    let n = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
    return !r || e !== null ? n = "" : typeof r == "string" ? n = r.replace(/mui(?!\.)/g, n) : n = `@layer ${n};`, nt(() => {
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
    ]), n ? E.jsx(yd, {
      styles: n
    }) : null;
  }
  const nc = {};
  function oc(A, e, t, r = false) {
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
  function Pd(A) {
    const { children: e, theme: t, themeId: r } = A, n = rl(nc), o = al() || nc, i = oc(r, n, t), a = oc(r, o, t, true), s = (r ? i[r] : i).direction === "rtl", l = hB(i);
    return E.jsx(uB, {
      theme: a,
      children: E.jsx(bn.Provider, {
        value: i,
        children: E.jsx(dB, {
          value: s,
          children: E.jsxs(fB, {
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
  const ic = {
    theme: void 0
  };
  function BB(A) {
    let e, t;
    return function(n) {
      let o = e;
      return (o === void 0 || n.theme !== t) && (ic.theme = n.theme, o = Ud(A(ic)), e = o, t = n.theme), o;
    };
  }
  const sl = "mode", ll = "color-scheme", mB = "data-color-scheme";
  function vB(A) {
    const { defaultMode: e = "system", defaultLightColorScheme: t = "light", defaultDarkColorScheme: r = "dark", modeStorageKey: n = sl, colorSchemeStorageKey: o = ll, attribute: i = mB, colorSchemeNode: a = "document.documentElement", nonce: s } = A || {};
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
  function wB() {
  }
  const CB = ({ key: A, storageWindow: e }) => (!e && typeof window < "u" && (e = window), {
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
      if (!e) return wB;
      const r = (n) => {
        const o = n.newValue;
        n.key === A && t(o);
      };
      return e.addEventListener("storage", r), () => {
        e.removeEventListener("storage", r);
      };
    }
  });
  function ca() {
  }
  function ac(A) {
    if (typeof window < "u" && typeof window.matchMedia == "function" && A === "system") return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function _d(A, e) {
    if (A.mode === "light" || A.mode === "system" && A.systemMode === "light") return e("light");
    if (A.mode === "dark" || A.mode === "system" && A.systemMode === "dark") return e("dark");
  }
  function yB(A) {
    return _d(A, (e) => {
      if (e === "light") return A.lightColorScheme;
      if (e === "dark") return A.darkColorScheme;
    });
  }
  function bB(A) {
    const { defaultMode: e = "light", defaultLightColorScheme: t, defaultDarkColorScheme: r, supportedColorSchemes: n = [], modeStorageKey: o = sl, colorSchemeStorageKey: i = ll, storageWindow: a = typeof window > "u" ? void 0 : window, storageManager: s = CB, noSsr: l = false } = A, c = n.join(","), u = n.length > 1, d = h.useMemo(() => s == null ? void 0 : s({
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
    ]), [B, b] = h.useState(() => {
      const H = (d == null ? void 0 : d.get(e)) || e, I = (f == null ? void 0 : f.get(t)) || t, g = (p == null ? void 0 : p.get(r)) || r;
      return {
        mode: H,
        systemMode: ac(H),
        lightColorScheme: I,
        darkColorScheme: g
      };
    }), [v, Q] = h.useState(l || !u);
    h.useEffect(() => {
      Q(true);
    }, []);
    const w = yB(B), C = h.useCallback((H) => {
      b((I) => {
        if (H === I.mode) return I;
        const g = H ?? e;
        return d == null ? void 0 : d.set(g), {
          ...I,
          mode: g,
          systemMode: ac(g)
        };
      });
    }, [
      d,
      e
    ]), U = h.useCallback((H) => {
      H ? typeof H == "string" ? H && !c.includes(H) ? console.error(`\`${H}\` does not exist in \`theme.colorSchemes\`.`) : b((I) => {
        const g = {
          ...I
        };
        return _d(I, (T) => {
          T === "light" && (f == null ? void 0 : f.set(H), g.lightColorScheme = H), T === "dark" && (p == null ? void 0 : p.set(H), g.darkColorScheme = H);
        }), g;
      }) : b((I) => {
        const g = {
          ...I
        }, T = H.light === null ? t : H.light, R = H.dark === null ? r : H.dark;
        return T && (c.includes(T) ? (g.lightColorScheme = T, f == null ? void 0 : f.set(T)) : console.error(`\`${T}\` does not exist in \`theme.colorSchemes\`.`)), R && (c.includes(R) ? (g.darkColorScheme = R, p == null ? void 0 : p.set(R)) : console.error(`\`${R}\` does not exist in \`theme.colorSchemes\`.`)), g;
      }) : b((I) => (f == null ? void 0 : f.set(t), p == null ? void 0 : p.set(r), {
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
    ]), m = h.useCallback((H) => {
      B.mode === "system" && b((I) => {
        const g = (H == null ? void 0 : H.matches) ? "dark" : "light";
        return I.systemMode === g ? I : {
          ...I,
          systemMode: g
        };
      });
    }, [
      B.mode
    ]), S = h.useRef(m);
    return S.current = m, h.useEffect(() => {
      if (typeof window.matchMedia != "function" || !u) return;
      const H = (...g) => S.current(...g), I = window.matchMedia("(prefers-color-scheme: dark)");
      return I.addListener(H), H(I), () => {
        I.removeListener(H);
      };
    }, [
      u
    ]), h.useEffect(() => {
      if (u) {
        const H = (d == null ? void 0 : d.subscribe((T) => {
          (!T || [
            "light",
            "dark",
            "system"
          ].includes(T)) && C(T || e);
        })) || ca, I = (f == null ? void 0 : f.subscribe((T) => {
          (!T || c.match(T)) && U({
            light: T
          });
        })) || ca, g = (p == null ? void 0 : p.subscribe((T) => {
          (!T || c.match(T)) && U({
            dark: T
          });
        })) || ca;
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
      mode: v ? B.mode : void 0,
      systemMode: v ? B.systemMode : void 0,
      colorScheme: v ? w : void 0,
      setMode: C,
      setColorScheme: U
    };
  }
  const QB = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
  function FB(A) {
    const { themeId: e, theme: t = {}, modeStorageKey: r = sl, colorSchemeStorageKey: n = ll, disableTransitionOnChange: o = false, defaultColorScheme: i, resolveTheme: a } = A, s = {
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
    function f(v) {
      var _a2, _b2, _c2, _d2;
      const { children: Q, theme: w, modeStorageKey: C = r, colorSchemeStorageKey: U = n, disableTransitionOnChange: m = o, storageManager: S, storageWindow: H = typeof window > "u" ? void 0 : window, documentNode: I = typeof document > "u" ? void 0 : document, colorSchemeNode: g = typeof document > "u" ? void 0 : document.documentElement, disableNestedContext: T = false, disableStyleSheetGeneration: R = false, defaultMode: L = "system", noSsr: K } = v, M = h.useRef(false), O = al(), Y = h.useContext(l), N = !!Y && !T, P = h.useMemo(() => w || (typeof t == "function" ? t() : t), [
        w
      ]), AA = P[e], Z = AA || P, { colorSchemes: iA = u, components: D = d, cssVarPrefix: J } = Z, j = Object.keys(iA).filter((rA) => !!iA[rA]).join(","), tA = h.useMemo(() => j.split(","), [
        j
      ]), mA = typeof i == "string" ? i : i.light, dA = typeof i == "string" ? i : i.dark, nA = iA[mA] && iA[dA] ? L : ((_b2 = (_a2 = iA[Z.defaultColorScheme]) == null ? void 0 : _a2.palette) == null ? void 0 : _b2.mode) || ((_c2 = Z.palette) == null ? void 0 : _c2.mode), { mode: eA, setMode: sA, systemMode: lA, lightColorScheme: y, darkColorScheme: x, colorScheme: F, setColorScheme: V } = bB({
        supportedColorSchemes: tA,
        defaultLightColorScheme: mA,
        defaultDarkColorScheme: dA,
        modeStorageKey: C,
        colorSchemeStorageKey: U,
        defaultMode: nA,
        storageManager: S,
        storageWindow: H,
        noSsr: K
      });
      let z = eA, W = F;
      N && (z = Y.mode, W = Y.colorScheme);
      const gA = h.useMemo(() => {
        var _a3;
        const rA = W || Z.defaultColorScheme, X = ((_a3 = Z.generateThemeVars) == null ? void 0 : _a3.call(Z)) || Z.vars, q = {
          ...Z,
          components: D,
          colorSchemes: iA,
          cssVarPrefix: J,
          vars: X
        };
        if (typeof q.generateSpacing == "function" && (q.spacing = q.generateSpacing()), rA) {
          const uA = iA[rA];
          uA && typeof uA == "object" && Object.keys(uA).forEach((vA) => {
            uA[vA] && typeof uA[vA] == "object" ? q[vA] = {
              ...q[vA],
              ...uA[vA]
            } : q[vA] = uA[vA];
          });
        }
        return a ? a(q) : q;
      }, [
        Z,
        W,
        D,
        iA,
        J
      ]), BA = Z.colorSchemeSelector;
      nt(() => {
        if (W && g && BA && BA !== "media") {
          const rA = BA;
          let X = BA;
          if (rA === "class" && (X = ".%s"), rA === "data" && (X = "[data-%s]"), (rA == null ? void 0 : rA.startsWith("data-")) && !rA.includes("%s") && (X = `[${rA}="%s"]`), X.startsWith(".")) g.classList.remove(...tA.map((q) => X.substring(1).replace("%s", q))), g.classList.add(X.substring(1).replace("%s", W));
          else {
            const q = X.replace("%s", W).match(/\[([^\]]+)\]/);
            if (q) {
              const [uA, vA] = q[1].split("=");
              vA || tA.forEach((yA) => {
                g.removeAttribute(uA.replace(W, yA));
              }), g.setAttribute(uA, vA ? vA.replace(/"|'/g, "") : "");
            } else g.setAttribute(X, W);
          }
        }
      }, [
        W,
        BA,
        g,
        tA
      ]), h.useEffect(() => {
        let rA;
        if (m && M.current && I) {
          const X = I.createElement("style");
          X.appendChild(I.createTextNode(QB)), I.head.appendChild(X), window.getComputedStyle(I.body), rA = setTimeout(() => {
            I.head.removeChild(X);
          }, 1);
        }
        return () => {
          clearTimeout(rA);
        };
      }, [
        W,
        m,
        I
      ]), h.useEffect(() => (M.current = true, () => {
        M.current = false;
      }), []);
      const $ = h.useMemo(() => ({
        allColorSchemes: tA,
        colorScheme: W,
        darkColorScheme: x,
        lightColorScheme: y,
        mode: z,
        setColorScheme: V,
        setMode: sA,
        systemMode: lA
      }), [
        tA,
        W,
        x,
        y,
        z,
        V,
        sA,
        lA,
        gA.colorSchemeSelector
      ]);
      let G = true;
      (R || Z.cssVariables === false || N && (O == null ? void 0 : O.cssVarPrefix) === J) && (G = false);
      const fA = E.jsxs(h.Fragment, {
        children: [
          E.jsx(Pd, {
            themeId: AA ? e : void 0,
            theme: gA,
            children: Q
          }),
          G && E.jsx(pd, {
            styles: ((_d2 = gA.generateStyleSheets) == null ? void 0 : _d2.call(gA)) || []
          })
        ]
      });
      return N ? fA : E.jsx(l.Provider, {
        value: $,
        children: fA
      });
    }
    const p = typeof i == "string" ? i : i.light, B = typeof i == "string" ? i : i.dark;
    return {
      CssVarsProvider: f,
      useColorScheme: c,
      getInitColorSchemeScript: (v) => vB({
        colorSchemeStorageKey: n,
        defaultLightColorScheme: p,
        defaultDarkColorScheme: B,
        modeStorageKey: r,
        ...v
      })
    };
  }
  function UB(A = "") {
    function e(...r) {
      if (!r.length) return "";
      const n = r[0];
      return typeof n == "string" && !n.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${A ? `${A}-` : ""}${n}${e(...r.slice(1))})` : `, ${n}`;
    }
    return (r, ...n) => `var(--${A ? `${A}-` : ""}${r}${e(...n)})`;
  }
  const sc = (A, e, t, r = []) => {
    let n = A;
    e.forEach((o, i) => {
      i === e.length - 1 ? Array.isArray(n) ? n[Number(o)] = t : n && typeof n == "object" && (n[o] = t) : n && typeof n == "object" && (n[o] || (n[o] = r.includes(o) ? [] : {}), n = n[o]);
    });
  }, SB = (A, e, t) => {
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
  }, xB = (A, e) => typeof e == "number" ? [
    "lineHeight",
    "fontWeight",
    "opacity",
    "zIndex"
  ].some((r) => A.includes(r)) || A[A.length - 1].toLowerCase().includes("opacity") ? e : `${e}px` : e;
  function ua(A, e) {
    const { prefix: t, shouldSkipGeneratingVar: r } = e || {}, n = {}, o = {}, i = {};
    return SB(A, (a, s, l) => {
      if ((typeof s == "string" || typeof s == "number") && (!r || !r(a, s))) {
        const c = `--${t ? `${t}-` : ""}${a.join("-")}`, u = xB(a, s);
        Object.assign(n, {
          [c]: u
        }), sc(o, a, `var(${c})`, l), sc(i, a, `var(${c}, ${u})`, l);
      }
    }, (a) => a[0] === "vars"), {
      css: n,
      vars: o,
      varsWithDefaults: i
    };
  }
  function EB(A, e = {}) {
    const { getSelector: t = b, disableCssColorScheme: r, colorSchemeSelector: n } = e, { colorSchemes: o = {}, components: i, defaultColorScheme: a = "light", ...s } = A, { vars: l, css: c, varsWithDefaults: u } = ua(s, e);
    let d = u;
    const f = {}, { [a]: p, ...B } = o;
    if (Object.entries(B || {}).forEach(([w, C]) => {
      const { vars: U, css: m, varsWithDefaults: S } = ua(C, e);
      d = ae(d, S), f[w] = {
        css: m,
        vars: U
      };
    }), p) {
      const { css: w, vars: C, varsWithDefaults: U } = ua(p, e);
      d = ae(d, U), f[a] = {
        css: w,
        vars: C
      };
    }
    function b(w, C) {
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
          w = ae(w, C);
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
        const { [C]: m, ...S } = f;
        if (m) {
          const { css: H } = m, I = (_b2 = (_a2 = o[C]) == null ? void 0 : _a2.palette) == null ? void 0 : _b2.mode, g = !r && I ? {
            colorScheme: I,
            ...H
          } : {
            ...H
          };
          U(t(C, {
            ...g
          }), g);
        }
        return Object.entries(S).forEach(([H, { css: I }]) => {
          var _a3, _b3;
          const g = (_b3 = (_a3 = o[H]) == null ? void 0 : _a3.palette) == null ? void 0 : _b3.mode, T = !r && g ? {
            colorScheme: g,
            ...I
          } : {
            ...I
          };
          U(t(H, {
            ...T
          }), T);
        }), w;
      }
    };
  }
  function IB(A) {
    return function(t) {
      return A === "media" ? `@media (prefers-color-scheme: ${t})` : A ? A.startsWith("data-") && !A.includes("%s") ? `[${A}="${t}"] &` : A === "class" ? `.${t} &` : A === "data" ? `[data-${t}] &` : `${A.replace("%s", t)} &` : "&";
    };
  }
  function Nd() {
    return {
      text: {
        primary: "rgba(0, 0, 0, 0.87)",
        secondary: "rgba(0, 0, 0, 0.6)",
        disabled: "rgba(0, 0, 0, 0.38)"
      },
      divider: "rgba(0, 0, 0, 0.12)",
      background: {
        paper: un.white,
        default: un.white
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
  const HB = Nd();
  function Gd() {
    return {
      text: {
        primary: un.white,
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
        active: un.white,
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
  const lc = Gd();
  function cc(A, e, t, r) {
    const n = r.light || r, o = r.dark || r * 1.5;
    A[e] || (A.hasOwnProperty(t) ? A[e] = A[t] : e === "light" ? A.light = hn(A.main, n) : e === "dark" && (A.dark = gn(A.main, o)));
  }
  function TB(A = "light") {
    return A === "dark" ? {
      main: er[200],
      light: er[50],
      dark: er[400]
    } : {
      main: er[700],
      light: er[400],
      dark: er[800]
    };
  }
  function kB(A = "light") {
    return A === "dark" ? {
      main: Ar[200],
      light: Ar[50],
      dark: Ar[400]
    } : {
      main: Ar[500],
      light: Ar[300],
      dark: Ar[700]
    };
  }
  function LB(A = "light") {
    return A === "dark" ? {
      main: qt[500],
      light: qt[300],
      dark: qt[700]
    } : {
      main: qt[700],
      light: qt[400],
      dark: qt[800]
    };
  }
  function RB(A = "light") {
    return A === "dark" ? {
      main: tr[400],
      light: tr[300],
      dark: tr[700]
    } : {
      main: tr[700],
      light: tr[500],
      dark: tr[900]
    };
  }
  function OB(A = "light") {
    return A === "dark" ? {
      main: rr[400],
      light: rr[300],
      dark: rr[700]
    } : {
      main: rr[800],
      light: rr[500],
      dark: rr[900]
    };
  }
  function MB(A = "light") {
    return A === "dark" ? {
      main: kr[400],
      light: kr[300],
      dark: kr[700]
    } : {
      main: "#ed6c02",
      light: kr[500],
      dark: kr[900]
    };
  }
  function cl(A) {
    const { mode: e = "light", contrastThreshold: t = 3, tonalOffset: r = 0.2, ...n } = A, o = A.primary || TB(e), i = A.secondary || kB(e), a = A.error || LB(e), s = A.info || RB(e), l = A.success || OB(e), c = A.warning || MB(e);
    function u(B) {
      return AB(B, lc.text.primary) >= t ? lc.text.primary : HB.text.primary;
    }
    const d = ({ color: B, name: b, mainShade: v = 500, lightShade: Q = 300, darkShade: w = 700 }) => {
      if (B = {
        ...B
      }, !B.main && B[v] && (B.main = B[v]), !B.hasOwnProperty("main")) throw new Error(Bt(11, b ? ` (${b})` : "", v));
      if (typeof B.main != "string") throw new Error(Bt(12, b ? ` (${b})` : "", JSON.stringify(B.main)));
      return cc(B, "light", Q, r), cc(B, "dark", w, r), B.contrastText || (B.contrastText = u(B.main)), B;
    };
    let f;
    return e === "light" ? f = Nd() : e === "dark" && (f = Gd()), ae({
      common: {
        ...un
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
      grey: Mp,
      contrastThreshold: t,
      getContrastText: u,
      augmentColor: d,
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
  function DB(A, e) {
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
  function PB(A) {
    return Math.round(A * 1e5) / 1e5;
  }
  const uc = {
    textTransform: "uppercase"
  }, dc = '"Roboto", "Helvetica", "Arial", sans-serif';
  function Vd(A, e) {
    const { fontFamily: t = dc, fontSize: r = 14, fontWeightLight: n = 300, fontWeightRegular: o = 400, fontWeightMedium: i = 500, fontWeightBold: a = 700, htmlFontSize: s = 16, allVariants: l, pxToRem: c, ...u } = typeof e == "function" ? e(A) : e, d = r / 14, f = c || ((b) => `${b / s * d}rem`), p = (b, v, Q, w, C) => ({
      fontFamily: t,
      fontWeight: b,
      fontSize: f(v),
      lineHeight: Q,
      ...t === dc ? {
        letterSpacing: `${PB(w / v)}em`
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
      button: p(i, 14, 1.75, 0.4, uc),
      caption: p(o, 12, 1.66, 0.4),
      overline: p(o, 12, 2.66, 1, uc),
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit"
      }
    };
    return ae({
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
  const _B = 0.2, NB = 0.14, GB = 0.12;
  function $A(...A) {
    return [
      `${A[0]}px ${A[1]}px ${A[2]}px ${A[3]}px rgba(0,0,0,${_B})`,
      `${A[4]}px ${A[5]}px ${A[6]}px ${A[7]}px rgba(0,0,0,${NB})`,
      `${A[8]}px ${A[9]}px ${A[10]}px ${A[11]}px rgba(0,0,0,${GB})`
    ].join(",");
  }
  const VB = [
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
  ], $B = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
  }, WB = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195
  };
  function fc(A) {
    return `${Math.round(A)}ms`;
  }
  function jB(A) {
    if (!A) return 0;
    const e = A / 36;
    return Math.min(Math.round((4 + 15 * e ** 0.25 + e / 5) * 10), 3e3);
  }
  function zB(A) {
    const e = {
      ...$B,
      ...A.easing
    }, t = {
      ...WB,
      ...A.duration
    };
    return {
      getAutoHeightDuration: jB,
      create: (n = [
        "all"
      ], o = {}) => {
        const { duration: i = t.standard, easing: a = e.easeInOut, delay: s = 0, ...l } = o;
        return (Array.isArray(n) ? n : [
          n
        ]).map((c) => `${c} ${typeof i == "string" ? i : fc(i)} ${a} ${typeof s == "string" ? s : fc(s)}`).join(",");
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
  function YB(A) {
    return qe(A) || typeof A > "u" || typeof A == "string" || typeof A == "boolean" || typeof A == "number" || Array.isArray(A);
  }
  function $d(A = {}) {
    const e = {
      ...A
    };
    function t(r) {
      const n = Object.entries(r);
      for (let o = 0; o < n.length; o++) {
        const [i, a] = n[o];
        !YB(a) || i.startsWith("unstable_") ? delete r[i] : qe(a) && (r[i] = {
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
  function Za(A = {}, ...e) {
    const { breakpoints: t, mixins: r = {}, spacing: n, palette: o = {}, transitions: i = {}, typography: a = {}, shape: s, ...l } = A;
    if (A.vars && A.generateThemeVars === void 0) throw new Error(Bt(20));
    const c = cl(o), u = tl(A);
    let d = ae(u, {
      mixins: DB(u.breakpoints, r),
      palette: c,
      shadows: VB.slice(),
      typography: Vd(c, a),
      transitions: zB(i),
      zIndex: {
        ...XB
      }
    });
    return d = ae(d, l), d = e.reduce((f, p) => ae(f, p), d), d.unstable_sxConfig = {
      ...Sn,
      ...l == null ? void 0 : l.unstable_sxConfig
    }, d.unstable_sx = function(p) {
      return Lt({
        sx: p,
        theme: this
      });
    }, d.toRuntimeSource = $d, d;
  }
  function qa(A) {
    let e;
    return A < 1 ? e = 5.11916 * A ** 2 : e = 4.5 * Math.log(A + 1) + 2, Math.round(e * 10) / 1e3;
  }
  const JB = [
    ...Array(25)
  ].map((A, e) => {
    if (e === 0) return "none";
    const t = qa(e);
    return `linear-gradient(rgba(255 255 255 / ${t}), rgba(255 255 255 / ${t}))`;
  });
  function Wd(A) {
    return {
      inputPlaceholder: A === "dark" ? 0.5 : 0.42,
      inputUnderline: A === "dark" ? 0.7 : 0.42,
      switchTrackDisabled: A === "dark" ? 0.2 : 0.12,
      switchTrack: A === "dark" ? 0.3 : 0.38
    };
  }
  function jd(A) {
    return A === "dark" ? JB : [];
  }
  function ZB(A) {
    const { palette: e = {
      mode: "light"
    }, opacity: t, overlays: r, ...n } = A, o = cl(e);
    return {
      palette: o,
      opacity: {
        ...Wd(o.mode),
        ...t
      },
      overlays: r || jd(o.mode),
      ...n
    };
  }
  function qB(A) {
    var _a2;
    return !!A[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!A[0].match(/sxConfig$/) || A[0] === "palette" && !!((_a2 = A[1]) == null ? void 0 : _a2.match(/(mode|contrastThreshold|tonalOffset)/));
  }
  const A0 = (A) => [
    ...[
      ...Array(25)
    ].map((e, t) => `--${A ? `${A}-` : ""}overlays-${t}`),
    `--${A ? `${A}-` : ""}palette-AppBar-darkBg`,
    `--${A ? `${A}-` : ""}palette-AppBar-darkColor`
  ], e0 = (A) => (e, t) => {
    const r = A.rootSelector || ":root", n = A.colorSchemeSelector;
    let o = n;
    if (n === "class" && (o = ".%s"), n === "data" && (o = "[data-%s]"), (n == null ? void 0 : n.startsWith("data-")) && !n.includes("%s") && (o = `[${n}="%s"]`), A.defaultColorScheme === e) {
      if (e === "dark") {
        const i = {};
        return A0(A.cssVarPrefix).forEach((a) => {
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
  function t0(A, e) {
    e.forEach((t) => {
      A[t] || (A[t] = {});
    });
  }
  function _(A, e, t) {
    !A[e] && t && (A[e] = t);
  }
  function Vr(A) {
    return typeof A != "string" || !A.startsWith("hsl") ? A : xd(A);
  }
  function ut(A, e) {
    `${e}Channel` in A || (A[`${e}Channel`] = Gr(Vr(A[e])));
  }
  function r0(A) {
    return typeof A == "number" ? `${A}px` : typeof A == "string" || typeof A == "function" || Array.isArray(A) ? A : "8px";
  }
  const $e = (A) => {
    try {
      return A();
    } catch {
    }
  }, n0 = (A = "mui") => UB(A);
  function da(A, e, t, r) {
    if (!e) return;
    e = e === true ? {} : e;
    const n = r === "dark" ? "dark" : "light";
    if (!t) {
      A[r] = ZB({
        ...e,
        palette: {
          mode: n,
          ...e == null ? void 0 : e.palette
        }
      });
      return;
    }
    const { palette: o, ...i } = Za({
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
        ...Wd(n),
        ...e == null ? void 0 : e.opacity
      },
      overlays: (e == null ? void 0 : e.overlays) || jd(n)
    }, i;
  }
  function o0(A = {}, ...e) {
    const { colorSchemes: t = {
      light: true
    }, defaultColorScheme: r, disableCssColorScheme: n = false, cssVarPrefix: o = "mui", shouldSkipGeneratingVar: i = qB, colorSchemeSelector: a = t.light && t.dark ? "media" : void 0, rootSelector: s = ":root", ...l } = A, c = Object.keys(t)[0], u = r || (t.light && c !== "light" ? "light" : c), d = n0(o), { [u]: f, light: p, dark: B, ...b } = t, v = {
      ...b
    };
    let Q = f;
    if ((u === "dark" && !("dark" in t) || u === "light" && !("light" in t)) && (Q = true), !Q) throw new Error(Bt(21, u));
    const w = da(v, Q, l, u);
    p && !v.light && da(v, p, void 0, "light"), B && !v.dark && da(v, B, void 0, "dark");
    let C = {
      defaultColorScheme: u,
      ...w,
      cssVarPrefix: o,
      colorSchemeSelector: a,
      rootSelector: s,
      getCssVar: d,
      colorSchemes: v,
      font: {
        ...KB(w.typography),
        ...w.font
      },
      spacing: r0(l.spacing)
    };
    Object.keys(C.colorSchemes).forEach((I) => {
      const g = C.colorSchemes[I].palette, T = (R) => {
        const L = R.split("-"), K = L[1], M = L[2];
        return d(R, g[K][M]);
      };
      if (g.mode === "light" && (_(g.common, "background", "#fff"), _(g.common, "onBackground", "#000")), g.mode === "dark" && (_(g.common, "background", "#000"), _(g.common, "onBackground", "#fff")), t0(g, [
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
        _(g.Alert, "errorColor", LA(g.error.light, 0.6)), _(g.Alert, "infoColor", LA(g.info.light, 0.6)), _(g.Alert, "successColor", LA(g.success.light, 0.6)), _(g.Alert, "warningColor", LA(g.warning.light, 0.6)), _(g.Alert, "errorFilledBg", T("palette-error-main")), _(g.Alert, "infoFilledBg", T("palette-info-main")), _(g.Alert, "successFilledBg", T("palette-success-main")), _(g.Alert, "warningFilledBg", T("palette-warning-main")), _(g.Alert, "errorFilledColor", $e(() => g.getContrastText(g.error.main))), _(g.Alert, "infoFilledColor", $e(() => g.getContrastText(g.info.main))), _(g.Alert, "successFilledColor", $e(() => g.getContrastText(g.success.main))), _(g.Alert, "warningFilledColor", $e(() => g.getContrastText(g.warning.main))), _(g.Alert, "errorStandardBg", RA(g.error.light, 0.9)), _(g.Alert, "infoStandardBg", RA(g.info.light, 0.9)), _(g.Alert, "successStandardBg", RA(g.success.light, 0.9)), _(g.Alert, "warningStandardBg", RA(g.warning.light, 0.9)), _(g.Alert, "errorIconColor", T("palette-error-main")), _(g.Alert, "infoIconColor", T("palette-info-main")), _(g.Alert, "successIconColor", T("palette-success-main")), _(g.Alert, "warningIconColor", T("palette-warning-main")), _(g.AppBar, "defaultBg", T("palette-grey-100")), _(g.Avatar, "defaultBg", T("palette-grey-400")), _(g.Button, "inheritContainedBg", T("palette-grey-300")), _(g.Button, "inheritContainedHoverBg", T("palette-grey-A100")), _(g.Chip, "defaultBorder", T("palette-grey-400")), _(g.Chip, "defaultAvatarColor", T("palette-grey-700")), _(g.Chip, "defaultIconColor", T("palette-grey-700")), _(g.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), _(g.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), _(g.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), _(g.LinearProgress, "primaryBg", RA(g.primary.main, 0.62)), _(g.LinearProgress, "secondaryBg", RA(g.secondary.main, 0.62)), _(g.LinearProgress, "errorBg", RA(g.error.main, 0.62)), _(g.LinearProgress, "infoBg", RA(g.info.main, 0.62)), _(g.LinearProgress, "successBg", RA(g.success.main, 0.62)), _(g.LinearProgress, "warningBg", RA(g.warning.main, 0.62)), _(g.Skeleton, "bg", `rgba(${T("palette-text-primaryChannel")} / 0.11)`), _(g.Slider, "primaryTrack", RA(g.primary.main, 0.62)), _(g.Slider, "secondaryTrack", RA(g.secondary.main, 0.62)), _(g.Slider, "errorTrack", RA(g.error.main, 0.62)), _(g.Slider, "infoTrack", RA(g.info.main, 0.62)), _(g.Slider, "successTrack", RA(g.success.main, 0.62)), _(g.Slider, "warningTrack", RA(g.warning.main, 0.62));
        const R = Kn(g.background.default, 0.8);
        _(g.SnackbarContent, "bg", R), _(g.SnackbarContent, "color", $e(() => g.getContrastText(R))), _(g.SpeedDialAction, "fabHoverBg", Kn(g.background.paper, 0.15)), _(g.StepConnector, "border", T("palette-grey-400")), _(g.StepContent, "border", T("palette-grey-400")), _(g.Switch, "defaultColor", T("palette-common-white")), _(g.Switch, "defaultDisabledColor", T("palette-grey-100")), _(g.Switch, "primaryDisabledColor", RA(g.primary.main, 0.62)), _(g.Switch, "secondaryDisabledColor", RA(g.secondary.main, 0.62)), _(g.Switch, "errorDisabledColor", RA(g.error.main, 0.62)), _(g.Switch, "infoDisabledColor", RA(g.info.main, 0.62)), _(g.Switch, "successDisabledColor", RA(g.success.main, 0.62)), _(g.Switch, "warningDisabledColor", RA(g.warning.main, 0.62)), _(g.TableCell, "border", RA(Mn(g.divider, 1), 0.88)), _(g.Tooltip, "bg", Mn(g.grey[700], 0.92));
      }
      if (g.mode === "dark") {
        _(g.Alert, "errorColor", RA(g.error.light, 0.6)), _(g.Alert, "infoColor", RA(g.info.light, 0.6)), _(g.Alert, "successColor", RA(g.success.light, 0.6)), _(g.Alert, "warningColor", RA(g.warning.light, 0.6)), _(g.Alert, "errorFilledBg", T("palette-error-dark")), _(g.Alert, "infoFilledBg", T("palette-info-dark")), _(g.Alert, "successFilledBg", T("palette-success-dark")), _(g.Alert, "warningFilledBg", T("palette-warning-dark")), _(g.Alert, "errorFilledColor", $e(() => g.getContrastText(g.error.dark))), _(g.Alert, "infoFilledColor", $e(() => g.getContrastText(g.info.dark))), _(g.Alert, "successFilledColor", $e(() => g.getContrastText(g.success.dark))), _(g.Alert, "warningFilledColor", $e(() => g.getContrastText(g.warning.dark))), _(g.Alert, "errorStandardBg", LA(g.error.light, 0.9)), _(g.Alert, "infoStandardBg", LA(g.info.light, 0.9)), _(g.Alert, "successStandardBg", LA(g.success.light, 0.9)), _(g.Alert, "warningStandardBg", LA(g.warning.light, 0.9)), _(g.Alert, "errorIconColor", T("palette-error-main")), _(g.Alert, "infoIconColor", T("palette-info-main")), _(g.Alert, "successIconColor", T("palette-success-main")), _(g.Alert, "warningIconColor", T("palette-warning-main")), _(g.AppBar, "defaultBg", T("palette-grey-900")), _(g.AppBar, "darkBg", T("palette-background-paper")), _(g.AppBar, "darkColor", T("palette-text-primary")), _(g.Avatar, "defaultBg", T("palette-grey-600")), _(g.Button, "inheritContainedBg", T("palette-grey-800")), _(g.Button, "inheritContainedHoverBg", T("palette-grey-700")), _(g.Chip, "defaultBorder", T("palette-grey-700")), _(g.Chip, "defaultAvatarColor", T("palette-grey-300")), _(g.Chip, "defaultIconColor", T("palette-grey-300")), _(g.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), _(g.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), _(g.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), _(g.LinearProgress, "primaryBg", LA(g.primary.main, 0.5)), _(g.LinearProgress, "secondaryBg", LA(g.secondary.main, 0.5)), _(g.LinearProgress, "errorBg", LA(g.error.main, 0.5)), _(g.LinearProgress, "infoBg", LA(g.info.main, 0.5)), _(g.LinearProgress, "successBg", LA(g.success.main, 0.5)), _(g.LinearProgress, "warningBg", LA(g.warning.main, 0.5)), _(g.Skeleton, "bg", `rgba(${T("palette-text-primaryChannel")} / 0.13)`), _(g.Slider, "primaryTrack", LA(g.primary.main, 0.5)), _(g.Slider, "secondaryTrack", LA(g.secondary.main, 0.5)), _(g.Slider, "errorTrack", LA(g.error.main, 0.5)), _(g.Slider, "infoTrack", LA(g.info.main, 0.5)), _(g.Slider, "successTrack", LA(g.success.main, 0.5)), _(g.Slider, "warningTrack", LA(g.warning.main, 0.5));
        const R = Kn(g.background.default, 0.98);
        _(g.SnackbarContent, "bg", R), _(g.SnackbarContent, "color", $e(() => g.getContrastText(R))), _(g.SpeedDialAction, "fabHoverBg", Kn(g.background.paper, 0.15)), _(g.StepConnector, "border", T("palette-grey-600")), _(g.StepContent, "border", T("palette-grey-600")), _(g.Switch, "defaultColor", T("palette-grey-300")), _(g.Switch, "defaultDisabledColor", T("palette-grey-600")), _(g.Switch, "primaryDisabledColor", LA(g.primary.main, 0.55)), _(g.Switch, "secondaryDisabledColor", LA(g.secondary.main, 0.55)), _(g.Switch, "errorDisabledColor", LA(g.error.main, 0.55)), _(g.Switch, "infoDisabledColor", LA(g.info.main, 0.55)), _(g.Switch, "successDisabledColor", LA(g.success.main, 0.55)), _(g.Switch, "warningDisabledColor", LA(g.warning.main, 0.55)), _(g.TableCell, "border", LA(Mn(g.divider, 1), 0.68)), _(g.Tooltip, "bg", Mn(g.grey[700], 0.92));
      }
      ut(g.background, "default"), ut(g.background, "paper"), ut(g.common, "background"), ut(g.common, "onBackground"), ut(g, "divider"), Object.keys(g).forEach((R) => {
        const L = g[R];
        R !== "tonalOffset" && L && typeof L == "object" && (L.main && _(g[R], "mainChannel", Gr(Vr(L.main))), L.light && _(g[R], "lightChannel", Gr(Vr(L.light))), L.dark && _(g[R], "darkChannel", Gr(Vr(L.dark))), L.contrastText && _(g[R], "contrastTextChannel", Gr(Vr(L.contrastText))), R === "text" && (ut(g[R], "primary"), ut(g[R], "secondary")), R === "action" && (L.active && ut(g[R], "active"), L.selected && ut(g[R], "selected")));
      });
    }), C = e.reduce((I, g) => ae(I, g), C);
    const U = {
      prefix: o,
      disableCssColorScheme: n,
      shouldSkipGeneratingVar: i,
      getSelector: e0(C)
    }, { vars: m, generateThemeVars: S, generateStyleSheets: H } = EB(C, U);
    return C.vars = m, Object.entries(C.colorSchemes[C.defaultColorScheme]).forEach(([I, g]) => {
      C[I] = g;
    }), C.generateThemeVars = S, C.generateStyleSheets = H, C.generateSpacing = function() {
      return Cd(l.spacing, Al(this));
    }, C.getColorSchemeSelector = IB(a), C.spacing = C.generateSpacing(), C.shouldSkipGeneratingVar = i, C.unstable_sxConfig = {
      ...Sn,
      ...l == null ? void 0 : l.unstable_sxConfig
    }, C.unstable_sx = function(g) {
      return Lt({
        sx: g,
        theme: this
      });
    }, C.toRuntimeSource = $d, C;
  }
  function pc(A, e, t) {
    A.colorSchemes && t && (A.colorSchemes[e] = {
      ...t !== true && t,
      palette: cl({
        ...t === true ? {} : t.palette,
        mode: e
      })
    });
  }
  function Pi(A = {}, ...e) {
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
      if (!("colorSchemes" in A)) return Za(A, ...e);
      let c = t;
      "palette" in A || l[a] && (l[a] !== true ? c = l[a].palette : a === "dark" && (c = {
        mode: "dark"
      }));
      const u = Za({
        ...A,
        palette: c
      }, ...e);
      return u.defaultColorScheme = a, u.colorSchemes = l, u.palette.mode === "light" && (u.colorSchemes.light = {
        ...l.light !== true && l.light,
        palette: u.palette
      }, pc(u, "dark", l.dark)), u.palette.mode === "dark" && (u.colorSchemes.dark = {
        ...l.dark !== true && l.dark,
        palette: u.palette
      }, pc(u, "light", l.light)), u;
    }
    return !t && !("light" in l) && a === "light" && (l.light = true), o0({
      ...i,
      colorSchemes: l,
      defaultColorScheme: a,
      ...typeof r != "boolean" && r
    }, ...e);
  }
  const ul = Pi();
  dl = function() {
    const A = nl(ul);
    return A[et] || A;
  };
  function _i(A) {
    return A !== "ownerState" && A !== "theme" && A !== "sx" && A !== "as";
  }
  ot = (A) => _i(A) && A !== "classes";
  hA = jh({
    themeId: et,
    defaultTheme: ul,
    rootShouldForwardProp: ot
  });
  function i0({ theme: A, ...e }) {
    const t = et in A ? A[et] : void 0;
    return E.jsx(Pd, {
      ...e,
      themeId: t ? et : void 0,
      theme: t || A
    });
  }
  const Dn = {
    colorSchemeStorageKey: "mui-color-scheme",
    defaultLightColorScheme: "light",
    defaultDarkColorScheme: "dark",
    modeStorageKey: "mui-mode"
  }, { CssVarsProvider: a0 } = FB({
    themeId: et,
    theme: () => Pi({
      cssVariables: true
    }),
    colorSchemeStorageKey: Dn.colorSchemeStorageKey,
    modeStorageKey: Dn.modeStorageKey,
    defaultColorScheme: {
      light: Dn.defaultLightColorScheme,
      dark: Dn.defaultDarkColorScheme
    },
    resolveTheme: (A) => {
      const e = {
        ...A,
        typography: Vd(A.palette, A.typography)
      };
      return e.unstable_sx = function(r) {
        return Lt({
          sx: r,
          theme: this
        });
      }, e;
    }
  }), s0 = a0;
  function l0({ theme: A, ...e }) {
    const t = h.useMemo(() => {
      if (typeof A == "function") return A;
      const r = et in A ? A[et] : A;
      return "colorSchemes" in r ? null : "vars" in r ? A : {
        ...A,
        vars: null
      };
    }, [
      A
    ]);
    return t ? E.jsx(i0, {
      theme: t,
      ...e
    }) : E.jsx(s0, {
      theme: A,
      ...e
    });
  }
  function c0(A) {
    return E.jsx(yd, {
      ...A,
      defaultTheme: ul,
      themeId: et
    });
  }
  function fl(A) {
    return function(t) {
      return E.jsx(c0, {
        styles: typeof A == "function" ? (r) => A({
          theme: r,
          ...t
        }) : A
      });
    };
  }
  function u0() {
    return bd;
  }
  IA = BB;
  VA = function(A) {
    return gB(A);
  };
  function d0(A) {
    return NA("MuiSvgIcon", A);
  }
  DA("MuiSvgIcon", [
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
  let f0, p0;
  f0 = (A) => {
    const { color: e, fontSize: t, classes: r } = A, n = {
      root: [
        "root",
        e !== "inherit" && `color${bA(e)}`,
        `fontSize${bA(t)}`
      ]
    };
    return GA(n, d0, r);
  };
  p0 = hA("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.root,
        t.color !== "inherit" && e[`color${bA(t.color)}`],
        e[`fontSize${bA(t.fontSize)}`]
      ];
    }
  })(IA(({ theme: A }) => {
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
  As = h.forwardRef(function(e, t) {
    const r = VA({
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
    }, b = {};
    c || (b.viewBox = d);
    const v = f0(B);
    return E.jsxs(p0, {
      as: a,
      className: CA(v.root, o),
      focusable: "false",
      color: l,
      "aria-hidden": u ? void 0 : true,
      role: u ? "img" : void 0,
      ref: t,
      ...b,
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
  As.muiName = "SvgIcon";
  zd = function(A, e) {
    function t(r, n) {
      return E.jsx(As, {
        "data-testid": `${e}Icon`,
        ref: n,
        ...r,
        children: A
      });
    }
    return t.muiName = As.muiName, h.memo(h.forwardRef(t));
  };
  g0 = function(A, e) {
    if (!A) return e;
    if (typeof A == "function" || typeof e == "function") return (n) => {
      const o = typeof e == "function" ? e(n) : e, i = typeof A == "function" ? A({
        ...n,
        ...o
      }) : A, a = CA(n == null ? void 0 : n.className, o == null ? void 0 : o.className, i == null ? void 0 : i.className);
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
    const t = e, r = CA(t == null ? void 0 : t.className, A == null ? void 0 : A.className);
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
  function Xd(A, e) {
    if (A == null) return {};
    var t = {};
    for (var r in A) if ({}.hasOwnProperty.call(A, r)) {
      if (e.indexOf(r) !== -1) continue;
      t[r] = A[r];
    }
    return t;
  }
  function es(A, e) {
    return es = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, r) {
      return t.__proto__ = r, t;
    }, es(A, e);
  }
  function Yd(A, e) {
    A.prototype = Object.create(e.prototype), A.prototype.constructor = A, es(A, e);
  }
  const { initPromise: h0 } = Ip, B0 = h0.then((A) => A.loadShare("react-dom", {
    customShareInfo: {
      shareConfig: {
        singleton: true,
        strictVersion: false,
        requiredVersion: "*"
      }
    }
  })), m0 = await B0.then((A) => A());
  var pl = m0;
  const Pn = Ks(pl), gc = {
    disabled: false
  }, Mo = k.createContext(null);
  var v0 = function(e) {
    return e.scrollTop;
  }, $r = "unmounted", _t = "exited", Nt = "entering", pr = "entered", ts = "exiting", it = (function(A) {
    Yd(e, A);
    function e(r, n) {
      var o;
      o = A.call(this, r, n) || this;
      var i = n, a = i && !i.isMounting ? r.enter : r.appear, s;
      return o.appearStatus = null, r.in ? a ? (s = _t, o.appearStatus = Nt) : s = pr : r.unmountOnExit || r.mountOnEnter ? s = $r : s = _t, o.state = {
        status: s
      }, o.nextCallback = null, o;
    }
    e.getDerivedStateFromProps = function(n, o) {
      var i = n.in;
      return i && o.status === $r ? {
        status: _t
      } : null;
    };
    var t = e.prototype;
    return t.componentDidMount = function() {
      this.updateStatus(true, this.appearStatus);
    }, t.componentDidUpdate = function(n) {
      var o = null;
      if (n !== this.props) {
        var i = this.state.status;
        this.props.in ? i !== Nt && i !== pr && (o = Nt) : (i === Nt || i === pr) && (o = ts);
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
      if (n === void 0 && (n = false), o !== null) if (this.cancelNextCallback(), o === Nt) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var i = this.props.nodeRef ? this.props.nodeRef.current : Pn.findDOMNode(this);
          i && v0(i);
        }
        this.performEnter(n);
      } else this.performExit();
      else this.props.unmountOnExit && this.state.status === _t && this.setState({
        status: $r
      });
    }, t.performEnter = function(n) {
      var o = this, i = this.props.enter, a = this.context ? this.context.isMounting : n, s = this.props.nodeRef ? [
        a
      ] : [
        Pn.findDOMNode(this),
        a
      ], l = s[0], c = s[1], u = this.getTimeouts(), d = a ? u.appear : u.enter;
      if (!n && !i || gc.disabled) {
        this.safeSetState({
          status: pr
        }, function() {
          o.props.onEntered(l);
        });
        return;
      }
      this.props.onEnter(l, c), this.safeSetState({
        status: Nt
      }, function() {
        o.props.onEntering(l, c), o.onTransitionEnd(d, function() {
          o.safeSetState({
            status: pr
          }, function() {
            o.props.onEntered(l, c);
          });
        });
      });
    }, t.performExit = function() {
      var n = this, o = this.props.exit, i = this.getTimeouts(), a = this.props.nodeRef ? void 0 : Pn.findDOMNode(this);
      if (!o || gc.disabled) {
        this.safeSetState({
          status: _t
        }, function() {
          n.props.onExited(a);
        });
        return;
      }
      this.props.onExit(a), this.safeSetState({
        status: ts
      }, function() {
        n.props.onExiting(a), n.onTransitionEnd(i.exit, function() {
          n.safeSetState({
            status: _t
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
      var i = this.props.nodeRef ? this.props.nodeRef.current : Pn.findDOMNode(this), a = n == null && !this.props.addEndListener;
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
      if (n === $r) return null;
      var o = this.props, i = o.children;
      o.in, o.mountOnEnter, o.unmountOnExit, o.appear, o.enter, o.exit, o.timeout, o.addEndListener, o.onEnter, o.onEntering, o.onEntered, o.onExit, o.onExiting, o.onExited, o.nodeRef;
      var a = Xd(o, [
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
      return k.createElement(Mo.Provider, {
        value: null
      }, typeof i == "function" ? i(n, a) : k.cloneElement(k.Children.only(i), a));
    }, e;
  })(k.Component);
  it.contextType = Mo;
  it.propTypes = {};
  function nr() {
  }
  it.defaultProps = {
    in: false,
    mountOnEnter: false,
    unmountOnExit: false,
    appear: false,
    enter: true,
    exit: true,
    onEnter: nr,
    onEntering: nr,
    onEntered: nr,
    onExit: nr,
    onExiting: nr,
    onExited: nr
  };
  it.UNMOUNTED = $r;
  it.EXITED = _t;
  it.ENTERING = Nt;
  it.ENTERED = pr;
  it.EXITING = ts;
  function w0(A) {
    if (A === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return A;
  }
  function gl(A, e) {
    var t = function(o) {
      return e && h.isValidElement(o) ? e(o) : o;
    }, r = /* @__PURE__ */ Object.create(null);
    return A && h.Children.map(A, function(n) {
      return n;
    }).forEach(function(n) {
      r[n.key] = t(n);
    }), r;
  }
  function C0(A, e) {
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
  function jt(A, e, t) {
    return t[e] != null ? t[e] : A.props[e];
  }
  function y0(A, e) {
    return gl(A.children, function(t) {
      return h.cloneElement(t, {
        onExited: e.bind(null, t),
        in: true,
        appear: jt(t, "appear", A),
        enter: jt(t, "enter", A),
        exit: jt(t, "exit", A)
      });
    });
  }
  function b0(A, e, t) {
    var r = gl(A.children), n = C0(e, r);
    return Object.keys(n).forEach(function(o) {
      var i = n[o];
      if (h.isValidElement(i)) {
        var a = o in e, s = o in r, l = e[o], c = h.isValidElement(l) && !l.props.in;
        s && (!a || c) ? n[o] = h.cloneElement(i, {
          onExited: t.bind(null, i),
          in: true,
          exit: jt(i, "exit", A),
          enter: jt(i, "enter", A)
        }) : !s && a && !c ? n[o] = h.cloneElement(i, {
          in: false
        }) : s && a && h.isValidElement(l) && (n[o] = h.cloneElement(i, {
          onExited: t.bind(null, i),
          in: l.props.in,
          exit: jt(i, "exit", A),
          enter: jt(i, "enter", A)
        }));
      }
    }), n;
  }
  var Q0 = Object.values || function(A) {
    return Object.keys(A).map(function(e) {
      return A[e];
    });
  }, F0 = {
    component: "div",
    childFactory: function(e) {
      return e;
    }
  }, hl = (function(A) {
    Yd(e, A);
    function e(r, n) {
      var o;
      o = A.call(this, r, n) || this;
      var i = o.handleExited.bind(w0(o));
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
        children: s ? y0(n, a) : b0(n, i, a),
        firstRender: false
      };
    }, t.handleExited = function(n, o) {
      var i = gl(this.props.children);
      n.key in i || (n.props.onExited && n.props.onExited(o), this.mounted && this.setState(function(a) {
        var s = ko({}, a.children);
        return delete s[n.key], {
          children: s
        };
      }));
    }, t.render = function() {
      var n = this.props, o = n.component, i = n.childFactory, a = Xd(n, [
        "component",
        "childFactory"
      ]), s = this.state.contextValue, l = Q0(this.state.children).map(i);
      return delete a.appear, delete a.enter, delete a.exit, o === null ? k.createElement(Mo.Provider, {
        value: s
      }, l) : k.createElement(Mo.Provider, {
        value: s
      }, k.createElement(o, a, l));
    }, e;
  })(k.Component);
  hl.propTypes = {};
  hl.defaultProps = F0;
  const Jd = (A) => A.scrollTop;
  function Ko(A, e) {
    const { timeout: t, easing: r, style: n = {} } = A;
    return {
      duration: n.transitionDuration ?? (typeof t == "number" ? t : t[e.mode] || 0),
      easing: n.transitionTimingFunction ?? (typeof r == "object" ? r[e.mode] : r),
      delay: n.transitionDelay
    };
  }
  function U0(A) {
    return NA("MuiPaper", A);
  }
  DA("MuiPaper", [
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
  let S0, x0;
  S0 = (A) => {
    const { square: e, elevation: t, variant: r, classes: n } = A, o = {
      root: [
        "root",
        r,
        !e && "rounded",
        r === "elevation" && `elevation${t}`
      ]
    };
    return GA(o, U0, n);
  };
  x0 = hA("div", {
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
  })(IA(({ theme: A }) => ({
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
  rs = h.forwardRef(function(e, t) {
    var _a2;
    const r = VA({
      props: e,
      name: "MuiPaper"
    }), n = dl(), { className: o, component: i = "div", elevation: a = 1, square: s = false, variant: l = "elevation", ...c } = r, u = {
      ...r,
      component: i,
      elevation: a,
      square: s,
      variant: l
    }, d = S0(u);
    return E.jsx(x0, {
      as: i,
      ownerState: u,
      className: CA(d.root, o),
      ref: t,
      ...c,
      style: {
        ...l === "elevation" && {
          "--Paper-shadow": (n.vars || n).shadows[a],
          ...n.vars && {
            "--Paper-overlay": (_a2 = n.vars.overlays) == null ? void 0 : _a2[a]
          },
          ...!n.vars && n.palette.mode === "dark" && {
            "--Paper-overlay": `linear-gradient(${Ot("#fff", qa(a))}, ${Ot("#fff", qa(a))})`
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
    }, ...d } = o, f = c[A] || r, p = Rd(u[A], n), { props: { component: B, ...b }, internalRef: v } = Ld({
      className: t,
      ...s,
      externalForwardedProps: A === "root" ? d : void 0,
      externalSlotProps: p
    }), Q = be(v, p == null ? void 0 : p.ref, e.ref), w = A === "root" ? B || l : B, C = kd(f, {
      ...A === "root" && !l && !c[A] && i,
      ...A !== "root" && !c[A] && i,
      ...b,
      ...w && !a && {
        as: w
      },
      ...w && a && {
        component: w
      },
      ref: Q
    }, n);
    return [
      f,
      C
    ];
  };
  class Do {
    static create() {
      return new Do();
    }
    static use() {
      const e = Id(Do.create).current, [t, r] = h.useState(false);
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
      return this.mounted || (this.mounted = I0(), this.shouldMount = true, this.setShouldMount(this.shouldMount)), this.mounted;
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
  function E0() {
    return Do.use();
  }
  function I0() {
    let A, e;
    const t = new Promise((r, n) => {
      A = r, e = n;
    });
    return t.resolve = A, t.reject = e, t;
  }
  function H0(A) {
    const { className: e, classes: t, pulsate: r = false, rippleX: n, rippleY: o, rippleSize: i, in: a, onExited: s, timeout: l } = A, [c, u] = h.useState(false), d = CA(e, t.ripple, t.rippleVisible, r && t.ripplePulsate), f = {
      width: i,
      height: i,
      top: -(i / 2) + o,
      left: -(i / 2) + n
    }, p = CA(t.child, c && t.childLeaving, r && t.childPulsate);
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
  const Te = DA("MuiTouchRipple", [
    "root",
    "ripple",
    "rippleVisible",
    "ripplePulsate",
    "child",
    "childLeaving",
    "childPulsate"
  ]), ns = 550, T0 = 80, k0 = Qn`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, L0 = Qn`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, R0 = Qn`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, O0 = hA("span", {
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
  }), M0 = hA(H0, {
    name: "MuiTouchRipple",
    slot: "Ripple"
  })`
  opacity: 0;
  position: absolute;

  &.${Te.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${k0};
    animation-duration: ${ns}ms;
    animation-timing-function: ${({ theme: A }) => A.transitions.easing.easeInOut};
  }

  &.${Te.ripplePulsate} {
    animation-duration: ${({ theme: A }) => A.transitions.duration.shorter}ms;
  }

  & .${Te.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Te.childLeaving} {
    opacity: 0;
    animation-name: ${L0};
    animation-duration: ${ns}ms;
    animation-timing-function: ${({ theme: A }) => A.transitions.easing.easeInOut};
  }

  & .${Te.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${R0};
    animation-duration: 2500ms;
    animation-timing-function: ${({ theme: A }) => A.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, K0 = h.forwardRef(function(e, t) {
    const r = VA({
      props: e,
      name: "MuiTouchRipple"
    }), { center: n = false, classes: o = {}, className: i, ...a } = r, [s, l] = h.useState([]), c = h.useRef(0), u = h.useRef(null);
    h.useEffect(() => {
      u.current && (u.current(), u.current = null);
    }, [
      s
    ]);
    const d = h.useRef(false), f = Hd(), p = h.useRef(null), B = h.useRef(null), b = h.useCallback((C) => {
      const { pulsate: U, rippleX: m, rippleY: S, rippleSize: H, cb: I } = C;
      l((g) => [
        ...g,
        E.jsx(M0, {
          classes: {
            ripple: CA(o.ripple, Te.ripple),
            rippleVisible: CA(o.rippleVisible, Te.rippleVisible),
            ripplePulsate: CA(o.ripplePulsate, Te.ripplePulsate),
            child: CA(o.child, Te.child),
            childLeaving: CA(o.childLeaving, Te.childLeaving),
            childPulsate: CA(o.childPulsate, Te.childPulsate)
          },
          timeout: ns,
          pulsate: U,
          rippleX: m,
          rippleY: S,
          rippleSize: H
        }, c.current)
      ]), c.current += 1, u.current = I;
    }, [
      o
    ]), v = h.useCallback((C = {}, U = {}, m = () => {
    }) => {
      const { pulsate: S = false, center: H = n || U.pulsate, fakeElement: I = false } = U;
      if ((C == null ? void 0 : C.type) === "mousedown" && d.current) {
        d.current = false;
        return;
      }
      (C == null ? void 0 : C.type) === "touchstart" && (d.current = true);
      const g = I ? null : B.current, T = g ? g.getBoundingClientRect() : {
        width: 0,
        height: 0,
        left: 0,
        top: 0
      };
      let R, L, K;
      if (H || C === void 0 || C.clientX === 0 && C.clientY === 0 || !C.clientX && !C.touches) R = Math.round(T.width / 2), L = Math.round(T.height / 2);
      else {
        const { clientX: M, clientY: O } = C.touches && C.touches.length > 0 ? C.touches[0] : C;
        R = Math.round(M - T.left), L = Math.round(O - T.top);
      }
      if (H) K = Math.sqrt((2 * T.width ** 2 + T.height ** 2) / 3), K % 2 === 0 && (K += 1);
      else {
        const M = Math.max(Math.abs((g ? g.clientWidth : 0) - R), R) * 2 + 2, O = Math.max(Math.abs((g ? g.clientHeight : 0) - L), L) * 2 + 2;
        K = Math.sqrt(M ** 2 + O ** 2);
      }
      (C == null ? void 0 : C.touches) ? p.current === null && (p.current = () => {
        b({
          pulsate: S,
          rippleX: R,
          rippleY: L,
          rippleSize: K,
          cb: m
        });
      }, f.start(T0, () => {
        p.current && (p.current(), p.current = null);
      })) : b({
        pulsate: S,
        rippleX: R,
        rippleY: L,
        rippleSize: K,
        cb: m
      });
    }, [
      n,
      b,
      f
    ]), Q = h.useCallback(() => {
      v({}, {
        pulsate: true
      });
    }, [
      v
    ]), w = h.useCallback((C, U) => {
      if (f.clear(), (C == null ? void 0 : C.type) === "touchend" && p.current) {
        p.current(), p.current = null, f.start(0, () => {
          w(C, U);
        });
        return;
      }
      p.current = null, l((m) => m.length > 0 ? m.slice(1) : m), u.current = U;
    }, [
      f
    ]);
    return h.useImperativeHandle(t, () => ({
      pulsate: Q,
      start: v,
      stop: w
    }), [
      Q,
      v,
      w
    ]), E.jsx(O0, {
      className: CA(Te.root, o.root, i),
      ref: B,
      ...a,
      children: E.jsx(hl, {
        component: null,
        exit: true,
        children: s
      })
    });
  });
  function D0(A) {
    return NA("MuiButtonBase", A);
  }
  let P0, _0, N0;
  P0 = DA("MuiButtonBase", [
    "root",
    "disabled",
    "focusVisible"
  ]);
  _0 = (A) => {
    const { disabled: e, focusVisible: t, focusVisibleClassName: r, classes: n } = A, i = GA({
      root: [
        "root",
        e && "disabled",
        t && "focusVisible"
      ]
    }, D0, n);
    return t && r && (i.root += ` ${r}`), i;
  };
  N0 = hA("button", {
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
    [`&.${P0.disabled}`]: {
      pointerEvents: "none",
      cursor: "default"
    },
    "@media print": {
      colorAdjust: "exact"
    }
  });
  G0 = h.forwardRef(function(e, t) {
    const r = VA({
      props: e,
      name: "MuiButtonBase"
    }), { action: n, centerRipple: o = false, children: i, className: a, component: s = "button", disabled: l = false, disableRipple: c = false, disableTouchRipple: u = false, focusRipple: d = false, focusVisibleClassName: f, LinkComponent: p = "a", onBlur: B, onClick: b, onContextMenu: v, onDragLeave: Q, onFocus: w, onFocusVisible: C, onKeyDown: U, onKeyUp: m, onMouseDown: S, onMouseLeave: H, onMouseUp: I, onTouchEnd: g, onTouchMove: T, onTouchStart: R, tabIndex: L = 0, TouchRippleProps: K, touchRippleRef: M, type: O, ...Y } = r, N = h.useRef(null), P = E0(), AA = be(P.ref, M), [Z, iA] = h.useState(false);
    l && Z && iA(false), h.useImperativeHandle(n, () => ({
      focusVisible: () => {
        iA(true), N.current.focus();
      }
    }), []);
    const D = P.shouldMount && !c && !l;
    h.useEffect(() => {
      Z && d && !c && P.pulsate();
    }, [
      c,
      d,
      Z,
      P
    ]);
    const J = dt(P, "start", S, u), j = dt(P, "stop", v, u), tA = dt(P, "stop", Q, u), mA = dt(P, "stop", I, u), dA = dt(P, "stop", (G) => {
      Z && G.preventDefault(), H && H(G);
    }, u), nA = dt(P, "start", R, u), eA = dt(P, "stop", g, u), sA = dt(P, "stop", T, u), lA = dt(P, "stop", (G) => {
      Oo(G.target) || iA(false), B && B(G);
    }, false), y = rt((G) => {
      N.current || (N.current = G.currentTarget), Oo(G.target) && (iA(true), C && C(G)), w && w(G);
    }), x = () => {
      const G = N.current;
      return s && s !== "button" && !(G.tagName === "A" && G.href);
    }, F = rt((G) => {
      d && !G.repeat && Z && G.key === " " && P.stop(G, () => {
        P.start(G);
      }), G.target === G.currentTarget && x() && G.key === " " && G.preventDefault(), U && U(G), G.target === G.currentTarget && x() && G.key === "Enter" && !l && (G.preventDefault(), b && b(G));
    }), V = rt((G) => {
      d && G.key === " " && Z && !G.defaultPrevented && P.stop(G, () => {
        P.pulsate(G);
      }), m && m(G), b && G.target === G.currentTarget && x() && G.key === " " && !G.defaultPrevented && b(G);
    });
    let z = s;
    z === "button" && (Y.href || Y.to) && (z = p);
    const W = {};
    z === "button" ? (W.type = O === void 0 ? "button" : O, W.disabled = l) : (!Y.href && !Y.to && (W.role = "button"), l && (W["aria-disabled"] = l));
    const gA = be(t, N), BA = {
      ...r,
      centerRipple: o,
      component: s,
      disabled: l,
      disableRipple: c,
      disableTouchRipple: u,
      focusRipple: d,
      tabIndex: L,
      focusVisible: Z
    }, $ = _0(BA);
    return E.jsxs(N0, {
      as: z,
      className: CA($.root, a),
      ownerState: BA,
      onBlur: lA,
      onClick: b,
      onContextMenu: j,
      onFocus: y,
      onKeyDown: F,
      onKeyUp: V,
      onMouseDown: J,
      onMouseLeave: dA,
      onMouseUp: mA,
      onDragLeave: tA,
      onTouchEnd: eA,
      onTouchMove: sA,
      onTouchStart: nA,
      ref: gA,
      tabIndex: l ? -1 : L,
      type: O,
      ...W,
      ...Y,
      children: [
        i,
        D ? E.jsx(K0, {
          ref: AA,
          center: o,
          ...K
        }) : null
      ]
    });
  });
  function dt(A, e, t, r = false) {
    return rt((n) => (t && t(n), r || A[e](n), true));
  }
  function V0(A) {
    return typeof A.main == "string";
  }
  function $0(A, e = []) {
    if (!V0(A)) return false;
    for (const t of e) if (!A.hasOwnProperty(t) || typeof A[t] != "string") return false;
    return true;
  }
  Ne = function(A = []) {
    return ([, e]) => e && $0(e, A);
  };
  function W0(A) {
    return NA("MuiCircularProgress", A);
  }
  DA("MuiCircularProgress", [
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
  let yt, os, is, j0, z0, X0, Y0, J0, Z0;
  yt = 44;
  os = Qn`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;
  is = Qn`
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
  j0 = typeof os != "string" ? Xs`
        animation: ${os} 1.4s linear infinite;
      ` : null;
  z0 = typeof is != "string" ? Xs`
        animation: ${is} 1.4s ease-in-out infinite;
      ` : null;
  X0 = (A) => {
    const { classes: e, variant: t, color: r, disableShrink: n } = A, o = {
      root: [
        "root",
        t,
        `color${bA(r)}`
      ],
      svg: [
        "svg"
      ],
      circle: [
        "circle",
        `circle${bA(t)}`,
        n && "circleDisableShrink"
      ]
    };
    return GA(o, W0, e);
  };
  Y0 = hA("span", {
    name: "MuiCircularProgress",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.root,
        e[t.variant],
        e[`color${bA(t.color)}`]
      ];
    }
  })(IA(({ theme: A }) => ({
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
        style: j0 || {
          animation: `${os} 1.4s linear infinite`
        }
      },
      ...Object.entries(A.palette).filter(Ne()).map(([e]) => ({
        props: {
          color: e
        },
        style: {
          color: (A.vars || A).palette[e].main
        }
      }))
    ]
  })));
  J0 = hA("svg", {
    name: "MuiCircularProgress",
    slot: "Svg",
    overridesResolver: (A, e) => e.svg
  })({
    display: "block"
  });
  Z0 = hA("circle", {
    name: "MuiCircularProgress",
    slot: "Circle",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.circle,
        e[`circle${bA(t.variant)}`],
        t.disableShrink && e.circleDisableShrink
      ];
    }
  })(IA(({ theme: A }) => ({
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
        style: z0 || {
          animation: `${is} 1.4s ease-in-out infinite`
        }
      }
    ]
  })));
  q0 = h.forwardRef(function(e, t) {
    const r = VA({
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
    }, p = X0(f), B = {}, b = {}, v = {};
    if (u === "determinate") {
      const Q = 2 * Math.PI * ((yt - l) / 2);
      B.strokeDasharray = Q.toFixed(3), v["aria-valuenow"] = Math.round(c), B.strokeDashoffset = `${((100 - c) / 100 * Q).toFixed(3)}px`, b.transform = "rotate(-90deg)";
    }
    return E.jsx(Y0, {
      className: CA(p.root, n),
      style: {
        width: a,
        height: a,
        ...b,
        ...s
      },
      ownerState: f,
      ref: t,
      role: "progressbar",
      ...v,
      ...d,
      children: E.jsx(J0, {
        className: p.svg,
        ownerState: f,
        viewBox: `${yt / 2} ${yt / 2} ${yt} ${yt}`,
        children: E.jsx(Z0, {
          className: p.circle,
          style: B,
          ownerState: f,
          cx: yt,
          cy: yt,
          r: (yt - l) / 2,
          fill: "none",
          strokeWidth: l
        })
      })
    });
  });
  function Am(A) {
    return NA("MuiIconButton", A);
  }
  let hc, em, tm, rm;
  hc = DA("MuiIconButton", [
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
  em = (A) => {
    const { classes: e, disabled: t, color: r, edge: n, size: o, loading: i } = A, a = {
      root: [
        "root",
        i && "loading",
        t && "disabled",
        r !== "default" && `color${bA(r)}`,
        n && `edge${bA(n)}`,
        `size${bA(o)}`
      ],
      loadingIndicator: [
        "loadingIndicator"
      ],
      loadingWrapper: [
        "loadingWrapper"
      ]
    };
    return GA(a, Am, e);
  };
  tm = hA(G0, {
    name: "MuiIconButton",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.root,
        t.loading && e.loading,
        t.color !== "default" && e[`color${bA(t.color)}`],
        t.edge && e[`edge${bA(t.edge)}`],
        e[`size${bA(t.size)}`]
      ];
    }
  })(IA(({ theme: A }) => ({
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
          "--IconButton-hoverBg": A.vars ? `rgba(${A.vars.palette.action.activeChannel} / ${A.vars.palette.action.hoverOpacity})` : Ot(A.palette.action.active, A.palette.action.hoverOpacity),
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
  })), IA(({ theme: A }) => ({
    variants: [
      {
        props: {
          color: "inherit"
        },
        style: {
          color: "inherit"
        }
      },
      ...Object.entries(A.palette).filter(Ne()).map(([e]) => ({
        props: {
          color: e
        },
        style: {
          color: (A.vars || A).palette[e].main
        }
      })),
      ...Object.entries(A.palette).filter(Ne()).map(([e]) => ({
        props: {
          color: e
        },
        style: {
          "--IconButton-hoverBg": A.vars ? `rgba(${(A.vars || A).palette[e].mainChannel} / ${A.vars.palette.action.hoverOpacity})` : Ot((A.vars || A).palette[e].main, A.palette.action.hoverOpacity)
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
    [`&.${hc.disabled}`]: {
      backgroundColor: "transparent",
      color: (A.vars || A).palette.action.disabled
    },
    [`&.${hc.loading}`]: {
      color: "transparent"
    }
  })));
  rm = hA("span", {
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
  nm = h.forwardRef(function(e, t) {
    const r = VA({
      props: e,
      name: "MuiIconButton"
    }), { edge: n = false, children: o, className: i, color: a = "default", disabled: s = false, disableFocusRipple: l = false, size: c = "medium", id: u, loading: d = null, loadingIndicator: f, ...p } = r, B = Di(u), b = f ?? E.jsx(q0, {
      "aria-labelledby": B,
      color: "inherit",
      size: 16
    }), v = {
      ...r,
      edge: n,
      color: a,
      disabled: s,
      disableFocusRipple: l,
      loading: d,
      loadingIndicator: b,
      size: c
    }, Q = em(v);
    return E.jsxs(tm, {
      id: d ? B : u,
      className: CA(Q.root, i),
      centerRipple: true,
      focusRipple: !l,
      disabled: s || d,
      ref: t,
      ...p,
      ownerState: v,
      children: [
        typeof d == "boolean" && E.jsx("span", {
          className: Q.loadingWrapper,
          style: {
            display: "contents"
          },
          children: E.jsx(rm, {
            className: Q.loadingIndicator,
            ownerState: v,
            children: d && b
          })
        }),
        o
      ]
    });
  });
  function om(A) {
    return NA("MuiTypography", A);
  }
  let im, am, sm, lm, Bc;
  JS = DA("MuiTypography", [
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
  im = {
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
  am = u0();
  sm = (A) => {
    const { align: e, gutterBottom: t, noWrap: r, paragraph: n, variant: o, classes: i } = A, a = {
      root: [
        "root",
        o,
        A.align !== "inherit" && `align${bA(e)}`,
        t && "gutterBottom",
        r && "noWrap",
        n && "paragraph"
      ]
    };
    return GA(a, om, i);
  };
  lm = hA("span", {
    name: "MuiTypography",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.root,
        t.variant && e[t.variant],
        t.align !== "inherit" && e[`align${bA(t.align)}`],
        t.noWrap && e.noWrap,
        t.gutterBottom && e.gutterBottom,
        t.paragraph && e.paragraph
      ];
    }
  })(IA(({ theme: A }) => {
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
        ...Object.entries(A.palette).filter(Ne()).map(([e]) => ({
          props: {
            color: e
          },
          style: {
            color: (A.vars || A).palette[e].main
          }
        })),
        ...Object.entries(((_a2 = A.palette) == null ? void 0 : _a2.text) || {}).filter(([, e]) => typeof e == "string").map(([e]) => ({
          props: {
            color: `text${bA(e)}`
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
  Bc = {
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
  en = h.forwardRef(function(e, t) {
    const { color: r, ...n } = VA({
      props: e,
      name: "MuiTypography"
    }), o = !im[r], i = am({
      ...n,
      ...o && {
        color: r
      }
    }), { align: a = "inherit", className: s, component: l, gutterBottom: c = false, noWrap: u = false, paragraph: d = false, variant: f = "body1", variantMapping: p = Bc, ...B } = i, b = {
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
    }, v = l || (d ? "p" : p[f] || Bc[f]) || "span", Q = sm(b);
    return E.jsx(lm, {
      as: v,
      ref: t,
      className: CA(Q.root, s),
      ...B,
      ownerState: b,
      style: {
        ...a !== "inherit" && {
          "--Typography-textAlign": a
        },
        ...B.style
      }
    });
  });
  function cm(A) {
    return typeof A == "function" ? A() : A;
  }
  const um = h.forwardRef(function(e, t) {
    const { children: r, container: n, disablePortal: o = false } = e, [i, a] = h.useState(null), s = be(h.isValidElement(r) ? xn(r) : null, t);
    if (nt(() => {
      o || a(cm(n) || document.body);
    }, [
      n,
      o
    ]), nt(() => {
      if (i && !o) return ql(t, i), () => {
        ql(t, null);
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
    return i && pl.createPortal(r, i);
  });
  function _n(A) {
    return parseInt(A, 10) || 0;
  }
  const dm = {
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
  function fm(A) {
    for (const e in A) return false;
    return true;
  }
  function mc(A) {
    return fm(A) || A.outerHeightStyle === 0 && !A.overflowing;
  }
  const pm = h.forwardRef(function(e, t) {
    const { onChange: r, maxRows: n, minRows: o = 1, style: i, value: a, ...s } = e, { current: l } = h.useRef(a != null), c = h.useRef(null), u = be(t, c), d = h.useRef(null), f = h.useRef(null), p = h.useCallback(() => {
      const w = c.current, C = f.current;
      if (!w || !C) return;
      const m = vt(w).getComputedStyle(w);
      if (m.width === "0px") return {
        outerHeightStyle: 0,
        overflowing: false
      };
      C.style.width = m.width, C.value = w.value || e.placeholder || "x", C.value.slice(-1) === `
` && (C.value += " ");
      const S = m.boxSizing, H = _n(m.paddingBottom) + _n(m.paddingTop), I = _n(m.borderBottomWidth) + _n(m.borderTopWidth), g = C.scrollHeight;
      C.value = "x";
      const T = C.scrollHeight;
      let R = g;
      o && (R = Math.max(Number(o) * T, R)), n && (R = Math.min(Number(n) * T, R)), R = Math.max(R, T);
      const L = R + (S === "border-box" ? H + I : 0), K = Math.abs(R - g) <= 1;
      return {
        outerHeightStyle: L,
        overflowing: K
      };
    }, [
      n,
      o,
      e.placeholder
    ]), B = rt(() => {
      const w = c.current, C = p();
      if (!w || !C || mc(C)) return false;
      const U = C.outerHeightStyle;
      return d.current != null && d.current !== U;
    }), b = h.useCallback(() => {
      const w = c.current, C = p();
      if (!w || !C || mc(C)) return;
      const U = C.outerHeightStyle;
      d.current !== U && (d.current = U, w.style.height = `${U}px`), w.style.overflow = C.overflowing ? "hidden" : "";
    }, [
      p
    ]), v = h.useRef(-1);
    nt(() => {
      const w = Ed(b), C = c == null ? void 0 : c.current;
      if (!C) return;
      const U = vt(C);
      U.addEventListener("resize", w);
      let m;
      return typeof ResizeObserver < "u" && (m = new ResizeObserver(() => {
        B() && (m.unobserve(C), cancelAnimationFrame(v.current), b(), v.current = requestAnimationFrame(() => {
          m.observe(C);
        }));
      }), m.observe(C)), () => {
        w.clear(), cancelAnimationFrame(v.current), U.removeEventListener("resize", w), m && m.disconnect();
      };
    }, [
      p,
      b,
      B
    ]), nt(() => {
      b();
    });
    const Q = (w) => {
      l || b(), r && r(w);
    };
    return E.jsxs(h.Fragment, {
      children: [
        E.jsx("textarea", {
          value: a,
          onChange: Q,
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
            ...dm.shadow,
            ...i,
            paddingTop: 0,
            paddingBottom: 0
          }
        })
      ]
    });
  });
  Xt = function(A) {
    return typeof A == "string";
  };
  Ir = function({ props: A, states: e, muiFormControl: t }) {
    return e.reduce((r, n) => (r[n] = A[n], t && typeof A[n] > "u" && (r[n] = t[n]), r), {});
  };
  const Bl = h.createContext(void 0);
  Hr = function() {
    return h.useContext(Bl);
  };
  function vc(A) {
    return A != null && !(Array.isArray(A) && A.length === 0);
  }
  function Po(A, e = false) {
    return A && (vc(A.value) && A.value !== "" || e && vc(A.defaultValue) && A.defaultValue !== "");
  }
  function gm(A) {
    return A.startAdornment;
  }
  function hm(A) {
    return NA("MuiInputBase", A);
  }
  const Fr = DA("MuiInputBase", [
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
  var wc;
  const Ni = (A, e) => {
    const { ownerState: t } = A;
    return [
      e.root,
      t.formControl && e.formControl,
      t.startAdornment && e.adornedStart,
      t.endAdornment && e.adornedEnd,
      t.error && e.error,
      t.size === "small" && e.sizeSmall,
      t.multiline && e.multiline,
      t.color && e[`color${bA(t.color)}`],
      t.fullWidth && e.fullWidth,
      t.hiddenLabel && e.hiddenLabel
    ];
  }, Gi = (A, e) => {
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
  }, Bm = (A) => {
    const { classes: e, color: t, disabled: r, error: n, endAdornment: o, focused: i, formControl: a, fullWidth: s, hiddenLabel: l, multiline: c, readOnly: u, size: d, startAdornment: f, type: p } = A, B = {
      root: [
        "root",
        `color${bA(t)}`,
        r && "disabled",
        n && "error",
        s && "fullWidth",
        i && "focused",
        a && "formControl",
        d && d !== "medium" && `size${bA(d)}`,
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
    return GA(B, hm, e);
  }, Vi = hA("div", {
    name: "MuiInputBase",
    slot: "Root",
    overridesResolver: Ni
  })(IA(({ theme: A }) => ({
    ...A.typography.body1,
    color: (A.vars || A).palette.text.primary,
    lineHeight: "1.4375em",
    boxSizing: "border-box",
    position: "relative",
    cursor: "text",
    display: "inline-flex",
    alignItems: "center",
    [`&.${Fr.disabled}`]: {
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
  }))), $i = hA("input", {
    name: "MuiInputBase",
    slot: "Input",
    overridesResolver: Gi
  })(IA(({ theme: A }) => {
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
      [`label[data-shrink=false] + .${Fr.formControl} &`]: {
        "&::-webkit-input-placeholder": r,
        "&::-moz-placeholder": r,
        "&::-ms-input-placeholder": r,
        "&:focus::-webkit-input-placeholder": n,
        "&:focus::-moz-placeholder": n,
        "&:focus::-ms-input-placeholder": n
      },
      [`&.${Fr.disabled}`]: {
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
  })), Cc = fl({
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
  }), ml = h.forwardRef(function(e, t) {
    const r = VA({
      props: e,
      name: "MuiInputBase"
    }), { "aria-describedby": n, autoComplete: o, autoFocus: i, className: a, color: s, components: l = {}, componentsProps: c = {}, defaultValue: u, disabled: d, disableInjectingGlobalStyles: f, endAdornment: p, error: B, fullWidth: b = false, id: v, inputComponent: Q = "input", inputProps: w = {}, inputRef: C, margin: U, maxRows: m, minRows: S, multiline: H = false, name: I, onBlur: g, onChange: T, onClick: R, onFocus: L, onKeyDown: K, onKeyUp: M, placeholder: O, readOnly: Y, renderSuffix: N, rows: P, size: AA, slotProps: Z = {}, slots: iA = {}, startAdornment: D, type: J = "text", value: j, ...tA } = r, mA = w.value != null ? w.value : j, { current: dA } = h.useRef(mA != null), nA = h.useRef(), eA = h.useCallback((QA) => {
    }, []), sA = be(nA, C, w.ref, eA), [lA, y] = h.useState(false), x = Hr(), F = Ir({
      props: r,
      muiFormControl: x,
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
    F.focused = x ? x.focused : lA, h.useEffect(() => {
      !x && d && lA && (y(false), g && g());
    }, [
      x,
      d,
      lA,
      g
    ]);
    const V = x && x.onFilled, z = x && x.onEmpty, W = h.useCallback((QA) => {
      Po(QA) ? V && V() : z && z();
    }, [
      V,
      z
    ]);
    nt(() => {
      dA && W({
        value: mA
      });
    }, [
      mA,
      W,
      dA
    ]);
    const gA = (QA) => {
      L && L(QA), w.onFocus && w.onFocus(QA), x && x.onFocus ? x.onFocus(QA) : y(true);
    }, BA = (QA) => {
      g && g(QA), w.onBlur && w.onBlur(QA), x && x.onBlur ? x.onBlur(QA) : y(false);
    }, $ = (QA, ...te) => {
      if (!dA) {
        const PA = QA.target || nA.current;
        if (PA == null) throw new Error(Bt(1));
        W({
          value: PA.value
        });
      }
      w.onChange && w.onChange(QA, ...te), T && T(QA, ...te);
    };
    h.useEffect(() => {
      W(nA.current);
    }, []);
    const G = (QA) => {
      nA.current && QA.currentTarget === QA.target && nA.current.focus(), R && R(QA);
    };
    let fA = Q, rA = w;
    H && fA === "input" && (P ? rA = {
      type: void 0,
      minRows: P,
      maxRows: P,
      ...rA
    } : rA = {
      type: void 0,
      maxRows: m,
      minRows: S,
      ...rA
    }, fA = pm);
    const X = (QA) => {
      W(QA.animationName === "mui-auto-fill-cancel" ? nA.current : {
        value: "x"
      });
    };
    h.useEffect(() => {
      x && x.setAdornedStart(!!D);
    }, [
      x,
      D
    ]);
    const q = {
      ...r,
      color: F.color || "primary",
      disabled: F.disabled,
      endAdornment: p,
      error: F.error,
      focused: F.focused,
      formControl: x,
      fullWidth: b,
      hiddenLabel: F.hiddenLabel,
      multiline: H,
      size: F.size,
      startAdornment: D,
      type: J
    }, uA = Bm(q), vA = iA.root || l.Root || Vi, yA = Z.root || c.root || {}, wA = iA.input || l.Input || $i;
    return rA = {
      ...rA,
      ...Z.input ?? c.input
    }, E.jsxs(h.Fragment, {
      children: [
        !f && typeof Cc == "function" && (wc || (wc = E.jsx(Cc, {}))),
        E.jsxs(vA, {
          ...yA,
          ref: t,
          onClick: G,
          ...tA,
          ...!Xt(vA) && {
            ownerState: {
              ...q,
              ...yA.ownerState
            }
          },
          className: CA(uA.root, yA.className, a, Y && "MuiInputBase-readOnly"),
          children: [
            D,
            E.jsx(Bl.Provider, {
              value: null,
              children: E.jsx(wA, {
                "aria-invalid": F.error,
                "aria-describedby": n,
                autoComplete: o,
                autoFocus: i,
                defaultValue: u,
                disabled: F.disabled,
                id: v,
                onAnimationStart: X,
                name: I,
                placeholder: O,
                readOnly: Y,
                required: F.required,
                rows: P,
                value: mA,
                onKeyDown: K,
                onKeyUp: M,
                type: J,
                ...rA,
                ...!Xt(wA) && {
                  as: fA,
                  ownerState: {
                    ...q,
                    ...rA.ownerState
                  }
                },
                ref: sA,
                className: CA(uA.input, rA.className, Y && "MuiInputBase-readOnly"),
                onBlur: BA,
                onChange: $,
                onFocus: gA
              })
            }),
            p,
            N ? N({
              ...F,
              startAdornment: D
            }) : null
          ]
        })
      ]
    });
  });
  function mm(A) {
    return NA("MuiInput", A);
  }
  const Rr = {
    ...Fr,
    ...DA("MuiInput", [
      "root",
      "underline",
      "input"
    ])
  };
  function vm(A) {
    return NA("MuiOutlinedInput", A);
  }
  const We = {
    ...Fr,
    ...DA("MuiOutlinedInput", [
      "root",
      "notchedOutline",
      "input"
    ])
  };
  function wm(A) {
    return NA("MuiFilledInput", A);
  }
  let Dt, Cm, ym;
  Dt = {
    ...Fr,
    ...DA("MuiFilledInput", [
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
  Cm = zd(E.jsx("path", {
    d: "M7 10l5 5 5-5z"
  }), "ArrowDropDown");
  ym = {
    entering: {
      opacity: 1
    },
    entered: {
      opacity: 1
    }
  };
  bm = h.forwardRef(function(e, t) {
    const r = dl(), n = {
      enter: r.transitions.duration.enteringScreen,
      exit: r.transitions.duration.leavingScreen
    }, { addEndListener: o, appear: i = true, children: a, easing: s, in: l, onEnter: c, onEntered: u, onEntering: d, onExit: f, onExited: p, onExiting: B, style: b, timeout: v = n, TransitionComponent: Q = it, ...w } = e, C = h.useRef(null), U = be(C, xn(a), t), m = (K) => (M) => {
      if (K) {
        const O = C.current;
        M === void 0 ? K(O) : K(O, M);
      }
    }, S = m(d), H = m((K, M) => {
      Jd(K);
      const O = Ko({
        style: b,
        timeout: v,
        easing: s
      }, {
        mode: "enter"
      });
      K.style.webkitTransition = r.transitions.create("opacity", O), K.style.transition = r.transitions.create("opacity", O), c && c(K, M);
    }), I = m(u), g = m(B), T = m((K) => {
      const M = Ko({
        style: b,
        timeout: v,
        easing: s
      }, {
        mode: "exit"
      });
      K.style.webkitTransition = r.transitions.create("opacity", M), K.style.transition = r.transitions.create("opacity", M), f && f(K);
    }), R = m(p), L = (K) => {
      o && o(C.current, K);
    };
    return E.jsx(Q, {
      appear: i,
      in: l,
      nodeRef: C,
      onEnter: H,
      onEntered: I,
      onEntering: S,
      onExit: T,
      onExited: R,
      onExiting: g,
      addEndListener: L,
      timeout: v,
      ...w,
      children: (K, { ownerState: M, ...O }) => h.cloneElement(a, {
        style: {
          opacity: 0,
          visibility: K === "exited" && !l ? "hidden" : void 0,
          ...ym[K],
          ...b,
          ...a.props.style
        },
        ref: U,
        ...O
      })
    });
  });
  function Qm(A) {
    return NA("MuiBackdrop", A);
  }
  DA("MuiBackdrop", [
    "root",
    "invisible"
  ]);
  let Fm, Um, xm, Em, as, Im, Hm, Zd, So, Tm, km;
  Fm = (A) => {
    const { classes: e, invisible: t } = A;
    return GA({
      root: [
        "root",
        t && "invisible"
      ]
    }, Qm, e);
  };
  Um = hA("div", {
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
  Sm = h.forwardRef(function(e, t) {
    const r = VA({
      props: e,
      name: "MuiBackdrop"
    }), { children: n, className: o, component: i = "div", invisible: a = false, open: s, components: l = {}, componentsProps: c = {}, slotProps: u = {}, slots: d = {}, TransitionComponent: f, transitionDuration: p, ...B } = r, b = {
      ...r,
      component: i,
      invisible: a
    }, v = Fm(b), Q = {
      transition: f,
      root: l.Root,
      ...d
    }, w = {
      ...c,
      ...u
    }, C = {
      slots: Q,
      slotProps: w
    }, [U, m] = me("root", {
      elementType: Um,
      externalForwardedProps: C,
      className: CA(v.root, o),
      ownerState: b
    }), [S, H] = me("transition", {
      elementType: bm,
      externalForwardedProps: C,
      ownerState: b
    });
    return E.jsx(S, {
      in: s,
      timeout: p,
      ...B,
      ...H,
      children: E.jsx(U, {
        "aria-hidden": true,
        ...m,
        classes: v,
        ref: t,
        children: n
      })
    });
  });
  xm = DA("MuiBox", [
    "root"
  ]);
  Em = Pi();
  de = Nh({
    themeId: et,
    defaultTheme: Em,
    defaultClassName: xm.root,
    generateClassName: Qd.generate
  });
  as = typeof fl({}) == "function";
  Im = (A, e) => ({
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    boxSizing: "border-box",
    WebkitTextSizeAdjust: "100%",
    ...e && !A.vars && {
      colorScheme: A.palette.mode
    }
  });
  Hm = (A) => ({
    color: (A.vars || A).palette.text.primary,
    ...A.typography.body1,
    backgroundColor: (A.vars || A).palette.background.default,
    "@media print": {
      backgroundColor: (A.vars || A).palette.common.white
    }
  });
  Zd = (A, e = false) => {
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
      html: Im(A, e),
      "*, *::before, *::after": {
        boxSizing: "inherit"
      },
      "strong, b": {
        fontWeight: A.typography.fontWeightBold
      },
      body: {
        margin: 0,
        ...Hm(A),
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
  So = "mui-ecs";
  Tm = (A) => {
    const e = Zd(A, false), t = Array.isArray(e) ? e[0] : e;
    return !A.vars && t && (t.html[`:root:has(${So})`] = {
      colorScheme: A.palette.mode
    }), A.colorSchemes && Object.entries(A.colorSchemes).forEach(([r, n]) => {
      var _a2, _b2;
      const o = A.getColorSchemeSelector(r);
      o.startsWith("@") ? t[o] = {
        [`:root:not(:has(.${So}))`]: {
          colorScheme: (_a2 = n.palette) == null ? void 0 : _a2.mode
        }
      } : t[o.replace(/\s*&/, "")] = {
        [`&:not(:has(.${So}))`]: {
          colorScheme: (_b2 = n.palette) == null ? void 0 : _b2.mode
        }
      };
    }), e;
  };
  km = fl(as ? ({ theme: A, enableColorScheme: e }) => Zd(A, e) : ({ theme: A }) => Tm(A));
  function Lm(A) {
    const e = VA({
      props: A,
      name: "MuiCssBaseline"
    }), { children: t, enableColorScheme: r = false } = e;
    return E.jsxs(h.Fragment, {
      children: [
        as && E.jsx(km, {
          enableColorScheme: r
        }),
        !as && !r && E.jsx("span", {
          className: So,
          style: {
            display: "none"
          }
        }),
        t
      ]
    });
  }
  function Rm(A) {
    const e = ye(A);
    return e.body === A ? vt(A).innerWidth > e.documentElement.clientWidth : A.scrollHeight > A.clientHeight;
  }
  function tn(A, e) {
    e ? A.setAttribute("aria-hidden", "true") : A.removeAttribute("aria-hidden");
  }
  function yc(A) {
    return parseInt(vt(A).getComputedStyle(A).paddingRight, 10) || 0;
  }
  function Om(A) {
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
  function bc(A, e, t, r, n) {
    const o = [
      e,
      t,
      ...r
    ];
    [].forEach.call(A.children, (i) => {
      const a = !o.includes(i), s = !Om(i);
      a && s && tn(i, n);
    });
  }
  function fa(A, e) {
    let t = -1;
    return A.some((r, n) => e(r) ? (t = n, true) : false), t;
  }
  function Mm(A, e) {
    const t = [], r = A.container;
    if (!e.disableScrollLock) {
      if (Rm(r)) {
        const i = Td(vt(r));
        t.push({
          value: r.style.paddingRight,
          property: "padding-right",
          el: r
        }), r.style.paddingRight = `${yc(r) + i}px`;
        const a = ye(r).querySelectorAll(".mui-fixed");
        [].forEach.call(a, (s) => {
          t.push({
            value: s.style.paddingRight,
            property: "padding-right",
            el: s
          }), s.style.paddingRight = `${yc(s) + i}px`;
        });
      }
      let o;
      if (r.parentNode instanceof DocumentFragment) o = ye(r).body;
      else {
        const i = r.parentElement, a = vt(r);
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
  function Km(A) {
    const e = [];
    return [].forEach.call(A.children, (t) => {
      t.getAttribute("aria-hidden") === "true" && e.push(t);
    }), e;
  }
  class Dm {
    constructor() {
      this.modals = [], this.containers = [];
    }
    add(e, t) {
      let r = this.modals.indexOf(e);
      if (r !== -1) return r;
      r = this.modals.length, this.modals.push(e), e.modalRef && tn(e.modalRef, false);
      const n = Km(t);
      bc(t, e.mount, e.modalRef, n, true);
      const o = fa(this.containers, (i) => i.container === t);
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
      const r = fa(this.containers, (o) => o.modals.includes(e)), n = this.containers[r];
      n.restore || (n.restore = Mm(n, t));
    }
    remove(e, t = true) {
      const r = this.modals.indexOf(e);
      if (r === -1) return r;
      const n = fa(this.containers, (i) => i.modals.includes(e)), o = this.containers[n];
      if (o.modals.splice(o.modals.indexOf(e), 1), this.modals.splice(r, 1), o.modals.length === 0) o.restore && o.restore(), e.modalRef && tn(e.modalRef, t), bc(o.container, e.mount, e.modalRef, o.hiddenSiblings, false), this.containers.splice(n, 1);
      else {
        const i = o.modals[o.modals.length - 1];
        i.modalRef && tn(i.modalRef, false);
      }
      return r;
    }
    isTopModal(e) {
      return this.modals.length > 0 && this.modals[this.modals.length - 1] === e;
    }
  }
  const Pm = [
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
  function _m(A) {
    const e = parseInt(A.getAttribute("tabindex") || "", 10);
    return Number.isNaN(e) ? A.contentEditable === "true" || (A.nodeName === "AUDIO" || A.nodeName === "VIDEO" || A.nodeName === "DETAILS") && A.getAttribute("tabindex") === null ? 0 : A.tabIndex : e;
  }
  function Nm(A) {
    if (A.tagName !== "INPUT" || A.type !== "radio" || !A.name) return false;
    const e = (r) => A.ownerDocument.querySelector(`input[type="radio"]${r}`);
    let t = e(`[name="${A.name}"]:checked`);
    return t || (t = e(`[name="${A.name}"]`)), t !== A;
  }
  function Gm(A) {
    return !(A.disabled || A.tagName === "INPUT" && A.type === "hidden" || Nm(A));
  }
  function Vm(A) {
    const e = [], t = [];
    return Array.from(A.querySelectorAll(Pm)).forEach((r, n) => {
      const o = _m(r);
      o === -1 || !Gm(r) || (o === 0 ? e.push(r) : t.push({
        documentOrder: n,
        tabIndex: o,
        node: r
      }));
    }), t.sort((r, n) => r.tabIndex === n.tabIndex ? r.documentOrder - n.documentOrder : r.tabIndex - n.tabIndex).map((r) => r.node).concat(e);
  }
  function $m() {
    return true;
  }
  function Wm(A) {
    const { children: e, disableAutoFocus: t = false, disableEnforceFocus: r = false, disableRestoreFocus: n = false, getTabbable: o = Vm, isEnabled: i = $m, open: a } = A, s = h.useRef(false), l = h.useRef(null), c = h.useRef(null), u = h.useRef(null), d = h.useRef(null), f = h.useRef(false), p = h.useRef(null), B = be(xn(e), p), b = h.useRef(null);
    h.useEffect(() => {
      !a || !p.current || (f.current = !t);
    }, [
      t,
      a
    ]), h.useEffect(() => {
      if (!a || !p.current) return;
      const w = ye(p.current);
      return p.current.contains(w.activeElement) || (p.current.hasAttribute("tabIndex") || p.current.setAttribute("tabIndex", "-1"), f.current && p.current.focus()), () => {
        n || (u.current && u.current.focus && (s.current = true, u.current.focus()), u.current = null);
      };
    }, [
      a
    ]), h.useEffect(() => {
      if (!a || !p.current) return;
      const w = ye(p.current), C = (S) => {
        b.current = S, !(r || !i() || S.key !== "Tab") && w.activeElement === p.current && S.shiftKey && (s.current = true, c.current && c.current.focus());
      }, U = () => {
        var _a2, _b2;
        const S = p.current;
        if (S === null) return;
        if (!w.hasFocus() || !i() || s.current) {
          s.current = false;
          return;
        }
        if (S.contains(w.activeElement) || r && w.activeElement !== l.current && w.activeElement !== c.current) return;
        if (w.activeElement !== d.current) d.current = null;
        else if (d.current !== null) return;
        if (!f.current) return;
        let H = [];
        if ((w.activeElement === l.current || w.activeElement === c.current) && (H = o(p.current)), H.length > 0) {
          const I = !!(((_a2 = b.current) == null ? void 0 : _a2.shiftKey) && ((_b2 = b.current) == null ? void 0 : _b2.key) === "Tab"), g = H[0], T = H[H.length - 1];
          typeof g != "string" && typeof T != "string" && (I ? T.focus() : g.focus());
        } else S.focus();
      };
      w.addEventListener("focusin", U), w.addEventListener("keydown", C, true);
      const m = setInterval(() => {
        w.activeElement && w.activeElement.tagName === "BODY" && U();
      }, 50);
      return () => {
        clearInterval(m), w.removeEventListener("focusin", U), w.removeEventListener("keydown", C, true);
      };
    }, [
      t,
      r,
      n,
      i,
      a,
      o
    ]);
    const v = (w) => {
      u.current === null && (u.current = w.relatedTarget), f.current = true, d.current = w.target;
      const C = e.props.onFocus;
      C && C(w);
    }, Q = (w) => {
      u.current === null && (u.current = w.relatedTarget), f.current = true;
    };
    return E.jsxs(h.Fragment, {
      children: [
        E.jsx("div", {
          tabIndex: a ? 0 : -1,
          onFocus: Q,
          ref: l,
          "data-testid": "sentinelStart"
        }),
        h.cloneElement(e, {
          ref: B,
          onFocus: v
        }),
        E.jsx("div", {
          tabIndex: a ? 0 : -1,
          onFocus: Q,
          ref: c,
          "data-testid": "sentinelEnd"
        })
      ]
    });
  }
  function jm(A) {
    return typeof A == "function" ? A() : A;
  }
  function zm(A) {
    return A ? A.props.hasOwnProperty("in") : false;
  }
  const Qc = () => {
  }, Nn = new Dm();
  function Xm(A) {
    const { container: e, disableEscapeKeyDown: t = false, disableScrollLock: r = false, closeAfterTransition: n = false, onTransitionEnter: o, onTransitionExited: i, children: a, onClose: s, open: l, rootRef: c } = A, u = h.useRef({}), d = h.useRef(null), f = h.useRef(null), p = be(f, c), [B, b] = h.useState(!l), v = zm(a);
    let Q = true;
    (A["aria-hidden"] === "false" || A["aria-hidden"] === false) && (Q = false);
    const w = () => ye(d.current), C = () => (u.current.modalRef = f.current, u.current.mount = d.current, u.current), U = () => {
      Nn.mount(C(), {
        disableScrollLock: r
      }), f.current && (f.current.scrollTop = 0);
    }, m = rt(() => {
      const M = jm(e) || w().body;
      Nn.add(C(), M), f.current && U();
    }), S = () => Nn.isTopModal(C()), H = rt((M) => {
      d.current = M, M && (l && S() ? U() : f.current && tn(f.current, Q));
    }), I = h.useCallback(() => {
      Nn.remove(C(), Q);
    }, [
      Q
    ]);
    h.useEffect(() => () => {
      I();
    }, [
      I
    ]), h.useEffect(() => {
      l ? m() : (!v || !n) && I();
    }, [
      l,
      I,
      v,
      n,
      m
    ]);
    const g = (M) => (O) => {
      var _a2;
      (_a2 = M.onKeyDown) == null ? void 0 : _a2.call(M, O), !(O.key !== "Escape" || O.which === 229 || !S()) && (t || (O.stopPropagation(), s && s(O, "escapeKeyDown")));
    }, T = (M) => (O) => {
      var _a2;
      (_a2 = M.onClick) == null ? void 0 : _a2.call(M, O), O.target === O.currentTarget && s && s(O, "backdropClick");
    };
    return {
      getRootProps: (M = {}) => {
        const O = An(A);
        delete O.onTransitionEnter, delete O.onTransitionExited;
        const Y = {
          ...O,
          ...M
        };
        return {
          role: "presentation",
          ...Y,
          onKeyDown: g(Y),
          ref: p
        };
      },
      getBackdropProps: (M = {}) => {
        const O = M;
        return {
          "aria-hidden": true,
          ...O,
          onClick: T(O),
          open: l
        };
      },
      getTransitionProps: () => {
        const M = () => {
          b(false), o && o();
        }, O = () => {
          b(true), i && i(), n && I();
        };
        return {
          onEnter: Zl(M, (a == null ? void 0 : a.props.onEnter) ?? Qc),
          onExited: Zl(O, (a == null ? void 0 : a.props.onExited) ?? Qc)
        };
      },
      rootRef: p,
      portalRef: H,
      isTopModal: S,
      exited: B,
      hasTransition: v
    };
  }
  function Ym(A) {
    return NA("MuiModal", A);
  }
  DA("MuiModal", [
    "root",
    "hidden",
    "backdrop"
  ]);
  let Jm, Zm, qm;
  Jm = (A) => {
    const { open: e, exited: t, classes: r } = A;
    return GA({
      root: [
        "root",
        !e && t && "hidden"
      ],
      backdrop: [
        "backdrop"
      ]
    }, Ym, r);
  };
  Zm = hA("div", {
    name: "MuiModal",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.root,
        !t.open && t.exited && e.hidden
      ];
    }
  })(IA(({ theme: A }) => ({
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
  qm = hA(Sm, {
    name: "MuiModal",
    slot: "Backdrop",
    overridesResolver: (A, e) => e.backdrop
  })({
    zIndex: -1
  });
  Av = h.forwardRef(function(e, t) {
    const r = VA({
      name: "MuiModal",
      props: e
    }), { BackdropComponent: n = qm, BackdropProps: o, classes: i, className: a, closeAfterTransition: s = false, children: l, container: c, component: u, components: d = {}, componentsProps: f = {}, disableAutoFocus: p = false, disableEnforceFocus: B = false, disableEscapeKeyDown: b = false, disablePortal: v = false, disableRestoreFocus: Q = false, disableScrollLock: w = false, hideBackdrop: C = false, keepMounted: U = false, onBackdropClick: m, onClose: S, onTransitionEnter: H, onTransitionExited: I, open: g, slotProps: T = {}, slots: R = {}, theme: L, ...K } = r, M = {
      ...r,
      closeAfterTransition: s,
      disableAutoFocus: p,
      disableEnforceFocus: B,
      disableEscapeKeyDown: b,
      disablePortal: v,
      disableRestoreFocus: Q,
      disableScrollLock: w,
      hideBackdrop: C,
      keepMounted: U
    }, { getRootProps: O, getBackdropProps: Y, getTransitionProps: N, portalRef: P, isTopModal: AA, exited: Z, hasTransition: iA } = Xm({
      ...M,
      rootRef: t
    }), D = {
      ...M,
      exited: Z
    }, J = Jm(D), j = {};
    if (l.props.tabIndex === void 0 && (j.tabIndex = "-1"), iA) {
      const { onEnter: sA, onExited: lA } = N();
      j.onEnter = sA, j.onExited = lA;
    }
    const tA = {
      slots: {
        root: d.Root,
        backdrop: d.Backdrop,
        ...R
      },
      slotProps: {
        ...f,
        ...T
      }
    }, [mA, dA] = me("root", {
      ref: t,
      elementType: Zm,
      externalForwardedProps: {
        ...tA,
        ...K,
        component: u
      },
      getSlotProps: O,
      ownerState: D,
      className: CA(a, J == null ? void 0 : J.root, !D.open && D.exited && (J == null ? void 0 : J.hidden))
    }), [nA, eA] = me("backdrop", {
      ref: o == null ? void 0 : o.ref,
      elementType: n,
      externalForwardedProps: tA,
      shouldForwardComponentProp: true,
      additionalProps: o,
      getSlotProps: (sA) => Y({
        ...sA,
        onClick: (lA) => {
          m && m(lA), (sA == null ? void 0 : sA.onClick) && sA.onClick(lA);
        }
      }),
      className: CA(o == null ? void 0 : o.className, J == null ? void 0 : J.backdrop),
      ownerState: D
    });
    return !U && !g && (!iA || Z) ? null : E.jsx(um, {
      ref: P,
      container: c,
      disablePortal: v,
      children: E.jsxs(mA, {
        ...dA,
        children: [
          !C && n ? E.jsx(nA, {
            ...eA
          }) : null,
          E.jsx(Wm, {
            disableEnforceFocus: B,
            disableAutoFocus: p,
            disableRestoreFocus: Q,
            isEnabled: AA,
            open: g,
            children: h.cloneElement(l, j)
          })
        ]
      })
    });
  });
  function ev(A) {
    return NA("MuiDivider", A);
  }
  let tv, rv, nv;
  ZS = DA("MuiDivider", [
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
  tv = (A) => {
    const { absolute: e, children: t, classes: r, flexItem: n, light: o, orientation: i, textAlign: a, variant: s } = A;
    return GA({
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
    }, ev, r);
  };
  rv = hA("div", {
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
  })(IA(({ theme: A }) => ({
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
          borderColor: A.vars ? `rgba(${A.vars.palette.dividerChannel} / 0.08)` : Ot(A.palette.divider, 0.08)
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
  nv = hA("span", {
    name: "MuiDivider",
    slot: "Wrapper",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.wrapper,
        t.orientation === "vertical" && e.wrapperVertical
      ];
    }
  })(IA(({ theme: A }) => ({
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
  _o = h.forwardRef(function(e, t) {
    const r = VA({
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
    }, b = tv(B);
    return E.jsx(rv, {
      as: s,
      className: CA(b.root, i),
      role: u,
      ref: t,
      ownerState: B,
      "aria-orientation": u === "separator" && (s !== "hr" || a === "vertical") ? a : void 0,
      ...p,
      children: o ? E.jsx(nv, {
        className: b.wrapper,
        ownerState: B,
        children: o
      }) : null
    });
  });
  _o && (_o.muiSkipListHighlight = true);
  const ov = (A) => {
    const { classes: e, disableUnderline: t, startAdornment: r, endAdornment: n, size: o, hiddenLabel: i, multiline: a } = A, s = {
      root: [
        "root",
        !t && "underline",
        r && "adornedStart",
        n && "adornedEnd",
        o === "small" && `size${bA(o)}`,
        i && "hiddenLabel",
        a && "multiline"
      ],
      input: [
        "input"
      ]
    }, l = GA(s, wm, e);
    return {
      ...e,
      ...l
    };
  }, iv = hA(Vi, {
    shouldForwardProp: (A) => ot(A) || A === "classes",
    name: "MuiFilledInput",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        ...Ni(A, e),
        !t.disableUnderline && e.underline
      ];
    }
  })(IA(({ theme: A }) => {
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
      [`&.${Dt.focused}`]: {
        backgroundColor: A.vars ? A.vars.palette.FilledInput.bg : r
      },
      [`&.${Dt.disabled}`]: {
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
            [`&.${Dt.focused}:after`]: {
              transform: "scaleX(1) translateX(0)"
            },
            [`&.${Dt.error}`]: {
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
            [`&:hover:not(.${Dt.disabled}, .${Dt.error}):before`]: {
              borderBottom: `1px solid ${(A.vars || A).palette.text.primary}`
            },
            [`&.${Dt.disabled}:before`]: {
              borderBottomStyle: "dotted"
            }
          }
        },
        ...Object.entries(A.palette).filter(Ne()).map(([i]) => {
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
  })), av = hA($i, {
    name: "MuiFilledInput",
    slot: "Input",
    overridesResolver: Gi
  })(IA(({ theme: A }) => ({
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
  }))), vl = h.forwardRef(function(e, t) {
    const r = VA({
      props: e,
      name: "MuiFilledInput"
    }), { disableUnderline: n = false, components: o = {}, componentsProps: i, fullWidth: a = false, hiddenLabel: s, inputComponent: l = "input", multiline: c = false, slotProps: u, slots: d = {}, type: f = "text", ...p } = r, B = {
      ...r,
      disableUnderline: n,
      fullWidth: a,
      inputComponent: l,
      multiline: c,
      type: f
    }, b = ov(r), v = {
      root: {
        ownerState: B
      },
      input: {
        ownerState: B
      }
    }, Q = u ?? i ? ae(v, u ?? i) : v, w = d.root ?? o.Root ?? iv, C = d.input ?? o.Input ?? av;
    return E.jsx(ml, {
      slots: {
        root: w,
        input: C
      },
      slotProps: Q,
      fullWidth: a,
      inputComponent: l,
      multiline: c,
      ref: t,
      type: f,
      ...p,
      classes: b
    });
  });
  vl.muiName = "Input";
  function sv(A) {
    return NA("MuiFormControl", A);
  }
  DA("MuiFormControl", [
    "root",
    "marginNone",
    "marginNormal",
    "marginDense",
    "fullWidth",
    "disabled"
  ]);
  const lv = (A) => {
    const { classes: e, margin: t, fullWidth: r } = A, n = {
      root: [
        "root",
        t !== "none" && `margin${bA(t)}`,
        r && "fullWidth"
      ]
    };
    return GA(n, sv, e);
  }, cv = hA("div", {
    name: "MuiFormControl",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.root,
        e[`margin${bA(t.margin)}`],
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
  }), uv = h.forwardRef(function(e, t) {
    const r = VA({
      props: e,
      name: "MuiFormControl"
    }), { children: n, className: o, color: i = "primary", component: a = "div", disabled: s = false, error: l = false, focused: c, fullWidth: u = false, hiddenLabel: d = false, margin: f = "none", required: p = false, size: B = "medium", variant: b = "outlined", ...v } = r, Q = {
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
      variant: b
    }, w = lv(Q), [C, U] = h.useState(() => {
      let M = false;
      return n && h.Children.forEach(n, (O) => {
        if (!la(O, [
          "Input",
          "Select"
        ])) return;
        const Y = la(O, [
          "Select"
        ]) ? O.props.input : O;
        Y && gm(Y.props) && (M = true);
      }), M;
    }), [m, S] = h.useState(() => {
      let M = false;
      return n && h.Children.forEach(n, (O) => {
        la(O, [
          "Input",
          "Select"
        ]) && (Po(O.props, true) || Po(O.props.inputProps, true)) && (M = true);
      }), M;
    }), [H, I] = h.useState(false);
    s && H && I(false);
    const g = c !== void 0 && !s ? c : H;
    let T;
    h.useRef(false);
    const R = h.useCallback(() => {
      S(true);
    }, []), L = h.useCallback(() => {
      S(false);
    }, []), K = h.useMemo(() => ({
      adornedStart: C,
      setAdornedStart: U,
      color: i,
      disabled: s,
      error: l,
      filled: m,
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
      registerEffect: T,
      required: p,
      variant: b
    }), [
      C,
      i,
      s,
      l,
      m,
      g,
      u,
      d,
      T,
      L,
      R,
      p,
      B,
      b
    ]);
    return E.jsx(Bl.Provider, {
      value: K,
      children: E.jsx(cv, {
        as: a,
        ownerState: Q,
        className: CA(w.root, o),
        ref: t,
        ...v,
        children: n
      })
    });
  });
  function dv(A) {
    return NA("MuiFormHelperText", A);
  }
  const Fc = DA("MuiFormHelperText", [
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
  var Uc;
  const fv = (A) => {
    const { classes: e, contained: t, size: r, disabled: n, error: o, filled: i, focused: a, required: s } = A, l = {
      root: [
        "root",
        n && "disabled",
        o && "error",
        r && `size${bA(r)}`,
        t && "contained",
        a && "focused",
        i && "filled",
        s && "required"
      ]
    };
    return GA(l, dv, e);
  }, pv = hA("p", {
    name: "MuiFormHelperText",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.root,
        t.size && e[`size${bA(t.size)}`],
        t.contained && e.contained,
        t.filled && e.filled
      ];
    }
  })(IA(({ theme: A }) => ({
    color: (A.vars || A).palette.text.secondary,
    ...A.typography.caption,
    textAlign: "left",
    marginTop: 3,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    [`&.${Fc.disabled}`]: {
      color: (A.vars || A).palette.text.disabled
    },
    [`&.${Fc.error}`]: {
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
  }))), gv = h.forwardRef(function(e, t) {
    const r = VA({
      props: e,
      name: "MuiFormHelperText"
    }), { children: n, className: o, component: i = "p", disabled: a, error: s, filled: l, focused: c, margin: u, required: d, variant: f, ...p } = r, B = Hr(), b = Ir({
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
    }), v = {
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
    delete v.ownerState;
    const Q = fv(v);
    return E.jsx(pv, {
      as: i,
      className: CA(Q.root, o),
      ref: t,
      ...p,
      ownerState: v,
      children: n === " " ? Uc || (Uc = E.jsx("span", {
        className: "notranslate",
        "aria-hidden": true,
        children: "\u200B"
      })) : n
    });
  });
  function hv(A) {
    return NA("MuiFormLabel", A);
  }
  const rn = DA("MuiFormLabel", [
    "root",
    "colorSecondary",
    "focused",
    "disabled",
    "error",
    "filled",
    "required",
    "asterisk"
  ]), Bv = (A) => {
    const { classes: e, color: t, focused: r, disabled: n, error: o, filled: i, required: a } = A, s = {
      root: [
        "root",
        `color${bA(t)}`,
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
    return GA(s, hv, e);
  }, mv = hA("label", {
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
  })(IA(({ theme: A }) => ({
    color: (A.vars || A).palette.text.secondary,
    ...A.typography.body1,
    lineHeight: "1.4375em",
    padding: 0,
    position: "relative",
    variants: [
      ...Object.entries(A.palette).filter(Ne()).map(([e]) => ({
        props: {
          color: e
        },
        style: {
          [`&.${rn.focused}`]: {
            color: (A.vars || A).palette[e].main
          }
        }
      })),
      {
        props: {},
        style: {
          [`&.${rn.disabled}`]: {
            color: (A.vars || A).palette.text.disabled
          },
          [`&.${rn.error}`]: {
            color: (A.vars || A).palette.error.main
          }
        }
      }
    ]
  }))), vv = hA("span", {
    name: "MuiFormLabel",
    slot: "Asterisk",
    overridesResolver: (A, e) => e.asterisk
  })(IA(({ theme: A }) => ({
    [`&.${rn.error}`]: {
      color: (A.vars || A).palette.error.main
    }
  }))), wv = h.forwardRef(function(e, t) {
    const r = VA({
      props: e,
      name: "MuiFormLabel"
    }), { children: n, className: o, color: i, component: a = "label", disabled: s, error: l, filled: c, focused: u, required: d, ...f } = r, p = Hr(), B = Ir({
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
    }), b = {
      ...r,
      color: B.color || "primary",
      component: a,
      disabled: B.disabled,
      error: B.error,
      filled: B.filled,
      focused: B.focused,
      required: B.required
    }, v = Bv(b);
    return E.jsxs(mv, {
      as: a,
      ownerState: b,
      className: CA(v.root, o),
      ref: t,
      ...f,
      children: [
        n,
        B.required && E.jsxs(vv, {
          ownerState: b,
          "aria-hidden": true,
          className: v.asterisk,
          children: [
            "\u2009",
            "*"
          ]
        })
      ]
    });
  });
  function ss(A) {
    return `scale(${A}, ${A ** 2})`;
  }
  const Cv = {
    entering: {
      opacity: 1,
      transform: ss(1)
    },
    entered: {
      opacity: 1,
      transform: "none"
    }
  }, pa = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), ls = h.forwardRef(function(e, t) {
    const { addEndListener: r, appear: n = true, children: o, easing: i, in: a, onEnter: s, onEntered: l, onEntering: c, onExit: u, onExited: d, onExiting: f, style: p, timeout: B = "auto", TransitionComponent: b = it, ...v } = e, Q = Hd(), w = h.useRef(), C = dl(), U = h.useRef(null), m = be(U, xn(o), t), S = (M) => (O) => {
      if (M) {
        const Y = U.current;
        O === void 0 ? M(Y) : M(Y, O);
      }
    }, H = S(c), I = S((M, O) => {
      Jd(M);
      const { duration: Y, delay: N, easing: P } = Ko({
        style: p,
        timeout: B,
        easing: i
      }, {
        mode: "enter"
      });
      let AA;
      B === "auto" ? (AA = C.transitions.getAutoHeightDuration(M.clientHeight), w.current = AA) : AA = Y, M.style.transition = [
        C.transitions.create("opacity", {
          duration: AA,
          delay: N
        }),
        C.transitions.create("transform", {
          duration: pa ? AA : AA * 0.666,
          delay: N,
          easing: P
        })
      ].join(","), s && s(M, O);
    }), g = S(l), T = S(f), R = S((M) => {
      const { duration: O, delay: Y, easing: N } = Ko({
        style: p,
        timeout: B,
        easing: i
      }, {
        mode: "exit"
      });
      let P;
      B === "auto" ? (P = C.transitions.getAutoHeightDuration(M.clientHeight), w.current = P) : P = O, M.style.transition = [
        C.transitions.create("opacity", {
          duration: P,
          delay: Y
        }),
        C.transitions.create("transform", {
          duration: pa ? P : P * 0.666,
          delay: pa ? Y : Y || P * 0.333,
          easing: N
        })
      ].join(","), M.style.opacity = 0, M.style.transform = ss(0.75), u && u(M);
    }), L = S(d), K = (M) => {
      B === "auto" && Q.start(w.current || 0, M), r && r(U.current, M);
    };
    return E.jsx(b, {
      appear: n,
      in: a,
      nodeRef: U,
      onEnter: I,
      onEntered: g,
      onEntering: H,
      onExit: R,
      onExited: L,
      onExiting: T,
      addEndListener: K,
      timeout: B === "auto" ? null : B,
      ...v,
      children: (M, { ownerState: O, ...Y }) => h.cloneElement(o, {
        style: {
          opacity: 0,
          transform: ss(0.75),
          visibility: M === "exited" && !a ? "hidden" : void 0,
          ...Cv[M],
          ...p,
          ...o.props.style
        },
        ref: m,
        ...Y
      })
    });
  });
  ls && (ls.muiSupportAuto = true);
  const yv = (A) => {
    const { classes: e, disableUnderline: t } = A, n = GA({
      root: [
        "root",
        !t && "underline"
      ],
      input: [
        "input"
      ]
    }, mm, e);
    return {
      ...e,
      ...n
    };
  }, bv = hA(Vi, {
    shouldForwardProp: (A) => ot(A) || A === "classes",
    name: "MuiInput",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        ...Ni(A, e),
        !t.disableUnderline && e.underline
      ];
    }
  })(IA(({ theme: A }) => {
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
            [`&.${Rr.focused}:after`]: {
              transform: "scaleX(1) translateX(0)"
            },
            [`&.${Rr.error}`]: {
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
            [`&:hover:not(.${Rr.disabled}, .${Rr.error}):before`]: {
              borderBottom: `2px solid ${(A.vars || A).palette.text.primary}`,
              "@media (hover: none)": {
                borderBottom: `1px solid ${t}`
              }
            },
            [`&.${Rr.disabled}:before`]: {
              borderBottomStyle: "dotted"
            }
          }
        },
        ...Object.entries(A.palette).filter(Ne()).map(([r]) => ({
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
  })), Qv = hA($i, {
    name: "MuiInput",
    slot: "Input",
    overridesResolver: Gi
  })({}), wl = h.forwardRef(function(e, t) {
    const r = VA({
      props: e,
      name: "MuiInput"
    }), { disableUnderline: n = false, components: o = {}, componentsProps: i, fullWidth: a = false, inputComponent: s = "input", multiline: l = false, slotProps: c, slots: u = {}, type: d = "text", ...f } = r, p = yv(r), b = {
      root: {
        ownerState: {
          disableUnderline: n
        }
      }
    }, v = c ?? i ? ae(c ?? i, b) : b, Q = u.root ?? o.Root ?? bv, w = u.input ?? o.Input ?? Qv;
    return E.jsx(ml, {
      slots: {
        root: Q,
        input: w
      },
      slotProps: v,
      fullWidth: a,
      inputComponent: s,
      multiline: l,
      ref: t,
      type: d,
      ...f,
      classes: p
    });
  });
  wl.muiName = "Input";
  function Fv(A) {
    return NA("MuiInputLabel", A);
  }
  DA("MuiInputLabel", [
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
  let Uv, Sv, xv;
  Uv = (A) => {
    const { classes: e, formControl: t, size: r, shrink: n, disableAnimation: o, variant: i, required: a } = A, s = {
      root: [
        "root",
        t && "formControl",
        !o && "animated",
        n && "shrink",
        r && r !== "normal" && `size${bA(r)}`,
        i
      ],
      asterisk: [
        a && "asterisk"
      ]
    }, l = GA(s, Fv, e);
    return {
      ...e,
      ...l
    };
  };
  Sv = hA(wv, {
    shouldForwardProp: (A) => ot(A) || A === "classes",
    name: "MuiInputLabel",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        {
          [`& .${rn.asterisk}`]: e.asterisk
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
  })(IA(({ theme: A }) => ({
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
  xv = h.forwardRef(function(e, t) {
    const r = VA({
      name: "MuiInputLabel",
      props: e
    }), { disableAnimation: n = false, margin: o, shrink: i, variant: a, className: s, ...l } = r, c = Hr();
    let u = i;
    typeof u > "u" && c && (u = c.filled || c.focused || c.adornedStart);
    const d = Ir({
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
    }, p = Uv(f);
    return E.jsx(Sv, {
      "data-shrink": u,
      ref: t,
      className: CA(p.root, s),
      ...l,
      ownerState: f,
      classes: p
    });
  });
  Ev = h.createContext({});
  function Iv(A) {
    return NA("MuiList", A);
  }
  DA("MuiList", [
    "root",
    "padding",
    "dense",
    "subheader"
  ]);
  let Hv, Tv;
  Hv = (A) => {
    const { classes: e, disablePadding: t, dense: r, subheader: n } = A;
    return GA({
      root: [
        "root",
        !t && "padding",
        r && "dense",
        n && "subheader"
      ]
    }, Iv, e);
  };
  Tv = hA("ul", {
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
  kv = h.forwardRef(function(e, t) {
    const r = VA({
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
    }, f = Hv(d);
    return E.jsx(Ev.Provider, {
      value: u,
      children: E.jsxs(Tv, {
        as: i,
        className: CA(f.root, o),
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
  function ga(A, e, t) {
    return A === e ? A.firstChild : e && e.nextElementSibling ? e.nextElementSibling : t ? null : A.firstChild;
  }
  function Sc(A, e, t) {
    return A === e ? t ? A.firstChild : A.lastChild : e && e.previousElementSibling ? e.previousElementSibling : t ? null : A.lastChild;
  }
  function qd(A, e) {
    if (e === void 0) return true;
    let t = A.innerText;
    return t === void 0 && (t = A.textContent), t = t.trim().toLowerCase(), t.length === 0 ? false : e.repeating ? t[0] === e.keys[0] : t.startsWith(e.keys.join(""));
  }
  function Or(A, e, t, r, n, o) {
    let i = false, a = n(A, e, e ? t : false);
    for (; a; ) {
      if (a === A.firstChild) {
        if (i) return false;
        i = true;
      }
      const s = r ? false : a.disabled || a.getAttribute("aria-disabled") === "true";
      if (!a.hasAttribute("tabindex") || !qd(a, o) || s) a = n(A, a, t);
      else return a.focus(), true;
    }
    return false;
  }
  const Lv = h.forwardRef(function(e, t) {
    const { actions: r, autoFocus: n = false, autoFocusItem: o = false, children: i, className: a, disabledItemsFocusable: s = false, disableListWrap: l = false, onKeyDown: c, variant: u = "selectedMenu", ...d } = e, f = h.useRef(null), p = h.useRef({
      keys: [],
      repeating: true,
      previousKeyMatched: true,
      lastTime: null
    });
    nt(() => {
      n && f.current.focus();
    }, [
      n
    ]), h.useImperativeHandle(r, () => ({
      adjustStyleForScrollbar: (w, { direction: C }) => {
        const U = !f.current.style.width;
        if (w.clientHeight < f.current.clientHeight && U) {
          const m = `${Td(vt(w))}px`;
          f.current.style[C === "rtl" ? "paddingLeft" : "paddingRight"] = m, f.current.style.width = `calc(100% + ${m})`;
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
      const S = ye(C).activeElement;
      if (U === "ArrowDown") w.preventDefault(), Or(C, S, l, s, ga);
      else if (U === "ArrowUp") w.preventDefault(), Or(C, S, l, s, Sc);
      else if (U === "Home") w.preventDefault(), Or(C, null, l, s, ga);
      else if (U === "End") w.preventDefault(), Or(C, null, l, s, Sc);
      else if (U.length === 1) {
        const H = p.current, I = U.toLowerCase(), g = performance.now();
        H.keys.length > 0 && (g - H.lastTime > 500 ? (H.keys = [], H.repeating = true, H.previousKeyMatched = true) : H.repeating && I !== H.keys[0] && (H.repeating = false)), H.lastTime = g, H.keys.push(I);
        const T = S && !H.repeating && qd(S, H);
        H.previousKeyMatched && (T || Or(C, S, false, s, ga, H)) ? w.preventDefault() : H.previousKeyMatched = false;
      }
      c && c(w);
    }, b = be(f, t);
    let v = -1;
    h.Children.forEach(i, (w, C) => {
      if (!h.isValidElement(w)) {
        v === C && (v += 1, v >= i.length && (v = -1));
        return;
      }
      w.props.disabled || (u === "selectedMenu" && w.props.selected || v === -1) && (v = C), v === C && (w.props.disabled || w.props.muiSkipListHighlight || w.type.muiSkipListHighlight) && (v += 1, v >= i.length && (v = -1));
    });
    const Q = h.Children.map(i, (w, C) => {
      if (C === v) {
        const U = {};
        return o && (U.autoFocus = true), w.props.tabIndex === void 0 && u === "selectedMenu" && (U.tabIndex = 0), h.cloneElement(w, U);
      }
      return w;
    });
    return E.jsx(kv, {
      role: "menu",
      ref: b,
      className: a,
      onKeyDown: B,
      tabIndex: n ? 0 : -1,
      ...d,
      children: Q
    });
  });
  function Rv(A) {
    return NA("MuiPopover", A);
  }
  DA("MuiPopover", [
    "root",
    "paper"
  ]);
  function xc(A, e) {
    let t = 0;
    return typeof e == "number" ? t = e : e === "center" ? t = A.height / 2 : e === "bottom" && (t = A.height), t;
  }
  function Ec(A, e) {
    let t = 0;
    return typeof e == "number" ? t = e : e === "center" ? t = A.width / 2 : e === "right" && (t = A.width), t;
  }
  function Ic(A) {
    return [
      A.horizontal,
      A.vertical
    ].map((e) => typeof e == "number" ? `${e}px` : e).join(" ");
  }
  function Gn(A) {
    return typeof A == "function" ? A() : A;
  }
  const Ov = (A) => {
    const { classes: e } = A;
    return GA({
      root: [
        "root"
      ],
      paper: [
        "paper"
      ]
    }, Rv, e);
  }, Mv = hA(Av, {
    name: "MuiPopover",
    slot: "Root",
    overridesResolver: (A, e) => e.root
  })({}), Af = hA(rs, {
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
  }), ef = h.forwardRef(function(e, t) {
    const r = VA({
      props: e,
      name: "MuiPopover"
    }), { action: n, anchorEl: o, anchorOrigin: i = {
      vertical: "top",
      horizontal: "left"
    }, anchorPosition: a, anchorReference: s = "anchorEl", children: l, className: c, container: u, elevation: d = 8, marginThreshold: f = 16, open: p, PaperProps: B = {}, slots: b = {}, slotProps: v = {}, transformOrigin: Q = {
      vertical: "top",
      horizontal: "left"
    }, TransitionComponent: w, transitionDuration: C = "auto", TransitionProps: U = {}, disableScrollLock: m = false, ...S } = r, H = h.useRef(), I = {
      ...r,
      anchorOrigin: i,
      anchorReference: s,
      elevation: d,
      marginThreshold: f,
      transformOrigin: Q,
      TransitionComponent: w,
      transitionDuration: C,
      TransitionProps: U
    }, g = Ov(I), T = h.useCallback(() => {
      if (s === "anchorPosition") return a;
      const eA = Gn(o), lA = (eA && eA.nodeType === 1 ? eA : ye(H.current).body).getBoundingClientRect();
      return {
        top: lA.top + xc(lA, i.vertical),
        left: lA.left + Ec(lA, i.horizontal)
      };
    }, [
      o,
      i.horizontal,
      i.vertical,
      a,
      s
    ]), R = h.useCallback((eA) => ({
      vertical: xc(eA, Q.vertical),
      horizontal: Ec(eA, Q.horizontal)
    }), [
      Q.horizontal,
      Q.vertical
    ]), L = h.useCallback((eA) => {
      const sA = {
        width: eA.offsetWidth,
        height: eA.offsetHeight
      }, lA = R(sA);
      if (s === "none") return {
        top: null,
        left: null,
        transformOrigin: Ic(lA)
      };
      const y = T();
      let x = y.top - lA.vertical, F = y.left - lA.horizontal;
      const V = x + sA.height, z = F + sA.width, W = vt(Gn(o)), gA = W.innerHeight - f, BA = W.innerWidth - f;
      if (f !== null && x < f) {
        const $ = x - f;
        x -= $, lA.vertical += $;
      } else if (f !== null && V > gA) {
        const $ = V - gA;
        x -= $, lA.vertical += $;
      }
      if (f !== null && F < f) {
        const $ = F - f;
        F -= $, lA.horizontal += $;
      } else if (z > BA) {
        const $ = z - BA;
        F -= $, lA.horizontal += $;
      }
      return {
        top: `${Math.round(x)}px`,
        left: `${Math.round(F)}px`,
        transformOrigin: Ic(lA)
      };
    }, [
      o,
      s,
      T,
      R,
      f
    ]), [K, M] = h.useState(p), O = h.useCallback(() => {
      const eA = H.current;
      if (!eA) return;
      const sA = L(eA);
      sA.top !== null && eA.style.setProperty("top", sA.top), sA.left !== null && (eA.style.left = sA.left), eA.style.transformOrigin = sA.transformOrigin, M(true);
    }, [
      L
    ]);
    h.useEffect(() => (m && window.addEventListener("scroll", O), () => window.removeEventListener("scroll", O)), [
      o,
      m,
      O
    ]);
    const Y = () => {
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
      const eA = Ed(() => {
        O();
      }), sA = vt(Gn(o));
      return sA.addEventListener("resize", eA), () => {
        eA.clear(), sA.removeEventListener("resize", eA);
      };
    }, [
      o,
      p,
      O
    ]);
    let P = C;
    const AA = {
      slots: {
        transition: w,
        ...b
      },
      slotProps: {
        transition: U,
        paper: B,
        ...v
      }
    }, [Z, iA] = me("transition", {
      elementType: ls,
      externalForwardedProps: AA,
      ownerState: I,
      getSlotProps: (eA) => ({
        ...eA,
        onEntering: (sA, lA) => {
          var _a2;
          (_a2 = eA.onEntering) == null ? void 0 : _a2.call(eA, sA, lA), Y();
        },
        onExited: (sA) => {
          var _a2;
          (_a2 = eA.onExited) == null ? void 0 : _a2.call(eA, sA), N();
        }
      }),
      additionalProps: {
        appear: true,
        in: p
      }
    });
    C === "auto" && !Z.muiSupportAuto && (P = void 0);
    const D = u || (o ? ye(Gn(o)).body : void 0), [J, { slots: j, slotProps: tA, ...mA }] = me("root", {
      ref: t,
      elementType: Mv,
      externalForwardedProps: {
        ...AA,
        ...S
      },
      shouldForwardComponentProp: true,
      additionalProps: {
        slots: {
          backdrop: b.backdrop
        },
        slotProps: {
          backdrop: g0(typeof v.backdrop == "function" ? v.backdrop(I) : v.backdrop, {
            invisible: true
          })
        },
        container: D,
        open: p
      },
      ownerState: I,
      className: CA(g.root, c)
    }), [dA, nA] = me("paper", {
      ref: H,
      className: g.paper,
      elementType: Af,
      externalForwardedProps: AA,
      shouldForwardComponentProp: true,
      additionalProps: {
        elevation: d,
        style: K ? void 0 : {
          opacity: 0
        }
      },
      ownerState: I
    });
    return E.jsx(J, {
      ...mA,
      ...!Xt(J) && {
        slots: j,
        slotProps: tA,
        disableScrollLock: m
      },
      children: E.jsx(Z, {
        ...iA,
        timeout: P,
        children: E.jsx(dA, {
          ...nA,
          children: l
        })
      })
    });
  });
  function Kv(A) {
    return NA("MuiMenu", A);
  }
  DA("MuiMenu", [
    "root",
    "paper",
    "list"
  ]);
  const Dv = {
    vertical: "top",
    horizontal: "right"
  }, Pv = {
    vertical: "top",
    horizontal: "left"
  }, _v = (A) => {
    const { classes: e } = A;
    return GA({
      root: [
        "root"
      ],
      paper: [
        "paper"
      ],
      list: [
        "list"
      ]
    }, Kv, e);
  }, Nv = hA(ef, {
    shouldForwardProp: (A) => ot(A) || A === "classes",
    name: "MuiMenu",
    slot: "Root",
    overridesResolver: (A, e) => e.root
  })({}), Gv = hA(Af, {
    name: "MuiMenu",
    slot: "Paper",
    overridesResolver: (A, e) => e.paper
  })({
    maxHeight: "calc(100% - 96px)",
    WebkitOverflowScrolling: "touch"
  }), Vv = hA(Lv, {
    name: "MuiMenu",
    slot: "List",
    overridesResolver: (A, e) => e.list
  })({
    outline: 0
  }), $v = h.forwardRef(function(e, t) {
    const r = VA({
      props: e,
      name: "MuiMenu"
    }), { autoFocus: n = true, children: o, className: i, disableAutoFocusItem: a = false, MenuListProps: s = {}, onClose: l, open: c, PaperProps: u = {}, PopoverClasses: d, transitionDuration: f = "auto", TransitionProps: { onEntering: p, ...B } = {}, variant: b = "selectedMenu", slots: v = {}, slotProps: Q = {}, ...w } = r, C = Kd(), U = {
      ...r,
      autoFocus: n,
      disableAutoFocusItem: a,
      MenuListProps: s,
      onEntering: p,
      PaperProps: u,
      transitionDuration: f,
      TransitionProps: B,
      variant: b
    }, m = _v(U), S = n && !a && c, H = h.useRef(null), I = (P, AA) => {
      H.current && H.current.adjustStyleForScrollbar(P, {
        direction: C ? "rtl" : "ltr"
      }), p && p(P, AA);
    }, g = (P) => {
      P.key === "Tab" && (P.preventDefault(), l && l(P, "tabKeyDown"));
    };
    let T = -1;
    h.Children.map(o, (P, AA) => {
      h.isValidElement(P) && (P.props.disabled || (b === "selectedMenu" && P.props.selected || T === -1) && (T = AA));
    });
    const R = {
      slots: v,
      slotProps: {
        list: s,
        transition: B,
        paper: u,
        ...Q
      }
    }, L = gt({
      elementType: v.root,
      externalSlotProps: Q.root,
      ownerState: U,
      className: [
        m.root,
        i
      ]
    }), [K, M] = me("paper", {
      className: m.paper,
      elementType: Gv,
      externalForwardedProps: R,
      shouldForwardComponentProp: true,
      ownerState: U
    }), [O, Y] = me("list", {
      className: CA(m.list, s.className),
      elementType: Vv,
      shouldForwardComponentProp: true,
      externalForwardedProps: R,
      getSlotProps: (P) => ({
        ...P,
        onKeyDown: (AA) => {
          var _a2;
          g(AA), (_a2 = P.onKeyDown) == null ? void 0 : _a2.call(P, AA);
        }
      }),
      ownerState: U
    }), N = typeof R.slotProps.transition == "function" ? R.slotProps.transition(U) : R.slotProps.transition;
    return E.jsx(Nv, {
      onClose: l,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: C ? "right" : "left"
      },
      transformOrigin: C ? Dv : Pv,
      slots: {
        root: v.root,
        paper: K,
        backdrop: v.backdrop,
        ...v.transition && {
          transition: v.transition
        }
      },
      slotProps: {
        root: L,
        paper: M,
        backdrop: typeof Q.backdrop == "function" ? Q.backdrop(U) : Q.backdrop,
        transition: {
          ...N,
          onEntering: (...P) => {
            var _a2;
            I(...P), (_a2 = N == null ? void 0 : N.onEntering) == null ? void 0 : _a2.call(N, ...P);
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
        autoFocus: n && (T === -1 || a),
        autoFocusItem: S,
        variant: b,
        ...Y,
        children: o
      })
    });
  });
  function Wv(A) {
    return NA("MuiNativeSelect", A);
  }
  const Cl = DA("MuiNativeSelect", [
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
  ]), jv = (A) => {
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
        `icon${bA(t)}`,
        o && "iconOpen",
        r && "disabled"
      ]
    };
    return GA(a, Wv, e);
  }, tf = hA("select", {
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
    [`&.${Cl.disabled}`]: {
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
  })), zv = hA(tf, {
    name: "MuiNativeSelect",
    slot: "Select",
    shouldForwardProp: ot,
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.select,
        e[t.variant],
        t.error && e.error,
        {
          [`&.${Cl.multiple}`]: e.multiple
        }
      ];
    }
  })({}), rf = hA("svg", {
    name: "MuiNativeSelect"
  })(({ theme: A }) => ({
    position: "absolute",
    right: 0,
    top: "calc(50% - .5em)",
    pointerEvents: "none",
    color: (A.vars || A).palette.action.active,
    [`&.${Cl.disabled}`]: {
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
  })), Xv = hA(rf, {
    name: "MuiNativeSelect",
    slot: "Icon",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.icon,
        t.variant && e[`icon${bA(t.variant)}`],
        t.open && e.iconOpen
      ];
    }
  })({}), Yv = h.forwardRef(function(e, t) {
    const { className: r, disabled: n, error: o, IconComponent: i, inputRef: a, variant: s = "standard", ...l } = e, c = {
      ...e,
      disabled: n,
      variant: s,
      error: o
    }, u = jv(c);
    return E.jsxs(h.Fragment, {
      children: [
        E.jsx(zv, {
          ownerState: c,
          className: CA(u.select, r),
          disabled: n,
          ref: a || t,
          ...l
        }),
        e.multiple ? null : E.jsx(Xv, {
          as: i,
          ownerState: c,
          className: u.icon
        })
      ]
    });
  });
  var Hc;
  const Jv = hA("fieldset", {
    name: "MuiNotchedOutlined",
    shouldForwardProp: ot
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
  }), Zv = hA("legend", {
    name: "MuiNotchedOutlined",
    shouldForwardProp: ot
  })(IA(({ theme: A }) => ({
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
  function qv(A) {
    const { children: e, classes: t, className: r, label: n, notched: o, ...i } = A, a = n != null && n !== "", s = {
      ...A,
      notched: o,
      withLabel: a
    };
    return E.jsx(Jv, {
      "aria-hidden": true,
      className: r,
      ownerState: s,
      ...i,
      children: E.jsx(Zv, {
        ownerState: s,
        children: a ? E.jsx("span", {
          children: n
        }) : Hc || (Hc = E.jsx("span", {
          className: "notranslate",
          "aria-hidden": true,
          children: "\u200B"
        }))
      })
    });
  }
  const Aw = (A) => {
    const { classes: e } = A, r = GA({
      root: [
        "root"
      ],
      notchedOutline: [
        "notchedOutline"
      ],
      input: [
        "input"
      ]
    }, vm, e);
    return {
      ...e,
      ...r
    };
  }, ew = hA(Vi, {
    shouldForwardProp: (A) => ot(A) || A === "classes",
    name: "MuiOutlinedInput",
    slot: "Root",
    overridesResolver: Ni
  })(IA(({ theme: A }) => {
    const e = A.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
    return {
      position: "relative",
      borderRadius: (A.vars || A).shape.borderRadius,
      [`&:hover .${We.notchedOutline}`]: {
        borderColor: (A.vars || A).palette.text.primary
      },
      "@media (hover: none)": {
        [`&:hover .${We.notchedOutline}`]: {
          borderColor: A.vars ? `rgba(${A.vars.palette.common.onBackgroundChannel} / 0.23)` : e
        }
      },
      [`&.${We.focused} .${We.notchedOutline}`]: {
        borderWidth: 2
      },
      variants: [
        ...Object.entries(A.palette).filter(Ne()).map(([t]) => ({
          props: {
            color: t
          },
          style: {
            [`&.${We.focused} .${We.notchedOutline}`]: {
              borderColor: (A.vars || A).palette[t].main
            }
          }
        })),
        {
          props: {},
          style: {
            [`&.${We.error} .${We.notchedOutline}`]: {
              borderColor: (A.vars || A).palette.error.main
            },
            [`&.${We.disabled} .${We.notchedOutline}`]: {
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
  })), tw = hA(qv, {
    name: "MuiOutlinedInput",
    slot: "NotchedOutline",
    overridesResolver: (A, e) => e.notchedOutline
  })(IA(({ theme: A }) => {
    const e = A.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
    return {
      borderColor: A.vars ? `rgba(${A.vars.palette.common.onBackgroundChannel} / 0.23)` : e
    };
  })), rw = hA($i, {
    name: "MuiOutlinedInput",
    slot: "Input",
    overridesResolver: Gi
  })(IA(({ theme: A }) => ({
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
  }))), yl = h.forwardRef(function(e, t) {
    const r = VA({
      props: e,
      name: "MuiOutlinedInput"
    }), { components: n = {}, fullWidth: o = false, inputComponent: i = "input", label: a, multiline: s = false, notched: l, slots: c = {}, slotProps: u = {}, type: d = "text", ...f } = r, p = Aw(r), B = Hr(), b = Ir({
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
    }), v = {
      ...r,
      color: b.color || "primary",
      disabled: b.disabled,
      error: b.error,
      focused: b.focused,
      formControl: B,
      fullWidth: o,
      hiddenLabel: b.hiddenLabel,
      multiline: s,
      size: b.size,
      type: d
    }, Q = c.root ?? n.Root ?? ew, w = c.input ?? n.Input ?? rw, [C, U] = me("notchedOutline", {
      elementType: tw,
      className: p.notchedOutline,
      shouldForwardComponentProp: true,
      ownerState: v,
      externalForwardedProps: {
        slots: c,
        slotProps: u
      },
      additionalProps: {
        label: a != null && a !== "" && b.required ? E.jsxs(h.Fragment, {
          children: [
            a,
            "\u2009",
            "*"
          ]
        }) : a
      }
    });
    return E.jsx(ml, {
      slots: {
        root: Q,
        input: w
      },
      slotProps: u,
      renderSuffix: (m) => E.jsx(C, {
        ...U,
        notched: typeof l < "u" ? l : !!(m.startAdornment || m.filled || m.focused)
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
  yl.muiName = "Input";
  function nf(A) {
    return NA("MuiSelect", A);
  }
  const Mr = DA("MuiSelect", [
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
  var Tc;
  const nw = hA(tf, {
    name: "MuiSelect",
    slot: "Select",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        {
          [`&.${Mr.select}`]: e.select
        },
        {
          [`&.${Mr.select}`]: e[t.variant]
        },
        {
          [`&.${Mr.error}`]: e.error
        },
        {
          [`&.${Mr.multiple}`]: e.multiple
        }
      ];
    }
  })({
    [`&.${Mr.select}`]: {
      height: "auto",
      minHeight: "1.4375em",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden"
    }
  }), ow = hA(rf, {
    name: "MuiSelect",
    slot: "Icon",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.icon,
        t.variant && e[`icon${bA(t.variant)}`],
        t.open && e.iconOpen
      ];
    }
  })({}), iw = hA("input", {
    shouldForwardProp: (A) => _i(A) && A !== "classes",
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
  function kc(A, e) {
    return typeof e == "object" && e !== null ? A === e : String(A) === String(e);
  }
  function aw(A) {
    return A == null || typeof A == "string" && !A.trim();
  }
  let sw, lw, cw, bl, uw, dw, fw;
  sw = (A) => {
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
        `icon${bA(t)}`,
        o && "iconOpen",
        r && "disabled"
      ],
      nativeInput: [
        "nativeInput"
      ]
    };
    return GA(a, nf, e);
  };
  lw = h.forwardRef(function(e, t) {
    var _a2;
    const { "aria-describedby": r, "aria-label": n, autoFocus: o, autoWidth: i, children: a, className: s, defaultOpen: l, defaultValue: c, disabled: u, displayEmpty: d, error: f = false, IconComponent: p, inputRef: B, labelId: b, MenuProps: v = {}, multiple: Q, name: w, onBlur: C, onChange: U, onClose: m, onFocus: S, onOpen: H, open: I, readOnly: g, renderValue: T, required: R, SelectDisplayProps: L = {}, tabIndex: K, type: M, value: O, variant: Y = "standard", ...N } = e, [P, AA] = Ja({
      controlled: O,
      default: c,
      name: "Select"
    }), [Z, iA] = Ja({
      controlled: I,
      default: l,
      name: "Select"
    }), D = h.useRef(null), J = h.useRef(null), [j, tA] = h.useState(null), { current: mA } = h.useRef(I != null), [dA, nA] = h.useState(), eA = be(t, B), sA = h.useCallback((pA) => {
      J.current = pA, pA && tA(pA);
    }, []), lA = j == null ? void 0 : j.parentNode;
    h.useImperativeHandle(eA, () => ({
      focus: () => {
        J.current.focus();
      },
      node: D.current,
      value: P
    }), [
      P
    ]), h.useEffect(() => {
      l && Z && j && !mA && (nA(i ? null : lA.clientWidth), J.current.focus());
    }, [
      j,
      i
    ]), h.useEffect(() => {
      o && J.current.focus();
    }, [
      o
    ]), h.useEffect(() => {
      if (!b) return;
      const pA = ye(J.current).getElementById(b);
      if (pA) {
        const UA = () => {
          getSelection().isCollapsed && J.current.focus();
        };
        return pA.addEventListener("click", UA), () => {
          pA.removeEventListener("click", UA);
        };
      }
    }, [
      b
    ]);
    const y = (pA, UA) => {
      pA ? H && H(UA) : m && m(UA), mA || (nA(i ? null : lA.clientWidth), iA(pA));
    }, x = (pA) => {
      pA.button === 0 && (pA.preventDefault(), J.current.focus(), y(true, pA));
    }, F = (pA) => {
      y(false, pA);
    }, V = h.Children.toArray(a), z = (pA) => {
      const UA = V.find((re) => re.props.value === pA.target.value);
      UA !== void 0 && (AA(UA.props.value), U && U(pA, UA));
    }, W = (pA) => (UA) => {
      let re;
      if (UA.currentTarget.hasAttribute("tabindex")) {
        if (Q) {
          re = Array.isArray(P) ? P.slice() : [];
          const Ve = P.indexOf(pA.props.value);
          Ve === -1 ? re.push(pA.props.value) : re.splice(Ve, 1);
        } else re = pA.props.value;
        if (pA.props.onClick && pA.props.onClick(UA), P !== re && (AA(re), U)) {
          const Ve = UA.nativeEvent || UA, kn = new Ve.constructor(Ve.type, Ve);
          Object.defineProperty(kn, "target", {
            writable: true,
            value: {
              value: re,
              name: w
            }
          }), U(kn, pA);
        }
        Q || y(false, UA);
      }
    }, gA = (pA) => {
      g || [
        " ",
        "ArrowUp",
        "ArrowDown",
        "Enter"
      ].includes(pA.key) && (pA.preventDefault(), y(true, pA));
    }, BA = j !== null && Z, $ = (pA) => {
      !BA && C && (Object.defineProperty(pA, "target", {
        writable: true,
        value: {
          value: P,
          name: w
        }
      }), C(pA));
    };
    delete N["aria-invalid"];
    let G, fA;
    const rA = [];
    let X = false;
    (Po({
      value: P
    }) || d) && (T ? G = T(P) : X = true);
    const q = V.map((pA) => {
      if (!h.isValidElement(pA)) return null;
      let UA;
      if (Q) {
        if (!Array.isArray(P)) throw new Error(Bt(2));
        UA = P.some((re) => kc(re, pA.props.value)), UA && X && rA.push(pA.props.children);
      } else UA = kc(P, pA.props.value), UA && X && (fA = pA.props.children);
      return h.cloneElement(pA, {
        "aria-selected": UA ? "true" : "false",
        onClick: W(pA),
        onKeyUp: (re) => {
          re.key === " " && re.preventDefault(), pA.props.onKeyUp && pA.props.onKeyUp(re);
        },
        role: "option",
        selected: UA,
        value: void 0,
        "data-value": pA.props.value
      });
    });
    X && (Q ? rA.length === 0 ? G = null : G = rA.reduce((pA, UA, re) => (pA.push(UA), re < rA.length - 1 && pA.push(", "), pA), []) : G = fA);
    let uA = dA;
    !i && mA && j && (uA = lA.clientWidth);
    let vA;
    typeof K < "u" ? vA = K : vA = u ? null : 0;
    const yA = L.id || (w ? `mui-component-select-${w}` : void 0), wA = {
      ...e,
      variant: Y,
      value: P,
      open: BA,
      error: f
    }, QA = sw(wA), te = {
      ...v.PaperProps,
      ...(_a2 = v.slotProps) == null ? void 0 : _a2.paper
    }, PA = Di();
    return E.jsxs(h.Fragment, {
      children: [
        E.jsx(nw, {
          as: "div",
          ref: sA,
          tabIndex: vA,
          role: "combobox",
          "aria-controls": BA ? PA : void 0,
          "aria-disabled": u ? "true" : void 0,
          "aria-expanded": BA ? "true" : "false",
          "aria-haspopup": "listbox",
          "aria-label": n,
          "aria-labelledby": [
            b,
            yA
          ].filter(Boolean).join(" ") || void 0,
          "aria-describedby": r,
          "aria-required": R ? "true" : void 0,
          "aria-invalid": f ? "true" : void 0,
          onKeyDown: gA,
          onMouseDown: u || g ? null : x,
          onBlur: $,
          onFocus: S,
          ...L,
          ownerState: wA,
          className: CA(L.className, QA.select, s),
          id: yA,
          children: aw(G) ? Tc || (Tc = E.jsx("span", {
            className: "notranslate",
            "aria-hidden": true,
            children: "\u200B"
          })) : G
        }),
        E.jsx(iw, {
          "aria-invalid": f,
          value: Array.isArray(P) ? P.join(",") : P,
          name: w,
          ref: D,
          "aria-hidden": true,
          onChange: z,
          tabIndex: -1,
          disabled: u,
          className: QA.nativeInput,
          autoFocus: o,
          required: R,
          ...N,
          ownerState: wA
        }),
        E.jsx(ow, {
          as: p,
          className: QA.icon,
          ownerState: wA
        }),
        E.jsx($v, {
          id: `menu-${w || ""}`,
          anchorEl: lA,
          open: BA,
          onClose: F,
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "center"
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "center"
          },
          ...v,
          slotProps: {
            ...v.slotProps,
            list: {
              "aria-labelledby": b,
              role: "listbox",
              "aria-multiselectable": Q ? "true" : void 0,
              disableListWrap: true,
              id: PA,
              ...v.MenuListProps
            },
            paper: {
              ...te,
              style: {
                minWidth: uA,
                ...te != null ? te.style : null
              }
            }
          },
          children: q
        })
      ]
    });
  });
  cw = (A) => {
    const { classes: e } = A, r = GA({
      root: [
        "root"
      ]
    }, nf, e);
    return {
      ...e,
      ...r
    };
  };
  bl = {
    name: "MuiSelect",
    overridesResolver: (A, e) => e.root,
    shouldForwardProp: (A) => ot(A) && A !== "variant",
    slot: "Root"
  };
  uw = hA(wl, bl)("");
  dw = hA(yl, bl)("");
  fw = hA(vl, bl)("");
  of = h.forwardRef(function(e, t) {
    const r = VA({
      name: "MuiSelect",
      props: e
    }), { autoWidth: n = false, children: o, classes: i = {}, className: a, defaultOpen: s = false, displayEmpty: l = false, IconComponent: c = Cm, id: u, input: d, inputProps: f, label: p, labelId: B, MenuProps: b, multiple: v = false, native: Q = false, onClose: w, onOpen: C, open: U, renderValue: m, SelectDisplayProps: S, variant: H = "outlined", ...I } = r, g = Q ? Yv : lw, T = Hr(), R = Ir({
      props: r,
      muiFormControl: T,
      states: [
        "variant",
        "error"
      ]
    }), L = R.variant || H, K = {
      ...r,
      variant: L,
      classes: i
    }, M = cw(K), { root: O, ...Y } = M, N = d || {
      standard: E.jsx(uw, {
        ownerState: K
      }),
      outlined: E.jsx(dw, {
        label: p,
        ownerState: K
      }),
      filled: E.jsx(fw, {
        ownerState: K
      })
    }[L], P = be(t, xn(N));
    return E.jsx(h.Fragment, {
      children: h.cloneElement(N, {
        inputComponent: g,
        inputProps: {
          children: o,
          error: R.error,
          IconComponent: c,
          variant: L,
          type: void 0,
          multiple: v,
          ...Q ? {
            id: u
          } : {
            autoWidth: n,
            defaultOpen: s,
            displayEmpty: l,
            labelId: B,
            MenuProps: b,
            onClose: w,
            onOpen: C,
            open: U,
            renderValue: m,
            SelectDisplayProps: {
              id: u,
              ...S
            }
          },
          ...f,
          classes: f ? ae(Y, f.classes) : Y,
          ...d ? d.props.inputProps : {}
        },
        ...(v && Q || l) && L === "outlined" ? {
          notched: true
        } : {},
        ref: P,
        className: CA(N.props.className, a, M.root),
        ...!d && {
          variant: L
        },
        ...I
      })
    });
  });
  of.muiName = "Select";
  function pw(A, e, t = (r, n) => r === n) {
    return A.length === e.length && A.every((r, n) => t(r, e[n]));
  }
  const gw = 2;
  function or(A, e, t, r, n) {
    return t === 1 ? Math.min(A + e, n) : Math.max(A - e, r);
  }
  function af(A, e) {
    return A - e;
  }
  function Lc(A, e) {
    const { index: t } = A.reduce((r, n, o) => {
      const i = Math.abs(e - n);
      return r === null || i < r.distance || i === r.distance ? {
        distance: i,
        index: o
      } : r;
    }, null) ?? {};
    return t;
  }
  function Vn(A, e) {
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
  function No(A, e, t) {
    return (A - e) * 100 / (t - e);
  }
  function hw(A, e, t) {
    return (t - e) * A + e;
  }
  function Bw(A) {
    if (Math.abs(A) < 1) {
      const t = A.toExponential().split("e-"), r = t[0].split(".")[1];
      return (r ? r.length : 0) + parseInt(t[1], 10);
    }
    const e = A.toString().split(".")[1];
    return e ? e.length : 0;
  }
  function mw(A, e, t) {
    const r = Math.round((A - t) / e) * e + t;
    return Number(r.toFixed(Bw(e)));
  }
  function Rc({ values: A, newValue: e, index: t }) {
    const r = A.slice();
    return r[t] = e, r.sort(af);
  }
  function $n({ sliderRef: A, activeIndex: e, setActive: t }) {
    var _a2, _b2, _c2;
    const r = ye(A.current);
    (!((_a2 = A.current) == null ? void 0 : _a2.contains(r.activeElement)) || Number((_b2 = r == null ? void 0 : r.activeElement) == null ? void 0 : _b2.getAttribute("data-index")) !== e) && ((_c2 = A.current) == null ? void 0 : _c2.querySelector(`[type="range"][data-index="${e}"]`).focus()), t && t(e);
  }
  function Wn(A, e) {
    return typeof A == "number" && typeof e == "number" ? A === e : typeof A == "object" && typeof e == "object" ? pw(A, e) : false;
  }
  const vw = {
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
  }, ww = (A) => A;
  let jn;
  function Oc() {
    return jn === void 0 && (typeof CSS < "u" && typeof CSS.supports == "function" ? jn = CSS.supports("touch-action", "none") : jn = true), jn;
  }
  function Cw(A) {
    const { "aria-labelledby": e, defaultValue: t, disabled: r = false, disableSwap: n = false, isRtl: o = false, marks: i = false, max: a = 100, min: s = 0, name: l, onChange: c, onChangeCommitted: u, orientation: d = "horizontal", rootRef: f, scale: p = ww, step: B = 1, shiftStep: b = 10, tabIndex: v, value: Q } = A, w = h.useRef(void 0), [C, U] = h.useState(-1), [m, S] = h.useState(-1), [H, I] = h.useState(false), g = h.useRef(0), T = h.useRef(null), [R, L] = Ja({
      controlled: Q,
      default: t ?? s,
      name: "Slider"
    }), K = c && ((X, q, uA) => {
      const vA = X.nativeEvent || X, yA = new vA.constructor(vA.type, vA);
      Object.defineProperty(yA, "target", {
        writable: true,
        value: {
          value: q,
          name: l
        }
      }), T.current = q, c(yA, q, uA);
    }), M = Array.isArray(R);
    let O = M ? R.slice().sort(af) : [
      R
    ];
    O = O.map((X) => X == null ? s : fr(X, s, a));
    const Y = i === true && B !== null ? [
      ...Array(Math.floor((a - s) / B) + 1)
    ].map((X, q) => ({
      value: s + B * q
    })) : i || [], N = Y.map((X) => X.value), [P, AA] = h.useState(-1), Z = h.useRef(null), iA = be(f, Z), D = (X) => (q) => {
      var _a2;
      const uA = Number(q.currentTarget.getAttribute("data-index"));
      Oo(q.target) && AA(uA), S(uA), (_a2 = X == null ? void 0 : X.onFocus) == null ? void 0 : _a2.call(X, q);
    }, J = (X) => (q) => {
      var _a2;
      Oo(q.target) || AA(-1), S(-1), (_a2 = X == null ? void 0 : X.onBlur) == null ? void 0 : _a2.call(X, q);
    }, j = (X, q) => {
      const uA = Number(X.currentTarget.getAttribute("data-index")), vA = O[uA], yA = N.indexOf(vA);
      let wA = q;
      if (Y && B == null) {
        const QA = N[N.length - 1];
        wA >= QA ? wA = QA : wA <= N[0] ? wA = N[0] : wA = wA < vA ? N[yA - 1] : N[yA + 1];
      }
      if (wA = fr(wA, s, a), M) {
        n && (wA = fr(wA, O[uA - 1] || -1 / 0, O[uA + 1] || 1 / 0));
        const QA = wA;
        wA = Rc({
          values: O,
          newValue: wA,
          index: uA
        });
        let te = uA;
        n || (te = wA.indexOf(QA)), $n({
          sliderRef: Z,
          activeIndex: te
        });
      }
      L(wA), AA(uA), K && !Wn(wA, R) && K(X, wA, uA), u && u(X, T.current ?? wA);
    }, tA = (X) => (q) => {
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
      ].includes(q.key)) {
        q.preventDefault();
        const uA = Number(q.currentTarget.getAttribute("data-index")), vA = O[uA];
        let yA = null;
        if (B != null) {
          const wA = q.shiftKey ? b : B;
          switch (q.key) {
            case "ArrowUp":
              yA = or(vA, wA, 1, s, a);
              break;
            case "ArrowRight":
              yA = or(vA, wA, o ? -1 : 1, s, a);
              break;
            case "ArrowDown":
              yA = or(vA, wA, -1, s, a);
              break;
            case "ArrowLeft":
              yA = or(vA, wA, o ? 1 : -1, s, a);
              break;
            case "PageUp":
              yA = or(vA, b, 1, s, a);
              break;
            case "PageDown":
              yA = or(vA, b, -1, s, a);
              break;
            case "Home":
              yA = s;
              break;
            case "End":
              yA = a;
              break;
          }
        } else if (Y) {
          const wA = N[N.length - 1], QA = N.indexOf(vA), te = [
            o ? "ArrowRight" : "ArrowLeft",
            "ArrowDown",
            "PageDown",
            "Home"
          ], PA = [
            o ? "ArrowLeft" : "ArrowRight",
            "ArrowUp",
            "PageUp",
            "End"
          ];
          te.includes(q.key) ? QA === 0 ? yA = N[0] : yA = N[QA - 1] : PA.includes(q.key) && (QA === N.length - 1 ? yA = wA : yA = N[QA + 1]);
        }
        yA != null && j(q, yA);
      }
      (_a2 = X == null ? void 0 : X.onKeyDown) == null ? void 0 : _a2.call(X, q);
    };
    nt(() => {
      var _a2;
      r && Z.current.contains(document.activeElement) && ((_a2 = document.activeElement) == null ? void 0 : _a2.blur());
    }, [
      r
    ]), r && C !== -1 && U(-1), r && P !== -1 && AA(-1);
    const mA = (X) => (q) => {
      var _a2;
      (_a2 = X.onChange) == null ? void 0 : _a2.call(X, q), j(q, q.target.valueAsNumber);
    }, dA = h.useRef(void 0);
    let nA = d;
    o && d === "horizontal" && (nA += "-reverse");
    const eA = ({ finger: X, move: q = false }) => {
      const { current: uA } = Z, { width: vA, height: yA, bottom: wA, left: QA } = uA.getBoundingClientRect();
      let te;
      nA.startsWith("vertical") ? te = (wA - X.y) / yA : te = (X.x - QA) / vA, nA.includes("-reverse") && (te = 1 - te);
      let PA;
      if (PA = hw(te, s, a), B) PA = mw(PA, B, s);
      else {
        const UA = Lc(N, PA);
        PA = N[UA];
      }
      PA = fr(PA, s, a);
      let pA = 0;
      if (M) {
        q ? pA = dA.current : pA = Lc(O, PA), n && (PA = fr(PA, O[pA - 1] || -1 / 0, O[pA + 1] || 1 / 0));
        const UA = PA;
        PA = Rc({
          values: O,
          newValue: PA,
          index: pA
        }), n && q || (pA = PA.indexOf(UA), dA.current = pA);
      }
      return {
        newValue: PA,
        activeIndex: pA
      };
    }, sA = rt((X) => {
      const q = Vn(X, w);
      if (!q) return;
      if (g.current += 1, X.type === "mousemove" && X.buttons === 0) {
        lA(X);
        return;
      }
      const { newValue: uA, activeIndex: vA } = eA({
        finger: q,
        move: true
      });
      $n({
        sliderRef: Z,
        activeIndex: vA,
        setActive: U
      }), L(uA), !H && g.current > gw && I(true), K && !Wn(uA, R) && K(X, uA, vA);
    }), lA = rt((X) => {
      const q = Vn(X, w);
      if (I(false), !q) return;
      const { newValue: uA } = eA({
        finger: q,
        move: true
      });
      U(-1), X.type === "touchend" && S(-1), u && u(X, T.current ?? uA), w.current = void 0, x();
    }), y = rt((X) => {
      if (r) return;
      Oc() || X.preventDefault();
      const q = X.changedTouches[0];
      q != null && (w.current = q.identifier);
      const uA = Vn(X, w);
      if (uA !== false) {
        const { newValue: yA, activeIndex: wA } = eA({
          finger: uA
        });
        $n({
          sliderRef: Z,
          activeIndex: wA,
          setActive: U
        }), L(yA), K && !Wn(yA, R) && K(X, yA, wA);
      }
      g.current = 0;
      const vA = ye(Z.current);
      vA.addEventListener("touchmove", sA, {
        passive: true
      }), vA.addEventListener("touchend", lA, {
        passive: true
      });
    }), x = h.useCallback(() => {
      const X = ye(Z.current);
      X.removeEventListener("mousemove", sA), X.removeEventListener("mouseup", lA), X.removeEventListener("touchmove", sA), X.removeEventListener("touchend", lA);
    }, [
      lA,
      sA
    ]);
    h.useEffect(() => {
      const { current: X } = Z;
      return X.addEventListener("touchstart", y, {
        passive: Oc()
      }), () => {
        X.removeEventListener("touchstart", y), x();
      };
    }, [
      x,
      y
    ]), h.useEffect(() => {
      r && x();
    }, [
      r,
      x
    ]);
    const F = (X) => (q) => {
      var _a2;
      if ((_a2 = X.onMouseDown) == null ? void 0 : _a2.call(X, q), r || q.defaultPrevented || q.button !== 0) return;
      q.preventDefault();
      const uA = Vn(q, w);
      if (uA !== false) {
        const { newValue: yA, activeIndex: wA } = eA({
          finger: uA
        });
        $n({
          sliderRef: Z,
          activeIndex: wA,
          setActive: U
        }), L(yA), K && !Wn(yA, R) && K(q, yA, wA);
      }
      g.current = 0;
      const vA = ye(Z.current);
      vA.addEventListener("mousemove", sA, {
        passive: true
      }), vA.addEventListener("mouseup", lA);
    }, V = No(M ? O[0] : s, s, a), z = No(O[O.length - 1], s, a) - V, W = (X = {}) => {
      const q = An(X), uA = {
        onMouseDown: F(q || {})
      }, vA = {
        ...q,
        ...uA
      };
      return {
        ...X,
        ref: iA,
        ...vA
      };
    }, gA = (X) => (q) => {
      var _a2;
      (_a2 = X.onMouseOver) == null ? void 0 : _a2.call(X, q);
      const uA = Number(q.currentTarget.getAttribute("data-index"));
      S(uA);
    }, BA = (X) => (q) => {
      var _a2;
      (_a2 = X.onMouseLeave) == null ? void 0 : _a2.call(X, q), S(-1);
    }, $ = (X = {}) => {
      const q = An(X), uA = {
        onMouseOver: gA(q || {}),
        onMouseLeave: BA(q || {})
      };
      return {
        ...X,
        ...q,
        ...uA
      };
    }, G = (X) => ({
      pointerEvents: C !== -1 && C !== X ? "none" : void 0
    });
    let fA;
    return d === "vertical" && (fA = o ? "vertical-rl" : "vertical-lr"), {
      active: C,
      axis: nA,
      axisProps: vw,
      dragging: H,
      focusedThumbIndex: P,
      getHiddenInputProps: (X = {}) => {
        const q = An(X), uA = {
          onChange: mA(q || {}),
          onFocus: D(q || {}),
          onBlur: J(q || {}),
          onKeyDown: tA(q || {})
        }, vA = {
          ...q,
          ...uA
        };
        return {
          tabIndex: v,
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
          ...X,
          ...vA,
          style: {
            ...iB,
            direction: o ? "rtl" : "ltr",
            width: "100%",
            height: "100%",
            writingMode: fA
          }
        };
      },
      getRootProps: W,
      getThumbProps: $,
      marks: Y,
      open: m,
      range: M,
      rootRef: iA,
      trackLeap: z,
      trackOffset: V,
      values: O,
      getThumbStyle: G
    };
  }
  const yw = (A) => !A || !Xt(A);
  function bw(A) {
    return NA("MuiSlider", A);
  }
  const Re = DA("MuiSlider", [
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
  ]), Qw = (A) => {
    const { open: e } = A;
    return {
      offset: CA(e && Re.valueLabelOpen),
      circle: Re.valueLabelCircle,
      label: Re.valueLabelLabel
    };
  };
  function Fw(A) {
    const { children: e, className: t, value: r } = A, n = Qw(A);
    return e ? h.cloneElement(e, {
      className: CA(e.props.className)
    }, E.jsxs(h.Fragment, {
      children: [
        e.props.children,
        E.jsx("span", {
          className: CA(n.offset, t),
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
  function Mc(A) {
    return A;
  }
  let Uw, Sw, xw, Ew, Iw, Hw, sf, Tw, kw;
  Uw = hA("span", {
    name: "MuiSlider",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.root,
        e[`color${bA(t.color)}`],
        t.size !== "medium" && e[`size${bA(t.size)}`],
        t.marked && e.marked,
        t.orientation === "vertical" && e.vertical,
        t.track === "inverted" && e.trackInverted,
        t.track === false && e.trackFalse
      ];
    }
  })(IA(({ theme: A }) => ({
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
    [`&.${Re.disabled}`]: {
      pointerEvents: "none",
      cursor: "default",
      color: (A.vars || A).palette.grey[400]
    },
    [`&.${Re.dragging}`]: {
      [`& .${Re.thumb}, & .${Re.track}`]: {
        transition: "none"
      }
    },
    variants: [
      ...Object.entries(A.palette).filter(Ne()).map(([e]) => ({
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
  Sw = hA("span", {
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
  xw = hA("span", {
    name: "MuiSlider",
    slot: "Track",
    overridesResolver: (A, e) => e.track
  })(IA(({ theme: A }) => ({
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
      ...Object.entries(A.palette).filter(Ne()).map(([e]) => ({
        props: {
          color: e,
          track: "inverted"
        },
        style: {
          ...A.vars ? {
            backgroundColor: A.vars.palette.Slider[`${e}Track`],
            borderColor: A.vars.palette.Slider[`${e}Track`]
          } : {
            backgroundColor: hn(A.palette[e].main, 0.62),
            borderColor: hn(A.palette[e].main, 0.62),
            ...A.applyStyles("dark", {
              backgroundColor: gn(A.palette[e].main, 0.5)
            }),
            ...A.applyStyles("dark", {
              borderColor: gn(A.palette[e].main, 0.5)
            })
          }
        }
      }))
    ]
  })));
  Ew = hA("span", {
    name: "MuiSlider",
    slot: "Thumb",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.thumb,
        e[`thumbColor${bA(t.color)}`],
        t.size !== "medium" && e[`thumbSize${bA(t.size)}`]
      ];
    }
  })(IA(({ theme: A }) => ({
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
    [`&.${Re.disabled}`]: {
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
      ...Object.entries(A.palette).filter(Ne()).map(([e]) => ({
        props: {
          color: e
        },
        style: {
          [`&:hover, &.${Re.focusVisible}`]: {
            ...A.vars ? {
              boxShadow: `0px 0px 0px 8px rgba(${A.vars.palette[e].mainChannel} / 0.16)`
            } : {
              boxShadow: `0px 0px 0px 8px ${Ot(A.palette[e].main, 0.16)}`
            },
            "@media (hover: none)": {
              boxShadow: "none"
            }
          },
          [`&.${Re.active}`]: {
            ...A.vars ? {
              boxShadow: `0px 0px 0px 14px rgba(${A.vars.palette[e].mainChannel} / 0.16)`
            } : {
              boxShadow: `0px 0px 0px 14px ${Ot(A.palette[e].main, 0.16)}`
            }
          }
        }
      }))
    ]
  })));
  Iw = hA(Fw, {
    name: "MuiSlider",
    slot: "ValueLabel",
    overridesResolver: (A, e) => e.valueLabel
  })(IA(({ theme: A }) => ({
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
          [`&.${Re.valueLabelOpen}`]: {
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
          [`&.${Re.valueLabelOpen}`]: {
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
  Hw = hA("span", {
    name: "MuiSlider",
    slot: "Mark",
    shouldForwardProp: (A) => _i(A) && A !== "markActive",
    overridesResolver: (A, e) => {
      const { markActive: t } = A;
      return [
        e.mark,
        t && e.markActive
      ];
    }
  })(IA(({ theme: A }) => ({
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
  sf = hA("span", {
    name: "MuiSlider",
    slot: "MarkLabel",
    shouldForwardProp: (A) => _i(A) && A !== "markLabelActive",
    overridesResolver: (A, e) => e.markLabel
  })(IA(({ theme: A }) => ({
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
  Tw = (A) => {
    const { disabled: e, dragging: t, marked: r, orientation: n, track: o, classes: i, color: a, size: s } = A, l = {
      root: [
        "root",
        e && "disabled",
        t && "dragging",
        r && "marked",
        n === "vertical" && "vertical",
        o === "inverted" && "trackInverted",
        o === false && "trackFalse",
        a && `color${bA(a)}`,
        s && `size${bA(s)}`
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
        s && `thumbSize${bA(s)}`,
        a && `thumbColor${bA(a)}`
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
    return GA(l, bw, i);
  };
  kw = ({ children: A }) => A;
  Lw = h.forwardRef(function(e, t) {
    const r = VA({
      props: e,
      name: "MuiSlider"
    }), n = Kd(), { "aria-label": o, "aria-valuetext": i, "aria-labelledby": a, component: s = "span", components: l = {}, componentsProps: c = {}, color: u = "primary", classes: d, className: f, disableSwap: p = false, disabled: B = false, getAriaLabel: b, getAriaValueText: v, marks: Q = false, max: w = 100, min: C = 0, name: U, onChange: m, onChangeCommitted: S, orientation: H = "horizontal", shiftStep: I = 10, size: g = "medium", step: T = 1, scale: R = Mc, slotProps: L, slots: K, tabIndex: M, track: O = "normal", value: Y, valueLabelDisplay: N = "off", valueLabelFormat: P = Mc, ...AA } = r, Z = {
      ...r,
      isRtl: n,
      max: w,
      min: C,
      classes: d,
      disabled: B,
      disableSwap: p,
      orientation: H,
      marks: Q,
      color: u,
      size: g,
      step: T,
      shiftStep: I,
      scale: R,
      track: O,
      valueLabelDisplay: N,
      valueLabelFormat: P
    }, { axisProps: iA, getRootProps: D, getHiddenInputProps: J, getThumbProps: j, open: tA, active: mA, axis: dA, focusedThumbIndex: nA, range: eA, dragging: sA, marks: lA, values: y, trackOffset: x, trackLeap: F, getThumbStyle: V } = Cw({
      ...Z,
      rootRef: t
    });
    Z.marked = lA.length > 0 && lA.some((qA) => qA.label), Z.dragging = sA, Z.focusedThumbIndex = nA;
    const z = Tw(Z), W = (K == null ? void 0 : K.root) ?? l.Root ?? Uw, gA = (K == null ? void 0 : K.rail) ?? l.Rail ?? Sw, BA = (K == null ? void 0 : K.track) ?? l.Track ?? xw, $ = (K == null ? void 0 : K.thumb) ?? l.Thumb ?? Ew, G = (K == null ? void 0 : K.valueLabel) ?? l.ValueLabel ?? Iw, fA = (K == null ? void 0 : K.mark) ?? l.Mark ?? Hw, rA = (K == null ? void 0 : K.markLabel) ?? l.MarkLabel ?? sf, X = (K == null ? void 0 : K.input) ?? l.Input ?? "input", q = (L == null ? void 0 : L.root) ?? c.root, uA = (L == null ? void 0 : L.rail) ?? c.rail, vA = (L == null ? void 0 : L.track) ?? c.track, yA = (L == null ? void 0 : L.thumb) ?? c.thumb, wA = (L == null ? void 0 : L.valueLabel) ?? c.valueLabel, QA = (L == null ? void 0 : L.mark) ?? c.mark, te = (L == null ? void 0 : L.markLabel) ?? c.markLabel, PA = (L == null ? void 0 : L.input) ?? c.input, pA = gt({
      elementType: W,
      getSlotProps: D,
      externalSlotProps: q,
      externalForwardedProps: AA,
      additionalProps: {
        ...yw(W) && {
          as: s
        }
      },
      ownerState: {
        ...Z,
        ...q == null ? void 0 : q.ownerState
      },
      className: [
        z.root,
        f
      ]
    }), UA = gt({
      elementType: gA,
      externalSlotProps: uA,
      ownerState: Z,
      className: z.rail
    }), re = gt({
      elementType: BA,
      externalSlotProps: vA,
      additionalProps: {
        style: {
          ...iA[dA].offset(x),
          ...iA[dA].leap(F)
        }
      },
      ownerState: {
        ...Z,
        ...vA == null ? void 0 : vA.ownerState
      },
      className: z.track
    }), Ve = gt({
      elementType: $,
      getSlotProps: j,
      externalSlotProps: yA,
      ownerState: {
        ...Z,
        ...yA == null ? void 0 : yA.ownerState
      },
      className: z.thumb
    }), kn = gt({
      elementType: G,
      externalSlotProps: wA,
      ownerState: {
        ...Z,
        ...wA == null ? void 0 : wA.ownerState
      },
      className: z.valueLabel
    }), ra = gt({
      elementType: fA,
      externalSlotProps: QA,
      ownerState: Z,
      className: z.mark
    }), na = gt({
      elementType: rA,
      externalSlotProps: te,
      ownerState: Z,
      className: z.markLabel
    }), Ep = gt({
      elementType: X,
      getSlotProps: J,
      externalSlotProps: PA,
      ownerState: Z
    });
    return E.jsxs(W, {
      ...pA,
      children: [
        E.jsx(gA, {
          ...UA
        }),
        E.jsx(BA, {
          ...re
        }),
        lA.filter((qA) => qA.value >= C && qA.value <= w).map((qA, le) => {
          const oa = No(qA.value, C, w), Ln = iA[dA].offset(oa);
          let ct;
          return O === false ? ct = y.includes(qA.value) : ct = O === "normal" && (eA ? qA.value >= y[0] && qA.value <= y[y.length - 1] : qA.value <= y[0]) || O === "inverted" && (eA ? qA.value <= y[0] || qA.value >= y[y.length - 1] : qA.value >= y[0]), E.jsxs(h.Fragment, {
            children: [
              E.jsx(fA, {
                "data-index": le,
                ...ra,
                ...!Xt(fA) && {
                  markActive: ct
                },
                style: {
                  ...Ln,
                  ...ra.style
                },
                className: CA(ra.className, ct && z.markActive)
              }),
              qA.label != null ? E.jsx(rA, {
                "aria-hidden": true,
                "data-index": le,
                ...na,
                ...!Xt(rA) && {
                  markLabelActive: ct
                },
                style: {
                  ...Ln,
                  ...na.style
                },
                className: CA(z.markLabel, na.className, ct && z.markLabelActive),
                children: qA.label
              }) : null
            ]
          }, le);
        }),
        y.map((qA, le) => {
          const oa = No(qA, C, w), Ln = iA[dA].offset(oa), ct = N === "off" ? kw : G;
          return E.jsx(ct, {
            ...!Xt(ct) && {
              valueLabelFormat: P,
              valueLabelDisplay: N,
              value: typeof P == "function" ? P(R(qA), le) : P,
              index: le,
              open: tA === le || mA === le || N === "on",
              disabled: B
            },
            ...kn,
            children: E.jsx($, {
              "data-index": le,
              ...Ve,
              className: CA(z.thumb, Ve.className, mA === le && z.active, nA === le && z.focusVisible),
              style: {
                ...Ln,
                ...V(le),
                ...Ve.style
              },
              children: E.jsx(X, {
                "data-index": le,
                "aria-label": b ? b(le) : o,
                "aria-valuenow": R(qA),
                "aria-labelledby": a,
                "aria-valuetext": v ? v(R(qA), le) : i,
                value: y[le],
                ...Ep
              })
            })
          }, le);
        })
      ]
    });
  });
  function Rw(A) {
    return NA("MuiTextField", A);
  }
  DA("MuiTextField", [
    "root"
  ]);
  const Ow = {
    standard: wl,
    filled: vl,
    outlined: yl
  }, Mw = (A) => {
    const { classes: e } = A;
    return GA({
      root: [
        "root"
      ]
    }, Rw, e);
  }, Kw = hA(uv, {
    name: "MuiTextField",
    slot: "Root",
    overridesResolver: (A, e) => e.root
  })({}), Dw = h.forwardRef(function(e, t) {
    const r = VA({
      props: e,
      name: "MuiTextField"
    }), { autoComplete: n, autoFocus: o = false, children: i, className: a, color: s = "primary", defaultValue: l, disabled: c = false, error: u = false, FormHelperTextProps: d, fullWidth: f = false, helperText: p, id: B, InputLabelProps: b, inputProps: v, InputProps: Q, inputRef: w, label: C, maxRows: U, minRows: m, multiline: S = false, name: H, onBlur: I, onChange: g, onFocus: T, placeholder: R, required: L = false, rows: K, select: M = false, SelectProps: O, slots: Y = {}, slotProps: N = {}, type: P, value: AA, variant: Z = "outlined", ...iA } = r, D = {
      ...r,
      autoFocus: o,
      color: s,
      disabled: c,
      error: u,
      fullWidth: f,
      multiline: S,
      required: L,
      select: M,
      variant: Z
    }, J = Mw(D), j = Di(B), tA = p && j ? `${j}-helper-text` : void 0, mA = C && j ? `${j}-label` : void 0, dA = Ow[Z], nA = {
      slots: Y,
      slotProps: {
        input: Q,
        inputLabel: b,
        htmlInput: v,
        formHelperText: d,
        select: O,
        ...N
      }
    }, eA = {}, sA = nA.slotProps.inputLabel;
    Z === "outlined" && (sA && typeof sA.shrink < "u" && (eA.notched = sA.shrink), eA.label = C), M && ((!O || !O.native) && (eA.id = void 0), eA["aria-describedby"] = void 0);
    const [lA, y] = me("root", {
      elementType: Kw,
      shouldForwardComponentProp: true,
      externalForwardedProps: {
        ...nA,
        ...iA
      },
      ownerState: D,
      className: CA(J.root, a),
      ref: t,
      additionalProps: {
        disabled: c,
        error: u,
        fullWidth: f,
        required: L,
        color: s,
        variant: Z
      }
    }), [x, F] = me("input", {
      elementType: dA,
      externalForwardedProps: nA,
      additionalProps: eA,
      ownerState: D
    }), [V, z] = me("inputLabel", {
      elementType: xv,
      externalForwardedProps: nA,
      ownerState: D
    }), [W, gA] = me("htmlInput", {
      elementType: "input",
      externalForwardedProps: nA,
      ownerState: D
    }), [BA, $] = me("formHelperText", {
      elementType: gv,
      externalForwardedProps: nA,
      ownerState: D
    }), [G, fA] = me("select", {
      elementType: of,
      externalForwardedProps: nA,
      ownerState: D
    }), rA = E.jsx(x, {
      "aria-describedby": tA,
      autoComplete: n,
      autoFocus: o,
      defaultValue: l,
      fullWidth: f,
      multiline: S,
      name: H,
      rows: K,
      maxRows: U,
      minRows: m,
      type: P,
      value: AA,
      id: j,
      inputRef: w,
      onBlur: I,
      onChange: g,
      onFocus: T,
      placeholder: R,
      inputProps: gA,
      slots: {
        input: Y.htmlInput ? W : void 0
      },
      ...F
    });
    return E.jsxs(lA, {
      ...y,
      children: [
        C != null && C !== "" && E.jsx(V, {
          htmlFor: j,
          id: mA,
          ...z,
          children: C
        }),
        M ? E.jsx(G, {
          "aria-describedby": tA,
          id: j,
          labelId: mA,
          value: AA,
          input: rA,
          ...fA,
          children: i
        }) : rA,
        p && E.jsx(BA, {
          id: tA,
          ...$,
          children: p
        })
      ]
    });
  });
  Pw = class extends window.visRxWidget {
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
        children: E.jsx(de, {
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
          children: E.jsx(de, {
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
  let _w, Ql;
  _w = [
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
  Ql = (A) => {
    const [e, t] = h.useState({}), [r, n] = h.useState({}), [o, i] = h.useState({}), [a, s] = h.useState({}), [l, c] = h.useState({}), u = JSON.stringify(A), d = h.useMemo(() => {
      const f = {}, p = {}, B = {}, b = {}, v = {}, Q = JSON.parse(u);
      return _w.forEach((w) => {
        if (Q[w]) {
          const C = w.replace(/(-\w)/g, (U) => U[1].toUpperCase());
          w.includes("background") ? f[C] = Q[w] : w.includes("border") ? p[C] = Q[w] : w.includes("font") || w.includes("line-height") || w.includes("letter-spacing") || w.includes("word-spacing") ? b[C] = Q[w] : w.includes("text") || w.includes("color") ? B[C] = Q[w] : v[C] = Q[w];
        }
      }), {
        _backgroundStyles: f,
        _borderStyles: p,
        _textStyles: B,
        _fontStyles: b,
        _boxStyles: v
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
  at = h.createContext({});
  function Nw({ children: A, context: e }) {
    const t = e.theme, r = e.widget, { fontStyles: n, textStyles: o } = Ql(r.style || {}), i = h.useMemo(() => Pi(ae(t, {
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
    return E.jsxs(l0, {
      theme: i,
      children: [
        E.jsx(Lm, {}),
        E.jsx(at.Provider, {
          value: e,
          children: A
        })
      ]
    });
  }
  Gw = function(A, e) {
    return E.jsx(Nw, {
      context: e,
      children: A
    });
  };
  let Vw, ha, $w, Xw;
  Vw = async (A, e) => {
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
  ha = (A, e = "oid") => {
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
  $w = (A, e) => {
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
  Ww = (A, e = "oid") => async (t, r, n, o) => {
    if (!r[e]) {
      ha(r, e), setTimeout(() => n(r), 100);
      return;
    }
    try {
      const i = await o.getObject(r[e]);
      if (!i) {
        ha(r, e), setTimeout(() => n(r), 100);
        return;
      }
      const a = i.common.type;
      if (!A.includes(a)) return;
      const s = {
        _id: i._id,
        name: i.common.name || "",
        type: a,
        icon: await Vw(o, i),
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
          r[`value${f}`] = $w(c, a), r[`alias${f}`] = String(u);
        }));
      } else a === "boolean" && e === "oid" ? (r.values_count = 2, r.value1 = true, r.alias1 = "TRUE", r.value2 = false, r.alias2 = "FALSE") : e === "oid" && (r.values_count = 0);
      setTimeout(() => n(r), 100);
    } catch (i) {
      console.error(`Error handling OID change for ${r[e]}:`, i), ha(r, e), setTimeout(() => n(r), 100);
    }
  };
  jw = (A) => [
    {
      name: "oid",
      type: "id",
      label: "oid",
      onChange: Ww(A)
    },
    {
      label: "",
      type: "custom",
      component: () => E.jsx(MA, {}),
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
      component: () => E.jsx(MA, {}),
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
  zw = () => [
    {
      label: "",
      type: "custom",
      component: () => E.jsx(MA, {
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
  Xw = zd(E.jsx("path", {
    d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
  }), "Delete");
  var lf = {
    exports: {}
  };
  (function(A) {
    (function(e) {
      var t = /^\s+/, r = /\s+$/, n = 0, o = e.round, i = e.min, a = e.max, s = e.random;
      function l(y, x) {
        if (y = y || "", x = x || {}, y instanceof l) return y;
        if (!(this instanceof l)) return new l(y, x);
        var F = c(y);
        this._originalInput = y, this._r = F.r, this._g = F.g, this._b = F.b, this._a = F.a, this._roundA = o(100 * this._a) / 100, this._format = x.format || F.format, this._gradientType = x.gradientType, this._r < 1 && (this._r = o(this._r)), this._g < 1 && (this._g = o(this._g)), this._b < 1 && (this._b = o(this._b)), this._ok = F.ok, this._tc_id = n++;
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
          var y = this.toRgb();
          return (y.r * 299 + y.g * 587 + y.b * 114) / 1e3;
        },
        getLuminance: function() {
          var y = this.toRgb(), x, F, V, z, W, gA;
          return x = y.r / 255, F = y.g / 255, V = y.b / 255, x <= 0.03928 ? z = x / 12.92 : z = e.pow((x + 0.055) / 1.055, 2.4), F <= 0.03928 ? W = F / 12.92 : W = e.pow((F + 0.055) / 1.055, 2.4), V <= 0.03928 ? gA = V / 12.92 : gA = e.pow((V + 0.055) / 1.055, 2.4), 0.2126 * z + 0.7152 * W + 0.0722 * gA;
        },
        setAlpha: function(y) {
          return this._a = P(y), this._roundA = o(100 * this._a) / 100, this;
        },
        toHsv: function() {
          var y = p(this._r, this._g, this._b);
          return {
            h: y.h * 360,
            s: y.s,
            v: y.v,
            a: this._a
          };
        },
        toHsvString: function() {
          var y = p(this._r, this._g, this._b), x = o(y.h * 360), F = o(y.s * 100), V = o(y.v * 100);
          return this._a == 1 ? "hsv(" + x + ", " + F + "%, " + V + "%)" : "hsva(" + x + ", " + F + "%, " + V + "%, " + this._roundA + ")";
        },
        toHsl: function() {
          var y = d(this._r, this._g, this._b);
          return {
            h: y.h * 360,
            s: y.s,
            l: y.l,
            a: this._a
          };
        },
        toHslString: function() {
          var y = d(this._r, this._g, this._b), x = o(y.h * 360), F = o(y.s * 100), V = o(y.l * 100);
          return this._a == 1 ? "hsl(" + x + ", " + F + "%, " + V + "%)" : "hsla(" + x + ", " + F + "%, " + V + "%, " + this._roundA + ")";
        },
        toHex: function(y) {
          return b(this._r, this._g, this._b, y);
        },
        toHexString: function(y) {
          return "#" + this.toHex(y);
        },
        toHex8: function(y) {
          return v(this._r, this._g, this._b, this._a, y);
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
            r: o(AA(this._r, 255) * 100) + "%",
            g: o(AA(this._g, 255) * 100) + "%",
            b: o(AA(this._b, 255) * 100) + "%",
            a: this._a
          };
        },
        toPercentageRgbString: function() {
          return this._a == 1 ? "rgb(" + o(AA(this._r, 255) * 100) + "%, " + o(AA(this._g, 255) * 100) + "%, " + o(AA(this._b, 255) * 100) + "%)" : "rgba(" + o(AA(this._r, 255) * 100) + "%, " + o(AA(this._g, 255) * 100) + "%, " + o(AA(this._b, 255) * 100) + "%, " + this._roundA + ")";
        },
        toName: function() {
          return this._a === 0 ? "transparent" : this._a < 1 ? false : Y[b(this._r, this._g, this._b, true)] || false;
        },
        toFilter: function(y) {
          var x = "#" + Q(this._r, this._g, this._b, this._a), F = x, V = this._gradientType ? "GradientType = 1, " : "";
          if (y) {
            var z = l(y);
            F = "#" + Q(z._r, z._g, z._b, z._a);
          }
          return "progid:DXImageTransform.Microsoft.gradient(" + V + "startColorstr=" + x + ",endColorstr=" + F + ")";
        },
        toString: function(y) {
          var x = !!y;
          y = y || this._format;
          var F = false, V = this._a < 1 && this._a >= 0, z = !x && V && (y === "hex" || y === "hex6" || y === "hex3" || y === "hex4" || y === "hex8" || y === "name");
          return z ? y === "name" && this._a === 0 ? this.toName() : this.toRgbString() : (y === "rgb" && (F = this.toRgbString()), y === "prgb" && (F = this.toPercentageRgbString()), (y === "hex" || y === "hex6") && (F = this.toHexString()), y === "hex3" && (F = this.toHexString(true)), y === "hex4" && (F = this.toHex8String(true)), y === "hex8" && (F = this.toHex8String()), y === "name" && (F = this.toName()), y === "hsl" && (F = this.toHslString()), y === "hsv" && (F = this.toHsvString()), F || this.toHexString());
        },
        clone: function() {
          return l(this.toString());
        },
        _applyModification: function(y, x) {
          var F = y.apply(null, [
            this
          ].concat([].slice.call(x)));
          return this._r = F._r, this._g = F._g, this._b = F._b, this.setAlpha(F._a), this;
        },
        lighten: function() {
          return this._applyModification(m, arguments);
        },
        brighten: function() {
          return this._applyModification(S, arguments);
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
        _applyCombination: function(y, x) {
          return y.apply(null, [
            this
          ].concat([].slice.call(x)));
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
          return this._applyCombination(T, arguments);
        },
        tetrad: function() {
          return this._applyCombination(R, arguments);
        }
      }, l.fromRatio = function(y, x) {
        if (typeof y == "object") {
          var F = {};
          for (var V in y) y.hasOwnProperty(V) && (V === "a" ? F[V] = y[V] : F[V] = tA(y[V]));
          y = F;
        }
        return l(y, x);
      };
      function c(y) {
        var x = {
          r: 0,
          g: 0,
          b: 0
        }, F = 1, V = null, z = null, W = null, gA = false, BA = false;
        return typeof y == "string" && (y = sA(y)), typeof y == "object" && (eA(y.r) && eA(y.g) && eA(y.b) ? (x = u(y.r, y.g, y.b), gA = true, BA = String(y.r).substr(-1) === "%" ? "prgb" : "rgb") : eA(y.h) && eA(y.s) && eA(y.v) ? (V = tA(y.s), z = tA(y.v), x = B(y.h, V, z), gA = true, BA = "hsv") : eA(y.h) && eA(y.s) && eA(y.l) && (V = tA(y.s), W = tA(y.l), x = f(y.h, V, W), gA = true, BA = "hsl"), y.hasOwnProperty("a") && (F = y.a)), F = P(F), {
          ok: gA,
          format: y.format || BA,
          r: i(255, a(x.r, 0)),
          g: i(255, a(x.g, 0)),
          b: i(255, a(x.b, 0)),
          a: F
        };
      }
      function u(y, x, F) {
        return {
          r: AA(y, 255) * 255,
          g: AA(x, 255) * 255,
          b: AA(F, 255) * 255
        };
      }
      function d(y, x, F) {
        y = AA(y, 255), x = AA(x, 255), F = AA(F, 255);
        var V = a(y, x, F), z = i(y, x, F), W, gA, BA = (V + z) / 2;
        if (V == z) W = gA = 0;
        else {
          var $ = V - z;
          switch (gA = BA > 0.5 ? $ / (2 - V - z) : $ / (V + z), V) {
            case y:
              W = (x - F) / $ + (x < F ? 6 : 0);
              break;
            case x:
              W = (F - y) / $ + 2;
              break;
            case F:
              W = (y - x) / $ + 4;
              break;
          }
          W /= 6;
        }
        return {
          h: W,
          s: gA,
          l: BA
        };
      }
      function f(y, x, F) {
        var V, z, W;
        y = AA(y, 360), x = AA(x, 100), F = AA(F, 100);
        function gA(G, fA, rA) {
          return rA < 0 && (rA += 1), rA > 1 && (rA -= 1), rA < 1 / 6 ? G + (fA - G) * 6 * rA : rA < 1 / 2 ? fA : rA < 2 / 3 ? G + (fA - G) * (2 / 3 - rA) * 6 : G;
        }
        if (x === 0) V = z = W = F;
        else {
          var BA = F < 0.5 ? F * (1 + x) : F + x - F * x, $ = 2 * F - BA;
          V = gA($, BA, y + 1 / 3), z = gA($, BA, y), W = gA($, BA, y - 1 / 3);
        }
        return {
          r: V * 255,
          g: z * 255,
          b: W * 255
        };
      }
      function p(y, x, F) {
        y = AA(y, 255), x = AA(x, 255), F = AA(F, 255);
        var V = a(y, x, F), z = i(y, x, F), W, gA, BA = V, $ = V - z;
        if (gA = V === 0 ? 0 : $ / V, V == z) W = 0;
        else {
          switch (V) {
            case y:
              W = (x - F) / $ + (x < F ? 6 : 0);
              break;
            case x:
              W = (F - y) / $ + 2;
              break;
            case F:
              W = (y - x) / $ + 4;
              break;
          }
          W /= 6;
        }
        return {
          h: W,
          s: gA,
          v: BA
        };
      }
      function B(y, x, F) {
        y = AA(y, 360) * 6, x = AA(x, 100), F = AA(F, 100);
        var V = e.floor(y), z = y - V, W = F * (1 - x), gA = F * (1 - z * x), BA = F * (1 - (1 - z) * x), $ = V % 6, G = [
          F,
          gA,
          W,
          W,
          BA,
          F
        ][$], fA = [
          BA,
          F,
          F,
          gA,
          W,
          W
        ][$], rA = [
          W,
          W,
          BA,
          F,
          F,
          gA
        ][$];
        return {
          r: G * 255,
          g: fA * 255,
          b: rA * 255
        };
      }
      function b(y, x, F, V) {
        var z = [
          j(o(y).toString(16)),
          j(o(x).toString(16)),
          j(o(F).toString(16))
        ];
        return V && z[0].charAt(0) == z[0].charAt(1) && z[1].charAt(0) == z[1].charAt(1) && z[2].charAt(0) == z[2].charAt(1) ? z[0].charAt(0) + z[1].charAt(0) + z[2].charAt(0) : z.join("");
      }
      function v(y, x, F, V, z) {
        var W = [
          j(o(y).toString(16)),
          j(o(x).toString(16)),
          j(o(F).toString(16)),
          j(mA(V))
        ];
        return z && W[0].charAt(0) == W[0].charAt(1) && W[1].charAt(0) == W[1].charAt(1) && W[2].charAt(0) == W[2].charAt(1) && W[3].charAt(0) == W[3].charAt(1) ? W[0].charAt(0) + W[1].charAt(0) + W[2].charAt(0) + W[3].charAt(0) : W.join("");
      }
      function Q(y, x, F, V) {
        var z = [
          j(mA(V)),
          j(o(y).toString(16)),
          j(o(x).toString(16)),
          j(o(F).toString(16))
        ];
        return z.join("");
      }
      l.equals = function(y, x) {
        return !y || !x ? false : l(y).toRgbString() == l(x).toRgbString();
      }, l.random = function() {
        return l.fromRatio({
          r: s(),
          g: s(),
          b: s()
        });
      };
      function w(y, x) {
        x = x === 0 ? 0 : x || 10;
        var F = l(y).toHsl();
        return F.s -= x / 100, F.s = Z(F.s), l(F);
      }
      function C(y, x) {
        x = x === 0 ? 0 : x || 10;
        var F = l(y).toHsl();
        return F.s += x / 100, F.s = Z(F.s), l(F);
      }
      function U(y) {
        return l(y).desaturate(100);
      }
      function m(y, x) {
        x = x === 0 ? 0 : x || 10;
        var F = l(y).toHsl();
        return F.l += x / 100, F.l = Z(F.l), l(F);
      }
      function S(y, x) {
        x = x === 0 ? 0 : x || 10;
        var F = l(y).toRgb();
        return F.r = a(0, i(255, F.r - o(255 * -(x / 100)))), F.g = a(0, i(255, F.g - o(255 * -(x / 100)))), F.b = a(0, i(255, F.b - o(255 * -(x / 100)))), l(F);
      }
      function H(y, x) {
        x = x === 0 ? 0 : x || 10;
        var F = l(y).toHsl();
        return F.l -= x / 100, F.l = Z(F.l), l(F);
      }
      function I(y, x) {
        var F = l(y).toHsl(), V = (F.h + x) % 360;
        return F.h = V < 0 ? 360 + V : V, l(F);
      }
      function g(y) {
        var x = l(y).toHsl();
        return x.h = (x.h + 180) % 360, l(x);
      }
      function T(y) {
        var x = l(y).toHsl(), F = x.h;
        return [
          l(y),
          l({
            h: (F + 120) % 360,
            s: x.s,
            l: x.l
          }),
          l({
            h: (F + 240) % 360,
            s: x.s,
            l: x.l
          })
        ];
      }
      function R(y) {
        var x = l(y).toHsl(), F = x.h;
        return [
          l(y),
          l({
            h: (F + 90) % 360,
            s: x.s,
            l: x.l
          }),
          l({
            h: (F + 180) % 360,
            s: x.s,
            l: x.l
          }),
          l({
            h: (F + 270) % 360,
            s: x.s,
            l: x.l
          })
        ];
      }
      function L(y) {
        var x = l(y).toHsl(), F = x.h;
        return [
          l(y),
          l({
            h: (F + 72) % 360,
            s: x.s,
            l: x.l
          }),
          l({
            h: (F + 216) % 360,
            s: x.s,
            l: x.l
          })
        ];
      }
      function K(y, x, F) {
        x = x || 6, F = F || 30;
        var V = l(y).toHsl(), z = 360 / F, W = [
          l(y)
        ];
        for (V.h = (V.h - (z * x >> 1) + 720) % 360; --x; ) V.h = (V.h + z) % 360, W.push(l(V));
        return W;
      }
      function M(y, x) {
        x = x || 6;
        for (var F = l(y).toHsv(), V = F.h, z = F.s, W = F.v, gA = [], BA = 1 / x; x--; ) gA.push(l({
          h: V,
          s: z,
          v: W
        })), W = (W + BA) % 1;
        return gA;
      }
      l.mix = function(y, x, F) {
        F = F === 0 ? 0 : F || 50;
        var V = l(y).toRgb(), z = l(x).toRgb(), W = F / 100, gA = {
          r: (z.r - V.r) * W + V.r,
          g: (z.g - V.g) * W + V.g,
          b: (z.b - V.b) * W + V.b,
          a: (z.a - V.a) * W + V.a
        };
        return l(gA);
      }, l.readability = function(y, x) {
        var F = l(y), V = l(x);
        return (e.max(F.getLuminance(), V.getLuminance()) + 0.05) / (e.min(F.getLuminance(), V.getLuminance()) + 0.05);
      }, l.isReadable = function(y, x, F) {
        var V = l.readability(y, x), z, W;
        switch (W = false, z = lA(F), z.level + z.size) {
          case "AAsmall":
          case "AAAlarge":
            W = V >= 4.5;
            break;
          case "AAlarge":
            W = V >= 3;
            break;
          case "AAAsmall":
            W = V >= 7;
            break;
        }
        return W;
      }, l.mostReadable = function(y, x, F) {
        var V = null, z = 0, W, gA, BA, $;
        F = F || {}, gA = F.includeFallbackColors, BA = F.level, $ = F.size;
        for (var G = 0; G < x.length; G++) W = l.readability(y, x[G]), W > z && (z = W, V = l(x[G]));
        return l.isReadable(y, V, {
          level: BA,
          size: $
        }) || !gA ? V : (F.includeFallbackColors = false, l.mostReadable(y, [
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
      }, Y = l.hexNames = N(O);
      function N(y) {
        var x = {};
        for (var F in y) y.hasOwnProperty(F) && (x[y[F]] = F);
        return x;
      }
      function P(y) {
        return y = parseFloat(y), (isNaN(y) || y < 0 || y > 1) && (y = 1), y;
      }
      function AA(y, x) {
        D(y) && (y = "100%");
        var F = J(y);
        return y = i(x, a(0, parseFloat(y))), F && (y = parseInt(y * x, 10) / 100), e.abs(y - x) < 1e-6 ? 1 : y % x / parseFloat(x);
      }
      function Z(y) {
        return i(1, a(0, y));
      }
      function iA(y) {
        return parseInt(y, 16);
      }
      function D(y) {
        return typeof y == "string" && y.indexOf(".") != -1 && parseFloat(y) === 1;
      }
      function J(y) {
        return typeof y == "string" && y.indexOf("%") != -1;
      }
      function j(y) {
        return y.length == 1 ? "0" + y : "" + y;
      }
      function tA(y) {
        return y <= 1 && (y = y * 100 + "%"), y;
      }
      function mA(y) {
        return e.round(parseFloat(y) * 255).toString(16);
      }
      function dA(y) {
        return iA(y) / 255;
      }
      var nA = (function() {
        var y = "[-\\+]?\\d+%?", x = "[-\\+]?\\d*\\.\\d+%?", F = "(?:" + x + ")|(?:" + y + ")", V = "[\\s|\\(]+(" + F + ")[,|\\s]+(" + F + ")[,|\\s]+(" + F + ")\\s*\\)?", z = "[\\s|\\(]+(" + F + ")[,|\\s]+(" + F + ")[,|\\s]+(" + F + ")[,|\\s]+(" + F + ")\\s*\\)?";
        return {
          CSS_UNIT: new RegExp(F),
          rgb: new RegExp("rgb" + V),
          rgba: new RegExp("rgba" + z),
          hsl: new RegExp("hsl" + V),
          hsla: new RegExp("hsla" + z),
          hsv: new RegExp("hsv" + V),
          hsva: new RegExp("hsva" + z),
          hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
          hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
        };
      })();
      function eA(y) {
        return !!nA.CSS_UNIT.exec(y);
      }
      function sA(y) {
        y = y.replace(t, "").replace(r, "").toLowerCase();
        var x = false;
        if (O[y]) y = O[y], x = true;
        else if (y == "transparent") return {
          r: 0,
          g: 0,
          b: 0,
          a: 0,
          format: "name"
        };
        var F;
        return (F = nA.rgb.exec(y)) ? {
          r: F[1],
          g: F[2],
          b: F[3]
        } : (F = nA.rgba.exec(y)) ? {
          r: F[1],
          g: F[2],
          b: F[3],
          a: F[4]
        } : (F = nA.hsl.exec(y)) ? {
          h: F[1],
          s: F[2],
          l: F[3]
        } : (F = nA.hsla.exec(y)) ? {
          h: F[1],
          s: F[2],
          l: F[3],
          a: F[4]
        } : (F = nA.hsv.exec(y)) ? {
          h: F[1],
          s: F[2],
          v: F[3]
        } : (F = nA.hsva.exec(y)) ? {
          h: F[1],
          s: F[2],
          v: F[3],
          a: F[4]
        } : (F = nA.hex8.exec(y)) ? {
          r: iA(F[1]),
          g: iA(F[2]),
          b: iA(F[3]),
          a: dA(F[4]),
          format: x ? "name" : "hex8"
        } : (F = nA.hex6.exec(y)) ? {
          r: iA(F[1]),
          g: iA(F[2]),
          b: iA(F[3]),
          format: x ? "name" : "hex"
        } : (F = nA.hex4.exec(y)) ? {
          r: iA(F[1] + "" + F[1]),
          g: iA(F[2] + "" + F[2]),
          b: iA(F[3] + "" + F[3]),
          a: dA(F[4] + "" + F[4]),
          format: x ? "name" : "hex8"
        } : (F = nA.hex3.exec(y)) ? {
          r: iA(F[1] + "" + F[1]),
          g: iA(F[2] + "" + F[2]),
          b: iA(F[3] + "" + F[3]),
          format: x ? "name" : "hex"
        } : false;
      }
      function lA(y) {
        var x, F;
        return y = y || {
          level: "AA",
          size: "small"
        }, x = (y.level || "AA").toUpperCase(), F = (y.size || "small").toLowerCase(), x !== "AA" && x !== "AAA" && (x = "AA"), F !== "small" && F !== "large" && (F = "small"), {
          level: x,
          size: F
        };
      }
      A.exports ? A.exports = l : window.tinycolor = l;
    })(Math);
  })(lf);
  var Yw = lf.exports;
  const XA = Ks(Yw);
  var Br = function() {
    return Br = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, Br.apply(this, arguments);
  }, Jw = function(A, e, t) {
    if (t || arguments.length === 2) for (var r = 0, n = e.length, o; r < n; r++) (o || !(r in e)) && (o || (o = Array.prototype.slice.call(e, 0, r)), o[r] = e[r]);
    return A.concat(o || Array.prototype.slice.call(e));
  }, Zw = function(A) {
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
    function t(D) {
      var J = new Error(A + ": " + D);
      throw J;
    }
    function r(D) {
      A = A.substr(D);
    }
    function n(D) {
      var J = /^[\n\r\t\s]+/.exec(A);
      J && r(J[0].length);
      var j = D.exec(A);
      return j && r(j[0].length), j;
    }
    function o(D) {
      var J = D(), j = [];
      if (J) for (j.push(J); n(e.comma); ) J = D(), J ? j.push(J) : t("One extra comma");
      return j;
    }
    function i(D, J, j) {
      var tA = n(J);
      if (tA) return {
        type: D,
        value: tA[j]
      };
    }
    function a() {
      var D = i("hex", e.hexColor, 1);
      if (D == null ? void 0 : D.value) {
        var J = XA(D == null ? void 0 : D.value).toRgb(), j = J.r, tA = J.g, mA = J.b, dA = J.a;
        return {
          value: "rgba(".concat(j, ", ").concat(tA, ", ").concat(mA, ", ").concat(dA, ")")
        };
      }
    }
    var s = function(D) {
      var J = St(D == null ? void 0 : D[0]);
      return {
        value: "".concat(J ? "RGBA" : "rgba", "(").concat(o(Y), ")")
      };
    };
    function l(D, J) {
      var j = n(D);
      if (j) {
        n(e.startCall) || t("Missing (");
        var tA = J(j);
        return n(e.endCall) || t("Missing )"), tA;
      }
    }
    function c() {
      return l(e.hslColor, N);
    }
    function u() {
      return l(e.rgbaColor, s);
    }
    function d() {
      return l(e.rgbColor, AA);
    }
    function f() {
      var D = i("literal", e.literalColor, 0);
      if (D == null ? void 0 : D.value) {
        var J = XA(D == null ? void 0 : D.value).toRgb(), j = J.r, tA = J.g, mA = J.b, dA = J.a;
        return {
          value: "rgba(".concat(j, ", ").concat(tA, ", ").concat(mA, ", ").concat(dA, ")")
        };
      }
    }
    function p() {
      return l(e.hsvColor, P);
    }
    function B() {
      return a() || c() || u() || d() || f() || p();
    }
    function b() {
      var D, J = B();
      return J || t("Expected color definition"), J.left = parseInt((D = Z()) === null || D === void 0 ? void 0 : D.value), J;
    }
    function v(D, J, j) {
      return l(J, function() {
        var tA = j();
        return tA && (n(e.comma) || t("Missing comma before color stops")), {
          type: D,
          orientation: tA,
          colorStops: o(b)
        };
      });
    }
    function Q() {
      return m() || S();
    }
    function w() {
      return v("linear-gradient", e.linearGradient, Q) || v("repeating-linear-gradient", e.repeatingLinearGradient, Q) || v("radial-gradient", e.radialGradient, H) || v("repeating-radial-gradient", e.repeatingRadialGradient, H);
    }
    function C() {
      return o(w);
    }
    function U() {
      var D, J = C();
      A.length > 0 && t("Invalid input not EOF");
      var j = J[0], tA = (D = j == null ? void 0 : j.colorStops) === null || D === void 0 ? void 0 : D.filter(function(dA) {
        return St(dA.value);
      }).length, mA = function() {
        if (tA > 0) return j;
        var dA = function(nA, eA) {
          return eA === 0 ? En(nA) : Zt(nA);
        };
        return Br(Br({}, j), {
          colorStops: j.colorStops.map(function(nA, eA) {
            return Br(Br({}, nA), {
              value: dA(nA, eA)
            });
          })
        });
      };
      return mA();
    }
    function m() {
      return i("directional", e.sideOrCorner, 1);
    }
    function S() {
      return i("angular", e.angleValue, 1);
    }
    function H() {
      var D, J = I(), j;
      return J && (D = [], D.push(J), j = A, n(e.comma) && (J = I(), J ? D.push(J) : A = j)), D;
    }
    function I() {
      var D = T() || R();
      if (D) D.at = K();
      else {
        var J = L();
        if (J) {
          D = J;
          var j = K();
          j && (D.at = j);
        } else {
          var tA = M();
          tA && (D = {
            type: "default-radial",
            at: tA
          });
        }
      }
      return D;
    }
    function g() {
      return i("px", e.pixelValue, 1) || i("em", e.emValue, 1);
    }
    function T() {
      var D = i("shape", /^(circle)/i, 0);
      return D && (D.style = g() || L()), D;
    }
    function R() {
      var D = i("shape", /^(ellipse)/i, 0);
      return D && (D.style = Z() || L()), D;
    }
    function L() {
      return i("extent-keyword", e.extentKeywords, 1);
    }
    function K() {
      if (i("position", /^at/, 0)) {
        var D = M();
        return D || t("Missing positioning value"), D;
      }
    }
    function M() {
      var D = O();
      if (D.x || D.y) return {
        type: "position",
        value: D
      };
    }
    function O() {
      return {
        x: Z(),
        y: Z()
      };
    }
    function Y() {
      return n(e.number)[1];
    }
    var N = function(D) {
      var J = St(D == null ? void 0 : D[0]), j = o(Y), tA = XA({
        h: j[0],
        s: j[1],
        l: j[2],
        a: j[3] || 1
      }).toRgb(), mA = tA.r, dA = tA.g, nA = tA.b, eA = tA.a;
      return {
        value: "".concat(J ? "RGBA" : "rgba", "(").concat(mA, ", ").concat(dA, ", ").concat(nA, ", ").concat(eA, ")")
      };
    }, P = function(D) {
      var J = St(D == null ? void 0 : D[0]), j = o(Y), tA = XA({
        h: j[0],
        s: j[1],
        v: j[2],
        a: j[3] || 1
      }).toRgb(), mA = tA.r, dA = tA.g, nA = tA.b, eA = tA.a;
      return {
        value: "".concat(J ? "RGBA" : "rgba", "(").concat(mA, ", ").concat(dA, ", ").concat(nA, ", ").concat(eA, ")")
      };
    }, AA = function(D) {
      var J = St(D == null ? void 0 : D[0]), j = n(e.spacedRgbColor), tA = j || Jw([
        null
      ], o(Y), true), mA = tA[1], dA = tA[2], nA = tA[3], eA = tA[4], sA = eA === void 0 ? 1 : eA;
      return {
        value: "".concat(J ? "RGBA" : "rgba", "(").concat(mA, ", ").concat(dA, ", ").concat(nA, ", ").concat(sA, ")")
      };
    };
    function Z() {
      return i("%", e.percentageValue, 1) || iA() || g();
    }
    function iA() {
      return i("position-keyword", e.positionKeywords, 1);
    }
    return U();
  }, Zt = function(A) {
    return A.value.toLowerCase();
  }, En = function(A) {
    return A.value.toUpperCase();
  }, cs = function(A, e, t) {
    var r = A == null ? void 0 : A.includes("gradient");
    if (r) {
      var n = A == null ? void 0 : A.includes("conic"), o = n ? t : A;
      n && console.log("Sorry we cant handle conic gradients yet");
      var i = Zw(o);
      return i == null ? void 0 : i.colorStops;
    } else {
      var o = A || e;
      return [
        {
          value: o
        }
      ];
    }
  }, Ce = function(A, e, t) {
    return isNaN(A) || A < e ? e : A > t ? t : A;
  }, At = function(A) {
    return Math.round(A);
  }, Go = function() {
    return Go = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, Go.apply(this, arguments);
  }, cf = function(A) {
    var e = A.target.parentNode.getBoundingClientRect(), t = A.target.className, r = t === "c-resize ps-rl" ? 15 : 0;
    return {
      offsetLeft: (e == null ? void 0 : e.x) + r,
      offsetTop: e == null ? void 0 : e.y,
      clientWidth: e == null ? void 0 : e.width,
      clientHeight: e == null ? void 0 : e.height
    };
  };
  function Ur(A, e) {
    var t = cf(A), r = t.offsetLeft, n = t.clientWidth, o = A.clientX - r - e / 2, i = n - 18, a = Ce(o, 0, i);
    return Math.round(a / (i / 100));
  }
  function qw(A, e, t, r, n) {
    var o = A * t - n / 2, i = (100 - e) / 100 * r - n / 2;
    return [
      o,
      i
    ];
  }
  var AC = function(A) {
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
  function eC(A, e) {
    var t = cf(A), r = t.offsetLeft, n = t.offsetTop, o = t.clientWidth, i = t.clientHeight, a = AC(A), s = a.clientX, l = a.clientY, c = function() {
      var d = s - r - e / 2;
      return Ce(d, -9, o - 10);
    }, u = function() {
      var d = l - n - e / 2;
      return Ce(d, -9, i - 10);
    };
    return [
      c(),
      u()
    ];
  }
  var St = function(A) {
    var e;
    return (A == null ? void 0 : A[0]) === ((e = A == null ? void 0 : A[0]) === null || e === void 0 ? void 0 : e.toUpperCase());
  }, uf = function(A) {
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
  }, tC = function(A) {
    var e, t, r, n, o;
    if (typeof A == "string") return A;
    if (!((e = A == null ? void 0 : A.type) === null || e === void 0) && e.includes("gradient")) {
      var i = (t = A == null ? void 0 : A.colorStops) === null || t === void 0 ? void 0 : t.sort(function(d, f) {
        return (d == null ? void 0 : d.left) - (f == null ? void 0 : f.left);
      }), a = (r = i == null ? void 0 : i.map(function(d) {
        return "".concat(d == null ? void 0 : d.value, " ").concat(d == null ? void 0 : d.left, "%");
      })) === null || r === void 0 ? void 0 : r.join(", "), s = A == null ? void 0 : A.type, l = uf((n = A == null ? void 0 : A.orientation) === null || n === void 0 ? void 0 : n.value), c = s === "linear-gradient" ? "".concat(l, "deg") : "circle";
      return "".concat(s, "(").concat(c, ", ").concat(a, ")");
    } else {
      var u = ((o = A == null ? void 0 : A.colorStops[0]) === null || o === void 0 ? void 0 : o.value) || "rgba(175, 51, 242, 1)";
      return u;
    }
  }, df = function(A, e) {
    var t = A == null ? void 0 : A.map(function(o, i) {
      return Go(Go({}, o), {
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
  }, rC = function(A) {
    var e, t = A == null ? void 0 : A.split(",")[0], r = (e = t == null ? void 0 : t.split("(")[1]) === null || e === void 0 ? void 0 : e.replace("deg", "");
    return uf(r);
  }, ff = function(A) {
    var e = A == null ? void 0 : A.includes("gradient"), t = A == null ? void 0 : A.split("(")[0], r = rC(A), n = t === "linear-gradient" ? "".concat(r, "deg") : "circle";
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
  }, nC = function(A, e, t) {
    if (t || arguments.length === 2) for (var r = 0, n = e.length, o; r < n; r++) (o || !(r in e)) && (o || (o = Array.prototype.slice.call(e, 0, r)), o[r] = e[r]);
    return A.concat(o || Array.prototype.slice.call(e));
  }, pf = h.createContext(null);
  function oC(A) {
    var e, t, r, n, o = A.value, i = A.children, a = A.onChange, s = A.isDarkMode, l = A.squareWidth, c = A.hideOpacity, u = A.showHexAlpha, d = A.squareHeight, f = A.passedConfig, p = A.defaultStyles, B = A.pickerIdSuffix, b = {
      barSize: (e = f.barSize) !== null && e !== void 0 ? e : zn.barSize,
      crossSize: (t = f.crossSize) !== null && t !== void 0 ? t : zn.crossSize,
      defaultColor: (r = f.defaultColor) !== null && r !== void 0 ? r : zn.defaultColor,
      defaultGradient: (n = f.defaultGradient) !== null && n !== void 0 ? n : zn.defaultGradient
    }, v = cs(o, b.defaultColor, b.defaultGradient), Q = ff(o), w = Q.degrees, C = Q.degreeStr, U = Q.isGradient, m = Q.gradientType, S = df(v, b.defaultGradient), H = S.currentColor, I = S.selectedColor, g = S.currentLeft, T = h.useState("rgb"), R = T[0], L = T[1], K = h.useState({}), M = K[0], O = K[1], Y = XA(H), N = Y.toRgb(), P = Y.toHsv(), AA = h.useState(ve(ve({}, N), P)), Z = AA[0], iA = AA[1];
    h.useEffect(function() {
      (P == null ? void 0 : P.s) === 0 ? iA(ve(ve(ve({}, N), P), {
        h: Z == null ? void 0 : Z.h
      })) : iA(ve(ve({}, N), P));
    }, [
      H
    ]);
    var D = function(dA) {
      var nA = dA.sort(function(lA, y) {
        return lA.left - y.left;
      }), eA = nA == null ? void 0 : nA.map(function(lA) {
        return "".concat(lA == null ? void 0 : lA.value, " ").concat(lA.left, "%");
      }), sA = "".concat(m, "(").concat(C, ", ").concat(eA.join(", "), ")");
      O(ve(ve({}, M), {
        gradient: sA
      })), a(sA);
    }, J = function(dA, nA) {
      var eA = v == null ? void 0 : v.filter(function(lA) {
        return !St(lA.value);
      }), sA = nC([
        {
          value: dA.toUpperCase(),
          left: nA ?? g
        }
      ], eA, true);
      D(sA);
    }, j = function(dA) {
      U ? J(dA) : (O(ve(ve({}, M), {
        color: dA
      })), a(dA));
    }, tA = function() {
      if ((v == null ? void 0 : v.length) > 2) {
        var dA = v == null ? void 0 : v.map(function(eA, sA) {
          return ve(ve({}, eA), {
            value: sA === I - 1 ? En(eA) : Zt(eA)
          });
        }), nA = dA == null ? void 0 : dA.filter(function(eA, sA) {
          return sA !== I;
        });
        D(nA);
      }
    }, mA = {
      hc: Z,
      setHc: iA,
      value: o,
      colors: v,
      config: b,
      degrees: w,
      onChange: a,
      previous: M,
      inputType: R,
      tinyColor: Y,
      isDarkMode: s,
      isGradient: U,
      squareWidth: l,
      hideOpacity: c,
      currentLeft: g,
      deletePoint: tA,
      showHexAlpha: u,
      squareHeight: d,
      setInputType: L,
      gradientType: m,
      handleChange: j,
      currentColor: H,
      selectedColor: I,
      defaultStyles: p,
      handleGradient: J,
      pickerIdSuffix: B,
      createGradientStr: D
    };
    return k.createElement(pf.Provider, {
      value: mA
    }, i);
  }
  function kA() {
    var A = h.useContext(pf);
    if (!A) throw new Error("usePicker has to be used within <PickerContext.Provider>");
    return A;
  }
  var zn = {
    barSize: 18,
    crossSize: 18,
    defaultColor: "rgba(175, 51, 242, 1)",
    defaultGradient: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"
  }, iC = function(A, e) {
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
  }, aC = function(A, e, t, r) {
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
  }, sC = function(A, e, t, r) {
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
  }, lC = function(A, e, t, r) {
    h.useEffect(function() {
      var n, o = (n = A == null ? void 0 : A.current) === null || n === void 0 ? void 0 : n.getContext("2d", {
        willReadFrequently: true
      });
      if (o) {
        o.rect(0, 0, r, 14);
        for (var i = o.createLinearGradient(0, 0, r, 0), a = 0; a <= 100; a += 10) {
          var s = XA({
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
  }, Vo = function() {
    return Vo = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, Vo.apply(this, arguments);
  }, cC = function() {
    var A = h.useRef(null), e = kA(), t = e.config, r = e.handleChange, n = e.squareWidth, o = e.hc, i = e.setHc, a = e.pickerIdSuffix, s = h.useState(false), l = s[0], c = s[1], u = t.barSize;
    iC(A, n);
    var d = function() {
      c(false);
    }, f = function() {
      c(true);
    }, p = function(v) {
      var Q = Ur(v, u) * 3.6, w = XA({
        h: Q,
        s: o == null ? void 0 : o.s,
        v: o == null ? void 0 : o.v
      }), C = w.toRgb(), U = C.r, m = C.g, S = C.b;
      r("rgba(".concat(U, ", ").concat(m, ", ").concat(S, ", ").concat(o.a, ")")), i(Vo(Vo({}, o), {
        h: Q
      }));
    }, B = function(v) {
      l && p(v);
    }, b = function(v) {
      l || p(v);
    };
    return h.useEffect(function() {
      var v = function() {
        d();
      };
      return window.addEventListener("mouseup", v), function() {
        window.removeEventListener("mouseup", v);
      };
    }, []), k.createElement("div", {
      style: {
        height: 14,
        marginTop: 17,
        marginBottom: 4,
        cursor: "ew-resize",
        position: "relative"
      },
      onMouseMove: function(v) {
        return B(v);
      },
      id: "rbgcp-hue-wrap".concat(a)
    }, k.createElement("div", {
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
    }), k.createElement("canvas", {
      ref: A,
      height: "14px",
      width: "".concat(n, "px"),
      onClick: function(v) {
        return b(v);
      },
      id: "rbgcp-hue-bar".concat(a),
      style: {
        borderRadius: 14,
        position: "relative",
        verticalAlign: "top"
      }
    }));
  };
  function gf(A, e, t) {
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
  var uC = function(A) {
    var e = A.c, t = A.m, r = A.y, n = A.k, o = 255 * (1 - e) * (1 - n), i = 255 * (1 - t) * (1 - n), a = 255 * (1 - r) * (1 - n);
    return {
      r: o,
      g: i,
      b: a
    };
  }, dC = function(A) {
    return typeof A != "number" ? "FF" : A < 0 ? "00" : A > 1 ? "FF" : Math.round(A * 255).toString(16).padStart(2, "0").toUpperCase();
  }, Ke = function() {
    return Ke = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, Ke.apply(this, arguments);
  }, Fe = function(A) {
    var e = A.label, t = A.value, r = A.callback, n = A.max, o = n === void 0 ? 100 : n, i = A.hideOpacity, a = A.defaultStyles, s = A.pickerIdSuffix, l = h.useState(t), c = l[0], u = l[1], d = i ? "25%" : "20%";
    h.useEffect(function() {
      u(t);
    }, [
      t
    ]);
    var f = function(p) {
      var B = Ce(parseFloat(p.target.value), 0, o);
      u(B), r(B);
    };
    return k.createElement("div", {
      style: {
        width: d,
        flexShrink: 1
      },
      id: "rbgcp-".concat(e, "-input-wrapper").concat(s)
    }, k.createElement("input", {
      value: c,
      onChange: function(p) {
        return f(p);
      },
      style: Ke({}, a.rbgcpInput),
      id: "rbgcp-".concat(e, "-input").concat(s)
    }), k.createElement("div", {
      style: Ke({}, a.rbgcpInputLabel)
    }, e));
  }, fC = function(A) {
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
    }, b = function(C) {
      var U = XA(C.target.value);
      if (f(C.target.value), U.isValid()) {
        var m = U.toRgb(), S = m.r, H = m.g, I = m.b, g = "rgba(".concat(S, ", ").concat(H, ", ").concat(I, ", ").concat(e, ")");
        n(g);
      }
    }, v = r ? "".concat(d).concat(dC(e)) : d, Q = r ? "HEXA" : "HEX", w = r ? 88 : 76;
    return k.createElement("div", {
      style: {
        width: w,
        flexShrink: 0
      },
      id: "rbgcp-hex-input-wrapper".concat(i)
    }, k.createElement("input", {
      onBlur: B,
      onFocus: p,
      onChange: function(C) {
        return b(C);
      },
      value: v == null ? void 0 : v.toUpperCase(),
      id: "rbgcp-hex-input".concat(i),
      style: Ke(Ke({}, o.rbgcpInput), o.rbgcpHexInput)
    }), k.createElement("div", {
      style: Ke({}, o.rbgcpInputLabel)
    }, Q));
  }, pC = function(A) {
    var e = A.hc, t = A.hideOpacity, r = A.handleChange, n = A.defaultStyles, o = A.pickerIdSuffix, i = function(a) {
      var s = a.r, l = a.g, c = a.b;
      r("rgba(".concat(s, ", ").concat(l, ", ").concat(c, ", ").concat(e == null ? void 0 : e.a, ")"));
    };
    return k.createElement(k.Fragment, null, k.createElement(Fe, {
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
    }), k.createElement(Fe, {
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
    }), k.createElement(Fe, {
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
  }, gC = function(A) {
    var e = A.hc, t = A.setHc, r = A.tinyColor, n = A.hideOpacity, o = A.handleChange, i = A.defaultStyles, a = A.pickerIdSuffix, s = r.toHsl(), l = s.s, c = s.l, u = function(f, p, B) {
      var b = XA({
        h: f,
        s: p,
        l: B
      }).toRgb(), v = b.r, Q = b.g, w = b.b;
      o("rgba(".concat(v, ", ").concat(Q, ", ").concat(w, ", ").concat(e == null ? void 0 : e.a, ")")), t(Ke(Ke({}, e), {
        h: f
      }));
    }, d = function(f) {
      var p = XA(f).toRgb(), B = p.r, b = p.g, v = p.b;
      o("rgba(".concat(B, ", ").concat(b, ", ").concat(v, ", ").concat(e == null ? void 0 : e.a, ")"));
    };
    return k.createElement(k.Fragment, null, k.createElement(Fe, {
      label: "H",
      max: 360,
      value: At(e == null ? void 0 : e.h),
      hideOpacity: n,
      defaultStyles: i,
      pickerIdSuffix: a,
      callback: function(f) {
        return u(f, l, c);
      }
    }), k.createElement(Fe, {
      label: "S",
      value: At(l * 100),
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
    }), k.createElement(Fe, {
      label: "L",
      value: At(c * 100),
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
  }, hC = function(A) {
    var e = A.hc, t = A.setHc, r = A.hideOpacity, n = A.handleChange, o = A.defaultStyles, i = A.pickerIdSuffix, a = function(l, c, u) {
      var d = XA({
        h: l,
        s: c,
        v: u
      }).toRgb(), f = d.r, p = d.g, B = d.b;
      n("rgba(".concat(f, ", ").concat(p, ", ").concat(B, ", ").concat(e == null ? void 0 : e.a, ")")), t(Ke(Ke({}, e), {
        h: l
      }));
    }, s = function(l) {
      var c = XA(l).toRgb(), u = c.r, d = c.g, f = c.b;
      n("rgba(".concat(u, ", ").concat(d, ", ").concat(f, ", ").concat(e == null ? void 0 : e.a, ")"));
    };
    return k.createElement(k.Fragment, null, k.createElement(Fe, {
      label: "H",
      max: 360,
      value: At(e == null ? void 0 : e.h),
      hideOpacity: r,
      defaultStyles: o,
      pickerIdSuffix: i,
      callback: function(l) {
        return a(l, e == null ? void 0 : e.s, e == null ? void 0 : e.v);
      }
    }), k.createElement(Fe, {
      label: "S",
      hideOpacity: r,
      value: At((e == null ? void 0 : e.s) * 100),
      defaultStyles: o,
      pickerIdSuffix: i,
      callback: function(l) {
        return s({
          h: e == null ? void 0 : e.h,
          s: l,
          v: e == null ? void 0 : e.v
        });
      }
    }), k.createElement(Fe, {
      label: "V",
      hideOpacity: r,
      value: At((e == null ? void 0 : e.v) * 100),
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
  }, BC = function(A) {
    var e = A.hc, t = A.hideOpacity, r = A.handleChange, n = A.defaultStyles, o = A.pickerIdSuffix, i = gf(e == null ? void 0 : e.r, e == null ? void 0 : e.g, e == null ? void 0 : e.b), a = i.c, s = i.m, l = i.y, c = i.k, u = function(d) {
      var f = uC(d), p = f.r, B = f.g, b = f.b;
      r("rgba(".concat(p, ", ").concat(B, ", ").concat(b, ", ").concat(e == null ? void 0 : e.a, ")"));
    };
    return k.createElement(k.Fragment, null, k.createElement(Fe, {
      label: "C",
      value: At(a * 100),
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
    }), k.createElement(Fe, {
      label: "M",
      value: At(s * 100),
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
    }), k.createElement(Fe, {
      label: "Y",
      value: At(l * 100),
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
    }), k.createElement(Fe, {
      label: "K",
      value: At(c * 100),
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
  }, mC = function() {
    var A = kA(), e = A.hc, t = A.setHc, r = A.inputType, n = A.tinyColor, o = A.hideOpacity, i = A.showHexAlpha, a = A.handleChange, s = A.defaultStyles, l = A.pickerIdSuffix;
    return k.createElement("div", {
      style: Ke({
        columnGap: 6,
        paddingTop: 14,
        display: "flex",
        justifyContent: "space-between"
      }, s.rbgcpInputsWrap),
      id: "rbgcp-inputs-wrap".concat(l)
    }, r !== "cmyk" && k.createElement(fC, {
      opacity: e == null ? void 0 : e.a,
      tinyColor: n,
      showHexAlpha: i,
      handleChange: a,
      defaultStyles: s,
      pickerIdSuffix: l
    }), r === "hsl" && k.createElement(gC, {
      hc: e,
      setHc: t,
      tinyColor: n,
      hideOpacity: o,
      handleChange: a,
      defaultStyles: s,
      pickerIdSuffix: l
    }), r === "rgb" && k.createElement(pC, {
      hc: e,
      hideOpacity: o,
      handleChange: a,
      defaultStyles: s,
      pickerIdSuffix: l
    }), r === "hsv" && k.createElement(hC, {
      hc: e,
      setHc: t,
      hideOpacity: o,
      handleChange: a,
      defaultStyles: s,
      pickerIdSuffix: l
    }), r === "cmyk" && k.createElement(BC, {
      hc: e,
      hideOpacity: o,
      handleChange: a,
      defaultStyles: s,
      pickerIdSuffix: l
    }), !o && k.createElement(Fe, {
      label: "A",
      hideOpacity: o,
      defaultStyles: s,
      value: Math.round((e == null ? void 0 : e.a) * 100),
      pickerIdSuffix: l,
      callback: function(c) {
        return a("rgba(".concat(e == null ? void 0 : e.r, ", ").concat(e == null ? void 0 : e.g, ", ").concat(e == null ? void 0 : e.b, ", ").concat(c / 100, ")"));
      }
    }));
  }, vC = function(A, e, t, r) {
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
  }, hf = "Expected a function", Kc = NaN, wC = "[object Symbol]", CC = /^\s+|\s+$/g, yC = /^[-+]0x[0-9a-f]+$/i, bC = /^0b[01]+$/i, QC = /^0o[0-7]+$/i, FC = parseInt, UC = typeof Rn == "object" && Rn && Rn.Object === Object && Rn, SC = typeof self == "object" && self && self.Object === Object && self, xC = UC || SC || Function("return this")(), EC = Object.prototype, IC = EC.toString, HC = Math.max, TC = Math.min, Ba = function() {
    return xC.Date.now();
  };
  function kC(A, e, t) {
    var r, n, o, i, a, s, l = 0, c = false, u = false, d = true;
    if (typeof A != "function") throw new TypeError(hf);
    e = Dc(e) || 0, $o(t) && (c = !!t.leading, u = "maxWait" in t, o = u ? HC(Dc(t.maxWait) || 0, e) : o, d = "trailing" in t ? !!t.trailing : d);
    function f(m) {
      var S = r, H = n;
      return r = n = void 0, l = m, i = A.apply(H, S), i;
    }
    function p(m) {
      return l = m, a = setTimeout(v, e), c ? f(m) : i;
    }
    function B(m) {
      var S = m - s, H = m - l, I = e - S;
      return u ? TC(I, o - H) : I;
    }
    function b(m) {
      var S = m - s, H = m - l;
      return s === void 0 || S >= e || S < 0 || u && H >= o;
    }
    function v() {
      var m = Ba();
      if (b(m)) return Q(m);
      a = setTimeout(v, B(m));
    }
    function Q(m) {
      return a = void 0, d && r ? f(m) : (r = n = void 0, i);
    }
    function w() {
      a !== void 0 && clearTimeout(a), l = 0, r = s = n = a = void 0;
    }
    function C() {
      return a === void 0 ? i : Q(Ba());
    }
    function U() {
      var m = Ba(), S = b(m);
      if (r = arguments, n = this, s = m, S) {
        if (a === void 0) return p(s);
        if (u) return a = setTimeout(v, e), f(s);
      }
      return a === void 0 && (a = setTimeout(v, e)), i;
    }
    return U.cancel = w, U.flush = C, U;
  }
  function LC(A, e, t) {
    var r = true, n = true;
    if (typeof A != "function") throw new TypeError(hf);
    return $o(t) && (r = "leading" in t ? !!t.leading : r, n = "trailing" in t ? !!t.trailing : n), kC(A, e, {
      leading: r,
      maxWait: e,
      trailing: n
    });
  }
  function $o(A) {
    var e = typeof A;
    return !!A && (e == "object" || e == "function");
  }
  function RC(A) {
    return !!A && typeof A == "object";
  }
  function OC(A) {
    return typeof A == "symbol" || RC(A) && IC.call(A) == wC;
  }
  function Dc(A) {
    if (typeof A == "number") return A;
    if (OC(A)) return Kc;
    if ($o(A)) {
      var e = typeof A.valueOf == "function" ? A.valueOf() : A;
      A = $o(e) ? e + "" : e;
    }
    if (typeof A != "string") return A === 0 ? A : +A;
    A = A.replace(CC, "");
    var t = bC.test(A);
    return t || QC.test(A) ? FC(A.slice(2), t ? 2 : 8) : yC.test(A) ? Kc : +A;
  }
  var MC = LC;
  const KC = Ks(MC);
  var Gt = function() {
    return Gt = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, Gt.apply(this, arguments);
  }, DC = function() {
    var A, e, t = kA(), r = t.hc, n = t.config, o = t.squareWidth, i = t.squareHeight, a = t.handleChange, s = t.defaultStyles, l = t.pickerIdSuffix, c = n.crossSize, u = h.useState(false), d = u[0], f = u[1], p = h.useRef(null), B = qw(r == null ? void 0 : r.s, (r == null ? void 0 : r.v) * 100, o, i, c), b = B[0], v = B[1], Q = h.useState({
      x: b,
      y: v
    }), w = Q[0], C = Q[1];
    vC(p, r == null ? void 0 : r.h, o, i), h.useEffect(function() {
      d || C({
        x: (r == null ? void 0 : r.v) === 0 ? w.x : b,
        y: v
      });
    }, [
      b,
      v
    ]);
    var U = function(T) {
      var R = KC(function() {
        var L = eC(T, c), K = L[0], M = L[1];
        if (K && M) {
          var O = Math.min(K + c / 2, o - 1), Y = Math.min(M + c / 2, i - 1), N = O / o * 100, P = 100 - Y / i * 100;
          C({
            x: P === 0 ? w == null ? void 0 : w.x : K,
            y: M
          });
          var AA = XA("hsva(".concat(r == null ? void 0 : r.h, ", ").concat(N, "%, ").concat(P, "%, ").concat(r == null ? void 0 : r.a, ")"));
          a(AA.toRgbString());
        }
      }, 250);
      R();
    }, m = function() {
      f(false);
    }, S = function(T) {
      d && U(T);
    }, H = function(T) {
      d || U(T);
    }, I = function() {
      f(true);
    }, g = function(T) {
      f(true), U(T);
    };
    return h.useEffect(function() {
      var T = function() {
        m();
      };
      return window.addEventListener("mouseup", T), function() {
        window.removeEventListener("mouseup", T);
      };
    }, []), k.createElement("div", {
      style: {
        position: "relative",
        marginBottom: 12
      },
      id: "rbgcp-square-wrapper".concat(l)
    }, k.createElement("div", {
      onMouseUp: m,
      onTouchEnd: m,
      onMouseDown: g,
      onTouchStart: g,
      onMouseMove: function(T) {
        return S(T);
      },
      id: "rbgcp-square".concat(l),
      style: {
        position: "relative",
        cursor: "ew-cross"
      }
    }, k.createElement("div", {
      style: Gt(Gt(Gt({}, s.rbgcpHandle), {
        transform: "translate(".concat((A = w == null ? void 0 : w.x) !== null && A !== void 0 ? A : 0, "px, ").concat((e = w == null ? void 0 : w.y) !== null && e !== void 0 ? e : 0, "px)")
      }), d ? {
        transition: ""
      } : {}),
      onMouseDown: I,
      id: "rbgcp-square-handle".concat(l)
    }), k.createElement("div", {
      style: Gt(Gt({}, s.rbgcpCanvasWrapper), {
        height: i
      }),
      id: "rbgcp-square-canvas-wrapper".concat(l),
      onClick: function(T) {
        return H(T);
      }
    }, k.createElement("canvas", {
      ref: p,
      width: "".concat(o, "px"),
      height: "".concat(i, "px"),
      id: "rbgcp-square-canvas".concat(l)
    }))));
  }, Ft = function() {
    return Ft = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, Ft.apply(this, arguments);
  }, PC = function() {
    var A = kA(), e = A.config, t = A.hc, r = t === void 0 ? {} : t, n = A.squareWidth, o = A.handleChange, i = A.defaultStyles, a = A.pickerIdSuffix, s = h.useState(false), l = s[0], c = s[1], u = r.r, d = r.g, f = r.b, p = "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(".concat(u, ",").concat(d, ",").concat(f, ",.5) 100%)"), B = e.barSize, b = function() {
      c(false);
    }, v = function() {
      c(true);
    }, Q = function(m) {
      var S = Ur(m, B) / 100, H = "rgba(".concat(u, ", ").concat(d, ", ").concat(f, ", ").concat(S, ")");
      o(H);
    }, w = function(m) {
      l && Q(m);
    }, C = function(m) {
      l || Q(m);
    }, U = n - 18;
    return h.useEffect(function() {
      var m = function() {
        b();
      };
      return window.addEventListener("mouseup", m), function() {
        window.removeEventListener("mouseup", m);
      };
    }, []), k.createElement("div", {
      onMouseDown: v,
      onMouseMove: function(m) {
        return w(m);
      },
      style: {
        height: 14,
        marginTop: 17,
        marginBottom: 4,
        cursor: "ew-resize",
        position: "relative"
      },
      id: "rbgcp-opacity-wrapper".concat(a)
    }, k.createElement("div", {
      id: "rbgcp-opacity-checkered-bg".concat(a),
      style: Ft(Ft({}, i.rbgcpCheckered), {
        width: "100%",
        height: 14
      })
    }), k.createElement("div", {
      id: "rbgcp-opacity-handle".concat(a),
      style: Ft(Ft({}, i.rbgcpHandle), {
        left: U * (r == null ? void 0 : r.a),
        top: -2
      })
    }), k.createElement("div", {
      style: Ft(Ft({}, i.rbgcpOpacityOverlay), {
        background: p
      }),
      id: "rbgcp-opacity-overlay".concat(a),
      onClick: function(m) {
        return C(m);
      }
    }));
  }, _C = {
    CONTROLS: {
      SOLID: "Solid",
      GRADIENT: "Gradient"
    }
  }, NC = [
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
  ], GC = function(A) {
    var e = A.presets, t = e === void 0 ? [] : e, r = kA(), n = r.value, o = r.onChange, i = r.isDarkMode, a = r.squareWidth, s = r.handleChange, l = r.pickerIdSuffix, c = function() {
      return (t == null ? void 0 : t.length) > 0 ? t == null ? void 0 : t.slice(0, 18) : NC;
    }, u = function(f) {
      (f == null ? void 0 : f.includes("gradient")) ? o(f) : s(f);
    }, d = function(f) {
      if (!f || i) return "";
      var p = f == null ? void 0 : f.replace(" ", "");
      return p === "rgba(255,255,255,1)" ? "1px solid #96959c" : "";
    };
    return k.createElement("div", {
      style: {
        marginTop: 14,
        display: "flex",
        justifyContent: "space-between"
      },
      id: "rbgcp-footer-wrapper".concat(l)
    }, k.createElement("div", {
      style: {
        width: 50,
        height: 50,
        flexShrink: 0,
        borderRadius: 6,
        background: n,
        border: d(n)
      },
      id: "rbgcp-preview".concat(l)
    }), k.createElement("div", {
      style: {
        rowGap: 3,
        display: "flex",
        flexWrap: "wrap",
        width: a - 57,
        justifyContent: "space-between"
      },
      id: "rbgcp-presets-wrapper".concat(l)
    }, c().map(function(f, p) {
      return k.createElement("div", {
        key: "".concat(f, "-").concat(p),
        id: "rbgcp-preset-".concat(p, "-wrapper").concat(l),
        style: {
          width: "calc(100% / 9)",
          paddingLeft: 3
        }
      }, k.createElement("div", {
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
  }, cA = function() {
    return cA = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, cA.apply(this, arguments);
  }, VC = function() {
    var A = kA().defaultStyles, e = {
      fill: "none",
      strokeWidth: "1.8px"
    };
    return k.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 15
      }
    }, k.createElement("polyline", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: cA(cA({}, e), A.rbgcpControlIcon),
      points: "17.96 4.31 2.04 4.3 3.75 4.3 4.81 17.29 5.16 17.96 5.74 18.47 6.59 18.62 13.64 18.62 14.52 18.32 15.07 17.68 15.29 17.12 16.28 4.3 12.87 4.3 12.87 2.38 12.48 1.75 11.83 1.46 8.4 1.46 7.64 1.68 7.26 2.21 7.16 2.52 7.17 4.23"
    }));
  }, $C = function(A) {
    var e = A.color, t = kA().defaultStyles, r = e ?? "", n = {
      fill: "none",
      strokeWidth: "1.8px"
    };
    return k.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 14
      }
    }, k.createElement("polyline", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: cA(cA(cA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "0.9 12.73 0.9 19.1 7.27 19.1 0.9 19.1 19.1 0.9 12.73 0.9 19.1 0.9 19.1 7.27"
    }));
  }, WC = function(A) {
    var e = A.color, t = kA().defaultStyles, r = e ?? "", n = {
      fill: "none",
      strokeMiterlimit: 10,
      strokeWidth: "1.8px"
    };
    return k.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 15
      }
    }, k.createElement("circle", {
      style: cA(cA(cA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      cx: "10",
      cy: "10",
      r: "9"
    }), k.createElement("circle", {
      style: cA(cA(cA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      cx: "10",
      cy: "10",
      r: "5"
    }));
  }, jC = function(A) {
    var e = A.color, t = kA().defaultStyles, r = e ?? "", n = {
      fill: "none",
      strokeWidth: "1.8px"
    }, o = {
      strokeWidth: "1.8px"
    };
    return k.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 17
      }
    }, k.createElement("polyline", {
      fillRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: cA(cA(cA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "3.74 2.75 3.74 12.69 0.9 12.71 6.59 12.71"
    }), k.createElement("line", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: cA(cA(cA({}, o), t.rbgcpControlIcon), r && {
        stroke: r,
        fill: r
      }),
      x1: "3.74",
      y1: "17.26",
      x2: "3.74",
      y2: "15.21"
    }), k.createElement("polyline", {
      fillRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: cA(cA(cA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "10.1 17.25 10.1 7.31 12.95 7.29 7.26 7.29"
    }), k.createElement("line", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: cA(cA(cA({}, o), t.rbgcpControlIcon), r && {
        stroke: r,
        fill: r
      }),
      x1: "10.1",
      y1: "2.74",
      x2: "10.1",
      y2: "4.79"
    }), k.createElement("polyline", {
      fillRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: cA(cA(cA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "16.26 2.75 16.26 12.69 13.41 12.71 19.1 12.71"
    }), k.createElement("line", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: cA(cA(cA({}, o), t.rbgcpControlIcon), r && {
        stroke: r,
        fill: r
      }),
      x1: "16.26",
      y1: "17.26",
      x2: "16.26",
      y2: "15.21"
    }));
  }, zC = function(A) {
    var e = A.color, t = kA().defaultStyles, r = e ?? "", n = {
      fill: "none",
      strokeWidth: "1.8px"
    };
    return k.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 17
      }
    }, k.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: cA(cA(cA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      d: "M6.35,2.72a4.85,4.85,0,0,1,1.86.16,7.94,7.94,0,0,1,.88.43,3.66,3.66,0,0,0,.85.49c.25,0,.58-.27.81-.39A8.25,8.25,0,0,1,11.7,3a4,4,0,0,1,1.79-.23,3.21,3.21,0,0,0-1.34.09,6.39,6.39,0,0,0-1.47.63c-.45.25-.7.3-.7.86s0,1.18,0,1.78c0,1.3,0,2.61,0,3.92h0v5.63a2.46,2.46,0,0,1,0,.47c-.07.28-.43.42-.7.57a5.29,5.29,0,0,1-2.94.61A9.3,9.3,0,0,0,8,17.15l1.09-.37.89-.52c.06,0,.48.21.56.25.32.14.64.27,1,.38a8.54,8.54,0,0,0,2.12.4"
    }), k.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: cA(cA(cA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      d: "M7.57,5.73C6,5.7,4.5,5.65,3,5.77a2.28,2.28,0,0,0-1.76.74A2.3,2.3,0,0,0,.94,7.83l0,3.82A4.73,4.73,0,0,0,1,12.9a1.64,1.64,0,0,0,.68,1,2.44,2.44,0,0,0,1,.27,25,25,0,0,0,4.74.09"
    }), k.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: cA(cA(cA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      d: "M12.43,14.32a44.12,44.12,0,0,0,4.6,0,2.24,2.24,0,0,0,1.76-.74,2.29,2.29,0,0,0,.27-1.32l0-3.81A4.81,4.81,0,0,0,19,7.15a1.62,1.62,0,0,0-.68-1,2.31,2.31,0,0,0-1-.28,26.8,26.8,0,0,0-4.74-.09"
    }));
  }, XC = function(A) {
    var e = A.color, t = kA().defaultStyles, r = e ?? "", n = {
      strokeMiterlimit: 10,
      strokeWidth: "0.5px"
    };
    return k.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 17
      }
    }, k.createElement("circle", {
      style: cA(cA({}, t.rbgcpControlIcon2), r && {
        fill: r
      }),
      cx: "9.36",
      cy: "5.07",
      r: "1.71"
    }), k.createElement("circle", {
      style: cA(cA({}, t.rbgcpControlIcon2), r && {
        fill: r
      }),
      cx: "13.93",
      cy: "6.91",
      r: "1.71"
    }), k.createElement("circle", {
      style: cA(cA({}, t.rbgcpControlIcon2), r && {
        fill: r
      }),
      cx: "5.8",
      cy: "7.55",
      r: "1.71"
    }), k.createElement("circle", {
      style: cA(cA({}, t.rbgcpControlIcon2), r && {
        fill: r
      }),
      cx: "5.45",
      cy: "12.04",
      r: "1.71"
    }), k.createElement("path", {
      style: cA(cA(cA(cA({}, n), t.rbgcpControlIcon), t.rbgcpControlIcon2), r && {
        fill: r,
        stroke: r
      }),
      d: "M19.1,10c0,3.58-2.12,2.94-4.06,2.35-1.15-.34-2.24-.67-2.77-.08-.68.78-.54,2.07-.39,3.33.2,1.79.39,3.5-1.88,3.5A9.1,9.1,0,1,1,19.1,10ZM10,18c.7,0,.74-.19.75-.2a2.67,2.67,0,0,0,.07-1.27c0-.19,0-.42-.06-.67-.06-.53-.13-1.15-.14-1.67a3.82,3.82,0,0,1,.8-2.63,2.14,2.14,0,0,1,1.45-.7,4.36,4.36,0,0,1,1.32.12c.39.08.8.21,1.16.32h0c.39.12.74.23,1.08.3.74.17,1,.1,1.13,0S18,11.32,18,10a8,8,0,1,0-8,8Z"
    }));
  }, YC = function(A) {
    var e = A.color, t = kA().defaultStyles, r = e ?? "", n = {
      fill: "none",
      strokeMiterlimit: 10,
      strokeWidth: "1.8px"
    };
    return k.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 15
      }
    }, k.createElement("polyline", {
      strokeLinecap: "round",
      style: cA(cA(cA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "13.86 2.01 1.7 16.99 18.77 16.99"
    }), k.createElement("polyline", {
      strokeLinecap: "round",
      style: cA(cA(cA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "10.96 16.38 10.96 16.38 10.74 15.7 10.44 14.97 10.06 14.21 9.72 13.63 9.21 12.89 8.85 12.44 8.41 11.95 7.91 11.45 7.51 11.1"
    }));
  }, JC = function() {
    var A = kA().defaultStyles;
    return k.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 20,
        marginRight: 1
      }
    }, k.createElement("path", {
      style: cA({}, A.rbgcpControlIcon2),
      d: "M2.39,8c-.63,0-1,.21-1,.63A.49.49,0,0,0,1.67,9a6.48,6.48,0,0,0,1.11.43A3,3,0,0,1,4,10.09a1.47,1.47,0,0,1,.35,1.09,1.75,1.75,0,0,1-.57,1.42,2.21,2.21,0,0,1-1.48.48,8.32,8.32,0,0,1-1.68-.21l-.31-.06.12-.94a13.7,13.7,0,0,0,1.8.16c.61,0,.92-.26.92-.77a.52.52,0,0,0-.21-.44,3.13,3.13,0,0,0-.85-.34A3.32,3.32,0,0,1,.66,9.79a1.43,1.43,0,0,1-.42-1.1A1.6,1.6,0,0,1,.78,7.36a2.32,2.32,0,0,1,1.49-.44,10.46,10.46,0,0,1,1.64.17l.32.07-.1.95C3.31,8,2.73,8,2.39,8Z"
    }), k.createElement("path", {
      style: cA({}, A.rbgcpControlIcon2),
      d: "M4.79,8.09V7H9.16V8.09H7.59V13H6.38V8.09Z"
    }), k.createElement("path", {
      style: cA({}, A.rbgcpControlIcon2),
      d: "M14,12.34a2.25,2.25,0,0,1-1.91.74,2.24,2.24,0,0,1-1.91-.74A3.85,3.85,0,0,1,9.61,10a4,4,0,0,1,.56-2.34,2.2,2.2,0,0,1,1.91-.77A2.21,2.21,0,0,1,14,7.69,4,4,0,0,1,14.55,10,3.85,3.85,0,0,1,14,12.34Zm-2.88-.77a1,1,0,0,0,1,.46,1,1,0,0,0,1-.46A3.25,3.25,0,0,0,13.3,10,3.45,3.45,0,0,0,13,8.46a1,1,0,0,0-1-.49,1,1,0,0,0-1,.49A3.43,3.43,0,0,0,10.85,10,3.38,3.38,0,0,0,11.11,11.57Z"
    }), k.createElement("path", {
      style: cA({}, A.rbgcpControlIcon2),
      d: "M17.77,11.24h-1V13H15.58V7h2.19a1.85,1.85,0,0,1,2.11,2.07,2.21,2.21,0,0,1-.54,1.6A2.07,2.07,0,0,1,17.77,11.24Zm-1-1h1c.6,0,.9-.37.9-1.12a1.18,1.18,0,0,0-.22-.79.88.88,0,0,0-.68-.24h-1Z"
    }));
  }, ZC = function(A) {
    var e, t = A.children, r = "id" + Math.random().toString(16).slice(2), n = h.useRef((e = document.getElementById(r)) !== null && e !== void 0 ? e : document.createElement("div")), o = h.useState(!n.current.parentElement)[0];
    return h.useEffect(function() {
      var i = n.current;
      return o && (n.current.id = r, document.body.appendChild(n.current)), function() {
        o && i.parentElement && i.parentElement.removeChild(i);
      };
    }, [
      r
    ]), pl.createPortal(t, n.current);
  };
  const qC = h.memo(ZC);
  var us = function(A, e) {
    return us = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(t, r) {
      t.__proto__ = r;
    } || function(t, r) {
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }, us(A, e);
  };
  function Ge(A, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
    us(A, e);
    function t() {
      this.constructor = A;
    }
    A.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
  }
  var ds = function() {
    return ds = Object.assign || function(e) {
      for (var t, r = 1, n = arguments.length; r < n; r++) {
        t = arguments[r];
        for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
      }
      return e;
    }, ds.apply(this, arguments);
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
  function Xn(A, e, t) {
    if (arguments.length === 2) for (var r = 0, n = e.length, o; r < n; r++) (o || !(r in e)) && (o || (o = Array.prototype.slice.call(e, 0, r)), o[r] = e[r]);
    return A.concat(o || e);
  }
  var wt = (function() {
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
  })(), Wi = function(A, e) {
    return wt.fromClientRect(A, e.getBoundingClientRect());
  }, Ay = function(A) {
    var e = A.body, t = A.documentElement;
    if (!e || !t) throw new Error("Unable to get document size");
    var r = Math.max(Math.max(e.scrollWidth, t.scrollWidth), Math.max(e.offsetWidth, t.offsetWidth), Math.max(e.clientWidth, t.clientWidth)), n = Math.max(Math.max(e.scrollHeight, t.scrollHeight), Math.max(e.offsetHeight, t.offsetHeight), Math.max(e.clientHeight, t.clientHeight));
    return new wt(0, 0, r, n);
  }, ji = function(A) {
    for (var e = [], t = 0, r = A.length; t < r; ) {
      var n = A.charCodeAt(t++);
      if (n >= 55296 && n <= 56319 && t < r) {
        var o = A.charCodeAt(t++);
        (o & 64512) === 56320 ? e.push(((n & 1023) << 10) + (o & 1023) + 65536) : (e.push(n), t--);
      } else e.push(n);
    }
    return e;
  }, JA = function() {
    for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
    if (String.fromCodePoint) return String.fromCodePoint.apply(String, A);
    var t = A.length;
    if (!t) return "";
    for (var r = [], n = -1, o = ""; ++n < t; ) {
      var i = A[n];
      i <= 65535 ? r.push(i) : (i -= 65536, r.push((i >> 10) + 55296, i % 1024 + 56320)), (n + 1 === t || r.length > 16384) && (o += String.fromCharCode.apply(String, r), r.length = 0);
    }
    return o;
  }, Pc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ey = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (var Yn = 0; Yn < Pc.length; Yn++) ey[Pc.charCodeAt(Yn)] = Yn;
  var _c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Wr = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (var Jn = 0; Jn < _c.length; Jn++) Wr[_c.charCodeAt(Jn)] = Jn;
  var ty = function(A) {
    var e = A.length * 0.75, t = A.length, r, n = 0, o, i, a, s;
    A[A.length - 1] === "=" && (e--, A[A.length - 2] === "=" && e--);
    var l = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(e) : new Array(e), c = Array.isArray(l) ? l : new Uint8Array(l);
    for (r = 0; r < t; r += 4) o = Wr[A.charCodeAt(r)], i = Wr[A.charCodeAt(r + 1)], a = Wr[A.charCodeAt(r + 2)], s = Wr[A.charCodeAt(r + 3)], c[n++] = o << 2 | i >> 4, c[n++] = (i & 15) << 4 | a >> 2, c[n++] = (a & 3) << 6 | s & 63;
    return l;
  }, ry = function(A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 2) t.push(A[r + 1] << 8 | A[r]);
    return t;
  }, ny = function(A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 4) t.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]);
    return t;
  }, Yt = 5, Fl = 11, ma = 2, oy = Fl - Yt, Bf = 65536 >> Yt, iy = 1 << Yt, va = iy - 1, ay = 1024 >> Yt, sy = Bf + ay, ly = sy, cy = 32, uy = ly + cy, dy = 65536 >> Fl, fy = 1 << oy, py = fy - 1, Nc = function(A, e, t) {
    return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t));
  }, gy = function(A, e, t) {
    return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t));
  }, hy = function(A, e) {
    var t = ty(A), r = Array.isArray(t) ? ny(t) : new Uint32Array(t), n = Array.isArray(t) ? ry(t) : new Uint16Array(t), o = 24, i = Nc(n, o / 2, r[4] / 2), a = r[5] === 2 ? Nc(n, (o + r[4]) / 2) : gy(r, Math.ceil((o + r[4]) / 4));
    return new By(r[0], r[1], r[2], r[3], i, a);
  }, By = (function() {
    function A(e, t, r, n, o, i) {
      this.initialValue = e, this.errorValue = t, this.highStart = r, this.highValueIndex = n, this.index = o, this.data = i;
    }
    return A.prototype.get = function(e) {
      var t;
      if (e >= 0) {
        if (e < 55296 || e > 56319 && e <= 65535) return t = this.index[e >> Yt], t = (t << ma) + (e & va), this.data[t];
        if (e <= 65535) return t = this.index[Bf + (e - 55296 >> Yt)], t = (t << ma) + (e & va), this.data[t];
        if (e < this.highStart) return t = uy - dy + (e >> Fl), t = this.index[t], t += e >> Yt & py, t = this.index[t], t = (t << ma) + (e & va), this.data[t];
        if (e <= 1114111) return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, A;
  })(), Gc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", my = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (var Zn = 0; Zn < Gc.length; Zn++) my[Gc.charCodeAt(Zn)] = Zn;
  var vy = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", Vc = 50, wy = 1, mf = 2, vf = 3, Cy = 4, yy = 5, $c = 7, wf = 8, Wc = 9, xt = 10, fs = 11, jc = 12, ps = 13, by = 14, jr = 15, gs = 16, qn = 17, Kr = 18, Qy = 19, zc = 20, hs = 21, Dr = 22, wa = 23, ir = 24, Se = 25, zr = 26, Xr = 27, ar = 28, Fy = 29, Vt = 30, Uy = 31, Ao = 32, eo = 33, Bs = 34, ms = 35, vs = 36, Bn = 37, ws = 38, xo = 39, Eo = 40, Ca = 41, Cf = 42, Sy = 43, xy = [
    9001,
    65288
  ], yf = "!", FA = "\xD7", to = "\xF7", Cs = hy(vy), ft = [
    Vt,
    vs
  ], ys = [
    wy,
    mf,
    vf,
    yy
  ], bf = [
    xt,
    wf
  ], Xc = [
    Xr,
    zr
  ], Ey = ys.concat(bf), Yc = [
    ws,
    xo,
    Eo,
    Bs,
    ms
  ], Iy = [
    jr,
    ps
  ], Hy = function(A, e) {
    e === void 0 && (e = "strict");
    var t = [], r = [], n = [];
    return A.forEach(function(o, i) {
      var a = Cs.get(o);
      if (a > Vc ? (n.push(true), a -= Vc) : n.push(false), [
        "normal",
        "auto",
        "loose"
      ].indexOf(e) !== -1 && [
        8208,
        8211,
        12316,
        12448
      ].indexOf(o) !== -1) return r.push(i), t.push(gs);
      if (a === Cy || a === fs) {
        if (i === 0) return r.push(i), t.push(Vt);
        var s = t[i - 1];
        return Ey.indexOf(s) === -1 ? (r.push(r[i - 1]), t.push(s)) : (r.push(i), t.push(Vt));
      }
      if (r.push(i), a === Uy) return t.push(e === "strict" ? hs : Bn);
      if (a === Cf || a === Fy) return t.push(Vt);
      if (a === Sy) return o >= 131072 && o <= 196605 || o >= 196608 && o <= 262141 ? t.push(Bn) : t.push(Vt);
      t.push(a);
    }), [
      r,
      t,
      n
    ];
  }, ya = function(A, e, t, r) {
    var n = r[t];
    if (Array.isArray(A) ? A.indexOf(n) !== -1 : A === n) for (var o = t; o <= r.length; ) {
      o++;
      var i = r[o];
      if (i === e) return true;
      if (i !== xt) break;
    }
    if (n === xt) for (var o = t; o > 0; ) {
      o--;
      var a = r[o];
      if (Array.isArray(A) ? A.indexOf(a) !== -1 : A === a) for (var s = t; s <= r.length; ) {
        s++;
        var i = r[s];
        if (i === e) return true;
        if (i !== xt) break;
      }
      if (a !== xt) break;
    }
    return false;
  }, Jc = function(A, e) {
    for (var t = A; t >= 0; ) {
      var r = e[t];
      if (r === xt) t--;
      else return r;
    }
    return 0;
  }, Ty = function(A, e, t, r, n) {
    if (t[r] === 0) return FA;
    var o = r - 1;
    if (Array.isArray(n) && n[o] === true) return FA;
    var i = o - 1, a = o + 1, s = e[o], l = i >= 0 ? e[i] : 0, c = e[a];
    if (s === mf && c === vf) return FA;
    if (ys.indexOf(s) !== -1) return yf;
    if (ys.indexOf(c) !== -1 || bf.indexOf(c) !== -1) return FA;
    if (Jc(o, e) === wf) return to;
    if (Cs.get(A[o]) === fs || (s === Ao || s === eo) && Cs.get(A[a]) === fs || s === $c || c === $c || s === Wc || [
      xt,
      ps,
      jr
    ].indexOf(s) === -1 && c === Wc || [
      qn,
      Kr,
      Qy,
      ir,
      ar
    ].indexOf(c) !== -1 || Jc(o, e) === Dr || ya(wa, Dr, o, e) || ya([
      qn,
      Kr
    ], hs, o, e) || ya(jc, jc, o, e)) return FA;
    if (s === xt) return to;
    if (s === wa || c === wa) return FA;
    if (c === gs || s === gs) return to;
    if ([
      ps,
      jr,
      hs
    ].indexOf(c) !== -1 || s === by || l === vs && Iy.indexOf(s) !== -1 || s === ar && c === vs || c === zc || ft.indexOf(c) !== -1 && s === Se || ft.indexOf(s) !== -1 && c === Se || s === Xr && [
      Bn,
      Ao,
      eo
    ].indexOf(c) !== -1 || [
      Bn,
      Ao,
      eo
    ].indexOf(s) !== -1 && c === zr || ft.indexOf(s) !== -1 && Xc.indexOf(c) !== -1 || Xc.indexOf(s) !== -1 && ft.indexOf(c) !== -1 || [
      Xr,
      zr
    ].indexOf(s) !== -1 && (c === Se || [
      Dr,
      jr
    ].indexOf(c) !== -1 && e[a + 1] === Se) || [
      Dr,
      jr
    ].indexOf(s) !== -1 && c === Se || s === Se && [
      Se,
      ar,
      ir
    ].indexOf(c) !== -1) return FA;
    if ([
      Se,
      ar,
      ir,
      qn,
      Kr
    ].indexOf(c) !== -1) for (var u = o; u >= 0; ) {
      var d = e[u];
      if (d === Se) return FA;
      if ([
        ar,
        ir
      ].indexOf(d) !== -1) u--;
      else break;
    }
    if ([
      Xr,
      zr
    ].indexOf(c) !== -1) for (var u = [
      qn,
      Kr
    ].indexOf(s) !== -1 ? i : o; u >= 0; ) {
      var d = e[u];
      if (d === Se) return FA;
      if ([
        ar,
        ir
      ].indexOf(d) !== -1) u--;
      else break;
    }
    if (ws === s && [
      ws,
      xo,
      Bs,
      ms
    ].indexOf(c) !== -1 || [
      xo,
      Bs
    ].indexOf(s) !== -1 && [
      xo,
      Eo
    ].indexOf(c) !== -1 || [
      Eo,
      ms
    ].indexOf(s) !== -1 && c === Eo || Yc.indexOf(s) !== -1 && [
      zc,
      zr
    ].indexOf(c) !== -1 || Yc.indexOf(c) !== -1 && s === Xr || ft.indexOf(s) !== -1 && ft.indexOf(c) !== -1 || s === ir && ft.indexOf(c) !== -1 || ft.concat(Se).indexOf(s) !== -1 && c === Dr && xy.indexOf(A[a]) === -1 || ft.concat(Se).indexOf(c) !== -1 && s === Kr) return FA;
    if (s === Ca && c === Ca) {
      for (var f = t[o], p = 1; f > 0 && (f--, e[f] === Ca); ) p++;
      if (p % 2 !== 0) return FA;
    }
    return s === Ao && c === eo ? FA : to;
  }, ky = function(A, e) {
    e || (e = {
      lineBreak: "normal",
      wordBreak: "normal"
    });
    var t = Hy(A, e.lineBreak), r = t[0], n = t[1], o = t[2];
    (e.wordBreak === "break-all" || e.wordBreak === "break-word") && (n = n.map(function(a) {
      return [
        Se,
        Vt,
        Cf
      ].indexOf(a) !== -1 ? Bn : a;
    }));
    var i = e.wordBreak === "keep-all" ? o.map(function(a, s) {
      return a && A[s] >= 19968 && A[s] <= 40959;
    }) : void 0;
    return [
      r,
      n,
      i
    ];
  }, Ly = (function() {
    function A(e, t, r, n) {
      this.codePoints = e, this.required = t === yf, this.start = r, this.end = n;
    }
    return A.prototype.slice = function() {
      return JA.apply(void 0, this.codePoints.slice(this.start, this.end));
    }, A;
  })(), Ry = function(A, e) {
    var t = ji(A), r = ky(t, e), n = r[0], o = r[1], i = r[2], a = t.length, s = 0, l = 0;
    return {
      next: function() {
        if (l >= a) return {
          done: true,
          value: null
        };
        for (var c = FA; l < a && (c = Ty(t, o, n, ++l, i)) === FA; ) ;
        if (c !== FA || l === a) {
          var u = new Ly(t, c, s, l);
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
  }, Oy = 1, My = 2, In = 4, Zc = 8, Wo = 10, qc = 47, nn = 92, Ky = 9, Dy = 32, ro = 34, Pr = 61, Py = 35, _y = 36, Ny = 37, no = 39, oo = 40, _r = 41, Gy = 95, Qe = 45, Vy = 33, $y = 60, Wy = 62, jy = 64, zy = 91, Xy = 93, Yy = 61, Jy = 123, io = 63, Zy = 125, Au = 124, qy = 126, Ab = 128, eu = 65533, ba = 42, zt = 43, eb = 44, tb = 58, rb = 59, mn = 46, nb = 0, ob = 8, ib = 11, ab = 14, sb = 31, lb = 127, je = -1, Qf = 48, Ff = 97, Uf = 101, cb = 102, ub = 117, db = 122, Sf = 65, xf = 69, Ef = 70, fb = 85, pb = 90, Be = function(A) {
    return A >= Qf && A <= 57;
  }, gb = function(A) {
    return A >= 55296 && A <= 57343;
  }, sr = function(A) {
    return Be(A) || A >= Sf && A <= Ef || A >= Ff && A <= cb;
  }, hb = function(A) {
    return A >= Ff && A <= db;
  }, Bb = function(A) {
    return A >= Sf && A <= pb;
  }, mb = function(A) {
    return hb(A) || Bb(A);
  }, vb = function(A) {
    return A >= Ab;
  }, ao = function(A) {
    return A === Wo || A === Ky || A === Dy;
  }, jo = function(A) {
    return mb(A) || vb(A) || A === Gy;
  }, tu = function(A) {
    return jo(A) || Be(A) || A === Qe;
  }, wb = function(A) {
    return A >= nb && A <= ob || A === ib || A >= ab && A <= sb || A === lb;
  }, Ut = function(A, e) {
    return A !== nn ? false : e !== Wo;
  }, so = function(A, e, t) {
    return A === Qe ? jo(e) || Ut(e, t) : jo(A) ? true : !!(A === nn && Ut(A, e));
  }, Qa = function(A, e, t) {
    return A === zt || A === Qe ? Be(e) ? true : e === mn && Be(t) : Be(A === mn ? e : A);
  }, Cb = function(A) {
    var e = 0, t = 1;
    (A[e] === zt || A[e] === Qe) && (A[e] === Qe && (t = -1), e++);
    for (var r = []; Be(A[e]); ) r.push(A[e++]);
    var n = r.length ? parseInt(JA.apply(void 0, r), 10) : 0;
    A[e] === mn && e++;
    for (var o = []; Be(A[e]); ) o.push(A[e++]);
    var i = o.length, a = i ? parseInt(JA.apply(void 0, o), 10) : 0;
    (A[e] === xf || A[e] === Uf) && e++;
    var s = 1;
    (A[e] === zt || A[e] === Qe) && (A[e] === Qe && (s = -1), e++);
    for (var l = []; Be(A[e]); ) l.push(A[e++]);
    var c = l.length ? parseInt(JA.apply(void 0, l), 10) : 0;
    return t * (n + a * Math.pow(10, -i)) * Math.pow(10, s * c);
  }, yb = {
    type: 2
  }, bb = {
    type: 3
  }, Qb = {
    type: 4
  }, Fb = {
    type: 13
  }, Ub = {
    type: 8
  }, Sb = {
    type: 21
  }, xb = {
    type: 9
  }, Eb = {
    type: 10
  }, Ib = {
    type: 11
  }, Hb = {
    type: 12
  }, Tb = {
    type: 14
  }, lo = {
    type: 23
  }, kb = {
    type: 1
  }, Lb = {
    type: 25
  }, Rb = {
    type: 24
  }, Ob = {
    type: 26
  }, Mb = {
    type: 27
  }, Kb = {
    type: 28
  }, Db = {
    type: 29
  }, Pb = {
    type: 31
  }, bs = {
    type: 32
  }, If = (function() {
    function A() {
      this._value = [];
    }
    return A.prototype.write = function(e) {
      this._value = this._value.concat(ji(e));
    }, A.prototype.read = function() {
      for (var e = [], t = this.consumeToken(); t !== bs; ) e.push(t), t = this.consumeToken();
      return e;
    }, A.prototype.consumeToken = function() {
      var e = this.consumeCodePoint();
      switch (e) {
        case ro:
          return this.consumeStringToken(ro);
        case Py:
          var t = this.peekCodePoint(0), r = this.peekCodePoint(1), n = this.peekCodePoint(2);
          if (tu(t) || Ut(r, n)) {
            var o = so(t, r, n) ? My : Oy, i = this.consumeName();
            return {
              type: 5,
              value: i,
              flags: o
            };
          }
          break;
        case _y:
          if (this.peekCodePoint(0) === Pr) return this.consumeCodePoint(), Fb;
          break;
        case no:
          return this.consumeStringToken(no);
        case oo:
          return yb;
        case _r:
          return bb;
        case ba:
          if (this.peekCodePoint(0) === Pr) return this.consumeCodePoint(), Tb;
          break;
        case zt:
          if (Qa(e, this.peekCodePoint(0), this.peekCodePoint(1))) return this.reconsumeCodePoint(e), this.consumeNumericToken();
          break;
        case eb:
          return Qb;
        case Qe:
          var a = e, s = this.peekCodePoint(0), l = this.peekCodePoint(1);
          if (Qa(a, s, l)) return this.reconsumeCodePoint(e), this.consumeNumericToken();
          if (so(a, s, l)) return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
          if (s === Qe && l === Wy) return this.consumeCodePoint(), this.consumeCodePoint(), Rb;
          break;
        case mn:
          if (Qa(e, this.peekCodePoint(0), this.peekCodePoint(1))) return this.reconsumeCodePoint(e), this.consumeNumericToken();
          break;
        case qc:
          if (this.peekCodePoint(0) === ba) for (this.consumeCodePoint(); ; ) {
            var c = this.consumeCodePoint();
            if (c === ba && (c = this.consumeCodePoint(), c === qc)) return this.consumeToken();
            if (c === je) return this.consumeToken();
          }
          break;
        case tb:
          return Ob;
        case rb:
          return Mb;
        case $y:
          if (this.peekCodePoint(0) === Vy && this.peekCodePoint(1) === Qe && this.peekCodePoint(2) === Qe) return this.consumeCodePoint(), this.consumeCodePoint(), Lb;
          break;
        case jy:
          var u = this.peekCodePoint(0), d = this.peekCodePoint(1), f = this.peekCodePoint(2);
          if (so(u, d, f)) {
            var i = this.consumeName();
            return {
              type: 7,
              value: i
            };
          }
          break;
        case zy:
          return Kb;
        case nn:
          if (Ut(e, this.peekCodePoint(0))) return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
          break;
        case Xy:
          return Db;
        case Yy:
          if (this.peekCodePoint(0) === Pr) return this.consumeCodePoint(), Ub;
          break;
        case Jy:
          return Ib;
        case Zy:
          return Hb;
        case ub:
        case fb:
          var p = this.peekCodePoint(0), B = this.peekCodePoint(1);
          return p === zt && (sr(B) || B === io) && (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
        case Au:
          if (this.peekCodePoint(0) === Pr) return this.consumeCodePoint(), xb;
          if (this.peekCodePoint(0) === Au) return this.consumeCodePoint(), Sb;
          break;
        case qy:
          if (this.peekCodePoint(0) === Pr) return this.consumeCodePoint(), Eb;
          break;
        case je:
          return bs;
      }
      return ao(e) ? (this.consumeWhiteSpace(), Pb) : Be(e) ? (this.reconsumeCodePoint(e), this.consumeNumericToken()) : jo(e) ? (this.reconsumeCodePoint(e), this.consumeIdentLikeToken()) : {
        type: 6,
        value: JA(e)
      };
    }, A.prototype.consumeCodePoint = function() {
      var e = this._value.shift();
      return typeof e > "u" ? -1 : e;
    }, A.prototype.reconsumeCodePoint = function(e) {
      this._value.unshift(e);
    }, A.prototype.peekCodePoint = function(e) {
      return e >= this._value.length ? -1 : this._value[e];
    }, A.prototype.consumeUnicodeRangeToken = function() {
      for (var e = [], t = this.consumeCodePoint(); sr(t) && e.length < 6; ) e.push(t), t = this.consumeCodePoint();
      for (var r = false; t === io && e.length < 6; ) e.push(t), t = this.consumeCodePoint(), r = true;
      if (r) {
        var n = parseInt(JA.apply(void 0, e.map(function(s) {
          return s === io ? Qf : s;
        })), 16), o = parseInt(JA.apply(void 0, e.map(function(s) {
          return s === io ? Ef : s;
        })), 16);
        return {
          type: 30,
          start: n,
          end: o
        };
      }
      var i = parseInt(JA.apply(void 0, e), 16);
      if (this.peekCodePoint(0) === Qe && sr(this.peekCodePoint(1))) {
        this.consumeCodePoint(), t = this.consumeCodePoint();
        for (var a = []; sr(t) && a.length < 6; ) a.push(t), t = this.consumeCodePoint();
        var o = parseInt(JA.apply(void 0, a), 16);
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
      return e.toLowerCase() === "url" && this.peekCodePoint(0) === oo ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === oo ? (this.consumeCodePoint(), {
        type: 19,
        value: e
      }) : {
        type: 20,
        value: e
      };
    }, A.prototype.consumeUrlToken = function() {
      var e = [];
      if (this.consumeWhiteSpace(), this.peekCodePoint(0) === je) return {
        type: 22,
        value: ""
      };
      var t = this.peekCodePoint(0);
      if (t === no || t === ro) {
        var r = this.consumeStringToken(this.consumeCodePoint());
        return r.type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === je || this.peekCodePoint(0) === _r) ? (this.consumeCodePoint(), {
          type: 22,
          value: r.value
        }) : (this.consumeBadUrlRemnants(), lo);
      }
      for (; ; ) {
        var n = this.consumeCodePoint();
        if (n === je || n === _r) return {
          type: 22,
          value: JA.apply(void 0, e)
        };
        if (ao(n)) return this.consumeWhiteSpace(), this.peekCodePoint(0) === je || this.peekCodePoint(0) === _r ? (this.consumeCodePoint(), {
          type: 22,
          value: JA.apply(void 0, e)
        }) : (this.consumeBadUrlRemnants(), lo);
        if (n === ro || n === no || n === oo || wb(n)) return this.consumeBadUrlRemnants(), lo;
        if (n === nn) if (Ut(n, this.peekCodePoint(0))) e.push(this.consumeEscapedCodePoint());
        else return this.consumeBadUrlRemnants(), lo;
        else e.push(n);
      }
    }, A.prototype.consumeWhiteSpace = function() {
      for (; ao(this.peekCodePoint(0)); ) this.consumeCodePoint();
    }, A.prototype.consumeBadUrlRemnants = function() {
      for (; ; ) {
        var e = this.consumeCodePoint();
        if (e === _r || e === je) return;
        Ut(e, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
      }
    }, A.prototype.consumeStringSlice = function(e) {
      for (var t = 5e4, r = ""; e > 0; ) {
        var n = Math.min(t, e);
        r += JA.apply(void 0, this._value.splice(0, n)), e -= n;
      }
      return this._value.shift(), r;
    }, A.prototype.consumeStringToken = function(e) {
      var t = "", r = 0;
      do {
        var n = this._value[r];
        if (n === je || n === void 0 || n === e) return t += this.consumeStringSlice(r), {
          type: 0,
          value: t
        };
        if (n === Wo) return this._value.splice(0, r), kb;
        if (n === nn) {
          var o = this._value[r + 1];
          o !== je && o !== void 0 && (o === Wo ? (t += this.consumeStringSlice(r), r = -1, this._value.shift()) : Ut(n, o) && (t += this.consumeStringSlice(r), t += JA(this.consumeEscapedCodePoint()), r = -1));
        }
        r++;
      } while (true);
    }, A.prototype.consumeNumber = function() {
      var e = [], t = In, r = this.peekCodePoint(0);
      for ((r === zt || r === Qe) && e.push(this.consumeCodePoint()); Be(this.peekCodePoint(0)); ) e.push(this.consumeCodePoint());
      r = this.peekCodePoint(0);
      var n = this.peekCodePoint(1);
      if (r === mn && Be(n)) for (e.push(this.consumeCodePoint(), this.consumeCodePoint()), t = Zc; Be(this.peekCodePoint(0)); ) e.push(this.consumeCodePoint());
      r = this.peekCodePoint(0), n = this.peekCodePoint(1);
      var o = this.peekCodePoint(2);
      if ((r === xf || r === Uf) && ((n === zt || n === Qe) && Be(o) || Be(n))) for (e.push(this.consumeCodePoint(), this.consumeCodePoint()), t = Zc; Be(this.peekCodePoint(0)); ) e.push(this.consumeCodePoint());
      return [
        Cb(e),
        t
      ];
    }, A.prototype.consumeNumericToken = function() {
      var e = this.consumeNumber(), t = e[0], r = e[1], n = this.peekCodePoint(0), o = this.peekCodePoint(1), i = this.peekCodePoint(2);
      if (so(n, o, i)) {
        var a = this.consumeName();
        return {
          type: 15,
          number: t,
          flags: r,
          unit: a
        };
      }
      return n === Ny ? (this.consumeCodePoint(), {
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
      if (sr(e)) {
        for (var t = JA(e); sr(this.peekCodePoint(0)) && t.length < 6; ) t += JA(this.consumeCodePoint());
        ao(this.peekCodePoint(0)) && this.consumeCodePoint();
        var r = parseInt(t, 16);
        return r === 0 || gb(r) || r > 1114111 ? eu : r;
      }
      return e === je ? eu : e;
    }, A.prototype.consumeName = function() {
      for (var e = ""; ; ) {
        var t = this.consumeCodePoint();
        if (tu(t)) e += JA(t);
        else if (Ut(t, this.peekCodePoint(0))) e += JA(this.consumeEscapedCodePoint());
        else return this.reconsumeCodePoint(t), e;
      }
    }, A;
  })(), Hf = (function() {
    function A(e) {
      this._tokens = e;
    }
    return A.create = function(e) {
      var t = new If();
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
        if (r.type === 32 || Nb(r, e)) return t;
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
      return typeof e > "u" ? bs : e;
    }, A.prototype.reconsumeToken = function(e) {
      this._tokens.unshift(e);
    }, A;
  })(), Hn = function(A) {
    return A.type === 15;
  }, Tr = function(A) {
    return A.type === 17;
  }, TA = function(A) {
    return A.type === 20;
  }, _b = function(A) {
    return A.type === 0;
  }, Qs = function(A, e) {
    return TA(A) && A.value === e;
  }, Tf = function(A) {
    return A.type !== 31;
  }, Sr = function(A) {
    return A.type !== 31 && A.type !== 4;
  }, st = function(A) {
    var e = [], t = [];
    return A.forEach(function(r) {
      if (r.type === 4) {
        if (t.length === 0) throw new Error("Error parsing function args, zero tokens for arg");
        e.push(t), t = [];
        return;
      }
      r.type !== 31 && t.push(r);
    }), t.length && e.push(t), e;
  }, Nb = function(A, e) {
    return e === 11 && A.type === 12 || e === 28 && A.type === 29 ? true : e === 2 && A.type === 3;
  }, Mt = function(A) {
    return A.type === 17 || A.type === 15;
  }, ee = function(A) {
    return A.type === 16 || Mt(A);
  }, kf = function(A) {
    return A.length > 1 ? [
      A[0],
      A[1]
    ] : [
      A[0]
    ];
  }, fe = {
    type: 17,
    number: 0,
    flags: In
  }, Ul = {
    type: 16,
    number: 50,
    flags: In
  }, Et = {
    type: 16,
    number: 100,
    flags: In
  }, Yr = function(A, e, t) {
    var r = A[0], n = A[1];
    return [
      KA(r, e),
      KA(typeof n < "u" ? n : r, t)
    ];
  }, KA = function(A, e) {
    if (A.type === 16) return A.number / 100 * e;
    if (Hn(A)) switch (A.unit) {
      case "rem":
      case "em":
        return 16 * A.number;
      default:
        return A.number;
    }
    return A.number;
  }, Lf = "deg", Rf = "grad", Of = "rad", Mf = "turn", zi = {
    name: "angle",
    parse: function(A, e) {
      if (e.type === 15) switch (e.unit) {
        case Lf:
          return Math.PI * e.number / 180;
        case Rf:
          return Math.PI / 200 * e.number;
        case Of:
          return e.number;
        case Mf:
          return Math.PI * 2 * e.number;
      }
      throw new Error("Unsupported angle type");
    }
  }, Kf = function(A) {
    return A.type === 15 && (A.unit === Lf || A.unit === Rf || A.unit === Of || A.unit === Mf);
  }, Df = function(A) {
    var e = A.filter(TA).map(function(t) {
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
        return Oe(0);
      case "to bottom left":
      case "to left bottom":
      case "right top":
      case "top right":
        return [
          fe,
          Et
        ];
      case "to right":
      case "left":
        return Oe(90);
      case "to top left":
      case "to left top":
      case "right bottom":
      case "bottom right":
        return [
          Et,
          Et
        ];
      case "to bottom":
      case "top":
        return Oe(180);
      case "to top right":
      case "to right top":
      case "left bottom":
      case "bottom left":
        return [
          Et,
          fe
        ];
      case "to left":
      case "right":
        return Oe(270);
    }
    return 0;
  }, Oe = function(A) {
    return Math.PI * A / 180;
  }, Tt = {
    name: "color",
    parse: function(A, e) {
      if (e.type === 18) {
        var t = Gb[e.name];
        if (typeof t > "u") throw new Error('Attempting to parse an unsupported color function "' + e.name + '"');
        return t(A, e.values);
      }
      if (e.type === 5) {
        if (e.value.length === 3) {
          var r = e.value.substring(0, 1), n = e.value.substring(1, 2), o = e.value.substring(2, 3);
          return It(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(o + o, 16), 1);
        }
        if (e.value.length === 4) {
          var r = e.value.substring(0, 1), n = e.value.substring(1, 2), o = e.value.substring(2, 3), i = e.value.substring(3, 4);
          return It(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(o + o, 16), parseInt(i + i, 16) / 255);
        }
        if (e.value.length === 6) {
          var r = e.value.substring(0, 2), n = e.value.substring(2, 4), o = e.value.substring(4, 6);
          return It(parseInt(r, 16), parseInt(n, 16), parseInt(o, 16), 1);
        }
        if (e.value.length === 8) {
          var r = e.value.substring(0, 2), n = e.value.substring(2, 4), o = e.value.substring(4, 6), i = e.value.substring(6, 8);
          return It(parseInt(r, 16), parseInt(n, 16), parseInt(o, 16), parseInt(i, 16) / 255);
        }
      }
      if (e.type === 20) {
        var a = ht[e.value.toUpperCase()];
        if (typeof a < "u") return a;
      }
      return ht.TRANSPARENT;
    }
  }, kt = function(A) {
    return (255 & A) === 0;
  }, oe = function(A) {
    var e = 255 & A, t = 255 & A >> 8, r = 255 & A >> 16, n = 255 & A >> 24;
    return e < 255 ? "rgba(" + n + "," + r + "," + t + "," + e / 255 + ")" : "rgb(" + n + "," + r + "," + t + ")";
  }, It = function(A, e, t, r) {
    return (A << 24 | e << 16 | t << 8 | Math.round(r * 255) << 0) >>> 0;
  }, ru = function(A, e) {
    if (A.type === 17) return A.number;
    if (A.type === 16) {
      var t = e === 3 ? 1 : 255;
      return e === 3 ? A.number / 100 * t : Math.round(A.number / 100 * t);
    }
    return 0;
  }, nu = function(A, e) {
    var t = e.filter(Sr);
    if (t.length === 3) {
      var r = t.map(ru), n = r[0], o = r[1], i = r[2];
      return It(n, o, i, 1);
    }
    if (t.length === 4) {
      var a = t.map(ru), n = a[0], o = a[1], i = a[2], s = a[3];
      return It(n, o, i, s);
    }
    return 0;
  };
  function Fa(A, e, t) {
    return t < 0 && (t += 1), t >= 1 && (t -= 1), t < 1 / 6 ? (e - A) * t * 6 + A : t < 1 / 2 ? e : t < 2 / 3 ? (e - A) * 6 * (2 / 3 - t) + A : A;
  }
  var ou = function(A, e) {
    var t = e.filter(Sr), r = t[0], n = t[1], o = t[2], i = t[3], a = (r.type === 17 ? Oe(r.number) : zi.parse(A, r)) / (Math.PI * 2), s = ee(n) ? n.number / 100 : 0, l = ee(o) ? o.number / 100 : 0, c = typeof i < "u" && ee(i) ? KA(i, 1) : 1;
    if (s === 0) return It(l * 255, l * 255, l * 255, 1);
    var u = l <= 0.5 ? l * (s + 1) : l + s - l * s, d = l * 2 - u, f = Fa(d, u, a + 1 / 3), p = Fa(d, u, a), B = Fa(d, u, a - 1 / 3);
    return It(f * 255, p * 255, B * 255, c);
  }, Gb = {
    hsl: ou,
    hsla: ou,
    rgb: nu,
    rgba: nu
  }, on = function(A, e) {
    return Tt.parse(A, Hf.create(e).parseComponentValue());
  }, ht = {
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
  }, Vb = {
    name: "background-clip",
    initialValue: "border-box",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return e.map(function(t) {
        if (TA(t)) switch (t.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
        return 0;
      });
    }
  }, $b = {
    name: "background-color",
    initialValue: "transparent",
    prefix: false,
    type: 3,
    format: "color"
  }, Xi = function(A, e) {
    var t = Tt.parse(A, e[0]), r = e[1];
    return r && ee(r) ? {
      color: t,
      stop: r
    } : {
      color: t,
      stop: null
    };
  }, iu = function(A, e) {
    var t = A[0], r = A[A.length - 1];
    t.stop === null && (t.stop = fe), r.stop === null && (r.stop = Et);
    for (var n = [], o = 0, i = 0; i < A.length; i++) {
      var a = A[i].stop;
      if (a !== null) {
        var s = KA(a, e);
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
    return A.map(function(B, b) {
      var v = B.color;
      return {
        color: v,
        stop: Math.max(Math.min(1, n[b] / e), 0)
      };
    });
  }, Wb = function(A, e, t) {
    var r = e / 2, n = t / 2, o = KA(A[0], e) - r, i = n - KA(A[1], t);
    return (Math.atan2(i, o) + Math.PI * 2) % (Math.PI * 2);
  }, jb = function(A, e, t) {
    var r = typeof A == "number" ? A : Wb(A, e, t), n = Math.abs(e * Math.sin(r)) + Math.abs(t * Math.cos(r)), o = e / 2, i = t / 2, a = n / 2, s = Math.sin(r - Math.PI / 2) * a, l = Math.cos(r - Math.PI / 2) * a;
    return [
      n,
      o - l,
      o + l,
      i - s,
      i + s
    ];
  }, _e = function(A, e) {
    return Math.sqrt(A * A + e * e);
  }, au = function(A, e, t, r, n) {
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
      var s = a[0], l = a[1], c = _e(t - s, r - l);
      return (n ? c < i.optimumDistance : c > i.optimumDistance) ? {
        optimumCorner: a,
        optimumDistance: c
      } : i;
    }, {
      optimumDistance: n ? 1 / 0 : -1 / 0,
      optimumCorner: null
    }).optimumCorner;
  }, zb = function(A, e, t, r, n) {
    var o = 0, i = 0;
    switch (A.size) {
      case 0:
        A.shape === 0 ? o = i = Math.min(Math.abs(e), Math.abs(e - r), Math.abs(t), Math.abs(t - n)) : A.shape === 1 && (o = Math.min(Math.abs(e), Math.abs(e - r)), i = Math.min(Math.abs(t), Math.abs(t - n)));
        break;
      case 2:
        if (A.shape === 0) o = i = Math.min(_e(e, t), _e(e, t - n), _e(e - r, t), _e(e - r, t - n));
        else if (A.shape === 1) {
          var a = Math.min(Math.abs(t), Math.abs(t - n)) / Math.min(Math.abs(e), Math.abs(e - r)), s = au(r, n, e, t, true), l = s[0], c = s[1];
          o = _e(l - e, (c - t) / a), i = a * o;
        }
        break;
      case 1:
        A.shape === 0 ? o = i = Math.max(Math.abs(e), Math.abs(e - r), Math.abs(t), Math.abs(t - n)) : A.shape === 1 && (o = Math.max(Math.abs(e), Math.abs(e - r)), i = Math.max(Math.abs(t), Math.abs(t - n)));
        break;
      case 3:
        if (A.shape === 0) o = i = Math.max(_e(e, t), _e(e, t - n), _e(e - r, t), _e(e - r, t - n));
        else if (A.shape === 1) {
          var a = Math.max(Math.abs(t), Math.abs(t - n)) / Math.max(Math.abs(e), Math.abs(e - r)), u = au(r, n, e, t, false), l = u[0], c = u[1];
          o = _e(l - e, (c - t) / a), i = a * o;
        }
        break;
    }
    return Array.isArray(A.size) && (o = KA(A.size[0], r), i = A.size.length === 2 ? KA(A.size[1], n) : o), [
      o,
      i
    ];
  }, Xb = function(A, e) {
    var t = Oe(180), r = [];
    return st(e).forEach(function(n, o) {
      if (o === 0) {
        var i = n[0];
        if (i.type === 20 && i.value === "to") {
          t = Df(n);
          return;
        } else if (Kf(i)) {
          t = zi.parse(A, i);
          return;
        }
      }
      var a = Xi(A, n);
      r.push(a);
    }), {
      angle: t,
      stops: r,
      type: 1
    };
  }, co = function(A, e) {
    var t = Oe(180), r = [];
    return st(e).forEach(function(n, o) {
      if (o === 0) {
        var i = n[0];
        if (i.type === 20 && [
          "top",
          "left",
          "right",
          "bottom"
        ].indexOf(i.value) !== -1) {
          t = Df(n);
          return;
        } else if (Kf(i)) {
          t = (zi.parse(A, i) + Oe(270)) % Oe(360);
          return;
        }
      }
      var a = Xi(A, n);
      r.push(a);
    }), {
      angle: t,
      stops: r,
      type: 1
    };
  }, Yb = function(A, e) {
    var t = Oe(180), r = [], n = 1, o = 0, i = 3, a = [];
    return st(e).forEach(function(s, l) {
      var c = s[0];
      if (l === 0) {
        if (TA(c) && c.value === "linear") {
          n = 1;
          return;
        } else if (TA(c) && c.value === "radial") {
          n = 2;
          return;
        }
      }
      if (c.type === 18) {
        if (c.name === "from") {
          var u = Tt.parse(A, c.values[0]);
          r.push({
            stop: fe,
            color: u
          });
        } else if (c.name === "to") {
          var u = Tt.parse(A, c.values[0]);
          r.push({
            stop: Et,
            color: u
          });
        } else if (c.name === "color-stop") {
          var d = c.values.filter(Sr);
          if (d.length === 2) {
            var u = Tt.parse(A, d[1]), f = d[0];
            Tr(f) && r.push({
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
      angle: (t + Oe(180)) % Oe(360),
      stops: r,
      type: n
    } : {
      size: i,
      shape: o,
      stops: r,
      position: a,
      type: n
    };
  }, Pf = "closest-side", _f = "farthest-side", Nf = "closest-corner", Gf = "farthest-corner", Vf = "circle", $f = "ellipse", Wf = "cover", jf = "contain", Jb = function(A, e) {
    var t = 0, r = 3, n = [], o = [];
    return st(e).forEach(function(i, a) {
      var s = true;
      if (a === 0) {
        var l = false;
        s = i.reduce(function(u, d) {
          if (l) if (TA(d)) switch (d.value) {
            case "center":
              return o.push(Ul), u;
            case "top":
            case "left":
              return o.push(fe), u;
            case "right":
            case "bottom":
              return o.push(Et), u;
          }
          else (ee(d) || Mt(d)) && o.push(d);
          else if (TA(d)) switch (d.value) {
            case Vf:
              return t = 0, false;
            case $f:
              return t = 1, false;
            case "at":
              return l = true, false;
            case Pf:
              return r = 0, false;
            case Wf:
            case _f:
              return r = 1, false;
            case jf:
            case Nf:
              return r = 2, false;
            case Gf:
              return r = 3, false;
          }
          else if (Mt(d) || ee(d)) return Array.isArray(r) || (r = []), r.push(d), false;
          return u;
        }, s);
      }
      if (s) {
        var c = Xi(A, i);
        n.push(c);
      }
    }), {
      size: r,
      shape: t,
      stops: n,
      position: o,
      type: 2
    };
  }, uo = function(A, e) {
    var t = 0, r = 3, n = [], o = [];
    return st(e).forEach(function(i, a) {
      var s = true;
      if (a === 0 ? s = i.reduce(function(c, u) {
        if (TA(u)) switch (u.value) {
          case "center":
            return o.push(Ul), false;
          case "top":
          case "left":
            return o.push(fe), false;
          case "right":
          case "bottom":
            return o.push(Et), false;
        }
        else if (ee(u) || Mt(u)) return o.push(u), false;
        return c;
      }, s) : a === 1 && (s = i.reduce(function(c, u) {
        if (TA(u)) switch (u.value) {
          case Vf:
            return t = 0, false;
          case $f:
            return t = 1, false;
          case jf:
          case Pf:
            return r = 0, false;
          case _f:
            return r = 1, false;
          case Nf:
            return r = 2, false;
          case Wf:
          case Gf:
            return r = 3, false;
        }
        else if (Mt(u) || ee(u)) return Array.isArray(r) || (r = []), r.push(u), false;
        return c;
      }, s)), s) {
        var l = Xi(A, i);
        n.push(l);
      }
    }), {
      size: r,
      shape: t,
      stops: n,
      position: o,
      type: 2
    };
  }, Zb = function(A) {
    return A.type === 1;
  }, qb = function(A) {
    return A.type === 2;
  }, Sl = {
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
        var r = zf[e.name];
        if (typeof r > "u") throw new Error('Attempting to parse an unsupported image function "' + e.name + '"');
        return r(A, e.values);
      }
      throw new Error("Unsupported image type " + e.type);
    }
  };
  function AQ(A) {
    return !(A.type === 20 && A.value === "none") && (A.type !== 18 || !!zf[A.name]);
  }
  var zf = {
    "linear-gradient": Xb,
    "-moz-linear-gradient": co,
    "-ms-linear-gradient": co,
    "-o-linear-gradient": co,
    "-webkit-linear-gradient": co,
    "radial-gradient": Jb,
    "-moz-radial-gradient": uo,
    "-ms-radial-gradient": uo,
    "-o-radial-gradient": uo,
    "-webkit-radial-gradient": uo,
    "-webkit-gradient": Yb
  }, eQ = {
    name: "background-image",
    initialValue: "none",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      if (e.length === 0) return [];
      var t = e[0];
      return t.type === 20 && t.value === "none" ? [] : e.filter(function(r) {
        return Sr(r) && AQ(r);
      }).map(function(r) {
        return Sl.parse(A, r);
      });
    }
  }, tQ = {
    name: "background-origin",
    initialValue: "border-box",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return e.map(function(t) {
        if (TA(t)) switch (t.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
        return 0;
      });
    }
  }, rQ = {
    name: "background-position",
    initialValue: "0% 0%",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      return st(e).map(function(t) {
        return t.filter(ee);
      }).map(kf);
    }
  }, nQ = {
    name: "background-repeat",
    initialValue: "repeat",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return st(e).map(function(t) {
        return t.filter(TA).map(function(r) {
          return r.value;
        }).join(" ");
      }).map(oQ);
    }
  }, oQ = function(A) {
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
  }, yr;
  (function(A) {
    A.AUTO = "auto", A.CONTAIN = "contain", A.COVER = "cover";
  })(yr || (yr = {}));
  var iQ = {
    name: "background-size",
    initialValue: "0",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return st(e).map(function(t) {
        return t.filter(aQ);
      });
    }
  }, aQ = function(A) {
    return TA(A) || ee(A);
  }, Yi = function(A) {
    return {
      name: "border-" + A + "-color",
      initialValue: "transparent",
      prefix: false,
      type: 3,
      format: "color"
    };
  }, sQ = Yi("top"), lQ = Yi("right"), cQ = Yi("bottom"), uQ = Yi("left"), Ji = function(A) {
    return {
      name: "border-radius-" + A,
      initialValue: "0 0",
      prefix: false,
      type: 1,
      parse: function(e, t) {
        return kf(t.filter(ee));
      }
    };
  }, dQ = Ji("top-left"), fQ = Ji("top-right"), pQ = Ji("bottom-right"), gQ = Ji("bottom-left"), Zi = function(A) {
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
  }, hQ = Zi("top"), BQ = Zi("right"), mQ = Zi("bottom"), vQ = Zi("left"), qi = function(A) {
    return {
      name: "border-" + A + "-width",
      initialValue: "0",
      type: 0,
      prefix: false,
      parse: function(e, t) {
        return Hn(t) ? t.number : 0;
      }
    };
  }, wQ = qi("top"), CQ = qi("right"), yQ = qi("bottom"), bQ = qi("left"), QQ = {
    name: "color",
    initialValue: "transparent",
    prefix: false,
    type: 3,
    format: "color"
  }, FQ = {
    name: "direction",
    initialValue: "ltr",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      return e === "rtl" ? 1 : 0;
    }
  }, UQ = {
    name: "display",
    initialValue: "inline-block",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return e.filter(TA).reduce(function(t, r) {
        return t | SQ(r.value);
      }, 0);
    }
  }, SQ = function(A) {
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
  }, xQ = {
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
  }, EQ = {
    name: "letter-spacing",
    initialValue: "0",
    prefix: false,
    type: 0,
    parse: function(A, e) {
      return e.type === 20 && e.value === "normal" ? 0 : e.type === 17 || e.type === 15 ? e.number : 0;
    }
  }, zo;
  (function(A) {
    A.NORMAL = "normal", A.STRICT = "strict";
  })(zo || (zo = {}));
  var IQ = {
    name: "line-break",
    initialValue: "normal",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      return e === "strict" ? zo.STRICT : zo.NORMAL;
    }
  }, HQ = {
    name: "line-height",
    initialValue: "normal",
    prefix: false,
    type: 4
  }, su = function(A, e) {
    return TA(A) && A.value === "normal" ? 1.2 * e : A.type === 17 ? e * A.number : ee(A) ? KA(A, e) : e;
  }, TQ = {
    name: "list-style-image",
    initialValue: "none",
    type: 0,
    prefix: false,
    parse: function(A, e) {
      return e.type === 20 && e.value === "none" ? null : Sl.parse(A, e);
    }
  }, kQ = {
    name: "list-style-position",
    initialValue: "outside",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      return e === "inside" ? 0 : 1;
    }
  }, Fs = {
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
  }, Aa = function(A) {
    return {
      name: "margin-" + A,
      initialValue: "0",
      prefix: false,
      type: 4
    };
  }, LQ = Aa("top"), RQ = Aa("right"), OQ = Aa("bottom"), MQ = Aa("left"), KQ = {
    name: "overflow",
    initialValue: "visible",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return e.filter(TA).map(function(t) {
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
  }, DQ = {
    name: "overflow-wrap",
    initialValue: "normal",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      return e === "break-word" ? "break-word" : "normal";
    }
  }, ea = function(A) {
    return {
      name: "padding-" + A,
      initialValue: "0",
      prefix: false,
      type: 3,
      format: "length-percentage"
    };
  }, PQ = ea("top"), _Q = ea("right"), NQ = ea("bottom"), GQ = ea("left"), VQ = {
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
  }, $Q = {
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
  }, WQ = {
    name: "text-shadow",
    initialValue: "none",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      return e.length === 1 && Qs(e[0], "none") ? [] : st(e).map(function(t) {
        for (var r = {
          color: ht.TRANSPARENT,
          offsetX: fe,
          offsetY: fe,
          blur: fe
        }, n = 0, o = 0; o < t.length; o++) {
          var i = t[o];
          Mt(i) ? (n === 0 ? r.offsetX = i : n === 1 ? r.offsetY = i : r.blur = i, n++) : r.color = Tt.parse(A, i);
        }
        return r;
      });
    }
  }, jQ = {
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
  }, zQ = {
    name: "transform",
    initialValue: "none",
    prefix: true,
    type: 0,
    parse: function(A, e) {
      if (e.type === 20 && e.value === "none") return null;
      if (e.type === 18) {
        var t = JQ[e.name];
        if (typeof t > "u") throw new Error('Attempting to parse an unsupported transform function "' + e.name + '"');
        return t(e.values);
      }
      return null;
    }
  }, XQ = function(A) {
    var e = A.filter(function(t) {
      return t.type === 17;
    }).map(function(t) {
      return t.number;
    });
    return e.length === 6 ? e : null;
  }, YQ = function(A) {
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
  }, JQ = {
    matrix: XQ,
    matrix3d: YQ
  }, lu = {
    type: 16,
    number: 50,
    flags: In
  }, ZQ = [
    lu,
    lu
  ], qQ = {
    name: "transform-origin",
    initialValue: "50% 50%",
    prefix: true,
    type: 1,
    parse: function(A, e) {
      var t = e.filter(ee);
      return t.length !== 2 ? ZQ : [
        t[0],
        t[1]
      ];
    }
  }, AF = {
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
  }, an;
  (function(A) {
    A.NORMAL = "normal", A.BREAK_ALL = "break-all", A.KEEP_ALL = "keep-all";
  })(an || (an = {}));
  var eF = {
    name: "word-break",
    initialValue: "normal",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      switch (e) {
        case "break-all":
          return an.BREAK_ALL;
        case "keep-all":
          return an.KEEP_ALL;
        default:
          return an.NORMAL;
      }
    }
  }, tF = {
    name: "z-index",
    initialValue: "auto",
    prefix: false,
    type: 0,
    parse: function(A, e) {
      if (e.type === 20) return {
        auto: true,
        order: 0
      };
      if (Tr(e)) return {
        auto: false,
        order: e.number
      };
      throw new Error("Invalid z-index number parsed");
    }
  }, Xf = {
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
  }, rF = {
    name: "opacity",
    initialValue: "1",
    type: 0,
    prefix: false,
    parse: function(A, e) {
      return Tr(e) ? e.number : 1;
    }
  }, nF = {
    name: "text-decoration-color",
    initialValue: "transparent",
    prefix: false,
    type: 3,
    format: "color"
  }, oF = {
    name: "text-decoration-line",
    initialValue: "none",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return e.filter(TA).map(function(t) {
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
  }, iF = {
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
  }, aF = {
    name: "font-size",
    initialValue: "0",
    prefix: false,
    type: 3,
    format: "length"
  }, sF = {
    name: "font-weight",
    initialValue: "normal",
    type: 0,
    prefix: false,
    parse: function(A, e) {
      return Tr(e) ? e.number : TA(e) && e.value === "bold" ? 700 : 400;
    }
  }, lF = {
    name: "font-variant",
    initialValue: "none",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      return e.filter(TA).map(function(t) {
        return t.value;
      });
    }
  }, cF = {
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
  }, ne = function(A, e) {
    return (A & e) !== 0;
  }, uF = {
    name: "content",
    initialValue: "none",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      if (e.length === 0) return [];
      var t = e[0];
      return t.type === 20 && t.value === "none" ? [] : e;
    }
  }, dF = {
    name: "counter-increment",
    initialValue: "none",
    prefix: true,
    type: 1,
    parse: function(A, e) {
      if (e.length === 0) return null;
      var t = e[0];
      if (t.type === 20 && t.value === "none") return null;
      for (var r = [], n = e.filter(Tf), o = 0; o < n.length; o++) {
        var i = n[o], a = n[o + 1];
        if (i.type === 20) {
          var s = a && Tr(a) ? a.number : 1;
          r.push({
            counter: i.value,
            increment: s
          });
        }
      }
      return r;
    }
  }, fF = {
    name: "counter-reset",
    initialValue: "none",
    prefix: true,
    type: 1,
    parse: function(A, e) {
      if (e.length === 0) return [];
      for (var t = [], r = e.filter(Tf), n = 0; n < r.length; n++) {
        var o = r[n], i = r[n + 1];
        if (TA(o) && o.value !== "none") {
          var a = i && Tr(i) ? i.number : 0;
          t.push({
            counter: o.value,
            reset: a
          });
        }
      }
      return t;
    }
  }, pF = {
    name: "duration",
    initialValue: "0s",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return e.filter(Hn).map(function(t) {
        return Xf.parse(A, t);
      });
    }
  }, gF = {
    name: "quotes",
    initialValue: "none",
    prefix: true,
    type: 1,
    parse: function(A, e) {
      if (e.length === 0) return null;
      var t = e[0];
      if (t.type === 20 && t.value === "none") return null;
      var r = [], n = e.filter(_b);
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
  }, cu = function(A, e, t) {
    if (!A) return "";
    var r = A[Math.min(e, A.length - 1)];
    return r ? t ? r.open : r.close : "";
  }, hF = {
    name: "box-shadow",
    initialValue: "none",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      return e.length === 1 && Qs(e[0], "none") ? [] : st(e).map(function(t) {
        for (var r = {
          color: 255,
          offsetX: fe,
          offsetY: fe,
          blur: fe,
          spread: fe,
          inset: false
        }, n = 0, o = 0; o < t.length; o++) {
          var i = t[o];
          Qs(i, "inset") ? r.inset = true : Mt(i) ? (n === 0 ? r.offsetX = i : n === 1 ? r.offsetY = i : n === 2 ? r.blur = i : r.spread = i, n++) : r.color = Tt.parse(A, i);
        }
        return r;
      });
    }
  }, BF = {
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
      return e.filter(TA).forEach(function(n) {
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
  }, mF = {
    name: "-webkit-text-stroke-color",
    initialValue: "currentcolor",
    prefix: false,
    type: 3,
    format: "color"
  }, vF = {
    name: "-webkit-text-stroke-width",
    initialValue: "0",
    type: 0,
    prefix: false,
    parse: function(A, e) {
      return Hn(e) ? e.number : 0;
    }
  }, wF = (function() {
    function A(e, t) {
      var r, n;
      this.animationDuration = aA(e, pF, t.animationDuration), this.backgroundClip = aA(e, Vb, t.backgroundClip), this.backgroundColor = aA(e, $b, t.backgroundColor), this.backgroundImage = aA(e, eQ, t.backgroundImage), this.backgroundOrigin = aA(e, tQ, t.backgroundOrigin), this.backgroundPosition = aA(e, rQ, t.backgroundPosition), this.backgroundRepeat = aA(e, nQ, t.backgroundRepeat), this.backgroundSize = aA(e, iQ, t.backgroundSize), this.borderTopColor = aA(e, sQ, t.borderTopColor), this.borderRightColor = aA(e, lQ, t.borderRightColor), this.borderBottomColor = aA(e, cQ, t.borderBottomColor), this.borderLeftColor = aA(e, uQ, t.borderLeftColor), this.borderTopLeftRadius = aA(e, dQ, t.borderTopLeftRadius), this.borderTopRightRadius = aA(e, fQ, t.borderTopRightRadius), this.borderBottomRightRadius = aA(e, pQ, t.borderBottomRightRadius), this.borderBottomLeftRadius = aA(e, gQ, t.borderBottomLeftRadius), this.borderTopStyle = aA(e, hQ, t.borderTopStyle), this.borderRightStyle = aA(e, BQ, t.borderRightStyle), this.borderBottomStyle = aA(e, mQ, t.borderBottomStyle), this.borderLeftStyle = aA(e, vQ, t.borderLeftStyle), this.borderTopWidth = aA(e, wQ, t.borderTopWidth), this.borderRightWidth = aA(e, CQ, t.borderRightWidth), this.borderBottomWidth = aA(e, yQ, t.borderBottomWidth), this.borderLeftWidth = aA(e, bQ, t.borderLeftWidth), this.boxShadow = aA(e, hF, t.boxShadow), this.color = aA(e, QQ, t.color), this.direction = aA(e, FQ, t.direction), this.display = aA(e, UQ, t.display), this.float = aA(e, xQ, t.cssFloat), this.fontFamily = aA(e, iF, t.fontFamily), this.fontSize = aA(e, aF, t.fontSize), this.fontStyle = aA(e, cF, t.fontStyle), this.fontVariant = aA(e, lF, t.fontVariant), this.fontWeight = aA(e, sF, t.fontWeight), this.letterSpacing = aA(e, EQ, t.letterSpacing), this.lineBreak = aA(e, IQ, t.lineBreak), this.lineHeight = aA(e, HQ, t.lineHeight), this.listStyleImage = aA(e, TQ, t.listStyleImage), this.listStylePosition = aA(e, kQ, t.listStylePosition), this.listStyleType = aA(e, Fs, t.listStyleType), this.marginTop = aA(e, LQ, t.marginTop), this.marginRight = aA(e, RQ, t.marginRight), this.marginBottom = aA(e, OQ, t.marginBottom), this.marginLeft = aA(e, MQ, t.marginLeft), this.opacity = aA(e, rF, t.opacity);
      var o = aA(e, KQ, t.overflow);
      this.overflowX = o[0], this.overflowY = o[o.length > 1 ? 1 : 0], this.overflowWrap = aA(e, DQ, t.overflowWrap), this.paddingTop = aA(e, PQ, t.paddingTop), this.paddingRight = aA(e, _Q, t.paddingRight), this.paddingBottom = aA(e, NQ, t.paddingBottom), this.paddingLeft = aA(e, GQ, t.paddingLeft), this.paintOrder = aA(e, BF, t.paintOrder), this.position = aA(e, $Q, t.position), this.textAlign = aA(e, VQ, t.textAlign), this.textDecorationColor = aA(e, nF, (r = t.textDecorationColor) !== null && r !== void 0 ? r : t.color), this.textDecorationLine = aA(e, oF, (n = t.textDecorationLine) !== null && n !== void 0 ? n : t.textDecoration), this.textShadow = aA(e, WQ, t.textShadow), this.textTransform = aA(e, jQ, t.textTransform), this.transform = aA(e, zQ, t.transform), this.transformOrigin = aA(e, qQ, t.transformOrigin), this.visibility = aA(e, AF, t.visibility), this.webkitTextStrokeColor = aA(e, mF, t.webkitTextStrokeColor), this.webkitTextStrokeWidth = aA(e, vF, t.webkitTextStrokeWidth), this.wordBreak = aA(e, eF, t.wordBreak), this.zIndex = aA(e, tF, t.zIndex);
    }
    return A.prototype.isVisible = function() {
      return this.display > 0 && this.opacity > 0 && this.visibility === 0;
    }, A.prototype.isTransparent = function() {
      return kt(this.backgroundColor);
    }, A.prototype.isTransformed = function() {
      return this.transform !== null;
    }, A.prototype.isPositioned = function() {
      return this.position !== 0;
    }, A.prototype.isPositionedWithZIndex = function() {
      return this.isPositioned() && !this.zIndex.auto;
    }, A.prototype.isFloating = function() {
      return this.float !== 0;
    }, A.prototype.isInlineLevel = function() {
      return ne(this.display, 4) || ne(this.display, 33554432) || ne(this.display, 268435456) || ne(this.display, 536870912) || ne(this.display, 67108864) || ne(this.display, 134217728);
    }, A;
  })(), CF = /* @__PURE__ */ (function() {
    function A(e, t) {
      this.content = aA(e, uF, t.content), this.quotes = aA(e, gF, t.quotes);
    }
    return A;
  })(), uu = /* @__PURE__ */ (function() {
    function A(e, t) {
      this.counterIncrement = aA(e, dF, t.counterIncrement), this.counterReset = aA(e, fF, t.counterReset);
    }
    return A;
  })(), aA = function(A, e, t) {
    var r = new If(), n = t !== null && typeof t < "u" ? t.toString() : e.initialValue;
    r.write(n);
    var o = new Hf(r.read());
    switch (e.type) {
      case 2:
        var i = o.parseComponentValue();
        return e.parse(A, TA(i) ? i.value : e.initialValue);
      case 0:
        return e.parse(A, o.parseComponentValue());
      case 1:
        return e.parse(A, o.parseComponentValues());
      case 4:
        return o.parseComponentValue();
      case 3:
        switch (e.format) {
          case "angle":
            return zi.parse(A, o.parseComponentValue());
          case "color":
            return Tt.parse(A, o.parseComponentValue());
          case "image":
            return Sl.parse(A, o.parseComponentValue());
          case "length":
            var a = o.parseComponentValue();
            return Mt(a) ? a : fe;
          case "length-percentage":
            var s = o.parseComponentValue();
            return ee(s) ? s : fe;
          case "time":
            return Xf.parse(A, o.parseComponentValue());
        }
        break;
    }
  }, yF = "data-html2canvas-debug", bF = function(A) {
    var e = A.getAttribute(yF);
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
  }, Us = function(A, e) {
    var t = bF(A);
    return t === 1 || e === t;
  }, lt = /* @__PURE__ */ (function() {
    function A(e, t) {
      if (this.context = e, this.textNodes = [], this.elements = [], this.flags = 0, Us(t, 3)) debugger;
      this.styles = new wF(e, window.getComputedStyle(t, null)), Es(t) && (this.styles.animationDuration.some(function(r) {
        return r > 0;
      }) && (t.style.animationDuration = "0s"), this.styles.transform !== null && (t.style.transform = "none")), this.bounds = Wi(this.context, t), Us(t, 4) && (this.flags |= 16);
    }
    return A;
  })(), QF = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", du = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Jr = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (var fo = 0; fo < du.length; fo++) Jr[du.charCodeAt(fo)] = fo;
  var FF = function(A) {
    var e = A.length * 0.75, t = A.length, r, n = 0, o, i, a, s;
    A[A.length - 1] === "=" && (e--, A[A.length - 2] === "=" && e--);
    var l = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(e) : new Array(e), c = Array.isArray(l) ? l : new Uint8Array(l);
    for (r = 0; r < t; r += 4) o = Jr[A.charCodeAt(r)], i = Jr[A.charCodeAt(r + 1)], a = Jr[A.charCodeAt(r + 2)], s = Jr[A.charCodeAt(r + 3)], c[n++] = o << 2 | i >> 4, c[n++] = (i & 15) << 4 | a >> 2, c[n++] = (a & 3) << 6 | s & 63;
    return l;
  }, UF = function(A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 2) t.push(A[r + 1] << 8 | A[r]);
    return t;
  }, SF = function(A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 4) t.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]);
    return t;
  }, Jt = 5, xl = 11, Ua = 2, xF = xl - Jt, Yf = 65536 >> Jt, EF = 1 << Jt, Sa = EF - 1, IF = 1024 >> Jt, HF = Yf + IF, TF = HF, kF = 32, LF = TF + kF, RF = 65536 >> xl, OF = 1 << xF, MF = OF - 1, fu = function(A, e, t) {
    return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t));
  }, KF = function(A, e, t) {
    return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t));
  }, DF = function(A, e) {
    var t = FF(A), r = Array.isArray(t) ? SF(t) : new Uint32Array(t), n = Array.isArray(t) ? UF(t) : new Uint16Array(t), o = 24, i = fu(n, o / 2, r[4] / 2), a = r[5] === 2 ? fu(n, (o + r[4]) / 2) : KF(r, Math.ceil((o + r[4]) / 4));
    return new PF(r[0], r[1], r[2], r[3], i, a);
  }, PF = (function() {
    function A(e, t, r, n, o, i) {
      this.initialValue = e, this.errorValue = t, this.highStart = r, this.highValueIndex = n, this.index = o, this.data = i;
    }
    return A.prototype.get = function(e) {
      var t;
      if (e >= 0) {
        if (e < 55296 || e > 56319 && e <= 65535) return t = this.index[e >> Jt], t = (t << Ua) + (e & Sa), this.data[t];
        if (e <= 65535) return t = this.index[Yf + (e - 55296 >> Jt)], t = (t << Ua) + (e & Sa), this.data[t];
        if (e < this.highStart) return t = LF - RF + (e >> xl), t = this.index[t], t += e >> Jt & MF, t = this.index[t], t = (t << Ua) + (e & Sa), this.data[t];
        if (e <= 1114111) return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, A;
  })(), pu = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", _F = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (var po = 0; po < pu.length; po++) _F[pu.charCodeAt(po)] = po;
  var NF = 1, xa = 2, Ea = 3, gu = 4, hu = 5, GF = 7, Bu = 8, Ia = 9, Ha = 10, mu = 11, vu = 12, wu = 13, Cu = 14, Ta = 15, VF = function(A) {
    for (var e = [], t = 0, r = A.length; t < r; ) {
      var n = A.charCodeAt(t++);
      if (n >= 55296 && n <= 56319 && t < r) {
        var o = A.charCodeAt(t++);
        (o & 64512) === 56320 ? e.push(((n & 1023) << 10) + (o & 1023) + 65536) : (e.push(n), t--);
      } else e.push(n);
    }
    return e;
  }, $F = function() {
    for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
    if (String.fromCodePoint) return String.fromCodePoint.apply(String, A);
    var t = A.length;
    if (!t) return "";
    for (var r = [], n = -1, o = ""; ++n < t; ) {
      var i = A[n];
      i <= 65535 ? r.push(i) : (i -= 65536, r.push((i >> 10) + 55296, i % 1024 + 56320)), (n + 1 === t || r.length > 16384) && (o += String.fromCharCode.apply(String, r), r.length = 0);
    }
    return o;
  }, WF = DF(QF), He = "\xD7", ka = "\xF7", jF = function(A) {
    return WF.get(A);
  }, zF = function(A, e, t) {
    var r = t - 2, n = e[r], o = e[t - 1], i = e[t];
    if (o === xa && i === Ea) return He;
    if (o === xa || o === Ea || o === gu || i === xa || i === Ea || i === gu) return ka;
    if (o === Bu && [
      Bu,
      Ia,
      mu,
      vu
    ].indexOf(i) !== -1 || (o === mu || o === Ia) && (i === Ia || i === Ha) || (o === vu || o === Ha) && i === Ha || i === wu || i === hu || i === GF || o === NF) return He;
    if (o === wu && i === Cu) {
      for (; n === hu; ) n = e[--r];
      if (n === Cu) return He;
    }
    if (o === Ta && i === Ta) {
      for (var a = 0; n === Ta; ) a++, n = e[--r];
      if (a % 2 === 0) return He;
    }
    return ka;
  }, XF = function(A) {
    var e = VF(A), t = e.length, r = 0, n = 0, o = e.map(jF);
    return {
      next: function() {
        if (r >= t) return {
          done: true,
          value: null
        };
        for (var i = He; r < t && (i = zF(e, o, ++r)) === He; ) ;
        if (i !== He || r === t) {
          var a = $F.apply(null, e.slice(n, r));
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
  }, YF = function(A) {
    for (var e = XF(A), t = [], r; !(r = e.next()).done; ) r.value && t.push(r.value.slice());
    return t;
  }, JF = function(A) {
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
  }, ZF = function(A) {
    var e = A.createElement("boundtest");
    e.style.width = "50px", e.style.display = "block", e.style.fontSize = "12px", e.style.letterSpacing = "0px", e.style.wordSpacing = "0px", A.body.appendChild(e);
    var t = A.createRange();
    e.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
    var r = e.firstChild, n = ji(r.data).map(function(s) {
      return JA(s);
    }), o = 0, i = {}, a = n.every(function(s, l) {
      t.setStart(r, o), t.setEnd(r, o + s.length);
      var c = t.getBoundingClientRect();
      o += s.length;
      var u = c.x > i.x || c.y > i.y;
      return i = c, l === 0 ? true : u;
    });
    return A.body.removeChild(e), a;
  }, qF = function() {
    return typeof new Image().crossOrigin < "u";
  }, AU = function() {
    return typeof new XMLHttpRequest().responseType == "string";
  }, eU = function(A) {
    var e = new Image(), t = A.createElement("canvas"), r = t.getContext("2d");
    if (!r) return false;
    e.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
    try {
      r.drawImage(e, 0, 0), t.toDataURL();
    } catch {
      return false;
    }
    return true;
  }, yu = function(A) {
    return A[0] === 0 && A[1] === 255 && A[2] === 0 && A[3] === 255;
  }, tU = function(A) {
    var e = A.createElement("canvas"), t = 100;
    e.width = t, e.height = t;
    var r = e.getContext("2d");
    if (!r) return Promise.reject(false);
    r.fillStyle = "rgb(0, 255, 0)", r.fillRect(0, 0, t, t);
    var n = new Image(), o = e.toDataURL();
    n.src = o;
    var i = Ss(t, t, 0, 0, n);
    return r.fillStyle = "red", r.fillRect(0, 0, t, t), bu(i).then(function(a) {
      r.drawImage(a, 0, 0);
      var s = r.getImageData(0, 0, t, t).data;
      r.fillStyle = "red", r.fillRect(0, 0, t, t);
      var l = A.createElement("div");
      return l.style.backgroundImage = "url(" + o + ")", l.style.height = t + "px", yu(s) ? bu(Ss(t, t, 0, 0, l)) : Promise.reject(false);
    }).then(function(a) {
      return r.drawImage(a, 0, 0), yu(r.getImageData(0, 0, t, t).data);
    }).catch(function() {
      return false;
    });
  }, Ss = function(A, e, t, r, n) {
    var o = "http://www.w3.org/2000/svg", i = document.createElementNS(o, "svg"), a = document.createElementNS(o, "foreignObject");
    return i.setAttributeNS(null, "width", A.toString()), i.setAttributeNS(null, "height", e.toString()), a.setAttributeNS(null, "width", "100%"), a.setAttributeNS(null, "height", "100%"), a.setAttributeNS(null, "x", t.toString()), a.setAttributeNS(null, "y", r.toString()), a.setAttributeNS(null, "externalResourcesRequired", "true"), i.appendChild(a), a.appendChild(n), i;
  }, bu = function(A) {
    return new Promise(function(e, t) {
      var r = new Image();
      r.onload = function() {
        return e(r);
      }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(A));
    });
  }, ce = {
    get SUPPORT_RANGE_BOUNDS() {
      var A = JF(document);
      return Object.defineProperty(ce, "SUPPORT_RANGE_BOUNDS", {
        value: A
      }), A;
    },
    get SUPPORT_WORD_BREAKING() {
      var A = ce.SUPPORT_RANGE_BOUNDS && ZF(document);
      return Object.defineProperty(ce, "SUPPORT_WORD_BREAKING", {
        value: A
      }), A;
    },
    get SUPPORT_SVG_DRAWING() {
      var A = eU(document);
      return Object.defineProperty(ce, "SUPPORT_SVG_DRAWING", {
        value: A
      }), A;
    },
    get SUPPORT_FOREIGNOBJECT_DRAWING() {
      var A = typeof Array.from == "function" && typeof window.fetch == "function" ? tU(document) : Promise.resolve(false);
      return Object.defineProperty(ce, "SUPPORT_FOREIGNOBJECT_DRAWING", {
        value: A
      }), A;
    },
    get SUPPORT_CORS_IMAGES() {
      var A = qF();
      return Object.defineProperty(ce, "SUPPORT_CORS_IMAGES", {
        value: A
      }), A;
    },
    get SUPPORT_RESPONSE_TYPE() {
      var A = AU();
      return Object.defineProperty(ce, "SUPPORT_RESPONSE_TYPE", {
        value: A
      }), A;
    },
    get SUPPORT_CORS_XHR() {
      var A = "withCredentials" in new XMLHttpRequest();
      return Object.defineProperty(ce, "SUPPORT_CORS_XHR", {
        value: A
      }), A;
    },
    get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
      var A = !!(typeof Intl < "u" && Intl.Segmenter);
      return Object.defineProperty(ce, "SUPPORT_NATIVE_TEXT_SEGMENTATION", {
        value: A
      }), A;
    }
  }, sn = /* @__PURE__ */ (function() {
    function A(e, t) {
      this.text = e, this.bounds = t;
    }
    return A;
  })(), rU = function(A, e, t, r) {
    var n = iU(e, t), o = [], i = 0;
    return n.forEach(function(a) {
      if (t.textDecorationLine.length || a.trim().length > 0) if (ce.SUPPORT_RANGE_BOUNDS) {
        var s = Qu(r, i, a.length).getClientRects();
        if (s.length > 1) {
          var l = El(a), c = 0;
          l.forEach(function(d) {
            o.push(new sn(d, wt.fromDOMRectList(A, Qu(r, c + i, d.length).getClientRects()))), c += d.length;
          });
        } else o.push(new sn(a, wt.fromDOMRectList(A, s)));
      } else {
        var u = r.splitText(a.length);
        o.push(new sn(a, nU(A, r))), r = u;
      }
      else ce.SUPPORT_RANGE_BOUNDS || (r = r.splitText(a.length));
      i += a.length;
    }), o;
  }, nU = function(A, e) {
    var t = e.ownerDocument;
    if (t) {
      var r = t.createElement("html2canvaswrapper");
      r.appendChild(e.cloneNode(true));
      var n = e.parentNode;
      if (n) {
        n.replaceChild(r, e);
        var o = Wi(A, r);
        return r.firstChild && n.replaceChild(r.firstChild, r), o;
      }
    }
    return wt.EMPTY;
  }, Qu = function(A, e, t) {
    var r = A.ownerDocument;
    if (!r) throw new Error("Node has no owner document");
    var n = r.createRange();
    return n.setStart(A, e), n.setEnd(A, e + t), n;
  }, El = function(A) {
    if (ce.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
      var e = new Intl.Segmenter(void 0, {
        granularity: "grapheme"
      });
      return Array.from(e.segment(A)).map(function(t) {
        return t.segment;
      });
    }
    return YF(A);
  }, oU = function(A, e) {
    if (ce.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
      var t = new Intl.Segmenter(void 0, {
        granularity: "word"
      });
      return Array.from(t.segment(A)).map(function(r) {
        return r.segment;
      });
    }
    return sU(A, e);
  }, iU = function(A, e) {
    return e.letterSpacing !== 0 ? El(A) : oU(A, e);
  }, aU = [
    32,
    160,
    4961,
    65792,
    65793,
    4153,
    4241
  ], sU = function(A, e) {
    for (var t = Ry(A, {
      lineBreak: e.lineBreak,
      wordBreak: e.overflowWrap === "break-word" ? "break-word" : e.wordBreak
    }), r = [], n, o = function() {
      if (n.value) {
        var i = n.value.slice(), a = ji(i), s = "";
        a.forEach(function(l) {
          aU.indexOf(l) === -1 ? s += JA(l) : (s.length && r.push(s), r.push(JA(l)), s = "");
        }), s.length && r.push(s);
      }
    }; !(n = t.next()).done; ) o();
    return r;
  }, lU = /* @__PURE__ */ (function() {
    function A(e, t, r) {
      this.text = cU(t.data, r.textTransform), this.textBounds = rU(e, this.text, r, t);
    }
    return A;
  })(), cU = function(A, e) {
    switch (e) {
      case 1:
        return A.toLowerCase();
      case 3:
        return A.replace(uU, dU);
      case 2:
        return A.toUpperCase();
      default:
        return A;
    }
  }, uU = /(^|\s|:|-|\(|\))([a-z])/g, dU = function(A, e, t) {
    return A.length > 0 ? e + t.toUpperCase() : A;
  }, Jf = (function(A) {
    Ge(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.src = r.currentSrc || r.src, n.intrinsicWidth = r.naturalWidth, n.intrinsicHeight = r.naturalHeight, n.context.cache.addImage(n.src), n;
    }
    return e;
  })(lt), Zf = (function(A) {
    Ge(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.canvas = r, n.intrinsicWidth = r.width, n.intrinsicHeight = r.height, n;
    }
    return e;
  })(lt), qf = (function(A) {
    Ge(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this, o = new XMLSerializer(), i = Wi(t, r);
      return r.setAttribute("width", i.width + "px"), r.setAttribute("height", i.height + "px"), n.svg = "data:image/svg+xml," + encodeURIComponent(o.serializeToString(r)), n.intrinsicWidth = r.width.baseVal.value, n.intrinsicHeight = r.height.baseVal.value, n.context.cache.addImage(n.svg), n;
    }
    return e;
  })(lt), Ap = (function(A) {
    Ge(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.value = r.value, n;
    }
    return e;
  })(lt), xs = (function(A) {
    Ge(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.start = r.start, n.reversed = typeof r.reversed == "boolean" && r.reversed === true, n;
    }
    return e;
  })(lt), fU = [
    {
      type: 15,
      flags: 0,
      unit: "px",
      number: 3
    }
  ], pU = [
    {
      type: 16,
      flags: 0,
      number: 50
    }
  ], gU = function(A) {
    return A.width > A.height ? new wt(A.left + (A.width - A.height) / 2, A.top, A.height, A.height) : A.width < A.height ? new wt(A.left, A.top + (A.height - A.width) / 2, A.width, A.width) : A;
  }, hU = function(A) {
    var e = A.type === BU ? new Array(A.value.length + 1).join("\u2022") : A.value;
    return e.length === 0 ? A.placeholder || "" : e;
  }, Xo = "checkbox", Yo = "radio", BU = "password", Fu = 707406591, Il = (function(A) {
    Ge(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      switch (n.type = r.type.toLowerCase(), n.checked = r.checked, n.value = hU(r), (n.type === Xo || n.type === Yo) && (n.styles.backgroundColor = 3739148031, n.styles.borderTopColor = n.styles.borderRightColor = n.styles.borderBottomColor = n.styles.borderLeftColor = 2779096575, n.styles.borderTopWidth = n.styles.borderRightWidth = n.styles.borderBottomWidth = n.styles.borderLeftWidth = 1, n.styles.borderTopStyle = n.styles.borderRightStyle = n.styles.borderBottomStyle = n.styles.borderLeftStyle = 1, n.styles.backgroundClip = [
        0
      ], n.styles.backgroundOrigin = [
        0
      ], n.bounds = gU(n.bounds)), n.type) {
        case Xo:
          n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = fU;
          break;
        case Yo:
          n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = pU;
          break;
      }
      return n;
    }
    return e;
  })(lt), ep = (function(A) {
    Ge(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this, o = r.options[r.selectedIndex || 0];
      return n.value = o && o.text || "", n;
    }
    return e;
  })(lt), tp = (function(A) {
    Ge(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.value = r.value, n;
    }
    return e;
  })(lt), rp = (function(A) {
    Ge(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      n.src = r.src, n.width = parseInt(r.width, 10) || 0, n.height = parseInt(r.height, 10) || 0, n.backgroundColor = n.styles.backgroundColor;
      try {
        if (r.contentWindow && r.contentWindow.document && r.contentWindow.document.documentElement) {
          n.tree = op(t, r.contentWindow.document.documentElement);
          var o = r.contentWindow.document.documentElement ? on(t, getComputedStyle(r.contentWindow.document.documentElement).backgroundColor) : ht.TRANSPARENT, i = r.contentWindow.document.body ? on(t, getComputedStyle(r.contentWindow.document.body).backgroundColor) : ht.TRANSPARENT;
          n.backgroundColor = kt(o) ? kt(i) ? n.styles.backgroundColor : i : o;
        }
      } catch {
      }
      return n;
    }
    return e;
  })(lt), mU = [
    "OL",
    "UL",
    "MENU"
  ], Io = function(A, e, t, r) {
    for (var n = e.firstChild, o = void 0; n; n = o) if (o = n.nextSibling, ip(n) && n.data.trim().length > 0) t.textNodes.push(new lU(A, n, t.styles));
    else if (mr(n)) if (cp(n) && n.assignedNodes) n.assignedNodes().forEach(function(a) {
      return Io(A, a, t, r);
    });
    else {
      var i = np(A, n);
      i.styles.isVisible() && (vU(n, i, r) ? i.flags |= 4 : wU(i.styles) && (i.flags |= 2), mU.indexOf(n.tagName) !== -1 && (i.flags |= 8), t.elements.push(i), n.slot, n.shadowRoot ? Io(A, n.shadowRoot, i, r) : !Jo(n) && !ap(n) && !Zo(n) && Io(A, n, i, r));
    }
  }, np = function(A, e) {
    return Is(e) ? new Jf(A, e) : sp(e) ? new Zf(A, e) : ap(e) ? new qf(A, e) : CU(e) ? new Ap(A, e) : yU(e) ? new xs(A, e) : bU(e) ? new Il(A, e) : Zo(e) ? new ep(A, e) : Jo(e) ? new tp(A, e) : lp(e) ? new rp(A, e) : new lt(A, e);
  }, op = function(A, e) {
    var t = np(A, e);
    return t.flags |= 4, Io(A, e, t, t), t;
  }, vU = function(A, e, t) {
    return e.styles.isPositionedWithZIndex() || e.styles.opacity < 1 || e.styles.isTransformed() || Hl(A) && t.styles.isTransparent();
  }, wU = function(A) {
    return A.isPositioned() || A.isFloating();
  }, ip = function(A) {
    return A.nodeType === Node.TEXT_NODE;
  }, mr = function(A) {
    return A.nodeType === Node.ELEMENT_NODE;
  }, Es = function(A) {
    return mr(A) && typeof A.style < "u" && !Ho(A);
  }, Ho = function(A) {
    return typeof A.className == "object";
  }, CU = function(A) {
    return A.tagName === "LI";
  }, yU = function(A) {
    return A.tagName === "OL";
  }, bU = function(A) {
    return A.tagName === "INPUT";
  }, QU = function(A) {
    return A.tagName === "HTML";
  }, ap = function(A) {
    return A.tagName === "svg";
  }, Hl = function(A) {
    return A.tagName === "BODY";
  }, sp = function(A) {
    return A.tagName === "CANVAS";
  }, Uu = function(A) {
    return A.tagName === "VIDEO";
  }, Is = function(A) {
    return A.tagName === "IMG";
  }, lp = function(A) {
    return A.tagName === "IFRAME";
  }, Su = function(A) {
    return A.tagName === "STYLE";
  }, FU = function(A) {
    return A.tagName === "SCRIPT";
  }, Jo = function(A) {
    return A.tagName === "TEXTAREA";
  }, Zo = function(A) {
    return A.tagName === "SELECT";
  }, cp = function(A) {
    return A.tagName === "SLOT";
  }, xu = function(A) {
    return A.tagName.indexOf("-") > 0;
  }, UU = (function() {
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
  })(), Eu = {
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
  }, Iu = {
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
  }, SU = {
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
  }, xU = {
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
  }, lr = function(A, e, t, r, n, o) {
    return A < e || A > t ? vn(A, n, o.length > 0) : r.integers.reduce(function(i, a, s) {
      for (; A >= a; ) A -= a, i += r.values[s];
      return i;
    }, "") + o;
  }, up = function(A, e, t, r) {
    var n = "";
    do
      t || A--, n = r(A) + n, A /= e;
    while (A * e >= e);
    return n;
  }, YA = function(A, e, t, r, n) {
    var o = t - e + 1;
    return (A < 0 ? "-" : "") + (up(Math.abs(A), o, r, function(i) {
      return JA(Math.floor(i % o) + e);
    }) + n);
  }, Pt = function(A, e, t) {
    t === void 0 && (t = ". ");
    var r = e.length;
    return up(Math.abs(A), r, false, function(n) {
      return e[Math.floor(n % r)];
    }) + t;
  }, gr = 1, bt = 2, Qt = 4, Zr = 8, pt = function(A, e, t, r, n, o) {
    if (A < -9999 || A > 9999) return vn(A, 4, n.length > 0);
    var i = Math.abs(A), a = n;
    if (i === 0) return e[0] + a;
    for (var s = 0; i > 0 && s <= 4; s++) {
      var l = i % 10;
      l === 0 && ne(o, gr) && a !== "" ? a = e[l] + a : l > 1 || l === 1 && s === 0 || l === 1 && s === 1 && ne(o, bt) || l === 1 && s === 1 && ne(o, Qt) && A > 100 || l === 1 && s > 1 && ne(o, Zr) ? a = e[l] + (s > 0 ? t[s - 1] : "") + a : l === 1 && s > 0 && (a = t[s - 1] + a), i = Math.floor(i / 10);
    }
    return (A < 0 ? r : "") + a;
  }, Hu = "\u5341\u767E\u5343\u842C", Tu = "\u62FE\u4F70\u4EDF\u842C", ku = "\u30DE\u30A4\u30CA\u30B9", La = "\uB9C8\uC774\uB108\uC2A4", vn = function(A, e, t) {
    var r = t ? ". " : "", n = t ? "\u3001" : "", o = t ? ", " : "", i = t ? " " : "";
    switch (e) {
      case 0:
        return "\u2022" + i;
      case 1:
        return "\u25E6" + i;
      case 2:
        return "\u25FE" + i;
      case 5:
        var a = YA(A, 48, 57, true, r);
        return a.length < 4 ? "0" + a : a;
      case 4:
        return Pt(A, "\u3007\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", n);
      case 6:
        return lr(A, 1, 3999, Eu, 3, r).toLowerCase();
      case 7:
        return lr(A, 1, 3999, Eu, 3, r);
      case 8:
        return YA(A, 945, 969, false, r);
      case 9:
        return YA(A, 97, 122, false, r);
      case 10:
        return YA(A, 65, 90, false, r);
      case 11:
        return YA(A, 1632, 1641, true, r);
      case 12:
      case 49:
        return lr(A, 1, 9999, Iu, 3, r);
      case 35:
        return lr(A, 1, 9999, Iu, 3, r).toLowerCase();
      case 13:
        return YA(A, 2534, 2543, true, r);
      case 14:
      case 30:
        return YA(A, 6112, 6121, true, r);
      case 15:
        return Pt(A, "\u5B50\u4E11\u5BC5\u536F\u8FB0\u5DF3\u5348\u672A\u7533\u9149\u620C\u4EA5", n);
      case 16:
        return Pt(A, "\u7532\u4E59\u4E19\u4E01\u620A\u5DF1\u5E9A\u8F9B\u58EC\u7678", n);
      case 17:
      case 48:
        return pt(A, "\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", Hu, "\u8CA0", n, bt | Qt | Zr);
      case 47:
        return pt(A, "\u96F6\u58F9\u8CB3\u53C3\u8086\u4F0D\u9678\u67D2\u634C\u7396", Tu, "\u8CA0", n, gr | bt | Qt | Zr);
      case 42:
        return pt(A, "\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", Hu, "\u8D1F", n, bt | Qt | Zr);
      case 41:
        return pt(A, "\u96F6\u58F9\u8D30\u53C1\u8086\u4F0D\u9646\u67D2\u634C\u7396", Tu, "\u8D1F", n, gr | bt | Qt | Zr);
      case 26:
        return pt(A, "\u3007\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u5341\u767E\u5343\u4E07", ku, n, 0);
      case 25:
        return pt(A, "\u96F6\u58F1\u5F10\u53C2\u56DB\u4F0D\u516D\u4E03\u516B\u4E5D", "\u62FE\u767E\u5343\u4E07", ku, n, gr | bt | Qt);
      case 31:
        return pt(A, "\uC601\uC77C\uC774\uC0BC\uC0AC\uC624\uC721\uCE60\uD314\uAD6C", "\uC2ED\uBC31\uCC9C\uB9CC", La, o, gr | bt | Qt);
      case 33:
        return pt(A, "\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u5341\u767E\u5343\u842C", La, o, 0);
      case 32:
        return pt(A, "\u96F6\u58F9\u8CB3\u53C3\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u62FE\u767E\u5343", La, o, gr | bt | Qt);
      case 18:
        return YA(A, 2406, 2415, true, r);
      case 20:
        return lr(A, 1, 19999, xU, 3, r);
      case 21:
        return YA(A, 2790, 2799, true, r);
      case 22:
        return YA(A, 2662, 2671, true, r);
      case 22:
        return lr(A, 1, 10999, SU, 3, r);
      case 23:
        return Pt(A, "\u3042\u3044\u3046\u3048\u304A\u304B\u304D\u304F\u3051\u3053\u3055\u3057\u3059\u305B\u305D\u305F\u3061\u3064\u3066\u3068\u306A\u306B\u306C\u306D\u306E\u306F\u3072\u3075\u3078\u307B\u307E\u307F\u3080\u3081\u3082\u3084\u3086\u3088\u3089\u308A\u308B\u308C\u308D\u308F\u3090\u3091\u3092\u3093");
      case 24:
        return Pt(A, "\u3044\u308D\u306F\u306B\u307B\u3078\u3068\u3061\u308A\u306C\u308B\u3092\u308F\u304B\u3088\u305F\u308C\u305D\u3064\u306D\u306A\u3089\u3080\u3046\u3090\u306E\u304A\u304F\u3084\u307E\u3051\u3075\u3053\u3048\u3066\u3042\u3055\u304D\u3086\u3081\u307F\u3057\u3091\u3072\u3082\u305B\u3059");
      case 27:
        return YA(A, 3302, 3311, true, r);
      case 28:
        return Pt(A, "\u30A2\u30A4\u30A6\u30A8\u30AA\u30AB\u30AD\u30AF\u30B1\u30B3\u30B5\u30B7\u30B9\u30BB\u30BD\u30BF\u30C1\u30C4\u30C6\u30C8\u30CA\u30CB\u30CC\u30CD\u30CE\u30CF\u30D2\u30D5\u30D8\u30DB\u30DE\u30DF\u30E0\u30E1\u30E2\u30E4\u30E6\u30E8\u30E9\u30EA\u30EB\u30EC\u30ED\u30EF\u30F0\u30F1\u30F2\u30F3", n);
      case 29:
        return Pt(A, "\u30A4\u30ED\u30CF\u30CB\u30DB\u30D8\u30C8\u30C1\u30EA\u30CC\u30EB\u30F2\u30EF\u30AB\u30E8\u30BF\u30EC\u30BD\u30C4\u30CD\u30CA\u30E9\u30E0\u30A6\u30F0\u30CE\u30AA\u30AF\u30E4\u30DE\u30B1\u30D5\u30B3\u30A8\u30C6\u30A2\u30B5\u30AD\u30E6\u30E1\u30DF\u30B7\u30F1\u30D2\u30E2\u30BB\u30B9", n);
      case 34:
        return YA(A, 3792, 3801, true, r);
      case 37:
        return YA(A, 6160, 6169, true, r);
      case 38:
        return YA(A, 4160, 4169, true, r);
      case 39:
        return YA(A, 2918, 2927, true, r);
      case 40:
        return YA(A, 1776, 1785, true, r);
      case 43:
        return YA(A, 3046, 3055, true, r);
      case 44:
        return YA(A, 3174, 3183, true, r);
      case 45:
        return YA(A, 3664, 3673, true, r);
      case 46:
        return YA(A, 3872, 3881, true, r);
      default:
        return YA(A, 48, 57, true, r);
    }
  }, dp = "data-html2canvas-ignore", Lu = (function() {
    function A(e, t, r) {
      if (this.context = e, this.options = r, this.scrolledElements = [], this.referenceElement = t, this.counters = new UU(), this.quoteDepth = 0, !t.ownerDocument) throw new Error("Cloned element does not have an owner document");
      this.documentElement = this.cloneNode(t.ownerDocument.documentElement, false);
    }
    return A.prototype.toIFrame = function(e, t) {
      var r = this, n = EU(e, t);
      if (!n.contentWindow) return Promise.reject("Unable to find iframe window");
      var o = e.defaultView.pageXOffset, i = e.defaultView.pageYOffset, a = n.contentWindow, s = a.document, l = TU(n).then(function() {
        return we(r, void 0, void 0, function() {
          var c, u;
          return he(this, function(d) {
            switch (d.label) {
              case 0:
                return this.scrolledElements.forEach(OU), a && (a.scrollTo(t.left, t.top), /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (a.scrollY !== t.top || a.scrollX !== t.left) && (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(a.scrollX - t.left, a.scrollY - t.top, 0, 0))), c = this.options.onclone, u = this.clonedReferenceElement, typeof u > "u" ? [
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
                  HU(s)
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
      return s.open(), s.write(LU(document.doctype) + "<html></html>"), RU(this.referenceElement.ownerDocument, o, i), s.replaceChild(s.adoptNode(this.documentElement), s.documentElement), s.close(), l;
    }, A.prototype.createElementClone = function(e) {
      if (Us(e, 2)) debugger;
      if (sp(e)) return this.createCanvasClone(e);
      if (Uu(e)) return this.createVideoClone(e);
      if (Su(e)) return this.createStyleClone(e);
      var t = e.cloneNode(false);
      return Is(t) && (Is(e) && e.currentSrc && e.currentSrc !== e.src && (t.src = e.currentSrc, t.srcset = ""), t.loading === "lazy" && (t.loading = "eager")), xu(t) ? this.createCustomElementClone(t) : t;
    }, A.prototype.createCustomElementClone = function(e) {
      var t = document.createElement("html2canvascustomelement");
      return Ra(e.style, t), t;
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
      (!mr(t) || !FU(t) && !t.hasAttribute(dp) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(t))) && (!this.options.copyStyles || !mr(t) || !Su(t)) && e.appendChild(this.cloneNode(t, r));
    }, A.prototype.cloneChildNodes = function(e, t, r) {
      for (var n = this, o = e.shadowRoot ? e.shadowRoot.firstChild : e.firstChild; o; o = o.nextSibling) if (mr(o) && cp(o) && typeof o.assignedNodes == "function") {
        var i = o.assignedNodes();
        i.length && i.forEach(function(a) {
          return n.appendChildNode(t, a, r);
        });
      } else this.appendChildNode(t, o, r);
    }, A.prototype.cloneNode = function(e, t) {
      if (ip(e)) return document.createTextNode(e.data);
      if (!e.ownerDocument) return e.cloneNode(false);
      var r = e.ownerDocument.defaultView;
      if (r && mr(e) && (Es(e) || Ho(e))) {
        var n = this.createElementClone(e);
        n.style.transitionProperty = "none";
        var o = r.getComputedStyle(e), i = r.getComputedStyle(e, ":before"), a = r.getComputedStyle(e, ":after");
        this.referenceElement === e && Es(n) && (this.clonedReferenceElement = n), Hl(n) && DU(n);
        var s = this.counters.parse(new uu(this.context, o)), l = this.resolvePseudoContent(e, n, i, ln.BEFORE);
        xu(e) && (t = true), Uu(e) || this.cloneChildNodes(e, n, t), l && n.insertBefore(l, n.firstChild);
        var c = this.resolvePseudoContent(e, n, a, ln.AFTER);
        return c && n.appendChild(c), this.counters.pop(s), (o && (this.options.copyStyles || Ho(e)) && !lp(e) || t) && Ra(o, n), (e.scrollTop !== 0 || e.scrollLeft !== 0) && this.scrolledElements.push([
          n,
          e.scrollLeft,
          e.scrollTop
        ]), (Jo(e) || Zo(e)) && (Jo(n) || Zo(n)) && (n.value = e.value), n;
      }
      return e.cloneNode(false);
    }, A.prototype.resolvePseudoContent = function(e, t, r, n) {
      var o = this;
      if (r) {
        var i = r.content, a = t.ownerDocument;
        if (!(!a || !i || i === "none" || i === "-moz-alt-content" || r.display === "none")) {
          this.counters.parse(new uu(this.context, r));
          var s = new CF(this.context, r), l = a.createElement("html2canvaspseudoelement");
          Ra(r, l), s.content.forEach(function(u) {
            if (u.type === 0) l.appendChild(a.createTextNode(u.value));
            else if (u.type === 22) {
              var d = a.createElement("img");
              d.src = u.value, d.style.opacity = "1", l.appendChild(d);
            } else if (u.type === 18) {
              if (u.name === "attr") {
                var f = u.values.filter(TA);
                f.length && l.appendChild(a.createTextNode(e.getAttribute(f[0].value) || ""));
              } else if (u.name === "counter") {
                var p = u.values.filter(Sr), B = p[0], b = p[1];
                if (B && TA(B)) {
                  var v = o.counters.getCounterValue(B.value), Q = b && TA(b) ? Fs.parse(o.context, b.value) : 3;
                  l.appendChild(a.createTextNode(vn(v, Q, false)));
                }
              } else if (u.name === "counters") {
                var w = u.values.filter(Sr), B = w[0], C = w[1], b = w[2];
                if (B && TA(B)) {
                  var U = o.counters.getCounterValues(B.value), m = b && TA(b) ? Fs.parse(o.context, b.value) : 3, S = C && C.type === 0 ? C.value : "", H = U.map(function(T) {
                    return vn(T, m, false);
                  }).join(S);
                  l.appendChild(a.createTextNode(H));
                }
              }
            } else if (u.type === 20) switch (u.value) {
              case "open-quote":
                l.appendChild(a.createTextNode(cu(s.quotes, o.quoteDepth++, true)));
                break;
              case "close-quote":
                l.appendChild(a.createTextNode(cu(s.quotes, --o.quoteDepth, false)));
                break;
              default:
                l.appendChild(a.createTextNode(u.value));
            }
          }), l.className = Hs + " " + Ts;
          var c = n === ln.BEFORE ? " " + Hs : " " + Ts;
          return Ho(t) ? t.className.baseValue += c : t.className += c, l;
        }
      }
    }, A.destroy = function(e) {
      return e.parentNode ? (e.parentNode.removeChild(e), true) : false;
    }, A;
  })(), ln;
  (function(A) {
    A[A.BEFORE = 0] = "BEFORE", A[A.AFTER = 1] = "AFTER";
  })(ln || (ln = {}));
  var EU = function(A, e) {
    var t = A.createElement("iframe");
    return t.className = "html2canvas-container", t.style.visibility = "hidden", t.style.position = "fixed", t.style.left = "-10000px", t.style.top = "0px", t.style.border = "0", t.width = e.width.toString(), t.height = e.height.toString(), t.scrolling = "no", t.setAttribute(dp, "true"), A.body.appendChild(t), t;
  }, IU = function(A) {
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
  }, HU = function(A) {
    return Promise.all([].slice.call(A.images, 0).map(IU));
  }, TU = function(A) {
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
  }, kU = [
    "all",
    "d",
    "content"
  ], Ra = function(A, e) {
    for (var t = A.length - 1; t >= 0; t--) {
      var r = A.item(t);
      kU.indexOf(r) === -1 && e.style.setProperty(r, A.getPropertyValue(r));
    }
    return e;
  }, LU = function(A) {
    var e = "";
    return A && (e += "<!DOCTYPE ", A.name && (e += A.name), A.internalSubset && (e += A.internalSubset), A.publicId && (e += '"' + A.publicId + '"'), A.systemId && (e += '"' + A.systemId + '"'), e += ">"), e;
  }, RU = function(A, e, t) {
    A && A.defaultView && (e !== A.defaultView.pageXOffset || t !== A.defaultView.pageYOffset) && A.defaultView.scrollTo(e, t);
  }, OU = function(A) {
    var e = A[0], t = A[1], r = A[2];
    e.scrollLeft = t, e.scrollTop = r;
  }, MU = ":before", KU = ":after", Hs = "___html2canvas___pseudoelement_before", Ts = "___html2canvas___pseudoelement_after", Ru = `{
    content: "" !important;
    display: none !important;
}`, DU = function(A) {
    PU(A, "." + Hs + MU + Ru + `
         .` + Ts + KU + Ru);
  }, PU = function(A, e) {
    var t = A.ownerDocument;
    if (t) {
      var r = t.createElement("style");
      r.textContent = e, A.appendChild(r);
    }
  }, fp = (function() {
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
  })(), _U = (function() {
    function A(e, t) {
      this.context = e, this._options = t, this._cache = {};
    }
    return A.prototype.addImage = function(e) {
      var t = Promise.resolve();
      return this.has(e) || (Ma(e) || $U(e)) && (this._cache[e] = this.loadImage(e)).catch(function() {
      }), t;
    }, A.prototype.match = function(e) {
      return this._cache[e];
    }, A.prototype.loadImage = function(e) {
      return we(this, void 0, void 0, function() {
        var t, r, n, o, i = this;
        return he(this, function(a) {
          switch (a.label) {
            case 0:
              return t = fp.isSameOrigin(e), r = !Oa(e) && this._options.useCORS === true && ce.SUPPORT_CORS_IMAGES && !t, n = !Oa(e) && !t && !Ma(e) && typeof this._options.proxy == "string" && ce.SUPPORT_CORS_XHR && !r, !t && this._options.allowTaint === false && !Oa(e) && !Ma(e) && !n && !r ? [
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
                  }, c.onerror = l, (WU(o) || r) && (c.crossOrigin = "anonymous"), c.src = o, c.complete === true && setTimeout(function() {
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
        var a = ce.SUPPORT_RESPONSE_TYPE ? "blob" : "text", s = new XMLHttpRequest();
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
  })(), NU = /^data:image\/svg\+xml/i, GU = /^data:image\/.*;base64,/i, VU = /^data:image\/.*/i, $U = function(A) {
    return ce.SUPPORT_SVG_DRAWING || !jU(A);
  }, Oa = function(A) {
    return VU.test(A);
  }, WU = function(A) {
    return GU.test(A);
  }, Ma = function(A) {
    return A.substr(0, 4) === "blob";
  }, jU = function(A) {
    return A.substr(-3).toLowerCase() === "svg" || NU.test(A);
  }, oA = (function() {
    function A(e, t) {
      this.type = 0, this.x = e, this.y = t;
    }
    return A.prototype.add = function(e, t) {
      return new A(this.x + e, this.y + t);
    }, A;
  })(), cr = function(A, e, t) {
    return new oA(A.x + (e.x - A.x) * t, A.y + (e.y - A.y) * t);
  }, go = (function() {
    function A(e, t, r, n) {
      this.type = 1, this.start = e, this.startControl = t, this.endControl = r, this.end = n;
    }
    return A.prototype.subdivide = function(e, t) {
      var r = cr(this.start, this.startControl, e), n = cr(this.startControl, this.endControl, e), o = cr(this.endControl, this.end, e), i = cr(r, n, e), a = cr(n, o, e), s = cr(i, a, e);
      return t ? new A(this.start, r, i, s) : new A(s, a, o, this.end);
    }, A.prototype.add = function(e, t) {
      return new A(this.start.add(e, t), this.startControl.add(e, t), this.endControl.add(e, t), this.end.add(e, t));
    }, A.prototype.reverse = function() {
      return new A(this.end, this.endControl, this.startControl, this.start);
    }, A;
  })(), Le = function(A) {
    return A.type === 1;
  }, zU = /* @__PURE__ */ (function() {
    function A(e) {
      var t = e.styles, r = e.bounds, n = Yr(t.borderTopLeftRadius, r.width, r.height), o = n[0], i = n[1], a = Yr(t.borderTopRightRadius, r.width, r.height), s = a[0], l = a[1], c = Yr(t.borderBottomRightRadius, r.width, r.height), u = c[0], d = c[1], f = Yr(t.borderBottomLeftRadius, r.width, r.height), p = f[0], B = f[1], b = [];
      b.push((o + s) / r.width), b.push((p + u) / r.width), b.push((i + B) / r.height), b.push((l + d) / r.height);
      var v = Math.max.apply(Math, b);
      v > 1 && (o /= v, i /= v, s /= v, l /= v, u /= v, d /= v, p /= v, B /= v);
      var Q = r.width - s, w = r.height - d, C = r.width - u, U = r.height - B, m = t.borderTopWidth, S = t.borderRightWidth, H = t.borderBottomWidth, I = t.borderLeftWidth, g = KA(t.paddingTop, e.bounds.width), T = KA(t.paddingRight, e.bounds.width), R = KA(t.paddingBottom, e.bounds.width), L = KA(t.paddingLeft, e.bounds.width);
      this.topLeftBorderDoubleOuterBox = o > 0 || i > 0 ? WA(r.left + I / 3, r.top + m / 3, o - I / 3, i - m / 3, EA.TOP_LEFT) : new oA(r.left + I / 3, r.top + m / 3), this.topRightBorderDoubleOuterBox = o > 0 || i > 0 ? WA(r.left + Q, r.top + m / 3, s - S / 3, l - m / 3, EA.TOP_RIGHT) : new oA(r.left + r.width - S / 3, r.top + m / 3), this.bottomRightBorderDoubleOuterBox = u > 0 || d > 0 ? WA(r.left + C, r.top + w, u - S / 3, d - H / 3, EA.BOTTOM_RIGHT) : new oA(r.left + r.width - S / 3, r.top + r.height - H / 3), this.bottomLeftBorderDoubleOuterBox = p > 0 || B > 0 ? WA(r.left + I / 3, r.top + U, p - I / 3, B - H / 3, EA.BOTTOM_LEFT) : new oA(r.left + I / 3, r.top + r.height - H / 3), this.topLeftBorderDoubleInnerBox = o > 0 || i > 0 ? WA(r.left + I * 2 / 3, r.top + m * 2 / 3, o - I * 2 / 3, i - m * 2 / 3, EA.TOP_LEFT) : new oA(r.left + I * 2 / 3, r.top + m * 2 / 3), this.topRightBorderDoubleInnerBox = o > 0 || i > 0 ? WA(r.left + Q, r.top + m * 2 / 3, s - S * 2 / 3, l - m * 2 / 3, EA.TOP_RIGHT) : new oA(r.left + r.width - S * 2 / 3, r.top + m * 2 / 3), this.bottomRightBorderDoubleInnerBox = u > 0 || d > 0 ? WA(r.left + C, r.top + w, u - S * 2 / 3, d - H * 2 / 3, EA.BOTTOM_RIGHT) : new oA(r.left + r.width - S * 2 / 3, r.top + r.height - H * 2 / 3), this.bottomLeftBorderDoubleInnerBox = p > 0 || B > 0 ? WA(r.left + I * 2 / 3, r.top + U, p - I * 2 / 3, B - H * 2 / 3, EA.BOTTOM_LEFT) : new oA(r.left + I * 2 / 3, r.top + r.height - H * 2 / 3), this.topLeftBorderStroke = o > 0 || i > 0 ? WA(r.left + I / 2, r.top + m / 2, o - I / 2, i - m / 2, EA.TOP_LEFT) : new oA(r.left + I / 2, r.top + m / 2), this.topRightBorderStroke = o > 0 || i > 0 ? WA(r.left + Q, r.top + m / 2, s - S / 2, l - m / 2, EA.TOP_RIGHT) : new oA(r.left + r.width - S / 2, r.top + m / 2), this.bottomRightBorderStroke = u > 0 || d > 0 ? WA(r.left + C, r.top + w, u - S / 2, d - H / 2, EA.BOTTOM_RIGHT) : new oA(r.left + r.width - S / 2, r.top + r.height - H / 2), this.bottomLeftBorderStroke = p > 0 || B > 0 ? WA(r.left + I / 2, r.top + U, p - I / 2, B - H / 2, EA.BOTTOM_LEFT) : new oA(r.left + I / 2, r.top + r.height - H / 2), this.topLeftBorderBox = o > 0 || i > 0 ? WA(r.left, r.top, o, i, EA.TOP_LEFT) : new oA(r.left, r.top), this.topRightBorderBox = s > 0 || l > 0 ? WA(r.left + Q, r.top, s, l, EA.TOP_RIGHT) : new oA(r.left + r.width, r.top), this.bottomRightBorderBox = u > 0 || d > 0 ? WA(r.left + C, r.top + w, u, d, EA.BOTTOM_RIGHT) : new oA(r.left + r.width, r.top + r.height), this.bottomLeftBorderBox = p > 0 || B > 0 ? WA(r.left, r.top + U, p, B, EA.BOTTOM_LEFT) : new oA(r.left, r.top + r.height), this.topLeftPaddingBox = o > 0 || i > 0 ? WA(r.left + I, r.top + m, Math.max(0, o - I), Math.max(0, i - m), EA.TOP_LEFT) : new oA(r.left + I, r.top + m), this.topRightPaddingBox = s > 0 || l > 0 ? WA(r.left + Math.min(Q, r.width - S), r.top + m, Q > r.width + S ? 0 : Math.max(0, s - S), Math.max(0, l - m), EA.TOP_RIGHT) : new oA(r.left + r.width - S, r.top + m), this.bottomRightPaddingBox = u > 0 || d > 0 ? WA(r.left + Math.min(C, r.width - I), r.top + Math.min(w, r.height - H), Math.max(0, u - S), Math.max(0, d - H), EA.BOTTOM_RIGHT) : new oA(r.left + r.width - S, r.top + r.height - H), this.bottomLeftPaddingBox = p > 0 || B > 0 ? WA(r.left + I, r.top + Math.min(U, r.height - H), Math.max(0, p - I), Math.max(0, B - H), EA.BOTTOM_LEFT) : new oA(r.left + I, r.top + r.height - H), this.topLeftContentBox = o > 0 || i > 0 ? WA(r.left + I + L, r.top + m + g, Math.max(0, o - (I + L)), Math.max(0, i - (m + g)), EA.TOP_LEFT) : new oA(r.left + I + L, r.top + m + g), this.topRightContentBox = s > 0 || l > 0 ? WA(r.left + Math.min(Q, r.width + I + L), r.top + m + g, Q > r.width + I + L ? 0 : s - I + L, l - (m + g), EA.TOP_RIGHT) : new oA(r.left + r.width - (S + T), r.top + m + g), this.bottomRightContentBox = u > 0 || d > 0 ? WA(r.left + Math.min(C, r.width - (I + L)), r.top + Math.min(w, r.height + m + g), Math.max(0, u - (S + T)), d - (H + R), EA.BOTTOM_RIGHT) : new oA(r.left + r.width - (S + T), r.top + r.height - (H + R)), this.bottomLeftContentBox = p > 0 || B > 0 ? WA(r.left + I + L, r.top + U, Math.max(0, p - (I + L)), B - (H + R), EA.BOTTOM_LEFT) : new oA(r.left + I + L, r.top + r.height - (H + R));
    }
    return A;
  })(), EA;
  (function(A) {
    A[A.TOP_LEFT = 0] = "TOP_LEFT", A[A.TOP_RIGHT = 1] = "TOP_RIGHT", A[A.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", A[A.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
  })(EA || (EA = {}));
  var WA = function(A, e, t, r, n) {
    var o = 4 * ((Math.sqrt(2) - 1) / 3), i = t * o, a = r * o, s = A + t, l = e + r;
    switch (n) {
      case EA.TOP_LEFT:
        return new go(new oA(A, l), new oA(A, l - a), new oA(s - i, e), new oA(s, e));
      case EA.TOP_RIGHT:
        return new go(new oA(A, e), new oA(A + i, e), new oA(s, l - a), new oA(s, l));
      case EA.BOTTOM_RIGHT:
        return new go(new oA(s, e), new oA(s, e + a), new oA(A + i, l), new oA(A, l));
      case EA.BOTTOM_LEFT:
      default:
        return new go(new oA(s, l), new oA(s - i, l), new oA(A, e + a), new oA(A, e));
    }
  }, qo = function(A) {
    return [
      A.topLeftBorderBox,
      A.topRightBorderBox,
      A.bottomRightBorderBox,
      A.bottomLeftBorderBox
    ];
  }, XU = function(A) {
    return [
      A.topLeftContentBox,
      A.topRightContentBox,
      A.bottomRightContentBox,
      A.bottomLeftContentBox
    ];
  }, Ai = function(A) {
    return [
      A.topLeftPaddingBox,
      A.topRightPaddingBox,
      A.bottomRightPaddingBox,
      A.bottomLeftPaddingBox
    ];
  }, YU = /* @__PURE__ */ (function() {
    function A(e, t, r) {
      this.offsetX = e, this.offsetY = t, this.matrix = r, this.type = 0, this.target = 6;
    }
    return A;
  })(), ho = /* @__PURE__ */ (function() {
    function A(e, t) {
      this.path = e, this.target = t, this.type = 1;
    }
    return A;
  })(), JU = /* @__PURE__ */ (function() {
    function A(e) {
      this.opacity = e, this.type = 2, this.target = 6;
    }
    return A;
  })(), ZU = function(A) {
    return A.type === 0;
  }, pp = function(A) {
    return A.type === 1;
  }, qU = function(A) {
    return A.type === 2;
  }, Ou = function(A, e) {
    return A.length === e.length ? A.some(function(t, r) {
      return t === e[r];
    }) : false;
  }, A1 = function(A, e, t, r, n) {
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
  }, gp = /* @__PURE__ */ (function() {
    function A(e) {
      this.element = e, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
    }
    return A;
  })(), hp = (function() {
    function A(e, t) {
      if (this.container = e, this.parent = t, this.effects = [], this.curves = new zU(this.container), this.container.styles.opacity < 1 && this.effects.push(new JU(this.container.styles.opacity)), this.container.styles.transform !== null) {
        var r = this.container.bounds.left + this.container.styles.transformOrigin[0].number, n = this.container.bounds.top + this.container.styles.transformOrigin[1].number, o = this.container.styles.transform;
        this.effects.push(new YU(r, n, o));
      }
      if (this.container.styles.overflowX !== 0) {
        var i = qo(this.curves), a = Ai(this.curves);
        Ou(i, a) ? this.effects.push(new ho(i, 6)) : (this.effects.push(new ho(i, 2)), this.effects.push(new ho(a, 4)));
      }
    }
    return A.prototype.getEffects = function(e) {
      for (var t = [
        2,
        3
      ].indexOf(this.container.styles.position) === -1, r = this.parent, n = this.effects.slice(0); r; ) {
        var o = r.effects.filter(function(s) {
          return !pp(s);
        });
        if (t || r.container.styles.position !== 0 || !r.parent) {
          if (n.unshift.apply(n, o), t = [
            2,
            3
          ].indexOf(r.container.styles.position) === -1, r.container.styles.overflowX !== 0) {
            var i = qo(r.curves), a = Ai(r.curves);
            Ou(i, a) || n.unshift(new ho(a, 6));
          }
        } else n.unshift.apply(n, o);
        r = r.parent;
      }
      return n.filter(function(s) {
        return ne(s.target, e);
      });
    }, A;
  })(), ks = function(A, e, t, r) {
    A.container.elements.forEach(function(n) {
      var o = ne(n.flags, 4), i = ne(n.flags, 2), a = new hp(n, A);
      ne(n.styles.display, 2048) && r.push(a);
      var s = ne(n.flags, 8) ? [] : r;
      if (o || i) {
        var l = o || n.styles.isPositioned() ? t : e, c = new gp(a);
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
        ks(a, c, o ? c : t, s);
      } else n.styles.isInlineLevel() ? e.inlineLevel.push(a) : e.nonInlineLevel.push(a), ks(a, e, t, s);
      ne(n.flags, 8) && Bp(n, s);
    });
  }, Bp = function(A, e) {
    for (var t = A instanceof xs ? A.start : 1, r = A instanceof xs ? A.reversed : false, n = 0; n < e.length; n++) {
      var o = e[n];
      o.container instanceof Ap && typeof o.container.value == "number" && o.container.value !== 0 && (t = o.container.value), o.listValue = vn(t, o.container.styles.listStyleType, true), t += r ? -1 : 1;
    }
  }, e1 = function(A) {
    var e = new hp(A, null), t = new gp(e), r = [];
    return ks(e, t, t, r), Bp(e.container, r), t;
  }, Mu = function(A, e) {
    switch (e) {
      case 0:
        return Me(A.topLeftBorderBox, A.topLeftPaddingBox, A.topRightBorderBox, A.topRightPaddingBox);
      case 1:
        return Me(A.topRightBorderBox, A.topRightPaddingBox, A.bottomRightBorderBox, A.bottomRightPaddingBox);
      case 2:
        return Me(A.bottomRightBorderBox, A.bottomRightPaddingBox, A.bottomLeftBorderBox, A.bottomLeftPaddingBox);
      default:
        return Me(A.bottomLeftBorderBox, A.bottomLeftPaddingBox, A.topLeftBorderBox, A.topLeftPaddingBox);
    }
  }, t1 = function(A, e) {
    switch (e) {
      case 0:
        return Me(A.topLeftBorderBox, A.topLeftBorderDoubleOuterBox, A.topRightBorderBox, A.topRightBorderDoubleOuterBox);
      case 1:
        return Me(A.topRightBorderBox, A.topRightBorderDoubleOuterBox, A.bottomRightBorderBox, A.bottomRightBorderDoubleOuterBox);
      case 2:
        return Me(A.bottomRightBorderBox, A.bottomRightBorderDoubleOuterBox, A.bottomLeftBorderBox, A.bottomLeftBorderDoubleOuterBox);
      default:
        return Me(A.bottomLeftBorderBox, A.bottomLeftBorderDoubleOuterBox, A.topLeftBorderBox, A.topLeftBorderDoubleOuterBox);
    }
  }, r1 = function(A, e) {
    switch (e) {
      case 0:
        return Me(A.topLeftBorderDoubleInnerBox, A.topLeftPaddingBox, A.topRightBorderDoubleInnerBox, A.topRightPaddingBox);
      case 1:
        return Me(A.topRightBorderDoubleInnerBox, A.topRightPaddingBox, A.bottomRightBorderDoubleInnerBox, A.bottomRightPaddingBox);
      case 2:
        return Me(A.bottomRightBorderDoubleInnerBox, A.bottomRightPaddingBox, A.bottomLeftBorderDoubleInnerBox, A.bottomLeftPaddingBox);
      default:
        return Me(A.bottomLeftBorderDoubleInnerBox, A.bottomLeftPaddingBox, A.topLeftBorderDoubleInnerBox, A.topLeftPaddingBox);
    }
  }, n1 = function(A, e) {
    switch (e) {
      case 0:
        return Bo(A.topLeftBorderStroke, A.topRightBorderStroke);
      case 1:
        return Bo(A.topRightBorderStroke, A.bottomRightBorderStroke);
      case 2:
        return Bo(A.bottomRightBorderStroke, A.bottomLeftBorderStroke);
      default:
        return Bo(A.bottomLeftBorderStroke, A.topLeftBorderStroke);
    }
  }, Bo = function(A, e) {
    var t = [];
    return Le(A) ? t.push(A.subdivide(0.5, false)) : t.push(A), Le(e) ? t.push(e.subdivide(0.5, true)) : t.push(e), t;
  }, Me = function(A, e, t, r) {
    var n = [];
    return Le(A) ? n.push(A.subdivide(0.5, false)) : n.push(A), Le(t) ? n.push(t.subdivide(0.5, true)) : n.push(t), Le(r) ? n.push(r.subdivide(0.5, true).reverse()) : n.push(r), Le(e) ? n.push(e.subdivide(0.5, false).reverse()) : n.push(e), n;
  }, mp = function(A) {
    var e = A.bounds, t = A.styles;
    return e.add(t.borderLeftWidth, t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth), -(t.borderTopWidth + t.borderBottomWidth));
  }, ei = function(A) {
    var e = A.styles, t = A.bounds, r = KA(e.paddingLeft, t.width), n = KA(e.paddingRight, t.width), o = KA(e.paddingTop, t.width), i = KA(e.paddingBottom, t.width);
    return t.add(r + e.borderLeftWidth, o + e.borderTopWidth, -(e.borderRightWidth + e.borderLeftWidth + r + n), -(e.borderTopWidth + e.borderBottomWidth + o + i));
  }, o1 = function(A, e) {
    return A === 0 ? e.bounds : A === 2 ? ei(e) : mp(e);
  }, i1 = function(A, e) {
    return A === 0 ? e.bounds : A === 2 ? ei(e) : mp(e);
  }, Ka = function(A, e, t) {
    var r = o1(hr(A.styles.backgroundOrigin, e), A), n = i1(hr(A.styles.backgroundClip, e), A), o = a1(hr(A.styles.backgroundSize, e), t, r), i = o[0], a = o[1], s = Yr(hr(A.styles.backgroundPosition, e), r.width - i, r.height - a), l = s1(hr(A.styles.backgroundRepeat, e), s, o, r, n), c = Math.round(r.left + s[0]), u = Math.round(r.top + s[1]);
    return [
      l,
      c,
      u,
      i,
      a
    ];
  }, ur = function(A) {
    return TA(A) && A.value === yr.AUTO;
  }, mo = function(A) {
    return typeof A == "number";
  }, a1 = function(A, e, t) {
    var r = e[0], n = e[1], o = e[2], i = A[0], a = A[1];
    if (!i) return [
      0,
      0
    ];
    if (ee(i) && a && ee(a)) return [
      KA(i, t.width),
      KA(a, t.height)
    ];
    var s = mo(o);
    if (TA(i) && (i.value === yr.CONTAIN || i.value === yr.COVER)) {
      if (mo(o)) {
        var l = t.width / t.height;
        return l < o != (i.value === yr.COVER) ? [
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
    var c = mo(r), u = mo(n), d = c || u;
    if (ur(i) && (!a || ur(a))) {
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
      var B = c ? r : t.width, b = u ? n : t.height;
      return [
        B,
        b
      ];
    }
    if (s) {
      var v = 0, Q = 0;
      return ee(i) ? v = KA(i, t.width) : ee(a) && (Q = KA(a, t.height)), ur(i) ? v = Q * o : (!a || ur(a)) && (Q = v / o), [
        v,
        Q
      ];
    }
    var w = null, C = null;
    if (ee(i) ? w = KA(i, t.width) : a && ee(a) && (C = KA(a, t.height)), w !== null && (!a || ur(a)) && (C = c && u ? w / r * n : t.height), C !== null && ur(i) && (w = c && u ? C / n * r : t.width), w !== null && C !== null) return [
      w,
      C
    ];
    throw new Error("Unable to calculate background-size for element");
  }, hr = function(A, e) {
    var t = A[e];
    return typeof t > "u" ? A[0] : t;
  }, s1 = function(A, e, t, r, n) {
    var o = e[0], i = e[1], a = t[0], s = t[1];
    switch (A) {
      case 2:
        return [
          new oA(Math.round(r.left), Math.round(r.top + i)),
          new oA(Math.round(r.left + r.width), Math.round(r.top + i)),
          new oA(Math.round(r.left + r.width), Math.round(s + r.top + i)),
          new oA(Math.round(r.left), Math.round(s + r.top + i))
        ];
      case 3:
        return [
          new oA(Math.round(r.left + o), Math.round(r.top)),
          new oA(Math.round(r.left + o + a), Math.round(r.top)),
          new oA(Math.round(r.left + o + a), Math.round(r.height + r.top)),
          new oA(Math.round(r.left + o), Math.round(r.height + r.top))
        ];
      case 1:
        return [
          new oA(Math.round(r.left + o), Math.round(r.top + i)),
          new oA(Math.round(r.left + o + a), Math.round(r.top + i)),
          new oA(Math.round(r.left + o + a), Math.round(r.top + i + s)),
          new oA(Math.round(r.left + o), Math.round(r.top + i + s))
        ];
      default:
        return [
          new oA(Math.round(n.left), Math.round(n.top)),
          new oA(Math.round(n.left + n.width), Math.round(n.top)),
          new oA(Math.round(n.left + n.width), Math.round(n.height + n.top)),
          new oA(Math.round(n.left), Math.round(n.height + n.top))
        ];
    }
  }, l1 = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", Ku = "Hidden Text", c1 = (function() {
    function A(e) {
      this._data = {}, this._document = e;
    }
    return A.prototype.parseMetrics = function(e, t) {
      var r = this._document.createElement("div"), n = this._document.createElement("img"), o = this._document.createElement("span"), i = this._document.body;
      r.style.visibility = "hidden", r.style.fontFamily = e, r.style.fontSize = t, r.style.margin = "0", r.style.padding = "0", r.style.whiteSpace = "nowrap", i.appendChild(r), n.src = l1, n.width = 1, n.height = 1, n.style.margin = "0", n.style.padding = "0", n.style.verticalAlign = "baseline", o.style.fontFamily = e, o.style.fontSize = t, o.style.margin = "0", o.style.padding = "0", o.appendChild(this._document.createTextNode(Ku)), r.appendChild(o), r.appendChild(n);
      var a = n.offsetTop - o.offsetTop + 2;
      r.removeChild(o), r.appendChild(this._document.createTextNode(Ku)), r.style.lineHeight = "normal", n.style.verticalAlign = "super";
      var s = n.offsetTop - r.offsetTop + 2;
      return i.removeChild(r), {
        baseline: a,
        middle: s
      };
    }, A.prototype.getMetrics = function(e, t) {
      var r = e + " " + t;
      return typeof this._data[r] > "u" && (this._data[r] = this.parseMetrics(e, t)), this._data[r];
    }, A;
  })(), vp = /* @__PURE__ */ (function() {
    function A(e, t) {
      this.context = e, this.options = t;
    }
    return A;
  })(), u1 = 1e4, d1 = (function(A) {
    Ge(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n._activeEffects = [], n.canvas = r.canvas ? r.canvas : document.createElement("canvas"), n.ctx = n.canvas.getContext("2d"), r.canvas || (n.canvas.width = Math.floor(r.width * r.scale), n.canvas.height = Math.floor(r.height * r.scale), n.canvas.style.width = r.width + "px", n.canvas.style.height = r.height + "px"), n.fontMetrics = new c1(document), n.ctx.scale(n.options.scale, n.options.scale), n.ctx.translate(-r.x, -r.y), n.ctx.textBaseline = "bottom", n._activeEffects = [], n.context.logger.debug("Canvas renderer initialized (" + r.width + "x" + r.height + ") with scale " + r.scale), n;
    }
    return e.prototype.applyEffects = function(t) {
      for (var r = this; this._activeEffects.length; ) this.popEffect();
      t.forEach(function(n) {
        return r.applyEffect(n);
      });
    }, e.prototype.applyEffect = function(t) {
      this.ctx.save(), qU(t) && (this.ctx.globalAlpha = t.opacity), ZU(t) && (this.ctx.translate(t.offsetX, t.offsetY), this.ctx.transform(t.matrix[0], t.matrix[1], t.matrix[2], t.matrix[3], t.matrix[4], t.matrix[5]), this.ctx.translate(-t.offsetX, -t.offsetY)), pp(t) && (this.path(t.path), this.ctx.clip()), this._activeEffects.push(t);
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
              if (ne(t.container.flags, 16)) debugger;
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
        var i = El(t.text);
        i.reduce(function(a, s) {
          return o.ctx.fillText(s, a, t.bounds.top + n), a + o.ctx.measureText(s).width;
        }, t.bounds.left);
      }
    }, e.prototype.createFontStyle = function(t) {
      var r = t.fontVariant.filter(function(i) {
        return i === "normal" || i === "small-caps";
      }).join(""), n = B1(t.fontFamily).join(", "), o = Hn(t.fontSize) ? "" + t.fontSize.number + t.fontSize.unit : t.fontSize.number + "px";
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
                  d.ctx.fillStyle = oe(r.color), d.renderTextWithLetterSpacing(p, r.letterSpacing, l);
                  var b = r.textShadow;
                  b.length && p.text.trim().length && (b.slice(0).reverse().forEach(function(v) {
                    d.ctx.shadowColor = oe(v.color), d.ctx.shadowOffsetX = v.offsetX.number * d.options.scale, d.ctx.shadowOffsetY = v.offsetY.number * d.options.scale, d.ctx.shadowBlur = v.blur.number, d.renderTextWithLetterSpacing(p, r.letterSpacing, l);
                  }), d.ctx.shadowColor = "", d.ctx.shadowOffsetX = 0, d.ctx.shadowOffsetY = 0, d.ctx.shadowBlur = 0), r.textDecorationLine.length && (d.ctx.fillStyle = oe(r.textDecorationColor || r.color), r.textDecorationLine.forEach(function(v) {
                    switch (v) {
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
                  r.webkitTextStrokeWidth && p.text.trim().length && (d.ctx.strokeStyle = oe(r.webkitTextStrokeColor), d.ctx.lineWidth = r.webkitTextStrokeWidth, d.ctx.lineJoin = window.chrome ? "miter" : "round", d.ctx.strokeText(p.text, p.bounds.left, p.bounds.top + l)), d.ctx.strokeStyle = "", d.ctx.lineWidth = 0, d.ctx.lineJoin = "miter";
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
        var o = ei(t), i = Ai(r);
        this.path(i), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(n, 0, 0, t.intrinsicWidth, t.intrinsicHeight, o.left, o.top, o.width, o.height), this.ctx.restore();
      }
    }, e.prototype.renderNodeContent = function(t) {
      return we(this, void 0, void 0, function() {
        var r, n, o, i, a, s, Q, Q, l, c, u, d, C, f, p, U, B, b, v, Q, w, C, U;
        return he(this, function(m) {
          switch (m.label) {
            case 0:
              this.applyEffects(t.getEffects(4)), r = t.container, n = t.curves, o = r.styles, i = 0, a = r.textNodes, m.label = 1;
            case 1:
              return i < a.length ? (s = a[i], [
                4,
                this.renderTextNode(s, o)
              ]) : [
                3,
                4
              ];
            case 2:
              m.sent(), m.label = 3;
            case 3:
              return i++, [
                3,
                1
              ];
            case 4:
              if (!(r instanceof Jf)) return [
                3,
                8
              ];
              m.label = 5;
            case 5:
              return m.trys.push([
                5,
                7,
                ,
                8
              ]), [
                4,
                this.context.cache.match(r.src)
              ];
            case 6:
              return Q = m.sent(), this.renderReplacedElement(r, n, Q), [
                3,
                8
              ];
            case 7:
              return m.sent(), this.context.logger.error("Error loading image " + r.src), [
                3,
                8
              ];
            case 8:
              if (r instanceof Zf && this.renderReplacedElement(r, n, r.canvas), !(r instanceof qf)) return [
                3,
                12
              ];
              m.label = 9;
            case 9:
              return m.trys.push([
                9,
                11,
                ,
                12
              ]), [
                4,
                this.context.cache.match(r.svg)
              ];
            case 10:
              return Q = m.sent(), this.renderReplacedElement(r, n, Q), [
                3,
                12
              ];
            case 11:
              return m.sent(), this.context.logger.error("Error loading svg " + r.svg.substring(0, 255)), [
                3,
                12
              ];
            case 12:
              return r instanceof rp && r.tree ? (l = new e(this.context, {
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
              c = m.sent(), r.width && r.height && this.ctx.drawImage(c, 0, 0, r.width, r.height, r.bounds.left, r.bounds.top, r.bounds.width, r.bounds.height), m.label = 14;
            case 14:
              if (r instanceof Il && (u = Math.min(r.bounds.width, r.bounds.height), r.type === Xo ? r.checked && (this.ctx.save(), this.path([
                new oA(r.bounds.left + u * 0.39363, r.bounds.top + u * 0.79),
                new oA(r.bounds.left + u * 0.16, r.bounds.top + u * 0.5549),
                new oA(r.bounds.left + u * 0.27347, r.bounds.top + u * 0.44071),
                new oA(r.bounds.left + u * 0.39694, r.bounds.top + u * 0.5649),
                new oA(r.bounds.left + u * 0.72983, r.bounds.top + u * 0.23),
                new oA(r.bounds.left + u * 0.84, r.bounds.top + u * 0.34085),
                new oA(r.bounds.left + u * 0.39363, r.bounds.top + u * 0.79)
              ]), this.ctx.fillStyle = oe(Fu), this.ctx.fill(), this.ctx.restore()) : r.type === Yo && r.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(r.bounds.left + u / 2, r.bounds.top + u / 2, u / 4, 0, Math.PI * 2, true), this.ctx.fillStyle = oe(Fu), this.ctx.fill(), this.ctx.restore())), f1(r) && r.value.length) {
                switch (d = this.createFontStyle(o), C = d[0], f = d[1], p = this.fontMetrics.getMetrics(C, f).baseline, this.ctx.font = C, this.ctx.fillStyle = oe(o.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = g1(r.styles.textAlign), U = ei(r), B = 0, r.styles.textAlign) {
                  case 1:
                    B += U.width / 2;
                    break;
                  case 2:
                    B += U.width;
                    break;
                }
                b = U.add(B, 0, 0, -U.height / 2 + 1), this.ctx.save(), this.path([
                  new oA(U.left, U.top),
                  new oA(U.left + U.width, U.top),
                  new oA(U.left + U.width, U.top + U.height),
                  new oA(U.left, U.top + U.height)
                ]), this.ctx.clip(), this.renderTextWithLetterSpacing(new sn(r.value, b), o.letterSpacing, p), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
              }
              if (!ne(r.styles.display, 2048)) return [
                3,
                20
              ];
              if (r.styles.listStyleImage === null) return [
                3,
                19
              ];
              if (v = r.styles.listStyleImage, v.type !== 0) return [
                3,
                18
              ];
              Q = void 0, w = v.url, m.label = 15;
            case 15:
              return m.trys.push([
                15,
                17,
                ,
                18
              ]), [
                4,
                this.context.cache.match(w)
              ];
            case 16:
              return Q = m.sent(), this.ctx.drawImage(Q, r.bounds.left - (Q.width + 10), r.bounds.top), [
                3,
                18
              ];
            case 17:
              return m.sent(), this.context.logger.error("Error loading list-style-image " + w), [
                3,
                18
              ];
            case 18:
              return [
                3,
                20
              ];
            case 19:
              t.listValue && r.styles.listStyleType !== -1 && (C = this.createFontStyle(o)[0], this.ctx.font = C, this.ctx.fillStyle = oe(o.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", U = new wt(r.bounds.left, r.bounds.top + KA(r.styles.paddingTop, r.bounds.width), r.bounds.width, su(o.lineHeight, o.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new sn(t.listValue, U), o.letterSpacing, su(o.lineHeight, o.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), m.label = 20;
            case 20:
              return [
                2
              ];
          }
        });
      });
    }, e.prototype.renderStackContent = function(t) {
      return we(this, void 0, void 0, function() {
        var r, n, v, o, i, v, a, s, v, l, c, v, u, d, v, f, p, v, B, b, v;
        return he(this, function(Q) {
          switch (Q.label) {
            case 0:
              if (ne(t.element.container.flags, 16)) debugger;
              return [
                4,
                this.renderNodeBackgroundAndBorders(t.element)
              ];
            case 1:
              Q.sent(), r = 0, n = t.negativeZIndex, Q.label = 2;
            case 2:
              return r < n.length ? (v = n[r], [
                4,
                this.renderStack(v)
              ]) : [
                3,
                5
              ];
            case 3:
              Q.sent(), Q.label = 4;
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
              Q.sent(), o = 0, i = t.nonInlineLevel, Q.label = 7;
            case 7:
              return o < i.length ? (v = i[o], [
                4,
                this.renderNode(v)
              ]) : [
                3,
                10
              ];
            case 8:
              Q.sent(), Q.label = 9;
            case 9:
              return o++, [
                3,
                7
              ];
            case 10:
              a = 0, s = t.nonPositionedFloats, Q.label = 11;
            case 11:
              return a < s.length ? (v = s[a], [
                4,
                this.renderStack(v)
              ]) : [
                3,
                14
              ];
            case 12:
              Q.sent(), Q.label = 13;
            case 13:
              return a++, [
                3,
                11
              ];
            case 14:
              l = 0, c = t.nonPositionedInlineLevel, Q.label = 15;
            case 15:
              return l < c.length ? (v = c[l], [
                4,
                this.renderStack(v)
              ]) : [
                3,
                18
              ];
            case 16:
              Q.sent(), Q.label = 17;
            case 17:
              return l++, [
                3,
                15
              ];
            case 18:
              u = 0, d = t.inlineLevel, Q.label = 19;
            case 19:
              return u < d.length ? (v = d[u], [
                4,
                this.renderNode(v)
              ]) : [
                3,
                22
              ];
            case 20:
              Q.sent(), Q.label = 21;
            case 21:
              return u++, [
                3,
                19
              ];
            case 22:
              f = 0, p = t.zeroOrAutoZIndexOrTransformedOrOpacity, Q.label = 23;
            case 23:
              return f < p.length ? (v = p[f], [
                4,
                this.renderStack(v)
              ]) : [
                3,
                26
              ];
            case 24:
              Q.sent(), Q.label = 25;
            case 25:
              return f++, [
                3,
                23
              ];
            case 26:
              B = 0, b = t.positiveZIndex, Q.label = 27;
            case 27:
              return B < b.length ? (v = b[B], [
                4,
                this.renderStack(v)
              ]) : [
                3,
                30
              ];
            case 28:
              Q.sent(), Q.label = 29;
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
        var i = Le(n) ? n.start : n;
        o === 0 ? r.ctx.moveTo(i.x, i.y) : r.ctx.lineTo(i.x, i.y), Le(n) && r.ctx.bezierCurveTo(n.startControl.x, n.startControl.y, n.endControl.x, n.endControl.y, n.end.x, n.end.y);
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
                var u, d, f, g, O, Y, L, K, H, p, g, O, Y, L, K, B, b, v, Q, w, C, U, m, S, H, I, g, T, R, L, K, M, O, Y, N, P, AA, Z, iA, D, J, j;
                return he(this, function(tA) {
                  switch (tA.label) {
                    case 0:
                      if (c.type !== 0) return [
                        3,
                        5
                      ];
                      u = void 0, d = c.url, tA.label = 1;
                    case 1:
                      return tA.trys.push([
                        1,
                        3,
                        ,
                        4
                      ]), [
                        4,
                        o.context.cache.match(d)
                      ];
                    case 2:
                      return u = tA.sent(), [
                        3,
                        4
                      ];
                    case 3:
                      return tA.sent(), o.context.logger.error("Error loading background-image " + d), [
                        3,
                        4
                      ];
                    case 4:
                      return u && (f = Ka(t, r, [
                        u.width,
                        u.height,
                        u.width / u.height
                      ]), g = f[0], O = f[1], Y = f[2], L = f[3], K = f[4], H = o.ctx.createPattern(o.resizeImage(u, L, K), "repeat"), o.renderRepeat(g, H, O, Y)), [
                        3,
                        6
                      ];
                    case 5:
                      Zb(c) ? (p = Ka(t, r, [
                        null,
                        null,
                        null
                      ]), g = p[0], O = p[1], Y = p[2], L = p[3], K = p[4], B = jb(c.angle, L, K), b = B[0], v = B[1], Q = B[2], w = B[3], C = B[4], U = document.createElement("canvas"), U.width = L, U.height = K, m = U.getContext("2d"), S = m.createLinearGradient(v, w, Q, C), iu(c.stops, b).forEach(function(mA) {
                        return S.addColorStop(mA.stop, oe(mA.color));
                      }), m.fillStyle = S, m.fillRect(0, 0, L, K), L > 0 && K > 0 && (H = o.ctx.createPattern(U, "repeat"), o.renderRepeat(g, H, O, Y))) : qb(c) && (I = Ka(t, r, [
                        null,
                        null,
                        null
                      ]), g = I[0], T = I[1], R = I[2], L = I[3], K = I[4], M = c.position.length === 0 ? [
                        Ul
                      ] : c.position, O = KA(M[0], L), Y = KA(M[M.length - 1], K), N = zb(c, O, Y, L, K), P = N[0], AA = N[1], P > 0 && AA > 0 && (Z = o.ctx.createRadialGradient(T + O, R + Y, 0, T + O, R + Y, P), iu(c.stops, P * 2).forEach(function(mA) {
                        return Z.addColorStop(mA.stop, oe(mA.color));
                      }), o.path(g), o.ctx.fillStyle = Z, P !== AA ? (iA = t.bounds.left + 0.5 * t.bounds.width, D = t.bounds.top + 0.5 * t.bounds.height, J = AA / P, j = 1 / J, o.ctx.save(), o.ctx.translate(iA, D), o.ctx.transform(1, 0, 0, J, 0, 0), o.ctx.translate(-iA, -D), o.ctx.fillRect(T, j * (R - D) + D, L, K * j), o.ctx.restore()) : o.ctx.fill())), tA.label = 6;
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
          return this.path(Mu(n, r)), this.ctx.fillStyle = oe(t), this.ctx.fill(), [
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
              return i = t1(o, n), this.path(i), this.ctx.fillStyle = oe(t), this.ctx.fill(), a = r1(o, n), this.path(a), this.ctx.fill(), [
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
              return this.applyEffects(t.getEffects(2)), r = t.container.styles, n = !kt(r.backgroundColor) || r.backgroundImage.length, o = [
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
              ], i = p1(hr(r.backgroundClip, 0), t.curves), n || r.boxShadow.length ? (this.ctx.save(), this.path(i), this.ctx.clip(), kt(r.backgroundColor) || (this.ctx.fillStyle = oe(r.backgroundColor), this.ctx.fill()), [
                4,
                this.renderBackgroundImage(t.container)
              ]) : [
                3,
                2
              ];
            case 1:
              d.sent(), this.ctx.restore(), r.boxShadow.slice(0).reverse().forEach(function(f) {
                u.ctx.save();
                var p = qo(t.curves), B = f.inset ? 0 : u1, b = A1(p, -B + (f.inset ? 1 : -1) * f.spread.number, (f.inset ? 1 : -1) * f.spread.number, f.spread.number * (f.inset ? -2 : 2), f.spread.number * (f.inset ? -2 : 2));
                f.inset ? (u.path(p), u.ctx.clip(), u.mask(b)) : (u.mask(p), u.ctx.clip(), u.path(b)), u.ctx.shadowOffsetX = f.offsetX.number + B, u.ctx.shadowOffsetY = f.offsetY.number, u.ctx.shadowColor = oe(f.color), u.ctx.shadowBlur = f.blur.number, u.ctx.fillStyle = f.inset ? oe(f.color) : "rgba(0,0,0,1)", u.ctx.fill(), u.ctx.restore();
              }), d.label = 2;
            case 2:
              a = 0, s = 0, l = o, d.label = 3;
            case 3:
              return s < l.length ? (c = l[s], c.style !== 0 && !kt(c.color) && c.width > 0 ? c.style !== 2 ? [
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
        var a, s, l, c, u, d, f, p, B, b, v, Q, w, C, U, m, U, m;
        return he(this, function(S) {
          return this.ctx.save(), a = n1(o, n), s = Mu(o, n), i === 2 && (this.path(s), this.ctx.clip()), Le(s[0]) ? (l = s[0].start.x, c = s[0].start.y) : (l = s[0].x, c = s[0].y), Le(s[1]) ? (u = s[1].end.x, d = s[1].end.y) : (u = s[1].x, d = s[1].y), n === 0 || n === 2 ? f = Math.abs(l - u) : f = Math.abs(c - d), this.ctx.beginPath(), i === 3 ? this.formatPath(a) : this.formatPath(s.slice(0, 2)), p = r < 3 ? r * 3 : r * 2, B = r < 3 ? r * 2 : r, i === 3 && (p = r, B = r), b = true, f <= p * 2 ? b = false : f <= p * 2 + B ? (v = f / (2 * p + B), p *= v, B *= v) : (Q = Math.floor((f + B) / (p + B)), w = (f - Q * p) / (Q - 1), C = (f - (Q + 1) * p) / Q, B = C <= 0 || Math.abs(B - w) < Math.abs(B - C) ? w : C), b && (i === 3 ? this.ctx.setLineDash([
            0,
            p + B
          ]) : this.ctx.setLineDash([
            p,
            B
          ])), i === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = r) : this.ctx.lineWidth = r * 2 + 1.1, this.ctx.strokeStyle = oe(t), this.ctx.stroke(), this.ctx.setLineDash([]), i === 2 && (Le(s[0]) && (U = s[3], m = s[0], this.ctx.beginPath(), this.formatPath([
            new oA(U.end.x, U.end.y),
            new oA(m.start.x, m.start.y)
          ]), this.ctx.stroke()), Le(s[1]) && (U = s[1], m = s[2], this.ctx.beginPath(), this.formatPath([
            new oA(U.end.x, U.end.y),
            new oA(m.start.x, m.start.y)
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
              return this.options.backgroundColor && (this.ctx.fillStyle = oe(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), r = e1(t), [
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
  })(vp), f1 = function(A) {
    return A instanceof tp || A instanceof ep ? true : A instanceof Il && A.type !== Yo && A.type !== Xo;
  }, p1 = function(A, e) {
    switch (A) {
      case 0:
        return qo(e);
      case 2:
        return XU(e);
      default:
        return Ai(e);
    }
  }, g1 = function(A) {
    switch (A) {
      case 1:
        return "center";
      case 2:
        return "right";
      default:
        return "left";
    }
  }, h1 = [
    "-apple-system",
    "system-ui"
  ], B1 = function(A) {
    return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? A.filter(function(e) {
      return h1.indexOf(e) === -1;
    }) : A;
  }, m1 = (function(A) {
    Ge(e, A);
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
              return r = Ss(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, t), [
                4,
                v1(r)
              ];
            case 1:
              return n = o.sent(), this.options.backgroundColor && (this.ctx.fillStyle = oe(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(n, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [
                2,
                this.canvas
              ];
          }
        });
      });
    }, e;
  })(vp), v1 = function(A) {
    return new Promise(function(e, t) {
      var r = new Image();
      r.onload = function() {
        e(r);
      }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(A));
    });
  }, w1 = (function() {
    function A(e) {
      var t = e.id, r = e.enabled;
      this.id = t, this.enabled = r, this.start = Date.now();
    }
    return A.prototype.debug = function() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.debug == "function" ? console.debug.apply(console, Xn([
        this.id,
        this.getTime() + "ms"
      ], e)) : this.info.apply(this, e));
    }, A.prototype.getTime = function() {
      return Date.now() - this.start;
    }, A.prototype.info = function() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      this.enabled && typeof window < "u" && window.console && typeof console.info == "function" && console.info.apply(console, Xn([
        this.id,
        this.getTime() + "ms"
      ], e));
    }, A.prototype.warn = function() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.warn == "function" ? console.warn.apply(console, Xn([
        this.id,
        this.getTime() + "ms"
      ], e)) : this.info.apply(this, e));
    }, A.prototype.error = function() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.error == "function" ? console.error.apply(console, Xn([
        this.id,
        this.getTime() + "ms"
      ], e)) : this.info.apply(this, e));
    }, A.instances = {}, A;
  })(), C1 = (function() {
    function A(e, t) {
      var r;
      this.windowBounds = t, this.instanceName = "#" + A.instanceCount++, this.logger = new w1({
        id: this.instanceName,
        enabled: e.logging
      }), this.cache = (r = e.cache) !== null && r !== void 0 ? r : new _U(this, e);
    }
    return A.instanceCount = 1, A;
  })(), y1 = function(A, e) {
    return e === void 0 && (e = {}), b1(A, e);
  };
  typeof window < "u" && fp.setContext(window);
  var b1 = function(A, e) {
    return we(void 0, void 0, void 0, function() {
      var t, r, n, o, i, a, s, l, c, u, d, f, p, B, b, v, Q, w, C, U, S, m, S, H, I, g, T, R, L, K, M, O, Y, N, P, AA, Z, iA, D, J;
      return he(this, function(j) {
        switch (j.label) {
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
            }, o = ds({
              logging: (T = e.logging) !== null && T !== void 0 ? T : true,
              cache: e.cache
            }, n), i = {
              windowWidth: (R = e.windowWidth) !== null && R !== void 0 ? R : r.innerWidth,
              windowHeight: (L = e.windowHeight) !== null && L !== void 0 ? L : r.innerHeight,
              scrollX: (K = e.scrollX) !== null && K !== void 0 ? K : r.pageXOffset,
              scrollY: (M = e.scrollY) !== null && M !== void 0 ? M : r.pageYOffset
            }, a = new wt(i.scrollX, i.scrollY, i.windowWidth, i.windowHeight), s = new C1(o, a), l = (O = e.foreignObjectRendering) !== null && O !== void 0 ? O : false, c = {
              allowTaint: (Y = e.allowTaint) !== null && Y !== void 0 ? Y : false,
              onclone: e.onclone,
              ignoreElements: e.ignoreElements,
              inlineImages: l,
              copyStyles: l
            }, s.logger.debug("Starting document clone with size " + a.width + "x" + a.height + " scrolled to " + -a.left + "," + -a.top), u = new Lu(s, A, c), d = u.clonedReferenceElement, d ? [
              4,
              u.toIFrame(t, a)
            ] : [
              2,
              Promise.reject("Unable to find element in cloned iframe")
            ];
          case 1:
            return f = j.sent(), p = Hl(d) || QU(d) ? Ay(d.ownerDocument) : Wi(s, d), B = p.width, b = p.height, v = p.left, Q = p.top, w = Q1(s, d, e.backgroundColor), C = {
              canvas: e.canvas,
              backgroundColor: w,
              scale: (P = (N = e.scale) !== null && N !== void 0 ? N : r.devicePixelRatio) !== null && P !== void 0 ? P : 1,
              x: ((AA = e.x) !== null && AA !== void 0 ? AA : 0) + v,
              y: ((Z = e.y) !== null && Z !== void 0 ? Z : 0) + Q,
              width: (iA = e.width) !== null && iA !== void 0 ? iA : Math.ceil(B),
              height: (D = e.height) !== null && D !== void 0 ? D : Math.ceil(b)
            }, l ? (s.logger.debug("Document cloned, using foreign object rendering"), S = new m1(s, C), [
              4,
              S.render(d)
            ]) : [
              3,
              3
            ];
          case 2:
            return U = j.sent(), [
              3,
              5
            ];
          case 3:
            return s.logger.debug("Document cloned, element located at " + v + "," + Q + " with size " + B + "x" + b + " using computed rendering"), s.logger.debug("Starting DOM parsing"), m = op(s, d), w === m.styles.backgroundColor && (m.styles.backgroundColor = ht.TRANSPARENT), s.logger.debug("Starting renderer for element at " + C.x + "," + C.y + " with size " + C.width + "x" + C.height), S = new d1(s, C), [
              4,
              S.render(m)
            ];
          case 4:
            U = j.sent(), j.label = 5;
          case 5:
            return (!((J = e.removeContainer) !== null && J !== void 0) || J) && (Lu.destroy(f) || s.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), s.logger.debug("Finished rendering"), [
              2,
              U
            ];
        }
      });
    });
  }, Q1 = function(A, e, t) {
    var r = e.ownerDocument, n = r.documentElement ? on(A, getComputedStyle(r.documentElement).backgroundColor) : ht.TRANSPARENT, o = r.body ? on(A, getComputedStyle(r.body).backgroundColor) : ht.TRANSPARENT, i = typeof t == "string" ? on(A, t) : t === null ? ht.TRANSPARENT : 4294967295;
    return e === r.documentElement ? kt(n) ? kt(o) ? i : o : n : i;
  }, Da = {
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
  }, ie = function() {
    return ie = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, ie.apply(this, arguments);
  }, F1 = {
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
  }, U1 = function(A, e) {
    var t = ie({}, F1);
    if (A) for (var r in Da) Object.prototype.hasOwnProperty.call(Da, r) && (t[r] = ie(ie({}, Object.prototype.hasOwnProperty.call(t, r) ? t[r] : {}), Da[r]));
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = ie(ie({}, Object.prototype.hasOwnProperty.call(t, r) ? t[r] : {}), e[r]));
    return t;
  }, Du = function(A, e) {
    return A ? ie(ie({}, e.rbgcpControlBtn), e.rbgcpControlBtnSelected) : ie({}, e.rbgcpControlBtn);
  }, cn = function(A, e) {
    return A ? ie(ie({}, e.rbgcpControlIconBtn), e.rbgcpControlBtnSelected) : ie({}, e.rbgcpControlIconBtn);
  }, vo = function(A, e) {
    return A ? ie(ie(ie({}, e.rbgcpControlBtn), e.rbgcpColorModelDropdownBtn), e.rbgcpControlBtnSelected) : ie(ie({}, e.rbgcpControlBtn), e.rbgcpColorModelDropdownBtn);
  }, Je = function() {
    return Je = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, Je.apply(this, arguments);
  }, S1 = function(A) {
    var e = A.color, t = kA().defaultStyles, r = e ?? "";
    return k.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 16
      }
    }, k.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: Je(Je({
        fill: "none",
        strokeWidth: "1.4px"
      }, t.rbgcpControlIcon), r && {
        stroke: r
      }),
      d: "M15.6,7h0L7.78,14.86c-.37.37-1.61.38-2,.75s-.5,1.53-.76,2a3.53,3.53,0,0,1-.52.52,1.6,1.6,0,0,1-2.27-.06l-.32-.32a1.61,1.61,0,0,1-.06-2.27A3.25,3.25,0,0,1,2.4,15c.47-.26,1.65-.35,2-.73s.34-1.64.71-2c1.68-1.73,5.61-5.65,7.91-7.93h0l1.14,1.38L15.6,7Z"
    }), k.createElement("polygon", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: Je(Je({
        strokeWidth: "1.4px"
      }, t.rbgcpControlIcon2), r && {
        stroke: r,
        fill: r
      }),
      points: "15.7 8.87 11.13 4.29 12.69 2.73 17.25 7.31 15.7 8.87"
    }), k.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: Je(Je({
        strokeWidth: "1.4px"
      }, t.rbgcpControlIcon2), r && {
        stroke: r,
        fill: r
      }),
      d: "M18.18,3.71,16.36,5.53a1.33,1.33,0,0,1-1.88,0h0a1.34,1.34,0,0,1,0-1.89l1.81-1.82a1.34,1.34,0,0,1,1.89,0h0A1.34,1.34,0,0,1,18.18,3.71Z"
    }));
  }, x1 = function(A) {
    var e = A.onSelect, t = kA().defaultStyles, r = h.useState(null), n = r[0], o = r[1], i = h.useState(false), a = i[0], s = i[1], l = h.useState(false), c = l[0], u = l[1], d = function() {
      var B = document.getElementById("root");
      s(true), y1(B).then(function(b) {
        var v = document.createElement("canvas"), Q = v.getContext("2d", {
          willReadFrequently: true
        });
        B && Q && (v.width = B.offsetWidth * 2, v.height = B.offsetHeight * 2, Q.drawImage(b, 0, 0)), o(Q);
      });
    }, f = function(B) {
      if (B.stopPropagation(), n) {
        var b = B.pageX, v = B.pageY, Q = b * 2, w = v * 2, C = n.getImageData(Q, w, 1, 1).data;
        e("rgba(".concat(C[0], ", ").concat(C[1], ", ").concat(C[2], ", 1)"));
      }
      u(false), s(false);
    }, p = function() {
      if (u(true), !window.EyeDropper) d();
      else {
        var B = new window.EyeDropper(), b = new window.AbortController();
        B.open({
          signal: b.signal
        }).then(function(v) {
          var Q = XA(v.sRGBHex), w = Q.toRgb(), C = w.r, U = w.g, m = w.b;
          e("rgba(".concat(C, ", ").concat(U, ", ").concat(m, ", 1)")), u(false);
        }).catch(function(v) {
          console.log(v), u(false);
        });
      }
    };
    return k.createElement("div", null, k.createElement("div", {
      onClick: p,
      id: "rbgcp-eyedropper-btn",
      style: Je(Je({}, t.rbgcpEyedropperBtn), cn(a, t))
    }, k.createElement(S1, {
      color: c ? "rgb(86, 140, 245)" : ""
    })), a && k.createElement(qC, null, k.createElement("div", {
      onClick: function(B) {
        return f(B);
      },
      style: t.rbgcpEyedropperCover
    })));
  }, Ls = function() {
    return Ls = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, Ls.apply(this, arguments);
  }, Pa = function(A) {
    var e = A.value, t = A.reffy, r = A.label, n = A.config, o = A.callback, i = A.squareWidth, a = A.openAdvanced, s = A.defaultStyles, l = A.pickerIdSuffix, c = n.barSize, u = h.useState(false), d = u[0], f = u[1], p = h.useState(2), B = p[0], b = p[1], v = e * (i - 18);
    h.useEffect(function() {
      var m;
      b(((m = t == null ? void 0 : t.current) === null || m === void 0 ? void 0 : m.offsetTop) - 2);
    }, [
      a,
      t
    ]);
    var Q = function() {
      f(false);
    }, w = function(m) {
      d && o(Ur(m, c));
    }, C = function(m) {
      d || o(Ur(m, c));
    }, U = function() {
      f(true);
    };
    return h.useEffect(function() {
      var m = function() {
        Q();
      };
      return window.addEventListener("mouseup", m), function() {
        window.removeEventListener("mouseup", m);
      };
    }, []), k.createElement("div", {
      style: {
        width: "100%",
        padding: "3px 0px 3px 0px"
      }
    }, k.createElement("div", {
      onMouseMove: function(m) {
        return w(m);
      },
      style: {
        cursor: "resize",
        position: "relative"
      },
      id: "rbgcp-advanced-bar-".concat(r, "-wrapper").concat(l)
    }, k.createElement("div", {
      style: Ls({
        left: v,
        top: B
      }, s.rbgcpHandle),
      id: "rbgcp-advanced-bar-".concat(r, "-handle").concat(l),
      onMouseDown: U,
      role: "button",
      tabIndex: 0
    }), k.createElement("div", {
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
      onMouseMove: function(m) {
        return w(m);
      },
      onClick: function(m) {
        return C(m);
      },
      tabIndex: 0,
      role: "button",
      onKeyDown: function() {
      }
    }, r), k.createElement("canvas", {
      ref: t,
      height: "14px",
      width: "".concat(i, "px"),
      onClick: function(m) {
        return C(m);
      },
      style: {
        position: "relative",
        borderRadius: 14
      },
      id: "rbgcp-advanced-bar-".concat(r, "-canvas").concat(l)
    })));
  }, E1 = function(A) {
    var e = A.openAdvanced, t = kA(), r = t.config, n = t.tinyColor, o = t.handleChange, i = t.squareWidth, a = t.hc, s = t.defaultStyles, l = t.pickerIdSuffix, c = n.toHsl(), u = c.s, d = c.l, f = h.useRef(null), p = h.useRef(null), B = h.useRef(null);
    aC(f, a == null ? void 0 : a.h, d * 100, i), sC(p, a == null ? void 0 : a.h, u * 100, i), lC(B, a == null ? void 0 : a.h, u * 100, i);
    var b = function(w) {
      var C = XA({
        h: a == null ? void 0 : a.h,
        s: w / 100,
        l: d
      }).toRgb(), U = C.r, m = C.g, S = C.b;
      o("rgba(".concat(U, ",").concat(m, ",").concat(S, ",").concat(a == null ? void 0 : a.a, ")"));
    }, v = function(w) {
      var C = XA({
        h: a == null ? void 0 : a.h,
        s: u,
        l: w / 100
      }).toRgb(), U = C.r, m = C.g, S = C.b;
      o("rgba(".concat(U, ",").concat(m, ",").concat(S, ",").concat(a == null ? void 0 : a.a, ")"));
    }, Q = function(w) {
      var C = XA({
        h: a == null ? void 0 : a.h,
        s: (a == null ? void 0 : a.s) * 100,
        v: w
      }).toRgb(), U = C.r, m = C.g, S = C.b;
      o("rgba(".concat(U, ",").concat(m, ",").concat(S, ",").concat(a == null ? void 0 : a.a, ")"));
    };
    return k.createElement("div", {
      style: {
        width: "100%",
        height: e ? 98 : 0,
        transition: "all 120ms linear"
      },
      id: "rbgcp-advanced-controls-wrapper".concat(l)
    }, k.createElement("div", {
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
    }, k.createElement(Pa, {
      value: u,
      reffy: f,
      config: r,
      label: "Saturation",
      callback: b,
      squareWidth: i,
      openAdvanced: e,
      defaultStyles: s,
      pickerIdSuffix: l
    }), k.createElement(Pa, {
      value: d,
      config: r,
      reffy: p,
      label: "Lightness",
      callback: v,
      squareWidth: i,
      openAdvanced: e,
      defaultStyles: s,
      pickerIdSuffix: l
    }), k.createElement(Pa, {
      value: a == null ? void 0 : a.v,
      config: r,
      reffy: B,
      label: "Brightness",
      callback: Q,
      squareWidth: i,
      openAdvanced: e,
      defaultStyles: s,
      pickerIdSuffix: l
    })));
  }, $t = function() {
    return $t = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, $t.apply(this, arguments);
  }, I1 = function(A) {
    var e = A.openComparibles, t = kA(), r = t.tinyColor, n = t.handleChange, o = t.defaultStyles, i = t.pickerIdSuffix, a = r.analogous(), s = r.monochromatic(), l = r.triad(), c = r.tetrad(), u = function(d) {
      var f = d.toRgb(), p = f.r, B = f.g, b = f.b, v = f.a;
      n("rgba(".concat(p, ",").concat(B, ",").concat(b, ",").concat(v, ")"));
    };
    return k.createElement("div", {
      style: {
        width: "100%",
        transition: "all 120ms linear",
        height: e ? 216 : 0
      },
      id: "rbgcp-comparible-colors-wrapper".concat(i)
    }, k.createElement("div", {
      style: {
        paddingTop: 11,
        display: e ? "" : "none",
        position: "relative"
      },
      id: "rbgcp-comparible-colors-inner".concat(i)
    }, k.createElement("div", {
      style: $t({
        textAlign: "center",
        fontSize: 13,
        fontWeight: 600,
        position: "absolute",
        top: 6.5,
        left: 2
      }, o.rbgcpComparibleLabel),
      id: "rbgcp-comparible-color-guide-label".concat(i)
    }, "Color Guide"), k.createElement("div", {
      style: $t({
        textAlign: "center",
        fontSize: 12,
        fontWeight: 500,
        marginTop: 3
      }, o.rbgcpComparibleLabel),
      id: "rbgcp-comparible-analogous-colors-label".concat(i)
    }, "Analogous"), k.createElement("div", {
      style: {
        borderRadius: 5,
        overflow: "hidden",
        display: "flex"
      },
      id: "rbgcp-comparible-analogous-colors".concat(i)
    }, a == null ? void 0 : a.map(function(d, f) {
      return k.createElement("div", {
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
    })), k.createElement("div", {
      style: $t({
        textAlign: "center",
        fontSize: 12,
        fontWeight: 500,
        marginTop: 3
      }, o.rbgcpComparibleLabel),
      id: "rbgcp-comparible-monochromatic-colors-label".concat(i)
    }, "Monochromatic"), k.createElement("div", {
      style: {
        borderRadius: 5,
        overflow: "hidden",
        display: "flex",
        justifyContent: "flex-end"
      },
      id: "rbgcp-comparible-monochromatic-colors".concat(i)
    }, s == null ? void 0 : s.map(function(d, f) {
      return k.createElement("div", {
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
    })), k.createElement("div", {
      style: $t({
        textAlign: "center",
        fontSize: 12,
        fontWeight: 500,
        marginTop: 3
      }, o.rbgcpComparibleLabel),
      id: "rbgcp-comparible-triad-colors-label".concat(i)
    }, "Triad"), k.createElement("div", {
      style: {
        borderRadius: 5,
        overflow: "hidden",
        display: "flex",
        justifyContent: "flex-end"
      },
      id: "rbgcp-comparible-triad-colors".concat(i)
    }, l == null ? void 0 : l.map(function(d, f) {
      return k.createElement("div", {
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
    })), k.createElement("div", {
      style: $t({
        textAlign: "center",
        fontSize: 12,
        fontWeight: 500,
        marginTop: 3
      }, o.rbgcpComparibleLabel),
      id: "rbgcp-comparible-tetrad-colors-label".concat(i)
    }, "Tetrad"), k.createElement("div", {
      style: {
        borderRadius: 5,
        overflow: "hidden",
        display: "flex",
        justifyContent: "flex-end"
      },
      id: "rbgcp-comparible-tetrad-colors".concat(i)
    }, c == null ? void 0 : c.map(function(d, f) {
      return k.createElement("div", {
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
  }, _A = function() {
    return _A = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, _A.apply(this, arguments);
  }, H1 = function() {
    var A = kA(), e = A.gradientType, t = A.onChange, r = A.value, n = A.defaultStyles, o = A.pickerIdSuffix, i = e === "linear-gradient", a = e === "radial-gradient", s = function() {
      var c = r.split(/,(.+)/)[1];
      t("linear-gradient(90deg, ".concat(c));
    }, l = function() {
      var c = r.split(/,(.+)/)[1];
      t("radial-gradient(circle, ".concat(c));
    };
    return k.createElement("div", {
      style: n.rbgcpControlBtnWrapper
    }, k.createElement("div", {
      onClick: s,
      id: "rbgcp-linear-btn".concat(o),
      style: _A(_A({}, n.rbgcpControlBtn), i && n.rbgcpControlBtnSelected),
      tabIndex: 0,
      role: "button",
      onKeyDown: function() {
      }
    }, k.createElement($C, {
      color: i ? "#568CF5" : ""
    })), k.createElement("div", {
      onClick: l,
      id: "rbgcp-radial-btn".concat(o),
      style: _A(_A({}, n.rbgcpControlBtn), a && n.rbgcpControlBtnSelected),
      tabIndex: 0,
      role: "button",
      onKeyDown: function() {
      }
    }, k.createElement(WC, {
      color: a ? "#568CF5" : ""
    })));
  }, T1 = function() {
    var A = kA(), e = A.currentLeft, t = A.currentColor, r = A.defaultStyles, n = A.handleGradient, o = A.pickerIdSuffix, i = function(a) {
      n(t, Ce(parseInt(a), 0, 100));
    };
    return k.createElement("div", {
      style: _A(_A(_A(_A({}, r.rbgcpControlBtnWrapper), r.rbgcpControlInputWrap), r.rbgcpStopInputWrap), {
        paddingLeft: 8
      }),
      id: "rbgcp-stop-input-wrapper".concat(o)
    }, k.createElement(JC, null), k.createElement("input", {
      value: e,
      id: "rbgcp-stop-input".concat(o),
      onChange: function(a) {
        return i(a.target.value);
      },
      style: _A(_A({}, r.rbgcpControlInput), r.rbgcpStopInput)
    }));
  }, k1 = function() {
    var A = kA(), e = A.degrees, t = A.onChange, r = A.value, n = A.defaultStyles, o = A.pickerIdSuffix, i = function(a) {
      var s = Ce(a.target.value, 0, 360), l = r.split(/,(.+)/)[1];
      t("linear-gradient(".concat(s ?? 0, "deg, ").concat(l));
    };
    return k.createElement("div", {
      style: _A(_A(_A({}, n.rbgcpControlBtnWrapper), n.rbgcpControlInputWrap), n.rbgcpDegreeInputWrap),
      id: "rbgcp-degree-input-wrapper".concat(o)
    }, k.createElement(YC, null), k.createElement("input", {
      value: e,
      onChange: function(a) {
        return i(a);
      },
      id: "rbgcp-degree-input".concat(o),
      style: _A(_A({}, n.rbgcpControlInput), n.rbgcpDegreeInput)
    }), k.createElement("div", {
      style: _A(_A({}, n.rbgcpDegreeIcon), {
        position: "absolute",
        right: e > 99 ? 0 : e < 10 ? 7 : 3,
        top: 1,
        fontWeight: 400,
        fontSize: 13
      })
    }, "\xB0"));
  }, L1 = function() {
    var A = kA(), e = A.colors, t = A.selectedColor, r = A.createGradientStr, n = A.defaultStyles, o = A.pickerIdSuffix, i = function() {
      if ((e == null ? void 0 : e.length) > 2) {
        var a = e == null ? void 0 : e.map(function(l, c) {
          return _A(_A({}, l), {
            value: c === t - 1 ? En(l) : Zt(l)
          });
        }), s = a == null ? void 0 : a.filter(function(l, c) {
          return c !== t;
        });
        r(s);
      }
    };
    return k.createElement("div", {
      onClick: i,
      style: _A(_A({}, cn(false, n)), {
        width: 28
      }),
      id: "rbgcp-point-delete-btn".concat(o),
      tabIndex: 0,
      role: "button",
      onKeyDown: function() {
      }
    }, k.createElement(VC, null));
  }, Pu = function(A) {
    var e = A.hideGradientType, t = A.hideGradientAngle, r = A.hideGradientStop, n = kA(), o = n.gradientType, i = n.defaultStyles, a = n.pickerIdSuffix;
    return k.createElement("div", {
      style: _A(_A({}, i.rbgcpControlBtnWrapper), {
        marginTop: 12,
        marginBottom: -4,
        justifyContent: "space-between",
        paddingLeft: e ? 4 : 0
      }),
      id: "rbgcp-gradient-controls-wrap".concat(a)
    }, !e && k.createElement(H1, null), k.createElement("div", {
      style: {
        width: 53
      }
    }, !t && o === "linear-gradient" && k.createElement(k1, null)), !r && k.createElement(T1, null), k.createElement(L1, null));
  }, wn = function() {
    return wn = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, wn.apply(this, arguments);
  }, R1 = function(A) {
    var e, t, r = A.hideColorTypeBtns, n = A.setGradient, o = A.isGradient, i = A.setSolid, a = A.locales, s = kA(), l = s.defaultStyles, c = s.pickerIdSuffix;
    return r ? k.createElement("div", {
      style: {
        width: 1
      }
    }) : k.createElement("div", {
      style: wn({
        display: "flex",
        alignItems: "center"
      }, l.rbgcpControlBtnWrapper),
      id: "rbgcp-color-type-btns".concat(c)
    }, k.createElement("div", {
      onClick: i,
      id: "rbgcp-solid-btn".concat(c),
      style: Du(!o, l)
    }, (e = a == null ? void 0 : a.CONTROLS) === null || e === void 0 ? void 0 : e.SOLID), k.createElement("div", {
      onClick: n,
      id: "rbgcp-gradient-btn".concat(c),
      style: Du(o ?? false, l)
    }, (t = a == null ? void 0 : a.CONTROLS) === null || t === void 0 ? void 0 : t.GRADIENT));
  }, O1 = function(A) {
    var e = A.openInputType, t = A.setOpenInputType, r = kA(), n = r.inputType, o = r.setInputType, i = r.defaultStyles, a = r.pickerIdSuffix, s = e ? "visibility 0ms linear" : "visibility 100ms linear 150ms", l = e ? "z-index 0ms linear" : "z-index 100ms linear 150ms", c = e ? "opacity 120ms linear" : "opacity 150ms linear 50ms", u = function(d, f) {
      e && (d.stopPropagation(), o(f), t(false));
    };
    return k.createElement("div", {
      style: wn({
        visibility: e ? "visible" : "hidden",
        zIndex: e ? "" : -100,
        opacity: e ? 1 : 0,
        transition: "".concat(c, ", ").concat(s, ", ").concat(l)
      }, i.rbgcpColorModelDropdown),
      id: "rbgcp-color-model-dropdown".concat(a)
    }, k.createElement("div", {
      id: "rbgcp-color-model-rgb-btn".concat(a),
      onClick: function(d) {
        return u(d, "rgb");
      },
      style: vo(n === "rgb", i)
    }, "RGB"), k.createElement("div", {
      id: "rbgcp-color-model-hsl-btn".concat(a),
      onClick: function(d) {
        return u(d, "hsl");
      },
      style: vo(n === "hsl", i)
    }, "HSL"), k.createElement("div", {
      id: "rbgcp-color-model-hsv-btn".concat(a),
      onClick: function(d) {
        return u(d, "hsv");
      },
      style: vo(n === "hsv", i)
    }, "HSV"), k.createElement("div", {
      id: "rbgcp-color-model-cmyk-btn".concat(a),
      onClick: function(d) {
        return u(d, "cmyk");
      },
      style: vo(n === "cmyk", i)
    }, "CMYK"));
  }, M1 = function(A) {
    var e, t, r = A.locales, n = A.hideEyeDrop, o = n === void 0 ? false : n, i = A.hideAdvancedSliders, a = i === void 0 ? false : i, s = A.hideColorGuide, l = s === void 0 ? false : s, c = A.hideInputType, u = c === void 0 ? false : c, d = A.hideColorTypeBtns, f = d === void 0 ? false : d, p = A.hideGradientControls, B = p === void 0 ? false : p, b = A.hideGradientType, v = b === void 0 ? false : b, Q = A.hideGradientAngle, w = Q === void 0 ? false : Q, C = A.hideGradientStop, U = C === void 0 ? false : C, m = kA(), S = m.config, H = m.onChange, I = m.isGradient, g = m.handleChange, T = m.previous, R = m.defaultStyles, L = m.pickerIdSuffix, K = S.defaultColor, M = S.defaultGradient, O = h.useState(false), Y = O[0], N = O[1], P = h.useState(false), AA = P[0], Z = P[1], iA = h.useState(false), D = iA[0], J = iA[1], j = o && a && l && u, tA = (e = T == null ? void 0 : T.color) !== null && e !== void 0 ? e : K, mA = (t = T == null ? void 0 : T.gradient) !== null && t !== void 0 ? t : M, dA = function() {
      H(tA);
    }, nA = function() {
      H(mA);
    }, eA = o && a && l && u, sA = eA && f;
    return sA ? I && !B ? k.createElement(Pu, {
      hideGradientType: v,
      hideGradientAngle: w,
      hideGradientStop: U
    }) : null : k.createElement("div", {
      style: {
        paddingBottom: 4
      }
    }, k.createElement("div", {
      style: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      },
      id: "rbgcp-controls-wrapper".concat(L)
    }, k.createElement(R1, {
      hideColorTypeBtns: f,
      setGradient: nA,
      isGradient: I,
      setSolid: dA,
      locales: r
    }), !eA && k.createElement("div", {
      style: wn({
        display: j ? "none" : ""
      }, R.rbgcpControlBtnWrapper),
      id: "rbgcp-control-rightside-wrapper".concat(L)
    }, !o && k.createElement(x1, {
      onSelect: g
    }), !a && k.createElement("div", {
      id: "rbgcp-advanced-btn".concat(L),
      onClick: function() {
        return J(!D);
      },
      style: cn(D, R)
    }, k.createElement(jC, {
      color: D ? "#568CF5" : ""
    })), !l && k.createElement("div", {
      style: cn(Y, R),
      onClick: function() {
        return N(!Y);
      },
      id: "rbgcp-comparibles-btn".concat(L)
    }, k.createElement(XC, {
      color: Y ? "#568CF5" : ""
    })), !u && k.createElement("div", {
      id: "rbgcp-color-model-btn".concat(L),
      onClick: function() {
        return Z(!AA);
      },
      style: cn(AA, R)
    }, k.createElement(zC, {
      color: AA ? "#568CF5" : ""
    }), k.createElement(O1, {
      openInputType: AA,
      setOpenInputType: Z
    })))), !a && k.createElement(E1, {
      openAdvanced: D
    }), !l && k.createElement(I1, {
      openComparibles: Y
    }), I && !B && k.createElement(Pu, {
      hideGradientType: v,
      hideGradientAngle: w,
      hideGradientStop: U
    }));
  }, Ze = function() {
    return Ze = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, Ze.apply(this, arguments);
  }, _u = function(A, e, t) {
    if (t || arguments.length === 2) for (var r = 0, n = e.length, o; r < n; r++) (o || !(r in e)) && (o || (o = Array.prototype.slice.call(e, 0, r)), o[r] = e[r]);
    return A.concat(o || Array.prototype.slice.call(e));
  }, K1 = function(A) {
    var e = A.left, t = A.i, r = A.setDragging, n = kA(), o = n.colors, i = n.squareWidth, a = n.selectedColor, s = n.defaultStyles, l = n.pickerIdSuffix, c = n.createGradientStr, u = a === t, d = (i - 18) / 100, f = function(B) {
      var b = o == null ? void 0 : o.map(function(v, Q) {
        return Ze(Ze({}, v), {
          value: Q === B ? En(v) : Zt(v)
        });
      });
      c(b);
    }, p = function(B) {
      B.stopPropagation(), f(t), r(true);
    };
    return k.createElement("div", {
      onMouseDown: function(B) {
        return p(B);
      },
      id: "rbgcp-gradient-handle-".concat(t).concat(l),
      style: Ze(Ze({}, s.rbgcpGradientHandleWrap), {
        left: (e ?? 0) * d
      })
    }, k.createElement("div", {
      style: Ze(Ze({}, s.rbgcpGradientHandle), u ? {
        boxShadow: "0px 0px 5px 1px rgba(86, 140, 245,.95)",
        border: "2px solid white"
      } : {}),
      id: "rbgcp-gradient-handle-".concat(t, "-dot").concat(l)
    }, u && k.createElement("div", {
      style: {
        width: 5,
        height: 5,
        borderRadius: "50%",
        background: "white"
      },
      id: "rbgcp-gradient-handle-".concat(t, "-selected-dot").concat(l)
    })));
  }, D1 = function() {
    var A = kA(), e = A.value, t = A.colors, r = A.config, n = A.squareWidth, o = A.currentColor, i = A.handleGradient, a = A.pickerIdSuffix, s = A.createGradientStr, l = r.barSize, c = h.useState(false), u = c[0], d = c[1];
    function f(w) {
      return w.replace(/(radial|linear)-gradient\([^,]+,/, "linear-gradient(90deg,");
    }
    var p = function(w) {
      var C, U = Ur(w, l), m = (C = _u(_u([], t.map(function(S) {
        return Ze(Ze({}, S), {
          value: Zt(S)
        });
      }), true), [
        {
          value: o,
          left: U
        }
      ], false)) === null || C === void 0 ? void 0 : C.sort(function(S, H) {
        return S.left - H.left;
      });
      s(m);
    }, B = function() {
      d(false);
    }, b = function(w) {
      u || (p(w), d(true));
    }, v = function(w) {
      u && i(o, Ur(w, l));
    }, Q = function() {
      B();
    };
    return h.useEffect(function() {
      return window.addEventListener("mouseup", Q), function() {
        window.removeEventListener("mouseup", Q);
      };
    }), k.createElement("div", {
      style: {
        width: "100%",
        marginTop: 17,
        marginBottom: 4,
        position: "relative"
      },
      id: "rbgcp-gradient-bar".concat(a)
    }, k.createElement("div", {
      style: {
        height: 14,
        borderRadius: 10,
        width: n,
        backgroundImage: f(e)
      },
      onMouseDown: function(w) {
        return b(w);
      },
      onMouseMove: function(w) {
        return v(w);
      },
      id: "rbgcp-gradient-bar-canvas".concat(a)
    }), t == null ? void 0 : t.map(function(w, C) {
      return k.createElement(K1, {
        i: C,
        left: w.left,
        key: "".concat(C, "-").concat(w),
        setDragging: d
      });
    }));
  }, P1 = function(A) {
    var e = A.locales, t = A.presets, r = A.hideHue, n = A.hideInputs, o = A.hidePresets, i = A.hideOpacity, a = A.hideEyeDrop, s = A.hideControls, l = A.hideInputType, c = A.hideColorGuide, u = A.hidePickerSquare, d = A.hideGradientType, f = A.hideGradientStop, p = A.hideGradientAngle, B = A.hideColorTypeBtns, b = A.hideAdvancedSliders, v = A.hideGradientControls, Q = kA(), w = Q.isGradient, C = Q.pickerIdSuffix;
    return k.createElement("div", {
      style: {
        userSelect: "none"
      },
      id: "rbgcp-color-picker".concat(C)
    }, !u && k.createElement(DC, null), !s && k.createElement(M1, {
      locales: e,
      hideEyeDrop: a,
      hideInputType: l,
      hideColorGuide: c,
      hideGradientType: d,
      hideGradientStop: f,
      hideColorTypeBtns: B,
      hideGradientAngle: p,
      hideAdvancedSliders: b,
      hideGradientControls: v
    }), w && k.createElement(D1, null), !r && k.createElement(cC, null), !i && k.createElement(PC, null), !n && k.createElement(mC, null), !o && k.createElement(GC, {
      presets: t
    }));
  }, ti = function() {
    return ti = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, ti.apply(this, arguments);
  };
  function _1(A) {
    var e = A.idSuffix, t = A.value, r = t === void 0 ? "rgba(175, 51, 242, 1)" : t, n = A.onChange, o = A.hideControls, i = o === void 0 ? false : o, a = A.hideInputs, s = a === void 0 ? false : a, l = A.hideOpacity, c = l === void 0 ? false : l, u = A.hidePresets, d = u === void 0 ? false : u, f = A.hideHue, p = f === void 0 ? false : f, B = A.presets, b = B === void 0 ? [] : B, v = A.hideEyeDrop, Q = v === void 0 ? false : v, w = A.hideAdvancedSliders, C = w === void 0 ? false : w, U = A.hideColorGuide, m = U === void 0 ? false : U, S = A.hideInputType, H = S === void 0 ? false : S, I = A.hideColorTypeBtns, g = I === void 0 ? false : I, T = A.hideGradientType, R = T === void 0 ? false : T, L = A.hideGradientAngle, K = L === void 0 ? false : L, M = A.hideGradientStop, O = M === void 0 ? false : M, Y = A.hideGradientControls, N = Y === void 0 ? false : Y, P = A.locales, AA = P === void 0 ? _C : P, Z = A.width, iA = Z === void 0 ? 294 : Z, D = A.height, J = D === void 0 ? 294 : D, j = A.style, tA = j === void 0 ? {} : j, mA = A.className, dA = A.disableDarkMode, nA = dA === void 0 ? false : dA, eA = A.disableLightMode, sA = eA === void 0 ? false : eA, lA = A.hidePickerSquare, y = lA === void 0 ? false : lA, x = A.showHexAlpha, F = x === void 0 ? false : x, V = A.config, z = V === void 0 ? {} : V, W = tC(r), gA = typeof window > "u" || nA ? false : !!(window.matchMedia("(prefers-color-scheme: dark)").matches || sA), BA = U1(gA, tA), $ = gA ? "-dark".concat(e ? "-".concat(e) : "") : e ? "-".concat(e) : "";
    return k.createElement("div", {
      className: mA,
      style: ti(ti({}, BA.body), {
        width: iA
      })
    }, k.createElement(oC, {
      value: W,
      onChange: n,
      squareWidth: iA,
      passedConfig: z,
      squareHeight: J,
      isDarkMode: gA,
      hideOpacity: c,
      showHexAlpha: F,
      defaultStyles: BA,
      pickerIdSuffix: $
    }, k.createElement(P1, {
      hideControls: i,
      hideInputs: s,
      hidePresets: d,
      hideOpacity: c,
      hideHue: p,
      presets: b,
      hideEyeDrop: Q,
      hideAdvancedSliders: C,
      hideColorGuide: m,
      hideInputType: H,
      hideColorTypeBtns: g,
      hideGradientType: R,
      hideGradientAngle: K,
      hideGradientStop: O,
      hideGradientControls: N,
      hidePickerSquare: y,
      locales: AA
    })));
  }
  var ze = function() {
    return ze = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, ze.apply(this, arguments);
  }, wo = function(A, e, t) {
    if (t || arguments.length === 2) for (var r = 0, n = e.length, o; r < n; r++) (o || !(r in e)) && (o || (o = Array.prototype.slice.call(e, 0, r)), o[r] = e[r]);
    return A.concat(o || Array.prototype.slice.call(e));
  }, N1 = function(A, e, t) {
    var r = {}, n = r.defaultColor, o = n === void 0 ? "rgba(175, 51, 242, 1)" : n, i = r.defaultGradient, a = i === void 0 ? "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)" : i, s = cs(A, o, a), l = ff(A), c = l.degrees, u = l.degreeStr, d = l.isGradient, f = l.gradientType, p = df(s, a), B = p.currentColor, b = p.selectedColor, v = p.currentLeft, Q = h.useState([]), w = Q[0], C = Q[1], U = function($) {
      if ($ && (s = cs($, o, a)), A) return d ? {
        isGradient: true,
        gradientType: f,
        degrees: u,
        colors: s == null ? void 0 : s.map(function(G) {
          var fA;
          return ze(ze({}, G), {
            value: (fA = G.value) === null || fA === void 0 ? void 0 : fA.toLowerCase()
          });
        })
      } : {
        isGradient: false,
        gradientType: null,
        degrees: null,
        colors: s == null ? void 0 : s.map(function(G) {
          var fA;
          return ze(ze({}, G), {
            value: (fA = G.value) === null || fA === void 0 ? void 0 : fA.toLowerCase()
          });
        })
      };
      console.log("RBGCP ERROR - YOU MUST PASS A VALUE AND CALLBACK TO THE useColorPicker HOOK");
    }, m = XA(B), S = m.toRgb(), H = S.r, I = S.g, g = S.b, T = S.a, R = m.toHsl(), L = R.h, K = R.s, M = R.l;
    h.useEffect(function() {
      var $;
      !(($ = XA(B)) === null || $ === void 0) && $.isValid() && w[0] !== B && C(wo([
        B
      ], w.slice(0, 19), true));
    }, [
      B,
      w
    ]);
    var O = function() {
      var $ = A.split(/,(.+)/)[1];
      e("linear-gradient(90deg, ".concat($));
    }, Y = function() {
      var $ = A.split(/,(.+)/)[1];
      e("radial-gradient(circle, ".concat($));
    }, N = function($) {
      var G = A.split(/,(.+)/)[1];
      e("linear-gradient(".concat(Ce($, 0, 360), "deg, ").concat(G)), f !== "linear-gradient" && console.log("Warning: you are updating degrees when the gradient type is not linear. This will change the gradients type which may be undesired");
    }, P = function($) {
      var G, fA = (G = $ ?? o) !== null && G !== void 0 ? G : "rgba(175, 51, 242, 1)";
      e(fA);
    }, AA = function($) {
      var G, fA = (G = $ ?? a) !== null && G !== void 0 ? G : "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)";
      e(fA);
    }, Z = function($) {
      var G = $.sort(function(rA, X) {
        return rA.left - X.left;
      }), fA = G == null ? void 0 : G.map(function(rA) {
        return "".concat(rA == null ? void 0 : rA.value, " ").concat(rA.left, "%");
      });
      e("".concat(f, "(").concat(u, ", ").concat(fA.join(", "), ")"));
    }, iA = function($, G) {
      var fA = s == null ? void 0 : s.filter(function(X) {
        return !St(X.value);
      }), rA = wo([
        {
          value: $.toUpperCase(),
          left: G ?? v
        }
      ], fA, true);
      Z(rA);
    }, D = function($) {
      $ = $ == null ? void 0 : $.replace(/\s+/g, ""), d ? iA($) : e($);
    }, J = function($) {
      var G = Ce($, 0, 255);
      D("rgba(".concat(G, ", ").concat(I, ", ").concat(g, ", ").concat(T, ")"));
    }, j = function($) {
      var G = Ce($, 0, 255);
      D("rgba(".concat(H, ", ").concat(G, ", ").concat(g, ", ").concat(T, ")"));
    }, tA = function($) {
      var G = Ce($, 0, 255);
      D("rgba(".concat(H, ", ").concat(I, ", ").concat(G, ", ").concat(T, ")"));
    }, mA = function($) {
      var G = Ce($, 0, 100);
      D("rgba(".concat(H, ", ").concat(I, ", ").concat(g, ", ").concat(G / 100, ")"));
    }, dA = function($) {
      var G = Ce($, 0, 360), fA = XA({
        h: G,
        s: K,
        l: M
      }), rA = fA.toRgb(), X = rA.r, q = rA.g, uA = rA.b;
      D("rgba(".concat(X, ", ").concat(q, ", ").concat(uA, ", ").concat(T, ")"));
    }, nA = function($) {
      var G = Ce($, 0, 100), fA = XA({
        h: L,
        s: G / 100,
        l: M
      }), rA = fA.toRgb(), X = rA.r, q = rA.g, uA = rA.b;
      D("rgba(".concat(X, ", ").concat(q, ", ").concat(uA, ", ").concat(T, ")"));
    }, eA = function($) {
      var G = Ce($, 0, 100), fA = XA({
        h: L,
        s: K,
        l: G / 100
      });
      if (fA == null ? void 0 : fA.isValid()) {
        var rA = fA.toRgb(), X = rA.r, q = rA.g, uA = rA.b;
        D("rgba(".concat(X, ", ").concat(q, ", ").concat(uA, ", ").concat(T, ")"));
      } else console.log("The new color was invalid, perhaps the lightness you passed in was a decimal? Please pass the new value between 0 - 100");
    }, sA = function() {
      return m.toHslString();
    }, lA = function() {
      return m.toHsvString();
    }, y = function() {
      return m.toHexString();
    }, x = function() {
      var $ = gf(H, I, g), G = $.c, fA = $.m, rA = $.y, X = $.k;
      return "cmyk(".concat(G, ", ").concat(fA, ", ").concat(rA, ", ").concat(X, ")");
    }, F = function($) {
      if (d) {
        var G = s == null ? void 0 : s.map(function(fA, rA) {
          return ze(ze({}, fA), {
            value: rA === $ ? En(fA) : Zt(fA)
          });
        });
        Z(G);
      } else console.log("This function is only relevant when the picker is in gradient mode");
    }, V = function($) {
      var G = wo(wo([], s.map(function(fA) {
        return ze(ze({}, fA), {
          value: Zt(fA)
        });
      }), true), [
        {
          value: B,
          left: $
        }
      ], false);
      Z(G), $ || console.log("You did not pass a stop value (left amount) for the new color point so it defaulted to 50");
    }, z = function($) {
      if ((s == null ? void 0 : s.length) > 2) {
        var G = $ ?? b, fA = s == null ? void 0 : s.filter(function(rA, X) {
          return X !== G;
        });
        Z(fA), $ || console.log("You did not pass in the index of the point you wanted to delete so the function default to the currently selected point");
      } else console.log("A gradient must have atleast two colors, disable your delete button when necessary");
    }, W = function($) {
      iA(B, Ce($, 0, 100));
    }, gA = [
      H,
      I,
      g,
      T
    ], BA = [
      L,
      K,
      M
    ];
    return {
      setR: J,
      setG: j,
      setB: tA,
      setA: mA,
      setHue: dA,
      addPoint: V,
      setSolid: P,
      setLinear: O,
      setRadial: Y,
      valueToHSL: sA,
      valueToHSV: lA,
      valueToHex: y,
      valueToCmyk: x,
      setDegrees: N,
      setGradient: AA,
      setLightness: eA,
      setSaturation: nA,
      setSelectedPoint: F,
      deletePoint: z,
      isGradient: d,
      gradientType: f,
      degrees: c,
      setPointLeft: W,
      currentLeft: v,
      rgbaArr: gA,
      hslArr: BA,
      handleChange: D,
      previousColors: w,
      getGradientObject: U,
      selectedPoint: b
    };
  };
  function G1(A) {
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
  function vr({ field: A, data: e, onDataChange: t, props: r }) {
    var _a2;
    const n = A == null ? void 0 : A.name, [o, i] = h.useState(e[n] || null), [a, s] = h.useState(e[n] || ""), [l, c] = h.useState(false), { setGradient: u } = N1(o, i), [d, f] = h.useState(null), p = r.context.theme, B = (m) => {
      f(m.currentTarget), o ? u(o) : u();
    }, b = () => {
      f(null);
    }, v = (m) => {
      s(m.target.value), c(false);
    }, Q = () => {
      const m = G1(a);
      if (m.isValid) {
        const S = m.normalizedValue || null;
        i(S), c(false), t({
          [n]: S
        });
      } else c(true);
    }, w = () => {
      i(null), s(""), c(false), t({
        [n]: null
      });
    }, C = (m) => {
      i(m), t({
        [n]: m
      });
    }, U = !!d;
    return h.useEffect(() => {
      s(o || "");
    }, [
      o
    ]), h.useEffect(() => {
      var _a3;
      console.log("props.context.theme", (_a3 = r == null ? void 0 : r.context) == null ? void 0 : _a3.theme);
    }, [
      (_a2 = r == null ? void 0 : r.context) == null ? void 0 : _a2.theme
    ]), E.jsxs(E.Fragment, {
      children: [
        E.jsxs(de, {
          sx: {
            display: "flex",
            alignItems: "flex-end",
            gap: 0.5,
            mt: "7px"
          },
          children: [
            E.jsx(Dw, {
              sx: {
                "& .MuiInput-root:before": {
                  borderBottom: `1px solid ${p.palette.text.primary} !important`
                },
                "& .MuiInput-root:after": {
                  borderBottom: `2px solid ${p.palette.primary.main} !important`
                },
                "& .MuiInput-root:hover:before": {
                  borderBottom: `2px solid ${p.palette.text.primary} !important`
                }
              },
              variant: "standard",
              fullWidth: true,
              value: a,
              error: l,
              onChange: v,
              onBlur: Q,
              slotProps: {
                htmlInput: {
                  style: {
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    paddingBottom: "2px",
                    fontSize: "80%",
                    color: p.palette.text.primary
                  }
                }
              }
            }),
            o && E.jsx(nm, {
              onClick: w,
              title: "Clear color",
              size: "large",
              sx: {
                mb: "-14px",
                mr: -1.5
              },
              children: E.jsx(Xw, {
                sx: {
                  color: p.palette.text.secondary
                }
              })
            }),
            E.jsx(de, {
              onClick: B,
              title: "W\xE4hle Farbe",
              sx: {
                px: "4px",
                py: o ? "4px" : "3px",
                backgroundColor: p.name === "light" ? p.palette.grey[300] : o ? p.palette.common.black : "transparent !important",
                borderRadius: "1px",
                display: "inline-block",
                cursor: "pointer",
                verticalAlign: "middle",
                boxSizing: "border-box",
                border: o ? `1px solid ${p.name === "light" ? p.palette.grey[400] : p.palette.common.black}` : `1px dashed ${p.name === "light" ? p.palette.grey[400] : p.palette.text.secondary}`
              },
              children: E.jsx(de, {
                sx: {
                  width: o ? "36px" : "38px",
                  height: o ? "14px" : "18px",
                  borderRadius: "2px",
                  background: o || "transparent"
                }
              })
            })
          ]
        }),
        E.jsx(ef, {
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
          open: U,
          anchorEl: d,
          onClose: b,
          transformOrigin: {
            vertical: "top",
            horizontal: "center"
          },
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "center"
          },
          children: E.jsx(de, {
            sx: {
              borderRadius: "6px"
            },
            children: E.jsx(_1, {
              value: o,
              onChange: C,
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
    });
  }
  let V1, $1, j1;
  V1 = () => [
    {
      type: "custom",
      component: () => E.jsx(MA, {})
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
      component: () => E.jsx(MA, {
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
      component: (A, e, t, r) => E.jsx(vr, {
        field: A,
        data: e,
        onDataChange: t,
        props: r
      })
    },
    {
      type: "custom",
      component: () => E.jsx(MA, {
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
      component: (A, e, t, r) => E.jsx(vr, {
        field: A,
        data: e,
        onDataChange: t,
        props: r
      })
    },
    {
      type: "custom",
      component: () => E.jsx(MA, {
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
      component: (A, e, t, r) => E.jsx(vr, {
        field: A,
        data: e,
        onDataChange: t,
        props: r
      })
    },
    {
      type: "custom",
      component: () => E.jsx(MA, {
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
      component: (A, e, t, r) => E.jsx(vr, {
        field: A,
        data: e,
        onDataChange: t,
        props: r
      })
    },
    {
      type: "custom",
      component: () => E.jsx(MA, {
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
      component: () => E.jsx(MA, {}),
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
      component: () => E.jsx(MA, {
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
      component: () => E.jsx(MA, {}),
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
      component: () => E.jsx(MA, {}),
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
      component: () => E.jsx(MA, {}),
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
      component: () => E.jsx(MA, {
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
      component: () => E.jsx(MA, {
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
  $1 = () => {
    const { isSignalVisible: A, refService: e, widget: t } = h.useContext(at), r = h.useMemo(() => {
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
  W1 = (A, e = 28) => {
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
  j1 = (A) => {
    const { widget: e } = h.useContext(at), [t, r] = h.useState("100%"), [n, o] = h.useState("100%"), { width: i, height: a } = W1(A), s = h.useMemo(() => ({
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
  wp = h.forwardRef(({ children: A, data: e, oidValue: t = null, isValidType: r = true, bgActive: n = true, sx: o = {} }, i) => {
    const a = h.useRef(null), s = h.useRef(null), [l, c] = h.useState(null), [u, d] = h.useState(null), f = h.useRef(null), [p, B] = h.useState(null), b = h.useContext(at);
    if (!b) throw new Error("CollectionBase must be used within CollectionProvider");
    const { wrappedContent: v, widget: Q } = b, w = Q.data.oidObject, { backgroundStyles: C, borderStyles: U } = Ql(Q.style), m = h.useRef(null), { width: S, height: H } = j1(l || m), I = (t || t === 0 || t === false) && `${t}${(w == null ? void 0 : w.unit) === void 0 ? "" : w == null ? void 0 : w.unit}`;
    $1();
    const g = w == null ? void 0 : w._id, T = e.footer || e.alias || e.value || I || "";
    return h.useEffect(() => {
      Q.data.noFooter || p && (p.innerHTML = T);
    }, [
      T,
      Q.data.noFooter,
      p
    ]), h.useEffect(() => {
      Q.data.noHeader || u && (u.innerHTML = e.header);
    }, [
      e.header,
      Q.data.noHeader,
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
    })), E.jsxs(rs, {
      ref: a,
      className: "BASE-PAPER-0",
      square: Q.data.squaredCorner,
      variant: Q.data.outlinedFrame ? "outlined" : "elevation",
      sx: {
        overflow: "hidden",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        ...C,
        border: v ? U.border : null,
        borderWidth: v ? U.borderWidth : null,
        borderStyle: v ? U.borderStyle : null,
        borderRadius: v ? U.borderRadius : null,
        borderColor: v ? U.borderColor : e.frameBackgroundColorActive || e.frameBackgroundColor || U.borderColor,
        background: v ? Q.data.frameBackgroundColorActive || e.frameBackgroundColorActive || e.frameBackgroundColor || Q.data.frameBackgroundActive || e.frameBackgroundActive || e.frameBackground : "transparent"
      },
      children: [
        !!r && E.jsxs(E.Fragment, {
          children: [
            E.jsx(de, {
              sx: {
                width: Q.data.noHeader ? "0%" : "100%",
                height: Q.data.noHeader ? "0%" : "auto",
                mt: (Q.data.basePadding ?? 8) / 2,
                mb: -(Q.data.basePadding ?? 8) / 2
              },
              children: E.jsx(en, {
                ref: (R) => {
                  d(R), f.current = R;
                },
                noWrap: true,
                variant: "body2",
                sx: {
                  fontSize: e.headerSize,
                  color: Q.data.textColor || e.textColorActive || e.textColor
                }
              })
            }),
            E.jsx(de, {
              className: "BASE-BOX-1",
              ref: c,
              sx: {
                overflow: "hidden",
                p: Q.data.basePadding,
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              },
              children: E.jsx(rs, {
                ref: s,
                className: "BASE-PAPER-1",
                elevation: Q.data.outlined ? 0 : Number(Q.data.baseElevation) || 0,
                square: !Q.data.basePadding || Q.data.squaredCorner,
                variant: Q.data.outlined ? "outlined" : "elevation",
                sx: {
                  overflow: "hidden",
                  width: S,
                  height: H,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderColor: v ? U.borderColor : e.backgroundColorActive || e.backgroundColor || U.borderColor,
                  background: v ? Q.data.backgroundColorActive || n && e.backgroundColorActive || e.backgroundColor || Q.data.backgroundActive || n && e.backgroundActive || e.background : "transparent",
                  borderRadius: Q.data.circle || Q.data.ellipse ? "50%" : null,
                  ...o
                },
                children: A
              })
            }),
            E.jsx(de, {
              sx: {
                width: Q.data.noFooter ? "0%" : "100%",
                height: Q.data.noFooter ? "0%" : "auto",
                mt: -(Q.data.basePadding ?? 8) / 2,
                mb: (Q.data.basePadding ?? 8) / 2
              },
              children: E.jsx(en, {
                ref: B,
                noWrap: true,
                variant: "body2",
                sx: {
                  fontSize: e.footerSize,
                  color: Q.data.textColor || e.textColorActive || e.textColor
                }
              })
            })
          ]
        }),
        !r && E.jsx(de, {
          sx: {
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          },
          children: E.jsx(en, {
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
  wp.displayName = "CollectionBase";
  function dr(A, e) {
    return A[e];
  }
  function Nr(A) {
    return typeof A == "object" && A !== null && "sliderOrientation" in A;
  }
  const Tl = (A) => typeof A == "number" ? `${A / 100}rem` : null;
  kl = function(A) {
    const { theme: e, widget: t, widget: { data: r }, getPropertyValue: n } = h.useContext(at), o = r[`${A}Object`], { fontStyles: i, textStyles: a, backgroundStyles: s } = Ql(t.style), [l, c] = h.useState(), u = n(A), d = o == null ? void 0 : o.name, f = h.useCallback(Tl, []), p = h.useCallback((C, U = "") => {
      const m = `${C}${U}`;
      return dr(r, m);
    }, [
      r
    ]), { states: B, widgetStates: b, minValue: v, maxValue: Q } = h.useMemo(() => (() => {
      const U = [], m = {};
      let S = null, H = null;
      const I = o == null ? void 0 : o.type, g = (o == null ? void 0 : o.commonStates) || {}, T = Object.entries(g);
      if (I === "number" || I === "string" || I === "boolean" || I === "mixed") {
        for (let R = 1; R <= r.values_count; R++) {
          const L = r[`value${R}`], K = r[`alias${R}`], M = o == null ? void 0 : o.unit;
          if (L != null && /\S/.test(String(L))) {
            const O = T.find(([N]) => N === String(L));
            U.push({
              value: O ? I === "number" ? Number(O[0]) : String(O[0]) : I === "number" ? Number(L) : L,
              label: String(K && String(K).trim() !== "" ? K : `${L}${M}`).replace(/(\r\n|\n|\r)/gm, ""),
              fontSize: (() => {
                if (String(u) === String(L) && typeof r.valueSizeActive == "number") return f(r.valueSizeActive);
                const P = dr(r, `valueSize${R}`);
                if (typeof P == "number") return f(P);
                if (Nr(r) && typeof r.markerTextSize == "number") return f(r.markerTextSize);
                if (typeof r.valueSize == "number") return f(r.valueSize);
              })(),
              textColor: (() => {
                if (String(u) === String(L) && r.textColorActive) return r.textColorActive;
                const P = dr(r, `textColor${R}`);
                if (P) return P;
                if (Nr(r) && r.markerTextColor) return r.markerTextColor;
                if (r.textColor) return r.textColor;
              })(),
              icon: (() => {
                const N = r[`icon${R}`] || r[`iconSmall${R}`] || r.icon || r.iconSmall;
                return typeof N == "string" ? N : void 0;
              })(),
              iconSize: typeof r[`iconSize${R}`] == "number" ? r[`iconSize${R}`] : void 0,
              iconWidth: (() => {
                if (String(u) === String(L) && typeof r.iconSizeActive == "number") return r.iconSizeActive;
                const P = dr(r, `iconSize${R}`);
                return typeof P == "number" ? P : Nr(r) && typeof r.markerIconSize == "number" ? r.markerIconSize : typeof r.iconSize == "number" ? r.iconSize : 100;
              })(),
              iconHeight: (() => {
                if (String(u) === String(L) && typeof r.iconSizeActive == "number") return r.iconSizeActive;
                const P = dr(r, `iconSize${R}`);
                return typeof P == "number" ? P : Nr(r) && typeof r.markerIconSize == "number" ? r.markerIconSize : typeof r.iconSize == "number" ? r.iconSize : 100;
              })(),
              iconXOffset: (() => {
                const N = p("iconXOffset", String(R));
                return N && N !== "0px" ? N : "0px";
              })(),
              iconYOffset: (() => {
                const N = p("iconYOffset", String(R));
                return N && N !== "0px" ? N : "0px";
              })(),
              iconColor: dr(r, `iconColor${R}`) || (Nr(r) ? r.markerIconColor : void 0) || r.iconColor || e.palette.primary.main,
              backgroundColor: r.backgroundColor || s.backgroundColor || "",
              backgroundColorActive: p("backgroundColor", String(R)),
              background: String(r.background || s.background || ""),
              backgroundActive: p("background", String(R)),
              frameBackgroundColor: r.frameBackgroundColor || s.backgroundColor || "",
              frameBackgroundColorActive: p("frameBackgroundColor", String(R)),
              frameBackground: String(r.frameBackground || s.background || ""),
              frameBackgroundActive: p("frameBackground", String(R))
            });
            const Y = String(O ? O[0] : L);
            m[Y] = K && String(K).trim() !== "" ? K : `${L}${M}`;
          }
        }
        if (I === "number" && U.length) {
          const R = U.map((L) => typeof L.value == "number" ? L.value : NaN).filter((L) => !isNaN(L));
          R.length > 0 && (S = Math.min(...R), H = Math.max(...R));
        }
      }
      return {
        states: U,
        widgetStates: m,
        minValue: S,
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
      const C = (m = "") => ({
        textColor: r.textColor || a.color || e.palette.primary.main,
        textColorActive: p("textColor", String(m)),
        header: String(r.headerActive || p("header", String(m)) || r.header || d || "").replace(/(\r\n|\n|\r)/gm, ""),
        headerSize: f(r.headerSize) || f(r.headerSizeActive) || f(p("headerSize", String(m))) || (typeof i.fontSize == "string" ? i.fontSize : null),
        footer: String(r.footerActive || p("footer", String(m)) || r.footer || "").replace(/(\r\n|\n|\r)/gm, ""),
        footerSize: f(r.footerSize) || f(r.footerSizeActive) || f(p("footerSize", String(m))) || (typeof i.fontSize == "string" ? i.fontSize : null),
        alias: String(p("alias", String(m)) || "").replace(/(\r\n|\n|\r)/gm, ""),
        value: (() => {
          const S = p("value", String(m));
          return S != null ? `${S}${(o == null ? void 0 : o.unit) !== void 0 ? o.unit : ""}` : void 0;
        })(),
        valueSize: f(r.valueSize) || (typeof i.fontSize == "string" ? i.fontSize : null),
        valueSizeActive: typeof p("valueSize", String(m)) == "number" ? f(p("valueSize", String(m))) : null,
        icon: (() => {
          if (r.noIcon) return false;
          const S = r.icon || r.iconSmall;
          return typeof S == "string" ? S : false;
        })(),
        iconActive: (() => {
          const S = !r.noIcon && (p("icon", String(m)) || p("iconSmall", String(m)));
          return typeof S == "string" ? S : false;
        })(),
        iconSize: typeof r.iconSize == "number" && `calc(24px * ${r.iconSize} / 100)` || "24px",
        iconSizeActive: (() => {
          const S = p("iconSize", String(m));
          return S ? `calc(24px * ${S} / 100)` : false;
        })(),
        iconSizeActiveOnly: p("iconSize", String(m)),
        iconSizeOnly: p("iconSize", String(m)) || p("iconSize", String(m)) === 0 ? p("iconSize", String(m)) : r.iconSize,
        iconColor: r.iconColor,
        iconColorActive: p("iconColor", String(m)),
        iconHover: r.iconHover ? `${r.iconHover}%` : void 0,
        iconHoverActive: (() => {
          const S = p("iconHover", String(m));
          return S ? `${S}%` : void 0;
        })(),
        iconXOffset: !!p("iconXOffset", String(m)) && p("iconXOffset", String(m)) !== "0px" && p("iconXOffset", String(m)) || "0px",
        iconYOffset: !!p("iconYOffset", String(m)) && p("iconYOffset", String(m)) !== "0px" && p("iconYOffset", String(m)) || "0px",
        backgroundColor: r.backgroundColor || s.backgroundColor || "",
        backgroundColorActive: p("backgroundColor", String(m)),
        background: String(r.background || s.background || ""),
        backgroundActive: p("background", String(m)),
        frameBackgroundColor: r.frameBackgroundColor || s.backgroundColor || "",
        frameBackgroundColorActive: p("frameBackgroundColor", String(m)),
        frameBackground: String(r.frameBackground || s.background || ""),
        frameBackgroundActive: p("frameBackground", String(m))
      });
      switch (o == null ? void 0 : o.type) {
        case "mixed":
        case "boolean":
        case "number":
        case "string": {
          const m = B.findIndex((S) => String(S.value) === String(u));
          return m !== -1 ? (c(m + 1), C(String(m + 1))) : (c(void 0), C(""));
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
      widgetStates: b,
      minValue: v,
      maxValue: Q,
      data: w,
      activeIndex: l,
      setActiveIndex: c,
      oidValue: u
    };
  };
  function Nu(A) {
    return !(A == null || `${A}`.trim() === "" || Number.isNaN(+A));
  }
  var Rs = function(A, e) {
    return Rs = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(t, r) {
      t.__proto__ = r;
    } || function(t, r) {
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }, Rs(A, e);
  };
  function Kt(A, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
    Rs(A, e);
    function t() {
      this.constructor = A;
    }
    A.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
  }
  function z1(A, e, t, r) {
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
  function Cp(A, e) {
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
  function xr(A) {
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
  function ri(A, e) {
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
  function ni(A, e, t) {
    if (t || arguments.length === 2) for (var r = 0, n = e.length, o; r < n; r++) (o || !(r in e)) && (o || (o = Array.prototype.slice.call(e, 0, r)), o[r] = e[r]);
    return A.concat(o || Array.prototype.slice.call(e));
  }
  function br(A) {
    return this instanceof br ? (this.v = A, this) : new br(A);
  }
  function X1(A, e, t) {
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
        return new Promise(function(b, v) {
          o.push([
            f,
            B,
            b,
            v
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
      f.value instanceof br ? Promise.resolve(f.value.v).then(c, u) : d(o[0][2], f);
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
  function Y1(A) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var e = A[Symbol.asyncIterator], t;
    return e ? e.call(A) : (A = typeof xr == "function" ? xr(A) : A[Symbol.iterator](), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
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
  function yp(A) {
    var e = function(r) {
      Error.call(r), r.stack = new Error().stack;
    }, t = A(e);
    return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t;
  }
  var _a = yp(function(A) {
    return function(t) {
      A(this), this.message = t ? t.length + ` errors occurred during unsubscription:
` + t.map(function(r, n) {
        return n + 1 + ") " + r.toString();
      }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = t;
    };
  });
  function oi(A, e) {
    if (A) {
      var t = A.indexOf(e);
      0 <= t && A.splice(t, 1);
    }
  }
  var Tn = (function() {
    function A(e) {
      this.initialTeardown = e, this.closed = false, this._parentage = null, this._finalizers = null;
    }
    return A.prototype.unsubscribe = function() {
      var e, t, r, n, o;
      if (!this.closed) {
        this.closed = true;
        var i = this._parentage;
        if (i) if (this._parentage = null, Array.isArray(i)) try {
          for (var a = xr(i), s = a.next(); !s.done; s = a.next()) {
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
          o = B instanceof _a ? B.errors : [
            B
          ];
        }
        var u = this._finalizers;
        if (u) {
          this._finalizers = null;
          try {
            for (var d = xr(u), f = d.next(); !f.done; f = d.next()) {
              var p = f.value;
              try {
                Gu(p);
              } catch (B) {
                o = o ?? [], B instanceof _a ? o = ni(ni([], ri(o)), ri(B.errors)) : o.push(B);
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
        if (o) throw new _a(o);
      }
    }, A.prototype.add = function(e) {
      var t;
      if (e && e !== this) if (this.closed) Gu(e);
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
      t === e ? this._parentage = null : Array.isArray(t) && oi(t, e);
    }, A.prototype.remove = function(e) {
      var t = this._finalizers;
      t && oi(t, e), e instanceof A && e._removeParent(this);
    }, A.EMPTY = (function() {
      var e = new A();
      return e.closed = true, e;
    })(), A;
  })(), bp = Tn.EMPTY;
  function Qp(A) {
    return A instanceof Tn || A && "closed" in A && pe(A.remove) && pe(A.add) && pe(A.unsubscribe);
  }
  function Gu(A) {
    pe(A) ? A() : A.unsubscribe();
  }
  var J1 = {
    Promise: void 0
  }, Z1 = {
    setTimeout: function(A, e) {
      for (var t = [], r = 2; r < arguments.length; r++) t[r - 2] = arguments[r];
      return setTimeout.apply(void 0, ni([
        A,
        e
      ], ri(t)));
    },
    clearTimeout: function(A) {
      return clearTimeout(A);
    },
    delegate: void 0
  };
  function Fp(A) {
    Z1.setTimeout(function() {
      throw A;
    });
  }
  function Vu() {
  }
  function To(A) {
    A();
  }
  var Ll = (function(A) {
    Kt(e, A);
    function e(t) {
      var r = A.call(this) || this;
      return r.isStopped = false, t ? (r.destination = t, Qp(t) && t.add(r)) : r.destination = eS, r;
    }
    return e.create = function(t, r, n) {
      return new Os(t, r, n);
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
  })(Tn), q1 = (function() {
    function A(e) {
      this.partialObserver = e;
    }
    return A.prototype.next = function(e) {
      var t = this.partialObserver;
      if (t.next) try {
        t.next(e);
      } catch (r) {
        Co(r);
      }
    }, A.prototype.error = function(e) {
      var t = this.partialObserver;
      if (t.error) try {
        t.error(e);
      } catch (r) {
        Co(r);
      }
      else Co(e);
    }, A.prototype.complete = function() {
      var e = this.partialObserver;
      if (e.complete) try {
        e.complete();
      } catch (t) {
        Co(t);
      }
    }, A;
  })(), Os = (function(A) {
    Kt(e, A);
    function e(t, r, n) {
      var o = A.call(this) || this, i;
      return pe(t) || !t ? i = {
        next: t ?? void 0,
        error: r ?? void 0,
        complete: n ?? void 0
      } : i = t, o.destination = new q1(i), o;
    }
    return e;
  })(Ll);
  function Co(A) {
    Fp(A);
  }
  function AS(A) {
    throw A;
  }
  var eS = {
    closed: true,
    next: Vu,
    error: AS,
    complete: Vu
  }, Rl = (function() {
    return typeof Symbol == "function" && Symbol.observable || "@@observable";
  })();
  function tS(A) {
    return A;
  }
  function rS(A) {
    return A.length === 0 ? tS : A.length === 1 ? A[0] : function(t) {
      return A.reduce(function(r, n) {
        return n(r);
      }, t);
    };
  }
  var Ct = (function() {
    function A(e) {
      e && (this._subscribe = e);
    }
    return A.prototype.lift = function(e) {
      var t = new A();
      return t.source = this, t.operator = e, t;
    }, A.prototype.subscribe = function(e, t, r) {
      var n = this, o = oS(e) ? e : new Os(e, t, r);
      return To(function() {
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
      return t = $u(t), new t(function(n, o) {
        var i = new Os({
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
    }, A.prototype[Rl] = function() {
      return this;
    }, A.prototype.pipe = function() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return rS(e)(this);
    }, A.prototype.toPromise = function(e) {
      var t = this;
      return e = $u(e), new e(function(r, n) {
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
  function $u(A) {
    var e;
    return (e = A ?? J1.Promise) !== null && e !== void 0 ? e : Promise;
  }
  function nS(A) {
    return A && pe(A.next) && pe(A.error) && pe(A.complete);
  }
  function oS(A) {
    return A && A instanceof Ll || nS(A) && Qp(A);
  }
  function iS(A) {
    return pe(A == null ? void 0 : A.lift);
  }
  function Up(A) {
    return function(e) {
      if (iS(e)) return e.lift(function(t) {
        try {
          return A(t, this);
        } catch (r) {
          this.error(r);
        }
      });
      throw new TypeError("Unable to lift unknown Observable type");
    };
  }
  function Ms(A, e, t, r, n) {
    return new aS(A, e, t, r, n);
  }
  var aS = (function(A) {
    Kt(e, A);
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
  })(Ll), sS = yp(function(A) {
    return function() {
      A(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
    };
  }), Sp = (function(A) {
    Kt(e, A);
    function e() {
      var t = A.call(this) || this;
      return t.closed = false, t.currentObservers = null, t.observers = [], t.isStopped = false, t.hasError = false, t.thrownError = null, t;
    }
    return e.prototype.lift = function(t) {
      var r = new Wu(this, this);
      return r.operator = t, r;
    }, e.prototype._throwIfClosed = function() {
      if (this.closed) throw new sS();
    }, e.prototype.next = function(t) {
      var r = this;
      To(function() {
        var n, o;
        if (r._throwIfClosed(), !r.isStopped) {
          r.currentObservers || (r.currentObservers = Array.from(r.observers));
          try {
            for (var i = xr(r.currentObservers), a = i.next(); !a.done; a = i.next()) {
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
      To(function() {
        if (r._throwIfClosed(), !r.isStopped) {
          r.hasError = r.isStopped = true, r.thrownError = t;
          for (var n = r.observers; n.length; ) n.shift().error(t);
        }
      });
    }, e.prototype.complete = function() {
      var t = this;
      To(function() {
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
      return o || i ? bp : (this.currentObservers = null, a.push(t), new Tn(function() {
        r.currentObservers = null, oi(a, t);
      }));
    }, e.prototype._checkFinalizedStatuses = function(t) {
      var r = this, n = r.hasError, o = r.thrownError, i = r.isStopped;
      n ? t.error(o) : i && t.complete();
    }, e.prototype.asObservable = function() {
      var t = new Ct();
      return t.source = this, t;
    }, e.create = function(t, r) {
      return new Wu(t, r);
    }, e;
  })(Ct), Wu = (function(A) {
    Kt(e, A);
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
      return (n = (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(t)) !== null && n !== void 0 ? n : bp;
    }, e;
  })(Sp), lS = {
    now: function() {
      return Date.now();
    }
  }, cS = (function(A) {
    Kt(e, A);
    function e(t, r) {
      return A.call(this) || this;
    }
    return e.prototype.schedule = function(t, r) {
      return this;
    }, e;
  })(Tn), ju = {
    setInterval: function(A, e) {
      for (var t = [], r = 2; r < arguments.length; r++) t[r - 2] = arguments[r];
      return setInterval.apply(void 0, ni([
        A,
        e
      ], ri(t)));
    },
    clearInterval: function(A) {
      return clearInterval(A);
    },
    delegate: void 0
  }, uS = (function(A) {
    Kt(e, A);
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
      return n === void 0 && (n = 0), ju.setInterval(t.flush.bind(t, this), n);
    }, e.prototype.recycleAsyncId = function(t, r, n) {
      if (n === void 0 && (n = 0), n != null && this.delay === n && this.pending === false) return r;
      r != null && ju.clearInterval(r);
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
        this.work = this.state = this.scheduler = null, this.pending = false, oi(o, this), r != null && (this.id = this.recycleAsyncId(n, r, null)), this.delay = null, A.prototype.unsubscribe.call(this);
      }
    }, e;
  })(cS), zu = (function() {
    function A(e, t) {
      t === void 0 && (t = A.now), this.schedulerActionCtor = e, this.now = t;
    }
    return A.prototype.schedule = function(e, t, r) {
      return t === void 0 && (t = 0), new this.schedulerActionCtor(this, e).schedule(r, t);
    }, A.now = lS.now, A;
  })(), dS = (function(A) {
    Kt(e, A);
    function e(t, r) {
      r === void 0 && (r = zu.now);
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
  })(zu), Ol = new dS(uS), fS = Ol;
  function pS(A) {
    return A && pe(A.schedule);
  }
  var gS = (function(A) {
    return A && typeof A.length == "number" && typeof A != "function";
  });
  function hS(A) {
    return pe(A == null ? void 0 : A.then);
  }
  function BS(A) {
    return pe(A[Rl]);
  }
  function mS(A) {
    return Symbol.asyncIterator && pe(A == null ? void 0 : A[Symbol.asyncIterator]);
  }
  function vS(A) {
    return new TypeError("You provided " + (A !== null && typeof A == "object" ? "an invalid object" : "'" + A + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
  }
  function wS() {
    return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
  }
  var CS = wS();
  function yS(A) {
    return pe(A == null ? void 0 : A[CS]);
  }
  function bS(A) {
    return X1(this, arguments, function() {
      var t, r, n, o;
      return Cp(this, function(i) {
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
              br(t.read())
            ];
          case 3:
            return r = i.sent(), n = r.value, o = r.done, o ? [
              4,
              br(void 0)
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
              br(n)
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
  function QS(A) {
    return pe(A == null ? void 0 : A.getReader);
  }
  function FS(A) {
    if (A instanceof Ct) return A;
    if (A != null) {
      if (BS(A)) return US(A);
      if (gS(A)) return SS(A);
      if (hS(A)) return xS(A);
      if (mS(A)) return xp(A);
      if (yS(A)) return ES(A);
      if (QS(A)) return IS(A);
    }
    throw vS(A);
  }
  function US(A) {
    return new Ct(function(e) {
      var t = A[Rl]();
      if (pe(t.subscribe)) return t.subscribe(e);
      throw new TypeError("Provided object does not correctly implement Symbol.observable");
    });
  }
  function SS(A) {
    return new Ct(function(e) {
      for (var t = 0; t < A.length && !e.closed; t++) e.next(A[t]);
      e.complete();
    });
  }
  function xS(A) {
    return new Ct(function(e) {
      A.then(function(t) {
        e.closed || (e.next(t), e.complete());
      }, function(t) {
        return e.error(t);
      }).then(null, Fp);
    });
  }
  function ES(A) {
    return new Ct(function(e) {
      var t, r;
      try {
        for (var n = xr(A), o = n.next(); !o.done; o = n.next()) {
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
  function xp(A) {
    return new Ct(function(e) {
      HS(A, e).catch(function(t) {
        return e.error(t);
      });
    });
  }
  function IS(A) {
    return xp(bS(A));
  }
  function HS(A, e) {
    var t, r, n, o;
    return z1(this, void 0, void 0, function() {
      var i, a;
      return Cp(this, function(s) {
        switch (s.label) {
          case 0:
            s.trys.push([
              0,
              5,
              6,
              11
            ]), t = Y1(A), s.label = 1;
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
  function TS(A) {
    return A instanceof Date && !isNaN(A);
  }
  function kS(A, e, t) {
    A === void 0 && (A = 0), t === void 0 && (t = fS);
    var r = -1;
    return e != null && (pS(e) ? t = e : r = e), new Ct(function(n) {
      var o = TS(A) ? +A - t.now() : A;
      o < 0 && (o = 0);
      var i = 0;
      return t.schedule(function() {
        n.closed || (n.next(i++), 0 <= r ? this.schedule(void 0, r) : n.complete());
      }, o);
    });
  }
  function LS(A, e) {
    return e === void 0 && (e = Ol), Up(function(t, r) {
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
      t.subscribe(Ms(r, function(l) {
        o = l, i = e.now(), n || (n = e.schedule(s, A), r.add(n));
      }, function() {
        a(), r.complete();
      }, void 0, function() {
        o = n = null;
      }));
    });
  }
  function RS(A, e) {
    return Up(function(t, r) {
      var n = e ?? {}, o = n.leading, i = o === void 0 ? true : o, a = n.trailing, s = a === void 0 ? false : a, l = false, c = null, u = null, d = false, f = function() {
        u == null ? void 0 : u.unsubscribe(), u = null, s && (b(), d && r.complete());
      }, p = function() {
        u = null, d && r.complete();
      }, B = function(v) {
        return u = FS(A(v)).subscribe(Ms(r, f, p));
      }, b = function() {
        if (l) {
          l = false;
          var v = c;
          c = null, r.next(v), !d && B(v);
        }
      };
      t.subscribe(Ms(r, function(v) {
        l = true, c = v, !(u && !u.closed) && (i ? b() : B(v));
      }, function() {
        d = true, !(s && l && u && !u.closed) && r.complete();
      }));
    });
  }
  function OS(A, e, t) {
    e === void 0 && (e = Ol);
    var r = kS(A, e);
    return RS(function() {
      return r;
    }, t);
  }
  function MS({ oidObject: A, data: { sampleInterval: e, sampleIntervalValue: t, delay: r } }) {
    const { setValue: n } = h.useContext(at), o = h.useRef(), i = h.useRef(null), a = h.useRef(n);
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
      if (o.current || (o.current = new Sp()), !s) return;
      const c = o.current;
      return i.current && i.current.unsubscribe(), i.current = c.pipe(e ? OS(l, void 0, {
        leading: false,
        trailing: true
      }) : LS(l)).subscribe((u) => {
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
  const yo = 1111111111111;
  function KS(A, e) {
    switch (e) {
      case "string":
        return String(A);
      case "number":
        return Nu(A) ? Number(A) : void 0;
      case "mixed":
        return /^true$/i.test(String(A)) ? true : /^false$/i.test(String(A)) ? false : Nu(A) ? Number(A) : String(A);
      case "boolean":
        return /^true$/i.test(String(A));
      default:
        return A;
    }
  }
  function DS(A, e) {
    const t = String(A ?? ""), r = String(e ?? "");
    if (t === r) return false;
    const n = Number(A ?? 0), o = Number(e ?? 0);
    return Math.abs(n - o) >= 1;
  }
  let _S, NS, VS, $S;
  PS = (A) => {
    const { setState: e, widget: t, getPropertyValue: r, values: n } = h.useContext(at), { data: o } = kl("oid"), i = t.data[`${A}Object`], a = r(A), s = h.useRef({
      lc: void 0,
      value: void 0
    }), l = h.useRef(0), c = Number(o.delay ?? t.data.delay) || 300, u = (i == null ? void 0 : i._id) ? n[`${i._id}.lc`] : void 0, d = (i == null ? void 0 : i._id) ? n[`${i._id}.val`] : void 0, f = h.useMemo(() => {
      if (!(i == null ? void 0 : i._id)) return false;
      if (u === yo) return s.current = {
        lc: yo,
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
      const b = s.current.lc !== u, v = DS(s.current.value, d);
      return s.current = {
        lc: u,
        value: d
      }, b && v;
    }, [
      i == null ? void 0 : i._id,
      u,
      d
    ]), p = MS({
      oidObject: i,
      data: {
        delay: t.data.delay,
        sampleInterval: t.data.sampleInterval,
        sampleIntervalValue: t.data.sampleIntervalValue
      }
    }), B = h.useCallback((b, v = false) => {
      if (!(i == null ? void 0 : i._id)) return;
      const Q = KS(b, i == null ? void 0 : i.type);
      Q != null && (e((w) => ({
        values: {
          ...w.values,
          [`${i._id}.val`]: Q,
          [`${i._id}.lc`]: yo
        }
      })), l.current = Date.now() + c + 1500, s.current = {
        lc: yo,
        value: Q
      }, !v && p && p.next(Q));
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
  _S = (A) => !A || typeof A != "string" ? false : /^data:image\/(svg\+xml|png|jpe?g|gif);base64,/i.test(A);
  ii = (A, e) => _S(A) ? !e || e === "" ? {} : {
    color: e,
    filter: "drop-shadow(0px 10000px 0)",
    transform: "translateY(-10000px)"
  } : {};
  NS = ({ marks: A, sliderOrientation: e, aliasActive: t, activeMarkIndex: r, defaultIconColor: n, ...o }) => {
    var _a2, _b2;
    const [i, a] = h.useState(null), { data: s } = kl("oid"), l = h.useContext(at), { widget: c } = l, u = o["data-index"], d = (_b2 = (_a2 = o.ownerState) == null ? void 0 : _a2.marks) == null ? void 0 : _b2[u], f = r === u, p = h.useCallback(Tl, []);
    return h.useEffect(() => {
      i && (d == null ? void 0 : d.label) && (f && t ? i.innerHTML = t : i.innerHTML = d.label);
    }, [
      d == null ? void 0 : d.label,
      i,
      f,
      t,
      u
    ]), A && d ? E.jsx(sf, {
      ...o,
      children: E.jsxs(de, {
        sx: {
          display: "flex",
          flexDirection: e === "vertical" ? "row" : "column",
          alignItems: "center",
          justifyContent: "center"
        },
        children: [
          E.jsx(en, {
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
          E.jsx(de, {
            "data-position": "active",
            sx: {
              position: "relative",
              bottom: d.iconYOffset,
              left: d.iconXOffset,
              flexGrow: 1
            },
            children: (() => {
              const B = f && (c.data.iconActive || c.data.iconSmallActive) || d.icon || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", b = (f && c.data.iconColorActive && c.data.iconColorActive !== "" ? c.data.iconColorActive : null) || (d.iconColor && d.iconColor !== "" ? d.iconColor : null) || (s.iconColor && s.iconColor !== "" ? s.iconColor : null) || n || void 0;
              return E.jsx("img", {
                "data-img": "active",
                src: B,
                alt: "",
                style: {
                  position: "relative",
                  width: f && typeof c.data.iconSizeActive == "number" ? `${24 * c.data.iconSizeActive / 100}px` : `${24 * d.iconWidth / 100}px`,
                  ...ii(B, b)
                }
              });
            })()
          })
        ]
      })
    }) : null;
  };
  GS = ({ data: A, widget: e }) => {
    const r = h.useContext(at).theme, n = (typeof A.icon == "string" ? A.icon : void 0) || (typeof A.iconActive == "string" ? A.iconActive : void 0), o = (typeof A.iconSize == "string" ? A.iconSize : void 0) || (typeof A.iconSizeActive == "string" ? A.iconSizeActive : void 0), i = A.iconColorActive || A.iconColor || r.palette.primary.main;
    return !e.data.noHeaderIcon && n ? E.jsx("img", {
      alt: "",
      src: n,
      style: {
        position: "absolute",
        top: `calc(0px - ${e.data.iconYOffset || 0})`,
        right: `calc(0px - ${e.data.iconXOffset || 0})`,
        height: o,
        ...ii(n, i)
      }
    }) : null;
  };
  VS = hA(Lw, {
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
  $S = () => {
    const A = h.useContext(at), { widget: { data: { oidObject: e } }, widget: t, theme: r } = A, { data: n, states: o, minValue: i, maxValue: a, activeIndex: s } = kl("oid"), [l, c] = h.useState(null), { value: u, updateValue: d, hasBackendChange: f } = PS("oid"), [p, B] = h.useState(typeof u == "number" ? u : void 0), b = h.useRef(null), [v, Q] = h.useState({
      x: 0,
      y: 0
    }), w = t.data.startIconColor || n.iconColor || r.palette.primary.main, C = t.data.endIconColor || n.iconColor || r.palette.primary.main, U = t.data.sliderOrientation === "horizontal" ? t.data.iconMin || t.data.iconSmallMin : t.data.iconMax || t.data.iconSmallMax, m = t.data.sliderOrientation === "horizontal" ? t.data.iconMax || t.data.iconSmallMax : t.data.iconMin || t.data.iconSmallMin, S = e == null ? void 0 : e.type, H = S === "number", I = h.useCallback(Tl, []), g = h.useMemo(() => !t.data.onlyStates && t.data.minValue !== void 0 ? Number(t.data.minValue) : i, [
      t.data.onlyStates,
      t.data.minValue,
      i
    ]), T = h.useMemo(() => !t.data.onlyStates && t.data.maxValue !== void 0 ? Number(t.data.maxValue) : a, [
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
      if (t.data.onlyStates) return K.sort((N, P) => N.value - P.value);
      const M = g, O = T;
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
      const Y = Number(t.data.markStep) || 1;
      if (M !== null && O !== null) for (let N = M + Y; N < O; N += Y) K.some((P) => P.value === N) || K.push({
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
      return K.sort((N, P) => N.value - P.value), K;
    }, [
      o,
      g,
      T,
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
      if (!b.current) return;
      const K = b.current.querySelector(".MuiSlider-root"), M = b.current.querySelector(".MuiSlider-rail");
      if (K && M) {
        const O = b.current.getBoundingClientRect(), Y = M.getBoundingClientRect(), N = Y.left - O.left + Y.width / 2, P = Y.top - O.top + Y.height / 2, AA = O.width / 2, Z = O.height / 2;
        Q({
          x: N - AA,
          y: P - Z
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
      if (!b.current) return;
      const K = new ResizeObserver(L);
      return K.observe(b.current), () => K.disconnect();
    }, []), h.useEffect(() => {
      if (u === void 0) return;
      const K = R.findIndex((M) => String(M.value) === String(u));
      K !== -1 && c(K);
    }, [
      u,
      R
    ]), E.jsxs(wp, {
      isValidType: H,
      data: n,
      oidValue: u,
      sx: {
        p: Number(t.data.sliderPadding) || 1
      },
      children: [
        E.jsx(GS, {
          data: n,
          widget: t
        }),
        H ? E.jsxs(de, {
          ref: b,
          sx: {
            display: "flex",
            flexDirection: t.data.sliderOrientation === "horizontal" ? "row" : "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%"
          },
          children: [
            (t.data.sliderOrientation === "horizontal" && (t.data.iconMin || t.data.iconSmallMin) || t.data.sliderOrientation === "vertical" && (t.data.iconMax || t.data.iconSmallMax)) && E.jsx(de, {
              sx: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: 0,
                ...t.data.sliderOrientation === "horizontal" ? {
                  transform: `translateY(${v.y}px)`
                } : {
                  transform: `translateX(${v.x}px)`
                }
              },
              children: E.jsx("img", {
                alt: "",
                src: U,
                style: {
                  width: t.data.sliderOrientation === "horizontal" ? t.data.iconSizeStart || "24px" : t.data.iconSizeEnd || "24px",
                  ...ii(U, t.data.sliderOrientation === "horizontal" ? w : C)
                }
              })
            }),
            E.jsx(de, {
              sx: {
                display: "flex",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                minWidth: t.data.sliderOrientation === "horizontal" ? "200px" : "auto",
                minHeight: t.data.sliderOrientation === "vertical" ? "200px" : "auto"
              },
              children: typeof p == "number" && E.jsx(VS, {
                data: t.data,
                slots: {
                  markLabel: NS
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
                disabled: S !== "number",
                valueLabelDisplay: t.data.valueLabelDisplay,
                orientation: t.data.sliderOrientation,
                min: g ?? void 0,
                max: T ?? void 0,
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
            (t.data.sliderOrientation === "horizontal" && (t.data.iconMax || t.data.iconSmallMax) || t.data.sliderOrientation === "vertical" && (t.data.iconMin || t.data.iconSmallMin)) && E.jsx(de, {
              sx: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: 0,
                ...t.data.sliderOrientation === "horizontal" ? {
                  transform: `translateY(${v.y}px)`
                } : {
                  transform: `translateX(${v.x}px)`
                }
              },
              children: E.jsx("img", {
                alt: "",
                src: m,
                style: {
                  width: t.data.sliderOrientation === "horizontal" ? t.data.iconSizeEnd || "24px" : t.data.iconSizeStart || "24px",
                  ...ii(m, t.data.sliderOrientation === "horizontal" ? C : w)
                }
              })
            })
          ]
        }) : null
      ]
    });
  };
  class ta extends Pw {
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
              ...Na()
            ]
          },
          {
            name: "slider",
            label: "group_slider",
            fields: [
              ...jw([
                "number"
              ]),
              ...zw(),
              ...V1()
            ]
          },
          {
            name: "active",
            label: "group_active",
            fields: [
              ...Na({
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
              ...Na({
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
      return ta.getWidgetInfo();
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
      return e.widget.data.noCard || e.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, Gw(this.wrapContent(E.jsx($S, {})), t);
    }
  }
  qS = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: ta
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  MA = function({ dividerText: A = "" }) {
    const e = {
      position: "absolute",
      left: 0,
      width: "100%"
    };
    return E.jsx(de, {
      sx: {
        display: "block",
        pt: 1.5,
        pb: A ? 2 : 1.5
      },
      children: A ? E.jsx(_o, {
        sx: e,
        children: E.jsx(en, {
          sx: {
            opacity: 0.5,
            color: "primary.main"
          },
          variant: "caption",
          children: ta.t(A)
        })
      }) : E.jsx(_o, {
        sx: e
      })
    });
  };
  Na = (A) => {
    const { groupName: e = "", allFields: t = true } = A || {}, r = [
      {
        label: "",
        type: "custom",
        component: () => E.jsx(MA, {
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
        component: () => E.jsx(MA, {
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
        component: () => E.jsx(MA, {
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
        component: () => E.jsx(MA, {
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
        component: () => E.jsx(MA, {
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
        component: () => E.jsx(MA, {})
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
        component: () => E.jsx(MA, {})
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
        component: () => E.jsx(MA, {
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
        component: () => E.jsx(MA, {
          dividerText: "background"
        })
      },
      {
        name: `background${e}`,
        label: "background",
        default: "",
        type: "custom",
        component: (o, i, a, s) => E.jsx(vr, {
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
        component: () => E.jsx(MA, {
          dividerText: "frame_background"
        })
      },
      {
        name: `frameBackground${e}`,
        label: "frame_background",
        default: "",
        type: "custom",
        component: (o, i, a, s) => E.jsx(vr, {
          field: o,
          data: i,
          onDataChange: a
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
  Hr as $,
  ii as A,
  Sm as B,
  MA as C,
  _o as D,
  wp as E,
  bm as F,
  GS as G,
  Pw as H,
  nm as I,
  Na as J,
  jw as K,
  Ev as L,
  Av as M,
  zw as N,
  Gw as O,
  rs as P,
  Xa as Q,
  Ne as R,
  Lw as S,
  en as T,
  hn as U,
  gn as V,
  g0 as W,
  ZS as X,
  Ww as Y,
  W1 as Z,
  of as _,
  __tla,
  DA as a,
  Zl as a0,
  Ir as a1,
  Ja as a2,
  jh as a3,
  nl as a4,
  bd as a5,
  mt as a6,
  YS as a7,
  Al as a8,
  ae as a9,
  XS as aa,
  tl as ab,
  Un as ac,
  As as ad,
  q0 as ae,
  qS as af,
  me as b,
  zd as c,
  CA as d,
  GA as e,
  dl as f,
  NA as g,
  Di as h,
  bA as i,
  E as j,
  nt as k,
  be as l,
  IA as m,
  G0 as n,
  Ot as o,
  la as p,
  Xt as q,
  ot as r,
  hA as s,
  JS as t,
  VA as u,
  at as v,
  PS as w,
  de as x,
  kv as y,
  kl as z
};
